import { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ImageCarousel from '../components/ImageCarousel';
import HeroQrBadge from '../components/HeroQrBadge';
import { getSharePageUrl } from '../lib/shareUrls';
import { slugify } from '../lib/shareUrls';

const HERO_SHARE_IMAGE_URL = '/hero-share-image.png';

const HERO_CARD = {
  portraitUrl: 'https://lh3.googleusercontent.com/d/1FvwL321-8JcOKppYdtYCgp0Pj62Yc1ds',
  qrUrl: 'https://lh3.googleusercontent.com/d/1jvhT1OjC4Ip1E-PxFOH8hsVw_Gx6GOK0',
  website: 'https://kaushalyamullegama.netlify.app/',
  subtitle: 'ELECTRONIC & TELECOMMUNICATION ENGINEERING',
  name: 'Kaushalya Mullegama',
  bio: 'Bridging hardware and software through embedded systems, combat robotics, and full-stack development. Developer of the "Axel" vehicle blackbox.',
  techTitle: 'Core Tech Stack',
  tech: 'ESP32 · React · Firebase · PCB Design',
  projectsTitle: 'Featured Projects',
  projects: '5+ Axels · Battlebots · Arduino Robots',
  emailTitle: 'Email',
  email: 'krb.mullegama@gmail.com',
  phoneTitle: 'Mobile Info',
  phone: 'Scan QR for Direct vCard',
  footerTitle: 'System Links',
  footerText: 'GitHub • LinkedIn • Project Repositories',
};

function escapeXml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxChars, maxLines) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  if (!words.length) return [];

  const lines = [];
  let currentLine = words[0];

  for (let index = 1; index < words.length; index += 1) {
    const nextLine = `${currentLine} ${words[index]}`;
    if (nextLine.length <= maxChars) {
      currentLine = nextLine;
    } else {
      lines.push(currentLine);
      currentLine = words[index];
      if (lines.length >= maxLines - 1) break;
    }
  }

  if (lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines.slice(0, maxLines);
}

