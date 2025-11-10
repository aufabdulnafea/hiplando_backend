// // src/utils/logger.ts
// import pino from "pino";

// export const logger = pino({
//     level: process.env.NODE_ENV === "production" ? "info" : "debug",
//     ...(process.env.NODE_ENV !== "production"
//         ? {
//             transport: {
//                 target: "pino-pretty",
//                 options: {
//                     colorize: true,
//                     translateTime: "SYS:standard",
//                     ignore: "pid,hostname",
//                 },
//             },
//         }
//         : {}),
// });


import pino from "pino";

const isProd = process.env.NODE_ENV === "production";

export const logger = pino({
    level: isProd ? "info" : "debug",
    // Redact sensitive paths in objects that Pino logs
    // censor replaces the value with string '[REDACTED]'
    redact: {
        paths: [
            "req.headers.authorization",
            "req.headers.cookie",
            "req.headers.cookie.*",
            "res.headers['set-cookie']",
            "req.body.password",
            "req.body.newPassword",
            "req.body.confirmPassword",
            "req.body.token",
            "req.body.creditCard",
            "req.body.cardNumber",
            "req.body.cvv",
            "req.body.ssn",
            "user.email" // if you attach user object to logs
        ],
        censor: "[REDACTED]"
    },

    // pretty only in non-production
    ...(isProd ? {} : { transport: { target: "pino-pretty", options: { colorize: true, ignore: "pid,hostname" } } }),
});
