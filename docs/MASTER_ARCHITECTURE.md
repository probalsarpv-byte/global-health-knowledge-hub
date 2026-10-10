# Master Architecture: Health, Nutrition & Digital Health Study and Knowledge Hub

**Status:** Proposed architecture, planning only  
**Scope:** Evolve the existing React 18, TypeScript, Vite and React Router application in this repository. This document does not authorize a new project, dependency changes, or backend implementation.

## 1. Product direction

Build an international study and knowledge hub that connects biomedical foundations, nutrition science, clinical and public health context, digital health methods, interactive learning and evidence. The public website is the discovery and reference surface; the student experience supports structured study; the admin experience governs content, evidence, learning tools and access. This is broader than a blog: editorial articles may be one content format, but they are organized into reusable, reviewed knowledge objects and learning pathways.

The existing repository is a frontend prototype with a public landing page at `/`, student dashboard and module previews at `/learn` and `/learn/:module`, and an admin prototype at `/admin/*`. It already has React Router, responsive layouts, theme and English/Bengali controls, module search, an admin navigation shell and basic Vitest route/localization coverage. Existing dashboard counts, lesson examples and admin metrics are illustrative; module pages and admin management screens are placeholders. There is no API, durable persistence, identity, authorization or working scientific calculator yet. Preserve the current home and dashboard design and these interactions while evolving them incrementally.

## 2. Product principles

- **Evidence first:** scientific claims carry traceable sources, review state, dates, context and uncertainty.
- **Connected learning:** concepts link across anatomy, physiology, biochemistry, metabolism, nutrition, health and digital tools.
- **International by design:** English and Bengali are first-class; future locales use the same content and review model. Translation preserves meaning, units, safety context and citations.
- **Learning before engagement metrics:** progress data supports learner-directed study and is never fabricated or presented as real.
- **Explainable tools:** calculations and simulations expose assumptions, units, limits, formulas and source provenance.
- **Privacy and least privilege:** collect the minimum data required; authorize sensitive actions on the server.
- **Small, reversible delivery:** retain current functioning routes, controls, responsive behavior and visual identity as new modules are introduced.

## 3. Complete module taxonomy

Modules are a navigational and curriculum taxonomy, not a requirement to build every area at once. A knowledge object can belong to several subjects and pathways. Start with the six current learner modules, then extend through the broader hub.

| Domain | Subdomains and example scope |
| --- | --- |
| **Anatomy** | Cell and tissue foundations; organ systems; gross and regional anatomy; histology; developmental anatomy; anatomical variation; 2D/3D structures and models. |
| **Physiology** | Cellular physiology; homeostasis; cardiovascular, respiratory, renal, nervous, endocrine, gastrointestinal, reproductive, immune and exercise physiology; lifespan and adaptation. |
| **Biochemistry** | Biomolecules; enzymes; molecular and cellular biology; genetics and gene expression; signaling; vitamins and cofactors; laboratory methods; biochemical interpretation foundations. |
| **Metabolism** | Carbohydrate, lipid, protein and amino-acid metabolism; fed/fasting states; energy balance; metabolic integration; micronutrient-dependent pathways; exercise and disease contexts. |
| **Nutrition** | Nutrients and food components; dietary patterns; lifecycle and population nutrition; assessment methods; food systems and safety; malnutrition; evidence-based recommendations with population and jurisdiction context. |
| **Health foundations** | Pathophysiology concepts; epidemiology; prevention; health promotion; social and environmental determinants; health literacy; clinical terminology and care-system context. Educational scope only; no individual diagnosis or treatment. |
| **Digital health** | Health data and interoperability concepts; telehealth; mobile and wearable technologies; clinical decision support; AI and algorithm literacy; usability, accessibility, privacy, ethics, equity and evaluation. |
| **Scientific methods and evidence** | Study design; measurement; statistics; evidence hierarchies and synthesis; critical appraisal; reproducibility; uncertainty, bias and conflicts of interest. |
| **Interactive tools** | Validated calculators; pathway visualizations; anatomy models; physiological and nutrition simulations; quizzes, cases and spaced practice. Each tool links back to concepts and evidence. |
| **Learning pathways** | Foundational sequences, cross-disciplinary pathways, level/difficulty metadata, prerequisites, learning objectives and optional assessment. Curated by educators; no assumed universal curriculum. |

