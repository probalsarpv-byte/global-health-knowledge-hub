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
  {
    id: 'brigelius-flohe-gpx-bba',
    authors: 'Regina Brigelius-Flohé, Matilde Maiorino',
    title: 'Glutathione peroxidases',
    organization: 'Biochimica et Biophysica Acta (BBA) - General Subjects',
    year: 2013,
    url: 'https://doi.org/10.1016/j.bbagen.2012.11.020',
    doi: '10.1016/j.bbagen.2012.11.020',
  },
]

export const nutrition11VitaminCTraceMineralsLesson: LessonTopic = {
  id: 'topic.nutrition.vitamin-c-trace-minerals-redox',
  slug: 'vitamin-c-trace-minerals-redox',
  version: 2,
  updatedAt: '2026-10-15',
  title: l(
    '11 · Vitamin C, Trace Minerals & Cellular Antioxidant Defense Networks',
    '১১ · ভিটামিন সি, ট্রেস মিনারেল ও কোষীয় অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা নেটওয়ার্ক'
  ),
  summary: l(
    'Comprehensive university textbook analysis of redox biochemistry and microminerals: ascorbate electron donation in prolyl and lysyl hydroxylase monooxygenases for collagen triple-helix stabilization, the compartmentalized superoxide dismutase metalloenzyme network (Cu/Zn-SOD1, Mn-SOD2, EC-SOD3), selenocysteine UGA recoding in glutathione peroxidases (GPx1–4), peroxisomal catalase kinetics, non-enzymatic iron-copper Fenton chemistry, and the systemic hepcidin-ferroportin iron regulatory axis.',
    'জারণ-বিজারণ জীববিদ্যা ও ক্ষুদ্র খনিজের পূর্ণাঙ্গ পাঠ্যপুস্তকীয় শারীরবৃত্ত: কোলাজেন ট্রিপল-হেলিক্স গঠনে প্রলাইল ও লাইসিল হাইড্রক্সিলেজ এনজাইমে ভিটামিন সি-এর ইলেকট্রন দান, কোষীয় প্রকোষ্ঠভিত্তিক সুপারঅক্সাইড ডিসমিউটেজ নেটওয়ার্ক (Cu/Zn-SOD1, Mn-SOD2, EC-SOD3), গ্লুটাথিয়ন পারঅক্সিডেজে সেলেনোসিস্টিন অন্তর্ভুক্তি (GPx1–4), ক্যাটালেজ গতিবিদ্যা, আয়রন ও কপারের ফেন্টন বিষক্রিয়া এবং যকৃতের হেপসিডিন-ফেরোপোর্টিন নিয়ন্ত্রক অক্ষ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-15',
  objectives: [
    l(
      'Detail the catalytic mechanism of ascorbic acid in 2-oxoglutarate-dependent dioxygenases and contrast clinical scurvy with genetic collagenopathies [1, 5].',
      '২-অক্সোগ্লুটারেট-নির্ভর ডাইঅক্সিজিনেজ এনজাইমে অ্যাসকরবিক অ্যাসিডের অনুঘটক প্রক্রিয়া এবং স্কার্ভির সাথে জন্মগত কোলাজেন রোগের পার্থক্য বিশ্লেষণ করা [১, ৫]।'
    ),
    l(
      'Map the compartmentalized superoxide dismutase network (Cu/Zn-SOD1, Mn-SOD2, SOD3) and trace the conversion of superoxide into hydrogen peroxide [1, 2].',
      'কোষের বিভিন্ন অংশের সুপারঅক্সাইড ডিসমিউটেজ নেটওয়ার্ক (Cu/Zn-SOD1, Mn-SOD2, SOD3) এবং সুপারঅক্সাইডকে হাইড্রোজেন পারঅক্সাইডে রূপান্তরের ধাপসমূহ ব্যাখ্যা করা [১, ২]।'
    ),
    l(
      'Explain the genetic incorporation of selenocysteine (the 21st amino acid) into glutathione peroxidases (GPx1–4) and evaluate its role in lipid hydroperoxide detoxication [4, 6].',
      'গ্লুটাথিয়ন পারঅক্সিডেজে সেলেনোসিস্টিনের (২১তম অ্যামিনো অ্যাসিড) কোডনভিত্তিক অন্তর্ভুক্তি এবং লিপিড পারঅক্সাইড নিষ্ক্রিয়করণে এর ভূমিকা নিরূপণ করা [৪, ৬]।'
    ),
    l(
      'Contrast the biological toxicity of the ferrous iron Fenton reaction with systemic iron regulation by the hepatic hormone hepcidin and the ferroportin exporter [1, 3].',
      'আয়রনের ফেন্টন বিক্রিয়ার ক্ষতিকর ফ্রি র্যাডিকেল তৈরির প্রক্রিয়া এবং হেপসিডিন-ফেরোপোর্টিন অক্ষ দ্বারা দেহের আয়রন নিয়ন্ত্রণের আণবিক গতিপথ বিশ্লেষণ করা [১, ৩]।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.glutathione-ros-redox-homeostasis', 'topic.metabolism.heme-bilirubin-metabolism'],
  references: vitCTraceMineralsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-vitc-minerals', 'halliwell-free-radicals-biol-med'],
    structure: ['padayatty-ann-intern-med-vit-c', 'gropper-advanced-nutrition-vitc-minerals'],
    mechanism: ['halliwell-free-radicals-biol-med', 'rayman-lancet-selenium', 'brigelius-flohe-gpx-bba'],
    integration: ['kasschau-cell-iron-hepcidin', 'halliwell-free-radicals-biol-med'],
    practice: ['kasschau-cell-iron-hepcidin', 'padayatty-ann-intern-med-vit-c', 'rayman-lancet-selenium'],
    takeaways: ['gropper-advanced-nutrition-vitc-minerals', 'halliwell-free-radicals-biol-med', 'brigelius-flohe-gpx-bba'],
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
          'An essential water-soluble enediol reducing agent and electron donor that reversibly oxidizes to semidehydroascorbate and dehydroascorbic acid, maintaining active-site iron (Fe2+) and copper (Cu+) in their reduced states during hydroxylase, monooxygenase, and dioxygenase catalytic cycles.',
          'একটি অত্যাবশ্যক পানিতে দ্রবণীয় বিজারক উপাদান যা ইলেকট্রন দান করে কোলাজেন সংশ্লেষণ এবং ডোপামিন রূপান্তরের এনজাইমে আয়রন (Fe2+) ও কপারকে (Cu+) সক্রিয় বিজারিত অবস্থায় বজায় রাখে।'
        ),
      },
      {
        term: l('Superoxide Dismutase (SOD)', 'সুপারঅক্সাইড ডিসমিউটেজ (SOD)'),
        definition: l(
          'A family of metalloenzymes (cytosolic Cu/Zn-SOD1, mitochondrial matrix Mn-SOD2, extracellular Cu/Zn-SOD3) that disproportionates the destructive superoxide radical anion (O2•-) into hydrogen peroxide (H2O2) and molecular oxygen (O2) at near-diffusion-controlled rates.',
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
      {
        term: l('Glutathione Peroxidase 4 (GPx4)', 'গ্লুটাথিয়ন পারঅক্সিডেজ ৪ (GPx4)'),
        definition: l(
          'A unique monomeric selenoperoxidase capable of directly reducing toxic esterified phospholipid hydroperoxides (PLOOH) within cell membranes into non-toxic lipid alcohols, serving as the primary endogenous barrier against iron-dependent ferroptosis.',
          'একটি অনন্য সেলেনোপ্রোটিন এনজাইম যা সরাসরি কোষঝিল্লির ভেতরে অবস্থিত ক্ষতিকর ফ্যাটি অ্যাসিড পারঅক্সাইডকে বিজারিত করে অক্ষতিকর অ্যালকোহলে রূপান্তর করে এবং লোহা-নির্ভর বিধ্বংসী কোষমৃত্যু (ফেরোপ্টোসিস) প্রতিহত করে।'
        ),
      },
      {
        term: l('Ceruloplasmin (Ferroxidase I)', 'সিরুলোপ্লাজমিন (ফেরোক্সিডেজ ১)'),
        definition: l(
          'A circulating blue alpha-2 globulin containing six copper atoms per molecule that catalyzes the four-electron reduction of oxygen to water coupled with the oxidation of toxic ferrous iron (Fe2+) to ferric iron (Fe3+), permitting safe, high-affinity iron loading onto plasma transferrin.',
          'রক্তরসের একটি কপার-সমৃদ্ধ আলফা-২ গ্লোবুলিন প্রোটিন যা মুক্ত ও বিপজ্জনক Fe2+ আয়রনকে জারিত করে নিরীহ Fe3+ আয়রনে রূপান্তরিত করে, যাতে তা নিরাপদে ট্রান্সফারিন প্রোটিনে আবদ্ধ হয়ে সারা দেহে সঞ্চালিত হতে পারে।'
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
      {
        title: l('Calculating Ascorbic Acid Saturation Kinetics and Renal Tubular Threshold', 'অ্যাসকরবিক অ্যাসিডের রেনাল থ্রেশহোল্ড ও রক্তের প্লাজমা সম্পৃক্ততা নির্ধারণ'),
        steps: [
          l(
            'Step 1: Clinical Pharmacokinetics Scenario: A healthy adult ingests increasing single oral doses of ascorbic acid (from 100 mg to 1,000 mg and 2,500 mg). Determine intestinal fractional bioavailability and steady-state plasma concentrations.',
            'ধাপ ১: ক্লিনিক্যাল দৃশ্যপট: একজন সুস্থ ব্যক্তি মুখে ক্রমবর্ধমান মাত্রায় ভিটামিন সি গ্রহণ করছেন (১০০ মিলিগ্রাম থেকে ১,০০০ মিলিগ্রাম ও ২,৫০০ মিলিগ্রাম)। অন্ত্রের শোষণ হার এবং রক্তে স্থিতিশীল প্লাজমা মাত্রা হিসাব করুন।'
          ),
          l(
            'Step 2: Calculate intestinal transport saturation: Intestinal absorption occurs via the apical Sodium-Dependent Vitamin C Transporter 1 (SVCT1 / SLC23A1). At low doses (100–200 mg), SVCT1 operates below its Michaelis constant (Km ~ 15–20 µmol/L), absorbing >80% of the ingested dose. At high doses (1,000–2,500 mg), SVCT1 transporters become completely saturated, plunging fractional intestinal absorption down to <20–30%.',
            'ধাপ ২: অন্ত্রের শোষণ ক্ষমতা পরিমাপ: ক্ষুদ্রান্ত্রে সোডিয়াম-নির্ভর SVCT1 চ্যানেলের মাধ্যমে ভিটামিন সি শোষিত হয়। অল্প ডোজে (১০০-২০০ মিলিগ্রাম) ৮০% এর বেশি শোষিত হয়; কিন্তু ১,০০০ মিলিগ্রামের বেশি একবারে খেলে চ্যানেলগুলো পরিপূর্ণ হয়ে যাওয়ায় শোষণের হার কমে ২০-৩০% এ নেমে আসে।'
          ),
          l(
            'Step 3: Evaluate renal tubular reabsorption threshold: In the proximal renal tubule, filtered ascorbate is reabsorbed via renal SVCT1. The maximum tubular reabsorption capacity (Tm) corresponds to a plasma ascorbate threshold of approximately 70–80 µmol/L (1.2–1.4 mg/dL). Plasma concentrations above this ceiling spill directly into the urine as unabsorbed ascorbate.',
            'ধাপ ৩: কিডনির ফিল্ট্রেশন থ্রেশহোল্ড মূল্যায়ন: কিডনির প্রক্সিমাল টিউবুলে রক্তে ভিটামিন সি-এর মাত্রা ৭০-৮০ µmol/L (১.২-১.৪ mg/dL) পর্যন্ত পুনরায় শোষিত হতে পারে। রক্তে এই মাত্রার চেয়ে বেশি ভিটামিন সি পৌঁছালে অতিরিক্ত পুরো অংশটি প্রস্রাবের সাথে নির্গত হয়ে যায়।'
          ),
          l(
            'Step 4: Formulate evidence-based clinical dosing recommendations: Ingesting 200–400 mg/day of vitamin C from fresh fruits and vegetables completely saturates circulating plasma (~70 µmol/L) and leukocyte intracellular stores without causing osmotic diarrhea or renal calcium oxalate stone formation.',
            'ধাপ ৪: বৈজ্ঞানিক প্রেসক্রিপশন নির্ধারণ: প্রতিদিন খাদ্য ও ফলের মাধ্যমে ২০০ থেকে ৪০০ মিলিগ্রাম ভিটামিন সি গ্রহণ করলেই রক্তের প্লাজমা এবং শ্বেতকণিকার সঞ্চয় শতভাগ পূর্ণ হয়ে যায়; মেগা-ডোজ খেলে তা কোনো কাজে না লেগে প্রস্রাবে নষ্ট হয় এবং কিডনিতে পাথর তৈরির ঝুঁকি বাড়ায়।'
          ),
        ],
        conclusion: l(
          'Oral vitamin C exhibits saturable zero-order absorption kinetics and a strict renal clearance threshold (~70 µmol/L). Megadoses above 1 g/day do not elevate tissue stores and are predominantly cleared unabsorbed in urine and stool.',
          'ভিটামিন সি অন্ত্রে একটি নির্দিষ্ট সীমার পর আর শোষিত হতে পারে না এবং রক্তে ৭০ µmol/L মাত্রার ওপরে উঠলেই কিডনি তা বের করে দেয়। তাই দৈনিক ১ গ্রামের অতিরিক্ত সাপ্লিমেন্ট গ্রহণ অপচয় ছাড়া কিছুই নয়।'
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
      {
        question: l(
          'How does the mRNA SECIS element permit ribosomes to recode the UGA stop codon into Selenocysteine during glutathione peroxidase translation?',
          'এমআরএনএ-র SECIS উপাদানের উপস্থিতিতে কীভাবে রাইবোজোম UGA স্টপ কোডনকে সেলেনোসিস্টিন হিসেবে অনুবাদ করে?'
        ),
        answer: l(
          'The codon UGA normally triggers translation termination via release factors. However, selenoprotein mRNAs contain a dedicated stem-loop structure in their 3\'-untranslated region (3\'-UTR) termed the Selenocysteine Insertion Sequence (SECIS). SECIS Binding Protein 2 (SBP2) binds the hairpin and recruits the specialized elongation factor EFSec loaded with Sec-tRNA[Ser]Sec. This macromolecular ribonucleoprotein complex reorients the decoding center of the advancing ribosome, overriding termination and inserting selenocysteine into the catalytic center of GPx.',
          'UGA কোডনটি সাধারণত প্রোটিন সংশ্লেষণ থামানোর সংকেত দেয়। কিন্তু সেলেনোপ্রোটিনের এমআরএনএ-র ৩\'-ইউটিআর প্রান্তে বিশেষ SECIS হেয়ারপিন ভাঁজ থাকে। এই ভাঁজে SBP2 প্রোটিন এবং বিশেষ EFSec ইলংগেশন ফ্যাক্টর সেলেনোসিস্টিন বহনকারী tRNA কে ডেকে আনে। এর ফলে রাইবোজোম প্রোটিন তৈরি না থামিয়ে সেলেনোসিস্টিনকে এনজাইমের সক্রিয় কেন্দ্রে বসিয়ে দেয়।'
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
    imageUrl: '/assets/antioxidant_trace_minerals_overview.jpg',
    imageCaption: l(
      'Medical textbook illustration of the integrated antioxidant metalloenzyme hierarchy: Cu/Zn-SOD1, Mn-SOD2, Selenium Glutathione Peroxidase (GPx1-4), Ascorbate-dependent Fe2+ recycling in collagen prolyl 4-hydroxylase, and the Hepcidin-Ferroportin axis.',
      'সমন্বিত অ্যান্টিঅক্সিডেন্ট মেটালো-এনজাইম প্রতিরক্ষা ব্যবস্থার মেডিকেল ইলাস্ট্রেশন: Cu/Zn-SOD1, Mn-SOD2, সেলেনিয়াম গ্লুটাথিয়ন পারঅক্সিডেজ (GPx1-4), কোলাজেন প্রোলাইল ৪-হাইড্রক্সিলেজে অ্যাসকরবেট-নির্ভর Fe2+ পুনরুদ্ধার এবং হেপসিডিন-ফেরোপোর্টিন অক্ষ।'
    ),
    has3D: true,
    threeDType: 'antioxidant-redox-3d',
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
        position3D: { x: -80, y: -45, z: 20 },
      },
      {
        id: 'node-selenium-gpx',
        label: l('Selenium Glutathione Peroxidases (GPx1–4)', 'সেলেনিয়াম গ্লুটাথিয়ন পারঅক্সিডেজ (GPx1–4)'),
        description: l(
          'Reduces H2O2 and toxic lipid hydroperoxides (LOOH) into water and lipid alcohols using reduced glutathione (2 GSH).',
          'সেলেনিয়াম এনজাইম গ্লুটাথিয়নের সাহায্যে হাইড্রোজেন পারঅক্সাইড ও ক্ষতিকর লিপিড পারঅক্সাইডকে নিরাপদ পানি ও অ্যালকোহলে পরিণত করে।'
        ),
        details: l(
          'GPx enzymes utilize the catalytic 21st amino acid selenocysteine (Sec). GPx1 detoxifies cytosolic H2O2, while monomeric GPx4 directly rescues peroxidized membrane phospholipids to prevent iron-catalyzed ferroptotic cell death.',
          'GPx এনজাইম ২১তম অ্যামিনো অ্যাসিড সেলেনোসিস্টিন ব্যবহার করে। GPx1 কোষে উৎপন্ন পারঅক্সাইডকে ধ্বংস করে এবং GPx4 মেমব্রেনের লিপিড পারঅক্সাইড সারিয়ে কোষকে অক্ষত রাখে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
        position3D: { x: -80, y: 45, z: -20 },
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
        position3D: { x: 80, y: 45, z: 20 },
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
        position3D: { x: 80, y: -45, z: -20 },
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
              'Aerobic life affords tremendous bioenergetic advantages: oxidative phosphorylation in mitochondria extracts approximately 30 to 32 molecules of ATP per glucose molecule compared to a meager two ATP molecules under anaerobic glycolysis [1, 2]. However, the four-electron reduction of molecular oxygen to water in cytochrome c oxidase is not 100% efficient [2]. Between 0.2% and 2.0% of electrons prematurely leak from respiratory Complexes I and III, reducing oxygen by single-electron addition into the toxic superoxide radical anion (O2•-) [1, 2].',
              'অক্সিজেন নির্ভর জীবনের একটি বিরাট শক্তিগত সুবিধা রয়েছে: মাইটোকন্ড্রিয়ায় পূর্ণ জারণের মাধ্যমে প্রতিটি গ্লুকোজ থেকে ৩০ থেকে ৩২ অণু এটিপি শক্তি তৈরি হয়, যেখানে অক্সিজেন ছাড়া মাত্র দুই অণু এটিপি পাওয়া যায় [১, ২]। কিন্তু মাইটোকন্ড্রিয়ার রেস্পিরেটরি চেইনে অক্সিজেনকে পানিতে পরিণত করার প্রক্রিয়াটি শতভাগ নিখুঁত নয় [২]। প্রায় ০.২% থেকে ২% ইলেকট্রন অসাবধানতাবশত চেইন থেকে ছিটকে বের হয়ে গিয়ে অক্সিজেনের সাথে যুক্ত হয় এবং অত্যন্ত ক্ষতিকর ও বিষাক্ত সুপারঅক্সাইড ফ্রি র্যাডিকেল (O2•-) তৈরি করে [১, ২]।'
            ),
            l(
              'A free radical is defined as any chemical species capable of independent existence that contains one or more unpaired electrons in its atomic or molecular orbitals [2]. Because electrons strongly prefer to exist in pairs with opposite spins, an unpaired electron renders the molecule chemically aggressive and unstable [2]. The radical relentlessly seeks to steal an electron from neighboring healthy molecules—such as the delicate polyunsaturated fatty acids of cell membranes, structural proteins, or nuclear DNA strands [1, 2].',
              'একটি ফ্রি র্যাডিকেল হলো এমন কোনো রাসায়নিক অণু যার বাইরের কক্ষপথে এক বা একাধিক বিজোড় ইলেকট্রন থাকে [২]। ইলেকট্রন সর্বদা জোড়ায় থাকতে পছন্দ করে; তাই একটি বিজোড় ইলেকট্রন থাকার কারণে অণুটি প্রচণ্ড অস্থির ও আক্রমণাত্মক হয়ে ওঠে [২]। এই অতৃপ্ত অণুটি তার পাশের সুস্থ অণু—যেমন কোষপর্দার ফ্যাটি অ্যাসিড, সাইটোপ্লাজমের প্রোটিন কিংবা নিউক্লিয়াসের ডিএনএ থেকে জোরপূর্বক ইলেকট্রন ছিনিয়ে নিয়ে তাদের ক্ষতিগ্রস্ত করে [১, ২]।'
            ),
            l(
              'To survive in an oxygen-rich atmosphere, human cells have evolved an elaborate, hierarchical defense system composed of dietary antioxidant vitamins (vitamin C and vitamin E) coordinated with essential trace mineral metalloenzymes (copper, zinc, manganese, selenium, and iron) [1, 2]. These defenses intercept and neutralize reactive oxygen species before they can damage cell membranes, break DNA strands, or precipitate cellular necrosis [1, 2]. Without these mineral-dependent shields, human life would be extinguished by our own metabolic fires in seconds [1, 2].',
              'অক্সিজেনপূর্ণ পরিবেশে নিরাপদে বেঁচে থাকার জন্য মানবদেহ একটি অত্যন্ত সুশৃঙ্খল বহুস্তরীয় প্রতিরক্ষা ব্যবস্থা তৈরি করেছে, যা খাবারের অ্যান্টিঅক্সিডেন্ট ভিটামিন (ভিটামিন সি ও ই) এবং অতিপ্রয়োজনীয় ট্রেস মিনারেল মেটালো-এনজাইমের (কপার, জিঙ্ক, ম্যাঙ্গানিজ, সেলেনিয়াম ও আয়রন) সমন্বয়ে গঠিত [১, ২]। এই প্রতিরক্ষা প্রাচীর কোষের পর্দা ধ্বংস হওয়া, ডিএনএ ক্ষতিগ্রস্ত হওয়া বা অকাল কোষমৃত্যু ঘটার আগেই ক্ষতিকর র্যাডিকেলগুলোকে শান্ত ও নিষ্ক্রিয় করে দেয় [১, ২]। এই খনিজ ঢাল না থাকলে আমাদের কোষ নিজের শক্তির আগুনে নিজেই ভস্ম হয়ে যেত [১, ২]।'
            ),
            l(
              'A critical concept for nutrition learners is that dietary antioxidants cannot function as isolated hero molecules [1]. Instead, they operate as a continuous thermodynamic bucket brigade: an oxidized vitamin E radical inside the cell membrane is restored by ascorbic acid in the cytoplasm, which in turn is regenerated by reduced glutathione, which is finally recharged by NADPH derived from the pentose phosphate pathway [1, 2]. Every link in this chain relies on trace minerals and specific vitamins working in harmony [1, 2].',
              'পুষ্টিবিদ্যার শিক্ষার্থীদের জন্য সবচেয়ে গুরুত্বপূর্ণ ধারণা হলো কোনো অ্যান্টিঅক্সিডেন্ট একা একা বীরের মতো সব কাজ করতে পারে না [১]। বরং এরা কোষে একটি সুসংগঠিত দলগত বালতি-চালনা ব্যবস্থার মতো কাজ করে: মেমব্রেনের ভিটামিন ই জারিত হলে সাইটোপ্লাজমের ভিটামিন সি এসে তাকে সচল করে, আবার ভিটামিন সি-কে গ্লুটাথিয়ন সচল করে এবং অবশেষে গ্লুটাথিয়নকে NADPH শক্তি জোগায় [১, ২]। এই চেইনের প্রতিটি ধাপে খাদ্য থেকে পাওয়া ট্রেস মিনারেল ও ভিটামিন একসাথে কাজ করে [১, ২]।'
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
            l(
              'In addition to proline hydroxylation, vitamin C is equally essential for lysyl hydroxylase, which hydroxylates lysine residues to permit covalent intermolecular cross-linking between collagen fibrils in bone, cartilage, teeth, and blood vessel walls [1, 5]. Furthermore, ascorbic acid acts as an electron donor for dopamine beta-hydroxylase during the neuroendocrine synthesis of norepinephrine from dopamine, and for carnitine biosynthesis enzymes (gamma-butyrobetaine dioxygenase), explaining why profound muscular fatigue and lethargy are the earliest clinical harbingers of scurvy [1, 5].',
              'প্রোলিন রূপান্তরের পাশাপাশি ভিটামিন সি লাইসিল হাইড্রক্সিলেজের জন্যও অপরিহার্য, যা হাড়, তরুণাস্থি, দাঁত ও রক্তনালীর কোলাজেন ফাইবারগুলোকে আড়াআড়িভাবে শক্ত বন্ধনে আটকে রাখে [১, ৫]। তাছাড়া স্নায়ুতন্ত্রে ডোপামিন থেকে নরঅ্যাড্রেনালিন হরমোন তৈরি এবং চর্বি ভেঙে শক্তি তৈরির জন্য কার্নিটিন সংশ্লেষণেও ভিটামিন সি সরাসরি ইলেকট্রন জোগায়; এ কারণেই শরীরে ভিটামিন সি কমে গেলে প্রথম লক্ষণ হিসেবে প্রচণ্ড পেশির ক্লান্তি ও দুর্বলতা দেখা দেয় [১, ৫]।'
            ),
            l(
              'Because humans lack endogenous synthesis, we depend entirely on regular intake of dietary vitamin C from fresh citrus fruits, berries, peppers, broccoli, and leafy vegetables [1, 5]. Vitamin C is readily absorbed in the upper small intestine through the specialized Sodium-Dependent Vitamin C Transporter 1 (SVCT1) [5]. In the systemic circulation, it bathes our extracellular fluids, serving as the premier water-soluble reducing agent that traps free radicals before they can ever cross cell membranes [1, 5].',
              'যেহেতু মানুষ নিজে ভিটামিন সি তৈরি করতে পারে না, তাই আমাদের সম্পূর্ণ নির্ভর করতে হয় তাজা লেবুজাতীয় ফল, আমলকী, পেয়ারা, কাঁচামরিচ ও সবুজ শাকসবজির ওপর [১, ৫]। এই ভিটামিনটি ক্ষুদ্রান্ত্রের ওপরের অংশে সোডিয়াম-নির্ভর বিশেষ গেটের (SVCT1) মাধ্যমে দ্রুত রক্তে শোষিত হয় [৫]। রক্তে এটি মুক্তভাবে প্রবাহিত হয়ে কোষের বাইরে জলীয় অংশে যেকোনো ক্ষতিকর র্যাডিকেলকে কোষের পর্দায় আঘাত করার আগেই নিষ্ক্রিয় করে দেয় [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. The Metalloenzyme Antioxidant Shield: SOD and Selenium GPx', '৩. মেটালো-এনজাইম প্রতিরক্ষা ঢাল: SOD ও সেলেনিয়াম GPx'),
          paragraphs: [
            l(
              'The enzymatic defense against reactive oxygen species operates as a strict two-tier relay [2]. The first line of defense is Superoxide Dismutase (SOD), which captures two superoxide radicals and converts them into hydrogen peroxide (H2O2) and oxygen [1, 2]. In the cytoplasm and nucleus, this reaction is executed by Cu/Zn-SOD (SOD1), utilizing catalytic copper and structural zinc [1, 2]. Inside the mitochondrial matrix, where electron leakage is highest, Mn-SOD (SOD2) protects mitochondrial DNA from oxidative destruction [1, 2].',
              'কোষের ক্ষতিকর র্যাডিকেল ধ্বংসে মেটালো-এনজাইমগুলো দুটি ধাপে দলগতভাবে কাজ করে [২]। প্রথম সারির পাহারাদার হলো সুপারঅক্সাইড ডিসমিউটেজ (SOD), যা দুটি সুপারঅক্সাইড র্যাডিকেল ধরে হাইড্রোজেন পারঅক্সাইড (H2O2) ও নির্দোষ অক্সিজেনে পরিণত করে [১, ২]। সাইটোপ্লাজমে কপার ও জিঙ্কের সাহায্যে Cu/Zn-SOD1 কাজ করে, আর মাইটোকন্ড্রিয়ার ভেতরে ম্যাঙ্গানিজের সাহায্যে Mn-SOD2 ডিএনএ রক্ষা করে [১, ২]।'
            ),
            l(
              'However, hydrogen peroxide is itself a dangerous membrane-permeable oxidant that must be instantly disposed of before it encounters free iron [2]. This second tier is spearheaded by Glutathione Peroxidases (GPx1–4), which contain the rare trace element selenium in the form of selenocysteine [2, 4, 6]. GPx transfers electrons from reduced glutathione (GSH) onto H2O2, reducing it to two molecules of harmless water [2, 4, 6]. Working in parallel, peroxisomal catalase decomposes massive bursts of H2O2 into water and oxygen at lightning speed [1, 2].',
              'কিন্তু হাইড্রোজেন পারঅক্সাইড নিজেও একটি বিপজ্জনক যৌগ যা মেমব্রেন ভেদ করে ছড়িয়ে পড়তে পারে; তাই একে সাথে সাথে পানিতে রূপান্তর করা জরুরি [২]। এই দ্বিতীয় ধাপে মূল ভূমিকা পালন করে গ্লুটাথিয়ন পারঅক্সিডেজ (GPx), যার কেন্দ্রে বিরল উপাদান সেলেনিয়াম থাকে [২, ৪, ৬]। এই এনজাইম গ্লুটাথিয়নের সাহায্যে হাইড্রোজেন পারঅক্সাইডকে নিষ্ক্রিয় পানিতে পরিণত করে [২, ৪, ৬]। পাশাপাশি পারঅক্সিজোমে থাকা ক্যাটালেজ এনজাইমও বিদ্যুৎ গতিতে পারঅক্সাইড ভেঙে ফেলে [১, ২]।'
            ),
            l(
              'Among the glutathione peroxidase family, Glutathione Peroxidase 4 (GPx4) possesses a unique structural capability that sets it apart from all other enzymes: it is a monomer that can directly embed into the hydrophobic lipid bilayer of cell membranes [4, 6]. While GPx1 only acts on water-soluble peroxides in the cytosol, GPx4 intercepts toxic lipid hydroperoxides formed when free radicals attack cell membranes, neutralizing them into harmless lipid alcohols [4, 6]. Without functional GPx4, cell membranes literally unravel through unrestrained lipid peroxidation, precipitating ferroptosis [2, 6].',
              'গ্লুটাথিয়ন পারঅক্সিডেজ পরিবারের মধ্যে GPx4-এর একটি অসাধারণ অনন্য বৈশিষ্ট্য রয়েছে: এটি কোষপর্দার তৈলাক্ত স্তরের ভেতরে সরাসরি প্রবেশ করতে পারে [৪, ৬]। সাধারণ GPx1 যেখানে কেবল জলীয় অংশের পারঅক্সাইড ভাঙে, GPx4 কোষপর্দার ফ্যাটি অ্যাসিডে আগুন লাগার মতো ছড়িয়ে পড়া পারঅক্সিডেশন সাথে সাথে থামিয়ে দেয় [৪, ৬]। GPx4 না থাকলে কোষপর্দা জারিত হয়ে ছিদ্র হয়ে যায় এবং লোহা-নির্ভর বিধ্বংসী কোষমৃত্যু ঘটে [২, ৬]।'
            ),
            l(
              'This multi-tier defense illustrates why nutritional sufficiency of copper, zinc, manganese, and selenium is indispensable for cellular longevity [1, 4]. A severe dietary deficiency in selenium impairs GPx synthesis, leaving tissues unprotected against hydrogen peroxide accumulation [4]. Similarly, inadequate copper or zinc cripples SOD1 activity in the cytoplasm [1]. Thus, micronutrient intake directly dictates the physical integrity of every organ system [1, 4].',
              'এই বহুস্তরীয় প্রতিরক্ষা ব্যবস্থা প্রমাণ করে কেন কপার, জিঙ্ক, ম্যাঙ্গানিজ ও সেলেনিয়াম গ্রহণ মানবদেহের কোষীয় সুস্থতার জন্য এত অপরিহার্য [১, ৪]। খাবারে সেলেনিয়ামের সামান্য ঘাটতি হলেও GPx এনজাইম তৈরি বাধাগ্রস্ত হয়, ফলে কোষের ভেতরে পারঅক্সাইড বিষাক্তভাবে জমতে থাকে [৪]। একইভাবে কপার বা জিঙ্কের অভাবে SOD1 এনজাইম অচল হয়ে পড়ে [১]। অর্থাৎ খাবারের ক্ষুদ্র খনিজ উপাদানগুলোই প্রতিটি অঙ্গের দীর্ঘস্থায়ী সুরক্ষা নিশ্চিত করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Iron: Essential Cofactor and The Dangerous Fenton Catalyst', '৪. আয়রন: অপরিহার্য কো-ফ্যাক্টর ও বিপজ্জনক ফেন্টন বিক্রিয়া'),
          paragraphs: [
            l(
              'Iron is the most abundant transition metal in the human body, vital for oxygen transport in hemoglobin and electron transfer in respiratory cytochromes [1, 3]. However, iron’s very ability to cycle effortlessly between ferrous (Fe2+) and ferric (Fe3+) oxidation states makes free, unbound iron extraordinarily dangerous [1, 2, 3]. In the presence of hydrogen peroxide, free Fe2+ drives the non-enzymatic Fenton reaction, generating the fiercely destructive hydroxyl radical (•OH), which oxidizes cell membranes and shatters DNA in fractions of a microsecond [2, 3].',
              'আয়রন মানবদেহের সবচেয়ে প্রাচুর্যময় ট্রেস উপাদান, যা হিমোগ্লোবিনে অক্সিজেন পরিবহন এবং মাইটোকন্ড্রিয়ায় শক্তি তৈরিতে অপরিহার্য [১, ৩]। কিন্তু আয়রনের Fe2+ এবং Fe3+ রূপের মধ্যে সহজে রূপান্তর হওয়ার এই ক্ষমতাই একে মুক্ত অবস্থায় প্রচণ্ড বিপজ্জনক করে তোলে [১, ২, ৩]। হাইড্রোজেন পারঅক্সাইডের উপস্থিতিতে মুক্ত আয়রন কুখ্যাত ফেন্টন বিক্রিয়ার মাধ্যমে ধ্বংসাত্মক হাইড্রক্সিল ফ্রি র্যাডিকেল (•OH) তৈরি করে, যা নিমেষের মধ্যে কোষঝিল্লি ও ডিএনএ ভেঙে চুরমার করে দেয় [২, ৩]।'
            ),
            l(
              'To eliminate free iron toxicity, systemic iron homeostasis is governed by the hepatic peptide hormone hepcidin [3]. When systemic iron stores are replete, hepatocytes secrete hepcidin into the bloodstream, where it binds to Ferroportin, the only known cellular iron exporter found on intestinal enterocytes and splenic macrophages [3]. Hepcidin binding induces the internalization and lysosomal degradation of Ferroportin, locking iron securely inside cells and preventing toxic systemic iron overload [3].',
              'এই মারাত্মক ক্ষতি রোধ করতে যকৃত থেকে হেপসিডিন নামক হরমোন নিঃসৃত হয়ে দেহের সম্পূর্ণ আয়রন কঠোর নিয়ন্ত্রণে রাখে [৩]। রক্তে আয়রন পর্যাপ্ত থাকলে হেপসিডিন অন্ত্রের কোষ ও প্লীহার ম্যাক্রোফেজে অবস্থিত ফেরোপোর্টিন চ্যানেলটিকে ধ্বংস করে দেয় [৩]। এর ফলে নতুন আয়রন রক্তে ঢুকতে পারে না এবং কোষে নিরাপদে আবদ্ধ থাকে, যা আয়রনের বিষক্রিয়া থেকে শরীরকে রক্ষা করে [৩]।'
            ),
            l(
              'Copper serves as an obligate biochemical partner in iron metabolism through multicopper ferroxidases [1, 3]. The membrane-bound ferroxidase hephaestin on the enterocyte basolateral membrane, and its circulating plasma homolog ceruloplasmin, catalyze the oxidation of ferrous iron (Fe2+) exported by ferroportin into ferric iron (Fe3+) [1, 3]. Because circulating transferrin can only bind Fe3+, copper deficiency traps iron inside intestinal and reticuloendothelial cells, producing a secondary microcytic anemia that is completely unresponsive to iron therapy [1, 3].',
              'আয়রন বিপাকে কপার একটি অবিচ্ছেদ্য অংশীদার হিসেবে কাজ করে [১, ৩]। অন্ত্রের কোষের বাইরে থাকা হেফেস্টিন এবং রক্তের সিরুলোপ্লাজমিন হলো কপার-সমৃদ্ধ বিশেষ এনজাইম যা ফেরোপোর্টিন দিয়ে বের হওয়া Fe2+ আয়রনকে নিরাপদ Fe3+ তে জারিত করে [১, ৩]। রক্তরসের ট্রান্সফারিন প্রোটিন কেবল Fe3+ আয়রন গ্রহণ করতে পারে; তাই শরীরে কপারের অভাব হলে আয়রন কোষে বন্দি হয়ে পড়ে এবং তীব্র রক্তস্বল্পতা দেখা দেয় যা সাধারণ আয়রন ওষুধে সারে না [১, ৩]।'
            ),
            l(
              'This tight physiological coupling reveals why transition metals are never allowed to travel unchaperoned in biological fluids [1, 2]. From the moment iron is absorbed in the duodenum to its incorporation into erythrocyte hemoglobin in the bone marrow, it remains encapsulated inside protein cages—ferritin for intracellular storage and transferrin for vascular transit [3]. Any breach in this sequestration invites runaway free radical cascades and tissue scarring [2, 3].',
              'এই শারীরিক সমন্বয় প্রমাণ করে কেন রূপান্তরশীল ধাতুগুলোকে শরীরের কোনো তরলে একা একা মুক্ত অবস্থায় ঘুরতে দেওয়া হয় না [১, ২]। ক্ষুদ্রান্ত্রে শোষণ থেকে শুরু করে অস্থিমজ্জায় হিমোগ্লোবিনে বসা পর্যন্ত আয়রন সর্বদা বিশেষ প্রোটিনের খাঁচায় আবদ্ধ থাকে—কোষের ভেতরে ফেরিটিন এবং রক্তনালীতে ট্রান্সফারিনের মধ্যে [৩]। এই নিরাপত্তার সামান্য লঙ্ঘন হলেই কোষের মেমব্রেন জ্বলে গিয়ে স্থায়ী প্রদাহ ও ক্ষত তৈরি হয় [২, ৩]।'
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
            l(
              'In clinical practice, scurvy remains a relevant differential diagnosis among isolated elderly individuals, individuals with psychiatric illness, severe alcoholism, or extreme restricted diets lacking fresh produce [1, 5]. Patients typically present with perifollicular petechiae, splinter hemorrhages beneath fingernails, hemorrhagic gingivitis with loose teeth, and spontaneous hemarthroses (joint bleeding) [1, 5]. Recognizing scurvy is life-saving because oral repletion with 500 to 1,000 mg/day of ascorbic acid produces dramatic clinical improvement within 48 to 72 hours [5].',
              'চিকিৎসাবিজ্ঞানে স্কার্ভি আজও হারিয়ে যায়নি; নিঃসঙ্গ বয়স্ক ব্যক্তি, তীব্র মদ্যপায়ী কিংবা ফলমূলবিহীন চরম নিয়ন্ত্রিত ডায়েট অনুসরণকারীদের মধ্যে এখনো স্কার্ভি দেখা যায় [১, ৫]। এদের চামড়ায় ছোট ছোট লালচে রক্তক্ষরণ, মাড়ি ফুলে রক্ত পড়া, দাঁত নড়ে যাওয়া এবং অস্থিসন্ধির ভেতরে রক্ত জমার মতো মারাত্মক লক্ষণ প্রকাশ পায় [১, ৫]। এই রোগ দ্রুত শনাক্ত করা অত্যন্ত গুরুত্বপূর্ণ, কারণ দৈনিক ৫০০ থেকে ১,০০০ মিলিগ্রাম ভিটামিন সি খাওয়ালে মাত্র দুই থেকে তিন দিনের মধ্যে অলৌকিকভাবে রোগী সুস্থ হতে শুরু করে [৫]।'
            ),
            l(
              'Moreover, clinicians must remain vigilant against indiscriminate megadose mineral supplementation [1]. Excess zinc supplementation (>50 mg/day of elemental zinc) induces the synthesis of enterocyte metallothionein, which binds copper with far higher affinity than zinc, blocking copper absorption and precipitating severe iatrogenic copper deficiency myeloneuropathy that mimics subacute combined degeneration of the spinal cord [1]. Nutritional harmony always requires balance rather than indiscriminate megadoses [1].',
              'এছাড়াও অতিরিক্ত মাত্রার মিনারেল সাপ্লিমেন্ট সেবনের ব্যাপারে ডাক্তারদের সতর্ক থাকতে হবে [১]। দীর্ঘদিন অতিরিক্ত জিঙ্ক ট্যাবলেট (>৫০ মিলিগ্রাম) খেলে অন্ত্রের মেটালোথাইনিন প্রোটিন কপারকে রক্তে ঢুকতে না দিয়ে মল দিয়ে বের করে দেয়, ফলে শরীরে মারাত্মক কপার ঘাটতি হয়ে হাত-পা অবশ ও প্যারালাইসিস দেখা দেয় [১]। পুষ্টির মূল চাবিকাঠি হলো সকল উপাদানের প্রাকৃতিক ভারসাম্য রক্ষা করা, মাত্রাতিরিক্ত কৃত্রিম ডোজ নয় [১]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. High-Yield Educational Takeaways', '৬. উচ্চ-গুরুত্বপূর্ণ শিক্ষামূলক সারাংশ'),
          paragraphs: [
            l(
              'Cellular antioxidant defense is not a single chemical reaction, but an integrated, compartmentalized enzymatic network [1, 2]. While vitamin C maintains active-site iron in hydroxylase enzymes and protects aqueous compartments, copper, zinc, and manganese power the superoxide dismutase front line, and selenium enables glutathione peroxidases to extinguish peroxides [1, 2, 4, 6].',
              'কোষীয় অ্যান্টিঅক্সিডেন্ট সুরক্ষা কোনো একক বিক্রিয়া নয়, বরং সুসংগঠিত একটি সমন্বিত নেটওয়ার্ক [১, ২]। ভিটামিন সি যেখানে কোলাজেন তৈরি ও তরল অংশে জারণ রোধ করে, সেখানে কপার, জিঙ্ক ও ম্যাঙ্গানিজ সুপারঅক্সাইড ধ্বংসের প্রথম সারিতে থাকে এবং সেলেনিয়াম পারঅক্সাইডকে পানিতে রূপান্তর করে [১, ২, ৪, ৬]।'
            ),
            l(
              'Transition metals like iron must be perpetually chaperoned by transport and storage proteins (transferrin, ferritin) to prevent catastrophic Fenton radical generation, with the hepatic hepcidin-ferroportin axis standing as the master systemic rheostat regulating iron flow [1, 2, 3].',
              'আয়রনের মতো রূপান্তরশীল ধাতুগুলোকে অবশ্যই ফেরিটিন ও ট্রান্সফারিন প্রোটিনের খাঁচায় বন্দি রাখতে হবে যাতে ফেন্টন বিক্রিয়া না ঘটে; আর যকৃতের হেপসিডিন-ফেরোপোর্টিন অক্ষটি মানবদেহের সম্পূর্ণ আয়রন প্রবাহের প্রধান চাবিকাঠি হিসেবে কাজ করে [১, ২, ৩]।'
            ),
            l(
              'Nutritional assessment of microminerals requires comprehensive evaluation rather than isolated serum measurements [1, 3]. Serum ferritin reflects iron stores but is elevated during inflammation; transferrin saturation and hepcidin provide critical functional discrimination [3]. Similarly, trace mineral deficiencies present with multi-organ symptoms reflecting the loss of metalloenzyme cascades across heart, skin, and nervous system [1, 4].',
              'রক্তে ক্ষুদ্র খনিজ উপাদান মূল্যায়নের ক্ষেত্রে কেবল একটি পরীক্ষার ওপর নির্ভর করলে ভুল হতে পারে [১, ৩]। ফেরিটিন আয়রন সঞ্চয় নির্দেশ করলেও প্রদাহের সময় এটি কৃত্রিমভাবে বেড়ে যায়; তাই ট্রান্সফারিন স্যাচুরেশন ও হেপসিডিন মিলিয়ে সঠিক রোগনির্ণয় করতে হয় [৩]। একইভাবে যে কোনো ট্রেস মিনারেলের অভাব হলে ত্বক, হৃদযন্ত্র ও মস্তিষ্কের শত শত মেটালো-এনজাইম একসাথে ক্ষতিগ্রস্ত হয়ে বহুমুখী জটিলতা দেখা দেয় [১, ৪]।'
            ),
            l(
              'A balanced whole-food diet rich in vibrant vegetables, citrus, legumes, seeds, and quality proteins provides the perfect stoichiometry of vitamins and trace minerals required to sustain our endogenous antioxidant defenses and maintain lifelong vitality [1, 4].',
              'তাজা শাকসবজি, লেবুজাতীয় ফল, ডাল, বাদাম, বীজ ও মানসম্মত প্রোটিন সমৃদ্ধ একটি সুষম প্রাকৃতিক খাদ্যাভ্যাস আমাদের দেহের নিজস্ব অ্যান্টিঅক্সিডেন্ট প্রাচীরকে আজীবন অটুট ও শক্তিশালী রাখতে সক্ষম [১, ৪]।'
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
              'The physics and chemistry of reactive oxygen species (ROS) are fundamentally defined by their thermodynamic reduction potentials and cellular diffusion radii [2]. Superoxide (O2•-) possesses a modest standard reduction potential (E0\' = -0.16 V at pH 7.0) and is negatively charged, preventing it from crossing hydrophobic lipid bilayers except via anion channels such as voltage-dependent anion channels (VDAC) in the outer mitochondrial membrane [2]. Its half-life in aqueous solution is approximately 1 to 4 microseconds [2].',
              'ক্ষতিকর অক্সিজেন প্রজাতির (ROS) আচরণ তাদের থার্মোডাইনামিক বিজারণ ক্ষমতা এবং কোষে ছড়িয়ে পড়ার দূরত্বের ওপর নির্ভর করে [২]। সুপারঅক্সাইড (O2•-) একটি ঋণাত্মক চার্জযুক্ত কণা হওয়ায় এটি কোষঝিল্লি সহজে ভেদ করতে পারে না; এর আয়ুষ্কাল মাত্র ১ থেকে ৪ মাইক্রোসেকেন্ড [২]।'
            ),
            l(
              'In stark contrast, the hydroxyl radical (•OH) generated via Fenton chemistry boasts an immense positive reduction potential of +2.31 V, making it one of the most powerful oxidants known in chemistry [2]. Because its reaction rate constants with virtually all biological molecules approach the diffusion limit (k ~ 10^9 to 10^10 M^-1 s^-1), •OH has an estimated in vivo half-life of less than one nanosecond and a diffusion radius of less than two nanometers [2]. Thus, •OH inflicts catastrophic oxidative damage at its exact site of formation [2].',
              'এর সম্পূর্ণ বিপরীতে, ফেন্টন বিক্রিয়ায় উৎপন্ন হাইড্রক্সিল র্যাডিকেল (•OH) হলো প্রকৃতিতে জানা সবচেয়ে শক্তিশালী জারণকারী উপাদান [২]। এর বিক্রিয়ার গতি আলোর গতির মতো দ্রুত হওয়ায় এর আয়ুষ্কাল মাত্র এক ন্যানোসেকেন্ডেও কম এবং এটি দুই ন্যানোমিটারের বেশি দূরে যেতে পারে না [২]। ফলে যেখানে এই র্যাডিকেল তৈরি হয়, তার ঠিক পাশেই এটি ডিএনএ, প্রোটিন বা ঝিল্লি সাথে সাথে ধ্বংস করে ফেলে [২]।'
            ),
            l(
              'Hydrogen peroxide (H2O2) occupies a unique intermediate position: it is an uncharged, non-radical oxidant with an extended in vivo half-life of ~1 millisecond and high membrane permeability comparable to water [2]. H2O2 traverses lipid bilayers via specialized aquaporin water channels (specifically aquaporin-3, -8, and -9, termed peroxiporins) [2]. While physiological nanomolar concentrations (1–10 nM) of H2O2 serve essential roles as reversible second messengers in insulin and growth factor tyrosine kinase signaling, micromolar surges in H2O2 diffuse into iron-rich compartments, driving the Fenton cascade [1, 2].',
              'হাইড্রোজেন পারঅক্সাইড (H2O2) একটি অনন্য মধ্যবর্তী অবস্থানে রয়েছে: এটি কোনো চার্জহীন নিরপেক্ষ অণু যার আয়ুষ্কাল তুলনামূলক দীর্ঘ (~১ মিলিসেকেন্ড) এবং এটি পানির মতো সহজে কোষপর্দা অতিক্রম করতে পারে [২]। বিশেষ পারঅক্সিপোরিন চ্যানেলের মাধ্যমে এটি এক কোষ থেকে অন্য কোষে চলাচল করে [২]। অল্প ঘনত্বে (১-১০ nM) এটি কোষে স্বাভাবিক সিগন্যালিং চালালেও বেশি মাত্রায় জমলে তা আয়রনের সাথে মিশে বিধ্বংসী ফেন্টন বিক্রিয়া ঘটায় [১, ২]।'
            ),
            l(
              'Singlet oxygen (1O2) and peroxynitrite (ONOO-) represent additional non-radical reactive species with profound pathophysiological consequences [2]. Peroxynitrite is formed at a diffusion-controlled rate (k = 6.7 x 10^9 M^-1 s^-1) when superoxide encounters nitric oxide (•NO), scavenging endothelial NO to cause microvascular endothelial dysfunction while nitrating tyrosine residues on structural proteins to disrupt vascular compliance [2]. Eliminating superoxide via SOD metalloenzymes is therefore critical to protect vascular tone [1, 2].',
              'সিঙ্গলেট অক্সিজেন ও পারঅক্সিনাইট্রেট (ONOO-) হলো আরও দুটি মারাত্মক যৌগ [২]। রক্তনালীতে উৎপন্ন নাইট্রিক অক্সাইডের (•NO) সাথে সুপারঅক্সাইড বিক্রিয়া করে পারঅক্সিনাইট্রেট তৈরি করে; এর ফলে রক্তনালী প্রসারিত হওয়ার ক্ষমতা হারিয়ে ফেলে এবং প্রোটিনের টাইরোসিন অ্যামিনো অ্যাসিড জারিত হয়ে স্থায়ী ভাস্কুলার ড্যামেজ ঘটে [২]। তাই SOD এনজাইম দিয়ে সুপারঅক্সাইড ধ্বংস করা রক্তচাপ ও রক্তনালী সুস্থ রাখার প্রধান পূর্বশর্ত [১, ২]।'
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
            l(
              'During this single-electron donation, ascorbic acid is converted into the ascorbyl free radical (semidehydroascorbate) [1, 5]. Unlike typical aggressive free radicals, the ascorbyl radical is extraordinarily stable because its unpaired electron is delocalized across a conjugated five-membered carbon-oxygen ring system [5]. Two semidehydroascorbate radicals rapidly undergo non-enzymatic disproportionation to regenerate one molecule of ascorbic acid and one molecule of dehydroascorbic acid (DHA) [1, 5].',
              'এই ইলেকট্রন দানের সময় ভিটামিন সি নিজে বিজারিত হয়ে অ্যাসকরবিল ফ্রি র্যাডিকেলে পরিণত হয় [১, ৫]। অন্যান্য আক্রমণাত্মক র্যাডিকেলের তুলনায় অ্যাসকরবিল র্যাডিকেলটি অত্যন্ত শান্ত ও নিরীহ, কারণ এর বিজোড় ইলেকট্রনটি এর কার্বন বলয়ের মধ্যে ছড়িয়ে পড়ে নিষ্ক্রিয় থাকে [৫]। দুটি অ্যাসকরবিল র্যাডিকেল নিজেদের মধ্যে ইলেকট্রন আদান-প্রদান করে পুনরায় একটি সক্রিয় ভিটামিন সি এবং একটি ডিহাইড্রোক্সি-অ্যাসকরবিক অ্যাসিড (DHA) তৈরি করে [১, ৫]।'
            ),
            l(
              'Dehydroascorbic acid is transported across cell membranes via facilitative glucose transporters (GLUT1, GLUT3, and GLUT4), competing directly with D-glucose [1, 5]. Inside the cell, DHA is rapidly recycled back to active ascorbic acid by glutathione-dependent dehydroascorbate reductases (glutaredoxin) and thioredoxin reductase, utilizing NADPH [1, 5]. This intracellular recycling economy ensures that a small physiological pool of vitamin C can sustain millions of catalytic enzymatic turnovers without rapid depletion [1, 5].',
              'ডিহাইড্রো-অ্যাসকরবিক অ্যাসিড গ্লুকোজ চ্যানেলের (GLUT1, GLUT3) মাধ্যমে কোষে ঢুকে পড়ে, কারণ এর গঠন গ্লুকোজের মতো [১, ৫]। কোষের ভেতরে ঢোকার পর গ্লুটাথিয়ন ও থায়োরেডক্সিন এনজাইম NADPH ব্যবহার করে একে পুনরায় সক্রিয় ভিটামিন সি-তে রূপান্তর করে [১, ৫]। কোষে এই স্বয়ংক্রিয় পুনর্ব্যবহার ব্যবস্থার কারণেই অল্প পরিমাণ ভিটামিন সি দিয়েই শরীর লক্ষ লক্ষ এনজাইম বিক্রিয়া চালিয়ে নিতে পারে [১, ৫]।'
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
              'Selenocysteine differs critically from cysteine in possessing an ionization pKa of ~5.2 compared to ~8.3 for the cysteine thiol group; consequently, at physiological pH 7.4, selenocysteine exists virtually 100% in its deprotonated, hyper-nucleophilic selenolate (-Se-) state [4]. Glutathione Peroxidase 4 (GPx4) is unique among antioxidant enzymes in that its compact active site can accept complex phospholipid hydroperoxides directly embedded inside lipid bilayers [4, 6]. Genetic deletion or pharmacological inhibition of GPx4 causes catastrophic, unrestrained lipid peroxidation that triggers ferroptosis—a distinct, iron-dependent form of non-apoptotic necrotic cell death [2, 4, 6].',
              'সেলেনোসিস্টিন সাধারণ সিস্টিনের চেয়ে অনেক বেশি কার্যকর, কারণ সাধারণ দৈহিক পিএইচ ৭.৪-এ এটি শতভাগ বিমুক্ত আয়নিত অবস্থায় থাকে যা অতি দ্রুত পারঅক্সাইড ধ্বংস করতে পারে [৪]। GPx4 এনজাইমটি সরাসরি কোষঝিল্লির ফ্যাটি অ্যাসিডের পারঅক্সাইড ভেঙে ফেলতে পারে [৪, ৬]। GPx4 কাজ না করলে মেমব্রেনের চর্বিতে দাবানলের মতো জারণ ছড়িয়ে পড়ে এবং লোহা-নির্ভর বিশেষ কোষমৃত্যু (ফেরোপ্টোসিস) ঘটে [২, ৪, ৬]।'
            ),
            l(
              'The catalytic cycle of GPx involves three distinct redox intermediates: the resting selenol (Enz-SeH), which reacts with hydroperoxide (ROOH) to yield selenenic acid (Enz-SeOH) and the corresponding alcohol (ROH) [4, 6]. The selenenic acid intermediate is reduced by the first molecule of glutathione (GSH) to form a selenenylsulfide adduct (Enz-Se-SG), which is subsequently resolved by a second GSH molecule, releasing glutathione disulfide (GSSG) and regenerating the active selenol [4, 6]. Glutathione reductase recharges GSSG back to two GSH at the expense of NADPH [1, 6].',
              'GPx এনজাইমের কাজের গতিপথটি তিনটি ধাপে সম্পন্ন হয়: এনজাইমের সক্রিয় সেলেনল গ্রুপটি প্রথমে পারঅক্সাইডকে ভেঙে নিরাপদ অ্যালকোহলে রূপান্তর করে নিজে সেলেনেনিক অ্যাসিডে পরিণত হয় [৪, ৬]। এরপর দুটি গ্লুটাথিয়ন (GSH) অণু এসে একে পুনরায় সচল অবস্থায় ফিরিয়ে দেয় এবং নিজে জারিত গ্লুটাথিয়ন (GSSG) তৈরি করে [৪, ৬]। গ্লুটাথিয়ন রিডাক্টেজ এনজাইম NADPH শক্তি ব্যবহার করে এই GSSG-কে পুনরায় সক্রিয় GSH-এ পরিণত করে চক্রটি চালু রাখে [১, ৬]।'
            ),
            l(
              'Twenty-five distinct selenoprotein genes are encoded within the human genome, serving vital roles beyond GPx1–4 [4]. These include the iodothyronine deiodinases (DIO1, DIO2, DIO3), which catalyze the essential peripheral bioactivation of prohormone thyroxine (T4) into bioactive triiodothyronine (T3), and thioredoxin reductases (TXNRD1–3), which govern cellular protein disulfide reduction and ribonucleotide reductase activity [4]. Thus, selenium deficiency directly precipitates simultaneous antioxidant failure and profound hypothyroidism [1, 4].',
              'মানব জিনোমে মোট ২৫টি স্বতন্ত্র সেলেনোপ্রোটিন জিন রয়েছে যা কেবল অ্যান্টিঅক্সিডেন্ট নয়, দেহের অন্যান্য অপরিহার্য কাজে যুক্ত [৪]। এদের মধ্যে রয়েছে ডি-আয়োডিনেজ এনজাইম, যা থাইরয়েড হরমোন T4-কে সক্রিয় T3 হরমোনে রূপান্তরিত করে, এবং থায়োরেডক্সিন রিডাক্টেজ যা কোষে ডিএনএ তৈরিতে সাহায্য করে [৪]। ফলে খাবারে সেলেনিয়ামের অভাব হলে অ্যান্টিঅক্সিডেন্ট প্রাচীর ভেঙে পড়ার পাশাপাশি মারাত্মক থাইরয়েড হরমোনের ঘাটতি তৈরি হয় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Cellular Iron Trafficking: DMT1, Ferritin Nanocages and Ferroportin', '৪. কোষীয় আয়রন পরিবহন: DMT1, ফেরিটিন খাঁচা ও ফেরোপোর্টিন'),
          paragraphs: [
            l(
              'Dietary inorganic non-heme iron exists predominantly as insoluble ferric iron (Fe3+), which must be reduced to ferrous iron (Fe2+) at the enterocyte brush border by duodenal cytochrome b (Dcytb), a ferrireductase dependent on luminal ascorbic acid [1, 3]. Fe2+ is imported across the apical microvillus membrane by Divalent Metal Transporter 1 (DMT1 / SLC11A2) via proton-coupled symport [3].',
              'খাবারের অজৈব আয়রন সাধারণত অদ্রবণীয় Fe3+ হিসেবে থাকে, যা অন্ত্রের ব্রাশ-বর্ডারে ভিটামিন সি-এর সাহায্যে Fe2+ তে বিজারিত হয় [১, ৩]। এরপর প্রোটন-নির্ভর DMT1 চ্যানেলের মাধ্যমে এটি এন্টারোসাইট কোষের ভেতরে শোষিত হয় [৩]।'
            ),
            l(
              'Within enterocytes and reticuloendothelial macrophages, excess iron is sequestered inside ferritin, a 24-subunit spherical protein nanocage with an outer diameter of 12 nanometers and an inner cavity capable of storing up to 4,500 iron atoms in an inert, non-toxic ferrihydrite mineral core [3]. When systemic iron export is required, ferrous iron is exported across the basolateral membrane into plasma via Ferroportin (SLC40A1), where the membrane-bound ferroxidases hephaestin and ceruloplasmin re-oxidize Fe2+ to Fe3+ for safe, high-affinity loading onto serum transferrin [1, 3].',
              'কোষের ভেতরে অতিরিক্ত আয়রন ফেরিটিন নামক ২৪টি সাবইউনিটের বিশাল গোলাকার প্রোটিন খাঁচার মধ্যে বন্দি থাকে, যার একটি খাঁচায় প্রায় সাড়ে চার হাজার আয়রন পরমাণু নিরাপদে জমা থাকতে পারে [৩]। রক্তে আয়রনের প্রয়োজন হলে ফেরোপোর্টিন চ্যানেলের মাধ্যমে তা বাইরে বের হয় এবং হেফেস্টিন এনজাইম একে জারিত করে ট্রান্সফারিন প্রোটিনে লোড করে নিরাপদ রক্ত সঞ্চালনে পাঠিয়ে দেয় [১, ৩]।'
            ),
            l(
              'Intracellular iron flux is governed post-transcriptionally by Iron Regulatory Proteins (IRP1 and IRP2), which bind Iron-Responsive Elements (IREs) in target mRNAs [3]. Under conditions of cellular iron deficiency, IRPs bind the 5\'-UTR IRE of ferritin and ferroportin mRNAs, blocking translation and halting iron storage and export [3]. Simultaneously, IRP binding to five IRE stem-loops in the 3\'-UTR of transferrin receptor-1 (TfR1) mRNA protects the transcript from endonucleolytic degradation, dramatically upregulating TfR1 synthesis to scavenge circulating iron [3].',
              'কোষের ভেতরে আয়রনের মাত্রা নিয়ন্ত্রিত হয় IRP1 ও IRP2 প্রোটিনের মাধ্যমে [৩]। কোষে আয়রন কমে গেলে IRP প্রোটিন ফেরিটিনের মেসেঞ্জার আরএনএ-কে আটকে রেখে নতুন ফেরিটিন তৈরি বন্ধ করে দেয় যাতে মূল্যবান আয়রন অযথা জমা না থাকে [৩]। একই সাথে এটি ট্রান্সফারিন রিসেপ্টর-১ (TfR1) এর মেসেঞ্জার আরএনএ-কে রক্ষা করে কোষে আয়রন গ্রহণের দরজার সংখ্যা শতগুণ বাড়িয়ে দেয় [৩]।'
            ),
            l(
              'Conversely, when cellular iron is abundant, iron-sulfur [4Fe-4S] cluster assembly within IRP1 converts it into cytosolic aconitase, while IRP2 is polyubiquitinated by the FBXL5 E3 ligase and degraded by the proteasome [3]. Derepressed ferritin translation rapidly sequesters the excess iron, while unprotected TfR1 mRNA is degraded, shutting off cellular iron uptake [3]. This exquisite translational circuit ensures that cytoplasm never experiences surges in free ferrous iron [2, 3].',
              'বিপরীতে কোষে আয়রন বেশি থাকলে IRP প্রোটিনের গঠন পরিবর্তিত হয়ে যায় এবং প্রোটিয়েজোমে নষ্ট হয়ে যায় [৩]। এর ফলে ফেরিটিন তৈরি অবাধে শুরু হয় এবং অতিরিক্ত সব আয়রন খাঁচায় বন্দি হয়ে যায়, আর ট্রান্সফারিন রিসেপ্টর তৈরি বন্ধ হয়ে নতুন আয়রন ঢোকা থেমে যায় [৩]। এই নিখুঁত অভ্যন্তরীণ নিয়ন্ত্রণের কারণেই কোষের ভেতরে মুক্ত ও বিপজ্জনক আয়রন কখনোই জমার সুযোগ পায় না [২, ৩]।'
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
            l(
              'A low transferrin saturation (TSAT < 20%) paired with a serum ferritin < 30 ng/mL establishes absolute iron deficiency with >95% diagnostic specificity [3]. In patients with chronic inflammatory states (such as rheumatoid arthritis or inflammatory bowel disease), a ferritin threshold of < 100 ng/mL is used to diagnose concurrent iron deficiency [3]. Intravenous iron formulations (such as ferric carboxymaltose) bypass enterocyte ferroportin blocks, delivering iron directly into reticuloendothelial macrophages to restore erythropoiesis [3].',
              'রক্তে ট্রান্সফারিন স্যাচুরেশন ২০%-এর নিচে এবং সিরাম ফেরিটিন ৩০ ng/mL-এর নিচে নামলে তা নিশ্চিতভাবে প্রকৃত আয়রন ঘাটতি প্রমাণ করে [৩]। তবে রোগীর শরীরে দীর্ঘদিন কোনো প্রদাহজনক রোগ থাকলে ফেরিটিন ১০০ ng/mL-এর নিচে হলেও আয়রনের ঘাটতি ধরা হয় [৩]। এমন প্রদাহযুক্ত রোগীদের মুখে আয়রন দিলে হেপসিডিনের কারণে তা অন্ত্রে শোষিত হয় না; এদের সরাসরি শিরার মাধ্যমে (IV Iron) ওষুধ প্রয়োগ করতে হয় [৩]।'
            ),
            l(
              'Furthermore, bone marrow biopsy with Prussian blue staining remains the historic gold standard for assessing reticuloendothelial iron stores [3]. In pure IDA, blue-stained hemosiderin granules are completely absent from macrophage cytoplasm, whereas in ACD, macrophages are engorged with iron that cannot be exported to developing erythroblasts due to hepcidin-mediated ferroportin degradation [3].',
              'এছাড়াও অস্থির মজ্জা পরীক্ষা করে বিশেষ প্রুশিয়ান ব্লু রং দিয়ে দেখলে নিশ্চিত হওয়া যায় [৩]। আয়রনের অভাবে অস্থিমজ্জার ম্যাক্রোফেজে কোনো নীল দানাদার আয়রন থাকে না; কিন্তু প্রদাহজনিত রক্তস্বল্পতায় ম্যাক্রোফেজগুলো আয়রনে উপচে পড়ে অথচ হেপসিডিনের কারণে তারা সেই আয়রন রক্তকণিকা তৈরির জন্য দিতে পারে না [৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Synthesis: Redox Metalloenzymes and Mineral Balance', '৬. প্রাতিষ্ঠানিক সমন্বয়: রেডক্স মেটালো-এনজাইম ও মিনারেল ভারসাম্য'),
          paragraphs: [
            l(
              'In summary, cellular antioxidant capacity is governed by a compartmentalized, hierarchical network of mineral-dependent enzymes working in concert with dietary electron donors [1, 2]. Cytoplasmic and mitochondrial superoxide dismutases (Cu, Zn, Mn) eliminate superoxide by converting it to hydrogen peroxide, which is subsequently reduced to water by selenocysteine glutathione peroxidases and heme catalases [1, 2, 4, 6].',
              'সংক্ষেপে, কোষীয় অ্যান্টিঅক্সিডেন্ট ক্ষমতা কোনো একক উপাদানের ওপর নির্ভর করে না, বরং এটি মিনারেল-নির্ভর এনজাইম এবং খাদ্য থেকে পাওয়া ভিটামিনের একটি অসাধারণ সমন্বয় [১, ২]। সাইটোপ্লাজম ও মাইটোকন্ড্রিয়ার SOD এনজাইমগুলো (কপার, জিঙ্ক, ম্যাঙ্গানিজ) সুপারঅক্সাইডকে পারঅক্সাইডে রূপান্তর করে, যা পরবর্তীতে সেলেনিয়াম-যুক্ত GPx এবং আয়রন-যুক্ত ক্যাটালেজ দ্বারা নিরাপদ পানিতে পরিণত হয় [১, ২, ৪, ৬]।'
            ),
            l(
              'Disruptions of trace mineral homeostasis—whether due to primary dietary starvation, genetic transporter mutations, or systemic inflammatory hepcidin elevation—precipitate severe human pathologies spanning scurvy, Keshan cardiomyopathy, Wilson copper toxicosis, and refractory anemia [1, 3, 4].',
              'ট্রেস মিনারেলের ভারসাম্যে সামান্য বিচ্যুতি ঘটলেই মারাত্মক রোগ দেখা দেয়—যেমন ভিটামিন সি-এর অভাবে স্কার্ভি, সেলেনিয়ামের অভাবে হার্ট ফেইলিউর, কপারের বিষক্রিয়ায় উইলসন্স ডিজিজ এবং প্রদাহের কারণে দুরারোগ্য রক্তস্বল্পতা [১, ৩, ৪]।'
            ),
            l(
              'The metabolic crosstalk between ascorbic acid and transition metals underlines the precision of human nutritional biochemistry [1, 5]. Ascorbate maintains non-heme iron in its reduced catalytic state to ensure connective tissue integrity, while excess unchelated iron catalyzed by ascorbate can promote Fenton toxicity in iron-overloaded states [1, 2, 5]. Medical nutrition therapy requires balanced physiological repletion tailored to individual biochemical status [1, 3].',
              'ভিটামিন সি এবং রূপান্তরশীল ধাতুর মধ্যকার মিথস্ক্রিয়া মানব শারীরবৃত্তের সূক্ষ্ম ভারসাম্য প্রকাশ করে [১, ৫]। ভিটামিন সি যেখানে কোলাজেন এনজাইম সচল রেখে রক্তনালী ও ত্বক মজবুত রাখে, সেখানে শরীরে অতিরিক্ত মুক্ত আয়রন থাকলে এটি উল্টো ফেন্টন বিক্রিয়াকে ত্বরান্বিত করতে পারে [১, ২, ৫]। তাই পুষ্টি চিকিৎসায় সব সময় রোগীর ল্যাবরেটরি রিপোর্ট পর্যবেক্ষণ করে সঠিক মাত্রায় সাপ্লিমেন্ট দেওয়া উচিত [১, ৩]।'
            ),
            l(
              'Future diagnostic and therapeutic paradigms will increasingly exploit targeted metalloenzyme modulators, synthetic hepcidin analogues, and ferroptosis-inducing agents to manage diverse human disorders spanning hematology, oncology, and metabolic medicine [2, 3, 4].',
              'চিকিৎসাবিজ্ঞানের ভবিষ্যৎ গবেষণায় নির্দিষ্ট মেটালো-এনজাইম মডুলেটর, কৃত্রিম হেপসিডিন ওষুধ এবং ক্যান্সার ধ্বংসকারী ফেরোপ্টোসিস থেরাপির ব্যবহার হেমাটোলজি, ক্যান্সার ও বিপাকীয় রোগে এক নতুন দিগন্ত উন্মোচন করছে [২, ৩, ৪]।'
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
            l(
              'Cryo-electron microscopy and femtosecond crystallography of human SOD1 show that copper coordination alternates between a five-coordinate distorted square pyramidal geometry (Cu2+) and a four-coordinate distorted tetrahedral geometry (Cu+) during each catalytic turnover [2]. Structural zinc (Zn2+) is tetrahedrally coordinated by three histidines and a bridging imidazolate from His63, maintaining active-site cleft rigidification; loss of zinc dramatically increases backbone conformational dynamics, promoting aberrant toxic oligomerization linked to ALS [2].',
              'ক্রায়ো-ইলেক্ট্রন মাইক্রোস্কোপিতে দেখা গেছে SOD1 এনজাইমের কপার পরমাণুটি প্রতিটি বিক্রিয়ায় তার জ্যামিতিক নকশা পরিবর্তন করে [২]। আর পাশে থাকা জিঙ্ক পরমাণুটি তিনটি হিস্টিডিনের সাথে যুক্ত থেকে পুরো খাঁচাটিকে দৃঢ়ভাবে ধরে রাখে; জিঙ্ক হারিয়ে গেলে এনজাইমের গঠন ভেঙে দলা পাকিয়ে যায় যা স্নায়ুকোষ ধ্বংস করে মোটর নিউরন ডিজিজ (ALS) সৃষ্টি করে [২]।'
            ),
            l(
              'Extracellular superoxide dismutase (EC-SOD / SOD3) features a unique heparin-binding domain at its carboxy terminus that tethers the homotetrameric enzyme directly to endothelial cell surface heparan sulfate proteoglycans [1, 2]. This strategic localization places SOD3 at the exact interface between vascular smooth muscle and blood flow, protecting endothelium-derived nitric oxide from superoxide-mediated scavenge and preserving resting arterial vasodilatory tone [1, 2].',
              'রক্তনালীর বাইরের অংশে অবস্থিত SOD3 এনজাইমের পেছনে একটি বিশেষ হেপারিন-বাইন্ডিং লেজ থাকে যা একে রক্তনালীর দেয়ালের সাথে শক্তভাবে আটকে রাখে [১, ২]। এই কৌশলগত অবস্থানের কারণে এটি রক্তে থাকা নাইট্রিক অক্সাইডকে ধ্বংস হতে দেয় না, ফলে রক্তনালী স্বাভাবিকভাবে প্রসারিত থাকতে পারে এবং উচ্চ রক্তচাপ প্রতিরোধ হয় [১, ২]।'
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
            l(
              'In parallel, an asparaginyl hydroxylase known as Factor Inhibiting HIF-1 (FIH-1), also a 2-oxoglutarate and ascorbate-dependent dioxygenase, hydroxylates Asn803 in the C-terminal transactivation domain (C-TAD) of HIF-1alpha [5]. Hydroxylation of Asn803 sterically blocks the recruitment of the p300 and CBP transcriptional coactivators [5]. Thus, vitamin C and molecular oxygen enforce dual, non-redundant epigenetic and post-translational brakes on hypoxic transcription [1, 5].',
              'একই সাথে FIH-1 নামক আরেকটি ভিটামিন সি-নির্ভর এনজাইম HIF প্রোটিনের ৮-০-৩ নম্বর অ্যাসপারাজিনে হাইড্রক্সিল গ্রুপ লাগিয়ে কো-অ্যাক্টিভেটর যুক্ত হওয়া বন্ধ করে দেয় [৫]। এর ফলে ভিটামিন সি এবং অক্সিজেন মিলে দ্বৈত পাহারাদার হিসেবে কাজ করে অপ্রয়োজনীয় জিন সক্রিয়করণ সম্পূর্ণ থামিয়ে রাখে [১, ৫]।'
            ),
            l(
              'Beyond HIF, the ten-eleven translocation (TET1–3) family of methylcytosine dioxygenases and the Jumonji C (JmjC) domain-containing histone demethylases represent critical nuclear 2-oxoglutarate-dependent enzymes that require ascorbate to maintain active Fe2+ [1, 5]. Ascorbate stimulates active DNA demethylation by promoting TET conversion of 5-methylcytosine (5mC) to 5-hydroxymethylcytosine (5hmC), demonstrating that vitamin C serves as an indispensable direct epigenetic regulator of embryonic stem cell pluripotency and tumor suppression [1, 5].',
              'HIF ছাড়াও কোষের নিউক্লিয়াসে ডিএনএ ও হিস্টোন মিথাইলেশন নিয়ন্ত্রণকারী TET এনজাইমগুলো পুরোপুরি ভিটামিন সি-এর ওপর নির্ভরশীল [১, ৫]। ভিটামিন সি সক্রিয় আয়রন বজায় রেখে ডিএনএ-এর মিথাইল গ্রুপ খুলে ফেলে জিন প্রকাশকে স্বাভাবিক রাখে, যা ক্যান্সার দমন এবং ভ্রূণের স্টেম সেল বিকাশে সরাসরি ভূমিকা রাখে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Selenoprotein Crystallography, Selenocysteine Lyase & Keshan Disease', '৩. সেলেনোপ্রোটিন স্ফটিক বিজ্ঞান ও কেশান কার্ডিওমায়োপ্যাথি'),
          paragraphs: [
            l(
              'Structural biochemistry of human glutathione peroxidases reveals that the active-site catalytic tetrad consists of Selenocysteine (Sec47), Glutamine (Gln82), Tryptophan (Trp160), and Asparagine (Asn161) [4, 6]. The selenium atom is positioned within an active-site cleft stabilized by hydrogen bonds from the carboxamide nitrogen of glutamine and the indole ring of tryptophan, which lower the pKa of the selenol group and direct peroxide oxygen attack [4, 6].',
              'মানবদেহের গ্লুটাথিয়ন পারঅক্সিডেজের এক্স-রে বিশ্লেষণে দেখা গেছে এর সক্রিয় স্থানটি সেলেনোসিস্টিন, গ্লুটামিন, ট্রিপটোফ্যান ও অ্যাসপারাজিন অ্যামিনো অ্যাসিডের একটি নিখুঁত জ্যামিতিক নকশায় সজ্জিত [৪, ৬]। ট্রিপটোফ্যান ও গ্লুটামিন হাইড্রোজেন বন্ধনের মাধ্যমে সেলেনিয়াম পরমাণুটিকে এমনভাবে ধরে রাখে যাতে পারঅক্সাইড অণু সেখানে আসা মাত্রই ধ্বংস হয়ে যায় [৪, ৬]।'
            ),
            l(
              'During intracellular turnover of selenoproteins, Selenocysteine Lyase (SCLY) selectively decomposes free selenocysteine into alanine and hydrogen selenide (H2Se), preventing toxic non-specific incorporation of selenocysteine into random proteins while salvaging selenium for selenophosphate synthetase 2 (SEPHS2) [4]. In Keshan disease, endemic dietary selenium deficiency exhausts myocardial GPx1 and GPx4, leaving heart muscle cells vulnerable to Coxsackie B virus-induced oxidative enteroviral genomic hypermutation and fulminant dilated cardiomyopathy [4, 6].',
              'সেলেনোপ্রোটিন ভাঙার সময় সেলেনোসিস্টিন লাইয়েজ (SCLY) এনজাইম সেলেনিয়ামকে মুক্ত করে নতুন প্রোটিন তৈরির জন্য বাঁচিয়ে রাখে [৪]। চীনে অবস্থিত কেশান অঞ্চলের মাটিতে সেলেনিয়াম না থাকায় মানুষের হৃদপেশিতে GPx এনজাইম ফুরিয়ে যায়; ফলে সাধারণ ভাইরাস আক্রমণেও হার্টের মেমব্রেনে তীব্র জারণ ঘটে এবং প্রাণঘাতী হার্ট ফেইলিউর দেখা দেয় [৪, ৬]।'
            ),
            l(
              'Genomic sequencing of patients with inherited selenoprotein synthesis defects has illuminated the indispensable function of SECIS Binding Protein 2 (SBP2 / SECISBP2) [4]. SBP2 missense mutations impair the ribosomal translation of all 25 selenoproteins, resulting in a complex multisystem syndrome characterized by abnormal thyroid hormone profiles (elevated T4, low T3, elevated reverse T3 due to DIO deficiency), severe progressive muscular dystrophy with rigid spine syndrome, delayed bone age, and defective T-cell immunity [4].',
              'বংশগত মিউটেশনের গবেষণায় দেখা গেছে SBP2 প্রোটিনের ত্রুটি থাকলে শরীরের ২৫টি সেলেনোপ্রোটিনের সবকটির অনুবাদ থমকে যায় [৪]। এর ফলে শিশুর থাইরয়েড হরমোন সক্রিয় হতে পারে না, মারাত্মক পেশি ক্ষয় রোগ দেখা দেয় এবং মেরুদণ্ড শক্ত হয়ে শিশু বিকলাঙ্গ হয়ে পড়ে [৪]।'
            ),
            l(
              'Furthermore, Kashin-Beck disease represents a chronic, deforming osteoarthropathy endemic to low-selenium regions of Central and East Asia [4]. The combined absence of selenium-dependent antioxidant enzymes and co-exposure to mycotoxins (such as T-2 toxin in stored grain) triggers massive chondrocyte apoptosis in articular growth plates, causing dwarfism, epiphyseal deformities, and severe lifelong disability [4].',
              'এছাড়াও এশিয়ার মাটিতে সেলেনিয়ামের ঘাটতিযুক্ত এলাকায় কাশিন-বেক নামক এক মারাত্মক হাড়ের রোগ দেখা যায় [৪]। সেলেনিয়াম এনজাইম না থাকায় খাদ্যশস্যের ফাঙ্গাসের বিষে তরুণাস্থির কোষগুলো গণহারে মারা যায়, ফলে শিশুর হাড়ের বৃদ্ধি থেমে গিয়ে আজীবন শারীরিক বিকলাঙ্গতা তৈরি হয় [৪]।'
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
            l(
              'Counteracting this activation, the transmembrane serine protease matriptase-2 (encoded by TMPRSS6) acts as the essential negative regulator of hepcidin [3]. Located on hepatocyte membranes, TMPRSS6 cleaves the BMP coreceptor hemojuvelin, attenuating downstream SMAD signaling and suppressing hepcidin expression to permit iron entry during erythropoietic expansion [3]. Loss-of-function TMPRSS6 mutations in humans cause Iron-Refractory Iron Deficiency Anemia (IRIDA), where hepcidin remains constitutively hyper-elevated despite profound total body iron starvation [3].',
              'এই বৃদ্ধিকে প্রতিহত করার জন্য যকৃতে TMPRSS6 নামক একটি এনজাইম থাকে যা অতিরিক্ত হেপসিডিন তৈরিকে দমন করে [৩]। TMPRSS6 যদি কোনো বংশগত কারণে নষ্ট হয়ে যায়, তবে শরীরে চরম রক্তস্বল্পতা থাকা সত্ত্বেও যকৃত পাগলের মতো হেপসিডিন তৈরি করতে থাকে; এর ফলে মুখে আয়রন খাওয়ালেও শরীর তা শোষণ করতে পারে না (IRIDA রোগ) [৩]।'
            ),
            l(
              'Erythroid regulation of hepcidin is orchestrated by erythroferrone (ERFE), a hormone secreted by bone marrow erythroblasts in response to erythropoietin (EPO) stimulation [3]. Circulating ERFE directly binds and sequesters BMP6, suppressing hepatic hepcidin production to mobilize massive amounts of iron from macrophage and hepatic stores for accelerated red blood cell production [3]. In ineffective erythropoiesis (such as non-transfusion-dependent beta-thalassemia), chronically elevated ERFE suppresses hepcidin, driving toxic systemic iron overload even without blood transfusions [3].',
              'অস্থিমজ্জায় রক্তকণিকা তৈরির সময় এরিথ্রোফেরন (ERFE) নামক হরমোন ক্ষরিত হয় [৩]। ERFE যকৃতের হেপসিডিন উৎপাদন পুরোপুরি বন্ধ করে দেয় যাতে মজ্জা দ্রুত প্রচুর আয়রন নিয়ে নতুন রক্ত তৈরি করতে পারে [৩]। থ্যালাসেমিয়া রোগীদের ক্ষেত্রে এই প্রক্রিয়াটি অনিয়ন্ত্রিত হয়ে অতিরিক্ত আয়রন শোষণ ঘটায় এবং কোনো রক্ত সঞ্চালন না নিয়েও রোগীর শরীরে মারাত্মক আয়রনের বিষক্রিয়া তৈরি করে [৩]।'
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
            l(
              'Hereditary hemochromatosis (Type 1) results from homozygous C282Y missense mutations in the HFE gene, which encodes an atypical MHC class I-like protein that normally associates with beta-2 microglobulin and transferrin receptor-1 to sense circulating iron [1, 3]. Disrupted HFE cannot stabilize the iron-sensing complex on hepatocytes, causing the liver to inappropriately perceive iron deficiency and fail to upregulate hepcidin [3]. Unrestrained ferroportin activity drives lifelong hyperabsorption of iron, causing severe bronze diabetes, cirrhosis, and dilated cardiomyopathy [1, 3].',
              'বংশগত হিমোক্রোমাটোসিস রোগটি HFE জিনের মিউটেশনের কারণে ঘটে [১, ৩]। এই ত্রুটির ফলে যকৃত রক্তে কত আয়রন আছে তা বুঝতে পারে না এবং ভুল করে মনে করে শরীরে আয়রনের ঘাটতি রয়েছে; ফলে যকৃত হেপসিডিন তৈরি বন্ধ রাখে [৩]। এর ফলে সারা জীবন ধরে অন্ত্র থেকে অতিরিক্ত আয়রন শোষিত হয়ে যকৃত, হার্ট ও অগ্ন্যাশয়ে জমা হয় এবং অঙ্গ বিকল করে দেয় [১, ৩]।'
            ),
            l(
              'Therapeutic approaches across these channelopathies require precise biochemical interventions: early subcutaneous copper-histidinate injections in Menkes disease to bypass intestinal blocks, oral copper chelators (D-penicillamine or trientine) and zinc acetate in Wilson disease, and therapeutic phlebotomy or iron chelators (deferasirox, deferiprone) in hereditary hemochromatosis to prevent end-organ cirrhosis and hepatocellular carcinoma [1, 3].',
              'এই রোগগুলোর চিকিৎসায় অত্যন্ত সুনির্দিষ্ট ওষুধ প্রয়োজন: মেনকেস রোগে অন্ত্র এড়িয়ে সরাসরি ত্বকের নিচে কপার-হিস্টিডিনেট ইনজেকশন, উইলসন্স রোগে অতিরিক্ত কপার বের করার চিলেটর ওষুধ এবং হিমোক্রোমাটোসিসে শরীর থেকে নিয়মিত রক্ত বের করে ফেলা (থেরাপিউটিক ফ্লেবোটমি) বা আয়রন চিলেটর সেবন অপরিহার্য [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Frontiers: Ferroptosis Inducers and Hepcidin Therapeutics', '৬. অনুবাদমূলক গবেষণা: ফেরোপ্টোসিস ও হেপসিডিন থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'Exploiting the biochemical vulnerability of cancer cells to iron-dependent lipid peroxidation has established ferroptosis induction as a transformative oncology frontier [2, 4, 6]. Malignant therapy-resistant cancer stem cells frequently exhibit high dependency on GPx4 and SLC7A11 (cystine/glutamate antiporter system xc-) to survive high metabolic oxidative stress [4, 6]. Small-molecule GPx4 inhibitors (such as RSL3 and ML210) selectively induce catastrophic accumulation of toxic lipid hydroperoxides in drug-resistant tumors, eradicating malignant cells through non-apoptotic ferroptotic lysis [4, 6].',
              'ক্যান্সার চিকিৎসায় আয়রন ও লিপিড জারণের বিশেষ দুর্বলতাকে কাজে লাগিয়ে ফেরোপ্টোসিস থেরাপি একটি বিপ্লব সৃষ্টি করেছে [২, ৪, ৬]। ক্যান্সার কোষগুলো বেঁচে থাকার জন্য GPx4 এনজাইমের ওপর অতিরিক্ত নির্ভরশীল থাকে [৪, ৬]। আধুনিক গবেষণায় তৈরি RSL3 জাতীয় ওষুধ এই এনজাইমকে অচল করে দিয়ে ক্যান্সার কোষের মেমব্রেনে প্রচণ্ড পারঅক্সিডেশন ঘটায় এবং দ্রুত টিউমার ধ্বংস করে দেয় [৪, ৬]।'
            ),
            l(
              'Concurrently, in hematology, engineered synthetic hepcidin mimetics (such as rusfertide) and oral ferroportin inhibitors are revolutionizing the clinical treatment of polycythemia vera and hereditary hemochromatosis by restricting iron delivery to erythroid precursors, while anti-hepcidin monoclonal antibodies and hemojuvelin traps reverse refractory Anemia of Chronic Disease [3].',
              'একই সাথে হেমাটোলজিতে কৃত্রিম হেপসিডিন ওষুধ (যেমন রাসফারটাইড) তৈরি করা হয়েছে যা রক্তে অতিরিক্ত লোহিত কণিকা তৈরি রোধ করে পলিসাইথিমিয়া ও অতিরিক্ত আয়রন রোগ নিরাময় করছে; আবার হেপসিডিন-দমনকারী অ্যান্টিবডি দিয়ে প্রদাহজনিত দীর্ঘস্থায়ী রক্তস্বল্পতা সফলভাবে দূর করা সম্ভব হচ্ছে [৩]।'
            ),
            l(
              'In pharmacology, high-dose intravenous ascorbic acid (pharmacological ascorbate, delivering 50–100 grams parenterally) achieves millimolar circulating concentrations (>10–20 mM) that cannot be attained through oral ingestion [5]. At these pharmacological concentrations, ascorbate auto-oxidizes in the extracellular fluid of tumors, generating high fluxes of hydrogen peroxide that selectively kill catalase-deficient cancer cells via Fenton-mediated oxidative DNA damage without harming normal tissues [1, 5].',
              'ফার্মাকোলজিতে উচ্চমাত্রার ভিটামিন সি শিরার মাধ্যমে (৫০-১০০ গ্রাম) প্রয়োগ করে ক্যান্সার চিকিৎসার গবেষণা চলছে [৫]। মুখে খেলে এই মাত্রা রক্তে পৌঁছানো অসম্ভব। এই চরম মাত্রায় ভিটামিন সি ক্যান্সার কোষের বাইরে হাইড্রোজেন পারঅক্সাইড তৈরি করে এবং সাধারণ কোষ অক্ষত রেখে টিউমার কোষকে ধ্বংস করে দেয় [১, ৫]।'
            ),
            l(
              'In conclusion, understanding the interconnected molecular circuitry of vitamin C, trace mineral metalloenzymes, and systemic iron regulation bridges fundamental inorganic chemistry with cutting-edge clinical therapeutics, providing dietitians and physicians with unprecedented tools to optimize human health and combat complex disease [1, 2, 3, 4].',
              'উপসংহারে, ভিটামিন সি, ট্রেস মিনারেল এবং দেহের আয়রন নিয়ন্ত্রণের এই আণবিক বিজ্ঞান সাধারণ অজৈব রসায়নের সাথে আধুনিক চিকিৎসাবিজ্ঞানের মেলবন্ধন ঘটিয়েছে, যা পুষ্টিবিদ ও চিকিৎসকদের জটিল রোগ নিরাময়ে এক অনন্য শক্তি জোগায় [১, ২, ৩, ৪]।'
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
        'ধাপ ৪: কোষের ভেতরে ফেরিটিন প্রোটিনের খাঁচা সাড়ে চার হাজার আয়রন পরমাণু আটকে রেখে ফেন্টন বিক্রিয়া ও ধ্বংসাত্মক র্যাডিকেল তৈরি প্রতিহত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 48-year-old patient with severe rheumatoid arthritis presents with fatigue and microcytic anemia (Hb 9.2 g/dL, MCV 74 fL). Laboratory analysis reveals Serum Iron = 22 mcg/dL (low), TIBC = 210 mcg/dL (low), Transferrin Saturation = 10.5% (low), and Serum Ferritin = 340 ng/mL (elevated). Serum C-reactive protein is markedly elevated at 48 mg/L. Which molecular mechanism explains this clinical profile, and what is the appropriate therapeutic pathway?',
      'তীব্র রিউমাটয়েড আর্থ্রাইটিসে আক্রান্ত ৪৮ বছর বয়সী এক রোগীর রক্তস্বল্পতা দেখা দিয়েছে (Hb ৯.২ g/dL, MCV ৭৪ fL)। পরীক্ষায় দেখা গেল সিরাম আয়রন ২২ mcg/dL (কম), TIBC ২১০ mcg/dL (কম), ট্রান্সফারিন স্যাচুরেশন ১০.৫% (কম), এবং সিরাম ফেরিটিন ৩৪০ ng/mL (বেশি)। সিআরপি (CRP) অনেক বেশি (৪৮ mg/L)। কোন আণবিক প্রক্রিয়ার কারণে এই রক্তস্বল্পতা হয়েছে এবং এর সঠিক চিকিৎসা কী?'
    ),
    options: [
      l(
        'Inflammatory IL-6 stimulates hepatic STAT3 phosphorylation, upregulating hepcidin synthesis; hepcidin degrades enterocyte and macrophage ferroportin, sequestering iron inside reticuloendothelial stores (Anemia of Chronic Disease) requiring treatment of the underlying systemic inflammation or intravenous iron therapy.',
        'প্রদাহের কারণে উৎপন্ন IL-6 যকৃতের STAT3 সক্রিয় করে অতিরিক্ত হেপসিডিন তৈরি করায় তা ফেরোপোর্টিন চ্যানেল ধ্বংস করে দেয়; ফলে আয়রন কোষে বন্দি হয়ে পড়ে (ACD) এবং এর আসল সমাধান হলো প্রদাহ নিরাময় করা অথবা প্রয়োজনে শিরার মাধ্যমে আয়রন ইনজেকশন দেওয়া।'
      ),
      l(
        'Genetic mutation in ATP7B prevents enterocyte copper export, causing copper accumulation in the iris and secondary dietary iron starvation responsive to oral ferrous sulfate.',
        'ATP7B জিনের ত্রুটির কারণে কপার জমতে থাকে এবং মুখে আয়রন খাওয়ালে রোগী ভালো হয়ে যায়।'
      ),
      l(
        'Deficiency of ascorbic acid suppresses prolyl 4-hydroxylase, precipitating complete dissolution of the transferrin protein backbone in circulation.',
        'ভিটামিন সি-এর অভাবে ট্রান্সফারিন প্রোটিন নিজে ধ্বংস হয়ে যায়।'
      ),
      l(
        'Loss of renal 1-alpha-hydroxylase halts erythropoietin secretion, completely blocking intestinal SGLT1 glucose-iron cotransport.',
        'কিডনির এনজাইম নষ্ট হয়ে যাওয়ায় গ্লুকোজ-আয়রন চ্যানেল অচল হয়ে গেছে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Systemic inflammation triggers massive hepatic secretion of the peptide hormone hepcidin via the IL-6 / JAK / STAT3 pathway. Hepcidin binds to basolateral Ferroportin-1 (SLC40A1) on enterocytes and macrophages, inducing its internalization, ubiquitination, and lysosomal proteolysis. Iron becomes trapped inside reticuloendothelial macrophages and ferritin nanocages, starving bone marrow erythroblasts and causing Anemia of Chronic Disease characterized by low serum iron, low TIBC, and elevated ferritin.',
      'শরীরে প্রদাহ হলে ইন্টারলিউকিন-৬ (IL-6) সংকেতের মাধ্যমে যকৃত অতিরিক্ত হেপসিডিন হরমোন তৈরি করে। হেপসিডিন ফেরোপোর্টিন চ্যানেলগুলোকে ধ্বংস করে দেয়, যার ফলে ম্যাক্রোফেজ ও অন্ত্রের ভেতরে আয়রন আটকে পড়ে অস্থিমজ্জায় পৌঁছাতে পারে না। ফলে রক্তে আয়রন কম হলেও ফেরিটিন বেশি থাকে এবং সাধারণ মুখের আয়রন ওষুধে কোনো কাজ হয় না।'
    ),
  },
}
