import { useContent } from '../contexts/ContentContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ImageCarousel from '../components/ImageCarousel';
import { getSharePageUrl } from '../lib/shareUrls';

function HomePage({ onNavigate }) {
  const { content } = useContent();
  const { hero, spotlight, featuredProjects, heroStats, articles = [] } = content;
  const latestArticle = articles.length ? articles[articles.length - 1] : null;

  return (
    <div className="page-stack">
      <section className="hero-grid">
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
          {featuredProjects.map((project, index) => {
            const shareUrl = getSharePageUrl(project);

            return (
              <Reveal key={project.title} delay={index * 100}>
                <article className="project-card">
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