import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

export function subscribeToComments(postId, callback, onError) {
  const commentsQuery = query(collection(firestore, 'posts', postId, 'comments'), orderBy('createdAt', 'asc'));

  return onSnapshot(
    commentsQuery,
    (snapshot) => {
      callback(
        snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }))
      );
    },
    (error) => {
      console.error('Comment subscription failed:', error);
      if (onError) {
        onError(error);
      }
      callback([]);
    }
  );
}

export async function addComment(postId, comment) {
  await addDoc(collection(firestore, 'posts', postId, 'comments'), {
    ...comment,
    createdAt: serverTimestamp(),
  });
}

export async function removeComment(postId, commentId) {
  await deleteDoc(doc(firestore, 'posts', postId, 'comments', commentId));
}
