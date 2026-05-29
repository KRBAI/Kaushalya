import { useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function AuthButton() {
  const { user, loading, isAdmin, signInWithGoogle, signInWithEmail, signUpWithEmail, resetPassword, signOut } = useAuth();
  const [panelOpen, setPanelOpen] = useState(false);
  const [mode, setMode] = useState('sign-in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const panelTitle = useMemo(() => (mode === 'sign-in' ? 'Sign in with email' : 'Create an email account'), [mode]);

  const closePanel = () => {
    setPanelOpen(false);
    setStatus('');
  };

  const handleEmailAuth = async (event) => {
    event.preventDefault();
    setStatus('');

    try {
      if (mode === 'sign-in') {
        await signInWithEmail(email.trim(), password);
      } else {
        await signUpWithEmail(email.trim(), password);
      }

      closePanel();
    } catch (error) {
      setStatus(error?.message || 'Authentication failed.');
    }
  };

  const handleResetPassword = async () => {
    if (!email.trim()) {
      setStatus('Enter your email first to receive a reset link.');
      return;
    }

    try {
      await resetPassword(email.trim());
      setStatus('Password reset email sent.');
    } catch (error) {
      setStatus(error?.message || 'Could not send reset email.');
    }
  };

  if (loading) {
    return <div className="auth-chip">Checking session...</div>;
  }

  if (!user) {
    return (
      <div className="auth-shell">
        <button type="button" className="auth-button" onClick={() => setPanelOpen((current) => !current)}>
          Sign in
        </button>

        {panelOpen ? (
          <div className="auth-panel">
            <div className="auth-panel__tabs">
              <button type="button" className={mode === 'sign-in' ? 'is-active' : ''} onClick={() => setMode('sign-in')}>
                Sign in
              </button>
              <button type="button" className={mode === 'sign-up' ? 'is-active' : ''} onClick={() => setMode('sign-up')}>
                Create account
              </button>
            </div>

            <form className="auth-form" onSubmit={handleEmailAuth}>
              <label>
                Email
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
              </label>
              <label>
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" />
              </label>

              <button type="submit" className="primary-button">
                {panelTitle}
              </button>
            </form>

            <div className="auth-panel__actions">
              <button type="button" className="text-button" onClick={handleResetPassword}>
                Reset password
              </button>
              <button type="button" className="text-button" onClick={signInWithGoogle}>
                Continue with Google
              </button>
              <button type="button" className="text-button" onClick={closePanel}>
                Close
              </button>
            </div>

            {status ? <p className="auth-status">{status}</p> : null}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="auth-session">
      <span className={`auth-chip ${isAdmin ? 'auth-chip--admin' : ''}`}>
        {user.displayName || user.email}
        {isAdmin ? ' · Admin' : ' · Reader'}
      </span>
      <button type="button" className="auth-button auth-button--ghost" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default AuthButton;
