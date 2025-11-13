import { z } from "zod";
import dotenv from "dotenv";

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
    NEXTJS_PUBLIC_URL: z.string(),
    NEXTJS_REVALIDATE_SECRET: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    process.exit(1);
}

export const env = parsed.data;
