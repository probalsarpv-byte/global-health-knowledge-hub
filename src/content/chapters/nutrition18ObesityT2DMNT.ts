import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const t2dRefs = [
  {
    id: 'taylor-lancet-direct-remission',
    authors: 'Roy Taylor, Michael E. J. Lean, et al.',
    title: 'Primary care-led weight management for remission of type 2 diabetes (DiRECT): an open-label, cluster-randomised trial',
    organization: 'The Lancet',
    year: 2018,
    url: 'https://doi.org/10.1016/S0140-6736(17)33102-1',
    doi: '10.1016/S0140-6736(17)33102-1',
  },
  {
    id: 'shulman-nejm-cellular-mechanisms-ir',
    authors: 'Gerald I. Shulman',
    title: 'Cellular mechanisms of insulin resistance',
    organization: 'The Journal of Clinical Investigation / NEJM',
    year: 2014,
    url: 'https://doi.org/10.1172/JCI77812',
    doi: '10.1172/JCI77812',
  },
  {
    id: 'petersen-shulman-physiol-rev-mechanisms-ir',
    authors: 'Max C. Petersen, Gerald I. Shulman',
    title: 'Mechanisms of insulin action and insulin resistance',
    organization: 'Physiological Reviews',
    year: 2018,
    url: 'https://doi.org/10.1152/physrev.00063.2017',
    doi: '10.1152/physrev.00063.2017',
  },
  {
    id: 'ada-standards-care-diabetes-mnt',
    authors: 'American Diabetes Association Professional Practice Committee',
    title: 'Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes',
    organization: 'Diabetes Care',
    year: 2024,
    url: 'https://doi.org/10.2337/dc24-S005',
    doi: '10.2337/dc24-S005',
  },
  {
    id: 'jenkins-jama-glycemic-index-cardiovasc',
    authors: 'David J. A. Jenkins et al.',
    title: 'Glycemic index: overview of significance in health and disease',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2002,
    url: 'https://doi.org/10.1093/ajcn/76.1.266S',
    doi: '10.1093/ajcn/76.1.266S',
  },
  {
    id: 'taylor-diabetes-twin-cycle-hypothesis',
    authors: 'Roy Taylor',
    title: 'Banting Lecture 2012: Reversing the twin cycles of type 2 diabetes',
    organization: 'Diabetes',
    year: 2013,
    url: 'https://doi.org/10.2337/db12-0737',
    doi: '10.2337/db12-0737',
  },
]

