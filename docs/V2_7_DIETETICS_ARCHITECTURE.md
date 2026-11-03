# Global Health Knowledge Hub V2.7 — Practical Dietetics Architecture
## Architectural Blueprint for Companion Textbook & Clinical Practice Engine:
### *Practical Diet Planning & Therapeutic Dietetics*

**Version:** 2.7.0  
**Status:** Architectural Blueprint & Future Curriculum Specification  
**Date:** November 2026  
**Working Group:** Clinical Nutrition & Dietetics Faculty, Biomedical Education UX, and Software Architecture  
**Companion Volume to:** *Functional Nutrition & Human Nutritional Biochemistry (Chapters 01–27)*

---

## 1. Strategic Vision: The Separation of Theory and Clinical Application

A foundational principle of medical and health sciences education is the clear distinction between **biomedical science** and **applied clinical practice**:
- **Volume I: Human Nutrition Science & Nutritional Biochemistry (Chapters 01–27)** teaches *what happens* at the cellular, biochemical, and organ-system level (transporters, kinetics, coenzymes, metabolic flux, and scientific evidence consensus).
- **Volume II: Practical Diet Planning & Therapeutic Dietetics (Planned Companion)** teaches *how to prescribe, formulate, calculate, and implement* individualized medical nutrition therapies for patients across the health and disease spectrum.

Mixing clinical menu plans, meal exchanges, and patient calculation sheets directly into basic science chapters clutter the mechanistic learning experience. Conversely, practicing dietitians and medical students need an interactive, computationally validated environment to practice clinical decision-making.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ VOLUME I: HUMAN NUTRITION SCIENCE & BIOCHEMISTRY (Current 27 Chapters)      │
│ • Brush-border SGLT1/GLUT2 Kinetics          • DIAAS & Leucine Threshold    │
│ • Reverse Cholesterol Transport & ApoB       • FGF23-Klotho-Phosphate Axis  │
│ • Intestinal Permeability & Zonulin          • Warburg Effect in Cachexia   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Bidirectional Conceptual Mapping
                                       │ (Theory-to-Practice Matrix)
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ VOLUME II: PRACTICAL DIET PLANNING & THERAPEUTIC DIETETICS (Future Engine)  │
│ • ABCD Nutrition Assessment Framework       • Nutrition Care Process (NCP)  │
│ • Caloric/Protein Formulation Algorithms     • Standardized Food Exchanges  │
│ • Disease-Specific Therapeutic Menus         • Interactive Patient Cases    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. The 7 Core Practical Dietetics Domains

### Domain 1: Comprehensive Clinical Nutrition Assessment (The ABCD Model)
A standardized, four-pillar clinical evaluation methodology:
1. **Anthropometry (A):**
   - Height, dry body weight, BMI ($kg/m^2$), mid-upper arm circumference (MUAC), calf circumference, triceps skinfold thickness.
   - Ideal Body Weight (Hamwi equation), Adjusted Body Weight for obesity:
     $$\text{AdjBW} = \text{IBW} + 0.4 \times (\text{Actual Weight} - \text{IBW})$$
   - Calculation of percentage involuntary weight loss and time frame:
     $$\% \text{ Loss} = \frac{\text{Usual Weight} - \text{Actual Weight}}{\text{Usual Weight}} \times 100$$
2. **Biochemical & Hematological Markers (B):**
   - Serum albumin and prealbumin (transthyretin) interpreted strictly as negative acute-phase reactants indicative of systemic inflammation, rather than pure malnutrition markers.
   - Comprehensive metabolic panel (electrolytes, BUN, creatinine, eGFR, liver enzymes), lipid profile, ferritin, transferrin saturation, and hs-CRP.
3. **Clinical & Physical Examination (C):**
   - Nutrition-Focused Physical Exam (NFPE) assessing temporal muscle wasting, clavicular fat-pad depletion, thenar wasting, and peripheral edema staging (1+ to 4+).
4. **Dietary Intake Evaluation (D):**
   - 24-hour dietary recall, multi-pass food frequency questionnaire (FFQ), weighted food records, and dietary quality indices (HEI, Mediterranean Diet Score).

---

### Domain 2: The Nutrition Care Process (NCP) & Standardized eNCPT Diagnostic Terminology
The international standard developed by the Academy of Nutrition and Dietetics, structured into four cyclic steps:
1. **Nutrition Assessment:** Gathering and verifying ABCD data against comparative reference standards.
2. **Nutrition Diagnosis (PES Statement):**
   - Formulation of precise, structured diagnostic sentences:
     $$\text{[Problem (P)]} \text{ related to } \text{[Etiology (E)]} \text{ as evidenced by } \text{[Signs and Symptoms (S)]}$$
   - *Example:* "Excessive sodium intake (NI-5.10.1) related to frequent consumption of commercially prepared convenience foods as evidenced by 24-hr dietary recall showing 4,200 mg Na/day and persistent Stage 2 hypertension (BP 152/94 mmHg)."
