# Shristi Sharan — Portfolio

Software Engineer building intelligent systems at scale. **Google • AI/ML • Healthcare AI**

Live: [shristi-gamma.vercel.app](https://shristi-gamma.vercel.app)

Production software, applied machine learning and healthcare AI — from distributed data systems and LLM applications to biomedical research (PPG-ViT-NET sleep staging, dental image segmentation).

## Stack

Next.js 14 (App Router, fully static) · React 18 · Tailwind CSS. No UI or animation libraries — motion is CSS plus a small canvas waveform, and it respects `prefers-reduced-motion`. Fonts (Inter, Instrument Serif, JetBrains Mono) are self-hosted from `@fontsource` via `next/font/local`, so builds need no network access.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All copy lives in [`src/app/data.js`](src/app/data.js): experience, research, healthcare highlights, skills, testimonials and links. Sections in `src/app/components/` render from it.

The printable resume at `/resume` renders from the same data. `public/shristi-sharan-resume.pdf` is an A4 print of that page; regenerate it after editing `data.js` (open `/resume` in Chrome → Print → Save as PDF, margins "None"), or replace it with an official resume PDF.

## SEO

Metadata, Open Graph/Twitter cards, a generated OG image (`opengraph-image.js`), `robots.txt`, `sitemap.xml` and Person JSON-LD are defined in `src/app/`.

## License

[MIT](LICENSE)
