# Human Metabolism Academy — Resumption & Handover Protocol

**Last Updated:** 2026-10-12  
**Current Status:** Batches 1 & 2 Complete & Verified (Chapters 01–08)  
**Next Active Batch:** Batch 3: Nitrogen, Amino Acids & Nucleotides (Chapters 09–12)  
**Current Branch:** `main`  
**Repository:** `d:\My book\Review\learning-platform\global-health-knowledge-hub`  

---

## 1. Verified Completed Work (Batches 1 & 2: Chapters 01–08)

All 8 initial chapters are fully authored, schema-validated, bilingual (>= 120 characters per section paragraph in EN and BN), and integrated with interactive pathway exploration:
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
5. `Chapter 05` — Fatty Acid Beta-Oxidation & Ketogenesis (`metabolism.chapter.05` / `fatty-acid-oxidation-ketones`)
   - File: `src/content/chapters/metabolism05BetaOxidation.ts`
   - Interactive Diagram: Carnitine Shuttle, Beta-Oxidation Spiral & Hepatic Ketogenesis (7 nodes, CPT-I valve, MCAD deficiency).
6. `Chapter 06` — Fatty Acid & Triglyceride Synthesis (`metabolism.chapter.06` / `lipogenesis-triglycerides`)
   - File: `src/content/chapters/metabolism06Lipogenesis.ts`
   - Interactive Diagram: Citrate Shuttle, Acetyl-CoA Carboxylase & FAS Complex (7 nodes, ACC Ser79 switch, DGAT packaging).
7. `Chapter 07` — Cholesterol & Steroid Metabolism (`metabolism.chapter.07` / `cholesterol-steroids`)
   - File: `src/content/chapters/metabolism07Cholesterol.ts`
   - Interactive Diagram: HMG-CoA Reductase, SREBP-2/SCAP & Steroidogenesis (7 nodes, statin target, bile acid recycling).
8. `Chapter 08` — Lipoprotein Transport & Lipid Flux (`metabolism.chapter.08` / `lipoproteins-lipid-flux`)
   - File: `src/content/chapters/metabolism08Lipoproteins.ts`
   - Interactive Diagram: Lipoprotein Cascades, LDL Receptor Cycle & HDL Reverse Transport (7 nodes, PCSK9 target, FH genetics).

All 43 unit/feature tests pass (`npm test`), strict TypeScript checks succeed (`npm run typecheck`), ESLint passes with zero warnings (`npm run lint`), and Vite production builds cleanly (`npm run build`).

---

## 2. Next Work To Resume: Batch 3 (Chapters 09–12: Nitrogen, Amino Acids & Nucleotides)

1. **Chapter 09:** `amino-acid-catabolism-urea` — Amino Acid Catabolism & Urea Cycle
   - Key topics: Transamination (ALT, AST, PLP/vitamin B6), oxidative deamination (glutamate dehydrogenase), urea cycle (CPS-I, OTC, argininosuccinate synthetase/lyase, arginase), hyperammonemia, N-acetylglutamate regulation.
   - File: `src/content/chapters/metabolism09AminoAcidsUrea.ts`
2. **Chapter 10:** `carbon-skeletons-specialized-products` — Carbon Skeleton Fates & Specialized Products
   - Key topics: Glucogenic vs ketogenic amino acids, branched-chain amino acid catabolism (MSUD), aromatic amino acid catabolism (PKU, alkaptonuria), neurotransmitter synthesis (catecholamines, serotonin, GABA, histamine), nitric oxide, glutathione, creatine.
   - File: `src/content/chapters/metabolism10CarbonSkeletons.ts`
3. **Chapter 11:** `purine-pyrimidine-metabolism` — Purine & Pyrimidine Metabolism
   - Key topics: De novo purine synthesis (PRPP, IMP), salvage pathway (HGPRT, Lesch-Nyhan syndrome), uric acid and gout (xanthine oxidase, allopurinol), de novo pyrimidine synthesis (CAD, UMP, orotic aciduria), ribonucleotide reductase, thymidylate synthase and methotrexate/5-FU pharmacology.
   - File: `src/content/chapters/metabolism11PurinesPyrimidines.ts`
4. **Chapter 12:** `heme-bilirubin-metabolism` — Heme Biosynthesis & Bilirubin Metabolism
   - Key topics: ALA synthase (ALAS1, ALAS2, rate-limiting, lead toxicity), porphyrias (acute intermittent porphyria, porphyria cutanea tarda), heme oxygenase and biliverdin/bilirubin conversion, hepatic conjugation (UGT1A1), jaundice and kernicterus (Crigler-Najjar, Gilbert, Dubin-Johnson).
   - File: `src/content/chapters/metabolism12HemeBilirubin.ts`

Follow `docs/METABOLISM_CONTENT_STANDARD.md` strictly for all new chapters.
