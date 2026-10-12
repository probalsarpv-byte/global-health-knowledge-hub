# Human Metabolism Academy — Master Architecture & Production Plan

**Document Version:** 1.0.0  
**Status:** Approved Master Architecture  
**Subject ID:** `subject.metabolism`  
**Curriculum Scope:** 18 Chapters across 5 Thematic Groups  
**Target Platform:** Global Health Knowledge Hub  

---

## 1. Educational Mission & Core Philosophy

The Human Metabolism Academy is an international, evidence-based, bilingual (English and Bengali) interactive learning curriculum covering the molecular bioenergetics, chemical transformations, regulatory signaling, organ crosstalk, and clinical pathophysiology of human fuel metabolism.

### Key Pedagogical Tenets:
1. **Mechanistic Rigor with Intuitive Visual Models:** Every biochemical transformation is presented with accurate stoichiometry, enzyme nomenclature, and cofactor dependencies, paired with accessible animated SVG pathway schematics.
2. **Three-Tier Depth (Foundation, Academic, Advanced):**
   - *Foundation:* Clear energy principles, physiological purposes, non-intimidating step-by-step logic.
   - *Academic:* Complete enzymatic steps, standard IUPAC/IUBMB chemical names, intermediate structures, regulatory control points (allosteric and covalent).
   - *Advanced / Research:* Kinetic considerations, molecular mechanisms, genetic variants, metabolic flux analysis, clinical correlations, and primary research citations.
3. **Equivalence of English and Bengali:** Full parallel content, retaining standard scientific abbreviations (ATP, NADH, CoA, GLUT4) while explaining concepts in natural, precise Bengali terminology.
4. **Interactive Educational Simulations:** Dynamic pathway step-by-step navigators, enzyme regulation toggles, organelle compartment visualizers, and formative assessment questions with detailed rationales.

---

## 2. Curriculum Taxonomy: 18 Chapters across 5 Groups

