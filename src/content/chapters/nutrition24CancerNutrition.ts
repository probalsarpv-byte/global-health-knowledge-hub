import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const cancerRefs = [
  {
    id: 'fearon-lancet-oncol-cachexia-2011',
    authors: 'Kenneth Fearon, Florian Strasser, Stefan D. Anker, et al.',
    title: 'Definition and classification of cancer cachexia: an international consensus',
    organization: 'The Lancet Oncology',
    year: 2011,
    url: 'https://doi.org/10.1016/S1470-2045(10)70218-7',
    doi: '10.1016/S1470-2045(10)70218-7',
  },
  {
    id: 'arends-clnu-espen-cancer-guidelines-2017',
    authors: 'Jann Arends, Patrick Bachmann, Vickie Baracos, et al.',
    title: 'ESPEN guidelines on nutrition in cancer patients',
    organization: 'Clinical Nutrition',
    year: 2017,
    url: 'https://doi.org/10.1016/j.clnu.2016.07.015',
    doi: '10.1016/j.clnu.2016.07.015',
  },
  {
    id: 'vanderheiden-science-warburg-effect-2009',
    authors: 'Matthew G. Vander Heiden, Lewis C. Cantley, Craig B. Thompson',
    title: 'Understanding the Warburg effect: the metabolic requirements of cell proliferation',
    organization: 'Science',
    year: 2009,
    url: 'https://doi.org/10.1126/science.1160809',
    doi: '10.1126/science.1160809',
  },
  {
    id: 'petruzzelli-cellmetab-fat-browning-cachexia-2014',
    authors: 'Michele Petruzzelli, Martina Schweiger, Rita Schreiber, et al.',
    title: 'A switch from white to brown fat increases energy expenditure in cancer-associated cachexia',
    organization: 'Cell Metabolism',
    year: 2014,
    url: 'https://doi.org/10.1016/j.cmet.2014.06.011',
    doi: '10.1016/j.cmet.2014.06.011',
  },
  {
    id: 'argiles-nrc-cancer-cachexia-mechanisms-2014',
    authors: 'Josep M. Argiles, Silvia Busquets, Britta Stemmler, Francisco J. Lopez-Soriano',
    title: 'Cancer cachexia: understanding the molecular basis in order to shape future treatment',
    organization: 'Nature Reviews Cancer',
    year: 2014,
    url: 'https://doi.org/10.1038/nrc3829',
    doi: '10.1038/nrc3829',
  },
  {
    id: 'muscaritoli-clnu-espen-practical-oncology-2021',
    authors: 'Maurizio Muscaritoli, Jann Arends, Patrick Bachmann, et al.',
    title: 'ESPEN practical guideline: Clinical Nutrition in cancer',
    organization: 'Clinical Nutrition',
    year: 2021,
    url: 'https://doi.org/10.1016/j.clnu.2021.02.005',
    doi: '10.1016/j.clnu.2021.02.005',
  },
]

