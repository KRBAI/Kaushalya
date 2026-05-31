import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import { useContent } from '../contexts/ContentContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ImageCarousel from '../components/ImageCarousel';
import HeroQrBadge from '../components/HeroQrBadge';
import { getSharePageUrl } from '../lib/shareUrls';
import { slugify } from '../lib/shareUrls';

function HomePage({ onNavigate }) {
  const { content } = useContent();
  const { site, hero, spotlight, featuredProjects, heroStats, articles = [] } = content;
  const [isSharing, setIsSharing] = useState(false);
  const [shareQrSrc, setShareQrSrc] = useState('');
  const shareCardRef = useRef(null);
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

  useEffect(() => {
    let active = true;

    QRCode.toDataURL(`${websiteUrl}?v=connect`, {
      width: 128,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#2563EB',
        light: '#00000000',
      },
    })
      .then((dataUrl) => {
        if (active) setShareQrSrc(dataUrl);
      })
      .catch(() => {
        if (active) setShareQrSrc('');
      });

    return () => {
      active = false;
    };
  }, [websiteUrl]);

  const captureCardBlob = async () => {
    if (!shareCardRef.current) return null;
    const canvas = await html2canvas(shareCardRef.current, {
      scale: 2,
      backgroundColor: null,
      useCORS: true,
    });

    return await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  };

  const handleShareHeroCard = async () => {
    if (isSharing) return;
    setIsSharing(true);

    try {
      const blob = await captureCardBlob();
      if (!blob) throw new Error('Could not create share image.');

      const file = new File([blob], 'kaushalya-business-card.png', { type: 'image/png' });
      const canShareFile = typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] });

      if (typeof navigator.share === 'function' && canShareFile) {
        await navigator.share({
          files: [file],
          title: 'Kaushalya Business Card',
          text: 'Connect with Kaushalya',
        });
        return;
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'kaushalya-business-card.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      // keep silent to avoid noisy UI when user cancels native share
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

        <div className="hero-share-capture" aria-hidden="true">
          <article className="hero-business-card" ref={shareCardRef}>
            <div className="hero-business-card__topbar">
              <span className="hero-business-card__badge">Portfolio Card</span>
            </div>

            <div className="hero-business-card__layout">
              <div className="hero-business-card__portrait">
                <img src={aboutImage} alt="About section visual" crossOrigin="anonymous" />
              </div>

              <div className="hero-business-card__content">
                {/* removed top pills; they will appear under Email to match QR height */}
                <h2>{hero?.title || "Hey, I’m Kaushalya Mullegama."}</h2>
                <p>{hero?.description || 'Electronics and software enthusiast focused on practical innovation.'}</p>

                <div className="hero-business-card__useful">
                  <div className="useful--connect">
                    <strong>Connect</strong>
                    <div className="hero-business-card__qr-panel">
                      {shareQrSrc ? <img src={shareQrSrc} alt="QR code for contact card" crossOrigin="anonymous" /> : <div className="hero-business-card__qr-placeholder" aria-hidden="true" />}
                    </div>
                    <span>{contactPhone || 'Scan QR to save contact'}</span>
                  </div>
                  <div className="useful--email">
                    <strong>Email</strong>
                    <span>{contactEmail || 'krb.mullegama@gmail.com'}</span>
                  </div>
                  <div className="useful--stat">
                    <strong>3+</strong>
                    <span>Core disciplines</span>
                  </div>
                  <div className="useful--stat">
                    <strong>4</strong>
                    <span>Featured projects</span>
                  </div>
                </div>

                <div className="hero-business-card__foot">
                  <strong>Connect</strong>
                  <span>Website • Email • Call • Socials</span>
                </div>
              </div>
            </div>
          </article>
        </div>
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