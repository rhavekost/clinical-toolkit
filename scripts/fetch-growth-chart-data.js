#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'skills', 'pediatrics-calculators', 'assets', 'data');

const FILES = [
  {
    url: 'https://www.cdc.gov/growthcharts/data/zscore/wtage.csv',
    dest: 'cdc/wtage.csv'
  },
  {
    url: 'https://www.cdc.gov/growthcharts/data/zscore/statage.csv',
    dest: 'cdc/statage.csv'
  },
  {
    url: 'https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv',
    dest: 'cdc/bmiagerev.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Boys-Weight-for-age-Percentiles.csv',
    dest: 'who/WHO-Boys-Weight-for-age-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Girls-Weight-for-age%20Percentiles.csv',
    dest: 'who/WHO-Girls-Weight-for-age Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Boys-Length-for-age-Percentiles.csv',
    dest: 'who/WHO-Boys-Length-for-age-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Girls-Length-for-age-Percentiles.csv',
    dest: 'who/WHO-Girls-Length-for-age-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Boys-Weight-for-length-Percentiles.csv',
    dest: 'who/WHO-Boys-Weight-for-length-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Girls-Weight-for-length-Percentiles.csv',
    dest: 'who/WHO-Girls-Weight-for-length-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Boys-Head-Circumference-for-age-Percentiles.csv',
    dest: 'who/WHO-Boys-Head-Circumference-for-age-Percentiles.csv'
  },
  {
    url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/growthcharts/WHO-Girls-Head-Circumference-for-age-Percentiles.csv',
    dest: 'who/WHO-Girls-Head-Circumference-for-age-Percentiles.csv'
  }
];

const force = process.argv.includes('--force');

async function ensureDir(filePath) {
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
}

function download(url, destPath, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) {
      reject(new Error(`Too many redirects for ${url}`));
      return;
    }

    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const nextUrl = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, url).toString();
          res.resume();
          download(nextUrl, destPath, redirects + 1).then(resolve).catch(reject);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${url} (status ${res.statusCode})`));
          res.resume();
          return;
        }

        ensureDir(destPath)
          .then(() => pipeline(res, fs.createWriteStream(destPath)))
          .then(resolve)
          .catch(reject);
      })
      .on('error', reject);
  });
}

async function main() {
  let downloaded = 0;
  let skipped = 0;

  for (const file of FILES) {
    const destPath = path.join(DATA_DIR, file.dest);
    if (!force && fs.existsSync(destPath)) {
      skipped += 1;
      continue;
    }

    process.stdout.write(`Downloading ${file.url}...\n`);
    await download(file.url, destPath);
    downloaded += 1;
  }

  process.stdout.write(`Done. Downloaded ${downloaded}, skipped ${skipped}.\n`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
