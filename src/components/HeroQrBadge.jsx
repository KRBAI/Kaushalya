import { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';

function buildConnectUrl() {
  const canonicalScanUrl = 'https://kaushalyamullegama.netlify.app/?v=connect';
  const localScanUrl = `${window.location.origin}/?v=connect`;
  const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
  return isLocal ? localScanUrl : canonicalScanUrl;
}

function HeroQrBadge() {
  const [qrSrc, setQrSrc] = useState('');
  const payload = useMemo(() => buildConnectUrl(), []);

  useEffect(() => {
    let active = true;

    QRCode.toDataURL(payload, {
      width: 128,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#2563EB',
        light: '#00000000',
      },
    })
      .then((dataUrl) => {
        if (active) setQrSrc(dataUrl);
      })
      .catch(() => {
        if (active) setQrSrc('');
      });

    return () => {
      active = false;
    };
  }, [payload]);

  if (!payload) {
    return null;
  }

  return (
    <aside className="hero-qr-badge" aria-label="Scan for socials and contact details">
      <div className="hero-qr-badge__panel">
        {qrSrc ? <img src={qrSrc} alt="QR code for socials and contact info" /> : <div className="hero-qr-badge__placeholder" aria-hidden="true" />}
      </div>
    </aside>
  );
}

export default HeroQrBadge;