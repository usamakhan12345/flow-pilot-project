# Figma supplement (overrides gaps/assumptions in PLAN.md)

Source: file WAHeIX5DCB0FAYZ2lOcr6d, fetched with working Figma access.

## Frame widths
- Desktop node 1:580 is really **1280px wide** (layer named "1440"): content max 1280, side padding 64px (content 1152). Header 76px (+border), main starts y=80, footer 116.5px tall.
- Mobile node 2:1005: designed at **375px** (user calls it 410). Build fluid with 20px side padding; verify at 375 and 410. Breakpoint: nav collapses to hamburger below ~lg (pick ~1024px; document it).
- Mobile menu node 16:584: full-height panel.

## Desktop header (1:981), from metadata
Logo "▰ FlowPilot" at x=64 (94x26). Nav links centered: Features, How It Works, Pricing, Testimonials, FAQ (gaps ~36px, 13-14px text). Right actions: "Log In" text link, then "Start Free" gradient button 150x42 (rx 10) right-aligned at x=1216. The "▰" glyph should be a small SVG bar mark, not a font glyph.

## Desktop footer (1:965)
Row with logo (left, x=64), copyright "© 2025 FlowPilot, Inc." (centered), Privacy / Terms / Security links (right, gap 24px, ends x=1216). Border-top #EEF1F5.

## Mobile (2:1005) key values
- Header 64px, px 20, border-b #EEF1F5, logo 17px bold tracking -0.425px, hamburger icon 26x24 (asset).
- Hero: gradient #F2F6FF→#F6F1FF, pt 32 pb 40 px 20. Badge 26px tall: "New" bold #2F5BFF 10px + "AI-powered workflow for modern teams ›" 10px #667085. H1 36px/36px extrabold tracking -0.9px, lines: "Work smarter." / "Let AI handle" / "the repetitive work." Sub 14px/20px #667085. CTAs row gap 14: Start Free 44px gradient (13px semibold), See How It Works 44px white border #DCE3F0 (12px). Three check rows (12px, gap 10, check icon 9x9). Mockup card: radius 18, border #DCE3F0, shadow 0 10px 36px rgba(29,42,87,.1), padding 15; mini sidebar 110px wide (#F6F8FC, rx 14) and content (greeting 14px bold, 9.5px sub, 3 stat tiles gap 6, tasks list 9.5px with status 8.5px).
- Logo cloud: one wrapping row at 13px semibold #7A879B, order Notion, Google, slack, Spotify, zoom (desktop order: Google, slack, Notion, Spotify, zoom, shopify; on mobile 3 + 2 wrap is acceptable, match screenshot).
- Features: heading 26px/28px extrabold, 4 stacked cards 76px tall, p 15, gap 14, radius 14, border #DCE3F0; icon tile 44x44 rx 12; title 14px bold, desc 11px #667085.
- Interactive banner: gradient rx 24; heading 30px/37.5px; tabs 40px tall rx 10 text 12px (active = gradient, inactive white); left card rx 14 title 16px bold; stat card (rx 16, border) with "40%" 40px extrabold, "Less manual work" 13px, progress track 16px #EEF2FF with gradient fill ~66%.
- Testimonials: eyebrow TESTIMONIALS 13px bold #2F5BFF tracking .325px uppercase; h2 26px; sub 15px/22.5px; card gradient bg, rx 18, p 20, min-h 220, quote mark 44px #7B4DFF, text 14px/19px medium, name 12px bold, role 10px.
- Pricing: h2 26px/28px, sub 12px, toggle buttons 36px tall (Monthly 92w gradient active, Yearly 80w white border). Cards are 277px wide (Pro: 2px #2F5BFF border, gradient "Most Popular" banner 30px, price 34px bold) in a horizontally scrolling row with gap 24 (cards overflow the viewport right edge). Implement as scroll-snap row: Starter, Pro, Business. The second card in the mobile frame (border #AAA, white banner) is a Figma artifact; do not copy it literally.
- Contact: h2 24px/30px extrabold ("Let's build the future together"); form gap 14; labels 12px medium; inputs 40px tall, bg #F6F8FC, border #DCE3F0, rx 8, text 13px; select with chevron; textarea with 0/300 counter; checkbox 14px; submit 42px gradient full width.
- Footer: logo 13px bold, copyright 11px, links row Privacy/Terms/Security 13px #667085.
- Mobile placeholder text in the mobile frame differs from desktop (Sarah Connor / sarah@company.com / Acme Studio / "Select" shows "1 - 10 members"); desktop uses John Doe / you@company.com / Acme Inc. / "Select team size". Use the desktop-style empty placeholders unless the brief says otherwise, and labels with `*` for required.

## Mobile menu (16:584) — NOTE different design language
- Full-height white panel, shadow 0 25px 50px -12px rgba(0,0,0,.25).
- Top bar: px 24, pt 28 pb 21: logo "▰ FlowPilot" (Inter bold 17px) and close "X" 40x40 round button (20px icon).
- Nav list (px 20, pt 12): Features, How It Works, Pricing, Testimonials, "FAQ & Contact". Each row p 14, rx 12, 4px gap, font **Plus Jakarta Sans** semibold 16.8px/25.2px #1E293B, right chevron 16px (#64748B-ish).
- Bottom pinned CTAs (px 24, pt 16, pb 36, gap 12): "Log In" outline (border #E2E8F0, rx 12, py 15, 15.7px semibold #1E293B) and "Start Free" gradient #5B47FB→#4F46E5 (rx 12, py 14, white 15.7px, shadow 0 1px 1px #C7D2FD).
- Behaviour: opens from hamburger, closes via X, Escape, link click, and backdrop; lock body scroll; focus trap + aria-expanded/aria-controls; the links smooth-scroll to sections. Load Plus Jakarta Sans via next/font for this menu only.

## Assets
Icons are SVGs the Figma tool provides as temporary URLs (check marks, feature icons, hamburger, close, chevrons, select chevron). Re-fetch via get_design_context/download_assets for node 1:580, 2:1005, 16:584 and save into public/ or src/assets; never keep Figma URLs in code. Gear (⚙), star (★) and "▰" glyphs should be SVG, not text.

## Contrast
Design colors #98A2B3 (Upcoming) and #FF9F43 on white are low-contrast; keep them for pixel fidelity but flag in the final report.