3. **Nutrition Intervention:** Prescription of specific food and nutrient delivery (ND), nutrition education (E), counseling (C), or coordination of care (RC).
4. **Nutrition Monitoring & Evaluation:** Defining measurable outcome indicators, re-assessment schedules, and criteria for discharge or therapy adjustment.

---

### Domain 3: Energy, Fluid & Macronutrient Prescription Formulation Engine
Validated predictive equations with clinical condition-specific stress factors:

1. **Resting Energy Expenditure (REE / BMR):**
   - **Mifflin-St Jeor Equation** (Gold standard for ambulatory non-critically ill adults):
     $$\text{Men: } \text{REE} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (y)} + 5$$
     $$\text{Women: } \text{REE} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (y)} - 161$$
   - **Penn State Equation (PSU 2003b)** (For mechanically ventilated critically ill patients):
     $$\text{RMR} = \text{Mifflin}(0.96) + V_E(31) + T_{\text{max}}(167) - 6212$$
2. **Total Energy Expenditure (TEE):**
   - $\text{TEE} = \text{REE} \times \text{Activity Factor (AF)} \times \text{Injury/Stress Factor (IF)}$
   - Sedentary ambulatory: AF 1.2; Lightly active: AF 1.375; Moderate exercise: AF 1.55.
   - Sepsis / major trauma stress factors: 1.2–1.4; Major burns (>40% TBSA): 1.5–1.8.
3. **Protein Prescription:**
   - Healthy adult maintenance: $0.80\text{--}1.0\text{ g/kg/day}$
   - Non-dialysis CKD Stages 3–5: $0.55\text{--}0.60\text{ g/kg/day}$ (KDOQI 2020)
   - Maintenance hemodialysis: $1.0\text{--}1.2\text{ g/kg/day}$
   - Geriatric sarcopenia / frailty: $1.2\text{--}1.5\text{ g/kg/day}$ (ESPEN 2019)
   - Critical illness / severe trauma / burns: $1.5\text{--}2.0\text{ g/kg/day}$
4. **Fluid Requirements:**
   - Holliday-Segar method: 100 mL/kg for first 10 kg, 50 mL/kg for next 10 kg, 20 mL/kg for remaining weight.
   - Adult age-based heuristic: $30\text{--}35\text{ mL/kg/day}$ in normal renal/cardiac status.

---

### Domain 4: Standardized Food Exchange Systems & Cultural Adaptation
Meal planning requires translating nutrient grams into tangible food servings:
1. **The Standardized Exchange System:**
   - **Starch / Bread:** 15 g Carbohydrate, 3 g Protein, 1 g Fat (80 kcal).
   - **Lean Meat:** 0 g Carbohydrate, 7 g Protein, 2 g Fat (45 kcal).
   - **Medium-Fat Meat:** 0 g Carbohydrate, 7 g Protein, 5 g Fat (75 kcal).
   - **Non-Starchy Vegetables:** 5 g Carbohydrate, 2 g Protein, 0 g Fat (25 kcal).
   - **Fruit:** 15 g Carbohydrate, 0 g Protein, 0 g Fat (60 kcal).
   - **Fat / Oil:** 0 g Carbohydrate, 0 g Protein, 5 g Fat (45 kcal).
2. **Bengali & South Asian Cultural Food Exchange Adapter:**
   - Local staple mapping: Cooked parboiled rice (*ভাত*), hand-made flatbread (*লাল আটার রুটি*), lentil soup (*মসুর ডাল*), freshwater fish (*রুই/কাতলা*), indigenous leafy greens (*শাক*), mustard oil (*সরিষার তেল*).
   - Precise carbohydrate and protein conversions tailored to South Asian dietary habits and high glycemic index rice varieties.

---

### Domain 5: Therapeutic Diet Formulations & Clinical Protocols

#### Protocol A: Renal CKD Stage 3–5 Non-Dialysis Low-Protein Diet
- **Nutrient Targets:** $0.55\text{--}0.60\text{ g/kg/day}$ protein; $25\text{--}35\text{ kcal/kg/day}$ energy; $<800\text{--}1,000\text{ mg/day}$ phosphorus; $<2,000\text{--}2,300\text{ mg/day}$ sodium; individualized potassium restricted only if serum $K^+ > 5.0\text{ mEq/L}$.
- **Meal Distribution Strategy:** High-biological value (HBV) protein prioritized at 50% of intake (egg white, poultry, tofu); carbohydrate and healthy fat energy density increased to spare protein from gluconeogenesis.