Each domain can later have subject pages, concepts, lessons, visualizations, assessments and references. Keep content records independent of their presentation so the same reviewed item can appear in the public reference surface and a student lesson with appropriate context.

## 4. Connected knowledge graph

Represent connections explicitly instead of duplicating facts in unrelated pages. Initial node types:

- `Concept` (e.g. insulin signaling, iron absorption, cardiac output)
- `Lesson` and `LearningPath`
- `Subject` and `LearningObjective`
- `EvidenceSource` and `Claim`
- `Calculator`, `Simulation`, `AnatomyModel`, `Quiz` and `Case`
- `PopulationContext`, `Unit`, `LocaleVersion` and `ReviewRecord`

Use typed, directed relationships such as `PART_OF`, `PREREQUISITE_FOR`, `EXPLAINS`, `AFFECTS`, `INTERACTS_WITH`, `MEASURED_BY`, `VISUALIZED_BY`, `ASSESSES`, `SUPPORTED_BY`, `CONTRADICTED_BY`, `APPLIES_TO`, `TRANSLATED_FROM` and `REVIEWED_BY`. A claim attaches to one or more evidence sources, with its population, date range and certainty; a lesson may cite claims and link to related concepts, a model or a calculator. Avoid flattening correlation into causation or presenting a teaching-model link as clinical equivalence.

**Example path:** carbohydrate metabolism → insulin signaling → glucose regulation → meal composition and glycemic response → population/contextual limitations → evidence-backed nutrition lesson → optional simulation. A separate claim/source link should support every evidence-sensitive edge or statement.

For V1, graph data can be normalized records with stable IDs and typed relation rows rather than a dedicated graph database. Query a small neighborhood by ID for “related concepts” and pathway navigation. Introduce graph-specific infrastructure only if demonstrated query scale or authoring needs justify it.

## 5. Application architecture: public, student and admin

Retain this repository as the single application. Keep `App.tsx` as route composition and providers; avoid turning it into a feature implementation. Preserve the current `/`, `/learn/*` and `/admin/*` boundaries and shared design system. Suggested evolution, introduced only alongside real work:

```text
src/
  app/                 # route composition, providers, error boundaries
  components/          # accessible shared UI primitives
  features/
    public/            # discovery, subject index, public knowledge pages
    student/            # dashboard, paths, lessons, saved items, progress
    admin/              # review queues, publishing, catalog and governance
    anatomy/ physiology/ biochemistry/ metabolism/ nutrition/
    digital-health/ evidence/ calculators/ simulations/ assessments/
  content/              # content schemas, locale payloads, graph references
  i18n/                 # typed interface messages and locale utilities
  services/             # API clients and typed service boundaries
  types/                # shared domain types only where genuinely shared
```

### Public website (`/` and future `/subjects/*`, `/knowledge/*`)

Purpose: explain the hub, help visitors discover subjects and pathways, present public/reviewed knowledge, and provide clear entry to study. Keep the existing landing page and links to learning/admin preview. Publicly cache only published records; exclude drafts, private learner data and admin-only metadata. Public content should expose citation and review details and support stable canonical URLs.

### Student dashboard (`/learn/*`)

Purpose: guide learners through modules, lessons and pathways; later support bookmarks, preferences, assessment and saved progress. The existing dashboard cards, six module routes, responsive student navigation, search, theme and locale controls are the baseline to preserve. Until accounts and storage are implemented, label any sample progress and counts as demo. Do not infer real learner history from static UI.

### Admin dashboard (`/admin/*`)

Purpose: authorized staff workflow for content, subject taxonomy, anatomy assets, simulations, nutrient interactions, calculators, quizzes, users/access policy, scientific reviews, analytics and settings. Current screens are UI placeholders, not a functional management system. When connected, server authorization must gate every admin API and mutation. Admin UI visibility is not authorization. Track who changed/published/reviewed a record and retain auditable revisions.

Keep domain types and shared accessible components reusable, but keep public/student/admin route shells, navigation and permissions separate. Add route-level loading, error and not-found states as data-backed screens are built.

## 6. Bilingual and multilingual content model

Keep **interface localization** (short product messages in typed locale catalogs) separate from **educational content localization** (versioned records, long-form learning content, captions and safety context). Current UI locale is `en` or `bn`, with an explicit toggle, document `lang`, and Bengali font support. Preserve the existing catalogs and font behavior; audit actual Bengali rendering and replace malformed characters when encountered rather than copying encoded display strings into new content.

