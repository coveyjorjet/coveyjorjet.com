# coveyjorjet.com

Personal homepage. Not a portfolio.

## Stack

- [Astro](https://astro.build) — static site generator
- [TailwindCSS](https://tailwindcss.com) — utility-first CSS
- [Alpine.js](https://alpinejs.dev) — minimal JS reactivity
- [Geist Mono](https://vercel.com/font) + Inter — typography
- Custom dark / light design system

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

Push to `main` — Cloudflare Pages builds and deploys automatically.

## CI

GitHub Actions runs a build check on every push and pull request to `main`.
It does not deploy — that is Cloudflare's job.

```bash
# Run locally with act
act -j ci
```

## Structure

```
src/
  components/     Astro components
  layouts/        Base HTML layout
  pages/          Route pages (index, 404)
  styles/         Global CSS & design tokens
  utils/          Theme init script
public/           Static assets (favicon, robots.txt)
.github/
  workflows/
    build.yml     CI check — build only, no deploy
```

> The CLI terminal engine is inlined directly inside `Terminal.astro` using `is:inline` scripts — no separate module files.

## Terminal commands

Type `help` in the terminal on the site to see all available commands.
