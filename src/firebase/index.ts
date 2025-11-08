import admin from 'firebase-admin';
import { env } from '../config'

if (!admin.apps.length) {
  const serviceAccount = env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


const getUserFromToken = async (token?: string) => {
  if (!token) return null;
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return { uid: decoded.uid, email: decoded.email, role: decoded.role || 'USER' };
  } catch (e) {
    return null;
  }
}

export { admin, getUserFromToken };