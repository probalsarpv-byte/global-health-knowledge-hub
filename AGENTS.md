# Project guide

## Project status and scope

This repository is a React 18 + TypeScript + Vite frontend prototype for a biomedical and nutrition learning platform. Preserve the existing Forma student dashboard and its working interactions when extending it. Do not replace this app with another scaffold or start a second React/Vite project in this directory.

### Implemented today

- React Router routes for the public landing page (`/`), student dashboard and six module previews (`/learn`, `/learn/:module`), and admin prototype (`/admin/*`).
- The original responsive student overview cards and feature illustration, now in `src/features/student/StudentDashboard.tsx` with shared navigation and search in `StudentLayout.tsx`.
- Route-ready placeholder views for Anatomy, Physiology, Biochemistry, Metabolism, Nutrition, and Calculators.
- A responsive Public Website entry page and a distinct Admin Dashboard with an overview and 11 management placeholder routes.
- Shared in-memory dark/light and Bengali/English controls, typed message catalogs, document `lang` updates, and Noto Sans Bengali font support.
- Module-name and module-description search, mobile navigation drawers, reduced-motion styling, and basic route/language tests.
- ESLint, Vitest, TypeScript, and Vite production build scripts.

### Placeholder or not implemented

- Learning module pages are previews; no scientific lesson content or functioning calculators are implemented. Dashboard lessons, progress, and counts are illustrative examples.
- The Admin Dashboard is UI-only. Management screens show placeholders; no records are read or edited.
- Search covers module names and descriptions, not lesson content.
- This is not a complete learning product: there are no accounts, server-side authorization, APIs, database, saved progress, or durable preferences.
- No accounts, authorization, API, database, saved progress, durable preferences, or real learner profile data.
- No Bengali translation or language selector exists; the interface is English-only today.
- Educational copy is demonstration text, not reviewed scientific guidance or medical advice.
- Preferences, help, subject filtering, and several profile/workspace affordances are visual controls without completed actions.
- `package.json` defines `lint`, `test`, `typecheck`, and `build` scripts. Current Vitest coverage is a small set of navigation and locale smoke tests, not comprehensive product coverage.

Treat dashboard statistics, identities, lesson descriptions, progress, and dates as sample content until connected to verified product data. Do not imply a feature is functional merely because its card or control is visible.

## Architecture direction

Keep the current application working while evolving it in small, reviewable steps. Use feature-oriented modules and shared UI, rather than growing `App.tsx` into a monolith. A suitable target structure is:

```text
src/
  app/                 # app shell, route definitions, providers, global styles
  features/
    public/             # landing, about, course discovery, public content
    student/            # overview, learning paths, lessons, progress, profile
    admin/              # admin shell, users, curriculum, content review
    anatomy/            # domain-specific learning experiences as they are built
    physiology/
    biochemistry/
    metabolism/
    nutrition/
    calculators/        # separately validated formulas and explanations
  components/           # accessible shared primitives and composed UI
  content/              # typed, reviewed lesson content and citations
  i18n/                 # locale configuration, message catalogs, formatting
  services/              # typed API boundaries; no direct fetch logic in views
  types/                 # shared domain types
```

This is a recommendation, not a request to create these folders preemptively. Introduce routes and folders only when implementing their corresponding feature. Keep public, student, and admin experiences in distinct route/layout boundaries (for example `/`, `/learn/*`, and `/admin/*`). Admin routes must be protected by server-enforced authorization when a backend exists; hiding a link in the client is not access control. Share design-system components and domain types without coupling the three experiences' navigation or permissions.

### Code organization and change safety

- Keep TypeScript strict. Define explicit types at module, lesson, progress, locale, API, and calculator boundaries; do not use `any` to bypass a mismatch.
- Keep view components focused. Move reusable components, stateful behavior, content, and domain calculations into appropriately named modules as the app grows.
- Keep scientific content separate from layout. Store sources and review metadata with content; avoid embedding unsourced scientific claims in presentation components.
- Keep calculations in pure, independently testable functions. Label formula inputs, units, assumptions, valid ranges, and limitations in the UI.
- Preserve existing navigation, mobile drawer, search, theme control, dashboard sections, and responsive styling while refactoring. Before removing or changing an interaction, identify its callers and replace it with an equivalent intentional behavior.
- Avoid unrelated file deletion, broad rewrites, and dependency additions that do not serve the requested work. Keep lockfile changes consistent with manifest changes.
- Do not add generated build output or local dependency directories to source control.

## Responsive behavior

- Design mobile-first and verify narrow phone, tablet, and desktop widths; support viewport widths down to 320 CSS pixels without accidental horizontal scrolling.
- Keep all content and controls usable when text wraps, the browser zooms, and Bengali labels are longer than English labels.
- Make the mobile navigation drawer operable by touch and keyboard, dismissible, and sized to the viewport. Do not let overlays obscure content without an accessible way to close them.
- Use flexible layouts and content-driven heights rather than fixed dimensions that clip translated text or enlarged text.
- Respect `prefers-reduced-motion`; do not make motion necessary to understand state.

## Bengali and English support

