const MAX_IMAGE_DIMENSION = 1400;
const IMAGE_QUALITY = 0.78;
const MAX_FILE_NAME_LENGTH = 40;

function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Unable to process image file.'));
    image.src = dataUrl;
  });
}

async function downscaleImage(file) {
  const originalDataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read image file.'));
    reader.readAsDataURL(file);
  });

  const image = await loadImage(originalDataUrl);
  const largestSide = Math.max(image.width, image.height);

  if (largestSide <= MAX_IMAGE_DIMENSION) {
    return originalDataUrl;
  }

  const scale = MAX_IMAGE_DIMENSION / largestSide;
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(image.width * scale);
  canvas.height = Math.round(image.height * scale);

  const context = canvas.getContext('2d');
  if (!context) {
    return originalDataUrl;
  }

  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  try {
    return canvas.toDataURL('image/webp', IMAGE_QUALITY);
  } catch (error) {
    return originalDataUrl;
  }
}

function sanitizeFileName(fileName) {
  const baseName = String(fileName || 'image').replace(/[^a-zA-Z0-9._-]/g, '-');
  return baseName.slice(0, MAX_FILE_NAME_LENGTH) || 'image';
}

function toBase64Payload(dataUrl) {
  const separatorIndex = dataUrl.indexOf(',');

  if (separatorIndex === -1) {
    throw new Error('Invalid image data.');
  }

  const header = dataUrl.slice(0, separatorIndex);
  const payload = dataUrl.slice(separatorIndex + 1);
  const mimeMatch = header.match(/^data:(.*?);base64$/);

  return {
    mimeType: mimeMatch?.[1] || 'image/webp',
    payload,
  };
}

async function createDriveFile(dataUrl, fileName, accessToken) {
  if (!accessToken) {
    throw new Error('Google Drive access is required to upload images. Sign in with Google first.');
  }

  const { mimeType, payload } = toBase64Payload(dataUrl);
  const safeFileName = sanitizeFileName(fileName);
  const metadata = {
    name: `${Date.now()}-${safeFileName}`,
    mimeType,
  };
  const boundary = `----kaushalya-drive-${Date.now()}`;

  const multipartBody = [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    `Content-Type: ${mimeType}`,
    'Content-Transfer-Encoding: base64',
    '',
    payload,
    `--${boundary}--`,
    '',
  ].join('\r\n');

  const uploadResponse = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body: multipartBody,
  });

  const uploadResult = await uploadResponse.json();
  if (!uploadResponse.ok) {
    throw new Error(uploadResult?.error?.message || 'Unable to upload image to Google Drive.');
  }

  const permissionResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${uploadResult.id}/permissions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      role: 'reader',
      type: 'anyone',
    }),
  });

  if (!permissionResponse.ok) {
    const permissionResult = await permissionResponse.json().catch(() => ({}));
    throw new Error(permissionResult?.error?.message || 'Unable to make the Drive image public.');
  }

  return `https://drive.google.com/uc?export=view&id=${uploadResult.id}`;
}

export async function readFileAsDataUrl(file) {
  if (!file) {
    return '';
  }

  return downscaleImage(file);
}

export async function readFilesAsDataUrls(files) {
  const fileList = Array.from(files || []).filter(Boolean);
  return Promise.all(fileList.map((file) => readFileAsDataUrl(file)));
}

export async function uploadDataUrlToDrive(dataUrl, fileName, accessToken) {
  return createDriveFile(dataUrl, fileName, accessToken);
}