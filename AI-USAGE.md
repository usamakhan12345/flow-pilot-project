# AI-USAGE.md

How Claude Code was used to build the FlowPilot landing page (Next.js 16, React 19, Tailwind v4, React Hook Form, Vitest + Testing Library). Everything below comes from the actual working session; the QA record lives in `Qa/` (`report.md`, `issues/`, `screenshots/`).

## 1. Agents and roles

Four project agents are defined in `.claude/agents/`. A fifth, general-purpose agent was used once as a stand-in (see "ui-qa" below). The main Claude session acted as the coordinator: it fetched Figma data, wrote briefs for the agents, relayed the user's decisions and screenshots, and reported results.

| Agent | Responsibility | Tools it may use | Output |
|---|---|---|---|
| `project-planner` | Reads the assessment brief and the Figma frames, breaks the work into sections and components, defines tokens, build order, form validation spec and risks. Never writes app code. | Read, Glob, Grep, WebFetch, Write, Figma read tools | `PLAN.md` |
| `frontend-implementer` | Builds the UI from the plan and Figma: components, responsive layout, state, form validation, interactions, tests. | Read/Write/Edit, Bash, PowerShell, Figma read tools | `src/**`, tests, `vitest.config.mts` |
| `ui-qa` | Audits the running app against Figma: heights, margins, padding, gaps, fonts, colours, radii, shadows, alignment. Logs each mismatch as an issue file with Figma and app screenshots. Read-only for app code. | Read/Write, Bash, PowerShell, Figma read tools | `Qa/report.md`, `Qa/issues/QA-NNN.md`, `Qa/screenshots/` |
| `dev-fixes` | Reads open QA issues and screenshots, fixes the code, verifies with a measurement and a `QA-NNN-fixed.png`, then changes the status from `open` to `fixed` in the issue and `Qa/report.md`. | Read/Write/Edit, Bash, PowerShell, Figma read tools | code fixes, updated QA records |

`project-planner` and `frontend-implementer` were already defined in the repo when QA work started; `ui-qa` and `dev-fixes` were written during the session at the user's request.

### Initial prompts (condensed from the real ones)

**project-planner**
> Plan the FlowPilot landing page build in E:\flow-pilot (Next.js 16 App Router, Tailwind v4 CSS-first; read CLAUDE.md, AGENTS.md and the Next docs first). Inputs: the requirements brief `FlowPilot_Candidate_Assessment_Brief.docx` (extract the mandated stack, every functional requirement, form fields and validation rules, interactions, accessibility/performance/responsive requirements, deliverables) and Figma file `WAHeIX5DCB0FAYZ2lOcr6d` (desktop `1:580`, mobile `2:1005`, mobile menu `16:584`). Produce a plan only, no code, in `PLAN.md`: requirement checklist, section/component breakdown, design tokens, assets, file structure, build order, form validation spec, state/interaction spec, responsive strategy, risks and open questions.

**frontend-implementer**
> Implement the FlowPilot landing page. Read `PLAN.md`, then `FIGMA_SUPPLEMENT.md` (the supplement wins on conflicts), with the brief as the source of truth for stack and functionality. Pixel-perfect against Figma at 1280 and 375/410, fluid in between, tokens in `globals.css`. Implement all brief functionality: mobile nav, smooth anchors, tabs, testimonial slider, billing toggle and the contact form with every validation rule, counter, conditional field, submit simulation and success message. Server Components by default, `"use client"` only on interactive leaves. Write tests for form validation and key interactions. Run lint and build. Report deviations and anything unverified.

**ui-qa** (the real agent type was not yet registered on first use, so round 1 ran as a general-purpose agent following `ui-qa.md`)
> Run a full UI QA pass of the app against the Figma frames. Write issues to `Qa/issues`, screenshots to `Qa/screenshots`, summary to `Qa/report.md`. Do not modify app code.

**dev-fixes**
> Fix the open QA issues in `Qa/`. Verify each fix with a `QA-NNN-fixed.png` and measured values, and only then change its status from `open` to `fixed` in the issue file and `Qa/report.md`. Figma wins on layout, spacing and visible text; the brief wins where it mandates behaviour. Run lint, tsc, tests and build. Do not commit.

## 2. One strong prompt and why it worked

The brief for QA-046 (mobile side padding), sent to `dev-fixes`:

> The user says the left/right padding on mobile does not match Figma, and that the mobile design width is 410. I inspected Figma node `2:1005` (frame named '375', width 410) and found the cause: the 410px frame contains ONE inner container `2:1006` 'Container max 375px or 100% on mobile' that is 375px wide, centred at x=17.5. Header, hero, sections, contact and footer are all 375 wide with 20px inner padding. So at 410, content is 335px wide with 37.5px margins and backgrounds span only the centred 375px. The app is currently fluid at 410 (20px padding, full-bleed gradients and header). That is the mismatch. Task: constrain the page below `md` to a centred column of max 375px, fluid below that, prefer one wrapper over per-section hacks, keep the sticky header, smooth-scroll offset and pricing scroller working, verify at 410/420/375/360 against Figma coordinates, and make sure earlier fixes are not regressed.

Why it worked:
- **The root cause was found first.** Before delegating, the coordinator read the Figma metadata and discovered the 375px container inside the 410px frame. The agent was handed a diagnosis, not a vague complaint.
- **It named exact nodes and numbers** (`2:1006`, `x=17.5`, 335px content, 37.5px margins), so the result could be checked by measurement.
- **It stated the preferred solution shape** (one wrapper, not per-section hacks), and it listed what must not break (sticky header, scroll offset, pricing scroller, earlier fixes).
- **It defined done:** measurements at four widths and a status change only after verification.
- Result: a one-line change in `src/app/page.tsx` (`max-md:mx-auto max-md:max-w-[375px]`) that fixed every section at once.

