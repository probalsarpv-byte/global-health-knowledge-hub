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
  {
    id: 'bailey-ann-ny-acad-sci-folate',
    authors: 'Lynn B. Bailey, Patrick J. Stover, Heather McNulty, et al.',
    title: 'Biomarkers of Nutrition for Development—Folate Review',
    organization: 'The Journal of Nutrition',
    year: 2015,
    url: 'https://doi.org/10.3945/jn.114.206599',
    doi: '10.3945/jn.114.206599',
  },
]

export const nutrition10BComplexBioenergeticsLesson: LessonTopic = {
  id: 'topic.nutrition.b-complex-vitamins-bioenergetics',
  slug: 'b-complex-vitamins-bioenergetics',
  version: 2,
  updatedAt: '2026-10-14',
  title: l(
    '10 · Water-Soluble Vitamins: B-Complex Coenzymes in Mitochondrial Bioenergetics',
    '১০ · পানিতে দ্রবণীয় ভিটামিন: মাইটোকন্ড্রিয়াল জৈবশক্তিতে বি-কমপ্লেক্স কো-এনজাইম'
  ),
  summary: l(
    'Comprehensive university textbook analysis of the eight water-soluble B-complex vitamins: thiamine pyrophosphate (TPP) oxidative decarboxylation, riboflavin FMN/FAD electron shuttling, niacin NAD+/NADP+ hydride transfers, coenzyme A acyl activation, PLP transamination and Schiff base catalysis, biotin carboxylation, folate-cobalamin one-carbon metabolism, and the molecular pathophysiology of deficiency syndromes.',
    'পানিতে দ্রবণীয় আটটি বি-কমপ্লেক্স ভিটামিনের পূর্ণাঙ্গ বিশ্ববিদ্যালয় পাঠ্যপুস্তক বিশ্লেষণ: থায়ামিন পাইরোফসফেট (TPP) ডিকার্বক্সিলেশন, রিবোফ্লাভিন FMN/FAD ইলেকট্রন পরিবহন, নিয়াসিন NAD+/NADP+ হাইড্রাইড স্থানান্তর, কো-এনজাইম এ অ্যাসাইল সক্রিয়করণ, PLP ট্রান্সঅ্যামিনেশন ও শিফ-বেস প্রভাবন, বায়োটিন কার্বক্সিলেশন, ফোলেট-কোবালামিন এক-কার্বন বিপাক এবং সংশ্লিষ্ট ক্লিনিক্যাল ঘাটতির আণবিক প্যাথোফিজিওলজি।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-14',
  objectives: [
    l(
      'Identify the precise active coenzyme forms for all eight B-complex vitamins and specify their biochemical reaction mechanisms in intermediary metabolism [1, 2].',
      'আটটি বি-কমপ্লেক্স ভিটামিনের প্রতিটি সক্রিয় কো-এনজাইম রূপ চিহ্নিত করা এবং বিপাকীয় প্রক্রিয়ায় এদের সুনির্দিষ্ট রাসায়নিক বিক্রিয়া পদ্ধতি নির্ধারণ করা [১, ২]।'
    ),
    l(
      'Detail the multi-enzyme organization of the Pyruvate Dehydrogenase Complex (PDC), explaining the coordinated roles of TPP, lipoate, CoA, FAD, and NAD+ in substrate channeling [1, 5].',
      'পাইরুভেট ডিহাইড্রোজিনেজ মাল্টি-এনজাইম কমপ্লেক্সের (PDC) গঠন বিশ্লেষণ করা এবং TPP, লাইপোয়েট, CoA, FAD ও NAD+ এর সমন্বিত ভূমিকা ব্যাখ্যা করা [১, ৫]।'
    ),
    l(
      'Differentiate the one-carbon transfer pathways of folate and cobalamin, mapping the biochemical etiology of the Methyl-Folate Trap and subacute combined degeneration of the spinal cord [3, 4, 6].',
      'ফোলেট ও কোবালামিনের এক-কার্বন স্থানান্তর প্রক্রিয়া বিশ্লেষণ করা, মিথাইল-ফোলেট ট্র্যাপ এবং সুষুম্নাকাণ্ডের সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশনের আণবিক কারণ উদঘাটন করা [৩, ৪, ৬]।'
    ),
    l(
      'Apply clinical diagnostic biomarkers (e.g., erythrocyte transketolase, methylmalonic acid, homocysteine) to differentiate isolated vitamer deficiencies and formulate neuroprotective repletion protocols [1, 2, 4].',
      'ক্লিনিক্যাল ল্যাবরেটরি বায়োমার্কার (যেমন ট্রান্সকিটোলেজ, মিথাইলম্যালোনিক অ্যাসিড, হোমোসিস্টিন) ব্যবহার করে নির্দিষ্ট ভিটামিনের ঘাটতি নির্ণয় ও সঠিক চিকিৎসা প্রণয়ন করা [১, ২, ৪]।'
    ),
  ],
  prerequisiteIds: ['topic.cell.structure', 'topic.metabolism.intro-bioenergetics', 'topic.metabolism.glycolysis-pyruvate'],
  relatedTopicIds: ['topic.metabolism.tca-oxphos', 'topic.nutrition.fat-soluble-vitamins'],
  references: bComplexVitaminsRefs,
  evidenceBySection: {
    introduction: ['gropper-advanced-nutrition-b-vitamins', 'kennedy-nutrients-b-vitamins'],
    structure: ['gropper-advanced-nutrition-b-vitamins', 'cantó-cell-metab-nad'],
    mechanism: ['gropper-advanced-nutrition-b-vitamins', 'cantó-cell-metab-nad'],
    integration: ['kennedy-nutrients-b-vitamins', 'green-nat-rev-disease-b12', 'stover-physiol-rev-folate'],
    practice: ['bailey-ann-ny-acad-sci-folate', 'green-nat-rev-disease-b12'],
    takeaways: ['gropper-advanced-nutrition-b-vitamins', 'kennedy-nutrients-b-vitamins'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('1. The Eight B-Complex Vitamins: Spark Plugs of Human Metabolism', '১. আটটি বি-কমপ্লেক্স ভিটামিন: মানবদেহের বিপাকীয় স্পার্ক প্লাগ'), sectionId: 'introduction' },
      { id: 'sec-coenzyme', label: l('2. The Coenzyme Mechanism: Apoenzymes, Holoenzymes & Active Keys', '২. কো-এনজাইমের কার্যপদ্ধতি: অ্যাপোএনজাইম, হোলোএনজাইম ও আণবিক চাবি'), sectionId: 'structure' },
      { id: 'sec-pdc-tca', label: l('3. How B-Vitamins Extract Energy: Pyruvate Dehydrogenase & The TCA Engine', '৩. বি-ভিটামিন কীভাবে শক্তি তৈরি করে: পাইরুভেট ডিহাইড্রোজিনেজ ও টিসিএ ইঞ্জিন'), sectionId: 'mechanism' },
      { id: 'sec-deficiencies', label: l('4. Classical Deficiency Syndromes: Beriberi, Pellagra & Anemia', '৪. চিরায়ত অভাবজনিত রোগ: বেরিবেরি, পেলেগ্রা ও রক্তশূন্যতা'), sectionId: 'integration' },
      { id: 'sec-practice', label: l('5. Food Sources, Cooking Losses & Vulnerable Populations', '৫. খাদ্য উৎস, রন্ধনজনিত ক্ষয় ও ঝুঁকিপূর্ণ জনগোষ্ঠী'), sectionId: 'practice' },
      { id: 'sec-summary', label: l('6. Key Educational Takeaways & Clinical Principles', '৬. মূল শিক্ষণীয় সারসংক্ষেপ ও ক্লিনিক্যাল নীতিমালা'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Thiamine Pyrophosphate (TPP)', 'থায়ামিন পাইরোফসফেট (TPP)'),
        definition: l(
          'The biologically active diphosphate coenzyme form of Vitamin B1; contains a central thiazolium ring with an acidic carbon-2 that forms a reactive carbanion to catalyze the non-oxidative and oxidative alpha-decarboxylation of alpha-keto acids.',
          'ভিটামিন বি১-এর প্রধান সক্রিয় কো-এনজাইম রূপ; এর থায়াজোলিয়াম রিং-এর কার্বন-২ একটি কার্বানায়ন তৈরি করে পাইরুভেট এবং আলফা-কিটোগ্লুটারেটের মতো অ্যাসিডের কার্বক্সিল গ্রুপ অপসারণে অনুঘটক হিসেবে কাজ করে।'
        ),
      },
      {
        term: l('Nicotinamide Adenine Dinucleotide (NAD+/NADH)', 'নিকোটিনামাইড অ্যাডেনিন ডাইনিউক্লিওটাইড (NAD+/NADH)'),
        definition: l(
          'The premier cellular pyridine nucleotide electron carrier derived from Vitamin B3 (niacin); accepts a hydride ion (two electrons and one proton) at carbon-4 of its nicotinamide ring to link catabolic glycolysis and the TCA cycle to mitochondrial oxidative phosphorylation.',
          'ভিটামিন বি৩ (নিয়াসিন) থেকে প্রাপ্ত প্রধান ইলেকট্রন বাহক কো-এনজাইম; এটি নিকোটিনামাইড রিং-এ হাইড্রাইড আয়ন গ্রহণ করে খাদ্য ভাঙার বিক্রিয়াগুলোকে মাইটোকন্ড্রিয়ার ইলেকট্রন ট্রান্সপোর্ট চেইনের সাথে যুক্ত করে শক্তি তৈরি করে।'
        ),
      },
      {
        term: l('Flavin Adenine Dinucleotide (FAD/FADH2)', 'ফ্লাভিন অ্যাডেনিন ডাইনিউক্লিওটাইড (FAD/FADH2)'),
        definition: l(
          'An isoalloxazine-containing prosthetic group derived from Vitamin B2 (riboflavin); capable of reversible two-electron/two-proton hydride transfers or sequential one-electron redox steps forming stable neutral semiquinone intermediates in Complex II and fatty acyl-CoA dehydrogenase.',
          'ভিটামিন বি২ (রিবোফ্লাভিন) থেকে তৈরি একটি শক্তিশালী প্রস্থেটিক গ্রুপ; এটি এক বা দুটি ইলেকট্রন ও প্রোটন গ্রহণ করে মাইটোকন্ড্রিয়ার কমপ্লেক্স-২ এবং ফ্যাটি অ্যাসিড জারণ প্রক্রিয়ায় ইলেকট্রন স্থানান্তর সম্পন্ন করে।'
        ),
      },
      {
        term: l('Pyridoxal-5\'-Phosphate (PLP)', 'পাইরিডক্সাল-৫\'-ফসফেট (PLP)'),
        definition: l(
          'The active aldehyde coenzyme form of Vitamin B6; forms a covalent internal aldimine Schiff base with active-site lysine residues, acting as an electrophilic electron sink to stabilize carbanion intermediates during amino acid transamination, decarboxylation, and racemization.',
          'ভিটামিন বি৬-এর সক্রিয় অ্যালডিহাইড কো-এনজাইম; এটি এনজাইমের সাথে শিফ-বেস বন্ধন তৈরি করে একটি ইলেকট্রন ফাঁদ হিসেবে কাজ করে, যা অ্যামিনো অ্যাসিডের ট্রান্সঅ্যামিনেশন এবং নিউরোট্রান্সমিটার তৈরিতে অপরিহার্য।'
        ),
      },
      {
        term: l('Methyl-Folate Trap', 'মিথাইল-ফোলেট ট্র্যাপ'),
        definition: l(
          'A metabolic dead-end occurring in functional Vitamin B12 deficiency: because the Methionine Synthase reaction is the sole physiological exit route for 5-methyl-THF, cobalamin deficiency traps cellular folate as 5-methyl-THF, producing functional intracellular folate deficiency and megaloblastic anemia.',
          'ভিটামিন বি১২-এর ঘাটতিতে তৈরি হওয়া এক মারাত্মক বিপাকীয় ফাঁদ: ৫-মিথাইল-THF কেবল বি১২-এর উপস্থিতিতেই মুক্ত হতে পারে; বি১২ না থাকলে সমস্ত ফোলেট এই রূপে চিরতরে আটকে যায়, ফলে ডিএনএ তৈরি বন্ধ হয়ে রক্তশূন্যতা দেখা দেয়।'
        ),
      },
      {
        term: l('Adenosylcobalamin & Methylcobalamin', 'অ্যাডেনোসিলকোবালামিন ও মিথাইলকোবালামিন'),
        definition: l(
          'The two active physiological vitamer coenzymes of Vitamin B12 containing a central corrin ring coordinating a cobalt ion; methylcobalamin operates in the cytosol for methionine synthesis, while 5\'-deoxyadenosylcobalamin operates in mitochondria for methylmalonyl-CoA mutase isomerization.',
          'ভিটামিন বি১২-এর দুটি মূল সক্রিয় রূপ যাতে কোবাল্ট আয়ন থাকে; মিথাইলকোবালামিন সাইটোপ্লাজমে হোমোসিস্টিন দূর করতে কাজ করে, আর অ্যাডেনোসিলকোবালামিন মাইটোকন্ড্রিয়ায় চর্বির বিপাক সম্পন্ন করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Differentiating Cobalamin (B12) vs Folate (B9) Deficiency Using Methylmalonic Acid', 'মিথাইলম্যালোনিক অ্যাসিড ব্যবহার করে ভিটামিন বি১২ ও ফোলেট ঘাটতির পার্থক্য নির্ণয়'),
        steps: [
          l(
            'Step 1: Clinical Presentation & Initial Labs: A 68-year-old patient presents with progressive lower-extremity paresthesias, sensory ataxia, and memory fog. Complete Blood Count (CBC) reveals marked macrocytic anemia: Hemoglobin = 8.8 g/dL (normal: 13.5–17.5), Mean Corpuscular Volume (MCV) = 114 fL (marked macrocytosis >100 fL). Peripheral blood smear shows hypersegmented neutrophils (>5 lobes).',
            'ধাপ ১: রোগীর বিবরণ ও প্রাথমিক পরীক্ষা: ৬৮ বছর বয়সী রোগীর হাত-পায়ে অবশ ভাব, হাঁটার ভারসাম্যহীনতা এবং রক্তশূন্যতা দেখা দিয়েছে। রক্ত পরীক্ষায় হিমোগ্লোবিন = ৮.৮ g/dL এবং লোহিত রক্তকণিকার আকার MCV = ১১৪ fL (স্বাভাবিকের চেয়ে অনেক বড়)। রক্তের স্লাইডে হাইপারসেগমেন্টেড নিউট্রোফিল দেখা গেছে।'
          ),
          l(
            'Step 2: Evaluate borderline serum vitamer concentrations: Serum Vitamin B12 = 215 pg/mL (borderline low-normal reference range: 200–300 pg/mL, diagnostic uncertainty). Serum Folate = 6.2 ng/mL (normal >4.0 ng/mL). Borderline serum B12 fails to differentiate true intracellular cobalamin depletion from folate deficiency.',
            'ধাপ ২: রক্তের ভিটামিন মাত্রা বিশ্লেষণ: সিরাম ভিটামিন বি১২ = ২১৫ pg/mL (সন্দেহজনক নিম্ন-স্বাভাবিক সীমা: ২০০-৩০০ pg/mL, যা স্পষ্ট কোনো সিদ্ধান্ত দেয় না)। সিরাম ফোলেট = ৬.২ ng/mL (স্বাভাবিক)। কেবল রক্তের বি১২ দেখে আসল ঘাটতি বোঝা অসম্ভব।'
          ),
          l(
            'Step 3: Order specific functional metabolic intermediate biomarkers: Quantify Serum Methylmalonic Acid (MMA) and Total Plasma Homocysteine. Laboratory results: Plasma Homocysteine = 38.5 umol/L (elevated, normal: <15 umol/L). Serum Methylmalonic Acid = 1.45 umol/L (profoundly elevated, normal: 0.08–0.40 umol/L).',
            'ধাপ ৩: সুনির্দিষ্ট মেটাবলিক বায়োমার্কার পরীক্ষা: সিরাম মিথাইলম্যালোনিক অ্যাসিড (MMA) এবং হোমোসিস্টিন পরীক্ষা করুন। ফলাফল: হোমোসিস্টিন = ৩৮.৫ umol/L (অতিরিক্ত বৃদ্ধি) এবং মিথাইলম্যালোনিক অ্যাসিড = ১.৪৫ umol/L (বিপজ্জনক মাত্রায় বৃদ্ধি, স্বাভাবিক: ০.০৮-০.৪০ umol/L)।'
          ),
          l(
            'Step 4: Mechanistic Interpretation & Therapeutic Plan: Because Methylmalonyl-CoA Mutase strictly requires adenosylcobalamin (and is completely independent of folate), an elevated MMA confirms genuine cellular Vitamin B12 deficiency. If this were isolated folate deficiency, homocysteine would be elevated but MMA would remain normal. Administer Intramuscular Cyanocobalamin (1,000 mcg daily for 7 days, then weekly for 4 weeks) to arrest irreversible spinal cord demyelination before prescribing oral folate.',
            'ধাপ ৪: মেকানিজম ব্যাখ্যা ও চিকিৎসা পরিকল্পনা: মাইটোকন্ড্রিয়াল এনজাইমটি কেবল বি১২ ব্যবহার করে; ফোলেটের সাথে এর কোনো সম্পর্ক নেই। তাই MMA বৃদ্ধি পাওয়া নিশ্চিত করে যে সমস্যাটি ভিটামিন বি১২-এর। রোগীকে অবিলম্বে মাংসপেশিতে বি১২ ইনজেকশন (১০০০ mcg) দিতে হবে যাতে স্নায়ুর স্থায়ী ক্ষতি রোধ করা যায়।'
          ),
        ],
        conclusion: l(
          'Serum Methylmalonic Acid successfully unmasked severe intracellular Vitamin B12 deficiency disguised by a borderline total serum B12 level. Parenteral cobalamin repletion arrested progressive sensory ataxia and normalized MCV within 6 weeks.',
          'মিথাইলম্যালোনিক অ্যাসিড (MMA) পরীক্ষার মাধ্যমে আপাতদৃষ্টিতে স্বাভাবিক দেখানো রক্তেও ভিটামিন বি১২-এর তীব্র কোষীয় ঘাটতি শনাক্ত করা সম্ভব হয়েছে। দ্রুত ইনজেকশন দেওয়ার ফলে রোগীর স্নায়ুর অবক্ষয় বন্ধ হয়েছে এবং রক্তশূন্যতা পুরোপুরি দূর হয়েছে।'
        ),
      },
      {
        title: l('Emergency Thiamine Administration in Wernicke Encephalopathy & Lactic Acidosis Risk', 'ভার্নিক এনসেফালোপ্যাথিতে জরুরি থায়ামিন প্রয়োগ ও ল্যাকটিক অ্যাসিডোসিস প্রতিরোধ'),
        steps: [
          l(
            'Step 1: Emergency Department Presentation: A 52-year-old chronically malnourished patient with alcohol use disorder is brought to the ED acutely confused, exhibiting bilateral horizontal nystagmus and profound truncal ataxia—the classical clinical triad of Wernicke Encephalopathy.',
            'ধাপ ১: জরুরি বিভাগে রোগীর বিবরণ: চরম অপুষ্টি ও মদ্যপানে অভ্যস্ত ৫২ বছর বয়সী এক ব্যক্তি বিভ্রান্তিকর মানসিক অবস্থা, চোখের অস্বাভাবিক দ্রুত নড়াচড়া (নিস্ট্যাগমাস) এবং হাঁটার ভারসাম্যহীনতা নিয়ে হাসপাতালে আসেন—যা ভার্নিক এনসেফালোপ্যাথির চিরায়ত লক্ষণ।'
          ),
          l(
            'Step 2: Understand the fatal biochemical pitfall of immediate IV Dextrose: Infusing 5% Dextrose in Water (D5W) before thiamine loads the brain with glucose. Glycolysis generates massive amounts of pyruvate. However, without Thiamine Pyrophosphate (TPP), the Pyruvate Dehydrogenase Complex (PDC) and alpha-Ketoglutarate Dehydrogenase cannot oxidize pyruvate into acetyl-CoA.',
            'ধাপ ২: গ্লুকোজ স্যালাইনের মারাত্মক বিপদ অনুধাবন: থায়ামিন দেওয়ার আগে রোগীকে গ্লুকোজ স্যালাইন দিলে মস্তিষ্কে গ্লুকোজের বন্যা বয়ে যায় এবং গ্লাইকোলাইসিস প্রচুর পাইরুভেট তৈরি করে। কিন্তু TPP কো-এনজাইম না থাকায় পাইরুভেট ডিহাইড্রোজিনেজ এনজাইম অচল থাকে এবং পাইরুভেটকে শক্তিতে রূপান্তর করতে পারে না।'
          ),
          l(
            'Step 3: Trace the resulting metabolic catastrophe: Blocked pyruvate is shunted to Lactate Dehydrogenase, precipitating acute fulminant lactic acidosis, cerebral ATP depletion, excitotoxic neuronal death, and irreversible mammillary body / medial thalamic infarction (Korsakoff Psychosis or coma).',
            'ধাপ ৩: আণবিক বিপর্যয় বিশ্লেষণ: আটকে থাকা পাইরুভেট বাধ্য হয়ে ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়, ফলে মস্তিষ্কে তীব্র ল্যাকটিক অ্যাসিডোসিস ঘটে, শক্তি উৎপাদন শূন্যে নেমে আসে এবং মস্তিষ্কের স্মৃতি কেন্দ্র পুড়ে ধ্বংস হয়ে স্থায়ী উন্মাদনা (কোরসাকফ সিন্ড্রোম) বা মৃত্যু ঘটে।'
          ),
          l(
            'Step 4: Implement the High-Dose Parenteral Protocol (Pabrinex Protocol): Immediately administer Thiamine Hydrochloride 500 mg IV in 100 mL normal saline infused over 30 minutes, repeated every 8 hours for 3 days, BEFORE any intravenous carbohydrate is infused. Supplement concurrent intravenous magnesium sulfate (1–2 g), as magnesium is the obligate divalent cation cofactor for thiamine pyrophosphokinase and all TPP-dependent enzymes.',
            'ধাপ ৪: সঠিক চিকিৎসা প্রোটোকল প্রয়োগ: কোনো গ্লুকোজ স্যালাইন দেওয়ার আগেই রোগীকে শিরায় ৫০০ মিলিগ্রাম থায়ামিন ইনজেকশন ৩০ মিনিট ধরে স্যালাইনের সাথে প্রয়োগ করুন এবং সাথে ম্যাগনেসিয়াম দিন; কারণ ম্যাগনেসিয়াম ছাড়া থায়ামিন শরীরে সক্রিয় হতে পারে না।'
          ),
        ],
        conclusion: l(
          'Administering high-dose intravenous thiamine prior to glucose re-energized mitochondrial PDC complexes, halting acute lactic acidosis, reversing bilateral abducens nerve palsies within 12 hours, and preventing permanent Korsakoff amnesic neurodegeneration.',
          'গ্লুকোজের আগে উচ্চমাত্রার থায়ামিন ইনজেকশন দেওয়ার ফলে মাইটোকন্ড্রিয়াল এনজাইমগুলো পুনরায় সচল হয়েছে, মস্তিষ্কে ল্যাকটিক অ্যাসিডের বিষক্রিয়া বন্ধ হয়েছে এবং মাত্র ১২ ঘণ্টার মধ্যে চোখের পক্ষাঘাত ও বিভ্রান্তি দূর হয়ে রোগী চিরতরে পঙ্গু হওয়া থেকে রক্ষা পেয়েছে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does administering high-dose synthetic folic acid reverse the macrocytic anemia of Vitamin B12 deficiency while allowing catastrophic, irreversible neurological damage to advance?',
          'ভিটামিন বি১২-এর ঘাটতিতে রোগীকে উচ্চমাত্রার ফলিক অ্যাসিড দিলে রক্তশূন্যতা ভালো হয়ে যায়, কিন্তু স্নায়ুর মারাত্মক ধ্বংসাত্মক ক্ষতি দ্রুত বেড়ে যায় কেন?'
        ),
        answer: l(
          'Vitamin B12 deficiency traps cellular folate as 5-methyl-THF because Methionine Synthase is blocked. High-dose synthetic folic acid (pteroylglutamic acid) is reduced via Dihydrofolate Reductase directly to THF, bypassing the block and replenishing the 5,10-methylene-THF needed for thymidylate synthesis, thereby correcting megaloblastic bone marrow arrest. However, folic acid does not restore adenosylcobalamin for methylmalonyl-CoA mutase or methylcobalamin for myelin basic protein methylation. Deprived of cobalamin, sensory and motor axonal myelin sheaths in the dorsal and lateral spinal cord columns undergo irreversible degeneration (Subacute Combined Degeneration), producing permanent spastic paralysis.',
          'ভিটামিন বি১২ না থাকলে ফোলেট মিথাইল-ট্র্যাপে আটকে গিয়ে রক্তকণিকা তৈরি বন্ধ করে দেয়। রোগীকে বাইরে থেকে কৃত্রিম ফলিক অ্যাসিড দিলে তা এই ফাঁদকে বাইপাস করে সরাসরি লোহিত রক্তকণিকা তৈরি চালু করে দেয়, ফলে আপাতদৃষ্টিতে রক্তশূন্যতা ভালো মনে হয়। কিন্তু স্নায়ুর সুরক্ষার জন্য যে বি১২ প্রয়োজন, ফলিক অ্যাসিড তা পূরণ করতে পারে না। ফলে চিকিৎসকের অজান্তেই সুষুম্নাকাণ্ডের স্নায়ুর আবরণী (মায়েলিন) খসে পড়ে এবং রোগী চিরদিনের জন্য স্থায়ী প্যারালাইসিসে পঙ্গু হয়ে যায়।'
        ),
      },
      {
        question: l(
          'Why is magnesium deficiency considered a clinically silent cause of refractory, treatment-resistant thiamine deficiency?',
          'ম্যাগনেসিয়ামের ঘাটতি থাকলে রোগীর শরীরে থায়ামিন দিলেও তা কাজ করে না এবং থায়ামিনের ঘাটতি কেন নিরাময় হতে চায় না?'
        ),
        answer: l(
          'Free unphosphorylated thiamine is biologically inert. Intracellular activation requires the enzyme Thiamine Pyrophosphokinase, which transfers a pyrophosphate group from ATP to thiamine to generate active Thiamine Pyrophosphate (TPP). This kinase strictly requires divalent magnesium (Mg2+) as an obligate cofactor. Furthermore, all TPP-dependent enzymes (pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, transketolase) require Mg2+ to coordinate the negative pyrophosphate oxygens into their catalytic pockets. In hypomagnesemic patients, administered thiamine cannot be phosphorylated or docked into apoenzymes, causing persistent clinical deficiency until magnesium is repleted.',
          'খাদ্য বা ইনজেকশনের থায়ামিন নিজে সরাসরি নিষ্ক্রিয় থাকে। কোষের ভেতর এটিকে সক্রিয় TPP-তে রূপান্তরকারী এনজাইমটি সম্পূর্ণভাবে ম্যাগনেসিয়ামের ওপর নির্ভরশীল। এছাড়া থায়ামিন নির্ভর সমস্ত এনজাইমকে কাজ করতে হলেও ম্যাগনেসিয়াম আয়নের খাঁচা প্রয়োজন হয়। শরীরে ম্যাগনেসিয়াম কম থাকলে আপনি যত থায়ামিনই দিন না কেন, তা কোষে সক্রিয় হতে পারবে না; তাই ম্যাগনেসিয়াম পূরণ না করা পর্যন্ত থায়ামিনের কোনো উপকার পাওয়া যায় না।'
        ),
      },
      {
        question: l(
          'How does the erythrocyte transketolase activation test provide a definitive functional assessment of thiamine status, compared to simply measuring total plasma thiamine concentration?',
          'রক্তের সাধারণ থায়ামিন মাপার চেয়ে লোহিত রক্তকণিকার ট্রান্সকিটোলেজ সক্রিয়তা পরীক্ষা (ETKA) কেন থায়ামিন ঘাটতি নির্ণয়ের জন্য শতগুণ বেশি নির্ভরযোগ্য?'
        ),
        answer: l(
          'Total plasma thiamine reflects recent acute dietary intake and fluctuates wildly with meals, while representing less than 10% of total body thiamine reserves. In contrast, erythrocyte transketolase is an intracellular, TPP-dependent pentose phosphate pathway enzyme. In the ETKA assay, basal transketolase activity is measured, followed by the addition of exogenous TPP in vitro. The percentage increase in enzyme activity (the "TPP effect") directly quantifies apoenzyme saturation: an activity surge >25% indicates that endogenous cellular TPP stores were profoundly depleted, confirming functional intracellular thiamine deficiency regardless of circulating serum levels.',
          'রক্তরসের থায়ামিন মাত্র কয়েক ঘণ্টার খাদ্যাভ্যাসের ওপর ভিত্তি করে দ্রুত ওঠানামা করে এবং এটি দেহের মোট সঞ্চয়ের মাত্র ১০% প্রকাশ করে। পক্ষান্তরে লোহিত রক্তকণিকার ট্রান্সকিটোলেজ এনজাইমের সাথে বাইরে থেকে TPP মিশিয়ে দেখা হয় এনজাইমের গতি কতখানি বৃদ্ধি পায়। যদি এনজাইমের গতি ২৫%-এর বেশি বেড়ে যায়, তবে নিশ্চিত প্রমাণিত হয় যে কোষের ভেতরে কোনো সক্রিয় ভিটামিন ছিল না এবং এনজাইমগুলো ক্ষুধার্ত অবস্থায় ছিল—যা কোষীয় ঘাটতির সবচেয়ে অকাট্য বৈজ্ঞানিক প্রমাণ।'
        ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'b-complex-mitochondrial-network',
    title: l(
      'Interactive B-Complex Mitochondrial & One-Carbon Bioenergetics Hub',
      'বি-কমপ্লেক্স মাইটোকন্ড্রিয়াল ও এক-কার্বন জৈবশক্তি নেটওয়ার্ক'
    ),
    description: l(
      'Examine the coordinated roles of the eight B-complex coenzymes across the Pyruvate Dehydrogenase Complex, the Krebs TCA cycle, electron transport chain, and the Folate-Cobalamin methionine cycle.',
      'পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স, ক্রেবস টিসিএ চক্র, ইলেকট্রন ট্রান্সপোর্ট চেইন এবং ফোলেট-কোবালামিন মিথিওনিন চক্রে আটটি বি-কমপ্লেক্স কো-এনজাইমের সমন্বিত ভূমিকা পর্যবেক্ষণ করুন।'
    ),
    disclaimer: l(
      'Biochemical schematic of normal human mitochondrial bioenergetics and cytosolic one-carbon transmethylation.',
      'স্বাভাবিক মানবদেহের মাইটোকন্ড্রিয়াল শক্তি উৎপাদন এবং সাইটোসোলিক মিথাইলেশন প্রক্রিয়ার আণবিক রূপরেখা।'
    ),
    svgType: 'pathway-map',
    items: [
      {
        id: 'node-pdc-tpp',
        label: l('Thiamine (B1) - TPP (E1: Pyruvate Decarboxylase)', 'থায়ামিন (B1) - TPP (E1: পাইরুভেট ডিকার্বক্সিলেজ)'),
        description: l(
          'Thiazolium carbanion of TPP attacks pyruvate to form hydroxyethyl-TPP, decarboxylating the alpha-keto acid and transferring the acetyl group to oxidized lipoamide on the swinging arm of E2 [1].',
          'TPP এর থায়াজোলিয়াম রিং পাইরুভেট আক্রমণ করে কার্বন ডাই-অক্সাইড দূর করে এবং অ্যাসিটাইল গ্রুপকে লাইপোয়েটের ঝুলন্ত বাহুর মাধ্যমে E2 এনজাইমে স্থানান্তরিত করে [১]।'
        ),
        details: l(
          'Thiamine deficiency paralyzes PDC flux, blocking mitochondrial acetyl-CoA entry and forcing pyruvate into lactate, causing severe lactic acidosis and ATP collapse [1, 2].',
          'থায়ামিনের ঘাটতি হলে পাইরুভেট জারণ বন্ধ হয়ে যায় এবং বিপুল পরিমাণ ল্যাকটিক অ্যাসিড তৈরি হয়ে কোষের শক্তি উৎপাদন সম্পূর্ণ ভেঙে পড়ে [১, ২]।'
        ),
        color: '#3b82f6',
        svgCoords: { x: 25, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-tca-nad-fad',
        label: l('Krebs Cycle Redox: NAD+ (B3) & FAD (B2) Hydride Shuttles', 'ক্রেবস চক্রের জারণ-বিজারণ: NAD+ (B3) ও FAD (B2) ইলেকট্রন বাহক'),
        description: l(
          'Isocitrate, alpha-ketoglutarate, and malate dehydrogenases reduce NAD+ to NADH, while succinate dehydrogenase reduces enzyme-bound FAD to FADH2 [1, 5].',
          'টিসিএ চক্রের তিনটি প্রধান এনজাইম NAD+ কে বিজারিত করে NADH তৈরি করে, আর সাকসিনেট ডিহাইড্রোজিনেজ FAD কে FADH2 তে রূপান্তরিত করে [১, ৫]।'
        ),
        details: l(
          'NADH feeds electrons into Complex I (NADH dehydrogenase) while FADH2 donates to Complex II, driving the proton gradient that powers mitochondrial ATP synthase [1, 5].',
          'NADH কমপ্লেক্স-১ এবং FADH2 কমপ্লেক্স-২ এ ইলেকট্রন ঢেলে দিয়ে প্রোটন পাম্প সচল রাখে, যা মাইটোকন্ড্রিয়ায় এটিপি তৈরির মূল চালিকাশক্তি [১, ৫]।'
        ),
        color: '#10b981',
        svgCoords: { x: 355, y: 35, width: 310, height: 48 },
      },
      {
        id: 'node-coa-pantothenate',
        label: l('Coenzyme A (B5): High-Energy Thioester Acyl Activation', 'কো-এনজাইম এ (B5): উচ্চ-শক্তিসম্পন্ন থায়োএস্টার বন্ধন'),
        description: l(
          'Pantothenic acid forms the core of Coenzyme A (CoA-SH) with a terminal reactive thiol group (-SH) that bonds acyl groups via high-energy thioester linkages [1].',
          'প্যান্টোথেনিক অ্যাসিড কো-এনজাইম এ-এর মূল কাঠামো তৈরি করে যার প্রান্তীয় সালফার গ্রুপ উচ্চ-শক্তির থায়োএস্টার বন্ধনের মাধ্যমে অ্যাসিটাইল গ্রুপ ধারণ করে [১]।'
        ),
        details: l(
          'Acetyl-CoA serves as the universal two-carbon convergent fuel for the TCA cycle, fatty acid beta-oxidation, cholesterol synthesis, and histone acetylation [1].',
          'অ্যাসিটাইল-CoA হলো সমস্ত খাদ্য উপাদানের শক্তি উৎপাদনের সাধারণ মিলনস্থল যা ক্রেবস চক্র, চর্বি পোড়ানো এবং কোলেস্টেরল তৈরির মূল ভিত্তি [১]।'
        ),
        color: '#f59e0b',
        svgCoords: { x: 25, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-plp-transamination',
        label: l('PLP (B6): Schiff Base Catalysis & Transamination', 'PLP (B6): শিফ-বেস প্রভাবন ও অ্যামিনো অ্যাসিড রূপান্তর'),
        description: l(
          'Pyridoxal-5\'-Phosphate (PLP) forms a covalent internal aldimine with active-site lysine, acting as an electrophilic electron sink to transfer amino groups [1].',
          'পাইরিডক্সাল-৫\'-ফসফেট (PLP) এনজাইমের সাথে শিফ-বেস বন্ধন তৈরি করে একটি শক্তিশালী ইলেকট্রন ফাঁদ হিসেবে কাজ করে এবং অ্যামিনো গ্রুপ স্থানান্তর করায় [১]।'
        ),
        details: l(
          'Essential for AST, ALT, glutamate decarboxylase (producing inhibitory GABA), and cystathionine beta-synthase in the transsulfuration pathway [1, 2].',
          'এটি যকৃতের এনজাইম, মস্তিষ্কের শান্তিদায়ক নিউরোট্রান্সমিটার GABA এবং হোমোসিস্টিন ধ্বংসকারী এনজাইমের জন্য অপরিহার্য [১, ২]।'
        ),
        color: '#8b5cf6',
        svgCoords: { x: 355, y: 105, width: 310, height: 48 },
      },
      {
        id: 'node-folate-b12-trap',
        label: l('Folate (B9) & B12: Methionine Synthase & Methyl-Trap Exit', 'ফোলেট (B9) ও বি১২: মিথিওনিন সিন্থেজ ও মিথাইল-ট্র্যাপ নিষ্ক্রমণ'),
        description: l(
          'Cobalamin accepts a methyl group from 5-methyl-THF to form methylcobalamin, transferring it to homocysteine to generate methionine and free THF [3, 4].',
          'কোবালামিন ৫-মিথাইল-THF থেকে মিথাইল গ্রুপ গ্রহণ করে মিথাইলকোবালামিনে পরিণত হয় এবং তা হোমোসিস্টিনকে দিয়ে মিথিওনিন ও মুক্ত THF তৈরি করে [৩, ৪]।'
        ),
        details: l(
          'B12 deficiency locks folate as 5-methyl-THF, halting purine and dTMP synthesis, precipitating severe megaloblastic anemia and subacute combined cord degeneration [3, 4, 6].',
          'বি১২-এর ঘাটতি হলে সমস্ত ফোলেট আটকা পড়ে ডিএনএ তৈরি বন্ধ হয়ে যায়, ফলে মারাত্মক রক্তশূন্যতা ও সুষুম্নাকাণ্ডের প্যারালাইসিস ঘটে [৩, ৪, ৬]।'
        ),
        color: '#dc2626',
        svgCoords: { x: 190, y: 175, width: 310, height: 48 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Eight B-Complex Vitamins: Spark Plugs of Human Metabolism', 'আটটি বি-কমপ্লেক্স ভিটামিন: মানবদেহের বিপাকীয় স্পার্ক প্লাগ'),
          paragraphs: [
            l(
              'Unlike fat-soluble vitamins that dissolve in oily lipids and can be stored in the liver or body fat for months, the eight B-complex vitamins are completely water-soluble [1]. This hydrophilic family consists of Thiamine (B1), Riboflavin (B2), Niacin (B3), Pantothenic Acid (B5), Pyridoxine (B6), Biotin (B7), Folate (B9), and Cobalamin (B12) [1]. Because they dissolve effortlessly in biological fluids, our kidneys rapidly filter any excess into urine, meaning the human body has virtually zero capacity to store them long-term (with the sole exception of Vitamin B12, which the liver sequesters for several years) [1, 4].',
              'চর্বি-দ্রবণীয় ভিটামিনগুলোর মতো মাসের পর মাস শরীরে জমা না থেকে, আটটি বি-কমপ্লেক্স ভিটামিন সম্পূর্ণভাবে পানিতে দ্রবণীয় [১]। এই পরিবারে রয়েছে থায়ামিন (B1), রিবোফ্লাভিন (B2), নিয়াসিন (B3), প্যান্টোথেনিক অ্যাসিড (B5), পাইরিডক্সিন (B6), বায়োটিন (B7), ফোলেট (B9) এবং কোবালামিন (B12) [১]। পানিতে সহজেই গলে যায় বলে আমাদের কিডনি অতিরিক্ত ভিটামিনকে প্রস্রাবের সাথে দ্রুত বের করে দেয়; তাই মানবদেহে এগুলো দীর্ঘকাল সঞ্চিত থাকার প্রায় কোনো সুযোগ নেই (একমাত্র ব্যতিক্রম ভিটামিন বি১২, যা যকৃতে কয়েক বছর জমা থাকতে পারে) [১, ৪]।'
            ),
            l(
              'Because water-soluble vitamins are continuously flushed from our systems, human beings must consume them regularly through daily diet [1]. To understand their primary physiological role, picture an automobile engine: carbohydrates, fats, and proteins are the gasoline that fuels the car, but B-vitamins are the spark plugs that ignite the fuel [1, 2]. You could have a full tank of gasoline, but without spark plugs, the engine will never turn over. In human biology, B-vitamins do not contain any calories themselves, but without them, our cells cannot extract a single calorie of energy from the food we eat [1, 2].',
              'শরীর থেকে অনবরত বের হয়ে যায় বলে প্রতিদিনের সুষম খাদ্যের মাধ্যমে এই ভিটামিনগুলো নিয়মিত গ্রহণ করা অপরিহার্য [১]। এদের কাজ বোঝার জন্য একটি গাড়ির ইঞ্জিনের কথা ভাবুন: শর্করা, চর্বি ও প্রোটিন হলো গাড়ির জ্বালানি তেল, আর বি-ভিটামিনগুলো হলো সেই স্পার্ক প্লাগ যা জ্বালানিতে আগুন ধরিয়ে শক্তি তৈরি করে [১, ২]। ট্যাঙ্কিভর্তি তেল থাকলেও স্পার্ক প্লাগ না থাকলে গাড়ি যেমন এক ইঞ্চিও নড়বে না, তেমনি খাবারে যতই পুষ্টি থাকুক না কেন, বি-ভিটামিন ছাড়া আমাদের কোষ খাদ্য থেকে এক ফোঁটাও শক্তি বের করতে পারে না [১, ২]।'
            ),
            l(
              'Inside your cells, B-vitamins function primarily as coenzymes [1]. An enzyme is a specialized protein machine that builds or breaks biological molecules. However, many metabolic enzymes are born "incomplete" or dormant (called apoenzymes) and cannot perform work on their own [1, 2]. A B-vitamin acts as the indispensable chemical ignition key: when the active coenzyme docks into the enzyme, it snaps the machinery into its working shape (forming a holoenzyme), instantly unleashing chemical reactions that generate ATP, produce neurotransmitters, and synthesize DNA [1, 2].',
              'কোষের ভেতরে বি-ভিটামিনগুলো মূলত "কো-এনজাইম" হিসেবে কাজ করে [১]। এনজাইম হলো কোষের জটিল কাজের কর্মী বা কারিগর। কিন্তু অনেক এনজাইম একা একা কোনো কাজ করতে পারে না, এরা নিষ্ক্রিয় অবস্থায় পড়ে থাকে [১, ২]। বি-ভিটামিন হলো এদের জাদুর চাবিকাঠি: এই ভিটামিনগুলো এসে এনজাইমের খাঁজে যুক্ত হওয়ামাত্রই এনজাইমটি পূর্ণাঙ্গ শক্তিতে জেগে ওঠে এবং দ্রুত খাদ্য থেকে এটিপি শক্তি উৎপাদন, মস্তিষ্কের স্নায়ু সংকেত তৈরি এবং নতুন ডিএনএ গঠনের কাজ শুরু করে [১, ২]।'
            ),
            l(
              'Because every tissue in the human body relies on continuous ATP generation, a deficiency in any single B-vitamin rapidly cripples high-energy organs [1, 2]. The brain, heart, and central nervous system—which consume massive amounts of energy every second—are the very first tissues to show clinical dysfunction when B-vitamins run low [2]. Symptoms like mental fog, fatigue, muscle weakness, depression, and tingling in the fingers and toes are the body’s warning sirens that mitochondrial coenzymes are depleted [1, 2].',
              'যেহেতু শরীরের প্রতিটি অঙ্গ বেঁচে থাকার জন্য নিরবচ্ছিন্ন শক্তির ওপর নির্ভরশীল, তাই যেকোনো একটি বি-ভিটামিনের সামান্য ঘাটতিও শক্তি-নির্ভর অঙ্গগুলোকে পঙ্গু করে দেয় [১, ২]। আমাদের মস্তিষ্ক, হৃদপিণ্ড এবং স্নায়ুতন্ত্র প্রতি মুহূর্তে বিপুল শক্তি খরচ করে; তাই বি-ভিটামিন কমলে এদের ওপরই প্রথম আঘাত আসে [২]। মানসিক অবসাদ, স্মৃতিভ্রম, চরম ক্লান্তি, পেশির দুর্বলতা এবং হাত-পায়ে ঝিঁঝিঁ ধরার মতো লক্ষণগুলো আসলে মাইটোকন্ড্রিয়ায় কো-এনজাইমের হাহাকারের স্পষ্ট সংকেত [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Coenzyme Mechanism: Apoenzymes, Holoenzymes & Active Keys', 'কো-এনজাইমের কার্যপদ্ধতি: অ্যাপোএনজাইম, হোলোএনজাইম ও আণবিক চাবি'),
          paragraphs: [
            l(
              'To appreciate why the B-vitamins are biochemically indispensable, we must examine the concept of enzyme catalysis [1]. When dietary thiamine, riboflavin, or niacin is absorbed from the small intestine, it enters the bloodstream in an unphosphorylated or free form. However, free vitamins cannot participate in enzymatic work directly; they must first enter cells and undergo intracellular phosphorylation to become functional coenzymes [1, 2].',
              'বি-ভিটামিনগুলো কেন এত অপরিহার্য তা বুঝতে হলে এনজাইমের রাসায়নিক কার্যপদ্ধতি লক্ষ্য করতে হবে [১]। খাদ্য থেকে শোষিত হওয়ার সময় থায়ামিন, রিবোফ্লাভিন বা নিয়াসিন মুক্ত অবস্থায় রক্তে ঘোরে। কিন্তু এই সাধারণ রূপ সরাসরি এনজাইমের সাথে কাজ করতে পারে না; কোষে ঢোকার পর এদের সাথে ফসফেট যুক্ত হয়ে এরা শক্তিশালী "কো-এনজাইমে" রূপান্তরিত হয় [১, ২]।'
            ),
            l(
              'For instance, free Thiamine (Vitamin B1) is biologically inert until the cellular enzyme thiamine pyrophosphokinase attaches two phosphate groups from ATP, creating Thiamine Pyrophosphate (TPP) [1]. Similarly, Riboflavin (Vitamin B2) is enzymatically phosphorylated into Flavin Mononucleotide (FMN) and Flavin Adenine Dinucleotide (FAD), while Niacin (Vitamin B3) is assembled into Nicotinamide Adenine Dinucleotide (NAD+) and its phosphorylated cousin NADP+ [1, 5].',
              'উদাহরণস্বরূপ, সাধারণ থায়ামিন (B1) কোনো কাজ করতে পারে না যতক্ষণ না কোষের বিশেষ এনজাইম এর সাথে দুটি ফসফেট যুক্ত করে থায়ামিন পাইরোফসফেট (TPP) তৈরি করে [১]। একইভাবে রিবোফ্লাভিন (B2) রূপান্তরিত হয় FMN ও FAD-এ, এবং নিয়াসিন (B3) রূপ নেয় NAD+ ও NADP+-এ [১, ৫]।'
            ),
            l(
              'Once synthesized, these coenzymes possess extraordinary electronic structures: they act as electron sponges, chemical handles, and molecular transfer shuttles [1]. In oxidation-reduction reactions, NAD+ and FAD accept high-energy electrons from carbohydrate and fat breakdown, ferrying them directly to the mitochondrial respiratory chain [1, 5]. Meanwhile, Coenzyme A (derived from pantothenic acid / B5) acts as an ultra-reactive chemical clamp, grabbing two-carbon acetate molecules to form acetyl-CoA, the universal gateway substrate for mitochondrial combustion [1].',
              'একবার তৈরি হয়ে গেলে এই কো-এনজাইমগুলোর চমৎকার রাসায়নিক রূপান্তর ঘটে: এরা ইলেকট্রন স্পঞ্জের মতো কাজ করে [১]। খাদ্য ভাঙার সময় বের হওয়া উচ্চ-শক্তির ইলেকট্রনগুলোকে NAD+ ও FAD কোলের মধ্যে তুলে নিয়ে সরাসরি মাইটোকন্ড্রিয়ার শ্বাস-প্রশ্বাস চেইনে পৌঁছে দেয় [১, ৫]। অন্যদিকে প্যান্টোথেনিক অ্যাসিড (B5) থেকে তৈরি কো-এনজাইম এ (CoA) একটি আণবিক সাঁড়াশির মতো কাজ করে অ্যাসিটাইল গ্রুপকে আঁকড়ে ধরে মাইটোকন্ড্রিয়ার চুল্লিতে ফেলে দেয় [১]।'
            ),
            l(
              'Pyridoxal-5\'-phosphate (PLP, from Vitamin B6) forms a covalent chemical bridge with amino acids, allowing transaminase enzymes to shuffle nitrogen groups to synthesize non-essential amino acids or dismantle protein for fuel [1]. Biotin (B7) acts like a molecular crane, swinging bicarbonate carbon dioxide molecules onto pyruvate and fatty acid precursors [1]. Through these exquisite atomic mechanisms, B-vitamin coenzymes coordinate thousands of simultaneous chemical conversions within every cubic micrometer of human cytoplasm.',
              'ভিটামিন বি৬ থেকে তৈরি PLP প্রোটিনের অ্যামিনো অ্যাসিড ভাঙা-গড়ার কাজ নিয়ন্ত্রণ করে, আর বায়োটিন (B7) একটি ক্রেনের মতো কার্বন ডাই-অক্সাইড অণুকে এক স্থান থেকে অন্য স্থানে বসিয়ে দেয় [১]। এই চমৎকার আণবিক কৌশলের মাধ্যমেই বি-ভিটামিনগুলো মানবকোষের প্রতি মাইক্রোমিটারে হাজার হাজার জটিল রাসায়নিক বিক্রিয়াকে নিখুঁতভাবে পরিচালনা করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('How B-Vitamins Extract Energy: Pyruvate Dehydrogenase & The TCA Engine', 'বি-ভিটামিন কীভাবে শক্তি তৈরি করে: পাইরুভেট ডিহাইড্রোজিনেজ ও টিসিএ ইঞ্জিন'),
          paragraphs: [
            l(
              'The extraction of usable energy from dietary glucose represents a masterwork of coordinated B-vitamin biochemistry [1]. In the cytoplasm, glucose is cleaved through glycolysis into two molecules of pyruvate. To enter the powerhouse of the cell—the mitochondrion—and generate massive amounts of ATP, pyruvate must undergo oxidative decarboxylation to form acetyl-CoA [1, 5].',
              'খাদ্যের শর্করা বা গ্লুকোজ থেকে ব্যবহারযোগ্য শক্তি বের করার প্রক্রিয়াটি বি-ভিটামিনের এক অনন্য রাসায়নিক মেলবন্ধন [১]। কোষের সাইটোপ্লাজমে গ্লুকোজ ভেঙে প্রথমে দুই অণু পাইরুভেটে পরিণত হয়। কিন্তু এই পাইরুভেটকে কোষের শক্তিঘর মাইটোকন্ড্রিয়ায় ঢুকতে হলে অবশ্যই কার্বন ডাই-অক্সাইড ছেড়ে দিয়ে "অ্যাসিটাইল-CoA" তে রূপান্তরিত হতে হয় [১, ৫]।'
            ),
            l(
              'This critical gatekeeper reaction is performed by the Pyruvate Dehydrogenase Complex (PDC), a colossal multienzyme structure situated on the inner mitochondrial membrane [1, 5]. The PDC requires five distinct coenzymes to execute its catalytic cycle, four of which are direct derivatives of B-vitamins: Thiamine Pyrophosphate (TPP from B1), Flavin Adenine Dinucleotide (FAD from B2), Nicotinamide Adenine Dinucleotide (NAD+ from B3), and Coenzyme A (CoA-SH from B5), operating alongside lipoic acid [1, 5].',
              'এই গুরুত্বপূর্ণ গেটকিপারের কাজটি করে পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (PDC), যা মাইটোকন্ড্রিয়ার ভেতরের পর্দায় অবস্থিত এক বিশাল এনজাইম কারখানা [১, ৫]। এই একটিমাত্র বিক্রিয়া সম্পন্ন করতেই পাঁচটি আলাদা কো-এনজাইমের প্রয়োজন হয়, যার চারটিই আসে বি-ভিটামিন থেকে: থায়ামিন TPP (B1), ফ্লাভিন FAD (B2), নিকোটিনামাইড NAD+ (B3), এবং কো-এনজাইম এ (B5), সাথে থাকে লাইপোয়িক অ্যাসিড [১, ৫]।'
            ),
            l(
              'The reaction proceeds like an atomic assembly line: TPP first cleaves carbon dioxide off pyruvate; the remaining two-carbon fragment is passed to a swinging lipoamide arm, which transfers the acetyl group to Coenzyme A to yield acetyl-CoA [1, 5]. Finally, FAD and NAD+ strip away the spent electrons to regenerate the enzyme for the next cycle. If a patient is severely deficient in Thiamine (B1), this entire assembly line grinds to a dead halt; pyruvate cannot enter the mitochondrion and is shunted into toxic lactic acid, starving the brain and heart of ATP [1, 2].',
              'এই কারখানায় কাজ হয় একটি পরিবাহক বেল্টের মতো: প্রথমে TPP পাইরুভেট থেকে কার্বন ডাই-অক্সাইড কেটে আলাদা করে; এরপর সেই টুকরোটি লাইপোয়েটের ঝুলন্ত বাহু দিয়ে কো-এনজাইম এ-তে যুক্ত হয়ে অ্যাসিটাইল-CoA তৈরি করে [১, ৫]। শেষে FAD এবং NAD+ ব্যবহৃত ইলেকট্রন সরিয়ে কারখানাটিকে পরবর্তী কাজের জন্য প্রস্তুত করে। শরীরে যদি থায়ামিনের (B1) তীব্র অভাব থাকে, তবে পুরো প্রক্রিয়াটি মুহূর্তের মধ্যে বন্ধ হয়ে যায়; পাইরুভেট মাইটোকন্ড্রিয়ায় ঢুকতে না পেরে বিপজ্জনক ল্যাকটিক অ্যাসিডে রূপ নেয় এবং মস্তিষ্ক ও হৃদপিণ্ড শক্তির অভাবে অকেজো হয়ে পড়ে [১, ২]।'
            ),
            l(
              'Once acetyl-CoA enters the Krebs TCA cycle, B-vitamins continue their ceaseless labor [1]. Three separate dehydrogenase enzymes use NAD+ (B3) and one uses FAD (B2) to harvest high-energy electrons from the breakdown of food molecules [1, 5]. These harvested electrons are delivered straight into the mitochondrial Electron Transport Chain, where oxygen is consumed to generate the vast majority of human cellular ATP [1, 5]. Without adequate B-vitamins, the metabolic furnace goes cold.',
              'অ্যাসিটাইল-CoA যখন ক্রেবস চক্রে প্রবেশ করে, তখনো বি-ভিটামিনের কাজ চলতে থাকে [১]। তিনটি ভিন্ন এনজাইম NAD+ (B3) ব্যবহার করে এবং একটি FAD (B2) ব্যবহার করে খাদ্য থেকে উচ্চ-শক্তির ইলেকট্রন সংগ্রহ করে [১, ৫]। এই ইলেকট্রনগুলো সরাসরি মাইটোকন্ড্রিয়ার ইলেকট্রন ট্রান্সপোর্ট চেইনে যায়, যেখানে অক্সিজেনের উপস্থিতিতে মানবদেহের সিংহভাগ এটিপি তৈরি হয় [১, ৫]। পর্যাপ্ত বি-ভিটামিন না থাকলে কোষের এই শক্তির চুল্লি নিভে যায়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Classical Deficiency Syndromes: Beriberi, Pellagra & Anemia', 'চিরায়ত অভাবজনিত রোগ: বেরিবেরি, পেলেগ্রা ও রক্তশূন্যতা'),
          paragraphs: [
            l(
              'The history of clinical nutrition was written through the discovery of devastating human diseases caused by isolated B-vitamin deficiencies [1, 2]. When polished white rice was introduced in 19th-century Asia—stripping the thiamine-rich outer bran husk from whole grains—millions developed Beriberi [1]. Wet Beriberi attacks the cardiovascular system, causing high-output heart failure, dilated peripheral blood vessels, and severe lower-extremity fluid accumulation (edema). Dry Beriberi attacks the peripheral nervous system, causing bilateral burning pain, symmetrical sensory loss, foot drop, and severe muscle wasting [1, 2].',
              'ক্লিনিক্যাল পুষ্টিবিজ্ঞানের ইতিহাস রচিত হয়েছে নির্দিষ্ট বি-ভিটামিনের অভাবে তৈরি হওয়া মারাত্মক রোগগুলোর আবিষ্কারের মাধ্যমে [১, ২]। ১৯ শতকের এশিয়ায় যখন লাল চালের ওপরের পুষ্টিকর আবরণ ছেঁটে সাদা পালিশ চাল খাওয়া শুরু হয়, তখন লক্ষ লক্ষ মানুষ "বেরিবেরি" রোগে আক্রান্ত হন [১]। ওয়েট বেরিবেরি হৃদপিণ্ডকে আক্রমণ করে হার্ট ফেইলিউর ও সারা শরীরে তীব্র পানি জমা তৈরি করে; আর ড্রাই বেরিবেরি স্নায়ুতন্ত্রকে আক্রমণ করে হাত-পায়ে তীব্র জ্বালাপোড়া, অনুভূতি হারানো এবং পক্ষাঘাত ডেকে আনে [১, ২]।'
            ),
            l(
              'In populations consuming unfortified corn/maize diets without alkaline nixtamalization, Niacin (B3) deficiency causes Pellagra [1]. Pellagra is universally memorized by the classic "Four Ds": Dermatitis (a symmetrical, painful, photosensitive rash appearing in sun-exposed areas like the hands and Casal’s necklace on the neck), Diarrhea (due to mucosal epithelial sloughing), Dementia (progressive memory loss, paranoia, and encephalopathy), and Death if left untreated [1, 2].',
              'যেসব জনগোষ্ঠীতে অপরিশোধিত ভুট্টার ওপর নির্ভর করে খাদ্যাভ্যাস গড়ে উঠেছিল, সেখানে নিয়াসিনের (B3) অভাবে "পেলেগ্রা" মহামারি আকারে ছড়িয়ে পড়েছিল [১]। পেলেগ্রা রোগের চারটি ভয়াবহ লক্ষণ রয়েছে যা ইংরেজিতে "Four Ds" নামে পরিচিত: ডার্মাটাইটিস (রোদে উন্মুক্ত অংশে তীব্র চামড়ার প্রদাহ ও ঘা), ডায়রিয়া (অন্ত্রের দেয়াল ক্ষয় হওয়া), ডিমেনশিয়া (স্মৃতিভ্রম, মানসিক বিকার ও প্রলাপ) এবং চিকিৎসা না পেলে অবধারিত ডেথ বা মৃত্যু [১, ২]।'
            ),
            l(
              'Riboflavin (B2) deficiency causes Ariboflavinosis, characterized by angular stomatitis (painful cracking at the corners of the mouth), cheilosis (swollen, cracked lips), glossitis (a painful, smooth "magenta tongue"), and corneal vascularization [1]. Pyridoxine (B6) deficiency presents with microcytic sideroblastic anemia (due to failure of heme synthesis via ALAS), peripheral neuropathy, and severe epileptic seizures in infants due to failure of GABA neurotransmitter synthesis [1, 2].',
              'রিবোফ্লাভিনের (B2) ঘাটতিতে মুখে ও ঠোঁটের কোণায় যন্ত্রণাদায়ক ঘা (অ্যাঙ্গুলার স্টোমাটাইটিস), জিহ্বা ফুলে লাল বা বেগুনি রঙ ধারণ করা (ম্যাজেন্টা টাং) এবং চোখে রক্তনালী বৃদ্ধির মতো জটিলতা দেখা দেয় [১]। অন্যদিকে পাইরিডক্সিনের (B6) অভাবে রক্তে হিমোগ্লোবিন তৈরি ব্যাহত হয়ে রক্তশূন্যতা হয় এবং মস্তিষ্কে শান্তিদায়ক GABA নিউরোট্রান্সমিটার তৈরি না হওয়ায় মারাত্মক খিঁচুনি ও স্নায়ুরোগ সৃষ্টি হয় [১, ২]।'
            ),
            l(
              'Folate (B9) and Cobalamin (B12) deficiencies disrupt DNA replication, crippling the production of rapidly dividing cells in the bone marrow [1, 3, 4]. Erythroblasts cannot divide their nuclei, resulting in the release of giant, immature, fragile red blood cells into the bloodstream—a condition termed Megaloblastic Anemia [3, 4]. Maternal folate deficiency during the first 28 days of pregnancy causes devastating Neural Tube Defects (such as spina bifida and anencephaly) in developing embryos, prompting worldwide mandatory public health flour fortification programs [3, 6].',
              'ফোলেট (B9) এবং কোবালামিনের (B12) ঘাটতি সরাসরি কোষের ডিএনএ তৈরির ক্ষমতা নষ্ট করে দেয় [১, ৩, ৪]। এর ফলে অস্থিমজ্জায় রক্তকণিকা ঠিকমতো বিভাজিত হতে না পেরে বিশাল আকারের অপূর্ণাঙ্গ রক্তকণিকা রক্তে ছড়িয়ে পড়ে, যাকে মেগালোব্লাস্টিক অ্যানিমিয়া বলা হয় [৩, ৪]। গর্ভাবস্থার প্রথম চার সপ্তাহে মায়ের শরীরে ফোলেটের অভাব থাকলে গর্ভস্থ শিশুর মেরুদণ্ড ও মস্তিষ্ক সঠিকভাবে গঠিত হতে পারে না, যার ফলে স্পাইনা বিফিডার মতো মারাত্মক জন্মগত বিকলাঙ্গতা ঘটে; এই কারণেই বিশ্বজুড়ে আটা-ময়দায় ফোলেট মেশানো বাধ্যতামূলক করা হয়েছে [৩, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Food Sources, Cooking Losses & Vulnerable Populations', 'খাদ্য উৎস, রন্ধনজনিত ক্ষয় ও ঝুঁকিপূর্ণ জনগোষ্ঠী'),
          paragraphs: [
            l(
              'Because water-soluble B-vitamins are distributed across diverse food groups, a balanced whole-food diet easily supplies daily metabolic requirements [1]. Whole unrefined grains (brown rice, oats, barley) and legumes provide rich stores of Thiamine and Pyridoxine [1]. Dairy products, pasture-raised eggs, and green vegetables deliver abundant Riboflavin, while lean meats, poultry, mushrooms, and peanuts provide Niacin [1, 2]. Dark leafy green vegetables (spinach, kale, asparagus) are the premier plant reservoirs of Folate (named after the Latin word folium, meaning "leaf") [3].',
              'পানিতে দ্রবণীয় বি-ভিটামিনগুলো বিভিন্ন ধরনের প্রাকৃতিক খাদ্যে ছড়িয়ে থাকে, তাই একটি সুষম খাদ্যতালিকা দৈনন্দিন সমস্ত চাহিদা অনায়াসে পূরণ করে [১]। লাল চাল, ওটস এবং ডালজাতীয় শস্যে প্রচুর থায়ামিন ও পাইরিডক্সিন থাকে [১]। দুধ, ডিম ও শাকসবজিতে প্রচুর রিবোফ্লাভিন থাকে, আর মাংস, মাশরুম ও চীনাবাদাম হলো নিয়াসিনের চমৎকার উৎস [১, ২]। গাঢ় সবুজ শাকসবজি (পালং শাক, ব্রকলি) হলো ফোলেটের সবচেয়ে প্রধান ভাণ্ডার (ল্যাটিন শব্দ folium অর্থাৎ "পাতা" থেকে ফোলেট নামের উৎপত্তি) [৩]।'
            ),
            l(
              'Vitamin B12 (cobalamin) is an extraordinary nutritional exception: it is synthesized exclusively by certain anaerobic bacteria and archaea, never by plants or animals [4]. Animals acquire B12 by ingesting bacteria-contaminated forage or through microbial fermentation in their rumens, concentrating the vitamin in their liver, meat, milk, and eggs [4]. Therefore, strict vegans and vegetarians who consume zero animal products must take daily oral Vitamin B12 supplements or fortified foods to avoid irreversible neurological paralysis and anemia [1, 4].',
              'ভিটামিন বি১২ (কোবালামিন) হলো পুষ্টিবিজ্ঞানের এক অনন্য ব্যতিক্রম: এটি কোনো উদ্ভিদ বা প্রাণী তৈরি করতে পারে না, এটি কেবল প্রকৃতির কিছু বিশেষ ব্যাকটেরিয়া দ্বারা তৈরি হয় [৪]। তৃণভোজী প্রাণীরা ঘাস বা অন্ত্রের ব্যাকটেরিয়ার মাধ্যমে এটি সংগ্রহ করে নিজেদের কলিজা, মাংস, দুধ ও ডিমে সঞ্চয় করে [৪]। তাই যেসব ব্যক্তি সম্পূর্ণ নিরামিষভোজী (ভেগান) এবং কোনো প্রাণিজ খাবার খান না, তাদের স্নায়ুর স্থায়ী পঙ্গুত্ব ও রক্তশূন্যতা এড়াতে অবশ্যই নিয়মিত ভিটামিন বি১২ সাপ্লিমেন্ট গ্রহণ করতে হবে [১, ৪]।'
            ),
            l(
              'Because B-vitamins are completely water-soluble and heat-sensitive, traditional cooking methods can cause catastrophic nutrient loss [1]. Boiling vegetables in large volumes of water and discarding the cooking water leaches up to 50% to 70% of folate, thiamine, and vitamin C directly down the drain [1, 3]. Steaming, microwaving, or consuming the cooking broths preserves fragile vitamer structures and maximizes dietary intake [1].',
              'বি-ভিটামিন পানিতে দ্রবণীয় এবং উত্তাপ-সংবেদনশীল হওয়ায় রান্নার ভুলে এদের সিংহভাগ নষ্ট হয়ে যেতে পারে [১]। প্রচুর পানিতে শাকসবজি সেদ্ধ করে সেই পানি ফেলে দিলে ৫০% থেকে ৭০% ফোলেট ও থায়ামিন সরাসরি নর্দমায় অপচয় হয় [১, ৩]। কম পানিতে রান্না করা, ভাপে সেদ্ধ করা বা রান্নার ঝোল পানীয় হিসেবে ব্যবহার করলে এই ভিটামিনগুলোর গুণাগুণ অক্ষুণ্ণ থাকে [১]।'
            ),
            l(
              'Certain clinical populations face exceptionally high risks of B-vitamin deficiencies [1, 2]. Chronic alcoholics suffer from severe thiamine deficiency because ethanol blocks intestinal thiamine transporters (THTR1/2) and impairs hepatic phosphorylation, predisposing them to fatal Wernicke encephalopathy [1, 2]. Elderly individuals suffering from atrophic gastritis lose gastric parietal cells, resulting in a lack of Intrinsic Factor and stomach acid, precipitating severe Vitamin B12 malabsorption (Pernicious Anemia) despite adequate dietary intake [4].',
              'কিছু নির্দিষ্ট জনগোষ্ঠী বি-ভিটামিনের ঘাটতির মারাত্মক ঝুঁকিতে থাকে [১, ২]। অতিরিক্ত মদ্যপানে অভ্যস্ত ব্যক্তিরা তীব্র থায়ামিনের অভাবে ভোগেন, কারণ অ্যালকোহল অন্ত্রে ভিটামিন শোষণ বন্ধ করে দেয় এবং যকৃতের রূপান্তর নষ্ট করে মস্তিষ্ক ধ্বংসকারী ভার্নিক রোগে আক্রান্ত করে [১, ২]। অন্যদিকে বয়স্ক ব্যক্তিদের পাকস্থলীর কোষ ক্ষয়প্রাপ্ত হলে ইন্ট্রিনসিক ফ্যাক্টরের অভাবে খাদ্য থেকে ভিটামিন বি১২ শোষিত হতে পারে না, যার ফলে পারনিশিয়াস অ্যানিমিয়া দেখা দেয় [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Key Educational Takeaways & Clinical Principles', 'মূল শিক্ষণীয় সারসংক্ষেপ ও ক্লিনিক্যাল নীতিমালা'),
          paragraphs: [
            l(
              'In summary, the B-complex family consists of eight hydrophilic coenzymes that do not supply energy themselves, but act as catalytic keys unlocking cellular ATP generation from macronutrients [1, 2].',
              'সংক্ষেপে, বি-কমপ্লেক্স হলো পানিতে দ্রবণীয় আটটি অপরিহার্য কো-এনজাইম যা নিজেরা কোনো ক্যালরি সরবরাহ করে না, তবে খাদ্য থেকে এটিপি শক্তি তৈরির প্রধান চাবিকাঠি হিসেবে কাজ করে [১, ২]।'
            ),
            l(
              'Mitochondrial pyruvate oxidation and the Krebs cycle require coordinated biochemical teamwork between thiamine (B1), riboflavin (B2), niacin (B3), and pantothenic acid (B5) [1, 5].',
              'মাইটোকন্ড্রিয়ায় খাদ্য পুড়িয়ে শক্তি উৎপাদনের জন্য থায়ামিন (B1), রিবোফ্লাভিন (B2), নিয়াসিন (B3) এবং প্যান্টোথেনিক অ্যাসিডের (B5) সমন্বিত দলগত কাজ অপরিহার্য [১, ৫]।'
            ),
            l(
              'Folate (B9) and Vitamin B12 (cobalamin) partner in one-carbon transmethylation to build DNA and protect myelin, and strict vegans require mandatory B12 supplementation [3, 4].',
              'ফোলেট (B9) এবং ভিটামিন বি১২ (কোবালামিন) ডিএনএ তৈরি ও স্নায়ুর আবরণী রক্ষায় একসাথে কাজ করে, এবং নিরামিষভোজী ব্যক্তিদের জন্য বি১২ সাপ্লিমেন্ট গ্রহণ বাধ্যতামূলক [৩, ৪]।'
            ),
            l(
              'In clinical emergencies, always administer intravenous thiamine BEFORE intravenous glucose in malnourished patients to avert catastrophic Wernicke encephalopathy and fatal lactic acidosis [1, 2].',
              'ক্লিনিক্যাল জরুরি চিকিৎসায় অপুষ্টিতে আক্রান্ত রোগীকে গ্লুকোজ স্যালাইন দেওয়ার আগে সর্বদা শিরায় থায়ামিন ইনজেকশন নিশ্চিত করতে হবে যাতে মস্তিষ্কের মারাত্মক ক্ষতি ও মৃত্যু রোধ করা যায় [১, ২]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Intestinal Absorption Kinetics & Specialized Enterocyte Transporters', 'অন্ত্রীয় শোষণ গতিবিদ্যা ও বিশেষ এন্টারোসাইট ট্রান্সপোর্টার'),
          paragraphs: [
            l(
              'The intestinal assimilation of water-soluble B-vitamins requires specialized apical transmembrane carrier proteins, challenging the historical assumption that hydrophilic molecules cross mucosal barriers via passive paracellular diffusion [1]. In the proximal jejunum, Thiamine is actively imported across the enterocyte brush border via two high-affinity proton-coupled symporters: Thiamine Transporter-1 (THTR1, encoded by SLC19A2) and Thiamine Transporter-2 (THTR2, encoded by SLC19A3) [1, 2]. Mutations in SLC19A2 cause Thiamine-Responsive Megaloblastic Anemia (TRMA / Rogers syndrome), presenting with the clinical triad of megaloblastic anemia, diabetes mellitus, and sensorineural deafness [1].',
              'পানিতে দ্রবণীয় বি-ভিটামিনগুলো অন্ত্রের ভেতর দিয়ে নিষ্ক্রিয়ভাবে চলাচল করতে পারে না; এদের শোষণের জন্য এন্টারোসাইট কোষের মুখে বিশেষ বাহক প্রোটিন থাকে [১]। ক্ষুদ্রান্ত্রে থায়ামিন দুটি বিশেষ প্রোটিন—THTR1 এবং THTR2 দ্বারা কোষে শোষিত হয় [১, ২]। এই জিনে কোনো জন্মগত ত্রুটি থাকলে রোগীর রক্তশূন্যতা, ডায়াবেটিস এবং বধিরতা দেখা দেয় যাকে রজার্স সিন্ড্রোম বলা হয় [১]।'
            ),
            l(
              'Riboflavin absorption across the duodenal and jejunal brush border is executed by Human Riboflavin Transporters 1, 2, and 3 (RFVT1/2/3, encoded by SLC52A1/2/3) [1]. Autosomal recessive mutations in SLC52A2 or SLC52A3 cause Brown-Vialetto-Van Laere syndrome (BVVL / Riboflavin Transporter Deficiency), a devastating motor neuronopathy presenting with progressive bulbar palsy, sensorineural deafness, and respiratory failure, treatable only by massive pharmacological oral riboflavin supplementation (50–100 mg/kg/day) to force passive paracellular entry [1].',
              'রিবোফ্লাভিন শোষণের কাজটি করে RFVT1, 2 ও 3 নামক তিনটি বিশেষ চ্যানেল [১]। এই চ্যানেলের জন্মগত ত্রুটি হলে স্নায়ু কোষের মারাত্মক অবক্ষয় ঘটে যার ফলে মাংসপেশি অবশ হয়ে শ্বাসকষ্টে রোগী মারা যেতে পারে; উচ্চমাত্রার রিবোফ্লাভিন প্রয়োগই এই রোগের একমাত্র জীবনরক্ষাকারী চিকিৎসা [১]।'
            ),
            l(
              'Biotin (B7) and Pantothenic Acid (B5) share a competitive, high-affinity apical uptake mechanism: the Sodium-Dependent Multivitamin Transporter (SMVT, encoded by SLC5A6) [1]. Excessive consumption of raw egg whites containing the heat-labile glycoprotein avidin tightly binds biotin with an extraordinary dissociation constant (Kd ~ 10^-15 M), preventing SMVT recognition and inducing profound secondary biotin deficiency [1].',
              'বায়োটিন (B7) এবং প্যান্টোথেনিক অ্যাসিড (B5) উভয়ই SMVT নামক একই সোডিয়াম-নির্ভর চ্যানেলের মাধ্যমে প্রতিযোগিতা করে অন্ত্রে প্রবেশ করে [১]। অতিরিক্ত কাঁচা ডিমের সাদা অংশ খেলে তাতে থাকা "অ্যাভিডিন" প্রোটিন বায়োটিনকে এত শক্তভাবে আটকে ফেলে যে চ্যানেলটি বায়োটিন শোষণ করতে পারে না এবং শরীরে তীব্র বায়োটিন ঘাটতি দেখা দেয় [১]।'
            ),
            l(
              'Folate absorption relies on the Proton-Coupled Folate Transporter (PCFT, encoded by SLC46A1), which operates with maximal affinity at acidic pH (5.5) in the upper duodenal microclimate [3]. Meanwhile, dietary Vitamin B12 (cobalamin) requires an elaborate gastrointestinal transport relay: salivary haptocorrin protects B12 in the acidic stomach; pancreatic proteases degrade haptocorrin in the alkaline duodenum; gastric parietal cell-derived Intrinsic Factor (IF) binds cobalamin; and the resulting IF-B12 complex undergoes calcium-dependent receptor-mediated endocytosis via the Cubam receptor complex (cubilin and amnionless) in the terminal ileum [1, 4].',
              'ফোলেট শোষিত হয় অম্লীয় পরিবেশে কাজ করা PCFT চ্যানেলের মাধ্যমে [৩]। আর ভিটামিন বি১২-এর শোষণ হলো পরিপাকতন্ত্রের সবচেয়ে জটিল যাত্রা: মুখের লালার হ্যাপ্টোকরিন একে পাকস্থলীর অ্যাসিড থেকে বাঁচায়, অগ্ন্যাশয়ের এনজাইম একে মুক্ত করে, পাকস্থলীর ইন্ট্রিনসিক ফ্যাক্টর একে আঁকড়ে ধরে এবং অন্ত্রের শেষ প্রান্তের বিশেষ কিউবাম রিসেপ্টরের মাধ্যমে এটি রক্তে প্রবেশ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Stereochemical Catalytic Mechanisms: Decarboxylation & Hydride Transfer', 'স্টেরিওকেমিক্যাল প্রভাবন মেকানিজম: ডিকার্বক্সিলেশন ও হাইড্রাইড স্থানান্তর'),
          paragraphs: [
            l(
              'The catalytic prowess of Thiamine Pyrophosphate (TPP) resides in its central thiazolium ring [1]. The hydrogen atom attached to carbon-2 (C2) between the positively charged nitrogen and sulfur atoms is exceptionally acidic (pKa ~ 17–19, lowered into physiological range within hydrophobic enzyme pockets) [1]. Dissociation of this proton generates a nucleophilic carbanion (an ylide). This carbanion performs a nucleophilic attack on the electropositive alpha-carbonyl carbon of pyruvate, forming a covalent addition intermediate [1, 5].',
              'থায়ামিন পাইরোফসফেটের (TPP) মূল শক্তি নিহিত রয়েছে এর থায়াজোলিয়াম রিং-এর মধ্যে [১]। এর কার্বন-২-এ থাকা হাইড্রোজেনটি সহজেই মুক্ত হয়ে একটি তীব্র ঋণাত্মক কার্বানায়ন তৈরি করে। এই কার্বানায়নটি পাইরুভেটের কার্বনে আক্রমণ করে রাসায়নিক বন্ধন তৈরি করে [১, ৫]।'
            ),
            l(
              'The quaternary nitrogen atom of the thiazolium ring acts as a powerful electrophilic electron sink, pulling electrons toward itself and promoting the spontaneous decarboxylation of pyruvate with the release of gaseous carbon dioxide [1, 5]. The resulting resonance-stabilized hydroxyethyl-TPP intermediate can then be transferred to lipoamide (in oxidative decarboxylation) or released as acetaldehyde (in yeast fermentation), demonstrating the extraordinary catalytic utility of the thiazolium ylide [1, 5].',
              'থায়াজোলিয়াম রিং-এর ধনাত্মক নাইট্রোজেন পরমাণুটি একটি ইলেকট্রন ফাঁদ হিসেবে কাজ করে সমস্ত ইলেকট্রনকে নিজের দিকে টেনে নেয়; ফলে পাইরুভেট থেকে কার্বন ডাই-অক্সাইড গ্যাস আকারে উড়ে চলে যায় [১, ৫]। এরপর তৈরি হওয়া অ্যাসিটাইল গ্রুপটি লাইপোয়েটের হাতে তুলে দেওয়া হয় যা শক্তি তৈরির পথ সুগম করে [১, ৫]।'
            ),
            l(
              'In oxidation-reduction biology, Nicotinamide Adenine Dinucleotide (NAD+) operates as a pure two-electron/one-proton obligate hydride (H-) acceptor [1, 5]. The nicotinamide ring contains a formal positive charge on its ring nitrogen. When an alcohol or alpha-keto substrate is oxidized, a stereospecific hydride ion is transferred directly to carbon-4 of the nicotinamide ring, neutralizing the ring charge and converting oxidized NAD+ into reduced NADH (absorbing light strongly at 340 nm) [1, 5].',
              'জারণ-বিজারণ বিক্রিয়ায় নিয়াসিন থেকে প্রাপ্ত NAD+ সরাসরি একটি হাইড্রাইড আয়ন (দুটি ইলেকট্রন ও একটি প্রোটন) নিজের নিকোটিনামাইড রিং-এর কার্বন-৪ এ গ্রহণ করে বিজারিত NADH-এ পরিণত হয় [১, ৫]। এই প্রক্রিয়ায় কোনো বিপজ্জনক মুক্ত র্যাডিকেল তৈরি হয় না, যা কোষকে জারণের ক্ষয়ক্ষতি থেকে বাঁচায় [১, ৫]।'
            ),
            l(
              'Conversely, Flavin Adenine Dinucleotide (FAD) contains a conjugated tricyclic isoalloxazine ring system that possesses unique redox versatility [1, 5]. Unlike NAD+, which only transfers hydride pairs, FAD can participate in both two-electron hydride transfers and single-electron transfers. FAD can accept an electron and a proton to form a stable, resonance-stabilized neutral semiquinone radical (FADH•), before accepting a second electron to form fully reduced FADH2 [1, 5]. This unique single-electron capability allows flavoproteins to bridge the gap between two-electron metabolic oxidations and the single-electron metal ion transfers of the iron-sulfur clusters in the electron transport chain.',
              'অন্যদিকে রিবোফ্লাভিনের FAD কো-এনজাইম এক বা দুই উভয় প্রকার ইলেকট্রনই গ্রহণ করতে পারে [১, ৫]। এটি প্রথমে একটি ইলেকট্রন নিয়ে শান্ত সেমিকুইনোন র্যাডিকেল গঠন করে এবং পরে আরেকটি ইলেকট্রন নিয়ে সম্পূর্ণ FADH2 তে পরিণত হয় [১, ৫]। এই বিশেষ গুণের কারণেই এটি মেটাবলিজমের ইলেকট্রনগুলোকে মাইটোকন্ড্রিয়ার লোহা-সালফার ক্লাস্টারে পৌঁছে দিতে পারে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Coenzyme A Thioester Thermodynamics & PLP Schiff Base Versatility', 'কো-এনজাইম এ থায়োএস্টার থার্মোডাইনামিক্স ও PLP শিফ-বেস বহুমুখিতা'),
          paragraphs: [
            l(
              'Pantothenic Acid (Vitamin B5) serves as the structural core of Coenzyme A (CoA-SH) and the acyl carrier protein (ACP) of fatty acid synthase [1]. The functional business end of CoA is a terminal sulfhydryl (-SH) thiol group derived from beta-mercaptoethylamine [1]. When an acyl group binds to this sulfur atom, it forms a high-energy thioester bond rather than a conventional oxygen ester bond [1].',
              'প্যান্টোথেনিক অ্যাসিড (B5) কো-এনজাইম এ (CoA-SH) এবং ফ্যাটি অ্যাসিড তৈরির ACP প্রোটিনের কেন্দ্রীয় মেরুদণ্ড গঠন করে [১]। এর কাজের আসল প্রান্তটি হলো একটি সালফার গ্রুপ (-SH)। যখন কোনো অ্যাসিড এই সালফারের সাথে যুক্ত হয়, তখন সাধারণ বন্ধন তৈরি না হয়ে একটি অতি-উচ্চ শক্তিসম্পন্ন "থায়োএস্টার" বন্ধন তৈরি হয় [১]।'
            ),
            l(
              'Because the large sulfur atom cannot achieve resonance orbital overlap with the carbonyl carbon as efficiently as an oxygen atom can, the thioester bond lacks resonance stabilization [1]. Consequently, the standard free energy of hydrolysis of acetyl-CoA is exceptionally exergonic (delta-G-prime ~ -31.5 kJ/mol), making it thermodynamically equivalent to ATP [1]. This stored energy drives the condensation of oxaloacetate and acetyl-CoA by citrate synthase to kick off the Krebs cycle, powering cellular bioenergetics [1, 5].',
              'সালফার পরমাণুর বিশেষ গঠনের কারণে এই বন্ধনে প্রচুর রাসায়নিক শক্তি আটকা পড়ে থাকে; ফলে অ্যাসিটাইল-CoA ভেঙে যাওয়ার সময় প্রায় -৩১.৫ kJ/mol শক্তি নির্গত হয়, যা একটি এটিপি ভাঙার শক্তির সমান [১]। এই বিপুল সঞ্চিত শক্তিই সাইট্রেট সিন্থেজ এনজাইমকে চালু করে ক্রেবস চক্রের প্রথম বিক্রিয়া সম্পন্ন করতে বাধ্য করে [১, ৫]।'
            ),
            l(
              'In amino acid metabolism, Pyridoxal-5\'-Phosphate (PLP / Vitamin B6) is the most catalytically versatile coenzyme in the human genome [1]. In resting transaminases (such as AST and ALT), PLP’s aldehyde carbon forms a covalent imine bond—called an internal aldimine—with the epsilon-amino group of an active-site lysine residue [1]. When an amino acid substrate enters the active site, its alpha-amino group attacks the internal aldimine, displacing the lysine to form an external aldimine Schiff base intermediate [1].',
              'অ্যামিনো অ্যাসিডের রূপান্তরে ভিটামিন বি৬-এর PLP হলো মানবদেহের সবচেয়ে বৈচিত্র্যময় কো-এনজাইম [১]। লিভারের এনজাইমে (AST ও ALT) এটি এনজাইমের সাথে শিফ-বেস বন্ধনে যুক্ত থাকে। কোনো অ্যামিনো অ্যাসিড কাছে আসতেই PLP এনজাইমকে ছেড়ে দিয়ে সরাসরি অ্যামিনো অ্যাসিডের সাথে যুক্ত হয়ে এক্সটার্নাল অ্যালডিমাইন তৈরি করে [১]।'
            ),
            l(
              'The pyridine ring of PLP features a positively charged ring nitrogen that acts as a powerful electrophilic electron sink. By pulling electrons away from the substrate’s alpha-carbon, PLP labilizes any of the three bonds attached to the carbon depending on the active-site geometry: labilizing the C-H bond drives transamination; labilizing the C-COOH bond drives decarboxylation (synthesizing GABA, serotonin, and dopamine); and labilizing the R-group drives beta-elimination and racemization [1, 2]. Through this single coenzyme, human cells manage nitrogen disposal and neurotransmission.',
              'PLP-এর নাইট্রোজেন পরমাণুটি একটি শক্তিশালী ইলেকট্রন ফাঁদ হিসেবে কাজ করে অ্যামিনো অ্যাসিডের বন্ধনগুলোকে দুর্বল করে দেয়; ফলে এনজাইমের চাহিদা অনুযায়ী এটি কখনো অ্যামিনো গ্রুপ বদল করে, কখনো কার্বন ডাই-অক্সাইড উড়িয়ে দিয়ে ব্রেনের নিউরোট্রান্সমিটার (GABA, সেরোটোনিন, ডোপামিন) তৈরি করে [১, ২]। এই একক কো-এনজাইম মানবদেহের প্রোটিন ও মানসিক স্বাস্থ্য উভয়ই নিয়ন্ত্রণ করে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('The One-Carbon Metathesis: Folate, Cobalamin & The Methyl Trap', 'এক-কার্বন রূপান্তর: ফোলেট, কোবালামিন ও মিথাইল-ট্র্যাপ'),
          paragraphs: [
            l(
              'The metabolic collaboration between Folate (Vitamin B9) and Cobalamin (Vitamin B12) constitutes the master one-carbon transfer network of human cell replication [1, 3, 4]. Folate in its reduced tetrahydrofolate (THF) form acts as a molecular platform carrying activated single-carbon units at diverse oxidation states attached to its N5 and N10 nitrogen positions: 10-formyl-THF powers de novo purine synthesis (adenine and guanine), while 5,10-methylene-THF donates a methyl group to dUMP via thymidylate synthase to generate dTMP for DNA replication [3].',
              'ফোলেট (B9) এবং ভিটামিন বি১২-এর যৌথ মেলবন্ধন হলো মানবকোষের ডিএনএ তৈরির প্রধান এক-কার্বন কারখানা [১, ৩, ৪]। সক্রিয় টেট্রাহাইড্রোফোলেট (THF) বিভিন্ন জারণ অবস্থায় কার্বন কণা নিজের ঘাড়ে বহন করে: ১০-ফরমাইল-THF ডিএনএ-র পিউরিন তৈরি করে, আর ৫,১০-মিথিলিন-THF থাইমিডিন তৈরি করে ডিএনএ প্রতিলিপন নিশ্চিত করে [৩]।'
            ),
            l(
              'A fraction of 5,10-methylene-THF is irreversibly reduced by the enzyme Methylenetetrahydrofolate Reductase (MTHFR) into 5-methyl-THF [3, 4]. 5-methyl-THF is the predominant circulating form of folate in human blood. However, 5-methyl-THF is chemically inert and cannot directly participate in purine or thymidylate synthesis; its sole biochemical fate in human biology is to transfer its methyl group to Vitamin B12 via the enzyme Methionine Synthase (MTR) [3, 4].',
              'MTHFR এনজাইমের মাধ্যমে এই ফোলেট অপরিবর্তনীয়ভাবে ৫-মিথাইল-THF এ পরিণত হয়, যা রক্তে সবচেয়ে বেশি ঘোরে [৩, ৪]। কিন্তু এই রূপটি সরাসরি কোনো ডিএনএ তৈরিতে অংশ নিতে পারে না; মানবদেহে এর একমাত্র কাজ হলো মিথিওনিন সিন্থেজ এনজাইমের সাহায্যে নিজের মিথাইল গ্রুপটি ভিটামিন বি১২-এর হাতে তুলে দেওয়া [৩, ৪]।'
            ),
            l(
              'In this reaction, the cobalt(I) ion of cobalamin accepts the methyl group from 5-methyl-THF, generating methylcobalamin and liberating free THF, which can return to the active folate pool [3, 4]. Methylcobalamin subsequently transfers the methyl group to homocysteine, remethylating it to methionine. Methionine is then activated by ATP into S-Adenosylmethionine (SAM), the universal methyl donor required for DNA methylation, histone epigenetic silencing, and myelin basic protein stabilization [3, 4].',
              'কোবালামিনের কোবাল্ট আয়ন এই মিথাইল গ্রুপটি নিয়ে মিথাইলকোবালামিন তৈরি করে এবং ফোলেটকে মুক্ত THF হিসেবে স্বাধীন করে দেয় [৩, ৪]। এরপর মিথাইলকোবালামিন সেই মিথাইল গ্রুপটি ক্ষতিকর হোমোসিস্টিনকে দান করে নিরাপদ মিথিওনিনে রূপান্তর করে, যা পরবর্তীতে SAM তৈরি করে ডিএনএ ও স্নায়ুর আবরণী সুরক্ষিত রাখে [৩, ৪]।'
            ),
            l(
              'When Vitamin B12 is deficient, Methionine Synthase is paralyzed. Cellular folate becomes irreversibly trapped as 5-methyl-THF because the MTHFR reaction cannot be reversed—a lethal state known as the Methyl-Folate Trap [3, 4]. Despite high circulating levels of folate, cells starve of functional THF, halting thymidylate and purine synthesis and freezing cell division in the bone marrow, triggering fatal Megaloblastic Anemia alongside toxic homocysteine accumulation [3, 4].',
              'শরীরে ভিটামিন বি১২ না থাকলে এই এনজাইম পুরোপুরি অচল হয়ে পড়ে। সমস্ত ফোলেট ৫-মিথাইল-THF হিসেবে চিরদিনের জন্য আটকা পড়ে যায় যাকে "মিথাইল-ফোলেট ট্র্যাপ" বলা হয় [৩, ৪]। রক্তে প্রচুর ফোলেট থাকা সত্ত্বেও কোষে ডিএনএ তৈরি বন্ধ হয়ে যায় এবং অস্থিমজ্জায় রক্তকণিকা বিভাজন থমকে গিয়ে মারাত্মক মেগালোব্লাস্টিক অ্যানিমিয়া ও রক্তে বিষাক্ত হোমোসিস্টিন জমা হতে থাকে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Metabolic Metrology: MMA, Homocysteine & Neurological Dissociation', 'মেটাবলিক পরিমাপ: MMA, হোমোসিস্টিন ও স্নায়বিক বৈপরীত্য'),
          paragraphs: [
            l(
              'Distinguishing between Vitamin B12 deficiency and Folate deficiency is one of the most critical diagnostic challenges in clinical medicine [1, 4]. While both deficiencies present with identical hematological morphology (macrocytic megaloblastic anemia with hypersegmented neutrophils), their neurological consequences and metabolic footprints are radically divergent [1, 4].',
              'ভিটামিন বি১২ এবং ফোলেটের ঘাটতির মধ্যে পার্থক্য নির্ণয় করা চিকিৎসাবিজ্ঞানের অন্যতম প্রধান চ্যালেঞ্জ [১, ৪]। দুটি রোগের ক্ষেত্রেই হুবহু একই রকম রক্তশূন্যতা (লোহিত রক্তকণিকার অস্বাভাবিক বৃদ্ধি) দেখা গেলেও, এদের স্নায়বিক পরিণতি এবং ল্যাবরেটরি বায়োমার্কার সম্পূর্ণ ভিন্ন [১, ৪]।'
            ),
            l(
              'In human biochemistry, Vitamin B12 acts as a coenzyme for exactly two enzymes: cytosolic Methionine Synthase (requiring methylcobalamin) and mitochondrial Methylmalonyl-CoA Mutase (MUT, requiring 5\'-deoxyadenosylcobalamin) [4]. Methylmalonyl-CoA Mutase isomerizes L-methylmalonyl-CoA into succinyl-CoA, allowing propionyl-CoA derived from odd-chain fatty acids and branched-chain amino acids (valine, isoleucine, threonine) to enter the TCA cycle [4].',
              'মানবদেহে ভিটামিন বি১২ মাত্র দুটি এনজাইমের কো-এনজাইম হিসেবে কাজ করে: সাইটোপ্লাজমে মিথিওনিন সিন্থেজ এবং মাইটোকন্ড্রিয়ায় মিথাইলম্যালোনাইল-CoA মিউটেজ [৪]। এই দ্বিতীয় এনজাইমটি চর্বির উপজাত মিথাইলম্যালোনাইল-CoA কে শক্তিতে রূপান্তর করে ক্রেবস চক্রে পাঠিয়ে দেয় [৪]।'
            ),
            l(
              'In Vitamin B12 deficiency, both Methionine Synthase and Methylmalonyl-CoA Mutase are blocked; consequently, both plasma Homocysteine and serum Methylmalonic Acid (MMA) skyrocket [4]. In contrast, Folate is required only for Methionine Synthase; in isolated Folate deficiency, Homocysteine is elevated, but MMA remains strictly normal [3, 4]. Measuring serum MMA is therefore the definitive gold-standard test that unmasks intracellular B12 deficiency even when total serum cobalamin levels appear borderline [4].',
              'ভিটামিন বি১২-এর ঘাটতি হলে উভয় এনজাইমই বন্ধ হয়ে যায়; ফলে রক্তে হোমোসিস্টিন এবং মিথাইলম্যালোনিক অ্যাসিড (MMA) দুটোই বহুগুণ বেড়ে যায় [৪]। কিন্তু ফোলেটের ঘাটতিতে কেবল হোমোসিস্টিন বাড়ে, MMA সম্পূর্ণ স্বাভাবিক থাকে [৩, ৪]। তাই রক্তে MMA পরীক্ষা করাই হলো বি১২ ঘাটতি নিশ্চিত করার সবচেয়ে অকাট্য পরীক্ষা [৪]।'
            ),
            l(
              'A disastrous clinical error occurs when a patient with undiagnosed B12 deficiency is mistakenly treated with high-dose synthetic folic acid alone [3, 4]. Folic acid bypasses the methyl trap to resolve the anemia, masking the underlying hematological crisis; meanwhile, cobalamin-deficient demyelination of the dorsal and lateral columns of the spinal cord (Subacute Combined Degeneration) accelerates unchecked, leaving the patient with permanent spastic paralysis, sensory ataxia, and irreversible memory loss [1, 4].',
              'রোগীর বি১২ ঘাটতি থাকা সত্ত্বেও ভুল করে যদি শুধু ফলিক অ্যাসিড বড়ি দেওয়া হয়, তবে এক ভয়াবহ বিপর্যয় ঘটে [৩, ৪]। ফলিক অ্যাসিড রক্তশূন্যতা সারিয়ে দিয়ে চিকিৎসকের চোখ ফাঁকি দেয়; কিন্তু ভেতরে ভেতরে বি১২-এর অভাবে সুষুম্নাকাণ্ডের স্নায়ুর আবরণী খসে পড়তে থাকে এবং রোগী চিরদিনের জন্য স্থায়ী প্যারালাইসিস ও পঙ্গুত্ব বরণ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: The Interdependent Coenzyme Network', 'প্রাতিষ্ঠানিক সমন্বয়: পরস্পর-নির্ভর কো-এনজাইম নেটওয়ার্ক'),
          paragraphs: [
            l(
              'In summary, the eight B-complex vitamins do not function as isolated nutrients, but operate as an interdependent, tightly woven metabolic network where deficiency in one vitamer paralyzes the functions of others [1, 2].',
              'সংক্ষেপে, আটটি বি-কমপ্লেক্স ভিটামিন কোনো একক পুষ্টি হিসেবে কাজ করে না, বরং এরা একটি পরস্পর-সংযুক্ত জালিকার মতো কাজ করে যেখানে একটির ঘাটতি অন্যগুলোর কার্যক্ষমতাকে বিকল করে দেয় [১, ২]।'
            ),
            l(
              'Mitochondrial fuel combustion through the Pyruvate Dehydrogenase Complex and the TCA cycle demands seamless collaboration between thiamine (B1), riboflavin (B2), niacin (B3), and pantothenic acid (B5) [1, 5].',
              'মাইটোকন্ড্রিয়ায় খাদ্য থেকে শক্তি উৎপাদনের প্রতিটি পদক্ষেপে থায়ামিন (B1), রিবোফ্লাভিন (B2), নিয়াসিন (B3) এবং প্যান্টোথেনিক অ্যাসিডের (B5) যুগপৎ উপস্থিতি আবশ্যক [১, ৫]।'
            ),
            l(
              'Pyridoxine (B6) governs amino acid nitrogen transfer and neurotransmitter biosynthesis, while Folate (B9) and Cobalamin (B12) drive one-carbon metathesis for nucleotide synthesis and neural myelin integrity [1, 3, 4].',
              'পাইরিডক্সিন (B6) অ্যামিনো অ্যাসিড ও মস্তিষ্কের সংকেত নিয়ন্ত্রণ করে, আর ফোলেট (B9) ও বি১২ (B12) ডিএনএ তৈরি ও স্নায়ুর আবরণী রক্ষার মূল চালিকাশক্তি [১, ৩, ৪]।'
            ),
            l(
              'Clinical management mandates rigorous biomarker evaluation using functional intermediates (MMA and homocysteine) and demands that intravenous thiamine always precede carbohydrate administration in suspected depletion [1, 2, 4].',
              'চিকিৎসাক্ষেত্রে সর্বদা MMA ও হোমোসিস্টিন দিয়ে সঠিক রোগ নির্ণয় করা এবং অপুষ্টির রোগীকে গ্লুকোজ স্যালাইন দেওয়ার আগে অবশ্যই থায়ামিন ইনজেকশন নিশ্চিত করা চিকিৎসার প্রধান নীতি [১, ২, ৪]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'introduction',
          heading: l('Pyruvate Dehydrogenase Supercomplex Supramolecular Architecture', 'পাইরুভেট ডিহাইড্রোজিনেজ সুপারকমপ্লেক্সের সুপ্রামলিকুলার গঠন'),
          paragraphs: [
            l(
              'The mammalian Pyruvate Dehydrogenase Complex (PDC) is a 9.5-megadalton supramolecular nanomachine organized around a central 60-meric pentagonal dodecahedral core of dihydrolipoyl transacetylase (E2) and E3-binding protein (E3BP) [1, 5]. Structural cryo-electron microscopy reveals that thirty E1 alpha-2-beta-2 tetramers (pyruvate decarboxylase, TPP-dependent) and twelve E3 homodimers (dihydrolipoyl dehydrogenase, FAD-dependent) decorate the exterior surface of this hollow icosahedral core [1, 5].',
              'স্তন্যপায়ী প্রাণীর পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স (PDC) হলো ৯.৫ মেগাডাল্টনের এক সুবিশাল ন্যানো-মেশিন যার কেন্দ্রে থাকে E2 এনজাইমের ৬০টি প্রোটিনের এক বিশেষ দ্বাদশ-তলীয় খাঁচা [১, ৫]। ক্রায়ো-ইলেকট্রন মাইক্রোস্কোপিতে দেখা গেছে যে এই খাঁচার বাইরে ৩০টি E1 টেট্রামার (থায়ামিন TPP নির্ভর) এবং ১২টি E3 ডাইমার (FAD নির্ভর) সুসজ্জিত থাকে [১, ৫]।'
            ),
            l(
              'Substrate channeling within the PDC is mediated by flexible, 14-nanometer lipoyl domain arms projecting from E2 subunits [1, 5]. The lipoic acid cofactor is covalently tethered via an amide linkage to the epsilon-amino group of a conserved lysine residue. This swinging arm visits the active site of E1 to accept the acetyl group from hydroxyethyl-TPP, swings across a 40-Angstrom gap to deposit the acetyl group onto Coenzyme A at the E2 active site, and finally visits E3 to transfer two electrons to FAD, regenerating oxidized lipoamide [1, 5].',
              'এই কারখানায় সাবস্ট্রেট পরিবহন ঘটে E2 এনজাইমের ১৪ ন্যানোমিটার দীর্ঘ নমনীয় লাইপোয়েট বাহুর মাধ্যমে [১, ৫]। এই ঝুলন্ত হাতটি E1 থেকে অ্যাসিটাইল গ্রুপ গ্রহণ করে ৪০ অ্যাংস্ট্রম দূরত্ব অতিক্রম করে E2-তে কো-এনজাইম এ-এর হাতে তুলে দেয় এবং শেষে E3-তে গিয়ে ইলেকট্রন মুক্ত করে পুনরায় কাজের জন্য প্রস্তুত হয় [১, ৫]।'
            ),
            l(
              'Allosteric and covalent regulation of the PDC is executed by four dedicated Pyruvate Dehydrogenase Kinase isoforms (PDK1–4) and two Phosphatases (PDP1–2) [1, 5]. High ratios of intramitochondrial NADH/NAD+, acetyl-CoA/CoA, and ATP/ADP allosterically activate PDKs, which phosphorylate three serine residues on the E1-alpha subunit (Ser264, Ser271, Ser203), inducing steric blockade of the TPP catalytic pocket and shutting down glucose oxidation [1, 5].',
              'কোষে শক্তি বেশি থাকলে বা অতিরিক্ত ফ্যাট পুড়লে PDK এনজাইম সক্রিয় হয়ে E1 এনজাইমের সেরিনে ফসফেট লাগিয়ে TPP-এর মুখ বন্ধ করে দেয়, ফলে অপ্রয়োজনীয় গ্লুকোজ অপচয় বন্ধ হয় [১, ৫]।'
            ),
            l(
              'In contrast, elevated pyruvate and ADP inhibit PDKs, while intramitochondrial calcium (surging during muscle contraction) stimulates PDP1, dephosphorylating E1-alpha and unleashing rapid flux through the PDC to support energetic demands [1, 5]. Disruptions in PDC phosphorylation dynamics underpin diabetic metabolic inflexibility and the Warburg effect in oncogenesis.',
              'ব্যায়ামের সময় কোষে ক্যালসিয়াম ও পাইরুভেট বাড়লে PDP এনজাইম ফসফেট খুলে দিয়ে TPP-এর মুখ খুলে দেয় এবং নিমেষের মধ্যে শক্তি উৎপাদন বহুগুণ বাড়িয়ে তোলে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The NAD+ Metabolome, Sirtuin Signaling & Poly(ADP-Ribose) Polymerases', 'NAD+ মেটাবলোম, সার্টুইন সংকেত ও PARP এনজাইম'),
          paragraphs: [
            l(
              'Modern molecular bioenergetics has revolutionized our understanding of Nicotinamide Adenine Dinucleotide (NAD+), demonstrating that it functions not merely as an inert hydride shuttle, but as a critical signaling cosubstrate consumed by regulatory enzymes [1, 5]. In non-redox signaling, NAD+ is consumed as a stoichiometric donor of ADP-ribose moieties by two premier enzyme families: Sirtuins (SIRT1–7) and Poly(ADP-Ribose) Polymerases (PARP1–2) [5].',
              'আধুনিক বায়োএনার্জেটিক্স প্রমাণ করেছে যে নিয়াসিনের NAD+ কেবল ইলেকট্রন বহনের সাধারণ কাজ করে না, বরং এটি জিন নিয়ন্ত্রণকারী সার্টুইন (Sirtuins) এবং ডিএনএ মেরামতকারী PARP এনজাইমগুলোর প্রধান চালিকাশক্তি হিসেবে ব্যবহৃত হয় [১, ৫]।'
            ),
            l(
              'Sirtuins are class III histone/protein deacetylases that remove acetyl groups from lysine residues on histones, transcription factors (p53, PGC-1alpha, NF-kB), and mitochondrial metabolic enzymes [5]. Unlike classical zinc-dependent HDACs, sirtuins cleave the high-energy nicotinamide-ribose bond of NAD+, transferring the acetyl group onto ADP-ribose to generate 2\'-O-acetyl-ADP-ribose and free nicotinamide (NAM) [5]. Nuclear SIRT1 deacetylation of PGC-1alpha stimulates mitochondrial biogenesis and fatty acid oxidation, coupling cellular NAD+ availability to metabolic longevity [5].',
              'সার্টুইন এনজাইমগুলো কোষে NAD+ খরচ করে ডিএনএ-র হিস্টোন এবং PGC-1alpha প্রোটিন থেকে অ্যাসিটাইল গ্রুপ সরিয়ে নতুন মাইটোকন্ড্রিয়া তৈরির নির্দেশ দেয়, যা কোষের দীর্ঘায়ু ও তারুণ্য রক্ষা করে [৫]।'
            ),
            l(
              'Simultaneously, genotoxic oxidative stress activates PARP-1, a nuclear DNA damage sensor that cleaves hundreds of NAD+ molecules to synthesize branching poly(ADP-ribose) polymers on damaged chromatin, recruiting DNA repair machinery [5]. Under massive DNA damage (e.g., severe ischemia or reperfusion injury), hyperactivation of PARP-1 completely depletes the intracellular NAD+ pool within minutes, collapsing cytosolic glycolysis and mitochondrial ATP synthesis, triggering parthanatos (energy-depletion necrotic cell death) [5].',
              'ডিএনএ ক্ষতিগ্রস্ত হলে PARP-1 এনজাইম শত শত NAD+ অণু খরচ করে ডিএনএ মেরামত শুরু করে। কিন্তু ক্ষতি খুব বেশি হলে এটি কোষের সমস্ত NAD+ নিমেষের মধ্যে নিঃশেষ করে ফেলে, যার ফলে শক্তি উৎপাদন শূন্যে নেমে কোষের মৃত্যু ঘটে [৫]।'
            ),
            l(
              'During biological aging, cellular NAD+ levels decline by up to 50%, driven by the upregulation of CD38, a membrane-bound ectoenzyme that avidly hydrolyzes NAD+ into cyclic ADP-ribose [5]. Restoring cellular NAD+ pools using biosynthetic precursors such as Nicotinamide Mononucleotide (NMN) and Nicotinamide Riboside (NR) via the salvage enzyme Nicotinamide Phosphoribosyltransferase (NAMPT) rejuvenates mitochondrial oxidative capacity and suppresses chronic inflammation in preclinical models [5].',
              'বার্ধক্যে কোষে NAD+ প্রায় ৫০% কমে যায় কারণ CD38 এনজাইম একে দ্রুত ধ্বংস করে দেয়; আধুনিক গবেষণায় NMN ও NR সাপ্লিমেন্ট দিয়ে কোষে পুনরায় NAD+ ফিরিয়ে এনে কোষের বার্ধক্য থামানোর চেষ্টা চলছে [৫]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('One-Carbon Pharmacogenomics: MTHFR Polymorphisms & Transsulfuration', 'এক-কার্বন ফার্মাকোজেনোমিক্স: MTHFR ভ্যারিয়েন্ট ও সালফার রূপান্তর'),
          paragraphs: [
            l(
              'The primary control point dictating the partition of one-carbon units between DNA synthesis and epigenetic methylation is the enzyme Methylenetetrahydrofolate Reductase (MTHFR) [3, 4]. MTHFR catalyzes the irreversible reduction of 5,10-methylene-THF (the substrate for thymidylate synthesis) to 5-methyl-THF (the cosubstrate for homocysteine remethylation) [3, 4].',
              'ডিএনএ তৈরি হবে নাকি মিথাইলেশন ঘটবে—এই সিদ্ধান্ত নিয়ন্ত্রণকারী প্রধান এনজাইম হলো MTHFR [৩, ৪]। এটি ৫,১০-মিথিলিন-THF কে অপরিবর্তনীয়ভাবে ৫-মিথাইল-THF এ রূপান্তর করে [৩, ৪]।'
            ),
            l(
              'Human MTHFR harbors common single-nucleotide polymorphisms, most notably the C677T missense mutation (exon 4), which replaces an alanine with a valine residue at position 222 (Ala222Val) in the catalytic domain [3, 4]. The valine substitution destabilizes the binding of its obligate FAD prosthetic group, rendering the enzyme thermolabile at physiological temperatures [1, 3]. Homozygous individuals (677TT genotype, present in 10% to 15% of European and East Asian populations) exhibit a 70% reduction in baseline MTHFR catalytic activity [3, 4].',
              'মানবদেহের MTHFR জিনে C677T নামক একটি অতি-পরিচিত পরিবর্তন দেখা যায়, যার ফলে এনজাইমটির স্থায়িত্ব নষ্ট হয়ে যায় [৩, ৪]। যেসব ব্যক্তির জিনোম হোমোজাইগাস (677TT), তাদের দেহে এই এনজাইমের কার্যক্ষমতা প্রায় ৭০% কমে যায় [৩, ৪]।'
            ),
            l(
              'In the presence of low dietary folate, the 677TT genotype causes impaired remethylation of homocysteine to methionine, precipitating systemic hyperhomocysteinemia, which promotes endothelial dysfunction, uncouples endothelial nitric oxide synthase (eNOS), and increases thromboembolic stroke and neural tube defect risks [3, 6]. However, when dietary folate intake is adequate, the phenotypic defect is virtually silenced, highlighting a classic gene-nutrient interaction [3, 4].',
              'খাদ্যে ফোলেট কম থাকলে 677TT জিনযুক্ত ব্যক্তিদের রক্তে বিষাক্ত হোমোসিস্টিন বেড়ে গিয়ে রক্তনালী ক্ষতিগ্রস্ত হয় এবং স্ট্রোক ও গর্ভস্থ শিশুর মেরুদণ্ডের বিকলাঙ্গতার ঝুঁকি বাড়ে; কিন্তু খাদ্যে পর্যাপ্ত ফোলেট থাকলে এই জিনের ত্রুটি পুরোপুরি ঢেকে যায় [৩, ৬]।'
            ),
            l(
              'Beyond remethylation, excess homocysteine is cleared via the Vitamin B6-dependent transsulfuration pathway: Cystathionine Beta-Synthase (CBS, requiring PLP) condenses homocysteine with serine to form cystathionine, which Cystathionine Gamma-Lyase (CSE, also PLP-dependent) cleaves into cysteine and alpha-ketobutyrate [1, 3]. Cysteine serves as the rate-limiting building block for Glutathione (GSH), demonstrating how B-vitamin coenzymes integrate one-carbon epigenetics with master cellular antioxidant defense.',
              'হোমোসিস্টিন দূর করার বিকল্প পথ হলো ভিটামিন বি৬ নির্ভর ট্রান্সসালফারেশন পথ: CBS এনজাইম হোমোসিস্টিনকে সিস্টিনে রূপান্তর করে যা কোষের প্রধান অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন তৈরির মূল কাঁচামাল হিসেবে ব্যবহৃত হয় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Neurobiology of Subacute Combined Degeneration of the Spinal Cord', 'সুষুম্নাকাণ্ডের সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশনের নিউরোবায়োলজি'),
          paragraphs: [
            l(
              'Subacute Combined Degeneration (SCD) of the spinal cord is the devastating neurological manifestation of prolonged cellular Cobalamin (Vitamin B12) deficiency [1, 4]. The term "combined" refers to the dual involvement of both the posterior (dorsal) columns and the lateral corticospinal tracts of the spinal cord [4].',
              'সুষুম্নাকাণ্ডের সাবঅ্যাকিউট কম্বাইন্ড ডিজেনারেশন (SCD) হলো ভিটামিন বি১২-এর দীর্ঘমেয়াদী ঘাটতিতে স্নায়ুর এক মারাত্মক ধ্বংসাত্মক পতন [১, ৪]। এখানে সুষুম্নাকাণ্ডের পেছনের অনুভূতির পথ এবং পাশের চলাচলের পথ—দুটোই একসাথে ধ্বংস হয়ে যায় [৪]।'
            ),
            l(
              'The molecular pathogenesis of SCD involves two synergistic insults: impaired S-Adenosylmethionine (SAM) generation and toxic branched-chain fatty acid incorporation [4]. Paralysis of Methionine Synthase starves the central nervous system of SAM, which is strictly required for the post-translational methylation of arginine residues on Myelin Basic Protein (MBP) [4]. Unmethylated MBP fails to compact into stable, multilayered myelin sheaths, precipitating spongy vacuolar demyelination of large myelinated sensory axons [4].',
              'এই রোগের মূল কারণ দুটি: প্রথমত, বি১২ না থাকায় SAM তৈরি বন্ধ হয়ে যায়, ফলে স্নায়ুর মায়েলিন প্রোটিনের রূপান্তর বন্ধ হয়ে স্নায়ুর চর্বিযুক্ত খোলস স্পঞ্জের মতো খসে পড়ে [৪]।'
            ),
            l(
              'Concurrently, paralysis of mitochondrial Methylmalonyl-CoA Mutase causes the massive accumulation of methylmalonyl-CoA and propionyl-CoA [4]. Fatty acid synthase mistakenly utilizes these odd-chain, branched precursors in place of malonyl-CoA, incorporating abnormal 15-carbon and 17-carbon branched fatty acids into neural membrane phospholipids, altering membrane fluidity and triggering oligodendrocyte apoptosis [4].',
              'দ্বিতীয়ত, মাইটোকন্ড্রিয়াল এনজাইম অচল হওয়ায় অস্বাভাবিক চর্বির কণা স্নায়ুর কোষে জমা হয়ে স্নায়ুকোষকে মেরে ফেলে [৪]।'
            ),
            l(
              'Clinically, SCD begins symmetrically with distal lower-extremity paresthesias ("pins and needles"), progressing to loss of vibratory sense and proprioception (positive Romberg sign), sensory ataxia, spastic paraparesis, hyperreflexia, and extensor plantar responses (Babinski sign) [1, 4]. If treated with parenteral cobalamin within weeks of onset, myelin sheaths can remyelinate; however, if treatment is delayed beyond 6 to 12 months, axonal transection becomes irreversible, leaving permanent spastic disability [1, 4].',
              'রোগটি প্রথমে পায়ের আঙুলে অবশ ভাব দিয়ে শুরু হয়, পরবর্তীতে কম্পন ও দূরত্বের অনুভূতি নষ্ট হয়ে চোখ বন্ধ করলে রোগী পড়ে যায় (রমবার্গ সাইন) এবং শেষে স্থায়ী প্যারালাইসিস দেখা দেয়; প্রাথমিক অবস্থায় ইনজেকশন না দিলে এই স্নায়বিক ক্ষতি চিরতরে স্থায়ী হয়ে যায় [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Critical Care Neuro-Nutrition: Wernicke Encephalopathy & The Refeeding Trap', 'ক্রিটিক্যাল কেয়ার নিউরো-নিউট্রিশন: ভার্নিক রোগ ও রিফিডিং ফাঁদ'),
          paragraphs: [
            l(
              'Wernicke Encephalopathy is an acute, life-threatening neuropsychiatric emergency caused by severe thiamine (Vitamin B1) deficiency, occurring predominantly in chronic alcohol dependence, severe hyperemesis gravidarum, prolonged fasting, and post-bariatric surgery [1, 2]. The classic diagnostic triad consists of encephalopathy (profound confusion and apathy), oculomotor dysfunction (bilateral abducens nerve palsy and horizontal nystagmus), and gait ataxia [1, 2].',
              'ভার্নিক এনসেফালোপ্যাথি হলো থায়ামিনের (B1) তীব্র ঘাটতিতে মস্তিষ্কের এক মারাত্মক জরুরি অবস্থা যা মূলত মদ্যপান, গর্ভাবস্থার তীব্র বমি, অনাহার বা বেরিয়াট্রিক সার্জারির পর ঘটে [১, ২]। এর তিনটি প্রধান লক্ষণ: তীব্র মানসিক বিভ্রান্তি, চোখের অস্বাভাবিক দ্রুত নড়াচড়া বা দৃষ্টির পক্ষাঘাত এবং হাঁটার ভারসাম্যহীনতা [১, ২]।'
            ),
            l(
              'At the neuropathological level, regions of the brain with the highest rate of glucose and thiamine turnover—specifically the mammillary bodies, periaqueductal gray matter, and medial dorsal thalamic nuclei—undergo acute cellular edema, petechial microvascular hemorrhages, and astrocytic swelling [1, 2]. Thiamine pyrophosphate depletion cripples both Pyruvate Dehydrogenase and alpha-Ketoglutarate Dehydrogenase, collapsing the cerebral ATP/ADP ratio and halting the Na+/K+-ATPase pump [1, 2].',
              'মস্তিষ্কের যেসব অংশ সবচেয়ে বেশি গ্লুকোজ ও থায়ামিন ব্যবহার করে—বিশেষ করে ম্যামিলারি বডি ও থ্যালামাস—সেখানে রক্তক্ষরণ ঘটে এবং কোষ ফুলে ওঠে [১, ২]। TPP না থাকায় মস্তিষ্কে এটিপি তৈরি পুরোপুরি বন্ধ হয়ে যায় [১, ২]।'
            ),
            l(
              'The catastrophic "refeeding trap" occurs when a starved, thiamine-deficient patient is abruptly infused with high-volume intravenous dextrose without prior thiamine administration [1, 2]. The massive influx of glucose forces residual cellular TPP into glycolysis, depleting the final intracellular thiamine reserves within minutes. Blocked pyruvate cascades into massive lactic acidosis, precipitating acute brain death or irreversible Korsakoff Psychosis (dense anterograde and retrograde amnesia with characteristic confabulation) [1, 2].',
              'অনাহারে থাকা রোগীকে থায়ামিন না দিয়ে ভুলবশত আগে গ্লুকোজ স্যালাইন দিলে "রিফিডিং ট্র্যাপ" তৈরি হয় [১, ২]। গ্লুকোজ বিপাক করতে গিয়ে শেষ অবশিষ্ট থায়ামিনটুকুও নিমেষের মধ্যে ফুরিয়ে যায়; ফলে পাইরুভেট ল্যাকটিক অ্যাসিডে পরিণত হয়ে মস্তিষ্কের স্মৃতি কেন্দ্র পুড়িয়ে দেয় এবং রোগী চিরদিনের জন্য অতীতের স্মৃতি হারিয়ে প্রলাপ বকতে থাকে (কোরসাকফ সিন্ড্রোম) [১, ২]।'
            ),
            l(
              'Emergency critical care guidelines mandate immediate high-dose intravenous thiamine (e.g., British National Formulary Pabrinex protocol: 500 mg IV diluted in 100 mL saline over 30 minutes every 8 hours for 72 hours) BEFORE any carbohydrate infusion [1, 2]. Concurrent administration of intravenous magnesium (1–2 g) is strictly required to activate thiamine pyrophosphokinase and allow functional coenzyme assembly.',
              'জরুরি চিকিৎসা নির্দেশিকা অনুযায়ী রোগীকে গ্লুকোজ দেওয়ার আগেই শিরায় ৫০০ মিলিগ্রাম উচ্চমাত্রার থায়ামিন ইনজেকশন দিতে হবে এবং সাথে ম্যাগনেসিয়াম দিতে হবে; অন্যথায় থায়ামিন কোষে সক্রিয় হতে পারবে না [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Translational Frontiers in Coenzyme Biology & Mitochondrial Medicine', 'কো-এনজাইম বায়োলজি ও মাইটোকন্ড্রিয়াল মেডিসিনের ভবিষ্যৎ'),
          paragraphs: [
            l(
              'Translational medicine has revealed that B-vitamin coenzymes sit at the intersection of genetic inborn errors of metabolism and common degenerative diseases [1, 5]. In multiple acyl-CoA dehydrogenase deficiency (MADD / glutaric aciduria type II), missense mutations in electron transfer flavoprotein (ETF) or ETF dehydrogenase cause catastrophic metabolic acidosis; however, a subset of patients exhibit dramatic clinical cure upon administration of high-dose riboflavin (100–300 mg/day), which acts as a chemical chaperone stabilizing the mutant FAD-binding fold [1].',
              'চিকিৎসাবিজ্ঞানের ভবিষ্যৎ গবেষণায় দেখা গেছে যে বি-ভিটামিন অনেক জন্মগত বিপাকীয় রোগ সারাতে পারে [১, ৫]। যেমন কিছু জটিল জন্মগত এনজাইমের ত্রুটিতে উচ্চমাত্রার রিবোফ্লাভিন (B2) দিলে তা এনজাইমের ভাঁজকে ঠিক করে দিয়ে রোগীকে পুরোপুরি সুস্থ করে তোলে [১]।'
            ),
            l(
              'In neurology and oncology, mitochondrial coenzyme transport proteins—such as the mitochondrial folate transporter (MFT / SLC25A32) and the mitochondrial thiamine pyrophosphate transporter (TPC / SLC25A19)—are emerging as precision therapeutic targets [1, 3]. Genetic loss of SLC25A19 causes microcephaly with bilateral striatal necrosis, while pharmacologically inhibiting mitochondrial folate transport starves rapidly proliferating cancer cells of one-carbon units for purine synthesis [1, 3].',
              'মাইটোকন্ড্রিয়ার ভেতরে ভিটামিন পরিবহনকারী বিশেষ প্রোটিনগুলো এখন ক্যান্সার চিকিৎসার নতুন লক্ষ্যবস্তু হিসেবে বিবেচিত হচ্ছে [১, ৩]। ক্যান্সার কোষে ফোলেট পরিবহন বন্ধ করে দিয়ে ক্যান্সারের ডিএনএ তৈরি চিরতরে আটকে দেওয়া সম্ভব হচ্ছে [১, ৩]।'
            ),
            l(
              'Furthermore, synthetic stable NAD+ mimetics, allosteric sirtuin activators (STACs), and targeted microbicidal vitamer analogues are currently undergoing human clinical evaluation to enhance cellular stress resistance, accelerate axonal repair in peripheral neuropathies, and mitigate metabolic decline in type 2 diabetes and neurodegenerative diseases [1, 5].',
              'এছাড়াও আধুনিক গবেষণায় কৃত্রিম NAD+ অণু এবং সার্টুইন সক্রিয়কারী ওষুধ নিয়ে ট্রায়াল চলছে যা ডায়াবেটিস ও স্নায়ুরোগে আক্রান্ত রোগীদের দ্রুত স্নায়ু মেরামত করতে সাহায্য করবে [১, ৫]।'
            ),
            l(
              'These revolutionary insights prove that the B-complex vitamins are far more than passive nutritional supplements: they are exquisitely regulated atomic engines of mitochondrial bioenergetics, epigenetic expression, and human survival [1, 2, 5].',
              'এই যুগান্তকারী আবিষ্কারগুলো প্রমাণ করে যে বি-কমপ্লেক্স ভিটামিনগুলো সাধারণ কোনো খাদ্য উপাদান নয়, বরং এরা হলো মানবদেহের শক্তি উৎপাদন, জিন নিয়ন্ত্রণ এবং বেঁচে থাকার প্রধান আণবিক চালিকাশক্তি [১, ২, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Flowchart tracing B-complex coenzyme metabolism: dietary uptake of eight water-soluble vitamins, enterocyte transport via specialized carriers (THTR1/2, SMVT, PCFT, Cubam), intracellular phosphorylation into active coenzymes (TPP, FAD, NAD+, CoA, PLP, Biotin, THF, Cobalamin), and mitochondrial catalytic integration in the Pyruvate Dehydrogenase Complex, Krebs cycle, and one-carbon methionine remethylation.',
      'বি-কমপ্লেক্স কো-এনজাইম বিপাকের প্রবাহচিত্র: আটটি পানিতে দ্রবণীয় ভিটামিন গ্রহণ, বিশেষ এন্টারোসাইট ট্রান্সপোর্টারের মাধ্যমে শোষণ, কোষে সক্রিয় কো-এনজাইমে রূপান্তর, এবং মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স, ক্রেবস চক্র ও এক-কার্বন ডিএনএ সংশ্লেষণে এদের সমন্বিত ভূমিকা।'
    ),
    steps: [
      l(
        'Step 1: Dietary B-vitamins are absorbed across intestinal enterocytes via dedicated transporters (THTR1/2 for B1, RFVT for B2, SMVT for B5/B7, PCFT for B9, and Cubam receptor endocytosis for B12).',
        'ধাপ ১: খাদ্যের বি-ভিটামিনগুলো বিশেষ ট্রান্সপোর্টারের মাধ্যমে ক্ষুদ্রান্ত্রের এন্টারোসাইট কোষে শোষিত হয়।'
      ),
      l(
        'Step 2: Intracellular kinases and synthases phosphorylate free vitamers into active coenzymes: Thiamine Pyrophosphate (TPP), FMN/FAD, NAD+/NADP+, Coenzyme A, PLP, and THF.',
        'ধাপ ২: কোষের ভেতরে ভিটামিনগুলোর সাথে ফসফেট যুক্ত হয়ে সক্রিয় কো-এনজাইমে (TPP, FAD, NAD+, CoA, PLP, THF) রূপান্তরিত হয়।'
      ),
      l(
        'Step 3: Mitochondrial Pyruvate Dehydrogenase coordinates TPP, FAD, NAD+, and CoA to decarboxylate pyruvate into acetyl-CoA, driving the Krebs TCA cycle and generating ATP via oxidative phosphorylation.',
        'ধাপ ৩: মাইটোকন্ড্রিয়াল পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স চারটি বি-ভিটামিন কো-এনজাইম ব্যবহার করে পাইরুভেটকে অ্যাসিটাইল-CoA তে পরিণত করে শক্তি তৈরি করে।'
      ),
      l(
        'Step 4: Cytosolic folate and cobalamin execute one-carbon methyl transfers to synthesize thymidylate and purines for DNA replication and regenerate methionine from homocysteine.',
        'ধাপ ৪: সাইটোপ্লাজমে ফোলেট ও কোবালামিন এক-কার্বন স্থানান্তরের মাধ্যমে ডিএনএ তৈরি করে এবং বিষাক্ত হোমোসিস্টিন দূর করে স্নায়ুর আবরণী রক্ষা করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old patient with severe alcohol use disorder is admitted with acute confusion, bilateral ophthalmoplegia, and ataxia. An intern initiates intravenous infusion of 5% Dextrose in Water without thiamine. Within 4 hours, the patient lapses into a deep coma with profound arterial lactic acidosis (lactate = 9.8 mmol/L). What is the exact biochemical explanation for this clinical deterioration?',
      'মদ্যপানে অভ্যস্ত ৪৫ বছর বয়সী এক রোগী বিভ্রান্তি, চোখের পক্ষাঘাত ও হাঁটার ভারসাম্যহীনতা নিয়ে হাসপাতালে ভর্তি হন। একজন চিকিৎসক থায়ামিন না দিয়েই দ্রুত গ্লুকোজ স্যালাইন দেওয়া শুরু করেন। ৪ ঘণ্টার মধ্যে রোগী গভীর কোমায় চলে যান এবং রক্তে তীব্র ল্যাকটিক অ্যাসিড (৯.৮ mmol/L) জমে। এই বিপর্যয়ের সঠিক বায়োকেমিক্যাল কারণ কী?'
    ),
    options: [
      l(
        'Rapid glucose influx into thiamine-depleted neurons drives glycolysis to produce pyruvate, but Pyruvate Dehydrogenase cannot function without TPP; blocked pyruvate is rapidly shunted to lactate, causing severe cerebral lactic acidosis and ATP collapse.',
        'থায়ামিনের তীব্র ঘাটতি থাকা অবস্থায় অতিরিক্ত গ্লুকোজ প্রবেশ করায় প্রচুর পাইরুভেট তৈরি হয়; কিন্তু TPP কো-এনজাইম না থাকায় পাইরুভেট ডিহাইড্রোজিনেজ অচল থাকে, ফলে সমস্ত পাইরুভেট ল্যাকটিক অ্যাসিডে রূপান্তরিত হয়ে মস্তিষ্কের শক্তি শূন্য করে কোমা সৃষ্টি করে।'
      ),
      l(
        'Glucose directly binds to Intrinsic Factor in the bloodstream, preventing all vitamin C absorption across the blood-brain barrier.',
        'গ্লুকোজ সরাসরি ইন্ট্রিনসিক ফ্যাক্টরে যুক্ত হয়ে রক্ত-মস্তিষ্ক প্রাচীর দিয়ে ভিটামিন সি প্রবেশ বন্ধ করে দেয়।'
      ),
      l(
        'Dextrose stimulates renal CYP27B1, causing acute hypercalcemic encephalopathy and destruction of basolateral SMVT channels.',
        'গ্লুকোজ কিডনির CYP27B1 বাড়িয়ে রক্তে অতিরিক্ত ক্যালসিয়াম জমিয়ে মস্তিষ্কের কোষ ধ্বংস করে।'
      ),
      l(
        'Glucose irreversibly methylates MTHFR, trapping all cellular folate in erythrocytes and halting fatty acid oxidation.',
        'গ্লুকোজ MTHFR এনজাইমকে ধ্বংস করে লোহিত রক্তকণিকায় সমস্ত ফোলেট আটকে ফেলে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'The Pyruvate Dehydrogenase Complex strictly requires Thiamine Pyrophosphate (TPP) to catalyze the oxidative decarboxylation of pyruvate to acetyl-CoA. Infusing intravenous dextrose loads neurons with glucose, accelerating glycolysis. Without TPP, pyruvate cannot enter the TCA cycle and is overwhelmingly converted by lactate dehydrogenase into lactic acid. The resulting intracellular cerebral lactic acidosis and energetic starvation trigger acute neuronal death in the mammillary bodies and brainstem.',
      'পাইরুভেট থেকে শক্তি তৈরি করতে TPP কো-এনজাইম অপরিহার্য। থায়ামিন না দিয়ে গ্লুকোজ স্যালাইন দিলে কোষে গ্লুকোজ ভাঙার গতি বেড়ে প্রচুর পাইরুভেট জমে যায়; কিন্তু TPP না থাকায় পাইরুভেট শক্তিতে পরিণত হতে না পেরে বিষাক্ত ল্যাকটিক অ্যাসিডে রূপ নেয়। মস্তিষ্কে এই তীব্র অ্যাসিড জমে কোষের শক্তি শূন্য হয়ে মস্তিষ্কের গুরুত্বপূর্ণ অংশ ধ্বংস হয়ে রোগী কোমায় চলে যান।'
    ),
  },
}
