import { useEffect, useMemo, useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

const views = {
  home: HomePage,
  blog: BlogPage,
  about: AboutPage,
};

function App() {
  const [activeView, setActiveView] = useState(() => {
    return window.localStorage.getItem('kaushalya-view') || 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const CurrentPage = useMemo(() => views[activeView] ?? HomePage, [activeView]);

  useEffect(() => {
    window.localStorage.setItem('kaushalya-view', activeView);
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [activeView]);

  const handleNavigate = (view) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <BackgroundCanvas />
      <Header
        activeView={activeView}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={handleNavigate}
        onToggleMenu={() => setMobileMenuOpen((isOpen) => !isOpen)}
      />
      <main className="page-shell">
        <CurrentPage onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;