export const nutrition24CancerNutritionLesson: LessonTopic = {
  id: 'topic.nutrition.oncology-cancer-nutrition-cachexia',
  slug: 'oncology-cancer-nutrition-cachexia',
  version: 1,
  updatedAt: '2026-10-26',
  title: l(
    '24 · Oncology Nutrition & Cancer Cachexia: Metabolic Reprogramming & Clinical Support',
    '২৪ · অনকোলজি পুষ্টি ও ক্যান্সার ক্যাক্সিয়া: বিপাকীয় পুনর্গঠন ও ক্লিনিক্যাল সহায়তা'
  ),
  summary: l(
    'Comprehensive molecular oncology nutrition and clinical cancer dietetics: the Warburg effect and tumor metabolic reprogramming, the multi-organ cytokine cascade of cancer cachexia, ubiquitin-proteasome muscle wasting, white adipose tissue browning (UCP1), PG-SGA diagnostic assessment, and evidence-based ESPEN medical nutrition therapy protocols.',
    'আণবিক অনকোলজি পুষ্টি ও ক্লিনিক্যাল ক্যান্সার ডায়েটেটিক্স: টিউমারের ওয়ারবার্গ অবাধ গ্লাইকোলাইসিস, সাইটোকাইন-চালিত ক্যান্সার ক্যাক্সিয়া সিন্ড্রোম, ইউবিকুইটিন-প্রোটিসোম দ্বারা কঙ্কালপেশি ভাঙন, শ্বেত চর্বির বাদামী রূপান্তর (UCP1) ও অতিরিক্ত শক্তি ক্ষয়, পিজি-এসজিএ মূল্যায়ন এবং ইএসপিইএন অনকোলজি পুষ্টি থেরাপির বৈজ্ঞানিক নির্দেশিকা।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-26',
  objectives: [
    l(
      'Deconstruct the bioenergetic drivers of tumor metabolic reprogramming: contrast aerobic glycolysis (the Warburg effect), PKM2 regulation, and glutamine addiction against normal cellular oxidative phosphorylation [3].',
      'টিউমার কোষের বিপাকীয় পুনর্গঠন বিশ্লেষণ: স্বাভাবিক কোষের জারণমূলক ফসফোরাইলেশনের বিপরীতে অবাধ অবাত গ্লাইকোলাইসিস (ওয়ারবার্গ প্রভাব), PKM2 এনজাইম এবং গ্লুটামিন নির্ভরতার আণবিক ক্রিয়াকৌশল মূল্যায়ন করা [৩]।'
    ),
    l(
      'Differentiate the pathophysiology of cancer cachexia from simple starvation and primary sarcopenia: evaluate pro-inflammatory cytokines (TNF-alpha, IL-6, IL-1beta), tumor proteolysis-inducing factor (PIF), and lipid-mobilizing factor (LMF) driving uncoupled muscle and adipose catabolism [1, 5].',
      'সাধারণ অনাহার ও বার্ধক্যজনিত সারকোপেনিয়া থেকে ক্যান্সার ক্যাক্সিয়ার শারীরবৃত্তীয় পার্থক্য নিরূপণ: প্রো-ইনফ্ল্যামেটরি সাইটোকাইন (TNF-alpha, IL-6), প্রোটিওলাইসিস-ইন্ডিউসিং ফ্যাক্টর (PIF) এবং লিপিড মোবিলাইজিং ফ্যাক্টরের (LMF) ভূমিকা বিশ্লেষণ করা [১, ৫]।'
    ),
    l(
      'Elucidate the molecular mechanisms of tissue wasting: examine E3 ubiquitin ligases (MuRF1, MAFbx) in myofibrillar proteolysis alongside white adipose tissue browning driven by PTHrP and IL-6 via uncoupling protein-1 (UCP1) futile thermogenesis [4, 5].',
      'ক্যান্সারে পেশি ও চর্বিক্ষয়ের আণবিক প্রক্রিয়া ব্যাখ্যা: কঙ্কালপেশিতে E3 ইউবিকুইটিন লাইগেজ (MuRF1, MAFbx) সক্রিয়করণ এবং শ্বেত চর্বিকোষের বাদামী রূপান্তরে PTHrP ও UCP1-চালিত অতিরিক্ত শক্তি অপচয় পর্যালোচনা করা [৪, ৫]।'
    ),
    l(
      'Analyze antineoplastic treatment-related nutritional toxicities: identify the mechanisms of chemotherapy-induced mucositis, dysgeusia, xerostomia, radiation enteritis, and gut barrier failure predisposing to systemic infection [2, 6].',
      'ক্যান্সার চিকিৎসার পুষ্টিজনিত পার্শ্বপ্রতিক্রিয়া পর্যালোচনা: কেমোথেরাপি ও রেডিওথেরাপির ফলে সৃষ্ট মিউকোসাইটিস, স্বাদহীনতা, শুষ্ক মুখ, রেডিয়েশন এন্টারাইটিস এবং অন্ত্রের প্রাচীর ক্ষয়ের প্যাথলজি চিহ্নিত করা [২, ৬]।'
    ),
    l(
      'Formulate evidence-based clinical oncology nutrition interventions: apply the PG-SGA diagnostic tool, establish ESPEN energy (25–30 kcal/kg/d) and protein (1.2–2.0 g/kg/d) targets, evaluate omega-3 fatty acid (EPA) immunonutrition, and critically appraise unproven cancer dietary fads [1, 2, 6].',
      'প্রমাণভিত্তিক ক্লিনিক্যাল অনকোলজি পুষ্টি পরিকল্পনা প্রণয়ন: পিজি-এসজিএ (PG-SGA) পদ্ধতি প্রয়োগ, ইএসপিইএন নির্দেশিত ক্যালোরি (২৫-৩০ kcal/kg/d) ও প্রোটিন (১.২-২.০ g/kg/d) লক্ষ্য নির্ধারণ, ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA) এবং অননুমোদিত ক্ষতিকর পথ্যের বৈজ্ঞানিক মূল্যায়ন করা [১, ২, ৬]।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.clinical-malnutrition-enteral-parenteral', 'topic.nutrition.protein-quality-diaas-nitrogen-balance'],
  relatedTopicIds: ['topic.metabolism.cancer-metabolic-reprogramming', 'topic.metabolism.fed-fasted-starvation-states'],
  references: cancerRefs,
  evidenceBySection: {
    introduction: ['fearon-lancet-oncol-cachexia-2011', 'vanderheiden-science-warburg-effect-2009'],
    structure: ['vanderheiden-science-warburg-effect-2009', 'argiles-nrc-cancer-cachexia-mechanisms-2014'],
    mechanism: ['argiles-nrc-cancer-cachexia-mechanisms-2014', 'petruzzelli-cellmetab-fat-browning-cachexia-2014'],
    integration: ['arends-clnu-espen-cancer-guidelines-2017', 'muscaritoli-clnu-espen-practical-oncology-2021'],
    practice: ['arends-clnu-espen-cancer-guidelines-2017', 'fearon-lancet-oncol-cachexia-2011'],
    takeaways: ['fearon-lancet-oncol-cachexia-2011', 'muscaritoli-clnu-espen-practical-oncology-2021'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Cancer as a Metabolic Challenge & Nutritional Landscape', '১. বিপাকীয় চ্যালেঞ্জ হিসেবে ক্যান্সার ও পুষ্টির প্রেক্ষাপট'), sectionId: 'introduction' },
      { id: 'sec-warburg', label: l('2. Tumor Bioenergetics: Aerobic Glycolysis & Substrate Hijacking', '২. টিউমার শক্তিবিজ্ঞান: ওয়ারবার্গ প্রভাব ও পুষ্টি ছিনতাই'), sectionId: 'structure' },
      { id: 'sec-cachexia', label: l('3. The Cytokine Cascade & Molecular Pathophysiology of Cachexia', '৩. সাইটোকাইন ক্যাসকেড ও ক্যাক্সিয়ার আণবিক রোগশারীরবৃত্ত'), sectionId: 'mechanism' },
      { id: 'sec-toxicities', label: l('4. Antineoplastic Toxicities, Mucosal Injury & Host Metabolism', '৪. ক্যান্সারের ওষুধজনিত বিষাক্ততা, অন্ত্রের ক্ষত ও বিপাক'), sectionId: 'integration' },
      { id: 'sec-mnt', label: l('5. Clinical Oncology Dietetics, PG-SGA & Evidence-Based MNT', '৫. ক্লিনিক্যাল অনকোলজি পুষ্টি, পিজি-এসজিএ ও পুষ্টি থেরাপি'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Clinical Takeaways & Board Review', '৬. উচ্চ গুরুত্বের ক্লিনিক্যাল সারসংক্ষেপ ও বোর্ড পর্যালোচনা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Cancer Cachexia', 'ক্যান্সার ক্যাক্সিয়া'),
        definition: l(
          'A multi-factorial wasting syndrome defined by ongoing loss of skeletal muscle mass (with or without loss of fat mass) that cannot be fully reversed by conventional nutritional support and leads to progressive functional impairment, driven by systemic inflammation and hypercatabolism [1].',
          'একটি বহু-উপাদানবিশিষ্ট অপচয়মূলক সিন্ড্রোম যা কঙ্কালপেশির ক্রমাগত ভাঙন (চর্বি হ্রাসসহ বা ছাড়া) দ্বারা চিহ্নিত; যা সাধারণ খাদ্য বা কৃত্রিম পুষ্টি দিয়ে পুরোপুরি সারানো যায় না এবং টিউমারজনিত সিস্টেমিক প্রদাহ ও তীব্র ক্যাটাবলিজমের ফলে ঘটে [১]।'
        ),
      },
      {
        term: l('Warburg Effect (Aerobic Glycolysis)', 'ওয়ারবার্গ প্রভাব (অ্যারোবিক গ্লাইকোলাইসিস)'),
        definition: l(
          'The metabolic phenotype of proliferating cancer cells characterized by avid glucose uptake and preferential conversion to lactate via lactate dehydrogenase A even in the presence of abundant oxygen, providing rapid carbon backbones for macromolecular synthesis [3].',
          'দ্রুত বিভাজনশীল ক্যান্সার কোষের বিপাকীয় রূপ যাতে কোষে পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও মাইটোকন্ড্রিয়াল জারণের পরিবর্তে গ্লুকোজ দ্রুত ল্যাকটেটে রূপান্তরিত হয় এবং নতুন কোষ গঠনের কাঁচামাল সরবরাহ করে [৩]।'
        ),
      },
      {
        term: l('Patient-Generated Subjective Global Assessment (PG-SGA)', 'রোগী-পরিচালিত সাবজেক্টিভ গ্লোবাল অ্যাসেসমেন্ট (PG-SGA)'),
        definition: l(
          'The gold-standard validated nutritional assessment instrument in clinical oncology combining patient-reported weight history, dietary intake, symptoms, and functional capacity with clinician-evaluated physical wasting and metabolic stress [2, 6].',
          'ক্যান্সার পুষ্টি মূল্যায়নের প্রামাণ্য আন্তর্জাতিক পদ্ধতি যা রোগীর নিজস্ব ওজন পরিবর্তনের ইতিহাস, খাদ্য গ্রহণ, পার্শ্বপ্রতিক্রিয়া এবং চিকিৎসকের শারীরিক পেশিক্ষয় ও বিপাকীয় চাপের সমন্বিত স্কোরিং প্রদান করে [২, ৬]।'
        ),
      },
      {
        term: l('Muscle RING-Finger Protein-1 (MuRF1) & MAFbx', 'MuRF1 ও MAFbx ইউবিকুইটিন লাইগেজ'),
        definition: l(
          'Muscle-specific E3 ubiquitin ligases transcriptionally upregulated by FoxO and NF-kB in response to pro-inflammatory cytokines (IL-6, TNF-alpha), catalyzing polyubiquitination and proteasomal degradation of myofibrillar structural proteins [5].',
          'কঙ্কালপেশির বিশেষায়িত E3 ইউবিকুইটিন লাইগেজ যা প্রদাহ সৃষ্টিকারী সাইটোকাইনের প্রভাবে সক্রিয় হয়ে পেশির সংকোচনশীল প্রোটিন (মায়োসিন) ভেঙে প্রোটিসোমে ধ্বংস করতে চিহ্নিত করে [৫]।'
        ),
      },
      {
        term: l('White Adipose Tissue Browning', 'শ্বেত চর্বির বাদামী রূপান্তর'),
        definition: l(
          'The pathological phenotypic transdifferentiation of white adipocytes into beige/brown-like adipocytes driven by tumor-derived PTHrP and IL-6, expressing uncoupling protein-1 (UCP1) that dissipates the mitochondrial proton gradient as heat, elevating resting energy expenditure [4].',
          'টিউমার থেকে ক্ষরিত PTHrP ও IL-6 হরমোনের প্রভাবে স্বাভাবিক শ্বেত চর্বিকোষের বাদামী কোষে রূপান্তর, যা UCP1 প্রোটিনের মাধ্যমে শক্তিকে এটিপি না বানিয়ে তাপে নষ্ট করে এবং দেহের বিপাকীয় শক্তি ব্যয় বহুগুণ বাড়িয়ে দেয় [৪]।'
        ),
      },
      {
        term: l('Eicosapentaenoic Acid (EPA) Immunonutrition', 'ইকোসাপেন্টায়েনয়িক অ্যাসিড (EPA) ইমিউনোনিউট্রিশন'),
        definition: l(
          'A long-chain marine omega-3 polyunsaturated fatty acid that competitively antagonizes arachidonic acid in cellular membranes, inhibiting downstream PGE2 synthesis, suppressing NF-kB activation, and dampening the hypercatabolic cytokine drive in cancer cachexia [2, 5].',
          'সামুদ্রিক মাছের তেল থেকে প্রাপ্ত দীর্ঘ-শৃঙ্খল ওমেগা-৩ ফ্যাটি অ্যাসিড যা কোষপর্দায় প্রো-ইনফ্ল্যামেটরি সংকেত প্রতিহত করে, ক্ষতিকর সাইটোকাইন উৎপাদন কমায় এবং ক্যানসার ক্যাক্সিয়ায় পেশিক্ষয় রোধে সহায়তা করে [২, ৫]।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Nutritional Staging, Hypercatabolic Calculation & EPA Prescription in Pancreatic Cancer Cachexia',
          'অগ্ন্যাশয় ক্যান্সার ক্যাক্সিয়ায় পুষ্টির ধাপ নির্ধারণ, ক্যালোরি-প্রোটিন গণনা ও ইপিএ প্রয়োগ'
        ),
        steps: [
          l(
            'Step 1: Clinical Presentation & Diagnostic Staging: A 62-year-old male with locally advanced pancreatic ductal adenocarcinoma presents with severe anorexia and early satiety. Baseline weight 6 months ago was 74.0 kg; current weight is 64.0 kg (height 1.75 m, current BMI 20.9 kg/m²). Weight loss calculation: [(74.0 - 64.0) / 74.0] * 100 = 13.5% involuntary loss over 6 months. Serum C-reactive protein (CRP) is markedly elevated at 28 mg/L (normal < 5 mg/L), and serum albumin is low at 29 g/L. Applying the Fearon international consensus criteria (weight loss >5% in the presence of systemic inflammation), the patient meets definitive criteria for Cancer Cachexia [1].',
            'ধাপ ১: রোগীর তথ্য ও রোগ নির্ণয়: ৬২ বছর বয়সী এক পুরুষ অগ্ন্যাশয় ক্যান্সারে আক্রান্ত হয়ে তীব্র ক্ষুধামন্দা নিয়ে আসলেন। ৬ মাস আগে ওজন ছিল ৭৪.০ কেজি; বর্তমান ওজন ৬৪.০ কেজি (উচ্চতা ১.৭৫ মিটার, বর্তমান বিএমআই ২০.৯ kg/m²)। অনিচ্ছাকৃত ওজন হ্রাসের হার: [(৭৪ - ৬৪) / ৭৪] * ১০০ = ১৩.৫%। রক্তে সিআরপি (CRP) প্রদাহের মাত্রা ২৮ mg/L (স্বাভাবিক < ৫ mg/L) এবং অ্যালবুমিন কমে ২৯ g/L। ফিয়ারন আন্তর্জাতিক ঐকমত্য মানদণ্ড অনুসারে (প্রদাহসহ ওজন হ্রাস >৫%), রোগী নিশ্চিতভাবে ক্যান্সার ক্যাক্সিয়ায় আক্রান্ত [১]।'
          ),
          l(
            'Step 2: Energy & Protein Target Determination via ESPEN Guidelines: Oncology guidelines mandate an initial caloric delivery of 25 to 30 kcal/kg actual body weight/day to meet hypermetabolic demands while avoiding overfeeding. Baseline caloric target = 64.0 kg * 30 kcal/kg/day = 1,920 kcal/day. To overcome profound cytokine-mediated anabolic resistance and blunt myofibrillar proteolysis, protein intake must be elevated to 1.5 g/kg/day (range 1.2–2.0 g/kg/day). Baseline protein target = 64.0 kg * 1.5 g/kg/day = 96.0 g of high-biological-value protein daily, ensuring at least 2.5–3.0 g of leucine per meal to trigger the mTORC1 protein synthesis cascade [2, 6].',
            'ধাপ ২: ইএসপিইএন নির্দেশিকা অনুযায়ী ক্যালোরি ও প্রোটিন লক্ষ্য নির্ধারণ: টিউমারজনিত অতিরিক্ত শক্তি অপচয় মেটাতে প্রতিদিন প্রতি কেজি ওজনে ২৫-৩০ কিলোক্যালোরি নির্ধারণ করা হয়। দৈনিক ক্যালোরি লক্ষ্য = ৬৪.০ কেজি * ৩০ kcal/kg = ১,৯২০ কিলোক্যালোরি/দিন। সাইটোকাইন-চালিত পেশিক্ষয় প্রতিহত করতে প্রোটিন বাড়িয়ে ১.৫ গ্রাম/কেজি/দিন (পরিসীমা ১.২-২.০) করা হয়। দৈনিক প্রোটিন লক্ষ্য = ৬৪.০ কেজি * ১.৫ গ্রাম = ৯৬.০ গ্রাম উন্নতমানের প্রোটিন, যেখানে প্রতি বেলা খাবারে ২.৫-৩.০ গ্রাম লিউসিন নিশ্চিত করা আবশ্যক [২, ৬]।'
          ),
          l(
            'Step 3: Pharmacokinetic Immunonutrition & Enzyme Replacement Strategy: Pancreatic exocrine insufficiency is present due to main pancreatic duct obstruction, causing fat malabsorption and steatorrhea. High-potency Pancreatic Enzyme Replacement Therapy (PERT) is initiated at 50,000 lipase units per main meal and 25,000 units per snack, taken concurrently with food. To specifically attenuate systemic IL-6/TNF-alpha hypercatabolism, targeted immunonutrition with marine eicosapentaenoic acid (EPA) is prescribed at 2.0 g/day in the form of a concentrated medical nutritional drink delivering 18 g protein and 300 kcal per serving twice daily between meals [2, 5].',
            'ধাপ ৩: লক্ষ্যভিত্তিক ইমিউনোনিউট্রিশন ও এনজাইম থেরাপি কৌশল: অগ্ন্যাশয়ের নালি বন্ধ থাকায় চর্বি হজম না হয়ে পাতলা পায়খানা (স্টিয়াটোরিয়া) হচ্ছিল। তাই প্রতি প্রধান খাবারের সাথে ৫০,০০০ ইউনিট এবং নাশতার সাথে ২৫,০০০ ইউনিট লাইপেজ এনজাইম (PERT) ওষুধ শুরু করা হলো। একই সাথে সিস্টেমিক প্রদাহ ও পেশি ক্ষয় কমাতে দিনে ২.০ গ্রাম ইপিএ (EPA) সমৃদ্ধ বিশেষায়িত উচ্চ-প্রোটিন মেডিকেল ওরাল সাপ্লিমেন্ট যুক্ত করা হলো যা দিনে দুবার দুটি খাবারের মাঝে গ্রহণ করবেন [২, ৫]।'
          ),
        ],
        conclusion: l(
          'Integrating pancreatic enzyme substitution, high-protein hypercaloric feeding (30 kcal/kg/d, 1.5 g/kg/d protein), and targeted omega-3 EPA immunonutrition halts continuous muscle wasting, improves chemotherapy tolerance, and enhances quality of life in advanced cancer cachexia [1, 2, 6].',
          'অগ্ন্যাশয়ের এনজাইম প্রতিস্থাপন, উচ্চ-প্রোটিন ক্যালোরি পথ্য (৩০ kcal/kg, ১.৫ g/kg প্রোটিন) এবং ওমেগা-৩ ইপিএ ইমিউনোনিউট্রিশনের সমন্বিত প্রয়োগ ক্যানসার ক্যাক্সিয়ায় পেশিক্ষয় রোধ করে, কেমোথেরাপির সহনশীলতা বৃদ্ধি করে এবং রোগীর জীবনযাত্রার মান উন্নত করে [১, ২, ৬]।'
        ),
      },
      {
        title: l(
          'Enteral Nutrition Algorithm in Head & Neck Cancer Concurrent Chemoradiotherapy',
          'মাথা ও গলার ক্যান্সারে কেমো-রেডিওথেরাপির সময় এন্টারাল টিউব ফিডিং পুষ্টি পরিকল্পনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Risk Stratification & Anticipatory Intervention: A 55-year-old female with Stage IVA squamous cell carcinoma of the oropharynx is scheduled for 7 weeks of definitive concurrent chemoradiotherapy (70 Gy radiation plus high-dose cisplatin). Head and neck chemoradiation predictably induces Grade 3–4 oral mucositis, severe odynophagia, thick secretions, and xerostomia by week 3–4, leading to acute oral intake failure and dangerous weight loss (>10%). In accordance with ESPEN clinical oncology guidelines, prophylactic percutaneous endoscopic gastrostomy (PEG) or radiologically inserted gastrostomy (RIG) is placed prior to radiation initiation [2, 6].',
            'ধাপ ১: ঝুঁকি নিরূপণ ও আগাম পদক্ষেপ গ্রহণ: মুখগহ্বরের ক্যান্সারে আক্রান্ত ৫৫ বছর বয়সী এক নারীর ৭ সপ্তাহের কেমো-রেডিওথেরাপি (৭০ গ্রে রেডিয়েশন ও সিসপ্লাটিন) নির্ধারিত হলো। এই চিকিৎসায় ৩য়-৪র্থ সপ্তাহে তীব্র মিউকোসাইটিস (মুখের ভেতর ঘা), খাবার গিলতে প্রচণ্ড ব্যথা এবং লালা শুকিয়ে গিয়ে মুখ দিয়ে খাবার গ্রহণ অসম্ভব হয়ে পড়ে। ইএসপিইএন নির্দেশিকা অনুসারে চিকিৎসা শুরুর আগেই রোগীর পেটে সরাসরি খাদ্যনালির বিশেষ টিউব (PEG বা RIG গ্যাস্ট্রোস্টোমি) স্থাপন করা হয় [২, ৬]।'
          ),
          l(
            'Step 2: Enteral Formula Selection, Osmolarity & Dosing Protocol: Patient weight is 58.0 kg; target requirements are 30 kcal/kg/day = 1,740 kcal/day and 1.4 g protein/kg/day = 81.2 g protein/day. A standard isocaloric, fiber-containing polymeric enteral formula (1.0 kcal/mL, 40 g protein/L, 300 mOsm/kg) is selected to prevent osmotic diarrhea while supporting bowel regularity. Total daily volume required: 1,740 mL formula, yielding 69.6 g protein; to achieve the 81.2 g protein target, 12 g of modular whey protein powder is added to the daily regimen [2].',
            'ধাপ ২: এন্টারাল খাদ্যের ধরন, অসমোলারিটি ও মাত্রা নির্ধারণ: রোগীর ওজন ৫৮.০ কেজি; পুষ্টির চাহিদা ৩০ kcal/kg = ১,৭৪০ কিলোক্যালোরি এবং প্রোটিন ১.৪ g/kg = ৮১.২ গ্রাম/দিন। অন্ত্রের গতি স্বাভাবিক রাখতে আইসোক্যালোরিক ফাইবারযুক্ত পলিমারিক ফর্মুলা (১.০ kcal/mL, ৪০ g প্রোটিন/লিটার) নির্বাচন করা হলো। মোট প্রয়োজনীয় তরল ফর্মুলা ১,৭৪০ মিলি, যা থেকে ৬৯.৬ গ্রাম প্রোটিন পাওয়া যায়; অবশিষ্ট ঘাটতি মেটাতে অতিরিক্ত ১২ গ্রাম ওয়ের প্রোটিন পাউডার মিশ্রিত করা হলো [২]।'
          ),
          l(
            'Step 3: Administration Schedule, Flushes & Aspiration Prevention: Feeding is administered via a cyclic pump protocol: 1,740 mL infused overnight over 14 hours (125 mL/hour) to allow daytime physical rehabilitation and speech therapy. To prevent tube occlusion and meet daily fluid requirements (30–35 mL/kg = 1,800–2,000 mL/day), the gastrostomy tube is flushed with 50 mL warm water before and after feeding, plus four 100 mL bolus water flushes throughout the day (total free water flushes = 500 mL; formula provides 1,460 mL water; total water = 1,960 mL). The head of the bed is maintained elevated at 30 to 45 degrees during infusion to prevent pulmonary aspiration [2, 6].',
            'ধাপ ৩: খাদ্য প্রয়োগের নিয়ম ও জটিলতা প্রতিরোধ: রাতে ঘুমানোর সময় বিশেষ পাম্পের মাধ্যমে ১৪ ঘণ্টায় মোট ১,৭৪০ মিলি ফর্মুলা (প্রতি ঘণ্টায় ১২৫ মিলি) প্রবেশ করানো হয়, যাতে দিনের বেলা রোগী স্বাভাবিক চলাফেরা ও স্পিচ থেরাপি নিতে পারেন। টিউব বন্ধ হওয়া রোধে এবং মোট তরলের চাহিদা (১,৯৬০ মিলি) মেটাতে ফর্মুলা চালুর আগে-পরে এবং দিনে চারবার ১০০ মিলি করে মোট ৫০০ মিলি বিশুদ্ধ পানি দিয়ে টিউব ফ্লাশ করা হয়। ফুসফুসে খাদ্য যাওয়া রোধ করতে শোয়ার সময় মাথার অংশ ৩০-৪৫ ডিগ্রি উঁচু রাখা বাধ্যতামূলক [২, ৬]।'
          ),
        ],
        conclusion: l(
          'Proactive gastrostomy tube placement and structured cyclic enteral nutrition prevent treatment interruptions, hospital readmissions, and severe nutritional collapse during high-intensity head and neck cancer chemoradiotherapy [2, 6].',
          'চিকিৎসা শুরুর পূর্বেই সচেতনভাবে গ্যাস্ট্রোস্টোমি টিউব স্থাপন এবং নিয়ন্ত্রিত এন্টারাল পুষ্টি সরবরাহ মাথা ও গলার ক্যান্সারে চিকিৎসাজনিত জটিলতা দূর করে, থেরাপি বন্ধ হওয়া ঠেকায় এবং রোগীকে দ্রুত সুস্থ করে তোলে [২, ৬]।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does aggressive conventional caloric supplementation (hyperalimentation) fail to reverse muscle wasting in cancer cachexia, unlike simple starvation?',
          'সাধারণ অনাহারের মতো অতিরিক্ত ক্যালোরিযুক্ত খাবার খাওয়ালে ক্যান্সার ক্যাক্সিয়ার পেশিক্ষয় কেন সারিয়ে তোলা যায় না?'
        ),
        answer: l(
          'In simple starvation, the metabolic adaptation is characterized by an intact neuroendocrine response: insulin levels fall, lipolysis is initiated, hepatic ketogenesis accelerates, and resting energy expenditure decreases to spare skeletal muscle protein. In contrast, cancer cachexia is driven by chronic, relentless systemic inflammation mediated by tumor- and host-derived cytokines (IL-6, TNF-alpha, IL-1beta, IFN-gamma) and proteolysis-inducing factor (PIF). These mediators constitutively activate NF-kB and FoxO transcription factors in myocytes, driving sustained transcription of the ubiquitin-proteasome E3 ligases MuRF1 and MAFbx. This causes uncoupled, obligatory degradation of myofibrillar proteins regardless of exogenous amino acid or glucose availability. Furthermore, the persistent cytokine surge induces profound anabolic resistance, blunting insulin- and amino acid-stimulated mTORC1 muscle protein synthesis. Therefore, calories alone cannot restore muscle mass unless the underlying systemic inflammatory drive and hypercatabolism are concurrently pharmacologically or nutritionally modulated [1, 5].',
          'সাধারণ উপবাস বা অনাহারে শরীর চমৎকারভাবে খাপ খাইয়ে নেয়: ইনসুলিন কমে যায়, চর্বি ও কিটোন শক্তিতে রূপান্তরিত হয় এবং শরীর শক্তি খরচ কমিয়ে পেশি রক্ষা করে। কিন্তু ক্যান্সারে টিউমার এবং শরীরের রোগপ্রতিরোধ কোষ থেকে অবিরাম ক্ষতিকর সাইটোকাইন (IL-6, TNF-alpha) নির্গত হতে থাকে। এই বিষাক্ত সংকেতগুলো পেশিকোষের ভেতর ইউবিকুইটিন-প্রোটিসোম নামক প্রোটিন ধ্বংসকারী মেশিনকে একটানা চালু রাখে। ফলে বাইরে থেকে রোগীকে যতই ক্যালোরি বা প্রোটিন দেওয়া হোক না কেন, কোষের প্রদাহজনিত বাধার কারণে শরীর নতুন পেশি তৈরি করতে পারে না এবং পেশি ক্রমাগত ভেঙে যেতে থাকে। তাই প্রদাহ নিয়ন্ত্রণ না করে শুধু খাবার খাওয়ালে এই মারাত্মক পেশিক্ষয় বন্ধ করা অসম্ভব [১, ৫]।'
        ),
      },
      {
        question: l(
          'How do tumor-derived factors drive futile energy expenditure through white adipose tissue browning in cancer cachexia?',
          'ক্যান্সার ক্যাক্সিয়ায় টিউমারের রাসায়নিক সংকেত কীভাবে শ্বেত চর্বির বাদামী রূপান্তরের মাধ্যমে অতিরিক্ত ক্যালোরি অপচয় ঘটায়?'
        ),
        answer: l(
          'In healthy adults, white adipose tissue (WAT) functions primarily as an energy storage depot storing triglycerides, whereas brown adipose tissue (BAT) burns substrates via uncoupling protein-1 (UCP1) for thermogenesis. In cancer cachexia, tumors secrete humoral mediators, prominently Parathyroid Hormone-related Protein (PTHrP) and IL-6. Circulating PTHrP binds PTH/PTHrP type 1 receptors on white adipocytes, initiating protein kinase A (PKA) signaling that transcriptionally upregulates thermogenic genes, specifically UCP1, cell death activator CIDEA, and PGC-1alpha. This molecular cascade induces phenotypic browning of subcutaneous and visceral WAT depots. Activated UCP1 uncouples the mitochondrial electron transport chain from ATP synthase, dissipating the proton electrochemical gradient as futile heat rather than storing it as chemical energy. This wasteful thermogenesis drastically accelerates whole-body lipid oxidation and elevates resting energy expenditure by hundreds of kilocalories per day, accelerating profound emaciation even when the patient is at complete bed rest [4, 5].',
          'মানবদেহে সাধারণ শ্বেত চর্বি (White Fat) শক্তি সঞ্চয় করে রাখে এবং বাদামী চর্বি (Brown Fat) শরীরের তাপমাত্রা রক্ষায় শক্তি পোড়ায়। কিন্তু ক্যান্সারে টিউমার কোষ থেকে প্যারাথাইরয়েড হরমোন-সম্পর্কিত প্রোটিন (PTHrP) এবং IL-6 নিঃসৃত হয়। এই হরমোন রক্ত দিয়ে গিয়ে শরীরের সাধারণ শ্বেত চর্বিকোষে ঢুকে UCP1 নামক একটি বিশেষ প্রোটিন তৈরি করায়। এর ফলে সাধারণ চর্বিকোষগুলো বাদামী চর্বির মতো আচরণ শুরু করে। UCP1 প্রোটিন চর্বির শক্তিকে এটিপি শক্তিতে রূপান্তর না করে অনবরত তাপে পুড়িয়ে অপচয় করে। ফলে রোগী বিছানায় সম্পূর্ণ বিশ্রামরত অবস্থায় থাকলেও তার শরীর অতিরিক্ত শত শত ক্যালোরি অযথাই পুড়িয়ে ফেলে, যা দ্রুত শরীরের সমস্ত চর্বি নিঃশেষ করে রোগীকে কঙ্কালসার করে তোলে [৪, ৫]।'
        ),
      },
      {
        question: l(
          'Why is high-dose antioxidant supplementation clinically contraindicated during concurrent radiotherapy and alkylating chemotherapy?',
          'রেডিওথেরাপি এবং অ্যালকাইলেটিং কেমোথেরাপির সময় অতিরিক্ত মাত্রায় অ্যান্টিঅক্সিডেন্ট ভিটামিন গ্রহণ কেন চিকিৎসাবিজ্ঞানে মারাত্মক ক্ষতিকর ও নিষিদ্ধ?'
        ),
        answer: l(
          'The primary antineoplastic cytotoxicity of ionizing radiation and many chemotherapeutic agents (e.g., cisplatin, cyclophosphamide, doxorubicin) depends fundamentally on the intracellular generation of lethal reactive oxygen species (ROS), including superoxide anions, hydroxyl radicals, and singlet oxygen. These radiation- and drug-induced ROS overwhelm the endogenous antioxidant defenses of malignant cells, inducing extensive double-strand DNA breaks, lipid peroxidation of mitochondrial membranes, and triggering irreversible apoptotic cell death. High-dose exogenous antioxidant supplements (such as megadoses of vitamin C, vitamin E, alpha-lipoic acid, or N-acetylcysteine) scavenge and neutralize these treatment-induced free radicals inside the tumor microenvironment. This blunts the oxidative DNA damage necessary for tumor eradication, directly interfering with antineoplastic efficacy and significantly increasing the risk of tumor recurrence and decreased overall survival. Oncology clinical guidelines strictly mandate that patients consume vitamins and minerals exclusively at standard Recommended Dietary Allowance (RDA) levels through whole dietary foods rather than high-potency antioxidant pills during active curative antineoplastic therapy [2, 6].',
          'রেডিওথেরাপি এবং অধিকাংশ কেমোথেরাপির (যেমন সিসপ্লাটিন, ডক্সোরুবিসিন) প্রধান কাজ হলো ক্যান্সার কোষের ভেতর প্রচুর বিষাক্ত ফ্রি-র‍্যাডিক্যাল (অক্সিজেন বোমা) তৈরি করা। এই ফ্রি-র‍্যাডিক্যালগুলো ক্যান্সার কোষের ডিএনএ ভেঙে টুকরো টুকরো করে কোষগুলোকে মেরে ফেলে। এখন কোনো রোগী যদি এই থেরাপি চলাকালীন উচ্চমাত্রার অ্যান্টিঅক্সিডেন্ট ক্যাপসুল (যেমন অতিরিক্ত ভিটামিন সি, ভিটামিন ই বা এনএসি) খান, তবে সেই অ্যান্টিঅক্সিডেন্টগুলো ক্যান্সার কোষের ভেতরে গিয়ে ফ্রি-র‍্যাডিক্যালগুলোকে নিষ্ক্রিয় করে ফেলে। এর ফলে রেডিয়েশন বা কেমোথেরাপি ক্যান্সার কোষ ধ্বংস করতে ব্যর্থ হয় এবং টিউমার পুনরায় ফিরে আসার ঝুঁকি মারাত্মকভাবে বেড়ে যায়। তাই ক্যান্সার চিকিৎসাকালীন উচ্চমাত্রার কোনো অ্যান্টিঅক্সিডেন্ট ওষুধ খাওয়া সম্পূর্ণ নিষিদ্ধ [২, ৬]।'
        ),
      },
    ],
    organelles: [],
  },
  diagram: {
    accessibleDescription: l(
      'A comprehensive biochemical and clinical schematic illustrating Tumor Metabolic Reprogramming via the Warburg Effect, Systemic Cytokine-Mediated Muscle Proteolysis via the Ubiquitin-Proteasome System, White Adipose Tissue Browning, and Clinical Oncology Medical Nutrition Therapy.',
      'টিউমারের ওয়ারবার্গ গ্লাইকোলাইসিস, সাইটোকাইন-চালিত ইউবিকুইটিন প্রোটিসোম দ্বারা পেশিক্ষয়, শ্বেত চর্বির বাদামী রূপান্তর এবং ক্লিনিক্যাল অনকোলজি পুষ্টি থেরাপির সমন্বিত রূপরেখা।'
    ),
    steps: [
      l(
        'Step 1: Tumor Warburg Glycolysis & Substrate Trapping: Oncogenic mutations (MYC, KRAS, PI3K) drive avid glucose uptake via GLUT1 and conversion to lactate via LDHA even under normoxia, accompanied by intense glutamine consumption to fuel anabolic macromolecular biosynthesis while starving host tissues [3].',
        'ধাপ ১: টিউমারের ওয়ারবার্গ বিপাক ও গ্লুকোজ ছিনতাই: অনকোজিনের প্রভাবে টিউমার কোষ প্রচুর গ্লুকোজ টেনে নেয় এবং অক্সিজেনের উপস্থিতিতেও তা ল্যাকটেটে রূপান্তর করে, পাশাপাশি গ্লুটামিন শোষণ করে নিজের বৃদ্ধির জন্য দেহের সমস্ত পুষ্টি ছিনতাই করে [৩]।'
      ),
      l(
        'Step 2: Systemic Inflammatory Cytokine Cascade: Tumor and host immune cells release high concentrations of TNF-alpha, IL-6, IL-1beta, and IFN-gamma into the circulation, initiating chronic low-grade systemic inflammation and triggering the hepatic acute-phase response [1, 5].',
        'ধাপ ২: সিস্টেমিক প্রদাহ ও সাইটোকাইন নিঃসরণ: টিউমার এবং রোগপ্রতিরোধ কোষ থেকে প্রচুর পরিমাণে টিএনএফ-আলফা ও ইন্টারলিউকিন-৬ রক্তে নির্গত হয়ে সারা শরীরে তীব্র প্রদাহ ছড়ায় এবং লিভারের স্বাভাবিক বিপাক উল্টে দেয় [১, ৫]।'
      ),
      l(
        'Step 3: Uncoupled Myofibrillar Proteolysis & Adipose Browning: Cytokines activate NF-kB and FoxO in myocytes to upregulate E3 ubiquitin ligases (MuRF1, MAFbx), destroying muscle proteins. Simultaneously, tumor-derived PTHrP induces UCP1 expression in white fat, burning lipids as futile heat [4, 5].',
        'ধাপ ৩: অপ্রতিরোধ্য পেশিক্ষয় ও চর্বির অপচয়: সাইটোকাইনগুলো পেশিকোষের ভেতর MuRF1 ও MAFbx এনজাইম সক্রিয় করে মাংসপেশি ভাঙতে থাকে। একই সাথে টিউমারের সংকেত চর্বিকোষের UCP1 প্রোটিন সক্রিয় করে ক্যালোরিকে তাপে নষ্ট করে দেয় [৪, ৫]।'
      ),
      l(
        'Step 4: Evidence-Based Multimodal Oncology Nutrition Support: Implementing early PG-SGA screening, hypercaloric high-protein feeding (25–30 kcal/kg/d, 1.2–2.0 g/kg/d protein), targeted EPA immunonutrition (2 g/d), and proactive enteral feeding sustains lean body mass and treatment completion [2, 6].',
        'ধাপ ৪: প্রমাণভিত্তিক সমন্বিত অনকোলজি পুষ্টি চিকিৎসা: প্রাথমিক স্ক্রিনিং (PG-SGA), উচ্চ-ক্যালোরি প্রোটিন পথ্য (২৫-৩০ kcal/kg, ১.২-২.০ g/kg প্রোটিন), ওমেগা-৩ ইপিএ এবং যথাসময়ে এন্টারাল ফিডিং রোগীর পেশি রক্ষা করে এবং চিকিৎসা সম্পন্ন করা নিশ্চিত করে [২, ৬]।'
      ),
    ],
  },
  interactiveDiagram: {
    id: 'cancer-cachexia-metabolic-axis',
    title: l(
      'Cancer Cachexia Cytokine Cascade & Tumor Metabolic Reprogramming Axis',
      'ক্যান্সার ক্যাক্সিয়া সাইটোকাইন ক্যাসকেড ও টিউমার বিপাকীয় পুনর্গঠন অক্ষ'
    ),
    description: l(
      'Interactive physiological architecture illustrating the tumor Warburg effect, pro-inflammatory cytokine signaling (IL-6, TNF-alpha), ubiquitin-proteasome muscle proteolysis, and adipose futile thermogenesis.',
      'ইন্টারঅ্যাক্টিভ চিত্র যা টিউমার কোষের ওয়ারবার্গ প্রভাব, ক্ষতিকর সাইটোকাইন সংকেত, ইউবিকুইটিন-প্রোটিসোম দ্বারা পেশি অপচয় এবং চর্বিকোষে অতিরিক্ত শক্তি অপচয়ের আণবিক পথ প্রদর্শন করে।'
    ),
    disclaimer: l(
      'Educational clinical oncology simulation; cancer medical nutrition therapy requires individualized oncological and registered dietitian supervision.',
      'শিক্ষামূলক ক্লিনিক্যাল অনকোলজি সিমুলেশন; ক্যান্সার পুষ্টি চিকিৎসায় অনকোলজিস্ট ও অভিজ্ঞ ডায়েটিশিয়ানের তত্ত্বাবধান অপরিহার্য।'
    ),
    svgType: 'cancer-cachexia-axis',
    items: [
      {
        id: 'node-warburg',
        label: l('Warburg Aerobic Glycolysis', 'ওয়ারবার্গ অ্যারোবিক গ্লাইকোলাইসিস'),
        description: l(
          'Tumor cells overexpress GLUT1 and convert glucose to lactate via LDHA even under normoxia, generating macromolecular building blocks while releasing lactic acid into the microenvironment [3].',
          'টিউমার কোষ প্রচুর গ্লুকোজ শোষণ করে অক্সিজেনের উপস্থিতিতেও দ্রুত ল্যাকটেটে রূপান্তর করে এবং চারপাশের পরিবেশে অ্যাসিড ছড়িয়ে দেয় [৩]।'
        ),
        details: l(
          'Dimeric PKM2 stalls glycolytic flux to divert carbons into nucleotide and lipid synthesis, supported by heavy glutamine addiction.',
          'ডাইমেরিক PKM2 এনজাইম গ্লাইকোলাইসিসের গতি নিয়ন্ত্রণ করে নতুন ডিএনএ ও চর্বি তৈরির উপাদান সরবরাহ করে।'
        ),
        color: '#f97316',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-cytokines',
        label: l('TNF-alpha & IL-6 Hyperinflammation', 'TNF-alpha ও IL-6 তীব্র প্রদাহ'),
        description: l(
          'Tumor and host macrophages release TNF-alpha and IL-6 into circulation, triggering chronic systemic inflammation and reprioritizing hepatic protein synthesis [1, 5].',
          'টিউমার এবং রোগপ্রতিরোধ কোষ থেকে নির্গত সাইটোকাইন সারাদেহে দীর্ঘস্থায়ী প্রদাহ সৃষ্টি করে এবং লিভারের স্বাভাবিক কাজ ব্যাহত করে [১, ৫]।'
        ),
        details: l(
          'Circulating IL-6 activates gp130/STAT3 signaling, suppressing constitutive albumin synthesis while elevating C-reactive protein (CRP).',
          'রক্তের IL-6 লিভার কোষে সংকেত পাঠিয়ে অ্যালবুমিন উৎপাদন বন্ধ করে এবং ক্ষতিকর সিআরপি বাড়িয়ে দেয়।'
        ),
        color: '#ef4444',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-proteasome',
        label: l('Ubiquitin-Proteasome Muscle Proteolysis', 'ইউবিকুইটিন-প্রোটিসোম পেশি অপচয়'),
        description: l(
          'Cytokines transactivate MuRF1 and MAFbx E3 ligases via NF-kB and FoxO, polyubiquitinating myosin heavy chains for rapid 26S proteasome degradation [5].',
          'সাইটোকাইনগুলো পেশিকোষের ভেতরে বিশেষ এনজাইম অন করে দেয় যা পেশির সংকোচনশীল প্রোটিনকে দ্রুত ধ্বংস করে পেশিক্ষয় ঘটায় [৫]।'
        ),
        details: l(
          'Myofibrillar breakdown liberates free amino acids channeled to the liver for acute-phase protein synthesis and gluconeogenesis.',
          'ভেঙে যাওয়া পেশির অ্যামিনো অ্যাসিড লিভারে গিয়ে অতিরিক্ত গ্লুকোজ ও প্রদাহজনক প্রোটিন তৈরি করে।'
        ),
        color: '#dc2626',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-browning',
        label: l('Adipose Browning & Futile Thermogenesis', 'চর্বির বাদামী রূপান্তর ও শক্তি অপচয়'),
        description: l(
          'Tumor-derived PTHrP and IL-6 induce UCP1 expression in white adipocytes, uncoupling oxidative phosphorylation to burn lipids as futile heat [4].',
          'টিউমারের হরমোন শ্বেত চর্বিকোষে UCP1 প্রোটিন বাড়িয়ে চর্বির শক্তিকে তাপে অপচয় করে এবং বিপুল ক্যালোরি নষ্ট করে [৪]।'
        ),
        details: l(
          'Uncoupled mitochondrial respiration elevates whole-body resting energy expenditure by hundreds of kcal/day, driving severe wasting.',
          'অতিরিক্ত শক্তি অপচয়ের ফলে রোগী শুয়ে থাকলেও তার দেহের শত শত ক্যালোরি অযথাই পুড়ে গিয়ে শরীর দ্রুত শুকিয়ে যায়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-immunonutrition',
        label: l('EPA & Protein Anabolic Support', 'ইপিএ ও প্রোটিন অ্যানাবলিক সহায়তা'),
        description: l(
          'Marine EPA downregulates NF-kB and proteasome activity, while 1.5–2.0 g/kg/d protein overcomes anabolic resistance to preserve lean muscle [2, 6].',
          'ওমেগা-৩ ইপিএ সাইটোকাইনের আক্রমণ প্রতিহত করে এবং উচ্চ প্রোটিন পেশি ভাঙন থামিয়ে রোগীর শক্তি বজায় রাখে [২, ৬]।'
        ),
        details: l(
          'High leucine intake (>2.5 g/meal) reactivates Sestrin2-mTORC1 signaling, promoting muscle protein synthesis even amidst ongoing systemic inflammation.',
          'খাবারে পর্যাপ্ত লিউসিন সরবরাহ কোষের প্রোটিন তৈরির সুইচ অন করে এবং প্রদাহের মাঝেও পেশি ক্ষয় প্রতিরোধ করে।'
        ),
        color: '#10b981',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  assessment: {
    question: l(
      'Why is routine high-dose antioxidant vitamin supplementation (such as megadoses of vitamins C and E) strictly contraindicated during concurrent curative radiotherapy and alkylating chemotherapy?',
      'রেডিওথেরাপি এবং অ্যালকাইলেটিং কেমোথেরাপির সময় অতিরিক্ত মাত্রায় অ্যান্টিঅক্সিডেন্ট ভিটামিন (যেমন উচ্চমাত্রার ভিটামিন সি ও ই) সেবন কেন চিকিৎসাবিজ্ঞানে সম্পূর্ণ নিষেধ বা মারাত্মক ক্ষতিকর?'
    ),
    options: [
      l(
        'Radiation and alkylating chemotherapy eradicate malignant cells primarily through generating cytotoxic reactive oxygen species (ROS); high-dose antioxidants scavenge these free radicals, blunting oxidative DNA damage and significantly reducing antineoplastic treatment efficacy.',
        'রেডিওথেরাপি ও কেমোথেরাপি ক্যান্সার কোষ ধ্বংস করে বিষাক্ত ফ্রি-র‍্যাডিক্যাল তৈরির মাধ্যমে; উচ্চমাত্রার অ্যান্টিঅক্সিডেন্ট এই ফ্রি-র‍্যাডিক্যালগুলোকে নিষ্ক্রিয় করে ক্যান্সার কোষকে বাঁচিয়ে দেয় এবং চিকিৎসার কার্যকারিতা নষ্ট করে।'
      ),
      l(
        'Antioxidant vitamins permanently convert into radioactive plutonium isotopes inside red blood cells.',
        'অ্যান্টিঅক্সিডেন্ট ভিটামিনগুলো রক্তকণিকার ভেতর তেজস্ক্রিয় প্লুটোনিয়ামে রূপান্তরিত হয়।'
      ),
      l(
        'Antioxidants completely paralyze the gastrointestinal tract, causing immediate total intestinal gangrene.',
        'অ্যান্টিঅক্সিডেন্ট পরিপাকনালি সম্পূর্ণ অবশ করে তৎক্ষণাৎ অন্ত্র পচিয়ে ফেলে।'
      ),
      l(
        'Antioxidants stimulate the kidneys to excrete all circulating blood volume within minutes.',
        'অ্যান্টিঅক্সিডেন্ট বৃক্ককে নির্দেশ দিয়ে কয়েক মিনিটের মধ্যে শরীরের সমস্ত রক্ত প্রস্রাব হিসেবে বের করে দেয়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Ionizing radiation and alkylating antineoplastic agents (such as cisplatin, carboplatin, and cyclophosphamide) depend fundamentally on the generation of high concentrations of reactive oxygen species (ROS), including superoxide anions and hydroxyl radicals. These ROS induce lethal DNA double-strand breaks and membrane lipid peroxidation, triggering apoptotic cell death in rapidly dividing cancer cells. Exogenous megadoses of antioxidants scavenge and neutralize these ROS inside the tumor, protecting malignant cells from oxidative destruction, directly decreasing treatment response rates, and increasing the risk of tumor recurrence. Oncology guidelines mandate obtaining micronutrients exclusively at standard Dietary Reference Intake levels from wholesome food rather than high-potency antioxidant pills during active radiotherapy and chemotherapy [2, 6].',
      'রেডিওথেরাপি এবং কেমোথেরাপির মূল ক্রিয়াকৌশল হলো ক্যান্সার কোষের ভেতর প্রচুর বিষাক্ত ফ্রি-র‍্যাডিক্যাল তৈরি করে কোষের ডিএনএ ভেঙে ধ্বংস করা। অতিরিক্ত অ্যান্টিঅক্সিডেন্ট ওষুধ খেলে তা ক্যান্সার কোষের ফ্রি-র‍্যাডিক্যালকে ধ্বংস করে দেয়, যার ফলে ক্যান্সার কোষগুলো মরার হাত থেকে বেঁচে যায় এবং চিকিৎসা ব্যর্থ হয়। তাই ক্যান্সার চিকিৎসাকালীন উচ্চমাত্রার কোনো অ্যান্টিঅক্সিডেন্ট ক্যাপসুল খাওয়া সম্পূর্ণ নিষেধ [২, ৬]।'
    ),
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            "1. What is Oncology Nutrition & The Metabolic Burden of Cancer?",
            "১. অনকোলজি পুষ্টি কী এবং ক্যান্সারের বিপাকীয় বোঝা কেন ভয়াবহ?"
          ),
          paragraphs: [
            l(
              "Oncology nutrition is the specialized medical science and clinical dietetic practice dedicated to understanding, preventing, and managing the profound metabolic, physiological, and immunological disruptions triggered by malignant neoplastic disease and antineoplastic therapies [1]. Cancer is fundamentally a systemic disorder that radically alters whole-body bioenergetics [1]. From the earliest stages of oncogenesis, expanding tumors function as metabolic substrate sinks, voraciously extracting glucose, amino acids, and lipids from the host circulation to sustain unregulated cellular proliferation [1, 3].",
              "অনকোলজি পুষ্টি হলো চিকিৎসাবিজ্ঞান ও ক্লিনিক্যাল ডায়েটেটিক্সের একটি অত্যন্ত বিশেষায়িত শাখা যা ক্যান্সার রোগ এবং এর বিভিন্ন তীব্র চিকিৎসার ফলে মানবদেহে সৃষ্ট জটিল বিপাকীয়, শারীরবৃত্তীয় ও রোগপ্রতিরোধ সংক্রান্ত সমস্যাগুলো নিরূপণ ও সমাধান করে [১]। ক্যান্সার কেবল একটি নির্দিষ্ট অঙ্গের টিউমার নয়, বরং এটি সমগ্র মানবদেহের স্বাভাবিক শক্তি ও পুষ্টি ভারসাম্যকে সম্পূর্ণ উলটপালট করে দেয় [১]। টিউমার কোষগুলো তৈরি হওয়ার পর থেকেই শরীরের রক্ত থেকে গ্লুকোজ, অ্যামিনো অ্যাসিড ও চর্বি একতরফাভাবে টেনে নিয়ে নিজের অনিয়ন্ত্রিত কোষ বিভাজনে খরচ করতে থাকে [১, ৩]।"
            ),
            l(
              "Malnutrition is an exceptionally frequent and devastating complication of malignancy, affecting up to 80% of patients with advanced gastrointestinal, pancreatic, lung, and head and neck cancers during their clinical journey [1, 2]. Unlike acute post-surgical starvation where body weight is lost primarily from adipose reserves while muscle is biologically spared, cancer-associated malnutrition is driven by unrelenting neuroendocrine stress and tumor-derived pro-inflammatory signals [1, 5]. Patients progressively lose critical skeletal muscle mass regardless of whether their dietary energy intake appears quantitatively adequate [1].",
              "ক্যান্সার রোগীদের মধ্যে অপুষ্টি একটি অত্যন্ত মারাত্মক ও সাধারণ জটিলতা, যা খাদ্যনালি, অগ্ন্যাশয়, ফুসফুস এবং মাথা ও গলার ক্যান্সারে আক্রান্ত প্রায় ৮০ শতাংশ রোগীর ক্ষেত্রে দেখা যায় [১, ২]। সাধারণ অনাহারে বা উপবাসে শরীর চর্বি ভেঙে শক্তি তৈরি করে এবং মাংসপেশিকে বাঁচিয়ে রাখে, কিন্তু ক্যান্সারের অপুষ্টিতে তা ঘটে না [১, ৫]। টিউমার থেকে নির্গত প্রদাহজনক সংকেত এবং হরমোনজনিত চাপের কারণে রোগী পর্যাপ্ত খাবার গ্রহণ করা সত্ত্বেও তার শরীরের অমূল্য মাংসপেশি অনবরত শুকিয়ে যেতে থাকে [১]।"
            ),
            l(
              "The presence of malnutrition directly impairs the patient ability to tolerate antineoplastic treatments, necessitating chemotherapy dose reductions, delays, or premature treatment discontinuation [2, 6]. Furthermore, progressive skeletal muscle depletion weakens respiratory musculature, reduces ambulation, impairs immunocompetence, elevates hospital infection rates, and dramatically worsens surgical morbidity [1, 2]. Authoritative epidemiological studies demonstrate that at least 20% of all cancer deaths are not caused directly by tumor invasion, but are the direct result of progressive wasting and cachectic organ failure [1, 5].",
              "অপুষ্টির ফলে রোগীর কেমোথেরাপি ও রেডিওথেরাপির মতো তীব্র ওষুধ সহ্য করার শারীরিক সক্ষমতা বিপজ্জনকভাবে কমে যায়, যার ফলে চিকিৎসকদের বাধ্য হয়ে ওষুধের মাত্রা কমাতে বা চিকিৎসা পিছিয়ে দিতে হয় [২, ৬]। এছাড়া মাংসপেশি ক্ষয়ে যাওয়ায় শ্বাস-প্রশ্বাসের পেশি দুর্বল হয়ে পড়ে, রক্তে রোগপ্রতিরোধ ক্ষমতা কমে যায়, হাসপাতালে সংক্রামক জীবাণুর আক্রমণ বাড়ে এবং অস্ত্রোপচারের ঝুঁকি মারাত্মক আকার ধারণ করে [১, ২]। গবেষণায় প্রমাণিত যে সমস্ত ক্যান্সার মৃত্যুর অন্তত ২০ শতাংশ রোগী টিউমারের কারণে নয়, বরং এই ভয়াবহ পুষ্টিহীনতা ও পেশিক্ষয়ের কারণেই মৃত্যুবরণ করেন [১, ৫]।"
            ),
            l(
              "Consequently, modern clinical oncology recognizes proactive medical nutrition therapy as an indispensable, concurrent pillar of comprehensive cancer care rather than a passive afterthought [2, 6]. Early nutritional screening and systematic intervention preserve functional performance status, maintain quality of life, minimize antineoplastic toxicities, and optimize therapeutic response [2]. Understanding how tumors alter host metabolism allows clinicians and learners to deploy targeted dietetic and metabolic strategies that nourish the patient without fueling malignant proliferation [2, 3].",
              "কাজেই আধুনিক অনকোলজিতে পুষ্টি থেরাপিকে চিকিৎসার শেষের কোনো সাধারণ পথ্য হিসেবে নয়, বরং ক্যান্সারের প্রধান চিকিৎসার একটি অপরিহার্য স্তম্ভ হিসেবে বিবেচনা করা হয় [২, ৬]। রোগ নির্ণয়ের শুরুতেই রোগীর পুষ্টি স্তর যাচাই করে পরিকল্পিত ব্যবস্থা গ্রহণ করলে রোগীর শারীরিক সক্ষমতা অটুট থাকে, কেমোথেরাপির বিষাক্ত পার্শ্বপ্রতিক্রিয়া হ্রাস পায় এবং চিকিৎসার সাফল্য বহুগুণ বৃদ্ধি পায় [২]। টিউমার কীভাবে শরীরের বিপাককে কব্জা করে তা বিস্তারিত জানা থাকলে ক্যান্সার কোষকে সুযোগ না দিয়ে রোগীকে সুস্থ ও শক্তিশালী রাখার সঠিক পথ্য পরিকল্পনা তৈরি করা সম্ভব হয় [২, ৩]।"
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            "2. Tumor Bioenergetics vs Host Metabolism: A Battle for Substrates",
            "২. টিউমার শক্তিবিজ্ঞান বনাম মানবদেহের বিপাক: পুষ্টি উপাদানের যুদ্ধ"
          ),
          paragraphs: [
            l(
              "The metabolic relationship between a growing tumor and the host organism represents an aggressive, parasitic competition for bioenergetic and biosynthetic substrates [3]. Normal human differentiated cells carefully tune their nutrient intake to homeostatic requirements, utilizing oxidative phosphorylation in mitochondria to maximize ATP yield per mole of glucose consumed [3]. In stark contrast, malignant cells escape physiological growth controls, expressing constitutively active nutrient transporters that pump glucose and amino acids into the tumor at extraordinary rates [3, 5].",
              "টিউমার এবং মানবদেহের মধ্যকার বিপাকীয় সম্পর্ক হলো একটি আগ্রাসী পরজীবী যুদ্ধ, যেখানে টিউমার নিজের স্বার্থে দেহের সমস্ত পুষ্টি উপাদান কেড়ে নেয় [৩]। মানবদেহের স্বাভাবিক সুস্থ কোষগুলো কেবল প্রয়োজনমাফিক খাবার গ্রহণ করে এবং মাইটোকন্ড্রিয়ার মাধ্যমে প্রতিটি গ্লুকোজ অণু থেকে সর্বোচ্চ পরিমাণ এটিপি শক্তি তৈরি করে জীবন্ত থাকে [৩]। বিপরীতে ক্যান্সার কোষ কোনো নিয়ন্ত্রণের তোয়াক্কা না করে অসংখ্য চ্যানেল বা ট্রান্সপোর্টার বসিয়ে রক্ত থেকে গ্লুকোজ ও অ্যামিনো অ্যাসিড গোগ্রাসে গিলে ফেলে [৩, ৫]।"
            ),
            l(
              "This voracious substrate scavenging is driven by the fact that tumor cells do not primarily prioritize energetic efficiency; they prioritize the speed of macromolecular synthesis [3]. A proliferating cell must duplicate its total biomass—DNA, RNA, proteins, and phospholipid membranes—every single cell division cycle [3]. To fuel this relentless assembly line, the tumor switches its metabolic machinery to consume massive quantities of glucose and glutamine, diverting the carbon and nitrogen skeletons into nucleotide, non-essential amino acid, and fatty acid biosynthesis [3, 5].",
              "টিউমার কোষের এই পুষ্টি ছিনতাই কেবল শক্তি তৈরির জন্য নয়, বরং নতুন কোষের উপাদান তৈরির এক তীব্র প্রতিযোগিতা [৩]। প্রতিটি বিভাজনে টিউমারকে তার ভেতরের সমস্ত ডিএনএ, প্রোটিন এবং কোষপর্দা নতুন করে দ্বিগুণ করতে হয় [৩]। এই বিশাল কারখানার কাঁচামাল জোগাতে টিউমার শরীর থেকে বিপুল পরিমাণ গ্লুকোজ ও গ্লুটামিন অ্যামিনো অ্যাসিড ছিনিয়ে নেয় এবং সেগুলোকে ভেঙে নতুন কোষের ইট-পাথর তৈরিতে ব্যবহার করে [৩, ৫]।"
            ),
            l(
              "As the expanding neoplasm traps these circulatory substrates, the rest of the host tissues enter a state of functional starvation [1, 5]. The liver, brain, heart, immune system, and skeletal muscle are forced to adapt to a depleted systemic nutrient pool [5]. Normal tissues attempt to maintain blood glucose and cellular ATP by mobilizing stored fuels: skeletal muscle hydrolyzes contractile myofibrillar proteins into free amino acids, and adipose tissue mobilizes stored triglycerides into free fatty acids and glycerol [1, 5].",
              "টিউমার যখন রক্তের সমস্ত খাদ্য উপাদান এভাবে নিজের পেটে ভরে ফেলে, তখন রোগীর বাকি শরীর এক মারাত্মক কৃত্রিম অনাহারের মধ্যে পতিত হয় [১, ৫]। মস্তিষ্ক, হৃদযন্ত্র, যকৃত এবং কঙ্কালপেশি রক্তে পুষ্টির তীব্র সংকটে পড়ে [৫]। এই সংকট সামাল দিতে সুস্থ কোষগুলো নিজেদের ভেতরের জমানো সঞ্চয় ভাঙতে বাধ্য হয়: মাংসপেশি তার মূল্যবান প্রোটিন ভেঙে রক্তে অ্যামিনো অ্যাসিড ছাড়ে এবং চর্বিকোষ তার জমানো চর্বি ভেঙে ফ্যাটি অ্যাসিড অবমুক্ত করে [১, ৫]।"
            ),
            l(
              "Crucially, however, the substrates mobilized by host muscle and fat do not successfully nourish the host; instead, they are captured by the tumor to support its own survival and expansion [3, 5]. The host enters a vicious energetic treadmill where tissues are continuously dissolved to feed the neoplasm [1, 5]. This metabolic imbalance explains why cancer-associated weight loss cannot be viewed simply as a calorie deficit; it is an active biochemical hijacking of the body tissue reserves [1, 3].",
              "কিন্তু সবচেয়ে মর্মান্তিক বিষয় হলো, শরীর নিজেকে বাঁচানোর জন্য নিজের যে পেশি ও চর্বি ভাঙছে, সেই রক্তে আসা উপাদানগুলোও সুস্থ কোষের কাছে পৌঁছানোর আগেই টিউমার টেনে নিয়ে নিজের পেটে পুরে ফেলে [৩, ৫]। রোগী এক ভয়াবহ দুষ্টচক্রে আটকা পড়েন যেখানে তার নিজের দেহাংশ গলে গলে গিয়ে টিউমারকে পুষ্ট করতে থাকে [১, ৫]। এই কারণেই ক্যান্সার রোগীদের ওজন কমাকে সাধারণ খাদ্য ঘাটতি মনে করা মারাত্মক ভুল; এটি মূলত টিউমার দ্বারা দেহের কোষীয় ব্যাংকের এক পরিকল্পিত লুণ্ঠন [১, ৩]।"
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            "3. The Triad of Cancer Malnutrition: Starvation vs Sarcopenia vs Cachexia",
            "৩. ক্যান্সারে পুষ্টিহীনতার ত্রয়ী: সাধারণ অনাহার বনাম সারকোপেনিয়া বনাম ক্যাক্সিয়া"
          ),
          paragraphs: [
            l(
              "To manage cancer malnutrition scientifically, clinicians and dietitians must rigorously distinguish three overlapping but pathophysiologically distinct clinical conditions: simple starvation, primary sarcopenia, and cancer cachexia [1, 5]. Simple starvation occurs when there is an absolute or relative physical deficiency of dietary calories and protein in the presence of an otherwise healthy, non-inflamed host [1]. The neuroendocrine response to starvation is evolutionary adaptive: insulin falls, glucagon rises, adipose lipolysis accelerates, and the brain adapts to utilize ketone bodies [1, 5].",
              "ক্যান্সার রোগীদের পুষ্টির সঠিক চিকিৎসা করতে হলে তিনটি ভিন্ন কিন্তু দেখতে একই রকম রোগাবস্থার মধ্যে সুস্পষ্ট পার্থক্য বুঝতে হবে: সাধারণ অনাহার, সাধারণ পেশিক্ষয় (সারকোপেনিয়া) এবং ক্যান্সার ক্যাক্সিয়া [১, ৫]। সাধারণ অনাহার তখনই ঘটে যখন কোনো দীর্ঘস্থায়ী প্রদাহ ছাড়া কোনো ব্যক্তি খাবার কম পান বা না খেয়ে থাকেন [১]। এই অবস্থায় শরীর চমৎকার অভিযোজন করে: ইনসুলিন কমে যায়, শরীর চর্বি থেকে কিটোন বডি বানিয়ে মস্তিষ্ক চালায় এবং পেশি প্রোটিন রক্ষা করে শক্তি খরচ কমিয়ে দেয় [১, ৫]।"
            ),
            l(
              "Because simple starvation lowers resting metabolic rate and minimizes muscle protein breakdown to preserve life, it is 100% reversible when adequate calories and protein are restored [1]. In contrast, primary sarcopenia is the progressive, age-associated loss of skeletal muscle mass and muscular strength resulting from reduced physical activity, motor neuron dropout, declining anabolic hormones (testosterone, growth hormone), and mild anabolic resistance [1]. Like starvation, age-related sarcopenia does not typically feature high levels of systemic hyperinflammation or systemic tissue wasting [1].",
              "যেহেতু সাধারণ অনাহারে শরীর শক্তি ব্যয় কমিয়ে দেয় এবং পেশি ভাঙন রোধ করে, তাই রোগীকে স্বাভাবিক খাবার বা স্যালাইন দিয়ে পর্যাপ্ত ক্যালোরি ও প্রোটিন দিলে তার ওজন ও স্বাস্থ্য সম্পূর্ণ আগের অবস্থায় ফিরে আসে [১]। অপরদিকে সাধারণ সারকোপেনিয়া হলো বার্ধক্যজনিত স্বাভাবিক পেশিক্ষয়, যা কম শারীরিক পরিশ্রম, স্নায়ুর অবক্ষয় এবং বার্ধক্যের হরমোন কমে যাওয়ার কারণে ধীরে ধীরে ঘটে [১]। এই স্বাভাবিক বার্ধক্যে রক্তে তীব্র প্রদাহজনিত কোনো বিষাক্ত ঝড় বয়ে যায় না [১]। "
            ),
            l(
              "Cancer cachexia is fundamentally different from both simple starvation and sarcopenia: it is defined as an ongoing, involuntary loss of skeletal muscle mass that cannot be reversed by conventional nutritional support alone and leads to progressive functional decline [1]. The cardinal biochemical hallmark that sets cancer cachexia apart is chronic, unrelenting systemic inflammation [1, 5]. Tumors and host immune cells secrete an avalanche of pro-inflammatory cytokines that hijack hypothalamic appetite centers, elevate resting energy expenditure, and activate muscle-destroying enzymes [1, 5].",
              "কিন্তু ক্যান্সার ক্যাক্সিয়া সম্পূর্ণ আলাদা এবং বহুগুণ বেশি বিপজ্জনক: এটি এমন এক অনিচ্ছাকৃত তীব্র পেশিক্ষয় যা কেবল সাধারণ খাবার খাইয়ে কোনোভাবেই সারিয়ে তোলা যায় না এবং রোগীকে দ্রুত অক্ষমতার দিকে ঠেলে দেয় [১]। ক্যান্সার ক্যাক্সিয়ার প্রধান বৈজ্ঞানিক বৈশিষ্ট্য হলো রক্তে তীব্র ও অবিরাম সিস্টেমিক প্রদাহ [১, ৫]। টিউমার এবং রোগপ্রতিরোধ কোষ থেকে অনবরত বিষাক্ত সাইটোকাইন নির্গত হয়ে মস্তিষ্কের ক্ষুধার কেন্দ্র নষ্ট করে দেয়, মেটাবলিজমের গতি অযথাই বাড়িয়ে দেয় এবং পেশি ধ্বংসকারী এনজাইম সক্রিয় করে [১, ৫]।"
            ),
            l(
              "Because cancer cachexia is driven by this hypercatabolic inflammatory environment, simply infusing carbohydrates or giving nutritional shakes without addressing the inflammation fails to build muscle tissue [1, 2]. The exogenous nutrients are either oxidized wastefully or absorbed by the tumor, while the patient skeletal muscle continues to atrophy [1, 5]. Recognizing this distinction is vital: clinical oncology nutrition must combine aggressive nutritional substrate delivery with anti-inflammatory, metabolic, and exercise interventions to truly halt cachectic decline [1, 2, 6].",
              "যেহেতু ক্যান্সার ক্যাক্সিয়ায় শরীর প্রতিনিয়ত ক্ষতিকর প্রদাহের আগুনে জ্বলতে থাকে, তাই প্রদাহ বন্ধ না করে কেবল বেশি বেশি দুধ, ডিম বা স্যালাইন দিলে কোনো নতুন পেশি তৈরি হয় না [১, ২]। প্রদত্ত খাবার হয় অযথাই পুড়ে ছাই হয়ে যায় অথবা টিউমার খেয়ে ফেলে, আর রোগীর কঙ্কালের মাংস শুকিয়ে যেতেই থাকে [১, ৫]। এই সত্যটি উপলব্ধি করা অত্যন্ত জরুরি: ক্যান্সার ক্যাক্সিয়া রুখতে হলে কেবল উচ্চ-প্রোটিন ক্যালোরি দিলেই চলবে না, বরং একই সাথে প্রদাহ কমানোর ওষুধ এবং বিশেষ ব্যায়ামের সমন্বয় করতে হবে [১, ২, ৬]। "
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            "4. Antineoplastic Toxicities, Mucosal Injury & Host Immunity",
            "৪. ক্যান্সারের ওষুধজনিত বিষাক্ততা, অন্ত্রের ক্ষত ও রোগপ্রতিরোধ ক্ষমতা"
          ),
          paragraphs: [
            l(
              "The clinical challenge of oncology nutrition is profoundly magnified by the toxicities of antineoplastic therapies, including systemic chemotherapy, targeted small-molecule inhibitors, immunotherapy, and ionizing radiation [2, 6]. Because standard cytotoxic chemotherapy drugs target rapidly dividing cells indiscriminately, they wreak severe collateral damage upon the mucosal lining of the gastrointestinal tract, which undergoes complete cellular turnover every three to five days [2].",
              "ক্যান্সার পুষ্টি ব্যবস্থাপনার পথটি আরও বেশি কঠিন হয়ে ওঠে ক্যান্সারের আধুনিক চিকিৎসার বিভিন্ন ক্ষতিকর পার্শ্বপ্রতিক্রিয়ার কারণে [২, ৬]। প্রচলিত কেমোথেরাপির ওষুধগুলো দ্রুত বিভাজনশীল কোষ ধ্বংস করার জন্য তৈরি করা হয়, ফলে টিউমার কোষ মারার পাশাপাশি তারা আমাদের পরিপাকনালির ভেতরের সংবেদনশীল কোষগুলোকেও নির্মমভাবে ধ্বংস করে দেয়, যা প্রতি তিন থেকে পাঁচ দিন পর পর স্বাভাবিকভাবে নতুন তৈরি হতো [২]।"
            ),
            l(
              "Oral mucositis is a agonizingly painful toxicity characterized by widespread erythema, ulceration, and necrosis across the buccal mucosa, tongue, and pharynx [2]. Patients experience excruciating odynophagia (painful swallowing) that makes oral ingestion of solid foods, acidic juices, and even liquids practically impossible [2, 6]. Concurrently, chemotherapy and radiation to the head and neck destroy salivary acinar cells, causing xerostomia (profound mouth dryness) and eliminating the lubricating and antimicrobial protection of saliva, while platinum-based agents induce severe dysgeusia (metallic or rancid taste aversions) [2].",
              "ওরাল মিউকোসাইটিস হলো মুখের ভেতর এক অত্যন্ত যন্ত্রণাদায়ক প্রদাহ ও গভীর ক্ষত যা জিহ্বা, মাড়ি ও গলার চামড়াকে সম্পূর্ণ ছিলে ফেলে [২]। এই তীব্র ক্ষতের কারণে রোগীর খাবার তো দূরের কথা, সাধারণ পানি ঢোক গিলতেও তীব্র যন্ত্রণায় বুক কেঁপে ওঠে [২, ৬]। এর সাথে মাথা ও গলার রেডিয়েশন লালাগ্রন্থি ধ্বংস করে মুখ সম্পূর্ণ শুকিয়ে কাঠ করে ফেলে এবং প্লাটিনাম কেমোথেরাপির কারণে যেকোনো স্বাভাবিক খাবারের স্বাদ মুখে বিশ্রী ধাতব বা পচা তেলের মতো লাগে, ফলে রোগী খাবার দেখলেই ভয় পান [২]।"
            ),
            l(
              "Further down the digestive tract, abdominopelvic radiation and chemotherapy induce acute radiation enteritis and blunting of small intestinal villi [2]. This mucosal disruption drastically diminishes the surface area for brush-border disaccharidase activity and nutrient transport, triggering malabsorptive diarrhea, severe cramping, and secondary lactose intolerance [2]. Crucially, as tight junction complexes break down, the intestinal epithelial barrier fails, allowing bacterial endotoxins (lipopolysaccharide) and intact luminal microbes to translocate into the portal and systemic blood, precipitating neutropenic enterocolitis (typhlitis) and life-threatening sepsis [2, 6].",
              "পরিপাকনালির নিচের অংশে পেটের রেডিয়েশন ও ওষুধের কারণে ক্ষুদ্রান্ত্রের আঙুলের মতো সূক্ষ্ম ভিলাইগুলো সম্পূর্ণ খসে পড়ে [২]। এর ফলে খাদ্য হজম ও শোষণের ক্ষমতা নষ্ট হয়ে মারাত্মক পাতলা পায়খানা, পেটে মোচড় এবং দুধ বা শর্করা সহ্য করার অক্ষমতা দেখা দেয় [২]। সবচেয়ে ভয়ের বিষয় হলো, অন্ত্রের প্রাচীরের জোড়াতালি (Tight Junctions) খুলে যাওয়ায় অন্ত্রের বিষাক্ত জীবাণু ও টক্সিন সরাসরি রক্তের স্রোতে ঢুকে পড়ে এবং রোগীর রক্তে মারাত্মক ব্যাকটেরিয়াল ইনফেকশন (সেপসিস) সৃষ্টি করে জীবন বিপন্ন করে তোলে [২, ৬]। "
            ),
            l(
              "These gastrointestinal toxicities trigger a catastrophic downward spiral: reduced oral intake compounds systemic nutrient deficits, while mucosal inflammation intensifies whole-body cytokine release and immune exhaustion [2, 6]. Anorexia, nausea, vomiting, constipation from opioid analgesics, and diarrhea from targeted kinase inhibitors all synergize to starve the patient [2]. Dedicated oncology nutrition therapy must actively anticipate these toxicities before they manifest, utilizing prophylactic dietary modifications, texture adaptations, topical mucosal protectants, and timely enteral tube support to protect gut integrity [2, 6].",
              "এই সমস্ত সমস্যা একসাথে মিলে রোগীকে এক সর্বনাশা ধ্বংসের দিকে নিয়ে যায়: একদিকে মুখে খেতে না পেরে শরীর শুকিয়ে যায়, অন্যদিকে অন্ত্রের প্রদাহ রক্তে ক্ষতিকর সাইটোকাইন আরও বাড়িয়ে দিয়ে রোগপ্রতিরোধ ক্ষমতাকে পুরোপুরি নিঃশেষ করে দেয় [২, ৬]। তীব্র বমি ভাব, ক্ষুধামন্দা, ব্যথানাশক ওষুধের কোষ্ঠকাঠিন্য এবং ওষুধের ডায়রিয়া মিলে রোগীকে পুরোপুরি খাদ্যশূন্য করে ফেলে [২]। তাই আধুনিক অনকোলজি পুষ্টিবিদদের কাজ হলো এই সমস্যাগুলো শুরু হওয়ার আগেই আগাম ব্যবস্থা নেওয়া—খাবারের ঘনত্ব পরিবর্তন, অন্ত্রের সুরক্ষাকারী পথ্য এবং প্রয়োজনে সঠিক সময়ে ফিডিং টিউব ব্যবহার করে রোগীর পরিপাকনালিকে সচল রাখা [২, ৬]। "
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            "5. Foundations of Oncology Nutrition Assessment & The PG-SGA",
            "৫. অনকোলজি পুষ্টি মূল্যায়নের ভিত্তি ও পিজি-এসজিএ পদ্ধতি"
          ),
          paragraphs: [
            l(
              "The successful clinical management of the oncology patient depends unequivocally upon early, routine, and standardized nutritional screening and comprehensive assessment [2, 6]. Traditional bedside metrics such as total body weight and Body Mass Index (BMI) are notoriously misleading in cancer patients [1, 2]. A patient may present with a normal or even obese BMI (>30 kg/m²) while harboring severe, life-threatening depletion of skeletal muscle masked by extensive fluid retention, ascites, tumor burden, or excessive adipose tissue (sarcopenic obesity) [1, 2].",
              "ক্যান্সার রোগীর পুষ্টি ব্যবস্থাপনার মূল চাবিকাঠি হলো রোগ নির্ণয়ের প্রথম দিন থেকেই বিজ্ঞানসম্মত উপায়ে নিয়মিত পুষ্টি স্তর যাচাই ও পূর্ণাঙ্গ মূল্যায়ন করা [২, ৬]। হাসপাতালের সাধারণ স্কেলে রোগীর মোট ওজন বা বিএমআই (BMI) মাপা ক্যান্সারের ক্ষেত্রে অত্যন্ত বিভ্রান্তিকর হতে পারে [১, ২]। একজন রোগীর ওজন বা বিএমআই আপাতদৃষ্টিতে স্বাভাবিক বা এমনকি অতিরিক্ত মোটা (বিএমআই >৩০) মনে হলেও, তার পেটে পানি জমা (অ্যাসাইটিস), টিউমারের নিজস্ব ওজন বা অতিরিক্ত চর্বির নিচে তার আসল কঙ্কালপেশি হয়তো ভয়াবহভাবে ক্ষয়ে নিঃশেষ হয়ে গেছে [১, ২]।"
            ),
            l(
              "To overcome these diagnostic pitfalls, the international oncology community established the Patient-Generated Subjective Global Assessment (PG-SGA) as the gold-standard nutritional assessment instrument [2, 6]. Originally adapted from the classic Subjective Global Assessment by Ottery, the PG-SGA is uniquely divided into two synergistic sections: a patient-completed questionnaire that evaluates four subjective domains, and a physical/clinical examination completed by healthcare professionals [2, 6].",
              "এই মারাত্মক ভুল নির্ণয় থেকে বাঁচতে আন্তর্জাতিক ক্যান্সার বিশেষজ্ঞ সমাজ পিজি-এসজিএ (PG-SGA) নামক পদ্ধতিটিকে ক্যান্সার পুষ্টি মূল্যায়নের প্রামাণ্য স্বর্ণমান হিসেবে স্বীকৃতি দিয়েছে [২, ৬]। এই বিশেষ পদ্ধতিতে দুটি চমৎকার অংশ রয়েছে: প্রথম অংশে রোগী নিজে তার খাদ্য গ্রহণ, ওজন পরিবর্তন ও শারীরিক কষ্টের চারটি বিষয় পূরণ করেন, এবং দ্বিতীয় অংশে ডাক্তার বা ডায়েটিশিয়ান রোগীর শরীর সরাসরি পরীক্ষা করে মাংসপেশি ও চর্বির ক্ষয় পরিমাপ করেন [২, ৬]। "
            ),
            l(
              "The patient-completed component captures four critical operational parameters: (1) weight history over the preceding 1 and 6 months, quantifying the rate of involuntary loss; (2) dietary intake changes compared to baseline (normal, reduced solids, full liquids, hypocaloric fluids, or starvation); (3) nutritional impact symptoms interfering with eating (nausea, vomiting, mouth sores, dry mouth, swallowing difficulty, pain, taste changes, and early satiety); and (4) functional performance capacity and ambulatory status [2, 6].",
              "রোগীর পূরণ করা অংশে চারটি অতি গুরুত্বপূর্ণ তথ্য উঠে আসে: (১) গত ১ ও ৬ মাসে অনিচ্ছাকৃত ওজনের পরিবর্তন; (২) স্বাভাবিকের তুলনায় খাবারে পরিবর্তন (স্বাভাবিক খাবার, নরম খাবার, তরল খাবার, নাকি একেবারেই কিছু খেতে পারছেন না); (৩) খাবার গ্রহণে বাধার লক্ষণসমূহ (বমি ভাব, মুখের ঘা, মুখ শুকিয়ে যাওয়া, খাবার গিলতে কষ্ট, খাবারের বিস্বাদ বা অল্প খেলেই পেট ভরে যাওয়া); এবং (৪) রোগীর চলাফেরার শক্তি ও দৈনন্দিন কাজের সক্ষমতা [২, ৬]। "
            ),
            l(
              "The professional clinician component evaluates metabolic demand stressors (fever, corticosteroid use, tumor-induced systemic inflammatory response) and performs a targeted physical examination palpating for loss of subcutaneous fat (triceps, orbit, chest), skeletal muscle wasting (temples, clavicles, scapula, interosseous muscles of the hands), and peripheral edema or ascites [2, 6]. The cumulative numerical score triages patients into clear clinical pathways: Stage A (well-nourished), Stage B (moderately malnourished or suspected), and Stage C (severely malnourished), dictating immediate dietary prescriptions, oral supplements, or enteral tube feeding [2, 6].",
              "চিকিৎসকের অংশে রোগীর শারীরিক প্রদাহ ও ওষুধের প্রভাব খতিয়ে দেখা হয় এবং হাত দিয়ে স্পর্শ করে চামড়ার নিচের চর্বি ক্ষয় (বাহু ও চোখের চারপাশ), প্রধান প্রধান মাংসপেশির ক্ষয় (চোখ-মুখের রগের পেশি, কলারবোন, কাঁধের পেশি এবং হাতের তালুর পেশি) এবং পায়ে পানি জমা পরীক্ষা করা হয় [২, ৬]। এই সমস্ত স্কোরের যোগফল দিয়ে রোগীকে তিনটি ধাপে চিহ্নিত করা হয়: স্তর ‘এ’ (সুস্থ পুষ্টি স্তর), স্তর ‘বি’ (মাঝারি অপুষ্টি বা ঝুঁকিপূর্ণ) এবং স্তর ‘সি’ (মারাত্মক অপুষ্টি); যার ওপর ভিত্তি করে তাৎক্ষণিক উচ্চ-ক্যালোরি ডায়েট, সাপ্লিমেন্ট বা টিউব ফিডিংয়ের সিদ্ধান্ত নেওয়া হয় [২, ৬]। "
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            "6. High-Yield Foundational Takeaways in Oncology Nutrition",
            "৬. অনকোলজি পুষ্টির উচ্চ গুরুত্বের মৌলিক সারসংক্ষেপ"
          ),
          paragraphs: [
            l(
              "Cancer is a profound systemic metabolic illness in which expanding tumors actively compete with host tissues for circulating glucose, amino acids, and lipids [1, 3]. Tumor bioenergetics scavenges substrates to accelerate macromolecular duplication, driving the host into an uncoupled, hypercatabolic wasting state [3, 5]. Over 80% of patients with advanced gastrointestinal and thoracic malignancies suffer from severe malnutrition, directly driving treatment failure and contributing to at least 20% of all cancer mortalities [1, 2].",
              "ক্যান্সার মানবদেহের একটি গভীর বিপাকীয় রোগ যেখানে টিউমার কোষ রক্ত থেকে পুষ্টি উপাদান ছিনতাই করে নিজের বিভাজন ত্বরান্বিত করে এবং শরীরকে তীব্র ক্ষয়ের দিকে ঠেলে দেয় [১, ৩]। খাদ্যনালি, ফুসফুস ও অগ্ন্যাশয়ের ক্যান্সারে আক্রান্ত ৮০ শতাংশেরও বেশি রোগী তীব্র অপুষ্টিতে ভোগেন, যা চিকিৎসার কার্যকারিতা নষ্ট করে এবং সমস্ত ক্যান্সার মৃত্যুর অন্তত ২০ শতাংশের জন্য সরাসরি দায়ী [১, ২]। "
            ),
            l(
              "Clinicians must never conflate simple starvation with cancer cachexia [1]. While simple starvation represents an adaptive, non-inflamed conservation state that is fully reversed by caloric refeeding, cancer cachexia is a relentless, cytokine-driven hypercatabolic syndrome where myofibrillar muscle is continuously destroyed by systemic inflammation regardless of exogenous caloric intake [1, 5]. Successful nutritional rehabilitation demands addressing the underlying inflammatory drive in parallel with nutrient delivery [1, 2].",
              "সাধারণ উপবাস বা না খেয়ে থাকার সাথে ক্যান্সার ক্যাক্সিয়াকে কখনোই গুলিয়ে ফেলা যাবে না [১]। সাধারণ অনাহারে শরীর নিজেকে খাপ খাইয়ে শক্তি বাঁচায় এবং খাবার দিলেই তা সেরে ওঠে, কিন্তু ক্যান্সার ক্যাক্সিয়ায় টিউমারের প্রদাহের কারণে মাংসপেশি অনবরত গলতে থাকে এবং কেবল খাবার খাইয়ে তা বন্ধ করা যায় না [১, ৫]। পুষ্টির সফল চিকিৎসার জন্য খাবারের পাশাপাশি এই প্রদাহ থামানোর চিকিৎসা করা অপরিহার্য [১, ২]। "
            ),
            l(
              "Antineoplastic treatment toxicities—including chemotherapy-induced oral mucositis, xerostomia, dysgeusia, nausea, radiation enteritis, and gut barrier breakdown—critically impair oral feeding while accelerating microbial translocation and sepsis [2, 6]. Proactive nutritional support must anticipate these predictable toxicities early in therapy rather than waiting for dramatic weight loss and clinical decline to occur [2, 6].",
              "ক্যান্সারের চিকিৎসার বিভিন্ন পার্শ্বপ্রতিক্রিয়া—যেমন মুখের ঘা (মিউকোসাইটিস), শুষ্ক মুখ, খাবারের বিস্বাদ, বমি এবং অন্ত্রের ছিলে যাওয়া—রোগীর খাবার গ্রহণ মারাত্মকভাবে বাধাগ্রস্ত করে এবং রক্তে ইনফেকশনের ঝুঁকি বাড়ায় [২, ৬]। রোগীর নাটকীয় ওজন হ্রাস বা শয্যাশায়ী হওয়ার অপেক্ষা না করে চিকিৎসা শুরুর প্রথম দিন থেকেই এই সমস্যাগুলো প্রতিরোধে আগাম পুষ্টি সহায়তা দিতে হবে [২, ৬]। "
            ),
            l(
              "Total body weight and BMI are dangerously inadequate markers of nutritional status in oncology due to fluid retention and sarcopenic obesity [1, 2]. Standardized screening utilizing the Patient-Generated Subjective Global Assessment (PG-SGA) is universally required to identify subtle muscle wasting and nutritional impact symptoms, establishing the foundation for personalized, evidence-based medical nutrition therapy [2, 6].",
              "পেটে পানি জমা এবং স্থূলতার নিচে পেশিক্ষয় লুকিয়ে থাকার কারণে কেবল ওজন বা বিএমআই মেপে ক্যান্সারের পুষ্টি বিচার করা মারাত্মক বিপজ্জনক [১, ২]। আন্তর্জাতিক প্রামাণ্য পিজি-এসজিএ (PG-SGA) পদ্ধতি নিয়মিত প্রয়োগ করে পেশিক্ষয় শনাক্ত করা এবং সেই অনুযায়ী প্রতিটি রোগীর জন্য বিশেষায়িত পুষ্টি থেরাপি নিশ্চিত করাই হলো আধুনিক অনকোলজি চিকিৎসার প্রধান লক্ষ্য [২, ৬]। "
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'শিক্ষায়তনিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            "1. The Warburg Effect, Aerobic Glycolysis & Oncometabolic Reprogramming",
            "১. ওয়ারবার্গ প্রভাব, অ্যারোবিক গ্লাইকোলাইসিস ও অনকোমেটাবলিক পুনর্বিন্যাস"
          ),
          paragraphs: [
            l(
              "The seminal observation by Otto Warburg in the 1920s demonstrated that rapidly dividing cancer cells exhibit an aberrant metabolic profile: even in the presence of ambient, fully saturating oxygen concentrations, malignant cells preferentially ferment glucose into lactic acid rather than oxidizing pyruvate in the mitochondrial tricarboxylic acid (TCA) cycle [3]. This hallmark phenomenon, designated aerobic glycolysis or the Warburg effect, was initially hypothesized to stem from irreversible mitochondrial respiratory defects [3]. However, modern molecular biochemistry reveals that mitochondrial function in most tumors remains fully respiration-competent; rather, aerobic glycolysis represents an active, oncogenically orchestrated metabolic rewiring designed to support cellular proliferation [3].",
              "১৯২০-এর দশকে নোবেলজয়ী বিজ্ঞানী অটো ওয়ারবার্গ লক্ষ্য করেন যে ক্যান্সার কোষগুলোতে এক অদ্ভুত বিপাকীয় পরিবর্তন ঘটে: কোষে পর্যাপ্ত অক্সিজেন থাকা সত্ত্বেও তারা মাইটোকন্ড্রিয়ায় গ্লুকোজ পুরোপুরি জারিত করার পরিবর্তে তাকে দ্রুত ল্যাকটিক অ্যাসিডে গেঁজে ফেলে [৩]। এই বিশেষ ঘটনাটিকে অ্যারোবিক গ্লাইকোলাইসিস বা \"ওয়ারবার্গ প্রভাব\" বলা হয় [৩]। প্রথমে ধারণা করা হয়েছিল যে ক্যান্সার কোষের মাইটোকন্ড্রিয়া হয়তো নষ্ট বা বিকল; কিন্তু আধুনিক আণবিক জীববিদ্যা প্রমাণ করেছে যে মাইটোকন্ড্রিয়া সচল থাকা সত্ত্বেও টিউমার কোষ অত্যন্ত পরিকল্পিতভাবে এই পথ বেছে নেয় যাতে কোষগুলো অভাবনীয় দ্রুত গতিতে সংখ্যাবৃদ্ধি করতে পারে [৩]। "
            ),
            l(
              "Under normal physiological conditions, differentiated quiescent cells convert glucose to pyruvate, generating 2 ATP and 2 NADH, which are then transported into mitochondria to yield up to 30 to 32 ATP molecules via oxidative phosphorylation [3]. Under aerobic glycolysis, the net energetic yield is a meager 2 ATP molecules per glucose molecule, representing a seemingly catastrophic loss of bioenergetic efficiency [3]. Malignant cells compensate for this 16-fold thermodynamic disadvantage by upregulating high-affinity glucose transporters—primarily GLUT1 and GLUT3—by up to twenty-fold, an adaptation that forms the clinical diagnostic basis of 18F-fluorodeoxyglucose positron emission tomography (18F-FDG PET) imaging [3].",
              "স্বাভাবিক সুস্থ কোষে প্রতি অণু গ্লুকোজ জারণমূলক ফসফোরাইলেশনের মাধ্যমে মাইটোকন্ড্রিয়ায় প্রায় ৩০ থেকে ৩২টি এটিপি শক্তি তৈরি করে [৩]। কিন্তু ওয়ারবার্গ গ্লাইকোলাইসিসে প্রতি গ্লুকোজ থেকে মাত্র ২টি এটিপি শক্তি উৎপন্ন হয়, যা আপাতদৃষ্টিতে শক্তির চরম অপচয় মনে হয় [৩]। এই বিশাল ঘাটতি পুষিয়ে নিতে ক্যান্সার কোষ তার পর্দার গ্লুকোজ চ্যানেলগুলো—প্রধানত GLUT1 ও GLUT3—বিশ গুণ পর্যন্ত বাড়িয়ে দেয় এবং রক্ত থেকে ঝড়ের গতিতে গ্লুকোজ শুষে নেয়; এই দ্রুত গ্লুকোজ শোষণের ধর্মের ওপর ভিত্তি করেই আধুনিক চিকিৎসায় পিইটি-সিটি (PET Scan) স্ক্যানের মাধ্যমে শরীরে টিউমারের অবস্থান নির্ভুলভাবে শনাক্ত করা হয় [৩]। "
            ),
            l(
              "The biochemical imperative driving aerobic glycolysis is the desperate cellular demand for glycolytic intermediates to serve as carbon backbones for anabolic biosynthesis [3]. In rapidly cycling cells, the rate-limiting glycolytic enzyme pyruvate kinase is predominantly expressed as the low-affinity dimeric embryonic M2 isoform (PKM2) rather than the highly active adult tetrameric PKM1 isoform [3]. Tyrosine kinase oncogenic signaling (such as EGFR, FGFR, and BCR-ABL) phosphorylates PKM2, stabilizing it in this low-activity dimeric state [3]. This deliberate kinetic bottleneck halts the rapid conversion of phosphoenolpyruvate to pyruvate, causing upstream glycolytic metabolites to back up and spill over into biosynthetic shunt pathways [3].",
              "ক্যান্সার কোষে এই পথ বেছে নেওয়ার মূল কারণ হলো নতুন কোষের ইট-পাথর তৈরির কাঁচামাল সংগ্রহ [৩]। ক্যান্সার কোষে পাইরুভেট কাইনেজ এনজাইমের একটি বিশেষ ভ্রূণীয় রূপ (PKM2 ডাইমার) কাজ করে যা সাধারণ এনজাইমের চেয়ে অনেক ধীরগতির [৩]। অনকোজিনগুলোর সংকেতে এই এনজাইমটি ধীরগতির হয়ে গ্লাইকোলাইসিসের গতিতে এক কৃত্রিম ট্রাফিক জ্যাম বা বাধা সৃষ্টি করে [৩]। এর ফলে এর পেছনের অন্তর্বর্তী উপাদানগুলো নিচে না নেমে উপচে পড়ে বিভিন্ন উপশাখায় চলে যায় এবং নতুন ডিএনএ, আরএনএ, অ্যামিনো অ্যাসিড ও কোষপর্দার চর্বি তৈরির প্রধান কাঁচামাল হিসেবে ব্যবহৃত হয় [৩]। "
            ),
            l(
              "Specifically, accumulated glucose-6-phosphate is diverted into the oxidative pentose phosphate pathway (PPP), generating ribose-5-phosphate for nucleotide synthesis and abundant NADPH for reductive biosynthesis and glutathione antioxidant defense [3]. Meanwhile, accumulated 3-phosphoglycerate enters the de novo serine and glycine synthesis pathway via phosphoglycerate dehydrogenase (PHGDH), fueling one-carbon folate metabolism and purine biosynthesis, while dihydroxyacetone phosphate (DHAP) is reduced to glycerol-3-phosphate for membrane phospholipid assembly [3]. The terminal glycolytic enzyme lactate dehydrogenase A (LDHA) rapidly reduces pyruvate to lactate, critically regenerating cytosolic NAD+ from NADH to sustain high-rate glycolytic flux while active monocarboxylate transporters (MCT1 and MCT4) pump lactic acid into the extracellular space, creating a hostile, immunosuppressive, acidic microenvironment [3].",
              "এই উপচে পড়া গ্লুকোজ উপাদানগুলো পেন্টোজ ফসফেট পথের মাধ্যমে নতুন ডিএনএ তৈরির রাইবোজ চিনি এবং ক্ষতিকর ফ্রি-র‍্যাডিক্যাল ধ্বংসকারী NADPH তৈরি করে [৩]। অন্যদিকে ৩-ফসফোগ্লিসারেট উপাদানটি পিএইচজিডিএইচ (PHGDH) এনজাইমের মাধ্যমে সেরিন ও গ্লাইসিন অ্যামিনো অ্যাসিডে রূপান্তরিত হয়ে ওয়ান-কার্বন বিপাক সচল রাখে এবং ডিএইচএপি (DHAP) উপাদানটি কোষপর্দার চর্বি তৈরিতে কাঁচামাল জোগায় [৩]। গ্লাইকোলাইসিসের শেষের এনজাইম এলডিএইচ-এ (LDHA) দ্রুত পাইরুভেটকে ল্যাকটেটে রূপান্তর করে এনএডিপ্লাস (NAD+) ফিরিয়ে আনে যা গ্লাইকোলাইসিসকে অবিরাম চালু রাখে এবং বিশেষ পাম্পের (MCT4) মাধ্যমে অতিরিক্ত ল্যাকটিক অ্যাসিড কোষের বাইরে বের করে দিয়ে চারপাশের পরিবেশকে অম্লীয় করে তোলে, যা রোগপ্রতিরোধ কোষকে অকার্যকর করে দেয় [৩]। "
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            "2. The Humoral Cytokine Network: TNF-alpha, IL-6, PIF & LMF",
            "২. হিউমোরাল সাইটোকাইন নেটওয়ার্ক: TNF-alpha, IL-6, PIF ও LMF"
          ),
          paragraphs: [
            l(
              "The devastating systemic tissue degradation characteristic of cancer cachexia is not mediated by physical tumor expansion, but by an intricate, synergistic network of circulating humoral factors derived both from the host immune system and from the malignant cells themselves [1, 5]. Upon recognizing tumor-associated antigens and necrotic neoplastic debris, host macrophages, dendritic cells, and lymphocytes release abundant pro-inflammatory cytokines into the systemic circulation, most prominently Tumor Necrosis Factor-alpha (TNF-alpha, historically termed cachectin), Interleukin-6 (IL-6), Interleukin-1-beta (IL-1beta), and Interferon-gamma (IFN-gamma) [1, 5].",
              "ক্যান্সার ক্যাক্সিয়ার মারাত্মক শারীরিক ক্ষয় কিন্তু টিউমারের সরাসরি আকার বাড়ার কারণে ঘটে না, বরং টিউমার ও মানবদেহের রোগপ্রতিরোধ কোষ থেকে নির্গত এক জটিল বিষাক্ত রাসায়নিক সংকেতের কারণে ঘটে [১, ৫]। টিউমারের উপস্থিতি টের পেয়ে শরীরের ম্যাক্রোফেজ ও শ্বেত রক্তকণিকাগুলো রক্তে প্রচুর পরিমাণে প্রদাহ সৃষ্টিকারী সাইটোকাইন ছেড়ে দেয়, যার মধ্যে টিউমার নেক্রোসিস ফ্যাক্টর-আলফা (TNF-alpha বা ক্যাক্সেকটিন), ইন্টারলিউকিন-৬ (IL-6), ইন্টারলিউকিন-১-বিটা এবং ইন্টারফেরন-গামা প্রধান [১, ৫]। "
            ),
            l(
              "TNF-alpha is a master orchestrator of metabolic wasting: it acts directly upon hypothalamic arcuate nucleus neurons, suppressing orexigenic Neuropeptide Y (NPY) while stimulating anorexigenic pro-opiomelanocortin (POMC) neurons, precipitating profound, centrally mediated anorexia [5]. Concurrently, TNF-alpha impairs insulin receptor substrate-1 (IRS-1) tyrosine phosphorylation in peripheral skeletal muscle and adipose tissue, inducing peripheral insulin resistance that suppresses glucose uptake and blunts insulin anti-proteolytic brake [1, 5]. In white adipose tissue, TNF-alpha downregulates lipoprotein lipase (LPL) activity while activating hormone-sensitive lipase (HSL), halting lipid storage and driving uninhibited intracellular lipolysis [5].",
              "টিএনএফ-আলফা (TNF-alpha) হলো দেহের সমস্ত ক্ষয় প্রক্রিয়ার প্রধান নিয়ন্ত্রক: এটি সরাসরি মস্তিষ্কের হাইপোথ্যালামাসে গিয়ে ক্ষুধার সংকেত বন্ধ করে দেয় এবং ক্ষুধা কমানোর সংকেত তীব্র করে মারাত্মক ক্ষুধামন্দা সৃষ্টি করে [৫]। একই সাথে এটি পেশি ও চর্বিকোষের ইনসুলিন রিসেপ্টর নষ্ট করে ইনসুলিন রেজিস্ট্যান্স তৈরি করে, যার ফলে শরীর রক্ত থেকে গ্লুকোজ নিতে পারে না এবং পেশি ভাঙন রোধের প্রাকৃতিক বাধা ভেঙে যায় [১, ৫]। চর্বিকোষে এটি চর্বি জমানোর এনজাইম বন্ধ করে এবং চর্বি ভাঙার এনজাইমকে (HSL) উসকে দিয়ে দেহের সমস্ত জমানো চর্বি ভেঙে রক্তে গলিয়ে দেয় [৫]। "
            ),
            l(
              "Interleukin-6 operates as the primary circulating driver of the acute-phase hepatic response and myofibrillar muscle proteolysis [1, 5]. Circulating IL-6 binds to the membrane-bound IL-6 receptor (IL-6R) or soluble IL-6R, forming a signaling complex with the signal transducer glycoprotein 130 (gp130) [5]. This dimerization activates Janus kinase (JAK), which phosphorylates Signal Transducer and Activator of Transcription-3 (STAT3) [5]. Phosphorylated STAT3 homodimerizes and translocates into the nucleus, transactivating high-affinity E3 ubiquitin ligases in skeletal muscle while simultaneously stimulating hepatic synthesis of positive acute-phase reactants such as C-reactive protein (CRP) and fibrinogen [1, 5].",
              "ইন্টারলিউকিন-৬ (IL-6) হলো মাংসপেশি ধ্বংস এবং লিভারের বিপাকীয় বিশৃঙ্খলার প্রধান মূলহোতা [১, ৫]। রক্তে ভেসে থাকা IL-6 পেশিকোষ ও লিভারের gp130 রিসেপ্টরের সাথে যুক্ত হয়ে JAK-STAT3 সংকেত পথ সক্রিয় করে দেয় [৫]। এই সংকেতের প্রভাবে STAT3 প্রোটিন কোষের নিউক্লিয়াসে গিয়ে পেশি ধ্বংসকারী E3 ইউবিকুইটিন লাইগেজ এনজাইমের জিন অন করে দেয় এবং লিভারকে বাধ্য করে স্বাভাবিক প্রোটিন বাদ দিয়ে প্রচুর ক্ষতিকর সিআরপি (CRP) ও ফাইব্রিনোজেন তৈরি করতে [১, ৫]। "
            ),
            l(
              "In addition to host-derived cytokines, malignant tumors directly synthesize and secrete dedicated catabolic glycoproteins [5]. Chief among these is Proteolysis-Inducing Factor (PIF), a 24-kDa sulfated glycoprotein isolated from the urine of cachectic cancer patients [5]. PIF binds to specific surface receptors on skeletal muscle myocytes, activating Protein Kinase C (PKC) and initiating phosphorylation of the inhibitor of kappa B (I-kappa-B) [5]. This triggers nuclear translocation of NF-kB, which directly transactivates the 20S proteasome core and induces muscle proteolysis [5]. Simultaneously, tumors secrete Lipid-Mobilizing Factor (LMF, identical to zinc-alpha-2-glycoprotein [ZAG]), which binds beta-3-adrenergic receptors on adipocytes, stimulating cyclic AMP production and protein kinase A (PKA) to drive massive, continuous lipolysis independent of nutritional intake [5].",
              "শরীরের নিজস্ব সাইটোকাইন ছাড়াও টিউমার কোষ নিজে থেকে বিশেষ কিছু প্রোটিন তৈরি করে রক্তে ছাড়ে যা সরাসরি দেহাংশ ধ্বংস করে [৫]। এর মধ্যে প্রধান হলো প্রোটিওলাইসিস-ইন্ডিউসিং ফ্যাক্টর (PIF), যা কঙ্কালপেশির কোষে যুক্ত হয়ে প্রোটিন কাইনেজ সি ও NF-kB মাস্টার সুইচ অন করে দেয় এবং পেশির প্রোটিন সরাসরি ধ্বংসকারী প্রোটিসোম মেশিন সক্রিয় করে [৫]। একই সাথে টিউমার থেকে নির্গত হয় লিপিড-মোবিলাইজিং ফ্যাক্টর (LMF বা ZAG), যা চর্বিকোষের বিটা-৩ রিসেপ্টরে আঘাত করে অনবরত চর্বি ভাঙতে বাধ্য করে; ফলে রোগী যতই খান না কেন, এই টিউমার টক্সিনের কারণে চর্বি ও পেশি ক্রমাগত গলে যেতেই থাকে [৫]। "
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            "3. Hypercatabolic Proteolysis via E3 Ligases & Adipose Tissue Browning",
            "৩. E3 লাইগেজ দ্বারা তীব্র পেশিক্ষয় ও শ্বেত চর্বির বাদামী রূপান্তর"
          ),
          paragraphs: [
            l(
              "The central biochemical engine driving progressive muscular atrophy in cancer cachexia is the hyperactivation of the intracellular Ubiquitin-Proteasome System (UPS), acting in tandem with the autophagy-lysosome machinery [5]. Skeletal muscle contains over 50% of the total protein reserves of the human body, organized primarily into sarcomeric myofibrillar complexes of actin, myosin heavy chain, troponin, and tropomyosin [5]. In cancer cachexia, the normal equilibrium between muscle protein synthesis (MPS) and muscle protein breakdown (MPB) is violently skewed toward massive proteolysis [1, 5].",
              "ক্যান্সার ক্যাক্সিয়ায় মাংসপেশি নিঃশেষ হয়ে যাওয়ার মূল জৈবরাসায়নিক কারখানা হলো কোষের ভেতরের ইউবিকুইটিন-প্রোটিসোম সিস্টেম (UPS) এবং অটোফ্যাজি-লাইসোজোম ধ্বংসকারী প্রক্রিয়া [৫]। মানবদেহের মোট প্রোটিনের অর্ধেকেরও বেশি জমা থাকে আমাদের কঙ্কালপেশিতে, যা প্রধানত অ্যাকটিন ও মায়োসিন প্রোটিনের সংকোচনশীল ফাইবার দিয়ে গঠিত [৫]। সাধারণ সুস্থ দেহে প্রোটিন তৈরি ও প্রোটিন ভাঙার মধ্যে এক চমৎকার ভারসাম্য থাকে, কিন্তু ক্যান্সারে এই ভারসাম্য সম্পূর্ণ ভেঙে গিয়ে শুধুই প্রোটিন ধ্বংসের তাণ্ডব চলতে থাকে [১, ৫]। "
            ),
            l(
              "At the molecular level, pro-inflammatory cytokines (TNF-alpha, IL-1beta) and tumor-derived PIF converge upon the I-kappa-B kinase (IKK) complex, phosphorylating I-kappa-B-alpha and releasing the p50/p65 heterodimer of Nuclear Factor-kappa B (NF-kB) to translocate into the nucleus [5]. Simultaneously, systemic inflammation and glucocorticoid elevation suppress the anabolic Akt/mTOR kinase cascade, unphosphorylating Forkhead box O (FoxO1 and FoxO3) transcription factors and allowing them to enter the nucleus [5]. NF-kB and FoxO act cooperatively to drive intense transcriptional upregulation of two muscle-specific E3 ubiquitin ligases: Muscle RING Finger-1 (MuRF1, encoded by TRIM63) and Muscle Atrophy F-box (MAFbx, also termed Atrogin-1) [5].",
              "আণবিক স্তরে টিউমারের সাইটোকাইন ও পিআইএফ পেশিকোষের ভেতর NF-kB এবং FoxO নামক দুটি প্রধান ধ্বংসাত্মক ট্রান্সক্রিপশন ফ্যাক্টরকে মুক্ত করে নিউক্লিয়াসে পাঠিয়ে দেয় [৫]। নিউক্লিয়াসে গিয়ে এই দুটি প্রোটিন পেশিকোষের বিশেষ দুটি E3 ইউবিকুইটিন লাইগেজ এনজাইমের জিনকে প্রচণ্ডভাবে সক্রিয় করে তোলে: একটি হলো MuRF1 এবং অপরটি হলো MAFbx বা অ্যাট্রোজিন-১ [৫]। স্বাভাবিক অবস্থায় এদের মাত্রা খুব কম থাকে, কিন্তু ক্যান্সারের সাইটোকাইনের ঝড়ে এদের সংখ্যা বহুগুণ বেড়ে যায় [৫]। "
            ),
            l(
              "MuRF1 functions as a targeted molecular executioner, physically docking to the myofibrillar lattice and catalyzing the covalent attachment of polyubiquitin chains onto myosin heavy chains, myosin-binding protein C, and troponin [5]. Polyubiquitinated myofibrillar proteins are immediately recognized by the 19S regulatory cap of the 26S proteasome, which unfolds the proteins and threads them into the proteolytic 20S catalytic barrel for degradation into short oligopeptides [5]. Concurrently, MAFbx targets the initiation factor eIF3-f for proteasomal destruction, dismantling the cellular translation machinery and shutting down new protein synthesis [5]. The liberated free amino acids—most notably glutamine and alanine—are exported into the circulation, traveling to the liver to fuel the acute-phase response and gluconeogenesis [1, 5].",
              "MuRF1 এনজাইমটি একটি নিখুঁত জল্লাদের মতো কাজ করে: এটি সরাসরি পেশির সংকোচনশীল মায়োসিন ফাইবারকে ধরে তার গায়ে ইউবিকুইটিন নামক ধ্বংসের সিলমোহর এঁটে দেয় [৫]। এই সিলমোহরযুক্ত প্রোটিনগুলোকে কোষের ২৬এস প্রোটিসোম নামক সিলিন্ডার আকৃতির প্রোটিন-কাটা মেশিন তৎক্ষণাৎ কেটে টুকরো টুকরো অ্যামিনো অ্যাসিডে পরিণত করে [৫]। একই সাথে MAFbx এনজাইম কোষের নতুন প্রোটিন তৈরির সুইচ eIF3-f কে ধ্বংস করে দেয়, যার ফলে পেশিকোষে নতুন প্রোটিন তৈরি পুরোপুরি বন্ধ হয়ে যায় [৫]। ভেঙে যাওয়া পেশির এই উপাদানগুলো (গ্লুটামিন ও অ্যালানিন) রক্তে ভেসে লিভারে চলে যায় এবং লিভার সেগুলোকে পুড়িয়ে অন্যান্য প্রদাহজনক উপাদান তৈরি করে [১, ৫]। "
            ),
            l(
              "In parallel with muscle destruction, cancer cachexia drives dramatic, wasteful depletion of adipose tissue through pathological white adipose tissue (WAT) browning [4]. Circulating Parathyroid Hormone-related Protein (PTHrP) and IL-6 released by solid tumors bind to receptors on white adipocytes, initiating protein kinase A (PKA) and p38 MAPK phosphorylation cascades that induce transcription of Uncoupling Protein-1 (UCP1) and PGC-1alpha [4, 5]. Normally restricted to brown adipose tissue, UCP1 inserts into the inner mitochondrial membrane of subcutaneous and visceral fat depots, dissipating the proton electrochemical gradient as futile heat rather than storing it as ATP [4]. This wasteful, uncoupled thermogenesis accelerates whole-body lipid oxidation, elevates resting energy expenditure by hundreds of kilocalories per day, and drives rapid adipose atrophy even during bed rest [4, 5].",
              "পেশি ধ্বংসের পাশাপাশি ক্যান্সার ক্যাক্সিয়া এক বিস্ময়কর ও মারাত্মক উপায়ে শরীরের সমস্ত চর্বি পুড়িয়ে শেষ করে দেয়, যাকে বলা হয় শ্বেত চর্বির বাদামী রূপান্তর (Adipose Browning) [৪]। টিউমার থেকে নিঃসৃত PTHrP হরমোন ও IL-6 শরীরের সাধারণ চর্বিকোষে ঢুকে UCP1 নামক একটি বিশেষ প্রোটিন তৈরি করায় [৪, ৫]। এই UCP1 প্রোটিন মাইটোকন্ড্রিয়ায় শক্তি তৈরির স্বাভাবিক নিয়ম অমান্য করে সমস্ত চর্বিকে এটিপি শক্তি না বানিয়ে অযথাই তাপে পুড়িয়ে উড়িয়ে দেয় [৪]। এই ক্ষতিকর তাপ উৎপাদনের কারণে রোগী বিছানায় স্থির শুয়ে থাকলেও তার দেহের শত শত ক্যালোরি অনবরত পুড়ে ছাই হতে থাকে, যা রোগীর শরীর থেকে চর্বির শেষ কণাটিকেও দ্রুত নিশ্চিহ্ন করে দেয় [৪, ৫]। "
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            "4. Hepatic Acute-Phase Reprogramming, Hypoalbuminemia & Substrate Cycles",
            "৪. যকৃতের অ্যাকিউট-ফেজ রূপান্তর, হাইপোঅ্যালবুমিনেমিয়া ও সাবস্ট্রেট চক্র"
          ),
          paragraphs: [
            l(
              "The liver plays a central, paradoxical role in the metabolic turmoil of cancer cachexia: while skeletal muscle and adipose tissue are rapidly dissolving, the liver undergoes profound metabolic hypertrophy and functional reprogramming under the influence of circulating pro-inflammatory cytokines [1, 5]. In healthy nutrition, hepatocytes prioritize the synthesis of constitutive visceral transport proteins, primarily albumin (producing ~12–15 grams daily) and transferrin, maintaining plasma oncotic pressure and microvascular fluid homeostasis [1].",
              "ক্যান্সার ক্যাক্সিয়ার বিপাকীয় ঝড়ে যকৃত বা লিভার এক অদ্ভুত ও সাংঘর্ষিক ভূমিকা পালন করে: একদিকে যখন সারা শরীরের পেশি ও চর্বি গলে শেষ হয়ে যাচ্ছে, তখন টিউমারের সাইটোকাইনের প্রভাবে লিভার অস্বাভাবিকভাবে তার নিজের ভেতরের প্রোটিন তৈরির অগ্রাধিকারকে উল্টে ফেলে [১, ৫]। স্বাভাবিক সুস্থ অবস্থায় লিভার কোষ প্রতিদিন প্রায় ১২ থেকে ১৫ গ্রাম অ্যালবুমিন প্রোটিন এবং ট্রান্সফেরিন তৈরি করে যা রক্তের চাপ ও তরল সমতা রক্ষা করে [১]। "
            ),
            l(
              "In cancer cachexia, sustained exposure to portal and systemic Interleukin-6 and TNF-alpha activates the hepatic gp130-JAK-STAT3 transcriptional cascade, forcing an aggressive switch to the Acute Phase Protein Response (APPR) [1, 5]. Hepatocytes abruptly downregulate the transcription of constitutive negative acute-phase proteins—causing serum albumin, prealbumin (transthyretin), and transferrin concentrations to plummet [1, 2]. Simultaneously, the liver massively upregulates the synthesis of positive acute-phase reactants, including C-reactive protein (CRP), serum amyloid A (SAA), fibrinogen, alpha-1-antitrypsin, and hepcidin [1, 5].",
              "কিন্তু ক্যান্সারে যখন রক্তে ইন্টারলিউকিন-৬ এবং টিএনএফ-আলফার বন্যা বয়ে যায়, তখন লিভারের কোষগুলো স্বাভাবিক পরিবহন প্রোটিন তৈরি সম্পূর্ণ বন্ধ করে দেয় [১, ৫]। ফলে রক্তে অ্যালবুমিন ও ট্রান্সফেরিনের মাত্রা বিপজ্জনকভাবে নিচে নেমে যায় (হাইপোঅ্যালবুমিনেমিয়া) [১, ২]। এর পরিবর্তে লিভার দিনরাত কেবল প্রদাহ সৃষ্টিকারী ও রক্ত জমাট বাঁধার প্রোটিন—যেমন সি-রিঅ্যাক্টিভ প্রোটিন (CRP), সিরাম অ্যামাইলয়েড এ এবং হেপসিডিন—তৈরি করতে ব্যস্ত হয়ে পড়ে [১, ৫]। "
            ),
            l(
              "This hepatic acute-phase response imposes an enormous amino acid drain upon the host [1, 5]. Because positive acute-phase proteins possess amino acid profiles enriched in aromatic and sulfur-containing amino acids (such as phenylalanine, tyrosine, tryptophan, and cysteine) compared to skeletal muscle actin and myosin, the liver must consume disproportionately large quantities of muscle-derived amino acids to synthesize modest quantities of CRP and fibrinogen [1, 5]. Consequently, for every single gram of acute-phase proteins synthesized by the liver, several grams of peripheral muscle myofibrils must be proteolytically destroyed, accelerating peripheral muscle wasting to feed the hepatic inflammatory response [1, 5].",
              "লিভারের এই অস্বাভাবিক প্রদাহজনক প্রোটিন তৈরির কাজ চালাতে গিয়ে সারা শরীরের মাংসপেশির ওপর এক ভয়াবহ নির্যাতন নেমে আসে [১, ৫]। সিআরপি ও ফাইব্রিনোজেন তৈরির জন্য যে বিশেষ অ্যামিনো অ্যাসিডগুলো প্রয়োজন, সেগুলো পেশির প্রোটিনে কম অনুপাতে থাকে [১, ৫]। ফলে মাত্র ১ গ্রাম সিআরপি বা প্রদাহজনক প্রোটিন তৈরি করতে লিভারের জন্য কয়েক গ্রাম মূল্যবান কঙ্কালপেশি ভেঙে কাঁচামাল জোগাড় করতে হয়; অর্থাৎ লিভারের এই কৃত্রিম চাহিদা মেটাতেই শরীরের হাত-পায়ের মাংস দ্রুত গলে রক্তে চলে আসতে থাকে [১, ৫]। "
            ),
            l(
              "Crucially, this pathophysiological insight completely invalidates the historical practice of utilizing serum albumin or prealbumin as clinical biomarkers of nutritional status in oncology [1, 2]. Serum hypoalbuminemia in cancer patients does not reflect dietary protein deficiency or calorie starvation; rather, it serves as an exquisitely sensitive marker of systemic inflammation and illness severity driven by IL-6 [1, 2]. Attempting to \"correct\" low serum albumin by aggressively infusing exogenous parenteral amino acids or hyperalimentation fails to elevate albumin levels and instead overloads the liver with excess urea generation [2]. Furthermore, tumors engage the liver in wasteful Cori cycling: the tumor exports massive quantities of lactate, which the liver converts back to glucose via ATP-consuming gluconeogenesis, squandering 6 ATP molecules per cycle and imposing an energetic tax of hundreds of kilocalories per day on the host [3, 5].",
              "এই বৈজ্ঞানিক সত্যটি একটি বহুল প্রচলিত ভুল ধারণাকে সম্পূর্ণ ভেঙে দেয়: ক্যান্সারে রক্তের অ্যালবুমিন কম থাকা মানে কিন্তু খাদ্যে প্রোটিনের অভাব নয় [১, ২]। বরং কম অ্যালবুমিন প্রমাণ করে যে রোগীর শরীরে মারাত্মক মাত্রায় প্রদাহ ও সাইটোকাইনের আক্রমণ চলছে [১, ২]। এই অবস্থায় বাইরে থেকে জোর করে স্যালাইনে অ্যামিনো অ্যাসিড বা অতিরিক্ত খাবার ঢাললে অ্যালবুমিন বাড়ে না, বরং লিভারে অপ্রয়োজনীয় বিষাক্ত বর্জ্য ইউরিয়া তৈরি হয়ে শরীর আরও দুর্বল হয়ে পড়ে [২]। এর পাশাপাশি টিউমার যে প্রচুর ল্যাকটেট তৈরি করে, লিভার শক্তি খরচ করে (কোরাই চক্র) তাকে আবার গ্লুকোজ বানায়; এই নিরর্থক চক্রে প্রতিদিন শরীর অতিরিক্ত শত শত ক্যালোরি শক্তি অযথাই হারিয়ে ফেলে [৩, ৫]। "
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            "5. Evidence-Based ESPEN Guidelines for Medical Nutrition Therapy",
            "৫. মেডিকেল নিউট্রিশন থেরাপির প্রমাণভিত্তিক ইএসপিইএন নির্দেশিকা"
          ),
          paragraphs: [
            l(
              "The European Society for Clinical Nutrition and Metabolism (ESPEN) has established comprehensive, evidence-based clinical practice guidelines for nutritional support in cancer patients [2, 6]. The foundational premise of ESPEN oncology guidelines is that nutritional intervention must be integrated early into the continuum of cancer care—at the time of diagnosis—rather than reserved for end-stage palliation [2]. All cancer patients must be screened regularly for malnutrition using validated tools such as the Nutritional Risk Screening 2002 (NRS-2002) or the Patient-Generated Subjective Global Assessment (PG-SGA) [2, 6].",
              "ইউরোপিয়ান সোসাইটি ফর ক্লিনিক্যাল নিউট্রিশন অ্যান্ড মেটাবলিজম (ESPEN) ক্যান্সার রোগীদের পুষ্টি ব্যবস্থাপনায় বিশ্বজুড়ে স্বীকৃত প্রামাণ্য নির্দেশিকা প্রণয়ন করেছে [২, ৬]। এই নির্দেশিকার মূল কথা হলো: রোগীকে অন্তিম দশায় নিয়ে গিয়ে স্যালাইন দেওয়ার জন্য অপেক্ষা না করে, ক্যান্সার ধরা পড়ার প্রথম দিন থেকেই পুষ্টি থেরাপির পরিকল্পনা চিকিৎসায় যুক্ত করতে হবে [২]। আন্তর্জাতিক প্রামাণ্য পদ্ধতি যেমন NRS-2002 বা পিজি-এসজিএ (PG-SGA) ব্যবহার করে প্রতিটি রোগীর পুষ্টি ঝুঁকি নিয়মিত পরীক্ষা করা বাধ্যতামূলক [২, ৬]। "
            ),
            l(
              "Determining accurate bioenergetic and protein targets is critical to avoid underfeeding or metabolic overfeeding [2, 6]. In the absence of indirect calorimetry, ESPEN guidelines recommend assuming a total daily energy expenditure of 25 to 30 kcal per kilogram of actual body weight per day [2]. Protein intake is prioritized above standard population recommendations to counter cytokine-mediated anabolic resistance and stimulate muscle protein synthesis: a minimum protein delivery of 1.2 to 1.5 g/kg/day is recommended, and up to 2.0 g/kg/day during intensive antineoplastic chemotherapy or post-surgical recovery, provided renal function is intact [2, 6]. Ensuring high-biological-value protein sources rich in essential amino acids, particularly leucine (>2.5 g per feeding), is required to activate the Sestrin2-GATOR2-mTORC1 anabolic signaling pathway [2].",
              "রোগীকে সঠিক মাত্রায় পুষ্টি দিতে ক্যালোরি ও প্রোটিনের সঠিক হিসাব করা আবশ্যক [২, ৬]। বিশেষ যন্ত্রের পরিমাপ ছাড়া সাধারণ রোগীর ক্ষেত্রে প্রতিদিন প্রতি কেজি ওজনে ২৫ থেকে ৩০ কিলোক্যালোরি শক্তি নির্ধারণ করা হয় [২]। সাইটোকাইনজনিত পেশি ধ্বংস রুখে নতুন পেশি তৈরির সংকেত দিতে প্রোটিনের মাত্রা সাধারণ মানুষের চেয়ে অনেক বাড়িয়ে ১.২ থেকে ১.৫ গ্রাম/কেজি/দিন (এবং তীব্র কেমোথেরাপি চলাকালীন ২.০ গ্রাম/কেজি পর্যন্ত) নির্ধারণ করা হয় [২, ৬]। প্রতি বেলার খাবারে উন্নতমানের প্রোটিন—বিশেষ করে আড়াই গ্রামের বেশি লিউসিন অ্যামিনো অ্যাসিড—নিশ্চিত করতে হবে যাতে কোষের mTORC1 প্রোটিন তৈরির সুইচ অন হতে পারে [২]। "
            ),
            l(
              "The clinical route of nutritional delivery follows a strict step-wise algorithm prioritizing the gastrointestinal tract [2, 6]. Step 1 begins with personalized dietary counseling by a specialized oncology dietitian to modify food texture, meal frequency, and symptom management, combined with fortified foods [2]. If dietary intake remains inadequate (<70% of estimated requirements for >1–2 weeks), Step 2 mandates the introduction of Oral Nutritional Supplements (ONS), specifically energy-dense (1.5–2.0 kcal/mL), high-protein formulations enriched with omega-3 fatty acids (eicosapentaenoic acid [EPA], 1.5–2.0 g/day), which randomized controlled trials have shown to blunt systemic inflammation, stabilize lean body mass, and reduce chemotherapy toxicities [2, 6].",
              "পুষ্টি প্রদানের ক্ষেত্রে একটি ধারাবাহিক বৈজ্ঞানিক ধাপ অনুসরণ করা হয় যেখানে সবসময় পরিপাকনালিকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয় [২, ৬]। ১ম ধাপে অভিজ্ঞ অনকোলজি ডায়েটিশিয়ানের মাধ্যমে রোগীর পছন্দ ও শারীরিক কষ্ট অনুযায়ী খাবারের ধরন পরিবর্তন এবং পুষ্টিকর খাবার নিশ্চিত করা হয় [২]। যদি রোগী তার প্রয়োজনীয় পুষ্টির ৭০ শতাংশের কম খেতে পারেন, তবে ২য় ধাপে বিশেষায়িত ওরাল নিউট্রিশনাল সাপ্লিমেন্ট (ONS) যুক্ত করা হয়—বিশেষ করে উচ্চ-প্রোটিন ও ওমেগা-৩ (EPA দিনে ১.৫-২.০ গ্রাম) সমৃদ্ধ তরল পুষ্টি পানীয়, যা গবেষণায় প্রমাণিতভাবে রক্তে প্রদাহ কমিয়ে মাংসপেশি ধরে রাখতে সাহায্য করে [২, ৬]। "
            ),
            l(
              "If oral intake fails completely due to mechanical obstruction, severe mucositis, or intractable anorexia, Step 3 initiates Enteral Nutrition (EN) via nasogastric tube or percutaneous endoscopic gastrostomy (PEG) [2, 6]. In head and neck or esophageal cancers undergoing curative chemoradiotherapy, proactive PEG placement prior to treatment is strongly recommended to prevent treatment interruptions [2]. Parenteral Nutrition (PN) via a central venous catheter is strictly reserved for Step 4 when the gastrointestinal tract is entirely non-functional or inaccessible—such as in severe radiation enteritis, short bowel syndrome, mechanical bowel obstruction, or high-output intestinal fistulas [2, 6]. Routine parenteral feeding in ambulatory patients with an intact digestive tract is explicitly advised against due to high rates of catheter bloodstream infections and lack of survival benefit [2].",
              "যদি মুখে কোনোভাবেই খাদ্য গ্রহণ সম্ভব না হয় (যেমন খাদ্যনালির পথ বন্ধ থাকা বা মুখের তীব্র ঘা), তবে ৩য় ধাপে নাকের নল বা পেটের বিশেষ টিউবের (PEG) মাধ্যমে সরাসরি পাকস্থলীতে এন্টারাল পুষ্টি দেওয়া হয় [২, ৬]। মাথা ও গলার ক্যান্সারে কেমো-রেডিওথেরাপির আগেই এই টিউব বসিয়ে নেওয়া চিকিৎসার সাফল্য নিশ্চিত করে [২]। আর যদি পুরো পরিপাকনালি অকেজো বা অবশ হয়ে যায় (যেমন অন্ত্রে ফুটো বা চরম রেডিয়েশন ড্যামেজ), তবেই কেবল ৪র্থ ধাপে সেন্ট্রাল লাইনের মাধ্যমে সরাসরি রক্তে প্যারেন্টেরাল পুষ্টি (TPN) দেওয়া হয় [২, ৬]। পরিপাকনালি ভালো থাকা অবস্থায় অযথাই শিরায় খাদ্য দেওয়া চিকিৎসাবিজ্ঞানে সম্পূর্ণ নিষেধ, কারণ এতে মারাত্মক ইনফেকশনের ঝুঁকি বাড়ে কিন্তু রোগীর আয়ু বৃদ্ধি পায় না [২]। "
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            "6. High-Yield Academic Synthesis of Cancer Bioenergetics & Wasting",
            "৬. ক্যান্সার শক্তিবিজ্ঞান ও শারীরিক ক্ষয়ের উচ্চ গুরুত্বের শিক্ষায়তনিক সারসংক্ষেপ"
          ),
          paragraphs: [
            l(
              "Aerobic glycolysis (the Warburg effect) is an active, oncogenically orchestrated metabolic phenotype wherein malignant cells convert glucose into lactate via LDHA even under full oxygen availability [3]. By expressing dimeric embryonic PKM2, cancer cells deliberately stall glycolytic flux to divert upstream carbon intermediates into the pentose phosphate pathway (ribose, NADPH) and serine/glycine synthesis, securing the macromolecular building blocks required for rapid biomass duplication [3]. High glucose uptake mediated by GLUT1 and GLUT3 overexpression provides the basis for clinical 18F-FDG PET diagnostic imaging [3].",
              "ওয়ারবার্গ অ্যারোবিক গ্লাইকোলাইসিস হলো ক্যান্সার কোষের এক সুপরিকল্পিত কৌশল যার মাধ্যমে পর্যাপ্ত অক্সিজেনের উপস্থিতিতেও গ্লুকোজকে ল্যাকটেটে রূপান্তরিত করা হয় [৩]। ধীরগতির PKM2 এনজাইম দিয়ে গ্লাইকোলাইসিসকে আটকে দিয়ে ক্যান্সার কোষ সেই পুষ্টিকে পেন্টোজ ফসফেট পথ ও সেরিন সংশ্লেষে পাঠিয়ে নতুন ডিএনএ ও কোষপর্দা তৈরির কাঁচামাল বানিয়ে নেয় [৩]। রক্ত থেকে GLUT1 ও GLUT3 চ্যানেলের মাধ্যমে বিপুল পরিমাণ গ্লুকোজ টেনে নেওয়ার এই বৈশিষ্ট্যের ওপর ভিত্তি করেই আধুনিক পিইটি স্ক্যান পরিচালিত হয় [৩]। "
            ),
            l(
              "Cancer cachexia is a devastating, multi-organ hypercatabolic syndrome driven by a synergistic humoral network of pro-inflammatory cytokines (TNF-alpha, IL-6, IL-1beta) and tumor glycoproteins (PIF, LMF) [1, 5]. Circulating cytokines stimulate hypothalamic anorexia, uncouple peripheral insulin signaling, and induce hepatic acute-phase protein synthesis [1, 5]. Serum hypoalbuminemia reflects systemic IL-6-driven inflammatory reprioritization rather than nutritional deficit, invalidating albumin as an oncology nutritional biomarker [1, 2].",
              "ক্যান্সার ক্যাক্সিয়া হলো টিউমার ও শ্বেত রক্তকণিকা থেকে নির্গত ক্ষতিকর সাইটোকাইন (TNF-alpha, IL-6) এবং টিউমার টক্সিনের (PIF, LMF) দ্বারা সৃষ্ট এক বহুমুখী ধ্বংসযজ্ঞ [১, ৫]। এই সাইটোকাইনগুলো মস্তিষ্কে ক্ষুধা নষ্ট করে, ইনসুলিন অকার্যকর করে এবং লিভারের স্বাভাবিক প্রোটিন উৎপাদন বন্ধ করে প্রদাহজনক প্রোটিন তৈরি করায় [১, ৫]। রক্তে অ্যালবুমিন কমে যাওয়া মূলত এই তীব্র প্রদাহের লক্ষণ, খাদ্যে প্রোটিনের অভাব নয় [১, ২]। "
            ),
            l(
              "Myofibrillar muscle destruction in cachexia is executed by the Ubiquitin-Proteasome System through transcriptional transactivation of muscle-specific E3 ligases MuRF1 and MAFbx/Atrogin-1 via NF-kB and FoxO signaling cascades [5]. Concurrently, tumor-derived PTHrP and IL-6 induce white adipose tissue browning, driving UCP1 expression in subcutaneous and visceral fat to burn lipids as futile heat, elevating resting metabolic rate and driving progressive emaciation independent of physical activity [4, 5].",
              "ক্যান্সারে কঙ্কালপেশির ক্ষয় ঘটে ইউবিকুইটিন-প্রোটিসোম প্রক্রিয়ার মাধ্যমে যেখানে NF-kB ও FoxO সংকেত পেশির বিশেষ E3 লাইগেজ এনজাইম (MuRF1 ও MAFbx) সক্রিয় করে মায়োসিন প্রোটিনকে কেটে টুকরো টুকরো করে ফেলে [৫]। পাশাপাশি টিউমার থেকে নির্গত PTHrP হরমোন সাধারণ চর্বিকোষে UCP1 প্রোটিন বাড়িয়ে চর্বির সমস্ত শক্তিকে তাপে পুড়িয়ে উড়িয়ে দেয় (ফ্যাট ব্রাউনিং), যার ফলে রোগী সম্পূর্ণ বিশ্রামে থাকলেও শত শত ক্যালোরি অযথাই নষ্ট হয়ে শরীর কঙ্কালসার হয়ে যায় [৪, ৫]। "
            ),
            l(
              "ESPEN oncology guidelines establish that clinical nutrition must be integrated proactively from cancer diagnosis [2, 6]. Medical nutrition therapy targets 25 to 30 kcal/kg/day and an elevated protein intake of 1.2 to 1.5 g/kg/day (up to 2.0 g/kg/day during intensive therapy), enriched with high-leucine protein and omega-3 EPA immunonutrition (1.5–2.0 g/day) to blunt the inflammatory drive [2, 6]. Nutritional delivery adheres to a strict hierarchy: dietary counseling -> oral nutritional supplements -> enteral tube feeding (proactive PEG in head and neck chemoradiation) -> central parenteral nutrition strictly reserved for intestinal failure [2, 6].",
              "ইএসপিইএন আন্তর্জাতিক নির্দেশিকা অনুযায়ী ক্যান্সার ধরা পড়ার প্রথম দিন থেকেই সমন্বিত পুষ্টি থেরাপি শুরু করতে হবে [২, ৬]। রোগীর দৈনিক ক্যালোরি ২৫-৩০ kcal/kg এবং প্রোটিন ১.২-১.৫ g/kg (তীব্র চিকিৎসায় ২.০ g/kg পর্যন্ত) নির্ধারণ করা হয়, সাথে লিউসিন এবং ওমেগা-৩ ইপিএ (EPA দিনে ১.৫-২.০ গ্রাম) দিয়ে প্রদাহ থামানোর ব্যবস্থা করা হয় [২, ৬]। পুষ্টি দেওয়ার ক্ষেত্রে মুখের পথকে অগ্রাধিকার দিয়ে ক্রমান্বয়ে সাপ্লিমেন্ট, টিউব ফিডিং এবং পরিপাকনালি সম্পূর্ণ বিকল হলেই কেবল শিরায় স্যালাইন (TPN) দেওয়ার বৈজ্ঞানিক নিয়ম কঠোরভাবে অনুসরণ করতে হবে [২, ৬]। "
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
            "1. The Tumor Microenvironment, Hypoxia-Inducible Factors & Lactate Dynamics",
            "১. টিউমার মাইক্রোএনভায়রনমেন্ট, হাইপোক্সিয়া ফ্যাক্টর ও ল্যাকটেটের গতিবিদ্যা"
          ),
          paragraphs: [
            l(
              "At the frontier of translational oncology nutrition, tumors can no longer be conceptualized as uniform clusters of autonomously proliferating cells; rather, they operate as complex, evolving ecological organs embedded within a specialized tumor microenvironment (TME) [3, 5]. As solid tumors outgrow their disorganized neo-vasculature, profound regional hypoxia develops [3]. Hypoxia stabilizes the alpha subunit of Hypoxia-Inducible Factor-1 (HIF-1alpha) by preventing its prolyl hydroxylation by oxygen-sensing prolyl hydroxylase domain enzymes (PHDs) and subsequent recognition by the von Hippel-Lindau (VHL) E3 ubiquitin ligase [3].",
              "উচ্চতর অনকোলজি পুষ্টিবিজ্ঞানের আধুনিক গবেষণায় টিউমারকে আর কেবল সাধারণ কোষের স্তূপ হিসেবে দেখা হয় না; বরং এটি তার চারপাশের টিউমার মাইক্রোএনভায়রনমেন্টের (TME) সাথে এক জটিল জৈবিক বাস্তুতন্ত্র গড়ে তোলে [৩, ৫]। টিউমারের আকার যখন দ্রুত বাড়ে কিন্তু রক্তনালিগুলো এলোমেলোভাবে তৈরি হয়, তখন টিউমারের গভীরে তীব্র অক্সিজেনের সংকট (হাইপোক্সিয়া) দেখা দেয় [৩]। এই অক্সিজেন সংকটের কারণে কোষে হাইপোক্সিয়া-ইন্ডিউসিবল ফ্যাক্টর-১ (HIF-1alpha) নামক এক মাস্টার সুইচ স্থায়ীভাবে সক্রিয় হয়ে বসে [৩]। "
            ),
            l(
              "Stabilized HIF-1alpha translocates into the nucleus, heterodimerizing with HIF-1beta and binding to hypoxia response elements (HREs) to execute a sweeping transcriptional reprogramming of cellular metabolism [3]. HIF-1alpha directly transactivates genes encoding high-capacity glucose transporters (GLUT1, GLUT3) and virtually every glycolytic enzyme, including hexokinase-2 (HK2), phosphofructokinase-1 (PFKM), and lactate dehydrogenase A (LDHA) [3]. Crucially, HIF-1alpha upregulates pyruvate dehydrogenase kinase-1 (PDK1), which phosphorylates and inactivates the pyruvate dehydrogenase (PDH) complex [3]. This molecular checkpoint actively shunts pyruvate away from mitochondrial entry, extinguishing glucose-driven oxidative phosphorylation and locking the tumor into hyper-glycolytic lactate production [3].",
              "সক্রিয় HIF-1alpha নিউক্লিয়াসে গিয়ে টিউমারের কোষীয় বিপাককে সম্পূর্ণ নতুন ধাঁচে ঢেলে সাজায় [৩]। এটি গ্লুকোজ শোষণের চ্যানেলগুলো (GLUT1) এবং গ্লাইকোলাইসিসের প্রায় প্রতিটি এনজাইমকে বহুগুণ বাড়িয়ে দেয় [৩]। একই সাথে এটি PDK1 নামক একটি বিশেষ এনজাইম তৈরি করে যা পাইরুভেট ডিহাইড্রোজিনেজকে (PDH) অবরুদ্ধ করে দেয় [৩]। এর ফলে গ্লুকোজ থেকে তৈরি পাইরুভেট আর কোনোভাবেই মাইটোকন্ড্রিয়ায় ঢুকতে পারে না এবং টিউমার পুরোপুরি অবাধ ল্যাকটেট উৎপাদনের কারখানায় পরিণত হয় [৩]। "
            ),
            l(
              "The colossal volume of lactic acid generated by aerobic glycolysis is exported across the tumor cell membrane via proton-coupled Monocarboxylate Transporters, predominantly MCT4, working in concert with carbonic anhydrase IX (CAIX) and sodium-hydrogen exchanger-1 (NHE1) [3]. This massive proton efflux severely acidifies the extracellular interstitial space, driving the microenvironmental pH down to 6.2–6.8 while maintaining a neutral or alkaline intracellular pH (7.2–7.4) [3]. This microenvironmental acidosis serves as a potent functional weapon: it degrades extracellular matrix proteins via acid-activated cathepsins and matrix metalloproteinases, accelerating tumor invasion and metastasis [3].",
              "অতিরিক্ত গ্লাইকোলাইসিসের ফলে যে বিপুল পরিমাণ ল্যাকটিক অ্যাসিড তৈরি হয়, টিউমার কোষ বিশেষ পাম্পের (MCT4) মাধ্যমে তাকে অনবরত কোষের বাইরে নিক্ষেপ করতে থাকে [৩]। এর ফলে টিউমারের বাইরের চারপাশের টিস্যুর পিএইচ (pH) মারাত্মকভাবে অম্লীয় (৬.২ থেকে ৬.৮) হয়ে পড়ে [৩]। এই তীব্র অম্লীয় বা অ্যাসিডিক পরিবেশ টিউমারের জন্য এক মারাত্মক অস্ত্র হিসেবে কাজ করে: এটি আশেপাশের সুস্থ টিস্যুকে গলিয়ে দিয়ে ক্যান্সার কোষের রক্তে ছড়িয়ে পড়া বা মেটাস্ট্যাসিস হওয়ার পথকে উন্মুক্ত করে দেয় [৩]। "
            ),
            l(
              "Beyond promoting physical invasion, extracellular lactic acid and low glucose availability orchestrate profound local immunosuppression [3, 5]. Infiltrating cytotoxic CD8+ T lymphocytes and natural killer (NK) cells rely heavily upon aerobic glycolysis for their effector cytokine production and clonal expansion [3]. Surrounded by a glucose-depleted, lactate-poisoned microenvironment, anti-tumor T-cells suffer complete bioenergetic paralysis, experiencing suppressed proliferation, defective cytolytic granule exocytosis, and rapid exhaustion [3, 5]. Meanwhile, immunosuppressive regulatory T cells (Tregs) and M2-like tumor-associated macrophages (TAMs) thrive on lipid and lactate oxidation, actively protecting the malignant cells from immune clearance [3, 5].",
              "চারপাশের এই অ্যাসিডিক পরিবেশ ও পুষ্টিহীনতা শরীরের রোগপ্রতিরোধ সেনাদলকে সম্পূর্ণ পঙ্গু করে ফেলে [৩, ৫]। টিউমার ধ্বংস করার জন্য যে সাইটোটক্সিক টি-কোষ ও এনকে (NK) কোষ ছুটে আসে, তাদের সক্রিয় হওয়ার জন্যও গ্লুকোজ শক্তির প্রয়োজন হয় [৩]। কিন্তু টিউমার সমস্ত গ্লুকোজ আগেই খেয়ে ফেলে এবং চারপাশকে বিষাক্ত ল্যাকটেটে ভরিয়ে দেয়, ফলে এই বীর সেনাদল শক্তিহীন হয়ে অসাড় হয়ে পড়ে এবং টিউমার মারার ক্ষমতা চিরতরে হারিয়ে ফেলে [৩, ৫]। অপরদিকে টিউমারের বন্ধু প্রোটিনগুলো এই অ্যাসিডিক পরিবেশের সুযোগ নিয়ে টিউমারকে দেহের সুরক্ষাবলয় থেকে পুরোপুরি আড়াল করে রাখে [৩, ৫]। "
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            "2. CT-Quantified Body Composition: Sarcopenic Obesity & Myosteatosis",
            "২. সিটি-স্ক্যান পরিমাপকৃত শারীরিক গঠন: সারকোপেনিক স্থূলতা ও মায়োস্টিয়াটোসিস"
          ),
          paragraphs: [
            l(
              "One of the most profound paradigm shifts in modern oncology nutrition is the routine utilization of routine diagnostic Computed Tomography (CT) scans for precise, objective body composition analysis [1, 2]. Traditionally, clinical oncology relied upon weight scales and Body Mass Index (BMI) to categorize nutritional risk; however, these macroscopic indices are entirely blind to internal tissue distribution and muscle quality [1, 2]. Modern image-analysis software segments lumbar vertebra cross-sections—standardized precisely at the third lumbar vertebra (L3)—where cross-sectional skeletal muscle area correlates almost perfectly with whole-body lean muscle mass [1, 2].",
              "আধুনিক অনকোলজি পুষ্টিবিজ্ঞানের সবচেয়ে যুগান্তকারী বিপ্লব হলো ক্যান্সার চিকিৎসার নিয়মিত সিটি স্ক্যান (CT Scan) ছবিগুলো ব্যবহার করে রোগীর শরীরের ভেতরের পেশি ও চর্বির নিখুঁত ডিজিটাল পরিমাপ করা [১, ২]। সনাতন পদ্ধতিতে কেবল ওজন বা বিএমআই দেখে পুষ্টির ঝুঁকি বিচার করা হতো, কিন্তু এই সাধারণ পরিমাপ শরীরের ভেতরের আসল মাংসপেশি এবং চর্বির সঠিক বিন্যাস দেখতে পায় না [১, ২]। আধুনিক সফটওয়্যার দিয়ে রোগীর মেরুদণ্ডের ৩য় কটিদেশীয় কশেরুকার (L3 লেভেল) সিটি স্ক্যান বিশ্লেষণ করে মুহূর্তেই বের করে ফেলা যায় রোগীর শরীরে ঠিক কত কেজি খাঁটি কঙ্কালপেশি অবশিষ্ট রয়েছে [১, ২]। "
            ),
            l(
              "By quantifying tissue surface areas using tissue-specific Hounsfield Unit (HU) radiodensity thresholds (typically -29 to +150 HU for skeletal muscle, and -190 to -30 HU for adipose tissue), clinicians calculate the Skeletal Muscle Index (SMI = muscle area in cm² / height in m²) [1, 2]. Standard consensus cutoffs establish severe oncological sarcopenia at an SMI <41 cm²/m² in women, and in men, <43 cm²/m² (if BMI <25 kg/m²) or <53 cm²/m² (if BMI >=25 kg/m²) [1, 2]. Identifying low SMI reveals hidden, severe sarcopenia in up to 40% to 60% of cancer patients who present with a completely normal or elevated body weight [1, 2].",
              "সিটি স্ক্যানে হাউন্সফিল্ড ইউনিট (HU) ঘনত্বের মানদণ্ডে মাংসপেশির এলাকা মেপে স্কেলিটাল মাসল ইনডেক্স (SMI) বের করা হয় [১, ২]। আন্তর্জাতিক ঐকমত্য অনুসারে নারীদের ক্ষেত্রে SMI ৪১-এর নিচে এবং পুরুষদের ক্ষেত্রে ৪৩ বা ৫৩-এর নিচে নেমে গেলে তাকে মারাত্মক সারকোপেনিয়া বা বিপজ্জনক পেশিক্ষয় হিসেবে চিহ্নিত করা হয় [১, ২]। গবেষণায় দেখা গেছে যে স্বাভাবিক ওজন বা এমনকি মোটাতাজা দেখতে ক্যান্সার রোগীদের প্রায় ৪০ থেকে ৬০ শতাংশের শরীরের ভেতরেই এই ভয়াবহ পেশিক্ষয় লুকিয়ে থাকে [১, ২]। "
            ),
            l(
              "This diagnostic capability has unveiled the critical clinical syndrome of Sarcopenic Obesity: the lethal concurrence of severe skeletal muscle depletion amidst excessive, often massive adipose tissue stores [1, 2]. Patients with sarcopenic obesity exhibit double the risk of treatment toxicity and mortality compared to non-sarcopenic peers [1, 2]. Chemotherapeutic drugs are routinely dosed based on Body Surface Area (BSA), which assumes a fixed ratio of lean to fat mass [2]. In a patient with sarcopenic obesity, dosing calculated from elevated total weight or BSA overdoses the contracted lean volume of distribution, causing circulating concentrations of active antineoplastic metabolites to reach dangerously toxic levels, precipitating life-threatening hematological and gastrointestinal toxicities [2].",
              "এই প্রযুক্তির মাধ্যমেই আবিষ্কৃত হয়েছে সারকোপেনিক স্থূলতা (Sarcopenic Obesity) নামক এক নীরব ঘাতক রোগ: যেখানে রোগীর শরীরে প্রচুর চর্বি থাকে কিন্তু কঙ্কালের ভেতরের আসল মাংসপেশি মারাত্মকভাবে গলে শেষ হয়ে যায় [১, ২]। এই রোগীরা সাধারণ রোগীদের চেয়ে দ্বিগুণ মৃত্যুঝুঁকিতে থাকেন [১, ২]। ক্যান্সারের কেমোথেরাপির ওষুধের মাত্রা রোগীর চামড়ার আয়তন (BSA) বা মোট ওজনের ওপর হিসাব করে দেওয়া হয়, যা সুস্থ মানুষের পেশি ও চর্বির নির্দিষ্ট অনুপাত ধরে নেয় [২]। কিন্তু সারকোপেনিক স্থূলতার রোগীর মাংসপেশি কম থাকায় ওষুধের ঘনত্ব রক্তে বিষাক্ত মাত্রায় পৌঁছে যায় এবং মারাত্মক বমি, ডায়রিয়া ও রক্তকণিকা শূন্য হয়ে রোগী মৃত্যুর কোলে ঢলে পড়েন [২]। "
            ),
            l(
              "Furthermore, L3 CT imaging quantifies Myosteatosis—the pathological accumulation of inter- and intra-myocellular adipose tissue within skeletal muscle fibers [1, 2]. Myosteatosis is objectively measured by reduced mean skeletal muscle radiodensity (SMD <41 HU in non-obese, or <33 HU in obese individuals) [1, 2]. Fat infiltration into skeletal muscle disorganizes the contractile apparatus, accelerates mitochondrial dysfunction, fuels local intramyocellular lipotoxicity, and intensifies systemic insulin resistance [1, 2]. Across thousands of clinical oncology cohorts, myosteatosis has been validated as a potent, independent predictor of surgical mortality, early chemotherapy cessation, and significantly reduced progression-free and overall survival [1, 2].",
              "এছাড়াও সিটি স্ক্যানে মায়োস্টিয়াটোসিস (Myosteatosis) নামক আরেকটি ভয়াবহ রোগ ধরা পড়ে—যা হলো মাংসপেশির ভেতরের ফাইবারগুলোর ফাঁকে ফাঁকে বিষাক্ত চর্বির অনুপ্রবেশ [১, ২]। সিটি স্ক্যানে পেশির ঘনত্ব কমে যাওয়া (SMD <৪১ বা <৩৩ HU) দেখেই এই চর্বি ধরা পড়ে [১, ২]। পেশির ভেতর চর্বি ঢুকলে পেশির শক্তি পুরোপুরি নষ্ট হয়ে যায়, কোষের মাইটোকন্ড্রিয়া বিষাক্ত হয়ে পড়ে এবং ইনসুলিন কাজ করা বন্ধ করে দেয় [১, ২]। বিশ্বজুড়ে হাজার হাজার ক্যান্সার রোগীর গবেষণায় প্রমাণিত যে মায়োস্টিয়াটোসিসে আক্রান্ত রোগীরা অস্ত্রোপচার সহ্য করতে পারেন না এবং দ্রুত মৃত্যুর মুখে পতিত হন [১, ২]। "
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            "3. Immunonutrition Pharmacokinetics: Marine EPA & Resolvin Signaling",
            "৩. ইমিউনোনিউট্রিশন ফার্মাকোকিনেটিক্স: সামুদ্রিক ইপিএ ও রিজলভিন সংকেত"
          ),
          paragraphs: [
            l(
              "The field of clinical oncology nutrition has evolved beyond simple caloric and nitrogen repletion into the domain of target-specific Immunonutrition—the pharmacological administration of specific bioactive dietary substrates designed to modulate the immune response, attenuate hyperinflammation, and preserve host protein kinetics [2, 5]. Among evidence-based immunonutrients, long-chain omega-3 polyunsaturated fatty acids (n-3 PUFAs), specifically Eicosapentaenoic Acid (EPA, 20:5n-3) and Docosahexaenoic Acid (DHA, 22:6n-3), possess the most rigorous clinical trial evidence in cancer cachexia [2, 5].",
              "ক্লিনিক্যাল অনকোলজি পুষ্টির আধুনিক ধারা এখন কেবল ভাত-ডাল বা সাধারণ ক্যালোরির হিসাবে সীমাবদ্ধ নেই; বরং এটি এখন লক্ষ্যভিত্তিক ইমিউনোনিউট্রিশনের (Immunonutrition) বৈজ্ঞানিক প্রয়োগে রূপান্তরিত হয়েছে [২, ৫]। এর উদ্দেশ্য হলো বিশেষ কিছু ঔষধি পুষ্টি উপাদান দিয়ে শরীরের অতিরিক্ত প্রদাহ বন্ধ করা এবং পেশি ক্ষয় ঠেকানো [২, ৫]। এই সমস্ত উপাদানের মধ্যে সামুদ্রিক মাছের তেল থেকে প্রাপ্ত দীর্ঘ-শৃঙ্খল ওমেগা-৩ ফ্যাটি অ্যাসিড—বিশেষ করে ইকোসাপেন্টায়েনয়িক অ্যাসিড (EPA) এবং ডোকোসাহেক্সায়েনয়িক অ্যাসিড (DHA)—ক্যান্সার ক্যাক্সিয়ার চিকিৎসায় বিশ্বজুড়ে সবচেয়ে নিখুঁতভাবে প্রমাণিত [২, ৫]। "
            ),
            l(
              "At the cellular pharmacokinetic level, dietary EPA and DHA are absorbed across the enterocyte brush border, packaged into lymphatic chylomicrons, and delivered to peripheral host tissues [2, 5]. Over 2 to 4 weeks of consistent oral supplementation, EPA is progressively incorporated into the phospholipid bilayers of immune cell membranes (macrophages, monocytes, neutrophils) and skeletal muscle sarcolemma, displacing pro-inflammatory omega-6 arachidonic acid (AA, 20:4n-6) from the sn-2 position of membrane phospholipids [2, 5]. This membrane remodeling fundamentally shifts downstream eicosanoid and lipid mediator enzymatic pathways [5].",
              "কোষীয় ফার্মাকোকিনেটিক্স অনুসারে, খাবার বা সাপ্লিমেন্ট থেকে গৃহীত ইপিএ (EPA) অন্ত্র থেকে শোষিত হয়ে রক্তসঞ্চালনের মাধ্যমে পেশিকোষ এবং রোগপ্রতিরোধ কোষের পর্দায় গিয়ে জমা হয় [২, ৫]। ২ থেকে ৪ সপ্তাহ নিয়মিত সেবনের ফলে এটি কোষপর্দার ক্ষতিকর ওমেগা-৬ অ্যারাকিডোনিক অ্যাসিডকে হটিয়ে দিয়ে নিজে সেই জায়গা দখল করে নেয় [২, ৫]। কোষপর্দার এই গুণগত পরিবর্তনের ফলে কোষ থেকে প্রদাহ সৃষ্টিকারী বিষাক্ত রাসায়নিক তৈরি হওয়ার পথটি গোড়া থেকেই বন্ধ হয়ে যায় [৫]। "
            ),
            l(
              "When immune cells or myocytes encounter pro-inflammatory stimuli, membrane-bound phospholipase A2 (cPLA2) hydrolyzes phospholipids to release free fatty acids [5]. When the membrane is enriched in EPA, cyclooxygenase-2 (COX-2) and 5-lipoxygenase (5-LOX) convert EPA into 3-series prostaglandins (PGE3, PGI3) and 5-series leukotrienes (LTB5), which possess dramatically weaker inflammatory potency (10- to 50-fold lower) compared to arachidonic acid-derived PGE2 and LTB4 [2, 5]. By competitive enzyme inhibition, EPA curtails PGE2 synthesis, which directly suppresses the induction of IL-6 and TNF-alpha transcription [5]. Furthermore, EPA is enzymatically converted via 15-LOX and cytochrome P450 pathways into Specialized Pro-Resolving Mediators (SPMs), specifically E-series Resolvins (RvE1, RvE2) and Protectins, which actively orchestrate the resolution of inflammation, promote macrophage efferocytosis of apoptotic debris, and halt continuous leukocyte tissue recruitment [2, 5].",
              "যখন কোনো প্রদাহের উদ্দীপনা আসে, তখন কোষপর্দায় ওমেগা-৬ না থাকায় প্রদাহজনক PGE2 হরমোন তৈরি হতে পারে না; তার বদলে তৈরি হয় অতি দুর্বল প্রকৃতির PGE3 এবং ৫-সিরিজের সংকেত, যার প্রদাহ সৃষ্টির ক্ষমতা প্রায় ৫০ গুণ কম [২, ৫]। ফলে রক্তে ইন্টারলিউকিন-৬ ও টিএনএফ-আলফার উৎপাদন নাটকীয়ভাবে কমে যায় [৫]। এর চেয়েও বড় বিষয় হলো, ইপিএ থেকে এনজাইমের মাধ্যমে তৈরি হয় বিশেষ সুরক্ষাকারী অণু—রিজলভিন (RvE1, RvE2) এবং প্রোটেকটিন—যা শরীরের ভেতরকার প্রদাহের দাবানলকে সক্রিয়ভাবে নিভিয়ে ফেলে এবং ক্ষতিগ্রস্ত টিস্যুর নিরাময় প্রক্রিয়াকে ত্বরান্বিত করে [২, ৫]। "
            ),
            l(
              "Critically for cancer cachexia, EPA exerts direct anti-proteolytic and anti-anorectic actions on skeletal muscle and the central nervous system [2, 5]. In myocytes, EPA inhibits the activation of I-kappa-B kinase (IKK), preventing the nuclear translocation of NF-kB and blocking the downstream transcription of the muscle-destroying E3 ubiquitin ligases MuRF1 and MAFbx [5]. In prospective randomized clinical trials, administering a minimum therapeutic dose of 1.5 to 2.0 grams of EPA daily (equivalent to ~2.2 g total n-3 PUFAs) delivered via high-protein, calorie-dense oral nutritional supplements stabilizes or increases lean muscle mass, preserves performance status, improves chemotherapy tolerance, and significantly enhances patient appetite and quality of life in advanced cancer cachexia [2, 6].",
              "ক্যান্সার ক্যাক্সিয়ার ক্ষেত্রে ইপিএ সরাসরি পেশিকোষের ভেতরে ঢুকে প্রোটিন ধ্বংসকারী E3 লাইগেজ এনজাইমের (MuRF1 ও MAFbx) তৈরি পুরোপুরি বন্ধ করে দেয় [৫]। একই সাথে এটি মস্তিষ্কে গিয়ে ক্ষুধামন্দা দূর করে [২, ৫]। আধুনিক ক্লিনিক্যাল ট্রায়ালগুলোতে দ্ব্যর্থহীনভাবে প্রমাণিত হয়েছে যে প্রতিদিন কমপক্ষে ১.৫ থেকে ২.০ গ্রাম বিশুদ্ধ ইপিএ সমৃদ্ধ উচ্চ-প্রোটিন পুষ্টি পানীয় গ্রহণ করলে ক্যান্সার রোগীদের পেশি ভাঙন বন্ধ হয়, শরীর নতুন শক্তি ফিরে পায়, কেমোথেরাপির জটিলতা কমে যায় এবং রোগীর ক্ষুধা ও বেঁচে থাকার আত্মবিশ্বাস বহুগুণ বেড়ে যায় [২, ৬]। "
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            "4. Critical Appraisal of Oncology Dietary Paradigms & Fad Regimens",
            "৪. প্রচলিত ক্যান্সার পথ্য ও অবৈজ্ঞানিক খাদ্যরীতির সমালোচনামূলক পর্যালোচনা"
          ),
          paragraphs: [
            l(
              "In the digital age, cancer patients and their families are bombarded with pervasive, pseudoscientific dietary advice promising miraculous cures, tumor starvation, or detoxifying purges [2, 6]. Among the most widespread paradigms is the Very Low-Carbohydrate Ketogenic Diet (KD), which proposes to \"starve\" cancer cells by depriving them of glucose while generating hepatic ketone bodies (acetoacetate, beta-hydroxybutyrate) that purportedly normal cells can burn but cancer cells cannot [2, 3]. While the Warburg effect demonstrates heavy tumor reliance on glucose, the simplistic premise that a ketogenic diet halts cancer in humans is thoroughly debunked by rigorous clinical biochemistry [2, 3].",
              "ডিজিটাল যুগে ক্যান্সার রোগী এবং তাদের পরিবার প্রতিনিয়ত ইন্টারনেটে হাজারো অবৈজ্ঞানিক, বিপজ্জনক ও ভুয়া পথ্যের প্রচারণায় বিভ্রান্ত হন—যেখানে দাবি করা হয় বিশেষ ডায়েট দিয়ে ক্যান্সার নাকি \"অনাহারে মেরে ফেলা\" সম্ভব [২, ৬]। এর মধ্যে সবচেয়ে জনপ্রিয় ভ্রান্ত ধারণা হলো কিটোজেনিক ডায়েট (Ketogenic Diet), যেখানে কার্বোহাইড্রেট সম্পূর্ণ বন্ধ করে চর্বি খাওয়ার পরামর্শ দেওয়া হয় এই যুক্তিতে যে চিনি বন্ধ করলে ক্যান্সার কোষ না খেয়ে মরে যাবে [২, ৩]। কিন্তু জীববিজ্ঞানের সত্য হলো: ক্যান্সার কোষ এত সহজ সরল নয় যে চিনি না পেলে বসে থাকবে [২, ৩]। "
            ),
            l(
              "Malignant neoplasms exhibit extraordinary metabolic plasticity: when deprived of glucose, tumors rapidly upregulate alternative substrate scavenging pathways [3]. Tumors transactivate glutaminase (GLS1) to consume glutamine via reductive carboxylation for TCA anaplerosis, upregulate fatty acid oxidation (FAO), consume extracellular acetate via acetyl-CoA synthetase (ACSS2), and utilize macropinocytosis to engulf and digest whole extracellular proteins [3]. In clinical trials, strict ketogenic diets fail to improve tumor control in the vast majority of human cancers; more critically, because ketogenic diets are unpalatable, restrictive, and low in fiber, they frequently accelerate catastrophic weight loss, muscle wasting, and dyslipidemia, pushing pre-cachectic patients prematurely into refractory, lethal cachexia [2, 6].",
              "ক্যান্সার কোষের বিকল্প পথ তৈরির অবিশ্বাস্য ক্ষমতা রয়েছে: রক্তে গ্লুকোজ কমে গেলে তারা তৎক্ষণাৎ গ্লুটামিন অ্যামিনো অ্যাসিড গিলে খেতে শুরু করে, চর্বি জারিত করে শক্তি নেয় এবং চারপাশের প্রোটিন সরাসরি গিলে হজম করে নিজের পেট ভরায় [৩]। ক্লিনিক্যাল গবেষণায় দেখা গেছে যে কঠোর কিটো ডায়েট ক্যান্সার সারায় না; বরং উল্টো রোগীকে এত বেশি অপুষ্টি ও ওজন হ্রাসের মুখে ঠেলে দেয় যে রোগী দ্রুত কঙ্কালসার ক্যাক্সিয়ায় আক্রান্ত হয়ে মৃত্যুর দিকে এগিয়ে যান [২, ৬]। "
            ),
            l(
              "Equally perilous are prolonged fasting protocols (e.g., multi-day water-only fasts around chemotherapy cycles) and restrictive \"alkaline\" or \"raw vegan\" diets [2, 6]. The alkaline diet claims that eating alkaline foods alters systemic pH to kill acid-loving cancer cells; however, human systemic blood pH is strictly buffered within life-sustaining limits (7.35–7.45) by renal and pulmonary homeostatic mechanisms, and dietary choices alter only urinary pH, never tumor microenvironmental acidity [2, 3]. Similarly, extended water fasting during antineoplastic therapy strips cancer patients of the essential amino acids required for hepatocyte acute-phase defenses and bone marrow hematopoietic regeneration, dramatically elevating the incidence of severe neutropenia, opportunistic infections, and chemotherapy-induced organ failure [2, 6].",
              "একই রকম মারাত্মক ক্ষতিকর হলো দীর্ঘমেয়াদী উপবাস (টানা না খেয়ে থাকা) এবং তথাকথিত \"অ্যালকালাইন ডায়েট\" বা কাঁচা শাকসবজি খাওয়ার নিয়ম [২, ৬]। অ্যালকালাইন ডায়েটে দাবি করা হয় ক্ষারীয় খাবার খেলে রক্তের পিএইচ বদলে ক্যান্সার মরে যাবে; কিন্তু বাস্তবতা হলো মানবদেহের ফুসফুস ও কিডনি রক্তের পিএইচ কঠোরভাবে ৭.৩৫ থেকে ৭.৪৫-এর মধ্যে ধরে রাখে এবং খাবার দিয়ে রক্তের পিএইচ এক বিন্দুও বদলানো যায় না [২, ৩]। আর কেমোথেরাপির সময় না খেয়ে থাকলে শরীরের রোগপ্রতিরোধ কোষ ও অস্থিমজ্জা ধ্বংস হয়ে যায়, যার ফলে রক্তে শ্বেতকণিকা শূন্য হয়ে মারাত্মক ইনফেকশনে রোগীর মৃত্যু ঘটতে পারে [২, ৬]। "
            ),
            l(
              "A particularly dangerous, under-recognized clinical risk is the widespread self-administration of high-dose antioxidant supplements (e.g., megadoses of vitamin C [5,000–10,000 mg], vitamin E, and alpha-lipoic acid) [2, 6]. Ionizing radiation therapy and cytotoxic chemotherapeutic agents (cisplatin, doxorubicin, cyclophosphamide) eradicate tumors precisely by generating lethal concentrations of reactive oxygen species (ROS) that induce double-strand DNA breaks [2]. High-dose exogenous antioxidants scavenge these treatment-induced free radicals within the tumor, protecting malignant cells from cytotoxicity, increasing treatment failure rates, and accelerating tumor recurrence [2]. Oncology dietitians must firmly guide patients toward evidence-based, balanced, whole-food nutrition at standard Dietary Reference Intake levels while actively eradicating restrictive dietary fads [2, 6].",
              "আরেকটি নীরব কিন্তু অত্যন্ত ভয়াবহ বিপদ হলো রোগীদের নিজ বুদ্ধিতে উচ্চমাত্রার অ্যান্টিঅক্সিডেন্ট ক্যাপসুল (যেমন হাজার হাজার মিলিগ্রাম ভিটামিন সি বা ই) খাওয়া [২, ৬]। রেডিওথেরাপি এবং অধিকাংশ কেমোথেরাপি কাজই করে ক্যান্সার কোষের ভেতর বিষাক্ত ফ্রি-র‍্যাডিক্যাল তৈরি করে কোষের ডিএনএ ভেঙে মেরে ফেলার মাধ্যমে [২]। এখন রোগী যদি এই থেরাপির সময় বাইরে থেকে অতিরিক্ত অ্যান্টিঅক্সিডেন্ট বড়ি খান, তবে সেই বড়ি ক্যান্সার কোষের ফ্রি-র‍্যাডিক্যাল ধ্বংস করে ক্যান্সার কোষকে বাঁচিয়ে দেয় এবং চিকিৎসার কার্যকারিতা নষ্ট করে দেয় [২]। তাই অনকোলজি পুষ্টিবিদদের দায়িত্ব হলো এই সমস্ত ক্ষতিকর অন্ধবিশ্বাস দূর করে রোগীকে বিজ্ঞানসম্মত সুষম খাবারের সঠিক পথে রাখা [২, ৬]। "
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            "5. Complex Clinical Oncology Dietetics & Refractory Cachexia Management",
            "৫. জটিল ক্লিনিক্যাল অনকোলজি পুষ্টি ও রিফ্র্যাক্টরি ক্যাক্সিয়ার ব্যবস্থাপনা"
          ),
          paragraphs: [
            l(
              "Advanced clinical oncology dietetics demands a nuanced, stage-directed approach that coordinates multimodal therapeutics across the three recognized clinical stages of the cachexia continuum: Pre-cachexia, Cachexia, and Refractory Cachexia [1, 2]. Pre-cachexia is characterized by early metabolic changes (mild anorexia, impaired glucose tolerance) and minor involuntary weight loss (<5% over 6 months) [1]. Proactive intervention during pre-cachexia represents the premier window of clinical opportunity: personalized dietary fortification, early oral nutritional supplements, and treatment of nutrition impact symptoms can prevent transition into full-blown cachexia [1, 2].",
              "উচ্চতর ক্লিনিক্যাল অনকোলজি ডায়েটেটিক্সে রোগীকে তার রোগের সুনির্দিষ্ট তিনটি ধাপে ভাগ করে সমন্বিত চিকিৎসা পরিচালনা করা হয়: প্রি-ক্যাক্সিয়া (প্রাথমিক ধাপ), পূর্ণ ক্যাক্সিয়া এবং রিফ্র্যাক্টরি ক্যাক্সিয়া (অন্তিম ধাপ) [১, ২]। প্রি-ক্যাক্সিয়ার ধাপে হালকা ক্ষুধামন্দা ও সামান্য ওজন হ্রাস (৬ মাসে <৫%) দেখা দেয় [১]। এই প্রাথমিক ধাপটিই হলো চিকিৎসার সবচেয়ে সুবর্ণ সুযোগ: এই সময় উপযুক্ত উচ্চ-প্রোটিন পুষ্টি ও উপসর্গ নিয়ন্ত্রণের ব্যবস্থা নিলে রোগীকে পূর্ণ ক্যাক্সিয়ার ভয়াবহ ধ্বংস থেকে রক্ষা করা সম্ভব [১, ২]। "
            ),
            l(
              "Once full-blown Cancer Cachexia is established (weight loss >5%, or >2% with BMI <20 kg/m² or sarcopenia), mono-therapeutic nutritional support is insufficient; management mandates an aggressive, multimodal combination regimen [1, 2, 5]. In parallel with energy-dense, high-protein feeding (1.5–2.0 g/kg/d) and omega-3 EPA immunonutrition (2.0 g/d), clinicians incorporate targeted pharmacological agents to stimulate appetite and suppress cytokine hypercatabolism [2, 5]. Novel ghrelin receptor agonists (such as anamorelin) mimic the orexigenic and growth hormone-releasing actions of native octanoylated ghrelin, safely increasing appetite, caloric intake, and lean body mass without accelerating tumor proliferation [2].",
              "একবার পূর্ণ ক্যাক্সিয়া রোগ চেপে বসলে (ওজন হ্রাস >৫% অথবা বিএমআই <২০) শুধু সাধারণ খাবার খাইয়ে আর কুলায় না; তখন বহুমুখী সমন্বিত চিকিৎসা প্রয়োগ করতে হয় [১, ২, ৫]। উচ্চ-প্রোটিন পুষ্টি (১.৫-২.০ g/kg) এবং ওমেগা-৩ ইপিএ (দিনে ২.০ গ্রাম) দেওয়ার পাশাপাশি ক্ষুধা বাড়াতে এবং প্রদাহ থামাতে বিশেষ ওষুধ যুক্ত করা হয় [২, ৫]। আধুনিক ঘ্রেলিন রিসেপ্টর উদ্দীপক ওষুধ (যেমন অ্যানামোরিলিন) মস্তিষ্কে স্বাভাবিক ক্ষুধার সংকেত ফিরিয়ে আনে এবং টিউমারের বৃদ্ধি না ঘটিয়েই রোগীর ক্ষুধা ও শারীরিক মাংসপেশি ধরে রাখতে সাহায্য করে [২]। "
            ),
            l(
              "Physical exercise must be integrated as an essential metabolic adjuvant to nutrition in all ambulatory cachectic patients [2, 6]. Although patients feel fatigued, progressive resistance training stimulates mechanosensitive signaling in skeletal muscle, activating focal adhesion kinase (FAK) and the mechanistic target of rapamycin complex 1 (mTORC1) to drive myofibrillar protein synthesis [2]. Simultaneously, aerobic exercise stimulates PGC-1alpha transcription, improving mitochondrial quality control, enhancing insulin sensitivity, and dampening systemic cytokine secretion [2]. Exercise and nutrition act in mandatory synergy: without amino acid availability, resistance training induces muscle damage; without resistance exercise, exogenous amino acids cannot overcome muscle anabolic resistance [2].",
              "রোগী দুর্বল অনুভব করলেও হাঁটাচলা করতে সক্ষম প্রতিটি রোগীর ক্ষেত্রে হালকা শারীরিক ব্যায়াম পুষ্টি থেরাপির একটি অবিচ্ছেদ্য অংশ [২, ৬]। হালকা ওজন তোলা বা রেজিস্ট্যান্স ব্যায়াম পেশিকোষের mTORC1 সুইচ অন করে দেয় যা খাবার থেকে নতুন পেশি তৈরিতে শরীরকে বাধ্য করে [২]। একই সাথে এটি মাইটোকন্ড্রিয়ার কার্যক্ষমতা বাড়ায় এবং রক্তে প্রদাহের সাইটোকাইন কমিয়ে দেয় [২]। পুষ্টি এবং ব্যায়াম এখানে পরস্পরের পরিপূরক: প্রোটিন ছাড়া ব্যায়াম করলে পেশি ক্ষয় হয়, আর ব্যায়াম ছাড়া শুধু প্রোটিন খেলে তা অলস পেশিকোষ গ্রহণ করতে পারে না [২]। "
            ),
            l(
              "In contrast, Refractory Cachexia marks the terminal stage of disease, characterized by advanced, rapidly progressing, therapy-resistant cancer accompanied by severe catabolism, ECOG performance status 3 or 4, and a life expectancy of less than three months [1, 2]. At this juncture, aggressive artificial nutritional support (enteral tube feeding or total parenteral nutrition) is clinically futile and medically unethical [1, 2]. Artificial hydration and hyperalimentation in refractory cachexia cannot rebuild muscle; instead, they trigger fluid overload, intractable peripheral edema, distressing pulmonary secretions, and choking [2]. Clinical oncology nutrition ethically transitions to comfort-focused palliative care: offering pleasant tastes of favorite foods purely for pleasure, meticulous oral hygiene, symptom relief from nausea, and compassionate family counseling to relieve the emotional distress surrounding declining food intake [1, 2, 6].",
              "সর্বশেষ ধাপটি হলো রিফ্র্যাক্টরি ক্যাক্সিয়া (Refractory Cachexia)—যা ক্যান্সার চিকিৎসার চূড়ান্ত ব্যর্থতা ও জীবনের অন্তিম দশাকে চিহ্নিত করে, যেখানে রোগীর আয়ু মাত্র কয়েক সপ্তাহ বা তিন মাসের কম থাকে [১, ২]। এই চরম অন্তিম মুহূর্তে নাকে নল লাগানো বা স্যালাইন দিয়ে কৃত্রিমভাবে খাদ্য প্রবেশ করানো চিকিৎসাবিজ্ঞানে অর্থহীন এবং রোগীর প্রতি নিষ্ঠুরতা হিসেবে গণ্য হয় [১, ২]। এই সময় অতিরিক্ত স্যালাইন দিলে ফুসফুসে পানি জমে শ্বাসকষ্ট ও দমবন্ধ হয়ে রোগীর মৃত্যুযন্ত্রণা বহুগুণ বেড়ে যায় [২]। তাই এই অন্তিম ধাপে পুষ্টির লক্ষ্য বদলে প্যালিয়েটিভ কেয়ারে রূপ নেয়: রোগীকে জোর না করে তার পছন্দের সামান্য খাবারের স্বাদ দেওয়া, মুখের ভেতরের শুষ্কতা দূর করা এবং রোগীর পরিবারকে মানসিক সমর্থন দিয়ে শান্তিময় শেষ বিদায় নিশ্চিত করা [১, ২, ৬]। "
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            "6. High-Yield Advanced Oncology Nutrition Research Frontiers",
            "৬. উচ্চতর অনকোলজি পুষ্টি ও গবেষণার অগ্রবর্তী সারসংক্ষেপ"
          ),
          paragraphs: [
            l(
              "The tumor microenvironment operates as an active ecological niche where hypoxia stabilizes HIF-1alpha, upregulating GLUT1, LDHA, and PDK1 to lock malignant cells into aerobic glycolysis while inactivating mitochondrial pyruvate oxidation [3]. Massive lactic acid extrusion via MCT4 acidifies the interstitial microenvironment (pH 6.2–6.8), directly paralyzing anti-tumor CD8+ cytotoxic T lymphocytes and NK cells while accelerating matrix degradation and metastatic dissemination [3, 5].",
              "টিউমার মাইক্রোএনভায়রনমেন্টে অক্সিজেনের অভাবে HIF-1alpha স্থায়ী হয়ে গ্লাইকোলাইসিসকে চরম গতি দেয় এবং মাইটোকন্ড্রিয়ায় গ্লুকোজ জারণ বন্ধ করে দেয় [৩]। MCT4 পাম্প দিয়ে বাইরে নির্গত অতিরিক্ত ল্যাকটিক অ্যাসিড পরিবেশকে অ্যাসিডিক করে তোলে, যা টিউমার-ধ্বংসকারী টি-কোষকে অকেজো করে ফেলে এবং ক্যান্সারের ছড়িয়ে পড়ার পথ সুগম করে [৩, ৫]। "
            ),
            l(
              "Diagnostic L3 Computed Tomography (CT) cross-sectional imaging provides the gold-standard modality for quantifying body composition in modern oncology [1, 2]. Identifying low Skeletal Muscle Index (SMI) and Myosteatosis (intramuscular adipose infiltration evidenced by low skeletal muscle radiodensity) unveils hidden Sarcopenic Obesity in patients with normal or elevated BMI, predicting severe chemotherapy toxicity, dose-limiting complications, and drastically shortened survival [1, 2].",
              "৩য় লাম্বার কশেরুকার (L3) সিটি স্ক্যান পরিমাপ হলো আধুনিক অনকোলজিতে রোগীর শরীরের পেশি ও চর্বির বিন্যাস জানার সবচেয়ে নির্ভুল পদ্ধতি [১, ২]। সাধারণ বা মোটা রোগীর ওজনের নিচে লুকিয়ে থাকা সারকোপেনিক স্থূলতা এবং পেশির ভেতরের বিষাক্ত চর্বি (মায়োস্টিয়াটোসিস) শনাক্ত করে কেমোথেরাপির প্রাণঘাতী বিষাক্ততা ও মৃত্যুর ঝুঁকি আগে থেকেই সঠিকভাবে পরিমাপ করা সম্ভব হয় [১, ২]। "
            ),
            l(
              "Immunonutrition with marine omega-3 fatty acids (EPA, 1.5–2.0 g/day) competitively displaces arachidonic acid in membrane phospholipids, dampening pro-inflammatory 2-series prostaglandin and 4-series leukotriene synthesis while generating Specialized Pro-Resolving Mediators (Resolvins) [2, 5]. In skeletal muscle, EPA inhibits IKK/NF-kB activation, suppressing transcription of the E3 ubiquitin ligases MuRF1 and MAFbx to stabilize lean body mass and enhance chemotherapy tolerance [2, 5].",
              "সামুদ্রিক ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA দিনে ১.৫-২.০ গ্রাম) কোষপর্দায় ক্ষতিকর চর্বিকে হটিয়ে দিয়ে রিজলভিন তৈরি করে যা প্রদাহ নিভিয়ে ফেলে [২, ৫]। পেশিকোষে এটি MuRF1 ও MAFbx প্রোটিন-কাটা লাইগেজ এনজাইমের জিন বন্ধ করে দিয়ে মাংসপেশিকে ভেঙে যাওয়া থেকে রক্ষা করে এবং রোগীর কেমোথেরাপি সহ্য করার ক্ষমতা বাড়ায় [২, ৫]। "
            ),
            l(
              "Clinical oncology nutrition demands aggressive rejection of pseudoscientific dietary fads [2, 6]. Ketogenic diets do not starve tumors due to cancer metabolic plasticity and instead accelerate fatal cachexia; prolonged water-only fasting induces dangerous neutropenia; and high-dose antioxidant megadosing scavenges treatment-generated reactive oxygen species, directly blunting the cytotoxic efficacy of radiotherapy and alkylating chemotherapy [2, 6]. Management of cancer cachexia requires multimodal integration across the clinical continuum—from proactive pre-cachexia screening and resistance exercise to ethical, comfort-directed palliative care in refractory cachexia [1, 2, 6].",
              "ক্যান্সার চিকিৎসায় বিজ্ঞানবিরোধী অবৈজ্ঞানিক খাদ্যরীতির কোনো স্থান নেই [২, ৬]। তথাকথিত কিটো ডায়েট ক্যান্সার না মেরে উল্টো রোগীকে মৃত্যুর দিকে ঠেলে দেয়, উপবাস রোগপ্রতিরোধ রক্তকণিকা ধ্বংস করে এবং উচ্চমাত্রার অ্যান্টিঅক্সিডেন্ট ক্যাপসুল রেডিওথেরাপির ফ্রি-র‍্যাডিক্যাল নষ্ট করে চিকিৎসার কার্যকারিতা নষ্ট করে দেয় [২, ৬]। ক্যানসার ক্যাক্সিয়ার সঠিক ব্যবস্থাপনা হলো একটি ধারাবাহিক বিজ্ঞান—প্রাথমিক স্ক্রিনিং, বিশেষ ব্যায়াম, সঠিক প্রোটিন ও ওমেগা-৩ এর সঠিক প্রয়োগ এবং জীবনের শেষ প্রান্তে রোগীর কষ্টহীন শান্তিময় সেবা নিশ্চিত করা [১, ২, ৬]। "
            ),
          ],
        },
      ],
    },
  },
}
