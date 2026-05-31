import { useEffect, useMemo, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContent } from '../contexts/ContentContext';
import { useAuth } from '../contexts/AuthContext';
import { firestore } from '../lib/firebase';
import AuthButton from './AuthButton';

function initialsFromText(text = '') {
  return String(text)
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 4)
    .toUpperCase();
}

function Header({ activeView, mobileMenuOpen, onNavigate, onToggleMenu }) {
  const { content } = useContent();
  const { user, isAdmin, signInWithGoogle } = useAuth();
  const navItems = [...(content.site?.navItems || [])];
  const [followedIds, setFollowedIds] = useState([]);
  const [pendingAutoFollow, setPendingAutoFollow] = useState(false);

  useEffect(() => {
    const followersQuery = collection(firestore, 'followers');

    return onSnapshot(followersQuery, (snapshot) => {
      setFollowedIds(snapshot.docs.map((entry) => entry.id));
    });
  }, []);

  useEffect(() => {
    if (!pendingAutoFollow || !user) {
      return;
    }

    const followRef = doc(firestore, 'followers', user.uid);

    setDoc(followRef, {
      userId: user.uid,
      displayName: user.displayName || user.email || 'Follower',
      photoURL: user.photoURL || '',
      createdAt: serverTimestamp(),
    })
      .catch(() => null)
      .finally(() => {
        setPendingAutoFollow(false);
      });
  }, [pendingAutoFollow, user]);

  const followerCount = useMemo(() => followedIds.length, [followedIds.length]);
  const isFollowing = Boolean(user && followedIds.includes(user.uid));
  const displayFollowers = useMemo(() => followerCount.toLocaleString(), [followerCount]);

  const toggleFollow = async () => {
    if (!user) {
      setPendingAutoFollow(true);
      try {
        await signInWithGoogle();
      } catch (error) {
        setPendingAutoFollow(false);
      }
      return;
    }

    const followRef = doc(firestore, 'followers', user.uid);

    if (isFollowing) {
      await deleteDoc(followRef);
      return;
    }

    await setDoc(followRef, {
      userId: user.uid,
      displayName: user.displayName || user.email || 'Follower',
      photoURL: user.photoURL || '',
      createdAt: serverTimestamp(),
    });
  };

  if (isAdmin && !navItems.some((item) => item.id === 'edit')) {
    navItems.push({ id: 'edit', label: 'Edit' });
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand-lockup">
          <div className="brand-lockup__row">
            <button className="brand-mark" type="button" onClick={() => onNavigate('home')}>
              {content.site?.title || 'Kaushalya'}
            </button>
            <button
              type="button"
              className={`follow-button ${isFollowing ? 'is-following' : ''}`}
              onClick={toggleFollow}
            >
              {isFollowing ? 'Following' : user ? 'Follow' : 'Follow'}
            </button>
          </div>
          <span className="brand-lockup__meta">{displayFollowers} followers</span>
        </div>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeView === item.id ? 'is-active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <AuthButton />
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mobile-nav__link ${activeView === item.id ? 'is-active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;