Recommended content records:

```ts
type Locale = 'en' | 'bn' | string
type LocalizedText = { locale: Locale; text: string; status: 'draft' | 'in_review' | 'approved' }
type ContentItem = {
  id: string; type: 'lesson' | 'concept' | 'article' | 'case' | 'quiz'
  slug: string; subjectIds: string[]; objectiveIds: string[]
  versions: ContentVersion[]; sourceIds: string[]; relationIds: string[]
  status: 'draft' | 'scientific_review' | 'translation_review' | 'approved' | 'published' | 'retired'
}
```

Each version should include title/body, locale, audience/level, author, translator where applicable, review status, revision, publication timestamp and accessibility metadata (image alt text, captions, transcripts). Keep shared language-neutral facts (source IDs, units, formula identifiers and claim IDs) normalized. Never silently machine-translate safety-critical content. Bengali scientific vocabulary may use standard Latin terms where that improves clarity, with a reviewed Bengali explanation; preserve numeric meaning, decimal conventions and units. Missing translations should be explicitly marked and may fall back to an approved source-language version with an understandable notice, never a blank or corrupted string.

## 7. Scientific citations and review workflow

Maintain a source registry with stable identifier, full bibliographic citation, DOI/PMID/ISBN or official URL where available, source type, issuing organization, publication/update date, access date, relevant population/jurisdiction, and any declared conflicts. Link exact claims to sources; a bibliography at page end is not enough where claims could be mistaken for universal advice. Do not invent references or rely on scraped abstracts as a substitute for source review.

Suggested workflow:

1. Author creates a draft with learning objectives, scope, locale, claim-level citations, limitations and related graph nodes.
2. Editorial checks structure, readability, attribution, media rights, accessibility and translation readiness.
3. A qualified subject-matter reviewer checks factual accuracy, source quality/currentness, population context, uncertainty and safety framing; reviewer records decision, date and notes.
4. A separate qualified translator or bilingual reviewer checks meaning, scientific terms, units, cultural/contextual clarity and safety equivalence for each locale.
5. Publisher approves and publishes an immutable version; corrections create a new revision. Previously published versions and review decisions remain auditable.
6. Scheduled or event-triggered review flags time-sensitive material (guidelines, recommendations, rapidly changing digital-health standards); superseded sources trigger re-review.

Statuses should distinguish editorial review, scientific review, translation review and publication. A reviewer cannot approve their own high-impact scientific claim where staffing allows separation. Include evidence grade/confidence only with a documented rubric; label consensus, uncertainty and teaching simplifications in plain language. Add a visible education-only boundary and route learners to appropriate professional care in safety-critical contexts.

## 8. Calculators and interactive simulations

### Calculators

Treat every calculator as a versioned, reviewed domain package: pure formula implementation, typed input/output schema, units, valid ranges, missing-value rules, rounding, supported populations, intended use, excluded use, limitations, worked test vectors and authoritative references. UI components collect/validate input and explain the result; they must not duplicate formula logic. Use dimensional analysis and conversions explicitly. Reject invalid values; do not convert missing values to zero. Display the formula/assumptions and a non-diagnostic interpretation. Use independent clinical/domain review and independently calculated examples before release. Version formula and test vectors so changes can be traced. No individual treatment recommendations or unvalidated personalization.

### Simulations

Keep teaching simulations distinct from clinical prediction. Model inputs, state variables, equations, update step, parameter provenance, boundary conditions and limitations must be explicit and reviewed. Separate deterministic model code from controls/visualization; validate behavior against reference cases and invariants. Show when values are illustrative, prevent unsafe extrapolation, support keyboard and screen-reader access to controls and equivalent textual descriptions of visual state, and offer a reset. Store model version and scenario metadata with sharable results; do not collect identifiable health information by default.

### Anatomy models and nutrient interactions

Serve licensed, optimized assets with attribution and accessible labels. Provide a 2D/list or text alternative to 3D-only understanding. Nutrient-interaction content should distinguish mechanism, evidence strength, dose/context and population; do not imply an interaction is clinically meaningful without evidence. Link every model annotation/interaction statement to reviewed claims.

## 9. Cloudflare-compatible service and data plan

