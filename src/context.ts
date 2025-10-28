import { PrismaClient } from './lib/prisma/client.js';

export const prisma = new PrismaClient();

export type Context = {
    prisma: PrismaClient;
};

export function createContext(): Context {
    return { prisma };
}
