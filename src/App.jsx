import { useEffect, useMemo, useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import { useAuth } from './contexts/AuthContext';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ConnectPage from './pages/ConnectPage';
import CardBuilderPage from './pages/CardBuilderPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const views = {
  home: HomePage,
  blog: BlogPage,
  edit: EditPage,
  about: AboutPage,
  connect: ConnectPage,
  'card-builder': CardBuilderPage,
};

function App() {
  const [activeView, setActiveView] = useState(() => {
    const queryView = new URLSearchParams(window.location.search).get('v');
    if (queryView === 'connect') {
      return 'connect';
    }

    const storedView = window.localStorage.getItem('kaushalya-view');
    if (storedView && storedView !== 'connect') {
      return storedView;
    }

    return 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activeView !== 'connect') {
      window.localStorage.setItem('kaushalya-view', activeView);
    }

    const nextUrl = new URL(window.location.href);
    if (activeView === 'connect') {
      nextUrl.searchParams.set('v', 'connect');
    } else {
      nextUrl.searchParams.delete('v');
    }
    window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);

    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [activeView]);

  const handleNavigate = (view) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <AuthProvider>
      <ContentProvider>
        <AppShell
          activeView={activeView}
          mobileMenuOpen={mobileMenuOpen}
          onNavigate={handleNavigate}
          onToggleMenu={() => setMobileMenuOpen((isOpen) => !isOpen)}
        />
      </ContentProvider>
    </AuthProvider>
  );
}

function AppShell({ activeView, mobileMenuOpen, onNavigate, onToggleMenu }) {
  const { isAdmin, loading, user } = useAuth();

  useEffect(() => {
    if (!loading && activeView === 'edit' && !isAdmin) {
      onNavigate('home');
    }
    if (!loading && activeView === 'card-builder' && (!user || isAdmin)) {
      onNavigate('home');
    }
  }, [activeView, isAdmin, loading, onNavigate, user]);

  const CurrentPage = useMemo(() => views[activeView] ?? HomePage, [activeView]);

  return (
    <div className="app-shell">
      <BackgroundCanvas />
      <Header
        activeView={activeView}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={onNavigate}
        onToggleMenu={onToggleMenu}
      />
      <main className="page-shell">
        <CurrentPage onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default App;