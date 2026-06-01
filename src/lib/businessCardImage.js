const CARD_WIDTH = 1050;
const CARD_HEIGHT = 600;

export const DEFAULT_BUSINESS_CARD = {
  name: 'Kaushalya Mullegama',
  subtitle: 'ELECTRONIC & TELECOMMUNICATION ENGINEERING',
  bio: 'Bridging hardware and software through embedded systems, combat robotics, and full-stack development. Developer of the "Axel" vehicle blackbox.',
  website: 'https://kaushalyamullegama.netlify.app/',
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

function escapeXml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeCard(card = {}) {
  return { ...DEFAULT_BUSINESS_CARD, ...card };
}

function wrapText(text, maxChars, maxLines) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  if (!words.length) return [];

  const lines = [];
  let currentLine = words[0];

  for (let index = 1; index < words.length; index += 1) {
    const nextLine = `${currentLine} ${words[index]}`;
    if (nextLine.length <= maxChars) {
      currentLine = nextLine;
    } else {
      lines.push(currentLine);
      currentLine = words[index];
      if (lines.length >= maxLines - 1) break;
    }
  }

  if (lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines.slice(0, maxLines);
}

function linesToTspans(lines, lineHeight) {
  return lines.map((line, index) => `<tspan x="0" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`).join('');
}

async function imageSourceToDataUrl(source) {
  if (!source) return '';
  if (String(source).startsWith('data:')) return source;

  try {
    const response = await fetch(source, { mode: 'cors' });
    if (!response.ok) return '';
    const blob = await response.blob();

    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => resolve('');
      reader.readAsDataURL(blob);
    });
  } catch {
    return '';
  }
}

