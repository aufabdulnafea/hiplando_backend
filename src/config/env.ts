// env.ts
import { z } from "zod";
import dotenv from "dotenv";

// Load .env file into process.env
dotenv.config();

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    PORT: z
        .string()
        .transform(Number)
        .refine((val) => !isNaN(val) && val > 0, "PORT must be a valid number"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}

// Export validated env object
export const env = parsed.data;
