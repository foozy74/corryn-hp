# AGENTS.md

Single-page React 19 SPA for **Torryn Capital & Holding Poland** (studio/design project, rendered via Vite 6). No backend, no tests, no lint/typecheck configured.

## Commands
- `npm install` — deps (default Vite install exists in `node_modules`)
- `npm run dev` — dev server on **port 3000** (`vite.config.js`)
- `npm run build` / `npm run preview` — production build / serve

## Architecture / conventions
- Stack: **React 19 + Vite + Tailwind CSS v4** (via `@tailwindcss/vite` plugin). There is **no `tailwind.config.js`** — Tailwind v4 auto-detects classes and theming lives in CSS.
- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Sections map 1:1 to components in `src/components/` (`Hero`, `About`, `Capabilities`, `ValueProposition`, `Differentiators`, `ContactSection`, `Footer`, plus `CapabilityModal`, `DisclaimerModal`). New sections must be added to `App.jsx`.
- **All copy/text is data, not markup.** Every string (EN/DE/PL) lives in `src/data/content.js` under `translations: { en, de, pl }`, consumed as `t=translations[lang]`. Components only receive/use `t` — never hardcode user-facing text in JSX. Add content by editing `content.js`, not components.
- Language default is `'en'` (`useState('en')` in `App.jsx`); toggle handled in `Header.jsx`.
- Styling: Tailwind utilities + shared utility classes in `src/index.css` — `.btn-gold`, `.btn-outline-gold`, `.glass-panel`, `.text-gradient-gold`, `.section-padding`, `.container-custom`, `.animate-fadeIn`. Theme colors use `#c5a059` (gold) / `#080b13`, `#0d1220` (navy). Respect these instead of introducing a new palette.
- Fonts (Cinzel + Plus Jakarta Sans) and `class="dark"` are set in `index.html`.

## Gotchas
- **Contact form is a front-end mock**: `ContactSection.jsx` `handleSubmit` just `setTimeout` → shows a generated `TC-INQ-2026-XXXX` ref and fires `canvas-confetti`. No network/email submission.
- Static assets referenced as `/assets/...` serve from `public/` (favicon `image1.png`, `hero_bg.jpg`, images 1-9).
- Repo root contains source-material files (**not** build inputs) — `Torryn Capital Logo.png`, corporate profile `.docx/.pdf`, `full_text.txt`, `extracted_assets/`, various `*_preview.png`, and the `dist/` build output. Don't treat these as part of the app.
