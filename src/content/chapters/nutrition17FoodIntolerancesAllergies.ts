import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const allergyRefs = [
  {
    id: 'sicherer-jaci-food-allergy',
    authors: 'Scott H. Sicherer, Hugh A. Sampson',
    title: 'Food allergy: A review and update on epidemiology, pathogenesis, diagnosis, prevention, and management',
    organization: 'Journal of Allergy and Clinical Immunology',
    year: 2018,
    url: 'https://doi.org/10.1016/j.jaci.2017.11.003',
    doi: '10.1016/j.jaci.2017.11.003',
  },
  {
    id: 'misselwitz-gut-lactose-malabsorption',
    authors: 'Benjamin Misselwitz et al.',
    title: 'Update on lactose malabsorption and intolerance: pathogenesis, diagnosis and clinical management',
    organization: 'Gut',
    year: 2019,
    url: 'https://doi.org/10.1136/gutjnl-2019-318404',
    doi: '10.1136/gutjnl-2019-318404',
  },
  {
    id: 'lebwohl-lancet-celiac-disease',
    authors: 'Benjamin Lebwohl, David S. Sanders, Peter H. R. Green',
    title: 'Coeliac disease',
    organization: 'The Lancet',
    year: 2018,
    url: 'https://doi.org/10.1016/S0140-6736(17)31796-8',
    doi: '10.1016/S0140-6736(17)31796-8',
  },
  {
    id: 'sollid-nat-rev-celiac-immunology',
    authors: 'Ludvig M. Sollid, Bana Jabri',
    title: 'Triggers and drivers of autoimmunity: lessons from coeliac disease',
    organization: 'Nature Reviews Immunology',
    year: 2013,
    url: 'https://doi.org/10.1038/nri3407',
    doi: '10.1038/nri3407',
  },
  {
    id: 'shan-science-33mer-gliadin',
    authors: 'Lu Shan et al.',
    title: 'Structural basis for gluten intolerance in celiac sprue',
    organization: 'Science',
    year: 2002,
    url: 'https://doi.org/10.1126/science.1074129',
    doi: '10.1126/science.1074129',
  },
  {
    id: 'galli-nat-med-mast-cells-ige',
    authors: 'Stephen J. Galli, Mindy Tsai',
    title: 'IgE and mast cells in allergic disease',
    organization: 'Nature Medicine',
    year: 2012,
    url: 'https://doi.org/10.1038/nm.2755',
    doi: '10.1038/nm.2755',
  },
  {
    id: 'catassi-nutrients-ncgs-consensus',
    authors: 'Carlo Catassi et al.',
    title: 'Diagnosis of Non-Celiac Gluten Sensitivity (NCGS): The Salerno Experts\' Consensus',
    organization: 'Nutrients',
    year: 2015,
    url: 'https://doi.org/10.3390/nu7064966',
    doi: '10.3390/nu7064966',
  },
]

