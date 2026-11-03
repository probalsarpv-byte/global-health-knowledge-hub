# Global Health Knowledge Hub V2.7 — Progress Tracker

**Version:** 2.7.0  
**Current Status:** In Progress  
**Active Branch:** `main`  
**Last Updated:** November 2026  

---

## Progress Overview

| Phase / Batch | Description | Status | Verification / Tests | Commit SHA |
| :--- | :--- | :--- | :--- | :--- |
| **Phase A / Batch 1** | Depth-Aware TOC & Navigation | Completed | 8 unit tests passing | `c716e9f` |
| **Phase B / Batch 2** | Visualization Audit & True 3D Viewer | Completed | 5 unit tests passing | In Batch 2 commit |
| **Phase C / Batch 2** | Contextual Visualization Integration | Completed | 5 unit tests passing | In Batch 2 commit |
| **Phase D / Batch 3** | Scientific Accuracy & Editorial QA | Completed | Full 27-chapter audit doc | In Batch 3 commit |
| **Phase E / Batch 1** | Unified Numbered Citation System | Completed | 15 unit tests passing | `c716e9f` |
| **Phase F / Batch 4** | Cross-Academy Knowledge Graph | In Progress | Pending | TBD |
| **Phase G / Batch 5** | Nutrition Curriculum Gap Analysis | Not started | Pending | TBD |
| **Phase H / Batch 5** | Practical Dietetics Architecture | Not started | Pending | TBD |

---

## Detailed Task Breakdown

### Batch 1: Learning Navigation and Citations
- [x] Baseline test and build verification (139 tests passing, clean build).
- [x] Depth-Aware TOC: Reposition depth selector before TOC in DOM hierarchy (`LessonRenderer.tsx`).
- [x] Synchronize TOC with selected depth (Foundation, Academic, Advanced) with dynamic entries.
- [x] Implement active-section tracking via `IntersectionObserver` with live TOC highlighting.
- [x] Add smooth-scroll with `prefers-reduced-motion` detection and header offset (`scroll-margin-top`).
- [x] Add session persistence for selected learning depth (`sessionStorage`).
- [x] Verify Vancouver numbered citations navigation (`[1]`, `[2]`, `[1, 3]`) and return-to-citation controls.
- [x] Write dedicated automated unit tests (`depthAwareNavigation.test.tsx`).
- [x] Run full lint, typecheck, test suite, and build.
- [x] Commit and push to origin/main (`c716e9f`).

### Batch 2: Visualization Architecture & True 3D Viewer
- [x] Complete comprehensive visual audit across all existing visual components.
- [x] Author `docs/V2_7_VISUALIZATION_AUDIT.md` classifying all visuals into Categories A, B, C, D.
- [x] Implement True 3D WebGL viewer (`True3DViewer.tsx`) using Three.js with orbit controls, structure raycasting, labels, and accessible 2D fallback.
- [x] Implement real anatomical/physiological model: Intestinal Epithelial Absorption & Enterocyte architecture with SGLT1/GLUT2/ATPase transporters.
- [x] Connect 3D structure selections directly to chapter sections and learning depth explanations.
- [x] Honest categorization in `InteractiveNutrientDiagram.tsx` view mode tabs (True 3D WebGL Cat A, Projected 3D SVG Cat B, Interactive 2D Cat C, Reference Media Cat D).
- [x] Write automated tests for 3D viewer and fallback behavior (`true3DViewer.test.tsx` 5/5 passing).
- [x] Run full lint, typecheck, test suite, and build.
- [x] Commit and push to origin/main (`6428b7b`).

### Batch 3: Scientific Content Audit & Editorial QA
- [x] Perform comprehensive review of all 27 Nutrition chapters.
- [x] Author `docs/V2_7_SCIENTIFIC_QA.md` with structured claims, severity, corrected explanations, and references.
- [x] In-depth analysis of 6 critical focus topics (insulin resistance, gut barrier endotoxemia, leucine trigger, precision genomics, cancer cachexia, CKD protein kinetics).
- [x] Ensure full bilingual parity in Bengali and English text per Academic Citation & Writing Standard.
- [x] Run full lint, typecheck, test suite, and build.
- [x] Commit and push to origin/main.

### Batch 4: Cross-Academy Knowledge Graph
- [ ] Design and implement typed concept registry (`src/content/concepts/conceptRegistry.ts`).
- [ ] Map core concepts across Anatomy, Metabolism, and Nutrition with verified routes.
- [ ] Author `docs/V2_7_KNOWLEDGE_GRAPH.md`.
- [ ] Implement UI component (`CrossAcademyConceptCard.tsx`) for contextual learning transitions.
- [ ] Write unit tests verifying concept link integrity and route resolution.
- [ ] Run full lint, typecheck, test suite, and build.
- [ ] Commit and push to origin/main.

### Batch 5: Future Curriculum & Dietetics Architecture
- [ ] Complete gap analysis of 15 candidate nutrition domains against 27 existing chapters.
- [ ] Author `docs/V2_7_NUTRITION_GAP_MATRIX.md` with action classifications (A–E).
- [ ] Architect the future *Practical Diet Planning & Therapeutic Dietetics* book in `docs/V2_7_DIETETICS_ARCHITECTURE.md`.
- [ ] Map theoretical nutrition topics to practical diet planning counterparts.
- [ ] Update `docs/V2_7_RESUME.md` with final delivery report.
- [ ] Run full verification suite and push final commits.