function createSvgMarkup(card, portraitDataUrl = '', qrDataUrl = '') {
  const safeCard = normalizeCard(card);
  const bioLines = wrapText(safeCard.bio, 58, 3);
  const footerLines = wrapText(safeCard.footerText, 42, 2);

  const metricBox = (x, y, title, value) => `
    <g transform="translate(${x}, ${y})">
      <rect width="220" height="84" rx="18" fill="rgba(15, 23, 42, 0.56)" stroke="rgba(148, 163, 184, 0.14)"/>
      <text x="18" y="26" fill="#93c5fd" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="900" letter-spacing="2.4">${escapeXml(title)}</text>
      <text x="18" y="53" fill="#e2e8f0" font-family="Manrope, sans-serif" font-size="17" font-weight="600">${escapeXml(value)}</text>
    </g>`;

  const portraitMarkup = portraitDataUrl
    ? `<image href="${portraitDataUrl}" x="0" y="0" width="280" height="480" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>`
    : `
      <g clip-path="url(#portraitClip)">
        <rect x="0" y="0" width="280" height="480" fill="#0f172a"/>
      </g>`;

  const qrMarkup = qrDataUrl
    ? `<image href="${qrDataUrl}" x="0" y="0" width="44" height="44" preserveAspectRatio="xMidYMid slice"/>`
    : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}" fill="none">
      <defs>
        <linearGradient id="cardBg" x1="86" y1="22" x2="932" y2="592" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0b1329"/>
          <stop offset="1" stop-color="#020617"/>
        </linearGradient>
        <radialGradient id="glowOne" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(910 40) rotate(130) scale(420 420)">
          <stop stop-color="rgba(79, 70, 229, 0.26)"/>
          <stop offset="1" stop-color="rgba(79, 70, 229, 0)"/>
        </radialGradient>
        <radialGradient id="glowTwo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70 560) rotate(-40) scale(350 350)">
          <stop stop-color="rgba(37, 99, 235, 0.22)"/>
          <stop offset="1" stop-color="rgba(37, 99, 235, 0)"/>
        </radialGradient>
        <clipPath id="cardClip"><rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" rx="48"/></clipPath>
        <clipPath id="portraitClip"><rect width="280" height="480" rx="32"/></clipPath>
      </defs>

      <g clip-path="url(#cardClip)">
        <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" rx="48" fill="url(#cardBg)"/>
        <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#glowOne)"/>
        <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#glowTwo)"/>

        <g>
          <rect x="48" y="44" width="166" height="40" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(148,163,184,0.2)"/>
          <text x="131" y="70" text-anchor="middle" fill="#cbd5e1" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="800" letter-spacing="3.6">PORTFOLIO CARD</text>
          <text x="1002" y="71" text-anchor="end" fill="#94a3b8" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="500">${escapeXml(safeCard.website)}</text>
        </g>

        <g transform="translate(48, 104)">
          <rect x="0" y="0" width="280" height="480" rx="32" fill="#0f172a" stroke="rgba(148,163,184,0.18)"/>
          ${portraitMarkup}
        </g>

        <g transform="translate(360, 140)">
          <text x="0" y="0" fill="#60a5fa" font-family="Space Grotesk, sans-serif" font-size="12" font-weight="900" letter-spacing="3">${escapeXml(safeCard.subtitle)}</text>
          <text x="0" y="80" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="56" font-weight="800" letter-spacing="-2.2">Hey, I'm</text>
          <text x="0" y="142" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="56" font-weight="800" letter-spacing="-2.2">${escapeXml(safeCard.name)}.</text>

          <text x="0" y="196" fill="#cbd5e1" font-family="Manrope, sans-serif" font-size="22" font-weight="400">${linesToTspans(bioLines, 32)}</text>

          <g transform="translate(0, 248)">
            ${metricBox(0, 0, safeCard.box1Title, safeCard.tech)}
            ${metricBox(240, 0, safeCard.box2Title, safeCard.projects)}
            ${metricBox(0, 102, safeCard.box3Title, safeCard.email)}
            ${metricBox(240, 102, safeCard.box4Title, safeCard.phone)}
          </g>

          <g transform="translate(0, 452)">
            <line x1="0" y1="0" x2="630" y2="0" stroke="rgba(15,23,42,0.95)"/>
            <text x="0" y="38" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="16" font-weight="800" letter-spacing="3">${escapeXml(safeCard.footerTitle)}</text>
            <text x="630" y="28" text-anchor="end" fill="#64748b" font-family="Manrope, sans-serif" font-size="18" font-weight="500">${linesToTspans(footerLines, 22)}</text>
            <g transform="translate(560, 0)">
              <rect width="44" height="44" rx="10" fill="#0a2351" stroke="rgba(148,163,184,0.25)"/>
              ${qrMarkup ? `<g transform="translate(0, 0)">${qrMarkup}</g>` : ''}
            </g>
          </g>
        </g>
      </g>
    </svg>`;
}

async function svgToPngBlob(svg) {
  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const objectUrl = URL.createObjectURL(svgBlob);

  try {
    const image = await new Promise((resolve, reject) => {
      const nextImage = new Image();
      nextImage.onload = () => resolve(nextImage);
      nextImage.onerror = () => reject(new Error('Could not render the card image.'));
      nextImage.src = objectUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = CARD_WIDTH;
    canvas.height = CARD_HEIGHT;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas is not available.');

    context.drawImage(image, 0, 0);

    return await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

export async function createBusinessCardPngBlob(options = {}) {
  const portraitDataUrl = await imageSourceToDataUrl(options.portraitUrl || options.portraitDataUrl || '');
  const qrDataUrl = await imageSourceToDataUrl(options.qrUrl || options.qrDataUrl || '');
  const svg = createSvgMarkup(options.card, portraitDataUrl, qrDataUrl);
  return await svgToPngBlob(svg);
}

export async function createBusinessCardPngFile(options = {}) {
  const blob = await createBusinessCardPngBlob(options);
  if (!blob) return null;
  return new File([blob], options.fileName || 'Kaushalya_Mullegama_Portfolio_Card.png', { type: 'image/png' });
}
