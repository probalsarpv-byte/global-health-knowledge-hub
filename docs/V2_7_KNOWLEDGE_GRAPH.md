# Global Health Knowledge Hub V2.7 — Cross-Academy Knowledge Graph
## Interdisciplinary Biological Bridges: Anatomy · Metabolism · Nutrition

**Version:** 2.7.0  
**Status:** Implemented & Verified  
**Date:** November 2026  
**Module Directory:** `src/content/concepts/` & `src/components/concepts/`  
**Test Suite:** `src/content/concepts/conceptRegistry.test.ts` (8 passing tests)

---

## 1. Executive Summary & Pedagogical Architecture

Traditional medical and health sciences education often isolates related disciplines into rigid departmental silos:
- **Anatomy** teaches macroscopic structures, organs, tissue boundaries, and microvascular histology in isolation.
- **Metabolism / Biochemistry** maps enzymatic pathways, cofactors, and thermodynamic energetics on abstract intracellular charts.
- **Human Nutrition & Dietetics** focuses on whole-body nutrient intakes, clinical deficiencies, dietary guidelines, and disease prevention.

When learners study these subjects independently, cognitive fragmentation occurs. For example, a student memorizes the macroscopic folds of the small intestine in Anatomy, learns the sodium-glucose cotransporter (SGLT1) and hexokinase reactions in Biochemistry, and discusses carbohydrate glycemic index and glycemic load in Nutrition, without synthesizing that they are investigating the **exact same physiological continuum**.

The **V2.7 Cross-Academy Knowledge Graph** provides a typed, bidirectional semantic bridge connecting lessons across **Anatomy**, **Metabolism**, and **Nutrition**. Each concept anchors a core biological process and provides direct, verified navigation to sister chapters across academies.

```
       ┌────────────────────────────────────────────────────────┐
       │                   ANATOMY ACADEMY                      │
       │       Gross organ histology, tissue boundaries,        │
       │            vascular & nerve architecture               │
       └───────────────────────────┬────────────────────────────┘
                                   │  Anatomical Site /
                                   │  Tissue Substrate
                                   ▼
 ┌────────────────────────────────────────────────────────────────────┐
 │                  CROSS-ACADEMY CONCEPT REGISTRY                    │
 │               `src/content/concepts/conceptRegistry.ts`            │
 │  • Biological Scale (Molecular · Cellular · Tissue · Organ · Whole)│
 │  • Clinical Relevance & Pathophysiological Bridge                  │
 │  • Strict Bilingual Parity (English · বাংলা)                      │
 └─────────────────┬────────────────────────────────┬─────────────────┘
                   │                                │
                   │ Biochemical Pathway /          │ Dietary Regulation /
                   │ Substrate Flux                 │ Clinical MNT
                   ▼                                ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────────────┐
│          METABOLISM ACADEMY          │  │          NUTRITION ACADEMY           │
│   Intracellular enzyme kinetics,     │  │  Macronutrient & micronutrient flux, │
│   cofactors, ATP bioenergetics       │  │  evidence-based MNT, clinical diets  │
└──────────────────────────────────────┘  └──────────────────────────────────────┘
```

---

## 2. Graph Ontology & Typed Data Contracts

The knowledge graph is enforced through strict TypeScript types in `src/content/concepts/conceptRegistry.ts`:

### 2.1 Supported Academies
```typescript
export type AcademyId = 'anatomy' | 'metabolism' | 'nutrition'
// Extensible to 'physiology' | 'biochemistry' | 'dietetics' in future phases
```

### 2.2 Relational Semantics (`ConceptRelationship`)
Each link between a concept and a chapter explicitly characterizes *how* the two interact:
1. `anatomical-site`: Locates the microscopic, vascular, or organ-system structural host.
2. `biochemical-pathway`: Maps intracellular enzymatic sequences, rate-limiting checkpoints, and phosphorylation cascades.
3. `dietary-regulation`: Describes nutrient intake levels, bioavailability, digestion kinetics, and dietary patterns.
4. `clinical-counterpart`: Connects physiological theory with clinical Medical Nutrition Therapy (MNT) and pharmacology.
5. `metabolic-substrate`: Traces the molecule as a physical fuel or precursor across organs.
6. `transport-mechanism`: Pinpoints channel kinetics, cotransporters, and membrane shuttles.
7. `pathophysiology`: Illuminates the breakdown of normal homeostasis into clinical disease states.

