import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const masldRefs = [
  {
    id: 'rinella-aasld-masld-guidance-2023',
    authors: 'Mary E. Rinella, Brent A. Neuschwander-Tetri, Manal F. Abdelmalek, et al.',
    title: 'AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease (MASLD/MASH)',
    organization: 'Hepatology',
    year: 2023,
    url: 'https://doi.org/10.1097/HEP.0000000000000323',
    doi: '10.1097/HEP.0000000000000323',
  },
  {
    id: 'stanhope-jci-fructose-dnl-2009',
    authors: 'Kimber L. Stanhope, Jean Marc Schwarz, Nancy L. Keim, et al.',
    title: 'Consuming fructose-sweetened, not glucose-sweetened, beverages increases visceral adiposity and lipids and decreases insulin sensitivity in overweight/obese humans',
    organization: 'The Journal of Clinical Investigation',
    year: 2009,
    url: 'https://doi.org/10.1172/JCI37260',
    doi: '10.1172/JCI37260',
  },
  {
    id: 'forbes-espen-ibd-guideline-2017',
    authors: 'Alastair Forbes, John Escher, Xavier Hebuterne, et al.',
    title: 'ESPEN guideline: Clinical nutrition in inflammatory bowel disease',
    organization: 'Clinical Nutrition',
    year: 2017,
    url: 'https://doi.org/10.1016/j.clnu.2016.12.027',
    doi: '10.1016/j.clnu.2016.12.027',
  },
  {
    id: 'stange-gastro-een-mucosal-healing-2014',
    authors: 'Eduard F. Stange, Sean P. Travis, Severine Vermeire, et al.',
    title: 'European evidence-based consensus on the diagnosis and management of ulcerative colitis and Crohn\'s disease',
    organization: 'Journal of Crohn\'s and Colitis',
    year: 2014,
    url: 'https://doi.org/10.1016/j.crohns.2013.12.007',
    doi: '10.1016/j.crohns.2013.12.007',
  },
  {
    id: 'halmos-gastro-low-fodmap-ibs-2014',
    authors: 'Emma P. Halmos, Victoria A. Power, Susan J. Shepherd, Peter R. Gibson, Jane G. Muir',
    title: 'A diet low in FODMAPs reduces symptoms in patients with irritable bowel syndrome',
    organization: 'Gastroenterology',
    year: 2014,
    url: 'https://doi.org/10.1053/j.gastro.2013.09.046',
    doi: '10.1053/j.gastro.2013.09.046',
  },
  {
    id: 'gibson-jgh-fodmap-approach-2010',
    authors: 'Peter R. Gibson, Susan J. Shepherd',
    title: 'Evidence-based dietary management of functional gastrointestinal symptoms: The FODMAP approach',
    organization: 'Journal of Gastroenterology and Hepatology',
    year: 2010,
    url: 'https://doi.org/10.1111/j.1440-1746.2009.06149.x',
    doi: '10.1111/j.1440-1746.2009.06149.x',
  },
]

