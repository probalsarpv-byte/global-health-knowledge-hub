import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics09References: LessonReference[] = [
  {
    id: 'ref-holliday-segar-1957',
    authors: 'Holliday MA, Segar WE',
    title: 'The Maintenance Need for Water in Parenteral Fluid Therapy',
    organization: 'Pediatrics',
    year: 1957,
    url: 'https://publications.aap.org/pediatrics/article-abstract/19/5/823/63447/The-Maintenance-Need-for-Water-in-Parenteral-Fluid',
    doi: '10.1542/peds.19.5.823',
  },
  {
    id: 'ref-sterns-hyponatremia-2015',
    authors: 'Sterns RH',
    title: 'Disorders of Plasma Sodium — Causes, Consequences, and Correction',
    organization: 'New England Journal of Medicine',
    year: 2015,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1404489',
    doi: '10.1056/NEJMra1404489',
  },
  {
    id: 'ref-gennari-osmolality-1984',
    authors: 'Gennari FJ',
    title: 'Serum Osmolality: Uses and Limitations',
    organization: 'New England Journal of Medicine',
    year: 1984,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJM198401123100207',
    doi: '10.1056/NEJM198401123100207',
  },
  {
    id: 'ref-verbalis-hyponatremia-guidelines',
    authors: 'Verbalis JG, Goldsmith SR, Bustamante A, et al.',
    title: 'Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations',
    organization: 'The American Journal of Medicine',
    year: 2013,
    url: 'https://www.amjmed.com/article/S0002-9343(13)00605-4/fulltext',
    doi: '10.1016/j.amjmed.2013.07.006',
  },
  {
    id: 'ref-hebert-fluid-kinetics',
    authors: 'Hebert PC, et al.',
    title: 'Fluid and Electrolyte Management in the Surgical and Critically Ill Patient',
    organization: 'Critical Care Clinics',
    year: 2018,
    url: 'https://www.criticalcare.theclinics.com/',
    doi: '10.1016/j.ccc.2017.12.002',
  },
  {
    id: 'ref-adrogue-madias-hyponatremia',
    authors: 'Adrogué HJ, Madias NE',
    title: 'Hyponatremia',
    organization: 'New England Journal of Medicine',
    year: 2000,
    url: 'https://www.nejm.org/doi/full/10.1056/NEJM200005253422107',
    doi: '10.1056/NEJM200005253422107',
  },
  {
    id: 'ref-erbp-hyponatremia-2014',
    authors: 'Spasovski G, Vanholder R, Allolio B, et al.',
    title: 'Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia',
    organization: 'European Journal of Endocrinology / Intensive Care Medicine',
    year: 2014,
    url: 'https://eje.bioscientifica.com/view/journals/eje/170/3/G1.xml',
    doi: '10.1530/EJE-13-1020',
  },
]