### 2.3 Biological Scales (`BiologicalScale`)
Concepts are categorized by their hierarchical organizational layer:
- `molecular`: Angstrom-to-nanometer scale (enzymes, cofactors, transporters, DNA/RNA).
- `cellular`: Organelles, membrane bilayers, signal transduction vesicles.
- `tissue`: Microvascular beds, basement membranes, muscle fascicles, nephron loops.
- `organ-system`: Multi-organ endocrine, neural, and portal axes.
- `whole-organism`: Systemic fuel homeostasis, cachexia, whole-body energy balance.

---

## 3. Verified 10 Core Cross-Academy Concepts

All 10 concepts link verified, published routes across the three active academies. Every target slug has been tested against the live curriculum registries (`anatomyCurriculum`, `metabolismCurriculum`, `nutritionCurriculum`).

| Concept ID | Concept Title (EN / BN) | Biological Scale | Linked Academies & Verified Slugs |
|:---|:---|:---:|:---|
| `enterocyte-nutrient-transport` | Enterocyte Microvilli & Transporter Axis<br>*(এন্টারোসাইট মাইক্রোভিলি ও পরিবহনকারী অক্ষ)* | Cellular | • Anatomy: `digestive`<br>• Metabolism: `glycolysis-pyruvate`<br>• Nutrition: `macronutrient-digestion-absorption` |
| `insulin-resistance-lipotoxicity` | Insulin Signaling, Lipotoxicity & Fuel Dysregulation<br>*(ইনসুলিন সংকেত, লিপোটক্সিসিটি ও জ্বালানি নিয়ন্ত্রণহীনতা)* | Organ System | • Anatomy: `endocrine-lymphatic`<br>• Metabolism: `endocrine-fuel-regulation`<br>• Nutrition: `nutrition-obesity-t2d-mnt` |
| `urea-cycle-nitrogen-balance` | Hepatorenal Nitrogen Clearance & Protein Quality<br>*(হেপাটোরেনাল নাইট্রোজেন নিষ্কাশন ও প্রোটিন মান)* | Organ System | • Anatomy: `urinary`<br>• Metabolism: `amino-acid-catabolism-urea`<br>• Nutrition: `protein-quality-diaas-nitrogen-balance` |
| `lipoprotein-atherogenesis` | ApoB Flux, Endothelial Trapping & Atheroma<br>*(অ্যাপোলাইপোপ্রোটিন-বি প্রবাহ ও অ্যাথেরোমা গঠন)* | Tissue | • Anatomy: `cardiovascular`<br>• Metabolism: `lipoproteins-lipid-flux`<br>• Nutrition: `dietary-lipids-fatty-acids-pufa` |
| `nephron-hyperfiltration-ckd` | Glomerular Hemodynamics & Renal Nutrition<br>*(গ্লোমেরুলার রক্তগতিবিদ্যা ও রেনাল পুষ্টি)* | Cellular | • Anatomy: `urinary`<br>• Metabolism: `amino-acid-catabolism-urea`<br>• Nutrition: `renal-nutrition-ckd-mnt` |
| `satiety-neuroendocrine-axis` | Hypothalamic Arcuate Nucleus & Satiety Circuit<br>*(হাইপোথ্যালামিক আর্কুয়েট নিউক্লিয়াস ও তৃপ্তি অক্ষ)* | Organ System | • Anatomy: `brain`<br>• Metabolism: `fed-fasted-starvation-states`<br>• Nutrition: `satiety-neuroendocrinology-appetite` |
| `warburg-cancer-cachexia` | Tumor Aerobic Glycolysis & Sarcopenia<br>*(টিউমারের অ্যারোবিক গ্লাইকোলাইসিস ও সারকোপেনিয়া)* | Whole Body | • Anatomy: `muscles`<br>• Metabolism: `cancer-metabolic-reprogramming`<br>• Nutrition: `oncology-cancer-nutrition-cachexia` |
| `hepatic-steatosis-portal-axis` | Gut-Liver Axis, Endotoxemia & Steatohepatitis<br>*(অন্ত্র-যকৃত অক্ষ, এন্ডোটক্সেমিয়া ও ফ্যাটি লিভার)* | Organ System | • Anatomy: `digestive`<br>• Metabolism: `lipogenesis-triglycerides`<br>• Nutrition: `gi-liver-nutrition-masld-ibd-fodmap` |
| `bone-mineral-matrix-calcium-phosphate` | Osteoid Remodeling & Hydroxyapatite<br>*(অস্থি পুনর্গঠন ও হাইড্রোক্সিঅ্যাপাটাইট খনিজায়ন)* | Tissue | • Anatomy: `skeletal-axial`<br>• Metabolism: `micronutrients-cofactors`<br>• Nutrition: `macrominerals-bone-calcium-magnesium` |
| `iron-flux-erythropoiesis` | Hepcidin Ferroportin Axis & Hematopoiesis<br>*(হেপসিডিন-ফেরোপোর্টিন অক্ষ ও রক্তকণিকা উৎপাদন)* | Cellular | • Anatomy: `cardiovascular`<br>• Metabolism: `heme-bilirubin-metabolism`<br>• Nutrition: `iron-biology-hepcidin-anemia` |

