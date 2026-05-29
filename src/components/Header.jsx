import { navItems } from '../data/siteContent';

function Header({ activeView, mobileMenuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button className="brand-mark" type="button" onClick={() => onNavigate('home')}>
          Kaushalya
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