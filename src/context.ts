import { PrismaClient, type User } from '@prisma/client';
import { getUserFromToken } from './firebase'
// import { DecodedIdToken } from 'firebase-admin/auth';

export const prisma = new PrismaClient();

export type Context = {
    prisma: PrismaClient;
    user: User | null
};

export async function createContext({ req }: any): Promise<Context> {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.replace("Bearer ", "")
    const user = await getUserFromToken(token)
    return { prisma, user };
}
