# Human Metabolism Academy — Curriculum Gap Analysis & Coverage Matrix

**Document Version:** 2.5.0  
**Status:** Authoritative Baseline & Gap Audit Complete  
**Subject:** Human Metabolism (`subject.metabolism`)  
**Scope:** 36-Chapter Full Curriculum Expansion (Chapters 01–36)  
**Date:** 2026-10-13  

---

## 1. Executive Summary & Audit Mandate

The Human Metabolism Academy launched with 18 foundational, intermediate, and clinical chapters covering basic bioenergetics, macronutrient oxidation, organ integration, cofactors, and major pathologies. The broader curriculum target requires a 36-chapter university-level medical biochemistry textbook and interactive simulation platform.

This document records the comprehensive gap analysis evaluating existing chapters 01–18 against the proposed expansion topics (Batch A: Chapters 19–27; Batch B: Chapters 28–36).

### Preservation Guarantee:
- Existing chapters 01–18 are preserved intact with stable IDs, routes, slugs, learning objectives, and interactive visual components.
- No existing URL or completed feature is altered or removed.
- New chapters expand intermediate and advanced biochemical mechanisms without superficial or redundant overlap.

---

## 2. Comprehensive Coverage Matrix (Chapters 01–36)

| Order | Proposed Chapter Title | Domain | Existing Status | Detailed Gap Assessment & Scientific Justification |
|---|---|---|---|---|
| **01** | Introduction to Human Metabolism & Bioenergetics | Bioenergetics | **ALREADY COVERED** | Baseline preserved: Thermodynamics, ATP phosphate potential, redox carriers, cellular energy charge (`metabolism01Bioenergetics.ts`). |
| **02** | Glycolysis & Pyruvate Oxidation | Carbohydrates | **ALREADY COVERED** | Baseline preserved: 10-step Embden-Meyerhof-Parnas pathway, PFK-1/hexokinase, PDC multienzyme complex (`metabolism02Glycolysis.ts`). |
| **03** | Citric Acid Cycle & Oxidative Phosphorylation | Mitochondria | **ALREADY COVERED** | Baseline preserved: Matrix Krebs cycle, ETC complexes I–IV, proton-motive force, ATP synthase (`metabolism03TcaOxphos.ts`). |
| **04** | Glycogen Metabolism & Gluconeogenesis | Carbohydrates | **ALREADY COVERED** | Baseline preserved: Hepatic/muscle glycogen, reciprocal phosphorylation, 4 bypass enzymes (`metabolism04GlycogenGluconeogenesis.ts`). |
| **05** | Fatty Acid Beta-Oxidation & Ketogenesis | Lipids | **ALREADY COVERED** | Baseline preserved: Carnitine shuttle, beta-oxidation spiral, hepatic ketone body synthesis (`metabolism05BetaOxidation.ts`). |
| **06** | Fatty Acid & Triglyceride Synthesis | Lipids | **ALREADY COVERED** | Baseline preserved: Citrate-malate shuttle, ACC regulation, FAS complex, TAG packaging (`metabolism06Lipogenesis.ts`). |
| **07** | Cholesterol & Steroid Metabolism | Lipids | **ALREADY COVERED** | Baseline preserved: Mevalonate pathway, HMG-CoA reductase, SREBP feedback, bile acids, steroidogenesis (`metabolism07Cholesterol.ts`). |
| **08** | Lipoprotein Transport & Lipid Flux | Lipids | **ALREADY COVERED** | Baseline preserved: Chylomicrons, VLDL, LDL, HDL, Apo markers, LDL receptor, PCSK9 (`metabolism08Lipoproteins.ts`). |
| **09** | Amino Acid Catabolism & Urea Cycle | Nitrogen | **ALREADY COVERED** | Baseline preserved: Transamination, PLP, glutamate dehydrogenase, hepatic urea cycle (`metabolism09AminoAcidsUrea.ts`). |
| **10** | Carbon Skeleton Fates & Specialized Products | Nitrogen | **ALREADY COVERED** | Baseline preserved: Glucogenic/ketogenic fates, BCAA/BCKDH, aromatic PAH, neurotransmitter overview (`metabolism10CarbonSkeletons.ts`). |
| **11** | Purine & Pyrimidine Metabolism | Nucleotides | **ALREADY COVERED** | Baseline preserved: De novo & salvage synthesis, RNR, uric acid, gout, CAD complex (`metabolism11PurinesPyrimidines.ts`). |
| **12** | Heme Biosynthesis & Bilirubin Metabolism | Porphyrins | **ALREADY COVERED** | Baseline preserved: ALA synthase, porphyrias, heme oxygenase, hepatic conjugation, jaundice (`metabolism12HemeBilirubin.ts`). |
| **13** | Fed, Fasted & Starvation Dynamics | Integration | **ALREADY COVERED** | Baseline preserved: Temporal fuel transitions, postabsorptive phase, prolonged starvation (`metabolism13FuelDynamics.ts`). |
| **14** | Endocrine Regulation of Fuel Flux | Hormones | **ALREADY COVERED** | Baseline preserved: Insulin RTK, glucagon/epinephrine GPCR, cortisol, AMPK sensor (`metabolism14EndocrineRegulation.ts`). |
| **15** | Organ-Specific Metabolic Specialization | Integration | **ALREADY COVERED** | Baseline preserved: Liver hub, skeletal muscle, heart, brain, white/brown adipose (`metabolism15OrganSpecialization.ts`). |
| **16** | Micronutrients & Metabolic Cofactors | Cofactors | **ALREADY COVERED** | Baseline preserved: B-complex coenzymes, trace elements, iron-sulfur clusters (`metabolism16MicronutrientsCofactors.ts`). |
| **17** | Inborn Errors of Metabolism | Genetics | **ALREADY COVERED** | Baseline preserved: GALT, Aldolase B, GSDs, PKU, MSUD, MCAD deficiency (`metabolism17InbornErrors.ts`). |
| **18** | Metabolic Disease & Clinical Integration | Pathology | **ALREADY COVERED** | Baseline preserved: T1D, T2D IRS-1 serine block, MetSyn, MASLD/MASH, Warburg intro (`metabolism18MetabolicDisease.ts`). |
| **19** | Enzyme Kinetics, Inhibition and Metabolic Control Analysis | Biophysics / Kinetics | **NEW** | **GAP:** Chapters 01 and 02 touched on basic Km/Vmax without quantitative steady-state derivations (Briggs-Haldane), reversible inhibition types (competitive, uncompetitive, noncompetitive, mixed), Lineweaver-Burk and Eadie-Hofstee plots, allosteric Hill cooperativity, or Kacser-Burns Metabolic Control Analysis (Flux Control Coefficients $C_i^J$, Elasticity Coefficients $\varepsilon_S^i$, Summation/Connectivity theorems). Critical university foundation. |
| **20** | Cellular Compartmentation, Metabolite Transport and Shuttle Systems | Cell Biology / Transport | **NEW** | **GAP:** Shuttles were mentioned in isolation across Ch 02, 03, and 05. Missing: Unified mitochondrial carrier family (SLC25: ANT, PiC, CAC, DIC, AGC, GC), peroxisomal ABC transporters (ABCD1–3, VLCFA beta-oxidation, ether lipid biogenesis), endoplasmic reticulum translocases (G6PT/SLC37A4, SERCA), nuclear envelope pores, and detailed comparison of reducing equivalent shuttles (malate-aspartate vs glycerol-3-phosphate stoichiometry). |
| **21** | Pentose Phosphate Pathway and NADPH Generation | Carbohydrates / Redox | **NEW** | **GAP:** NADPH was referenced in fatty acid synthesis (Ch 06), but the Pentose Phosphate Pathway (HMP shunt) itself was not systematically detailed. Missing: Oxidative phase (G6PD, 6-phosphogluconolactonase, 6-PGDH), non-oxidative reversible phase (RPI, RPE, transketolase TPP, transaldolase), the 4 operational metabolic modes balancing NADPH vs ribose-5-phosphate, G6PD deficiency genetics, favism, Heinz bodies, and alternative NADPH engines (malic enzyme, IDH1). |
| **22** | Fructose, Galactose and Alternative Sugar Metabolism | Carbohydrates | **NEW** | **GAP:** Ch 17 introduced GALT and Aldolase B blocks, but the normal physiologic biochemistry of non-glucose monosaccharides is omitted. Missing: Hepatic fructokinase (KHK-C) vs hexokinase, bypassing PFK-1 leading to accelerated de novo lipogenesis, triokinase, polyol pathway (aldose reductase, sorbitol dehydrogenase, osmotic diabetic damage), galactose Leloir pathway, lactose biosynthesis in mammary glands, and the hexosamine biosynthetic pathway (HBP/O-GlcNAcylation as cellular nutrient sensor). |
| **23** | Lactate Metabolism, Cori Cycle and Glucose–Alanine Cycle | Bioenergetics / Exercise | **NEW** | **GAP:** Named in passing in Ch 04 and Ch 15. Missing: George Brooks' Lactate Shuttle Hypothesis (intracellular vs cell-cell shuttles), monocarboxylate transporters (MCT1 and MCT4), mitochondrial lactate oxidation complex (mLOC), hepatic Cori cycle vs Glucose-Alanine (Cahill) cycle stoichiometry and nitrogen economy, cytosolic redox $L/P$ ratio as $NAD^+/NADH$ index, and clinical distinction of Type A (hypoxic) vs Type B (non-hypoxic/metformin/toxic/malignant) lactic acidosis. |
| **24** | Intestinal Lipid Digestion, Absorption and Chylomicron Assembly | Lipids / GI | **NEW** | **GAP:** Ch 08 begins with circulating lipoproteins. Missing: Luminal emulsification by bile salts, pancreatic colipase/lipase, cholesterol uptake by NPC1L1 (ezetimibe target), apical enterocyte fatty acid translocases (CD36, FATP4), re-esterification (MGAT, DGAT, ACAT2), microsomal triglyceride transfer protein (MTP), ApoB-48 editing by APOBEC-1, pre-chylomicron transport vesicle (PCTV) Sar1/COPII budding, lymphatic lacteal drainage, and abetalipoproteinemia. |
| **25** | Phospholipid, Sphingolipid and Eicosanoid Metabolism | Lipids / Membranes | **NEW** | **GAP:** Ch 05–08 focused exclusively on neutral lipids (TAG) and cholesterol. Missing: Glycerophospholipid classes (PC, PE, PS, PI, cardiolipin), Kennedy de novo CDP-diacylglycerol and CDP-choline/ethanolamine pathways, PEMT methylation pathway, phospholipases (PLA1, PLA2, PLC, PLD); Sphingolipid biogenesis (serine palmitoyltransferase, ceramides, sphingomyelin, gangliosides), ceramide in lipotoxic stress; Eicosanoid cascade (cPLA2, COX-1/2, 5-LOX, prostanoids, leukotrienes, resolvins). |
| **26** | Protein Turnover, Proteasomes, Autophagy and Amino Acid Pools | Proteostasis | **NEW** | **GAP:** Ch 09 covered amino acid transamination and urea synthesis. Missing: Intracellular proteostasis mechanisms: Ubiquitin-Proteasome System (E1, E2, E3 ligases, 26S proteasome 20S catalytic core and 19S caps), Autophagy-Lysosome pathway (macroautophagy, chaperone-mediated autophagy CMA, ULK1, Beclin-1, LC3-I to LC3-II lipidation, p62), nutrient sensing via amino acid transceptors (Sestrin2, CASTOR1, SAMTOR, Rag GTPases activating mTORC1), and inter-organ amino acid flux. |
| **27** | One-Carbon Metabolism, Methylation and Transsulfuration | Micronutrients / Epigenetics | **NEW** | **GAP:** Mentioned briefly in Ch 10 and 16. Missing: Integrated Folate Cycle (THF, SHMT, DHFR, 5,10-CH2-THF, MTHFR, 5-CH3-THF), Methionine Cycle (methionine synthase B12, MAT, SAM, DNMT/histone methyltransferases, SAH, SAHH, homocysteine), Transsulfuration Pathway (CBS PLP-dependent, CSE to cysteine, glutathione and taurine), BHMT alternate pathway, MTHFR C677T polymorphism, homocystinuria vascular atherogenesis, and antifolate pharmacology (methotrexate, pemetrexed). |
| **28** | Specialized Amino Acid-Derived Molecules and Neurotransmitter Metabolism | Neurobiochemistry | **NEW** | **GAP:** Ch 10 introduced generic carbon skeleton fates. Missing: Full mechanistic pathways for catecholamines (tyrosine hydroxylase, DOPA decarboxylase, DBH, PNMT, MAO/COMT catabolism to VMA/HVA), serotonin and melatonin (tryptophan hydroxylase, AANAT), GABA shunt (glutamate decarboxylase GAD, GABA-T, SSADH), histamine, nitric oxide synthase isoforms (eNOS, nNOS, iNOS) and citrulline recycling, phosphocreatine circuit (AGAT, GAMT, creatine transporter SLC6A8), and polyamines (ODC, spermidine/spermine). |
| **29** | Glutathione Metabolism, Reactive Oxygen Species and Redox Homeostasis | Redox / Toxicology | **NEW** | **GAP:** Missing: De novo glutathione synthesis (GCL catalytic and modifier subunits, GS), $\gamma$-glutamyl cycle (GGT, 5-oxoprolinase), glutathione redox cycle (GPx1–4, GR, NADPH coupling), GST phase II xenobiotic conjugation, cellular ROS generators (mitochondrial Complex I/III electron leak, NADPH oxidases, xanthine oxidase, peroxisomal oxidases), antioxidant defense (SOD1–3, catalase, peroxiredoxin-thioredoxin system), and ferroptosis (SLC7A11/system $x_c^-$, lipid peroxidation, GPX4 inactivation). |
| **30** | Mitochondrial Biogenesis, Dynamics and Metabolic Flexibility | Mitochondria | **NEW** | **GAP:** Ch 03 covered static TCA/OxPhos. Missing: Dynamic mitochondrial biology: PGC-1$\alpha$ coactivator network (NRF-1, NRF-2, TFAM, mtDNA replication), mitochondrial fusion (Mfn1/2, OPA1) and fission (Drp1, Fis1), mitophagy (PINK1/Parkin quality control), cristae organization (MICOS complex) and respiratory supercomplex assembly (respirasomes), and the molecular basis of the Randle cycle and metabolic inflexibility in insulin resistance. |
| **31** | Exercise Metabolism, Muscle Bioenergetics and Training Adaptation | Exercise Physiology | **NEW** | **GAP:** Ch 15 covered resting muscle fuel. Missing: High-resolution temporal bioenergetics during exercise: phosphagen system (creatine kinase, adenylate kinase, AMP deaminase), glycogenolysis/glycolytic power, aerobic flux; fiber type metabolic divergence (Type I, IIa, IIx); metabolic sensing (AMPK, CaMKII, p38 MAPK, PGC-1$\alpha$ activation); post-exercise glycogen resynthesis and EPOC; biochemical adaptations to endurance vs resistance training. |
| **32** | Circadian Metabolism, Nutrient Timing and Metabolic Rhythms | Chronobiology | **NEW** | **GAP:** Missing: Molecular transcriptional-translational circadian feedback loop (CLOCK:BMAL1 driving PER1–3 and CRY1–2; secondary loop REV-ERB$\alpha/\beta$ and ROR$\alpha$), post-translational regulation by SIRT1 (NAD$^+$-dependent deacetylase) and AMPK; entrainment of central SCN and peripheral tissue clocks (liver, muscle, adipose, pancreas); circadian oscillation of gluconeogenesis, lipogenesis, and bile acids; chrononutrition and metabolic disruption in shift work. |
| **33** | Immunometabolism and Metabolic Regulation of Inflammation | Immunology | **NEW** | **GAP:** Missing: Metabolic reprogramming of innate and adaptive immune cells: pro-inflammatory M1 macrophages (aerobic glycolysis, twin breaks in TCA cycle accumulating citrate for itaconate/fatty acid synthesis and succinate for HIF-1$\alpha$ stabilization) vs anti-inflammatory M2 macrophages (OxPhos, FAO, arginase-1); T cell metabolic reprogramming (effector Teff vs regulatory Treg); itaconate as an endogenous anti-inflammatory inhibitor of SDH; meta-inflammation in adipose tissue. |
| **34** | Cancer Cell Metabolism and Metabolic Reprogramming | Oncology | **NEW** | **GAP:** Ch 18 briefly defined Warburg effect. Missing: Comprehensive cancer metabolic hallmarks: aerobic glycolysis, PKM2 dimer/tetramer switch, lactate export; glutamine addiction and anaplerosis (GLS1, ASCT2, reductive carboxylation via IDH1/2); oncometabolites ($(R)$-2-hydroxyglutarate from mutant IDH1/2, fumarate from FH loss, succinate from SDH loss, competitive inhibition of $\alpha$-KG dioxygenases including TET2 and Jumonji KDMs, epigenetic hypermethylation); metabolic vulnerabilities for targeted antineoplastic therapy. |
| **35** | Metabolic Flux Analysis, Stable Isotope Tracing and Metabolomics | Methodology | **NEW** | **GAP:** Ch 16 touched on analytical cofactors. Missing: Methodological principles of modern metabolic research: stable isotope tracing ($^{13}\text{C}$-glucose, $^{13}\text{C}$-glutamine, $^{15}\text{N}$-amino acids, $^{2}\text{H}_2\text{O}$); mass isotopomer distribution analysis (MIDA); GC-MS, LC-MS/MS, and NMR instrumentation; stoichiometric matrix modeling and $^{13}\text{C}$-metabolic flux analysis ($^{13}\text{C}$-MFA); targeted vs untargeted metabolomics/lipidomics; clinical tracer kinetics in humans. |
| **36** | Integrated Metabolic Case Studies and Advanced Clinical Applications | Clinical Medicine | **NEW** | **GAP:** Ch 18 touched on general metabolic syndrome. Missing: Multi-system advanced grand rounds clinical cases integrating all 36 chapters: (1) Mitochondrial Encephalomyopathy (MELAS, m.3243A>G, heteroplasmy, lactic acidosis); (2) Acute Adult Hyperammonemic Coma in Partial OTC Deficiency; (3) Refeeding Syndrome in Severe Malnutrition (insulin surge, catastrophic hypophosphatemia, ATP depletion, Wernicke syndrome); (4) Euglycemic DKA on SGLT2 Inhibitor Therapy; (5) Bariatric Surgery Incretin Remission and Micronutrient Malabsorption. |

