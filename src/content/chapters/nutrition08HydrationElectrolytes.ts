import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const hydrationRefs = [
  {
    id: 'armstrong-jacn-hydration',
    authors: 'Lawrence E. Armstrong',
    title: 'Assessing hydration status: the elusive gold standard',
    organization: 'Journal of the American College of Nutrition',
    year: 2007,
    url: 'https://doi.org/10.1080/07315724.2007.10719651',
    doi: '10.1080/07315724.2007.10719651',
  },
  {
    id: 'verbalis-bestpract-water-homeostasis',
    authors: 'Joseph G. Verbalis',
    title: 'Disorders of body water homeostasis',
    organization: 'Best Practice & Research Clinical Endocrinology & Metabolism',
    year: 2003,
    url: 'https://doi.org/10.1016/s1521-690x(03)00049-6',
    doi: '10.1016/s1521-690x(03)00049-6',
  },
  {
    id: 'who-ors-guidelines-diarrhoea',
    authors: 'World Health Organization',
    title: 'The Treatment of Diarrhoea: A manual for physicians and other senior health workers, 4th revision (Reduced Osmolarity ORS)',
    organization: 'World Health Organization',
    year: 2005,
    url: 'https://www.who.int/publications/i/item/9241593180',
  },
  {
    id: 'gropper-advanced-nutrition-water',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th edition, Chapter 12: Water and Electrolytes',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'sterns-nejm-disorders-plasma-sodium',
    authors: 'Richard H. Sterns',
    title: 'Disorders of Plasma Sodium — Causes, Consequences, and Correction',
    organization: 'The New England Journal of Medicine',
    year: 2015,
    url: 'https://doi.org/10.1056/NEJMra1404489',
    doi: '10.1056/NEJMra1404489',
  },
  {
    id: 'sawka-msse-exercise-fluid',
    authors: 'Michael N. Sawka, Louise M. Burke, E. Randy Eichner, et al.',
    title: 'American College of Sports Medicine position stand: Exercise and fluid replacement',
    organization: 'Medicine & Science in Sports & Exercise',
    year: 2007,
    url: 'https://doi.org/10.1249/mss.0b013e31802ca597',
    doi: '10.1249/mss.0b013e31802ca597',
  },
]

