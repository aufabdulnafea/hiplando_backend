import type { Context } from '../context.js';
import { Prisma } from '@prisma/client'

type HorseStatus = 'pending' | 'published' | 'sold';

type UpdateHorseInput = {
    name?: string;
    pedigree?: string;
    age?: number;
    height?: number;
    location?: string;
    description?: string;
    status?: HorseStatus;
    videoUrl?: string;
    categoryId?: string;
    sexId?: string;
    price?: number;
    disciplineId?: string;
    veterinaryDocumentAvailable?: boolean;
    xrayResultsAvailable?: boolean;
};

type UpdateUserInput = {
    email?: string;
    phoneNumber?: string;
    whatsAppNumber?: string;
    role?: string;
    verifiedSeller?: boolean;
};

export const resolvers = {
    Query: {
        horses: async (_: unknown, args: { status?: HorseStatus }, ctx: Context) => {
            return ctx.prisma.horse.findMany({
                where: args.status ? { status: args.status } : {}
            });
        },

        horse: async (_: unknown, args: { id: string }, ctx: Context) => {
            return ctx.prisma.horse.findUnique({
                where: { id: args.id },
                include: {
                    category: true,
                    sex: true,
                    discipline: true,
                    images: true,
                    vetReport: true,
                    xrayResults: true,
                    user: true,
                },
            });
        },

        horseCategories: async (_: unknown, __: unknown, ctx: Context) => {
            return ctx.prisma.horseCategory.findMany()
        },

        horseSexes: async (_: unknown, __: unknown, ctx: Context) => {
            return ctx.prisma.horseSex.findMany()
        },

        horseDisciplines: async (_: unknown, __: unknown, ctx: Context) => {
            return ctx.prisma.horseDiscipline.findMany()
        },

        users: (_: unknown, __: unknown, ctx: Context) => ctx.prisma.user.findMany(),

        user: (_: unknown, args: { id: string }, ctx: Context) =>
            ctx.prisma.user.findUnique({ where: { id: args.id } }),
    },

    Mutation: {
        createHorse: async (_: unknown, { data }: { data: any }, ctx: Context) => {
            return ctx.prisma.horse.create({ data });
        },

        updateHorse: async (
            _: unknown,
            { id, data }: { id: string; data: UpdateHorseInput },
            ctx: Context
        ) => {
            return ctx.prisma.horse.update({
                where: { id },
                data,
            });
        },

        deleteHorse: async (_: unknown, { id }: { id: string }, ctx: Context) => {
            return ctx.prisma.horse.delete({ where: { id } });
        },

        updateUser: async (
            _: unknown,
            { id, data }: { id: string; data: UpdateUserInput },
            ctx: Context
        ) => {

            return ctx.prisma.user.update({
                where: { id },
                data,
            });
        },
        createUser: async (_: unknown, { data }: { data: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.user.create({
                data
            })
        },
        createHorseCategory: async (_: unknown, { data }: { data: Prisma.HorseCategoryCreateInput | Prisma.HorseCategoryUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseCategory.create({
                data
            })
        },
        createHorseSex: async (_: unknown, { data }: { data: Prisma.HorseSexCreateInput | Prisma.HorseSexUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseSex.create({
                data
            })
        },
        createHorseDiscipline: async (_: unknown, { data }: { data: Prisma.HorseDisciplineCreateInput | Prisma.HorseDisciplineUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseDiscipline.create({
                data
            })
        },
    },
};


