# FlowPilot Landing Page: Build Plan

Plan only. No code. Repo: `E:\flow-pilot` (Next.js 16.4.2, React 19.3, Tailwind v4 CSS-first, App Router, `src/`).

## 0. Sources used and what could NOT be reviewed (read first)

| Input | Source actually used | Coverage |
|---|---|---|
| Requirements brief (.docx) | My toolset has no shell/unzip and cannot read binary .docx. I used the full plain-text extraction of the same file that an earlier session had already produced (transcript `C:\Users\Usama-FE\.claude\projects\E--flow-pilot\7473f0f0-0344-4caf-a3d5-98add1215e30.jsonl`, line 56). It looked complete, sections 1 to 15 plus the final rule. Any images or tables not captured as text (for example the Figma "component/state reference area") are NOT covered. | Full text, not re-verified against the original file |
| Desktop node `1:580` | Local fallback only: `ctx.txt` (reference code, truncated at 970 lines, ends mid-footer) and the screenshot PNG. I had no Figma MCP tools in this run. | Hero through contact form is complete with exact values. **The 80px header (nav) and the footer tail are NOT in the code.** I inferred them from the low-res screenshot, so they are marked "inferred". |
| Mobile 410px node `2:1005` | NOT reviewed. No Figma tools, no local file. | None |
| Mobile menu open node `16:584` | NOT reviewed. | None |
| `get_variable_defs` / `search_design_system` | NOT run. Tokens below are derived from the hard-coded values in `ctx.txt`, not from Figma variables. | Partial |

Action for the caller: the mobile frames, header, footer and any Figma variables must be fetched with `get_metadata`, `get_screenshot` and `get_design_context` on `2:1005`, `16:584`, and the header/footer sub-nodes of `1:580` before those sections are built. Section 8 (responsive) is a plan based on the brief plus the desktop frame only.

### Discrepancies to resolve
1. **Breakpoint mismatch.** The prompt says desktop 1280 and mobile 410. The Figma frame is named `"1440"`, and its code uses `max-w-[1440px]` with `px-[64px]` (the banner comment says "1296px wide", which is 1440 minus 2x64 padding). The brief says 1440 / 768 / 375. Plan assumption: design at 1440 as the source of truth, verify 1280 (must not break: container fluid below 1440), build mobile from the 410 frame (brief says about 375, so QA at both 375 and 410), and tablet 768 has no design.
2. **Brief tech stack vs repo.** Brief mandates React Hook Form and React Testing Library. Neither is installed. A test runner is also missing (RTL needs Vitest or Jest).
3. **Brief footer vs Figma footer.** Brief: logo, short description, grouped links, social links, copyright. Figma (inferred): logo, copyright, three links (Privacy, Terms, Security). Needs a decision.
4. **Brief pricing vs Figma toggle.** Brief: "Monthly pricing at initial handoff". Figma shows a Monthly/Yearly toggle. Yearly prices are not defined anywhere.
5. **Brief testimonials vs Figma.** Brief requires an active-slide indicator. The desktop frame (as far as I can see) has only prev/next buttons, no dots, and one testimonial.

## 1. Requirement checklist (from the brief)

### 1.1 Mandated stack and constraints
- [ ] React, TypeScript, Tailwind CSS (satisfied by the scaffold)
- [ ] **React Hook Form** (add dependency; optionally `@hookform/resolvers` + `zod`, decision below)
- [ ] **React Testing Library** (add Vitest + RTL per `node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md`)
- [ ] Single-page responsive frontend, no backend/API, 4 hours max, junior level. Prioritise: structure, correct behaviour, UI, verified work over fully-polished output.
- [ ] Do not generate the whole site in one prompt (workflow is graded).

### 1.2 Page sections (brief section 4)
- [ ] Header: logo, desktop nav, Log In, Get Started, responsive hamburger menu
- [ ] Hero: headline, copy, two CTAs, trust notes, coded dashboard visual (not an image)
- [ ] Trusted companies: horizontal logo/company strip
- [ ] Features: four cards with icons, hierarchy, hover treatment
- [ ] Interactive tabs: Plan / Automate / Collaborate, one active, data-driven content
- [ ] Testimonials: prev/next, active slide indicator, React-state-driven
- [ ] Pricing: Starter / Pro / Business, monthly at initial handoff
- [ ] Contact form: validated, conditional logic, submit state, success state
- [ ] Footer: logo, short description, grouped links, social links, copyright

### 1.3 Responsive (section 5)
- [ ] Works around 375 (mobile), 768 (tablet), 1440 (desktop)
- [ ] Not just a vertical stack: reconsider layout, type, spacing, nav, cards, forms, slider controls, pricing, footer per breakpoint

### 1.4 Functional (section 6)
- [ ] Mobile nav: opens/closes, shows all links, closes when a link is selected, keyboard usable
- [ ] Section navigation: nav links and relevant CTAs scroll to the correct section
- [ ] Tabs: exactly one active, content from reusable data (no duplicated markup)
- [ ] Slider: previous, next, correct active testimonial, active indicator, state-driven data

### 1.5 Contact form (section 7)
See section 7 below for the full spec.

### 1.6 Accessibility and UI quality (section 8)
- [ ] Semantic HTML, sensible heading order, real `<label>`s
- [ ] Meaningful names on buttons/controls, visible focus states
- [ ] Mobile menu, tabs, slider keyboard-usable
- [ ] Validation messages understandable and programmatically associated with fields
- [ ] Subtle transitions only where useful

### 1.7 Component thinking (section 9)
- [ ] No single-component page. Reusable components where they help; do not abstract every tiny element.

### 1.8 Claude roles (section 10) and AI documentation (sections 11, 13)
- [ ] At least three roles with prompts written by the candidate: Project Planner, Frontend Implementation Agent, Reviewer/QA Agent. (Repo already has `.claude/agents/project-planner.md` and `frontend-implementer.md`; a QA agent file is not present, so add one.)
- [ ] Document at least one real debugging issue (expected vs actual, evidence, prompt, fix, verification)
- [ ] Document at least one Claude recommendation rejected/corrected/modified, and why

### 1.9 Testing (section 12)
- [ ] At least 3 meaningful tests. Recommended: (1) invalid form cannot submit, (2) Team Size 200+ shows and requires Preferred Demo Time, (3) tabs change displayed content.

### 1.10 Deliverables (section 13)
- [ ] Source/repo
- [ ] `README.md`: setup, run/test commands, technology, component structure, key decisions, known limitations
- [ ] `AI-USAGE.md`: agents/roles + responsibilities + initial prompts; one strong prompt and why it worked; one weak prompt and improved version; one rejected/modified recommendation; one debugging example (problem, investigation, prompt, fix, verification); where Claude helped most; at least one decision made by the candidate
- [ ] Minimum 3 tests

### 1.11 Final candidate checklist (section 15)
- [ ] No important console errors or React warnings
- [ ] Desktop/tablet/mobile usable
- [ ] Mobile nav, tabs, slider work
- [ ] Pricing implemented per current requirement (monthly)
- [ ] Form validation + conditional field work; duplicate submit prevented; success state works
- [ ] Keyboard/focus reasonable
- [ ] Tests run; README and AI-USAGE accurate
- [ ] Final rule: verify behaviour yourself by running it

## 2. Design tokens (to add to `src/app/globals.css`)

