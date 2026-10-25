import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const malnutritionRefs = [
  {
    id: 'cederholm-clnu-glim-consensus-2019',
    authors: 'Tommy Cederholm, Gordon L. Jensen, Marta Correia, et al.',
    title: 'GLIM criteria for the diagnosis of malnutrition - A consensus report from the global clinical nutrition community',
    organization: 'Clinical Nutrition',
    year: 2019,
    url: 'https://doi.org/10.1016/j.clnu.2018.08.002',
    doi: '10.1016/j.clnu.2018.08.002',
  },
  {
    id: 'fearon-lancet-oncol-cachexia-2011',
    authors: 'Kenneth Fearon, Florian Strasser, Stefan D. Anker, et al.',
    title: 'Definition and classification of cancer cachexia: an international consensus statement',
    organization: 'The Lancet Oncology',
    year: 2011,
    url: 'https://doi.org/10.1016/S1470-2045(10)70218-7',
    doi: '10.1016/S1470-2045(10)70218-7',
  },
  {
    id: 'mehanna-bmj-refeeding-syndrome-2008',
    authors: 'Hisham M. Mehanna, J. Moledina, J. Travis',
    title: 'Refeeding syndrome: what it is, and how to prevent and treat it',
    organization: 'BMJ',
    year: 2008,
    url: 'https://doi.org/10.1136/bmj.a301',
    doi: '10.1136/bmj.a301',
  },
  {
    id: 'singer-clnu-espen-icu-nutrition-2019',
    authors: 'Pierre Singer, Annika Reintam Blaser, Mette M. Berger, et al.',
    title: 'ESPEN guideline on clinical nutrition in the intensive care unit',
    organization: 'Clinical Nutrition',
    year: 2019,
    url: 'https://doi.org/10.1016/j.clnu.2018.08.037',
    doi: '10.1016/j.clnu.2018.08.037',
  },
  {
    id: 'mcclave-jpen-aspen-icu-guidelines-2016',
    authors: 'Stephen A. McClave, Beth E. Taylor, Robert G. Martindale, et al.',
    title: 'Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient: SCCM and A.S.P.E.N.',
    organization: 'JPEN Journal of Parenteral and Enteral Nutrition',
    year: 2016,
    url: 'https://doi.org/10.1177/0148607115621863',
    doi: '10.1177/0148607115621863',
  },
  {
    id: 'friedli-clnu-refeeding-systematic-review-2017',
    authors: 'Nina Friedli, Zeno Stanga, Pascal Tribolet, et al.',
    title: 'Systematic review and meta-analysis of refeeding syndrome in medical inpatients',
    organization: 'Clinical Nutrition',
    year: 2017,
    url: 'https://doi.org/10.1016/j.clnu.2017.05.005',
    doi: '10.1016/j.clnu.2017.05.005',
  },
]