#### Protocol B: Gastrointestinal Low-FODMAP Protocol
- **Target Conditions:** Irritable Bowel Syndrome (IBS), post-infectious bowel dysfunction.
- **Phase 1: Strict Elimination (2–6 weeks):** Total restriction of Fermentable Oligosaccharides (fructans, GOS), Disaccharides (lactose), Monosaccharides (excess fructose), and Polyols (sorbitol, mannitol).
- **Phase 2: Systematic Reintroduction (6–8 weeks):** Testing individual FODMAP groups in stepped doses over 3-day challenges with 2-day washout periods.
- **Phase 3: Long-term Personalization:** Integrating tolerated FODMAP groups back into a diverse diet to support colonic microbial diversity while maintaining symptom control.

#### Protocol C: Anti-Hypertensive DASH & Cardiac Mediterranean Diet
- **Nutrient Targets:** $<2,000\text{ mg/day}$ sodium; $4,700\text{ mg/day}$ dietary potassium; $1,200\text{ mg/day}$ calcium; $500\text{ mg/day}$ magnesium; $<7\%$ energy from saturated fatty acids.
- **Food Pattern:** 4–5 servings vegetables/day; 4–5 servings fruit/day; 2–3 servings non-fat dairy/day; 6–8 servings whole grains/day; weekly legume and nut servings.

#### Protocol D: Modified Consistency Dysphagia Diet (IDDSI Framework)
- Standardized 8-level scale (Levels 0–7) bridging fluid thickness (Thin, Mildly Thick, Moderately Thick, Extremely Thick) to solid food texture (Liquidised, Pureed, Minced & Moist, Soft & Bite-Sized, Regular).

---

### Domain 6: Interactive Clinical Case Studies & Decision Trees

#### Case Study 1: Complex Diabetic Nephropathy
- **Patient Profile:** 58-year-old male, T2D for 14 years, Hypertension, CKD Stage 4 (eGFR $26\text{ mL/min/1.73m}^2$, Serum Creatinine $2.6\text{ mg/dL}$, $K^+ 5.3\text{ mEq/L}$, Serum Phosphorus $5.2\text{ mg/dL}$, $HbA1c 8.4\%$, Weight 82 kg, Height 172 cm).
- **Clinical Decision Tasks:**
  1. Determine appropriate protein ceiling ($0.60\text{ g/kg} = 49\text{ g/day}$).
  2. Formulate calorie goal to prevent lean mass loss ($30\text{ kcal/kg} = 2,460\text{ kcal/day}$).
  3. Formulate low-potassium ($<2,000\text{ mg}$) and low-phosphorus ($<800\text{ mg}$) meal plan using phosphate binders taken with first bite of protein meals.
  4. Balance carbohydrate consistency across meals to prevent hypoglycemia with reduced renal insulin clearance.

#### Case Study 2: Geriatric Sarcopenia & Pressure Injury Post-Fracture
- **Patient Profile:** 76-year-old female, 3 weeks post-femoral neck fracture surgery, Stage III sacral pressure ulcer, EWGSOP2-confirmed severe sarcopenia (low grip strength and low appendicular skeletal muscle mass index). Weight 48 kg (down from 54 kg 3 months ago, 11% unintentional loss), Albumin 2.8 g/dL, hs-CRP 24 mg/L.
- **Clinical Decision Tasks:**
  1. Recognize catabolic inflammation with unblunted nitrogen loss.
  2. Prescribe elevated protein ($1.5\text{ g/kg/day} = 72\text{ g/day}$) distributed into three $\ge 25\text{ g}$ pulses with $\ge 3.0\text{ g}$ leucine per meal to exceed the aged myocyte anabolic resistance threshold.
  3. Include specialized wound healing supplement containing L-arginine, zinc, and ascorbic acid per NPIAP/EPUAP guidelines.

---

### Domain 7: Cross-Curricular Theory-to-Practice Mapping Matrix

