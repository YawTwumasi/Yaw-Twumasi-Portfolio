# Yaw Twumasi — Animated Developer Portfolio

A single-page, richly animated portfolio built on the existing TanStack Start + Tailwind v4 + shadcn stack. Navy blue + white with glassmorphism, dark/light mode, and scroll-driven motion.

## Tech & libraries

- React 19 + TypeScript + Tailwind v4 (already set up)
- `framer-motion` (already common in stack) — page/scroll/hover animations
- `lucide-react` — icons
- `next-themes` — light/dark toggle (class-based `dark` variant already wired in styles.css)
- `@emailjs/browser` — contact form send (public keys only; user can wire IDs later)
- shadcn primitives already available (Button, Dialog, Card, Sheet, etc.)

## Design system (src/styles.css)

- Replace default palette with navy/white theme:
  - Light: bg white, foreground deep navy `oklch(0.18 0.05 260)`, primary navy `oklch(0.32 0.12 260)`, accent electric blue `oklch(0.62 0.19 256)`
  - Dark: bg deep navy `oklch(0.14 0.04 260)`, foreground near-white, primary electric blue, glass surfaces via `bg-white/5` + `backdrop-blur-xl`
- Add gradient + shadow tokens: `--gradient-hero`, `--gradient-primary`, `--shadow-glow`, `--shadow-elegant`
- Typography: Space Grotesk (display) + Inter (body), loaded via `<link>` in `__root.tsx` head
- Utility classes: `.glass`, `.glow`, `.text-gradient`, `.story-link`
- Keyframes: `float`, `blob`, `shimmer`, `ripple`, `typing`, `caret`

## Route structure

Single landing route at `/` with anchored sections + a scroll spy nav. Additional utility routes:

- `src/routes/index.tsx` — full portfolio landing
- `__root.tsx` — real SEO metadata (title "Yaw Twumasi — Frontend Developer & UI/UX Designer"), OG tags, font `<link>`, ThemeProvider

## Components (`src/components/portfolio/`)

- `Navbar.tsx` — sticky glass nav, scroll-spy active links, theme toggle, mobile Sheet
- `ScrollProgress.tsx` — top progress bar tied to scrollYProgress
- `BackToTop.tsx` — floating button, fades in past 400px
- `FloatingBackground.tsx` — animated blurred blobs + gradient mesh (hero + section backdrops)
- `Hero.tsx` — animated name reveal (letter stagger), typing effect cycling ["Frontend Developer","UI/UX Designer","Graphic Designer"], tagline, two CTAs with ripple + glow, floating shapes
- `About.tsx` — two-column, scroll-reveal, highlight cards for goals & unique value
- `Skills.tsx` — grouped (Frontend, UI/UX, Graphic, Other) with animated horizontal bars (framer-motion `whileInView` width) and circular radial for top skills
- `Projects.tsx` — filter chips (All / Web App / Design), project card grid; TENCARE as featured card with hover tilt/scale + glow; "View Live" → external, "View Code" placeholder disabled, "Details" opens Dialog modal with description, stack badges, screenshots slot
- `Gallery.tsx` — Creative Works masonry grid with category filter (Posters, Flyers, Logos, Branding, Social Media); click opens lightbox Dialog with zoom-in animation; placeholder images from `src/assets/gallery/` (generated)
- `Experience.tsx` — vertical animated timeline; Tema Oil Refinery entry with responsibilities list, animated dot + connecting line drawn on scroll
- `Education.tsx` — vertical timeline mirror for Central University diploma
- `Certificates.tsx` — grid of certificate cards with lock badge; click opens view-only modal (image/iframe PDF with `controlsList="nodownload"`, right-click disabled, no download button); upload input stores file in memory (URL.createObjectURL) — no persistence needed for v1
- `Contact.tsx` — split layout: contact info cards (email, phone, location with lucide icons) + form (Name, Email, Message) validated with zod; submits via EmailJS (env-config placeholders), success toast via sonner; floating WhatsApp button linking to wa.me/233257492161; social row (GitHub placeholder)
- `CvDownload.tsx` — animated download button with tooltip; downloads `/cv/yaw-twumasi-cv.pdf` placeholder (user replaces file later)
- `Footer.tsx` — minimal glass footer

## Animation patterns

- `framer-motion` `whileInView` + viewport once for scroll reveals (fade + slide-up)
- Stagger children on section headings
- Hero name: letters animate with spring, then role cycles via typing hook (`useTypingCycle`)
- Buttons: `whileHover={{ scale: 1.03 }}`, `whileTap={{ scale: 0.97 }}`, custom ripple on click
- Counters: `motion.span` with `useMotionValue` + `animate` on inView (years of study, projects count, skills count)
- Background blobs: infinite `animate` with random offsets
- Page transition: `AnimatePresence` on route (single route now, but scoped fade)

## Data

- Static TS modules under `src/data/`: `projects.ts`, `skills.ts`, `gallery.ts`, `experience.ts`, `education.ts`, `certificates.ts` — easy to edit later

## Assets

- Generate: hero portrait placeholder silhouette, 6 gallery placeholder designs (posters/flyers/logos/branding/social), 1 TENCARE preview mock — saved to `src/assets/`
- Placeholder CV PDF at `public/cv/yaw-twumasi-cv.pdf`

## Accessibility & SEO

- Semantic sections with proper h1/h2 hierarchy, single H1 in hero
- Alt text on all images, aria-labels on icon buttons
- Meta: title <60, description <160, OG + Twitter card, JSON-LD Person schema
- `prefers-reduced-motion` respected (motion components check via `useReducedMotion`)

## Out of scope for v1 (noted, easy to add later)

- Real EmailJS credentials — form wired, keys blank until user provides
- Real certificate/CV files — upload UI works, user drops in final files
- GitHub repo link — button present but disabled

## File additions summary

```
src/routes/__root.tsx                (edit: fonts, SEO, ThemeProvider)
src/routes/index.tsx                 (rewrite: assemble portfolio)
src/styles.css                       (edit: navy theme, tokens, keyframes, utilities)
src/components/theme-provider.tsx
src/components/portfolio/*.tsx       (all sections above)
src/hooks/use-typing-cycle.ts
src/hooks/use-scroll-progress.ts
src/data/*.ts
src/assets/*                         (generated images)
public/cv/yaw-twumasi-cv.pdf         (placeholder)
```
