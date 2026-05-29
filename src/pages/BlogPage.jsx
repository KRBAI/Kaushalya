import { useEffect, useMemo, useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { useAuth } from '../contexts/AuthContext';
import Newsletter from '../components/Newsletter';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CommentPanel from '../components/CommentPanel';
import ImageCarousel from '../components/ImageCarousel';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

function useLikes(postId) {
  const { user } = useAuth();
  const [likedBy, setLikedBy] = useState([]);

  useEffect(() => {
    const likesQuery = collection(firestore, 'posts', postId, 'likes');
    return onSnapshot(likesQuery, (snapshot) => {
      setLikedBy(snapshot.docs.map((item) => item.id));
    });
  }, [postId]);

  const isLiked = Boolean(user && likedBy.includes(user.uid));

  const toggleLike = async () => {
    if (!user) return;

    const likeRef = doc(firestore, 'posts', postId, 'likes', user.uid);
    if (isLiked) {
      await deleteDoc(likeRef);
      return;
    }

    await setDoc(likeRef, {
      authorName: user.displayName || user.email,
      createdAt: new Date().toISOString(),
    });
  };

  return { likeCount: likedBy.length, isLiked, toggleLike };
}

function sharePost(post) {
  const shareUrl = `${window.location.origin}${window.location.pathname}#${post.id}`;
  const shareData = { title: post.title, text: post.description, url: shareUrl };

  if (navigator.share) {
    navigator.share(shareData).catch(() => null);
    return;
  }

  navigator.clipboard.writeText(`${post.title}\n${post.description}\n${shareUrl}`).catch(() => null);
}

function PostCard({ post }) {
  const { likeCount, isLiked, toggleLike } = useLikes(post.id);

  return (
    <article className={`article-card article-card--${post.tone}`} id={`post-${post.id}`}>
      <ImageCarousel images={post.images || post.image} alt={post.title} imageClassName="article-card__image" />
      <div className="article-card__body">
        <span className="eyebrow">{post.category}</span>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="post-actions">
          <button type="button" className={`chip-button ${isLiked ? 'is-liked' : ''}`} onClick={toggleLike}>
            ♥ {likeCount}
          </button>
          <button type="button" className="chip-button" onClick={() => sharePost(post)}>
            Share
          </button>
        </div>
      </div>
      <CommentPanel postId={post.id} />
    </article>
  );
}

function BlogPage() {
  const { content } = useContent();
  const { user } = useAuth();
  const [query, setQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return content.articles.filter((article) => {
      if (!needle) return true;

      return [article.category, article.title, article.description]
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  }, [content.articles, query]);

  return (
    <div className="page-stack">
      <Reveal>
        <SectionHeading
          eyebrow="Blog"
          title="Blog & Articles"
          description={content.hero?.description || 'Insights, tutorials, and articles on embedded systems, software development, UI/UX design, and technology trends.'}
        />
      </Reveal>

      <section className="blog-toolbar">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts by title, category, or topic"
          aria-label="Search posts"
        />
        <div className="blog-toolbar__meta">
          <span>{filteredArticles.length} posts</span>
          <span>{user ? 'Logged in' : 'Guest mode'}</span>
        </div>
      </section>

      <div className="article-list">
        {filteredArticles.map((article, index) => (
          <Reveal key={article.title} delay={index * 90}>
            <PostCard post={article} />
          </Reveal>
        ))}
      </div>

      <Newsletter />
    </div>
  );
}

export default BlogPage;