| Practical Dietetics Module | Core Clinical Skills | Grounding Chapter in Science Textbook | Underlying Biochemical / Physiological Mechanism |
|:---|:---|:---|:---|
| **M1: Caloric & BMR Formulation** | Mifflin, Harris-Benedict, stress factors | **Chapter 01** (*Energy Balance & TDEE*) | First law of thermodynamics, doubly labeled water, organ metabolic rates |
| **M2: Carbohydrate & Glycemic Planning** | Diabetic exchanges, glycemic load | **Chapter 03** (*Carbohydrate Quality & GI*) | Amylose/amylopectin ratio, alpha-glucosidase kinetics, postprandial glucose flux |
| **M3: Fiber & Prebiotic Prescription** | Viscous & fermentable fiber dosing | **Chapter 04** (*Dietary Fiber & SCFA*) | Cecal anaerobic fermentation, butyrate/acetate/propionate GPR41/43 signaling |
| **M4: Lipid-Lowering Meal Plans** | SFA substitution, phytosterols | **Chapter 05** (*Dietary Lipids & PUFA*) | LDL-receptor clearance, SREBP-2 transcription, ApoB subendothelial retention |
| **M5: Protein Quality & Dialysis Diets** | DIAAS scoring, nitrogen balance | **Chapter 06** (*Protein Quality & DIAAS*) | Ileal amino acid digestibility, leucine mTORC1 activation, obligatory N loss |
| **M6: Appetite & Weight Management** | Volume eating, protein leverage | **Chapter 07** (*Satiety Neuroendocrinology*) | Arcuate nucleus POMC/NPY circuits, GLP-1, PYY, ghrelin pulsatility |
| **M7: Fluid & Electrolyte Balancing** | Sodium/potassium DASH titration | **Chapter 08** (*Cellular Hydration*) | Osmotic pressure, Na+/K+-ATPase, renin-angiotensin-aldosterone axis |
| **M8: Osteoporosis Meal Formulations** | Ca/P balance, Vitamin D timing | **Chapter 12** (*Macrominerals & Bone*) | Hydroxyapatite remodeling, osteoblast/osteoclast coupling, PTH feedback |
| **M9: Iron Deficiency Protocol** | Alternate-day dosing, ascorbic acid | **Chapter 13** (*Iron Biology & Hepcidin*) | Ferroportin degradation by hepcidin, DMT1 transport, gastric acid reduction |
| **M10: Low-FODMAP Clinical Delivery** | 3-phase elimination & reintroduction | **Chapter 21** (*MASLD, IBD & Gut Disorders*) | Osmotic water shift, colonic bacterial gas production, visceral hypersensitivity |
| **M11: Renal Non-Dialysis MNT** | 0.6 g/kg protein, phosphate binding | **Chapter 20** (*Renal Nutrition & CKD*) | Glomerular hyperfiltration, urea clearance, Klotho-FGF23 mineral toxicity |
| **M12: Enteral & TPN Prescription** | Tube-feed formulas, refeeding rules | **Chapter 22** (*Clinical Malnutrition*) | Starvation-to-fed surge, insulin-mediated hypophosphatemia, thiamine depletion |
| **M13: Cancer Cachexia Protocol** | High-protein anti-inflammatory MNT | **Chapter 24** (*Oncology Nutrition*) | Warburg aerobic glycolysis, PIF proteolysis, EPA cytokine suppression |
| **M14: Nutrigenomic Counseling** | Interpreting MTHFR, APOE evidence | **Chapter 27** (*Precision Nutrigenomics*) | Single nucleotide polymorphisms, gene-nutrient interactions, ethical boundaries |

---

## 3. Computational Architecture for Clinical Calculation Engines

All mathematical formulas in the future dietetics application must be implemented as **pure, deterministic, independently testable TypeScript functions** in a dedicated service module (`src/services/dieteticsCalculator.ts`):

### 3.1 Design Rules:
1. **Zero Hallucination Guarantee:** Equations must be strictly sourced from peer-reviewed literature (e.g., Mifflin et al. 1990, KDOQI 2020, KDIGO 2024).
2. **Explicit Bounds Validation:** Validate all physiological inputs (e.g., age $18\text{--}120\text{ years}$, weight $25\text{--}350\text{ kg}$, height $100\text{--}250\text{ cm}$, eGFR $1\text{--}150\text{ mL/min}$).
3. **Safety Threshold Warnings:**
   - Flag potential **Refeeding Syndrome Risk** if patient has BMI $< 16\text{ kg/m}^2$, unintentional weight loss $>15\%$ in 3–6 months, or little to no nutrition for $>10\text{ days}$ (NICE 2006 criteria).
   - Flag **Severe Sarcopenia Warning** if protein prescription falls below $1.0\text{ g/kg/day}$ in an elderly patient without severe CKD.
   - Flag **Hyperkalemia Caution** if potassium intake exceeds $2,000\text{ mg/day}$ in eGFR $< 30\text{ mL/min}$.
4. **Transparent Uncertainty Disclaimers:** Display clear clinical notes indicating that predictive equations possess standard estimation errors ($\pm 10\text{--}15\%$) and indirect calorimetry remains the reference standard when available.

---

## 4. Summary & Implementation Transition

The architecture documented here ensures that:
- The existing 27-chapter **Human Nutrition Science** textbook remains focused on deep, rigorous biomedical mechanisms.
- The future **Practical Diet Planning & Therapeutic Dietetics** book has an authoritative, clinically grounded curriculum plan ready for implementation in subsequent release cycles.
- Every practical dietetics calculation, exchange list, and case study will be tied back to its foundational biochemical mechanisms in the Global Health Knowledge Hub.