---

## 3. Substitution & Refinement Record

All 18 candidate topics (Chapters 19–36) were scrutinized. Every single topic represents a substantial, unaddressed area of metabolic science:
- None of the 18 proposed topics duplicates existing material in chapters 01–18.
- Topics that had minor mentions (e.g. Cori cycle in Ch 04/15, Warburg effect in Ch 18, one-carbon pool in Ch 10) are now given the deep, dedicated biochemical and mechanistic treatment demanded by an advanced university textbook.
- No substitutions are necessary because the 18 proposed titles represent the foundational canon of advanced human biochemistry and medical metabolism.

---

## 4. Architectural Taxonomy: 36 Chapters Across 9 Thematic Groups

To accommodate all 36 chapters cleanly, the curriculum taxonomy is structured into **9 thematic groups** (4 chapters each):

1. **Group 1: Metabolic Foundations & Bioenergetics (Chapters 01–04)** [Preserved]
2. **Group 2: Lipid & Lipoprotein Metabolism (Chapters 05–08)** [Preserved]
3. **Group 3: Nitrogen, Amino Acids & Nucleotides (Chapters 09–12)** [Preserved]
4. **Group 4: Metabolic Integration & Endocrine Crosstalk (Chapters 13–15, plus 16 moved to Clinical)** [Updated]
5. **Group 5: Enzyme Mechanisms, Transport & Intermediary Shunts (Chapters 19–22)** [New Group A1]
6. **Group 6: Inter-Organ Cycles, Complex Lipids & Proteostasis (Chapters 23–27)** [New Group A2]
7. **Group 7: Neurotransmitters, Redox Biology & Muscle Bioenergetics (Chapters 28–31)** [New Group B1]
8. **Group 8: Chronobiology, Immunometabolism & Cancer (Chapters 32–34)** [New Group B2]
9. **Group 9: Flux Analysis, Cofactors, Genetics & Clinical Grand Rounds (Chapters 16–18, 35–36)** [Updated Group]

This provides a harmonious, modular curriculum structure scaling from 18 to 36 chapters with 100% backward compatibility.
