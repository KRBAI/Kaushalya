import { contactDetails, navItems, socialLinks } from '../data/siteContent';

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-card">
          <h3>Kaushalya</h3>
          <p>Thank you for visiting my portfolio. Let’s connect, collaborate, and build something sharper.</p>
        </div>

        <div className="footer-card">
          <h4>Quick Menu</h4>
          <div className="footer-links">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-card">
          <h4>Contact</h4>
          <ul>
            <li>{contactDetails.location}</li>
            <li>{contactDetails.email}</li>
          </ul>
        </div>

        <div className="footer-card">
          <h4>Socials</h4>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bar">&copy; 2026 Kaushalya Mullegama | All Rights Reserved</div>
    </footer>
  );
}

export default Footer;