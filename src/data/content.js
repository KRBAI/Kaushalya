import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { defaultContent } from './defaultContent';
import { uploadDataUrlToDrive } from '../lib/imageFiles';

const contentDocument = doc(firestore, 'site', 'content');

function isDataUrl(value) {
  return typeof value === 'string' && value.startsWith('data:image/');
}

async function normalizeImageValue(value, options = {}, path = 'image') {
  if (Array.isArray(value)) {
    const normalizedItems = [];

    for (let index = 0; index < value.length; index += 1) {
      normalizedItems.push(await normalizeImageValue(value[index], options, `${path}-${index + 1}`));
    }

    return normalizedItems;
  }

  if (value && typeof value === 'object') {
    const normalizedObject = {};

    for (const [key, nextValue] of Object.entries(value)) {
      normalizedObject[key] = await normalizeImageValue(nextValue, options, `${path}-${key}`);
    }

    return normalizedObject;
  }

  if (isDataUrl(value)) {
    try {
      return await uploadDataUrlToDrive(value, path, options.googleAccessToken);
    } catch (error) {
      return value;
    }
  }

  return value;
}

async function normalizeContentForSave(content, options = {}) {
  return normalizeImageValue(content, options, 'content');
}

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

export async function saveSiteContent(content, options = {}) {
  const normalizedContent = await normalizeContentForSave(content, options);

  await setDoc(
    contentDocument,
    {
      ...normalizedContent,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
