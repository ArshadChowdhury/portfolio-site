# Mohammed Arshad – portfolio

Personal site of Mohammed Arshad, Senior Full-Stack Software Engineer.
Live at <https://arshadchowdhury.vercel.app>.

## Stack

- Next.js 16 (App Router, Turbopack) with React 19 and TypeScript
- Tailwind CSS, Headless UI, Heroicons
- `next/font` (Inter, self-hosted at build time), `next/image`, `next/og` for the social banner
- react-hook-form for the contact form, axios for the API client
- Vercel Analytics, deployed on Vercel

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes: `/`, `/about`, `/experience`, `/projects`, `/contact`, plus `sitemap.ts`, `robots.ts`, `manifest.ts` and the OG/Twitter image routes |
| `data/` | All site content as typed data: `experience.ts`, `projects.ts`, `focusAreas.tsx`, `techStack.ts`, `testimonials.ts` |
| `components/` | Page sections and UI (hero, slider, nav, footer, contact form) |
| `public/` | Images and `Mohammed_Arshad_Resume.pdf` |
| `next.config.js` | Static security headers and permanent redirects for retired URLs |
| `proxy.ts` | Per-request Content-Security-Policy with a script nonce, forwarded to the layout as `x-nonce`. Reading it makes pages render dynamically. |

Content changes go in `data/`; the pages render whatever is there. The
homepage slider shows every project that defines a `slider` entry.

## Local development

```bash
pnpm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL for the contact form
pnpm dev
```

Then open <http://localhost:3000>.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | For the contact form | Backend that receives `POST {API_URL}/contact/portfolio`. Without it the form fails with 404. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical origin for metadata, sitemap and robots. Defaults to the Vercel URL. |

## Checks

```bash
pnpm lint        # eslint, zero warnings allowed
npx tsc --noEmit # type check
pnpm build       # production build
```

## Updating the resume

Replace `public/Mohammed_Arshad_Resume.pdf`. The nav, hero and experience page
link to that path, and `/Arshad_Resume.pdf` redirects to it for old links.
