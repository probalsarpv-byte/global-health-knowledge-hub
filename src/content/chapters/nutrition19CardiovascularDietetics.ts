import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const cvdRefs = [
  {
    id: 'libby-nat-rev-atherosclerosis',
    authors: 'Peter Libby et al.',
    title: 'Atherosclerosis',
    organization: 'Nature Reviews Disease Primers',
    year: 2019,
    url: 'https://doi.org/10.1038/s41572-019-0106-z',
    doi: '10.1038/s41572-019-0106-z',
  },
  {
    id: 'boren-eur-heart-j-apob-retention',
    authors: 'Jan Boren et al.',
    title: 'Low-density lipoproteins cause atherosclerotic cardiovascular disease: pathophysiological, genetic, and therapeutic insights: a consensus statement from the European Atherosclerosis Society Consensus Panel',
    organization: 'European Heart Journal',
    year: 2020,
    url: 'https://doi.org/10.1093/eurheartj/ehz962',
    doi: '10.1093/eurheartj/ehz962',
  },
  {
    id: 'horton-jci-srebp-ldlr',
    authors: 'Jay D. Horton, Joseph L. Goldstein, Michael S. Brown',
    title: 'SREBPs: activators of the complete program of cholesterol and fatty acid synthesis in the liver',
    organization: 'Journal of Clinical Investigation',
    year: 2002,
    url: 'https://doi.org/10.1172/JCI15593',
    doi: '10.1172/JCI15593',
  },
  {
    id: 'forstermann-eur-heart-j-enos',
    authors: 'Ulrich Forstermann, William C. Sessa',
    title: 'Nitric oxide synthases: regulation and function',
    organization: 'European Heart Journal',
    year: 2012,
    url: 'https://doi.org/10.1093/eurheartj/ehr304',
    doi: '10.1093/eurheartj/ehr304',
  },
  {
    id: 'sacks-nejm-dash-sodium',
    authors: 'Frank M. Sacks et al.',
    title: 'Effects on blood pressure of reduced dietary sodium and the Dietary Approaches to Stop Hypertension (DASH) diet',
    organization: 'The New England Journal of Medicine',
    year: 2001,
    url: 'https://doi.org/10.1056/NEJM200101043440101',
    doi: '10.1056/NEJM200101043440101',
  },
  {
    id: 'estruch-nejm-predimed-trial',
    authors: 'Ramon Estruch et al.',
    title: 'Primary prevention of cardiovascular disease with a Mediterranean diet supplemented with extra-virgin olive oil or nuts',
    organization: 'The New England Journal of Medicine',
    year: 2018,
    url: 'https://doi.org/10.1056/NEJMoa1800389',
    doi: '10.1056/NEJMoa1800389',
  },
]

