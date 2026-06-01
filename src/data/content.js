import { doc, getDoc, getDocFromServer, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';
import { defaultContent } from './defaultContent';
import { uploadDataUrlToDrive } from '../lib/imageFiles';

const legacyContentDocument = doc(firestore, 'site', 'content');
const coreContentDocument = doc(firestore, 'site', 'coreContent');
const postsContentDocument = doc(firestore, 'site', 'posts');
const certificatesContentDocument = doc(firestore, 'site', 'certificates');

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

async function saveNormalizedContent(patch, options = {}, path = 'content', documentReference = coreContentDocument) {
  const normalizedPatch = await normalizeImageValue(patch, options, path);

  await setDoc(
    documentReference,
    {
      ...normalizedPatch,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

async function ensureDocumentWithDefaults(documentReference, defaults) {
  const snapshot = await getDoc(documentReference);

  if (!snapshot.exists()) {
    await setDoc(documentReference, {
      ...defaults,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

function splitLegacyContent(content) {
  return {
    core: {
      site: content.site,
      hero: content.hero,
      heroStats: content.heroStats,
      featuredProjects: content.featuredProjects || [],
      education: content.education || [],
      skills: content.skills || [],
      about: content.about,
      aboutImage: content.aboutImage,
    },
    posts: {
      spotlight: content.spotlight,
      articles: content.articles || [],
    },
    certificates: {
      certifications: content.certifications || [],
    },
  };
}

async function migrateLegacyContentIfNeeded() {
  const [legacySnapshot, coreSnapshot, postsSnapshot, certificatesSnapshot] = await Promise.all([
    getDoc(legacyContentDocument),
    getDoc(coreContentDocument),
    getDoc(postsContentDocument),
    getDoc(certificatesContentDocument),
  ]);

  if (!legacySnapshot.exists()) {
    return;
  }

  const legacyContent = legacySnapshot.data() || {};
  const splitContent = splitLegacyContent({ ...defaultContent, ...legacyContent });
  const writes = [];

  if (!coreSnapshot.exists()) {
    writes.push(
      setDoc(coreContentDocument, {
        ...splitContent.core,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  }

  if (!postsSnapshot.exists()) {
    writes.push(
      setDoc(postsContentDocument, {
        ...splitContent.posts,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  }

  if (!certificatesSnapshot.exists()) {
    writes.push(
      setDoc(certificatesContentDocument, {
        ...splitContent.certificates,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    );
  }

  await Promise.all(writes);
}

function mergeContentSnapshots(coreSnapshot, postsSnapshot, certificatesSnapshot) {
  const coreContent = coreSnapshot.exists() ? coreSnapshot.data() || {} : defaultContent;
  const postsContent = postsSnapshot.exists() ? postsSnapshot.data() || {} : defaultContent;
  const certificatesContent = certificatesSnapshot.exists() ? certificatesSnapshot.data() || {} : defaultContent;

  return {
    ...defaultContent,
    ...coreContent,
    ...postsContent,
    ...certificatesContent,
    site: coreContent.site || defaultContent.site,
    hero: coreContent.hero || defaultContent.hero,
    heroStats: coreContent.heroStats || defaultContent.heroStats,
    featuredProjects: coreContent.featuredProjects || defaultContent.featuredProjects,
    education: coreContent.education || defaultContent.education,
    skills: coreContent.skills || defaultContent.skills,
    about: coreContent.about || defaultContent.about,
    aboutImage: coreContent.aboutImage || defaultContent.aboutImage,
    spotlight: postsContent.spotlight || defaultContent.spotlight,
    articles: postsContent.articles || defaultContent.articles,
    certifications: certificatesContent.certifications || defaultContent.certifications,
  };
}

async function loadServerContentSnapshot(documentReference, fallbackDefaults) {
  try {
    const snapshot = await getDocFromServer(documentReference);

    if (snapshot.exists()) {
      return snapshot;
    }
  } catch {
    // Fall back to cached or local data below.
  }

  try {
    return await getDoc(documentReference);
  } catch {
    return { exists: () => false, data: () => fallbackDefaults, metadata: { fromCache: false } };
  }
}

export async function loadSiteContentFromServer() {
  const [coreSnapshot, postsSnapshot, certificatesSnapshot] = await Promise.all([
    loadServerContentSnapshot(coreContentDocument, splitLegacyContent(defaultContent).core),
    loadServerContentSnapshot(postsContentDocument, splitLegacyContent(defaultContent).posts),
    loadServerContentSnapshot(certificatesContentDocument, splitLegacyContent(defaultContent).certificates),
  ]);

  return mergeContentSnapshots(coreSnapshot, postsSnapshot, certificatesSnapshot);
}

export async function ensureSiteContent() {
  await migrateLegacyContentIfNeeded();
  await Promise.all([
    ensureDocumentWithDefaults(coreContentDocument, splitLegacyContent(defaultContent).core),
    ensureDocumentWithDefaults(postsContentDocument, splitLegacyContent(defaultContent).posts),
    ensureDocumentWithDefaults(certificatesContentDocument, splitLegacyContent(defaultContent).certificates),
  ]);
}

export function subscribeToSiteContent(callback) {
  const unsubscribeHandlers = [];
  const snapshots = {
    core: null,
    posts: null,
    certificates: null,
  };

  const emit = () => {
    if (!snapshots.core || !snapshots.posts || !snapshots.certificates) {
      return;
    }

    if (snapshots.core.metadata?.fromCache || snapshots.posts.metadata?.fromCache || snapshots.certificates.metadata?.fromCache) {
      return;
    }

    callback(mergeContentSnapshots(snapshots.core, snapshots.posts, snapshots.certificates));
  };

  unsubscribeHandlers.push(
    onSnapshot(
      coreContentDocument,
      { includeMetadataChanges: true },
      (snapshot) => {
        snapshots.core = snapshot;
        emit();
      },
      () => {
        snapshots.core = { exists: () => false, data: () => ({}) };
        emit();
      }
    )
  );

  unsubscribeHandlers.push(
    onSnapshot(
      postsContentDocument,
      { includeMetadataChanges: true },
      (snapshot) => {
        snapshots.posts = snapshot;
        emit();
      },
      () => {
        snapshots.posts = { exists: () => false, data: () => ({}) };
        emit();
      }
    )
  );

  unsubscribeHandlers.push(
    onSnapshot(
      certificatesContentDocument,
      { includeMetadataChanges: true },
      (snapshot) => {
        snapshots.certificates = snapshot;
        emit();
      },
      () => {
        snapshots.certificates = { exists: () => false, data: () => ({}) };
        emit();
      }
    )
  );

  return () => {
    unsubscribeHandlers.forEach((unsubscribe) => unsubscribe());
  };
}

export async function saveSiteContent(content, options = {}) {
  const normalizedContent = await normalizeContentForSave(content, options);

  await setDoc(
    coreContentDocument,
    {
      ...normalizedContent,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function savePostsContent(content, options = {}) {
  const patch = {
    articles: content.articles || [],
    spotlight: content.spotlight,
  };

  await saveNormalizedContent(patch, options, 'posts', postsContentDocument);
}

export async function saveCertificatesContent(content, options = {}) {
  const patch = {
    certifications: content.certifications || [],
  };

  await saveNormalizedContent(patch, options, 'certificates', certificatesContentDocument);
}

export async function saveOtherContent(content, options = {}) {
  const patch = {
    site: content.site,
    hero: content.hero,
    heroStats: content.heroStats,
    featuredProjects: content.featuredProjects || [],
    education: content.education || [],
    skills: content.skills || [],
    about: content.about,
    aboutImage: content.aboutImage,
  };

  await saveNormalizedContent(patch, options, 'other-content', coreContentDocument);
}
