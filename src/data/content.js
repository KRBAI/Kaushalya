import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { defaultContent } from './defaultContent';

const contentDocument = doc(firestore, 'site', 'content');

export async function ensureSiteContent() {
  const snapshot = await getDoc(contentDocument);

  if (!snapshot.exists()) {
    await setDoc(contentDocument, {
      ...defaultContent,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

export function subscribeToSiteContent(callback) {
  return onSnapshot(
    contentDocument,
    (snapshot) => {
      if (snapshot.exists()) {
        callback({ ...defaultContent, ...snapshot.data() });
        return;
      }

      callback(defaultContent);
    },
    () => callback(defaultContent)
  );
}

export async function saveSiteContent(content) {
  await setDoc(
    contentDocument,
    {
      ...content,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
