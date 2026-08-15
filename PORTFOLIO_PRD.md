# Aravind Annaldas — Portfolio PRD

Status: v2 — revised after your feedback (section consolidation) and resume/details intake. Ready for implementation once you confirm.

---

## 0. Premise & Constraints

- Rebuilding from zero. Nothing from the current MUI-based build carries over conceptually.
- Subject: Aravind Annaldas, Frontend Software Engineer, Sep 2023–present at Enspirit Technologies (Hyderabad) — sole frontend developer on a travel booking platform (flights, hotels, trains) working alongside 4 backend engineers + 1 full-stack dev in a 9–11 person team. Frontend stack: React, Next.js, TypeScript, React Query, Tailwind CSS, Material UI (prior work), Framer Motion, Axios, Context API. Learning backend since Apr 2025: Node, Express, JWT, SQL, Prisma, Postgres.
- Content reads as written by a working engineer, not marketing copy. No "I'm passionate about," no buzzwords, no invented seniority.
- Stack swap confirmed: MUI/Emotion out, Tailwind + shadcn/ui + Framer Motion + GSAP + Lenis in.
- **Section count consolidated per your feedback** — see §3/§9 for the reduced structure (12 sections instead of 18).
- Every animation must earn its place by improving storytelling or usability for a recruiter/hiring-manager audience — not exist because it looks impressive. If it doesn't help someone understand the work faster or navigate more easily, it's cut.

---

## 1. Design Philosophy

The site is built around one idea: **restraint as a flex.** Anyone can throw particles and gradients at a page. The differentiation is a portfolio that feels expensive because of what it *doesn't* do — no decorative noise, no motion without a reason, no section that exists because "portfolios have one."

Three working principles:

1. **Editorial, not templated.** Layout draws more from Stripe/Linear's product-page rhythm than typical "hero + cards + timeline" portfolio templates.
2. **Motion is narration, not decoration.** Every animation either reveals information progressively or reinforces a spatial relationship. Optimized for a recruiter/engineering-manager audience, not for awards juries — if an effect doesn't aid comprehension or usability, it's removed, however good it looks in isolation.
3. **Real work, shown honestly.** The travel booking platform is the entire credibility story. It gets treated like an actual case study — problem, constraint, tradeoff, outcome. No fabricated metrics, no fake testimonials, no padded milestones.

---

## 2. User Journey

**Recruiter (skimming, 90 seconds):** Hero → one-line "what I build" → Experience (impact-framed) → skimmable tech stack. Leaves knowing: role, tenure, one concrete proof point (travel platform), how to make contact (always one click away via sticky nav CTA).

**Engineer/hiring manager (evaluating, 5+ minutes):** Goes into the Travel Platform case study for architecture and tradeoffs. Checks Expertise & Stack for depth signals. May inspect the site itself (view-source, Lighthouse) — so this site's own code quality is part of the pitch. Backend learning section answers "is this real growth or a portfolio buzzword" with honest status per topic, not a fabricated proficiency bar.

**Fellow developer (craft/inspiration):** Notices the motion system, theme transition, tech-stack visualization. Checks GitHub via the Open Source section.

Primary conversion goal for all three: **Contact form submission or resume download.**

---

## 3. Wireframe — Consolidated (12 sections, desktop baseline)

Per your note that 18 sections is too many for a recruiter to sit through, merged as follows: Technical Expertise + Tech Stack → one section. Architecture Thinking + Development Process → one section. Achievements + Timeline → one section. Featured Projects + Case Study → one section (projects grid, travel platform expands inline into the deep dive). Testimonials → removed from the live site entirely until real ones exist (not even a placeholder card — an empty "coming soon" card is still a section recruiters scroll past for nothing; better to just not show it). Blog → route scaffolded, not linked from nav/homepage until there's a post.