Keep the Vite frontend deployable as static assets on Cloudflare Pages or Workers Static Assets. A Cloudflare Worker API can provide same-origin typed endpoints; use modules/bindings injected by deployment configuration rather than hard-coding credentials. This is a proposed fit, not an implemented or chosen deployment.

| Need | Candidate | Use and boundary |
| --- | --- | --- |
| Relational records | **D1 (SQLite)** | Content, localized versions, sources, claims, graph edges, review records, access plans, users/roles, audit events and minimal learner state. Use migrations, foreign keys, uniqueness constraints and transactions where supported. |
| Media | **R2** | Versioned diagrams, licensed anatomy assets, audio and other uploaded media. Keep metadata/rights in D1; use scoped upload/download flows and never expose private draft objects publicly. |
| Cache/search | **Workers Cache API** initially; **Vectorize** only if a justified semantic-search use case emerges | Cache public published responses with revision-aware invalidation. Begin with indexed text search; do not add vector infrastructure before content scale and evaluation exist. |
| Abuse/rate controls | Worker limits and, if needed, **Durable Objects** | Use for shared rate limiting or coordination where required; avoid introducing stateful services prematurely. |
| Secrets/config | Worker secrets and environment bindings | Separate local, staging and production configuration. Never commit secrets or place them in Vite-exposed `VITE_*` variables. |
| Identity | Evaluate an OIDC-compatible identity provider before launch | Authentication alone is not authorization. Validate issuer, audience and token lifetime server-side; map identities to explicit roles and enforce role/record scope in every endpoint. |

Use a versioned REST/JSON API initially with runtime request/response validation at trust boundaries and generated/shared API types only if build coupling stays clear. Suggested areas: `/content`, `/subjects`, `/graph`, `/sources`, `/reviews`, `/calculators`, `/simulations`, `/me/progress`, `/admin/*`. Define pagination, filtering, error codes, idempotency for mutations and API version policy. Do not expose draft/admin fields through public endpoints. Keep API access behind service modules rather than putting raw fetch calls in page components.

Suggested core tables: `content_item`, `content_version`, `locale_version`, `subject`, `objective`, `content_subject`, `claim`, `source`, `claim_source`, `graph_edge`, `review_record`, `calculator_definition`, `calculator_version`, `simulation_definition`, `media_asset`, `user`, `role_assignment`, `feature_entitlement`, `progress_event`, `audit_event`. Keep locale-specific content and review records versioned; store JSON only for genuinely flexible typed payloads, not as a substitute for relational constraints. Establish retention, backup/export and deletion processes before storing learner data.

## 10. Free and Premium feature controls

Do not couple product access to UI conditionals alone. Define a central feature catalog with stable feature IDs, plan availability, required role, locale/region constraints, launch status and user-facing explanation. The client may use an entitlement response to render navigation and explain unavailable features; the API must enforce the entitlement for every protected read or write. Deny by default on missing, stale or malformed entitlement data, while keeping public free material accessible.

Possible future distinction (requires product research and approval):

- **Free:** public reviewed knowledge, foundational study paths, basic lessons and a carefully selected set of validated calculators/simulations.
- **Premium:** optional advanced pathways, expanded model/tool access, downloadable study materials or enhanced learner organization. Premium access must not imply clinical authority or conceal essential safety information.

Keep pricing, billing and subscription processing out of the current prototype. Use an entitlement abstraction independent of a future payment provider. Never represent demo admin metrics or sample learner progress as actual usage, paid access or account data.

## 11. Security, privacy and governance requirements

- Threat-model public content, admin authoring, media upload, learner records and calculator inputs before backend launch.
- Enforce authentication, role- and resource-level authorization, and least privilege in the Worker/API. Test direct endpoint access, not only hidden UI routes.
- Validate and normalize all input server-side; encode output; prevent stored/reflected XSS and unsafe markdown/HTML; constrain file types, size, metadata and access for uploads.
- Use secure session/token handling, CSRF protection when cookie sessions are used, appropriate CORS, security headers, rate limits, abuse monitoring and dependency update review.
- Minimize personal and health-related data. Avoid collecting sensitive health details for study tools unless a reviewed purpose, consent, retention, access and deletion policy exists. Do not send such data to analytics or logs.
- Encrypt transport and provider-managed stored data; keep secrets out of source code/client bundles; separate environments and permissions; rotate credentials and audit access.
- Maintain immutable admin audit events for publication, review, permission and content changes. Avoid logging credentials or unnecessary personal data.
- Document privacy notice, consent, data export/deletion, retention, incident response and applicable jurisdictional obligations before accounts or analytics launch. Obtain legal/privacy review for target regions; this architecture is not a compliance certification.
- Do not claim HIPAA/GDPR or other compliance based only on hosting choices. Scope depends on actual data, organization, contracts and operational controls.

