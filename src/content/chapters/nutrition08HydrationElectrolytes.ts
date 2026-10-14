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
    'Comprehensive university textbook analysis of human fluid homeostasis: thermodynamic fluid compartments, Starling forces, Na+/K+-ATPase gradients, central osmoreceptors (OVLT/SFO), neurohypophysial vasopressin-Aquaporin-2 signaling, RAAS volume regulation, dehydration pathophysiology, exercise-associated hyponatremia, and stoichiometric SGLT1 oral rehydration therapy.',
    'মানবদেহের তরল ভারসাম্যের প্রামাণ্য বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় বিশ্লেষণ: তাপগতিবিজ্ঞানসম্মত তরল প্রকোষ্ঠ, স্টার্লিং বল, Na+/K+-ATPase গ্রেডিয়েন্ট, হাইপোথ্যালামিক অসমোরিসেপ্টর (OVLT/SFO), পিটুইটারি ভ্যাসোপ্রেসিন-অ্যাকোয়াপোরিন-২ অক্ষ, RAAS আয়তন নিয়ন্ত্রণ, পানিশূন্যতার রোগতত্ত্ব, ব্যায়ামজনিত হাইপোনাট্রিমিয়া এবং অন্ত্রে SGLT1 খাবার স্যালাইন (ORS) কো-ট্রান্সপোর্ট।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Delineate the volume and electrolyte composition of body fluid compartments (Intracellular Fluid vs Interstitial Fluid vs Plasma), Starling forces, and the role of the Na+/K+-ATPase in maintaining resting cell volume.',
      'মানবদেহের তরল প্রকোষ্ঠসমূহের (আন্তঃকোষীয়, ইন্টারস্টিশিয়াল ও প্লাজমা) আয়তন, ইলেক্ট্রোলাইট বিন্যাস, স্টার্লিং বল এবং কোষীয় আয়তন রক্ষায় Na+/K+-ATPase পাম্পের ভূমিকা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Trace the osmoregulatory feedback loop: hypothalamic osmoreceptors (OVLT/SFO), neurohypophysial Arginine Vasopressin (AVP) secretion, and V2 receptor-mediated Aquaporin-2 (AQP2) apical shuttling in collecting duct principal cells.',
      'অসমোরেগুলেশন ফিডব্যাক পথ: হাইপোথ্যালামাসের অসমোরিসেপ্টর, পিটুইটারি থেকে ভ্যাসোপ্রেসিন (AVP) নিঃসরণ এবং সংগ্রাহী নালিকার কোষে V2 রিসেপ্টর দ্বারা অ্যাকোয়াপোরিন-২ (AQP2) পরিবহন পথ বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Distinguish isotonic, hypertonic, and hypotonic dehydration, identifying the neurological hazards of exercise-associated hyponatremia and osmotic demyelination syndrome.',
      'আইসোটনিক, হাইপারটনিক ও হাইপোটনিক পানিশূন্যতার পার্থক্য নির্ণয় এবং ব্যায়ামজনিত হাইপোনাট্রিমিয়া ও অসমোটিক ডিমায়েলিনেশন সিন্ড্রোমের স্নায়বিক বিপদ মূল্যায়ন করতে পারা।'
    ),
    l(
      'Explain the bioenergetic and stoichiometric mechanism of reduced-osmolarity Oral Rehydration Salts (ORS) utilizing SGLT1 glucose-sodium cotransport to overcome secretory diarrhea.',
      'কম-অসমোলারিটি ওআরএস (ORS)-এর জৈব শক্তিবিজ্ঞান এবং কলেরা বা ডায়রিয়ায় SGLT1 কো-ট্রান্সপোর্টের মাধ্যমে অন্ত্রে পানি ও লবণ শোষণের জীবনরক্ষাকারী কৌশল ব্যাখ্যা করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.energy-balance-tdee'],
  references: hydrationRefs,
  evidenceBySection: {
    introduction: ['verbalis-bestpract-water-homeostasis', 'gropper-advanced-nutrition-water'],
    structure: ['gropper-advanced-nutrition-water', 'armstrong-jacn-hydration'],
    mechanism: ['verbalis-bestpract-water-homeostasis', 'who-ors-guidelines-diarrhoea'],
    integration: ['sterns-nejm-disorders-plasma-sodium', 'verbalis-bestpract-water-homeostasis'],
    practice: ['who-ors-guidelines-diarrhoea', 'sawka-msse-exercise-fluid'],
    takeaways: ['verbalis-bestpract-water-homeostasis', 'armstrong-jacn-hydration'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Body Fluid Compartments & Starling Forces', '১. দেহের তরল প্রকোষ্ঠ ও স্টার্লিং বল'), sectionId: 'introduction' },
      { id: 'sec-osmo', label: l('2. Osmoreceptor Circuit & The Vasopressin-AQP2 Axis', '২. অসমোরিসেপ্টর সার্কিট ও ভ্যাসোপ্রেসিন-AQP2 অক্ষ'), sectionId: 'structure' },
      { id: 'sec-raas-ors', label: l('3. Volume Regulation: RAAS & The Biophysics of ORS', '৩. আয়তন নিয়ন্ত্রণ: RAAS ও ওআরএসের বায়োফিজিক্স'), sectionId: 'mechanism' },
      { id: 'sec-dehydration', label: l('4. Dehydration Types, Hyponatremia & Osmotic Stress', '৪. পানিশূন্যতার প্রকারভেদ, হাইপোনাট্রিমিয়া ও অসমোটিক চাপ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Practical Fluid Assessment & Osmolality Calculations', '৫. ব্যবহারিক তরল মূল্যায়ন ও অসমোলারিটি হিসাব'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Glossary & High-Yield Summary', '৬. শব্দকোষ ও উচ্চ-গুরুত্বপূর্ণ সারাংশ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Total Body Water (TBW)', 'দেহের মোট জলীয় অংশ (TBW)'),
        definition: l(
          'The total volume of water within the human body, constituting approximately 60% of total body weight in healthy adult males (~42 L in a 70-kg reference human), divided into intracellular (2/3) and extracellular (1/3) compartments.',
          'মানবদেহে উপস্থিত মোট পানির পরিমাণ, যা সুস্থ প্রাপ্তবয়স্ক পুরুষের মোট দৈহিক ওজনের প্রায় ৬০% (৭০ কেজি ওজনের ব্যক্তির ক্ষেত্রে প্রায় ৪২ লিটার); এর দুই-তৃতীয়াংশ কোষের ভেতরে এবং এক-তৃতীয়াংশ কোষের বাইরে থাকে।'
        ),
      },
      {
        term: l('Effective Osmolality / Tonicity', 'কার্যকরী অসমোলারিটি / টনিসিটি'),
        definition: l(
          'The concentration of non-permeant solutes (primarily sodium salts and glucose) that exert an osmotic force across cell membranes, dictating transcellular water movement.',
          'কোষপর্দা ভেদ করতে পারে না এমন দ্রব্যের (প্রধানত সোডিয়াম ও গ্লুকোজ) ঘনত্ব, যা কোষের ভেতর ও বাইরের মধ্যে পানির স্থানান্তর নিয়ন্ত্রণ করে।'
        ),
      },
      {
        term: l('Aquaporin-2 (AQP2)', 'অ্যাকোয়াপোরিন-২ (AQP2)'),
        definition: l(
          'A specialized tetrameric transmembrane water channel protein stored in intracellular vesicles within renal collecting duct principal cells; translocates to the apical membrane upon vasopressin V2 receptor activation to permit transcellular water reabsorption.',
          'বৃক্কের সংগ্রাহী নালিকার কোষে অবস্থিত একটি বিশেষ পানি পরিবহনকারী প্রোটিন; ভ্যাসোপ্রেসিন হরমোনের প্রভাবে কোষের ভেতরের থলি থেকে কোষের উপরিভাগে এসে মূত্র থেকে রক্তে পানি শোষণ নিশ্চিত করে।'
        ),
      },
      {
        term: l('Renin-Angiotensin-Aldosterone System (RAAS)', 'রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন সিস্টেম (RAAS)'),
        definition: l(
          'The premier endocrine cascade governing extracellular fluid volume and blood pressure; activated by renal hypoperfusion to promote renal sodium and water retention via aldosterone and angiotensin II.',
          'বহিঃকোষীয় তরলের আয়তন এবং রক্তচাপ নিয়ন্ত্রণকারী প্রধান হরমোন চক্র; বৃক্কে রক্তপ্রবাহ কমে গেলে সক্রিয় হয়ে সোডিয়াম ও পানি ধরে রেখে রক্তচাপ বৃদ্ধি করে।'
        ),
      },
      {
        term: l('Exercise-Associated Hyponatremia (EAH)', 'ব্যায়ামজনিত হাইপোনাট্রিমিয়া (EAH)'),
        definition: l(
          'A life-threatening dilutional drop in serum sodium ([Na+] <135 mEq/L) during or up to 24 hours after prolonged physical exertion, caused by overconsumption of hypotonic fluids combined with sustained non-osmotic vasopressin secretion.',
          'দীর্ঘস্থায়ী ব্যায়ামের সময় অতিরিক্ত সাধারণ পানি পান এবং ভ্যাসোপ্রেসিন নিঃসরণের কারণে রক্তে সোডিয়াম বিপজ্জনকভাবে কমে যাওয়া, যার ফলে মস্তিষ্কে পানি জমে মৃত্যু হতে পারে।'
        ),
      },
      {
        term: l('Osmotic Demyelination Syndrome (ODS)', 'অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম (ODS)'),
        definition: l(
          'A severe neurological disorder triggered by the overly rapid correction of chronic hyponatremia (>8 mEq/L in 24 hours), causing acute astrocyte shrinkage, blood-brain barrier disruption, and pontine oligodendrocyte demyelination.',
          'দীর্ঘস্থায়ী হাইপোনাট্রিমিয়া অত্যন্ত দ্রুত গতিতে (২৪ ঘণ্টায় ৮ mEq/L এর বেশি) স্যালাইন দিয়ে স্বাভাবিক করার ফলে মস্তিষ্কের পনস অঞ্চলের স্নায়ুর আবরণী নষ্ট হয়ে তৈরি হওয়া এক মারাত্মক প্যারালাইসিস রোগ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Plasma Osmolality & Free Water Deficit', 'প্লাজমা অসমোলারিটি ও মুক্ত পানির ঘাটতি নির্ণয়'),
        steps: [
          l(
            'Step 1: Calculate Effective Serum Osmolality using standard clinical chemistry parameters: Serum Na+ = 154 mEq/L, Serum Glucose = 90 mg/dL, BUN = 14 mg/dL. Formula: Effective Osmolality = 2 x [Na+] + [Glucose mg/dL / 18] = 2 x 154 + (90 / 18) = 308 + 5 = 313 mOsm/kg (Normal: 285–295 mOsm/kg).',
            'ধাপ ১: ল্যাবরেটরি রিপোর্ট ব্যবহার করে কার্যকরী প্লাজমা অসমোলারিটি হিসাব করুন: সিরাম সোডিয়াম = ১৫৪ mEq/L, গ্লুকোজ = ৯০ mg/dL। সূত্র: ২ x [Na+] + [গ্লুকোজ / ১৮] = ২ x ১৫৪ + ৫ = ৩১৩ mOsm/kg (স্বাভাবিক মাত্রা: ২৮৫–২৯৫ mOsm/kg)।'
          ),
          l(
            'Step 2: Estimate Total Body Water (TBW) in a 70-kg male: TBW = 0.60 x 70 kg = 42.0 Liters.',
            'ধাপ ২: ৭০ কেজি ওজনের পুরুষের মোট পানির পরিমাণ (TBW) নির্ধারণ করুন: TBW = ০.৬০ x ৭০ কেজি = ৪২.০ লিটার।'
          ),
          l(
            'Step 3: Calculate Free Water Deficit (FWD) to correct hypernatremia back to 140 mEq/L: FWD = TBW x [([Current Na+] / 140) - 1] = 42.0 x [(154 / 140) - 1] = 42.0 x (1.10 - 1) = 4.2 Liters.',
            'ধাপ ৩: সোডিয়ামকে স্বাভাবিক ১৪০ mEq/L এ নামিয়ে আনতে মুক্ত পানির ঘাটতি (FWD) হিসাব করুন: ঘাটতি = ৪২.০ x [(১৫৪ / ১৪০) - ১] = ৪২.০ x ০.১০ = ৪.২ লিটার।'
          ),
        ],
        conclusion: l(
          'The patient has a free water deficit of 4.2 Liters resulting in hypertonic cellular dehydration. To prevent cerebral edema, replacement fluid (5% dextrose in water or oral water) must be administered gradually over 48 to 72 hours, not exceeding a sodium drop of 0.5 mEq/L per hour.',
          'রোগীর দেহে ৪.২ লিটার খাঁটি পানির ঘাটতি তৈরি হয়েছে যার ফলে কোষগুলো শুকিয়ে গেছে। মস্তিষ্কের সুরক্ষা নিশ্চিত করতে স্যালাইন বা পানীয় দিয়ে ধীরে ধীরে ৪৮ থেকে ৭২ ঘণ্টা ধরে এই ঘাটতি পূরণ করতে হবে, যাতে প্রতি ঘণ্টায় সোডিয়াম হ্রাসের হার ০.৫ mEq/L এর বেশি না হয়।'
        ),
      },
      {
        title: l('Calculating Sweat Rate & Rehydration Protocol in an Endurance Athlete', 'ক্রীড়াবিদের ঘামের হার ও পানি প্রতিস্থাপন প্রোটোকল নির্ধারণ'),
        steps: [
          l(
            'Step 1: Record pre- and post-exercise body mass: Pre-run mass = 70.0 kg; Post-run mass after 90 minutes of running at 28°C = 68.2 kg (loss = 1.8 kg). Fluid consumed during run = 500 mL (0.5 kg). Urine output during run = 0 mL.',
            'ধাপ ১: ব্যায়ামের আগে ও পরের ওজন রেকর্ড করুন: দৌড়ানোর আগে ওজন = ৭০.০ কেজি; ২৮° সেলসিয়াসে ৯০ মিনিট দৌড়ানোর পর ওজন = ৬৮.২ কেজি (ক্ষয় = ১.৮ কেজি)। দৌড়ের সময় পানীয় গ্রহণ = ৫০০ মিলি (০.৫ কেজি)।'
          ),
          l(
            'Step 2: Calculate total sweat loss: Sweat loss = Weight loss + Fluid intake - Urine output = 1.8 kg + 0.5 kg - 0 = 2.3 kg (2,300 mL).',
            'ধাপ ২: মোট ঘামের অপচয় হিসাব করুন: ঘামের ক্ষতি = ওজনের ক্ষতি + পানীয় গ্রহণ = ১.৮ কেজি + ০.৫ কেজি = ২.৩ কেজি (২,৩০০ মিলিলিটার)।'
          ),
          l(
            'Step 3: Compute hourly sweat rate: Hourly rate = 2,300 mL / 1.5 hours = 1,533 mL/hour (~1.53 L/h). Compute percentage body weight loss: (1.8 kg / 70.0 kg) x 100 = 2.57% (exceeds the 2.0% dehydration threshold).',
            'ধাপ ৩: প্রতি ঘণ্টার ঘামের হার: ২,৩০০ মিলি / ১.৫ ঘণ্টা = ১,৫৩৩ মিলি/ঘণ্টা (~১.৫৩ লি/ঘণ্টা)। ওজনের শতকরা ক্ষয়: (১.৮ / ৭০) x ১০০ = ২.৫৭% (যা ২% পানিশূন্যতার নিরাপদ সীমা অতিক্রম করেছে)।'
          ),
          l(
            'Step 4: Formulate post-exercise rehydration plan: ACSM guidelines recommend replacing 125% to 150% of the net fluid deficit (1.8 kg x 1.5 = 2.7 Liters) over 2 to 4 hours with sodium-containing electrolyte fluids (~20–30 mEq/L Na+) to account for ongoing obligatory renal losses.',
            'ধাপ ৪: পানিশূন্যতা নিরাময় পরিকল্পনা: ACSM নির্দেশিকা অনুযায়ী পরবর্তী ২–৪ ঘণ্টায় ঘাটতির ১২৫% থেকে ১৫০% তরল (১.৮ কেজি x ১.৫ = ২.৭ লিটার) সোডিয়ামযুক্ত ইলেক্ট্রোলাইটের মাধ্যমে পান করতে হবে।'
          ),
        ],
        conclusion: l(
          'The athlete sustained moderate dehydration (2.57% body mass loss) with an elevated sweat rate of 1.53 L/h. Full recovery requires consuming 2.7 L of an electrolyte beverage with sodium to promote fluid retention and prevent involuntary diuresis.',
          'ক্রীড়াবিদের দেহে ২.৫৭% ওজনের পানিশূন্যতা হয়েছে এবং প্রতি ঘণ্টায় ঘামের হার ১.৫৩ লিটার। পূর্ণ শারীরিক সক্ষমতা পুনরুদ্ধারে সোডিয়ামযুক্ত ২.৭ লিটার ইলেক্ট্রোলাইট পানীয় গ্রহণ আবশ্যক।'
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
          'Largest fluid compartment; high potassium (~140 mEq/L) and organic phosphate, bounded by cell membranes with active Na+/K+-ATPase pumps.',
          'দেহের সর্ববৃহৎ তরল প্রকোষ্ঠ; উচ্চ পটাশিয়াম সমৃদ্ধ যা Na+/K+-ATPase পাম্প দ্বারা কোষের স্বাভাবিক আয়তন ও বিশ্রামকালীন ভোল্টেজ রক্ষা করে।'
        ),
        details: l(
          'ICF volume is purely determined by the effective osmolality of the surrounding ECF. If ECF osmolality rises (hypernatremia), water rapidly flows out of the ICF across aquaporins, shrinking the cells.',
          'কোষের ভেতরের পানির আয়তন পুরোপুরি নির্ভর করে বাইরের তরলের ঘনত্বের ওপর। বাইরের রক্তে লবণ বাড়লে কোষ থেকে পানি বের হয়ে কোষ শুকিয়ে যায়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-ecf',
        label: l('Extracellular Fluid (ECF: ~1/3 TBW, ~14 L, Na+ Dominant)', 'বহিঃকোষীয় তরল (ECF: মোট পানির ১/৩ অংশ, ১৪ লিটার, সোডিয়াম প্রধান)'),
        description: l(
          'Divided into Interstitial Fluid (~10.5 L) and Intravascular Plasma (~3.5 L); high sodium (~140 mEq/L) and chloride (~100 mEq/L).',
          'কোষের বাইরের তরল যা ইন্টারস্টিশিয়াল স্পেস (১০.৫ লিটার) এবং রক্তের প্লাজমায় (৩.৫ লিটার) বিভক্ত; এতে সোডিয়াম ও ক্লোরাইডের প্রাধান্য থাকে।'
        ),
        details: l(
          'Sodium is the primary effective extracellular osmolyte because cell membranes are relatively impermeable to Na+ via continuous Na+/K+-ATPase extrusion, establishing effective osmotic pressure.',
          'সোডিয়াম হলো বহিঃকোষীয় তরলের প্রধান চালিকাশক্তি যা রক্তচাপ ও সঞ্চালন স্বাভাবিক রাখার জন্য প্রধান স্তম্ভ হিসেবে কাজ করে।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-osmoreceptors',
        label: l('Hypothalamic Osmoreceptors (OVLT / SFO) & Vasopressin', 'হাইপোথ্যালামাসের অসমোরিসেপ্টর ও ভ্যাসোপ্রেসিন হরমোন'),
        description: l(
          'Sensory neurons lack a blood-brain barrier, sensing 1–2% shifts in plasma osmolality to trigger thirst and posterior pituitary Arginine Vasopressin (AVP) release.',
          'রক্তের ঘনত্বের সামান্য ১–২% পরিবর্তন শনাক্ত করে পিপাসা জাগায় এবং পিটুইটারি থেকে ভ্যাসোপ্রেসিন (AVP) নিঃসরণ করিয়ে প্রস্রাব আটকায়।'
        ),
        details: l(
          'Cell shrinkage via stretch-inactivated cation channels (TRPV4) depolarizes OVLT neurons, projecting to the supraoptic nucleus to synthesize AVP, which circulates to the kidneys.',
          'রক্ত ঘন হলে এই রিসেপ্টর সংকুচিত হয়ে মস্তিষ্কে সংকেত পাঠায়, ফলে মুখে পিপাসা লাগে এবং কিডনিতে পানি ধরে রাখার নির্দেশ যায়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-aqp2',
        label: l('Renal Collecting Duct Principal Cells: V2R & Aquaporin-2', 'কিডনির সংগ্রাহী নালিকা: V2 রিসেপ্টর ও অ্যাকোয়াপোরিন-২'),
        description: l(
          'AVP binds basolateral V2 receptors, raising cAMP/PKA to shuttle AQP2 tetramers to the apical membrane, reabsorbing water into the hypertonic medulla.',
          'ভ্যাসোপ্রেসিন কিডনির কোষে যুক্ত হয়ে অ্যাকোয়াপোরিন-২ চ্যানেলগুলোকে কোষের মুখে নিয়ে আসে, যা মূত্র থেকে পানি শুষে রক্তে ফিরিয়ে আনে।'
        ),
        details: l(
          'In the absence of AVP (e.g., Central Diabetes Insipidus or water diuresis), AQP2 is endocytosed, making collecting ducts impermeable to water, producing up to 15–20 L/day of dilute urine.',
          'ভ্যাসোপ্রেসিন না থাকলে এই চ্যানেলগুলো ভেতরে ঢুকে যায় এবং কিডনি পানি শোষণ করতে পারে না, ফলে দিনে ১৫–২০ লিটার পাতলা প্রস্রাব অপচয় হয়।'
        ),
        color: '#06b6d4',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-sglt1',
        label: l('Intestinal SGLT1 Cotransport & Stoichiometric ORS', 'অন্ত্রীয় SGLT1 কো-ট্রান্সপোর্ট ও ওআরএসের কার্যপদ্ধতি'),
        description: l(
          'Brush-border SGLT1 imports 1 glucose with 2 Na+ ions into enterocytes, generating a localized osmotic gradient that drags water even during cholera diarrhea.',
          'অন্ত্রের SGLT1 চ্যানেল ১টি গ্লুকোজের সাথে ২টি সোডিয়াম কোষে প্রবেশ করায়, যা তীব্র ডায়রিয়ার মধ্যেও বিপুল পরিমাণ পানি টেনে নিয়ে জীবন বাঁচায়।'
        ),
        details: l(
          'Reduced-osmolarity ORS (245 mOsm/L) provides 75 mmol/L Na+ and 75 mmol/L glucose. This equimolar stoichiometry maximizes SGLT1 velocity without creating hypertonic luminal fluid retention.',
          'বিশ্ব স্বাস্থ্য সংস্থার ওআরএসে ৭৫ মিলিমোল সোডিয়াম ও ৭৫ মিলিমোল গ্লুকোজের আদর্শ অনুপাত থাকে যা অন্ত্রে পানি নিঃসরণ কমিয়ে দ্রুততম সময়ে শোষণ নিশ্চিত করে।'
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
              'Water is the single most abundant chemical constituent of the human body, representing approximately sixty percent of total body weight in healthy adult males and fifty to fifty-five percent in adult females [4]. For a reference 70-kilogram human, this equates to roughly 42 liters of Total Body Water, acting as the biological solvent for all metabolic enzymes, the transport medium for circulatory nutrients, and the thermal buffer regulating internal core body temperature [1, 4].',
              'পানি হলো মানবদেহের সবচেয়ে প্রধান রাসায়নিক উপাদান, যা একজন সুস্থ প্রাপ্তবয়স্ক পুরুষের মোট ওজনের প্রায় ৬০ শতাংশ এবং নারীর ক্ষেত্রে ৫০ থেকে ৫৫ শতাংশ [৪]। ৭০ কেজি ওজনের একজন ব্যক্তির ক্ষেত্রে এর পরিমাণ প্রায় ৪২ লিটার, যা সমস্ত বিপাকীয় বিক্রিয়ার দ্রাবক, রক্ত সঞ্চালনে পুষ্টি পরিবহনের মাধ্যম এবং দেহের তাপমাত্রা নিয়ন্ত্রণকারী অপরিহার্য জলীয় ঢাল [১, ৪]।'
            ),
            l(
              'To picture how water is arranged in your body, imagine thousands of water balloons floating in a swimming pool. The water inside the balloons is the Intracellular Fluid (two-thirds of your body water), while the water in the pool surrounding the balloons is the Extracellular Fluid (the remaining one-third). If the pool water becomes too salty, water is pulled out of the balloons and they shrivel. If the pool water is too dilute, water rushes into the balloons until they risk bursting [1, 4].',
              'শরীরে পানি কীভাবে থাকে তা বোঝার জন্য একটি সুইমিং পুলে ভাসমান হাজার হাজার পানির বেলুনের কথা ভাবুন। বেলুনের ভেতরের পানি হলো আন্তঃকোষীয় তরল (মোট পানির দুই-তৃতীয়াংশ), আর বেলুনের চারপাশের পুলের পানি হলো বহিঃকোষীয় তরল (বাকি এক-তৃতীয়াংশ)। পুলের পানি যদি খুব নোনতা হয়ে যায়, বেলুন থেকে পানি বের হয়ে বেলুনগুলো কুঁচকে যায়। আর পুলের পানি যদি খুব পাতলা হয়, পানি ভেতরে ঢুকে বেলুন ফেটে যাওয়ার উপক্রম হয় [১, ৪]।'
            ),
            l(
              'Maintaining the delicate balance between these two fluid reservoirs is the primary goal of hydration physiology. Every cell in your brain, muscles, and organs requires this fluid balance to remain within narrow limits to perform metabolic work and preserve life [1, 4].',
              'এই দুই জলীয় প্রকোষ্ঠের মধ্যে সূক্ষ্ম ভারসাম্য রক্ষা করাই হলো আর্দ্রতা শারীরবৃত্তের মূল লক্ষ্য। আপনার মস্তিষ্ক, পেশি এবং প্রতিটি অঙ্গের কোষের স্বাভাবিক কাজকর্ম ও বেঁচে থাকার জন্য এই জলীয় পরিবেশের স্থায়িত্ব বজায় থাকা অপরিহার্য [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Electrolyte Distribution & The Sodium-Potassium Balance', 'ইলেক্ট্রোলাইটের বিন্যাস ও সোডিয়াম-পটাশিয়াম ভারসাম্য'),
          paragraphs: [
            l(
              'Electrolytes are minerals that dissociate into electrically charged ions when dissolved in biological fluids [4]. The chemical composition of intracellular and extracellular fluid is dramatically different. Sodium is the predominant positively charged ion in extracellular fluid and plasma, whereas potassium is the predominant ion inside cells [4].',
              'ইলেক্ট্রোলাইট হলো খনিজ উপাদান যা পানিতে দ্রবীভূত হয়ে ধনাত্মক বা ঋণাত্মক চার্জযুক্ত আয়নে পরিণত হয় [৪]। কোষের ভেতরের এবং বাইরের তরলের রাসায়নিক গঠন সম্পূর্ণ ভিন্ন। কোষের বাইরের রক্ত ও তরলে প্রধান ধনাত্মক আয়ন হলো সোডিয়াম, অন্যদিকে কোষের ভেতরে প্রধান আয়ন হলো পটাশিয়াম [৪]।'
            ),
            l(
              'This essential concentration gradient is continuously maintained by millions of microscopic molecular engines embedded in cell membranes called Sodium-Potassium ATPase pumps [4]. Think of these pumps as motorized sump pumps in the basement of a boat, constantly pumping water out to keep the boat afloat. By continuously pumping three sodium ions out for every two potassium ions pumped in, these molecular pumps maintain cellular volume and generate the electrical charges required for nerve impulses and muscle contractions [1, 4].',
              'কোষের পর্দায় থাকা লক্ষ লক্ষ সোডিয়াম-পটাশিয়াম পাম্প (Na+/K+-ATPase) নিরবচ্ছিন্নভাবে এই ভারসাম্য রক্ষা করে [৪]। এগুলোকে একটি নৌকার মোটরের মতো ভাবা যায় যা নৌকাকে ভাসিয়ে রাখতে অনবরত পানি বাইরে সেঁচে ফেলে। প্রতিবার তিনটি সোডিয়ামকে কোষ থেকে বের করে এবং দুটি পটাশিয়ামকে ভেতরে টেনে নিয়ে এই পাম্পগুলো কোষের স্বাভাবিক আয়তন রক্ষা করে এবং স্নায়ু সংকেত ও পেশি সংকোচনের জন্য প্রয়োজনীয় বিদ্যুৎ তৈরি করে [১, ৪]।'
            ),
            l(
              'If these pumps fail due to oxygen or energy deprivation, sodium rushes into the cell, followed immediately by water, causing rapid cellular swelling, membrane rupture, and cell death [1, 4].',
              'অক্সিজেন বা শক্তির অভাবে এই পাম্পগুলো বিকল হয়ে গেলে সোডিয়াম হুড়মুড় করে কোষের ভেতর ঢুকে পড়ে এবং তার সাথে পানি প্রবেশ করে কোষকে ফুলিয়ে ফাটিয়ে দেয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How The Brain & Kidneys Regulate Fluid: Thirst & Vasopressin', 'মস্তিষ্ক ও কিডনি কীভাবে পানি নিয়ন্ত্রণ করে: পিপাসা ও ভ্যাসোপ্রেসিন'),
          paragraphs: [
            l(
              'When the body loses water through sweat, breathing, or urination without adequate fluid intake, the concentration of electrolytes in the bloodstream rises [1, 2]. Specialized osmosensory cells in the hypothalamus of the brain detect this minute increase in blood saltiness and immediately trigger the conscious sensation of thirst, driving us to drink water [1, 2].',
              'ঘাম, শ্বাস-প্রশ্বাস বা প্রস্রাবের মাধ্যমে শরীর থেকে পানি অপচয় হলে এবং পর্যাপ্ত পানি পান না করলে রক্তের লবণের ঘনত্ব বেড়ে যায় [১, ২]। মস্তিষ্কের হাইপোথ্যালামাসের বিশেষ সংবেদনশীল কোষ রক্তের ঘনত্বের এই সামান্যতম পরিবর্তন শনাক্ত করা মাত্রই তীব্র পিপাসা জাগিয়ে তোলে যাতে আমরা পানি পান করি [১, ২]।'
            ),
            l(
              'Simultaneously, the posterior pituitary gland releases Antidiuretic Hormone (also known as Arginine Vasopressin) into the bloodstream [2]. Vasopressin travels directly to the kidneys, signaling them to insert microscopic water channels called Aquaporins into the renal tubules. These channels pull water out of forming urine and return it back into the blood, producing concentrated, dark-colored urine to conserve precious bodily fluids [1, 2].',
              'একই সময়ে মস্তিষ্কের পিটুইটারি গ্রন্থি রক্তে ভ্যাসোপ্রেসিন বা অ্যান্টি-ডাইউরেটিক হরমোন (ADH) নিঃসরণ করে [২]। এই হরমোন কিডনিতে গিয়ে অ্যাকোয়াপোরিন নামক বিশেষ পানির চ্যানেল খুলে দেয়। এই চ্যানেলগুলো তৈরি হতে থাকা প্রস্রাব থেকে পানি টেনে পুনরায় রক্তে ফিরিয়ে আনে, ফলে প্রস্রাবের রঙ গাঢ় হয় এবং শরীর মূল্যবান পানি সংরক্ষণ করতে পারে [১, ২]।'
            ),
            l(
              'Once you drink a glass of fresh water, it is absorbed across your stomach and intestines within minutes. Blood saltiness returns to baseline, the hypothalamic osmosensors relax, and the pituitary turns off vasopressin secretion, allowing the kidneys to resume normal fluid excretion [1, 2].',
              'আপনি এক গ্লাস পানি পান করার কয়েক মিনিটের মধ্যে তা পাকস্থলী ও অন্ত্র থেকে শোষিত হয়ে রক্তে পৌঁছে যায়। রক্তের ঘনত্ব স্বাভাবিক হয়ে এলে মস্তিষ্কের পিপাসা কেন্দ্র শান্ত হয় এবং কিডনি পুনরায় স্বাভাবিক প্রস্রাব তৈরি শুরু করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Understanding Dehydration & The Danger of Hyponatremia', 'পানিশূন্যতার ধরন ও হাইপোনাট্রিমিয়ার বিপদ'),
          paragraphs: [
            l(
              'Dehydration occurs when fluid losses outpace fluid intake, impairing cardiac output, muscle endurance, cognitive concentration, and physical thermoregulation [1]. In hot weather or strenuous exercise, a loss of just two percent of total body weight in fluid produces measurable declines in mental sharpness and physical performance [1, 4, 6].',
              'পানিশূন্যতা তৈরি হয় যখন শরীর থেকে পানি বের হওয়ার হার পানি গ্রহণের চেয়ে বেশি হয়; এর ফলে হৃদপিণ্ডের কার্যক্ষমতা কমে, পেশি দুর্বল হয় এবং মস্তিষ্কের মনোযোগ নষ্ট হয় [১]। তীব্র গরমে বা পরিশ্রমে শরীরের ওজনের মাত্র দুই শতাংশ পানি কমলেই শারীরিক ও মানসিক সক্ষমতায় লক্ষণীয় অবনতি ঘটে [১, ৪, ৬]।'
            ),
            l(
              'Conversely, drinking excessive plain water without electrolytes during prolonged endurance events can cause Exercise-Associated Hyponatremia [1, 2, 6]. When blood sodium levels drop dangerously low, water moves by osmosis into brain cells, causing cerebral swelling, headaches, confusion, seizures, and life-threatening medical emergencies [1, 2, 6]. Proper hydration requires balancing both water and essential electrolytes [1].',
              'বিপরীতভাবে, দীর্ঘ সময় ধরে অতিরিক্ত পরিশ্রমের সময় কোনো ইলেক্ট্রোলাইট ছাড়া কেবল অতিরিক্ত সাধারণ পানি পান করলে রক্তে সোডিয়াম বিপজ্জনকভাবে কমে যায় ("ব্যায়ামজনিত হাইপোনাট্রিমিয়া") [১, ২, ৬]। এর ফলে অসমোটিক টানে মস্তিষ্কের কোষের ভেতরে পানি ঢুকে মস্তিষ্ক ফুলে ওঠে, যা মারাত্মক মাথাব্যথা, অচেতনতা এবং মৃত্যুর কারণ হতে পারে; তাই সঠিক হাইড্রেশনে পানি ও লবণের ভারসাম্য থাকা অপরিহার্য [১, ২, ৬]।'
            ),
            l(
              'Many athletes make the mistake of overhydrating with plain water during marathons, believing that "more water is always better." Recognizing that sodium loss in sweat must be replaced alongside fluid is the fundamental difference between safe sports performance and medical collapse [1, 6].',
              'অনেক দৌড়বিদ ম্যারাথনে কেবল সাধারণ পানি অতিরিক্ত পান করে মারাত্মক ভুল করেন, এই বিশ্বাসে যে "যত বেশি পানি খাওয়া যায় তত ভালো"। ঘামের সাথে নির্গত সোডিয়াম লবণের পরিপূরণ নিশ্চিত করাই নিরাপদ শারীরিক ক্রীড়া ও বিপর্যয়ের মধ্যবর্তী মূল পার্থক্য [১, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Practical Daily Hydration & The Miracle of ORS', 'দৈনন্দিন সঠিক পানীয় গ্রহণ ও ওআরএসের জীবনরক্ষাকারী ভূমিকা'),
          paragraphs: [
            l(
              'Daily water requirements vary based on climate, physical activity, and body size, typically averaging 2.5 to 3.5 liters daily from all dietary fluids and water-rich foods [4]. The simplest practical tool to evaluate hydration status is monitoring urine color: pale, straw-colored urine indicates optimal hydration, whereas dark amber urine signals an immediate need for fluid replacement [1, 4].',
              'জলবায়ু, দৈহিক পরিশ্রম ও ওজনের ওপর ভিত্তি করে দৈনিক তরলের চাহিদা ভিন্ন হয়, যা সাধারণত পানীয় ও জলীয় খাবার মিলিয়ে দৈনিক ২.৫ থেকে ৩.৫ লিটার [৪]। নিজের পানিশূন্যতা বোঝার সবচেয়ে সহজ উপায় হলো প্রস্রাবের রঙ লক্ষ্য করা: হালকা খড়ের রঙের প্রস্রাব পর্যাপ্ত আর্দ্রতার প্রমাণ, আর গাঢ় হলুদ বা খয়েরি প্রস্রাব তাৎক্ষণিক পানি পানের স্পষ্ট নির্দেশক [১, ৪]।'
            ),
            l(
              'During severe diarrheal illnesses or cholera, plain water cannot be absorbed and can lead to death from rapid dehydration [3]. The World Health Organization Oral Rehydration Salts (ORS) solution represents one of the greatest medical breakthroughs in history: by pairing sodium with glucose in an exact ratio, the intestine utilizes specialized transport proteins to rapidly absorb water and electrolytes, saving millions of lives worldwide [3].',
              'তীব্র ডায়রিয়া বা কলেরার সময় কেবল সাধারণ পানি খেলে তা অন্ত্রে শোষিত না হয়ে মলের সাথে বেরিয়ে যায় এবং দ্রুত পানিশূন্যতায় মৃত্যু ডেকে আনে [৩]। বিশ্ব স্বাস্থ্য সংস্থার খাবার স্যালাইন (ORS) চিকিৎসাবিজ্ঞানের অন্যতম সেরা আবিষ্কার: এতে চিনি ও লবণের নিখুঁত অনুপাত থাকায় অন্ত্রের বিশেষ চ্যানেল দ্রুত পানি ও লবণ শুষে নেয় এবং পানিশূন্যতা দূর করে জীবন রক্ষা করে [৩]।'
            ),
            l(
              'For active individuals exercising in the heat for over 60 minutes, replacing sweat losses with an isotonic or hypotonic beverage containing 20 to 30 mEq/L of sodium accelerates fluid retention and prevents rapid muscular cramping [1, 6].',
              'গরমে এক ঘণ্টার বেশি ব্যায়ামকারী ব্যক্তিদের ক্ষেত্রে সাধারণ পানির বদলে ২০ থেকে ৩০ mEq/L সোডিয়ামযুক্ত ইলেক্ট্রোলাইট পানীয় গ্রহণ দ্রুত তরল শোষণ নিশ্চিত করে এবং পেশির টান ধরা প্রতিরোধ করে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways', 'মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'In summary, cellular hydration relies on a tightly controlled equilibrium between intracellular potassium and extracellular sodium [4]. The brain and kidneys constantly adjust fluid retention through vasopressin and thirst [2]. Balancing water intake with electrolytes is essential to prevent both dehydrating heat illness and hyponatremic brain swelling [1, 3].',
              'সংক্ষেপে, কোষীয় আর্দ্রতা মূলত কোষের ভেতরের পটাশিয়াম এবং বাইরের সোডিয়ামের সূক্ষ্ম ভারসাম্যের ওপর প্রতিষ্ঠিত [৪]। মস্তিষ্ক ও কিডনি প্রতিনিয়ত পিপাসা ও ভ্যাসোপ্রেসিন হরমোনের মাধ্যমে তরল সংরক্ষণ করে [২]। সঠিক পরিমাণে পানি ও লবণের সমন্বয় নিশ্চিত করে পানিশূন্যতাজনিত ক্লান্তি এবং অতিরিক্ত পানিজনিত হাইপোনাট্রিমিয়া উভয়ই প্রতিরোধ করা সম্ভব [১, ৩]।'
            ),
            l(
              'Urine color monitoring provides a reliable everyday assessment of fluid status, while oral rehydration therapy provides life-saving clinical restoration of fluid and electrolyte losses during gastrointestinal disease [1, 3, 4].',
              'প্রস্রাবের রঙ দেখে দৈনন্দিন পানির চাহিদা পূরণ করা যায়, আর ডায়রিয়াজনিত পানিশূন্যতায় খাবার স্যালাইন (ORS) হলো জীবনরক্ষার সবচেয়ে প্রমাণিত ও বিজ্ঞানসম্মত চিকিৎসা [১, ৩, ৪]।'
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
              'Total Body Water (TBW) represents 55% to 60% of total adult body mass, distributed across two primary thermodynamic compartments separated by semi-permeable cell membranes [4]. The Intracellular Fluid (ICF) constitutes two-thirds of TBW (~28 L in a 70-kg adult), while the Extracellular Fluid (ECF) encompasses one-third (~14 L) [4]. The ECF is further anatomically partitioned into the Interstitial Fluid (~10.5 L, three-quarters of ECF) and Intravascular Blood Plasma (~3.5 L, one-quarter of ECF) across capillary endothelial barriers [4].',
              'দেহের মোট জলীয় অংশ (TBW) প্রাপ্তবয়স্ক মানুষের ওজনের ৫৫% থেকে ৬০%, যা আধা-ভেদ্য কোষপর্দা দ্বারা দুটি প্রধান প্রকোষ্ঠে বিভক্ত [৪]। আন্তঃকোষীয় তরল (ICF) মোট পানির দুই-তৃতীয়াংশ (৭০ কেজি ওজনের ব্যক্তির ক্ষেত্রে প্রায় ২৮ লিটার) এবং বহিঃকোষীয় তরল (ECF) এক-তৃতীয়াংশ (প্রায় ১৪ লিটার) ধারণ করে [৪]। এই বহিঃকোষীয় তরল আবার কৈশিক জালিকার প্রাচীর দ্বারা ইন্টারস্টিশিয়াল ফ্লুইড (১০.৫ লিটার) এবং রক্তের প্লাজমায় (৩.৫ লিটার) বিভক্ত [৪]।'
            ),
            l(
              'Transcapillary fluid exchange between plasma and interstitial fluid is governed by the classical Starling equation: Net Filtration = Kf x [(Pc - Pi) - σ x (πc - πi)], where Pc and Pi represent capillary and interstitial hydrostatic pressures, and πc and πi denote capillary (colloid oncotic pressure, primarily driven by serum albumin) and interstitial oncotic pressures, with σ representing the vascular protein reflection coefficient [4].',
              'রক্তের প্লাজমা এবং ইন্টারস্টিশিয়াল তরলের মধ্যে তরল আদান-প্রদান স্টার্লিং সমীকরণ দ্বারা পরিচালিত হয়: নিট পরিস্রাবণ = Kf x [(Pc - Pi) - σ x (πc - πi)] [৪]। এখানে রক্তনালীর ভেতরের হাইড্রোস্ট্যাটিক চাপ পানি বাইরে ঠেলে দেয়, আর সিরাম অ্যালবুমিন দ্বারা তৈরি অনকোটিক চাপ পানিকে রক্তনালীর ভেতরে ধরে রাখে [৪]।'
            ),
            l(
              'The Gibbs-Donnan effect establishes that non-diffusible intracellular polyanionic proteins (carrying negative net charges) attract permeant cations, primarily potassium, generating an electrical membrane potential of -70 to -90 mV across mammalian plasma membranes [4].',
              'গিবস-ডনানের নিয়ম অনুযায়ী কোষের অভ্যন্তরে থাকা ঋণাত্মক প্রোটিন অণুগুলো ধনাত্মক পটাশিয়াম আয়নকে নিজের দিকে আকর্ষণ করে, যা প্রতিটি জীবন্ত কোষের পর্দায় -৭০ থেকে -৯০ মিলিভোল্টের এক প্রাকৃতিক বিশ্রামকালীন বিভব তৈরি করে [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Central Osmoreception & The AVP-Aquaporin-2 Signaling Axis', 'কেন্দ্রীয় অসমোরিসেপশন এবং AVP-অ্যাকোয়াপোরিন-২ সংকেত অক্ষ'),
          paragraphs: [
            l(
              'Plasma osmolality is maintained within a remarkably narrow physiological window of 285 to 295 mOsm/kg H2O [2]. Central osmoreceptors reside in circumventricular organs lacking a traditional blood-brain barrier, specifically the Organum Vasculosum of the Lamina Terminalis (OVLT) and the Subfornical Organ (SFO) [2]. Even a minimal 1% to 2% increase in effective plasma osmolality causes microscopic osmotic water efflux from osmoreceptive neurons, activating stretch-inactivated non-selective cation channels (TRPV4) to depolarize the cells and trigger neurohypophysial Arginine Vasopressin (AVP) secretion [2].',
              'রক্তের প্লাজমা অসমোলারিটি অত্যন্ত সংবেদনশীলভাবে ২৮৫ থেকে ২৯৫ mOsm/kg এর সংকীর্ণ সীমার মধ্যে নিয়ন্ত্রিত থাকে [২]। রক্ত-মস্তিষ্ক প্রাচীরবিহীন বিশেষ মস্তিষ্কের অংশ (OVLT ও SFO) রক্তের ঘনত্বের মাত্র ১–২% বৃদ্ধি পেলেই অসমোটিক টানে সংকুচিত হয়ে অ্যাকশন পটেনশিয়াল তৈরি করে এবং পিটুইটারি থেকে ভ্যাসোপ্রেসিন (AVP) নিঃসরণ ঘটায় [২]।'
            ),
            l(
              'Circulating AVP engages G-protein-coupled V2 receptors on the basolateral membrane of renal medullary collecting duct principal cells [2]. V2 receptor activation stimulates Gαs, activating adenylyl cyclase to elevate intracellular cyclic AMP (cAMP) and activate Protein Kinase A (PKA) [2]. PKA phosphorylates Serine-256 on the cytoplasmic tail of homotetrameric Aquaporin-2 (AQP2) water channels stored in subapical endosomes, triggering exocytic trafficking and insertion into the apical brush border [2]. Water is rapidly drawn down the corticomedullary osmotic gradient into hypertonic vasa recta, concentrating urine up to 1200 mOsm/kg [2].',
              'রক্তবাহিত AVP কিডনির সংগ্রাহী নালিকার কোষে V2 রিসেপ্টরে যুক্ত হয়ে cAMP ও প্রোটিন কাইনেজ-এ (PKA) সক্রিয় করে [২]। PKA অ্যাকোয়াপোরিন-২ (AQP2) চ্যানেলে ফসফেট যুক্ত করে এদের কোষের উপরিভাগে স্থাপন করে; ফলে মেডুলার উচ্চ অসমোটিক টানে প্রস্রাব থেকে পানি দ্রুত শোষিত হয়ে রক্তে ফিরে আসে এবং প্রস্রাবের ঘনত্ব ১২০০ mOsm/kg পর্যন্ত বৃদ্ধি পায় [২]।'
            ),
            l(
              'Upon rehydration, plasma osmolality drops, turning off AVP release. In the absence of PKA phosphorylation, AQP2 is rapidly ubiquitinated and endocytosed back into intracellular storage vesicles, rendering the collecting duct water-impermeable and permitting free water diuresis [2].',
              'পর্যাপ্ত পানি পানের পর রক্তের ঘনত্ব স্বাভাবিক হলে ভ্যাসোপ্রেসিন নিঃসরণ বন্ধ হয়ে যায়। সংগ্রাহী নালিকার অ্যাকোয়াপোরিন-২ চ্যানেলগুলো কোষের ভেতরে ঢুকে যায় এবং কিডনি পুনরায় পাতলা প্রস্রাব তৈরি করে অতিরিক্ত পানি দেহ থেকে বের করে দেয় [২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Volume Regulation: The RAAS Axis & Stoichiometric ORS Biophysics', 'আয়তন নিয়ন্ত্রণ: RAAS অক্ষ ও ওআরএসের স্টইকিওমেট্রিক বায়োফিজিক্স'),
          paragraphs: [
            l(
              'While osmoregulation guards plasma solute concentration, extracellular volume regulation safeguards effective circulating arterial blood volume (ECBV) [2, 4]. When renal perfusion pressure falls or macula densa luminal NaCl delivery decreases, juxtaglomerular granular cells secrete the protease renin [4]. Renin cleaves hepatic angiotensinogen into Angiotensin I, rapidly converted by pulmonary endothelial Angiotensin-Converting Enzyme (ACE) to Angiotensin II [4].',
              'অসমোরেগুলেশন রক্তের ঘনত্ব রক্ষা করলেও রেনিন-অ্যাঞ্জিওটেনসিন-অ্যালডোস্টেরন সিস্টেম (RAAS) রক্তনালীর মোট রক্তচাপ ও সঞ্চালন বজায় রাখে [২, ৪]। বৃক্কে রক্তপ্রবাহ বা লবণের ঘনত্ব কমে গেলে রেনিন এনজাইম নিঃসৃত হয়ে রক্তের অ্যাঞ্জিওটেনসিনোজেনকে অ্যাঞ্জিওটেনসিন-২ এ রূপান্তরিত করে [৪]।'
            ),
            l(
              'Angiotensin II stimulates the adrenal cortex zona glomerulosa to synthesize the mineralocorticoid aldosterone [4]. Aldosterone binds cytoplasmic mineralocorticoid receptors in principal cells, upregulating the transcription and apical membrane density of the Epithelial Sodium Channel (ENaC) and basolateral Na+/K+-ATPase, driving electroneutral sodium and water reabsorption while enhancing potassium (ROMK) and hydrogen secretion [4].',
              'অ্যাঞ্জিওটেনসিন-২ অ্যাড্রেনাল গ্রন্থি থেকে অ্যালডোস্টেরন হরমোন নিঃসরণ করায় [৪]। অ্যালডোস্টেরন সংগ্রাহী নালিকায় ENaC সোডিয়াম চ্যানেল এবং Na+/K+-ATPase পাম্পের সংখ্যা বাড়িয়ে দেয়; ফলে রক্তে সোডিয়াম ও পানি পুনঃশোষিত হয়ে রক্তচাপ বাড়ে এবং অতিরিক্ত পটাশিয়াম ও অ্যাসিড মূত্রের মাধ্যমে নির্গত হয় [৪]।'
            ),
            l(
              'Conversely, volume expansion stretches cardiac atria, triggering the release of Atrial Natriuretic Peptide (ANP). ANP binds guanylyl cyclase receptors in renal collecting ducts, elevating cGMP to close ENaC channels and inhibit renin release, provoking rapid natriuresis and diuresis [4].',
              'বিপরীতভাবে অতিরিক্ত রক্তচাপ বা তরল বৃদ্ধিতে হৃদপিণ্ডের অলিন্দ প্রসারিত হয়ে অ্যাট্রিয়াল নাট্রিউরেটিক পেপটাইড (ANP) নিঃসরণ করে। ANP কিডনির ENaC চ্যানেল বন্ধ করে দিয়ে দ্রুত প্রস্রাবের মাধ্যমে সোডিয়াম ও পানি বের করে দিয়ে অতিরিক্ত রক্তচাপ স্বাভাবিক করে [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Pathophysiology of Dehydration Classes & The Hyponatremia Hazard', 'পানিশূন্যতার শ্রেণিবিভাগ ও হাইপোনাট্রিমিয়ার জটিলতা'),
          paragraphs: [
            l(
              'Clinical dehydration is categorized into three distinct pathophysiological states based on relative solute versus water loss [1, 2, 5]. Isotonic dehydration entails proportional loss of sodium and water (e.g., uncomplicated secretory diarrhea or acute hemorrhage), preserving normal serum sodium (135–145 mEq/L) while contracting ECF volume without transcellular osmotic fluid shifts [1, 2, 5].',
              'ক্লিনিক্যাল পানিশূন্যতা তিন প্রকার: আইসোটনিক পানিশূন্যতায় পানি ও লবণ সমানুপাতিক হারে ক্ষয় হয় (যেমন সাধারণ ডায়রিয়া বা রক্তক্ষরণ), ফলে রক্তের সোডিয়াম স্বাভাবিক থাকে এবং কোষের ভেতর থেকে কোনো পানি স্থানান্তরিত হয় না [১, ২, ৫]।'
            ),
            l(
              'Hypertonic dehydration occurs when free water loss exceeds solute loss (e.g., profuse hypotonic sweating, diabetes insipidus), elevating serum sodium above 145 mEq/L and generating a hyperosmolar ECF that draws water out of brain cells, producing intracellular dehydration, lethargy, and intracranial hemorrhage [1, 2, 5]. Hypotonic dehydration arises when sodium loss exceeds water loss or when hypotonic fluids are excessively ingested during endurance exertion (Exercise-Associated Hyponatremia, [Na+] <135 mEq/L), shifting water into cerebral astrocytes and precipitating cerebral edema, uncal herniation, and death [1, 2, 5].',
              'হাইপারটনিক পানিশূন্যতায় লবণের চেয়ে পানির অপচয় বেশি হওয়ায় রক্ত অতিরিক্ত ঘন হয়ে যায় ([Na+] >১৪৫ mEq/L), ফলে ব্রেনের কোষ থেকে পানি বের হয়ে কোষ শুকিয়ে যায় [১, ২, ৫]। হাইপোটনিক পানিশূন্যতায় রক্তের সোডিয়াম কমে যাওয়ায় ([Na+] <১৩৫ mEq/L) রক্ত থেকে পানি সোজা ব্রেন কোষে ঢুকে যায়, যার ফলে ব্রেন ফুলে মারাত্মক খিঁচুনি ও মৃত্যু হতে পারে [১, ২, ৫]।'
            ),
            l(
              'In clinical practice, hyponatremia is categorized by extracellular volume status: hypovolemic (vomiting, burns, diuretics), euvolemic (Syndrome of Inappropriate ADH Secretion / SIADH), and hypervolemic (congestive heart failure, liver cirrhosis), each requiring distinct diagnostic workups and therapeutic protocols [2, 5].',
              'ক্লিনিক্যাল চিকিৎসায় হাইপোনাট্রিমিয়াকে তিন ভাগে বিভক্ত করা হয়: হাইপোভোলেমিক (বমি, পোড়া বা ডায়রিয়া), ইউভোলেমিক (SIADH রোগ), এবং হাইপারভোলেমিক (হার্ট ফেইলিউর বা লিভার সিরোসিস); এদের প্রতিটির চিকিৎসা কৌশল সম্পূর্ণ আলাদা [২, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Management of Hypotonic Crises & Stoichiometric ORS', 'হাইপোটনিক সংকটের চিকিৎসা ও ওআরএসের স্টইকিওমেট্রি'),
          paragraphs: [
            l(
              'Managing acute symptomatic hyponatremia with neurological compromise demands immediate emergency administration of 3% hypertonic saline (100 mL boluses) to raise serum sodium by 4 to 6 mEq/L and reverse cerebral herniation [2, 5]. However, in chronic hyponatremia (>48 hours), the rate of correction must never exceed 8 mEq/L in 24 hours to avoid Osmotic Demyelination Syndrome (ODS), which destroys the myelin sheath of pontine axons and produces spastic quadriplegia and locked-in syndrome [2, 5].',
              'তীব্র হাইপোনাট্রিমিয়ায় খিঁচুনি বা কোমা দেখা দিলে ৩% হাইপারটনিক স্যালাইন দিয়ে দ্রুত সোডিয়াম ৪–৬ mEq/L বাড়িয়ে ব্রেন রক্ষা করা হয় [২, ৫]। কিন্তু দীর্ঘস্থায়ী হাইপোনাট্রিমিয়ায় ২৪ ঘণ্টায় সোডিয়াম বৃদ্ধির হার কোনোভাবেই ৮ mEq/L এর বেশি হওয়া যাবে না; অন্যথায় পনস অঞ্চলের স্নায়ুর আবরণী ধ্বংস হয়ে স্থায়ী প্যারালাইসিস (লকড-ইন সিন্ড্রোম) দেখা দিতে পারে [২, ৫]।'
            ),
            l(
              'In enterotoxigenic diarrhea, the WHO Reduced-Osmolarity Oral Rehydration Solution (total osmolarity 245 mOsm/L) provides 75 mmol/L glucose, 75 mmol/L sodium, 65 mmol/L chloride, 20 mmol/L potassium, and 10 mmol/L citrate [3]. Because the brush-border Sodium-Glucose Cotransporter-1 (SGLT1) couples the inward movement of 2 sodium ions with 1 glucose molecule down its electrochemical gradient, equimolar luminal concentrations drive massive transcellular osmolyte uptake, pulling water along by solvent drag and restoring intravascular volume without intravenous access [3].',
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
              'Fluid homeostasis requires coordinated cross-talk between intracellular osmolyte gradients, central osmoreceptors (OVLT), neurohypophysial AVP-AQP2 signaling, and renal RAAS volume controls [2, 4]. SGLT1 stoichiometry underpins the life-saving efficacy of Oral Rehydration Salts [3]. Cautious, controlled correction of serum sodium is mandatory to avert catastrophic osmotic demyelination in chronic dysnatremias [1, 2, 5].',
              'তরল ভারসাম্য মূলত কোষীয় অসমোটিক চাপ, হাইপোথ্যালামাসের AVP-AQP2 সংকেত এবং কিডনির RAAS অক্ষের নিখুঁত সমন্বয়ে নিয়ন্ত্রিত হয় [২, ৪]। SGLT1 চ্যানেলের স্টইকিওমেট্রিক অনুপাতই খাবার স্যালাইনের (ORS) বিশ্বজোড়া জীবনরক্ষার ভিত্তি [৩]। দীর্ঘস্থায়ী হাইপোনাট্রিমিয়ায় সোডিয়াম বৃদ্ধির গতি সাবধানে নিয়ন্ত্রণ করে মস্তিষ্কের ধ্বংসাত্মক ক্ষতি এড়ানো চিকিৎসার অন্যতম প্রধান নীতি [১, ২, ৫]।'
            ),
            l(
              'In clinical fluid therapy, always differentiate tonicity disorders (regulated by water intake and vasopressin) from volume disorders (regulated by sodium balance and aldosterone) to select the appropriate intravenous or oral replacement strategy [2, 4, 5].',
              'চিকিৎসাক্ষেত্রে সর্বদা মনে রাখতে হবে: টনিসিটি বা ঘনত্বের সমস্যা নিয়ন্ত্রিত হয় পানি ও ভ্যাসোপ্রেসিন দ্বারা, আর রক্তের মোট আয়তনের সমস্যা নিয়ন্ত্রিত হয় সোডিয়াম ও অ্যালডোস্টেরন দ্বারা [২, ৪, ৫]।'
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
              'অ্যাকোয়াপোরিন চ্যানেলের পারমাণবিক ক্রিস্টালোগ্রাফি প্রমাণ করে যে এরা প্রতি সেকেন্ডে ৩০০ কোটিরও বেশি পানির অণু পরিবহন করতে পারে, অথচ প্রোটন কণাগুলোকে (H3O+) সম্পূর্ণ আটকে দিয়ে কোষের বৈদ্যুতিক বিভব রক্ষা করে [২, ৪]। চ্যানেলের কেন্দ্রে দুটি সংরক্ষিত NPA (অ্যাসপারাজিন-প্রোলিন-অ্যালানিন) মোটিফ অবস্থান করে যা পানির অণুকে উল্টে দিয়ে প্রোটন প্রবাহ বন্ধ করে দেয় [২]।',
            ),
            l(
              'The positive electrostatic dipole generated by the half-helices forces individual water molecules to rotate 180 degrees as they pass through the NPA constriction. Concurrently, an aromatic/arginine (ar/R) constriction filter located at the extracellular pore entrance forms a narrow 2.8-Angstrom steric bottleneck. The fixed positive charge on Arg-195 repels hydronium ions, preventing proton wire conduction via the classical Grotthuss mechanism [2, 4].',
              'NPA মোটিফের ধনাত্মক বৈদ্যুতিক ক্ষেত্র পানির অণুগুলোকে ১৮০ ডিগ্রি ঘুরিয়ে দেয়। এর সাথে চ্যানেলের মুখে অবস্থিত ২.৮ অ্যাংস্ট্রমের সংকীর্ণ ar/R ফিল্টারের ধনাত্মক আর্জিনিন আয়ন প্রোটন কণাগুলোকে বিকর্ষণ করে, ফলে গ্রোথাস মেকানিজমের মাধ্যমেও কোনো অ্যাসিড কণা কোষের ভেতরে ঢুকতে পারে না [২, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Molecular Genetics of Nephrogenic Diabetes Insipidus', 'নেফ্রোজেনিক ডায়াবেটিস ইনসিপিডাসের আণবিক জেনেটিক্স'),
          paragraphs: [
            l(
              'Nephrogenic Diabetes Insipidus (NDI) represents a profound failure of the renal collecting duct to concentrate urine despite normal or elevated circulating concentrations of vasopressin [2]. Approximately 90% of congenital NDI cases are caused by X-linked recessive mutations in the AVPR2 gene on chromosome Xq28, encoding the vasopressin V2 receptor [2]. Over 250 distinct missense, nonsense, and frameshift mutations disrupt V2R folding, causing mutant receptors to be trapped in the endoplasmic reticulum and targeted for ER-associated degradation (ERAD) [2].',
              'নেফ্রোজেনিক ডায়াবেটিস ইনসিপিডাস (NDI) হলো এমন একটি রোগ যেখানে রক্তে প্রচুর ভ্যাসোপ্রেসিন থাকা সত্ত্বেও কিডনি পানি ধরে রাখতে পারে না এবং রোগী দিনে ১৫–২০ লিটার প্রস্রাব করে [২]। প্রায় ৯০% ক্ষেত্রে এটি ক্রোমোজোম Xq28 এ অবস্থিত AVPR2 জিনের মিউটেশনের কারণে ঘটে; ফলে ত্রুটিপূর্ণ V2 রিসেপ্টর এন্ডোপ্লাজমিক রেটিকুলামে আটকে নষ্ট হয়ে যায় এবং কোষের উপরিভাগে পৌঁছাতে পারে না [২]।'
            ),
            l(
              'The remaining 10% of congenital cases arise from autosomal recessive or dominant mutations in the AQP2 gene on chromosome 12q13, causing either misfolding of the channel or disrupting the C-terminal Ser-256 phosphorylation site required for PKA recognition and apical targeting [2]. Emerging therapeutics investigate non-peptide cell-permeable pharmacochaperones that enter the ER to rescue misfolded V2 receptors, or phosphodiesterase-5 inhibitors (sildenafil) that elevate intracellular cGMP to bypass V2R and drive AQP2 apical shuttling directly [2].',
              'বাকি ১০% ক্ষেত্রে ক্রোমোজোম ১২q১৩ এ অবস্থিত AQP2 জিনের ত্রুটির কারণে সরাসরি পানির চ্যানেলগুলো নষ্ট হয়ে যায় [২]। আধুনিক গবেষণায় এমন ফার্মাকোলজিক্যাল চ্যাপেরন অণু নিয়ে কাজ চলছে যা কোষের ভেতরে ঢুকে ত্রুটিপূর্ণ রিসেপ্টরকে মেরামত করতে পারে, কিংবা সিলডেনাফিলের মতো ওষুধ ব্যবহার করে V2 রিসেপ্টর ছাড়াই cGMP এর মাধ্যমে অ্যাকোয়াপোরিন চ্যানেলগুলোকে সচল করা যায় [২]।'
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
              'In chronic hypotonic states, astrocytes adapt to protect intracranial pressure by extruding organic osmolytes through volume-regulated anion channels (VRAC, composed of LRRC8 heteromers) [2, 5]. The extrusion of taurine, myo-inositol, and glutamate drops intracellular osmolality to match the hypotonic ECF. Rapid reintroduction of hypertonic extracellular sodium triggers immediate cellular shrinkage and apoptosis of oligodendrocytes in the basis pontis, initiating the non-inflammatory myelinolytic necrosis that characterizes Osmotic Demyelination Syndrome [2, 5].',
              'হাইপোনাট্রিমিয়ায় মস্তিষ্ককে ফুলে যাওয়া থেকে বাঁচাতে অ্যাস্ট্রোসাইট কোষ VRAC চ্যানেলের মাধ্যমে টরিন ও গ্লুটামেট বের করে দেয় [২, ৫]। হঠাৎ রক্তে সোডিয়াম বাড়ালে কোষগুলো এত দ্রুত অসমোলাইট ফেরত নিতে পারে না; ফলে অসমোটিক টানে কোষের পানি বের হয়ে পনস অঞ্চলের স্নায়ু কোষের মৃত্যু ঘটে, যা অসমোটিক ডিমায়েলিনেশন সিন্ড্রোম তৈরি করে [২, ৫]।'
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
          ],
        },
        {
          id: 'takeaways',
          heading: l('Advanced Research Frontiers & Future Fluid Therapeutics', 'উন্নত গবেষণার দিগন্ত ও ভবিষ্যৎ তরল চিকিৎসা'),
          paragraphs: [
            l(
              'Hydration science has evolved beyond simplistic volume intake toward molecular biophysics: understanding nanoscale aquaporin selectivity filters, non-osmotic vasopressin triggers in elite endurance athletics, and the genetic underpinnings of pontine demyelination [2, 5, 6].',
              'আর্দ্রতা বিজ্ঞান সাধারণ পানি পানের হিসাবের বাইরে গিয়ে আণবিক বায়োফিজিক্সে রূপ নিয়েছে: ন্যানোস্কেল অ্যাকোয়াপোরিন চ্যানেলের সিলেক্টিভিটি, ক্রীড়াবিদদের নন-অসমোটিক ভ্যাসোপ্রেসিন সংকেত এবং মস্তিষ্কের ডিমায়েলিনেশন সিন্ড্রোমের প্রতিরোধ এখন আধুনিক চিকিৎসার মূল আলোচ্য [২, ৫, ৬]।',
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