```
┌─────────────────────────────────────────────┐
│ Sticky Nav: Mark · Section links · Theme ·   │
│ Resume/Contact CTA · Scroll progress bar     │
├─────────────────────────────────────────────┤
│ 1. HERO                                      │
│    Name, role headline, one-line positioning,│
│    CTA pair, interactive cursor-reactive bg  │
├─────────────────────────────────────────────┤
│ 2. ABOUT                                     │
│    Narrative (left) + real metric strip      │
├─────────────────────────────────────────────┤
│ 3. EXPERIENCE                                │
│    Enspirit Technologies role, story-framed, │
│    scroll-tied progress line                 │
├─────────────────────────────────────────────┤
│ 4. FEATURED PROJECTS                         │
│    Grid: Travel Platform (expands to full    │
│    case study), Resume Builder, E-commerce   │
│    Admin Dashboard, backend project slots    │
│    (placeholders, swappable later)           │
├─────────────────────────────────────────────┤
│ 5. TRAVEL PLATFORM CASE STUDY (deep dive,    │
│    anchored from #4, not a separate homepage │
│    scroll section — opens as an expanded     │
│    view/route, keeps homepage scroll shorter)│
├─────────────────────────────────────────────┤
│ 6. BACKEND LEARNING JOURNEY                  │
│    Honest status per topic (Node, Express,   │
│    JWT, SQL, Prisma) since Apr 2025           │
├─────────────────────────────────────────────┤
│ 7. EXPERTISE & STACK                         │
│    Merged tech-stack + expertise section,    │
│    one interactive visualization             │
├─────────────────────────────────────────────┤
│ 8. HOW I WORK                                │
│    Merged architecture-thinking + process,   │
│    one 4-step rail                           │
├─────────────────────────────────────────────┤
│ 9. MILESTONES                                │
│    Merged achievements + timeline, one       │
│    compact honest strip (real dates only)    │
├─────────────────────────────────────────────┤
│ 10. OPEN SOURCE                              │
│    GitHub activity + pinned repos            │
│    (AravindAnnaldas-Dev)                    │
├─────────────────────────────────────────────┤
│ 11. CONTACT                                  │
│    Form + direct channels + availability     │
├─────────────────────────────────────────────┤
│ 12. FOOTER                                   │
│    Mark, nav, socials, theme, back-to-top    │
└─────────────────────────────────────────────┘
```

Not on the homepage: Testimonials (cut until real), Blog (route exists at `/blog`, no nav link, no homepage teaser — see §30).

Mobile: single column, timeline collapses linear, stack visualization becomes a filterable tag grid.

---

## 4. Visual Direction

- **Mood**: quiet-luxury tech — Linear's precision + Stripe's confidence, warmer type voice than Apple's clinical coldness.
- **Surface language**: flat by default; glass/blur reserved for floating UI (nav, cursor-following elements) — never a section-background gimmick.
- **Grid**: 12-col, generous gutters, deliberate asymmetry in project spreads (60/40) to avoid the template tell.
- **Imagery**: real product screenshots (travel platform, resume builder, admin dashboard) in a consistent device-frame mockup, subtle depth — never stock photography. Placeholder projects get a clearly-labeled "screenshot coming" state, not a fake mockup.
- **Iconography**: Lucide, single stroke weight, sized to type baseline.
- **Texture**: one subtle grain overlay (2–3% opacity) on hero/contact backgrounds only.

---

## 5. Color System

CSS variables, three modes: `light`, `dark`, `system` (persisted in `localStorage`, applied pre-hydration via inline script to avoid flash).

**Dark (default):**
- `--bg`: #0A0A0B · `--surface`: #131316 · `--surface-raised`: #1B1B1F · `--border`: #26262B
- `--text-primary`: #F2F2F0 · `--text-secondary`: #A3A3AC
- `--accent`: #6EE7B7 · `--accent-warm`: #F5C77E (rare highlight only — e.g. "in progress" badges in Backend Journey/Milestones) · `--accent-contrast`: #06110C

