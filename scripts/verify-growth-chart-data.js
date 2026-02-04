#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'skills', 'pediatrics-calculators', 'assets', 'data');

const EXPECTED = [
  'cdc/wtage.csv',
  'cdc/statage.csv',
  'cdc/bmiagerev.csv',
  'who/WHO-Boys-Weight-for-age-Percentiles.csv',
  'who/WHO-Girls-Weight-for-age Percentiles.csv',
  'who/WHO-Boys-Length-for-age-Percentiles.csv',
  'who/WHO-Girls-Length-for-age-Percentiles.csv',
  'who/WHO-Boys-Weight-for-length-Percentiles.csv',
  'who/WHO-Girls-Weight-for-length-Percentiles.csv',
  'who/WHO-Boys-Head-Circumference-for-age-Percentiles.csv',
  'who/WHO-Girls-Head-Circumference-for-age-Percentiles.csv'
];

let missing = 0;
let empty = 0;

for (const rel of EXPECTED) {
  const filePath = path.join(DATA_DIR, rel);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing: ${rel}`);
    missing += 1;
    continue;
  }
  const stat = fs.statSync(filePath);
  if (stat.size === 0) {
    console.error(`Empty: ${rel}`);
    empty += 1;
  }
}

if (missing === 0 && empty === 0) {
  console.log('All expected growth chart data files are present and non-empty.');
  process.exit(0);
}

console.error(`Verification failed. Missing: ${missing}, Empty: ${empty}`);
process.exit(1);
