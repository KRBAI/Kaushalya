import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const sourceUrl = 'https://drive.google.com/uc?export=download&id=1l_-S4w25b__RPk6_rndcOtkRaon272P4';
const outputPath = resolve(process.cwd(), 'public', 'hero-share-image.png');

async function downloadHeroShareImage() {
  const response = await fetch(sourceUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch hero share image: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  if (!buffer.length) {
    throw new Error('Downloaded hero share image is empty.');
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  console.log(`Wrote ${outputPath}`);
}

await downloadHeroShareImage();
