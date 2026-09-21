# Soonshot Help

A static, searchable FAQ site with 52 locally written guides. The site reads its content from `src/data.js`; it does not fetch policy pages at runtime.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. `npm run build` creates a production bundle in `dist/`.

## Content

Each guide in `src/data.js` has a title, short answer and detail sections. The `review` flag adds a visible note for topics whose underlying guidance is old or still being defined. Keep prices and other changing terms aligned with the current app checkout before publishing updates.
