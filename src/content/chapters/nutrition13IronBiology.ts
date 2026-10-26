import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const ironRefs = [
  {
    id: 'andrews-nejm-iron-homeostasis',
    authors: 'Nancy C. Andrews',
    title: 'Disorders of Iron Metabolism',
    organization: 'The New England Journal of Medicine',
    year: 1999,
    url: 'https://doi.org/10.1056/NEJM199912233412607',
    doi: '10.1056/NEJM199912233412607',
  },
  {
    id: 'ganz-blood-hepcidin-iron',
    authors: 'Tomas Ganz',
    title: 'Hepcidin and iron regulation, 10 years later',
    organization: 'Blood',
    year: 2011,
    url: 'https://doi.org/10.1182/blood-2011-01-258467',
    doi: '10.1182/blood-2011-01-258467',
  },
  {
    id: 'camaschella-nejm-ida',
    authors: 'Clara Camaschella',
    title: 'Iron-Deficiency Anemia',
    organization: 'The New England Journal of Medicine',
    year: 2015,
    url: 'https://doi.org/10.1056/NEJMra1401038',
    doi: '10.1056/NEJMra1401038',
  },
  {
    id: 'nemeth-ann-rev-hepcidin',
    authors: 'Elizabeta Nemeth, Tomas Ganz',
    title: 'Hepcidin and Iron in Health and Disease',
    organization: 'Annual Review of Medicine',
    year: 2023,
    url: 'https://doi.org/10.1146/annurev-med-043021-032816',
    doi: '10.1146/annurev-med-043021-032816',
  },
  {
    id: 'hfe-nature-genetics-hemochromatosis',
    authors: 'John N. Feder et al.',
    title: 'A novel MHC class I-like gene is mutated in patients with hereditary haemochromatosis',
    organization: 'Nature Genetics',
    year: 1996,
    url: 'https://doi.org/10.1038/ng0896-399',
    doi: '10.1038/ng0896-399',
  },
  {
    id: 'hentze-cell-iron-irp',
    authors: 'Matthias W. Hentze, Martina U. Muckenthaler, Bruno Galy, Clara Camaschella',
    title: 'Two to tango: regulation of Mammalian iron metabolism',
    organization: 'Cell',
    year: 2010,
    url: 'https://doi.org/10.1016/j.cell.2010.06.028',
    doi: '10.1016/j.cell.2010.06.028',
  },
]

