import { GraphQLError } from "graphql";
import { Context } from "../context";

export function requireAuth(ctx: Context) {
    if (!ctx.user) {
        throw new GraphQLError("Not authenticated", { extensions: { code: "UNAUTHORIZED" } });
    }
}

export function requireAdmin(ctx: Context) {
    requireAuth(ctx);
    if (ctx.user?.role !== "ADMIN") {
        throw new GraphQLError("Not authorized (admin only)", { extensions: { code: "FORBIDDEN" } });
    }
}

export function assertOwnerOrAdmin(ctx: Context, uid: string) {
    requireAuth(ctx);
    if (ctx.user?.role === "ADMIN") return;
    if (ctx.user?.uid !== uid) {
        throw new GraphQLError("Not authorized (not owner)", { extensions: { code: "FORBIDDEN" } });
    }
}