export const dietetics09FluidElectrolytesLesson: LessonTopic = {
  id: 'topic.dietetics.fluid-electrolyte-prescriptions',
  slug: 'fluid-electrolyte-osmolar-prescriptions',
  title: l(
    '09 · Fluid & Electrolyte Architecture: Osmolar Clearance & Maintenance Formulations',
    '০৯ · তরল ও ইলেক্ট্রোলাইট প্রেসক্রিপশন: অসমোলার ক্লিয়ারেন্স ও রক্ষণাবেক্ষণ'
  ),
  summary: l(
    'The clinical science of precision fluid and electrolyte prescribing: calculating baseline hydration via the Holliday-Segar 100/50/20 algorithm, compensating for sensible and pyrexic insensible losses, calculating serum osmolality and the osmolar gap, administering safe sodium and potassium baseline targets, and formulating organ-specific fluid restriction regimens for heart failure, cirrhosis, and oliguric kidney disease.',
    'তরল ও ইলেক্ট্রোলাইট ব্যবস্থাপত্রের নিখুঁত চিকিৎসাবিজ্ঞান: হলিডে-সেগার (১০০/৫০/২০) সূত্রের সাহায্যে স্বাভাবিক তরলের চাহিদা হিসাব, দৃশ্যমান ও জ্বরজনিত অদৃশ্য বাষ্পীভবন ক্ষতি পূরণ, রক্তের অসমোলারিটি ও অসমোলার গ্যাপ নির্ণয়, নিরাপদ সোডিয়াম ও পটাশিয়াম মাত্রা নির্ধারণ এবং হার্ট ফেইলিউর, লিভার সিরোসিস ও কিডনি রোগে অঙ্গভিত্তিক তরল নিয়ন্ত্রণের বৈজ্ঞানিক প্রোটোকল।'
  ),
  subject: 'dietetics',
  version: 2,
  updatedAt: '2026-11-04',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.predictive-energy-equations'],
  relatedTopicIds: ['topic.dietetics.predictive-energy-equations', 'topic.metabolism.bioenergetics-atp-thermodynamics'],
  objectives: [
    l(
      'Calculate maintenance fluid requirements using the classic Holliday-Segar 100/50/20 algorithm and age-adjusted weight-based equations.',
      'হলিডে-সেগার ১০০/৫০/২০ সূত্র এবং বয়স সমন্বিত ওজনের নিয়মে একজন রোগীর দৈনিক স্বাভাবিক পানির চাহিদা নির্ভুলভাবে গণনা করা।'
    ),
    l(
      'Quantify sensible and insensible fluid flux, adjusting prescriptions by adding 10% to 12.5% fluid per 1°C core elevation above 37°C.',
      'দৃশ্যমান ও অদৃশ্য তরল নিঃসরণ পরিমাপ করা এবং স্বাভাবিকের ওপরে প্রতি ১°C জ্বরের জন্য মোট তরলের ১০% থেকে ১২.৫% অতিরিক্ত পানি যোগ করা।'
    ),
    l(
      'Calculate Serum Osmolality and evaluate the Serum Osmolar Gap to identify exogenous osmolar toxins and severe hyperosmolar dehydration.',
      'রক্তের অসমোলারিটি ও অসমোলার গ্যাপ গণনা করে বিষাক্ত অ্যালকোহল ও মারাত্মক হাইপারঅসমোলার পানিশূন্যতা দ্রুত শনাক্ত করা।'
    ),
    l(
      'Prescribe daily maintenance baseline electrolytes (Sodium 1.0–2.0 mEq/kg/day, Potassium 0.5–1.0 mEq/kg/day) in oral and intravenous regimens.',
      'দৈনিক স্বাভাবিক ইলেক্ট্রোলাইটের চাহিদা (সোডিয়াম ১.০–২.০ mEq/কেজি এবং পটাশিয়াম ০.৫–১.০ mEq/কেজি) খাবার ও শিরাপথ ব্যবস্থাপত্রে নির্ধারণ করা।'
    ),
    l(
      'Design strict fluid restriction regimens (1,000–1,500 mL/day) for hypervolemic dilutional hyponatremia in heart failure, cirrhosis, and oliguric ESRD.',
      'হার্ট ফেইলিউর, লিভার সিরোসিস এবং কিডনি ফেইলিউরের হাইপারভোলেমিক ডাইলিউশনাল হাইপোনাট্রেমিয়ায় কঠোর তরল নিয়ন্ত্রণ (১,০০০–১,৫০০ মিলি/দিন) প্রণয়ন করা।'
    ),
    l(
      'Safeguard hyponatremia and hypernatremia correction velocities (maximum 8–10 mEq/L in 24 hours) to prevent fatal osmotic demyelination syndrome.',
      'মস্তিষ্কের মারাত্মক অসমেটিক ডিমায়েলিনেশন সিন্ড্রোম প্রতিরোধে সোডিয়াম সংশোধনের গতিবেগ ২৪ ঘণ্টায় ৮–১০ mEq/L এর মধ্যে কঠোরভাবে সীমিত রাখা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A clinical balance scale comparing daily water intake and output compartments: Intake from oral fluids (1,500 mL), food moisture (700 mL), and metabolic oxidation water (300 mL) equals 2,500 mL; Output from urine (1,500 mL sensible), skin and respiratory insensible evaporation (800 mL), and stool (200 mL) balances at 2,500 mL; an adjustment dial highlights a +10% fluid increase per 1°C rise in body temperature.',
      'দৈনিক পানি গ্রহণ ও নির্গমনের ভারসাম্যের চিত্র: গৃহীত তরল (পানীয় ১৫০০ মিলি, খাবারের পানি ৭০০ মিলি, মেটাবলিক পানি ৩০০ মিলি) মোট ২৫০০ মিলি; নির্গত তরল (প্রস্রাব ১৫০০ মিলি, ত্বক ও ফুসফুসের বাষ্প ৮০০ মিলি, মল ২০০ মিলি) মোট ২৫০০ মিলি; একটি নির্দেশক তীর দেখায় যে প্রতি ১ ডিগ্রি সেলসিয়াস জ্বরে ১০% অতিরিক্ত তরল প্রয়োজন হয়।'
    ),
    steps: [
      l(
        'Step 1: Calculate Obligatory Solute Losses. Sensible urinary volume (minimum 500 mL/day required for clearing metabolic wastes) plus insensible dermal and respiratory vaporization (~700–800 mL/day).',
        'ধাপ ১: অপরিহার্য তরল ক্ষতি: প্রস্রাবের প্রয়োজনীয় পরিমাণ (মেটাবলিক বর্জ্য বের করতে দিনে অন্তত ৫০০ মিলি) এবং ত্বক ও শ্বাস-প্রশ্বাসের অদৃশ্য বাষ্প (~৭০০–৮০০ মিলি)।'
      ),
      l(
        'Step 2: Apply Holliday-Segar Formula. Allocate 100 mL/kg for the first 10 kg, 50 mL/kg for 11–20 kg, and 20 mL/kg for each kg above 20 kg.',
        'ধাপ ২: হলিডে-সেগার সূত্র প্রয়োগ: প্রথম ১০ কেজির জন্য প্রতি কেজিতে ১০০ মিলি, পরবর্তী ১০ কেজির জন্য ৫০ মিলি এবং ২০ কেজির ওপরের প্রতি কেজিতে ২০ মিলি যোগ করুন।'
      ),
      l(
        'Step 3: Correct for Thermal Pyrexia. For every 1°C elevation in core body temperature above 37°C, add 10% to 12.5% extra fluid (100–150 mL/day per °C) to compensate for evaporative losses.',
        'ধাপ ৩: জ্বরের সমন্বয়: শরীরের তাপমাত্রা ৩৭°C এর ওপরে প্রতি ১°C বৃদ্ধির জন্য মোট তরলের ১০% থেকে ১২.৫% (প্রতি ডিগ্রিতে ১০০–১৫০ মিলি) বাড়িয়ে দিন।'
      ),
      l(
        'Step 4: Check Osmolar Balance and Sodium Velocity. Compute serum osmolality (2 × Na + Glucose/18 + BUN/2.8) and clamp sodium correction to ≤ 8–10 mEq/L per 24 hours to prevent osmotic demyelination.',
        'ধাপ ৪: অসমোলারিটি ও সোডিয়ামের গতিবেগ পরীক্ষা: রক্তের অসমোলারিটি হিসাব করুন এবং মস্তিষ্কের ডিমায়েলিনেশন রোধে সোডিয়াম সংশোধনের গতি দিনে ৮–১০ mEq/L এ সীমিত রাখুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 70-year-old female with severe decompensated Congestive Heart Failure (NYHA Class IV, left ventricular ejection fraction = 20%) and bilateral pulmonary crackles is admitted with gross anasarca. Laboratory results: Serum Sodium = 124 mEq/L (dilutional hyponatremia), BUN = 38 mg/dL, Serum Creatinine = 1.4 mg/dL. Her 24-hour urine output is 800 mL on intravenous furosemide. Which of the following is the most scientifically sound medical nutrition therapy prescription for her fluids and sodium?',
      'তীব্র হার্ট ফেইলিউর ও ফুসফুসে পানি জমার সমস্যায় আক্রান্ত ৭০ বছর বয়সী এক নারী সারা শরীর ফোলা (অ্যানাসার্কা) নিয়ে হাসপাতালে ভর্তি হন। ল্যাব রিপোর্ট: রক্তে সোডিয়াম = ১২৪ mEq/L (ডাইলিউশনাল হাইপোনাট্রেমিয়া), BUN = ৩৮ mg/dL, ক্রিয়েটিনিন = ১.৪ mg/dL। ডাইউরেটিক ওষুধে তার ২৪ ঘণ্টার প্রস্রাব ৮০০ মিলি। এই রোগীর তরল ও সোডিয়াম ব্যবস্থাপনায় সবচেয়ে বিজ্ঞানসম্মত পদক্ষেপ কোনটি?'
    ),
    options: [
      l(
        'Infuse 3% hypertonic saline at 100 mL/hr to rapidly push serum sodium above 135 mEq/L within 6 hours.',
        'রক্তের সোডিয়াম ৬ ঘণ্টার মধ্যে দ্রুত ১৩৫ mEq/L এর ওপরে তুলতে ঘণ্টায় ১০০ মিলি হারে ৩% হাইপারটনিক স্যালাইন ইনজেকশন দেওয়া।'
      ),
      l(
        'Enforce a strict total fluid restriction of 1,000–1,200 mL/day from all sources (oral fluids, IV flushes, and medications) paired with a 2,000 mg/day (2 g) dietary sodium restriction.',
        'সব উৎস (মুখের পানি, স্যালাইন ও ওষুধ) মিলিয়ে দৈনিক তরল কঠোরভাবে ১০০০–১২০০ মিলিতে সীমাবদ্ধ করা এবং খাবারে দৈনিক সোডিয়াম সর্বোচ্চ ২০০০ মিলিগ্রাম (২ গ্রাম) এ সীমিত রাখা।'
      ),
      l(
        'Encourage the patient to drink at least 3,500 mL of pure distilled water per day to flush out accumulated urea and creatinine.',
        'জমে থাকা ইউরিয়া ও ক্রিয়েটিনিন ধুয়ে বের করতে রোগীকে দিনে অন্তত ৩৫০০ মিলি বিশুদ্ধ পানি পান করতে বলা।'
      ),
      l(
        'Discontinue all fluid and sodium monitoring because heart failure alters only cardiac stroke volume, not renal solute dynamics.',
        'পানি ও লবণের হিসাব বন্ধ করে দেওয়া কারণ হার্ট ফেইলিউরে তরলের কোনো ভূমিকা নেই।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'In decompensated congestive heart failure with hypervolemic dilutional hyponatremia (serum Na = 124 mEq/L), non-osmotic baroreceptors sense a critically low effective arterial blood volume (EABV) due to pump failure, triggering massive compensatory release of arginine vasopressin (ADH). ADH inserts aquaporin-2 water channels into renal collecting ducts, causing free water retention that severely dilutes serum sodium. Total body sodium is actually high, but total body water is disproportionately higher. Infusing hypertonic saline or giving excess water would flood the pulmonary alveoli, precipitating fatal flash pulmonary edema. The mandatory medical nutrition therapy is strict fluid restriction (1,000–1,200 mL/day from all sources) combined with dietary sodium restriction (≤ 2,000 mg/day) to achieve a net negative fluid balance.',
      'তীব্র হার্ট ফেইলিউরে পাম্প দুর্বল হওয়ায় রক্তনালীর কার্যকর রক্তপ্রবাহ কমে যায়। মস্তিষ্ক একে পানিশূন্যতা মনে করে ভুলবশত প্রচুর ADH হরমোন নিঃসরণ করে। এই হরমোন কিডনি দিয়ে সব পানি আটকে শরীরে ধরে রাখে, ফলে রক্তে সোডিয়াম পাতলা হয়ে কমে যায় (ডাইলিউশনাল হাইপোনাট্রেমিয়া, সোডিয়াম ১২৪ mEq/L)। এই রোগীর শরীরে লবণ ও পানি উভয়ই অতিরিক্ত জমে আছে। এ অবস্থায় স্যালাইন বা অতিরিক্ত পানি দিলে তা ফুসফুসে জমে রোগী শ্বাস বন্ধ হয়ে মারা যেতে পারেন। তাই চিকিৎসার মূল ভিত্তি হলো সব ধরনের তরল দিনে ১০০০–১২০০ মিলিতে কঠোরভাবে সীমাবদ্ধ করা এবং লবণ দিনে সর্বোচ্চ ২ গ্রামে সীমিত রাখা।'
    ),
  },
  evidenceBySection: {
    'sec-fluid-balance-intro': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-rule-of-thumb': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-fever-fluid': ['ref-hebert-fluid-kinetics', 'ref-holliday-segar-1957'],
    'sec-daily-salts': ['ref-hebert-fluid-kinetics', 'ref-sterns-hyponatremia-2015'],
    'sec-holliday-segar-math': ['ref-holliday-segar-1957', 'ref-hebert-fluid-kinetics'],
    'sec-compartments-starling': ['ref-hebert-fluid-kinetics', 'ref-adrogue-madias-hyponatremia'],
    'sec-pyrexia-insensible': ['ref-hebert-fluid-kinetics', 'ref-holliday-segar-1957'],
    'sec-renal-countercurrent': ['ref-holliday-segar-1957', 'ref-gennari-osmolality-1984'],
    'sec-serum-osmolality-gap': ['ref-gennari-osmolality-1984', 'ref-sterns-hyponatremia-2015'],
    'sec-patho-hyponatremia': ['ref-sterns-hyponatremia-2015', 'ref-verbalis-hyponatremia-guidelines', 'ref-adrogue-madias-hyponatremia'],
    'sec-pontine-myelinolysis': ['ref-sterns-hyponatremia-2015', 'ref-erbp-hyponatremia-2014'],
    'sec-fluid-restrictions-cardiorenal': ['ref-verbalis-hyponatremia-guidelines', 'ref-sterns-hyponatremia-2015'],
    'sec-hypernatremia-deficit': ['ref-adrogue-madias-hyponatremia', 'ref-sterns-hyponatremia-2015'],
  },
  references: dietetics09References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-fluid-balance-intro',
          heading: l(
            '1. The Biological Ocean Inside Us: Why Fluid Balance Governs Survival',
            '১. মানবদেহের অভ্যন্তরীণ মহাসমুদ্র: পানির ভারসাম্য কেন জীবনের সবচেয়ে মৌলিক ভিত্তি?'
          ),
          paragraphs: [
            l(
              'Water is the single most abundant chemical constituent of the human organism, comprising roughly 50% to 60% of total body weight in adult women and men, and up to 75% in newborn infants [1]. Every living cell in your body is essentially a miniature aquatic chamber suspended in a warm saline ocean. All cellular enzymatic reactions, nutrient transports across membranes, waste clearance mechanisms, and blood pressure dynamics require water as an incompressible solvent and transport medium.',
              'পানি মানবদেহের একক বৃহত্তম রাসায়নিক উপাদান, যা একজন প্রাপ্তবয়স্ক পুরুষ ও নারীর শরীরের মোট ওজনের প্রায় ৫০% থেকে ৬০% এবং নবজাতক শিশুর ক্ষেত্রে ৭৫% পর্যন্ত স্থান দখল করে [1]। আমাদের শরীরের প্রতিটি জীবন্ত কোষ মূলত একটি ছোট জলজ পাত্র, যা একটি উষ্ণ লবণাক্ত তরল সাগরে নিমজ্জিত। কোষের সব জৈব রাসায়নিক বিক্রিয়া, পুষ্টি উপাদান পরিবহন, বর্জ্য নিষ্কাশন এবং রক্তচাপের স্বাভাবিক স্পন্দন বজায় রাখতে পানি অপরিহার্য।'
            ),
            l(
              'Unlike fat, which our bodies can store in adipose tissue for months, or glucose, which can be banked as glycogen for twenty-four hours, the human body possesses zero storage depot for free water [1, 5]. We are in a relentless state of water turnover. Every minute of the day, water escapes through our kidneys as urine, through the gut in stool, and invisibly through our skin and lungs with every breath we exhale.',
              'মানবদেহ চর্বি জমিয়ে কয়েক মাস কিংবা গ্লাইকোজেন জমিয়ে একদিন চালাতে পারে; কিন্তু অতিরিক্ত পানির জন্য শরীরে কোনো সঞ্চয় ভাণ্ডার বা স্টোরেজ নেই [1, 5]। আমরা প্রতিনিয়ত পানির এক অবিরাম আবর্তনের মধ্যে বেঁচে থাকি। প্রতি মুহূর্তে প্রস্রাবের মাধ্যমে কিডনি দিয়ে, মলের মাধ্যমে অন্ত্র দিয়ে, এবং নিঃশ্বাস ও ঘামের মাধ্যমে ত্বক ও ফুসফুস দিয়ে শরীর থেকে পানি উবে যাচ্ছে।'
            ),
            l(
              'When water losses outpace water intake, dehydration sets in. Blood volume contracts, blood pressure plummets, blood becomes dangerously viscous, and kidney nephrons shut down from ischemic shock. Conversely, if a patient with impaired heart or kidney function drinks more water than their organs can excrete, the excess volume backs up into the circulation, raising hydrostatic pressure until fluid floods the pulmonary alveoli—literally drowning the patient from the inside out [2, 4]. Calculating hydration is not a rough guess; it is a life-or-death mathematical calculation.',
              'পানি গ্রহণের চেয়ে নির্গমন বেশি হলে পানিশূন্যতা বা ডিহাইড্রেশন দেখা দেয়। এতে রক্তের মোট আয়তন কমে যায়, রক্তচাপ ধসে পড়ে, রক্ত বিপজ্জনকভাবে ঘন হয়ে যায় এবং কিডনি কাজ করা বন্ধ করে দেয়। পক্ষান্তরে, দুর্বল হার্ট বা কিডনির রোগী যদি প্রয়োজনের অতিরিক্ত পানি পান করেন, তবে সেই বাড়তি পানি রক্তনালী উপচে ফুসফুসের বায়ুথলিতে ঢুকে পড়ে—যার ফলে রোগী অভ্যন্তরীণভাবে শ্বাস বন্ধ হয়ে মৃত্যুর মুখে পতিত হন [2, 4]। তাই পুষ্টিবিদ ও চিকিৎসকদের কাছে রোগীর পানির হিসাব কোনো অনুমানের বিষয় নয়; এটি নিখুঁত গাণিতিক জীবনের হিসাব।'
            ),
          ],
        },
        {
          id: 'sec-rule-of-thumb',
          heading: l(
            '2. The Holliday-Segar 100/50/20 Rule: Translating Metabolic Heat into Water',
            '২. হলিডে-সেগার ১০০/৫০/২০ নিয়ম: শরীরের মেটাবলিক তাপকে পানির হিসাবে রূপান্তর'
          ),
          paragraphs: [
            l(
              'How much fluid does a human body actually require every day? In 1957, two visionary pediatric researchers, Malcolm Holliday and William Segar, made a profound biological realization: water requirements are not strictly dictated by weight alone, but by caloric heat expenditure [1]. In living mammals, cellular metabolism consumes approximately 1.0 mL of water for every 1.0 kcal of energy burned to dissipate heat and clear metabolic waste ashes.',
              'একজন মানুষের প্রতিদিন ঠিক কতটুকু পানি প্রয়োজন? ১৯৫৭ সালে দুই গবেষক ম্যালকম হলিডে এবং উইলিয়াম সেগার একটি অনন্য শারীরবৃত্তীয় সূত্র আবিষ্কার করেন: পানির সার্বিক চাহিদা কেবল ওজনের ওপর নয়, বরং শরীর কত ক্যালোরি তাপ পুড়িয়ে খরচ করছে তার ওপর নির্ভর করে [1]। মানবদেহে প্রতি ১.০ কিলোক্যালোরি শক্তি খরচের জন্য প্রায় ১.০ মিলি পানি প্রয়োজন হয়, যা শরীরের তাপ কমাতে এবং বিপাকীয় বর্জ্য ধুয়ে বের করতে ব্যয়িত হয়।'
            ),
            l(
              'From this metabolic reality, they formulated the world-famous **Holliday-Segar 100/50/20 algorithm**, which remains the gold standard of clinical hydration across hospitals worldwide [1]:',
              'এই মেটাবলিক সত্যের ওপর ভিত্তি করে তারা বিশ্ববিখ্যাত **হলিডে-সেগার ১০০/৫০/২০ সূত্র** তৈরি করেন, যা আজ বিশ্বজুড়ে প্রতিটি হাসপাতালের বেডসাইডে ব্যবহৃত হয় [1]:'
            ),
          ],
          bullets: [
            l(
              'First 10 kg of body weight (1 to 10 kg): 100 mL of fluid per kg of body weight per day (total = 1,000 mL).',
              'শরীরের প্রথম ১০ কেজি ওজন (১ থেকে ১০ কেজি): প্রতি কেজিতে ১০০ মিলি পানি প্রতিদিন (১০ কেজি = ১,০০০ মিলি)।'
            ),
            l(
              'Second 10 kg of body weight (11 to 20 kg): Add 50 mL of fluid per kg of body weight per day (total = 500 mL).',
              'পরবর্তী ১০ কেজি ওজন (১১ থেকে ২০ কেজি): প্রতি কেজিতে ৫০ মিলি পানি প্রতিদিন (পরবর্তী ১০ কেজি = ৫০০ মিলি)।'
            ),
            l(
              'Each kilogram above 20 kg (> 20 kg): Add 20 mL of fluid per kg of body weight per day for young adults (or 15 mL/kg in frail elderly).',
              '২০ কেজির ওপরে প্রতি অতিরিক্ত কেজি: প্রতি কেজিতে ২০ মিলি পানি প্রতিদিন (প্রবীণ বা দুর্বল রোগীদের ক্ষেত্রে ১৫ মিলি/কেজি)।'
            ),
          ],
        },
        {
          id: 'sec-fever-fluid',
          heading: l(
            '3. The Silent Evaporation Thief: Sensible vs. Insensible Losses and the Pyrexic Curve',
            '৩. শরীরের অদৃশ্য পানি চোর: দৃশ্যমান বনাম অদৃশ্য ক্ষয় এবং জ্বরের হিসাব'
          ),
          paragraphs: [
            l(
              'Daily water loss leaves our body through two distinct exits: **sensible losses** and **insensible losses** [5]. Understanding this difference is essential for preventing quiet, insidious dehydration in hospital wards and intensive care units.',
              'প্রতিদিন আমাদের শরীর থেকে দুটি পথে পানি বেরিয়ে যায়: **দৃশ্যমান তরল ক্ষয় (Sensible Loss)** এবং **অদৃশ্য তরল ক্ষয় (Insensible Loss)** [5]। হাসপাতালে রোগীর পানিশূন্যতা রোধ করতে এই দুটি পথের তফাত বোঝা অত্যন্ত জরুরি।'
            ),
          ],
          bullets: [
            l(
              'Sensible Fluid Losses: Fluid you can physically see, collect, and measure in a collection jug. This includes renal urination (normally 1,200 to 1,500 mL/day; absolute physiological minimum of 500 mL/day required to clear solute waste) and gastrointestinal stool moisture (100 to 200 mL/day in formed stool).',
              'দৃশ্যমান তরল ক্ষয়: যা খালি চোখে দেখা যায় এবং পাত্রে মেপে হিসাব রাখা যায়। এর মধ্যে রয়েছে প্রস্রাব (স্বাভাবিক অবস্থায় ১২০০ থেকে ১৫০০ মিলি/দিন; বর্জ্য বের করতে দিনে অন্তত ৫০০ মিলি হওয়া বাধ্যতামূলক) এবং মলের পানি (১০০ থেকে ২০০ মিলি/দিন)।'
            ),
            l(
              'Insensible Fluid Losses: Water that evaporates invisibly without forming visible beads of sweat. This consists of transepidermal water vapor diffusing continuously through the skin (300 to 400 mL/day) and humidified expired moisture from our lungs with every breath (300 to 400 mL/day), totaling 700 to 800 mL/day in a resting afebrile adult.',
              'অদৃশ্য তরল ক্ষয়: যে পানি না ঘেমেই বাষ্প হয়ে অদৃশ্যভাবে বাতাসে মিলিয়ে যায়। এর মধ্যে রয়েছে ত্বক চুইয়ে বাষ্প হওয়া পানি (৩০০–৪০০ মিলি/দিন) এবং প্রতিটি নিঃশ্বাসের সাথে ফুসফুস থেকে বের হওয়া জলীয় বাষ্প (৩০০–৪০০ মিলি/দিন), যা সাধারণ তাপমাত্রায় দিনে মোট ৭০০ থেকে ৮০০ মিলি।'
            ),
            l(
              'The Pyrexic Fever Rule: When body temperature rises, breathing accelerates and thermal vapor pressure across the skin surges. For every 1°C increase in core body temperature above 37°C, insensible evaporation increases by 10% to 12.5% (roughly 100 to 150 mL/day per °C) [1, 5].',
              'জ্বরের সোনালী নিয়ম: জ্বর হলে শরীরের তাপমাত্রা বাড়ে এবং শ্বাস দ্রুত চলে, যার ফলে বাষ্পীভবন তীব্র হয়। স্বাভাবিক ৩৭°C এর ওপরে শরীরের তাপমাত্রা প্রতি ১°C বাড়লে মোট তরলের চাহিদা ১০% থেকে ১২.৫% (প্রতি ডিগ্রিতে প্রায় ১০০ থেকে ১৫০ মিলি) বেড়ে যায় [1, 5]।'
            ),
          ],
        },
        {
          id: 'sec-daily-salts',
          heading: l(
            '4. Daily Baseline Mineral Salt Requirements: Sodium and Potassium Balance',
            '৪. দৈনিক স্বাভাবিক লবণের চাহিদা: সোডিয়াম ও পটাশিয়ামের ভারসাম্য'
          ),
          paragraphs: [
            l(
              'Water never travels alone; it moves across biological membranes in obedience to dissolved mineral salts, known as electrolytes [2]. The two paramount electrolytes governing fluid distribution are **Sodium (Na⁺)** and **Potassium (K⁺)**.',
              'শরীরে পানি কখনো একা চলাচল করে না; এটি জৈব পর্দার ওপারে দ্রবীভূত খনিজ লবণ বা ইলেক্ট্রোলাইটের আকর্ষণে প্রবাহিত হয় [2]। শরীরের তরল নিয়ন্ত্রণে প্রধান দুটি স্তম্ভ হলো **সোডিয়াম (Na⁺)** এবং **পটাশিয়াম (K⁺)**।'
            ),
            l(
              'Sodium is the king of the extracellular fluid (outside cells and inside blood vessels). It creates the osmotic pressure that keeps blood volume intact. Potassium is the undisputed master of the intracellular fluid (inside cells), driving the electrical membrane voltage required for nerve firing and cardiac muscle contraction. For an adult on complete parenteral or enteral nutrition, daily baseline maintenance requirements are standardized [5]:',
              'সোডিয়াম হলো কোষের বাইরের তরল ও রক্তনালীর প্রধান চালিকাশক্তি। এটি রক্তনালীতে পানির মোট আয়তন ধরে রাখে। পক্ষান্তরে পটাশিয়াম হলো কোষের ভেতরের তরলের প্রধান অধিপতি, যা স্নায়ুর সংকেত এবং হৃৎপিণ্ডের মাংসপেশির সংকোচন পরিচালনা করে। মুখে খাবার বন্ধ থাকা একজন রোগীর দৈনিক স্বাভাবিক চাহিদা হলো [5]:'
            ),
          ],
          bullets: [
            l(
              'Maintenance Sodium: 1.0 to 2.0 mEq per kg of body weight per day (approximately 70 to 140 mEq/day for a 70 kg adult).',
              'দৈনিক সোডিয়ামের চাহিদা: প্রতি কেজি ওজনের জন্য ১.০ থেকে ২.০ mEq (৭০ কেজি মানুষের ক্ষেত্রে দিনে প্রায় ৭০ থেকে ১৪০ mEq)।'
            ),
            l(
              'Maintenance Potassium: 0.5 to 1.0 mEq per kg of body weight per day (approximately 35 to 70 mEq/day for a 70 kg adult).',
              'দৈনিক পটাশিয়ামের চাহিদা: প্রতি কেজি ওজনের জন্য ০.৫ থেকে ১.০ mEq (৭০ কেজি মানুষের ক্ষেত্রে দিনে প্রায় ৩৫ থেকে ৭০ mEq)।'
            ),
            l(
              'Maintenance Dextrose: Infusing 100 to 150 g/day of dextrose (glucose) provides just enough substrate (400 to 600 kcal) to suppress hepatic gluconeogenesis and prevent starvation ketoacidosis while sparing somatic muscle proteins.',
              'দৈনিক ডেক্সট্রোজ: স্যালাইনে দিনে ১০০ থেকে ১৫০ গ্রাম গ্লুকোজ দিলে তা যকৃতের কিটোসিস বন্ধ রাখে এবং পেশি ক্ষয় প্রতিরোধ করে।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-holliday-segar-math',
          heading: l(
            '1. Quantitative Fluid Kinetics: Holliday-Segar vs. Age-Adjusted Weight Equations',
            '১. গাণিতিক তরল গতিবিদ্যা: হলিডে-সেগার বনাম বয়স সমন্বিত ওজনের সমীকরণ'
          ),
          paragraphs: [
            l(
              'In clinical hospital wards, fluid requirements are determined using two independently validated quantitative paradigms: the classical Holliday-Segar caloric equation and age-bracketed weight equations [1, 5].',
              'ক্লিনিক্যাল হাসপাতালে রোগীর পানির চাহিদা দুটি প্রধান গাণিতিক নিয়মে নির্ধারণ করা হয়: ক্লাসিক্যাল হলিডে-সেগার সূত্র এবং বয়স সমন্বিত ওজনের সমীকরণ [1, 5]।'
            ),
            l(
              'For a standard 70 kg adult male, the Holliday-Segar equation yields: 1,000 mL (first 10 kg) + 500 mL (next 10 kg) + (50 kg × 20 mL/kg) = 1,000 + 500 + 1,000 = 2,500 mL/day. In ambulatory adult clinical practice, validated age-adjusted weight rules are routinely applied [5]:',
              'একটি ৭০ কেজি ওজনের স্বাভাবিক প্রাপ্তবয়স্কের ক্ষেত্রে হলিডে-সেগার সূত্রের ফলাফল: ১,০০০ মিলি (প্রথম ১০ কেজি) + ৫০০ মিলি (পরবর্তী ১০ কেজি) + (৫০ কেজি × ২০ মিলি/কেজি) = ১,০০০ + ৫০০ + ১,০০০ = ২,৫০০ মিলি/দিন। তবে বয়সভেদে কিডনির কার্যক্ষমতার ওপর নির্ভর করে ওজনের সরাসরি নিয়ম ব্যবহৃত হয় [5]:'
            ),
          ],
          bullets: [
            l(
              'Young Active Adults (18 to 55 years): 35 mL per kg body weight per day (e.g., 70 kg × 35 mL = 2,450 mL/day).',
              'তরুণ কর্মক্ষম প্রাপ্তবয়স্ক (১৮ থেকে ৫৫ বছর): দৈনিক প্রতি কেজিতে ৩৫ মিলি (যেমন: ৭০ কেজি × ৩৫ মিলি = ২,৪৫০ মিলি/দিন)।'
            ),
            l(
              'Older Adults (55 to 65 years): 30 mL per kg body weight per day (e.g., 70 kg × 30 mL = 2,100 mL/day).',
              'প্রবীণ প্রাপ্তবয়স্ক (৫৫ থেকে ৬৫ বছর): দৈনিক প্রতি কেজিতে ৩০ মিলি (যেমন: ৭০ কেজি × ৩০ মিলি = ২,১০০ মিলি/দিন)।'
            ),
            l(
              'Elderly Individuals (> 65 years): 25 mL per kg body weight per day (or 1.0 mL per kcal of energy intake) to prevent volume overload in the setting of diminished glomerular filtration and reduced cardiac compliance.',
              'বয়োজ্যেষ্ঠ রোগী (> ৬৫ বছর): দৈনিক প্রতি কেজিতে ২৫ মিলি (বা প্রতি ১ কিলোক্যালোরিতে ১.০ মিলি পানি) যাতে কিডনির ফিল্টারিং ক্ষমতা কমে যাওয়ার কারণে শরীরে অতিরিক্ত পানি জমে না যায়।'
            ),
          ],
        },
        {
          id: 'sec-compartments-starling',
          heading: l(
            '2. Fluid Compartmentalization and Starling Microvascular Forces',
            '২. তরল বিভাজন এবং স্টার্লিং মাইক্রোভ্যাসকুলার গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Total Body Water (TBW) is distributed across two major physiological compartments separated by cellular lipid bilayers [5]:',
              'শরীরের মোট পানি দুটি প্রধান শারীরবৃত্তীয় অংশে বিভক্ত, যা কোষের লিপিড ঝিল্লি দ্বারা সুরক্ষিত [5]:'
            ),
          ],
          bullets: [
            l(
              'Intracellular Fluid (ICF): Accounts for two-thirds (66%) of total body water (~28 liters in a 70 kg adult). It is rich in potassium, magnesium, and organic phosphates.',
              'কোষের ভেতরের তরল (ICF): মোট পানির দুই-তৃতীয়াংশ (৬৬%) বা ৭০ কেজি মানুষের ক্ষেত্রে প্রায় ২৮ লিটার। এতে প্রচুর পটাশিয়াম, ম্যাগনেসিয়াম ও ফসফেট থাকে।'
            ),
            l(
              'Extracellular Fluid (ECF): Accounts for one-third (33%) of total body water (~14 liters). The ECF is further partitioned into the Interstitial Fluid bathing tissue cells (75% of ECF, ~10.5 liters) and the Intravascular Blood Plasma (25% of ECF, ~3.5 liters).',
              'কোষের বাইরের তরল (ECF): মোট পানির এক-তৃতীয়াংশ (৩৩%) বা প্রায় ১৪ লিটার। এটি আবার দুটি ভাগে বিভক্ত: কোষের চারপাশের ইন্টারস্টিশিয়াল ফ্লুইড (ECF এর ৭৫% বা ১০.৫ লিটার) এবং রক্তনালীর প্লাজমা (ECF এর ২৫% বা ৩.৫ লিটার)।'
            ),
            l(
              'Starling Microvascular Forces: Fluid movement between the intravascular plasma and the interstitial space is governed by Starling forces: Capillary Hydrostatic Pressure pushing water out versus Plasma Colloid Oncotic Pressure (exerted primarily by Albumin) pulling water back into the vascular bed. When severe systemic inflammation disrupts the endothelial glycocalyx, fluid escapes rapidly into the interstitial matrix—a phenomenon known as third-spacing.',
              'স্টার্লিং বল (Starling Forces): রক্তনালী থেকে পানি বাইরে যাবে নাকি ভেতরে থাকবে তা স্টার্লিং বল নিয়ন্ত্রণ করে: রক্তনালীর হাইড্রোস্ট্যাটিক চাপ পানি বের করে দেয় এবং অ্যালবুমিন প্রোটিনের অনকোটিক চাপ পানি টেনে রক্তনালীতে ধরে রাখে। প্রদাহের কারণে ক্যাপিলারি ফুটো হলে পানি কোষে কোষে জমে রক্তনালী শুকিয়ে যায়, যাকে থার্ড-স্পেসিং বলা হয়।'
            ),
          ],
        },
        {
          id: 'sec-pyrexia-insensible',
          heading: l(
            '3. Mathematical Modeling of Insensible Losses and Pyrexic Titration',
            '৩. অদৃশ্য বাষ্পীভবন ক্ষতি এবং জ্বরের গাণিতিক সমন্বয়'
          ),
          paragraphs: [
            l(
              'When calculating input/output sheets in critical care, failing to model insensible losses leads to severe cumulative hypovolemia [5]. Insensible cutaneous diffusion is non-sweat transudation across the stratum corneum, driven by thermal gradients.',
              'আইসিইউ এবং সার্জারি ওয়ার্ডে ইনপুট-আউটপুট চার্ট লেখার সময় অদৃশ্য বাষ্পীভবন হিসাব না করলে রোগী কয়েক দিনের মধ্যে মারাত্মক পানিশূন্যতায় পড়ে [5]। ত্বক চুইয়ে বের হওয়া এই পানি সাধারণ তাপমাত্রায় দিনে ৩০০ থেকে ৪০০ মিলি।'
            ),
            l(
              'In clinical practice, the **Thermal Correction Formula** is structured as follows [1, 5]:',
              'চিকিৎসাবিজ্ঞানে **জ্বরের তরল সমন্বয় সমীকরণটি** নিম্নরূপ [1, 5]:'
            ),
          ],
          bullets: [
            l(
              'Baseline Insensible Loss: 10 to 12 mL per kg of body weight per day in an afebrile resting state (~700 to 800 mL/day for 70 kg).',
              'স্বাভাবিক অদৃশ্য ক্ষয়: জ্বরহীন অবস্থায় প্রতি কেজিতে দিনে ১০ থেকে ১২ মিলি (৭০ কেজিতে প্রায় ৭০০–৮০০ মিলি/দিন)।'
            ),
            l(
              'Pyrexic Elevation Factor: Add 10% to 12.5% to total baseline maintenance fluid for each 1.0°C rise in body temperature above 37.0°C (or 5% per 1.0°F above 98.6°F).',
              'জ্বরের সমন্বয় গুণক: শরীরের স্বাভাবিক তাপমাত্রা ৩৭.০°C এর ওপরে প্রতি ১°C বৃদ্ধির জন্য মোট তরলে ১০% থেকে ১২.৫% অতিরিক্ত পানি যোগ করুন।'
            ),
            l(
              'Tachypneic Adjustment: For mechanically ventilated patients breathing dry medical gases or patients with severe tachypnea (respiratory rate > 25 breaths/min), add an additional 100 to 250 mL/day to compensate for unhumidified expired moisture.',
              'দ্রুত শ্বাসের সমন্বয়: রোগী খুব দ্রুত শ্বাস নিলে (মিনিটে ২৫ বারের বেশি) নিঃশ্বাসের বাড়তি বাষ্পীভবন পূরণে আরও ১০০ থেকে ২৫০ মিলি তরল বরাদ্দ করতে হয়।'
            ),
          ],
        },
        {
          id: 'sec-renal-countercurrent',
          heading: l(
            '4. Obligatory Solute Clearance and The Renal Concentrating Ceiling',
            '৪. কিডনির বাধ্যতামূলক বর্জ্য নিষ্কাশন এবং সর্বোচ্চ ঘনত্বের সীমা'
          ),
          paragraphs: [
            l(
              'Why can the human body never survive on zero water intake, even in complete hibernation? The answer lies in **obligatory renal solute clearance** [1, 3]. Daily cellular catabolism generates between 600 and 900 milliosmoles (mOsm) of metabolic solute waste every day—predominantly urea from protein degradation, creatinine, uric acid, and excess electrolytes.',
              'মানুষ কেন কোনো পানি না খেয়ে বেঁচে থাকতে পারে না? এর উত্তর লুকিয়ে আছে **কিডনির বাধ্যতামূলক বর্জ্য নিষ্কাশনের নিয়মে** [1, 3]। আমাদের শরীর প্রতিদিন প্রোটিন ভেঙে প্রায় ৬০০ থেকে ৯০০ মিলিঅসমোল (mOsm) বর্জ্য তৈরি করে—যার মধ্যে ইউরিয়া, ক্রিয়েটিনিন ও অতিরিক্ত খনিজ লবণ প্রধান।'
            ),
            l(
              'The healthy human kidney possesses a finite maximum concentrating capacity of approximately **1,200 mOsm per liter of urine**, established by the hypertonic medullary countercurrent multiplier system [3]. Therefore:',
              'মানবদেহের কিডনি প্রস্রাবকে সর্বোচ্চ **১২০০ mOsm/লিটার** ঘনত্ব পর্যন্ত ঘন করতে পারে। সুতরাং [3]:'
            ),
          ],
          bullets: [
            l(
              'Minimum Obligatory Urine Volume = Daily Solute Load (600 mOsm) / Maximum Urine Concentration (1,200 mOsm/L) = 0.50 Liters (500 mL/day).',
              'সর্বনিম্ন প্রয়োজনীয় প্রস্রাবের আয়তন = দৈনিক মোট বর্জ্য (৬০০ mOsm) / প্রস্রাবের সর্বোচ্চ ঘনত্ব (১২০০ mOsm/L) = ০.৫০ লিটার বা ৫০০ মিলি/দিন।'
            ),
            l(
              'Clinical Significance: If a patient excretes less than 500 mL of urine in 24 hours (oliguria, defined as < 0.5 mL/kg/hr in adults), the kidneys cannot physically excrete the daily solute burden. Nitrogenous waste products accumulate rapidly in blood, driving acute uremia and metabolic acidosis.',
              'ক্লিনিক্যাল গুরুত্ব: ২৪ ঘণ্টায় প্রস্রাব ৫০০ মিলির কম হলে (অলিগুরিয়া) কিডনি আর দৈনিক বর্জ্য বের করতে পারে না। রক্তে ইউরিয়া ও ক্রিয়েটিনিন জমে মারাত্মক ইউরেমিয়া এবং মেটাবলিক অ্যাসিডোসিস সৃষ্টি হয়।'
            ),
            l(
              'Aging Renal Decline: In elderly patients (> 70 years), renal medullary sclerosis reduces maximal concentrating capacity to ~600 mOsm/L. Consequently, their obligatory urine output doubles to 1,000 mL/day, predisposing elderly individuals to rapid volume depletion if fluid intake falters.',
              'প্রবীণদের ঝুঁকি: বয়স বাড়লে কিডনির প্রস্রাব ঘন করার ক্ষমতা কমে মাত্র ৬০০ mOsm/L এ নেমে আসে। ফলে তাদের বর্জ্য বের করতে দিনে অন্তত ১,০০০ মিলি প্রস্রাব করতে হয়, যার কারণে বয়স্ক ব্যক্তিরা দ্রুত পানিশূন্যতায় আক্রান্ত হন।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-serum-osmolality-gap',
          heading: l(
            '1. Biophysics of Serum Osmolality, Effective Tonicity & The Osmolar Gap',
            '১. রক্তের অসমোলারিটি, কার্যকর টনিসিটি এবং অসমোলার গ্যাপের জৈবপদার্থবিজ্ঞান'
          ),
          paragraphs: [
            l(
              'Serum osmolality quantifies the concentration of osmotically active solute particles dissolved per kilogram of serum water [3]. Under physiological homeostasis, hypothalamic supraoptic and paraventricular osmoreceptors detect minuscule 1% shifts in plasma tonicity, modulating arginine vasopressin (ADH) secretion to lock serum osmolality tightly between **275 and 295 mOsm/kg**.',
              'সেরাম অসমোলারিটি হলো রক্তের প্রতি কেজি পানিতে দ্রবীভূত সক্রিয় কণার মোট সংখ্যা [3]। মস্তিষ্কের হাইপোথ্যালামাস অত্যন্ত সংবেদনশীলভাবে রক্তের অসমোলারিটিকে **২৭৫ থেকে ২৯৫ mOsm/কেজি** এর মধ্যে ধরে রাখে।'
            ),
            l(
              'Calculated Serum Osmolality is derived from the standard tripartite clinical formula [3]:',
              'রক্ত পরীক্ষার প্রধান তিনটি উপাদানের সাহায্যে সূত্রের মাধ্যমে অসমোলারিটি গণনা করা হয় [3]:'
            ),
            l(
              'Calculated Serum Osmolality (mOsm/kg) = 2 × [Serum Na⁺ (mEq/L)] + [Serum Glucose (mg/dL) / 18] + [BUN (mg/dL) / 2.8]',
              'হিসাবকৃত সেরাম অসমোলারিটি (mOsm/কেজি) = ২ × [সোডিয়াম (mEq/L)] + [গ্লুকোজ (mg/dL) / ১৮] + [BUN (mg/dL) / ২.৮]'
            ),
          ],
          bullets: [
            l(
              'The Sodium Multiplier (2 × Na⁺): Sodium is accompanied by an equivalent stoichiometric concentration of unmeasured monovalent anions (primarily Chloride Cl⁻ and Bicarbonate HCO₃⁻). Multiplying sodium by 2 accounts for these paired osmotic counter-ions.',
              'সোডিয়ামকে ২ দিয়ে গুণের কারণ: সোডিয়ামের সাথে সমপরিমাণ ক্লোরাইড ও বাইকার্বনেট থাকে, তাই গুণক ২ তাদের সম্মিলিত অসমোটিক প্রভাব তুলে ধরে।'
            ),
            l(
              'Mass-to-Osmolar Conversion: Dividing serum glucose by 18 converts mg/dL into millimoles per liter (molecular weight of glucose = 180). Dividing Blood Urea Nitrogen (BUN) by 2.8 converts mg/dL into mmol/L (two nitrogen atoms per urea molecule, atomic weight = 28).',
              'একক রূপান্তর: গ্লুকোজের আণবিক ভর ১৮০ হওয়ায় ১৮ দিয়ে এবং ইউরিয়ার দুই নাইট্রোজেনের ভর ২৮ হওয়ায় ২.৮ দিয়ে ভাগ করে মিলিগ্রামকে মিলিঅসমোলে রূপান্তর করা হয়।'
            ),
            l(
              'Effective Circulating Tonicity: Urea is an "ineffective osmole" because it freely permeates cellular aquaglyceroporins and equilibrates across membranes without shifting water. Effective Tonicity = 2 × [Na⁺] + [Glucose / 18]. Only effective osmoles dictate transcellular fluid shifts.',
              'কার্যকর টনিসিটি (Effective Tonicity): ইউরিয়া কোষের ভেতর অবাধে যাতায়াত করতে পারে বলে এটি পানি টানে না (নিষ্ক্রিয় অসমোল)। কার্যকর টনিসিটি = ২ × [সোডিয়াম] + [গ্লুকোজ / ১৮]। কেবল কার্যকর উপাদানই কোষের পানি টেনে বাইরে বের করে।'
            ),
            l(
              'The Serum Osmolar Gap: Defined as Measured Osmolality (via clinical freezing-point osmometer) minus Calculated Osmolality. A normal gap is < 10 mOsm/kg. An elevated gap (> 10 mOsm/kg) alerts the clinician to unmeasured low-molecular-weight exogenous toxins: toxic alcohols (methanol, ethylene glycol), isopropanol, or accumulation of propylene glycol solvent from intravenous infusions [3].',
              'সেরাম অসমোলার গ্যাপ: ল্যাবের যন্ত্রে সরাসরি মাপা অসমোলারিটি বিয়োগ সূত্রের হিসাবকৃত অসমোলারিটি। স্বাভাবিক মান < ১০ mOsm/কেজি। মান ১০ এর বেশি হলে তা রক্তে বিষাক্ত মিথানল, অ্যান্টিফ্রিজ রাসায়নিক বা ওষুধের বিষাক্ততার নিশ্চিত প্রমাণ [3]।'
            ),
          ],
        },
        {
          id: 'sec-patho-hyponatremia',
          heading: l(
            '2. The Hyponatremia Spectrum: Hypervolemic Dilution vs. Hypovolemic Depletion',
            '২. হাইপোনাট্রেমিয়ার গভীর শারীরবৃত্তীয় প্রকারভেদ: ডাইলিউশনাল বনাম প্রকৃত লবণের ঘাটতি'
          ),
          paragraphs: [
            l(
              'Hyponatremia (serum Na⁺ < 135 mEq/L) is the most frequent electrolyte disorder encountered in clinical medicine [2, 4, 6]. However, treating hyponatremia based on the lab number alone without determining volume status causes catastrophic clinical harm.',
              'রক্তে সোডিয়াম কমে যাওয়া বা হাইপোনাট্রেমিয়া (সোডিয়াম < ১৩৫ mEq/L) হাসপাতালের সবচেয়ে পরিচিত ইলেক্ট্রোলাইট সমস্যা [2, 4, 6]। কিন্তু রোগীর শরীরে মোট পানির পরিমাণ না জেনে কেবল রিপোর্ট দেখে চিকিৎসা করলে মারাত্মক বিপদ হতে পারে।'
            ),
            l(
              'Clinicians must categorize hyponatremia into three distinct hemodynamic phenotypes [4, 6]:',
              'শারীরবৃত্তীয়ভাবে হাইপোনাট্রেমিয়াকে তিনটি প্রধান শ্রেণীতে বিভক্ত করা হয় [4, 6]:'
            ),
          ],
          bullets: [
            l(
              'Hypovolemic Hyponatremia: True deficit of both sodium and water, with sodium loss exceeding water loss (severe vomiting, cholera diarrhea, thiazide diuretics, Addisonian adrenal failure). Patients display orthostatic hypotension, dry mucous membranes, and tachycardia. Treatment mandates volume resuscitation with isotonic (0.9%) saline [2, 4].',
              'হাইপোভোলেমিক হাইপোনাট্রেমিয়া: শরীর থেকে পানি ও লবণ উভয়ই বের হয়ে গেছে, তবে লবণের ক্ষতি বেশি (তীব্র ডায়রিয়া, বমি, ডাইউরেটিক ওষুধ)। রোগীর রক্তচাপ কমে যায় এবং চোখ গর্তে ঢোকে। এর চিকিৎসা হলো স্বাভাবিক স্যালাইন (০.৯%) দিয়ে ঘাটতি পূরণ করা।'
            ),
            l(
              'Euvolemic Hyponatremia: Normal extracellular fluid volume with isolated pure water retention, classically driven by the Syndrome of Inappropriate Antidiuretic Hormone secretion (SIADH), severe hypothyroidism, or psychogenic polydipsia. Treatment centers on moderate water restriction and treating the underlying etiology [4].',
              'ইউভোলেমিক হাইপোনাট্রেমিয়া: শরীরে রক্তের আয়তন স্বাভাবিক থাকে কিন্তু অপ্রয়োজনীয়ভাবে ADH হরমোন ক্ষরণের কারণে (SIADH) পানি আটকে সোডিয়াম পাতলা হয়। এর চিকিৎসা হলো পানি পানে নিয়ন্ত্রণ আনা।'
            ),
            l(
              'Hypervolemic Dilutional Hyponatremia: Marked expansion of extracellular fluid volume with peripheral edema or ascites, seen in Congestive Heart Failure, Decompensated Liver Cirrhosis, and Nephrotic Syndrome. Total body sodium is actually massively elevated, but Effective Arterial Blood Volume (EABV) is critically reduced. Carotid sinus baroreceptors trigger non-osmotic ADH hypersecretion, forcing the renal collecting ducts to reabsorb vast volumes of pure water, diluting circulating sodium [2, 4].',
              'হাইপারভোলেমিক ডাইলিউশনাল হাইপোনাট্রেমিয়া: সারা শরীরে পানি জমে ফুলে যায় (হার্ট ফেইলিউর, লিভার সিরোসিস)। রোগীর শরীরে মোট সোডিয়ামের পরিমাণ বেশি থাকে, কিন্তু কার্যক্ষম রক্তপ্রবাহ কমে যাওয়ায় মস্তিষ্ক ভুলবশত প্রচুর ADH হরমোন ছেড়ে পানি আটকে দেয়। ফলে রক্তে সোডিয়াম পাতলা হয়ে কমে যায়।'
            ),
          ],
        },
        {
          id: 'sec-pontine-myelinolysis',
          heading: l(
            '3. The Neurological Minefield: Osmotic Demyelination Syndrome vs. Cerebral Edema',
            '৩. নিউরোলজিক্যাল মাইনফিল্ড: মস্তিষ্কের মারাত্মক ডিমায়েলিনেশন বনাম সেরিব্রাল এডিমা'
          ),
          paragraphs: [
            l(
              'Correcting sodium disorders requires exquisite biological respect for the blood-brain barrier and astrocyte volume regulation [2, 7]. Failure to understand astrocyte biophysics can cause irreversible quadriplegia or death.',
              'রক্তে সোডিয়ামের চিকিৎসা করার সময় মস্তিষ্কের রক্ত-মস্তিষ্ক পর্দা (Blood-Brain Barrier) এবং অ্যাস্ট্রোসাইট কোষের পানির পরিবর্তনকে গভীরভাবে সম্মান করতে হয় [2, 7]। অসতর্ক চিকিৎসায় রোগী স্থায়ী পক্ষাঘাতগ্রস্ত বা মৃত্যুবরণ করতে পারে।'
            ),
          ],
          bullets: [
            l(
              'Acute Hyponatremia (< 48 hours): When serum sodium falls precipitously, water rushes across the blood-brain barrier along the osmotic gradient into brain cells, causing acute cerebral edema, increased intracranial pressure, tentorial herniation, seizures, and respiratory arrest.',
              'তীব্র হঠাৎ হাইপোনাট্রেমিয়া (< ৪৮ ঘণ্টা): রক্তে সোডিয়াম হঠাৎ কমলে রক্তের পানি অসমোটিক আকর্ষণে হুড়মুড় করে মস্তিষ্কের কোষে ঢুকে পড়ে। ফলে ব্রেইন ফুলে ওঠে (Cerebral Edema), খিঁচুনি হয় এবং মস্তিষ্কের ওপর চাপ পড়ে মৃত্যু হতে পারে।'
            ),
            l(
              'Chronic Adaptation (> 48 hours): Brain astrocytes adapt to chronic hyponatremia by extruding intracellular electrolytes (potassium, chloride) and organic osmolytes (myo-inositol, taurine, glutamine) into the cerebrospinal fluid, shedding intracellular volume to restore normal brain cell size despite low plasma sodium [2].',
              'দীর্ঘমেয়াদী অভিযোজন (> ৪৮ ঘণ্টা): রক্তে সোডিয়াম অনেক দিন কম থাকলে মস্তিষ্কের কোষগুলো নিজেদের থেকে পটাশিয়াম ও জৈব রাসায়নিক কণা বাইরে বের করে দেয়, যাতে কোষ ফুলে না গিয়ে নিজের স্বাভাবিক আকার বজায় রাখতে পারে।'
            ),
            l(
              'The Catastrophic Rapid Correction Trap: If the clinician aggressively infuses hypertonic saline or corrects sodium too rapidly (> 8 to 10 mEq/L in 24 hours, or > 18 mEq/L in 48 hours), the extracellular fluid suddenly becomes hypertonic relative to the osmolyte-depleted brain cells. Water is violently sucked out of the astrocytes and oligodendrocytes. The cells shrivel, their axons detach from myelin sheaths, and catastrophic Osmotic Demyelination Syndrome (Central Pontine Myelinolysis) erupts. The patient develops spastic quadriparesis, locked-in syndrome, and permanent pseudo-bulbar palsy [2, 7].',
              'দ্রুত সোডিয়াম বাড়ানোর মারাত্মক ফাঁদ: ডাক্তার যদি স্যালাইন দিয়ে ২৪ ঘণ্টায় সোডিয়াম খুব দ্রুত (> ৮–১০ mEq/L) বাড়িয়ে দেন, তবে শুকনা ব্রেইনের কোষ থেকে সব পানি হঠাৎ বাইরে বেরিয়ে আসে। এতে মস্তিষ্কের মায়েলিন আবরণ ছিঁড়ে পুড়ে যায় (Central Pontine Myelinolysis)। রোগী চিরতরে প্যারালাইজড হয়ে যেতে পারে বা চোখ বাদে সারা শরীর অবশ হয়ে "লকড-ইন সিন্ড্রোমে" বন্দি হয়ে যায় [2, 7]।'
            ),
            l(
              'Universal Safety Correction Limits: In chronic hyponatremia, never exceed a sodium correction velocity of 8 mEq/L in 24 hours (maximum 4 to 6 mEq/L/day in high-risk patients with alcoholism, malnutrition, or advanced liver disease). If overcorrection occurs, immediately infuse 5% dextrose in water (D5W) or administer desmopressin (DDAVP) to re-lower sodium into the safe zone [7].',
              'আন্তর্জাতিক নিরাপদ সীমার নিয়ম: দীর্ঘমেয়াদী কম সোডিয়াম থাকা রোগীর ক্ষেত্রে ২৪ ঘণ্টায় কোনোভাবেই ৮ mEq/L এর বেশি সোডিয়াম বাড়ানো যাবে না (অপুষ্টি ও লিভারের রোগীর ক্ষেত্রে ৪–৬ mEq/L)। ভুলবশত বেশি বেড়ে গেলে সাথে সাথে গ্লুকোজ পানি দিয়ে সোডিয়াম পুনরায় নামিয়ে আনতে হয়।'
            ),
          ],
        },
        {
          id: 'sec-fluid-restrictions-cardiorenal',
          heading: l(
            '4. Clinical Fluid Restriction Regimens: Cardiorenal and Hepatic Protocols',
            '৪. অঙ্গভিত্তিক তরল নিয়ন্ত্রণের ক্লিনিক্যাল প্রোটোকল: হার্ট, কিডনি ও লিভার সিরোসিস'
          ),
          paragraphs: [
            l(
              'When end-organ failure destroys the physiological mechanisms of free water clearance, standard hydration formulas must be replaced with strict organ-specific fluid restriction protocols [2, 4]:',
              'যখন হার্ট, কিডনি বা লিভার বিকল হয়ে শরীর থেকে স্বাভাবিক পানি বের করার ক্ষমতা নষ্ট হয়ে যায়, তখন সাধারণ পানির হিসাব বন্ধ করে কঠোর রোগভিত্তিক নিয়ন্ত্রণ জারি করতে হয় [2, 4]:'
            ),
          ],
          bullets: [
            l(
              'Decompensated Heart Failure & Dilutional Hyponatremia: In hypervolemic hyponatremia (serum Na⁺ < 130 mEq/L), non-osmotic baroreceptors stimulate intense ADH release. Enforce a strict total fluid restriction of 1,000 to 1,500 mL/day across all intake sources (oral fluids, IV piggybacks, and flushes), paired with dietary sodium restriction of ≤ 2,000 mg/day (2 g) to achieve net negative fluid balance [2, 4].',
              'হার্ট ফেইলিউর ও ডাইলিউশনাল হাইপোনাট্রেমিয়া: রক্তে সোডিয়াম পাতলা হয়ে < ১৩০ mEq/L হলে ওষুধ ও খাবারসহ মোট তরল দিনে ১,০০০ থেকে ১,৫০০ মিলিতে কঠোরভাবে সীমাবদ্ধ করতে হবে এবং লবণ দিনে ২ গ্রামের নিচে নামাতে হবে [2, 4]।',
            ),
            l(
              'Oliguric Acute Kidney Injury & Anuric Hemodialysis: In patients with severely reduced or absent urine output, fluid intake is capped at: Daily Urine Volume + 500 mL (insensible loss buffer). In anuric hemodialysis patients, fluid is strictly restricted to < 1,000 mL/day to maintain Interdialytic Weight Gain (IDWG) below 2.0 to 2.5 kg (or < 4% of dry body weight), preventing acute left ventricular strain and flash pulmonary edema.',
              'কিডনি ফেইলিউর ও ডায়ালাইসিস: মোট দৈনিক তরল হবে: ২৪ ঘণ্টার মোট প্রস্রাব + ৫০০ মিলি। প্রস্রাব সম্পূর্ণ বন্ধ থাকা রোগীদের দিনে ১ লিটারের কম তরল গ্রহণ করতে হয় যাতে দুই ডায়ালাইসিসের মাঝে ২ থেকে ২.৫ কেজির বেশি ওজন না বাড়ে, যা হার্ট ও ফুসফুসে পানি জমার মূল কারণ।',
            ),
            l(
              'Decompensated Cirrhosis with Ascites: Fluid restriction (1,000 to 1,500 mL/day) is indicated ONLY when true dilutional hyponatremia supervenes (serum Na⁺ < 125 mEq/L). In mild hyponatremia (126 to 135 mEq/L), water is NOT restricted; management focuses strictly on dietary sodium restriction (2,000 mg/day) and titrated aldosterone antagonists (spironolactone) [4].',
              'লিভার সিরোসিস ও অ্যাসাইটিস (পেটে পানি): তরল নিয়ন্ত্রণ কেবল তখনই করা হয় যখন সোডিয়াম মারাত্মক কমে < ১২৫ mEq/L এ নেমে আসে। সোডিয়াম ১২৬–১৩৫ থাকলে পানি না কমিয়ে কেবল খাবারে লবণ নিয়ন্ত্রণ এবং মূত্রবর্ধক ওষুধ সমন্বয় করতে হয় [4]।',
            ),
          ],
        },
        {
          id: 'sec-hypernatremia-deficit',
          heading: l(
            '5. Hypernatremia Kinetics: Free Water Deficit Formulation & Safe Rehydration Velocity',
            '৫. হাইপারন্যাট্রেমিয়া গতিবিদ্যা: ফ্রি ওয়াটার ডেফিসিট সমীকরণ এবং নিরাপদ রিহাইড্রেশন'
          ),
          paragraphs: [
            l(
              'Hypernatremia (serum Na⁺ > 145 mEq/L) is fundamentally a hypertonic disorder representing a net deficit of pure water relative to total body solute [2, 6]. It occurs most commonly in debilitated elderly or intubated patients who cannot access water independently.',
              'হাইপারন্যাট্রেমিয়া বা রক্তে সোডিয়াম বেড়ে যাওয়া (সোডিয়াম > ১৪৫ mEq/L) মূলত লবণের তুলনায় বিশুদ্ধ পানির চরম ঘাটতি নির্দেশ করে [2, 6]। বৃদ্ধ বা অচেতন রোগী যারা নিজে পানি খেতে পারেন না তাদের ক্ষেত্রে এটি বেশি ঘটে।'
            ),
            l(
              'The volume of pure water required to restore serum sodium to the normal reference point (140 mEq/L) is calculated using the **Free Water Deficit Formula** [2, 6]:',
              'রক্তের সোডিয়ামকে স্বাভাবিক মাত্রায় (১৪০ mEq/L) নামিয়ে আনতে ঠিক কত লিটার পানি প্রয়োজন তা **ফ্রি ওয়াটার ডেফিসিট সূত্র** দিয়ে হিসাব করা হয় [2, 6]:'
            ),
            l(
              'Free Water Deficit (Liters) = Total Body Water (TBW) × [(Serum Na⁺ / 140) – 1]',
              'পানির মোট ঘাটতি (লিটার) = মোট পানির পরিমাণ (TBW) × [(রক্তের সোডিয়াম / ১৪০) – ১]'
            ),
            l(
              'where TBW = Body Weight (kg) × 0.60 in young men, 0.50 in young women and elderly men, and 0.45 in elderly women.',
              'যেখানে TBW = তরুণ পুরুষের ক্ষেত্রে ওজন × ০.৬০, তরুণ নারী ও প্রবীণ পুরুষের ক্ষেত্রে ওজন × ০.৫০ এবং প্রবীণ নারীর ক্ষেত্রে ওজন × ০.৪৫।'
            ),
          ],
          bullets: [
            l(
              'Safe Rehydration Velocity: Just as rapid elevation of sodium causes pontine myelinolysis, rapid reduction of chronic hypernatremia causes acute cerebral edema. Brain cells synthesize organic osmolytes to preserve cell volume in hypertonic states. Rapid water infusion causes osmotic water influx into brain cells, triggering fatal cerebral swelling.',
              'নিরাপদ পানির গতিবেগ: সোডিয়াম যেমন দ্রুত বাড়ানো বিপজ্জনক, তেমনি দীর্ঘদিন বেশি থাকা সোডিয়াম দ্রুত কমানোও সমপরিমাণ মারাত্মক। দ্রুত পানি দিলে মস্তিষ্কের কোষে পানি ঢুকে সেরিব্রাল এডিমা ও খিঁচুনি হতে পারে।',
            ),
            l(
              'Golden Rule: Never lower serum sodium faster than 10 to 12 mEq/L in 24 hours (a velocity of ~0.5 mEq/L per hour). Replace the calculated free water deficit slowly over 48 to 72 hours, using enterally administered free water or 5% dextrose in water (D5W) [2, 6].',
              'সোনালী নিয়ম: ২৪ ঘণ্টায় সোডিয়াম কমানোর গতি কখনোই ১০ থেকে ১২ mEq/L এর বেশি হওয়া যাবে না (ঘণ্টায় প্রায় ০.৫ mEq/L)। হিসাবকৃত ঘাটতি ৪৮ থেকে ৭২ ঘণ্টার ব্যবধানে ধীরে ধীরে পূরণ করতে হবে [2, 6]।',
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Holliday-Segar & Weight Kinetics', '১. হলিডে-সেগার সমীকরণ ও তরল নির্ধারণ'), sectionId: 'sec-holliday-segar-math' },
      { id: 'toc-2', label: l('2. Fluid Compartments & Starling Forces', '২. তরল বিভাজন ও স্টার্লিং গতিবিদ্যা'), sectionId: 'sec-compartments-starling' },
      { id: 'toc-3', label: l('3. Insensible Losses & Pyrexic Curve', '৩. অদৃশ্য বাষ্পীভবন ক্ষতি ও জ্বরের হিসাব'), sectionId: 'sec-pyrexia-insensible' },
      { id: 'toc-4', label: l('4. Obligatory Solute Clearance', '৪. কিডনির বাধ্যতামূলক বর্জ্য নিষ্কাশন'), sectionId: 'sec-renal-countercurrent' },
      { id: 'toc-5', label: l('5. Serum Osmolality & Osmolar Gap', '৫. রক্তের অসমোলারিটি ও অসমোলার গ্যাপ'), sectionId: 'sec-serum-osmolality-gap' },
      { id: 'toc-6', label: l('6. Hyponatremia & Dilutional States', '৬. হাইপোনাট্রেমিয়া ও ডাইলিউশনাল অবস্থা'), sectionId: 'sec-patho-hyponatremia' },
      { id: 'toc-7', label: l('7. Osmotic Demyelination Syndrome', '৭. অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম'), sectionId: 'sec-pontine-myelinolysis' },
      { id: 'toc-8', label: l('8. Cardiorenal Fluid Restrictions', '৮. হার্ট ও কিডনির তরল নিয়ন্ত্রণ'), sectionId: 'sec-fluid-restrictions-cardiorenal' },
      { id: 'toc-9', label: l('9. Hypernatremia & Water Deficit', '৯. হাইপারন্যাট্রেমিয়া ও পানির ঘাটতি'), sectionId: 'sec-hypernatremia-deficit' },
    ],
    terms: [
      {
        term: l('Holliday-Segar Formula', 'হলিডে-সেগার সূত্র (Holliday-Segar Formula)'),
        definition: l(
          'A standardized clinical fluid algorithm based on caloric expenditure: 100 mL/kg for the first 10 kg, 50 mL/kg for 11–20 kg, and 20 mL/kg for each kg thereafter.',
          'ক্যালোরি খরচের ভিত্তিতে দৈনিক স্বাভাবিক তরল নির্ধারণের প্রমিত নিয়ম: প্রথম ১০ কেজিতে ১০০ মিলি/কেজি, পরবর্তী ১০ কেজিতে ৫০ মিলি/কেজি এবং বাকি ওজনের জন্য ২০ মিলি/কেজি।'
        ),
      },
      {
        term: l('Serum Osmolality', 'সেরাম অসমোলারিটি (Serum Osmolality)'),
        definition: l(
          'The concentration of solute particles per kilogram of serum water: 2 × Na + Glucose/18 + BUN/2.8 (normal reference: 275–295 mOsm/kg).',
          'রক্তের প্রতি কেজি পানিতে দ্রবীভূত সক্রিয় কণার ঘনত্ব: ২ × সোডিয়াম + গ্লুকোজ/১৮ + BUN/২.৮ (স্বাভাবিক মান: ২৭৫–২৯৫ mOsm/কেজি)।'
        ),
      },
      {
        term: l('Osmolar Gap', 'অসমোলার গ্যাপ (Osmolar Gap)'),
        definition: l(
          'The difference between measured serum osmolality (via osmometer) and calculated osmolality; values > 10 mOsm/kg indicate unmeasured exogenous toxins such as methanol or ethylene glycol.',
          'ল্যাবে সরাসরি পরিমাপকৃত অসমোলারিটি এবং সূত্রের হিসাবকৃত অসমোলারিটির পার্থক্য; মান ১০ এর বেশি হলে বিষাক্ত অ্যালকোহলের উপস্থিতি প্রমাণ করে।'
        ),
      },
      {
        term: l('Osmotic Demyelination Syndrome', 'অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম (ODS)'),
        definition: l(
          'Severe neurological damage characterized by the destruction of myelin sheaths in the pons (Central Pontine Myelinolysis), caused by overly rapid correction of chronic hyponatremia (> 8–10 mEq/L in 24 hours).',
          'দীর্ঘমেয়াদী কম সোডিয়াম ২৪ ঘণ্টায় খুব দ্রুত (> ৮–১০ mEq/L) বাড়িয়ে দিলে ব্রেইনের পনসের মায়েলিন পর্দা পুড়ে স্থায়ী পক্ষাঘাতগ্রস্ত হওয়ার মারাত্মক জটিলতা।'
        ),
      },
      {
        term: l('Dilutional Hyponatremia', 'ডাইলিউশনাল হাইপোনাট্রেমিয়া (Dilutional Hyponatremia)'),
        definition: l(
          'Low serum sodium (Na < 135 mEq/L) occurring in hypervolemic states (heart failure, cirrhosis) where free water retention dilutes circulating sodium despite elevated total body sodium.',
          'হার্ট বা লিভার বিকল হলে শরীরে অতিরিক্ত পানি জমে রক্ত পাতলা হয়ে যাওয়ার কারণে রক্তে সোডিয়ামের ঘনত্ব কমে যাওয়ার অবস্থা।'
        ),
      },
      {
        term: l('Free Water Deficit', 'ফ্রি ওয়াটার ডেফিসিট (Free Water Deficit)'),
        definition: l(
          'The calculated volume of pure water required to normalize serum sodium in hypernatremia: TBW × [(Serum Na / 140) – 1].',
          'হাইপারন্যাট্রেমিয়ার রোগীর সোডিয়ামকে স্বাভাবিক ১৪০ mEq/L এ নামাতে প্রয়োজনীয় বিশুদ্ধ পানির মোট পরিমাণ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Comprehensive Maintenance Fluid and Osmolar Calculation in a Febrile Surgical Patient',
          'বাস্তব কেস স্টাডি: জ্বরে আক্রান্ত অস্ত্রোপচারের রোগীর তরল প্রেসক্রিপশন ও অসমোলারিটি নির্ণয়'
        ),
        steps: [
          l(
            'Step 1: Patient Profile & Assessment. A 68-year-old female post-cholecystectomy is NPO (nothing by mouth). Weight = 62 kg, Height = 160 cm. Her core body temperature is 38.8°C (1.8°C above normal baseline 37.0°C). Laboratory results: Serum Na⁺ = 138 mEq/L, K⁺ = 4.1 mEq/L, Serum Glucose = 144 mg/dL, BUN = 14 mg/dL, Serum Creatinine = 0.9 mg/dL.',
            'ধাপ ১: রোগীর তথ্য: পিত্তথলি অস্ত্রোপচারের পর মুখে খাবার বন্ধ থাকা ৬৮ বছর বয়সী নারী (ওজন ৬২ কেজি, উচ্চতা ১৬০ সেমি)। শরীরের তাপমাত্রা ৩৮.৮°C (স্বাভাবিকের চেয়ে ১.৮°C বেশি)। রক্ত পরীক্ষা: সোডিয়াম ১৩৮ mEq/L, পটাশিয়াম ৪.১ mEq/L, গ্লুকোজ ১৪৪ mg/dL, BUN ১৪ mg/dL, ক্রিয়েটিনিন ০.৯ mg/dL।'
          ),
          l(
            'Step 2: Calculate Baseline Holliday-Segar Maintenance Fluid. First 10 kg = 1,000 mL. Next 10 kg = 500 mL. Remaining 42 kg (62 – 20 kg) at 20 mL/kg = 42 × 20 = 840 mL. Baseline Maintenance Requirement = 1,000 + 500 + 840 = 2,340 mL/day.',
            'ধাপ ২: স্বাভাবিক হলিডে-সেগার তরল হিসাব: প্রথম ১০ কেজি = ১,০০০ মিলি। পরবর্তী ১০ কেজি = ৫০০ মিলি। বাকি ৪২ কেজি × ২০ মিলি = ৮৪০ মিলি। বেসলাইন পানি = ১,০০০ + ৫০০ + ৮৪০ = ২,৩৪০ মিলি/দিন।'
          ),
          l(
            'Step 3: Adjust for Thermal Pyrexic Vaporization. Temperature is 1.8°C above 37.0°C. Applying the pyrexic rule of 10% fluid increase per 1°C elevation: Total thermal adjustment = 1.8 × 10% = 18% increase. Thermal fluid increment = 2,340 mL × 0.18 = 421.2 mL. Total Adjusted Maintenance Fluid = 2,340 + 421 = 2,761 mL/day (~115 mL/hour).',
            'ধাপ ৩: জ্বরের অদৃশ্য বাষ্পীভবন সমন্বয়: তাপমাত্রা ১.৮°C বেশি। প্রতি ১°C বৃদ্ধিতে ১০% বাড়ালে মোট বৃদ্ধি = ১.৮ × ১০% = ১৮%। অতিরিক্ত পানি = ২,৩৪০ × ০.১৮ = ৪২১ মিলি। জ্বরে মোট কাঙ্ক্ষিত তরল = ২,৩৪০ + ৪২১ = ২,৭৬১ মিলি/দিন (ঘণ্টায় প্রায় ১১৫ মিলি)।'
          ),
          l(
            'Step 4: Formulate Daily Electrolyte Targets and Select IV Solution. Maintenance Sodium (1.5 mEq/kg) = 62 × 1.5 = 93 mEq/day. Maintenance Potassium (1.0 mEq/kg) = 62 × 1.0 = 62 mEq/day. Prescribe IV solution: D5 0.45% NaCl + 20 mEq KCl/L running at 115 mL/hour, delivering 215 mEq sodium, 55 mEq potassium, and 138 g dextrose over 24 hours to cover all losses and suppress ketoacidosis.',
            'ধাপ ৪: ইলেক্ট্রোলাইট লক্ষ্য ও স্যালাইন নির্বাচন: সোডিয়াম (১.৫ mEq/কেজি) = ৬২ × ১.৫ = ৯৩ mEq/দিন। পটাশিয়াম (১.০ mEq/কেজি) = ৬২ × ১.০ = ৬২ mEq/দিন। প্রেসক্রিপশন: D5 ০.৪৫% স্যালাইন সাথে ২০ mEq KCl প্রতি লিটারে ঘণ্টায় ১১৫ মিলি হারে চালানো।'
          ),
          l(
            'Step 5: Calculate Serum Osmolality and Effective Tonicity. Calculated Osmolality = 2 × (138) + (144 / 18) + (14 / 2.8) = 276 + 8.0 + 5.0 = 289.0 mOsm/kg. Effective Tonicity = 276 + 8.0 = 284.0 mOsm/kg. Conclusion: Both values fall squarely within the normal physiological window (275–295 mOsm/kg), confirming isotonic fluid equilibrium with zero threat of cerebral edema or shrinkage.',
            'ধাপ ৫: অসমোলারিটি ও টনিসিটি হিসাব: হিসাবকৃত অসমোলারিটি = ২ × (১৩৮) + (১৪৪ / ১৮) + (১৪ / ২.৮) = ২৭৬ + ৮.০ + ৫.০ = ২৮৯.০ mOsm/কেজি। কার্যকর টনিসিটি = ২৭৬ + ৮.০ = ২৮৪.০ mOsm/কেজি। সিদ্ধান্ত: রোগীর রক্তের মান স্বাভাবিক সীমার (২৭৫–২৯৫) মধ্যে সম্পূর্ণ সুরক্ষিত রয়েছে।'
          ),
        ],
        conclusion: l(
          'Integrating the Holliday-Segar equation with thermal pyrexic corrections prevented acute postoperative hypovolemia, while verifying serum osmolality and effective tonicity safeguarded cellular water balance.',
          'হলিডে-সেগার সূত্রের সাথে জ্বরের অতিরিক্ত পানির সমন্বয় করায় রোগীর অস্ত্রোপচার-পরবর্তী পানিশূন্যতা সফলভাবে প্রতিরোধ করা সম্ভব হয় এবং রক্তের অসমোলারিটি স্বাভাবিক মাত্রায় বজায় থাকে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why must clinicians avoid rapid intravenous administration of sodium in chronic severe hyponatremia?',
          'দীর্ঘমেয়াদী মারাত্মক কম সোডিয়াম থাকা রোগীর ক্ষেত্রে কেন কখনোই শিরাপথে দ্রুত সোডিয়াম বাড়ানো উচিত নয়?'
        ),
        answer: l(
          'Brain cells adapt to chronic hyponatremia by extruding intracellular organic osmolytes (myo-inositol, taurine, glutamine) to prevent cerebral edema and maintain normal cell volume. If serum sodium is raised too rapidly (> 8–10 mEq/L in 24 hours), the abrupt extracellular hypertonicity draws water out of brain cells faster than they can regenerate osmolytes. Astrocytes and oligodendrocytes shrivel and detach from axons, precipitating Osmotic Demyelination Syndrome (Central Pontine Myelinolysis), resulting in locked-in syndrome, spastic quadriparesis, pseudobulbar palsy, or death.',
          'রক্তে সোডিয়াম দীর্ঘদিন কম থাকলে মস্তিষ্কের কোষগুলো নিজেদের থেকে পানি ও রাসায়নিক কণা বের করে ভারসাম্য বজায় রাখে। যদি স্যালাইন দিয়ে ২৪ ঘণ্টায় সোডিয়াম খুব দ্রুত (> ৮–১০ mEq/L) বাড়িয়ে দেওয়া হয়, তবে মস্তিষ্কের কোষ থেকে পানি হঠাৎ বাইরে বেরিয়ে এসে ব্রেইনের মায়েলিন স্তর ছিঁড়ে ধ্বংস হয়ে যায় (Central Pontine Myelinolysis)। এর ফলে রোগী প্যারালাইজড হয়ে যেতে পারে বা চোখ ছাড়া সারা শরীর অবশ হয়ে মৃত্যুবরণ করতে পারে।'
        ),
      },
      {
        question: l(
          'Why does a patient with decompensated liver cirrhosis develop dilutional hyponatremia even though their total body sodium is actually elevated?',
          'লিভার সিরোসিসের রোগীর শরীরে মোট লবণের পরিমাণ বেশি থাকা সত্ত্বেও রক্ত পরীক্ষায় কেন সোডিয়াম কম (Hyponatremia) দেখায়?'
        ),
        answer: l(
          'Cirrhosis causes massive splanchnic arterial vasodilation, which drops systemic vascular resistance and reduces effective arterial blood volume (EABV). In response, carotid baroreceptors falsely sense hypovolemia and trigger intense, non-osmotic release of Arginine Vasopressin (ADH). ADH inserts aquaporin-2 channels into renal collecting ducts, causing the kidneys to reabsorb vast volumes of pure water. The patient has an excess of sodium, but an even greater excess of retained water, diluting circulating sodium in blood.',
          'লিভার সিরোসিস হলে পেটের রক্তনালীগুলো অতিরিক্ত প্রসারিত হয়ে রক্তচাপ কমিয়ে দেয়। এর ফলে মস্তিষ্ক মনে করে শরীরে রক্ত বা পানির তীব্র সংকট তৈরি হয়েছে এবং সে প্রচুর পরিমাণে ADH হরমোন নিঃসরণ করে। এই হরমোন কিডনি দিয়ে সব পানি আটকে শরীরে ধরে রাখে। ফলে শরীরে লবণ বেশি থাকলেও পানির পরিমাণ এত বেশি জমে যায় যে সোডিয়াম পাতলা হয়ে রক্ত পরীক্ষায় কম দেখা যায়।'
        ),
      },
      {
        question: l(
          'Why is the maximum velocity of hypernatremia reduction capped at 10–12 mEq/L per 24 hours?',
          'হাইপারন্যাট্রেমিয়া বা বেশি সোডিয়াম কমানোর গতি কেন ২৪ ঘণ্টায় ১০–১২ mEq/L এর মধ্যে সীমিত রাখা হয়?'
        ),
        answer: l(
          'In chronic hypernatremia, brain cells accumulate idiogenic organic osmolytes to protect against shrinkage in a hypertonic environment. If serum sodium is lowered too rapidly by aggressive free water infusion, the brain becomes hypertonic relative to the diluted plasma. Water rushes violently into brain cells along the osmotic gradient, triggering fatal acute cerebral edema, seizures, and tentorial herniation.',
          'রক্তে সোডিয়াম বেশি থাকলে মস্তিষ্কের কোষগুলো নিজেদের ভেতর রাসায়নিক কণা জমিয়ে শুকিয়ে যাওয়া রোধ করে। এ অবস্থায় স্যালাইন দিয়ে সোডিয়াম খুব দ্রুত কমিয়ে দিলে রক্ত পাতলা হয়ে সব পানি হঠাৎ মস্তিষ্কের কোষে ঢুকে ব্রেইন ফুলে ওঠে (Cerebral Edema)। এর ফলে তীব্র খিঁচুনি এবং শ্বাস বন্ধ হয়ে রোগী মারা যেতে পারে।'
        ),
      },
    ],
  },
}
