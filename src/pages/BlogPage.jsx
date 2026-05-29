import { articles } from '../data/siteContent';
import Newsletter from '../components/Newsletter';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function BlogPage() {
  return (
    <div className="page-stack">
      <Reveal>
        <SectionHeading
          eyebrow="Blog"
          title="Blog & Articles"
          description="Insights, tutorials, and articles on embedded systems, software development, UI/UX design, and technology trends."
        />
      </Reveal>

      <div className="article-list">
        {articles.map((article, index) => (
          <Reveal key={article.title} delay={index * 90}>
            <article className={`article-card article-card--${article.tone}`}>
              <img src={article.image} alt={article.title} />
              <div className="article-card__body">
                <span className="eyebrow">{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Newsletter />
    </div>
  );
}

export default BlogPage;