export const nutrition21HepatobiliaryMASLDLesson: LessonTopic = {
  id: 'topic.nutrition.gi-liver-nutrition-masld-ibd-fodmap',
  slug: 'gi-liver-nutrition-masld-ibd-fodmap',
  version: 1,
  updatedAt: '2026-10-25',
  title: l(
    '21 · Hepatobiliary & Gastrointestinal Disorders: MASLD/MASH, IBD & Low-FODMAP',
    '২১ · যকৃত ও গ্যাস্ট্রোইনটেস্টাইনাল রোগ: MASLD, আইবিডি ও লো-ফোডম্যাপ ডায়েট'
  ),
  summary: l(
    'Pathophysiological hepatology and clinical gastrointestinal dietetics: fructose-driven de novo lipogenesis via ketohexokinase and ChREBP in MASLD/MASH, the gut-liver bile acid FXR-FGF19 signaling axis, exclusive enteral nutrition (EEN) mechanisms in Crohn disease mucosal healing, and the 3-phase clinical low-FODMAP protocol for irritable bowel syndrome.',
    'যকৃত ও পরিপাকনালির আণবিক পুষ্টিবিজ্ঞান: ফ্রুক্টোজ বিপাক, কিটোহেক্সোকাইনেজ এনজাইম ও MASLD/MASH ফ্যাটি লিভার, অন্ত্র-যকৃত পিত্তরস FXR-FGF19 সংকেত পথ, ক্রোনস রোগে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) এবং আইবিএস নিরাময়ে ৩-ধাপের লো-ফোডম্যাপ ক্লিনিক্যাল পথ্য।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
  objectives: [
    l(
      'Contrast hepatic fructose versus glucose metabolism: evaluate ketohexokinase (fructokinase) bypass of phosphofructokinase-1, ChREBP/SREBP-1c activation, and accelerated de novo lipogenesis in MASLD.',
      'লিভারে ফ্রুক্টোজ ও গ্লুকোজ বিপাকের মৌলিক পার্থক্য বিশ্লেষণ: কিটোহেক্সোকাইনেজ এনজাইম কীভাবে পিএফকে-১ বাধা এড়িয়ে সরাসরি ট্রাইগ্লিসারাইড ও ফ্যাটি লিভার (MASLD) তৈরি করে তা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Deconstruct the gut-liver axis and bile acid signaling: examine FXR and TGR5 receptor activation, enterocyte FGF19 secretion, and their metabolic effects on hepatic gluconeogenesis and steatosis.',
      'অন্ত্র-যকৃত অক্ষ ও পিত্তরস সংকেত ব্যবস্থার বিশ্লেষণ: এফএক্সআর (FXR) ও টিজিআর৫ রিসেপ্টর, এন্টারোসাইটের এফজিএফ১৯ হরমোন এবং লিভারে চর্বি জমা রোধে এদের ভূমিকা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the immunological and clinical efficacy of Exclusive Enteral Nutrition (EEN) in pediatric and adult Crohn disease: compare mucosal restitution, NF-kB suppression, and microbiome modulation against corticosteroid therapy.',
      'ক্রোনস রোগে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) এর আণবিক ও ক্লিনিক্যাল ভূমিকা: কীভাবে বিশেষায়িত তরল পথ্য স্টেরয়েডের চেয়ে কার্যকরভাবে অন্ত্রের প্রদাহ কমিয়ে মিউকোসা সারিয়ে তোলে তা পর্যালোচনা করা।'
    ),
    l(
      'Formulate evidence-based clinical dietetic protocols: execute the standardized three-phase Low-FODMAP protocol (restriction, reintroduction, personalization) for irritable bowel syndrome without inducing colonic dysbiosis.',
      'প্রমাণভিত্তিক ক্লিনিক্যাল ডায়েটেটিক্স প্রয়োগ: কোলনের উপকারী ব্যাকটেরিয়ার ক্ষতি না করে ইরিটেবল বাওয়েল সিন্ড্রোমে (IBS) ৩-ধাপের লো-ফোডম্যাপ ডায়েটের সঠিক বাস্তবায়ন কৌশল আয়ত্ত করা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.dietary-fiber-scfa', 'topic.nutrition.food-intolerances-celiac-allergy'],
  relatedTopicIds: ['topic.metabolism.lipogenesis-triglycerides', 'topic.metabolism.fed-fasted-starvation-states'],
  references: masldRefs,
  evidenceBySection: {
    introduction: ['rinella-aasld-masld-guidance-2023', 'stanhope-jci-fructose-dnl-2009'],
    structure: ['stanhope-jci-fructose-dnl-2009', 'rinella-aasld-masld-guidance-2023'],
    mechanism: ['rinella-aasld-masld-guidance-2023', 'forbes-espen-ibd-guideline-2017'],
    integration: ['forbes-espen-ibd-guideline-2017', 'stange-gastro-een-mucosal-healing-2014'],
    practice: ['halmos-gastro-low-fodmap-ibs-2014', 'gibson-jgh-fodmap-approach-2010'],
    takeaways: ['rinella-aasld-masld-guidance-2023', 'halmos-gastro-low-fodmap-ibs-2014'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. MASLD Pathophysiology & The Fructose-Lipogenesis Axis', '১. MASLD রোগশারীরবৃত্ত ও ফ্রুক্টোজ-লিপিড অক্ষ'), sectionId: 'introduction' },
      { id: 'sec-khk', label: l('2. Ketohexokinase Kinetics & Unchecked Triacylglycerol Synthesis', '২. কিটোহেক্সোকাইনেজ গতিবিদ্যা ও ট্রাইগ্লিসারাইড উৎপাদন'), sectionId: 'structure' },
      { id: 'sec-fxr', label: l('3. The Gut-Liver Axis: Bile Acids, FXR & Enteric FGF19', '৩. অন্ত্র-যকৃত অক্ষ: পিত্তরস, এফএক্সআর ও অন্ত্রীয় এফজিএফ১৯'), sectionId: 'mechanism' },
      { id: 'sec-een', label: l('4. Inflammatory Bowel Disease & Exclusive Enteral Nutrition', '৪. প্রদাহজনক অন্ত্র রোগ (IBD) ও এন্টারাল পুষ্টি (EEN)'), sectionId: 'integration' },
      { id: 'sec-fodmap', label: l('5. Clinical Execution of the Three-Phase Low-FODMAP Protocol', '৫. তিন-ধাপের লো-ফোডম্যাপ ক্লিনিক্যাল বাস্তবায়ন প্রোটোকল'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD)', 'মেটাবলিক ডিসফাংশন-সম্পর্কিত ফ্যাটি লিভার রোগ (MASLD)'),
        definition: l(
          'The updated consensus nomenclature for nonalcoholic fatty liver disease, defining hepatic steatosis (>=5% parenchymal fat accumulation) in the presence of at least one cardiometabolic risk factor (obesity, impaired fasting glucose, hypertension, hypertriglyceridemia, or low HDL-C) in the absence of excessive alcohol intake [1].',
          'ফ্যাটি লিভারের আধুনিক আন্তর্জাতিক চিকিৎসা পরিভাষা, যেখানে অতিরিক্ত অ্যালকোহল সেবন ছাড়াই স্থূলতা, উচ্চ রক্তচাপ বা ডায়াবেটিসের মতো মেটাবলিক ঝুঁকির কারণে যকৃতের কোষে ৫ শতাংশের বেশি ক্ষতিকর চর্বি জমা হয় [১]।'
        ),
      },
      {
        term: l('Ketohexokinase-C (Fructokinase)', 'কিটোহেক্সোকাইনেজ-সি (ফ্রুক্টোকাইনেজ)'),
        definition: l(
          'The high-affinity hepatic isoform of ketohexokinase that rapidly phosphorylates D-fructose to fructose-1-phosphate using ATP, entirely bypassing the rate-limiting phosphofructokinase-1 checkpoint and depleting intracellular ATP [2].',
          'লিভারের একটি অত্যন্ত দ্রুতগতিসম্পন্ন এনজাইম যা খাবারের ফ্রুক্টোজকে সরাসরি ফসফেটে রূপান্তর করে; এটি কোষের সাধারণ নিয়ন্ত্রণ ব্যবস্থা এড়িয়ে প্রচুর এটিপি (ATP) খরচ করে এবং সরাসরি ক্ষতিকর চর্বি তৈরিতে বাধ্য করে [২]।'
        ),
      },
      {
        term: l('Carbohydrate Response Element-Binding Protein (ChREBP)', 'কার্বোহাইড্রেট রেসপন্স এলিমেন্ট-বাইন্ডিং প্রোটিন (ChREBP)'),
        definition: l(
          'A master glucose- and fructose-activated transcription factor that coordinates hepatic de novo lipogenesis by directly upregulating acetyl-CoA carboxylase, fatty acid synthase, and stearoyl-CoA desaturase-1 [1, 2].',
          'লিভারের নিউক্লিয়াসে অবস্থিত একটি মাস্টার সুইচ প্রোটিন যা চিনি বা ফ্রুক্টোজের উপস্থিতিতে সক্রিয় হয়ে লিভারের সমস্ত চর্বি তৈরির এনজাইমকে দ্রুত উৎপাদনে নামিয়ে দেয় [১, ২]।'
        ),
      },
      {
        term: l('Farnesoid X Receptor (FXR)', 'ফার্নেসয়েড এক্স রিসেপ্টর (FXR)'),
        definition: l(
          'A nuclear bile acid receptor expressed in hepatocytes and ileal enterocytes that acts as a master metabolic sensor; activation by primary bile acids suppresses lipogenesis, enhances insulin sensitivity, and stimulates enteric FGF19 release [1, 3].',
          'লিভার এবং অন্ত্রের কোষে অবস্থিত একটি অত্যন্ত গুরুত্বপূর্ণ রিসেপ্টর যা পিত্তরসের উপস্থিতিতে সক্রিয় হয়ে লিভারে চর্বি তৈরি বন্ধ করে এবং ইনসুলিনের কার্যক্ষমতা বাড়িয়ে তোলে [১, ৩]।'
        ),
      },
      {
        term: l('Exclusive Enteral Nutrition (EEN)', 'এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN)'),
        definition: l(
          'A medical nutrition therapy for active Crohn disease consisting of 100% nutritional requirements delivered via a liquid formula (polymeric or elemental) for 6 to 8 weeks with complete exclusion of normal solid foods, achieving mucosal remission rates equal or superior to systemic corticosteroids [3, 4].',
          'ক্রোনস রোগের এক বৈপ্লবিক পুষ্টি চিকিৎসা যেখানে ৬ থেকে ৮ সপ্তাহ সাধারণ সব খাবার বন্ধ রেখে রোগীকে ১০০% বিশেষায়িত তরল পুষ্টি ফর্মুলা খাওয়ানো হয়, যা ক্ষতিকর স্টেরয়েড ওষুধের মতোই দ্রুত অন্ত্রের আলসার ও ক্ষত সারিয়ে তোলে [৩, ৪]।'
        ),
      },
      {
        term: l('Fermentable Oligosaccharides, Disaccharides, Monosaccharides and Polyols (FODMAP)', 'ফোডম্যাপ (FODMAP)'),
        definition: l(
          'A group of short-chain, poorly absorbed carbohydrates that exert osmotic effects in the small intestine and undergo rapid anaerobic microbial fermentation in the colon, triggering visceral hypersensitivity, pain, and gas in irritable bowel syndrome [5, 6].',
          'ক্ষুদ্রান্ত্রে সহজে হজম না হওয়া কিছু বিশেষ ধরনের ছোট কার্বোহাইড্রেট যা অন্ত্রে পানি টেনে আনে এবং কোলনের ব্যাকটেরিয়া দ্বারা দ্রুত পচে প্রচুর গ্যাস তৈরি করে আইবিএস রোগীদের পেটে তীব্র ব্যথা ও ফাঁপা ভাব সৃষ্টি করে [৫, ৬]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Medical Nutrition Therapy for MASLD with Hepatic Steatosis & Hypertriglyceridemia',
          'ফ্যাটি লিভার (MASLD) ও রক্তে অতিরিক্ত ট্রাইগ্লিসারাইডের প্রমাণভিত্তিক পুষ্টি পরিকল্পনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Phenotyping & Metabolic Staging: A 48-year-old female presents with persistent fatigue. Abdominal ultrasonography reveals diffuse bright liver echogenicity consistent with Grade 2 hepatic steatosis. Laboratory analysis shows ALT 68 U/L, AST 52 U/L, fasting blood glucose 118 mg/dL, HbA1c 6.1% (prediabetes), triglycerides 285 mg/dL, and HDL-C 38 mg/dL. BMI is 31.4 kg/m2 (Class I obesity), with waist circumference 94 cm. Daily dietary recall reveals habitual intake of two 500-mL bottles of high-fructose corn syrup (HFCS) sweetened soda (~65 g free fructose/day) and frequent refined carbohydrate snacks.',
            'ধাপ ১: রোগীর শারীরিক ও ল্যাবরেটরি মূল্যায়ন: ৪৮ বছর বয়সী এক নারীর আল্ট্রাসনোগ্রামে গ্রেড-২ ফ্যাটি লিভার শনাক্ত হয়। রক্ত পরীক্ষায় দেখা গেল লিভারের এনজাইম বেশি (ALT 68, AST 52), প্রিডায়াবেটিস (HbA1c 6.1%), ক্ষতিকর ট্রাইগ্লিসারাইড ২৮৫ mg/dL এবং পেটের চর্বি অতিরিক্ত (কোমর ৯৪ সেমি)। খাদ্যাভ্যাসে দেখা গেল তিনি প্রতিদিন কোমল পানীয়ের মাধ্যমে ৬৫ গ্রাম ক্ষতিকর কৃত্রিম ফ্রুক্টোজ গ্রহণ করছিলেন।'
          ),
          l(
            'Step 2: Molecular Fructose Cessation & De Novo Lipogenesis Suppression: Immediate elimination of all industrial fructose-containing beverages (HFCS, sodas, packaged juices, sweetened teas). Because hepatic ketohexokinase lacks feedback inhibition and consumes intracellular ATP to synthesize glyceraldehyde-3-phosphate, stopping liquid fructose abruptly arrests the flux of triose phosphates into hepatic de novo lipogenesis (DNL), immediately reducing substrate supply for hepatic acetyl-CoA carboxylase and triglyceride synthesis.',
            'ধাপ ২: কৃত্রিম ফ্রুক্টোজ বর্জন ও চর্বি উৎপাদন বন্ধ: সমস্ত কোমল পানীয় ও প্যাকেটজাত জুস তাৎক্ষণিকভাবে নিষিদ্ধ করা হলো। লিভারের কিটোহেক্সোকাইনেজ এনজাইমের কোনো নিয়ন্ত্রণ নেই বলে এটি ফ্রুক্টোজ পেলেই লিভারে চর্বি জমাতে থাকে; ফলে ফ্রুক্টোজ বন্ধ করার সাথে সাথেই লিভারে নতুন চর্বি তৈরি সম্পূর্ণ বন্ধ হয়ে যায়।'
          ),
          l(
            'Step 3: Hypocaloric Mediterranean Prescription: Prescribe an individualized Mediterranean dietary pattern imposing a 500 to 750 kcal/day energy deficit to achieve 7% to 10% total body weight loss over 6 months (the validated threshold for steatohepatitis resolution and fibrosis regression). The diet provides 45% calories from low-glycemic, unrefined whole grains and vegetables, 35% from cardioprotective fats (predominantly extra virgin olive oil high in oleic acid and polyphenols, plus walnuts rich in alpha-linolenic acid), and 20% from high-quality protein (fish, skinless poultry, legumes).',
            'ধাপ ৩: হাইপোক্যালোরিক ভূমধ্যসাগরীয় খাদ্যাভ্যাস প্রণয়ন: প্রতিদিন ৫০০-৭৫০ ক্যালোরি কমিয়ে আগামী ৬ মাসে রোগীর শরীরের ওজনের ৭ থেকে ১০ শতাংশ কমানোর লক্ষ্য নির্ধারণ করা হলো (যা লিভারের প্রদাহ ও ক্ষত দূর করার বৈজ্ঞানিক মানদণ্ড)। খাবারে অতিরিক্ত অলিভ অয়েল, বাদাম, মাছ ও আঁশযুক্ত শাকসবজি অন্তর্ভুক্ত করা হলো যা লিভারের ইনসুলিন সংবেদনশীলতা ফিরিয়ে আনে।'
          ),
          l(
            'Step 4: Clinical Monitoring & Metabolic Resolution: At 24-week follow-up, the patient achieves 8.2 kg (9.4%) weight loss. Repeat ultrasound confirms regression from Grade 2 steatosis to trace steatosis. Serum ALT and AST normalize completely to 24 U/L and 21 U/L, respectively. Fasting glucose falls to 94 mg/dL (HbA1c 5.4%), and serum triglycerides drop by 54% from 285 mg/dL to 131 mg/dL, reversing hepatocyte lipotoxicity and halting progression toward metabolic dysfunction-associated steatohepatitis (MASH).',
            'ধাপ ৪: ফলো-আপ ও লিভারের সম্পূর্ণ আরোগ্য: ২৪ সপ্তাহ পর রোগীর ৮.২ কেজি (৯.৪%) ওজন কমল। আল্ট্রাসনোগ্রামে দেখা গেল ফ্যাটি লিভার প্রায় পুরোপুরি দূর হয়ে গেছে। লিভারের এনজাইম (ALT/AST) সম্পূর্ণ স্বাভাবিক হয়ে এল, রক্তের সুগার ও ট্রাইগ্লিসারাইড অর্ধেকের বেশি কমে ১৩১ mg/dL এ চলে এল, যা প্রমাণ করে ফ্যাটি লিভার সঠিক পুষ্টিতেই শতভাগ নিরাময়যোগ্য।'
          ),
        ],
        conclusion: l(
          'Targeted elimination of industrial liquid fructose combined with 7% to 10% weight loss via a polyphenol-rich Mediterranean dietary pattern rapidly suppresses hepatic de novo lipogenesis and reverses metabolic dysfunction-associated steatotic liver disease.',
          'কোমল পানীয়ের ফ্রুক্টোজ সম্পূর্ণ বন্ধ করা এবং ভূমধ্যসাগরীয় খাদ্যাভ্যাসের মাধ্যমে শরীরের ওজন ৭-১০% কমালে লিভারে চর্বি তৈরি বন্ধ হয় এবং ফ্যাটি লিভার রোগ সম্পূর্ণ নিরাময় লাভ করে।'
        ),
      },
      {
        title: l(
          'Structured Three-Phase Low-FODMAP Protocol for Severe Diarrhea-Predominant IBS',
          'ডায়রিয়া-প্রধান আইবিএস (IBS-D) নিরাময়ে তিন-ধাপের লো-ফোডম্যাপ ডায়েটের সঠিক বাস্তবায়ন'
        ),
        steps: [
          l(
            'Step 1: Clinical Baseline & Exclusion of Organic Pathology: A 32-year-old male presents with a 2-year history of debilitating postprandial abdominal cramping, severe bloating, excessive flatulence, and frequent loose stools (Bristol Stool Scale Type 6; 4-6 episodes/day). Diagnostic workup rules out celiac disease (anti-tTG IgA negative, total IgA normal), inflammatory bowel disease (fecal calprotectin <30 ug/g), and infectious enteritis. A diagnosis of irritable bowel syndrome with diarrhea (IBS-D) is established according to Rome IV criteria.',
            'ধাপ ১: রোগ নির্ণয় ও পূর্বশর্ত যাচাই: ৩২ বছর বয়সী এক যুবক দীর্ঘ ২ বছর ধরে পেটে মোচড় দিয়ে ব্যথা, গ্যাস, পেট ফাঁপা এবং দিনে ৪-৬ বার পাতলা পায়খানার সমস্যায় ভুগছিলেন। সিলিয়াক ডিজিজ ও অন্ত্রের ক্ষত (IBD) পরীক্ষা করে দেখা গেল সেগুলো স্বাভাবিক। রোম-৪ মানদণ্ড অনুযায়ী রোগীর রোগটিকে ডায়রিয়া-প্রধান আইবিএস (IBS-D) হিসেবে শনাক্ত করা হলো।'
          ),
          l(
            'Step 2: Phase 1 — Strict FODMAP Restriction (Weeks 1 to 4): Instruct the patient to eliminate all high-FODMAP foods for a strictly limited period of 4 weeks. High-fructose foods (honey, apples, mangoes), lactose sources (cow milk, soft cheese), fructan sources (wheat, garlic, onions), galacto-oligosaccharide sources (beans, lentils), and polyols (sorbitol, mannitol in stone fruits and artificial sweeteners) are replaced with low-FODMAP alternatives: sourdough spelt bread, rice, quinoa, blueberries, citrus, hard aged cheeses, spinach, carrots, and garlic-infused oil. By week 3, abdominal pain score falls from 8/10 to 2/10, bloating disappears, and stools normalize to Bristol Scale Type 4 (1-2 formed stools/day).',
            'ধাপ ২: প্রথম ধাপ — কঠোর নিয়ন্ত্রণ (১ থেকে ৪ সপ্তাহ): রোগীকে ৪ সপ্তাহের জন্য সমস্ত উচ্চ-ফোডম্যাপ খাবার বাদ দিতে বলা হলো। পেঁয়াজ, রসুন, গম, দুধ, আপেল, আম, মধু ও ডাল পুরোপুরি বন্ধ করে লো-ফোডম্যাপ খাবার (ভাত, আলু, গাজর, পালং শাক, বেরি, শক্ত পনির ও রসুনের ফ্লেভারযুক্ত তেল) দেওয়া হলো। ৩ সপ্তাহের মধ্যে পেটের ব্যথা ৮ থেকে ২-এ নেমে এল এবং মল পুরোপুরি স্বাভাবিক ও শক্ত হলো।'
          ),
          l(
            'Step 3: Phase 2 — Systematic Subgroup Reintroduction (Weeks 5 to 10): While maintaining a low-FODMAP background, challenge specific FODMAP subgroups individually over 3 consecutive days, followed by a 3-day washout. Test fructose (honey, 1-2 tsp), lactose (milk, 100-200 mL), sorbitol (avocado/blackberries), mannitol (mushrooms), GOS (canned lentils), and fructans (garlic clove, wheat bread). The patient tolerates lactose, polyols, and GOS without any symptoms, but develops intense cramping and loose stools within 4 hours of ingesting fructans (garlic/onion) and free fructose (honey).',
            'ধাপ ৩: দ্বিতীয় ধাপ — সুনির্দিষ্ট খাদ্য পুনঃপ্রবর্তন (৫ থেকে ১০ সপ্তাহ): মূল খাবার লো-ফোডম্যাপ রেখে প্রতি সপ্তাহে একটি করে নির্দিষ্ট গ্রুপের খাবার ৩ দিন পরীক্ষা করা হলো। দেখা গেল রোগী দুধ ও ডাল খেলে কোনো সমস্যা হচ্ছে না, কিন্তু পেঁয়াজ, রসুন বা অতিরিক্ত মিষ্টি ফ্রুক্টোজ খেলেই ৪ ঘণ্টার মধ্যে পেটে তীব্র মোচড় ও ডায়রিয়া ফিরে আসছে।'
          ),
          l(
            'Step 4: Phase 3 — Long-Term Personalized FODMAP Liberalization: Formulate a sustainable, lifelong personalized diet that reintroduces all tolerated FODMAPs (lactose, polyols, legumes) to maximize prebiotic dietary fiber diversity and nourish colonic Bifidobacteria and Faecalibacterium prausnitzii. The patient permanently avoids only his specific trigger foods: high-fructose syrups, concentrated onions, and raw garlic. At 12-month follow-up, the patient maintains complete gastrointestinal symptom control while consuming a rich, diverse, fiber-dense diet with normal stool consistency.',
            'ধাপ ৪: তৃতীয় ধাপ — দীর্ঘমেয়াদি ব্যক্তিগত খাদ্যতালিকা: অন্ত্রের উপকারী ব্যাকটেরিয়ার খাদ্য সরবরাহ নিশ্চিত করতে যেসব খাবারে সমস্যা হয়নি (যেমন ডাল ও দুধ) সেগুলো পুনরায় চালু করা হলো। রোগী কেবল তার নিজস্ব ক্ষতিকর উপাদান—পেঁয়াজ, রসুন ও অতিরিক্ত ফ্রুক্টোজ এড়িয়ে চললেন। এক বছর পরও কোনো ওষুধ ছাড়াই রোগী সম্পূর্ণ উপসর্গমুক্ত ও স্বাস্থ্যকর জীবনযাপন করছেন।'
          ),
        ],
        conclusion: l(
          'The three-phase Low-FODMAP protocol successfully resolves functional IBS symptoms while preventing long-term colonic dysbiosis by systematically reintroducing all tolerated prebiotic fibers.',
          'তিন-ধাপের লো-ফোডম্যাপ চিকিৎসা পদ্ধতি আইবিএসের কষ্টদায়ক পেটের উপসর্গ শতভাগ দূর করে এবং পরবর্তীতে সহনশীল খাবারগুলো পুনরায় চালু করার মাধ্যমে অন্ত্রের ব্যাকটেরিয়ার সুস্থ পরিবেশ অক্ষুণ্ণ রাখে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does dietary fructose stimulate hepatic de novo lipogenesis far more aggressively than an equimolar quantity of dietary glucose?',
          'খাবারে একই পরিমাণ গ্লুকোজের তুলনায় ফ্রুক্টোজ কেন লিভারে বহুগুণ বেশি দ্রুত ও আগ্রাসীভাবে ক্ষতিকর চর্বি (De Novo Lipogenesis) তৈরি করে?'
        ),
        answer: l(
          'Unlike glucose, which is primarily phosphorylated by hexokinase/glucokinase and strictly regulated by phosphofructokinase-1 (PFK-1)—which is allosterically inhibited by downstream ATP and citrate—fructose is phosphorylated in hepatocytes by ketohexokinase (KHK-C). Ketohexokinase lacks any allosteric feedback inhibition mechanism and operates with extremely high Vmax, utilizing intracellular ATP to rapidly convert fructose into fructose-1-phosphate. Fructose-1-phosphate is subsequently cleaved by aldolase B directly into dihydroxyacetone phosphate (DHAP) and glyceraldehyde, which are metabolized into glyceraldehyde-3-phosphate. This metabolic bypass completely circumvents the PFK-1 regulatory gatekeeper, flooding the lower glycolytic and lipogenic pathways with unregulated triose phosphates. The resulting substrate surge transactivates ChREBP and SREBP-1c, accelerating hepatic de novo lipogenesis, elevating intrahepatic triglycerides, and driving atherogenic VLDL export.',
          'গ্লুকোজ যখন লিভারে ঢোকে, তখন পিএফকে-১ (PFK-1) নামক এনজাইম পাহারাদারের মতো কাজ করে; কোষে যথেষ্ট শক্তি থাকলে এটি গ্লুকোজ থেকে চর্বি তৈরি হতে বাধা দেয়। কিন্তু ফ্রুক্টোজ লিভারে ঢুকলে কিটোহেক্সোকাইনেজ (KHK) নামক এনজাইম কোনো নিয়ন্ত্রণ ছাড়াই ফ্রুক্টোজকে সরাসরি ট্রাইঅক্সাইড উপাদানে রূপান্তর করে ফেলে। এই এনজাইমটি কোষের প্রধান নিয়ন্ত্রক পাহারাদারকে সম্পূর্ণ পাশ কাটিয়ে লিভারের কোষের ভেতরের সমস্ত শক্তি খরচ করে চর্বি তৈরির কারখানাকে সরাসরি কাঁচামালে ভাসিয়ে দেয়। এর ফলে লিভারের মাস্টার সুইচ ChREBP সক্রিয় হয়ে কোটি কোটি নতুন ট্রাইগ্লিসারাইড চর্বি তৈরি করে এবং লিভারকে চর্বির গুদামে পরিণত করে।'
        ),
      },
      {
        question: l(
          'What are the primary molecular and immunological mechanisms by which Exclusive Enteral Nutrition (EEN) induces mucosal healing in active Crohn disease?',
          'ক্রোনস রোগে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) ঠিক কোন আণবিক ও রোগপ্রতিরোধ প্রক্রিয়ায় অন্ত্রের গভীর আলসার ও ক্ষত সারিয়ে তোলে?'
        ),
        answer: l(
          'Exclusive Enteral Nutrition (EEN) induces mucosal remission in Crohn disease through four complementary molecular mechanisms: (1) Antigen Exclusion: The complete elimination of whole dietary solid foods removes dietary emulsifiers (polysorbate-80, carboxymethylcellulose), microparticles, and dietary antigens that disrupt the mucus layer and trigger toll-like receptor activation. (2) Anti-inflammatory Cytokine Modulation: EEN formula components downregulate enterocyte and macrophage NF-kB signaling, suppressing mucosal transcription of pro-inflammatory cytokines IL-1beta, IL-6, and TNF-alpha while upregulating the tissue-protective cytokine Transforming Growth Factor-beta (TGF-beta). (3) Epithelial Barrier Restitution: The supply of readily absorbable micronutrients and amino acids fuels enterocyte mitochondrial respiration, stimulating the expression of tight junction proteins (claudin-1, occludin, ZO-1) to seal mucosal ulcerations. (4) Microbiome Metabolic Rest: EEN alters intestinal luminal metabolomics, reducing pro-inflammatory bile acid metabolites and resting the inflamed gut mucosa to achieve endoscopic mucosal healing rates exceeding 70% to 80% in pediatric and newly diagnosed patients.',
          'এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) চারটি প্রধান আণবিক উপায়ে ক্রোনস রোগের ক্ষত সারিয়ে তোলে: (১) ক্ষতিকর উপাদান বর্জন: সাধারণ খাবার বন্ধ রাখায় প্রক্রিয়াজাত খাবারের রাসায়নিক প্রিজারভেটিভ ও ইমালসিফায়ার পেটে ঢুকতে পারে না যা অন্ত্রের দেয়ালকে বিষাক্ত করে। (২) প্রদাহ সৃষ্টিকারী সাইটোকাইন দমন: এই বিশেষ পুষ্টি অন্ত্রের কোষের ভেতরের ক্ষতিকর NF-kB সংকেত বন্ধ করে দেয় এবং TNF-alpha ও IL-6 এর মতো বিষাক্ত প্রদাহকারী উপাদান তৈরি থামিয়ে দেয়। (৩) দেয়ালের ক্ষত নিরাময়: তরল ফর্মুলায় থাকা বিশুদ্ধ অ্যামিনো অ্যাসিড অন্ত্রের কোষের টাইট জাংশন প্রোটিনগুলোকে পুনর্গঠন করে আলসার দ্রুত শুকিয়ে ফেলে। (৪) ব্যাকটেরিয়ার ভারসাম্য রক্ষা: এটি অন্ত্রের প্রদাহজনক পিত্তরস কমিয়ে মিউকোসাকে বিশ্রাম দেয়, যার ফলে ৮০ শতাংশ ক্ষেত্রে স্টেরয়েড ছাড়াই অন্ত্র সম্পূর্ণ সুস্থ হয়ে ওঠে।'
        ),
      },
      {
        question: l(
          'Why is a permanent, lifelong strict Low-FODMAP diet clinically contraindicated in patients with irritable bowel syndrome?',
          'আইবিএস (IBS) আক্রান্ত রোগীদের ক্ষেত্রে আজীবন একটানা কঠোর লো-ফোডম্যাপ ডায়েট মেনে চলা কেন চিকিৎসাবিজ্ঞানে সম্পূর্ণ নিষেধ বা ক্ষতিকর?'
        ),
        answer: l(
          'A strict Low-FODMAP diet eliminates major sources of prebiotic fermentable soluble fibers, particularly fructans (inulin, fructo-oligosaccharides) and galacto-oligosaccharides (GOS) found in wheat, onions, garlic, and legumes. These prebiotic carbohydrates serve as the obligatory metabolic substrates for saccharolytic, health-promoting colonic bacteria, predominantly Bifidobacterium species and Faecalibacterium prausnitzii. Clinical microbiome sequencing studies demonstrate that maintaining strict FODMAP restriction beyond 4 to 6 weeks drastically depletes luminal bifidobacteria by up to 50% to 75% and collapses short-chain fatty acid (SCFA; especially butyrate) production. Depletion of butyrate starves colonocytes, compromises colonic epithelial barrier integrity, and fosters long-term dysbiosis. Therefore, the standardized Low-FODMAP protocol mandates transitioning from Phase 1 (restriction) to Phase 2 (systematic reintroduction) and Phase 3 (personalization), reintroducing all tolerated prebiotic fibers to preserve microbial diversity while permanently restricting only individual symptom triggers.',
          'কঠোর লো-ফোডম্যাপ খাবারে পেঁয়াজ, রসুন, গম ও ডালের মতো গুরুত্বপূর্ণ প্রিবায়োটিক খাদ্যআঁশ থাকে না। এই আঁশগুলো হলো বৃহদান্ত্রের উপকারী ব্যাকটেরিয়া—বিশেষ করে বিফিডোব্যাকটেরিয়া এবং বিউটাইরেট তৈরিকারী ব্যাকটেরিয়ার প্রধান খাবার। গবেষণায় দেখা গেছে যে ৪ থেকে ৬ সপ্তাহের বেশি একটানা কঠোর লো-ফোডম্যাপ মেনে চললে অন্ত্রের উপকারী ব্যাকটেরিয়ার সংখ্যা ৫০ থেকে ৭৫ শতাংশ কমে যায় এবং বিউটাইরেট উৎপাদন বন্ধ হয়ে অন্ত্রের দেয়াল পুষ্টিহীনতায় ভুগে দুর্বল হয়ে পড়ে। তাই প্রথম কয়েক সপ্তাহ পর একে একে সব খাবার পরীক্ষা করে যেসব খাবারে সমস্যা হয় না সেগুলো পুনরায় খাদ্যতালিকায় ফিরিয়ে আনা বাধ্যতামূলক, যাতে অন্ত্রের বন্ধু ব্যাকটেরিয়ারা সুস্থভাবে বেঁচে থাকতে পারে।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating Hepatic Fructose Metabolism, De Novo Lipogenesis, Bile Acid FXR Signaling, and IBD/IBS Gastrointestinal Nutritional Management.',
      'লিভারে ফ্রুক্টোজ থেকে চর্বি তৈরির প্রক্রিয়া, পিত্তরস ও এফএক্সআর সংকেত পথ এবং আইবিডি ও আইবিএসের পুষ্টি ব্যবস্থাপনার ধারাবাহিক বৈজ্ঞানিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Dietary Fructose Influx & Unregulated KHK-C Phosphorylation: Ingested fructose is absorbed via GLUT5 enterocyte transporters and delivered to the liver via the portal vein. Hepatocytes utilize ketohexokinase-C (KHK-C) to phosphorylate fructose into fructose-1-phosphate, consuming ATP and entirely bypassing the phosphofructokinase-1 regulatory checkpoint.',
        'ধাপ ১: ফ্রুক্টোজের অবাধ রূপান্তর ও এটিপি অপচয়: খাবার থেকে ফ্রুক্টোজ রক্তে শোষিত হয়ে সোজা লিভারে আসে। লিভারের KHK-C এনজাইম কোনো নিয়ন্ত্রণ ছাড়াই প্রচুর এটিপি শক্তি খরচ করে ফ্রুক্টোজকে সরাসরি ভেঙে ফেলে।'
      ),
      l(
        'Step 2: Triose Phosphate Flooding & ChREBP-Driven De Novo Lipogenesis: Unrestrained cleavage by aldolase B floods the cytoplasm with DHAP and glyceraldehyde-3-phosphate, providing infinite substrate for glycerol-3-phosphate and acetyl-CoA synthesis. Nuclear translocation of ChREBP and SREBP-1c transactivates fatty acid synthase (FASN) and acetyl-CoA carboxylase (ACC), accelerating hepatic de novo lipogenesis and packing ectopic fat into lipid droplets (steatosis).',
        'ধাপ ২: চর্বি তৈরির কারখানা সক্রিয়করণ ও ফ্যাটি লিভার: অতিরিক্ত উপাদান লিভারের চর্বি তৈরির মাস্টার সুইচ ChREBP সক্রিয় করে দেয়। ফলে লিভার অবিরাম নতুন ফ্যাটি অ্যাসিড তৈরি করে কোষে চর্বির স্তূপ (MASLD) জমাতে থাকে।'
      ),
      l(
        'Step 3: Enteric Bile Acid FXR-FGF19 Axis: Primary bile acids (chenodeoxycholic acid) activate intestinal farnesoid X receptors (FXR), stimulating the transcription and basolateral secretion of Fibroblast Growth Factor 19 (FGF19). FGF19 circulates via the portal blood to hepatic FGFR4/beta-Klotho complexes, suppressing CYP7A1 bile acid synthesis and halting hepatic lipogenesis.',
        'ধাপ ৩: পিত্তরস ও অন্ত্র-যকৃত হরমোন সংকেত: অন্ত্রের পিত্তরস এফএক্সআর রিসেপ্টর সক্রিয় করে এফজিএফ১৯ (FGF19) হরমোন নিঃসরণ করায়। এই হরমোন লিভারে গিয়ে অতিরিক্ত চর্বি তৈরি বন্ধ করতে নির্দেশ পাঠায়।'
      ),
      l(
        'Step 4: Clinical Dietary Resolution (EEN & Low-FODMAP): Exclusive Enteral Nutrition shuts down mucosal NF-kB in Crohn disease, achieving 80% mucosal healing. In IBS, the structured 3-phase Low-FODMAP protocol eliminates gas-producing short-chain carbohydrates, re-establishing mucosal comfort without destroying colonic microbiome diversity.',
        'ধাপ ৪: পুষ্টি থেরাপির মাধ্যমে রোগমুক্তি: ক্রোনস রোগে EEN তরল পথ্য অন্ত্রের ক্ষত সারিয়ে তোলে। আর আইবিএসে ৩-ধাপের লো-ফোডম্যাপ পদ্ধতি অন্ত্রের গ্যাস ও ব্যথা দূর করে মাইক্রোবায়োমের স্বাস্থ্য অটুট রাখে।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 'masld-fructose-een-fodmap-axis',
    title: l(
      'Hepatobiliary Fructose Lipogenesis & Enteric Dietetics Hub',
      'যকৃতের ফ্রুক্টোজ চর্বি সংশ্লেষ ও গ্যাস্ট্রোইনটেস্টাইনাল পুষ্টি কেন্দ্র'
    ),
    description: l(
      'Interactive architecture of hepatic ketohexokinase kinetics, bile acid FXR signaling, exclusive enteral nutrition mucosal healing, and the Low-FODMAP protocol.',
      'লিভারের ফ্রুক্টোকাইনেজ গতিবিদ্যা, পিত্তরস ও এফএক্সআর সংকেত পথ, ক্রোনস রোগে EEN এবং লো-ফোডম্যাপ ডায়েটের ইন্টারঅ্যাক্টিভ চিত্র।'
    ),
    disclaimer: l(
      'Educational hepatology and dietetic simulation; MNT protocols require professional gastroenterologist and registered dietitian oversight.',
      'শিক্ষামূলক গ্যাস্ট্রোএন্টারোলজি সিমুলেশন; পথ্য পরিবর্তনের পূর্বে গ্যাস্ট্রোএন্টারোলজিস্টের পরামর্শ আবশ্যক।'
    ),
    svgType: 'masld-fructose-axis',
    items: [
      {
        id: 'node-fructose-khk',
        label: l('Fructose De Novo Lipogenesis', 'ফ্রুক্টোজ ও লিপোজেনেসিস'),
        description: l(
          'Fructose is phosphorylated by hepatic ketohexokinase-C, consuming ATP and bypassing PFK-1 to flood lipogenesis pathways with triose phosphates.',
          'ফ্রুক্টোজ কোনো নিয়ন্ত্রণ ছাড়াই লিভারে এটিপি খরচ করে সরাসরি ট্রাইগ্লিসারাইড তৈরিতে কাঁচামাল সরবরাহ করে।'
        ),
        details: l(
          'Fructose stimulates hepatic de novo lipogenesis by bypassing PFK-1 and transactivating ChREBP and SREBP-1c to drive steatosis.',
          'ফ্রুক্টোজ পিএফকে-১ বাধা এড়িয়ে সরাসরি ChREBP ও SREBP-1c সক্রিয় করে লিভারে চর্বি জমাতে থাকে।'
        ),
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-dnl-steatosis',
        label: l('ChREBP & Hepatic Steatosis', 'ChREBP ও ফ্যাটি লিভার'),
        description: l(
          'Excess triose phosphates activate ChREBP and SREBP-1c, upregulating ACC and FASN to pack triglycerides into hepatocyte lipid droplets (MASLD).',
          'অতিরিক্ত উপাদান লিভারের মাস্টার সুইচ অন করে দেয় যা লিভারের কোষে চর্বি জমিয়ে ফ্যাটি লিভার সৃষ্টি করে।'
        ),
        details: l(
          'ChREBP drives acetyl-CoA carboxylase (ACC) and fatty acid synthase (FASN), elevating intrahepatic fat and promoting atherogenic VLDL release.',
          'ChREBP এনজাইম লিভারে ট্রাইগ্লিসারাইড বাড়ায় এবং রক্তে ক্ষতিকর VLDL কণা ছড়িয়ে দেয়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-fxr-fgf19',
        label: l('Bile Acid FXR-FGF19 Axis', 'পিত্তরস ও FGF19 সংকেত'),
        description: l(
          'Ileal FXR activation by bile acids stimulates FGF19 release into portal circulation, binding hepatic FGFR4 to silence lipogenesis and restore insulin sensitivity.',
          'পিত্তরস অন্ত্রের FXR রিসেপ্টর চালু করে FGF19 হরমোন পাঠায় যা লিভারে গিয়ে চর্বি তৈরি বন্ধ করে দেয়।'
        ),
        details: l(
          'FGF19 activates hepatic FGFR4/beta-Klotho to suppress CYP7A1 and inhibit SREBP-1c, reducing intrahepatic fat accumulation.',
          'FGF19 হরমোন লিভারের চর্বি তৈরি থামায় এবং ইনসুলিনের কার্যক্ষমতা বাড়ায়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-een-ibd',
        label: l('EEN Mucosal Healing in IBD', 'ক্রোনস রোগে EEN তরল পথ্য'),
        description: l(
          '100% liquid formula nutrition for 6–8 weeks removes food additives, downregulates mucosal NF-kB, and induces mucosal healing in Crohn disease.',
          '৬-৮ সপ্তাহ সাধারণ খাবার বন্ধ রেখে বিশেষ তরল পুষ্টি দিলে অন্ত্রের প্রদাহ ও আলসার দ্রুত শুকিয়ে যায়।'
        ),
        details: l(
          'EEN suppresses IL-1beta, IL-6, and TNF-alpha, upregulating TGF-beta to restore mucosal tight junctions with >80% endoscopic remission.',
          'EEN ক্ষতিকর সাইটোকাইন কমিয়ে অন্ত্রের দেয়াল পুনর্গঠন করে এবং রোগীকে সুস্থ করে তোলে।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-low-fodmap',
        label: l('3-Phase Low-FODMAP Protocol', '৩-ধাপের লো-ফোডম্যাপ ডায়েট'),
        description: l(
          'Systematic restriction, challenge, and personalization eliminate gas-producing fermentable carbohydrates to control IBS without causing colonic dysbiosis.',
          'আইবিএসের গ্যাস ও ব্যথা কমাতে ক্ষতিকর আঁশ সাময়িক বাদ দিয়ে পরবর্তীতে সহনশীল খাবার পুনরায় চালু করা হয়।'
        ),
        details: l(
          'Phase 1 eliminates high-FODMAPs; Phase 2 identifies individual trigger foods; Phase 3 reintroduces tolerated prebiotic fibers to preserve bifidobacteria.',
          '৩টি ধাপে পরিচালিত এই পথ্য আইবিএস দূর করে এবং অন্ত্রের উপকারী ব্যাকটেরিয়ার খাদ্য সরবরাহ রক্ষা করে।'
        ),
        color: '#3b82f6',
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
          heading: l('1. The Liver-Gut Axis: Metabolic Filtration & Bile Circulation', '১. যকৃত-অন্ত্র অক্ষ: বিপাকীয় ছাঁকন ও পিত্তরস সঞ্চালন'),
          paragraphs: [
            l(
              'The liver is the primary metabolic organ of the human body, positioned anatomically as the central gateway between the gastrointestinal tract and the systemic circulation [1]. Every nutrient, toxin, and microbial product absorbed across the enterocyte monolayer travels directly to the liver via the portal vein [1]. Weighing approximately 1.5 kilograms, the liver processes this continuous nutrient flux through microscopic lobules composed of radiating plates of hepatocytes flanked by hepatic sinusoids, Kupffer resident macrophages, and hepatic stellate cells [1].',
              'যকৃত বা লিভার হলো মানবদেহের প্রধান বিপাকীয় গবেষণাগার, যা শারীরবৃত্তীয়ভাবে পরিপাকনালী এবং সারা শরীরের রক্তসঞ্চালনের মাঝে প্রধান নিরাপত্তা ফটক হিসেবে অবস্থান করে [১]। অন্ত্র থেকে শোষিত প্রতিটি পুষ্টি উপাদান, খাদ্য উপাদান ও বিষাক্ত বর্জ্য পোর্টাল শিরার মাধ্যমে সবার আগে সরাসরি লিভারে এসে পৌঁছায় [১]। প্রায় দেড় কেজি ওজনের এই বিস্ময়কর অঙ্গটি হেপাটোসাইট কোষ, কুফার ম্যাক্রোফেজ এবং স্টেলেট কোষের সমন্বয়ে গঠিত যা রক্ত ছেঁকে সারা শরীরে বিশুদ্ধ পুষ্টি সরবরাহ নিশ্চিত করে [১]।'
            ),
            l(
              'Under healthy conditions, hepatocytes coordinate glucose homeostasis, glycogen storage, protein synthesis (albumin, clotting factors), and lipid transport via lipoprotein packaging [1, 2]. Simultaneously, the liver synthesizes primary bile acids—cholic acid and chenodeoxycholic acid—from cholesterol [1]. These bile acids are conjugated with glycine or taurine and secreted into bile canaliculi, concentrating in the gallbladder before meal-stimulated release into the duodenum to emulsify dietary fats and lipid-soluble vitamins [1].',
              'সুস্থ শরীরে লিভারের কোষগুলো রক্তের গ্লুকোজের মাত্রা নিয়ন্ত্রণ করে, বাড়তি চিনি গ্লাইকোজেন হিসেবে জমা রাখে, রক্তের মূল্যবান প্রোটিন তৈরি করে এবং চর্বি পরিবহন পরিচালনা করে [১, ২]। একই সাথে লিভার কোলেস্টেরল থেকে প্রতিদিন পিত্তরস তৈরি করে [১]। এই পিত্তরস পিত্তথলিতে জমা থাকে এবং চর্বিজাতীয় খাবার খাওয়ার সাথে সাথে ক্ষুদ্রান্ত্রে নিঃসৃত হয়ে খাবারের চর্বি ও ভিটামিন হজমে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে [১]।'
            ),
            l(
              'Over 95% of secreted bile acids are actively reabsorbed in the terminal ileum via the Apical Sodium-Dependent Bile Acid Transporter (ASBT) and recycled back to the liver through the portal circulation, a biological marvel known as enterohepatic circulation [1, 3]. However, when dietary nutrient influx chronically exceeds metabolic disposal capacity, this finely balanced hepatobiliary highway decompensates [1]. The liver shifts from an organ of healthy energetic storage into an organ overwhelmed by pathological fat accumulation, initiating Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD) [1].',
              'ক্ষুদ্রান্ত্রে চর্বি হজম শেষে নিঃসৃত পিত্তরসের ৯৫ শতাংশেরও বেশি অন্ত্রের শেষ প্রান্তে পুনরায় শোষিত হয়ে পোর্টাল রক্তের মাধ্যমে আবার লিভারে ফিরে আসে, যাকে এন্টারোহেপাটিক সঞ্চালন বলা হয় [১, ৩]। কিন্তু যখন মানুষ দিনের পর দিন প্রয়োজনের অতিরিক্ত ক্যালোরি ও মিষ্টি খাবার গ্রহণ করতে থাকে, তখন লিভারের এই সুন্দর ভারসাম্য ভেঙে পড়ে [১]। অতিরিক্ত চর্বির বোঝায় লিভার ক্লান্ত হয়ে পড়ে এবং লিভারের কোষে চর্বি জমতে জমতে ফ্যাটি লিভার বা MASLD রোগের সূচনা ঘটে [১]।'
            ),
            l(
              'Metabolic dysfunction-associated steatotic liver disease is formally diagnosed when lipid droplets occupy >=5% of hepatocytes on histological evaluation or imaging, in the presence of at least one metabolic risk factor (such as central obesity, insulin resistance, or dyslipidemia) [1]. Without targeted dietary intervention, simple steatosis can progress to Metabolic Dysfunction-Associated Steatohepatitis (MASH), characterized by hepatocyte ballooning, inflammatory infiltration, progressive fibrosis, and ultimately end-stage cirrhosis [1, 2]. Understanding the nutritional drivers of this disease is the cornerstone of clinical hepatology dietetics [1].',
              'চিকিৎসাবিজ্ঞানে ফ্যাটি লিভার (MASLD) তখন বলা হয় যখন লিভারের কোষে শতকরা ৫ ভাগের বেশি ক্ষতিকর চর্বি জমা হয় এবং সাথে স্থূলতা বা ডায়াবেটিসের মতো বিপাকীয় ঝুঁকি থাকে [১]। সঠিক সময়ে খাদ্যাভ্যাস পরিবর্তন না করলে এই সাধারণ চর্বি ধীরে ধীরে লিভারে তীব্র প্রদাহ ও ক্ষতের সৃষ্টি করে (MASH), যা লিভারের কোষ ধ্বংস করে লিভার সিরোসিস এবং এমনকি লিভার ক্যান্সারের দিকে ঠেলে দিতে পারে [১, ২]। সঠিক পুষ্টি থেরাপির মাধ্যমে এই মারাত্মক রোগ প্রতিরোধ করাই আধুনিক রেনাল ও হেপাটোলজি ডায়েটেটিক্সের মূল লক্ষ্য [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Molecular Mechanism of Fructose Toxicity in the Liver', '২. লিভারে ফ্রুক্টোজ বিষক্রিয়ার আণবিক শারীরবৃত্ত'),
          paragraphs: [
            l(
              'In modern industrial diets, the single most aggressive nutritional driver of hepatic steatosis is excessive consumption of free dietary fructose, predominantly delivered via high-fructose corn syrup (HFCS) and sucrose in soft drinks, commercial confectioneries, and ultra-processed foods [1, 2]. While dietary glucose and fructose share the identical chemical formula (C6H12O6), their intracellular metabolic fates in the human liver could not be more radically different [2].',
              'আধুনিক নগরজীবনে ফ্যাটি লিভারের সবচেয়ে বড় ঘাতক হলো খাবারে অতিরিক্ত প্রক্রিয়াজাত ফ্রুক্টোজ গ্রহণ, যা মূলত কোমল পানীয়, মিষ্টি জুস এবং প্যাকেটজাত খাবারে মেশানো কৃত্রিম কর্ন সিরাপ (HFCS) থেকে আসে [১, ২]। রাসায়নিক সংকেত একই হলেও (C6H12O6), মানবদেহের লিভারে গ্লুকোজ এবং ফ্রুক্টোজের বিপাকীয় আচরণ সম্পূর্ণ ভিন্ন এবং বিপরীতমুখী [২]।'
            ),
            l(
              'When dietary glucose enters hepatocytes via insulin-independent GLUT2 transporters, its phosphorylation is catalyzed by glucokinase, producing glucose-6-phosphate [2]. The subsequent commitment step of glycolysis is governed by Phosphofructokinase-1 (PFK-1) [2]. Phosphofructokinase-1 is an extraordinarily sensitive allosteric sensor: when cellular energy reserves are high, elevated concentrations of ATP and cytosolic citrate allosterically bind and shut down PFK-1 activity, halting further glucose breakdown and preventing unnecessary lipid synthesis [2].',
              'খাবার থেকে গ্লুকোজ যখন লিভারের কোষে ঢোকে, তখন পিএফকে-১ (PFK-1) নামক একটি বিশেষ এনজাইম পাহারাদারের মতো কাজ করে [২]। কোষে যখন পর্যাপ্ত শক্তি (ATP) থাকে, তখন এই এনজাইমটি স্বয়ংক্রিয়ভাবে গ্লুকোজ ভাঙার গতি কমিয়ে দেয় যাতে শরীরে কোনো অপ্রয়োজনীয় চর্বি তৈরি হতে না পারে [২]। এই নিখুঁত নিয়ন্ত্রণ ব্যবস্থা থাকার কারণে গ্লুকোজ সহজে লিভারে অনিয়ন্ত্রিত চর্বি তৈরি করতে পারে না [২]।'
            ),
            l(
              'In stark contrast, dietary fructose absorbed into portal blood enters hepatocytes and encounters the enzyme Ketohexokinase (KHK), specifically the high-affinity isoform Ketohexokinase-C [2]. Ketohexokinase-C possesses no allosteric feedback inhibition binding sites whatsoever [2]. It does not care how high cellular ATP or citrate levels are; it rapidly and irreversibly phosphorylates fructose into fructose-1-phosphate, consuming equimolar quantities of intracellular ATP [2]. Fructose-1-phosphate is then directly split by aldolase B into dihydroxyacetone phosphate (DHAP) and glyceraldehyde, completely bypassing the PFK-1 regulatory gatekeeper [2].',
              'কিন্তু ফ্রুক্টোজের ক্ষেত্রে কোনো নিয়ন্ত্রণ পাহারাদার নেই [২]। লিভারে ঢোকার সাথে সাথে কিটোহেক্সোকাইনেজ-সি (KHK-C) নামক একটি বেপরোয়া এনজাইম ফ্রুক্টোজকে সরাসরি ফসফেটে রূপান্তর করে ফেলে [২]। কোষে কত শক্তি জমে আছে তা এই এনজাইম তোয়াক্কা করে না; এটি কোষের প্রচুর এটিপি (ATP) খরচ করে ফ্রুক্টোজ ভেঙে সরাসরি চর্বির কাঁচামাল তৈরি করে ফেলে এবং পিএফকে-১ পাহারাদারকে সম্পূর্ণ ফাঁকি দিয়ে বেরিয়ে যায় [২]।'
            ),
            l(
              'This unchecked bypass floods the lower glycolytic pathway with an immense excess of three-carbon triose phosphate intermediates [1, 2]. Glyceraldehyde is converted to glyceraldehyde-3-phosphate, which pours into pyruvate synthesis and floods hepatic mitochondria with acetyl-CoA [2]. Concurrently, massive quantities of glycerol-3-phosphate are generated to serve as the glycerol backbone for triglyceride synthesis [2]. The liver is left with no metabolic choice: it is biochemically forced to convert this tidal wave of triose carbons into fatty acids via accelerated De Novo Lipogenesis (DNL), driving rapid intracellular fat accumulation and atherogenic dyslipidemia [1, 2].',
              'এই অবাধ রূপান্তরের ফলে লিভারের কোষে চর্বি তৈরির কাঁচামালের এক ভয়াবহ বন্যা বয়ে যায় [১, ২]। অতিরিক্ত উপাদান লিভারের মাইটোকন্ড্রিয়াকে ভেসে দিয়ে বিপুল পরিমাণ অ্যাসিটাইল-কোএ তৈরি করে যা চর্বির প্রধান উপাদান [২]। লিভার তখন বেঁচে থাকার তাগিদে বাধ্য হয়ে এই অতিরিক্ত উপাদানগুলোকে ক্ষতিকর ফ্যাটি অ্যাসিড ও ট্রাইগ্লিসারাইডে রূপান্তর করে (De Novo Lipogenesis) [২]। ফলে লিভারের ভেতরে কোটি কোটি চর্বির কণা জমতে শুরু করে এবং ফ্যাটি লিভারের সূত্রপাত ঘটে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The Gut-Liver Axis: FXR, TGR5 & Microbial Bile Acid Signaling', '৩. অন্ত্র-যকৃত অক্ষ: এফএক্সআর, টিজিআর৫ ও পিত্তরস হরমোন সংকেত'),
          paragraphs: [
            l(
              'The communication network between the gastrointestinal tract and the hepatobiliary system—the gut-liver axis—is orchestrated by bile acids acting not merely as physical detergents, but as powerful endocrine signaling molecules [1, 3]. Primary bile acids synthesized in hepatocytes (cholic acid, chenodeoxycholic acid) travel through the biliary tree into the intestinal lumen, where resident colonic bacteria biotransform them into secondary bile acids (deoxycholic acid, lithocholic acid) via bile salt hydrolase (BSH) and 7-alpha-dehydroxylation [3].',
              'পরিপাকনালী এবং যকৃতের মধ্যকার যোগাযোগ ব্যবস্থা কেবল হজম প্রক্রিয়ার মধ্যেই সীমাবদ্ধ নয়; এটি মূলত পিত্তরসের মাধ্যমে পরিচালিত এক জটিল হরমোনীয় সংকেত অক্ষ [১, ৩]। লিভার থেকে তৈরি হওয়া পিত্তরস অন্ত্রে প্রবেশ করার পর কোলনের উপকারী ব্যাকটেরিয়ারা এদের রূপান্তর ঘটিয়ে বিশেষ সেকেন্ডারি পিত্তরসে পরিণত করে [৩]। এই রূপান্তরিত পিত্তরস মানবদেহের বিপাকীয় ক্রিয়া নিয়ন্ত্রণে অত্যন্ত গুরুত্বপূর্ণ বার্তা বহন করে [৩]।'
            ),
            l(
              'Throughout this enterohepatic journey, bile acids ligate two major metabolic receptors: the nuclear hormone receptor Farnesoid X Receptor (FXR) and the membrane-bound G-protein coupled receptor Takeda G-protein Receptor 5 (TGR5) [1, 3]. Chenodeoxycholic acid (CDCA) is the most potent endogenous ligand for FXR, whereas secondary bile acids preferentially ligate TGR5 on intestinal enteroendocrine L-cells and gallbladder epithelial cells [3].',
              'অন্ত্র দিয়ে চলার পথে এই পিত্তরস দুটি প্রধান রিসেপ্টরের সাথে যুক্ত হয়: কোষের ভেতরের এফএক্সআর (FXR) রিসেপ্টর এবং কোষঝিল্লির টিজিআর৫ (TGR5) রিসেপ্টর [১, ৩]। এই রিসেপ্টরগুলোর সাথে যুক্ত হয়ে পিত্তরস অন্ত্রের বিশেষ কোষগুলোকে সংকেত পাঠায় এবং সারা শরীরের মেটাবলিজম ঠিক রাখতে সাহায্য করে [৩]।'
            ),
            l(
              'In the terminal ileum, bile acid activation of enterocyte FXR stimulates transcription and basolateral secretion of Fibroblast Growth Factor 19 (FGF19) [1, 3]. Secreted FGF19 enters the mesenteric circulation and travels through the portal vein directly to the liver [3]. In hepatocytes, FGF19 binds to a cell-surface binary receptor complex consisting of Fibroblast Growth Factor Receptor 4 (FGFR4) and the co-receptor beta-Klotho [3]. This activates intracellular signaling cascades that downregulate Cholesterol 7-alpha-hydroxylase (CYP7A1)—the rate-limiting enzyme of bile acid synthesis—while simultaneously suppressing hepatic lipogenic transcription factors and promoting glycogen synthesis [1, 3].',
              'অন্ত্রের শেষ প্রান্তে পিত্তরস যখন FXR রিসেপ্টরকে জাগিয়ে তোলে, তখন অন্ত্রের কোষগুলো রক্তে এফজিএফ১৯ (FGF19) নামক এক অত্যন্ত উপকারী হরমোন ক্ষরণ করে [১, ৩]। এই হরমোন রক্তস্রোতে ভেসে সরাসরি লিভারে আসে এবং লিভারের দরজায় সংকেত পাঠায় [৩]। হরমোনটির সংকেত পেয়ে লিভার অবিলম্বে নতুন চর্বি তৈরি বন্ধ করে দেয়, চর্বি পোড়ানোর গতি বাড়ায় এবং রক্তের সুগারকে নিরাপদে গ্লাইকোজেনে রূপান্তর করে জমা রাখে [১, ৩]।'
            ),
            l(
              'Simultaneously, bile acid ligation of TGR5 on enteroendocrine L-cells stimulates adenylyl cyclase, raising intracellular cAMP to trigger the exocytosis of Glucagon-Like Peptide-1 (GLP-1) [3]. Systemic GLP-1 enhances glucose-dependent pancreatic insulin secretion, delays gastric emptying, and centrally signals hypothalamic satiety nuclei to reduce appetite [3]. In obesity and metabolic dysfunction, altered gut microbiome taxonomy impairs bile acid biotransformation, suppressing FXR-FGF19 signaling and precipitating unchecked hepatic lipogenesis [1, 3]. Restoring gut microbiome diversity through high-fiber nutrition and polyphenol intake reactivates this protective axis to reverse steatohepatitis [1].',
              'একই সাথে পিত্তরস অন্ত্রের কোষ থেকে প্রাকৃতিক জিএলপি-১ (GLP-1) হরমোনের নিঃসরণ বাড়িয়ে দেয়, যা অগ্ন্যাশয় থেকে ইনসুলিন ছাড়তে সাহায্য করে এবং মস্তিষ্কে বার্তা পাঠিয়ে অতিরিক্ত ক্ষুধা দূর করে [৩]। কিন্তু মানুষ যখন অতিরিক্ত জাঙ্ক ফুড খায়, তখন অন্ত্রের জীবাণুরা নষ্ট হয়ে যায় এবং এই চমৎকার প্রতিরক্ষা ব্যবস্থা অকেজো হয়ে লিভারে চর্বি জমার পথ তৈরি হয় [১, ৩]। শাকসবজি ও ফলমূলের পুষ্টি অন্ত্রের জীবাণুকে ভালো রেখে এই প্রাকৃতিক রক্ষা কবচকে পুনরায় সচল করে তোলে [১]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Inflammatory Bowel Disease: Mucosal Breakdown & Exclusive Enteral Nutrition', '৪. প্রদাহজনক অন্ত্র রোগ (IBD): দেয়াল ক্ষয় ও এন্টারাল পুষ্টি (EEN)'),
          paragraphs: [
            l(
              'Inflammatory Bowel Disease (IBD), encompassing Crohn disease (CD) and Ulcerative Colitis (UC), represents a severe, chronic immune-mediated inflammatory disorder of the gastrointestinal tract [3, 4]. While ulcerative colitis is limited to continuous mucosal inflammation of the colon, Crohn disease causes patchy, transmural inflammation that can strike any segment of the alimentary tract from mouth to anus, characteristically targeting the terminal ileum and ascending colon [3, 4].',
              'প্রদাহজনক অন্ত্র রোগ বা ইনফ্ল্যামেটরি বাওয়েল ডিজিজ (IBD)—যার মধ্যে ক্রোনস ডিজিজ এবং আলসারেটিভ কোলাইটিস অন্তর্ভুক্ত—হলো পরিপাকনালীর এক মারাত্মক দীর্ঘস্থায়ী প্রদাহজনিত রোগ [৩, ৪]। আলসারেটিভ কোলাইটিস যেখানে শুধু বৃহদান্ত্রের ভেতরের পর্দায় সীমাবদ্ধ থাকে, সেখানে ক্রোনস ডিজিজ অন্ত্রের সমস্ত স্তর ভেদ করে গভীর ক্ষত ও আলসার সৃষ্টি করে এবং মুখ থেকে মলদ্বার পর্যন্ত যে কোনো স্থানে আঘাত হানতে পারে [৩, ৪]।'
            ),
            l(
              'The pathogenesis of Crohn disease involves a failure of mucosal barrier integrity in genetically susceptible individuals, combined with an aberrant immune reaction against luminal commensal microflora [3, 4]. Transmural inflammation leads to deep aphthous ulcers, fistulas, fibrotic strictures, and profound malabsorption [3]. Systemic inflammation drives severe protein-energy wasting, anemia, and micronutrient deficiencies (iron, vitamin B12, vitamin D, zinc) [3]. Historically, active flares were managed exclusively with high-dose systemic corticosteroids; however, corticosteroids carry catastrophic pediatric toxicities, including growth failure, osteopenia, and immune suppression, while failing to induce genuine endoscopic mucosal healing [3, 4].',
              'ক্রোনস রোগে অন্ত্রের প্রতিরক্ষামূলক প্রাচীর ফুটো হয়ে যায় এবং ক্ষতিকর শ্বেত রক্তকণিকা অন্ত্রের নিজস্ব টিস্যুকে নির্মমভাবে আক্রমণ করতে থাকে [৩, ৪]। এর ফলে অন্ত্রের দেয়ালে গভীর ঘা ও আলসার হয় এবং পুষ্টি শোষণ সম্পূর্ণ বন্ধ হয়ে যায় [৩]। অতীতে এই রোগের একমাত্র চিকিৎসা ছিল কড়া স্টেরয়েড ওষুধ; কিন্তু স্টেরয়েড শিশুদের স্বাভাবিক বৃদ্ধি বন্ধ করে দেয়, হাড় নরম করে ফেলে এবং রোগের গভীর ক্ষত সারাতে সম্পূর্ণ ব্যর্থ হয় [৩, ৪]।'
            ),
            l(
              'To overcome these therapeutic limitations, clinical pediatric and adult gastroenterology has established Exclusive Enteral Nutrition (EEN) as the premier first-line induction therapy for active luminal Crohn disease [3, 4]. EEN mandates the complete exclusion of all normal solid foods for a duration of 6 to 8 weeks, replacing 100% of the patient daily caloric, macronutrient, and micronutrient requirements with a standardized liquid formula (polymeric, oligomeric, or elemental) [3, 4].',
              'এই বিপদ এড়াতে আধুনিক শিশু ও প্রাপ্তবয়স্ক চিকিৎসাবিজ্ঞানে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) নামক এক অভাবনীয় পুষ্টি চিকিৎসা চালু হয়েছে যা ক্রোনস রোগে স্টেরয়েডের চেয়েও বেশি কার্যকর [৩, ৪]। এই পদ্ধতিতে রোগীকে টানা ৬ থেকে ৮ সপ্তাহ সাধারণ সব খাবার পুরোপুরি বন্ধ রাখতে বলা হয় এবং ১০০ ভাগ পুষ্টি সরবরাহ করা হয় চিকিৎসকের নির্ধারিত বিশেষ তরল ফর্মুলার মাধ্যমে [৩, ৪]।'
            ),
            l(
              'Remarkably, randomized controlled clinical trials prove that EEN achieves clinical remission rates of 80% to 85% in active Crohn disease, equivalent to systemic corticosteroids, while achieving dramatically superior endoscopic and histological mucosal healing (>70% vs <30% for steroids) [3, 4]. EEN eliminates dietary food additives (emulsifiers, carrageenan, maltodextrin) that erode mucosal mucus, suppresses mucosal NF-kB and pro-inflammatory cytokine expression (TNF-alpha, IL-1beta), upregulates transforming growth factor-beta (TGF-beta), and alters microbial metabolomics to permit rapid epithelial restitution [3, 4].',
              'আন্তর্জাতিক গবেষণায় প্রমাণিত হয়েছে যে এই বিশেষ তরল পথ্য ক্রোনস রোগের ৮০ থেকে ৮৫ শতাংশ রোগীকে সম্পূর্ণ সুস্থ করে তোলে [৩, ৪]। যেখানে স্টেরয়েড ওষুধ মাত্র ৩০ শতাংশ ক্ষেত্রে অন্ত্রের আলসার সারাতে পারে, সেখানে এই পুষ্টি চিকিৎসা ৭০ শতাংশেরও বেশি ক্ষেত্রে অন্ত্রের আলসার ও ঘা পুরোপুরি সারিয়ে অন্ত্রের দেয়ালকে নতুন শিশুর মতো নিখুঁত করে তোলে [৩, ৪]। এটি খাবারের ক্ষতিকর প্রিজারভেটিভ দূর করে এবং অন্ত্রের রোগপ্রতিরোধ ক্ষমতা ফিরিয়ে এনে রোগীকে সম্পূর্ণ স্বাভাবিক জীবনে ফিরিয়ে আনে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Irritable Bowel Syndrome & The Three-Phase Low-FODMAP Protocol', '৫. ইরিটেবল বাওয়েল সিন্ড্রোম (IBS) ও ৩-ধাপের লো-ফোডম্যাপ ডায়েট'),
          paragraphs: [
            l(
              'Irritable Bowel Syndrome (IBS) is the most common disorder of gut-brain interaction (DGBI) worldwide, affecting 5% to 10% of the global population [5, 6]. Diagnosed clinically via the Rome IV criteria, IBS is characterized by recurrent abdominal pain associated with defecation or a change in stool frequency or form, manifesting in diarrhea-predominant (IBS-D), constipation-predominant (IBS-C), or mixed (IBS-M) subtypes [5]. Unlike IBD, IBS involves no visible mucosal ulcerations; instead, its pathophysiological hallmarks include visceral hypersensitivity, abnormal gut motility, low-grade mucosal immune activation, and colonic luminal distension [5, 6].',
              'ইরিটেবল বাওয়েল সিন্ড্রোম বা আইবিএস (IBS) হলো বিশ্বজুড়ে সবচেয়ে সাধারণ পরিপাকনালীর সমস্যা, যাতে বিশ্বের প্রায় ১০ শতাংশ মানুষ কষ্ট পান [৫, ৬]। চিকিৎসাবিজ্ঞানে রোম-৪ মানদণ্ড অনুযায়ী পেটে ব্যথা, গ্যাস, পেট ফাঁপা এবং ডায়রিয়া বা কোষ্ঠকাঠিন্যের সমস্যা থাকলে তাকে আইবিএস বলা হয় [৫]। এটি ক্রোনস রোগের মতো অন্ত্রে কোনো আলসার তৈরি করে না, বরং অন্ত্রের স্নায়ু অতিরিক্ত সংবেদনশীল হয়ে ওঠে এবং অন্ত্রের পেশির সংকোচন অনিয়মিত হয়ে তীব্র অস্বস্তির সৃষ্টি করে [৫, ৬]।'
            ),
            l(
              'The primary dietary driver of IBS symptoms is the rapid luminal fermentation and osmotic action of FODMAPs: Fermentable Oligosaccharides, Disaccharides, Monosaccharides and Polyols [5, 6]. FODMAPs encompass small-chain carbohydrates that are poorly absorbed in the human small intestine: fructans and galacto-oligosaccharides (GOS), lactose, free fructose in excess of glucose, and sugar alcohols (sorbitol, mannitol) [5, 6]. Because of their small molecular size, unabsorbed FODMAPs exert an osmotic draw, pulling excessive water into the small bowel lumen and accelerating transit toward the colon [5, 6].',
              'আইবিএসের এই কষ্টের মূল কারণ হলো খাবারে থাকা বিশেষ কিছু সহজে হজম না হওয়া ছোট শর্করা, যাদের সংক্ষেপে ফোডম্যাপ (FODMAP) বলা হয় [৫, ৬]। গম, পেঁয়াজ, রসুন, দুধ, ডাল এবং কিছু ফলে থাকা এই শর্করাগুলো ক্ষুদ্রান্ত্রে হজম হতে পারে না [৫, ৬]। এরা অন্ত্রের ভেতরে প্রচুর পানি টেনে নিয়ে আসে যার ফলে মল তরল হয়ে পাতলা পায়খানার বেগ তৈরি হয় [৫, ৬]।'
            ),
            l(
              'Upon arriving in the colon, these unabsorbed carbohydrates are rapidly attacked by billions of anaerobic colonic bacteria, undergoing fast fermentation into hydrogen, methane, and carbon dioxide gases [5, 6]. In healthy individuals, luminal gas causes no symptoms; however, in IBS patients possessing visceral hypersensitivity, the resulting mechanical stretch of the colonic wall stimulates hyperexcitable enteric sensory afferents, triggering severe cramping, visible bloating, and painful spasm [5, 6]. Developed by Peter Gibson and Susan Shepherd at Monash University, the Low-FODMAP diet was engineered specifically to silence this luminal distension cascade [5, 6].',
              'এরপর এই অপাচ্য শর্করাগুলো যখন বৃহদান্ত্রে এসে পৌঁছায়, তখন সেখানকার ব্যাকটেরিয়ারা এদের নিমেষের মধ্যে পচিয়ে প্রচুর হাইড্রোজেন ও মিথেন গ্যাস তৈরি করে [৫, ৬]। সাধারণ মানুষের পেটে এই গ্যাস কোনো সমস্যা না করলেও আইবিএস রোগীদের অতিরিক্ত সংবেদনশীল স্নায়ু এই গ্যাসে ফুলে ওঠা সহ্য করতে পারে না; ফলে তারা তীব্র মোচড় দিয়ে পেট ব্যথা ও বুক ধড়ফড়ানির মতো যন্ত্রণায় ভোগেন [৫, ৬]। মোনাশ বিশ্ববিদ্যালয়ের বিজ্ঞানীরা এই যন্ত্রণা থেকে মুক্তি দিতেই লো-ফোডম্যাপ ডায়েট আবিষ্কার করেন [৫, ৬]।'
            ),
            l(
              'Crucially, the Low-FODMAP diet is not an open-ended, permanent lifestyle restriction, but a structured clinical protocol comprising three distinct, sequential phases [5, 6]. Phase 1 (Restriction) strictly eliminates all high-FODMAP foods for 2 to 6 weeks to establish symptom control [5]. Phase 2 (Reintroduction) systematically challenges individual FODMAP subgroups one by one over 6 to 8 weeks to identify specific personal food triggers while establishing tolerance thresholds [5, 6]. Phase 3 (Personalization) reintroduces all tolerated prebiotic foods back into the daily diet, restricting only confirmed individual symptom triggers [5, 6]. This ensures long-term symptom liberation while preserving prebiotic fiber intake and protecting colonic microbiome diversity [5, 6].',
              'মনে রাখতে হবে যে লো-ফোডম্যাপ ডায়েট কোনো আজীবন না খেয়ে থাকার নিষ্ঠুর নিয়ম নয়; এটি তিনটি অত্যন্ত সুনির্দিষ্ট ধাপের একটি বৈজ্ঞানিক চিকিৎসা [৫, ৬]। প্রথম ধাপে (২ থেকে ৬ সপ্তাহ) সমস্ত সমস্যা সৃষ্টিকারী খাবার বাদ দিয়ে পেটের ব্যথা ও গ্যাস দূর করা হয় [৫]। দ্বিতীয় ধাপে (৬ থেকে ৮ সপ্তাহ) একটি একটি করে খাবার পুনরায় পরীক্ষা করে দেখা হয় কোন খাবারে সমস্যা হচ্ছে আর কোনটা শরীর সহ্য করতে পারছে [৫, ৬]। তৃতীয় ধাপে যেসব খাবারে সমস্যা নেই সেগুলো পুনরায় খাওয়া শুরু করা হয় এবং কেবল নির্দিষ্ট ক্ষতিকর খাবার বাদ দেওয়া হয় [৫, ৬]। এর ফলে রোগী আজীবন গ্যাস ও পেটের ব্যথা ছাড়া স্বাভাবিক ও সুস্বাদু খাবার উপভোগ করতে পারেন [৫, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'Metabolic dysfunction-associated steatotic liver disease (MASLD) originates when dietary fructose floods hepatic ketohexokinase-C, bypassing the rate-limiting phosphofructokinase-1 checkpoint and consuming intracellular ATP [1, 2]. The resulting tsunami of triose phosphates activates ChREBP and SREBP-1c, accelerating hepatic de novo lipogenesis and packing intrahepatic triglycerides [1, 2]. Targeted elimination of industrial high-fructose beverages combined with 7% to 10% weight loss via a Mediterranean dietary pattern halts steatohepatitis progression [1].',
              'কোমল পানীয়ের ফ্রুক্টোজ লিভারের স্বাভাবিক নিয়ন্ত্রণ ফাঁকি দিয়ে সরাসরি কিটোহেক্সোকাইনেজ এনজাইমের মাধ্যমে চর্বির কাঁচামালে রূপ নেয়, যা লিভারের চর্বি তৈরির সুইচ ChREBP অন করে ফ্যাটি লিভার (MASLD) সৃষ্টি করে [১, ২]। এই ক্ষতিকর পানীয় বর্জন এবং ভূমধ্যসাগরীয় খাদ্যাভ্যাসের মাধ্যমে শরীরের ওজন ৭-১০% কমালে ফ্যাটি লিভার সম্পূর্ণ ভালো হয়ে যায় [১]।'
            ),
            l(
              'The gut-liver axis coordinates bile acid endocrine signaling through nuclear FXR and membrane TGR5 receptors [1, 3]. Enteric FXR activation stimulates ileal FGF19 secretion, which travels to hepatic FGFR4/beta-Klotho complexes to shut down bile acid synthesis and suppress hepatic lipogenesis while TGR5 enhances GLP-1 release [1, 3]. Gut dysbiosis uncouples this signaling, whereas dietary prebiotic fiber and polyphenols restore protective FXR-FGF19 flux [1, 3].',
              'অন্ত্র ও লিভারের মধ্যে পিত্তরস এক শক্তিশালী সংকেত হরমোন হিসেবে কাজ করে যা অন্ত্র থেকে এফজিএফ১৯ (FGF19) হরমোন নিঃসরণ করিয়ে লিভারে চর্বি জমা বন্ধ করে এবং জিএলপি-১ হরমোন বাড়িয়ে ডায়াবেটিস ও স্থূলতা নিয়ন্ত্রণ করে [১, ৩]। পুষ্টিকর আঁশজাতীয় খাবার অন্ত্রের জীবাণুকে সুস্থ রেখে এই প্রাকৃতিক সুরক্ষা বজায় রাখে [১, ৩]।'
            ),
            l(
              'Exclusive Enteral Nutrition (EEN)—providing 100% of caloric needs via a liquid formula for 6 to 8 weeks with total solid food exclusion—induces clinical remission (80–85%) and endoscopic mucosal healing (>70%) in active Crohn disease [3, 4]. EEN eliminates mucosal-disrupting food additives, downregulates enterocyte NF-kB, suppresses inflammatory cytokines (TNF-alpha, IL-1beta), and restores mucosal tight junction integrity without the toxicities of systemic corticosteroids [3, 4].',
              'ক্রোনস রোগে ৬-৮ সপ্তাহ সাধারণ সব খাবার বন্ধ রেখে বিশেষায়িত তরল পুষ্টি (EEN) গ্রহণ করলে ৮০% ক্ষেত্রে অন্ত্রের আলসার ও গভীর ক্ষত শুকিয়ে যায় [৩, ৪]। এটি কোনো ক্ষতিকর স্টেরয়েড ছাড়াই প্রদাহ সৃষ্টিকারী সাইটোকাইন কমিয়ে অন্ত্রের দেয়ালকে শিশুর মতো সুস্থ ও স্বাভাবিক করে তোলে [৩, ৪]।'
            ),
            l(
              'In irritable bowel syndrome (IBS), poorly absorbed FODMAP carbohydrates exert small-bowel osmotic effects and undergo rapid colonic bacterial gas fermentation, triggering visceral pain in hypersensitive individuals [5, 6]. The evidence-based three-phase Low-FODMAP protocol (Restriction -> Reintroduction -> Personalization) establishes rapid symptom control while systematically reintroducing tolerated prebiotic fibers, preventing long-term colonic dysbiosis and bifidobacterial depletion [5, 6].',
              'আইবিএস (IBS) রোগে পেঁয়াজ, রসুন ও দুধের মতো অপাচ্য শর্করা অন্ত্রে গ্যাস ও ব্যথা সৃষ্টি করে [৫, ৬]। তিন-ধাপের বৈজ্ঞানিক লো-ফোডম্যাপ ডায়েট (নিয়ন্ত্রণ -> পুনঃপ্রবর্তন -> ব্যক্তিগত তালিকা) অনুসরণের মাধ্যমে পেটের সমস্ত অস্বস্তি দূর করা সম্ভব এবং সহনশীল খাবারগুলো পুনরায় চালু করে অন্ত্রের বন্ধু ব্যাকটেরিয়াকে চিরকাল সুস্থ রাখা যায় [৫, ৬]।'
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
          heading: l('1. Hepatic Fructose Metabolism vs Glycolytic Checkpoints', '১. লিভারের ফ্রুক্টোজ বিপাক বনাম গ্লাইকোলাইসিসের নিয়ন্ত্রণ ব্যবস্থা'),
          paragraphs: [
            l(
              'The distinct biochemical partitioning of dietary hexoses within the human splanchnic bed reveals the precise enzymatic basis of fructose-induced lipotoxicity [1, 2]. Dietary glucose and fructose are transported across the intestinal apical brush border via distinct solute carriers: glucose via secondary active transport by SGLT1 (SLC5A1) and fructose via facilitated diffusion by GLUT5 (SLC2A5) [2]. While peripheral tissues readily clear glucose, GLUT5 is absent in skeletal muscle and cardiac myocytes; consequently, over 70% of portal fructose is cleared on first pass by hepatic parenchymal cells via the high-capacity, low-affinity bidirectional uniporter GLUT2 (SLC2A1) [1, 2].',
              'মানুষের পরিপাকনালীতে বিভিন্ন শর্করার শোষণের ভিন্নতাই হলো ফ্রুক্টোজের বিষক্রিয়া তৈরির মূল জৈব-রাসায়নিক রহস্য [১, ২]। খাবার থেকে গ্লুকোজ ও ফ্রুক্টোজ আলাদা চ্যানেলের মাধ্যমে অন্ত্রে শোষিত হয় [২]। সারা শরীরের মাংসপেশি বা হার্ট ফ্রুক্টোজ গ্রহণ করতে পারে না কারণ তাদের কোষে ফ্রুক্টোজের দরজা নেই; ফলে খাবারের সমস্ত ফ্রুক্টোজের ৭০ শতাংশেরও বেশি সরাসরি পোর্টাল শিরার মাধ্যমে লিভার কোষে গিয়ে জমা হয় [১, ২]।'
            ),
            l(
              'Inside the hepatocyte, the fate of glucose is strictly governed by the allosteric regulation of Phosphofructokinase-1 (PFK-1), which converts fructose-6-phosphate to fructose-1,6-bisphosphate [2]. Phosphofructokinase-1 is tonically inhibited by intracellular ATP, phosphoenolpyruvate, and cytosolic citrate [2]. When cellular energy state is abundant, PFK-1 shuts down, redirecting upstream glucose-6-phosphate toward glycogen synthesis via UDP-glucose pyrophosphorylase and glycogen synthase, thereby preventing futile and destructive lipogenic overflow [2].',
              'লিভারের ভেতরে গ্লুকোজ যখন ঢোকে, তখন পিএফকে-১ (PFK-1) এনজাইমটি অত্যন্ত সতর্ক প্রহরীর মতো কাজ করে [২]। কোষে যখন পর্যাপ্ত শক্তি (ATP) ও সাইট্রেট থাকে, তখন এই এনজাইমটি তাৎক্ষণিকভাবে গ্লুকোজ ভাঙার প্রক্রিয়া বন্ধ করে দেয় এবং বাড়তি গ্লুকোজকে চর্বি বানানোর বদলে লিভারে নিরাপদ গ্লাইকোজেন হিসেবে জমা রাখতে নির্দেশ দেয় [২]। এর ফলে সুস্থ শরীরে গ্লুকোজ থেকে সহজে ক্ষতিকর চর্বি তৈরি হতে পারে না [২]।'
            ),
            l(
              'Conversely, hepatic fructose entry bypasses this entire energetic sensing architecture [2]. Fructose is phosphorylated exclusively at the 1-position by Ketohexokinase (KHK; fructokinase) to yield fructose-1-phosphate (F-1-P) [2]. In human liver, alternative splicing of the *KHK* gene yields the high-affinity KHK-C isoform, which exhibits an extraordinarily low Km for fructose (~0.8 mM) and lacks any allosteric inhibition by ATP, citrate, or downstream metabolites [2]. Consequently, KHK-C rapidly and uncontrollably phosphorylates incoming fructose, consuming intracellular ATP at rates exceeding the resynthesis capacity of oxidative phosphorylation [2].',
              'কিন্তু ফ্রুক্টোজের ক্ষেত্রে এই নিরাপত্তা ব্যবস্থা সম্পূর্ণ ব্যর্থ [২]। ফ্রুক্টোজ লিভারে ঢুকলেই কিটোহেক্সোকাইনেজ (KHK-C) এনজাইম কোনো নিয়ন্ত্রণ ছাড়াই একে ফসফেটে রূপান্তর করে ফেলে [২]। এই এনজাইমটির কোনো নিয়ন্ত্রণ সুইচ নেই; কোষে হাজার শক্তি জমা থাকলেও এটি গায়ের জোরে প্রচুর এটিপি শক্তি খরচ করে অবিরাম ফ্রুক্টোজ ভেঙে কোষের সমস্ত শক্তি ভাণ্ডার শূন্য করে ফেলে [২]।'
            ),
            l(
              'The rapid consumption of ATP by KHK-C precipitates transient intracellular phosphate depletion and activates AMP Deaminase-1 (AMPD1) [2]. Activated AMPD1 rapidly degrades AMP into inosine monophosphate (IMP), which enters the purine catabolic cascade via xanthine oxidase, generating massive quantities of intracellular and systemic Uric Acid [1, 2]. Intracellular uric acid directly induces mitochondrial oxidative stress, impairs enoyl-CoA hydratase to inhibit mitochondrial fatty acid beta-oxidation, and translocates to the nucleus to stimulate lipogenic gene transcription, creating an inescapable metabolic trap that accelerates hepatic steatosis [1, 2].',
              'এই দ্রুত এটিপি শক্তি খরচের কারণে লিভারের কোষে ফসফেটের তীব্র সংকট তৈরি হয় এবং কোষের শক্তি অণু ভেঙে প্রচুর ক্ষতিকর ইউরিক অ্যাসিড (Uric Acid) উৎপন্ন হয় [১, ২]। এই অতিরিক্ত ইউরিক অ্যাসিড লিভারের মাইটোকন্ড্রিয়াকে পুড়িয়ে ধ্বংস করে দেয়, লিভারের চর্বি পোড়ানোর গতি পুরোপুরি থামিয়ে দেয় এবং লিভারে নতুন চর্বি জমার গতি শতগুণ বাড়িয়ে ফ্যাটি লিভারকে জটিল রূপ দান করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Transcriptional Lipogenesis: ChREBP, SREBP-1c & Hepatic Steatosis', '২. চর্বি তৈরির জিনতত্ত্ব: ChREBP, SREBP-1c ও ফ্যাটি লিভারের বিস্তার'),
          paragraphs: [
            l(
              'The downstream conversion of fructose-derived triose phosphates into structural and storage lipids is executed by a coordinated transcriptional cascade governed by Carbohydrate Response Element-Binding Protein (ChREBP) and Sterol Regulatory Element-Binding Protein-1c (SREBP-1c) [1, 2]. While SREBP-1c is conventionally stimulated by hyperinsulinemia via the classical PI3K/Akt/mTORC1 pathway, ChREBP is uniquely and potently transactivated by fructose metabolites independently of insulin signaling [2].',
              'ফ্রুক্টোজ থেকে লিভারে চর্বি তৈরির মূল কাজটি সম্পন্ন হয় দুটি প্রধান জিন নিয়ন্ত্রক প্রোটিনের মাধ্যমে: ChREBP এবং SREBP-1c [১, ২]। সাধারণ চর্বি তৈরির সংকেত যেখানে ইনসুলিনের ওপর নির্ভরশীল, সেখানে ফ্রুক্টোজ কোনো ইনসুলিন ছাড়াই সরাসরি ChREBP মাস্টার সুইচটিকে অন করে দিয়ে চর্বি তৈরির কারখানা পুরোদমে চালু করে দিতে পারে [২]।'
            ),
            l(
              'Fructose metabolism generates high concentrations of xylulose-5-phosphate (via the non-oxidative pentose phosphate pathway) and fructose-2,6-bisphosphate [2]. Xylulose-5-phosphate directly activates Protein Phosphatase 2A (PP2A), which dephosphorylates cytosolic ChREBP at Ser196 and Thr666 [2]. Dephosphorylated ChREBP translocates to the nucleus, heterodimerizes with Max-like protein X (MLX), and binds with high affinity to conserved ChoRE consensus motifs (tandem E-boxes separated by 5 base pairs) within the promoters of all rate-limiting lipogenic genes [2].',
              'ফ্রুক্টোজ ভেঙে কোষে বিশেষ কিছু সংকেত অণু তৈরি করে যা ChREBP প্রোটিনের গা থেকে ফসফেট সরিয়ে একে অত্যন্ত সক্রিয় করে তোলে [২]। সক্রিয় ChREBP সাথে সাথে কোষের নিউক্লিয়াসে গিয়ে প্রবেশ করে এবং লিভারের চর্বি তৈরির সমস্ত গুরুত্বপূর্ণ জিনের গায়ে আঠার মতো লেগে গিয়ে চর্বি উৎপাদনের আদেশ জারি করে [২]।'
            ),
            l(
              'Transactivated ChREBP directly upregulates the transcription of Liver Pyruvate Kinase (L-PK), Acetyl-CoA Carboxylase-1 (ACC1/ACACA), Fatty Acid Synthase (FASN), and Stearoyl-CoA Desaturase-1 (SCD1) [1, 2]. Acetyl-CoA carboxylase catalyzes the irreversible carboxylation of acetyl-CoA to malonyl-CoA [2]. Malonyl-CoA serves as both the two-carbon building block for elongated fatty acid chain synthesis by FASN and the most potent allosteric inhibitor of Carnitine Palmitoyltransferase-1 (CPT-1), the rate-limiting gatekeeper of mitochondrial fatty acid beta-oxidation [2].',
              'এই আদেশের ফলে লিভারের সমস্ত চর্বি তৈরির এনজাইম (ACC ও FASN) দ্বিগুণ গতিতে তৈরি হতে শুরু করে [১, ২]। তৈরি হওয়া ম্যালোনিল-কোএ একদিকে যেমন নতুন নতুন চর্বি তৈরি করতে থাকে, অন্যদিকে এটি মাইটোকন্ড্রিয়ার চর্বি পোড়ানোর দরজা (CPT-1) পুরোপুরি তালাবদ্ধ করে দেয় [২]। এর ফলে লিভারে নতুন চর্বি তৈরি হতে থাকে দেদারসে কিন্তু চর্বি পোড়ানো পুরোপুরি বন্ধ হয়ে যায় [২]।'
            ),
            l(
              'Simultaneously, Stearoyl-CoA Desaturase-1 (SCD1) introduces a cis-double bond into saturated palmitate (C16:0) and stearate (C18:0) to synthesize monounsaturated palmitoleate (16:1 n-7) and oleate (18:1 n-9) [2]. These monounsaturated acyl chains are rapidly esterified by Diacylglycerol Acyltransferase-1 and 2 (DGAT1/2) into triacylglycerol (TAG) molecules [2]. Newly synthesized TAG is packed into intrahepatic lipid droplets or assembled with Apolipoprotein B-100 via Microsomal Triglyceride Transfer Protein (MTTP) to form large, buoyant VLDL-1 particles [1, 2]. In MASLD, VLDL export capacity is overwhelmed, locking remnant triglycerides inside hepatocytes and driving progressive steatohepatitis [1].',
              'এরপর লিভারের বিশেষ এনজাইমগুলো এই চর্বিগুলোকে ট্রাইগ্লিসারাইডে রূপান্তর করে কোষের ভেতরে জমা করতে শুরু করে এবং রক্তে ক্ষতিকর VLDL কণা হিসেবে ছাড়তে থাকে [১, ২]। কিন্তু যখন চর্বি তৈরির গতি এত বেড়ে যায় যে লিভার আর তা রক্তে পাঠাতে পারে না, তখন লিভার কোষের ভেতরের সমস্ত ফাঁকা জায়গা চর্বির থলেতে ভরে যায় এবং ফ্যাটি লিভার জটিল প্রদাহের রূপ ধারণ করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. FXR, TGR5 & FGF19 Nuclear Receptor Biology in the Gut-Liver Axis', '৩. অন্ত্র-যকৃত অক্ষে FXR, TGR5 ও FGF19 রিসেপ্টরের আণবিক জীববিজ্ঞান'),
          paragraphs: [
            l(
              'The gut-liver axis represents an integrated bidirectional communication network wherein bile acid metabolites function as master endocrine modulators of systemic energy expenditure, glucose tolerance, and hepatic lipid clearance [1, 3]. In healthy physiology, the primary bile acid chenodeoxycholic acid (CDCA) binds with high affinity (EC50 ~10-15 uM) to the nuclear hormone receptor Farnesoid X Receptor (FXR/NR1H4) expressed abundantly in distal ileal enterocytes [3].',
              'অন্ত্র এবং যকৃতের যোগাযোগ অক্ষটি কেবল খাবার চলাচলের নালী নয়; এটি মূলত পিত্তরসের মাধ্যমে পরিচালিত এক অত্যন্ত সংবেদনশীল হরমোন সংকেত ব্যবস্থা [১, ৩]। সুস্থ শরীরে অন্ত্রের শেষ প্রান্তে পিত্তরস গিয়ে পৌঁছালে তা অন্ত্রের কোষের ভেতরে থাকা এফএক্সআর (FXR) নামক এক অত্যন্ত শক্তিশালী রিসেপ্টরের সাথে যুক্ত হয় [৩]। এই রিসেপ্টরটি জাগ্রত হওয়াই হলো পুরো পরিপাকতন্ত্রের সুস্থতার মূল চাবিকাঠি [৩]।'
            ),
            l(
              'Ligand-bound ileal FXR forms an obligate heterodimer with Retinoid X Receptor-alpha (RXR-alpha) and binds to specific inverted repeat-1 (IR-1) response elements in the promoter of the *FGF19* gene, driving massive de novo transcription of Fibroblast Growth Factor 19 [3]. Synthesized FGF19 is exported basolaterally into the mesenteric venules and circulates through the portal vein directly to the liver [3]. In hepatocytes, FGF19 binds to Fibroblast Growth Factor Receptor 4 (FGFR4) complexed with the transmembrane co-receptor beta-Klotho (KLB) [3].',
              'FXR রিসেপ্টর সক্রিয় হওয়ার সাথে সাথে অন্ত্রের কোষ থেকে এফজিএফ১৯ (FGF19) নামক এক বিশেষ হরমোন তৈরি হয়ে রক্তস্রোতে নিঃসৃত হয় [৩]। এই হরমোন রক্তে ভেসে পোর্টাল শিরার মাধ্যমে সোজা লিভারে আসে এবং লিভার কোষের গায়ে থাকা বিশেষ রিসেপ্টর ও বিটা-ক্লথো (Beta-Klotho) প্রোটিনের সাথে শক্তভাবে যুক্ত হয় [৩]। এই বন্ধনটি লিভারের ভেতর এক অত্যন্ত ইতিবাচক পরিবর্তনের সূচনা করে [৩]।'
            ),
            l(
              'Binding of FGF19 to FGFR4/beta-Klotho activates the ERK1/2 and p38 MAPK cascades, which phosphorylation-inactivate hepatic transcription factor Small Heterodimer Partner (SHP) and suppress Cholesterol 7-alpha-hydroxylase (CYP7A1), terminating further bile acid synthesis via classic negative feedback [3]. Crucially, FGFR4 activation simultaneously downregulates SREBP-1c and ChREBP, extinguishing hepatic de novo lipogenesis while stimulating glycogen synthase kinase-3 (GSK3) phosphorylation to promote safe hepatic glycogen storage [1, 3].',
              'FGF19 হরমোন যুক্ত হওয়ার সাথে সাথে লিভারের কোষের ভেতরের সমস্ত সংকেত পথ জেগে ওঠে [৩]। এটি লিভারের ক্ষতিকর চর্বি তৈরির মাস্টার সুইচগুলোকে (SREBP-1c ও ChREBP) সম্পূর্ণ বন্ধ করে দেয়, যার ফলে লিভারে চর্বি জমা তাৎক্ষণিকভাবে থেমে যায় [১, ৩]। একই সাথে এটি রক্তে থাকা বাড়তি গ্লুকোজকে চর্বি বানানোর বদলে লিভারে নিরাপদ গ্লাইকোজেন হিসেবে জমা রাখতে বাধ্য করে [১, ৩]।'
            ),
            l(
              'Concurrently, secondary bile acids activate TGR5 (GPBAR1) on intestinal enteroendocrine L-cells and gallbladder cholangiocytes [3]. TGR5 signaling stimulates G-alpha-s to elevate intracellular cyclic AMP, activating Protein Kinase A (PKA) and Epac2 to induce vesicular fusion and release of Glucagon-Like Peptide-1 (GLP-1) [3]. Secreted GLP-1 slows gastric emptying, reduces postprandial glycemic excursions, and stimulates brown adipose tissue thermogenesis via sympathetic beta-3 adrenergic signaling [3]. In MASLD, dysbiosis impairs bile acid deconjugation, silencing the FXR-FGF19-TGR5 axis; targeted nutritional restoration of prebiotic fibers restores microbial bile transformation, rescuing hepatic metabolic defense [1, 3].',
              'একই সাথে পিত্তরস অন্ত্রের অন্য একটি রিসেপ্টরকে (TGR5) সক্রিয় করে প্রাকৃতিক GLP-1 হরমোন নিঃসরণ বহুগুণ বাড়িয়ে দেয়, যা ইনসুলিনের কার্যক্ষমতা বাড়ায় এবং শরীরের বাড়তি চর্বি পোড়াতে সাহায্য করে [৩]। কিন্তু জাঙ্ক ফুড খাওয়ার ফলে পেটের ভালো ব্যাকটেরিয়া নষ্ট হয়ে গেলে এই চমৎকার হরমোন সংকেত বন্ধ হয়ে যায় এবং ফ্যাটি লিভার জটিল আকার ধারণ করে [১, ৩]। শাকসবজি ও স্বাস্থ্যকর খাবার অন্ত্রের ব্যাকটেরিয়াকে সুস্থ করে পুনরায় এই প্রাকৃতিক প্রতিরক্ষা বলয় গড়ে তোলে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Exclusive Enteral Nutrition: Epithelial Restitution & Cytokine Suppression', '৪. এক্সক্লুসিভ এন্টারাল নিউট্রিশন: অন্ত্রের দেয়াল পুনর্গঠন ও সাইটোকাইন দমন'),
          paragraphs: [
            l(
              'The remarkable therapeutic capacity of Exclusive Enteral Nutrition (EEN) to induce complete transmural and endoscopic mucosal healing in Crohn disease provides profound insight into gastrointestinal mucosal immunology and barrier restoration [3, 4]. Active Crohn disease is driven by a pathogenic breakdown of the intestinal epithelial monolayer, allowing luminal bacteria and dietary antigens to penetrate the lamina propria [4]. Flagellin and lipopolysaccharide ligate mucosal Toll-Like Receptors (TLR4, TLR5), activating the IKK complex to phosphorylate I-kappa-B-alpha, driving nuclear translocation of NF-kB p50/p65 heterodimers [4].',
              'ক্রোনস রোগে এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) এর মাধ্যমে অন্ত্রের গভীর আলসার ও ক্ষত সারিয়ে তোলার বৈজ্ঞানিক প্রক্রিয়া আধুনিক গ্যাস্ট্রোএন্টারোলজির এক অপার বিস্ময় [৩, ৪]। ক্রোনস রোগে অন্ত্রের সুরক্ষামূলক দেয়ালটি ছিঁড়ে যায় এবং ক্ষতিকর ব্যাকটেরিয়া ও খাবারের কণা অন্ত্রের ভেতরের কোষে ঢুকে পড়ে [৪]। এর ফলে রোগপ্রতিরোধকারী কোষগুলো বিভ্রান্ত হয়ে মারাত্মক প্রদাহের সৃষ্টি করে এবং NF-kB প্রোটিন সক্রিয় হয়ে অন্ত্রের দেয়ালকে পুড়িয়ে ক্ষতবিক্ষত করতে শুরু করে [৪]।'
            ),
            l(
              'Nuclear NF-kB drives intense, sustained transcription of pro-inflammatory cytokines: Tumor Necrosis Factor-alpha (TNF-alpha), Interleukin-1beta (IL-1beta), Interleukin-6 (IL-6), and Interleukin-8 (IL-8) [4]. Concurrently, elevated Matrix Metalloproteinases (MMP-3, MMP-9) proteolytically degrade collagen and elastin fibers in the extracellular matrix, creating deep transmural fissuring ulcers, strictures, and inflammatory fistulas characteristic of Crohn disease [3, 4].',
              'এই ক্ষতিকর সংকেতের কারণে শরীরে প্রচুর পরিমাণে বিষাক্ত সাইটোকাইন (TNF-alpha ও IL-6) নিঃসৃত হতে থাকে [৪]। এই প্রদাহ সৃষ্টিকারী উপাদানগুলো অন্ত্রের সুস্থ পেশি ও পর্দাগুলোকে অ্যাসিডের মতো গলিয়ে ফেলে গভীর ঘা বা আলসার তৈরি করে, যার ফলে অন্ত্র ফুটো হয়ে মারাত্মক ফিস্টুলা বা ছিদ্রের সৃষ্টি হয় [৩, ৪]।'
            ),
            l(
              'Exclusive Enteral Nutrition arrests this destructive cascade through multiple synergistic molecular mechanisms [3, 4]. First, complete elimination of whole dietary solid foods removes dietary emulsifiers (polysorbate-80, carboxymethylcellulose) and microparticles (titanium dioxide) that physically dissolve the protective mucin-2 (MUC2) hydrogel meshwork [4]. Deprived of antigenic and chemical insults, enterocyte TLR signaling collapses [4]. Second, enteral liquid formulas supply abundant transforming growth factor-beta (TGF-beta), which actively binds enterocyte TGF-beta receptors to stimulate Smad2/3 phosphorylation, directly suppressing NF-kB transcription while upregulating tight junction claudin-1, occludin, and zonula occludens-1 (ZO-1) [4].',
              'এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) এই ধ্বংসলীলা সম্পূর্ণ থামিয়ে দেয় [৩, ৪]। সাধারণ সব খাবার পুরোপুরি বন্ধ রাখায় প্যাকেটজাত খাবারের কৃত্রিম প্রিজারভেটিভ ও ইমালসিফায়ার অন্ত্রে ঢুকতে পারে না, যা মূলত অন্ত্রের পিচ্ছিল সুরক্ষা স্তরটিকে ধ্বংস করছিল [৪]। ক্ষতিকর খাবার বন্ধ হওয়ার সাথে সাথে প্রদাহের সংকেত বন্ধ হয়ে যায় [৪]। একই সাথে এই তরল ফর্মুলায় থাকা বিশেষ পুষ্টি উপাদান অন্ত্রের কোষগুলোকে উদ্দীপিত করে টাইট জাংশন প্রোটিন তৈরি বাড়িয়ে দেয়, যার ফলে অন্ত্রের সমস্ত ছেঁড়া পর্দা আবার জোড়া লেগে আলসার পুরোপুরি শুকিয়ে যায় [৪]।'
            ),
            l(
              'Third, EEN formula delivery provides direct luminal fuel in the form of glutamine and specialized medium-chain triglycerides, restoring enterocyte mitochondrial ATP production and stimulating villus brush-border enterocyte migration to seal denuded mucosal ulcerations [3, 4]. Prospective clinical studies utilizing capsule endoscopy and magnetic resonance enterography prove that 8 weeks of EEN achieves complete endoscopic mucosal healing in >70% of pediatric patients, slashing systemic C-reactive protein (CRP) and fecal calprotectin without any of the growth-stunting, immunosuppressive, or osteopenic side effects of systemic corticosteroids [3, 4].',
              'তাছাড়া এই বিশেষ তরল পুষ্টি সরাসরি অন্ত্রের কোষগুলোকে তাজা শক্তি সরবরাহ করে, যার ফলে অন্ত্রের কোষগুলো দ্রুত নতুন কোষ তৈরি করে ক্ষতের জায়গা ভরাট করে ফেলে [৩, ৪]। একাধিক আন্তর্জাতিক গবেষণায় প্রমাণিত হয়েছে যে টানা ৮ সপ্তাহ এই তরল পুষ্টি গ্রহণ করলে ৭০ শতাংশেরও বেশি রোগীর অন্ত্রের ঘা সম্পূর্ণ শুকিয়ে রক্ত ও মল পরীক্ষার সমস্ত প্রদাহ দূর হয়ে যায়, অথচ ক্ষতিকর স্টেরয়েড ওষুধের কোনো পার্শ্বপ্রতিক্রিয়াই রোগীকে সহ্য করতে হয় না [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Colonic Microbial Fermentation Kinetics of Low-FODMAP Carbohydrates', '৫. বৃহদান্ত্রে ফোডম্যাপ শর্করার গাঁজন গতিবিদ্যা ও গ্যাস উৎপাদন'),
          paragraphs: [
            l(
              'The biophysical and microbiological rationale underpinning the Low-FODMAP diet in irritable bowel syndrome centers on carbohydrate chain length, osmotic fluid shifting, and the stoichiometric velocity of bacterial gas production [5, 6]. FODMAPs are defined by three shared physicochemical characteristics: (1) poor gastrointestinal absorption, (2) small molecular weight exerting high osmotic pressure per gram, and (3) rapid anaerobic microbial fermentation by colonic bacteria [5, 6].',
              'আইবিএস (IBS) রোগে লো-ফোডম্যাপ ডায়েটের বৈজ্ঞানিক ভিত্তি মূলত শর্করার আণবিক ওজন, অন্ত্রে পানি টেনে আনার ক্ষমতা এবং ব্যাকটেরিয়ার দ্রুত গ্যাস উৎপাদনের হারের ওপর নির্ভর করে [৫, ৬]। ফোডম্যাপ হলো এমন কিছু ছোট শর্করা যা ক্ষুদ্রান্ত্রে সহজে হজম হতে পারে না, প্রচুর পানি নিজের দিকে টেনে আনে এবং বৃহদান্ত্রের ব্যাকটেরিয়ার সংস্পর্শে আসার সাথে সাথে প্রচুর গ্যাস তৈরি করে [৫, ৬]।'
            ),
            l(
              'In the proximal small intestine, unabsorbed monomeric and oligomeric carbohydrates—such as free D-fructose in excess of D-glucose and sugar alcohols (sorbitol, mannitol)—cannot traverse enterocyte membranes via passive diffusion [5, 6]. Because of their osmotic activity, they draw immense volumes of water across the mucosal barrier into the intestinal lumen (up to 200 mL of water per 10 g of unabsorbed carbohydrate) [5]. This acute luminal fluid distension increases hydrostatic pressure in the small bowel, accelerating transit velocity and triggering borborygmi, watery diarrhea, and visceral urgency [5, 6].',
              'ক্ষুদ্রান্ত্রে এই অপাচ্য শর্করাগুলো যখন পড়ে থাকে, তখন এদের উচ্চ ঘনত্বের কারণে এরা রক্তনালী থেকে প্রচুর পানি অন্ত্রের ভেতরের নালীতে টেনে আনে (প্রতি ১০ গ্রাম অপাচ্য শর্করায় প্রায় ২০০ মিলিলিটার পানি) [৫]। এর ফলে অন্ত্রের ভেতরে তরলের প্রবল চাপ তৈরি হয়, যা খাবার চলাচলের গতি অস্বাভাবিক বাড়িয়ে দেয় এবং পেটের ভেতর তীব্র ডাক ও পাতলা পায়খানার বেগ তৈরি করে [৫, ৬]।'
            ),
            l(
              'Upon entering the cecum and ascending colon, these unabsorbed carbohydrates encounter a dense anaerobic bacterial community (>10^11 CFU/g) expressing extensive glycoside hydrolase machinery [5, 6]. Unlike complex polysaccharides (resistant starch, cellulose) which ferment slowly over 24 to 48 hours in the distal colon, FODMAP carbohydrates possess short chain lengths (DP 1 to 10) that are fermented within minutes to hours [5, 6]. Bacterial fermentation rapidly releases massive volumes of hydrogen (H2), methane (CH4), and carbon dioxide (CO2) gases according to strict stoichiometric equations [5, 6].',
              'এরপর এই শর্করাগুলো যখন বৃহদান্ত্রে এসে পৌঁছায়, তখন সেখানকার হাজার কোটি ব্যাকটেরিয়া এদের ওপর ঝাঁপিয়ে পড়ে [৫, ৬]। সাধারণ জটিল আঁশগুলো যেখানে ধীরে ধীরে ২৪ থেকে ৪৮ ঘণ্টা ধরে হজম হয়, সেখানে এই ফোডম্যাপ শর্করাগুলো মাত্র কয়েক মিনিটের মধ্যে পচে গিয়ে বিপুল পরিমাণ হাইড্রোজেন, মিথেন ও কার্বন ডাই-অক্সাইড গ্যাস তৈরি করে [৫, ৬]।'
            ),
            l(
              'This rapid gas production generates acute mechanical circumferential distension of the colonic wall [5, 6]. In healthy controls, colonic distension is tolerated without pain; however, in patients with irritable bowel syndrome, central and peripheral visceral hypersensitivity—amplified by heightened dorsal horn nociceptive transmission and mast cell histamine release near submucosal nerve endings—translates this normal physical stretch into excruciating abdominal pain and cramping [5, 6]. Systematic implementation of the three-phase Low-FODMAP protocol withdraws these osmotic and gaseous triggers, dampening mechanical visceral stretch to establish rapid symptom relief while carefully preserving prebiotic fiber intake during the reintroduction phase [5, 6].',
              'এই আকস্মিক গ্যাসের তোড়ে অন্ত্রের দেয়াল বেলুনের মতো ফুলে ওঠে [৫, ৬]। সুস্থ মানুষ এটি সহজে সহ্য করতে পারলেও আইবিএস রোগীদের অতিরিক্ত সংবেদনশীল স্নায়ু এই টান সহ্য করতে পারে না; স্নায়ুগুলো সাথে সাথে মস্তিষ্কে ব্যথার তীব্র সংকেত পাঠায় যার ফলে রোগী পেটে তীব্র মোচড় ও বুক ধড়ফড়ানিতে ছটফট করতে থাকেন [৫, ৬]। তিন-ধাপের বৈজ্ঞানিক লো-ফোডম্যাপ ডায়েট অনুসরণ করলে এই অতিরিক্ত গ্যাস ও পানি জমা পুরোপুরি বন্ধ হয় এবং রোগী কোনো ওষুধ ছাড়াই দীর্ঘস্থায়ী আরাম লাভ করেন [৫, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis & Gastroenterology Dietetic Consensus', '৬. একাডেমিক সমন্বয় ও গ্যাস্ট্রোএন্টারোলজি ডায়েটেটিক্স কনসেনসাস'),
          paragraphs: [
            l(
              'Hepatic fructose clearance bypasses the phosphofructokinase-1 checkpoint via ketohexokinase-C, consuming intracellular ATP, elevating uric acid via AMP deaminase, and flooding the lower glycolytic pathway with triose phosphates [1, 2]. Intracellular triose phosphates transactivate ChREBP and SREBP-1c, accelerating hepatic de novo lipogenesis, elevating intrahepatic triglycerides, and driving metabolic dysfunction-associated steatotic liver disease (MASLD) [1, 2].',
              'লিভারে ফ্রুক্টোজ কোনো বাধা ছাড়াই KHK-C এনজাইমের মাধ্যমে এটিপি শক্তি ধ্বংস করে ইউরিক অ্যাসিড বাড়ায় এবং চর্বির কাঁচামালে লিভারকে প্লাবিত করে [১, ২]। এই উপাদানগুলো চর্বি তৈরির মাস্টার সুইচ ChREBP সক্রিয় করে প্রচুর ট্রাইগ্লিসারাইড তৈরি করে ফ্যাটি লিভার (MASLD) সৃষ্টি করে [১, ২]।'
            ),
            l(
              'The gut-liver axis coordinates hepatobiliary metabolism through bile acid activation of ileal FXR and enterocyte FGF19 secretion [1, 3]. Circulating FGF19 binds hepatic FGFR4/beta-Klotho to suppress CYP7A1 bile acid synthesis and silence lipogenic gene transcription, while TGR5 stimulation of intestinal L-cells promotes GLP-1 release [1, 3]. Gut dysbiosis impairs bile acid signaling, whereas high-fiber and polyphenol diets restore protective FXR-FGF19-TGR5 flux [1, 3].',
              'অন্ত্র ও লিভারের মধ্যে পিত্তরস এক গুরুত্বপূর্ণ সংকেত হরমোন হিসেবে কাজ করে যা অন্ত্র থেকে FGF19 হরমোন ক্ষরণ করিয়ে লিভারে চর্বি জমা বন্ধ করে এবং TGR5 রিসেপ্টরের মাধ্যমে GLP-1 বাড়িয়ে বিপাকীয় ভারসাম্য রক্ষা করে [১, ৩]। স্বাস্থ্যকর আঁশযুক্ত খাবার এই প্রাকৃতিক রক্ষা কবচকে সচল রাখে [১, ৩]।'
            ),
            l(
              'Exclusive Enteral Nutrition (EEN)—delivering 100% of caloric needs via liquid formula for 6 to 8 weeks with total solid food exclusion—induces clinical remission (80–85%) and endoscopic mucosal healing (>70%) in active Crohn disease [3, 4]. EEN eliminates mucosal-disrupting food additives, downregulates mucosal NF-kB, suppresses inflammatory cytokines (TNF-alpha, IL-1beta), upregulates TGF-beta, and restores tight junction integrity without the toxicities of corticosteroids [3, 4].',
              'ক্রোনস রোগে ৬-৮ সপ্তাহ সাধারণ খাবার পুরোপুরি বন্ধ রেখে বিশেষ তরল পুষ্টি (EEN) গ্রহণ করলে ৮০% ক্ষেত্রে অন্ত্রের আলসার ও গভীর ক্ষত শুকিয়ে যায় [৩, ৪]। এটি খাবারের ক্ষতিকর রাসায়নিক উপাদান দূর করে প্রদাহ সৃষ্টিকারী সাইটোকাইন থামিয়ে দেয় এবং স্টেরয়েড ছাড়াই অন্ত্রকে সম্পূর্ণ সুস্থ করে তোলে [৩, ৪]।'
            ),
            l(
              'In irritable bowel syndrome (IBS), poorly absorbed FODMAP carbohydrates exert small-bowel osmotic fluid shifts and undergo rapid colonic bacterial gas fermentation, triggering visceral pain in hypersensitive individuals [5, 6]. The evidence-based three-phase Low-FODMAP protocol (Restriction -> Reintroduction -> Personalization) establishes rapid symptom control while systematically reintroducing tolerated prebiotic fibers, preventing long-term colonic dysbiosis and bifidobacterial depletion [5, 6].',
              'আইবিএস (IBS) রোগে পেঁয়াজ, রসুন ও দুধের মতো অপাচ্য শর্করা অন্ত্রে গ্যাস ও ব্যথা সৃষ্টি করে [৫, ৬]। তিন-ধাপের বৈজ্ঞানিক লো-ফোডম্যাপ ডায়েট (নিয়ন্ত্রণ -> পুনঃপ্রবর্তন -> ব্যক্তিগত তালিকা) অনুসরণের মাধ্যমে পেটের সমস্ত অস্বস্তি দূর করা সম্ভব এবং সহনশীল খাবারগুলো পুনরায় চালু করে অন্ত্রের বন্ধু ব্যাকটেরিয়াকে চিরকাল সুস্থ রাখা যায় [৫, ৬]।'
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
            '1. Fructose-Induced ATP Depletion & AMPD1 Purine Nucleotide Degradation',
            '১. ফ্রুক্টোজজনিত এটিপি অপচয় ও AMPD1 পিউরিন নিউক্লিওটাইড ক্ষয়'
          ),
          paragraphs: [
            l(
              'The sub-cellular molecular pathology linking dietary fructose to hepatic steatohepatitis begins with the catastrophic thermodynamic energetics of ketohexokinase phosphorylation [1, 2]. Unlike hexokinase and glucokinase, which possess tight regulatory feedback loops governed by glucose-6-phosphate, Ketohexokinase-C (KHK-C) exhibits an extraordinarily rapid catalytic velocity (Vmax >10-fold higher than glucokinase) and completely lacks allosteric feedback inhibition [2]. When fructose enters the hepatocyte cytoplasm via GLUT2, KHK-C transfers the gamma-phosphate of ATP onto the 1-position of fructose, generating fructose-1-phosphate [2].',
              'খাদ্যের ফ্রুক্টোজ কীভাবে লিভারে মারাত্মক ফ্যাটি লিভার ও প্রদাহ তৈরি করে তার মূল রহস্য লুকিয়ে আছে কোষের অভ্যন্তরীণ শক্তির ভয়াবহ অপচয়ের মধ্যে [১, ২]। গ্লুকোজের এনজাইমগুলো যেখানে শক্তি বেশি থাকলে কাজ বন্ধ করে দেয়, সেখানে কিটোহেক্সোকাইনেজ-সি (KHK-C) এনজাইমটি কোনো বাধা মানে না এবং গ্লুকোজের চেয়ে ১০ গুণ দ্রুত গতিতে কাজ করতে পারে [২]। ফ্রুক্টোজ কোষে প্রবেশের সাথে সাথে এই এনজাইমটি কোষের মূল্যবান এটিপি (ATP) অণুর ফসফেট ছিনিয়ে নিয়ে ফ্রুক্টোজের গায়ে লাগিয়ে দেয় [২]।'
            ),
            l(
              'Because the downstream cleavage of fructose-1-phosphate by Aldolase B (ALDOB) is the rate-limiting step of hepatic fructolysis, fructose-1-phosphate accumulates transiently at millimolar concentrations [2]. This creates a severe biochemical "phosphate trap", locking vast quantities of intracellular inorganic phosphate into phosphorylated hexose intermediates [2]. Deprived of free inorganic phosphate, mitochondrial ATP synthase (Complex V) stalls, arresting oxidative phosphorylation [2]. Concurrently, intracellular ATP concentrations drop precipitously by 50% to 70% within minutes of a fructose load, while intracellular AMP levels surge dramatically [2].',
              'যেহেতু পরবর্তী ধাপে ফ্রুক্টোজ ভাঙার গতি কিছুটা ধীর, তাই কোষের ভেতরে প্রচুর ফ্রুক্টোজ-ফসফেট জমে যায় এবং কোষের সমস্ত মুক্ত ফসফেট সেখানে আটকা পড়ে [২]। মুক্ত ফসফেট না থাকায় মাইটোকন্ড্রিয়ায় নতুন এটিপি তৈরি পুরোপুরি বন্ধ হয়ে যায় [২]। এর ফলে ফ্রুক্টোজ খাওয়ার মাত্র কয়েক মিনিটের মধ্যে লিভার কোষের নিজস্ব শক্তির ভাণ্ডার ৫০ থেকে ৭০ শতাংশ পর্যন্ত ভয়াবহভাবে হ্রাস পায় এবং কোষে ক্ষতিকর এএমপি (AMP) অণুর পাহাড় জমে যায় [২]।'
            ),
            l(
              'The surge in cellular AMP paired with phosphate depletion removes allosteric inhibition from AMP Deaminase-1 (AMPD1/AMPD2) [2]. Activated AMP deaminase catalyzes the irreversible hydrolytic deamination of AMP to Inosine Monophosphate (IMP) [2]. Inosine monophosphate is sequentially metabolized by 5\'-nucleotidase into inosine, by purine nucleoside phosphorylase into hypoxanthine, and by Xanthine Oxidase (XO) into xanthine and ultimately Uric Acid [2]. During the xanthine oxidase reaction, molecular oxygen acts as the electron acceptor, generating massive surges of superoxide radical (O2-) and hydrogen peroxide (H2O2) within the hepatocyte cytoplasm [1, 2].',
              'কোষে এটিপি কমে এএমপি বেড়ে গেলেই তা এএমপি ডিয়ামিনেজ (AMPD) নামক একটি বিশেষ এনজাইমকে মারাত্মকভাবে সক্রিয় করে তোলে [২]। এই এনজাইমটি কোষের অতিরিক্ত এএমপিকে জারিত করে পিউরিন ভাঙার এক ভয়াবহ প্রক্রিয়া শুরু করে [২]। জ্যান্থিন অক্সিডেজ এনজাইমের মাধ্যমে এটি শেষ পর্যন্ত বিপুল পরিমাণে বিষাক্ত ইউরিক অ্যাসিড (Uric Acid) তৈরি করে এবং একই সাথে কোষের ভেতরে প্রচুর ক্ষতিকর ফ্রি-র‌্যাডিক্যাল মুক্ত করে লিভার কোষকে পুড়িয়ে ধ্বংস করতে শুরু করে [১, ২]।'
            ),
            l(
              'Synthesized uric acid directly translocates into mitochondria, where it stimulates NADPH oxidase-4 (NOX4) and induces irreversible oxidative carbonylation of aconitase and enoyl-CoA hydratase [1, 2]. Mitochondrial fatty acid beta-oxidation collapses by >60%, preventing hepatocytes from catabolizing incoming or stored fatty acids [2]. Furthermore, uric acid stimulates endoplasmic reticulum stress via the PERK/eIF2-alpha pathway, upregulating transcription factor SREBP-1c and locking hepatocytes into an aggressive, unresolvable state of steatosis and cellular necroinflammation [1, 2].',
              'তৈরি হওয়া এই অতিরিক্ত ইউরিক অ্যাসিড লিভারের মাইটোকন্ড্রিয়ায় প্রবেশ করে সেখানে চর্বি পোড়ানোর প্রধান এনজাইমগুলোকে সম্পূর্ণ ধ্বংস করে দেয় [১, ২]। ফলে লিভারে চর্বি পোড়ানোর গতি ৬০ শতাংশের বেশি কমে যায় [২]। একই সাথে ইউরিক অ্যাসিড লিভারের কোষে তীব্র চাপ সৃষ্টি করে চর্বি তৈরির মাস্টার সুইচ SREBP-1c অন করে দেয়; যার ফলে একদিকে চর্বি তৈরি হতে থাকে বাঁধভাঙা গতিতে আর অন্যদিকে চর্বি পোড়ানো বন্ধ হয়ে গিয়ে লিভার চর্বির বিষাক্ত গুদামে পরিণত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            '2. The PNPLA3 I148M Mutation & Impaired Lipid Droplet Mobilization',
            '২. PNPLA3 I148M জিনগত রূপান্তর ও লিপিড ড্রপলেট সঞ্চয়ন'
          ),
          paragraphs: [
            l(
              'While excess dietary fructose and positive energy balance represent obligatory environmental triggers for MASLD, individual susceptibility to steatohepatitis and progressive hepatic fibrosis is heavily governed by host genetics [1]. Genome-wide association studies (GWAS) across diverse global populations have definitively established the rs738409 C>G single nucleotide polymorphism in the *PNPLA3* gene as the single strongest genetic determinant of hepatic fat content, steatohepatitis severity, and hepatocellular carcinoma risk in human history [1].',
              'অতিরিক্ত মিষ্টি ও ফ্রুক্টোজ ফ্যাটি লিভারের প্রধান কারণ হলেও, কেন কোনো কোনো মানুষের ক্ষেত্রে ফ্যাটি লিভার খুব দ্রুত মারাত্মক সিরোসিস বা লিভার ক্যান্সারে রূপ নেয় তা নির্ভর করে তাদের জিনগত গঠনের ওপর [১]। বিশ্বজুড়ে পরিচালিত গবেষণায় দেখা গেছে যে মানুষের PNPLA3 জিনের একটি ক্ষুদ্র পরিবর্তন (rs738409) হলো লিভারে চর্বি জমা ও লিভার সিরোসিস হওয়ার সবচেয়ে শক্তিশালী জেনেটিক কারণ [১]।'
            ),
            l(
              'The *PNPLA3* gene encodes Patatin-Like Phospholipase Domain-Containing Protein 3 (also termed Adiponutrin), a 481-amino acid protein localized exclusively to the surface of intracellular lipid droplets in hepatocytes and hepatic stellate cells [1]. In healthy wild-type physiology (148I/I), PNPLA3 possesses intrinsic triglyceride and retinyl ester hydrolase activity, facilitating the controlled enzymatic lipolysis of neutral triglycerides and permitting the access of cytosolic lipases (ATGL, HSL) to the lipid droplet core for metabolic mobilization [1].',
              'এই PNPLA3 জিনটি এডিপোনিউটিন নামক একটি বিশেষ এনজাইম তৈরি করে যা লিভারের চর্বির থলের (লিপিড ড্রপলেট) উপরিভাগে অবস্থান করে [১]। সুস্থ জিনধারী মানুষের শরীরে এই এনজাইমটি চর্বির থলে ভেঙে বাড়তি চর্বি পুড়িয়ে ফেলতে সাহায্য করে এবং চর্বি ভাঙার অন্যান্য এনজাইমগুলোকে চর্বির কাছে পৌঁছানোর পথ করে দেয় [১]।'
            ),
            l(
              'The rs738409 missense variant substitutes an isoleucine with a bulky methionine residue at codon 148 (I148M) within the catalytic alpha/beta-hydrolase fold [1]. This single amino acid substitution induces a catastrophic structural gain-of-toxic-function: the mutant 148M protein resists normal ubiquitination and proteasomal degradation, accumulating >10-fold on the lipid droplet surface [1]. On the droplet membrane, mutant PNPLA3-148M forms a rigid, high-affinity steric block that physically sequesters and inactivates CGI-58 (ABHD5), the obligatory co-activator of Adipose Triglyceride Lipase (ATGL) [1].',
              'কিন্তু জিনগত ত্রুটির কারণে (I148M) যখন একটি অ্যামিনো অ্যাসিড বদলে যায়, তখন তৈরি হওয়া এনজাইমটি বিকৃত রূপ ধারণ করে [১]। এই বিকৃত প্রোটিনটি সহজে ধ্বংস হতে পারে না; বরং এটি চর্বির থলের ওপর সাধারণের চেয়ে ১০ গুণ বেশি আঠার মতো পুরু আস্তরণ তৈরি করে বসে থাকে [১]। এই আস্তরণটি চর্বি ভাঙার প্রধান এনজাইমকে (ATGL) চর্বির থলে স্পর্শ করতে বাধা দেয় [১]।'
            ),
            l(
              'Stripped of functional ATGL-CGI-58 lipolytic activity, hepatocytes cannot mobilize stored triglycerides from lipid droplets [1]. Intrahepatic fat becomes physically locked within the cell, leading to giant macrovesicular steatosis even in the presence of modest dietary carbohydrate excess [1]. Furthermore, in hepatic stellate cells, the 148M mutant impairs retinyl ester hydrolysis, triggering stellate cell transdifferentiation into collagen-secreting myofibroblasts and driving rapid architectural fibrosis [1]. In patients homozygous for PNPLA3-148M, strict elimination of industrial fructose and adherence to a low-glycemic, polyphenol-dense Mediterranean diet is an imperative clinical mandate to prevent cirrhosis [1].',
              'এর ফলে চর্বি ভাঙার প্রক্রিয়া সম্পূর্ণ অকেজো হয়ে পড়ে এবং লিভার কোষের ভেতরে একবার চর্বি ঢুকলে তা আর কোনোভাবেই বের হতে পারে না [১]। সামান্য মিষ্টি খাবার খেলেও এই রোগীদের লিভার চর্বিতে ফুলে ওঠে [১]। তাছাড়া এটি লিভারের স্টেলেট কোষগুলোকে ক্ষত তৈরিকারী কোষে রূপান্তরিত করে দ্রুত লিভার সিরোসিস ডেকে আনে [১]। এই জিনগত ত্রুটিযুক্ত রোগীদের ক্ষেত্রে কোমল পানীয় ও কৃত্রিম চিনি সম্পূর্ণ বর্জন করা জীবন রক্ষার একমাত্র উপায় [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            '3. The NLRP3 Inflammasome & Hepatic Stellate Cell Transdifferentiation',
            '৩. NLRP3 ইনফ্ল্যামাজোম ও হেপাটিক স্টেলেট কোষের ফাইব্রোসিস রূপান্তর'
          ),
          paragraphs: [
            l(
              'The progressive transition from simple, benign steatosis (MASL) to necroinflammatory, fibrotic steatohepatitis (MASH) represents the critical biological watershed dictating long-term mortality in liver disease [1]. This transition is driven by lipotoxic hepatocyte injury that unleashes the intracellular NLRP3 (NOD-, LRR- and pyrin domain-containing protein 3) Inflammasome inside hepatocytes, sinusoidal Kupffer macrophages, and infiltrating monocyte-derived macrophages [1].',
              'সাধারণ ফ্যাটি লিভার (MASL) থেকে মারাত্মক প্রদাহ ও ক্ষতযুক্ত হেপাটাইটিসে (MASH) রূপান্তরই হলো লিভারের সবচেয়ে বিপজ্জনক বাঁক যা রোগীর জীবন বিপন্ন করে তোলে [১]। এই রূপান্তরের মূল চালিকাশক্তি হলো কোষে চর্বির বিষক্রিয়া যা কোষের ভেতরের NLRP3 ইনফ্ল্যামাজোম নামক এক বিধ্বংসী জৈব বোমা সক্রিয় করে দেয় [১]।'
            ),
            l(
              'Intracellular lipotoxicity occurs when saturated fatty acids (palmitate C16:0) and reactive lipid intermediates (toxic ceramides, diacylglycerols, lysophosphatidylcholine) overwhelm mitochondrial beta-oxidation and the protective neutral storage capacity of lipid droplets [1, 2]. Excess palmitate incorporates into the endoplasmic reticulum (ER) membrane, rigidifying the bilayer and triggering severe ER stress via the inositol-requiring enzyme 1-alpha (IRE1-alpha) and PERK pathways [1]. Concurrently, damaged mitochondria leak mitochondrial DNA (mtDNA) and reactive oxygen species into the cytosol, providing the definitive two-signal activation for the NLRP3 sensor [1].',
              'যখন খাবারের অতিরিক্ত সম্পৃক্ত চর্বি ও ক্ষতিকর সিরামাইড কোষের ভেতরে বিষাক্তভাবে জমতে শুরু করে, তখন কোষের ভেতরের অঙ্গাণুগুলো ভেঙে চুরমার হয়ে যায় [১, ২]। মাইটোকন্ড্রিয়া ফেটে গিয়ে ভেতরের ডিএনএ ও বিষাক্ত মুক্ত মূলক সাইটোপ্লাজমে ছড়িয়ে পড়ে [১]। এই ধ্বংসাবশেষ দেখে কোষের ভেতরের NLRP3 সেন্সরটি অত্যন্ত ক্ষিপ্ত হয়ে ওঠে এবং চরম সংকেত পাঠায় [১]।'
            ),
            l(
              'Activated NLRP3 nucleates the adapter protein ASC (apoptosis-associated speck-like protein containing a CARD) into high-molecular-weight helical filaments, which recruit pro-caspase-1 [1]. Autocatalytic cleavage yields active caspase-1, which proteolytically cleaves inactive pro-IL-1beta and pro-IL-18 into mature, highly pyrogenic cytokines Interleukin-1beta (IL-1beta) and Interleukin-18 (IL-18), while cleaving Gasdermin-D to form lytic membrane pores that execute inflammatory cell death (pyroptosis) [1]. Pyroptotic hepatocytes burst, spilling damage-associated molecular patterns (DAMPs) and hedgehog ligands into the space of Disse [1].',
              'NLRP3 সেন্সর সক্রিয় হয়ে ক্যাসপেজ-১ এনজাইমকে প্রস্তুত করে [১]। এই এনজাইমটি অকালমৃত্যুর সংকেতবাহী সাইটোকাইন (IL-1beta) তৈরি করে এবং কোষের দেয়ালে বড় বড় ছিদ্র তৈরি করে দেয় [১]। এর ফলে লিভারের কোষগুলো বোমার মতো ফেটে চারপাশের কোষে বিষাক্ত বর্জ্য ছড়িয়ে দিয়ে ধ্বংস হয়ে যায় (Pyroptosis) [১]। এই ফেটে যাওয়া কোষগুলো লিভারের ভেতরে তীব্র প্রদাহের দাবানল জ্বালিয়ে দেয় [১]।'
            ),
            l(
              'Secreted IL-1beta, TNF-alpha, and transforming growth factor-beta-1 (TGF-beta-1) bind to receptors on adjacent Hepatic Stellate Cells (HSCs) residing in the subendothelial space of Disse [1]. Stellate cells lose their characteristic quiescent phenotype and intracellular vitamin A retinyl ester droplets, undergoing transdifferentiation into highly proliferative, contractile alpha-smooth muscle actin-positive (alpha-SMA+) myofibroblasts [1]. Activated myofibroblasts secrete massive bundles of fibrillar type I and type III collagen, bridging portal tracts to central veins and building progressive architectural fibrosis [1]. Halting lipotoxic hepatocyte stress through targeted carbohydrate restriction and antioxidant-dense Mediterranean nutrition silences NLRP3 assembly and arrests fibrogenesis [1].',
              'ফেটে যাওয়া কোষ থেকে বের হওয়া বিষাক্ত উপাদানগুলো লিভারের পাশে ঘুমিয়ে থাকা স্টেলেট কোষগুলোকে (HSC) আক্রমণ করে [১]। এই কোষগুলো তাদের শান্ত স্বভাব এবং ভিটামিন এ হারিয়ে অত্যন্ত হিংস্র ফাইব্রোব্লাস্টে রূপান্তরিত হয় [১]। এরা লিভারের নরম কোষের মাঝে কাঁচ বা প্লাস্টিকের মতো শক্ত কোলাজেন তন্তু বুনে দিতে শুরু করে, যা পুরো লিভারকে পাথরের মতো শক্ত করে সিরোসিসে রূপান্তর করে [১]। সঠিক পুষ্টির মাধ্যমে কোষে চর্বি জমা বন্ধ রাখলে এই NLRP3 বোমা নিষ্ক্রিয় থাকে এবং লিভার চিরতরে ধ্বংস হওয়া থেকে রক্ষা পায় [১]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            '4. Mucosal Barrier Immunology: Dysbiosis, Claudin Pore Kinetics & EEN Mechanisms',
            '৪. অন্ত্রের মিউকোসা প্রতিরক্ষা: ডিসবায়োসিস, ক্লডিন ছিদ্র ও EEN এর আণবিক রূপ'
          ),
          paragraphs: [
            l(
              'The molecular architecture of mucosal barrier failure in Crohn disease illustrates the fine biophysical control executed by apical junctional complexes in maintaining intestinal homeostasis [3, 4]. The intestinal epithelial monolayer separates trillion-strong luminal bacterial consortia from the sterile lamina propria [4]. Paracellular permeability is governed by tight junctions consisting of transmembrane tetraspan proteins (claudins, occludin) linked via zonula occludens (ZO-1, ZO-2) scaffold proteins to the perijunctional actomyosin ring (PAMR) [4].',
              'ক্রোনস রোগে অন্ত্রের প্রতিরক্ষামূলক দেয়াল ভেঙে পড়ার আণবিক রহস্যটি অন্ত্রের কোষগুলোর মধ্যবর্তী সূক্ষ্ম দরজার (টাইট জাংশন) ওপর নির্ভর করে [৩, ৪]। অন্ত্রের একস্তরবিশিষ্ট কোষঝিল্লি কোটি কোটি ব্যাকটেরিয়ার হাত থেকে ভেতরের রক্তনালী ও টিস্যুকে পৃথক করে রাখে [৪]। কোষগুলোর মধ্যবর্তী ফাঁকা স্থানটি ক্লডিন, অক্লুডিন ও জেডও-১ (ZO-1) নামক জটিল প্রোটিনের জালিকা দ্বারা নিয়ন্ত্রিত হয় [৪]।'
            ),
            l(
              'Claudins are functionally dichotomized into "sealing" claudins (claudin-1, claudin-3, claudin-4, claudin-5) that establish impermeable mechanical barriers against macromolecules, and "pore-forming" claudins (predominantly claudin-2) that create water- and sodium-permeable paracellular channels [4]. In active Crohn disease, high ambient concentrations of mucosal TNF-alpha and IL-13 stimulate Myosin Light Chain Kinase (MLCK), which phosphorylates regulatory myosin light chains, contracting the PAMR and mechanically widening paracellular junctions [4]. Concurrently, TNF-alpha downregulates sealing claudin-1 and occludin while upregulating pore-forming claudin-2, converting the selectively permeable epithelium into a leaky sieve [4].',
              'ক্লডিন প্রোটিনগুলো দুই ভাগে বিভক্ত: কিছু প্রোটিন (ক্লডিন-১) দেয়ালকে আঠার মতো শক্ত করে আটকে রাখে, আর কিছু প্রোটিন (ক্লডিন-২) পানি চলাচলের পথ তৈরি করে [৪]। ক্রোনস রোগে অতিরিক্ত প্রদাহের কারণে MLCK এনজাইম সক্রিয় হয়ে কোষের পেশিকে সংকুচিত করে এবং দরজার ফাঁক বড় করে দেয় [৪]। একই সাথে শক্ত আঠালো ক্লডিন-১ নষ্ট হয়ে যায় এবং ফুটো তৈরি করা ক্লডিন-২ বেড়ে যায়; যার ফলে অন্ত্রের শক্ত দেয়ালটি ফুটো ছাঁকনিতে পরিণত হয় [৪]।'
            ),
            l(
              'This breakdown unleashes massive bacterial translocation [4]. Commensal bacterial flagellin ligates basolateral TLR5, while unmethylated CpG DNA ligates endosomal TLR9, driving dendritic cell secretion of IL-12 and IL-23 [4]. IL-12 and IL-23 drive the differentiation of naive CD4+ T cells into pathogenic Th1 (secreting IFN-gamma) and Th17 (secreting IL-17A, IL-17F, and IL-22) effector lineages that infiltrate the lamina propria, executing transmural tissue destruction [4].',
              'দেয়াল ফুটো হয়ে যাওয়ায় পেটের সমস্ত ক্ষতিকর ব্যাকটেরিয়া অন্ত্রের গভীর স্তরে ঢুকে পড়ে [৪]। ব্যাকটেরিয়ার উপাদানগুলো রোগপ্রতিরোধকারী কোষগুলোকে উত্তেজিত করে তোলে এবং রক্তে প্রচুর ক্ষতিকর Th1 ও Th17 শ্বেত রক্তকণিকা তৈরি করে [৪]। এই কোষগুলো অন্ত্রের নরম দেয়ালে একের পর এক আঘাত হেনে অন্ত্রের সব স্তর ভেদ করে গভীর ক্ষতের সৃষ্টি করে [৪]।'
            ),
            l(
              'Exclusive Enteral Nutrition (EEN) exerts its transformative mucosal healing through multi-target molecular intervention [3, 4]. EEN formulas are enriched with Transforming Growth Factor-beta (TGF-beta), which binds TGF-beta type I and II serine/threonine kinase receptors on enterocytes, stimulating Smad2/3 phosphorylation and nuclear translocation [4]. Nuclear Smad2/3 directly represses the *CLDN2* promoter (shutting down pore-forming claudin-2) while transcriptionally activating *CLDN1*, *OCLN*, and *TJP1* to reconstruct the tight junction seal [4]. Simultaneously, EEN eliminates dietary microparticles and industrial emulsifiers, allowing goblet cells to regenerate the dense inner MUC2 hydrogel layer and achieving endoscopic mucosal healing superior to any conventional immunosuppressive agent [3, 4].',
              'এক্সক্লুসিভ এন্টারাল নিউট্রিশন (EEN) এই ক্ষত সারিয়ে তোলে এক অপূর্ব সমন্বিত চিকিৎসার মাধ্যমে [৩, ৪]। এই বিশেষ তরল পুষ্টিতে প্রচুর পরিমাণে টিজিএফ-বিটা (TGF-beta) নামক সারিয়ে তোলার হরমোন থাকে যা অন্ত্রের কোষের রিসেপ্টরে গিয়ে যুক্ত হয় [৪]। এটি ফুটো তৈরি করা ক্লডিন-২ জিনকে চিরতরে বন্ধ করে দেয় এবং দেয়াল জোড়া লাগানোর আঠালো ক্লডিন-১ ও অক্লুডিন প্রোটিনের উৎপাদন বহুগুণ বাড়িয়ে দেয় [৪]। একই সাথে খাবারের বিষাক্ত প্রিজারভেটিভ বন্ধ থাকায় অন্ত্রের কোষগুলো আবার তাজা মিউকাস তৈরি করে নিজেদের পুনর্গঠন করে এবং স্টেরয়েড ছাড়াই অন্ত্র সম্পূর্ণ নতুন রূপ লাভ করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            '5. Chronobiology of FODMAP Fermentation, Visceral Afferent Mechanosensation & Reintroduction',
            '৫. ফোডম্যাপ গাঁজনের সময়গতিবিদ্যা, স্নায়বিক সংবেদনশীলতা ও খাদ্য পুনঃপ্রবর্তন'
          ),
          paragraphs: [
            l(
              'The neuro-gastroenterological architecture linking Low-FODMAP carbohydrates to irritable bowel syndrome symptoms reflects the precise biophysical translation of luminal gaseous distension into central pain perception [5, 6]. In the human colon, mechanical stretch is transduced by low-threshold and high-threshold mechanoreceptors embedded within the myenteric and submucosal plexuses of the enteric nervous system (ENS) [6]. Unmyelinated C-fiber and thinly myelinated A-delta sensory afferents travel with sympathetic and parasympathetic nerves to the dorsal root ganglia (DRG) of the spinal cord [6].',
              'আইবিএস (IBS) রোগে পেটের ব্যথার অনুভূতি কীভাবে তৈরি হয় তা পরিপাকনালীর পেশি এবং স্নায়ুতন্ত্রের নিখুঁত আণবিক যোগাযোগের মাধ্যমে ব্যাখ্যা করা যায় [৫, ৬]। বৃহদান্ত্রের দেয়ালে বিশেষ কিছু স্নায়বিক সেন্সর বসানো থাকে যা অন্ত্রের দেয়ালের টান মেপে ফেলে [৬]। এই সেন্সরগুলো সুষুম্নাকাণ্ডের মাধ্যমে সরাসরি মস্তিষ্কের ব্যথানিয়ন্ত্রণ কেন্দ্রে বার্তা পাঠায় [৬]।'
            ),
            l(
              'In patients with IBS, this sensory pathway is pathologically sensitized [6]. Mucosal biopsies from IBS patients demonstrate low-grade mucosal immune activation characterized by increased mast cell density in close physical proximity (<5 micrometers) to enteric nerve fibers [6]. Upon mild mechanical or chemical stimulation, activated mast cells degranulate, releasing histamine, tryptase, and prostaglandin E2 [6]. Histamine ligates H1 receptors on nearby nociceptors, while tryptase activates Proteinase-Activated Receptor-2 (PAR-2), phosphorylating and sensitizing the mechanosensitive ion channels Transient Receptor Potential Vanilloid-1 (TRPV1) and Piezo2 [6].',
              'আইবিএস রোগীদের ক্ষেত্রে এই স্নায়ুগুলো স্বাভাবিকের চেয়ে অনেক বেশি সংবেদনশীল হয়ে ওঠে [৬]। অন্ত্রের স্নায়ুর ঠিক পাশেই অতিরিক্ত মাস্ট সেল (Mast Cell) জড়ো হয়ে থাকে [৬]। সামান্য গ্যাস বা টান লাগলেই এই কোষগুলো হিস্টামিন ও ট্রিপটেজ নামক রাসায়নিক বোমা ফাটিয়ে দেয় [৬]। এই রাসায়নিকগুলো স্নায়ুর সেন্সরগুলোকে (TRPV1 ও Piezo2) এত বেশি উত্তেজিত করে ফেলে যে সামান্য গ্যাসের টানও রোগীর কাছে তীব্র ছুরিকাঘাতের ব্যথার মতো অনুভূত হয় [৬]।'
            ),
            l(
              'When FODMAP carbohydrates undergo rapid bacterial fermentation in the ascending colon, the acute surge in hydrogen and methane gases rapidly stretches this sensitized colonic wall [5, 6]. Mechanically activated Piezo2 and TRPV1 channels open, driving massive sodium and calcium influx that fires rapid trains of action potentials along spinal sensory afferents to the thalamus, anterior cingulate cortex, and insula, translating normal luminal distension into excruciating abdominal pain [5, 6]. Restricting high-FODMAP foods abruptly silences this mechanosensory trigger, providing rapid symptomatic relief [5].',
              'পেঁয়াজ, রসুন বা মিষ্টির ফোডম্যাপ শর্করা খাওয়ার সাথে সাথে অন্ত্রের ব্যাকটেরিয়ারা প্রচুর গ্যাস তৈরি করে অন্ত্রের দেয়াল ফুলিয়ে দেয় [৫, ৬]। এই টানের কারণে উত্তেজিত স্নায়ুগুলো বিদ্যুৎ তরঙ্গের মতো অবিরাম ব্যথার সংকেত সোজা মস্তিষ্কে পাঠাতে থাকে, যার ফলে রোগী পেটে অসহ্য মোচড় ও ব্যথায় ছটফট করেন [৫, ৬]। লো-ফোডম্যাপ ডায়েটে এই খাবারগুলো বাদ দেওয়ার সাথে সাথে অতিরিক্ত গ্যাস তৈরি বন্ধ হয় এবং ব্যথার স্নায়ুগুলো শান্ত হয়ে রোগী নিমেষেই স্বস্তি পান [৫]। '
            ),
            l(
              'However, Phase 2 (systematic reintroduction) is scientifically essential because complete long-term avoidance of prebiotic FODMAPs is metabolically harmful [5, 6]. Inulin-type fructans and galacto-oligosaccharides are the primary fuels for colonic *Bifidobacterium adolescentis* and the butyrate-producing powerhouse *Faecalibacterium prausnitzii* [5, 6]. Deprived of prebiotic substrates, luminal butyrate concentrations plummet, compromising colonocyte histone acetylation and barrier integrity [5, 6]. By systematically testing each FODMAP subgroup individually over 3-day challenge periods, clinicians identify the patient specific sensory threshold (e.g., tolerance to GOS and lactose, but intolerance to fructans), crafting a personalized Phase 3 diet that permanently eliminates only proven triggers while liberating all tolerated prebiotic fibers to preserve the colonic microbiome [5, 6].',
              'কিন্তু মনে রাখতে হবে—এই খাবারগুলো আজীবন পুরোপুরি বন্ধ রাখা কখনোই উচিত নয় [৫, ৬]। পেঁয়াজ, রসুন ও ডালের আঁশ হলো অন্ত্রের পরম বন্ধু বিফিডোব্যাকটেরিয়ার প্রধান খাবার [৫, ৬]। দীর্ঘদিন এই খাবারগুলো বন্ধ রাখলে ভালো ব্যাকটেরিয়ারা না খেয়ে মরে যায় এবং অন্ত্রের পুষ্টি উৎপাদন বন্ধ হয়ে যায় [৫, ৬]। তাই দ্বিতীয় ধাপে একে একে সব খাবার পরীক্ষা করে দেখা হয় রোগী কোনটা সহ্য করতে পারেন; এরপর যে খাবারে সমস্যা নেই তা নিয়মিত খাদ্যতালিকায় ফিরিয়ে আনা হয় এবং শুধু নির্দিষ্ট ক্ষতিকর খাবার বাদ দেওয়া হয়, যাতে অন্ত্রের বন্ধু ব্যাকটেরিয়ারা সুস্থ থাকে এবং রোগীও ব্যথামুক্ত থাকেন [৫, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            '6. High-Yield Molecular Hepatology & Gastroenterology Synthesis',
            '৬. উচ্চ গুরুত্বের আণবিক হেপাটোলজি ও গ্যাস্ট্রোএন্টারোলজি সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'Hepatic fructose clearance bypasses the phosphofructokinase-1 checkpoint via ketohexokinase-C, consuming intracellular ATP, elevating uric acid via AMP deaminase, and flooding the lower glycolytic pathway with triose phosphates [1, 2]. Intracellular triose phosphates transactivate ChREBP and SREBP-1c, accelerating hepatic de novo lipogenesis, elevating intrahepatic triglycerides, and driving metabolic dysfunction-associated steatotic liver disease (MASLD) [1, 2].',
              'লিভারে ফ্রুক্টোজ কোনো বাধা ছাড়াই KHK-C এনজাইমের মাধ্যমে এটিপি শক্তি ধ্বংস করে ইউরিক অ্যাসিড বাড়ায় এবং চর্বির কাঁচামালে লিভারকে প্লাবিত করে [১, ২]। এই উপাদানগুলো চর্বি তৈরির মাস্টার সুইচ ChREBP সক্রিয় করে প্রচুর ট্রাইগ্লিসারাইড তৈরি করে ফ্যাটি লিভার (MASLD) সৃষ্টি করে [১, ২]।'
            ),
            l(
              'The gut-liver axis coordinates hepatobiliary metabolism through bile acid activation of ileal FXR and enterocyte FGF19 secretion [1, 3]. Circulating FGF19 binds hepatic FGFR4/beta-Klotho to suppress CYP7A1 bile acid synthesis and silence lipogenic gene transcription, while TGR5 stimulation of intestinal L-cells promotes GLP-1 release [1, 3]. Gut dysbiosis impairs bile acid signaling, whereas high-fiber and polyphenol diets restore protective FXR-FGF19-TGR5 flux [1, 3].',
              'অন্ত্র ও লিভারের মধ্যে পিত্তরস এক গুরুত্বপূর্ণ সংকেত হরমোন হিসেবে কাজ করে যা অন্ত্র থেকে FGF19 হরমোন ক্ষরণ করিয়ে লিভারে চর্বি জমা বন্ধ করে এবং TGR5 রিসেপ্টরের মাধ্যমে GLP-1 বাড়িয়ে বিপাকীয় ভারসাম্য রক্ষা করে [১, ৩]। স্বাস্থ্যকর আঁশযুক্ত খাবার এই প্রাকৃতিক রক্ষা কবচকে সচল রাখে [১, ৩]।'
            ),
            l(
              'Exclusive Enteral Nutrition (EEN)—delivering 100% of caloric needs via liquid formula for 6 to 8 weeks with total solid food exclusion—induces clinical remission (80–85%) and endoscopic mucosal healing (>70%) in active Crohn disease [3, 4]. EEN eliminates mucosal-disrupting food additives, downregulates mucosal NF-kB, suppresses inflammatory cytokines (TNF-alpha, IL-1beta), upregulates TGF-beta, and restores tight junction integrity without the toxicities of corticosteroids [3, 4].',
              'ক্রোনস রোগে ৬-৮ সপ্তাহ সাধারণ খাবার পুরোপুরি বন্ধ রেখে বিশেষ তরল পুষ্টি (EEN) গ্রহণ করলে ৮০% ক্ষেত্রে অন্ত্রের আলসার ও গভীর ক্ষত শুকিয়ে যায় [৩, ৪]। এটি খাবারের ক্ষতিকর রাসায়নিক উপাদান দূর করে প্রদাহ সৃষ্টিকারী সাইটোকাইন থামিয়ে দেয় এবং স্টেরয়েড ছাড়াই অন্ত্রকে সম্পূর্ণ সুস্থ করে তোলে [৩, ৪]।'
            ),
            l(
              'In irritable bowel syndrome (IBS), poorly absorbed FODMAP carbohydrates exert small-bowel osmotic fluid shifts and undergo rapid colonic bacterial gas fermentation, triggering visceral pain in hypersensitive individuals [5, 6]. The evidence-based three-phase Low-FODMAP protocol (Restriction -> Reintroduction -> Personalization) establishes rapid symptom control while systematically reintroducing tolerated prebiotic fibers, preventing long-term colonic dysbiosis and bifidobacterial depletion [5, 6].',
              'আইবিএস (IBS) রোগে পেঁয়াজ, রসুন ও দুধের মতো অপাচ্য শর্করা অন্ত্রে গ্যাস ও ব্যথা সৃষ্টি করে [৫, ৬]। তিন-ধাপের বৈজ্ঞানিক লো-ফোডম্যাপ ডায়েট (নিয়ন্ত্রণ -> পুনঃপ্রবর্তন -> ব্যক্তিগত তালিকা) অনুসরণের মাধ্যমে পেটের সমস্ত অস্বস্তি দূর করা সম্ভব এবং সহনশীল খাবারগুলো পুনরায় চালু করে অন্ত্রের বন্ধু ব্যাকটেরিয়াকে চিরকাল সুস্থ রাখা যায় [৫, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why does dietary fructose stimulate hepatic de novo lipogenesis (DNL) and steatosis far more aggressively than glucose in metabolic dysfunction-associated steatotic liver disease (MASLD)?',
      'ফ্যাটি লিভার (MASLD) রোগে সমপরিমাণ গ্লুকোজের তুলনায় খাবারে থাকা ফ্রুক্টোজ কেন বহুগুণ বেশি দ্রুত ও ক্ষতিকরভাবে লিভারে চর্বি (DNL) তৈরি করে?'
    ),
    options: [
      l(
        'Fructose is phosphorylated by hepatic ketohexokinase-C, consuming ATP without allosteric feedback inhibition and bypassing the rate-limiting phosphofructokinase-1 checkpoint, flooding the lower glycolytic pathway with triose phosphates that transactivate ChREBP and SREBP-1c to drive lipogenesis.',
        'ফ্রুক্টোজ লিভারের KHK-C এনজাইম দ্বারা বাধাহীনভাবে ফসফোরাইলেটেড হয় যা পিএফকে-১ পাহারাদারকে সম্পূর্ণ ফাঁকি দিয়ে চর্বি তৈরির মাস্টার সুইচ ChREBP অন করে দেয় এবং এটিপি ধ্বংস করে ইউরিক অ্যাসিড ও চর্বির বন্যা বইয়ে দেয়।'
      ),
      l(
        'Fructose cannot enter hepatocytes and must be converted to ethanol in the stomach before entering the liver.',
        'ফ্রুক্টোজ লিভারে ঢুকতে পারে না এবং পাকস্থলীতে আগে অ্যালকোহলে রূপান্তরিত হয়।'
      ),
      l(
        'Fructose directly destroys the insulin gene in pancreatic beta cells, preventing any insulin synthesis.',
        'ফ্রুক্টোজ অগ্ন্যাশয়ের ইনসুলিন জিন সম্পূর্ণ ধ্বংস করে দেয়।'
      ),
      l(
        'Fructose binds irreversibly to serum albumin, turning blood into a solid gel that halts circulation.',
        'ফ্রুক্টোজ রক্তের অ্যালবুমিনের সাথে যুক্ত হয়ে রক্তকে শক্ত জেলে রূপান্তর করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Unlike glucose—whose hepatic metabolism is tightly regulated by phosphofructokinase-1 (PFK-1) via allosteric inhibition by ATP and citrate—fructose is phosphorylated by ketohexokinase-C (KHK-C). KHK-C possesses no allosteric feedback inhibition and operates with very high Vmax, consuming ATP to convert fructose into fructose-1-phosphate. Aldolase B cleaves fructose-1-phosphate directly into dihydroxyacetone phosphate (DHAP) and glyceraldehyde, completely bypassing the PFK-1 gatekeeper. The resulting surge in triose phosphates provides unregulated substrate for acetyl-CoA and glycerol-3-phosphate synthesis while metabolites activate ChREBP and SREBP-1c, accelerating hepatic de novo lipogenesis and packing ectopic triglycerides into hepatocytes.',
      'গ্লুকোজের বিপাক যেখানে পিএফকে-১ (PFK-1) এনজাইম দ্বারা কোষের শক্তি অবস্থা মেপে কঠোরভাবে নিয়ন্ত্রিত হয়, সেখানে ফ্রুক্টোজ কিটোহেক্সোকাইনেজ (KHK-C) এনজাইম দ্বারা কোনো নিয়ন্ত্রণ ছাড়াই সরাসরি ভেঙে যায়। এই এনজাইমের কোনো নিয়ন্ত্রণ সুইচ না থাকায় এটি কোষের সমস্ত এটিপি শক্তি শেষ করে ফ্রুক্টোজকে চর্বির কাঁচামালে রূপান্তর করে। এই উপাদানের বন্যায় লিভারের চর্বি তৈরির মাস্টার সুইচ ChREBP অন হয়ে যায় এবং লিভার দ্রুত চর্বির থলেতে ভরে ফ্যাটি লিভার (MASLD) তৈরি করে।'
    ),
  },
}
