import type { Request, Response, NextFunction } from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import multer, { Multer } from 'multer';
import sharp, { Metadata } from 'sharp';
import { randomUUID } from 'node:crypto';

// ============================
// Configuration
// ============================

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const IMAGE_QUALITY = 80;
const ALLOWED_FORMATS = ['jpeg', 'png', 'webp', 'tiff'];
const CONCURRENCY = 5; // Number of parallel images

// ============================
// Utility Functions
// ============================

async function ensureUploadDir(): Promise<void> {
    try {
        await fs.mkdir(UPLOAD_DIR, { recursive: true });
    } catch (err) {
        console.error('Failed to ensure upload directory exists:', err);
        throw new Error('Upload directory creation failed');
    }
}

// ============================
// Main Middleware
// ============================

export async function processImages(
    req: Request,
    _res: Response,
    next: NextFunction
): Promise<void> {
    if (!req.files) return next();

    await ensureUploadDir();

    const allFiles: Express.Multer.File[] = Object.values(
        req.files as Record<string, Express.Multer.File[]>
    ).flat();

    // Let sharp use multiple threads
    sharp.concurrency(CONCURRENCY);

    // Process in batches to avoid memory spike
    const batches: Express.Multer.File[][] = [];
    for (let i = 0; i < allFiles.length; i += CONCURRENCY) {
        batches.push(allFiles.slice(i, i + CONCURRENCY));
    }

    for (const batch of batches) {
        await Promise.all(
            batch.map(async (file) => {
                // Validate image
                let metadata: Metadata;
                try {
                    metadata = await sharp(file.buffer).metadata();
                } catch {
                    throw new Error(`Invalid image file: ${file.originalname}`);
                }

                if (!metadata.format || !ALLOWED_FORMATS.includes(metadata.format)) {
                    throw new Error(`Unsupported image format: ${metadata.format}`);
                }

                // Generate unique filename
                const outputName = `${randomUUID()}.webp`;
                const outputPath = path.join(UPLOAD_DIR, outputName);

                // Resize and convert to WebP
                await sharp(file.buffer)
                    .resize({
                        width: Math.min(metadata.width ?? MAX_WIDTH, MAX_WIDTH),
                        height: Math.min(metadata.height ?? MAX_HEIGHT, MAX_HEIGHT),
                        fit: 'inside',
                        withoutEnlargement: true,
                    })
                    .webp({ quality: IMAGE_QUALITY })
                    .toFile(outputPath);

                // Update file info for downstream middleware
                file.originalname = outputName;
                file.filename = outputName;
                file.path = outputPath;
                file.mimetype = 'image/webp';
            })
        );
    }

    next();
}

// ============================
// Typed Multer Upload Config
// ============================

export interface MulterRequest extends Request {
    files: {
        photos?: Express.Multer.File[];
        vetReport?: Express.Multer.File[];
        xrayResults?: Express.Multer.File[];
    };
}

export const upload: Multer = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
    fileFilter: (_req, file, callback) => {
        if (!file.mimetype.startsWith('image/')) {
            return callback(new Error('Only image files are allowed'));
        }
        callback(null, true);
    },
});