Source: hard-coded values in desktop `ctx.txt`. No Figma variables were read, so there are no token names from Figma; names below are proposed.

### 2.1 Colors
| Token (`@theme`) | Value | Used for |
|---|---|---|
| `--color-ink` | `#101828` | Headings, primary text |
| `--color-muted` | `#667085` | Body/secondary text, placeholders |
| `--color-subtle` | `#98a2b3` | "Upcoming" status text |
| `--color-logo-gray` | `#7a879b` | Trusted-by company names |
| `--color-brand` | `#2f5bff` | Primary blue, eyebrow labels, featured-card border, active nav item text |
| `--color-brand-2` | `#7b4dff` | Gradient end, quote mark |
| `--color-violet` | `#8a5cff` | "AI" feature icon bg (card 2) |
| `--color-orange` | `#ff9f43` | "Automated Workflows" icon bg, "In Progress" status |
| `--color-green` | `#22b573` | "Completed" status |
| `--color-star` | `#f7b500` | Rating stars |
| `--color-line` | `#dce3f0` | All card/input/button borders |
| `--color-line-soft` | `#eef1f6` | Dashboard dividers |
| `--color-footer-line` | `#eef1f5` | Footer top border |
| `--color-surface-blue` | `#eef3ff` | Hero pill badge bg |
| `--color-surface-nav` | `#eaf0ff` | Dashboard active nav row bg |
| `--color-surface-chip` | `#f1f5ff` | Dashboard task checkbox bg |
| `--color-surface-track` | `#eef2ff` | Progress bar track |
| `--color-surface-side` | `#f6f8fc` | Dashboard sidebar bg |
| `--color-surface-stat` | `#fbfcfe` | Dashboard stat cards bg |
| `--color-textarea-ph` | `#6b7280` | Textarea placeholder (note: differs from `#667085` used on inputs, see risks) |
| `--color-white` | `#ffffff` | Cards, page bg |

Gradients (define as utilities or CSS variables, because Tailwind `bg-linear-to-r from-... to-...` also works):
- `brand-gradient`: left to right, `#2f5bff` to `#7b4dff` (primary buttons, active tab/toggle, "Most Popular" banner, progress fill, submit button).
- `soft-gradient`: left to right, `#f2f6ff` to `#f6f1ff` (hero bg, interactive banner, contact section bg).

### 2.2 Typography
Font: **Inter** (weights 400, 500, 600, 700, 800). Load via `next/font/google` in `layout.tsx`, replacing the Geist scaffold, and map `--font-sans` in `@theme inline`. Remove the Arial body font and the dark-mode block (design has no dark theme). Weights used: Regular, Medium, Semi Bold, Bold, Extra Bold.

| Role | Size / line-height / tracking / weight | Where (node) |
|---|---|---|
| Hero H1 | 58 / 62.64 / -1.45px / 800 | `1:593` |
| H2 section large | 36 / 45 or 54 / 0 / 800 | Testimonials `1:793` (45), Pricing `1:816` (54) |
| H2 capabilities | 34 / 51 / -0.85px / 800 | `1:716` |
| H2 contact | 34 / 37.4 / 0 / 800 | `1:915` |
| H2 interactive | 30 / 37.5 / 0 / 800 | `1:761` |
| Big stat | 40 / 40 / 0 / 800 | `1:781` |
| Price | 34 / 34 / 0 / 700 | `1:830` |
| Hero subtitle | 18 / 29.25 / 0 / 400 | `1:596` |
| Testimonial quote | 18 / 24.3 / 0 / 500 | `1:799` |
| Body-lg | 15 / 22.5 / 0 / 400 | subtitles `1:718`, `1:795` |
| Body | 14 / 21 / 0 / 400 (also button text 600) | `1:764`, `1:600` |
| Card title | 16 / 24 / 0 / 700 | `1:726` |
| Body-sm | 13 / 19.5 (or 16.9 for card copy) / 0 / 400, 600 for labels and buttons | `1:608`, `1:728` |
| Caption | 12 / 18 / 0 / 400, 500, 600 | pricing lists, tabs |
| Micro | 11 / 16.5 / 0 / 400, 500, 600, 700 | pill badge, dashboard, footer text |
| Eyebrow (testimonials) | 13 / 19.5 / 0.325px / 700 uppercase | `1:791` |
| Eyebrow (contact) | 12 / 18 / 0.6px / 700 uppercase | `1:913` |
| Logo wordmark (dashboard) | 17 / 25.5 / 0 / 700 | `1:623` |
| Company names | 22 / 33 / 0 / 600 | `1:701` |
| Quote glyph | 54 / 54 / 0 / 700, color `#7b4dff` | `1:811` |

Define the common ones as `--text-*` tokens with paired `--leading` values (Tailwind v4 supports `--text-x--line-height`, `--text-x--letter-spacing`). Do not create tokens for single-use sizes (20, 21, 17); use arbitrary values.

### 2.3 Spacing and layout
- Container: `max-width 1440px`, horizontal padding `64px` on desktop (`px-16`), centred. Add as `--container-page: 90rem` or a `Container` component.
- Header height: 80px (Main begins at `top-[80px]`, `1:581`).
- Section vertical padding: hero height 600px fixed; trusted `pt 55 / pb 56`; capabilities `py 64`; interactive `px 64 / py 56`; testimonials `py 80`; pricing `py 80`; contact `py 80`; footer `pt 49 / pb 48` (the 55/56/49 odd numbers are rounding from absolute layout; normalise to 56/48 and verify visually).
- Common gaps: 4, 6, 8, 12, 16, 20, 24, 32, 48, 56, 96. All lie on Tailwind's default 4px scale, so no custom spacing tokens are needed except 6px (`1.5`) and 14/18px values, which Tailwind already supports (`3.5`, `4.5`).

### 2.4 Radii
`--radius-badge: 14px` (pill, `1:586`, 28px high), `--radius-btn: 10px` (buttons, toggles, tabs, nav arrows), `--radius-input: 8px`, `--radius-card: 16px` (feature, pricing, contact, right card of banner), `--radius-card-lg: 18px` (hero mockup, testimonial), `--radius-banner: 24px`, plus dashboard internals: 14 (sidebar, left card), 12 (stat cards, icon tiles), 8 (nav row), 6 (task checkbox), 3 (checkbox).

### 2.5 Shadows (with exact values)
- `--shadow-card-lg`: `0 10px 36px 0 rgba(29,42,87,0.10)` (hero mockup `1:619`, featured pricing `1:849`)
- `--shadow-card-md`: `0 10px 18px 0 rgba(29,42,87,0.10)` (testimonial `1:796`, contact card `1:918`; Figma uses `drop-shadow` here, which has the same visual result for a box)
- `--shadow-btn`: `0 1px 1px 0 rgba(0,0,0,0.05)` (primary gradient buttons)

### 2.6 Interaction tokens (not in Figma: assumptions)
Hover/focus/disabled/error styles are not in the frames I could read. Proposed: focus ring `2px` brand `#2f5bff` with `2px` offset; hover on feature card = translate-y-0.5 + shadow-card-md + border `#2f5bff` at 40% (brief requires "hover treatment" but gives no spec); error color `#d92d20` (assumption, not in Figma, confirm); disabled = 60% opacity, `cursor-not-allowed`. Transitions 150-200ms, wrapped in `motion-safe:`.

## 3. Section breakdown (desktop node 1:580, 1440 wide)

