# Ryan Thompson's portfolio

A minimal, single-page academic portfolio built with [Astro](https://astro.build/).

## Requirements

- Node.js 22.12.0 or newer
- npm 9.6.5 or newer

## Local development

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Editing the site

- Update profile details, social links, and biography copy in `src/content/bio.md`.
- Update the page structure and metadata in `src/pages/index.astro`.
- Update presentation in `src/styles/global.css`.
- Replace `public/headshot.webp`, `public/RyanThompson_CV.pdf`, or the favicon files while keeping the same filenames to update those assets.

The site intentionally publishes only the homepage. The CV, portrait, and favicons are served as static files from `public/`.

## Production build

```sh
npm run build
npm run preview
```

The static site is written to `dist/`. It is configured for root-path deployment at `https://ryan-thompson.github.io/` and can be published with the included GitHub Pages workflow.

## License

See [LICENSE](LICENSE).
