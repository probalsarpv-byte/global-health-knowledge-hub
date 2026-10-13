# Human Metabolism Academy — Scientific Visualization & 3D Audit

**Document Version:** 2.5.0  
**Status:** Visual Architecture Verified  
**Subject:** Human Metabolism (`subject.metabolism`)  
**Scope:** Interactive Diagrams, Simulations & 3D Organ Networks for Chapters 01–36  
**Date:** 2026-10-13  

---

## 1. Visual Standards & Pedagogical Architecture

Every chapter in the Human Metabolism Academy is built with interactive scientific visual models that serve concrete educational goals rather than ornamental decoration.

### Dual-Layer Visual System:
1. **Interactive Pathway Diagram (`interactiveDiagram`):**
   - Implemented via `src/features/metabolism/InteractivePathwayDiagram.tsx`.
   - Responsive vector SVG with custom coordinate mapping and dynamic flux styling.
   - Dual-theme rendering: Daylight laboratory palette (warm amber `#d97706` and cream `#fffdfa`) and Dark Neon Telemetry Lab Mode (deep slate `#081324`, cyan `#22C7D6`, and electric blue `#1E3A5F`).
   - Stepped sequential pathway progress with Previous/Next controls, node counter (`1 / N`), keyboard accessibility (`Enter`/`Space`), and touch gestures.
   - Comprehensive detail cards with bilingual labels, descriptions, and clinical/biochemical notes.
2. **Interactive 3D Multi-Organ Explorer (`organ3DExplorer`):**
   - Implemented via `src/features/anatomy/Organ3DExplorer.tsx`.
   - Real-time 3D perspective projection math with pitch/yaw angular rotation, zoom controls, camera distance scaling, and depth-sorted anatomical rendering.
   - Five anatomical view presets: Anterior (AP), Posterior (PA), Left Lateral, Right Lateral, and Superior.
   - Auto-rotation spin engine with pause/play.
   - Multi-tab organ details: Overview, Physiological Dynamics, Nutritional Connections, and Clinical Relevance in English and Bengali.
   - Performance optimized: pure client-side math, zero heavy external binary asset bloat, responsive down to 320px viewport width, and full keyboard/screen-reader fallback.

---

## 2. Visualization Matrix Across Chapters 01–36