Header is `sticky top-0` (brief: nav scrolls to sections; scroll offset needed). Sections are in page order.

| # | Section | Node | Description | Components |
|---|---|---|---|---|
| 1 | Header (inferred) | not in ctx (top 0-80) | Logo "FlowPilot", links Features, How It Works, Pricing, Testimonials, FAQ; Log In (text/outline) and Get Started (gradient). Mobile: hamburger | `Header`, `Logo`, `NavLinks`, `MobileMenu`, `Button` |
| 2 | Hero | `1:582` (600px, soft gradient) | Left column 491px: pill badge (`1:586`), H1, subtitle (max 500px), buttons "Start Free" 150x48 and "See How It Works" 170x48, three check items. Right: 628.8x430 mockup card | `Container`, `Badge`, `Button`, `CheckItem`, `DashboardMockup` |
| 3 | Trusted by | `1:695` | Label "Trusted by modern teams" + 6 text logos (Google, slack, Notion, Spotify, zoom, shopify), 22px, gap 96 | `SectionWrapper`, `LogoStrip` (data array) |
| 4 | Capabilities (Features) | `1:712` | H2 + subtitle (768px max), 4 cards 300x200 grid gap 24 | `SectionHeading`, `FeatureCard` x4, `FeatureIcon` |
| 5 | Interactive tabs | `1:756` | Gradient banner (rx 24, p 40): left = H2, subtitle, 3 pill tabs (108x40), content card (560x80); right = 487x210 stat card with 40% + progress bar | `FeatureTabs`, `TabButton`, `TabPanel`, `StatCard`, `ProgressBar` |
| 6 | Testimonials | `1:787` | Left text block (eyebrow, H2 36px, subtitle) + prev button + card 557x min-h 220 + next button | `TestimonialSlider`, `TestimonialCard`, `IconButton`, `Stars` |
| 7 | Pricing | `1:812` | H2, subtitle, Monthly/Yearly toggle, 3 cards 356 wide; Pro is featured with 2px brand border, "Most Popular" banner, lifted shadow | `SectionHeading`, `BillingToggle`, `PricingCard`, `CheckListItem` |
| 8 | Contact | `1:909` (soft gradient bg) | Left: eyebrow, H2 "Let's build the future together", copy (400 max). Right card 675px: 2x2 field grid, message with counter, terms checkbox, submit | `ContactForm`, `FormField`, `Input`, `Select`, `Textarea`, `Checkbox`, `Button` |
| 9 | Footer (partly inferred) | `1:965` (top 3474.5) | Top border `#eef1f5`; logo mark + "FlowPilot" left, "(c) 2025 FlowPilot Inc. All rights reserved." center, links Privacy, Terms, Security right | `Footer`, `Logo` |

### Section details
**Hero (1:582).** Flex row, `items-center justify-between`, container padding 64. Pill badge: 28px tall, `#eef3ff`, rx 14, padding 0 14, "New" (11px bold `#2f5bff`) + "AI-powered workflow for modern teams >" (11px medium `#667085`), gap 8, 28px bottom margin. H1 margin-bottom 20, subtitle margin-bottom 32, button row margin-bottom 36, gap 16. Check items: 3 items 13px `#667085`, icon 15x22.5 box (`imgContainer` SVG, a check); layout in Figma is absolutely positioned in a 2-row wrap (two on row 1 at left 0 and 189.38, third on row 2). Rebuild as `flex flex-wrap gap-x-[...] gap-y-...`. Check this against the screenshot; do not copy the absolute offsets.

**DashboardMockup (1:619).** Pure JSX/Tailwind, decorative. Add `aria-hidden="true"` on the whole visual (or give one descriptive `role="img"` label). Card 628.8x430, p 17, gap 16, border `#dce3f0`, rx 18, overflow clip. Left sidebar 150 wide, `#f6f8fc`, rx 14, p 16: "FlowPilot" 17px bold; items Overview (active, `#eaf0ff`, text `#2f5bff` 600, 30px), Tasks, Automations, Team, Analytics, Settings (32px each, 13px 500 `#667085`, gap 4). Right: greeting "Good morning, Sarah!" 20px bold; subline 11px; three stat cards (12 Active Tasks, 4 AI Suggestions, 85% Project Progress; 82px high, rx 12, gap 10); "Today's Tasks" list with 4 rows (Design landing page - In Progress `#ff9f43`; Update documentation - Completed `#22b573`; Team sync meeting - Upcoming `#98a2b3`; Review pull requests - Upcoming), each with 18px square chip rx 6. Drive from a data array.

**Capabilities cards (1:720 to 1:747).** Card: border `#dce3f0`, rx 16, h 200, padding 24. Icon tile 44x44 rx 12 at top 24; title 16/24 bold at top 88; description 13/16.9 at top 117.44. Icons: card 1 and card 3 are exported SVG (`imgBackground`, `imgBackground1`; coloured tile + glyph baked in); card 2 is `#8a5cff` tile with text "AI"; card 4 is `#ff9f43` tile with the glyph "gear" in a CJK fallback font (WenQuanYi). **Do not reproduce the font glyph; use SVG icons for all four.** Copy per card in the Figma is hard-wrapped (e.g. "Keep everyone aligned with real-" / "time updates."); do not copy the manual line breaks.

**Interactive tabs (1:756).** Plan tab active: gradient, white text, 108x40, 12/18 semibold. Inactive: white bg, `#101828` text (note: the Figma inactive tab has no border; pricing toggle inactive does, see risk 12). Only the Plan content is in the design: card "Break goals into clear tasks" / "AI-assisted planning keeps priorities visible and actionable."; right card "40%" / "Less manual work" with progress track 420x16 (`#eef2ff`, rx 8) filled to 280px (about 66.6%, `inset-[0_33.4%_0_0]`). Automate and Collaborate content do not exist in Figma: invent copy and a stat each, and mark as placeholder in README.

**Testimonials (1:787).** Layout is a single flex row (`items-center justify-between`) of: text block 468px, prev button 42x42 (Figma implements it as the next button rotated 180deg, node `11:2`), card 557 wide, next button. Card: border `#dce3f0`, rx 18, padding 33, min-h 220, big violet quote glyph (54px) at left 24 / top 43, quote 18/24.3 medium with `pl-28`, footer row: avatar? (container `1:801`, 147px, name "Jessica Lee" 13 bold, role "Product Manager, Acme Inc." 11), stars (14px, tracking 1.4, `#f7b500`; render as SVG, not the font glyph). The quote text in Figma is hard-wrapped; do not copy manual breaks. Only one testimonial in the design; add 2 more as data (placeholders). Add dot indicators below the card (brief requirement; not in Figma, assumption).

**Pricing (1:812).** Cards 356x302 (not 390x330 as the layer names claim; the names are stale comments), with absolute offsets in a 346px-high wrapper (left 0, 398, 796; tops 29.61, 30.61, 27.61: this is Figma noise). Rebuild with a 3-column grid, `gap-[42px]`; the real gap is `398-356 = 42px`. The Pro card is the same height as the others with a 30px gradient banner inside a 2px border. Cards' internal padding: Starter/Business 25 (plus 1px border), Pro 24 horizontal. Normalise to one padding. Feature rows: check icon 9.1x9.4, 12px `#667085`, gap 8, list gap 8 (Starter) or 6 (Pro, Business). Button: 40px, rx 10, 13px semibold. Starter/Business outline; Pro gradient.

