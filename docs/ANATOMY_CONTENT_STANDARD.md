# Human Anatomy Curriculum Content Standard & Validation Protocol

**Document Version:** 1.0.0  
**Status:** Authoritative Standard  
**Subject:** Human Anatomy (`subject.anatomy`)  
**Target Platform:** Global Health Knowledge Hub  

---

## 1. Educational Mission & Scope

The Human Anatomy curriculum provides an accessible, rigorous, and bilingual (English and Bengali) academic foundation in human structure, functional morphology, regional topology, and clinical anatomy. It serves university-level students, healthcare professionals, life science researchers, and curious self-directed learners worldwide.

Every chapter is an evidence-backed learning module designed to meet rigorous standards of medical pedagogy and accessibility.

---

## 2. Three-Tier Content Depth Architecture

Every chapter must implement three distinct depth tiers:

### 2.1 Foundation Tier (`foundation`)
- **Target Audience:** First-time learners, allied health students, introductory biology learners.
- **Pedagogical Objective:** Conceptual clarity, non-jargon spatial understanding, intuitive orientation, and core functional relevance.
- **Requirements:**
  - Clear analogies and structural intuition without oversimplification.
  - Explanations of how shape relates to physiological role.
  - Step-by-step introduction to cardinal anatomical planes and terms.
  - Accessible SVG/diagrammatic pathways and foundational knowledge checkpoints.

### 2.2 Academic Tier (`academic`)
- **Target Audience:** Undergraduate medical, dental, nursing, physiotherapy, and biomedical science students.
- **Pedagogical Objective:** Comprehensive anatomical morphology, precise spatial boundaries, neurovascular pedicles, fascial compartments, and histological correlates.
- **Requirements:**
  - Standardized anatomical terminology complying with *Terminologia Anatomica* (TA2).
  - Complete descriptions of surfaces, borders, bony landmarks, muscular attachments (origin, insertion, innervation, action).
  - Vascular supply (arterial inflow, venous drainage) and lymphatic drainage basins.
  - Microscopic tissue organization (histological strata, cell types, basement membranes, extracellular matrix).
  - Relevant embryological origin and milestones.

### 2.3 Advanced & Research Tier (`advanced`)
- **Target Audience:** Senior medical students, surgical trainees, anatomists, and biomedical researchers.
- **Pedagogical Objective:** High-yield clinical correlations, surgical anatomy, danger zones, variations, modern cross-sectional imaging (CT/MRI/Ultrasound), and developmental anomalies.
- **Requirements:**
  - Surgical planes of dissection, fascial barriers to fluid/infection spread, and critical neurovascular danger zones.
  - Pathological correlates (e.g., compartment syndrome, herniation sites, entrapment neuropathies, ischemic vulnerability).
  - Normal population variations, asymptomatic structural divergences, and congenital anomalies.
  - Frontier research questions, biomechanical modeling, and evidence limits.

---

## 3. Mandatory Chapter Structure

Each anatomical chapter content module must contain the following substantive elements:

1. **Chapter Identification & Versioning:**
   - Stable curriculum ID (e.g., `anatomy.chapter.02`) and lesson ID (e.g., `topic.anatomy.cells-tissues`).
   - Semantic version (integer $\ge 1$), ISO update date (`YYYY-MM-DD`), and explicit review status.
2. **Bilingual Metadata:**
   - Title and summary in fluent English and Bengali.
   - Learning objectives ($\ge 3$) articulating measurable competencies in both languages.
3. **Structured Content Sections (All Tiers):**
   - Minimum section paragraph length: 120 characters per core section in both languages.
   - Substantive explanations covering:
     - Introduction & Overview
     - Structural Architecture & Topography
     - Regional Relations & Spatial Boundaries
     - Microscopic & Histological Architecture
     - Neurovascular Supply & Drainage
     - Functional Mechanics & Physiology
     - Embryology & Anatomical Variations
     - Clinical & Surgical Correlations
     - Key Terminology & Glossary
     - Chapter Summary & Takeaways
4. **Interactive & Visual Learning Elements:**
   - Schematic interactive SVG diagram with interactive region/substructure selection.
   - Stepped exploratory learning pathway with clear accessible captions and screen-reader support.
   - Interactive 2D/3D explorer data where relevant.
