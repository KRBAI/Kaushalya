import { useContent } from '../contexts/ContentContext';
import { defaultContent } from '../data/defaultContent';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 4.97 8.5a2.5 2.5 0 0 1 .01-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54v4.91h-4v-11Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.67c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.3 1.07 2.86.82.09-.64.34-1.07.62-1.31-2.21-.25-4.54-1.1-4.54-4.88 0-1.08.38-1.96 1-2.65-.1-.24-.43-1.23.09-2.56 0 0 .84-.27 2.75 1.01A9.5 9.5 0 0 1 12 7.1c.85 0 1.7.12 2.5.34 1.9-1.28 2.74-1.01 2.74-1.01.52 1.33.2 2.32.1 2.56.62.69 1 1.57 1 2.65 0 3.8-2.33 4.63-4.55 4.88.35.3.67.89.67 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 2.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm5.75-2.2a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21.8 7.2a2.77 2.77 0 0 0-1.95-1.96C18.1 5 12 5 12 5s-6.1 0-7.85.24A2.77 2.77 0 0 0 2.2 7.2 29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .2 4.8 2.77 2.77 0 0 0 1.95 1.96C5.9 19 12 19 12 19s6.1 0 7.85-.24a2.77 2.77 0 0 0 1.95-1.96A29.3 29.3 0 0 0 22 12a29.3 29.3 0 0 0-.2-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

function SocialIcon({ label }) {
  const normalized = label.toLowerCase();

  if (normalized.includes('github')) return <GitHubIcon />;
  if (normalized.includes('instagram')) return <InstagramIcon />;
  if (normalized.includes('youtube')) return <YouTubeIcon />;
  return <LinkedInIcon />;
}

function mergeSocialLinks(primaryLinks = [], fallbackLinks = []) {
  const merged = [...primaryLinks, ...fallbackLinks];
  const seen = new Set();

  return merged.filter((link) => {
    const key = link.href || link.label;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function Footer({ onNavigate }) {
  const { content } = useContent();
  const navItems = content.site?.navItems || [];
  const socialLinks = mergeSocialLinks(content.site?.socialLinks, defaultContent.site.socialLinks);
  const contactDetails = content.site?.contactDetails || {};

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-card">
          <h3>{content.site?.title || 'Kaushalya'}</h3>
          <p>{content.hero?.description || 'Thank you for visiting my portfolio. Let’s connect, collaborate, and build something sharper.'}</p>
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
                <SocialIcon label={link.label} />
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