**Contact (1:909).** Container flex, `items-start justify-between`. Left column 428.78 wide, `pt 16`. Right card 675.22 wide, padding 33, border, rx 16, shadow-card-md. Grid 2 columns gap 20 (rows 71.5 each). Field: label 13/19.5 semibold, gap 6, control h 46, rx 8, border `#dce3f0`, px 15, text 14. Select: custom chevron icon at right (21x21 `imgImage`). Textarea: h 78, p 13, placeholder "Tell us about your needs..." (ellipsis char), counter "0/300" absolute bottom 10 right 12, 11px. Brief example format is "120 / 300" (with spaces); Figma shows "0/300". Follow Figma for format and flag. Checkbox: 16x16 rx 3, brand bg when checked (Figma shows checked state; default should be unchecked), label 11px "I agree to the Terms of Service and Privacy Policy *". Submit: full width, 43px (name says 42), gradient, 13px semibold "Send Message".

**Footer (1:965).** `border-t #eef1f5`, pt 49 / pb 48, container px 64, `flex items-center justify-between`. Left: logo mark (`imgContainer2` SVG, 13x19.5) + "FlowPilot" 58px-wide text. The remaining nodes are cut off in `ctx.txt`. From the screenshot: centered copyright "(c) 2025 FlowPilot Inc. All rights reserved." and right links "Privacy", "Terms", "Security". Brief wants description, grouped links and social links, which are not designed. Decision needed (open question 3).

## 4. Component inventory

| Component | Used (count) | Variants / props | Figma node | Status |
|---|---|---|---|---|
| `Container` | 9 | `className`; max-w 1440, px 64 (px 20/24 below `md`) | all section containers | new |
| `Section` (wrapper) | 7 | `id`, `bg: white / soft`, `className`; carries `scroll-mt-20` | `1:695`,`1:712`,`1:756`,`1:787`,`1:812`,`1:909` | new |
| `Button` (polymorphic: `<button>` or `<a>`/Link) | about 14 | `variant: primary (gradient) / outline`, `size: lg(48) / md(40) / sm(36) / form(43)`, `fullWidth`, `loading` | `1:599`,`1:601`,`1:847`,`1:879`,`1:963` | new |
| `Logo` | 3 (header, hero mockup name, footer) | `size` | `1:623`, `1:967` | new |
| `Badge` / pill | 1 (+ "Most Popular" banner) | `variant` | `1:586`, `1:850` | new (maybe skip abstraction, single use) |
| `SectionHeading` | 4 (capabilities, testimonials, pricing, contact) | `eyebrow?`, `title`, `subtitle`, `align: center / left`, `titleSize` | `1:714`, `1:789`, `1:814`, `1:911` | new |
| `CheckItem` (icon + text) | 3 hero + 11 pricing = 14 | `size`, `iconColor` | `1:604`, `1:835` | new, one component, two sizes |
| `Icon` set (`Check`, `Chevron`, `Menu`, `Close`, `Star`, 4 feature icons, `Logo mark`) | many | inline SVG components or `/public/icons/*.svg` | assets `imgContainer*`, `imgBackground*` | new |
| `DashboardMockup` (+ `StatTile`, `TaskRow`) | 1 | data-driven | `1:619` | new |
| `LogoStrip` | 1 | `companies: string[]` | `1:699` | new |
| `FeatureCard` | 4 | `icon, color, title, description` | `1:720` | new |
| `FeatureTabs` (+ `TabButton`) | 1 | `tabs: {id,label,title,description,stat,statLabel,progress}[]` | `1:766`, `1:773`, `1:778` | new |
| `ProgressBar` | 1 | `value` | `1:785` | new (could be inline) |
| `TestimonialSlider` (+ `TestimonialCard`, `IconButton`, `Dots`) | 1 | `testimonials[]` | `1:796`, `1:809`, `11:2` | new |
| `BillingToggle` | 1 | `value: monthly / yearly`, `onChange` | `1:819` | new (conditional on decision) |
| `PricingCard` | 3 | `featured`, `plan` object | `1:825`, `1:849`, `1:881` | new |
| `ContactForm` | 1 | RHF; success state | `1:918` | new |
| `FormField` (label + control + error + counter) | 7 | `label, name, error, hint, required` | `1:921`... | new |
| `Input`, `Select`, `Textarea`, `Checkbox`, `RadioGroup` (for demo time) | 1 each | forwardRef for RHF `register` | `1:924`,`1:942`,`1:952`,`1:958` | new |
| `Header` + `MobileMenu` | 1 | `isOpen` state; client component | not in ctx; mobile `16:584` | new |
| `Footer` | 1 | link groups from data | `1:965` | new |

Data files (not components): `src/data/{nav,features,logos,tabs,testimonials,pricing,dashboard,footer}.ts`.

## 5. Reuse opportunities

- **One `Button`** serves the hero CTAs (150x48 / 170x48), tabs (active gradient vs white), billing toggle, pricing CTAs, submit, and header Log In / Get Started. Variants: `primary`, `outline`; sizes by height. Tabs and toggle are a `Button`-like pill: build one `PillTab` (`selected` prop, `role="tab"` or `aria-pressed`), used by both `FeatureTabs` and `BillingToggle`. Their sizes differ (108x40 vs 92/80x36) and the inactive style differs (no border vs `#dce3f0` border), so treat as `size` plus a `bordered` prop, and confirm with the designer which is right.
- **`Card` surface** (white, 1px `#dce3f0`, radius 16 or 18, optional shadow): feature, pricing, tab content, stat card, testimonial, contact form, dashboard, plus tab right card. One `Card` with `radius` and `shadow` props avoids 8 repetitions.
- **Check icon**: the same SVG appears in hero trust notes (15x22.5 box) and pricing lists (9x9.4). One `CheckIcon` component, sized by prop. The hero check images share one asset (`imgContainer`) and pricing shares another (`imgContainer1`); verify whether these are the same glyph with different colours before merging.
- **Gradient + soft gradient** as two utilities defined once in `globals.css` (`@utility bg-brand-gradient`, `@utility bg-soft-gradient`), used by 10+ elements.
- **Section scaffolding**: `Section` + `Container` + `SectionHeading` used by capabilities, testimonials (left-aligned variant), pricing, contact.
- **Circular `IconButton`** (42x42, rx 10, white, border): prev/next share one component (Figma literally rotates the next button 180deg for prev: build one chevron and flip the icon).
- **Form controls** share label/border/radius/height tokens; one base class string for `Input`, `Select` (46px), with `Textarea` as a variant.
- **Status text** colours (In Progress / Completed / Upcoming) as a map in the dashboard data.
- **Shared assets**: `check.svg` (hero), `check-small.svg` (pricing), `chevron-down.svg` (select, `imgImage`), `checkbox-tick.svg` (`imgImage1`), `logo-mark.svg` (footer `imgContainer2`, plus header, which is likely the same mark), `feature-planning.svg` (`imgBackground`), `feature-collab.svg` (`imgBackground1`).

## 6. Assets list

Figma asset URLs in `ctx.txt` are temporary (`figma.com/api/mcp/asset/...`) and must be exported into `public/` or inlined; never hotlinked.

