# Human Metabolism Academy — V2.5 36-Chapter Expansion Plan

**Document Version:** 2.5.0  
**Status:** Approved Master Implementation Plan  
**Subject:** Human Metabolism (`subject.metabolism`)  
**Scope:** Expansion from 18 to 36 Chapters  
**Production Strategy:** Two 9-Chapter Batches (Batch A: 19–27, Batch B: 28–36)  
**Date:** 2026-10-13  

---

## 1. Curriculum Architecture & IDs

### Existing Baseline (Chapters 01–18):
- `metabolism.chapter.01`: `intro-bioenergetics`
- `metabolism.chapter.02`: `glycolysis-pyruvate`
- `metabolism.chapter.03`: `tca-oxphos`
- `metabolism.chapter.04`: `glycogen-gluconeogenesis`
- `metabolism.chapter.05`: `fatty-acid-oxidation-ketones`
- `metabolism.chapter.06`: `lipogenesis-triglycerides`
- `metabolism.chapter.07`: `cholesterol-steroids`
- `metabolism.chapter.08`: `lipoproteins-lipid-flux`
- `metabolism.chapter.09`: `amino-acid-catabolism-urea`
- `metabolism.chapter.10`: `carbon-skeletons-specialized-products`
- `metabolism.chapter.11`: `purine-pyrimidine-metabolism`
- `metabolism.chapter.12`: `heme-bilirubin-metabolism`
- `metabolism.chapter.13`: `fed-fasted-starvation-states`
- `metabolism.chapter.14`: `endocrine-fuel-regulation`
- `metabolism.chapter.15`: `organ-metabolic-specialization`
- `metabolism.chapter.16`: `micronutrients-cofactors`
- `metabolism.chapter.17`: `inborn-errors-metabolism`
- `metabolism.chapter.18`: `metabolic-disease-clinical-integration`

### Batch A Expansion (Chapters 19–27):
| Order | Chapter ID | Topic ID | Slug | Title (EN / BN) | Core Focus |
|---|---|---|---|---|---|
| **19** | `metabolism.chapter.19` | `topic.metabolism.enzyme-kinetics-control` | `enzyme-kinetics-control` | 19 · Enzyme Kinetics, Inhibition & Metabolic Control Analysis / ১৯ · এনজাইম গতিবিদ্যা, প্রতিরোধ ও বিপাকীয় নিয়ন্ত্রণ বিশ্লেষণ | Michaelis-Menten, Briggs-Haldane, Lineweaver-Burk, reversible/irreversible inhibition, Hill equation, Kacser-Burns MCA flux control coefficients. |
| **20** | `metabolism.chapter.20` | `topic.metabolism.cellular-compartmentation-shuttles` | `cellular-compartmentation-shuttles` | 20 · Cellular Compartmentation, Metabolite Transport & Shuttle Systems / ২০ · কোষীয় প্রকোষ্ঠায়ন, মেটাবোলাইট পরিবহন ও শাটল ব্যবস্থা | SLC25 mitochondrial carriers, peroxisomal ABCD transporters, ER G6PT, malate-aspartate vs glycerol-3-phosphate shuttle thermodynamics. |
| **21** | `metabolism.chapter.21` | `topic.metabolism.pentose-phosphate-pathway` | `pentose-phosphate-pathway` | 21 · Pentose Phosphate Pathway & NADPH Generation / ২১ · পেন্টোজ ফসফেট পথ ও এনএডিপিএইচ উৎপাদন | Oxidative phase (G6PD), non-oxidative transketolase/transaldolase, 4 metabolic flux modes, G6PD deficiency, favism, antioxidant defense. |
| **22** | `metabolism.chapter.22` | `topic.metabolism.fructose-galactose-alternative-sugars` | `fructose-galactose-alternative-sugars` | 22 · Fructose, Galactose & Alternative Sugar Metabolism / ২২ · ফ্রুক্টোজ, গ্যালাক্টোজ ও বিকল্প শর্করা বিপাক | Fructokinase (KHK-C) bypassing PFK-1, hepatic lipogenesis, polyol sorbitol pathway, galactose Leloir pathway, hexosamine pathway (HBP). |
| **23** | `metabolism.chapter.23` | `topic.metabolism.lactate-cori-glucose-alanine` | `lactate-cori-glucose-alanine` | 23 · Lactate Metabolism, Cori Cycle & Glucose–Alanine Cycle / ২৩ · ল্যাকটেট বিপাক, কোরি চক্র ও গ্লুকোজ-অ্যালানিন চক্র | Lactate Shuttle Hypothesis (Brooks), MCT1/MCT4 transporters, mitochondrial lactate oxidation, Cori vs Cahill stoichiometry, Type A/B lactic acidosis. |
| **24** | `metabolism.chapter.24` | `topic.metabolism.lipid-digestion-chylomicrons` | `lipid-digestion-chylomicrons` | 24 · Intestinal Lipid Digestion, Absorption & Chylomicron Assembly / ২৪ · অন্ত্রে লিপিড পরিপাক, শোষণ ও কাইলোমাইক্রন সমাবেশ | Bile micelle emulsification, pancreatic colipase/lipase, NPC1L1, CD36, enterocyte re-esterification (MGAT/DGAT), MTP, ApoB-48 editing, lacteal transport. |
| **25** | `metabolism.chapter.25` | `topic.metabolism.phospholipids-sphingolipids-eicosanoids` | `phospholipids-sphingolipids-eicosanoids` | 25 · Phospholipid, Sphingolipid & Eicosanoid Metabolism / ২৫ · ফসফোলিপিড, স্ফিংগোলিপিড ও আইকোসানয়েড বিপাক | Glycerophospholipids (Kennedy pathway, PEMT, cardiolipin), sphingolipid ceramide signaling, cPLA2, COX-1/2, 5-LOX, prostanoids, leukotrienes. |
| **26** | `metabolism.chapter.26` | `topic.metabolism.protein-turnover-proteasome-autophagy` | `protein-turnover-proteasome-autophagy` | 26 · Protein Turnover, Proteasomes, Autophagy & Amino Acid Pools / ২৬ · প্রোটিন রূপান্তর, প্রোটিওসোম, অটোফ্যাজি ও অ্যামিনো অ্যাসিড পুল | 26S ubiquitin-proteasome system (E1-E2-E3), macroautophagy and CMA (ULK1, Beclin-1, LC3 lipidation), amino acid sensing (Sestrin2/Rag/mTORC1). |
| **27** | `metabolism.chapter.27` | `topic.metabolism.one-carbon-methylation-transsulfuration` | `one-carbon-methylation-transsulfuration` | 27 · One-Carbon Metabolism, Methylation & Transsulfuration / ২৭ · এক-কার্বন বিপাক, মিথাইলেশন ও ট্রান্সসালফারেশন | Folate cycle, Methionine cycle, SAM/SAH ratio, transsulfuration to cysteine and glutathione, MTHFR polymorphism, antifolates (methotrexate). |

