// src/middleware/errorsHandler.ts

import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import {
    AppError,
    BadRequestError,
    ConflictError,
    NotFoundError,
    ForbiddenError,
} from "../errors";

// Prisma Error Mapping Reference: https://www.prisma.io/docs/orm/reference/error-reference
export function errorsHandler(
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) {
    if (res.headersSent) {
        return next(err);
    }

    // ==========================
    // 🧠 ZOD VALIDATION ERRORS
    // ==========================
    if (err instanceof ZodError) {
        const formatted = err.flatten();

        return res.status(400).json({
            status: "error",
            code: "VALIDATION_ERROR",
            message: "Invalid request data",
            errors: {
                fieldErrors: formatted.fieldErrors,
                formErrors: formatted.formErrors,
            },
        });
    }

    // ==========================
    // 🛢️ PRISMA KNOWN ERRORS
    // ==========================
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        let appError: AppError;

        switch (err.code) {
            case "P2000":
                appError = new BadRequestError(
                    "The provided value for a column is too long for the column’s type.",
                    "PRISMA_P2000"
                );
                break;
            case "P2002":
                appError = new ConflictError(
                    `Unique constraint failed on field(s): ${JSON.stringify(err.meta?.target)}`,
                    "PRISMA_P2002"
                );
                break;
            case "P2003":
                appError = new BadRequestError(
                    `Foreign key constraint failed on the field: ${JSON.stringify(err.meta)}`,
                    "PRISMA_P2003"
                );
                break;
            case "P2004":
                appError = new BadRequestError("A constraint failed on the database.", "PRISMA_P2004");
                break;
            case "P2005":
                appError = new BadRequestError(
                    "Invalid value stored in the database for the field.",
                    "PRISMA_P2005"
                );
                break;
            case "P2006":
                appError = new BadRequestError(
                    "The provided value for the field is not valid.",
                    "PRISMA_P2006"
                );
                break;
            case "P2007":
                appError = new BadRequestError("Data validation error.", "PRISMA_P2007");
                break;
            case "P2014":
                appError = new BadRequestError(
                    "The change you are trying to make would violate the required relation.",
                    "PRISMA_P2014"
                );
                break;
            case "P2015":
                appError = new NotFoundError("A related record could not be found.", "PRISMA_P2015");
                break;
            case "P2016":
                appError = new BadRequestError("Query interpretation error.", "PRISMA_P2016");
                break;
            case "P2021":
                appError = new NotFoundError(
                    "Table does not exist in the current database.",
                    "PRISMA_P2021"
                );
                break;
            case "P2025":
                appError = new NotFoundError(
                    "Record not found or operation depends on missing record(s).",
                    "PRISMA_P2025"
                );
                break;
            case "P2027":
                appError = new BadRequestError(
                    "Multiple errors occurred on database transaction.",
                    "PRISMA_P2027"
                );
                break;
            case "P2033":
                appError = new BadRequestError(
                    "A number used in the query does not fit into a 64-bit signed integer.",
                    "PRISMA_P2033"
                );
                break;
            default:
                appError = new AppError(
                    `Unhandled Prisma error: ${err.message}`,
                    500,
                    `PRISMA_${err.code}`
                );
                break;
        }

        return res.status(appError.statusCode).json({
            status: "error",
            code: appError.code,
            message: appError.message,
        });
    }

    // ==========================
    // 🧱 PRISMA INTERNAL / INIT ERRORS
    // ==========================
    if (
        err instanceof Prisma.PrismaClientInitializationError ||
        err instanceof Prisma.PrismaClientValidationError ||
        err instanceof Prisma.PrismaClientRustPanicError
    ) {
        console.error("Prisma Internal Error:", err);
        return res.status(500).json({
            status: "error",
            code: "PRISMA_INTERNAL",
            message: "Database error occurred. Please contact support.",
        });
    }

    // ==========================
    // 🧩 APP-LEVEL ERRORS
    // ==========================
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            code: err.code,
            message: err.message,
        });
    }

    // ==========================
    // ⚠️ UNEXPECTED ERRORS
    // ==========================
    console.error("Unexpected Error:", err);
    return res.status(500).json({
        status: "error",
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong. Please try again later.",
    });
}
