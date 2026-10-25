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
  updatedAt: '2026-10-25',
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
  lastReviewed: '2026-10-25',
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
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
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
      {
        term: l('Organic vs Inorganic Additive Phosphate', 'প্রাকৃতিক বনাম কৃত্রিম ফসফেটের জৈবপ্রাপ্যতা'),
        definition: l(
          'The critical distinction in gastrointestinal absorption: plant organic phosphate locked in phytate is only 20-40% bioavailable, whereas free inorganic phosphate additives in processed foods are absorbed with 90-100% efficiency [3, 4].',
          'উদ্ভিজ্জ খাবারের প্রাকৃতিক ফসফেট ফাইটেটে বন্দি থাকায় মাত্র ২০-৪০% শোষিত হয়, অথচ প্যাকেটজাত প্রক্রিয়াজাত খাবারের ক্ষতিকর রাসায়নিক ফসফেটের ৯০-১০০% সরাসরি রক্তে ঢুকে কিডনি ধ্বংস করে [৩, ৪]।'
        ),
      },
      {
        term: l('Culinary Wet-Leaching', 'পটাশিয়াম দূরীকরণের বিশেষ রান্নার পদ্ধতি (লিচিং)'),
        definition: l(
          'A culinary nephrology technique of finely slicing high-potassium tubers and vegetables, soaking in excess warm water for >=2 hours, and boiling with fresh water to extract 50% to 70% of soluble potassium [3, 6].',
          'সবজি ছোট ছোট টুকরো করে কেটে গরম পানিতে অন্তত ২ ঘণ্টা ভিজিয়ে রেখে পানি ফেলে দিয়ে পুনরায় সেদ্ধ করার বিশেষ পদ্ধতি, যা সবজি থেকে ৫০-৭০% পটাশিয়াম দূর করে হৃদরোগের ঝুঁকি কমায় [৩, ৬]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Nutritional Prescription for Stage 4 CKD vs Hemodialysis Transition',
          'স্টেজ ৪ কিডনি রোগী বনাম ডায়ালাইসিস রোগীর পুষ্টি ব্যবস্থাপনার ক্লিনিক্যাল পার্থক্য'
        ),
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
      {
        title: l(
          'Severe Hyperkalemia Prevention & Culinary Potassium Leaching in Oliguric CKD',
          'অলিগুরিক কিডনি রোগে মারাত্মক হাইপারক্যালেমিয়া প্রতিরোধ ও রান্নার বিশেষ পদ্ধতি'
        ),
        steps: [
          l(
            'Step 1: Hyperkalemic Crisis Identification: A 59-year-old female with CKD Stage 5 (eGFR 11 mL/min/1.73m2, urine output 650 mL/day) presents with profound generalized muscle weakness and paresthesias. Emergency laboratory analysis shows serum potassium of 6.2 mmol/L (severe hyperkalemia, critical alert >6.0). Surface electrocardiogram (ECG) shows classic early hyperkalemic changes: tall, narrow, peaked T waves in precordial leads V2-V4, with a prolonged PR interval of 220 ms. Baseline dietary evaluation reveals habitual daily consumption of potassium-dense potatoes, lentils, spinach, and coconut water (~4,200 mg potassium/day).',
            'ধাপ ১: মারাত্মক হাইপারক্যালেমিয়া শনাক্তকরণ: ৫৯ বছর বয়সী এক কিডনি রোগী (কার্যক্ষমতা ১১%, প্রস্রাবের পরিমাণ মাত্র ৬৫০ মিলি) তীব্র পেশির দুর্বলতা নিয়ে এসেছেন। জরুরি রক্ত পরীক্ষায় দেখা গেল রক্তে পটাশিয়াম ৬.২ mmol/L (মারাত্মক বিপজ্জনক মাত্রা)। ইসিজিতে দেখা গেল পটাশিয়াম বৃদ্ধির লক্ষণ: অস্বাভাবিক উঁচু ও সুচালো টি-ওয়েভ (T wave)। খাদ্য পর্যালোচনায় দেখা গেল তিনি প্রচুর ডাল, আলু, পালং শাক ও ডাবের পানি খেতেন যাতে দৈনিক ৪২০০ মিলিগ্রাম পটাশিয়াম ঢুকছিল।'
          ),
          l(
            'Step 2: Emergency Stabilization & Pharmacological Potassium Shifting: Administer intravenous calcium gluconate (10 mL of 10% solution over 3 minutes) to immediately stabilize cardiac myocyte resting membrane potential and prevent fatal ventricular fibrillation. Infuse 10 units of regular insulin in 50 mL of 50% dextrose (D50W) over 20 minutes; insulin stimulates skeletal muscle Na+/K+-ATPase, shifting extracellular potassium into the intracellular compartment to temporarily lower serum potassium by 0.6 to 1.0 mmol/L within 30 minutes.',
            'ধাপ ২: জরুরি চিকিৎসা ও হার্ট রক্ষা: হার্টবিট যাতে হঠাৎ বন্ধ না হয়ে যায় সেজন্য তাৎক্ষণিকভাবে শিরায় ক্যালসিয়াম গ্লুকোনেট ইনজেকশন দেওয়া হলো যা হৃৎপিণ্ডের পেশিকে সুরক্ষিত করে। এরপর ইনসুলিন ও গ্লুকোজ ইনফিউশন দেওয়া হলো; ইনসুলিন পেশিকোষের পটাশিয়াম পাম্প চালু করে রক্ত থেকে বাড়তি পটাশিয়াম কোষের ভেতরে টেনে নিয়ে ৩০ মিনিটের মধ্যে রক্তের পটাশিয়াম বিপদসীমার নিচে নামিয়ে আনে।'
          ),
          l(
            'Step 3: Culinary Wet-Leaching Education & Dietary Restriction: Prescribe strict dietary potassium restriction to <2,000 mg/day (50 mmol/day). Provide structured culinary education on wet-leaching: finely slice potatoes, yams, and root vegetables into thin 2-mm slices, soak in a large volume of warm water (1:10 ratio) for at least 2 to 4 hours, discard the soaking water, and then boil the vegetables in fresh water for 15 minutes, discarding the cooking broth. This double-leaching protocol removes 60% to 75% of soluble potassium from tubers and vegetables, allowing the patient to consume plant foods without cardiac danger.',
            'ধাপ ৩: রান্নার বিশেষ লিচিং পদ্ধতি ও খাদ্য নিয়ন্ত্রণ: পটাশিয়াম কমিয়ে দৈনিক ২০০০ মিলিগ্রামের নিচে সীমাবদ্ধ করা হলো। রোগীকে বিশেষ রান্নার কৌশল শেখানো হলো: আলু ও সবজি অতি পাতলা (২ মিলিমিটার) টুকরো করে কেটে প্রচুর গরম পানিতে অন্তত ২ থেকে ৪ ঘণ্টা ভিজিয়ে রাখতে হবে, তারপর সেই পানি ফেলে দিয়ে পুনরায় তাজা পানিতে ১৫ মিনিট সেদ্ধ করে সেদ্ধ পানি ফেলে দিতে হবে। এই বিশেষ পদ্ধতিতে সবজি থেকে ৬০-৭৫% পটাশিয়াম দূর হয়ে যায়।'
          ),
          l(
            'Step 4: Gastrointestinal Potassium Binding & Long-Term Surveillance: Initiate a non-absorbed potassium binder, sodium zirconium cyclosilicate (SZC; 5 g daily) or patiromer (8.4 g daily with meals). These polymer binders exchange sodium or calcium for potassium in the colon, trapping 15 to 20 mmol of dietary potassium per day in the stool. At 4-week follow-up, serum potassium stabilizes at 4.6 mmol/L, ECG abnormalities normalize completely, and hyperkalemic recurrence is prevented.',
            'ধাপ ৪: অন্ত্রের পটাশিয়াম বাইন্ডার ও দীর্ঘমেয়াদি নিরাময়: খাবারের বাড়তি পটাশিয়াম মলের সাথে বের করে দেওয়ার জন্য বিশেষ পটাশিয়াম বাইন্ডার ওষুধ (SZC বা প্যাটিরোমার) চালু করা হলো। এই ওষুধ অন্ত্রে থাকা পটাশিয়ামকে বেঁধে মলের সাথে বের করে দেয়। ৪ সপ্তাহ পর রক্তে পটাশিয়াম কমে সম্পূর্ণ স্বাভাবিক ৪.৬ এ চলে এল এবং ইসিজির সমস্ত অস্বাভাবিকতা দূর হলো।'
          ),
        ],
        conclusion: l(
          'Pairing culinary wet-leaching (extracting up to 75% of potassium from tubers) with modern gastrointestinal potassium binders effectively prevents fatal cardiac arrhythmias in advanced oliguric CKD while preserving the nutritional benefits of plant foods.',
          'সবজি সেদ্ধ করে পানি ফেলে দেওয়ার বিশেষ রান্নার কৌশল (লিচিং) এবং পটাশিয়াম বাইন্ডার ওষুধের সমন্বয়ে জটিল কিডনি রোগীদের হার্ট অ্যাটাকের ঝুঁকি পুরোপুরি প্রতিরোধ করা সম্ভব।'
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
      {
        question: l(
          'How does declining renal alpha-Klotho expression in progressive CKD impair the osteocyte FGF23 axis and accelerate vascular calcification?',
          'কিডনি নষ্ট হওয়ার সাথে সাথে ক্লথো (Klotho) প্রোটিন কমে গেলে তা কীভাবে FGF23 হরমোনের ক্রিয়া নষ্ট করে রক্তনালিতে বিপজ্জনক ক্যালসিয়াম জমার প্রক্রিয়া শুরু করে?'
        ),
        answer: l(
          'Renal alpha-Klotho is an obligate co-receptor that complexes with Fibroblast Growth Factor Receptor 1 (FGFR1) to create a high-affinity binding pocket for osteocyte-derived FGF23. In progressive CKD, nephron loss and tubulointerstitial damage cause a catastrophic decline in renal alpha-Klotho expression. As Klotho disappears, the kidneys become resistant to FGF23; proximal tubule NaPi-IIa cotransporters can no longer be downregulated, causing phosphate retention and severe hyperphosphatemia. Osteocytes compensate by hyper-secreting immense quantities of FGF23 (rising >100-fold above normal). Elevated FGF23 directly binds FGFR4 on cardiac myocytes (which does not require Klotho), inducing calcineurin/NFAT signaling that drives pathological left ventricular hypertrophy. Simultaneously, hyperphosphatemia paired with FGF23-driven calcitriol deficiency elevates parathyroid hormone (PTH), driving osteoclastic bone resorption and precipitating calcium-phosphate nanocrystals into vascular smooth muscle, transforming arteries into rigid, calcified conduits.',
          'কিডনির ক্লথো (Klotho) প্রোটিন হলো FGF23 হরমোন কাজ করার একমাত্র চাবি। কিডনি দুর্বল হলে এই ক্লথো প্রোটিন নষ্ট হয়ে যায়। ফলে রক্তে প্রচুর FGF23 হরমোন থাকা সত্ত্বেও কিডনি আর কোনো সংকেত গ্রহণ করতে পারে না এবং প্রস্রাব দিয়ে ফসফেট বের করা বন্ধ হয়ে যায়। শরীর ফসফেট বের করতে হাড় থেকে ১০০ গুণ বেশি FGF23 নিঃসরণ শুরু করে। এই অতিরিক্ত FGF23 সরাসরি হার্টের পেশির ওপর আক্রমণ করে হার্ট বড় করে ফেলে (Left Ventricular Hypertrophy)। একই সাথে রক্তে জমে থাকা ফসফেট ক্যালসিয়ামের সাথে মিশে রক্তনালির প্রাচীরে জমা হয়ে রক্তনালিকে পাথরের মতো শক্ত করে তোলে।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating the Progression from Afferent Arteriolar Vasodilation to Intraglomerular Hyperfiltration, Podocyte Detachment, Tubulointerstitial Fibrosis, and Dietary Preservation.',
      'কিডনির সূক্ষ্ম ধমনির প্রসারণ থেকে শুরু করে অতিরিক্ত চাপ, ফিল্টার কোষের ক্ষতি, স্থায়ী ক্ষত তৈরি এবং প্রোটিন নিয়ন্ত্রণের মাধ্যমে কিডনি বাঁচানোর ধারাবাহিক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Dietary Amino Acid Influx & Afferent Arteriolar Vasodilation: High dietary protein ingestion elevates plasma amino acids, stimulating renal synthesis of vasodilatory glucagon, prostanoids, and IGF-1. These mediators selectively relax the vascular smooth muscle of the pre-glomerular afferent arteriole, while efferent arteriolar tone remains high, transmitting systemic arterial pressure directly into the delicate glomerular capillary bed.',
        'ধাপ ১: অতিরিক্ত প্রোটিন গ্রহণ ও কিডনির ধমনি প্রসারণ: খাবারে অতিরিক্ত প্রোটিন খেলে রক্তে অ্যামিনো অ্যাসিড ও হরমোন বেড়ে গিয়ে কিডনির রক্ত প্রবেশকারী সূক্ষ্ম ধমনিকে অস্বাভাবিক চওড়া করে দেয়। কিন্তু বের হওয়ার ধমনিটি সংকুচিত থাকায় রক্ত বের হতে পারে না এবং ফিল্টারের ভেতরে মারাত্মক রক্তচাপ তৈরি হয়।'
      ),
      l(
        'Step 2: Intraglomerular Capillary Hypertension (P_gc Elevation): The hemodynamic imbalance elevates intraglomerular capillary hydrostatic pressure (P_gc) from ~45 mmHg to >65 mmHg. This mechanical strain widens podocyte filtration slits and stretches glomerular basement membranes, accelerating mechanical shear stress on podocyte foot processes.',
        'ধাপ ২: ফিল্টারের ভেতরের রক্তচাপ বিপজ্জনক বৃদ্ধি: কিডনির ফিল্টারের ভেতরের চাপ স্বাভাবিক ৪৫ থেকে বেড়ে ৬৫ মিলিমিটারের ওপরে উঠে যায়। এই প্রচণ্ড চাপের মুখে ফিল্টারের সূক্ষ্ম ছিদ্রগুলো ফেটে যায় এবং ছাঁকনি কোষগুলো ছিঁড়ে আলাদা হয়ে যায়।'
      ),
      l(
        'Step 3: Podocyte Detachment & Glomerular Protein Leakage (Proteinuria): Exceeding the mechanical shear threshold causes podocyte foot process effacement and detachment into Bowman space. Macromolecules, particularly serum albumin, leak into the primary filtrate (proteinuria). Filtered albumin is reabsorbed by proximal tubular epithelial cells via megalin-cubilin endocytosis, overwhelming lysosomal capacity and triggering pro-inflammatory NF-kB signaling and TGF-beta-1 driven interstitial fibrosis.',
        'ধাপ ৩: ফিল্টার কোষ ধ্বংস ও প্রস্রাবে প্রোটিন ক্ষরণ: ফিল্টারের কোষগুলো ছিঁড়ে গিয়ে প্রস্রাবের সাথে মূল্যবান অ্যালবুমিন প্রোটিন বেরিয়ে যেতে থাকে। কিডনির সূক্ষ্ম নালিগুলো এই প্রোটিন সামাল দিতে না পেরে প্রদাহের সৃষ্টি করে এবং কিডনির ভেতরে শক্ত ক্ষত (Fibrosis) তৈরি করে ভালো নেফ্রনগুলোকে মেরে ফেলে।'
      ),
      l(
        'Step 4: Nephron Preservation via Staged Protein Restriction & SGLT2i: Restricting dietary protein to 0.55–0.60 g/kg/day withdraws afferent vasodilatory stimuli, restoring vascular resistance, lowering P_gc, blunting albuminuria, and arresting glomerulosclerosis to preserve remnant nephron longevity in non-dialysis CKD.',
        'ধাপ ৪: প্রোটিন নিয়ন্ত্রণ ও কিডনি রক্ষা: খাবারে প্রোটিন নিয়ন্ত্রণ (০.৫৫-০.৬০ গ্রাম/কেজি) কিডনির সূক্ষ্ম ধমনির চাপ কমিয়ে ফিল্টারের ভেতরের চাপ স্বাভাবিক করে। এর ফলে প্রস্রাবে প্রোটিন যাওয়া বন্ধ হয় এবং অবশিষ্ট ভালো কিডনি কোষগুলো বছরের পর বছর বেঁচে থাকে।'
      ),
    ],
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
              'Chronic kidney disease (CKD) is characterized by a gradual, irreversible decline in renal function, defined clinically as an estimated glomerular filtration rate (eGFR) below 60 mL/min/1.73m2 lasting for more than 3 months [1]. The kidneys comprise approximately two million microscopic filtering units called nephrons [1, 2]. Each nephron consists of a vascular filtering element—the glomerulus—surrounded by Bowman capsule and connected to a specialized tubular system encompassing the proximal convoluted tubule, loop of Henle, distal tubule, and collecting duct [1, 2].',
              'ক্রনিক কিডনি ডিজিজ (CKD) হলো কিডনির কার্যক্ষমতা ধীরে ধীরে ও স্থায়ীভাবে হ্রাস পাওয়া, যা চিকিৎসাবিজ্ঞানে কিডনির ফিল্টারিং ক্ষমতা (eGFR) প্রতি মিনিটে ৬০ মিলিলিটারের নিচে টানা ৩ মাসের বেশি সময় থাকা হিসেবে সংজ্ঞায়িত করা হয় [১]। মানুষের দুটি কিডনিতে প্রায় ২০ লাখ অতি সূক্ষ্ম ছাঁকনি বা ফিল্টার রয়েছে যাদের নেফ্রন (Nephron) বলা হয় [১, ২]। প্রতিটি নেফ্রন রক্তনালির একটি বিশেষ জালিকা (গ্লোমেরুলাস) এবং জটিল নালিকাতন্ত্র নিয়ে গঠিত যা প্রতিনিয়ত রক্ত ছেঁকে জীবনধারণের ভারসাম্য বজায় রাখে [১, ২]।'
            ),
            l(
              'Under normal physiological conditions, the glomeruli filter approximately 180 liters of plasma fluid per day, generating primary filtrate that contains water, electrolytes, glucose, amino acids, and low-molecular-weight nitrogenous wastes [1, 2]. The three-layered glomerular filtration barrier—composed of fenestrated endothelial cells, the negatively charged glomerular basement membrane (GBM), and podocyte foot processes with interdigitating slit diaphragms—selectively retains large plasma proteins such as albumin (>66 kDa) and blood cells while permitting the free passage of water and solutes [2].',
              'সুস্থ শরীরে দুটি কিডনি প্রতিদিন প্রায় ১৮০ লিটার রক্ত ছেঁকে প্রাথমিক ফিল্ট্রেট তৈরি করে, যার মধ্যে পানি, খনিজ লবণ এবং নাইট্রোজেনঘটিত বর্জ্য উপাদান থাকে [১, ২]। কিডনির ফিল্টারের তিনটি স্তর এমনভাবে সাজানো থাকে যাতে ক্ষতিকর ইউরিয়া বা ক্রিয়েটিনিন সহজেই ছাঁকনি পার হয়ে যেতে পারে, কিন্তু রক্তের মূল্যবান প্রোটিন অ্যালবুমিন বা রক্তকণিকা কিছুতেই যেন বেরিয়ে না যায় [২]।'
            ),
            l(
              'Nitrogenous wastes originate primarily from dietary and endogenous protein catabolism [2, 3]. Amino acid deamination in the liver produces ammonia, which is rapidly converted via the ornithine urea cycle into urea [3]. Creatinine is generated at a constant rate from non-enzymatic dehydration of skeletal muscle creatine phosphate [1, 3]. The healthy kidney excretes these nitrogenous metabolites efficiently; however, when nephrons are destroyed, urea, creatinine, indoxyl sulfate, and other protein-derived uremic toxins accumulate in the systemic circulation, driving the multi-organ toxic syndrome known as uremia [1, 3].',
              'শরীরে নাইট্রোজেনঘটিত বর্জ্য মূলত তৈরি হয় খাবারের প্রোটিন বা আমিষ ভেঙে [২, ৩]। লিভারে প্রোটিন ভেঙে বিষাক্ত অ্যামোনিয়া তৈরি হয় যা দ্রুত ইউরিয়ায় রূপান্তরিত হয় এবং মাংসপেশি থেকে ক্রিয়েটিনিন তৈরি হয় [৩]। সুস্থ কিডনি এই বর্জ্যগুলো প্রস্রাবের সাথে বের করে দেয়; কিন্তু কিডনি বিকল হতে শুরু করলে রক্তে ইউরিয়া ও ক্রিয়েটিনিনের মাত্রা অস্বাভাবিক বেড়ে যায় এবং পুরো শরীরে বিষক্রিয়া (Uremia) ছড়িয়ে পড়ে [১, ৩]।'
            ),
            l(
              'Because adult human kidneys cannot regenerate new nephrons, progressive nephron loss imposes an escalating functional burden on surviving remnant nephrons [1, 2]. Remnant nephrons undergo compensatory hypertrophy and hemodynamic adaptation, a process that initially maintains gross filtration but ultimately triggers progressive structural degeneration [2]. Understanding this nephron loss cascade provides the scientific rationale for evidence-based Medical Nutrition Therapy in preserving remnant renal function [1, 3].',
              'প্রাপ্তবয়স্ক মানুষের শরীরে কখনো নতুন নেফ্রন জন্মায় না; তাই কোনো কারণে কিছু নেফ্রন নষ্ট হয়ে গেলে অবশিষ্ট ভালো নেফ্রনগুলোকে বেঁচে থাকার জন্য দ্বিগুণ পরিশ্রম করতে হয় [১, ২]। এই বাড়তি চাপের কারণে ভালো নেফ্রনগুলোও ধীরে ধীরে অতিরিক্ত চাপে নষ্ট হয়ে যেতে শুরু করে [২]। সঠিক পুষ্টি থেরাপির মাধ্যমে এই অবশিষ্ট ভালো নেফ্রনগুলোকে কীভাবে বাঁচিয়ে রাখা যায় তা জানাই রেনাল নিউট্রিশনের মূল উদ্দেশ্য [১, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Brenner Hyperfiltration Hypothesis & Protein Restriction', '২. ব্রেনারের অতি-পরিস্রাবণ তত্ত্ব ও প্রোটিন নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'In 1982, Barry Brenner and colleagues at Harvard Medical School published the transformative "hyperfiltration hypothesis" in *The New England Journal of Medicine*, establishing the hemodynamic mechanism of progressive renal decline [2]. Brenner proved that when a critical fraction of nephrons is destroyed by diabetes, glomerulonephritis, or hypertension, the surviving remnant nephrons undergo dramatic adaptive vasodilation of the afferent (inflow) arteriole [2]. This disproportionate pre-glomerular vasodilation transmits systemic arterial pressure directly into the fragile capillary tuft [2].',
              '১৯৮২ সালে হার্ভার্ড মেডিকেল স্কুলের বিজ্ঞানী ব্যারি ব্রেনার তাঁর ঐতিহাসিক "হাইপারফিল্ট্রেশন তত্ত্বে" প্রমাণ করেন কীভাবে কিডনি ধীরে ধীরে ধ্বংসের দিকে এগিয়ে যায় [২]। তিনি আবিষ্কার করেন যে কিছু নেফ্রন নষ্ট হয়ে গেলে অবশিষ্ট ভালো নেফ্রনগুলোতে রক্ত প্রবেশের সূক্ষ্ম ধমনিটি (Afferent arteriole) অতিরিক্ত প্রসারিত হয়ে যায় [২]। এর ফলে সারা শরীরের রক্তের চাপ সরাসরি কিডনির সূক্ষ্ম ফিল্টারের ভেতরে আঘাত হানতে শুরু করে [২]।'
            ),
            l(
              'Under normal conditions, intraglomerular capillary hydrostatic pressure (P_gc) is tightly autoregulated at ~45 mmHg [2]. However, under afferent arteriolar vasodilation, P_gc surges to >65 mmHg, producing chronic intraglomerular hypertension [2]. This mechanical stretch exceeds the elastic limit of podocyte foot processes, forcing filtration slits open and allowing large plasma proteins—predominantly albumin—to escape into the urinary space, manifesting clinically as pathological albuminuria and proteinuria [2, 3].',
              'সুস্থ কিডনির ফিল্টারের ভেতরের রক্তচাপ সবসময় ৪৫ মিলিমিটারে সুনির্দিষ্টভাবে নিয়ন্ত্রিত থাকে [২]। কিন্তু রক্তনালি অতিরিক্ত চওড়া হয়ে গেলে ফিল্টারের ভেতরের চাপ বেড়ে ৬৫ মিলিমিটার ছাড়িয়ে যায় [২]। এই ভয়াবহ চাপের কারণে ফিল্টারের সূক্ষ্ম পর্দা ছিঁড়ে যায় এবং রক্তের অ্যালবুমিন প্রস্রাব দিয়ে বেরিয়ে যেতে শুরু করে, যা প্রস্রাব পরীক্ষায় প্রোটিন হিসেবে ধরা পড়ে [২, ৩]।'
            ),
            l(
              'Crucially, dietary protein intake is the most potent exogenous driver of this glomerular hyperfiltration cascade [2, 3]. Ingestion of dietary protein floods the portal and systemic circulation with amino acids, stimulating the renal synthesis and release of vasodilatory autacoids: glucagon, Insulin-Like Growth Factor 1 (IGF-1), and vasodilatory prostaglandins (PGE2, PGI2) [2, 3]. These humoral factors act selectively on the pre-glomerular afferent arteriole, dilating the vessel while the post-glomerular efferent arteriole maintains or increases vascular tone, drastically amplifying P_gc and filtration fraction [2, 3].',
              'খাবারে প্রোটিন বা আমিষের পরিমাণই হলো কিডনির ভেতরের এই চাপ বাড়ার সবচেয়ে প্রধান কারণ [২, ৩]। অতিরিক্ত মাছ, মাংস বা ডিম খেলে রক্তে অ্যামিনো অ্যাসিড বেড়ে যায় এবং কিডনির ভেতর বিশেষ হরমোন নিঃসৃত হয়ে রক্ত প্রবেশের ধমনিকে আরও চওড়া করে দেয় [২, ৩]। এর ফলে ফিল্টারের ভেতর রক্তের চাপ আকাশচুম্বী হয় এবং ভালো নেফ্রনগুলো দ্রুত ছিঁড়ে যেতে থাকে [২, ৩]।'
            ),
            l(
              'In non-dialysis CKD Stages 3 to 5 (eGFR <60 mL/min/1.73m2), clinical practice guidelines (KDIGO and KDOQI) recommend a targeted low-protein diet (LPD) providing 0.55 to 0.60 grams of protein per kilogram body weight per day [1, 3]. Staged protein restriction withdraws the amino acid-driven vasodilatory stimulus, restoring afferent arteriolar resistance, lowering P_gc, normalizing filtration fraction, and dramatically blunting proteinuria [1, 3]. This hemodynamic resting of the glomerulus protects remnant nephrons from mechanical exhaustion, significantly delaying the time to dialytic kidney failure [1, 2, 3].',
              'ডায়ালাইসিস শুরুর পূর্ববর্তী কিডনি রোগীদের (স্টেজ ৩ থেকে ৫) ক্ষেত্রে আন্তর্জাতিক চিকিৎসা নির্দেশিকা অনুযায়ী খাবারে প্রোটিনের পরিমাণ কমিয়ে দৈনিক ০.৫৫ থেকে ০.৬০ গ্রাম/কেজিতে রাখার পরামর্শ দেওয়া হয় [১, ৩]। প্রোটিন কমিয়ে দিলে কিডনির রক্তনালির ভেতরের অতিরিক্ত চাপ স্বাভাবিক হয়ে আসে, প্রস্রাবে প্রোটিন নির্গমন বন্ধ হয় এবং ভালো কিডনি কোষগুলো আরও অনেক বছর সুস্থভাবে কাজ করতে পারে [১, ২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The FGF23-Klotho Phosphate & Vitamin D Mineral Axis', '৩. এফজিএফ২৩-ক্লথো ফসফেট ও ভিটামিন ডি খনিজ চক্র'),
          paragraphs: [
            l(
              'The regulation of mineral metabolism across the CKD continuum illustrates a classic trade-off hypothesis, wherein an early physiological adaptation designed to maintain mineral balance ultimately becomes a fatal driver of cardiovascular disease [3, 4]. Dietary phosphorus is absorbed in the small intestine as inorganic phosphate via sodium-dependent phosphate cotransporter 2b (NaPi-IIb) and paracellular diffusion [4]. In healthy physiology, the kidneys match dietary phosphorus intake by adjusting proximal tubular phosphate excretion [4].',
              'কিডনি রোগে খনিজ পদার্থের ভারসাম্য রক্ষা শরীরের সবচেয়ে জটিল অধ্যায়গুলোর একটি [৩, ৪]। খাবার থেকে ফসফেট ক্ষুদ্রান্ত্র দিয়ে রক্তে শোষিত হয় [৪]। সুস্থ কিডনি রক্তের বাড়তি ফসফেটকে সুনির্দিষ্টভাবে প্রস্রাবের সাথে বের করে দিয়ে রক্তে এর মাত্রা সবসময় স্বাভাবিক রাখে [৪]।'
            ),
            l(
              'As functional nephron mass declines below ~60 mL/min/1.73m2, surviving nephrons face phosphate retention [4]. Long before serum phosphorus rises above normal laboratory reference ranges, bone osteocytes sense subtle systemic phosphate loading and dramatically upregulate transcription and secretion of Fibroblast Growth Factor 23 (FGF23) [4]. FGF23 is a 32-kDa phosphaturic hormone that circulates to the kidneys, where it binds to a binary receptor complex consisting of Fibroblast Growth Factor Receptor 1c (FGFR1c) and the essential transmembrane co-receptor alpha-Klotho [4].',
              'কিডনির কার্যক্ষমতা ৬০ শতাংশের নিচে নেমে গেলে ফসফেট আটকে যাওয়ার ঝুঁকি তৈরি হয় [৪]। রক্তে ফসফেট দৃশ্যমানভাবে বাড়ার বহু আগেই হাড়ের কোষগুলো এই বিপদ টের পেয়ে প্রচুর পরিমাণে FGF23 নামক হরমোন তৈরি শুরু করে [৪]। এই হরমোন রক্তে ভেসে কিডনিতে আসে এবং কিডনির ক্লথো (Klotho) প্রোটিনের সাথে যুক্ত হয়ে কিডনিকে ফসফেট দূর করার নির্দেশ দেয় [৪]।'
            ),
            l(
              'Binding of FGF23 to the FGFR1-Klotho complex activates ERK1/2 phosphorylation, stimulating the rapid retrieval and lysosomal degradation of sodium-phosphate cotransporters NaPi-IIa (SLC34A1) and NaPi-IIc (SLC34A3) from the apical brush border of proximal tubular cells [4]. This halts phosphate reabsorption, forcing surviving remnant nephrons to excrete excess phosphate and maintaining normal serum phosphorus throughout CKD Stages 2 to 4 [4]. However, this adaptive phosphaturia exacts a catastrophic biological toll: FGF23 potently downregulates 25-hydroxyvitamin D 1-alpha-hydroxylase (CYP27B1) while upregulating the catabolic 24-hydroxylase (CYP24A1) [4].',
              'FGF23 এর সংকেত পেয়ে কিডনির কোষগুলো ফসফেট শোষণ বন্ধ করে দেয় এবং প্রস্রাব দিয়ে সমস্ত বাড়তি ফসফেট বের করে দেয় [৪]। ফলে স্টেজ ২ থেকে ৪ পর্যন্ত রক্তে ফসফেট স্বাভাবিক দেখা যায় [৪]। কিন্তু এর ভয়াবহ মূল্য দিতে হয়: FGF23 কিডনির ভিটামিন ডি তৈরির কারখানা পুরোপুরি বন্ধ করে দেয় এবং সক্রিয় ভিটামিন ডি (ক্যালসিট্রিওল) ধ্বংস করে ফেলে [৪]।'
            ),
            l(
              'The resulting severe deficiency of active calcitriol (1,25-(OH)2-D3) unleashes secondary hyperparathyroidism: relieved of vitamin D receptor (VDR) feedback inhibition, the parathyroid glands hyper-secrete Parathyroid Hormone (PTH) [3, 4]. Elevated PTH mobilizes calcium and phosphate from bone, causing renal osteodystrophy (osteitis fibrosa cystica) [3, 4]. When serum calcium and phosphorus exceed their solubility product (Ca x P >55 mg2/dL2), hydroxyapatite crystals precipitate into the tunica media of systemic arteries, driving extensive vascular calcification (Monckeberg arteriosclerosis) and making cardiovascular death the primary killer of CKD patients [3, 4].',
              'সক্রিয় ভিটামিন ডি-র তীব্র ঘাটতির কারণে প্যারাথাইরয়েড গ্রন্থি পাগল হয়ে প্রচুর প্যারাথাইরয়েড হরমোন (PTH) ছাড়তে থাকে [৩, ৪]। এই অতিরিক্ত PTH হাড়ের সমস্ত ক্যালসিয়াম ও ফসফেট গলিয়ে রক্তে ঢেলে দেয়, যার ফলে হাড় ভঙ্গুর ও নরম হয়ে যায় [৩, ৪]। এই গলে যাওয়া ক্যালসিয়াম ও ফসফেট রক্তনালির প্রাচীরে জমা হয়ে রক্তনালিকে পাথরের মতো শক্ত করে ফেলে এবং হার্ট অ্যাটাক ঘটিয়ে রোগীর মৃত্যু ডেকে আনে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Hemodialysis Catabolism & Protein-Energy Wasting', '৪. ডায়ালাইসিসের তীব্র ক্ষয় ও প্রোটিনের চাহিদা বৃদ্ধি'),
          paragraphs: [
            l(
              'When end-stage renal disease supervenes and the patient initiates maintenance hemodialysis (HD), the clinical nutrition landscape undergoes an abrupt 180-degree paradigm inversion [1, 5]. The conservative dietary protein restriction (0.55–0.60 g/kg/day) that successfully preserved remnant nephrons during the pre-dialysis phase becomes intensely dangerous and life-threatening once dialysis has begun [1, 5].',
              'কিডনি যখন পুরোপুরি অচল হয়ে যায় এবং রোগীকে হেমোডায়ালাইসিস শুরু করতে হয়, তখন পুষ্টির সম্পূর্ণ নিয়ম ১৮০ ডিগ্রি ঘুরে যায় [১, ৫]। ডায়ালাইসিস শুরুর আগে কিডনি বাঁচাতে যে প্রোটিন নিয়ন্ত্রণ (০.৫৫-০.৬০ গ্রাম/কেজি) করা হতো, ডায়ালাইসিস শুরু হওয়ার পর সেই একই নিয়ম চালিয়ে গেলে রোগী মারাত্মক অপুষ্টিতে মারা যেতে পারেন [১, ৫]।'
            ),
            l(
              'Maintenance hemodialysis is an inherently hypercatabolic therapy [5]. Each 4-hour hemodialysis treatment session strips 8 to 12 grams of free amino acids and peptides across the artificial dialyzer membrane into the dialysate effluent [5]. In addition, blood contact with bioincompatible dialyzer membrane polymers and trace endotoxin back-filtration across the dialyzer triggers systemic immune activation, unleashing a sterile inflammatory cascade characterized by elevated Interleukin-6 (IL-6) and Tumor Necrosis Factor-alpha (TNF-alpha) [5].',
              'হেমোডায়ালাইসিস হলো মানবদেহের জন্য একটি অত্যন্ত ক্ষয়িষ্ণু চিকিৎসা [৫]। প্রতিবার ৪ ঘণ্টার ডায়ালাইসিসে রক্ত থেকে ৮ থেকে ১২ গ্রাম মূল্যবান অ্যামিনো অ্যাসিড মেশিনের পানিতে ধুয়ে বেরিয়ে যায় [৫]। তাছাড়া কৃত্রিম ডায়ালাইজার মেমব্রেনের সংস্পর্শে রক্তে তীব্র প্রদাহের সৃষ্টি হয় এবং ক্ষতিকর সাইটোকাইন রক্তে ছড়িয়ে পড়ে [৫]।'
            ),
            l(
              'Inflammatory cytokines activate the ubiquitin-proteasome system in skeletal muscle, accelerating myofibrillar protein proteolysis to liberate amino acids into the circulation [5]. Concurrently, resting energy expenditure is increased, while uremic anorexia blunts spontaneous caloric intake [5]. This deadly convergence of nutrient loss, hypercatabolism, and anorexia precipitates Protein-Energy Wasting (PEW), a syndrome characterized by progressive involuntary loss of muscle mass, visceral protein stores, and adipose reserves [1, 5]. In hemodialysis patients, PEW is the single strongest predictor of all-cause and cardiovascular mortality [5].',
              'প্রদাহের কারণে শরীর নিজের সমস্ত মাংসপেশি ভেঙে রক্তে প্রোটিনের ঘাটতি মেটাতে শুরু করে [৫]। এর সাথে ডায়ালাইসিস রোগীর খাবারের অরুচি যুক্ত হয়ে প্রোটিন-এনার্জি ওয়েস্টিং (PEW) নামক মারাত্মক ক্ষয়িষ্ণু রোগ তৈরি করে, যার ফলে রোগীর পেশি শুকিয়ে কঙ্কালসার হয়ে যায় [১, ৫]। ডায়ালাইসিস রোগীদের মৃত্যুর সবচেয়ে বড় কারণ হলো এই মারাত্মক অপুষ্টি ও পেশিক্ষয় [৫]।'
            ),
            l(
              'To counteract this severe catabolism, clinical guidelines mandate an immediate elevation of dietary protein intake to 1.0 to 1.2 g/kg body weight/day (and up to 1.4 g/kg/day during catabolic acute illnesses) for hemodialysis patients [1, 5]. More than 50% of this protein must derive from high biological value (HBV) sources (eggs, poultry, fish, dairy) providing all essential amino acids [1, 5]. Because high protein intake inherently introduces a high dietary phosphorus burden, meals must be strictly paired with non-calcium phosphate binders to capture luminal phosphate while preserving vital amino acid absorption [1, 4, 5].',
              'এই মারাত্মক ক্ষয় রোধে ডায়ালাইসিস রোগীদের প্রতিদিনের প্রোটিন দ্বিগুণ বাড়িয়ে ১.০ থেকে ১.২ গ্রাম/কেজি (প্রতিদিন ৭০ থেকে ৯০ গ্রাম) খাওয়া বাধ্যতামূলক [১, ৫]। এর অর্ধেকই হতে হবে ডিম, মুরগি বা মাছের মতো উন্নত প্রোটিন [১, ৫]। আর অতিরিক্ত প্রোটিন খাওয়ার কারণে যাতে রক্তে ফসফেট না বাড়ে, সেজন্য প্রতি বেলার খাবারের সাথে ফসফেট বাইন্ডার ওষুধ খেতে হবে যা খাবারের ফসফেট আটকে বের করে দেবে কিন্তু মূল্যবান প্রোটিন শরীরে ঢুকতে দেবে [১, ৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Potassium Leaching & Dietary Mineral Management', '৫. পটাশিয়াম নিয়ন্ত্রণ ও সবজি সেদ্ধ করার পদ্ধতি'),
          paragraphs: [
            l(
              'Potassium homeostasis is an essential clinical priority in advanced CKD, where declining tubular functional reserve places patients at imminent risk of fatal cardiac arrhythmias [3, 6]. Under normal conditions, the kidneys excrete ~90% of the daily potassium intake, predominantly via potassium secretion in the distal convoluted tubule and cortical collecting duct mediated by Renal Outer Medullary Potassium channels (ROMK) and big potassium (BK) channels under aldosterone stimulation [6].',
              'জটিল কিডনি রোগীদের ক্ষেত্রে পটাশিয়াম নিয়ন্ত্রণ হলো জীবন-মৃত্যুর প্রশ্ন, কারণ রক্তে সামান্য পটাশিয়াম বাড়লেই যে কোনো মুহূর্তে হার্ট বন্ধ হয়ে রোগী মারা যেতে পারেন [৩, ৬]। সুস্থ শরীরে কিডনি প্রস্রাবের মাধ্যমে প্রতিদিনের অতিরিক্ত পটাশিয়ামের ৯০ শতাংশই বের করে দিয়ে রক্তে এর মাত্রা সবসময় ৩.৫ থেকে ৫.০ mmol/L এ ঠিক রাখে [৬]।'
            ),
            l(
              'When eGFR declines below ~15–20 mL/min/1.73m2, diminished tubular flow and declining distal sodium delivery impair ROMK-mediated potassium excretion [6]. Concurrently, metabolic acidosis (low plasma bicarbonate) shifts intracellular potassium out of cells in exchange for protons, driving extracellular potassium accumulation [6]. Serum potassium rising above 5.5 mmol/L (hyperkalemia) hypopolarizes cardiac resting membrane potentials, impairing cardiac conduction velocity and causing life-threatening ventricular fibrillation and asystole [3, 6].',
              'কিডনির কার্যক্ষমতা ১৫-২০ শতাংশের নিচে নেমে গেলে প্রস্রাব দিয়ে পটাশিয়াম বের হওয়া প্রায় পুরোপুরি বন্ধ হয়ে যায় [৬]। এর সাথে রক্তে অ্যাসিডের মাত্রা বেড়ে গেলে কোষের ভেতরের সমস্ত পটাশিয়াম রক্তে বের হয়ে আসে [৬]। রক্তে পটাশিয়াম ৫.৫ mmol/L ছাড়ালেই হৃৎপিণ্ডের স্বাভাবিক স্পন্দন বিকল হয়ে পড়ে এবং হঠাৎ কার্ডিয়াক অ্যারেস্টে রোগীর মৃত্যু হতে পারে [৩, ৬]।'
            ),
            l(
              'To safeguard patients without completely depriving them of health-promoting plant foods, renal dietetics utilizes culinary wet-leaching [3, 6]. Potassium salts in vegetables and tubers exist as highly water-soluble cytosolic ions [6]. The standardized leaching protocol requires slicing tubers (potatoes, sweet potatoes, yams) and high-potassium vegetables into thin 2-mm slices, soaking them in a 1:10 volume ratio of warm water for at least 2 to 4 hours, discarding the soaking water, and then boiling the slices in fresh water for 15 minutes before discarding the cooking broth [6]. This double-extraction protocol dissolves and removes 50% to 75% of soluble potassium while retaining fiber and micronutrients [3, 6].',
              'রোগীকে শাকসবজি ও ফল থেকে পুরোপুরি বঞ্চিত না করে নিরাপদে পটাশিয়াম কমানোর উপায় হলো বিশেষ রান্নার পদ্ধতি বা লিচিং (Leaching) [৩, ৬]। সবজির পটাশিয়াম কোষের ভেতরের পানিতে অত্যন্ত দ্রবণীয় অবস্থায় থাকে [৬]। আলু বা সবজি খুব পাতলা করে কেটে কুসুম গরম পানিতে অন্তত ২ থেকে ৪ ঘণ্টা ভিজিয়ে রেখে সেই পানি ফেলে দিতে হবে, তারপর নতুন পানি দিয়ে ১৫ মিনিট সেদ্ধ করে সেদ্ধ পানি পুরোপুরি ফেলে দিতে হবে [৬]। এই বিশেষ পদ্ধতিতে সবজি থেকে ৫০ থেকে ৭৫ শতাংশ পটাশিয়াম ধুয়ে বেরিয়ে যায় এবং রোগী নিরাপদে সবজি খেতে পারেন [৩, ৬]।'
            ),
            l(
              'In modern clinical nephrology, dietary leaching is paired with non-calcium phosphate binders (sevelamer carbonate, sucroferric oxyhydroxide) and novel potassium binders (sodium zirconium cyclosilicate, patiromer) [3, 4, 6]. These therapeutic agents selectively bind potassium and phosphate in the gastrointestinal tract, enabling CKD patients to maintain an unrestrictive, plant-dominant diet that promotes gut microbiome diversity and reduces uremic toxin generation without precipitating fatal hyperkalemic or hyperphosphatemic crises [1, 3, 6].',
              'আধুনিক কিডনি চিকিৎসায় রান্নার এই বিশেষ পদ্ধতির সাথে ফসফেট বাইন্ডার এবং পটাশিয়াম বাইন্ডার ওষুধের সমন্বয় করা হয় [৩, ৪, ৬]। এই ওষুধগুলো পেটের ভেতরের বাড়তি পটাশিয়াম ও ফসফেটকে মলের সাথে বেঁধে বের করে দেয়; ফলে জটিল কিডনি রোগীরাও ডায়রিয়া বা হার্টের ভয় ছাড়াই নিরাপদে সুস্বাদু ও পুষ্টিকর খাবার গ্রহণ করে সুস্থভাবে বেঁচে থাকতে পারেন [১, ৩, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'The Brenner hypothesis demonstrates that dietary protein overload triggers afferent arteriolar vasodilation via glucagon and IGF-1, elevating intraglomerular capillary hydrostatic pressure (P_gc >65 mmHg), stretching podocytes, causing albuminuria, and accelerating remnant glomerulosclerosis [2, 3]. In non-dialysis CKD Stages 3–5, staged protein restriction (0.55–0.60 g/kg/day) lowers P_gc, blunts proteinuria, and slows progression to ESRD [1, 3].',
              'ব্রেনারের হাইপারফিল্ট্রেশন তত্ত্ব প্রমাণ করে যে অতিরিক্ত প্রোটিন খেলে কিডনির সূক্ষ্ম ধমনি চওড়া হয়ে ফিল্টারের ভেতরের রক্তচাপ ৬৫ মিলিমিটারের ওপরে তুলে দেয়, যার ফলে ফিল্টারের পর্দা ফেটে প্রস্রাবে প্রোটিন নির্গত হয় এবং ভালো কিডনি কোষ ধ্বংস হয় [২, ৩]। ডায়ালাইসিসের পূর্বে প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজি রাখলে কিডনির ভেতরের চাপ কমে এবং কিডনি দীর্ঘদিন ভালো থাকে [১, ৩]।'
            ),
            l(
              'Declining nephron mass triggers osteocyte secretion of Fibroblast Growth Factor 23 (FGF23), which complexes with renal alpha-Klotho to downregulate proximal tubular NaPi-IIa cotransporters, maintaining normal serum phosphorus at the expense of severe 1-alpha-hydroxylase suppression and calcitriol deficiency [4]. Calcitriol deficiency drives secondary hyperparathyroidism, osteoclastic bone resorption, and metastatic vascular calcification [3, 4].',
              'কিডনি দুর্বল হলে ফসফেট আটকে যাওয়ার ভয়ে হাড়ের কোষ প্রচুর FGF23 হরমোন ছাড়ে যা প্রস্রাব দিয়ে ফসফেট বের করে দেয় [৪]। কিন্তু এটি ভিটামিন ডি তৈরি পুরোপুরি বন্ধ করে দেয় যার ফলে প্যারাথাইরয়েড হরমোন বেড়ে গিয়ে হাড়ের ক্যালসিয়াম গলিয়ে রক্তনালির প্রাচীরে জমা করে এবং রক্তনালিকে পাথরে রূপান্তর করে [৩, ৪]।'
            ),
            l(
              'Upon initiating maintenance hemodialysis, the nutritional paradigm reverses: dialytic amino acid clearance (8–12 g/session) and sterile membrane inflammation drive intense skeletal muscle proteolysis [1, 5]. To prevent fatal Protein-Energy Wasting (PEW), dialysis patients must double dietary protein intake to 1.0–1.2 g/kg/day, paired with non-calcium phosphate binders with meals [1, 5].',
              'ডায়ালাইসিস শুরু হতেই পুষ্টির নিয়ম সম্পূর্ণ বদলে যায়: ডায়ালাইসিসের সময় রক্ত থেকে প্রতিবার ৮-১২ গ্রাম প্রোটিন নষ্ট হয় এবং তীব্র পেশিক্ষয় ঘটে [১, ৫]। এই মারাত্মক পেশিক্ষয় (PEW) রোধে ডায়ালাইসিস রোগীদের প্রোটিন দ্বিগুণ বাড়িয়ে ১.০ থেকে ১.২ গ্রাম/কেজি খাওয়া বাধ্যতামূলক এবং সাথে ফসফেট বাইন্ডার ওষুধ খেতে হবে [১, ৫]।'
            ),
            l(
              'Declining tubular ROMK excretion in advanced CKD risks fatal hyperkalemic ventricular arrhythmias [3, 6]. Culinary wet-leaching (slicing tubers thinly, soaking in warm water for >=2 hours, and boiling with fresh water) removes 50% to 75% of soluble potassium, allowing safe consumption of nutrient-dense vegetables when paired with gastrointestinal potassium binders [3, 6].',
              'জটিল কিডনি রোগীদের রক্তে পটাশিয়াম বাড়লে হার্টবিট বন্ধ হওয়ার মারাত্মক ঝুঁকি থাকে [৩, ৬]। সবজি পাতলা করে কেটে ২-৪ ঘণ্টা পানিতে ভিজিয়ে রেখে পানি ফেলে দিয়ে পুনরায় সেদ্ধ করার বিশেষ রান্নার পদ্ধতি (লিচিং) সবজি থেকে ৫০-৭৫% পটাশিয়াম দূর করে দেয় এবং রোগীর জীবন রক্ষা করে [৩, ৬]।'
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
          heading: l('1. Tubuloglomerular Feedback & Renal Hemodynamic Autoregulation', '১. টিউবুলোগ্লোমেরুলার ফিডব্যাক ও কিডনির রক্তসঞ্চালন নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Renal autoregulation protects delicate glomerular capillaries from systemic arterial pressure fluctuations across a mean arterial pressure range of 80 to 160 mmHg [2]. Autoregulation is executed by two intrinsic mechanisms: the fast myogenic response of the pre-glomerular afferent arteriole and the slower, highly sensitive Tubuloglomerular Feedback (TGF) loop mediated by the macula densa [2, 3].',
              'কিডনির রক্তসঞ্চালন ব্যবস্থা এমনভাবে তৈরি যাতে সারা শরীরের রক্তচাপ ওঠানামা করলেও কিডনির ফিল্টারের ভেতরের চাপ সবসময় একদম নিখুঁত থাকে [২]। এটি দুটি প্রধান উপায়ে কাজ করে: রক্তনালির নিজস্ব পেশির প্রতিক্রিয়া এবং ম্যাকুলা ডেনসা নামক সংবেদনশীল সেন্সরের মাধ্যমে পরিচালিত টিউবুলোগ্লোমেরুলার ফিডব্যাক (TGF) [২, ৩]।'
            ),
            l(
              'The macula densa consists of specialized plaque epithelial cells located within the wall of the thick ascending limb of the loop of Henle, situated at the vascular pole of its originating glomerulus [2]. The apical membrane of macula densa cells expresses the sodium-potassium-2-chloride cotransporter (NKCC2) [2]. When glomerular filtration increases, delivered luminal fluid flow and sodium chloride load increase, accelerating NKCC2 solute transport into macula densa cells [2].',
              'ম্যাকুলা ডেনসা হলো কিডনির নালিকাতন্ত্রের এক বিশেষ সংবেদনশীল কোষের দল যা প্রতিটি ফিল্টারের ঠিক মুখে পাহারাদারের মতো বসে থাকে [২]। এই কোষগুলোর গায়ে NKCC2 নামক একটি লবণ সেন্সর থাকে [২]। ফিল্টার দিয়ে যখনই অতিরিক্ত রক্ত বা লবণ বেরিয়ে আসে, এই সেন্সরটি সাথে সাথে তা মেপে ফেলে [২]।'
            ),
            l(
              'Intracellular sodium and chloride influx triggers basolateral ATP release through pannexin channels [2]. Extracellular ecto-ATPases and 5\'-nucleotidases rapidly hydrolyze ATP into adenosine [2]. Extracellular adenosine binds to high-affinity G-protein-coupled A1 adenosine receptors on adjacent afferent arteriolar vascular smooth muscle cells, triggering cytosolic calcium release and causing immediate vasoconstriction of the afferent arteriole, restoring normal glomerular pressure and filtration rate [2].',
              'লবণের পরিমাণ বেড়ে গেলেই এই কোষগুলো সাথে সাথে অ্যাডিনোসিন নামক একটি রাসায়নিক সংকেত তৈরি করে [২]। এই অ্যাডিনোসিন রক্ত প্রবেশের ধমনির গায়ে গিয়ে আঘাত করে এবং ধমনিকে সংকুচিত করে দেয়; এর ফলে কিডনির ভেতরে অতিরিক্ত রক্তের প্রবেশ আটকে যায় এবং ফিল্টার সুরক্ষিত থাকে [২]।'
            ),
            l(
              'In diabetic nephropathy and high-protein dietary states, this protective TGF reflex is pathologically uncoupled [2, 3]. Luminal glucose and amino acids drive hyper-reabsorption of sodium in the proximal tubule via SGLT2 and sodium-amino acid cotransporters [3]. Consequently, sodium chloride delivery to the distal macula densa plummets; the macula densa falsely senses severe hypovolemia, shuts down adenosine release, and permits unrestrained afferent arteriolar vasodilation, locking remnant nephrons into permanent, destructive hyperfiltration [2, 3].',
              'কিন্তু ডায়াবেটিস এবং অতিরিক্ত প্রোটিন খেলে এই চমৎকার প্রতিরক্ষা ব্যবস্থাটি বিভ্রান্ত ও অকেজো হয়ে যায় [২, ৩]। প্রস্রাবে থাকা অতিরিক্ত গ্লুকোজ ও অ্যামিনো অ্যাসিড কিডনির শুরুর অংশেই সমস্ত লবণ শুষে নেয়; ফলে ম্যাকুলা ডেনসা পাহারাদারের কাছে কোনো লবণ পৌঁছায় না [৩]। পাহারাদার তখন ভুলভাবে মনে করে শরীরে রক্তের ঘাটতি হয়েছে এবং রক্ত প্রবেশের ধমনিকে পুরোপুরি খুলে দেয়; এর ফলে ফিল্টারের ভেতর অতিরিক্ত রক্ত ঢুকে ফিল্টার ছিঁড়ে ধ্বংস হয়ে যায় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Podocyte Biology & Mechanotransduction Injury', '২. পোডোসাইট জীববিজ্ঞান ও যান্ত্রিক চাপের আঘাত'),
          paragraphs: [
            l(
              'The podocyte is a terminally differentiated, highly specialized epithelial cell that envelops the outer surface of glomerular capillaries, serving as the final and most restrictive cellular sieve of the glomerular filtration barrier [2]. Podocytes possess a prominent cell body extending primary processes that branch into thousands of interdigitating secondary and tertiary foot processes (pedicels) [2]. Between adjacent foot processes lies the slit diaphragm, a specialized intercellular junction spanning a uniform width of 35 to 45 nanometers [2].',
              'পোডোসাইট (Podocyte) হলো কিডনির ফিল্টারের সবচেয়ে জটিল ও মূল্যবান বিশেষায়িত কোষ যা রক্তনালির বাইরের পর্দাকে অক্টোপাসের বাহুর মতো জড়িয়ে ধরে থাকে [২]। এই কোষগুলো তাদের অসংখ্য ক্ষুদ্র ক্ষুদ্র আঙুলের মতো উপাঙ্গ দিয়ে রক্তনালিকে আবৃত করে রাখে [২]। পাশাপাশি দুটি আঙুলের মধ্যবর্তী ফাঁকা স্থানটি মাত্র ৩৫ থেকে ৪৫ ন্যানোমিটারের একটি সূক্ষ্ম ছাঁকনি তৈরি করে যা রক্ত থেকে কোনো প্রোটিন বের হতে দেয় না [২]।'
            ),
            l(
              'The structural backbone of the slit diaphragm is composed of transmembrane adhesion proteins, predominantly nephrin (NPHS1) and podocin (NPHS2), which link intracellularly via adaptor proteins (CD2AP, ZO-1) to an organized actin cytoskeleton [2]. Under conditions of Brenner hyperfiltration, elevated capillary hydrostatic pressure exerts severe mechanical tangential tensile stress on the capillary wall, expanding capillary radius and physically stretching the overlying podocytes [2].',
              'এই ছাঁকনির মূল কাঠামো তৈরি হয় নেফ্রিন ও পোডোসিন নামের বিশেষ প্রোটিন দিয়ে যা কোষের অভ্যন্তরীণ পেশি কাঠামোর সাথে যুক্ত থাকে [২]। যখন খাবারের অতিরিক্ত প্রোটিনের কারণে ফিল্টারের ভেতরের রক্তচাপ বিপজ্জনকভাবে বাড়ে, তখন রক্তনালি বেলুনের মতো ফুলে ওঠে এবং পোডোসাইট কোষগুলোর ওপর প্রচণ্ড টানের সৃষ্টি হয় [২]।'
            ),
            l(
              'Mechanical stretch activates mechanosensitive transient receptor potential canonical (TRPC6) channels on podocytes, driving excessive calcium influx [2]. Intracellular calcium overload activates the phosphatase calcineurin, which dephosphorylates and activates the transcription factor NFAT, while simultaneously causing synaptopodin degradation [2]. Destabilization of the actin cytoskeleton leads to foot process effacement: podocyte processes lose their interdigitating architecture and flatten into continuous, dysfunctional sheets [2].',
              'এই অতিরিক্ত টানের ফলে কোষের ভেতরে বিপুল পরিমাণ ক্যালসিয়াম ঢুকে পড়ে [২]। ক্যালসিয়ামের বিষক্রিয়ায় কোষের অভ্যন্তরীণ কঙ্কাল ভেঙে চুরমার হয়ে যায় এবং সুন্দর আঙুলের মতো নকশাটি নষ্ট হয়ে পুরো কোষটি চ্যাপ্টা ও বিকৃত হয়ে যায় [২]।'
            ),
            l(
              'Because adult podocytes are post-mitotic cells incapable of cell division or replacement, sustained mechanical stress eventually detaches intact podocytes from the underlying glomerular basement membrane (podocyturia) [2]. Denuded areas of the basement membrane adhere to Bowman capsule, initiating segmental tuft collapse and irreversible focal segmental glomerulosclerosis (FSGS) [2]. Staged protein restriction directly reduces capillary mechanical stretch, preserving podocyte attachment and halting structural nephron dropout [1, 2, 3].',
              'মানুষের পোডোসাইট কোষ কখনোই নতুন করে তৈরি হয় না বা বিভাজিত হতে পারে না; তাই অতিরিক্ত টানের চোটে এই কোষগুলো একবার ছিঁড়ে প্রস্রাবের সাথে বেরিয়ে গেলে সেই জায়গাটি চিরতরে ফাঁকা হয়ে যায় [২]। ফলে কিডনির ফিল্টারটি সেখানে ফেটে গিয়ে রক্তনালি জমাট বেঁধে পুরো নেফ্রনটি মরে যায় [২]। খাবারে প্রোটিন নিয়ন্ত্রণ এই যান্ত্রিক টান দূর করে কোষগুলোকে বাঁচিয়ে রাখে এবং কিডনি বিকল হওয়া ঠেকায় [১, ২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Phosphate Additive Chemistry & Arterial Medial Calcification', '৩. রাসায়নিক ফসফেট ও রক্তনালির প্রাচীরে ক্যালসিয়াম জমা'),
          paragraphs: [
            l(
              'In clinical nephrology, dietary phosphorus management has undergone a fundamental revolution driven by the biochemistry of food additives [3, 4]. Historically, renal diets focused strictly on total elemental phosphorus quantity [3]. However, modern molecular nutrition recognizes that phosphorus bioavailability varies by orders of magnitude depending on its chemical speciation: organic phosphorus naturally bound in unrefined whole foods versus free inorganic phosphate salts artificially added during ultra-processing [4].',
              'কিডনি রোগীদের পুষ্টি চিকিৎসায় খাবারের ফসফেট ব্যবস্থাপনায় এক বৈপ্লবিক পরিবর্তন এসেছে [৩, ৪]। অতীতে মনে করা হতো সব খাবারের ফসফেট একই রকম [৩]। কিন্তু আধুনিক আণবিক বিজ্ঞান প্রমাণ করেছে যে প্রাকৃতিক খাবারের ফসফেট এবং প্রক্রিয়াজাত প্যাকেটজাত খাবারের কৃত্রিম রাসায়নিক ফসফেটের মধ্যে আকাশ-পাতাল তফাত রয়েছে [৪]।'
            ),
            l(
              'Organic phosphorus in unrefined plant foods (legumes, nuts, intact whole grains) is structurally stored as myo-inositol hexakisphosphate (phytate/IP6) [4]. Humans lack endogenous intestinal phytase enzymes; consequently, phytate-bound phosphorus cannot be efficiently hydrolyzed and only 20% to 40% is absorbed in the gut [4]. In contrast, the food industry heavily utilizes inorganic phosphate salts—such as sodium hexametaphosphate, tricalcium phosphate, and phosphoric acid—as moisture retainers, emulsifiers, and preservatives in processed meats, baked goods, frozen meals, and carbonated colas [4].',
              'ডাল, বাদাম ও দানাদার শস্যের মতো প্রাকৃতিক উদ্ভিজ্জ খাবারের ফসফেট মূলত ফাইটেট নামক শক্ত রাসায়নিক যৌগে বন্দি থাকে [৪]। মানুষের অন্ত্রে এই ফাইটেট ভাঙার কোনো এনজাইম নেই; ফলে এই ফসফেটের মাত্র ২০ থেকে ৪০ শতাংশ শরীরে শোষিত হয় এবং বাকিটা মলের সাথে বেরিয়ে যায় [৪]। অপরদিকে সসেজ, কোমল পানীয় ও প্যাকেটজাত খাবারে মেশানো কৃত্রিম রাসায়নিক ফসফেট কোনো বন্ধনে আবদ্ধ থাকে না [৪]।'
            ),
            l(
              'Inorganic phosphate additives exist as completely dissociated, water-soluble ions that do not require enzymatic cleavage [4]. They are absorbed with 90% to 100% efficiency across enterocyte paracellular tight junctions, delivering an immediate, massive surge of phosphate into the portal and systemic circulation [4]. This acute postprandial hyperphosphatemia triggers explosive osteocyte secretion of FGF23 and stimulates vascular smooth muscle cells (VSMCs) to express the sodium-dependent phosphate cotransporter Pit-1 (SLC20A1) [4].',
              'এই কৃত্রিম ফসফেট কোনো বাধা ছাড়াই অন্ত্রের দেয়াল ভেদ করে ৯০ থেকে ১০০ শতাংশ সরাসরি রক্তে ঢুকে পড়ে [৪]। এই আকস্মিক ফসফেটের বন্যা রক্তনালির পেশিকোষের ভেতরে ঢুকে পড়ে [৪]। এর ফলে রক্তনালির কোষগুলোর ভেতর মারাত্মক বিষক্রিয়া শুরু হয় [৪]।'
            ),
            l(
              'Intracellular phosphate overload activates the master osteogenic transcription factor Runx2 (Cbfa1) within vascular smooth muscle cells [4]. Transactivated VSMCs undergo phenotypic transdifferentiation: they lose contractile smooth muscle markers (alpha-smooth muscle actin) and transform into active, bone-forming osteochondrogenic-like cells [4]. These transdifferentiated cells secrete matrix vesicles loaded with calcium, phosphate, and alkaline phosphatase, precipitating crystalline hydroxyapatite into the arterial tunica media [4]. The resulting diffuse arterial medial calcification stiffens blood vessels, driving pulse wave velocity, left ventricular hypertrophy, and cardiovascular mortality [3, 4].',
              'রক্তনালির মসৃণ পেশিকোষগুলো অতিরিক্ত ফসফেটের কারণে নিজেদের পরিচয় হারিয়ে হাড় তৈরি করা ওস্টিওব্লাস্ট কোষে রূপান্তরিত হতে শুরু করে [৪]। এই পরিবর্তিত কোষগুলো রক্তনালির দেয়ালের ভেতরে হাড়ের মতো শক্ত চুন বা ক্যালসিয়াম জমা করতে থাকে [৪]। ফলে মানুষের ধমনিগুলো রাবারের মতো নমনীয় থাকার বদলে কাঁচ বা পাথরের পাইপের মতো শক্ত হয়ে যায় এবং যেকোনো সময় ফেটে গিয়ে হার্ট অ্যাটাক বা স্ট্রোক ঘটায় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Metabolic Acidosis & Muscle Ubiquitin-Proteasome Proteolysis', '৪. মেটাবলিক অ্যাসিডোসিস ও পেশির প্রোটিন ভাঙন'),
          paragraphs: [
            l(
              'Chronic metabolic acidosis is an inevitable consequence of advanced kidney disease, developing when the glomerular filtration rate falls below ~30 mL/min/1.73m2 [1, 3]. In healthy physiology, the kidneys regenerate filtered bicarbonate and excrete approximately 50 to 100 mmol of non-volatile metabolic acids per day, primarily as titratable acid (dihydrogen phosphate) and ammonium (NH4+) synthesized from proximal tubular glutamine deamination [3].',
              'মেটাবলিক অ্যাসিডোসিস হলো কিডনি রোগের এক চরম ক্ষতিকর পরিণতি, যা কিডনির কার্যক্ষমতা ৩০ শতাংশের নিচে নামলে প্রাকৃতিকভাবেই দেখা দেয় [১, ৩]। সুস্থ কিডনি রক্ত থেকে প্রতিদিন সমস্ত ক্ষতিকর অ্যাসিড প্রস্রাবের সাথে বের করে দিয়ে রক্তের পিএইচ (pH) সবসময় ৭.৩৫ থেকে ৭.৪৫ এর মধ্যে নিখুঁতভাবে রক্ষা করে [৩]।'
            ),
            l(
              'As functional renal mass declines, tubular ammonium excretion collapses, leading to systemic hydrogen ion retention and a progressive decline in serum bicarbonate (<22 mmol/L) [1, 3]. Systemic metabolic acidosis triggers profound, multi-system catabolic derangements [3]. In bone, excess hydrogen ions stimulate osteoclasts to dissolve bone hydroxyapatite as a chemical proton buffer, releasing bone calcium and worsening metabolic bone disease [3, 4].',
              'কিডনি নষ্ট হয়ে গেলে প্রস্রাব দিয়ে অ্যাসিড বের হওয়া পুরোপুরি বন্ধ হয়ে যায় এবং রক্তে ক্ষতিকর অ্যাসিড জমতে জমতে বাইকার্বনেটের মাত্রা ২২ এর নিচে নেমে আসে [১, ৩]। রক্ত অ্যাসিডিক হয়ে গেলে শরীর বেঁচে থাকার জন্য হাড়ের ক্যালসিয়াম গলিয়ে রক্তের অ্যাসিড কমাতে চেষ্টা করে, যার ফলে রোগীর হাড় নরম ও ভঙ্গুর হয়ে যায় [৩, ৪]।'
            ),
            l(
              'In skeletal muscle, chronic acidosis is the primary trigger of muscle proteolysis, activating the ATP-dependent Ubiquitin-Proteasome System (UPS) and muscle caspase-3 [3, 5]. Hydrogen ions stimulate glucocorticoid secretion and downregulate muscle insulin/IGF-1 signaling [5]. Unrestrained caspase-3 cleaves complex actomyosin complexes into monomeric actin and myosin, which are tagged with polyubiquitin chains by muscle-specific E3 ubiquitin ligases (MuRF1 and Atrogin-1) and degraded by the 26S proteasome [5].',
              'মাংসপেশির ক্ষেত্রে এই অতিরিক্ত অ্যাসিড এক চরম ধ্বংসলীলা চালায় [৩, ৫]। রক্তে অ্যাসিড বাড়লে তা পেশির ভেতরের ইউবিকুইটিন-প্রোটিসোম নামক ক্ষতিকর সংকেতকে সক্রিয় করে দেয় [৫]। এই সংকেতের কারণে শরীর নিজের মাংসপেশির ফাইবারগুলোকে নির্মমভাবে কেটে টুকরো টুকরো করে ধ্বংস করতে শুরু করে [৫]।'
            ),
            l(
              'This relentless proteolytic cascade drives severe skeletal muscle wasting, sarcopenia, and physical frailty [3, 5]. Correcting metabolic acidosis via dietary base titration (increasing alkaline plant foods, reducing animal acid precursors) and oral sodium bicarbonate supplementation (maintaining serum bicarbonate >=22 mmol/L) halts muscle proteolysis, preserves nitrogen balance, and slows the rate of eGFR decline by up to 50%, cementing alkali therapy as a mandatory pillar of renal dietetics [1, 3].',
              'এর ফলে কিডনি রোগীর পেশি শুকিয়ে রোগী কঙ্কালসার ও দুর্বল হয়ে পড়েন [৩, ৫]। কিন্তু সঠিক পুষ্টি থেরাপির মাধ্যমে ক্ষতিকর প্রাণিজ প্রোটিন কমিয়ে ক্ষারীয় উদ্ভিজ্জ খাবার গ্রহণ এবং চিকিৎসকের পরামর্শে খাবার সোডা (সোডিয়াম বাইকার্বনেট) সেবন করে রক্তের অ্যাসিড স্বাভাবিক রাখলে পেশিক্ষয় পুরোপুরি বন্ধ হয় এবং কিডনির আয়ু দ্বিগুণ বেড়ে যায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Intestinal Microbiome Remodeling & Uremic Toxin Biosynthesis', '৫. অন্ত্রের মাইক্রোবায়োম রূপান্তর ও ইউরেমিক টক্সিন সংশ্লেষ'),
          paragraphs: [
            l(
              'The gut-kidney axis represents a profound bidirectional pathophysiological highway in chronic kidney disease [3, 5]. In advanced CKD, the massive accumulation of urea in the circulation leads to heavy urea diffusion across the mucosal barrier into the gastrointestinal tract lumen [5]. Luminal bacterial ureases hydrolyze urea into massive concentrations of ammonia and ammonium hydroxide, raising intestinal luminal pH and inflicting caustic chemical injury on the intestinal mucosa [5].',
              'অন্ত্র এবং কিডনির মধ্যকার যোগাযোগ আধুনিক চিকিৎসাবিজ্ঞানের এক বিস্ময়কর আবিষ্কার [৩, ৫]। কিডনি যখন রক্ত থেকে ইউরিয়া বের করতে পারে না, তখন রক্তে থাকা অতিরিক্ত ইউরিয়া চুইয়ে অন্ত্রের ভেতরে ঢুকতে শুরু করে [৫]। অন্ত্রের ক্ষতিকর ব্যাকটেরিয়ারা এই ইউরিয়া ভেঙে প্রচুর বিষাক্ত অ্যামোনিয়া তৈরি করে যা অন্ত্রের ভেতরের মসৃণ দেয়ালকে অ্যাসিডের মতো পুড়িয়ে নষ্ট করে ফেলে [৫]।'
            ),
            l(
              'This chemical mucosal injury disrupts tight junction proteins (claudin-1, occludin, and ZO-1), transforming the intestinal epithelium into a leaky, hyperpermeable barrier [5]. Concurrently, the uremic milieu alters colonic microbial taxonomy, driving an overgrowth of proteolytic bacteria (Clostridiaceae, Enterobacteriaceae) and depleting beneficial saccharolytic taxa (Bifidobacteriaceae, Lactobacillaceae) that synthesize health-promoting Short-Chain Fatty Acids [5].',
              'এর ফলে অন্ত্রের প্রতিরক্ষামূলক দেয়াল ফুটো হয়ে যায় যাকে লিকি গাট (Leaky Gut) বলা হয় [৫]। একই সাথে পেটের উপকারী ব্যাকটেরিয়াগুলো মরে যায় এবং ক্ষতিকর পচনশীল ব্যাকটেরিয়া অন্ত্রের ওপর রাজত্ব শুরু করে [৫]।'
            ),
            l(
              'Proteolytic colonic bacteria ferment unabsorbed dietary amino acids into potent toxic precursors [3, 5]. Tryptophan is metabolically converted by bacterial tryptophanase into indole, which traverses the leaky gut into the portal blood and is oxidized and sulfated by hepatic CYP2E1 and SULT1A1 into Indoxyl Sulfate [5]. Similarly, tyrosine and phenylalanine are fermented into p-cresol, which is sulfated in the liver into p-Cresyl Sulfate [5]. Both indoxyl sulfate and p-cresyl sulfate are protein-bound uremic toxins that circulate tightly bound to albumin (>90% bound), making them virtually impossible to remove via conventional hemodialysis [3, 5].',
              'এই ক্ষতিকর ব্যাকটেরিয়ারা খাবারের আমিষ পচিয়ে ইনডক্সিল সালফেট এবং পি-ক্রেসিল সালফেটের মতো মারাত্মক বিষাক্ত ইউরেমিক টক্সিন তৈরি করে [৩, ৫]। এই বিষগুলো রক্তে ঢুকে অ্যালবুমিন প্রোটিনের সাথে এমন শক্তভাবে আঠার মতো লেগে থাকে যে ডায়ালাইসিসের শক্তিশালী মেশিনও এদেরকে রক্ত থেকে বের করতে পারে না [৩, ৫]।'
            ),
            l(
              'Circulating indoxyl sulfate and p-cresyl sulfate directly enter renal tubular cells and vascular endothelial cells via organic anion transporters (OAT1/OAT3), stimulating NADPH oxidase to generate intense oxidative stress that accelerates tubulointerstitial fibrosis and vascular endothelial necrosis [3, 5]. Plant-dominant low-protein diets (PLADO) rich in fermentable soluble fibers shift colonic fermentation away from proteolytic putrefaction and back toward saccharolytic fermentation, drastically lowering blood levels of indoxyl sulfate and p-cresyl sulfate and safeguarding remnant renal and cardiovascular structures [1, 3, 5].',
              'রক্তে ঘুরে বেড়ানো এই বিষাক্ত উপাদানগুলো কিডনির অবশিষ্ট ভালো কোষগুলোকে আক্রমণ করে চিরতরে মেরে ফেলে এবং রক্তনালিতে প্রদাহ সৃষ্টি করে [৩, ৫]। কিন্তু উদ্ভিজ্জ উচ্চ আঁশযুক্ত খাবার গ্রহণ করলে অন্ত্রের ভালো ব্যাকটেরিয়ারা জেগে ওঠে এবং এই বিষাক্ত ইউরেমিক টক্সিন তৈরি প্রায় বন্ধ হয়ে যায়, ফলে ডায়ালাইসিস ছাড়াই রোগী দীর্ঘদিন সুস্থ থাকেন [১, ৩, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Research Frontiers & Precision Renal Dietetics', '৬. আধুনিক গবেষণা ও নির্ভুল রেনাল ডায়েটেটিক্স'),
          paragraphs: [
            l(
              'The horizon of renal nutrition has definitively transitioned from archaic, punitive, single-nutrient restriction toward precision, plant-dominant dietary patterns designed to preserve organ longevity and optimize quality of life [1, 3]. Landmark clinical trials have validated the safety and efficacy of the Plant-Dominant Low-Protein Diet (PLADO), demonstrating that diets deriving >70% of protein from unrefined whole plant foods provide sufficient essential amino acids without accelerating uremic toxicity or hyperkalemia when culinary leaching is applied [3].',
              'আধুনিক রেনাল নিউট্রিশন রোগীদের সব খাবার বন্ধ করে দেওয়ার পুরনো নির্মম নিয়ম থেকে বেরিয়ে এসে উদ্ভিজ্জ-প্রধান বৈজ্ঞানিক পথ্যের (PLADO) দিকে এগিয়ে চলেছে [১, ৩]। গবেষণায় প্রমাণিত যে সঠিক পদ্ধতিতে রান্না করলে উদ্ভিজ্জ খাবার থেকেই সমস্ত প্রয়োজনীয় প্রোটিন পাওয়া সম্ভব, যা কোনো বিষক্রিয়া বা পটাশিয়ামের ভয় ছাড়াই কিডনিকে দীর্ঘদিন টিকিয়ে রাখে [৩]।'
            ),
            l(
              'Keto-acid analogue (KAA) supplementation represents an advanced therapeutic strategy in very low-protein diets (vLPD: 0.28 to 0.40 g/kg/day) [1, 3]. Keto-analogues are nitrogen-free alpha-keto carbon skeletons corresponding to essential amino acids [3]. Inside the body, these keto-acids capture circulating toxic transaminase amino groups, converting endogenous urea nitrogen into essential L-amino acids [3]. This elegant biochemical transamination recycles nitrogenous waste for protein synthesis, slashing blood urea nitrogen (BUN) while preserving muscle mass and slowing eGFR loss in compliant patients [1, 3].',
              'কিটো-অ্যানালগ (Keto-acid analogues) ওষুধ কিডনি রোগের পুষ্টি চিকিৎসায় এক অনন্য প্রযুক্তি [১, ৩]। এটি মূলত নাইট্রোজেনবিহীন অ্যামিনো অ্যাসিডের কঙ্কাল [৩]। পেটে প্রবেশের পর এটি রক্তে ঘুরে বেড়ানো বিষাক্ত ইউরিয়া থেকে নাইট্রোজেন টেনে নিয়ে নিজে ভালো প্রোটিনে রূপান্তরিত হয় [৩]। এর ফলে রক্তের বিষাক্ত ইউরিয়া সাফ হয়ে যায় এবং রোগী মাংসপেশি না হারিয়ে সম্পূর্ণ সুস্থ থাকেন [১, ৩]।'
            ),
            l(
              'Metabolomic profiling and real-time continuous potassium monitoring are emerging as transformative diagnostic tools in nephrology [3, 6]. Non-invasive wearable sensors capable of tracking transdermal potassium and urea kinetics promise to eliminate the fear of episodic hyperkalemic crises, empowering clinicians to liberalize potassium-rich, antioxidant-dense vegetables for individual CKD patients [6].',
              'আধুনিক চিকিৎসায় ত্বকের ওপর লাগানো বিশেষ সেন্সরের মাধ্যমে রক্ত না নিয়েই প্রতি মুহূর্তের পটাশিয়াম ও ইউরিয়ার মাত্রা পরিমাপ করার প্রযুক্তি উদ্ভাবিত হচ্ছে [৩, ৬]। এর ফলে রোগীরা কোনো আতঙ্ক ছাড়াই শাকসবজি ও পুষ্টিকর খাবার উপভোগ করতে পারছেন [৬]।'
            ),
            l(
              'Ultimately, evidence-based renal dietetics establishes that targeted Medical Nutrition Therapy is not a peripheral lifestyle recommendation, but a primary, disease-modifying clinical science capable of altering intraglomerular hemodynamics, silencing osteocytic mineral bone disruption, preventing dialytic protein wasting, and transforming the trajectory of human chronic kidney disease [1, 2, 3, 5].',
              'সবশেষে আধুনিক বিজ্ঞান দ্ব্যর্থহীনভাবে প্রমাণ করেছে যে রেনাল নিউট্রিশন কোনো সাধারণ পথ্য নয়; এটি একটি সুনির্দিষ্ট আণবিক চিকিৎসা বিজ্ঞান যা কিডনির ভেতরের রক্তচাপ নিয়ন্ত্রণ করে, হাড় ও হার্টের মারাত্মক জটিলতা রোধ করে এবং মানুষকে ডায়ালাইসিস ও কিডনি বিকল হওয়ার হাত থেকে আজীবন রক্ষা করতে সক্ষম [১, ২, ৩, ৫]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            '1. Glomerular Basement Membrane Heparan Sulfate & Podocyte Slit Kinetics',
            '১. গ্লোমেরুলার বেসমেন্ট মেমব্রেনের হেপারান সালফেট ও পোডোসাইটের ছাঁকন গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'The biophysical selectivity of the glomerular filtration barrier is governed by the synergistic interplay between negative electrostatic charge barriers and mechanical pore-size sieving [2]. The glomerular basement membrane (GBM) contains extensive networks of agrin and perlecan proteoglycans densely decorated with negatively charged heparan sulfate glycosaminoglycan chains [2]. Under normal physiological conditions, this polyanionic shield repels circulating plasma polyanions, creating an insurmountable electrostatic barrier that prevents negative macromolecules—most notably serum albumin (isoelectric point ~4.7)—from traversing the capillary wall [2].',
              'কিডনির গ্লোমেরুলার ফিল্টারের সূক্ষ্ম ছাঁকন ক্ষমতা মূলত ঋণাত্মক বৈদ্যুতিক চার্জের বাধা এবং মেকানিক্যাল ছিদ্রের আকারের নিখুঁত সমন্বয়ের ওপর নির্ভর করে [২]। গ্লোমেরুলার বেসমেন্ট মেমব্রেনে (GBM) প্রচুর পরিমাণে অ্যাগ্রিন ও পার্লিকান নামক প্রোটিওগ্লাইকান থাকে যাতে ঋণাত্মক চার্জযুক্ত হেপারান সালফেটের ঘন আস্তরণ থাকে [২]। স্বাভাবিক সুস্থ অবস্থায় এই তীব্র ঋণাত্মক চার্জ রক্তের ঋণাত্মক চার্জযুক্ত মূল্যবান প্রোটিন—বিশেষ করে সিরাম অ্যালবুমিনকে (যার আইসোইলেকট্রিক পয়েন্ট ৪.৭)—বিকর্ষণ করে রক্তনালির ভেতরেই আটকে রাখে এবং কোনোভাবেই বাইরে বের হতে দেয় না [২]।'
            ),
            l(
              'Distal to the GBM, podocyte foot processes interdigitate to form the filtration slit diaphragm, a specialized multiprotein junction anchored by nephrin (NPHS1), podocin (NPHS2), and FAT1 cadherin-like proteins [2]. The intracellular domains of nephrin and podocin assemble into a dynamic signaling scaffold that recruits CD2-associated protein (CD2AP), Nck adaptors, and the actin-bundling protein synaptopodin [2]. This multiprotein complex couples the slit diaphragm directly to the underlying parallel contractile actin filament bundles, maintaining high mechanical tensile strength against pulsating capillary filtration pressures [2].',
              'বেসমেন্ট মেমব্রেনের বাইরে পোডোসাইট কোষের আঙুলের মতো উপাঙ্গগুলো পরস্পরের সাথে আঙুল মেলানোর মতো করে স্লিট ডায়াফ্রাম নামক সূক্ষ্ম জাল তৈরি করে, যা নেফ্রিন, পোডোসিন এবং এফএটি১ ক্যাডেরিন প্রোটিন দ্বারা গঠিত [২]। নেফ্রিন ও পোডোসিনের ভেতরের অংশ বিশেষ অ্যাডাপ্টার প্রোটিন ও সিন্যাপটোপোডিনের মাধ্যমে কোষের অভ্যন্তরীণ অ্যাক্টিন পেশি তন্তুর সাথে অত্যন্ত দৃঢ়ভাবে যুক্ত থাকে [২]। এই সুসংগঠিত আণবিক কাঠামো স্পন্দিত রক্তের প্রবল চাপের মুখেও ফিল্টারের গঠনকে সুদৃঢ় ও অটুট রাখে [২]।'
            ),
            l(
              'Under chronic Brenner hyperfiltration, pathologically elevated intraglomerular capillary hydrostatic pressure (P_gc >65 mmHg) generates severe mechanical hoop stress and circumferential stretch on the capillary loop [2]. Mechanical stretch activates the stretch-sensitive calcium-permeable channel TRPC6 (Transient Receptor Potential Canonical 6) located on podocyte plasma membranes [2]. The resulting excessive influx of cytosolic Ca2+ activates calcineurin phosphatase, which dephosphorylates Nuclear Factor of Activated T-cells (NFAT) and stimulates cathepsin L expression [2]. Cathepsin L proteolytically degrades synaptopodin and dynamin, destabilizing the actin cytoskeleton and triggering foot process effacement [2].',
              'ব্রেনারের দীর্ঘস্থায়ী অতি-পরিস্রাবণে রক্তনালির ভেতরের চাপ ৬৫ মিলিমিটারের ওপরে উঠে গেলে রক্তনালির দেয়ালে প্রচণ্ড টানের সৃষ্টি হয় [২]। এই অতিরিক্ত টানের কারণে পোডোসাইট ঝিল্লির টিআরপিসি৬ (TRPC6) ক্যালসিয়াম চ্যানেলটি অনিয়ন্ত্রিতভাবে খুলে যায় এবং কোষে অতিরিক্ত ক্যালসিয়াম ঢুকে পড়ে [২]। ক্যালসিয়াম বৃদ্ধির ফলে ক্যালসিনুরিন সক্রিয় হয়ে ক্যাথেপসিন এল এনজাইমের মাধ্যমে সিন্যাপটোপোডিন ও ডায়নামিন প্রোটিনগুলোকে কেটে টুকরো টুকরো করে ফেলে, যার ফলে কোষের অভ্যন্তরীণ কঙ্কাল ভেঙে পড়ে এবং সূক্ষ্ম ছাঁকনি পর্দা চ্যাপ্টা ও অকেজো হয়ে যায় [২]।'
            ),
            l(
              'Foot process effacement flattens the discrete filtration slits into an unstructured, leaky epithelial sheet, stripping the basement membrane of negative charge and permitting massive albuminuria [2, 3]. Sustained shear detachment of viable podocytes into the urinary space leaves denuded basement membrane areas that adhere to parietal epithelial cells, driving focal segmental glomerulosclerosis (FSGS) and irreversible nephron loss [2]. Staged dietary protein restriction (0.55–0.60 g/kg/day) lowers P_gc, silencing TRPC6 mechanotransduction, preventing synaptopodin cleavage, and halting podocyte detachment to preserve residual renal architecture [1, 2, 3].',
              'ছাঁকনি নষ্ট হয়ে যাওয়ায় রক্ত থেকে প্রস্রাবে ব্যাপক হারে অ্যালবুমিন প্রোটিন বের হতে শুরু করে এবং রক্তনালির পর্দা থেকে পোডোসাইট কোষগুলো পুরোপুরি ছিঁড়ে গিয়ে প্রস্রাবের সাথে অপচয় হয় (Podocyturia) [২, ৩]। উন্মুক্ত বেসমেন্ট মেমব্রেনে প্রদাহ সৃষ্টি হয়ে স্থায়ী ক্ষত (FSGS) তৈরি হয় এবং অবশিষ্ট ভালো নেফ্রনগুলো ধ্বংস হয়ে যায় [২]। কিন্তু খাবারে প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজিতে সীমাবদ্ধ রাখলে কিডনির ভেতরের রক্তচাপ কমে যায়, ক্যালসিয়াম বিষক্রিয়া বন্ধ হয় এবং পোডোসাইট কোষগুলো ছিঁড়ে যাওয়া থেকে রক্ষা পেয়ে কিডনি বেঁচে থাকে [১, ২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            '2. Alpha-Klotho Shedding, FGFR1c Signaling & Soluble Klotho Vasoprotection',
            '২. আলফা-ক্লথো প্রোটিন বিচ্যুতি, FGFR1c সংকেত ও দ্রবণীয় ক্লথোর ভাস্কুলার সুরক্ষা'
          ),
          paragraphs: [
            l(
              'The aging-suppressor gene *KLOTHO* encodes a 130-kDa single-pass type-I transmembrane glycoprotein expressed predominantly in the distal convoluted tubules, proximal tubules, and choroid plexus [4]. Alpha-Klotho possesses two extracellular tandem internal repeats (KL1 and KL2 domains) that share sequence homology with family-1 beta-glucosidases but lack classic glucosidase catalytic residues [4]. Membrane-bound Klotho functions as an obligate non-enzymatic co-receptor for Fibroblast Growth Factor 23 (FGF23), an endocrine hormone synthesized by osteocytes in response to elevated circulating phosphate and calcitriol [4].',
              'বয়স-নিয়ন্ত্রণকারী জিন ক্লথো (KLOTHO) ১৩০ কিলোগ্রামের একটি বিশেষ গ্লাইকোপ্রোটিন তৈরি করে যা প্রধানত কিডনির দূরবর্তী ও নিকটবর্তী নালিকায় এবং মস্তিষ্কের প্লেক্সাসে অবস্থান করে [৪]। আলফা-ক্লথোর বহিঃকোষীয় অংশে KL1 ও KL2 নামক দুটি বিশেষ অঞ্চল থাকে যা বিশেষ প্রোটিনের মতো দেখতে [৪]। ঝিল্লি-সংযুক্ত ক্লথো মূলত হাড়ের অস্টিওসাইট কোষ থেকে ক্ষরিত এফজিএফ২৩ (FGF23) হরমোনকে গ্রহণ করার জন্য একটি অপরিহার্য কো-রিসেপ্টর হিসেবে কাজ করে [৪]।'
            ),
            l(
              'In healthy renal tissue, membrane Klotho forms a binary receptor complex with canonical Fibroblast Growth Factor Receptor 1c (FGFR1c), converting a low-affinity receptor into an ultra-high-affinity docking platform specifically tuned for FGF23 [4]. Binding of FGF23 to the FGFR1c-Klotho complex activates downstream intracellular signaling through the mitogen-activated protein kinase (MAPK) cascade, specifically inducing phosphorylation of Extracellular Signal-Regulated Kinases 1 and 2 (ERK1/2) and early growth response protein-1 (Egr-1) [4]. Phospho-ERK1/2 signaling drives rapid endocytosis and lysosomal degradation of the apical sodium-phosphate cotransporters NaPi-IIa (SLC34A1) and NaPi-IIc (SLC34A3), promoting renal phosphate excretion [4].',
              'সুস্থ কিডনিতে ক্লথো প্রোটিন FGFR1c রিসেপ্টরের সাথে এক নিখুঁত বন্ধন তৈরি করে, যার ফলে রক্তে ভাসমান FGF23 হরমোন এসে খুব সহজে সেখানে যুক্ত হতে পারে [৪]। হরমোনটি যুক্ত হওয়ার সাথে সাথে কোষের ভেতরের এমএপিকে (MAPK) ও ইআরকে (ERK1/2) সংকেত পথ সক্রিয় হয়ে ওঠে [৪]। এই সংকেতের প্রভাবে কিডনির কোষগুলো তাদের উপরিভাগের ফসফেট গ্রহণকারী চ্যানেলগুলোকে (NaPi-IIa ও NaPi-IIc) কোষের ভেতরে টেনে নিয়ে ধ্বংস করে ফেলে, যার ফলে অতিরিক্ত ফসফেট প্রস্রাব দিয়ে নির্গত হয়ে রক্ত পরিষ্কার হয় [৪]।'
            ),
            l(
              'Beyond its membrane co-receptor role, the extracellular domain of alpha-Klotho is cleaved and shed into the systemic circulation by membrane-anchored zinc metalloproteinases, specifically ADAM10 and ADAM17 (TACE) [4]. Cleaved soluble Klotho (sKlotho) circulates as a 130-kDa holoprotein or 65-kDa KL1/KL2 fragments, functioning as a multi-target endocrine hormone [4]. Soluble Klotho displays intrinsic sialidase activity that hydrolyzes terminal sialic acid residues from cell-surface ion channels (TRPV5, ROMK1), stabilizing their cell-surface residency to promote calcium retention and potassium secretion [4, 6]. Furthermore, sKlotho binds cell-surface receptors on vascular endothelial cells, stimulating eNOS dimerization and preventing cellular senescence [4].',
              'ঝিল্লিতে আটকে থাকার পাশাপাশি অ্যাডাম১০ (ADAM10) ও অ্যাডাম১৭ এনজাইম ক্লথো প্রোটিনের বাইরের অংশটিকে কেটে রক্তস্রোতে ভাসিয়ে দেয়, যাকে দ্রবণীয় ক্লথো (Soluble Klotho) বলা হয় [৪]। এই দ্রবণীয় ক্লথো রক্তের মাধ্যমে সারা শরীরে ঘুরে এক শক্তিশালী প্রতিরক্ষামূলক হরমোন হিসেবে কাজ করে [৪]। এটি রক্তনালির এন্ডোথেলিয়াল কোষের ওপর কাজ করে নাইট্রিক অক্সাইড তৈরির এনজাইমকে (eNOS) সক্রিয় রাখে, রক্তনালি শিথিল ও চওড়া করে এবং রক্তনালির বার্ধক্য ও জারণজনিত ক্ষতি দৃঢ়ভাবে প্রতিহত করে [৪, ৬]।'
            ),
            l(
              'In chronic kidney disease, tubulointerstitial inflammation and oxidative stress cause rapid epigenetic silencing and microRNA-mediated degradation of renal *KLOTHO* transcripts, precipitating a catastrophic state of systemic Klotho deficiency [4]. Lacking membrane Klotho, remnant nephrons develop severe FGF23 resistance, requiring massive osteocytic FGF23 hypersecretion (>1,000 pg/mL) to maintain phosphaturia [4]. Simultaneously, the loss of circulating soluble Klotho removes endogenous vascular protection, driving unrestrained endothelial apoptosis, uncoupling eNOS, and accelerating diffuse arterial medial calcification [3, 4]. Strict control of dietary phosphorus and restriction of inorganic additives attenuates the osteocytic FGF23 surge and preserves residual Klotho expression [1, 4].',
              'কিডনি রোগ দেখা দিলে প্রদাহ ও বিষক্রিয়ার কারণে কিডনির ক্লথো তৈরির জিনটি পুরোপুরি বন্ধ হয়ে যায়, ফলে শরীরে মারাত্মক ক্লথো ঘাটতি দেখা দেয় [৪]। ক্লথো না থাকায় কিডনি আর স্বাভাবিকভাবে কাজ করতে পারে না এবং রক্তে ফসফেট বেড়ে যাওয়ার ভয়ে হাড় থেকে স্বাভাবিকের চেয়ে শতগুণ বেশি ক্ষতিকর FGF23 নিঃসৃত হতে থাকে [৪]। একই সাথে রক্তে দ্রবণীয় ক্লথো কমে যাওয়ায় রক্তনালির ভেতরের সুরক্ষা নষ্ট হয় এবং রক্তনালিতে দ্রুত ক্যালসিয়াম জমে রক্তনালি পাথরের মতো শক্ত হয়ে যায় [৩, ৪]। খাবারে ফসফেট নিয়ন্ত্রণ এই মারাত্মক হরমোন বিপর্যয় রুখে কিডনি ও রক্তনালিকে রক্ষা করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            '3. Pit-1 Transactivation, Runx2 Osteochondrogenic Switch & Calciprotein Particle Nanokinetics',
            '৩. Pit-1 সক্রিয়করণ, Runx2 ওস্টিওজেনিক রূপান্তর ও ক্যালসিপ্রোটিন কণা ন্যানোগতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Cardiovascular calcification in chronic kidney disease is not a passive physicochemical crystallization of mineral salts, but an active, tightly orchestrated cell-mediated phenotypic transdifferentiation of vascular smooth muscle cells (VSMCs) [3, 4]. The arterial wall consists of concentric layers: the intima, the muscular media, and the adventitia [4]. In advanced CKD, calcification preferentially targets the internal elastic lamina and tunica media (Monckeberg medial sclerosis), stiffening arterial conduits without necessarily occluding the vessel lumen [4].',
              'কিডনি রোগীদের রক্তনালিতে চুন বা ক্যালসিয়াম জমা কোনো সাধারণ রাসায়নিক অধঃক্ষেপণ নয়; এটি রক্তনালির মসৃণ পেশিকোষের এক অত্যন্ত সুসংগঠিত ক্ষতিকর রূপান্তর [৩, ৪]। মানুষের ধমনি তিনটি স্তরে গঠিত: ভেতরের ইন্টিমা, মাঝের পেশিবহুল মিডিয়া এবং বাইরের অ্যাডভেন্টিশিয়া [৪]। জটিল কিডনি রোগে এই ক্যালসিয়াম প্রধানত ধমনির মাঝের স্তরে (টুনিকা মিডিয়া) জমা হয়, যা রক্তনালিকে পাথরের পাইপের মতো শক্ত করে ফেলে এবং রক্তচাপ ও হার্ট ফেইলিউরের ঝুঁকি চরম আকার ধারণ করে [৪]।'
            ),
            l(
              'Hyperphosphatemia, exacerbated by high dietary inorganic phosphate intake, drives excessive phosphate influx into VSMCs via the type-III sodium-dependent phosphate cotransporter Pit-1 (SLC20A1) [4]. Intracellular phosphate accumulation activates the ERK1/2 and p38 MAPK pathways, which translocate to the nucleus to induce the transcription of Runt-related transcription factor 2 (Runx2/Cbfa1) and msh homeobox 2 (Msx2)—the master transcriptional switches governing bone osteoblast differentiation [4]. Once Runx2 is transactivated, VSMCs downregulate smooth muscle lineage markers (alpha-smooth muscle actin, SM22-alpha) and de novo synthesize bone-specific matrix proteins: alkaline phosphatase (TNAP), osteocalcin, and type I collagen [4].',
              'খাবারের কৃত্রিম ফসফেটের কারণে রক্তে ফসফেট বাড়লে রক্তনালির মসৃণ পেশিকোষগুলো পিট-১ (Pit-1) চ্যানেলের মাধ্যমে অতিরিক্ত ফসফেট কোষের ভেতরে টেনে নেয় [৪]। কোষের ভেতরে ফসফেট বেড়ে গেলেই তা কোষের ভেতরের সংকেত পাঠিয়ে রানক্স-২ (Runx2) নামক একটি মাস্টার সুইচ অন করে দেয় যা সাধারণ পেশিকোষকে হাড় তৈরিকারী ওস্টিওব্লাস্ট কোষে রূপান্তরিত করে [৪]। এই রূপান্তরিত কোষগুলো তাদের পেশির বৈশিষ্ট্য হারিয়ে হাড়ের মতো ক্ষতিকর অ্যালকালাইন ফসফেটেজ ও কোলাজেন তৈরি শুরু করে [৪]।'
            ),
            l(
              'Concurrently, supersaturated calcium and phosphate in the uremic circulation interact with the hepatic circulating glycoprotein fetuin-A to form colloidal nanoparticles termed Calciprotein Particles (CPPs) [4]. Primary calciprotein particles (CPP-1) are spherical, soluble 50-nm complexes containing amorphous calcium phosphate shielded by a fetuin-A monolayer [4]. However, under sustained hyperphosphatemia and metabolic acidosis, CPP-1 particles undergo a spontaneous topological phase transition into secondary calciprotein particles (CPP-2), which are larger (150–200 nm), crystalline, needle-shaped particles containing crystalline hydroxyapatite [4].',
              'একই সাথে রক্তে অতিরিক্ত ক্যালসিয়াম ও ফসফেট লিভার থেকে আসা ফেটুইন-এ প্রোটিনের সাথে মিশে ক্যালসিপ্রোটিন কণা (CPP) নামক অতি সূক্ষ্ম ন্যানোকণা তৈরি করে [৪]। শুরুতে এই কণাগুলো ক্ষুদ্র ও নরম থাকে (CPP-1), কিন্তু রক্তে ক্রমাগত ফসফেট ও অ্যাসিড বাড়তে থাকলে এগুলো কঠিন ও ধারালো সূচের মতো স্ফটিকাকার কণিকায় (CPP-2) রূপান্তরিত হয় যার ভেতরে বিপজ্জনক হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক জমাট বাঁধে [৪]।'
            ),
            l(
              'Crystalline CPP-2 particles deposit into the extracellular matrix of the arterial media and are endocytosed by VSMCs and macrophages via scavenger receptors [4]. CPP-2 internalization stimulates the NLRP3 inflammasome, unleashing Interleukin-1-beta and tumor necrosis factor-alpha, while promoting matrix vesicle release and catastrophic medial mineralization [4]. Restricting dietary phosphorus, entirely eliminating inorganic phosphate food additives (E338–E343), and prescribing non-calcium phosphate binders (sevelamer, sucroferric oxyhydroxide) interrupts Pit-1 transactivation, prevents CPP-2 crystallization, and protects the arterial tree from fatal calcific transformation [1, 3, 4].',
              'এই ধারালো CPP-2 কণাগুলো রক্তনালির দেয়ালের স্থিতিস্থাপক তন্তুর ভেতরে জমা হয় এবং শ্বেত রক্তকণিকাকে আক্রমণ করে তীব্র প্রদাহ ও বিষাক্ত সাইটোকাইন সৃষ্টি করে [৪]। এর ফলে পুরো রক্তনালি ধীরে ধীরে জীবন্ত হাড়ের মতো পাথুরে রূপ ধারণ করে [৪]। খাবারে কৃত্রিম রাসায়নিক ফসফেট পুরোপুরি বর্জন এবং আধুনিক নন-ক্যালসিয়াম ফসফেট বাইন্ডার (সেভেলামার বা সুক্রোফেরিক অক্সিহাইড্রক্সাইড) গ্রহণের মাধ্যমে এই মারাত্মক ন্যানোকণা তৈরি বন্ধ করা যায় এবং রোগীর রক্তনালিকে রক্ষা করা সম্ভব হয় [১, ৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            '4. Mucosal Tight Junction Proteolysis, Endotoxemia & Protein-Bound Uremic Toxins',
            '৪. অন্ত্রের টাইট জাংশন প্রোটিন ক্ষয়, এন্ডোটক্সেমিয়া ও প্রোটিন-যুক্ত ইউরেমিক টক্সিন'
          ),
          paragraphs: [
            l(
              'The gut-kidney axis constitutes a pathogenic bidirectional circuit wherein progressive renal failure causes profound disintegration of the intestinal epithelial barrier, while gut-derived uremic toxins accelerate renal and cardiovascular destruction [3, 5]. In healthy physiology, the intestinal epithelium forms a continuous selectively permeable barrier sealed by apical junctional complexes: claudins, occludin, and zonula occludens-1 (ZO-1), which regulate paracellular transit and shield systemic circulation from luminal antigens [5].',
              'অন্ত্র এবং কিডনির মধ্যকার সম্পর্ক একটি মারাত্মক দ্বি-মুখী ক্ষতিকর পথ তৈরি করে, যেখানে কিডনি নষ্ট হলে অন্ত্রের সুরক্ষামূলক দেয়াল ভেঙে যায় এবং অন্ত্রে তৈরি হওয়া বিষাক্ত পদার্থ কিডনি ও হার্টকে ধ্বংসের দিকে ঠেলে দেয় [৩, ৫]। সুস্থ শরীরে অন্ত্রের কোষগুলো ক্লডিন, অক্লুডিন ও জেডও-১ (ZO-1) নামক আঠালো প্রোটিন দিয়ে পরস্পর অত্যন্ত শক্তভাবে জোড়া লাগানো থাকে, যা কোনো ক্ষতিকর জীবাণু বা বিষাক্ত বর্জ্যকে রক্তে ঢুকতে দেয় না [৫]।'
            ),
            l(
              'In advanced CKD, failing glomerular filtration leads to continuous systemic accumulation of urea, which diffuses across enterocyte basolateral membranes down its concentration gradient into the intestinal lumen [5]. Luminal bacterial urease, abundantly expressed by dysbiotic microbial families (Enterobacteriaceae, Clostridiaceae), hydrolyzes urea into caustic ammonia (NH3) and ammonium hydroxide (NH4OH) [5]. The marked elevation in luminal pH induces chemical caustic erosion of the mucosal epithelium, degrading claudin-1 and occludin and collapsing the tight junction architecture into a hyperpermeable "leaky gut" [5].',
              'কিডনি নষ্ট হলে রক্তে প্রচুর ইউরিয়া জমে যায় এবং এই অতিরিক্ত ইউরিয়া অন্ত্রের দেয়াল চুইয়ে পেটের ভেতরে ঢুকতে শুরু করে [৫]। অন্ত্রের ক্ষতিকর ব্যাকটেরিয়ারা তাদের ইউরিয়েজ এনজাইমের সাহায্যে এই ইউরিয়া ভেঙে তীব্র ঝাঁঝালো ক্ষারীয় অ্যামোনিয়ায় রূপান্তর করে [৫]। এই ক্ষারের রাসায়নিক আগুনে অন্ত্রের ভেতরের সুরক্ষামূলক প্রোটিনগুলো পুড়ে ছাই হয়ে যায় এবং অন্ত্রের প্রতিরক্ষামূলক দেয়াল ফুটো হয়ে লিকি গাট (Leaky Gut) তৈরি করে [৫]।'
            ),
            l(
              'Concurrently, transit delay and impaired protein assimilation drive massive proteolytic fermentation of undigested dietary amino acids in the colon [3, 5]. Intestinal bacteria expressing tryptophanase metabolize unabsorbed tryptophan into indole, while tyrosine and phenylalanine are fermented into p-cresol [5]. Indole and p-cresol pass effortlessly across the disrupted mucosal barrier into the portal circulation, where hepatic cytochrome P450 2E1 (CYP2E1) and sulfotransferases (SULT1A1) oxidize and sulfate them into Indoxyl Sulfate (IS) and p-Cresyl Sulfate (pCS) [5]. These metabolites are protein-bound uremic toxins (PBUTs) that circulate with >90% binding affinity to plasma albumin [3, 5].',
              'একই সাথে অন্ত্রের ক্ষতিকর ব্যাকটেরিয়ারা খাবারের হজম না হওয়া প্রোটিন পচিয়ে বিষাক্ত ইনডোল ও পি-ক্রেসল তৈরি করে [৩, ৫]। এই বিষগুলো ফুটো অন্ত্র দিয়ে নিমেষেই রক্তে ঢোকে এবং লিভারের এনজাইম এদেরকে ইনডক্সিল সালফেট ও পি-ক্রেসিল সালফেটের মতো মারাত্মক বিষে রূপান্তরিত করে [৫]। এই বিষাক্ত পদার্থগুলো রক্তের অ্যালবুমিন প্রোটিনের সাথে ৯০ শতাংশের বেশি শক্ত বন্ধনে আটকে থাকে, যার ফলে কোনো প্রচলিত ডায়ালাইসিস মেশিন এদেরকে রক্ত থেকে বের করতে পারে না [৩, ৫]।'
            ),
            l(
              'Because PBUTs are tightly bound to albumin, their dialytic clearance is negligible (<10% of urea clearance) [5]. Circulating indoxyl sulfate is actively taken up by renal tubular epithelial cells via basolateral Organic Anion Transporters 1 and 3 (OAT1/OAT3), where it stimulates NADPH oxidase, suppresses Klotho transcription, and induces epithelial-to-mesenchymal transition (EMT) and tubulointerstitial fibrosis [3, 5]. In vascular endothelium, indoxyl sulfate suppresses eNOS and promotes monocyte adhesion [5]. Adopting a Plant-Dominant Low-Protein Diet (PLADO) rich in fermentable prebiotic fibers restores saccharolytic Bifidobacteria, enhances short-chain fatty acid production, tightens mucosal junctions, and slashes circulating indoxyl sulfate by up to 40% [1, 3, 5].',
              'অ্যালবুমিনের সাথে শক্তভাবে আটকে থাকার কারণে ডায়ালাইসিসেও এই বিষাক্ত উপাদানগুলো শরীর থেকে বের করা যায় না [৫]। রক্তে ভাসমান এই ইনডক্সিল সালফেট অবশিষ্ট কিডনি কোষের ভেতরে ঢুকে কিডনির জিনগুলোকে ধ্বংস করে দেয়, ক্লথো তৈরি পুরোপুরি বন্ধ করে এবং অবশিষ্ট ভালো নেফ্রনগুলোকে বিষাক্ত ক্ষত বা ফাইব্রোসিস তৈরি করে মেরে ফেলে [৩, ৫]। কিন্তু উদ্ভিজ্জ উচ্চ আঁশযুক্ত খাবার গ্রহণ করলে অন্ত্রের উপকারী ব্যাকটেরিয়াগুলো শক্তিশালী হয়, অন্ত্রের ছিদ্র জোড়া লাগে এবং রক্তে এই প্রাণঘাতী ইউরেমিক টক্সিন তৈরি প্রায় ৪০ শতাংশ কমে যায় [১, ৩, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            '5. Keto-Acid Transamination Biochemistry & Very Low-Protein Diet (vLPD) Nitrogen Recycling',
            '৫. কিটো-অ্যাসিড ট্রান্সঅ্যামিনেশন প্রাণরসায়ন ও অতি-স্বল্প প্রোটিন পথ্যের নাইট্রোজেন পুনর্ব্যবহার'
          ),
          paragraphs: [
            l(
              'In non-dialysis CKD Stages 4 to 5 (eGFR <30 mL/min/1.73m2), achieving maximal preservation of remnant nephrons without provoking malnutrition is the ultimate clinical challenge [1, 3]. While conventional Low-Protein Diets (LPD: 0.55–0.60 g/kg/day) effectively lower intraglomerular pressure, advanced nephron dropout often demands deeper nitrogen restriction [1, 3]. The Very Low-Protein Diet (vLPD) restricts dietary protein intake to 0.28 to 0.40 grams per kilogram body weight per day [1, 3]. To prevent negative nitrogen balance and fatal muscle catabolism, the vLPD must be obligatorily supplemented with Keto-Acid Analogues (KAAs) [1, 3].',
              'ডায়ালাইসিস শুরুর আগের জটিল কিডনি রোগীদের (স্টেজ ৪ ও ৫, eGFR < ৩০) ক্ষেত্রে অপুষ্টি না ঘটিয়ে অবশিষ্ট কিডনিকে সর্বোচ্চ মেয়াদে বাঁচিয়ে রাখাই হলো আধুনিক রেনাল মেডিসিনের সবচেয়ে বড় চ্যালেঞ্জ [১, ৩]। প্রচলিত প্রোটিন নিয়ন্ত্রণ (০.৫৫-০.৬০ গ্রাম/কেজি) কিডনির ভেতরের চাপ কমালেও, কিডনির কার্যক্ষমতা খুব বেশি কমে গেলে আরও কঠোর প্রোটিন নিয়ন্ত্রণের প্রয়োজন হয় [১, ৩]। এ সময় অতি-স্বল্প প্রোটিন পথ্যে (vLPD) দৈনিক প্রোটিন কমিয়ে মাত্র ০.২৮ থেকে ০.৪০ গ্রাম/কেজিতে আনা হয় এবং রোগীর পেশিক্ষয় রোধ করতে এর সাথে কিটো-অ্যাসিড অ্যানালগ (KAA) ওষুধ দেওয়া বাধ্যতামূলক [১, ৩]।'
            ),
            l(
              'Keto-acid analogues are the nitrogen-free alpha-keto or alpha-hydroxy carbon skeletons of essential amino acids [3]. A standardized pharmacological preparation (e.g., Ketosteril) contains the calcium salts of four branched-chain and aromatic keto-acids (alpha-ketoisovalerate for valine, alpha-ketoleucine for leucine, alpha-keto-beta-methylvalerate for isoleucine, alpha-ketophenylalanine for phenylalanine), the alpha-hydroxy acid of methionine (alpha-hydroxymethylbutyrate), and five essential L-amino acids (lysine, threonine, tryptophan, histidine, tyrosine) [3]. Because these carbon skeletons lack the alpha-amino nitrogen group (-NH2), their ingestion introduces zero metabolic nitrogen burden into the body [3].',
              'কিটো-অ্যাসিড অ্যানালগ হলো মানবদেহের অপরিহার্য অ্যামিনো অ্যাসিডগুলোর নাইট্রোজেনবিহীন বিশেষ কার্বন কঙ্কাল [৩]। চিকিৎসাবিজ্ঞানে ব্যবহৃত স্ট্যান্ডার্ড কিটো-অ্যাসিড মিশ্রণে ভ্যালিন, লিউসিন, আইসোলিউসিন ও ফিনাইলঅ্যালানিনের মতো গুরুত্বপূর্ণ অ্যামিনো অ্যাসিডের নাইট্রোজেনবিহীন কিটো-কঙ্কাল থাকে [৩]। যেহেতু এই অণুগুলোর গায়ে কোনো নাইট্রোজেন বা অ্যামিনো গ্রুপ (-NH2) থাকে না, তাই এগুলো খেলে শরীরে এক ফোঁটাও নতুন বর্জ্য বা ইউরিয়া তৈরি হয় না [৩]।'
            ),
            l(
              'The fundamental biochemical magic of keto-acid therapy relies on hepatic and peripheral transamination [3]. In the presence of pyridoxal 5\'-phosphate (vitamin B6)-dependent aminotransferases (branched-chain aminotransferase and glutamate dehydrogenase), ingested keto-acids capture amino groups from endogenous waste nitrogen pools [3]. Specifically, toxic circulating amino groups derived from glutamate, glutamine, and alanine are enzymatically transferred onto the keto-acid carbon skeletons, converting them into fully functional, proteinogenic essential L-amino acids (L-leucine, L-valine, L-isoleucine, L-phenylalanine) [3]. This elegant biochemical reaction recycles endogenous waste nitrogen directly into high-biological-value protein synthesis [3, 5].',
              'কিটো-অ্যাসিড থেরাপির মূল জৈব-রাসায়নিক জাদু হলো শরীরে থাকা বিষাক্ত বর্জ্য নাইট্রোজেনকে পুনর্ব্যবহার করা (Transamination) [৩]। লিভার ও মাংসপেশির বিশেষ এনজাইমগুলো রক্তে ঘুরে বেড়ানো বিষাক্ত গ্লুটামেট ও অ্যালানিন থেকে অ্যামিনো গ্রুপ টেনে নিয়ে কিটো-কঙ্কালের গায়ে জোড়া লাগিয়ে দেয় [৩]। এর ফলে ক্ষতিকর বর্জ্য নাইট্রোজেন তাৎক্ষণিকভাবে সম্পূর্ণ তাজা ও খাঁটি অপরিহার্য অ্যামিনো অ্যাসিডে রূপান্তরিত হয় [৩]। এভাবে শরীরের নিজস্ব বিষাক্ত বর্জ্য ধ্বংস হয়ে পুনরায় স্বাস্থ্যকর মাংসপেশি তৈরির কাঁচামালে পরিণত হয় [৩, ৫]।'
            ),
            l(
              'By recycling waste nitrogen, KAA-supplemented vLPD dramatically suppresses Blood Urea Nitrogen (BUN), lowers systemic uremic toxin generation, and ameliorates metabolic acidosis [1, 3]. Simultaneously, because plant-derived vLPD contains minimal phosphorus, serum phosphorus and osteocytic FGF23 levels fall significantly, interrupting the secondary hyperparathyroidism cascade [3, 4]. Randomized controlled trials demonstrate that compliant CKD 4–5 patients maintained on keto-acid supplemented vLPD safely preserve lean body mass, maintain serum albumin >=3.8 g/dL, and successfully delay initiation of maintenance hemodialysis by a median of 12 to 24 months, transforming patient autonomy and reducing healthcare expenditures [1, 3].',
              'বর্জ্য নাইট্রোজেনকে উপকারী প্রোটিনে রূপান্তরের মাধ্যমে এই থেরাপি রক্তে ক্ষতিকর ইউরিয়া নাটকীয়ভাবে কমিয়ে দেয় এবং মেটাবলিক অ্যাসিডোসিস দূর করে [১, ৩]। একই সাথে খাবারে ফসফেট প্রায় না থাকায় রক্তে ক্ষতিকর ফসফেট ও FGF23 হরমোন উল্লেখযোগ্যভাবে হ্রাস পায় এবং হাড় ও রক্তনালির ক্ষতি বন্ধ হয় [৩, ৪]। একাধিক আন্তর্জাতিক ক্লিনিক্যাল ট্রায়ালে প্রমাণিত হয়েছে যে সঠিক নিয়মে কিটো-অ্যাসিড পথ্য গ্রহণকারী রোগীরা পেশিক্ষয় ছাড়াই সুস্থ থাকেন এবং ডায়ালাইসিস শুরু করার সময়সীমা গড়ে ১২ থেকে ২৪ মাস পর্যন্ত নিরাপদে পিছিয়ে দিতে সক্ষম হন [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            '6. High-Yield Molecular Nephrology Synthesis & Precision Dietetic Architecture',
            '৬. উচ্চ গুরুত্বের আণবিক নেফ্রোলজি সারসংক্ষেপ ও সুনির্দিষ্ট পথ্য নকশা'
          ),
          paragraphs: [
            l(
              'The Brenner hyperfiltration model demonstrates that high dietary protein intake stimulates pre-glomerular afferent arteriolar vasodilation via glucagon and IGF-1, elevating intraglomerular capillary hydrostatic pressure (P_gc >65 mmHg) [2, 3]. Capillary mechanical stretch activates mechanosensitive TRPC6 calcium channels on podocytes, driving calcineurin-dependent synaptopodin degradation, foot process effacement, albuminuria, and irreversible glomerulosclerosis [2]. Staged dietary protein restriction (0.55–0.60 g/kg/day in CKD 3–5) restores afferent arteriolar vascular tone, lowers P_gc, blunts proteinuria, and halts structural nephron loss [1, 2, 3].',
              'ব্রেনারের অতি-পরিস্রাবণ তত্ত্ব প্রমাণ করে যে অতিরিক্ত প্রোটিন খেলে কিডনির সূক্ষ্ম ধমনি অস্বাভাবিক চওড়া হয়ে ফিল্টারের ভেতরের রক্তচাপ ৬৫ মিলিমিটারের ওপরে তুলে দেয় [২, ৩]। এই অতিরিক্ত চাপে পোডোসাইট কোষের TRPC6 চ্যানেল দিয়ে অতিরিক্ত ক্যালসিয়াম ঢুকে ফিল্টার কোষের কঙ্কাল ধ্বংস করে দেয় এবং প্রস্রাবে প্রোটিন নির্গত হয়ে ভালো কিডনি নষ্ট হয় [২]। প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজি রাখলে কিডনির ভেতরের চাপ স্বাভাবিক হয়, প্রোটিন ক্ষরণ বন্ধ হয় এবং কিডনি দীর্ঘদিন কর্মক্ষম থাকে [১, ২, ৩]।'
            ),
            l(
              'Declining nephron mass induces bone osteocytes to hyper-secrete FGF23, which complexes with renal alpha-Klotho to suppress proximal tubular NaPi-IIa cotransporters, maintaining normophosphatemia at the expense of severe CYP27B1 inhibition and active calcitriol deficiency [4]. Calcitriol deficiency unleashes secondary hyperparathyroidism, mobilizing bone minerals that interact with fetuin-A to form secondary calciprotein particles (CPP-2) [4]. CPP-2 deposition and cellular phosphate influx via Pit-1 transactivate Runx2 in vascular smooth muscle cells, inducing active osteogenic transdifferentiation and lethal Monckeberg arterial medial calcification [3, 4].',
              'কিডনি দুর্বল হলে ফসফেট আটকে যাওয়ার ভয়ে হাড় থেকে প্রচুর FGF23 নিঃসৃত হয় যা ফসফেট বের করলেও ভিটামিন ডি তৈরি বন্ধ করে দেয় [৪]। ভিটামিন ডি-র অভাবে প্যারাথাইরয়েড হরমোন বেড়ে গিয়ে হাড়ের ক্যালসিয়াম গলিয়ে রক্তে ঢালে [৪]। এই বাড়তি ক্যালসিয়াম ও ফসফেট রক্তনালির মসৃণ পেশিকোষের ভেতরে ঢুকে Runx2 মাস্টার সুইচ অন করে রক্তনালিকে জীবন্ত হাড় বা পাথরে রূপান্তর করে এবং কার্ডিয়াক অ্যারেস্টে রোগীর মৃত্যু ডেকে আনে [৩, ৪]।'
            ),
            l(
              'Initiating maintenance hemodialysis represents a complete 180-degree nutritional reversal: dialytic amino acid clearance (8–12 g/session) and bioincompatible membrane inflammation activate the muscle ubiquitin-proteasome system, driving catastrophic Protein-Energy Wasting (PEW) [1, 5]. To prevent fatal sarcopenia and mortality, hemodialysis patients must double dietary protein to 1.0–1.2 g/kg/day of high biological value protein, strictly paired with non-calcium phosphate binders (sevelamer, sucroferric oxyhydroxide) to capture dietary phosphorus without accelerating arterial calcification [1, 4, 5].',
              'ডায়ালাইসিস শুরু হতেই পুষ্টির নিয়ম সম্পূর্ণ ১৮০ ডিগ্রি ঘুরে যায়: ডায়ালাইসিসের সময় রক্ত থেকে প্রতিবার ৮-১২ গ্রাম মূল্যবান প্রোটিন অপচয় হয় এবং মেমব্রেনের প্রদাহ রোগীর মাংসপেশি ভাঙতে শুরু করে [১, ৫]। এই মারাত্মক পেশিক্ষয় (PEW) ও মৃত্যু রোধ করতে ডায়ালাইসিস রোগীদের প্রোটিন দ্বিগুণ বাড়িয়ে ১.০-১.২ গ্রাম/কেজি গ্রহণ করা বাধ্যতামূলক এবং প্রতিটি খাবারের সাথে ফসফেট বাইন্ডার ওষুধ খেতে হবে যা খাবারের ক্ষতিকর ফসফেট আটকে বের করে দেয় [১, ৪, ৫]।'
            ),
            l(
              'Modern precision renal dietetics integrates multi-targeted molecular interventions: culinary wet-leaching of vegetables (extracting up to 75% of soluble potassium to prevent hyperkalemic cardiac arrest), oral sodium bicarbonate base titration to arrest muscle proteolysis, plant-dominant diets (PLADO) to suppress uremic toxins (indoxyl sulfate), and keto-acid supplemented vLPD (0.28–0.40 g/kg/d) to recycle waste nitrogen and delay dialysis initiation by up to two years [1, 3, 5, 6].',
              'আধুনিক রেনাল ডায়েটেটিক্স এক বহুমুখী আণবিক চিকিৎসার সমন্বয়: সবজি সেদ্ধ করে পানি ফেলে দেওয়ার বিশেষ রান্নার কৌশল (লিচিং) যা ৭৫% পটাশিয়াম দূর করে হার্ট অ্যাটাক রোধ করে, খাবার সোডা সেবন যা পেশির অ্যাসিড ক্ষয় বন্ধ করে, উদ্ভিজ্জ পথ্য (PLADO) যা অন্ত্রের ক্ষতিকর ইউরেমিক টক্সিন কমায় এবং কিটো-অ্যাসিড মিশ্রিত অতি-স্বল্প প্রোটিন পথ্য (vLPD) যা বর্জ্য নাইট্রোজেন পুনর্ব্যবহার করে ডায়ালাইসিসকে নিরাপদে ২ বছর পর্যন্ত পিছিয়ে দিতে পারে [১, ৩, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why does dietary protein restriction (0.55–0.60 g/kg/day) preserve remnant nephron longevity in non-dialysis CKD Stages 3–5, whereas hemodialysis mandates an immediate elevation of protein intake to 1.0–1.2 g/kg/day?',
      'ডায়ালাইসিসের পূর্বে যেখানে প্রোটিন কমিয়ে (০.৫৫-০.৬০ গ্রাম/কেজি) কিডনি রক্ষা করা হয়, সেখানে ডায়ালাইসিস শুরু হতেই কেন অবিলম্বে প্রোটিন বাড়িয়ে দ্বিগুণ (১.০-১.২ গ্রাম/কেজি) করতে হয়?'
    ),
    options: [
      l(
        'In non-dialysis CKD, protein restriction withdraws amino acid-driven afferent arteriolar vasodilation to lower intraglomerular pressure (P_gc) and blunts proteinuria; on hemodialysis, membrane amino acid losses (8–12 g/session) and inflammation-driven muscle proteolysis cause fatal Protein-Energy Wasting unless countered by high protein intake.',
        'ডায়ালাইসিসের আগে প্রোটিন কমালে কিডনির সূক্ষ্ম ধমনির চাপ কমে ফিল্টার রক্ষা পায়; কিন্তু ডায়ালাইসিসে প্রতিবার রক্ত থেকে ৮-১২ গ্রাম প্রোটিন নষ্ট হয় এবং প্রদাহের কারণে মারাত্মক পেশিক্ষয় (PEW) ঘটে, যা ঠেকাতে উচ্চ প্রোটিন অপরিহার্য।'
      ),
      l(
        'In non-dialysis CKD, all dietary protein is converted directly into kidney stones; on dialysis, kidney stones can no longer form.',
        'ডায়ালাইসিসের আগে প্রোটিন খেলে তা সরাসরি পাথরে রূপান্তরিত হয়।'
      ),
      l(
        'In non-dialysis CKD, protein destroys insulin receptors; on dialysis, patients no longer require insulin for glucose transport.',
        'ডায়ালাইসিসের আগে প্রোটিন ইনসুলিন নষ্ট করে দেয়।'
      ),
      l(
        'In non-dialysis CKD, protein increases blood volume tenfold; on dialysis, blood volume is strictly fixed by the machine.',
        'ডায়ালাইসিসের আগে প্রোটিন রক্ত ১০ গুণ বাড়িয়ে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The Brenner hypothesis demonstrates that dietary amino acids stimulate pre-glomerular afferent arteriolar vasodilation, elevating intraglomerular hydrostatic pressure (P_gc) and accelerating podocyte detachment and glomerulosclerosis in non-dialysis CKD. Restricting protein to 0.55–0.60 g/kg/day lowers P_gc, blunts proteinuria, and slows eGFR decline. Conversely, maintenance hemodialysis strips 8 to 12 grams of free amino acids per session, while dialyzer membrane contact unleashes IL-6/TNF-alpha sterile inflammation that activates muscle ubiquitin-proteasome proteolysis. Hemodialysis patients must double their protein intake to 1.0–1.2 g/kg/day of high biological value protein to prevent fatal Protein-Energy Wasting (PEW).',
      'ব্রেনারের তত্ত্ব অনুসারে ডায়ালাইসিসের আগে অতিরিক্ত প্রোটিন কিডনির সূক্ষ্ম রক্তনালির চাপ বাড়িয়ে ফিল্টার ধ্বংস করে দেয়, তাই প্রোটিন কমিয়ে ০.৫৫-০.৬০ গ্রাম/কেজি রাখলে কিডনি সুরক্ষিত থাকে। অপরদিকে ডায়ালাইসিসের সময় প্রতি সেশনে রক্ত থেকে ৮-১২ গ্রাম প্রোটিন অপচয় হয় এবং মেমব্রেনের প্রদাহ রোগীর মাংসপেশি ভাঙতে শুরু করে। এই মারাত্মক পেশিক্ষয় (PEW) ও মৃত্যু রোধ করতে ডায়ালাইসিস রোগীদের প্রোটিন দ্বিগুণ বাড়িয়ে ১.০-১.২ গ্রাম/কেজি গ্রহণ করা বাধ্যতামূলক।'
    ),
  },
}