export const nutrition17FoodIntolerancesAllergiesLesson: LessonTopic = {
  id: 'topic.nutrition.food-intolerances-celiac-allergy',
  slug: 'food-intolerances-celiac-allergy',
  version: 1,
  updatedAt: '2026-10-25',
  title: l(
    '17 · Food Intolerances, Non-Celiac Gluten Sensitivity, Celiac Disease & Food Allergies',
    '১৭ · খাদ্যের অসহনশীলতা, নন-সিলিয়াক গ্লুটেন সংবেদনশীলতা, সিলিয়াক রোগ ও খাদ্য অ্যালার্জি'
  ),
  summary: l(
    'Differential immunopathology of food-induced adverse reactions: genetic lactase persistence (MCM6/LCT C/T-13910), IgE-mediated Type I hypersensitivity and mast cell degranulation, HLA-DQ2/8 autoimmune Celiac enteropathy with tTG-2 deamidation, and wheat ATI innate activation in non-celiac sensitivity.',
    'খাদ্যজনিত প্রতিকূল প্রতিক্রিয়ার রোগপ্রতিরোধগত ও বংশগত ভিত্তি: ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব (MCM6/LCT C/T-13910), আইজিই-নির্ভর প্রথম ধরনের অ্যালার্জি ও মাস্ট সেল ক্ষরণ, এইচএলএ-ডিকিউ২/৮ নির্ভর সিলিয়াক রোগ ও টিটিজি-২ রূপান্তর, এবং নন-সিলিয়াক গমের সংবেদনশীলতা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-25',
  objectives: [
    l(
      'Differentiate non-immune food intolerances, IgE-mediated food allergies, and autoimmune food-triggered enteropathies based on molecular pathophysiology and diagnostic testing.',
      'অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা, আইজিই-নির্ভর অ্যালার্জি এবং অটোইমিউন এন্টারোপ্যাথির আণবিক পার্থক্য ও রোগ নির্ণয় পদ্ধতি ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Describe the molecular genetics of lactase persistence (MCM6 C/T-13910 polymorphism) and the physiological consequences of brush-border lactase-phlorizin hydrolase decline.',
      'ল্যাকটেজ জিনের বংশগত রূপান্তর (MCM6 C/T-13910) এবং এন্টারোসাইট ব্রাশ-বর্ডার ল্যাকটেজ হ্রাসের অন্ত্রীয় ফলাফল বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Detail the immunopathogenesis of Celiac Disease: 33-mer gliadin peptide resistance, tTG-2 deamidation, HLA-DQ2.5/8 binding, CD4+ Th1 activation, and IL-15/NKG2D enterocyte cytotoxicity.',
      'সিলিয়াক রোগের অনাক্রম্য প্রক্রিয়া: ৩৩-মার গ্লিয়াডিনের অবিকৃত থাকা, টিটিজি-২ ডিঅ্যামিডেশন, এইচএলএ-ডিকিউ২.৫ বন্ধন, টিএইচ১ সক্রিয়করণ এবং আইএল-১৫/এনকেজি২ডি কোষ ধ্বংস ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Formulate evidence-based clinical management strategies: strict gluten-free diet adherence, epinephrine autoinjector action in anaphylaxis, and structured hydrogen breath test interpretation.',
      'প্রমাণভিত্তিক চিকিৎসা রূপরেখা: শতভাগ গ্লুটেন-মুক্ত খাদ্যাভ্যাস, অ্যানাফিল্যাক্সিসে এপিনেফ্রিনের আণবিক ক্রিয়া এবং হাইড্রোজেন ব্রেথ টেস্টের ফলাফল বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.gut-barrier-mucosal-immunity', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.nutrition.gut-microbiome-metagenomics', 'topic.anatomy.digestive'],
  references: allergyRefs,
  evidenceBySection: {
    introduction: ['sicherer-jaci-food-allergy', 'misselwitz-gut-lactose-malabsorption'],
    structure: ['misselwitz-gut-lactose-malabsorption', 'lebwohl-lancet-celiac-disease'],
    mechanism: ['sollid-nat-rev-celiac-immunology', 'shan-science-33mer-gliadin'],
    integration: ['galli-nat-med-mast-cells-ige', 'catassi-nutrients-ncgs-consensus'],
    practice: ['sicherer-jaci-food-allergy', 'lebwohl-lancet-celiac-disease'],
    takeaways: ['sicherer-jaci-food-allergy', 'sollid-nat-rev-celiac-immunology'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Adverse Food Reactions: Classification & Molecular Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল আণবিক ধারণা'), sectionId: 'introduction' },
      { id: 'sec-lactase', label: l('2. Lactase Persistence Genetics & Breath Testing Kinetics', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'), sectionId: 'structure' },
      { id: 'sec-celiac', label: l('3. Celiac Immunopathology: 33-mer Gliadin & HLA-DQ2.5/8', '৩. সিলিয়াক রোগ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5/8 অটোইমিউনিটি'), sectionId: 'mechanism' },
      { id: 'sec-ige', label: l('4. IgE Anaphylaxis & Non-Celiac Wheat Sensitivity (NCGS)', '৪. আইজিই অ্যানাফিল্যাক্সিস ও নন-সিলিয়াক গমের সংবেদনশীলতা'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Clinical Workup, Serology & The Gluten-Free Diet', '৫. ক্লিনিক্যাল রোগ নির্ণয়, সেরোলজি ও গ্লুটেন-মুক্ত খাদ্যবিধি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Lactase-Phlorizin Hydrolase (LPH)', 'ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH)'),
        definition: l(
          'A beta-galactosidase brush-border glycoprotein anchored in duodenal and jejunal enterocytes that hydrolyzes dietary lactose into D-glucose and D-galactose.',
          'ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে অবস্থিত একটি বিটা-গ্যালাক্টোসিডেজ এনজাইম যা দুধের ল্যাকটোজকে গ্লুকোজ ও গ্যালাক্টোজে ভেঙে শোষণযোগ্য করে তোলে।'
        ),
      },
      {
        term: l('Tissue Transglutaminase 2 (tTG-2)', 'টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2)'),
        definition: l(
          'A calcium-dependent cross-linking enzyme that converts neutral glutamine residues in gliadin peptides into negatively charged glutamic acid, accelerating high-affinity HLA-DQ2.5 electrostatic binding.',
          'একটি ক্যালসিয়াম-নির্ভর এনজাইম যা গ্লিয়াডিন পেপটাইডের নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে সিলিয়াক রোগের অনাক্রম্য প্রতিক্রিয়া তীব্র করে।'
        ),
      },
      {
        term: l('HLA-DQ2.5 & HLA-DQ8 Heterodimers', 'এইচএলএ-ডিকিউ২.৫ ও এইচএলএ-ডিকিউ৮ হেটেরোডাইমার'),
        definition: l(
          'MHC Class II heterodimers whose positively charged basic P4, P6, P7, and P9 anchor pockets accommodate negatively charged deamidated gliadin epitopes with extreme affinity for presentation to CD4+ T helper cells.',
          'প্রধান হিস্টোকম্প্যাটিবিলিটি ক্লাস ২ অণু, যার ধনাত্মক খাঁজে ঋণাত্মক গ্লিয়াডিন শক্তিশালীভাবে আটকে টি-সহায়ক কোষের কাছে উপস্থাপিত হয়।'
        ),
      },
      {
        term: l('Fc-epsilon-RI Cross-linking', 'Fc-অ্যাপসিলন-RI রিসেপ্টর বন্ধন'),
        definition: l(
          'The high-affinity IgE receptor complex on mast cells and basophils that triggers explosive cytosolic calcium influx, Lyn/Syk kinase activation, and granule exocytosis upon bivalent allergen binding.',
          'মাস্ট সেল ও ব্যাসোফিলের অতি-সংবেদনশীল রিসেপ্টর যা অ্যালার্জেন যুক্ত হওয়ার সাথে সাথে ক্যালসিয়াম বাড়িয়ে হিস্টামিন ও প্রোস্টাগ্ল্যান্ডিন ক্ষরণ ঘটায়।'
        ),
      },
      {
        term: l('Non-Celiac Wheat Sensitivity (NCGS)', 'নন-সিলিয়াক গমের সংবেদনশীলতা (NCGS)'),
        definition: l(
          'A clinical syndrome characterized by intestinal and extra-intestinal symptoms following wheat ingestion in the absence of Celiac disease autoimmunity or IgE-mediated wheat allergy, driven largely by innate immune triggers such as amylase-trypsin inhibitors (ATIs) and fermentable fructans.',
          'সিলিয়াক রোগ বা আইজিই অ্যালার্জি ছাড়াই গম খাওয়ার পর পেট ফাঁপা বা অন্যান্য শারীরিক সমস্যা দেখা দেওয়ার অবস্থা, যা মূলত অন্ত্রের জন্মগত প্রতিরোধ ব্যবস্থার উদ্দীপনার কারণে ঘটে।'
        ),
      },
      {
        term: l('Amylase-Trypsin Inhibitors (ATIs)', 'অ্যামাইলেজ-ট্রিপসিন ইনহিবিটর (ATIs)'),
        definition: l(
          'Non-gluten pest-resistance proteins present in wheat, barley, and rye that resist gastrointestinal enzymatic proteolysis and ligate Toll-like receptor 4 (TLR4) on intestinal myeloid dendritic cells, triggering pro-inflammatory cytokine release.',
          'গমের ভেতর থাকা প্রোটিন যা কীটপ্রতিরোধী হিসেবে কাজ করে এবং মানুষের অন্ত্রে TLR4 রিসেপ্টরকে উত্তেজিত করে প্রদাহ সৃষ্টি করতে পারে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Diagnostic Workup of Suspected Celiac Disease vs Non-Celiac Wheat Sensitivity',
          'সিলিয়াক ডিজিজ বনাম নন-সিলিয়াক গমের সংবেদনশীলতা নির্ণয়ের ক্লিনিক্যাল বিশ্লেষণ'
        ),
        steps: [
          l(
            'Step 1: Clinical Presentation & Baseline Evaluation: A 28-year-old female presents with refractory microcytic iron-deficiency anemia (hemoglobin 9.8 g/dL, serum ferritin 7 ng/mL), postprandial meteorism, recurrent aphthous stomatitis, and intermittent watery diarrhea. Suspecting a food intolerance, she asks whether she should immediately adopt a gluten-free diet.',
            'ধাপ ১: রোগীর লক্ষণ ও প্রাথমিক মূল্যায়ন: ২৮ বছর বয়সী এক নারী দীর্ঘস্থায়ী রক্তাল্পতা (হিমোগ্লোবিন ৯.৮ g/dL, সিরাম ফেরিটিন ৭ ng/mL), খাওয়ার পর পেট ফাঁপা, মুখে ঘন ঘন ঘা এবং পাতলা পায়খানার সমস্যা নিয়ে এসেছেন। তিনি নিজে থেকেই আটা বা গ্লুটেন খাওয়া বন্ধ করতে চাচ্ছেন।'
          ),
          l(
            'Step 2: Mandatory Pre-Diet Serological Panel: The clinician strictly advises the patient NOT to eliminate gluten prior to diagnostic workup, because dietary withdrawal normalizes antibody titers and precipitates false-negative results. The clinician orders total serum IgA (to screen for selective IgA deficiency) alongside anti-tissue transglutaminase IgA (anti-tTG IgA).',
            'ধাপ ২: খাদ্যাভ্যাস পরিবর্তনের পূর্বেই রক্ত পরীক্ষা: চিকিৎসক রোগীকে খাবার পরিবর্তনের আগেই পরীক্ষা করার নির্দেশ দেন, কারণ গ্লুটেন বন্ধ করলে অ্যান্টিবডি কমে গিয়ে রিপোর্ট ভুলভাবে স্বাভাবিক আসতে পারে। মোট সিরাম আইজিএ এবং অ্যান্টি-টিটিজি আইজিএ পরীক্ষা করা হলো।'
          ),
          l(
            'Step 3: Serological & Endoscopic Confirmation: Anti-tTG IgA returns markedly elevated (>100 U/mL, >10 times the upper reference limit). Diagnostic esophagogastroduodenoscopy (EGD) with 4 biopsies from the second part of the duodenum and 2 from the duodenal bulb demonstrates Marsh IIIc total villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis (>40 IELs per 100 enterocytes).',
            'ধাপ ৩: বায়োপসি ও রোগ নিশ্চিতকরণ: রক্তে অ্যান্টি-টিটিজি ১০ গুণের বেশি পজিটিভ এল। এন্ডোস্কোপি করে ক্ষুদ্রান্ত্রের বায়োপসি নিয়ে মাইক্রোস্কোপে দেখা গেল অন্ত্রের শোষণকারী ভিলি সম্পূর্ণ সমতল হয়ে ধ্বংস হয়ে গেছে (Marsh IIIc)। সিলিয়াক রোগ নিশ্চিত হলো।'
          ),
          l(
            'Step 4: Prescription of Lifelong Gluten-Free Diet & Surveillance: The patient is placed on a strict lifelong gluten-free diet (<20 ppm gluten threshold). At 6-month follow-up, gastrointestinal symptoms resolve completely, hemoglobin normalizes to 12.8 g/dL, and follow-up anti-tTG IgA titers decline to 8 U/mL, confirming robust mucosal recovery.',
            'ধাপ ৪: আজীবন গ্লুটেন-মুক্ত পথ্য ও সুস্থতা: রোগীকে আজীবন ১০০% গ্লুটেন-মুক্ত খাবার গ্রহণের পরামর্শ দেওয়া হলো (<২০ পিপিএম)। ৬ মাস পর রোগীর সমস্ত পেটের সমস্যা দূর হলো, রক্তে হিমোগ্লোবিন স্বাভাবিক মাত্রায় ফিরে এল এবং অ্যান্টিবডি কমে স্বাভাবিক হয়ে অন্ত্রের নিরাময় নিশ্চিত করল।'
          ),
        ],
        conclusion: l(
          'Testing prior to gluten withdrawal prevents false-negative serologies and distinguishes lifelong autoimmune Celiac disease requiring absolute strictness from transient non-celiac sensitivities.',
          'খাবার বন্ধ করার আগেই অ্যান্টিবডি পরীক্ষা করলে রোগ ভুলভাবে বাদ পড়ার ঝুঁকি থাকে না এবং আজীবন অটোইমিউন সিলিয়াক ও সাধারণ অসহনশীলতার সঠিক পার্থক্য নির্ণয় হয়।'
        ),
      },
      {
        title: l(
          'Hydrogen Breath Test Interpretation & Meal Matrix Titration in Lactase Deficiency',
          'হাইড্রোজেন শ্বাস পরীক্ষা বিশ্লেষণ ও ল্যাকটোজ অসহনশীলতায় খাদ্য ব্যবস্থাপনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Suspicion & Baseline Breath Hydrogen: A 34-year-old male experiences audible borborygmi, explosive diarrhea, and abdominal distension 45 to 90 minutes after consuming dairy products. The patient presents for a diagnostic Hydrogen Breath Test (HBT) following an overnight fast. Baseline end-expiratory breath hydrogen measures 4 ppm (normal baseline <10 ppm).',
            'ধাপ ১: প্রাথমিক শ্বাস পরীক্ষা: ৩৪ বছর বয়সী এক ব্যক্তি দুধ বা দুগ্ধজাত খাবার খাওয়ার ১ ঘণ্টার মধ্যে পেটে তীব্র শব্দ, পেট ফাঁপা এবং ডায়রিয়ায় ভোগেন। খালি পেটে তাঁর প্রাথমিক শ্বাস পরীক্ষায় হাইড্রোজেনের মাত্রা ৪ পিপিএম পাওয়া গেল।'
          ),
          l(
            'Step 2: Standardized 25g Lactose Challenge Kinetics: The patient is administered an oral challenge of 25 grams of lactose dissolved in 250 mL of water (equivalent to the disaccharide content of 500 mL of milk). Serial end-expiratory breath samples collected every 15 minutes demonstrate hydrogen levels of 6 ppm at 15 min, 12 ppm at 30 min, 34 ppm at 60 min, and 52 ppm at 90 min.',
            'ধাপ ২: ল্যাকটোজ গ্রহণের পর পর্যবেক্ষণ: রোগীকে ২৫ গ্রাম ল্যাকটোজ শরবত খাওয়ানো হলো। প্রতি ১৫ মিনিট পর পর শ্বাস পরীক্ষায় হাইড্রোজেনের মাত্রা দেখা গেল ৩০ মিনিটে ১২, ৬০ মিনিটে ৩৪ এবং ৯০ মিনিটে ৫২ পিপিএমে উঠে গেল।'
          ),
          l(
            'Step 3: Diagnostic Criterion Fulfillment: The diagnostic threshold for lactose malabsorption is defined as a sustained rise in breath hydrogen of >20 ppm above baseline accompanied by clinical symptoms. The patient\'s peak rise of +48 ppm at 90 minutes with concurrent abdominal cramping establishes unequivocal primary lactase deficiency.',
            'ধাপ ৩: রোগ নিশ্চিতকরণ: প্রাথমিক মানের চেয়ে ২০ পিপিএম বেশি হাইড্রোজেন উৎপন্ন হলে এবং পেটে লক্ষণ দেখা দিলে ল্যাকটোজ অপশোষণ নিশ্চিত হয়। রোগীর ক্ষেত্রে মাত্রা ৪৮ পিপিএম বৃদ্ধি পাওয়ায় ল্যাকটেজ এনজাইমের ঘাটতি সুনিশ্চিত হলো।'
          ),
          l(
            'Step 4: Evidence-Based Dietary Management: Rather than imposing complete dairy avoidance—which risks severe dietary calcium and riboflavin deficiencies—the clinician instructs the patient to consume dairy within mixed meals containing lipids and proteins. Hard aged cheeses (cheddar, parmesan with <0.1g lactose) and fermented yogurt with live endogenous beta-galactosidases are permitted, alongside oral lactase enzyme tablets when consuming liquid milk.',
            'ধাপ ৪: বিজ্ঞানসম্মত পুষ্টি পরামর্শ: দুধ সম্পূর্ণ বন্ধ করলে শরীরে ক্যালসিয়ামের অভাব হতে পারে, তাই ভারী খাবারের সাথে অল্প দুধ বা চিজ (যাতে ল্যাকটোজ থাকে না বললেই চলে) খাওয়ার পরামর্শ দেওয়া হলো। এতে রোগী কোনো কষ্ট ছাড়াই দুধের সমস্ত পুষ্টি গ্রহণ করতে সক্ষম হলেন।'
          ),
        ],
        conclusion: l(
          'Integrating meal matrix slowing of gastric emptying with endogenous microbial lactase utilization allows lactase non-persistent adults to maintain bone-protective calcium intake without provoking gastrointestinal distress.',
          'খাবারের চর্বি ও আমিষ পাকস্থলী খালি হওয়ার গতি কমিয়ে দেয় বলে ল্যাকটোজ একবারে অন্ত্রে প্রবেশ করতে পারে না; ফলে ল্যাকটোজ অসহনশীল ব্যক্তিরাও পেটের কোনো সমস্যা ছাড়াই প্রয়োজনীয় ক্যালসিয়াম গ্রহণ করতে পারেন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does tissue transglutaminase 2 (tTG-2) deamidation exponentially increase the immunogenicity of dietary gluten in HLA-DQ2.5 positive individuals?',
          'টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2) কীভাবে গ্লিয়াডিনকে রূপান্তরিত করে HLA-DQ2.5 পজিটিভ ব্যক্তিদের দেহে মারাত্মক অনাক্রম্য আক্রমণ তৈরি করে?'
        ),
        answer: l(
          'Dietary gluten contains high fractions of glutamine and proline. The primary HLA-DQ2.5 peptide-binding groove possesses positively charged basic residues at the P4, P6, P7, and P9 anchor pockets. Native neutral glutamine residues in gliadin fit poorly into these pockets. tTG-2 catalyzes a calcium-dependent post-translational deamidation that converts neutral glutamine into negatively charged glutamic acid. The resulting negative charge forms stable, high-affinity electrostatic salt bridges with the basic HLA-DQ2.5 pockets, dramatically enhancing presentation to CD4+ T helper cells and triggering robust Th1 inflammatory cascades.',
          'গ্লুটেনে প্রচুর গ্লুটামিন থাকে যা বিদ্যুৎ নিরপেক্ষ হওয়ায় HLA-DQ2.5 এর ধনাত্মক খাঁজে সহজে আটকায় না। tTG-2 এনজাইম ক্যালসিয়ামের সহায়তায় এই নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে। এই ঋণাত্মক আধান HLA-DQ2.5 এর ধনাত্মক অংশের সাথে শক্তিশালী আয়নিক বন্ধন তৈরি করে টি-সহায়ক কোষের কাছে প্রবলভাবে উপস্থাপিত হয় এবং প্রদাহের সৃষ্টি করে।'
        ),
      },
      {
        question: l(
          'What physiological mechanism explains why lactase non-persistent individuals can often tolerate up to 12 grams of lactose (approximately 250 mL of milk) when consumed alongside a mixed meal?',
          'ল্যাকটোজ অসহনশীল ব্যক্তিরা একটি ভারী খাবারের সাথে এক গ্লাস দুধ (প্রায় ১২ গ্রাম ল্যাকটোজ) খেলে কোনো লক্ষণ ছাড়াই কেন তা হজম করতে পারেন?'
        ),
        answer: l(
          'A mixed meal containing dietary lipids, complex proteins, and soluble fibers stimulates the release of cholecystokinin (CCK) and Peptide YY (PYY), which activate the ileal brake and substantially decelerate gastric emptying. The slowed gastric emptying delivers lactose into the duodenum at a markedly reduced rate per unit time. This gradual transit allows residual brush-border lactase to hydrolyze a higher percentage of the substrate and permits the distal colonic microbiome to adaptively metabolize unabsorbed lactose without exceeding osmotic or gas-handling thresholds.',
          'ভারী খাবারের চর্বি ও আমিষ পাকস্থলী খালি হওয়ার গতিকে অনেক কমিয়ে দেয় (CCK ও PYY হরমোনের মাধ্যমে)। এর ফলে দুধের ল্যাকটোজ একবারে অন্ত্রে না গিয়ে ফোঁটায় ফোঁটায় ধীরে ধীরে ক্ষুদ্রান্ত্রে প্রবেশ করে। এতে অবশিষ্ট সামান্য ল্যাকটেজ এনজাইমই তা হজম করে ফেলে এবং বৃহদন্ত্রের জীবাণুও আকস্মিক অতিরিক্ত গ্যাস তৈরি করার সুযোগ পায় না।'
        ),
      },
      {
        question: l(
          'What molecular mechanism differentiates Non-Celiac Wheat Sensitivity (NCGS) from Celiac Disease and classical IgE-mediated wheat allergy?',
          'নন-সিলিয়াক গমের সংবেদনশীলতা (NCGS) কীভাবে সিলিয়াক ডিজিজ এবং সাধারণ আইজিই খাদ্য অ্যালার্জি থেকে পৃথক?'
        ),
        answer: l(
          'Celiac disease is characterized by adaptive autoimmune enteropathy driven by HLA-DQ2/8 presentation of deamidated gliadin, autoantibodies against tTG-2, and total villous atrophy. IgE-mediated wheat allergy involves allergen cross-linking of Fc-epsilon-RI on mast cells and acute anaphylaxis. In contrast, NCGS lacks tTG-2 autoantibodies, HLA-DQ restriction, and villous atrophy. Instead, non-gluten wheat components such as Amylase-Trypsin Inhibitors (ATIs) ligate Toll-like receptor 4 (TLR4) on myeloid dendritic cells and macrophages, triggering innate mucosal cytokine release (IL-8, TNF-alpha) and systemic fatigue without autoimmune tissue destruction.',
          'সিলিয়াক রোগে অটোঅ্যান্টিবডির মাধ্যমে অন্ত্রের ভিলি সম্পূর্ণ ধ্বংস হয়ে যায়, আর গমের অ্যালার্জিতে আইজিই অ্যান্টিবডি তীব্র শ্বাসকষ্ট বা চুলকানি ঘটায়। কিন্তু নন-সিলিয়াক গমের সংবেদনশীলতায় কোনো অটোঅ্যান্টিবডি তৈরি হয় না বা ভিলি নষ্ট হয় না; বরং গমের বিশেষ কিছু প্রোটিন (ATIs) সরাসরি অন্ত্রের রোগপ্রতিরোধ কোষের TLR4 রিসেপ্টরকে উত্তেজিত করে সাময়িক প্রদাহ ও পেট ফাঁপা সৃষ্টি করে।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'Sequential differential pathways of non-immune lactase enzymology, IgE mast cell degranulation, and HLA-DQ2.5 autoimmune enteropathy.',
      'অ-প্রতিরোধমূলক ল্যাকটেজ ঘাটতি, আইজিই-নির্ভর মাস্ট সেল ক্ষরণ এবং সিলিয়াক অটোইমিউন ভিলি ধ্বংসের ধারাবাহিক ধাপসমূহ।'
    ),
    steps: [
      l(
        'Step 1: Food Antigen Exposure: Ingestion of dairy disaccharides (lactose), wheat storage proteins (gluten), or food allergens initiates mucosal contact with enterocyte brush borders and immune surveillance.',
        'ধাপ ১: খাদ্য উপাদানের সংস্পর্শ: দুধের চিনি ল্যাকটোজ, গমের গ্লুটেন কিংবা অ্যালার্জেন খাদ্য উপাদান গ্রহণের পর অন্ত্রের প্রাচীর ও প্রতিরোধ ব্যবস্থার মুখোমুখি হয়।'
      ),
      l(
        'Step 2: Differential Processing: In lactase deficiency, intact disaccharides create an osmotic pull; in Celiac, 33-mer gliadin traverses the epithelial barrier and is deamidated by calcium-dependent tTG-2 into negatively charged epitopes.',
        'ধাপ ২: ভিন্নধর্মী শারীরবৃত্তীয় প্রতিক্রিয়া: ল্যাকটেজের অভাবে অপাচ্য চিনি পানি টানে; আর সিলিয়াক রোগে ৩৩-মার গ্লিয়াডিন দেয়াল ভেদ করে ঢুকলে tTG-2 এনজাইম একে ঋণাত্মক কণিকায় পরিণত করে।'
      ),
      l(
        'Step 3: Immune Engagement: Deamidated gliadin docks in basic pockets of HLA-DQ2.5 on dendritic cells, activating CD4+ Th1 cells and driving IL-15 cytotoxic enterocyte apoptosis; in allergy, multivalent allergens cross-link IgE on mast cells.',
        'ধাপ ৩: রোগপ্রতিরোধ কোষের সক্রিয়তা: পরিবর্তিত গ্লিয়াডিন HLA-DQ2.5 এর খাঁজে বসে টি-কোষ ও ঘাতক লিম্ফোসাইট দিয়ে অন্ত্রের ভিলি ধ্বংস করে; আর অ্যালার্জিতে অ্যালার্জেন মাস্ট সেলের IgE যুক্ত করে।'
      ),
      l(
        'Step 4: Clinical Manifestation: Lactase non-persistence produces osmotic gas and diarrhea; Celiac disease results in malabsorption and nutrient deficiencies; IgE cross-linking triggers explosive anaphylactic histamine release.',
        'ধাপ ৪: শারীরিক বহিঃপ্রকাশ: ল্যাকটেজের অভাবে গ্যাস ও ডায়রিয়া হয়; সিলিয়াকে পুষ্টিহীনতা ও রক্তাল্পতা দেখা দেয়; আর খাদ্য অ্যালার্জিতে রক্তচাপ কমে তাৎক্ষণিক অ্যানাফিল্যাক্টিক শক দেখা দেয়।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 'food-adverse-reactions-immunopathology',
    title: l(
      'Adverse Food Reactions: Molecular & Immunological Pathways',
      'খাদ্যজনিত বিরূপ প্রতিক্রিয়া: আণবিক ও অনাক্রম্যতাতত্ত্বীয় গতিপথ'
    ),
    description: l(
      'Interactive architecture comparing non-immune lactase enzymology, IgE mast-cell degranulation, and HLA-DQ2/8 autoimmune Celiac enteropathy.',
      'অ-প্রতিরোধমূলক ল্যাকটেজ এনজাইমের ক্রিয়া, আইজিই-নির্ভর মাস্ট সেল ক্ষরণ এবং এইচএলএ-ডিকিউ২/৮ চালিত অটোইমিউন সিলিয়াক রোগের তুলনামূলক চিত্র।'
    ),
    disclaimer: l(
      'Educational immunological simulation; suspected Celiac disease or food allergies require formal clinical laboratory evaluation.',
      'অনাক্রম্যতাতত্ত্বীয় শিক্ষামূলক সিমুলেশন; যেকোনো খাদ্যজনিত জটিলতায় বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।'
    ),
    svgType: 'food-adverse-reactions',
    items: [
      {
        id: 'node-lph',
        label: l('Lactase Deficiency', 'ল্যাকটেজ ঘাটতি'),
        description: l(
          'Absence of MCM6 C/T-13910 enhancer allele leads to brush-border LPH decline, luminal lactose accumulation, osmotic diarrhea, and colonic bacterial H2 gas generation.',
          'MCM6 C/T-13910 রূপান্তর না থাকলে ল্যাকটেজ উৎপাদন কমে গিয়ে অন্ত্রে অতিরিক্ত পানি ও ব্যাকটেরিয়াল গাঁজনে হাইড্রোজেন গ্যাস তৈরি হয়।'
        ),
        details: l(
          'Lactase-phlorizin hydrolase downregulation prevents disaccharide cleavage into glucose and galactose, creating high osmotic luminal loads and microbial fermentation.',
          'ল্যাকটেজ এনজাইম কমে গেলে ল্যাকটোজ না ভেঙে অন্ত্রে পানি টানে এবং বৃহদন্ত্রের ব্যাকটেরিয়ার গাঁজনে হাইড্রোজেন ও মিথেন গ্যাস তৈরি করে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-ttg2',
        label: l('tTG-2 Deamidation', 'tTG-2 ডিঅ্যামিডেশন'),
        description: l(
          'Indigestible 33-mer gliadin traverses the epithelial barrier; calcium-dependent tTG-2 converts neutral glutamine into negatively charged glutamic acid.',
          'অবিকৃত ৩৩-মার গ্লিয়াডিন অন্ত্রের প্রাচীর পার হলে tTG-2 এনজাইম নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে।'
        ),
        details: l(
          'Calcium-dependent tissue transglutaminase 2 deamidates glutamine residues at Q65 and Q72, engineering high-affinity electrostatic docking into basic HLA-DQ2.5 pockets.',
          'tTG-2 এনজাইম গ্লুটামিনকে ঋণাত্মক গ্লুটামিক অ্যাসিডে রূপান্তর করে, যা HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী আয়নিক বন্ধনে আটকে যায়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-hladq2',
        label: l('HLA-DQ2.5 / CD4+ T Cells', 'HLA-DQ2.5 ও CD4+ টি-কোষ'),
        description: l(
          'Negatively charged deamidated gliadin fits into basic pockets of HLA-DQ2.5 on dendritic cells, activating CD4+ Th1 cells to release IFN-gamma and IL-21.',
          'রূপান্তরিত ঋণাত্মক গ্লিয়াডিন HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তভাবে আটকে গিয়ে CD4+ টি-কোষকে তীব্র প্রদাহ সৃষ্টির নির্দেশ দেয়।'
        ),
        details: l(
          'Dendritic presentation of deamidated gliadin drives massive Th1 clonal expansion and high-level IFN-gamma production in the lamina propria.',
          'ডেনড্রাইটিক কোষ পরিবর্তিত গ্লিয়াডিন উপস্থাপন করে ল্যামিনা প্রোপ্রিয়ায় বিপুল পরিমাণ প্রদাহ সৃষ্টিকারী ইন্টারফেরন-গামা তৈরি করে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-cytotoxicity',
        label: l('IL-15 / IEL Cytotoxicity', 'IL-15 ও ঘাতক লিম্ফোসাইট'),
        description: l(
          'Enterocyte-derived IL-15 upregulates NKG2D on intraepithelial lymphocytes; cytotoxic engagement of enterocyte MICA/MICB drives apoptotic Marsh 3 villous atrophy.',
          'অন্ত্রের কোষ থেকে ক্ষরিত IL-15 ঘাতক কোষকে সক্রিয় করে এবং ভিলি কোষগুলোকে আক্রমণ করে সম্পূর্ণ সমতল ও ধ্বংস করে দেয়।'
        ),
        details: l(
          'IL-15 induces intraepithelial cytotoxic killer reprogramming; perforin and granzyme B release causes widespread enterocyte apoptosis and total villous blunting.',
          'IL-15 ঘাতক লিম্ফোসাইট তৈরি করে যা পারফোরিন ও গ্র্যানজাইম বিষ ঢেলে অন্ত্রের ভিলি পুরোপুরি ধ্বংস করে চরম শোষণহীনতা তৈরি করে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-ige-anaphylaxis',
        label: l('IgE / Fc-epsilon-RI Shock', 'IgE ও মাস্ট সেল ক্ষরণ'),
        description: l(
          'Allergen cross-linking of bivalent IgE on mast cells triggers explosive histamine and cysteinyl leukotriene release, driving vasodilatory anaphylactic shock.',
          'অ্যালার্জেন সরাসরি মাস্ট সেলের গায়ের IgE এর সাথে যুক্ত হয়ে বিপুল হিস্টামিন ও লিউকোট্রিয়েন বের করে শ্বাসকষ্ট ও অ্যানাফিল্যাক্সিস ঘটায়।'
        ),
        details: l(
          'Multivalent food proteins cross-link membrane-bound IgE/Fc-epsilon-RI complexes, triggering Syk kinase, calcium surge, and degranulation of histamine and LTC4/LTD4.',
          'অ্যালার্জেন প্রোটিন পাশাপাশি দুটি IgE যুক্ত করে ক্যালসিয়াম বাড়িয়ে কয়েক মিনিটের মধ্যে হিস্টামিন ও লিউকোট্রিয়েন ক্ষরণ ঘটিয়ে রক্তচাপ কমায় ও শ্বাসরোধ করে।'
        ),
        color: '#06b6d4',
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
          heading: l('1. Adverse Food Reactions: Classification & Molecular Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল আণবিক ধারণা'),
          paragraphs: [
            l(
              'Adverse reactions to food represent a diverse spectrum of clinical disorders that affect millions of individuals worldwide [1, 2]. Within clinical immunology and medical nutrition therapy, these conditions are rigorously partitioned into three distinct mechanistic categories: non-immune food intolerances, IgE-mediated food allergies, and autoimmune food-triggered enteropathies [1, 3]. Distinguishing between these classifications is of paramount importance because their underlying pathophysiology, risk of life-threatening complications, and dietary management strategies diverge completely [1, 2].',
              'খাবার খাওয়ার পর শরীরে দেখা দেওয়া বিরূপ প্রতিক্রিয়া চিকিৎসাবিজ্ঞানের এক অত্যন্ত গুরুত্বপূর্ণ অধ্যায় [১, ২]। পুষ্টিবিজ্ঞান ও ক্লিনিক্যাল অনাক্রম্যতাতত্ত্বে এই প্রতিক্রিয়াগুলোকে মূলত তিনটি স্পষ্ট ভাগে ভাগ করা হয়: অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা (Food Intolerance), আইজিই-নির্ভর খাদ্য অ্যালার্জি (Food Allergy), এবং খাদ্যজনিত অটোইমিউন রোগ যেমন সিলিয়াক ডিজিজ (Celiac Disease) [১, ৩]। এই তিনটি বিভাগের মধ্যকার সঠিক পার্থক্য নির্ণয় করা অপরিহার্য, কারণ এদের কার্যপদ্ধতি, প্রাণঘাতী ঝুঁকির মাত্রা এবং চিকিৎসা পরিকল্পনা সম্পূর্ণ আলাদা [১, ২]।'
            ),
            l(
              'Food intolerances are non-immunological adverse reactions that arise predominantly from digestive enzyme deficiencies, pharmacological sensitivity to bioactive food compounds, or transport defects in the intestinal mucosa [1, 2]. The quintessential example of an enzyme deficiency is primary lactase deficiency, wherein intestinal expression of lactase-phlorizin hydrolase declines after weaning [2]. Food intolerances are characterized by dose-dependent symptoms: small quantities of the offending food can typically be consumed without triggering distress, and systemic anaphylaxis never occurs [1, 2]. Symptoms are largely confined to the gastrointestinal tract, including bloating, cramping, and osmotic diarrhea [2].',
              'খাদ্য অসহনশীলতা কোনো রোগপ্রতিরোধ সংক্রান্ত সমস্যা নয়; এটি মূলত খাবার পরিপাকের এনজাইমের অভাব, খাদ্যের রাসায়নিক উপাদানের প্রতি সংবেদনশীলতা বা শোষণজনিত ত্রুটির কারণে ঘটে [১, ২]। এর সবচেয়ে সাধারণ উদাহরণ হলো ল্যাকটোজ অসহনশীলতা, যেখানে দুধের চিনি ল্যাকটোজ ভাঙার এনজাইম শরীরে কমে যায় [২]। খাদ্য অসহনশীলতার লক্ষণগুলো সম্পূর্ণভাবে খাবারের পরিমাণের ওপর নির্ভর করে: সামান্য পরিমাণে খেলে সাধারণত কোনো কষ্ট হয় না এবং এতে কখনো রক্তচাপ কমে যাওয়া বা শ্বাসকষ্টের মতো প্রাণঘাতী অ্যালার্জি হয় না [১, ২]। এর লক্ষণগুলো মূলত পেটের ভেতরেই সীমাবদ্ধ থাকে, যেমন পেট ফাঁপা, গ্যাস ও পাতলা পায়খানা [২]।'
            ),
            l(
              'In sharp contrast, classical food allergy represents an immune-mediated Type I immediate hypersensitivity reaction triggered by harmless food glycoproteins (such as peanut vicilin, egg ovalbumin, or cow\'s milk casein) [1, 6]. In sensitized individuals, minute microgram quantities of an allergen can trigger systemic mast cell degranulation, precipitating explosive vasodilation, bronchospasm, and life-threatening anaphylactic shock within minutes [1, 6]. Because of this binary, all-or-nothing threshold, patients with confirmed IgE-mediated food allergies require absolute, zero-tolerance dietary elimination and must carry an emergency epinephrine autoinjector at all times [1, 6].',
              'বিপরীতে, প্রকৃত খাদ্য অ্যালার্জি হলো মানবদেহের অনাক্রম্য ব্যবস্থার একটি অতি-সংবেদনশীল মারাত্মক প্রতিক্রিয়া, যা খাবারের নির্দোষ প্রোটিনের বিরুদ্ধে ঘটে [১, ৬]। অ্যালার্জিতে আক্রান্ত ব্যক্তির শরীরে সামান্য কয়েক মিলিগ্রাম খাবার প্রবেশ করার সাথে সাথেই মাস্ট সেল থেকে প্রচুর হিস্টামিন নিঃসৃত হয়ে রক্তনালী প্রসারিত করে দেয় এবং শ্বাসনালী বন্ধ করে নিমেষেই মারাত্মক অ্যানাফিল্যাক্টিক শক তৈরি করতে পারে [১, ৬]। তাই খাদ্য অ্যালার্জির ক্ষেত্রে সামান্যতম ছাড় দেওয়াও অসম্ভব; রোগীকে সেই খাবার আজীবনের জন্য শতভাগ বর্জন করতে হয় এবং সাথে জরুরি এপিনেফ্রিন ইনজেকশন রাখতে হয় [১, ৬]।'
            ),
            l(
              'Autoimmune enteropathies, exemplified by Celiac Disease, occupy a unique pathophysiological category bridging dietary triggers and chronic systemic autoimmunity [3, 4]. Unlike food allergies, Celiac disease is not mediated by IgE and does not cause immediate anaphylaxis; rather, dietary gluten peptides trigger an adaptive Th1 immune cascade and intraepithelial cytotoxic destruction that flattens small intestinal absorptive villi [3, 4]. Concurrently, plasma cells produce autoantibodies targeting the endogenous enzyme tissue transglutaminase 2 (tTG-2) [3, 4]. Recognizing these distinct paradigms prevents dangerous diagnostic errors and ensures appropriate, evidence-based nutritional prescriptions [1, 3].',
              'অটোইমিউন এন্টারোপ্যাথি, যার প্রধান উদাহরণ হলো সিলিয়াক ডিজিজ, সাধারণ অ্যালার্জি ও অসহনশীলতা থেকে সম্পূর্ণ ভিন্ন এক রোগ [৩, ৪]। সিলিয়াক রোগে কোনো তাৎক্ষণিক অ্যানাফিল্যাক্সিস হয় না; বরং গমের গ্লুটেন খাওয়ার ফলে অন্ত্রের নিজস্ব রোগপ্রতিরোধ ব্যবস্থা উত্তেজিত হয়ে অন্ত্রের খাদ্য শোষণকারী ভিলিগুলোকে সম্পূর্ণ ধ্বংস করে ফেলে [৩, ৪]। একই সাথে রক্তে শরীরের নিজস্ব tTG-2 এনজাইমের বিরুদ্ধে অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]। এই তিনটি ভিন্ন সমস্যাকে স্পষ্টভাবে বুঝতে পারলে ভুল চিকিৎসার হাত থেকে রোগীকে শতভাগ রক্ষা করা সম্ভব [১, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Lactase Persistence Genetics & Breath Testing Kinetics', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'),
          paragraphs: [
            l(
              'The molecular genetics and physiology of lactose digestion illustrate a landmark evolutionary adaptation in human nutrition [2]. Lactose is a disaccharide consisting of D-galactose and D-glucose linked by a beta(1->4) glycosidic bond [2]. Dietary lactose cannot be absorbed intact by enterocytes; it requires enzymatic cleavage at the apical brush border by lactase-phlorizin hydrolase (LPH), a membrane-anchored beta-galactosidase [2]. In the majority of human populations worldwide (~68% of adults), intestinal transcription of the lactase gene (*LCT*) is genetically programmed to downregulate after the weaning period, a physiological state termed lactase non-persistence (adult-type hypolactasia) [2].',
              'ল্যাকটোজ হজম করার ক্ষমতা মানব জাতির বিবর্তনের এক অপূর্ব নিদর্শন [২]। ল্যাকটোজ হলো গ্যালাক্টোজ এবং গ্লুকোজ অণুর সমন্বয়ে গঠিত একটি ডাইস্যাকারাইড যা বিটা(১->৪) বন্ধন দ্বারা যুক্ত থাকে [২]। মানবদেহের অন্ত্রের কোষ সরাসরি ল্যাকটোজ শোষণ করতে পারে না; ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে থাকা ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH) নামক বিশেষ এনজাইমের মাধ্যমে এটি ভেঙে গ্লুকোজ ও গ্যালাক্টোজে পরিণত হয় [২]। বিশ্বের বেশিরভাগ প্রাপ্তবয়স্ক মানুষের শরীরে (প্রায় ৬৮%) শৈশব পার হওয়ার পর প্রাকৃতিকভাবেই এই ল্যাকটেজ এনজাইমের উৎপাদন নাটকীয়ভাবে কমে যায়, যাকে ল্যাকটেজ নন-পারসিস্টেন্স বলা হয় [২]।'
            ),
            l(
              'The persistence of high lactase expression into adulthood is an evolutionary trait driven by pastoral dairy farming over the last 10,000 years [2]. The *LCT* gene on chromosome 2q21 does not harbor mutations in its coding region; instead, lactase persistence is determined by single-nucleotide polymorphisms located in an upstream regulatory enhancer within intron 13 of the adjacent *MCM6* gene [2]. In European lineages, the C/T-13910 polymorphism alters the enhancer sequence to create a high-affinity binding site for the transcription factor OCT-1, preserving robust lifelong *LCT* transcription [2]. In East African pastoralist populations, convergent evolutionary mutations (such as G/C-14010 and T/G-13915) independently achieve persistent lactase expression [2].',
              'প্রাপ্তবয়স্ক অবস্থাতেও দুধ হজমের ক্ষমতা বজায় থাকা মূলত গত দশ হাজার বছরের পশুপালন ও দুগ্ধ চাষের সাথে জড়িত বিবর্তনীয় রূপান্তর [২]। ২ নম্বর ক্রোমোজোমে থাকা ল্যাকটেজ জিনে কোনো সরাসরি রূপান্তর ঘটে না; বরং এর পাশের *MCM6* জিনের ১৩ নম্বর ইন্ট্রনের ভেতরে থাকা বিশেষ নিয়ন্ত্রক অংশে একটি একক নিউক্লিওটাইডের পরিবর্তন (C/T-13910 পলিমরফিজম) ঘটে [২]। এই পরিবর্তনের ফলে OCT-1 নামক জিন নিয়ন্ত্রক প্রোটিন সেখানে শক্তভাবে বসে সারা জীবন প্রচুর ল্যাকটেজ এনজাইম তৈরি অব্যাহত রাখে [২]। আফ্রিকার কিছু যাযাবর জাতিতেও একইভাবে সমান্তরাল বিবর্তনের মাধ্যমে ভিন্ন কিছু মিউটেশন আজীবন ল্যাকটেজ উৎপাদন সচল রাখে [২]।'
            ),
            l(
              'When lactase non-persistent individuals ingest lactose, the unhydrolyzed disaccharide cannot traverse enterocyte apical membranes, exerting a potent osmotic force that draws water into the small intestinal lumen [2]. The expanded luminal fluid volume accelerates peristaltic transit, propelling dissolved lactose rapidly into the cecum and ascending colon [2]. Here, colonic anaerobic bacteria (including Bifidobacterium, Bacteroides, and Clostridium) ferment the disaccharide via the glycolytic pathway, producing short-chain fatty acids (acetate, propionate, butyrate) along with massive volumes of gases: hydrogen (H2), carbon dioxide (CO2), and, in some individuals, methane (CH4) [2, 5].',
              'ল্যাকটেজের ঘাটতি থাকা ব্যক্তি দুধ খেলে হজম না হওয়া ল্যাকটোজ অন্ত্রের লুমেনে শক্তিশালী অস্মোটিক টানের সৃষ্টি করে দেহ থেকে প্রচুর পানি অন্ত্রে টেনে নেয় [২]। এই অতিরিক্ত পানির চাপে খাবার দ্রুত বৃহদন্ত্রে গিয়ে পৌঁছায় [২]। বৃহদন্ত্রের অ্যানেরোবিক ব্যাকটেরিয়ারা এই ল্যাকটোজকে দ্রুত গাঁজন করে প্রচুর পরিমাণে অ্যাসিটেট ও বিউটাইরেট তৈরির পাশাপাশি বিপুল পরিমাণ হাইড্রোজেন, কার্বন ডাই অক্সাইড ও মিথেন গ্যাস তৈরি করে [২, ৫]। এই গ্যাসের কারণেই তীব্র পেট ফাঁপা, পেটে ভুটভাট শব্দ ও পাতলা পায়খানা শুরু হয় [২]।'
            ),
            l(
              'The non-invasive diagnosis of lactose malabsorption relies on the standardized Hydrogen Breath Test (HBT) [2, 5]. Because human cellular metabolism produces no hydrogen gas, any hydrogen detected in expired alveolar air originates exclusively from bacterial anaerobic fermentation in the gut [5]. Following an oral challenge of 25 grams of lactose, expired breath hydrogen is measured every 15 to 30 minutes over 3 hours [5]. A sustained increase in breath hydrogen of >20 ppm above fasting baseline accompanied by gastrointestinal symptoms establishes the diagnosis of lactose malabsorption [2, 5]. In patients harboring methanogenic archaea (*Methanobrevibacter smithii*), hydrogen is stoichiometrically consumed to synthesize methane, necessitating simultaneous breath methane measurement (>10 ppm diagnostic rise) to prevent false-negative evaluations [5].',
              'ল্যাকটোজ অপশোষণ নির্ণয়ের সবচেয়ে নির্ভরযোগ্য ও ব্যথাহীন পরীক্ষা হলো হাইড্রোজেন ব্রেথ টেস্ট (HBT) [২, ৫]। মানুষের কোনো দেহকোষ কখনো হাইড্রোজেন গ্যাস তৈরি করে না; নিঃশ্বাসে পাওয়া সমস্ত হাইড্রোজেন গ্যাস শুধুমাত্র অন্ত্রের ব্যাকটেরিয়ার গাঁজন থেকে তৈরি হয় [৫]। রোগীকে ২৫ গ্রাম ল্যাকটোজ খাওয়ানোর পর ৩ ঘণ্টা ধরে প্রতি ১৫-৩০ মিনিট পর পর নিঃশ্বাসের বাতাস পরীক্ষা করা হয় [৫]। যদি প্রাথমিক মানের চেয়ে ২০ পিপিএমের বেশি হাইড্রোজেন বাড়ে এবং পেটে সমস্যা দেখা দেয়, তবে ল্যাকটোজের অপশোষণ নিশ্চিত হয় [২, ৫]। যাদের পেটে মিথেন তৈরি করার জীবাণু থাকে, তাদের ক্ষেত্রে হাইড্রোজেন মিথেনে রূপান্তরিত হয়ে যায় বলে মিথেন গ্যাসও একসাথে পরিমাপ করা বাধ্যতামূলক [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Celiac Immunopathology: 33-mer Gliadin & HLA-DQ2.5/8', '৩. সিলিয়াক রোগ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5/8 অটোইমিউনিটি'),
          paragraphs: [
            l(
              'Celiac disease is a systemic autoimmune disorder induced by dietary gluten in genetically susceptible individuals expressing human leukocyte antigen (HLA) Class II molecules DQ2 or DQ8 [3, 4]. Gluten represents the water-insoluble storage protein fraction of wheat, barley, and rye, comprising alcohol-soluble gliadins and alcohol-insoluble glutenins [3, 4]. The primary amino acid sequence of gluten is exceptionally rich in proline (~15%) and glutamine (~35%) residues [4]. Because human gastric pepsin and pancreatic endopeptidases lack catalytic active sites capable of cleaving peptide bonds adjacent to proline residues, gluten proteins undergo incomplete gastrointestinal proteolysis, yielding bulky, digestion-resistant oligopeptides [4, 5].',
              'সিলিয়াক রোগ হলো একটি দীর্ঘস্থায়ী অটোইমিউন রোগ যা জিনগতভাবে সংবেদনশীল মানুষের দেহে গ্লুটেনযুক্ত খাবার (গম, বার্লি ও রাই) খাওয়ার ফলে সৃষ্টি হয় [৩, ৪]। গ্লুটেন হলো এসব খাদ্যশস্যের প্রধান প্রোটিন, যা গ্লিয়াডিন ও গ্লুটেনিন নামক দুটি অংশের সমন্বয়ে গঠিত [৩, ৪]। এই গ্লুটেন প্রোটিনে প্রচুর পরিমাণে প্রোলিন ও গ্লুটামিন অ্যামিনো অ্যাসিড থাকে [৪]। মানুষের পাকস্থলীর পেপসিন ও অগ্ন্যাশয়ের এনজাইমগুলো প্রোলিনের পাশে থাকা রাসায়নিক বন্ধন ভাঙতে পারে না, যার ফলে গ্লুটেন প্রোটিন সম্পূর্ণ না ভেঙে কিছু দীর্ঘ ও অবিকৃত পেপটাইড খণ্ড হিসেবে অন্ত্রে অবশিষ্ট থেকে যায় [৪, ৫]।'
            ),
            l(
              'The premier immunogenic driver of Celiac disease is the alpha-gliadin 33-mer peptide (residues 56-88: LQLQPFPQPQLPYPQPQLPYPQPQLPYPQPQPF) [4, 5]. Containing three overlapping T-cell epitope motifs, this 33-amino acid peptide traverses the small intestinal epithelial barrier via paracellular pathways during transient barrier disruption or via transcellular retrotranscytosis protected by secretory IgA [4, 5]. Upon entering the lamina propria, the 33-mer encounters tissue transglutaminase 2 (tTG-2), a calcium-dependent cross-linking enzyme released from stromal cells during cellular stress or mild inflammation [3, 4].',
              'সিলিয়াক রোগের সবচেয়ে শক্তিশালী আক্রমণকারী উপাদান হলো আলফা-গ্লিয়াডিনের ৩৩-মার পেপটাইড (33-mer gliadin) [৪, ৫]। ৩৩টি অ্যামিনো অ্যাসিডের এই বৃহৎ শিকলটি মানুষের পরিপাক রসে কোনোভাবেই নষ্ট হয় না এবং অন্ত্রের দুর্বল প্রাচীর ভেদ করে ল্যামিনা প্রোপ্রিয়ায় প্রবেশ করে [৪, ৫]। সেখানে এটি টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2) নামক একটি বিশেষ এনজাইমের মুখোমুখি হয়, যা সাধারণত কোষের আঘাত বা প্রদাহের সময় নিঃসৃত হয় [৩, ৪]।'
            ),
            l(
              'In the lamina propria, tTG-2 catalyzes a critical post-translational modification: the deamidation of neutral glutamine residues into negatively charged glutamic acid [3, 4]. This deamidation fundamentally alters the immunological charge landscape of the peptide [4]. The peptide-binding groove of the HLA-DQ2.5 heterodimer (encoded by DQA1*05:01 and DQB1*02:01) is lined with basic, positively charged amino acid residues at the P4, P6, P7, and P9 anchor pockets [3, 4]. While native neutral gliadin docks poorly into these pockets, deamidated gliadin fits with nanomolar affinity, forming stable electrostatic salt bridges that allow antigen-presenting dendritic cells to display the epitope with extreme efficiency to naive CD4+ T helper cells [3, 4].',
              'tTG-2 এনজাইম গ্লিয়াডিনের ওপর এক মারাত্মক রূপান্তর ঘটায়: এটি নিরপেক্ষ গ্লুটামিনকে ঋণাত্মক চার্জযুক্ত গ্লুটামিক অ্যাসিডে রূপান্তর করে ফেলে (ডিঅ্যামিডেশন) [৩, ৪]। সংবেদনশীল ব্যক্তিদের ডেনড্রাইটিক কোষের গায়ে থাকা HLA-DQ2.5 অণুর খাঁজগুলো ধনাত্মক চার্জযুক্ত অ্যামিনো অ্যাসিড দিয়ে তৈরি থাকে [৩, ৪]। নিরপেক্ষ অবস্থায় গ্লিয়াডিন এখানে আটকাতে না পারলেও, ঋণাত্মক চার্জে রূপান্তরিত হওয়ার পর এটি তীব্র আকর্ষণে ধনাত্মক খাঁজে শক্তভাবে আটকে যায় [৩, ৪]। ফলে ডেনড্রাইটিক কোষগুলো অত্যন্ত সফলভাবে এই ক্ষতিকর প্রোটিনটিকে CD4+ টি-সহায়ক কোষের সামনে তুলে ধরে মারাত্মক অনাক্রম্য আক্রমণ চালু করে দেয় [৩, ৪]।'
            ),
            l(
              'Antigen presentation triggers robust activation and clonal expansion of gluten-reactive CD4+ Th1 cells, which secrete high concentrations of pro-inflammatory Interferon-gamma (IFN-gamma) and Interleukin-21 (IL-21) [3, 4]. Concurrently, enterocytes stressed by viral triggers or gluten peptides upregulate Interleukin-15 (IL-15) and surface stress molecules (MICA and MICB) [3, 4]. IL-15 reprograms intraepithelial lymphocytes (IELs) into natural killer-like cytotoxic effector cells expressing NKG2D receptors [3, 4]. These cytotoxic IELs recognize MICA/MICB on enterocytes and release perforin and granzyme B, inducing massive enterocyte apoptosis that leads to total villous blunting (Marsh III villous atrophy), crypt hyperplasia, and catastrophic nutrient malabsorption [3, 4].',
              'অ্যান্টিজেন উপস্থাপিত হওয়ার সাথে সাথে টি-সহায়ক কোষগুলো বিপুল পরিমাণ প্রদাহ সৃষ্টিকারী ইন্টারফেরন-গামা (IFN-gamma) ক্ষরণ শুরু করে [৩, ৪]। একই সাথে অন্ত্রের ক্ষতিগ্রস্ত কোষগুলো ইন্টারলিউকিন-১৫ (IL-15) ক্ষরণ করে ঘাতক লিম্ফোসাইট কোষগুলোকে (IEL) ক্ষিপ্ত করে তোলে [৩, ৪]। এই ঘাতক কোষগুলো বিষাক্ত পারফোরিন ও গ্র্যানজাইম ঢেলে অন্ত্রের শোষণকারী ভিলি কোষগুলোকে পুরোপুরি হত্যা করে সমতল করে দেয় (Marsh III Villous Atrophy) [৩, ৪]। ভিলি ধ্বংস হয়ে যাওয়ায় খাদ্য থেকে আয়রন, ক্যালসিয়াম ও ভিটামিন শোষণ সম্পূর্ণরূপে বন্ধ হয়ে যায় এবং রোগী মারাত্মক অপুষ্টিতে ভোগে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. IgE Anaphylaxis & Non-Celiac Wheat Sensitivity (NCGS)', '৪. আইজিই অ্যানাফিল্যাক্সিস ও নন-সিলিয়াক গমের সংবেদনশীলতা'),
          paragraphs: [
            l(
              'While Celiac disease represents an autoimmune destruction of intestinal villi, IgE-mediated food allergy represents an acute, systemic mast-cell-driven crisis [1, 6]. Classic food allergens (peanuts, tree nuts, shellfish, cow\'s milk, hen\'s egg, wheat, soy, fish, and sesame) contain stable, water-soluble glycoproteins that cross intestinal mucosal barriers and bind to specific IgE antibodies pre-loaded onto high-affinity Fc-epsilon-RI receptors on resident mucosal and perivascular mast cells [1, 6]. In sensitized hosts, multivalent allergens cross-link adjacent IgE-receptor complexes, triggering rapid receptor clustering [6].',
              'সিলিয়াক রোগ যেখানে অন্ত্রের ভিলি ধ্বংসের অটোইমিউন প্রক্রিয়া, সেখানে আইজিই-নির্ভর খাদ্য অ্যালার্জি হলো মাস্ট সেল থেকে সৃষ্ট এক আকস্মিক ও তীব্র শারীরিক সংকট [১, ৬]। পরিচিত অ্যালার্জেন খাবারগুলো (বাদাম, চিংড়ি, দুধ, ডিম, গম) রক্তে প্রবেশ করে মাস্ট সেলের গায়ে থাকা Fc-epsilon-RI রিসেপ্টরের সাথে যুক্ত IgE অ্যান্টিবডির সাথে যুক্ত হয় [১, ৬]। অ্যালার্জেন প্রোটিন পাশাপাশি দুটি IgE অণুর সাথে যুক্ত হয়ে এদেরকে গুচ্ছবদ্ধ করে ফেলে [৬]। এর ফলে সেকেন্ডের মধ্যে কোষের ভেতর অ্যালার্জি সংকেত চালু হয়ে যায় [১, ৬]।'
            ),
            l(
              'Receptor cross-linking activates Lyn and Syk tyrosine kinases, driving the phosphorylation of the adaptor protein LAT and mobilizing phospholipase C-gamma (PLC-gamma) [6]. PLC-gamma hydrolyzes membrane phosphatidylinositol 4,5-bisphosphate (PIP2) into inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) [6]. IP3 triggers rapid calcium release from the endoplasmic reticulum, while DAG activates protein kinase C [6]. The resulting calcium surge drives SNARE-mediated fusion of secretory granules with the plasma membrane, releasing preformed vasoactive mediators within minutes: histamine, tryptase, heparin, and carboxypeptidase A3 [1, 6].',
              'এই গুচ্ছবদ্ধতা কোষের ভেতরে Lyn ও Syk এনজাইম সক্রিয় করে ফসফোলাইপেজ-সি (PLC-gamma) চালু করে দেয় [৬]। এটি কোষের ভেতরের ক্যালসিয়াম সঞ্চয় এক মুহূর্তেই মুক্ত করে সাইটোপ্লাজমে ক্যালসিয়ামের বন্যা বইয়ে দেয় [৬]। এই আকস্মিক ক্যালসিয়াম বৃদ্ধির ফলে মাস্ট সেলের ভেতরে আগে থেকে তৈরি থাকা বিষাক্ত দানাদার থলিগুলো ফেটে গিয়ে নিমেষেই প্রচুর হিস্টামিন, ট্রিপটেজ ও হেপারিন রক্তে ঢেলে দেয় [১, ৬]। কয়েক মিনিটের মধ্যেই রক্তনালীগুলো অস্বাভাবিক প্রসারিত হতে শুরু করে [৬]।'
            ),
            l(
              'Histamine binds to endothelial H1 receptors, inducing nitric oxide synthase and rapid venular dilation, while activating H2 receptors on vascular smooth muscle to cause systemic arterial hypotension [1, 6]. Simultaneously, phospholipase A2 liberates arachidonic acid to synthesize de novo lipid mediators: cysteinyl leukotrienes (LTC4, LTD4, LTE4) and prostaglandin D2 (PGD2) [6]. Leukotriene LTD4 is approximately 1,000-fold more potent than histamine in inducing bronchial smooth muscle constriction, driving acute laryngeal edema and bronchospasm in systemic anaphylaxis [1, 6]. Intramuscular epinephrine (0.01 mg/kg, maximum 0.5 mg in adults) injected into the anterolateral mid-thigh is the life-saving treatment of choice, engaging alpha-1 adrenergic receptors to reverse hypotension and beta-2 adrenergic receptors to relieve bronchospasm and halt further mast cell degranulation [1, 6].',
              'নিঃসৃত হিস্টামিন রক্তনালীর H1 ও H2 রিসেপ্টরে বসে রক্তচাপ শূন্যের কোঠায় নামিয়ে দেয় [১, ৬]। একই সাথে মাস্ট সেল লিউকোট্রিয়েন (LTC4, LTD4) তৈরি করে, যা হিস্টামিনের চেয়ে ১,০০০ গুণ বেশি শক্তিতে শ্বাসনালী সংকুচিত করে রোগীকে শ্বাসরোধ করে ফেলে [১, ৬]। এই জীবন-সংকটাপন্ন অবস্থায় থাইয়ের বাইরের অংশে মাংসপেশিতে তাৎক্ষণিক এপিনেফ্রিন (Epinephrine) ইনজেকশন দিতে হয়, যা রক্তচাপ বাড়িয়ে এবং শ্বাসনালী খুলে দিয়ে রোগীর নিশ্চিত মৃত্যু ঠেকায় [১, ৬]।'
            ),
            l(
              'In clinical practice, many patients experience gastrointestinal and extra-intestinal symptoms upon consuming wheat yet test negative for Celiac autoantibodies (anti-tTG IgA negative) and show normal duodenal architecture (no villous atrophy) without specific wheat IgE [7]. This distinct clinical syndrome is classified as Non-Celiac Wheat Sensitivity (NCGS) [7]. Rather than being driven by adaptive gluten immunity, NCGS is triggered by non-gluten wheat components, most prominently alpha-Amylase/Trypsin Inhibitors (ATIs) and fermentable fructans (FODMAPs) [7]. ATIs represent compact pest-defense proteins that survive gastric digestion and ligate Toll-like receptor 4 (TLR4) on intestinal myeloid dendritic cells, provoking innate mucosal cytokine secretion (IL-8, TNF-alpha) and low-grade systemic inflammation that resolves upon wheat withdrawal [7].',
              'ক্লিনিক্যাল ক্ষেত্রে এমন অনেক রোগী দেখা যায় যারা গম খাওয়ার পর পেটে সমস্যায় ভোগেন, কিন্তু রক্ত পরীক্ষায় সিলিয়াকের কোনো অ্যান্টিবডি থাকে না এবং অন্ত্রের ভিলিও সম্পূর্ণ অক্ষত থাকে [৭]। এই সমস্যাটিকে নন-সিলিয়াক গমের সংবেদনশীলতা (NCGS) বলা হয় [৭]। এটি কোনো গ্লুটেনজনিত অটোইমিউন রোগ নয়; বরং গমের মধ্যে থাকা অপাচ্য ফ্রুক্টান এবং অ্যামাইলেজ-ট্রিপসিন ইনহিবিটর (ATIs) নামক বিশেষ কিছু প্রোটিনের কারণে ঘটে [৭]। এই ATIs প্রোটিনগুলো অন্ত্রের রোগপ্রতিরোধ কোষের TLR4 রিসেপ্টরকে উত্তেজিত করে জন্মগত অনাক্রম্যতার মাধ্যমে সাময়িক প্রদাহ সৃষ্টি করে, যা গম পরিহার করলে পুরোপুরি সেরে যায় [৭]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Workup, Serology & The Gluten-Free Diet', '৫. ক্লিনিক্যাল রোগ নির্ণয়, সেরোলজি ও গ্লুটেন-মুক্ত খাদ্যবিধি'),
          paragraphs: [
            l(
              'The diagnostic workup of suspected Celiac disease requires strict adherence to evidence-based clinical algorithms to avoid irreversible misdiagnoses [3, 7]. The primary screening test of choice is the serum anti-tissue transglutaminase immunoglobulin A (anti-tTG IgA) antibody assay, which exhibits sensitivity and specificity exceeding 95% in untreated Celiac disease [3]. Crucially, the diagnostic panel MUST include simultaneous measurement of total serum IgA [3]. Selective IgA deficiency occurs in approximately 2% to 3% of Celiac patients (a 10- to 15-fold higher prevalence than in the general population) [3]. If an IgA-deficient patient is tested solely with anti-tTG IgA, the test will return falsely negative despite severe active enteropathy; in such cases, IgG-based serology (anti-tTG IgG or anti-deamidated gliadin peptide [DGP] IgG) must be substituted [3].',
              'সিলিয়াক রোগ নির্ণয়ে সঠিক ক্লিনিক্যাল নীতিমালা মেনে চলা বাধ্যতামূলক, অন্যথায় রোগ ভুলভাবে বাদ পড়ে রোগীর মারাত্মক ক্ষতি হতে পারে [৩, ৭]। প্রথম এবং প্রধান রক্ত পরীক্ষা হলো অ্যান্টি-টিটিজি আইজিএ (anti-tTG IgA), যার নির্ভুলতা ৯৫ শতাংশেরও বেশি [৩]। তবে এর সাথে অবশ্যই মোট সিরাম আইজিএ (Total IgA) পরীক্ষা করতে হবে [৩]। কারণ সিলিয়াক রোগীদের প্রায় ২-৩ শতাংশের শরীরে জন্মগতভাবেই আইজিএ অ্যান্টিবডি থাকে না [৩]। এই ঘাটতি থাকা অবস্থায় পরীক্ষা করলে তীব্র রোগ থাকা সত্ত্বেও রিপোর্ট নেগেটিভ আসবে; তাই আইজিএ কম থাকলে সাথে সাথে আইজিজি-ভিত্তিক (anti-tTG IgG) পরীক্ষা করাতে হয় [৩]।'
            ),
            l(
              'Under current adult gastroenterology guidelines, positive serology must be confirmed by diagnostic esophagogastroduodenoscopy (EGD) with oriented small bowel mucosal biopsies [3]. To account for the patchy nature of Celiac enteropathy, clinicians must obtain at least four biopsies from the second and third parts of the duodenum and at least two biopsies from the duodenal bulb [3]. Histopathological evaluation utilizes the modified Marsh-Oberhuber classification: Marsh 0 (pre-infiltrative normal mucosa), Marsh 1 (intraepithelial lymphocytosis >25-40 IELs per 100 enterocytes), Marsh 2 (crypt hyperplasia), and Marsh 3 (villous blunting, subclassified into 3a partial, 3b subtotal, and 3c total villous atrophy) [3, 4].',
              'প্রাপ্তবয়স্কদের ক্ষেত্রে রক্ত পরীক্ষার পর এন্ডোস্কোপি করে ক্ষুদ্রান্ত্রের বায়োপসি নেওয়া রোগ নিশ্চিত করার একমাত্র আন্তর্জাতিক মাপকাঠি [৩]। সিলিয়াক রোগ অন্ত্রের সব জায়গায় সমানভাবে ছড়ায় না বলে ডুওডেনাম থেকে কমপক্ষে ৪টি এবং ডুওডেনাল বাল্ব থেকে ২টি বায়োপসি নিতে হয় [৩]। মাইক্রোস্কোপে ভিলির ক্ষয় দেখে রোগটিকে মার্শ (Marsh) স্কেলে ভাগ করা হয়: লিম্ফোসাইট বৃদ্ধি পাওয়া (Marsh 1), ক্রিপ্ট বড় হওয়া (Marsh 2) এবং ভিলি সম্পূর্ণ সমতল হয়ে যাওয়া (Marsh 3) [৩, ৪]। Marsh 3 পাওয়া গেলে সিলিয়াক রোগ নিশ্চিত হয় [৩]।'
            ),
            l(
              'The sole effective, evidence-based therapy for Celiac disease is lifelong, strict adherence to a Gluten-Free Diet (GFD) [3, 7]. The Codex Alimentarius and FDA standard defines "gluten-free" as foods containing less than 20 parts per million (ppm) of gluten (<20 mg/kg), a threshold proven to prevent mucosal injury in over 95% of patients [3]. Dietary elimination requires removing all wheat (including spelt, kamut, farro), barley, rye, and triticale [3]. Pure, uncontaminated oats are tolerated by the majority of Celiac patients, but commercial oats are frequently cross-contaminated during milling and agricultural handling and must carry certified gluten-free labeling [3, 7]. Patients must also inspect processed foods and medications for hidden gluten binders, emulsifiers, and hydrolyzed wheat protein [7].',
              'সিলিয়াক রোগের একমাত্র বিজ্ঞানসম্মত চিকিৎসা হলো আজীবন ১০০% গ্লুটেন-মুক্ত খাবার গ্রহণ করা [৩, ৭]। আন্তর্জাতিক মানদণ্ড অনুযায়ী "গ্লুটেন-মুক্ত" বলতে বোঝায় এমন খাবার যাতে গ্লুটেনের মাত্রা প্রতি কেজিতে ২০ মিলিগ্রামের কম (২০ পিপিএমের নিচে) থাকে [৩]। এই পথ্যে গম, বার্লি ও রাই দিয়ে তৈরি সমস্ত খাবার পুরোপুরি নিষিদ্ধ [৩]। বিশুদ্ধ ওটমিল রোগীরা খেতে পারলেও বাজারে সাধারণ ওটমিল গমের সাথে মাড়াই করার ফলে দূষিত হয়ে যায়, তাই পরীক্ষিত গ্লুটেন-মুক্ত ওটমিল বেছে নিতে হবে [৩, ৭]। এমনকি প্রক্রিয়াজাত খাবার বা ওষুধের ভেতরে থাকা প্রচ্ছন্ন গ্লুটেনও রোগীকে সতর্কতার সাথে এড়িয়ে চলতে হয় [৭]।'
            ),
            l(
              'Patients initiating a gluten-free diet require comprehensive surveillance for nutritional deficiencies caused by pre-existing malabsorption [3, 7]. Baseline workup must evaluate serum ferritin, complete blood count, 25-hydroxyvitamin D, total serum calcium, vitamin B12, and zinc [3]. Dual-energy X-ray absorptiometry (DXA) screening is indicated to detect metabolic bone disease (osteopenia or osteoporosis) resulting from secondary hyperparathyroidism and prolonged calcium/vitamin D malabsorption [3]. Dietary adherence is monitored non-invasively by following serum anti-tTG IgA titers at 6 and 12 months post-diagnosis, which progressively decline toward baseline as mucosal architecture regenerates and intestinal permeability normalizes [3, 7].',
              'গ্লুটেন-মুক্ত খাবার শুরুর পর রোগীর পুষ্টির ঘাটতি পূরণ করা অত্যন্ত জরুরি [৩, ৭]। দীর্ঘদিন খাদ্য শোষণ না হওয়ার কারণে সৃষ্ট রক্তাল্পতা, ক্যালসিয়াম ও ভিটামিন ডি এর ঘাটতি মেটাতে প্রয়োজনীয় সাপ্লিমেন্ট দিতে হয় [৩]। হাড়ের ক্ষয় বা অস্টিওপোরোসিস হয়েছে কিনা তা জানার জন্য ডিএক্সএ (DXA) বোন স্ক্যান করা উচিত [৩]। খাদ্যাভ্যাস সঠিক হচ্ছে কিনা তা বোঝার জন্য প্রতি ৬ ও ১২ মাস পর পর রক্তে অ্যান্টি-টিটিজি অ্যান্টিবডি মেপে দেখতে হয়; খাবার ঠিক থাকলে অন্ত্র সুস্থ হয়ে অ্যান্টিবডির মাত্রা স্বাভাবিকের কোঠায় নেমে আসে [৩, ৭]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'Adverse food reactions require precise diagnostic discrimination between non-immune enzyme deficiencies (lactase non-persistence), acute IgE-mediated mast-cell anaphylaxis requiring emergency epinephrine, innate wheat sensitivities driven by non-gluten ATIs (NCGS), and HLA-DQ2/8 autoimmune Celiac enteropathy requiring lifelong strict dietary elimination [1, 2, 3, 7]. Conflating these categories leads to dangerous clinical mismanagement.',
              'খাদ্যজনিত প্রতিক্রিয়াগুলোকে অবশ্যই চারটি স্বতন্ত্র বিভাগে চিনতে হবে: এনজাইমের ঘাটতিজনিত ল্যাকটোজ অসহনশীলতা, এপিনেফ্রিন প্রয়োজনীয় তাৎক্ষণিক আইজিই অ্যালার্জি, গমের এটিআই চালিত নন-সিলিয়াক সংবেদনশীলতা এবং আজীবন কঠোর গ্লুটেন বর্জন প্রয়োজনীয় অটোইমিউন সিলিয়াক রোগ [১, ২, ৩, ৭]। এদেরকে গুলিয়ে ফেলা চিকিৎসার ক্ষেত্রে মারাত্মক ঝুঁকি তৈরি করে।'
            ),
            l(
              'Primary adult-type hypolactasia is an autosomal recessive evolutionary trait resulting from the absence of the MCM6 C/T-13910 enhancer polymorphism, leading to brush-border lactase-phlorizin hydrolase downregulation, unabsorbed luminal lactose accumulation, osmotic diarrhea, and anaerobic microbial hydrogen production detected via breath testing [2, 5]. Tolerating dairy via mixed meal matrices preserves dietary calcium without precipitating symptoms [2].',
              'প্রাপ্তবয়স্কদের ল্যাকটোজ অসহনশীলতা কোনো রোগ নয়; এটি MCM6 জিনের নিয়ন্ত্রক অংশে C/T-13910 মিউটেশন না থাকার কারণে শৈশবের পর স্বাভাবিকভাবেই ল্যাকটেজ কমে যাওয়ার রূপ [২, ৫]। এর ফলে অপাচ্য ল্যাকটোজ অন্ত্রে পানি টানে এবং ব্যাকটেরিয়াল গাঁজনে হাইড্রোজেন গ্যাস তৈরি করে [২, ৫]। তবে ভারী খাবারের সাথে অল্প দুধ বা চিজ খেলে কোনো সমস্যা ছাড়াই প্রয়োজনীয় ক্যালসিয়াম গ্রহণ করা সম্ভব [২]।'
            ),
            l(
              'The molecular pathogenesis of Celiac Disease requires the failure of human proteases to cleave the 33-mer gliadin peptide, calcium-dependent tTG-2 deamidation of neutral glutamine into negatively charged glutamic acid, high-affinity electrostatic docking into basic HLA-DQ2.5/8 pockets, Th1 IFN-gamma release, and IL-15 cytotoxic intraepithelial lymphocyte destruction of enterocytes resulting in Marsh III villous atrophy [3, 4].',
              'সিলিয়াক রোগের আণবিক ভিত্তি হলো মানুষের পরিপাক রসে ৩৩-মার গ্লিয়াডিনের অবিকৃত থাকা, tTG-2 এনজাইম দ্বারা এর নিরপেক্ষ গ্লুটামিনের ঋণাত্মক চার্জে রূপান্তর, HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী বন্ধন এবং ঘাতক লিম্ফোসাইট দিয়ে অন্ত্রের ভিলি পুরোপুরি ধ্বংস হয়ে যাওয়া (Marsh III) [৩, ৪]। এই প্রক্রিয়ায় রক্তে tTG-2 এর বিরুদ্ধে ক্ষতিকর অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]।'
            ),
            l(
              'Diagnostic testing for Celiac disease must be conducted BEFORE gluten withdrawal using anti-tTG IgA paired with total serum IgA to exclude false-negative results from selective IgA deficiency [3]. Confirmed Celiac disease mandates strict lifelong gluten elimination below 20 ppm, monitoring antibody seroreversion, screening for metabolic bone disease via DXA, and replacing malabsorbed micronutrients [3, 7].',
              'সিলিয়াক রোগের পরীক্ষা অবশ্যই গ্লুটেন বন্ধ করার আগেই সম্পন্ন করতে হবে এবং জন্মগত আইজিএ ঘাটতির কারণে ভুল রিপোর্ট এড়াতে অ্যান্টি-টিটিজির সাথে মোট আইজিএ পরিমাপ করতে হবে [৩]। রোগ নিশ্চিত হলে আজীবনের জন্য ২০ পিপিএমের নিচের কঠোর গ্লুটেন-মুক্ত খাবার গ্রহণ, হাড়ের ঘনত্ব পরীক্ষা এবং আয়রন ও ভিটামিন ডি এর ঘাটতি পূরণ করা আবশ্যক [৩, ৭]।'
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
          heading: l('1. Adverse Food Reactions: Classification & Molecular Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল আণবিক ধারণা'),
          paragraphs: [
            l(
              'Adverse reactions to food represent a complex spectrum of physiological and immunological pathologies affecting up to 10% of the global population [1, 2]. Translational gastroenterology and clinical dietetics delineate these conditions into three distinct mechanistic paradigms: non-immunological food intolerances, IgE-mediated Type I immediate hypersensitivities, and cell-mediated autoimmune enteropathies [1, 3]. Establishing precise diagnostic boundaries between these entities is vital because their clinical trajectories, risks of fatal anaphylaxis, long-term oncologic complications, and nutritional management algorithms are fundamentally divergent [1, 2].',
              'খাদ্যজনিত বিরূপ প্রতিক্রিয়া বিশ্বব্যাপী লক্ষ লক্ষ মানুষের স্বাস্থ্যকে প্রভাবিত করে [১, ২]। পুষ্টিবিজ্ঞান ও ক্লিনিক্যাল গ্যাস্ট্রোএন্টারোলজিতে এই সমস্যাগুলোকে তিনটি ভিন্ন শারীরবৃত্তীয় প্রক্রিয়ায় ভাগ করা হয়: অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা, তাৎক্ষণিক আইজিই অ্যালার্জি এবং কোষ-চালিত অটোইমিউন এন্টারোপ্যাথি [১, ৩]। এদের মধ্যে সুস্পষ্ট পার্থক্য নির্ণয় করা অপরিহার্য, কারণ এদের লক্ষণ, চিকিৎসার জটিলতা এবং দীর্ঘমেয়াদী ক্যান্সারের ঝুঁকি সম্পূর্ণ ভিন্ন [১, ২]।'
            ),
            l(
              'Food intolerances are defined by the absence of specific immune system engagement, arising instead from enzymatic insufficiencies, pharmacological reactivity, or gastrointestinal transport saturation [1, 2]. Primary adult-type hypolactasia represents the archetypal enzymatic defect, resulting from genetically programmed downregulation of enterocyte lactase-phlorizin hydrolase [2]. Pharmacological intolerances involve non-allergic reactions to biogenic amines (such as histamine in aged cheeses and wine) or alkaloids (caffeine), resulting from saturable metabolic clearance via diamine oxidase (DAO) or monoamine oxidase (MAO) [1, 2]. Critically, food intolerances are dose-dependent: threshold consumption triggers localized gastrointestinal distress without provoking systemic cytokine release or vascular collapse [1, 2].',
              'খাদ্য অসহনশীলতায় কোনো রোগপ্রতিরোধ ব্যবস্থা জড়িত থাকে না; বরং এটি এনজাইমের ঘাটতি বা খাদ্যের জৈব রাসায়নিক উপাদানের প্রতি সংবেদনশীলতার কারণে ঘটে [১, ২]। এর প্রধান উদাহরণ হলো ল্যাকটেজ এনজাইমের অভাব [২]। তাছাড়া পুরনো চিজ বা ওয়াইনে থাকা হিস্টামিন ভাঙার এনজাইম (DAO) কম থাকলেও পেট ফাঁপা বা মাথাব্যথা হতে পারে [১, ২]। এই অসহনশীলতাগুলো খাবারের পরিমাণের ওপর নির্ভরশীল: সামান্য পরিমাণে খেলে কোনো সমস্যা হয় না এবং এতে কখনোই রক্তচাপ কমে যাওয়া বা শ্বাসকষ্টের মতো অ্যালার্জিজনিত প্রাণঘাতী ঝুঁকি থাকে না [১, ২]।'
            ),
            l(
              'In stark contrast, IgE-mediated food allergy represents an adaptive, antigen-specific Type I hypersensitivity directed against water-soluble food glycoproteins [1, 6]. Exposure to minute microgram quantities of specific allergen proteins (such as Ara h 1/2 in peanuts, Gal d 1 in eggs, or Bos d 8 in milk) induces immediate bivalent cross-linking of specific IgE antibodies pre-bound to high-affinity Fc-epsilon-RI receptors on mucosal and perivascular mast cells [1, 6]. This cross-linking triggers explosive degranulation of preformed histamine, neutral proteases, and de novo synthesized cysteinyl leukotrienes within minutes, driving systemic vasodilation, bronchial smooth muscle constriction, and fatal anaphylactic shock [1, 6]. Treatment requires instantaneous intramuscular administration of epinephrine [1, 6].',
              'অপরদিকে, আইজিই খাদ্য অ্যালার্জি হলো খাবারের প্রোটিনের বিরুদ্ধে অনাক্রম্য ব্যবস্থার এক মারাত্মক ও তাৎক্ষণিক প্রতিক্রিয়া [১, ৬]। বাদাম, ডিম বা দুধের অতি সামান্য কয়েক মাইক্রোগ্রাম প্রোটিন রক্তে প্রবেশ করার সাথে সাথে মাস্ট সেলের গায়ে থাকা IgE অ্যান্টিবডির সাথে যুক্ত হয়ে কয়েক মিনিটের মধ্যে বিপুল পরিমাণে হিস্টামিন ও লিউকোট্রিয়েন নিঃসরণ করায় [১, ৬]। এর ফলে শরীরের রক্তনালী অস্বাভাবিকভাবে প্রসারিত হয়ে রক্তচাপ শূন্যে নেমে যায় এবং শ্বাসনালী সংকুচিত হয়ে রোগী তাৎক্ষণিক অ্যানাফিল্যাক্টিক শকে মারা যেতে পারে [১, ৬]। একমাত্র সঠিক চিকিৎসা হলো অবিলম্বে থাইয়ের মাংসে এপিনেফ্রিন ইনজেকশন দেওয়া [১, ৬]।'
            ),
            l(
              'Autoimmune enteropathies, most prominently Celiac Disease, occupy a unique mechanistic space where a foreign dietary antigen (gluten) induces a break in immune tolerance and drives targeted autoimmune tissue destruction [3, 4]. Unlike food allergies, Celiac disease does not involve IgE antibodies, mast cell degranulation, or acute bronchospasm; rather, it is an HLA-DQ2/8-restricted Th1 enteropathy driven by intraepithelial cytotoxic killer lymphocytes that obliterate the absorptive duodenal architecture [3, 4]. Concurrently, plasma cells produce diagnostic autoantibodies against the endogenous enzyme tissue transglutaminase 2 (tTG-2) [3, 4]. Failing to distinguish Celiac disease from benign food intolerances results in untreated nutrient malabsorption, metabolic osteopathy, and lymphoma [3].',
              'অটোইমিউন সিলিয়াক রোগ এমন এক জটিল প্রক্রিয়া যেখানে খাদ্যের বাহ্যিক প্রোটিন (গ্লুটেন) মানবদেহের অনাক্রম্য সহনশীলতা ভেঙে ফেলে এবং নিজের অঙ্গের বিরুদ্ধেই যুদ্ধ ঘোষণা করে [৩, ৪]। এতে কোনো তাৎক্ষণিক আইজিই অ্যালার্জি বা শ্বাসকষ্ট হয় না; বরং গ্লুটেন খাওয়ার ফলে ঘাতক টি-লিম্ফোসাইটগুলো ক্ষুদ্রান্ত্রের শোষণকারী ভিলি কোষগুলোকে আক্রমণ করে সম্পূর্ণ ধ্বংস করে ফেলে [৩, ৪]। একই সাথে রক্তে শরীরের নিজস্ব tTG-2 এনজাইমের বিরুদ্ধে অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]। এই রোগকে সাধারণ পেটের গ্যাস ভেবে ভুল করলে রোগীর হাড়ের ক্ষয়, চরম পুষ্টিহীনতা এবং অন্ত্রের লিম্ফোমা ক্যান্সার হতে পারে [৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Lactase Persistence Genetics & Breath Testing Kinetics', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'),
          paragraphs: [
            l(
              'The molecular physiology of lactose assimilation highlights the critical role of enterocyte brush-border enzymology in carbohydrate homeostasis [2]. Lactose is a polar disaccharide synthesized in the mammary gland, consisting of D-galactose and D-glucose joined by a beta(1->4) glycosidic linkage [2]. Intestinal enterocytes express apical sodium-glucose cotransporters (SGLT1) and facilitated uniporters (GLUT5, GLUT2) that transport monosaccharides but cannot transport disaccharides across the lipid bilayer [2]. Consequently, dietary lactose must undergo catalytic hydrolysis into monosaccharide subunits at the apical brush border by lactase-phlorizin hydrolase (LPH; EC 3.2.1.23/62), a large, heavily glycosylated type I transmembrane protein anchored in the duodenal and jejunal microvilli [2].',
              'ল্যাকটোজ হজমের শারীরবৃত্তীয় প্রক্রিয়া ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডার এনজাইম কাঠামোর ওপর পুরোপুরি নির্ভরশীল [২]। ল্যাকটোজ হলো একটি ডাইস্যাকারাইড যা গ্যালাক্টোজ এবং গ্লুকোজ অণুর সমন্বয়ে গঠিত [২]। অন্ত্রের কোষের পরিবহন প্রোটিনগুলো কেবল একক শর্করা (গ্লুকোজ বা ফ্রুক্টোজ) শোষণ করতে পারে, কোনো ডাইস্যাকারাইড শোষণ করতে পারে না [২]। তাই খাদ্যতালিকায় থাকা ল্যাকটোজকে ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে অবস্থিত ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH) নামক বিশেষ এনজাইমের মাধ্যমে ভেঙে গ্লুকোজ ও গ্যালাক্টোজে রূপান্তরিত করতে হয় [২]। এই এনজাইমটি ডুওডেনাম এবং জেজুনামের এন্টারোসাইট কোষে শক্তভাবে প্রোথিত থাকে [২]।'
            ),
            l(
              'The evolutionary divergence in adult lactose tolerance is controlled by an upstream regulatory enhancer located 13,910 base pairs upstream of the lactase gene (*LCT*) on chromosome 2q21, situated within intron 13 of the DNA helicase gene *MCM6* [2]. In the ancestral mammalian state (lactase non-persistence), epigenetic promoter methylation and chromatin compaction progressively silence *LCT* transcription following weaning, reducing brush-border lactase activity by 90% to 95% [2]. In populations with a history of pastoral dairy domestication, specific autosomal dominant single-nucleotide polymorphisms arose: the C/T-13910 variant in Europe and the G/C-14010, T/G-13915, and C/G-13907 variants in East Africa and the Middle East [2]. The C/T-13910 variant creates an octamer binding motif that recruits the transcription factor OCT-1, sustaining constitutive lifelong *LCT* transcription [2].',
              'প্রাপ্তবয়স্ক মানুষের শরীরে ল্যাকটোজ হজম করার ক্ষমতা বজায় থাকা বা কমে যাওয়া নিয়ন্ত্রিত হয় ২ নম্বর ক্রোমোজোমে অবস্থিত ল্যাকটেজ জিনের (*LCT*) ১৩,৯১০ বেস-পেয়ার উজানে থাকা একটি বিশেষ নিয়ন্ত্রক অঞ্চলের মাধ্যমে, যা পাশের *MCM6* জিনের ১৩ নম্বর ইন্ট্রনে অবস্থিত [২]। স্তন্যপায়ী প্রাণীর আদিম নিয়মে শৈশব পার হওয়ার পর ল্যাকটেজ জিনের ডিএনএ মিথাইলেশন ঘটে এর উৎপাদন ৯০ থেকে ৯৫ শতাংশ কমে যায় [২]। কিন্তু পশুপালনকারী জাতিগুলোর মধ্যে C/T-13910 নামক বিশেষ একক নিউক্লিওটাইড রূপান্তর ঘটে [২]। এই রূপান্তরের ফলে OCT-1 নামক ট্রান্সক্রিপশন ফ্যাক্টর সেখানে শক্তভাবে যুক্ত হয়ে প্রাপ্তবয়স্ক অবস্থাতেও আজীবন প্রচুর ল্যাকটেজ এনজাইম তৈরি অব্যাহত রাখে [২]।'
            ),
            l(
              'In lactase non-persistent individuals, unhydrolyzed lactose cannot be absorbed, creating an intraluminal osmotic gradient of ~140 mOsm/kg that draws extracellular water into the distal small bowel [2]. The resulting fluid load accelerates peristaltic transit, propelling dissolved lactose rapidly across the ileocecal valve into the cecum [2]. The colonic anaerobic microbiome metabolizes this unabsorbed disaccharide via the Embden-Meyerhof-Parnas glycolytic pathway and the bifid shunt, producing lactate and short-chain fatty acids (acetate, propionate, butyrate) while generating substantial volumes of hydrogen (H2), carbon dioxide (CO2), and methane (CH4) gases [2, 5]. Luminal acidification (pH falling below 5.5) and gaseous distension fire stretch-sensitive enteric mechanoreceptors, provoking painful borborygmi, abdominal cramping, and explosive osmotic diarrhea [2].',
              'ল্যাকটেজের অভাব থাকা ব্যক্তির শরীরে অপাচ্য ল্যাকটোজ অন্ত্রে তীব্র অস্মোটিক টানের সৃষ্টি করে দেহ থেকে বিপুল পরিমাণ তরল ক্ষুদ্রান্ত্রে টেনে নিয়ে আসে [২]। এর ফলে খাবার দ্রুত বৃহদন্ত্রে প্রবেশ করে [২]। বৃহদন্ত্রের অ্যানেরোবিক ব্যাকটেরিয়ারা এই ল্যাকটোজকে ভেঙে ল্যাকটেট ও শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরির পাশাপাশি বিপুল পরিমাণে হাইড্রোজেন, কার্বন ডাই অক্সাইড ও মিথেন গ্যাস তৈরি করে [২, ৫]। অন্ত্রের pH ৫.৫ এর নিচে নেমে যায় এবং অতিরিক্ত গ্যাসে অন্ত্রের স্নায়ুগুলো উত্তেজিত হয়ে তীব্র মোচড়ানো ব্যথা, পেটে অস্বাভাবিক গর্জন ও পানির মতো পাতলা পায়খানার সৃষ্টি করে [২]।'
            ),
            l(
              'The clinical quantification of lactose malabsorption is standardized through the Hydrogen Breath Test (HBT) [2, 5]. Because human mammalian cells possess no metabolic pathways that generate molecular hydrogen, all hydrogen detected in exhaled alveolar breath is derived from microbial anaerobic fermentation of carbohydrates in the gut [5]. Following an overnight fast and administration of 25 g of lactose dissolved in water, end-expiratory alveolar air samples are collected at baseline and every 15-30 minutes for 180 minutes using an electrochemical sensor [5]. A sustained increase in breath hydrogen of >20 ppm above baseline accompanied by clinical symptoms establishes lactose malabsorption [2, 5]. Concomitant methane measurement is essential: in approximately 10-15% of patients, methanogenic archaea (*Methanobrevibacter smithii*) consume 4 moles of H2 per mole of CO2 to produce methane, necessitating a >10 ppm methane rise criterion to avoid false-negative results [5].',
              'ল্যাকটোজ অপশোষণ নির্ণয়ের বৈজ্ঞানিক পরীক্ষা হলো হাইড্রোজেন ব্রেথ টেস্ট (HBT) [২, ৫]। মানবদেহের কোনো কোষ আণবিক হাইড্রোজেন তৈরি করতে পারে না; নিঃশ্বাসে নির্গত সমস্ত হাইড্রোজেন কেবল অন্ত্রের ব্যাকটেরিয়াল গাঁজন থেকেই তৈরি হয় [৫]। খালি পেটে রোগীকে ২৫ গ্রাম ল্যাকটোজ খাওয়ানোর পর ৩ ঘণ্টা ধরে প্রতি ১৫-৩০ মিনিট পর পর সেন্সরের সাহায্যে নিঃশ্বাসের বাতাস পরীক্ষা করা হয় [৫]। প্রাথমিক মানের চেয়ে ২০ পিপিএমের বেশি হাইড্রোজেন বাড়লে এবং পেটে সমস্যা দেখা দিলে ল্যাকটোজ অপশোষণ নিশ্চিত হয় [২, ৫]। তবে ১০-১৫% রোগীর পেটে মিথেন তৈরিকারী বিশেষ জীবাণু (*Methanobrevibacter smithii*) থাকে যা হাইড্রোজেন খেয়ে মিথেন গ্যাস তৈরি করে ফেলে; তাই একই সাথে মিথেন গ্যাসও (>১০ পিপিএম) পরিমাপ করা অপরিহার্য যাতে কোনো ভুল রিপোর্ট না আসে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Celiac Immunopathology: 33-mer Gliadin & HLA-DQ2.5/8', '৩. সিলিয়াক রোগ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5/8 অটোইমিউনিটি'),
          paragraphs: [
            l(
              'Celiac disease represents a premier model of human organ-specific autoimmunity, characterized by an adaptive immune attack against the small intestinal mucosa triggered by dietary gluten [3, 4]. Gluten is the complex protein matrix found in wheat, rye, and barley, partitioned into monomeric alpha-, beta-, gamma-, and omega-gliadins and polymeric high- and low-molecular-weight glutenins [3, 4]. Both protein fractions are dominated by an unusual amino acid composition: proline comprises approximately 15% and glutamine comprises approximately 35% of total residues [4]. Human gastric pepsin, pancreatic trypsin, chymotrypsin, and carboxypeptidases possess cleavage specificities that cannot accommodate peptide bonds adjacent to secondary amine proline residues, leaving gluten partially digested as large, stable oligopeptides [4, 5].',
              'সিলিয়াক রোগ হলো মানবদেহের একটি অন্যতম প্রধান অটোইমিউন রোগ যেখানে খাদ্যের গ্লুটেন প্রোটিন অন্ত্রের নিজস্ব টিস্যুর বিরুদ্ধে মারাত্মক ধ্বংসযজ্ঞ ডেকে আনে [৩, ৪]। গ্লুটেন মূলত গমের গ্লিয়াডিন ও গ্লুটেনিন প্রোটিনের মিশ্রণ [৩, ৪]। এই প্রোটিনগুলোতে অস্বাভাবিক পরিমাণে প্রোলিন (১৫%) এবং গ্লুটামিন (৩৫%) অ্যামিনো অ্যাসিড থাকে [৪]। মানুষের পাকস্থলী ও অগ্ন্যাশয়ের কোনো পাচক এনজাইম প্রোলিনের পাশে থাকা পেপটাইড বন্ধন ভাঙতে পারে না, যার ফলে গ্লুটেন সম্পূর্ণ না ভেঙে দীর্ঘ ও অবিকৃত পেপটাইড শিকল হিসেবে ক্ষুদ্রান্ত্রে প্রবেশ করে [৪, ৫]।'
            ),
            l(
              'The most potent disease-inducing fragment is the alpha-gliadin 33-mer peptide (residues 56-88: LQLQPFPQPQLPYPQPQLPYPQPQLPYPQPQPF), which contains six overlapping copies of three distinct T-cell epitopes [4, 5]. In the setting of transient barrier breakdown or zonulin-mediated tight junction opening, intact 33-mer peptides cross the epithelial monolayer into the lamina propria via paracellular leakage or transcellular protected retrotranscytosis bound to secretory IgA [4, 5]. In the lamina propria, the 33-mer encounters tissue transglutaminase 2 (tTG-2), a calcium-dependent multi-functional acyltransferase localized in the subepithelial extracellular matrix and released from stromal fibroblasts and endothelial cells during cellular stress [3, 4].',
              'সবচেয়ে ক্ষতিকর উপাদানটি হলো আলফা-গ্লিয়াডিনের ৩৩-মার পেপটাইড (33-mer gliadin) [৪, ৫]। এতে একাধিক অনাক্রম্য সংবেদনশীল অংশ থাকে যা মানুষের পাচক এনজাইমে সম্পূর্ণ অক্ষত থাকে এবং অন্ত্রের দুর্বল প্রাচীর ভেদ করে ল্যামিনা প্রোপ্রিয়ায় প্রবেশ করে [৪, ৫]। সেখানে এটি টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2) নামক এনজাইমের সংস্পর্শে আসে, যা ক্যালসিয়ামের উপস্থিতিতে সক্রিয় হয়ে কাজ করে [৩, ৪]।'
            ),
            l(
              'Tissue transglutaminase 2 catalyzes a critical post-translational modification: the stereospecific deamidation of neutral glutamine residues into negatively charged glutamic acid (such as Q65E and Q72E) [3, 4]. In individuals carrying the high-risk MHC Class II heterodimers HLA-DQ2.5 (encoded by DQA1*05:01 and DQB1*02:01) or HLA-DQ8 (DQA1*03:01 and DQB1*03:02), the antigen-binding groove possesses basic, positively charged residues clustered at the P4, P6, P7, and P9 anchor pockets [3, 4]. While native neutral gliadin displays negligible affinity for these pockets, tTG-2-mediated deamidation creates electrostatic salt bridges that lock deamidated gliadin into the HLA-DQ2.5 groove with nanomolar binding affinity, enabling dendritic cells to present the complex to naive CD4+ T cells with exceptional efficiency [3, 4].',
              'tTG-2 এনজাইম গ্লিয়াডিনের গায়ে থাকা নিরপেক্ষ গ্লুটামিন অ্যামিনো অ্যাসিডগুলোকে রাসায়নিকভাবে পরিবর্তন করে ঋণাত্মক চার্জযুক্ত গ্লুটামিক অ্যাসিডে রূপান্তর করে ফেলে [৩, ৪]। সংবেদনশীল ব্যক্তিদের রোগপ্রতিরোধ কোষের গায়ে থাকা HLA-DQ2.5 বা HLA-DQ8 অণুর খাঁজগুলো শক্তিশালী ধনাত্মক চার্জ দিয়ে গঠিত [৩, ৪]। নিরপেক্ষ অবস্থায় গ্লিয়াডিন এখানে যুক্ত হতে পারে না, কিন্তু ঋণাত্মক চার্জে রূপান্তরিত হওয়ার পর এটি তীব্র বৈদ্যুতিক আকর্ষণে ধনাত্মক খাঁজের সাথে শক্তভাবে আটকে যায় [৩, ৪]। এর ফলে ডেনড্রাইটিক কোষগুলো অত্যন্ত সফলভাবে এই ক্ষতিকর প্রোটিনটিকে CD4+ টি-সহায়ক কোষের সামনে তুলে ধরে মারাত্মক অটোইমিউন সংকেত চালু করে দেয় [৩, ৪]।'
            ),
            l(
              'Ligation of the T-cell receptor on gluten-specific CD4+ T helper cells drives massive clonal expansion and secretion of Th1 cytokines, predominantly Interferon-gamma (IFN-gamma) and Interleukin-21 (IL-21) [3, 4]. Concurrently, stressed enterocytes overexpress surface non-classical MHC Class I molecules (MICA and MICB) and secrete Interleukin-15 (IL-15) [3, 4]. IL-15 acts in a paracrine fashion on intraepithelial lymphocytes (IELs), upregulating the activating natural killer receptor NKG2D and transforming IELs into antigen-independent killer cells [3, 4]. Cytotoxic IELs engage MICA/MICB on enterocytes, releasing perforin and granzyme B to trigger enterocyte apoptosis, causing total villous blunting (Marsh IIIc atrophy), crypt hyperplasia, and catastrophic nutrient malabsorption [3, 4]. Simultaneously, gluten-reactive CD4+ T cells provide help to autoreactive B cells, driving clonal differentiation into plasma cells secreting anti-tTG IgA autoantibodies [3, 4].',
              'টি-কোষ সক্রিয় হওয়ার সাথে সাথে বিপুল পরিমাণে ইন্টারফেরন-গামা ও ইন্টারলিউকিন-২১ ক্ষরিত হতে থাকে [৩, ৪]। একই সাথে অন্ত্রের ক্ষতিগ্রস্ত কোষগুলো ইন্টারলিউকিন-১৫ (IL-15) নিঃসরণ করে ঘাতক লিম্ফোসাইটগুলোকে (IEL) মারাত্মকভাবে উত্তেজিত করে তোলে [৩, ৪]। এই ঘাতক কোষগুলো বিষাক্ত পারফোরিন ও গ্র্যানজাইম ঢেলে অন্ত্রের শোষণকারী ভিলি কোষগুলোকে পুরোপুরি হত্যা করে সমতল করে দেয় (Marsh IIIc Villous Atrophy) [৩, ৪]। ফলে অন্ত্রের শোষণ ক্ষমতা সম্পূর্ণ ধ্বংস হয়ে যায় এবং রক্তে anti-tTG IgA অটোঅ্যান্টিবডি ছড়িয়ে পড়ে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. IgE Anaphylaxis & Non-Celiac Wheat Sensitivity (NCGS)', '৪. আইজিই অ্যানাফিল্যাক্সিস ও নন-সিলিয়াক গমের সংবেদনশীলতা'),
          paragraphs: [
            l(
              'The molecular architecture of IgE-mediated food allergy contrasts sharply with the slow cellular enteropathy of Celiac disease [1, 6]. Classical food allergy is an immediate Type I hypersensitivity reaction orchestrated by specific IgE antibodies bound with picomolar affinity (Ka ~10^10 M^-1) to the tetrameric Fc-epsilon-RI receptor complex (alpha, beta, and disulfide-linked gamma2 subunits) on the surface of mucosal mast cells and circulating basophils [1, 6]. The cross-linking of at least two adjacent surface IgE molecules by a multivalent food protein allergen triggers rapid receptor clustering within membrane lipid rafts [6].',
              'আইজিই-নির্ভর খাদ্য অ্যালার্জির আণবিক গতিবিধি সিলিয়াক রোগের দীর্ঘস্থায়ী প্রক্রিয়ার চেয়ে সম্পূর্ণ আলাদা [১, ৬]। এটি হলো একটি অতি-তীব্র তাৎক্ষণিক প্রতিক্রিয়া, যা মাস্ট সেল ও ব্যাসোফিলের গায়ে থাকা Fc-epsilon-RI রিসেপ্টরের সাথে যুক্ত IgE অ্যান্টিবডির মাধ্যমে পরিচালিত হয় [১, ৬]। খাবারের প্রোটিন অ্যালার্জেন পাশাপাশি থাকা দুটি IgE অণুকে যুক্ত করে গুচ্ছবদ্ধ করার সাথে সাথেই সেকেন্ডের মধ্যে কোষের ভেতর বিস্ফোরক প্রতিক্রিয়া শুরু হয়ে যায় [৬]।'
            ),
            l(
              'Receptor aggregation stimulates the constitutive tyrosine kinase Lyn to phosphorylate immunoreceptor tyrosine-based activation motifs (ITAMs) on the beta and gamma chains of Fc-epsilon-RI [6]. Phosphorylated ITAMs recruit the cytosolic tandem-SH2 domain kinase Syk, which autophosphorylates and initiates a downstream signaling cascade by phosphorylating the scaffold protein LAT [6]. Activated LAT recruits Phospholipase C-gamma1 (PLC-gamma1), which hydrolyzes membrane phosphatidylinositol 4,5-bisphosphate (PIP2) to yield inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) [6]. IP3 opens ligand-gated calcium channels on the endoplasmic reticulum, while DAG activates protein kinase C (PKC) [6]. The resulting surge in cytosolic free calcium drives SNARE-mediated granule exocytosis, dumping preformed histamine, neutral proteases (tryptase, chymase), and tumor necrosis factor-alpha (TNF-alpha) into the interstitial space within 1 to 5 minutes [1, 6].',
              'গুচ্ছবদ্ধ হওয়ার সাথে সাথে Lyn এবং Syk এনজাইম সক্রিয় হয়ে কোষের ভেতরের ফসফোলাইপেজ-সি (PLC-gamma1) চালু করে দেয় [৬]। এটি কোষের ভেতরের ক্যালসিয়াম সঞ্চয় এক মুহূর্তেই মুক্ত করে সাইটোপ্লাজমে ক্যালসিয়ামের মাত্রা বিপুল পরিমাণে বাড়িয়ে দেয় [৬]। এই ক্যালসিয়ামের বন্যায় মাস্ট সেলের ভেতরে থাকা সমস্ত দানাদার থলি ফেটে গিয়ে কয়েক মিনিটের মধ্যে বিপুল পরিমাণে হিস্টামিন, ট্রিপটেজ ও TNF-alpha রক্তে ঢেলে দেয় [১, ৬]। এর ফলে অতি দ্রুত তীব্র প্রদাহ ও অ্যালার্জি ছড়িয়ে পড়ে [৬]।'
            ),
            l(
              'Histamine binds endothelial H1 receptors to trigger rapid nitric oxide (NO) generation and vascular smooth muscle relaxation, causing profound peripheral vasodilation and increased capillary permeability with plasma extravasation, manifesting as urticaria, angioedema, and hypovolemic shock [1, 6]. Concurrently, cytosolic phospholipase A2 liberates arachidonic acid to fuel cyclooxygenase-2 (COX-2) and 5-lipoxygenase (5-LOX) pathways, synthesizing prostaglandin D2 (PGD2) and cysteinyl leukotrienes (LTC4, LTD4, LTE4) [6]. Leukotriene LTD4 is roughly 1,000 times more potent than histamine in driving sustained bronchial smooth muscle contraction and microvascular leakage [6]. Intramuscular epinephrine (0.01 mg/kg; adult dose 0.3-0.5 mg into the anterolateral mid-thigh) is the mandatory first-line therapy: it acts via alpha-1 adrenergic receptors to induce vasoconstriction and restore arterial pressure, and via beta-2 adrenergic receptors to relax bronchial smooth muscle and elevate intracellular cAMP, shutting down further mast cell degranulation [1, 6].',
              'নিঃসৃত হিস্টামিন রক্তনালীগুলোকে মাত্রাতিরিক্ত প্রসারিত করে নিমেষেই রক্তচাপ কমিয়ে দেয় এবং সারা শরীরে ফুলে যাওয়া বা চুলকানির সৃষ্টি করে [১, ৬]। একই সাথে মাস্ট সেল লিউকোট্রিয়েন (LTD4) তৈরি করে যা হিস্টামিনের চেয়ে ১,০০০ গুণ বেশি শক্তিতে শ্বাসনালী সংকুচিত করে রোগীকে শ্বাসরোধ করে ফেলে [৬]। এই জীবন-সংকটাপন্ন অবস্থায় থাইয়ের মাংসে অবিলম্বে এপিনেফ্রিন (Epinephrine) ইনজেকশন দিতে হয়; এটি রক্তনালী সংকুচিত করে রক্তচাপ পুনরুদ্ধার করে এবং শ্বাসনালী খুলে দিয়ে রোগীর নিশ্চিত মৃত্যু ঠেকায় [১, ৬]।'
            ),
            l(
              'In clinical practice, many patients report gastrointestinal symptoms and systemic manifestations (fatigue, headache, brain fog, arthralgias) following wheat ingestion but lack Celiac autoantibodies (anti-tTG IgA negative), duodenal villous atrophy, and wheat-specific IgE [7]. This entity is classified as Non-Celiac Wheat Sensitivity (NCGS) [7]. Rather than being an adaptive autoimmune or allergic response to gluten, NCGS is driven by non-gluten components of wheat, predominantly alpha-Amylase/Trypsin Inhibitors (ATIs) and fermentable short-chain fructans (FODMAPs) [7]. ATIs represent pest-resistance proteins that resist gastric and duodenal proteolysis, binding to Toll-like receptor 4 (TLR4) on myeloid dendritic cells and monocytes [7]. This innate TLR4 ligation stimulates the NF-kappaB pathway, releasing pro-inflammatory cytokines (IL-8, TNF-alpha) that trigger low-grade mucosal inflammation and systemic symptoms, all of which resolve promptly upon wheat elimination [7].',
              'ক্লিনিক্যাল ক্ষেত্রে বহু রোগী গম খাওয়ার পর পেটে সমস্যা এবং মাথাব্যথা বা ক্লান্তিতে ভোগেন, অথচ রক্তে সিলিয়াকের কোনো অ্যান্টিবডি থাকে না এবং অন্ত্রের ভিলিও সম্পূর্ণ অক্ষত থাকে [৭]। এই সমস্যাটিকে নন-সিলিয়াক গমের সংবেদনশীলতা (NCGS) বলা হয় [৭]। এটি কোনো গ্লুটেনজনিত অটোইমিউন রোগ নয়; বরং গমের মধ্যে থাকা অপাচ্য ফ্রুক্টান এবং অ্যামাইলেজ-ট্রিপসিন ইনহিবিটর (ATIs) নামক বিশেষ কিছু প্রোটিনের কারণে ঘটে [৭]। এই ATIs প্রোটিনগুলো অন্ত্রের রোগপ্রতিরোধ কোষের TLR4 রিসেপ্টরকে উত্তেজিত করে জন্মগত অনাক্রম্যতার মাধ্যমে সাময়িক প্রদাহ সৃষ্টি করে, যা গম পরিহার করলে পুরোপুরি সেরে যায় [৭]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Workup, Serology & The Gluten-Free Diet', '৫. ক্লিনিক্যাল রোগ নির্ণয়, সেরোলজি ও গ্লুটেন-মুক্ত খাদ্যবিধি'),
          paragraphs: [
            l(
              'The diagnostic workup of Celiac disease must follow rigorous evidence-based algorithms to avoid misdiagnosis or inappropriate dietary initiation [3, 7]. The primary serological screening test is the automated enzyme-linked immunosorbent assay (ELISA) measuring serum anti-tissue transglutaminase immunoglobulin A (anti-tTG IgA) directed against recombinant human tTG-2 [3]. Anti-tTG IgA boasts sensitivity and specificity exceeding 95% in untreated active Celiac disease [3]. Crucially, guidelines mandate that total serum IgA must always be quantified simultaneously [3]. Selective IgA deficiency occurs in 2% to 3% of Celiac patients (a 10- to 15-fold enrichment over the general population); testing an IgA-deficient patient solely with anti-tTG IgA produces a devastating false-negative result [3]. In patients with total IgA <0.2 g/L, clinicians must measure IgG-based antibodies: anti-tTG IgG and anti-deamidated gliadin peptide (DGP) IgG [3].',
              'সিলিয়াক রোগ নির্ণয়ে সঠিক ক্লিনিক্যাল নীতিমালা মেনে চলা বাধ্যতামূলক, অন্যথায় রোগ ভুলভাবে বাদ পড়ে রোগীর মারাত্মক ক্ষতি হতে পারে [৩, ৭]। প্রথম এবং প্রধান রক্ত পরীক্ষা হলো অ্যান্টি-টিটিজি আইজিএ (anti-tTG IgA), যার নির্ভুলতা ৯৫ শতাংশেরও বেশি [৩]। তবে এর সাথে অবশ্যই মোট সিরাম আইজিএ (Total IgA) পরীক্ষা করতে হবে [৩]। কারণ সিলিয়াক রোগীদের প্রায় ২-৩ শতাংশের শরীরে জন্মগতভাবেই আইজিএ অ্যান্টিবডি থাকে না [৩]। এই ঘাটতি থাকা অবস্থায় পরীক্ষা করলে তীব্র রোগ থাকা সত্ত্বেও রিপোর্ট নেগেটিভ আসবে; তাই আইজিএ কম থাকলে সাথে সাথে আইজিজি-ভিত্তিক (anti-tTG IgG) পরীক্ষা করাতে হয় [৩]।'
            ),
            l(
              'In adult patients, positive serology mandates confirmation by upper esophagogastroduodenoscopy (EGD) with multiple oriented mucosal biopsies [3]. Because Celiac mucosal damage is frequently patchy, international gastroenterology societies require obtaining at least four biopsies from the second and third parts of the duodenum, along with at least two biopsies from the duodenal bulb [3]. Histological staging follows the modified Marsh-Oberhuber criteria: Marsh 1 (infiltrative, >25-40 intraepithelial lymphocytes per 100 enterocytes), Marsh 2 (hyperplastic crypts with preserved villi), and Marsh 3 (destructive villous blunting, subclassified into 3a partial, 3b subtotal, and 3c total villous atrophy) [3, 4]. A definitive Celiac diagnosis requires concordant positive serology and Marsh 2-3 enteropathy [3].',
              'প্রাপ্তবয়স্কদের ক্ষেত্রে রক্ত পরীক্ষার পর এন্ডোস্কোপি করে ক্ষুদ্রান্ত্রের বায়োপসি নেওয়া রোগ নিশ্চিত করার একমাত্র আন্তর্জাতিক মাপকাঠি [৩]। সিলিয়াক রোগ অন্ত্রের সব জায়গায় সমানভাবে ছড়ায় না বলে ডুওডেনাম থেকে কমপক্ষে ৪টি এবং ডুওডেনাল বাল্ব থেকে ২টি বায়োপসি নিতে হয় [৩]। মাইক্রোস্কোপে ভিলির ক্ষয় দেখে রোগটিকে মার্শ (Marsh) স্কেলে ভাগ করা হয়: লিম্ফোসাইট বৃদ্ধি পাওয়া (Marsh 1), ক্রিপ্ট বড় হওয়া (Marsh 2) এবং ভিলি সম্পূর্ণ সমতল হয়ে যাওয়া (Marsh 3) [৩, ৪]। Marsh 3 পাওয়া গেলে সিলিয়াক রোগ নিশ্চিত হয় [৩]।'
            ),
            l(
              'The sole effective, life-saving therapy for Celiac disease is the lifelong, absolute elimination of dietary gluten (Gluten-Free Diet, GFD) [3, 7]. The Codex Alimentarius Commission and U.S. FDA establish that foods labeled "gluten-free" must contain less than 20 parts per million (ppm) of gluten (<20 mg gluten per kg of food), a threshold proven to maintain mucosal healing in over 95% of patients [3]. Strict compliance requires the total exclusion of all forms of wheat (including spelt, farro, einkorn, kamut, bulgur, durum, semolina), barley (malt, malt vinegar), rye, and triticale [3]. Pure, certified uncontaminated oats are tolerated by over 99% of Celiac patients, but commercial oats are frequently contaminated during agricultural harvesting and milling, requiring verified third-party gluten-free certification [3, 7].',
              'সিলিয়াক রোগের একমাত্র বিজ্ঞানসম্মত চিকিৎসা হলো আজীবন ১০০% গ্লুটেন-মুক্ত খাবার গ্রহণ করা [৩, ৭]। আন্তর্জাতিক মানদণ্ড অনুযায়ী "গ্লুটেন-মুক্ত" বলতে বোঝায় এমন খাবার যাতে গ্লুটেনের মাত্রা প্রতি কেজিতে ২০ মিলিগ্রামের কম (২০ পিপিএমের নিচে) থাকে [৩]। এই পথ্যে গম, বার্লি ও রাই দিয়ে তৈরি সমস্ত খাবার পুরোপুরি নিষিদ্ধ [৩]। বিশুদ্ধ ওটমিল রোগীরা খেতে পারলেও বাজারে সাধারণ ওটমিল গমের সাথে মাড়াই করার ফলে দূষিত হয়ে যায়, তাই পরীক্ষিত গ্লুটেন-মুক্ত ওটমিল বেছে নিতে হবে [৩, ৭]। এমনকি প্রক্রিয়াজাত খাবার বা ওষুধের ভেতরে থাকা প্রচ্ছন্ন গ্লুটেনও রোগীকে সতর্কতার সাথে এড়িয়ে চলতে হয় [৭]।'
            ),
            l(
              'Management of newly diagnosed Celiac patients requires comprehensive nutritional restitution and long-term surveillance [3, 7]. Because villous atrophy impairs the microvillar brush border, secondary lactase deficiency is common at presentation; patients should temporarily limit lactose until mucosal regeneration occurs [2, 3]. Baseline clinical evaluation must screen for malabsorption-induced micronutrient deficiencies: serum ferritin (iron deficiency occurs in up to 50%), complete blood count, 25-hydroxyvitamin D, serum calcium, vitamin B12, folate, and zinc [3]. Dual-energy X-ray absorptiometry (DXA) screening of the lumbar spine and femoral neck is recommended to assess for metabolic bone disease (osteopenia or osteoporosis) driven by chronic malabsorption and secondary hyperparathyroidism [3]. Ongoing compliance is monitored non-invasively by following serum anti-tTG IgA titers at 6, 12, and 24 months, which decline toward normal as intestinal permeability and mucosal architecture recover [3, 7].',
              'গ্লুটেন-মুক্ত খাবার শুরুর পর রোগীর পুষ্টির ঘাটতি পূরণ করা অত্যন্ত জরুরি [৩, ৭]। অন্ত্রের ভিলি ক্ষতিগ্রস্ত থাকার কারণে শুরুতে দুধ হজমের ল্যাকটেজ এনজাইম সাময়িকভাবে কমে যেতে পারে, তাই ভিলি সুস্থ না হওয়া পর্যন্ত কিছুদিন দুধ সীমিত রাখা ভালো [২, ৩]। রক্তাল্পতা, ক্যালসিয়াম ও ভিটামিন ডি এর ঘাটতি মেটাতে প্রয়োজনীয় সাপ্লিমেন্ট দিতে হয় [৩]। হাড়ের ক্ষয় বা অস্টিওপোরোসিস হয়েছে কিনা তা জানার জন্য ডিএক্সএ (DXA) বোন স্ক্যান করা উচিত [৩]। খাদ্যাভ্যাস সঠিক হচ্ছে কিনা তা বোঝার জন্য প্রতি ৬ ও ১২ মাস পর পর রক্তে অ্যান্টি-টিটিজি অ্যান্টিবডি মেপে দেখতে হয়; খাবার ঠিক থাকলে অন্ত্র সুস্থ হয়ে অ্যান্টিবডির মাত্রা স্বাভাবিকের কোঠায় নেমে আসে [৩, ৭]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'Adverse food reactions require precise diagnostic discrimination between non-immune enzyme deficiencies (lactase non-persistence), acute IgE-mediated mast-cell anaphylaxis requiring emergency epinephrine, innate wheat sensitivities driven by non-gluten ATIs (NCGS), and HLA-DQ2/8 autoimmune Celiac enteropathy requiring lifelong strict dietary elimination [1, 2, 3, 7]. Conflating these categories leads to dangerous clinical mismanagement.',
              'খাদ্যজনিত প্রতিক্রিয়াগুলোকে অবশ্যই চারটি স্বতন্ত্র বিভাগে চিনতে হবে: এনজাইমের ঘাটতিজনিত ল্যাকটোজ অসহনশীলতা, এপিনেফ্রিন প্রয়োজনীয় তাৎক্ষণিক আইজিই অ্যালার্জি, গমের এটিআই চালিত নন-সিলিয়াক সংবেদনশীলতা এবং আজীবন কঠোর গ্লুটেন বর্জন প্রয়োজনীয় অটোইমিউন সিলিয়াক রোগ [১, ২, ৩, ৭]। এদেরকে গুলিয়ে ফেলা চিকিৎসার ক্ষেত্রে মারাত্মক ঝুঁকি তৈরি করে।'
            ),
            l(
              'Primary adult-type hypolactasia is an autosomal recessive evolutionary trait resulting from the absence of the MCM6 C/T-13910 enhancer polymorphism, leading to brush-border lactase-phlorizin hydrolase downregulation, unabsorbed luminal lactose accumulation, osmotic diarrhea, and anaerobic microbial hydrogen production detected via breath testing [2, 5]. Tolerating dairy via mixed meal matrices preserves dietary calcium without precipitating symptoms [2].',
              'প্রাপ্তবয়স্কদের ল্যাকটোজ অসহনশীলতা কোনো রোগ নয়; এটি MCM6 জিনের নিয়ন্ত্রক অংশে C/T-13910 মিউটেশন না থাকার কারণে শৈশবের পর স্বাভাবিকভাবেই ল্যাকটেজ কমে যাওয়ার রূপ [২, ৫]। এর ফলে অপাচ্য ল্যাকটোজ অন্ত্রে পানি টানে এবং ব্যাকটেরিয়াল গাঁজনে হাইড্রোজেন গ্যাস তৈরি করে [২, ৫]। তবে ভারী খাবারের সাথে অল্প দুধ বা চিজ খেলে কোনো সমস্যা ছাড়াই প্রয়োজনীয় ক্যালসিয়াম গ্রহণ করা সম্ভব [২]।'
            ),
            l(
              'The molecular pathogenesis of Celiac Disease requires the failure of human proteases to cleave the 33-mer gliadin peptide, calcium-dependent tTG-2 deamidation of neutral glutamine into negatively charged glutamic acid, high-affinity electrostatic docking into basic HLA-DQ2.5/8 pockets, Th1 IFN-gamma release, and IL-15 cytotoxic intraepithelial lymphocyte destruction of enterocytes resulting in Marsh III villous atrophy [3, 4].',
              'সিলিয়াক রোগের আণবিক ভিত্তি হলো মানুষের পরিপাক রসে ৩৩-মার গ্লিয়াডিনের অবিকৃত থাকা, tTG-2 এনজাইম দ্বারা এর নিরপেক্ষ গ্লুটামিনের ঋণাত্মক চার্জে রূপান্তর, HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী বন্ধন এবং ঘাতক লিম্ফোসাইট দিয়ে অন্ত্রের ভিলি পুরোপুরি ধ্বংস হয়ে যাওয়া (Marsh III) [৩, ৪]। এই প্রক্রিয়ায় রক্তে tTG-2 এর বিরুদ্ধে ক্ষতিকর অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]।'
            ),
            l(
              'Diagnostic testing for Celiac disease must be conducted BEFORE gluten withdrawal using anti-tTG IgA paired with total serum IgA to exclude false-negative results from selective IgA deficiency [3]. Confirmed Celiac disease mandates strict lifelong gluten elimination below 20 ppm, monitoring antibody seroreversion, screening for metabolic bone disease via DXA, and replacing malabsorbed micronutrients [3, 7].',
              'সিলিয়াক রোগের পরীক্ষা অবশ্যই গ্লুটেন বন্ধ করার আগেই সম্পন্ন করতে হবে এবং জন্মগত আইজিএ ঘাটতির কারণে ভুল রিপোর্ট এড়াতে অ্যান্টি-টিটিজির সাথে মোট আইজিএ পরিমাপ করতে হবে [৩]। রোগ নিশ্চিত হলে আজীবনের জন্য ২০ পিপিএমের নিচের কঠোর গ্লুটেন-মুক্ত খাবার গ্রহণ, হাড়ের ঘনত্ব পরীক্ষা এবং আয়রন ও ভিটামিন ডি এর ঘাটতি পূরণ করা আবশ্যক [৩, ৭]।'
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
          heading: l('1. Adverse Food Reactions: Classification & Molecular Paradigms', '১. খাদ্যজনিত বিরূপ প্রতিক্রিয়া: শ্রেণিবিভাগ ও মূল আণবিক ধারণা'),
          paragraphs: [
            l(
              'The molecular pathophysiology of adverse food reactions spans a multifaceted spectrum of non-immune biochemical deficiencies, IgE-dependent anaphylactic reactions, and HLA-restricted autoimmune enteropathies [1, 2]. Translational gastroenterology and clinical dietetics delineate these conditions into three distinct mechanistic paradigms: non-immunological food intolerances, IgE-mediated Type I immediate hypersensitivities, and cell-mediated autoimmune enteropathies [1, 3]. Establishing precise diagnostic boundaries between these entities is vital because their clinical trajectories, risks of fatal anaphylaxis, long-term oncologic complications, and nutritional management algorithms are fundamentally divergent [1, 2].',
              'খাদ্যজনিত বিরূপ প্রতিক্রিয়ার আণবিক প্যাথোফিজিওলজি জৈবরাসায়নিক এনজাইমের ঘাটতি থেকে শুরু করে তাৎক্ষণিক অ্যানাফিল্যাক্সিস এবং দীর্ঘস্থায়ী অটোইমিউন এন্টারোপ্যাথি পর্যন্ত বিস্তৃত [১, ২]। গ্যাস্ট্রোএন্টারোলজিতে এই সমস্যাগুলোকে তিনটি ভিন্ন শারীরবৃত্তীয় প্রক্রিয়ায় ভাগ করা হয়: অ-প্রতিরোধমূলক খাদ্য অসহনশীলতা, তাৎক্ষণিক আইজিই অ্যালার্জি এবং কোষ-চালিত অটোইমিউন এন্টারোপ্যাথি [১, ৩]। এদের মধ্যে সুস্পষ্ট পার্থক্য নির্ণয় করা অপরিহার্য, কারণ এদের লক্ষণ, চিকিৎসার জটিলতা এবং দীর্ঘমেয়াদী ক্যান্সারের ঝুঁকি সম্পূর্ণ ভিন্ন [১, ২]।'
            ),
            l(
              'Food intolerances are defined by the absence of specific immune system engagement, arising instead from enzymatic insufficiencies, pharmacological reactivity, or gastrointestinal transport saturation [1, 2]. Primary adult-type hypolactasia represents the archetypal enzymatic defect, resulting from genetically programmed downregulation of enterocyte lactase-phlorizin hydrolase [2]. Pharmacological intolerances involve non-allergic reactions to biogenic amines (such as histamine in aged cheeses and wine) or alkaloids (caffeine), resulting from saturable metabolic clearance via diamine oxidase (DAO) or monoamine oxidase (MAO) [1, 2]. Critically, food intolerances are dose-dependent: threshold consumption triggers localized gastrointestinal distress without provoking systemic cytokine release or vascular collapse [1, 2].',
              'খাদ্য অসহনশীলতায় কোনো রোগপ্রতিরোধ ব্যবস্থা জড়িত থাকে না; বরং এটি এনজাইমের ঘাটতি বা খাদ্যের জৈব রাসায়নিক উপাদানের প্রতি সংবেদনশীলতার কারণে ঘটে [১, ২]। এর প্রধান উদাহরণ হলো ল্যাকটেজ এনজাইমের অভাব [২]। তাছাড়া পুরনো চিজ বা ওয়াইনে থাকা হিস্টামিন ভাঙার এনজাইম (DAO) কম থাকলেও পেট ফাঁপা বা মাথাব্যথা হতে পারে [১, ২]। এই অসহনশীলতাগুলো খাবারের পরিমাণের ওপর নির্ভরশীল: সামান্য পরিমাণে খেলে কোনো সমস্যা হয় না এবং এতে কখনোই রক্তচাপ কমে যাওয়া বা শ্বাসকষ্টের মতো অ্যালার্জিজনিত প্রাণঘাতী ঝুঁকি থাকে না [১, ২]।'
            ),
            l(
              'In stark contrast, IgE-mediated food allergy represents an adaptive, antigen-specific Type I hypersensitivity directed against water-soluble food glycoproteins [1, 6]. Exposure to minute microgram quantities of specific allergen proteins (such as Ara h 1/2 in peanuts, Gal d 1 in eggs, or Bos d 8 in milk) induces immediate bivalent cross-linking of specific IgE antibodies pre-bound to high-affinity Fc-epsilon-RI receptors on mucosal and perivascular mast cells [1, 6]. This cross-linking triggers explosive degranulation of preformed histamine, neutral proteases, and de novo synthesized cysteinyl leukotrienes within minutes, driving systemic vasodilation, bronchial smooth muscle constriction, and fatal anaphylactic shock [1, 6]. Treatment requires instantaneous intramuscular administration of epinephrine [1, 6].',
              'অপরদিকে, আইজিই খাদ্য অ্যালার্জি হলো খাবারের প্রোটিনের বিরুদ্ধে অনাক্রম্য ব্যবস্থার এক মারাত্মক ও তাৎক্ষণিক প্রতিক্রিয়া [১, ৬]। বাদাম, ডিম বা দুধের অতি সামান্য কয়েক মাইক্রোগ্রাম প্রোটিন রক্তে প্রবেশ করার সাথে সাথে মাস্ট সেলের গায়ে থাকা IgE অ্যান্টিবডির সাথে যুক্ত হয়ে কয়েক মিনিটের মধ্যে বিপুল পরিমাণে হিস্টামিন ও লিউকোট্রিয়েন নিঃসরণ করায় [১, ৬]। এর ফলে শরীরের রক্তনালী অস্বাভাবিকভাবে প্রসারিত হয়ে রক্তচাপ শূন্যে নেমে যায় এবং শ্বাসনালী সংকুচিত হয়ে রোগী তাৎক্ষণিক অ্যানাফিল্যাক্টিক শকে মারা যেতে পারে [১, ৬]। একমাত্র সঠিক চিকিৎসা হলো অবিলম্বে থাইয়ের মাংসে এপিনেফ্রিন ইনজেকশন দেওয়া [১, ৬]।'
            ),
            l(
              'Autoimmune enteropathies, most prominently Celiac Disease, occupy a unique mechanistic space where a foreign dietary antigen (gluten) induces a break in immune tolerance and drives targeted autoimmune tissue destruction [3, 4]. Unlike food allergies, Celiac disease does not involve IgE antibodies, mast cell degranulation, or acute bronchospasm; rather, it is an HLA-DQ2/8-restricted Th1 enteropathy driven by intraepithelial cytotoxic killer lymphocytes that obliterate the absorptive duodenal architecture [3, 4]. Concurrently, plasma cells produce diagnostic autoantibodies against the endogenous enzyme tissue transglutaminase 2 (tTG-2) [3, 4]. Failing to distinguish Celiac disease from benign food intolerances results in untreated nutrient malabsorption, metabolic osteopathy, and lymphoma [3].',
              'অটোইমিউন সিলিয়াক রোগ এমন এক জটিল প্রক্রিয়া যেখানে খাদ্যের বাহ্যিক প্রোটিন (গ্লুটেন) মানবদেহের অনাক্রম্য সহনশীলতা ভেঙে ফেলে এবং নিজের অঙ্গের বিরুদ্ধেই যুদ্ধ ঘোষণা করে [৩, ৪]। এতে কোনো তাৎক্ষণিক আইজিই অ্যালার্জি বা শ্বাসকষ্ট হয় না; বরং গ্লুটেন খাওয়ার ফলে ঘাতক টি-লিম্ফোসাইটগুলো ক্ষুদ্রান্ত্রের শোষণকারী ভিলি কোষগুলোকে আক্রমণ করে সম্পূর্ণ ধ্বংস করে ফেলে [৩, ৪]। একই সাথে রক্তে শরীরের নিজস্ব tTG-2 এনজাইমের বিরুদ্ধে অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]। এই রোগকে সাধারণ পেটের গ্যাস ভেবে ভুল করলে রোগীর হাড়ের ক্ষয়, চরম পুষ্টিহীনতা এবং অন্ত্রের লিম্ফোমা ক্যান্সার হতে পারে [৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Lactase Persistence Genetics & Breath Testing Kinetics', '২. ল্যাকটেজ দীর্ঘস্থায়ী জিনতত্ত্ব ও শ্বাস পরীক্ষা'),
          paragraphs: [
            l(
              'The molecular physiology of lactose assimilation highlights the critical role of enterocyte brush-border enzymology in carbohydrate homeostasis [2]. Lactose is a polar disaccharide synthesized in the mammary gland, consisting of D-galactose and D-glucose joined by a beta(1->4) glycosidic linkage [2]. Intestinal enterocytes express apical sodium-glucose cotransporters (SGLT1) and facilitated uniporters (GLUT5, GLUT2) that transport monosaccharides but cannot transport disaccharides across the lipid bilayer [2]. Consequently, dietary lactose must undergo catalytic hydrolysis into monosaccharide subunits at the apical brush border by lactase-phlorizin hydrolase (LPH; EC 3.2.1.23/62), a large, heavily glycosylated type I transmembrane protein anchored in the duodenal and jejunal microvilli [2].',
              'ল্যাকটোজ হজমের শারীরবৃত্তীয় প্রক্রিয়া ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডার এনজাইম কাঠামোর ওপর পুরোপুরি নির্ভরশীল [২]। ল্যাকটোজ হলো একটি ডাইস্যাকারাইড যা গ্যালাক্টোজ এবং গ্লুকোজ অণুর সমন্বয়ে গঠিত [২]। অন্ত্রের কোষের পরিবহন প্রোটিনগুলো কেবল একক শর্করা (গ্লুকোজ বা ফ্রুক্টোজ) শোষণ করতে পারে, কোনো ডাইস্যাকারাইড শোষণ করতে পারে না [২]। তাই খাদ্যতালিকায় থাকা ল্যাকটোজকে ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে অবস্থিত ল্যাকটেজ-ফ্লোরিজিন হাইড্রোলেজ (LPH) নামক বিশেষ এনজাইমের মাধ্যমে ভেঙে গ্লুকোজ ও গ্যালাক্টোজে রূপান্তরিত করতে হয় [২]। এই এনজাইমটি ডুওডেনাম এবং জেজুনামের এন্টারোসাইট কোষে শক্তভাবে প্রোথিত থাকে [২]।'
            ),
            l(
              'The evolutionary divergence in adult lactose tolerance is controlled by an upstream regulatory enhancer located 13,910 base pairs upstream of the lactase gene (*LCT*) on chromosome 2q21, situated within intron 13 of the DNA helicase gene *MCM6* [2]. In the ancestral mammalian state (lactase non-persistence), epigenetic promoter methylation and chromatin compaction progressively silence *LCT* transcription following weaning, reducing brush-border lactase activity by 90% to 95% [2]. In populations with a history of pastoral dairy domestication, specific autosomal dominant single-nucleotide polymorphisms arose: the C/T-13910 variant in Europe and the G/C-14010, T/G-13915, and C/G-13907 variants in East Africa and the Middle East [2]. The C/T-13910 variant creates an octamer binding motif that recruits the transcription factor OCT-1, sustaining constitutive lifelong *LCT* transcription [2].',
              'প্রাপ্তবয়স্ক মানুষের শরীরে ল্যাকটোজ হজম করার ক্ষমতা বজায় থাকা বা কমে যাওয়া নিয়ন্ত্রিত হয় ২ নম্বর ক্রোমোজোমে অবস্থিত ল্যাকটেজ জিনের (*LCT*) ১৩,৯১০ বেস-পেয়ার উজানে থাকা একটি বিশেষ নিয়ন্ত্রক অঞ্চলের মাধ্যমে, যা পাশের *MCM6* জিনের ১৩ নম্বর ইন্ট্রনে অবস্থিত [২]। স্তন্যপায়ী প্রাণীর আদিম নিয়মে শৈশব পার হওয়ার পর ল্যাকটেজ জিনের ডিএনএ মিথাইলেশন ঘটে এর উৎপাদন ৯০ থেকে ৯৫ শতাংশ কমে যায় [২]। কিন্তু পশুপালনকারী জাতিগুলোর মধ্যে C/T-13910 নামক বিশেষ একক নিউক্লিওটাইড রূপান্তর ঘটে [২]। এই রূপান্তরের ফলে OCT-1 নামক ট্রান্সক্রিপশন ফ্যাক্টর সেখানে শক্তভাবে যুক্ত হয়ে প্রাপ্তবয়স্ক অবস্থাতেও আজীবন প্রচুর ল্যাকটেজ এনজাইম তৈরি অব্যাহত রাখে [২]।'
            ),
            l(
              'In lactase non-persistent individuals, unhydrolyzed lactose cannot be absorbed, creating an intraluminal osmotic gradient of ~140 mOsm/kg that draws extracellular water into the distal small bowel [2]. The resulting fluid load accelerates peristaltic transit, propelling dissolved lactose rapidly across the ileocecal valve into the cecum [2]. The colonic anaerobic microbiome metabolizes this unabsorbed disaccharide via the Embden-Meyerhof-Parnas glycolytic pathway and the bifid shunt, producing lactate and short-chain fatty acids (acetate, propionate, butyrate) while generating substantial volumes of hydrogen (H2), carbon dioxide (CO2), and methane (CH4) gases [2, 5]. Luminal acidification (pH falling below 5.5) and gaseous distension fire stretch-sensitive enteric mechanoreceptors, provoking painful borborygmi, abdominal cramping, and explosive osmotic diarrhea [2].',
              'ল্যাকটেজের অভাব থাকা ব্যক্তির শরীরে অপাচ্য ল্যাকটোজ অন্ত্রে তীব্র অস্মোটিক টানের সৃষ্টি করে দেহ থেকে বিপুল পরিমাণ তরল ক্ষুদ্রান্ত্রে টেনে নিয়ে আসে [২]। এর ফলে খাবার দ্রুত বৃহদন্ত্রে প্রবেশ করে [২]। বৃহদন্ত্রের অ্যানেরোবিক ব্যাকটেরিয়ারা এই ল্যাকটোজকে ভেঙে ল্যাকটেট ও শর্ট-চেইন ফ্যাটি অ্যাসিড তৈরির পাশাপাশি বিপুল পরিমাণে হাইড্রোজেন, কার্বন ডাই অক্সাইড ও মিথেন গ্যাস তৈরি করে [২, ৫]। অন্ত্রের pH ৫.৫ এর নিচে নেমে যায় এবং অতিরিক্ত গ্যাসে অন্ত্রের স্নায়ুগুলো উত্তেজিত হয়ে তীব্র মোচড়ানো ব্যথা, পেটে অস্বাভাবিক গর্জন ও পানির মতো পাতলা পায়খানার সৃষ্টি করে [২]।'
            ),
            l(
              'The clinical quantification of lactose malabsorption is standardized through the Hydrogen Breath Test (HBT) [2, 5]. Because human mammalian cells possess no metabolic pathways that generate molecular hydrogen, all hydrogen detected in exhaled alveolar breath is derived from microbial anaerobic fermentation of carbohydrates in the gut [5]. Following an overnight fast and administration of 25 g of lactose dissolved in water, end-expiratory alveolar air samples are collected at baseline and every 15-30 minutes for 180 minutes using an electrochemical sensor [5]. A sustained increase in breath hydrogen of >20 ppm above baseline accompanied by clinical symptoms establishes lactose malabsorption [2, 5]. Concomitant methane measurement is essential: in approximately 10-15% of patients, methanogenic archaea (*Methanobrevibacter smithii*) consume 4 moles of H2 per mole of CO2 to produce methane, necessitating a >10 ppm methane rise criterion to avoid false-negative results [5].',
              'ল্যাকটোজ অপশোষণ নির্ণয়ের বৈজ্ঞানিক পরীক্ষা হলো হাইড্রোজেন ব্রেথ টেস্ট (HBT) [২, ৫]। মানবদেহের কোনো কোষ আণবিক হাইড্রোজেন তৈরি করতে পারে না; নিঃশ্বাসে নির্গত সমস্ত হাইড্রোজেন কেবল অন্ত্রের ব্যাকটেরিয়াল গাঁজন থেকেই তৈরি হয় [৫]। খালি পেটে রোগীকে ২৫ গ্রাম ল্যাকটোজ খাওয়ানোর পর ৩ ঘণ্টা ধরে প্রতি ১৫-৩০ মিনিট পর পর সেন্সরের সাহায্যে নিঃশ্বাসের বাতাস পরীক্ষা করা হয় [৫]। প্রাথমিক মানের চেয়ে ২০ পিপিএমের বেশি হাইড্রোজেন বাড়লে এবং পেটে সমস্যা দেখা দিলে ল্যাকটোজ অপশোষণ নিশ্চিত হয় [২, ৫]। তবে ১০-১৫% রোগীর পেটে মিথেন তৈরিকারী বিশেষ জীবাণু (*Methanobrevibacter smithii*) থাকে যা হাইড্রোজেন খেয়ে মিথেন গ্যাস তৈরি করে ফেলে; তাই একই সাথে মিথেন গ্যাসও (>১০ পিপিএম) পরিমাপ করা অপরিহার্য যাতে কোনো ভুল রিপোর্ট না আসে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Celiac Immunopathology: 33-mer Gliadin & HLA-DQ2.5/8', '৩. সিলিয়াক রোগ: ৩৩-মার গ্লিয়াডিন ও HLA-DQ2.5/8 অটোইমিউনিটি'),
          paragraphs: [
            l(
              'Celiac disease represents a premier model of human organ-specific autoimmunity, characterized by an adaptive immune attack against the small intestinal mucosa triggered by dietary gluten [3, 4]. Gluten is the complex protein matrix found in wheat, rye, and barley, partitioned into monomeric alpha-, beta-, gamma-, and omega-gliadins and polymeric high- and low-molecular-weight glutenins [3, 4]. Both protein fractions are dominated by an unusual amino acid composition: proline comprises approximately 15% and glutamine comprises approximately 35% of total residues [4]. Human gastric pepsin, pancreatic trypsin, chymotrypsin, and carboxypeptidases possess cleavage specificities that cannot accommodate peptide bonds adjacent to secondary amine proline residues, leaving gluten partially digested as large, stable oligopeptides [4, 5].',
              'সিলিয়াক রোগ হলো মানবদেহের একটি অন্যতম প্রধান অটোইমিউন রোগ যেখানে খাদ্যের গ্লুটেন প্রোটিন অন্ত্রের নিজস্ব টিস্যুর বিরুদ্ধে মারাত্মক ধ্বংসযজ্ঞ ডেকে আনে [৩, ৪]। গ্লুটেন মূলত গমের গ্লিয়াডিন ও গ্লুটেনিন প্রোটিনের মিশ্রণ [৩, ৪]। এই প্রোটিনগুলোতে অস্বাভাবিক পরিমাণে প্রোলিন (১৫%) এবং গ্লুটামিন (৩৫%) অ্যামিনো অ্যাসিড থাকে [৪]। মানুষের পাকস্থলী ও অগ্ন্যাশয়ের কোনো পাচক এনজাইম প্রোলিনের পাশে থাকা পেপটাইড বন্ধন ভাঙতে পারে না, যার ফলে গ্লুটেন সম্পূর্ণ না ভেঙে দীর্ঘ ও অবিকৃত পেপটাইড শিকল হিসেবে ক্ষুদ্রান্ত্রে প্রবেশ করে [৪, ৫]।'
            ),
            l(
              'The most potent disease-inducing fragment is the alpha-gliadin 33-mer peptide (residues 56-88: LQLQPFPQPQLPYPQPQLPYPQPQLPYPQPQPF), which contains six overlapping copies of three distinct T-cell epitopes [4, 5]. In the setting of transient barrier breakdown or zonulin-mediated tight junction opening, intact 33-mer peptides cross the epithelial monolayer into the lamina propria via paracellular leakage or transcellular protected retrotranscytosis bound to secretory IgA [4, 5]. In the lamina propria, the 33-mer encounters tissue transglutaminase 2 (tTG-2), a calcium-dependent multi-functional acyltransferase localized in the subepithelial extracellular matrix and released from stromal fibroblasts and endothelial cells during cellular stress [3, 4].',
              'সবচেয়ে ক্ষতিকর উপাদানটি হলো আলফা-গ্লিয়াডিনের ৩৩-মার পেপটাইড (33-mer gliadin) [৪, ৫]। এতে একাধিক অনাক্রম্য সংবেদনশীল অংশ থাকে যা মানুষের পাচক এনজাইমে সম্পূর্ণ অক্ষত থাকে এবং অন্ত্রের দুর্বল প্রাচীর ভেদ করে ল্যামিনা প্রোপ্রিয়ায় প্রবেশ করে [৪, ৫]। সেখানে এটি টিস্যু ট্রান্সগ্লুটামিনেজ ২ (tTG-2) নামক এনজাইমের সংস্পর্শে আসে, যা ক্যালসিয়ামের উপস্থিতিতে সক্রিয় হয়ে কাজ করে [৩, ৪]।'
            ),
            l(
              'Tissue transglutaminase 2 catalyzes a critical post-translational modification: the stereospecific deamidation of neutral glutamine residues into negatively charged glutamic acid (such as Q65E and Q72E) [3, 4]. In individuals carrying the high-risk MHC Class II heterodimers HLA-DQ2.5 (encoded by DQA1*05:01 and DQB1*02:01) or HLA-DQ8 (DQA1*03:01 and DQB1*03:02), the antigen-binding groove possesses basic, positively charged residues clustered at the P4, P6, P7, and P9 anchor pockets [3, 4]. While native neutral gliadin displays negligible affinity for these pockets, tTG-2-mediated deamidation creates electrostatic salt bridges that lock deamidated gliadin into the HLA-DQ2.5 groove with nanomolar binding affinity, enabling dendritic cells to present the complex to naive CD4+ T cells with exceptional efficiency [3, 4].',
              'tTG-2 এনজাইম গ্লিয়াডিনের গায়ে থাকা নিরপেক্ষ গ্লুটামিন অ্যামিনো অ্যাসিডগুলোকে রাসায়নিকভাবে পরিবর্তন করে ঋণাত্মক চার্জযুক্ত গ্লুটামিক অ্যাসিডে রূপান্তর করে ফেলে [৩, ৪]। সংবেদনশীল ব্যক্তিদের রোগপ্রতিরোধ কোষের গায়ে থাকা HLA-DQ2.5 বা HLA-DQ8 অণুর খাঁজগুলো শক্তিশালী ধনাত্মক চার্জ দিয়ে গঠিত [৩, ৪]। নিরপেক্ষ অবস্থায় গ্লিয়াডিন এখানে যুক্ত হতে পারে না, কিন্তু ঋণাত্মক চার্জে রূপান্তরিত হওয়ার পর এটি তীব্র বৈদ্যুতিক আকর্ষণে ধনাত্মক খাঁজের সাথে শক্তভাবে আটকে যায় [৩, ৪]। এর ফলে ডেনড্রাইটিক কোষগুলো অত্যন্ত সফলভাবে এই ক্ষতিকর প্রোটিনটিকে CD4+ টি-সহায়ক কোষের সামনে তুলে ধরে মারাত্মক অটোইমিউন সংকেত চালু করে দেয় [৩, ৪]।'
            ),
            l(
              'Ligation of the T-cell receptor on gluten-specific CD4+ T helper cells drives massive clonal expansion and secretion of Th1 cytokines, predominantly Interferon-gamma (IFN-gamma) and Interleukin-21 (IL-21) [3, 4]. Concurrently, stressed enterocytes overexpress surface non-classical MHC Class I molecules (MICA and MICB) and secrete Interleukin-15 (IL-15) [3, 4]. IL-15 acts in a paracrine fashion on intraepithelial lymphocytes (IELs), upregulating the activating natural killer receptor NKG2D and transforming IELs into antigen-independent killer cells [3, 4]. Cytotoxic IELs engage MICA/MICB on enterocytes, releasing perforin and granzyme B to trigger enterocyte apoptosis, causing total villous blunting (Marsh IIIc atrophy), crypt hyperplasia, and catastrophic nutrient malabsorption [3, 4]. Simultaneously, gluten-reactive CD4+ T cells provide help to autoreactive B cells, driving clonal differentiation into plasma cells secreting anti-tTG IgA autoantibodies [3, 4].',
              'টি-কোষ সক্রিয় হওয়ার সাথে সাথে বিপুল পরিমাণে ইন্টারফেরন-গামা ও ইন্টারলিউকিন-২১ ক্ষরিত হতে থাকে [৩, ৪]। একই সাথে অন্ত্রের ক্ষতিগ্রস্ত কোষগুলো ইন্টারলিউকিন-১৫ (IL-15) নিঃসরণ করে ঘাতক লিম্ফোসাইটগুলোকে (IEL) মারাত্মকভাবে উত্তেজিত করে তোলে [৩, ৪]। এই ঘাতক কোষগুলো বিষাক্ত পারফোরিন ও গ্র্যানজাইম ঢেলে অন্ত্রের শোষণকারী ভিলি কোষগুলোকে পুরোপুরি হত্যা করে সমতল করে দেয় (Marsh IIIc Villous Atrophy) [৩, ৪]। ফলে অন্ত্রের শোষণ ক্ষমতা সম্পূর্ণ ধ্বংস হয়ে যায় এবং রক্তে anti-tTG IgA অটোঅ্যান্টিবডি ছড়িয়ে পড়ে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. IgE Anaphylaxis & Non-Celiac Wheat Sensitivity (NCGS)', '৪. আইজিই অ্যানাফিল্যাক্সিস ও নন-সিলিয়াক গমের সংবেদনশীলতা'),
          paragraphs: [
            l(
              'The molecular architecture of IgE-mediated food allergy contrasts sharply with the slow cellular enteropathy of Celiac disease [1, 6]. Classical food allergy is an immediate Type I hypersensitivity reaction orchestrated by specific IgE antibodies bound with picomolar affinity (Ka ~10^10 M^-1) to the tetrameric Fc-epsilon-RI receptor complex (alpha, beta, and disulfide-linked gamma2 subunits) on the surface of mucosal mast cells and circulating basophils [1, 6]. The cross-linking of at least two adjacent surface IgE molecules by a multivalent food protein allergen triggers rapid receptor clustering within membrane lipid rafts [6].',
              'আইজিই-নির্ভর খাদ্য অ্যালার্জির আণবিক গতিবিধি সিলিয়াক রোগের দীর্ঘস্থায়ী প্রক্রিয়ার চেয়ে সম্পূর্ণ আলাদা [১, ৬]। এটি হলো একটি অতি-তীব্র তাৎক্ষণিক প্রতিক্রিয়া, যা মাস্ট সেল ও ব্যাসোফিলের গায়ে থাকা Fc-epsilon-RI রিসেপ্টরের সাথে যুক্ত IgE অ্যান্টিবডির মাধ্যমে পরিচালিত হয় [১, ৬]। খাবারের প্রোটিন অ্যালার্জেন পাশাপাশি থাকা দুটি IgE অণুকে যুক্ত করে গুচ্ছবদ্ধ করার সাথে সাথেই সেকেন্ডের মধ্যে কোষের ভেতর বিস্ফোরক প্রতিক্রিয়া শুরু হয়ে যায় [৬]।'
            ),
            l(
              'Receptor aggregation stimulates the constitutive tyrosine kinase Lyn to phosphorylate immunoreceptor tyrosine-based activation motifs (ITAMs) on the beta and gamma chains of Fc-epsilon-RI [6]. Phosphorylated ITAMs recruit the cytosolic tandem-SH2 domain kinase Syk, which autophosphorylates and initiates a downstream signaling cascade by phosphorylating the scaffold protein LAT [6]. Activated LAT recruits Phospholipase C-gamma1 (PLC-gamma1), which hydrolyzes membrane phosphatidylinositol 4,5-bisphosphate (PIP2) to yield inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) [6]. IP3 opens ligand-gated calcium channels on the endoplasmic reticulum, while DAG activates protein kinase C (PKC) [6]. The resulting surge in cytosolic free calcium drives SNARE-mediated granule exocytosis, dumping preformed histamine, neutral proteases (tryptase, chymase), and tumor necrosis factor-alpha (TNF-alpha) into the interstitial space within 1 to 5 minutes [1, 6].',
              'গুচ্ছবদ্ধ হওয়ার সাথে সাথে Lyn এবং Syk এনজাইম সক্রিয় হয়ে কোষের ভেতরের ফসফোলাইপেজ-সি (PLC-gamma1) চালু করে দেয় [৬]। এটি কোষের ভেতরের ক্যালসিয়াম সঞ্চয় এক মুহূর্তেই মুক্ত করে সাইটোপ্লাজমে ক্যালসিয়ামের মাত্রা বিপুল পরিমাণে বাড়িয়ে দেয় [৬]। এই ক্যালসিয়ামের বন্যায় মাস্ট সেলের ভেতরে থাকা সমস্ত দানাদার থলি ফেটে গিয়ে কয়েক মিনিটের মধ্যে বিপুল পরিমাণে হিস্টামিন, ট্রিপটেজ ও TNF-alpha রক্তে ঢেলে দেয় [১, ৬]। এর ফলে অতি দ্রুত তীব্র প্রদাহ ও অ্যালার্জি ছড়িয়ে পড়ে [৬]।'
            ),
            l(
              'Histamine binds endothelial H1 receptors to trigger rapid nitric oxide (NO) generation and vascular smooth muscle relaxation, causing profound peripheral vasodilation and increased capillary permeability with plasma extravasation, manifesting as urticaria, angioedema, and hypovolemic shock [1, 6]. Concurrently, cytosolic phospholipase A2 liberates arachidonic acid to fuel cyclooxygenase-2 (COX-2) and 5-lipoxygenase (5-LOX) pathways, synthesizing prostaglandin D2 (PGD2) and cysteinyl leukotrienes (LTC4, LTD4, LTE4) [6]. Leukotriene LTD4 is roughly 1,000 times more potent than histamine in driving sustained bronchial smooth muscle contraction and microvascular leakage [6]. Intramuscular epinephrine (0.01 mg/kg; adult dose 0.3-0.5 mg into the anterolateral mid-thigh) is the mandatory first-line therapy: it acts via alpha-1 adrenergic receptors to induce vasoconstriction and restore arterial pressure, and via beta-2 adrenergic receptors to relax bronchial smooth muscle and elevate intracellular cAMP, shutting down further mast cell degranulation [1, 6].',
              'নিঃসৃত হিস্টামিন রক্তনালীগুলোকে মাত্রাতিরিক্ত প্রসারিত করে নিমেষেই রক্তচাপ কমিয়ে দেয় এবং সারা শরীরে ফুলে যাওয়া বা চুলকানির সৃষ্টি করে [১, ৬]। একই সাথে মাস্ট সেল লিউকোট্রিয়েন (LTD4) তৈরি করে যা হিস্টামিনের চেয়ে ১,০০০ গুণ বেশি শক্তিতে শ্বাসনালী সংকুচিত করে রোগীকে শ্বাসরোধ করে ফেলে [৬]। এই জীবন-সংকটাপন্ন অবস্থায় থাইয়ের মাংসে অবিলম্বে এপিনেফ্রিন (Epinephrine) ইনজেকশন দিতে হয়; এটি রক্তনালী সংকুচিত করে রক্তচাপ পুনরুদ্ধার করে এবং শ্বাসনালী খুলে দিয়ে রোগীর নিশ্চিত মৃত্যু ঠেকায় [১, ৬]।'
            ),
            l(
              'In clinical practice, many patients report gastrointestinal symptoms and systemic manifestations (fatigue, headache, brain fog, arthralgias) following wheat ingestion but lack Celiac autoantibodies (anti-tTG IgA negative), duodenal villous atrophy, and wheat-specific IgE [7]. This entity is classified as Non-Celiac Wheat Sensitivity (NCGS) [7]. Rather than being an adaptive autoimmune or allergic response to gluten, NCGS is driven by non-gluten components of wheat, predominantly alpha-Amylase/Trypsin Inhibitors (ATIs) and fermentable short-chain fructans (FODMAPs) [7]. ATIs represent pest-resistance proteins that resist gastric and duodenal proteolysis, binding to Toll-like receptor 4 (TLR4) on myeloid dendritic cells and monocytes [7]. This innate TLR4 ligation stimulates the NF-kappaB pathway, releasing pro-inflammatory cytokines (IL-8, TNF-alpha) that trigger low-grade mucosal inflammation and systemic symptoms, all of which resolve promptly upon wheat elimination [7].',
              'ক্লিনিক্যাল ক্ষেত্রে বহু রোগী গম খাওয়ার পর পেটে সমস্যা এবং মাথাব্যথা বা ক্লান্তিতে ভোগেন, অথচ রক্তে সিলিয়াকের কোনো অ্যান্টিবডি থাকে না এবং অন্ত্রের ভিলিও সম্পূর্ণ অক্ষত থাকে [৭]। এই সমস্যাটিকে নন-সিলিয়াক গমের সংবেদনশীলতা (NCGS) বলা হয় [৭]। এটি কোনো গ্লুটেনজনিত অটোইমিউন রোগ নয়; বরং গমের মধ্যে থাকা অপাচ্য ফ্রুক্টান এবং অ্যামাইলেজ-ট্রিপসিন ইনহিবিটর (ATIs) নামক বিশেষ কিছু প্রোটিনের কারণে ঘটে [৭]। এই ATIs প্রোটিনগুলো অন্ত্রের রোগপ্রতিরোধ কোষের TLR4 রিসেপ্টরকে উত্তেজিত করে জন্মগত অনাক্রম্যতার মাধ্যমে সাময়িক প্রদাহ সৃষ্টি করে, যা গম পরিহার করলে পুরোপুরি সেরে যায় [৭]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Workup, Serology & The Gluten-Free Diet', '৫. ক্লিনিক্যাল রোগ নির্ণয়, সেরোলজি ও গ্লুটেন-মুক্ত খাদ্যবিধি'),
          paragraphs: [
            l(
              'The diagnostic workup of Celiac disease must follow rigorous evidence-based algorithms to avoid misdiagnosis or inappropriate dietary initiation [3, 7]. The primary serological screening test is the automated enzyme-linked immunosorbent assay (ELISA) measuring serum anti-tissue transglutaminase immunoglobulin A (anti-tTG IgA) directed against recombinant human tTG-2 [3]. Anti-tTG IgA boasts sensitivity and specificity exceeding 95% in untreated active Celiac disease [3]. Crucially, guidelines mandate that total serum IgA must always be quantified simultaneously [3]. Selective IgA deficiency occurs in 2% to 3% of Celiac patients (a 10- to 15-fold enrichment over the general population); testing an IgA-deficient patient solely with anti-tTG IgA produces a devastating false-negative result [3]. In patients with total IgA <0.2 g/L, clinicians must measure IgG-based antibodies: anti-tTG IgG and anti-deamidated gliadin peptide (DGP) IgG [3].',
              'সিলিয়াক রোগ নির্ণয়ে সঠিক ক্লিনিক্যাল নীতিমালা মেনে চলা বাধ্যতামূলক, অন্যথায় রোগ ভুলভাবে বাদ পড়ে রোগীর মারাত্মক ক্ষতি হতে পারে [৩, ৭]। প্রথম এবং প্রধান রক্ত পরীক্ষা হলো অ্যান্টি-টিটিজি আইজিএ (anti-tTG IgA), যার নির্ভুলতা ৯৫ শতাংশেরও বেশি [৩]। তবে এর সাথে অবশ্যই মোট সিরাম আইজিএ (Total IgA) পরীক্ষা করতে হবে [৩]। কারণ সিলিয়াক রোগীদের প্রায় ২-৩ শতাংশের শরীরে জন্মগতভাবেই আইজিএ অ্যান্টিবডি থাকে না [৩]। এই ঘাটতি থাকা অবস্থায় পরীক্ষা করলে তীব্র রোগ থাকা সত্ত্বেও রিপোর্ট নেগেটিভ আসবে; তাই আইজিএ কম থাকলে সাথে সাথে আইজিজি-ভিত্তিক (anti-tTG IgG) পরীক্ষা করাতে হয় [৩]।'
            ),
            l(
              'In adult patients, positive serology mandates confirmation by upper esophagogastroduodenoscopy (EGD) with multiple oriented mucosal biopsies [3]. Because Celiac mucosal damage is frequently patchy, international gastroenterology societies require obtaining at least four biopsies from the second and third parts of the duodenum, along with at least two biopsies from the duodenal bulb [3]. Histological staging follows the modified Marsh-Oberhuber criteria: Marsh 1 (infiltrative, >25-40 intraepithelial lymphocytes per 100 enterocytes), Marsh 2 (hyperplastic crypts with preserved villi), and Marsh 3 (destructive villous blunting, subclassified into 3a partial, 3b subtotal, and 3c total villous atrophy) [3, 4]. A definitive Celiac diagnosis requires concordant positive serology and Marsh 2-3 enteropathy [3].',
              'প্রাপ্তবয়স্কদের ক্ষেত্রে রক্ত পরীক্ষার পর এন্ডোস্কোপি করে ক্ষুদ্রান্ত্রের বায়োপসি নেওয়া রোগ নিশ্চিত করার একমাত্র আন্তর্জাতিক মাপকাঠি [৩]। সিলিয়াক রোগ অন্ত্রের সব জায়গায় সমানভাবে ছড়ায় না বলে ডুওডেনাম থেকে কমপক্ষে ৪টি এবং ডুওডেনাল বাল্ব থেকে ২টি বায়োপসি নিতে হয় [৩]। মাইক্রোস্কোপে ভিলির ক্ষয় দেখে রোগটিকে মার্শ (Marsh) স্কেলে ভাগ করা হয়: লিম্ফোসাইট বৃদ্ধি পাওয়া (Marsh 1), ক্রিপ্ট বড় হওয়া (Marsh 2) এবং ভিলি সম্পূর্ণ সমতল হয়ে যাওয়া (Marsh 3) [৩, ৪]। Marsh 3 পাওয়া গেলে সিলিয়াক রোগ নিশ্চিত হয় [৩]।'
            ),
            l(
              'The sole effective, life-saving therapy for Celiac disease is the lifelong, absolute elimination of dietary gluten (Gluten-Free Diet, GFD) [3, 7]. The Codex Alimentarius Commission and U.S. FDA establish that foods labeled "gluten-free" must contain less than 20 parts per million (ppm) of gluten (<20 mg gluten per kg of food), a threshold proven to maintain mucosal healing in over 95% of patients [3]. Strict compliance requires the total exclusion of all forms of wheat (including spelt, farro, einkorn, kamut, bulgur, durum, semolina), barley (malt, malt vinegar), rye, and triticale [3]. Pure, certified uncontaminated oats are tolerated by over 99% of Celiac patients, but commercial oats are frequently contaminated during agricultural harvesting and milling, requiring verified third-party gluten-free certification [3, 7].',
              'সিলিয়াক রোগের একমাত্র বিজ্ঞানসম্মত চিকিৎসা হলো আজীবন ১০০% গ্লুটেন-মুক্ত খাবার গ্রহণ করা [৩, ৭]। আন্তর্জাতিক মানদণ্ড অনুযায়ী "গ্লুটেন-মুক্ত" বলতে বোঝায় এমন খাবার যাতে গ্লুটেনের মাত্রা প্রতি কেজিতে ২০ মিলিগ্রামের কম (২০ পিপিএমের নিচে) থাকে [৩]। এই পথ্যে গম, বার্লি ও রাই দিয়ে তৈরি সমস্ত খাবার পুরোপুরি নিষিদ্ধ [৩]। বিশুদ্ধ ওটমিল রোগীরা খেতে পারলেও বাজারে সাধারণ ওটমিল গমের সাথে মাড়াই করার ফলে দূষিত হয়ে যায়, তাই পরীক্ষিত গ্লুটেন-মুক্ত ওটমিল বেছে নিতে হবে [৩, ৭]। এমনকি প্রক্রিয়াজাত খাবার বা ওষুধের ভেতরে থাকা প্রচ্ছন্ন গ্লুটেনও রোগীকে সতর্কতার সাথে এড়িয়ে চলতে হয় [৭]।'
            ),
            l(
              'Management of newly diagnosed Celiac patients requires comprehensive nutritional restitution and long-term surveillance [3, 7]. Because villous atrophy impairs the microvillar brush border, secondary lactase deficiency is common at presentation; patients should temporarily limit lactose until mucosal regeneration occurs [2, 3]. Baseline clinical evaluation must screen for malabsorption-induced micronutrient deficiencies: serum ferritin (iron deficiency occurs in up to 50%), complete blood count, 25-hydroxyvitamin D, serum calcium, vitamin B12, folate, and zinc [3]. Dual-energy X-ray absorptiometry (DXA) screening of the lumbar spine and femoral neck is recommended to assess for metabolic bone disease (osteopenia or osteoporosis) driven by chronic malabsorption and secondary hyperparathyroidism [3]. Ongoing compliance is monitored non-invasively by following serum anti-tTG IgA titers at 6, 12, and 24 months, which decline toward normal as intestinal permeability and mucosal architecture recover [3, 7].',
              'গ্লুটেন-মুক্ত খাবার শুরুর পর রোগীর পুষ্টির ঘাটতি পূরণ করা অত্যন্ত জরুরি [৩, ৭]। অন্ত্রের ভিলি ক্ষতিগ্রস্ত থাকার কারণে শুরুতে দুধ হজমের ল্যাকটেজ এনজাইম সাময়িকভাবে কমে যেতে পারে, তাই ভিলি সুস্থ না হওয়া পর্যন্ত কিছুদিন দুধ সীমিত রাখা ভালো [২, ৩]। রক্তাল্পতা, ক্যালসিয়াম ও ভিটামিন ডি এর ঘাটতি মেটাতে প্রয়োজনীয় সাপ্লিমেন্ট দিতে হয় [৩]। হাড়ের ক্ষয় বা অস্টিওপোরোসিস হয়েছে কিনা তা জানার জন্য ডিএক্সএ (DXA) বোন স্ক্যান করা উচিত [৩]। খাদ্যাভ্যাস সঠিক হচ্ছে কিনা তা বোঝার জন্য প্রতি ৬ ও ১২ মাস পর পর রক্তে অ্যান্টি-টিটিজি অ্যান্টিবডি মেপে দেখতে হয়; খাবার ঠিক থাকলে অন্ত্র সুস্থ হয়ে অ্যান্টিবডির মাত্রা স্বাভাবিকের কোঠায় নেমে আসে [৩, ৭]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Clinical Takeaways & Practice Questions', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও অনুশীলন'),
          paragraphs: [
            l(
              'Adverse food reactions require precise diagnostic discrimination between non-immune enzyme deficiencies (lactase non-persistence), acute IgE-mediated mast-cell anaphylaxis requiring emergency epinephrine, innate wheat sensitivities driven by non-gluten ATIs (NCGS), and HLA-DQ2/8 autoimmune Celiac enteropathy requiring lifelong strict dietary elimination [1, 2, 3, 7]. Conflating these categories leads to dangerous clinical mismanagement.',
              'খাদ্যজনিত প্রতিক্রিয়াগুলোকে অবশ্যই চারটি স্বতন্ত্র বিভাগে চিনতে হবে: এনজাইমের ঘাটতিজনিত ল্যাকটোজ অসহনশীলতা, এপিনেফ্রিন প্রয়োজনীয় তাৎক্ষণিক আইজিই অ্যালার্জি, গমের এটিআই চালিত নন-সিলিয়াক সংবেদনশীলতা এবং আজীবন কঠোর গ্লুটেন বর্জন প্রয়োজনীয় অটোইমিউন সিলিয়াক রোগ [১, ২, ৩, ৭]। এদেরকে গুলিয়ে ফেলা চিকিৎসার ক্ষেত্রে মারাত্মক ঝুঁকি তৈরি করে।'
            ),
            l(
              'Primary adult-type hypolactasia is an autosomal recessive evolutionary trait resulting from the absence of the MCM6 C/T-13910 enhancer polymorphism, leading to brush-border lactase-phlorizin hydrolase downregulation, unabsorbed luminal lactose accumulation, osmotic diarrhea, and anaerobic microbial hydrogen production detected via breath testing [2, 5]. Tolerating dairy via mixed meal matrices preserves dietary calcium without precipitating symptoms [2].',
              'প্রাপ্তবয়স্কদের ল্যাকটোজ অসহনশীলতা কোনো রোগ নয়; এটি MCM6 জিনের নিয়ন্ত্রক অংশে C/T-13910 মিউটেশন না থাকার কারণে শৈশবের পর স্বাভাবিকভাবেই ল্যাকটেজ কমে যাওয়ার রূপ [২, ৫]। এর ফলে অপাচ্য ল্যাকটোজ অন্ত্রে পানি টানে এবং ব্যাকটেরিয়াল গাঁজনে হাইড্রোজেন গ্যাস তৈরি করে [২, ৫]। তবে ভারী খাবারের সাথে অল্প দুধ বা চিজ খেলে কোনো সমস্যা ছাড়াই প্রয়োজনীয় ক্যালসিয়াম গ্রহণ করা সম্ভব [২]।'
            ),
            l(
              'The molecular pathogenesis of Celiac Disease requires the failure of human proteases to cleave the 33-mer gliadin peptide, calcium-dependent tTG-2 deamidation of neutral glutamine into negatively charged glutamic acid, high-affinity electrostatic docking into basic HLA-DQ2.5/8 pockets, Th1 IFN-gamma release, and IL-15 cytotoxic intraepithelial lymphocyte destruction of enterocytes resulting in Marsh III villous atrophy [3, 4].',
              'সিলিয়াক রোগের আণবিক ভিত্তি হলো মানুষের পরিপাক রসে ৩৩-মার গ্লিয়াডিনের অবিকৃত থাকা, tTG-2 এনজাইম দ্বারা এর নিরপেক্ষ গ্লুটামিনের ঋণাত্মক চার্জে রূপান্তর, HLA-DQ2.5 এর ধনাত্মক খাঁজে শক্তিশালী বন্ধন এবং ঘাতক লিম্ফোসাইট দিয়ে অন্ত্রের ভিলি পুরোপুরি ধ্বংস হয়ে যাওয়া (Marsh III) [৩, ৪]। এই প্রক্রিয়ায় রক্তে tTG-2 এর বিরুদ্ধে ক্ষতিকর অটোঅ্যান্টিবডি তৈরি হয় [৩, ৪]।'
            ),
            l(
              'Diagnostic testing for Celiac disease must be conducted BEFORE gluten withdrawal using anti-tTG IgA paired with total serum IgA to exclude false-negative results from selective IgA deficiency [3]. Confirmed Celiac disease mandates strict lifelong gluten elimination below 20 ppm, monitoring antibody seroreversion, screening for metabolic bone disease via DXA, and replacing malabsorbed micronutrients [3, 7].',
              'সিলিয়াক রোগের পরীক্ষা অবশ্যই গ্লুটেন বন্ধ করার আগেই সম্পন্ন করতে হবে এবং জন্মগত আইজিএ ঘাটতির কারণে ভুল রিপোর্ট এড়াতে অ্যান্টি-টিটিজির সাথে মোট আইজিএ পরিমাপ করতে হয় [৩]। রোগ নিশ্চিত হলে আজীবনের জন্য ২০ পিপিএমের নিচের কঠোর গ্লুটেন-মুক্ত খাবার গ্রহণ, হাড়ের ঘনত্ব পরীক্ষা এবং আয়রন ও ভিটামিন ডি এর ঘাটতি পূরণ করা আবশ্যক [৩, ৭]।'
            ),
          ],
        },
      ],
    },
  },
  assessment: {
    question: l(
      'Why must total serum IgA be measured simultaneously when screening for Celiac disease with anti-tissue transglutaminase IgA (anti-tTG IgA)?',
      'অ্যান্টি-টিটিজি আইজিএ পরীক্ষার মাধ্যমে সিলিয়াক রোগ নির্ণয়ের সময় কেন একই সাথে মোট সিরাম আইজিএ (Total IgA) পরীক্ষা করা বাধ্যতামূলক?'
    ),
    options: [
      l(
        'Selective IgA deficiency occurs at a 10- to 15-fold higher rate in Celiac patients, which can cause a false-negative anti-tTG IgA result unless IgG-based testing is substituted.',
        'সিলিয়াক রোগীদের মধ্যে জন্মগত আইজিএ ঘাটতি ১০-১৫ গুণ বেশি থাকে, যার কারণে অ্যান্টি-টিটিজি ফলস-নেগেটিভ আসতে পারে; তাই ঘাটতি থাকলে আইজিজি টেস্ট করতে হয়।'
      ),
      l(
        'Total serum IgA neutralizes tissue transglutaminase 2 in circulation, preventing liver damage.',
        'মোট আইজিএ রক্তে থাকা টিটিজি এনজাইমকে নিষ্ক্রিয় করে যকৃতের সুরক্ষা নিশ্চিত করে।'
      ),
      l(
        'High total IgA proves that the patient has already fully cleared gluten from the lamina propria.',
        'উচ্চ আইজিএ প্রমাণ করে যে রোগীর অন্ত্র থেকে গ্লুটেন সম্পূর্ণ দূর হয়ে গেছে।'
      ),
      l(
        'Total IgA differentiates between HLA-DQ2.5 and HLA-DQ8 genotypes without DNA sequencing.',
        'মোট আইজিএ পরীক্ষা দিয়ে ডিএনএ সিকোয়েন্সিং ছাড়াই জিনোটাইপ নির্ধারণ করা যায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Selective IgA deficiency has a prevalence of ~2–3% in Celiac disease compared to ~0.2% in the general population. If an IgA-deficient patient is tested only for anti-tTG IgA, the test will return falsely negative despite severe enteropathy. Measuring total IgA detects this deficiency and alerts clinicians to order IgG-based serology (anti-tTG IgG or anti-DGP IgG).',
      'সিলিয়াক রোগীদের প্রায় ২-৩ শতাংশের জন্মগতভাবে আইজিএ ঘাটতি থাকে। এই অবস্থায় শুধু অ্যান্টি-টিটিজি আইজিএ পরীক্ষা করলে তীব্র রোগ থাকা সত্ত্বেও রিপোর্ট ভুলভাবে নেগেটিভ আসবে। তাই মোট আইজিএ পরিমাপ করে ঘাটতি ধরা পড়লে আইজিজি ভিত্তিক অ্যান্টিবডি পরীক্ষা করতে হয়।'
    ),
  },
}
