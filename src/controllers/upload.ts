import type { Request } from 'express'
import multer from "multer";

export interface MulterRequest extends Request {
    files: {
        photos?: Express.Multer.File[];
        vetReport?: Express.Multer.File[];
        xrayResults?: Express.Multer.File[];
    };
}

export const upload = multer({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
    storage: multer.diskStorage({
        destination: "uploads/",
        filename: (_req, file, callback) => {
            callback(null, Date.now() + "-" + file.originalname);
        },
    }),
});