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
]

export const nutrition13IronBiologyLesson: LessonTopic = {
  id: 'topic.nutrition.iron-biology-hepcidin-anemia',
  slug: 'iron-biology-hepcidin-anemia',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '13 · Iron Biology: Dietary Bioavailability, Ferritin, Transferrin & Hepcidin',
    '১৩ · আয়রন বায়োলজি: খাদ্যে প্রাপ্যতা, ফেরিটিন, ট্রান্সফেরিন ও হেপসিডিন নিয়ন্ত্রণ'
  ),
  summary: l(
    'The molecular physiology of human iron metabolism: duodenal DCYTB reduction and DMT1 transport, ferritin nanocage sequestration, basolateral ferroportin export coupled to hephaestin ferroxidation, serum transferrin iron delivery, the macrophage erythrophagocytosis recycling economy, and the master hepatic hepcidin-ferroportin axis regulating systemic iron flux in health, iron deficiency anemia, and chronic inflammatory disease.',
    'মানবদেহে আয়রন বিপাকের আণবিক শারীরবৃত্ত: ডিওডেনামের DCYTB বিজারণ ও DMT1 পরিবহন, ফেরিটিন খাঁচায় লৌহ সঞ্চয়, হেফেস্টিন জারণ সহযোগে ফেরোপোর্টিন দিয়ে রক্তে নির্গমন, ট্রান্সফেরিন মাধ্যমে কোষে বিতরণ, ম্যাক্রোফেজের লোহিত রক্তকণিকা ভাঙন ও লৌহ পুনর্ব্যবহার এবং সুস্থতা, রক্তাল্পতা ও দীর্ঘস্থায়ী প্রদাহে যকৃতের হেপসিডিন-ফেরোপোর্টিন প্রধান নিয়ন্ত্রক অক্ষ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Contrast the molecular bioavailability, luminal transport mechanisms, and dietary inhibitors/enhancers of heme iron versus non-heme ferric iron.',
      'হিম লৌহ এবং নন-হিম ফেরিক লৌহের আণবিক প্রাপ্যতা, লুমিনাল শোষণ প্রক্রিয়া এবং খাদ্য উপাদানজনিত বাধা ও সহায়ক ফ্যাক্টরসমূহ বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Detail the enterocyte transport cascade: apical DCYTB ferric reductase, proton-coupled DMT1 symport, intracellular ferritin buffering, and basolateral ferroportin-1 export coupled with hephaestin ferroxidation.',
      'এন্টারোসাইটের সম্পূর্ণ লৌহ পরিবহন পথ: শীর্ষস্থ DCYTB বিজারণ, প্রোটন-সংযুক্ত DMT1 পরিবহন, অন্তকোষীয় ফেরিটিন সঞ্চয় এবং হেফেস্টিন-সহযোগে ফেরোপোর্টিন-১ নির্গমন ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Map the post-transcriptional Iron Regulatory Protein (IRP1/IRP2) and Iron-Responsive Element (IRE) stem-loop network controlling ferritin translation and transferrin receptor-1 mRNA stability.',
      'লৌহের পর্যাপ্ততা ও ঘাটতিতে IRP1/IRP2 প্রোটিন এবং IRE উপাদানের মাধ্যমে ফেরিটিন ও ট্রান্সফেরিন রিসেপ্টরের বিপরীতমুখী অনুবাদীয় নিয়ন্ত্রণ পর্যালোচনা করতে পারা।'
    ),
    l(
      'Analyze the systemic hepatic hepcidin-ferroportin axis, contrasting the laboratory profiles and therapeutic approaches of Iron Deficiency Anemia versus Anemia of Chronic Disease/Inflammation.',
      'যকৃতের হেপসিডিন-ফেরোপোর্টিন নিয়ন্ত্রণ অক্ষ বিশ্লেষণ করে আয়রন ঘাটতিজনিত রক্তাল্পতা এবং দীর্ঘস্থায়ী প্রদাহজনিত রক্তাল্পতার ল্যাবরেটরি পার্থক্য ও চিকিৎসা নির্দেশিকা নিরূপণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.nutrition.macronutrient-digestion', 'topic.nutrition.vitamin-c-trace-minerals-redox'],
  relatedTopicIds: ['topic.metabolism.heme-bilirubin-metabolism', 'topic.metabolism.glutathione-ros-redox-homeostasis'],
  references: ironRefs,
  evidenceBySection: {
    introduction: ['andrews-nejm-iron-homeostasis', 'camaschella-nejm-ida'],
    structure: ['andrews-nejm-iron-homeostasis', 'ganz-blood-hepcidin-iron'],
    mechanism: ['ganz-blood-hepcidin-iron', 'nemeth-ann-rev-hepcidin'],
    integration: ['camaschella-nejm-ida', 'hfe-nature-genetics-hemochromatosis'],
    practice: ['camaschella-nejm-ida', 'nemeth-ann-rev-hepcidin'],
    takeaways: ['andrews-nejm-iron-homeostasis', 'ganz-blood-hepcidin-iron'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Biological Paradox of Iron & Total Body Balance', '১. লৌহের জৈবিক দ্বিধা ও সার্বিক শারীরিক ভারসাম্য'), sectionId: 'introduction' },
      { id: 'sec-luminal', label: l('2. Dietary Forms, DCYTB Reduction & DMT1 Transport', '২. খাদ্যের রূপভেদ, DCYTB বিজারণ ও DMT1 পরিবহন'), sectionId: 'structure' },
      { id: 'sec-cellular', label: l('3. Ferritin Nanocages, IRP/IRE Regulation & Ferroportin', '৩. ফেরিটিন ন্যানোকেজ, IRP/IRE নিয়ন্ত্রণ ও ফেরোপোর্টিন'), sectionId: 'structure' },
      { id: 'sec-hepcidin', label: l('4. The Master Hepcidin-Ferroportin Axis & Macrophage Recycling', '৪. প্রধান হেপসিডিন-ফেরোপোর্টিন অক্ষ ও ম্যাক্রোফেজ পুনর্ব্যবহার'), sectionId: 'mechanism' },
      { id: 'sec-clinical', label: l('5. Iron Deficiency vs Anemia of Chronic Disease & Hemochromatosis', '৫. আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহের রক্তাল্পতা ও হিমোক্রোমাটোসিস'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('6. Diagnostic Biomarkers & Practice Assessment', '৬. ডায়াগনস্টিক বায়োমার্কার ও অনুশীলন মূল্যায়ন'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('7. High-Yield Takeaways', '৭. মূল শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
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
        term: l('Hepcidin', 'হেপসিডিন হরমোন'),
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
    ],
    workedExamples: [
      {
        title: l('Distinguishing True Iron Deficiency Anemia from Anemia of Chronic Disease', 'প্রকৃত আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহজনিত রক্তাল্পতার ক্লিনিক্যাল পার্থক্য নির্ণয়'),
        steps: [
          l(
            'Step 1: A 62-year-old patient with active rheumatoid arthritis presents with hemoglobin of 9.2 g/dL and microcytosis (MCV 76 fL). Initial iron panel shows low serum iron (28 ug/dL) and low transferrin saturation (11%).',
            'ধাপ ১: রিউমাটয়েড আর্থ্রাইটিসে আক্রান্ত এক রোগীর হিমোগ্লোবিন ৯.২ g/dL এবং রক্তকণিকা ছোট (MCV ৭৬ fL)। রক্তে আয়রন ও ট্রান্সফেরিন সম্পৃক্ততা উভয়ই কম পাওয়া গেছে।'
          ),
          l(
            'Step 2: Measure Serum Ferritin: The serum ferritin is elevated at 285 ug/L (reference 30–300 ug/L). In the setting of systemic inflammation, ferritin acts as an acute-phase reactant driven by IL-6, potentially masking depleted marrow stores.',
            'ধাপ ২: সিরাম ফেরিটিন পরিমাপ: ফেরিটিন ২৮৫ ug/L (উচ্চ)। প্রদাহের কারণে IL-6 ফেরিটিন বাড়িয়ে দিতে পারে যা আসল ঘাটতি আড়াল করতে পারে।'
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
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'মৌলিক স্তর'),
      sections: [
        {
          id: 'introduction',
          heading: l('1. The Biological Paradox of Iron & Total Body Balance', '১. লৌহের জৈবিক দ্বিধা ও সার্বিক শারীরিক ভারসাম্য'),
          paragraphs: [
            l(
              'Iron is an indispensable micronutrient required by virtually every human cell to coordinate oxygen transport in hemoglobin and myoglobin, sustain electron flow through mitochondrial cytochromes, and catalyze reactions in metalloenzymes [1]. In an adult, total body iron averages 3.0 to 4.0 grams in males and 2.0 to 2.5 grams in females [1]. Approximately 65% resides in erythrocyte hemoglobin, 10% in myoglobin, and 25% in macrophage and hepatocyte storage depots as ferritin [1, 2].',
              'লৌহ মানবদেহের প্রতিটি কোষের জন্য একটি অপরিহার্য ট্রেস উপাদান যা হিমোগ্লোবিনে অক্সিজেন পরিবহন, মাইটোকন্ড্রিয়ায় ইলেকট্রন প্রবাহ রক্ষা এবং মেটালো-এনজাইম পরিচালনায় কাজ করে [১]। একজন প্রাপ্তবয়স্ক পুরুষের দেহে প্রায় ৩.০ থেকে ৪.০ গ্রাম এবং নারীদের দেহে প্রায় ২.০ থেকে ২.৫ গ্রাম লৌহ থাকে [১]। এর প্রায় ৬৫% লোহিত রক্তকণিকায়, ১০% পেশিতে এবং ২৫% যকৃত ও ম্যাক্রোফেজে ফেরিটিন হিসেবে সঞ্চিত থাকে [১, ২]।'
            ),
            l(
              'Because unbound ferrous iron (Fe2+) triggers the destructive Fenton reaction, generating cytotoxic hydroxyl radicals, the human body maintains zero active physiological mechanisms for iron excretion [1, 3]. Basal iron loss is strictly fixed at 1.0 to 2.0 mg per day via skin desquamation and gut sloughing. Consequently, total body iron balance is regulated strictly and exclusively at the site of duodenal intestinal absorption [1, 3].',
              'মুক্ত আয়রন বিষাক্ত ফেন্টন বিক্রিয়ার মাধ্যমে কোষ ধ্বংস করতে পারে বলে মানবদেহে অতিরিক্ত আয়রন শরীর থেকে সক্রিয়ভাবে নিষ্কাশন করার কোনো রেচন ব্যবস্থা নেই [১, ৩]। দৈনিক মাত্র ১.০ থেকে ২.০ মিলিগ্রাম আয়রন স্বাভাবিকভাবে কোষ ঝরে পড়ার মাধ্যমে বের হয়। তাই পুরো শরীরের লৌহের মাত্রা নিয়ন্ত্রিত হয় কেবল ক্ষুদ্রান্ত্রের ডিওডেনামে শোষণের হারের ওপর [১, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Dietary Forms, DCYTB Reduction & DMT1 Transport', '২. খাদ্যের রূপভেদ, DCYTB বিজারণ ও DMT1 পরিবহন'),
          paragraphs: [
            l(
              'Dietary iron exists as heme iron (animal myoglobin/hemoglobin, 15-35% bioavailability, absorbed intact) and non-heme iron (plant foods, 2-15% bioavailability, predominantly insoluble Fe3+) [1, 3]. Luminal ferric iron must be reduced to ferrous iron by apical Duodenal Cytochrome b (DCYTB) using ascorbate as electron donor, before entering enterocytes via proton-coupled Divalent Metal Transporter 1 (DMT1) [3, 4].',
              'খাদ্যের আয়রন দুটি রূপে থাকে: হিম আয়রন (প্রাণিজ খাদ্য, ১৫-৩৫% শোষণ) এবং নন-হিম আয়রন (উদ্ভিজ্জ খাবার, ২-১৫% শোষণ, প্রধানত Fe3+) [১, ৩]। নন-হিম আয়রনকে প্রথমে শীর্ষস্থ DCYTB এনজাইম ও ভিটামিন সি দিয়ে Fe2+ এ বিজারিত হতে হয়, তারপর এটি DMT1 চ্যানেলের মাধ্যমে এন্টারোসাইট কোষে প্রবেশ করে [৩, ৪]।'
            ),
            l(
              'Ascorbic acid profoundly accelerates non-heme absorption by maintaining solubility and reducing Fe3+ [3]. Conversely, phytates in unrefined grains, polyphenols in tea and coffee, and excess calcium tightly bind ferric iron, preventing brush-border reduction and precipitating insoluble complexes [3, 4].',
              'ভিটামিন সি দ্রবণীয়তা বজায় রেখে এবং Fe3+ কে বিজারিত করে আয়রন শোষণ বহুগুণ বাড়িয়ে দেয় [৩]। পক্ষান্তরে শস্যের ফাইটেট, চা ও কফির পলিফেনল এবং অতিরিক্ত ক্যালসিয়াম আয়রন আটকে ফেলে শোষণ বন্ধ করে দেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Ferritin Storage & Ferroportin Basolateral Export', '৩. ফেরিটিনে সঞ্চয় ও ফেরোপোর্টিন দিয়ে নির্গমন'),
          paragraphs: [
            l(
              'Inside the enterocyte, iron is buffered within spherical 24-subunit ferritin nanocages, holding up to 4,500 iron atoms in a non-toxic ferrihydrite mineral core [1, 2]. When systemic demand is high, iron is exported across the basolateral membrane via Ferroportin-1 (FPN1), the sole known mammalian cellular iron exporter [2, 5].',
              'কোষের ভেতর অতিরিক্ত আয়রন ২৪-সাবইউনিটের গোলাকার ফেরিটিন ন্যানোকেজে সংরক্ষিত থাকে যা ৪,৫০০টি পরমাণু নিরাপদে ধারণ করতে পারে [১, ২]। শরীরে আয়রনের প্রয়োজন হলে তা ফেরোপোর্টিন-১ চ্যানেলের মাধ্যমে রক্তে নির্গত হয়, যা স্তন্যপায়ীদের একমাত্র আয়রন নির্গমন চ্যানেল [২, ৫]।'
            ),
            l(
              'Because plasma apotransferrin only binds ferric iron (Fe3+), basolateral export requires the multi-copper ferroxidase Hephaestin, which rapidly oxidizes exported Fe2+ to Fe3+ for safe diferric transferrin loading [2, 5].',
              'রক্তরসের ট্রান্সফেরিন কেবল Fe3+ গ্রহণ করতে পারে বলে ফেরোপোর্টিনের সাথে হেফেস্টিন এনজাইম যুক্ত থাকে, যা নির্গত Fe2+ কে দ্রুত Fe3+ এ জারিত করে ট্রান্সফেরিনে তুলে দেয় [২, ৫]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. The Hepcidin Regulatory Axis & Macrophage Recycling', '৪. হেপসিডিন নিয়ন্ত্রণ অক্ষ ও ম্যাক্রোফেজ পুনর্ব্যবহার'),
          paragraphs: [
            l(
              'Systemic iron balance is commanded by Hepcidin, a 25-amino-acid hormone secreted by hepatocytes [2, 4]. Hepcidin binds extracellular ferroportin, inducing ubiquitination, endocytosis, and lysosomal degradation [2]. This arrests duodenal absorption and traps recycled iron within reticuloendothelial macrophages of the spleen and liver, which normally recycle 20 to 25 mg of iron daily from senescent red cells [1, 2].',
              'শরীরের মোট আয়রন নিয়ন্ত্রণ করে যকৃতের হেপসিডিন হরমোন [২, ৪]। হেপসিডিন ফেরোপোর্টিন চ্যানেলে যুক্ত হয়ে এটিকে কোষে টেনে নিয়ে লাইসোজোমে ধ্বংস করে দেয় [২]। এর ফলে অন্ত্রে শোষণ স্তব্ধ হয় এবং প্লীহা ও যকৃতের ম্যাক্রোফেজে প্রতিদিন পুনর্ব্যবহার হওয়া ২০-২৫ মিলিগ্রাম আয়রন ভেতরেই আটকা পড়ে [১, ২]।'
            ),
            l(
              'Hepcidin is upregulated by high iron stores (BMP6/SMAD) and inflammatory cytokines like IL-6, but suppressed by erythropoietic drive via erythroblast-derived Erythroferrone (ERFE) [2, 4].',
              'শরীরে অতিরিক্ত আয়রন এবং প্রদাহজনিত IL-6 হেপসিডিন বাড়িয়ে দেয়; কিন্তু রক্তক্ষরণ হলে নতুন রক্ত তৈরির জন্য ERFE হরমোন হেপসিডিন উৎপাদন বন্ধ করে দেয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Iron Deficiency Anemia vs Anemia of Chronic Disease', '৫. আয়রন ঘাটতি বনাম দীর্ঘস্থায়ী প্রদাহের রক্তাল্পতা'),
          paragraphs: [
            l(
              'Iron Deficiency Anemia (IDA) features depleted storage ferritin (<30 ug/L), low transferrin saturation (<16%), high TIBC (>400 ug/dL), and microcytic hypochromic red cells [1, 3]. In contrast, Anemia of Chronic Disease (ACD) features elevated hepcidin, normal/high ferritin (>100 ug/L), low TIBC, and trapped macrophage iron [2, 4]. Oral iron is ineffective in ACD because high hepcidin blocks enterocyte ferroportin [3, 4].',
              'আয়রন ঘাটতিতে (IDA) ফেরিটিন তলানিতে নামে (<৩০ ug/L), ট্রান্সফেরিন সম্পৃক্ততা কমে (<১৬%) এবং TIBC বৃদ্ধি পায় [১, ৩]। পক্ষান্তরে প্রদাহজনিত রক্তাল্পতায় (ACD) অতিরিক্ত হেপসিডিনের কারণে ফেরিটিন স্বাভাবিক বা উচ্চ থাকে কিন্তু ম্যাক্রোফেজে আয়রন তালাবদ্ধ থাকে [২, ৪]। এ অবস্থায় মুখে আয়রন খেলে তা শোষিত হতে পারে না [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Takeaways', '৬. মূল শিক্ষণীয় সারসংক্ষেপ'),
          paragraphs: [
            l(
              'Zero excretory pathway mandates that systemic iron balance is controlled entirely at duodenal absorption [1]. Non-heme iron requires DCYTB reduction and DMT1 symport, enhanced by vitamin C [3]. Ferroportin exports Fe2+ coupled to hephaestin ferroxidation [2]. Hepcidin triggers ferroportin degradation, trapping iron and differentiating ACD from true deficiency [2, 4].',
              'রেচন পথ না থাকায় পুরো দেহের আয়রন নিয়ন্ত্রণ ডিওডেনামে শোষণের ওপর নির্ভরশীল [১]। নন-হিম আয়রন DCYTB ও DMT1 দিয়ে শোষিত হয় যা ভিটামিন সি দ্বারা ত্বরান্বিত হয় [৩]। ফেরোপোর্টিন ও হেফেস্টিন আয়রন রক্তে পাঠায় [২]। হেপসিডিন ফেরোপোর্টিন ধ্বংস করে ম্যাক্রোফেজে আয়রন আটকে রাখে [২, ৪]।'
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
          heading: l('1. Total Body Iron Kinetics & Compartmental Distribution', '১. সামগ্রিক শারীরিক আয়রন গতিবিদ্যা ও প্রকোষ্ঠ বণ্টন'),
          paragraphs: [
            l(
              'An adult body maintains 3.0 to 4.0 g elemental iron. Erythrocyte hemoglobin holds 65%, storage ferritin 25%, and myoglobin/enzymes 10% [1]. Daily red cell turnover requires 20 to 25 mg iron, delivered almost exclusively through reticuloendothelial macrophage erythrophagocytosis, while duodenal absorption balances basal losses of 1 to 2 mg/day [1, 2].',
              'দেহে মোট ৩.০-৪.০ গ্রাম আয়রনের ৬৫% হিমোগ্লোবিনে এবং ২৫% ফেরিটিনে থাকে [১]। প্রতিদিন নতুন রক্ত তৈরিতে ২০-২৫ মিলিগ্রাম আয়রন ম্যাক্রোফেজ দ্বারা পুনর্ব্যবহার হয়, আর অন্ত্র থেকে মাত্র ১-২ মিলিগ্রাম শোষণ দেহের দৈনিক ক্ষতি পূরণ করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Brush-Border Transporters: DCYTB, DMT1 & Heme Transporters', '২. ব্রাশ-বর্ডার ট্রান্সপোর্টার: DCYTB, DMT1 ও হিম চ্যানেল'),
          paragraphs: [
            l(
              'Heme iron is absorbed intact via endocytosis or putative FLVCR2/HCP1 pathways and cleaved by heme oxygenase-1 [1]. Non-heme ferric iron is reduced by DCYTB using cytosolic ascorbate and imported with protons via DMT1 (SLC11A2) [3]. Intracellular poly(rC)-binding proteins (PCBP1/2) chaperone iron through the labile iron pool [2].',
              'হিম আয়রন অক্ষত অবস্থায় প্রবেশ করে হিম অক্সিজিনেজ-১ দ্বারা বিশ্লিষ্ট হয় [১]। নন-হিম আয়রন DCYTB দিয়ে বিজারিত হয়ে DMT1 প্রোটন-সিমপোর্টার দিয়ে প্রবেশ করে এবং PCBP প্রোটিন দ্বারা পরিবাহিত হয় [২, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Post-Transcriptional IRP1/IRP2 Stem-Loop IRE Sensing', '৩. অনুবাদ-পরবর্তী IRP/IRE সংকেত নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'In iron deficiency, apoproteins IRP1 and IRP2 bind Iron-Responsive Elements (IREs) on mRNAs [1, 4]. Binding to the 5\'-UTR of ferritin and ferroportin represses translation to avoid iron sequestration. Binding to five 3\'-UTR IREs of TfR1 and DMT1 stabilizes mRNA transcripts against degradation, expanding cellular iron uptake [1, 4].',
              'আয়রনের ঘাটতিতে IRP প্রোটিনসমূহ mRNA-এর IRE লুপে আবদ্ধ হয় [১, ৪]। ফেরিটিন ও ফেরোপোর্টিনের 5\'-UTR প্রান্তে যুক্ত হয়ে এদের প্রোটিন তৈরি বন্ধ করে, আর TfR1 ও DMT1 এর 3\'-UTR প্রান্তে যুক্ত হয়ে আরএনএ টিকিয়ে রেখে রিসেপ্টর সংখ্যা বাড়ায় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Hepcidin Transcriptional Circuitry: BMP6/SMAD vs IL-6/STAT3', '৪. হেপসিডিনের ট্রান্সক্রিপশন সংকেত: BMP6/SMAD বনাম IL-6/STAT3'),
          paragraphs: [
            l(
              'Hepatocyte hepcidin transcription is stimulated by iron stores through the BMP6-HJV-SMAD1/5/8 axis and HFE-TfR2 signaling [2, 4]. Inflammatory IL-6 stimulates hepcidin independently via the JAK2/STAT3 cascade [2, 4]. Conversely, accelerated erythropoiesis secretes erythroblast Erythroferrone (ERFE), which traps BMP6 to turn off hepcidin and flood plasma with iron [2].',
              'দেহে অতিরিক্ত আয়রন BMP6/SMAD এবং HFE সংকেত দিয়ে হেপসিডিন তৈরি করে [২, ৪]। প্রদাহজনিত IL-6 সরাসরি JAK/STAT3 দিয়ে হেপসিডিন বৃদ্ধি করে [২, ৪]। রক্তক্ষরণে ইরিথ্রোফেরন (ERFE) হেপসিডিন উৎপাদন বন্ধ করে রক্তে আয়রনের প্রবাহ ঘটায় [২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Diagnostic Panel: Ferritin, TSAT, sTfR & Hemochromatosis', '৫. ডায়াগনস্টিক প্যানেল: ফেরিটিন, TSAT, sTfR ও হিমোক্রোমাটোসিস'),
          paragraphs: [
            l(
              'In pure IDA, ferritin <30 ug/L and TSAT <16% confirm depleted stores [3]. In ACD, elevated hepcidin traps iron in macrophages, raising ferritin (>100 ug/L) while depressing serum iron; elevated sTfR index differentiates true combined deficiency [3, 4]. In Hereditary Hemochromatosis (HFE C282Y mutation), hepcidin failure leads to uninhibited iron absorption and toxic parenchymal organ deposition [1, 5].',
              'IDA-তে ফেরিটিন <৩০ ug/L ও TSAT <১৬% থাকে [৩]। ACD-তে হেপসিডিনের কারণে ফেরিটিন বেশি কিন্তু রক্তে আয়রন কম থাকে; sTfR পরীক্ষা মিশ্র ঘাটতি আলাদা করে [৩, ৪]। বংশগত হিমোক্রোমাটোসিসে HFE ত্রুটির কারণে হেপসিডিন তৈরি না হওয়ায় মারাত্মক আয়রন জমে অঙ্গহানি ঘটে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary', '৬. প্রাতিষ্ঠানিক সারাংশ'),
          paragraphs: [
            l(
              'Systemic iron flux balances microgram-scale plasma transferrin turnover against multi-gram tissue stores [1]. The IRP/IRE post-transcriptional circuit governs intracellular allocation, while the hepatic hepcidin-ferroportin axis provides systemic endocrine gating between intestinal absorption and reticuloendothelial recycling [2, 4].',
              'শারীরিক আয়রন ভারসাম্য কোষীয় ও শারীরিক দুই স্তরে কঠোরভাবে নিয়ন্ত্রিত [১]। কোষের ভেতর IRP/IRE আরএনএ সংকেত কাজ করে, আর সারাদেহে যকৃতের হেপসিডিন-ফেরোপোর্টিন অক্ষ অন্ত্রের শোষণ ও ম্যাক্রোফেজের পুনর্ব্যবহার নিয়ন্ত্রণ করে [২, ৪]।'
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
          heading: l('1. Biophysics of Fenton Chemistry & Nanocage Biomineralization', '১. ফেন্টন বিক্রিয়ার জৈব-পদার্থবিদ্যা ও ফেরিটিন ন্যানোকেজ'),
          paragraphs: [
            l(
              'Uncoordinated Fe2+ undergoes the Haber-Weiss/Fenton cycle with H2O2, generating hydroxyl radicals (•OH, diffusion limit k ~ 10^10 M^-1 s^-1) that peroxidize lipids and trigger ferroptosis [1]. Ferritin 24-mers assemble into a hollow 8 nm cavity where catalytic H-subunits utilize molecular oxygen to oxidize Fe2+ to Fe3+ oxo-bridged dimers, nucleating into a non-toxic ferrihydrite mineral core [1, 2].',
              'মুক্ত Fe2+ ফেন্টন বিক্রিয়ার মাধ্যমে বিধ্বংসী হাইড্রক্সিল র্যাডিকেল তৈরি করে কোষের লিপিড জারিত করে ফেরোপ্টোসিস ঘটায় [১]। ফেরিটিনের ২৪টি সাবইউনিট একটি ৮ ন্যানোমিটার ফাঁপা খাঁচা তৈরি করে যেখানে H-সাবইউনিট দ্রুত Fe2+ কে জারিত করে নিরাপদ ফেরিহাইড্রাইট স্ফটিকে পরিণত করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Molecular Structure of Ferroportin & Hephaestin Coupling', '২. ফেরোপোর্টিন ও হেফেস্টিন কাপলিংয়ের আণবিক রূপ'),
          paragraphs: [
            l(
              'Cryo-EM structures of ferroportin (SLC40A1) reveal a major facilitator superfamily (MFS) fold with two 6-transmembrane bundles transitioning between inward- and outward-facing conformations [2]. Hephaestin, a six-domain multicopper oxidase containing four copper ions, coordinates with ferroportin to oxidize Fe2+ upon basolateral exit, preventing local radical formation and facilitating cleft-loading onto apotransferrin [2, 5].',
              'ক্রায়ো-ইএম গবেষণায় দেখা গেছে ফেরোপোর্টিন একটি দ্বিমুখী পরিবহন প্রোটিন যা Fe2+ বাইরে পাম্প করে [২]। হেফেস্টিনের চারটি কপার পরমাণু নির্গত Fe2+ থেকে ইলেকট্রন গ্রহণ করে Fe3+ এ পরিণত করে, যা মুহূর্তের মধ্যে রক্তরসের ট্রান্সফেরিনে যুক্ত হয় [২, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Structural Pharmacology of Hepcidin-Ferroportin Binding', '৩. হেপসিডিন-ফেরোপোর্টিন বন্ধনের আণবিক ফার্মাকোলজি'),
          paragraphs: [
            l(
              'Hepcidin binds directly inside the outward-facing central cavity of ferroportin, with its N-terminus inserting deep into the transmembrane pore [2, 4]. Cys326 on ferroportin forms a crucial contact. Binding induces conformational closing, ubiquitination of cytoplasmic lysine residues, recruitment of endocytic adaptors, and lysosomal proteolysis [2, 4]. Mutations in ferroportin that disrupt hepcidin binding cause ferroportin disease (autosomal dominant iron overload) [4].',
              'হেপসিডিনের অগ্রভাগ সরাসরি ফেরোপোর্টিনের বহির্মুখী খাঁজে প্রবেশ করে এর Cys326 অ্যামিনো অ্যাসিডে শক্ত বন্ধন তৈরি করে [২, ৪]। এর ফলে চ্যানেলের সাইটোপ্লাজমিক প্রান্তে ইউবিকুইটিন যুক্ত হয়ে চ্যানেলটি কোষাভ্যন্তরে চলে যায় এবং লাইসোজোমে চিরতরে ধ্বংস হয় [২, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Pathogenesis of Hereditary Hemochromatosis & Iron Overload', '৪. হিমোক্রোমাটোসিসের আণবিক রোগতত্ত্ব ও অতিরিক্ত আয়রন বিষক্রিয়া'),
          paragraphs: [
            l(
              'Homozygous HFE C282Y disrupts a disulfide bond, abrogating binding to beta-2 microglobulin and preventing cell surface presentation [5]. Disrupted HFE-TfR2 interaction cripples hepatocyte iron sensing, severely depressing hepcidin transcription despite toxic total-body iron expansion [2, 5]. Unregulated ferroportin causes relentless intestinal absorption and tissue non-transferrin-bound iron (NTBI) uptake, precipitating micronodular cirrhosis, bronze diabetes, and arrhythmias [1, 5].',
              'HFE জিনের C282Y মিউটেশনের ফলে যকৃত কোষের আয়রন পরিমাপক ব্যবস্থা বিকল হয়ে যায় এবং উপচে পড়া আয়রন থাকা সত্ত্বেও যকৃত হেপসিডিন তৈরি করতে পারে না [২, ৫]। এর ফলে বাধাহীনভাবে আয়রন শোষিত হয়ে যকৃতে জমা হয়ে সিরোসিস, অগ্ন্যাশয়ে জমা হয়ে ব্রোঞ্জ ডায়াবেটিস এবং হৃৎপিণ্ডে জমা হয়ে হার্ট ফেইলিউর ঘটায় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Translational Horizons: Hepcidin Mimetics and TMPRSS6 Inhibitors', '৫. অনুবাদমূলক গবেষণা: হেপসিডিন মাইমেটিক্স ও TMPRSS6 ইনহিবিটর'),
          paragraphs: [
            l(
              'Therapeutic breakthroughs in iron disorders focus on targeted manipulation of the hepcidin-ferroportin axis [2, 4]. In beta-thalassemia and hereditary hemochromatosis, mini-hepcidins and antisense oligonucleotides against TMPRSS6 (matriptase-2) restore hepcidin expression, halting toxic iron absorption [4]. In anemia of inflammation and chronic kidney disease, monoclonal antibodies neutralizing hepcidin or small-molecule ferroportin stabilizers restore iron mobilization without systemic toxicity [2, 4].',
              'আয়রন রোগের আধুনিক চিকিৎসায় হেপসিডিন অক্ষকে লক্ষ্য করে নতুন ওষুধ তৈরি হচ্ছে [২, ৪]। থ্যালাসেমিয়া ও হিমোক্রোমাটোসিসে মিনি-হেপসিডিন ওষুধ প্রয়োগ করে অতিরিক্ত আয়রন শোষণ ঠেকানো হচ্ছে [৪]। অন্যদিকে দীর্ঘস্থায়ী কিডনি রোগের রক্তাল্পতায় হেপসিডিন-দমনকারী অ্যান্টিবডি ব্যবহার করে ম্যাক্রোফেজে বন্দি থাকা আয়রন মুক্ত করে সফলভাবে রক্ত তৈরি করা সম্ভব হচ্ছে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Advanced Synthesis', '৬. উচ্চতর সংশ্লেষ'),
          paragraphs: [
            l(
              'The mammalian iron economy is fundamentally an internal recycling circuit calibrated by hepatocyte endocrine surveillance [1, 2]. Therapeutic modulation of ferroportin stability represents the unified frontier across deficiency, inflammatory sequestration, and systemic overload syndromes [2, 4].',
              'মানবদেহের আয়রন অর্থনীতি মূলত একটি অভ্যন্তরীণ পুনর্ব্যবহার চক্র যা যকৃতের হরমোনীয় নজরদারি দ্বারা নিয়ন্ত্রিত [১, ২]। ফেরোপোর্টিনের স্থায়িত্ব নিয়ন্ত্রণ করাই হলো রক্তাল্পতা ও অতিরিক্ত আয়রন বিষক্রিয়ার সবচেয়ে আধুনিক চিকিৎসার ভবিষ্যৎ [২, ৪]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential duodenal enterocyte iron absorption, ferritin sequestration, ferroportin export, and hepatic hepcidin negative feedback degradation.',
      'ডিওডেনামে আয়রন শোষণ, ফেরিটিন খাঁচায় সঞ্চয়, ফেরোপোর্টিন দিয়ে রক্তে নির্গমন এবং যকৃতের হেপসিডিন হরমোন দ্বারা ধ্বংসের ধারাবাহিক ধাপসমূহ।'
    ),
    steps: [
      l(
        'Step 1: Luminal non-heme ferric iron (Fe3+) is reduced to ferrous iron (Fe2+) by apical DCYTB ferric reductase with ascorbic acid, then transported across the microvillus membrane via proton-coupled DMT1 symporter.',
        'ধাপ ১: লুমেনের Fe3+ ব্রাশ-বর্ডারের DCYTB ও ভিটামিন সি দিয়ে বিজারিত হয়ে Fe2+ এ পরিণত হয় এবং DMT1 চ্যানেল দিয়ে এন্টারোসাইটে প্রবেশ করে।'
      ),
      l(
        'Step 2: Intracellular Fe2+ enters the transit pool; excess iron is buffered inside 24-subunit ferritin nanocages via H-chain ferroxidation, insulated against oxidative Fenton chemistry.',
        'ধাপ ২: অতিরিক্ত আয়রন ২৪-সাবইউনিট ফেরিটিন খাঁচায় নিরাপদ স্ফটিক হিসেবে জমা থাকে যাতে কোনো ক্ষতিকর মুক্ত র্যাডিকেল তৈরি হতে না পারে।'
      ),
      l(
        'Step 3: Basolateral export is executed by Ferroportin-1 (FPN1), coupled to multi-copper ferroxidase Hephaestin, which rapidly oxidizes Fe2+ to Fe3+ for loading onto circulating apotransferrin.',
        'ধাপ ৩: ফেরোপোর্টিন-১ চ্যানেল দিয়ে আয়রন বাইরে পাম্প হয় এবং হেফেস্টিন এনজাইম একে জারিত করে রক্তরসের ট্রান্সফেরিনে যুক্ত করে দেয়।'
      ),
      l(
        'Step 4: Hepatocytes secrete Hepcidin in response to elevated iron or inflammatory IL-6. Hepcidin binds Ferroportin, inducing ubiquitination, endocytosis, and lysosomal degradation to block iron export.',
        'ধাপ ৪: যকৃত থেকে ক্ষরিত হেপসিডিন ফেরোপোর্টিনে যুক্ত হয়ে এন্ডোসাইটোসিসের মাধ্যমে লাইসোজোমে চ্যানেলটিকে ধ্বংস করে দিয়ে রক্তে আয়রন নির্গমন চিরতরে বন্ধ করে দেয়।'
      ),
    ],
  },
  assessment: {
    question: l(
      'Why does co-ingestion of dietary ascorbic acid (vitamin C) significantly enhance non-heme iron absorption in the human duodenum?',
      'খাবারের সাথে ভিটামিন সি গ্রহণ করলে মানুষের ডিওডেনামে নন-হিম আয়রন শোষণ উল্লেখযোগ্যভাবে বৃদ্ধি পায় কেন?'
    ),
    options: [
      l(
        'It donates electrons to Duodenal Cytochrome b (DCYTB) to reduce insoluble Fe3+ to soluble Fe2+, the obligate substrate for DMT1.',
        'এটি DCYTB এনজাইমকে ইলেকট্রন প্রদান করে অদ্রবণীয় Fe3+ কে দ্রবণীয় Fe2+ এ বিজারিত করে, যা DMT1 ট্রান্সপোর্টারের জন্য অপরিহার্য।'
      ),
      l(
        'It directly degrades hepcidin in the liver to upregulate systemic ferroportin transcription.',
        'এটি যকৃতে সরাসরি হেপসিডিন ধ্বংস করে সার্বিক ফেরোপোর্টিন জিনের প্রকাশ বাড়িয়ে দেয়।'
      ),
      l(
        'It phosphorylates IRP1 to dismantle transferrin receptors on the brush border membrane.',
        'এটি IRP1 প্রোটিনকে ফসফোরাইলেট করে ব্রাশ-বর্ডারের ট্রান্সফেরিন রিসেপ্টর ধ্বংস করে।'
      ),
      l(
        'It binds calcium ions to prevent alkaline precipitation in the distal ileum.',
        'এটি ক্যালসিয়াম আয়ন বেঁধে ফেলে ইলিয়ামে ক্ষারীয় তলানি জমা রোধ করে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Non-heme dietary iron exists predominantly as insoluble ferric iron (Fe3+). DMT1 exclusively transports divalent ferrous iron (Fe2+). Apical DCYTB utilizes intracellular and luminal ascorbic acid to reduce Fe3+ to Fe2+, and ascorbate also forms soluble monomeric iron chelates in gastric fluid, preventing insoluble polymer precipitation.',
      'খাবারের নন-হিম আয়রন প্রধানত অদ্রবণীয় Fe3+ হিসেবে থাকে। DMT1 কেবল Fe2+ পরিবহন করতে পারে। ব্রাশ-বর্ডারের DCYTB এনজাইম ভিটামিন সি-এর সহায়তায় Fe3+ কে Fe2+ এ বিজারিত করে দ্রবণীয় চিলেট তৈরি করে, যা শোষণ সহজ করে।'
    ),
  },
}
