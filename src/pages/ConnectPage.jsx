import { useMemo } from 'react';
import { useContent } from '../contexts/ContentContext';
import { defaultContent } from '../data/defaultContent';

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

function ConnectPage() {
  const { content } = useContent();
  const site = content.site || defaultContent.site;
  const socialLinks = useMemo(() => mergeSocialLinks(site.socialLinks, defaultContent.site.socialLinks), [site.socialLinks]);
  const contact = {
    ...(defaultContent.site.contactDetails || {}),
    ...(site.contactDetails || {}),
  };
  const websiteUrl = 'https://kaushalyamullegama.netlify.app/';

  const downloadVCard = () => {
    const lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${site.title || 'Kaushalya'}`,
      contact.email ? `EMAIL;TYPE=INTERNET:${contact.email}` : '',
      contact.phone ? `TEL;TYPE=CELL:${contact.phone}` : '',
      contact.location ? `ADR;TYPE=WORK:;;${contact.location};;;;` : '',
      `URL;TYPE=Website:${websiteUrl}`,
      ...socialLinks
        .map((item) => {
          if (!item?.label || !item?.href) return '';
          return `URL;TYPE=${item.label}:${item.href}`;
        })
        .filter(Boolean),
      'END:VCARD',
    ].filter(Boolean);

    const blob = new Blob([lines.join('\n')], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kaushalya-contact.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="connect-page">
      <article className="connect-card">
        <span className="eyebrow">Quick Connect</span>
        <h1>{site.title || 'Kaushalya'}</h1>
        <p className="connect-card__tagline">{site.tagline || 'Portfolio / Engineering / Design'}</p>

        <div className="connect-card__actions">
          <a className="connect-card__button" href={websiteUrl} target="_blank" rel="noreferrer">
            Website
          </a>

          {contact.phone ? (
            <a className="connect-card__button" href={`tel:${contact.phone}`}>
              Call
            </a>
          ) : null}

          {contact.email ? (
            <a className="connect-card__button connect-card__button--primary" href={`mailto:${contact.email}`}>
              Email
            </a>
          ) : null}

          {socialLinks.map((item) => (
            <a key={`${item.label}-${item.href}`} className="connect-card__button" href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}

          <button type="button" className="connect-card__button" onClick={downloadVCard}>
            Add Contact
          </button>
        </div>

        <div className="connect-card__meta">
          <p>
            Website:{' '}
            <a href={websiteUrl} target="_blank" rel="noreferrer" className="connect-card__link">
              {websiteUrl}
            </a>
          </p>
          {contact.phone ? <p>Phone: {contact.phone}</p> : null}
          {contact.location ? <p>Location: {contact.location}</p> : null}
          {contact.email ? <p>Email: {contact.email}</p> : null}
        </div>
      </article>
    </section>
  );
}

export default ConnectPage;