# Growth Chart Data Files

This directory stores the local data tables used by the CDC 2000 growth charts and WHO 2006 growth standards.

## Fetching Data
Run the data fetch script from the repository root:

```bash
node scripts/fetch-growth-chart-data.js
```

The script downloads the official data files and stores them in the folders below.

## Expected Files

### CDC (2000) z-score tables
Stored in `skills/pediatrics-calculators/assets/data/cdc/`:
- `wtage.csv` (weight-for-age z-score LMS tables)
- `statage.csv` (stature-for-age z-score LMS tables)
- `bmiagerev.csv` (BMI-for-age z-score LMS tables)

### WHO (2006) percentile tables
Stored in `skills/pediatrics-calculators/assets/data/who/`:
- `WHO-Boys-Weight-for-age-Percentiles.csv`
- `WHO-Girls-Weight-for-age Percentiles.csv`
- `WHO-Boys-Length-for-age-Percentiles.csv`
- `WHO-Girls-Length-for-age-Percentiles.csv`
- `WHO-Boys-Weight-for-length-Percentiles.csv`
- `WHO-Girls-Weight-for-length-Percentiles.csv`
- `WHO-Boys-Head-Circumference-for-age-Percentiles.csv`
- `WHO-Girls-Head-Circumference-for-age-Percentiles.csv`

## Notes
- Keep file names exactly as downloaded to simplify automated parsing.
- These files are source data only and should be treated as read-only.

## References
See: [references/pediatrics-calculators-sources.md](../../references/pediatrics-calculators-sources.md)
