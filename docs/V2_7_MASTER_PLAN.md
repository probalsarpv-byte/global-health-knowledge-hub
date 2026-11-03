# Global Health Knowledge Hub V2.7 — Master Plan
## Global Learning Experience, True 3D & Scientific Quality Upgrade

**Version:** 2.7.0  
**Repository:** `https://github.com/probalsarpv-byte/global-health-knowledge-hub`  
**Working Directory:** `d:\My book\Review\learning-platform\global-health-knowledge-hub`  
**Git Branch:** `main`  
**Status:** In Execution  

---

## 1. Executive Mission & Strategic Scope

The Global Health Knowledge Hub V2.7 upgrade elevates the platform into an authoritative, world-class biomedical and nutritional learning environment. This is a complete implementation mission spanning:
1. **Depth-Aware Learning Navigation**: Multi-tier dynamic Table of Contents (Foundation, Academic, Advanced/Research) synchronized with content, active-section tracking, smooth reduced-motion navigation, and cross-academy uniformity.
2. **True 3D Scientific Visualization Architecture**: Honest technical classification (True 3D vs. Projected 3D SVG vs. Interactive 2D vs. Static Media), implementation of genuine WebGL/Three.js 3D models with 2D fallbacks, interactive controls, and performance budgets.
3. **Contextual Visualization & Content Linking**: Bi-directional integration between academic prose, transporter/organelle mechanisms, and visualization explorers across learning depths.
4. **Scientific Accuracy & Bilingual Editorial Excellence**: Rigorous audit of all 27 Nutrition chapters, factual corrections, evidence stratification, and Bengali language quality (`বাংলা মানদণ্ড`).
5. **Unified Vancouver-Style Numbered Citations**: Uniform inline bracket notation (`[1]`, `[2]`, `[1, 3]`), smooth bi-directional jumping to end-of-chapter references, and return-to-citation controls without raw URLs or inline bibliographic clutter.
6. **Cross-Academy Knowledge Graph**: Canonical typed concept registry linking Anatomy, Metabolism, and Nutrition, with support for future Physiology, Biochemistry, and Practical Dietetics.
7. **Nutrition Curriculum Gap Analysis**: Evaluation of 15 candidate university-level nutrition domains against the existing 27 chapters.
8. **Practical Diet Planning & Therapeutic Dietetics Architecture**: Clear separation of Nutrition Science theory from future practical clinical dietetics workflows, case studies, and calculation engines.

---

## 2. Architecture & Technical Strategy

### 2.1 Depth-Aware Table of Contents (Phase A)
- **Visual & Structural Hierarchy**:
  1. Chapter title & review metadata
  2. Learning-depth selector (Foundation / Academic / Advanced)
  3. Dynamic Table of Contents (regenerated live per depth with active section tracking)
  4. Reading progress indicator
  5. Learning objectives & prerequisites
  6. Contextual interactive visualization explorers
  7. Full chapter academic sections with Vancouver citations
  8. Terminology, worked examples & interactive checkpoints
  9. Assessment quizzes
  10. End-of-Chapter References with return-to-citation links
- **Technical Components**:
  - `LessonRenderer.tsx`: Core depth coordinator, scroll observer, and accessible section jump provider.
  - Active section observer using `IntersectionObserver` with smooth-scroll, reduced-motion detection, and header offset (`scroll-margin-top: 75px`).
  - Session persistence of selected depth (`sessionStorage.getItem('ghkh_learning_depth')`).

### 2.2 Scientific Visualization System (Phases B & C)
- **Classification Categories**:
  - `Category A — True 3D`: Genuine Three.js / WebGL scenes with 3D polygon geometry, lighting, orbit camera controls, and mesh picking.
  - `Category B — Projected 3D`: Mathematical 3D-to-2D perspective projections rendered into vector `<svg>` paths.
  - `Category C — Interactive 2D`: Pathway diagrams, cellular schematics, and interactive flowchart explorers.
  - `Category D — Static Scientific Media`: Authentic medical infographics, microphotographs, and anatomical reference plates.
- **True 3D Integration**:
  - Lazy-loaded Three.js canvas component for key physiological mechanisms (e.g. Intestinal Villus & Enterocyte Epithelial Architecture with SGLT1/GLUT2 transporters).
  - WebGL capability detection with graceful fallback to Category B projected SVG or Category C schematic.
  - Touch-friendly orbit controls, structure raycasting, labels, step-by-step animations, and pause/play controls.

### 2.3 Scientific Integrity & Editorial Quality (Phase D)
- Strict compliance with `docs/ACADEMIC_WRITING_AND_CITATION_STANDARD.md`.
- No unsubstantiated claims; distinguish established textbook consensus from emerging clinical trials.
- Bengali translations maintain complete parity in scientific scope and depth with natural phrasing and Latin terminology pairing.

### 2.4 Vancouver Numbered Citation System (Phase E)
- All inline citations render as compact `[n]` or `[n, m]`.
- Click on citation jumps to target `#ref-${chapterId}-${number}` with focus and highlight.
- Back link smoothly returns learner to exact inline anchor position.

### 2.5 Cross-Academy Knowledge Graph (Phase F)
- Universal typed concept registry (`src/content/concepts/conceptRegistry.ts`).
- Semantic bidirectional relationships (`metabolic-substrate`, `anatomical-site`, `clinical-counterpart`, `dietary-regulation`).
- Contextual concept navigation cards embedded in chapters pointing only to verified published routes.

### 2.6 Curriculum Gaps & Practical Dietetics (Phases G & H)
- Detailed gap matrix analyzing 15 university nutrition topics across 27 existing chapters.
- Architectural framework for the future *Practical Diet Planning & Therapeutic Dietetics* book with theory-to-practice mappings.

---

## 3. Execution Batches

1. **Batch 1: Learning Navigation and Citations**
   - Dynamic TOC validation & depth selector repositioning.
   - Active section highlighting & smooth reduced-motion navigation.
   - Selected depth session persistence.
   - Automated tests in `src/features/student/depthAwareNavigation.test.tsx`.
   - Git commit & push.

2. **Batch 2: Visualization Architecture & True 3D Implementation**
   - Comprehensive audit of all existing visuals (`docs/V2_7_VISUALIZATION_AUDIT.md`).
   - True 3D viewer component (`True3DViewer.tsx`) with Three.js WebGL canvas.
   - Intestinal epithelial absorption model with enterocytes, microvilli, SGLT1, GLUT2, capillary network, and 2D SVG fallback.
   - Contextual linking between 3D structures and chapter sections.
   - Automated tests, git commit & push.

3. **Batch 3: Scientific Content Audit & Editorial QA**
   - Scientific QA report across Nutrition chapters (`docs/V2_7_SCIENTIFIC_QA.md`).
   - High-priority factual corrections and evidence calibrations.
   - Bengali terminology alignment and editorial refinements.
   - Git commit & push.

4. **Batch 4: Cross-Academy Knowledge Graph**
   - Typed concept registry implementation (`conceptRegistry.ts`).
   - Verified cross-academy links and UI component (`CrossAcademyConceptCard.tsx`).
   - Automated tests, git commit & push.

5. **Batch 5: Future Curriculum & Dietetics Architecture**
   - Nutrition curriculum gap matrix (`docs/V2_7_NUTRITION_GAP_MATRIX.md`).
   - Practical Diet Planning & Therapeutic Dietetics architecture (`docs/V2_7_DIETETICS_ARCHITECTURE.md`).
   - Final end-to-end verification and documentation wrap-up.

