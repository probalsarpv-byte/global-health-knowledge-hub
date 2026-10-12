# Human Metabolism Academy — Resumption & Handover Protocol

**Last Updated:** 2026-10-12  
**Current Status:** Batch 1 Complete & Verified (Chapters 01–04)  
**Next Active Batch:** Batch 2: Lipid & Lipoprotein Metabolism (Chapters 05–08)  
**Current Branch:** `main`  
**Repository:** `d:\My book\Review\learning-platform\global-health-knowledge-hub`  

---

## 1. Verified Completed Work (Batch 1: Metabolic Foundations & Bioenergetics)

All 4 initial chapters are fully authored, schema-validated, bilingual (>= 120 characters per section paragraph in EN and BN), and integrated with interactive pathway exploration:
1. `Chapter 01` — Introduction to Human Metabolism & Bioenergetics (`metabolism.chapter.01` / `intro-bioenergetics`)
   - File: `src/content/chapters/metabolism01Bioenergetics.ts`
   - Interactive Diagram: High-Energy Phosphate Transfer & Redox Carriers Landscape (6 nodes, free energy ladder, Atkinson charge telemetry).
2. `Chapter 02` — Glycolysis & Pyruvate Oxidation (`metabolism.chapter.02` / `glycolysis-pyruvate`)
   - File: `src/content/chapters/metabolism02Glycolysis.ts`
   - Interactive Diagram: Embden-Meyerhof-Parnas 10-Step Pathway & PDC Multienzyme Hub (8 nodes, regulatory points, PDC cofactors).
3. `Chapter 03` — Citric Acid Cycle & Oxidative Phosphorylation (`metabolism.chapter.03` / `tca-oxphos`)
   - File: `src/content/chapters/metabolism03TcaOxphos.ts`
   - Interactive Diagram: Citric Acid Cycle & Electron Transport Chain Coupling (8 nodes, proton pumping telemetry, FoF1-ATP synthase).
4. `Chapter 04` — Glycogen Metabolism & Gluconeogenesis (`metabolism.chapter.04` / `glycogen-gluconeogenesis`)
   - File: `src/content/chapters/metabolism04GlycogenGluconeogenesis.ts`
   - Interactive Diagram: Hepatic Glycogen Cascade & Gluconeogenic Bypass Valves (7 nodes, PKA/PP1 reciprocal switch, Cori cycle).

All 39 unit/feature tests pass (`npm test`), strict TypeScript checks succeed (`npm run typecheck`), ESLint passes with zero warnings (`npm run lint`), and Vite production builds cleanly (`npm run build`).

---

## 2. Next Work To Resume: Batch 2 (Chapters 05–08: Lipid & Lipoprotein Metabolism)

1. **Chapter 05:** `fatty-acid-oxidation-ketones` — Fatty Acid Beta-Oxidation & Ketogenesis
   - Key topics: Carnitine shuttle (CPT-I, CPT-II), 4-step beta-oxidation spiral, odd-chain propionyl-CoA to succinyl-CoA, hepatic ketogenesis (HMG-CoA synthase) and extrahepatic ketone oxidation.
   - File: `src/content/chapters/metabolism05BetaOxidation.ts`
2. **Chapter 06:** `lipogenesis-triglycerides` — Fatty Acid & Triglyceride Synthesis
   - Key topics: Citrate malate shuttle, Acetyl-CoA carboxylase (ACC) regulation, Fatty Acid Synthase (FAS) complex, phosphatidic acid pathway, glycerol-3-phosphate origin.
   - File: `src/content/chapters/metabolism06Lipogenesis.ts`
3. **Chapter 07:** `cholesterol-steroids` — Cholesterol & Steroid Metabolism
   - Key topics: Mevalonate pathway, HMG-CoA reductase (SREBP-2/SCAP, statins), squalene cyclization, bile acid synthesis (7alpha-hydroxylase), steroidogenesis pathways.
   - File: `src/content/chapters/metabolism07Cholesterol.ts`
4. **Chapter 08:** `lipoproteins-lipid-flux` — Lipoprotein Transport & Lipid Flux
   - Key topics: Chylomicrons, VLDL, IDL, LDL, HDL; apolipoproteins (A-I, B-48, B-100, C-II, E); LPL, LCAT, CETP; LDL receptor-mediated endocytosis, familial hypercholesterolemia.
   - File: `src/content/chapters/metabolism08Lipoproteins.ts`

Follow `docs/METABOLISM_CONTENT_STANDARD.md` strictly for all new chapters.