## 12. Accessibility, responsive design and quality

Preserve the current responsive layout, student module cards, theme toggle, mobile drawers, search and bilingual controls. Design for 320 CSS pixel widths, zoom/reflow, long Bengali labels, visible focus, semantic landmarks, keyboard access, reduced motion and adequate contrast in both themes. Bengali typography must retain correct shaping, line height and mixed-script readability. Every simulation must expose a nonvisual equivalent; every chart needs a summary/table when conveying data.

As functionality grows, require strict TypeScript, lint, unit tests for domain formulas/graph logic, component tests for routes and locale/accessibility interactions, and end-to-end coverage for critical public → student and authorized admin workflows. Test EN/BN, keyboard, mobile layout, dark/light, permission boundaries, error/empty/loading states and scientific examples. Keep scientific content fixtures traceable to real reviewed references; never use test fixtures as evidence for product claims.

## 13. Phased implementation roadmap

1. **Foundation and inventory:** reconcile the repository guide with actual code; establish domain vocabulary, route/content taxonomy, acceptance criteria and a baseline of current navigation/localization tests. No backend.
2. **Content and evidence contracts:** define TypeScript/Zod-equivalent-at-boundary schemas once an appropriate validation approach is selected, source/claim/review metadata model, locale status and a small reviewed sample lesson. Add schema and rendering tests.
3. **Public discovery and graph slice:** make one subject page and a small set of connected concepts/lessons discoverable from public and student routes, with citations, related links and EN/BN presentation.
4. **First interactive learning tool:** implement one low-risk, educational-only simulation or non-clinical calculator only after its formulas/model and review protocol are ready; include tests, limitations and accessible controls.
5. **Service and persistence:** select Cloudflare deployment/auth approach, create migrations and Worker API boundaries, publish content through a reviewed pipeline, and secure admin endpoints.
6. **Learner accounts and progress:** add minimal identity-backed preferences/bookmarks/progress with privacy, export, deletion and retention requirements; preserve public access.
7. **Admin workflow:** replace UI placeholders incrementally with draft/review/publish, asset governance, access and audit flows; add role-boundary tests.
8. **Entitlements and scale:** validate Free/Premium product boundaries, implement server-enforced entitlements without binding core content to billing, then evaluate analytics/search/cache growth against real need.

Every phase should ship as a small, reviewable change and preserve existing routes and interactions. Re-evaluate data, scientific and privacy risk before expanding scope.

## 14. First small implementation milestone

**Recommended first milestone: establish a versioned evidence-backed content contract and publish one small bilingual concept/lesson slice.** Add one content schema/fixture for a foundational concept (for example, cell membrane structure), with English and Bengali title/body, learning objective, stable source records, claim-to-source links, locale review state, scientific review metadata, and related concept IDs. Render it on an existing learning route while retaining the module preview and dashboard links. Add focused tests for schema validity, missing/unapproved translation behavior, citation display and route preservation.

This milestone is small and useful because it tests the product’s central content, evidence and bilingual model before adding accounts, a database, billing or high-risk clinical calculators. Keep it local/static at first; choose backend bindings only after this contract and editorial workflow are reviewed.

## 15. Decisions to resolve before backend implementation

- Initial launch regions, intended learner levels, and any clinical/professional audience.
- Editorial authority, reviewer qualifications, source freshness intervals and translation review capacity.
- Content licensing and rights for 3D models, illustrations and guideline excerpts.
- Identity provider, data controller/processor responsibilities, retention and target legal jurisdictions.
- Whether learner progress is necessary at launch and what minimum data supports it.
- Which first calculator/simulation has a safe, narrow educational scope and independently verifiable reference cases.
- Cloudflare Pages versus Workers Static Assets and the exact deployment, monitoring, backup and recovery design.
- Free/Premium boundaries, accessibility commitments and any future billing provider.

