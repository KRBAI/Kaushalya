import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage('Add an email address to subscribe.');
      return;
    }

    setMessage(`Subscribed successfully for ${email.trim()}.`);
    setEmail('');
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
        />
        <button type="submit">Submit</button>
      </form>

      {message ? <p className="newsletter-message">{message}</p> : null}
    </section>
  );
}

export default Newsletter;