**Light:**
- `--bg`: #FAFAF8 · `--surface`: #FFFFFF · `--surface-raised`: #F2F2EF · `--border`: #E4E4E0
- `--text-primary`: #14140F · `--text-secondary`: #55554F
- `--accent`: #0F9D6E (darkened for AA on white) · `--accent-warm`: #B8791A

All pairings AA-verified (4.5:1 body, 3:1 large/UI). Theme swap: circular clip-path reveal from the toggle button, 400–500ms, `cubic-bezier(0.65,0,0.35,1)`.

---

## 6. Typography

- **Display/headings**: self-hosted variable font (Geist or General Sans), fluid clamp-based sizing up to ~96px hero, tight tracking (-0.02em), tight leading (1.05–1.1).
- **Body**: Inter/Geist Text, 16–18px base, 1.6–1.7 line-height, ~68ch max measure.
- **Mono**: JetBrains Mono / Geist Mono for code fragments, stack tags, milestone dates, section indices.
- **Scale**: modular ~1.25 ratio via `clamp()`.
- **Type as UI**: mono-uppercase eyebrows, numbered section indices ("03") as navigational aid.

---

## 7. Animation Strategy

Reduced to only the moves that improve storytelling or usability — see §0. Cut from the original brief: 3D scenes/R3F, infinite particle backgrounds, morphing blobs, horizontal scroll-snap pinning as a structural device (kept simple vertical scroll instead, since a recruiter skimming doesn't want to fight sideways scroll to read a timeline).

| Technique | Where | Why it earns its place |
|---|---|---|
| Text reveal (line mask/clip) | Hero headline, section titles | Directs eye order on first paint, cheap |
| Stagger reveal on scroll | Cards, timeline items, milestone entries | Paces information so it's not dumped at once |
| Magnetic buttons | Primary CTAs only (hero, contact) | Signals "this is the action to take" |
| Cursor-aware spotlight | Hero background, project cards on hover | Depth cue on hover states, cheap (radial-gradient follow) |
| Scroll progress bar | Global nav | Orientation for long-scroll recruiters |
| Scroll-tied progress line | Experience, Milestones | Visualizes "this is a continuous history," not decoration |
| 3D tilt on hover | Project mockup images only | Reinforces "this is a real screenshot," contained |
| Interactive stack visualization | Expertise & Stack | Only real "showpiece" — replaces boring skill bars with something a recruiter can actually explore in 10 seconds |
| Smooth scroll (Lenis) | Global | Consistency across all scroll-driven motion |
| Page/route transition | Case study open, route changes | Feels like a product, not a page reload |
| Loading experience | Initial load only | §27 |

All motion respects `prefers-reduced-motion`.

---

## 8. Theme System

- CSS custom properties on `:root`/`[data-theme]`, no CSS-in-JS theme object — Tailwind-native, SSR-safe.
- Tailwind config maps utilities to CSS vars (`bg-surface`, `text-primary`) so components never hardcode hex.
- 3-way toggle (Light/Dark/System) in nav, persisted in `localStorage`, applied via inline blocking script in `layout.tsx` head.
- `system` subscribes to `matchMedia` changes live.

---

## 9. Section-by-Section Detail & Copy

### 9.1 Hero
- Eyebrow: `FRONTEND ENGINEER — BUILDING TOWARD FULL STACK`
- Headline: `Aravind Annaldas`
- Subhead: `I build the interfaces people actually use — booking flows, dashboards, the stuff that has to work under real traffic and real edge cases. Right now I'm pushing past the frontend, learning the backend systems that sit underneath it.`
- CTAs: `View Projects` (primary, magnetic) / `Download Resume` (secondary, links to the uploaded resume PDF)
- Background: cursor-reactive dot/line grid (canvas), a few floating code-fragment chips (`useQuery()`, `<ProtectedRoute />`, `POST /bookings`) — referencing his actual work.

### 9.2 About
`I started as the person who made sure the booking calendar didn't break when someone selected a return date before a departure date. Nearly three years in, I'm the sole frontend developer on a travel booking platform covering flights, hotels, and trains — I own the search, filtering, checkout, and auth flows end to end, working alongside a team of backend and full-stack engineers. Most of my time is frontend: React, Next.js, TypeScript, React Query for data fetching and caching, and enough performance work — lazy loading, code splitting, memoization — to know where the slow parts usually hide. Since April 2025 I've been working backward through the stack — Node, Express, Postgres, Prisma — because I want to understand the systems my UI is talking to, not just the contract it exposes.`

Metric strip: `Sep 2023 – Present @ Enspirit Technologies` / `Sole frontend dev · 3 booking verticals (flights, hotels, trains)` / `Learning backend since Apr 2025: Node · Express · Prisma · Postgres`

### 9.3 Experience
Single role, story-framed (not bullet-listed on the page — bullets are for the resume PDF, prose is for the site):

**Frontend Software Engineer, Enspirit Technologies — Sep 2023–Present, Hyderabad**

Story beats: joined as the sole frontend developer on a travel booking platform being built by a ~9–11 person team (4 backend engineers, 1 full-stack developer). Built the end-to-end booking flows across all three verticals — search, results, filtering, passenger/guest detail forms, fare rules, checkout. Integrated third-party GDS/travel REST APIs, using React Query for fetching/caching/background refetching, Axios + Context API for shared state. Implemented auth end to end — login, protected routes, token handling, session management. Applied lazy loading, code splitting, and memoization to keep large search-result and booking screens responsive under real data volume. Built accessible, responsive UI with Tailwind and Material UI (WCAG practices) across desktop and mobile. Reviewed code, sat in on design discussions, and helped two junior developers get oriented in the codebase.

Scroll-tied vertical progress line fills as the user scrolls through the story beats (single role now, built to hold multiple roles later without restructuring).

### 9.4 Featured Projects
Grid of project cards, alternating layout on larger screens:

1. **Travel Booking Platform** — flagship, real screenshots, expands into the full case study (§9.5).
2. **Resume Builder Application** (personal project) — React.js, TypeScript, Tailwind CSS. `Live preview and PDF export, with multiple reusable templates sharing a common component structure.`
3. **E-commerce Admin Dashboard** (personal project) — Next.js, TypeScript, Material UI. `Admin dashboard for products, orders, and users with CRUD, pagination, search, sorting, and form validation, using reusable table components and cached API data.`
4. **Backend project — placeholder slot** — clearly labeled `In progress — building with Node.js, Express, and PostgreSQL as part of the backend learning track.` Swapped for a real project once one exists; never left implying a finished product.
5. **Backend project — placeholder slot** (second slot, same treatment) — optional, only shown if there's a second thing in progress worth naming; otherwise the grid just has one honest "in progress" card rather than two padding entries.

Placeholder cards are visually distinct (dashed border or muted treatment) so they read as "here's what's coming," not as finished work dressed up.

### 9.5 Travel Platform Case Study (deep dive)
Opens from the Featured Projects card (in-page expand or dedicated `/work/travel-platform` route — recommend a route, so it's linkable and doesn't bloat the homepage scroll).

- **Problem**: the business needed a single frontend covering three distinct booking verticals (flights, hotels, trains), each with different search/result/fare-rule shapes, without three disconnected codebases.
- **Challenge**: keeping search, filtering, and checkout state consistent across three verticals that each talk to different third-party GDS/travel REST APIs, while sharing one auth/session layer and one design system.
- **Architecture**: client (Next.js/React) ↔ shared auth/session layer (protected routes, token handling) ↔ per-vertical data layer (React Query + Axios against GDS APIs) ↔ shared checkout. Diagram to be built once real component names are confirmed with you — placeholder box-diagram for now.
- **Tech stack**: React.js, Next.js, TypeScript, React Query, Axios, Context API, Tailwind CSS, Material UI.
- **Performance**: **placeholder** — no real Lighthouse/bundle-size numbers exist yet. Section renders as `Performance metrics — measuring with Lighthouse and Next.js Bundle Analyzer before publish` rather than a fabricated number. Swap in real figures once measured.
- **Screenshots**: real, device-framed, from the actual product (need exports from you — placeholder frames until then).
- **Lessons learned**: one honest paragraph, e.g. on what he'd change now about how shared state was handled across three verticals — draft once you can speak to a specific decision you'd revisit.

### 9.6 Backend Learning Journey
Honest, dated framing — started Apr 2025, so roughly a year+ in by the time this ships depending on launch date. Cards: `Node.js & Express` / `Authentication (JWT)` / `SQL & Postgres` / `Prisma ORM` / `API Design`. Each: what it is, why (wants full ownership of features he ships, not just the frontend contract), current comfort level in plain language — no fabricated proficiency percentages.

### 9.7 Expertise & Stack (merged)
One interactive visualization instead of two separate sections. Clusters: **Frontend Core** (React, Next.js, TypeScript, JavaScript), **Data & State** (React Query, Context API, Axios/REST), **Styling** (Tailwind CSS, Framer Motion, prior Material UI experience), **Auth & Performance** (protected routes/token handling, lazy loading, code splitting, memoization, accessibility/WCAG), **Backend (Learning)** (Node, Express, JWT, SQL, Prisma, Postgres) — visually distinct so "learning" isn't misrepresented as "professional."

### 9.8 How I Work (merged architecture thinking + process)
One 4-step rail: `Understand the actual constraint` → `Sketch the data flow before the UI` → `Build the boring path first, then the edge cases` → `Optimize once it's correct, not before`. Grounded in real examples — e.g. why auth/session state had to be resolved before search UI could be built, why checkout error states were built before checkout success states.

### 9.9 Milestones (merged achievements + timeline)
Real dates only:
- **Sep 13, 2023** — Joined Enspirit Technologies; start of professional frontend development.
- **May 2024** — Travel platform released.
- **Apr 2025** — Started learning backend development (Node, Express, SQL, Prisma, Postgres).

No filler entries.

### 9.10 Open Source
GitHub: `AravindAnnaldas-Dev`. Live contribution graph (GitHub API, cached/ISR) + pinned repo cards. If activity is sparse, section is framed honestly rather than padded with unrelated forks.

### 9.11 Contact
Split layout. Left: form (name, email, message, honeypot, client + server validation). Right: direct channels — `annaldasaravind897@gmail.com`, [LinkedIn](https://www.linkedin.com/in/aravindannaldas/), [GitHub](https://github.com/AravindAnnaldas-Dev), availability line `Open to work`, resume download (linked to your uploaded PDF, served from `/public/resume.pdf` — already present in the repo). Contained gradient-mesh background, the one place a livelier background earns its keep since it's the last thing before conversion.

### 9.12 Footer
Mark, section nav, socials (LinkedIn, GitHub), theme toggle, back-to-top, mono line: `Built with Next.js · Tailwind · Framer Motion`.

---

## 10. Component Hierarchy

```
app/
  layout.tsx (theme script, fonts, Lenis provider, nav, footer)
  page.tsx (composes homepage sections)
  work/travel-platform/page.tsx (case study deep dive)
  blog/ (scaffolded, unlinked — future)
components/
  layout/
    Nav.tsx, ScrollProgress.tsx, ThemeToggle.tsx, Footer.tsx
  sections/
    Hero, About, Experience, FeaturedProjects, BackendJourney,
    ExpertiseStack, HowIWork, Milestones, OpenSource, Contact
  case-study/
    CaseStudyHero, ProblemChallenge, ArchitectureDiagram,
    PerformancePlaceholder, ScreenshotGallery, LessonsLearned
  ui/ (shadcn primitives: button, card, input, textarea, badge, tooltip)
  motion/
    Reveal.tsx, Magnetic.tsx, TiltCard.tsx, StackVisualization.tsx,
    CursorSpotlight.tsx
  project/
    ProjectCard.tsx, PlaceholderProjectCard.tsx, DeviceFrame.tsx
lib/
  content/ (typed data: experience.ts, projects.ts, skills.ts, milestones.ts)
  hooks/ (useTheme, useScrollProgress, useReducedMotion, useLenis)
  utils/ (cn.ts, metadata.ts, github.ts)
```

---

## 11. Folder Architecture

Feature-based within `components/`, not type-dumped. Animation primitives isolated in `components/motion/` so sections stay declarative. Content data separated into `lib/content/*.ts` so copy edits don't touch component logic — this is what makes swapping placeholder projects for real ones, or adding real case-study metrics later, a data change rather than a refactor.

---

## 12. Motion Specification

- **Text reveal**: clip-path `inset(100% 0 0 0)` → `inset(0 0 0 0)`, per-line, 0.6s `cubic-bezier(0.16,1,0.3,1)`, 60–80ms stagger.
- **Card stagger**: `opacity 0→1`, `y: 24→0`, 0.5s ease-out, 80ms stagger, `whileInView` `once: true, margin: "-10%"`.
- **Magnetic button**: within 60px cursor radius, translate up to 12px toward cursor, spring (`stiffness: 150, damping: 15`).
- **Stack visualization**: force-directed layout (d3-force or lightweight custom) or, if simpler, a clean filterable/grouped grid with hover detail — decide based on node count once real skill list is finalized; don't force a constellation if a well-designed grid communicates faster. Falls back to static grid under `prefers-reduced-motion` or touch regardless.
- **Theme transition**: circular clip-path reveal from toggle position, ~450ms.
- **Case study open transition**: shared-element-style expand from the project card into the case study route/view, 300–400ms.

---

## 13. Responsive Strategy

- Fluid type/spacing via `clamp()`.
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536 / 3xl 1920`, content max-width capped ~1440–1600px on ultra-wide.
- Stack visualization degrades to a filterable tag grid under `md` or on touch.
- Nav collapses to a minimal slide-over on mobile, keeps theme toggle and contact CTA visible.

---

## 14. Accessibility

- AA-verified color pairings (§5).
- All motion gated behind `prefers-reduced-motion`.
- Full keyboard navigation, visible focus rings, tab-reachable stack visualization nodes.
- Semantic HTML first; ARIA only where semantics fall short.
- Form: labeled inputs, inline errors via `aria-describedby`, invisible honeypot.
- Skip-to-content link.
- Real alt text on all screenshots.

---

## 15. SEO

- `generateMetadata` per route, `next/og` dynamic OG image for the case study route.
- `Person` JSON-LD on homepage.
- `sitemap.ts` / `robots.ts` via Next.js conventions.
- Canonical URLs, Twitter Card (`summary_large_image`).

---

## 16. Performance

- Server Components by default; `"use client"` only on interactive leaves.
- `next/image`, AVIF/WebP, explicit dimensions, priority only on hero LCP image.
- Self-hosted variable fonts via `next/font`, subset to used glyphs.
- Heavy motion components dynamically imported (`next/dynamic`), wrapped in `Suspense` with lightweight skeletons.
- Lenis + GSAP loaded only when their section mounts.
- Target Lighthouse 95+ — **you'll verify this yourself pre-launch with Lighthouse and Next.js Bundle Analyzer**, per your note in §9.5; no numbers claimed until measured.

---

## 17. Technology Choices

- Next.js 16 App Router, TypeScript strict mode
- Tailwind CSS (CSS-var-driven theme, no MUI/Emotion) — **confirmed**
- shadcn/ui for primitives
- Framer Motion (reveals, stagger, transitions)
- GSAP + ScrollTrigger (scroll-tied progress lines only — Experience, Milestones)
- Lenis (smooth scroll)
- Lucide icons
- React Three Fiber: not included unless the stack visualization genuinely needs WebGL after a simpler attempt underperforms
- Resend (or similar) for contact form email delivery via server action

---

## 18. Design System

- Tokens: color (§5), type scale (§6), spacing (4px base), radius (2 tiers), shadow (2 tiers).
- Component states documented per primitive across both themes.
- One elevation model per component — never border + heavy shadow together.

---

## 19. UI Components

Button (primary/secondary/ghost, magnetic variant), Card (project, placeholder-project, milestone variants), Badge (tech tag, "in progress"/"learning" status pill), Input/Textarea, Tooltip, Toggle-group (theme switch).

---

## 20. Content Status

| Section | Status |
|---|---|
| Hero | Final copy above |
| About | Final copy above |
| Experience | Final copy above, from resume |
| Featured Projects | Travel Platform + Resume Builder + E-commerce Admin final; backend slot(s) placeholder |
| Case Study | Structure final; performance metrics placeholder pending your Lighthouse/bundle-analyzer pass; architecture diagram + screenshots pending assets from you |
| Backend Journey | Final copy above |
| Expertise & Stack | Data-driven, no prose needed |
| How I Work | Final copy above |
| Milestones | Dates provided — **one date conflict flagged in §9.9, needs your confirmation** |
| Open Source | GitHub handle confirmed: `AravindAnnaldas-Dev` |
| Contact | Email/LinkedIn/GitHub confirmed; resume already in `/public/resume.pdf` |
| Testimonials | Removed from live site until real ones exist |
| Blog | Scaffolded only, not linked |

---

## 21. Illustration Ideas

None — typography, real screenshots, and the stack visualization carry the visual language instead of an illustration set.

---

## 22. Icons

Lucide, single weight, 1.5–2px stroke: nav (menu/close/theme), tech badges, process steps, social links, form states.

---

## 23. Background Ideas

Hero: cursor-reactive dot grid. Contact: contained gradient-mesh. Everywhere else: flat surface color, no global animated background.

---

## 24. Scroll Behavior

Lenis smooth scroll globally, native fallback under reduced motion. No scroll-snap/horizontal-pin sections — cut per §7, since it added friction for a skimming recruiter without adding clarity.

---

## 25. Transition Effects

Case-study open transition and theme transition (§12) are the only non-trivial transitions; section-to-section stays continuous scroll with `whileInView` reveals.

---

## 26. Micro-interactions

Magnetic CTAs, cursor spotlight on project cards, tilt on real screenshots, animated nav underline, form field focus states, copy-to-clipboard on email, theme toggle icon morph.

---

## 27. Loading Experience

No full-screen preloader. Skeletons for async pieces (GitHub graph). Hero text reveal is the "loading felt intentional" moment.

---

## 28. Empty States

Featured Projects (placeholder backend slot, clearly labeled — §9.4), Open Source (API failure → static fallback + profile link). Testimonials has no empty state because it isn't shown at all until real content exists (§3).

---

## 29. Error States

Contact form: inline errors, retry affordance + `mailto:` fallback. GitHub fetch failures degrade gracefully. On-brand 404 page with a way back home.

---

## 30. Future Scalability

- Blog fully scaffolded (route, MDX pipeline, metadata) but not linked from nav/homepage — flip a single link on when there's a first post, no structural work needed.
- `lib/content/*.ts` structure means new projects, a second role, or a fourth backend milestone are data additions, not component rewrites.
- Case study template reusable for future deep-dives once other projects reach that depth.
- Testimonials section can be added back the moment real quotes exist — component built once real content is ready, not before.
- Performance metrics in the case study are a single data-object update once you've run Lighthouse/Bundle Analyzer — no component change needed.

---

## Remaining Open Item

One date conflict in §9.9 Milestones: you gave "started professional frontend development Dec 2023" and "joined Enspirit Technologies Sep 13, 2023" — the join date is earlier than the "started" date, which reads oddly on a timeline. Let me know which is correct (e.g., maybe Dec 2023 is actually your first day *coding professionally* at a prior role, or Sep 2023 was an onboarding/notice period before you started actively shipping) so the Milestones section doesn't show an out-of-order timeline.

Once that's resolved, I'll begin implementation section by section, starting with the project scaffold (Tailwind/shadcn setup, removing MUI/Emotion, theme system) and then Hero.