- Treat Bengali (`bn`) and English (`en`) as first-class supported locales. Do not hard-code user-facing English strings in components as localization work is introduced.
- Put translations in typed locale catalogs with matching keys. Keep scientific names, units, and formulas consistent across translations; retain standard Latin scientific terminology where appropriate and explain it in the selected language.
- Provide an explicit, keyboard-accessible locale selector and persist the learner's choice when persistence is implemented. Set the document `lang` attribute to the active locale (`en` or `bn`).
- Use fonts with Bengali glyph coverage and test shaping, conjuncts, punctuation, and mixed Bengali/Latin text in real browsers. Ensure line height and wrapping are comfortable for Bengali script.
- Localize dates, number formats, units, validation, empty states, accessible names, and errors as well as headings. Never machine-translate safety-critical science without qualified review.

## Scientific accuracy and learner safety

- Use current, reputable primary research, clinical guidelines, authoritative textbooks, and government or academic health sources appropriate to the claim. Attach citations and access/review dates to scientific lesson content.
- Distinguish established evidence, uncertainty, hypotheses, and simplified teaching models. Use qualified subject-matter review for biomedical and nutrition lessons before publication.
- Avoid presenting educational material as individual diagnosis or treatment advice. State scope and important limitations where learners might reasonably mistake an example for personal medical advice.
- For calculators, verify formulas against authoritative references and independently checked examples. State units, population/age assumptions, valid input ranges, rounding, interpretation limits, and when not to use a result. Validate inputs and handle missing, zero, negative, and out-of-range values deliberately.
- Do not invent citations, clinical thresholds, nutrient recommendations, or calculator results. Flag disputed or population-specific recommendations instead of flattening them into universal rules.

## Accessibility

- Use semantic landmarks, a logical heading hierarchy, descriptive link/button labels, and native controls where possible.
- All interactions must work with keyboard alone, have visible focus, and expose correct names, roles, states, and expanded/selected status to assistive technology.
- Give dialogs and mobile navigation appropriate focus entry, focus containment where needed, Escape dismissal, and focus return. Do not rely on color or hover alone to communicate information.
- Provide meaningful alternative text for informative images; mark decorative artwork as hidden from assistive technology. Avoid remote user imagery as a required part of core functionality.
- Maintain readable contrast in both themes, support text resizing/reflow, and provide accessible validation and status announcements for dynamic results.
- Test with automated accessibility checks and manual keyboard/screen-reader review for meaningful UI changes.

## Academic Writing, Language and Citation Standard (Permanent)

All future Antigravity sessions and human contributors must strictly comply with the standard documented in `docs/ACADEMIC_WRITING_AND_CITATION_STANDARD.md`. This applies platform-wide across Anatomy, Physiology, Biochemistry, Metabolism, Functional Nutrition & Dietetics, Clinical Sciences, and all future educational chapters.

### 1. Vancouver-Style Numeric Citation System
- Use compact numeric brackets: `[1]`, `[2]`, `[3]`, etc.
- **Never display raw URLs, external hyperlinks, publisher cards, or bibliographic strings inside main chapter paragraphs.**
- Number references sequentially by first appearance within the chapter.
- Reuse the same number whenever a source is cited again.
- Support multiple ascending citations, e.g., `[1, 3]`.
- Every inline citation number must be clickable and smoothly jump to `#ref-${chapterId}-${number}` in the End-of-Chapter References section with keyboard focus and target highlighting.
- Every reference item in the bibliography must feature an accessible `Return to citation [n]` control that returns the learner to their exact reading position.
- Retain full bibliographic details, verified publisher links, and DOIs **only** in the final References section.
- Cross-academy concept links (e.g., Ovary, Insulin Resistance, Glycolysis, LH/FSH) are conceptual links and must never be converted into or conflated with citations.

### 2. Simple International English
- Write clear, direct, and accessible international English suitable for non-native English speakers, including Bangladeshi students.
- Use short-to-medium sentences and explain difficult scientific terms immediately on first introduction.
- Preserve scientific precision; never replace necessary medical or biochemical terminology with incorrect everyday words.
- Break biological pathways into clear logical steps: what happens, where it happens, why it happens, and what happens next.
- Explicitly distinguish illustrative analogies from actual molecular mechanisms.
- Explain macroscopic context before delving into detailed enzymology.

### 3. Bengali Language Quality (`বাংলা মানদণ্ড`)
- Write natural, scientifically accurate Bengali reading like high-quality popular science literature.
- Pair standard English terms alongside Bengali explanations where beneficial (e.g., *গ্লাইকোলাইসিস (Glycolysis)*).
- Maintain complete scientific scope and depth parity between English and Bengali editions.

### 4. Educational Chapter Structure
Where suitable for biological mechanisms, follow this progression:
1. What is it? (Definition)
2. Why is it important? (Physiological role)
3. Where does it happen? (Tissue & organelle localization)
4. How does it work? (Sequential mechanism)
5. Intuitive everyday analogy vs. actual biological mechanism
6. Detailed molecular regulation
7. Clinical and nutritional relevance
8. High-yield takeaway and assessment

Maintain Foundation, Academic, and Advanced/Research tiers across all subjects.

## Verification and test requirements

- `package.json` defines `lint`, `test`, `typecheck`, and `build` scripts.
- For every feature or bug fix, run:
  - `npm run lint` (`eslint . --max-warnings=0`)
  - `npm run typecheck` (`tsc -b --pretty false`)
  - `npm run test` (`vitest run`)
  - `npm run build` (`tsc -b && vite build`)
- For every citation or content change, verify citation numbering, duplicate source reuse, two-way navigation, return-to-citation controls, and bilingual rendering.
- Do not weaken strict compiler settings, delete failing tests, or suppress diagnostics just to get a green build. Fix the underlying issue or document a justified, narrowly scoped exception.