| Chapter | Title | Interactive SVG Pathway Schematic | 3D Organ Topology System |
|---|---|---|---|
| **01** | Introduction to Bioenergetics | High-Energy Phosphate Transfer & Redox Carriers Landscape | Bioenergetic cellular and organelle energy network |
| **02** | Glycolysis & Pyruvate Oxidation | Embden-Meyerhof-Parnas 10-Step Pathway & PDC Multienzyme Hub | Cytosolic-mitochondrial pyruvate transfer topology |
| **03** | Citric Acid Cycle & OxPhos | Citric Acid Cycle & Electron Transport Chain Coupling | Inner mitochondrial membrane & matrix cristae landscape |
| **04** | Glycogen & Gluconeogenesis | Hepatic Glycogen Cascade & Gluconeogenic Bypass Valves | Hepatic vs skeletal muscle glycogen store topography |
| **05** | Beta-Oxidation & Ketogenesis | Carnitine Shuttle, Beta-Oxidation Spiral & Ketogenesis | Liver, cardiac muscle & kidney lipid oxidation network |
| **06** | Lipogenesis & Triglycerides | Citrate Shuttle, ACC Regulation & FAS Multienzyme Complex | Liver, white adipose & lactating mammary lipid assembly |
| **07** | Cholesterol & Steroids | HMG-CoA Reductase, SREBP-2/SCAP & Steroidogenesis Hub | Liver, adrenal cortex, gonads & enterohepatic bile circuit |
| **08** | Lipoproteins & Lipid Flux | Lipoprotein Cascades, LDL Receptor Cycle & HDL Reverse Transport | Multi-organ lipoprotein transit (Intestines, Liver, Capillary bed) |
| **09** | Amino Acid Catabolism & Urea | Nitrogen Flux & Hepatic Urea Cycle Multistep Hub | Inter-organ nitrogen topography (Liver, Kidneys, Brain) |
| **10** | Carbon Skeletons & Products | Amino Acid Carbon Fates & Specialized Biosyntheses Hub | Splanchnic, muscle & neural amino acid fate map |
| **11** | Purines & Pyrimidines | Nucleotide Flux, Gout & Chemotherapy Targets Hub | Multi-organ nucleotide economy (Liver, Bone Marrow, Kidneys) |
| **12** | Heme & Bilirubin | Heme Lifecycle, Porphyrias & Jaundice Differential Hub | Multi-organ heme economy (Bone marrow, Spleen, Liver, Gut, Kidneys) |
| **13** | Fed, Fasted & Starvation | Fed-Fast-Starvation Metabolic Transitions Hub | Multi-organ temporal fuel orchestration network |
| **14** | Endocrine Fuel Regulation | Endocrine Signal Transduction & Fuel Switching Hub | Pancreas, Liver, Muscle, Adipose, Hypothalamus/Pituitary/Adrenals |
| **15** | Organ Specialization | Organ Specialization & Inter-Organ Fuel Loops Hub | Liver, Heart, Skeletal Muscle, Brain, WAT, BAT, Kidneys |
| **16** | Micronutrients & Cofactors | Micronutrient & Coenzyme Metabolic Engine | Multi-organ absorption, activation and storage network |
| **17** | Inborn Errors of Metabolism | Monogenic Metabolic Blocks & Newborn Screening Gateway | Multi-organ pathology of monogenic blocks (Liver, Brain, Muscle, Kidneys) |
| **18** | Metabolic Disease & Integration | Metabolic Syndrome, Diabetes, MASLD & Oncology Disease Engine | Multi-organ landscape of systemic metabolic disease |
| **19** | Enzyme Kinetics & Control | Michaelis-Menten, Inhibition Kinetic Curves & Flux Control Hub | Active site geometric catalytic geometry and multi-organ enzyme network |
| **20** | Compartmentation & Shuttles | Organellar Membrane Transporters & Reducing Equivalent Shuttles Hub | Intracellular organellar network (Mitochondria, Peroxisomes, ER, Nucleus) |
| **21** | Pentose Phosphate Pathway | Oxidative Hexose Monophosphate Shunt & NADPH Defense Engine | Erythrocyte, Liver, Adrenal cortex & phagocyte NADPH network |
| **22** | Fructose & Galactose | Hepatic Fructokinase, Polyol Pathway & Galactose Leloir Shunt | Splanchnic, Lens, Peripheral nerve & mammary gland sugar circuit |
| **23** | Lactate & Inter-Organ Cycles | Lactate Shuttle, MCT Monocarboxylate Transporters & Cori Cycle | Muscle-hepatic-cardiac-cerebral lactate exchange circuit |
| **24** | Intestinal Lipid Digestion | Luminal Emulsification, Enterocyte Lipolysis & Chylomicron Budding | Duodenum, Jejunum, Mesenteric lacteals & thoracic duct lymphatic circuit |
| **25** | Phospholipids & Eicosanoids | Kennedy CDP Pathway, Sphingolipid Ceramides & Eicosanoid Cascade | Cell membrane phospholipid bilayer, neural myelin & inflammatory vascular bed |
| **26** | Proteasomes & Autophagy | 26S Ubiquitin-Proteasome Machinery & Autophagosome Flux Hub | Muscle, Liver, Lysosomal network & autophagosome organelle topology |
| **27** | One-Carbon Metabolism | Integrated Folate Cycle, Methionine Cycle & Transsulfuration Hub | Liver, Bone marrow hematopoiesis, Neural tube & vascular endothelial network |
| **28** | Neurotransmitter Metabolism | Biogenic Amine Biosynthesis, Storage, Release & Catabolism Hub | Brain dopaminergic/serotonergic nuclei, Adrenal medulla, Sympathetic nerves |
| **29** | Glutathione & Redox Biology | De Novo Glutathione Synthesis, ROS Detoxification & Ferroptosis Hub | Liver antioxidant factory, Erythrocyte redox shield, Renal proximal tubule |
| **30** | Mitochondrial Dynamics | Mitochondrial Biogenesis (PGC-1$\alpha$), Fusion-Fission & Respirasomes | High-energy tissues: Cardiac myocardium, Slow-twitch muscle, Brown fat |
| **31** | Exercise Bioenergetics | Immediate Phosphagen, Glycolytic Surge & Mitochondrial Power Hub | Skeletal muscle myofibrils, Sarcomeres, Vascular beds & hepatic glycogen |
| **32** | Circadian Metabolism | Molecular Clockwork (CLOCK/BMAL1), Chrono-Nutrition & Daily Fuel Hub | Central hypothalamic SCN pacemaker, Hepatic, Muscle & Adipose clocks |
| **33** | Immunometabolism | M1/M2 Macrophage Metabolic Rewiring, Broken TCA & Itaconate Hub | Lymphoid organs, Spleen, Inflamed adipose tissue & vascular endothelium |
| **34** | Cancer Cell Metabolism | Warburg Aerobic Glycolysis, Glutaminolysis & Oncometabolite Hub | Hypoxic tumor microenvironment, Stroma-tumor metabolic exchange |
| **35** | Metabolic Flux Analysis | Stable Isotope Tracing ($^{13}\text{C}$/$^{15}\text{N}$), Mass Isotopomers & MFA Hub | Whole-body tracer infusion, Splanchnic extraction & multi-organ flux |
| **36** | Integrated Clinical Cases | Grand Rounds Multi-System Pathophysiology Integration Engine | Multi-organ crisis networks (MELAS, Late-onset OTC, Refeeding, Euglycemic DKA) |
