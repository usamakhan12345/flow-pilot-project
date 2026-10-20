# FlowPilot UI QA Report

- Date: 2026-10-20
- App URL: http://localhost:3000 (Next dev server)
- Viewports tested: desktop 1280, mobile 410 and 375, mobile menu open at 410
- Figma file WAHeIX5DCB0FAYZ2lOcr6d, nodes: 1:580 (desktop), 2:1005 (mobile, designed at 375 centered in 410), 16:584 (mobile menu)
- Tools: Figma MCP (metadata, design context, existing full-frame screenshots in Qa/screenshots), headless Edge driven over CDP (Node scripts kept in the temp dir, not in the project) for full-page screenshots, computed styles and bounding boxes, pngjs for crops and side-by-sides.

## Summary
- Total issues: 47 (19 from round 1, 23 from round 2, 1 from a user decision, 4 user-reported)
- By severity: critical 0, major 3 (QA-020, QA-027, QA-038), minor 43
- By status: open 2 (QA-006, QA-007 pending a user decision), fixed 45 (QA-001..005, 008..047)

Overall the desktop build is very close to Figma (hero 600px, trusted-by 195.5/196, features 460.5/461, interactive 434.5 identical; nav/typography/colors/radii match). Most findings are on the mobile frame (copy, alignment and sizes that differ from node 2:1005).

