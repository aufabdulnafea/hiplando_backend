import type { Context } from '../context.js';
import { Prisma } from '@prisma/client'

type HorseStatus = 'pending' | 'published' | 'sold';

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
                    gender: true,
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

        horseGenders: async (_: unknown, __: unknown, ctx: Context) => {
            return ctx.prisma.horseGender.findMany()
        },

        horseDisciplines: async (_: unknown, __: unknown, ctx: Context) => {
            return ctx.prisma.horseDiscipline.findMany()
        },

        users: (_: unknown, __: unknown, ctx: Context) => ctx.prisma.user.findMany(),
        user: (_: unknown, args: { id: string }, ctx: Context) => {
            return ctx.prisma.user.findUnique({ where: { id: args.id } })
        }
    },

    Mutation: {
        // --------- Horse ------------
        createHorse: async (_: unknown, { data }: { data: any }, ctx: Context) => {
            return ctx.prisma.horse.create({ data });
        },

        updateHorse: async (_: unknown, { id, data }: { id: string; data: Prisma.HorseUpdateInput }, ctx: Context) => {
            return ctx.prisma.horse.update({
                where: { id },
                data,
            });
        },
        deleteHorse: async (_: unknown, { id }: { id: string }, ctx: Context) => {
            return ctx.prisma.horse.delete({ where: { id } });
        },
        // ----------- User --------------

        updateUser: async (_: unknown, { id, data }: { id: string; data: Prisma.UserUpdateInput }, ctx: Context) => {
            return ctx.prisma.user.update({
                where: { id },
                data,
            });
        },
        createUser: async (_: unknown, { data }: { data: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.user.create({ data })
        },

        // --------- Category -----------
        createHorseCategory: async (_: unknown, { data }: { data: Prisma.HorseCategoryCreateInput | Prisma.HorseCategoryUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseCategory.create({ data })
        },
        deleteHorseCategory: async (_: unknown, { id }: { id: string }, ctx: Context) => {
            ctx.prisma.horseCategory.delete({ where: { id } });
        },
        // updateHorseCatefory: async (_: unknown, { data, id }: { id: string, data: Prisma.HorseCategoryUpdateInput }, ctx: Context) => {
        //     return ctx.prisma.horseCategory.update({ where: { id }, data })
        // },

        // --------- Gender -------------
        createHorseGender: async (_: unknown, { data }: { data: Prisma.HorseGenderCreateInput | Prisma.HorseGenderUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseGender.create({ data });
        },
        deleteHorseGender: async (_: unknown, { id }: { id: string }, ctx: Context) => {
            ctx.prisma.horseGender.delete({ where: { id } });
        },
        // updateHorseGender: async () => { },

        // ---------- Discipline -----------
        createHorseDiscipline: async (_: unknown, { data }: { data: Prisma.HorseDisciplineCreateInput | Prisma.HorseDisciplineUncheckedCreateInput }, ctx: Context) => {
            return ctx.prisma.horseDiscipline.create({ data });
        },
        deleteHorseDiscipline: async (_: unknown, { id }: { id: string }, ctx: Context) => {
            return ctx.prisma.horseDiscipline.delete({ where: { id } });
        },
        // updateHorseDiscipline: async (_: unknown, { id, data }: { id: string, data: Prisma.HorseDisciplineUpdateInput }, ctx: Context) => {
        //     return ctx.prisma.horseDiscipline.update({ where: { id }, data })
        // }
    },
};


