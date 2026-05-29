import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDISBc0pI8dY6CtKf0bcx-IeCVuIZlQUBQ',
  authDomain: 'kaushalyamullegama-0058.firebaseapp.com',
  databaseURL: 'https://kaushalyamullegama-0058-default-rtdb.firebaseio.com',
  projectId: 'kaushalyamullegama-0058',
  storageBucket: 'kaushalyamullegama-0058.firebasestorage.app',
  messagingSenderId: '542900275314',
  appId: '1:542900275314:web:9405bd64f145f44b92daeb',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

isSupported()
  .then((supported) => {
    if (supported) {
      return getAnalytics(firebaseApp);
    }

    return null;
  })
  .catch(() => null);