| Asset | Figma const / node | Used in | Plan |
|---|---|---|---|
| Check icon (hero) | `imgContainer`, 15x22.5 | hero trust notes x3 | Export SVG, or replace with a 15px inline Check icon |
| Feature icon 1 (Smart Task Planning) | `imgBackground`, 44x44 `1:722` | FeatureCard 1 | Export SVG (tile + glyph) or draw glyph on a coded gradient tile |
| Feature icon 3 (Team Collaboration) | `imgBackground1`, 44x44 `1:740` | FeatureCard 3 | Same |
| Feature icon 2 (AI) | coded: `#8a5cff` tile + text "AI" | FeatureCard 2 | Code it (text is fine, or SVG) |
| Feature icon 4 (gear) | coded glyph in WenQuanYi font on `#ff9f43` | FeatureCard 4 | Replace with an SVG gear; font glyph will not render the same without that font |
| Check icon (pricing) | `imgContainer1`, 9.1x9.4 | pricing lists x11 | Export SVG |
| Chevron down | `imgImage`, 21x21 `1:944` | Select | Export SVG; also usable as `appearance-none` background |
| Checkbox tick | `imgImage1`, 14x14 `1:959` | Checkbox | Export SVG, or style with CSS |
| Footer logo mark | `imgContainer2`, 13x19.5 `1:968` | Footer (and likely header) | Export SVG |
| Stars | glyph text in WenQuanYi, `#f7b500` | Testimonial | Use 5 inline SVG stars with `aria-label="5 out of 5 stars"` |
| Quote mark | text glyph U+201C | Testimonial | Can stay text (Inter has it) |
| Hamburger / close | not seen | Header | Draw simple SVG (check `16:584` for the real icon) |
| Social icons | not in design | Footer | Only if brief's social links are built; use simple inline SVGs, no third-party embeds |
| Company logos | text only (Inter 600, `#7a879b`) | LogoStrip | Text; no raster assets needed |
| Avatar | container `1:801` (147px wide, only name + role are visible) | Testimonial | No image seen; do not invent one |
| Raster images | none found in the desktop frame | n/a | `next/image` not needed except favicon; remove the `next.svg`/`vercel.svg` scaffold usage |

## 7. Contact form validation spec (from brief section 7; React Hook Form)

Mode: `useForm({ mode: "onTouched", reValidateMode: "onChange" })` (validate on blur first, then live). Avoid `onChange` from the first keystroke (noisy errors). Decision on resolver: either inline RHF `register` rules (fewer dependencies, fine for 7 fields) or `zod` + `@hookform/resolvers` (cleaner conditional schema). Recommend **RHF native rules** plus `shouldUnregister: true` for the conditional field, so the hidden field is unregistered and cannot block submission. If you prefer zod, use a discriminated union / `superRefine` keyed on `teamSize`.

Use `noValidate` on the `<form>` so only RHF controls the messages (consistent, accessible, testable).

| Field | `name` | Control | Rules | Error message (proposed copy; not in brief) |
|---|---|---|---|---|
| Full Name | `fullName` | text, `autocomplete="name"` | required; trimmed length >= 3 | "Full name is required." / "Full name must be at least 3 characters." |
| Work Email | `email` | `type="email"`, `autocomplete="email"` | required; valid email regex (simple, e.g. `^[^\s@]+@[^\s@]+\.[^\s@]+$`) | "Work email is required." / "Enter a valid email address." |
| Company Name | `company` | text, `autocomplete="organization"` | required (trimmed non-empty) | "Company name is required." |
| Team Size | `teamSize` | native `<select>`, placeholder option "Select team size" with empty value | required; options exactly `1-10`, `11-50`, `51-200`, `200+` | "Select your team size." |
| Preferred Demo Time | `demoTime` | radio group (or select), options Morning / Afternoon / Evening | **only rendered when `teamSize === "200+"`**; then required; unregistered and cleared when `teamSize` changes to anything else | "Choose a preferred demo time." |
| Message | `message` | `<textarea maxLength=300>` | required; 20 to 300 characters (trimmed length for the minimum) | "Message is required." / "Message must be at least 20 characters." / "Message must be 300 characters or fewer." |
| Terms | `terms` | checkbox, unchecked by default | must be `true` | "You must accept the Terms of Service and Privacy Policy." |

Behaviours:
- **Live character count** under the textarea: `{n}/300` (Figma format "0/300"; brief example "120 / 300"; pick one, flag it). Use `watch("message")`, `aria-live="polite"` on the counter is optional (can be noisy; prefer `aria-describedby` linking the textarea to the counter and error).
- **Conditional logic**: `const teamSize = watch("teamSize")`; render Preferred Demo Time when `teamSize === "200+"`. When switching away, the field disappears, its value is cleared, and any error for it is cleared (`unregister` / `shouldUnregister`). Form must submit successfully without it.
- **Where Demo Time goes in the layout**: Figma has no frame for it (the 2x2 grid is full). Place it as a full-width row between the grid and Message (assumption).
- **Errors**: render under the field in a `<p id="{name}-error" role="alert"?>`. Prefer `aria-invalid="true"` + `aria-describedby="{name}-error"` on the control, and a polite live region for the error list; on submit failure, focus the first invalid field (RHF `shouldFocusError` default is true). Error colour needs a Figma value or a contrast-checked assumption.
- **Submit**: `handleSubmit` runs an `async` function that awaits a `~1000ms` timeout (simulated). While `isSubmitting`: button `disabled`, label changes (e.g. "Sending..."), `aria-busy` on the form, and a guard so a second submit (Enter key or double click) is ignored (`disabled` alone does not stop Enter in some fields; also check `isSubmitting` at the top of the handler). No network call.
- **Success state**: replace the form (or show above it) with the message "Thanks! Our team will contact you shortly." exactly as written in the brief, inside `role="status"` / `aria-live="polite"`, and move focus to it. Decision: replace the form (assumption); optionally offer no "send another" button (not in brief).
- **Reset** after success: `reset()` so no stale data; success state persists until reload.
- Required marker: Figma labels contain a literal `*` ("Full Name *"). Render `*` as `aria-hidden` and mark controls `aria-required="true"` / `required`.

## 8. State and interaction spec

All of these need `"use client"`. Keep `page.tsx` and static sections as Server Components; push `"use client"` to the leaf (Header, FeatureTabs, TestimonialSlider, BillingToggle area, ContactForm). Verify against `node_modules/next/dist/docs/01-app/` (Server and Client Components guide) when writing; I only read the Fonts and Vitest guides for this plan.

### 8.1 Mobile navigation (Header)
- State: `isOpen: boolean`. Hamburger `<button aria-expanded aria-controls="mobile-menu" aria-label="Open menu" / "Close menu">`, visible below `lg` (breakpoint to confirm from `2:1005`/`16:584`; assume `md` hides at >= 768? see responsive section).
- Menu shows all nav links plus Log In and Get Started (confirm in `16:584`).
- Closes on: link click, Escape, hamburger again, resize to desktop. Focus returns to the toggle on Escape. While open, lock body scroll if the Figma menu is a full-screen overlay (assumption, check `16:584`).
- Keyboard: all links reachable by Tab in DOM order; when open, focus moves into the menu (or the first link) and does not need a full focus-trap unless it is a modal overlay.
- Do not use `display:none` toggling that breaks the transition; use `hidden`/`inert` when closed so links are not focusable.

