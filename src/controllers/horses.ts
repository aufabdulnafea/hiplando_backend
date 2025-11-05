
import type { Request, Response, NextFunction } from 'express'
import { MulterRequest } from './upload'
import { z } from 'zod'
import { prisma } from '../context'

// model Horse {
//     id String @id @default(uuid())
//     userId String
//     user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
//     categoryId String
//     category   HorseCategory @relation(fields: [categoryId], references: [id])
//     name     String
//     pedigree String?
//     age      Int
//     genderId String
//     gender   HorseGender @relation(fields: [genderId], references: [id])
//     height Int
//     disciplineId String
//     discipline   HorseDiscipline @relation(fields: [disciplineId], references: [id])
//     location String
//     price Float
//     description String
//     photos   HorsePhoto[]
//     videoUrl String?
//     vetReport   HorseVetReport?
//     xrayResults HorseXrayResults?
//     status String @default("pending")
//     createdAt       DateTime             @default(now())
//     updatedAt       DateTime             @updatedAt
//     favoriteByUsers UserFavoriteHorses[]
//     @@index([status])
//     @@index([categoryId])
// }





export const horseBodySchema = z.object({
    categoryId: z.uuidv4(),
    name: z.string().min(3).max(40),
    pedigree: z.url().optional(),
    age: z.number().int().positive(),
    genderId: z.uuidv4(),
    height: z.number().positive(),
    disciplineId: z.uuidv4(),
    location: z.string().min(2).max(60),
    price: z.number().positive(),
    description: z.string().min(10).max(2000),
    videoUrl: z.url().optional(),
});

// ✅ validates uploaded files via Multer
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

export async function createHorse(req: Request, res: Response, next: NextFunction) {
    try {
        // ➤ Convert numeric body values first (Zod receives strings via multipart/form-data)
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

        // ➤ Files validation
        const parsedFiles = horseFilesSchema.safeParse({
            photos: mreq.files?.photos || [],
            vetReport: mreq.files?.vetReport?.[0],
            xrayResults: mreq.files?.xrayResults?.[0],
        });

        if (!parsedFiles.success) {
            return res.status(400).json({ errors: parsedFiles.error.format() });
        }

        // ✅ At this point: everything is validated
        const horseData = parsedBody.data;
        const fileData = parsedFiles.data;

        // save files to the database

        await prisma.horse.create({
            data: {
                userUid: req.user?.uid as string,
                ...horseData,
            }
        })


        // TODO: save to DB, upload to cloud storage, etc.
        return res.status(201).json({
            message: "Horse listing successfully created!",
            data: {
                ...horseData,
                files: fileData,
            },
        });
    } catch (err) {
        next(err);
    }
}