function linesToTspans(lines, lineHeight) {
  return lines.map((line, index) => `<tspan x="0" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join('');
}

async function imageSourceToDataUrl(source) {
  if (!source) return '';
  if (String(source).startsWith('data:')) return source;

  try {
    const response = await fetch(source, { mode: 'cors' });
    if (!response.ok) return '';
    const blob = await response.blob();

    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => resolve('');
      reader.readAsDataURL(blob);
    });
  } catch {
    return '';
  }
}

async function createHardcodedHeroShareFile() {
  const [portraitDataUrl, qrDataUrl] = await Promise.all([
    imageSourceToDataUrl(HERO_CARD.portraitUrl),
    imageSourceToDataUrl(HERO_CARD.qrUrl),
  ]);

  const bioLines = wrapText(HERO_CARD.bio, 58, 3);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1050" height="600" viewBox="0 0 1050 600" fill="none">
      <defs>
        <linearGradient id="cardBg" x1="86" y1="22" x2="932" y2="592" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0b1329"/>
          <stop offset="1" stop-color="#020617"/>
        </linearGradient>
        <radialGradient id="glowOne" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(910 40) rotate(130) scale(420 420)">
          <stop stop-color="rgba(79, 70, 229, 0.26)"/>
          <stop offset="1" stop-color="rgba(79, 70, 229, 0)"/>
        </radialGradient>
        <radialGradient id="glowTwo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70 560) rotate(-40) scale(350 350)">
          <stop stop-color="rgba(37, 99, 235, 0.22)"/>
          <stop offset="1" stop-color="rgba(37, 99, 235, 0)"/>
        </radialGradient>
        <clipPath id="cardClip"><rect width="1050" height="600" rx="40"/></clipPath>
        <clipPath id="portraitClip"><rect width="280" height="480" rx="32"/></clipPath>
      </defs>

      <g clip-path="url(#cardClip)">
        <rect width="1050" height="600" rx="40" fill="url(#cardBg)"/>
        <rect width="1050" height="600" fill="url(#glowOne)"/>
        <rect width="1050" height="600" fill="url(#glowTwo)"/>

        <g>
          <rect x="48" y="44" width="166" height="40" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(148,163,184,0.2)"/>
          <text x="131" y="70" text-anchor="middle" fill="#cbd5e1" font-family="Inter, sans-serif" font-size="12" font-weight="800" letter-spacing="3.6">PORTFOLIO CARD</text>
          <text x="1002" y="71" text-anchor="end" fill="#94a3b8" font-family="Inter, sans-serif" font-size="18" font-weight="500">${escapeXml(HERO_CARD.website)}</text>
        </g>

        <g transform="translate(48, 104)">
          <rect x="0" y="0" width="280" height="480" rx="32" fill="#0f172a" stroke="rgba(148,163,184,0.18)"/>
          ${portraitDataUrl ? `<image href="${portraitDataUrl}" x="0" y="0" width="280" height="480" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>` : ''}
        </g>

        <g transform="translate(360, 140)">
          <text x="0" y="0" fill="#60a5fa" font-family="Inter, sans-serif" font-size="12" font-weight="900" letter-spacing="3">${escapeXml(HERO_CARD.subtitle)}</text>
          <text x="0" y="80" fill="#ffffff" font-family="Inter, sans-serif" font-size="56" font-weight="800" letter-spacing="-2.2">Hey, I'm</text>
          <text x="0" y="142" fill="#ffffff" font-family="Inter, sans-serif" font-size="56" font-weight="800" letter-spacing="-2.2">${escapeXml(HERO_CARD.name)}.</text>

          <text x="0" y="196" fill="#cbd5e1" font-family="Inter, sans-serif" font-size="22" font-weight="400">${linesToTspans(bioLines, 32)}</text>

          <g transform="translate(0, 248)">
            <g transform="translate(0, 0)">
              <rect width="220" height="84" rx="18" fill="rgba(15, 23, 42, 0.56)" stroke="rgba(148, 163, 184, 0.14)"/>
              <text x="18" y="26" fill="#93c5fd" font-family="Inter, sans-serif" font-size="12" font-weight="900" letter-spacing="2.4">${escapeXml(HERO_CARD.techTitle)}</text>
              <text x="18" y="53" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="17" font-weight="600">${escapeXml(HERO_CARD.tech)}</text>
            </g>
            <g transform="translate(240, 0)">
              <rect width="220" height="84" rx="18" fill="rgba(15, 23, 42, 0.56)" stroke="rgba(148, 163, 184, 0.14)"/>
              <text x="18" y="26" fill="#93c5fd" font-family="Inter, sans-serif" font-size="12" font-weight="900" letter-spacing="2.4">${escapeXml(HERO_CARD.projectsTitle)}</text>
              <text x="18" y="53" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="17" font-weight="600">${escapeXml(HERO_CARD.projects)}</text>
            </g>
            <g transform="translate(0, 102)">
              <rect width="220" height="84" rx="18" fill="rgba(15, 23, 42, 0.56)" stroke="rgba(148, 163, 184, 0.14)"/>
              <text x="18" y="26" fill="#93c5fd" font-family="Inter, sans-serif" font-size="12" font-weight="900" letter-spacing="2.4">${escapeXml(HERO_CARD.emailTitle)}</text>
              <text x="18" y="53" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="17" font-weight="600">${escapeXml(HERO_CARD.email)}</text>
            </g>
            <g transform="translate(240, 102)">
              <rect width="220" height="84" rx="18" fill="rgba(15, 23, 42, 0.56)" stroke="rgba(148, 163, 184, 0.14)"/>
              <text x="18" y="26" fill="#93c5fd" font-family="Inter, sans-serif" font-size="12" font-weight="900" letter-spacing="2.4">${escapeXml(HERO_CARD.phoneTitle)}</text>
              <text x="18" y="53" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="17" font-weight="600">${escapeXml(HERO_CARD.phone)}</text>
            </g>
          </g>

          <g transform="translate(0, 452)">
            <line x1="0" y1="0" x2="630" y2="0" stroke="rgba(15,23,42,0.95)"/>
            <text x="0" y="38" fill="#ffffff" font-family="Inter, sans-serif" font-size="16" font-weight="800" letter-spacing="3">${escapeXml(HERO_CARD.footerTitle)}</text>
            <text x="630" y="28" text-anchor="end" fill="#64748b" font-family="Inter, sans-serif" font-size="18" font-weight="500">${escapeXml(HERO_CARD.footerText)}</text>
            <g transform="translate(560, 0)">
              <rect width="44" height="44" rx="10" fill="#0a2351" stroke="rgba(148,163,184,0.25)"/>
              ${qrDataUrl ? `<image href="${qrDataUrl}" x="0" y="0" width="44" height="44" preserveAspectRatio="xMidYMid slice"/>` : ''}
            </g>
          </g>
        </g>
      </g>
    </svg>`;

  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const objectUrl = URL.createObjectURL(svgBlob);

  try {
    const image = await new Promise((resolve, reject) => {
      const nextImage = new Image();
      nextImage.onload = () => resolve(nextImage);
      nextImage.onerror = () => reject(new Error('Could not render the card image.'));
      nextImage.src = objectUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = 1050;
    canvas.height = 600;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas is not available.');

    context.drawImage(image, 0, 0);

    return await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function downloadFile(file, fileName) {
  const objectUrl = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1000);
}

async function downloadRemoteImageAsFile(imageUrl, fileName) {
  const response = await fetch(imageUrl, { mode: 'cors' });

  if (!response.ok) {
    throw new Error('Could not download the image.');
  }

  const blob = await response.blob();

  if (!blob.size) {
    throw new Error('Downloaded image is empty.');
  }

  return new File([blob], fileName, { type: blob.type || 'image/png' });
}

function HomePage({ onNavigate }) {
  const { content } = useContent();
  const { site, hero, spotlight, featuredProjects, heroStats, articles = [] } = content;
  const [isSharing, setIsSharing] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const websiteUrl = 'https://kaushalyamullegama.netlify.app/';
  const aboutImage = content.aboutImage || 'https://static.wixstatic.com/media/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg';
  const contact = {
    ...(site?.contactDetails || {}),
  };
  const contactEmail = contact.email || '';
  const contactPhone = contact.phone || '';
  const contactLocation = contact.location || '';
  const socialLabels = (site?.socialLinks || []).map((item) => item.label).filter(Boolean).slice(0, 3).join(' · ');
  const latestArticlesFirst = [...articles].reverse();
  const latestArticle = latestArticlesFirst[0] || null;
  const featuredProjectsLatestFirst = [...featuredProjects].reverse();

  const handleShareHeroCard = async () => {
    if (isSharing) return;
    setIsSharing(true);
    setShareStatus('Downloading image...');

    try {
      const file = await downloadRemoteImageAsFile(HERO_SHARE_IMAGE_URL, 'kaushalya-business-card.png');

      const canShareFile = typeof navigator.canShare === 'function'
        ? navigator.canShare({ files: [file] })
        : false;

      if (typeof navigator.share === 'function' && canShareFile) {
        await navigator.share({
          files: [file],
          title: 'Kaushalya Business Card',
          text: 'Connect with Kaushalya',
        });
        setShareStatus('Share sheet opened for the image.');
        return;
      }

      downloadFile(file, 'kaushalya-business-card.png');
      setShareStatus('Image downloaded instead of shared.');
    } catch (error) {
      console.error('Hero card share failed:', error);
      setShareStatus('Could not share the image link.');
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="page-stack">
      <section className="hero-grid">
        <button type="button" className="hero-share-button" onClick={handleShareHeroCard} aria-label="Share business card image" title="Share">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M18 16a3 3 0 0 0-2.39 1.2l-6.2-3.1a3.1 3.1 0 0 0 0-2.2l6.2-3.1A3 3 0 1 0 15 7a3 3 0 0 0 .05.55l-6.2 3.1a3 3 0 1 0 0 2.7l6.2 3.1A3 3 0 1 0 18 16Z" />
          </svg>
        </button>
        {shareStatus ? <p className="hero-share-status" aria-live="polite">{shareStatus}</p> : null}

        <Reveal className="hero-copy">
          <span className="eyebrow">{hero?.eyebrow || 'Portfolio / Engineering / Design'}</span>
          <h1>{hero?.title || "Hey, I’m Kaushalya Mullegama."}</h1>
          <p>{hero?.description}</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate('blog')}>
              {hero?.ctaPrimary || 'Explore Blog'}
            </button>
            <button type="button" className="secondary-button" onClick={() => onNavigate('about')}>
              {hero?.ctaSecondary || 'View Background'}
            </button>
          </div>
          <div className="stat-row">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={120}>
          <img src={hero?.image || 'https://static.wixstatic.com/media/3d6765_c7d6668f3ac7464f84a259bad9bd496b~mv2.png/v1/fill/w_480,h_420,al_c,q_90/Untitled%20design%20(2).png'} alt="Kaushalya Graphic Banner" />
          <HeroQrBadge />
        </Reveal>

      </section>

      <Reveal>
        <SectionHeading
          eyebrow="Spotlight"
          title={latestArticle ? 'Latest Post Feature' : 'Latest Article Feature'}
          description="A sharp snapshot of the most recent writing and the visual direction behind the portfolio."
        />
        <article className="spotlight-card">
          <div className="spotlight-card__copy">
            {latestArticle ? (
              <>
                <span className="badge badge--indigo">{latestArticle.category || 'Latest Post'}</span>
                <h2>{latestArticle.title}</h2>
                <p>{latestArticle.description}</p>
              </>
            ) : (
              <>
                <span className="badge badge--indigo">{spotlight?.tag}</span>
                <h2>{spotlight?.title}</h2>
                <p>{spotlight?.description}</p>
              </>
            )}
            <button type="button" className="text-button" onClick={() => onNavigate('blog')}>
              Read more
            </button>
          </div>
          <ImageCarousel
            images={latestArticle?.images || latestArticle?.image || spotlight?.images || spotlight?.image}
            alt={latestArticle?.title || spotlight?.title || 'Spotlight feature'}
            imageClassName="spotlight-card__image"
          />
        </article>
      </Reveal>

      <section className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Showcase"
            title="Featured Engineering Projects"
            description="A modular view of the hardware, software, and design work that sits at the center of the portfolio."
          />
        </Reveal>

        <div className="project-grid">
          {featuredProjectsLatestFirst.map((project, index) => {
            const shareUrl = getSharePageUrl(project);
            const projectId = `project-${project.id || slugify(project.title)}`;

            return (
              <Reveal key={project.title} delay={index * 100}>
                <article className="project-card" id={projectId}>
                  <ImageCarousel images={project.images || project.image} alt={project.title} imageClassName="project-card__image" />
                  <div className="project-card__body">
                    <span className="eyebrow">{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="share-buttons">
                      <button
                        type="button"
                        className="chip-button"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(shareUrl);
                          } catch (e) {
                            await navigator.clipboard.writeText(shareUrl);
                          }
                        }}
                      >
                        Copy link
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
