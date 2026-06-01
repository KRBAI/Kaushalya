import { useEffect, useMemo, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { useAuth } from '../contexts/AuthContext';

const DEFAULT_IMAGE = 'https://lh3.googleusercontent.com/d/1FvwL321-8JcOKppYdtYCgp0Pj62Yc1ds';
const DEFAULT_WEBSITE = 'https://kaushalyamullegama.netlify.app/';

const INITIAL_CARD = {
  name: 'Kaushalya Mullegama',
  subtitle: 'ELECTRONIC & TELECOMMUNICATION ENGINEERING',
  bio: 'Bridging hardware and software through embedded systems, combat robotics, and full-stack development. Developer of the "Axel" vehicle blackbox.',
  website: DEFAULT_WEBSITE,
  box1Title: 'Core Tech Stack',
  tech: 'ESP32 · React · Firebase · PCB Design',
  box2Title: 'Featured Projects',
  projects: 'Axel Blackbox · MechaJayantha 2.0',
  box3Title: 'Email',
  email: 'krb.mullegama@gmail.com',
  box4Title: 'Mobile Info',
  phone: 'Scan QR for Direct vCard',
  footerTitle: 'System Links',
  footerText: 'GitHub • LinkedIn • Project Repositories',
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read image file.'));
    reader.readAsDataURL(file);
  });
}