## Issues
| ID | Title | Severity | Viewport | Section | Status | Link |
|---|---|---|---|---|---|---|
| QA-001 | Header CTA label reads "Start Free" instead of "Get Started" | minor | desktop 1280 | Header | fixed | [QA-001](issues/QA-001.md) |
| QA-002 | Header nav links shifted 59px right; header content ~3.5px lower than Figma | minor | desktop 1280 | Header | fixed | [QA-002](issues/QA-002.md) |
| QA-003 | Hero left column vertical layout differs (pill/heading/CTAs ~50px off Figma) | minor | desktop 1280 | Hero | fixed | [QA-003](issues/QA-003.md) |
| QA-004 | Testimonials: card and arrow buttons shifted right; Next button overflows the 1216px container | minor | desktop 1280 | Testimonials | fixed | [QA-004](issues/QA-004.md) |
| QA-005 | Pricing cards 26px taller than Figma; CTA gap and toggle-to-cards gap differ | minor | desktop 1280 | Pricing | fixed | [QA-005](issues/QA-005.md) |
| QA-006 | Message counter reads "0 / 300" instead of "0/300" | minor | both | Contact | open | [QA-006](issues/QA-006.md) |
| QA-007 | Terms checkbox is unchecked by default and its row is 5px shorter (Submit button 3px higher) | minor | desktop 1280 | Contact | open | [QA-007](issues/QA-007.md) |
| QA-008 | Footer copyright text differs from Figma | minor | both | Footer | fixed | [QA-008](issues/QA-008.md) |
| QA-009 | Mobile hero subtitle is 13px, Figma is 14px/20px | minor | mobile 375 and 410 | Hero | fixed | [QA-009](issues/QA-009.md) |
| QA-010 | Mobile hero CTA buttons hug content instead of filling the row | minor | mobile 375 and 410 | Hero | fixed | [QA-010](issues/QA-010.md) |
| QA-011 | Mobile dashboard mockup: card ~36px taller, task rows pitch 31px vs 23px, copy differs | minor | mobile 375 and 410 | Hero | fixed | [QA-011](issues/QA-011.md) |
| QA-012 | Mobile logo cloud: extra heading, 6th logo and wrong order; section 2x taller | minor | mobile 375 and 410 | Trusted by | fixed | [QA-012](issues/QA-012.md) |
| QA-013 | Mobile features: centered heading with subtitle and longer card copy; cards 86px tall with 14px gap | minor | mobile 375 and 410 | Features | fixed | [QA-013](issues/QA-013.md) |
| QA-014 | Mobile interactive banner: narrower banner and stat card than Figma | minor | mobile 375 | Interactive | fixed | [QA-014](issues/QA-014.md) |
| QA-015 | Mobile testimonials: heading-to-subtitle gap is ~30px smaller than Figma | minor | mobile 375 and 410 | Testimonials | fixed | [QA-015](issues/QA-015.md) |
| QA-016 | Mobile pricing: heading, subtitle and toggle centered; Figma left-aligns them | minor | mobile 375 and 410 | Pricing | fixed | [QA-016](issues/QA-016.md) |
| QA-017 | Mobile contact: no card/gradient/eyebrow in Figma; form width 293px vs 335px | minor | mobile 375 and 410 | Contact | fixed | [QA-017](issues/QA-017.md) |
| QA-018 | Mobile terms checkbox label lacks blue links | minor | mobile 375 and 410 | Contact | fixed | [QA-018](issues/QA-018.md) |
| QA-019 | Mobile menu: nav rows 53.2px instead of 54px (last item 3px higher) | minor | mobile 410 | Mobile menu | fixed | [QA-019](issues/QA-019.md) |
| QA-020 | Desktop nav links are #101828 instead of #667085 | major | desktop 1280 | Header | fixed | [QA-020](issues/QA-020.md) |
| QA-021 | Header/menu logo mark is a 13x6 skewed parallelogram; Figma shows a flat 17x5 bar | minor | both | Header / menu | fixed | [QA-021](issues/QA-021.md) |
| QA-022 | Mobile hamburger icon is thinner and shorter than Figma | minor | mobile 375/410 | Header | fixed | [QA-022](issues/QA-022.md) |
| QA-023 | Hero mockup: stat cards and task list 3.5-7.5px higher; rows 36px pitch vs 35px | minor | desktop 1280 | Hero | fixed | [QA-023](issues/QA-023.md) |
| QA-024 | Interactive banner left card 553px wide, Figma 560px | minor | desktop 1280 | Interactive | fixed | [QA-024](issues/QA-024.md) |
| QA-025 | Pro pricing card: 2px white gap between border and Most Popular banner | minor | both | Pricing | fixed | [QA-025](issues/QA-025.md) |
| QA-026 | Mobile Pro card: inner spacing, list pitch 24 vs 28, price line-height | minor | mobile 375/410 | Pricing | fixed | [QA-026](issues/QA-026.md) |
| QA-027 | Mobile pricing: first card flush with screen edge (scrollLeft 20); Figma starts at x=20 | major | mobile 375/410 (and 768) | Pricing | fixed | [QA-027](issues/QA-027.md) |
| QA-028 | Mobile pricing header spacing (top pad 48 vs 24, heading-subtitle gap 8 vs 18) | minor | mobile 375/410 | Pricing | fixed | [QA-028](issues/QA-028.md) |
| QA-029 | Mobile hero vertical rhythm off by 4-8px between blocks | minor | mobile 375/410 | Hero | fixed | [QA-029](issues/QA-029.md) |
| QA-030 | Mobile mockup sidebar 10px vs 11px, logo 14px vs 13px, badge padding 12 vs 10 | minor | mobile 375/410 | Hero | fixed | [QA-030](issues/QA-030.md) |
| QA-031 | Mobile logo cloud: logos not in fixed slots, row 14px higher in its band | minor | mobile 375/410 | Trusted by | fixed | [QA-031](issues/QA-031.md) |
| QA-032 | Mobile features card 1 icon: desktop square glyph instead of narrow bar | minor | mobile 375/410 | Features | fixed | [QA-032](issues/QA-032.md) |
| QA-033 | Mobile features: descriptions wrap at title width in Figma; text x and first card offset 2px | minor | mobile 375/410 | Features | fixed | [QA-033](issues/QA-033.md) |
| QA-034 | Mobile interactive banner: spacing, left card 92 vs 80 tall, stat-card paddings | minor | mobile 375/410 | Interactive | fixed | [QA-034](issues/QA-034.md) |
| QA-035 | Mobile 375: Automate/Collaborate tabs make the section 22px taller (layout shift) | minor | mobile 375 | Interactive | fixed | [QA-035](issues/QA-035.md) |
| QA-036 | Mobile testimonial card: quote indented and 32px lower, longer copy, border present | minor | mobile 375/410 | Testimonials | fixed | [QA-036](issues/QA-036.md) |
| QA-037 | Mobile contact form: textarea 78 vs 94px, label-input gap 6 vs 4px, submit 9px higher | minor | mobile 375/410 | Contact | fixed | [QA-037](issues/QA-037.md) |
| QA-038 | Mobile section spacing: extra gaps up to +72px, page 248px taller than Figma | major | mobile 375/410 | Page rhythm | fixed | [QA-038](issues/QA-038.md) |
| QA-039 | Mobile footer: links not spread, logo row 9px lower, mark glyph differs | minor | mobile 375/410 | Footer | fixed | [QA-039](issues/QA-039.md) |
| QA-040 | Mobile menu: close button 8px left; X and chevron colour/size differ | minor | mobile 375/410 | Mobile menu | fixed | [QA-040](issues/QA-040.md) |
| QA-041 | 768/1024: hero mockup left-aligned leaving empty column; left card narrower than stat card | minor | 768 and 1024 | Hero / Interactive | fixed | [QA-041](issues/QA-041.md) |
| QA-042 | Testimonial arrow icon thin 5x10 chevron vs bold 7.5x9 glyph | minor | desktop and mobile | Testimonials | fixed | [QA-042](issues/QA-042.md) |
| QA-043 | Testimonial slide dots and mobile arrows not in Figma (brief's indicator dropped by user decision; mobile is a swipe slider) | minor | desktop and mobile | Testimonials | fixed | [QA-043](issues/QA-043.md) |
| QA-044 | Mobile contact heading on one line and subtitle 13px/regular with 8px gap (Figma: 2 lines, 12px/18px medium, 4px) | minor | mobile 375 and 410 | Contact | fixed | [QA-044](issues/QA-044.md) |
| QA-045 | Mobile interactive banner: banner and content insets, heading offset and stat card text inset differ from Figma | minor | mobile 375, 410, 420 | Interactive | fixed | [QA-045](issues/QA-045.md) |
| QA-046 | Mobile page is fluid at 410/420 instead of a centred 375px column (white sides) | minor | mobile 410, 420 | Whole page | fixed | [QA-046](issues/QA-046.md) |
| QA-047 | Mobile banner tabs: equal-width tabs instead of Figma 108px tabs with the third clipped (scrollable row); 0.5px offsets | minor | mobile 375, 410, 420 | Interactive | fixed | [QA-047](issues/QA-047.md) |

## Sections checked with no issues found
- Desktop trusted-by logos bar (sizes, positions, color #7A879B within 1px).
- Desktop capabilities/feature cards (270x200, gap 24, radius 16, type sizes match; gear icon is an SVG by design).
- Desktop interactive "Plan, automate, collaborate" banner (positions, tab sizes 108x40, stat card, progress bar).
- Desktop hero right mockup card (x 587.2, 628.8x430, type scale).
- Desktop contact heading/left column and form field sizes (inputs 293.6x46, textarea 78px).
- Desktop footer layout and link positions (aside from copyright text, QA-008).
- Mobile hero heading/badge, mobile header (64px + border), mobile menu structure/fonts/colors/behaviour (open at 410).
- Interactions: tab switching (content changes, selected state), billing toggle (Yearly prices update), empty-form submit shows 6 validation messages, no horizontal overflow at 375/410/1280.

## Not checked / limitations
- Figma node 2:1005 is 375px wide inside a 410 frame; 410 comparisons reuse the 375 values, so fluid width differences are not logged.
- Figma artifacts deliberately not logged: staggered pricing card y-offsets, clipped "Colla" third tab, duplicate Pro card, hard line breaks in the desktop testimonial quote, 255.9px testimonial card height, mobile footer links clipped below the frame. The empty 100x100 hero frame is raised only as QA-003 for the owner to decide.
- Icons were compared visually only (feature icons, hamburger, chevrons); no pixel-diff images were generated.
- Mobile menu closing via Escape/backdrop, focus trap, hover/focus states and tablet widths (768/1024) were not exercised.
- Mobile menu panel is right-aligned in the viewport while the Figma frame shows it centered on a dark backdrop; not logged.
- Low-contrast colors (#98A2B3, #FF9F43) follow Figma and are documented in FIGMA_SUPPLEMENT.md.
- Temporary full-page captures (app-full-*.png, app-menu-410.png) were left in Qa/screenshots as extra evidence.


# Round 2 (strict pass, 2026-10-20)

## Method
- Figma metadata for nodes 1:580, 2:1005 and 16:584 (absolute x/y/size of every frame) plus design context (font, size, weight, line-height, colour, letter-spacing, radius, shadow) for header 1:981, main 1:581, footer 1:965, mobile 2:1005 and menu 16:584. About 118 desktop and 109 mobile text styles were diffed automatically against the DOM (getComputedStyle) with a Node script; container positions and sizes were compared against getBoundingClientRect dumps taken at 1280, 1024, 768, 410 and 375.
- Headless Edge driven over CDP (scripts in C:\Users\Usama-FE\AppData\Local\Temp\flowpilot-qa, outside the project). Pixel overlays (Figma | app | diff) per section and zoomed icon crops are saved as Qa/screenshots/R2-desktop-*.png, R2-mobile375-*.png and QA-0NN-figma/app.png.
- Interactions exercised: the 3 tabs (section heights at 375/410/1280), monthly/yearly toggle, empty submit (6 errors), conditional demo-time field, hover on 34 links/buttons/cards, mobile menu open / Escape / backdrop / Tab trap / scroll lock, overflow scan at 375/410/768/1024/1280.

## Re-test of round 1
QA-001, 002, 004, 005 and 008-019 were re-measured: all still pass (a re-test note was appended to each issue file; status stays fixed). QA-003, QA-006 and QA-007 remain open as agreed.

## New issues
23 new issues, QA-020 to QA-042 (see the table). By severity: major 3 (QA-020, QA-027, QA-038), minor 20. By viewport: desktop only 3 (020, 023, 024), desktop and mobile 3 (021, 025, 042), mobile 375/410 16 (022 and 026-040), tablet 768/1024 1 (041). Top issues: QA-020 nav colour, QA-027 first pricing card cut at the screen edge on mobile, QA-038 mobile page rhythm (+248px), QA-025 white ring around the Pro banner, QA-034/036/037 mobile banner, testimonial and form metrics.

## Verified with no issue (round 2)
- Desktop: feature cards (270x200, gaps, icon tiles, text), trusted-by row, hero left column internal gaps (only the documented QA-003 offset), pricing card positions and heights (302px, within 1px), contact form fields/labels/checkbox/submit positions (within 1px), footer, banner right card (487x210), tab states and heights, toggle (Yearly shows $182 and $470), error state styling, hover styles on all links/buttons/cards, a global focus-visible rule.
- All 118 desktop Figma text styles match (size, weight, line-height, colour, letter-spacing) except the nav colour (QA-020).
- Mobile menu: rows 54px with pitch 58, CTAs at y 690/756, fonts, colours, radii; Escape, backdrop click, focus trap, scroll lock and focus return work.
- No horizontal overflow or clipped text at 375, 410, 768, 1024, 1280.
- Desktop footer logo mark matches the Figma footer asset.

## Not checked / limitations (round 2)
- Treated as documented or Figma artifacts and not logged: the grey gear glyph in feature card 4, staggered Pro cards, clipped "Colla" tab, hard-wrapped desktop quote, 255.9px testimonial card (and the resulting 36px height difference of the desktop testimonial section), duplicate mobile Pro card, "Contact form reference" placeholder copy and the mobile placeholders.
- The prev/next + dots row and the star row on mobile testimonials are treated as documented additions; only their spacing impact is noted in QA-038.
- The mobile Figma frame is 375 wide centred in 410: 410 was not diffed separately beyond overflow and the pricing scroller check.
- Mobile Starter and Business card internals have no Figma counterpart (Figma has two Pro cards), so only the Pro card was measured.
- The contact form success state was not captured: choosing 200+ requires the Preferred Demo Time radio and the scripted submit stopped at that validation message. Error states, the conditional field and the checked checkbox were checked.
- Sub-pixel anti-aliasing differences between the Figma export and Edge, 1px offsets from borders (mockup/cards) and the 65px (64 + 1px border) mobile header were not logged.
- Logo mark and arrow glyph sizes were taken from pixel bounding boxes of the Figma export, not from vector data.


# Round 2 fixes (2026-10-20)
QA-020..QA-042 were fixed and re-measured at 1280, 410, 375 and 768 (After images: Qa/screenshots/QA-NNN-fixed.png). QA-038 note: all four section gaps now match Figma (24 / 52 / 48 / 72); the mobile page was 3915px (Figma 3819) because of the documented prev/next row (+58, removed by QA-043, now 3857) and the longer contact subtitle copy (+39).
