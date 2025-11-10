
import pinoHttp from "pino-http";
import crypto from "crypto";
import { logger } from "../logger";

// Environment must provide a LOG_SALT used for pseudonymization; keep this secret
const LOG_SALT = process.env.LOG_SALT || "replace-with-secure-random-secret";

// Utility to pseudonymize an IP (HMAC with secret salt)
function pseudonymizeIp(ip?: string | string[]) {
    if (!ip) return undefined;
    // convert IPv6/IPv4 list into string
    const ipStr = Array.isArray(ip) ? ip[0] : ip;
    const h = crypto.createHmac("sha256", LOG_SALT).update(ipStr).digest("hex");
    // short version is enough for correlation: use first 16 chars
    return h.slice(0, 16);
}

export const loggingMiddleware = pinoHttp({
    logger,
    // generate a stable request id per request if you want (or use existing header)
    genReqId: (req) => {
        // If your infra (NGINX, ALB) forwards X-Request-Id, reuse it:
        return (req.headers["x-request-id"] as string) || crypto.randomUUID();
    },
    // Add safe custom properties to each log entry
    customLogLevel: (_req, res, err) => {
        if (res.statusCode >= 500 || err) return "error";
        if (res.statusCode >= 400) return "warn";
        return "info";
    },
    // Provide custom serializers to control what's put in req/res objects
    serializers: {
        req: (req: any) => {
            return {
                id: req.id,
                method: req.method,
                url: req.url,
                params: req.params,
                query: req.query,
                // NEVER include full headers; pino redact configured above will redact Authorization,
                // but we still avoid logging all headers to be safe.
                // If you need some headers for debugging, whitelist them explicitly:
                headers: {
                    "user-agent": req.headers["user-agent"],
                    // don't include authorization, cookie, etc.
                },
                // pseudonymized IP for GDPR correlation without storing raw IP
                pseudoIp: pseudonymizeIp(req.headers["x-forwarded-for"] || req.connection?.remoteAddress),
            };
        },
        res: (res: any) => {
            return {
                statusCode: res.statusCode,
                // avoid logging cookies or set-cookie
            };
        },
    },
    // add a hook to sanitize body or mask fields before logging the request body
    // NOTE: pino-http logs req.body only if you explicitly include it, so be careful to not add it globally.
    // If you must log parts of the body, do it manually and mask sensitive fields.
});
