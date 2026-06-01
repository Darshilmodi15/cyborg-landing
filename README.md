# Cyborg Nexus Landing Page

A premium cyborg-themed landing page built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN-style primitives, Framer Motion, GSAP ScrollTrigger, Lenis, Three.js, React Three Fiber, Drei, Lucide React, and CountUp.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run format
```

## Project Structure

```text
src/
  app/
  components/
    faq/
    features/
    footer/
    hero/
    stats/
    technology/
    testimonials/
    timeline/
    ui/
  hooks/
  lib/
  styles/
public/
```

## Production Optimizations

- App Router metadata, Open Graph, Twitter cards, `sitemap.xml`, and `robots.txt`.
- R3F hero scene is dynamically loaded on the client to keep server rendering lean.
- Lenis and animation loops respect `prefers-reduced-motion`.
- GSAP ScrollTrigger work is scoped and cleaned up on unmount.
- Tailwind v4 tokens keep color and typography consistent across sections.
- No external images are required for first paint; the hero uses procedural canvas and Three.js visuals.

## Deployment

Deploy on Vercel:

```bash
npm run build
vercel
```

Set the production domain in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` if you move away from the placeholder Vercel URL.

## Notes

- The footer legal pages are placeholders and should be replaced before a real launch.
- `npm audit` currently reports 2 moderate advisories from the installed dependency tree. Review before production hardening.
