import { useContent } from '../contexts/ContentContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function AboutPage() {
  const { content } = useContent();
  const { education, skills, certifications } = content;

  return (
    <div className="page-stack">
      <section className="about-hero">
        <Reveal className="about-hero__copy">
          <span className="eyebrow">About me</span>
          <h1>About Kaushalya</h1>
          <p>
            I’m an Electronic & Telecommunication Engineering undergraduate at KDU and a software engineering
            diploma student at NIBM, exploring where hardware and software can meet in practical systems.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <img
            src="https://static.wixstatic.com/media/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg/v1/fill/w_320,h_180,al_c,q_80/c837a6_e6f1add82e8a460297b47026be9099fe~mv2.jpg"
            alt="Inner view of a futuristic vehicle"
          />
        </Reveal>
      </section>

      <section className="section-stack">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic Background" />
        </Reveal>

        <div className="timeline-grid">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="timeline-card">
                <h3>{item.title}</h3>
                <p className="timeline-card__institution">{item.institution}</p>
                <ul>
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical Matrix & Competencies"
            description="A bento-style breakdown of the areas where I spend the most time building and experimenting."
          />
        </Reveal>

        <div className="skills-grid">
          {skills.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className={`skill-card skill-card--${card.size}`}>
                <div className="skill-card__header">
                  <div>
                    {card.accent ? <span className="eyebrow">{card.accent}</span> : null}
                    <h3>{card.title}</h3>
                  </div>
                  <i className={card.icon} aria-hidden="true" />
                </div>
                <p>{card.description}</p>
                <div className="chip-row">
                  {card.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-stack">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Licenses & Certifications" />
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 100}>
              <article className="cert-card">
                <h3>{cert.title}</h3>
                <img src={cert.image} alt={cert.title} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;