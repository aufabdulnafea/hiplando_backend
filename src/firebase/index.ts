import admin from 'firebase-admin';
import { env } from '../config'

if (!admin.apps.length) {
  const serviceAccount = env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin };