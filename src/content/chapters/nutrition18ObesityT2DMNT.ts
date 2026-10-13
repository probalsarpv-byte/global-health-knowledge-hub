import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const diabetesRefs = [
  {
    id: 'hall-ajcn-energy-balance',
    authors: 'Kevin D. Hall et al.',
    title: 'The energy balance model of obesity: beyond calories in, calories out',
    organization: 'American Journal of Clinical Nutrition',
    year: 2022,
    url: 'https://doi.org/10.1093/ajcn/nqac031',
    doi: '10.1093/ajcn/nqac031',
  },
  {
    id: 'shulman-nejm-ectopic-fat',
    authors: 'Gerald I. Shulman',
    title: 'Ectopic fat in insulin resistance, dyslipidemia, and cardiometabolic disease',
    organization: 'The New England Journal of Medicine',
    year: 2014,
    url: 'https://doi.org/10.1056/NEJMra1011035',
    doi: '10.1056/NEJMra1011035',
  },
  {
    id: 'petersen-physiol-rev-insulin-resistance',
    authors: 'Max C. Petersen, Gerald I. Shulman',
    title: 'Mechanisms of insulin action and insulin resistance',
    organization: 'Physiological Reviews',
    year: 2018,
    url: 'https://doi.org/10.1152/physrev.00063.2017',
    doi: '10.1152/physrev.00063.2017',
  },
  {
    id: 'lean-lancet-direct-trial',
    authors: 'Michael E. J. Lean et al.',
    title: 'Primary care-led weight management for remission of type 2 diabetes (DiRECT): an open-label, cluster-randomised trial',
    organization: 'The Lancet',
    year: 2018,
    url: 'https://doi.org/10.1016/S0140-6736(17)33102-1',
    doi: '10.1016/S0140-6736(17)33102-1',
  },
  {
    id: 'evert-diabetes-care-mnt-consensus',
    authors: 'Alison B. Evert et al.',
    title: 'Nutrition therapy for adults with diabetes or prediabetes: A consensus report',
    organization: 'Diabetes Care',
    year: 2019,
    url: 'https://doi.org/10.2337/dci19-0014',
    doi: '10.2337/dci19-0014',
  },
  {
    id: 'taylor-cell-metab-twin-cycles',
    authors: 'Roy Taylor et al.',
    title: 'Remission of Human Type 2 Diabetes Requires Decrease in Liver and Pancreas Fat Content But Is Dependent Upon Capacity for beta Cell Recovery',
    organization: 'Cell Metabolism',
    year: 2018,
    url: 'https://doi.org/10.1016/j.cmet.2018.07.003',
    doi: '10.1016/j.cmet.2018.07.003',
  },
]

