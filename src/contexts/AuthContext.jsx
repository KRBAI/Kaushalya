import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

const AuthContext = createContext(null);
const ADMIN_EMAIL = 'krb.mullegama@gmail.com';
const GOOGLE_ACCESS_TOKEN_KEY = 'kaushalya-google-access-token';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [googleAccessToken, setGoogleAccessToken] = useState(() => {
    if (typeof window === 'undefined') return '';

    return window.sessionStorage.getItem(GOOGLE_ACCESS_TOKEN_KEY) || '';
  });

  useEffect(() => {
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (googleAccessToken) {
      window.sessionStorage.setItem(GOOGLE_ACCESS_TOKEN_KEY, googleAccessToken);
      return;
    }

    window.sessionStorage.removeItem(GOOGLE_ACCESS_TOKEN_KEY);
  }, [googleAccessToken]);

  const value = useMemo(() => {
    const isAdmin = Boolean(user?.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());

    const signInWithGoogle = async () => {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken || '';
      setGoogleAccessToken(accessToken);
      return result;
    };

    return {
      user,
      loading,
      isAdmin,
      googleAccessToken,
      signInWithGoogle,
      signInWithEmail: (email, password) => signInWithEmailAndPassword(auth, email, password),
      signUpWithEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
      resetPassword: (email) => sendPasswordResetEmail(auth, email),
      signOut: async () => {
        setGoogleAccessToken('');
        await signOut(auth);
      },
    };
  }, [googleAccessToken, loading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
