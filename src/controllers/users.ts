
import type { Request, Response, NextFunction } from 'express'
import { DecodedIdToken } from 'firebase-admin/auth'
import { prisma } from '../context'

// TODO: add zod schema for validation

export async function register(req: Request, res: Response, _: NextFunction) {
    const { full_name } = req.body
    const { uid, email, phone_number } = req.user as DecodedIdToken

    const numberOfUsers = await prisma.user.count()

    let user = await prisma.user.findUnique({ where: { uid } })
    if (user === null) {
        user = await prisma.user.create({
            data: {
                uid,
                name: full_name,
                email,
                phoneNumber: phone_number,
                role: numberOfUsers === 0 ? 'admin' : 'user'
            }
        })
    }
    return res.status(200).json({ user })

}