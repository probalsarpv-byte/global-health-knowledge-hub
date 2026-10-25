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
  updatedAt: '2026-10-25',
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
  lastReviewed: '2026-10-25',
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
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Response-to-Retention Model', 'প্রতিক্রিয়া-সঞ্চয়ন মডেল'),
        definition: l(
          'The foundational paradigm proving that atherogenesis initiates when circulating ApoB-containing lipoproteins penetrate the arterial intima and are electrostatically trapped by negatively charged subendothelial proteoglycans (biglycan, versican) [1, 2].',
          'হৃদরোগের মূল বৈজ্ঞানিক মডেল, যা প্রমাণ করে যে রক্তে ঘুরে বেড়ানো ApoB যুক্ত ক্ষতিকর চর্বি কণা রক্তনালির ভেতরের প্রাচীরে ঢুকে প্রোটিওগ্লাইকানের সাথে আয়নিক বন্ধনে আটকে যাওয়া থেকেই প্লাক বা ব্লক তৈরির সূচনা হয় [১, ২]।'
        ),
      },
      {
        term: l('Apolipoprotein B-100 (ApoB) & Particle Discordance', 'অ্যাপোলিপোপ্রোটিন বি-১০০ (ApoB) ও কণা অসামঞ্জস্য'),
        definition: l(
          'The single structural scaffold protein present on every atherogenic lipoprotein (VLDL, IDL, LDL, Lp(a)). ApoB directly quantifies absolute circulating atherogenic particle number, outperforming LDL-C in clinical risk prediction under hypertriglyceridemic or insulin-resistant discordance [2].',
          'রক্তের প্রতিটি ক্ষতিকর চর্বি কণার (LDL, VLDL) গায়ে থাকা একমাত্র অবিচ্ছেদ্য কাঠামোগত প্রোটিন। এটি রক্তে ক্ষতিকর কণার মোট সংখ্যা পরিমাপ করে, যা ট্রাইগ্লিসারাইড বেশি থাকা বা ডায়াবেটিস রোগীদের ক্ষেত্রে সাধারণ LDL-C এর চেয়ে বহুগুণ নিখুঁত পূর্বাভাস দেয় [২]।'
        ),
      },
      {
        term: l('Hepatic SREBP-2 & LDL Receptor (LDLR) Turnover', 'হেপাটিক এসআরইবিপি-২ ও এলডিএল রিসেপ্টর পুনর্ব্যবহার'),
        definition: l(
          'The homeostatic clearance mechanism wherein membrane cholesterol depletion activates SREBP-2 transcription of LDLR, clearing circulating LDL. Dietary saturated fatty acids (palmitate, myristate) rigidify ER membranes, suppress SREBP-2, and upregulate PCSK9-mediated LDLR lysosomal degradation [2, 3].',
          'যকৃতের কোষঝিল্লির কোলেস্টেরল পরিষ্কারকারী রিসেপ্টর ব্যবস্থা। খাবারে ক্ষতিকর সম্পৃক্ত চর্বি বেশি থাকলে তা লিভারের SREBP-2 জিন দমন করে এবং PCSK9 এনজাইম বাড়িয়ে রিসেপ্টর ধ্বংস করে, ফলে রক্তে ক্ষতিকর কোলেস্টেরলের মাত্রা দ্বিগুণ বেড়ে যায় [২, ৩]।'
        ),
      },
      {
        term: l('Endothelial Nitric Oxide Synthase (eNOS) Coupling & BH4', 'এন্ডোথেলিয়াল নাইট্রিক অক্সাইড সিন্থেজ ও বিএইচ৪'),
        definition: l(
          'The constitutive endothelial enzyme that converts L-arginine into vasodilatory nitric oxide (NO) in the presence of tetrahydrobiopterin (BH4). Excess dietary sodium and oxidative stress oxidize BH4 to BH2, uncoupling eNOS to produce cytotoxic superoxide radicals instead of NO [4, 5].',
          'রক্তনালির অন্তর্বর্তী কোষের এনজাইম যা বিএইচ৪ (BH4) এর সহায়তায় আর্জিনিন থেকে নাইট্রিক অক্সাইড তৈরি করে রক্তনালিকে শিথিল ও প্রসারিত রাখে। অতিরিক্ত লবণ খেলে এই এনজাইমটি বিকল হয়ে উল্টো বিষাক্ত অক্সিজেন তৈরি করে রক্তচাপ বাড়িয়ে দেয় [৪, ৫]।'
        ),
      },
      {
        term: l('DASH Sodium-to-Potassium Ionic Hemodynamics', 'ড্যাশ সোডিয়াম-পটাশিয়াম আয়নীয় রক্তসঞ্চালন'),
        definition: l(
          'A dietary hemodynamic protocol that pairs sodium restriction (1,500 mg/day) with potassium enrichment (4,700 mg/day), stimulating vascular smooth muscle Na+/K+-ATPase and Kir2.1 channels to induce hyperpolarization, arterial vasodilation, and renal natriuresis [4, 5].',
          'একটি প্রমাণভিত্তিক পুষ্টি প্রোটোকল যা লবণ কমিয়ে (দৈনিক ১৫০০ মিলিগ্রাম) পটাশিয়াম বৃদ্ধি (দৈনিক ৪৭০০ মিলিগ্রাম) করে রক্তনালির পেশিকোষকে শিথিল করে এবং কিডনি দিয়ে অতিরিক্ত সোডিয়াম বের করে রক্তচাপ দ্রুত স্বাভাবিক করে [৪, ৫]।'
        ),
      },
      {
        term: l('Extra Virgin Olive Oil (EVOO) Polyphenols & Mediterranean Lipid Remodeling', 'অলিভ অয়েল পলিফেনল ও ভূমধ্যসাগরীয় লিপিড পুনর্গঠন'),
        definition: l(
          'Bioactive secoiridoids (oleocanthal, hydroxytyrosol) and high oleic acid (MUFA) in EVOO that protect LDL particles from oxidation, promote HDL reverse cholesterol transport, and suppress endothelial VCAM-1/ICAM-1 adhesion molecules, reducing major adverse cardiovascular events by 30% [5, 6].',
          'খাঁটি অলিভ অয়েলের শক্তিশালী অ্যান্টিঅক্সিডেন্ট ও স্বাস্থ্যকর অসম্পৃক্ত চর্বি যা রক্তের চর্বিকে জারিত হওয়া থেকে রক্ষা করে, ভালো চর্বি বা এইচডিএলের কার্যক্ষমতা বাড়ায় এবং হার্ট অ্যাটাকের ঝুঁকি ৩০ শতাংশ কমিয়ে দেয় [৫, ৬]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Saturated Fat Substitution & Hepatic LDLR Upregulation in Severe Hypercholesterolemia',
          'উচ্চ কোলেস্টেরল ও রক্তচাপের রোগীর জন্য প্রমাণভিত্তিক কার্ডিওভাসকুলার ডায়েট প্রণয়ন'
        ),
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
      {
        title: l(
          'ApoB/LDL-C Particle Discordance Resolution via Mediterranean PUFA/MUFA Titration',
          'এপোবি ও এলডিএল-সি কণা অসামঞ্জস্য দূরীকরণ ও ভূমধ্যসাগরীয় পথ্য পরিকল্পনা'
        ),
        steps: [
          l(
            'Step 1: Discordance Identification in Metabolic Syndrome: A 46-year-old female with abdominal obesity (waist circumference 92 cm, BMI 29.4) presents for annual metabolic checkup. Fasting lipid panel reveals LDL-C of 112 mg/dL (falsely categorized as "near optimal" by traditional guidelines), but fasting serum triglycerides are elevated at 240 mg/dL and HDL-C is low at 38 mg/dL. Advanced lipoprotein testing demonstrates ApoB of 124 mg/dL (>80th percentile) and LDL particle number (LDL-P) of 1,780 nmol/L. This profound discordance (high ApoB relative to moderate LDL-C) reveals a high burden of atherogenic small, dense LDL particles driven by hepatic VLDL overproduction.',
            'ধাপ ১: মেটাবলিক সিন্ড্রোমে কণা অসামঞ্জস্য শনাক্তকরণ: ৪৬ বছর বয়সী এক নারী পেটের স্থূলতা নিয়ে এসেছেন। সাধারণ লিপিড প্রোফাইলে তাঁর এলডিএল কোলেস্টেরল ১১২ মিগ্রা/ডেসিলিটার (যা আপাতদৃষ্টিতে স্বাভাবিক মনে হয়), কিন্তু ট্রাইগ্লিসারাইড ২৪০ এবং ভালো কোলেস্টেরল এইচডিএল মাত্র ৩৮। উন্নত পরীক্ষায় দেখা গেল তাঁর ApoB কণার সংখ্যা ১২৪ (বিপজ্জনক মাত্রা) এবং ক্ষতিকর কণার সংখ্যা ১৭৮০। সাধারণ কোলেস্টেরল স্বাভাবিক দেখালেও রক্তে প্রচুর ছোট ও ঘন ক্ষতিকর কণা ঘুরে বেড়াচ্ছে যা হার্ট অ্যাটাকের ঝুঁকি বহুগুণ বাড়িয়ে দেয়।'
          ),
          l(
            'Step 2: Dietary Etiology & Triglyceride-Driven Particle Remodeling: Nutritional anamnesis shows a high intake of refined carbohydrates, added sucrose, and ultra-processed seed oils (high glycemic load >130/day), paired with low marine omega-3 fatty acids. High portal glucose flux and insulin resistance accelerate hepatic de novo lipogenesis, forcing hepatocytes to assemble large, triglyceride-rich VLDL-1 particles. In the circulation, Cholesteryl Ester Transfer Protein (CETP) exchanges VLDL triglycerides for LDL cholesteryl esters, generating triglyceride-enriched LDL particles that undergo hydrolysis by hepatic lipase, yielding small, dense, cholesterol-depleted LDL particles that retain exactly one ApoB molecule.',
            'ধাপ ২: খাদ্যজনিত কারণ ও কণা বিকৃতির আণবিক বিশ্লেষণ: খাদ্য বিশ্লেষণে দেখা গেল তিনি প্রচুর চিনি ও ময়দার খাবার খান কিন্তু মাছে থাকা ওমেগা-৩ খান না। অতিরিক্ত শর্করা লিভারে গিয়ে প্রচুর ক্ষতিকর VLDL কণা তৈরি করে। রক্তে CETP এনজাইমের মাধ্যমে এই কণাগুলো এলডিএলের সাথে চর্বি বদল করে ছোট ও ঘন কণা তৈরি করে। এদের ভেতরে কোলেস্টেরল কম থাকলেও প্রতিটি কণার গায়ে একটি করে ApoB প্রোটিন ঠিকই থাকে, যার ফলে রক্তনালির দেয়ালে আঘাতের সংখ্যা বেড়ে যায়।'
          ),
          l(
            'Step 3: Mediterranean MNT & Marine Omega-3 Titration: Implement a structured Mediterranean dietary pattern: eliminate refined sugars and high-glycemic starches, reducing glycemic load to <65/day. Prescribe 40 g/day of extra virgin olive oil rich in oleic acid and phenolic oleocanthal, 200 g/week of wild fatty fish (salmon, sardines) supplying 3.0 g/day of EPA and DHA (eicosapentaenoic and docosahexaenoic acids), and 15 g/day of ground flaxseeds supplying alpha-linolenic acid (ALA). High-dose EPA/DHA suppresses hepatic SREBP-1c and DGAT, slashing hepatic VLDL-1 triglyceride secretion by >45%.',
            'ধাপ ৩: ভূমধ্যসাগরীয় পথ্য ও ওমেগা-৩ সমন্বয়: খাবারে সমস্ত চিনি ও ময়দা বন্ধ করে ভূমধ্যসাগরীয় খাবার চালু করা হলো। প্রতিদিন ৪০ গ্রাম খাঁটি অলিভ অয়েল, সপ্তাহে ২০০ গ্রাম তৈলাক্ত সামুদ্রিক মাছ (যা দৈনিক ৩ গ্রাম ইপিএ ও ডিএইচএ প্রদান করে) এবং ১৫ গ্রাম তিসির বীজ দেওয়া হলো। ওমেগা-৩ ফ্যাটি অ্যাসিড লিভারে চর্বি তৈরির জিন (SREBP-1c) দমন করে রক্তে ক্ষতিকর VLDL পাঠানো ৪৫ শতাংশ কমিয়ে দেয়।'
          ),
          l(
            'Step 4: Lipoprotein Remodeling & Discordance Resolution at 16 Weeks: At 16-week follow-up, fasting triglycerides drop from 240 mg/dL to 108 mg/dL (-55%), eliminating CETP-mediated core lipid exchange. Small, dense LDL particles convert back to large, buoyant LDL particles. Repeat ApoB drops from 124 mg/dL to 76 mg/dL (-39%), and LDL-P drops to 980 nmol/L. High-density lipoprotein cholesterol (HDL-C) rises from 38 to 51 mg/dL, resolving the atherogenic dyslipidemia and eliminating the ApoB/LDL-C discordance.',
            'ধাপ ৪: ১৬ সপ্তাহ পর কণা নিরাময় ও স্বাভাবিকীকরণ: ১৬ সপ্তাহ পর ট্রাইগ্লিসারাইড ২৪০ থেকে নেমে মাত্র ১০৮ মিগ্রা/ডেসিলিটারে চলে এল (৫৫% হ্রাস)। রক্তে ক্ষতিকর ছোট কণাগুলো বিলুপ্ত হয়ে বড় ও অক্ষতিকর কণায় রূপ নিল। ApoB ১২৪ থেকে নেমে ৭৬ এ পৌঁছাল (৩৯% হ্রাস) এবং ভালো কোলেস্টেরল ৩৮ থেকে বেড়ে ৫১ তে উন্নীত হলো। এর ফলে রক্তনালিতে চর্বি জমার মারাত্মক ঝুঁকি পুরোপুরি দূর হলো।'
          ),
        ],
        conclusion: l(
          'Targeting hepatic de novo lipogenesis via Mediterranean carbohydrate restriction and marine omega-3 PUFA titration successfully eliminates ApoB/LDL-C particle discordance, lowers absolute atherogenic particle concentration, and resolves atherogenic dyslipidemia without pharmacotherapy.',
          'ভূমধ্যসাগরীয় খাদ্যাভ্যাস এবং সামুদ্রিক ওমেগা-৩ গ্রহণের মাধ্যমে লিভারের চর্বি তৈরি বন্ধ করে ক্ষতিকর ApoB কণার সংখ্যা নাটকীয়ভাবে কমিয়ে রক্তনালির ব্লক প্রতিরোধ করা সম্ভব।'
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
      {
        question: l(
          'What hepatic molecular mechanism explains why saturated fatty acids containing 12 to 16 carbons (lauric, myristic, palmitic) potently elevate circulating LDL cholesterol?',
          'লরিক, মিরিস্টিক ও প্যালমিটিক অ্যাসিডের মতো সম্পৃক্ত চর্বিগুলো লিভারে কোন আণবিক প্রক্রিয়ায় রক্তে ক্ষতিকর এলডিএল কোলেস্টেরল বহুগুণ বাড়িয়ে দেয়?'
        ),
        answer: l(
          'Medium- and long-chain saturated fatty acids incorporate into hepatocyte endoplasmic reticulum (ER) membrane phospholipids, reducing membrane fluidity. This biophysical alteration impedes the escort of the SCAP/SREBP-2 complex from the ER to the Golgi apparatus, preventing the proteolytic liberation of mature SREBP-2 transcription factors. Consequently, transcription of the LDL receptor (LDLR) gene plummets. Concurrently, saturated fatty acids upregulate transcription of Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9), which binds cell-surface LDLR and targets it for lysosomal degradation rather than endosomal recycling. Together, suppressed LDLR synthesis and accelerated LDLR degradation double the plasma residence time of circulating ApoB particles, dramatically increasing arterial penetration.',
          'এই সম্পৃক্ত চর্বিগুলো লিভার কোষের এন্ডোপ্লাজমিক রেটিকুলামের মেমব্রেনকে শক্ত ও অনমনীয় করে ফেলে। এর ফলে এসআরইবিপি-২ (SREBP-2) প্রোটিন গলগি বডিতে যেতে পারে না এবং লিভারের গায়ে এলডিএল রিসেপ্টর তৈরি নাটকীয়ভাবে কমে যায়। একই সাথে এরা PCSK9 এনজাইম বাড়িয়ে থাকা রিসেপ্টরগুলোকেও লাইসোজোমে ধ্বংস করে ফেলে। ফলে রক্ত থেকে ক্ষতিকর কোলেস্টেরল অপসারণ বন্ধ হয়ে যায় এবং কণাগুলো দ্বিগুণ সময় ধরে রক্তে থেকে রক্তনালির মারাত্মক ক্ষতি করে।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A multi-stage pathophysiological diagram illustrating the Progression from ApoB Particle Subendothelial Retention, Endothelial Extravasation, Foam Cell Formation, Fibrous Plaque Expansion, and Dietary Hemodynamic Reversal.',
      'রক্তনালির প্রাচীরে এপোবি কণার সঞ্চয়ন থেকে শুরু করে প্রদাহ, ফোম সেল তৈরি, প্লাক বৃদ্ধি এবং ড্যাশ ও ভূমধ্যসাগরীয় খাদ্যাভ্যাসের মাধ্যমে হৃদরোগ নিরাময়ের ধারাবাহিক রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Subendothelial Penetration & Proteoglycan Entrapment: Circulating ApoB-100 containing lipoproteins (predominantly small, dense LDL) cross the arterial endothelial monolayer via transcytosis. Positively charged basic lysine and arginine motifs on ApoB form electrostatic salt bridges with negatively charged glycosaminoglycan side chains of subendothelial proteoglycans (biglycan and versican), physically trapping the particles within the intimal extracellular matrix.',
        'ধাপ ১: রক্তনালির প্রাচীরে প্রবেশ ও কণা আটকে যাওয়া: রক্তে ঘুরে বেড়ানো ApoB-100 যুক্ত ক্ষতিকর চর্বি কণা (বিশেষ করে ছোট ঘন এলডিএল) রক্তনালির অন্তর্বর্তী পর্দা ভেদ করে ভেতরের স্তরে ঢুকে পড়ে। ApoB প্রোটিনের ধনাত্মক চার্জ প্রাচীরের প্রোটিওগ্লাইকানের ঋণাত্মক চার্জের সাথে শক্তিশালী বন্ধন তৈরি করে কণাগুলোকে চিরতরে সেখানে আটকে ফেলে।'
      ),
      l(
        'Step 2: Oxidative Modification & Scavenger Receptor Ligand Generation: Trapped lipoproteins are exposed to resident endothelial cells and smooth muscle cells, undergoing progressive lipid peroxidation and oxidative degradation. Reactive aldehydes modify lysine residues on ApoB, rendering oxidized LDL (oxLDL) unrecognizable to normal LDL receptors but converting it into a high-affinity ligand for macrophage scavenger receptors CD36 and SR-A1.',
        'ধাপ ২: চর্বির জারণ ও বিষাক্ত রূপান্তর: আটকে থাকা চর্বি কণাগুলো রক্তনালির ফ্রি-র‌্যাডিক্যাল দ্বারা জারিত হয়ে মারাত্মক বিষাক্ত জারিত চর্বিতে (oxLDL) রূপান্তরিত হয়। এই পরিবর্তিত চর্বি সাধারণ রিসেপ্টরে না ঢুকে শ্বেত রক্তকণিকার স্ক্যাভেঞ্জার রিসেপ্টর (CD36) এর জন্য অত্যন্ত লোভনীয় উপাদানে পরিণত হয়।'
      ),
      l(
        'Step 3: Unregulated Scavenger Uptake & Macrophage Foam Cell Transformation: Circulating monocytes adhere to endothelial VCAM-1 and ICAM-1, extravasating into the intima and differentiating into macrophages. Scavenger receptors internalize oxLDL without sterol-mediated feedback down-regulation, becoming engorged with cytosolic cholesteryl ester droplets to form classic "foam cells" that secrete inflammatory cytokines (IL-1beta, TNF-alpha) and matrix metalloproteinases.',
        'ধাপ ৩: অনিয়ন্ত্রিত গ্রাস ও ফোম কোষে রূপান্তর: রক্ত থেকে শ্বেত রক্তকণিকা প্রাচীরে ঢুকে ম্যাক্রোফেজে পরিণত হয়। কোনো বাধা না থাকায় এরা অবিরাম এই বিষাক্ত চর্বি গিলতে থাকে এবং চর্বিতে ফুলে ফোম কোষে রূপ নেয়। এই ফোম কোষগুলো প্রদাহ সৃষ্টিকারী সাইটোকাইন ও এনজাইম তৈরি করে রক্তনালির স্থিতিস্থাপক পর্দা ভেঙে ফেলে এবং চর্বির প্লাক তৈরি করে।'
      ),
      l(
        'Step 4: Dietary Reversal via SREBP-2 Clearance & DASH Endothelial Restoration: Substituting saturated fat with Mediterranean extra virgin olive oil and nuts upregulates hepatic SREBP-2, accelerating LDLR-mediated plasma clearance of ApoB particles. Concurrently, DASH sodium restriction (1,500 mg/day) and potassium enrichment (4,700 mg/day) uncouple eNOS from oxidative stress, restoring vasodilatory nitric oxide and arresting atherogenic progression.',
        'ধাপ ৪: পুষ্টি থেরাপির মাধ্যমে নিরাময় ও প্রতিরোধ: ক্ষতিকর চর্বি বদলে ভূমধ্যসাগরীয় অলিভ অয়েল ও বাদাম খেলে লিভারের SREBP-2 রিসেপ্টর সক্রিয় হয় এবং রক্ত থেকে দ্রুত ক্ষতিকর ApoB কণা অপসারিত হয়। একই সাথে ড্যাশ ডায়েটের মাধ্যমে লবণ কমিয়ে পটাশিয়াম বাড়ালে নাইট্রিক অক্সাইড পুনরুদ্ধার হয় এবং রক্তনালি সুস্থ ও শিথিল থাকে।'
      ),
    ],
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
              'Atherosclerotic cardiovascular disease (ASCVD) represents the leading cause of premature mortality worldwide, encompassing ischemic heart disease, ischemic stroke, and peripheral arterial disease [1, 2]. Far from being a mere plumbing defect or passive accumulation of inert fat, atherosclerosis is fundamentally an active, chronic lipid-driven inflammatory disease of the arterial wall [1, 2]. The disease develops almost exclusively within large and medium-sized muscular and elastic arteries, preferentially targeting branch points and bifurcations where laminar blood flow is disrupted and endothelial shear stress is diminished [1, 2].',
              'এথেরোস্ক্লেরোটিক কার্ডিওভাসকুলার ডিজিজ (ASCVD) হলো বিশ্বজুড়ে অকাল মৃত্যুর প্রধান কারণ, যার মধ্যে করোনারি হৃদরোগ, ব্রেন স্ট্রোক এবং রক্তনালির ব্লকেজ অন্তর্ভুক্ত [১, ২]। রক্তনালিতে চর্বি জমা কোনো সাধারণ ময়লা জমার মতো ঘটনা নয়; এটি মূলত রক্তনালির দেয়ালের ভেতর কোলেস্টেরলবাহী কণা আটকে গিয়ে দীর্ঘস্থায়ী মারাত্মক প্রদাহের সৃষ্টি হওয়া [১, ২]। এই রোগটি প্রধানত মাঝারি ও বড় ধমনির সেইসব সংযোগস্থলে বেশি ঘটে যেখানে রক্তের স্বাভাবিক ঘূর্ণায়মান প্রবাহ ব্যাহত হয় এবং রক্তনালির প্রাচীরে ঘর্ষণজনিত সুরক্ষা কমে যায় [১, ২]।'
            ),
            l(
              'Under healthy conditions, the vascular endothelium forms a dynamic, non-thrombogenic semipermeable barrier between circulating blood and the underlying vascular tunicas [1, 4]. Endothelial cells continuously synthesize and release nitric oxide (NO), prostacyclin (PGI2), and endothelial-derived hyperpolarizing factor, which tonically dilate vascular smooth muscle, inhibit platelet adhesion, and suppress leukocyte extravasation [4]. When systemic cardiovascular risk factors—elevated circulating atherogenic lipoproteins, hypertension, smoking, or insulin resistance—persist, the endothelial monolayer becomes chronically activated, expressing cell adhesion molecules and losing its barrier integrity [1, 4].',
              'সুস্থ শরীরে রক্তনালির অন্তর্বর্তী একস্তরবিশিষ্ট কোষঝিল্লি (এন্ডোথেলিয়াম) রক্তের উপাদান এবং রক্তনালির ভেতরের পেশির মাঝে এক অপূর্ব প্রতিরক্ষামূলক ঢাল তৈরি করে রাখে [১, ৪]। এন্ডোথেলিয়াল কোষগুলো অবিরাম নাইট্রিক অক্সাইড গ্যাস নিঃসরণ করে রক্তনালিকে প্রসারিত ও শিথিল রাখে, রক্ত জমাট বাঁধতে বাধা দেয় এবং শ্বেত রক্তকণিকাকে প্রাচীরে ঢুকতে দেয় না [৪]। কিন্তু রক্তে অতিরিক্ত ক্ষতিকর চর্বি, উচ্চ রক্তচাপ বা ডায়াবেটিস থাকলে এই ঢাল ক্ষতিগ্রস্ত হয় এবং এর স্বাভাবিক সুরক্ষা হারিয়ে মারাত্মক প্রদাহপ্রবণ হয়ে পড়ে [১, ৪]।'
            ),
            l(
              'The initiation of atherosclerosis begins when circulating low-density lipoprotein (LDL) particles and remnant lipoproteins penetrate across the dysfunctional endothelial barrier into the subendothelial space (the tunica intima) [1, 2]. Transcytosis of LDL across the endothelial monolayer is mediated by specific vesicle-mediated transport pathways, including scavenger receptor class B type 1 (SR-B1) and activin receptor-like kinase 1 (ALK1) [2]. In the presence of hypercholesterolemia, the influx of LDL into the intima greatly exceeds the physiological capacity for lymphatic clearance, creating a concentrated subendothelial pool of atherogenic particles [1, 2].',
              'এথেরোস্ক্লেরোসিসের সূত্রপাত ঘটে যখন রক্তে ঘুরে বেড়ানো ক্ষতিকর এলডিএল (LDL) ও অন্যান্য চর্বি কণা এন্ডোথেলিয়ামের পর্দা ভেদ করে রক্তনালির প্রাচীরের ভেতরের স্তরে (টুনিকা ইন্টিমা) প্রবেশ করে [১, ২]। বিশেষ পরিবহন ব্যবস্থার মাধ্যমে এই কণাগুলো রক্ত থেকে প্রাচীরের ভেতরে ঢুকে পড়ে [২]। রক্তে ক্ষতিকর কোলেস্টেরলের মাত্রা যত বেশি থাকে, প্রাচীরের ভেতর এই চর্বির অনুপ্রবেশ তত দ্রুত ঘটে এবং তা জমে এক বিপজ্জনক পরিস্থিতির সৃষ্টি করে [১, ২]।'
            ),
            l(
              'Once localized within the intima, these trapped lipoproteins cannot escape; they undergo oxidative, enzymatic, and physical modifications, driving inflammatory macrophage infiltration and foam cell formation [1, 2]. Over decades, the accumulation of foam cells, apoptotic debris, and extracellular matrix builds a complex atherosclerotic plaque capped by a fibrous collagen sheath [1]. Plaque rupture or erosion triggers acute luminal thrombosis, culminating in myocardial infarction or catastrophic ischemic stroke [1, 2].',
              'রক্তনালির প্রাচীরের ভেতরে একবার চর্বি ঢুকে আটকে গেলে তা আর বের হতে পারে না; সেখানে তা জারিত হয়ে বিষাক্ত রূপ নেয় এবং শ্বেত রক্তকণিকাকে আক্রমণ করতে বাধ্য করে [১, ২]। বছরের পর বছর ধরে এই মৃত কোষ ও বিষাক্ত চর্বি জমে ধমনির ভেতর একটি শক্ত চর্বির প্লাক বা ব্লকেজ তৈরি করে [১]। কোনো এক সময় এই প্লাকের মুখ ফেটে গেলে সেখানে রক্ত জমাট বেঁধে তাৎক্ষণিকভাবে রক্তপ্রবাহ বন্ধ করে দেয়, যার ফলেই হার্ট অ্যাটাক বা ব্রেন স্ট্রোক সংঘটিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Response-to-Retention Model & ApoB Particles', '২. প্রতিক্রিয়া-সঞ্চয়ন মডেল ও এপোবি কণা'),
          paragraphs: [
            l(
              'The fundamental molecular paradigm underpinning modern vascular lipidology is the Response-to-Retention Model of atherogenesis, articulated by Williams, Tabas, and Boren [1, 2]. This model conclusively demonstrates that atherosclerosis cannot and does not initiate without the physical subendothelial retention of apolipoprotein B-100 (ApoB) containing lipoproteins [2]. Intimal retention is the obligatory, rate-limiting inciting event that triggers all subsequent inflammatory, cellular, and fibrotic cascades in the vessel wall [1, 2].',
              'আধুনিক কার্ডিওভাসকুলার বিজ্ঞানের সবচেয়ে সুদৃঢ় বৈজ্ঞানিক ভিত্তি হলো উইলিয়ামস, ট্যাবাস ও বোরেনের "প্রতিক্রিয়া-সঞ্চয়ন মডেল" (Response-to-Retention Model) [১, ২]। এই মডেলটি চূড়ান্তভাবে প্রমাণ করেছে যে রক্তনালির ভেতরের প্রাচীরে অ্যাপোলিপোপ্রোটিন বি-১০০ (ApoB) যুক্ত চর্বি কণা শারীরিকভাবে আটকে না গেলে এথেরোস্ক্লেরোসিস বা ধমনির ব্লকেজ তৈরি হওয়া কোনোভাবেই সম্ভব নয় [২]। রক্তনালিতে এই চর্বির আটকে যাওয়াই হলো হৃদরোগের সূচনা পর্বের মূল এবং একমাত্র চালিকাশক্তি [১, ২]।'
            ),
            l(
              'Apolipoprotein B-100 is a massive, amphipathic glycoprotein containing 4,536 amino acids that wraps around the surface of atherogenic lipoproteins [2]. Crucially, exactly one molecule of ApoB-100 is embedded on every single circulating atherogenic particle: Very-Low-Density Lipoprotein (VLDL), Intermediate-Density Lipoprotein (IDL), Low-Density Lipoprotein (LDL), and Lipoprotein(a) [Lp(a)] [2]. Because of this strict stoichiometric one-to-one ratio, measuring the mass concentration of circulating ApoB directly quantifies the absolute particle number of circulating atherogenic lipoproteins, unlike LDL-Cholesterol (LDL-C) which merely measures variable cholesterol cargo [2].',
              'অ্যাপোলিপোপ্রোটিন বি-১০০ হলো ৪,৫৩৬টি অ্যামাইনো অ্যাসিডের সমন্বয়ে গঠিত একটি বিশালাকার প্রোটিন যা চর্বি কণার উপরিভাগে মোড়কের মতো জড়িয়ে থাকে [২]। রক্তে থাকা প্রতিটি ক্ষতিকর কণার (VLDL, IDL, LDL, এবং Lp(a)) গায়ে ঠিক একটি করে ApoB-100 প্রোটিন অবস্থান করে [২]। এই কারণে রক্তে ApoB পরিমাপ করলে রক্তে ক্ষতিকর কণার মোট সংখ্যা একদম নির্ভুলভাবে জানা যায়, যা সাধারণ কোলেস্টেরল (LDL-C) পরীক্ষায় সম্ভব নয় কারণ কণার ভেতরের কোলেস্টেরলের পরিমাণ একেক মানুষের ক্ষেত্রে একেক রকম হতে পারে [২]।'
            ),
            l(
              'The biophysical mechanism of retention relies on electrostatic interactions between specific basic amino acid residues on ApoB-100 and negatively charged extracellular matrix components in the arterial intima [2]. Site-directed mutagenesis studies have localized the critical proteoglycan-binding site to a cluster of basic lysine and arginine residues located between amino acids 3359 and 3369 on ApoB-100 (Site B) [2]. The basic side chains of these residues form high-affinity electrostatic salt bridges with repeating negatively charged sulfate and carboxylate groups on glycosaminoglycan (GAG) side chains of intimal proteoglycans, predominantly biglycan and versican [2].',
              'রক্তনালির প্রাচীরে এই চর্বি কণা আটকে থাকার মূল আণবিক রহস্য হলো বিপরীত বৈদ্যুতিক চার্জের আকর্ষণ [২]। ApoB-100 প্রোটিনের গায়ে ৩৩৫৯ থেকে ৩৩৬৯ নম্বর অংশে ধনাত্মক চার্জযুক্ত লাইসিন ও আর্জিনিন অ্যামাইনো অ্যাসিডের এক বিশেষ গুচ্ছ থাকে [২]। রক্তনালির প্রাচীরের প্রোটিওগ্লাইকান তন্তুর ঋণাত্মক চার্জযুক্ত সালফেটের সাথে এই ধনাত্মক অংশটি এক অত্যন্ত শক্তিশালী আয়নিক বন্ধনে আটকে যায়, ফলে চর্বি কণাগুলো রক্তস্রোতে আর ফিরে যেতে পারে না [২]।'
            ),
            l(
              'Trapped within this proteoglycan meshwork, lipoproteins become immobilized, prolonging their residence time in the intima from hours to months [1, 2]. Sequestered away from plasma antioxidants, immobilized ApoB particles undergo enzymatic cleavage by secretory sphingomyelinase and secretory phospholipase A2, causing particle aggregation [2]. Simultaneously, local reactive oxygen species generated by endothelial NADPH oxidases and 12/15-lipoxygenase oxidize polyunsaturated fatty acids in the particle phospholipids, generating oxidized LDL (oxLDL) [1, 2]. These oxidized epitopes ligate pattern-recognition receptors on macrophages, initiating unregulated foam cell transformation [1, 2].',
              'রক্তনালির প্রাচীরে এই তন্তুর জালে বন্দি হয়ে চর্বি কণাগুলোর অবস্থান কয়েক ঘণ্টা থেকে কয়েক মাস পর্যন্ত দীর্ঘায়িত হয় [১, ২]। রক্তের অ্যান্টিঅক্সিডেন্ট থেকে বিচ্ছিন্ন হয়ে এই কণাগুলো রক্তনালির স্থানীয় এনজাইম ও বিষাক্ত মুক্ত মূলক দ্বারা দ্রুত জারিত হয়ে মারাত্মক জারিত চর্বিতে (oxLDL) রূপান্তরিত হয় [১, ২]। এই জারিত চর্বিই পরবর্তীতে শ্বেত রক্তকণিকাকে ফোম কোষে পরিণত করে রক্তনালির প্লাক তৈরি ত্বরান্বিত করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Hepatic LDL Clearance: SFA Suppression of LDLR', '৩. লিভারের এলডিএল অপসারণ ও সম্পৃক্ত চর্বির প্রভাব'),
          paragraphs: [
            l(
              'The concentration of circulating ApoB particles is primarily governed by hepatic LDL receptor (LDLR) clearance kinetics, a homeostatic pathway elucidated by Nobel laureates Michael Brown and Joseph Goldstein [2, 3]. In healthy physiology, the liver clears approximately 70% to 80% of all circulating LDL particles via receptor-mediated endocytosis [3]. The low-density lipoprotein receptor (LDLR) is a cell-surface glycoprotein that recognizes and binds Apolipoprotein B-100 on LDL and Apolipoprotein E on remnant particles with nanomolar affinity [3].',
              'রক্তে ক্ষতিকর কণার পরিমাণ কত থাকবে তা মূলত নির্ভর করে লিভার বা যকৃতের এলডিএল রিসেপ্টর (LDLR) কত দ্রুত রক্ত পরিষ্কার করছে তার ওপর, যা নোবেলজয়ী বিজ্ঞানী মাইকেল ব্রাউন ও জোসেফ গোল্ডস্টেইন আবিষ্কার করেন [২, ৩]। সুস্থ শরীরে রক্তে থাকা মোট ক্ষতিকর এলডিএল কণার ৭০ থেকে ৮০ শতাংশই লিভার নিজের রিসেপ্টরের মাধ্যমে গিলে ফেলে ধ্বংস করে দেয় [৩]। এই রিসেপ্টরটি রক্তে ঘুরে বেড়ানো কণার গায়ে থাকা ApoB প্রোটিনকে শক্তভাবে ধরে ফেলে কোষের ভেতরে টেনে নেয় [৩]।'
            ),
            l(
              'Hepatic LDLR gene expression is transcriptionally regulated by the intracellular sterol sensor Sterol Regulatory Element-Binding Protein-2 (SREBP-2) [3]. Under conditions of low hepatocyte endoplasmic reticulum (ER) membrane cholesterol, the escort protein SCAP (SREBP Cleavage-Activating Protein) escorts SREBP-2 from the ER to the Golgi apparatus [3]. In the Golgi, site-1 and site-2 proteases cleave SREBP-2, releasing its active basic helix-loop-helix transcription factor domain, which translocates to the nucleus to robustly transcribe the *LDLR* gene, increasing surface receptor density and clearing LDL from circulation [3].',
              'লিভারের এই রিসেপ্টর তৈরির প্রক্রিয়াটি কোষের ভেতরের SREBP-2 নামক মাস্টার সুইচ প্রোটিনের মাধ্যমে নিয়ন্ত্রিত হয় [৩]। যখন লিভার কোষের ভেতরে কোলেস্টেরলের ঘাটতি তৈরি হয়, তখন SREBP-2 সক্রিয় হয়ে নিউক্লিয়াসে প্রবেশ করে এবং প্রচুর নতুন এলডিএল রিসেপ্টর তৈরি করে [৩]। ফলে লিভারের উপরিভাগে রিসেপ্টরের সংখ্যা বহুগুণ বেড়ে যায় এবং রক্ত থেকে দ্রুত সমস্ত ক্ষতিকর কোলেস্টেরল শুষে নিয়ে রক্ত পুরোপুরি পরিষ্কার করে ফেলে [৩]।'
            ),
            l(
              'Dietary fatty acids exert profound regulatory control over this hepatic clearance apparatus [3]. Saturated fatty acids containing 12 to 16 carbon atoms—specifically lauric acid (C12:0), myristic acid (C14:0), and palmitic acid (C16:0), abundant in butter, palm oil, and fatty meats—incorporate into hepatocyte ER membrane phospholipids, dramatically decreasing membrane fluidity and altering sterol packing [3]. This biophysical membrane alteration suppresses SCAP/SREBP-2 Golgi trafficking, shutting down *LDLR* transcription [3]. Concurrently, dietary SFAs upregulate Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9), a circulating serine protease that binds the EGF-A domain of cell-surface LDLR, redirecting the receptor away from endosomal recycling and into lysosomal degradation [2, 3].',
              'খাদ্যের চর্বির ধরণ এই লিভারের পরিচ্ছন্নতা ব্যবস্থার ওপর এক মারাত্মক প্রভাব ফেলে [৩]। মাখন, ঘি ও লাল মাংসে থাকা সম্পৃক্ত চর্বি (যেমন প্যালমিটিক ও মিরিস্টিক অ্যাসিড) লিভারের কোষঝিল্লিকে অস্বাভাবিক শক্ত ও অনমনীয় করে ফেলে [৩]। এর ফলে SREBP-2 সক্রিয় হতে পারে না এবং লিভারের রিসেপ্টর তৈরি প্রায় বন্ধ হয়ে যায় [৩]। একই সাথে এটি রক্তে PCSK9 নামক ক্ষতিকর এনজাইম বাড়িয়ে দেয় যা থাকা রিসেপ্টরগুলোকেও লাইসোজোমে ধ্বংস করে ফেলে [২, ৩]।'
            ),
            l(
              'Because LDLR synthesis is suppressed and existing receptors are degraded, the plasma half-life of circulating ApoB particles doubles from 2.5 days to over 4.5 days [2, 3]. Circulating LDL particles linger in the bloodstream, undergoing prolonged exposure to arterial bifurcation shear stress and dramatically accelerating subendothelial entry and retention [2]. Conversely, replacing dietary SFAs with polyunsaturated (PUFA: linoleic, alpha-linolenic) and monounsaturated (MUFA: oleic) fatty acids increases hepatocyte membrane fluidity, restoring SREBP-2 activity, upregulating LDLR, and rapidly reducing circulating ApoB particles [2, 3].',
              'লিভারের রিসেপ্টর কমে যাওয়ায় রক্ত থেকে চর্বি কণা অপসারণের সময় আড়াই দিন থেকে বেড়ে সাড়ে চার দিনে দাঁড়ায় [২, ৩]। কণাগুলো দীর্ঘদিন রক্তে ঘুরে বেড়ানোর কারণে রক্তনালির প্রাচীরে ঢুকে আটকে যাওয়ার ঝুঁকি দ্বিগুণ বেড়ে যায় [২]। কিন্তু ক্ষতিকর চর্বির বদলে অলিভ অয়েল ও বাদামের ভালো চর্বি (PUFA ও MUFA) খেলে লিভারের কোষঝিল্লি নমনীয় হয়, রিসেপ্টর তৈরি দ্বিগুণ বাড়ে এবং রক্ত দ্রুত চর্বিমুক্ত হয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Endothelial Nitric Oxide & DASH Electrolyte Balance', '৪. নাইট্রিক অক্সাইড ও ড্যাশ ইলেক্ট্রোলাইট ভারসাম্য'),
          paragraphs: [
            l(
              'Hypertension constitutes the second co-equal hemodynamic pillar driving cardiovascular morbidity, directly promoting atherogenesis by increasing endothelial shear disruption and promoting subendothelial lipoprotein retention [1, 4]. The primary endogenous regulator of vascular tone and arterial blood pressure is Endothelial Nitric Oxide Synthase (eNOS), a homodimeric enzyme constitutively expressed in vascular endothelial cells [4]. In the presence of essential cofactors—most critically tetrahydrobiopterin (BH4), calmodulin, and NADPH—eNOS catalyzes the five-electron oxidation of L-arginine to L-citrulline and nitric oxide (NO) [4].',
              'উচ্চ রক্তচাপ হলো হৃদরোগের অন্যতম প্রধান প্রাণঘাতী কারণ, যা রক্তনালির প্রাচীরে অতিরিক্ত চাপ সৃষ্টি করে ক্ষত তৈরি করে এবং চর্বি ঢোকার পথ সুগম করে [১, ৪]। রক্তচাপ স্বাভাবিক রাখার সবচেয়ে গুরুত্বপূর্ণ প্রাকৃতিক উপাদান হলো নাইট্রিক অক্সাইড (NO), যা রক্তনালির ভেতরের কোষের eNOS এনজাইমের মাধ্যমে তৈরি হয় [৪]। প্রয়োজনীয় ভিটামিন উপাদান যেমন টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) এর উপস্থিতিতে এই এনজাইমটি অ্যামাইনো অ্যাসিড আর্জিনিনকে ভেঙে নাইট্রিক অক্সাইড গ্যাস উৎপন্ন করে [৪]।'
            ),
            l(
              'Synthesized NO gas diffuses abluminally across the internal elastic lamina into adjacent vascular smooth muscle cells (VSMCs) [4]. Inside VSMCs, NO binds to the prosthetic heme moiety of soluble Guanylyl Cyclase (sGC), stimulating its catalytic activity >200-fold to convert GTP into cyclic Guanosine Monophosphate (cGMP) [4]. Cyclic GMP activates Protein Kinase G (PKG), which phosphorylates phospholamban and downregulates intracellular calcium, stimulating myosin light chain dephosphorylation and inducing profound vascular smooth muscle relaxation and systemic arterial vasodilation [4].',
              'উৎপন্ন নাইট্রিক অক্সাইড গ্যাস নিমেষেই রক্তনালির মসৃণ পেশিকোষে প্রবেশ করে [৪]। সেখানে এটি sGC এনজাইমকে ২০০ গুণেরও বেশি সক্রিয় করে সিজিএমপি (cGMP) অণু তৈরি করে [৪]। এই সিজিএমপি পেশিকোষের ভেতরে ক্যালসিয়ামের মাত্রা কমিয়ে পেশিগুলোকে শিথিল ও প্রসারিত করে দেয়; এর ফলে রক্তনালিগুলো চওড়া হয়ে স্বাভাবিকভাবে রক্ত সঞ্চালন সচল রাখে এবং রক্তচাপ পুরোপুরি নিয়ন্ত্রণে থাকে [৪]।'
            ),
            l(
              'Excess dietary sodium chloride exerts devastating molecular toxicity on this vasodilatory axis [4, 5]. High systemic sodium concentrations stimulate endothelial epithelial sodium channels (ENaC), driving intracellular sodium overload that activates NADPH oxidase (NOX2/NOX4) to generate massive quantities of superoxide radicals (O2-) [4, 5]. Superoxide rapidly oxidizes the delicate eNOS cofactor BH4 into catalytically inactive dihydrobiopterin (BH2) [4]. Lacking BH4, the eNOS homodimer uncouples: instead of transferring electrons to L-arginine to synthesize NO, uncoupled eNOS diverts electrons directly to molecular oxygen, becoming a dysfunctional generator of toxic superoxide radicals [4]. Nitric oxide synthesis collapses, triggering arterial stiffening and systemic hypertension [4, 5].',
              'খাবারে অতিরিক্ত লবণ খেলে এই চমৎকার প্রাকৃতিক নিয়ন্ত্রণ ব্যবস্থা পুরোপুরি ধ্বংস হয়ে যায় [৪, ৫]। অতিরিক্ত সোডিয়াম রক্তনালির কোষে ক্ষতিকর ফ্রি-র‌্যাডিক্যাল তৈরি করে নাইট্রিক অক্সাইড তৈরির প্রধান সহায়ক উপাদান BH4 কে পুড়িয়ে নষ্ট করে ফেলে [৪, ৫]। এর ফলে eNOS এনজাইমটি বিকল হয়ে যায়; নাইট্রিক অক্সাইড তৈরির বদলে এটি উল্টো মারাত্মক বিষাক্ত মুক্ত মূলক তৈরি করতে থাকে [৪]। ফলে রক্তনালিগুলো সংকুচিত ও শক্ত হয়ে যায় এবং রক্তচাপ ভয়াবহভাবে বেড়ে যায় [৪, ৫]।'
            ),
            l(
              'The landmark Dietary Approaches to Stop Hypertension (DASH) and DASH-Sodium clinical trials demonstrated that dietary electrolyte modulation can fully resurrect endothelial function [5]. The DASH diet combines sodium restriction (1,500 mg/day) with massive potassium enrichment (4,700 mg/day) and magnesium [5]. Extracellular potassium directly stimulates vascular smooth muscle Na+/K+-ATPase and opens inward rectifier potassium channels (Kir2.1), hyperpolarizing the smooth muscle membrane [4, 5]. Membrane hyperpolarization closes voltage-gated L-type calcium channels, lowering cytosolic calcium, while simultaneously suppressing distal renal sodium reabsorption [4, 5]. In the DASH-Sodium trial, this nutritional synergy lowered systolic blood pressure by an astonishing 11.5 mmHg in hypertensive individuals, an effect size surpassing standard single-drug pharmacotherapy [5].',
              'বিশ্বখ্যাত ড্যাশ (DASH) ট্রায়ালে প্রমাণিত হয়েছে যে খাবারের লবণের ভারসাম্য ঠিক করে এই রক্তচাপ সম্পূর্ণ নিয়ন্ত্রণ করা সম্ভব [৫]। ড্যাশ ডায়েটে লবণ কমিয়ে দৈনিক ১৫০০ মিলিগ্রাম করা হয় এবং শাকসবজি ও ফলমূল থেকে পটাশিয়ামের পরিমাণ বাড়িয়ে ৪৭০০ মিলিগ্রাম করা হয় [৫]। এই পটাশিয়াম রক্তনালির পেশিকোষকে শিথিল করে এবং ক্যালসিয়াম প্রবেশ বন্ধ করে রক্তনালিকে ব্যাপকভাবে প্রসারিত করে [৪, ৫]। ড্যাশ ট্রায়ালে দেখা গেছে এই পথ্য উচ্চ রক্তচাপের রোগীদের সিস্টোলিক রক্তচাপ ১১.৫ মিলিমিটার পর্যন্ত কমিয়ে দেয়, যা যেকোনো একটি একক ওষুধের কার্যকারিতাকে ছাড়িয়ে যায় [৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. The PREDIMED Trial & Mediterranean Dietetics', '৫. প্রিডিমেড ট্রায়াল ও ভূমধ্যসাগরীয় খাদ্যাভ্যাস'),
          paragraphs: [
            l(
              'The primary prevention of cardiovascular disease through whole-dietary patterns achieved definitive evidence-based validation in the landmark Prevencion con Dieta Mediterranea (PREDIMED) trial, published in *The New England Journal of Medicine* [6]. Enrolling 7,447 high-cardiovascular-risk participants in Spain over 4.8 years of follow-up, PREDIMED compared a low-fat control diet against two distinct Mediterranean diet interventions: a Mediterranean diet supplemented with Extra Virgin Olive Oil (EVOO; 1 liter/week per household) and a Mediterranean diet supplemented with mixed nuts (30 g/day: 15 g walnuts, 7.5 g almonds, 7.5 g hazelnuts) [6].',
              'হৃদরোগ প্রতিরোধে সম্পূর্ণ খাদ্যাভ্যাসের বৈপ্লবিক ভূমিকা বিশ্বজুড়ে প্রমাণিত হয়েছে নিউ ইংল্যান্ড জার্নাল অব মেডিসিনে প্রকাশিত ঐতিহাসিক প্রিডিমেড (PREDIMED) ট্রায়ালে [৬]। স্পেনে ৭,৪৪৭ জন উচ্চ হৃদরোগ ঝুঁকিপূর্ণ মানুষের ওপর প্রায় ৫ বছর ধরে এই গবেষণা চালানো হয় [৬]। এতে প্রচলিত কম চর্বির খাবারের সাথে দুটি ভূমধ্যসাগরীয় পথ্যের তুলনা করা হয়: একটিতে প্রতিদিন প্রচুর পরিমাণে খাঁটি এক্সট্রা ভার্জিন অলিভ অয়েল দেওয়া হয় এবং অন্যটিতে দৈনিক ৩০ গ্রাম মিশ্র বাদাম (আখরোট ও কাঠবাদাম) দেওয়া হয় [৬]।'
            ),
            l(
              'The results transformed modern nutritional cardiology: participants randomized to the Mediterranean diet supplemented with EVOO or nuts experienced an extraordinary 30% relative risk reduction in the primary composite cardiovascular endpoint (myocardial infarction, stroke, or cardiovascular mortality) compared to the control group [6]. Stroke reduction was particularly pronounced, decreasing by 39% in the nut group and 33% in the EVOO group [6]. Crucially, this robust clinical protection was achieved without calorie restriction or mandated weight loss, proving that qualitative dietary lipid composition and bioactive polyphenols modify vascular biology independently of gross energy balance [6].',
              'এই গবেষণার ফলাফল পুরো চিকিৎসাবিশ্বকে নাড়া দেয়: যারা অলিভ অয়েল বা বাদাম সমৃদ্ধ ভূমধ্যসাগরীয় খাবার খেয়েছিলেন, তাদের মধ্যে হার্ট অ্যাটাক, ব্রেন স্ট্রোক ও হৃদরোগে মৃত্যুর সামগ্রিক ঝুঁকি বিস্ময়করভাবে ৩০ শতাংশ কমে যায় [৬]। বিশেষ করে স্ট্রোকের ঝুঁকি বাদাম খাওয়া গ্রুপে ৩৯% এবং অলিভ অয়েল গ্রুপে ৩৩% কমে যায় [৬]। সবচেয়ে চমকপ্রদ ব্যাপার হলো, এই ফল কোনো ক্যালোরি নিয়ন্ত্রণ বা ওজন কমানো ছাড়াই অর্জিত হয়েছে; অর্থাৎ ভালো চর্বির গুণগত মান সরাসরি রক্তনালির সুস্থতা নিশ্চিত করে [৬]।'
            ),
            l(
              'The cardioprotective mechanisms of the Mediterranean dietary pattern operate across multiple molecular axes [5, 6]. Extra virgin olive oil is exceptionally rich in monounsaturated oleic acid (18:1 n-9) and bioactive phenolic secoiridoids, predominantly hydroxytyrosol and oleocanthal [6]. These phenolic compounds intercalate into the surface monolayer of circulating lipoproteins, potently neutralizing peroxyl radicals and preventing LDL oxidative modification into oxLDL [6]. Concurrently, olive oil polyphenols enhance High-Density Lipoprotein (HDL) quality, upregulating Paraoxonase-1 (PON-1) activity and stimulating ATP-Binding Cassette Transporter A1 (ABCA1) macrophage reverse cholesterol efflux [6].',
              'ভূমধ্যসাগরীয় খাবারের এই চমৎকার সুরক্ষার পেছনে বহুবিধ আণবিক কারণ রয়েছে [৫, ৬]। এক্সট্রা ভার্জিন অলিভ অয়েল হলো স্বাস্থ্যকর ওলিক অ্যাসিড এবং হাইড্রক্সিটাইরোসলের মতো শক্তিশালী পলিফেনল অ্যান্টিঅক্সিডেন্টে ভরপুর [৬]। এই উপাদানগুলো রক্তে থাকা চর্বি কণাগুলোকে জারিত হওয়া থেকে শতভাগ রক্ষা করে [৬]। একই সাথে এটি ভালো কোলেস্টেরল বা এইচডিএলের কার্যক্ষমতা বাড়িয়ে ধমনির প্রাচীর থেকে অতিরিক্ত ক্ষতিকর চর্বি তুলে নিয়ে লিভারে ফেরত পাঠাতে সাহায্য করে [৬]।'
            ),
            l(
              'Furthermore, clinical lipidomic and inflammatory profiling in PREDIMED sub-studies revealed marked down-regulation of systemic inflammatory biomarkers [6]. Mediterranean diet adherence significantly lowered high-sensitivity C-Reactive Protein (hs-CRP), Interleukin-6, and vascular cell adhesion molecule-1 (VCAM-1) [6]. Walnuts supplied abundant alpha-linolenic acid (ALA; 18:3 n-3), which is enzymatically elongated into anti-inflammatory resolvins and protectins that promote the active biochemical resolution of vascular plaque inflammation [6]. Today, the Mediterranean dietary architecture stands as the Class I, Level A standard in international clinical cardiology guidelines for ASCVD prevention [1, 6].',
              'তাছাড়া এই গবেষণায় দেখা গেছে যে অলিভ অয়েল ও বাদাম খেলে রক্তে প্রদাহ সৃষ্টিকারী রাসায়নিক (hs-CRP, IL-6) নাটকীয়ভাবে কমে যায় [৬]। বাদামে থাকা ওমেগা-৩ ফ্যাটি অ্যাসিড রক্তনালির ভেতর প্রদাহ শান্ত করার বিশেষ উপাদান তৈরি করে যা ধমনির প্লাককে শক্ত ও নিরাপদ রাখে যাতে তা সহজে ফেটে না যায় [৬]। এই কারণেই বর্তমান বিশ্বে সমস্ত আন্তর্জাতিক হৃদরোগ চিকিৎসা নির্দেশিকায় ভূমধ্যসাগরীয় খাদ্যাভ্যাসকে হৃদরোগ প্রতিরোধের এক নম্বর পথ্য হিসেবে স্বীকৃতি দেওয়া হয়েছে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'Atherosclerosis is an active, chronic lipid-driven inflammatory disease initiated by the subendothelial retention of apolipoprotein B-100 containing lipoproteins (VLDL, IDL, LDL, Lp(a)) within the arterial intima [1, 2]. Positively charged basic residues on ApoB form electrostatic salt bridges with negatively charged sulfate groups on intimal proteoglycans (biglycan, versican), physically trapping particles where they undergo oxidative modification into oxLDL [1, 2].',
              'এথেরোস্ক্লেরোসিস হলো রক্তনালির একটি দীর্ঘস্থায়ী চর্বিজনিত প্রদাহ, যা রক্তনালির ভেতরের প্রাচীরে ApoB-100 যুক্ত কণা আটকে যাওয়ার মাধ্যমে শুরু হয় [১, ২]। ApoB প্রোটিনের ধনাত্মক চার্জ প্রাচীরের প্রোটিওগ্লাইকানের ঋণাত্মক চার্জের সাথে শক্তিশালী বন্ধন তৈরি করে কণাগুলোকে আটকে ফেলে এবং সেখানে এরা জারিত হয়ে ক্ষতিকর রূপ ধারণ করে [১, ২]।'
            ),
            l(
              'Dietary saturated fatty acids (palmitic, myristic, lauric) incorporate into hepatocyte ER membranes, decreasing membrane fluidity, suppressing SCAP/SREBP-2 Golgi trafficking, and downregulating hepatic LDL receptor (LDLR) transcription [2, 3]. Concurrently, SFAs upregulate PCSK9, accelerating LDLR lysosomal degradation and doubling circulating ApoB particle residence time [2, 3]. Replacing SFAs with PUFAs and MUFAs restores LDLR density and rapid plasma clearance [3].',
              'মাখন ও লাল মাংসে থাকা ক্ষতিকর সম্পৃক্ত চর্বি লিভারের কোষঝিল্লিকে শক্ত করে রিসেপ্টর তৈরির মাস্টার সুইচ SREBP-2 বন্ধ করে দেয় এবং PCSK9 বাড়িয়ে থাকা রিসেপ্টর ধ্বংস করে [২, ৩]। এর ফলে রক্ত থেকে ক্ষতিকর কোলেস্টেরল পরিষ্কারের গতি অর্ধেকে নেমে আসে [২, ৩]। সম্পৃক্ত চর্বি বদলে বাদাম ও অলিভ অয়েল খেলে রিসেপ্টর পুনরায় তৈরি হয় এবং রক্ত দ্রুত পরিষ্কার হয় [৩]।'
            ),
            l(
              'Excess dietary sodium chloride stimulates endothelial ENaC and activates NADPH oxidases, generating superoxide radicals that oxidize tetrahydrobiopterin (BH4) to BH2 [4, 5]. Lacking BH4, endothelial nitric oxide synthase (eNOS) uncouples, producing superoxide instead of nitric oxide, causing endothelial dysfunction and hypertension [4, 5]. Dietary potassium directly hyperpolarizes vascular smooth muscle via Na+/K+-ATPase and Kir2.1, closing L-type calcium channels and restoring vasodilation [4, 5].',
              'অতিরিক্ত লবণ রক্তনালিতে বিষাক্ত মুক্ত মূলক তৈরি করে নাইট্রিক অক্সাইড তৈরির প্রধান সহায়ক উপাদান BH4 ধ্বংস করে দেয় [৪, ৫]। এর ফলে eNOS এনজাইমটি বিকল হয়ে রক্তনালিকে শক্ত করে রক্তচাপ মারাত্মক বাড়িয়ে দেয় [৪, ৫]। অন্যদিকে শাকসবজি ও ফলের পটাশিয়াম রক্তনালির পেশিকে শিথিল করে এবং রক্তনালিকে প্রসারিত করে রক্তচাপ কমায় [৪, ৫]।'
            ),
            l(
              'The landmark PREDIMED trial conclusively proves that a Mediterranean dietary pattern supplemented with extra virgin olive oil or mixed nuts achieves a 30% relative risk reduction in major adverse cardiovascular events (myocardial infarction, stroke, cardiovascular death) independently of weight loss [6]. EVOO phenolic secoiridoids shield LDL from oxidation, enhance HDL reverse cholesterol transport, and suppress endothelial adhesion molecules, establishing whole-food dietary remodeling as a primary disease-modifying therapy in preventive cardiology [1, 6].',
              'ঐতিহাসিক প্রিডিমেড ট্রায়ালে প্রমাণিত হয়েছে যে এক্সট্রা ভার্জিন অলিভ অয়েল বা বাদাম সমৃদ্ধ ভূমধ্যসাগরীয় খাবার হার্ট অ্যাটাক ও স্ট্রোকের ঝুঁকি ৩০ শতাংশ কমিয়ে দেয় [৬]। অলিভ অয়েলের পলিফেনল রক্তে চর্বিকে জারিত হওয়া থেকে বাঁচায় এবং ভালো কোলেস্টেরলের কার্যক্ষমতা বাড়ায়; যা প্রমাণ করে যে সঠিক খাদ্যাভ্যাস হৃদরোগের চিকিৎসায় ওষুধের মতোই পরম কার্যকরী [১, ৬]।'
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
          heading: l('1. Hemodynamic Shear Stress & Endothelial Mechanotransduction', '১. রক্তপ্রবাহের ঘর্ষণ চাপ ও রক্তনালির যান্ত্রিক সংকেত রূপান্তর'),
          paragraphs: [
            l(
              'The focal localization of atherosclerotic lesions within the arterial tree is governed by local hemodynamic shear stress and endothelial mechanotransduction [1, 2]. Laminar pulsatile shear stress (>15 dynes/cm2), characteristic of straight, unbranched arterial segments, maintains endothelial cells in a quiescent, atheroprotective phenotype [1]. Laminar shear aligns endothelial cells in the direction of blood flow and activates mechanosensory complexes—comprising platelet endothelial cell adhesion molecule-1 (PECAM-1), vascular endothelial cadherin (VE-cadherin), and vascular endothelial growth factor receptor-2 (VEGFR2) [1, 4].',
              'ধমনির ঠিক কোন স্থানে ব্লক তৈরি হবে তা নির্ধারিত হয় রক্তের ঘূর্ণায়মান প্রবাহের ঘর্ষণ চাপ (Shear Stress) এবং কোষের যান্ত্রিক সংকেত রূপান্তরের মাধ্যমে [১, ২]। সোজা ধমনিতে রক্তের স্বাভাবিক প্রবাহ রক্তনালির অন্তর্বর্তী কোষগুলোকে শান্ত, সুস্থ এবং হৃদরোগ প্রতিরোধী অবস্থায় বজায় রাখে [১]। এই স্বাভাবিক রক্তপ্রবাহ কোষের বিশেষ সেন্সরগুলোকে সক্রিয় করে রক্তনালিকে সুরক্ষিত রাখে [১, ৪]।'
            ),
            l(
              'Mechanosensory signaling activates the master shear-responsive transcription factors Kruppel-Like Factor 2 (KLF2) and Kruppel-Like Factor 4 (KLF4) [1, 4]. KLF2 and KLF4 robustly transcribe atheroprotective genes, including endothelial nitric oxide synthase (*NOS3*), thrombomodulin (*THBD*), and extracellular superoxide dismutase (*SOD3*), while simultaneously repressing pro-inflammatory and pro-thrombotic genes by inhibiting Nuclear Factor Kappa-B (NF-kB) [4]. Consequently, straight arterial conduits exhibit continuous nitric oxide bioavailability, low permeability, and an absence of leukocyte adhesion [1, 4].',
              'এই স্বাভাবিক রক্তপ্রবাহ কোষের ভেতরে KLF2 এবং KLF4 নামের দুটি মাস্টার জিনকে সচল রাখে [১, ৪]। এরা রক্তনালিতে অবিরাম নাইট্রিক অক্সাইড তৈরি করে এবং ক্ষতিকর প্রদাহ সৃষ্টিকারী জিনগুলোকে পুরোপুরি ঘুম পাড়িয়ে রাখে [৪]। ফলে সুস্থ ধমনির দেয়াল দিয়ে সহজে কোনো চর্বি বা শ্বেত রক্তকণিকা ভেতরে ঢুকতে পারে না [১, ৪]।'
            ),
            l(
              'In sharp contrast, at arterial branch points, bifurcations (such as the carotid bulb and coronary branch ostia), and inner curvatures, the geometry of the vessel produces disturbed, oscillatory low shear stress (<4 dynes/cm2) with flow reversal [1, 2]. Disturbed flow fails to induce KLF2 and KLF4, allowing constitutive activation of the p65/p50 heterodimer of NF-kB [1]. Activated NF-kB translocates to the nucleus, driving intense transcription of vascular cell adhesion molecule-1 (VCAM-1), intercellular adhesion molecule-1 (ICAM-1), and E-selectin on the luminal endothelial surface [1].',
              'বিপরীতে ধমনির বাঁক বা শাখাগুলোতে রক্তের প্রবাহ বাধাগ্রস্ত হয়ে এলোমেলো ঘূর্ণির সৃষ্টি করে [১, ২]। এই অশান্ত রক্তপ্রবাহের কারণে সুরক্ষাকারী KLF2 প্রোটিন অকেজো হয়ে যায় এবং প্রদাহ সৃষ্টিকারী NF-kB প্রোটিন সক্রিয় হয়ে ওঠে [১]। এর ফলে রক্তনালির উপরিভাগে আঠালো রিসেপ্টর তৈরি হয় যা রক্তে ভেসে বেড়ানো শ্বেত রক্তকণিকাকে চুম্বকের মতো প্রাচীরের গায়ে আটকে ফেলে [১]।'
            ),
            l(
              'Simultaneously, disturbed shear stress compromises endothelial junctional integrity by disorganizing tight junctions (claudin-5, occludin) and adherens junctions (VE-cadherin), accelerating macromolecular trans-endothelial flux [1, 2]. Circulating ApoB particles exploit these leaky junctional microdomains, readily penetrating into the subendothelial space at sites of disturbed flow, precisely mapping the geographical distribution of human coronary and carotid atherosclerosis [1, 2].',
              'একই সাথে এলোমেলো রক্তপ্রবাহ রক্তনালির কোষগুলোর মধ্যবর্তী বন্ধনগুলোকে আলগা ও ফুটো করে ফেলে [১, ২]। রক্তে ঘুরে বেড়ানো ক্ষতিকর ApoB কণাগুলো ঠিক এই দুর্বল ও ফুটো হয়ে যাওয়া অংশ দিয়েই সহজে রক্তনালির প্রাচীরে ঢুকে আটকে যায়; এই কারণেই মানুষের হার্টের ধমনির বাঁকগুলোতে সবচেয়ে বেশি ব্লক তৈরি হতে দেখা যায় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Scavenger Receptors CD36 / SR-A1 & Unregulated Foam Cell Biology', '২. স্ক্যাভেঞ্জার রিসেপ্টর ও অনিয়ন্ত্রিত ফোম সেল জীববিজ্ঞান'),
          paragraphs: [
            l(
              'The transformation of resident and recruited intimal macrophages into lipid-engorged foam cells represents the histological hallmark of the early atherosclerotic fatty streak [1, 2]. In healthy physiology, cell-surface LDL receptors operate under stringent negative feedback control: when intracellular cholesterol rises, SREBP-2 processing is aborted, downregulating LDLR and preventing toxic intracellular sterol overload [3]. However, macrophage foam cell formation bypasses this physiological safety brake entirely by utilizing Scavenger Receptors [1, 2].',
              'রক্তনালির প্রাচীরে শ্বেত রক্তকণিকা চর্বি খেয়ে ফুলে ফোম কোষে রূপান্তরিত হওয়াই হলো এথেরোস্ক্লেরোসিসের মূল শারীরিক ভিত্তি [১, ২]। সুস্থ কোষে ভেতরে বেশি চর্বি ঢুকলে সাধারণ রিসেপ্টরগুলো নিজে থেকেই বন্ধ হয়ে যায় যাতে কোষে বিষক্রিয়া না ঘটে [৩]। কিন্তু রক্তনালির প্রাচীরের ম্যাক্রোফেজগুলো এই প্রাকৃতিক নিয়ন্ত্রণকে সম্পূর্ণ উপেক্ষা করে স্ক্যাভেঞ্জার রিসেপ্টর (Scavenger Receptors) ব্যবহারের মাধ্যমে সর্বনাশা চর্বি গ্রহণ শুরু করে [১, ২]।'
            ),
            l(
              'The primary scavenger receptors mediating atherogenic lipid uptake are Scavenger Receptor Class A1 (SR-A1) and Scavenger Receptor Class B Type 2 (CD36) [1, 2]. Unlike the classical LDLR, scavenger receptors do not recognize native, unmodified LDL; instead, they bind specifically to oxidized LDL (oxLDL), acetylated LDL, and enzymatically modified lipoproteins [1, 2]. CD36 is an 88-kDa transmembrane glycoprotein that recognizes oxidized phospholipid moieties on the surface of oxLDL particles, mediating rapid receptor-mediated endocytosis [1, 2].',
              'এই চর্বি গেলার প্রধান দুটি রিসেপ্টর হলো SR-A1 এবং CD36 [১, ২]। সাধারণ রিসেপ্টর যেখানে কেবল অক্ষত চর্বি চেনে, সেখানে স্ক্যাভেঞ্জার রিসেপ্টরগুলো বিশেষভাবে কেবল বিষাক্ত জারিত চর্বিকে (oxLDL) চিনে ফেলে [১, ২]। CD36 রিসেপ্টরটি জারিত চর্বির কণাগুলোকে দ্রুত আঁকড়ে ধরে কোষের ভেতরে টেনে নিয়ে যায় [১, ২]।'
            ),
            l(
              'Crucially, the expression of CD36 and SR-A1 is entirely immune to sterol-mediated feedback down-regulation [1, 2]. As macrophages internalize oxLDL, intracellular lysosomal acid lipase hydrolyzes cholesteryl esters into free cholesterol, which is re-esterified by Acyl-CoA:Cholesterol Acyltransferase-1 (ACAT1) into neutral cholesteryl oleate droplets stored in the cytoplasm [1, 2]. Instead of shutting down lipid uptake, accumulating oxLDL activates the nuclear receptor Peroxisome Proliferator-Activated Receptor-gamma (PPAR-gamma), which binds to the CD36 promoter and actively upregulates CD36 transcription [1, 2]. This feeds a vicious positive forward-loop: more oxLDL uptake drives higher CD36 expression, compelling macrophages to gorge on lipids until their cytoplasm is densely packed with lipid droplets, transforming them into classic foam cells [1, 2].',
              'সবচেয়ে মারাত্মক বিষয় হলো, কোষে যত চর্বিই জমুক না কেন, এই স্ক্যাভেঞ্জার রিসেপ্টর কখনোই বন্ধ হয় না [১, ২]। বরং কোষে জারিত চর্বি ঢোকার সাথে সাথে এটি PPAR-gamma প্রোটিনকে সক্রিয় করে আরও বেশি নতুন CD36 রিসেপ্টর তৈরি করতে শুরু করে [১, ২]। এর ফলে এক আত্মঘাতী চক্রের সৃষ্টি হয়: যত বেশি চর্বি ঢোকে, রিসেপ্টর তত বাড়ে এবং ম্যাক্রোফেজটি গোগ্রাসে চর্বি গিলতে গিলতে ফোম কোষে পরিণত হয়ে ফেটে মারা যায় [১, ২]।'
            ),
            l(
              'Engorged foam cells become metabolically paralyzed and secrete high concentrations of inflammatory mediators, including Tumor Necrosis Factor-alpha (TNF-alpha), Interleukin-1beta (IL-1beta), and Monocyte Chemoattractant Protein-1 (MCP-1) [1, 2]. Furthermore, foam cells produce matrix metalloproteinases (MMP-1, MMP-8, MMP-13, and MMP-9) that degrade interstitial collagen in the overlying fibrous cap [1]. When foam cells eventually undergo apoptotic and necroptotic cell death, the failure of neighboring phagocytes to clear the corpses (defective efferocytosis) leads to secondary necrosis, forming a pro-thrombotic, acellular lipid necrotic core that destabilizes the plaque [1, 2].',
              'চর্বিতে ফুলে ওঠা এই ফোম কোষগুলো মারাত্মক বিষাক্ত সাইটোকাইন ও প্রদাহের আগুন ছড়াতে থাকে [১, ২]। এরা বিশেষ কিছু এনজাইম (MMP) তৈরি করে রক্তনালির প্রতিরক্ষামূলক কোলাজেন প্রাচীরকে গলিয়ে ফেলে [১]। অবশেষে ফোম কোষগুলো ফেটে মারা গেলে সেখানে এক বিষাক্ত চর্বির স্তূপ (নেক্রোটিক কোর) তৈরি হয়, যা যে কোনো সময় ফেটে রক্তনালি বন্ধ করে দিয়ে তাৎক্ষণিক হার্ট অ্যাটাক ঘটায় [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Saturated Fatty Acid Stereochemistry & Hepatic PCSK9 Induction', '৩. সম্পৃক্ত ফ্যাটি অ্যাসিডের রাসায়নিক গঠন ও হেপাটিক পিসিএসকে৯ সক্রিয়করণ'),
          paragraphs: [
            l(
              'The hypercholesterolemic potency of dietary saturated fatty acids is strictly dictated by acyl carbon chain length and stereochemical saturation [2, 3]. Systematic metabolic ward feeding trials demonstrate that saturated fatty acids do not exert uniform biological effects on circulating cholesterol [3]. Stearic acid (C18:0), abundant in cocoa butter and beef tallow, has a neutral effect on plasma LDL-C because it is rapidly desaturated in the liver by stearoyl-CoA desaturase-1 (SCD1) into monounsaturated oleic acid (18:1 n-9) [3]. Similarly, short-chain and medium-chain fatty acids (<10 carbons) enter the portal circulation directly to undergo obligatory hepatic beta-oxidation without influencing lipoprotein clearance [3].',
              'খাবারের সম্পৃক্ত চর্বি রক্তে কতটা কোলেস্টেরল বাড়াবে তা নির্ভর করে এর কার্বন শিকলের দৈর্ঘ্য ও আণবিক গঠনের ওপর [২, ৩]। সব সম্পৃক্ত চর্বি এক রকম ক্ষতিকর নয় [৩]। যেমন চকলেটের কোকো বাটারে থাকা ১৮ কার্বনের স্টিয়ারিক অ্যাসিড (C18:0) রক্তে কোলেস্টেরল বাড়ায় না, কারণ লিভার একে দ্রুত স্বাস্থ্যকর অলিক অ্যাসিডে রূপান্তর করে ফেলে [৩]। একইভাবে ১০ কার্বনের নিচের ক্ষুদ্র চর্বিগুলো লিভারে সরাসরি পুড়ে শক্তি তৈরি করে, ফলে এরা রক্তে চর্বি জমায় না [৩]।'
            ),
            l(
              'In stark contrast, saturated fatty acids containing 12, 14, and 16 carbon atoms—specifically lauric acid (C12:0), myristic acid (C14:0), and palmitic acid (C16:0)—are profoundly atherogenic [3]. Among these, myristic acid exhibits the highest relative hypercholesterolemic coefficient, followed closely by palmitic acid, which represents the most abundant dietary SFA in Western and modern urban diets [3]. These fatty acids lack double bonds, allowing their linear acyl chains to pack tightly into phospholipid bilayers, fundamentally altering the biophysical properties of the hepatocyte endoplasmic reticulum [3].',
              'বিপরীতে ১২, ১৪ এবং ১৬ কার্বনের সম্পৃক্ত চর্বিগুলো—বিশেষ করে লরিক অ্যাসিড, মিরিস্টিক অ্যাসিড এবং প্যালমিটিক অ্যাসিড—হৃদরোগের সবচেয়ে বড় ঘাতক [৩]। এর মধ্যে মাখনে থাকা মিরিস্টিক অ্যাসিড এবং পাম অয়েল ও লাল মাংসে থাকা প্যালমিটিক অ্যাসিড সবচেয়ে মারাত্মক ক্ষতিকর [৩]। এদের কোনো দ্বি-বন্ধন না থাকায় এরা সোজা কাঠির মতো লিভারের কোষঝিল্লিতে অত্যন্ত শক্তভাবে ঠাসাঠাসি করে বসে এবং কোষঝিল্লিকে অনমনীয় ও পাথরের মতো শক্ত করে ফেলে [৩]।'
            ),
            l(
              'In hepatocytes, rigidified ER membranes inhibit the sterol-sensing conformational change of SCAP, arresting SREBP-2 processing and halting *LDLR* transcription [3]. However, the molecular mechanism extends beyond transcription to post-translational receptor destruction mediated by Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9) [2, 3]. Palmitic and myristic acids upregulate PCSK9 gene transcription through an independent hepatocyte nuclear factor 1-alpha (HNF1-alpha) promoter binding site [3]. Newly synthesized PCSK9 is secreted into the hepatic sinusoid, where it binds to the first epidermal growth factor-like repeat A (EGF-A) domain of cell-surface LDLR at neutral pH [3].',
              'লিভারের মেমব্রেন শক্ত হয়ে যাওয়ায় SREBP-2 প্রোটিন রিসেপ্টর তৈরি করতে পারে না [৩]। কিন্তু এর চেয়েও মারাত্মক হলো—এই ক্ষতিকর চর্বিগুলো লিভারে PCSK9 নামক একটি ধ্বংসকারী এনজাইমের উৎপাদন বহুগুণ বাড়িয়ে দেয় [২, ৩]। তৈরি হওয়া PCSK9 এনজাইম রক্তে গিয়ে লিভারের উপরিভাগে থাকা কোলেস্টেরল পরিষ্কারকারী এলডিএল রিসেপ্টরের গায়ে শক্তভাবে আটকে যায় [৩]।'
            ),
            l(
              'Normally, internalized LDLR unbinds its LDL cargo in the acidic environment of early endosomes (pH ~6.0) and recycles back to the cell surface, executing up to 150 clearance cycles per receptor lifespan [3]. However, the PCSK9-LDLR complex undergoes a high-affinity conformational lock that prevents endosomal uncoupling [3]. The intact complex is routed into the lysosome, where LDLR is completely destroyed by cathepsin proteases [3]. By simultaneously suppressing LDLR gene transcription and accelerating LDLR lysosomal degradation, dietary SFAs dismantle the hepatic clearance apparatus, dramatically elevating circulating ApoB particles and accelerating subendothelial retention [2, 3].',
              'সুস্থ অবস্থায় একটি এলডিএল রিসেপ্টর রক্ত থেকে ক্ষতিকর কণা গিলে লিভারের ভেতরে ছেড়ে দিয়ে আবার কোষঝিল্লিতে ফিরে আসে এবং এভাবে একটানা ১৫০ বার রক্ত পরিষ্কার করতে পারে [৩]। কিন্তু ক্ষতিকর চর্বির কারণে তৈরি হওয়া PCSK9 রিসেপ্টরকে এমন শক্তভাবে চেপে ধরে যে রিসেপ্টর আর ফিরে আসতে পারে না; বরং কোষের লাইসোজোমে গিয়ে রিসেপ্টরটি চিরতরে পুড়ে ধ্বংস হয়ে যায় [৩]। রিসেপ্টর কমে যাওয়ায় রক্তে ক্ষতিকর কণার সংখ্যা দ্বিগুণ বাড়ে এবং রক্তনালিতে ব্লক তৈরি ত্বরান্বিত হয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Endothelial Glycocalyx Integrity & Sodium Vascular Toxicity', '৪. এন্ডোথেলিয়াল গ্লাইকোক্যালিক্স ও সোডিয়ামের বিষক্রিয়া'),
          paragraphs: [
            l(
              'A critical yet underappreciated vascular target of dietary sodium toxicity is the endothelial glycocalyx, a carbohydrate-rich gel meshwork lining the luminal surface of all blood vessels [4, 5]. Composed of membrane-bound proteoglycans (syndecans, glypicans) and heavily sulfated glycosaminoglycans (heparan sulfate, chondroitin sulfate, hyaluronic acid), the glycocalyx extends 0.5 to 3.0 micrometers into the arterial lumen [4]. Under healthy conditions, this negative surface charge creates an electrostatic shield that repels negatively charged blood cells and prevents direct circulating lipoprotein contact with endothelial cell membranes [4, 5].',
              'লবণের অতিরিক্ত সোডিয়াম রক্তনালির যে সবচেয়ে সংবেদনশীল অংশটি ধ্বংস করে তা হলো এন্ডোথেলিয়াল গ্লাইকোক্যালিক্স (Endothelial Glycocalyx), যা রক্তনালির ভেতরের দেয়ালে একটি পিচ্ছিল জেল স্তরের মতো বিছানো থাকে [৪, ৫]। সালফেটে ভরপুর এই জেল স্তরটির ঋণাত্মক চার্জ রক্তে থাকা কণাগুলোকে সরাসরি রক্তনালির দেয়ালে আঘাত করতে বাধা দেয় এবং রক্তনালিকে ঘর্ষণজনিত ক্ষতি থেকে রক্ষা করে [৪, ৫]।'
            ),
            l(
              'Furthermore, the endothelial glycocalyx functions as an immense physiological sodium buffer (the vascular sodium sink) [4, 5]. Negatively charged heparan sulfate side chains reversibly bind and buffer immense quantities of sodium ions without drawing water, preventing acute surges in systemic hemodynamic pressure [5]. In addition, the glycocalyx stores extracellular Superoxide Dismutase (ecSOD/SOD3), positioning an antioxidant shield directly at the blood-endothelium interface, while mechanically transmitting fluid shear stress to eNOS to stimulate continuous nitric oxide synthesis [4].',
              'তাছাড়া এই গ্লাইকোক্যালিক্স স্তরটি শরীরের একটি বিশাল সোডিয়াম বাফার হিসেবে কাজ করে [৪, ৫]। এটি রক্ত থেকে প্রচুর বাড়তি সোডিয়াম নিজের ভেতরে শোষণ করে রক্তচাপ বাড়তে দেয় না [৫]। একই সাথে এটি রক্তনালির মুখে শক্তিশালী অ্যান্টিঅক্সিডেন্ট ধরে রেখে বিষাক্ত ফ্রি-র‌্যাডিক্যাল ধ্বংস করে এবং রক্তপ্রবাহের চাপ মেপে সঠিক পরিমাণে নাইট্রিক অক্সাইড গ্যাস তৈরি করতে সাহায্য করে [৪]।'
            ),
            l(
              'Chronic high dietary sodium intake overwhelms and destroys this protective barrier [4, 5]. Excess luminal sodium saturates heparan sulfate binding capacity and drives shedding of syndecan-1 and hyaluronic acid into the circulation through the activation of matrix metalloproteinases and heparanase [4, 5]. The glycocalyx collapses, thinning by up to 60% within weeks of high-salt feeding [5]. Stripped of its protective gel meshwork, the bare endothelial plasma membrane is exposed directly to shear stress and circulating particles [4, 5].',
              'দীর্ঘদিন খাবারে অতিরিক্ত লবণ খেলে এই চমৎকার প্রতিরক্ষামূলক জেল স্তরটি পুরোপুরি নষ্ট হয়ে যায় [৪, ৫]। অতিরিক্ত সোডিয়ামের চাপে এনজাইম সক্রিয় হয়ে গ্লাইকোক্যালিক্সের আঁশগুলোকে কেটে রক্তে ভাসিয়ে দেয় এবং মাত্র কয়েক সপ্তাহের মধ্যে এই সুরক্ষামূলক স্তরটি ৬০ শতাংশ পাতলা হয়ে যায় [৫]। রক্তনালির দেয়াল তার পিচ্ছিল সুরক্ষাকবচ হারিয়ে উলঙ্গ হয়ে পড়ে এবং ক্ষতিকর চর্বি ও শ্বেত রক্তকণিকা সরাসরি রক্তনালির দেয়ালে আঘাত করার সুযোগ পায় [৪, ৫]।'
            ),
            l(
              'Concurrently, sodium influx into endothelial cells via ENaC channels activates the local mineralocorticoid receptor and stimulates NADPH oxidase, generating massive oxidative stress that oxidizes BH4 and uncouples eNOS [4, 5]. The loss of endothelial nitric oxide removes tonic inhibition of vascular smooth muscle tone and triggers systemic arterial vasoconstriction [4]. The DASH dietary pattern—restricting sodium to 1,500 mg/day while supplying abundant dietary potassium and polyphenols—halts glycocalyx shedding, restores the endothelial sodium-buffering barrier, and recouples eNOS to normalize arterial compliance and blood pressure [4, 5].',
              'একই সাথে কোষে লবণ ঢুকে নাইট্রিক অক্সাইড তৈরির এনজাইমকে (eNOS) বিকল করে দেয়, যার ফলে রক্তনালিগুলো সংকুচিত হয়ে উচ্চ রক্তচাপ সৃষ্টি করে [৪, ৫]। কিন্তু ড্যাশ ডায়েটের মাধ্যমে লবণ কমিয়ে ১৫০০ মিলিগ্রাম করলে এবং শাকসবজি থেকে পটাশিয়াম গ্রহণ করলে এই গ্লাইকোক্যালিক্স স্তর পুনরায় গজিয়ে ওঠে, রক্তনালি তার হারানো সুরক্ষা ফিরে পায় এবং রক্তচাপ পুরোপুরি স্বাভাবিক হয়ে আসে [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. High-Density Lipoprotein Proteome & Reverse Cholesterol Flux', '৫. ভালো কোলেস্টেরল (এইচডিএল) প্রোটিন গঠন ও কোলেস্টেরল নিষ্কাশন'),
          paragraphs: [
            l(
              'While reducing atherogenic ApoB particles is the primary clinical mandate in cardiovascular dietetics, optimizing High-Density Lipoprotein (HDL) quality and reverse cholesterol transport represents an essential complementary defense [5, 6]. Traditional lipidology viewed HDL strictly through the lens of static HDL-Cholesterol (HDL-C) mass concentration [6]. However, failed clinical trials with CETP inhibitors demonstrated that pharmacologically raising HDL-C mass does not necessarily reduce cardiovascular events, directing attention away from static cholesterol quantity and toward HDL functionality and proteomic composition [6].',
              'রক্ত থেকে ক্ষতিকর ApoB কণা কমানোর পাশাপাশি ভালো কোলেস্টেরল বা এইচডিএলের (HDL) কার্যক্ষমতা বাড়ানো হৃদরোগ প্রতিরোধের অন্যতম গুরুত্বপূর্ণ স্তম্ভ [৫, ৬]। অতীতে মনে করা হতো রক্তে কেবল এইচডিএলের ওজন বা সংখ্যা বেশি থাকলেই যথেষ্ট [৬]। কিন্তু আধুনিক গবেষণায় প্রমাণিত হয়েছে যে এইচডিএলের সংখ্যা বেশি থাকলেই হৃদরোগ ঠেকানো যায় না, বরং এই এইচডিএল কণাগুলো বাস্তবে রক্তনালির ভেতর থেকে ক্ষতিকর চর্বি তুলে এনে লিভারে ফেরত পাঠাতে পারছে কিনা (কার্যক্ষমতা) সেটাই আসল বিষয় [৬]।'
            ),
            l(
              'The primary cardioprotective function of HDL is macrophage reverse cholesterol transport (mRCT) [6]. Nascent, discoidal lipid-poor Apolipoprotein A-1 (ApoA-1) particles interact with the ATP-Binding Cassette Transporter A1 (ABCA1) on macrophage foam cells, extracting excess unesterified cholesterol and phospholipids from the plasma membrane [6]. As HDL matures into spherical alpha-HDL, it engages ATP-Binding Cassette Transporter G1 (ABCG1) and Scavenger Receptor Class B Type 1 (SR-B1) to extract additional sterols [6]. The accumulated cholesterol is esterified by Lecithin:Cholesterol Acyltransferase (LCAT) and transported to the liver for biliary excretion, purging atherogenic sterols from the arterial wall [6].',
              'এইচডিএলের প্রধান কাজ হলো রক্তনালির প্রাচীরে আটকে থাকা ফোম কোষের ভেতর থেকে বাড়তি চর্বি টেনে বের করে আনা (Reverse Cholesterol Transport) [৬]। এইচডিএলের গায়ে থাকা ApoA-1 প্রোটিন ফোম কোষের বিশেষ দরজায় (ABCA1 চ্যানেল) যুক্ত হয়ে ভেতরের চর্বি নিজের ভেতরে টেনে নেয় [৬]। এরপর এই চর্বিকে প্রক্রিয়াজাত করে সোজা লিভারে পৌঁছে দেয় যাতে তা পিত্তরসের সাথে শরীর থেকে মলমূত্রের মাধ্যমে বের হয়ে যেতে পারে [৬]।'
            ),
            l(
              'In systemic inflammatory states, type 2 diabetes, and diets rich in trans-fats and ultra-processed foods, HDL undergoes proteomic remodeling, transforming from an anti-atherogenic into a dysfunctional, pro-atherogenic particle [6]. Under systemic inflammation, Serum Amyloid A (SAA) and complement factors displace protective ApoA-1 from the HDL particle [6]. Simultaneously, HDL-associated Paraoxonase-1 (PON-1)—a calcium-dependent lactonase that hydrolyzes oxidized lipids and prevents LDL oxidation—is inactivated by oxidative stress, rendering HDL incapable of suppressing endothelial inflammation or extracting cholesterol [6].',
              'কিন্তু যখন মানুষ অতিরিক্ত চিনি, ট্রান্স-ফ্যাট বা অস্বাস্থ্যকর প্রক্রিয়াজাত খাবার খায়, তখন রক্তে প্রদাহের সৃষ্টি হয় এবং ভালো কোলেস্টেরল বা এইচডিএল নিজেই নষ্ট হয়ে বিকৃত রূপ ধারণ করে [৬]। এর ফলে এইচডিএলের গা থেকে উপকারী ApoA-1 প্রোটিন খসে পড়ে এবং এর সুরক্ষাকারী এনজাইম (PON-1) অকেজো হয়ে যায়; তখন এই এইচডিএল রক্তনালি থেকে চর্বি বের করতে সম্পূর্ণ ব্যর্থ হয় [৬]।'
            ),
            l(
              'The Mediterranean dietary pattern exerts profound positive remodeling on the HDL proteome [5, 6]. Bioactive secoiridoids from extra virgin olive oil and unsaturated fatty acids from nuts upregulate hepatic ApoA-1 transcription, restore PON-1 antioxidant activity, and stimulate macrophage ABCA1 expression [6]. Clinical trials in PREDIMED participants demonstrated that the Mediterranean diet significantly enhanced HDL cholesterol efflux capacity, increased HDL particle fluidity, and restored endothelial vasodilation independently of changes in total HDL-C concentration, proving the transformative power of whole-food dietetics in vascular remodeling [6].',
              'ভূমধ্যসাগরীয় খাদ্যাভ্যাস এই বিকৃত এইচডিএলকে পুনরায় সম্পূর্ণ সচল ও শক্তিশালী করে তোলে [৫, ৬]। অলিভ অয়েলের পলিফেনল এবং বাদামের ওমেগা ফ্যাটি অ্যাসিড লিভার থেকে প্রচুর তাজা ApoA-1 তৈরি করায় এবং PON-1 এনজাইমকে পুনরায় সচল করে [৬]। প্রিডিমেড ট্রায়ালে দেখা গেছে যে এই খাবার খাওয়ার ফলে রক্তে মোট এইচডিএলের সংখ্যা না বাড়লেও রক্তনালি থেকে ক্ষতিকর চর্বি বের করে আনার ক্ষমতা নাটকীয়ভাবে বেড়ে যায় এবং হার্ট অ্যাটাকের ঝুঁকি পুরোপুরি দূর হয় [৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis & Clinical Decision Framework', '৬. একাডেমিক সমন্বয় ও ক্লিনিক্যাল সিদ্ধান্ত গ্রহণ'),
          paragraphs: [
            l(
              'Atherosclerosis initiates strictly through the subendothelial retention of apolipoprotein B-100 containing lipoproteins (VLDL, IDL, LDL, Lp(a)) within the arterial intima at sites of disturbed, oscillatory low shear stress [1, 2]. Positively charged basic lysine and arginine motifs on ApoB form electrostatic salt bridges with negatively charged sulfate groups on intimal proteoglycans (biglycan, versican), physically trapping particles where they undergo oxidative modification into oxLDL [1, 2].',
              'রক্তনালির যেসব বাঁকে রক্তের ঘূর্ণি সৃষ্টি হয় সেখানে ApoB-100 যুক্ত ক্ষতিকর কণা রক্তনালির প্রাচীরে ঢুকে প্রোটিওগ্লাইকানের সাথে আয়নিক বন্ধনে আটকে যায় [১, ২]। এই কণাগুলো সেখানে বছরের পর বছর বন্দি থেকে জারিত হয়ে মারাত্মক বিষাক্ত জারিত চর্বিতে পরিণত হয় [১, ২]।'
            ),
            l(
              'Macrophage foam cell formation bypasses sterol-mediated feedback down-regulation by utilizing scavenger receptors CD36 and SR-A1 that bind oxLDL [1, 2]. Intracellular lipid accumulation transactivates PPAR-gamma, which further upregulates CD36 transcription, driving unregulated foam cell transformation, inflammatory cytokine secretion, and matrix metalloproteinase production that destabilizes the fibrous cap [1, 2].',
              'ম্যাক্রোফেজ শ্বেত রক্তকণিকা কোনো বাধা ছাড়াই CD36 স্ক্যাভেঞ্জার রিসেপ্টর দিয়ে অবিরাম জারিত চর্বি গিলতে থাকে [১, ২]। কোষে চর্বি জমলে রিসেপ্টর বন্ধ হওয়ার বদলে আরও নতুন রিসেপ্টর তৈরি হয়; ফলে কোষগুলো চর্বিতে ফুলে ফোম কোষে রূপ নেয় এবং রক্তনালির পর্দা গলিয়ে প্লাক তৈরি করে [১, ২]।'
            ),
            l(
              'Dietary saturated fatty acids (palmitic, myristic) decrease hepatocyte ER membrane fluidity, suppressing SCAP/SREBP-2 Golgi trafficking to downregulate LDLR transcription while upregulating PCSK9-mediated lysosomal degradation [2, 3]. Consequently, plasma ApoB residence time doubles, driving arterial intimal collision and retention [2, 3]. Substituting SFAs with PUFAs and MUFAs restores SREBP-2, upregulates LDLR, and accelerates plasma ApoB clearance [3].',
              'মাখন ও লাল মাংসের সম্পৃক্ত চর্বি লিভারের ঝিল্লি শক্ত করে রিসেপ্টর তৈরির মাস্টার সুইচ বন্ধ করে এবং PCSK9 বাড়িয়ে রক্ত থেকে কোলেস্টেরল পরিষ্কারের গতি অর্ধেকে নামিয়ে আনে [২, ৩]। সম্পৃক্ত চর্বির বদলে অলিভ অয়েল ও বাদাম খেলে রিসেপ্টর আবার তৈরি হয় এবং রক্ত দ্রুত চর্বিমুক্ত হয় [৩]।'
            ),
            l(
              'Excess dietary sodium chloride destroys the endothelial glycocalyx and drives oxidative uncoupling of eNOS, shutting down vasodilatory nitric oxide production and accelerating arterial stiffening [4, 5]. The DASH diet (1,500 mg sodium, 4,700 mg potassium) restores eNOS coupling, hyperpolarizes vascular smooth muscle via Na+/K+-ATPase and Kir2.1, and lowers systolic blood pressure by up to 11.5 mmHg [5]. Paired with the Mediterranean diet (PREDIMED 30% ASCVD reduction), targeted nutritional therapy directly reverses the molecular pathophysiology of cardiovascular disease [5, 6].',
              'অতিরিক্ত লবণ রক্তনালির সুরক্ষাকারী জেল স্তর ধ্বংস করে এবং নাইট্রিক অক্সাইড তৈরি বন্ধ করে রক্তচাপ মারাত্মক বাড়িয়ে দেয় [৪, ৫]। ড্যাশ ডায়েটের মাধ্যমে লবণ কমিয়ে পটাশিয়াম বাড়ালে এবং ভূমধ্যসাগরীয় খাবার গ্রহণ করলে রক্তচাপ পুরোপুরি স্বাভাবিক হয় এবং হার্ট অ্যাটাকের ঝুঁকি ৩০ শতাংশ কমে যায় [৫, ৬]।'
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
          heading: l('1. Proteoglycan Sulfation Genetics & ApoB Electrostatic Kinetics', '১. প্রোটিওগ্লাইকান সালফেশন জিনতত্ত্ব ও এপোবি আয়নীয় গতিবিদ্যা'),
          paragraphs: [
            l(
              'The precise biophysical affinity governing ApoB particle retention within the arterial intima is determined by the fine chemical stereochemistry of glycosaminoglycan (GAG) sulfation [2]. Proteoglycans synthesized by arterial vascular smooth muscle cells—predominantly biglycan and versican—carry covalently attached chondroitin sulfate and dermatan sulfate GAG chains consisting of repeating disaccharide units of D-glucuronic acid (or L-iduronic acid) and N-acetyl-D-galactosamine [2]. The negative electrostatic charge density of these chains is established by specific Golgi sulfotransferases, predominantly chondroitin 4-O-sulfotransferase-1 (C4ST-1) and carbohydrate sulfotransferase 11 (CHST11) [2].',
              'রক্তনালির ভেতরের প্রাচীরে ApoB কণা কতটা শক্তভাবে আটকে থাকবে তা নির্ভর করে প্রাচীরের গ্লাইকোসামিনোগ্লাইকান (GAG) তন্তুর সালফেশন রাসায়নিক গঠনের ওপর [২]। ধমনির মসৃণ পেশিকোষগুলো বিগ্লাইকান ও ভার্সিকান নামের বিশেষ তন্তু তৈরি করে যাতে সালফেটের পুনরাবৃত্তিমূলক শিকল থাকে [২]। বিশেষ কিছু এনজাইম এই তন্তুর গায়ে ঋণাত্মক সালফেটের ঘনত্ব নিয়ন্ত্রণ করে [২]।'
            ),
            l(
              'Site-directed mutagenesis and crystallographic modeling have mapped the primary proteoglycan-binding domain on ApoB-100 to an 8-amino-acid basic motif designated as Site B (residues 3359 to 3367: Arg-Leu-Thr-Arg-Lys-Arg-Gly-Leu-Lys) [2]. In mice carrying a knock-in point mutation that neutralizes Site B (ApoB100-rk, mutating residues 3362-3367 to Ala), circulating ApoB levels remain markedly elevated, but subendothelial retention is ablated by >85% and aortic atherosclerotic lesion formation is abolished, proving that electrostatic retention is the absolute gatekeeper of atherogenesis [2].',
              'জেনেটিক গবেষণায় দেখা গেছে যে ApoB-100 প্রোটিনের ৩৩৫৯ থেকে ৩৩৬৭ নম্বর স্থানে থাকা ধনাত্মক আর্জিনিন ও লাইসিন অ্যামাইনো অ্যাসিডের গুচ্ছটি (Site B) প্রাচীরের ঋণাত্মক সালফেটের সাথে হুবহু তালার ভেতর চাবির মতো খাপে খাপে আটকে যায় [২]। বিজ্ঞানাগারে এই আটটি অ্যামাইনো অ্যাসিড পরিবর্তন করে দিলে দেখা যায় রক্তে প্রচুর ক্ষতিকর কোলেস্টেরল থাকা সত্ত্বেও তা রক্তনালির প্রাচীরে এক ফোঁটাও আটকে থাকতে পারে না এবং কোনো ব্লক তৈরি হয় না [২]।'
            ),
            l(
              'Pro-atherogenic stimuli dynamically alter this sulfation architecture [2]. Exposure of vascular smooth muscle cells to elevated Platelet-Derived Growth Factor (PDGF) and Transforming Growth Factor-beta (TGF-beta) dramatically upregulates CHST11 transcription, leading to elongation of chondroitin sulfate chains and hyper-sulfation at the 4-O position [2]. Hyper-sulfated proteoglycans exhibit a 5-fold higher binding affinity (lower Kd) for human LDL, creating an exceptionally adhesive subendothelial matrix that traps even normal circulating concentrations of ApoB particles [2].',
              'রক্তনালিতে সামান্য প্রদাহ সৃষ্টি হলে প্রাচীরের পেশিকোষগুলো আরও দীর্ঘ এবং আরও বেশি ঋণাত্মক চার্জযুক্ত সালফেটের জাল তৈরি করে [২]। এই অতিরিক্ত সালফেটের জালটি রক্ত থেকে এমনকি স্বাভাবিক মাত্রার চর্বি কণাগুলোকেও ৫ গুণ বেশি শক্তিতে টেনে এনে প্রাচীরে বন্দি করে ফেলে [২]।'
            ),
            l(
              'Cardiovascular dietetics directly modulates proteoglycan biology: diets rich in marine omega-3 fatty acids (EPA, DHA) and polyphenols suppress vascular TGF-beta and PDGF signaling, downregulating CHST11 expression and producing undersulfated proteoglycans with markedly reduced affinity for ApoB [2, 6]. By reducing the intrinsic adhesiveness of the subendothelial matrix, targeted nutritional interventions inhibit the primary retention step of atherosclerosis at the biophysical level [2].',
              'আধুনিক পুষ্টিবিজ্ঞানের মাধ্যমে এই জাল তৈরি বন্ধ করা সম্ভব: সামুদ্রিক মাছের ওমেগা-৩ ফ্যাটি অ্যাসিড এবং অলিভ অয়েলের পলিফেনল রক্তনালির ক্ষতিকর সংকেত বন্ধ করে দেয় এবং সালফেটের জাল তৈরি দমিয়ে রাখে [২, ৬]। এর ফলে রক্তনালির চর্বি আটকানোর আঠালো ক্ষমতা নষ্ট হয়ে যায় এবং রক্তনালি সম্পূর্ণ সুরক্ষিত থাকে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. PCSK9 Biology & Monoclonal vs Dietary Modulation', '২. পিসিএসকে৯ জীববিজ্ঞান ও অ্যান্টিবডি বনাম খাদ্য ব্যবস্থাপনা'),
          paragraphs: [
            l(
              'The discovery of Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9) by Nabil Seidah in 2003 represents one of the most successful translational breakthroughs in molecular cardiology [2, 3]. PCSK9 is a 692-amino acid secretory serine protease synthesized as a zymogen predominantly in hepatocytes [3]. Following autocatalytic cleavage of its prodomain in the endoplasmic reticulum, mature PCSK9 is secreted into the systemic circulation, where it binds to cell-surface LDL receptors and drives their lysosomal degradation [3].',
              '২০০৩ সালে বিজ্ঞানী নাবিল সেইদাহ কর্তৃক আবিষ্কৃত PCSK9 এনজাইম হৃদরোগের আণবিক চিকিৎসায় এক যুগান্তকারী পরিবর্তন এনেছে [২, ৩]। এটি মূলত লিভার কোষে তৈরি হওয়া একটি বিশেষ এনজাইম [৩]। রক্তে নিঃসৃত হয়ে এটি লিভারের কোষঝিল্লির কোলেস্টেরল পরিষ্কারকারী এলডিএল রিসেপ্টরের গায়ে যুক্ত হয়ে এদেরকে ধ্বংসের দিকে ঠেলে দেয় [৩]।'
            ),
            l(
              'Human genetic loss-of-function (LOF) mutations in *PCSK9* (e.g., Y142X, C679X, and R46L) provided definitive causal proof of the PCSK9-ApoB nexus [2, 3]. In the Dallas Heart Study and Atherosclerosis Risk in Communities (ARIC) study, individuals carrying heterozygous nonsense LOF mutations exhibited a lifetime 28% to 40% reduction in circulating LDL-C, which translated into an astounding 88% reduction in lifelong coronary heart disease events [2, 3]. These human genetic validations proved that lifelong reduction in atherogenic particle exposure confers exponentially greater cardiovascular protection than pharmacological reduction initiated late in adulthood [2].',
              'যাদের শরীরে জন্মগতভাবে PCSK9 এনজাইম কম তৈরি হয় তাদের ওপর পরিচালিত আন্তর্জাতিক গবেষণায় দেখা গেছে যে সারা জীবন তাদের রক্তে ক্ষতিকর কোলেস্টেরল ৩০-৪০ শতাংশ কম থাকে [২, ৩]। এর ফলে তাদের সারা জীবনে হার্ট অ্যাটাকের ঝুঁকি অবিশ্বাস্যভাবে ৮৮ শতাংশ কমে যায় [২, ৩]। এই বৈজ্ঞানিক সত্যটি প্রমাণ করেছে যে সারা জীবন রক্তে ক্ষতিকর কণার সংখ্যা কমিয়ে রাখতে পারলে হৃদরোগকে পৃথিবী থেকে প্রায় চিরতরে নির্মূল করা সম্ভব [২]।'
            ),
            l(
              'This genetic insight drove the development of fully human monoclonal antibodies (evolocumab, alirocumab) and small interfering RNA (inclisiran) that silence PCSK9, achieving 50% to 60% reductions in LDL-C and significant MACE reductions in high-risk patients [2, 3]. However, pharmacological statin therapy presents an inherent counter-regulatory paradox: by depleting intracellular sterols and activating SREBP-2, statins co-transcribe *LDLR* but simultaneously upregulate *PCSK9* transcription by up to 40%, placing an intrinsic biological brake on statin efficacy [3].',
              'এই বিজ্ঞানের ওপর ভিত্তি করে আধুনিক চিকিৎসায় ইভোলকুমাব বা ইনক্লিসিরানের মতো ওষুধ তৈরি হয়েছে যা PCSK9 বন্ধ করে রক্তে কোলেস্টেরল ৬০ শতাংশ পর্যন্ত কমিয়ে দেয় [২, ৩]। কিন্তু সাধারণ স্ট্যাটিন ওষুধের একটি অদ্ভুত সীমাবদ্ধতা রয়েছে: স্ট্যাটিন একদিকে লিভারের রিসেপ্টর বাড়ালেও একই সাথে ক্ষতিকর PCSK9 এনজাইমের ক্ষরণও ৪০% বাড়িয়ে দেয়, যা নিজের কার্যকারিতাকে নিজেই কিছুটা কমিয়ে ফেলে [৩]।'
            ),
            l(
              'Medical nutrition therapy fundamentally influences this axis [2, 3]. Eliminating dietary saturated fatty acids (palmitate, myristate) removes the HNF1-alpha stimulus driving basal PCSK9 transcription, preventing unnecessary receptor degradation [3]. Concurrently, incorporating viscous soluble fibers (beta-glucan, psyllium) traps bile acids in the intestinal lumen, forcing the liver to convert endogenous cholesterol into new bile salts [5]. This clears intracellular sterols, upregulating LDLR without triggering the exaggerated SREBP-2/PCSK9 overshoot observed with high-dose statins, providing a potent physiological tool for sustained lipoprotein clearance [2, 3, 5].',
              'সঠিক পুষ্টি থেরাপির মাধ্যমে এই PCSK9 এনজাইমকে প্রাকৃতিকভাবে দমন করা সম্ভব [২, ৩]। খাদ্যাভ্যাস থেকে ক্ষতিকর সম্পৃক্ত চর্বি পুরোপুরি বাদ দিলে লিভারে PCSK9 তৈরি প্রাকৃতিকভাবেই বন্ধ হয়ে যায় [৩]। একই সাথে ওটসের বিটা-গ্লুকান বা ইসবগুলের মতো আঠালো আঁশ খেলে তা অন্ত্রের পিত্তরসকে মলের সাথে বের করে দেয়; ফলে লিভার নিজের ভেতরের কোলেস্টেরল খরচ করে নতুন পিত্তরস তৈরি করতে বাধ্য হয় এবং কোনো বাড়তি ওষুধ ছাড়াই রক্ত দ্রুত চর্বিমুক্ত হয় [২, ৩, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. eNOS Uncoupling Biophysics & Tetrahydrobiopterin Oxidation', '৩. ইএনওএস এনজাইম বিভাজন ও টেট্রাহাইড্রোবায়োপ্টেরিন জারণ'),
          paragraphs: [
            l(
              'The biophysical mechanisms governing endothelial nitric oxide synthase (eNOS) uncoupling illustrate the delicate enzymatic balance between vascular health and catastrophic oxidative stress [4]. The eNOS enzyme functions obligatorily as a homodimer, consisting of two identical 133-kDa monomers [4]. Each monomer is partitioned into a C-terminal reductase domain (binding NADPH, FAD, and FMN) and an N-terminal oxygenase domain (binding heme, the essential cofactor (6R)-5,6,7,8-tetrahydrobiopterin [BH4], and the substrate L-arginine) [4].',
              'রক্তনালির অন্তর্বর্তী কোষের eNOS এনজাইমটি কীভাবে বিকল হয়ে উল্টো বিষ ছড়ায় তা আধুনিক বায়োফিজিক্সের এক চমকপ্রদ অধ্যায় [৪]। এই এনজাইমটি দুটি অভিন্ন অংশের সমন্বয়ে একটি জোড় হিসেবে (Homodimer) কাজ করে [৪]। এর এক মাথায় ইলেকট্রন গ্রহণ করার ব্যবস্থা থাকে এবং অন্য মাথায় প্রয়োজনীয় ভিটামিন উপাদান টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) এবং আর্জিনিনের উপস্থিতিতে নাইট্রিক অক্সাইড গ্যাস তৈরি হয় [৪]।'
            ),
            l(
              'In the coupled, native state, electrons are transferred sequentially from NADPH through FAD and FMN in the reductase domain of one monomer across to the oxygenase heme domain of the adjacent monomer [4]. Here, bound BH4 donates an electron to the ferrous-dioxygen complex (FeII-O2), stabilizing an essential high-valent iron-oxo intermediate (Compound I) that hydroxylates L-arginine to N-omega-hydroxy-L-arginine and subsequently oxidizes it to L-citrulline and free nitric oxide (NO) [4]. The transiently generated BH4 radical is instantaneously reduced back to BH4, ensuring continuous catalytic cycling [4].',
              'স্বাভাবিক সুস্থ অবস্থায় এক অংশ থেকে ইলেকট্রন অন্য অংশে নির্বিঘ্নে প্রবাহিত হয় এবং BH4 উপাদানটির উপস্থিতিতে আর্জিনিন ভেঙে সুস্থ নাইট্রিক অক্সাইড গ্যাস উৎপন্ন হয় [৪]। এই প্রক্রিয়ায় ক্ষণিকের জন্য তৈরি হওয়া রেডিক্যাল তাৎক্ষণিকভাবে প্রশমিত হয়ে পুনরায় সুস্থ ও সচল হয়ে ওঠে [৪]।'
            ),
            l(
              'Under conditions of excess dietary sodium, angiotensin II elevation, or advanced glycation end-products, endothelial NADPH oxidase (NOX2/NOX4) and uncoupled mitochondria generate surges of superoxide anions (O2-) [4, 5]. Superoxide reacts with native nitric oxide at a diffusion-controlled rate (k ~ 1.9 x 10^10 M^-1 s^-1) to form peroxynitrite (ONOO-), one of the most cytotoxic biological oxidants known [4]. Peroxynitrite rapidly attacks BH4, oxidizing it to the inactive quinonoid dihydrobiopterin (BH2) [4]. Lacking sufficient BH4, the affinity of the eNOS oxygenase domain for L-arginine plummets, and the dimer becomes structurally uncoupled [4].',
              'কিন্তু যখন খাবারে অতিরিক্ত লবণ খাওয়া হয়, তখন রক্তনালির কোষে প্রচুর বিষাক্ত সুপারঅক্সাইড তৈরি হয় [৪, ৫]। এই সুপারঅক্সাইড চোখের পলকে সুস্থ নাইট্রিক অক্সাইডের সাথে মিশে মানবদেহের অন্যতম মারাত্মক বিষ পারঅক্সিনাইট্রাইট (ONOO-) তৈরি করে [৪]। এই মারাত্মক বিষ নিমেষেই BH4 কে পুড়িয়ে অকেজো ডাইহাইড্রোবায়োপ্টেরিনে (BH2) পরিণত করে [৪]। এর ফলে eNOS এনজাইমের স্বাভাবিক জোড় ভেঙে যায় এবং এটি পুরোপুরি বিকল হয়ে পড়ে [৪]।'
            ),
            l(
              'In the uncoupled state, electrons flowing from the reductase domain are no longer transferred to L-arginine; instead, they leak directly to molecular oxygen at the heme site, reducing O2 to superoxide [4]. Uncoupled eNOS effectively transforms from an anti-atherogenic nitric oxide synthesizer into an endogenous superoxide generator, creating an accelerating feed-forward cascade of vascular oxidative injury and arterial stiffening [4]. Restoring the intracellular BH4:BH2 ratio and quenching peroxynitrite requires targeted Medical Nutrition Therapy: high dietary potassium, sodium restriction, and polyphenol antioxidants (hydroxytyrosol, quercetin) that scavenge reactive nitrogen species and recouple eNOS [4, 5, 6].',
              'বিকল হয়ে যাওয়ার পর এই এনজাইমটি আর কোনো নাইট্রিক অক্সাইড তৈরি করে না; বরং এটি নিজেই অবিরত রক্তনালিতে বিষাক্ত সুপারঅক্সাইড তৈরি করতে থাকে [৪]। ফলে রক্তনালিগুলো সংকুচিত হয়ে উচ্চ রক্তচাপ সৃষ্টি করে এবং রক্তনালির দেয়াল শক্ত হয়ে যায় [৪]। এই মারাত্মক অবস্থা থেকে মুক্তি পেতে হলে খাবারে সোডিয়াম কমিয়ে পটাশিয়াম বাড়াতে হবে এবং অলিভ অয়েলের পলিফেনল অ্যান্টিঅক্সিডেন্ট গ্রহণ করতে হবে যা এই এনজাইমটিকে পুনরায় মেরামত করে সুস্থ করে তোলে [৪, ৫, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Chronobiology of Blood Pressure & Nocturnal Non-Dipping', '৪. রক্তচাপের সার্কাডিয়ান ছন্দ ও রাতের রক্তচাপের অস্বাভাবিকতা'),
          paragraphs: [
            l(
              'Systemic arterial blood pressure exhibits a robust, cell-autonomous circadian rhythm governed by the hypothalamic suprachiasmatic nucleus and autonomous molecular clocks within vascular smooth muscle and renal tubules [4, 5]. In healthy normotensive individuals, mean arterial blood pressure follows a reproducible 24-hour profile: it displays a rapid morning surge upon waking, plateaus throughout the daytime active phase, and declines by 10% to 20% during nocturnal sleep [4]. This physiological nighttime decline is designated as the "dipping" phenomenon [4].',
              'মানুষের রক্তচাপ সারা দিন একই রকম থাকে না; মস্তিষ্কের প্রধান ঘড়ি এবং রক্তনালি ও কিডনির নিজস্ব দেহঘড়ির কারণে এটি ২৪ ঘণ্টার একটি চমৎকার ছন্দে ওঠানামা করে [৪, ৫]। সুস্থ মানুষের ক্ষেত্রে সকালে ঘুম থেকে ওঠার পর রক্তচাপ কিছুটা বাড়ে, সারা দিন স্থিতিশীল থাকে এবং রাতে ঘুমানোর সময় দিনের চেয়ে ১০ থেকে ২০ শতাংশ কমে যায় [৪]। রাতে রক্তচাপের এই স্বাভাবিক কমে যাওয়াকে বলা হয় "ডিপিং" (Dipping) [৪]।'
            ),
            l(
              'In individuals consuming high dietary sodium or exhibiting sodium sensitivity, the physiological nocturnal dip is blunted or abolished (<10% nocturnal decline), producing the pathological "non-dipping" or "reverse-dipping" (riser) phenotype [4, 5]. Ambulatory Blood Pressure Monitoring (ABPM) studies establish that nocturnal non-dipping is an independent, powerful predictor of end-organ damage, associated with a 2- to 3-fold higher risk of stroke, left ventricular hypertrophy, congestive heart failure, and cardiovascular mortality compared to dipping hypertension [4].',
              'কিন্তু যারা খাবারে অতিরিক্ত লবণ খান তাদের ক্ষেত্রে রাতে ঘুমানোর সময় এই রক্তচাপ স্বাভাবিকভাবে কমে না (Non-dipping) [৪, ৫]। ২৪ ঘণ্টার বিশেষ রক্তচাপ পরীক্ষায় দেখা গেছে যে রাতে যাদের রক্তচাপ কমে না, তাদের ব্রেন স্ট্রোক, হার্ট ফেইলিউর এবং অকাল মৃত্যুর ঝুঁকি সাধারণ উচ্চ রক্তচাপের চেয়ে ২ থেকে ৩ গুণ বেশি থাকে [৪]।'
            ),
            l(
              'The molecular pathogenesis of nocturnal non-dipping originates in impaired renal sodium excretion during daytime hours [4, 5]. When renal tubule sodium reabsorption is pathologically elevated—due to high dietary salt intake, sympathetic overactivity, or blunted potassium-induced NCC suppression—the kidneys fail to excrete the daily sodium load during waking hours [4]. To maintain sodium balance, the cardiovascular system is forced to maintain elevated systemic arterial pressure throughout the night, driving pressure natriuresis to clear the sodium burden at the cost of chronic nocturnal vascular strain [4, 5].',
              'রাতে রক্তচাপ না কমার মূল শারীরবৃত্তীয় কারণ হলো দিনের বেলা কিডনি দিয়ে বাড়তি লবণ বের হতে না পারা [৪, ৫]। খাবারে অতিরিক্ত লবণ থাকা এবং পটাশিয়ামের ঘাটতির কারণে কিডনি দিনের ৮-১০ ঘণ্টায় সমস্ত লবণ বের করতে ব্যর্থ হয় [৪]। ফলে শরীর বেঁচে থাকার জন্য বাধ্য হয়ে রাতে ঘুমের মধ্যেও রক্তচাপ বাড়িয়ে রাখে যাতে অতিরিক্ত চাপের মাধ্যমে প্রস্রাবের সাথে বাড়তি লবণ বের হয়ে যেতে পারে; কিন্তু এর চরম মূল্য দিতে হয় রক্তনালি ও হার্টের ক্ষতি করে [৪, ৫]।'
            ),
            l(
              'Chrono-nutritional interventions specifically target this pathophysiology [4, 5]. Restricting dietary sodium intake, eliminating nocturnal sodium-dense meals, and shifting the majority of daily potassium and fluid intake into the daylight active phase accelerates daytime natriuresis [4, 5]. This restores normal diurnal sodium kinetics, allowing systemic arterial pressure to drop naturally during sleep, resurrecting the physiological dipping pattern and protecting against target organ injury [4, 5].',
              'সময়ানুগ পুষ্টিবিজ্ঞান (Chrono-nutrition) এই জটিল সমস্যা নিরাময়ে বিশেষ ভূমিকা রাখে [৪, ৫]। রাতের বেলা লবণাক্ত খাবার পুরোপুরি বন্ধ করে দিনের শুরুর দিকে পর্যাপ্ত পটাশিয়াম ও পানি গ্রহণ করলে দিনের আলো থাকতেই কিডনি সমস্ত বাড়তি লবণ বের করে দেয় [৪, ৫]। এর ফলে রাতে শরীর শান্ত হতে পারে এবং ঘুমের সময় রক্তচাপ স্বাভাবিক নিয়মে কমে গিয়ে হার্ট ও মস্তিষ্ককে দীর্ঘায়ু দান করে [৪, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Resolvin & Protectin Biochemistry: Active Plaque Inflammation Resolution', '৫. রিজলভিন ও প্রোটেকটিন বিজ্ঞান: প্লাকের প্রদাহের সক্রিয় নিরাময়'),
          paragraphs: [
            l(
              'A foundational paradigm shift in vascular biology, pioneered by Charles Serhan at Harvard Medical School, established that the termination of acute and chronic inflammation is not a passive decay process, but an active, genetically coordinated biochemical program mediated by Specialized Pro-Resolving Mediators (SPMs) [1, 6]. In the arterial wall, chronic plaque progression and fibrous cap thinning are primarily driven by resolution failure: an intrinsic defect in the local biosynthesis of SPMs that leaves pro-inflammatory cytokine and chemokine cascades permanently unchecked [1, 6].',
              'হার্ভার্ড মেডিকেল স্কুলের বিজ্ঞানী চার্লস সেরহানের যুগান্তকারী আবিষ্কার প্রমাণ করেছে যে রক্তনালির প্রদাহ নিরাময় কোনো নিষ্ক্রিয় বিষয় নয়; এটি মূলত শরীরের বিশেষ কিছু উপাদানের (Specialized Pro-Resolving Mediators বা SPM) মাধ্যমে চালিত একটি অত্যন্ত সক্রিয় ও সুসংহত জৈব-রাসায়নিক প্রক্রিয়া [১, ৬]। রক্তনালিতে চর্বির প্লাক ফেটে যাওয়ার মূল কারণ হলো এই নিরাময় ব্যবস্থার ব্যর্থতা, যার ফলে প্লাকের ভেতরের প্রদাহ কখনোই শান্ত হতে পারে না [১, ৬]।'
            ),
            l(
              'Specialized Pro-Resolving Mediators are biosynthesized enzymatically from long-chain polyunsaturated fatty acids through coordinated lipoxygenase cascades (15-LOX, 5-LOX, and 12-LOX) [6]. Eicosapentaenoic acid (EPA; 20:5 n-3) serves as the obligate substrate for the E-series Resolvins (RvE1, RvE2, RvE3) [6]. Docosahexaenoic acid (DHA; 22:6 n-3) is enzymatically converted into D-series Resolvins (RvD1 through RvD6), Protectins (PD1/NPD1), and Maresins (MaR1, MaR2) [6]. Docosapentaenoic acid (n-3 DPA) similarly yields 13-series resolvins (RvT) [6].',
              'এই নিরাময়কারী উপাদানগুলো মূলত সামুদ্রিক মাছে থাকা ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA এবং DHA) থেকে বিশেষ এনজাইমের মাধ্যমে তৈরি হয় [৬]। ইপিএ থেকে তৈরি হয় রিজলভিন-ই সিরিজ এবং ডিএইচএ থেকে তৈরি হয় রিজলভিন-ডি সিরিজ, প্রোটেকটিন এবং মেরিসিন [৬]। এই আণবিক উপাদানগুলো রক্তনালির প্রদাহের আগুন নেভাতে শরীরের সবচেয়ে শক্তিশালী প্রাকৃতিক অগ্নিনির্বাপক হিসেবে কাজ করে [৬]।'
            ),
            l(
              'At nanomolar and picomolar concentrations, SPMs exert profound protective actions on vascular cell biology [6]. RvE1 binds to the G-protein coupled receptor ChemR23 (ERV1) on macrophages, arresting neutrophil trans-endothelial migration and potently stimulating the non-phlogistic phagocytosis of apoptotic foam cells (efferocytosis) [6]. RvD1 and RvD2 act through ALX/FPR2 and GPR32 (DRV1) receptors on endothelial cells, downregulating VCAM-1 and ICAM-1 expression and suppressing NF-kB activation [6]. Furthermore, Maresin 1 (MaR1) suppresses matrix metalloproteinase-9 (MMP-9) synthesis while stimulating vascular smooth muscle collagen deposition, reinforcing the fibrous cap to prevent plaque rupture [1, 6].',
              'অতি ক্ষুদ্র মাত্রাতেও এই ওমেগা-৩ উপাদানগুলো অবিশ্বাস্য কার্যক্ষমতা প্রদর্শন করে [৬]। এরা রক্তনালির দেয়ালে নতুন করে শ্বেত রক্তকণিকার আক্রমণ বন্ধ করে দেয় এবং মৃত ফোম কোষগুলোকে দ্রুত পরিষ্কার করে ফেলে [৬]। একই সাথে এরা রক্তনালির কোষগুলোর প্রদাহ বন্ধ করে দেয় এবং কোলাজেন ফাইবার তৈরি বাড়িয়ে প্লাকের ওপর একটি শক্ত ও মজবুত আবরণ তৈরি করে যাতে প্লাক কখনোই ফেটে না যায় [১, ৬]।'
            ),
            l(
              'In clinical atherosclerosis, advanced plaques exhibit profound SPM deficiency paired with an elevated ratio of pro-inflammatory leukotriene B4 (LTB4) to RvD1 [1, 6]. Dietary intervention with marine omega-3 fatty acids (high-dose purified EPA/DHA, 2 to 4 g/day) directly restores intimal SPM biosynthesis [6]. In clinical trials, omega-3 supplementation significantly increased fibrous cap thickness, reduced necrotic core volume, and normalized the LTB4:SPM ratio, transforming vulnerable, rupture-prone plaques into stable, quiescent lesions [1, 6].',
              'হৃদরোগের রোগীদের ক্ষেত্রে প্লাকের ভেতরে এই নিরাময়কারী উপাদানের মারাত্মক ঘাটতি দেখা যায় [১, ৬]। কিন্তু প্রতিদিন খাদ্যতালিকায় সামুদ্রিক মাছের বিশুদ্ধ ওমেগা-৩ ফ্যাটি অ্যাসিড (দৈনিক ২ থেকে ৪ গ্রাম) যুক্ত করলে প্লাকের ভেতর এই প্রতিরক্ষামূলক রিজলভিন তৈরি বহুগুণ বেড়ে যায় [৬]। গবেষণায় প্রমাণিত যে ওমেগা-৩ প্লাকের পাতলা আবরণকে শক্ত ও পুরু করে তোলে এবং যে কোনো সময় হার্ট অ্যাটাক হওয়ার ঝুঁকি পুরোপুরি নির্মূল করে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Research Frontiers & Precision Lipidology', '৬. আধুনিক গবেষণা ও নির্ভুল লিপিডোলজি'),
          paragraphs: [
            l(
              'The frontiers of cardiovascular medicine are being reshaped by precision lipidology, driven by advanced nuclear magnetic resonance (NMR) spectroscopy and multi-omics profiling [1, 2]. Traditional lipid panels—measuring only total cholesterol, triglycerides, HDL-C, and calculated LDL-C via the Friedewald equation—fail to capture true atherogenic particle burden in millions of individuals, particularly those with type 2 diabetes, metabolic syndrome, or elevated Lipoprotein(a) [2].',
              'আধুনিক কার্ডিওভাসকুলার বিজ্ঞান এখন নির্ভুল লিপিডোলজির (Precision Lipidology) দিকে এগিয়ে চলেছে, যেখানে সাধারণ রক্ত পরীক্ষার বদলে এনএমআর (NMR) স্পেকট্রোস্কোপির মাধ্যমে রক্ত পরীক্ষা করা হয় [১, ২]। সনাতন কোলেস্টেরল পরীক্ষা ডায়াবেটিস বা মেটাবলিক সিন্ড্রোমের রোগীদের আসল ঝুঁকি ধরতে পারে না, কারণ তাদের কোলেস্টেরল স্বাভাবিক দেখালেও রক্তে কোটি কোটি ক্ষতিকর ক্ষুদ্র কণা ঘুরে বেড়ায় [২]।'
            ),
            l(
              'Lipoprotein(a) [Lp(a)] has emerged as an independent, genetically determined, causal risk factor for ASCVD and calcific aortic valve stenosis [2]. Lp(a) consists of an LDL particle covalently linked via a single disulfide bond to a highly polymorphic glycoprotein, Apolipoprotein(a) [apo(a)] [2]. Apo(a) contains multiple repeating kringle IV (KIV) domains, with copy number variation in KIV type 2 determining particle size and inverse circulating concentration [2]. Lp(a) exerts triple atherothrombotic toxicity: ApoB-mediated subendothelial retention, high oxidized phospholipid (OxPL) content driving vascular inflammation, and structural homology to plasminogen that inhibits fibrinolysis and promotes thrombosis [1, 2].',
              'লাইপোপ্রোটিন(এ) বা Lp(a) হৃদরোগের একটি অত্যন্ত মারাত্মক জন্মগত ও বংশগত কারণ হিসেবে প্রমাণিত হয়েছে [২]। এটি একটি সাধারণ এলডিএল কণার সাথে অতিরিক্ত একটি Apo(a) প্রোটিন যুক্ত হয়ে গঠিত হয় [২]। এই কণাটি রক্তনালির প্রাচীরে দ্বিগুণ গতিতে আটকে যায়, তীব্র প্রদাহ সৃষ্টি করে এবং রক্ত জমাট বাঁধার গতি বাড়িয়ে মারাত্মক ব্লকেজ সৃষ্টি করে [১, ২]।'
            ),
            l(
              'While circulating Lp(a) concentrations are >80% genetically determined and largely resistant to standard dietary interventions, nutritional status significantly modulates its downstream pathogenicity [2, 6]. Mediterranean diets rich in polyphenols and marine omega-3 fatty acids directly quench the oxidized phospholipids carried by Lp(a), attenuating its pro-inflammatory signaling on endothelial cells and preventing aortic valve calcification [6]. Concurrently, reducing background ApoB particles through strict saturated fat substitution reduces the cumulative atherogenic particle burden in patients with elevated Lp(a) [2, 6].',
              'যদিও এই Lp(a) এর মাত্রা ৮০ শতাংশই বংশগত কারণে নির্ধারিত হয়, কিন্তু সঠিক পুষ্টি থেরাপির মাধ্যমে এর বিষাক্ত প্রভাব সম্পূর্ণ নিষ্ক্রিয় করা সম্ভব [২, ৬]। ভূমধ্যসাগরীয় খাবারের পলিফেনল এবং ওমেগা-৩ এই Lp(a) কণার গায়ে থাকা বিষাক্ত জারিত চর্বিগুলোকে নিস্ক্রিয় করে দেয় এবং রক্তনালি ও হার্টের ভাল্বকে শক্ত হওয়া থেকে শতভাগ রক্ষা করে [২, ৬]।'
            ),
            l(
              'Ultimately, the translation of these cutting-edge insights cements the foundational doctrine of modern cardiovascular dietetics: nutritional therapy is not an imprecise lifestyle recommendation, but an exact, molecularly targeted clinical intervention capable of remodeling lipoprotein particle kinetics, restoring endothelial enzymatic integrity, and arresting atherogenesis at every stage of the vascular disease continuum [1, 2, 5, 6].',
              'সবশেষে আধুনিক আণবিক বিজ্ঞান প্রমাণ করেছে যে পুষ্টি থেরাপি কোনো সাধারণ উপদেশ নয়; এটি একটি সুনির্দিষ্ট আণবিক চিকিৎসা যা রক্তে ক্ষতিকর কণার সংখ্যা কমিয়ে, রক্তনালির নাইট্রিক অক্সাইড পুনরুদ্ধার করে এবং উচ্চ রক্তচাপ দূর করে মানবদেহের সবচেয়ে সংবেদনশীল অঙ্গ হৃৎপিণ্ডকে আজীবন সুরক্ষিত রাখতে সক্ষম [১, ২, ৫, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why does dietary substitution of saturated fatty acids (palmitic, myristic) with polyunsaturated and monounsaturated fatty acids dramatically accelerate the clearance of circulating ApoB-containing lipoproteins?',
      'খাবারে ক্ষতিকর সম্পৃক্ত চর্বির বদলে অসম্পৃক্ত চর্বি (PUFA ও MUFA) খেলে তা কোন সুনির্দিষ্ট আণবিক প্রক্রিয়ায় রক্ত থেকে ক্ষতিকর ApoB কণাগুলোকে দ্রুত পরিষ্কার করে ফেলে?'
    ),
    options: [
      l(
        'PUFAs increase hepatocyte ER membrane fluidity, stimulating SCAP-mediated SREBP-2 Golgi trafficking to upregulate LDL receptor (LDLR) transcription while suppressing PCSK9-mediated receptor degradation.',
        'অসম্পৃক্ত চর্বি লিভার কোষের মেমব্রেন নমনীয় করে SREBP-2 সক্রিয় করে প্রচুর নতুন এলডিএল রিসেপ্টর তৈরি করে এবং PCSK9 কমিয়ে রিসেপ্টর ধ্বংস হওয়া বন্ধ করে দেয়।'
      ),
      l(
        'PUFAs bind directly to circulating ApoB particles and precipitate them out of the blood into urine.',
        'অসম্পৃক্ত চর্বি সরাসরি ApoB কণার সাথে যুক্ত হয়ে প্রস্রাবের মাধ্যমে বের করে দেয়।'
      ),
      l(
        'PUFAs permanently inhibit pancreatic lipase, preventing all dietary fat from entering the bloodstream.',
        'অসম্পৃক্ত চর্বি অগ্ন্যাশয়ের চর্বি পরিপাককারী এনজাইম পুরোপুরি বন্ধ করে দেয়।'
      ),
      l(
        'PUFAs degrade endothelial proteoglycans completely so that no lipoproteins can touch blood vessel walls.',
        'অসম্পৃক্ত চর্বি রক্তনালির সমস্ত তন্তু ধ্বংস করে দেয় যাতে কোনো চর্বি না জমে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Saturated fatty acids rigidify hepatocyte endoplasmic reticulum membranes, impeding SCAP/SREBP-2 escort to the Golgi and suppressing LDLR transcription, while simultaneously upregulating PCSK9 to destroy existing receptors. Substituting SFAs with fluid PUFAs and MUFAs restores ER fluidity, promotes SREBP-2 cleavage, upregulates cell-surface LDLR density, and downregulates PCSK9, accelerating the receptor-mediated endocytosis of circulating ApoB particles and halving their plasma half-life.',
      'সম্পৃক্ত চর্বি লিভারের ঝিল্লিকে শক্ত করে রিসেপ্টর তৈরির মাস্টার সুইচ বন্ধ করে এবং PCSK9 বাড়িয়ে রক্ত থেকে কোলেস্টেরল পরিষ্কারের গতি অর্ধেকে নামিয়ে আনে। সম্পৃক্ত চর্বি বদলে অসম্পৃক্ত চর্বি খেলে ঝিল্লি নমনীয় হয়, SREBP-2 প্রচুর নতুন এলডিএল রিসেপ্টর তৈরি করে এবং PCSK9 কমে যাওয়ায় রক্ত থেকে ক্ষতিকর ApoB কণা নিমেষেই লিভারের ভেতরে শোষিত হয়ে পরিষ্কার হয়ে যায়।'
    ),
  },
}
