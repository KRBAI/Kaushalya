import { useContent } from '../contexts/ContentContext';
import AuthButton from './AuthButton';

function Header({ activeView, mobileMenuOpen, onNavigate, onToggleMenu }) {
  const { content } = useContent();
  const navItems = content.site?.navItems || [];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="brand-mark" type="button" onClick={() => onNavigate('home')}>
          {content.site?.title || 'Kaushalya'}
        </button>

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
        <AuthButton />
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