function CardBuilderPage() {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const previewWrapperRef = useRef(null);
  const cardRef = useRef(null);
  const [card, setCard] = useState(() => ({
    ...INITIAL_CARD,
    name: user?.displayName || INITIAL_CARD.name,
    email: user?.email || INITIAL_CARD.email,
  }));
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE);
  const [dragging, setDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const [status, setStatus] = useState('');

  const scaleCardToViewport = () => {
    const wrapper = previewWrapperRef.current;
    if (!wrapper) return;

    const paddingBuffer = 32;
    const horizontalSpace = wrapper.clientWidth - paddingBuffer;
    setScale(Math.min(horizontalSpace / 1050, 1));
  };

  useEffect(() => {
    scaleCardToViewport();
    window.addEventListener('resize', scaleCardToViewport);
    return () => window.removeEventListener('resize', scaleCardToViewport);
  }, []);

  const previewSize = useMemo(
    () => ({
      width: `${1050 * scale}px`,
      height: `${600 * scale}px`,
    }),
    [scale],
  );

  const updateField = (field) => (event) => {
    setCard((current) => ({ ...current, [field]: event.target.value }));
  };

  const setImageFromFile = async (file) => {
    if (!file || !file.type?.startsWith('image/')) {
      setStatus('Please choose an image file.');
      return;
    }

    const dataUrl = await readFileAsDataUrl(file);
    setImageUrl(dataUrl);
    setStatus('Image added to the card.');
  };

  const handleInputChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      await setImageFromFile(file);
    }
    event.target.value = '';
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      await setImageFromFile(file);
    }
  };

  const generateCanvas = async () => {
    const cardNode = cardRef.current;
    if (!cardNode) {
      throw new Error('Card preview is not ready yet.');
    }

    const originalTransform = cardNode.style.transform;
    cardNode.style.transform = 'none';

    try {
      return await html2canvas(cardNode, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0b1329',
      });
    } finally {
      cardNode.style.transform = originalTransform;
    }
  };

  const downloadCard = async () => {
    try {
      setStatus('Generating image...');
      const canvas = await generateCanvas();
      const blob = await new Promise((resolve) => canvas.toBlob((nextBlob) => resolve(nextBlob), 'image/png'));

      if (!blob) {
        throw new Error('Could not export the card.');
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'Kaushalya_Mullegama_Portfolio_Card.png';
      link.href = objectUrl;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setStatus('Card downloaded.');
    } catch (error) {
      setStatus(error?.message || 'Could not export the card.');
    }
  };

  const shareCard = async () => {
    try {
      setStatus('Preparing share file...');
      const canvas = await generateCanvas();
      const blob = await new Promise((resolve) => canvas.toBlob((nextBlob) => resolve(nextBlob), 'image/png'));

      if (!blob) {
        setStatus('Could not create the image file.');
        return;
      }

      const file = new File([blob], 'Kaushalya_Mullegama_Portfolio_Card.png', { type: 'image/png' });
      const canShareFiles = typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] });

      if (typeof navigator.share === 'function' && canShareFiles) {
        await navigator.share({
          title: 'My Portfolio Card',
          text: 'Check out my professional portfolio card!',
          files: [file],
        });
        setStatus('Card ready to share.');
        return;
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'Kaushalya_Mullegama_Portfolio_Card.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setStatus('Sharing is not supported in this browser. Saved the card instead.');
    } catch (error) {
      setStatus(error?.message || 'Failed to share the card.');
    }
  };

  const pageStyle = {
    minHeight: 'calc(100vh - 4.2rem)',
    padding: '1rem',
    background: 'linear-gradient(135deg, #020617 0%, #0f172a 52%, #312e81 100%)',
    color: '#e2e8f0',
  };

  const shellStyle = {
    maxWidth: '1650px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const responsiveRowStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const leftPanelStyle = {
    width: '100%',
    flexShrink: 0,
    background: 'rgba(15, 23, 42, 0.9)',
    border: '1px solid #1e293b',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(16px)',
    height: 'fit-content',
  };

  const rightPanelStyle = {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(2, 6, 23, 0.65)',
    border: '1px solid #0f172a',
    borderRadius: '1.5rem',
    padding: '1rem',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
    overflow: 'hidden',
    position: 'relative',
    minHeight: '400px',
  };

  const glassPanelStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    width: '100%',
    background: '#020617',
    border: '1px solid #334155',
    borderRadius: '0.5rem',
    padding: '0.65rem 0.8rem',
    color: '#fff',
    outline: 'none',
    transition: 'all 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    color: '#94a3b8',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '0.4rem',
  };

  const buttonStyle = {
    width: '100%',
    border: 0,
    borderRadius: '0.9rem',
    padding: '0.95rem 1rem',
    fontWeight: 800,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  };

  const titleStyle = {
    margin: 0,
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 800,
  };

  const previewCardStyle = {
    position: 'relative',
    width: '1050px',
    height: '600px',
    transformOrigin: 'top left',
    transform: `scale(${scale})`,
    borderRadius: '2.5rem',
    padding: '3rem',
    boxShadow: '0 30px 70px rgba(0,0,0,0.8)',
    border: '1px solid rgba(51,65,85,0.8)',
    overflow: 'hidden',
    background: 'linear-gradient(145deg, #0b1329 0%, #020617 100%)',
  };

  const dropZoneStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    overflow: 'hidden',
    border: '1px solid #1e293b',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    position: 'relative',
    background: 'rgba(15, 23, 42, 0.6)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const emptyStateStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#475569',
    zIndex: 10,
    textAlign: 'center',
  };

  const portraitBgStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 700ms ease',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    background: 'rgba(79, 70, 229, 0.0)',
    opacity: dragging ? 1 : 0,
    transition: 'opacity 0.2s ease',
    zIndex: 20,
    color: '#fff',
    fontWeight: 800,
    letterSpacing: '0.04em',
  };

  return (
    <section style={pageStyle}>
      <div style={shellStyle}>
        <div style={{ maxWidth: '760px' }}>
          <div style={{ marginBottom: '0.75rem', color: '#93c5fd', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Reader Tools</div>
          <h1 style={{ margin: 0, fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.02, letterSpacing: '-0.04em', color: '#fff' }}>
            Business Card Builder
          </h1>
          <p style={{ margin: '0.75rem 0 0', maxWidth: '720px', color: '#a9b7cf', lineHeight: 1.7 }}>
            Design a portfolio card, add your image, and export or share the final asset directly from this reader-only page.
          </p>
        </div>

        <div style={responsiveRowStyle}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={leftPanelStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(79, 70, 229, 0.2)', color: '#a78bfa', borderRadius: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h2 style={titleStyle}>Card Content Manager</h2>
              </div>

              <form style={{ display: 'grid', gap: '1rem', fontSize: '0.875rem' }} onSubmit={(event) => event.preventDefault()}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input style={inputStyle} type="text" value={card.name} onChange={updateField('name')} />
                </div>
                <div>
                  <label style={labelStyle}>Professional Title</label>
                  <input style={inputStyle} type="text" value={card.subtitle} onChange={updateField('subtitle')} />
                </div>
                <div>
                  <label style={labelStyle}>Executive Bio</label>
                  <textarea
                    rows="3"
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.6, minHeight: '90px' }}
                    value={card.bio}
                    onChange={updateField('bio')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Portfolio Link</label>
                  <input style={inputStyle} type="text" value={card.website} onChange={updateField('website')} />
                </div>

                <hr style={{ borderColor: '#1e293b', margin: '0.25rem 0 0.4rem' }} />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(2,6,23,0.5)', padding: '0.65rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#c4b5fd', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }} type="text" value={card.box1Title} onChange={updateField('box1Title')} />
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#fff' }} type="text" value={card.tech} onChange={updateField('tech')} />
                  </div>
                  <div style={{ background: 'rgba(2,6,23,0.5)', padding: '0.65rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#c4b5fd', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }} type="text" value={card.box2Title} onChange={updateField('box2Title')} />
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#fff' }} type="text" value={card.projects} onChange={updateField('projects')} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(2,6,23,0.5)', padding: '0.65rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#c4b5fd', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }} type="text" value={card.box3Title} onChange={updateField('box3Title')} />
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#fff' }} type="text" value={card.email} onChange={updateField('email')} />
                  </div>
                  <div style={{ background: 'rgba(2,6,23,0.5)', padding: '0.65rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#c4b5fd', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }} type="text" value={card.box4Title} onChange={updateField('box4Title')} />
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#fff' }} type="text" value={card.phone} onChange={updateField('phone')} />
                  </div>
                </div>

                <hr style={{ borderColor: '#1e293b', margin: '0.25rem 0 0.4rem' }} />

                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '0.75rem', background: 'rgba(2,6,23,0.5)', padding: '0.65rem', borderRadius: '0.8rem', border: '1px solid #1e293b' }}>
                  <div>
                    <label style={{ ...labelStyle, color: '#64748b', fontSize: '0.62rem', marginBottom: '0.35rem' }}>Footer Title</label>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#fff', fontSize: '0.75rem', fontWeight: 800 }} type="text" value={card.footerTitle} onChange={updateField('footerTitle')} />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, color: '#64748b', fontSize: '0.62rem', marginBottom: '0.35rem' }}>Footer Text</label>
                    <input style={{ ...inputStyle, background: 'transparent', border: 0, padding: 0, color: '#cbd5e1', fontSize: '0.75rem' }} type="text" value={card.footerText} onChange={updateField('footerText')} />
                  </div>
                </div>

                <div style={{ background: '#020617', padding: '0.95rem', borderRadius: '1rem', border: '1px solid #1e293b', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.25rem' }}>
                  <span style={{ color: '#818cf8', fontSize: '1rem', marginTop: '0.15rem' }}>📸</span>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.78rem', lineHeight: 1.55 }}>
                    Drag your profile image directly onto the card's image area to set your picture instantly.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.25rem' }}>
                  <button
                    type="button"
                    onClick={downloadCard}
                    style={{
                      ...buttonStyle,
                      background: '#fff',
                      color: '#020617',
                      boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Export Image Asset
                  </button>

                  <button
                    type="button"
                    onClick={shareCard}
                    style={{
                      ...buttonStyle,
                      background: '#4f46e5',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(79,70,229,0.25)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Share Card Directly
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={{ ...buttonStyle, background: 'rgba(148,163,184,0.08)', color: '#e2e8f0', border: '1px solid rgba(148,163,184,0.16)' }}
                >
                  Upload / Replace Image
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={handleInputChange} />

              </form>

              {status ? (
                <p aria-live="polite" style={{ margin: '0.8rem 0 0', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  {status}
                </p>
              ) : null}
            </div>
          </div>

          <div style={rightPanelStyle} ref={previewWrapperRef}>
            <div style={{ position: 'relative', width: previewSize.width, height: previewSize.height }}>
              <div
                id="business-card"
                ref={cardRef}
                className={dragging ? 'drag-over' : ''}
                style={previewCardStyle}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
              >
                <div
                  style={{ position: 'absolute', top: '-40%', right: '-10%', width: '700px', height: '700px', background: 'linear-gradient(135deg, rgba(79,70,229,0.1), transparent)', filter: 'blur(140px)', borderRadius: '999px', pointerEvents: 'none' }}
                />
                <div
                  style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: '600px', height: '600px', background: 'linear-gradient(45deg, rgba(37,99,235,0.1), transparent)', filter: 'blur(120px)', borderRadius: '999px', pointerEvents: 'none' }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 10 }}>
                  <div style={{ ...glassPanelStyle, borderRadius: '999px', padding: '0.5rem 1.25rem', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', color: '#cbd5e1' }}>
                    PORTFOLIO CARD
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, letterSpacing: '0.03em', fontFamily: 'IBM Plex Mono, monospace' }}>
                    {card.website}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '3rem', position: 'relative', zIndex: 10, height: '400px' }}>
                  <div style={{ width: '280px', flexShrink: 0, height: '100%' }}>
                    <div style={dropZoneStyle} className={dragging ? 'drag-over' : ''} onClick={() => fileInputRef.current?.click()} role="button" tabIndex={0}>
                      <div style={{ ...portraitBgStyle, display: imageUrl ? 'block' : 'none' }} />

                      <div style={{ ...emptyStateStyle, opacity: imageUrl ? 0 : 1 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '0.75rem' }}>
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Upload Photo</span>
                      </div>

                      <div style={overlayStyle} className="drop-overlay">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ marginBottom: '0.5rem', animation: 'pulse 1.2s infinite' }}>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>
                        <span style={{ fontSize: '1rem' }}>Drop Image File</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: '#818cf8', fontSize: '12px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                        {card.subtitle}
                      </div>
                      <h1 style={{ margin: '0 0 1rem', fontSize: '44px', lineHeight: 1.1, fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', textShadow: '0 1px 2px rgba(0,0,0,0.35)' }}>
                        Hey, I'm <span style={{ color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{card.name}</span>.
                      </h1>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px', lineHeight: 1.7, maxWidth: '580px' }}>{card.bio}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', margin: '0.5rem 0' }}>
                      <div style={{ ...glassPanelStyle, borderRadius: '0.75rem', padding: '1rem' }}>
                        <div style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>{card.box1Title}</div>
                        <div style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '13px', lineHeight: 1.45 }}>{card.tech}</div>
                      </div>
                      <div style={{ ...glassPanelStyle, borderRadius: '0.75rem', padding: '1rem' }}>
                        <div style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>{card.box2Title}</div>
                        <div style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '13px', lineHeight: 1.45 }}>{card.projects}</div>
                      </div>
                      <div style={{ ...glassPanelStyle, borderRadius: '0.75rem', padding: '1rem' }}>
                        <div style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>{card.box3Title}</div>
                        <div style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '13px', lineHeight: 1.45 }}>{card.email}</div>
                      </div>
                      <div style={{ ...glassPanelStyle, borderRadius: '0.75rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div>
                          <div style={{ fontSize: '10px', color: '#c4b5fd', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.35rem' }}>{card.box4Title}</div>
                          <div style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '13px', lineHeight: 1.45 }}>{card.phone}</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #020617' }}>
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{card.footerTitle}</span>
                      <span style={{ color: '#64748b', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em' }}>{card.footerText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {status ? <p style={{ margin: '0.2rem 0 0', color: '#cbd5e1', fontSize: '0.9rem' }}>{status}</p> : null}
        </div>
      </div>
    </section>
  );
}

export default CardBuilderPage;
