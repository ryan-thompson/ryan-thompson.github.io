# AGENTS.md

## Commands

- `npm run dev` - Start the Astro development server
- `npm run build` - Build the static production site
- `npm run preview` - Preview the production build

## Requirements

- Node.js >= 22.12.0
- npm >= 9.6.5

## Architecture

The site has three authored sources:

- `src/pages/index.astro` - The only route, page shell, metadata, profile markup, and inline social icons
- `src/content/bio.md` - Directly imported Markdown biography and profile data
- `src/styles/global.css` - All layout, typography, theme, responsive, interaction, and animation styles

`bio.md` frontmatter is the content interface. Keep these fields: `name`, `institution`, `shortBio`, `email`, `googleScholar`, `github`, and `linkedin`. Its Markdown body supplies the main biography.

Public files are limited to `headshot.webp`, `RyanThompson_CV.pdf`, `favicon.ico`, `favicon.svg`, and `robots.txt` in `public/`.

## Constraints

- Publish only the root `/` route as a static site for `https://ryan-thompson.github.io/`; do not add a repository subpath or Astro `base` setting.
- Preserve the two-column desktop layout, sticky profile sidebar, responsive stacking, automatic light/dark palette, hover/focus states, reduced-motion behavior, and entrance animation.
- Do not add `<style>` tags to Astro files. Keep styles in `src/styles/global.css`.
- Import `bio.md` directly; do not reintroduce Astro content collections, schemas, adapters, config/type barrels, or sample content routes.
- Do not reintroduce Tailwind, theme JavaScript, client-side routing, analytics scaffolding, LaTeX/math processors, RSS/sitemap integrations, or additional content routes.
- Keep the page free of client-side JavaScript unless a future requirement explicitly needs it.
- Inline only the five profile/social SVG icons used by the page, using valid unnested SVG markup.