export const nutrition08HydrationElectrolytesLesson: LessonTopic = {
  id: 'topic.nutrition.hydration-electrolytes-fluid-balance',
  slug: 'hydration-electrolytes-fluid-balance',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '08 · Cellular Hydration, Fluid Balance & Electrolyte Osmoregulation',
    '০৮ · কোষীয় আর্দ্রতা, তরলের ভারসাম্য ও ইলেক্ট্রোলাইট অসমোরিলেশন'
  ),
  summary: l(
    'Comprehensive university textbook analysis of human fluid balance and electrolyte physiology: intracellular vs extracellular fluid partitions, Gibbs-Donnan equilibrium, transcapillary Starling forces, hypothalamic osmoreception, the vasopressin-aquaporin-2 signaling cascade, the renin-angiotensin-aldosterone axis, exercise-associated hyponatremia, and stoichiometric oral rehydration therapy.',
    'মানবদেহের তরল ভারসাম্য ও ইলেক্ট্রোলাইট শারীরবৃত্তের পূর্ণাঙ্গ বিশ্ববিদ্যালয় পাঠ্যপুস্তক বিশ্লেষণ: আন্তঃকোষীয় ও বহিঃকোষীয় তরল প্রকোষ্ঠ, গিবস-ডনান ভারসাম্য, কৈশিক জালিকার স্টার্লিং বল, হাইপোথ্যালামাসের অসমোরিসেপশন, ভ্যাসোপ্রেসিন-অ্যাকোয়াপোরিন-২ সংকেত প্রবাহ, রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন অক্ষ, ব্যায়ামজনিত হাইপোনাট্রিমিয়া এবং খাবার স্যালাইনের স্টইকিওমেট্রিক বায়োফিজিক্স।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Quantify total body water distribution across intracellular, interstitial, and intravascular fluid compartments, defining the biophysical forces governing transcellular and transcapillary fluid flux [1, 4].',
      'আন্তঃকোষীয়, ইন্টারস্টিশিয়াল ও রক্তনালী প্রকোষ্ঠে মোট পানির বিভাজন পরিমাপ করা এবং কোষপর্দা ও রক্তজালিকা জুড়ে তরল প্রবাহ নিয়ন্ত্রণকারী বায়োফিজিক্যাল বলসমূহ ব্যাখ্যা করা [১, ৪]।'
    ),
    l(
      'Detail the molecular neuroendocrinology of osmoregulation, tracing hypothalamic osmosensing, posterior pituitary vasopressin release, and renal principal cell aquaporin-2 vesicle trafficking [2].',
      'অসমোরেগুলেশনের আণবিক নিউরোএন্ডোক্রিনোলজি বিশ্লেষণ করা, যার মধ্যে রয়েছে হাইপোথ্যালামাসের সংবেদন, পিটুইটারি থেকে ভ্যাসোপ্রেসিন নিঃসরণ এবং কিডনির কোষে অ্যাকোয়াপোরিন-২ স্থানান্তর [২]।'
    ),
    l(
      'Differentiate tonicity disorders from extracellular volume depletion, detailing the pathophysiology of hypertonic dehydration, hypovolemic hyponatremia, and exercise-associated hyponatremia [1, 5, 6].',
      'টনিসিটির তারতম্য এবং বহিঃকোষীয় তরলের ঘাটতির পার্থক্য নির্ণয় করা এবং হাইপারটনিক পানিশূন্যতা, হাইপোভোলেমিক হাইপোনাট্রিমিয়া ও ব্যায়ামজনিত হাইপোনাট্রিমিয়ার প্যাথোফিজিওলজি নিরূপণ করা [১, ৫, ৬]।'
    ),
    l(
      'Explain the stoichiometric biophysics of reduced-osmolarity Oral Rehydration Salts (ORS) via enterocyte SGLT1 cotransport, and outline the neuroprotective correction rate limits for chronic dysnatremias [2, 3, 5].',
      'এন্টারোসাইটের SGLT1 কো-ট্রান্সপোর্টের মাধ্যমে কম-ঘনত্বের ওআরএস (ORS) এর কার্যপদ্ধতি ব্যাখ্যা করা এবং দীর্ঘস্থায়ী সোডিয়াম জটিলতায় মস্তিষ্কের সুরক্ষা নিশ্চিত করার চিকিৎসা সীমা নির্ধারণ করা [২, ৩, ৫]।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.satiety-neuroendocrinology-appetite'],
  references: hydrationRefs,
  evidenceBySection: {
    introduction: ['armstrong-jacn-hydration', 'gropper-advanced-nutrition-water'],
    structure: ['gropper-advanced-nutrition-water', 'armstrong-jacn-hydration'],
    mechanism: ['verbalis-bestpract-water-homeostasis', 'gropper-advanced-nutrition-water'],
    integration: ['sterns-nejm-disorders-plasma-sodium', 'sawka-msse-exercise-fluid'],
    practice: ['who-ors-guidelines-diarrhoea', 'sawka-msse-exercise-fluid'],
    takeaways: ['armstrong-jacn-hydration', 'verbalis-bestpract-water-homeostasis'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Water: The Fundamental Solvent of Human Life', '১. পানি: মানব জীবনের মৌলিক দ্রাবক'), sectionId: 'introduction' },
      { id: 'sec-structure', label: l('2. Electrolyte Distribution & The Sodium-Potassium Balance', '২. ইলেক্ট্রোলাইটের বিন্যাস ও সোডিয়াম-পটাশিয়াম ভারসাম্য'), sectionId: 'structure' },
      { id: 'sec-mechanism', label: l('3. How The Brain & Kidneys Regulate Fluid: Thirst & Vasopressin', '৩. মস্তিষ্ক ও কিডনি কীভাবে পানি নিয়ন্ত্রণ করে: পিপাসা ও ভ্যাসোপ্রেসিন'), sectionId: 'mechanism' },
      { id: 'sec-integration', label: l('4. Understanding Dehydration & The Danger of Hyponatremia', '৪. পানিশূন্যতার ধরন ও হাইপোনাট্রিমিয়ার বিপদ'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Practical Daily Hydration & The Miracle of ORS', '৫. দৈনন্দিন সঠিক পানীয় গ্রহণ ও ওআরএসের জীবনরক্ষাকারী ভূমিকা'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Key Educational Takeaways', '৬. মূল শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Total Body Water (TBW)', 'দেহের মোট পানির পরিমাণ (TBW)'),
        definition: l(
          'The total aggregate volume of fluid within the human body, constituting approximately 60% of body weight in adult males (42 L in a 70-kg individual) and 50–55% in adult females, distributed across intracellular and extracellular fluid compartments.',
          'মানবদেহে উপস্থিত মোট পানির পরিমাণ, যা সুস্থ প্রাপ্তবয়স্ক পুরুষের মোট দৈহিক ওজনের প্রায় ৬০% (৭০ কেজি ওজনের ব্যক্তির ক্ষেত্রে প্রায় ৪২ লিটার); এর দুই-তৃতীয়াংশ কোষের ভেতরে এবং এক-তৃতীয়াংশ কোষের বাইরে থাকে।'
        ),
      },
      {
        term: l('Effective Osmolality / Tonicity', 'কার্যকরী অসমোলারিটি / টনিসিটি'),
        definition: l(
          'The concentration of non-permeant solutes (primarily sodium salts and glucose) that exert an osmotic force across semi-permeable cell membranes, dictating the direction and magnitude of transcellular water movement.',
          'কোষপর্দা ভেদ করতে পারে না এমন দ্রব্যের (প্রধানত সোডিয়াম ও গ্লুকোজ) ঘনত্ব, যা কোষের ভেতর ও বাইরের মধ্যে পানির অসমোটিক স্থানান্তর এবং কোষের প্রকৃত আয়তন নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Aquaporin-2 (AQP2)', 'অ্যাকোয়াপোরিন-২ (AQP2)'),
        definition: l(
          'A specialized homotetrameric transmembrane water channel protein stored in intracellular vesicles within renal collecting duct principal cells; translocates to the apical brush border upon vasopressin V2 receptor activation to permit transcellular free water reabsorption.',
          'বৃক্কের সংগ্রাহী নালিকার কোষে অবস্থিত একটি বিশেষ পানি পরিবহনকারী প্রোটিন; ভ্যাসোপ্রেসিন হরমোনের প্রভাবে কোষের ভেতরের থলি থেকে কোষের উপরিভাগে এসে মূত্র থেকে রক্তে পানি পুনঃশোষণ নিশ্চিত করে।'
        ),
      },
      {
        term: l('Renin-Angiotensin-Aldosterone System (RAAS)', 'রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন সিস্টেম (RAAS)'),
        definition: l(
          'The primary endocrine cascade governing extracellular fluid volume and systemic arterial blood pressure; activated by renal hypoperfusion or sympathetic stimulation to promote renal sodium and water retention via aldosterone and angiotensin II.',
          'বহিঃকোষীয় তরলের আয়তন এবং রক্তচাপ নিয়ন্ত্রণকারী প্রধান হরমোন চক্র; বৃক্কে রক্তপ্রবাহ কমে গেলে সক্রিয় হয়ে সোডিয়াম ও পানি ধরে রেখে রক্তচাপ ও সঞ্চালন স্বাভাবিক রাখে।'
        ),
      },
      {
        term: l('Exercise-Associated Hyponatremia (EAH)', 'ব্যায়ামজনিত হাইপোনাট্রিমিয়া (EAH)'),
        definition: l(
          'A life-threatening dilutional drop in serum sodium ([Na+] <135 mEq/L) during or up to 24 hours after prolonged physical exertion, caused by overconsumption of hypotonic fluids combined with sustained non-osmotic vasopressin secretion.',
          'দীর্ঘস্থায়ী ব্যায়ামের সময় অতিরিক্ত সাধারণ পানি পান এবং মানসিক বা শারীরিক চাপে ভ্যাসোপ্রেসিন নিঃসরণ অব্যাহত থাকার কারণে রক্তে সোডিয়াম বিপজ্জনকভাবে কমে যাওয়া, যার ফলে মস্তিষ্কে পানি জমে মৃত্যু হতে পারে।'
        ),
      },
      {
        term: l('Osmotic Demyelination Syndrome (ODS)', 'অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম (ODS)'),
        definition: l(
          'A devastating neurological disorder triggered by the overly rapid correction of chronic hyponatremia (>8 mEq/L in 24 hours), causing acute astrocyte dehydration, blood-brain barrier disruption, and non-inflammatory demyelination of the basis pontis.',
          'দীর্ঘস্থায়ী হাইপোনাট্রিমিয়া অত্যন্ত দ্রুত গতিতে (২৪ ঘণ্টায় ৮ mEq/L এর বেশি) স্যালাইন দিয়ে স্বাভাবিক করার ফলে মস্তিষ্কের পনস অঞ্চলের স্নায়ুর আবরণী নষ্ট হয়ে তৈরি হওয়া এক মারাত্মক প্যারালাইসিস রোগ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Plasma Osmolality & Free Water Deficit in Severe Dehydration', 'তীব্র পানিশূন্যতায় প্লাজমা অসমোলারিটি ও মুক্ত পানির ঘাটতি নির্ণয়'),
        steps: [
          l(
            'Step 1: Calculate Effective Serum Osmolality using clinical chemistry parameters: Serum Na+ = 154 mEq/L, Serum Glucose = 90 mg/dL, BUN = 14 mg/dL. Formula: Effective Osmolality = 2 x [Na+] + [Glucose mg/dL / 18] = 2 x 154 + (90 / 18) = 308 + 5 = 313 mOsm/kg (Normal reference range: 285–295 mOsm/kg).',
            'ধাপ ১: ল্যাবরেটরি রিপোর্ট ব্যবহার করে কার্যকরী প্লাজমা অসমোলারিটি হিসাব করুন: সিরাম সোডিয়াম = ১৫৪ mEq/L, গ্লুকোজ = ৯০ mg/dL। সূত্র: ২ x [Na+] + [গ্লুকোজ / ১৮] = ২ x ১৫৪ + ৫ = ৩১৩ mOsm/kg (স্বাভাবিক মাত্রা: ২৮৫–২৯৫ mOsm/kg)।'
          ),
          l(
            'Step 2: Estimate Total Body Water (TBW) in a 70-kg dehydrated male: Normal TBW = 0.60 x 70 kg = 42.0 Liters. Accounting for dehydration (~50% body mass in acute state): Target baseline TBW = 42.0 L.',
            'ধাপ ২: ৭০ কেজি ওজনের পুরুষের স্বাভাবিক মোট পানির পরিমাণ (TBW) নির্ধারণ করুন: TBW = ০.৬০ x ৭০ কেজি = ৪২.০ লিটার।'
          ),
          l(
            'Step 3: Calculate Free Water Deficit (FWD) to correct hypernatremia back to 140 mEq/L: FWD = TBW x [([Current Na+] / 140) - 1] = 42.0 x [(154 / 140) - 1] = 42.0 x (1.10 - 1) = 4.2 Liters.',
            'ধাপ ৩: সোডিয়ামকে স্বাভাবিক ১৪০ mEq/L এ নামিয়ে আনতে মুক্ত পানির ঘাটতি (FWD) হিসাব করুন: ঘাটতি = ৪২.০ x [(১৫৪ / ১৪০) - ১] = ৪২.০ x ০.১০ = ৪.২ লিটার।'
          ),
        ],
        conclusion: l(
          'The patient has an unreplaced free water deficit of 4.2 Liters resulting in hypertonic cellular dehydration. To prevent cerebral edema and seizures, replacement fluid (5% dextrose in water or oral water) must be administered gradually over 48 to 72 hours, ensuring the serum sodium decrease does not exceed 0.5 mEq/L per hour (maximum 10–12 mEq/L per 24 hours).',
          'রোগীর দেহে ৪.২ লিটার খাঁটি পানির ঘাটতি তৈরি হয়েছে যার ফলে কোষগুলো শুকিয়ে গেছে। মস্তিষ্কের সুরক্ষা নিশ্চিত করতে স্যালাইন বা পানীয় দিয়ে ধীরে ধীরে ৪৮ থেকে ৭২ ঘণ্টা ধরে এই ঘাটতি পূরণ করতে হবে, যাতে প্রতি ঘণ্টায় সোডিয়াম হ্রাসের হার ০.৫ mEq/L এবং ২৪ ঘণ্টায় ১০–১২ mEq/L এর বেশি না হয়।'
        ),
      },
      {
        title: l('Calculating Sweat Rate & Formulating an Athlete Rehydration Protocol', 'ক্রীড়াবিদের ঘামের হার ও পানি প্রতিস্থাপন প্রোটোকল নির্ধারণ'),
        steps: [
          l(
            'Step 1: Record pre- and post-exercise body mass under standard conditions: Pre-run body mass = 70.0 kg; Post-run body mass after 90 minutes of running at 28°C = 68.2 kg (acute body mass loss = 1.8 kg). Fluid consumed during run = 500 mL (0.5 kg). Urine output during run = 0 mL.',
            'ধাপ ১: ব্যায়ামের আগে ও পরের ওজন রেকর্ড করুন: দৌড়ানোর আগে ওজন = ৭০.০ কেজি; ২৮° সেলসিয়াসে ৯০ মিনিট দৌড়ানোর পর ওজন = ৬৮.২ কেজি (ক্ষয় = ১.৮ কেজি)। দৌড়ের সময় পানীয় গ্রহণ = ৫০০ মিলি (০.৫ কেজি)। প্রস্রাবের পরিমাণ = ০ মিলি।'
          ),
          l(
            'Step 2: Calculate total sweat loss during the bout: Sweat loss = Weight loss + Fluid intake - Urine output = 1.8 kg + 0.5 kg - 0 = 2.3 kg (2,300 mL).',
            'ধাপ ২: মোট ঘামের অপচয় হিসাব করুন: ঘামের ক্ষতি = ওজনের ক্ষতি + পানীয় গ্রহণ = ১.৮ কেজি + ০.৫ কেজি = ২.৩ কেজি (২,৩০০ মিলিলিটার)।'
          ),
          l(
            'Step 3: Compute hourly sweat rate and dehydration severity: Hourly rate = 2,300 mL / 1.5 hours = 1,533 mL/hour (~1.53 L/h). Percentage body weight deficit: (1.8 kg / 70.0 kg) x 100 = 2.57% (which surpasses the clinical dehydration threshold of 2.0% body mass loss).',
            'ধাপ ৩: প্রতি ঘণ্টার ঘামের হার: ২,৩০০ মিলি / ১.৫ ঘণ্টা = ১,৫৩৩ মিলি/ঘণ্টা (~১.৫৩ লি/ঘণ্টা)। ওজনের শতকরা ক্ষয়: (১.৮ / ৭০) x ১০০ = ২.৫৭% (যা ২% পানিশূন্যতার নিরাপদ সীমা অতিক্রম করেছে)।'
          ),
          l(
            'Step 4: Formulate post-exercise rehydration protocol: ACSM guidelines mandate replacing 125% to 150% of the net fluid deficit (1.8 kg x 1.5 = 2.7 Liters) over 2 to 4 hours with sodium-containing electrolyte fluids (~20–30 mEq/L Na+) to counteract continuous obligatory urinary and respiratory losses.',
            'ধাপ ৪: পানিশূন্যতা নিরাময় পরিকল্পনা: ACSM নির্দেশিকা অনুযায়ী পরবর্তী ২–৪ ঘণ্টায় ঘাটতির ১২৫% থেকে ১৫০% তরল (১.৮ কেজি x ১.৫ = ২.৭ লিটার) সোডিয়ামযুক্ত ইলেক্ট্রোলাইটের (২০–৩০ mEq/L) মাধ্যমে পান করতে হবে যাতে কিডনি প্রস্রাবের মাধ্যমে পানি বের করে না দেয়।'
          ),
        ],
        conclusion: l(
          'The athlete sustained clinically significant hypohydration (2.57% body mass deficit) with a high sweat rate of 1.53 L/h. Restoring full plasma volume and physical performance necessitates consuming 2.7 Liters of an electrolyte beverage containing sodium and small amounts of carbohydrate to stimulate active intestinal absorption and prevent involuntary diuresis.',
          'ক্রীড়াবিদের দেহে ২.৫৭% ওজনের পানিশূন্যতা হয়েছে এবং প্রতি ঘণ্টায় ঘামের হার ১.৫৩ লিটার। পূর্ণ শারীরিক সক্ষমতা পুনরুদ্ধারে সোডিয়াম ও শর্করাযুক্ত ২.৭ লিটার ইলেক্ট্রোলাইট পানীয় গ্রহণ আবশ্যক যা মূত্রের অপচয় কমিয়ে কোষে পানি ধরে রাখবে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does the World Health Organization Reduced-Osmolarity ORS formulation (245 mOsm/L) save lives in severe secretory diarrhea, even when intestinal CFTR channels are locked in active chloride secretion?',
          'মারাত্মক কলেরা বা ডায়রিয়ায় যখন অন্ত্রের কোষে ক্লোরাইড নিঃসরণ বন্ধ করা যায় না, তখনো বিশ্ব স্বাস্থ্য সংস্থার ওআরএস (২৪৫ mOsm/L) কীভাবে অন্ত্রে পানি শোষণ করিয়ে জীবন বাঁচায়?'
        ),
        answer: l(
          'Cholera toxin stimulates adenylate cyclase, locking CFTR chloride channels open and preventing passive fluid uptake. However, the brush-border Sodium-Glucose Cotransporter-1 (SGLT1) remains fully functional. By providing equimolar glucose (75 mmol/L) and sodium (75 mmol/L), SGLT1 couples active sodium-glucose import, generating a steep osmotic gradient that forces water into enterocytes via solvent drag despite massive secretory drive.',
          'কলেরা টক্সিন ক্লোরাইড চ্যানেল খুলে দিয়ে মারাত্মক পানির অপচয় ঘটায়। কিন্তু অন্ত্রের SGLT1 কো-ট্রান্সপোর্টার পুরোপুরি সচল থাকে। ওআরএসে সমপরিমাণ গ্লুকোজ (৭৫ mmol/L) ও সোডিয়াম (৭৫ mmol/L) থাকায় SGLT1 দ্রুত লবণ ও চিনি কোষে টেনে নেয়, যা শক্তিশালী অসমোটিক চাপের মাধ্যমে বিপুল পরিমাণ পানি অন্ত্রে শোষণ করিয়ে পানিশূন্যতা রোধ করে।'
        ),
      },
      {
        question: l(
          'What is the precise cellular mechanism by which rapid correction of chronic hyponatremia (>8 mEq/L per 24 hours) causes Osmotic Demyelination Syndrome?',
          'দীর্ঘস্থায়ী হাইপোনাট্রিমিয়া খুব দ্রুত গতিতে (২৪ ঘণ্টায় >৮ mEq/L) স্যালাইন দিয়ে স্বাভাবিক করতে গেলে কীভাবে কোষে অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম তৈরি হয়?'
        ),
        answer: l(
          'In chronic hyponatremia (>48 hours), brain astrocytes adapt to hypotonic extracellular fluid by extruding organic osmolytes (taurine, myo-inositol, glutamate) to prevent cell swelling. When serum sodium is elevated too rapidly with hypertonic saline, the brain cannot synthesize or import osmolytes quickly enough; water rushes out of astrocytes into the hypertonic plasma, triggering massive glial dehydration, blood-brain barrier rupture, and non-inflammatory demyelination of the basis pontis.',
          'হাইপোনাট্রিমিয়ায় মস্তিষ্ক ফুলে যাওয়া রোধ করতে কোষ থেকে জৈব অসমোলাইট বের করে দেয়। হঠাৎ রক্তে সোডিয়াম বাড়িয়ে দিলে কোষগুলো এত দ্রুত অসমোলাইট তৈরি করতে পারে না; ফলে অসমোটিক টানে কোষ থেকে পানি বের হয়ে ব্রেনের গ্লায়াল কোষ সংকুচিত হয়ে মারা যায় এবং পনস অঞ্চলের স্নায়ুর আবরণী ধ্বংস হয়ে প্যারালাইসিস ঘটে।'
        ),
      },
      {
        question: l(
          'How do hypothalamic osmoreceptors differ from arterial baroreceptors in their sensitivity and response thresholds for vasopressin (AVP) release?',
          'হাইপোথ্যালামাসের অসমোরিসেপ্টর এবং রক্তনালীর ব্যারোরিসেপ্টরের সংবেদনশীলতা ও ভ্যাসোপ্রেসিন নিঃসরণের সীমার মধ্যে কী পার্থক্য রয়েছে?'
        ),
        answer: l(
          'Hypothalamic osmoreceptors are exquisitely sensitive, responding to as little as a 1% change in plasma osmolality with a linear secretion of AVP. In contrast, arterial baroreceptors (carotid sinus and aortic arch) require a significant 8% to 10% reduction in blood volume or blood pressure to activate, but once triggered, they elicit an exponential surge in AVP that overrides osmoregulation to preserve perfusion pressure.',
          'হাইপোথ্যালামাসের অসমোরিসেপ্টর অত্যন্ত সংবেদনশীল; রক্তের ঘনত্বের মাত্র ১% পরিবর্তন হলেই এটি সরলরেখায় ভ্যাসোপ্রেসিন বাড়ায়। পক্ষান্তরে ব্যারোরিসেপ্টর রক্তচাপ বা আয়তন ৮-১০% না কমা পর্যন্ত সক্রিয় হয় না; কিন্তু একবার সক্রিয় হলে এটি রক্তের ঘনত্বের সংকেতকে ছাপিয়ে বহুগুণ বেশি ভ্যাসোপ্রেসিন নিঃসরণ করিয়ে রক্তচাপ রক্ষা করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'fluid-electrolyte-osmoregulation',
    title: l('Body Fluid Compartments & Osmoregulatory Axes', 'দেহের তরল প্রকোষ্ঠ ও অসমোরেগুলেশন সংকেত অক্ষ'),
    description: l(
      'Explore fluid distribution across Intracellular vs Extracellular compartments, trace the hypothalamic AVP-Aquaporin-2 axis, and examine stoichiometric SGLT1 ORS cotransport.',
      'আন্তঃকোষীয় ও বহিঃকোষীয় প্রকোষ্ঠের তরল বিন্যাস পরীক্ষা করুন, হাইপোথ্যালামাসের ভ্যাসোপ্রেসিন-অ্যাকোয়াপোরিন-২ অক্ষ অনুসরণ করুন এবং অন্ত্রে ওআরএসের SGLT1 শোষণ প্রক্রিয়া পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Biophysical fluid compartment simulation for clinical education; electrolyte correction requires venous blood gas and serum electrolyte monitoring.',
      'ক্লিনিক্যাল শিক্ষার জন্য তরল প্রকোষ্ঠের বায়োফিজিক্স সিমুলেশন; ইলেক্ট্রোলাইট সংশোধনে নিয়মিত রক্ত পরীক্ষা আবশ্যক।'
    ),
    svgType: 'hydration-loop',
    items: [
      {
        id: 'node-icf',
        label: l('Intracellular Fluid (ICF: ~2/3 TBW, ~28 L, K+ Dominant)', 'আন্তঃকোষীয় তরল (ICF: মোট পানির ২/৩ অংশ, ২৮ লিটার, পটাশিয়াম প্রধান)'),
        description: l(
          'Largest fluid compartment; high potassium (~140 mEq/L) and organic phosphate, bounded by cell membranes with active Na+/K+-ATPase pumps [4].',
          'দেহের সর্ববৃহৎ তরল প্রকোষ্ঠ; উচ্চ পটাশিয়াম সমৃদ্ধ যা Na+/K+-ATPase পাম্প দ্বারা কোষের স্বাভাবিক আয়তন ও বিশ্রামকালীন ভোল্টেজ রক্ষা করে [৪]।'
        ),
        details: l(
          'ICF volume is purely determined by the effective osmolality of the surrounding ECF. If ECF osmolality rises (hypernatremia), water rapidly flows out of the ICF across aquaporins, shrinking the cells [1, 4].',
          'কোষের ভেতরের পানির আয়তন পুরোপুরি নির্ভর করে বাইরের তরলের ঘনত্বের ওপর। বাইরের রক্তে লবণ বাড়লে কোষ থেকে পানি বের হয়ে কোষ শুকিয়ে যায় [১, ৪]।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-ecf',
        label: l('Extracellular Fluid (ECF: ~1/3 TBW, ~14 L, Na+ Dominant)', 'বহিঃকোষীয় তরল (ECF: মোট পানির ১/৩ অংশ, ১৪ লিটার, সোডিয়াম প্রধান)'),
        description: l(
          'Divided into Interstitial Fluid (~10.5 L) and Intravascular Plasma (~3.5 L); high sodium (~140 mEq/L) and chloride (~100 mEq/L) [4].',
          'কোষের বাইরের তরল যা ইন্টারস্টিশিয়াল স্পেস (১০.৫ লিটার) এবং রক্তের প্লাজমায় (৩.৫ লিটার) বিভক্ত; এতে সোডিয়াম ও ক্লোরাইডের প্রাধান্য থাকে [৪]।'
        ),
        details: l(
          'Sodium is the primary effective extracellular osmolyte because cell membranes are relatively impermeable to Na+ via continuous Na+/K+-ATPase extrusion, establishing effective osmotic pressure [4].',
          'সোডিয়াম হলো বহিঃকোষীয় তরলের প্রধান চালিকাশক্তি যা রক্তচাপ ও সঞ্চালন স্বাভাবিক রাখার জন্য প্রধান স্তম্ভ হিসেবে কাজ করে [৪]।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-osmoreceptors',
        label: l('Hypothalamic Osmoreceptors (OVLT / SFO) & Vasopressin', 'হাইপোথ্যালামাসের অসমোরিসেপ্টর ও ভ্যাসোপ্রেসিন হরমোন'),
        description: l(
          'Sensory neurons lack a blood-brain barrier, sensing 1–2% shifts in plasma osmolality to trigger thirst and posterior pituitary Arginine Vasopressin (AVP) release [2].',
          'রক্তের ঘনত্বের সামান্য ১–২% পরিবর্তন শনাক্ত করে পিপাসা জাগায় এবং পিটুইটারি থেকে ভ্যাসোপ্রেসিন (AVP) নিঃসরণ করিয়ে প্রস্রাব আটকায় [২]।'
        ),
        details: l(
          'Cell shrinkage via stretch-inactivated cation channels (TRPV4) depolarizes OVLT neurons, projecting to the supraoptic nucleus to synthesize AVP, which circulates to the kidneys [2].',
          'রক্ত ঘন হলে এই রিসেপ্টর সংকুচিত হয়ে মস্তিষ্কে সংকেত পাঠায়, ফলে মুখে পিপাসা লাগে এবং কিডনিতে পানি ধরে রাখার নির্দেশ যায় [২]।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-aqp2',
        label: l('Renal Collecting Duct Principal Cells: V2R & Aquaporin-2', 'কিডনির সংগ্রাহী নালিকা: V2 রিসেপ্টর ও অ্যাকোয়াপোরিন-২'),
        description: l(
          'AVP binds basolateral V2 receptors, raising cAMP/PKA to shuttle AQP2 tetramers to the apical membrane, reabsorbing water into the hypertonic medulla [2].',
          'ভ্যাসোপ্রেসিন কিডনির কোষে যুক্ত হয়ে অ্যাকোয়াপোরিন-২ চ্যানেলগুলোকে কোষের মুখে নিয়ে আসে, যা মূত্র থেকে পানি শুষে রক্তে ফিরিয়ে আনে [২]।'
        ),
        details: l(
          'In the absence of AVP (e.g., Central Diabetes Insipidus or water diuresis), AQP2 is endocytosed, making collecting ducts impermeable to water, producing up to 15–20 L/day of dilute urine [2].',
          'ভ্যাসোপ্রেসিন না থাকলে এই চ্যানেলগুলো ভেতরে ঢুকে যায় এবং কিডনি পানি শোষণ করতে পারে না, ফলে দিনে ১৫–২০ লিটার পাতলা প্রস্রাব অপচয় হয় [২]।'
        ),
        color: '#06b6d4',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-sglt1',
        label: l('Intestinal SGLT1 Cotransport & Stoichiometric ORS', 'অন্ত্রীয় SGLT1 কো-ট্রান্সপোর্ট ও ওআরএসের কার্যপদ্ধতি'),
        description: l(
          'Brush-border SGLT1 imports 1 glucose with 2 Na+ ions into enterocytes, generating a localized osmotic gradient that drags water even during cholera diarrhea [3].',
          'অন্ত্রের SGLT1 চ্যানেল ১টি গ্লুকোজের সাথে ২টি সোডিয়াম কোষে প্রবেশ করায়, যা তীব্র ডায়রিয়ার মধ্যেও বিপুল পরিমাণ পানি টেনে নিয়ে জীবন বাঁচায় [৩]।'
        ),
        details: l(
          'Reduced-osmolarity ORS (245 mOsm/L) provides 75 mmol/L Na+ and 75 mmol/L glucose. This equimolar stoichiometry maximizes SGLT1 velocity without creating hypertonic luminal fluid retention [3].',
          'বিশ্ব স্বাস্থ্য সংস্থার ওআরএসে ৭৫ মিলিমোল সোডিয়াম ও ৭৫ মিলিমোল গ্লুকোজের আদর্শ অনুপাত থাকে যা অন্ত্রে পানি নিঃসরণ কমিয়ে দ্রুততম সময়ে শোষণ নিশ্চিত করে [৩]।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('Water: The Fundamental Solvent of Human Life', 'পানি: মানব জীবনের মৌলিক দ্রাবক'),
          paragraphs: [
            l(
              'Water is the single most abundant chemical constituent of the human body, representing approximately sixty percent of total body weight in healthy adult males and fifty to fifty-five percent in adult females [4]. For a reference 70-kilogram human, this equates to roughly 42 liters of Total Body Water, acting as the biological solvent for all metabolic enzymes, the transport medium for circulatory nutrients, and the thermal buffer regulating internal core body temperature [1, 4]. Without this fluid matrix, biochemical substrates could never diffuse across cellular compartments to sustain cellular respiration.',
              'পানি হলো মানবদেহের সবচেয়ে প্রধান রাসায়নিক উপাদান, যা একজন সুস্থ প্রাপ্তবয়স্ক পুরুষের মোট ওজনের প্রায় ৬০ শতাংশ এবং নারীর ক্ষেত্রে ৫০ থেকে ৫৫ শতাংশ [৪]। ৭০ কেজি ওজনের একজন ব্যক্তির ক্ষেত্রে এর পরিমাণ প্রায় ৪২ লিটার, যা সমস্ত বিপাকীয় বিক্রিয়ার দ্রাবক, রক্ত সঞ্চালনে পুষ্টি পরিবহনের মাধ্যম এবং দেহের তাপমাত্রা নিয়ন্ত্রণকারী অপরিহার্য জলীয় ঢাল [১, ৪]। এই জলীয় মাধ্যম ছাড়া কোনো রাসায়নিক উপাদান কোষের ভেতরে চলাচল করতে পারত না এবং কোষের জীবন রক্ষা অসম্ভব হতো।'
            ),
            l(
              'To picture how water is arranged in your body, imagine thousands of tiny water balloons floating in a swimming pool. The water inside the balloons represents the Intracellular Fluid, which holds two-thirds of your entire body water (~28 liters). The water in the pool surrounding the balloons represents the Extracellular Fluid, which holds the remaining one-third (~14 liters) [1, 4]. If the swimming pool water becomes too salty, water is sucked out of the balloons and they shrivel; if the pool water becomes too dilute, water rushes into the balloons until they swell dangerously [1, 4].',
              'শরীরে পানি কীভাবে থাকে তা বোঝার জন্য একটি সুইমিং পুলে ভাসমান হাজার হাজার ছোট পানির বেলুনের কথা ভাবুন। বেলুনের ভেতরের পানি হলো আন্তঃকোষীয় তরল, যা দেহের মোট পানির দুই-তৃতীয়াংশ (প্রায় ২৮ লিটার)। আর বেলুনের চারপাশের পুলের পানি হলো বহিঃকোষীয় তরল, যা বাকি এক-তৃতীয়াংশ (প্রায় ১৪ লিটার) ধারণ করে [১, ৪]। পুলের পানি যদি খুব নোনতা হয়ে যায়, বেলুন থেকে পানি বের হয়ে বেলুনগুলো কুঁচকে যায়; আর পুলের পানি খুব পাতলা হলে অতিরিক্ত পানি ভেতরে ঢুকে বেলুনগুলো বিপজ্জনকভাবে ফুলে ওঠে [১, ৪]।'
            ),
            l(
              'Under normal daily living, the body maintains water balance through a strict equation: total water input must equal total water output [4]. Water input comes from dietary liquids (~1.5–2.0 L/day), moisture within solid foods (~0.7–1.0 L/day), and metabolic water generated as a byproduct of mitochondrial ATP synthesis (~0.3 L/day). Water output occurs through obligatory renal urine excretion (~1.5 L/day), fecal losses (~0.1–0.2 L/day), and insensible losses through sweat and exhaled breath (~0.8–1.0 L/day) [1, 4].',
              'স্বাভাবিক দৈনন্দিন জীবনে মানবদেহ একটি সুনির্দিষ্ট সমীকরণ মেনে পানির ভারসাম্য রক্ষা করে: গৃহীত মোট পানির পরিমাণ অবশ্যই শরীর থেকে নির্গত পানির পরিমাণের সমান হতে হবে [৪]। দৈনিক পানি গ্রহণ হয় পানীয় (দেড় থেকে দুই লিটার), শক্ত খাবারের আর্দ্রতা (প্রায় এক লিটার) এবং মাইটোকন্ড্রিয়ায় শক্তি উৎপাদনের সময় তৈরি বিপাকীয় পানি (প্রায় ৩০০ মিলি) থেকে। অন্যদিকে পানি অপচয় হয় প্রস্রাব (দেড় লিটার), মল (১০০-২০০ মিলি) এবং ঘাম ও শ্বাস-প্রশ্বাসের অদৃশ্য বাষ্পায়নের মাধ্যমে (প্রায় এক লিটার) [১, ৪]।'
            ),
            l(
              'Maintaining the delicate balance between these fluid reservoirs is the primary goal of hydration physiology. Every cell in your brain, muscles, and organs requires this fluid balance to remain within extraordinarily narrow limits to perform metabolic work, maintain electrical excitability, and preserve life [1, 4]. Even a subtle disruption in fluid intake or excessive sweating rapidly strains the cardiovascular system and challenges cellular survival.',
              'এই দুই জলীয় প্রকোষ্ঠের মধ্যে সূক্ষ্ম ভারসাম্য রক্ষা করাই হলো আর্দ্রতা শারীরবৃত্তের মূল লক্ষ্য। আপনার মস্তিষ্ক, পেশি এবং প্রতিটি অঙ্গের কোষের স্বাভাবিক কাজকর্ম ও বেঁচে থাকার জন্য এই জলীয় পরিবেশের স্থায়িত্ব বজায় থাকা অপরিহার্য [১, ৪]। সামান্যতম পানিশূন্যতা বা অতিরিক্ত ঘাম নিঃসরণ তাৎক্ষণিকভাবে রক্তনালীর চাপ কমিয়ে হৃদপিণ্ড এবং কোষের কার্যক্ষমতাকে গভীর সংকটের মুখে ফেলে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Electrolyte Distribution & The Sodium-Potassium Balance', 'ইলেক্ট্রোলাইটের বিন্যাস ও সোডিয়াম-পটাশিয়াম ভারসাম্য'),
          paragraphs: [
            l(
              'Electrolytes are minerals that dissociate into electrically charged ions when dissolved in biological fluids [4]. Positively charged ions are called cations, while negatively charged ions are called anions. The chemical composition of intracellular and extracellular fluid is fundamentally different: sodium (Na+) is the predominant cation in the extracellular fluid and blood plasma, whereas potassium (K+) is the predominant cation sequestered inside cells [4].',
              'ইলেক্ট্রোলাইট হলো খনিজ উপাদান যা পানিতে দ্রবীভূত হয়ে ধনাত্মক (ক্যাটায়ন) বা ঋণাত্মক (অ্যানায়ন) চার্জযুক্ত আয়নে পরিণত হয় [৪]। কোষের ভেতরের এবং বাইরের তরলের রাসায়নিক গঠন সম্পূর্ণ ভিন্ন: কোষের বাইরের রক্ত ও তরলে প্রধান ধনাত্মক আয়ন হলো সোডিয়াম (Na+), অন্যদিকে কোষের ভেতরে আবদ্ধ থাকা প্রধান আয়ন হলো পটাশিয়াম (K+) [৪]।'
            ),
            l(
              'This essential concentration gradient is continuously maintained by millions of microscopic molecular engines embedded in cell membranes called Sodium-Potassium ATPase pumps (Na+/K+-ATPase) [4]. Think of these pumps as motorized sump pumps in the basement of a ship, constantly pumping water out to keep the ship afloat. By continuously pumping three sodium ions out of the cell for every two potassium ions pumped in, these molecular pumps maintain cellular volume and generate the negative resting electrical voltage required for nerve impulses and muscle contractions [1, 4].',
              'কোষের পর্দায় থাকা লক্ষ লক্ষ সোডিয়াম-পটাশিয়াম পাম্প (Na+/K+-ATPase) নিরবচ্ছিন্নভাবে এই ভারসাম্য রক্ষা করে [৪]। এগুলোকে একটি জাহাজের ইঞ্জিনের মতো ভাবা যায় যা জাহাজকে ভাসিয়ে রাখতে অনবরত ভেতরে জমা পানি বাইরে সেঁচে ফেলে। প্রতিবার তিনটি সোডিয়ামকে কোষ থেকে বাইরে বের করে এবং দুটি পটাশিয়ামকে ভেতরে টেনে নিয়ে এই পাম্পগুলো কোষের স্বাভাবিক আয়তন রক্ষা করে এবং স্নায়ু সংকেত ও পেশি সংকোচনের জন্য প্রয়োজনীয় বিদ্যুৎ তৈরি করে [১, ৪]।'
            ),
            l(
              'Because cell membranes are semi-permeable, water moves freely across them via specialized channels called aquaporins, traveling from areas of low solute concentration toward areas of high solute concentration [2, 4]. Because sodium is actively pumped out of cells and kept at high concentrations in the bloodstream, it exerts an "osmotic pull" that prevents water from rushing uncontrollably into cells. In essence, sodium serves as the master anchor holding water in your blood vessels to maintain blood pressure [4].',
              'কোষপর্দা আধা-ভেদ্য হওয়ায় অ্যাকোয়াপোরিন নামক বিশেষ জলীয় ছিদ্র দিয়ে পানি সহজেই চলাচল করে; পানি সর্বদা কম ঘনত্বের দ্রবণ থেকে বেশি ঘনত্বের দিকে প্রবাহিত হয় [২, ৪]। সোডিয়াম যেহেতু কোষ থেকে বাইরে বের করে রক্তে বেশি ঘনত্বে রাখা হয়, তাই এটি একটি "অসমোটিক টান" তৈরি করে যা পানিকে কোষের ভেতর ঢুকে কোষ ফাটানো থেকে রক্ষা করে। প্রকৃতপক্ষে, সোডিয়াম রক্তনালীর ভেতরে পানি ধরে রেখে স্বাভাবিক রক্তচাপ বজায় রাখার মূল স্তম্ভ হিসেবে কাজ করে [৪]।'
            ),
            l(
              'If these cellular pumps fail—such as during severe oxygen deprivation, ischemic stroke, or ATP depletion—sodium rushes uncontrollably into the cell, followed immediately by water down the osmotic gradient. The cell rapidly swells, ruptures its plasma membrane, and undergoes necrotic cell death [1, 4]. This underscores why electrolyte balance is not merely about thirst, but about maintaining the structural integrity of every cell in the human body.',
              'অক্সিজেনের তীব্র অভাব, স্ট্রোক বা শক্তির ঘাটতিতে এই পাম্পগুলো বিকল হয়ে গেলে সোডিয়াম হুড়মুড় করে কোষের ভেতর ঢুকে পড়ে এবং অসমোটিক টানে বিপুল পানি প্রবেশ করায়। ফলে কোষ দ্রুত ফুলে ওঠে, পর্দা ফেটে যায় এবং কোষের অপমৃত্যু ঘটে [১, ৪]। এটি স্পষ্ট করে যে ইলেক্ট্রোলাইট ভারসাম্য কেবল পিপাসার বিষয় নয়, বরং মানবদেহের প্রতিটি কোষের বেঁচে থাকার মৌলিক পূর্বশর্ত।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How The Brain & Kidneys Regulate Fluid: Thirst & Vasopressin', 'মস্তিষ্ক ও কিডনি কীভাবে পানি নিয়ন্ত্রণ করে: পিপাসা ও ভ্যাসোপ্রেসিন'),
          paragraphs: [
            l(
              'When the body loses water through sweat, breathing, or urination without adequate fluid intake, the concentration of electrolytes in the bloodstream rises [1, 2]. Specialized osmosensory cells in circumventricular organs of the brain—specifically the Organum Vasculosum of the Lamina Terminalis (OVLT) and the Subfornical Organ (SFO)—detect this minute increase in blood saltiness and immediately trigger the conscious sensation of thirst, driving us to seek and drink water [1, 2].',
              'ঘাম, শ্বাস-প্রশ্বাস বা প্রস্রাবের মাধ্যমে শরীর থেকে পানি অপচয় হলে এবং পর্যাপ্ত পানি পান না করলে রক্তের লবণের ঘনত্ব বেড়ে যায় [১, ২]। মস্তিষ্কের বিশেষ সংবেদনশীল অঞ্চল—বিশেষ করে OVLT এবং SFO—রক্তের ঘনত্বের এই সামান্যতম পরিবর্তন শনাক্ত করা মাত্রই তীব্র পিপাসা জাগিয়ে তোলে যাতে আমরা পানি খুঁজে পান করি [১, ২]।'
            ),
            l(
              'Simultaneously, the posterior pituitary gland releases Antidiuretic Hormone (also known as Arginine Vasopressin, or AVP) directly into the bloodstream [2]. Vasopressin acts like an emergency brake on fluid loss. It travels through the circulation directly to the kidneys, where it binds to receptors on collecting duct cells, instructing them to shuttle microscopic water channels called Aquaporin-2 from internal vesicles into the cell surface facing forming urine [1, 2].',
              'একই সময়ে মস্তিষ্কের পিটুইটারি গ্রন্থি রক্তে ভ্যাসোপ্রেসিন বা অ্যান্টি-ডাইউরেটিক হরমোন (ADH) সরাসরি নিঃসরণ করে [২]। ভ্যাসোপ্রেসিন তরলের অপচয়ে জরুরি ব্রেকের মতো কাজ করে। এটি রক্ত সঞ্চালনের মাধ্যমে কিডনিতে পৌঁছায় এবং সংগ্রাহী নালিকার কোষে নির্দেশ পাঠিয়ে অ্যাকোয়াপোরিন-২ নামক বিশেষ পানির চ্যানেলগুলোকে কোষের উপরিভাগে স্থাপন করায় [১, ২]।'
            ),
            l(
              'These aquaporin channels act as molecular floodgates, pulling pure water out of the urine and returning it back into the bloodstream [2]. Consequently, the kidneys produce a minimal volume of dark, highly concentrated urine to preserve bodily fluid reserves. Without this remarkable mechanism, a human being would lose over 15 to 20 liters of dilute urine every single day, precipitating fatal dehydration within hours [1, 2].',
              'এই অ্যাকোয়াপোরিন চ্যানেলগুলো জলকপাটের মতো কাজ করে মূত্র থেকে খাঁটি পানি টেনে পুনরায় রক্তে ফিরিয়ে আনে [২]। ফলে কিডনি অতি সামান্য পরিমাণ গাঢ় হলুদ প্রস্রাব তৈরি করে মূল্যবান পানি সংরক্ষণ করে। এই চমৎকার প্রক্রিয়া না থাকলে একজন মানুষের শরীর থেকে দিনে ১৫ থেকে ২০ লিটার পাতলা প্রস্রাব অপচয় হতো এবং কয়েক ঘণ্টার মধ্যে মারাত্মক পানিশূন্যতায় মৃত্যু ঘটত [১, ২]।'
            ),
            l(
              'Once you drink a glass of water, it is absorbed across your stomach and small intestine into the bloodstream within 10 to 15 minutes [4]. As the absorbed water dilutes the blood back to its ideal salt concentration, the hypothalamic osmosensors relax, turning off both the sensation of thirst and the secretion of vasopressin. The kidneys then retrieve the aquaporin channels from their cell surfaces, allowing normal, dilute urine production to resume [1, 2].',
              'আপনি যখন এক গ্লাস পানি পান করেন, তা ১০ থেকে ১৫ মিনিটের মধ্যে পাকস্থলী ও অন্ত্র থেকে শোষিত হয়ে রক্তে পৌঁছে যায় [৪]। রক্ত তরল হয়ে লবণের ঘনত্ব স্বাভাবিক মাত্রায় নেমে এলে মস্তিষ্কের পিপাসা কেন্দ্র শান্ত হয় এবং ভ্যাসোপ্রেসিন নিঃসরণ বন্ধ হয়। কিডনি তখন অ্যাকোয়াপোরিন চ্যানেলগুলোকে পুনরায় কোষের ভেতরে টেনে নিয়ে স্বাভাবিক প্রস্রাব তৈরি শুরু করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Understanding Dehydration & The Danger of Hyponatremia', 'পানিশূন্যতার ধরন ও হাইপোনাট্রিমিয়ার বিপদ'),
          paragraphs: [
            l(
              'Dehydration occurs when fluid losses outpace fluid intake, impairing cardiac output, muscle endurance, cognitive concentration, and physical thermoregulation [1]. In hot weather or strenuous exercise, a loss of just two percent of total body weight in fluid produces measurable declines in mental sharpness, reaction time, and aerobic endurance [1, 4, 6]. At four percent fluid loss, severe fatigue, dizziness, and muscle cramps emerge, while losses exceeding seven to ten percent cause circulatory collapse, heat stroke, and multiorgan failure [1, 6].',
              'পানিশূন্যতা তৈরি হয় যখন শরীর থেকে পানি বের হওয়ার হার পানি গ্রহণের চেয়ে বেশি হয়; এর ফলে হৃদপিণ্ডের কার্যক্ষমতা কমে, পেশি দুর্বল হয় এবং মস্তিষ্কের মনোযোগ নষ্ট হয় [১]। তীব্র গরমে বা পরিশ্রমে শরীরের ওজনের মাত্র দুই শতাংশ পানি কমলেই মানসিক সতর্কতা, প্রতিক্রিয়ার সময় এবং সহনশীলতায় লক্ষণীয় অবনতি ঘটে [১, ৪, ৬]। চার শতাংশ পানি কমলে তীব্র ক্লান্তি, মাথা ঘোরা এবং পেশির খিঁচুনি দেখা দেয়; আর সাত থেকে দশ শতাংশ পানি কমলে রক্ত সঞ্চালন বিকল হয়ে হিট স্ট্রোক ও মৃত্যুর ঝুঁকি তৈরি হয় [১, ৬]।'
            ),
            l(
              'However, excessive fluid consumption poses an equally lethal threat known as Exercise-Associated Hyponatremia (EAH) [1, 6]. During prolonged endurance events such as marathons, triathlons, or military marches, athletes who drink massive amounts of plain water or low-sodium beverages outpace their sweat losses. Diluting extracellular sodium below 135 mEq/L lowers the osmotic pressure of the blood relative to the cells [1, 2, 6].',
              'বিপরীতভাবে, অতিরিক্ত পানি পান করার ফলেও মারাত্মক প্রাণঘাতী বিপর্যয় ঘটতে পারে যাকে "ব্যায়ামজনিত হাইপোনাট্রিমিয়া" (EAH) বলা হয় [১, ৬]। ম্যারাথন বা দীর্ঘস্থায়ী শারীরিক পরিশ্রমে ক্রীড়াবিদরা যদি অতিরিক্ত সাধারণ পানি বা লবণহীন পানীয় পান করেন, তবে রক্ত অতিরিক্ত পাতলা হয়ে সোডিয়াম ১৩৫ mEq/L এর নিচে নেমে যায়; ফলে রক্তের অসমোটিক চাপ মারাত্মকভাবে হ্রাস পায় [১, ২, ৬]।'
            ),
            l(
              'Because the rigid cranial vault cannot expand, water moves by osmosis into brain cells, causing acute cerebral edema (brain swelling) [2, 5]. Initial symptoms—such as throbbing headache, nausea, puffiness of the hands, and confusion—are frequently misdiagnosed as dehydration, prompting well-intentioned bystanders to give the athlete even more water. This tragic mistake accelerates brain herniation, coma, seizures, and death [1, 5, 6].',
              'মস্তিষ্কের শক্ত খুলি প্রসারিত হতে পারে না বলে রক্ত থেকে পানি সোজা ব্রেন কোষে ঢুকে ব্রেন ফুলিয়ে দেয় [২, ৫]। প্রাথমিক লক্ষণ হিসেবে তীব্র মাথাব্যথা, বমি ভাব, হাত ফোলা ও বিভ্রান্তি দেখা দেয়; অনেক সময় ভুলবশত একে সাধারণ পানিশূন্যতা ভেবে রোগীকে আরও পানি পান করানো হয়। এই মারাত্মক ভুলের ফলে মস্তিষ্কের ওপর চাপ বেড়ে কোমা, খিঁচুনি এবং মৃত্যু ডেকে আনে [১, ৫, ৬]।'
            ),
            l(
              'Recognizing that proper hydration is not about drowning oneself in plain water, but about maintaining equilibrium between water and sodium, is the paramount rule of clinical hydration science [1, 6]. Fluid intake during prolonged exertion should be guided by thirst or individualized sweat rate calculations rather than arbitrary, excessive schedules [6].',
              'সঠিক হাইড্রেশন মানে কেবল অতিরিক্ত পানি পান করা নয়, বরং পানি ও সোডিয়াম লবণের সূক্ষ্ম সমতা রক্ষা করা—এটিই আর্দ্রতা বিজ্ঞানের প্রধান শিক্ষা [১, ৬]। দীর্ঘস্থায়ী ব্যায়ামের সময় কোনো অন্ধ নিয়মে পানি না খেয়ে বরং প্রাকৃতিক পিপাসা এবং নিজের ঘামের হারের হিসাব অনুযায়ী সঠিক পানীয় গ্রহণ করা উচিত [৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Daily Hydration & The Miracle of ORS', 'দৈনন্দিন সঠিক পানীয় গ্রহণ ও ওআরএসের জীবনরক্ষাকারী ভূমিকা'),
          paragraphs: [
            l(
              'Daily water requirements vary dramatically based on climate, ambient humidity, physical exertion, metabolic rate, and body size [4]. For average sedentary adults in temperate conditions, fluid intake typically averages 2.5 to 3.5 liters daily from all sources combined, including drinking water, tea, soups, and water-dense fruits and vegetables [1, 4]. The popular dogma that everyone must drink "eight 8-ounce glasses of water daily" lacks empirical scientific foundation; individual fluid requirements are dynamic and fluctuate daily [1].',
              'দৈনিক তরলের চাহিদা জলবায়ু, আর্দ্রতা, শারীরিক পরিশ্রম এবং ওজনের ওপর ভিত্তি করে ব্যাপকভাবে পরিবর্তিত হয় [৪]। সাধারণ সুস্থ প্রাপ্তবয়স্কদের ক্ষেত্রে খাদ্য ও পানীয় মিলিয়ে দৈনিক মোট তরলের চাহিদা প্রায় ২.৫ থেকে ৩.৫ লিটার [১, ৪]। প্রচলিত যে ধারণা আছে যে সবাইকে প্রতিদিন নির্দিষ্ট "৮ গ্লাস পানি" পান করতে হবে, তার কোনো আধুনিক বৈজ্ঞানিক ভিত্তি নেই; কারণ তরলের চাহিদা ব্যক্তির পরিশ্রম ও আবহাওয়ার ওপর নির্ভর করে প্রতিনিয়ত বদলায় [১]।'
            ),
            l(
              'The simplest practical diagnostic tool to evaluate day-to-day hydration is the Armstrong Urine Color Chart [1]. Pale straw-colored to light yellow urine reflects optimal euhydration, whereas dark amber or brownish urine signals marked dehydration demanding immediate fluid consumption. However, dietary supplements (such as riboflavin / Vitamin B2) can turn urine bright neon yellow, requiring clinical awareness during visual inspection [1, 4].',
              'দৈনন্দিন পানিশূন্যতা যাচাই করার সবচেয়ে সহজ ও কার্যকর পদ্ধতি হলো আর্মস্ট্রং ইউরিন কালার চার্ট [১]। হালকা খড়ের রঙ বা স্বচ্ছ হালকা হলুদ প্রস্রাব পর্যাপ্ত আর্দ্রতার লক্ষণ, অন্যদিকে গাঢ় হলুদ বা খয়েরি প্রস্রাব তীব্র পানিশূন্যতা নির্দেশ করে। তবে মনে রাখতে হবে ভিটামিন বি২ (রিবোফ্লাভিন) খেলে সাময়িকভাবে প্রস্রাব তীব্র উজ্জ্বল হলুদ হতে পারে, যা পানিশূন্যতার লক্ষণ নয় [১, ৪]।'
            ),
            l(
              'During severe diarrheal illnesses, gastroenteritis, or cholera, massive active secretion of fluid into the intestinal lumen makes plain water ineffective, causing rapid circulatory collapse [3]. The World Health Organization Oral Rehydration Salts (ORS) solution represents one of the most transformative medical breakthroughs in human history [3]. By providing sodium and glucose in an exact equimolar ratio (75 mmol/L each), the solution activates intestinal Sodium-Glucose Cotransporters (SGLT1), dragging water across the intestinal wall despite massive active diarrhea [3].',
              'তীব্র ডায়রিয়া, কলেরা বা পেটের পীড়ার সময় অন্ত্র থেকে অনবরত পানি বের হয়ে যাওয়ায় সাধারণ পানি খেলে তা শোষিত হতে পারে না এবং রোগী দ্রুত পানিশূন্যতায় নিস্তেজ হয়ে পড়ে [৩]। বিশ্ব স্বাস্থ্য সংস্থার খাবার স্যালাইন (ORS) চিকিৎসাবিজ্ঞানের ইতিহাসে কোটি কোটি মানুষের জীবন বাঁচানো এক বৈপ্লবিক আবিষ্কার [৩]। এতে সমপরিমাণ সোডিয়াম ও গ্লুকোজ (উভয়ই ৭৫ mmol/L) থাকায় অন্ত্রের SGLT1 চ্যানেল সক্রিয় হয় এবং তীব্র ডায়রিয়ার মধ্যেও পানি রক্তে শোষিত হয়ে প্রাণ রক্ষা করে [৩]।'
            ),
            l(
              'For endurance athletes training in the heat for over 60 minutes, plain water is insufficient [6]. Replacing sweat losses with an isotonic or hypotonic beverage providing 20 to 30 mEq/L of sodium and 4% to 8% carbohydrate accelerates gastric emptying, stimulates rapid intestinal water uptake, maintains blood glucose oxidation, and prevents painful muscular cramps [1, 6].',
              'গরমে এক ঘণ্টার বেশি কঠোর অনুশীলনকারী খেলোয়াড়দের ক্ষেত্রে কেবল সাধারণ পানি যথেষ্ট নয় [৬]। ঘামের ক্ষতি পূরণে ২০ থেকে ৩০ mEq/L সোডিয়াম এবং ৪% থেকে ৮% শর্করাযুক্ত স্পোর্টস ড্রিংক পান করলে তা দ্রুত পাকস্থলী থেকে অন্ত্রে পৌঁছায়, রক্তে গ্লুকোজের জোগান দেয় এবং পেশির মারাত্মক ক্র্যাম্প প্রতিরোধ করে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'In summary, cellular hydration relies on a tightly controlled equilibrium between intracellular potassium and extracellular sodium, maintained by the energy-consuming Na+/K+-ATPase pump [4]. Without this active ion transport, cell volume control fails, producing immediate osmotic swelling or shriveling [1, 4].',
              'সংক্ষেপে, কোষীয় আর্দ্রতা মূলত কোষের ভেতরের পটাশিয়াম এবং বাইরের সোডিয়ামের সূক্ষ্ম ভারসাম্যের ওপর প্রতিষ্ঠিত, যা নিরবচ্ছিন্নভাবে Na+/K+-ATPase পাম্প দ্বারা নিয়ন্ত্রিত হয় [৪]। এই আয়ন পরিবহন বন্ধ হলে কোষের আয়তন রক্ষা অসম্ভব হয়ে পড়ে এবং কোষ ফেটে বা শুকিয়ে ধ্বংস হয়ে যায় [১, ৪]।'
            ),
            l(
              'The brain and kidneys form an exquisite feedback loop: hypothalamic osmosensors detect 1% shifts in plasma osmolality to trigger thirst and stimulate the pituitary secretion of vasopressin, which inserts aquaporin-2 water channels into renal tubules to conserve free water [2].',
              'মস্তিষ্ক ও কিডনি এক নিখুঁত নিয়ন্ত্রক অক্ষ তৈরি করে: হাইপোথ্যালামাসের অসমোরিসেপ্টর রক্তের ঘনত্বের মাত্র ১% পরিবর্তন শনাক্ত করে পিপাসা জাগায় এবং ভ্যাসোপ্রেসিন হরমোনের মাধ্যমে কিডনির অ্যাকোয়াপোরিন-২ চ্যানেল দিয়ে খাঁটি পানি পুনঃশোষণ করায় [২]।'
            ),
            l(
              'Both extreme fluid deficits (hypertonic dehydration) and extreme fluid surpluses (exercise-associated hyponatremic encephalopathy) threaten neurological function [1, 5, 6]. True hydration requires balancing water with essential electrolytes rather than excessive plain water consumption [1, 6].',
              'অতিরিক্ত পানিশূন্যতা এবং অতিরিক্ত পানি পানজনিত হাইপোনাট্রিমিয়া—উভয় অবস্থাই মস্তিষ্কের জন্য মারাত্মক হুমকিস্বরূপ [১, ৫, ৬]। প্রকৃত সুস্থতার জন্য শুধু অতিরিক্ত পানি নয়, বরং পানি ও সোডিয়াম লবণের সঠিক ভারসাম্য বজায় রাখা অপরিহার্য [১, ৬]।'
            ),
            l(
              'Urine color monitoring provides an accessible everyday check of hydration status, while stoichiometric Oral Rehydration Therapy remains the gold standard for reversing dehydrating diarrheal disease globally [1, 3, 4].',
              'প্রস্রাবের রঙ পর্যবেক্ষণ দৈনন্দিন পানিশূন্যতা বোঝার সবচেয়ে সহজ উপায়, আর ডায়রিয়াজনিত পানিশূন্যতা দূরীকরণে বিশ্ব স্বাস্থ্য সংস্থার ওআরএস হলো সারা বিশ্বে জীবনরক্ষার সর্বোত্তম মানদণ্ড [১, ৩, ৪]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Biophysical Architecture of Body Fluid Compartments & Starling Forces', 'দেহের তরল প্রকোষ্ঠের বায়োফিজিক্যাল গঠন ও স্টার্লিং বল'),
          paragraphs: [
            l(
              'Total Body Water (TBW) represents 55% to 60% of total adult body mass, distributed across two primary thermodynamic compartments separated by semi-permeable cell membranes [4]. The Intracellular Fluid (ICF) constitutes two-thirds of TBW (~28 L in a reference 70-kg adult), while the Extracellular Fluid (ECF) encompasses one-third (~14 L) [4]. The ECF is further anatomically partitioned into the Interstitial Fluid (~10.5 L, three-quarters of ECF) and Intravascular Blood Plasma (~3.5 L, one-quarter of ECF) across capillary endothelial barriers [4].',
              'দেহের মোট জলীয় অংশ (TBW) প্রাপ্তবয়স্ক মানুষের ওজনের ৫৫% থেকে ৬০%, যা আধা-ভেদ্য কোষপর্দা দ্বারা দুটি প্রধান প্রকোষ্ঠে বিভক্ত [৪]। আন্তঃকোষীয় তরল (ICF) মোট পানির দুই-তৃতীয়াংশ (৭০ কেজি ওজনের ব্যক্তির ক্ষেত্রে প্রায় ২৮ লিটার) এবং বহিঃকোষীয় তরল (ECF) এক-তৃতীয়াংশ (প্রায় ১৪ লিটার) ধারণ করে [৪]। এই বহিঃকোষীয় তরল আবার কৈশিক জালিকার প্রাচীর দ্বারা ইন্টারস্টিশিয়াল ফ্লুইড (১০.৫ লিটার) এবং রক্তের প্লাজমায় (৩.৫ লিটার) বিভক্ত [৪]।'
            ),
            l(
              'Transcapillary fluid exchange between intravascular plasma and interstitial fluid is governed by the classical Starling equation: Net Filtration = Kf x [(Pc - Pi) - σ x (πc - πi)], where Pc and Pi represent capillary and interstitial hydrostatic pressures, and πc and πi denote capillary (colloid oncotic pressure, primarily driven by serum albumin) and interstitial oncotic pressures, with σ representing the vascular protein reflection coefficient and Kf representing the filtration coefficient [4]. Under normal hemodynamics, a minute net outward filtration is returned to the circulation via lymphatic drainage.',
              'রক্তের প্লাজমা এবং ইন্টারস্টিশিয়াল তরলের মধ্যে তরল আদান-প্রদান স্টার্লিং সমীকরণ দ্বারা পরিচালিত হয়: নিট পরিস্রাবণ = Kf x [(Pc - Pi) - σ x (πc - πi)] [৪]। এখানে রক্তনালীর ভেতরের হাইড্রোস্ট্যাটিক চাপ (Pc) তরল বাইরে ঠেলে দেয়, আর সিরাম অ্যালবুমিন দ্বারা তৈরি অনকোটিক চাপ (πc) পানিকে রক্তনালীর ভেতরে ধরে রাখে [৪]। স্বাভাবিক অবস্থায় সামান্য যে অতিরিক্ত তরল পরিস্রাবিত হয়, তা লসিকা নালী পুনরায় রক্তে ফিরিয়ে আনে।'
            ),
            l(
              'The Gibbs-Donnan equilibrium dictates the electrochemical distribution of diffusible ions across cell membranes containing non-diffusible polyanionic macromolecules (predominantly proteins and organic phosphates) [4]. Because intracellular proteins carry fixed negative charges at physiological pH, they attract diffusible cations (primarily potassium) and repel diffusible anions (primarily chloride), establishing an asymmetrical ion distribution that generates an electrical membrane potential of -70 to -90 mV across mammalian plasma membranes [4].',
              'গিবস-ডনানের নিয়ম অনুযায়ী কোষের অভ্যন্তরে থাকা অনড় ঋণাত্মক প্রোটিন ও ফসফেট অণুগুলো ধনাত্মক পটাশিয়াম আয়নকে নিজের দিকে আকর্ষণ করে এবং ঋণাত্মক ক্লোরাইডকে দূরে ঠেলে দেয় [৪]। এর ফলে কোষপর্দার দুই পাশে আয়নের অসম বিন্যাস ঘটে যা প্রতিটি জীবন্ত কোষের পর্দায় -৭০ থেকে -৯০ মিলিভোল্টের এক প্রাকৃতিক বিশ্রামকালীন বৈদ্যুতিক বিভব তৈরি করে [৪]।'
            ),
            l(
              'Without the active, continuous extrusion of sodium by the Na+/K+-ATPase pump, the Gibbs-Donnan osmotic pressure generated by these trapped intracellular polyanions would draw water continuously into the cell, resulting in progressive swelling and cytolysis [4]. Thus, active metabolic work is continuously required simply to maintain cellular volume against Donnan forces.',
              'কোষের Na+/K+-ATPase পাম্প যদি অনবরত সোডিয়াম বাইরে বের করে না দিত, তবে ডনানের এই অসমোটিক টানে কোষের ভেতর অনবরত পানি ঢুকতে থাকত এবং কোষ ফুলে ধ্বংস হয়ে যেত [৪]। অর্থাৎ ডনানের বিধ্বংসী শক্তির বিরুদ্ধে কোষের নিজস্ব স্বাভাবিক আয়তন রক্ষা করার জন্যই কোষকে প্রতিনিয়ত এটিপি খরচ করে সক্রিয় কাজ চালিয়ে যেতে হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Central Osmoreception & The AVP-Aquaporin-2 Signaling Axis', 'কেন্দ্রীয় অসমোরিসেপশন এবং AVP-অ্যাকোয়াপোরিন-২ সংকেত অক্ষ'),
          paragraphs: [
            l(
              'Plasma osmolality is maintained within an extraordinarily narrow physiological window of 285 to 295 mOsm/kg H2O [2]. Central osmoreceptors reside in circumventricular organs lacking a traditional blood-brain barrier, specifically the Organum Vasculosum of the Lamina Terminalis (OVLT) and the Subfornical Organ (SFO) [2]. Even a minimal 1% to 2% increase in effective plasma osmolality causes microscopic osmotic water efflux from osmoreceptive neurons, activating stretch-inactivated non-selective cation channels (TRPV4) to depolarize the cells and trigger neurohypophysial Arginine Vasopressin (AVP) secretion [2].',
              'রক্তের প্লাজমা অসমোলারিটি অত্যন্ত সংবেদনশীলভাবে ২৮৫ থেকে ২৯৫ mOsm/kg এর সংকীর্ণ সীমার মধ্যে নিয়ন্ত্রিত থাকে [২]। রক্ত-মস্তিষ্ক প্রাচীরবিহীন বিশেষ মস্তিষ্কের অংশ (OVLT ও SFO) রক্তের ঘনত্বের মাত্র ১–২% বৃদ্ধি পেলেই অসমোটিক টানে সংকুচিত হয়ে অ্যাকশন পটেনশিয়াল তৈরি করে এবং পিটুইটারি থেকে ভ্যাসোপ্রেসিন (AVP) নিঃসরণ ঘটায় [২]।'
            ),
            l(
              'Circulating AVP engages G-protein-coupled V2 receptors on the basolateral membrane of renal medullary collecting duct principal cells [2]. V2 receptor activation stimulates Gαs, activating adenylyl cyclase to elevate intracellular cyclic AMP (cAMP) and activate Protein Kinase A (PKA) [2]. PKA phosphorylates Serine-256 on the cytoplasmic tail of homotetrameric Aquaporin-2 (AQP2) water channels stored in subapical endosomes, triggering exocytic trafficking and insertion into the apical brush border [2].',
              'রক্তবাহিত AVP কিডনির সংগ্রাহী নালিকার কোষে V2 রিসেপ্টরে যুক্ত হয়ে cAMP ও প্রোটিন কাইনেজ-এ (PKA) সক্রিয় করে [২]। PKA অ্যাকোয়াপোরিন-২ (AQP2) চ্যানেলে Serine-256 এ ফসফেট যুক্ত করে এদের কোষের উপরিভাগে স্থাপন করে; ফলে মেডুলার উচ্চ অসমোটিক টানে প্রস্রাব থেকে পানি দ্রুত শোষিত হয়ে রক্তে ফিরে আসে এবং প্রস্রাবের ঘনত্ব ১২০০ mOsm/kg পর্যন্ত বৃদ্ধি পায় [২]।'
            ),
            l(
              'Water is rapidly drawn down the steep corticomedullary osmotic gradient established by countercurrent multiplication in the loops of Henle and urea recycling, concentrating urine up to 1200 mOsm/kg H2O [2, 4]. Water traverses the apical membrane via phosphorylated AQP2 and exits the basolateral membrane into the hypertonic medullary interstitium through constitutively expressed Aquaporin-3 and Aquaporin-4 channels, entering medullary vasa recta capillaries to restore circulating volume [2].',
              'হেনলির লুপ ও ইউরিয়া চক্রের মাধ্যমে কিডনির মেডুলায় যে অতি-ঘন অসমোটিক পরিবেশ তৈরি থাকে, তা মূত্র থেকে পানি দ্রুত শুষে নেয় [২, ৪]। পানি কোষের উপরিভাগ দিয়ে AQP2 চ্যানেলের মাধ্যমে ঢোকে এবং নিচের দিক দিয়ে সর্বদা সচল থাকা অ্যাকোয়াপোরিন-৩ ও ৪ চ্যানেল দিয়ে বের হয়ে রক্তনালীতে প্রবেশ করে [২]।'
            ),
            l(
              'Upon rehydration, plasma osmolality drops below the osmotic threshold for thirst (~280–285 mOsm/kg), promptly terminating AVP release [2]. In the absence of sustained PKA phosphorylation, apical AQP2 is rapidly ubiquitinated at Lys-270 and endocytosed back into intracellular storage endosomes, rendering the collecting duct water-impermeable and permitting excretion of dilute urine (as low as 50 mOsm/kg) to eliminate the water surplus [2].',
              'পর্যাপ্ত পানি পানের পর রক্তের ঘনত্ব স্বাভাবিক হলে ভ্যাসোপ্রেসিন নিঃসরণ বন্ধ হয়ে যায় [২]। PKA ফসফোরাইলেশন বন্ধ হলে সংগ্রাহী নালিকার অ্যাকোয়াপোরিন-২ চ্যানেলগুলো এন্ডোসাইটোসিসের মাধ্যমে কোষের ভেতরে ঢুকে যায়; ফলে কিডনি পুনরায় পানির জন্য অপ্রবেশ্য হয়ে ওঠে এবং দিনে পাতলা প্রস্রাব (৫০ mOsm/kg) তৈরি করে অতিরিক্ত পানি দেহ থেকে বের করে দেয় [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Volume Regulation: The RAAS Axis & Stoichiometric ORS Biophysics', 'আয়তন নিয়ন্ত্রণ: RAAS অক্ষ ও ওআরএসের স্টইকিওমেট্রিক বায়োফিজিক্স'),
          paragraphs: [
            l(
              'While osmoregulation guards plasma solute concentration, extracellular volume regulation safeguards effective circulating arterial blood volume (ECBV) [2, 4]. When renal perfusion pressure falls or macula densa luminal NaCl delivery decreases, juxtaglomerular granular cells secrete the aspartyl protease renin [4]. Renin cleaves hepatic angiotensinogen into Angiotensin I, which is rapidly cleaved by pulmonary endothelial Angiotensin-Converting Enzyme (ACE) to generate Angiotensin II [4].',
              'অসমোরেগুলেশন রক্তের ঘনত্ব রক্ষা করলেও রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন সিস্টেম (RAAS) রক্তনালীর মোট রক্তচাপ ও সঞ্চালন বজায় রাখে [২, ৪]। বৃক্কে রক্তপ্রবাহ বা লবণের ঘনত্ব কমে গেলে রেনিন এনজাইম নিঃসৃত হয়ে রক্তের অ্যাঞ্জিওটেনসিনোজেনকে অ্যাঞ্জিওটেনসিন-২ এ রূপান্তরিত করে [৪]।'
            ),
            l(
              'Angiotensin II stimulates the adrenal cortex zona glomerulosa to synthesize and release aldosterone, while independently promoting systemic vasoconstriction and proximal tubular Na+/H+ exchange (NHE3) [4]. Aldosterone binds cytoplasmic mineralocorticoid receptors in principal cells, upregulating the transcription and apical membrane density of the Epithelial Sodium Channel (ENaC) and basolateral Na+/K+-ATPase, driving electroneutral sodium and water reabsorption while enhancing potassium excretion via ROMK channels [4].',
              'অ্যাঞ্জিওটেনসিন-২ অ্যাড্রেনাল গ্রন্থি থেকে অ্যালডোস্টেরন হরমোন নিঃসরণ করায় এবং রক্তনালী সংকুচিত করে রক্তচাপ বাড়ায় [৪]। অ্যালডোস্টেরন সংগ্রাহী নালিকায় ENaC সোডিয়াম চ্যানেল এবং Na+/K+-ATPase পাম্পের সংখ্যা বাড়িয়ে দেয়; ফলে রক্তে সোডিয়াম ও পানি পুনঃশোষিত হয়ে রক্তচাপ বাড়ে এবং অতিরিক্ত পটাশিয়াম মূত্রের মাধ্যমে নির্গত হয় [৪]।'
            ),
            l(
              'Conversely, extracellular volume expansion stretches cardiac atrial myocytes, prompting the synthesis and secretion of Atrial Natriuretic Peptide (ANP) [4]. ANP binds transmembrane guanylyl cyclase-A receptors in renal collecting ducts, elevating cGMP to directly close ENaC channels and inhibit renin secretion, stimulating rapid natriuresis and diuresis to relieve cardiovascular volume overload [4].',
              'বিপরীতভাবে অতিরিক্ত রক্তচাপ বা তরল বৃদ্ধিতে হৃদপিণ্ডের অলিন্দ প্রসারিত হয়ে অ্যাট্রিয়াল নাট্রিউরেটিক পেপটাইড (ANP) নিঃসরণ করে [৪]। ANP কিডনির ENaC চ্যানেল বন্ধ করে দিয়ে এবং রেনিন নিঃসরণ আটকে দ্রুত প্রস্রাবের মাধ্যমে সোডিয়াম ও পানি বের করে দিয়ে অতিরিক্ত রক্তচাপ ও চাপ স্বাভাবিক করে [৪]।'
            ),
            l(
              'This dual neurohumoral system explains why the body will sacrifice osmolality to preserve hemodynamic perfusion: if arterial baroreceptors sense an 8% to 10% reduction in blood volume, non-osmotic baroreceptor-mediated AVP release surges exponentially, overriding hypothalamic osmoregulation and retaining water even at the expense of dilutional hyponatremia [2, 4].',
              'এই দ্বৈত ব্যবস্থার কারণেই দেহ রক্ত সঞ্চালন বাঁচাতে রক্তের ঘনত্বকেও বিসর্জন দিতে প্রস্তুত থাকে: রক্তচাপ বা রক্তের আয়তন ৮–১০% কমে গেলে ব্যারোরিসেপ্টর বিপুল পরিমাণ ভ্যাসোপ্রেসিন নিঃসরণ করায়, যা রক্তের ঘনত্ব কমে যাওয়া সত্ত্বেও পানি ধরে রেখে জীবন বাঁচায় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Pathophysiology of Dehydration Classes & The Hyponatremia Hazard', 'পানিশূন্যতার শ্রেণিবিভাগ ও হাইপোনাট্রিমিয়ার জটিলতা'),
          paragraphs: [
            l(
              'Clinical dehydration is categorized into three distinct pathophysiological states based on relative solute versus water loss [1, 2, 5]. Isotonic dehydration entails proportional loss of sodium and water (e.g., uncomplicated secretory diarrhea, acute emesis, or hemorrhage), preserving normal serum sodium (135–145 mEq/L) while contracting ECF volume without inducing transcellular osmotic fluid shifts between ICF and ECF [1, 2, 5].',
              'ক্লিনিক্যাল পানিশূন্যতা তিন প্রকার: আইসোটনিক পানিশূন্যতায় পানি ও লবণ সমানুপাতিক হারে ক্ষয় হয় (যেমন সাধারণ ডায়রিয়া বা রক্তক্ষরণ), ফলে রক্তের সোডিয়াম স্বাভাবিক থাকে এবং কোষের ভেতর থেকে কোনো পানি স্থানান্তরিত হয় না [১, ২, ৫]।'
            ),
            l(
              'Hypertonic dehydration occurs when free water loss exceeds solute loss (e.g., profuse hypotonic sweating, osmotic diuresis in uncontrolled diabetes, or central diabetes insipidus), elevating serum sodium above 145 mEq/L and generating a hyperosmolar ECF that draws water osmotically out of brain astrocytes, producing intracellular dehydration, lethargy, cerebral shrinkage, and traction on dural bridging veins [1, 2, 5].',
              'হাইপারটনিক পানিশূন্যতায় লবণের চেয়ে পানির অপচয় বেশি হওয়ায় রক্ত অতিরিক্ত ঘন হয়ে যায় ([Na+] >১৪৫ mEq/L), ফলে ব্রেনের কোষ থেকে পানি বের হয়ে কোষ শুকিয়ে সংকুচিত হয় এবং মস্তিষ্কের রক্তনালীতে টান পড়ে রক্তক্ষরণ হতে পারে [১, ২, ৫]।'
            ),
            l(
              'Hypotonic dehydration arises when sodium loss exceeds water loss or when hypotonic fluids are excessively ingested during prolonged exertion (Exercise-Associated Hyponatremia, [Na+] <135 mEq/L) [1, 6]. Because ECF osmolality falls below ICF osmolality, water shifts down the osmotic gradient into cerebral astrocytes. The resulting brain edema increases intracranial pressure, progressing to uncal herniation, respiratory arrest, and death [1, 2, 5, 6].',
              'হাইপোটনিক পানিশূন্যতায় রক্তের সোডিয়াম কমে যাওয়ায় ([Na+] <১৩৫ mEq/L) রক্ত থেকে পানি সোজা ব্রেন কোষে ঢুকে যায় [১, ৬]। ব্রেন কোষগুলো ফুলে গিয়ে খুলির ভেতরে চাপ সৃষ্টি করে, যার ফলে মস্তিষ্কের হার্নিয়েশন, শ্বাসকষ্ট এবং আকস্মিক মৃত্যু ঘটতে পারে [১, ২, ৫, ৬]।'
            ),
            l(
              'In clinical practice, hyponatremia is categorized by extracellular volume status: hypovolemic (vomiting, burns, aggressive diuretics), euvolemic (Syndrome of Inappropriate ADH Secretion / SIADH), and hypervolemic (congestive heart failure, decompensated liver cirrhosis), each requiring entirely distinct diagnostic workups and therapeutic protocols [2, 5].',
              'ক্লিনিক্যাল চিকিৎসায় হাইপোনাট্রিমিয়াকে তিন ভাগে বিভক্ত করা হয়: হাইপোভোলেমিক (বমি, পোড়া বা ডায়রিয়া), ইউভোলেমিক (SIADH রোগ), এবং হাইপারভোলেমিক (হার্ট ফেইলিউর বা লিভার সিরোসিস); এদের প্রতিটির চিকিৎসা কৌশল সম্পূর্ণ আলাদা [২, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management of Hypotonic Crises & Stoichiometric ORS', 'হাইপোটনিক সংকটের চিকিৎসা ও ওআরএসের স্টইকিওমেট্রি'),
          paragraphs: [
            l(
              'Managing acute symptomatic hyponatremia with neurological compromise (seizures, coma, confusion) demands immediate emergency administration of 3% hypertonic saline (100 mL IV boluses repeated up to two times) to raise serum sodium by 4 to 6 mEq/L, reversing brain edema and preventing tentorial herniation [2, 5].',
              'তীব্র হাইপোনাট্রিমিয়ায় খিঁচুনি বা কোমা দেখা দিলে ৩% হাইপারটনিক স্যালাইন দিয়ে দ্রুত সোডিয়াম ৪–৬ mEq/L বাড়িয়ে ব্রেন রক্ষা করা জরুরি [২, ৫]। এই তাৎক্ষণিক বৃদ্ধি মস্তিষ্কের মারাত্মক ফোলা কমিয়ে রোগীর জীবন বাঁচায় [২, ৫]।'
            ),
            l(
              'However, in chronic hyponatremia (>48 hours duration), astrocytes have adapted by extruding organic osmolytes (taurine, myo-inositol). Therefore, the overall rate of sodium correction must never exceed 8 mEq/L within any 24-hour window [2, 5]. Overly rapid correction provokes massive osmotic shrinkage of glial cells, disrupting the blood-brain barrier and causing Osmotic Demyelination Syndrome (ODS), leading to irreversible spastic quadriplegia, dysarthria, and locked-in syndrome [2, 5].',
              'কিন্তু দীর্ঘস্থায়ী হাইপোনাট্রিমিয়ায় ব্রেন কোষগুলো ইতিমধ্যে অভিযোজিত হয়ে থাকে; তাই ২৪ ঘণ্টায় সোডিয়াম বৃদ্ধির গতি কোনোভাবেই ৮ mEq/L এর বেশি হওয়া যাবে না [২, ৫]। খুব দ্রুত সোডিয়াম বাড়ালে ব্রেন কোষগুলো হঠাৎ সংকুচিত হয়ে মস্তিষ্কের পনস অঞ্চলের স্নায়ুর আবরণী ধ্বংস হয়ে স্থায়ী প্যারালাইসিস (লকড-ইন সিন্ড্রোম) দেখা দেয় [২, ৫]।'
            ),
            l(
              'In enterotoxigenic diarrhea, the WHO Reduced-Osmolarity Oral Rehydration Solution (total osmolarity 245 mOsm/L) provides 75 mmol/L glucose, 75 mmol/L sodium, 65 mmol/L chloride, 20 mmol/L potassium, and 10 mmol/L citrate [3]. Because the brush-border Sodium-Glucose Cotransporter-1 (SGLT1) couples the inward movement of 2 sodium ions with 1 glucose molecule down its electrochemical gradient, equimolar luminal concentrations drive massive transcellular solute uptake, pulling water along by solvent drag and restoring intravascular volume without intravenous access [3].',
              'ডায়রিয়া চিকিৎসায় বিশ্ব স্বাস্থ্য সংস্থার কম-অসমোলারিটি ওআরএস (২৪৫ mOsm/L) এ ৭৫ মিলিমোল গ্লুকোজ ও ৭৫ মিলিমোল সোডিয়াম থাকে [৩]। অন্ত্রের SGLT1 কো-ট্রান্সপোর্টার দুটি সোডিয়ামের সাথে একটি গ্লুকোজ শোষণ করায় তীব্র অসমোটিক টানে পানি রক্তে প্রবেশ করে এবং কোনো স্যালাইন ইনজেকশন ছাড়াই কোটি কোটি মানুষের পানিশূন্যতা নিরাময় করে [৩]।'
            ),
            l(
              'The historical older WHO ORS formulation (311 mOsm/L) was slightly hyperosmolar relative to normal plasma, occasionally increasing stool volume in infant viral diarrhea. The reduced-osmolarity version (245 mOsm/L) reduced stool output by 20% and unscheduled IV fluid interventions by 33%, cementing its global medical primacy [3].',
              'পূর্বের পুরোনো ওআরএস ফর্মুলেশনটি (৩১১ mOsm/L) কিছুটা ঘন হওয়ায় শিশুদের ক্ষেত্রে কখনো কখনো মলের পরিমাণ বাড়িয়ে দিত। আধুনিক কম-অসমোলারিটি ফর্মুলেশনটি (২৪৫ mOsm/L) মলের পরিমাণ ২০% কমিয়েছে এবং শিরাপথে স্যালাইন দেওয়ার প্রয়োজনীয়তা ৩৩% কমিয়ে এনে বিশ্বজোড়া প্রশংসা অর্জন করেছে [৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Summary & Clinical Pearls', 'একাডেমিক সারাংশ ও ক্লিনিক্যাল মুক্তা'),
          paragraphs: [
            l(
              'Fluid homeostasis requires coordinated cross-talk between intracellular osmolyte gradients, central osmoreceptors (OVLT), neurohypophysial AVP-AQP2 signaling, and renal RAAS volume controls [2, 4]. Intact SGLT1 stoichiometry underpins the life-saving efficacy of Oral Rehydration Salts [3].',
              'তরল ভারসাম্য মূলত কোষীয় অসমোটিক চাপ, হাইপোথ্যালামাসের AVP-AQP2 সংকেত এবং কিডনির RAAS অক্ষের নিখুঁত সমন্বয়ে নিয়ন্ত্রিত হয় [২, ৪]। SGLT1 চ্যানেলের স্টইকিওমেট্রিক অনুপাতই খাবার স্যালাইনের (ORS) বিশ্বজোড়া জীবনরক্ষার ভিত্তি [৩]।'
            ),
            l(
              'In clinical fluid therapy, always differentiate tonicity disorders (regulated by water intake and vasopressin) from volume disorders (regulated by sodium balance and aldosterone) to select the appropriate intravenous or oral replacement strategy [2, 4, 5].',
              'চিকিৎসাক্ষেত্রে সর্বদা মনে রাখতে হবে: টনিসিটি বা ঘনত্বের সমস্যা নিয়ন্ত্রিত হয় পানি ও ভ্যাসোপ্রেসিন দ্বারা, আর রক্তের মোট আয়তনের সমস্যা নিয়ন্ত্রিত হয় সোডিয়াম ও অ্যালডোস্টেরন দ্বারা [২, ৪, ৫]।'
            ),
            l(
              'Cautious, controlled correction of serum sodium is mandatory to avert catastrophic osmotic demyelination in chronic dysnatremias, adhering strictly to the rule of <8 mEq/L correction per 24 hours [2, 5].',
              'দীর্ঘস্থায়ী হাইপোনাট্রিমিয়ায় সোডিয়াম বৃদ্ধির গতি ২৪ ঘণ্টায় ৮ mEq/L এর মধ্যে সীমাবদ্ধ রেখে মস্তিষ্কের মারাত্মক ক্ষতি এড়ানো চিকিৎসার অন্যতম অলঙ্ঘনীয় নীতি [২, ৫]।'
            ),
            l(
              'Athletes and active individuals should monitor individual sweat rates and rely on physiological thirst cues to prevent the twin perils of hypertonic dehydration and exercise-associated hyponatremia [1, 6].',
              'খেলোয়াড়দের ক্ষেত্রে পানিশূন্যতা এবং হাইপোনাট্রিমিয়া—উভয় বিপদ এড়াতে ব্যক্তিগত ঘামের হার ও প্রাকৃতিক পিপাসার সংকেতের ওপর নির্ভর করাই বিজ্ঞানসম্মত পন্থা [১, ৬]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('Nanoscale Channel Biophysics of Aquaporin Selectivity Filters', 'অ্যাকোয়াপোরিন চ্যানেলের ন্যানোস্কেল বায়োফিজিক্স ও সিলেক্টিভিটি ফিল্টার'),
          paragraphs: [
            l(
              'The atomic structure of aquaporin water channels reveals how these biological pores conduct water molecules at rates exceeding 3 billion molecules per second while strictly excluding protons (H3O+) to preserve mitochondrial and plasma membrane electrochemical potentials [2, 4]. Structural crystallography demonstrates two conserved signature NPA (Asparagine-Proline-Alanine) motifs positioned at the center of the pore [2].',
              'অ্যাকোয়াপোরিন চ্যানেলের পারমাণবিক ক্রিস্টালোগ্রাফি প্রমাণ করে যে এরা প্রতি সেকেন্ডে ৩০০ কোটিরও বেশি পানির অণু পরিবহন করতে পারে, অথচ প্রোটন কণাগুলোকে (H3O+) সম্পূর্ণ আটকে দিয়ে কোষের বৈদ্যুতিক বিভব রক্ষা করে [২, ৪]। চ্যানেলের কেন্দ্রে দুটি সংরক্ষিত NPA (অ্যাসপারাজিন-প্রোলিন-অ্যালানিন) মোটিফ অবস্থান করে যা পানির অণুকে উল্টে দিয়ে প্রোটন প্রবাহ বন্ধ করে দেয় [২]। '
            ),
            l(
              'The positive electrostatic dipole generated by the half-helices forces individual water molecules to rotate 180 degrees as they pass through the NPA constriction. Concurrently, an aromatic/arginine (ar/R) constriction filter located at the extracellular pore entrance forms a narrow 2.8-Angstrom steric bottleneck. The fixed positive charge on Arg-195 repels hydronium ions, preventing proton wire conduction via the classical Grotthuss mechanism [2, 4].',
              'NPA মোটিফের ধনাত্মক বৈদ্যুতিক ক্ষেত্র পানির অণুগুলোকে ১৮০ ডিগ্রি ঘুরিয়ে দেয়। এর সাথে চ্যানেলের মুখে অবস্থিত ২.৮ অ্যাংস্ট্রমের সংকীর্ণ ar/R ফিল্টারের ধনাত্মক আর্জিনিন আয়ন প্রোটন কণাগুলোকে বিকর্ষণ করে, ফলে গ্রোথাস মেকানিজমের মাধ্যমেও কোনো অ্যাসিড কণা কোষের ভেতরে ঢুকতে পারে না [২, ৪]।'
            ),
            l(
              'Cryo-electron microscopy studies have further identified specific gating mechanisms in mammalian aquaporins, including loop D phosphorylation and intracellular protonation of histidine residues that modulate channel open probability during metabolic stress [2]. In AQP2, tetrameric assembly in the endoplasmic reticulum is mediated by specific transmembrane helix interactions, and misassembly triggers endoplasmic reticulum-associated degradation (ERAD) [2].',
              'ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপি গবেষণায় দেখা গেছে যে মেটাবলিক চাপের সময় লুপ-ডি এর ফসফোরাইলেশন এবং হিস্টিডিনের পরিবর্তনের মাধ্যমে এই চ্যানেলগুলোর মুখ খোলা বা বন্ধ হওয়া নিয়ন্ত্রিত হয় [২]। AQP2 এর চারটি প্রোটিন একত্রিত হয়ে কার্যকর চ্যানেল তৈরি করে; এই প্রক্রিয়ায় কোনো ত্রুটি হলে কোষ তা চিহ্নিত করে ধ্বংস করে দেয় [২]।'
            ),
            l(
              'Small-molecule modulators targeting the ar/R selectivity filter represent a promising frontier in translational pharmacology. Designing cell-permeable aquaporin inhibitors could provide novel non-diuretic therapeutics to alleviate cytotoxic brain edema following traumatic brain injury and ischemic stroke [2, 4].',
              'অ্যাকোয়াপোরিন চ্যানেলের এই ফিল্টারকে লক্ষ্য করে তৈরি ক্ষুদ্র রাসায়নিক ওষুধ স্ট্রোক বা মাথায় আঘাতের পর মস্তিষ্কে মারাত্মক পানি জমা রোধে এক নতুন দিগন্ত উন্মোচন করছে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Genetics of Nephrogenic Diabetes Insipidus', 'নেফ্রোজেনিক ডায়াবেটিস ইনসিপিডাসের আণবিক জেনেটিক্স'),
          paragraphs: [
            l(
              'Nephrogenic Diabetes Insipidus (NDI) represents a profound failure of the renal collecting duct to concentrate urine despite normal or elevated circulating concentrations of vasopressin [2]. Approximately 90% of congenital NDI cases are caused by X-linked recessive mutations in the AVPR2 gene on chromosome Xq28, encoding the vasopressin V2 receptor [2]. Over 250 distinct missense, nonsense, and frameshift mutations disrupt V2R folding, causing mutant receptors to be trapped in the endoplasmic reticulum and targeted for ERAD [2].',
              'নেফ্রোজেনিক ডায়াবেটিস ইনসিপিডাস (NDI) হলো এমন একটি রোগ যেখানে রক্তে প্রচুর ভ্যাসোপ্রেসিন থাকা সত্ত্বেও কিডনি পানি ধরে রাখতে পারে না এবং রোগী দিনে ১৫–২০ লিটার প্রস্রাব করে [২]। প্রায় ৯০% ক্ষেত্রে এটি ক্রোমোজোম Xq28 এ অবস্থিত AVPR2 জিনের মিউটেশনের কারণে ঘটে; ফলে ত্রুটিপূর্ণ V2 রিসেপ্টর এন্ডোপ্লাজমিক রেটিকুলামে আটকে নষ্ট হয়ে যায় এবং কোষের উপরিভাগে পৌঁছাতে পারে না [২]।'
            ),
            l(
              'The remaining 10% of congenital cases arise from autosomal recessive or dominant mutations in the AQP2 gene on chromosome 12q13, causing either misfolding of the channel or disrupting the C-terminal Ser-256 phosphorylation site required for PKA recognition and apical targeting [2]. In autosomal dominant NDI, mutant AQP2 monomers form heterotetramers with wild-type subunits, misrouting the entire complex to lysosomes or basolateral membranes [2].',
              'বাকি ১০% ক্ষেত্রে ক্রোমোজোম ১২q১৩ এ অবস্থিত AQP2 জিনের ত্রুটির কারণে সরাসরি পানির চ্যানেলগুলো নষ্ট হয়ে যায় কিংবা ফসফেট যুক্ত হওয়ার স্থানটি অকেজো হয়ে পড়ে [২]। এর ফলে সাধারণ অ্যাকোয়াপোরিন চ্যানেলগুলোও ত্রুটিপূর্ণ হয়ে লাইসোজোমে চলে যায় এবং কোষের উপরিভাগে পানি শোষণের জন্য স্থাপিত হতে পারে না [২]।'
            ),
            l(
              'Acquired NDI is far more prevalent in adult clinical practice, most commonly induced by chronic lithium pharmacotherapy for bipolar disorder [2]. Lithium enters principal cells through apical ENaC channels, where it directly inhibits Glycogen Synthase Kinase-3beta (GSK3b) and downregulates adenylate cyclase activity, suppressing AQP2 gene transcription and inducing channel endocytosis [2].',
              'প্রাপ্তবয়স্কদের ক্ষেত্রে লিথিয়াম ওষুধের ব্যবহারের কারণে এই রোগটি সবচেয়ে বেশি দেখা যায় [২]। লিথিয়াম ENaC চ্যানেল দিয়ে কোষে ঢুকে GSK3b এনজাইম বন্ধ করে দেয় এবং অ্যাকোয়াপোরিন তৈরির জিনকে নিস্তেজ করে কিডনির পানি ধরে রাখার ক্ষমতা নষ্ট করে দেয় [২]।'
            ),
            l(
              'Emerging therapeutics investigate cell-permeable non-peptide pharmacochaperones that enter the ER to rescue misfolded V2 receptors, or phosphodiesterase-5 inhibitors (sildenafil) and prostanoid EP4 agonists that elevate intracellular cGMP/cAMP to bypass V2R and drive AQP2 apical shuttling directly, restoring urinary concentrating capacity [2].',
              'আধুনিক গবেষণায় এমন ফার্মাকোলজিক্যাল চ্যাপেরন অণু এবং সিলডেনাফিলের মতো ওষুধ নিয়ে কাজ চলছে যা V2 রিসেপ্টর ছাড়াই cGMP বা cAMP বাড়িয়ে অ্যাকোয়াপোরিন চ্যানেলগুলোকে সচল করে কিডনির মূত্র ঘন করার ক্ষমতা ফিরিয়ে আনতে পারে [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mechanosensitive Ion Channels, Astrocyte Swelling & ODS Genomics', 'মেকানোসেনসিটিভ আয়ন চ্যানেল, অ্যাস্ট্রোসাইটের রূপান্তর ও ওডিএস জেনেটিক্স'),
          paragraphs: [
            l(
              'At the cellular nanoscale, hypothalamic osmoreception is mediated by transient receptor potential vanilloid channels, predominantly TRPV1 and TRPV4, functioning in tandem with mechanically gated piezo channels [2]. Under hypertonic conditions, cell volume reduction exerts mechanical tension on the lipid bilayer, gating TRPV4 channels to permit calcium influx, triggering phosphorylation of extracellular signal-regulated kinases (ERK1/2) and stimulating immediate prepro-AVP gene transcription [2].',
              'হাইপোথ্যালামাসে অসমোরিসেপশনের কাজ করে মূলত TRPV1 ও TRPV4 নামক মেকানোসেনসিটিভ চ্যানেল [২]। রক্ত অতিরিক্ত ঘন হলে কোষ থেকে পানি বের হয়ে কোষের পর্দা সংকুচিত হয়, ফলে এই চ্যানেলগুলো খুলে গিয়ে কোষে ক্যালসিয়াম প্রবেশ করায় এবং জিন থেকে ভ্যাসোপ্রেসিন তৈরির সংকেত পাঠায় [২]।'
            ),
            l(
              'In chronic hypotonic states, astrocytes adapt to protect intracranial pressure by extruding organic osmolytes through volume-regulated anion channels (VRAC, composed of LRRC8 heteromers) [2, 5]. The extrusion of taurine, myo-inositol, and glutamate drops intracellular osmolality to match the hypotonic ECF, mitigating cerebral edema [2, 5].',
              'হাইপোনাট্রিমিয়ায় মস্তিষ্ককে ফুলে যাওয়া থেকে বাঁচাতে অ্যাস্ট্রোসাইট কোষ VRAC চ্যানেলের মাধ্যমে টরিন, মায়ো-ইনোসিটল ও গ্লুটামেট বের করে দেয় [২, ৫]। ফলে কোষের ভেতরের ঘনত্ব বাইরের পাতলা রক্তের সমান হয়ে ব্রেনের ফোলাভাব কিছুটা হ্রাস পায় [২, ৫]।'
            ),
            l(
              'However, when hypertonic saline is administered too rapidly in chronic hyponatremia, the extracellular fluid tonicity spikes before astrocytes can re-synthesize or import their extruded osmolytes [2, 5]. Water rushes out of astrocytes down the sudden osmotic gradient into hypertonic plasma, triggering massive glial dehydration, rupture of the blood-brain barrier, and non-inflammatory demyelination of the basis pontis [2, 5].',
              'কিন্তু হঠাৎ স্যালাইন দিয়ে দ্রুত সোডিয়াম বাড়িয়ে দিলে ব্রেন কোষগুলো এত দ্রুত অসমোলাইট ফেরত তৈরি করতে পারে না [২, ৫]। ফলে তীব্র অসমোটিক টানে কোষের পানি বের হয়ে পনস অঞ্চলের গ্লায়াল কোষ সংকুচিত হয়ে মারা যায় এবং রক্ত-মস্তিষ্ক প্রাচীর ভেঙে মারাত্মক ডিমায়েলিনেশন ঘটে [২, ৫]।'
            ),
            l(
              'Genome-wide association studies identify polymorphisms in LRRC8 subunits and sodium-coupled myo-inositol cotransporters (SMIT) that influence individual susceptibility to osmotic demyelination, explaining why certain malnourished, alcoholic, or hypokalemic patients develop ODS even at modest sodium correction rates [2, 5].',
              'জিনগত গবেষণায় দেখা গেছে যে SMIT কো-ট্রান্সপোর্টারের তারতম্যের কারণে অপুষ্টি বা অ্যালকোহল সেবনকারী রোগীদের ক্ষেত্রে অল্প স্যালাইন দিলেও ডিমায়েলিনেশন সিন্ড্রোম হওয়ার ঝুঁকি অনেক বেশি থাকে [২, ৫]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Exercise-Associated Hyponatremia & Non-Osmotic Vasopressin Secretion', 'ব্যায়ামজনিত হাইপোনাট্রিমিয়া ও নন-অসমোটিক ভ্যাসোপ্রেসিন নিঃসরণ'),
          paragraphs: [
            l(
              'Exercise-Associated Hyponatremia (EAH) represents a critical intersection of sports nutrition, behavioral overhydration, and aberrant neuroendocrinology [1, 6]. Classical dogma held that athletes should drink ahead of thirst to prevent dehydration. However, in marathon runners and ultramarathoners, fluid intake exceeding sweat loss (up to 1.5–2.0 L/h) leads to massive free water retention [1, 6].',
              'ব্যায়ামজনিত হাইপোনাট্রিমিয়া (EAH) হলো অতিরিক্ত পানি পান এবং অস্বাভাবিক হরমোন নিঃসরণের মারাত্মক মেলবন্ধন [১, ৬]। অতীতে বিশ্বাস করা হতো যে পিপাসা লাগার আগেই প্রচুর পানি খাওয়া উচিত; কিন্তু গবেষণায় দেখা গেছে যে ঘামের চেয়ে বেশি পানি খেলে (ঘণ্টায় দেড় থেকে দুই লিটার) দেহে বিপুল পরিমাণ অতিরিক্ত পানি জমা হয় [১, ৬]।'
            ),
            l(
              'Under normal physiology, hypotonic dilution would immediately shut down vasopressin secretion, prompting massive renal water diuresis. In EAH, however, strenuous physical exercise, elevated core temperature, musculoskeletal trauma releasing interleukin-6 (IL-6), nausea, and emotional stress stimulate sustained non-osmotic secretion of AVP [1, 6]. Trapped in an antidiuretic state, the kidneys cannot excrete free water, driving acute dilutional hyponatremia and exercise-associated hyponatremic encephalopathy (EAHE) [1, 6].',
              'স্বাভাবিক অবস্থায় রক্ত পাতলা হলে ভ্যাসোপ্রেসিন বন্ধ হয়ে গিয়ে দ্রুত অতিরিক্ত পানি প্রস্রাবের মাধ্যমে বের হয়ে যেত। কিন্তু দীর্ঘস্থায়ী পরিশ্রমে তীব্র শারীরিক চাপ, পেশির প্রদাহ (IL-6 সাইটোকাইন) এবং বমি বমি ভাবের কারণে মস্তিষ্ক রক্তের ঘনত্ব কমে যাওয়া সত্ত্বেও ভ্যাসোপ্রেসিন নিঃসরণ অব্যাহত রাখে [১, ৬]। ফলে কিডনি পানি আটকে রাখতে বাধ্য হয় এবং মস্তিষ্কে পানি জমে মারাত্মক এনসেফালোপ্যাথি তৈরি হয় [১, ৬]।'
            ),
            l(
              'Female endurance athletes are disproportionately vulnerable to fatal EAHE [1, 6]. Estrogen and progesterone stimulate AVP secretion, while estrogen inhibits the brain Na+/K+-ATPase pump, reducing the capacity of cerebral astrocytes to extrude sodium and adapt to hypotonic swelling [1, 6].',
              'নারী ক্রীড়াবিদদের ক্ষেত্রে এই ঝুঁকি আরও বেশি দেখা যায় [১, ৬]। ইস্ট্রোজেন হরমোন মস্তিষ্কের Na+/K+-ATPase পাম্পের গতি কিছুটা কমিয়ে দেয়, ফলে ব্রেন কোষগুলো ফোলাভাবের বিরুদ্ধে সহজে প্রতিরোধ গড়তে পারে না [১, ৬]।'
            ),
            l(
              'International consensus guidelines now mandate "drinking to thirst" as the gold standard for endurance events, supplemented by emergency on-site point-of-care capillary sodium testing and bolus 3% hypertonic saline protocols to halt progressive neurological herniation at finish lines [1, 6].',
              'বর্তমান আন্তর্জাতিক নির্দেশিকা অনুযায়ী ম্যারাথনে কেবল পিপাসা পেলেই পানি পানের নির্দেশ দেওয়া হয়েছে এবং ফিনিশিং লাইনে তাৎক্ষণিক সোডিয়াম পরীক্ষা ও ৩% স্যালাইনের জরুরি ব্যবস্থা রাখা বাধ্যতামূলক করা হয়েছে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Bioimpedance Spectroscopy & SGLT1/SGLT2 Pharmacogenomics', 'বায়োইম্পিডেন্স স্পেকট্রোস্কোপি ও SGLT1/SGLT2 ফার্মাকোজেনোমিক্স'),
          paragraphs: [
            l(
              'Modern clinical quantification of body fluid compartments utilizes Multi-Frequency Bioelectrical Impedance Spectroscopy (BIS) [1]. By passing alternating electrical currents across a spectrum from 5 kHz to 1000 kHz, BIS measures impedance (Z), resistance (R), and reactance (Xc) [1]. Low frequencies (<5 kHz) cannot penetrate capacitive cell membranes and flow exclusively through extracellular water (ECW), whereas high frequencies (>500 kHz) penetrate all cell bilayers to quantify total body water (TBW), allowing non-invasive Cole-Cole mathematical modeling of intracellular hydration [1].',
              'আধুনিক চিকিৎসাবিজ্ঞানে মাল্টি-ফ্রিকোয়েন্সি বায়োইম্পিডেন্স স্পেকট্রোস্কোপি (BIS) দিয়ে দেহের পানি মাপা হয় [১]। ৫ kHz এর মতো নিম্ন তরঙ্গের বিদ্যুৎ কোষের ভেতর ঢুকতে না পেরে কেবল কোষের বাইরের পানি (ECW) পরিমাপ করে, আর ৫০০ kHz এর উচ্চ তরঙ্গের বিদ্যুৎ কোষের পর্দা ভেদ করে মোট পানির (TBW) পরিমাণ নির্ণয় করে [১]।'
            ),
            l(
              'Furthermore, pharmacological inhibition of renal Sodium-Glucose Cotransporter-2 (SGLT2 inhibitors: empagliflozin, dapagliflozin) alongside dual SGLT1/2 inhibitors (sotagliflozin) has revolutionized cardiometabolic and heart failure therapeutics [3, 4]. By blocking proximal tubular glucose and sodium reabsorption, SGLT2 inhibitors provoke selective osmotic diuresis from interstitial fluid rather than intravascular volume, decongesting failing hearts and reducing renal intraglomerular hypertension without triggering reflex sympathetic activation or neurohumoral RAAS overdrive [3, 4].',
              'বৃক্কের SGLT2 ইনহিবিটর ওষুধগুলো (এমপাগ্লিফ্লোজিন, ডাপাগ্লিফ্লোজিন) গ্লুকোজ ও সোডিয়াম প্রস্রাবের মাধ্যমে বের করে দিয়ে মূলত ইন্টারস্টিশিয়াল প্রকোষ্ঠের অতিরিক্ত পানি কমায়, যা হার্ট ফেইলিউরের রোগীদের রক্তচাপ ও ফুসফুসের পানি কমিয়ে জীবন রক্ষা করে [৩, ৪]।'
            ),
            l(
              'Simultaneously, dual SGLT1/2 inhibitors delay intestinal glucose absorption, augmenting distal GLP-1 and PYY secretion while mildly increasing colonic delivery of carbohydrates for SCFA fermentation [3, 4]. This mechanistic crossover connects fluid and sodium homeostasis with incretin biology and metabolic signaling.',
              'একই সাথে ডুয়াল SGLT1/2 ইনহিবিটর ওষুধ অন্ত্রে গ্লুকোজের শোষণ কিছুটা বিলম্বিত করে ইনক্রিটিন হরমোন বাড়ায় এবং কোলনে শর্করার ফারমেন্টেশন উন্নত করে [৩, ৪]। এটি তরল নিয়ন্ত্রণের সাথে মেটাবলিক সংকেতের এক চমৎকার যোগসূত্র স্থাপন করে।'
            ),
            l(
              'In hemodialysis and intensive care medicine, coupling real-time bioimpedance vector analysis (BIVA) with continuous blood volume monitoring prevents intradialytic hypotension and subclinical fluid overload, transforming empirical fluid prescription into an objective, data-driven science [1, 4].',
              'ডায়ালাইসিস ও আইসিইউতে বায়োইম্পিডেন্স ও রক্তচাপের সমন্বিত মনিটরিং চিকিৎসকদের নির্ভুল তরল নির্ধারণে সাহায্য করছে এবং অতিরিক্ত পানি বা আকস্মিক প্রেশার কমে যাওয়ার মতো জটিলতা শূন্যে নামিয়ে আনছে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Research Frontiers & Future Fluid Therapeutics', 'উন্নত গবেষণার দিগন্ত ও ভবিষ্যৎ তরল চিকিৎসা'),
          paragraphs: [
            l(
              'Hydration science has evolved beyond simplistic volume intake toward molecular biophysics: understanding nanoscale aquaporin selectivity filters, non-osmotic vasopressin triggers in elite endurance athletics, and the genetic underpinnings of pontine demyelination [2, 5, 6].',
              'আর্দ্রতা বিজ্ঞান সাধারণ পানি পানের হিসাবের বাইরে গিয়ে আণবিক বায়োফিজিক্সে রূপ নিয়েছে: ন্যানোস্কেল অ্যাকোয়াপোরিন চ্যানেলের সিলেক্টিভিটি, ক্রীড়াবিদদের নন-অসমোটিক ভ্যাসোপ্রেসিন সংকেত এবং মস্তিষ্কের ডিমায়েলিনেশন সিন্ড্রোমের প্রতিরোধ এখন আধুনিক চিকিৎসার মূল আলোচ্য [২, ৫, ৬]। '
            ),
            l(
              'Microgravity spaceflight represents a profound challenge to human fluid compartmentalization [1, 4]. In zero gravity, the absence of hydrostatic pressure gradients causes a rapid 1.5- to 2.0-liter cephalad fluid shift from the lower limbs into the thorax and head, triggering central baroreceptor stretch, suppression of AVP and RAAS, and rapid "spaceflight diuresis" followed by chronic plasma volume contraction upon return to Earth [1, 4].',
              'মহাকাশে মাধ্যাকর্ষণহীন পরিবেশে তরল ভারসাম্য এক বিশাল চ্যালেঞ্জের মুখে পড়ে [১, ৪]। মাধ্যাকর্ষণ না থাকায় পা থেকে প্রায় দেড় থেকে দুই লিটার রক্ত ও পানি সোজা বুক ও মাথায় উঠে আসে, ফলে মস্তিষ্ক বিভ্রান্ত হয়ে রেনিন ও ভ্যাসোপ্রেসিন বন্ধ করে দেয় এবং মহাকাশচারীরা দ্রুত পানির সংকটে পড়েন [১, ৪]।'
            ),
            l(
              'Future therapeutics explore synthetic organic osmolytes to protect glial cells against osmotic stress, alongside targeted vasopressin receptor agonists and antagonists (vaptans: tolvaptan, conivaptan) to treat euvolemic and hypervolemic hyponatremias without electrolyte disturbances [2, 5].',
              'ভবিষ্যতের চিকিৎসায় বিশেষ সিন্থেটিক অসমোলাইট অণু এবং ভ্যাপটান জাতীয় ওষুধের ব্যবহার নিয়ে গবেষণা চলছে যা ইলেক্ট্রোলাইটের ক্ষতি না করেই অতিরিক্ত পানি শরীর থেকে বের করে দিতে সক্ষম [২, ৫]।'
            ),
            l(
              'Integrating multi-frequency bioelectrical spectroscopy with targeted electrolyte pharmacotherapy allows precise, patient-specific fluid management across critical care, nephrology, cardiology, and sports medicine [1, 3, 5].',
              'মাল্টি-ফ্রিকোয়েন্সি স্পেকট্রোস্কোপি এবং নির্ভুল ইলেক্ট্রোলাইট ফার্মাকোলজির সমন্বয়ে আইসিইউ, কিডনি বিভাগ এবং স্পোর্টস মেডিসিনে রোগীদের জন্য সম্পূর্ণ ব্যক্তিগতকৃত তরল ব্যবস্থাপনা নিশ্চিত করা সম্ভব [১, ৩, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing fluid balance osmoregulation: plasma hyperosmolality sensed by hypothalamic osmoreceptors triggers thirst and posterior pituitary vasopressin release, which shuttles Aquaporin-2 channels to collecting duct apical membranes to conserve water, while intestinal SGLT1 cotransports sodium and glucose to drive ORS fluid uptake.',
      'তরল ভারসাম্যের অসমোরেগুলেশন প্রবাহচিত্র: রক্তের ঘনত্ব বৃদ্ধি পেলে হাইপোথ্যালামাস পিপাসা জাগায় এবং ভ্যাসোপ্রেসিন হরমোন নিঃসরণ করে অ্যাকোয়াপোরিন-২ দ্বারা কিডনিতে পানি শোষণ নিশ্চিত করে, অন্যদিকে অন্ত্রের SGLT1 চ্যানেল চিনি ও লবণের মাধ্যমে খাবার স্যালাইন (ORS) শোষণ করে পানিশূন্যতা দূর করে।'
    ),
    steps: [
      l(
        'Step 1: Fluid loss elevates plasma osmolality (>295 mOsm/kg), causing osmoreceptive neuron shrinkage in the hypothalamic OVLT and SFO.',
        'ধাপ ১: পানিশূন্যতায় রক্তের অসমোলারিটি বৃদ্ধি পেলে হাইপোথ্যালামাসের OVLT ও SFO অঞ্চলের স্নায়ুকোষ সংকুচিত হয়।'
      ),
      l(
        'Step 2: Hypothalamic activation provokes conscious thirst and triggers the posterior pituitary to secrete Arginine Vasopressin (AVP) into circulation.',
        'ধাপ ২: এই সংকেত সচেতন পিপাসা জাগিয়ে তোলে এবং পিটুইটারি গ্রন্থি থেকে রক্তে ভ্যাসোপ্রেসিন (AVP) হরমোন নিঃসরণ করায়।'
      ),
      l(
        'Step 3: AVP binds basolateral V2 receptors on renal collecting duct principal cells, activating cAMP/PKA to shuttle Aquaporin-2 water channels into the apical membrane.',
        'ধাপ ৩: ভ্যাসোপ্রেসিন কিডনির সংগ্রাহী নালিকার কোষে যুক্ত হয়ে অ্যাকোয়াপোরিন-২ চ্যানেলগুলোকে কোষের উপরিভাগে স্থাপন করে মূত্র থেকে পানি রক্তে ফিরিয়ে আনে।'
      ),
      l(
        'Step 4: In diarrheal dehydration, oral rehydration solution (ORS) leverages intact brush-border SGLT1 to cotransport sodium and glucose, driving transcellular water uptake via solvent drag.',
        'ধাপ ৪: ডায়রিয়ার পানিশূন্যতায় খাবার স্যালাইন (ORS) অন্ত্রের SGLT1 চ্যানেলের মাধ্যমে চিনি ও লবণ শোষণ করিয়ে অসমোটিক টানে পানি রক্তে প্রবেশ করায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why does the World Health Organization Reduced-Osmolarity Oral Rehydration Solution (245 mOsm/L) effectively rehydrate patients during cholera diarrhea despite massive toxin-induced CFTR chloride secretion?',
      'কলেরা টক্সিনের কারণে অন্ত্রের CFTR চ্যানেলে অনবরত ক্লোরাইড ও পানি নিঃসরণ হওয়া সত্ত্বেও বিশ্ব স্বাস্থ্য সংস্থার ওআরএস (২৪৫ mOsm/L) কীভাবে রোগীকে কার্যকরভাবে সুস্থ করে তোলে?'
    ),
    options: [
      l(
        'The Sodium-Glucose Cotransporter-1 (SGLT1) remains intact and couples active 2:1 sodium-glucose import into enterocytes, establishing an osmotic gradient that drives water reabsorption via solvent drag.',
        'অন্ত্রের SGLT1 চ্যানেল অক্ষত থাকে এবং এটি দুটি সোডিয়ামের সাথে একটি গ্লুকোজ কোষে টেনে নেয়, যা শক্তিশালী অসমোটিক টানের মাধ্যমে পানিকে অন্ত্রের ভেতরে শোষণ করায়।'
      ),
      l(
        'ORS directly neutralizes cholera toxin molecules in the stomach, destroying the bacteria on contact.',
        'ওআরএস সরাসরি পাকস্থলীতে কলেরা টক্সিন নিষ্ক্রিয় করে ফেলে এবং ব্যাকটেরিয়া ধ্বংস করে।'
      ),
      l(
        'ORS shuts down all renal glomerular filtration, forcing the kidneys to retain 100% of fluid.',
        'ওআরএস কিডনির গ্লোমেরুলার ফিল্ট্রেশন সম্পূর্ণ বন্ধ করে দিয়ে দেহে পানি আটকে রাখে।'
      ),
      l(
        'ORS causes rapid vasoconstriction of the portal vein, blocking any fluid from entering the gut.',
        'ওআরএস পোর্টাল শিরার রক্তনালী সংকুচিত করে অন্ত্রে তরল প্রবেশ বন্ধ করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Even when bacterial enterotoxins irreversibly activate adenylate cyclase and lock CFTR chloride channels open, the brush-border SGLT1 cotransporter remains fully functional. Supplying stoichiometric sodium and glucose drives active solute uptake into enterocytes, generating a localized osmotic gradient that drags water across the mucosal barrier into the circulation.',
      'কলেরা টক্সিনের প্রভাবে CFTR চ্যানেল দিয়ে যতই পানি বের হোক না কেন, অন্ত্রের SGLT1 কো-ট্রান্সপোর্টার পুরোপুরি সচল থাকে। ওআরএসের সোডিয়াম ও গ্লুকোজ একসাথে শোষিত হয়ে যে অসমোটিক টান তৈরি করে, তা প্রচুর পরিমাণে পানি অন্ত্র থেকে রক্তে টেনে নিয়ে জীবন রক্ষা করে।'
    ),
  },
}
