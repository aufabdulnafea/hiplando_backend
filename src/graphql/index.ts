// src/graphql/schema.ts

import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import { PrismaClient, Prisma } from '../lib/prisma/client.js';
import type PrismaTypes from '../lib/pothos-prisma-types.js';
import { getDatamodel } from '../lib/pothos-prisma-types.js';
import { createYoga } from 'graphql-yoga';
import { createContext } from '../context.js';
import { GraphQLDateTime } from 'graphql-scalars';

const prisma = new PrismaClient();

function mapToSet<T extends Record<string, any>>(obj: T) {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined) result[key] = { set: value };
    }
    return result;
}

const builder = new SchemaBuilder<{
    Scalars: {
        DateTime: {
            Input: Date,
            Output: Date
        }
    }
    PrismaTypes: PrismaTypes;
    Context: Awaited<ReturnType<typeof createContext>>;
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma,
        dmmf: getDatamodel(),
    },
});

builder.addScalarType('DateTime', GraphQLDateTime, {});

// ─────────────────────────────────────────────
// Prisma Object Type Definitions
// ─────────────────────────────────────────────

builder.prismaObject('Horse', {
    name: 'Horse',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        name: t.exposeString('name', { nullable: false }),
        age: t.exposeInt('age', { nullable: false }),
        height: t.exposeInt('height'),
        price: t.exposeFloat('price'),
        status: t.exposeString('status'),
        category: t.relation('category'),
        gender: t.relation('gender'),
        discipline: t.relation('discipline'),
        images: t.relation('images'),
        location: t.exposeString('location'),
        user: t.relation('user'),
        description: t.exposeString("description"),
        veterinaryDocumentAvailable: t.exposeBoolean("veterinaryDocumentAvailable"),
        xrayResultsAvailable: t.exposeBoolean("xrayResultsAvailable"),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('HorseCategory', {
    name: 'HorseCategory',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        name: t.exposeString('name'),
        imageUrl: t.exposeString('imageUrl'),
        horses: t.relation('horses'),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('Notification', {
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        userId: t.exposeID('userId'),
        user: t.relation('user'),
        title: t.exposeString('title'),
        message: t.exposeString('message'),
        read: t.exposeBoolean('read'),
        createdAt: t.expose('createdAt', { type: 'DateTime' }),
        updatedAt: t.expose("updatedAt", { type: 'DateTime' })
    })
})

builder.prismaObject('UserFavoriteHorses', {
    name: 'UserFavoriteHorses',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        userId: t.exposeID('userId'),
        horseId: t.exposeID('horseId'),
        user: t.relation('user'),
        horse: t.relation('horse'),
        createdAt: t.expose("createdAt", { type: 'DateTime' })
    })
})

