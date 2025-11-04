import admin from 'firebase-admin';
import serviceAccount from '../config/serviceAccountKey.json';
// import serviceAccount from '../config/';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export { admin };