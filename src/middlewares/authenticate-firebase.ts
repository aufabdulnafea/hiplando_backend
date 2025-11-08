import { admin } from '../firebase'
import type { Request, Response, NextFunction } from 'express'

export async function authenticateFirebase(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401).send("No token provided")

    const token = authHeader.split(" ")[1]

    try {
        const decodedToken = await admin.auth().verifyIdToken(token)
        req.user = decodedToken
        next()
    } catch (err) {
        res.status(401).send("Invalid token")
    }
}