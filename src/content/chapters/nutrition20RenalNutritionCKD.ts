import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const renalRefs = [
  {
    id: 'kdigo-kidney-int-ckd-guidelines',
    authors: 'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group',
    title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
    organization: 'Kidney International',
    year: 2024,
    url: 'https://doi.org/10.1016/j.kint.2023.10.018',
    doi: '10.1016/j.kint.2023.10.018',
  },
  {
    id: 'brenner-nejm-hyperfiltration',
    authors: 'Barry M. Brenner, Timothy W. Meyer, Thomas H. Hostetter',
    title: 'Dietary protein intake and the progressive nature of kidney disease',
    organization: 'The New England Journal of Medicine',
    year: 1982,
    url: 'https://doi.org/10.1056/NEJM198209093071104',
    doi: '10.1056/NEJM198209093071104',
  },
  {
    id: 'kalantar-nejm-ckd-nutrition',
    authors: 'Kamyar Kalantar-Zadeh, Denis Fouque',
    title: 'Nutritional Management of Chronic Kidney Disease',
    organization: 'The New England Journal of Medicine',
    year: 2017,
    url: 'https://doi.org/10.1056/NEJMra1700312',
    doi: '10.1056/NEJMra1700312',
  },
  {
    id: 'gutierrez-jasn-fgf23-ckd',
    authors: 'Orlando Gutierrez et al.',
    title: 'Fibroblast growth factor-23 mitigates hyperphosphatemia but accentuates calcitriol deficiency in chronic kidney disease',
    organization: 'Journal of the American Society of Nephrology',
    year: 2005,
    url: 'https://doi.org/10.1681/ASN.2005010052',
    doi: '10.1681/ASN.2005010052',
  },
  {
    id: 'carrero-jrn-pew-consensus',
    authors: 'Juan Jesus Carrero et al.',
    title: 'Etiology of the protein-energy wasting syndrome in chronic kidney disease: a consensus statement from the International Society of Renal Nutrition and Metabolism (ISRNM)',
    organization: 'Journal of Renal Nutrition',
    year: 2013,
    url: 'https://doi.org/10.1053/j.jrn.2013.01.001',
    doi: '10.1053/j.jrn.2013.01.001',
  },
  {
    id: 'palmer-ajkd-potassium-homeostasis',
    authors: 'Biff F. Palmer, Deborah J. Clegg',
    title: 'Physiology and Pathophysiology of Potassium Homeostasis: Core Curriculum 2019',
    organization: 'American Journal of Kidney Diseases',
    year: 2019,
    url: 'https://doi.org/10.1053/j.ajkd.2019.03.427',
    doi: '10.1053/j.ajkd.2019.03.427',
  },
]

