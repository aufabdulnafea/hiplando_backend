import type { Request, Response, NextFunction } from 'express'
import { admin } from '../firebase'

export async function verifyFirebaseToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const idToken = authHeader.split(' ')[1];
    if (!idToken || idToken.trim() === '') {
        return res.status(401).json({ message: 'Missing ID token' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;

        return next();
    } catch (err: any) {
        console.error('Firebase token verification failed:', err);

        if (err.code === 'auth/id-token-expired') {
            return res.status(401).json({ message: 'Token expired, please sign in again' });
        }

        if (err.code === 'auth/argument-error') {
            return res.status(401).json({ message: 'Invalid token format' });
        }

        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
