import type { LessonTopic } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

const bComplexVitaminsRefs = [
  {
    id: 'gropper-advanced-nutrition-b-vitamins',
    authors: 'Sareen S. Gropper, Jack L. Smith, Timothy P. Carr',
    title: 'Advanced Nutrition and Human Metabolism, 8th Edition, Chapter 9: Water-Soluble Vitamins',
    organization: 'Cengage Learning',
    year: 2021,
    url: 'https://www.cengage.com/c/advanced-nutrition-and-human-metabolism-8e-gropper/9780357449813/',
  },
  {
    id: 'kennedy-nutrients-b-vitamins',
    authors: 'David O. Kennedy',
    title: 'B Vitamins and the Brain: Mechanisms, Dose and Efficacy—A Review',
    organization: 'Nutrients',
    year: 2016,
    url: 'https://doi.org/10.3390/nu8020068',
    doi: '10.3390/nu8020068',
  },
  {
    id: 'stover-physiol-rev-folate',
    authors: 'Patrick J. Stover',
    title: 'Physiology of New and Old B Vitamins',
    organization: 'Physiological Reviews',
    year: 2004,
    url: 'https://doi.org/10.1152/physrev.00018.2004',
    doi: '10.1152/physrev.00018.2004',
  },
  {
    id: 'green-nat-rev-disease-b12',
    authors: 'Ralph Green, Lindsay H. Allen, Anne-Lise Bjørke-Monsen, et al.',
    title: 'Vitamin B12 deficiency',
    organization: 'Nature Reviews Disease Primers',
    year: 2017,
    url: 'https://doi.org/10.1038/nrdp.2017.40',
    doi: '10.1038/nrdp.2017.40',
  },
  {
    id: 'cantó-cell-metab-nad',
    authors: 'Carles Cantó, Keir J. Menzies, Johan Auwerx',
    title: 'NAD+ Metabolism and the Control of Energy Homeostasis: A Balancing Act between Mitochondria and the Nucleus',
    organization: 'Cell Metabolism',
    year: 2015,
    url: 'https://doi.org/10.1016/j.cmet.2015.05.023',
    doi: '10.1016/j.cmet.2015.05.023',
  },
]

