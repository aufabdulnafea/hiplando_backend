import { PrismaClient } from '@prisma/client';
import { getUserFromToken } from './firebase'

export const prisma = new PrismaClient();

export type Context = {
    prisma: PrismaClient;
    user: any
};

export async function createContext({ req }: any): Promise<Context> {
    console.log(req.headers.authorization)
    const authHeader = req.headers.authorization || ''
    const token = authHeader.replace("Bearer ", "")
    const user = await getUserFromToken(token)
    console.log("user", user)
    return { prisma, user };
}