### Batch B Expansion (Chapters 28–36):
| Order | Chapter ID | Topic ID | Slug | Title (EN / BN) | Core Focus |
|---|---|---|---|---|---|
| **28** | `metabolism.chapter.28` | `topic.metabolism.neurotransmitters-specialized-amines` | `neurotransmitters-specialized-amines` | 28 · Specialized Amino Acid Products & Neurotransmitter Metabolism / ২৮ · বিশেষ অ্যামিনো অ্যাসিড যৌগ ও নিউরোট্রান্সমিটার বিপাক | Catecholamines (TH, DDC, DBH, PNMT, MAO/COMT), Serotonin/Melatonin, GABA shunt, Nitric oxide synthases, Phosphocreatine circuit, Polyamines. |
| **29** | `metabolism.chapter.29` | `topic.metabolism.glutathione-ros-redox-homeostasis` | `glutathione-ros-redox-homeostasis` | 29 · Glutathione Metabolism, Reactive Oxygen Species & Redox Homeostasis / ২৯ · গ্লুটাথিয়ন বিপাক, সক্রিয় অক্সিজেন প্রজাতি ও রেডক্স ভারসাম্য | Glutathione de novo synthesis (GCL, GS), $\gamma$-glutamyl cycle, GPx/GR redox cycle, ROS sources (Complex I/III leak, NOX), SOD/catalase/PRX, ferroptosis. |
| **30** | `metabolism.chapter.30` | `topic.metabolism.mitochondrial-dynamics-flexibility` | `mitochondrial-dynamics-flexibility` | 30 · Mitochondrial Biogenesis, Dynamics & Metabolic Flexibility / ৩০ · মাইটোকন্ড্রিয়াল জৈবজনন, গতিশীলতা ও বিপাকীয় নমনীয়তা | PGC-1$\alpha$ cascade (NRF-1/2, TFAM), fusion (Mfn1/2, OPA1), fission (Drp1), mitophagy (PINK1/Parkin), respirasomes, Randle cycle, metabolic inflexibility. |
| **31** | `metabolism.chapter.31` | `topic.metabolism.exercise-bioenergetics-adaptation` | `exercise-bioenergetics-adaptation` | 31 · Exercise Metabolism, Muscle Bioenergetics & Training Adaptation / ৩১ · ব্যায়াম বিপাক, পেশির জৈবশক্তিবিজ্ঞান ও প্রশিক্ষণ অভিযোজন | Phosphagen system, glycolysis vs OxPhos power, fiber recruitment (Type I, IIa, IIx), AMPK/CaMKII exercise signaling, EPOC, endurance vs resistance adaptations. |
| **32** | `metabolism.chapter.32` | `topic.metabolism.circadian-metabolism-rhythms` | `circadian-metabolism-rhythms` | 32 · Circadian Metabolism, Nutrient Timing & Metabolic Rhythms / ৩২ · দিবা-রাত্রি বিপাক, পুষ্টির সময়জ্ঞান ও বিপাকীয় ছন্দ | CLOCK:BMAL1 / PER:CRY core molecular clock, SIRT1/AMPK modulation, central SCN vs peripheral clocks, circadian fuel fluxes, chrononutrition. |
| **33** | `metabolism.chapter.33` | `topic.metabolism.immunometabolism-inflammation` | `immunometabolism-inflammation` | 33 · Immunometabolism & Metabolic Regulation of Inflammation / ৩৩ · প্রতিরোধ-বিপাক ও প্রদাহের বিপাকীয় নিয়ন্ত্রণ | M1 vs M2 macrophage metabolic reprogramming, broken TCA cycle, itaconate synthesis, T cell activation (glycolytic shift vs Treg FAO), meta-inflammation. |
| **34** | `metabolism.chapter.34` | `topic.metabolism.cancer-metabolic-reprogramming` | `cancer-metabolic-reprogramming` | 34 · Cancer Cell Metabolism & Metabolic Reprogramming / ৩৪ · ক্যান্সার কোষের বিপাক ও বিপাকীয় পুনর্বিন্যাস | Warburg effect (PKM2, LDHA), glutamine addiction, oncometabolites (2-HG, fumarate, succinate), $\alpha$-KG dioxygenase inhibition, antineoplastic targets. |
| **35** | `metabolism.chapter.35` | `topic.metabolism.flux-analysis-metabolomics` | `flux-analysis-metabolomics` | 35 · Metabolic Flux Analysis, Stable Isotope Tracing & Metabolomics / ৩৫ · বিপাকীয় প্রবাহ বিশ্লেষণ, স্থিতিশীল আইসোটোপ ট্রেসিং ও মেটাবোলোমিক্স | $^{13}\text{C}$-MFA, mass isotopomer analysis (MIDA), LC-MS/MS, GC-MS, NMR, stoichiometric flux balance analysis (FBA), clinical tracer kinetics. |
| **36** | `metabolism.chapter.36` | `topic.metabolism.clinical-cases-grand-rounds` | `clinical-cases-grand-rounds` | 36 · Integrated Metabolic Case Studies & Advanced Clinical Applications / ৩৬ · সমন্বিত বিপাকীয় কেস স্টাডি ও উচ্চতর ক্লিনিক্যাল প্রয়োগ | Grand rounds clinical integrations: MELAS mitochondrial encephalomyopathy, late-onset OTC hyperammonemia, Refeeding syndrome, Euglycemic DKA, Bariatric remission. |

