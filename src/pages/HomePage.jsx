import { useContent } from '../contexts/ContentContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function HomePage({ onNavigate }) {
  const { content } = useContent();
  const { hero, spotlight, featuredProjects, heroStats } = content;

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
          <img
            src="https://static.wixstatic.com/media/3d6765_c7d6668f3ac7464f84a259bad9bd496b~mv2.png/v1/fill/w_480,h_420,al_c,q_90/Untitled%20design%20(2).png"
            alt="Kaushalya Graphic Banner"
          />
        </Reveal>
      </section>

      <Reveal>
        <SectionHeading
          eyebrow="Spotlight"
          title="Latest Article Feature"
          description="A sharp snapshot of the most recent writing and the visual direction behind the portfolio."
        />
        <article className="spotlight-card">
          <div className="spotlight-card__copy">
            <span className="badge badge--indigo">{spotlight?.tag}</span>
            <h2>{spotlight?.title}</h2>
            <p>{spotlight?.description}</p>
            <button type="button" className="text-button" onClick={() => onNavigate('blog')}>
              Read more
            </button>
          </div>
          <img src={spotlight?.image} alt="Robotics concept art" />
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
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-card__body">
                  <span className="eyebrow">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;