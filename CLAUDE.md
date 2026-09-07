# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for CodavaDev (https://codava.dev). Vite + React 18 + TypeScript SPA, Tailwind CSS,
deployed to GitHub Pages. Originally scaffolded by Anima from a Figma design (hence the
`anima-project` package name and the `src/screens/` layout).

## Commands

```bash
npm install
npm run dev          # Vite dev server
npm run build        # vite build -> dist/
npm run deploy       # runs build, then gh-pages -d dist (publishes the gh-pages branch)
```

There is no lint, test, or typecheck script. `npm run build` does **not** typecheck — Vite transpiles
TSX with esbuild only. `tsconfig.app.json` enables `strict`, `noUnusedLocals`, and
`noUnusedParameters`, but nothing enforces them, so run `npx tsc -b` manually to see type errors.

Both `package-lock.json` and `pnpm-lock.yaml` are committed; `node_modules` was installed with npm.

### Environment

No environment variables are required — the app runs with no `.env`. (EmailJS keys used by the
contact forms are hardcoded at the call sites; public keys by design.)

## Architecture

### Page composition

`src/index.tsx` is the entry point: it imports `tailwind.css` (repo root, not `src/`), runs the
GitHub Pages SPA redirect shim, and declares every route in one `<BrowserRouter>`. There is no
`App.tsx` and no lazy loading.

Each route maps to a directory under `src/screens/<PageName>/`:

```
src/screens/DesignPage/
  DesignPage.tsx          # page shell: background layers, <HeaderSection/>, <main>, <FooterSection/>
  index.ts                # export { DesignPage } from "./DesignPage"
  sections/
    DesignHeroSection/{DesignHeroSection.tsx,index.ts}
    DesignFeaturesSection/...
    DesignCTASection/...
```

Pages hold no logic — they stack background divs and render section components in order. All content
and layout lives in the section components. Sections are page-scoped and not reused across pages;
each service page has its own `<Name>HeroSection` / `<Name>FeaturesSection` / `<Name>CTASection`
triple, duplicated by design rather than parameterized.

`src/screens/FixedComponents/` holds the genuinely shared chrome: `HeaderSection` (nav + services
mega-dropdown + mobile drawer), `FooterSection`, `CTASection`, `SectionCTA`.

Despite the name, `HomePageDesktop` has no mobile counterpart — every page is responsive through
Tailwind breakpoints alone, and the `Desktop` suffix is a leftover from the Anima export.

Not every page directory has an `index.ts` — `AboutUsPage`, `PortfolioPage`, `ContactPage`,
`CaseStudiesPage`, `NotFoundPage`, and `AnalyticsAndTrackingPage` are imported by full file path in
`src/index.tsx`. Match whichever form the page already uses.

### Adding a service page

1. Create `src/screens/<Name>Page/` with the shell + `sections/` triple above (copy `DesignPage`).
2. Add the route in `src/index.tsx`.
3. Add nav entries in `HeaderSection.tsx` (`servicesItems`) and `FooterSection.tsx`.
4. Add translation keys to **both** `src/locales/en.json` and `ro.json`.
5. Add the URL to `public/sitemap.xml`.

Note: `FooterSection` currently links `/services/ai-consultant` and `/services/digital-engineering`,
which have no routes and fall through to `NotFoundPage`.

### i18n — custom, not i18next

`i18next` / `react-i18next` are in `package.json` but **unused**. `src/lib/i18n.ts` is a hand-rolled
~70-line class: dot-path lookup into `src/locales/{en,ro}.json`, a listener list for change
notification, and `t(key, { returnObjects: true })` for arrays. Romanian is the default and the
fallback; a missing key logs a warning and renders the key string itself.

`src/contexts/LanguageContext.tsx` exports both:

- `useTranslation()` — subscribes to the i18n listener list and force-updates on language change.
  **Import it from `contexts/LanguageContext`, never from `react-i18next`.**
- `useLanguage()` — `{ language, setLanguage }`, persists to `localStorage['preferred-language']`.

Because `t()` walks a plain object, arrays of objects (FAQs, testimonials, feature lists) are stored
in the locale JSON and pulled with `returnObjects` plus a manual `as` cast:

```tsx
const faqs = t('faq.questions', { returnObjects: true }) as Array<{question: string, answer: string}>;
```

`en.json` and `ro.json` currently have identical key sets (752 keys). Keep them in sync — there is no
tooling to catch drift.

### Portfolio & case-study content