export const nutrition22ClinicalMalnutritionLesson: LessonTopic = {
  id: 'topic.nutrition.clinical-malnutrition-enteral-parenteral',
  slug: 'clinical-malnutrition-enteral-parenteral',
  version: 1,
  updatedAt: '2026-10-25',
  title: l(
    '22 · Clinical Malnutrition, Protein-Energy Wasting & Nutritional Support',
    '২২ · ক্লিনিক্যাল অপুষ্টি, প্রোটিন-শক্তি অপচয় ও কৃত্রিম পুষ্টি সহায়তা'
  ),
  summary: l(
    'Evidence-based clinical nutrition and metabolic support: GLIM diagnostic consensus criteria, molecular mechanisms of starvation versus cancer cachexia (ubiquitin-proteasome degradation, uncoupled thermogenesis), the molecular pathophysiology and prevention of refeeding syndrome, and clinical guidelines for enteral versus parenteral nutrition.',
    'প্রমাণভিত্তিক ক্লিনিক্যাল পুষ্টিবিজ্ঞান ও কৃত্রিম পুষ্টি সহায়তা: অপুষ্টি নির্ণয়ে গ্লিম (GLIM) ঐকমত্য পদ্ধতি, অনাহার বনাম ক্যান্সার ক্যাক্সিয়ার আণবিক প্রক্রিয়া (ইউবিকুইটিন-প্রোটিসোম ক্ষয়, অনিয়ন্ত্রিত থার্মোজেনেসিস), রিফিডিং সিন্ড্রোমের আণবিক কারণ ও চিকিৎসা এবং এন্টারাল বনাম প্যারেন্টেরাল পুষ্টির ক্লিনিক্যাল নির্দেশিকা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
  objectives: [
    l(
      'Apply the two-step GLIM diagnostic framework: identify initial screening triggers and confirm clinical malnutrition using combined phenotypic criteria (weight loss, low BMI, reduced muscle mass) and etiologic criteria (reduced food intake/assimilation, systemic inflammation).',
      'গ্লিম (GLIM) দুই-ধাপের আন্তর্জাতিক নির্ণায়ক পদ্ধতি প্রয়োগ করা: প্রাথমিক স্ক্রিনিং সম্পন্ন করে ফেনোটাইপিক মানদণ্ড (ওজন হ্রাস, কম বিএমআই, পেশিক্ষয়) এবং এটিওলজিক মানদণ্ড (খাদ্য গ্রহণে ঘাটতি, সিস্টেমিক প্রদাহ) সমন্বয়ে ক্লিনিক্যাল অপুষ্টি শনাক্ত করা।'
    ),
    l(
      'Differentiate the bioenergetics and signaling pathways of simple starvation, primary age-related sarcopenia, and cytokine-driven disease-related cachexia involving TNF-alpha, IL-6, and ubiquitin-proteasome hypercatabolism.',
      'সাধারণ অনাহার, বার্ধক্যজনিত সারকোপেনিয়া এবং সাইটোকাইন-চালিত রোগজনিত ক্যাক্সিয়ার বিপাকীয় পথ ও জৈবরাসায়নিক পার্থক্য বিশ্লেষণ করা, যার মধ্যে টিএনএফ-আলফা, ইন্টারলিউকিন-৬ এবং ইউবিকুইটিন-প্রোটিসোম হাইপারক্যাটাবলিজম অন্তর্ভুক্ত।'
    ),
    l(
      'Deconstruct the molecular pathophysiology of refeeding syndrome: elucidate how carbohydrate reintroduction drives insulin surges, rapid cellular uptake of phosphate, potassium, and magnesium, ATP depletion, and acute cardiopulmonary collapse.',
      'রিফিডিং সিন্ড্রোমের আণবিক রোগশারীরবৃত্ত বিশ্লেষণ করা: কার্বোহাইড্রেট পুনরায় গ্রহণের ফলে কীভাবে তীব্র ইনসুলিন নিঃসরণ ঘটে এবং ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম কোষে ঢুকে এটিপি সংকট ও আকস্মিক হৃদযন্ত্র-ফুসফুসের ব্যর্থতা তৈরি করে তা ব্যাখ্যা করা।'
    ),
    l(
      'Design safe refeeding protocols for severely malnourished inpatients: execute prophylactic thiamine dosing, baseline electrolyte correction, cautious hypocaloric caloric initiation (10 kcal/kg/day), and daily laboratory monitoring.',
      'তীব্র অপুষ্টির রোগীদের জন্য নিরাপদ রিফিডিং প্রোটোকল তৈরি করা: খাদ্য শুরুর পূর্বেই থায়ামিন প্রয়োগ, ইলেক্ট্রোলাইট সংশোধন, নিয়ন্ত্রিত কম-ক্যালোরি (১০ কিলোক্যালোরি/কেজি/দিন) শুরু এবং নিয়মিত ল্যাবরেটরি মনিটরিং নিশ্চিত করা।'
    ),
    l(
      'Formulate evidence-based clinical algorithms for nutritional support: delineate indications for enteral nutrition (EN) to protect gut barrier integrity versus parenteral nutrition (PN) in gastrointestinal failure, managing associated complications like IFALD.',
      'কৃত্রিম পুষ্টি সহায়তার প্রমাণভিত্তিক সিদ্ধান্ত গ্রহণ করা: অন্ত্রের মিউকোসা সুরক্ষায় এন্টারাল পুষ্টির (EN) শ্রেষ্ঠত্ব এবং পরিপাকনালি অকার্যকর হলে সেন্ট্রাল প্যারেন্টেরাল পুষ্টির (PN) সঠিক প্রয়োগ ও লিভারের জটিলতা (IFALD) প্রতিরোধ কৌশল নির্ধারণ করা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.energy-balance-tdee', 'topic.nutrition.protein-quality-diaas-nitrogen-balance'],
  relatedTopicIds: ['topic.metabolism.fed-fasted-starvation-states', 'topic.metabolism.amino-acid-catabolism-urea'],
  references: malnutritionRefs,
  evidenceBySection: {
    introduction: ['cederholm-clnu-glim-consensus-2019', 'fearon-lancet-oncol-cachexia-2011'],
    structure: ['fearon-lancet-oncol-cachexia-2011', 'cederholm-clnu-glim-consensus-2019'],
    mechanism: ['mehanna-bmj-refeeding-syndrome-2008', 'friedli-clnu-refeeding-systematic-review-2017'],
    integration: ['singer-clnu-espen-icu-nutrition-2019', 'mcclave-jpen-aspen-icu-guidelines-2016'],
    practice: ['singer-clnu-espen-icu-nutrition-2019', 'mehanna-bmj-refeeding-syndrome-2008'],
    takeaways: ['cederholm-clnu-glim-consensus-2019', 'singer-clnu-espen-icu-nutrition-2019'],
  },
  chapter: {
    toc: [
      { id: 'sec-glim', label: l('1. GLIM Consensus Framework: Phenotypic & Etiologic Diagnostic Architecture', '১. গ্লিম (GLIM) ঐকমত্য ফ্রেমওয়ার্ক: ফেনোটাইপিক ও এটিওলজিক নির্ণয় কাঠামো'), sectionId: 'introduction' },
      { id: 'sec-cachexia', label: l('2. Simple Starvation vs Sarcopenia vs Cytokine-Driven Cachexia', '২. সাধারণ অনাহার বনাম সারকোপেনিয়া বনাম প্রদাহজনিত ক্যাক্সিয়া'), sectionId: 'structure' },
      { id: 'sec-refeeding', label: l('3. Pathophysiology of Refeeding Syndrome: Hypophosphatemia & Thiamine Kinetics', '৩. রিফিডিং সিন্ড্রোমের রোগশারীরবৃত্ত: মারাত্মক হাইপোফসফেটেমিয়া ও থায়ামিন গতিবিদ্যা'), sectionId: 'mechanism' },
      { id: 'sec-en-pn', label: l('4. Enteral vs Parenteral Support: Gut Integrity, Access Routes & Formulas', '৪. এন্টারাল বনাম প্যারেন্টেরাল পুষ্টি: অন্ত্রের মিউকোসা, নল স্থাপনের পথ ও ফর্মুলা'), sectionId: 'integration' },
      { id: 'sec-protocol', label: l('5. Clinical Energy & Protein Titration, Monitoring & Complication Management', '৫. শক্তি ও প্রোটিন টাইট্রেশন, মনিটরিং এবং জটিলতা ব্যবস্থাপনা প্রোটোকল'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Global Leadership Initiative on Malnutrition (GLIM)', 'গ্লোবাল লিডারশিপ ইনিশিয়েটিভ অন ম্যালনিউট্রিশন (GLIM)'),
        definition: l(
          'An international consensus diagnostic framework requiring a validated initial screening step followed by the mandatory coexistence of at least one phenotypic criterion (weight loss, low BMI, reduced muscle mass) and at least one etiologic criterion (reduced intake/assimilation, inflammation/disease burden) [1].',
          'ক্লিনিক্যাল অপুষ্টি নির্ণয়ের আন্তর্জাতিক ঐকমত্য ফ্রেমওয়ার্ক, যেখানে প্রাথমিক স্ক্রিনিংয়ের পর অন্তত একটি ফেনোটাইপিক মানদণ্ড (ওজন হ্রাস, কম বিএমআই, পেশিক্ষয়) এবং অন্তত একটি এটিওলজিক মানদণ্ড (খাদ্যগ্রহণে ঘাটতি, তীব্র বা দীর্ঘস্থায়ী প্রদাহ) নিশ্চিত করা বাধ্যতামূলক [১]।'
        ),
      },
      {
        term: l('Cancer & Disease-Related Cachexia', 'ক্যান্সার ও রোগজনিত জটিল ক্যাক্সিয়া (Cachexia)'),
        definition: l(
          'A multifactorial metabolic wasting syndrome characterized by ongoing loss of skeletal muscle mass (with or without loss of fat mass) that cannot be fully reversed by conventional nutritional support and is driven by pro-inflammatory cytokines, hypercatabolism, and proteasome activation [2].',
          'একটি বহুধা জটিল বিপাকীয় অপচয় সিন্ড্রোম যা কঙ্কালপেশির অনিচ্ছাকৃত ক্ষয় দ্বারা চিহ্নিত (চর্বি হ্রাসসহ বা ছাড়া); এটি সাধারণ ক্যালোরি সমৃদ্ধ খাবারে পুরোপুরি দূর হয় না এবং টিএনএফ-আলফা ও ইন্টারলিউকিন-৬ এর মতো প্রদাহজনক সাইটোকাইন ও প্রোটিসোম ধ্বংসক্রিয়ার মাধ্যমে চালিত হয় [২]।'
        ),
      },
      {
        term: l('Age-Related Sarcopenia', 'বার্ধক্যজনিত পেশিক্ষয় বা সারকোপেনিয়া (Sarcopenia)'),
        definition: l(
          'A progressive and generalized skeletal muscle disorder involving accelerated loss of muscle mass, quality, and physical performance, primarily driven by anabolic resistance to dietary amino acids, mitochondrial decay, denervation, and blunted postprandial mTORC1 signaling without obligate systemic inflammation [1, 2].',
          'বয়সবৃদ্ধির সাথে কঙ্কালপেশির ভর, শক্তি এবং কার্যকর ক্ষমতার প্রগতিশীল ক্ষয়রোগ; এটি মূলত খাদ্য প্রোটিনের প্রতি পেশিকোষের অ্যানাবলিক রেজিস্ট্যান্স, মাইটোকন্ড্রিয়াল দুর্বলতা এবং এমটরসি১ (mTORC1) সংকেতের কার্যকারিতা কমে যাওয়ার ফলে ঘটে, যা তীব্র প্রদাহ ছাড়াও বিস্তার লাভ করতে পারে [১, ২]।'
        ),
      },
      {
        term: l('Refeeding Syndrome (RFS)', 'রিফিডিং সিন্ড্রোম (RFS)'),
        definition: l(
          'A potentially lethal constellation of metabolic disturbances occurring within hours to days of reintroducing carbohydrates to severely starved or malnourished patients, characterized by profound hypophosphatemia, hypokalemia, hypomagnesemia, thiamine deficiency, fluid overload, and cardiac failure [3, 6].',
          'তীব্র অপুষ্টি বা অনাহারে থাকা রোগীকে আকস্মিক কার্বোহাইড্রেট বা ক্যালোরিযুক্ত খাবার দেওয়ার ফলে কয়েক ঘণ্টার মধ্যে শুরু হওয়া প্রাণঘাতী বিপাকীয় সংকট; যা রক্তে ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়ামের মারাত্মক পতন, থায়ামিন সংকট এবং আকস্মিক হৃদযন্ত্রের ব্যর্থতা সৃষ্টি করে [৩, ৬]।'
        ),
      },
      {
        term: l('Enteral Nutrition (EN)', 'এন্টারাল পুষ্টি বা নল দিয়ে পুষ্টি (Enteral Nutrition)'),
        definition: l(
          'The delivery of nutritionally complete liquid formulas directly into the gastrointestinal tract via tube access (nasogastric, nasojejunal, PEG, PEJ), preserving mucosal villus height, maintaining tight junction integrity, stimulating secretory IgA, and preventing bacterial translocation [4, 5].',
          'পরিপাকনালির ভেতর নলের মাধ্যমে (ন্যাসোগ্যাস্ট্রিক, পিইজি ইত্যাদি) তরল সুষম পুষ্টি ফর্মুলা সরাসরি সরবরাহ করা; যা অন্ত্রের ভিলাসের দৈর্ঘ্য বজায় রাখে, টাইট জাংশন রক্ষা করে, রোগপ্রতিরোধী সিক্রেটরি আইজিএ (sIgA) ক্ষরণ বাড়ায় এবং ব্যাকটেরিয়ার রক্তে ছড়িয়ে পড়া প্রতিহত করে [৪, ৫]।'
        ),
      },
      {
        term: l('Total Parenteral Nutrition (TPN) & IFALD', 'টোটাল প্যারেন্টেরাল পুষ্টি (TPN) ও আইফাল্ড (IFALD)'),
        definition: l(
          'The intravenous infusion of hypertonic hyperosmolar macro- and micronutrients through a dedicated central venous catheter for intestinal failure, carrying risks of catheter sepsis, metabolic bone disease, and intestinal failure-associated liver disease (IFALD) due to enteral disuse and continuous glucose-lipid infusion [4, 5].',
          'অন্ত্র সম্পূর্ণরূপে অকার্যকর থাকলে সেন্ট্রাল শিরার মাধ্যমে সরাসরি রক্তে ঘন গ্লুকোজ, অ্যামিনো অ্যাসিড ও লিপিডের দ্রবণ প্রয়োগ; দীর্ঘমেয়াদে অন্ত্রের ব্যবহার না থাকা এবং অবিরাম গ্লুকোজ-চর্বি ইনফিউশনের কারণে এটি লিভারে চর্বি জমা ও কোলেস্ট্যাসিস (IFALD) এবং ইনফেকশনের ঝুঁকি তৈরি করে [৪, ৫]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Clinical Example 1: Refeeding Syndrome Risk Stratification & Caloric Titration in Severe Anorexia Nervosa',
          'ক্লিনিক্যাল উদাহরণ ১: তীব্র অ্যানোরেক্সিয়া নার্ভোসায় রিফিডিং সিন্ড্রোম ঝুঁকি নিরূপণ ও ক্যালোরি টাইট্রেশন'
        ),
        steps: [
          l(
            'Step 1: Clinical Phenotyping & NICE/ESPEN Refeeding Risk Stratification: A 22-year-old female with severe restricting anorexia nervosa presents with weight 34.0 kg, height 1.62 m (BMI 13.0 kg/m²), sinus bradycardia (42 bpm), blood pressure 82/50 mmHg, and starvation intake < 250 kcal/day for 21 days. Serum K+ is 3.1 mmol/L, PO4 0.72 mmol/L, and Mg2+ 0.68 mmol/L. These metrics fulfill extreme high-risk criteria under NICE/ESPEN guidelines; starting standard caloric feeding (> 25 kcal/kg) would trigger a massive insulin surge driving remaining electrolytes into cells, precipitating fatal cardiac arrest.',
            'ধাপ ১: রোগীর শারীরিক মূল্যায়ন ও নিস/এসপেন মানদণ্ডে রিফিডিং ঝুঁকির মাত্রা নিরূপণ: তীব্র অ্যানোরেক্সিয়ায় আক্রান্ত ২২ বছর বয়সী তরুণীর ওজন ৩৪ কেজি (বিএমআই ১৩.০), হার্ট রেট ৪২ ও রক্তচাপ ৮২/৫০। তিনি ২১ দিন ধরে দিনে ২৫০ ক্যালোরির কম গ্রহণ করছেন এবং রক্তে পটাশিয়াম (৩.১) ও ম্যাগনেসিয়াম (০.৬৮) মারাত্মক কম। এই রোগী রিফিডিং সিন্ড্রোমের চরম উচ্চ ঝুঁকিতে আছেন; হঠাৎ সাধারণ খাবার দিলে ইনসুলিনের বন্যায় অবশিষ্ট খনিজ কোষে ঢুকে হার্ট অ্যাটাকে মৃত্যু হতে পারে।'
          ),
          l(
            'Step 2: Prophylactic Micronutrient & High-Dose Thiamine Administration Prior to Feeding: Prior to delivering any caloric nutrition or intravenous dextrose, administer high-dose intravenous thiamine (200 to 300 mg) along with balanced B-complex vitamins and trace minerals. Thiamine is the obligatory pyrophosphate cofactor for pyruvate dehydrogenase (PDH) and alpha-ketoglutarate dehydrogenase; carbohydrate infusion without thiamine stalls PDH, shunting pyruvate into lactate dehydrogenase and triggering catastrophic type B lactic acidosis and acute Wernicke encephalopathy.',
            'ধাপ ২: ক্যালোরি শুরুর পূর্বেই প্রোফাইল্যাক্টিক থায়ামিন ও ভিটামিন বি-কমপ্লেক্স প্রয়োগ: কোনো খাবার বা গ্লুকোজ স্যালাইন দেওয়ার আগেই ২০০-৩০০ মিলিগ্রাম থায়ামিন ইনজেকশন দিতে হবে। থায়ামিন হলো পাইরুভেট ডিহাইড্রোজিনেজ এনজাইমের অপরিহার্য কোফ্যাক্টর। থায়ামিন ছাড়া খাবার দিলে রক্তে ল্যাকটিক অ্যাসিডের বন্যা বইয়ে দেবে এবং মস্তিষ্কের মারাত্মক ওয়ার্নিকি এনসেফালোপ্যাথি ঘটাবে।'
          ),
          l(
            'Step 3: Hypocaloric Caloric Initiation and Gradual Titration: Restrict initial caloric intake to 10 kcal/kg actual body weight per day (10 * 34 kg = 340 kcal/day) divided over 24 hours (approx. 14 kcal/hour) via continuous nasogastric formula or small frequent meals with 40-50% carbohydrate, 30-40% fat, and 15-20% protein (1.0-1.2 g/kg/day = 34-41 g protein/day). Calories are advanced slowly by 200 kcal/day every 48 hours only if electrolytes remain stable, reaching goal calories (30-35 kcal/kg/day = 1,020-1,190 kcal/day) by Day 7.',
            'ধাপ ৩: নিয়ন্ত্রিত কম-ক্যালোরি (১০ ক্যালোরি/কেজি) দিয়ে শুরু ও ধাপে ধাপে বৃদ্ধি: প্রথম ১ ও ২ দিনে ক্যালোরির পরিমাণ রোগীর ওজনের ভিত্তিতে প্রতি কেজিতে সর্বোচ্চ ১০ কিলোক্যালোরিতে কঠোরভাবে সীমাবদ্ধ রাখতে হবে (১০ * ৩৪ = ৩৪০ ক্যালোরি/দিন)। এটি দিনে সমান ভাগে ভাগ করে দিতে হবে। রক্তে ইলেক্ট্রোলাইটের মাত্রা স্থিতিশীল থাকলে প্রতি ৪৮ ঘণ্টা পর পর ২০০ ক্যালোরি করে বৃদ্ধি করে ৭ম দিনের মধ্যে পূর্ণ লক্ষ্যমাত্রায় (৩০-৩৫ ক্যালোরি/কেজি) পৌঁছাতে হবে।'
          ),
          l(
            'Step 4: Active Electrolyte Replacement & Continuous Cardiac Telemetry: Correct baseline hypokalemia (target serum K+ 4.0-4.5 mmol/L) and hypomagnesemia (target serum Mg2+ > 0.8 mmol/L) with intravenous or oral replacement. Provide prophylactic sodium/potassium phosphate (20-30 mmol/day). Measure serum phosphate, potassium, magnesium, and calcium every 12 hours for 72 hours, maintaining continuous ECG telemetry to detect QTc prolongation, PR interval widening, or ventricular ectopy.',
            'ধাপ ৪: সক্রিয় ইলেক্ট্রোলাইট প্রতিস্থাপন ও সার্বক্ষণিক কার্ডিয়াক টেলিমেট্রি মনিটরিং: রোগীর প্রারম্ভিক পটাশিয়াম ও ম্যাগনেসিয়াম ঘাটতি পূরণ করতে হবে। পটাশিয়াম ৪.০-৪.৫ মিলিমিটার এবং ম্যাগনেসিয়াম ০.৮ মিলিমিটারের উপরে রাখার লক্ষ্যে শিরাপথে ওষুধ দিতে হবে। সাথে ফসফেট ২০-৩০ মিলিমোল সরবরাহ করতে হবে। প্রথম ৭২ ঘণ্টা প্রতি ১২ ঘণ্টা পর পর রক্ত পরীক্ষা করতে হবে এবং ইসিজি মনিটরে হার্ট রিদম পর্যবেক্ষণ করতে হবে যেন কোনো মারাত্মক অ্যারিথমিয়া না ঘটে।'
          ),
        ],
        conclusion: l(
          'By restricting initial caloric intake to 10 kcal/kg/day (340 kcal/day), administering prophylactic thiamine prior to feeding, pre-emptively correcting serum phosphate, potassium, and magnesium, and maintaining continuous telemetry, the patient safely navigates the critical refeeding window without developing cardiac arrest, acute pulmonary edema, or Wernicke encephalopathy [3, 6].',
          'শুরুতেই প্রতি কেজিতে মাত্র ১০ ক্যালোরি (৩৪০ ক্যালোরি/দিন) নির্ধারণ, খাবার শুরুর আগেই থায়ামিন ইনজেকশন, ফসফেট ও পটাশিয়ামের আগাম সংশোধন এবং সার্বক্ষণিক ইসিজি পর্যবেক্ষণের মাধ্যমে তরুণীটি কোনো হার্ট ফেইলিউর বা মারাত্মক মস্তিষ্কের ক্ষতি ছাড়াই সংকটাপন্ন ধাপটি সাফল্যের সাথে অতিক্রম করেন [৩, ৬]।'
        ),
      },
      {
        title: l(
          'Clinical Example 2: Critical Care Enteral Nutrition Support Prescription & Nitrogen Balance Calculation',
          'ক্লিনিক্যাল উদাহরণ ২: আইসিইউতে সংকটজনক রোগীর এন্টারাল পুষ্টি ব্যবস্থাপত্র ও নাইট্রোজেন ভারসাম্য হিসাব'
        ),
        steps: [
          l(
            'Step 1: Clinical Assessment & Caloric/Protein Demand Formulation: A 58-year-old male with septic shock secondary to perforated diverticulitis is intubated on Day 3 post-laparotomy (weight 80 kg, BMI 25.2 kg/m²). Sepsis is hemodynamically stabilizing (noradrenaline 0.06 mcg/kg/min, lactate 1.4 mmol/L). A 24-hour urine collection reveals 22 grams of urinary urea nitrogen (UUN). Per ESPEN guidelines, target energy for the acute phase of sepsis is 20-25 kcal/kg/day (25 * 80 kg = 2,000 kcal/day), and target protein is 1.3-1.5 g/kg/day (1.5 * 80 kg = 120 g protein/day) to attenuate hypercatabolic muscle wasting.',
            'ধাপ ১: রোগীর অবস্থা মূল্যায়ন এবং ক্যালোরি ও প্রোটিন চাহিদা নির্ধারণ: সেপটিক শকে আক্রান্ত ৫৮ বছর বয়সী পুরুষ জরুরি অপারেশনের পর আইসিইউতে আছেন (ওজন ৮০ কেজি)। রক্তচাপ স্থিতিশীল (ল্যাকটেট ১.৪)। ২৪ ঘণ্টার মূত্র পরীক্ষায় ইউরিয়া নাইট্রোজেন (UUN) নির্গমন পাওয়া গেছে ২২ গ্রাম। এসপেন নির্দেশিকা অনুযায়ী সেপসিসের তীব্র দশায় শক্তির লক্ষ্যমাত্রা ২৫ ক্যালোরি/কেজি (২,০০০ ক্যালোরি/দিন) এবং প্রোটিনের লক্ষ্যমাত্রা ১.৫ গ্রাম/কেজি (১২০ গ্রাম প্রোটিন/দিন) নির্ধারণ করা হলো।'
          ),
          l(
            'Step 2: Formula Selection & Volumetric Delivery Calculation: Select a calorie-dense 1.5 kcal/mL polymeric formula providing 75 g protein/L with 76% free water. Required daily volume = 2,000 kcal / 1.5 kcal/mL = 1,333 mL/day. At continuous pump infusion over 24 hours, set rate to 55 mL/hr (delivering 1,320 mL = 1,980 kcal/day and 99 g protein/day). To reach the 120 g target, add an enteral modular whey protein booster (21 g protein dissolved in water flushes).',
            'ধাপ ২: বিশেষায়িত ফর্মুলা নির্বাচন এবং প্রতি ঘণ্টার ইনফিউশন রেট হিসাব: একটি উচ্চ প্রোটিনযুক্ত ১.৫ ক্যালোরি/মিলি ফর্মুলা বেছে নেওয়া হলো, যার প্রতি লিটারে ৭৫ গ্রাম প্রোটিন রয়েছে। ২,০০০ ক্যালোরির জন্য মোট তরল লাগবে ১,৩৩৩ মিলি/দিন। পাম্পের স্পিড হবে ৫৫ মিলি/ঘণ্টা (৫৫ * ২৪ = ১,৩২০ মিলি = ১,৯৮০ ক্যালোরি ও ৯৯ গ্রাম প্রোটিন)। ১২০ গ্রামের লক্ষ্যমাত্রা ছুঁতে অতিরিক্ত ২১ গ্রাম প্রোটিন মডুলার ফ্লাশের মাধ্যমে দেওয়া হলো।'
          ),
          l(
            'Step 3: Measure Nitrogen Intake & Excretion Kinetics: Protein is 16% nitrogen (1 g N per 6.25 g protein). Daily Nitrogen Intake = 120 g / 6.25 = 19.2 g N/day. Nitrogen Excretion = 24-hr UUN (22 g) + 4 g (representing unmeasured non-urea urinary losses and insensible fecal/dermal losses) = 26 g N/day.',
            'ধাপ ৩: নাইট্রোজেন গ্রহণ ও নির্গমন পরিমাপ: খাদ্য প্রোটিনে প্রায় ১৬% নাইট্রোজেন থাকে (প্রতি ৬.২৫ গ্রাম প্রোটিনে ১ গ্রাম নাইট্রোজেন)। ১২০ গ্রাম প্রোটিন থেকে সংগৃহীত নাইট্রোজেন = ১২০ / ৬.২৫ = ১৯.২ গ্রাম/দিন। শরীর থেকে মোট নাইট্রোজেন নির্গমন = মূত্রের ইউরিয়া নাইট্রোজেন (UUN) ২২ গ্রাম + ত্বক, মল ও অন্যান্য ক্ষতি বাবদ ৪ গ্রাম = মোট ২৬ গ্রাম নাইট্রোজেন/দিন।'
          ),
          l(
            'Step 4: Compute Nitrogen Balance & Catabolic Assessment: Nitrogen Balance = Nitrogen Intake (19.2 g) - Nitrogen Loss (26.0 g) = -6.8 g N/day. A negative balance of -6.8 g indicates net whole-body catabolism equivalent to the loss of 42.5 g body protein or ~212 g wet lean muscle tissue daily. In hypercatabolic sepsis driven by TNF-alpha, overfeeding to force positive balance risks azotemia and steatosis; 1.5 g/kg protein attenuates proteolysis safely.',
            'ধাপ ৪: নাইট্রোজেন ভারসাম্য নিরূপণ ও ক্লিনিক্যাল তাৎপর্য: নাইট্রোজেন ভারসাম্য = গ্রহণ (১৯.২) - নির্গমন (২৬.০) = -৬.৮ গ্রাম/দিন। এই ঋণাত্মক মান প্রমাণ করে দিনে প্রায় ২১২ গ্রাম পেশি ক্ষয় হচ্ছে। সেপসিসের তীব্র প্রদাহে জোর করে অতিরিক্ত খাবার দিয়ে ভারসাম্য পজিটিভ করা যায় না, বরং তা লিভার ও কিডনিতে বিষাক্ত চাপ তৈরি করে; তাই ১.৫ গ্রাম/কেজি প্রোটিন দেওয়াই মাংসপেশির অপচয় সর্বনিম্ন রাখার সবচেয়ে নিরাপদ মাত্রা।'
          ),
        ],
        conclusion: l(
          'Initiating early continuous enteral nutrition at 55 mL/hr of a 1.5 kcal/mL high-protein formula with a 21 g modular protein booster successfully delivers 1,980 kcal and 120 g protein, preserving intestinal mucosal integrity, preventing bacterial translocation, and minimizing muscle wasting during hypercatabolic sepsis [4, 5].',
          '৫৫ মিলি/ঘণ্টা গতিতে বিশেষায়িত এন্টারাল ফিডিং এবং প্রোটিন বুস্টার প্রয়োগের মাধ্যমে দৈনিক ১,৯৮০ ক্যালোরি ও ১২০ গ্রাম প্রোটিন নিশ্চিত করা হয়েছে, যা অন্ত্রের জীবাণু প্রতিরোধ প্রাচীর অক্ষুণ্ণ রাখে এবং মারাত্মক ইনফেকশনে মাংসপেশির অপচয় সর্বনিম্ন রাখতে সক্ষম হয় [৪, ৫]।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What are the mandatory components of the two-step GLIM framework for diagnosing clinical malnutrition?',
          'ক্লিনিক্যাল অপুষ্টি শনাক্তকরণে গ্লিম (GLIM) দুই-ধাপের ঐকমত্য পদ্ধতির আবশ্যক উপাদানগুলো কী কী?'
        ),
        answer: l(
          'The first step requires initial screening using a validated tool (e.g., MUST, NRS-2002, or SGA) to identify nutritional risk. Once risk is established, the second diagnostic step requires the presence of at least one Phenotypic Criterion (non-volitional weight loss, low BMI, or reduced muscle mass quantified by DXA/BIA/anthropometry) combined with at least one Etiologic Criterion (reduced food intake/assimilation or disease-related inflammation/burden) [1].',
          'প্রথম ধাপে একটি স্বীকৃত স্ক্রিনিং টুলের (যেমন MUST বা NRS-2002) মাধ্যমে পুষ্টিঝুঁকি যাচাই করতে হয়। ঝুঁকি নিশ্চিত হলে দ্বিতীয় নির্ণায়ক ধাপে অন্তত একটি ফেনোটাইপিক মানদণ্ড (অনিচ্ছাকৃত ওজন হ্রাস, কম বিএমআই বা পেশি ক্ষয়) এবং তার সাথে অন্তত একটি এটিওলজিক মানদণ্ড (খাদ্য গ্রহণে মারাত্মক ঘাটতি বা তীব্র/দীর্ঘস্থায়ী রোগজনিত প্রদাহ) বিদ্যমান থাকা বাধ্যতামূলক [১]।'
        ),
      },
      {
        question: l(
          'Why does carbohydrate reintroduction trigger catastrophic hypophosphatemia in refeeding syndrome?',
          'রিফিডিং সিন্ড্রোমে দীর্ঘ অনাহারের পর কার্বোহাইড্রেট খাবার দিলে কেন রক্তে ফসফেটের মারাত্মক পতন (হাইপোফসফেটেমিয়া) ঘটে?'
        ),
        answer: l(
          'Prolonged starvation depletes total body intracellular phosphate stores, though serum levels may appear normal. Reintroducing carbohydrates prompts a sudden surge in pancreatic insulin secretion. Insulin activates cellular hexokinase, phosphofructokinase, and Na+/K+-ATPase pumps, driving glucose and phosphate into cells to form ATP, glucose-6-phosphate, and 2,3-bisphosphoglycerate. This rapid intracellular sequestration strips the intravascular compartment of phosphate, causing profound hypophosphatemia (<0.30 mmol/L) that precipitates diaphragmatic paralysis, myocardial pump failure, and tissue hypoxia [3, 6].',
          'দীর্ঘ অনাহারে শরীরের মোট ফসফেট নিঃশেষ হয়ে যায়, যদিও রক্ত পরীক্ষায় তা আপাত স্বাভাবিক দেখাতে পারে। আকস্মিক কার্বোহাইড্রেট খেলে প্রচুর ইনসুলিন নিঃসৃত হয়। ইনসুলিন কোষের ভেতরের এনজাইমগুলোকে সক্রিয় করে রক্তের সমস্ত ফসফেট কোষের ভেতরে ঢুকিয়ে এটিপি ও গ্লুকোজ-ফসফেট তৈরি করায়। ফলে রক্তনালির ভেতরের ফসফেট শূন্যের কোঠায় নেমে যায়, যার কারণে শ্বাসযন্ত্রের পেশি অবশ হয়ে যায়, হৃদযন্ত্র বন্ধ হয়ে আসে এবং কোষীয় অক্সিজেনের অভাবে মৃত্যু ঘটতে পারে [৩, ৬]।'
        ),
      },
      {
        question: l(
          'What physiological mechanisms make enteral nutrition (EN) superior to total parenteral nutrition (TPN) when the gastrointestinal tract is functional?',
          'পরিপাকনালি কার্যকর থাকলে টোটাল প্যারেন্টেরাল পুষ্টির (টিপিএন) চেয়ে এন্টারাল পুষ্টি (ইএন) শারীরবৃত্তীয়ভাবে কেন বহুগুণ শ্রেষ্ঠ?'
        ),
        answer: l(
          'Enteral nutrients provide direct luminal nourishment to enterocytes, preserving intestinal villus height, maintaining tight junction proteins (claudins, occludins), and preventing mucosal atrophy. Intraluminal nutrients stimulate gut-associated lymphoid tissue (GALT) to secrete protective secretory IgA, sustain mesenteric blood flow, and release trophic gut hormones like GLP-2. In contrast, total bowel rest on TPN induces rapid mucosal barrier breakdown, enabling gut bacteria and endotoxins to translocate across the epithelial barrier into the portal circulation, precipitating systemic sepsis [4, 5].',
          'নলের মাধ্যমে অন্ত্রে খাবার দিলে তা এন্টারোসাইট কোষকে সরাসরি পুষ্টি জোগায়, অন্ত্রের ভিলাস সতেজ রাখে, টাইট জাংশন বন্ধন অটুট রাখে এবং অন্ত্রের পর্দা শুকিয়ে যাওয়া প্রতিরোধ করে। এটি অন্ত্রের প্রতিরোধ ব্যবস্থা (GALT) থেকে সিক্রেটরি আইজিএ ক্ষরণ করায় এবং অন্ত্রে রক্তপ্রবাহ বাড়ায়। বিপরীতে, শিরায় টিপিএন দিলে অন্ত্র অব্যবহৃত থেকে দ্রুত ক্ষয়ে যায়, ফলে অন্ত্রের ক্ষতিকর ব্যাকটেরিয়া সরাসরি রক্তে ঢুকে সেপটিক শক তৈরি করে [৪, ৫]।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating Starvation Ketosis, Carbohydrate-Induced Refeeding Hypophosphatemia, and Enteral vs Parenteral Nutrition Selection.',
      'অনাহারকালীন কিটোসিস, হঠাৎ কার্বোহাইড্রেট গ্রহণে রিফিডিং হাইপোফসফেটেমিয়া এবং এন্টারাল বনাম প্যারেন্টেরাল পুষ্টি নির্বাচনের ধারাবাহিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Uncomplicated Starvation & Intracellular Mineral Depletion: Prolonged fasting prompts glycogen depletion, fall in insulin, and shift to lipolysis and ketone body oxidation, with subclinical depletion of total body phosphate, potassium, and magnesium pools.',
        'ধাপ ১: দীর্ঘ অনাহার ও খনিজের নিভৃত নিঃশেষ: অনাহারে ইনসুলিন কমে শরীর চর্বি ও কিটোন শক্তিতে চলে; ফলে রক্তে আপাত স্বাভাবিক দেখালেও কোষের ভেতরে অতিপ্রয়োজনীয় ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম নিঃশেষ হয়ে যায়।'
      ),
      l(
        'Step 2: Carbohydrate Reintroduction & Massive Insulin Exocytosis: Re-exposure to dietary glucose triggers rapid pancreatic beta-cell insulin secretion, activating cellular hexokinase, phosphofructokinase, and Na+/K+-ATPase pumps.',
        'ধাপ ২: খাদ্য গ্রহণ ও আকস্মিক ইনসুলিনের বন্যা: অনাহারের পর হঠাৎ মিষ্টি বা কার্বোহাইড্রেট খেলে ইনসুলিনের তীব্র নিঃসরণ ঘটে, যা কোষের ভেতরের এনজাইম ও পাম্পগুলোকে অতিমাত্রায় সক্রিয় করে তোলে।'
      ),
      l(
        'Step 3: Intracellular Ion Sequestration & Profound Hypophosphatemia: Glucose phosphorylation rapidly pulls circulating phosphate, potassium, and magnesium into the intracellular space, collapsing serum phosphate (<0.30 mmol/L) and precipitating acute ATP exhaustion, diaphragmatic paralysis, and cardiac arrest.',
        'ধাপ ৩: কোষে খনিজ অবরুদ্ধকরণ ও মারাত্মক হাইপোফসফেটেমিয়া: কোষের ভেতর গ্লুকোজ প্রক্রিয়াজাত করতে গিয়ে রক্তের সমস্ত ফসফেট ও পটাশিয়াম নিমেষেই কোষে ঢুকে পড়ে; ফলে রক্তে ফসফেট শূন্যের কোঠায় নেমে শ্বাসপেশি অবশ হয় ও হৃদস্পন্দন বন্ধ হয়ে যায়।'
      ),
      l(
        'Step 4: Clinical Staging & Enteral vs Parenteral Protocol: Administer prophylactic thiamine prior to feeding, initiate calories at 10 kcal/kg/day, replace electrolytes aggressively, and prioritize enteral over parenteral access to protect gut mucosal architecture.',
        'ধাপ ৪: প্রতিরোধমূলক চিকিৎসা ও সঠিক পথ নির্বাচন: খাবার শুরুর আগেই থায়ামিন ইনজেকশন দিন, দিনে মাত্র ১০ ক্যালোরি/কেজি দিয়ে শুরু করুন, রক্তে ফসফেট ও পটাশিয়াম পূরণ করুন এবং অন্ত্র সচল রাখতে সর্বদা এন্টারাল ফিডিংকে প্রাধান্য দিন।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 'malnutrition-refeeding-support-axis',
    title: l(
      'The Malnutrition-Refeeding-Nutritional Support Clinical Axis',
      'ক্লিনিক্যাল অপুষ্টি, রিফিডিং সিন্ড্রোম ও পুষ্টি সহায়তা অক্ষ'
    ),
    description: l(
      'Interactive architectural diagram delineating starvation physiology, insulin-mediated refeeding hypophosphatemia, and clinical decision trees comparing enteral vs parenteral support.',
      'ইন্টারঅ্যাক্টিভ ডায়াগ্রাম যা অনাহারের বিপাকীয় রূপান্তর, ইনসুলিন-চালিত রিফিডিংয়ের মারাত্মক ফসফেট পতন এবং এন্টারাল বনাম প্যারেন্টেরাল পুষ্টি সহায়তার সিদ্ধান্ত প্রক্রিয়া প্রদর্শন করে।'
    ),
    disclaimer: l(
      'Educational clinical nutrition simulation; severe refeeding syndrome and parenteral feeding require intensive multidisciplinary care.',
      'শিক্ষামূলক ক্লিনিক্যাল নিউট্রিশন সিমুলেশন; মারাত্মক রিফিডিং সিন্ড্রোম ও টিপিএন পরিচালনায় অভিজ্ঞ মেডিকেল বোর্ডের তত্ত্বাবধান জরুরি।'
    ),
    svgType: 'clinical-malnutrition',
    items: [
      {
        id: 'node-starvation',
        label: l('Starvation Physiology & Depletion', 'অনাহারের শারীরবৃত্ত ও খনিজ নিঃশেষ'),
        description: l(
          'In prolonged fasting or starvation, insulin levels decline, glucagon and epinephrine stimulate lipolysis and ketogenesis, and whole-body stores of intracellular ions become critically depleted [3].',
          'দীর্ঘ অনাহারে ইনসুলিন কমে যায়, শরীর চর্বি ও কিটোন শক্তিতে চলে এবং কোষের ভেতরে থাকা অতিপ্রয়োজনীয় ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম ভয়াবহভাবে নিঃশেষ হয়ে যায় [৩]।'
        ),
        details: l(
          'Glycogen depletion and prolonged hypokinemia lead to total body phosphate, potassium, and magnesium depletion despite normal serum concentrations.',
          'গ্লাইকোজেন ফুরিয়ে শরীর কিটোনে চলে এবং রক্তে স্বাভাবিক দেখালেও কোষের ভেতরের ফসফেট ও পটাশিয়াম সম্পূর্ণ ফুরিয়ে যায়।'
        ),
        color: '#64748b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-refeeding',
        label: l('Refeeding Carbohydrate Surge', 'কার্বোহাইড্রেটের ধাক্কা ও ইনসুলিন নিঃসরণ'),
        description: l(
          'Re-exposure to dietary carbohydrates induces an abrupt surge in insulin secretion, stimulating hexokinase and sodium-potassium pumps that rapidly transport phosphate into cells [3, 6].',
          'হঠাৎ কার্বোহাইড্রেট খেলে ইনসুলিনের তীব্র বন্যা শুরু হয়, যা রক্তে থাকা অবশিষ্ট ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়ামকে কোষের ভেতর টেনে নেয় [৩, ৬]।'
        ),
        details: l(
          'Surging insulin drives rapid glucose-6-phosphate phosphorylation and cellular uptake of electrolytes, trapping phosphate inside the cytoplasm.',
          'ইনসুলিনের ধাক্কায় গ্লুকোজ ফসফরাইলেশন শুরু হয় এবং রক্তের সমস্ত খনিজ চোখের পলকে কোষের ভেতরে আটকা পড়ে।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-collapse',
        label: l('Profound Hypophosphatemia & Crisis', 'মারাত্মক হাইপোফসফেটেমিয়া ও কার্ডিয়াক সংকট'),
        description: l(
          'Intracellular phosphate trapping causes severe extracellular hypophosphatemia (<0.30 mmol/L), depleting ATP and 2,3-BPG, precipitating fatal cardiac arrhythmias and respiratory arrest [3, 6].',
          'কোষের ভেতর ফসফেট আটকা পড়ে রক্তে ফসফেটের মাত্রা বিপজ্জনকভাবে নেমে যায় (<০.৩০), ফলে কোষের এটিপি শক্তি ফুরিয়ে হার্ট বন্ধ হয়ে যায় এবং শ্বাসপেশি অবশ হয়ে পড়ে [৩, ৬]।'
        ),
        details: l(
          'Severe hypophosphatemia strips erythrocytes of 2,3-BPG causing tissue hypoxia, while cellular ATP depletion paralyses the diaphragm and triggers ventricular fibrillation.',
          'রক্তে ফসফেট শূন্য হয়ে লোহিত রক্তকণিকা অক্সিজেন ছাড়তে পারে না এবং এটিপির অভাবে হৃদযন্ত্র ও ফুসফুসের শ্বাসপেশি নিস্তেজ হয়ে মৃত্যু ঘটে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-enteral',
        label: l('Enteral Nutrition (EN) First-Line', 'প্রথম সারির চিকিৎসা: এন্টারাল পুষ্টি (EN)'),
        description: l(
          'If the gastrointestinal tract is functional, enteral feeding directly maintains mucosal villi, tight junctions (claudin-1), secretory IgA release, and mesenteric blood flow, preventing lethal bacterial translocation [4, 5].',
          'পরিপাকতন্ত্র সচল থাকলে টিউবের মাধ্যমে খাবার দেওয়া সর্বোত্তম; এটি অন্ত্রের প্রাচীর সতেজ রাখে, জীবাণু প্রতিরোধক অ্যান্টিবডি ক্ষরণ করায় এবং রক্তে ব্যাকটেরিয়ার বিষ ছড়ানো রোধ করে [৪, ৫]।'
        ),
        details: l(
          'Luminal nutrient contact stimulates GLP-2 release and brush-border perfusion, preserving tight junctions and stopping endotoxin translocation into portal blood.',
          'অন্ত্রে খাবার পড়লে তা কোষগুলোকে সতেজ রাখে এবং রক্তে বিষাক্ত জীবাণু প্রবেশ রোধ করতে অন্ত্রের দেয়ালের বন্ধন কঠোরভাবে শক্ত রাখে।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-parenteral',
        label: l('Parenteral Support (PN) & IFALD', 'প্যারেন্টেরাল পুষ্টি (PN) ও লিভারের জটিলতা'),
        description: l(
          'Indicated exclusively when the GI tract is non-functional (obstruction, short bowel, severe ileus); requires central venous access and carries significant risks of line sepsis, villus atrophy, and liver disease (IFALD) [4, 5].',
          'অন্ত্র পুরোপুরি বন্ধ থাকলে সেন্ট্রাল শিরার মাধ্যমে টিপিএন দিতে হয়; তবে এতে রক্তে ইনফেকশন, অন্ত্রের মিউকোসা ক্ষয় এবং লিভারের চর্বি ও পিত্তরোগের (IFALD) ঝুঁকি বেশি থাকে [৪, ৫]।'
        ),
        details: l(
          'Total parenteral feeding bypasses the gut, promoting enterocyte atrophy; long-term intravenous soy-based phytosterols impair bile flow, precipitating cholestasis and liver injury.',
          'শিরার মাধ্যমে খাবার দিলে অন্ত্রের পাতা শুকিয়ে যায় এবং দীর্ঘমেয়াদে সয়াবিন তেলের ফাইটোস্টেরল লিভারের পিত্তনালি বন্ধ করে মারাত্মক জন্ডিস ও লিভারের ক্ষতি করে।'
        ),
        color: '#0284c7',
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
          heading: l('Introduction to Clinical Malnutrition & The GLIM Consensus', 'ক্লিনিক্যাল অপুষ্টি ও গ্লিম (GLIM) ঐকমত্যের পরিচিতি'),
          paragraphs: [
          l(
            'Clinical malnutrition is not merely a shortage of food intake; it is a life-threatening physiological condition where inadequate nutrition or disease-induced metabolic alterations cause progressive wasting of lean muscle and vital organ mass [1]. In hospitalized patients, malnutrition dramatically increases mortality, prolongs hospital length of stay, impairs wound healing, and weakens immune defense against opportunistic infections [1]. Recognizing and classifying malnutrition early is one of the most critical responsibilities of modern clinical dietetics and medicine.',
            'ক্লিনিক্যাল অপুষ্টি কেবল খাবারের অভাবজনিত কোনো সমস্যা নয়; এটি একটি মারাত্মক শারীরবৃত্তীয় সংকট যেখানে প্রয়োজনীয় পুষ্টির দীর্ঘস্থায়ী অভাব অথবা তীব্র রোগের প্রভাবে শরীরের কঙ্কালপেশি ও গুরুত্বপূর্ণ অঙ্গের ক্ষয় ঘটে [১]। হাসপাতালে ভর্তি রোগীদের মধ্যে অপুষ্টি মৃত্যুর ঝুঁকি বহুগুণ বাড়িয়ে দেয়, হাসপাতালে অবস্থানের মেয়াদ দীর্ঘায়িত করে, ক্ষত নিরাময় বাধাগ্রস্ত করে এবং রোগ প্রতিরোধ ক্ষমতাকে ধ্বংসের মুখে ঠেলে দেয় [১]। তাই অপুষ্টিকে সঠিক সময়ে শনাক্ত ও শ্রেণিবদ্ধ করা আধুনিক চিকিৎসা পুষ্টিবিজ্ঞানের অন্যতম প্রধান লক্ষ্য।'
          ),
          l(
            'For decades, clinical nutrition suffered from conflicting diagnostic criteria, with different medical societies employing divergent definitions based on variable anthropometric cutoffs or subjective scores [1]. To unify global practice, the Global Leadership Initiative on Malnutrition (GLIM)—comprising ASPEN, ESPEN, FELANPE, and PENSA—established a standardized, evidence-based diagnostic framework in 2019 [1]. This consensus provides clinicians worldwide with a common diagnostic language that connects visible physical wasting to underlying biological pathophysiology [1].',
            'বিগত কয়েক দশক ধরে বিশ্বের বিভিন্ন মেডিকেল সংস্থা অপুষ্টি নির্ণয়ে ভিন্ন ভিন্ন মানদণ্ড ও পরিমাপ পদ্ধতি ব্যবহার করায় সঠিক চিকিৎসার ক্ষেত্রে নানাবিধ জটিলতা তৈরি হচ্ছিল [১]। এই বৈশ্বিক অচলাবস্থা দূর করতে ২০১৯ সালে বিশ্বের শীর্ষস্থানীয় চারটি ক্লিনিক্যাল নিউট্রিশন সোসাইটি (ASPEN, ESPEN, FELANPE, PENSA) একত্রিত হয়ে গ্লিম (GLIM) ঐকমত্য ফ্রেমওয়ার্ক প্রণয়ন করে [১]। এই যুগান্তকারী ফ্রেমওয়ার্ক বিশ্বব্যাপী চিকিৎসকদের একটি অভিন্ন বিজ্ঞানভিত্তিক ভাষা উপহার দিয়েছে যা রোগীর দৃশ্যমান শারীরিক ক্ষয়ের সাথে অভ্যন্তরীণ রোগশারীরবৃত্তের সংযোগ স্থাপন করে [১]।'
          ),
          l(
            'The GLIM diagnostic architecture operates via a structured two-step approach [1]. The first mandatory step is screening using any validated risk tool—such as the Malnutrition Universal Screening Tool (MUST) or Nutritional Risk Screening 2002 (NRS-2002)—to rapidly identify patients who are nutritionally compromised [1]. Once a patient screens positive for nutritional risk, clinicians proceed to the second step: formal diagnostic assessment using objective phenotypic and etiologic criteria [1].',
            'গ্লিম (GLIM) নির্ণয় পদ্ধতিটি একটি সুসংগঠিত দুই-ধাপের নীতিমালার ওপর ভিত্তি করে পরিচালিত হয় [১]। এর প্রথম ধাপ হলো যেকোনো বৈজ্ঞানিকভাবে স্বীকৃত স্ক্রিনিং টুল—যেমন মাস্ট (MUST) বা নিউট্রিশনাল রিস্ক স্ক্রিনিং ২০০২ (NRS-2002)—ব্যবহার করে দ্রুত সম্ভাব্য অপুষ্টির ঝুঁকিগ্রস্ত রোগীদের চিহ্নিত করা [১]। প্রাথমিক স্ক্রিনিংয়ে রোগী ঝুঁকিপূর্ণ প্রমাণিত হলে চিকিৎসকেরা দ্বিতীয় ধাপে প্রবেশ করেন: যা হলো বস্তুনিষ্ঠ ফেনোটাইপিক ও এটিওলজিক মানদণ্ড Analyses-এর মাধ্যমে আনুষ্ঠানিক রোগ নির্ণয় [১]।'
          ),
          l(
            'To confirm a definitive clinical diagnosis of malnutrition under GLIM, the patient must fulfill at least one Phenotypic Criterion and at least one Etiologic Criterion simultaneously [1]. Phenotypic criteria reflect observable bodily deterioration: unintentional weight loss, low body mass index (BMI), or reduced skeletal muscle mass [1]. Etiologic criteria reflect the underlying driving causes: severely reduced food intake or nutrient assimilation, or active systemic inflammation and disease burden [1]. This dual requirement ensures that therapy targets both physical loss and its metabolic driver.',
            'গ্লিম মানদণ্ডে অপুষ্টির আনুষ্ঠানিক রোগ নির্ণয় নিশ্চিত করতে রোগীকে একই সাথে অন্তত একটি ফেনোটাইপিক মানদণ্ড এবং অন্তত একটি এটিওলজিক মানদণ্ড পূরণ করতে হয় [১]। ফেনোটাইপিক মানদণ্ডগুলো রোগীর দৃশ্যমান শারীরিক অবক্ষয় প্রকাশ করে: যেমন অনিচ্ছাকৃত দ্রুত ওজন হ্রাস, অস্বাভাবিক কম বিএমআই (BMI), কিংবা পেশির কার্যকর ভর কমে যাওয়া [১]। আর এটিওলজিক মানদণ্ডগুলো এর পেছনের জৈবিক কারণ নির্দেশ করে: যেমন খাদ্যাভ্যাসে মারাত্মক ঘাটতি কিংবা তীব্র রোগজনিত প্রদাহ [১]। এই সমন্বয় নিশ্চিত করে যে চিকিৎসা পরিকল্পনা শারীরিক অপচয় এবং অভ্যন্তরীণ প্রদাহ উভয়কেই লক্ষ্য করে গঠিত হচ্ছে।'
          ),
        ],
        },
        {
          id: 'structure',
          heading: l('Starvation, Sarcopenia & Cachexia: Biological Wasting Syndromes', 'অনাহার, সারকোপেনিয়া ও ক্যাক্সিয়া: শারীরিক অপচয়ের জৈবিক রূপভেদ'),
          paragraphs: [
          l(
            'Not all forms of physical wasting are biologically equivalent; understanding the divergence between simple starvation, sarcopenia, and disease-related cachexia is essential for selecting appropriate medical therapy [2]. Simple starvation occurs when an otherwise healthy individual is deprived of external food intake, such as during prolonged famine or anorexia nervosa [2]. In this state, the neuroendocrine system mounts an adaptive response that lowers resting energy expenditure and preferentially mobilizes adipose triglycerides while conserving precious functional skeletal muscle [2].',
            'চিকিৎসাবিজ্ঞানে সব ধরনের শারীরিক অপচয় বা ওজন হ্রাসের জৈবরাসায়নিক ভিত্তি এক নয়; তাই সাধারণ অনাহার, সারকোপেনিয়া এবং রোগজনিত ক্যাক্সিয়ার পার্থক্য বোঝা যথাযথ চিকিৎসার জন্য অপরিহার্য [২]। সাধারণ অনাহার ঘটে যখন কোনো সুস্থ ব্যক্তি দীর্ঘসময় পর্যাপ্ত খাদ্য গ্রহণ থেকে বঞ্চিত থাকে, যেমন দুর্ভিক্ষ বা অ্যানোরেক্সিয়া নার্ভোসা রোগে [২]। এই অবস্থায় শরীর তার শক্তি খরচ বা বিপাকীয় গতি কমিয়ে দেয় এবং কঙ্কালপেশি বাঁচিয়ে রাখার জন্য সঞ্চিত চর্বি ভেঙে কিটোন বডি তৈরি করে মস্তিষ্ক ও অঙ্গপ্রত্যঙ্গকে বাঁচিয়ে রাখে [২]।'
          ),
          l(
            'In contrast to starvation, primary sarcopenia is a progressive, age-associated decline in skeletal muscle mass, strength, and physical performance [1, 2]. Sarcopenia is primarily driven by "anabolic resistance," a phenomenon wherein aging muscle cells exhibit a blunted protein synthesis response to circulating amino acids and insulin [1]. Sarcopenic patients may maintain a normal or even elevated body weight if adipose tissue expands to replace lost muscle, a condition termed sarcopenic obesity that conceals severe functional frailty behind normal body mass [1].',
            'অনাহারের বিপরীত দিকে রয়েছে প্রাথমিক সারকোপেনিয়া, যা হলো বয়সবৃদ্ধির কারণে স্বাভাবিক কঙ্কালপেশির ভর, শক্তি ও গতিশীলতার ক্রমাবনতি [১, ২]। সারকোপেনিয়ার মূল কারণ হলো পেশিকোষের "অ্যানাবলিক রেজিস্ট্যান্স", যেখানে বৃদ্ধ বয়সের পেশিকোষ খাবারে থাকা অ্যামিনো অ্যাসিড ও ইনসুলিনের উদ্দীপনায় স্বাভাবিকভাবে নতুন প্রোটিন তৈরি করতে পারে না [১]। সারকোপেনিয়ায় আক্রান্ত ব্যক্তির ওজন বাইরে থেকে স্বাভাবিক বা বেশিও থাকতে পারে যদি পেশির শূন্যস্থান চর্বি দিয়ে পূর্ণ হয়; একে সারকোপেনিক ওবেসিটি বলা হয় যা রোগীর মারাত্মক দুর্বলতাকে আপাত স্বাভাবিক চেহারার আড়ালে লুকিয়ে রাখে [১]।'
          ),
          l(
            'Disease-related cachexia represents the most aggressive and hypercatabolic wasting syndrome known in clinical medicine [2]. Typically triggered by advanced malignancies, end-stage organ failure, or severe chronic infections, cachexia is driven by systemic, cytokine-mediated inflammation [2]. Pro-inflammatory signaling molecules—such as tumor necrosis factor-alpha (TNF-alpha), interleukin-6 (IL-6), and interferon-gamma—transactivate massive skeletal muscle breakdown while driving anorexia, uncoupled thermogenesis, and profound adipose tissue browning [2].',
            'রোগজনিত ক্যাক্সিয়া হলো চিকিৎসাবিজ্ঞানের সবচেয়ে মারাত্মক ও বিধ্বংসী হাইপারক্যাটাবলিক অপচয় রোগ [২]। প্রধানত উন্নত ক্যান্সার, অঙ্গ বিকল বা দীর্ঘস্থায়ী তীব্র ইনফেকশনের কারণে এই সিন্ড্রোম দেখা দেয়, যা মূলত তীব্র প্রদাহজনিত সাইটোকাইন দ্বারা নিয়ন্ত্রিত হয় [২]। টিউমার নেক্রোসিস ফ্যাক্টর-আলফা (TNF-alpha), ইন্টারলিউকিন-৬ (IL-6) এবং ইন্টারফেরন-গামার মতো সংকেত অণুগুলো কঙ্কালপেশির প্রোটিন দ্রুত ধ্বংস করে দেয়, ক্ষুধা সম্পূর্ণ নষ্ট করে এবং অনিয়ন্ত্রিতভাবে শরীরের সমস্ত সঞ্চয় পুড়িয়ে নিঃশেষ করে [২]।'
          ),
          l(
            'The pivotal clinical distinction is that while simple starvation responds completely to re-feeding with normal caloric intake, cachexia cannot be reversed by conventional nutritional support alone [2]. Because systemic inflammatory cytokines continually stimulate muscle proteasome activity and suppress protein translation, simply infusing carbohydrates or fats into a cachectic patient increases fat deposition without restoring lost contractile muscle mass [2]. Reversing cachexia requires multimodal therapy targeting the underlying inflammatory driver alongside specialized amino acid and resistance exercise interventions.',
            'এই তিনটির মধ্যে সবচেয়ে গুরুত্বপূর্ণ ক্লিনিক্যাল পার্থক্য হলো: সাধারণ অনাহারে রোগীকে সাধারণ খাবার বা পুষ্টি দিলেই তার সমস্ত ঘাটতি পুরোপুরি পূরণ হয়ে যায়, কিন্তু জটিল ক্যাক্সিয়া কেবল সাধারণ ক্যালোরি সমৃদ্ধ খাবারে কখনোই ভালো হয় না [২]। কারণ ক্ষতিকর সাইটোকাইনগুলো সার্বক্ষণিকভাবে পেশির প্রোটিন ভাঙতে থাকে; তাই জোর করে অতিরিক্ত খাবার দিলে শরীরে কেবল সামান্য চর্বি জমা হতে পারে, কিন্তু নষ্ট হয়ে যাওয়া মাংসপেশি ফিরে আসে না [২]। ক্যাক্সিয়া প্রতিকারে অন্তর্নিহিত প্রদাহ কমানোর ওষুধের পাশাপাশি বিশেষায়িত অ্যামিনো অ্যাসিড ও চিকিৎসকের তত্ত্বাবধানে ব্যায়ামের সমন্বিত চিকিৎসা প্রয়োজন।'
          ),
        ],
        },
        {
          id: 'mechanism',
          heading: l('The Refeeding Phenomenon: Carbohydrates, Insulin & Electrolyte Shifts', 'রিফিডিংয়ের শারীরবৃত্ত: কার্বোহাইড্রেট, ইনসুলিন ও খনিজ লবণের আকস্মিক পরিবর্তন'),
          paragraphs: [
          l(
            'When a human undergoes prolonged severe starvation, the body enters a state of conservation bioenergetics [3]. As hepatic glycogen stores deplete within 24 to 48 hours, the pancreatic beta cells drastically suppress insulin secretion while alpha cells release glucagon [3]. The primary energy substrate shifts from glucose to fatty acids and ketone bodies (acetoacetate and beta-hydroxybutyrate), allowing the brain to maintain functional ATP production while minimizing gluconeogenesis from skeletal muscle amino acids [3].',
            'মানুষ যখন দীর্ঘমেয়াদে মারাত্মক অনাহারে থাকে, তখন শরীর তার টিকে থাকার জন্য বিশেষ এক ধরনের সংরক্ষণমূলক বিপাকীয় রূপান্তর ঘটায় [৩]। যকৃতে সঞ্চিত গ্লাইকোজেন প্রথম ২৪ থেকে ৪৮ ঘণ্টার মধ্যেই নিঃশেষ হয়ে যাওয়ায় অগ্ন্যাশয় ইনসুলিন তৈরি প্রায় বন্ধ করে দেয় এবং গ্লুকোজের বিকল্প হিসেবে চর্বি ভাঙতে শুরু করে [৩]। শক্তির প্রধান উৎস হিসেবে গ্লুকোজের জায়গা দখল করে ফ্যাটি অ্যাসিড এবং কিটোন বডি (যেমন বিটা-হাইড্রক্সিবুটাইরেট); ফলে মস্তিষ্ক ও অন্যান্য কোষ সচল থাকে এবং মূল্যবান মাংসপেশি ভাঙন কিছুটা কম হয় [৩]।'
          ),
          l(
            'Crucially, during extended starvation, total whole-body reserves of intracellular electrolytes—most notably phosphate, potassium, and magnesium—become severely depleted [3, 6]. Because of cellular catabolism and tissue shrinkage, these electrolytes leach into the extracellular space and are excreted through the urine; however, routine serum blood tests often appear deceptively normal because hemoconcentration and intracellular leakage maintain normal circulating concentrations [3, 6]. The starved patient is an empty reservoir hidden behind a normal lab report.',
            'সবচেয়ে মারাত্মক বিষয় হলো, দীর্ঘ অনাহারের এই পুরো সময়টিতে শরীরের কোষের ভেতরের অতিপ্রয়োজনীয় খনিজ লবণ—বিশেষ করে ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম—ধীরে ধীরে নিঃশেষ হয়ে যায় [৩, ৬]। কোষগুলো সংকুচিত হয়ে যাওয়ায় এই খনিজগুলো কোষে থাকতে না পেরে রক্তে চলে আসে এবং প্রস্রাবের মাধ্যমে শরীর থেকে বের হয়ে যায়; তবে রক্ত পরীক্ষা করলে আপাতদৃষ্টিতে এদের মাত্রা স্বাভাবিক মনে হতে পারে কারণ রক্তে পানির পরিমাণ কমে যাওয়ায় এরা ঘন দেখায় [৩, ৬]। ফলে বাইরে থেকে ল্যাব রিপোর্ট স্বাভাবিক দেখালেও রোগীর কোষগুলো আসলে সম্পূর্ণ খনিজশূন্য হয়ে পড়ে থাকে।'
          ),
          l(
            'A life-threatening catastrophe occurs when food—particularly dietary carbohydrate—is abruptly reintroduced without medical precautions [3]. The influx of glucose triggers an immediate and massive surge of endogenous insulin from the sensitized pancreas [3]. Insulin acts as a powerful anabolic gatekeeper: it upregulates cell-surface GLUT4 glucose transporters and activates sodium-potassium ATPase (Na+/K+-ATPase) pumps, driving massive quantities of glucose, potassium, magnesium, and phosphate from the bloodstream into starved intracellular spaces [3].',
            'বিপদ তখনই ঘটে যখন কোনো সতর্কতা ছাড়াই রোগীকে হঠাৎ করে প্রচুর কার্বোহাইড্রেট বা মিষ্টি খাবার খাওয়ানো হয় [৩]। রক্তে গ্লুকোজ প্রবেশের সাথে সাথেই অগ্ন্যাশয় থেকে তীব্র গতিতে বিপুল পরিমাণ ইনসুলিন হরমোন নিঃসৃত হয় [৩]। ইনসুলিন হলো কোষের দরজা খোলার চাবিকাঠি: এটি কোষের পর্দায় থাকা সোডিয়াম-পটাশিয়াম পাম্পগুলোকে অত্যন্ত দ্রুত সক্রিয় করে তোলে এবং রক্তের সমস্ত গ্লুকোজ, পটাশিয়াম, ম্যাগনেসিয়াম ও ফসফেটকে বিদ্যুৎগতিতে কোষের ভেতরে টেনে নেয় [৩]।'
          ),
          l(
            'The consequences of this rapid intracellular shift are devastating: intravascular phosphate plunges to undetectable levels, a condition termed severe hypophosphatemia [3, 6]. Phosphate is the indispensable molecular building block of adenosine triphosphate (ATP) and 2,3-bisphosphoglycerate (2,3-BPG); without circulating phosphate, red blood cells cannot release oxygen to tissues, respiratory diaphragmatic muscles become paralyzed, and the myocardium loses contractile power, culminating in fatal ventricular arrhythmias and cardiac arrest [3, 6].',
            'রক্তের সমস্ত ফসফেট চোখের পলকে কোষের ভেতর ঢুকে যাওয়ায় রক্তনালির ভেতরে ফসফেটের মাত্রা বিপজ্জনক শূন্যের কোঠায় নেমে যায়, যাকে মারাত্মক হাইপোফসফেটেমিয়া বলে [৩, ৬]। ফসফেট হলো কোষে শক্তি উৎপাদনের মুদ্রা এটিপি (ATP) এবং লোহিত রক্তকণিকা থেকে কোষে অক্সিজেন সরবরাহের চাবিকাঠি 2,3-BPG-এর অপরিহার্য উপাদান; রক্তে ফসফেট না থাকলে ফুসফুসের শ্বাসপেশি অবশ হয়ে শ্বাস বন্ধ হয়ে যায় এবং হৃদযন্ত্রের পাম্প বন্ধ হয়ে মারাত্মক হৃদরোগ ও মৃত্যু ঘটে [৩, ৬]।'
          ),
        ],
        },
        {
          id: 'integration',
          heading: l('Nutritional Support Modalities: Enteral vs Parenteral Delivery', 'কৃত্রিম পুষ্টি সহায়তার ধরন: এন্টারাল বনাম প্যারেন্টেরাল পুষ্টির তুলনা'),
          paragraphs: [
          l(
            'When patients are unable to meet their minimum nutritional requirements through voluntary oral eating due to critical illness, neurological dysphagia, or intestinal surgery, artificial nutrition support becomes mandatory [4, 5]. Medical nutrition therapy is broadly divided into two primary delivery modalities: Enteral Nutrition (EN), where liquid nutrients are delivered directly into the stomach or small intestine via feeding tubes, and Parenteral Nutrition (PN), where sterile nutrients are infused directly into the bloodstream [4, 5].',
            'যখন কোনো রোগী গুরুতর অসুস্থতা, মস্তিষ্কের স্ট্রোকের কারণে গিলতে না পারা বা পেটের জটিল অপারেশনের ফলে স্বাভাবিকভাবে মুখে খাবার খেতে পারেন না, তখন কৃত্রিম পুষ্টি সহায়তা দেওয়া অত্যাবশ্যক হয়ে ওঠে [৪, ৫]। চিকিৎসা বিজ্ঞানে কৃত্রিম পুষ্টি সহায়তাকে প্রধানত দুটি ভাগে ভাগ করা হয়: এন্টারাল পুষ্টি (EN), যেখানে নলের মাধ্যমে তরল খাবার সরাসরি পাকস্থলী বা অন্ত্রে পৌঁছে দেওয়া হয়; এবং প্যারেন্টেরাল পুষ্টি (PN), যেখানে জীবাণুমুক্ত তরল পুষ্টি সরাসরি শিরার রক্তপ্রবাহে স্যালাইনের মতো ইনফিউশন করা হয় [৪, ৫]।',
          ),
          l(
            'The golden rule of modern clinical dietetics is unequivocal: "If the gut works, use it" [4, 5]. Enteral feeding is vastly physiologically superior to intravenous feeding because intraluminal nutrients provide direct physical nourishment to enterocytes lining the digestive tract [4]. In the absence of luminal nutrients, the gut mucosa rapidly atrophies within days: intestinal villi shrink, the tight junction seals between epithelial cells break down, and the protective secretion of gut immunoglobulin A (sIgA) plummets, allowing toxic bacteria to invade the bloodstream [4, 5].',
            'আধুনিক চিকিৎসা বিজ্ঞানের স্বর্ণযুগীয় মূলনীতিটি অত্যন্ত স্পষ্ট: "যদি রোগীর পরিপাকতন্ত্র কাজ করে, তবে সেটিই ব্যবহার করুন" [৪, ৫]। শিরাপথে পুষ্টি দেওয়ার চেয়ে অন্ত্রের ভেতর দিয়ে খাবার দেওয়া শারীরবৃত্তীয়ভাবে বহুগুণ শ্রেষ্ঠ, কারণ অন্ত্রের কোষগুলো রক্ত থেকে নয়, বরং নালির ভেতরের খাবার থেকে সরাসরি বেঁচে থাকার পুষ্টি গ্রহণ করে [৪]। অন্ত্রে খাবার না দিলে মাত্র কয়েকদিনের মধ্যেই অন্ত্রের ভেতরের প্রাচীর শুকিয়ে ক্ষয়ে যায়, কোষের সংযোগগুলো ছিঁড়ে যায় এবং রোগপ্রতিরোধক অ্যান্টিবডি তৈরি বন্ধ হয়ে অন্ত্রের কোটি কোটি জীবাণু সরাসরি রক্তে ঢুকে রক্ত বিষাক্ত করে তোলে [৪, ৫]। ',
          ),
          l(
            'Enteral access routes are customized based on clinical risk and expected duration of therapy [4, 5]. For short-term feeding under 4 weeks in patients with normal gastric motility, a soft, flexible nasogastric (NG) tube is positioned through the nose into the stomach [4]. However, if the patient suffers from severe gastroparesis, persistent vomiting, or recurrent pulmonary aspiration risk, the feeding tube is advanced past the pylorus into the duodenum or jejunum (nasojejunal tube) [4, 5]. When nutritional support is required for months or years, percutaneous endoscopic gastrostomy (PEG) provides durable, direct abdominal access [4].',
            'রোগীর শারীরিক অবস্থা এবং কতদিন পুষ্টি দিতে হবে তার ওপর ভিত্তি করে এন্টারাল টিউব নির্ধারণ করা হয় [৪, ৫]। যদি ৪ সপ্তাহের কম সময়ের জন্য পুষ্টি দরকার হয় এবং পাকস্থলী স্বাভাবিক থাকে, তবে নাকের ভেতর দিয়ে পাকস্থলী পর্যন্ত একটি নরম ন্যাসোগ্যাস্ট্রিক (NG) টিউব স্থাপন করা হয় [৪]। কিন্তু রোগীর যদি তীব্র বমি, পাকস্থলীর পক্ষাঘাত বা খাবার ফুসফুসে চলে যাওয়ার ঝুঁকি থাকে, তবে নলটি পাকস্থলী পেরিয়ে ক্ষুদ্রান্ত্রের ভেতর (ন্যাসোজেজুনাল টিউব) বসানো হয় [৪, ৫]। আর রোগী যদি বহু মাস বা বছর ধরে খেতে না পারেন, তবে এন্ডোস্কোপির সাহায্যে পেটের ওপর সরাসরি পিইজি (PEG) নল লাগানো হয় [৪]। ',
          ),
          l(
            'Parenteral nutrition is reserved strictly for patients whose gastrointestinal tract is non-functional or inaccessible [4, 5]. Indications include mechanical bowel obstruction, massive small-bowel resection resulting in short bowel syndrome, high-output enterocutaneous fistulas, and severe refractory ileus [4, 5]. Because total parenteral nutrition solutions contain concentrated glucose, amino acids, and micronutrients with osmolarities exceeding 1,000 mOsm/L, they must be infused through large central veins (such as a PICC line or subclavian catheter) to prevent acute thrombophlebitis, while carrying severe risks of line infections and liver steatosis [4, 5].',
            'প্যারেন্টেরাল পুষ্টি কেবল তখনই দেওয়া হয় যখন রোগীর পরিপাকনালি সম্পূর্ণ অকেজো বা ব্যবহার করা অসম্ভব হয়ে পড়ে [৪, ৫]। যেমন: অন্ত্রের ভেতর কোনো শক্ত বাধার কারণে পথ বন্ধ হওয়া, অপারেশনের মাধ্যমে অন্ত্রের অধিকাংশ কেটে ফেলা (শর্ট বাওয়েল সিন্ড্রোম), কিংবা অন্ত্র ফেটে মলনালি বাইরে বের হয়ে আসা [৪, ৫]। যেহেতু এই স্যালাইনে প্রচুর ঘন গ্লুকোজ, অ্যামিনো অ্যাসিড ও খনিজ থাকে এবং এর ঘনত্ব অত্যন্ত বেশি, তাই এটি হাতের সাধারণ চিকন রগে দিলে রক্তনালি পুড়ে জমে যেতে পারে; ফলে বুকের বড় সেন্ট্রাল শিরায় বিশেষ নল দিয়ে এটি দিতে হয়, যার ফলে রক্তে ইনফেকশন ও লিভার নষ্ট হওয়ার মারাত্মক ঝুঁকি তৈরি হয় [৪, ৫]। ',
          ),
        ],
        },
        {
          id: 'practice',
          heading: l('Safe Clinical Practice: Refeeding Prevention & Support Protocols', 'নিরাপদ ক্লিনিক্যাল চর্চা: রিফিডিং প্রতিরোধ ও পুষ্টি প্রয়োগ প্রোটোকল'),
          paragraphs: [
          l(
            'The first rule of clinical safety when initiating nutritional support in any severely malnourished patient is to identify risk before administering a single calorie [3, 6]. Patients with a BMI below 16 kg/m², unintentional weight loss exceeding 15% in 3 to 6 months, or a history of little or no food intake for more than 10 consecutive days must be treated as extremely high risk for fatal refeeding syndrome [3, 6]. In such individuals, overzealous rapid caloric feeding is considered medical negligence.',
            'তীব্র অপুষ্টিতে ভোগা কোনো রোগীকে কৃত্রিম পুষ্টি দেওয়ার সময় প্রথম এবং প্রধান নিয়ম হলো এক চামচ খাবার দেওয়ার আগেই তার রিফিডিংয়ের ঝুঁকি পরিমাপ করা [৩, ৬]। যেসব রোগীর বিএমআই ১৬ এর নিচে, গত ৩-৬ মাসে দেহের ১৫ শতাংশের বেশি ওজন হ্রাস পেয়েছে, অথবা টানা ১০ দিনের বেশি সময় প্রায় কোনো খাবার খাননি, তাদের চরম ঝুঁকিপূর্ণ হিসেবে বিবেচনা করতে হবে [৩, ৬]। এমন রোগীদের দ্রুত স্বাভাবিক পরিমাণে খাবার দেওয়া মারাত্মক মেডিকেল ভুলের শামিল।',
          ),
          l(
            'Before any caloric nutrition or intravenous dextrose is delivered, prophylactic micronutrient replacement is mandatory [3, 6]. The most vital intervention is the prompt administration of high-dose thiamine (vitamin B1), typically 200 to 300 mg intravenously or orally, alongside a complete B-complex vitamin formulation [3]. Thiamine acts as the critical coenzyme for pyruvate dehydrogenase; if carbohydrates are infused into a thiamine-deficient patient, pyruvate cannot be converted to acetyl-CoA, driving massive lactic acidosis, sudden circulatory collapse, and irreversible brain damage (Wernicke encephalopathy) [3, 6].',
            'রোগীকে কোনো খাবার বা স্যালাইন দেওয়ার ঠিক পূর্বেই ভিটামিন ও খনিজের জরুরি প্রতিস্থাপন সম্পন্ন করতে হবে [৩, ৬]। এর মধ্যে সবচেয়ে গুরুত্বপূর্ণ হলো উচ্চ মাত্রার থায়ামিন (ভিটামিন বি১), যা ২০০ থেকে ৩০০ মিলিগ্রাম শিরাপথে বা মুখে অন্যান্য বি-কমপ্লেক্স ভিটামিনের সাথে তাৎক্ষণিকভাবে দিতে হবে [৩]। থায়ামিন হলো কার্বোহাইড্রেট ভাঙার সবচেয়ে গুরুত্বপূর্ণ চাবিকাঠি; শরীরে থায়ামিন না থাকলে খাবার দেওয়া মাত্রই রক্তে ভয়াবহ অ্যাসিড তৈরি হয়ে রোগী জ্ঞান হারাতে পারেন এবং মস্তিষ্কের স্মৃতি নষ্ট হয়ে স্থায়ী প্যারালাইসিস (ওয়ার্নিকি সিন্ড্রোম) হতে পারে [৩, ৬]।',
          ),
          l(
            'Caloric intake must begin slowly and conservatively, typically starting at only 10 kcal per kilogram of actual body weight per day [3, 6]. In patients with extreme starvation (BMI under 14 kg/m²), energy initiation should be restricted to as low as 5 kcal/kg/day [3]. The feeding rate is advanced gradually by 200 to 300 kcal every 48 to 72 hours only if clinical examination and daily serum electrolytes confirm metabolic stability [3, 6]. Full caloric requirements are deliberately not achieved until Day 5 through 7 of therapy.',
            'খাবারের ক্যালোরির পরিমাণ অত্যন্ত ধীরে শুরু করতে হবে, যা সাধারণত রোগীর বর্তমান ওজনের প্রতি কেজিতে দিনে মাত্র ১০ কিলোক্যালোরি দিয়ে শুরু হয় [৩, ৬]। এমনকি অতি চরম অনাহারে আক্রান্ত রোগীদের ক্ষেত্রে (বিএমআই ১৪ এর নিচে) এটি কমিয়ে প্রতি কেজিতে মাত্র ৫ ক্যালোরি দিয়ে শুরু করার নির্দেশ রয়েছে [৩]। প্রতিদিন রক্ত পরীক্ষা করে যদি দেখা যায় খনিজ লবণ ঠিক আছে, তবে প্রতি ৪৮ ঘণ্টা পর পর ২০০-৩০০ ক্যালোরি করে বাড়াতে হবে [৩, ৬]। কোনো তাড়াহুড়ো না করে ৫ম থেকে ৭ম দিনে গিয়ে সম্পূর্ণ ক্যালোরির লক্ষ্যমাত্রায় পৌঁছাতে হবে।',
          ),
          l(
            'Daily laboratory surveillance is the cornerstone of safe nutrition support [3, 6]. Serum phosphate, potassium, magnesium, and calcium must be measured at baseline and every 12 to 24 hours during the first 3 to 5 days [3, 6]. Any downward trend in serum phosphate below 0.65 mmol/L mandates immediate intravenous or oral phosphate replacement and a pause or reduction in caloric advancement [3]. Continuous electrocardiographic monitoring and fluid balance tracking are maintained to detect fluid retention, pulmonary edema, and early cardiac arrhythmias.',
            'দৈনিক রক্ত পরীক্ষা হলো নিরাপদ পুষ্টি থেরাপির প্রাণভোমরা [৩, ৬]। প্রথম ৩ থেকে ৫ দিন প্রতিদিন অন্তত একবার বা দুবার রক্তে ফসফেট, পটাশিয়াম, ম্যাগনেসিয়াম এবং ক্যালসিয়ামের মাত্রা মাপতে হবে [৩, ৬]। রক্তে ফসফেটের মাত্রা ০.৬৫ মিলিমিটারের নিচে নামা মাত্রই তাৎক্ষণিকভাবে রোগীকে ফসফেট ইনজেকশন দিতে হবে এবং ক্যালোরি বাড়ানো স্থগিত রাখতে হবে [৩]। সেই সাথে রোগীর হার্ট রিদম এবং ফুসফুসে পানি জমার লক্ষণ সার্বক্ষণিকভাবে পর্যবেক্ষণ করা জরুরি।',
          ),
        ],
        },
        {
          id: 'takeaways',
          heading: l('High-Yield Clinical Takeaways & Core Principles', 'উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও মৌলিক নীতিমালা'),
          paragraphs: [
          l(
            'The diagnosis of clinical malnutrition under the GLIM consensus requires a two-step framework: an initial positive screening using a validated tool, followed by confirmation requiring at least one phenotypic criterion (weight loss, low BMI, reduced muscle mass) and at least one etiologic criterion (reduced intake/assimilation, disease inflammation) [1]. Connecting bodily wasting to inflammatory etiology directs appropriate medical therapy.',
            'গ্লিম (GLIM) ঐকমত্যে ক্লিনিক্যাল অপুষ্টি নির্ণয়ে দুই-ধাপের ফ্রেমওয়ার্ক মেনে চলা আবশ্যক: প্রথমে একটি স্বীকৃত স্ক্রিনিং টুলে ঝুঁকি শনাক্তকরণ, তারপর অন্তত একটি ফেনোটাইপিক মানদণ্ড (ওজন হ্রাস, কম বিএমআই, পেশিক্ষয়) এবং অন্তত একটি এটিওলজিক মানদণ্ড (খাদ্যে ঘাটতি, দীর্ঘস্থায়ী প্রদাহ) নিশ্চিত করা [১]। শারীরিক ক্ষয়ের সাথে অভ্যন্তরীণ রোগের সংযোগ বুঝেই সঠিক চিকিৎসা দেওয়া সম্ভব।',
          ),
          l(
            'Simple starvation, primary sarcopenia, and cancer-associated cachexia are pathophysiologically distinct [2]. Starvation is an adaptive response that spares muscle protein through ketogenesis and responds fully to re-feeding [2]. Sarcopenia is an age-related loss of muscle mass driven by anabolic resistance [1]. Cachexia is a hypercatabolic, cytokine-driven syndrome (TNF-alpha, IL-6) causing relentless muscle proteolysis that cannot be reversed by caloric intake alone without treating systemic inflammation [2].',
            'সাধারণ অনাহার, বার্ধক্যজনিত সারকোপেনিয়া এবং জটিল ক্যাক্সিয়ার বিপাকীয় ভিত্তি সম্পূর্ণ আলাদা [২]। অনাহার হলো একটি খাপ খাইয়ে নেওয়ার প্রক্রিয়া যা কিটোন বডি তৈরির মাধ্যমে মাংসপেশি বাঁচায় এবং খাবার দিলে পুরোপুরি সেরে যায় [২]। সারকোপেনিয়া হলো বার্ধক্যজনিত পেশির স্বাভাবিক অবক্ষয় [১]। আর ক্যাক্সিয়া হলো সাইটোকাইন-চালিত একটি বিধ্বংসী অবস্থা যা কঙ্কালপেশি দ্রুত ধ্বংস করে ফেলে এবং প্রদাহ না কমিয়ে কেবল খাবার দিয়ে এটি কখনো সারানো যায় না [২]। ',
          ),
          l(
            'Refeeding syndrome is a preventable clinical crisis caused by carbohydrate-induced insulin surges in severely starved patients with depleted total body mineral reserves [3, 6]. Insulin drives phosphate, potassium, and magnesium into cells, triggering severe extracellular hypophosphatemia, cellular ATP exhaustion, diaphragmatic failure, and lethal arrhythmias [3, 6]. High-dose thiamine must always precede caloric feeding, and calories must start conservatively at 10 kcal/kg/day [3].',
            'রিফিডিং সিন্ড্রোম হলো একটি প্রতিরোধযোগ্য প্রাণঘাতী সংকট যা দীর্ঘ অনাহারী রোগীকে হঠাৎ অতিরিক্ত কার্বোহাইড্রেট খাওয়ানোর ফলে অতিরিক্ত ইনসুলিন নিঃসরণের মাধ্যমে ঘটে [৩, ৬]। ইনসুলিনের ধাক্কায় রক্ত থেকে ফসফেট কোষে ঢুকে মারাত্মক হাইপোফসফেটেমিয়া ঘটায়, যা এটিপি ধ্বংস করে শ্বাসযন্ত্র ও হৃদযন্ত্র বন্ধ করে দেয় [৩, ৬]। যেকোনো খাবার শুরুর আগে থায়ামিন ইনজেকশন দেওয়া এবং দিনে মাত্র ১০ ক্যালোরি/কেজি দিয়ে শুরু করা জীবনরক্ষাকারী পূর্বশর্ত [৩]। ',
          ),
          l(
            'Enteral nutrition is always the preferred route of support whenever the gastrointestinal tract is functional, as intraluminal nutrients preserve epithelial tight junctions, maintain villus architecture, stimulate secretory IgA, and prevent bacterial translocation [4, 5]. Parenteral nutrition should be reserved exclusively for severe intestinal failure, utilizing central venous access and strict aseptic protocols to minimize life-threatening catheter-related bloodstream infections and hepatobiliary dysfunction [4, 5].',
            'পরিপাকনালি কার্যকর থাকলে সর্বদা এন্টারাল পুষ্টি (নল দিয়ে খাবার) অগ্রাধিকার পাবে; কারণ খাদ্যকণা অন্ত্রের কোষগুলোকে সরাসরি বাঁচিয়ে রাখে, টাইট জাংশন রক্ষা করে এবং ক্ষতিকর ব্যাকটেরিয়ার রক্তে সংক্রমণ প্রতিহত করে [৪, ৫]। অন্যদিকে শিরায় প্যারেন্টেরাল পুষ্টি (টিপিএন) কেবল অন্ত্রের চরম ব্যর্থতাতেই সীমাবদ্ধ রাখতে হবে এবং রক্তনালির ইনফেকশন ও লিভারের ক্ষতি এড়াতে সতর্ক নজরদারি বজায় রাখতে হবে [৪, ৫]। ',
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
          heading: l('Academic Architecture of the GLIM Consensus Diagnostic System', 'গ্লিম (GLIM) ঐকমত্য নির্ণায়ক ব্যবস্থার একাডেমিক রূপরেখা'),
          paragraphs: [
          l(
            'The Global Leadership Initiative on Malnutrition (GLIM) framework represents an evidence-based paradigm shift from disparate historical scoring systems to a core consensus model [1]. A definitive diagnosis requires a confirmed nutritional risk screening via tools such as MUST (score >= 2), NRS-2002 (score >= 3), or Mini Nutritional Assessment (MNA), followed by documented fulfillment of at least one phenotypic criterion and at least one etiologic criterion [1]. This dual-axis system prevents misclassifying simple dehydration or isolated sarcopenia as clinical malnutrition.',
            'গ্লিম (GLIM) ফ্রেমওয়ার্ক চিকিৎসাবিজ্ঞানে পূর্ববর্তী শতধাবিচ্ছিন্ন পদ্ধতির অবসান ঘটিয়ে একটি সার্বজনীন প্রমাণভিত্তিক ঐকমত্য তৈরি করেছে [১]। এই পদ্ধতিতে আনুষ্ঠানিকভাবে অপুষ্টি নিশ্চিত করার জন্য প্রথমে একটি স্বীকৃত স্ক্রিনিং টুলে পুষ্টিঝুঁকি ধরা পড়তে হবে (যেমন MUST স্কোর ২ বা তার বেশি, অথবা NRS-2002 স্কোর ৩ বা তার বেশি), এবং পরবর্তীতে অন্তত একটি ফেনোটাইপিক ও একটি এটিওলজিক মানদণ্ড প্রমাণিত হতে হবে [১]। এই দ্বিমুখী কাঠামোটি নিশ্চিত করে যে সাধারণ পানিশূন্যতা বা কেবলমাত্র পেশিক্ষয়কে যেন ভুলবশত সম্পূর্ণ অপুষ্টি হিসেবে শনাক্ত করা না হয়।',
          ),
          l(
            'Phenotypic criteria in GLIM are subdivided into three quantitative domains: non-volitional weight loss, low body mass index, and reduced skeletal muscle mass [1]. Non-volitional weight loss is defined as > 5% loss of body weight within the past 6 months, or > 10% weight loss beyond 6 months [1]. Low BMI cutoffs are stratified by age: for individuals under 70 years, a BMI < 20.0 kg/m² indicates malnutrition (< 18.5 kg/m² in Asian populations), whereas for adults aged 70 years and older, a higher threshold of < 22.0 kg/m² is mandated (< 20.0 kg/m² in Asian populations) to account for age-related survival dynamics [1].',
            'গ্লিম ফ্রেমওয়ার্কে ফেনোটাইপিক মানদণ্ডগুলোকে তিনটি সুনির্দিষ্ট ভাগে ভাগ করা হয়েছে: অনিচ্ছাকৃত ওজন হ্রাস, কম বিএমআই এবং কঙ্কালপেশির ক্ষয় [১]। অনিচ্ছাকৃত ওজন হ্রাসের মাপকাঠি হলো বিগত ৬ মাসে দেহের ওজনের ৫ শতাংশের বেশি হ্রাস, অথবা ৬ মাসের অধিক সময়ে ১০ শতাংশের বেশি হ্রাস [১]। কম বিএমআই-এর সীমা বয়সের ভিত্তিতে নির্ধারিত: ৭০ বছরের কম বয়সীদের জন্য বিএমআই ২০.০ এর কম (এশীয়দের ক্ষেত্রে ১৮.৫ এর কম) এবং ৭০ বা তদূর্ধ্ব প্রবীণদের জন্য ২২.০ এর কম (এশীয়দের ক্ষেত্রে ২০.০ এর কম) অপুষ্টি নির্দেশ করে, যা প্রবীণদের টিকে থাকার শারীরবৃত্তীয় প্রয়োজনীয়তার সাথে সামঞ্জস্যপূর্ণ [১]।',
          ),
          l(
            'Reduced muscle mass in GLIM must be evaluated using validated anthropometric or bio-imaging modalities whenever feasible [1]. Validated measurement tools include Dual-Energy X-ray Absorptiometry (DXA) for appendicular lean mass index, Bioelectrical Impedance Analysis (BIA) for phase angle and skeletal muscle index, and computed tomography (CT) at the third lumbar vertebra (L3 skeletal muscle index) [1]. When objective imaging is unavailable, physical anthropometry—such as mid-upper arm muscle circumference (MAMC) or calf circumference (< 31 cm in older adults)—serves as an acceptable clinical surrogate [1].',
            'গ্লিম মানদণ্ডে পেশির ক্ষয় নির্ধারণে নির্ভরযোগ্য যন্ত্রভিত্তিক পরীক্ষা ব্যবহারের তাগিদ দেওয়া হয়েছে [১]। এর মধ্যে ডুয়েল-এনার্জি এক্স-রে অ্যাবজরপটিওমেট্রি (DXA), বায়োইলেকট্রিক্যাল ইম্পিডেন্স অ্যানালাইসিস (BIA) এবং পেটের তৃতীয় লাম্বার কশেরুকা বরাবর সিটি স্ক্যানের (L3-CT) মাধ্যমে পেশির ক্ষেত্রফল পরিমাপ অন্যতম [১]। তবে আধুনিক স্ক্যানিং সুবিধা না থাকলে চিকিৎসকেরা বাহুর মধ্যভাগের পেশির পরিধি (MAMC) কিংবা পায়ের কাফ মাসলের পরিধি (প্রবীণদের ক্ষেত্রে ৩১ সেন্টিমিটারের কম) পরিমাপ করে পেশিক্ষয় শনাক্ত করতে পারেন [১]।',
          ),
          l(
            'Once phenotypic criteria are met, the diagnosis requires confirmation of an etiologic driver: either reduced food intake/assimilation or disease-related inflammation [1]. Reduced food intake is defined as <= 50% of energy requirements for > 1 week, or any significant reduction for > 2 weeks, or chronic malabsorptive gastrointestinal conditions [1]. Disease-related inflammation is classified as acute disease/injury (severe sepsis, burns, major trauma with C-reactive protein > 10 mg/L) or chronic disease-related inflammation (rheumatoid arthritis, COPD, heart failure, chronic kidney disease, or metastatic cancer with persistent low-grade inflammatory markers) [1].',
            'ফেনোটাইপিক লক্ষণ দৃশ্যমান হওয়ার পর রোগের কারণগত বা এটিওলজিক মানদণ্ড যাচাই করা হয়, যার মধ্যে রয়েছে খাদ্যাভ্যাসে মারাত্মক ঘাটতি অথবা রোগজনিত প্রদাহ [১]। খাদ্যাভ্যাসের ঘাটতি বলতে বোঝায় ১ সপ্তাহের বেশি সময় ধরে মোট চাহিদার ৫০ শতাংশ বা তার কম খাওয়া, অথবা ২ সপ্তাহের বেশি সময় উল্লেখযোগ্য ঘাটতি থাকা কিংবা অন্ত্রের দীর্ঘস্থায়ী শোষণহীনতা [১]। আর রোগজনিত প্রদাহকে তীব্র রোগ/আঘাত (যেমন সেপসিস, মারাত্মক পোড়া রোগী বা ট্রমা যেখানে সিআরপি ১০ এর বেশি) অথবা দীর্ঘস্থায়ী প্রদাহজনিত রোগ (যেমন রিউমাটয়েড আর্থ্রাইটিস, সিওপিডি, ক্রনিক কিডনি ডিজিজ বা ক্যান্সার) হিসেবে শ্রেণিবদ্ধ করা হয় [১]।',
          ),
        ],
        },
        {
          id: 'structure',
          heading: l('Comparative Bioenergetics: Starvation vs Sarcopenia vs Cytokine Cachexia', 'তুলনামূলক জৈবশক্তিবিজ্ঞান: অনাহার বনাম সারকোপেনিয়া বনাম সাইটোকাইন ক্যাক্সিয়া'),
          paragraphs: [
          l(
            'The metabolic distinction between simple starvation and disease-related cachexia is rooted in neuroendocrine versus immunological regulation [2]. In pure starvation, the falling insulin-to-glucagon ratio triggers hormone-sensitive lipase (HSL) in white adipose tissue, releasing free fatty acids (FFAs) that undergo mitochondrial beta-oxidation in hepatocytes to generate acetoacetate and beta-hydroxybutyrate [2]. The brain adapts to utilize ketones, sparing systemic glucose demand and reducing skeletal muscle proteolysis from an initial 75 g/day down to approximately 15-20 g/day, preserving life for up to 60-90 days [2].',
            'সাধারণ অনাহার এবং রোগজনিত ক্যাক্সিয়ার বিপাকীয় পার্থক্যটি মূলত নিউরোএন্ডোক্রিন বনাম ইমিউনোলজিক্যাল নিয়ন্ত্রণের ওপর নির্ভরশীল [২]। বিশুদ্ধ অনাহারে রক্তের ইনসুলিন কমে যাওয়ায় চর্বি কোষের হরমোন-সেনসিটিভ লাইপেজ (HSL) সক্রিয় হয় এবং মুক্ত ফ্যাটি অ্যাসিড নির্গত করে; যা লিভারে গিয়ে বিটা-অক্সিডেশনের মাধ্যমে কিটোন বডিতে রূপান্তরিত হয় [২]। মস্তিষ্ক এই কিটোন বডি ব্যবহার করতে শিখে যাওয়ায় শরীরের প্রোটিন ভাঙার প্রয়োজনীয়তা কমে যায়; ফলে প্রথমদিকের দৈনিক ৭৫ গ্রাম পেশি ভাঙন কমে গিয়ে মাত্র ১৫-২০ গ্রামে নেমে আসে এবং রোগী ৬০ থেকে ৯০ দিন পর্যন্ত অনাহারে বেঁচে থাকতে পারে [২]।',
          ),
          l(
            'In sharp contrast, cancer cachexia is characterized by unrelenting systemic inflammation driven by pro-inflammatory cytokines: tumor necrosis factor-alpha (TNF-alpha/cachectin), interleukin-1 beta (IL-1beta), interleukin-6 (IL-6), and interferon-gamma (IFN-gamma) [2]. These cytokines activate the nuclear factor kappa-light-chain-enhancer of activated B cells (NF-kB) and signal transducer and activator of transcription 3 (STAT3) signaling pathways in skeletal myocytes [2]. These cascades directly upregulate muscle-specific E3 ubiquitin ligases—specifically Muscle RING Finger 1 (MuRF1) and Muscle Atrophy F-box (MAFbx/Atrogin-1)—which tag myofibrillar contractile proteins (actin, myosin heavy chain) for rapid destruction by the 26S proteasome [2].',
            'বিপরীতভাবে, ক্যান্সারজনিত ক্যাক্সিয়া হলো তীব্র প্রদাহের এক ধ্বংসাত্মক রূপ যা টিএনএফ-আলফা (TNF-alpha), ইন্টারলিউকিন-১ বিটা (IL-1beta), ইন্টারলিউকিন-৬ (IL-6) এবং ইন্টারফেরন-গামার মতো সাইটোকাইন দ্বারা পরিচালিত হয় [২]। এই সংকেত অণুগুলো কঙ্কালপেশির কোষে প্রবেশ করে NF-kB এবং STAT3 সংকেত পথ সক্রিয় করে তোলে [২]। এর ফলে পেশির প্রোটিন ধ্বংসকারী বিশেষ এনজাইম—যেমন MuRF1 এবং Atrogin-1—অস্বাভাবিকভাবে বৃদ্ধি পায় এবং মাংসপেশির মূল কার্যকরী প্রোটিনগুলোকে (মায়োসিন ও অ্যাক্টিন) চিহ্নিত করে কোষের 26S প্রোটিসোম মেশিনের মাধ্যমে দ্রুত টুকরো টুকরো করে ধ্বংস করে ফেলে [২]।',
          ),
          l(
            'Furthermore, cachexia induces severe metabolic inefficiency through mitochondrial uncoupling in adipose tissue and skeletal muscle [2]. Pro-inflammatory mediators stimulate the expression of Uncoupling Protein 1 (UCP1) in white adipocytes, inducing phenotypic "browning" of white fat depots [2]. Rather than capturing electrochemical proton gradients across the inner mitochondrial membrane as ATP, UCP1 dissipates the proton motive force as futile heat [2]. This uncoupling dramatically elevates resting energy expenditure (REE) despite profound patient anorexia, locking the individual in a state of unavoidable, hypermetabolic energy wasting [2].',
            'তাছাড়া, ক্যাক্সিয়া রোগে শরীরের চর্বি ও মাংসপেশির মাইটোকন্ড্রিয়াতে মারাত্মক শক্তির অপচয় ঘটে [২]। প্রদাহজনক উপাদানগুলো সাধারণ সাদা চর্বি কোষে আনকপলিং প্রোটিন-১ (UCP1) তৈরি করায়, যার ফলে সাধারণ চর্বিগুলো বাদামী চর্বির মতো আচরণ করতে শুরু করে [২]। মাইটোকন্ড্রিয়ার এই প্রোটিনটি রাসায়নিক শক্তিকে এটিপি (ATP) হিসেবে জমা করার পরিবর্তে অপ্রয়োজনীয় তাপ হিসেবে বাতাসে উড়িয়ে দেয় [২]। এর ফলে রোগী না খেয়ে শুকিয়ে গেলেও তার শরীরের বিশ্রামকালীন শক্তি ব্যয় (REE) ভয়াবহভাবে বেড়ে যায় এবং শরীর দ্রুত নিজের মাংস নিজেই পুড়িয়ে শেষ করে ফেলে [২]।',
          ),
          l(
            'Primary sarcopenia represents an independent biological entity driven by cellular senescence rather than acute inflammatory storm [1, 2]. Sarcopenia is characterized by age-associated motor unit denervation, loss of type II (fast-twitch) muscle fibers, intramuscular lipid infiltration (myosteatosis), and blunted mechanotransduction [1]. Most critically, aging myocytes display profound resistance to the mechanistic target of rapamycin complex 1 (mTORC1) cascade, failing to stimulate fractional protein synthetic rates even in the presence of elevated circulating leucine and essential amino acids [1].',
            'অন্যদিকে প্রাথমিক সারকোপেনিয়া হলো বার্ধক্যজনিত স্বাভাবিক কোষীয় ক্ষয় যা কোনো তীব্র প্রদাহজনক ঝড় ছাড়াই ধীরগতিতে অগ্রসর হয় [১, ২]। সারকোপেনিয়ায় মোটর নিউরনের সংযোগ কমে যায়, দ্রুত সংকুচিত হওয়া টাইপ-২ পেশিতন্তু ধ্বংস হয় এবং পেশির ভেতর চর্বি ঢুকে পড়ে [১]। সবচেয়ে তাৎপর্যপূর্ণ বিষয় হলো, বয়স্ক পেশিকোষের ভেতরে এমটরসি১ (mTORC1) প্রোটিন তৈরির সংকেত ব্যবস্থা নিষ্ক্রিয় হয়ে পড়ে; যার কারণে রক্তে পর্যাপ্ত লিউসিন বা অ্যামিনো অ্যাসিড থাকা সত্ত্বেও পেশিকোষ নতুন প্রোটিন তৈরি করতে চরমভাবে ব্যর্থ হয় [১]।',
          ),
        ],
        },
        {
          id: 'mechanism',
          heading: l('Molecular Enzymology of Refeeding Syndrome: Hypophosphatemia & Energetic Collapse', 'রিফিডিং সিন্ড্রোমের আণবিক এনজাইমোলজি: হাইপোফসফেটেমিয়া ও বিপাকীয় পতন'),
          paragraphs: [
          l(
            'The biochemical trigger for refeeding syndrome is the abrupt transition from gluconeogenesis and beta-oxidation to accelerated aerobic glycolysis upon carbohydrate ingestion [3, 6]. Starved tissues maintain low intracellular concentrations of free inorganic phosphate (Pi) due to reduced dietary intake and chronic renal excretion [3]. When glucose enters the circulation, the sudden release of insulin stimulates hexokinase and glucokinase to phosphorylate glucose into glucose-6-phosphate, consuming intracellular ATP [3].',
            'রিফিডিং সিন্ড্রোমের আণবিক সূচনার মূল কারণ হলো দীর্ঘদিনের কিটোন নির্ভরতা থেকে আকস্মিকভাবে তীব্র অ্যারোবিক গ্লাইকোলাইসিসে রূপান্তর [৩, ৬]। দীর্ঘ অনাহারী রোগীর কোষে ফসফেটের পরিমাণ অত্যন্ত কম থাকে। এমন অবস্থায় যখন রক্তে গ্লুকোজ ঢোকে, তখন ইনসুলিনের বন্যায় হেক্সোকাইনেজ ও গ্লুকোকাইনেজ এনজাইমগুলো বিদ্যুৎগতিতে সক্রিয় হয়ে গ্লুকোজকে ফসফেটে রূপান্তর করতে শুরু করে এবং কোষের অবশিষ্ট মূল্যবান এটিপি খরচ করে ফেলে [৩]।',
          ),
          l(
            'Simultaneously, the downstream glycolytic pathway accelerates via phosphofructokinase-1 (PFK-1) and glyceraldehyde-3-phosphate dehydrogenase (GAPDH) [3]. GAPDH requires inorganic phosphate to convert glyceraldehyde-3-phosphate to 1,3-bisphosphoglycerate, acting as an enormous biochemical "sponge" that absorbs free cytosolic phosphate [3]. Because the sodium-phosphate cotransporter (NaPi-IIb in gut, NaPi-IIa in kidneys) cannot compensate for this instantaneous intracellular sequestering, intravascular serum phosphate plunges precipitously, often falling below 0.30 mmol/L (normal: 0.81-1.45 mmol/L) within 24 to 72 hours of feeding [3, 6].',
            'একই সাথে গ্লাইকোলাইসিসের পরবর্তী ধাপে পিএফকে-১ (PFK-1) এবং গ্লিসারালডিহাইড-৩-ফসফেট ডিহাইড্রোজিনেজ (GAPDH) এনজাইমগুলো তীব্র বেগে কাজ করতে শুরু করে [৩]। এই GAPDH এনজাইমটি প্রচুর পরিমাণে মুক্ত ফসফেট শোষণ করে গ্লিসারালডিহাইডকে ভেঙে অ্যাসিড তৈরি করে, যা একটি আণবিক স্পঞ্জের মতো কোষের সমস্ত ফসফেট শুষে নেয় [৩]। কিডনি বা অন্ত্র এই দ্রুত ঘাটতি পূরণ করতে পারে না; ফলে খাবার শুরু করার ২৪ থেকে ৭২ ঘণ্টার মধ্যে রক্তনালির ভেতরের ফসফেট ভয়াবহভাবে শূন্যে নেমে যায় (যা স্বাভাবিক ০.৮১-১.৪৫ এর বিপরীতে ০.৩০ মিলিমোলেরও নিচে নেমে আসে) [৩, ৬]।',
          ),
          l(
            'This precipitous hypophosphatemia induces two catastrophic biophysical crises: acute cellular ATP starvation and red blood cell 2,3-bisphosphoglycerate (2,3-BPG) depletion [3, 6]. Without inorganic phosphate, mitochondrial ATP synthase (complex V) is completely stalled, arresting oxidative phosphorylation [3]. Simultaneously, erythrocytes lose 2,3-BPG, causing the oxygen-hemoglobin dissociation curve to shift severely to the left (Bohr effect reversal); hemoglobin binds oxygen with such high affinity that it fails to unload oxygen at capillary beds, inducing systemic tissue hypoxia despite normal arterial pO2 [3, 6].',
            'রক্তে ফসফেটের এই মারাত্মক পতন দুটি প্রধান জৈব-ভৌত বিপর্যয় ডেকে আনে: কোষের এটিপি (ATP) তৈরি বন্ধ হওয়া এবং লোহিত রক্তকণিকায় 2,3-BPG অণু শূন্য হয়ে যাওয়া [৩, ৬]। অজৈব ফসফেটের অভাবে মাইটোকন্ড্রিয়ার এটিপি তৈরির চাকা সম্পূর্ণ থমকে যায় [৩]। একই সাথে লোহিত কণিকায় 2,3-BPG না থাকায় হিমোগ্লোবিনের অক্সিজেন ছাড়ার ক্ষমতা নষ্ট হয়ে যায় (অক্সিজেন-হিমোগ্লোবিন ডিসোসিয়েশন কার্ভ বামে সরে যায়); ফলে রক্তে প্রচুর অক্সিজেন থাকা সত্ত্বেও তা কোষের ভেতর প্রবেশ করতে পারে না এবং পুরো দেহ মারাত্মক অক্সিজেনহীনতায় আক্রান্ত হয় [৩, ৬]।',
          ),
          l(
            'The clinical manifestations of these cellular failures are swift and life-threatening [3, 6]. Deprived of ATP, the actin-myosin cross-bridge cycles of cardiac myocytes fail, precipitating acute congestive heart failure and cardiogenic shock [3]. Concurrently, potassium and magnesium deficits impair the cardiac sodium-potassium ATPase pump and delayed rectifier potassium channels (IKr), causing severe prolongation of the electrocardiographic QTc interval and triggering polymorphic ventricular tachycardia (Torsades de Pointes) or ventricular fibrillation [3, 6]. Diaphragmatic contractility fails simultaneously, requiring emergency endotracheal intubation [3].',
            'এই কোষীয় বিপর্যয়ের ক্লিনিক্যাল বহিঃপ্রকাশ অত্যন্ত দ্রুত ও মারাত্মক রূপ ধারণ করে [৩, ৬]। এটিপির অভাবে হৃদযন্ত্রের মাংসপেশির সংকোচন ক্ষমতা নষ্ট হয়ে যায় এবং তীব্র হার্ট ফেইলিউর দেখা দেয় [৩]। একই সাথে পটাশিয়াম ও ম্যাগনেসিয়ামের ঘাটতির কারণে হার্টের বৈদ্যুতিক তারে গোলযোগ তৈরি হয় এবং ইসিজিতে কিউটি ইন্টারভাল (QTc) বিপজ্জনকভাবে দীর্ঘায়িত হয়ে প্রাণঘাতী ভেন্ট্রিকুলার টেকিকার্ডিয়া বা ভেন্ট্রিকুলার ফিব্রিলেশন ঘটে [৩, ৬]। সাথে সাথে ফুসফুসের ডায়াফ্রাম পেশি অকেজো হয়ে রোগী শ্বাসকষ্টে নীল হয়ে যায় এবং ভেন্টিলেটর সাপোর্টের প্রয়োজন হয় [৩]।',
          ),
        ],
        },
        {
          id: 'integration',
          heading: l('Advanced Enteral and Parenteral Formulation Science & Intestinal Integrity', 'উন্নত এন্টারাল ও প্যারেন্টেরাল ফর্মুলেশন বিজ্ঞান এবং অন্ত্রের প্রতিরোধ প্রাচীর'),
          paragraphs: [
          l(
            'The science of enteral formula composition is governed by molecular structure, nutrient density, and gastrointestinal absorptive capacity [4, 5]. Standard polymeric formulas contain intact, high-molecular-weight proteins (casein, whey, soy isolates) and complex maltodextrins with an osmolarity close to physiological blood plasma (300 to 350 mOsm/kg), making them suitable for 85-90% of hospital patients with intact digestive enzyme output [4]. Caloric density typically ranges from 1.0 to 1.5 kcal/mL, providing balanced macro- and micronutrients for gastric delivery [4].',
            'এন্টারাল ফর্মুলা তৈরির বিজ্ঞানটি পুষ্টি উপাদানের আণবিক গঠন, ঘনমাত্রা এবং অন্ত্রের শোষণ ক্ষমতার ওপর নির্ভর করে পরিচালিত হয় [৪, ৫]। সাধারণ পলিমারিক ফর্মুলাগুলোতে অখণ্ড প্রোটিন (যেমন কেসিন বা হোয়ে প্রোটিন) এবং জটিল কার্বোহাইড্রেট থাকে, যার অসমোলারিটি রক্তের প্লাজমার মতোই স্বাভাবিক (৩০০-৩৫০ মিলিঅসমোল/কেজি); তাই যেসব রোগীর হজম ক্ষমতা ভালো তাদের ৮৫-৯০ শতাংশ ক্ষেত্রেই এটি নিরাপদভাবে ব্যবহার করা যায় [৪]। এর শক্তির ঘনত্ব সাধারণত ১.০ থেকে ১.৫ ক্যালোরি/মিলি হয়ে থাকে যা পাকস্থলীতে স্বাভাবিক খাবার প্রবেশের মতোই কাজ করে [৪]।',
          ),
          l(
            'For patients with impaired digestion or malabsorption—such as active Crohn disease, severe short bowel syndrome, or pancreatic insufficiency—semi-elemental (oligomeric) and elemental formulations are required [4, 5]. Semi-elemental formulas feature enzymatically hydrolyzed whey or soy proteins consisting of di- and tripeptides, which are absorbed far more rapidly across enterocyte brush border membranes via the high-capacity PEPT1 transporter than intact proteins or free amino acids [4]. Furthermore, 40% to 70% of the lipid fraction is replaced with medium-chain triglycerides (MCTs), which are absorbed directly into the mesenteric portal circulation without requiring bile salt micelle formation or chylomicron packaging [4, 5].',
            'কিন্তু যেসব রোগীর অন্ত্রের শোষণ ক্ষমতা নষ্ট—যেমন তীব্র ক্রোনস ডিজিজ, অগ্ন্যাশয়ের এনজাইম ঘাটতি বা শর্ট বাওয়েল সিন্ড্রোম—তাদের জন্য সেমি-এলিমেন্টাল (হাইড্রোলাইজড) বা এলিমেন্টাল ফর্মুলা প্রয়োজন [৪, ৫]। সেমি-এলিমেন্টাল ফর্মুলায় প্রোটিনকে আগে থেকেই ভেঙে ডাই- ও ট্রাইপেপটাইড বানিয়ে রাখা হয়, যা অন্ত্রের PEPT1 চ্যানেল দিয়ে সাধারণ প্রোটিনের চেয়ে বহুগুণ দ্রুত সরাসরি শোষিত হয় [৪]। তাছাড়া এদের চর্বির একটি বড় অংশ মিডিয়াম-চেন ট্রাইগ্লিসারাইড (MCT) দিয়ে গঠিত, যা পিত্তরসের সাহায্য ছাড়াই সরাসরি রক্তনালিতে শোষিত হয়ে লিভারে পৌঁছে যায় [৪, ৫]। ',
          ),
          l(
            'Total Parenteral Nutrition (TPN) represents a biochemically hypertonic admixture requiring central venous administration [4, 5]. Standard central TPN formulations possess osmolarities ranging from 1,200 to 2,000 mOsm/L, driven by concentrated dextrose (15-25% final concentration) and crystalline synthetic amino acids (8-15%), infused alongside electrolytes and vitamins [4]. If infused into small peripheral veins, osmolarities exceeding 900 mOsm/L rapidly draw water from endothelial cells, causing acute vascular collapse, sterile chemical thrombophlebitis, and vein thrombosis; hence, infusion mandates central catheter tips positioned in the superior vena cava [4, 5].',
            'টোটাল প্যারেন্টেরাল পুষ্টি (টিপিএন) হলো অত্যন্ত ঘন বা হাইপারটনিক একটি স্যালাইন যা কেবল সেন্ট্রাল শিরার মাধ্যমেই প্রয়োগ করা সম্ভব [৪, ৫]। সাধারণ সেন্ট্রাল টিপিএনের অসমোলারিটি ১,২০০ থেকে ২,০০০ মিলিঅসমোল/লিটার পর্যন্ত হয়ে থাকে, কারণ এতে ঘন গ্লুকোজ (১৫-২৫%) এবং কৃত্রিম অ্যামিনো অ্যাসিডের মিশ্রণ থাকে [৪]। এই অতি ঘন দ্রবণ যদি হাতের সাধারণ চিকন রগে দেওয়া হয়, তবে তা রগের ভেতরের কোষ থেকে পানি টেনে নিয়ে রগ ফুলিয়ে জমাট রক্ত তৈরি করে (থ্রম্বোফ্লেবাইটিস); তাই এটি প্রয়োগ করতে হলে ক্যাথেটারের মাথাটি অবশ্যই হৃৎপিণ্ডের ঠিক উপরের সুপিরিয়র ভেনাক্যাভায় স্থাপন করতে হয় [৪, ৫]। ',
          ),
          l(
            'The evolution of intravenous lipid emulsions (ILE) has transformed parenteral safety [4, 5]. Traditional first-generation pure soybean oil emulsions were rich in omega-6 polyunsaturated fatty acids (linoleic acid), driving pro-inflammatory eicosanoid cascades and contributing to Intestinal Failure-Associated Liver Disease (IFALD) and phytosterol-induced cholestasis [4]. Modern third- and fourth-generation emulsions—such as SMOFlipid (a composite of soybean oil, medium-chain triglycerides, olive oil, and fish oil)—incorporate omega-3 fatty acids (EPA and DHA) and alpha-tocopherol, which downregulate inflammatory cytokines, restore hepatic canalicular bile transport, and drastically reduce the incidence of IFALD in long-term PN patients [4, 5].',
            'শিরাপথে চর্বি প্রয়োগের প্রযুক্তিতে আধুনিক বিজ্ঞান এক বৈপ্লবিক পরিবর্তন এনেছে [৪, ৫]। প্রথম প্রজন্মের সয়াবিন তেলের স্যালাইনে প্রচুর ওমেগা-৬ ফ্যাটি অ্যাসিড থাকত, যা শরীরে তীব্র প্রদাহ তৈরি করত এবং লিভারে বিষাক্ত চর্বি ও পিত্ত জমাট বাঁধিয়ে লিভার অকেজো (IFALD) করে দিত [৪]। কিন্তু আধুনিক চতুর্থ প্রজন্মের ইমালশনগুলোতে (যেমন SMOFlipid) সয়াবিনের পাশাপাশি অলিভ অয়েল, এমসিটি তেল এবং মাছের তেলের ওমেগা-৩ (EPA ও DHA) যুক্ত করা হয়েছে, যা লিভারের প্রদাহ কমায় এবং পিত্তরসের স্বাভাবিক প্রবাহ বজায় রেখে দীর্ঘমেয়াদী টিপিএন নেওয়া রোগীদের লিভারকে সুরক্ষিত রাখে [৪, ৫]। ',
          ),
        ],
        },
        {
          id: 'practice',
          heading: l('Academic Management of Acute Refeeding Crisis & ICU Nutrition Titration', 'তীব্র রিফিডিং সংকটের জরুরি চিকিৎসা ও আইসিইউ পুষ্টি টাইট্রেশন'),
          paragraphs: [
          l(
            'When acute refeeding hypophosphatemia develops despite conservative initiation, aggressive intravenous therapy must be implemented without interrupting essential basal calories [3, 6]. If serum phosphate drops into the moderate range (0.32-0.64 mmol/L), provide intravenous sodium glycerophosphate or potassium phosphate at 0.3 to 0.6 mmol/kg body weight infused over 4 to 6 hours [3]. If severe hypophosphatemia (< 0.32 mmol/L) occurs, caloric advancement must be completely frozen, intravenous phosphate infused at 0.6 to 0.9 mmol/kg, continuous ECG telemetry maintained, and serum electrolytes repeated every 6 hours [3, 6].',
            'খাবার শুরুর পর সতর্ক থাকা সত্ত্বেও যদি রক্তে ফসফেটের মারাত্মক পতন ঘটে, তবে খাবার পুরোপুরি বন্ধ না করে জরুরি ভিত্তিতে শিরাপথে ফসফেট ইনজেকশন দিতে হবে [৩, ৬]। যদি ফসফেটের মাত্রা মাঝারিভাবে কমে যায় (০.৩২-০.৬৪ মিলিমোল/লিটার), তবে রোগীকে প্রতি কেজিতে ০.৩ থেকে ০.৬ মিলিমোল ফসফেট স্যালাইনের মাধ্যমে ৪ থেকে ৬ ঘণ্টা ধরে প্রয়োগ করতে হবে [৩]। আর যদি মাত্রা ০.৩২ এর নিচে নেমে যায়, তবে ক্যালোরি বাড়ানো সম্পূর্ণ বন্ধ রেখে প্রতি কেজিতে ০.৬-০.৯ মিলিমোল ফসফেট দিতে হবে এবং প্রতি ৬ ঘণ্টা পর পর রক্ত পরীক্ষা ও সার্বক্ষণিক ইসিজি মনিটরিং চালাতে হবে [৩, ৬]।',
          ),
          l(
            'In critically ill ICU patients with hypercatabolic sepsis, nutrition initiation follows a strict hemodynamic hierarchy [4, 5]. Nutritional support should never be started during active, uncontrolled shock when mean arterial pressure is unstable or escalating doses of vasopressors are required; feeding an underperfused, hypoxic bowel can precipitate lethal non-occlusive mesenteric ischemia (NOMI) [4, 5]. Only once vasopressor requirements stabilize or de-escalate and arterial blood lactate declines (< 2.0 mmol/L) should trophic enteral nutrition be initiated at 10 to 20 mL/hr, providing low-volume mucosal nourishment [4, 5].',
            'আইসিইউতে সেপটিক শকের রোগীদের ক্ষেত্রে পুষ্টি শুরুর আগে রক্তচাপ ও সঞ্চালনের স্থিতিশীলতা যাচাই করা জীবনরক্ষাকারী পূর্বশর্ত [৪, ৫]। রোগী যখন অনিয়ন্ত্রিত শকে থাকে এবং রক্তচাপ ধরে রাখতে নরঅ্যাড্রেনালিন ইনজেকশনের মাত্রা ক্রমাগত বাড়াতে হয়, তখন কখনোই নল দিয়ে খাবার দেওয়া যাবে না; কারণ রক্তহীন অক্সিজেনহীন অন্ত্রে খাবার দিলে অন্ত্রের নাড়ি পচে গিয়ে মারাত্মক গ্যাংগ্রিন (NOMI) হতে পারে [৪, ৫]। কেবল যখন রক্তচাপ স্থির হবে এবং রক্তে ল্যাকটেটের মাত্রা স্বাভাবিকের দিকে নামবে (২.০ এর নিচে), তখনই ঘণ্টায় মাত্র ১০-২০ মিলি হারে ক্ষুদ্রাতিক্ষুদ্র পরিমাণে এন্টারাল পুষ্টি শুরু করতে হবে [৪, ৫]।',
          ),
          l(
            'Determination of energy targets in the ICU must avoid the twin perils of underfeeding and overfeeding [4, 5]. While indirect calorimetry represents the gold standard for measuring resting energy expenditure, validated predictive equations (such as 20-25 kcal/kg/day during the acute phase advancing to 25-30 kcal/kg/day in recovery) are widely utilized [4, 5]. Overfeeding calories in the acute phase of sepsis must be strictly avoided: excessive carbohydrate infusion elevates carbon dioxide production (VCO2), worsening respiratory acidosis and prolonging mechanical ventilation dependence, while driving hepatic steatosis and hyperosmolar hyperglycemia [4, 5].',
            'আইসিইউতে রোগীর সঠিক ক্যালোরি নির্ধারণ করা একটি সূক্ষ্ম ভারসাম্য রক্ষা করার মতো কাজ, যেখানে কম ক্যালোরি বা বেশি ক্যালোরি দুটোই ক্ষতিকর [৪, ৫]। যদিও ইনডাইরেক্ট ক্যালোরিমেট্রি হলো শ্বাস-প্রশ্বাস মেপে ক্যালোরি বের করার সর্বোত্তম বৈজ্ঞানিক পদ্ধতি, তবে সাধারণ গণনায় তীব্র রোগের শুরুতে দিনে ২০-২৫ ক্যালোরি/কেজি এবং সুস্থতার ধাপে ২৫-৩০ ক্যালোরি/কেজি হিসাব করা হয় [৪, ৫]। সেপসিসের শুরুতে জোর করে অতিরিক্ত ক্যালোরি দিলে রক্তে কার্বন ডাই-অক্সাইড বেড়ে গিয়ে ফুসফুসের শ্বাসকষ্ট বাড়ায়, ভেন্টিলেটর থেকে রোগীকে খোলার প্রক্রিয়া বিলম্বিত করে এবং লিভারে চর্বি জমায় [৪, ৫]।',
          ),
          l(
            'Protein requirements in the critically ill must be disengaged from caloric targets [4, 5]. Sepsis, trauma, and burns induce severe nitrogen wasting that requires 1.2 to 2.0 g/kg/day of protein, delivered independently of caloric restriction [4, 5]. Target blood glucose concentrations should be maintained between 7.8 and 10.0 mmol/L (140-180 mg/dL) using continuous intravenous regular insulin protocols; strict normoglycemia (< 6.1 mmol/L) is explicitly contraindicated due to catastrophic risks of unrecognized hypoglycemia in sedated patients [4, 5].',
            'সংকটজনক রোগীদের ক্ষেত্রে প্রোটিনের চাহিদাকে মোট ক্যালোরির সাথে মিলিয়ে দেখা চলবে না; বরং এটি স্বাধীনভাবে নির্ধারণ করতে হয় [৪, ৫]। মারাত্মক ইনফেকশন ও ট্রমার রোগীদের প্রতিদিন প্রতি কেজিতে ১.২ থেকে ২.০ গ্রাম পর্যন্ত প্রোটিন দিতে হয় যা তাদের মাংসপেশি রক্ষা করে [৪, ৫]। সেই সাথে রক্তের গ্লুকোজ সর্বদা ৭.৮ থেকে ১০.০ মিলিমোল/লিটারের (১৪০-১৮০ মিগ্রা/ডেসিলিটার) মধ্যে ইনসুলিনের মাধ্যমে নিয়ন্ত্রণ করতে হবে; অতিরিক্ত কড়াকড়ি করে গ্লুকোজ ৬ এর নিচে নামানোর চেষ্টা করলে অজ্ঞাতে রোগী মারাত্মক হাইপোগ্লাইসেমিয়ায় আক্রান্ত হয়ে ব্রেন ড্যামেজ হতে পারে [৪, ৫]।',
          ),
        ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Critical Care Nutrition & Metabolic Failure', 'একাডেমিক সংশ্লেষ: ক্রিটিক্যাল কেয়ার পুষ্টি ও মেটাবলিক ব্যর্থতা'),
          paragraphs: [
          l(
            'The GLIM diagnostic architecture mandates a two-step framework: validated screening followed by confirmation requiring at least one phenotypic criterion (weight loss, low BMI, DXA/BIA-verified muscle mass reduction) and at least one etiologic criterion (reduced intake/malabsorption, acute or chronic disease-related inflammation) [1]. This standardized system distinguishes simple famine from complex, inflammation-driven wasting.',
            'গ্লিম (GLIM) নির্ণায়ক কাঠামো একটি দুই-ধাপের বিজ্ঞানসম্মত পদ্ধতির দাবি করে: প্রথমে স্ক্রিনিংয়ের মাধ্যমে ঝুঁকি শনাক্তকরণ, তারপর অন্তত একটি ফেনোটাইপিক মানদণ্ড (ওজন হ্রাস, কম বিএমআই, স্ক্যান-নিশ্চিত পেশিক্ষয়) এবং অন্তত একটি এটিওলজিক মানদণ্ড (খাদ্য ঘাটতি, তীব্র বা দীর্ঘস্থায়ী প্রদাহ) নিশ্চিত করা [১]। এই বৈশ্বিক পদ্ধতিটি সাধারণ অনাহার থেকে জটিল প্রদাহজনিত অপচয়কে সফলভাবে পৃথক করে।',
          ),
          l(
            'Simple starvation and cancer cachexia represent opposite poles of energetic efficiency [2]. Starvation is a conserved, ketone-adapted state where resting energy expenditure falls and muscle is spared [2]. Cachexia is an uncoupled, hypercatabolic, cytokine-driven syndrome (TNF-alpha, IL-6, MuRF1/MAFbx activation) where resting energy expenditure is pathologically elevated and muscle contractile proteins are systematically degraded, refractory to conventional hypercaloric feeding alone [2].',
            'সাধারণ অনাহার এবং ক্যান্সারজনিত ক্যাক্সিয়া হলো বিপাকীয় কার্যকারিতার সম্পূর্ণ বিপরীত দুটি মেরু [২]। অনাহার হলো একটি খাপ খাইয়ে নেওয়া অবস্থা যেখানে কিটোনের ব্যবহারে বিপাকীয় গতি কমে এবং মাংসপেশি রক্ষা পায় [২]। অন্যদিকে ক্যাক্সিয়া হলো একটি অনিয়ন্ত্রিত হাইপারক্যাটাবলিক অবস্থা যেখানে সাইটোকাইন ও প্রোটিসোমের মাধ্যমে অনবরত পেশি ভাঙতে থাকে, শক্তি অপচয় হয় এবং সাধারণ খাবার দিয়ে এই পেশিক্ষয় কখনোই রোধ করা যায় না [২]। ',
          ),
          l(
            'Refeeding syndrome is an acute iatrogenic catastrophe initiated by carbohydrate-triggered insulin secretion in a host with depleted total body mineral pools [3, 6]. Accelerated glycolysis traps inorganic phosphate, generating severe hypophosphatemia (< 0.30 mmol/L), arresting mitochondrial ATP synthesis, depleting erythrocyte 2,3-BPG, and precipitating diaphragmatic paralysis and fatal ventricular arrhythmias [3, 6]. Preventive protocols require pre-feeding thiamine administration, conservative initiation (10 kcal/kg/day), and intensive electrolyte surveillance [3].',
            'রিফিডিং সিন্ড্রোম হলো অসাবধানতাবশত চিকিৎসাজনিত এক চরম সংকট, যা দীর্ঘ অনাহারী রোগীকে হঠাৎ মিষ্টি খাবার দেওয়ার ফলে অতিরিক্ত ইনসুলিন নিঃসরণের মাধ্যমে শুরু হয় [৩, ৬]। দ্রুত গ্লাইকোলাইসিসের চাপে রক্তের সমস্ত ফসফেট কোষে ঢুকে মারাত্মক হাইপোফসফেটেমিয়া তৈরি করে, যা এটিপি ও অক্সিজেন প্রবাহ বন্ধ করে শ্বাসপেশি অবশ এবং হার্ট ফেইলিউর ঘটায় [৩, ৬]। খাবারের আগে থায়ামিন প্রয়োগ এবং দিনে মাত্র ১০ ক্যালোরি/কেজি দিয়ে শুরু করাই এর প্রধান প্রতিরোধ [৩]। ',
          ),
          l(
            'Enteral nutrition remains the foundational route of metabolic support, maintaining intestinal villus height, stimulating gut-associated lymphoid tissue, preserving tight junction barriers, and preventing septic bacterial translocation across an atrophic mucosal barrier [4, 5]. Parenteral nutrition is reserved for irreversible or severe intestinal failure, utilizing central venous catheters and modern balanced lipid emulsions (SMOF) to mitigate risks of catheter sepsis and intestinal failure-associated liver disease (IFALD) [4, 5].',
            'পরিপাকনালি কার্যকর থাকা পর্যন্ত এন্টারাল পুষ্টিই হলো প্রধান অবলম্বন, কারণ খাদ্যকণা অন্ত্রের কোষগুলোকে সরাসরি পুষ্টি দিয়ে ভিলাস সতেজ রাখে, টাইট জাংশন রক্ষা করে এবং ব্যাকটেরিয়ার সংক্রমণ প্রতিরোধ করে [৪, ৫]। আর পরিপাকনালি অকেজো হলে শিরার টিপিএন স্যালাইনে আধুনিক ওমেগা-৩ লিপিড (SMOF) ব্যবহার এবং ক্যাথেটারের পরম জীবাণুমুক্ত ব্যবস্থাপনা বজায় রেখেই কেবল রক্তে ইনফেকশন ও লিভারের মারাত্মক ক্ষতি (IFALD) প্রতিরোধ করা সম্ভব [৪, ৫]। ',
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
          heading: l('Advanced Diagnostic Metabolomics & Body Composition Analysis in Malnutrition', 'অপুষ্টির উন্নত ডায়াগনস্টিক মেটাবলোমিক্স ও বডি কম্পোজিশন বিশ্লেষণ'),
          paragraphs: [
          l(
            'At the cutting edge of clinical nutrition science, diagnosing malnutrition is advancing beyond static anthropometry toward high-resolution metabolomics and molecular body composition profiling [1]. While traditional serum proteins like albumin and prealbumin (transthyretin) were historically misidentified as nutritional markers, modern biochemistry recognizes them as negative acute-phase reactants modulated by hepatic gene suppression during systemic inflammation, reflecting inflammatory burden rather than nutritional reserve [1]. Current research focuses on metabolomic profiling—such as serum acylcarnitine patterns, branched-chain amino acid (BCAA) turnover, and 3-methylhistidine excretion—to quantify whole-body muscle proteolysis in real time [1].',
            'ক্লিনিক্যাল নিউট্রিশন বিজ্ঞানের সর্বাধুনিক প্রান্তে এসে অপুষ্টি শনাক্তকরণ কেবল সাধারণ শারীরিক মাপজোখে সীমাবদ্ধ নেই; বরং এটি উচ্চ-নির্ভুলতার মেটাবলোমিক্স এবং আণবিক বডি কম্পোজিশন প্রযুক্তির দিকে এগিয়ে গেছে [১]। যদিও ঐতিহাসিকভাবে রক্তের অ্যালবুমিন বা প্রি-অ্যালবুমিনকে পুষ্টির সূচক মনে করা হতো, আধুনিক জৈবরসায়ন প্রমাণ করেছে যে এগুলো আসলে প্রদাহের সময় লিভার থেকে কমে যাওয়া নেগেটিভ একিউট-ফেজ রিঅ্যাক্ট্যান্ট, যা পুষ্টির চেয়ে রোগীর প্রদাহের তীব্রতাই বেশি প্রকাশ করে [১]। আধুনিক গবেষণায় সিরাম অ্যাসাইলকার্নিটিন প্যাটার্ন, ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিডের ভাঙন এবং প্রস্রাবে ৩-মিথাইলহিস্টিডিনের মতো মেটাবলোমিক মার্কার মেপে রোগীর কঙ্কালপেশি ভাঙনের প্রকৃত মাত্রা তাৎক্ষণিকভাবে নিরূপণ করা হচ্ছে [১]।',
          ),
          l(
            'Precision assessment of skeletal muscle mass relies on advanced diagnostic imaging integrated into clinical oncology and critical care workflows [1]. Computed tomography (CT) scans performed at the level of the third lumbar vertebra (L3) allow tissue-specific Hounsfield Unit (HU) segmentation, precisely delineating skeletal muscle cross-sectional area (cm²) normalized to height squared (L3 Skeletal Muscle Index, SMI) [1]. Cutoffs for sarcopenia (e.g., < 55 cm²/m² in men, < 39 cm²/m² in women) predict chemotherapy toxicity, postoperative sepsis, and hospital mortality with exquisite diagnostic accuracy [1].',
            'ক্যান্সার ও আইসিইউ রোগীদের ক্ষেত্রে কঙ্কালপেশির ক্ষয় নিখুঁতভাবে মাপতে আধুনিক সিটি স্ক্যান প্রযুক্তির প্রয়োগ এক যুগান্তকারী পরিবর্তন এনেছে [১]। পেটের তৃতীয় লাম্বার কশেরুকা (L3) বরাবর সিটি স্ক্যানের হাউন্সফিল্ড ইউনিট (HU) বিশ্লেষণ করে মাংসপেশির প্রকৃত ক্ষেত্রফল এবং কঙ্কালপেশি সূচক (L3-SMI) নিখুঁতভাবে বের করা যায় [১]। এই সূচকে পুরুষদের ক্ষেত্রে ৫৫ বর্গ সেমি/বর্গ মিটারের কম এবং নারীদের ক্ষেত্রে ৩৯ এর কম মান তীব্র সারকোপেনিয়া নির্দেশ করে, যা কেমোথেরাপির বিষাক্ততা এবং মৃত্যুর ঝুঁকি অত্যন্ত সফলভাবে আগাম জানিয়ে দেয় [১]।',
          ),
          l(
            'Furthermore, radiological muscle attenuation provides a direct window into muscle quality through the quantification of myosteatosis—the pathological accumulation of microscopic inter- and intramyocellular lipids [1]. Low mean skeletal muscle attenuation (typically < 30-40 HU on non-contrast CT) reflects fatty infiltration and mitochondrial decay, which impairs muscle force generation and exacerbates insulin resistance independently of total muscle volume [1]. This enables clinicians to diagnose "qualitative malnutrition" even in patients who maintain an outwardly muscular phenotype.',
            'তাছাড়া, সিটি স্ক্যানে মাংসপেশির ঘনত্ব বা রেডিওলজিক্যাল অ্যাটেন্যুয়েশন পরিমাপের মাধ্যমে পেশির অভ্যন্তরীণ চর্বি জমার মাত্রা বা "মায়োস্টিয়াটোসিস" বের করা যায় [১]। পেশির গড় ঘনত্ব ৩০-৪০ হাউন্সফিল্ড ইউনিটের নিচে নেমে যাওয়া প্রমাণ করে যে পেশিকোষের ভেতরে প্রচুর ক্ষতিকর চর্বি ঢুকে পড়েছে এবং মাইটোকন্ড্রিয়াগুলো নিষ্ক্রিয় হয়ে গেছে, যা পেশির শক্তি কেড়ে নেয় এবং ইনসুলিন রেজিস্ট্যান্স বহুগুণ বাড়িয়ে দেয় [১]। এর ফলে বাইরে থেকে পেশিবহুল মনে হলেও রোগী যে গুণগত অপুষ্টিতে ভুগছেন তা চিকিৎসকেরা সহজেই নিশ্চিত করতে পারেন।',
          ),
          l(
            'Bioelectrical Impedance Vector Analysis (BIVA) and raw Phase Angle measurements offer bed-side cellular biophysics independent of empirical regression equations [1]. Phase angle—calculated as the arc-tangent of the ratio of reactance (cell membrane capacitance) to resistance (fluid volume)—serves as a pure bioelectrical proxy of cell membrane integrity and cellular mass [1]. A phase angle falling below 4.5 to 5.0 degrees is an independent predictor of frailty, immune collapse, and multi-organ failure in intensive care units, guiding aggressive personalized nutritional intervention [1].',
            'বায়োইলেকট্রিক্যাল ইম্পিডেন্স ভেক্টর অ্যানালাইসিস (BIVA) এবং ফেজ অ্যাঙ্গেল (Phase Angle) পরিমাপের মাধ্যমে রোগীর বিছানার পাশেই কোষের সুস্থতা ও শক্তি পরীক্ষা করা যায় [১]। ফেজ অ্যাঙ্গেল হলো কোষের পর্দার বৈদ্যুতিক ধারকত্ব (Reactance) এবং তরলের বাধার (Resistance) অনুপাত, যা সরাসরি কোষপর্দার অখণ্ডতা এবং সামগ্রিক কোষের জীবনীশক্তি প্রকাশ করে [১]। হাসপাতালে কোনো রোগীর ফেজ অ্যাঙ্গেল ৪.৫ থেকে ৫.০ ডিগ্রির নিচে নেমে যাওয়া প্রমাণ করে যে তার কোষগুলোর জীবনীশক্তি ভেঙে পড়েছে এবং তিনি মৃত্যুর উচ্চ ঝুঁকিতে আছেন, যা অবিলম্বে বিশেষায়িত পুষ্টি চিকিৎসার নির্দেশ দেয় [১]।',
          ),
        ],
        },
        {
          id: 'structure',
          heading: l('Molecular Signaling in Cachexia: The NF-kB, STAT3 & Proteasome Networks', 'ক্যাক্সিয়ার আণবিক সংকেত কাঠামো: NF-kB, STAT3 ও প্রোটিসোম ধ্বংসজাল'),
          paragraphs: [
          l(
            'The molecular architecture of cancer cachexia is orchestrated by a destructive convergence of pro-inflammatory cytokines, tumor-derived factors, and neuroendocrine stress hormones [2]. Circulating tumor necrosis factor-alpha (TNF-alpha) binds to tumor necrosis factor receptor 1 (TNFR1) on skeletal muscle membranes, triggering recruitment of TRADD and TRAF2 adapters to activate the inhibitor of kappa B kinase (IKK) complex [2]. IKK phosphorylates IkB-alpha, tagging it for polyubiquitination and degradation, thereby releasing the p50/p65 NF-kB heterodimer to translocate into the nucleus and execute a hypercatabolic transcriptional program [2].',
            'ক্যান্সার ক্যাক্সিয়ার আণবিক ধ্বংসলীলাটি পরিচালিত হয় প্রদাহজনক সাইটোকাইন, টিউমার থেকে নির্গত রাসায়নিক এবং হরমোনের এক প্রাণঘাতী সমন্বয়ের মাধ্যমে [২]। রক্তে থাকা টিএনএফ-আলফা (TNF-alpha) কঙ্কালপেশির কোষপর্দায় TNFR1 রিসেপ্টরের সাথে যুক্ত হয়ে কোষের ভেতরে IKK এনজাইম কমপ্লেক্সকে সক্রিয় করে তোলে [২]। এই IKK এনজাইমটি কোষের প্রতিরোধক প্রোটিনকে ধ্বংস করে NF-kB মাস্টার সুইচটিকে উন্মুক্ত করে দেয়, যা সোজা কোষের নিউক্লিয়াসে গিয়ে পেশি প্রোটিন ধ্বংস করার তীব্র জিনগত নির্দেশ জারি করে [২]।',
          ),
          l(
            'Simultaneously, interleukin-6 (IL-6) binds to its membrane receptor IL-6R and gp130 coreceptor, activating the Janus kinase (JAK) family [2]. Activated JAKs phosphorylate cytoplasmic STAT3, inducing STAT3 dimerization and nuclear translocation [2]. Within the nucleus, NF-kB and phosphorylated STAT3 act synergistically to transactivate the promoters of the muscle-specific E3 ubiquitin ligases TRIM63 (encoding MuRF1) and FBXO32 (encoding Atrogin-1) [2]. MuRF1 specifically polyubiquitinates myofibrillar structural proteins—including beta/slow myosin heavy chain, actin, and myosin light chains—targeting them for enzymatic degradation by the catalytic 20S core of the 26S proteasome [2].',
            'একই সাথে ইন্টারলিউকিন-৬ (IL-6) তার রিসেপ্টরের সাথে যুক্ত হয়ে কোষের জেনাস কাইনেজ (JAK) ও STAT3 সংকেত পথকে উদ্দীপ্ত করে [২]। সক্রিয় STAT3 নিউক্লিয়াসে প্রবেশ করে NF-kB এর সাথে হাত মিলিয়ে পেশি ধ্বংসকারী E3 ইউবিকুইটিন লাইগেজ জিনসমূহ—যেমন MuRF1 এবং Atrogin-1—কে বিদ্যুৎগতিতে তৈরি করতে শুরু করে [২]। এই MuRF1 এনজাইমটি কঙ্কালপেশির মূল সংকোচনশীল প্রোটিনগুলোকে (মায়োসিন ও অ্যাক্টিন) ইউবিকুইটিন নামক ধ্বংসের সিলমোহর এঁটে দেয়, যার ফলে কোষের 26S প্রোটিসোম মেশিন এদের এক নিমেষে চূর্ণবিচূর্ণ করে ফেলে [২]।',
          ),
          l(
            'A parallel catabolic cascade is governed by the transforming growth factor-beta (TGF-beta) superfamily, predominantly myostatin (GDF-8) and activin A [2]. These ligands bind to the activin receptor type IIB (ActRIIB) on myocytes, recruiting and activating the ALK4/ALK5 kinase coreceptor to phosphorylate intracellular Smad2 and Smad3 [2]. Phosphorylated Smad2/3 complexes with Smad4, translocating to the nucleus where it suppresses Akt (protein kinase B) phosphorylation, thereby relieving inhibition on FoxO1 and FoxO3a transcription factors and unleashing catastrophic macroautophagy and lysosomal degradation of muscle organelles [2].',
            'এর পাশাপাশি মায়োস্ট্যাটিন (GDF-8) এবং অ্যাক্টিভিন-এ নামক ধ্বংসাত্মক প্রোটিনগুলো পেশিকোষের ActRIIB রিসেপ্টরের সাথে যুক্ত হয়ে Smad2 ও Smad3 সংকেত পথ সক্রিয় করে [২]। এই Smad সংকেতটি পেশি তৈরির প্রধান ইঞ্জিন Akt প্রোটিনকে নিষ্ক্রিয় করে দেয় এবং FoxO ট্রান্সক্রিপশন ফ্যাক্টরকে মুক্ত করে; ফলে কোষের ভেতর তীব্র অটোফেজি ও লাইসোজোম তৈরি হয় যা পেশিকোষের ভেতরের অঙ্গাণুগুলোকে নিজেরাই গিলে খেয়ে ফেলে পেশিকে সম্পূর্ণ নিঃশেষ করে দেয় [২]।',
          ),
          l(
            'In adipose tissue, cachectic mediators induce profound metabolic reprogramming through the transactivation of Uncoupling Protein 1 (UCP1) and adipose triglyceride lipase (ATGL) [2]. IL-6 and parathyroid hormone-related protein (PTHrP) secreted by tumors stimulate PRDM16 and PGC-1alpha in subcutaneous white adipocytes, forcing phenotypic "browning" [2]. The resulting overexpression of UCP1 collapses the mitochondrial electrochemical gradient, generating uncoupled thermogenesis that burns through systemic lipid reserves and induces profound hypermetabolism refractory to caloric repletion [2].',
            'চর্বি কোষে ক্যাক্সিয়ার উপাদানগুলো আনকপলিং প্রোটিন-১ (UCP1) এবং ফ্যাট-ভাঙা লাইপেজ এনজাইমগুলোকে বিপজ্জনকভাবে বাড়িয়ে দেয় [২]। টিউমার থেকে আসা IL-6 এবং PTHrP সংকেতের প্রভাবে সাধারণ সাদা চর্বিগুলো বাদামী চর্বিতে রূপান্তরিত হয় [২]। এর ফলে মাইটোকন্ড্রিয়ার শক্তি তৈরির ভারসাম্য ভেঙে যায় এবং সঞ্চিত চর্বি কোনো কাজে না লেগে অনবরত তাপ হিসেবে বাতাসে উড়ে নিঃশেষ হয়ে যায়; যার কারণে রোগীকে যত খাবারই দেওয়া হোক না কেন তার শরীর চর্বি ও শক্তির চরম অপচয়ে পুড়ে শেষ হতে থাকে [২]।',
          ),
        ],
        },
        {
          id: 'mechanism',
          heading: l('Subcellular Pathophysiology of Refeeding: Channelopathies & Thiamine Kinetics', 'রিফিডিংয়ের উপ-কোষীয় প্যাথোফিজিওলজি: চ্যানেলোপ্যাথি ও থায়ামিন কাইনেটিক্স'),
          paragraphs: [
          l(
            'The electrophysiological catastrophe of refeeding syndrome is driven by acute ion channel dysfunction in cardiac myocytes, primarily mediated by concurrent hypomagnesemia and hypokalemia [3, 6]. Magnesium is the obligatory physiological cofactor for the cardiac sodium-potassium ATPase (Na+/K+-ATPase) pump and acts as an endogenous blocker of the rapid delayed rectifier potassium channel (IKr, encoded by hERG) [3]. When intracellular and extracellular magnesium fall concurrently during refeeding-induced cellular shifts, the Na+/K+-ATPase pump stalls, intracellular sodium accumulates, and outward repolarizing potassium currents are disrupted, prolonging ventricular action potential duration and precipitating polymorphic ventricular arrhythmias [3, 6].',
            'রিফিডিং সিন্ড্রোমে হঠাৎ হৃদযন্ত্রের বৈদ্যুতিক ছন্দপতনের মূল কারণ হলো কার্ডিয়াক কোষপর্দায় আয়ন চ্যানেলের আণবিক ত্রুটি, যা মূলত ম্যাগনেসিয়াম ও পটাশিয়ামের তীব্র ঘাটতির ফলে ঘটে [৩, ৬]। ম্যাগনেসিয়াম হলো কার্ডিয়াক Na+/K+-ATPase পাম্পের অপরিহার্য সহ-উপাদান এবং এটি পটাশিয়াম চ্যানেলকে (IKr) স্বাভাবিক গতিতে ধরে রাখে [৩]। রিফিডিংয়ের সময় রক্ত থেকে ম্যাগনেসিয়াম কোষে ঢুকে শূন্যতা তৈরি করলে এই পাম্প অচল হয়ে যায়, কোষের ভেতরে সোডিয়াম জমে এবং পটাশিয়ামের প্রবাহ এলোমেলো হয়ে যায়; ফলে হৃদস্পন্দনের কিউটি ইন্টারভাল মারাত্মকভাবে দীর্ঘায়িত হয়ে প্রাণঘাতী ভেন্ট্রিকুলার অ্যারিথমিয়ায় রোগী কয়েক মিনিটে মৃত্যুবরণ করতে পারে [৩, ৬]।',
          ),
          l(
            'At the mitochondrial interface, acute refeeding precipitates a biochemical blockade at the pyruvate dehydrogenase (PDH) multienzyme complex due to thiamine pyrophosphate (TPP) exhaustion [3, 6]. Thiamine is phosphorylated by thiamine pyrophosphokinase to TPP, the indispensable coenzyme for the E1 subunit (pyruvate decarboxylase) of PDH and the transketolase enzyme of the pentose phosphate pathway [3]. In thiamine-depleted starved patients, the massive carbohydrate surge floods the glycolytic pathway, producing stoichiometric amounts of pyruvate that cannot be converted into acetyl-CoA for Krebs cycle entry [3, 6].',
            'মাইটোকন্ড্রিয়ার ভেতরে রিফিডিংয়ের কার্বোহাইড্রেট এসে পাইরুভেট ডিহাইড্রোজিনেজ (PDH) এনজাইম কমপ্লেক্সে এক ভয়াবহ অচলাবস্থা তৈরি করে, কারণ কোষে থায়ামিন পাইরোফসফেট (TPP) নিঃশেষ হয়ে থাকে [৩, ৬]। থায়ামিন হলো এই PDH এনজাইম এবং পেন্টোজ ফসফেট পথের অপরিহার্য কো-এনজাইম [৩]। থায়ামিনশূন্য শরীরে যখন প্রচুর মিষ্টি খাবার বা গ্লুকোজ ঢোকে, তখন গ্লাইকোলাইসিসের মাধ্যমে প্রচুর পাইরুভেট তৈরি হয়; কিন্তু থায়ামিনের অভাবে এই পাইরুভেট কোনোভাবেই অ্যাসিটাইল-কোএ তে রূপান্তরিত হয়ে মাইটোকন্ড্রিয়াল ক্রেবস চক্রে ঢুকতে পারে না [৩, ৬]।',
          ),
          l(
            'The enzymatic stall at PDH shunts accumulating pyruvate into lactate dehydrogenase (LDH), which rapidly reduces pyruvate to L-lactate while oxidizing NADH to NAD+ [3, 6]. This biochemical diversion triggers acute, severe type B lactic acidosis with an expanded anion gap, impairing vascular smooth muscle contractility and inducing catecholamine-resistant peripheral vasodilation and shock [3]. Simultaneously, transketolase arrest suppresses NADPH generation in erythrocytes, leaving cells vulnerable to acute oxidative hemolysis and precipitating cerebral microvascular endothelial breakdown in Wernicke encephalopathy [3, 6].',
            'পিডিএইচ (PDH) এনজাইমে বাধা পেয়ে সমস্ত পাইরুভেট ল্যাকটেট ডিহাইড্রোজিনেজ (LDH) এনজাইমের দিকে ধাবিত হয় এবং বিদ্যুৎগতিতে বিষাক্ত এল-ল্যাকটিক অ্যাসিডে রূপান্তরিত হতে থাকে [৩, ৬]। এর ফলে রক্তে তীব্র টাইপ-বি ল্যাকটিক অ্যাসিডোসিস দেখা দেয়, যা রক্তনালির সংকোচন ক্ষমতা নষ্ট করে এবং রক্তচাপ শূন্যের কোঠায় নামিয়ে শক তৈরি করে [৩]। একই সাথে লোহিত রক্তকণিকার প্রতিরোধ ভেঙে রক্তকণিকা ফেটে যায় এবং মস্তিষ্কের সূক্ষ্ম রক্তনালিগুলো ছিঁড়ে গিয়ে তীব্র স্মৃতিভ্রম ও মস্তিষ্কের পক্ষাঘাত (ওয়ার্নিকি এনসেফালোপ্যাথি) সৃষ্টি করে [৩, ৬]।',
          ),
          l(
            'Concurrently, the bioenergetic failure of red blood cells under profound hypophosphatemia (< 0.30 mmol/L) induces structural deformability loss and fatal oxygen traps [3, 6]. Deprived of ATP, the erythrocyte membrane aminophospholipid translocase (flippase) fails, allowing phosphatidylserine to expose on the outer leaflet, which triggers splenic macrophage phagocytosis and acute microangiopathic hemolytic anemia [3]. With 2,3-BPG synthesis completely extinguished, hemoglobin remains locked in the high-affinity relaxed (R) state, suffocating vital organs at the tissue level despite 100% arterial oxygen saturation on pulse oximetry [3, 6].',
            'একই সাথে রক্তে ফসফেটের চরম পতনের কারণে লোহিত রক্তকণিকার ভেতর এটিপি (ATP) শূন্য হয়ে যাওয়ায় কোষপর্দার ফ্লিপেজ এনজাইম অকেজো হয়ে পড়ে; ফলে লোহিত কণিকাগুলো ভঙ্গুর হয়ে প্লীহাতে ভেঙে মারাত্মক রক্তশূন্যতা তৈরি করে [৩]। আর 2,3-BPG না থাকার কারণে হিমোগ্লোবিনের গঠন এমনভাবে আটকে যায় যে এটি কোষে কোনো অক্সিজেন ছাড়তে পারে না; ফলে মেশিনে রক্তের অক্সিজেন স্যাচুরেশন ১০০% দেখালেও রোগীর ব্রেন ও হৃদযন্ত্র অক্সিজেনের অভাবে ভেতরে ভেতরে পুরোপুরি দমবন্ধ হয়ে মারা যায় [৩, ৬]।',
          ),
        ],
        },
        {
          id: 'integration',
          heading: l('Translational Nutrition Delivery: Molecular Barrier Biology & Parenteral Immunology', 'অনুবাদী পুষ্টি বিজ্ঞান: আণবিক অন্ত্রপ্রাচীর জীববিজ্ঞান ও প্যারেন্টেরাল ইমিউনোলজি'),
          paragraphs: [
          l(
            'The superiority of enteral feeding over parenteral nutrition is fundamentally governed by gut mucosal barrier biology and local mucosal immunology [4, 5]. Enterocytes lining the intestinal epithelium rely on luminal nutrients—particularly short-chain fatty acids (butyrate) in the colon and L-glutamine in the small intestine—for over 70% of their daily energy supply [4]. Intraluminal nutrient passage activates the mammalian target of rapamycin (mTOR) and AMP-activated protein kinase (AMPK) signaling, maintaining the phosphorylation and assembly of apical tight junction complexes, specifically claudin-1, occludin, and zonula occludens-1 (ZO-1) [4, 5].',
            'শিরাপথের চেয়ে এন্টারাল পুষ্টির শ্রেষ্ঠত্বের মূল রহস্য লুকিয়ে আছে অন্ত্রের প্রাচীর ও প্রতিরোধ ব্যবস্থার আণবিক জীববিজ্ঞানে [৪, ৫]। অন্ত্রের এন্টারোসাইট কোষগুলো বেঁচে থাকার ৭০ শতাংশ শক্তি গ্রহণ করে নালির ভেতরে থাকা পুষ্টি থেকে—বিশেষ করে ক্ষুদ্রান্ত্রের জন্য এল-গ্লুটামিন এবং কোলনের জন্য বিউটাইরেট [৪]। অন্ত্রের মধ্য দিয়ে খাবার প্রবাহিত হলে কোষের mTOR ও AMPK সংকেত সক্রিয় থাকে, যা কোষগুলোকে পরস্পরের সাথে শক্তভাবে আটকে রাখার আণবিক আঠা—যেমন ক্লডিন-১, অকলুডিন এবং ZO-1 টাইট জাংশন—অটুট রাখে [৪, ৫]।',
          ),
          l(
            'In complete enteral disuse during total parenteral nutrition (TPN), the absence of mechanical shear stress and luminal nutrients triggers rapid mucosal atrophy within 48 to 72 hours [4, 5]. Tight junction proteins undergo endocytosis and lysosomal degradation, dramatically increasing mucosal permeability to macromolecules [4]. Deprived of stimulation by gut-associated antigens, intestinal lamina propria plasma cells cease the polymeric immunoglobulin receptor (pIgR)-mediated transcytosis of secretory IgA (sIgA), dismantling the mucosal immune shield and permitting opportunistic luminal enteric bacteria to translocate across the compromised epithelium into the portal circulation and mesenteric lymph nodes, driving systemic inflammatory response syndrome (SIRS) [4, 5].',
            'টিপিএন চলার সময় অন্ত্র সম্পূর্ণ অব্যবহৃত ও খালি থাকলে মাত্র ৪৮ থেকে ৭২ ঘণ্টার মধ্যে অন্ত্রের প্রাচীর শুকিয়ে ক্ষয়ে যেতে শুরু করে [৪, ৫]। কোষের টাইট জাংশন প্রোটিনগুলো ভেঙে ধ্বংস হয়ে যায় এবং অন্ত্রের ছাঁকনি ফুটো হয়ে যায় [৪]। অন্ত্রের প্রতিরোধ ব্যবস্থা থেকে সিক্রেটরি আইজিএ (sIgA) অ্যান্টিবডি নিঃসরণ সম্পূর্ণ বন্ধ হয়ে যাওয়ায় অন্ত্রের মারাত্মক জীবাণুগুলো ফুটো প্রাচীর গলে সরাসরি রক্তে ও লিম্ফ নোডে ঢুকে পড়ে; যার ফলে রোগী নিমিষেই মারাত্মক সেপটিক শকে আক্রান্ত হয় [৪, ৫]।',
          ),
          l(
            'The molecular pathogenesis of Intestinal Failure-Associated Liver Disease (IFALD) during long-term parenteral nutrition is driven by enteral starvation, continuous glucose infusion, and phytosterol toxicity [4, 5]. Lack of enteral stimulation halts the release of cholecystokinin (CCK) and secretin, causing biliary stasis and gallbladder sludge formation [4]. Simultaneously, continuous high-rate dextrose infusions maintain unremitting hyperinsulinemia, continuously transactivating hepatic SREBP-1c and ChREBP to drive de novo lipogenesis, while the lack of pulsatile feeding suppresses hepatic beta-oxidation, packing hepatocytes with ectopic triacylglycerols [4, 5].',
            'দীর্ঘদিন শিরাপথে টিপিএন নিলে যে লিভারের মারাত্মক রোগ (IFALD) দেখা দেয়, তার পেছনে কাজ করে অন্ত্রের নিষ্ক্রিয়তা, অবিরাম গ্লুকোজ ইনফিউশন এবং ক্ষতিকর ফাইটোস্টেরল [৪, ৫]। অন্ত্রে খাবার না যাওয়ায় সিসিকে (CCK) হরমোন তৈরি বন্ধ থাকে, ফলে পিত্তথলি থেকে পিত্তরস বের হতে না পেরে পিত্তনালিতে জমে পাথরের মতো বিষাক্ত স্লাজ তৈরি করে [৪]। একই সাথে দিনে ২৪ ঘণ্টা গ্লুকোজ স্যালাইন চলায় রক্তে সার্বক্ষণিক ইনসুলিনের বন্যা থাকে, যা লিভারের চর্বি তৈরির মাস্টার সুইচগুলোকে অন রেখে লিভারের প্রতিটি কোষে ক্ষতিকর চর্বির পাহাড় জমিয়ে তোলে [৪, ৫]।',
          ),
          l(
            'Furthermore, traditional soybean oil-based lipid emulsions contain high concentrations of plant phytosterols (stigmasterol, campesterol, beta-sitosterol), which competitively inhibit the hepatic ATP-binding cassette sub-family B member 11 (ABCB11/BSEP) bile salt export pump [4, 5]. Stigmasterol also antagonizes the nuclear farnesoid X receptor (FXR), suppressing protective bile acid feedback and exacerbating toxic intracellular cholestasis and portal fibrosis [4]. Transitioning patients to fish oil-containing emulsions (e.g., Omegaven or SMOFlipid) rich in omega-3 docosahexaenoic acid (DHA) and eicosapentaenoic acid (EPA) displaces phytosterols, resolves cholestasis, and reverses IFALD through the activation of anti-inflammatory G-protein coupled receptor 120 (GPR120/FFA4) [4, 5].',
            'তাছাড়া সয়াবিন তেলের স্যালাইনে থাকা উদ্ভিজ্জ ফাইটোস্টেরলগুলো লিভারের পিত্তরস বের করার পাম্পকে (BSEP) সরাসরি ব্লক করে দেয় এবং লিভারের নিউক্লিয়ার রিসেপ্টর FXR কে অকেজো করে লিভারের ভেতর বিষাক্ত পিত্ত জমিয়ে লিভার সিরোসিস ঘটায় [৪, ৫]। কিন্তু আধুনিক মাছের তেলের স্যালাইন (যেমন ওমেগা-৩ সমৃদ্ধ SMOFlipid) ব্যবহার করলে এই বিষাক্ত উপাদানগুলো সরে যায়; ওমেগা-৩ ফ্যাটি অ্যাসিড লিভারের GPR120 রিসেপ্টর সক্রিয় করে প্রদাহ দূর করে এবং পিত্তরসের স্বাভাবিক প্রবাহ ফিরিয়ে এনে রোগীর লিভারকে ধ্বংসের হাত থেকে পুরোপুরি রক্ষা করে [৪, ৫]।',
          ),
        ],
        },
        {
          id: 'practice',
          heading: l('Translational Critical Care Practice: Indirect Calorimetry & Metabolic Titration', 'অনুবাদী ক্রিটিক্যাল কেয়ার চর্চা: ইনডাইরেক্ট ক্যালোরিমেট্রি ও বিপাকীয় টাইট্রেশন'),
          paragraphs: [
          l(
            'Indirect calorimetry represents the definitive reference standard for determining energy targets in critically ill patients, utilizing metabolic gas exchange monitoring [4, 5]. By measuring oxygen consumption (VO2) and carbon dioxide production (VCO2) via a specialized metabolic cart connected to the ventilator circuit, the Weir equation computes resting energy expenditure with metabolic precision: REE (kcal/day) = [3.941 * VO2 (L/min) + 1.106 * VCO2 (L/min)] * 1,440 [4]. This eliminates the substantial error margins (often +/- 30-50%) inherent in empirical predictive formulas like Harris-Benedict or Mifflin-St Jeor in septic, hypermetabolic patients [4, 5].',
            'আইসিইউতে সংকটজনক রোগীর ক্যালোরি নির্ধারণে ইনডাইরেক্ট ক্যালোরিমেট্রি হলো চিকিৎসাবিজ্ঞানের সর্বোচ্চ নিখুঁত স্বর্ণমান [৪, ৫]। ভেন্টিলেটরের সাথে বিশেষ গ্যাস মনিটর যুক্ত করে রোগীর গ্রহণ করা অক্সিজেন (VO2) এবং নির্গত কার্বন ডাই-অক্সাইড (VCO2) পরিমাপ করে ওয়্যার (Weir) সমীকরণের মাধ্যমে প্রকৃত শক্তি ব্যয় হিসাব করা হয় [৪]। এটি সাধারণ বইয়ের অনুমিত ফর্মুলার ৩০ থেকে ৫০ শতাংশ পর্যন্ত মারাত্মক ভুল এড়িয়ে রোগীর প্রকৃত প্রয়োজনীয় শক্তির শতভাগ সঠিক মান নিশ্চিত করে [৪, ৫]।',
          ),
          l(
            'Simultaneously, evaluating the Respiratory Quotient (RQ = VCO2 / VO2) provides continuous insight into active substrate utilization and overfeeding risk [4, 5]. An RQ of 1.0 reflects pure carbohydrate oxidation; an RQ of 0.80-0.82 reflects mixed protein and lipid oxidation; and an RQ of 0.70 indicates pure lipid oxidation or starvation ketosis [4]. If the RQ exceeds 1.0 (typically 1.10-1.25), it signals active de novo lipogenesis driven by excessive carbohydrate overfeeding, which elevates total carbon dioxide production and forces compensatory tachypnea or ventilator failure in patients with compromised respiratory reserve [4, 5].',
            'একই সাথে রেসপিরেটরি কোশেন্ট (RQ = নির্গত CO2 / গৃহীত O2) পরিমাপের মাধ্যমে রোগী কোন উপাদান পুড়িয়ে শক্তি তৈরি করছে তা নিখুঁতভাবে জানা যায় [৪, ৫]। আরকিউ ১.০ মানে রোগী কেবল চিনি পোড়াচ্ছে; ০.৮০-০.৮২ মানে প্রোটিন ও চর্বির সুষম মিশ্রণ পুড়ছে; আর ০.৭০ মানে শরীর চর্বি পুড়িয়ে কিটোনে চলছে [৪]। কিন্তু আরকিউ যদি ১.০ ছাড়িয়ে ১.১-১.২৫ এ পৌঁছায়, তবে তা প্রমাণ করে যে রোগীকে অতিরিক্ত খাবার দেওয়া হচ্ছে এবং শরীর অতিরিক্ত গ্লুকোজ থেকে চর্বি তৈরি করছে; ফলে ফুসফুসে কার্বন ডাই-অক্সাইডের বন্যা বয়ে শ্বাসকষ্ট মারাত্মক রূপ নেয় [৪, ৫]।',
          ),
          l(
            'In patients receiving central parenteral nutrition, preventing catheter-related bloodstream infections (CRBSI) requires rigorous insertion and maintenance bundles [4, 5]. Central lines must be placed using real-time ultrasound guidance with maximal sterile barrier precautions (sterile gown, gloves, cap, mask, full-body sterile drape) and 2% chlorhexidine in 70% isopropyl alcohol skin preparation [4]. Parenteral bags must be dedicated exclusively to nutrition infusion; blood sampling, drug administration, or central venous pressure monitoring through the dedicated TPN lumen is strictly contraindicated to prevent introducing intraluminal bacteremia [4, 5].',
            'যেসব রোগী শিরাপথে টিপিএন স্যালাইন নিচ্ছেন তাদের ক্যাথেটারের ইনফেকশন (CRBSI) রোধে কঠোর জীবাণুমুক্ত নীতিমালা মানা বাধ্যতামূলক [৪, ৫]। আল্ট্রাসাউন্ড মেশিনের সাহায্যে দেখে সম্পূর্ণ জীবাণুমুক্ত পোশাকে ক্লোরহেক্সিডিন দিয়ে ত্বক পরিষ্কার করে সেন্ট্রাল লাইন বসাতে হয় [৪]। সবচেয়ে গুরুত্বপূর্ণ হলো, যে নলের ভেতর দিয়ে টিপিএন স্যালাইন চলবে, সেটি কেবল পুষ্টির জন্যই সংরক্ষিত রাখতে হবে; সেই নল দিয়ে কোনো রক্ত টানা বা অন্যান্য ওষুধ প্রয়োগ করা কঠোরভাবে নিষিদ্ধ, যাতে কোনো অবস্থাতেই বাইরের জীবাণু রক্তপ্রবাহে ঢুকতে না পারে [৪, ৫]।',
          ),
          l(
            'Furthermore, metabolic bone disease (osteomalacia, osteoporosis) in long-term TPN patients must be proactively mitigated through meticulous formulation chemistry [4, 5]. Chronic metabolic acidosis, excessive urinary calcium excretion driven by high amino acid loads, and aluminum contamination in mineral additives contribute to accelerated bone resorption [4]. Formulations must balance calcium gluconate and sodium glycerophosphate to achieve optimal molar ratios without exceeding precipitation curves, while maintaining serum 25-hydroxyvitamin D above 75 nmol/L and urinary calcium excretion below 5 mmol/day [4, 5].',
            'তাছাড়া দীর্ঘদিন টিপিএন নেওয়া রোগীদের হাড়ের ক্ষয়রোগ বা অস্টিওম্যালাসিয়া প্রতিরোধে স্যালাইনের ক্যালসিয়াম ও ফসফেটের ভারসাম্যের ওপর বিশেষ নজর দিতে হয় [৪, ৫]। অতিরিক্ত অ্যাসিড ও অ্যামিনো অ্যাসিডের চাপে প্রস্রাব দিয়ে ক্যালসিয়াম বের হয়ে হাড় দ্রুত নরম হয়ে যেতে পারে [৪]। তাই ক্যালসিয়াম গ্লুকোনেট এবং সোডিয়াম গ্লিসারোফসফেটের সঠিক আণবিক অনুপাত বজায় রাখতে হয় যেন স্যালাইনের বোতলে ক্যালসিয়াম জমে দলা না বাঁধে এবং শরীরে ভিটামিন ডি ও ক্যালসিয়ামের মাত্রা রক্তের পরীক্ষায় নিখুঁত থাকে [৪, ৫]।',
          ),
        ],
        },
        {
          id: 'takeaways',
          heading: l('Translational Takeaways: Advanced Precision Clinical Nutrition', 'অনুবাদী সারসংক্ষেপ: উন্নত প্রিসিশন ক্লিনিক্যাল পুষ্টিবিজ্ঞান'),
          paragraphs: [
          l(
            'Modern clinical malnutrition diagnostics integrate GLIM phenotypic-etiologic consensus with precision metabolomics and radiological body composition analysis (L3-CT skeletal muscle index, bioelectrical phase angle) [1]. Traditional serum proteins (albumin, prealbumin) reflect negative acute-phase inflammatory kinetics rather than true nutritional reserves, directing clinicians to evaluate systemic inflammation and cellular mass simultaneously [1].',
            'আধুনিক চিকিৎসা পুষ্টিবিজ্ঞানে গ্লিম (GLIM) ঐকমত্যের সাথে পেটের সিটি স্ক্যানে কঙ্কালপেশি সূচক (L3-SMI) এবং বায়োইলেকট্রিক্যাল ফেজ অ্যাঙ্গেলের মতো উচ্চ প্রযুক্তির সমন্বয় ঘটানো হয়েছে [১]। অ্যালবুমিন বা প্রি-অ্যালবুমিন পুষ্টির সঞ্চয় নয় বরং তীব্র প্রদাহ নির্দেশ করে; তাই রোগীর প্রকৃত অবস্থা জানতে শারীরিক গঠন ও অভ্যন্তরীণ প্রদাহকে একসাথে মূল্যায়ন করা আধুনিক চিকিৎসার মূল ভিত্তি [১]। ',
          ),
          l(
            'Cancer cachexia is driven by a complex transcriptional network wherein TNF-alpha, IL-6, and myostatin activate NF-kB, STAT3, and Smad2/3 signaling to induce E3 ubiquitin ligases (MuRF1, Atrogin-1), directing proteasomal destruction of contractile myofibrils [2]. Simultaneously, uncoupled thermogenesis mediated by UCP1 drives futile hypermetabolism, demonstrating that cachexia is biologically refractory to caloric feeding alone without multimodal anti-inflammatory therapy [2].',
            'ক্যান্সার ক্যাক্সিয়ার পেছনের মূল চালিকাশক্তি হলো সাইটোকাইন-চালিত জিনগত সংকেত কাঠামো (NF-kB, STAT3), যা MuRF1 এবং Atrogin-1 এনজাইম তৈরির মাধ্যমে কঙ্কালপেশির প্রোটিনগুলোকে প্রোটিসোমে গুঁড়িয়ে দেয় [২]। একই সাথে UCP1 এর মাধ্যমে শক্তির অনিয়ন্ত্রিত অপচয় ঘটায়; ফলে প্রদাহ না কমিয়ে কেবল অতিরিক্ত খাবার দিয়ে এই অপচয় কখনোই রোধ করা সম্ভব নয় [২]। ',
          ),
          l(
            'Refeeding syndrome represents a lethal cellular phosphate and ion trap driven by carbohydrate-induced insulin surges in patients with depleted total mineral pools [3, 6]. Intravascular hypophosphatemia arrests mitochondrial ATP synthesis, exhausts red cell 2,3-BPG, and induces cardiac arrhythmogenic channelopathies, while thiamine deficiency stalls pyruvate dehydrogenase, driving lethal lactic acidosis [3, 6]. Cautious caloric titration (10 kcal/kg/day) and pre-feeding thiamine are mandatory safeguards [3].',
            'রিফিডিং সিন্ড্রোম হলো দীর্ঘ অনাহারী রোগীকে হঠাৎ মিষ্টি খাবার দেওয়ার ফলে তৈরি হওয়া মারাত্মক ইলেক্ট্রোলাইট ফাঁদ, যেখানে ইনসুলিনের বন্যায় রক্তের ফসফেট, পটাশিয়াম ও ম্যাগনেসিয়াম কোষে আটকা পড়ে [৩, ৬]। ফলে কোষের এটিপি ধ্বংস, অক্সিজেনের ঘাটতি এবং হৃদযন্ত্রের মারাত্মক ছন্দপতন ঘটে; আর থায়ামিন ঘাটতি রক্তে অ্যাসিডের বন্যা বইয়ে দেয় [৩, ৬]। তাই খাবার শুরুর আগে থায়ামিন এবং দিনে মাত্র ১০ ক্যালোরি/কেজি দিয়ে শুরু করাই পরম সুরক্ষা [৩]। ',
          ),
          l(
            'Enteral nutrition is biologically essential to maintain gut tight junctions (claudin-1, occludin), stimulate secretory IgA, and prevent septic bacterial translocation across an atrophic mucosal barrier [4, 5]. When intestinal failure mandates total parenteral nutrition, modern composite lipid emulsions (SMOF) rich in omega-3 fatty acids and central line aseptic maintenance bundles are critical to prevent catheter bloodstream infections and cholestatic liver failure (IFALD) [4, 5].',
            'অন্ত্রের টাইট জাংশন রক্ষা, রোগপ্রতিরোধী অ্যান্টিবডি ক্ষরণ এবং রক্তে ব্যাকটেরিয়ার বিষাক্ত সংক্রমণ রোধে এন্টারাল পুষ্টির কোনো বিকল্প নেই [৪, ৫]। আর পরিপাকনালি অকেজো হলে শিরার টিপিএন স্যালাইনে আধুনিক ওমেগা-৩ লিপিড (SMOF) ব্যবহার এবং ক্যাথেটারের পরম জীবাণুমুক্ত ব্যবস্থাপনা বজায় রেখেই কেবল রক্তে ইনফেকশন ও লিভারের মারাত্মক ক্ষতি (IFALD) প্রতিরোধ করা সম্ভব [৪, ৫]। ',
          ),
        ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'A 62-year-old male with severe metastatic colon cancer, ongoing 18% weight loss over 4 months, elevated CRP (45 mg/L), and CT-verified profound muscle wasting is admitted. Why does aggressively infusing a high-calorie (35 kcal/kg/day) enteral formula fail to restore his lost contractile skeletal muscle mass, and what is the underlying molecular mechanism driving this refractoriness?',
      'মেটাস্ট্যাটিক কোলন ক্যান্সারে আক্রান্ত ৬২ বছর বয়সী একজন ব্যক্তি হাসপাতালে ভর্তি হয়েছেন যার বিগত ৪ মাসে ১৮% ওজন হ্রাস পেয়েছে, রক্তে সিআরপি অনেক বেশি (৪৫ মিগ্রা/লি) এবং সিটি স্ক্যানে মারাত্মক পেশিক্ষয় দেখা গেছে। এই রোগীকে কেন জোর করে উচ্চ ক্যালোরিযুক্ত (৩৫ ক্যালোরি/কেজি/দিন) খাবার দিলেও তার নষ্ট হওয়া কঙ্কালপেশি ফিরে আসে না, এবং এর পেছনের মূল আণবিক কারণ কী?'
    ),
    options: [
      l(
        'He is suffering from cytokine-driven cancer cachexia; circulating TNF-alpha, IL-6, and myostatin hyperactivate NF-kB, STAT3, and Smad2/3, continuously upregulating MuRF1 and Atrogin-1 to degrade myofibrillar proteins in the proteasome despite caloric excess.',
        'তিনি সাইটোকাইন-চালিত ক্যান্সার ক্যাক্সিয়ায় ভুগছেন; রক্তে থাকা টিএনএফ-আলফা, আইএল-৬ এবং মায়োস্ট্যাটিন অনবরত NF-kB ও STAT3 সংকেতের মাধ্যমে MuRF1 ও Atrogin-1 এনজাইম সক্রিয় রেখে পেশির প্রোটিন ভাঙতে থাকে, ফলে অতিরিক্ত ক্যালোরি দিলেও পেশি তৈরি হতে পারে না।'
      ),
      l(
        'Cancer cells secrete an enzyme into the stomach that digests 100% of dietary amino acids before they can cross into enterocytes.',
        'ক্যান্সার কোষ পাকস্থলীতে এমন এক এনজাইম ক্ষরণ করে যা খাদ্যের সমস্ত অ্যামিনো অ্যাসিড শোষণ হওয়ার আগেই হজম করে ফেলে।'
      ),
      l(
        'His skeletal muscle DNA has mutated into fat cells, completely preventing the physical transcription of any muscle proteins.',
        'তার মাংসপেশির ডিএনএ পরিবর্তিত হয়ে চর্বি কোষে রূপান্তরিত হয়েছে, যার ফলে নতুন কোনো প্রোটিন তৈরি হওয়া শারীরিকভাবে অসম্ভব।'
      ),
      l(
        'High-calorie feeding causes acute irreversible destruction of the kidneys, halting all protein absorption.',
        'উচ্চ ক্যালোরিযুক্ত খাবার তাৎক্ষণিকভাবে কিডনি ধ্বংস করে দেয় যার ফলে শরীরে প্রোটিন শোষণ পুরোপুরি বন্ধ হয়ে যায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Unlike simple starvation—which conserves muscle and responds fully to refeeding—cancer cachexia is an inflammation-driven metabolic wasting syndrome. Pro-inflammatory cytokines (TNF-alpha, IL-6) and tumor factors activate the NF-kB and STAT3 pathways, directly transactivating the E3 ubiquitin ligases MuRF1 and Atrogin-1. These ligases systematically target myofibrillar contractile proteins (actin, myosin) for rapid degradation by the 26S proteasome. Concurrently, myostatin and uncoupling protein-1 (UCP1) drive hypermetabolic futile thermogenesis. Consequently, simply infusing hypercaloric nutrition without suppressing underlying systemic inflammation leads primarily to ectopic fat deposition and metabolic stress without restoring functional contractile muscle mass.',
      'সাধারণ অনাহারে শরীর কিটোন তৈরি করে মাংসপেশি বাঁচায় এবং খাবার দিলে তা পুরোপুরি সেরে যায়; কিন্তু ক্যান্সার ক্যাক্সিয়া হলো একটি তীব্র প্রদাহজনিত বিপাকীয় সংকট। টিউমার এবং প্রদাহজনিত সাইটোকাইনগুলো (টিএনএফ-আলফা, আইএল-৬) অনবরত পেশির ভেতর MuRF1 ও Atrogin-1 এনজাইম তৈরি করে পেশির মায়োসিন ও অ্যাক্টিন প্রোটিনকে প্রোটিসোমে ধ্বংস করতে থাকে। একই সাথে UCP1 এর মাধ্যমে অনিয়ন্ত্রিতভাবে শক্তি বাতাসে উড়ে যায়। তাই প্রদাহ না কমিয়ে কেবল জোর করে বেশি ক্যালোরিযুক্ত খাবার দিলে শরীরে কিছু ক্ষতিকর চর্বি জমতে পারে, কিন্তু নষ্ট হয়ে যাওয়া কার্যকর মাংসপেশি কখনোই ফিরে আসে না।'
    ),
  },
}
