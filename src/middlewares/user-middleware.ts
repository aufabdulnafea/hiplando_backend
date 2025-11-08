import { GraphQLError } from "graphql";

export function requireAuth(ctx: { user: any }) {
    if (!ctx.user) {
        throw new GraphQLError("Not authenticated", { extensions: { code: "UNAUTHORIZED" } });
    }
}

export function requireAdmin(ctx: { user: any }) {
    requireAuth(ctx);
    if (ctx.user.role !== "admin") {
        throw new GraphQLError("Not authorized (admin only)", { extensions: { code: "FORBIDDEN" } });
    }
}

export function assertOwnerOrAdmin(ctx: { user: any }, resourceOwner: string) {
    requireAuth(ctx);
    if (ctx.user.role === "admin") return;
    if (ctx.user.id !== resourceOwner) {
        throw new GraphQLError("Not authorized (not owner)", { extensions: { code: "FORBIDDEN" } });
    }
}