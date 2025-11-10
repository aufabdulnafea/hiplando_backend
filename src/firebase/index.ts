import admin from 'firebase-admin';
import { env } from '../config'
import { prisma } from '../context';
import type { User } from '@prisma/client';

if (!admin.apps.length) {
  const serviceAccount = env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


const getUserFromToken = async (token?: string): Promise<User | null> => {
  if (!token) return null;
  try {
    const { email } = await admin.auth().verifyIdToken(token);
    if (email === undefined) return null
    const user = await prisma.user.findUnique({ where: { email } })
    return user
  } catch (e) {
    return null;
  }
}

export { admin, getUserFromToken };