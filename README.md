# coveyjorjet.com

Personal homepage. Not a portfolio.

## Stack

- [Astro](https://astro.build) — static site generator
- [TailwindCSS](https://tailwindcss.com) — utility-first CSS
- [Alpine.js](https://alpinejs.dev) — minimal JS reactivity
- Solarized Dark / Light design system

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages automatically.

Custom domain: `coveyjorjet.com` — set in repo Settings → Pages → Custom domain.

## Structure

```
src/
  components/     Astro components
  layouts/        Base HTML layout
  pages/          Route pages
  core/           (reference) CLI engine modules
  features/       (reference) Command implementations
  utils/          Shared utilities
  styles/         Global CSS / design tokens
public/           Static assets
.github/
  workflows/      CI/CD
```

## Commands

Type `help` in the terminal on the site to see all available commands.
