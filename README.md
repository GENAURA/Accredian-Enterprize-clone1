# Accredian Enterprise — Partial Clone (Next.js)

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/), built with
Next.js App Router and Tailwind CSS as part of the Accredian assignment.

 Live demo: https://accredian-enterprize-clone1.vercel.app/
  Repo:

---

## 1. Tech Stack

- **Framework:** Next.js 14 (App Router), functional components + hooks
- **Styling:** Tailwind CSS (utility classes, no component library)
- **API:** Next.js Route Handler (`/app/api/leads/route.js`) — mock persistence to a local JSON
  file, used by the bonus lead-capture form
- **Deployment target:** Vercel

## 2. Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the app
# http://localhost:3000
```

To build for production locally:

```bash
npm run build
npm run start
```

### Deploying to Vercel

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
   https://accredian-enterprize-clone1.vercel.app/

> Note: the lead form writes submissions to `data/leads.json` on disk. This works locally,
> but Vercel's serverless filesystem is **read-only in production**, so on Vercel the API
> route will still validate and respond successfully, but the file write is wrapped in a
> try/catch and silently skipped (logged as a warning) rather than crashing the request.
> See "Improvements" below for how this would be made production-ready.

## 3. Project Structure

```
app/
  api/leads/route.js   # POST/GET route handler for the lead capture form
  components/          # All reusable UI building blocks
    Navbar.js
    Hero.js
    StatsBar.js
    WhyUs.js
    Solutions.js
    FeatureCard.js
    HowItWorks.js
    Results.js
    Testimonials.js
    LeadForm.js
    Footer.js
  globals.css           # Tailwind directives + small design-system utility classes
  layout.js             # Root layout + metadata
  page.js               # Composes all sections into the landing page
data/leads.json          # Local mock data store for submitted leads
```

Every visual section is broken into its own component and driven by a small local data array
(e.g. `FEATURES`, `TESTIMONIALS`, `STEPS`) rather than hard-coded JSX, so content edits or a
future CMS/API swap only touch one array per section.

## 4. Approach

1. **Research the reference site.** Since I couldn't render enterprise.accredian.com directly
   in this environment, I pulled together its section structure and messaging (hero positioning,
   stats, "why us" pitch, solution pillars, testimonials) from cached search snippets, then
   **rewrote all copy from scratch** in my own words/structure rather than lifting text
   verbatim — per the assignment's "do not copy templates directly" note.
2. **Section-first build.** Landing page broken into: Navbar → Hero → Stats bar → Why Us →
   Solutions (bento-style feature grid) → How It Works (4-step process) → Results (impact
   metrics) → Testimonials → Lead Form → Footer. This mirrors the real page's flow: hook →
   proof → value prop → offering → process → social proof → conversion.
3. **Component reusability.** Repeated visual patterns (feature cards, testimonial cards, stat
   blocks) are their own small components taking props, not copy-pasted JSX blocks.
4. **Responsiveness.** Built mobile-first with Tailwind breakpoints (`sm:`, `lg:`); nav
   collapses into a toggleable mobile menu; grids collapse from 3/4 columns down to 1 column.
5. **Bonus — lead capture form.** Implemented as a controlled client component (`LeadForm.js`)
   posting JSON to a Next.js Route Handler (`/api/leads`), which validates the payload and
   appends it to a local JSON file as a mock "database."

## 5. AI Usage Explanation

I used Claude (Anthropic) during development. Being transparent about where it helped and
what I changed:

**Where AI (Claude) helped:**
- Scaffolding the initial Next.js App Router project structure (folders, config files:
  `tailwind.config.js`, `postcss.config.js`, `next.config.mjs`, `jsconfig.json`).
- Drafting the first pass of each section component (Hero, Solutions grid, Testimonials,
  How It Works, Lead Form, Footer) based on the reference site's known section structure.
- Writing the Route Handler for the lead form, including basic email validation and the
  file-based mock persistence pattern.
- Drafting this README structure.

**What I modified/improved manually:**
- _(Fill this in honestly based on what you actually change before submitting — e.g.)_
  Adjusted color palette and typography scale to feel less generic; rewrote several section
  headlines and card copy; tuned spacing/padding on mobile breakpoints after testing on an
  actual phone width; added/removed sections based on what felt necessary vs. filler; tested
  the lead form end-to-end locally and fixed [describe any bug you hit]; reviewed all AI-
  generated code line-by-line for correctness rather than pasting blindly.

> Replace the bullet above with your own specific edits before submitting — evaluators are
> explicitly grading "what you modified or improved manually," so this section should reflect
> real changes you made, not a generic placeholder.

## 6. Improvements With More Time

- Replace the JSON-file mock store with a real database (Postgres via Prisma, or Supabase) so
  leads persist correctly on serverless deployments like Vercel.
- Add form-level analytics (e.g. Vercel Analytics or PostHog) to track conversion on the lead
  form.
- Add a CMS layer (Sanity/Contentful) for section content so non-engineers can edit copy.
- Add unit tests (Jest/React Testing Library) for the `LeadForm` component and API route.
- Add scroll-triggered animations (Framer Motion) instead of the simple CSS `fadeUp` keyframe.
- Add an actual pixel-level comparison pass against the live reference site and tighten
  spacing/typography to match more closely, since this build prioritized structure and
  reusability over pixel-perfect fidelity (per the assignment notes).
- Add proper `sitemap.xml`/`robots.txt` and Open Graph image for SEO.

## 7. Assignment Compliance Checklist

- [x] Landing page with all major sections
- [x] Navigation menu (desktop + mobile) & footer
- [x] Fully responsive (mobile + desktop breakpoints)
- [x] Reusable components (`FeatureCard`, testimonial card, stat card, etc.)
- [x] Next.js App Router, functional components + hooks
- [x] Tailwind CSS styling
- [x] API integration — Next.js Route Handler (`/api/leads`) for lead capture (bonus)
- [ ] Deployed on Vercel — _deploy and paste the live link above_
- [x] README with setup, approach, AI usage, improvements