### 8.2 Section navigation
- Links are in-page anchors (`href="#features"` etc.) via `next/link` or `<a>`. Add `scroll-behavior: smooth` in `globals.css` inside `@media (prefers-reduced-motion: no-preference)` and `scroll-margin-top` (80px, header height) on each `Section id`.
- Mapping (proposed; nav labels from the screenshot): Features -> `#features` (capabilities `1:712`), How It Works -> `#how-it-works` (interactive tabs `1:756`), Pricing -> `#pricing`, Testimonials -> `#testimonials`, FAQ -> **no FAQ section exists in the design or the brief** (open question 4), Log In -> no destination (placeholder `#`, or the contact section), Get Started / Start Free -> `#pricing` or `#contact` (decide), See How It Works -> `#how-it-works`, pricing "Get Started" buttons -> `#contact`.

### 8.3 Tabs (FeatureTabs)
- State: `activeId` (default `"plan"`). Content from a `tabs` array in `src/data/tabs.ts`; render one panel from `tabs.find(...)`, not three duplicated blocks.
- ARIA: `role="tablist"`, each tab `role="tab"`, `aria-selected`, `aria-controls`, roving `tabIndex` (0 for active, -1 others), Left/Right arrow keys (and Home/End) move and activate, panel `role="tabpanel"` with `aria-labelledby`.
- Right card (stat + progress) also changes with the tab (data-driven): `40% Less manual work` is the Plan figure; others are placeholders.

### 8.4 Testimonial slider
- State: `index`. Prev/next wrap around (assumption; or disable at the ends). Dots/indicator reflect `index`, each is a button with `aria-label="Show testimonial 2 of 3"` and `aria-current`.
- Wrap the region in `<section aria-roledescription="carousel" aria-label="Customer testimonials">`; the slide is `role="group" aria-roledescription="slide" aria-label="2 of 3"`. Use `aria-live="polite"` on the slide container only if there is no auto-play (there is none; do not add auto-play, because it was not requested).
- Controls: `aria-label="Previous testimonial"` and `"Next testimonial"` (the Figma layer name even says "Next testimonial" for both: ensure the prev button is named correctly).
- Animation: optional short fade (150ms), `motion-safe:` only. Avoid layout shift: card has `min-h-[220px]`; testimonials of different lengths must not make the controls jump (fix controls to vertical centre).

### 8.5 Pricing / billing toggle
- Brief: "Monthly pricing at initial handoff". Minimum compliant implementation: show monthly prices; the Figma toggle (Monthly active, Yearly inactive) is rendered but either (a) wired to a `billing` state with yearly prices (needs numbers: not provided, e.g. 20% discount is an assumption) or (b) Yearly is shown but disabled/with "coming soon". Recommended: (a) with data in `pricing.ts`, hidden behind a one-line config, and flag the prices as placeholders in the README; confirm via open question 5.
- ARIA: use `role="group"` with `aria-pressed` buttons or `role="radiogroup"`.
- Pro stays visually featured at both states. Card heights must stay equal at all billing states (price suffix `/month` vs `/year`).

### 8.6 Hero / header interactions
- Hover on buttons: slight brightness / shadow change; focus-visible ring on all interactive elements.
- Header: sticky with a subtle border/shadow after scroll (optional; not in Figma, skip unless the design shows it).

### 8.7 Feature cards hover
- Brief requires a hover treatment, Figma has none: translate-y and shadow/border change (see 2.6), transition 200ms, `motion-safe`.

## 9. Responsive strategy

Tailwind v4 default breakpoints (`sm 640, md 768, lg 1024, xl 1280, 2xl 1536`), mobile-first. Design widths: 410 (given, brief says 375), 768 (no design), 1440 (given), plus the requested 1280 check. The mobile and menu frames were NOT reviewed, so everything below the 1440 column is a proposal to be validated against `2:1005` and `16:584`.

### 9.1 Global
- Container: `px-5` (or the value in the 410 frame) under `md`, `px-8` at `md`, `px-16` at `lg+`; `max-w-[1440px] mx-auto`. Fluid between 1280 and 1440 (nothing in the desktop frame has a fixed width that exceeds 1296px of content, so 1280 means 1152px content width: check the hero mockup (628.8) + left column (491.2) = 1120, which fits with 32px spare, so the hero should hold its two-column layout at 1280 but is tight; the right card must be `flex-1 max-w-[628.8px]`, not fixed).
- Replace Figma fixed widths (356, 628.8, 675.22, 557, 487) with flex/grid fractions, `min-w-0`, and `max-w-*`.
- Type scales down on mobile (proposed, verify): H1 58 -> 36-40px (keep tight tracking and 1.08 line height), section H2 34-36 -> 26-28, H2 interactive 30 -> 24, price 34 stays.
- Section vertical padding: 80 -> 56 (mobile), 64 -> 48 (mobile), proposed.

### 9.2 Per section
| Section | 1440 (design) | 1280 | 768 (no design; proposal) | 410 / 375 (to verify in `2:1005`) |
|---|---|---|---|---|
| Header | Logo left, 5 links centre, Log In + Get Started right, 80px high | Same | Hamburger (links too wide for 768 next to 2 buttons) or compact nav; decision needed | Logo + hamburger; menu per `16:584` |
| Hero | 2 columns (491 / 629), 600px fixed height | 2 columns, fluid mockup; H1 may wrap differently, check | Stacked: text then mockup (full width); drop fixed 600px height (`min-h-*`) | Stacked; buttons full-width or side by side per frame; trust notes wrap; mockup must scale: either simplified (hide sidebar) or contained with `overflow-hidden`; do not shrink text below 11px |
| Trusted | 6 names in a row, gap 96 | gap shrinks (`gap-x-12`) | 3x2 grid or wrap | 2x3 grid / wrap, or horizontal scroll strip (brief says horizontal strip) |
| Features | 4 columns | 4 columns, check text wrapping at 13px | 2 columns | 1 column (or 2 compact); cards h 200 fixed becomes `min-h` / auto |
| Tabs banner | 2 columns (content / 487 stat card), p 40, rx 24 | same | Stacked, stat card full width | Stacked, padding 20-24; tabs may need to scroll horizontally or wrap (3 x 108 + 2 x 12 = 348px, which just fits in 410 minus padding 40 = 370, so it fits but is tight at 375); make tabs `flex-1` |
| Testimonials | Text left, prev, card, next in one row | Same, card shrinks | Text on top, card full width, controls below card with dots | Same as 768: controls row (prev, dots, next) under the card |
| Pricing | 3 columns | 3 columns, gap smaller | 1 column centred max-w 400, or 3 columns tight (356 x 3 + gaps does not fit 768); use stacked with Pro first? Keep order Starter, Pro, Business (assumption) | 1 column; Pro badge intact; toggle centred |
| Contact | Left copy, right card 675, 2x2 field grid | Same | Stacked: copy above card; grid stays 2 columns if >= 640 | Stacked; fields single column; card padding 20-24; submit full width |
| Footer | Single row: logo, copyright, links | Same | Row wraps | Stacked and centred: logo, links (wrap), copyright; plus description/social/grouped links if added |

### 9.3 Mobile menu (frame `16:584`, not reviewed)
Proposed pattern pending design review: below the header, a panel (full-width, white, border-bottom, or full-height overlay) listing nav links stacked at >= 44px touch targets, plus Log In and Get Started as full-width buttons at the bottom. Transition: opacity/translate 150-200ms, `motion-safe`. Verify the Figma's exact structure, icon, close affordance, backdrop and whether the page content is dimmed.