| Group | Order | Chapter ID | Slug | Chapter Title (EN / BN) | Core Focus |
|---|---|---|---|---|---|
| **Group 1: Metabolic Foundations & Bioenergetics** | 01 | `metabolism.chapter.01` | `intro-bioenergetics` | 01 · Introduction to Human Metabolism & Bioenergetics / ০১ · মানব বিপাক ও জৈবশক্তিবিজ্ঞানের পরিচয় | Thermodynamics, ATP coupling, redox carriers, cellular energy charge |
| | 02 | `metabolism.chapter.02` | `glycolysis-pyruvate` | 02 · Glycolysis & Pyruvate Oxidation / ০২ · গ্লাইকোলাইসিস ও পাইরুভেট জারণ | 10 enzymatic steps, PFK-1/hexokinase regulation, PDC complex |
| | 03 | `metabolism.chapter.03` | `tca-oxphos` | 03 · Citric Acid Cycle & Oxidative Phosphorylation / ০৩ · সাইট্রিক অ্যাসিড চক্র ও অক্সিডেটিভ ফসফরাইলেশন | TCA cycle flux, ETC complexes I–IV, proton-motive force, ATP synthase |
| | 04 | `metabolism.chapter.04` | `glycogen-gluconeogenesis` | 04 · Glycogen Metabolism & Gluconeogenesis / ০৪ · গ্লাইকোজেন বিপাক ও গ্লুকোনিওজেনেসিস | Hepatic vs muscle glycogen, reciprocal regulation, bypass enzymes |
| **Group 2: Lipid & Lipoprotein Metabolism** | 05 | `metabolism.chapter.05` | `fatty-acid-oxidation-ketones` | 05 · Fatty Acid Beta-Oxidation & Ketogenesis / ০৫ · ফ্যাটি অ্যাসিড বিটা-জারণ ও কিটোজেনেসিস | Carnitine shuttle, beta-oxidation spiral, ketone body synthesis & utilization |
| | 06 | `metabolism.chapter.06` | `lipogenesis-triglycerides` | 06 · Fatty Acid & Triglyceride Synthesis / ০৬ · ফ্যাটি অ্যাসিড ও ট্রাইগ্লিসারাইড সংশ্লেষ | Acetyl-CoA carboxylase, FAS complex, NADPH sources, TAG packaging |
| | 07 | `metabolism.chapter.07` | `cholesterol-steroids` | 07 · Cholesterol & Steroid Metabolism / ০৭ · কোলেস্টেরল ও স্টেরয়েড বিপাক | Mevalonate pathway, HMG-CoA reductase, bile acid & steroid synthesis |
| | 08 | `metabolism.chapter.08` | `lipoproteins-lipid-flux` | 08 · Lipoprotein Transport & Lipid Flux / ০৮ · লাইপোপ্রোটিন পরিবহন ও লিপিড প্রবাহ | Chylomicrons, VLDL, LDL, HDL, reverse cholesterol transport, Apo markers |
| **Group 3: Nitrogen, Amino Acids & Nucleotides** | 09 | `metabolism.chapter.09` | `amino-acid-catabolism-urea` | 09 · Amino Acid Catabolism & Urea Cycle / ০৯ · অ্যামিনো অ্যাসিড ভাঙন ও ইউরিয়া চক্র | Transamination, PLP, oxidative deamination, hepatic urea cycle steps |
| | 10 | `metabolism.chapter.10` | `carbon-skeletons-specialized-products` | 10 · Carbon Skeleton Fates & Specialized Products / ১০ · কার্বন কাঠামোর পরিণতি ও বিশেষ যৌগ | Glucogenic vs ketogenic fates, one-carbon pool, creatine, neurotransmitters |
| | 11 | `metabolism.chapter.11` | `purine-pyrimidine-metabolism` | 11 · Purine & Pyrimidine Metabolism / ১১ · পিউরিন ও পিরিমিডিন বিপাক | De novo & salvage synthesis, RNR regulation, uric acid & clinical gout |
| | 12 | `metabolism.chapter.12` | `heme-bilirubin-metabolism` | 12 · Heme Biosynthesis & Bilirubin Metabolism / ১২ · হিম সংশ্লেষ ও বিলিরুবিন বিপাক | ALA synthase, porphyrin pathway, porphyrias, bilirubin excretion & jaundice |
| **Group 4: Integration, Hormones & Crosstalk** | 13 | `metabolism.chapter.13` | `fed-fasted-starvation-states` | 13 · Fed, Fasted & Starvation Dynamics / ১৩ · ভুক্ত, উপবাস ও অনাহারকালীন পরিবর্তন | Temporal fuel transitions, substrate preferences of brain/muscle/liver |
| | 14 | `metabolism.chapter.14` | `endocrine-fuel-regulation` | 14 · Endocrine Regulation of Fuel Flux / ১৪ · জ্বালানি প্রবাহের হরমোনজনিত নিয়ন্ত্রণ | Insulin, glucagon, epinephrine, cortisol, AMPK & mTOR signaling |
| | 15 | `metabolism.chapter.15` | `organ-metabolic-specialization` | 15 · Organ-Specific Metabolic Specialization / ১৫ · অঙ্গভিত্তিক বিপাকীয় বিশেষায়ন | Liver, skeletal muscle, heart, brain, white & brown adipose tissue |
| **Group 5: Micronutrients, Genetics & Clinics** | 16 | `metabolism.chapter.16` | `micronutrients-cofactors` | 16 · Micronutrients & Metabolic Cofactors / ১৬ · অনুপুষ্টি ও বিপাকীয় কোফ্যাক্টর | B-complex vitamins, trace elements, iron-sulfur clusters, enzyme kinetics |
| | 17 | `metabolism.chapter.17` | `inborn-errors-metabolism` | 17 · Inborn Errors of Metabolism / ১৭ · জন্মগত বিপাকীয় ত্রুটি | Enzyme deficiencies, organic acidemias, GSDs, newborn screening markers |
| | 18 | `metabolism.chapter.18` | `metabolic-disease-clinical-integration` | 18 · Metabolic Disease & Clinical Integration / ১৮ · বিপাকীয় ব্যাধি ও ক্লিনিক্যাল সমন্বয় | Insulin resistance, metabolic syndrome, MASLD, exercise physiology |

---

## 3. Production Batching Strategy

- **Batch 1 (Chapters 01–04):** Core Bioenergetics, Glycolysis, TCA/OxPhos, Glycogen/Gluconeogenesis.
- **Batch 2 (Chapters 05–08):** Fatty Acid Beta-Oxidation & Ketones, Lipogenesis, Cholesterol, Lipoproteins.
- **Batch 3 (Chapters 09–12):** Amino Acid Catabolism & Urea Cycle, Specialized Products, Purine/Pyrimidine, Heme/Bilirubin.
- **Batch 4 (Chapters 13–15):** Fed/Fasted Transitions, Endocrine Signaling, Organ Specialization.
- **Batch 5 (Chapters 16–18):** Micronutrient Cofactors, Inborn Errors, Metabolic Disease & Clinical Integration.
