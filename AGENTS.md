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

## Verification and test requirements

- Before adding scripts, inspect `package.json`. At present, `build` is the only verification script and runs `tsc -b && vite build`; no lint, standalone typecheck, or test script is configured.
- For every feature or bug fix, add or update focused tests for behavior and edge cases. Use unit tests for domain logic and calculator formulas, component tests for interactions, and end-to-end tests for critical learner/admin journeys when those test tools are introduced.
- Test English and Bengali rendering, responsive layouts, keyboard access, both themes, empty/error states, and permissions where the relevant feature exists.
- Run the available typecheck, lint, tests, and production build scripts after relevant changes. Report checks that could not run because a script/tool is absent; do not claim a missing check passed.
- Do not weaken strict compiler settings, delete failing tests, or suppress diagnostics just to get a green build. Fix the underlying issue or document a justified, narrowly scoped exception.