### 9.4 Testing widths
Verify at 375, 410, 768, 1024, 1280, 1440 and (sanity) 1920. No horizontal scroll at any width.

## 10. Proposed file structure

```
src/
  app/
    layout.tsx            (Inter via next/font, metadata title/description, lang)
    page.tsx              (assembles sections; Server Component)
    globals.css           (@theme tokens, utilities, smooth scroll, focus ring)
  components/
    layout/   Header.tsx, MobileMenu.tsx, Footer.tsx, Container.tsx, Section.tsx
    ui/       Button.tsx, Card.tsx, Badge.tsx, SectionHeading.tsx, CheckItem.tsx,
              IconButton.tsx, PillTab.tsx, ProgressBar.tsx, Logo.tsx
    icons/    index.tsx (inline SVG components)
    sections/ Hero.tsx, DashboardMockup.tsx, TrustedBy.tsx, Features.tsx,
              FeatureTabs.tsx, Testimonials.tsx, Pricing.tsx, Contact.tsx
    form/     ContactForm.tsx, FormField.tsx, Input.tsx, Select.tsx, Textarea.tsx,
              Checkbox.tsx, RadioGroup.tsx, schema.ts (rules/types)
  data/       nav.ts, features.ts, logos.ts, tabs.ts, testimonials.ts, pricing.ts,
              dashboard.ts, footer.ts
  lib/        cn.ts (class merge helper, only if clsx/tailwind-merge adopted; plain template strings are fine)
  test/       setup.ts
  components/**/__tests__/ (or co-located *.test.tsx)
public/
  icons/ (exported SVGs)
vitest.config.mts, README.md, AI-USAGE.md, .claude/agents/reviewer-qa.md (new)
```
Notes: remove scaffold `next.svg`, `vercel.svg` references; set real `<title>`/description in `metadata`. In this Next.js version `layout.tsx` already uses the global `LayoutProps<"/">` type helper; keep it. Page files in this repo are TypeScript.

## 11. Build order (phases and dependencies)

Phase 0: dependencies and tooling (blocks the tests, not the UI).
- Install `react-hook-form`; install Vitest + RTL per the Next.js Vitest guide (`vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths`, plus `@testing-library/user-event` and `@testing-library/jest-dom`); add `"test"` script and `vitest.config.mts`. Optional `clsx`.
- Fetch missing Figma data: header and footer sub-nodes of `1:580`, frames `2:1005` and `16:584`, `get_variable_defs`, the component/state reference area. Resolve open questions.

Phase 1: tokens and fonts (blocks everything).
- Replace `globals.css` scaffold: `@theme` colours, type tokens, radii, shadows, two gradient utilities, remove dark mode and Arial; Inter in `layout.tsx`; metadata.

Phase 2: layout shell (needs 1). Container, Section wrapper, Logo, Header (desktop first, then MobileMenu), Footer. Header and Footer can be built in parallel.

Phase 3: primitives (needs 1; parallel with 2). Button, Card, Badge, IconButton, PillTab, CheckItem, SectionHeading, icons, ProgressBar, form controls (Input, Select, Textarea, Checkbox, RadioGroup, FormField).

Phase 4: composite and sections (need 2 and 3; sections are independent, so parallelisable, one reviewable chunk each):
1. Hero + DashboardMockup
2. TrustedBy
3. Features (FeatureCard)
4. FeatureTabs
5. Testimonials slider
6. Pricing (+ billing toggle)
7. ContactForm (RHF, conditional field, submit/success), the largest piece

Phase 5: page assembly (needs 4). `page.tsx`, section ids, anchor links, scroll offset, smooth scroll, CTA destinations.

Phase 6: tests (can start per component as each lands; finish after 4). Minimum 3: invalid submit blocked; 200+ shows and requires Demo Time (and hiding it removes the block); tabs switch content. Extras if time: slider next/prev; mobile menu opens/closes and closes on link click; submit disables button and shows success (use fake timers).

Phase 7: responsive pass (needs 5). 1440 -> 1280 -> 768 -> 410/375 -> menu; remove fixed widths; fix wrapping.

Phase 8: QA and polish: pixel comparison, a11y/keyboard pass, Lighthouse, console cleanliness, `npm run lint`, `npm run build`, reviewer-agent pass.

Phase 9: deliverables: README.md, AI-USAGE.md (document debugging issue and a rejected recommendation as they happen, not afterwards), reviewer-qa agent file.

Parallel opportunities: Phase 2 || 3; sections in Phase 4 once their primitives exist; tests alongside; docs throughout.

## 12. Risks and open flags