Project entries are hardcoded arrays declared inline inside the section components, not extracted to
data files or the locale JSON. `PortfolioGridSection.tsx` is ~880 lines and holds both the grid and
the full detail view. Each entry looks like:

```ts
{ id, title, description, images: ["/portfolio/eurotour/img1.jpg", …],
  challenge, solution, impact, technologies: [...] }
```

`images` are public-directory paths — drop files under `public/portfolio/<project>/` and reference
them by absolute URL; they are not imported as modules.

**This content is the one place the i18n rule does not hold.** These sections call `t()` only for
chrome — badges, headings, filter labels, buttons — while every project's `title`, `description`,
`challenge`, `solution`, and `impact` is hardcoded English that does not change when the user
switches to Romanian. Adding a project means editing the array, not the locale files.

### Styling

Tailwind v3 via the PostCSS plugin configured inline in `vite.config.ts` (the `@tailwindcss/vite` v4
dependency is unused). `tailwind.config.js` defines the shadcn HSL token set plus a large custom
keyframe/animation library (`fade-in-up`, `glow`, `float`, `matrix`, `scroll-left`, …) and the
`below400` / `below385` max-width breakpoints. Design tokens live as CSS variables in `tailwind.css`.

In practice the site's dark palette is written as **hardcoded arbitrary values**, not tokens:
`#00041F` / `#00020F` backgrounds, `#194EFF` as the accent, `white/60`-style opacity text. Follow the
surrounding file rather than reaching for the shadcn `primary`/`accent` tokens, which are configured
but effectively unused.

### Components

- `src/components/ui/` — shadcn/Radix primitives, plus `animated-elements.tsx`, the framer-motion
  wrappers (`FadeIn`, `StaggerContainer`, `StaggerItem`, `GlowButton`, `TypewriterText`, …) that
  nearly every section uses for entrance animation.
- `src/components/magicui/` — vendored MagicUI effects (`Marquee`, `AuroraText`, `BoxReveal`,
  `AnimatedList`, `ScrollProgress`). Two are `.jsx`, untyped; `src/types/magicui.d.ts` covers them.
- Imports are overwhelmingly relative (`../../../../components/ui/...`). The `@/` alias is configured
  in `vite.config.ts` and `tsconfig.app.json` but used in only a few files. The `alias` field in
  `package.json` is a leftover and has no effect.

**Two motion packages are installed and both are in use.** Vendored components under
`src/components/` import from `motion/react`; hand-written screens (`HeaderSection`, `NotFoundPage`)
import from `framer-motion`. They are the same library under different package names — match the
file you are editing rather than unifying opportunistically.

Dead code to be aware of before extending it: `components/ui/globe.tsx` (and its `cobe` dependency)
has no importers, as do the `separator`, `pagination`, `dropdown-menu`, and `input` primitives. The
`imagemin` / `imagemin-webp` devDependencies are referenced by no script or config — portfolio images
are a hand-mixed set of `.jpg` and `.webp`.

### Backend touchpoints

There is no backend of the site's own — one third-party integration only:

- **EmailJS** — contact forms in `ContactPage/sections/ContactFormSection` and
  `WebDevelopmentPage/sections/WebDevelopmentFeaturesSection`. Service/template/public keys are
  hardcoded at the call sites (public keys by design), and the two forms duplicate the send logic.

The footer newsletter form in `FooterSection.tsx` has no backend — on submit it just shows the
success message; the entered email is not stored or sent anywhere.

Google Analytics (`G-0LK5WP4QKB`) is a plain gtag snippet in `index.html`.

### GitHub Pages routing

Pages can't serve client-side routes, so `public/404.html` encodes the path into a `?/`-prefixed
query and redirects to `/`, and the IIFE at the top of `src/index.tsx` decodes it back via
`history.replaceState` before React mounts. This shim runs before the React imports — keep it there.

`vite.config.ts` sets `base: "/"` because the site is on the apex domain `codava.dev` (see `CNAME`).
`CNAME` sits at the repo root, not in `public/`, so it is not copied into `dist/` — the custom domain
relies on the GitHub Pages repo setting.

### SEO

All meta tags are static in `index.html`; there is no per-route `<title>` or meta handling (no
react-helmet). `public/sitemap.xml` and `public/robots.txt` are maintained by hand. Two stray files: a duplicate
`src/screens/WebDevelopmentPage/sections/sitemap.xml` that is not served, and `public/levelauto.md`
(a client testimonial note) that is served but linked from nowhere.