## 3. One weak prompt and the improved version

**Weak (QA round 1):**
> Run a full UI QA pass of the FlowPilot app against the Figma file. Write issues to Qa/issues ... Do not modify app code.

It produced 19 issues, all minor. The agent compared mostly by eye, did no pixel diffs and did not test tablet widths, so it reported things like "sections match within 1px" while the user could still see many mismatches (a nav colour, a card touching the screen edge, wrong spacing, wrong icons).

**Improved (QA round 2):**
> Be rigorous and measured: for every Figma element, get node x/y/width/height and styles from Figma, measure the matching DOM element with a headless browser script (`getBoundingClientRect`, `getComputedStyle`) and diff position, size, font, colour, border, radius, shadow, gap and padding. Report differences of 2px or more and any colour/font/weight/text/wrapping mismatch. Produce overlay images per section. Cover every section at 1280, 410 and 375, plus 768 and 1024 for breakage, hover/focus styles and mobile menu behaviour. Skip documented deviations. Re-test the fixed round-1 issues.

It found 23 more issues, including three major ones (nav colour `#101828` vs `#667085`, first pricing card at x=0 on mobile, mobile section gaps about 250px too large). The improvement came from specifying how to measure, what tolerance to use, which viewports to cover and what to skip.

## 4. A Claude recommendation I rejected or modified

During QA of the interactive banner, the fixing agent kept the three mobile tabs at equal width, and described Figma's clipped third tab ("Colla") as a Figma artifact that could not be matched. That was a reasonable engineering call, but the user compared the app with the Figma screenshot and rejected it: the design shows Plan and Automate at fixed 108px with the third tab cut off.

Modified outcome (QA-047): the tab row became a scrollable, scrollbar-less row with Figma's 108px tabs and a visibly cut-off third tab. Accessibility was kept: `role="tablist"`, arrow/Home/End keys, roving tabindex, and the selected tab scrolls into view. The Collaborate tab width (110.9px) is inferred, because Figma clips it.

Related smaller case: the brief says the message counter should read `n / 300` while Figma shows `0/300`. Claude kept the brief's format (a test asserts it) and left the issue (QA-006) open for a human decision instead of silently choosing. The same applies to the Terms checkbox default (QA-007).

## 5. A debugging example: pricing card touching the screen edge (QA-027)

- **Problem:** on mobile, the first pricing card sat at `x=0`, touching the screen edge, while Figma starts it at `x=20`. The same happened at 768px.
- **Investigation:** round-2 QA measured the scroll container in a headless browser. It loaded with `scrollLeft = 20`, so the scroll-snap alignment ignored the container's left padding and the first card snapped flush to the edge.
- **Claude prompt (to `dev-fixes`):** "QA-027 (mobile pricing first card at x=0: fix scroll start / snap padding, also at 768)", with the issue file, Figma and app screenshots attached.
- **Fix:** add `scroll-padding-left` to the scroller (`scroll-pl-5`, `md:scroll-pl-8`, `lg:scroll-pl-0`) in the pricing component.
- **Verification:** re-measured in the headless browser: `scrollLeft` is 0 and the first card is at `x=20` at 375 and 410, and at `x=32` at 768. A `QA-027-fixed.png` screenshot was saved, then lint, `tsc --noEmit`, tests and build were run. The status in `Qa/report.md` changed to `fixed` only after the measurements.

A second, smaller example: hovering an inactive tab made it vanish. The user sent a screenshot; the cause was a hover background (`#f1f5ff`) almost identical to the banner's gradient. The fix keeps the tab white and changes the text colour and adds a shadow on hover (`PillTab.tsx`, `Button.tsx`). That one was checked by lint and tests; the visual result still needs a manual hover check.

## 6. Where Claude helped most

- **Turning the brief and Figma into a plan and a first build.** The planner extracted the requirements and a validation spec, and the implementer produced the full page, form, tests and tokens in one pass.
- **Measured QA at scale.** Headless-browser scripts compared hundreds of Figma values against computed styles, something that is slow and error-prone by hand. This is how the major issues were found.
- **Fix-verify loops.** Each issue went through a fix, a measurement, a before/after screenshot and a status update, which left an auditable trail in `Qa/`.
- **Parallel, scoped work.** Planning, implementation, QA and fixing were separate agents with their own briefs, so each context stayed small and focused.
- **Surfacing conflicts instead of hiding them.** Brief-versus-Figma differences (footer content, testimonial indicator, yearly pricing, invented tab copy, counter format) were reported rather than silently resolved.

Limits worth knowing: the planner and early QA runs initially had no Figma access, so the coordinator fetched frames itself; the first QA pass was shallow; some agent claims (for example "matches within 1px") were measurements of its own, not independently verified.

## 7. A meaningful decision I made myself

**Testimonial slide indicator: Figma over the brief.** The brief requires an active-slide indicator, but the Figma design has none. Claude presented three options (remove the dots, keep and restyle them, or hide them visually with screen-reader text only). I chose to remove the dots on both desktop and mobile, then also asked for the mobile prev/next arrows to be removed so mobile becomes a touch-swipe slider. This deliberately drops one brief item to get a pixel-matching result; it is recorded in `Qa/issues/QA-043.md`, and the slider keeps keyboard operation and a screen-reader-only "Slide n of N" status. Other decisions of this kind: treating the hero's vertical alignment as a real mismatch rather than a Figma artifact (QA-003), and wanting Figma's 375px centred column at a 410px viewport (QA-046).

---

*Maintenance note:* QA status as of the last report update: 47 issues, 45 fixed, 2 open (QA-006 counter format, QA-007 Terms checkbox default), both waiting on a decision.