5. **Traceable Scientific References:**
   - Direct bibliographic attribution for every section.
   - Verified authors, peer-reviewed textbook/journal title, issuing institution, year, URL, and DOI where applicable.
6. **Formative Assessment:**
   - Peer-reviewed multiple-choice assessment questions.
   - Clinically grounded options with detailed rationales for correct and incorrect answers in both languages.

---

## 4. Reference Integrity & Scientific Citation Protocol

### 4.1 Authoritative Reference Sources
All anatomical assertions must be backed by reputable, peer-reviewed medical and biological authorities:
- *Gray's Anatomy: The Anatomical Basis of Clinical Practice* (Elsevier)
- *Moore's Clinically Oriented Anatomy* (Wolters Kluwer)
- *Netter's Atlas of Human Anatomy* (Elsevier)
- *Snell's Clinical Anatomy by Regions* (Wolters Kluwer)
- *OpenStax Anatomy and Physiology 2e* (Rice University / OpenStax)
- *Guyton and Hall Textbook of Medical Physiology* (Elsevier)
- *Junqueira's Basic Histology: Text and Atlas* (McGraw-Hill)
- *Langman's Medical Embryology* (Wolters Kluwer)
- *Terminologia Anatomica* (TA2, Federative International Programme on Anatomical Terminology / IFAA)
- Primary indexed literature via PubMed/NCBI Bookshelf and official medical societies.

### 4.2 Non-Negotiable Citation Rules
- **No Hallucinated Citations:** Fabricating DOIs, URLs, book chapters, or author lists is strictly prohibited.
- **Traceable Links:** URLs must resolve to real publisher catalog pages, OpenStax chapters, or NCBI Bookshelf items.
- **Evidence Classification:** All content is categorized as `established-textbook-synthesis`, `emerging-evidence`, or `uncertain`.
- **Review Status:** Content remains labeled `source-checked-expert-review-pending` until vetted and signed off by qualified clinical anatomists.

---

## 5. Bilingual Quality & Linguistic Standards (English & Bengali)

- **Parity of Rigor:** Bengali text must carry identical scientific weight and precision as English.
- **Terminology Standards:** International Latin and English terms (e.g., *Corpus callosum*, *Foramen magnum*, *Superior vena cava*) are presented in Bengali script alongside clear explanatory Bengali definitions (e.g., সুপিরিয়র ভেনা কাভা বা উর্ধ্ব মহাশিরা).
- **No Machine Artifacts:** Text must be grammatically flawless Bengali with natural sentence flow, correct conjuncts (যুক্তাক্ষর), and medical phrasing.
- **Directional Terms:**
  - Anterior / Ventral: অগ্রবর্তী / ভেন্ট্রাল
  - Posterior / Dorsal: পশ্চাৎবর্তী / ডরসাল
  - Superior / Cranial: উর্ধ্ববর্তী / ক্রেনিয়াল
  - Inferior / Caudal: নিম্নবর্তী / কডাল
  - Medial: মধ্যবর্তী / মিডিয়াল
  - Lateral: পার্শ্বীয় / ল্যাটারাল
  - Proximal: নিকটবর্তী / প্রক্সিমাল
  - Distal: দূরবর্তী / ডিস্টাল
  - Superficial: অগভীর / সুপারফিশিয়াল
  - Deep: গভীর / ডিপ

---

## 6. Accessibility & Technical Quality Gates

- **ARIA & Keyboard Navigation:** All interactive SVG regions, accordion panels, depth selectors, and quizzes must be operable by keyboard (`Tab`, `Space`, `Enter`, arrows) and announce state (`aria-pressed`, `aria-expanded`, `aria-selected`, `aria-live`).
- **Contrast & Responsive Reflow:** Text must adhere to WCAG AAA/AA contrast in both light and dark themes and reflow comfortably at 320px viewport width without clipping or overflowing.
- **Verification Gates:** Before publishing or checking off any batch:
  1. `npm run typecheck` (strict TypeScript validation with zero errors)
  2. `npm run lint` (ESLint with zero warnings)
  3. `npm run test` (Vitest test suite passing 100%)
  4. `npm run build` (Production Vite bundle compilation)
