# Soonshot Help Center

A visual, searchable FAQ site for Soonshot. It includes locally written guides and does not fetch policy pages at runtime.

**Live site:** https://gijukim.github.io/soonshot-help-center/

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. `npm run build` creates a production bundle in `dist/`.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages through the workflow in `.github/workflows/deploy-pages.yml`.

## Content

Each guide in `src/data.js` has a title, short answer and detail sections. The `review` flag adds a visible note for topics whose underlying guidance is old or still being defined. Keep prices and other changing terms aligned with the current app checkout before publishing updates.
