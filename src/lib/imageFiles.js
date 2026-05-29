export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve('');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read image file.'));
    reader.readAsDataURL(file);
  });
}

export async function readFilesAsDataUrls(files) {
  const fileList = Array.from(files || []).filter(Boolean);
  return Promise.all(fileList.map((file) => readFileAsDataUrl(file)));
}