export const nutrition18ObesityT2DMNTLesson: LessonTopic = {
  id: 'topic.nutrition.nutrition-obesity-t2d-mnt',
  slug: 'nutrition-obesity-t2d-mnt',
  version: 1,
  updatedAt: '2026-10-25',
  title: l(
    '18 · Nutritional Management of Obesity, Insulin Resistance & Type 2 Diabetes',
    '১৮ · স্থূলতা, ইনসুলিন রেজিস্ট্যান্স ও টাইপ ২ ডায়াবেটিসের পুষ্টি ব্যবস্থাপনা'
  ),
  summary: l(
    'Molecular pathophysiological mechanisms of obesity-driven metabolic disease: adipocyte hypertrophy, crown-like structure macrophage infiltration, ectopic diacylglycerol/ceramide lipotoxicity, inhibitory IRS-1 Ser307 phosphorylation, ADA/EASD evidence-based medical nutrition therapy, and the DiRECT beta-cell remission paradigm.',
    'স্থূলতা ও ডায়াবেটিসের আণবিক শারীরবৃত্ত: চর্বি কোষের স্ফীতি, এম১ ম্যাক্রোফেজের ক্রাউন-লাইক স্ট্রাকচার গঠন, ডাইঅ্যাসাইলগ্লিসারল ও সিরামাইডের বিষক্রিয়া, আইআরএস-১ সেরিন ফসফোরাইলেশন, এডিএ/ইএএসডি নির্দেশিত পুষ্টি থেরাপি এবং ডাইরেক্ট ট্রায়ালের বিটা-কোষ পুনরুদ্ধার প্রক্রিয়া।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
  objectives: [
    l(
      'Analyze the cellular transition from healthy adipocyte hyperplasia to hypertrophic hypoxia, M1 macrophage infiltration, and systemic non-esterified fatty acid (NEFA) spillover.',
      'স্বাস্থ্যকর অ্যাডিপোসাইট বিস্তার থেকে হাইপারট্রফিক হাইপোক্সিয়া, এম১ ম্যাক্রোফেজ অনুপ্রবেশ এবং রক্তে অতিরিক্ত মুক্ত ফ্যাটি অ্যাসিড নির্গমনের কোষীয় পরিবর্তন বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Detail the molecular mechanism of lipid-induced insulin resistance: DAG-mediated novel PKC activation (PKC-theta and PKC-epsilon) and inhibitory IRS-1 serine phosphorylation uncoupling PI3K/Akt signaling.',
      'লিপিডজনিত ইনসুলিন রেজিস্ট্যান্সের আণবিক ক্রিয়া: ডিএজি দ্বারা পিকেসি সক্রিয়করণ এবং আইআরএস-১ সেরিন ফসফোরাইলেশনের মাধ্যমে পিআই৩কে/এক্ট সংকেত ব্যাহত হওয়ার প্রক্রিয়া ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Evaluate clinical evidence-based Medical Nutrition Therapy (MNT) according to ADA and EASD standards: individualized macronutrient distribution, glycemic load reduction, and viscous soluble fiber enrichment.',
      'এডিএ এবং ইএএসডি মানদণ্ড অনুযায়ী প্রমাণভিত্তিক মেডিকেল নিউট্রিশন থেরাপির মূল্যায়ন: পুষ্টি উপাদানের বিন্যাস, গ্লাইসেমিক লোড হ্রাস এবং দ্রবণীয় আঁশের ভূমিকা পর্যালোচনা করতে পারা।'
    ),
    l(
      'Deconstruct the twin-cycle hypothesis and DiRECT clinical trial protocol for type 2 diabetes remission via profound ectopic hepatic and pancreatic triacylglycerol clearance.',
      'টুইন-সাইকেল তত্ত্ব এবং ডাইরেক্ট ট্রায়ালের মাধ্যমে যকৃত ও অগ্ন্যাশয়ের ক্ষতিকর চর্বি দূর করে টাইপ ২ ডায়াবেটিস সম্পূর্ণ নিরাময়ের ক্লিনিক্যাল প্রোটোকল বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.carbohydrate-quality-gi-gl', 'topic.nutrition.satiety-neuroendocrinology-appetite'],
  relatedTopicIds: ['topic.metabolism.fed-fasted-starvation-states', 'topic.metabolism.endocrine-fuel-regulation'],
  references: t2dRefs,
  evidenceBySection: {
    introduction: ['taylor-lancet-direct-remission', 'shulman-nejm-cellular-mechanisms-ir'],
    structure: ['shulman-nejm-cellular-mechanisms-ir', 'petersen-shulman-physiol-rev-mechanisms-ir'],
    mechanism: ['petersen-shulman-physiol-rev-mechanisms-ir', 'taylor-diabetes-twin-cycle-hypothesis'],
    integration: ['ada-standards-care-diabetes-mnt', 'jenkins-jama-glycemic-index-cardiovasc'],
    practice: ['ada-standards-care-diabetes-mnt', 'taylor-lancet-direct-remission'],
    takeaways: ['taylor-lancet-direct-remission', 'taylor-diabetes-twin-cycle-hypothesis'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Adipose Tissue Expansion & Hypertrophic Hypoxia', '১. চর্বি কোষের স্ফীতি ও অক্সিজেনের ঘাটতি'), sectionId: 'introduction' },
      { id: 'sec-dag-pkc', label: l('2. Ectopic Lipotoxicity: The DAG-PKC Uncoupling Axis', '২. ক্ষতিকর চর্বি জমা: ডিএজি-পিকেসি সংকেত বিভাজন'), sectionId: 'structure' },
      { id: 'sec-hepatic', label: l('3. Hepatic Insulin Resistance & Unrestrained Gluconeogenesis', '৩. যকৃতের ইনসুলিন রেজিস্ট্যান্স ও অতিরিক্ত গ্লুকোজ উৎপাদন'), sectionId: 'mechanism' },
      { id: 'sec-mnt', label: l('4. Glycemic Index, Glycemic Load & Viscous Soluble Fiber', '৪. গ্লাইসেমিক ইনডেক্স, গ্লাইসেমিক লোড ও দ্রবণীয় আঁশ'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. The Twin-Cycle Hypothesis & DiRECT Remission Paradigm', '৫. যমজ-চক্র তত্ত্ব ও ডাইরেক্ট ট্রায়ালের রোগমুক্তি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Hypertrophic Obesity & CLS', 'হাইপারট্রফিক স্থূলতা ও ক্রাউন-লাইক স্ট্রাকচার'),
        definition: l(
          'Pathological enlargement of adipocytes beyond oxygen diffusion limits (>100 um), causing hypoxia, adipocyte necrosis, and recruitment of pro-inflammatory M1 macrophages forming Crown-Like Structures (CLS) that secrete TNF-alpha and IL-6 [1, 2].',
          'চর্বি কোষ অতিরিক্ত স্ফীত হয়ে অক্সিজেন ঘাটতিতে মারা যাওয়া এবং চারপাশ ঘিরে প্রো-ইনফ্ল্যামেটরি M1 ম্যাক্রোফেজের বলয় (CLS) তৈরি হওয়া, যা প্রদাহ সৃষ্টিকারী সাইটোকাইন নিঃসরণ করে [১, ২]।'
        ),
      },
      {
        term: l('Ectopic Lipotoxicity & sn-1,2-DAG', 'এক্টোপিক লিপিড বিষক্রিয়া ও ডিএজি'),
        definition: l(
          'Accumulation of excess non-esterified fatty acids in non-adipose organs (skeletal muscle, liver, pancreas) converted into reactive sn-1,2-diacylglycerol (DAG), which translocates and activates novel PKC isoforms [2, 3].',
          'চামড়ার নিচে চর্বি জমার জায়গা না থাকায় যকৃত, পেশি ও অগ্ন্যাশয়ে অতিরিক্ত মুক্ত চর্বি জমা হওয়া এবং সেখানে ডাইঅ্যাসাইলগ্লিসারল (DAG) তৈরির মাধ্যমে ক্ষতিকর পিকেসি (PKC) এনজাইম সক্রিয় করা [২, ৩]।'
        ),
      },
      {
        term: l('Novel PKC Isoform Uncoupling (PKC-theta / PKC-epsilon)', 'নভেল পিকেসি সংকেত বিভাজন'),
        definition: l(
          'Membrane translocation of DAG-activated PKC-theta in muscle and PKC-epsilon in liver, phosphorylating inhibitory serine residues on IRS-1 (Ser307/Ser1101) to block insulin receptor tyrosine phosphorylation and downstream PI3K/Akt/AS160 signaling [2, 3].',
          'পেশিতে PKC-theta এবং লিভারে PKC-epsilon সক্রিয় হয়ে IRS-1 প্রোটিনের সেরিন অংশে ফসফেট যুক্ত করে অকেজো করে দেয়, যার ফলে ইনসুলিনের সংকেত নষ্ট হয়ে গ্লুকোজ প্রবেশ বন্ধ হয়ে যায় [২, ৩]।'
        ),
      },
      {
        term: l('Twin-Cycle Hypothesis', 'ডায়াবেটিসের যমজ-চক্র তত্ত্ব'),
        definition: l(
          'Prof. Roy Taylor\'s mechanistic framework demonstrating that positive calorie balance drives hepatic steatosis (Cycle 1), causing excess VLDL export to the pancreas, leading to intrapancreatic fat accumulation and reversible beta-cell dedifferentiation (Cycle 2) [4, 6].',
          'অধ্যাপক রয় টেইলরের যুগান্তকারী তত্ত্ব—অতিরিক্ত ক্যালোরি প্রথমে যকৃতে চর্বি জমায় (প্রথম চক্র), যা অতিরিক্ত VLDL কণা হিসেবে অগ্ন্যাশয়ে গিয়ে বিটা-কোষকে অকেজো করে দেয় (দ্বিতীয় চক্র) [৪, ৬]।'
        ),
      },
      {
        term: l('Viscous Soluble Dietary Fiber', 'দ্রবণীয় আঠালো খাদ্যআঁশ'),
        definition: l(
          'High molecular weight, gel-forming polysaccharides (beta-glucan, psyllium, glucomannan) that increase unstirred water layer thickness in the jejunum, retarding alpha-amylase and glucose diffusion to flatten postprandial glycemic excursions [4, 5].',
          'উচ্চ আণবিক ওজনের দ্রবণীয় খাদ্যআঁশ (ওটসের বিটা-গ্লুকান, ইসবগুলের ভুসি) যা ক্ষুদ্রান্ত্রে পিচ্ছিল জেল তৈরি করে খাদ্য পরিপাক ধীর করে এবং রক্তের সুগার হঠাৎ বেড়ে যাওয়া প্রতিরোধ করে [৪, ৫]।'
        ),
      },
      {
        term: l('Diabetes Remission via Total Diet Replacement (TDR)', 'পূর্ণ পুষ্টি প্রতিস্থাপনের মাধ্যমে রোগমুক্তি'),
        definition: l(
          'Clinical achievement of HbA1c <6.5% (<48 mmol/mol) sustained for >=3 months without antidiabetic medications, mediated by rapid, profound negative energy balance (825-853 kcal/day formula) that defats the liver and rescues dormant pancreatic beta cells [1, 4, 6].',
          'ওষুধ ছাড়া রক্তের সুগার তিন মাস বা তার বেশি স্বাভাবিক সীমায় (HbA1c <৬.৫%) রাখা, যা তীব্র ক্যালোরি নিয়ন্ত্রণ (প্রতিদিন ৮২৫-৮৫৩ ক্যালোরি) দিয়ে লিভার ও অগ্ন্যাশয়ের চর্বি দূর করে অর্জন করা হয় [১, ৪, ৬]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Reversing Hepatic Steatosis & Achieving Diabetes Remission via DiRECT TDR',
          'ডাইরেক্ট টিডিআর পথ্যের মাধ্যমে যকৃতের চর্বি দূর ও ডায়াবেটিস রোগমুক্তি'
        ),
        steps: [
          l(
            'Step 1: Baseline Assessment & Negative Energy Prescription: A 52-year-old male with type 2 diabetes (weight 104 kg, BMI 33.6, HbA1c 8.2%, fasting glucose 168 mg/dL, severe hepatic steatosis on FibroScan CAP 348 dB/m) seeks drug-free remission. He is prescribed 12 weeks of Total Diet Replacement (TDR; 830 kcal/day nutritionally complete formula: 59g carbs, 83g protein, 26g fat). Baseline energy requirement is 2,420 kcal/day, creating a net deficit of 1,590 kcal/day (~11,130 kcal/week). All hypoglycemic drugs (empagliflozin) are halted on day 1 to prevent hypoglycemia and euDKA.',
            'ধাপ ১: প্রাথমিক মূল্যায়ন ও ক্যালোরি ঘাটতি নির্ধারণ: ৫২ বছর বয়সী এক পুরুষ রোগী (ওজন ১০৪ কেজি, বিএমআই ৩৩.৬, HbA1c ৮.২%, খালি পেটে গ্লুকোজ ১৬৮ মিগ্রা/ডেসিলিটার, ফাইব্রোস্ক্যানে মারাত্মক ফ্যাটি লিভার) ওষুধহীন রোগমুক্তির লক্ষ্যে এসেছেন। তাঁকে ১২ সপ্তাহের জন্য দৈনিক ৮৩০ ক্যালোরির ফর্মুলা ডায়েট দেওয়া হলো। প্রতিদিন ক্যালোরির ঘাটতি দাঁড়ায় ১,৫৯০ ক্যালোরি। তীব্র ক্যালোরি সীমাবদ্ধতার সময় হাইপোগ্লাইসেমিয়া এড়াতে প্রথম দিনেই সমস্ত ডায়াবেটিসের ওষুধ বন্ধ করা হয়।'
          ),
          l(
            'Step 2: Hepatic Defatting Kinetics: Intrahepatic triglycerides (IHTG) rapidly decline from 16.0% at baseline to <3.0% by Week 4 as the liver oxidizes local fat to meet energetic demands. Consequently, fasting hepatic glucose output plummets and fasting blood glucose normalizes to 98 mg/dL within 7 days, even off all medications. Hepatic VLDL-1 production drops by >60%, terminating excess lipid export to the pancreas.',
            'ধাপ ২: যকৃতের চর্বি দ্রুত নিরাময়: লিভারের ভেতরের ট্রাইগ্লিসারাইড মাত্র ৪ সপ্তাহের মধ্যে ১৬% থেকে কমে ৩% এর নিচে নেমে আসে। লিভার নিজের চর্বি পোড়াতে বাধ্য হওয়ায় বাড়তি গ্লুকোজ তৈরি বন্ধ হয়ে যায় এবং ওষুধ ছাড়াই মাত্র ৭ দিনে খালি পেটে সুগার ৯৮ মিগ্রা/ডেসিলিটারে স্বাভাবিক হয়। একই সাথে অগ্ন্যাশয়ের দিকে ক্ষতিকর চর্বি কণা (VLDL-1) পাঠানো ৬০% কমে যায়।'
          ),
          l(
            'Step 3: Pancreatic Defatting & Beta-Cell Redifferentiation: By Week 12, cumulative weight loss reaches 16.8 kg. Intrapancreatic fat drops from 8.5% to <5.5%. Relieved of local lipotoxicity, dedifferentiated beta cells re-express PDX-1 and GLUT2, restoring acute first-phase insulin exocytosis (0-10 min insulin peak rises from 4 to 32 uIU/mL). Fasting insulin normalizes to 8.2 uIU/mL and HOMA-IR improves from 11.6 to 1.8.',
            'ধাপ ৩: অগ্ন্যাশয়ের চর্বি মুক্তি ও বিটা-কোষের পুনরুজ্জীবন: ১২তম সপ্তাহে ওজন কমে ১৬.৮ কেজি এবং অগ্ন্যাশয়ের চর্বি ৮.৫% থেকে কমে ৫.৫% এর নিচে নামে। বিষাক্ত চর্বি দূর হওয়ায় ঘুমন্ত বিটা-কোষগুলো পুনরায় জেগে ওঠে এবং খাবার গ্রহণের সাথে সাথে দ্রুত প্রথম ধাপের ইনসুলিন ক্ষরণের ক্ষমতা ফিরে পায়। ইনসুলিন রেজিস্ট্যান্স HOMA-IR ১১.৬ থেকে নেমে স্বাভাবিক ১.৮ এ চলে আসে।'
          ),
          l(
            'Step 4: Stepped Food Reintroduction & Isocaloric Maintenance: From weeks 13-18, whole foods are reintroduced systematically, replacing one shake per week. The patient transitions to an isocaloric Mediterranean diet (45% low-glycemic carbohydrates with >=40 g fiber/day, 35% healthy fats, 20% protein) paired with 150 min/week physical activity. At 12 months, weight loss is maintained at 15.5 kg, HbA1c is 5.6% off all medications, confirming durable remission.',
            'ধাপ ৪: সুপরিকল্পিত খাদ্য পুনঃপ্রবর্তন ও দীর্ঘমেয়াদি সুস্থতা: ১৩ থেকে ১৮তম সপ্তাহে প্রতি সপ্তাহে একটি করে ফর্মুলা কমিয়ে ভূমধ্যসাগরীয় খাবার চালু করা হয় (দৈনিক ৪০ গ্রাম আঁশ সহ)। এক বছর পর দেখা গেল রোগীর ওজন ১৫.৫ কেজি কমে স্থির রয়েছে এবং কোনো ওষুধ ছাড়াই HbA1c ৫.৬%, যা আন্তর্জাতিক মানদণ্ড অনুযায়ী শতভাগ ডায়াবেটিস রোগমুক্তি নিশ্চিত করে।'
          ),
        ],
        conclusion: l(
          'Achieving >=15 kg weight loss via structured Total Diet Replacement defats the liver and pancreas, relieving ectopic lipotoxicity and rescuing dedifferentiated beta cells to achieve drug-free diabetes remission in up to 86% of compliant patients.',
          'পরিকল্পিত পূর্ণ পুষ্টি প্রতিস্থাপনের মাধ্যমে ১৫ কেজি ওজন কমাতে পারলে লিভার ও অগ্ন্যাশয় চর্বিমুক্ত হয় এবং ঘুমন্ত বিটা-কোষ জেগে উঠে ৮৬ শতাংশ পর্যন্ত রোগীর ওষুধহীন ডায়াবেটিস নিরাময় নিশ্চিত করে।'
        ),
      },
      {
        title: l(
          'Blunting Postprandial Glycemic Spikes via Viscous Soluble Fiber MNT',
          'দ্রবণীয় আঠালো খাদ্যআঁশের মাধ্যমে খাওয়ার পরের সুগার নিয়ন্ত্রণ'
        ),
        steps: [
          l(
            'Step 1: Baseline Glycemic Volatility Analysis: A 58-year-old female with central adiposity presents with Continuous Glucose Monitor (CGM) evidence of repeated postprandial glucose spikes >220 mg/dL following refined carbohydrate meals, glycemic coefficient of variation (%CV) of 38.2%, and HbA1c of 7.8% despite metformin. Her diet is low in dietary fiber (~11 g/day). Rapid gastric emptying and rapid luminal starch hydrolysis deliver a torrential glucose flux that overwhelms peripheral disposal.',
            'ধাপ ১: খাবার পরবর্তী রক্তে সুগারের অস্থিরতা বিশ্লেষণ: ৫৮ বছর বয়সী এক নারী খাওয়ার পর রক্তে সুগার ২২০ মিগ্রা/ডেসিলিটার ছাড়িয়ে যাওয়া এবং সুগারের বিপজ্জনক ওঠানামায় (%CV ৩৮.২%) ভুগছেন। মেটফরমিন খাওয়া সত্ত্বেও HbA1c ৭.৮%। তাঁর খাবারে খাদ্যআঁশ ছিল মাত্র ১১ গ্রাম। খাবার দ্রুত পরিপাক হয়ে একবারে রক্তে ঢোকায় পেশিকোষ তা সামাল দিতে পারছিল না।'
          ),
          l(
            'Step 2: Viscous Soluble Fiber Rheology & Gel Matrix Engineering: Dietary fiber is titrated to 38 g/day, including 12 g/day of viscous soluble fibers (oat beta-glucan and psyllium seed husk). In the stomach and duodenum, beta-glucan polymers hydrate into a high-viscosity viscoelastic gel matrix. This increases luminal chyme viscosity >100-fold and thickens the mucosal unstirred water layer from ~100 um to >350 um.',
            'ধাপ ২: আঠালো আঁশের সান্দ্রতা ও শোষণ প্রতিবন্ধক স্তর তৈরি: খাবারে আঁশের পরিমাণ ৩৮ গ্রামে উন্নীত করা হয়, যার মধ্যে ১২ গ্রাম ওটসের বিটা-গ্লুকান ও ইসবগুলের ভুসি থাকে। এই আঁশ অন্ত্রের তরলের সাথে মিশে অত্যন্ত ঘন ও পিচ্ছিল জেল তৈরি করে। ফলে অন্ত্রের ভেতরের তরল ১০০ গুণেরও বেশি ঘন হয় এবং অন্ত্রের শোষণ দেয়ালের প্রতিবন্ধক স্তর ১০০ থেকে বেড়ে ৩৫০ মাইক্রোমিটারে দাঁড়ায়।'
          ),
          l(
            'Step 3: Starch Entrapment & Attenuated Glucose Absorption: The viscous gel sterically entraps starch granules and pancreatic alpha-amylase, retarding polysaccharide hydrolysis. Furthermore, the thickened unstirred water layer drastically slows the passive diffusion of liberated D-glucose toward brush-border SGLT1 transporters. Gastric emptying half-time doubles from 35 to 72 minutes, blunting the 2-hour postprandial glucose peak from 228 to 134 mg/dL (-41% reduction).',
            'ধাপ ৩: পরিপাক ধীরকরণ ও রক্তে গ্লুকোজের বিস্তার হ্রাস: এই জেল শর্করার কণাকে নিজের ভেতর আটকে ফেলে এনজাইমকে সহজে ভাঙতে দেয় না। একই সাথে পুরু শোষণ স্তর ভেদ করে গ্লুকোজ দ্রুত রক্তে ঢুকতে পারে না। পাকস্থলী থেকে খাবার নামার সময় দ্বিগুণ (৩৫ থেকে ৭২ মিনিট) দীর্ঘায়িত হয় এবং খাওয়ার ২ ঘণ্টা পরের সুগার ২২৮ থেকে কমে ১৩৪ মিগ্রা/ডেসিলিটারে নামে (৪১% হ্রাস)।'
          ),
          l(
            'Step 4: Distal Incretin Stimulation & Glycemic Variability Optimization: Carbohydrate transit into the distal ileum stimulates enteroendocrine L-cells to secrete endogenous GLP-1 and PYY, enhancing glucose-dependent insulin secretion and augmenting satiety. At 8 weeks, repeat 14-day CGM shows Time-in-Range (70-180 mg/dL) increased from 62% to 94%, %CV reduced to 24.1%, and HbA1c reduced to 6.4% without adding medications.',
            'ধাপ ৪: প্রাকৃতিক ইনক্রেটিন উদ্দীপনা ও সুগারের স্থিতিশীলতা: অন্ত্রের শেষ প্রান্তে খাদ্যরস পৌঁছালে তা প্রাকৃতিক GLP-1 ও PYY হরমোনের নিঃসরণ বাড়িয়ে দেয়, যা সঠিক সময়ে ইনসুলিন ছাড়তে সাহায্য করে। ৮ সপ্তাহ পর সিজিএম পরীক্ষায় দেখা গেল সুগার স্বাভাবিক মাত্রায় থাকার সময় (Time-in-Range) ৬২% থেকে বেড়ে ৯৪% এ পৌঁছায়, সুগারের ওঠানামা (%CV) ২৪.১% এ নেমে আসে এবং কোনো বাড়তি ওষুধ ছাড়াই HbA1c কমে ৬.৪% হয়।'
          ),
        ],
        conclusion: l(
          'Prescribing 12 g/day of viscous soluble fiber (beta-glucan and psyllium) within a 38 g/day fiber dietary pattern effectively flattens postprandial glycemic spikes, expands Time-in-Range to 94%, and reduces HbA1c to 6.4% through chyme gelation and mucosal unstirred water layer thickening.',
          'দৈনিক খাবারে ১২ গ্রাম বিশুদ্ধ দ্রবণীয় আঠালো আঁশ যুক্ত করে মোট আঁশ ৩৮ গ্রামে উন্নীত করার মাধ্যমে খাবার পরের মারাত্মক সুগার বৃদ্ধি সম্পূর্ণ দূর হয়, টাইম-ইন-রেঞ্জ ৯৪%-এ পৌঁছায় এবং কোনো বাড়তি ওষুধ ছাড়াই HbA1c কমে ৬.৪%-এ নেমে আসে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'What histological and cellular event directly links chronic positive energy balance to systemic insulin resistance in hypertrophic obesity?',
          'স্থূলতায় চর্বি কোষ অস্বাভাবিক বড় হয়ে গেলে কোন আণুবীক্ষণিক ঘটনাটি সরাসরি রক্তের মাধ্যমে ছড়িয়ে পড়া ইনসুলিন রেজিস্ট্যান্সের সূত্রপাত ঘটায়?'
        ),
        answer: l(
          'When subcutaneous adipose expandability is exhausted, existing adipocytes swell beyond capillary oxygen diffusion limits (>100 um). The resulting hypoxia activates HIF-1alpha, tissue fibrosis, and adipocyte necrosis. CD11c+ M1 macrophages surround necrotic adipocytes forming Crown-Like Structures (CLS) and secrete TNF-alpha and IL-6, triggering unregulated lipolysis and flooding the circulation with NEFAs that deposit ectopically in muscle and liver.',
          'চামড়ার নিচে নতুন চর্বি কোষ তৈরির সীমা শেষ হয়ে গেলে পুরনো কোষগুলো ফুলে ১০০ মাইক্রোমিটারের বেশি বড় হয়ে যায় এবং অক্সিজেন না পেয়ে মারা যায়। এই মৃত কোষের চারপাশে ক্রাউন-লাইক স্ট্রাকচার (CLS) তৈরি করে প্রদাহ সৃষ্টিকারী ম্যাক্রোফেজ জমা হয়। এরা ক্ষতিকর সাইটোকাইন ছেড়ে চর্বি গলানোর প্রক্রিয়া অনিয়ন্ত্রিত করে ফেলে, যার ফলে রক্তে মুক্ত ফ্যাটি অ্যাসিড উপচে পড়ে লিভার ও পেশিতে বিষাক্তভাবে জমা হয়।'
        ),
      },
      {
        question: l(
          'Through what precise biochemical cascade does intracellular sn-1,2-diacylglycerol (DAG) disrupt insulin signaling in skeletal muscle?',
          'পেশিকোষে অতিরিক্ত ডাইঅ্যাসাইলগ্লিসারল (DAG) জমা হলে তা কোন রাসায়নিক ধাপে ইনসুলিনের সংকেত নষ্ট করে গ্লুকোজ গ্রহণ আটকে দেয়?'
        ),
        answer: l(
          'Cytosolic sn-1,2-DAG accumulation recruits novel PKC isoforms (PKC-theta in skeletal muscle, PKC-epsilon in liver) to the plasma membrane. Activated PKC phosphorylates key inhibitory serine residues on IRS-1 (particularly Ser307 and Ser1101). This steric modification blocks the insulin receptor tyrosine kinase from phosphorylating IRS-1 on tyrosine residues, aborting downstream PI3K activation, Akt phosphorylation, and AS160-mediated GLUT4 translocation.',
          'কোষে অতিরিক্ত DAG জমা হলে তা PKC-theta এনজাইমকে সক্রিয় করে কোষঝিল্লিতে টেনে আনে। এই সক্রিয় PKC এনজাইম IRS-1 প্রোটিনের সেরিন অংশে ফসফেট লাগিয়ে এর আকার বিকৃত করে দেয়। ফলে ইনসুলিন রিসেপ্টর আর IRS-1 এ টাইরোসিন ফসফেট যুক্ত করতে পারে না, যার কারণে PI3K এবং Akt সংকেত পুরোপুরি থমকে যায় এবং GLUT4 চ্যানেল কোষের বাইরে আসতে পারে না।'
        ),
      },
      {
        question: l(
          'What physiological transformation accounts for the 86% diabetes remission rate observed in DiRECT participants who lost >=15 kg?',
          'ডাইরেক্ট ট্রায়ালে যেসব রোগী ১৫ কেজির বেশি ওজন কমিয়েছিলেন, তাদের ৮৬% এর মধ্যে ডায়াবেটিস সম্পূর্ণ ভালো হওয়ার পেছনের মূল শারীরিক কারণ কী?'
        ),
        answer: l(
          'The DiRECT trial conclusively demonstrated that pancreatic beta cells in early type 2 diabetes (<6 years duration) are not irreversibly apoptotic, but metabolically dedifferentiated under the stress of intrapancreatic lipotoxicity. Achieving profound weight loss (>=15 kg) clears intrahepatic steatosis, stops excess VLDL-1 trafficking to the pancreas, defats the islets of Langerhans, and restores acute first-phase insulin secretion, achieving drug-free remission in up to 86% of patients.',
          'ডাইরেক্ট ট্রায়ালে প্রমাণিত হয়েছে যে ডায়াবেটিসের প্রথম কয়েক বছরে অগ্ন্যাশয়ের বিটা-কোষগুলো মারা যায় না, বরং বিষাক্ত চর্বির কারণে ঘুমিয়ে থাকে। ১৫ কেজি ওজন কমাতে পারলে লিভার ও অগ্ন্যাশয় সম্পূর্ণ চর্বিমুক্ত হয় এবং বিষক্রিয়া দূর হওয়ায় বিটা-কোষগুলো জেগে ওঠে এবং স্বাভাবিক ইনসুলিন নিঃসরণ শুরু করে ওষুধ ছাড়াই ডায়াবেটিস নিরাময় করে।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating the Progression from Adipocyte Hypertrophy to Ectopic Lipotoxicity, DAG-PKC Uncoupling, Hepatic/Pancreatic Twin Cycles, and DiRECT Remission Rescue.',
      'চর্বি কোষের স্ফীতি থেকে শুরু করে বিষাক্ত লিপিড জমা, ডিএজি-পিকেসি সংকেত বিভাজন, যমজ-চক্রের সূচনা এবং ডাইরেক্ট ট্রায়ালের মাধ্যমে রোগমুক্তির ধারাবাহিক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Subcutaneous Adipose Expandability Failure: Excess caloric intake forces existing adipocytes to hypertrophy beyond 100 um, creating cellular hypoxia, tissue fibrosis, and necrosis. M1 macrophages form Crown-Like Structures (CLS), secreting TNF-alpha and IL-6 to drive uncontrolled lipolysis and massive NEFA spillover into the systemic circulation.',
        'ধাপ ১: চর্বি কলার সম্প্রসারণ ব্যর্থতা: অতিরিক্ত ক্যালোরি চামড়ার নিচের চর্বি কোষকে অস্বাভাবিক বড় করে ফেলে। ফলে কোষে অক্সিজেনের তীব্র ঘাটতি দেখা দেয় এবং কোষগুলো ফেটে মারা যায়। মৃত কোষকে ঘিরে ম্যাক্রোফেজের বলয় (CLS) তৈরি হয় যা প্রদাহ সৃষ্টিকারী সাইটোকাইন নিঃসরণ করে রক্তে চর্বির জোয়ার বইয়ে দেয়।'
      ),
      l(
        'Step 2: Ectopic DAG-PKC Uncoupling of Insulin Signaling: Circulating NEFAs deposit in skeletal muscle and liver, accumulating as cytosolic sn-1,2-diacylglycerol (DAG). DAG activates novel PKC isoforms (PKC-theta in muscle, PKC-epsilon in liver), which phosphorylate inhibitory Ser307 on IRS-1, blocking insulin receptor tyrosine phosphorylation, aborting PI3K/Akt/AS160 signaling, and trapping GLUT4 intracellularly.',
        'ধাপ ২: ডিএজি-পিকেসি দ্বারা ইনসুলিন সংকেত বিভাজন: অতিরিক্ত চর্বি মাংসপেশি ও লিভারে জমা হয়ে ডিএজি (DAG) তৈরি করে। এই DAG কোষের ক্ষতিকর PKC এনজাইম সক্রিয় করে IRS-1 এর সেরিন অংশে ফসফেট যুক্ত করে ইনসুলিনের সংকেত নষ্ট করে দেয়। ফলে GLUT4 চ্যানেল কোষের বাইরে আসতে পারে না এবং পেশিকোষে গ্লুকোজ প্রবেশ বন্ধ হয়ে যায়।'
      ),
      l(
        'Step 3: Hepatic Steatosis & Unrestrained Gluconeogenesis (Cycle 1): In hepatocytes, DAG-PKC-epsilon activation prevents Akt2 from phosphorylating FOXO1. Unphosphorylated FOXO1 translocates to the nucleus, driving unrestrained transcription of gluconeogenic PEPCK and G6Pase to elevate fasting glucose. Concurrently, SREBP-1c remains active, driving de novo lipogenesis and packaging fat into VLDL-1 particles exported to the pancreas.',
        'ধাপ ৩: যকৃতের চর্বি ও অনিয়ন্ত্রিত গ্লুকোজ উৎপাদন (প্রথম চক্র): যকৃতে DAG-PKC এর কারণে FOXO1 প্রোটিন নিউক্লিয়াসে গিয়ে অনিয়ন্ত্রিতভাবে গ্লুকোজ তৈরি করতে থাকে, ফলে খালি পেটে সুগার মারাত্মক বেড়ে যায়। একই সাথে লিভার অতিরিক্ত চর্বি তৈরি করে VLDL কণা হিসেবে রক্তে পাঠায় যা সরাসরি অগ্ন্যাশয়ের দিকে ছুটে যায়।'
      ),
      l(
        'Step 4: Intrapancreatic Steatosis, Beta-Cell Dedifferentiation & DiRECT Rescue (Cycle 2): VLDL-1 delivers excess fat to the islets of Langerhans, causing intrapancreatic fat accumulation and beta-cell dedifferentiation, abolishing first-phase insulin secretion. Sustained negative energy balance (DiRECT TDR, >=15 kg weight loss) defats the liver and pancreas, relieving lipotoxicity and resurrecting beta-cell function for complete diabetes remission.',
        'ধাপ ৪: অগ্ন্যাশয়ের চর্বি, ঘুমন্ত বিটা-কোষ ও রোগমুক্তি (দ্বিতীয় চক্র): রক্তের VLDL কণা অগ্ন্যাশয়ে চর্বি জমিয়ে বিটা-কোষগুলোকে ঘুম পাড়িয়ে দেয় (Dedifferentiation), ফলে ইনসুলিন ক্ষরণ বন্ধ হয়ে ডায়াবেটিস দেখা দেয়। তবে কঠোর ক্যালোরি নিয়ন্ত্রণ (ডাইরেক্ট ট্রায়ালের মতো ১৫ কেজি ওজন হ্রাস) লিভার ও অগ্ন্যাশয়কে সম্পূর্ণ চর্বিমুক্ত করে এবং ঘুমন্ত বিটা-কোষকে জাগিয়ে তুলে রোগমুক্তি ঘটায়।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 't2d-mnt-twin-cycles',
    title: l(
      'Pathophysiology of T2D & DiRECT Remission Rescue',
      'টাইপ ২ ডায়াবেটিসের প্যাথোফিজিওলজি ও ডাইরেক্ট রোগমুক্তি'
    ),
    description: l(
      'Interactive molecular pathway detailing adipocyte hypertrophy, ectopic DAG-PKC uncoupling, hepatic FOXO1 activation, pancreatic steatosis, and DiRECT beta-cell rescue.',
      'চর্বি কোষের স্ফীতি, এক্টোপিক ডিএজি-পিকেসি সংকেত বিভাজন, যকৃতের ফক্সও১ সক্রিয়তা, অগ্ন্যাশয়ে চর্বি জমা এবং ডাইরেক্ট ট্রায়ালের রোগমুক্তির মিথস্ক্রিয় চিত্র।'
    ),
    disclaimer: l(
      'Educational metabolic simulation; therapeutic diabetes management requires individualized medical supervision.',
      'বিপাকীয় শিক্ষামূলক সিমুলেশন; ডায়াবেটিসের যেকোনো চিকিৎসায় চিকিৎসকের পরামর্শ গ্রহণ করুন।'
    ),
    svgType: 'metabolic-pathway',
    items: [
      {
        id: 'node-hypertrophy',
        label: l('Adipocyte Hypertrophy & Hypoxia', 'চর্বি কোষের স্ফীতি ও অক্সিজেনের অভাব'),
        description: l(
          'Adipocytes exceed 100 um diffusion limit, undergo cellular necrosis, and form Crown-Like Structures (CLS) with M1 macrophages, triggering unrestrained lipolysis and systemic NEFA spillover.',
          'চর্বি কোষ ফুলে ১০০ মাইক্রোমিটার ছাড়িয়ে যায়, অক্সিজেন না পেয়ে মারা যায় এবং ম্যাক্রোফেজের বলয় (CLS) তৈরি করে রক্তে প্রচুর মুক্ত ফ্যাটি অ্যাসিড উপচে দেয়।'
        ),
        details: l(
          'HIF-1alpha activation drives adipose fibrosis; TNF-alpha and IL-6 stimulate hormone-sensitive lipase, flooding muscle and liver with non-esterified fatty acids.',
          'অক্সিজেনের অভাবে ফাইব্রোসিস ঘটে; প্রদাহজনিত সাইটোকাইন চর্বি গলানো অনিয়ন্ত্রিত করে লিভার ও পেশিতে অতিরিক্ত চর্বি ঠেলে দেয়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 30, y: 35, width: 200, height: 48 },
      },
      {
        id: 'node-dag-pkc',
        label: l('Ectopic sn-1,2-DAG & Novel PKC', 'কোষে ডিএজি ও পিকেসি এনজাইম'),
        description: l(
          'Intracellular accumulation of DAG in skeletal muscle and liver activates novel PKC-theta and PKC-epsilon, uncoupling downstream insulin signaling.',
          'পেশি ও লিভারে অতিরিক্ত DAG জমে PKC-theta ও PKC-epsilon এনজাইম সক্রিয় করে এবং ইনসুলিনের সংকেত নষ্ট করে দেয়।'
        ),
        details: l(
          'Activated PKC-theta phosphorylates IRS-1 on Ser307/Ser1101, sterically blocking insulin receptor tyrosine phosphorylation and halting PI3K/Akt/AS160-driven GLUT4 translocation.',
          'PKC এনজাইম IRS-1 এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে টাইরোসিন ফসফোরাইলেশন বন্ধ করে দেয়, ফলে GLUT4 চ্যানেল কোষঝিল্লিতে আসতে পারে না।'
        ),
        color: '#f97316',
        svgCoords: { x: 250, y: 35, width: 200, height: 48 },
      },
      {
        id: 'node-hepatic-foxto1',
        label: l('Hepatic Steatosis & FOXO1 Activation', 'লিভারের চর্বি ও ফক্সও১ সক্রিয়তা'),
        description: l(
          'DAG-PKC-epsilon uncoupling prevents Akt2 phosphorylation of FOXO1, leaving FOXO1 active in the nucleus to drive continuous transcription of gluconeogenic enzymes.',
          'লিভারে Akt2 সংকেত বন্ধ হয়ে যাওয়ায় FOXO1 প্রোটিন নিউক্লিয়াসে গিয়ে অনিয়ন্ত্রিতভাবে গ্লুকোজ তৈরির এনজাইম তৈরি করতে থাকে।'
        ),
        details: l(
          'Unrestrained PEPCK and Glucose-6-Phosphatase activity drives excessive hepatic glucose production; persistent SREBP-1c drives VLDL-1 overproduction.',
          'লিভার খালি পেটে প্রচুর বাড়তি গ্লুকোজ তৈরি করে রক্তে ছাড়ে; একই সাথে অতিরিক্ত চর্বি তৈরি করে VLDL কণা হিসেবে অগ্ন্যাশয়ে পাঠায়।'
        ),
        color: '#eab308',
        svgCoords: { x: 470, y: 35, width: 200, height: 48 },
      },
      {
        id: 'node-pancreatic-steatosis',
        label: l('Intrapancreatic Fat & Beta-Cell Dormancy', 'অগ্ন্যাশয়ে চর্বি ও ঘুমন্ত বিটা-কোষ'),
        description: l(
          'Chronic VLDL-1 delivery elevates intrapancreatic fat content, exposing beta cells to lipotoxic stress and causing phenotypic dedifferentiation.',
          'লিভার থেকে আসা অতিরিক্ত VLDL কণা অগ্ন্যাশয়ে চর্বি জমিয়ে বিটা-কোষগুলোকে নিষ্ক্রিয় বা ঘুমন্ত অবস্থায় পাঠিয়ে দেয়।'
        ),
        details: l(
          'Beta cells lose mature markers (PDX-1, MafA) and acute first-phase insulin exocytosis is lost, precipitating overt clinical type 2 diabetes.',
          'বিটা-কোষের পরিপক্কতা নষ্ট হয় এবং খাবার খাওয়ার পর প্রথম ধাপের দ্রুত ইনসুলিন নিঃসরণ পুরোপুরি বন্ধ হয়ে ডায়াবেটিস শুরু হয়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 190, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-direct-remission',
        label: l('DiRECT Remission Rescue', 'ডাইরেক্ট ট্রায়াল রোগমুক্তি'),
        description: l(
          'Sustained hypocaloric energy deficit clears ectopic hepatic and pancreatic triglycerides, restoring beta-cell function and achieving drug-free diabetes remission.',
          'কঠোর ক্যালোরি নিয়ন্ত্রণের মাধ্যমে লিভার ও অগ্ন্যাশয়ের চর্বি দূর হয়; ফলে বিটা-কোষ আবার সচল হয়ে কোনো ওষুধ ছাড়াই ডায়াবেটিস ভালো হয়ে যায়।'
        ),
        details: l(
          'Achieving >=15 kg weight loss defats liver (<2% steatosis) and pancreas, rescuing dormant beta cells to achieve drug-free remission (HbA1c <6.5%).',
          '১৫ কেজি ওজন কমাতে পারলে লিভার ও অগ্ন্যাশয়ের চর্বি গলে যায় এবং ঘুমন্ত বিটা-কোষ জেগে উঠে কোনো ওষুধ ছাড়াই ডায়াবেটিস ভালো করে।'
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
          heading: l('1. Adipose Tissue Expansion & Hypertrophic Hypoxia', '১. চর্বি কোষের স্ফীতি ও অক্সিজেনের ঘাটতি'),
          paragraphs: [
            l(
              'The pathophysiological nexus linking chronic obesity to metabolic disease originates in the failure of healthy adipose tissue expansion [1, 2]. Adipose tissue is not an inert storage depot; it is an active endocrine organ that secretes signaling adipokines (leptin, adiponectin) and coordinates systemic lipid storage [1, 2]. Under conditions of chronic positive energy balance, adipose tissue must expand to store surplus triglycerides [1, 2]. In healthy physiological expansion, adipose tissue expands through hyperplasia: the recruitment and differentiation of pre-adipocytes into numerous small, insulin-sensitive adipocytes supported by robust capillary angiogenesis [1, 2].',
              'স্থূলতা এবং ডায়াবেটিসের মূল সংযোগ তৈরি হয় চর্বি কলার অস্বাভাবিক বৃদ্ধির ব্যর্থতার কারণে [১, ২]। মানুষের চর্বি কলা কেবল চর্বি জমার নিষ্ক্রিয় কোনো ভাণ্ডার নয়; এটি একটি অত্যন্ত সংবেদনশীল হরমোন নিঃসরণকারী অঙ্গ যা লেপটিন ও এডিপোনেকটিনের মতো গুরুত্বপূর্ণ হরমোন তৈরি করে [১, ২]। অতিরিক্ত ক্যালোরি গ্রহণ করলে শরীরকে এই চর্বি জমা রাখার জন্য চর্বি কলাকে বড় করতে হয় [১, ২]। সুস্থ শরীরে এটি ঘটে হাইপারপ্লাসিয়া প্রক্রিয়ায়: অর্থাৎ নতুন নতুন ক্ষুদ্র রক্তনালী তৈরির সাথে সাথে প্রচুর নতুন ছোট ছোট স্বাস্থ্যকর চর্বি কোষ তৈরি হয় যা ইনসুলিনের প্রতি অত্যন্ত সংবেদনশীল থাকে [১, ২]।'
            ),
            l(
              'When the genetic threshold for adipocyte hyperplasia is exceeded (the subcutaneous adipose expandability limit), adipose tissue is forced to expand through hypertrophy: the pathological enlargement of existing adipocytes beyond 100 to 150 micrometers in diameter [2]. As individual adipocytes swell, their enlarged spherical volume exceeds the effective diffusion limit of oxygen from surrounding capillary beds (~100 micrometers) [2]. The resulting cellular hypoxia activates Hypoxia-Inducible Factor-1alpha (HIF-1alpha), which stimulates excessive extracellular matrix collagen deposition, causing tissue fibrosis and mechanical stress [1, 2].',
              'যখন চামড়ার নিচের চর্বি কোষের নতুন নতুন কোষ তৈরির বংশগত ক্ষমতা শেষ হয়ে যায়, তখন থাকা কোষগুলোই অস্বাভাবিকভাবে ফুলে স্ফীত হতে শুরু করে (হাইপারট্রফি), যার ব্যাস ১০০ থেকে ১৫০ মাইক্রোমিটার ছাড়িয়ে যায় [২]। চর্বি কোষ অতিরিক্ত বড় হয়ে গেলে রক্তনালী থেকে অক্সিজেন কোষের কেন্দ্রে পৌঁছাতে পারে না [২]। এর ফলে কোষের ভেতরে তীব্র অক্সিজেনের ঘাটতি দেখা দেয় এবং HIF-1alpha প্রোটিন সক্রিয় হয়ে কোষে ফাইব্রোসিস বা শক্ত আঁশের সৃষ্টি করে কোষের স্বাভাবিক কার্যক্ষমতা নষ্ট করে ফেলে [১, ২]।'
            ),
            l(
              'Hypoxic, fibrotic adipocytes enter an unresolvable state of cellular stress, activating pro-apoptotic cascades that culminate in adipocyte necrosis [2]. Dying adipocytes release intracellular contents, including free fatty acids and damage-associated molecular patterns (DAMPs), into the interstitial space [1, 2]. In response, circulating monocytes are recruited into the adipose tissue and differentiate into CD11c+ pro-inflammatory M1 macrophages [2]. These macrophages physically encircle the necrotic adipocytes in distinctive histological arrangements termed Crown-Like Structures (CLS), scavenging lipid remnants and secreting high concentrations of inflammatory cytokines, including Tumor Necrosis Factor-alpha (TNF-alpha), Interleukin-6 (IL-6), and Monocyte Chemoattractant Protein-1 (MCP-1) [2].',
              'অক্সিজেনের অভাবে এই অস্বাভাবিক ফোলা চর্বি কোষগুলো ধীরে ধীরে মারা যেতে শুরু করে [২]। মৃত কোষগুলো ফেটে গিয়ে ভেতরের চর্বি ও ক্ষতিকর রাসায়নিক উপাদান আশেপাশে ছড়িয়ে দেয় [১, ২]। এই মৃত কোষ পরিষ্কার করার জন্য শরীরের রোগপ্রতিরোধকারী শ্বেত রক্তকণিকা (M1 ম্যাক্রোফেজ) সেখানে এসে জড়ো হয় [২]। এই ম্যাক্রোফেজগুলো মৃত চর্বি কোষকে বৃত্তাকারে ঘিরে ফেলে এক বিশেষ আণুবীক্ষণিক গঠন তৈরি করে যাকে ক্রাউন-লাইক স্ট্রাকচার (CLS) বলা হয় [২]। এরা মৃত কোষ পরিষ্কার করার সময় বিপুল পরিমাণে প্রদাহ সৃষ্টিকারী ক্ষতিকর সাইটোকাইন (TNF-alpha ও IL-6) রক্তে ঢেলে দেয় [২]।'
            ),
            l(
              'Inflammatory cytokines directly impair adipose insulin signaling by activating lipases, causing uncontrolled lipolysis of stored triglycerides [2]. Consequently, hypertrophic adipose tissue leaks a massive, unregulated flood of non-esterified fatty acids (NEFAs) into the systemic circulation [2]. Unable to be safely sequestered in subcutaneous adipose depots, these circulating NEFAs spill over into non-adipose organs: skeletal muscle, liver, and pancreatic beta cells [2]. This ectopic lipid deposition initiates the lipotoxic cascades that drive peripheral insulin resistance, systemic hyperglycemia, and overt type 2 diabetes [1, 2].',
              'এই প্রদাহ সৃষ্টিকারী সাইটোকাইনগুলো চর্বি কোষের ভেতর সংরক্ষিত চর্বি গলানোর প্রক্রিয়া অনিয়ন্ত্রিতভাবে বাড়িয়ে দেয় [২]। এর ফলে চর্বি কোষ থেকে রক্তে মুক্ত ফ্যাটি অ্যাসিডের (NEFA) এক বাঁধভাঙা জোয়ার বয়ে যায় [২]। চামড়ার নিচের চর্বি কলায় আর জায়গা না থাকায় এই মুক্ত চর্বিগুলো সরাসরি মাংসপেশি, যকৃত এবং অগ্ন্যাশয়ের বিটা-কোষের ভেতরে গিয়ে বিষাক্তভাবে জমা হতে শুরু করে [২]। এই অস্বাভাবিক জায়গায় চর্বি জমার কারণেই ইনসুলিন রেজিস্ট্যান্স এবং টাইপ ২ ডায়াবেটিসের সূত্রপাত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Ectopic Lipotoxicity: The DAG-PKC Uncoupling Axis', '২. ক্ষতিকর চর্বি জমা: ডিএজি-পিকেসি সংকেত বিভাজন'),
          paragraphs: [
            l(
              'The molecular etiology of lipid-induced insulin resistance represents a transformative paradigm shift in metabolic endocrinology [2, 3]. Historically, insulin resistance was attributed to glucose-fatty acid competition (the Randle cycle), wherein fatty acid oxidation supposedly inhibited pyruvate dehydrogenase and glycolytic enzymes [3]. Modern intracellular metabolic flux studies and magnetic resonance spectroscopy (MRS) have completely overturned this model, demonstrating that fatty acids induce insulin resistance not by inhibiting glycolysis, but by directly blocking insulin-stimulated glucose transport into the cell [2, 3].',
              'চর্বির কারণে ইনসুলিন রেজিস্ট্যান্স তৈরির আণবিক ব্যাখ্যা আধুনিক এন্ডোক্রাইনোলজির অন্যতম শ্রেষ্ঠ আবিষ্কার [২, ৩]। অতীতে ধারণা করা হতো যে চর্বি পুড়লে গ্লুকোজ পোড়ানো বন্ধ হয়ে যায় (র‍্যান্ডেল সাইকেল) [৩]। কিন্তু আধুনিক এমআরআই ও মেটাবলিক গবেষণায় প্রমাণিত হয়েছে যে এই ধারণাটি সম্পূর্ণ ভুল ছিল; অতিরিক্ত চর্বি মূলত কোষে গ্লুকোজ পোড়ানো বন্ধ করে না, বরং ইনসুলিনের সংকেত নষ্ট করে কোষে গ্লুকোজ প্রবেশের প্রধান দরজাই বন্ধ করে দেয় [২, ৩]।'
            ),
            l(
              'When the delivery of non-esterified fatty acids to skeletal muscle exceeds the capacity for mitochondrial beta-oxidation and neutral triacylglycerol droplet formation, reactive lipid intermediates accumulate in the cytoplasm [2, 3]. Rather than intact triglycerides, the definitive biochemical culprit driving insulin resistance is sn-1,2-diacylglycerol (DAG) [2, 3]. Cytosolic DAG binds with high affinity to the C1 regulatory domain of novel protein kinase C isoforms—predominantly PKC-theta in skeletal muscle and PKC-epsilon in hepatocytes—triggering their conformational activation and translocation to the plasma membrane [2, 3].',
              'যখন মাংসপেশিতে অতিরিক্ত চর্বি এসে পৌঁছায় যা কোষের মাইটোকন্ড্রিয়া পুড়িয়ে শেষ করতে পারে না, তখন কোষের ভেতরে মধ্যবর্তী রাসায়নিক উপাদান তৈরি হয় [২, ৩]। গবেষণায় দেখা গেছে সম্পূর্ণ চর্বি বা ট্রাইগ্লিসারাইড নিজে কোনো ক্ষতি করে না; মূল বিষাক্ত অপরাধী হলো sn-1,2-ডাইঅ্যাসাইলগ্লিসারল (DAG) [২, ৩]। এই DAG অণু মাংসপেশির PKC-theta এবং লিভারের PKC-epsilon নামের বিশেষ এনজাইমের সাথে যুক্ত হয়ে এদের মারাত্মকভাবে সক্রিয় করে তোলে এবং এদেরকে কোষঝিল্লিতে টেনে নিয়ে আসে [২, ৩]।'
            ),
            l(
              'Once localized to the membrane, activated PKC-theta phosphorylates specific inhibitory serine and threonine residues on Insulin Receptor Substrate-1 (IRS-1), with Ser307 and Ser1101 being the best characterized inhibitory sites [2, 3]. Under normal conditions, insulin binding to the extracellular alpha-subunits of the insulin receptor induces trans-autophosphorylation of beta-subunit tyrosine residues, which recruit IRS-1 and phosphorylate it on tyrosine residues [3]. However, PKC-mediated serine phosphorylation sterically alters IRS-1 conformation, completely preventing the insulin receptor tyrosine kinase from accessing and phosphorylating IRS-1 [2, 3].',
              'কোষঝিল্লিতে এসে এই সক্রিয় PKC-theta এনজাইম ইনসুলিন সংকেত পরিবাহী IRS-1 প্রোটিনের সেরিন অংশে (বিশেষ করে সেরিন-৩০৭ ও সেরিন-১১০১ স্থানে) ফসফেট যুক্ত করে [২, ৩]। সুস্থ শরীরে ইনসুলিন রিসেপ্টরে বসলে টাইরোসিন ফসফোরাইলেশনের মাধ্যমে সংকেত ভেতরে যায় [৩]। কিন্তু PKC যখন আগেই সেরিন অংশে ফসফেট লাগিয়ে দেয়, তখন ইনসুলিন রিসেপ্টর আর IRS-1 প্রোটিনকে স্পর্শ করতে পারে না এবং সংকেতের প্রবাহ শুরুতেই বিচ্ছিন্ন হয়ে যায় [২, ৩]।'
            ),
            l(
              'Without tyrosine-phosphorylated IRS-1, the downstream signaling cascade—comprising Phosphoinositide 3-Kinase (PI3K), Phosphoinositide-Dependent Kinase-1 (PDK1), protein kinase B (Akt2), and the Akt substrate of 160 kDa (AS160)—remains unactivated [3]. Consequently, intracellular vesicles containing Glucose Transporter 4 (GLUT4) are unable to translocate to and fuse with the plasma membrane [3]. Skeletal muscle, which normally accounts for over 80% of postprandial glucose disposal, becomes blind to circulating insulin [3]. Glucose remains trapped in the bloodstream, producing systemic postprandial hyperglycemia and placing compensatory hyperinsulinemic stress on the pancreatic beta cells [2, 3].',
              'IRS-1 সক্রিয় না হতে পারলে কোষের ভেতরের পরবর্তী সংকেতবাহী PI3K এবং Akt2 প্রোটিন ঘুমন্ত রয়ে যায় [৩]। ফলে কোষের ভেতরে আটকে থাকা GLUT4 গ্লুকোজ চ্যানেলগুলো কোষের উপরিভাগে ভেসে উঠতে পারে না [৩]। আমাদের শরীরের ৮০ শতাংশ গ্লুকোজ মাংসপেশিতে প্রবেশ করার কথা ছিল, কিন্তু ইনসুলিন রেজিস্ট্যান্সের কারণে পেশিকোষগুলো ইনসুলিনের প্রতি সম্পূর্ণ অন্ধ হয়ে যায় [৩]। রক্তে গ্লুকোজের বন্যা বয়ে যায় এবং শরীর তা সামাল দিতে অগ্ন্যাশয়ের ওপর অতিরিক্ত ইনসুলিন তৈরির তীব্র চাপ সৃষ্টি করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Hepatic Insulin Resistance & Unrestrained Gluconeogenesis', '৩. যকৃতের ইনসুলিন রেজিস্ট্যান্স ও অতিরিক্ত গ্লুকোজ উৎপাদন'),
          paragraphs: [
            l(
              'In the liver, an analogous ectopic lipotoxic mechanism uncouples insulin signaling, with catastrophic consequences for fasting glucose homeostasis [2, 3]. In healthy physiology, portal insulin suppresses hepatic glucose production (HGP) through a coordinated transcriptional and enzymatic network [3]. Insulin-activated Akt2 phosphorylates the master forkhead box transcription factor FOXO1 at three specific regulatory sites (Thr24, Ser256, and Ser319) [3]. Phosphorylated FOXO1 binds to 14-3-3 chaperone proteins, which export FOXO1 from the nucleus into the cytoplasm, where it undergoes proteasomal degradation [3].',
              'যকৃতে বা লিভারেও একইভাবে চর্বি জমার কারণে ইনসুলিনের সংকেত নষ্ট হয়, যা খালি পেটে রক্তে সুগারের মাত্রা বাড়িয়ে দেওয়ার মূল কারণ [২, ৩]। সুস্থ শরীরে খাবার গ্রহণের পর ইনসুলিন লিভারকে নতুন গ্লুকোজ তৈরি করতে নিষেধ করে [৩]। ইনসুলিনের সক্রিয় করা Akt2 এনজাইম FOXO1 নামের বিশেষ জিন নিয়ন্ত্রক প্রোটিনের গায়ে ফসফেট লাগিয়ে দেয় [৩]। এর ফলে FOXO1 প্রোটিনটি নিউক্লিয়াস থেকে বিতাড়িত হয়ে সাইটোপ্লাজমে চলে আসে এবং সেখানে ধ্বংস হয়ে যায় [৩]।'
            ),
            l(
              'When hepatocytes accumulate excess sn-1,2-DAG from elevated circulating NEFAs and de novo lipogenesis, the liver-specific novel PKC isoform, PKC-epsilon, is recruited to the plasma membrane and activated [2, 3]. PKC-epsilon directly phosphorylates the insulin receptor kinase domain (Thr1160), inhibiting its catalytic tyrosine kinase activity and preventing downstream IRS-2 and Akt2 activation [2, 3]. Lacking Akt2-mediated inhibitory phosphorylation, FOXO1 remains unphosphorylated and constitutively active within the hepatocyte nucleus [2, 3].',
              'কিন্তু যখন লিভার কোষে অতিরিক্ত DAG জমে, তখন লিভারের নিজস্ব PKC-epsilon এনজাইম সক্রিয় হয়ে ইনসুলিন রিসেপ্টরকে অকেজো করে দেয় [২, ৩]। ফলে Akt2 এনজাইম আর কাজ করতে পারে না এবং FOXO1 প্রোটিন অবিকৃত অবস্থায় লিভার কোষের নিউক্লিয়াসের ভেতরে বহাল তবিয়তে থেকে যায় [২, ৩]।'
            ),
            l(
              'Constitutively active nuclear FOXO1 binds to insulin response elements in promoter regions, driving relentless, unrestrained transcription of key gluconeogenic enzymes: Phosphoenolpyruvate Carboxykinase (PEPCK) and Glucose-6-Phosphatase (G6Pase) [2, 3]. Even in the presence of severe hyperinsulinemia, the insulin-resistant liver continues to synthesize and export de novo glucose into the systemic circulation at rates exceeding 2.0 mg/kg/min [2, 3]. This failure of insulin to suppress hepatic gluconeogenesis is the primary pathophysiological driver of elevated Fasting Plasma Glucose (FPG) in individuals with prediabetes and type 2 diabetes [2, 3].',
              'নিউক্লিয়াসের ভেতর সক্রিয় থাকা এই FOXO1 প্রোটিন গ্লুকোজ তৈরির প্রধান দুটি এনজাইমের (PEPCK এবং Glucose-6-Phosphatase) উৎপাদন বাঁধভাঙা গতিতে বাড়িয়ে দেয় [২, ৩]। রক্তে প্রচুর ইনসুলিন থাকা সত্ত্বেও ইনসুলিন-প্রতিরোধী লিভার প্রতি মিনিটে দেদারসে নতুন নতুন গ্লুকোজ তৈরি করে রক্তে ঢালতে থাকে [২, ৩]। এই কারণেই ডায়াবেটিস রোগীদের রাতে কিছু না খেয়ে থাকা সত্ত্বেও সকালে খালি পেটে রক্তের সুগার অনেক বেশি থাকে [২, ৩]।'
            ),
            l(
              'Crucially, hepatic insulin resistance is pathologically "selective" [2, 3]. While insulin fails to suppress FOXO1-driven gluconeogenesis, it retains its ability to stimulate Sterol Regulatory Element-Binding Protein-1c (SREBP-1c) through an atypical, non-Akt pathway [3]. Driven by high ambient insulin and abundant substrate, SREBP-1c upregulates lipogenic enzymes (acetyl-CoA carboxylase, fatty acid synthase), accelerating hepatic de novo lipogenesis (DNL) [2, 3]. The liver thus becomes a biochemical trap: simultaneously synthesizing excess glucose and packaging excess lipids into large, triglyceride-rich VLDL-1 particles [2, 3].',
              'লিভারের এই ইনসুলিন রেজিস্ট্যান্সের একটি অদ্ভুত দ্বিমুখী বৈশিষ্ট্য রয়েছে [২, ৩]। ইনসুলিন যেখানে গ্লুকোজ তৈরি বন্ধ করতে সম্পূর্ণ ব্যর্থ হয়, সেখানে কিন্তু চর্বি তৈরির সংকেত (SREBP-1c) ঠিকই সচল থাকে [৩]। রক্তে থাকা অতিরিক্ত ইনসুলিনের কারণে লিভার অবিরাম নতুন চর্বি তৈরি করতে থাকে (De Novo Lipogenesis) [২, ৩]। এর ফলে লিভার একই সাথে রক্তে প্রচুর চিনি ছাড়ে এবং বাড়তি চর্বিগুলোকে ক্ষতিকর VLDL কণা হিসেবে রক্তে পাঠায়, যা ডায়াবেটিসকে আরও জটিল করে তোলে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Glycemic Index, Glycemic Load & Viscous Soluble Fiber', '৪. গ্লাইসেমিক ইনডেক্স, গ্লাইসেমিক লোড ও দ্রবণীয় আঁশ'),
          paragraphs: [
            l(
              'Evidence-based Medical Nutrition Therapy (MNT) leverages carbohydrate qualitative kinetics to blunt postprandial glycemic excursions and reduce insulin demand [4, 5]. Developed by David Jenkins at the University of Toronto, the Glycemic Index (GI) ranks carbohydrate-containing foods on a scale from 0 to 100 based on the incremental Area Under the blood glucose response Curve (iAUC) over 2 hours relative to an equal carbohydrate amount of pure D-glucose (GI = 100) or white bread [5]. Low-GI foods (<=55) produce gradual, modest glycemic rises, whereas high-GI foods (>=70) trigger rapid spikes in blood glucose and compensatory insulin secretion [4, 5].',
              'প্রমাণভিত্তিক পুষ্টি থেরাপিতে কার্বোহাইড্রেটের গুণগত মান পরিবর্তনের মাধ্যমে খাবার পরের সুগার নিয়ন্ত্রণ করা হয় [৪, ৫]। টরন্টো বিশ্ববিদ্যালয়ের অধ্যাপক ডেভিড জেনকিন্স গ্লাইসেমিক ইনডেক্স (GI) ধারণাটি আবিষ্কার করেন, যা কোনো খাবারের ৫০ গ্রাম শর্করা খাওয়ার পর রক্তে সুগার কতটা দ্রুত বাড়ে তা বিশুদ্ধ গ্লুকোজের (১০০) সাথে তুলনা করে ০ থেকে ১০০ স্কেলে প্রকাশ করে [৫]। কম জিআই যুক্ত খাবার (৫৫ বা তার কম) রক্তে খুব ধীরে ধীরে সুগার বাড়ায়, আর উচ্চ জিআই খাবার (৭০ বা তার বেশি) রক্তে সুগারের মারাত্মক ঢেউ তোলে [৪, ৫]।'
            ),
            l(
              'While GI reflects carbohydrate absorption velocity, Glycemic Load (GL) integrates both qualitative absorption kinetics and quantitative portion size: GL = [GI x available carbohydrate (g)] / 100 [4, 5]. For example, watermelon has a high GI (~72), but because a standard 120 g serving contains only 6 g of available carbohydrate, its GL is low (~4.3) [5]. Conversely, a 150 g serving of white rice has a high GI (~73) and a high carbohydrate payload (42 g), yielding a high GL of 30.7 [5]. Clinical trials establish that reducing total dietary Glycemic Load (<80/day) significantly lowers glycated hemoglobin (HbA1c) by 0.4% to 0.7%, an effect size comparable to first-line oral antidiabetic agents [4, 5].',
              'গ্লাইসেমিক ইনডেক্স শোষণের গতি নির্দেশ করলেও, গ্লাইসেমিক লোড (GL) মূলত খাবারের পরিমাণের সাথে গতির সমন্বয় করে: GL = [GI x শর্করার পরিমাণ (গ্রাম)] / ১০০ [৪, ৫]। যেমন তরমুজের জিআই বেশি (৭২) হলেও এক বাটিতে শর্করা থাকে মাত্র ৬ গ্রাম, তাই এর গ্লাইসেমিক লোড অত্যন্ত কম (মাত্র ৪.৩) [৫]। অন্যদিকে এক প্লেট সাদা ভাতের জিআই (৭৩) এবং শর্করার পরিমাণ (৪২ গ্রাম) দুটোই বেশি হওয়ায় এর গ্লাইসেমিক লোড দাঁড়ায় ৩০.৭ [৫]। গবেষণায় প্রমাণিত যে দৈনন্দিন গ্লাইসেমিক লোড কমিয়ে রাখলে রক্তে ৩ মাসের গড় সুগার (HbA1c) ০.৪% থেকে ০.৭% পর্যন্ত কমে যায়, যা ডায়াবেটিসের প্রথম সারির ওষুধের সমতুল্য [৪, ৫]।'
            ),
            l(
              'The biophysical foundation of low-GI nutrition relies heavily on viscous soluble dietary fiber [4, 5]. Unlike insoluble fibers (cellulose, lignin) that primarily add fecal bulk, viscous soluble fibers—such as oat beta-glucan, psyllium seed husk, and legume pectins—form high-molecular-weight viscoelastic polymer networks upon contact with water in the stomach and small intestine [4, 5]. This gelation drastically increases luminal chyme viscosity, creating an impenetrable physical barrier that delays gastric emptying and impedes the enzymatic cleavage of complex carbohydrates by pancreatic alpha-amylase and brush-border alpha-glucosidases [4, 5].',
              'লো-জিআই পুষ্টির মূল ভিত্তি হলো দ্রবণীয় আঠালো খাদ্যআঁশ [৪, ৫]। গমের ভুসির মতো অদ্রবণীয় আঁশ কেবল মল তৈরিতে সাহায্য করলেও দ্রবণীয় আঠালো আঁশ (যেমন ওটসের বিটা-গ্লুকান, ইসবগুলের ভুসি এবং ডালের পেকটিন) পাকস্থলী ও অন্ত্রের পানির সংস্পর্শে এসে ঘন পিচ্ছিল জেল তৈরি করে [৪, ৫]। এই জেল পরিপাক নালীর তরলকে আঠালো করে তোলে, যার ফলে খাদ্য পাকস্থলী থেকে ধীরে নামে এবং পরিপাককারী এনজাইমগুলো সহজে শর্করা ভেঙে দ্রুত গ্লুকোজ মুক্ত করতে পারে না [৪, ৫]।'
            ),
            l(
              'Furthermore, viscous fiber gelation dramatically thickens the unstirred water layer overlaying the jejunal enterocyte brush border, increasing the diffusional distance for liberated D-glucose molecules toward sodium-glucose cotransporter-1 (SGLT1) [4, 5]. Instead of an acute glucose flood saturating peripheral disposal capacity, glucose absorption is flattened and distributed across the full length of the small intestine [4, 5]. Unabsorbed carbohydrates reaching the ileum activate enteroendocrine L-cells to secrete Glucagon-Like Peptide-1 (GLP-1), enhancing glucose-dependent insulin secretion, suppressing glucagon, and signaling hypothalamic satiety centers to curb subsequent meal intake [4, 5].',
              'তাছাড়া এই আঠালো জেল অন্ত্রের শোষণ দেয়ালের ওপর একটি পুরু স্তর তৈরি করে, যার ফলে গ্লুকোজ অণুগুলো সহজে রক্তে মিশতে পারে না [৪, ৫]। রক্তের সুগার হঠাৎ লাফিয়ে না উঠে সারা অন্ত্র জুড়ে খুব ধীরে ধীরে নিয়ন্ত্রিতভাবে রক্তে প্রবেশ করে [৪, ৫]। ধীরে পরিপাক হওয়া খাবার অন্ত্রের শেষ প্রান্তে পৌঁছালে তা প্রাকৃতিক GLP-1 হরমোনের ক্ষরণ বাড়িয়ে দেয়; এই হরমোন অগ্ন্যাশয় থেকে সঠিক সময়ে ইনসুলিন ছাড়তে সাহায্য করে এবং মস্তিষ্কে বার্তা পাঠিয়ে অতিরিক্ত ক্ষুধা দূর করে [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. The Twin-Cycle Hypothesis & DiRECT Remission Paradigm', '৫. যমজ-চক্র তত্ত্ব ও ডাইরেক্ট ট্রায়ালের রোগমুক্তি'),
          paragraphs: [
            l(
              'In 2008, Professor Roy Taylor of Newcastle University introduced the Twin-Cycle Hypothesis, providing a unifying pathophysiological framework that fundamentally redefined type 2 diabetes from an irreversible, progressive degenerative disease into a reversible metabolic disorder driven by organ-specific ectopic fat accumulation [4, 6]. The hypothesis posits that chronic positive energy balance drives two mutually reinforcing pathological cycles: the Hepatic Cycle and the Pancreatic Cycle [4, 6].',
              '২০০৮ সালে নিউক্যাসেল বিশ্ববিদ্যালয়ের অধ্যাপক রয় টেইলর "যমজ-চক্র তত্ত্ব" (Twin-Cycle Hypothesis) প্রদান করেন, যা টাইপ ২ ডায়াবেটিস সম্পর্কে প্রচলিত ধারণাকে সম্পূর্ণ বদলে দেয় [৪, ৬]। তিনি প্রমাণ করেন যে ডায়াবেটিস কোনো চিরস্থায়ী বা অপরিবর্তনীয় রোগ নয়, বরং অতিরিক্ত চর্বি জমে লিভার ও অগ্ন্যাশয় বিকল হওয়ার কারণে এটি ঘটে এবং সঠিক উপায়ে চর্বি কমাতে পারলে এই রোগ পুরোপুরি ভালো করা সম্ভব [৪, ৬]।'
            ),
            l(
              'In Cycle 1 (the Hepatic Cycle), excess dietary energy is converted into liver triglycerides via accelerated de novo lipogenesis [4, 6]. As intrahepatic fat accumulates beyond a personal threshold, hepatic insulin resistance develops, failing to suppress hepatic glucose production and driving hyperinsulinemia [6]. To offload this ectopic burden, the steatotic liver hyper-secretes large, triglyceride-rich VLDL-1 particles into the systemic circulation [4, 6]. VLDL-1 particles circulate continuously, delivering lipids to peripheral tissues, including the islets of Langerhans in the pancreas [4, 6].',
              'প্রথম চক্রে (লিভারের চক্র) অতিরিক্ত ক্যালোরি লিভারে গিয়ে চর্বিতে রূপান্তরিত হয় [৪, ৬]। লিভারে চর্বি জমে গেলে ইনসুলিন রেজিস্ট্যান্স শুরু হয় এবং লিভার রক্তে অতিরিক্ত গ্লুকোজ ছাড়তে থাকে [৬]। এই চর্বির বোঝা কমাতে লিভার তখন প্রচুর পরিমাণে ক্ষতিকর VLDL কণা তৈরি করে রক্তে ছড়িয়ে দেয় [৪, ৬]। রক্তে ঘুরে বেড়ানো এই চর্বি কণাগুলো সরাসরি অগ্ন্যাশয়ের বিটা-কোষে গিয়ে পৌঁছায় [৪, ৬]।'
            ),
            l(
              'Within the pancreas (Cycle 2), ectopic fat accumulates in and around the islets of Langerhans, elevating intrapancreatic lipid content [6]. Local exposure to elevated saturated fatty acids and ceramides induces cellular stress in pancreatic beta cells, triggering beta-cell dedifferentiation: beta cells lose their mature phenotypic markers (such as the transcription factor PDX-1 and insulin secretory machinery), regressing into an inactive, dormant progenitor-like state [4, 6]. Consequently, beta cells lose their ability to execute first-phase acute insulin secretion in response to glucose, precipitating overt clinical diabetes [4, 6]. Crucially, Taylor demonstrated that these dedifferentiated beta cells are not dead; they are metabolically dormant and fully capable of redifferentiation if local lipotoxicity is removed [4, 6].',
              'অগ্ন্যাশয়ের ভেতরে চর্বি জমলে বিটা-কোষগুলো চরম বিষক্রিয়ার মুখে পড়ে [৬]। এই বিষাক্ত চর্বির কারণে বিটা-কোষগুলো তাদের পরিপক্ক রূপ হারিয়ে এক ধরণের ঘুমন্ত বা নিষ্ক্রিয় অবস্থায় (Dedifferentiation) চলে যায় [৪, ৬]। ফলে খাবার খাওয়ার সাথে সাথে রক্তে যে দ্রুত ইনসুলিন ক্ষরণ হওয়ার কথা ছিল, তা পুরোপুরি বন্ধ হয়ে যায় এবং ডায়াবেটিস প্রকাশ পায় [৪, ৬]। টেইলরের যুগান্তকারী আবিষ্কার হলো—এই বিটা-কোষগুলো মারা যায়নি, বিষাক্ত চর্বির কারণে এরা কেবল ঘুমিয়ে আছে; চর্বি সরিয়ে নিতে পারলে এরা পুনরায় জীবিত হয়ে স্বাভাবিক ইনসুলিন তৈরি করতে পুরোপুরি সক্ষম [৪, ৬]।'
            ),
            l(
              'The landmark Diabetes Remission Clinical Trial (DiRECT), published in *The Lancet*, provided definitive proof-of-concept for the twin-cycle model in clinical practice [4]. DiRECT enrolled patients with type 2 diabetes diagnosed within the previous 6 years, initiating a structured primary care-led intervention comprising Total Diet Replacement (TDR; 825-853 kcal/day formula diet for 12 to 20 weeks), followed by structured food reintroduction over 2 to 8 weeks and long-term weight maintenance support [4]. All oral antidiabetic agents and antihypertensives were discontinued on day 1 [4]. At 12 months, 46% of participants achieved complete diabetes remission (HbA1c <6.5% off all medications), and in patients who lost >=15 kg, remission was achieved in an astonishing 86% [4]. MRS imaging confirmed that weight loss defatted the liver (<2% steatosis) and pancreas, resurrecting first-phase beta-cell insulin secretion and proving that type 2 diabetes is reversible through targeted negative energy balance [4, 6].',
              'ল্যানসেট সাময়িকীতে প্রকাশিত ঐতিহাসিক ডাইরেক্ট (DiRECT) ট্রায়াল এই তত্ত্বকে মানবদেহে সফলভাবে প্রমাণ করেছে [৪]। ডায়াবেটিসে আক্রান্ত রোগীদের প্রতিদিন মাত্র ৮২৫-৮৫৩ ক্যালোরির বিশেষ তরল পুষ্টিকর খাবার দিয়ে ১২ থেকে ২০ সপ্তাহ রাখা হয় এবং প্রথম দিনেই সমস্ত ওষুধের ব্যবহার বন্ধ করে দেওয়া হয় [৪]। এক বছর পর দেখা গেল ৪৬ শতাংশ রোগী কোনো ওষুধ ছাড়াই সম্পূর্ণ সুস্থ হয়ে গেছেন (HbA1c <৬.৫%) [৪]। আর যারা ১৫ কেজির বেশি ওজন কমাতে পেরেছিলেন, তাদের মধ্যে বিস্ময়করভাবে ৮৬ শতাংশ রোগী সম্পূর্ণ রোগমুক্ত হয়েছেন [৪]। এমআরআই স্ক্যানে দেখা গেছে যে ওজন কমার সাথে সাথে লিভার ও অগ্ন্যাশয়ের সমস্ত ক্ষতিকর চর্বি গলে গেছে এবং ঘুমন্ত বিটা-কোষ পুনরায় জেগে উঠে স্বাভাবিক ইনসুলিন নিঃসরণ শুরু করেছে [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'The pathophysiology of obesity-driven type 2 diabetes originates in the failure of subcutaneous adipose hyperplasia, driving adipocyte hypertrophy beyond the capillary oxygen diffusion limit (~100 micrometers), cellular hypoxia, necrosis, and Crown-Like Structure M1 macrophage infiltration releasing TNF-alpha and IL-6 [1, 2]. The resulting lipolytic dysregulation floods the circulation with non-esterified fatty acids, driving ectopic lipotoxicity in non-adipose metabolic organs [2].',
              'স্থূলতাজনিত টাইপ ২ ডায়াবেটিসের মূল কারণ হলো চর্বি কোষ অতিরিক্ত ফুলে অক্সিজেন না পেয়ে মারা যাওয়া এবং ক্রাউন-লাইক স্ট্রাকচার তৈরি করে প্রদাহ সৃষ্টিকারী ম্যাক্রোফেজের আক্রমণ [১, ২]। এর ফলে চর্বি কোষ থেকে রক্তে মুক্ত ফ্যাটি অ্যাসিড উপচে পড়ে এবং লিভার, পেশি ও অগ্ন্যাশয়ে বিষাক্তভাবে জমা হতে শুরু করে [২]।'
            ),
            l(
              'Lipid-induced insulin resistance is driven by cytosolic sn-1,2-diacylglycerol (DAG) accumulation, which recruits novel PKC isoforms (PKC-theta in muscle, PKC-epsilon in liver) to the membrane [2, 3]. PKC phosphorylates inhibitory serine residues on IRS-1 (Ser307), blocking insulin receptor tyrosine phosphorylation and halting PI3K/Akt/AS160 signaling, which locks GLUT4 glucose transporters intracellularly and drives peripheral insulin resistance [2, 3].',
              'চর্বিজনিত ইনসুলিন রেজিস্ট্যান্সের মূল আণবিক কারণ হলো কোষে DAG জমা হওয়া, যা PKC এনজাইম সক্রিয় করে IRS-1 এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে [২, ৩]। এর ফলে ইনসুলিনের সংকেত নষ্ট হয়ে GLUT4 চ্যানেল কোষের বাইরে আসতে পারে না এবং পেশিকোষে গ্লুকোজ প্রবেশ পুরোপুরি বন্ধ হয়ে যায় [২, ৩]।'
            ),
            l(
              'In the liver, DAG-PKC-epsilon activation prevents Akt2 from phosphorylating FOXO1, allowing unphosphorylated FOXO1 to translocate into the nucleus and drive unrestrained transcription of gluconeogenic PEPCK and glucose-6-phosphatase [2, 3]. Concurrently, selective insulin resistance preserves SREBP-1c-driven de novo lipogenesis, packaging excess lipids into VLDL-1 particles that flood pancreatic islets [2, 3].',
              'লিভারে DAG অণু FOXO1 প্রোটিনকে নিউক্লিয়াসে প্রবেশ করিয়ে অনিয়ন্ত্রিতভাবে গ্লুকোজ তৈরি সচল রাখে, ফলে খালি পেটে সুগার মারাত্মক বেড়ে যায় [২, ৩]। একই সাথে লিভার অতিরিক্ত চর্বি তৈরি করে VLDL কণা হিসেবে রক্তে ছাড়তে থাকে যা সরাসরি অগ্ন্যাশয়ের বিটা-কোষে গিয়ে জমা হয় [২, ৩]।'
            ),
            l(
              'Evidence-based Medical Nutrition Therapy (MNT) prioritizes Mediterranean and low-glycemic load dietary patterns rich in monounsaturated fats and viscous soluble fibers (beta-glucan, psyllium) that form luminal gels, blunting postprandial glycemic excursions [4, 5]. The landmark DiRECT trial conclusively proves that substantial weight loss (>15 kg) reverses hepatic and intrapancreatic steatosis, resurrecting dormant beta cells and achieving durable, drug-free type 2 diabetes remission in up to 86% of compliant patients [4, 6].',
              'প্রমাণভিত্তিক পুষ্টি থেরাপিতে ভূমধ্যসাগরীয় খাদ্যাভ্যাস ও দ্রবণীয় আঠালো আঁশ (ওটসের বিটা-গ্লুকান) ব্যবহারের মাধ্যমে রক্তের সুগার স্বাভাবিক রাখা হয় [৪, ৫]। ঐতিহাসিক ডাইরেক্ট ট্রায়ালে প্রমাণিত হয়েছে যে ১৫ কেজির বেশি ওজন কমালে লিভার ও অগ্ন্যাশয়ের চর্বি গলে গিয়ে ঘুমন্ত বিটা-কোষ জেগে ওঠে এবং ৮৬ শতাংশ রোগী কোনো ওষুধ ছাড়াই আজীবন ডায়াবেটিস থেকে মুক্তি লাভ করতে পারেন [৪, ৬]।'
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
          heading: l('1. Adipocyte-Macrophage Paracrine Cross-Talk & Cytokine Signaling', '১. চর্বি কোষ ও ম্যাক্রোফেজের পারস্পরিক সংকেত ও সাইটোকাইন প্রবাহ'),
          paragraphs: [
            l(
              'The vicious paracrine loop between hypertrophic adipocytes and infiltrating immune cells constitutes the core engine of chronic low-grade metabolic inflammation (meta-inflammation) [1, 2]. Saturated fatty acids released during uncontrolled adipocyte lipolysis act as endogenous ligands for Toll-Like Receptor 4 (TLR4) on residential and recruited macrophages [2]. TLR4 dimerization recruits adaptor proteins MyD88 and TRIF, initiating downstream phosphorylation cascades that activate the master pro-inflammatory transcription factor Nuclear Factor Kappa-B (NF-kB) and c-Jun N-terminal Kinase (JNK) [1, 2].',
              'চর্বি কোষ এবং রোগপ্রতিরোধকারী শ্বেত রক্তকণিকার (ম্যাক্রোফেজ) পারস্পরিক বিষাক্ত যোগাযোগ দীর্ঘস্থায়ী প্রদাহের মূল ইঞ্জিন হিসেবে কাজ করে [১, ২]। চর্বি কোষ থেকে বের হওয়া সম্পৃক্ত ফ্যাটি অ্যাসিড ম্যাক্রোফেজের গায়ে থাকা Toll-Like Receptor 4 (TLR4) রিসেপ্টরকে উদ্দীপিত করে [২]। এর ফলে কোষের ভেতরে NF-kB এবং JNK নামের প্রদাহ সৃষ্টিকারী মাস্টার সুইচগুলো সক্রিয় হয়ে ওঠে [১, ২]।'
            ),
            l(
              'Translocated NF-kB drives intense transcription of pro-inflammatory cytokines, specifically Tumor Necrosis Factor-alpha (TNF-alpha), Interleukin-1beta (IL-1beta), and Interleukin-6 (IL-6), alongside chemokines such as Monocyte Chemoattractant Protein-1 (MCP-1/CCL2) [2]. Secreted MCP-1 binds to CCR2 receptors on circulating classical Ly6C+ monocytes, establishing a continuous chemotactic gradient that recruits fresh waves of monocytes into the expanding adipose depot [2]. These monocytes differentiate into CD11c+ M1 macrophages, which physically encircle necrotic adipocytes and amplify local cytokine production [2].',
              'নিউক্লিয়াসে গিয়ে NF-kB প্রোটিন বিপুল পরিমাণে ক্ষতিকর সাইটোকাইন তৈরি করে—যেমন TNF-alpha, IL-1beta এবং IL-6 [২]। একই সাথে এটি রক্ত থেকে নতুন নতুন শ্বেত রক্তকণিকাকে চর্বি কলায় টেনে আনার জন্য কেমোকাইন (MCP-1) নিঃসরণ করে [২]। এর ফলে দলে দলে শ্বেত রক্তকণিকা এসে চর্বি কলায় জড়ো হয় এবং ক্ষতিকর M1 ম্যাক্রোফেজে রূপান্তরিত হয়ে প্রদাহের দাবানল ছড়িয়ে দেয় [২]।'
            ),
            l(
              'In turn, paracrine TNF-alpha binds to TNF Receptor 1 (TNFR1) on neighboring adipocytes, activating intracellular caspases and neutral sphingomyelinases that generate cytotoxic ceramides [2]. Concurrently, TNF-alpha-activated JNK and I-kappa-B kinase-beta (IKK-beta) phosphorylate IRS-1 on inhibitory serine residues within the adipocyte itself, worsening adipose insulin resistance [2]. This blocks insulin-mediated suppression of Hormone-Sensitive Lipase (HSL) and Adipose Triglyceride Lipase (ATGL), causing persistent, uncontrolled lipolysis even in the fed state [1, 2].',
              'এই সাইটোকাইনগুলো চর্বি কোষের নিজস্ব ইনসুলিন সংকেতও নষ্ট করে দেয় [২]। স্বাভাবিকভাবে খাবার খাওয়ার পর রক্তে ইনসুলিন বাড়লে চর্বি গলার প্রক্রিয়া বন্ধ থাকার কথা ছিল [১, ২]। কিন্তু প্রদাহের কারণে চর্বি ভাঙার এনজাইমগুলো (HSL ও ATGL) ক্রমাগত সচল থাকে এবং খাবার পরেও রক্তে অবিরত ক্ষতিকর চর্বি ঝরতে থাকে [১, ২]।'
            ),
            l(
              'Adipokine secretion also undergoes a profound pathological shift: secretion of the insulin-sensitizing, anti-inflammatory adipokine adiponectin plummets, while secretion of pro-inflammatory leptin increases dramatically [1, 2]. Hyperleptinemia fails to induce hypothalamic satiety due to central leptin resistance at the level of the arcuate nucleus, locking the patient into a state of chronic hyperphagia and progressive positive energy balance [1, 2].',
              'একই সাথে উপকারী হরমোন এডিপোনেকটিনের ক্ষরণ মারাত্মকভাবে কমে যায় এবং লেপটিন হরমোন অস্বাভাবিক বেড়ে যায় [১, ২]। মস্তিষ্কের হাইপোথ্যালামাস অতিরিক্ত লেপটিনের প্রতি সংবেদনশীলতা হারিয়ে ফেলায় লেপটিন রেজিস্ট্যান্স তৈরি হয়; ফলে রোগীর ক্ষুধা কোনোভাবেই মেটে না এবং তিনি অতিরিক্ত খাবার খেতে বাধ্য হন [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Mitochondrial Dysfunction & Incomplete Fatty Acid Beta-Oxidation', '২. মাইটোকন্ড্রিয়ার কার্যহীনতা ও অসম্পূর্ণ চর্বি জারণ'),
          paragraphs: [
            l(
              'In skeletal muscle, chronic nutrient overload precipitates mitochondrial bioenergetic gridlock [2, 3]. Skeletal muscle relies on mitochondrial beta-oxidation to break down long-chain acyl-CoA molecules into acetyl-CoA for entry into the Tricarboxylic Acid (TCA) cycle [3]. However, when fatty acid influx chronically exceeds metabolic demand, beta-oxidation outpaces TCA cycle capacity and electron transport chain (ETC) flux [2, 3].',
              'মাংসপেশিতে অতিরিক্ত পুষ্টির ভার মাইটোকন্ড্রিয়ার শক্তি উৎপাদন ব্যবস্থাকে অচল করে দেয় [২, ৩]। পেশিকোষ মূলত মাইটোকন্ড্রিয়ার বিটা-অক্সিডেশনের মাধ্যমে চর্বি পুড়িয়ে শক্তি তৈরি করে [৩]। কিন্তু যখন চর্বির জোগান কোষের প্রয়োজনের চেয়ে অনেক বেশি হয়ে যায়, তখন মাইটোকন্ড্রিয়া এই বিশাল চর্বি পুড়িয়ে শেষ করতে পারে না এবং পুরো সিস্টেম জ্যাম হয়ে যায় [২, ৩]।'
            ),
            l(
              'This metabolic mismatch leads to incomplete beta-oxidation, characterized by the accumulation of acyl-carnitine intermediates and short- to medium-chain fatty acid byproducts within the mitochondrial matrix and cytosol [2, 3]. These intermediate acyl-carnitines leak into the circulation, serving as distinctive clinical metabolomic biomarkers of incomplete fatty acid oxidation in prediabetes and overt type 2 diabetes [3].',
              'এর ফলে চর্বি পোড়ানোর প্রক্রিয়াটি অর্ধসমাপ্ত বা অসম্পূর্ণ থেকে যায় এবং কোষে অ্যাসাইল-কারনিটিন নামক বিষাক্ত মধ্যবর্তী রাসায়নিক জমা হতে শুরু করে [২, ৩]। এই উপাদানগুলো কোষ থেকে রক্তে চুইয়ে পড়ে, যা আধুনিক রক্ত পরীক্ষায় ডায়াবেটিস শুরুর অন্যতম প্রধান লক্ষণ হিসেবে ধরা পড়ে [৩]।'
            ),
            l(
              'Furthermore, the excessive reduction of electron carriers (NADH and FADH2) forces electrons to leak prematurely from Complexes I and III of the electron transport chain, reacting with molecular oxygen to generate superoxide anions (O2-) and hydrogen peroxide (H2O2) [2, 3]. This surge in mitochondrial reactive oxygen species (ROS) causes oxidative damage to mitochondrial DNA, membrane cardiolipin, and electron transport complexes, diminishing mitochondrial biogenesis and reducing mitochondrial copy number per muscle cell by up to 30% [2, 3].',
              'তাছাড়া মাইটোকন্ড্রিয়ার ইলেকট্রন পরিবহন চেইন অতিরিক্ত চাপে পড়ার কারণে ইলেকট্রন ছিটকে গিয়ে ক্ষতিকর মুক্ত মূলক বা রিয়েক্টিভ অক্সিজেন স্পিসিজ (ROS) তৈরি করে [২, ৩]। এই বিষাক্ত মুক্ত মূলক মাইটোকন্ড্রিয়ার নিজস্ব ডিএনএ ও মেমব্রেন ধ্বংস করে ফেলে, যার ফলে পেশিকোষে সুস্থ মাইটোকন্ড্রিয়ার সংখ্যা প্রায় ৩০ শতাংশ পর্যন্ত কমে যায় [২, ৩]।'
            ),
            l(
              'Diminished mitochondrial mass reduces cellular oxidative capacity, creating a self-perpetuating cycle: reduced beta-oxidation capacity diverts incoming fatty acids away from oxidation and into cytosolic non-esterified pools, accelerating sn-1,2-DAG and ceramide synthesis [2, 3]. This intensifies PKC-theta uncoupling of IRS-1, cementing muscle insulin resistance and worsening systemic glycemic control [2, 3].',
              'মাইটোকন্ড্রিয়া কমে যাওয়ার ফলে কোষের চর্বি পোড়ানোর ক্ষমতা আরও সংকুচিত হয়ে যায় [২, ৩]। অবিকৃত চর্বিগুলো কোষে জমে আরও বেশি ক্ষতিকর DAG ও সিরামাইড তৈরি করে, যা PKC এনজাইমের মাধ্যমে ইনসুলিনের পথ পুরোপুরি বন্ধ করে পেশির ইনসুলিন রেজিস্ট্যান্সকে দীর্ঘস্থায়ী রূপ দেয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Selective Hepatic Insulin Resistance: SREBP-1c vs FOXO1', '৩. যকৃতের দ্বিমুখী ইনসুলিন প্রতিক্রিয়া: এসআরইবিপি-১সি বনাম ফক্সও১'),
          paragraphs: [
            l(
              'One of the most profound paradoxes in diabetes pathophysiology is selective hepatic insulin resistance: how can a liver fail to respond to insulin for suppressing glucose production, while simultaneously responding vigorously to insulin by synthesizing excess triglycerides? [2, 3]. Modern molecular genetics has resolved this paradox by dissecting the divergent downstream branches of hepatic insulin signaling [3].',
              'ডায়াবেটিসের অন্যতম জটিল রহস্য হলো লিভারের দ্বিমুখী বা নির্বাচনী ইনসুলিন রেজিস্ট্যান্স: ইনসুলিন থাকা সত্ত্বেও লিভার কীভাবে গ্লুকোজ তৈরি বন্ধ করতে ব্যর্থ হয়, অথচ একই সাথে চর্বি তৈরি বহুগুণ বাড়িয়ে দেয়? [২, ৩]। আধুনিক আণবিক গবেষণায় ইনসুলিন সংকেতের ভিন্ন ভিন্ন পথ উন্মোচনের মাধ্যমে এই রহস্যের সমাধান হয়েছে [৩]।'
            ),
            l(
              'The branch governing gluconeogenesis is strictly dependent on the canonical IRS-2 / PI3K / Akt2 / FOXO1 axis [3]. As established, DAG-activated PKC-epsilon impairs insulin receptor kinase activity and IRS-2 tyrosine phosphorylation, shutting down Akt2 signaling [2, 3]. Because Akt2 is disabled, FOXO1 escapes inhibitory phosphorylation, translocates to the nucleus, and drives constitutive PEPCK and G6Pase transcription, uncoupling hepatic glucose production from systemic insulin regulation [2, 3].',
              'গ্লুকোজ বন্ধ করার পথটি পুরোপুরি IRS-2 / PI3K / Akt2 / FOXO1 সংকেতের ওপর নির্ভরশীল [৩]। লিভারে জমে থাকা DAG-PKC এই পথটিকে অকেজো করে দেয়, যার ফলে FOXO1 প্রোটিন বাঁধাহীনভাবে গ্লুকোজ তৈরির জিনগুলোকে সচল রাখে এবং খালি পেটে সুগার ক্রমাগত বাড়তে থাকে [২, ৩]।'
            ),
            l(
              'Conversely, the lipogenic pathway driving de novo lipogenesis is governed by Sterol Regulatory Element-Binding Protein-1c (SREBP-1c) [2, 3]. While Akt2 contributes to SREBP-1c processing in normal states, in the hyperinsulinemic, insulin-resistant liver, SREBP-1c expression is sustained by alternative, non-Akt mechanisms, including atypical PKC (aPKC zeta/lambda), the mammalian Target of Rapamycin Complex 1 (mTORC1), and elevated endoplasmic reticulum (ER) stress [3]. High circulating insulin concentrations, driven by compensatory beta-cell secretion, act through these non-canonical pathways to stimulate SREBP-1c maturation [3].',
              'অন্যদিকে চর্বি তৈরির পথটি চালিত হয় SREBP-1c প্রোটিনের মাধ্যমে [২, ৩]। রক্তে ইনসুলিনের মাত্রা আকাশচুম্বী থাকায় এটি বিকল্প পথে (mTORC1 ও অন্যান্য সংকেত দিয়ে) SREBP-1c কে পুরোপুরি সক্রিয় রাখে [৩]। এর ফলে ইনসুলিন রেজিস্ট্যান্ট লিভার বিশ্রাম না নিয়ে দিনরাত নতুন নতুন ট্রাইগ্লিসারাইড চর্বি তৈরি করতে থাকে [২, ৩]।'
            ),
            l(
              'Mature SREBP-1c translocates to the nucleus, transactivating genes encoding ATP citrate lyase (ACLY), Acetyl-CoA Carboxylase (ACC), and Fatty Acid Synthase (FAS) [2, 3]. The resulting newly synthesized saturated fatty acids (predominantly palmitate) are esterified into triglycerides and packaged with Apolipoprotein B100 into large, buoyant VLDL-1 particles [2, 3]. These VLDL-1 particles flood the bloodstream, delivering fat to skeletal muscle and the pancreatic islets, fueling the second cycle of Taylor\'s twin-cycle hypothesis [4, 6].',
              'সক্রিয় SREBP-1c লিভারে প্যালমিটেটের মতো সম্পৃক্ত চর্বি তৈরি বাড়িয়ে দেয় এবং এদেরকে VLDL-1 কণা হিসেবে রক্তে ছেড়ে দেয় [২, ৩]। এই VLDL কণাগুলো রক্তে ঘুরে ঘুরে মাংসপেশি এবং অগ্ন্যাশয়ের বিটা-কোষে বিষাক্ত চর্বি চালান করে ডায়াবেটিসের দ্বিতীয় চক্রকে চরম আকার দেয় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Incretin Biology & GLP-1/GIP Receptor Agonism MNT Synergy', '৪. ইনক্রেটিন জীববিজ্ঞান ও জিএলপি-১ রিসেপ্টর উদ্দীপনার পুষ্টি সমন্বয়'),
          paragraphs: [
            l(
              'The incretin effect describes the physiological phenomenon whereby oral glucose administration elicits a significantly greater insulin secretory response than an isoglycemic intravenous glucose infusion [4]. This augmentation accounts for up to 60-70% of total postprandial insulin secretion in healthy individuals and is mediated by two gut hormones: Glucagon-Like Peptide-1 (GLP-1), secreted by distal ileal and colonic L-cells, and Glucose-Dependent Insulinotropic Polypeptide (GIP), secreted by proximal duodenal K-cells [4].',
              'ইনক্রেটিন প্রভাব হলো একটি বিশেষ শারীরবৃত্তীয় ঘটনা: মুখ দিয়ে গ্লুকোজ খেলে শিরায় ইনজেকশন দেওয়ার চেয়ে বহুগুণ বেশি ইনসুলিন নিঃসৃত হয় [৪]। সুস্থ মানুষের খাবার পরবর্তী মোট ইনসুলিনের ৬০-৭০ শতাংশই এই ইনক্রেটিন হরমোনের কারণে নির্গত হয়, যা অন্ত্রের L-কোষ থেকে বের হওয়া GLP-1 এবং K-কোষ থেকে বের হওয়া GIP হরমোনের মাধ্যমে ঘটে [৪]।'
            ),
            l(
              'In patients with type 2 diabetes, the incretin effect is blunted: while GIP loses its insulinotropic efficacy, GLP-1 retains its potent glucose-dependent insulinotropic activity, though its endogenous secretion is often attenuated [4]. GLP-1 binds to G-protein-coupled GLP-1 receptors on pancreatic beta cells, activating adenylate cyclase, elevating intracellular cAMP, and stimulating Protein Kinase A (PKA) and Epac2 [4]. This primes insulin secretory granules for exocytosis only when ambient glucose exceeds ~75-80 mg/dL, inherently minimizing hypoglycemia risk [4].',
              'ডায়াবেটিস রোগীদের ক্ষেত্রে এই প্রাকৃতিক ইনক্রেটিন প্রভাব নষ্ট হয়ে যায় [৪]। তবে বাইরে থেকে GLP-1 উদ্দীপনা দিলে এটি অগ্ন্যাশয়ের বিটা-কোষের রিসেপ্টরে বসে cAMP অণু বাড়িয়ে দেয় এবং তখনই ইনসুলিন ছাড়তে বাধ্য করে যখন রক্তে সুগারের মাত্রা স্বাভাবিকের চেয়ে বেশি থাকে; ফলে রক্তের সুগার বিপজ্জনকভাবে কমে যাওয়ার (হাইপোগ্লাইসেমিয়া) কোনো ঝুঁকি থাকে না [৪]।'
            ),
            l(
              'Beyond the pancreas, GLP-1 slows gastric emptying through vagal-mediated neural circuits and acts on pro-opiomelanocortin (POMC) and cocaine- and amphetamine-regulated transcript (CART) neurons in the hypothalamic arcuate nucleus to promote satiety and suppress appetite [4]. Modern pharmacology has harnessed this biology with GLP-1 receptor agonists (semaglutide) and dual GLP-1/GIP co-agonists (tirzepatide), which achieve profound weight loss (15% to 22%) and HbA1c reductions exceeding 2.0% [4].',
              'অগ্ন্যাশয় ছাড়াও GLP-1 পাকস্থলী থেকে খাবার নামা ধীর করে এবং মস্তিষ্কের ক্ষুধা নিয়ন্ত্রণ কেন্দ্রে বার্তা পাঠিয়ে অতিরিক্ত খাবার গ্রহণের ইচ্ছা দমন করে [৪]। আধুনিক চিকিৎসায় সেমাগ্লুটাইড এবং টির্জেপাটাইডের মতো ওষুধগুলো এই প্রাকৃতিক বিজ্ঞানকে কাজে লাগিয়ে ১৫ থেকে ২২ শতাংশ পর্যন্ত ওজন কমাতে এবং সুগার নিয়ন্ত্রণে অভূতপূর্ব সাফল্য দেখাচ্ছে [৪]।'
            ),
            l(
              'Crucially, Medical Nutrition Therapy acts synergistically with incretin-based therapies [4]. Diets high in viscous soluble fiber, fermentable resistant starches, and prebiotic oligosaccharides nourish colonic microbiota, which ferment them into Short-Chain Fatty Acids (SCFAs; acetate, propionate, butyrate) [4]. Luminal propionate and butyrate bind to Free Fatty Acid Receptor 2 (FFAR2/GPR43) and FFAR3 (GPR41) on enteroendocrine L-cells, directly stimulating endogenous GLP-1 and PYY secretion, creating a natural dietary amplification of the incretin axis [4].',
              'সবচেয়ে গুরুত্বপূর্ণ হলো, সঠিক পুষ্টি থেরাপি এই ইনক্রেটিন হরমোনের কার্যকারিতা দ্বিগুণ করে দেয় [৪]। উচ্চ দ্রবণীয় আঁশ ও প্রিবায়োটিক খাবার অন্ত্রের উপকারী ব্যাকটেরিয়াকে খাইয়ে প্রচুর শর্ট-চেইন ফ্যাটি অ্যাসিড (এসসিএফএ) তৈরি করে [৪]। এই এসসিএফএ অন্ত্রের L-কোষের রিসেপ্টরে যুক্ত হয়ে সরাসরি প্রাকৃতিক GLP-1 নিঃসরণ বাড়িয়ে দেয় এবং প্রাকৃতিকভাবে ক্ষুধা ও সুগার নিয়ন্ত্রণে রাখে [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Very Low-Calorie Diets (VLCD), TDR & Hepatic Steatosis Clearance', '৫. অতি-স্বল্প ক্যালোরি পথ্য (VLCD), পূর্ণ পুষ্টি প্রতিস্থাপন ও লিভারের চর্বি নিরাময়'),
          paragraphs: [
            l(
              'The clinical deployment of Very Low-Calorie Diets (VLCD) and Total Diet Replacement (TDR; typically 800 to 850 kcal/day) represents an aggressive, evidence-based nutrition intervention for rapid metabolic remodeling in type 2 diabetes [4, 6]. Within 48 hours of initiating an 800 kcal/day regimen, liver glycogen stores are exhausted, causing a precipitously negative energy balance [6]. Deprived of exogenous carbohydrates and excess calories, hepatic metabolism shifts dramatically from lipid synthesis to intense intrahepatic lipid oxidation [4, 6].',
              'অতি-স্বল্প ক্যালোরির পথ্য (VLCD বা TDR; সাধারণত প্রতিদিন ৮০০ থেকে ৮৫০ ক্যালোরি) ডায়াবেটিসের মূল কারণ নিরাময়ে একটি অত্যন্ত কার্যকর আধুনিক পুষ্টি কৌশল [৪, ৬]। এই পথ্য শুরুর মাত্র ৪৮ ঘণ্টার মধ্যে লিভারের সমস্ত জমানো গ্লাইকোজেন শেষ হয়ে যায় [৬]। বাইরে থেকে কোনো বাড়তি শর্করা বা ক্যালোরি না পেয়ে লিভার বেঁচে থাকার জন্য বাধ্য হয়ে নিজের ভেতরের ক্ষতিকর চর্বি পোড়াতে শুরু করে [৪, ৬]।'
            ),
            l(
              'Serial magnetic resonance spectroscopy (MRS) in clinical trials reveals that intrahepatic lipid content plummets by up to 30% within 7 days, falling from severely steatotic levels (~16%) to near-normal levels (<3%) by Week 4 [4, 6]. This acute clearance of hepatic steatosis restores hepatic insulin sensitivity, re-establishing Akt2-mediated phosphorylation of FOXO1 and shutting down excessive gluconeogenesis [6]. Fasting plasma glucose normalizes within days, often before significant total body weight loss has occurred, demonstrating that organ-specific steatosis clearance precedes gross anthropometric change [4, 6].',
              'এমআরআই গবেষণায় দেখা গেছে যে মাত্র ৭ দিনের মধ্যে লিভারের চর্বি ৩০ শতাংশ কমে যায় এবং ৪ সপ্তাহের মধ্যে চরম ফ্যাটি লিভার (১৬% চর্বি) প্রায় সম্পূর্ণ সুস্থ লিভারে (<৩% চর্বি) রূপান্তরিত হয় [৪, ৬]। লিভারের চর্বি গলে যাওয়ার সাথে সাথে লিভারের ইনসুলিন রেজিস্ট্যান্স উধাও হয়ে যায় এবং বাড়তি গ্লুকোজ তৈরি বন্ধ হয়ে যায় [৬]। ফলে শরীরের ওজন উল্লেখযোগ্যভাবে কমার আগেই মাত্র কয়েকদিনের মধ্যে খালি পেটে রক্তের সুগার সম্পূর্ণ স্বাভাবিক হয়ে আসে [৪, ৬]।'
            ),
            l(
              'Clinical execution of TDR mandates rigorous medical supervision and medication safety protocols [4]. On Day 1 of calorie restriction, sulfonylureas and glinides must be discontinued immediately to prevent severe, life-threatening hypoglycemia [4]. SGLT2 inhibitors must also be stopped on Day 1 because profound caloric deficit paired with glucosuria dramatically escalates the risk of euglycemic diabetic ketoacidosis (euDKA) [4]. Antihypertensive medications (especially diuretics and ACE inhibitors) frequently require dose reduction or suspension within the first week due to rapid natriuresis and blood pressure drops [4].',
              'তবে এই টিডিআর পথ্যটি অবশ্যই চিকিৎসকের কঠোর তত্ত্বাবধানে পরিচালনা করতে হয় [৪]। প্রথম দিনেই সালফোনাইলইউরিয়া জাতীয় ওষুধ বন্ধ করতে হবে যাতে রক্তের সুগার বিপজ্জনকভাবে কমে না যায় [৪]। এমপাগ্লিফ্লোজিনের মতো SGLT2 ইনহিবিটর ওষুধও প্রথম দিনেই বন্ধ করতে হবে যাতে কিটোঅ্যাসিডোসিসের মতো মারাত্মক জটিলতা না ঘটে [৪]। তাছাড়া ওজন ও সুগার কমার সাথে সাথে রক্তচাপ দ্রুত কমে যায় বলে প্রেশারের ওষুধের মাত্রাও কমিয়ে আনতে হয় [৪]।'
            ),
            l(
              'Following the 12- to 20-week TDR phase, a structured, stepped food reintroduction protocol is mandatory to prevent weight cycling and metabolic rebound [4]. Whole foods are reintroduced incrementally over 4 to 8 weeks, replacing one formula shake every 1 to 2 weeks with a nutrient-dense meal high in lean protein and viscous fiber [4]. Patients transition to a personalized, isocaloric Mediterranean dietary pattern paired with regular physical activity, which maintains organ defatting and sustains durable long-term diabetes remission [4, 6].',
              '১২ থেকে ২০ সপ্তাহের এই বিশেষ পর্বের পর সাধারণ খাবার চালুর প্রক্রিয়াটিও ধাপে ধাপে সম্পন্ন করতে হয় যাতে ওজন পুনরায় না বাড়ে [৪]। ৪ থেকে ৮ সপ্তাহ ধরে ধীরে ধীরে ফর্মুলা কমিয়ে স্বাস্থ্যকর ভূমধ্যসাগরীয় খাবার চালু করতে হয় [৪]। নিয়মিত হাঁটা ও ব্যায়ামের সাথে পুষ্টিকর খাবার চালিয়ে গেলে লিভার ও অগ্ন্যাশয় আজীবন চর্বিমুক্ত থাকে এবং ডায়াবেটিস স্থায়ীভাবে দূরে থাকে [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis & Clinical Decision Framework', '৬. একাডেমিক সমন্বয় ও ক্লিনিক্যাল সিদ্ধান্ত গ্রহণ'),
          paragraphs: [
            l(
              'Chronic caloric excess causes adipose tissue expandability failure, shifting expansion from healthy hyperplasia to pathological hypertrophy (>100 um) [1, 2]. Hypoxia-driven necrosis recruits CD11c+ M1 macrophages forming Crown-Like Structures (CLS) that secrete TNF-alpha and IL-6, triggering persistent lipolysis and flooding the systemic circulation with non-esterified fatty acids [2].',
              'চামড়ার নিচে নতুন চর্বি কোষ তৈরির সীমা পেরিয়ে গেলে পুরনো কোষগুলো অস্বাভাবিক বড় হয়ে অক্সিজেন না পেয়ে মারা যায় [১, ২]। এই মৃত কোষের চারপাশ ঘিরে ক্রাউন-লাইক স্ট্রাকচার (CLS) তৈরি করে প্রদাহ সৃষ্টিকারী ম্যাক্রোফেজগুলো রক্তে প্রচুর মুক্ত চর্বি ছড়িয়ে দেয় [২]।'
            ),
            l(
              'Ectopic lipid accumulation generates sn-1,2-DAG, which binds and activates novel PKC isoforms (PKC-theta in muscle, PKC-epsilon in liver) [2, 3]. PKC uncouples insulin signaling by phosphorylating inhibitory serine residues on IRS-1 (Ser307), blocking insulin receptor tyrosine phosphorylation and halting PI3K/Akt/AS160 signaling, which traps GLUT4 intracellularly in skeletal muscle [2, 3].',
              'পেশি ও লিভারে অতিরিক্ত DAG জমে PKC এনজাইম সক্রিয় করে এবং IRS-1 এর সেরিন অংশে ফসফেট যুক্ত করে ইনসুলিনের সংকেত নষ্ট করে দেয় [২, ৩]। এর ফলে GLUT4 চ্যানেল কোষঝিল্লিতে আসতে পারে না এবং পেশিকোষে গ্লুকোজ প্রবেশ বন্ধ হয়ে যায় [২, ৩]।'
            ),
            l(
              'Selective hepatic insulin resistance impairs Akt2 phosphorylation of FOXO1 while sparing SREBP-1c-driven de novo lipogenesis [2, 3]. Unrestrained nuclear FOXO1 transactivates PEPCK and G6Pase, elevating fasting glucose, while SREBP-1c overproduces VLDL-1 particles that deposit ectopic fat into the pancreatic islets, inducing beta-cell dedifferentiation and driving the Twin Cycles of type 2 diabetes [4, 6].',
              'লিভারে দ্বিমুখী ইনসুলিন রেজিস্ট্যান্সের কারণে FOXO1 প্রোটিন গ্লুকোজ উৎপাদন অবিরাম সচল রাখে এবং SREBP-1c প্রোটিন অতিরিক্ত VLDL কণা তৈরি করে অগ্ন্যাশয়ের বিটা-কোষে চর্বি জমাতে থাকে [২, ৩]। এর ফলে বিটা-কোষ নিষ্ক্রিয় হয়ে পড়ে এবং ডায়াবেটিসের যমজ-চক্র পূর্ণতা পায় [৪, ৬]।'
            ),
            l(
              'Medical Nutrition Therapy centered on low-glycemic load diets and viscous soluble fibers (beta-glucan, psyllium) thickens intestinal chyme, prolongs the unstirred water layer, blunts postprandial glycemic excursions, and stimulates endogenous GLP-1 secretion [4, 5]. Aggressive weight loss via Total Diet Replacement (TDR >=15 kg) defats the liver and pancreas, resurrecting dormant beta cells and achieving durable, drug-free diabetes remission in up to 86% of patients [4, 6].',
              'উচ্চ দ্রবণীয় আঁশযুক্ত লো-গ্লাইসেমিক খাবার অন্ত্রের শোষণ ধীর করে খাবার পরের সুগার স্বাভাবিক রাখে এবং প্রাকৃতিক GLP-1 নিঃসরণ বাড়ায় [৪, ৫]। তীব্র ক্যালোরি নিয়ন্ত্রণ ও ১৫ কেজি ওজন হ্রাসের মাধ্যমে লিভার ও অগ্ন্যাশয়ের চর্বি দূর করে ঘুমন্ত বিটা-কোষকে পুনরায় জাগিয়ে তুলে ৮৬ শতাংশ পর্যন্ত রোগীর ডায়াবেটিস সম্পূর্ণ নিরাময় করা সম্ভব [৪, ৬]।'
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
          heading: l('1. Ceramides vs DAG: Sphingolipid Lipotoxicity & Glucolipotoxicity', '১. সিরামাইড বনাম ডিএজি: স্ফিঙ্গোলিপিড বিষক্রিয়া ও গ্লুকোলিপোটক্সিসিটি'),
          paragraphs: [
            l(
              'While sn-1,2-diacylglycerol (DAG) serves as the primary biochemical trigger for novel PKC activation and acute insulin signaling uncoupling, sphingolipids—specifically ceramides—constitute an equally lethal second arm of ectopic lipotoxicity [2, 3]. Ceramides are bioactive sphingolipids synthesized de novo in the endoplasmic reticulum from saturated fatty acids (predominantly palmitate, C16:0) and serine via serine palmitoyltransferase (SPT) [2, 3]. Under conditions of chronic lipid surplus, intracellular ceramide levels soar across skeletal muscle, liver, and myocardium [2, 3].',
              'কোষে ক্ষতিকর ডিএজি (DAG) তৈরি হওয়ার পাশাপাশি সিরামাইড নামের স্ফিঙ্গোলিপিড চর্বি কোষে মারাত্মক বিষক্রিয়া তৈরি করে [২, ৩]। সম্পৃক্ত চর্বি এবং সেরিন অ্যামাইনো অ্যাসিড মিলে কোষের এন্ডোপ্লাজমিক রেটিকুলামে এই বিষাক্ত সিরামাইড তৈরি হয় [২, ৩]। অতিরিক্ত ক্যালোরি ও চর্বি গ্রহণের ফলে পেশি, যকৃত এবং হৃৎপিণ্ডের কোষে বিপুল পরিমাণ সিরামাইড জমা হয় [২, ৩]।'
            ),
            l(
              'Ceramides impair insulin action through distinct molecular mechanisms independent of PKC-theta [2, 3]. Ceramides directly activate Protein Phosphatase 2A (PP2A), a serine/threonine phosphatase that dephosphorylates and inactivates Akt2 on its critical activation loop residue (Thr308) [2, 3]. Simultaneously, ceramides recruit and activate Protein Kinase C-zeta (PKC-zeta), an atypical PKC isoform that binds the pleckstrin homology (PH) domain of Akt2, sequestering Akt2 in caveolin-enriched membrane microdomains and physically preventing its translocation to the plasma membrane for activation by PDK1 [2, 3].',
              'সিরামাইড সরাসরি PP2A এনজাইম সক্রিয় করে Akt2 প্রোটিনের সক্রিয় ফসফেটটি খুলে নিয়ে একে পুরোপুরি নিস্তেজ করে দেয় [২, ৩]। একই সাথে এটি PKC-zeta এনজাইমকে সক্রিয় করে Akt2 প্রোটিনকে এমন জায়গায় বন্দি করে ফেলে যাতে এটি আর কোষঝিল্লিতে গিয়ে কাজ করতে না পারে [২, ৩]।'
            ),
            l(
              'When elevated ceramides co-occur with chronic hyperglycemia, the lethal synergy of glucolipotoxicity is unleashed [2, 3]. High ambient glucose supplies abundant glycerol-3-phosphate for accelerated DAG synthesis, while simultaneously overwhelming the hexosamine biosynthetic pathway to generate UDP-GlcNAc, which drives abnormal O-GlcNAcylation of metabolic enzymes [2, 3]. Concurrently, elevated palmitate channels into ceramide synthesis, which targets mitochondrial membranes, inducing mitochondrial outer membrane permeabilization (MOMP), cytochrome c release, and caspase-3-mediated apoptosis [2, 3].',
              'অতিরিক্ত চর্বির সাথে যখন রক্তে অতিরিক্ত গ্লুকোজ যোগ হয়, তখন তাকে বলা হয় গ্লুকোলিপোটক্সিসিটি (Glucolipotoxicity) [২, ৩]। এই দুটি উপাদান একসাথে মিলিত হলে মাইটোকন্ড্রিয়ার পর্দা ফুটো হয়ে সাইটোক্রোম-সি বের হয়ে আসে এবং কোষের ভেতরে আত্মঘাতী ক্যাসপেজ এনজাইম সক্রিয় হয়ে কোষের মৃত্যু ঘটায় [২, ৩]।'
            ),
            l(
              'In pancreatic beta cells, chronic glucolipotoxicity is the definitive executioner of beta-cell survival [4, 6]. Saturated fatty acids and ceramides inhibit the sarcoplasmic/endoplasmic reticulum Ca2+-ATPase (SERCA2b), depleting ER calcium stores and precipitating terminal Endoplasmic Reticulum (ER) stress [6]. This triggers the CCAAT/enhancer-binding protein homologous protein (CHOP) pro-apoptotic pathway, transitioning reversible beta-cell dedifferentiation into permanent, irreversible beta-cell loss [4, 6].',
              'অগ্ন্যাশয়ের বিটা-কোষে এই বিষাক্ত প্রভাব অত্যন্ত মারাত্মক [৪, ৬]। সম্পৃক্ত চর্বি ও সিরামাইড বিটা-কোষের ক্যালসিয়াম ভারসাম্য নষ্ট করে মারাত্মক চাপ সৃষ্টি করে [৬]। এর ফলে ঘুমিয়ে থাকা বিটা-কোষগুলো শেষ পর্যন্ত পুরোপুরি মারা যায়; তাই সময় থাকতে চর্বি কমিয়ে বিটা-কোষকে বাঁচানো অত্যন্ত জরুরি [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Endoplasmic Reticulum Stress & the Unfolded Protein Response (UPR)', '২. এন্ডোপ্লাজমিক রেটিকুলামের চাপ ও প্রোটিন উন্মোচন প্রতিক্রিয়া'),
          paragraphs: [
            l(
              'The pancreatic beta cell is an exceptional protein-manufacturing factory, dedicating up to 50% of its total translational capacity to the synthesis, folding, and exocytosis of proinsulin [4, 6]. Under insulin-resistant conditions, beta cells face enormous compensatory demand, forcing them to synthesize and process unprecedented quantities of nascent proinsulin polypeptides [6]. When this secretory burden exceeds the protein-folding capacity of the Endoplasmic Reticulum (ER), misfolded and unfolded proteins accumulate in the ER lumen, triggering Endoplasmic Reticulum Stress [6].',
              'অগ্ন্যাশয়ের বিটা-কোষ হলো শরীরের একটি অবিশ্বাস্য ইনসুলিন কারখানা, যা নিজের ৫০ শতাংশ শক্তি ইনসুলিন তৈরিতে ব্যয় করে [৪, ৬]। ইনসুলিন রেজিস্ট্যান্সের কারণে শরীর যখন অতিরিক্ত ইনসুলিন দাবি করে, তখন বিটা-কোষের ওপর বিপুল চাপ পড়ে [৬]। এর ফলে এন্ডোপ্লাজমিক রেটিকুলামে সঠিক আকৃতির প্রোটিন তৈরি ব্যাহত হয় এবং বিকৃত প্রোটিন জমতে শুরু করে, যাকে ইআর স্ট্রেস (ER Stress) বলা হয় [৬]।'
            ),
            l(
              'To restore proteostasis, the ER activates a tripartite adaptive signaling cascade termed the Unfolded Protein Response (UPR), mediated by three transmembrane ER sensors: IRE1alpha (Inositol-Requiring Enzyme 1alpha), PERK (Protein Kinase RNA-like ER Kinase), and ATF6 (Activating Transcription Factor 6) [6]. Under resting conditions, these sensors are maintained in an inactive state by binding to the ER chaperone BiP (Binding Immunoglobulin Protein / GRP78) [6]. When misfolded proteins accumulate, BiP dissociates from the sensors to chaperone the misfolded client proteins, freeing IRE1alpha, PERK, and ATF6 to initiate downstream signaling [6].',
              'এই সমস্যা দূর করতে কোষ তিন ধরণের বিশেষ সেন্সরের (IRE1alpha, PERK এবং ATF6) মাধ্যমে আনফোল্ডেড প্রোটিন রেসপন্স (UPR) সক্রিয় করে [৬]। সাধারণত BiP নামের একটি রক্ষক প্রোটিন এদেরকে শান্ত রাখে [৬]। কিন্তু বিকৃত প্রোটিন বেড়ে গেলে BiP সেগুলোকে মেরামত করতে চলে যায়, যার ফলে এই তিনটি সেন্সর মুক্ত হয়ে সংকেত পাঠাতে শুরু করে [৬]।'
            ),
            l(
              'Activated PERK phosphorylates Eukaryotic Initiation Factor 2alpha (eIF2alpha), transiently attenuating general protein translation to reduce the influx of nascent polypeptides into the overworked ER lumen [6]. Concurrently, IRE1alpha autophosphorylates and activates its endoribonuclease domain, which excises a 26-nucleotide intron from X-box Binding Protein 1 (XBP1) mRNA, generating the active transcription factor spliced XBP1 (XBP1s) [6]. XBP1s translocates to the nucleus to upregulate ER chaperones and ER-associated degradation (ERAD) components to clear misfolded debris [6].',
              'সক্রিয় PERK এনজাইম সাময়িকভাবে নতুন প্রোটিন তৈরি ধীর করে দেয় যাতে ইআর-এর ওপর কাজের চাপ কমে [৬]। একই সাথে IRE1alpha সেন্সর XBP1 নামের একটি বিশেষ প্রোটিনকে সক্রিয় করে যা নিউক্লিয়াসে গিয়ে বিকৃত প্রোটিন ভেঙে ফেলার এনজাইমগুলোর উৎপাদন বাড়িয়ে দেয় [৬]।'
            ),
            l(
              'However, when nutrient overload and lipotoxicity are chronic, the adaptive UPR fails to restore proteostasis and shifts into a terminal pro-apoptotic program [6]. Sustained PERK signaling preferentially translates ATF4, which transactivates the pro-apoptotic transcription factor CHOP (GADD153) [6]. Simultaneously, hyperactivated IRE1alpha recruits TRAF2 and activates JNK, while initiating Regulated IRE1-Dependent Decay (RIDD) of proinsulin mRNA [6]. CHOP downregulates anti-apoptotic Bcl-2 while upregulating pro-apoptotic Bim and PUMA, driving mitochondrial apoptosis and culminating in irreversible beta-cell loss [4, 6].',
              'কিন্তু যখন মাসের পর মাস অতিরিক্ত চর্বি ও চিনির চাপ চলতেই থাকে, তখন এই প্রতিরক্ষা ব্যবস্থা ভেঙে পড়ে এবং কোষকে ধ্বংস করার সংকেত সক্রিয় হয় [৬]। PERK সেন্সর CHOP নামের একটি মরণ প্রোটিন তৈরি করে এবং IRE1alpha সেন্সর ইনসুলিনের আরএনএ ধ্বংস করতে শুরু করে [৬]। এর ফলে বিটা-কোষে আত্মহত্যার প্রক্রিয়া শুরু হয় এবং কোষগুলো চিরতরে মারা যায় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Pancreatic Beta-Cell Dedifferentiation vs Apoptosis: Lineage Tracing', '৩. অগ্ন্যাশয়ের বিটা-কোষের রূপান্তর বনাম কোষ মৃত্যু: বংশানুক্রমিক অনুসন্ধান'),
          paragraphs: [
            l(
              'A foundational milestone in modern molecular diabetology was the discovery by Domenico Accili and colleagues that beta-cell failure in type 2 diabetes is primarily driven by phenotypic dedifferentiation rather than immediate apoptosis [4, 6]. Utilizing genetic lineage-tracing mouse models, researchers tracked beta cells tagged with fluorescent reporter proteins (e.g., Rosa26-YFP driven by the insulin promoter) under metabolic stress [6]. This elegant technique enabled investigators to follow the physical fate of beta cells even after they completely stopped expressing insulin [6].',
              'আধুনিক ডায়াবেটোলজির অন্যতম শ্রেষ্ঠ আবিষ্কার হলো ডোমেনিকো আচ্চিলি ও তাঁর সহকর্মীদের গবেষণা, যেখানে তাঁরা প্রমাণ করেন যে ডায়াবেটিসে বিটা-কোষগুলো মূলত মরে যায় না, বরং নিজেদের পরিচয় হারিয়ে নিষ্ক্রিয় বা আদিম অবস্থায় (Dedifferentiation) ফিরে যায় [৪, ৬]। বিশেষ জেনেটিক ট্র্যাকিং পদ্ধতির মাধ্যমে বিজ্ঞানীরা দেখতে পান যে বিটা-কোষগুলো ইনসুলিন তৈরি বন্ধ করার পরেও অগ্ন্যাশয়ের ভেতরে জীবিত অবস্থাতেই অবস্থান করে [৬]।'
            ),
            l(
              'Under chronic oxidative, lipotoxic, and ER stress, mature beta cells downregulate the core transcriptional network that defines beta-cell identity, specifically Pancreatic and Duodenal Homeobox 1 (PDX-1), V-maf musculoaponeurotic fibrosarcoma oncogene homolog A (MafA), and NK6 Homeobox 1 (Nkx6.1) [6]. Deprived of these lineage-defining transcription factors, the cells lose expression of GLUT2, glucokinase (GCK), and preproinsulin, rendering them completely unresponsive to glycemic fluctuations [6].',
              'দীর্ঘদিন অতিরিক্ত চর্বি ও বিষাক্ত চাপে থাকার কারণে বিটা-কোষগুলো তাদের নিজস্ব পরিচয় নির্ধারণকারী মূল জিনগুলোকে (PDX-1, MafA) বন্ধ করে দেয় [৬]। এর ফলে কোষগুলো গ্লুকোজ চেনার ক্ষমতা হারিয়ে ফেলে এবং খাবার খাওয়ার পরেও রক্তে কোনো ইনসুলিন তৈরি করে না [৬]।'
            ),
            l(
              'Lineage tracing demonstrated that these dedifferentiated cells do not undergo cell death; instead, they regress into an immature, progenitor-like endocrine state, frequently re-expressing embryonic markers such as Neurogenin 3 (Ngn3) and Oct4 [6]. Remarkably, a subset of dedifferentiated beta cells even transdifferentiate into other islet cell types, converting into glucagon-secreting alpha cells or somatostatin-secreting delta cells [6]. This aberrant transdifferentiation explains the paradox of hyperglucagonemia in type 2 diabetes, where inappropriate glucagon secretion exacerbates hepatic gluconeogenesis [6].',
              'বংশানুক্রমিক ট্র্যাকিংয়ে দেখা গেছে যে এই কোষগুলো ভ্রূণাবস্থার আদিম রূপ ধারণ করে [৬]। এমনকি কিছু বিটা-কোষ রূপান্তরিত হয়ে ক্ষতিকর আলফা-কোষে পরিণত হয় এবং গ্লুকাগন হরমোন তৈরি করতে শুরু করে [৬]। এই কারণেই ডায়াবেটিস রোগীদের রক্তে ক্ষতিকর গ্লুকাগন বেড়ে যায় যা লিভারকে দিয়ে আরও বেশি চিনি তৈরি করায় [৬]।'
            ),
            l(
              'The paramount clinical implication of beta-cell dedifferentiation is its inherent reversibility [4, 6]. Unlike apoptotic cells, which are irreversibly lost, dedifferentiated beta cells retain their genomic integrity and can redifferentiate into fully functional, insulin-secreting mature beta cells if metabolic stress is relieved [4, 6]. This molecular plasticity provides the biological foundation for the dramatic diabetes remission observed in the DiRECT trial, where rapid, profound negative energy balance clears local lipotoxicity, enabling dormant beta cells to re-express PDX-1 and restore first-phase insulin secretion [4, 6].',
              'এই আবিষ্কারের সবচেয়ে বড় আশার দিক হলো—এই রূপান্তর সম্পূর্ণ পরিবর্তনযোগ্য [৪, ৬]। মৃত কোষকে আর ফিরিয়ে আনা না গেলেও, ঘুমিয়ে থাকা এই বিটা-কোষগুলোকে আবার জাগিয়ে তোলা পুরোপুরি সম্ভব [৪, ৬]। ডাইরেক্ট ট্রায়ালে যখন রোগীদের শরীরের বিষাক্ত চর্বি কমিয়ে ফেলা হয়, তখন এই ঘুমন্ত বিটা-কোষগুলো পুনরায় নিজেদের স্বরূপে ফিরে আসে এবং স্বাভাবিকভাবে ইনসুলিন তৈরি করে সম্পূর্ণ রোগমুক্তি ঘটায় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Chrono-Nutrition, Circadian Clocks & Melatonin-Insulin Crosstalk', '৪. সময়ানুগ পুষ্টিবিজ্ঞান (ক্রোনো-নিউট্রিশন), দেহঘড়ি ও মেলাটোনিন-ইনসুলিন সম্পর্ক'),
          paragraphs: [
            l(
              'Chrono-nutrition investigates the profound bidirectional relationship between the timing of nutrient intake and cell-autonomous circadian rhythms [4]. Nearly all peripheral metabolic tissues—including the liver, skeletal muscle, white adipose tissue, and pancreatic islets—possess autonomous molecular circadian clocks [4]. These peripheral oscillators consist of an autoregulatory transcriptional-translational feedback loop driven by the heterodimeric transcription factors CLOCK and BMAL1, which activate transcription of Period (PER1, PER2, PER3) and Cryptochrome (CRY1, CRY2) genes [4].',
              'ক্রোনো-নিউট্রিশন হলো খাদ্য গ্রহণের সময় এবং শরীরের প্রাকৃতিক দেহঘড়ির (সার্কাডিয়ান ছন্দ) পারস্পরিক সম্পর্কের বিজ্ঞান [৪]। আমাদের লিভার, পেশি এবং অগ্ন্যাশয়ের প্রতিটি কোষে নিজস্ব আণবিক দেহঘড়ি রয়েছে [৪]। এই ঘড়িগুলো CLOCK এবং BMAL1 নামের বিশেষ প্রোটিনের মাধ্যমে ২৪ ঘণ্টার চক্রে শরীরের সমস্ত বিপাকীয় ক্রিয়া নিয়ন্ত্রণ করে [৪]।'
            ),
            l(
              'Peripheral metabolic clocks dictate that systemic insulin sensitivity exhibits marked diurnal variation, peaking in the biological morning and nadiring during the biological night [4]. In skeletal muscle, BMAL1-CLOCK heterodimers rhythmically regulate the transcription of TBC1D1 and AS160, optimizing GLUT4 translocation and insulin sensitivity during daytime feeding hours [4]. In the liver, circadian rhythms regulate gluconeogenic enzyme transcription, priming hepatic glucose output to maintain euglycemia during the overnight fast and suppressing it during the daylight active phase [4].',
              'দেহঘড়ির নিয়মানুযায়ী দিনের শুরুতে সকালের দিকে ইনসুলিনের সংকেত গ্রহণ ক্ষমতা সবচেয়ে বেশি থাকে এবং রাতের বেলা তা সর্বনিম্নে নেমে আসে [৪]। দিনের বেলা মাংসপেশিতে গ্লুকোজ প্রবেশের চ্যানেলগুলো সবচেয়ে সক্রিয় থাকে [৪]। অন্যদিকে লিভার রাতে না খেয়ে থাকার সময় স্বাভাবিক সুগার ধরে রাখতে সামান্য গ্লুকোজ ছাড়ে, যা দিনের আলো ফোটার পর বন্ধ হয়ে যাওয়ার কথা [৪]।'
            ),
            l(
              'Late-evening food consumption induces circadian misalignment, characterized by the ingestion of nutrients when nocturnal melatonin secretion is elevated [4]. Melatonin secreted by the pineal gland binds to high-affinity Gi-protein-coupled MT1 receptors on pancreatic beta cells, inhibiting adenylate cyclase, lowering intracellular cAMP, and suppressing insulin secretion [4]. Consequently, consuming a high-glycemic carbohydrate meal late at night—when melatonin is active and peripheral insulin sensitivity is nadiring—results in severe, prolonged postprandial hyperglycemia and exaggerated lipogenesis [4].',
              'রাত করে খাবার খেলে এই দেহঘড়ির সাথে মারাত্মক দ্বন্দ্ব তৈরি হয়, কারণ তখন মস্তিষ্কে মেলাটোনিন ঘুমের হরমোন নিঃসরণ শুরু হয় [৪]। মেলাটোনিন অগ্ন্যাশয়ের বিটা-কোষের MT1 রিসেপ্টরে বসে ইনসুলিন নিঃসরণ বন্ধ করে রাখে [৪]। তাই গভীর রাতে শর্করা জাতীয় ভারী খাবার খেলে রক্তের সুগার আকাশচুম্বী হয় এবং তা দীর্ঘক্ষণ ধরে রক্তনালীর মারাত্মক ক্ষতি করতে থাকে [৪]।'
            ),
            l(
              'Time-Restricted Eating (TRE; e.g., an 8-hour feeding window from 08:00 to 16:00, or Early TRE) aligns nutrient influx with peak circadian insulin sensitivity and digestive enzyme output [4]. Early TRE protocols significantly reduce 24-hour mean glycemic excursions, lower fasting insulin, decrease systemic blood pressure, and improve insulin sensitivity even independently of gross weight loss, providing an accessible behavioral chronobiological tool in type 2 diabetes management [4].',
              'দিনের শুরুর দিকে খাবার খাওয়া (Early Time-Restricted Eating; যেমন সকাল ৮টা থেকে বিকেল ৪টার মধ্যে খাওয়া শেষ করা) দেহঘড়ির সাথে পরম সামঞ্জস্য তৈরি করে [৪]। গবেষণায় দেখা গেছে যে দিনের আলো থাকতে খাবার পর্ব শেষ করলে ওজন কমার আগেই ২৪ ঘণ্টার গড় সুগার, রক্তচাপ এবং ইনসুলিন রেজিস্ট্যান্সে নাটকীয় উন্নতি ঘটে [৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Bariatric Surgery vs Intensive Lifestyle: Gut Peptide & Bile Acid Remodeling', '৫. ব্যারিয়াট্রিক সার্জারি বনাম নিবিড় খাদ্যাভ্যাস: অন্ত্রের পেপটাইড ও পিত্ত অ্যাসিড পুনর্বিন্যাস'),
          paragraphs: [
            l(
              'Metabolic and bariatric surgical procedures—predominantly Roux-en-Y Gastric Bypass (RYGB) and Vertical Sleeve Gastrectomy (VSG)—yield rapid, dramatic diabetes remission that occurs days after surgery, long before substantial weight loss has been achieved [4, 6]. This striking metabolic phenomenon led researchers to discover that surgical alteration of the gastrointestinal tract fundamentally remodels gut endocrine signaling, bile acid kinetics, and systemic nutrient sensing [4, 6].',
              'ব্যারিয়াট্রিক সার্জারি (যেমন গ্যাস্ট্রিক বাইপাস) করার মাত্র কয়েকদিনের মাথায় ওজন কমার আগেই ডায়াবেটিস আশ্চর্যজনকভাবে ভালো হয়ে যায় [৪, ৬]। চিকিৎসাবিজ্ঞানীরা গবেষণা করে দেখেছেন যে পরিপাকতন্ত্র কেটে নতুন পথ তৈরি করার কারণে অন্ত্রের হরমোন, পিত্তরস এবং পুষ্টি শোষণে এক বৈপ্লবিক শারীরবৃত্তীয় পরিবর্তন ঘটে [৪, ৬]।'
            ),
            l(
              'In RYGB, bypassing the stomach, duodenum, and proximal jejunum accelerates the delivery of undigested, hyperosmolar chyme directly into the distal ileum (the "hindgut hypothesis") [4]. Rapid nutrient contact with distal enteroendocrine L-cells triggers an immediate, supraphysiological surge in postprandial Glucagon-Like Peptide-1 (GLP-1) and Peptide YY (PYY) secretion, rising 5- to 10-fold above presurgical baseline [4]. This amplified GLP-1 surge restores glucose-dependent insulin secretion and suppresses glucagon, while PYY potently induces central satiety [4].',
              'গ্যাস্ট্রিক বাইপাসের ফলে খাবার সরাসরি অন্ত্রের শেষ প্রান্তে গিয়ে আঘাত করে (Hindgut Hypothesis) [৪]। এর ফলে অন্ত্রের L-কোষগুলো এক অবিশ্বাস্য মাত্রায় প্রাকৃতিক GLP-1 এবং PYY হরমোন নিঃসরণ শুরু করে, যা আগের চেয়ে ৫ থেকে ১০ গুণ বেশি [৪]। এই বিপুল ইনক্রেটিন নিঃসরণ অগ্ন্যাশয় থেকে ইনসুলিন তৈরি বহুগুণ বাড়িয়ে দেয় এবং ক্ষতিকর গ্লুকাগন পুরোপুরি বন্ধ করে দেয় [৪]।'
            ),
            l(
              'Furthermore, anatomical rearrangement profoundly alters bile acid metabolism [4]. Bypassing the proximal bowel prevents early reabsorption of bile acids, dramatically increasing circulating systemic bile acid concentrations [4]. Circulating bile acids bind to the Farnesoid X Receptor (FXR) in hepatocytes and enterocytes, stimulating Fibroblast Growth Factor 19 (FGF19) secretion, which downregulates hepatic lipogenesis and enhances glycogen synthesis [4]. Concurrently, bile acids activate the cell-surface G-protein-coupled receptor Takeda G-protein Receptor 5 (TGR5) on L-cells and skeletal muscle, further amplifying GLP-1 release and stimulating energy expenditure [4].',
              'তাছাড়া এই সার্জারির ফলে রক্তে পিত্ত অ্যাসিডের (Bile Acids) সংকেত নাটকীয়ভাবে বেড়ে যায় [৪]। এই পিত্ত অ্যাসিড FXR রিসেপ্টরের মাধ্যমে লিভারে নতুন চর্বি তৈরি বন্ধ করে দেয় এবং কোষে চর্বি পোড়ানোর গতি বাড়িয়ে শক্তি খরচ বাড়িয়ে তোলে [৪]।'
            ),
            l(
              'Crucially, comparative metabolic studies demonstrate that intensive hypocaloric Medical Nutrition Therapy (TDR, 800 kcal/day) matches the acute hepatic metabolic improvements of bariatric surgery during the first 1 to 2 weeks [4, 6]. Both interventions trigger immediate negative energy balance, rapidly depleting intrahepatic glycogen and defatting the liver to normalize fasting glucose [6]. While bariatric surgery provides permanent anatomical endocrine augmentation, structured intensive MNT offers a non-invasive, scalable nutritional pathway capable of achieving identical physiological defatting and long-term diabetes remission [4, 6].',
              'সবচেয়ে বিস্ময়কর আবিষ্কার হলো—তীব্র ক্যালোরি নিয়ন্ত্রিত পুষ্টি থেরাপি (TDR ৮০০ ক্যালোরি পথ্য) প্রথম কয়েক সপ্তাহে সার্জারির মতোই হুবহু একই রকম শারীরিক উপকারিতা প্রদান করে [৪, ৬]। উভয় ক্ষেত্রেই লিভারের চর্বি অতি দ্রুত গলে যায় এবং খালি পেটে সুগার পুরোপুরি স্বাভাবিক হয়ে আসে [৬]। যদিও সার্জারিতে স্থায়ী শারীরিক পরিবর্তন ঘটে, কিন্তু সঠিক নিয়মে পুষ্টি থেরাপির মাধ্যমে কোনো কাটাছেঁড়া ছাড়াই স্বাভাবিকভাবে লিভার ও অগ্ন্যাশয় চর্বিমুক্ত করে আজীবন সুস্থ থাকা সম্ভব [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Research Frontiers & Precision Diabetology', '৬. আধুনিক গবেষণা ও নির্ভুল ডায়াবেটোলজি'),
          paragraphs: [
            l(
              'The horizon of metabolic research has definitively moved beyond viewing type 2 diabetes as a monolithic entity, embracing precision diabetology based on deep phenotypic clustering [4]. Landmark cluster analyses by Ahlqvist and colleagues stratified adult-onset diabetes into five distinct subgroups: Severe Autoimmune Diabetes (SAID), Severe Insulin-Deficient Diabetes (SIDD), Severe Insulin-Resistant Diabetes (SIRD), Mild Obesity-Related Diabetes (MOD), and Mild Age-Related Diabetes (MARD) [4]. Each subgroup exhibits distinct genetic architectures, diabetic complication risks (e.g., elevated nephropathy in SIRD, retinopathy in SIDD), and differential therapeutic responses to targeted MNT [4].',
              'আধুনিক চিকিৎসাবিজ্ঞানে ডায়াবেটিসকে আর একটি একক রোগ হিসেবে দেখা হয় না, বরং প্রতিটি রোগীর সুনির্দিষ্ট বৈশিষ্ট্যের ওপর ভিত্তি করে এটিকে ৫টি প্রধান ভাগে বিভক্ত করা হয়েছে (যেমন মারাত্মক ইনসুলিন রেজিস্ট্যান্স, ইনসুলিনের ঘাটতি ইত্যাদি) [৪]। এর ফলে প্রতিটি রোগীর জন্য আলাদা এবং নির্ভুল পুষ্টি পরিকল্পনা তৈরি করা সম্ভব হচ্ছে [৪]।'
            ),
            l(
              'High-resolution multi-omics—integrating whole-genome sequencing, transcriptomics, metabolomics, and deep lipidomics—now enables the quantification of individual molecular risk profiles [4]. Lipidomic profiling can detect subclinical accumulation of specific toxic ceramide species (e.g., C16:0, C18:0, C24:1 ceramides) and distinct sn-1,2-DAG isomers in circulation years before overt glycemic deterioration occurs, opening new windows for preemptive nutritional interventions [2, 4].',
              'আধুনিক রক্তের লিপিডোমিক্স পরীক্ষার মাধ্যমে ডায়াবেটিস প্রকাশ পাওয়ার বহু বছর আগেই রক্তে ক্ষতিকর সিরামাইড ও ডিএজি (DAG) চর্বির উপস্থিতি শনাক্ত করা সম্ভব হচ্ছে, যার ফলে আগে থেকেই খাদ্য পরিবর্তনের মাধ্যমে রোগ প্রতিরোধ করা যায় [২, ৪]।'
            ),
            l(
              'Continuous Glucose Monitoring (CGM) paired with machine-learning algorithms is revolutionizing personalized nutrition [4]. Groundbreaking research by Zeevi, Segal, and colleagues demonstrated immense inter-individual variability in postprandial glycemic responses to identical meals, driven largely by unique gut microbiome compositions, baseline insulin sensitivity, and circadian timing [4]. Predictive machine-learning algorithms integrating microbiome metagenomics and real-time CGM data can accurately forecast personalized postprandial excursions, enabling tailored dietary prescriptions that minimize glycemic volatility [4].',
              'কনটিনিউয়াস গ্লুকোজ মনিটরিং (CGM) এবং কৃত্রিম বুদ্ধিমত্তার সমন্বয়ে পুষ্টিবিজ্ঞানে এক নতুন যুগের সূচনা হয়েছে [৪]। একই খাবার খেলে দুজন ভিন্ন মানুষের শরীরে ভিন্ন প্রতিক্রিয়া হতে পারে, যা নির্ভর করে তাদের অন্ত্রের ব্যাকটেরিয়ার ধরণের ওপর [৪]। কৃত্রিম বুদ্ধিমত্তা রোগীর পেটের ব্যাকটেরিয়া ও দৈনন্দিন সুগার বিশ্লেষণ করে প্রতিটি মানুষের জন্য একদম নিখুঁত পুষ্টি পরামর্শ দিতে সক্ষম হচ্ছে [৪]।'
            ),
            l(
              'Ultimately, the translation of these molecular insights confirms the central thesis of evidence-based clinical dietetics: targeted Medical Nutrition Therapy is not a passive adjunct to pharmacotherapy, but a primary, disease-modifying molecular intervention capable of directly reversing the organ-specific lipotoxic cascades that drive human metabolic disease [1, 4, 6].',
              'সবশেষে আধুনিক আণবিক বিজ্ঞান প্রমাণ করেছে যে পুষ্টি থেরাপি কেবল ওষুধের সহযোগী কোনো সাধারণ বিষয় নয়; এটি একটি সুনির্দিষ্ট আণবিক চিকিৎসা যা মানবদেহের ক্ষতিকর চর্বি ও ইনসুলিন রেজিস্ট্যান্সের মূল কারণকে শিকড় থেকে নির্মূল করে সম্পূর্ণ সুস্থ জীবন ফিরিয়ে দিতে সক্ষম [১, ৪, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'What is the precise biochemical mechanism by which intracellular sn-1,2-diacylglycerol (DAG) impairs insulin-stimulated glucose uptake in skeletal muscle?',
      'পেশিকোষে অতিরিক্ত ডাইঅ্যাসাইলগ্লিসারল (DAG) জমা হলে তা কোন সুনির্দিষ্ট রাসায়নিক প্রক্রিয়ায় ইনসুলিনের মাধ্যমে গ্লুকোজ গ্রহণ বন্ধ করে দেয়?'
    ),
    options: [
      l(
        'DAG activates novel PKC-theta, which phosphorylates IRS-1 on Ser307/Ser1101, sterically blocking insulin receptor tyrosine phosphorylation and halting PI3K/Akt/AS160 signaling.',
        'DAG কোষের PKC-theta এনজাইম সক্রিয় করে IRS-1 এর সেরিন অংশে ফসফেট যুক্ত করে, যা টাইরোসিন ফসফোরাইলেশন আটকে দিয়ে PI3K/Akt/AS160 সংকেত প্রবাহ বন্ধ করে দেয়।'
      ),
      l(
        'DAG directly degrades the GLUT4 glucose transporter protein within lysosomes before it reaches the cell surface.',
        'DAG সরাসরি লাইসোজোমের ভেতর GLUT4 প্রোটিনকে ধ্বংস করে ফেলে।'
      ),
      l(
        'DAG binds to the extracellular alpha-subunit of the insulin receptor, preventing insulin ligand docking.',
        'DAG কোষের বাইরে ইনসুলিন রিসেপ্টরে গিয়ে আটকে ইনসুলিনকে বসতে বাধা দেয়।'
      ),
      l(
        'DAG converts ATP into AMP, starving the cell of metabolic energy required for hexokinase function.',
        'DAG কোষের সমস্ত এটিপি শেষ করে ফেলে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Extensive mechanistic research demonstrates that ectopic DAG binds to the C1 domain of novel PKC-theta in muscle (and PKC-epsilon in liver), causing membrane translocation and activation. Activated PKC-theta phosphorylates inhibitory serine residues on IRS-1 (particularly Ser307 and Ser1101), which prevents insulin receptor tyrosine kinase from phosphorylating IRS-1 on key tyrosine residues, thereby aborting downstream PI3K/Akt/AS160 signaling and GLUT4 translocation.',
      'গবেষণায় প্রমাণিত যে অতিরিক্ত DAG মাংসপেশির PKC-theta এনজাইমকে কোষঝিল্লিতে টেনে এনে সক্রিয় করে। সক্রিয় PKC এনজাইম IRS-1 এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে অকেজো করে দেয়। ফলে টাইরোসিন ফসফোরাইলেশন ঘটে না এবং PI3K/Akt/AS160 সংকেত বন্ধ হয়ে GLUT4 চ্যানেল ঝিল্লিতে আসতে ব্যর্থ হয়।'
    ),
  },
}

export const nutrition18ObesityT2DMNT = nutrition18ObesityT2DMNTLesson
