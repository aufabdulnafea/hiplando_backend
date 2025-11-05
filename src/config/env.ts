// env.ts
import { z } from "zod";
import dotenv from "dotenv";

// Load .env file into process.env
dotenv.config();

const envSchema = z.object({
    DATABASE_URL: z.url(),
    PORT: z
        .string()
        .transform(Number)
        .refine((val) => !isNaN(val) && val > 0, "PORT must be a valid number"),

    FIREBASE_SERVICE_ACCOUNT_BASE64: z
        .string()
        .transform((val) => {
            try {
                const decoded = Buffer.from(val, "base64").toString("utf8");
                return JSON.parse(decoded); // returns the service account object
            } catch {
                throw new Error("FIREBASE_SERVICE_ACCOUNT_BASE64 must be valid Base64 JSON");
            }
        }),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}

// Export validated env object
export const env = parsed.data;