export const nutrition10BComplexBioenergeticsLesson: LessonTopic = {
  id: 'topic.nutrition.b-complex-vitamins-bioenergetics',
  slug: 'b-complex-vitamins-bioenergetics',
  version: 1,
  updatedAt: '2026-10-13',
  title: l(
    '10 · Water-Soluble Vitamins: B-Complex Coenzymes in Mitochondrial Bioenergetics',
    '১০ · পানিতে দ্রবণীয় ভিটামিন: মাইটোকন্ড্রিয়াল জৈবশক্তিতে বি-কমপ্লেক্স কো-এনজাইম'
  ),
  summary: l(
    'The molecular enzymology of the B-complex vitamins: thiamine pyrophosphate (TPP) decarboxylation, riboflavin FMN/FAD electron shuttling, niacin NAD+/NADP+ hydride transfers, coenzyme A acyl activation, PLP transamination and decarboxylation, biotin carboxylases, folate-cobalamin one-carbon metabolism, and the physiological basis of deficiency syndromes.',
    'বি-কমপ্লেক্স ভিটামিনগুলোর আণবিক এনজাইমবিজ্ঞান: থায়ামিন পাইরোফসফেট (TPP) ডিকার্বক্সিলেশন, রিবোফ্লাভিন FMN/FAD ইলেকট্রন সঞ্চালন, নিয়াসিন NAD+/NADP+ হাইড্রাইড স্থানান্তর, কো-এনজাইম এ অ্যাসাইল সক্রিয়করণ, PLP ট্রান্সঅ্যামিনেশন ও ডিকার্বক্সিলেশন, বায়োটিন কার্বক্সিলেজ, ফোলেট-কোবালামিন এক-কার্বন বিপাক এবং সংশ্লিষ্ট ক্লিনিক্যাল ঘাটতির শারীরবৃত্তীয় ভিত্তি।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-13',
  objectives: [
    l(
      'Trace the biochemical mechanisms of TPP, FAD, NAD+, and CoA in the mitochondrial pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase multienzyme complexes.',
      'মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ এবং আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ মাল্টি-এনজাইম কমপ্লেক্সে TPP, FAD, NAD+ ও CoA-এর রাসায়নিক ভূমিকা ব্যাখ্যা করতে পারা।'
    ),
    l(
      'Analyze the dual catalytic roles of Vitamin B6 (PLP) in transamination (ALT/AST), neurotransmitter decarboxylation, and glycogen phosphorylase.',
      'ট্রান্সঅ্যামিনেশন (ALT/AST), নিউরোট্রান্সমিটার সংশ্লেষণ এবং গ্লাইকোজেন ফসফোরাইলেজে ভিটামিন বি৬ (PLP)-এর বহুমুখী প্রভাব বিশ্লেষণ করতে পারা।'
    ),
    l(
      'Contrast the four human biotin-dependent carboxylases and explain the metabolic consequences of holocarboxylase synthetase and biotinidase deficiencies.',
      'মানবদেহের চারটি বায়োটিন-নির্ভর কার্বক্সিলেজ এনজাইমের ভূমিকা এবং হোলোকার্বক্সিলেজ সিন্থেটেজ ও বায়োটিনিডেজ ঘাটতির বিপাকীয় ফলাফল নিরূপণ করতে পারা।'
    ),
    l(
      'Map the coupled folate-methionine-cobalamin cycle, detail the cellular mechanism of the methyl-folate trap, and contrast the neurological vs hematological manifestations of B12 deficiency.',
      'ফোলেট-মিথায়োনিন-কোবালামিন চক্রের মিথস্ক্রিয়া, মিথাইল-ফোলেট ফাঁদ এবং ভিটামিন বি১২ ঘাটতিতে স্নায়বিক বনাম রক্তজনিত সমস্যার সূক্ষ্ম পার্থক্য বিশ্লেষণ করতে পারা।'
    ),
  ],
  prerequisiteIds: ['topic.metabolism.intro-bioenergetics', 'topic.nutrition.macronutrient-digestion'],
  relatedTopicIds: ['topic.metabolism.tca-oxphos', 'topic.metabolism.one-carbon-methylation-transsulfuration'],
  references: bComplexVitaminsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-b-vitamins', 'kennedy-nutrients-b-vitamins'],
    structure: ['gropper-advanced-nutrition-b-vitamins', 'cantó-cell-metab-nad'],
    mechanism: ['cantó-cell-metab-nad', 'gropper-advanced-nutrition-b-vitamins'],
    integration: ['stover-physiol-rev-folate', 'green-nat-rev-disease-b12'],
    practice: ['green-nat-rev-disease-b12', 'kennedy-nutrients-b-vitamins'],
    takeaways: ['gropper-advanced-nutrition-b-vitamins', 'stover-physiol-rev-folate'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The B-Vitamin Family: Water-Soluble Coenzyme Fundamentals', '১. বি-ভিটামিন পরিবার: পানিতে দ্রবণীয় কো-এনজাইমের ভিত্তি'), sectionId: 'introduction' },
      { id: 'sec-dehydrogenase', label: l('2. TPP, Riboflavin, Niacin & CoA in the Mitochondrial Engine', '২. মাইটোকন্ড্রিয়াল শক্তিকেন্দ্রে TPP, রিবোফ্লাভিন, নিয়াসিন ও CoA'), sectionId: 'structure' },
      { id: 'sec-plp-biotin', label: l('3. Pyridoxal Phosphate (PLP) & Biotin Carboxylases', '৩. পাইরিডক্সাল ফসফেট (PLP) ও বায়োটিন কার্বক্সিলেজ'), sectionId: 'mechanism' },
      { id: 'sec-one-carbon', label: l('4. Folate and Cobalamin: The One-Carbon Synthesis Hub', '৪. ফোলেট ও কোবালামিন: এক-কার্বন বিপাকীয় কেন্দ্র'), sectionId: 'integration' },
      { id: 'sec-worked', label: l('5. Differential Diagnosis: Methyl-Folate Trap & Beriberi', '৫. ক্লিনিক্যাল রোগনির্ণয়: মিথাইল-ফোলেট ফাঁদ ও বেরিবেরি'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. High-Yield Summary & Review Checkpoints', '৬. উচ্চ-গুরুত্বপূর্ণ সারাংশ ও রিভিশন চেকপয়েন্ট'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Thiamine Pyrophosphate (TPP)', 'থায়ামিন পাইরোফসফেট (TPP)'),
        definition: l(
          'The active diphosphorylated coenzyme form of vitamin B1, utilizing a reactive thiazolium carbanion to catalyze oxidative decarboxylation of alpha-keto acids (PDH, aKGDH, BCKDH) and transketolase carbon shifts.',
          'ভিটামিন বি১-এর সক্রিয় কো-এনজাইম রূপ, যা থায়াজোলিয়াম রিংয়ের মাধ্যমে আলফা-কিটো অ্যাসিডের ডিকার্বক্সিলেশন (PDH, aKGDH, BCKDH) এবং পেন্টোজ ফসফেট পথের ট্রান্সকিটোলেজ বিক্রিয়া ঘটায়।'
        ),
      },
      {
        term: l('Nicotinamide Adenine Dinucleotide (NAD+ / NADH)', 'নিকোটিনামাইড অ্যাডেনিন ডাইনিউক্লিওটাইড (NAD+ / NADH)'),
        definition: l(
          'The primary pyridine nucleotide coenzyme derived from niacin (vitamin B3), acting as an obligate two-electron hydride ion (H-) acceptor in catabolic glycolysis, TCA cycle, and beta-oxidation, while serving as a consumable substrate for PARP and Sirtuin deacylases.',
          'নিয়াসিন (বি৩) থেকে প্রস্তুত দ্বি-নিউক্লিওটাইড কো-এনজাইম, যা গ্লাইকোলাইসিস, ক্রেবস চক্র ও বিটা-জারণে হাইড্রাইড গ্রহণ করে মাইটোকন্ড্রিয়ায় এটিপি তৈরি করে এবং সাইরটুইন এনজাইমের অপরিহার্য সাবস্ট্রেট হিসেবে কাজ করে।'
        ),
      },
      {
        term: l('Pyridoxal 5\'-Phosphate (PLP)', 'পাইরিডক্সাল ৫\'-ফসফেট (PLP)'),
        definition: l(
          'The versatile active coenzyme of vitamin B6, which forms a Schiff base with enzyme lysine and substrate amino groups, stabilizing carbanion intermediates in transamination, amino acid decarboxylation, and glycogen phosphorolysis.',
          'ভিটামিন বি৬-এর সক্রিয় কো-এনজাইম, যা এনজাইমের সাথে শিফ-বেস বন্ধন তৈরি করে অ্যামিনো অ্যাসিডের ট্রান্সঅ্যামিনেশন, ডিকার্বক্সিলেশন এবং পেশির গ্লাইকোজেন ভাঙার কাজে সহায়তা করে।'
        ),
      },
      {
        term: l('Methyl-Folate Trap', 'মিথাইল-ফোলেট ফাঁদ'),
        definition: l(
          'A functional cellular folate deficiency induced by vitamin B12 depletion: absence of cobalamin locks folate irreversibly in the 5-methyl-THF form because methionine synthase cannot transfer the methyl group, starving thymidylate synthase of 5,10-methylene-THF and halting DNA synthesis.',
          'ভিটামিন বি১২-এর অভাবে সৃষ্ট পরোক্ষ ফোলেট সংকট: বি১২ না থাকায় মিথায়োনিন সিন্থেটেজ কাজ করতে পারে না, ফলে কোষে ফোলেট ৫-মিথাইল-THF রূপে আটকা পড়ে ডিএনএ তৈরি বন্ধ হয়ে যায় এবং মেগালোব্লাস্টিক অ্যানিমিয়া দেখা দেয়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Distinguishing Vitamin B12 vs Folate Deficiency with Methylmalonic Acid', 'মিথাইলম্যালোনিক অ্যাসিডের মাধ্যমে বি১২ বনাম ফোলেট ঘাটতি পার্থক্যকরণ'),
        steps: [
          l(
            'Step 1: Patient presents with macrocytic anemia (MCV = 114 fL) and hypersegmented neutrophils on peripheral blood smear. Both vitamin B12 and folate deficiency produce identical megaloblastic hematology.',
            'ধাপ ১: রোগীর রক্তে ম্যাক্রোসাইটিক অ্যানিমিয়া (MCV = ১১৪ fL) এবং অতিরিক্ত বিভক্ত নিউট্রোফিল দেখা গেছে। ভিটামিন বি১২ এবং ফোলেট উভয়ের অভাবেই রক্তের এই অভিন্ন পরিবর্তন দেখা যায়।'
          ),
          l(
            'Step 2: Obtain serum Methylmalonic Acid (MMA) and Homocysteine levels. Homocysteine is elevated in both conditions because both 5-methyl-THF and methylcobalamin are required by methionine synthase.',
            'ধাপ ২: রক্তে মিথাইলম্যালোনিক অ্যাসিড (MMA) এবং হোমোসিস্টিন পরিমাপ করুন। উভয়ের অভাবেই হোমোসিস্টিন বৃদ্ধি পায়, কারণ মিথায়োনিন সিন্থেটেজ এনজাইমের জন্য দুটি ভিটামিনই একসাথে প্রয়োজন।'
          ),
          l(
            'Step 3: Analyze MMA: Methylmalonyl-CoA mutase converts methylmalonyl-CoA to succinyl-CoA strictly using adenosylcobalamin (B12); this mitochondrial reaction is entirely folate-independent.',
            'ধাপ ৩: MMA বিশ্লেষণ করুন: মাইটোকন্ড্রিয়ায় মিথাইলম্যালোনিল-কোএ মিউটেজ এনজাইম কেবল অ্যাডিনোসিলকোবালামিনের (বি১২) সাহায্যে চলে; এই বিক্রিয়ার সাথে ফোলেটের কোনো সম্পর্ক নেই।'
          ),
          l(
            'Step 4: Laboratory results show: Homocysteine = 38 micromol/L (elevated), Methylmalonic Acid = 890 nmol/L (markedly elevated, reference < 270 nmol/L). Elevated MMA unequivocally confirms Vitamin B12 deficiency.',
            'ধাপ ৪: ল্যাব রিপোর্ট: হোমোসিস্টিন = ৩৮ micromol/L (বেশি), মিথাইলম্যালোনিক অ্যাসিড = ৮৯০ nmol/L (মারাত্মক বেশি, স্বাভাবিক < ২৭০ nmol/L)। অতিরিক্ত MMA নিশ্চিত করে যে রোগীর সমস্যা ভিটামিন বি১২ ঘাটতি, কেবল ফোলেট নয়।'
          ),
        ],
        conclusion: l(
          'Elevated MMA distinguishes B12 deficiency from folate deficiency; treating a B12-deficient patient with high-dose folate corrects the anemia but allows catastrophic irreversible neurological degeneration to progress.',
          'উচ্চ MMA ভিটামিন বি১২ ঘাটতিকে ফোলেট থেকে পৃথক করে; বি১২ ঘাটতির রোগীকে ভুল করে কেবল ফোলেট দিলে রক্তস্বল্পতা দূর হলেও স্নায়ুর মারাত্মক ক্ষয় ও প্যারালাইসিস বাড়তে থাকে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does administering intravenous glucose without prior thiamine supplementation trigger acute Wernicke encephalopathy in a chronic alcoholic patient?',
          'দীর্ঘদিনের মদ্যপায়ী রোগীকে আগে থায়ামিন না দিয়ে সরাসরি গ্লুকোজ স্যালাইন দিলে কেন মারাত্মক ওয়ার্নিকি এনসেফালোপ্যাথি দেখা দেয়?'
        ),
        answer: l(
          'Chronic alcoholism severely depletes thiamine through poor intake, impaired intestinal THTR1 transport, and defective hepatic pyrophosphorylation. A massive intravenous glucose infusion drives rapid glycolysis, flooding cells with pyruvate that demands pyruvate dehydrogenase (PDH) and alpha-ketoglutarate dehydrogenase for TCA cycle entry. Without TPP, pyruvate cannot enter the TCA cycle, mitochondrial ATP generation in high-energy thalamic and mammillary brain structures collapses, and toxic lactate accumulates, precipitating acute hemorrhagic necrosis and encephalopathy.',
          'মদ্যপানে থায়ামিনের তীব্র ঘাটতি তৈরি হয়। রোগীকে হঠাৎ গ্লুকোজ দিলে কোষে গ্লাইকোলাইসিস বেড়ে গিয়ে বিপুল পাইরুভেট তৈরি হয়, যার বিপাকে থায়ামিন (TPP) প্রয়োজন। থায়ামিন না থাকায় পাইরুভেট ক্রেবস চক্রে ঢুকতে পারে না; ফলে মস্তিষ্কের থ্যালামাসে শক্তির অভাবে ল্যাকটিক অ্যাসিড জমে কোষ ধ্বংস হয় এবং তাৎক্ষণিক কোমা বা অন্ধত্ব দেখা দেয়।'
        ),
      },
      {
        question: l(
          'Why do individuals consuming excessive raw egg whites develop symptomatic biotin deficiency?',
          'অতিরিক্ত কাঁচা ডিমের সাদা অংশ খেলে কেন মানুষের দেহে বায়োটিন ভিটামিনের মারাত্মক ঘাটতি তৈরি হয়?'
        ),
        answer: l(
          'Raw egg white contains avidin, a tetrameric glycoprotein that binds dietary biotin with near-covalent affinity (dissociation constant Kd ~ 10^-15 M), representing one of the strongest non-covalent interactions in biochemistry. The avidin-biotin complex resists gastrointestinal proteolytic cleavage, preventing intestinal biotin absorption and paralyzing all four carboxylases. Cooking completely denatures avidin, neutralizing its binding capacity.',
          'কাঁচা ডিমের সাদা অংশে অ্যাভিডিন নামক প্রোটিন থাকে, যা খাদ্যের বায়োটিনের সাথে অদ্ভুত শক্তিশালী বন্ধনে আবদ্ধ হয়। পরিপাকতন্ত্রের কোনো এনজাইম এই বন্ধন ভাঙতে পারে না, ফলে বায়োটিন মল দিয়ে বের হয়ে যায় এবং কোষে কার্বক্সিলেজ এনজাইমগুলোর কাজ বন্ধ হয়ে চুল পড়া ও ত্বকে প্রদাহ দেখা দেয়। ডিম সেদ্ধ করলে তাপের কারণে অ্যাভিডিন নষ্ট হয়ে যায়।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'b-complex-mitochondrial-metabolism',
    title: l('The B-Vitamin Engine: Mitochondrial Pyruvate Dehydrogenase Complex', 'বি-ভিটামিন শক্তিকেন্দ্র: মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স'),
    description: l(
      'Track the four coordinated B-vitamin cofactors (TPP, FAD, NAD+, CoA) operating within the pyruvate dehydrogenase multienzyme complex to link glycolysis to the citric acid cycle.',
      'পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্সে চারটি বি-ভিটামিন কো-এনজাইমের (TPP, FAD, NAD+, CoA) দলগত কার্যক্রম পর্যবেক্ষণ করুন যা গ্লাইকোলাইসিসকে ক্রেবস চক্রের সাথে যুক্ত করে।'
    ),
    disclaimer: l(
      'Biochemical multienzyme complex simulation for nutritional science education; clinical coenzyme profiling requires liquid chromatography tandem mass spectrometry.',
      'পুষ্টি বিজ্ঞানের জন্য এনজাইম কমপ্লেক্সের শিক্ষামূলক সিমুলেশন; রক্তে কো-এনজাইম পরিমাপে উন্নত এলসি-এমএস পরীক্ষা প্রয়োজন।'
    ),
    svgType: 'coenzyme-cascade',
    items: [
      {
        id: 'node-pdh-tpp',
        label: l('Thiamine (B1) - TPP (E1: Pyruvate Decarboxylase)', 'থায়ামিন (বি১) - TPP (E1: পাইরুভেট ডিকার্বক্সিলেজ)'),
        description: l(
          'Thiazolium carbanion of TPP attacks pyruvate C-2, releasing CO2 and capturing the two-carbon hydroxyethyl intermediate.',
          'TPP কো-এনজাইম পাইরুভেটের সাথে যুক্ত হয়ে CO2 গ্যাস বের করে দেয় এবং দুই কার্বনের হাইড্রক্সিইথাইল অংশকে ধরে রাখে।'
        ),
        details: l(
          'Subunit E1 contains bound TPP. The acidic C-2 proton of the thiazolium ring dissociates to form a resonance-stabilized carbanion (ylide), which attacks the carbonyl carbon of pyruvate. Decarboxylation yields hydroxyethyl-TPP. Without B1, blood pyruvate and lactate accumulate rapidly.',
          'থায়ামিনের ঘাটতি হলে পাইরুভেট এসিটাইল-কোএ-তে রূপ নিতে পারে না; ফলে রক্তে বিষাক্ত ল্যাকটেট জমে মারাত্মক ল্যাকটিক অ্যাসিডোসিস এবং পেশি ও স্নায়ুক্ষয় ঘটে (বেরিবেরি)।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-pdh-lipo-coa',
        label: l('Pantothenic Acid (B5) - CoA-SH (E2: Transacetylase)', 'প্যান্টোথেনিক অ্যাসিড (বি৫) - CoA-SH (E2: ট্রান্সঅ্যাসিটাইলেজ)'),
        description: l(
          'Lipoamide swings the acetyl group to the reactive sulfhydryl (-SH) of Coenzyme A, forming high-energy Acetyl-CoA.',
          'লিপোমাইড হাতটি অ্যাসিটাইল গ্রুপকে কো-এনজাইম এ-এর সালফারে হস্তান্তর করে উচ্চ-শক্তিসম্পন্ন এসিটাইল-কোএ তৈরি করে।'
        ),
        details: l(
          'Subunit E2 utilizes lipoyl-lysine swinging arms. The acetyl group from hydroxyethyl-TPP is transferred onto reduced lipoamide, forming acetyl-dihydrolipoamide. Pantothenate-derived Coenzyme A (CoA-SH) accepts this acetyl group via a high-energy thioester bond (delta G0 = -31.5 kJ/mol), entering the TCA cycle.',
          'প্যান্টোথেনিক অ্যাসিডের তৈরি কো-এনজাইম এ থায়ো-এস্টার বন্ধনের মাধ্যমে এসিটাইল গ্রুপকে ধারণ করে ক্রেবস চক্রে পৌঁছে দেয়, যা মানবদেহের কোষীয় শক্তি উৎপাদনের মূল ভিত্তি।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-pdh-fad',
        label: l('Riboflavin (B2) - FAD (E3: Dihydrolipoyl Dehydrogenase)', 'রিবোফ্লাভিন (বি২) - FAD (E3: ডিহাইড্রোলিপয়িল ডিহাইড্রোজিনেজ)'),
        description: l(
          'Enzyme-bound FAD re-oxidizes the reduced dihydrolipoamide arm back to its active cyclic disulfide form.',
          'এনজাইমে থাকা FAD কো-এনজাইম ব্যবহৃত লিপোমাইড বাহু থেকে ইলেকট্রন গ্রহণ করে একে পুনরায় পরবর্তী চক্রের জন্য প্রস্তুত করে তোলে।'
        ),
        details: l(
          'To regenerate oxidized lipoamide for the next catalytic round, subunit E3 utilizes tightly bound Flavin Adenine Dinucleotide (FAD). The isoalloxazine ring of FAD accepts two electrons and two protons from dihydrolipoamide, generating FADH2 while reforming the intramolecular lipoamide disulfide.',
          'রিবোফ্লাভিনের ঘাটতি হলে FAD কাজ করতে পারে না, ফলে লিপোমাইড বাহু নিষ্ক্রিয় হয়ে সম্পূর্ণ পাইরুভেট কমপ্লেক্স অচল হয়ে পড়ে।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-pdh-nad',
        label: l('Niacin (B3) - NAD+ (Terminal Electron Acceptor)', 'নিয়াসিন (বি৩) - NAD+ (চূড়ান্ত ইলেকট্রন গ্রহণকারী)'),
        description: l(
          'Mobile NAD+ oxidizes FADH2 back to FAD, capturing a hydride ion to form NADH + H+ for electron transport Complex I.',
          'রক্তের NAD+ এসে FADH2 থেকে হাইড্রাইড আয়ন গ্রহণ করে NADH তৈরি করে, যা সরাসরি মাইটোকন্ড্রিয়ার ইলেকট্রন ট্রান্সপোর্ট চেইনে এটিপি বানায়।'
        ),
        details: l(
          'The final step of the PDH cascade transfers the electron pair from FADH2 to mobile NAD+, regenerating oxidized FAD and yielding one NADH. This NADH diffuses to respiratory Complex I in the inner mitochondrial membrane, driving proton extrusion to generate ~2.5 ATP via oxidative phosphorylation.',
          'নিয়াসিনের তৈরি এই NADH মাইটোকন্ড্রিয়ার কমপ্লেক্স ১-এ পৌঁছে আড়াই অণু এটিপি তৈরি করে। নিয়াসিনের অভাবে কোষীয় শক্তি সংকটের ফলে পেলাগ্রা (৪টি D: ডার্মাটাইটিস, ডায়রিয়া, ডিমেনশিয়া, মৃত্যু) রোগ হয়।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-b6-b9-b12',
        label: l('B6, Folate (B9) & B12: One-Carbon Homocysteine Nexus', 'বি৬, ফোলেট (বি৯) ও বি১২: হোমোসিস্টিন এক-কার্বন সংযোগ'),
        description: l(
          'PLP enables transsulfuration to cysteine, while 5-methyl-THF and methylcobalamin cooperate in methionine remethylation.',
          'বি৬ সালফার রূপান্তর ঘটায়, আর ফোলেট ও ভিটামিন বি১২ যৌথভাবে ক্ষতিকর হোমোসিস্টিনকে নিরাপদ মিথায়োনিনে রূপান্তরিত করে।'
        ),
        details: l(
          'Homocysteine stands at a metabolic crossroads: it can be irreversibly degraded to cysteine by PLP-dependent cystathionine beta-synthase (CBS), or remethylated to methionine by methylcobalamin-dependent methionine synthase using 5-methyl-THF. Deficiencies in B6, B9, or B12 trigger hyperhomocysteinemia, promoting vascular thrombosis and atherogenesis.',
          'ভিটামিন বি৬, বি৯ বা বি১২-এর যেকোনো একটির ঘাটতি হলে রক্তে হোমোসিস্টিন বিপজ্জনক মাত্রায় বেড়ে যায়, যা রক্তনালী ছিঁড়ে ফেলে হার্ট অ্যাটাক ও ব্রেন স্ট্রোকের মারাত্মক ঝুঁকি সৃষ্টি করে।'
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
          heading: l('1. The B-Complex Vitamins: Cellular Coenzyme Principles', '১. বি-কমপ্লেক্স ভিটামিন: কোষীয় কো-এনজাইমের মূলনীতি'),
          paragraphs: [
            l(
              'The B-complex vitamins constitute a chemically diverse collective of eight water-soluble micronutrients—thiamine (B1), riboflavin (B2), niacin (B3), pantothenic acid (B5), pyridoxine (B6), biotin (B7), folate (B9), and cobalamin (B12)—that act as indispensable non-protein catalytic helpers, or coenzymes, inside every living cell [1]. Because these molecules are freely water-soluble, excess circulating quantities are readily filtered by renal glomeruli and excreted in urine, preventing significant tissue accumulation [1, 2].',
              'বি-কমপ্লেক্স ভিটামিনগুলো হলো আটটি পানিতে দ্রবণীয় ক্ষুদ্রপুষ্টির একটি বৈচিত্র্যময় পরিবার—থায়ামিন (বি১), রিবোফ্লাভিন (বি২), নিয়াসিন (বি৩), প্যান্টোথেনিক অ্যাসিড (বি৫), পাইরিডক্সিন (বি৬), বায়োটিন (বি৭), ফোলেট (বি৯) এবং কোবালামিন (বি১২)—যা প্রতিটি সজীব কোষে অপরিহার্য কো-এনজাইম হিসেবে রাসায়নিক বিক্রিয়া পরিচালনা করে [১]। এগুলো পানিতে দ্রবণীয় হওয়ায় অতিরিক্ত গ্রহণ করলে তা সহজে কিডনির মাধ্যমে প্রস্রাবের সাথে বের হয়ে যায় এবং চর্বির মতো দেহে ক্ষতিকর মাত্রায় জমে থাকে না [১, ২]।'
            ),
            l(
              'Because humans cannot synthesize the carbon rings of these vitamins de novo (with the partial exception of limited niacin synthesis from tryptophan), human metabolic survival requires continuous dietary intake [1]. Without these active coenzymes, the cellular enzymes responsible for extracting energy from carbohydrates, lipids, and amino acids become non-functional catalytic dead ends, producing multi-system energetic and neurological collapse [1, 2].',
              'মানুষের দেহ নিজে নিজে এই ভিটামিনগুলোর রাসায়নিক কাঠামো তৈরি করতে পারে না (কেবল ট্রিপটোফ্যান অ্যামিনো অ্যাসিড থেকে সামান্য নিয়াসিন তৈরি ব্যতীত); তাই সুস্থ বেঁচে থাকার জন্য প্রতিদিনের খাবারে এদের গ্রহণ অপরিহার্য [১]। এই কো-এনজাইমগুলো ছাড়া শর্করা, চর্বি ও আমিষ থেকে শক্তি তৈরির কোষীয় কারখানাগুলো অচল হয়ে পড়ে এবং স্নায়ুতন্ত্র ও হৃদযন্ত্রের মারাত্মক বিপর্যয় ঘটে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. The Mitochondrial Bioenergetic Core: B1, B2, B3 and B5', '২. মাইটোকন্ড্রিয়াল শক্তি কেন্দ্র: বি১, বি২, বি৩ ও বি৫'),
          paragraphs: [
            l(
              'The metabolic gateway between cytoplasm and mitochondria relies entirely on the concerted partnership of four distinct B-vitamins operating within the Pyruvate Dehydrogenase (PDH) complex [1, 5]. Thiamine pyrophosphate (TPP from B1) begins this cascade by decarboxylating pyruvate, capturing the two-carbon fragment [1]. Coenzyme A (from B5) attaches to this fragment to assemble high-energy Acetyl-CoA, which enters the Citric Acid Cycle [1].',
              'সাইটোপ্লাজম থেকে মাইটোকন্ড্রিয়ায় খাদ্যকণা প্রবেশের মূল পথটি পাইরুভেট ডিহাইড্রোজিনেজ (PDH) কমপ্লেক্সের ভেতরে চারটি বি-ভিটামিনের দলগত কাজের ওপর নির্ভরশীল [১, ৫]। থায়ামিন পাইরোফসফেট (ভিটামিন বি১) পাইরুভেট থেকে কার্বন ডাই-অক্সাইড বের করে দিয়ে বিক্রিয়া শুরু করে [১]। প্যান্টোথেনিক অ্যাসিডের (বি৫) তৈরি কো-এনজাইম এ এই অংশের সাথে যুক্ত হয়ে এসিটাইল-কোএ তৈরি করে ক্রেবস চক্রে প্রবেশ করায় [১]।'
            ),
            l(
              'To keep this multi-subunit machine turning, Riboflavin (B2) provides FAD to accept electrons from internal lipoic acid arms, after which Niacin (B3) provides NAD+ to extract those electrons from FADH2 [1, 5]. The resulting NADH carries the captured energetic electrons to mitochondrial respiratory Complex I, generating the stoichiometric proton gradient that drives ATP synthesis [1, 5].',
              'এই চক্র সচল রাখতে রিবোফ্লাভিন (বি২) FAD কো-এনজাইমের মাধ্যমে ইলেকট্রন গ্রহণ করে এবং পরিশেষে নিয়াসিন (বি৩) NAD+ এর মাধ্যমে সেই ইলেকট্রন গ্রহণ করে NADH তৈরি করে [১, ৫]। এই NADH মাইটোকন্ড্রিয়ার রেস্পিরেটরি চেইনে গিয়ে প্রচুর এটিপি শক্তি তৈরি করে যা আমাদের পেশি, হৃৎপিণ্ড ও মস্তিষ্কের চালিকাশক্তি [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Amino Acid and Carboxylase Catalysis: B6 and Biotin', '৩. অ্যামিনো অ্যাসিড ও কার্বক্সিলেজ বিক্রিয়া: বি৬ ও বায়োটিন'),
          paragraphs: [
            l(
              'Vitamin B6, active primarily as Pyridoxal 5\'-Phosphate (PLP), serves as the master cofactor of amino acid transformations [1]. PLP binds to aminotransferases (such as AST and ALT) to shuffle amino groups between amino acids and keto-acids, enabling non-essential amino acid synthesis and gluconeogenesis [1]. In neural tissue, PLP-dependent decarboxylases convert glutamate into inhibitory GABA, histidine into histamine, and L-DOPA into dopamine, making B6 vital for neurotransmission [1, 2].',
              'ভিটামিন বি৬-এর সক্রিয় রূপ পাইরিডক্সাল ৫\'-ফসফেট (PLP) হলো অ্যামিনো অ্যাসিড বিপাকের প্রধান কারিগর [১]। এটি এএলটি ও এএসটি এনজাইমের সাথে যুক্ত হয়ে অ্যামিনো গ্রুপ অদলবদল করে নতুন অ্যামিনো অ্যাসিড তৈরি ও গ্লুকোজ উৎপাদনে সাহায্য করে [১]। মস্তিষ্কে PLP-নির্ভর এনজাইমগুলো গ্লুটামেট থেকে শান্তিদায়ক GABA এবং ডোপামিনের মতো গুরুত্বপূর্ণ স্নায়ুবার্তা বাহক তৈরি করে [১, ২]।'
            ),
            l(
              'Biotin (vitamin B7) acts as a specialized molecular carrier of carbon dioxide (CO2) for four crucial human carboxylase enzymes [1]. Linked to enzyme lysine residues through an amide bond, biotin captures bicarbonate and transfers it to pyruvate (forming oxaloacetate for gluconeogenesis), acetyl-CoA (forming malonyl-CoA for fatty acid synthesis), propionyl-CoA (for odd-chain lipid utilization), and beta-methylcrotonyl-CoA (for leucine catabolism) [1].',
              'বায়োটিন (ভিটামিন বি৭) হলো মানবদেহের চারটি অত্যন্ত গুরুত্বপূর্ণ কার্বক্সিলেজ এনজাইমের কার্বন ডাই-অক্সাইড বহনকারী বাহক [১]। এটি এনজাইমের গায়ে যুক্ত হয়ে পাইরুভেটের সাথে কার্বন ডাই-অক্সাইড লাগিয়ে গ্লুকোজ বানাতে সাহায্য করে এবং এসিটাইল-কোএ-তে কার্বন লাগিয়ে চর্বি তৈরির সূচনা করে [১]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. One-Carbon Metabolism: Folate and Vitamin B12 Cooperation', '৪. এক-কার্বন বিপাক: ফোলেট ও ভিটামিন বি১২-এর যৌথ কর্মপদ্ধতি'),
          paragraphs: [
            l(
              'Folate (vitamin B9) and Cobalamin (vitamin B12) operate as inseparable biochemical partners in the one-carbon metabolic network, which synthesizes DNA nucleotides and maintains cellular methylation [3, 4]. Tetrahydrofolate (THF) accepts single-carbon units (methyl, methylene, formyl) and shuttles them to build purine rings and thymidine for DNA replication [3].',
              'ফোলেট (ভিটামিন বি৯) এবং কোবালামিন (ভিটামিন বি১২) এক-কার্বন বিপাকীয় নেটওয়ার্কে একে অপরের পরিপূরক হিসেবে কাজ করে, যা ডিএনএ তৈরি ও কোষের জিনগত সুরক্ষায় অপরিহার্য [৩, ৪]। টেট্রাহাইড্রোফোলেট (THF) বিভিন্ন এক-কার্বন একক ধারণ করে ডিএনএ তৈরির মৌলিক উপাদান পিউরিন ও থাইমিডিন সংশ্লেষণে সরবরাহ করে [৩]।'
            ),
            l(
              'Vitamin B12 is essential for methionine synthase, which transfers a methyl group from 5-methyl-THF onto homocysteine to regenerate methionine [3, 4]. Methionine is the direct precursor of S-adenosylmethionine (SAMe), the universal methyl donor for DNA methylation and myelin sheath maintenance [3, 4]. When B12 is missing, folate becomes trapped as 5-methyl-THF, stopping DNA synthesis and causing cell division to stall in rapidly dividing bone marrow cells [3, 4].',
              'ভিটামিন বি১২ মিথায়োনিন সিন্থেটেজ এনজাইমের সাহায্যে ফোলেটের কাছ থেকে মিথাইল গ্রুপ গ্রহণ করে বিষাক্ত হোমোসিস্টিনকে নিরাপদ মিথায়োনিনে রূপান্তর করে [৩, ৪]। এই মিথায়োনিন থেকে SAMe তৈরি হয় যা স্নায়ুর মায়েলিন আবরণী তৈরি ও মেরামত করে [৩, ৪]। বি১২ না থাকলে ফোলেট এই প্রক্রিয়ায় আটকে পড়ে ডিএনএ তৈরি বন্ধ করে দেয় এবং অস্থিমজ্জায় রক্তকণিকা বিভাজন থমকে গিয়ে রক্তস্বল্পতা তৈরি হয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Classical Deficiency Pathologies and Clinical Presentation', '৫. চিরায়ত ঘাটতিজনিত রোগ এবং ক্লিনিক্যাল লক্ষণ'),
          paragraphs: [
            l(
              'Deficiencies in specific B-vitamins manifest as classical clinical syndromes dictated by the metabolic roles of their coenzymes [1, 2]. Thiamine deficiency produces beriberi, presenting either as peripheral polyneuropathy and muscle wasting (dry beriberi) or high-output dilated heart failure with edema (wet beriberi) [1]. Niacin deficiency precipitates pellagra, characterized by the textbook triad of photosensitive symmetric dermatitis, diarrhea, and cognitive dementia [1].',
              'সুনির্দিষ্ট বি-ভিটামিনের ঘাটতি হলে অত্যন্ত পরিচিত কিছু রোগ দেখা দেয় [১, ২]। থায়ামিনের অভাবে বেরিবেরি রোগ হয়, যা হাত-পায়ের স্নায়ু অবশ ও পেশি ক্ষয় (ড্রাই বেরিবেরি) কিংবা হৃদপিণ্ড ফুলে গিয়ে শরীর অতিরিক্ত পানি জমার (ওয়েট বেরিবেরি) রূপ নেয় [১]। নিয়াসিনের তীব্র অভাবে পেলাগ্রা রোগ হয়, যাতে রোদে চামড়া পুড়ে শক্ত হওয়া (ডার্মাটাইটিস), পেটের সমস্যা (ডায়রিয়া) এবং স্মৃতিভ্রম (ডিমেনশিয়া) দেখা দেয় [১]।'
            ),
            l(
              'Combined folate and vitamin B12 deficiencies lead to megaloblastic anemia, where erythrocytes in the peripheral circulation are abnormally large (macrocytosis) and neutrophil nuclei exhibit hypersegmentation [3, 4]. However, while folate deficiency affects only rapidly dividing tissues, vitamin B12 deficiency causes progressive, irreversible subacute combined degeneration of the spinal cord (SCD) with loss of proprioception, spastic paraparesis, and peripheral neuropathy due to impaired myelin maintenance [4].',
              'ফোলেট ও ভিটামিন বি১২ উভয়ের অভাবেই মেগালোব্লাস্টিক অ্যানিমিয়া হয়, যাতে রক্তের লোহিত কণিকাগুলো স্বাভাবিকের চেয়ে আকারে বড় ও অস্বাভাবিক হয়ে যায় [৩, ৪]। কিন্তু ফোলেটের বিপরীতে ভিটামিন বি১২-এর দীর্ঘস্থায়ী ঘাটতি হলে মেরুদণ্ডের স্নায়ুর আবরণী ধ্বংস হয়ে পা অবশ হওয়া, ভারসাম্য হারানো এবং স্থায়ী পঙ্গুত্ব (সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশন) ঘটে [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Educational Takeaways and Functional Synthesis', '৬. শিক্ষামূলক সারাংশ ও সমন্বিত দৃষ্টিভঙ্গি'),
          paragraphs: [
            l(
              'The B-complex vitamins operate as an interdependent metabolic network rather than isolated nutrients [1, 2]. Deficiencies rarely occur in true isolation in clinical malnutrition, and impairing one coenzyme often disrupts adjacent pathways in energy generation and amino acid flux [1, 2].',
              'বি-কমপ্লেক্স ভিটামিনগুলো কখনো বিচ্ছিন্নভাবে কাজ করে না, বরং পরস্পর যুক্ত একটি চক্র হিসেবে ক্রিয়াশীল থাকে [১, ২]। অপুষ্টিতে একটি ভিটামিনের ঘাটতি হলে সাধারণত অন্যান্য বি-ভিটামিনের পথগুলোও ব্যাহত হয় এবং সামগ্রিক কোষীয় শক্তিব্যবস্থা ভেঙে পড়ে [১, ২]।'
            ),
            l(
              'Diagnostic and therapeutic decisions must respect coenzyme interrelationships: always assess B12 before treating macrocytic anemia with folate, administer thiamine prior to intravenous dextrose in malnourished patients, and monitor for B6 depletion during isoniazid antimycobacterial therapy [1, 3, 4].',
              'রোগ নির্ণয় ও চিকিৎসায় এই ভিটামিনগুলোর সম্পর্ক মনে রাখা অত্যন্ত জরুরি: ফোলেট দেওয়ার আগে অবশ্যই বি১২ পরীক্ষা করতে হবে, অপুষ্টির রোগীকে গ্লুকোজ স্যালাইন দেওয়ার আগে থায়ামিন ইনজেকশন দিতে হবে এবং যক্ষ্মার আইসোনিয়াজিড ওষুধ চলাকালীন ভিটামিন বি৬ নিশ্চিত করতে হবে [১, ৩, ৪]।'
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
          heading: l('1. Enteric Absorption Mechanisms and Circulatory Transport Kinetics', '১. অন্ত্রে শোষণ প্রক্রিয়া ও রক্তে পরিবহন গতিবিদ্যা'),
          paragraphs: [
            l(
              'Dietary B-complex vitamins exist predominantly in protein-bound, phosphorylated coenzyme forms that require luminal hydrolytic dephosphorylation before mucosal uptake can occur [1]. Specific brush-border alkaline phosphatases and pyrophosphatases hydrolyze TPP, FAD, FMN, and PLP into free thiamine, riboflavin, and pyridoxal [1]. Free thiamine is imported via high-affinity thiamine transporters 1 and 2 (THTR1 / SLC19A2 and THTR2 / SLC19A3), whereas riboflavin utilizes riboflavin transporters RFVT1–3 (SLC52A1–3) [1].',
              'খাদ্যে বি-কমপ্লেক্স ভিটামিনগুলো সাধারণত প্রোটিন ও ফসফেটের সাথে জটিল কো-এনজাইম আকারে যুক্ত থাকে, যা শোষণের আগে অন্ত্রের লুমেনে এনজাইম দিয়ে ভেঙে মুক্ত হতে হয় [১]। অন্ত্রের ব্রাশ-বর্ডার অ্যালকালাইন ফসফেটেজ TPP, FAD ও PLP-কে মুক্ত ভিটামিনে রূপান্তর করে [১]। মুক্ত থায়ামিন THTR1 ও THTR2 চ্যানেলের মাধ্যমে এবং রিবোফ্লাভিন RFVT পরিবহন প্রোটিনের মাধ্যমে কোষে শোষিত হয় [১]।'
            ),
            l(
              'In contrast, vitamin B12 absorption requires an extraordinarily complex multi-organ chaperone cascade [4]. In the acidic stomach, pepsin liberates cobalamin from dietary proteins, after which it immediately binds salivary haptocorrin (R-binder) to protect it from gastric acid degradation [4]. In the duodenum, pancreatic proteases degrade haptocorrin, allowing free cobalamin to bind gastric-derived Intrinsic Factor (IF) [4]. The IF-cobalamin complex travels intact to the terminal ileum, where it undergoes receptor-mediated endocytosis via the cubam complex (cubilin and amnionless) [4].',
              'বিপরীতে ভিটামিন বি১২-এর শোষণ প্রক্রিয়া মানব শারীরবৃত্তের সবচেয়ে জটিল পথগুলোর একটি [৪]। পাকস্থলীর অম্লীয় পরিবেশে প্রোটিন থেকে মুক্ত হয়ে এটি প্রথমে লালার হ্যাপটোকরিনের সাথে যুক্ত হয়ে অ্যাসিডের হাত থেকে রক্ষা পায় [৪]। এরপর ডিওডেনামে অগ্ন্যাশয়ের এনজাইম হ্যাপটোকরিন ভেঙে দিলে এটি ইন্ট্রিনসিক ফ্যাক্টরের (IF) সাথে যুক্ত হয় এবং ক্ষুদ্রান্ত্রের শেষে গিয়ে কিউবাম রিসেপ্টরের মাধ্যমে রক্তে শোষিত হয় [৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Catalytic Architecture of Alpha-Keto Acid Dehydrogenase Complexes', '২. আলফা-কিটো অ্যাসিড ডিহাইড্রোজিনেজ কমপ্লেক্সের গঠন'),
          paragraphs: [
            l(
              'The mitochondrial pyruvate dehydrogenase (PDH), alpha-ketoglutarate dehydrogenase (aKGDH), and branched-chain alpha-ketoacid dehydrogenase (BCKDH) complexes share a homologous, highly conserved quaternary multienzyme architecture comprising E1, E2, and E3 subunits [1]. Subunit E1 (pyruvate decarboxylase) employs TPP to cleave the carboxyl group of pyruvate, forming a covalent 2-(1-hydroxyethylidene)-thiamine pyrophosphate carbanion [1].',
              'মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ (PDH), আলফা-কিটোগ্লুটারেট ডিহাইড্রোজিনেজ এবং ব্রাঞ্চড-চেইন কিটোঅ্যাসিড ডিহাইড্রোজিনেজ কমপ্লেক্স তিনটি অভিন্ন E1, E2 ও E3 সাবইউনিটের সমন্বয়ে গঠিত [১]। E1 সাবইউনিট থায়ামিন পাইরোফসফেটের (TPP) মাধ্যমে পাইরুভেটের কার্বক্সিল গ্রুপ কেটে ফেলে এবং দুই কার্বনের মধ্যবর্তী যৌগ তৈরি করে [১]।'
            ),
            l(
              'Subunit E2 (dihydrolipoyl transacetylase) utilizes a 1.4-nanometer lipoyl-lysyl swinging arm that pivots between the E1 and E3 active sites [1]. It oxidizes the hydroxyethyl intermediate, transferring the resulting acetyl group onto Coenzyme A (from pantothenic acid) to produce Acetyl-CoA [1]. Subunit E3 (dihydrolipoyl dehydrogenase) uses a flavin-disulfide active center with enzyme-bound FAD (from riboflavin) to re-oxidize the dihydrolipoyl arm, transferring electrons to mobile NAD+ (from niacin) to produce NADH [1, 5].',
              'E2 সাবইউনিটের ১৪ অ্যাংস্ট্রম দীর্ঘ লিপোমাইড বাহু হাতুড়ির মতো নড়াচড়া করে এসিটাইল অংশকে কো-এনজাইম এ-তে স্থানান্তর করে এসিটাইল-কোএ তৈরি করে [১]। সবশেষে E3 সাবইউনিট রিবোফ্লাভিন-যুক্ত FAD-এর সাহায্যে লিপোমাইড হাতকে পুনরায় জারিত করে এবং সব ইলেকট্রন নিয়াসিন-যুক্ত NAD+ কে হস্তান্তর করে NADH তৈরি করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Pyridoxal Phosphate Stereochemistry and Biotinylation Catalysis', '৩. পাইরিডক্সাল ফসফেটের স্টেরিওরসায়ন ও বায়োটিন বিক্রিয়া'),
          paragraphs: [
            l(
              'The versatility of Pyridoxal 5\'-Phosphate (PLP) stems from its ability to form a covalent aldimine (Schiff base) with the epsilon-amino group of an active-site lysine residue (internal aldimine), which is subsequently displaced by the alpha-amino group of an incoming amino acid substrate (external aldimine) [1]. Dunathan’s stereoelectronic hypothesis dictates that the bond at the alpha-carbon aligned perpendicular to the conjugated pyridine-ring pi-orbital system is selectively cleaved [1].',
              'পাইরিডক্সাল ৫\'-ফসফেটের (PLP) অসাধারণ বহুমুখী ক্ষমতার মূল রহস্য হলো এটি এনজাইমের সাথে শিফ-বেস বন্ধন তৈরি করে পাইরিডিন রিংয়ের রেজোন্যান্সের সাহায্যে ইলেকট্রন টেনে নিতে পারে [১]। ডানাথানের হাইপোথিসিস অনুযায়ী, যে বন্ধনটি রিংয়ের লম্ব বরাবর থাকে সেটি ভেঙে গিয়ে ট্রান্সঅ্যামিনেশন, ডিকার্বক্সিলেশন বা রেসিমাইজেশন সম্পন্ন হয় [১]।'
            ),
            l(
              'Biotin functions through covalent linkage to the epsilon-amino group of a specific conserved lysine residue within carboxylases, catalyzed by holocarboxylase synthetase (HLCS) [1]. The resulting biocytin arm spans 1.4 nanometers, shuttling between a biotin carboxylase (BC) domain (where ATP and bicarbonate form carboxybiotin) and a carboxyltransferase (CT) domain (where the activated CO2 is transferred to the acceptor substrate) [1]. Biotinidase recycles free biotin during protein turnover [1].',
              'বায়োটিন হোলোকার্বক্সিলেজ সিন্থেটেজ এনজাইমের মাধ্যমে কার্বক্সিলেজ প্রোটিনের লাইসিন অ্যামিনো অ্যাসিডের সাথে শক্তিশালী বন্ধনে যুক্ত হয়, যাকে বায়োসাইটিন বলে [১]। এই বায়োসাইটিন বাহুটি এটিপি ও বাইকার্বোনেট থেকে কার্বন ডাই-অক্সাইড গ্রহণ করে সাবস্ট্রেটের গায়ে লাগিয়ে দেয় [১]। প্রোটিন ধ্বংসের সময় বায়োটিনিডেজ এনজাইম বায়োটিনকে মুক্ত করে পুনঃব্যবহারের উপযোগী করে তোলে [১]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Folate-Methionine Intersections and the S-Adenosylmethionine Ratio', '৪. ফোলেট-মিথায়োনিন সংযোগ ও SAMe-SAH অনুপাত'),
          paragraphs: [
            l(
              'Cytoplasmic one-carbon flux is governed by the irreversible reduction of 5,10-methylene-THF to 5-methyl-THF by methylenetetrahydrofolate reductase (MTHFR) [3]. 5-Methyl-THF cannot be converted back to 5,10-methylene-THF; its sole metabolic destination is the transfer of its methyl group to cobalamin (forming methylcobalamin) on methionine synthase (MTR) [3, 4]. Methionine synthase subsequently remethylates homocysteine to methionine, regenerating free THF [3, 4].',
              'কোষের এক-কার্বন বিপাক MTHFR এনজাইম দ্বারা নিয়ন্ত্রিত হয়, যা ৫,১০-মিথিলিন-THF কে একমুখী বিক্রিয়ায় ৫-মিথাইল-THF-এ রূপান্তরিত করে [৩]। এই ৫-মিথাইল-THF কেবল একটিমাত্র উপায়ে ব্যবহার হতে পারে: ভিটামিন বি১২-নির্ভর মিথায়োনিন সিন্থেটেজ এনজাইমের কাছে মিথাইল হস্তান্তর করে [৩, ৪]। এই বিক্রিয়াটি হোমোসিস্টিনকে মিথায়োনিনে পরিণত করে এবং ফোলেটকে পুনরায় মুক্ত করে [৩, ৪]।'
            ),
            l(
              'Methionine is adenylated by methionine adenosyltransferase (MAT) to yield S-Adenosylmethionine (SAMe), the universal methyl donor for DNA methyltransferases (DNMTs), histone methyltransferases, and phosphatidylethanolamine N-methyltransferase (PEMT) [3]. Demethylation generates S-Adenosylhomocysteine (SAH), a potent competitive feedback inhibitor of methyltransferases; thus, the cellular SAMe-to-SAH ratio dictates the epigenetic transcriptional landscape [3].',
              'মিথায়োনিন থেকে তৈরি হয় S-অ্যাডেনোসিলমিথায়োনিন (SAMe), যা ডিএনএ ও হিস্টোন মিথাইলেশন এবং কোষঝিল্লির ফসফ্যাটিডাইলকোলিন তৈরির একমাত্র সর্বজনীন মিথাইল দাতা [৩]। মিথাইল দান করার পর এটি SAH-তে পরিণত হয়, যা জিন মিথাইলেশন বন্ধ করে দেয়; ফলে কোষে SAMe ও SAH-এর অনুপাত জিনের সক্রিয়তা সরাসরি নিয়ন্ত্রণ করে [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Laboratory Differential Diagnosis of Megaloblastic Anemia', '৫. মেগালোব্লাস্টিক অ্যানিমিয়ার ল্যাবরেটরি রোগনির্ণয়'),
          paragraphs: [
            l(
              'When encountering macrocytic anemia (MCV > 100 fL) with hypersegmented neutrophils, clinician-scientists must differentiate cobalamin from folate deficiency to prevent catastrophic diagnostic missteps [3, 4]. Serum total cobalamin measures total circulating B12 (predominantly bound to inert haptocorrin), which can yield falsely normal values in up to 30% of metabolically deficient patients; measuring holotranscobalamin (holoTC, the transcobalamin II-bound fraction delivering B12 to tissues) provides far superior clinical diagnostic accuracy [4].',
              'রক্তে ম্যাক্রোসাইটিক অ্যানিমিয়া (MCV > ১০০ fL) দেখা দিলে চিকিৎসকদের অবশ্যই ফোলেট ও ভিটামিন বি১২-এর পার্থক্য সতর্কতার সাথে নির্ণয় করতে হবে [৩, ৪]। সাধারণ রক্তের বি১২ পরীক্ষা ৩০% ক্ষেত্রে ভুল রিপোর্ট দিতে পারে, কারণ এটি অকেজো হ্যাপটোকরিনের সাথে যুক্ত ভিটামিনও পরিমাপ করে; তাই টিস্যুতে পৌঁছানো সক্রিয় হোলোট্রান্সকোবালামিন (holoTC) মাপা অনেক বেশি নির্ভরযোগ্য [৪]।'
            ),
            l(
              'Metabolic confirmation relies on quantifying Serum Methylmalonic Acid (MMA) and Total Homocysteine (tHcy) [3, 4]. In pure folate deficiency, tHcy is elevated while MMA remains strictly normal, because the conversion of methylmalonyl-CoA to succinyl-CoA by methylmalonyl-CoA mutase is an exclusively adenosylcobalamin-dependent mitochondrial reaction [3, 4]. In cobalamin deficiency, both MMA and tHcy are markedly elevated, establishing the diagnosis even in the absence of overt anemia [4].',
              'মেটাবলিক কনফার্মেশনের জন্য রক্তে মিথাইলম্যালোনিক অ্যাসিড (MMA) এবং হোমোসিস্টিন পরিমাপ করা হয় [৩, ৪]। শুধু ফোলেটের অভাব থাকলে হোমোসিস্টিন বাড়লেও MMA সম্পূর্ণ স্বাভাবিক থাকে, কারণ মাইটোকন্ড্রিয়ার এই বিক্রিয়াটি কেবল বি১২ দ্বারা নিয়ন্ত্রিত হয় [৩, ৪]। কিন্তু ভিটামিন বি১২-এর অভাব থাকলে MMA এবং হোমোসিস্টিন দুটিই মারাত্মকভাবে বেড়ে যায়, যা রক্তস্বল্পতা প্রকাশের আগেই রোগ নিশ্চিত করে [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Academic Summary: Coenzyme Integration and Homeostasis', '৬. প্রাতিষ্ঠানিক সারাংশ: কো-এনজাইম সমন্বয় ও শারীরবৃত্তীয় ভারসাম্য'),
          paragraphs: [
            l(
              'The B-complex vitamins operate as an interdependent, highly synchronized bioenergetic and biosynthetic metabolic web [1, 2]. From the quaternary architecture of alpha-keto acid dehydrogenases (B1, B2, B3, B5) to the amino acid active sites of PLP (B6) and the one-carbon nucleotide engine of folate and cobalamin (B9, B12), these water-soluble coenzymes dictate cellular viability, energy transduction, and genomic stability [1, 3, 4].',
              'বি-কমপ্লেক্স ভিটামিনগুলো একটি অসাধারণ সমন্বিত ও আন্তঃসংযুক্ত বিপাকীয় জাল তৈরি করে [১, ২]। আলফা-কিটো অ্যাসিডের শক্তিকেন্দ্র (বি১, বি২, বি৩, বি৫) থেকে শুরু করে অ্যামিনো অ্যাসিডের রূপান্তর (বি৬) এবং ডিএনএ তৈরির এক-কার্বন ইঞ্জিন (বি৯, বি১২)—এই প্রতিটি ধাপ জীবনের স্থায়িত্ব ও জিনগত সুরক্ষার জন্য অপরিহার্য [১, ৩, ৪]।'
            ),
            l(
              'Evidence-based clinical application demands rigorous understanding of enzymatic interdependence: recognizing that high-dose folate can mask B12-induced subacute combined degeneration, anticipating thiamine exhaustion during acute nutritional rehabilitation, and evaluating coenzyme genetics in inborn errors of metabolism [1, 2, 4].',
              'ক্লিনিক্যাল প্রয়োগে এই কো-এনজাইমগুলোর পারস্পরিক নির্ভরশীলতা বোঝা আবশ্যক: যেমন উচ্চমাত্রার ফোলেট প্রয়োগ ভিটামিন বি১২ ঘাটতির স্থায়ী স্নায়ুক্ষয়কে ধামাচাপা দিতে পারে, চরম অপুষ্টিতে গ্লুকোজ দিলে থায়ামিন ফুরিয়ে কোমা হতে পারে এবং বিভিন্ন জন্মগত বিপাকীয় রোগে কো-এনজাইম থেরাপির গুরুত্ব অপরিসীম [১, ২, ৪]।'
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
          heading: l('1. Transporter Genetics, Riboswitch Biology & Channelopathies', '১. পরিবহন জিনবিজ্ঞান, রাইবোসুইচ জীববিদ্যা ও চ্যানেল ত্রুটি'),
          paragraphs: [
            l(
              'The molecular uptake of water-soluble vitamins is tightly regulated by specific membrane transporter gene networks that are prone to pathological mutations [1]. Thiamine-Responsive Megaloblastic Anemia (TRMA / Rogers syndrome) is an autosomal recessive disorder caused by loss-of-function mutations in the SLC19A2 gene encoding high-affinity THTR1 [1]. Patients present with the pathognomonic clinical triad of megaloblastic anemia, sensorineural deafness, and non-autoimmune diabetes mellitus, which corrects with pharmacologic high-dose thiamine via passive diffusion and low-affinity THTR2 [1].',
              'পানিতে দ্রবণীয় ভিটামিনের কোষীয় শোষণ সুনির্দিষ্ট জিন দ্বারা নিয়ন্ত্রিত হয় যা ত্রুটিযুক্ত হলে মারাত্মক রোগ দেখা দেয় [১]। রজার্স সিন্ড্রোম (TRMA) একটি বংশগত রোগ যা SLC19A2 জিনের মিউটেশনের কারণে ঘটে, যার ফলে উচ্চ-ক্ষমতার থায়ামিন চ্যানেল THTR1 অচল হয়ে যায় [১]। এই রোগীদের মেগালোব্লাস্টিক অ্যানিমিয়া, বধিরতা এবং ডায়াবেটিস হয়, যা উচ্চমাত্রার থায়ামিন খাওয়ালে স্বাভাবিক ব্যাপনের মাধ্যমে ভালো হয়ে যায় [১]।'
            ),
            l(
              'Similarly, Brown-Vialetto-Van Laere syndrome (BVVL) is a devastating childhood-onset motor neuronopathy caused by mutations in the SLC52A2 (RFVT2) or SLC52A3 (RFVT3) riboflavin transporter genes [1]. Impaired riboflavin uptake starves mitochondrial flavoenzymes (Complex I, Complex II, electron-transferring flavoprotein [ETF], and acyl-CoA dehydrogenases), precipitating progressive pontobulbar palsy, sensory ataxia, optic atrophy, and respiratory insufficiency that can be dramatically arrested with high-dose riboflavin therapy [1].',
              'অনুরূপভাবে, ব্রাউন-ভিয়ালেটো-ভ্যান লেয়ার সিন্ড্রোম (BVVL) হলো শিশুদের মোটর নিউরন রোগ যা রিবোফ্লাভিন পরিবহনকারী জিন SLC52A2 বা SLC52A3 এর ত্রুটির কারণে ঘটে [১]। রিবোফ্লাভিন কোষে ঢুকতে না পারায় মাইটোকন্ড্রিয়ার শক্তি উৎপাদন ও ফ্যাট জারণ বন্ধ হয়ে শ্বাসকষ্ট, অন্ধত্ব ও প্যারালাইসিস দেখা দেয়, যা সঠিক সময়ে উচ্চমাত্রার রিবোফ্লাভিন দিলে সম্পূর্ণ নিরাময় করা সম্ভব [১]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('2. Sirtuins, PARPs and Non-Redox Consumption of the NAD+ Pool', '২. সাইরটুইন, PARP এবং NAD+ এর নন-রেডক্স ব্যবহার'),
          paragraphs: [
            l(
              'In contemporary cellular bioenergetics, Nicotinamide Adenine Dinucleotide (NAD+) is no longer viewed merely as a static redox electron shuttle, but as a dynamic signaling substrate consumed by regulatory enzymes [5]. Sirtuins (SIRT1–7) are class III histone/protein deacetylases that hydrolyze one molecule of NAD+ for every acetyl group removed from target lysine residues, releasing nicotinamide (NAM) and 2\'-O-acetyl-ADP-ribose [5]. Nuclear SIRT1 and mitochondrial SIRT3 deacetylate master transcriptional regulators including PGC-1alpha, FOXO3a, and superoxide dismutase 2 (SOD2), driving mitochondrial biogenesis, antioxidant defense, and fatty acid oxidation [5].',
              'আধুনিক কোষীয় জীববিজ্ঞানে NAD+ কে কেবল ইলেকট্রন বাহক হিসেবে দেখা হয় না, বরং এটি দীর্ঘায়ু ও জিন নিয়ন্ত্রণকারী প্রোটিনের অপরিহার্য উপাদান [৫]। সাইরটুইন (SIRT1-7) এনজাইমগুলো হিস্টোন থেকে অ্যাসিটাইল গ্রুপ কাটার সময় প্রতিবার একটি করে NAD+ অণু ধ্বংস করে ফেলে [৫]। SIRT1 এবং SIRT3 মাইটোকন্ড্রিয়া বৃদ্ধি, অ্যান্টিঅক্সিডেন্ট সুরক্ষা এবং ফ্যাট জারণের জিনগুলোকে সক্রিয় করে কোষকে তারুণ্য ও শক্তি জোগায় [৫]।'
            ),
            l(
              'Poly(ADP-ribose) polymerases (primarily PARP1 and PARP2) respond to DNA single- and double-strand breaks by hydrolyzing NAD+ to synthesize linear and branched poly(ADP-ribose) [PAR] chains on damaged histones and repair scaffolds [5]. Under conditions of sustained oxidative genotoxic stress, hyperactivation of PARP1 rapidly depletes intracellular NAD+ and secondary ATP pools, precipitating energetic collapse, translocation of Apoptosis-Inducing Factor (AIF) from mitochondria, and programmed parthanatos cell death [5].',
              'ডিএনএ ক্ষতিগ্রস্ত হলে PARP এনজাইম সক্রিয় হয়ে প্রচুর পরিমাণ NAD+ খরচ করে ডিএনএ মেরামতের সংকেত তৈরি করে [৫]। কিন্তু অতিরিক্ত ফ্রি র্যাডিকেল বা ডিএনএ ক্ষতির মুখে PARP অতি-সক্রিয় হয়ে উঠলে কোষে সমস্ত NAD+ ও এটিপি ফুরিয়ে যায়, যার ফলে মাইটোকন্ড্রিয়া ধ্বংস হয়ে কোষের অপমৃত্যু (পার্থানাতোস) ঘটে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('3. Glycogen Phosphorylase PLP Buffering and Transsulfuration Flux', '৩. গ্লাইকোজেন ফসফোরাইলেজ PLP সঞ্চয় ও সালফার বিপাক'),
          paragraphs: [
            l(
              'Skeletal muscle contains over 75% to 80% of total whole-body vitamin B6, where PLP is stoichiometrically bound to glycogen phosphorylase (one PLP molecule per 97-kDa monomer) [1]. Uniquely, the phosphate group of PLP in glycogen phosphorylase does not participate in Schiff base carbanion stabilization, but acts as an obligate acid-base catalytic proton donor and acceptor facilitating the phosphorolytic cleavage of alpha-1,4-glycosidic bonds [1]. Muscle glycogen phosphorylase thereby serves as an enormous physiological catalytic buffer that releases free PLP into circulation during prolonged starvation or catabolism [1].',
              'দেহের মোট ভিটামিন বি৬-এর ৭৫% থেকে ৮০% জমা থাকে কঙ্কাল পেশিতে, যেখানে এটি গ্লাইকোজেন ফসফোরাইলেজ এনজাইমের সাথে যুক্ত থাকে [১]। এখানে PLP সাধারণ অ্যামিনো বিক্রিয়ার মতো কাজ না করে সরাসরি ফসফেট দান ও গ্রহণের মাধ্যমে পেশির গ্লাইকোজেন ভেঙে গ্লুকোজ তৈরি করতে সাহায্য করে [১]। অনাহারের সময় পেশি থেকে এই PLP রক্তে এসে অন্যান্য অঙ্গের জরুরি চাহিদা মেটায় [১]।'
            ),
            l(
              'In the transsulfuration pathway, PLP is the mandatory cofactor for both cystathionine beta-synthase (CBS) and cystathionine gamma-lyase (CSE) [1]. CBS condenses homocysteine with serine to synthesize cystathionine, which CSE subsequently cleaves into cysteine and alpha-ketobutyrate [1]. Cysteine is the rate-limiting amino acid precursor for the synthesis of reduced glutathione (GSH), the primary endogenous antioxidant of human cells; consequently, chronic B6 deficiency suppresses hepatic glutathione pools and exacerbates systemic oxidative stress [1].',
              'সালফার রূপান্তর পথে PLP হলো CBS এবং CSE এনজাইমের অপরিহার্য কো-ফ্যাক্টর [১]। এই পথে ক্ষতিকর হোমোসিস্টিন রূপান্তরিত হয়ে সিস্টিন অ্যামিনো অ্যাসিড তৈরি করে [১]। এই সিস্টিন হলো কোষের সবচেয়ে শক্তিশালী প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন (GSH) তৈরির প্রধান কাঁচামাল; ফলে ভিটামিন বি৬-এর অভাব হলে দেহে গ্লুটাথিয়ন তৈরি কমে গিয়ে অক্সিডেটিভ স্ট্রেস বহুগুণ বেড়ে যায় [১]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('4. Epigenetic Methylation Flux, MTHFR Polymorphisms & Neural Tube Defects', '৪. এপিজেনেটিক মিথাইলেশন, MTHFR ভ্যারিয়েন্ট ও নিউরাল টিউব ত্রুটি'),
          paragraphs: [
            l(
              'The common 677C>T missense polymorphism in the MTHFR gene (converting Ala222Val in the catalytic domain) destabilizes the FAD-binding pocket, rendering the enzyme thermolabile with approximately 65% reduction in catalytic activity in homozygous 677TT individuals [3]. This attenuates 5,10-methylene-THF reduction, elevating plasma homocysteine while limiting downstream methionine synthesis and SAMe generation [3].',
              'MTHFR জিনের বহুল পরিচিত 677C>T মিউটেশন এনজাইমের FAD বাঁধার পকেটকে দুর্বল করে দেয়, যার ফলে 677TT ভ্যারিয়েন্টের ব্যক্তিদের এনজাইম ক্ষমতা প্রায় ৬৫% হ্রাস পায় [৩]। এর ফলে ৫-মিথাইল-THF কম তৈরি হয় এবং রক্তে হোমোসিস্টিন বিপজ্জনক মাত্রায় বেড়ে গিয়ে হৃদরোগ ও রক্ত জমাট বাঁধার প্রবণতা বাড়ে [৩]।'
            ),
            l(
              'During early embryonic neurulation (gestational days 21–28), maternal folate deficiency and MTHFR variants severely impair neural tube closure, resulting in anencephaly and spina bifida [3]. Adequate periconceptional folic acid supplementation (400 mcg daily in standard-risk, 4 mg daily in high-risk pregnancies) ensures optimal thymidylate synthesis for rapid neuroepithelial mitotic expansion and restores S-adenosylmethionine-mediated epigenetic methylation of sonic hedgehog and planar cell polarity genes [3].',
              'গর্ভধারণের প্রথম ৩-৪ সপ্তাহে (২১-২৮ দিন) মায়ের শরীরে ফোলেটের অভাব বা MTHFR মিউটেশন থাকলে ভ্রূণের নিউরাল টিউব সঠিকভাবে জোড়া লাগতে পারে না, যার ফলে অসম্পূর্ণ মস্তিষ্ক (অ্যানেনসেফালি) বা স্পাইনা বিফিডা রোগ হয় [৩]। গর্ভধারণের পূর্বে ও শুরুতে দৈনিক ৪০০ মাইক্রোগ্রাম ফলিক অ্যাসিড খেলে ডিএনএ তৈরি ও জিনের মিথাইলেশন স্বাভাবিক থাকে এবং এই মারাত্মক জন্মগত ত্রুটি প্রায় ৭০% প্রতিরোধ করা যায় [৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('5. Complex Inborn Errors: Inborn Cobalamin Complementation Groups', '৫. জন্মগত কোবালামিন ত্রুটি: কমপ্লিমেন্টেশন গ্রুপ ও মেটাবলিক ডিজিজ'),
          paragraphs: [
            l(
              'Intracellular cobalamin trafficking involves eight genetically defined complementation groups (cblA through cblG and mut) [4]. Cobalamin entering lysosomes via cubam endocytosis is exported into the cytosol via LMBD1 (LMBR1D1) and ABCD4 transporters [4]. Cytosolic MMACHC (cblC) decyanates/dealkylates cobalamin to cob(II)alamin, directing it either to MMADHC (cblD) for mitochondrial adenosylation via cob(I)alamin adenosyltransferase (MMAB / cblB) or to cytosolic methionine synthase (MTR / cblG) [4].',
              'কোষের ভেতরে ভিটামিন বি১২ প্রক্রিয়াকরণ আটটি ভিন্ন ভিন্ন জিনগত ধাপের (cblA থেকে cblG) মাধ্যমে নিয়ন্ত্রিত হয় [৪]। লাইসোজোম থেকে ভিটামিন বি১২ সাইটোপ্লাজমে আসার পর MMACHC (cblC) এনজাইম একে ভেঙে সক্রিয় করে [৪]। এরপর এটি দুই ভাগে ভাগ হয়ে যায়: একটি অংশ মাইটোকন্ড্রিয়ায় গিয়ে অ্যাডিনোসিলকোবালামিন তৈরি করে এবং অন্য অংশ সাইটোপ্লাজমে গিয়ে মিথাইলকোবালামিন তৈরি করে [৪]।'
            ),
            l(
              'Defects in cblC (the most common inborn error of intracellular cobalamin metabolism) abolish both methylcobalamin and adenosylcobalamin synthesis [4]. Patients present in early infancy with severe combined methylmalonic aciduria and homocystinuria, intractable developmental arrest, microangiopathy, and hydrocephalus, which fail to respond to standard cyanocobalamin but can be salvaged by high-dose parenteral hydroxocobalamin, betaine, and levocarnitine [4].',
              'cblC জিনের ত্রুটি হলে কোষে মিথাইলকোবালামিন ও অ্যাডিনোসিলকোবালামিন কোনোটিই তৈরি হতে পারে না [৪]। নবজাতক শিশুদের মারাত্মক মিথাইলম্যালোনিক এসিডুরিয়া, হোমোসিস্টিনুরিয়া, মস্তিষ্কে পানি জমা এবং বিকাশজনিত প্রতিবন্ধকতা দেখা দেয়; এসব রোগীকে সাধারণ সায়ানোকোবালামিন দিলে কাজ হয় না, বরং ইনজেকশনের মাধ্যমে বিশেষ হাইড্রোক্সোকোবালামিন ও বিটেইন দিয়ে চিকিৎসা করতে হয় [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('6. Translational Frontiers: NAD+ Boosters and Sirtuin Therapeutics', '৬. অনুবাদমূলক গবেষণা: NAD+ বুস্টার ও সাইরটুইন থেরাপিউটিক্স'),
          paragraphs: [
            l(
              'Age-related decline in cellular NAD+ levels has emerged as a hallmark of metabolic senescence, driven by hyperactivation of the NAD+-consuming ectoenzyme CD38 in macrophages and chronic subclinical inflammation [5]. Translational interventions utilizing oral nicotinamide mononucleotide (NMN) or nicotinamide riboside (NR) bypass rate-limiting nicotinamide phosphoribosyltransferase (NAMPT), replenishing mitochondrial NAD+ pools, reactivating SIRT1 and SIRT3, and reversing age-related endothelial dysfunction, insulin resistance, and stem cell exhaustion in preclinical models [5].',
              'বার্ধক্যের সাথে সাথে কোষে NAD+ এর মাত্রা দ্রুত হ্রাস পেতে থাকে, যার প্রধান কারণ ম্যাক্রোফেজের CD38 এনজাইম অতিরিক্ত সক্রিয় হয়ে NAD+ ধ্বংস করে ফেলে [৫]। আধুনিক গবেষণায় মুখে নিকোটিনামাইড মনোনিউক্লিওটাইড (NMN) বা নিকোটিনামাইড রিবোসাইড (NR) দিয়ে সরাসরি মাইটোকন্ড্রিয়ায় NAD+ বাড়ানো সম্ভব হচ্ছে, যা সাইরটুইন সক্রিয় করে রক্তনালীর বার্ধক্য ও ইনসুলিন রেজিস্ট্যান্স দূর করতে আশাব্যঞ্জক ফলাফল দেখাচ্ছে [৫]।'
            ),
            l(
              'Parallel frontiers in precision oncology exploit small-molecule inhibitors of dihydrofolate reductase (methotrexate), thymidylate synthase (5-fluorouracil), and poly(ADP-ribose) polymerase (olaparib), proving that selectively crippling B-vitamin coenzyme cascades remains one of the most potent weapons in targeted cancer therapeutics [3, 5].',
              'ক্যান্সার চিকিৎসায় ভিটামিন বি-এর এই কো-এনজাইম চক্রকে ইচ্ছাকৃতভাবে বন্ধ করে ক্যান্সার কোষ ধ্বংস করা হচ্ছে; যেমন মিথোট্রেক্সেট ফোলেট এনজাইম বন্ধ করে, ৫-ফ্লুরোইউরাসিল থাইমিডিন তৈরি বন্ধ করে এবং ওলাপারিব PARP এনজাইম দমন করে ক্যান্সার কোষের মৃত্যু ঘটায় [৩, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Integrated mitochondrial bioenergetic and one-carbon coenzyme cascade: Pyruvate dehydrogenase multienzyme machinery (TPP, CoA, FAD, NAD+) linked to the folate-cobalamin methionine remethylation nexus.',
      'সমন্বিত মাইটোকন্ড্রিয়াল শক্তি উৎপাদন ও এক-কার্বন কো-এনজাইম প্রবাহ: পাইরুভেট ডিহাইড্রোজিনেজ মাল্টি-এনজাইম কমপ্লেক্স (TPP, CoA, FAD, NAD+) এবং ফোলেট-কোবালামিন মিথায়োনিন পুনর্ব্যবহার চক্র।'
    ),
    steps: [
      l(
        'Step 1: Pyruvate enters mitochondria and undergoes E1-catalyzed decarboxylation via thiamine pyrophosphate (TPP from B1), capturing the two-carbon hydroxyethyl intermediate.',
        'ধাপ ১: পাইরুভেট মাইটোকন্ড্রিয়ায় ঢুকে থায়ামিন পাইরোফসফেটের (বি১) সাহায্যে ডিকার্বক্সিলেশন বিক্রিয়ায় কার্বন ডাই-অক্সাইড বের করে দিয়ে দুই কার্বনের যৌগ তৈরি করে।'
      ),
      l(
        'Step 2: Lipoamide swings the acetyl group to Coenzyme A (from pantothenic acid B5) on E2, forming high-energy Acetyl-CoA for Citric Acid Cycle entry.',
        'ধাপ ২: লিপোমাইড হাত অ্যাসিটাইল গ্রুপকে কো-এনজাইম এ-তে (বি৫) পৌঁছে দিয়ে উচ্চ-শক্তিসম্পন্ন এসিটাইল-কোএ তৈরি করে ক্রেবস চক্রে পাঠায়।'
      ),
      l(
        'Step 3: Flavin Adenine Dinucleotide (FAD from B2) re-oxidizes the lipoamide arm on E3, generating FADH2.',
        'ধাপ ৩: রিবোফ্লাভিনের (বি২) FAD লিপোমাইড বাহু থেকে ইলেকট্রন নিয়ে FADH2 তে রূপান্তরিত হয় এবং বাহুটিকে পুনরায় সচল করে।'
      ),
      l(
        'Step 4: Nicotinamide Adenine Dinucleotide (NAD+ from B3) extracts electrons from FADH2, generating NADH for Complex I ATP synthesis.',
        'ধাপ ৪: নিয়াসিনের (বি৩) NAD+ এসে FADH2 থেকে ইলেকট্রন গ্রহণ করে NADH তৈরি করে যা মাইটোকন্ড্রিয়ার রেস্পিরেটরি চেইনে এটিপি বানায়।'
      ),
      l(
        'Step 5: Folate (B9) and cobalamin (B12) cooperate in cytoplasmic one-carbon transfers to remethylate homocysteine to methionine and sustain thymidylate DNA synthesis.',
        'ধাপ ৫: সাইটোপ্লাজমে ফোলেট (বি৯) ও কোবালামিন (বি১২) একসাথে কাজ করে হোমোসিস্টিনকে মিথায়োনিনে রূপান্তর করে এবং ডিএনএ তৈরিতে সাহায্য করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 54-year-old patient with alcohol use disorder is admitted to the hospital with acute delirium, confusion, horizontal nystagmus, and truncal ataxia. The medical resident immediately orders 500 mL of 10% dextrose intravenous infusion. What is the mandatory immediate management required to prevent permanent neurological injury?',
      'মদ্যপানে অভ্যস্ত এক ৫৪ বছর বয়সী রোগী তীব্র বিভ্রান্তি, চোখের অস্বাভাবিক কাঁপুনি (হরাইজন্টাল নিস্ট্যাগমাস) এবং ভারসাম্যহীনতা নিয়ে হাসপাতালে ভর্তি হয়েছেন। ইন্টার্ন চিকিৎসক তাৎক্ষণিক ৫০০ মিলি ১০% গ্লুকোজ স্যালাইন দেওয়ার নির্দেশ দেন। স্থায়ী স্নায়বিক ক্ষতি রোধে অবিলম্বে কোন জরুরি পদক্ষেপ নেওয়া বাধ্যতামূলক?'
    ),
    options: [
      l(
        'Administer high-dose intravenous thiamine (Vitamin B1) before or concurrently with the dextrose infusion to prevent fatal metabolic collapse in the thiamine-dependent pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase enzymes.',
        'গ্লুকোজ দেওয়ার আগে বা সাথে সাথে উচ্চমাত্রার থায়ামিন (ভিটামিন বি১) ইনজেকশন দিতে হবে, যাতে থায়ামিন-নির্ভর PDH ও aKGDH এনজাইম অচল হয়ে মস্তিষ্কের স্থায়ী ক্ষতি ও মৃত্যু না ঘটে।'
      ),
      l(
        'Administer intramuscular cyanocobalamin (Vitamin B12) to immediately regenerate methionine synthase and normalize methylmalonic acid.',
        'মিথায়োনিন সিন্থেটেজ চালু করতে এবং মিথাইলম্যালোনিক অ্যাসিড কমাতে দ্রুত পেশিতে ভিটামিন বি১২ ইনজেকশন দিতে হবে।'
      ),
      l(
        'Withhold all fluids and administer oral pyridoxine (Vitamin B6) to prevent glutamate neurotoxicity and seizures.',
        'সব ধরনের স্যালাইন বন্ধ রেখে মুখে ভিটামিন বি৬ দিতে হবে যাতে গ্লুটামেট বিষক্রিয়া ও খিঁচুনি রোধ করা যায়।'
      ),
      l(
        'Infuse high-dose intravenous folic acid alone to restore thymidylate synthesis in neural progenitor cells.',
        'মস্তিষ্কের কোষে থাইমিডিন তৈরি বাড়াতে কেবল উচ্চমাত্রার ফলিক অ্যাসিড স্যালাইন দিয়ে দিতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The patient presents with the classical triad of acute Wernicke encephalopathy (confusion, ophthalmoplegia/nystagmus, ataxia) caused by profound thiamine (B1) deficiency. Thiamine pyrophosphate (TPP) is the essential coenzyme for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. Infusing a large glucose load without thiamine dramatically accelerates glycolysis, flooding the depleted brain with pyruvate that cannot be converted to acetyl-CoA for TCA cycle ATP generation. This induces rapid intracellular ATP exhaustion, focal lactic acidosis, and irreversible hemorrhagic necrosis of the mammillary bodies and medial thalamus (Korsakoff psychosis or death). High-dose IV thiamine must ALWAYS precede or accompany carbohydrate infusions in suspected deficiency.',
      'রোগীর লক্ষণগুলো তীব্র ওয়ার্নিকি এনসেফালোপ্যাথির (বিভ্রান্তি, চোখের দৃষ্টির অসাড়তা, ভারসাম্যহীনতা) স্পষ্ট লক্ষণ, যা থায়ামিনের (বি১) মারাত্মক ঘাটতির কারণে ঘটে। থায়ামিন (TPP) হলো পাইরুভেট ডিহাইড্রোজিনেজ এবং ক্রেবস চক্রের অপরিহার্য কো-এনজাইম। থায়ামিন না দিয়ে গ্লুকোজ স্যালাইন দিলে কোষে গ্লাইকোলাইসিস হঠাৎ বেড়ে যায় এবং প্রচুর পাইরুভেট জমা হয় কিন্তু তা শক্তিতে রূপান্তরিত হতে পারে না। ফলে মস্তিষ্কের থ্যালামাস অঞ্চলে শক্তির প্রচণ্ড সংকট ও ল্যাকটিক অ্যাসিড জমে স্থায়ী স্নায়ুক্ষয় ও মৃত্যু ঘটে। তাই এমন রোগীকে গ্লুকোজ স্যালাইন দেওয়ার আগে অবশ্যই উচ্চমাত্রার থায়ামিন ইনজেকশন দিতে হবে।'
    ),
  },
}
