
import type { Request, Response, NextFunction } from 'express'
import { MulterRequest } from './upload'
import { z } from 'zod'
import { prisma } from '../context'

export const horseBodySchema = z.object({
    categoryId: z.uuidv4(),
    name: z.string().min(3, "Name must be at least 3 characters").max(40, "Name too long"),
    pedigree: z.url("Invalid video URL").optional().or(z.literal("")),
    age: z.number().int("Age must be an integer").positive("Age must be positive"),
    genderId: z.uuidv4(),
    height: z.number().positive("Height must be positive"),
    disciplineId: z.uuidv4(),
    location: z.string().min(2, "Location too short").max(60, "Location too long"),
    price: z.number().positive("Price must be positive"),
    description: z.string().max(2000, "Description too long").optional().or(z.literal("")),
    videoUrl: z.url("Invalid video URL").optional().or(z.literal("")),
});

export const horseFilesSchema = z.object({
    photos: z
        .array(z.any())
        .min(1, "At least 1 photo is required")
        .max(3, "Maximum of 3 photos allowed")
        .refine(
            (files) => files.every((f) => f.mimetype.startsWith("image/")),
            "Photos must be valid image files"
        ),
    vetReport: z
        .any()
        .optional()
        .refine(
            (file) =>
                !file ||
                file.mimetype.startsWith("image/") ||
                file.mimetype === "application/pdf",
            "Vet report must be image or PDF"
        ),
    xrayResults: z
        .any()
        .optional()
        .refine(
            (file) =>
                !file ||
                file.mimetype.startsWith("image/") ||
                file.mimetype === "application/pdf",
            "X-ray results must be image or PDF"
        ),
});

export async function createHorse(req: Request, res: Response) {
    const mreq = req as MulterRequest;
    const parsedBody = horseBodySchema.safeParse({
        ...mreq.body,
        age: Number(mreq.body.age),
        height: Number(mreq.body.height),
        price: Number(mreq.body.price),
    });

    if (!parsedBody.success) {
        return res.status(400).json({ errors: parsedBody.error.format() });
    }

    const parsedFiles = horseFilesSchema.safeParse({
        photos: mreq.files?.photos || [],
        vetReport: mreq.files?.vetReport?.[0],
        xrayResults: mreq.files?.xrayResults?.[0],
    });

    if (!parsedFiles.success) {
        return res.status(400).json({ errors: parsedFiles.error.format() });
    }

    const horseData = parsedBody.data;
    const fileData = parsedFiles.data;

    const horse = await prisma.horse.create({
        data: {
            userUid: req.user?.uid as string,
            ...horseData,
            description: horseData.description ?? "",
            photos: fileData.photos.map(el => `http://192.168.0.217:4000/${el.filename}`),
            vetReport: fileData.vetReport ? `http://192.168.0.217/${fileData.vetReport.filename}` : null,
            xrayResults: fileData.xrayResults ? `http://192.168.0.217/${fileData.xrayResults.filename}` : null
        }
    })
    return res.status(201).json(horse);
}

export async function getHorseGenders(req: Request, res: Response) {
    console.log("getHorseGenders")
    const genders = await prisma.horseGender.findMany()
    return res.status(200).json(genders)
}

export async function getHorseCategories(req: Request, res: Response) {
    console.log("getHorseCategories")
    const categories = await prisma.horseCategory.findMany()
    return res.status(200).json(categories)
}

export async function getHorseDisciplines(req: Request, res: Response) {
    console.log("getHorseDisciplines")
    const disciplines = await prisma.horseDiscipline.findMany()
    return res.status(200).json(disciplines)
}