export const nutrition20RenalNutritionCKDLesson: LessonTopic = {
  id: 'topic.nutrition.renal-nutrition-ckd-mnt',
  slug: 'renal-nutrition-ckd-mnt',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '20 · Renal Nutrition: Chronic Kidney Disease & Glomerular Filtration',
    '২০ · রেনাল নিউট্রিশন: ক্রনিক কিডনি ডিজিজ ও গ্লোমেরুলার পরিস্রাবণ'
  ),
  summary: l(
    'Pathophysiological nephrology and clinical dietetics across the chronic kidney disease continuum: Brenner glomerular hyperfiltration dynamics, staged dietary protein restriction versus dialytic hypercatabolism, the osteocyte FGF23-Klotho-PTH phosphate mineral axis, and cardiac-protective potassium homeostasis.',
    'কিডনি রোগের আণবিক শারীরবৃত্ত ও আধুনিক রেনাল ডায়েটেটিক্স: ব্রেনারের গ্লোমেরুলার অতি-পরিস্রাবণ তত্ত্ব, ডায়ালাইসিস-পূর্ববর্তী প্রোটিন নিয়ন্ত্রণ বনাম ডায়ালাইসিসের অতিরিক্ত প্রোটিন চাহিদা, অস্টিওসাইট এফজিএফ২৩-ক্লথো-পিটিএইচ ফসফেট চক্র এবং হৃদরোগ প্রতিরোধে পটাশিয়াম ব্যবস্থাপনা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Analyze the Brenner hypothesis of glomerular hyperfiltration: how dietary protein modulates afferent arteriolar tone and how staged protein restriction preserves remnant nephrons in CKD 3–5.',
      'ব্রেনারের গ্লোমেরুলার অতি-পরিস্রাবণ তত্ত্ব: কীভাবে খাদ্যের প্রোটিন কিডনির সূক্ষ্ম ধমনি প্রসারিত করে চাপ বাড়ায় এবং প্রোটিন নিয়ন্ত্রণ কীভাবে কিডনি ধ্বংস ধীর করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Contrast nutritional requirements between non-dialysis CKD (0.55–0.60 g/kg/day) and maintenance hemodialysis (1.0–1.2 g/kg/day) based on dialytic amino acid clearance and protein-energy wasting (PEW).',
      'ডায়ালাইসিস-পূর্ববর্তী কিডনি রোগীর প্রোটিন নিয়ন্ত্রণ (০.৫৫-০.৬০ গ্রাম/কেজি) এবং ডায়ালাইসিস রোগীদের উচ্চ প্রোটিন চাহিদার (১.০-১.২ গ্রাম/কেজি) বৈজ্ঞানিক পার্থক্য বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Deconstruct the FGF23-Klotho-PTH-Calcitriol axis: osteocyte phosphate sensing, NaPi-IIa cotransporter suppression, CYP27B1 inhibition, vascular calcification, and organic versus inorganic additive phosphate bioavailability.',
      'এফজিএফ২৩-ক্লথো-পিটিএইচ-ক্যালসিট্রিওল হরমোনীয় অক্ষ: ফসফেট সেন্সিং, ভিটামিন ডি নিষ্ক্রিয়করণ, রক্তনালিতে ক্যালসিয়াম জমা এবং কৃত্রিম ফসফেটের বিপদ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Formulate evidence-based clinical dietetic interventions: KDIGO guideline-directed sodium and potassium prescriptions, culinary leaching techniques, and non-calcium phosphate binder utilization.',
      'প্রমাণভিত্তিক ক্লিনিক্যাল রেনাল পুষ্টি পরিকল্পনা: কেডিআইজিও নির্দেশিত সোডিয়াম ও পটাশিয়াম সীমা, রান্নার বিশেষ পদ্ধতি (Leaching) এবং ফসফেট বাইন্ডারের সঠিক প্রয়োগ।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.protein-quality-diaas-nitrogen-balance', 'topic.nutrition.macrominerals-bone-calcium-magnesium'],
  relatedTopicIds: ['topic.metabolism.amino-acid-catabolism-urea', 'topic.metabolism.micronutrients-cofactors'],
  references: renalRefs,
  evidenceBySection: {
    introduction: ['kdigo-kidney-int-ckd-guidelines', 'brenner-nejm-hyperfiltration'],
    structure: ['brenner-nejm-hyperfiltration', 'kalantar-nejm-ckd-nutrition'],
    mechanism: ['kalantar-nejm-ckd-nutrition', 'gutierrez-jasn-fgf23-ckd'],
    integration: ['gutierrez-jasn-fgf23-ckd', 'carrero-jrn-pew-consensus'],
    practice: ['carrero-jrn-pew-consensus', 'palmer-ajkd-potassium-homeostasis'],
    takeaways: ['kdigo-kidney-int-ckd-guidelines', 'palmer-ajkd-potassium-homeostasis'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Nephron Unit & Glomerular Filtration Mechanics', '১. নেফ্রন গঠন ও গ্লোমেরুলার পরিস্রাবণ শারীরতত্ত্ব'), sectionId: 'introduction' },
      { id: 'sec-brenner', label: l('2. The Brenner Hypothesis: Glomerular Hyperfiltration', '২. ব্রেনার তত্ত্ব: গ্লোমেরুলার অতি-পরিস্রাবণ ও প্রোটিন'), sectionId: 'structure' },
      { id: 'sec-fgf23', label: l('3. The FGF23-Klotho-PTH Mineral Bone Axis', '৩. এফজিএফ২৩-ক্লথো-পিটিএইচ ফসফেট খনিজ অক্ষ'), sectionId: 'mechanism' },
      { id: 'sec-pew', label: l('4. Hemodialysis Catabolism & Protein-Energy Wasting', '৪. ডায়ালাইসিস ক্ষয় ও প্রোটিন-এনার্জি ওয়েস্টিং'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Clinical Potassium Leaching & Phosphate Binders', '৫. পটাশিয়াম দূরীকরণ (লিচিং) ও ফসফেট বাইন্ডার'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Glomerular Hyperfiltration (Brenner Hypothesis)', 'গ্লোমেরুলার অতি-পরিস্রাবণ (ব্রেনার তত্ত্ব)'),
        definition: l(
          'The hemodynamic elevation of intraglomerular capillary hydrostatic pressure (P_gc) driven by afferent arteriolar vasodilation, accelerating glomerulosclerosis and nephron loss.',
          'খাবারের অতিরিক্ত প্রোটিনের কারণে কিডনির সূক্ষ্ম রক্তনালির ভেতর চাপ বিপজ্জনকভাবে বেড়ে যাওয়া, যা অবশিষ্ট ভালো কিডনি কোষগুলোকে দ্রুত ধ্বংস করে দেয়।'
        ),
      },
      {
        term: l('Protein-Energy Wasting (PEW)', 'প্রোটিন-এনার্জি ওয়েস্টিং (PEW)'),
        definition: l(
          'A maladaptive state of systemic catabolism in advanced kidney disease characterized by progressive loss of skeletal muscle and fat stores, driven by inflammation and uremic toxins.',
          'জটিল কিডনি রোগীদের একটি মারাত্মক ক্ষয়িষ্ণু অবস্থা যেখানে রক্তে ইউরিয়া ও প্রদাহের বিষক্রিয়ায় রোগীর শরীরের সমস্ত মাংসপেশি শুকিয়ে যায়।'
        ),
      },
      {
        term: l('Fibroblast Growth Factor 23 (FGF23)', 'ফাইব্রোব্লাস্ট গ্রোথ ফ্যাক্টর ২৩ (FGF23)'),
        definition: l(
          'A phosphaturic hormone synthesized by bone osteocytes in response to dietary phosphorus loading, requiring renal alpha-Klotho to suppress proximal tubular phosphate reabsorption.',
          'হাড়ের কোষ থেকে ক্ষরিত একটি হরমোন যা কিডনিকে প্রস্রাব দিয়ে বাড়তি ফসফেট বের করতে বাধ্য করে কিন্তু একই সাথে সক্রিয় ভিটামিন ডি তৈরি বন্ধ করে দেয়।'
        ),
      },
      {
        term: l('Klotho Co-Receptor', 'ক্লথো কো-রিসেপ্টর'),
        definition: l(
          'A single-pass transmembrane protein expressed primarily in the distal and proximal renal tubules that complexes with FGFR1 to create high-affinity binding for FGF23.',
          'কিডনির কোষে অবস্থিত একটি অপরিহার্য প্রোটিন যা না থাকলে FGF23 হরমোন কাজ করতে পারে না; কিডনি নষ্ট হলে ক্লথো প্রোটিনও হারিয়ে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Nutritional Prescription for Stage 4 CKD vs Hemodialysis Transition', 'স্টেজ ৪ কিডনি রোগী বনাম ডায়ালাইসিস রোগীর পুষ্টি ব্যবস্থাপনার ক্লিনিক্যাল পার্থক্য'),
        steps: [
          l(
            'Step 1: Baseline Evaluation of Stage 4 CKD: A 64-year-old male with diabetic nephropathy presents with eGFR 22 mL/min/1.73m2, serum creatinine 3.1 mg/dL, urinary albumin-to-creatinine ratio (UACR) 1,420 mg/g, serum potassium 5.1 mmol/L, serum phosphorus 4.9 mg/dL (mildly elevated), and serum FGF23 210 pg/mL (elevated).',
            'ধাপ ১: স্টেজ ৪ কিডনি রোগীর মূল্যায়ন: ৬৪ বছর বয়সী ডায়াবেটিক রোগীর কিডনির কার্যক্ষমতা ২২%-এ নেমে এসেছে (eGFR 22)। প্রস্রাবে প্রচুর প্রোটিন যাচ্ছে (UACR ১৪২০), রক্তে পটাশিয়াম ৫.১ এবং ক্ষতিকর ফসফেট ও FGF23 হরমোন বেড়ে গেছে।'
          ),
          l(
            'Step 2: Non-Dialysis Conservative Dietary Prescription: In accordance with KDIGO guidelines, initiate a low-protein diet at 0.58 g/kg body weight/day (~42 g/day for his 72 kg body weight), ensuring >=50% high biological value protein. Restrict dietary sodium to <2,000 mg/day (<5 g salt) to maximize renin-angiotensin blockade, and cap phosphorus at 800 mg/day with strict elimination of all inorganic phosphate food additives (E-numbers 338-343).',
            'ধাপ ২: ডায়ালাইসিস-পূর্ববর্তী রক্ষণশীল খাদ্যতালিকা: কিডনির রক্তনালির চাপ কমাতে প্রোটিন কমিয়ে দিনে ০.৫৮ গ্রাম/কেজি (দিনে মাত্র ৪২ গ্রাম) করা হলো। লবণ দিনে ৫ গ্রামের নিচে এবং ফসফেট ৮০০ মিলিগ্রামে সীমিত করে সব ধরনের প্যাকেটজাত খাবার বন্ধ করা হলো।'
          ),
          l(
            'Step 3: Disease Progression to ESRD & Hemodialysis Initiation: Two years later, the patient progresses to end-stage renal disease (eGFR 7 mL/min/1.73m2, uremic symptoms) and begins maintenance hemodialysis (4 hours thrice weekly). On dialysis, each treatment session removes 8 to 12 g of free amino acids, and the bioincompatible dialyzer membrane triggers sterile systemic inflammation and intense skeletal muscle proteolysis.',
            'ধাপ ৩: ডায়ালাইসিস শুরু ও শারীরিক পরিবর্তন: দুই বছর পর কিডনি প্রায় অচল হয়ে ডায়ালাইসিস শুরু হলো (সপ্তাহে ৩ দিন)। ডায়ালাইসিসের সময় রক্ত থেকে প্রতিবার ৮-১২ গ্রাম দরকারি অ্যামিনো অ্যাসিড মেশিন দিয়ে ধুয়ে বেরিয়ে যায় এবং শরীর দ্রুত পেশি ভাঙতে থাকে।'
          ),
          l(
            'Step 4: Paradigm Shift to High-Protein Dialytic Diet: Immediately reverse the protein restriction: elevate dietary protein to 1.2 g/kg/day (~86 g/day, double his pre-dialysis intake) to prevent protein-energy wasting (PEW). Initiate non-calcium phosphate binders (sucroferric oxyhydroxide or sevelamer carbonate) with all meals to bind intestinal phosphate, maintaining serum phosphorus between 3.5 and 5.5 mg/dL.',
            'ধাপ ৪: ডায়ালাইসিসে উচ্চ প্রোটিন নিশ্চিতকরণ: ডায়ালাইসিস শুরু হতেই খাদ্যতালিকা ১৮০ ডিগ্রি পরিবর্তন করে প্রোটিন বাড়িয়ে দ্বিগুণ (১.২ গ্রাম/কেজি, দিনে ৮৬ গ্রাম) করা হলো পেশিক্ষয় রোধে। এর সাথে খাবারের ফসফেট রক্তে যাওয়া ঠেকাতে ফসফেট বাইন্ডার ওষুধ চালু করা হলো।'
          ),
        ],
        conclusion: l(
          'Protein restriction preserves residual nephrons in non-dialysis CKD by lowering intraglomerular pressure, but must be aggressively reversed upon entering hemodialysis to prevent fatal protein-energy wasting.',
          'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনি দীর্ঘদিন ভালো থাকে, কিন্তু ডায়ালাইসিস শুরু হওয়ার সাথে সাথেই প্রোটিন বাড়িয়ে দ্বিগুণ করতে হয় যাতে রোগীর পেশি ও জীবন রক্ষা পায়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does dietary protein restriction lower intraglomerular capillary hydrostatic pressure (P_gc) and reduce proteinuria in chronic kidney disease?',
          'খাবারে প্রোটিন কমালে তা কীভাবে কিডনির ভেতরের রক্তনালির অতিরিক্ত চাপ (P_gc) কমায় এবং প্রস্রাবে আমিষ বা অ্যালবুমিন নির্গমন হ্রাস করে?'
        ),
        answer: l(
          'High protein ingestion floods the circulation with amino acids, triggering renal synthesis of glucagon, IGF-1, and prostanoids, which selectively dilate the afferent (pre-glomerular) arteriole while the efferent (post-glomerular) arteriole maintains vascular tone. This disproportionate inflow increases intraglomerular capillary hydrostatic pressure (P_gc) from its normal ~45 mmHg to >65 mmHg, forcing macromolecules across the glomerular filtration barrier (proteinuria) and causing hemodynamic mechanical strain that detaches podocytes. Restricting dietary protein to 0.55–0.60 g/kg/day withdraws these vasodilatory signals, restoring afferent arteriolar resistance, lowering P_gc, normalizing filtration fraction, and protecting remnant nephrons from progressive glomerulosclerosis.',
          'অতিরিক্ত প্রোটিন খেলে রক্তে অ্যামিনো অ্যাসিড ও গ্লুকাগন বেড়ে যায়, যা কিডনির রক্ত প্রবেশকারী সূক্ষ্ম ধমনিকে (Afferent arteriole) অতিরিক্ত প্রসারিত করে দেয়। এর ফলে কিডনির ফিল্টারের ভেতর রক্তের চাপ স্বাভাবিক ৪৫ থেকে বেড়ে ৬৫ মিলিমিটারের ওপরে উঠে যায়। এই প্রবল চাপে ফিল্টারের সূক্ষ্ম পর্দা ফেটে প্রস্রাব দিয়ে প্রোটিন বেরিয়ে যেতে থাকে (Proteinuria) এবং কিডনির ফিল্টার কোষগুলো ছিঁড়ে মরে যায়। প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজিতে রাখলে ধমনি সংকুচিত হয়ে ভেতরের চাপ কমে স্বাভাবিক হয়, ফলে প্রস্রাবে প্রোটিন যাওয়া বন্ধ হয় এবং অবশিষ্ট ভালো কিডনি রক্ষা পায়।'
        ),
      },
      {
        question: l(
          'What is the physiological difference between organic phosphorus in plant foods versus inorganic phosphate food additives regarding intestinal absorption efficiency in CKD patients?',
          'উদ্ভিজ্জ খাবারের প্রাকৃতিক ফসফেট এবং প্যাকেটজাত খাবারের রাসায়নিক ফসফেটের (Phosphate Additives) মানবদেহে শোষণের হারে কী মৌলিক পার্থক্য রয়েছে?'
        ),
        answer: l(
          'Organic phosphorus in unrefined plant foods (grains, nuts, legumes) is structurally locked within phytate (myo-inositol 1,2,6-hexakisphosphate) complexes. Humans lack the endogenous brush-border phytase enzyme required to hydrolyze these ester bonds; consequently, gastrointestinal bioavailability of plant-based phosphorus is very low (only 20% to 40% is absorbed). In sharp contrast, inorganic phosphate additives (e.g., sodium phosphate, potassium polyphosphate, phosphoric acid used as preservatives and emulsifiers in processed meats, sodas, and baked goods) exist as free, unbound salts. These water-soluble inorganic salts do not require enzymatic cleavage and are passively absorbed across enterocyte paracellular junctions with nearly 90% to 100% efficiency, creating sudden, severe serum phosphate surges that accelerate FGF23 elevation and arterial medial calcification.',
          'উদ্ভিজ্জ খাবার যেমন ডাল, বাদাম ও দানাদার শস্যের ফসফেট প্রাকৃতিকভাবে ফাইটেট (Phytate) নামক শক্ত রাসায়নিক যৌগে বন্দি থাকে। মানুষের অন্ত্রে এই ফাইটেট ভাঙার কোনো এনজাইম নেই; ফলে এই ফসফেটের মাত্র ২০-৪০% শরীরে শোষিত হয় এবং বাকিটা মলের সাথে বেরিয়ে যায়। অপরদিকে প্যাকেটজাত খাবার, কোমল পানীয় ও প্রক্রিয়াজাত মাংসে মেশানো কৃত্রিম রাসায়নিক ফসফেট কোনো বন্ধনে আবদ্ধ থাকে না; পানিতে গোলার সাথে সাথে তা পুরোপুরি মুক্ত হয়ে যায়। ফলে এই বিষাক্ত ফসফেটের ৯০ থেকে ১০০ শতাংশই নিমেষের মধ্যে রক্তে ঢুকে কিডনিকে ধ্বংস করে এবং রক্তনালিতে চুন বা ক্যালসিয়াম জমিয়ে হার্ট অ্যাটাকের ঝুঁকি বহুগুণ বাড়িয়ে দেয়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'renal-hyperfiltration-fgf23-pew-axis',
    title: l(
      'Renal Glomerular Hyperfiltration & The FGF23-Klotho Phosphate Axis',
      'গ্লোমেরুলার অতি-পরিস্রাবণ ও এফজিএফ২৩-ক্লথো ফসফেট চক্র'
    ),
    description: l(
      'Interactive architecture of Brenner hyperfiltration, osteocyte FGF23 secretion, staged protein modulation, and dialytic catabolic wasting.',
      'ব্রেনারের অতি-পরিস্রাবণ তত্ত্ব, অস্টিওসাইটের এফজিএফ২৩ নিঃসরণ, প্রোটিন বণ্টন এবং ডায়ালাইসিস অপচয়ের ইন্টারঅ্যাক্টিভ চিত্র।'
    ),
    disclaimer: l(
      'Educational nephrology simulation; renal dietary prescriptions require strict clinical nephrologist oversight.',
      'কিডনি রোগের শিক্ষামূলক সিমুলেশন; রেনাল ডায়েটে নেফ্রোলজিস্টের প্রত্যক্ষ তত্ত্বাবধান জরুরি।'
    ),
    svgType: 'renal-hyperfiltration',
    items: [
      {
        id: 'node-hyperfiltration',
        label: l('Afferent Vasodilation', 'ধমনির স্ফীতি ও চাপ বৃদ্ধি'),
        description: l(
          'Dietary amino acid overload triggers humoral glucagon and IGF-1, dilating afferent arterioles and elevating glomerular capillary pressure (P_gc >65 mmHg).',
          'অতিরিক্ত প্রোটিনের কারণে কিডনির সূক্ষ্ম ধমনি প্রসারিত হয়ে ফিল্টারের ভেতরে রক্তচাপ বিপজ্জনকভাবে বাড়িয়ে দেয়।'
        ),
        details: l(
          'Amino acid influx dilates afferent arterioles, transmitting systemic systolic pressure into the capillary tuft and detaching podocytes.',
          'অ্যামিনো অ্যাসিড কিডনির রক্তনালিকে প্রসারিত করে ফিল্টারের ভেতরের চাপ ৬৫ মিলিমিটারে তুলে দেয় যা ফিল্টার কোষ ছিঁড়ে ফেলে।'
        ),
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-proteinuria-fibrosis',
        label: l('Proteinuria & Fibrosis', 'প্রোটিন ক্ষরণ ও স্থায়ী ক্ষত'),
        description: l(
          'Elevated P_gc stretches podocytes, forcing albumin leakage; tubular overload triggers TGF-beta-1 and irreversible tubulointerstitial fibrosis.',
          'উচ্চ চাপের কারণে প্রস্রাবে প্রোটিন নির্গত হয় এবং কিডনির কোষ বিষাক্ত হয়ে চিরতরে ধ্বংস ও নষ্ট হয়ে যায়।'
        ),
        details: l(
          'Tubular albumin reabsorption overload stimulates NF-kappa-B and TGF-beta-1, driving fibroblast collagen deposition and nephron dropout.',
          'কিডনির নালিতে প্রোটিনের ওভারলোড স্থায়ী ক্ষত (Fibrosis) তৈরি করে অবশিষ্ট ভালো নেফ্রনগুলোকে মেরে ফেলে।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-fgf23-mineral',
        label: l('FGF23 Osteocyte Axis', 'FGF23 ফসফেট সংকেত'),
        description: l(
          'Early phosphate retention drives osteocyte FGF23 secretion; FGF23 binds Klotho to suppress NaPi-IIa, but suppresses CYP27B1, causing calcitriol deficiency and PTH hypersecretion.',
          'ফসফেট বাড়ার ভয়ে হাড় থেকে FGF23 ক্ষরিত হয়; এটি ফসফেট দূর করলেও ভিটামিন ডি বন্ধ করে প্যারাথাইরয়েড হরমোন বাড়িয়ে রক্তনালি পাথরে রূপান্তর করে।'
        ),
        details: l(
          'FGF23 downregulates renal 1-alpha-hydroxylase, depleting calcitriol and triggering secondary hyperparathyroidism and arterial calcification.',
          'FGF23 ভিটামিন ডি তৈরি বন্ধ করে PTH হরমোন বাড়িয়ে দেয় যা হাড়ের ক্যালসিয়াম গলিয়ে রক্তনালির প্রাচীরে জমা করে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-pew-dialysis',
        label: l('PEW Dialytic Catabolism', 'ডায়ালাইসিস পেশিক্ষয়'),
        description: l(
          'Hemodialysis clears 8–12 g amino acids per session; membrane inflammation drives muscle proteolysis, mandating 1.2 g/kg/day protein intake.',
          'ডায়ালাইসিসের সময় রক্ত থেকে দরকারি প্রোটিন নষ্ট হয়ে যায়, তাই পেশিক্ষয় রোধে প্রোটিন দ্বিগুণ বাড়িয়ে ১.২ গ্রাম/কেজি করতে হয়।'
        ),
        details: l(
          'Dialytic amino acid losses and cytokine-induced muscle proteolysis drive Protein-Energy Wasting, reversed by high-protein intake (1.0-1.2 g/kg/d).',
          'ডায়ালাইসিসের কারণে প্রোটিন অপচয় ও পেশিক্ষয় ঘটে, যা প্রতিরোধ করতে প্রতিদিন ১.০-১.২ গ্রাম/কেজি প্রোটিন গ্রহণ বাধ্যতামূলক।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-potassium-leaching',
        label: l('Potassium & Leaching', 'পটাশিয়াম ও রান্নার পদ্ধতি'),
        description: l(
          'Declining tubular ROMK excretion risks fatal hyperkalemic cardiac arrest; wet-leaching of vegetables extracts up to 70% of potassium.',
          'কিডনি প্রস্রাব দিয়ে পটাশিয়াম ফেলতে পারে না বলে হার্ট অ্যাটাকের ঝুঁকি থাকে; সবজি সেদ্ধ করে পানি ফেলে দিলে ৭০% পটাশিয়াম দূর হয়।'
        ),
        details: l(
          'Hyperkalemia hypopolarizes cardiac resting potential; culinary leaching (boiling finely sliced tubers for 15 min) removes 50-70% of potassium.',
          'রক্তে পটাশিয়াম বাড়লে হার্টবিট বন্ধ হওয়ার ঝুঁকি থাকে; সবজি ছোট টুকরো করে সেদ্ধ করে পানি ফেলে দিলে ৫০-৭০% পটাশিয়াম দূর হয়।'
        ),
        color: '#10b981',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Kidney Filtration Unit: Nephrons & Waste Excretion', '১. কিডনির ছাঁকনি ব্যবস্থা: নেফ্রন ও বর্জ্য নির্গমন'),
          paragraphs: [
            l(
              'Chronic kidney disease (CKD) is characterized by a gradual, irreversible decline in renal function, defined clinically as an estimated glomerular filtration rate (eGFR) below 60 mL/min/1.73m2 lasting for more than 3 months [1]. The kidneys comprise approximately two million microscopic filtering units called nephrons [1, 2].',
              'ক্রনিক কিডনি ডিজিজ (CKD) হলো কিডনির কার্যক্ষমতা ধীরে ধীরে ও স্থায়ীভাবে হ্রাস পাওয়া, যা চিকিৎসাবিজ্ঞানে কিডনির ফিল্টারিং ক্ষমতা (eGFR) প্রতি মিনিটে ৬০ মিলিলিটারের নিচে টানা ৩ মাসের বেশি সময় থাকা হিসেবে সংজ্ঞায়িত করা হয় [১]। মানুষের দুটি কিডনিতে প্রায় ২০ লাখ অতি সূক্ষ্ম ছাঁকনি বা ফিল্টার রয়েছে যাদের নেফ্রন (Nephron) বলা হয় [১, ২]।'
            ),
            l(
              'Each nephron contains a specialized capillary tuft termed the glomerulus, which filters metabolic wastes (urea, creatinine) out of the bloodstream while retaining essential blood cells and albumin [2]. When chronic hypertension or diabetes destroys nephrons, surviving remnant units undergo compensatory hyperfiltration, accelerating mechanical scarring and leading to end-stage renal disease (ESRD) [2, 3].',
              'প্রতিটি নেফ্রনের শুরুতে থাকে গ্লোমেরুলাস নামক রক্তনালির একটি পেঁচানো জালিকা, যা রক্ত থেকে ইউরিয়া ও ক্রিয়েটিনিন ছেঁকে ফেলে কিন্তু রক্তের মূল্যবান অ্যালবুমিন প্রোটিনকে রক্তে ধরে রাখে [২]। রোগাক্রান্ত অবস্থায় কিছু নেফ্রন নষ্ট হলে অবশিষ্ট নেফ্রনগুলোর ওপর বাড়তি চাপ পড়ে, যা সেগুলোকে দ্রুত পুড়িয়ে নষ্ট করে দেয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Brenner Hyperfiltration Hypothesis & Protein Restriction', '২. ব্রেনারের অতি-পরিস্রাবণ তত্ত্ব ও প্রোটিন নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Barry Brenner\'s landmark "hyperfiltration hypothesis" demonstrates that excessive dietary protein intake selectively dilates the afferent (inflow) arteriole of the glomerulus [2]. This transmits systemic blood pressure directly into the delicate capillary tuft, elevating intraglomerular pressure (P_gc) from ~45 mmHg to >65 mmHg [2].',
              'ব্যারি ব্রেনারের যুগান্তকারী "হাইপারফিল্ট্রেশন তত্ত্ব" প্রমাণ করে যে বেশি প্রোটিনযুক্ত খাবার খেলে কিডনির রক্ত প্রবেশকারী সূক্ষ্ম ধমনি অতিরিক্ত প্রসারিত হয়ে যায় [২]। এর ফলে ফিল্টারের ভেতরের রক্তচাপ ৪৫ থেকে বেড়ে ৬৫ মিলিমিটারের ওপরে উঠে যায় [২]।'
            ),
            l(
              'This elevated pressure tears filtration slit membranes, forcing albumin into the urine (proteinuria) and triggering tubulointerstitial fibrosis [2, 3]. In non-dialysis CKD Stages 3–5, KDIGO guidelines recommend a targeted low-protein diet (0.55–0.60 g/kg/day), which restores afferent arteriolar resistance, lowers P_gc, blunts proteinuria, and slows nephron loss [1, 3].',
              'এই প্রবল চাপে ফিল্টারের পর্দা ফেটে প্রস্রাবে প্রোটিন বেরিয়ে যায় এবং কিডনিতে স্থায়ী ক্ষত তৈরি হয় [২, ৩]। ডায়ালাইসিসের পূর্বে প্রোটিন কমিয়ে দিনে ০.৫৫-০.৬০ গ্রাম/কেজিতে আনলে ভেতরের চাপ কমে এবং ভালো কিডনি কোষগুলো বেঁচে থাকে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The FGF23-Klotho Phosphate & Vitamin D Mineral Axis', '৩. এফজিএফ২৩-ক্লথো ফসফেট ও ভিটামিন ডি খনিজ চক্র'),
          paragraphs: [
            l(
              'In early CKD, declining nephron mass impairs phosphate excretion [4]. In response, bone osteocytes secrete Fibroblast Growth Factor 23 (FGF23), which binds the renal co-receptor alpha-Klotho to suppress proximal tubular phosphate reabsorption, forcing surviving nephrons to excrete excess phosphate [4].',
              'কিডনি দুর্বল হতে শুরু করলে রক্তে ফসফেট বেড়ে যাওয়ার ভয়ে হাড়ের কোষ থেকে প্রচুর FGF23 হরমোন ক্ষরিত হয় [৪]। এই হরমোন কিডনিকে নির্দেশ দেয় প্রস্রাব দিয়ে বাড়তি সমস্ত ফসফেট দ্রুত বের করে দিতে [৪]।'
            ),
            l(
              'However, elevated FGF23 potently inhibits 1-alpha-hydroxylase (CYP27B1), shutting down the renal production of active calcitriol (1,25-(OH)2-D3) [4]. Calcitriol deficiency triggers secondary hyperparathyroidism (elevated PTH), which strips calcium from bones and precipitates calcium-phosphate crystals into arterial walls, driving vascular calcification [3, 4].',
              'কিন্তু এর মারাত্মক পার্শ্বপ্রতিক্রিয়া হলো: FGF23 সক্রিয় ভিটামিন ডি তৈরি পুরোপুরি বন্ধ করে দেয় [৪]। ভিটামিন ডি-র অভাবে PTH হরমোন বেড়ে গিয়ে হাড়ের ক্যালসিয়াম গলিয়ে রক্তনালির প্রাচীরে জমা করে রক্তনালিকে পাথরের মতো শক্ত করে ফেলে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Hemodialysis Hypercatabolism & Protein-Energy Wasting', '৪. ডায়ালাইসিসের তীব্র ক্ষয় ও প্রোটিনের চাহিদা বৃদ্ধি'),
          paragraphs: [
            l(
              'When a patient initiates maintenance hemodialysis, the nutritional paradigm reverses completely [1, 5]. Each hemodialysis session strips 6 to 12 grams of free amino acids into the dialysate, and dialyzer membrane contact triggers sterile systemic inflammation and intense skeletal muscle breakdown [5].',
              'ডায়ালাইসিস শুরু হওয়ার সাথে সাথেই পুষ্টির নিয়ম ১৮০ ডিগ্রি ঘুরে যায় [১, ৫]। প্রতিবার ডায়ালাইসিসে রক্ত থেকে ৬ থেকে ১২ গ্রাম প্রোটিন নষ্ট হয় এবং প্রদাহের কারণে রোগীর শরীরের সমস্ত মাংসপেশি দ্রুত শুকিয়ে যেতে থাকে [৫]।'
            ),
            l(
              'To prevent the devastating syndrome of Protein-Energy Wasting (PEW), dialysis patients must double their protein intake to 1.0–1.2 g/kg/day of high biological value protein, accompanied by phosphate binders with meals [1, 5].',
              'এই মারাত্মক পেশিক্ষয় (PEW) রোধে ডায়ালাইসিস রোগীদের প্রোটিন দ্বিগুণ বাড়িয়ে দিনে ১.০ থেকে ১.২ গ্রাম/কেজি খাওয়া বাধ্যতামূলক [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Potassium Leaching & Dietary Mineral Management', '৫. পটাশিয়াম নিয়ন্ত্রণ ও সবজি সেদ্ধ করার পদ্ধতি'),
          paragraphs: [
            l(
              'In advanced kidney failure, the kidneys can no longer excrete potassium, risking fatal cardiac arrest when serum potassium exceeds 5.5 mmol/L [6]. Dietary potassium is managed through cooking techniques such as wet-leaching: finely slicing and boiling vegetables in large volumes of water for 15 minutes diffuses up to 50% to 70% of potassium into discarded water [6].',
              'কিডনি নষ্ট হলে শরীর আর প্রস্রাব দিয়ে পটাশিয়াম ফেলতে পারে না, যা রক্তে বেড়ে গেলে হার্টবিট হঠাৎ বন্ধ হয়ে মৃত্যুর ঝুঁকি থাকে [৬]। রান্নার সময় সবজি ছোট ছোট টুকরো করে ফুটন্ত পানিতে ১৫ মিনিট সেদ্ধ করে সেই পানি ফেলে দিলে ৫০-৭০% পটাশিয়াম দূর হয়ে খাবার নিরাপদ হয় [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Restrict protein in non-dialysis CKD to lower intraglomerular pressure, but increase protein aggressively on hemodialysis to halt PEW; avoid inorganic phosphate additives and manage potassium through culinary leaching [1, 5, 6].',
              'ডায়ালাইসিসের আগে প্রোটিন কমিয়ে কিডনির ফিল্টারের চাপ কমানো উচিত, কিন্তু ডায়ালাইসিস শুরু হলে পেশি বাঁচাতে প্রোটিন দ্বিগুণ বাড়াতে হয়; প্যাকেটজাত খাবারের ফসফেট বর্জন এবং সবজি সেদ্ধ করে পানি ফেলে পটাশিয়াম নিয়ন্ত্রণ জীবনরক্ষাকারী [১, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Glomerular Hemodynamics & Remnant Nephron Adaptation', '১. গ্লোমেরুলার রক্তগতিবিদ্যা ও অবশিষ্ট নেফ্রনের অভিযোজন'),
          paragraphs: [
            l(
              'Nephron loss in chronic kidney disease forces surviving units into compensatory hyperfiltration [2]. Humoral signals, including glucagon and IGF-1, selectively relax the afferent arteriole, transmitting elevated systemic systolic pressure into the capillary bed [2]. Glomerular capillary hydrostatic pressure (P_gc) rises past 65 mmHg, increasing filtration slit tension between podocyte pedicels [2, 3].',
              'কিছু নেফ্রন নষ্ট হলে অবশিষ্ট নেফ্রনগুলোর সূক্ষ্ম ধমনি প্রসারিত হয়ে ফিল্টারের ভেতরের রক্তচাপ ৬৫ মিলিমিটারের ওপরে উঠে যায় [২, ৩]। এই অতি-চাপের কারণে ফিল্টারের সূক্ষ্ম পর্দা ফেটে রক্ত থেকে অ্যালবুমিন প্রোটিন প্রস্রাবে নির্গত হতে শুরু করে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Staged Protein Restriction Mechanics (KDIGO Guidelines)', '২. পর্যায়ভিত্তিক প্রোটিন নিয়ন্ত্রণের মেকানিক্স (কেডিআইজিও নির্দেশিকা)'),
          paragraphs: [
            l(
              'Restricting protein to 0.55–0.60 g/kg/day in non-dialysis CKD Stages 3–5 reduces systemic amino acid delivery, restoring pre-glomerular afferent arteriolar vasoconstriction [1, 3]. Normalizing P_gc reduces hemodynamic shear stress on podocytes, blunts albuminuria, and significantly decelerates the annual rate of eGFR loss [1, 3].',
              'ডায়ালাইসিস-পূর্ববর্তী রোগীদের প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজিতে রাখলে ধমনি সংকুচিত হয়ে ভেতরের চাপ স্বাভাবিক হয়, ফলে প্রস্রাবে প্রোটিন যাওয়া বন্ধ হয় এবং অবশিষ্ট ভালো কিডনি রক্ষা পায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The Osteocyte FGF23-Klotho Coreceptor Signaling Complex', '৩. অস্টিওসাইট এফজিএফ২৩-ক্লথো রিসেপ্টর সংকেত জটিলতা'),
          paragraphs: [
            l(
              'In response to early phosphate retention, osteocytes secrete FGF23, which complexes with alpha-Klotho and FGFR1c on proximal tubular cells [4]. Downstream signaling triggers the retrieval and lysosomal destruction of apical NaPi-IIa cotransporters, enhancing phosphaturia [4]. Simultaneously, FGF23 suppresses proximal tubular CYP27B1 and stimulates CYP24A1 catabolism, depleting circulating calcitriol and unleashing autonomous parathyroid hormone secretion [4].',
              'ফসফেট বৃদ্ধির প্রতিক্রিয়ায় হাড় থেকে FGF23 ক্ষরিত হয়ে ক্লথো রিসেপ্টরের মাধ্যমে কিডনি দিয়ে ফসফেট দূর করে ঠিকই, কিন্তু একই সাথে সক্রিয় ভিটামিন ডি তৈরি পুরোপুরি বন্ধ করে দেয় [৪]। ভিটামিন ডি না থাকায় প্যারাথাইরয়েড গ্রন্থি অবাধে PTH হরমোন নিঃসরণ করে রক্তনালিতে ক্যালসিয়াম জমায় [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Dialytic Protein-Energy Wasting (PEW) & Catabolic Cytokines', '৪. ডায়ালাইসিসজনিত পেশিক্ষয় ও প্রদাহ সৃষ্টিকারী সাইটোকাইন'),
          paragraphs: [
            l(
              'Maintenance hemodialysis strips 6–12 g of free amino acids per 4-hour run [5]. Membrane bioincompatibility activates complement and monocytes, elevating IL-6 and TNF-alpha, which accelerate muscle proteolysis via the ubiquitin-proteasome pathway [5]. ESPEN and KDIGO guidelines mandate elevating protein to 1.0–1.2 g/kg/day to maintain nitrogen equilibrium [1, 5].',
              'ডায়ালাইসিসের সময় প্রতিবার ৬-১২ গ্রাম দরকারি প্রোটিন নষ্ট হয় এবং প্রদাহের কারণে তীব্র পেশিক্ষয় ঘটে [৫]। এই অবস্থা প্রতিরোধ করতে আন্তর্জাতিক নিয়মে ডায়ালাইসিস রোগীদের দিনে ১.০ থেকে ১.২ গ্রাম/কেজি প্রোটিন খাওয়া বাধ্যতামূলক করা হয়েছে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Organic vs Inorganic Phosphorus & Binder Pharmacology', '৫. প্রাকৃতিক বনাম কৃত্রিম ফসফেট ও বাইন্ডার ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Plant organic phosphorus is locked within phytate, exhibiting low bioavailability (20% to 40%), whereas inorganic phosphate food additives are absorbed near 100% efficiency [3]. When serum phosphorus exceeds 5.5 mg/dL, non-calcium phosphate binders (sevelamer carbonate, sucroferric oxyhydroxide) must be co-ingested with meals to trap luminal phosphate in feces [3].',
              'শাকসবজির প্রাকৃতিক ফসফেটের মাত্র ২০-৪০% শরীরে ঢোকে, কিন্তু প্যাকেটজাত খাবারের কৃত্রিম রাসায়নিক ফসফেটের প্রায় ১০০% রক্তে ঢুকে মারাত্মক ক্ষতি করে [৩]। খাবার নিয়ন্ত্রণের পাশাপাশি ডায়ালাইসিস রোগীদের খাবারের সাথে ফসফেট বাইন্ডার ওষুধ (যেমন সেভেলামার) খেতে হয় [৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Key Mechanistic Takeaways', '৬. প্রধান আণবিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Pre-dialysis protein restriction preserves filtration slits by lowering P_gc, whereas dialytic PEW demands high-protein repletion; inorganic phosphate additives must be strictly avoided [1, 4, 5].',
              'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনির ফিল্টারের চাপ কমে ভালো কোষ রক্ষা পায়, কিন্তু ডায়ালাইসিসে প্রোটিন দ্বিগুণ বাড়াতে হয়; রাসায়নিক ফসফেট সম্পূর্ণ বর্জনীয় [১, ৪, ৫]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উন্নত স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Biomechanics of Podocyte Detachment in Hyperfiltration', '১. অতি-পরিস্রাবণে পডোসাইট কোষ বিচ্যুতির জীবপদার্থবিদ্যা'),
          paragraphs: [
            l(
              'Elevated intraglomerular capillary hydrostatic pressure (P_gc >65 mmHg) increases circumferential hoop stress across the capillary wall (Laplace law: sigma = P x r / 2t) [2, 3]. Mechanical shear forces stretch podocyte pedicels beyond elastic limits, disrupting alpha-3-beta-1 integrin anchoring to the glomerular basement membrane and inducing focal podocyte detachment and segmentary glomerulosclerosis [2, 3].',
              'কিডনির ফিল্টারে রক্তচাপ বাড়লে রক্তনালির দেয়ালের টান বেড়ে গিয়ে ফিল্টারের সূক্ষ্ম পডোসাইট কোষগুলো ছিঁড়ে বিচ্ছিন্ন হয়ে যায়, যার ফলে কিডনি স্থায়ীভাবে ক্ষতিগ্রস্ত হয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Megalin-Cubilin Albumin Endocytosis & Tubulointerstitial Fibrosis', '২. মেগালিন-কিউবিলিন প্রোটিন শোষণ ও টিস্যুর ক্ষত সৃষ্টি'),
          paragraphs: [
            l(
              'Proximal tubular epithelial cells reabsorb filtered albumin via the megalin-cubilin endocytic complex [3]. Severe protein overload triggers endoplasmic reticulum stress and unfolded protein response (UPR), activating NF-kappa-B and stimulating transcription of transforming growth factor-beta 1 (TGF-beta-1) [3]. TGF-beta-1 drives epithelial-to-mesenchymal transition (EMT) and interstitial fibroblast collagen synthesis, culminating in irreversible renal scarring [3].',
              'কিডনির নালিগুলো অতিরিক্ত প্রোটিন টানতে গিয়ে ক্লান্ত হয়ে পড়ে এবং কোষে মারাত্মক বিষক্রিয়া তৈরি হয়, যা TGF-beta-1 প্রোটিন তৈরি করে কিডনির ভেতর স্থায়ী ক্ষত (Fibrosis) তৈরি করে ভালো কোষগুলোকে মেরে ফেলে [৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. FGFR1c / alpha-Klotho Ternary Crystallography & Signaling', '৩. FGFR1c ও ক্লথো রিসেপ্টরের গঠন ও আণবিক সংকেত'),
          paragraphs: [
            l(
              'FGF23 exhibits low intrinsic affinity for FGFR1c alone; the extracellular domain of alpha-Klotho forms a structural scaffold bridging FGF23 to FGFR1c, creating a high-affinity ternary complex [4]. Receptor activation stimulates downstream ERK1/2 phosphorylation, activating serum and glucocorticoid-regulated kinase 1 (SGK1) to phosphorylate sodium-hydrogen exchanger regulatory factor 1 (NHERF1), triggering clathrin-dependent endocytosis and degradation of NaPi-IIa cotransporters [4].',
              'কিডনির ক্লথো প্রোটিন FGF23 হরমোনকে শক্ত করে ধরে NaPi-IIa চ্যানেলগুলোকে ভেতরে টেনে এনে ধ্বংস করে দেয়, যার ফলে কিডনি প্রস্রাব দিয়ে বাড়তি সমস্ত ফসফেট দ্রুত বের করে দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Vascular Medial Calcification: The Runx2 / Pit-1 Mechanism', '৪. রক্তনালির প্রাচীরে ক্যালসিয়াম জমা: রানক্স২ আণবিক রূপান্তর'),
          paragraphs: [
            l(
              'Extracellular phosphate elevation drives cellular entry into vascular smooth muscle cells (VSMCs) via the type III sodium-dependent phosphate transporter Pit-1 (SLC20A1) [3, 4]. Intracellular phosphate accumulation upregulates the osteogenic master transcription factor Runx2/Cbfa1, phenotypic transdifferentiating contractile VSMCs into bone-forming osteoblast-like cells that deposit crystalline hydroxyapatite in the arterial tunica media (Monckeberg\'s sclerosis) [4].',
              'রক্তে ফসফেট বাড়লে তা রক্তনালির পেশিকোষের ভেতর ঢুকে পড়ে এবং পেশিকোষগুলোকে হাড় তৈরি করা কোষে (Osteoblast) রূপান্তর করে ফেলে, যার ফলে রক্তনালির দেয়াল পাথরের মতো চুন বা ক্যালসিয়ামে জমে শক্ত হয়ে যায় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Hyperkalemia Electrophysiology & Novel Cation Traps', '৫. হাইপারক্যালিমিয়া ইলেকট্রোফিজিওলজি ও আধুনিক পটাশিয়াম বাইন্ডার'),
          paragraphs: [
            l(
              'Extracellular K+ >6.0 mmol/L decreases the chemical gradient, hypopolarizing cardiac resting potential toward threshold and inactivating fast voltage-gated Na+ channels (Nav1.5), manifested by peaked T waves and broad QRS complexes [6]. Modern potassium binders—such as sodium zirconium cyclosilicate (SZC), which selectively captures K+ in an inorganic crystalline lattice in exchange for Na+—rapidly normalize kalemia, permitting continuation of life-prolonging RAS inhibitors [6].',
              'রক্তে পটাশিয়াম বিপজ্জনকভাবে বাড়লে তা হৃদপিণ্ডের বৈদ্যুতিক সংকেত জ্যাম করে দিয়ে হার্টবিট পুরোপুরি বন্ধ করে দেয় [৬]। আধুনিক SZC বাইন্ডার ওষুধ পেটের ভেতর থেকে পটাশিয়াম শুষে নিয়ে রক্ত স্বাভাবিক রাখে [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Nephrology Dietetics Summary', '৬. ফলিত নেফ্রোলজি পুষ্টিবিজ্ঞানের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Translational renal dietetics balances pre-dialysis intraglomerular hemodynamics with dialytic nitrogen replenishment, while tightly controlling the FGF23-phosphate vascular calcification axis and hyperkalemia [1, 3, 4, 6].',
              'কিডনি রোগের পুষ্টি চিকিৎসায় ডায়ালাইসিসের আগে প্রোটিন নিয়ন্ত্রণ এবং ডায়ালাইসিসে প্রোটিন বৃদ্ধি, সাথে ফসফেট ও পটাশিয়ামের নিখুঁত ব্যবস্থাপনা রোগীর আয়ু ও জীবনমান রক্ষার মূল ভিত্তি [১, ৩, ৪, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential stages of glomerular hyperfiltration, osteocyte FGF23 secretion, hemodialysis PEW catabolism, and potassium leaching.',
      'গ্লোমেরুলার অতি-পরিস্রাবণ, অস্টিওসাইট FGF23 ক্ষরণ, ডায়ালাইসিস পেশিক্ষয় এবং পটাশিয়াম নিয়ন্ত্রণের ধারাবাহিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: High dietary protein elevates P_gc in remnant nephrons; low-protein diet (0.55–0.60 g/kg) constricts afferent arterioles, preserving filtration slits.',
        'ধাপ ১: বেশি প্রোটিন কিডনির ফিল্টারের চাপ বাড়ায়; প্রোটিন কমালে ধমনি সংকুচিত হয়ে চাপ স্বাভাবিক হয় এবং ভালো নেফ্রন বাঁচে।'
      ),
      l(
        'Step 2: Declining nephrons prompt osteocyte FGF23 release to excrete phosphate, shutting down active vitamin D (calcitriol) production.',
        'ধাপ ২: কিডনি দুর্বল হলে হাড় থেকে FGF23 ক্ষরিত হয়ে ফসফেট নিয়ন্ত্রণ করে, কিন্তু ভিটামিন ডি বন্ধ করে দেয়।'
      ),
      l(
        'Step 3: Calcitriol deficiency unleashes PTH secretion, stripping bone calcium and precipitating calcium-phosphate in arterial medial layers.',
        'ধাপ ৩: ভিটামিন ডি-র অভাবে PTH হরমোন বেড়ে গিয়ে হাড়ের ক্যালসিয়াম গলিয়ে রক্তনালির প্রাচীরে জমা করে রক্তনালি শক্ত করে।'
      ),
      l(
        'Step 4: Entering hemodialysis reverses protein rules to 1.2 g/kg to halt PEW, while wet-leaching and binders safeguard potassium and phosphorus.',
        'ধাপ ৪: ডায়ালাইসিস শুরু হলে প্রোটিন দ্বিগুণ বাড়াতে হয়, এবং রান্নার বিশেষ পদ্ধতিতে পটাশিয়াম ও ফসফেট নিয়ন্ত্রণে রাখতে হয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why does clinical guidance mandate a low-protein diet (0.55–0.60 g/kg/day) in non-dialysis CKD Stages 3–5, but aggressively shifts to a high-protein diet (1.0–1.2 g/kg/day) upon initiating maintenance hemodialysis?',
      'ডায়ালাইসিসের পূর্বে স্টেজ ৩-৫ কিডনি রোগীদের ক্ষেত্রে প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজি করার নির্দেশ থাকলেও ডায়ালাইসিস শুরু হতেই কেন প্রোটিন বাড়িয়ে ১.০-১.২ গ্রাম/কেজি করা হয়?'
    ),
    options: [
      l(
        'Pre-dialysis protein restriction lowers intraglomerular capillary hydrostatic pressure (P_gc) and delays nephron loss, whereas hemodialysis induces sterile dialyzer membrane inflammation, amino acid loss (6–12 g/session), and catabolic muscle wasting (PEW).',
        'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনির ফিল্টারের ভেতরের রক্তচাপ কমে ভালো কোষ রক্ষা পায়, কিন্তু ডায়ালাইসিস মেশিনে প্রতিবার রক্ত থেকে ৬-১২ গ্রাম প্রোটিন নষ্ট হয় এবং তীব্র প্রদাহে পেশিক্ষয় (PEW) ঘটে।'
      ),
      l(
        'Hemodialysis filters are completely impermeable to potassium unless dietary protein is increased above 1.5 g/kg.',
        'প্রোটিন বেশি না খেলে ডায়ালাইসিস মেশিন পটাশিয়াম ফিল্টার করতে পারে না।'
      ),
      l(
        'Pre-dialysis patients can convert dietary carbohydrates directly into essential amino acids without dietary protein.',
        'ডায়ালাইসিসের পূর্বে রোগীরা শর্করা থেকে নিজে নিজেই প্রোটিন তৈরি করতে পারে।'
      ),
      l(
        'High protein in hemodialysis completely halts all urinary calcium excretion in the bladder.',
        'ডায়ালাইসিসে প্রোটিন বেশি খেলে মূত্রথলি দিয়ে ক্যালসিয়াম বের হওয়া বন্ধ হয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In non-dialysis CKD, dietary protein restriction constricts afferent arterioles, reduces intraglomerular hypertension (Brenner hypothesis), and slows glomerulosclerosis. Conversely, maintenance hemodialysis is an intensely catabolic state: each session leaches 6–12 g of amino acids into the dialysate, and bioincompatible membrane contact triggers systemic cytokine-mediated proteolysis. A high-protein intake (1.0–1.2 g/kg/day) is essential in dialysis to prevent fatal Protein-Energy Wasting (PEW).',
      'ডায়ালাইসিসের পূর্বে প্রোটিন কমালে কিডনির রক্তনালির ভেতরের অতিরিক্ত চাপ কমে এবং অবশিষ্ট ভালো নেফ্রন দীর্ঘায়ু পায়। কিন্তু ডায়ালাইসিসের সময় রক্ত থেকে প্রতিবার ৬-১২ গ্রাম অ্যামিনো অ্যাসিড মেশিন দিয়ে নষ্ট হয় এবং প্রদাহের কারণে তীব্র পেশিক্ষয় ঘটে। তাই ডায়ালাইসিস রোগীদের জীবন বাঁচাতে প্রোটিন দ্বিগুণ বাড়িয়ে ১.০-১.২ গ্রাম/কেজি খাওয়া বাধ্যতামূলক।'
    ),
  },
}
