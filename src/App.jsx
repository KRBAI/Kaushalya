import { useEffect, useMemo, useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import { useAuth } from './contexts/AuthContext';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const views = {
  home: HomePage,
  blog: BlogPage,
  edit: EditPage,
  about: AboutPage,
};

function App() {
  const [activeView, setActiveView] = useState(() => {
    return window.localStorage.getItem('kaushalya-view') || 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('kaushalya-view', activeView);
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
  const { isAdmin, loading } = useAuth();

  useEffect(() => {
    if (!loading && activeView === 'edit' && !isAdmin) {
      onNavigate('home');
    }
  }, [activeView, isAdmin, loading, onNavigate]);

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