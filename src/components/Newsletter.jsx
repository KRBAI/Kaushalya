import { useState } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '../lib/firebase';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage('Add an email address to subscribe.');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const normalizedEmail = email.trim().toLowerCase();
      await setDoc(doc(firestore, 'newsletterSubscribers', normalizedEmail), {
        email: normalizedEmail,
        subscribedAt: serverTimestamp(),
        source: 'newsletter-card',
      });

      setMessage(`Subscribed successfully for ${normalizedEmail}.`);
      setEmail('');
    } catch (error) {
      setMessage(error?.message || 'Unable to subscribe right now. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="newsletter-card reveal-visible">
      <div>
        <span className="eyebrow">Newsletter</span>
        <h2>Subscribe</h2>
        <p>Stay updated with my latest projects and innovations. Join the journey.</p>
      </div>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address *"
          aria-label="Email address"
          disabled={submitting}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {message ? <p className="newsletter-message">{message}</p> : null}
    </section>
  );
}

export default Newsletter;