export const nutrition18ObesityT2DMNTLesson: LessonTopic = {
  id: 'topic.nutrition.nutrition-obesity-t2d-mnt',
  slug: 'nutrition-obesity-t2d-mnt',
  version: 1,
  updatedAt: '2026-10-13',
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
  lastReviewed: '2026-10-13',
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
  references: diabetesRefs,
  evidenceBySection: {
    introduction: ['hall-ajcn-energy-balance', 'shulman-nejm-ectopic-fat'],
    structure: ['shulman-nejm-ectopic-fat', 'petersen-physiol-rev-insulin-resistance'],
    mechanism: ['petersen-physiol-rev-insulin-resistance', 'taylor-cell-metab-twin-cycles'],
    integration: ['evert-diabetes-care-mnt-consensus', 'lean-lancet-direct-trial'],
    practice: ['evert-diabetes-care-mnt-consensus', 'lean-lancet-direct-trial'],
    takeaways: ['lean-lancet-direct-trial', 'taylor-cell-metab-twin-cycles'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Adipose Tissue Expansion & Hypertrophic Hypoxia', '১. চর্বি কোষের স্ফীতি ও অক্সিজেনের ঘাটতি'), sectionId: 'introduction' },
      { id: 'sec-dag-pkc', label: l('2. Ectopic Lipotoxicity: The DAG-PKC Uncoupling Axis', '২. ক্ষতিকর চর্বি জমা: ডিএজি-পিকেসি সংকেত বিভাজন'), sectionId: 'structure' },
      { id: 'sec-hepatic', label: l('3. Hepatic Gluconeogenesis & FOXO1 Nuclear Translocation', '৩. যকৃতের গ্লুকোজ উৎপাদন ও ফক্সও১ সক্রিয়করণ'), sectionId: 'mechanism' },
      { id: 'sec-mnt', label: l('4. Evidence-Based MNT: ADA/EASD Nutritional Protocols', '৪. প্রমাণভিত্তিক পুষ্টি থেরাপি: এডিএ/ইএএসডি নির্দেশিকা'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. The Twin-Cycle Model & DiRECT Remission Protocol', '৫. টুইন-সাইকেল মডেল ও ডাইরেক্ট রোগমুক্তি প্রোটোকল'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Crown-Like Structures (CLS)', 'ক্রাউন-লাইক স্ট্রাকচার (CLS)'),
        definition: l(
          'Histological arrangements where CD11c+ pro-inflammatory M1 macrophages encircle necrotic, hypertrophic adipocytes, secreting TNF-alpha, IL-6, and MCP-1.',
          'কোষীয় গঠন যেখানে ক্ষতিকর এম১ ম্যাক্রোফেজগুলো মৃত ও অতিরিক্ত ফোলা চর্বি কোষকে বৃত্তাকারে ঘিরে রেখে প্রদাহ সৃষ্টিকারী সাইটোকাইন নিঃসরণ করে।'
        ),
      },
      {
        term: l('Diacylglycerol-PKC Axis', 'ডাইঅ্যাসাইলগ্লিসারল-পিকেসি অক্ষ'),
        definition: l(
          'Ectopic intracellular accumulation of sn-1,2-diacylglycerol that recruits novel PKC isoforms (PKC-theta in muscle, PKC-epsilon in liver) to inactivate IRS-1.',
          'কোষের ভেতর জমা হওয়া ডাইঅ্যাসাইলগ্লিসারল যা পিকেসি এনজাইম সক্রিয় করে ইনসুলিন গ্রাহক প্রোটিনকে অকেজো করে দেয়।'
        ),
      },
      {
        term: l('Inhibitory IRS-1 Ser307 Phosphorylation', 'আইআরএস-১ সেরিন-৩০৭ প্রতিরোধক ফসফোরাইলেশন'),
        definition: l(
          'Pathological phosphorylation of serine residues on insulin receptor substrate 1 that prevents tyrosine phosphorylation and halts downstream GLUT4 translocation.',
          'ইনসুলিন রিসেপ্টর সাবস্ট্রেট ১-এর একটি অস্বাভাবিক পরিবর্তন যা গ্লুকোজ প্রবেশকারী চ্যানেল (GLUT4) ঝিল্লিতে আসা পুরোপুরি বন্ধ করে দেয়।'
        ),
      },
      {
        term: l('Twin-Cycle Beta-Cell Remission', 'টুইন-সাইকেল বিটা-কোষ পুনরুদ্ধার'),
        definition: l(
          'The pathophysiological paradigm demonstrating that sustained negative energy balance clears ectopic fat from the liver and pancreas, rescuing dormant beta cells.',
          'একটি যুগান্তকারী চিকিৎসাতত্ত্ব যা প্রমাণ করে যে কঠোর ক্যালোরি নিয়ন্ত্রণের মাধ্যমে লিভার ও অগ্ন্যাশয়ের জমা চর্বি পুড়িয়ে বিটা-কোষকে পুনরায় সচল করা সম্ভব।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('DiRECT-Style Diabetes Remission Protocol for Newly Diagnosed Type 2 Diabetes', 'নতুন শনাক্ত টাইপ ২ ডায়াবেটিসে ডাইরেক্ট প্রোটোকলের মাধ্যমে রোগমুক্তি নিশ্চিতকরণ'),
        steps: [
          l(
            'Step 1: Patient Evaluation & Inclusion Criteria: A 49-year-old male with type 2 diabetes diagnosed 14 months prior presents with BMI 33.2 kg/m2, HbA1c 7.9%, fasting plasma glucose 156 mg/dL, and elevated ALT (58 U/L). He takes metformin 1,000 mg twice daily.',
            'ধাপ ১: প্রাথমিক রোগী মূল্যায়ন: ৪৯ বছর বয়সী ব্যক্তি ১ বছর পূর্বে টাইপ ২ ডায়াবেটিসে আক্রান্ত হয়েছেন। বিএমআই ৩৩.২, এইচবিএ১সি ৭.৯%, খালি পেটে সুগার ১৫৬ এবং ফ্যাটি লিভার রয়েছে। তিনি মেটফর্মিন খাচ্ছেন।'
          ),
          l(
            'Step 2: Total Diet Replacement (TDR) Phase (Weeks 1 to 12): Initiate an evidence-based low-energy formula diet providing 825–853 kcal/day (macronutrient breakdown: 59% carbohydrate, 26% protein, 13% fat, and 2% fiber with comprehensive micronutrient fortification). Withdraw metformin on day 1 with daily capillary glucose monitoring.',
            'ধাপ ২: সম্পূর্ণ নিয়ন্ত্রিত খাদ্য প্রতিস্থাপন পর্যায় (১ থেকে ১২ সপ্তাহ): প্রতিদিন ৮২৫-৮৫৩ ক্যালোরির বিশেষ পুষ্টিকর তরল খাবার শুরু করা হলো। প্রথম দিন থেকেই মেটফর্মিন ওষুধ বন্ধ রেখে নিয়মিত রক্তের গ্লুকোজ পর্যবেক্ষণ করা হলো।'
          ),
          l(
            'Step 3: Weight Loss Milestone & Hepatic Steatosis Resolution: By week 12, the patient achieves a 15.4 kg (14.8%) weight loss. Magnetic resonance spectroscopy (MRS) confirms a reduction in intrahepatic lipid content from 16.2% to 2.1%, restoring hepatic insulin sensitivity and suppressing uninhibited nocturnal gluconeogenesis.',
            'ধাপ ৩: ওজনের লক্ষ্যমাত্রা ও লিভারের চর্বি দূরীকরণ: ১২ সপ্তাহে রোগীর ওজন ১৫.৪ কেজি কমে গেল। এমআরআই স্ক্যানে দেখা গেল যকৃতের জমা চর্বি ১৬.২% থেকে কমে স্বাভাবিক ২.১%-এ নেমে এসেছে এবং লিভারের অতিরিক্ত গ্লুকোজ তৈরি বন্ধ হয়েছে।'
          ),
          l(
            'Step 4: Structured Food Reintroduction & Beta-Cell Rescue: Stepwise reintroduction of whole foods over 8 weeks using a high-fiber Mediterranean dietary pattern (45% low-GI carbohydrate, 20% protein, 35% healthy fats). Intrapancreatic fat drops below threshold, restoring first-phase insulin secretion; off-medication HbA1c at month 12 is 5.8% (full clinical remission).',
            'ধাপ ৪: স্বাভাবিক পুষ্টিকর খাবারে প্রত্যাবর্তন ও বিটা-কোষ সক্রিয়করণ: পরবর্তী ৮ সপ্তাহে ধীরে ধীরে ভূমধ্যসাগরীয় ডায়েট চালু করা হলো। অগ্ন্যাশয়ের চর্বি দূর হওয়ায় বিটা-কোষ আবার ইনসুলিন তৈরি শুরু করল। কোনো ওষুধ ছাড়াই ১ বছর পর রোগীর HbA1c নেমে এলো ৫.৮%-এ (সম্পূর্ণ রোগমুক্তি)।'
          ),
        ],
        conclusion: l(
          'Substantial weight loss (>15 kg) achieved early in the disease trajectory reverses hepatic and intrapancreatic lipotoxicity, demonstrating that type 2 diabetes is a reversible metabolic condition rather than an inevitably progressive disease.',
          'রোগের প্রাথমিক অবস্থায় ১৫ কেজির বেশি ওজন কমাতে পারলে লিভার ও অগ্ন্যাশয়ের ক্ষতিকর চর্বি দূর হয়ে রোগ সম্পূর্ণ নিরাময় হতে পারে; ডায়াবেটিস কোনো চিরস্থায়ী অপ্রতিরোধ্য রোগ নয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does ectopic intracellular accumulation of sn-1,2-diacylglycerol (DAG) biochemically uncouple insulin receptor tyrosine kinase activity from downstream GLUT4 translocation in skeletal muscle?',
          'পেশিকোষে অতিরিক্ত ডাইঅ্যাসাইলগ্লিসারল (DAG) জমা হলে তা কীভাবে আণবিক স্তরে ইনসুলিনের সংকেত নষ্ট করে গ্লুকোজ প্রবেশে বাধা দেয়?'
        ),
        answer: l(
          'When intracellular fatty acid influx exceeds mitochondrial beta-oxidation and triacylglycerol storage capacity, cytosolic sn-1,2-diacylglycerol accumulates. DAG binds to the C1 regulatory domain of novel protein kinase C-theta (PKC-theta) in skeletal muscle, translocating it to the plasma membrane. Activated PKC-theta phosphorylates insulin receptor substrate 1 (IRS-1) on inhibitory serine residues (specifically Ser307 and Ser1101), which prevents the insulin receptor tyrosine kinase from phosphorylating IRS-1 on key regulatory tyrosine residues. As a result, p85 regulatory subunit recruitment of PI3K is blocked, downstream Akt (protein kinase B) activation fails, and AS160 phosphorylation is halted, preventing GLUT4 storage vesicles from translocating to and fusing with the plasma membrane.',
          'পেশিকোষে মুক্ত ফ্যাটি অ্যাসিড বেশি ঢুকলে তা পুড়ে শেষ হতে না পেরে ডাইঅ্যাসাইলগ্লিসারলে (DAG) রূপান্তরিত হয়। এই DAG পেশিকোষের PKC-theta এনজাইমকে কোষঝিল্লিতে টেনে এনে সক্রিয় করে। সক্রিয় PKC এনজাইম ইনসুলিন রিসেপ্টর সাবস্ট্রেট ১ (IRS-1) এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে অকেজো করে দেয়। এর ফলে ইনসুলিন যুক্ত হওয়া সত্ত্বেও Akt এবং PI3K এনজাইম সচল হতে পারে না, যার কারণে গ্লুকোজ বহনকারী GLUT4 ভেসিকলগুলো কোষের উপরিভাগে এসে গ্লুকোজ গ্রহণ করতে পারে না।'
        ),
      },
      {
        question: l(
          'What is the physiological difference between viscous soluble fibers (e.g., beta-glucan, psyllium) and insoluble fibers (e.g., cellulose) in the postprandial management of glycemic excursions?',
          'খাবার পরবর্তী রক্তের গ্লুকোজ নিয়ন্ত্রণে দ্রবণীয় আঠালো আঁশ (যেমন ওটসের বিটা-গ্লুকান) এবং অদ্রবণীয় আঁশের (যেমন সেলুলোজ) কার্যপদ্ধতির মূল শারীরবৃত্তীয় পার্থক্য কী?'
        ),
        answer: l(
          'Viscous soluble fibers hydrate in the aqueous gastric and intestinal fluid to form a high-viscosity macromolecular gelatinous matrix. This gel markedly increases the resistance of the luminal unstirred water layer adjacent to the brush border, impeding the diffusion of amylolytic enzymes and glucose molecules toward enterocyte SGLT1 transporters. It also decelerates gastric emptying, stretching postprandial glucose absorption over several hours and eliminating sharp arterial hyperglycemia spikes. In contrast, insoluble fibers do not form viscous gels or delay glucose diffusion; their primary physiological actions are adding mechanical fecal bulk and shortening colonic transit time.',
          'দ্রবণীয় আঠালো আঁশ পানির সংস্পর্শে এসে একটি ঘন ও পিচ্ছিল জেল তৈরি করে। এই ঘন জেল ক্ষুদ্রান্ত্রের প্রাচীরে একটি প্রতিরক্ষামূলক আবরণ ফেলে, যা হজমকারী এনজাইম এবং গ্লুকোজকে সহজে অন্ত্রের কোষে পৌঁছাতে বাধা দেয়। ফলে গ্লুকোজ রক্তের ভেতর হঠাৎ না ঢুকে কয়েক ঘণ্টা ধরে অতি ধীরে ধীরে প্রবেশ করে এবং রক্তের সুগার হঠাৎ বেড়ে যাওয়া রোধ করে। অপরদিকে অদ্রবণীয় আঁশ কোনো জেল তৈরি করতে পারে না; এটি মূলত মলের পরিমাণ বৃদ্ধি করে কোষ্ঠকাঠিন্য দূর করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'obesity-t2d-pathophysiology-mnt-remission',
    title: l(
      'Adipocyte Lipotoxicity, Insulin Uncoupling & Remission Dynamics',
      'চর্বি কোষের বিষক্রিয়া, ইনসুলিন ব্যাহতকরণ ও রোগ নিরাময় প্রক্রিয়া'
    ),
    description: l(
      'Interactive architecture of adipocyte hypertrophy, DAG-PKC cellular uncoupling, and twin-cycle beta-cell rescue via negative energy balance.',
      'অ্যাডিপোসাইটের স্ফীতি, ডিএজি-পিকেসি দ্বারা ইনসুলিন সংকেত বিচ্ছিন্নকরণ এবং ক্যালোরি ঘাটতির মাধ্যমে বিটা-কোষ উদ্ধারের ইন্টারঅ্যাক্টিভ চিত্র।'
    ),
    disclaimer: l(
      'Educational metabolic simulation; therapeutic dietary changes for diabetes require personalized medical supervision.',
      'মেটাবলিক শিক্ষামূলক সিমুলেশন; ডায়াবেটিসের রোগীদের খাদ্যাভ্যাস পরিবর্তনে চিকিৎসকের পরামর্শ জরুরি।'
    ),
    svgType: 'obesity-diabetes-remission',
    items: [
      {
        id: 'node-hypertrophy',
        label: l('Adipocyte Hypertrophy', 'চর্বি কোষের স্ফীতি'),
        description: l(
          'Chronic caloric surplus forces adipocytes to expand past vascular diffusion limits, inducing hypoxia, necrosis, and crown-like structure M1 macrophage infiltration.',
          'অতিরিক্ত ক্যালোরির চাপে চর্বি কোষ অস্বাভাবিক ফুলে ওঠে; অক্সিজেন না পেয়ে কোষ মরে যায় এবং এম১ ম্যাক্রোফেজ প্রদাহ তৈরি করে।'
        ),
        details: l(
          'When adipocytes exceed 100-150 um diameter, hypoxia triggers HIF-1alpha, cell death, and crown-like structure infiltration releasing TNF-alpha and NEFA.',
          'চর্বি কোষ অতিরিক্ত ফুলে গেলে অক্সিজেন ঘাটতিতে কোষ মরে যায় এবং শ্বেত রক্তকণিকা এসে প্রদাহ সৃষ্টি করে ও রক্তে ক্ষতিকর ফ্যাটি অ্যাসিড ছড়ায়।'
        ),
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-dag-pkc',
        label: l('DAG / PKC Uncoupling', 'DAG ও PKC সংকেত বিভাজন'),
        description: l(
          'Ectopic sn-1,2-diacylglycerol recruits novel PKC isoforms to phosphorylate IRS-1 on Ser307, uncoupling the insulin receptor from downstream PI3K/Akt signaling.',
          'কোষে জমা DAG অণু PKC এনজাইম সক্রিয় করে IRS-1 এর সেরিনে ফসফেট যুক্ত করে, ফলে ইনসুলিনের সংকেত নষ্ট হয়ে গ্লুকোজ প্রবেশ বন্ধ হয়।'
        ),
        details: l(
          'Cytosolic DAG activates PKC-theta in muscle and PKC-epsilon in liver, phosphorylating IRS-1 on Ser307 to block p85/PI3K recruitment and Akt activation.',
          'DAG অণু ক্ষতিকর PKC এনজাইম চালু করে IRS-1 এর সেরিন অংশে ফসফেট যুক্ত করে ইনসুলিনের সংকেত পুরোপুরি নষ্ট করে দেয়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-glut4-block',
        label: l('GLUT4 Translocation Failure', 'GLUT4 প্রবেশ ব্যর্থতা'),
        description: l(
          'Inability of Akt to phosphorylate AS160 locks GLUT4 vesicles intracellularly, preventing skeletal muscle glucose disposal and driving systemic hyperglycemia.',
          'Akt অকেজো থাকায় গ্লুকোজ পরিবাহী GLUT4 কোষের ঝিল্লিতে আসতে পারে না; ফলে রক্তে গ্লুকোজের মাত্রা বিপজ্জনকভাবে বেড়ে যায়।'
        ),
        details: l(
          'Unphosphorylated AS160 maintains Rab-GTPase inactivation, preventing GLUT4 vesicle exocytosis at the sarcolemma and halting glucose clearance.',
          'AS160 বন্ধ থাকায় পেশিকোষের গ্লুকোজ চ্যানেলগুলো কোষের বাইরে আসতে পারে না, ফলে ইনসুলিন থাকা সত্ত্বেও রক্ত থেকে গ্লুকোজ কোষে ঢোকে না।'
        ),
        color: '#dc2626',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-twin-cycle',
        label: l('Twin-Cycle Ectopic Steatosis', 'টুইন-সাইকেল লিভার-প্যানক্রিয়াস চর্বি'),
        description: l(
          'Hepatic steatosis drives VLDL-1 overproduction, flooding the endocrine pancreas with lipids and suppressing beta-cell first-phase insulin exocytosis.',
          'লিভারে অতিরিক্ত চর্বি জমে তা রক্তে VLDL ছড়ায়, যা অগ্ন্যাশয়ের বিটা-কোষে চর্বি জমিয়ে স্বাভাবিক ইনসুলিন নিঃসরণ পুরোপুরি স্তব্ধ করে দেয়।'
        ),
        details: l(
          'Cycle 1 steatosis floods the circulation with VLDL-1; Cycle 2 intraislet lipid accumulation induces beta-cell dedifferentiation and loss of acute insulin secretion.',
          'প্রথম চক্রে লিভারে চর্বি জমে VLDL তৈরি করে; দ্বিতীয় চক্রে তা অগ্ন্যাশয়ের বিটা-কোষে জমা হয়ে বিটা-কোষকে অবশ করে ফেলে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
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
          heading: l('1. Energy Surplus & Adipocyte Hypertrophy', '১. অতিরিক্ত ক্যালোরি ও চর্বি কোষের স্ফীতি'),
          paragraphs: [
            l(
              'Obesity and type 2 diabetes mellitus represent interrelated manifestations of chronic positive energy balance and metabolic dysregulation [1]. When energy intake consistently surpasses total daily energy expenditure, surplus calories are stored within adipose tissue depots as triacylglycerols [1, 2].',
              'স্থূলতা এবং টাইপ ২ ডায়াবেটিস হলো শরীরে দীর্ঘমেয়াদী অতিরিক্ত ক্যালোরি জমা হওয়া এবং বিপাকীয় বিশৃঙ্খলার ফল [১]। আমরা প্রতিদিন যে পরিমাণ শক্তি খরচ করি তার চেয়ে বেশি খাবার খেলে অতিরিক্ত শক্তি ট্রাইঅ্যাসাইলগ্লিসারল চর্বি হিসেবে অ্যাডিপোজ টিস্যু বা চর্বি কোষে জমা হয় [১, ২]।'
            ),
            l(
              'When preadipocyte recruitment capacity is saturated, existing adipocytes undergo pathological hypertrophy, expanding past oxygen diffusion limits [2, 3]. Cellular hypoxia triggers adipocyte death, forming "crown-like structures" where M1 macrophages cluster around damaged lipid droplets, releasing inflammatory TNF-alpha and leaking free fatty acids into systemic circulation [3, 4].',
              'চর্বি কোষের ধারণক্ষমতা ফুরিয়ে গেলে কোষগুলো ফুলে বিশালাকার ধারণ করে এবং অক্সিজেনের অভাবে মরতে শুরু করে [২, ৩]। মৃত কোষের চারদিকে শ্বেত রক্তকণিকা জমে "ক্রাউন-লাইক স্ট্রাকচার" তৈরি করে বিষাক্ত প্রদাহ ছড়ায় এবং রক্তে অবাধে মুক্ত ফ্যাটি অ্যাসিড ঢেলে দেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Ectopic Lipotoxicity: The DAG-PKC Axis', '২. অঙ্গের চর্বি বিষক্রিয়া: ডিএজি-পিকেসি চক্র'),
          paragraphs: [
            l(
              'Ectopic lipid spillover inundates non-adipose organs such as skeletal muscle and the liver [2, 3]. Intracellular lipid intermediates accumulate, most notably sn-1,2-diacylglycerol (DAG) [3]. Cytosolic DAG recruits novel protein kinase C (PKC-theta in muscle, PKC-epsilon in liver) to the cell membrane [3].',
              'অতিরিক্ত চর্বি তখন লিভার ও মাংসপেশিতে জমা হয়ে বিষাক্ত ডাইঅ্যাসাইলগ্লিসারল (DAG) তৈরি করে [২, ৩]। এই DAG কোষের ভেতর ক্ষতিকর PKC এনজাইম সক্রিয় করে তোলে [৩]।'
            ),
            l(
              'Activated PKC phosphorylates insulin receptor substrate 1 (IRS-1) on inhibitory Ser307 residues [3]. This modification prevents the insulin receptor from transmitting downstream signals, blocking GLUT4 glucose transporters from reaching the muscle cell surface and driving systemic hyperglycemia [2, 3].',
              'সক্রিয় PKC এনজাইম ইনসুলিন রিসেপ্টর সাবস্ট্রেট ১ (IRS-1) এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে অকেজো করে দেয়, যার ফলে মাংসপেশির কোষে গ্লুকোজ ঢোকার চ্যানেল (GLUT4) বন্ধ হয়ে যায় এবং রক্তে সুগার বাড়ে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Hepatic Glucose Overproduction & Fasting Hyperglycemia', '৩. যকৃতের অতিরিক্ত গ্লুকোজ তৈরি ও খালি পেটে সুগার বৃদ্ধি'),
          paragraphs: [
            l(
              'In the liver, ectopic fat accumulation similarly disrupts insulin signaling [2, 6]. Because insulin can no longer suppress hepatic glucose output, the transcription factor FOXO1 enters the nucleus to drive the synthesis of rate-limiting gluconeogenic enzymes (PEPCK and G6Pase) [3, 6].',
              'একইভাবে যকৃতে চর্বি জমার কারণে ইনসুলিনের সংকেত নষ্ট হয়ে যায় [২, ৬]। ইনসুলিনের বাধা না পেয়ে FOXO1 নামক জিন নিয়ন্ত্রক যকৃতে গ্লুকোজ তৈরির এনজাইমগুলোর উৎপাদন বাড়িয়ে দেয় [৩, ৬]।'
            ),
            l(
              'Consequently, the liver produces glucose autonomously even during sleep and after meals, driving elevated fasting plasma glucose levels in type 2 diabetes [3, 6].',
              'এর ফলে লিভার অবিরাম নিজের ভেতর থেকে রক্তে বাড়তি গ্লুকোজ ছাড়তে থাকে, যার কারণে সকালে খালি পেটে সুগার অস্বাভাবিক বেশি থাকে [৩, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Medical Nutrition Therapy (MNT) Guidelines', '৪. প্রমাণভিত্তিক পুষ্টি থেরাপির নির্দেশিকা'),
          paragraphs: [
            l(
              'The American Diabetes Association (ADA) and EASD emphasize that sustained negative energy balance is the primary driver of glycemic improvement [5]. A 5% to 10% weight loss significantly reduces HbA1c, improves lipid profiles, and decreases hepatic steatosis [5].',
              'আমেরিকান ডায়াবেটিস অ্যাসোসিয়েশন (ADA) এর মতে, ডায়াবেটিস নিয়ন্ত্রণের মূল চাবিকাঠি হলো ক্যালোরি কমিয়ে ওজন হ্রাস [৫]। শরীরের ওজন ৫% থেকে ১০% কমাতে পারলে রক্তের সুগার ও লিভারের চর্বি উল্লেখযোগ্যভাবে কমে যায় [৫]।'
            ),
            l(
              'Dietary carbohydrates should emphasize intact plant foods rich in viscous soluble fibers (e.g., beta-glucan from oats and barley, psyllium), which form luminal gels that slow glucose absorption and eliminate postprandial glucose spikes [1, 5].',
              'খাবারের শর্করার প্রধান উৎস হতে হবে অপ্রক্রিয়াজাত শাকসবজি, ডাল ও ওটস, যার দ্রবণীয় আঠালো আঁশ অন্ত্রে ঘন জেল তৈরি করে রক্তের সুগার হঠাৎ বেড়ে যাওয়া রোধ করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. The DiRECT Trial & Diabetes Remission Paradigm', '৫. ডাইরেক্ট ট্রায়াল ও ডায়াবেটিস সম্পূর্ণ রোগমুক্তি'),
          paragraphs: [
            l(
              'The landmark DiRECT clinical trial proved that type 2 diabetes is not an irreversibly progressive disease [4]. Utilizing a targeted low-energy formula diet (~825–853 kcal/day for 12–20 weeks), participants achieving >=15 kg weight loss cleared ectopic fat from both the liver and the pancreas [4, 6].',
              'যুগান্তকারী ডাইরেক্ট (DiRECT) ট্রায়াল প্রমাণ করেছে যে ডায়াবেটিস কোনো চিরস্থায়ী রোগ নয় [৪]। দিনে ৮২৫-৮৫৩ ক্যালোরির বিশেষ খাবারের মাধ্যমে ১৫ কেজি ওজন কমানো হলে লিভার ও অগ্ন্যাশয়ের সমস্ত চর্বি ধুয়ে পরিষ্কার হয়ে যায় [৪, ৬]।'
            ),
            l(
              'Depleting intrapancreatic fat rescued dedifferentiated beta cells and restored first-phase insulin secretion, resulting in complete, drug-free diabetes remission (HbA1c <6.5%) in 86% of patients with short disease duration [4, 6].',
              'অগ্ন্যাশয়ের চর্বি দূর হওয়ায় ঘুমন্ত বিটা-কোষ পুনরায় জেগে ওঠে এবং স্বাভাবিক ইনসুলিন তৈরি শুরু করে; ফলে ওষুধ ছাড়াই ৮৬% রোগীর ডায়াবেটিস সম্পূর্ণ ভালো হয়ে যায় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Type 2 diabetes is driven by ectopic lipid accumulation in liver and pancreas; profound negative energy balance depletes organ fat and rescues beta-cell secretion, making remission an achievable clinical endpoint [2, 4].',
              'টাইপ ২ ডায়াবেটিস মূলত লিভার ও অগ্ন্যাশয়ে অতিরিক্ত চর্বি জমার ফল; পরিকল্পিতভাবে ওজন কমিয়ে অঙ্গগুলোকে চর্বিমুক্ত করলে বিটা-কোষ সচল হয়ে রোগ সম্পূর্ণ নিরাময় হতে পারে [২, ৪]।'
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
          heading: l('1. Adipocyte Expansion Dynamics: Hyperplasia vs Hypertrophy', '১. অ্যাডিপোসাইটের বিস্তার গতিবিদ্যা: হাইপারপ্লাসিয়া বনাম হাইপারট্রফি'),
          paragraphs: [
            l(
              'Healthy adipose tissue accommodates excess lipid via preadipocyte recruitment (hyperplasia) [1]. In genetic or metabolic obesity, preadipocyte recruitment is exhausted, forcing mature adipocytes into pathological hypertrophy (>150 um diameter) [1, 2]. Cellular expansion exceeds capillary oxygen delivery, precipitating hypoxia-inducible factor 1-alpha (HIF-1alpha) activation, cellular necrosis, and recruitment of pro-inflammatory M1 macrophages forming crown-like structures [2].',
              'স্বাস্থ্যকর অবস্থায় চর্বি জমলে নতুন কোষ তৈরি হয়; কিন্তু ধারণক্ষমতা শেষ হলে বিদ্যমান কোষগুলো ফুলে বিশালাকার ধারণ করে (Hypertrophy) [১, ২]। কোষে অক্সিজেনের তীব্র ঘাটতি দেখা দিয়ে কোষ মরে যায় এবং প্রদাহ সৃষ্টিকারী এম১ ম্যাক্রোফেজ এসে ক্ষতিকর ক্রাউন-লাইক স্ট্রাকচার তৈরি করে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Intracellular DAG-PKC Uncoupling of the Insulin Cascade', '২. অন্তঃকোষীয় ডিএজি-পিকেসি দ্বারা ইনসুলিন সংকেত বিচ্ছিন্নকরণ'),
          paragraphs: [
            l(
              'Hypertrophic adipose tissue leaks non-esterified fatty acids (NEFA) into the circulation [2]. In skeletal myocytes, lipid influx overwhelms mitochondrial beta-oxidation, leading to intracellular sn-1,2-diacylglycerol (DAG) accumulation [3]. DAG binds the C1 domain of novel PKC-theta, translocating it to the sarcolemma [3].',
              'ফোলা চর্বি কোষ থেকে রক্তে মুক্ত ফ্যাটি অ্যাসিড উপচে পড়ে মাংসপেশিতে জমা হয়ে ডাইঅ্যাসাইলগ্লিসারল (DAG) তৈরি করে [২, ৩]। এই DAG পেশিকোষের PKC-theta এনজাইমকে কোষঝিল্লিতে টেনে এনে সক্রিয় করে [৩]।'
            ),
            l(
              'Activated PKC-theta phosphorylates IRS-1 on Ser307 and Ser1101, sterically blocking insulin receptor tyrosine kinase phosphorylation of key tyrosine residues [3]. PI3K recruitment fails, downstream Akt phosphorylation is abolished, and AS160 remains unphosphorylated, locking GLUT4 vesicles intracellularly [2, 3].',
              'সক্রিয় PKC এনজাইম IRS-1 এর সেরিন-৩০৭ অংশে ফসফেট যুক্ত করে ইনসুলিনের টাইরোসিন সংকেত বন্ধ করে দেয় [৩]। ফলে Akt নিষ্ক্রিয় থেকে যায় এবং GLUT4 চ্যানেল কোষের উপরিভাগে আসতে না পেরে গ্লুকোজ গ্রহণ পুরোপুরি বন্ধ করে দেয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Hepatic PKC-epsilon & Autonomous Gluconeogenesis', '৩. যকৃতের পিকেসি-অ্যাপসিলন ও অনিয়ন্ত্রিত গ্লুকোজ উৎপাদন'),
          paragraphs: [
            l(
              'In hepatocytes, ectopic DAG activates novel PKC-epsilon, similarly disrupting IRS-2 tyrosine phosphorylation [2, 3]. Impaired Akt activation fails to phosphorylate FOXO1 at Ser256 [3]. Unphosphorylated FOXO1 translocates into the nucleus to drive the transcription of PEPCK and glucose-6-phosphatase, sustaining autonomous gluconeogenesis and fasting hyperglycemia [2, 3].',
              'যকৃতেও একইভাবে DAG অণু PKC-epsilon এনজাইম চালু করে ইনসুলিনের সংকেত নষ্ট করে দেয় [২, ৩]। এর ফলে FOXO1 প্রোটিন নিউক্লিয়াসে গিয়ে অবাধে গ্লুকোজ তৈরির এনজাইম বানাতে থাকে এবং খালি পেটে সুগার অস্বাভাবিক বেড়ে যায় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Evidence-Based MNT: Macronutrient Quality & Viscous Fiber', '৪. প্রমাণভিত্তিক পুষ্টি থেরাপি: শর্করার মান ও আঠালো আঁশ'),
          paragraphs: [
            l(
              'ADA/EASD consensus guidelines recommend replacing refined starches and added sugars with high-fiber whole foods [5]. Viscous soluble fibers hydrate to form a gelatinous unstirred water layer along the brush border, retarding amylolytic cleavage and blunting SGLT1 glucose transport [1, 5]. Microbial fermentation of fibers yields SCFAs that engage FFAR2/FFAR3 to stimulate enteroendocrine L-cell GLP-1 and PYY secretion [5].',
              'পরিশোধিত ময়দা ও চিনির বদলে দ্রবণীয় আঠালো আঁশযুক্ত খাবার খাওয়া উচিত, যা অন্ত্রে জেল তৈরি করে গ্লুকোজ শোষণকে প্রলম্বিত করে [১, ৫]। এই আঁশ থেকে তৈরি ফ্যাটি অ্যাসিড এল-কোষ থেকে GLP-1 হরমোন নিঃসরণ বাড়িয়ে ক্ষুধা কমায় ও ইনসুলিন বাড়ায় [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. The Twin-Cycle Model: Hepatic & Pancreatic Defatting', '৫. টুইন-সাইকেল মডেল: যকৃত ও অগ্ন্যাশয়ের চর্বিমুক্তি'),
          paragraphs: [
            l(
              'Roy Taylor\'s twin-cycle hypothesis explains that positive energy balance deposits fat first in the liver (Cycle 1), driving elevated VLDL-1 secretion [4, 6]. Excess circulating VLDL-1 delivers lipids to pancreatic islets (Cycle 2), where ectopic fat induces beta-cell dedifferentiation and suppresses first-phase insulin exocytosis [6].',
              'টুইন-সাইকেল তত্ত্বে প্রমাণিত যে চর্বি প্রথমে লিভারে জমে (প্রথম চক্র), যা রক্তে VLDL তৈরি করে অগ্ন্যাশয়ে চর্বি জমা করে (দ্বিতীয় চক্র) [৪, ৬]। অগ্ন্যাশয়ে চর্বি জমলে বিটা-কোষ অবশ হয়ে ইনসুলিন তৈরি বন্ধ করে দেয় [৬]।'
            ),
            l(
              'In the DiRECT trial, total diet replacement (~825–853 kcal/day for 12–20 weeks) depletes intrahepatic fat (from ~16% to ~2%) and intrapancreatic fat (from ~8.7% to ~6.2%), rescuing beta-cell differentiation and achieving complete diabetes remission [4, 6].',
              'ডাইরেক্ট ট্রায়ালে কঠোর ক্যালোরি নিয়ন্ত্রণের মাধ্যমে লিভার ও অগ্ন্যাশয়ের চর্বি সম্পূর্ণ গলিয়ে দিয়ে বিটা-কোষকে জীবিত করা হয় এবং ওষুধ ছাড়াই ডায়াবেটিস নিরাময় হয় [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Key Mechanistic Takeaways', '৬. প্রধান আণবিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Ectopic DAG-induced PKC activation drives peripheral and hepatic insulin uncoupling; reversing organ steatosis through negative energy balance rescues beta-cell identity and function [2, 4].',
              'অতিরিক্ত DAG দ্বারা PKC সক্রিয়করণই ইনসুলিন রেজিস্ট্যান্সের মূল কারণ; ক্যালোরি নিয়ন্ত্রণের মাধ্যমে অঙ্গের চর্বি দূর করলে বিটা-কোষ পুনরায় সুস্থ হয়ে ডায়াবেটিস নিরাময় করে [২, ৪]।'
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
          heading: l('1. Adipose Tissue Microvascular Architecture & Hypoxia', '১. চর্বি কোষের রক্ত সংবহন ও হাইপোক্সিয়া'),
          paragraphs: [
            l(
              'Adipocytes exceeding 150 um diameter experience critical diffusion limitations as inter-capillary distances widen beyond 100 um [1, 2]. Adipocyte hypoxia stabilizes HIF-1alpha via prolyl hydroxylase inactivation, triggering collagen VI cross-linking, tissue fibrosis, and MCP-1/CCL2 chemokine secretion that recruits CCR2+ circulating monocytes into the crown-like structure niche [2].',
              'চর্বি কোষ অতিরিক্ত বড় হলে রক্তের অক্সিজেন পৌঁছাতে পারে না এবং HIF-1alpha সক্রিয় হয়ে প্রদাহ সৃষ্টিকারী সাইটোকাইন ক্ষরণ করে চারপাশের টিস্যুতে ক্ষত ও প্রদাহ তৈরি করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Structural Biochemistry of DAG-PKC-IRS-1 Serine Inactivation', '২. ডিএজি-পিকেসি দ্বারা আইআরএস-১ সেরিন নিষ্ক্রিয়করণ রসায়ন'),
          paragraphs: [
            l(
              'Stereospecific sn-1,2-diacylglycerol binds the tandem C1A/C1B domains of novel PKC isoforms [3]. Activated PKC-theta phosphorylates human IRS-1 on Ser307 (adjacent to the phosphotyrosine-binding PTB domain), creating severe electrostatic repulsion that disrupts association with the phosphorylated NPXY motif of the insulin receptor beta-subunit [3]. Downstream p85 SH2 docking is abolished, terminating PI3K/PDK1/Akt signaling [2, 3].',
              'DAG অণু PKC এনজাইমের সাথে যুক্ত হয়ে IRS-1 এর সেরিন-৩০৭ অংশে ফসফেট লাগিয়ে দেয় [৩]। এই পরিবর্তনটি ইনসুলিন রিসেপ্টরের সাথে এর সংযোগ নষ্ট করে দিয়ে PI3K ও Akt সক্রিয়করণ চিরতরে বন্ধ করে দেয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Transcriptional Deregulation: FOXO1 & Hepatic Gluconeogenesis', '৩. যকৃতের নিউক্লিয়ার জিন নিয়ন্ত্রণ: ফক্সও১ ও গ্লুকোনিওজেনেসিস'),
          paragraphs: [
            l(
              'Impaired hepatic Akt prevents the phosphorylation of FOXO1 at Ser256, Thr24, and Ser319 [3]. Unphosphorylated FOXO1 associates with the coactivator PGC-1alpha and binds insulin response elements (IRE) in the promoters of PEPCK (*PCK1*) and G6Pase (*G6PC*), driving uninhibited de novo gluconeogenesis and glycogenolysis independent of systemic feeding cues [2, 3].',
              'Akt নিষ্ক্রিয় থাকায় FOXO1 প্রোটিন নিউক্লিয়াসে গিয়ে PGC-1alpha এর সাথে মিলে PEPCK ও গ্লুকোজ-৬-ফসফেটেজ জিনের প্রকাশ বাড়িয়ে দেয়, ফলে খাওয়ার পরেও লিভার রক্তে গ্লুকোজ ঢালতে থাকে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Fructose Glycolytic Bypass & Hepatic Lipogenesis', '৪. ফ্রুক্টোজ বিপাক ও যকৃতে চর্বি উৎপাদন'),
          paragraphs: [
            l(
              'Dietary fructose bypasses phosphofructokinase-1 (PFK-1), entering glycolysis via ketohexokinase (fructokinase) to generate unchecked dihydroxyacetone phosphate and glyceraldehyde-3-phosphate [1, 5]. Fructose flux vigorously stimulates sterol regulatory element-binding protein 1c (SREBP-1c) and carbohydrate response element-binding protein (ChREBP), accelerating hepatic de novo lipogenesis and VLDL-1 secretion [5].',
              'খাবারের ফ্রুক্টোজ কোনো বাধা ছাড়াই লিভারে ঢুকে সরাসরি চর্বি তৈরিকারী জিনগুলোকে (SREBP-1c, ChREBP) সক্রিয় করে, যা ফ্যাটি লিভার ও VLDL চর্বি নির্গমন বহুগুণ বাড়ায় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Beta-Cell Dedifferentiation & Rescue via Ectopic Defatting', '৫. বিটা-কোষের নিস্তেজ হওয়া ও চর্বিমুক্তির মাধ্যমে জীবনদান'),
          paragraphs: [
            l(
              'Intraislet triacylglycerol accumulation and chronic exposure to high fatty acid fluxes downregulate key beta-cell identity transcription factors (Pdx1, Mafa, Nkx6-1), causing beta cells to retro-differentiate into non-secretory, progenitor-like states [4, 6]. Ectopic organ defatting via the DiRECT protocol restores nuclear transcription factor localization, re-establishing glucose-stimulated first-phase insulin secretion [4, 6].',
              'অগ্ন্যাশয়ে চর্বি জমলে বিটা-কোষের মূল জিন নিয়ন্ত্রকগুলো (Pdx1, Mafa) বন্ধ হয়ে কোষগুলো নিস্তেজ হয়ে পড়ে [৪, ৬]। ডাইরেক্ট ট্রায়ালের মাধ্যমে চর্বি গলিয়ে দিলে বিটা-কোষগুলো পুনরায় পূর্ণাঙ্গ রূপ ফিরে পেয়ে স্বাভাবিকভাবে ইনসুলিন তৈরি শুরু করে [৪, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Endocrinology Summary', '৬. ফলিত এন্ডোক্রাইনোলজির সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Translational management proves type 2 diabetes remission is achievable through targeted weight loss that reverses the twin cycles of hepatic and pancreatic steatosis, rescuing dedifferentiated beta cells [2, 4, 6].',
              'চিকিৎসাবিজ্ঞানে প্রমাণিত যে সঠিক খাদ্যাভ্যাস ও ওজন হ্রাসের মাধ্যমে লিভার ও অগ্ন্যাশয়ের চর্বি দূর করে ঘুমন্ত বিটা-কোষকে জীবিত করা এবং ডায়াবেটিস সম্পূর্ণ নিরাময় করা সম্ভব [২, ৪, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential cascade of adipocyte hypertrophy, ectopic lipid DAG-PKC signaling, hepatic gluconeogenesis, and DiRECT twin-cycle remission.',
      'চর্বি কোষের স্ফীতি, ডিএজি-পিকেসি সংকেত বিভাজন, যকৃতের অতিরিক্ত গ্লুকোজ উৎপাদন এবং ডাইরেক্ট রোগমুক্তির ধারাবাহিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Hypertrophic adipose tissue leaks NEFA, depositing ectopic triglycerides and DAG in muscle and liver.',
        'ধাপ ১: অতিরিক্ত ফোলা চর্বি কোষ থেকে রক্তে ফ্যাটি অ্যাসিড উপচে পড়ে লিভার ও পেশিতে জমা হয়ে বিষাক্ত DAG তৈরি করে।'
      ),
      l(
        'Step 2: Intracellular DAG activates novel PKC isoforms, phosphorylating IRS-1 on Ser307 and blocking GLUT4 translocation.',
        'ধাপ ২: DAG অণু PKC এনজাইম সক্রিয় করে IRS-1 এর সেরিনে ফসফেট যুক্ত করে পেশিকোষে গ্লুকোজ প্রবেশ বন্ধ করে দেয়।'
      ),
      l(
        'Step 3: Hepatic steatosis drives VLDL-1 secretion, depositing fat in pancreatic islets and suppressing first-phase insulin secretion.',
        'ধাপ ৩: লিভারের চর্বি VLDL তৈরি করে অগ্ন্যাশয়ে চর্বি জমায় এবং বিটা-কোষকে অবশ করে ইনসুলিন তৈরি বন্ধ করে।'
      ),
      l(
        'Step 4: Targeted negative energy balance (DiRECT protocol) depletes liver and pancreas fat, resurrecting beta cells and normalizing glycemia.',
        'ধাপ ৪: কঠোর ক্যালোরি নিয়ন্ত্রণের মাধ্যমে লিভার ও অগ্ন্যাশয়ের চর্বি পুড়িয়ে বিটা-কোষকে পুনরায় সচল করে ডায়াবেটিস ভালো করা হয়।'
      ),
    ],
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