builder.prismaObject('User', {
    name: 'User',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        name: t.exposeString('name'),
        firebaseUid: t.exposeString('firebaseUid'),
        phoneNumber: t.exposeString('phoneNumber'),
        email: t.exposeString('email', { nullable: true }),
        whatsAppNumber: t.exposeString('whatsAppNumber'),
        verifiedSeller: t.exposeBoolean('verifiedSeller'),
        userFavoriteHorses: t.relation("userFavoriteHorses"),
        notifications: t.relation("notifications"),
        role: t.exposeString('role'),
        horses: t.relation('horses'),
        reviews: t.relation('reviews'),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('HorseGender', {
    name: 'HorseGender',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        name: t.exposeString('name'),
        horses: t.relation('horses'),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('HorseDiscipline', {
    name: 'HorseDiscipline',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        name: t.exposeString('name'),
        horses: t.relation('horses'),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('HorseImage', {
    name: 'HorseImage',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        url: t.exposeString('url'),
        horse: t.relation('horse'),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

builder.prismaObject('UserReview', {
    name: 'UserReview',
    fields: (t) => ({
        id: t.exposeID('id', { nullable: false }),
        userId: t.exposeID('userId'),
        user: t.relation('user'),
        reviewer: t.exposeString("reviewer"),
        rating: t.exposeInt("rating"),
        comment: t.exposeString('comment'),
        createdAt: t.expose("createdAt", { type: 'DateTime' }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" })
    }),
});

// ─────────────────────────────────────────────
// Queries
// ─────────────────────────────────────────────

builder.queryType({
    fields: (t) => ({
        horses: t.prismaField({
            type: ['Horse'],
            args: { status: t.arg.string() },
            resolve: (query, _parent, args, ctx) =>
                ctx.prisma.horse.findMany({
                    ...query,
                    where: args.status ? { status: args.status } : {},
                }),
        }),

        horse: t.prismaField({
            type: 'Horse',
            args: { id: t.arg.string({ required: true }) },
            resolve: (query, _parent, args, ctx) =>
                ctx.prisma.horse.findUniqueOrThrow({
                    ...query,
                    where: { id: args.id },
                }),
        }),

        horseCategories: t.prismaField({
            type: ['HorseCategory'],
            resolve: (_query, _parent, _args, ctx) =>
                ctx.prisma.horseCategory.findMany(),
        }),

        horseGenders: t.prismaField({
            type: ['HorseGender'],
            resolve: (_query, _parent, _args, ctx) =>
                ctx.prisma.horseGender.findMany(),
        }),

        horseDisciplines: t.prismaField({
            type: ['HorseDiscipline'],
            resolve: (_query, _parent, _args, ctx) =>
                ctx.prisma.horseDiscipline.findMany(),
        }),

        users: t.prismaField({
            type: ['User'],
            resolve: (_query, _parent, _args, ctx) =>
                ctx.prisma.user.findMany()
        })

    }),
});

// ─────────────────────────────────────────────
// Mutations
// ─────────────────────────────────────────────


const CreateHorseCategoryInput = builder.inputType('CreateHorseCategoryInput', {
    fields: (t) => ({
        name: t.string({ required: true }),
        imageUrl: t.string({ required: true }),
    }),
});
const UpdateHorseCategoryInput = builder.inputType('UpdateHorseCategoryInput', {
    fields: (t) => ({
        id: t.id({ required: true }),
        name: t.string({ required: false }),
        imageUrl: t.string({ required: false }),
    }),
});

const CreateHorseGenderInput = builder.inputType('CreateHorseGenderInput', {
    fields: (t) => ({
        name: t.string({ required: true }),
    }),
});
const UpdateHorseGenderInput = builder.inputType('UpdateHorseGenderInput', {
    fields: (t) => ({
        id: t.id({ required: true }),
        name: t.string({ required: true }),
    }),
});


const CreateHorseDisciplineInput = builder.inputType('CreateHorseDisciplineInput', {
    fields: (t) => ({
        name: t.string({ required: true }),
    }),
});
const UpdateHorseDisciplineInput = builder.inputType('UpdateHorseDisciplineInput', {
    fields: (t) => ({
        id: t.id({ required: true }),
        name: t.string({ required: true }),
    }),
});

builder.mutationType({
    fields: (t) => ({
        // ─────────────── Horse Mutations ───────────────

        createHorse: t.prismaField({
            type: 'Horse',
            args: {
                name: t.arg.string({ required: true }),
                age: t.arg.int({ required: true }),
                height: t.arg.int({ required: true }),
                price: t.arg.float({ required: true }),
                userId: t.arg.string({ required: true }),
                categoryId: t.arg.string({ required: true }),
                genderId: t.arg.string({ required: true }),
                disciplineId: t.arg.string({ required: true }),
                location: t.arg.string({ required: true }),
                description: t.arg.string({ required: true }),
            },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horse.create({
                    ...query,
                    data: { ...args },
                }),
        }),

        updateHorse: t.prismaField({
            type: 'Horse',
            args: {
                id: t.arg.string({ required: true }),
                name: t.arg.string(),
                age: t.arg.int(),
                height: t.arg.int(),
                price: t.arg.float(),
                status: t.arg.string(),
                description: t.arg.string(),
                categoryId: t.arg.string(),
                genderId: t.arg.string(),
                disciplineId: t.arg.string(),
            },
            resolve: async (query, _parent, args, ctx) => {
                const { id, categoryId, genderId, disciplineId, ...rest } = args;

                // Use the `clean()` helper to remove undefined keys
                const data: Prisma.HorseUpdateInput = {
                    ...mapToSet(rest),
                    ...(categoryId && { category: { connect: { id: categoryId } } }),
                    ...(genderId && { gender: { connect: { id: genderId } } }),
                    ...(disciplineId && { discipline: { connect: { id: disciplineId } } }),
                };

                return ctx.prisma.horse.update({
                    ...query,
                    where: { id },
                    data,
                });
            },
        }),

        deleteHorse: t.prismaField({
            type: 'Horse',
            args: { id: t.arg.string({ required: true }) },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horse.delete({
                    ...query,
                    where: { id: args.id },
                }),
        }),

        // ─────────────── Category Mutations ───────────────

        createHorseCategory: t.prismaField({
            type: 'HorseCategory',
            args: {
                data: t.arg({ type: CreateHorseCategoryInput, required: true }),
            },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseCategory.create({
                    ...query,
                    data: args.data,
                }),
        }),

        updateHorseCategory: t.prismaField({
            type: 'HorseCategory',
            args: { data: t.arg({ type: UpdateHorseCategoryInput, required: true }), },
            resolve: async (query, _parent, args, ctx) => {
                const { id, ...rest } = args.data;
                const data: Prisma.HorseCategoryUpdateInput = {
                    ...mapToSet(rest)
                };
                return ctx.prisma.horseCategory.update({
                    ...query,
                    where: { id },
                    data,
                });
            },
        }),

        deleteHorseCategory: t.prismaField({
            type: 'HorseCategory',
            args: { id: t.arg.string({ required: true }) },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseCategory.delete({
                    ...query,
                    where: { id: args.id },
                }),
        }),

        // ─────────────── Gender Mutations ───────────────

        createHorseGender: t.prismaField({
            type: 'HorseGender',
            args: { data: t.arg({ type: CreateHorseGenderInput, required: true }), },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseGender.create({
                    ...query,
                    data: args.data,
                }),
        }),

        updateHorseGender: t.prismaField({
            type: 'HorseGender',
            args: { data: t.arg({ type: UpdateHorseGenderInput, required: true }), },
            resolve: async (query, _parent, args, ctx) => {
                const { id, ...rest } = args.data;
                const data: Prisma.HorseGenderUpdateInput = {
                    ...mapToSet(rest)
                };
                return ctx.prisma.horseGender.update({
                    ...query,
                    where: { id },
                    data,
                });
            },
        }),

        deleteHorseGender: t.prismaField({
            type: 'HorseGender',
            args: { id: t.arg.string({ required: true }) },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseGender.delete({
                    ...query,
                    where: { id: args.id },
                }),
        }),

        // ─────────────── Discipline Mutations ───────────────

        createHorseDiscipline: t.prismaField({
            type: 'HorseDiscipline',
            args: { data: t.arg({ type: CreateHorseDisciplineInput, required: true }), },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseDiscipline.create({
                    ...query,
                    data: args.data,
                }),
        }),

        updateHorseDiscipline: t.prismaField({
            type: 'HorseDiscipline',
            args: { data: t.arg({ type: UpdateHorseDisciplineInput, required: true }), },
            resolve: async (query, _parent, args, ctx) => {
                const { id, ...rest } = args.data;
                const data: Prisma.HorseDisciplineUpdateInput = {
                    ...mapToSet(rest)
                };
                return ctx.prisma.horseDiscipline.update({
                    ...query,
                    where: { id },
                    data,
                });
            },
        }),

        deleteHorseDiscipline: t.prismaField({
            type: 'HorseDiscipline',
            args: { id: t.arg.string({ required: true }) },
            resolve: async (query, _parent, args, ctx) =>
                ctx.prisma.horseDiscipline.delete({
                    ...query,
                    where: { id: args.id },
                }),
        }),
    }),
});

// ─────────────────────────────────────────────
// Schema + Yoga GraphQL Server Setup
// ─────────────────────────────────────────────

const schema = builder.toSchema();
export const yoga = createYoga({ schema, context: createContext, graphiql: true });