export const nutrition13IronBiologyLesson: LessonTopic = {
  id: 'topic.nutrition.iron-biology-hepcidin-anemia',
  slug: 'iron-biology-hepcidin-anemia',
  version: 2,
  updatedAt: '2026-10-15',
  title: l(
    '13 · Iron Biology: Dietary Bioavailability, Ferritin, Transferrin & Hepcidin',
    '১৩ · আয়রন বায়োলজি: খাদ্যে প্রাপ্যতা, ফেরিটিন, ট্রান্সফেরিন ও হেপসিডিন নিয়ন্ত্রণ'
  ),
  summary: l(
    'Comprehensive university textbook analysis of human iron metabolism: duodenal brush-border DCYTB reduction and proton-coupled DMT1 entry, 24-subunit ferritin nanocage sequestration, post-transcriptional IRP1/IRP2-IRE translational gating, basolateral Ferroportin-1 export coupled to hephaestin ferroxidation, diferric serum transferrin delivery, splenic reticuloendothelial macrophage erythrophagocytosis recycling, and the master hepatic hepcidin-ferroportin axis regulating systemic flux in health, iron deficiency anemia, and chronic inflammatory disease.',
    'মানবদেহে আয়রন বিপাকের পূর্ণাঙ্গ বিশ্ববিদ্যালয় পাঠ্যপুস্তকীয় শারীরবৃত্ত: ক্ষুদ্রান্ত্রের ব্রাশ-বর্ডারে DCYTB বিজারণ ও DMT1 চ্যানেল পরিবহন, ২৪-সাবইউনিট ফেরিটিন খাঁচায় লৌহ সঞ্চয়, IRP1/IRP2-IRE আণবিক সুইচ, হেফেস্টিন সহযোগে ফেরোপোর্টিন-১ নির্গমন, ট্রান্সফেরিন মাধ্যমে কোষে পরিবহন, প্লীহার ম্যাক্রোফেজ দ্বারা লোহিত রক্তকণিকা ভাঙন ও লৌহ পুনর্ব্যবহার এবং সুস্থতা, রক্তাল্পতা ও দীর্ঘস্থায়ী প্রদাহে যকৃতের হেপসিডিন-ফেরোপোর্টিন প্রধান নিয়ন্ত্রক অক্ষ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-15',
  objectives: [
    l(
      'Contrast the molecular bioavailability, luminal transport mechanisms, and dietary inhibitors/enhancers of heme iron versus non-heme ferric iron [1, 3].',
      'হিম লৌহ এবং নন-হিম ফেরিক লৌহের আণবিক প্রাপ্যতা, লুমিনাল শোষণ প্রক্রিয়া এবং খাদ্য উপাদানজনিত বাধা ও সহায়ক ফ্যাক্টরসমূহ বিশ্লেষণ করা [১, ৩]।'
    ),
    l(
      'Detail the enterocyte transport cascade: apical DCYTB ferric reductase, proton-coupled DMT1 symport, intracellular ferritin buffering, and basolateral ferroportin-1 export coupled with hephaestin ferroxidation [1, 2].',
      'এন্টারোসাইটের সম্পূর্ণ লৌহ পরিবহন পথ: শীর্ষস্থ DCYTB বিজারণ, প্রোটন-সংযুক্ত DMT1 পরিবহন, অন্তকোষীয় ফেরিটিন সঞ্চয় এবং হেফেস্টিন-সহযোগে ফেরোপোর্টিন-১ নির্গমন ব্যাখ্যা করা [১, ২]।'
    ),
    l(
      'Map the post-transcriptional Iron Regulatory Protein (IRP1/IRP2) and Iron-Responsive Element (IRE) stem-loop network controlling ferritin translation and transferrin receptor-1 mRNA stability [1, 6].',
      'লৌহের পর্যাপ্ততা ও ঘাটতিতে IRP1/IRP2 প্রোটিন এবং IRE উপাদানের মাধ্যমে ফেরিটিন ও ট্রান্সফেরিন রিসেপ্টরের বিপরীতমুখী অনুবাদীয় নিয়ন্ত্রণ পর্যালোচনা করা [১, ৬]।'
    ),
    l(
      'Analyze the systemic hepatic hepcidin-ferroportin axis, contrasting the laboratory profiles and therapeutic approaches of Iron Deficiency Anemia versus Anemia of Chronic Disease/Inflammation [2, 3, 4].',
      'যকৃতের হেপসিডিন-ফেরোপোর্টিন নিয়ন্ত্রণ অক্ষ বিশ্লেষণ করে আয়রন ঘাটতিজনিত রক্তাল্পতা এবং দীর্ঘস্থায়ী প্রদাহজনিত রক্তাল্পতার ল্যাবরেটরি পার্থক্য ও চিকিৎসা নির্দেশিকা নিরূপণ করা [২, ৩, ৪]।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.macronutrient-digestion', 'topic.nutrition.vitamin-c-trace-minerals-redox'],
  relatedTopicIds: ['topic.metabolism.heme-bilirubin-metabolism', 'topic.metabolism.glutathione-ros-redox-homeostasis'],
  references: ironRefs,
  evidenceBySection: {
    introduction: ['andrews-nejm-iron-homeostasis', 'camaschella-nejm-ida'],
    structure: ['andrews-nejm-iron-homeostasis', 'ganz-blood-hepcidin-iron'],
    mechanism: ['ganz-blood-hepcidin-iron', 'nemeth-ann-rev-hepcidin', 'hentze-cell-iron-irp'],
    integration: ['camaschella-nejm-ida', 'hfe-nature-genetics-hemochromatosis', 'ganz-blood-hepcidin-iron'],
    practice: ['camaschella-nejm-ida', 'nemeth-ann-rev-hepcidin'],
    takeaways: ['andrews-nejm-iron-homeostasis', 'ganz-blood-hepcidin-iron', 'hentze-cell-iron-irp'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Human Iron Economy & Closed Recycling Loop', '১. মানবদেহে আয়রন অর্থনীতি ও পুনর্ব্যবহারের চক্র'), sectionId: 'introduction' },
      { id: 'sec-luminal', label: l('2. Dietary Forms, DCYTB Reduction & DMT1 Transport', '২. খাদ্যের রূপভেদ, DCYTB বিজারণ ও DMT1 পরিবহন'), sectionId: 'structure' },
      { id: 'sec-cellular', label: l('3. Ferritin Nanocages, IRP/IRE Regulation & Ferroportin', '৩. ফেরিটিন ন্যানোকেজ, IRP/IRE নিয়ন্ত্রণ ও ফেরোপোর্টিন'), sectionId: 'mechanism' },
      { id: 'sec-hepcidin', label: l('4. The Master Hepcidin-Ferroportin Axis & Macrophage Recycling', '৪. প্রধান হেপসিডিন-ফেরোপোর্টিন অক্ষ ও ম্যাক্রোফেজ পুনর্ব্যবহার'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('5. Iron Deficiency vs Anemia of Chronic Disease & Hemochromatosis', '৫. আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহের রক্তাল্পতা ও হিমোক্রোমাটোসিস'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Duodenal Cytochrome b (DCYTB)', 'ডুওডেনাল সাইটোক্রোম বি (DCYTB)'),
        definition: l(
          'An apical membrane-bound ferric reductase expressed in duodenal enterocytes that utilizes intracellular ascorbate as an electron donor to reduce insoluble luminal Fe3+ into soluble Fe2+ for transport via DMT1.',
          'ডিওডেনামের ব্রাশ-বর্ডারে অবস্থিত এনজাইম যা ভিটামিন সি-এর সহায়তায় খাদ্যের অদ্রবণীয় Fe3+ কে দ্রবণীয় Fe2+ এ বিজারিত করে কোষে প্রবেশের উপযোগী করে তোলে।'
        ),
      },
      {
        term: l('Ferroportin-1 (FPN1 / SLC40A1)', 'ফেরোপোর্টিন-১ (FPN1 / SLC40A1)'),
        definition: l(
          'The sole identified mammalian transmembrane iron exporter, located on the basolateral surface of enterocytes, macrophages, and hepatocytes, which pumps Fe2+ into the extracellular space where it is oxidized by hephaestin or ceruloplasmin.',
          'স্তন্যপায়ী প্রাণিদেহে কোষ থেকে লৌহ নির্গমনের একমাত্র চ্যানেল, যা এন্টারোসাইট ও ম্যাক্রোফেজ থেকে আয়রন রক্তে পাঠায়।'
        ),
      },
      {
        term: l('Hepcidin (HAMP)', 'হেপসিডিন হরমোন (HAMP)'),
        definition: l(
          'A 25-amino-acid hepatic peptide hormone that acts as the master negative regulator of systemic iron availability by binding to ferroportin, inducing its ubiquitination, endocytosis, and lysosomal degradation.',
          'যকৃত থেকে ক্ষরিত ২৫-অ্যামিনো অ্যাসিড বিশিষ্ট পেপটাইড হরমোন যা ফেরোপোর্টিন চ্যানেল ধ্বংস করে অন্ত্রের শোষণ ও ম্যাক্রোফেজের লৌহ নির্গমন স্তব্ধ করে দেয়।'
        ),
      },
      {
        term: l('Transferrin Saturation (TSAT)', 'ট্রান্সফেরিন সম্পৃক্ততা (TSAT)'),
        definition: l(
          'The clinical ratio of serum iron to total iron-binding capacity (TIBC) expressed as a percentage; normal reference range is 20% to 50%, with values <16% diagnostic of iron-deficient erythropoiesis.',
          'রক্তে ভাসমান আয়রন এবং মোট আয়রন ধারণ ক্ষমতার শতকরা অনুপাত; ১৬%-এর নিচে নেমে যাওয়া আয়রন ঘাটতির সুস্পষ্ট লক্ষণ।'
        ),
      },
      {
        term: l('Ferritin Nanocage', 'ফেরিটিন ন্যানোকেজ'),
        definition: l(
          'A hollow, spherical 24-subunit protein nanocage composed of heavy (FTH1) and light (FTL) chains capable of sequestering up to 4,500 iron atoms as an insoluble, non-toxic ferrihydrite mineral core, preventing toxic Fenton radical reactions.',
          '২৪টি প্রোটিন সাবইউনিট দিয়ে গঠিত একটি ফাঁপা গোলাকার ন্যানো-খাঁচা যা প্রায় ৪,৫০০টি আয়রন পরমাণুকে নিরাপদে সঞ্চয় করে রাখে যাতে তারা মুক্ত হয়ে কোষ ধ্বংসকারী ফ্রি র্যাডিকেল তৈরি করতে না পারে।'
        ),
      },
      {
        term: l('Iron Regulatory Proteins (IRP1/IRP2 & IRE)', 'আয়রন রেগুলেটরি প্রোটিন (IRP1/IRP2 ও IRE)'),
        definition: l(
          'A cytosolic RNA-binding sensory system that binds Iron-Responsive Elements (IRE stem-loops) on target mRNAs; under iron starvation, IRPs bind the 5\'-UTR of ferritin to repress translation while binding the 3\'-UTR of transferrin receptor-1 to stabilize mRNA and boost iron uptake.',
          'কোষের ভেতরের একটি আণবিক সেন্সর ব্যবস্থা যা কোষে আয়রন কমে গেলে ফেরিটিন তৈরি বন্ধ রাখে এবং ট্রান্সফেরিন রিসেপ্টর সংখ্যা বাড়িয়ে কোষের ভেতরে রক্ত থেকে দ্রুত আয়রন টেনে নেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Calculating Total Iron Deficit via the Ganzoni Equation for IV Iron Therapy', 'আইভি আয়রন থেরাপির জন্য গানজোনি সমীকরণ দ্বারা মোট আয়রন ঘাটতি হিসাব'),
        steps: [
          l(
            'Step 1: Patient Presentation: A 34-year-old female with severe menorrhagia and refractory iron deficiency anemia presents with extreme lethargy and dyspnea on exertion. Baseline laboratory testing reveals: Body Weight = 60 kg, Hemoglobin = 7.0 g/dL (severe microcytic anemia, normal reference 12.0–15.5 g/dL), Serum Ferritin = 4 ng/mL, TSAT = 4.2%. Oral ferrous sulfate previously caused severe intolerable nausea and constipation.',
            'ধাপ ১: রোগীর বিবরণ: অতিরিক্ত ঋতুস্রাবে আক্রান্ত ৩৪ বছর বয়সী এক নারী চরম ক্লান্তি ও শ্বাসকষ্ট নিয়ে এসেছেন। রোগীর ওজন = ৬০ কেজি, হিমোগ্লোবিন = ৭.০ g/dL (মারাত্মক রক্তাল্পতা, স্বাভাবিক ১২.০-১৫.৫ g/dL), সিরাম ফেরিটিন = ৪ ng/mL, এবং ট্রান্সফেরিন স্যাচুরেশন = ৪.২%। মুখে আয়রন ট্যাবলেট খেলে তার তীব্র বমি ভাব ও কোষ্ঠকাঠিন্য হয়।'
          ),
          l(
            'Step 2: Apply the Clinical Ganzoni Formula: Total Iron Deficit (mg) = [Body Weight (kg) x (Target Hb - Actual Hb) (g/dL) x 2.4] + Iron Depot Stores (mg). Set Target Hb = 15.0 g/dL for complete hematological restoration. Depot stores = 500 mg (standard physiological storage iron for an adult female weighing >35 kg).',
            'ধাপ ২: গানজোনি সূত্রের প্রয়োগ: মোট আয়রন ঘাটতি (মিলিগ্রাম) = [ওজন (কেজি) x (কাঙ্ক্ষিত Hb - বর্তমান Hb) (g/dL) x ২.৪] + ডিপো সঞ্চয় (মিলিগ্রাম)। কাঙ্ক্ষিত Hb = ১৫.০ g/dL, ডিপো সঞ্চয় = ৫০০ মিলিগ্রাম।'
          ),
          l(
            'Step 3: Execute the calculation: Deficit = [60 kg x (15.0 - 7.0) x 2.4] + 500 = [60 x 8.0 x 2.4] + 500 = [1,152 mg] + 500 mg = 1,652 mg of elemental iron required.',
            'ধাপ ৩: হিসাব সম্পন্নকরণ: ঘাটতি = [৬০ x (১৫.০ - ৭.০) x ২.৪] + ৫০০ = [৬০ x ৮.০ x ২.৪] + ৫০০ = ১,১৫২ + ৫০০ = মোট ১,৬৫২ মিলিগ্রাম বিশুদ্ধ আয়রন প্রয়োজন।'
          ),
          l(
            'Step 4: Formulate intravenous dosing schedule: Administer Ferric Carboxymaltose (FCM) 1,000 mg in 250 mL 0.9% normal saline IV over 20 minutes on Day 1, followed by a second dose of 700 mg on Day 8 (Total = 1,700 mg administered). Retest hemoglobin, reticulocyte count, and ferritin at 4 to 6 weeks to confirm bone marrow repletion.',
            'ধাপ ৪: ইনজেকশন প্রয়োগের শিডিউল: প্রথম দিনে ১,০০০ মিলিগ্রাম ফেরিক কার্বক্সিম্যালটোজ স্যালাইনের মাধ্যমে ২০ মিনিটে প্রয়োগ করুন এবং ৮ নম্বর দিনে অবশিষ্ট ৭০০ মিলিগ্রাম দিন (মোট ১,৭০০ মিলিগ্রাম)। ৪ থেকে ৬ সপ্তাহ পর রক্ত পরীক্ষা করে অস্থিমজ্জার সঞ্চয় নিশ্চিত করুন।'
          ),
        ],
        conclusion: l(
          'The Ganzoni formula determined an absolute elemental iron deficit of 1,652 mg. A split intravenous repletion protocol bypassed gastrointestinal intolerance and hepcidin barriers, rapidly restoring erythrocyte mass and replenishing depleted hepatic ferritin reserves.',
          'গানজোনি সমীকরণের মাধ্যমে রোগীর শরীরে ১,৬৫২ মিলিগ্রাম আয়রনের ঘাটতি নিখুঁতভাবে নির্ধারিত হয়। দুই ধাপে শিরার মাধ্যমে আয়রন ইনজেকশন দিয়ে অন্ত্রের বাধা ও পার্শ্বপ্রতিক্রিয়া এড়িয়ে দ্রুত হিমোগ্লোবিন এবং যকৃতের ফেরিটিন সঞ্চয় স্বাভাবিক করা সম্ভব হয়েছে।'
        ),
      },
      {
        title: l('Distinguishing True Iron Deficiency Anemia from Anemia of Chronic Disease', 'প্রকৃত আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহজনিত রক্তাল্পতার ক্লিনিক্যাল পার্থক্য নির্ণয়'),
        steps: [
          l(
            'Step 1: Patient Presentation: A 62-year-old patient with active rheumatoid arthritis presents with hemoglobin of 9.2 g/dL and microcytosis (MCV 76 fL). Initial iron panel shows low serum iron (28 mcg/dL) and low transferrin saturation (11%).',
            'ধাপ ১: রোগীর বিবরণ: রিউমাটয়েড আর্থ্রাইটিসে আক্রান্ত এক রোগীর হিমোগ্লোবিন ৯.২ g/dL এবং রক্তকণিকা ছোট (MCV ৭৬ fL)। রক্তে আয়রন ও ট্রান্সফেরিন সম্পৃক্ততা উভয়ই কম পাওয়া গেছে।'
          ),
          l(
            'Step 2: Measure Serum Ferritin and Inflammatory Markers: The serum ferritin is elevated at 285 ng/mL (reference 30–300 ng/mL) and C-reactive protein (CRP) is 42 mg/L. In the setting of systemic inflammation, ferritin acts as an acute-phase reactant driven by IL-6, potentially masking depleted bone marrow iron stores.',
            'ধাপ ২: সিরাম ফেরিটিন ও প্রদাহ পরিমাপ: ফেরিটিন ২৮৫ ng/mL (উচ্চ) এবং সিআরপি ৪২ mg/L। প্রদাহের কারণে IL-6 ফেরিটিন বাড়িয়ে দিতে পারে যা আসল ঘাটতি আড়াল করতে পারে।'
          ),
          l(
            'Step 3: Measure Soluble Transferrin Receptor (sTfR): Obtain serum sTfR and calculate the sTfR-ferritin index [sTfR / log10(ferritin)]. In pure Anemia of Chronic Disease (ACD), sTfR remains normal (<2.5 mg/L), whereas in combined IDA + ACD, sTfR rises markedly (>3.5 mg/L) reflecting genuine cellular erythroid iron hunger.',
            'ধাপ ৩: সলিউবল ট্রান্সফেরিন রিসেপ্টর (sTfR) পরীক্ষা: প্রদাহজনিত রক্তাল্পতায় (ACD) sTfR স্বাভাবিক থাকে, কিন্তু প্রকৃত আয়রন ঘাটতি থাকলে কোষের তীব্র ক্ষুধার কারণে sTfR অনেক বেড়ে যায়।'
          ),
          l(
            'Step 4: Clinical Decision: Elevated hepcidin in active rheumatoid arthritis degrades enterocyte ferroportin, predicting oral iron failure. Address underlying inflammation or administer intravenous iron if sTfR index confirms co-existing absolute depletion.',
            'ধাপ ৪: চিকিৎসা সিদ্ধান্ত: অতিরিক্ত হেপসিডিন অন্ত্রের ফেরোপোর্টিন নষ্ট করে দেওয়ায় মুখে আয়রন খেলে কাজ হবে না; তাই প্রদাহ নিয়ন্ত্রণ করা অথবা প্রয়োজনে শিরায় ইনজেকশনের মাধ্যমে আয়রন দেওয়া উচিত।'
          ),
        ],
        conclusion: l(
          'Integrating ferritin, sTfR, and inflammatory markers prevents ineffective oral supplementation in ACD while identifying treatable iron deficiency.',
          'ফেরিটিন ও sTfR একসাথে পরীক্ষা করলে প্রদাহজনিত রক্তাল্পতায় মুখে অপ্রয়োজনীয় আয়রন ট্যাবলেট খাওয়ার জটিলতা এড়ানো সম্ভব হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does oral iron supplementation frequently fail in patients with active systemic inflammation (e.g., active rheumatoid arthritis or inflammatory bowel disease)?',
          'সক্রিয় দীর্ঘস্থায়ী প্রদাহজনিত রোগে (যেমন রিউমাটয়েড আর্থ্রাইটিস বা IBD) মুখে আয়রন ট্যাবলেট খাওয়ালে রক্ত বাড়ে না কেন?'
        ),
        answer: l(
          'Inflammatory cytokines (particularly IL-6 via the JAK/STAT3 pathway) strongly stimulate hepatic hepcidin transcription. Elevated circulating hepcidin binds enterocyte basolateral ferroportin-1, triggering its ubiquitination, internalisation, and lysosomal degradation. Without functional ferroportin, absorbed iron remains trapped inside duodenal enterocytes as ferritin and is discarded upon cell sloughing, rendering oral iron unabsorbable while promoting colonic dysbiosis.',
          'প্রদাহের কারণে নির্গত IL-6 সাইটোকাইন যকৃতে প্রচুর হেপসিডিন হরমোন তৈরি করে। হেপসিডিন অন্ত্রের ফেরোপোর্টিন চ্যানেল ধ্বংস করে দেয়। ফলে মুখে খাওয়া আয়রন কোষে ঢুকলেও তা রক্তে পৌঁছাতে পারে না এবং এন্টারোসাইট কোষ ঝরে পড়ার সাথে সাথে মলে বের হয়ে যায়। এ অবস্থায় শিরায় ইনজেকশনের মাধ্যমে আয়রন দেওয়া আবশ্যক।'
        ),
      },
      {
        question: l(
          'How does the homozygous HFE C282Y mutation lead to tissue iron overload in Hereditary Hemochromatosis?',
          'বংশগত হিমোক্রোমাটোসিসে HFE C282Y মিউটেশনের কারণে কীভাবে মানবদেহে বিষাক্ত মাত্রায় আয়রন জমা হয়?'
        ),
        answer: l(
          'Normal HFE forms a regulatory complex with beta-2 microglobulin and TfR2 on hepatocytes to sense circulating diferric transferrin and activate the BMP6/SMAD hepcidin pathway. The C282Y mutation abolishes a critical disulfide bond, preventing cell-surface assembly. Hepatocytes fail to sense expanding iron stores and inappropriately suppress hepcidin. Unchecked ferroportin activity drives relentless, unregulated duodenal absorption and macrophage dumping, causing toxic parenchymal organ iron accumulation.',
          'স্বাভাবিক অবস্থায় HFE প্রোটিন যকৃত কোষকে রক্তে আয়রনের মাত্রা পরিমাপ করতে সাহায্য করে। C282Y মিউটেশনে এই পরিমাপক ব্যবস্থা বিকল হয়ে যায়, ফলে শরীরে উপচে পড়া আয়রন থাকা সত্ত্বেও যকৃত হেপসিডিন তৈরি করে না। হেপসিডিন না থাকায় অন্ত্র অনবরত মাত্রাতিরিক্ত আয়রন শুষে নিতে থাকে যা লিভার, হার্ট ও প্যানক্রিয়াসে জমে অঙ্গ ধ্বংস করে।'
        ),
      },
      {
        question: l(
          'Why does alternate-day oral iron dosing improve cumulative fractional iron absorption while reducing gastrointestinal adverse events compared to daily or twice-daily dosing?',
          'প্রতিদিন বা দিনে দুবার আয়রন ট্যাবলেট খাওয়ার চেয়ে একদিন পর পর (অল্টারনেট-ডে) খেলে কেন শরীরে বেশি আয়রন শোষিত হয় এবং পেটের পার্শ্বপ্রতিক্রিয়া কমে?'
        ),
        answer: l(
          'Ingesting a therapeutic oral iron dose (60–100 mg elemental iron) stimulates a transient hepatic hepcidin surge that peaks at 6 to 24 hours post-ingestion. Elevated hepcidin internalizes and degrades enterocyte basolateral ferroportin-1, creating a refractory mucosal block that persists for 24 to 48 hours and slashes fractional absorption of subsequent daily iron doses by up to 50%. Administering iron on alternate days allows circulating hepcidin to normalize, doubling cumulative fractional absorption while preventing unabsorbed free ferrous iron accumulation in the colonic lumen that drives mucosal oxidative damage, nausea, and dysbiosis.',
          'একবার ৬০ থেকে ১০০ মিলিগ্রাম আয়রন ট্যাবলেট খেলে যকৃতের হেপসিডিন হরমোন ২৪ ঘণ্টার জন্য বেড়ে যায়। এই হেপসিডিন অন্ত্রের ফেরোপোর্টিন চ্যানেলগুলো বন্ধ করে দেয়; ফলে পরের দিন আবার আয়রন খেলে তা আর শোষিত হতে পারে না। একদিন পর পর খেলে হেপসিডিন স্বাভাবিক হওয়ার সময় পায়, ফলে দ্বিগুণ পরিমাণ আয়রন রক্তে শোষিত হয় এবং অপাচ্য আয়রন অন্ত্রের জীবাণু নষ্ট না করায় পেট ব্যথা ও কোষ্ঠকাঠিন্য অনেক কমে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'duodenal-iron-flux-hepcidin-cascade',
    title: l(
      'Duodenal Enterocyte & Systemic Iron Homeostasis Cascade',
      'ডিওডেনাল এন্টারোসাইট ও শারীরিক আয়রন নিয়ন্ত্রণ প্রবাহ'
    ),
    description: l(
      'Interactive molecular pathway of dietary iron absorption, cellular storage, ferroportin export, and hepatic hepcidin-mediated degradation.',
      'খাদ্যের আয়রন শোষণ, কোষে ফেরিটিন সঞ্চয়, ফেরোপোর্টিন নির্গমন এবং যকৃতের হেপসিডিন নিয়ন্ত্রণের ইন্টারঅ্যাক্টিভ আণবিক রূপরেখা।'
    ),
    disclaimer: l(
      'Educational biochemical pathway simulation; therapeutic iron administration requires laboratory serum monitoring.',
      'শিক্ষামূলক জৈবরাসায়নিক সিমুলেশন; কোনো ধরনের আয়রন চিকিৎসা শুরুর আগে রক্ত পরীক্ষা করা আবশ্যক।'
    ),
    svgType: 'iron-flux',
    imageUrl: '/assets/iron_biology_hepcidin_overview.jpg',
    imageCaption: l(
      'Medical textbook illustration of intestinal and systemic iron flux: Apical DCYTB ferric reductase and proton-coupled DMT1 entry, 24-subunit Ferritin nanocage storage with IRP/IRE post-transcriptional tuning, basolateral Ferroportin-1 and Hephaestin export, and hepatic Hepcidin-mediated internalization and lysosomal degradation.',
      'অন্ত্র ও শারীরিক আয়রন প্রবাহের মেডিকেল ইলাস্ট্রেশন: শীর্ষস্থ DCYTB ও প্রোটন-সংযুক্ত DMT1 পরিবহন, ২৪-সাবইউনিট ফেরিটিন খাঁচায় সঞ্চয় ও IRP/IRE নিয়ন্ত্রণ, বেসোল্যাটারাল ফেরোপোর্টিন-১ ও হেফেস্টিন নির্গমন এবং যকৃতের হেপসিডিন-মধ্যস্থ লাইসোজোমাল ধ্বংস।'
    ),
    has3D: true,
    threeDType: 'iron-biology-hepcidin-3d',
    items: [
      {
        id: 'node-luminal-dcytb',
        label: l('Apical DCYTB & DMT1 Transport', 'শীর্ষস্থ DCYTB ও DMT1 পরিবহন'),
        description: l(
          'Luminal ferric iron (Fe3+) is reduced to ferrous iron (Fe2+) by apical DCYTB with ascorbate, then imported via proton-coupled DMT1.',
          'লুমেনের Fe3+ ব্রাশ-বর্ডারের DCYTB ও ভিটামিন সি দিয়ে বিজারিত হয়ে Fe2+ এ পরিণত হয় এবং DMT1 চ্যানেল দিয়ে কোষে প্রবেশ করে।'
        ),
        details: l(
          'Dietary non-heme iron is mostly insoluble Fe3+. DCYTB ferric reductase uses ascorbate to reduce Fe3+ to Fe2+. Proton-coupled DMT1 symports Fe2+ across the apical microvillus membrane.',
          'নন-হিম আয়রন প্রধানত অদ্রবণীয় Fe3+। DCYTB এনজাইম ভিটামিন সি-এর সাহায্যে একে বিজারিত করে এবং DMT1 প্রোটন-সংযুক্ত চ্যানেলের মাধ্যমে এন্টারোসাইটের ভেতরে নিয়ে আসে।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
        position3D: { x: -90, y: -45, z: 25 },
      },
      {
        id: 'node-ferritin-nanocage',
        label: l('Ferritin Storage & IRP/IRE Tuning', 'ফেরিটিনে সঞ্চয় ও IRP/IRE সমন্বয়'),
        description: l(
          'Intracellular Fe2+ is safely stored within 24-subunit ferritin nanocages via H-chain ferroxidation, regulated by IRP1/IRP2.',
          'কোষাভ্যন্তরে অতিরিক্ত আয়রন ২৪-সাবইউনিট ফেরিটিন খাঁচায় সংরক্ষিত থাকে, যা IRP/IRE সংকেত দ্বারা নিয়ন্ত্রিত।'
        ),
        details: l(
          'A single ferritin shell sequesters up to 4,500 iron atoms as an inert ferrihydrite mineral core, preventing toxic Fenton radical generation. IRP1/2 bind mRNA IREs to coordinate ferritin translation with transferrin receptor stability.',
          'একটি ফেরিটিন প্রোটিন ৪,৫০০টি আয়রন পরমাণু নিরাপদে ধারণ করতে পারে। লৌহের ঘাটতি থাকলে IRP প্রোটিন ফেরিটিন তৈরি বন্ধ করে এবং রিসেপ্টর সংখ্যা বাড়িয়ে দেয়।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
        position3D: { x: 0, y: -10, z: 0 },
      },
      {
        id: 'node-ferroportin-hephaestin',
        label: l('Ferroportin Export & Hephaestin Oxidation', 'ফেরোপোর্টিন নির্গমন ও হেফেস্টিন জারণ'),
        description: l(
          'Iron is pumped out across the basolateral membrane by Ferroportin-1 and oxidized to Fe3+ by Hephaestin for apotransferrin loading.',
          'আয়রন ফেরোপোর্টিন-১ চ্যানেলের মাধ্যমে বেসোল্যাটারাল ঝিল্লি অতিক্রম করে এবং হেফেস্টিন দিয়ে জারিত হয়ে ট্রান্সফেরিনে যুক্ত হয়।'
        ),
        details: l(
          'Ferroportin-1 is the sole cellular iron exporter. It exports Fe2+, which is immediately oxidized to Fe3+ by membrane ferroxidase hephaestin, allowing high-affinity loading onto circulating apotransferrin.',
          'ফেরোপোর্টিন-১ হলো কোষ থেকে আয়রন বের করার একমাত্র পথ। এটি Fe2+ বের করে দেয় যা হেফেস্টিন দ্বারা মুহূর্তের মধ্যে Fe3+ এ জারিত হয়ে রক্তের ট্রান্সফেরিনে উঠে যায়।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
        position3D: { x: 90, y: 45, z: -20 },
      },
      {
        id: 'node-hepcidin-degradation',
        label: l('Hepatic Hepcidin & Lysosomal Degradation', 'যকৃতের হেপসিডিন ও লাইসোজোমাল ধ্বংস'),
        description: l(
          'Hepcidin secreted by hepatocytes binds Ferroportin, inducing ubiquitination, endocytosis, and lysosomal destruction.',
          'যকৃত থেকে ক্ষরিত হেপসিডিন ফেরোপোর্টিন চ্যানেলে যুক্ত হয়ে এন্ডোসাইটোসিসের মাধ্যমে লাইসোজোমে চ্যানেলটিকে ধ্বংস করে দেয়।'
        ),
        details: l(
          'Hepatocytes secrete Hepcidin in response to high iron stores (BMP6/SMAD) or inflammatory cytokines (IL-6/STAT3). Hepcidin binds Ferroportin, inducing ubiquitination, endocytosis, and lysosomal destruction, shutting down intestinal absorption and trapping iron in macrophages.',
          'দেহে অতিরিক্ত আয়রন বা প্রদাহের উপস্থিতিতে যকৃত হেপসিডিন তৈরি করে। Hepcidin binds Ferroportin, inducing its internalisation and lysosomal destruction, ফলে অন্ত্র ও ম্যাক্রোফেজ থেকে আয়রন বের হওয়া চিরতরে বন্ধ হয়ে যায়।'
        ),
        color: '#ec4899',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
        position3D: { x: 0, y: 65, z: 30 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Human Iron Economy & Closed Recycling Loop', '১. মানবদেহে আয়রন অর্থনীতি ও পুনর্ব্যবহারের চক্র'),
          paragraphs: [
            l(
              'Iron is an indispensable transition metal in human physiology, acting as the catalytic core of hemoglobin in red blood cells, myoglobin in muscle fibers, and cytochromes in mitochondrial electron transport chains [1, 3]. A healthy adult possesses approximately 3,000 to 4,000 milligrams (3 to 4 grams) of total body iron [1]. Of this total, approximately 65% is incorporated into the heme rings of circulating hemoglobin, 10% resides inside muscle myoglobin, and 20–25% is held in reserve inside the iron storage protein ferritin in the liver and spleen [1, 3].',
              'আয়রন মানব শারীরবৃত্তের এক পরম অপরিহার্য ধাতু, যা লোহিত রক্তকণিকার হিমোগ্লোবিন, পেশিতন্তুর মায়োগ্লোবিন এবং মাইটোকন্ড্রিয়ার শ্বাস-প্রশ্বাস চেইনের কেন্দ্রবিন্দু হিসেবে কাজ করে [১, ৩]। একজন সুস্থ প্রাপ্তবয়স্ক মানুষের শরীরে প্রায় ৩,০০০ থেকে ৪,০০০ মিলিগ্রাম (৩ থেকে ৪ গ্রাম) আয়রন থাকে [১]। এর প্রায় ৬৫% রক্তে হিমোগ্লোবিন তৈরিতে, ১০% পেশিতে এবং ২০-২৫% যকৃত ও প্লীহায় ফেরিটিন নামক বিশেষ প্রোটিনে সঞ্চিত অবস্থায় থাকে [১, ৩]।'
            ),
            l(
              'The most astonishing feature of human iron physiology is that it operates as a virtually closed, self-sustaining thermodynamic loop [1, 2]. Everyday, the human bone marrow must synthesize approximately 200 billion new red blood cells, requiring a massive daily influx of 20 to 25 milligrams of elemental iron [1, 2]. However, the adult human digestive tract absorbs a meager 1 to 2 milligrams of iron from food per day [1]. How does the body sustain this immense daily requirement on such tiny dietary intake? The answer lies in the reticuloendothelial recycling system of the spleen and liver [1, 2].',
              'মানবদেহের আয়রন ব্যবস্থাপনার সবচেয়ে বিস্ময়কর বৈশিষ্ট্য হলো এটি প্রায় শতভাগ বন্ধ এবং স্বয়ংসম্পূর্ণ একটি পুনর্ব্যবহার চক্রের মাধ্যমে পরিচালিত হয় [১, ২]। প্রতিদিন আমাদের অস্থিমজ্জায় প্রায় ২০ হাজার কোটি নতুন লোহিত রক্তকণিকা তৈরি হয়, যার জন্য দৈনিক ২০ থেকে ২৫ মিলিগ্রাম বিশুদ্ধ আয়রনের প্রয়োজন হয় [১, ২]। অথচ আমাদের অন্ত্র সারাদিনে খাদ্য থেকে মাত্র ১ থেকে ২ মিলিগ্রাম আয়রন শোষণ করতে পারে [১]। এই অভাব কীভাবে পূরণ হয়? এর উত্তর লুকিয়ে আছে প্লীহা ও যকৃতের ম্যাক্রোফেজ কোষের অসাধারণ রিসাইক্লিং বা পুনর্ব্যবহার ব্যবস্থায় [১, ২]।'
            ),
            l(
              'Every single day, specialized macrophages in the spleen identify and swallow senescent red blood cells that have reached the end of their 120-day lifespan [1, 2]. These macrophages dismantle the hemoglobin molecules, extract the precious iron atoms, and return approximately 20 to 24 milligrams of recycled iron back into the bloodstream every 24 hours [1, 2]. The 1 to 2 milligrams absorbed from dietary food simply replaces the tiny, unavoidable daily losses that occur through the natural shedding of enterocytes, skin flakes, and microscopic sweat [1].',
              'প্রতিদিন প্লীহার ম্যাক্রোফেজ কোষগুলো ১২০ দিন পুরোনো জীর্ণ লোহিত রক্তকণিকাগুলোকে গিলে ফেলে [১, ২]। এই কোষগুলো হিমোগ্লোবিন ভেঙে ফেলে এবং মূল্যবান আয়রন পরমাণুগুলোকে উদ্ধার করে প্রতিদিন প্রায় ২০ থেকে ২৪ মিলিগ্রাম আয়রন সরাসরি রক্তে ফিরিয়ে দেয় [১, ২]। আর খাবারের মাধ্যমে শোষিত ১-২ মিলিগ্রাম আয়রন কেবল ত্বক, অন্ত্রের মৃত কোষ ও ঘামের মাধ্যমে হারানো ক্ষয়টুকু পূরণ করে [১]।'
            ),
            l(
              'Unlike sodium, potassium, or water, the human body possesses no physiological excretory pathway for excess iron [1, 2]. We cannot pee out excess iron, nor can we actively pump it into our bile or sweat [1]. Once an iron atom crosses the intestinal epithelial barrier, it remains locked within our body until it is physically lost through bleeding or cellular shedding [1, 3]. Consequently, systemic iron balance is governed exclusively at the point of intestinal entry by the hepatic hormone hepcidin [2, 3].',
              'সোডিয়াম, পটাশিয়াম বা পানির মতো অতিরিক্ত আয়রন শরীর থেকে বের করে দেওয়ার কোনো স্বাভাবিক পথ মানুষের শরীরে নেই [১, ২]। মানুষ প্রস্রাব বা ঘামের মাধ্যমে বাড়তি আয়রন বের করতে পারে না [১]। কোনো আয়রন পরমাণু একবার অন্ত্রের প্রাচীর পার হয়ে রক্তে ঢুকলে রক্তপাত না হওয়া পর্যন্ত তা আজীবন শরীরের ভেতরেই থেকে যায় [১, ৩]। এ কারণেই দেহের আয়রন ভারসাম্য কঠোরভাবে নিয়ন্ত্রিত হয় কেবল অন্ত্রের প্রবেশদ্বারে, যকৃতের হেপসিডিন হরমোনের মাধ্যমে [২, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Luminal Bioavailability & Enterocyte DCYTB-DMT1 Absorption', '২. খাদ্যের রূপভেদ, DCYTB বিজারণ ও DMT1 পরিবহন'),
          paragraphs: [
            l(
              'Dietary iron exists in two fundamentally distinct chemical forms with vastly different biological absorption profiles: heme iron and non-heme iron [1, 3]. Heme iron—found exclusively in animal flesh, poultry, and fish—consists of a ferrous iron ion nestled within a protoporphyrin IX ring [1]. Because this porphyrin shield prevents iron from precipitating into insoluble complexes, heme iron is absorbed intact across the apical microvillus membrane with high fractional bioavailability (15% to 35%), largely immune to dietary inhibitors [1].',
              'খাদ্যতালিকায় আয়রন মূলত দুটি ভিন্ন রূপে থাকে: হিম আয়রন এবং নন-হিম আয়রন [১, ৩]। হিম আয়রন কেবল মাছ, মাংস ও কলিজায় পাওয়া যায় এবং এটি প্রোটোপোরফাইরিন রিংয়ের ভেতরে নিরাপদে ঢাকা থাকে [১]। ফলে পেটের অন্যান্য খাবারের উপাদানের সাথে এটি সহজে জমাট বাঁধে না এবং অন্ত্রের কোষ দিয়ে অতি সহজে প্রায় ১৫% থেকে ৩৫% হারে সরাসরি শোষিত হতে পারে [১]।'
            ),
            l(
              'In stark contrast, non-heme iron—which accounts for over 80–90% of dietary intake worldwide, derived from plant foods such as lentils, beans, spinach, grains, and fortified flours—exists predominantly as insoluble ferric iron (Fe3+) [1, 3]. At the neutral to slightly alkaline pH of the duodenum, free Fe3+ spontaneously precipitates into insoluble ferric hydroxide complexes that cannot be absorbed [1]. Furthermore, non-heme iron binding is powerfully inhibited by dietary phytates in unrefined grains, polyphenols and tannins in tea and coffee, and calcium in dairy [1].',
              'বিপরীতে নন-হিম আয়রন উদ্ভিজ্জ খাবার—যেমন ডাল, শাকসবজি, ছোলা ও খাদ্যশস্যে পাওয়া যায় এবং বিশ্বজুড়ে মোট খাওয়ার ৮০-৯০% আয়রনই হলো এই নন-হিম আয়রন [১, ৩]। কিন্তু এটি সাধারণত অদ্রবণীয় Fe3+ হিসেবে থাকে যা অন্ত্রের সামান্য ক্ষারীয় পরিবেশে পাথরের মতো তলানি পড়ে যায় [১]। তাছাড়া চা-কফির ট্যানিন এবং খাদ্যশস্যের ফাইটেট নন-হিম আয়রনকে শক্তভাবে বেঁধে ফেলে শরীরকে তা শোষণ করতে দেয় না [১]।'
            ),
            l(
              'To absorb non-heme iron, the apical brush border membrane of duodenal enterocytes deploys a specialized ferric reductase enzyme called Duodenal Cytochrome b (DCYTB) [1, 2]. DCYTB utilizes intracellular ascorbic acid as an electron donor to reduce insoluble luminal Fe3+ into soluble, absorbable ferrous iron (Fe2+) [1, 2]. This explains the profound clinical benefit of consuming vitamin C alongside plant meals: ascorbic acid not only fuels DCYTB enzymatic reduction, but also forms soluble, chelated ascorbate-iron complexes that resist precipitation in the intestinal lumen [1, 3].',
              'নন-হিম আয়রন শোষণের জন্য ক্ষুদ্রান্ত্রের এন্টারোসাইট কোষের মুখে Duodenal Cytochrome b (DCYTB) নামক একটি বিশেষ এনজাইম থাকে [১, ২]। এই এনজাইমটি ভিটামিন সি-এর কাছ থেকে ইলেকট্রন ধার নিয়ে অদ্রবণীয় Fe3+ কে দ্রবণীয় Fe2+ আয়রনে রূপান্তরিত করে [১, ২]। এ কারণেই ডাল বা শাকসবজি খাওয়ার সময় লেবুর রস বা ভিটামিন সি খেলে আয়রন শোষণ নাটকীয়ভাবে বহুগুণ বৃদ্ধি পায় [১, ৩]।'
            ),
            l(
              'Once reduced, ferrous iron is imported across the apical microvillus membrane by Divalent Metal Transporter 1 (DMT1 / SLC11A2), a proton-coupled symporter that harnesses the inward proton gradient maintained by the apical Na+/H+ exchanger (NHE3) [1, 2]. Within the enterocyte cytoplasm, this newly imported iron enters a small, tightly buffered transit pool known as the Labile Iron Pool (LIP), bound to low-molecular-weight chaperones such as poly(rC)-binding proteins (PCBP1/2) to prevent toxic radical formation [1, 6].',
              'বিজারিত Fe2+ আয়রনটি এরপর প্রোটন-নির্ভর DMT1 চ্যানেলের মাধ্যমে হুড়মুড় করে এন্টারোসাইট কোষের ভেতরে ঢুকে পড়ে [১, ২]। কোষের ভেতরে ঢোকার পর এটি একটি অত্যন্ত নিরাপদ ট্রানজিট পুলে প্রবেশ করে যেখানে বিশেষ পিসিবিপি (PCBP) প্রোটিন একে হাত ধরে ধরে নিরাপদে নিয়ে যায় যাতে মুক্ত আয়রন কোষের পর্দা ধ্বংস করতে না পারে [১, ৬]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Ferritin Nanocages, IRP/IRE Regulation & Ferroportin', '৩. ফেরিটিন ন্যানোকেজ, IRP/IRE নিয়ন্ত্রণ ও ফেরোপোর্টিন'),
          paragraphs: [
            l(
              'Inside enterocytes, hepatocytes, and macrophages, iron is safely buffered by Ferritin, a magnificent 24-subunit spherical protein nanocage with an outer diameter of 12 nanometers and an expansive inner cavity [1, 6]. Ferritin shells are assembled from varying ratios of Heavy (FTH1) and Light (FTL) chains: the H-subunit contains a catalytic ferroxidase center that oxidizes entering Fe2+ into Fe3+, while the L-subunit coordinates the nucleation and crystallization of up to 4,500 iron atoms into an insoluble, non-toxic ferrihydrite mineral core [1, 6].',
              'কোষের ভেতরে অতিরিক্ত আয়রনকে নিরাপদে বন্দি করে রাখার জন্য ফেরিটিন নামক একটি অসাধারণ গোলাকার প্রোটিন খাঁচা থাকে [১, ৬]। ২৪টি সাবইউনিট দিয়ে তৈরি এই ন্যানো-খাঁচাটির ভেতরে প্রায় ৪,৫০০টি আয়রন পরমাণু পাথরের মতো জমা থাকতে পারে [১, ৬]। এর ভারী চেইনের এনজাইম আয়রনকে নিরাপদ রূপ দান করে এবং হালকা চেইনটি আয়রনকে স্ফটিক আকারে খাঁচার মধ্যে সাজিয়ে রাখে [১, ৬]।'
            ),
            l(
              'When systemic demand requires iron release into the bloodstream, ferrous iron is pumped across the basolateral membrane into the interstitial fluid via Ferroportin-1 (FPN1 / SLC40A1) [1, 2]. Ferroportin is the only known cellular iron export channel in mammalian biology [2]. Because circulating transferrin can only bind ferric iron, the exported Fe2+ is instantly oxidized to Fe3+ by Hephaestin, a membrane-bound copper ferroxidase intimately complexed with ferroportin on the enterocyte basolateral surface (and by its soluble homolog Ceruloplasmin on macrophages) [1, 2].',
              'রক্তে যখন আয়রনের প্রয়োজন হয়, তখন ফেরোপোর্টিন-১ (FPN1) নামক চ্যানেলের মাধ্যমে আয়রন কোষের বাইরে রক্তনালীর দিকে বের হয় [১, ২]। স্তন্যপায়ী প্রাণিদেহে কোষ থেকে আয়রন বের করার একমাত্র পথ হলো এই ফেরোপোর্টিন চ্যানেল [২]। বের হওয়া আয়রনকে রক্তের ট্রান্সফারিনে তোলার আগে হেফেস্টিন নামক একটি কপার-এনজাইম একে তৎক্ষণাৎ Fe3+ তে জারিত করে দেয় [১, ২]।'
            ),
            l(
              'Intracellular iron flux is governed by an exquisite post-transcriptional sensory circuit composed of Iron Regulatory Proteins (IRP1 and IRP2) and stem-loop mRNA structures called Iron-Responsive Elements (IREs) [1, 6]. Under conditions of cellular iron starvation, IRPs bind to the single 5\'-UTR IRE of ferritin and ferroportin mRNAs, physically sterically hindering ribosomal translation initiation and halting iron storage and export [6]. Simultaneously, IRP binding to five tandem IREs in the 3\'-UTR of transferrin receptor-1 (TfR1) mRNA protects the transcript from endonucleolytic cleavage, boosting TfR1 synthesis to scavenge circulating iron [1, 6].',
              'কোষের ভেতরে এই পুরো প্রক্রিয়াটি নিয়ন্ত্রিত হয় IRP1 ও IRP2 নামক আণবিক সেন্সর প্রোটিনের মাধ্যমে [১, ৬]। কোষে আয়রন কমে গেলে এই প্রোটিনগুলো ফেরিটিনের মেসেঞ্জার আরএনএ-তে বসে নতুন ফেরিটিন তৈরি বন্ধ করে দেয় যাতে মূল্যবান আয়রন অযথা আটকে না থাকে [৬]। একই সাথে এরা ট্রান্সফারিন রিসেপ্টর-১ (TfR1) এর মেসেঞ্জার আরএনএ-কে নষ্ট হওয়া থেকে বাঁচিয়ে কোষে রক্ত থেকে আয়রন শোষণের দরজার সংখ্যা বহুগুণ বাড়িয়ে দেয় [১, ৬]।'
            ),
            l(
              'Conversely, when cellular iron is abundant, iron binding to IRP1 assembles an iron-sulfur [4Fe-4S] cluster, converting IRP1 into cytosolic aconitase, while IRP2 is recognized by the iron-dependent E3 ubiquitin ligase FBXL5 and degraded in the proteasome [1, 6]. Derepressed ferritin translation rapidly sequesters the excess iron, while unprotected TfR1 mRNA is degraded, shutting off cellular iron uptake [1, 6].',
              'বিপরীতে কোষে আয়রন পর্যাপ্ত থাকলে IRP প্রোটিনের গঠন বদলে যায় এবং প্রোটিয়েজোমে তা ধ্বংস হয়ে যায় [১, ৬]। ফলে ফেরিটিন তৈরি অবাধে শুরু হয় এবং অতিরিক্ত সব আয়রন খাঁচায় বন্দি হয়ে যায়, আর ট্রান্সফারিন রিসেপ্টর তৈরি বন্ধ হয়ে নতুন আয়রন ঢোকা থেমে যায় [১, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. The Master Hepcidin-Ferroportin Axis & Macrophage Recycling', '৪. প্রধান হেপসিডিন-ফেরোপোর্টিন অক্ষ ও ম্যাক্রোফেজ পুনর্ব্যবহার'),
          paragraphs: [
            l(
              'The systemic rheostat that governs total body iron economy is Hepcidin, a 25-amino-acid peptide hormone synthesized and secreted predominantly by hepatocytes in the liver [1, 2]. Hepcidin acts as a negative regulator of systemic iron availability: its sole molecular target is the iron exporter Ferroportin [2]. Circulating hepcidin binds directly to the central cavity of ferroportin on enterocytes and macrophages, inducing receptor ubiquitination, rapid clathrin-mediated endocytosis, and irreversible lysosomal proteolysis [2, 4].',
              'সারা শরীরের আয়রন প্রবাহের প্রধান নিয়ন্ত্রক চাবিকাঠি হলো হেপসিডিন, যা যকৃতের হেপাটোসাইট কোষ থেকে ক্ষরিত ২৫-অ্যামিনো অ্যাসিড বিশিষ্ট একটি পেপটাইড হরমোন [১, ২]। হেপসিডিনের একমাত্র কাজ হলো রক্তে আয়রন প্রবেশ বন্ধ করা এবং এর একমাত্র লক্ষ্য হলো ফেরোপোর্টিন চ্যানেল [২]। রক্তে ভেসে থাকা হেপসিডিন অন্ত্র ও ম্যাক্রোফেজের ফেরোপোর্টিন চ্যানেলে যুক্ত হওয়া মাত্রই চ্যানেলটি কোষে ঢুকে লাইসোজোমে চিরতরে ধ্বংস হয়ে যায় [২, ৪]।'
            ),
            l(
              'Hepcidin transcription in the liver is regulated by two dominant physiological inputs: systemic iron stores and systemic inflammation [2, 4]. Under conditions of iron sufficiency, sinusoidal endothelial cells secrete Bone Morphogenetic Protein 6 (BMP6), which binds the BMP receptor complex and coreceptor Hemojuvelin (HJV) on hepatocytes, activating the intracellular SMAD1/5/8 pathway to drive hepcidin transcription and shut off further iron absorption [2, 4].',
              'যকৃতে হেপসিডিন তৈরি হয় প্রধানত দুটি কারণে: শরীরের আয়রন সঞ্চয় এবং শরীরের প্রদাহ বা ইনফেকশন [২, ৪]। শরীরে আয়রন পর্যাপ্ত থাকলে রক্তনালীর কোষ থেকে BMP6 প্রোটিন ক্ষরিত হয়ে হেপাটোসাইট কোষে হেপসিডিন তৈরির নির্দেশ দেয়, যার ফলে নতুন আয়রন শোষণ সাথে সাথে বন্ধ হয়ে যায় [২, ৪]।'
            ),
            l(
              'In parallel, during bacterial infection or chronic autoimmune inflammation, inflammatory cytokines—most notably interleukin-6 (IL-6)—bind hepatocyte gp130 receptors, activating Janus kinase (JAK) to phosphorylate Signal Transducer and Activator of Transcription 3 (STAT3) [2, 4]. Phosphorylated STAT3 dimers translocate into the nucleus and bind a dedicated element in the hepcidin promoter, hyper-stimulating hepcidin secretion even in the presence of severe iron deficiency [2, 4].',
              'একই সাথে কোনো ইনফেকশন বা দীর্ঘস্থায়ী প্রদাহের সময় ইন্টারলিউকিন-৬ (IL-6) যকৃতের কোষে গিয়ে JAK-STAT3 সংকেতের মাধ্যমে হেপসিডিন উৎপাদন শতগুণ বাড়িয়ে দেয় [২, ৪]। এই অতিরিক্ত হেপসিডিন শরীরে চরম আয়রনের ঘাটতি থাকা সত্ত্বেও তৈরি হতে থাকে [২, ৪]।'
            ),
            l(
              'This evolutionary defense mechanism was designed to starve invading bacterial pathogens of iron (nutritional immunity) [2]. However, when inflammation becomes chronic (as in rheumatoid arthritis, cancer, or chronic kidney disease), sustained hepcidin elevation locks all recycled iron inside macrophages and blocks duodenal absorption, precipitating the refractory condition known as Anemia of Chronic Disease [2, 3].',
              'বিবর্তনের ধারায় এটি মূলত ক্ষতিকর ব্যাকটেরিয়াকে না খাইয়ে মারার একটি প্রাকৃতিক প্রতিরোধ ব্যবস্থা ছিল [২]। কিন্তু আর্থ্রাইটিস বা কিডনি রোগের মতো দীর্ঘস্থায়ী প্রদাহে হেপসিডিন অনবরত বেশি থাকার কারণে ম্যাক্রোফেজগুলো আয়রন আটকে রাখে এবং অন্ত্র থেকে খাবার শোষণ বন্ধ হয়ে যায়, ফলে রক্তে হিমোগ্লোবিন কমে গিয়ে অ্যানিমিয়া অফ ক্রনিক ডিজিজ তৈরি হয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Iron Deficiency vs Anemia of Chronic Disease & Hemochromatosis', '৫. আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহের রক্তাল্পতা ও হিমোক্রোমাটোসিস'),
          paragraphs: [
            l(
              'In clinical practice, microcytic hypochromic anemia (MCV < 80 fL) presents a frequent diagnostic dilemma: distinguishing pure Iron Deficiency Anemia (IDA) from Anemia of Chronic Disease / Inflammation (ACD) [1, 3]. In pure IDA, depleted iron stores shut off hepatic hepcidin, leaving ferroportin wide open; Total Iron-Binding Capacity (TIBC) rises above 400 mcg/dL, serum ferritin plunges below 30 ng/mL, and transferrin saturation drops <15% [1, 3]. Oral iron supplementation is highly effective [3].',
              'চিকিৎসাবিজ্ঞানে রক্তের কণিকা ছোট হয়ে যাওয়া রক্তস্বল্পতায় (মাইক্রোসাইটিক অ্যানিমিয়া) সবচেয়ে বড় চ্যালেঞ্জ হলো সাধারণ আয়রন ঘাটতি (IDA) নাকি প্রদাহজনিত রক্তস্বল্পতা (ACD) তা নির্ভুলভাবে পৃথক করা [১, ৩]। সাধারণ আয়রনের অভাবে হেপসিডিন বন্ধ থাকে এবং অন্ত্রের সব চ্যানেল খোলা থাকে; এ ক্ষেত্রে TIBC অনেক বেশি থাকে (>৪০০ mcg/dL) কিন্তু ফেরিটিন ৩০ ng/mL-এর নিচে নেমে যায় [১, ৩]। মুখে সাধারণ আয়রন ট্যাবলেট খাওয়ালেই এই রোগ নিরাময় হয় [৩]।'
            ),
            l(
              'In Anemia of Chronic Disease, sustained IL-6-driven hepcidin elevation destroys ferroportin, trapping iron in reticuloendothelial macrophages [2, 3]. While serum iron and transferrin saturation are low, serum ferritin is normal or elevated (>100 ng/mL) because ferritin is an acute-phase reactant, and TIBC is characteristically low (<250 mcg/dL) [3]. Giving oral iron to a patient with ACD is futile and counterproductive, as enterocyte ferroportin degradation prevents absorption while unabsorbed iron drives colonic inflammation [2, 3].',
              'কিন্তু প্রদাহজনিত রক্তস্বল্পতায় (ACD) অতিরিক্ত হেপসিডিন ফেরোপোর্টিন চ্যানেল ধ্বংস করে রাখে [২, ৩]। রক্তে আয়রন কম থাকলেও ফেরিটিন স্বাভাবিক বা অনেক বেশি (>১০০ ng/mL) থাকে এবং TIBC অনেক কম থাকে (<২৫০ mcg/dL) [৩]। এমন রোগীকে মুখে আয়রন ট্যাবলেট খাওয়ালে কোনো লাভ হয় না, কারণ অন্ত্র দিয়ে আয়রন ঢুকতেই পারে না এবং পেটে তীব্র যন্ত্রণা হয় [২, ৩]।'
            ),
            l(
              'In ambiguous cases where IDA and ACD coexist, measuring the Soluble Transferrin Receptor (sTfR) provides gold-standard discrimination [3]. Soluble transferrin receptor is shed from erythroblasts in proportion to cellular iron hunger, unaffected by systemic inflammation [3]. An elevated sTfR or an sTfR-ferritin index > 2 establishes concurrent absolute iron deficiency, indicating that intravenous iron therapy will successfully restore erythropoiesis [3].',
              'জটিল ক্ষেত্রে যখন রোগীর শরীরে একই সাথে আয়রনের অভাব এবং প্রদাহ থাকে, তখন সলিউবল ট্রান্সফারিন রিসেপ্টর (sTfR) পরীক্ষা নির্ভুল তথ্য দেয় [৩]। অস্থির কোষগুলোতে সত্যিকারের আয়রন ক্ষুধা তৈরি হলেই কেবল sTfR রক্তে বৃদ্ধি পায়, প্রদাহে এর মান বাড়ে না [৩]। sTfR বেশি থাকলে বুঝতে হবে রোগীর শরীরে সত্যিকারের ঘাটতি রয়েছে এবং সরাসরি শিরার মাধ্যমে ইনজেকশন দিলে রোগী সুস্থ হয়ে উঠবে [৩]।'
            ),
            l(
              'At the opposite extreme lies Hereditary Hemochromatosis, an autosomal recessive iron overload disorder caused primarily by homozygous C282Y mutations in the HFE gene [1, 5]. Defective HFE disrupts hepatocyte iron sensing, inappropriately silencing hepcidin despite massive total body iron overload [1, 5]. Unregulated ferroportin hyper-absorbs dietary iron lifelong, causing toxic iron deposition in liver (cirrhosis, hepatoma), pancreas (bronze diabetes), and myocardium (dilated cardiomyopathy) [1, 5]. Therapeutic phlebotomy remains the life-saving standard of care [1].',
              'বিপরীত চরম প্রান্তে রয়েছে বংশগত হিমোক্রোমাটোসিস রোগ, যা HFE জিনের ত্রুটির কারণে ঘটে [১, ৫]। এই রোগে যকৃত বুঝতে পারে না শরীরে কত আয়রন জমেছে এবং ভুল করে হেপসিডিন তৈরি বন্ধ রাখে [১, ৫]। ফলে সারাজীবন ধরে অন্ত্র থেকে অনিয়ন্ত্রিতভাবে অতিরিক্ত আয়রন শোষিত হয়ে যকৃত ধ্বংস করে সিরোসিস ঘটায়, অগ্ন্যাশয় নষ্ট করে ডায়াবেটিস তৈরি করে এবং হার্ট ফেইলিউর ঘটায় [১, ৫]। নিয়মিত শরীর থেকে রক্ত টেনে বের করে ফেলে এই রোগীদের জীবন রক্ষা করা হয় [১]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'),
          paragraphs: [
            l(
              'The human iron economy is a tightly closed, conservative thermodynamic loop where 95% of daily iron requirements are met through splenic macrophage recycling of senescent erythrocytes, with dietary absorption supplying only 1 to 2 mg/day to balance natural cutaneous and mucosal losses [1, 2].',
              'মানবদেহের আয়রন ব্যবস্থাপনা একটি সম্পূর্ণ বন্ধ পুনর্ব্যবহার চক্র, যেখানে প্রতিদিনের প্রয়োজনীয় আয়রনের ৯৫% আসে প্লীহার ম্যাক্রোফেজ দ্বারা পুরোনো রক্ত ভাঙার মাধ্যমে এবং মাত্র ১-২ মিলিগ্রাম আসে খাদ্য থেকে [১, ২]।',
            ),
            l(
              'Non-heme iron absorption requires apical brush-border reduction of Fe3+ to Fe2+ by DCYTB, proton-coupled symport via DMT1, intracellular buffering by ferritin nanocages and IRP1/2 switches, and basolateral export via Ferroportin-1 coupled to hephaestin ferroxidation [1, 2, 6].',
              'উদ্ভিজ্জ নন-হিম আয়রন শোষণের জন্য অন্ত্রের মুখে DCYTB এনজাইম দিয়ে Fe2+ রূপান্তর, DMT1 চ্যানেল দিয়ে প্রবেশ, ফেরিটিন খাঁচায় সাময়িক সঞ্চয় এবং হেফেস্টিন সহযোগে ফেরোপোর্টিন চ্যানেল দিয়ে রক্তে নির্গমন অপরিহার্য [১, ২, ৬]।'
            ),
            l(
              'Hepcidin secreted by hepatocytes acts as the master negative regulator of systemic iron availability by binding Ferroportin-1 and triggering its ubiquitination and lysosomal degradation [2, 4]. Hepcidin is upregulated by iron repletion (BMP6/SMAD) and systemic inflammation (IL-6/STAT3), but suppressed by erythroid demand via erythroferrone [2, 4].',
              'যকৃত থেকে ক্ষরিত হেপসিডিন হরমোন ফেরোপোর্টিন চ্যানেল ধ্বংস করে রক্তের আয়রন প্রবাহ বন্ধ করে দেয় [২, ৪]। শরীরে আয়রন বাড়লে বা প্রদাহ হলে হেপসিডিন বৃদ্ধি পায় এবং রক্তকণিকা তৈরির তাগিদ থাকলে এর ক্ষরণ বন্ধ থাকে [২, ৪]।'
            ),
            l(
              'Differential diagnosis of microcytic anemias requires integrating serum ferritin, transferrin saturation, TIBC, and sTfR to distinguish absolute Iron Deficiency Anemia (suppressed hepcidin, high TIBC) from Anemia of Chronic Disease (elevated hepcidin, low TIBC, iron trapping in macrophages) [1, 3].',
              'রক্তস্বল্পতা মূল্যায়নের জন্য কেবল একটি পরীক্ষা নয়, বরং সিরাম ফেরিটিন, ট্রান্সফারিন স্যাচুরেশন, TIBC এবং sTfR মিলিয়ে প্রকৃত আয়রন ঘাটতি বনাম প্রদাহজনিত রক্তস্বল্পতার সঠিক চিকিৎসা নিশ্চিত করতে হবে [১, ৩]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'প্রাতিষ্ঠানিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Quantitative Erythrocyte Turnover and Reticuloendothelial Flux', '১. লোহিত রক্তকণিকার পরিমাণগত রূপান্তর ও ম্যাক্রোফেজ প্রবাহ'),
          paragraphs: [
            l(
              'In quantitative hematology, an adult circulatory volume of 5 liters contains approximately 2.5 x 10^13 erythrocytes, each packed with ~270 million hemoglobin tetramers holding four iron atoms each [1, 3]. Because circulating red blood cells possess a finite mechanical lifespan of 120 ± 20 days, approximately 0.8% to 1.0% of all red blood cells—equating to 2 x 10^11 erythrocytes or 200 billion cells—undergo senescent clearance every 24 hours [1, 3].',
              'হেমাটোলজির পরিমাণগত পরিসংখ্যানে দেখা যায় একজন প্রাপ্তবয়স্ক মানুষের ৫ লিটার রক্তে প্রায় ২৫ লক্ষ কোটি লোহিত রক্তকণিকা থাকে, যার প্রতিটিতে ২৭ কোটি হিমোগ্লোবিন থাকে [১, ৩]। এই কোষগুলোর স্বাভাবিক আয়ু ১২০ দিন হওয়ায় প্রতিদিন মোট রক্তকণিকার প্রায় ১% (প্রায় ২০ হাজার কোটি কোষ) বার্ধক্যে পৌঁছে নষ্ট হয়ে যায় [১, ৩]।'
            ),
            l(
              'Senescent erythrocytes traversing the tortuous cords of Billroth in the splenic red pulp are recognized by resident macrophages through surface changes, including externalized phosphatidylserine, band 3 clustering, and the deposition of natural anti-band 3 autoantibodies [1, 2]. Splenic macrophages engulf these erythrocytes via phagocytosis and deliver them into phagolysosomes [1].',
              'প্লীহার লাল অংশের জটিল জালিকার মধ্য দিয়ে যাওয়ার সময় ম্যাক্রোফেজ কোষগুলো পুরোনো রক্তকণিকার মেমব্রেনের ক্ষয় ও ফসফাটিডিলসেরিন শনাক্ত করে তাদের গিলে ফেলে [১, ২]। এরপর কোষের ভেতরে থাকা অ্যাসিডিক লাইসোজোমে রক্তকণিকাগুলোকে ভেঙে চুরমার করা হয় [১]।'
            ),
            l(
              'Inside the phagolysosome, heme oxygenase-1 (HO-1) cleaves the protoporphyrin IX ring at the alpha-meso carbon bridge, releasing biliverdin (subsequently reduced to bilirubin), carbon monoxide, and free ferrous iron [1, 2]. The liberated Fe2+ is transported across the phagolysosomal membrane into the macrophage cytoplasm by Natural Resistance-Associated Macrophage Protein 1 (NRAMP1 / SLC11A1) and DMT1 [1, 2].',
              'লাইসোজোমের ভেতরে হিম অক্সিজিনেজ-১ (HO-1) এনজাইম হিমোগ্লোবিনের রিং কেটে ফেলে বিলিভার্ডিন, কার্বন মনোক্সাইড এবং মুক্ত আয়রন আলাদা করে ফেলে [১, ২]। এই মুক্ত আয়রন NRAMP1 ও DMT1 চ্যানেলের সাহায্যে ম্যাক্রোফেজের সাইটোপ্লাজমে নিরাপদে চলে আসে [১, ২]।'
            ),
            l(
              'From the macrophage cytoplasm, this recycled iron is either incorporated into ferritin nanocages for storage or exported across the plasma membrane via Ferroportin-1 [1, 2]. The rate of macrophage iron export is directly calibrated to bone marrow erythropoietic requirements, transferring approximately 20 to 25 mg of elemental iron to circulating transferrin every day [1, 2].',
              'ম্যাক্রোফেজের সাইটোপ্লাজম থেকে এই উদ্ধার করা আয়রন হয় সাময়িকভাবে ফেরিটিন খাঁচায় জমা থাকে অথবা ফেরোপোর্টিন চ্যানেলের মাধ্যমে রক্তে নির্গত হয় [১, ২]। অস্থিমজ্জার ঠিক যতখানি প্রয়োজন, ম্যাক্রোফেজ প্রতিদিন ঠিক সেই পরিমাণ (২০-২৫ মিলিগ্রাম) আয়রন রক্তরসে সরবরাহ করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Brush-Border Enzymology of Ferric Reduction and Heme Transporters', '২. ব্রাশ-বর্ডার এনজাইমোলজি: ফেরিক বিজারণ ও হিম পরিবহন'),
          paragraphs: [
            l(
              'Duodenal cytochrome b (DCYTB / CYBRD1) is an integral plasma membrane di-heme ferric reductase containing six transmembrane alpha-helices with two b-type hemes embedded within its lipid-spanning core [1, 2]. DCYTB bridges the cytoplasmic and extracellular compartments: intracellular ascorbic acid binds to a cytoplasmic docking site, donating electrons to the internal heme, which transfers them across the bilayer to the outer heme to reduce luminal insoluble Fe3+ to soluble Fe2+ [1, 2].',
              'Duodenal Cytochrome b (DCYTB) হলো অন্ত্রের ব্রাশ-বর্ডারে অবস্থিত একটি বিশেষ এনজাইম যার ভেতরে দুটি হিম গ্রুপ থাকে [১, ২]। কোষের ভেতরের ভিটামিন সি থেকে ইলেকট্রন নিয়ে এই এনজাইমটি কোষপর্দা পার করে অন্ত্রের খাবারের অদ্রবণীয় Fe3+ কে দ্রবণীয় Fe2+ আয়রনে রূপান্তরিত করে [১, ২]।'
            ),
            l(
              'Once reduced, Fe2+ is imported by Divalent Metal Transporter 1 (DMT1 / SLC11A2), an electrogenic 12-transmembrane symporter that couples the inward transport of one Fe2+ ion with one proton (H+) [1, 2]. DMT1 operates optimally at the acidic brush-border microclimate (pH 5.5 to 6.5) maintained by the apical Na+/H+ exchanger NHE3 [1]. Genetic loss-of-function mutations in human DMT1 cause severe microcytic anemia with hepatic iron overload [1].',
              'বিজারিত Fe2+ আয়রনটি DMT1 চ্যানেলের সাহায্যে একটি প্রোটন (H+) সাথে নিয়ে এন্টারোসাইটে প্রবেশ করে [১, ২]। অন্ত্রের ব্রাশ-বর্ডারের মৃদু অ্যাসিডিক পরিবেশে (pH ৫.৫-৬.৫) এই চ্যানেলটি সবচেয়ে দ্রুত কাজ করে [১]। কোনো রোগীর DMT1 জিনে জন্মগত ত্রুটি থাকলে শরীর খাবার থেকে আয়রন শোষণ করতে পারে না এবং মারাত্মক রক্তাল্পতা দেখা দেয় [১]।'
            ),
            l(
              'In contrast, dietary heme iron is imported intact across the apical enterocyte membrane via endocytosis or specialized putative heme transporters, including Heme Carrier Protein 1 (HCP1 / SLC46A1) and Feline Leukemia Virus Subgroup C Receptor 2 (FLVCR2) [1, 3]. Once inside the enterocyte, the intact heme molecule is cleaved by microsomal heme oxygenase-1 (HO-1), releasing free ferrous iron into the common labile iron pool [1, 3].',
              'অপরদিকে মাছ-মাংসের হিম আয়রন অক্ষত অবস্থায় সরাসরি এন্টারোসাইট কোষে ঢুকে পড়ে, যা বিশেষ HCP1 বা FLVCR2 চ্যানেলের মাধ্যমে সম্পন্ন হয় [১, ৩]। কোষের ভেতরে ঢোকার পর সেখানে থাকা হিম অক্সিজিনেজ এনজাইম হিমোগ্লোবিনের বলয়টি ভেঙে মুক্ত Fe2+ আয়রন বের করে সাধারণ ট্রানজিট পুলে যোগ করে দেয় [১, ৩]।'
            ),
            l(
              'Dietary factors potently modulate non-heme iron absorption through biophysical coordination chemistry [1]. Ascorbic acid forms soluble monochelates with Fe3+ that resist polymerization at duodenal pH, increasing non-heme iron bioavailability up to six-fold [1]. In contrast, inositol hexaphosphate (phytate) in cereal grains binds Fe3+ into insoluble, multi-dentate polymeric chelates that completely resist brush-border enzymatic reduction and are excreted unabsorbed in feces [1].',
              'খাদ্যের উপাদানগুলো নন-হিম আয়রন শোষণে ব্যাপক প্রভাব ফেলে [১]। ভিটামিন সি আয়রনের সাথে মিলে একটি দ্রবণীয় যৌগ তৈরি করে যা শোষণকে ছয় গুণ পর্যন্ত বাড়িয়ে দিতে পারে [১]। কিন্তু খাদ্যশস্যের ফাইটেট আয়রনকে এমন শক্তভাবে বেঁধে ফেলে যে DCYTB এনজাইম একে ভাঙতে পারে না এবং পুরো আয়রন অপাচ্য অবস্থায় মলে অপচয় হয় [১]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Biophysics of Ferritin Mineralization and IRP/IRE Dynamics', '৩. ফেরিটিন খনিজায়নের বায়োফিজিক্স ও IRP/IRE আণবিক গতিবিদ্যা'),
          paragraphs: [
            l(
              'The 24-subunit ferritin shell (molecular weight ~480 kDa) is assembled from a combination of Heavy (FTH1, 21 kDa) and Light (FTL, 19 kDa) polypeptides arranged with 4-3-2 octahedral point group symmetry [1, 6]. The protein shell is pierced by eight hydrophilic channels lined by conserved aspartate and glutamate residues that direct entering ferrous iron ions into the interior cavity [6].',
              'ফেরিটিনের ২৪টি সাবইউনিটের বিশালাকার খোলসটি ভারী (FTH1) এবং হালকা (FTL) প্রোটিনের এক নিখুঁত জ্যামিতিক নকশায় সজ্জিত [১, ৬]। এই খোলসের গায়ে আটটি বিশেষ ছিদ্র থাকে যা ঋণাত্মক চার্জের মাধ্যমে ধনাত্মক আয়রন আয়নগুলোকে টেনে খাঁচার ভেতরে নিয়ে যায় [৬]।'
            ),
            l(
              'Inside the ferritin cavity, catalytic dinuclear ferroxidase centers located on H-subunits react with entering Fe2+ and molecular oxygen to form a peroxodiferric intermediate [Fe3+-O-O-Fe3+], which decomposes to generate insoluble ferric oxyhydroxide mineral precursors [1, 6]. L-subunits lack ferroxidase activity but provide acidic carboxylate clusters that facilitate crystal nucleation, packing up to 4,500 iron atoms into a dense ferrihydrite [5Fe2O3•9H2O] core [6].',
              'খাঁচার ভেতরে ভারী চেইনের এনজাইম অক্সিজেনের সাহায্যে Fe2+ কে জারিত করে ফেরিক অক্সিহাইড্রক্সাইড তৈরি করে [১, ৬]। আর হালকা চেইনগুলো এই জারিত কণাগুলোকে পাথরের মতো স্তরে স্তরে সাজিয়ে স্ফটিক তৈরি করে, ফলে কোষের সাইটোপ্লাজম কোনো বিষাক্ত র্যাডিকেলের সংস্পর্শে আসে না [৬]।'
            ),
            l(
              'Translational control of ferritin is executed by the IRP/IRE network [1, 6]. Iron-Responsive Elements (IREs) are phylogenetically conserved stem-loop structures characterized by a 5\'-CAGUGN-3\' hexanucleotide loop and an unpaired bulging cytosine on the 5\' stem [6]. In low iron, IRP1 and IRP2 bind the single 5\'-UTR IRE of ferritin mRNA with picomolar affinity (Kd ~ 10–50 pM), sterically preventing the 43S pre-initiation complex from scanning toward the AUG start codon [6].',
              'ফেরিটিন তৈরির অনুবাদ নিয়ন্ত্রণ করে IRP প্রোটিন ও IRE হেয়ারপিন ভাঁজ [১, ৬]। কোষে আয়রন কমে গেলে IRP প্রোটিন ফেরিটিনের মেসেঞ্জার আরএনএ-র মুখের ওপর এমন শক্তভাবে বসে থাকে যে রাইবোজোম প্রোটিন তৈরি শুরু করার সংকেত খুঁজে পায় না [৬]। এর ফলে নতুন ফেরিটিন তৈরি সাথে সাথে বন্ধ হয়ে যায় [৬]।'
            ),
            l(
              'Simultaneously, IRP binding to five IRE stem-loops located within the 3\'-UTR of transferrin receptor-1 (TfR1) mRNA blocks an endonucleolytic cleavage site recognized by Regnase-1 [6]. This extends the half-life of TfR1 mRNA from minutes to hours, massively upregulating transferrin receptor density on the cell surface to maximize receptor-mediated endocytosis of circulating diferric transferrin [1, 6].',
              'একই সময়ে IRP প্রোটিন ট্রান্সফারিন রিসেপ্টর-১ (TfR1) এর মেসেঞ্জার আরএনএ-র পেছনের অংশে বসে একে কাটার হাত থেকে রক্ষা করে [৬]। ফলে এই আরএনএ-র আয়ু কয়েক মিনিট থেকে বেড়ে কয়েক ঘণ্টায় পৌঁছায় এবং কোষের পর্দায় শত শত নতুন ট্রান্সফারিন রিসেপ্টর তৈরি হয়ে রক্ত থেকে দ্রুত আয়রন শুষে নেয় [১, ৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Circuitry of Hepcidin Regulation: BMP6 vs IL-6/STAT3', '৪. হেপসিডিন নিয়ন্ত্রণের আণবিক পথ: BMP6 বনাম IL-6/STAT3'),
          paragraphs: [
            l(
              'The transcriptional regulation of the hepcidin gene (HAMP) in hepatocytes represents an intricate integration of systemic iron stores and inflammatory signaling [2, 4]. Under conditions of iron sufficiency, liver sinusoidal endothelial cells secrete Bone Morphogenetic Protein 6 (BMP6), which binds to the type I/II BMP receptor complex and coreceptor Hemojuvelin (HJV) on the hepatocyte basolateral surface [2, 4].',
              'যকৃতের কোষে হেপসিডিন জিনের (HAMP) নিয়ন্ত্রণ মানবদেহের এক অত্যন্ত সূক্ষ্ম দ্বিমুখী আণবিক সংকেতের মাধ্যমে চলে [২, ৪]। শরীরে আয়রন পর্যাপ্ত থাকলে রক্তনালীর কোষ BMP6 প্রোটিন ক্ষরণ করে, যা হেপাটোসাইটের হেমোজুভেলিন (HJV) রিসেপ্টরের সাথে যুক্ত হয় [২, ৪]।'
            ),
            l(
              'Receptor engagement induces phosphorylation of receptor-activated SMADs (SMAD1, SMAD5, and SMAD8) [2, 4]. Phosphorylated SMAD1/5/8 recruits the common mediator SMAD4, forming a heterotrimeric transcriptional complex that translocates into the nucleus to bind twin BMP-responsive elements (BMP-RE1 and BMP-RE2) in the HAMP promoter, driving basal hepcidin transcription [2, 4].',
              'এই যুক্ত হওয়ার ফলে কোষের ভেতরে SMAD1/5/8 প্রোটিনগুলো ফসফোরিলেটেড হয়ে SMAD4-এর সাথে মিলিত হয় [২, ৪]। এই জটিল যৌগটি নিউক্লিয়াসে গিয়ে হেপসিডিন জিনের সুইচ চালু করে দেয়, যার ফলে রক্তে হেপসিডিন হরমোন তৈরি বৃদ্ধি পায় [২, ৪]।'
            ),
            l(
              'In parallel, inflammatory signaling bypasses the BMP pathway entirely: interleukin-6 (IL-6) secreted by activated macrophages binds the gp130/IL-6R alpha complex on hepatocytes, activating receptor-associated Janus kinase 1 (JAK1) [2, 4]. JAK1 phosphorylates STAT3 on Tyr705, driving STAT3 dimerization and nuclear translocation to bind a distinct STAT3-binding site located adjacent to the BMP-REs in the HAMP promoter [2, 4]. This produces rapid, massive transactivation of hepcidin synthesis, elevating circulating hepcidin levels up to 100-fold within hours of inflammatory challenge [2, 4].',
              'অপরদিকে প্রদাহের সংকেত এই পথ সম্পূর্ণ এড়িয়ে চলে: ম্যাক্রোফেজ থেকে ক্ষরিত IL-6 যকৃতের কোষে JAK1 এনজাইম সক্রিয় করে STAT3 প্রোটিনকে ফসফোরিলেটেড করে [২, ৪]। এই STAT3 নিউক্লিয়াসে গিয়ে হেপসিডিন জিনের আরেকটি পৃথক সুইচে বসে কয়েক ঘণ্টার মধ্যে হেপসিডিন উৎপাদন শতগুণ বাড়িয়ে দেয় [২, ৪]।'
            ),
            l(
              'Counteracting this stimulation, erythroferrone (ERFE) synthesized by erythroblasts in response to erythropoietin acts as an endocrine decoy ligand that directly binds and sequesters circulating BMP6, extinguishing SMAD signaling and suppressing hepcidin to liberate iron for erythropoiesis [2, 4]. The balance between BMP6, IL-6, and ERFE determines systemic ferroportin degradation kinetics [2, 4].',
              'এই বৃদ্ধিকে প্রতিহত করার জন্য অস্থিমজ্জার রক্তকণিকাগুলো এরিথ্রোফেরন (ERFE) হরমোন নিঃসরণ করে [২, ৪]। ERFE রক্তে ভাসমান BMP6 কে খাঁচায় বন্দি করে ফেলে যাতে যকৃত হেপসিডিন তৈরি করতে না পারে, ফলে অস্থিমজ্জা রক্ত তৈরির জন্য অবাধে আয়রন গ্রহণ করতে পারে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Clinical Interpretation of Ferritin, TSAT, sTfR and Hepcidin Panels', '৫. ফেরিটিন, TSAT, sTfR ও হেপসিডিন ল্যাবরেটরি প্যানেলের সঠিক ব্যাখ্যা'),
          paragraphs: [
            l(
              'Diagnostic workup of iron disorders requires simultaneous evaluation of circulating transport iron, cellular storage iron, and inflammatory status [1, 3]. Serum iron fluctuates diurnally by up to 30% (peaking in early morning) and falls transiently during minor systemic stress; therefore, serum iron in isolation is clinically unreliable [3]. Transferrin Saturation (TSAT), calculated as [Serum Iron (mcg/dL) / Total Iron-Binding Capacity (mcg/dL)] x 100, provides an accurate reflection of iron delivery to bone marrow erythroblasts [1, 3].',
              'আয়রন রোগের সঠিক রোগনির্ণয়ের জন্য রক্তের পরিবাহিত আয়রন, সঞ্চিত আয়রন এবং প্রদাহের মাত্রা একসাথে পরীক্ষা করা অপরিহার্য [১, ৩]। রক্তে মুক্ত আয়রন সকালে বেশি এবং বিকেলে কম থাকে; তাই শুধু সিরাম আয়রন দেখে কোনো সিদ্ধান্ত নেওয়া চিকিৎসাগতভাবে ভুল [৩]। সিরাম আয়রনকে মোট ধারণ ক্ষমতা (TIBC) দিয়ে ভাগ করে ট্রান্সফারিন স্যাচুরেশন (TSAT) বের করলে অস্থিমজ্জায় কতটুকু আয়রন পৌঁছাচ্ছে তা নিখুঁতভাবে জানা যায় [১, ৩]।'
            ),
            l(
              'Serum ferritin is the primary clinical biomarker of total body storage iron, with 1 ng/mL of circulating ferritin corresponding to approximately 8 to 10 mg of storage iron in a healthy adult [1, 3]. A serum ferritin < 30 ng/mL is virtually 100% specific for absolute iron deficiency, reflecting empty bone marrow stores [3]. However, because ferritin synthesis is transactivated by inflammatory cytokines (IL-1beta, TNF-alpha, IL-6), patients with chronic kidney disease, malignancy, or autoimmune disease frequently display ferritin levels > 100–300 ng/mL despite severe functional iron deficiency [3].',
              'সিরাম ফেরিটিন হলো শরীরের মোট আয়রন সঞ্চয়ের প্রধান নির্দেশক; রক্তে ১ ng/mL ফেরিটিন থাকা মানে শরীরে প্রায় ৮ থেকে ১০ মিলিগ্রাম আয়রন জমা আছে [১, ৩]। ফেরিটিন ৩০ ng/mL-এর নিচে নামলে তা নিশ্চিতভাবে আয়রনের শূন্য ভাণ্ডার প্রমাণ করে [৩]। কিন্তু রোগীর কোনো প্রদাহ থাকলে ফেরিটিন কৃত্রিমভাবে বেড়ে ১০০ থেকে ৩০০ ng/mL ছাড়িয়ে যেতে পারে যা আসল ঘাটতি আড়াল করে ফেলে [৩]।'
            ),
            l(
              'Soluble transferrin receptor (sTfR) is a truncated monomer of the extracellular domain of TfR1 shed into circulation by maturing erythroid precursors [3]. Because sTfR expression is governed strictly by the intracellular IRP/IRE machinery in response to iron deprivation and is unaffected by acute or chronic inflammation, sTfR measurement provides definitive differentiation between pure ACD and combined IDA + ACD [3]. An elevated sTfR-ferritin index [sTfR (mg/L) / log10 ferritin (ng/mL)] > 2.0 confirms true iron deficiency in inflamed patients [3].',
              'সলিউবল ট্রান্সফারিন রিসেপ্টর (sTfR) হলো অস্থিমজ্জার রক্তকণিকা থেকে খসে পড়া রিসেপ্টরের টুকরো [৩]। কোষে সত্যিকার অর্থে আয়রন কমে গেলেই কেবল এই রিসেপ্টর তৈরি বাড়ে এবং প্রদাহে এর কোনো পরিবর্তন হয় না [৩]। তাই জটিল প্রদাহের রোগীদের ক্ষেত্রে sTfR পরীক্ষা এবং sTfR-ferritin সূচক হিসাব করে নিশ্চিত হওয়া যায় যে রোগীর শরীরে রক্ত তৈরির কাঁচামাল ফুরিয়ে গেছে [৩]।'
            ),
            l(
              'Direct serum hepcidin quantitation via liquid chromatography-tandem mass spectrometry (LC-MS/MS) is emerging as a powerful clinical stratification tool [2, 4]. A suppressed serum hepcidin (<10 ng/mL) identifies patients who will successfully absorb oral iron supplements, whereas an elevated serum hepcidin (>20–30 ng/mL) predicts total failure of oral iron absorption, directing clinicians toward intravenous iron formulations (such as ferric carboxymaltose or ferumoxytol) that bypass enterocyte ferroportin blocks [2, 3, 4].',
              'আধুনিক ল্যাবরেটরিতে ভর-বর্ণালীমাপকের (LC-MS/MS) মাধ্যমে সরাসরি রক্তে হেপসিডিনের মাত্রা মাপা যায় [২, ৪]। হেপসিডিন কম থাকলে বোঝা যায় রোগী মুখে আয়রন ট্যাবলেট খেলে সুস্থ হবে; কিন্তু হেপসিডিন বেশি থাকলে মুখে কোনো ওষুধ না দিয়ে সরাসরি শিরার মাধ্যমে ইনজেকশন (IV Iron) প্রয়োগ করতে হবে [২, ৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis: Closed Thermodynamic Flux and Clinical Paradigms', '৬. প্রাতিষ্ঠানিক সমন্বয়: বদ্ধ থার্মোডাইনামিক প্রবাহ ও ক্লিনিক্যাল রূপরেখা'),
          paragraphs: [
            l(
              'In summary, human iron homeostasis represents an extraordinary evolutionary solution to the chemical hazard of transition metal toxicity [1, 2]. By relying on high-capacity reticuloendothelial macrophage recycling to supply 95% of daily erythrocyte turnover, the human body shields itself from the catastrophic radical risks of massive dietary absorption [1, 2].',
              'সংক্ষেপে, মানবদেহের আয়রন নিয়ন্ত্রণ ব্যবস্থা হলো রূপান্তরশীল ধাতুর বিষক্রিয়া এড়ানোর এক অসাধারণ বিবর্তনীয় রূপরেখা [১, ২]। প্রতিদিনের প্রয়োজনীয় আয়রনের ৯৫% প্লীহার ম্যাক্রোফেজ থেকে উদ্ধার করার মাধ্যমে মানবদেহ খাদ্য থেকে অতিরিক্ত মুক্ত আয়রন গ্রহণের ঝুঁকি থেকে নিজেকে বাঁচিয়ে রাখে [১, ২]।'
            ),
            l(
              'The molecular triad of DCYTB, DMT1, and Ferroportin-1 governs enterocyte transepithelial flux, while intracellular ferritin nanocages and IRP1/2 switches maintain cytoplasmic labile iron below cytotoxic nanomolar thresholds [1, 2, 6].',
              'অন্ত্রে DCYTB, DMT1 এবং ফেরোপোর্টিন-১ এই তিনটি চ্যানেল আয়রন শোষণ ও রক্তে নির্গমন নিয়ন্ত্রণ করে, আর কোষের ভেতরের ফেরিটিন খাঁচা ও IRP সুইচগুলো মুক্ত আয়রনকে কঠোরভাবে নিরাপদ সীমায় আবদ্ধ রাখে [১, ২, ৬]।'
            ),
            l(
              'The hepatic peptide hormone hepcidin serves as the central rheostat coordinating systemic iron availability, balancing nutritional immunity against erythropoietic demand [2, 4]. In chronic inflammatory disorders, pathological hepcidin hypersecretion traps iron in reticuloendothelial stores, producing Anemia of Chronic Disease [2, 3, 4].',
              'যকৃতের হেপসিডিন হরমোন দেহের সম্পূর্ণ আয়রন ব্যবস্থাপনার প্রধান সেনাপতি হিসেবে কাজ করে [২, ৪]। দীর্ঘস্থায়ী প্রদাহজনিত রোগে অতিরিক্ত হেপসিডিন নিঃসরণের ফলে ম্যাক্রোফেজ কোষে আয়রন বন্দি হয়ে পড়ে এবং মারাত্মক রক্তস্বল্পতা তৈরি হয় [২, ৩, ৪]।'
            ),
            l(
              'Mastery of these biochemical mechanisms empowers clinicians to apply evidence-based medical nutrition therapy: maximizing plant non-heme bioavailability with dietary ascorbate, adopting alternate-day oral iron dosing to avert hepcidin resistance, and judiciously deploying intravenous iron or hepcidin-targeted therapeutics in complex inflammatory syndromes [1, 2, 3, 4].',
              'এই আণবিক জ্ঞান চিকিৎসাবিজ্ঞানে এক নতুন মাত্রা যোগ করেছে: ভিটামিন সি দিয়ে উদ্ভিজ্জ আয়রন শোষণ বাড়ানো, হেপসিডিন প্রতিরোধ এড়াতে একদিন পর পর মুখে আয়রন খাওয়া এবং জটিল প্রদাহের ক্ষেত্রে শিরার মাধ্যমে আধুনিক ইনজেকশন প্রয়োগ করে রোগীদের সফলভাবে নিরাময় করা সম্ভব হচ্ছে [১, ২, ৩, ৪]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উচ্চতর / গবেষণা স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. Structural Cryo-EM Architecture of Ferroportin and Hepcidin Binding Cleft', '১. ফেরোপোর্টিনের ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপি ও হেপসিডিন বাইন্ডিং পকেট'),
          paragraphs: [
            l(
              'High-resolution cryo-electron microscopy and X-ray crystallography have resolved the molecular architecture of human Ferroportin-1 (FPN1 / SLC40A1) in outward-open, inward-open, and hepcidin-bound states [2, 4]. Ferroportin belongs to the Major Facilitator Superfamily (MFS), constructed from twelve transmembrane alpha-helices organized into two pseudo-symmetrical six-helix bundles: the N-domain (TM1–6) and the C-domain (TM7–12) [2].',
              'ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপির মাধ্যমে মানবদেহের ফেরোপোর্টিন-১ (FPN1) চ্যানেলের অত্যন্ত সূক্ষ্ম ত্রিমাত্রিক আণবিক নকশা উন্মোচিত হয়েছে [২, ৪]। এই চ্যানেলটি বারোটি মেমব্রেন স্প্যানিং হেলিক্স দিয়ে গঠিত যা দুটি অংশে বিভক্ত: এন-ডোমেন এবং সি-ডোমেন [২]।'
            ),
            l(
              'Iron export operates through an alternating-access rocker-switch mechanism [2]. In the inward-open conformation, cytoplasmic ferrous iron binds to an iron-coordinating site formed by conserved residues Asp39, His43, and Cys326 [2]. Transport is coupled to conformational rocking of the N- and C-domains around a central inter-domain pivot, exposing the iron ion to the extracellular space in the outward-open conformation for oxidation by hephaestin [2].',
              'আয়রন বের করার কাজটি একটি রকার-সুইচ মেকানিজমের মাধ্যমে সম্পন্ন হয় [২]। কোষের ভেতরের Fe2+ আয়রন চ্যানেলের মুখে থাকা বিশেষ অ্যাসিডিক অ্যামিনো অ্যাসিডের খাঁজে বসে [২]। এরপর চ্যানেলটি নিজের গঠন উল্টে দিয়ে বাইরের দিকে মুখ খোলে এবং আয়রনকে রক্তনালীর দিকে ঠেলে দেয় [২]।'
            ),
            l(
              'Cryo-EM of the hepcidin–ferroportin complex reveals that the 25-amino-acid hepcidin peptide inserts deeply into the central outward-facing cavity between the N- and C-terminal bundles [2, 4]. The N-terminus of hepcidin (specifically Asp1, Thr2, His3, and Phe4) coordinates a calcium ion and inserts into a hydrophobic pocket, with the free thiol of Cys326 forming a steric occlusion that physically blocks the iron exit path [2, 4].',
              'ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপিতে দেখা গেছে হেপসিডিন হরমোনটি ফেরোপোর্টিন চ্যানেলের ঠিক মাঝখানের খাঁজে প্লাগের মতো শক্ত হয়ে সেঁটে বসে [২, ৪]। হেপসিডিনের সামনের অংশটি চ্যানেলের মুখের মধ্যে ঢুকে একটি ক্যালসিয়াম আয়ন ধরে ফেলে এবং আয়রন বের হওয়ার রাস্তাটি সম্পূর্ণ সিল করে দেয় [২, ৪]।'
            ),
            l(
              'Hepcidin binding stabilizes an outward-facing intermediate that triggers conformational ubiquitination of cytoplasmic lysine residues (Lys247 and Lys258) by E3 ubiquitin ligases, recruiting adaptor protein AP-2 and clathrin to drive endocytosis and lysosomal degradation [2, 4]. Naturally occurring gain-of-function FPN1 mutations that confer hepcidin resistance (such as C326S or C326Y) cause Type 4 Hereditary Hemochromatosis (Ferroportin disease), characterized by uninhibited iron export and severe systemic iron overload [2, 4].',
              'হেপসিডিন যুক্ত হওয়ার সাথে সাথে কোষের ভেতরের অংশে বিশেষ ইউবিকুইটিন প্রোটিন সংকেত যুক্ত হয়, যা চ্যানেলটিকে মেমব্রেন থেকে তুলে নিয়ে কোষের লাইসোজোমে ফেলে ধ্বংস করে দেয় [২, ৪]। ফেরোপোর্টিনের জিনগত মিউটেশন (C326S) থাকলে হেপসিডিন আর চ্যানেলে বসতে পারে না; ফলে চ্যানেল কখনো বন্ধ হয় না এবং মারাত্মক টাইপ-৪ হিমোক্রোমাটোসিস রোগ সৃষ্টি করে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Mutagenesis of Non-Heme Iron Transporters: SLC11A2 and ZIP14', '২. নন-হিম আয়রন চ্যানেলের মিউটাgenesis: SLC11A2 ও ZIP14 পথ'),
          paragraphs: [
            l(
              'Molecular dissection of Divalent Metal Transporter 1 (DMT1 / SLC11A2) has revealed the biophysical basis of its broad transition metal selectivity [1, 2]. DMT1 transports not only Fe2+, but also Mn2+, Cd2+, Co2+, Ni2+, and Pb2+ with micromolar affinities [1]. Site-directed mutagenesis identifies a conserved metal-binding motif in transmembrane domain 6 (TM6) containing an invariant Gly-Asn-Met-Asp sequence where the sulfur of methionine coordinates the soft metal cation [1].',
              'DMT1 চ্যানেলের আণবিক গবেষণায় দেখা গেছে এটি কেবল আয়রন নয়, বরং ম্যাঙ্গানিজ, ক্যাডমিয়াম এবং বিষাক্ত সিসা (Pb2+) আয়নও সমান দক্ষতায় রক্তে টেনে নেয় [১]। চ্যানেলের ভেতরে থাকা বিশেষ মেথিওনিন অ্যামিনো অ্যাসিডের সালফার পরমাণু এই ধাতুগুলোকে ধরে ভেতরে নিয়ে আসে [১]।'
            ),
            l(
              'A clinically devastating natural mutation in DMT1—the homozygous E399del or G212V missense mutation—disrupts channel gating kinetics, severely compromising apical intestinal iron import [1]. Paradoxically, patients with congenital DMT1 mutations develop severe microcytic hypochromic anemia accompanied by progressive hepatic iron overload [1]. Why does iron accumulate in the liver if intestinal DMT1 is defective? The answer lies in alternative iron transporters, predominantly ZIP14 [1].',
              'DMT1 জিনের বংশগত মিউটেশনের কারণে অন্ত্রে খাদ্য থেকে আয়রন শোষণ চরমভাবে ব্যাহত হয় [১]। কিন্তু আশ্চর্যজনকভাবে এই রোগীদের যকৃতে প্রচুর আয়রন জমতে থাকে [১]। অন্ত্রে আয়রন ঢুকতে না পারলে যকৃতে কীভাবে আয়রন জমে? এর উত্তর হলো বিকল্প চ্যানেল ZIP14 [১]।'
            ),
            l(
              'ZIP14 (SLC39A14), originally characterized as a zinc transporter, functions as a high-capacity, non-transferrin-bound iron (NTBI) importer in hepatocytes and pancreatic acinar cells [1, 3]. In DMT1-deficient patients or severe hemochromatosis where circulating transferrin becomes 100% saturated, free non-transferrin-bound iron (NTBI) surges in plasma [1, 3]. ZIP14 avidly imports this unchaperoned iron directly into hepatocytes, driving severe parenchymal iron overload despite profound erythroid anemia [1, 3].',
              'ZIP14 মূলত একটি জিঙ্ক চ্যানেল হলেও এটি রক্তে ট্রান্সফারিন ছাড়া ঘুরে বেড়ানো মুক্ত আয়রনকে (NTBI) অতি দ্রুত যকৃত ও অগ্ন্যাশয়ে টেনে নেয় [১, ৩]। রক্তে ট্রান্সফারিন যখন উপচে পড়ে, তখন এই ZIP14 চ্যানেল যকৃতের কোষের ভেতর অনবরত বিষাক্ত মুক্ত আয়রন ঢোকাতে থাকে এবং লিভার সিরোসিস ঘটায় [১, ৩]।'
            ),
            l(
              'Furthermore, intestinal iron hyperabsorption in DMT1-sparing hemochromatosis is mediated by basolateral ferroportin uncoupling [1, 2]. These discoveries highlight the functional redundancy of mammalian metal transport networks, demonstrating that selective channel blockades must account for compensatory bypass pathways [1, 3].',
              'এই গবেষণাগুলো প্রমাণ করে মানবদেহে ধাতু পরিবহনের জন্য একাধিক বিকল্প পথ রয়েছে; তাই একটি চ্যানেল বন্ধ করতে গেলে বিকল্প চ্যানেলগুলোর আচরণও সতর্কতার সাথে বিবেচনা করতে হবে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Ferritinophagy: NCOA4-Mediated Autophagic Iron Mobilization', '৩. ফেরিটিনোফ্যাজি: NCOA4-নির্ভর অটোফ্যাজিক আয়রন মুক্তি'),
          paragraphs: [
            l(
              'The historical paradigm that iron stored within ferritin is liberated by non-specific proteolytic dissolution has been completely overthrown by the discovery of Ferritinophagy—a selective autophagic pathway dedicated to ferritin degradation [1, 6]. Ferritinophagy is orchestrated by Nuclear Receptor Coactivator 4 (NCOA4), a specialized cargo receptor that binds ferritin with nanomolar affinity [6].',
              'ফেরিটিনের ভেতরে জমা থাকা আয়রন কীভাবে বাইরে বের হয় সে সম্পর্কিত পুরোনো ধারণা বদলে গেছে ফেরিটিনোফ্যাজি (Ferritinophagy) নামক এক বিশেষ অটোফ্যাজি পথ আবিষ্কারের মাধ্যমে [১, ৬]। এই কাজের প্রধান চাবিকাঠি হলো NCOA4 নামক একটি বিশেষ কার্গো রিসেপ্টর প্রোটিন যা ফেরিটিন খাঁচার গায়ে শক্তভাবে যুক্ত হয় [৬]।'
            ),
            l(
              'Structural crystallography demonstrates that a conserved C-terminal domain of NCOA4 binds specifically to the surface-exposed alpha-helical loop of the ferritin Heavy chain (FTH1) around Arg23 [6]. Upon binding, NCOA4 recruits the autophagy machinery—specifically engaging ATG8-family proteins (LC3/GABARAP)—to engulf the ferritin nanocage into a double-membrane autophagosome, which fuses with a lysosome to form an autolysosome [6].',
              'ক্রিস্টালোগ্রাফিতে দেখা গেছে NCOA4 প্রোটিনটি ফেরিটিনের ভারী চেইনের গায়ে বিশেষ Arg23 অ্যামিনো অ্যাসিডে আটকে যায় [৬]। এরপর এটি অটোফ্যাজির এলসি৩ (LC3) প্রোটিনকে ডেকে এনে পুরো ফেরিটিন খাঁচাটিকে একটি পর্দার ভেতর বন্দি করে সোজা লাইসোজোমে নিয়ে যায় [৬]।'
            ),
            l(
              'Within the acidic lysosomal lumen, lysosomal acid proteases (cathepsins B and D) digest the protein shell, solubilizing the ferrihydrite mineral core [6]. The liberated Fe2+ ions are transported across the lysosomal membrane into the cytoplasm via lysosomal DMT1 and TRPML1 (Transient Receptor Potential Mucolipin 1), restocking the labile iron pool for mitochondrial heme synthesis or ferroportin export [1, 6].',
              'লাইসোজোমের তীব্র অ্যাসিডে ফেরিটিনের প্রোটিন খাঁচাটি গলে যায় এবং জমা থাকা পাথরের মতো আয়রন গলে তরল Fe2+ আয়রনে পরিণত হয় [৬]। এরপর লাইসোজোমের দেয়ালের DMT1 চ্যানেলের মাধ্যমে মুক্ত আয়রন সাইটোপ্লাজমে ফিরে এসে নতুন হিমোগ্লোবিন তৈরিতে যোগ দেয় [১, ৬]।'
            ),
            l(
              'NCOA4 stability is itself governed by an iron-sensing mechanism: when cellular iron is abundant, iron directly promotes the binding of NCOA4 to the HERC2 E3 ubiquitin ligase, targeting NCOA4 for proteasomal degradation and halting ferritinophagy [6]. Under iron deficiency, HERC2-mediated degradation is inhibited, stabilizing NCOA4 to accelerate ferritin degradation and release stored iron [6]. Disruption of ferritinophagy leads to neurodegenerative iron accumulation syndromes [6].',
              'NCOA4 প্রোটিনটিও কোষে আয়রনের মাত্রা দেখে কাজ করে: কোষে আয়রন বেশি থাকলে এটি নিজে থেকেই নষ্ট হয়ে যায় যাতে অযথা ফেরিটিন না ভাঙে; আর আয়রন কমে গেলে এটি দ্রুত সচল হয়ে ফেরিটিনের সঞ্চয় ভেঙে কোষকে বাঁচিয়ে রাখে [৬]। এই পথটি নষ্ট হলে মস্তিষ্কে আয়রন জমে মারাত্মক স্নায়ুরোগ সৃষ্টি হয় [৬]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Matriptase-2 (TMPRSS6) Signaling and Erythroferrone (ERFE) Biology', '৪. ম্যাট্রিপটেজ-২ (TMPRSS6) এনজাইম ও এরিথ্রোফেরন (ERFE) শারীরবৃত্ত'),
          paragraphs: [
            l(
              'The essential negative regulator of hepatic hepcidin synthesis is Matriptase-2, a type II transmembrane serine protease encoded by the TMPRSS6 gene located on the hepatocyte plasma membrane [2, 4]. TMPRSS6 acts as a molecular scissors: its extracellular catalytic domain cleaves the membrane-anchored BMP coreceptor Hemojuvelin (HJV), releasing soluble HJV fragments that fail to assemble active BMP receptor signaling complexes [2, 4].',
              'যকৃতে হেপসিডিন তৈরি কমানোর প্রধান প্রাকৃতিক কাঁচি হলো Matriptase-2 (TMPRSS6), যা হেপাটোসাইটের কোষপর্দায় বসানো থাকে [২, ৪]। এই এনজাইমটি যকৃতের হেমোজুভেলিন (HJV) রিসেপ্টরকে কেটে টুকরো করে দেয়, যার ফলে BMP সংকেত থমকে যায় এবং হেপসিডিন উৎপাদন বন্ধ থাকে [২, ৪]।'
            ),
            l(
              'Loss-of-function homozygous mutations in TMPRSS6 cause Iron-Refractory Iron Deficiency Anemia (IRIDA), a severe genetic disorder characterized by inappropriately elevated serum hepcidin despite profound total body iron starvation [3, 4]. Because hepcidin remains constitutively hyper-elevated, enterocyte ferroportin is perpetually degraded, making patients completely refractory to oral iron supplementation [3, 4]. Treatment requires repeated high-dose intravenous iron or experimental anti-hepcidin monoclonal antibodies [2, 3].',
              'TMPRSS6 জিনে জন্মগত ত্রুটি থাকলে IRIDA নামক এক মারাত্মক রোগ হয় [৩, ৪]। এই রোগীদের শরীরে চরম রক্তস্বল্পতা থাকা সত্ত্বেও যকৃত পাগলের মতো অতিরিক্ত হেপসিডিন তৈরি করতেই থাকে; ফলে অন্ত্রের সব চ্যানেল বন্ধ থাকে এবং মুখে কোনো আয়রন ট্যাবলেট কাজ করে না [৩, ৪]। এদের কেবল শিরার মাধ্যমে ইনজেকশন বা আধুনিক হেপসিডিন-দমনকারী অ্যান্টিবডি দিয়ে চিকিৎসা করতে হয় [২, ৩]।'
            ),
            l(
              'On the erythroid side, Erythroferrone (ERFE) is synthesized and secreted by erythroblasts in the bone marrow and spleen within hours of erythropoietin (EPO) stimulation [2, 4]. Circulating ERFE acts as an endocrine hormone that directly binds BMP6 and BMP2 with nanomolar affinity, sequestering these ligands away from hepatocyte BMP receptors [4]. This extinguishes downstream SMAD1/5/8 phosphorylation and potently represses hepcidin gene transcription [2, 4].',
              'অপরদিকে অস্থিমজ্জায় রক্ত তৈরির তাগিদ দেখা দিলে লোহিত রক্তকণিকাগুলো এরিথ্রোফেরন (ERFE) নামক হরমোন তৈরি করে [২, ৪]। রক্তে ভাসমান ERFE গিয়ে BMP6 প্রোটিনকে শক্তভাবে বেঁধে ফেলে যাতে তা যকৃতের রিসেপ্টরে বসতে না পারে [৪]। এর ফলে যকৃতে হেপসিডিন তৈরি বন্ধ হয়ে যায় এবং রক্তে প্রচুর আয়রন প্রবেশ করে [২, ৪]।'
            ),
            l(
              'In conditions of ineffective erythropoiesis—most notably non-transfusion-dependent beta-thalassemia and congenital dyserythropoietic anemias—expanded masses of apoptotic erythroblasts secrete immense, uninhibited quantities of ERFE [2, 4]. Chronic ERFE hypersecretion completely suppresses hepatic hepcidin, driving lifelong uncontrolled duodenal iron hyperabsorption that causes lethal systemic iron overload, cirrhosis, and heart failure even in patients who have never received a blood transfusion [2, 4].',
              'থ্যালাসেমিয়া রোগে অস্থিমজ্জার বিকলাঙ্গ রক্তকণিকাগুলো বিপুল পরিমাণে ERFE তৈরি করে যকৃতের হেপসিডিন উৎপাদন চিরতরে বন্ধ করে দেয় [২, ৪]। এর ফলে কোনো রক্ত সঞ্চালন না নিলেও এই রোগীরা খাবার থেকে অতিরিক্ত আয়রন শুষে নেয় এবং সেই আয়রন যকৃত ও হার্টে জমে রোগীকে অকালে মৃত্যুর দিকে ঠেলে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Rare Iron Channelopathies: Atransferrinemia, Aceruloplasminemia & IRIDA', '৫. বিরল আয়রন রোগ: অ্যাট্রান্সফেরিনেমিয়া, অ্যাসিরুলোপ্লাজমিনেমিয়া ও IRIDA'),
          paragraphs: [
            l(
              'Monogenic disorders of iron trafficking illustrate the indispensable function of individual pathway components [1, 3]. Congenital atransferrinemia is an exceptionally rare autosomal recessive disorder caused by mutations in the TF gene encoding serum transferrin [1]. Because transferrin is virtually absent in plasma, iron cannot be safely chaperoned to bone marrow erythroblasts, causing severe transfusion-dependent microcytic hypochromic anemia with growth failure [1].',
              'বংশগত একক জিনের ত্রুটি মানবদেহের আয়রন চলাচলের জটিল পথগুলো স্পষ্টভাবে তুলে ধরে [১, ৩]। অ্যাট্রান্সফেরিনেমিয়া হলো এমন একটি অতি বিরল রোগ যাতে রক্তে ট্রান্সফারিন প্রোটিন থাকেই না [১]। কোনো বাহক প্রোটিন না থাকায় আয়রন অস্থিমজ্জায় পৌঁছাতে পারে না, ফলে শিশু মারাত্মক রক্তাল্পতায় ভোগে এবং রক্ত সঞ্চালন ছাড়া বাঁচতে পারে না [১]।'
            ),
            l(
              'Paradoxically, in atransferrinemic patients, unabsorbed iron circulates as toxic non-transferrin-bound iron (NTBI) that is avidly taken up by hepatocyte ZIP14 channels, producing lethal hepatic cirrhosis and cardiac failure in early childhood [1, 3]. Infusion of purified human transferrin completely reverses the anemia and mobilizes parenchymal iron back to the bone marrow [1].',
              'আশ্চর্যজনকভাবে এই রোগীদের রক্তে মুক্ত আয়রন ZIP14 চ্যানেলের মাধ্যমে যকৃতে ঢুকে শৈশবেই লিভার সিরোসিস ঘটায় [১, ৩]। এই শিশুদের রক্তে বিশুদ্ধ ট্রান্সফারিন ইনজেকশন দিলে অলৌকিকভাবে রক্তস্বল্পতা নিরাময় হয় এবং যকৃতের বিষাক্ত আয়রন অস্থিমজ্জায় ফিরে আসে [১]।'
            ),
            l(
              'Aceruloplasminemia is caused by loss-of-function mutations in the CP gene encoding the multicopper ferroxidase ceruloplasmin [1, 3]. Because ceruloplasmin is required to oxidize Fe2+ exported by Ferroportin into Fe3+ for transferrin loading, lack of ferroxidase activity halts iron export from macrophages, hepatocytes, and cerebral astrocytes [1, 3]. Iron progressively accumulates inside the basal ganglia, retina, and pancreatic islets, causing the classic adult triad of extrapyramidal movement disorders (ataxia, chorea), retinal degeneration, and diabetes mellitus [1, 3].',
              'অ্যাসিরুলোপ্লাজমিনেমিয়া রোগে সিরুলোপ্লাজমিন এনজাইম নষ্ট থাকায় ফেরোপোর্টিন দিয়ে বের হওয়া আয়রন Fe3+ তে জারিত হতে পারে না [১, ৩]। ফলে ম্যাক্রোফেজ ও মস্তিষ্কের স্নায়ুকোষ থেকে আয়রন বের হতে না পেরে মস্তিষ্ক ও অগ্ন্যাশয়ে মারাত্মকভাবে জমে যায় এবং রোগীর হাত-পা কাঁপুনি, দৃষ্টিশক্তিহীনতা ও ডায়াবেটিস দেখা দেয় [১, ৩]।'
            ),
            l(
              'Differential diagnosis of these rare channelopathies requires specialized biochemical assays: absent transferrin on protein electrophoresis confirms atransferrinemia, undetectable serum ceruloplasmin and ferroxidase activity with low serum copper diagnoses aceruloplasminemia, and elevated hepcidin with refractory microcytic anemia in childhood points to IRIDA [1, 3].',
              'এই বিরল রোগগুলো শনাক্ত করতে বিশেষ ল্যাবরেটরি পরীক্ষা প্রয়োজন: প্রোটিন ইলেক্ট্রোফোরেসিস করে ট্রান্সফারিন না পাওয়া গেলে অ্যাট্রান্সফেরিনেমিয়া এবং রক্তে সিরুলোপ্লাজমিন শূন্য পাওয়া গেলে অ্যাসিরুলোপ্লাজমিনেমিয়া নিশ্চিত করা হয় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Frontiers: Hepcidin Mimetics, Antagonists & RNAi Therapeutics', '৬. অনুবাদমূলক গবেষণা: কৃত্রিম হেপসিডিন, অ্যান্টিবডি ও আরএনএ থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'Translational pharmacology targeting the hepcidin-ferroportin axis has unlocked revolutionary therapeutics across hematology and metabolic disease [2, 4]. In polycythemia vera and non-transfusion-dependent thalassemia, synthetic hepcidin mimetics—such as Rusfertide (PTG-300), a stabilized 18-amino-acid peptide analogue—bind ferroportin to mimic hepcidin activity [2, 4]. By selectively restricting iron delivery to the bone marrow, rusfertide eliminates the need for therapeutic phlebotomies in polycythemia vera while controlling systemic erythroid mass [4].',
              'হেপসিডিন-ফেরোপোর্টিন নিয়ন্ত্রণের ওপর ভিত্তি করে আধুনিক চিকিৎসাবিজ্ঞানে বৈপ্লবিক ওষুধের উদ্ভাবন ঘটেছে [২, ৪]। পলিসাইথিমিয়া এবং থ্যালাসেমিয়া রোগে রাসফারটাইড (Rusfertide) নামক কৃত্রিম হেপসিডিন ওষুধ প্রয়োগ করা হচ্ছে যা ফেরোপোর্টিন চ্যানেল বন্ধ করে অস্থিমজ্জায় আয়রনের অতিরিক্ত জোগান কমিয়ে দেয় এবং রক্ত ঘন হওয়া নিয়ন্ত্রণ করে [২, ৪]।'
            ),
            l(
              'Conversely, for the treatment of Anemia of Chronic Disease, monoclonal antibodies directed against hepcidin or its coreceptor Hemojuvelin (HJV) neutralize circulating hepcidin, restoring ferroportin activity on macrophages and enterocytes to mobilize trapped iron and cure refractory inflammatory anemias without blood transfusions [2, 4].',
              'বিপরীতে দীর্ঘস্থায়ী প্রদাহজনিত রক্তস্বল্পতায় হেপসিডিন-দমনকারী মনোক্লোনাল অ্যান্টিবডি ব্যবহার করা হচ্ছে [২, ৪]। এই ওষুধগুলো অতিরিক্ত হেপসিডিনকে নিষ্ক্রিয় করে দিয়ে ফেরোপোর্টিন চ্যানেলগুলোকে মুক্ত করে দেয়, ফলে কোষে আটকে থাকা আয়রন বেরিয়ে রক্তকণিকা তৈরিতে অংশ নেয় এবং রক্তাল্পতা দূর হয় [২, ৪]।'
            ),
            l(
              'Furthermore, small interfering RNA (siRNA) therapeutics targeting TMPRSS6 (such as ALN-TMP) downregulate matriptase-2 to stimulate endogenous hepcidin production, providing a sustained genetic therapy to suppress iron absorption and prevent toxic parenchymal organ damage in beta-thalassemia and hereditary hemochromatosis [2, 4].',
              'তাছাড়া আধুনিক আরএনএ (siRNA) ওষুধ প্রয়োগ করে জিন পর্যায়ে হেপসিডিনের মাত্রা সমন্বয় করার গবেষণা চলছে, যা থ্যালাসেমিয়া ও হিমোক্রোমাটোসিস রোগীদের আজীবন রক্তনালী ও যকৃতের বিষক্রিয়া থেকে রক্ষা করবে [২, ৪]।'
            ),
            l(
              'In conclusion, the convergence of molecular crystallography, genetics, and clinical trials has transformed iron biology from a descriptive science into a precision molecular discipline, empowering healthcare providers to design customized nutritional and pharmacological regimens that optimize human health across the globe [1, 2, 3, 4, 6].',
              'উপসংহারে, আণবিক গঠন, বংশগতিবিদ্যা এবং আধুনিক ক্লিনিক্যাল গবেষণার সমন্বয়ে আয়রন বায়োলজি আজ এক নিখুঁত বিজ্ঞানে পরিণত হয়েছে, যা বিশ্বজুড়ে মানুষকে রক্তস্বল্পতা ও জটিল বিপাকীয় রোগ থেকে মুক্ত রাখার এক নতুন শক্তি জোগাচ্ছে [১, ২, ৩, ৪, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing dietary iron intake, enterocyte transport via DCYTB and DMT1, intracellular ferritin buffering, basolateral ferroportin export with hephaestin oxidation, transferrin systemic delivery, splenic macrophage recycling, and hepatic hepcidin-mediated degradation.',
      'খাদ্যের আয়রন গ্রহণ, DCYTB ও DMT1 দ্বারা এন্টারোসাইটে শোষণ, ফেরিটিনে সঞ্চয়, হেফেস্টিন সহযোগে ফেরোপোর্টিন দিয়ে নির্গমন, ট্রান্সফেরিন পরিবহন, প্লীহার ম্যাক্রোফেজ দ্বারা পুনর্ব্যবহার এবং যকৃতের হেপসিডিন দ্বারা ফেরোপোর্টিন ধ্বংসের প্রবাহচিত্র।'
    ),
    steps: [
      l(
        'Step 1: Luminal non-heme ferric iron (Fe3+) is reduced by apical enterocyte DCYTB in the presence of ascorbic acid and imported into the cell via proton-coupled DMT1 (SLC11A2).',
        'ধাপ ১: খাদ্য থেকে প্রাপ্ত অদ্রবণীয় Fe3+ ব্রাশ-বর্ডারের DCYTB ও ভিটামিন সি দ্বারা বিজারিত হয়ে DMT1 চ্যানেলের মাধ্যমে কোষে প্রবেশ করে।'
      ),
      l(
        'Step 2: Cytoplasmic iron is safely sequestered inside 24-subunit ferritin nanocages via H-subunit ferroxidation, regulated post-transcriptionally by the IRP/IRE sensory network.',
        'ধাপ ২: অতিরিক্ত আয়রন ২৪-সাবইউনিটের ফেরিটিন খাঁচায় নিরাপদে জমা থাকে, যা IRP/IRE আণবিক সেন্সর দ্বারা নিয়ন্ত্রিত হয়।'
      ),
      l(
        'Step 3: Ferrous iron is exported across the basolateral membrane into the bloodstream via Ferroportin-1 and instantly oxidized to Fe3+ by Hephaestin for high-affinity loading onto serum apotransferrin.',
        'ধাপ ৩: আয়রন ফেরোপোর্টিন-১ চ্যানেলের মাধ্যমে রক্তে নির্গত হয় এবং হেফেস্টিন এনজাইম দ্বারা জারিত হয়ে ট্রান্সফেরিন প্রোটিনে লোড হয়।'
      ),
      l(
        'Step 4: Circulating Hepcidin secreted by hepatocytes binds Ferroportin-1, inducing ubiquitination, endocytosis, and lysosomal degradation to block iron absorption and macrophage recycling during iron repletion or systemic inflammation.',
        'ধাপ ৪: যকৃতের হেপসিডিন হরমোন ফেরোপোর্টিন চ্যানেলে যুক্ত হয়ে এন্ডোসাইটোসিসের মাধ্যমে লাইসোজোমে চ্যানেলটিকে ধ্বংস করে দেয়, ফলে রক্তে আয়রন প্রবেশ বন্ধ হয়ে যায়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 54-year-old patient with active Crohn’s disease presents with microcytic anemia (Hb 8.8 g/dL, MCV 73 fL). Routine biochemistry reveals: Serum Iron = 24 mcg/dL, TIBC = 210 mcg/dL, Transferrin Saturation = 11.4%, Serum Ferritin = 290 ng/mL, and high-sensitivity CRP = 38 mg/L. Soluble transferrin receptor (sTfR) is markedly elevated at 4.6 mg/L (sTfR-ferritin index = 1.87). Why did standard oral ferrous sulfate fail to correct the patient’s anemia, and what is the optimal clinical management?',
      'সক্রিয় ক্রোনস ডিজিজে আক্রান্ত ৫৪ বছর বয়সী এক রোগীর রক্তাল্পতা দেখা দিয়েছে (Hb ৮.৮ g/dL, MCV ৭৩ fL)। পরীক্ষায় দেখা গেল সিরাম আয়রন = ২৪ mcg/dL, TIBC = ২১০ mcg/dL, TSAT = ১১.৪%, সিরাম ফেরিটিন = ২৯০ ng/mL, এবং CRP = ৩৮ mg/L। সলিউবল ট্রান্সফারিন রিসেপ্টর (sTfR) বেড়ে ৪.৬ mg/L এ পৌঁছেছে। মুখে সাধারণ আয়রন ট্যাবলেট খাওয়ানো সত্ত্বেও কেন রক্ত বাড়ল না এবং এর সঠিক চিকিৎসা কী?'
    ),
    options: [
      l(
        'Systemic inflammatory IL-6 induces hepatic STAT3 phosphorylation, driving massive hepcidin secretion that degrades enterocyte and macrophage ferroportin-1; oral iron cannot be exported into circulation and worsens bowel inflammation, while elevated sTfR confirms true co-existing marrow iron hunger that mandates intravenous iron therapy.',
        'প্রদাহের কারণে নির্গত IL-6 যকৃতে প্রচুর হেপসিডিন হরমোন তৈরি করায় তা অন্ত্র ও ম্যাক্রোফেজের ফেরোপোর্টিন চ্যানেল ধ্বংস করে দিয়েছে; ফলে মুখে খাওয়া আয়রন রক্তে ঢুকতে না পেরে উল্টো অন্ত্রের প্রদাহ বাড়ায়, আর উচ্চ sTfR প্রমাণ করে অস্থিমজ্জায় তীব্র আয়রন ক্ষুধা রয়েছে যার জন্য সরাসরি শিরার মাধ্যমে (IV Iron) ইনজেকশন দেওয়া অপরিহার্য।'
      ),
      l(
        'Crohn’s disease mutates the HFE C282Y gene in duodenal enterocytes, completely abolishing apical DCYTB ferric reductase activity.',
        'ক্রোনস ডিজিজে HFE জিনের মিউটেশনের কারণে DCYTB এনজাইম নষ্ট হয়ে যায়।'
      ),
      l(
        'Dietary phytates in the colon actively hydrolyze all circulating serum transferrin molecules, causing renal excretion of free iron.',
        'খাবারের ফাইটেট রক্তের ট্রান্সফারিন প্রোটিন নষ্ট করে প্রস্রাব দিয়ে আয়রন বের করে দেয়।'
      ),
      l(
        'Inflammation suppresses parathyroid hormone, causing total failure of bone marrow hydroxyapatite crystallization.',
        'প্রদাহের কারণে প্যারাথাইরয়েড হরমোন কমে যাওয়ায় অস্থিমজ্জায় রক্ত তৈরি বন্ধ হয়ে যায়।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'In active inflammatory bowel disease, elevated interleukin-6 (IL-6) acts on hepatocytes via the JAK/STAT3 pathway to hyper-stimulate hepcidin gene (HAMP) transcription. Elevated circulating hepcidin binds enterocyte basolateral Ferroportin-1 (FPN1), inducing its ubiquitination, internalisation, and lysosomal degradation. Without functional ferroportin, absorbed oral iron remains trapped inside duodenal enterocytes, providing zero bioavailability while promoting mucosal oxidative stress and colonic dysbiosis. The elevated sTfR and high sTfR-ferritin index confirm co-existing absolute erythroid iron deficiency that requires intravenous iron (such as ferric carboxymaltose) to bypass the enterocyte mucosal block and deliver iron directly to macrophage stores and bone marrow.',
      'অন্ত্রের প্রদাহে IL-6 যকৃতে প্রচুর হেপসিডিন তৈরি করে যা এন্টারোসাইটের ফেরোপোর্টিন চ্যানেল ধ্বংস করে দেয়। ফলে মুখে খাওয়া আয়রন কোষে ঢুকলেও রক্তে পৌঁছাতে পারে না এবং পেটে প্রদাহ বাড়ায়। কিন্তু রক্তে sTfR বেশি থাকা প্রমাণ করে যে অস্থিমজ্জায় সত্যি সত্যিই আয়রনের মারাত্মক ঘাটতি রয়েছে; তাই মুখে ওষুধ না দিয়ে সরাসরি শিরার মাধ্যমে আয়রন ইনজেকশন দিয়ে অন্ত্রের বাধা এড়িয়ে অস্থিমজ্জায় কাঁচামাল পৌঁছে দিতে হবে।'
    ),
  },
}
