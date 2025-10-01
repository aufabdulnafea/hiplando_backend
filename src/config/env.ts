// env.ts
import { z } from "zod";
import dotenv from "dotenv";

// Load .env file into process.env
dotenv.config();

// Define schema for required env variables
const envSchema = z.object({
    // FIREBASE_API_KEY: z.string().min(1),
    // FIREBASE_AUTH_DOMAIN: z.string().min(1),
    // FIREBASE_PROJECT_ID: z.string().min(1),
    // FIREBASE_STORAGE_BUCKET: z.string().min(1),
    // FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
    // FIREBASE_APP_ID: z.string().min(1),
    // FIREBASE_MEASUREMENT_ID: z.string().min(1),
    DATABASE_URL: z.string().url(),
    PORT: z
        .string()
        .transform(Number)
        .refine((val) => !isNaN(val) && val > 0, "PORT must be a valid number"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}

// Export validated env object
export const env = parsed.data;
