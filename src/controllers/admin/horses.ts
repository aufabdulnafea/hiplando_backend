import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../../context';

// ==========================
// 🔧 Helpers & Schemas
// ==========================

const parseName = (name: string): string => name.trim().toLowerCase();

const nameSchema = z.object({
    name: z.string().trim().min(1, 'Name is required'),
});

const idParamSchema = z.object({
    id: z.string().min(1, 'ID is required'),
});

// ==========================
// 🐴 Horse Category
// ==========================

export async function postHorseCategory(req: Request, res: Response) {
    const { body, files } = req;
    const { name } = nameSchema.parse(body);
    const image = (files as any)?.image?.[0];

    if (!image) {
        throw new Error('Image is required');
    }

    const category = await prisma.horseCategory.create({
        data: {
            name: parseName(name),
            imageUrl: `http://localhost:4000/${image.filename}`,
        },
    });

    return res.status(201).json(category);
}

export async function deleteHorseCategory(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);

    const category = await prisma.horseCategory.delete({
        where: { id },
    });

    return res.json(category);
}

export async function patchHorseCategory(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);
    const { name } = nameSchema.parse(req.body);
    const image = (req.files as any)?.image?.[0];

    const updateData: Record<string, string> = {
        name: parseName(name),
    };

    if (image) {
        updateData.imageUrl = `http://localhost:4000/${image.filename}`;
    }

    const category = await prisma.horseCategory.update({
        where: { id },
        data: updateData,
    });

    return res.json(category);
}

// ==========================
// 🚹 Horse Gender
// ==========================

export async function postHorseGender(req: Request, res: Response) {
    const { name } = nameSchema.parse(req.body);

    const gender = await prisma.horseGender.create({
        data: { name: parseName(name) },
    });

    return res.status(201).json(gender);
}

export async function deleteHorseGender(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);

    const gender = await prisma.horseGender.delete({
        where: { id },
    });

    return res.json(gender);
}

export async function patchHorseGender(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);
    const { name } = nameSchema.parse(req.body);

    const gender = await prisma.horseGender.update({
        where: { id },
        data: { name: parseName(name) },
    });

    return res.json(gender);
}

// ==========================
// 🏇 Horse Discipline
// ==========================

export async function postHorseDiscipline(req: Request, res: Response) {
    const { name } = nameSchema.parse(req.body);

    const discipline = await prisma.horseDiscipline.create({
        data: { name: parseName(name) },
    });

    return res.status(201).json(discipline);
}

export async function deleteHorseDiscipline(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);

    const discipline = await prisma.horseDiscipline.delete({
        where: { id },
    });

    return res.json(discipline);
}

export async function patchHorseDiscipline(req: Request, res: Response) {
    const { id } = idParamSchema.parse(req.params);
    const { name } = nameSchema.parse(req.body);

    const discipline = await prisma.horseDiscipline.update({
        where: { id },
        data: { name: parseName(name) },
    });

    return res.json(discipline);
}
