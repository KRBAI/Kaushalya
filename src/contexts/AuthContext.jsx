import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

const AuthContext = createContext(null);
const ADMIN_EMAIL = 'krb.mullegama@gmail.com';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  const value = useMemo(() => {
    const isAdmin = Boolean(user?.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase());

    return {
      user,
      loading,
      isAdmin,
      signInWithGoogle: () => signInWithPopup(auth, googleProvider),
      signInWithEmail: (email, password) => signInWithEmailAndPassword(auth, email, password),
      signUpWithEmail: (email, password) => createUserWithEmailAndPassword(auth, email, password),
      resetPassword: (email) => sendPasswordResetEmail(auth, email),
      signOut: () => signOut(auth),
    };
  }, [loading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