| # | Risk | Why it matters | Mitigation |
|---|---|---|---|
| 1 | Mobile 410 frame, menu frame and header/footer code unreviewed | Cannot guarantee pixel accuracy below desktop; header/footer values are inferred | Fetch `2:1005`, `16:584`, header/footer nodes before Phase 2/7; mark inferred values |
| 2 | 1440 vs 1280 and 410 vs 375 mismatch | Wrong baseline gives off-by-N layouts | Confirm intended widths; build fluid; QA at both |
| 3 | RHF + RTL + test runner not installed | Mandatory per brief; needs new devDeps | Phase 0; follow Vitest guide in Next docs |
| 4 | Figma reference code is absolute-position-heavy (pricing card offsets, trust-note rows, testimonial paddings with fractional px like 7.295px) | Copying produces brittle, non-responsive layouts | Rebuild with flex/grid using the measured values (gap 42, grid gap 20, etc.), not the offsets |
| 5 | Hard-wrapped copy in Figma (separate `<p>` per line in hero, cards, quote, subtitle) | Line breaks will look wrong at other widths | Treat each as one paragraph; allow natural wrap; use `text-balance` if needed; check that the H1 breaks as "Work smarter. / Let AI handle the / repetitive work." at 1440 (those three lines are intentional, use `<br>` or `max-w` as needed) |
| 6 | Non-Inter glyph fonts (WenQuanYi gear, stars) | Font not loaded; glyphs differ across OS | Replace with SVG (gear, stars); do not add the font |
| 7 | Layer names contain stale spec comments (e.g. "390x330", "700x430", "748px wide", "42px height", "58px bold 750") that conflict with actual measured sizes (356x302, 628.8x430, 675.22, 43, 800 weight) | Following names produces wrong sizes | Use computed values from the code, not the layer names |
| 8 | Missing states: hover, focus, error, disabled, loading, success, tabs 2/3, testimonials 2/3, Yearly prices, mobile frames for most sections, FAQ section | Brief demands these interactions; designs absent | Define documented assumptions (section 2.6 and 8); check the "component/state reference area" the brief says exists in the Figma file (not in the nodes I was given) |
| 9 | Brief footer (description, grouped links, social) not in Figma | Incomplete vs brief | Build brief version on top of the Figma layout; ask which wins |
| 10 | Nav item "FAQ" without a section | Dead anchor | Ask; fall back to removing the item, or add a small FAQ (scope creep: avoid) |
| 11 | Contrast: `#667085` on white (4.8:1, passes AA for normal text), on `#f2f6ff`/`#f6f1ff` gradient (slightly lower, about 4.3-4.5:1, may fail AA for 11-13px text), `#98a2b3` on white about 2.6:1 (fails AA, "Upcoming"), `#7a879b` on white about 3.6:1 (fails for text, borderline as logo-size 22px semibold = "large text" at 3:1: passes), `#ff9f43` on white about 2.1:1 (fails), `#6b7280` placeholder ok, white on `#2f5bff`-`#7b4dff` gradient: white on `#7b4dff` is about 5:1, ok. Values are my estimates, not measured. | Brief requires accessible UI; the design itself may fail | Measure with a contrast tool; the dashboard mockup is decorative (`aria-hidden`), so its low-contrast status colours are acceptable; adjust real text colours only if the user permits deviating from Figma |
| 12 | Inactive tab (white, no border) vs inactive pricing toggle (white + border) are inconsistent | One shared component would pick one | Treat as Figma values; expose `bordered` prop |
| 13 | Tiny type (11px) in hero/dashboard/footer/terms label | Readability, zoom | Keep 11px as designed for decorative dashboard; for the terms label and footer consider 12px minimum only if the designer agrees |
| 14 | Next.js 16 differences: `layout.tsx` uses global `LayoutProps<"/">` helper; `next lint` is gone (use `eslint` directly, per CLAUDE.md); `@tailwindcss/turbopack` plugin is in devDependencies (the scaffold differs from Tailwind's older PostCSS setup, so do not add `postcss.config` or `tailwind.config`); Server Components can't hold state/handlers | Old habits break the build | Read the matching docs before touching routing, fonts, or `"use client"` boundaries; keep `"use client"` at leaves |
| 15 | `next/font` Inter weights (400-800) increase font payload | Lighthouse performance | Load only the weights used (400, 500, 600, 700, 800), `display: swap`, subset latin |
| 16 | Hero/dashboard fixed widths overflow at 1280 and below | Horizontal scroll | Use `flex-1 min-w-0 max-w-*`; test at 1280, 1100, 1024 |
| 17 | Duplicate submission (double Enter / double click) | Brief explicitly requires prevention | Guard on `isSubmitting` in handler plus `disabled`; test it |
| 18 | Conditional field leaves stale value/error | Brief: must no longer block submission | `shouldUnregister` or explicit `unregister` + `clearErrors`; test it |
| 19 | Scope vs 4-hour limit | Brief says the task exceeds 4h for most | Order work by brief priorities: structure, behaviours (nav, tabs, slider, form), tests, then polish; keep component abstractions minimal |
| 20 | AI-USAGE evidence is a graded deliverable | Needs real issue and real rejected recommendation, impossible to fabricate later | Keep a running log during the build |

## 13. Open questions (only the user/designer can answer)

1. Which widths are authoritative: 1440 and 375 (brief, frame name `1440`) or 1280 and 410 (prompt)? Is a 768 tablet design coming?
2. Can the missing Figma frames be reviewed (`2:1005`, `16:584`, header/footer nodes of `1:580`, and the component/state reference area the brief mentions)? Are Figma variables defined (so tokens can be named per the file)?
3. Footer: build exactly the Figma (logo, copyright, Privacy/Terms/Security) or the brief's version (description, grouped links, social links, copyright)? If the brief's, what groups and which social networks?
4. The nav has "FAQ" (per screenshot) but no FAQ section exists. Remove it, point to another section, or add a section? Where do Log In, Get Started, and Start Free go (contact section? external URL?)
5. Pricing: should Yearly be functional? If yes, what are the yearly prices? If no, should Yearly be hidden or shown as inactive?
6. Testimonials and tab content: need real copy for testimonials 2 and 3 and for the Automate and Collaborate tabs (stat figure and progress value). OK to use placeholders and document them?
7. Counter format: "0/300" (Figma) or "120 / 300" (brief)?
8. Error colour, hover and focus styles: free to choose within the palette?
9. Should the success state replace the form or appear above it? Should Demo Time be radios or a select, and where should it sit in the layout?
10. Is the tooling choice OK: Vitest + RTL (Next docs recommended setup) rather than Jest? Is `zod` acceptable, or RHF native rules only?
11. Dark mode: the scaffold has it; the design does not. Confirm removal.
12. Is pixel-exact reproduction of low-contrast design colours required even where it fails WCAG AA?

## 14. Acceptance checklist

Pixel accuracy
- [ ] Screenshot each section at 1440 and compare to Figma `1:580` (overlay/diff, tolerance 1-2px); repeat at the mobile frame (410) and menu frame.
- [ ] Sanity check at 1280 (no overflow, hero keeps two columns) and 768 (no design, judged for sanity).
- [ ] Token audit: every colour, font size, radius and shadow in components traces to a `globals.css` token or a documented one-off; no stray hex values besides documented ones; `grep` for `#` in `src/components`.
- [ ] Measure key dimensions: header 80; hero button heights 48; inputs 46; cards radii 16/18; pricing card 356 x 302 at 1440; mockup 628.8 x 430.

Behaviour (brief checklist)
- [ ] Mobile nav opens, closes, closes on link click, Escape, keyboard usable, focus returns.
- [ ] Nav and CTA anchors land on the right section, not hidden under the sticky header.
- [ ] Tabs: one active at a time; content changes; arrow-key navigation.
- [ ] Slider: prev, next, wrap/end behaviour, indicator, correct slide content.
- [ ] Pricing renders monthly per requirement (and yearly per decision).
- [ ] Form: each rule in section 7 fires with the right message; counter live; 200+ shows Demo Time and requires it; changing away hides it and unblocks; submit disables, shows submitting state about 1s, blocks duplicates, shows "Thanks! Our team will contact you shortly."

Quality
- [ ] No console errors or React warnings (check hydration, key warnings, controlled/uncontrolled).
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm run test` pass.
- [ ] Axe/Lighthouse accessibility >= 95; Performance >= 90 on mobile profile; Best Practices and SEO sane (title, meta description, `lang`).
- [ ] Heading order h1 (hero) then h2 per section, h3 for cards; one h1.
- [ ] Every control has a visible focus state; Tab order logical; labels associated; errors linked via `aria-describedby`; `aria-invalid` set.
- [ ] `prefers-reduced-motion` respected.

Deliverables
- [ ] README.md (setup, run/test commands, tech, component structure, key decisions, known limitations including placeholders and inferred values).
- [ ] AI-USAGE.md complete per brief section 13.
- [ ] At least 3 passing tests.

## 15. Summary

The brief (read via a prior full-text extraction, since the .docx could not be opened directly) asks for a 9-section FlowPilot landing page in React + TypeScript + Tailwind, with React Hook Form and React Testing Library, working nav/tabs/slider/pricing and a validated contact form with a conditional Preferred Demo Time field (200+ team size), simulated 1s submit, success message, three tests, README and AI-USAGE.md. The desktop Figma (frame is 1440, not 1280) was reviewed from the local reference code and gives exact values for the hero through contact sections: Inter, brand gradient `#2f5bff` to `#7b4dff`, ink `#101828`, muted `#667085`, border `#dce3f0`, radii 8/10/14/16/18/24, and two soft shadows. The header, footer tail, mobile 410 frame and mobile menu were not reviewable, so those parts and all responsive behaviour are proposals. The build runs tokens and fonts, then shell, primitives, sections (parallel), assembly, tests, responsive pass, QA, and docs; main risks are the missing frames and states, the width mismatch, the footer, FAQ and yearly-pricing gaps versus the brief, the contrast of some design colours, and the absolute-positioned Figma code that must be rebuilt as fluid layouts.