---

## 4. User Experience & Component Design

The concept integration is surfaced in `LessonRenderer.tsx` via `CrossAcademyConceptCard.tsx`:

1. **Strategic Placement**:
   - Rendered following the Knowledge Assessment and immediately before the End-of-Chapter References.
   - At this point in the learning journey, the student has mastered the lesson-specific mechanisms and is prepared to integrate that knowledge with other disciplines.

2. **Visual Hierarchy & Distinct Academy Theming**:
   - Distinct color palettes for immediate subject recognition:
     - **Anatomy**: Terra cotta / Rust (`#D95D39`, pale `#FDF2E9`)
     - **Metabolism**: Amber / Orange (`#D97706`, pale `#FFFBEB`)
     - **Nutrition**: Emerald / Mint (`#059669`, pale `#ECFDF5`)
   - Relationship labels indicate the scientific connection (`Anatomical Localization`, `Biochemical Pathway`, `Clinical Counterpart`).
   - "Current Reading Position" marker informs the user where they are in the graph, with distinct "Explore Sister Chapter" action buttons pointing directly to sibling chapters.

3. **Accessibility & Responsive Standards**:
   - Fully semantic `<article>`, `<header>`, and `<section>` landmark elements.
   - Keyboard accessible links with visible focus outlines.
   - Screen-reader friendly SVG icons with `aria-hidden="true"` and descriptive textual titles.
   - CSS grid layout wrapping down to 320px mobile viewports without horizontal scrolling.

---

## 5. Automated Verification & Quality Assurance

The registry is verified by Vitest in `src/content/concepts/conceptRegistry.test.ts`:
- **Uniqueness**: Asserts all concept IDs are unique.
- **Bilingual Parity**: Verifies 100% presence of non-empty English (`en`) and Bengali (`bn`) strings for all names, summaries, clinical notes, and chapter titles.
- **Interdisciplinary Density**: Asserts each concept connects $\ge 2$ distinct academies.
- **Route & Slug Existence**: Validates that every link slug matches an authentic, existing chapter in the published curriculum registries (`anatomyCurriculum.chapters`, `metabolismCurriculum.chapters`, `nutritionCurriculum.chapters`).
- **Query Precision**: Validates `getConceptsForChapter`, `getConceptById`, and `getRelatedAcademyLinks`.

---

## 6. Guidelines for Future Cross-Academy Additions

When expanding the Knowledge Graph for new chapters or future academies:
1. **Rule of Authenticity**: Never add a link to an unwritten or placeholder chapter slug. The slug must be present and verified in the curriculum files.
2. **Bilingual Completeness**: Both English and Bengali explanations must be authored simultaneously, pairing Latin medical terms with Bengali explanations.
3. **Clinical Grounding**: Every concept must include a verified `clinicalRelevance` note explaining why this multi-disciplinary bridge matters for patient care, diagnostic reasoning, or dietary prescription.

