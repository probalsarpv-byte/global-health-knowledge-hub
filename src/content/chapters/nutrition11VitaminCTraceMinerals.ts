import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const vitCTraceMineralsRefs = [
  {
    id: 'gropper-advanced-nutrition-vitc-minerals',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th Edition, Chapter 12 & 13: Trace and Ultratrace Minerals',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'halliwell-free-radicals-biol-med',
    authors: 'Barry Halliwell, John M.C. Gutteridge',
    title: 'Free Radicals in Biology and Medicine, 5th Edition',
    organization: 'Oxford University Press',
    year: 2015,
    url: 'https://doi.org/10.1093/acprof:oso/9780198717478.001.0001',
    doi: '10.1093/acprof:oso/9780198717478.001.0001',
  },
  {
    id: 'kasschau-cell-iron-hepcidin',
    authors: 'Tomas Ganz, Elizabeta Nemeth',
    title: 'Iron homeostasis in host defence and inflammation',
    organization: 'Nature Reviews Immunology',
    year: 2015,
    url: 'https://doi.org/10.1038/nri3863',
    doi: '10.1038/nri3863',
  },
  {
    id: 'rayman-lancet-selenium',
    authors: 'Margaret P. Rayman',
    title: 'Selenium and human health',
    organization: 'The Lancet',
    year: 2012,
    url: 'https://doi.org/10.1016/S0140-6736(11)61452-9',
    doi: '10.1016/S0140-6736(11)61452-9',
  },
  {
    id: 'padayatty-ann-intern-med-vit-c',
    authors: 'Sebastian J. Padayatty, Mark Levine',
    title: 'Vitamin C: the known and the unknown and Goldilocks',
    organization: 'Oral Diseases',
    year: 2016,
    url: 'https://doi.org/10.1111/odi.12446',
    doi: '10.1111/odi.12446',
  },
]