export const nutrition19CardiovascularDieteticsLesson: LessonTopic = {
  id: 'topic.nutrition.cardiovascular-dietetics-dash-mediterranean',
  slug: 'cardiovascular-dietetics-dash-mediterranean',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '19 · Cardiovascular Dietetics: Atherosclerosis, Dyslipidemia & Hypertension',
    '১৯ · কার্ডিওভাসকুলার ডায়েটেটিক্স: এথেরোস্ক্লেরোসিস, ডিসলিপিডেমিয়া ও উচ্চ রক্তচাপ'
  ),
  summary: l(
    'Cellular and clinical vascular biology of dietary atherogenesis and hemodynamics: ApoB-particle subendothelial retention, SFA-mediated SREBP-2/LDLR suppression, endothelial nitric oxide synthase decoupling, the DASH sodium-potassium ionic balance, and Mediterranean PREDIMED trial cardiovascular risk reduction.',
    'খাদ্যজনিত রক্তনালির রোগ ও রক্তচাপের কোষীয় শারীরতত্ত্ব: এপোবি কণার রক্তনালির ভেতর সঞ্চয়ন, সম্পৃক্ত চর্বি দ্বারা এলডিএল রিসেপ্টর দমন, এন্ডোথেলিয়াল নাইট্রিক অক্সাইডের ভারসাম্যহীনতা, ড্যাশ ডায়েটের সোডিয়াম-পটাশিয়াম আয়নীয় সমতা এবং ভূমধ্যসাগরীয় খাদ্যাভ্যাসে হৃদরোগ প্রতিরোধ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Explain the response-to-retention model of atherogenesis: trans-endothelial ApoB extravasation, proteoglycan entrapment, oxidative modification, and scavenger receptor macrophage foam cell transformation.',
      'এথেরোস্ক্লেরোসিসের প্রতিক্রিয়া-সঞ্চয়ন মডেল: রক্তনালির প্রাচীরে এপোবি কণা প্রবেশ, প্রোটিওগ্লাইকান সংযোজন, জারণ রূপান্তর এবং ম্যাক্রোফেজের ফোম কোষে রূপান্তর ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the hepatic molecular mechanisms of dietary fatty acids: how specific saturated fatty acids (palmitic, myristic) downregulate LDLR activity and how PUFA/MUFA substitution enhances LDL clearance.',
      'খাদ্যের ফ্যাটি অ্যাসিডের হেপাটিক আণবিক ক্রিয়া: কীভাবে সম্পৃক্ত চর্বি এলডিএল রিসেপ্টর দমন করে এবং অসম্পৃক্ত চর্বি রক্ত থেকে ক্ষতিকর কোলেস্টেরল অপসারণ দ্রুত করে তা বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Describe the cellular vascular biology of blood pressure: endothelial shear stress, eNOS uncoupling, vascular smooth muscle Na+/K+-ATPase and Kir hyperpolarization by potassium, and DASH sodium restriction.',
      'রক্তচাপের কোষীয় ভাস্কুলার শারীরবৃত্ত: এন্ডোথেলিয়াল নাইট্রিক অক্সাইড এনজাইমের ক্রিয়া, পটাশিয়াম দ্বারা রক্তনালির শিথিলকরণ এবং ড্যাশ ডায়েটের সোডিয়াম নিয়ন্ত্রণের আণবিক প্রভাব মূল্যায়ন করতে পারা।'
    ),
    l(
      'Synthesize landmark clinical cardiovascular dietetics trials: the PREDIMED trial, the DASH and DASH-Sodium trials, and formulate evidence-based dietary prescriptions for atherosclerotic cardiovascular disease prevention.',
      'হৃদরোগের যুগান্তকারী পুষ্টি পরীক্ষাগুলোর সমন্বয়: প্রিডিমেড ট্রায়াল, ড্যাশ ট্রায়াল এবং এথেরোস্ক্লেরোসিস প্রতিরোধে প্রমাণভিত্তিক খাদ্যাভ্যাস প্রণয়ন করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.dietary-lipids-fatty-acids-pufa', 'topic.nutrition.hydration-electrolytes-fluid-balance'],
  relatedTopicIds: ['topic.metabolism.cholesterol-steroids', 'topic.metabolism.lipoproteins-lipid-flux'],
  references: cvdRefs,
  evidenceBySection: {
    introduction: ['libby-nat-rev-atherosclerosis', 'boren-eur-heart-j-apob-retention'],
    structure: ['boren-eur-heart-j-apob-retention', 'horton-jci-srebp-ldlr'],
    mechanism: ['horton-jci-srebp-ldlr', 'forstermann-eur-heart-j-enos'],
    integration: ['forstermann-eur-heart-j-enos', 'sacks-nejm-dash-sodium'],
    practice: ['sacks-nejm-dash-sodium', 'estruch-nejm-predimed-trial'],
    takeaways: ['estruch-nejm-predimed-trial', 'boren-eur-heart-j-apob-retention'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Atherogenesis & The Response-to-Retention Paradigm', '১. এথেরোস্ক্লেরোসিস ও প্রতিক্রিয়া-সঞ্চয়ন মডেল'), sectionId: 'introduction' },
      { id: 'sec-apob', label: l('2. ApoB Particle Biology & Scavenger Receptor Uptake', '২. এপোবি কণার জীবতত্ত্ব ও ম্যাক্রোফেজ দ্বারা গ্রহণ'), sectionId: 'structure' },
      { id: 'sec-ldlr', label: l('3. Hepatic SREBP-2 / LDLR Regulation by Fatty Acids', '৩. ফ্যাটি অ্যাসিড দ্বারা লিভারের এলডিএল রিসেপ্টর নিয়ন্ত্রণ'), sectionId: 'mechanism' },
      { id: 'sec-dash', label: l('4. Endothelial eNOS & DASH Electrolyte Hemodynamics', '৪. এন্ডোথেলিয়াল নাইট্রিক অক্সাইড ও ড্যাশ ইলেক্ট্রোলাইট'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. The PREDIMED Trial & Mediterranean Lipidology', '৫. প্রিডিমেড ট্রায়াল ও ভূমধ্যসাগরীয় খাদ্যাভ্যাস'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Response-to-Retention Model', 'প্রতিক্রিয়া-সঞ্চয়ন মডেল'),
        definition: l(
          'The foundational paradigm stating that atherosclerosis initiates when ApoB-containing lipoproteins become trapped within the subendothelial proteoglycan matrix of arterial walls.',
          'হৃদরোগের মূল বৈজ্ঞানিক ভিত্তি, যা বলে যে রক্তনালির ভেতরের স্তরে এপোবি কণা আটকে যাওয়া থেকেই রক্তনালি সরু হওয়া বা প্লাক তৈরির প্রক্রিয়া শুরু হয়।'
        ),
      },
      {
        term: l('Apolipoprotein B-100 (ApoB)', 'অ্যাপোলিপোপ্রোটিন বি-১০০ (ApoB)'),
        definition: l(
          'The structural protein present as exactly one molecule per atherogenic particle (VLDL, IDL, LDL, Lp(a)), serving as the primary quantitative metric of circulating atherogenic particle number.',
          'রক্তনালির জন্য ক্ষতিকর প্রতিটি কণার (LDL, VLDL) গায়ে থাকা একক প্রোটিন, যা রক্তে ক্ষতিকর কণার মোট সংখ্যা পরিমাপের সর্বোত্তম মানদণ্ড।'
        ),
      },
      {
        term: l('Hepatic LDL Receptor (LDLR) Turnover', 'হেপাটিক এলডিএল রিসেপ্টর পুনর্ব্যবহার'),
        definition: l(
          'The receptor-mediated endocytosis pathway in hepatocytes that clears LDL particles from circulation, transcriptionally governed by SREBP-2 and regulated post-translationally by PCSK9.',
          'যকৃতের কোষের উপরিভাগের রিসেপ্টর যা রক্ত থেকে ক্ষতিকর এলডিএল কণাগুলো গিলে ফেলে পরিষ্কার করে, যা খাদ্যের সম্পৃক্ত চর্বির দ্বারা প্রভাবিত হয়।'
        ),
      },
      {
        term: l('Endothelial Nitric Oxide Synthase (eNOS)', 'এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেজ (eNOS)'),
        definition: l(
          'The constitutive endothelial enzyme that synthesizes nitric oxide (NO) from L-arginine, diffusing to vascular smooth muscle to stimulate soluble guanylyl cyclase and induce vasodilation.',
          'রক্তনালির অন্তর্বর্তী কোষের এনজাইম যা নাইট্রিক অক্সাইড গ্যাস তৈরি করে রক্তনালিকে প্রসারিত ও শিথিল রাখে এবং রক্তচাপ স্বাভাবিক রাখে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Translational Dietary Prescription for Severe Hypercholesterolemia and Stage 1 Hypertension', 'উচ্চ কোলেস্টেরল ও রক্তচাপের রোগীর জন্য প্রমাণভিত্তিক কার্ডিওভাসকুলার ডায়েট প্রণয়ন'),
        steps: [
          l(
            'Step 1: Baseline Cardiovascular Risk Stratification: A 52-year-old male presents with BP 144/92 mmHg (Stage 1 hypertension), total cholesterol 258 mg/dL, LDL-C 174 mg/dL, ApoB 132 mg/dL, and elevated coronary artery calcium (CAC score = 118). Dietary intake includes daily full-fat dairy, butter, red meat, and processed snacks providing ~3,800 mg sodium/day and 16% of calories from saturated fat.',
            'ধাপ ১: প্রাথমিক ঝুঁকি নিরূপণ: ৫২ বছর বয়সী পুরুষের রক্তচাপ ১৪৪/৯২ (উচ্চ রক্তচাপ), রক্তে এলডিএল কোলেস্টেরল ১৭৪, এপোবি ১৩২ এবং হার্টের ধমনিতে চর্বি জমার প্রমাণ মিলেছে (CAC = ১১৮)। খাদ্যাভ্যাসে প্রচুর মাখন, লাল মাংস ও লবণযুক্ত খাবার রয়েছে।'
          ),
          l(
            'Step 2: Phase 1 SFA Replacement & SREBP-2 Upregulation: Restructure dietary fatty acid profile: reduce saturated fat to <6% of daily energy (<13 g/day for a 2,000 kcal diet) by eliminating butter, coconut fat, and untrimmed meat. Substitute with 35 g/day of high-polyphenol extra virgin olive oil and 30 g/day of mixed walnuts/almonds, supplying oleic acid (MUFA) and linoleic acid (PUFA).',
            'ধাপ ২: ক্ষতিকর চর্বি অপসারণ ও লিভার রিসেপ্টর সক্রিয়করণ: সম্পৃক্ত চর্বি কমিয়ে মোট ক্যালোরির ৬%-এর নিচে নামিয়ে আনা হলো। এর বদলে প্রতিদিন ৩৫ গ্রাম এক্সট্রা ভার্জিন অলিভ অয়েল এবং ৩০ গ্রাম আখরোট-বাদাম চালু করা হলো, যা লিভারের কোলেস্টেরল পরিষ্কারকারী রিসেপ্টর বাড়িয়ে দেয়।'
          ),
          l(
            'Step 3: Phase 2 DASH Electrolyte Modulation & eNOS Restoration: Restrict dietary sodium to 1,500 mg/day (DASH-Sodium target) while increasing dietary potassium to 4,700 mg/day via dark leafy greens, legumes, avocados, and bananas. This restores the urinary Na+/K+ ratio to <1.0 and enhances vascular smooth muscle hyperpolarization.',
            'ধাপ ৩: ড্যাশ ডায়েট ও রক্তচাপ নিয়ন্ত্রণ: লবণ (সোডিয়াম) কমিয়ে দিনে ১৫০০ মিলিগ্রামে আনা হলো এবং শাকসবজি ও ফল থেকে পটাশিয়াম বাড়িয়ে ৪৭০০ মিলিগ্রাম করা হলো। এই সোডিয়াম-পটাশিয়াম অনুপাত রক্তনালি প্রসারিত করে রক্তচাপ কমায়।'
          ),
          l(
            'Step 4: 12-Week Biomarker Reassessment: At 12 weeks, LDL-C decreases by 27% to 127 mg/dL, ApoB drops to 88 mg/dL, and office blood pressure normalizes to 122/78 mmHg without initiating antihypertensive medications.',
            'ধাপ ৪: ১২ সপ্তাহ পর ফলাফল: ১২ সপ্তাহ পর রোগীর রক্তে এলডিএল কোলেস্টেরল ২৭% কমে ১২৭-এ নেমে এলো এবং কোনো উচ্চ রক্তচাপের ওষুধ ছাড়াই রক্তচাপ স্বাভাবিক ১২২/৭৮ মিলিমিটারে নেমে এলো।'
          ),
        ],
        conclusion: l(
          'Targeted saturated fat substitution combined with optimal DASH electrolyte balancing achieves substantial lipid-lowering and blood pressure normalization equivalent to standard monotherapies.',
          'সঠিকভাবে ক্ষতিকর চর্বি বদলে ভালো চর্বি খাওয়া এবং সোডিয়াম কমিয়ে পটাশিয়াম বাড়ালে ওষুধের মতোই অত্যন্ত শক্তিশালীভাবে কোলেস্টেরল ও রক্তচাপ স্বাভাবিক করা সম্ভব।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does measuring circulating Apolipoprotein B (ApoB) provide a clinically superior assessment of atherogenic risk compared to conventional LDL-Cholesterol (LDL-C)?',
          'রক্তনালিতে চর্বি জমার ঝুঁকি মূল্যায়নে সাধারণ এলডিএল কোলেস্টেরলের (LDL-C) চেয়ে অ্যাপোলিপোপ্রোটিন বি (ApoB) পরিমাপ করা কেন চিকিৎসাবিজ্ঞানে অনেক বেশি নির্ভরযোগ্য?'
        ),
        answer: l(
          'LDL-C measures only the mass concentration of cholesterol carried within LDL particles, which varies dramatically depending on particle composition and size. In insulin-resistant or hypertriglyceridemic states, patients produce small, dense LDL (sdLDL) particles that carry low amounts of cholesterol per particle; consequently, LDL-C may appear deceptively normal despite a dangerously elevated particle count. In contrast, each atherogenic lipoprotein particle—including LDL, VLDL remnants, IDL, and Lp(a)—carries exactly one molecule of Apolipoprotein B-100. ApoB quantification directly measures the absolute particle concentration that drives subendothelial intimal collision, endothelial entry, and proteoglycan retention, eliminating the confounding effect of particle cholesterol variation.',
          'সাধারণ LDL-C কেবল রক্তে থাকা কোলেস্টেরলের ওজন মাপে, কণার সংখ্যা নয়। ডায়াবেটিস বা মেটাবলিক সিন্ড্রোমের রোগীদের রক্তে কোলেস্টেরল কম থাকলেও কণার সংখ্যা মারাত্মক বেশি থাকতে পারে (ছোট ঘন এলডিএল কণা)। রক্তনালিতে চর্বি জমা নির্ভর করে কতগুলো কণা রক্তনালির প্রাচীরে আঘাত করছে তার ওপর। প্রতিটি ক্ষতিকর কণার গায়ে ঠিক একটি করে ApoB প্রোটিন থাকে। ফলে ApoB মাপলে রক্তে ক্ষতিকর কণার সঠিক সংখ্যা সুনির্দিষ্টভাবে জানা যায়, যা সাধারণ কোলেস্টেরল পরীক্ষায় ধরা পড়ে না।'
        ),
      },
      {
        question: l(
          'How does a high dietary potassium intake biochemically stimulate vasodilation and lower systemic arterial blood pressure?',
          'খাবারে পর্যাপ্ত পটাশিয়াম থাকলে তা কোন সুনির্দিষ্ট জৈব-রাসায়নিক প্রক্রিয়ায় রক্তনালি প্রসারিত করে এবং উচ্চ রক্তচাপ কমায়?'
        ),
        answer: l(
          'Elevated extracellular potassium directly stimulates two primary electrogenic vascular targets: it activates the electrogenic Na+/K+-ATPase pump in vascular smooth muscle cells (extruding 3 Na+ ions for every 2 K+ imported, generating net negative intracellular hyperpolarization) and opens inward rectifier potassium channels (Kir2.1). The resulting membrane hyperpolarization closes voltage-gated L-type calcium channels (Cav1.2), preventing calcium influx into the cytosol. Decreased intracellular calcium inactivates myosin light chain kinase (MLCK), leading to vascular smooth muscle relaxation and decreased systemic vascular resistance. Furthermore, in the kidney, dietary potassium downregulates the sodium-chloride cotransporter (NCC) in the distal convoluted tubule, accelerating natriuresis.',
          'রক্তে পটাশিয়াম বাড়লে তা রক্তনালির মসৃণ পেশির Na+/K+-ATPase পাম্পকে তীব্রভাবে চালু করে এবং পটাশিয়াম চ্যানেল (Kir2.1) খুলে দেয়। এর ফলে পেশিকোষের ভেতরে ঋণাত্মক বৈদ্যুতিক চার্জ তৈরি হয়, যা ক্যালসিয়াম প্রবেশের চ্যানেলগুলো (L-type calcium channel) বন্ধ করে দেয়। কোষে ক্যালসিয়াম না ঢুকলে পেশি সংকুচিত হতে পারে না এবং রক্তনালি পুরোপুরি শিথিল ও প্রসারিত হয়ে যায়, ফলে রক্তচাপ দ্রুত কমে যায়। এছাড়া এটি কিডনি দিয়ে বাড়তি সোডিয়াম প্রস্রাবের সাথে বের করে দিতে সাহায্য করে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'cardiovascular-atherogenesis-dash-hemodynamics',
    title: l(
      'Atherosclerosis Initiation, Hepatic Clearance & DASH Hemodynamics',
      'এথেরোস্ক্লেরোসিস সৃষ্টি, লিভারের কোলেস্টেরল অপসারণ ও রক্তচাপ নিয়ন্ত্রণ'
    ),
    description: l(
      'Interactive architecture of ApoB retention, SFA-mediated LDLR downregulation, eNOS uncoupling by sodium, and potassium vascular smooth muscle hyperpolarization.',
      'এপোবি কণার সঞ্চয়ন, সম্পৃক্ত চর্বি দ্বারা এলডিএল রিসেপ্টর দমন, সোডিয়াম দ্বারা নাইট্রিক অক্সাইড বিনষ্টকরণ এবং পটাশিয়াম দ্বারা রক্তনালি শিথিলকরণের চিত্র।'
    ),
    disclaimer: l(
      'Educational vascular simulation; cardiovascular risk management requires individual medical evaluation.',
      'রক্তনালির শিক্ষামূলক সিমুলেশন; হৃদরোগ ও উচ্চ রক্তচাপের চিকিৎসায় কার্ডিওলজিস্টের পরামর্শ নিন।'
    ),
    svgType: 'cardiovascular-hemodynamics',
    items: [
      {
        id: 'node-apob-retention',
        label: l('ApoB Particle Retention', 'ApoB কণার সঞ্চয়ন'),
        description: l(
          'Circulating ApoB particles enter subendothelial intima; basic residues form electrostatic bonds with proteoglycans, trapping atherogenic particles.',
          'রক্তের ApoB কণা রক্তনালির প্রাচীরে ঢুকে প্রোটিওগ্লাইকানের সাথে আয়নিক বন্ধনে আটকে গিয়ে চিরতরে জমা হয়ে যায়।'
        ),
        details: l(
          'Apolipoprotein B-100 contains basic lysine/arginine motifs that bind negatively charged sulfate groups on intimal biglycan and versican.',
          'ApoB-100 প্রোটিনের ধনাত্মক অ্যামিনো অ্যাসিড রক্তনালির প্রাচীরের প্রোটিওগ্লাইকানের সাথে আটকে কণাগুলোকে স্থায়ীভাবে জমা করে।'
        ),
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-foam-cells',
        label: l('Scavenger Foam Cells', 'ম্যাক্রোফেজ ফোম সেল'),
        description: l(
          'Oxidized LDL binds uninhibited scavenger receptors (CD36/SR-A1) on macrophages, engorging cells with lipid droplets and forming fatty streaks.',
          'জারিত চর্বি ম্যাক্রোফেজের CD36 রিসেপ্টরে ঢুকে ফোম কোষে পরিণত হয় এবং প্রদাহের মাধ্যমে ধমনিতে চর্বির প্লাক তৈরি করে।'
        ),
        details: l(
          'Scavenger receptors lack sterol feedback regulation; macrophages internalize unlimited oxidized LDL, releasing MMP-9 that degrades the fibrous cap.',
          'স্ক্যাভেঞ্জার রিসেপ্টরের কোনো বাধা না থাকায় ম্যাক্রোফেজ চর্বিতে ফুলে ফোম কোষে রূপ নেয় এবং প্লাক দুর্বল করে হার্ট অ্যাটাকের ঝুঁকি তৈরি করে।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-sfa-ldlr',
        label: l('SFA Hepatic LDLR Block', 'সম্পৃক্ত চর্বির রিসেপ্টর দমন'),
        description: l(
          'Dietary palmitic and myristic acids suppress hepatic SREBP-2 and increase PCSK9, downregulating surface LDL receptors and prolonging ApoB plasma half-life.',
          'খাবারের ক্ষতিকর সম্পৃক্ত চর্বি লিভারের কোলেস্টেরল পরিষ্কারকারী রিসেপ্টর নষ্ট করে দেয়, ফলে রক্তে ক্ষতিকর কণার সংখ্যা দ্বিগুণ বাড়ে।'
        ),
        details: l(
          'Saturated fatty acids decrease hepatocyte membrane fluidity, suppressing SREBP-2 transcription of LDLR and increasing PCSK9 lysosomal degradation.',
          'সম্পৃক্ত চর্বি লিভারের ঝিল্লি শক্ত করে রিসেপ্টর তৈরি কমায় এবং PCSK9 বাড়িয়ে রক্ত থেকে কোলেস্টেরল দূর করার গতি ধীর করে দেয়।'
        ),
        color: '#dc2626',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-enos-uncoupling',
        label: l('Sodium eNOS Uncoupling', 'সোডিয়াম ও নাইট্রিক অক্সাইড বিনষ্ট'),
        description: l(
          'Excess dietary sodium chloride generates superoxide radicals that oxidize BH4, uncoupling eNOS and shutting down vasodilatory nitric oxide production.',
          'অতিরিক্ত লবণ রক্তনালিতে বিষাক্ত ফ্রি-র‌্যাডিক্যাল তৈরি করে নাইট্রিক অক্সাইড তৈরি বন্ধ করে দেয়, ফলে রক্তচাপ মারাত্মক বেড়ে যায়।'
        ),
        details: l(
          'Superoxide oxidizes BH4 into BH2, turning eNOS into a superoxide producer and causing endothelial stiffness and hypertension.',
          'অতিরিক্ত সোডিয়াম নাইট্রিক অক্সাইড তৈরির এনজাইমটি নষ্ট করে উল্টো বিষাক্ত অক্সিজেন তৈরি করে রক্তনালি শক্ত করে রক্তচাপ বাড়ায়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-dash-potassium',
        label: l('DASH Potassium Dilation', 'ড্যাশ ডায়েট ও পটাশিয়াম প্রসারণ'),
        description: l(
          'Dietary potassium activates Na+/K+-ATPase and Kir2.1 in vascular smooth muscle, inducing membrane hyperpolarization and profound vasodilation.',
          'খাবারের পটাশিয়াম রক্তনালির পেশিকোষকে শিথিল করে দেয় এবং কিডনি দিয়ে বাড়তি লবণ বের করে দিয়ে রক্তচাপ স্বাভাবিক করে।'
        ),
        details: l(
          'Potassium-induced hyperpolarization closes L-type calcium channels, lowering cytosolic calcium to relax vascular smooth muscle.',
          'পটাশিয়াম রক্তনালির পেশিতে ক্যালসিয়াম প্রবেশ বন্ধ করে দিয়ে রক্তনালিকে প্রসারিত ও শিথিল রাখে এবং রক্তচাপ কমায়।'
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
          heading: l('1. Atherosclerosis & Endothelial Lipid Biology', '১. এথেরোস্ক্লেরোসিস ও রক্তনালির চর্বি রোগশারীরবৃত্ত'),
          paragraphs: [
            l(
              'Cardiovascular diseases, predominantly atherosclerotic cardiovascular disease (ASCVD) and hypertension, remain the leading causes of global morbidity and mortality [1]. Atherosclerosis is not simply passive fat deposition; rather, it is a chronic inflammatory lipid disease initiated by the retention of cholesterol-rich lipoprotein particles in the arterial wall [1, 2].',
              'হৃদরোগ, বিশেষ করে রক্তনালিতে চর্বি জমা (Atherosclerosis) এবং উচ্চ রক্তচাপ হলো বিশ্বজুড়ে মৃত্যুর প্রধান কারণ [১]। রক্তনালিতে চর্বি জমা কোনো সাধারণ ময়লা জমার মতো ঘটনা নয়; এটি মূলত রক্তনালির প্রাচীরে কোলেস্টেরলবাহী কণা আটকে গিয়ে দীর্ঘমেয়াদী মারাত্মক প্রদাহের সৃষ্টি হওয়া [১, ২]।'
            ),
            l(
              'When circulating atherogenic low-density lipoprotein (LDL) particles are elevated, they penetrate the endothelial monolayer into the arterial intima [2, 3]. Trapped particles oxidize, recruiting circulating monocytes that differentiate into macrophages [3]. These macrophages devour oxidized lipids via scavenger receptors to become lipid-engorged "foam cells" that form inflammatory atherosclerotic plaques [3, 4].',
              'রক্তে ক্ষতিকর এলডিএল কণা বেশি থাকলে তা রক্তনালির দেয়াল ভেদ করে ভেতরে ঢুকে আটকে যায় [২, ৩]। সেখানে এই চর্বি জারিত হলে শ্বেত রক্তকণিকা তা খেয়ে ফোম কোষে পরিণত হয় এবং ধমনিতে চর্বির প্লাক তৈরি করে রক্তপ্রবাহ বাধাগ্রস্ত করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Response-to-Retention Model & ApoB Particles', '২. প্রতিক্রিয়া-সঞ্চয়ন মডেল ও এপোবি কণা'),
          paragraphs: [
            l(
              'The response-to-retention model proves that atherosclerosis cannot occur without the intimal trapping of apolipoprotein B-100 (ApoB) particles [2]. Every atherogenic particle (VLDL, IDL, LDL, Lp(a)) carries exactly one non-exchangeable ApoB molecule [2].',
              'প্রতিক্রিয়া-সঞ্চয়ন মডেলে প্রমাণিত যে রক্তনালির প্রাচীরে অ্যাপোলিপোপ্রোটিন বি-১০০ (ApoB) যুক্ত কণা আটকে না গেলে কখনোই হৃদরোগ সৃষ্টি হতে পারে না [২]। রক্তে থাকা প্রতিটি ক্ষতিকর কণার গায়ে ঠিক একটি করে ApoB প্রোটিন থাকে [২]।'
            ),
            l(
              'Basic amino acids on ApoB-100 form electrostatic bonds with negatively charged intimal proteoglycans, trapping particles where they undergo enzymatic and oxidative modification, driving macrophage activation and plaque expansion [2, 3].',
              'ApoB প্রোটিনের ধনাত্মক অংশ রক্তনালির প্রাচীরের সাথে শক্তিশালী বন্ধনে আটকে কণাগুলোকে জমা করে এবং প্রদাহ সৃষ্টি করে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Hepatic LDL Clearance: SFA Suppression of LDLR', '৩. লিভারের এলডিএল অপসারণ ও সম্পৃক্ত চর্বির প্রভাব'),
          paragraphs: [
            l(
              'Dietary fatty acids directly govern circulating ApoB concentrations by regulating hepatic LDL receptors (LDLR) [3]. Saturated fatty acids (SFAs: palmitic, myristic) decrease hepatocyte membrane fluidity, suppressing SREBP-2 transcription of LDLR and increasing PCSK9 degradation [3].',
              'খাবারের চর্বি লিভারের এলডিএল রিসেপ্টর নিয়ন্ত্রণের মাধ্যমে রক্তে ক্ষতিকর কোলেস্টেরলের মাত্রা নির্ধারণ করে [৩]। ক্ষতিকর সম্পৃক্ত চর্বি (ঘি, মাখন, লাল মাংস) লিভারের কোলেস্টেরল পরিষ্কারকারী রিসেপ্টর তৈরি বন্ধ করে দেয় [৩]।'
            ),
            l(
              'Consequently, circulating LDL particles remain in the blood for 4–5 days instead of 2 days, accelerating arterial penetration [2, 3]. Replacing SFAs with polyunsaturated (PUFA) or monounsaturated (MUFA) fats restores SREBP-2, upregulating LDLR density and rapidly clearing circulating atherogenic particles [3].',
              'এর ফলে রক্ত থেকে ক্ষতিকর কোলেস্টেরল পরিষ্কার হতে পারে না [২, ৩]। কিন্তু সম্পৃক্ত চর্বির বদলে অলিভ অয়েল ও বাদামের ভালো চর্বি খেলে লিভারের রিসেপ্টর দ্বিগুণ বাড়ে এবং রক্ত দ্রুত পরিষ্কার হয় [৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Endothelial Nitric Oxide & DASH Electrolyte Balance', '৪. নাইট্রিক অক্সাইড ও ড্যাশ ইলেক্ট্রোলাইট ভারসাম্য'),
          paragraphs: [
            l(
              'Endothelial nitric oxide synthase (eNOS) converts L-arginine into nitric oxide (NO), relaxing vascular smooth muscle and maintaining normal blood pressure [4]. Excess dietary sodium generates superoxide radicals that uncouple eNOS, shutting down NO synthesis and causing arterial stiffening [4, 5].',
              'রক্তনালির অন্তর্বর্তী কোষ প্রতিনিয়ত নাইট্রিক অক্সাইড গ্যাস তৈরি করে রক্তনালিকে প্রসারিত ও শিথিল রাখে [৪]। কিন্তু অতিরিক্ত লবণ খেলে বিষাক্ত ফ্রি-র‌্যাডিক্যাল তৈরি হয়ে নাইট্রিক অক্সাইড তৈরি বন্ধ হয়ে যায় এবং রক্তচাপ মারাত্মক বেড়ে যায় [৪, ৫]।'
            ),
            l(
              'Dietary potassium counters sodium by stimulating vascular smooth muscle Na+/K+-ATPase and Kir channels, inducing hyperpolarization and vasodilation [4]. The DASH and DASH-Sodium trials demonstrated that a potassium-rich, sodium-restricted diet lowers systolic blood pressure by up to 11.5 mmHg [5].',
              'শাকসবজির পটাশিয়াম রক্তনালির পেশিকে শিথিল করে এবং কিডনি দিয়ে বাড়তি লবণ বের করে দেয় [৪]। বিখ্যাত ড্যাশ ট্রায়ালে দেখা গেছে লবণ কমিয়ে পটাশিয়াম বাড়ালে রক্তচাপ ১১.৫ মিলিমিটার পর্যন্ত কমে যায় [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. The PREDIMED Trial & Mediterranean Dietetics', '৫. প্রিডিমেড ট্রায়াল ও ভূমধ্যসাগরীয় খাদ্যাভ্যাস'),
          paragraphs: [
            l(
              'The landmark PREDIMED trial (7,447 high-risk participants) proved that dietary fat quality is more important than total fat restriction [6]. An energy-unrestricted Mediterranean diet supplemented with extra virgin olive oil or mixed nuts reduced major cardiovascular events (strokes, heart attacks, death) by 30% [6].',
              'যুগান্তকারী প্রিডিমেড ট্রায়ালে প্রমাণিত হয়েছে যে খাবারের চর্বি কমানোর চেয়ে চর্বির সঠিক ধরন নির্বাচন অনেক বেশি গুরুত্বপূর্ণ [৬]। প্রচুর অলিভ অয়েল ও বাদাম সমৃদ্ধ ভূমধ্যসাগরীয় খাবার হার্ট অ্যাটাক ও স্ট্রোকের ঝুঁকি ৩০% কমিয়ে দেয় [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Atherosclerosis is initiated by ApoB particle retention; replacing saturated fats with MUFA/PUFA upregulates hepatic LDLR, while DASH sodium restriction and potassium intake restore endothelial vasodilation [2, 5, 6].',
              'রক্তনালিতে ApoB কণা আটকে যাওয়া থেকেই হৃদরোগ শুরু হয়; ভালো চর্বি খেলে লিভার কোলেস্টেরল পরিষ্কার করে এবং ড্যাশ ডায়েট মেনে লবণ কমিয়ে পটাশিয়াম খেলে রক্তচাপ ও রক্তনালি সুস্থ থাকে [২, ৫, ৬]।'
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
          heading: l('1. The Response-to-Retention Model of Atherogenesis', '১. এথেরোস্ক্লেরোসিসের প্রতিক্রিয়া-সঞ্চয়ন মডেল'),
          paragraphs: [
            l(
              'The initiation of atherosclerosis requires the transcytosis and subendothelial entrapment of ApoB-100-containing lipoproteins [2]. Every atherogenic particle carries exactly one molecule of ApoB-100 [2]. Transcytosis across the endothelial monolayer is mediated by scavenger receptor class B type 1 (SR-B1) and ALK1 [2].',
              'ধমনিতে চর্বি জমার একমাত্র প্রাথমিক শর্ত হলো রক্তনালির প্রাচীরে ApoB কণাগুলো আটকে যাওয়া [২]। প্রতিটি ক্ষতিকর কণার গায়ে ঠিক একটি করে ApoB প্রোটিন থাকে [২]।'
            ),
            l(
              'Once inside the intima, basic lysine/arginine motifs on ApoB-100 bind negatively charged glycosaminoglycans on proteoglycans (biglycan, decorin), immobilizing the particle in a pro-oxidant microenvironment [2].',
              'রক্তনালির ভেতরের স্তরে ApoB প্রোটিন প্রোটিওগ্লাইকানের সাথে আয়নিক বন্ধনে আটকে গিয়ে চিরদিনের জন্য জমা হয়ে যায় [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Scavenger Receptors & Foam Cell Pathophysiology', '২. স্ক্যাভেঞ্জার রিসেপ্টর ও ফোম কোষের শারীরবৃত্ত'),
          paragraphs: [
            l(
              'Immobilized lipoproteins are oxidized by myeloperoxidase and lipoxygenases, generating oxidized LDL (oxLDL) [1, 2]. oxLDL binds unregulated scavenger receptors (CD36 and SR-A1) on monocyte-derived macrophages [2]. Because scavenger receptors lack sterol-mediated feedback downregulation, macrophages ingest unlimited lipid droplets, transforming into apoptotic foam cells [1, 2].',
              'আটকে থাকা চর্বি জারিত হয়ে oxLDL তৈরি করে, যা ম্যাক্রোফেজের অনিয়ন্ত্রিত CD36 রিসেপ্টর দিয়ে কোষে ঢুকে ফোম কোষ তৈরি করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. SFA-Mediated Downregulation of Hepatic LDLR Turnover', '৩. সম্পৃক্ত চর্বি দ্বারা লিভারের এলডিএল রিসেপ্টর দমন'),
          paragraphs: [
            l(
              'Hepatic clearance of circulating LDL is governed by the LDL receptor (LDLR) [3]. Dietary saturated fatty acids (palmitic C16:0, myristic C14:0) decrease membrane fluidity and suppress the transcription factor SREBP-2, reducing LDLR gene expression while increasing PCSK9-mediated receptor degradation [3]. Substituting SFAs with linoleic acid (PUFA) or oleic acid (MUFA) reverses this defect, accelerating plasma ApoB clearance [3].',
              'খাবারের সম্পৃক্ত চর্বি লিভারের ঝিল্লি শক্ত করে SREBP-2 বন্ধ করে দেয় এবং PCSK9 বাড়িয়ে এলডিএল রিসেপ্টর ধ্বংস করে [৩]। ভালো অসম্পৃক্ত চর্বি খেলে লিভারের রিসেপ্টর তৈরি বৃদ্ধি পায় এবং রক্ত থেকে ক্ষতিকর কোলেস্টেরল দ্রুত অপসারিত হয় [৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Vascular eNOS Uncoupling & DASH Potassium Hemodynamics', '৪. রক্তনালির নাইট্রিক অক্সাইড বিনষ্ট ও ড্যাশ পটাশিয়াম'),
          paragraphs: [
            l(
              'Endothelial nitric oxide synthase produces NO to stimulate smooth muscle soluble guanylyl cyclase, generating cGMP and inducing vasodilation [4]. Excessive dietary sodium generates superoxide, oxidizing the tetrahydrobiopterin (BH4) cofactor into dihydrobiopterin (BH2) and causing eNOS uncoupling [4, 5].',
              'স্বাভাবিক রক্তনালিতে eNOS এনজাইম নাইট্রিক অক্সাইড তৈরি করে রক্তনালি প্রসারিত রাখে [৪]। কিন্তু খাবারে অতিরিক্ত সোডিয়াম থাকলে তা এনজাইমটিকে বিকল (eNOS uncoupling) করে দিয়ে রক্তচাপ বাড়িয়ে দেয় [৪, ৫]।'
            ),
            l(
              'Dietary potassium opens vascular smooth muscle Kir channels and stimulates Na+/K+-ATPase, closing voltage-gated Cav1.2 channels to reduce vascular resistance [4]. In the distal nephron, potassium downregulates NCC, promoting natriuresis [5].',
              'খাবারের পটাশিয়াম রক্তনালির পেশিকোষকে শিথিল করে এবং কিডনি দিয়ে বাড়তি লবণ প্রস্রাবের সাথে বের করে দিয়ে রক্তচাপ কমায় [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. PREDIMED Trial & Polyphenol Cardiovascular Protection', '৫. প্রিডিমেড ট্রায়াল ও পলিফেনলের হৃদসুরক্ষা'),
          paragraphs: [
            l(
              'In the PREDIMED trial, an unrestricted-fat Mediterranean diet supplemented with extra virgin olive oil or mixed nuts reduced major adverse cardiovascular events by 30% [6]. Bioactive polyphenols (hydroxytyrosol, oleocanthal) protect circulating LDL from oxidation and inhibit cyclooxygenase enzymes, extinguishing vascular inflammation [6].',
              'প্রিডিমেড ট্রায়ালে দেখা গেছে অলিভ অয়েল ও বাদাম সমৃদ্ধ ভূমধ্যসাগরীয় খাবার হৃদরোগের ঝুঁকি ৩০% কমিয়ে দেয় [৬]। অলিভ অয়েলের পলিফেনল রক্তে কোলেস্টেরলের জারণ প্রতিরোধ করে এবং রক্তনালির প্রদাহ নিরাময় করে [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Key Mechanistic Takeaways', '৬. প্রধান আণবিক সারসংক্ষেপ'),
          paragraphs: [
            l(
              'ApoB particle number drives intimal collision and entrapment; replacing dietary SFA with PUFA/MUFA enhances hepatic LDLR clearance, while DASH electrolyte balance preserves vasodilatory eNOS coupling [2, 3, 5].',
              'রক্তে ApoB কণার সংখ্যাই প্লাক তৈরির মূল ঝুঁকি; ভালো চর্বি খেলে লিভার কোলেস্টেরল শুষে নেয় এবং ড্যাশ ডায়েটের পটাশিয়াম রক্তনালিকে প্রসারিত ও সুস্থ রাখে [২, ৩, ৫]।'
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
          heading: l('1. Proteoglycan Binding Motifs & Intimal Extravasation', '১. প্রোটিওগ্লাইকান বন্ধন ও রক্তনালির প্রাচীরে সঞ্চয়ন'),
          paragraphs: [
            l(
              'Site-directed mutagenesis identifies specific basic clusters on ApoB-100 (Arg3359-Lys3369, Site B) that mediate subendothelial retention [2]. When trapped in the glycosaminoglycan matrix of biglycan and versican, lipoproteins aggregate and undergo enzymatic lipolysis by secretory sphingomyelinase and secretory phospholipase A2 (sPLA2), generating pro-atherogenic lysophospholipids and ceramide-enriched aggregates [1, 2].',
              'ApoB-100 প্রোটিনের বিশেষ ধনাত্মক অংশ রক্তনালির প্রাচীরের সাথে আয়নিক বন্ধনে আটকে যায় এবং এনজাইমের মাধ্যমে ভেঙে বিষাক্ত সিরামাইড ও প্লাক তৈরি করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Scavenger Receptor CD36 / SR-A1 Signaling & Plaque Rupture', '২. স্ক্যাভেঞ্জার রিসেপ্টর সংকেত ও প্লাক ফেটে যাওয়া'),
          paragraphs: [
            l(
              'Engaging CD36 with oxLDL activates the Src family kinase Fyn, recruiting Vav and stimulating persistent macropinocytosis of oxidized sterols [1, 2]. Overwhelmed lysosomes trigger cholesterol crystal nucleation, activating the NLRP3 inflammasome to cleave pro-IL-1beta into mature IL-1beta [1]. Concurrently, foam cell MMP-9 degrades interstitial fibrillar collagen in the fibrous cap, precipitating acute plaque rupture and thrombosis [1].',
              'ম্যাক্রোফেজ অতিরিক্ত জারিত চর্বি খেলে কোষের ভেতর কোলেস্টেরলের স্ফটিক তৈরি হয়ে মারাত্মক প্রদাহের সৃষ্টি হয় [১, ২]। ফোম কোষ থেকে ক্ষরিত MMP-9 প্লাকের ওপরের শক্ত আবরণটি ভেঙে দেয়, যার ফলে তাৎক্ষণিক রক্ত জমাট বেঁধে হার্ট অ্যাটাক ঘটে [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. SREBP-2 Cleavage-Activating Protein (SCAP) Regulation', '৩. লিভারের এসক্যাপ ও এসআরইবিপি-২ নিয়ন্ত্রণ ব্যবস্থা'),
          paragraphs: [
            l(
              'Dietary palmitate alters the liquid-ordered state of endoplasmic reticulum membranes, retaining the SCAP/SREBP-2 complex in the ER and preventing Golgi processing [3]. Diminished nuclear SREBP-2 downregulates LDLR transcription [3]. Simultaneously, saturated fat enhances PCSK9 secretion, accelerating LDLR lysosomal degradation and extending plasma ApoB residence time [3].',
              'খাবারের পামিটিক অ্যাসিড লিভারের কোষে SREBP-2 জিন নিয়ন্ত্রক বন্ধ করে দেয় এবং PCSK9 বাড়িয়ে এলডিএল রিসেপ্টর ধ্বংস করে, ফলে রক্তে ক্ষতিকর কণার সংখ্যা দ্বিগুণ বাড়ে [৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Biophysics of eNOS Uncoupling by O2-', '৪. সুপারঅক্সাইড দ্বারা ই-এনওএস বিনষ্টকরণের আণবিক জীবপদার্থবিদ্যা'),
          paragraphs: [
            l(
              'In the presence of excess sodium, endothelial NADPH oxidase (NOX2/NOX4) generates superoxide (O2-) [4]. Superoxide reacts with NO at diffusion-limited rates (k ~1.9 x 10^10 M^-1 s^-1) to form peroxynitrite (ONOO-) [4]. Peroxynitrite irreversibly oxidizes tetrahydrobiopterin (BH4) to the inactive dihydrobiopterin (BH2) radical, converting eNOS from a nitric oxide synthase into an uncoupled superoxide generator that stiffens resistance arterioles [4, 5].',
              'অতিরিক্ত লবণ রক্তনালিতে বিষাক্ত সুপারঅক্সাইড তৈরি করে নাইট্রিক অক্সাইড তৈরির এনজাইমটিকে বিকল করে দেয়, যার ফলে রক্তনালি শক্ত হয়ে রক্তচাপ মারাত্মক বেড়ে যায় [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Specialized Pro-Resolving Lipid Mediators (SPMs)', '৫. বিশেষায়িত প্রদাহ নিরাময়কারী লিপিড সংকেত'),
          paragraphs: [
            l(
              'Long-chain marine omega-3 fatty acids EPA and DHA are metabolized by 15-lipoxygenase into specialized pro-resolving mediators (resolvins E1/D1, protectins, maresins) [6]. SPMs bind G-protein coupled receptors ChemR23 and GPR32 to halt neutrophil extravasation, stimulate non-phlogistic macrophage efferocytosis of dead foam cells, and actively resolve arterial wall inflammation [6].',
              'সামুদ্রিক মাছের ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA/DHA) শরীরে বিশেষ নিরাময়কারী উপাদান তৈরি করে যা রক্তনালির প্রদাহ নিরাময় করে এবং মৃত চর্বি কোষগুলোকে রক্তনালি থেকে পরিষ্কার করে দেয় [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Vascular Dietetics Summary', '৬. ফলিত ভাস্কুলার ডায়েটেটিক্সের সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Translational cardiovascular dietetics integrates ApoB particle clearance via SFA substitution with Mediterranean polyphenols and DASH electrolyte hemodynamics to prevent plaque initiation and preserve endothelial resilience [2, 3, 5, 6].',
              'হৃদরোগ প্রতিরোধে ক্ষতিকর চর্বি বদলে ভালো চর্বি খাওয়া, অলিভ অয়েল ও বাদাম গ্রহণ এবং লবণ কমিয়ে পটাশিয়াম সমৃদ্ধ শাকসবজি খাওয়া রক্তনালির সুরক্ষায় সবচেয়ে বিজ্ঞানসম্মত চিকিৎসা [২, ৩, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential vascular progression of ApoB subendothelial retention, scavenger foam cell formation, SFA LDLR downregulation, and DASH potassium vasodilation.',
      'রক্তনালিতে এপোবি কণা সঞ্চয়ন, ফোম কোষ গঠন, লিভারের রিসেপ্টর দমন এবং ড্যাশ পটাশিয়াম দ্বারা রক্তনালি প্রসারণের ধারাবাহিক চিত্র।'
    ),
    steps: [
      l(
        'Step 1: Elevated circulating ApoB particles penetrate the arterial endothelium, anchoring to intimal proteoglycans.',
        'ধাপ ১: রক্তে অতিরিক্ত ApoB কণা রক্তনালির ভেতর ঢুকে সেখানে থাকা প্রোটিনের সাথে শক্তভাবে আটকে যায়।'
      ),
      l(
        'Step 2: Trapped lipoproteins oxidize; scavenger receptors internalize oxLDL, creating inflammatory foam cells.',
        'ধাপ ২: আটকে থাকা চর্বি জারিত হয় এবং ম্যাক্রোফেজ তা খেয়ে ফোম কোষে পরিণত হয়ে রক্তনালি সরু করতে থাকে।'
      ),
      l(
        'Step 3: SFAs downregulate hepatic LDL clearance; replacing SFAs with MUFA/PUFA upregulates LDLR, clearing circulating ApoB.',
        'ধাপ ৩: সম্পৃক্ত চর্বি লিভারের রিসেপ্টর বন্ধ করে; ভালো চর্বি খেলে লিভার আবার সচল হয়ে রক্ত থেকে সমস্ত ক্ষতিকর কোলেস্টেরল শুষে নেয়।'
      ),
      l(
        'Step 4: Restricting sodium and optimizing potassium restores eNOS coupling, inducing hyperpolarization and lowering blood pressure.',
        'ধাপ ৪: লবণ কমিয়ে পটাশিয়াম সমৃদ্ধ শাকসবজি খেলে রক্তনালির নাইট্রিক অক্সাইড ফিরে আসে এবং রক্তচাপ স্বাভাবিক থাকে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why does measuring circulating Apolipoprotein B (ApoB) provide a clinically superior assessment of atherogenic risk compared to conventional LDL-Cholesterol (LDL-C)?',
      'রক্তনালিতে চর্বি জমার ঝুঁকি মূল্যায়নে সাধারণ এলডিএল কোলেস্টেরলের (LDL-C) চেয়ে অ্যাপোলিপোপ্রোটিন বি (ApoB) পরিমাপ করা কেন চিকিৎসাবিজ্ঞানে অনেক বেশি নির্ভরযোগ্য?'
    ),
    options: [
      l(
        'LDL-C measures only the mass concentration of cholesterol carried within LDL particles, which varies with particle size; each atherogenic particle carries exactly one molecule of ApoB-100, directly quantifying the absolute number of particles that drive intimal retention.',
        'সাধারণ LDL-C কেবল রক্তে থাকা কোলেস্টেরলের ওজন মাপে, কণার সংখ্যা নয়; প্রতিটি ক্ষতিকর কণার গায়ে ঠিক একটি করে ApoB প্রোটিন থাকে, ফলে ApoB মাপলে ক্ষতিকর কণার সঠিক সংখ্যা নিখুঁতভাবে জানা যায়।'
      ),
      l(
        'LDL-C degrades into vitamin C in the liver, while ApoB is exclusively synthesized by coronary arteries.',
        'LDL-C যকৃতে ভিটামিন সি-তে পরিণত হয়, কিন্তু ApoB ধমনিতে তৈরি হয়।'
      ),
      l(
        'ApoB particles can only enter the heart if blood glucose is completely zero.',
        'রক্তের গ্লুকোজ শূন্য না হলে ApoB হৃদপিণ্ডে ঢুকতে পারে না।'
      ),
      l(
        'Measuring ApoB directly replaces the need for measuring systemic arterial blood pressure.',
        'ApoB মাপলে রক্তচাপ মাপার আর কোনো প্রয়োজন থাকে না।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'LDL-C measures only cholesterol mass, which varies dramatically depending on particle composition. In insulin resistance, patients produce small, dense LDL particles with low cholesterol per particle, yielding falsely normal LDL-C despite dangerous particle counts. Because each atherogenic particle (LDL, VLDL remnants, IDL, Lp(a)) contains exactly one ApoB molecule, quantifying ApoB directly measures the particle number driving endothelial collision and subendothelial entrapment.',
      'সাধারণ LDL-C কেবল কোলেস্টেরলের ওজন মাপে, কণার সংখ্যা নয়। ডায়াবেটিস রোগীদের রক্তে কোলেস্টেরল কম থাকলেও কণার সংখ্যা মারাত্মক বেশি থাকতে পারে (ছোট ঘন এলডিএল কণা)। প্রতিটি ক্ষতিকর কণার গায়ে ঠিক একটি করে ApoB প্রোটিন থাকে। ফলে ApoB মাপলে রক্তে ক্ষতিকর কণার সঠিক সংখ্যা সুনির্দিষ্টভাবে জানা যায়, যা সাধারণ পরীক্ষায় ধরা পড়ে না।'
    ),
  },
}