---

## 2. Interactive SVG & 3D Visual Architecture

Every chapter features:
1. **Interactive Pathway Diagram (`interactiveDiagram`):**
   - Responsive SVG diagram with daylight and Lab Mode styles.
   - Stepped sequential pathway progress controls with keyboard and touch support.
   - Clickable nodes with biochemical details, regulatory indicators, and clinical correlations in English and Bengali.
2. **Interactive 3D Multi-Organ Explorer (`organ3DExplorer`):**
   - Full 3D perspective projection engine with depth-sorted rendering.
   - Interactive mouse drag/touch rotation (pitch/yaw), zoom controls, view presets (Anterior, Posterior, Left Lateral, Right Lateral, Superior), auto-rotation toggle, and organ isolation.
   - Multi-tab clinical, physiological, and nutritional guidance for relevant metabolic organs.
   - Full accessibility fallback and screen-reader telemetry.

---

## 3. High-Throughput Batch Delivery Strategy

To execute this massive academic expansion safely and autonomously:
1. **Batch A (Chapters 19–27):**
   - Create 9 comprehensive chapter source files: `metabolism19EnzymeKinetics.ts` through `metabolism27OneCarbon.ts`.
   - Update `src/content/metabolismCurriculum.ts` and `src/content/chapters/chapterRegistry.ts`.
   - Update test suites and documentation.
   - Run typecheck, lint, test, and build.
   - Stage, commit, and push to GitHub.
2. **Batch B (Chapters 28–36):**
   - Create 9 comprehensive chapter source files: `metabolism28Neurotransmitters.ts` through `metabolism36ClinicalCases.ts`.
   - Register all 36 chapters across the curriculum and registry.
   - Run full automated test suite (all 36 chapters).
   - Finalize production status ledgers, commit, and push to GitHub.