export const nutrition11VitaminCTraceMineralsLesson: LessonTopic = {
  id: 'topic.nutrition.vitamin-c-trace-minerals-redox',
  slug: 'vitamin-c-trace-minerals-redox',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '11 · Vitamin C, Trace Minerals & Cellular Antioxidant Defense Networks',
    '১১ · ভিটামিন সি, ট্রেস মিনারেল ও কোষীয় অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা নেটওয়ার্ক'
  ),
  summary: l(
    'The molecular biochemistry of vitamin C and trace minerals in redox biology: ascorbate reduction of Fe2+ in prolyl hydroxylases for collagen triple-helix stabilization and HIF-1alpha regulation, the superoxide dismutase metalloenzyme network (Cu/Zn-SOD1 and Mn-SOD2), selenocysteine glutathione peroxidases, peroxisomal catalase, the Fenton reaction, and the systemic hepcidin-ferroportin iron axis.',
    'জারণ-বিজারণ জীববিদ্যায় ভিটামিন সি ও ট্রেস মিনারেলের আণবিক রসায়ন: কোলাজেন ট্রিপল-হেলিক্স গঠন ও HIF-1alpha নিয়ন্ত্রণে প্রলাইল হাইড্রক্সিলেজে অ্যাসকরবেট দ্বারা Fe2+ বিজারিত রাখা, সুপারঅক্সাইড ডিসমিউটেজ নেটওয়ার্ক (Cu/Zn-SOD1 ও Mn-SOD2), সেলেনোসিস্টিন গ্লুটাথিয়ন পারঅক্সিডেজ, ক্যাটালেজ, ফেন্টন বিক্রিয়া এবং হেপসিডিন-ফেরোপোর্টিন আয়রন নিয়ন্ত্রণ অক্ষ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Detail the catalytic mechanism of ascorbic acid in 2-oxoglutarate-dependent dioxygenases (prolyl and lysyl hydroxylases) and contrast clinical scurvy with genetic collagenopathies.',
      '২-অক্সোগ্লুটারেট-নির্ভর ডাইঅক্সিজিনেজ এনজাইমে অ্যাসকরবিক অ্যাসিডের অনুঘটক প্রক্রিয়া এবং স্কার্ভির সাথে জন্মগত কোলাজেন রোগের পার্থক্য বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Map the compartmentalized superoxide dismutase network (cytosolic Cu/Zn-SOD1, mitochondrial Mn-SOD2, extracellular SOD3) and trace their conversion of superoxide into hydrogen peroxide.',
      'কোষের বিভিন্ন অংশে অবস্থিত সুপারঅক্সাইড ডিসমিউটেজ নেটওয়ার্ক (Cu/Zn-SOD1, Mn-SOD2, SOD3) এবং সুপারঅক্সাইডকে হাইড্রোজেন পারঅক্সাইডে রূপান্তরের ধাপসমূহ ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Explain the genetic incorporation of selenocysteine (the 21st amino acid) into glutathione peroxidases (GPx1–4) and evaluate its role in lipid hydroperoxide detoxication.',
      'গ্লুটাথিয়ন পারঅক্সিডেজ এনজাইমে সেলেনোসিস্টিনের (২১তম অ্যামিনো অ্যাসিড) কোডনভিত্তিক অন্তর্ভুক্তি এবং লিপিড পারঅক্সাইড নিষ্ক্রিয়করণে এর ভূমিকা নিরূপণ করতে পারা।'
    ),
    l(
      'Contrast the biological toxicity of the ferrous iron Fenton reaction with systemic iron regulation by the hepatic hormone hepcidin and the ferroportin exporter.',
      'আয়রনের ফেন্টন বিক্রিয়ার ক্ষতিকর ফ্রি র্যাডিকেল তৈরির প্রক্রিয়া এবং হেপসিডিন-ফেরোপোর্টিন অক্ষ দ্বারা দেহের আয়রন নিয়ন্ত্রণের আণবিক গতিপথ বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.glutathione-ros-redox-homeostasis', 'topic.metabolism.heme-bilirubin-metabolism'],
  references: vitCTraceMineralsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-vitc-minerals', 'padayatty-ann-intern-med-vit-c'],
    structure: ['padayatty-ann-intern-med-vit-c', 'halliwell-free-radicals-biol-med'],
    mechanism: ['halliwell-free-radicals-biol-med', 'rayman-lancet-selenium'],
    integration: ['kasschau-cell-iron-hepcidin', 'halliwell-free-radicals-biol-med'],
    practice: ['kasschau-cell-iron-hepcidin', 'padayatty-ann-intern-med-vit-c'],
    takeaways: ['gropper-advanced-nutrition-vitc-minerals', 'rayman-lancet-selenium'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. Cellular Redox Biology & Reactive Oxygen Species (ROS)', '১. কোষীয় রেডক্স জীববিদ্যা ও ক্ষতিকর অক্সিজেন প্রজাতি (ROS)'), sectionId: 'introduction' },
      { id: 'sec-vit-c-collagen', label: l('2. Vitamin C: Dioxygenase Catalysis & Collagen Cross-Linking', '২. ভিটামিন সি: ডাইঅক্সিজিনেজ বিক্রিয়া ও কোলাজেন গঠন'), sectionId: 'structure' },
      { id: 'sec-sod-gpx', label: l('3. Superoxide Dismutases (Cu/Zn/Mn) & Selenocysteine GPx', '৩. সুপারঅক্সাইড ডিসমিউটেজ (Cu/Zn/Mn) ও সেলেনিয়াম GPx'), sectionId: 'mechanism' },
      { id: 'sec-iron-hepcidin', label: l('4. Iron Redox Toxicity, Fenton Chemistry & The Hepcidin Axis', '৪. আয়রনের ফেন্টন বিষক্রিয়া ও হেপসিডিন নিয়ন্ত্রণ অক্ষ'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Clinical Calculations: Iron Overload vs Refractory Anemia', '৫. ক্লিনিক্যাল সমাধান: আয়রন ওভারলোড বনাম রক্তস্বল্পতা'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Ascorbic Acid (Vitamin C)', 'অ্যাসকরবিক অ্যাসিড (ভিটামিন সি)'),
        definition: l(
          'An essential water-soluble enediol reducing agent that donates single electrons to form the stable ascorbyl radical, maintaining active-site iron (Fe2+) and copper (Cu+) in their reduced states during hydroxylase and monooxygenase reactions.',
          'একটি অত্যাবশ্যক পানিতে দ্রবণীয় বিজারক উপাদান যা ইলেকট্রন দান করে কোলাজেন সংশ্লেষণ এবং ডোপামিন রূপান্তরের এনজাইমে আয়রন (Fe2+) ও কপারকে (Cu+) সক্রিয় বিজারিত অবস্থায় বজায় রাখে।'
        ),
      },
      {
        term: l('Superoxide Dismutase (SOD)', 'সুপারঅক্সাইড ডিসমিউটেজ (SOD)'),
        definition: l(
          'A family of metalloenzymes (cytosolic Cu/Zn-SOD1, mitochondrial matrix Mn-SOD2, extracellular Cu/Zn-SOD3) that disproportionates the destructive superoxide radical anion (O2•-) into hydrogen peroxide (H2O2) and molecular oxygen (O2).',
          'একটি শক্তিশালী মেটালো-এনজাইম পরিবার যা কোষের ভেতরে উৎপন্ন হওয়া অত্যন্ত ক্ষতিকর সুপারঅক্সাইড ফ্রি র্যাডিকেলকে (O2•-) ভেঙে হাইড্রোজেন পারঅক্সাইড (H2O2) ও অক্সিজেনে পরিণত করে।'
        ),
      },
      {
        term: l('Selenocysteine (Sec / U)', 'সেলেনোসিস্টিন (Sec / U)'),
        definition: l(
          'The 21st proteinogenic amino acid, featuring a selenium atom in place of sulfur in cysteine; genetically encoded by the UGA stop codon in the presence of an mRNA SECIS stem-loop element, conferring low pKa (~5.2) and extreme nucleophilicity to glutathione peroxidases.',
          'মানবদেহের ২১তম প্রোটিন তৈরিকারী অ্যামিনো অ্যাসিড, যাতে সিস্টিনের সালফারের বদলে সেলেনিয়াম থাকে; এটি UGA স্টপ কোডনের মাধ্যমে বিশেষ সংকেতে প্রোটিনে বসে গ্লুটাথিয়ন পারঅক্সিডেজ এনজাইমকে অসাধারণ অ্যান্টিঅক্সিডেন্ট ক্ষমতা দেয়।'
        ),
      },
      {
        term: l('Fenton Reaction', 'ফেন্টন বিক্রিয়া'),
        definition: l(
          'The non-enzymatic reaction between free ferrous iron (Fe2+) and hydrogen peroxide (H2O2) that generates the fiercely reactive hydroxyl radical (•OH), which oxidizes DNA, lipids, and proteins at diffusion-controlled rates; tightly suppressed by ferritin and transferrin iron sequestration.',
          'মুক্ত আয়রন (Fe2+) এবং হাইড্রোজেন পারঅক্সাইডের (H2O2) মধ্যকার মারাত্মক রাসায়নিক বিক্রিয়া যা মানবদেহের সবচেয়ে ধ্বংসাত্মক হাইড্রক্সিল ফ্রি র্যাডিকেল (•OH) তৈরি করে; ট্রান্সফারিন ও ফেরিটিন প্রোটিন আয়রনকে কঠোরভাবে আটকে রেখে এই বিষক্রিয়া প্রতিহত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Interpreting Serum Ferritin, Transferrin Saturation and Hepcidin in Anemia', 'রক্তস্বল্পতায় সিরাম ফেরিটিন, ট্রান্সফারিন স্যাচুরেশন ও হেপসিডিন বিশ্লেষণ'),
        steps: [
          l(
            'Step 1: Patient presents with fatigue and microcytic hypochromic anemia (Hb = 9.8 g/dL, MCV = 72 fL). Differentiate pure Iron Deficiency Anemia (IDA) from Anemia of Chronic Disease / Inflammation (ACD).',
            'ধাপ ১: রোগীর ক্লান্তি ও মাইক্রোসাইটিক হাইপোক্রোমিক রক্তস্বল্পতা রয়েছে (Hb = ৯.৮ g/dL, MCV = ৭২ fL)। সাধারণ আয়রনের অভাব (IDA) নাকি দীর্ঘস্থায়ী প্রদাহজনিত রক্তস্বল্পতা (ACD) তা পৃথক করতে হবে।'
          ),
          l(
            'Step 2: Measure Serum Iron, Total Iron-Binding Capacity (TIBC), and Ferritin: Serum Iron = 24 mcg/dL (low), TIBC = 460 mcg/dL (elevated), Transferrin Saturation (TSAT = Iron/TIBC x 100) = 5.2% (severely low, reference 20–50%), Serum Ferritin = 8 ng/mL (profoundly low, diagnostic threshold < 30 ng/mL).',
            'ধাপ ২: আয়রন প্যানেল পরীক্ষা: সিরাম আয়রন = ২৪ mcg/dL (কম), TIBC = ৪৬০ mcg/dL (বেশি), ট্রান্সফারিন স্যাচুরেশন = ৫.২% (মারাত্মক কম, স্বাভাবিক ২০–৫০%), সিরাম ফেরিটিন = ৮ ng/mL (মারাত্মক কম, স্বাভাবিক > ৩০ ng/mL)।'
          ),
          l(
            'Step 3: Analyze the Hepcidin regulatory axis: In true iron deficiency, low hepatic iron stores and absence of systemic inflammation shut down hepatic hepcidin gene (HAMP) expression.',
            'ধাপ ৩: হেপসিডিন হরমোন বিশ্লেষণ: প্রকৃত আয়রন ঘাটতিতে যকৃতের আয়রন সঞ্চয় ফুরিয়ে যাওয়ায় যকৃত হেপসিডিন হরমোন তৈরি সম্পূর্ণ বন্ধ করে দেয়।'
          ),
          l(
            'Step 4: Undetectable hepcidin leaves enterocyte basolateral Ferroportin channels fully open and operational, maximizing intestinal iron absorption from oral ferrous sulfate supplementation.',
            'ধাপ ৪: হেপসিডিন না থাকায় অন্ত্রের কোষের ফেরোপোর্টিন চ্যানেলগুলো সম্পূর্ণ খোলা থাকে; ফলে মুখে আয়রন ট্যাবলেট খাওয়ালে তা দ্রুত রক্তে শোষিত হয়ে রক্তস্বল্পতা নিরাময় করে।'
          ),
        ],
        conclusion: l(
          'Low ferritin (<30 ng/mL) and elevated TIBC confirm absolute iron deficiency with suppressed hepcidin, signaling high therapeutic responsiveness to oral iron therapy.',
          'কম ফেরিটিন এবং উচ্চ TIBC নিশ্চিত করে যে রোগীর দেহে আয়রনের প্রকৃত ঘাটতি রয়েছে এবং হেপসিডিন বন্ধ থাকায় মুখে সাধারণ আয়রন ট্যাবলেট খাওয়ালেই রোগী পুরোপুরি সুস্থ হয়ে উঠবে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does Vitamin C deficiency produce bleeding gums, corkscrew hairs, and reopening of healed wounds in scurvy?',
          'স্কার্ভি রোগে ভিটামিন সি-এর অভাবে কেন মাড়ি থেকে রক্ত পড়ে, লোম কুঁকড়ে যায় এবং পুরানো জোড়া লাগা ক্ষত আবার ফেটে যায়?'
        ),
        answer: l(
          'Collagen triple-helix stability requires post-translational 4-hydroxylation of proline residues by prolyl 4-hydroxylase. Prolyl 4-hydroxylase contains an active-site Fe2+ ion that undergoes oxidation to inactive Fe3+ during uncoupled catalytic cycles. Ascorbic acid specifically reduces Fe3+ back to active Fe2+. Without vitamin C, unhydroxylated procollagen chains cannot form stable interchain hydrogen bonds, melting at body temperature (37°C) and degrading inside fibroblasts. Vascular capillary fragility leads to microvascular ruptures (petechiae, bleeding gums), and connective tissue turnover in scars precipitates wound dehiscence.',
          'কোলাজেন প্রোটিনের স্থিতিশীলতার জন্য প্রলাইল ৪-হাইড্রক্সিলেজ এনজাইমের মাধ্যমে প্রোলিন অ্যামিনো অ্যাসিডে হাইড্রক্সিল গ্রুপ লাগাতে হয়। এই এনজাইমের আয়রন Fe2+ থেকে Fe3+ তে জারিত হয়ে নিষ্ক্রিয় হয়ে পড়ে; ভিটামিন সি এসে একে পুনরায় বিজারিত Fe2+ তে ফিরিয়ে আনে। ভিটামিন সি না থাকলে কোলাজেন স্বাভাবিক দৈহিক তাপমাত্রায় গলে নষ্ট হয়ে যায়। ফলে রক্তনালীর প্রাচীর ভঙ্গুর হয়ে মাড়ি ও ত্বক দিয়ে রক্ত পড়ে এবং কোলাজেন অভাবে পুরানো কাটা ক্ষত আবার খুলে যায়।'
        ),
      },
      {
        question: l(
          'Why does free, unchaperoned iron in the cytoplasm pose a deadly threat to cell viability via the Fenton reaction?',
          'কোষের ভেতরে মুক্ত ও অরক্ষিত আয়রন থাকলে কেন ফেন্টন বিক্রিয়ার মাধ্যমে তা কোষের জন্য প্রাণঘাতী বিষে পরিণত হয়?'
        ),
        answer: l(
          'Free ferrous iron (Fe2+) reacts spontaneously with hydrogen peroxide (H2O2) produced by normal cellular metabolism: Fe2+ + H2O2 -> Fe3+ + •OH + OH-. The resulting hydroxyl radical (•OH) is the most destructive reactive oxygen species known, possessing a half-life of ~1 nanosecond and attacking any molecule within diffusion distance (extracting electrons from membrane lipids, breaking DNA phosphodiester backbones, and fragmenting proteins). Ferritin sequesters up to 4,500 iron atoms inside a mineral core, completely shielding the cytoplasm from this catastrophic radical cascade.',
          'মুক্ত আয়রন (Fe2+) কোষে তৈরি হওয়া হাইড্রোজেন পারঅক্সাইডের সাথে বিক্রিয়া করে অত্যন্ত বিষাক্ত হাইড্রক্সিল ফ্রি র্যাডিকেল (•OH) তৈরি করে। এই র্যাডিকেলটি মাত্র এক ন্যানোসেকেন্ডে কোষের ডিএনএ ছিঁড়ে ফেলে, মেমব্রেনের চর্বি জারিত করে ছিদ্র করে দেয় এবং প্রোটিন ধ্বংস করে ফেলে। এ কারণেই ফেরিটিন প্রোটিন খাঁচার মতো আটকে রেখে প্রায় সাড়ে চার হাজার আয়রন পরমাণুকে নিরাপদে সঞ্চয় করে রাখে যাতে তারা মুক্ত হতে না পারে।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'antioxidant-metalloenzyme-cascade',
    title: l('The Integrated Antioxidant Metalloenzyme Defense Hierarchy', 'সমন্বিত অ্যান্টিঅক্সিডেন্ট মেটালো-এনজাইম প্রতিরক্ষা ব্যবস্থা'),
    description: l(
      'Track the sequential detoxication of mitochondrial superoxide through Cu/Zn-SOD1 and Mn-SOD2 into hydrogen peroxide, followed by selenium-GPx and catalase reduction into harmless water.',
      'মাইটোকন্ড্রিয়ায় উৎপন্ন সুপারঅক্সাইড কীভাবে Cu/Zn-SOD1 ও Mn-SOD2 দ্বারা হাইড্রোজেন পারঅক্সাইডে এবং পরবর্তীতে সেলেনিয়াম-GPx ও ক্যাটালেজ দ্বারা নিরাপদ পানিতে রূপান্তরিত হয় তা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Educational biochemical pathway simulation; trace mineral supplementation requires clinical laboratory serum monitoring.',
      'অ্যান্টিঅক্সিডেন্ট শারীরবৃত্তের শিক্ষামূলক সিমুলেশন; অতিরিক্ত ট্রেস মিনারেল সেবনে বিষক্রিয়া এড়াতে রক্ত পরীক্ষা অপরিহার্য।'
    ),
    svgType: 'redox-cascade',
    items: [
      {
        id: 'node-superoxide-sod',
        label: l('Superoxide Dismutases: Cu/Zn-SOD1 & Mn-SOD2', 'সুপারঅক্সাইড ডিসমিউটেজ: Cu/Zn-SOD1 ও Mn-SOD2'),
        description: l(
          'Disproportionates respiratory chain superoxide (O2•-) into hydrogen peroxide (H2O2) and molecular oxygen (O2).',
          'মাইটোকন্ড্রিয়ার রেস্পিরেটরি চেইনে তৈরি ক্ষতিকর সুপারঅক্সাইডকে ভেঙে হাইড্রোজেন পারঅক্সাইড ও অক্সিজেনে রূপান্তর করে।'
        ),
        details: l(
          'Cytosolic SOD1 utilizes catalytic copper (Cu2+ <-> Cu+) and structural zinc (Zn2+), while mitochondrial matrix SOD2 employs manganese (Mn3+ <-> Mn2+). The bimolecular dismutation rate (k ~ 2 x 10^9 M^-1 s^-1) is near diffusion limit. Mutations in SOD1 cause familial amyotrophic lateral sclerosis (ALS).',
          'SOD1 এনজাইম কপার ও জিঙ্কের সাহায্যে সাইটোপ্লাজমে কাজ করে, আর SOD2 ম্যাঙ্গানিজের সাহায্যে মাইটোকন্ড্রিয়ার ভেতরে কাজ করে। এই রূপান্তরের গতি অবিশ্বাস্য দ্রুত। SOD1 জিনের ত্রুটি থাকলে মোটর নিউরন ধ্বংস হয়ে মারাত্মক ALS প্যারালাইসিস রোগ হয়।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-selenium-gpx',
        label: l('Selenium Glutathione Peroxidases (GPx1–4)', 'সেলেনিয়াম গ্লুটাথিয়ন পারঅক্সিডেজ (GPx1–4)'),
        description: l(
          'Reduces H2O2 and toxic lipid hydroperoxides (LOOH) into water and lipid alcohols using reduced glutathione (2 GSH).',
          'সেলেনিয়াম এনজাইম গ্লুটাথিয়নের সাহায্যে হাইড্রোজেন পারঅক্সাইড ও ক্ষতিকর লিপিড পারঅক্সাইডকে নিরাপদ পানি ও অ্যালকোহলে পরিণত করে।'
        ),
        details: l(
          'GPx contains catalytic selenocysteine (Sec47). The selenol group (-SeH) is oxidized by H2O2 to selenenic acid (-SeOH), which is sequentially reduced back to selenol by two molecules of glutathione (GSH), generating oxidized glutathione disulfide (GSSG). GPx4 uniquely reduces hydroperoxides directly within membrane bilayers, preventing ferroptosis.',
          'GPx4 এনজাইম কোষঝিল্লির ফ্যাটি অ্যাসিডের জারণ রোধ করে কোষের অপমৃত্যু (ফেরোপ্টোসিস) ঠেকায়। সেলেনিয়ামের অভাব হলে হার্টের পেশি ফুলে গিয়ে মারাত্মক কেশান ডিজিজ (কার্ডিওমায়োপ্যাথি) দেখা দেয়।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-peroxisomal-catalase',
        label: l('Peroxisomal Catalase (Heme-Fe3+ Enzyme)', 'পারঅক্সিজোমাল ক্যাটালেজ (হিম-আয়রন এনজাইম)'),
        description: l(
          'Rapidly decomposes high concentrations of H2O2 into 2 H2O + O2 without requiring any electron donors.',
          'কোনো কো-ফ্যাক্টর ছাড়াই অতিরিক্ত ঘনত্বের হাইড্রোজেন পারঅক্সাইডকে এক নিমেষে ভেঙে পানি ও অক্সিজেনে রূপান্তর করে।'
        ),
        details: l(
          'Catalase is a homotetramer containing four iron-protoporphyrin IX (heme) groups. It operates at one of the highest turnover rates in nature (~4 x 10^7 molecules H2O2 per second per active site). Catalase protects peroxisomes from oxidative damage during very-long-chain fatty acid beta-oxidation and amino acid deamination.',
          'ক্যাটালেজ হলো প্রকৃতির সবচেয়ে দ্রুতগতির এনজাইমগুলোর একটি; এর একটিমাত্র সক্রিয় স্থান প্রতি সেকেন্ডে চার কোটি হাইড্রোজেন পারঅক্সাইড অণুকে নিষ্ক্রিয় করে ফেলতে পারে। এটি পারঅক্সিজোম অঙ্গাণুকে জারণ ধ্বংসের হাত থেকে রক্ষা করে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-ascorbate-dioxygenase',
        label: l('Ascorbate Fe2+ Maintenance (Prolyl Hydroxylases)', 'অ্যাসকরবেট Fe2+ সুরক্ষা (প্রলাইল হাইড্রক্সিলেজ)'),
        description: l(
          'Maintains non-heme Fe2+ in its active reduced state, driving collagen cross-linking and normoxic HIF-1alpha degradation.',
          'আয়রনকে Fe2+ বিজারিত অবস্থায় রেখে কোলাজেন ট্রিপল-হেলিক্স জোড়া লাগায় এবং রক্তে অক্সিজেনের ভারসাম্য (HIF-1alpha) রক্ষা করে।'
        ),
        details: l(
          'In prolyl 4-hydroxylase, uncoupled decarboxylation of 2-oxoglutarate oxidizes active Fe2+ to catalytic dead-end Fe3+. Ascorbate donates an electron to regenerate Fe2+, releasing dehydroascorbate. The same mechanism operates in HIF prolyl hydroxylases (PHD1–3), which mark HIF-1alpha for VHL-mediated ubiquitin degradation during normal oxygenation.',
          'ভিটামিন সি না থাকলে কোলাজেনের গঠন ভেঙে গিয়ে রক্তনালী ফেটে স্কার্ভি হয়। এছাড়া স্বাভাবিক অক্সিজেনের উপস্থিতিতে এটি HIF প্রোটিনকে নিয়ন্ত্রণে রেখে অপ্রয়োজনীয় রক্তনালী গঠন ও ক্যান্সার বিস্তার রোধ করে।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-hepcidin-ferroportin',
        label: l('Hepcidin-Ferroportin Iron Regulatory Axis', 'হেপসিডিন-ফেরোপোর্টিন আয়রন নিয়ন্ত্রণ অক্ষ'),
        description: l(
          'Hepcidin binds Ferroportin to trigger its internalization and degradation, locking iron inside enterocytes and macrophages.',
          'হেপসিডিন হরমোন রক্তে ফেরোপোর্টিন চ্যানেলকে ধ্বংস করে দেয়, যার ফলে অন্ত্র ও ম্যাক্রোফেজের ভেতরে আয়রন আটকে থাকে এবং রক্তে মুক্ত হতে পারে না।'
        ),
        details: l(
          'Synthesized by hepatocytes in response to high iron stores (via BMP6-SMAD signaling) or systemic inflammation (via IL-6-STAT3 signaling), hepcidin occludes the central pore of Ferroportin (SLC40A1). This prevents iron absorption and macrophage recycling, sequestering iron away from bacterial pathogens but producing Anemia of Chronic Disease.',
          'প্রদাহ বা ইনফেকশনের সময় হেপসিডিন বেড়ে গিয়ে আয়রনকে কোষে বন্দি করে রাখে যাতে আক্রমণকারী ব্যাকটেরিয়া পুষ্টি না পায়; কিন্তু দীর্ঘদিন এই অবস্থা চললে রক্তে হিমোগ্লোবিন কমে গিয়ে অ্যানিমিয়া তৈরি হয়।'
        ),
        color: '#ec4899',
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
          heading: l('1. Oxygen Metabolism and the Inevitable Radical Hazard', '১. অক্সিজেন বিপাক ও অপরিহার্য ফ্রি র্যাডিকেলের ঝুঁকি'),
          paragraphs: [
            l(
              'Aerobic life affords tremendous bioenergetic advantages: oxidative phosphorylation extracts approximately 30 to 32 molecules of ATP per glucose molecule compared to a meager two ATP molecules under anaerobic glycolysis [1, 2]. However, the four-electron reduction of molecular oxygen to water in mitochondrial cytochrome c oxidase is not 100% efficient [2]. Between 0.2% and 2.0% of electrons prematurely leak from respiratory Complexes I and III, reducing oxygen by single-electron addition into the toxic superoxide radical anion (O2•-) [2].',
              'অক্সিজেন নির্ভর জীবনের একটি বিরাট শক্তিগত সুবিধা রয়েছে: মাইটোকন্ড্রিয়ায় পূর্ণ জারণের মাধ্যমে প্রতিটি গ্লুকোজ থেকে ৩০ থেকে ৩২ অণু এটিপি শক্তি তৈরি হয়, যেখানে অক্সিজেন ছাড়া মাত্র দুই অণু এটিপি পাওয়া যায় [১, ২]। কিন্তু মাইটোকন্ড্রিয়ার রেস্পিরেটরি চেইনে অক্সিজেনকে পানিতে পরিণত করার প্রক্রিয়াটি শতভাগ নিখুঁত নয় [২]। প্রায় ০.২% থেকে ২% ইলেকট্রন অসাবধানতাবশত চেইন থেকে ছিটকে বের হয়ে গিয়ে অক্সিজেনের সাথে যুক্ত হয় এবং অত্যন্ত ক্ষতিকর ও বিষাক্ত সুপারঅক্সাইড ফ্রি র্যাডিকেল (O2•-) তৈরি করে [২]।'
            ),
            l(
              'To survive in an oxygen-rich atmosphere, human cells have evolved an elaborate, hierarchical defense system composed of dietary antioxidant vitamins (vitamin C and vitamin E) coordinated with essential trace mineral metalloenzymes (copper, zinc, manganese, selenium, and iron) [1, 2]. These defenses intercept and neutralize reactive oxygen species before they can damage cell membranes, break DNA strands, or precipitate cellular necrosis [1, 2].',
              'অক্সিজেনপূর্ণ পরিবেশে নিরাপদে বেঁচে থাকার জন্য মানবদেহ একটি অত্যন্ত সুশৃঙ্খল বহুস্তরীয় প্রতিরক্ষা ব্যবস্থা তৈরি করেছে, যা খাবারের অ্যান্টিঅক্সিডেন্ট ভিটামিন (ভিটামিন সি ও ই) এবং অতিপ্রয়োজনীয় ট্রেস মিনারেল মেটালো-এনজাইমের (কপার, জিঙ্ক, ম্যাঙ্গানিজ, সেলেনিয়াম ও আয়রন) সমন্বয়ে গঠিত [১, ২]। এই প্রতিরক্ষা প্রাচীর কোষের পর্দা ধ্বংস হওয়া, ডিএনএ ক্ষতিগ্রস্ত হওয়া বা অকাল কোষমৃত্যু ঘটার আগেই ক্ষতিকর র্যাডিকেলগুলোকে শান্ত ও নিষ্ক্রিয় করে দেয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Vitamin C: Enzymatic Reducing Agent and Collagen Matrix Architecture', '২. ভিটামিন সি: এনজাইমের বিজারক ও কোলাজেন কাঠামোর ভিত্তি'),
          paragraphs: [
            l(
              'Ascorbic acid (vitamin C) is a water-soluble enediol monosaccharide derivative that humans cannot synthesize due to pseudogenization and evolutionary loss of the final pathway enzyme, L-gulonolactone oxidase (GULO) [1, 5]. In cell biology, vitamin C is not merely a passive scavenger; its primary physiological task is to act as an obligate electron donor for a family of iron- and copper-containing enzymes known as monooxygenases and 2-oxoglutarate-dependent dioxygenases [1, 5].',
              'অ্যাসকরবিক অ্যাসিড (ভিটামিন সি) হলো পানিতে দ্রবণীয় একটি শর্করা সদৃশ উপাদান যা মানুষ নিজের দেহে তৈরি করতে পারে না; কারণ বিবর্তনের ধারায় মানুষের জিনোম থেকে এল-গুলোনোল্যাকটোন অক্সিডেজ (GULO) এনজাইমটি বিলুপ্ত হয়ে গেছে [১, ৫]। কোষীয় জীববিদ্যায় ভিটামিন সি কেবল সাধারণ ফ্রি র্যাডিকেল পরিষ্কারক নয়; এর প্রধান কাজ হলো আয়রন ও কপার-যুক্ত এনজাইমগুলোকে ইলেকট্রন দান করে সারাক্ষণ সচল ও সক্রিয় রাখা [১, ৫]।'
            ),
            l(
              'The most famous example is prolyl 4-hydroxylase, which adds hydroxyl (-OH) groups to proline residues in newly synthesized collagen polypeptide chains [1, 5]. These hydroxyproline residues form crucial interchain water-bridged hydrogen bonds that allow three collagen alpha-chains to wrap into a rigid triple helix capable of withstanding tens of kilograms of mechanical tensile force [1]. When vitamin C is depleted, unhydroxylated procollagen fails to assemble, causing the systemic vascular capillary fragility and connective tissue breakdown of scurvy [1, 5].',
              'এর সবচেয়ে উজ্জ্বল দৃষ্টান্ত হলো কোলাজেন প্রোটিনের সংশ্লেষণ [১, ৫]। ভিটামিন সি-এর সাহায্যে প্রলাইল ৪-হাইড্রক্সিলেজ এনজাইম নতুন কোলাজেনের গায়ে হাইড্রক্সিল গ্রুপ যুক্ত করে [১]। এই হাইড্রক্সিল গ্রুপগুলো তিনটি প্রোটিন চেইনকে একসাথে শক্ত দড়ির মতো পেঁচিয়ে ট্রিপল-হেলিক্স গঠন তৈরি করে যা প্রচণ্ড যান্ত্রিক টান সহ্য করতে পারে [১]। ভিটামিন সি-এর অভাব হলে দুর্বল কোলাজেন তৈরি হয়, যার ফলে রক্তনালী ফেটে গিয়ে স্কার্ভি রোগ দেখা দেয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The Metalloenzyme Antioxidant Shield: SOD and Selenium GPx', '৩. মেটালো-এনজাইম প্রতিরক্ষা ঢাল: SOD ও সেলেনিয়াম GPx'),
          paragraphs: [
            l(
              'The enzymatic defense against reactive oxygen species operates as a strict two-tier relay [2]. The first line of defense is Superoxide Dismutase (SOD), which captures two superoxide radicals and converts them into hydrogen peroxide (H2O2) and oxygen [2]. In the cytoplasm and nucleus, this reaction is executed by Cu/Zn-SOD (SOD1), utilizing catalytic copper and structural zinc [2]. Inside the mitochondrial matrix, where electron leakage is highest, Mn-SOD (SOD2) protects mitochondrial DNA from oxidative destruction [2].',
              'কোষের ক্ষতিকর র্যাডিকেল ধ্বংসে মেটালো-এনজাইমগুলো দুটি ধাপে দলগতভাবে কাজ করে [২]। প্রথম সারির পাহারাদার হলো সুপারঅক্সাইড ডিসমিউটেজ (SOD), যা দুটি সুপারঅক্সাইড র্যাডিকেল ধরে হাইড্রোজেন পারঅক্সাইড (H2O2) ও নির্দোষ অক্সিজেনে পরিণত করে [২]। সাইটোপ্লাজমে কপার ও জিঙ্কের সাহায্যে Cu/Zn-SOD1 কাজ করে, আর মাইটোকন্ড্রিয়ার ভেতরে ম্যাঙ্গানিজের সাহায্যে Mn-SOD2 ডিএনএ রক্ষা করে [২]।'
            ),
            l(
              'However, hydrogen peroxide is itself a dangerous membrane-permeable oxidant that must be instantly disposed of before it encounters free iron [2]. This second tier is spearheaded by Glutathione Peroxidases (GPx1–4), which contain the rare trace element selenium in the form of selenocysteine [2, 4]. GPx transfers electrons from reduced glutathione (GSH) onto H2O2, reducing it to two molecules of harmless water [2, 4]. Working in parallel, peroxisomal catalase decomposes massive bursts of H2O2 into water and oxygen at lightning speed [2].',
              'কিন্তু হাইড্রোজেন পারঅক্সাইড নিজেও একটি বিপজ্জনক যৌগ যা মেমব্রেন ভেদ করে ছড়িয়ে পড়তে পারে; তাই একে সাথে সাথে পানিতে রূপান্তর করা জরুরি [২]। এই দ্বিতীয় ধাপে মূল ভূমিকা পালন করে গ্লুটাথিয়ন পারঅক্সিডেজ (GPx), যার কেন্দ্রে বিরল উপাদান সেলেনিয়াম থাকে [২, ৪]। এই এনজাইম গ্লুটাথিয়নের সাহায্যে হাইড্রোজেন পারঅক্সাইডকে নিষ্ক্রিয় পানিতে পরিণত করে [২, ৪]। পাশাপাশি পারঅক্সিজোমে থাকা ক্যাটালেজ এনজাইমও বিদ্যুৎ গতিতে পারঅক্সাইড ভেঙে ফেলে [২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Iron: Essential Cofactor and The Dangerous Fenton Catalyst', '৪. আয়রন: অপরিহার্য কো-ফ্যাক্টর ও বিপজ্জনক ফেন্টন বিক্রিয়া'),
          paragraphs: [
            l(
              'Iron is the most abundant transition metal in the human body, vital for oxygen transport in hemoglobin and electron transfer in respiratory cytochromes [1, 3]. However, iron’s very ability to cycle effortlessly between ferrous (Fe2+) and ferric (Fe3+) oxidation states makes free, unbound iron extraordinarily dangerous [2, 3]. In the presence of hydrogen peroxide, free Fe2+ drives the non-enzymatic Fenton reaction, generating the fiercely destructive hydroxyl radical (•OH), which oxidizes cell membranes and shatters DNA in fractions of a microsecond [2].',
              'আয়রন মানবদেহের সবচেয়ে প্রাচুর্যময় ট্রেস উপাদান, যা হিমোগ্লোবিনে অক্সিজেন পরিবহন এবং মাইটোকন্ড্রিয়ায় শক্তি তৈরিতে অপরিহার্য [১, ৩]। কিন্তু আয়রনের Fe2+ এবং Fe3+ রূপের মধ্যে সহজে রূপান্তর হওয়ার এই ক্ষমতাই একে মুক্ত অবস্থায় প্রচণ্ড বিপজ্জনক করে তোলে [২, ৩]। হাইড্রোজেন পারঅক্সাইডের উপস্থিতিতে মুক্ত আয়রন কুখ্যাত ফেন্টন বিক্রিয়ার মাধ্যমে ধ্বংসাত্মক হাইড্রক্সিল ফ্রি র্যাডিকেল (•OH) তৈরি করে, যা নিমেষের মধ্যে কোষঝিল্লি ও ডিএনএ ভেঙে চুরমার করে দেয় [২]।'
            ),
            l(
              'To eliminate free iron toxicity, systemic iron homeostasis is governed by the hepatic peptide hormone hepcidin [3]. When systemic iron stores are replete, hepatocytes secrete hepcidin into the bloodstream, where it binds to Ferroportin, the only known cellular iron exporter found on intestinal enterocytes and splenic macrophages [3]. Hepcidin binding induces the internalization and lysosomal degradation of Ferroportin, locking iron securely inside cells and preventing toxic systemic iron overload [3].',
              'এই মারাত্মক ক্ষতি রোধ করতে যকৃত থেকে হেপসিডিন নামক হরমোন নিঃসৃত হয়ে দেহের সম্পূর্ণ আয়রন কঠোর নিয়ন্ত্রণে রাখে [৩]। রক্তে আয়রন পর্যাপ্ত থাকলে হেপসিডিন অন্ত্রের কোষ ও প্লীহার ম্যাক্রোফেজে অবস্থিত ফেরোপোর্টিন চ্যানেলটিকে ধ্বংস করে দেয় [৩]। এর ফলে নতুন আয়রন রক্তে ঢুকতে পারে না এবং কোষে নিরাপদে আবদ্ধ থাকে, যা আয়রনের বিষক্রিয়া থেকে শরীরকে রক্ষা করে [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Practical Clinical Manifestations of Trace Mineral Imbalance', '৫. ব্যবহারিক ক্লিনিক্যাল প্রাসঙ্গিকতা: মিনারেল ভারসাম্যহীনতা'),
          paragraphs: [
            l(
              'Deficiencies and excesses of trace minerals produce vivid, highly specific clinical syndromes [1, 4]. Severe dietary selenium deficiency causes Keshan disease, an endemic dilated congestive cardiomyopathy characterized by extensive myocardial fibrous necrosis due to uncontrolled lipid peroxidation in cardiac myocytes [4]. Severe zinc deficiency causes acrodermatitis enteropathica, presenting with periorificial and acral vesiculobullous dermatitis, alopecia, diarrhea, and profound immune depression due to loss of zinc finger transcription factors and thymulin activity [1].',
              'ট্রেস মিনারেলের অভাব বা আধিক্যে অত্যন্ত সুনির্দিষ্ট রোগ লক্ষণ দেখা দেয় [১, ৪]। খাদ্যে সেলেনিয়ামের তীব্র অভাব হলে হৃদপেশির ক্ষয়ের কারণে কেশান ডিজিজ বা হার্ট ফেইলিউর হয় [৪]। জিঙ্কের মারাত্মক ঘাটতি হলে অ্যাক্রোডার্মাটাইটিস এন্টারোপ্যাথিকা রোগ হয়, যাতে মুখ ও যৌনাঙ্গের চারপাশে চামড়ায় তীব্র ঘা, চুল পড়া, ডায়রিয়া এবং রোগপ্রতিরোধ ক্ষমতা ধসে পড়ে [১]।'
            ),
            l(
              'Conversely, genetic defects in trace mineral transport produce lethal toxicosis [1]. In Wilson’s disease, loss-of-function mutations in the ATP7B copper-transporting P-type ATPase prevent biliary excretion of copper and its incorporation into ceruloplasmin [1]. Copper accumulates within hepatocytes, spills into systemic circulation as free non-ceruloplasmin copper, and deposits in the basal ganglia and Descemet’s corneal membrane (Kayser-Fleischer rings), precipitating acute hepatic failure and severe parkinsonian movement disorders [1].',
              'বিপরীতে মিনারেল পরিবহনের জিনগত ত্রুটিতে মারাত্মক বিষক্রিয়া ঘটে [১]। উইলসন্স ডিজিজ রোগে ATP7B জিনের ত্রুটির কারণে যকৃত অতিরিক্ত কপার পিত্তরসের মাধ্যমে বের করতে পারে না [১]। এই বিষাক্ত কপার রক্তে ছড়িয়ে মস্তিষ্কের বেসাল গ্যাংলিয়ায় এবং চোখের কর্নিয়ায় (কায়সার-ফ্লেইশার রিং) জমা হয়, যার ফলে লিভার সিরোসিস এবং হাত-পা কাঁপুনি ও মানসিক রোগ দেখা দেয় [১]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Educational Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Cellular antioxidant defense is not a single chemical reaction, but an integrated, compartmentalized enzymatic network [1, 2]. While vitamin C maintains active-site iron in hydroxylase enzymes and protects aqueous compartments, copper, zinc, and manganese power the superoxide dismutase front line, and selenium enables glutathione peroxidases to extinguish peroxides [1, 2, 4].',
              'কোষীয় অ্যান্টিঅক্সিডেন্ট সুরক্ষা কোনো একক বিক্রিয়া নয়, বরং সুসংগঠিত একটি সমন্বিত নেটওয়ার্ক [১, ২]। ভিটামিন সি যেখানে কোলাজেন তৈরি ও তরল অংশে জারণ রোধ করে, সেখানে কপার, জিঙ্ক ও ম্যাঙ্গানিজ সুপারঅক্সাইড ধ্বংসের প্রথম সারিতে থাকে এবং সেলেনিয়াম পারঅক্সাইডকে পানিতে রূপান্তর করে [১, ২, ৪]।'
            ),
            l(
              'Transition metals like iron must be perpetually chaperoned by transport and storage proteins (transferrin, ferritin) to prevent catastrophic Fenton radical generation, with the hepatic hepcidin-ferroportin axis standing as the master systemic rheostat regulating iron flow [2, 3].',
              'আয়রনের মতো রূপান্তরশীল ধাতুগুলোকে অবশ্যই ফেরিটিন ও ট্রান্সফারিন প্রোটিনের খাঁচায় বন্দি রাখতে হবে যাতে ফেন্টন বিক্রিয়া না ঘটে; আর যকৃতের হেপসিডিন-ফেরোপোর্টিন অক্ষটি মানবদেহের সম্পূর্ণ আয়রন প্রবাহের প্রধান চাবিকাঠি হিসেবে কাজ করে [২, ৩]।'
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
          heading: l('1. Biophysics of Radical Generation and Diffusion Distances', '১. র্যাডিকেল উৎপাদনের বায়োফিজিক্স ও প্রসারণ সীমা'),
          paragraphs: [
            l(
              'The physics and chemistry of reactive oxygen species (ROS) are fundamentally defined by their thermodynamic reduction potentials and cellular diffusion radii [2]. Superoxide (O2•-) possesses a modest reduction potential (E0\' = -0.16 V at pH 7.0) and is negatively charged, preventing it from crossing hydrophobic lipid bilayers except via anion channels such as voltage-dependent anion channels (VDAC) in the outer mitochondrial membrane [2]. Its half-life in aqueous solution is approximately 1 to 4 microseconds [2].',
              'ক্ষতিকর অক্সিজেন প্রজাতির (ROS) আচরণ তাদের থার্মোডাইনামিক বিজারণ ক্ষমতা এবং কোষে ছড়িয়ে পড়ার দূরত্বের ওপর নির্ভর করে [২]। সুপারঅক্সাইড (O2•-) একটি ঋণাত্মক চার্জযুক্ত কণা হওয়ায় এটি কোষঝিল্লি সহজে ভেদ করতে পারে না; এর আয়ুষ্কাল মাত্র ১ থেকে ৪ মাইক্রোসেকেন্ড [২]।'
            ),
            l(
              'In stark contrast, the hydroxyl radical (•OH) generated via Fenton chemistry boasts an immense positive reduction potential of +2.31 V, making it one of the most powerful oxidants known in chemistry [2]. Because its reaction rate constants with virtually all biological molecules approach the diffusion limit (k ~ 10^9 to 10^10 M^-1 s^-1), •OH has an estimated in vivo half-life of less than one nanosecond and a diffusion radius of less than two nanometers [2]. Thus, •OH inflicts catastrophic oxidative damage at its exact site of formation [2].',
              'এর সম্পূর্ণ বিপরীতে, ফেন্টন বিক্রিয়ায় উৎপন্ন হাইড্রক্সিল র্যাডিকেল (•OH) হলো প্রকৃতিতে জানা সবচেয়ে শক্তিশালী জারণকারী উপাদান [২]। এর বিক্রিয়ার গতি আলোর গতির মতো দ্রুত হওয়ায় এর আয়ুষ্কাল মাত্র এক ন্যানোসেকেন্ডেরও কম এবং এটি দুই ন্যানোমিটারের বেশি দূরে যেতে পারে না [২]। ফলে যেখানে এই র্যাডিকেল তৈরি হয়, তার ঠিক পাশেই এটি ডিএনএ, প্রোটিন বা ঝিল্লি সাথে সাথে ধ্বংস করে ফেলে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Catalytic Cycle of Prolyl 4-Hydroxylase and HIF-1alpha Regulation', '২. প্রলাইল ৪-হাইড্রক্সিলেজের রাসায়নিক চক্র ও HIF-1alpha নিয়ন্ত্রণ'),
          paragraphs: [
            l(
              'Prolyl 4-hydroxylase operates through a non-heme iron(II) and 2-oxoglutarate (alpha-ketoglutarate)-dependent catalytic mechanism [1, 5]. During a productive turnover, molecular oxygen, 2-oxoglutarate, and the peptidyl-proline substrate bind the active site Fe2+. Oxidative decarboxylation of 2-oxoglutarate yields succinate, carbon dioxide, and a highly reactive ferryl intermediate [Fe(IV)=O], which abstracts a hydrogen atom from C-4 of proline to deliver the hydroxyl group [1, 5].',
              'প্রলাইল ৪-হাইড্রক্সিলেজ এনজাইমটি আয়রন (Fe2+) এবং ২-অক্সোগ্লুটারেটের সাহায্যে কোলাজেন তৈরির বিক্রিয়া সম্পন্ন করে [১, ৫]। এই বিক্রিয়ার সময় অক্সিজেন যুক্ত হয়ে একটি অত্যন্ত সক্রিয় ফেরিল [Fe(IV)=O] মধ্যবর্তী যৌগ তৈরি হয়, যা প্রোলিন অ্যামিনো অ্যাসিডের ৪ নম্বর কার্বনে একটি হাইড্রক্সিল গ্রুপ লাগিয়ে দেয় এবং নিজে সাকসিনেট ও কার্বন ডাই-অক্সাইডে রূপান্তরিত হয় [১, ৫]।'
            ),
            l(
              'Approximately once every several hundred cycles, the enzyme undergoes uncoupled decarboxylation of 2-oxoglutarate in the absence of proline substrate, generating a ferryl species that accidentally oxidizes the catalytic Fe2+ to ferric iron (Fe3+) [1, 5]. Fe3+ cannot bind oxygen, rendering the enzyme completely inactive [5]. Ascorbate specifically binds the active site, transferring a single electron to reduce Fe3+ back to catalytic Fe2+, thereby rescuing the enzyme from suicide inactivation [1, 5]. An identical mechanism governs Hypoxia-Inducible Factor prolyl hydroxylases (PHD1–3), linking vitamin C status directly to cellular oxygen sensing and angiogenesis [1, 5].',
              'কয়েকশত চক্রের মধ্যে একবার সাবস্ট্রেট ছাড়া অযাচিত বিক্রিয়া ঘটে এনজাইমের সক্রিয় Fe2+ জারিত হয়ে অকেজো Fe3+ তে পরিণত হয় [১, ৫]। Fe3+ তৈরি হলে এনজাইমটি চিরতরে বন্ধ হয়ে যায় [৫]। ভিটামিন সি এখানে ত্রাতা হিসেবে উপস্থিত হয়ে ইলেকট্রন দান করে Fe3+ কে পুনরায় সক্রিয় Fe2+ তে রূপান্তর করে [১, ৫]। একই প্রক্রিয়ায় ভিটামিন সি শরীরের অক্সিজেন সেন্সর HIF এনজাইম নিয়ন্ত্রণ করে টিউমার ও নতুন রক্তনালী বৃদ্ধি রোধ করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Selenocysteine Incorporation Genetics and GPx4 Ferroptosis Inhibition', '৩. সেলেনোসিস্টিন অন্তর্ভুক্তি এবং GPx4 দ্বারা ফেরোপ্টোসিস রোধ'),
          paragraphs: [
            l(
              'The translation of selenoproteins represents an extraordinary exception to the universal genetic code [4]. The codon UGA, normally recognized as a translation termination signal, is recoded to specify Selenocysteine (Sec) through the presence of a specialized cis-acting hairpin loop in the 3\'-untranslated region (3\'-UTR) of the mRNA known as the SECIS (Selenocysteine Insertion Sequence) element [4]. During ribosome translocation, the SECIS-binding protein 2 (SBP2) recruits a dedicated elongation factor (EFSec) carrying selenocysteine-charged tRNA([Ser]Sec), inserting Sec into the nascent polypeptide chain [4].',
              'সেলেনোপ্রোটিন তৈরির অনুবাদ প্রক্রিয়াটি বংশগতিবিদ্যার সাধারণ নিয়মের একটি অনন্য ব্যতিক্রম [৪]। এমআরএনএ-এর UGA কোডনটি সাধারণত প্রোটিন তৈরি থামানোর সংকেত দেয়; কিন্তু বিশেষ SECIS হেয়ারপিন কাঠামোর উপস্থিতিতে রাইবোজোম একে না থামিয়ে সেলেনোসিস্টিন অ্যামিনো অ্যাসিড হিসেবে গ্রহণ করে [৪]। বিশেষ প্রোটিন ও ইলংগেশন ফ্যাক্টরের সাহায্যে সেলেনোসিস্টিন সরাসরি এনজাইমের গঠনে যুক্ত হয় [৪]।'
            ),
            l(
              'Selenocysteine differs critically from cysteine in possessing an ionization pKa of ~5.2 compared to ~8.3 for the cysteine thiol group; consequently, at physiological pH 7.4, selenocysteine exists virtually 100% in its deprotonated, hyper-nucleophilic selenolate (-Se-) state [4]. Glutathione Peroxidase 4 (GPx4) is unique among antioxidant enzymes in that its compact active site can accept complex phospholipid hydroperoxides directly embedded inside lipid bilayers [4]. Genetic deletion or pharmacological inhibition of GPx4 causes catastrophic, unrestrained lipid peroxidation that triggers ferroptosis—a distinct, iron-dependent form of non-apoptotic necrotic cell death [2, 4].',
              'সেলেনোসিস্টিন সাধারণ সিস্টিনের চেয়ে অনেক বেশি কার্যকর, কারণ সাধারণ দৈহিক পিএইচ ৭.৪-এ এটি শতভাগ বিমুক্ত আয়নিত অবস্থায় থাকে যা অতি দ্রুত পারঅক্সাইড ধ্বংস করতে পারে [৪]। GPx4 এনজাইমটি সরাসরি কোষঝিল্লির ফ্যাটি অ্যাসিডের পারঅক্সাইড ভেঙে ফেলতে পারে [৪]। GPx4 কাজ না করলে মেমব্রেনের চর্বিতে দাবানলের মতো জারণ ছড়িয়ে পড়ে এবং লোহা-নির্ভর বিশেষ কোষমৃত্যু (ফেরোপ্টোসিস) ঘটে [২, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Cellular Iron Trafficking: DMT1, Ferritin Nanocages and Ferroportin', '৪. কোষীয় আয়রন পরিবহন: DMT1, ফেরিটিন খাঁচা ও ফেরোপোর্টিন'),
          paragraphs: [
            l(
              'Dietary inorganic non-heme iron exists predominantly as insoluble ferric iron (Fe3+), which must be reduced to ferrous iron (Fe2+) at the enterocyte brush border by duodenal cytochrome b (Dcytb), a ferrireductase dependent on luminal ascorbic acid [3]. Fe2+ is imported across the apical microvillus membrane by Divalent Metal Transporter 1 (DMT1 / SLC11A2) via proton-coupled symport [3].',
              'খাবারের অজৈব আয়রন সাধারণত অদ্রবণীয় Fe3+ হিসেবে থাকে, যা অন্ত্রের ব্রাশ-বর্ডারে ভিটামিন সি-এর সাহায্যে Fe2+ তে বিজারিত হয় [৩]। এরপর প্রোটন-নির্ভর DMT1 চ্যানেলের মাধ্যমে এটি এন্টারোসাইট কোষের ভেতরে শোষিত হয় [৩]।'
            ),
            l(
              'Within enterocytes and reticuloendothelial macrophages, excess iron is sequestered inside ferritin, a 24-subunit spherical protein nanocage with an outer diameter of 12 nanometers and an inner cavity capable of storing up to 4,500 iron atoms in an inert, non-toxic ferrihydrite mineral core [3]. When systemic iron export is required, ferrous iron is exported across the basolateral membrane into plasma via Ferroportin (SLC40A1), where the membrane-bound ferroxidases hephaestin and ceruloplasmin re-oxidize Fe2+ to Fe3+ for safe, high-affinity loading onto serum transferrin [3].',
              'কোষের ভেতরে অতিরিক্ত আয়রন ফেরিটিন নামক ২৪টি সাবইউনিটের বিশাল গোলাকার প্রোটিন খাঁচার মধ্যে বন্দি থাকে, যার একটি খাঁচায় প্রায় সাড়ে চার হাজার আয়রন পরমাণু নিরাপদে জমা থাকতে পারে [৩]। রক্তে আয়রনের প্রয়োজন হলে ফেরোপোর্টিন চ্যানেলের মাধ্যমে তা বাইরে বের হয় এবং হেফেস্টিন এনজাইম একে জারিত করে ট্রান্সফারিন প্রোটিনে লোড করে নিরাপদ রক্ত সঞ্চালনে পাঠিয়ে দেয় [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Laboratory Differential Diagnosis of Microcytic Anemias', '৫. মাইক্রোসাইটিক অ্যানিমিয়ার ল্যাবরেটরি রোগনির্ণয়'),
          paragraphs: [
            l(
              'Microcytic anemias (MCV < 80 fL) demand precise laboratory discrimination between absolute Iron Deficiency Anemia (IDA), Anemia of Chronic Disease / Inflammation (ACD), and hemoglobinopathies (such as thalassemia trait) [3]. While serum iron and transferrin saturation (TSAT) are depressed in both IDA and ACD, serum ferritin and Total Iron-Binding Capacity (TIBC) provide the critical differential: TIBC is elevated in IDA (> 400 mcg/dL) as hepatocytes upregulate transferrin synthesis, but suppressed in ACD (< 250 mcg/dL) [3].',
              'রক্তে মাইক্রোসাইটিক অ্যানিমিয়া (MCV < ৮০ fL) দেখা দিলে আয়রনের অভাবজনিত রক্তস্বল্পতা (IDA), দীর্ঘস্থায়ী প্রদাহজনিত রক্তস্বল্পতা (ACD) এবং থ্যালাসেমিয়া ট্রেইটের মধ্যে সূক্ষ্ম পার্থক্য নির্ণয় করতে হয় [৩]। যদিও IDA ও ACD উভয় ক্ষেত্রেই সিরাম আয়রন কম থাকে, কিন্তু TIBC পরীক্ষা এদের আলাদা করে: আয়রনের অভাবে TIBC অনেক বেশি থাকে (> ৪০০ mcg/dL), কিন্তু প্রদাহে এটি কমে যায় (< ২৫০ mcg/dL) [৩]।'
            ),
            l(
              'Serum ferritin is an acute-phase reactant; in patients with concurrent autoimmune disease, chronic kidney disease, or occult infection, ferritin can be elevated despite severe functional iron deficiency [3]. In such ambiguous cases, measuring the Soluble Transferrin Receptor (sTfR) or calculating the sTfR-ferritin index (sTfR / log ferritin) provides definitive diagnostic clarity: sTfR expression is governed strictly by cellular iron requirements and remains unaffected by inflammatory cytokines [3].',
              'ফেরিটিন প্রদাহের সময় রক্তে বেড়ে যায়; তাই রোগীর ইনফেকশন বা অটোইমিউন রোগ থাকলে আয়রনের অভাব থাকা সত্ত্বেও ফেরিটিন আপাতদৃষ্টিতে স্বাভাবিক বা বেশি দেখাতে পারে [৩]। এমন জটিল ক্ষেত্রে সলিউবল ট্রান্সফারিন রিসেপ্টর (sTfR) পরীক্ষা অত্যন্ত নির্ভুল তথ্য দেয়; কারণ প্রদাহে এর মাত্রা বাড়ে না, কেবল কোষে সত্যিকারের আয়রন ঘাটতি হলেই এটি বৃদ্ধি পায় [৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis: Redox Metalloenzymes and Mineral Balance', '৬. প্রাতিষ্ঠানিক সমন্বয়: রেডক্স মেটালো-এনজাইম ও মিনারেল ভারসাম্য'),
          paragraphs: [
            l(
              'In summary, cellular antioxidant capacity is governed by a compartmentalized, hierarchical network of mineral-dependent enzymes working in concert with dietary electron donors [1, 2]. Cytoplasmic and mitochondrial superoxide dismutases (Cu, Zn, Mn) eliminate superoxide by converting it to hydrogen peroxide, which is subsequently reduced to water by selenocysteine glutathione peroxidases and heme catalases [2, 4].',
              'সংক্ষেপে, কোষীয় অ্যান্টিঅক্সিডেন্ট ক্ষমতা কোনো একক উপাদানের ওপর নির্ভর করে না, বরং এটি মিনারেল-নির্ভর এনজাইম এবং খাদ্য থেকে পাওয়া ভিটামিনের একটি অসাধারণ সমন্বয় [১, ২]। সাইটোপ্লাজম ও মাইটোকন্ড্রিয়ার SOD এনজাইমগুলো (কপার, জিঙ্ক, ম্যাঙ্গানিজ) সুপারঅক্সাইডকে পারঅক্সাইডে রূপান্তর করে, যা পরবর্তীতে সেলেনিয়াম-যুক্ত GPx এবং আয়রন-যুক্ত ক্যাটালেজ দ্বারা নিরাপদ পানিতে পরিণত হয় [২, ৪]।'
            ),
            l(
              'Disruptions of trace mineral homeostasis—whether due to primary dietary starvation, genetic transporter mutations, or systemic inflammatory hepcidin elevation—precipitate severe human pathologies spanning scurvy, Keshan cardiomyopathy, Wilson copper toxicosis, and refractory anemia [1, 3, 4].',
              'ট্রেস মিনারেলের ভারসাম্যে সামান্য বিচ্যুতি ঘটলেই মারাত্মক রোগ দেখা দেয়—যেমন ভিটামিন সি-এর অভাবে স্কার্ভি, সেলেনিয়ামের অভাবে হার্ট ফেইলিউর, কপারের বিষক্রিয়ায় উইলসন্স ডিজিজ এবং প্রদাহের কারণে দুরারোগ্য রক্তস্বল্পতা [১, ৩, ৪]।'
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
          heading: l('1. Ultrafast Radical Kinetics and Quantum Tunneling in Metalloenzymes', '১. অতি-দ্রুত র্যাডিকেল গতিবিদ্যা ও কোয়ান্টাম টানেলিং'),
          paragraphs: [
            l(
              'Biophysical characterization of superoxide dismutases reveals electrostatic guidance mechanisms that accelerate substrate diffusion into the active site [2]. Positive electrostatic potentials generated by conserved lysine (Lys122 and Lys136) and arginine (Arg143) residues in human Cu/Zn-SOD1 create a long-range electric field that funnels the negatively charged superoxide anion directly into the narrow catalytic channel toward the active-site copper ion [2].',
              'বায়োফিজিক্যাল গবেষণায় দেখা গেছে সুপারঅক্সাইড ডিসমিউটেজ এনজাইমের প্রবেশমুখে বিশেষ ধনাত্মক চার্জযুক্ত লাইসিন ও আরজিনিন অ্যামিনো অ্যাসিডের একটি শক্তিশালী বৈদ্যুতিক ক্ষেত্র থাকে [২]। এই বৈদ্যুতিক টান ঋণাত্মক সুপারঅক্সাইডকে চুম্বকের মতো সোজা এনজাইমের কপার পরমাণুর দিকে টেনে নেয়, যার ফলে বিক্রিয়াটি অতি দ্রুত সম্পন্ন হয় [২]।'
            ),
            l(
              'Furthermore, proton-coupled electron transfer (PCET) in manganese superoxide dismutase (SOD2) involves quantum mechanical hydrogen tunneling [2]. During turnover between Mn3+ and Mn2+, the proton transfer from an active-site water molecule occurs over distances where the wave-particle duality of the proton dominates classical activation barriers, explaining how SOD2 maintains extreme turnover rates even under profound hypothermic conditions [2].',
              'এছাড়াও মাইটোকন্ড্রিয়ার Mn-SOD2 এনজাইমে ইলেকট্রন ও প্রোটন স্থানান্তরের সময় কোয়ান্টাম মেকানিক্যাল হাইড্রোজেন টানেলিং ঘটে [২]। এর ফলে সাধারণ রাসায়নিক বাধার চেয়ে অনেক সহজে প্রোটন স্থানান্তরিত হয় এবং প্রচণ্ড ঠান্ডা বা বিরূপ পরিস্থিতিতেও এনজাইমটি পুরোদমে সচল থাকে [২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Hypoxia-Inducible Factor Biology and 2-Oxoglutarate Dioxygenases', '২. হাইপোক্সিয়া-ইন্ডিউসিবল ফ্যাক্টর জীববিদ্যা ও ২-অক্সোগ্লুটারেট এনজাইম'),
          paragraphs: [
            l(
              'Under normoxic physiological conditions, the alpha-subunit of Hypoxia-Inducible Factor-1 (HIF-1alpha) is constitutively synthesized and destroyed within minutes (half-life < 5 minutes) through the action of three oxygen-, iron-, and ascorbate-dependent prolyl hydroxylase domain enzymes (PHD1, PHD2, PHD3 / EGLN1–3) [1, 5]. PHDs hydroxylate two specific proline residues (Pro402 and Pro564) located within the oxygen-dependent degradation domain of HIF-1alpha [5].',
              'স্বাভাবিক অক্সিজেনের উপস্থিতিতে কোষে HIF-1alpha প্রোটিন তৈরি হওয়া মাত্রই কয়েক মিনিটের মধ্যে ধ্বংস হয়ে যায়, যা তিনটি ভিটামিন সি ও আয়রন-নির্ভর PHD এনজাইম দ্বারা নিয়ন্ত্রিত হয় [১, ৫]। এই এনজাইমগুলো HIF-1alpha প্রোটিনের Pro402 এবং Pro564 প্রোলিন অ্যামিনো অ্যাসিডে হাইড্রক্সিল গ্রুপ লাগিয়ে দেয় [৫]।'
            ),
            l(
              'Hydroxylated Pro402/564 is recognized with nanomolar affinity by the von Hippel-Lindau tumor suppressor protein (pVHL), an E3 ubiquitin ligase substrate recognition component [5]. pVHL polyubiquitinates HIF-1alpha, directing it to the 26S proteasome for degradation [5]. In severe ascorbate depletion or cellular hypoxia, PHD activity ceases; unhydroxylated HIF-1alpha escapes pVHL binding, heterodimerizes with HIF-1beta in the nucleus, and recruits p300/CBP to drive transcription of over 100 hypoxia-response genes, including vascular endothelial growth factor (VEGF), erythropoietin (EPO), and glucose transporter-1 (GLUT1) [1, 5].',
              'হাইড্রক্সিলেশন সম্পন্ন হলে ভন হিপেল-লিন্ডাউ (pVHL) টিউমার সাপ্রেসার প্রোটিন একে চিনতে পারে এবং প্রোটিয়েজোমে পাঠিয়ে ধ্বংস করে দেয় [৫]। কিন্তু ভিটামিন সি-এর তীব্র অভাব হলে বা কোষে অক্সিজেন কমে গেলে এই ধ্বংস প্রক্রিয়া বন্ধ হয়ে যায়; ফলে HIF প্রোটিন নিউক্লিয়াসে গিয়ে নতুন রক্তনালী তৈরি (VEGF) এবং লোহিত রক্তকণিকা বৃদ্ধির (EPO) শত শত জিনকে অতিরিক্ত সক্রিয় করে তোলে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Selenoprotein Crystallography, Selenocysteine Lyase & Keshan Disease', '৩. সেলেনোপ্রোটিন স্ফটিক বিজ্ঞান ও কেশান কার্ডিওমায়োপ্যাথি'),
          paragraphs: [
            l(
              'Structural biochemistry of human glutathione peroxidases reveals that the active-site catalytic tetrad consists of Selenocysteine (Sec47), Glutamine (Gln82), Tryptophan (Trp160), and Asparagine (Asn161) [4]. The selenium atom is positioned within an active-site cleft stabilized by hydrogen bonds from the carboxamide nitrogen of glutamine and the indole ring of tryptophan, which lower the pKa of the selenol group and direct peroxide oxygen attack [4].',
              'মানবদেহের গ্লুটাথিয়ন পারঅক্সিডেজের এক্স-রে বিশ্লেষণে দেখা গেছে এর সক্রিয় স্থানটি সেলেনোসিস্টিন, গ্লুটামিন, ট্রিপটোফ্যান ও অ্যাসপারাজিন অ্যামিনো অ্যাসিডের একটি নিখুঁত জ্যামিতিক নকশায় সজ্জিত [৪]। ট্রিপটোফ্যান ও গ্লুটামিন হাইড্রোজেন বন্ধনের মাধ্যমে সেলেনিয়াম পরমাণুটিকে এমনভাবে ধরে রাখে যাতে পারঅক্সাইড অণু সেখানে আসা মাত্রই ধ্বংস হয়ে যায় [৪]।'
            ),
            l(
              'During intracellular turnover of selenoproteins, Selenocysteine Lyase (SCLY) selectively decomposes free selenocysteine into alanine and hydrogen selenide (H2Se), preventing toxic non-specific incorporation of selenocysteine into random proteins while salvaging selenium for selenophosphate synthetase 2 (SEPHS2) [4]. In Keshan disease, endemic dietary selenium deficiency exhausts myocardial GPx1 and GPx4, leaving heart muscle cells vulnerable to Coxsackie B virus-induced oxidative enteroviral genomic hypermutation and fulminant dilated cardiomyopathy [4].',
              'সেলেনোপ্রোটিন ভাঙার সময় সেলেনোসিস্টিন লাইয়েজ (SCLY) এনজাইম সেলেনিয়ামকে মুক্ত করে নতুন প্রোটিন তৈরির জন্য বাঁচিয়ে রাখে [৪]। চীনে অবস্থিত কেশান অঞ্চলের মাটিতে সেলেনিয়াম না থাকায় মানুষের হৃদপেশিতে GPx এনজাইম ফুরিয়ে যায়; ফলে সাধারণ ভাইরাস আক্রমণেও হার্টের মেমব্রেনে তীব্র জারণ ঘটে এবং প্রাণঘাতী হার্ট ফেইলিউর দেখা দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Molecular Hepcidin Transcriptional Circuitry: BMP6 vs IL-6/STAT3', '৪. হেপসিডিন জিনের আণবিক নিয়ন্ত্রণ: BMP6 বনাম IL-6/STAT3 পথ'),
          paragraphs: [
            l(
              'The transcriptional regulation of the hepcidin antimicrobial peptide gene (HAMP) in hepatocytes represents an intricate integration of systemic iron stores and inflammatory signaling [3]. Under conditions of iron sufficiency, sinusoidal endothelial cells secrete Bone Morphogenetic Protein 6 (BMP6), which binds the BMP receptor complex and coreceptor Hemojuvelin (HJV) on hepatocytes [3]. This activates the intracellular SMAD1/5/8 pathway, driving SMAD4 translocation to the HAMP promoter to induce hepcidin transcription [3].',
              'যকৃতে হেপসিডিন জিনের (HAMP) নিয়ন্ত্রণ একটি চমৎকার দ্বিমুখী আণবিক সংকেতের মাধ্যমে চলে [৩]। শরীরে আয়রন বাড়লে রক্তনালীর কোষ থেকে BMP6 প্রোটিন ক্ষরিত হয়, যা হেপাটোসাইটের হেমোজুভেলিন রিসেপ্টরে বসে SMAD সংকেতের মাধ্যমে হেপসিডিন তৈরির নির্দেশ দেয় [৩]। এর ফলে নতুন আয়রন শোষণ কমে যায় [৩]।'
            ),
            l(
              'In parallel, during bacterial infection or systemic inflammation, circulating interleukin-6 (IL-6) binds the gp130/IL-6R complex on hepatocytes, activating Janus kinase (JAK) and phosphorylating Signal Transducer and Activator of Transcription 3 (STAT3) [3]. Phosphorylated STAT3 dimers translocate into the nucleus and bind a dedicated STAT3-binding element in the HAMP promoter, hyperactivating hepcidin synthesis independent of iron stores [3]. This evolutionary defense sequesters iron to starve invading siderophilic microorganisms, but leads to the clinical development of Anemia of Chronic Disease [3].',
              'অপরদিকে ইনফেকশন বা প্রদাহের সময় ইন্টারলিউকিন-৬ (IL-6) যকৃতের কোষে গিয়ে JAK-STAT3 সংকেতের মাধ্যমে সরাসরি হেপসিডিন তৈরি শতগুণ বাড়িয়ে দেয় [৩]। এই প্রতিরোধ ব্যবস্থা রক্তে মুক্ত আয়রন কমিয়ে দিয়ে ক্ষতিকর ব্যাকটেরিয়ার খাদ্য সংকট তৈরি করে; কিন্তু দীর্ঘদিন এই অবস্থা চললে অস্থিমজ্জা আয়রন পায় না এবং প্রদাহজনিত রক্তস্বল্পতা তৈরি হয় [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Complex Clinical Pathophysiology: Menkes, Wilson & Aceruloplasminemia', '৫. জটিল ক্লিনিক্যাল রোগতত্ত্ব: মেনকেস, উইলসন্স ও অ্যাসিরুলোপ্লাজমিনেমিয়া'),
          paragraphs: [
            l(
              'Genetic copper and iron transport channelopathies demonstrate the essential role of specific P-type ATPases [1, 3]. Menkes disease is an X-linked recessive lethal neurodevelopmental disorder caused by mutations in ATP7A, which mediates copper export from enterocytes into portal circulation [1]. Copper remains trapped inside enterocytes and is shed in feces, depriving copper-dependent enzymes across the body: lysyl oxidase failure produces arterial tortuosity, tyrosinase failure causes albinism, and cytochrome c oxidase failure triggers catastrophic neurodegeneration with pathognomonic pili torti (steely, brittle hair) [1].',
              'কপার ও আয়রন পরিবহনের বংশগত ত্রুটি মারাত্মক স্নায়ুরোগ সৃষ্টি করে [১, ৩]। মেনকেস ডিজিজ একটি প্রাণঘাতী এক্স-লিংকড রোগ যা ATP7A জিনের মিউটেশনে ঘটে; এর ফলে অন্ত্রের কোষ থেকে কপার রক্তে বের হতে পারে না এবং মল দিয়ে অপচয় হয় [১]। কপার না থাকায় কোলাজেনের এনজাইম অচল হয়ে রক্তনালী পেঁচিয়ে যায় এবং স্নায়ু ধ্বংস হয়ে শিশু বয়সেই মৃত্যু ঘটে [১]।'
            ),
            l(
              'In contrast, aceruloplasminemia is an autosomal recessive disorder caused by mutations in the CP gene encoding the multicopper ferroxidase ceruloplasmin [3]. Because ceruloplasmin is required to oxidize Fe2+ exported by Ferroportin into Fe3+ for transferrin loading, lack of ferroxidase activity traps iron inside macrophages, hepatocytes, and basal ganglia astrocytes, producing simultaneous systemic microcytic anemia, diabetes mellitus, retinal degeneration, and severe choreoathetosis [3].',
              'বিপরীতে অ্যাসিরুলোপ্লাজমিনেমিয়া রোগে সিরুলোপ্লাজমিন এনজাইম নষ্ট থাকায় ফেরোপোর্টিন দিয়ে বের হওয়া আয়রন Fe3+ তে জারিত হতে পারে না; ফলে আয়রন ট্রান্সফারিনে লোড হতে না পেরে যকৃত, মস্তিষ্ক ও অগ্ন্যাশয়ে মারাত্মকভাবে বিষাক্ত হয়ে জমা হয় এবং ডায়াবেটিস ও প্যারালাইসিস ঘটায় [৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Frontiers: Ferroptosis Inducers and Hepcidin Therapeutics', '৬. অনুবাদমূলক গবেষণা: ফেরোপ্টোসিস ও হেপসিডিন থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'Exploiting the biochemical vulnerability of cancer cells to iron-dependent lipid peroxidation has established ferroptosis induction as a transformative oncology frontier [2, 4]. Malignant therapy-resistant cancer stem cells frequently exhibit high dependency on GPx4 and SLC7A11 (cystine/glutamate antiporter system xc-) to survive high metabolic oxidative stress [4]. Small-molecule GPx4 inhibitors (such as RSL3 and ML210) selectively induce catastrophic accumulation of toxic lipid hydroperoxides in drug-resistant tumors, eradicating malignant cells through non-apoptotic ferroptotic lysis [4].',
              'ক্যান্সার চিকিৎসায় আয়রন ও লিপিড জারণের বিশেষ দুর্বলতাকে কাজে লাগিয়ে ফেরোপ্টোসিস থেরাপি একটি বিপ্লব সৃষ্টি করেছে [২, ৪]। ক্যান্সার কোষগুলো বেঁচে থাকার জন্য GPx4 এনজাইমের ওপর অতিরিক্ত নির্ভরশীল থাকে [৪]। আধুনিক গবেষণায় তৈরি RSL3 জাতীয় ওষুধ এই এনজাইমকে অচল করে দিয়ে ক্যান্সার কোষের মেমব্রেনে প্রচণ্ড পারঅক্সিডেশন ঘটায় এবং দ্রুত টিউমার ধ্বংস করে দেয় [৪]।'
            ),
            l(
              'Concurrently, in hematology, engineered synthetic hepcidin mimetics (such as rusfertide) and oral ferroportin inhibitors are revolutionizing the clinical treatment of polycythemia vera and hereditary hemochromatosis by restricting iron delivery to erythroid precursors, while anti-hepcidin monoclonal antibodies and hemojuvelin traps reverse refractory Anemia of Chronic Disease [3].',
              'একই সাথে হেমাটোলজিতে কৃত্রিম হেপসিডিন ওষুধ (যেমন রাসফারটাইড) তৈরি করা হয়েছে যা রক্তে অতিরিক্ত লোহিত কণিকা তৈরি রোধ করে পলিসাইথিমিয়া ও অতিরিক্ত আয়রন রোগ নিরাময় করছে; আবার হেপসিডিন-দমনকারী অ্যান্টিবডি দিয়ে প্রদাহজনিত দীর্ঘস্থায়ী রক্তস্বল্পতা সফলভাবে দূর করা সম্ভব হচ্ছে [৩]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential antioxidant and iron homeostatic network: Superoxide dismutation (Cu/Zn/Mn-SOD) to hydrogen peroxide, reduction by selenium-GPx and catalase, ascorbate Fe2+ dioxygenase maintenance, and the hepcidin-ferroportin axis.',
      'পর্যায়ক্রমিক অ্যান্টিঅক্সিডেন্ট ও আয়রন নিয়ন্ত্রণ নেটওয়ার্ক: সুপারঅক্সাইড রূপান্তর (Cu/Zn/Mn-SOD), সেলেনিয়াম-GPx ও ক্যাটালেজ দ্বারা পানিতে বিজারণ, অ্যাসকরবেট Fe2+ সুরক্ষা এবং হেপসিডিন-ফেরোপোর্টিন অক্ষ।'
    ),
    steps: [
      l(
        'Step 1: Superoxide dismutases (cytosolic Cu/Zn-SOD1 and mitochondrial Mn-SOD2) capture respiratory superoxide radicals and convert them into hydrogen peroxide and oxygen.',
        'ধাপ ১: সুপারঅক্সাইড ডিসমিউটেজ এনজাইম (Cu/Zn-SOD1 ও Mn-SOD2) মাইটোকন্ড্রিয়ায় তৈরি সুপারঅক্সাইড র্যাডিকেল ধরে হাইড্রোজেন পারঅক্সাইড ও অক্সিজেনে রূপান্তর করে।'
      ),
      l(
        'Step 2: Selenocysteine glutathione peroxidases (GPx1–4) and peroxisomal catalase rapidly reduce hydrogen peroxide and lipid hydroperoxides into harmless water.',
        'ধাপ ২: সেলেনিয়াম-যুক্ত গ্লুটাথিয়ন পারঅক্সিডেজ (GPx1–4) ও ক্যাটালেজ হাইড্রোজেন পারঅক্সাইড ও ক্ষতিকর চর্বি পারঅক্সাইডকে দ্রুত নিরাপদ পানিতে পরিণত করে।'
      ),
      l(
        'Step 3: Ascorbic acid donates electrons to maintain active-site Fe2+ in prolyl and lysyl hydroxylases, driving collagen triple-helix stabilization and normoxic HIF-1alpha regulation.',
        'ধাপ ৩: ভিটামিন সি ইলেকট্রন দান করে প্রলাইল হাইড্রক্সিলেজে আয়রন Fe2+ বজায় রাখে, যা কোলাজেন শক্ত করে এবং অতিরিক্ত রক্তনালী বৃদ্ধি রোধ করে।'
      ),
      l(
        'Step 4: Cellular ferritin nanocages sequester up to 4,500 iron atoms, preventing the destructive Fe2+-mediated Fenton reaction and hydroxyl radical generation.',
        'ধাপ ৪: ফেরিটিন প্রোটিনের খাঁচা কোষে সাড়ে চার হাজার আয়রন আটকে রেখে ক্ষতিকর ফেন্টন বিক্রিয়া ও হাইড্রক্সিল র্যাডিকেল তৈরি বন্ধ করে।'
      ),
      l(
        'Step 5: Hepatic hepcidin binds Ferroportin to trigger its degradation, precisely regulating systemic iron absorption and reticuloendothelial iron release.',
        'ধাপ ৫: যকৃতের হেপসিডিন হরমোন ফেরোপোর্টিন চ্যানেল নিয়ন্ত্রণ করে অন্ত্রে আয়রন শোষণ ও রক্ত সঞ্চালনের নিখুঁত ভারসাম্য রক্ষা করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old patient with severe rheumatoid arthritis presents with chronic fatigue, normocytic to slightly microcytic anemia (Hb = 9.2 g/dL, MCV = 78 fL), serum iron = 22 mcg/dL (low), TIBC = 210 mcg/dL (low, reference 250–400 mcg/dL), and serum ferritin = 380 ng/mL (elevated, reference 30–250 ng/mL). Which molecular mechanism explains why oral iron supplements fail to correct this patient’s anemia?',
      'তীব্র রিউমাটয়েড আর্থ্রাইটিসে আক্রান্ত এক ৪৫ বছর বয়সী রোগীর দীর্ঘস্থায়ী ক্লান্তি ও রক্তস্বল্পতা রয়েছে (Hb = ৯.২ g/dL, MCV = ৭৮ fL)। রক্ত পরীক্ষায় সিরাম আয়রন = ২২ mcg/dL (কম), TIBC = ২১০ mcg/dL (কম) এবং সিরাম ফেরিটিন = ৩৮০ ng/mL (বেশি)। কোন আণবিক প্রক্রিয়ার কারণে মুখে আয়রন ট্যাবলেট খাওয়ালেও এই রোগীর রক্তস্বল্পতা ভালো হচ্ছে না?'
    ),
    options: [
      l(
        'High circulating IL-6 stimulates hepatic hepcidin synthesis via the STAT3 pathway; hepcidin degrades enterocyte Ferroportin, completely blocking intestinal iron absorption.',
        'বাতরোগের অতিরিক্ত IL-6 যকৃতে STAT3 সংকেতের মাধ্যমে হেপসিডিন হরমোন বৃদ্ধি করেছে; এই হেপসিডিন অন্ত্রের ফেরোপোর্টিন চ্যানেল ধ্বংস করে মুখে খাওয়া আয়রনের শোষণ সম্পূর্ণ বন্ধ করে দিয়েছে।'
      ),
      l(
        'Prolyl hydroxylase domain enzymes are mutated, preventing cellular reduction of ferric iron by ascorbic acid.',
        'প্রলাইল হাইড্রক্সিলেজ এনজাইমের ত্রুটির কারণে ভিটামিন সি আয়রনকে বিজারিত করতে পারছে না।'
      ),
      l(
        'Loss of selenocysteine incorporation into GPx4 triggers ferroptosis in bone marrow erythroid progenitor cells.',
        'GPx4 এনজাইমে সেলেনিয়াম ঢুকতে না পারায় অস্থিমজ্জার রক্তকণিকাগুলো ধ্বংস হয়ে যাচ্ছে।'
      ),
      l(
        'Mitochondrial Mn-SOD2 is deficient, leading to massive hydroxyl radical formation in enterocyte microvilli.',
        'মাইটোকন্ড্রিয়াল Mn-SOD2 এনজাইমের ঘাটতির কারণে অন্ত্রের কোষে প্রচুর ফ্রি র্যাডিকেল জমে যাচ্ছে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'This patient exhibits classical Anemia of Chronic Disease / Inflammation (ACD) secondary to active rheumatoid arthritis. Chronic systemic inflammation drives macrophage and synovial secretion of interleukin-6 (IL-6). Circulating IL-6 acts on hepatocytes to trigger Janus kinase (JAK) phosphorylation of STAT3, which binds the HAMP promoter and massively upregulates hepcidin synthesis. Elevated hepcidin binds basolateral Ferroportin (SLC40A1) on enterocytes and macrophages, inducing its ubiquitination, internalization, and lysosomal degradation. Without functional ferroportin, dietary or supplemental iron cannot exit enterocytes into plasma, and macrophage iron from senescent erythrocytes remains trapped in ferritin (explaining high ferritin and low TIBC). Oral iron supplements cannot cross the enterocyte and will fail; definitive therapy requires controlling the underlying inflammation or using parenteral iron / anti-hepcidin agents.',
      'রোগী রিউমাটয়েড আর্থ্রাইটিসজনিত দীর্ঘস্থায়ী প্রদাহের রক্তস্বল্পতায় (ACD) ভুগছেন। প্রদাহের কারণে শরীরে ইন্টারলিউকিন-৬ (IL-6) তৈরি হয়, যা যকৃতে গিয়ে STAT3 সংকেতের মাধ্যমে হেপসিডিন হরমোন বহুগুণ বাড়িয়ে দেয়। এই অতিরিক্ত হেপসিডিন অন্ত্রের এন্টারোসাইট ও প্লীহার ফেরোপোর্টিন চ্যানেলগুলোকে ভেঙে নষ্ট করে ফেলে। ফেরোপোর্টিন না থাকায় মুখে খাওয়া কোনো আয়রনই অন্ত্র থেকে রক্তে বের হতে পারে না এবং ম্যাক্রোফেজের ভেতর আয়রন বন্দি থাকে (এ কারণেই রক্তে ফেরিটিন বেশি কিন্তু আয়রন কম)। তাই মুখে আয়রন ট্যাবলেট দিলে কোনো কাজ হয় না; মূল প্রদাহ ভালো করা বা শিরার মাধ্যমে বিশেষ ইনজেকশন দেওয়াই এর একমাত্র সঠিক চিকিৎসা।'
    ),
  },
}
