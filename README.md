# Dr. Taruna — Orthodontic Clinic Website

Marketing website for **Dr. Taruna Pratap Singh, Consultant Orthodontist** — built as a Next.js frontend (in `frontend/`) paired with a separate Spring Boot backend, [dental-backend](https://github.com/KartikayAwasthi/dental-backend), that handles contact and referral form submissions.

## Features

- Hero section with clinic branding and key stats
- Treatment results shown as before/after cases
- Services overview and a treatments dropdown
- FAQ section
- Floating chatbot assistant
- Contact form (posts to the `dental-backend` API) with client-side validation
- SEO: generated `sitemap.ts` and `robots.ts`

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React + TypeScript
- Deployed on Vercel — `vercel.json` at the repo root points the deployment at `frontend/`

## Project structure

```
frontend/
  src/
    app/          Routes — page.tsx, layout.tsx, loading.tsx, not-found.tsx, sitemap.ts, robots.ts
    components/    UI sections (hero, services, treatment results, FAQ, chatbot, contact form, ...)
    data/           Static content (services, FAQs, treatment case data)
    hooks/          Custom React hooks
    lib/             API client / utilities
    styles/           Global styles
    types/             Shared TypeScript types
vercel.json      Points the Vercel deployment at frontend/
```

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Related

- [dental-backend](https://github.com/KartikayAwasthi/dental-backend) — Spring Boot API for contact/referral form submissions
