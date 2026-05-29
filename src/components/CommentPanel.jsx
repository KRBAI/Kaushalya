import { useEffect, useMemo, useState } from 'react';
import { addComment, subscribeToComments } from '../data/interactions';
import { useAuth } from '../contexts/AuthContext';

function CommentPanel({ postId }) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => subscribeToComments(postId, setComments, () => setError('Unable to load comments. Check Firestore rules.')), [postId]);

  const commentCount = useMemo(() => comments.length, [comments]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !text.trim()) {
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await addComment(postId, {
        text: text.trim(),
        authorName: user.displayName || user.email,
        authorPhotoURL: user.photoURL || '',
        authorId: user.uid,
      });
      setText('');
    } catch (commentError) {
      setError(commentError?.message || 'Unable to save comment. Check Firestore rules.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="comment-panel">
      <div className="comment-panel__header">
        <h3>Comments</h3>
        <span>{commentCount} total</span>
      </div>

      {user ? (
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Write a thoughtful comment..."
            rows="3"
          />
          <button type="submit" disabled={submitting || !text.trim()}>
            {submitting ? 'Posting...' : 'Post comment'}
          </button>
        </form>
      ) : (
        <p className="comment-empty">Sign in to comment on posts.</p>
      )}

      {error ? <p className="comment-error">{error}</p> : null}

      <div className="comment-list">
        {comments.map((comment) => (
          <article key={comment.id} className="comment-item">
            {comment.authorPhotoURL ? <img src={comment.authorPhotoURL} alt="" /> : <span>{comment.authorName?.[0]}</span>}
            <div>
              <strong>{comment.authorName}</strong>
              <p>{comment.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommentPanel;
