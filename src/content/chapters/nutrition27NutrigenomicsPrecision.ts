import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export const nutrition27NutrigenomicsPrecisionLesson: LessonTopic = {
  id: 'topic.nutrition.nutrigenomics-precision-dietetics',
  slug: 'nutrigenomics-precision-dietetics',
  version: 1,
  updatedAt: '2026-10-26',
  lastReviewed: '2026-10-26',
  title: l(
    '27 · Nutrigenomics, Epigenetics & Precision Functional Dietetics',
    '২৭ · নিউট্রিজেনোমিক্স, এপিজেনেটিক্স ও কার্যকরী নির্ভুল ডায়েটেটিক্স'
  ),
  summary: l(
    'Translational nutritional genomics and personalized medicine: single-nucleotide polymorphisms (MTHFR C677T, APOE-e4, TCF7L2), dietary methyl donors and S-adenosylmethionine (SAMe) DNA methylation, short-chain fatty acid histone deacetylase (HDAC) inhibition, non-coding microRNA modulation, and clinical appraisal of direct-to-consumer genetic panels.',
    'ফলিত পুষ্টি জিনতত্ত্ব ও ব্যক্তিকেন্দ্রিক আধুনিক চিকিৎসাবিজ্ঞান: একক-নিউক্লিওটাইড পলিমরফিজম (MTHFR C677T, APOE-e4, TCF7L2), খাদ্যের মিথাইল দাতা ও এস-অ্যাডেনোসিলমিথিওনিন (SAMe) দ্বারা ডিএনএ মিথাইলেশন, অন্ত্রের ফ্যাটি অ্যাসিডের হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) অবদমন এবং বাণিজ্যিক জেনেটিক টেস্টের ক্লিনিক্যাল মূল্যায়ন।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  objectives: [
    l(
      'Differentiate nutrigenetics, nutrigenomics, and nutritional epigenetics, explaining how dietary bioactives modulate transcription factors (PPARalpha, SREBP-1c, and VDR).',
      'নিউট্রিজেনেটিক্স, নিউট্রিজেনোমিক্স এবং পুষ্টি এপিজেনেটিক্সের পার্থক্য নিরূপণ করা এবং খাদ্যের বায়োঅ্যাক্টিভ যৌগ কীভাবে ট্রান্সক্রিপশন ফ্যাক্টর নিয়ন্ত্রণ করে তা ব্যাখ্যা করা।'
    ),
    l(
      'Analyze the biochemical pathophysiology and clinical dietetic management of canonical polymorphisms, including MTHFR C677T, APOE epsilon-4, and TCF7L2.',
      'MTHFR C677T, APOE epsilon-4 এবং TCF7L2 পলিমরফিজমের আণবিক প্যাথলজি ও প্রমাণভিত্তিক ক্লিনিক্যাল খাদ্য ব্যবস্থাপনা বিশ্লেষণ করা।'
    ),
    l(
      'Detail the one-carbon metabolic cycle linking dietary folate, choline, and cobalamin to the universal methyl donor SAMe and cytosine DNA methylation (DNMT1/3).',
      'খাদ্যের ফোলেট, কোলিন ও কোবালামিনের সাথে সার্বজনীন মিথাইল দাতা SAMe এবং সাইটোসিন ডিএনএ মিথাইলেশন চক্রের জৈবরাসায়নিক সংযোগ ব্যাখ্যা করা।'
    ),
    l(
      'Explain the chromatin remodeling mechanisms of dietary histone deacetylase (HDAC) inhibitors (butyrate, sulforaphane) and post-transcriptional microRNA silencing.',
      'খাদ্য ও জীবাণুঘটিত হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) ইনহিবিটর (বিউটাইরেট, সালফোরাফেন) দ্বারা ক্রোমাটিন শিথিলকরণ এবং মাইক্রো-আরএনএ সাইলেন্সিং প্রক্রিয়া বিস্তারিত আলোচনা করা।'
    ),
    l(
      'Critique the clinical utility, limitations, and ethical guidelines governing direct-to-consumer (DTC) nutrigenetic testing and polygenic risk scores according to international consensus.',
      'আন্তর্জাতিক নির্দেশিকা অনুসারে বাণিজ্যিক নিউট্রিজেনেটিক টেস্ট এবং পলিজেনিক রিস্ক স্কোরের ক্লিনিক্যাল উপযোগিতা, সীমাবদ্ধতা ও নৈতিক দিকসমূহ মূল্যায়ন করা।'
    ),
  ],
  prerequisiteIds: [
    'topic.nutrition.energy-balance-tdee',
    'topic.nutrition.protein-quality-diaas-nitrogen-balance',
  ],
  relatedTopicIds: [
    'topic.nutrition.sports-nutrition-bioenergetics',
    'topic.nutrition.maternal-fetal-lactation-nutrition',
  ],
  references: [
    {
      id: 'ref-ordovas-personalised-nutrition-2018',
      authors: 'Ordovas JM, Ferguson LR, Tai ES, Mathers JC',
      title: 'Personalised nutrition and health',
      organization: 'The BMJ',
      year: 2018,
      url: 'https://doi.org/10.1136/bmj.k2173',
      doi: '10.1136/bmj.k2173',
    },
    {
      id: 'ref-and-nutrigenomics-position-2014',
      authors: 'Camp KM, Trujillo E',
      title: 'Position of the Academy of Nutrition and Dietetics: Nutritional Genomics',
      organization: 'Journal of the Academy of Nutrition and Dietetics',
      year: 2014,
      url: 'https://doi.org/10.1016/j.jand.2013.12.001',
      doi: '10.1016/j.jand.2013.12.001',
    },
    {
      id: 'ref-waterland-jirtle-agouti-2003',
      authors: 'Waterland RA, Jirtle RL',
      title: 'Transposable elements: targets for early nutritional effects on epigenetic gene regulation',
      organization: 'Molecular and Cellular Biology',
      year: 2003,
      url: 'https://doi.org/10.1128/MCB.23.15.5293-5300.2003',
      doi: '10.1128/MCB.23.15.5293-5300.2003',
    },
    {
      id: 'ref-choi-friso-epigenetics-2010',
      authors: 'Choi SW, Friso S',
      title: 'Epigenetics: A New Bridge between Nutrition and Health',
      organization: 'Advances in Nutrition',
      year: 2010,
      url: 'https://doi.org/10.3945/an.110.1004',
      doi: '10.3945/an.110.1004',
    },
    {
      id: 'ref-berry-predict-precision-2020',
      authors: 'Berry SE, Valdes AM, Drew DA, Asnicar F, Mazidi M, Wolf J, et al.',
      title: 'Human postprandial responses to food and potential for precision nutrition',
      organization: 'Nature Medicine',
      year: 2020,
      url: 'https://doi.org/10.1038/s41591-020-0934-0',
      doi: '10.1038/s41591-020-0934-0',
    },
    {
      id: 'ref-corella-ordovas-biomarkers-2014',
      authors: 'Corella D, Ordovas JM',
      title: 'Biomarkers: where nutrition meets genomics',
      organization: 'British Journal of Nutrition',
      year: 2014,
      url: 'https://doi.org/10.1017/S0007114514000300',
      doi: '10.1017/S0007114514000300',
    },
  ],
  evidenceBySection: {
    introduction: ['ref-ordovas-personalised-nutrition-2018', 'ref-and-nutrigenomics-position-2014'],
    structure: ['ref-waterland-jirtle-agouti-2003', 'ref-choi-friso-epigenetics-2010'],
    mechanism: ['ref-choi-friso-epigenetics-2010', 'ref-waterland-jirtle-agouti-2003', 'ref-corella-ordovas-biomarkers-2014'],
    integration: ['ref-ordovas-personalised-nutrition-2018', 'ref-berry-predict-precision-2020'],
    practice: ['ref-and-nutrigenomics-position-2014', 'ref-ordovas-personalised-nutrition-2018', 'ref-corella-ordovas-biomarkers-2014'],
    takeaways: ['ref-ordovas-personalised-nutrition-2018', 'ref-berry-predict-precision-2020', 'ref-and-nutrigenomics-position-2014'],
  },
  levels: {
    foundation: {
      label: l('Foundation · Essential Concepts', 'ভিত্তি · প্রাথমিক ধারণা'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            'The Architecture of Nutritional Genomics & The Three Pillars',
            'পুষ্টি জিনতত্ত্বের মৌলিক রূপরেখা ও এর প্রধান তিনটি স্তম্ভ'
          ),
          paragraphs: [
            l(
              'For decades, standard nutritional science viewed human populations through generalized dietary recommendations, calculating Recommended Dietary Allowances (RDAs) based on population averages [1]. However, clinical practice and everyday observation demonstrate that individuals consuming identical meals exhibit markedly different physiological responses: one individual maintains normal blood glucose and lipids, while another experiences postprandial glycemic spikes or elevated atherogenic cholesterol [1, 2]. Nutritional genomics is the multidisciplinary scientific field that explains this inter-individual variation by examining the bidirectional relationship between our genetic blueprint and the nutrients we ingest [1].',
              'বহু দশক ধরে প্রচলিত পুষ্টিবিজ্ঞান সমগ্র মানবজাতিকে সাধারণ কিছু খাদ্য নির্দেশিকার ছাঁচে দেখেছে, যেখানে জনসংখ্যার গড় হিসাবের ওপর ভিত্তি করে পুষ্টির দৈনিক চাহিদা (RDA) নির্ধারণ করা হতো [১]। কিন্তু চিকিৎসাক্ষেত্রে ও দৈনন্দিন জীবনে প্রতিনিয়ত দেখা যায় যে একই খাবার খেয়ে দুজন মানুষের দেহে সম্পূর্ণ ভিন্ন প্রতিক্রিয়া হয়: একজনের রক্তে শর্করা ও চর্বি স্বাভাবিক থাকে, অথচ অন্যজনের রক্তে মারাত্মক গ্লুকোজ স্পাইক বা ক্ষতিকর কোলেস্টেরল বৃদ্ধি পায় [১, ২]। নিউট্রিশনাল জিনোমিক্স (Nutritional Genomics) হলো এমন এক বহু-শৃঙ্খলা বিজ্ঞান যা আমাদের জিনের গঠন এবং খাদ্যের পুষ্টি উপাদানের দ্বিমুখী মিথস্ক্রিয়া পরীক্ষা করে এই ব্যক্তিগত পার্থক্যের রহস্য উন্মোচন করে [১]।'
            ),
            l(
              'To navigate this domain rigorously, the science is divided into three distinct pillars: nutrigenetics, nutrigenomics, and nutritional epigenetics [1, 2]. Nutrigenetics examines how inherited genetic variations—most commonly single-nucleotide polymorphisms (SNPs)—influence an individual\'s biochemical response to specific nutrients [2]. Nutrigenomics, in contrast, investigates the opposite direction: how dietary bioactives, vitamins, and fatty acids directly alter gene expression, acting as molecular ligands that bind transcription factors to turn specific genes on or off [1].',
              'এই বিষয়টিকে স্পষ্টভাবে অনুধাবন করতে বিজ্ঞানকে তিনটি স্বতন্ত্র স্তম্ভে ভাগ করা হয়েছে: নিউট্রিজেনেটিক্স, নিউট্রিজেনোমিক্স এবং নিউট্রিশনাল এপিজেনেটিক্স [১, ২]। নিউট্রিজেনেটিক্স অনুসন্ধান করে যে মানুষের জন্মগত জিনের বৈচিত্র্য—বিশেষ করে একক-নিউক্লিওটাইড পলিমরফিজম (SNP)—কীভাবে খাদ্যের পুষ্টির প্রতি শরীরের জৈবরাসায়নিক সাড়াকে প্রভাবিত করে [২]। বিপরীতভাবে, নিউট্রিজেনোমিক্স বিশ্লেষণ করে যে খাদ্যের উপাদান, ভিটামিন ও ফ্যাটি অ্যাসিড কীভাবে সরাসরি জিনের প্রকাশ নিয়ন্ত্রণ করে নির্দিষ্ট জিনকে চালু বা বন্ধ করে দেয় [১]।'
            ),
            l(
              'The third pillar, nutritional epigenetics, explores how dietary factors induce chemical modifications to DNA and its associated histone proteins without changing the underlying nucleotide sequence [3, 4]. These modifications—primarily DNA methylation and histone acetylation—act as molecular volume switches, determining whether chromatin is open for transcription or compacted into silence [4]. Epigenetic marks established during embryonic development and throughout life create a durable molecular memory of past nutritional exposures, bridging diet directly to long-term chronic disease risk [3, 4].',
              'তৃতীয় স্তম্ভটি হলো নিউট্রিশনাল এপিজেনেটিক্স, যা পরীক্ষা করে যে কীভাবে খাদ্যের উপাদান ডিএনএ-এর মূল বিন্যাস বা ক্রম পরিবর্তন না করেই ডিএনএ ও হিস্টোন প্রোটিনের ওপর রাসায়নিক পরিবর্তন ঘটায় [৩, ৪]। এই পরিবর্তনগুলো—প্রধানত ডিএনএ মিথাইলেশন এবং হিস্টোন অ্যাসিটাইলেশন—কোষের ভলিউম সুইচের মতো কাজ করে, যা নির্ধারণ করে একটি জিন সক্রিয় থাকবে নাকি স্তব্ধ হয়ে থাকবে [৪]। মাতৃগর্ভে ভ্রূণাবস্থা থেকে শুরু করে সারাজীবনের খাদ্যাভ্যাস এই এপিজেনেটিক মার্কারগুলোর মাধ্যমে দীর্ঘমেয়াদী কোষীয় স্মৃতি তৈরি করে এবং ভবিষ্যৎ জটিল রোগের ঝুঁকি নির্ধারণ করে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Structural Anatomy of Chromatin: Nucleosomes, Histones & CpG Islands',
            'ক্রোমাটিনের গঠনগত রূপ: নিউক্লিওসোম, হিস্টোন ও সিপিজি দ্বীপমালা'
          ),
          paragraphs: [
            l(
              'Within the nucleus of every human cell, approximately two meters of linear DNA must be compacted to fit inside a microscopic sphere measuring only six to ten micrometers in diameter [3]. This monumental feat of packaging is achieved by wrapping the DNA double helix around basic structural proteins called histones [3, 4]. The fundamental repeating unit of chromatin is the nucleosome, which consists of 147 base pairs of DNA wound 1.65 times around an octameric protein core composed of two copies each of the core histones H2A, H2B, H3, and H4 [4].',
              'প্রতিটি মানবকোষের নিউক্লিয়াসের ভেতরে প্রায় দুই মিটার দীর্ঘ ডিএনএ-কে মাত্র ৬ থেকে ১০ মাইক্রোমিটার ব্যাসের এক আণুবীক্ষণিক স্থানে সুরক্ষিতভাবে সংকুচিত করে রাখতে হয় [৩]। এই অভাবনীয় কাজটি সম্পন্ন হয় ডিএনএ ডাবল হেলিক্সকে ক্ষারীয় হিস্টোন প্রোটিনের চারপাশে পেঁচিয়ে রাখার মাধ্যমে [৩, ৪]। ক্রোমাটিনের এই মৌলিক একককে বলা হয় নিউক্লিওসোম, যেখানে ১৪৭টি বেস পেয়ার ডিএনএ একটি হিস্টোন অকটামার কোরের (দুটি করে H2A, H2B, H3 এবং H4 প্রোটিন) চারপাশে ১.৬৫ বার পেঁচিয়ে থাকে [৪]।'
            ),
            l(
              'Protruding from each globular histone core are flexible amino-terminal protein tails enriched with basic amino acid residues, particularly lysine and arginine [4]. Because histones carry a positive electrostatic charge while the phosphodiester backbone of DNA carries a negative charge, strong ionic attractions hold the chromatin tightly condensed in an inactive state known as heterochromatin [4]. In this closed configuration, transcriptional machinery, including RNA polymerase II, cannot physically access gene promoters, rendering the genes transcriptionally silent [3, 4].',
              'প্রতিটি গোলাকার হিস্টোন কোর থেকে নমনীয় প্রোটিন লেজ প্রসারিত থাকে যাতে প্রচুর লাইসিন ও আরজিনিন অ্যামিনো অ্যাসিড সন্নিবেশিত থাকে [৪]। হিস্টোনের ধনাত্মক বৈদ্যুতিক চার্জ এবং ডিএনএ-র ঋণাত্মক ফসফেট ব্যাকবোনের মধ্যকার তীব্র আকর্ষণের কারণে ক্রোমাটিন অত্যন্ত শক্তভাবে সংকুচিত হয়ে হেটারোক্রোমাটিন (heterochromatin) গঠন করে [৪]। এই বন্ধ অবস্থায় আরএনএ পলিমারেজ এনজাইম জিনের প্রমোটরে প্রবেশ করতে পারে না, ফলে সংশ্লিষ্ট জিনগুলো সম্পূর্ণরূপে নিষ্ক্রিয় বা স্তব্ধ থাকে [৩, ৪]।'
            ),
            l(
              'Scattered throughout the human genome, particularly within the promoter regions of approximately 70% of human genes, are dense clusters of cytosine and guanine dinucleotides linked by phosphodiester bonds, known as CpG islands [3, 4]. Under resting physiological conditions, CpG islands in active promoters remain unmethylated, leaving the surrounding chromatin accessible (euchromatin) [4]. However, when dietary methyl groups are transferred onto the 5-carbon position of these cytosine rings, the resulting 5-methylcytosine recruits transcriptional repressor complexes, cementing durable gene silencing [3, 4].',
              'মানব জিনোমের প্রায় ৭০% জিনের প্রমোটর অংশে সাইটোসিন ও গুয়ানিনের ঘন সন্নিবেশ থাকে, যাদেরকে সিপিজি দ্বীপমালা (CpG islands) বলা হয় [৩, ৪]। স্বাভাবিক সক্রিয় অবস্থায় এই সিপিজি দ্বীপগুলো মিথাইলমুক্ত থাকে, যার ফলে ক্রোমাটিন শিথিল (ইউক্রোমাটিন) থেকে জিন প্রকাশ অব্যাহত রাখে [৪]। কিন্তু খাদ্যের মিথাইল উপাদান যখন সাইটোসিনের ৫-কার্বন অবস্থানে যুক্ত হয়ে ৫-মিথাইলসাইটোসিন তৈরি করে, তখন তা জিনকে চেপে ধরে এবং দীর্ঘমেয়াদে সেটিকে সম্পূর্ণ নিষ্ক্রিয় করে দেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'The Methylation Cycle & Single-Nucleotide Polymorphisms (MTHFR & APOE)',
            'মিথাইলেশন চক্র ও একক-নিউক্লিওটাইড রূপভেদ (MTHFR ও APOE)'
          ),
          paragraphs: [
            l(
              'DNA methylation is fueled by the one-carbon metabolic pathway, an elegant biochemical relay that transforms dietary micronutrients into the universal cellular methyl donor, S-adenosylmethionine (SAMe) [3, 4]. Dietary folate (vitamin B9) is reduced and methylated through a series of enzymatic steps into 5-methyltetrahydrofolate (5-MTHF). The enzyme methionine synthase (dependent upon cobalamin, vitamin B12) then transfers this methyl group from 5-MTHF onto homocysteine, remethylating it to form the essential amino acid methionine [3]. Methionine is then adenylated by ATP to yield SAMe, which donates its activated methyl group (-CH3) to DNA methyltransferases (DNMTs) to methylate cytosine bases [3, 4].',
              'ডিএনএ মিথাইলেশন পরিচালিত হয় ওয়ান-কার্বন বিপাকীয় চক্রের মাধ্যমে, যা খাদ্যের পুষ্টি উপাদানকে কোষের সার্বজনীন মিথাইল দাতা এস-অ্যাডেনোসিলমিথিওনিন (SAMe)-এ রূপান্তরিত করে [৩, ৪]। খাদ্যের ফোলেট একাধিক এনজাইমের মাধ্যমে ৫-মিথাইলটেট্রাহাইড্রোফোলেটে (5-MTHF) পরিণত হয়। এরপর ভিটামিন বি১২-নির্ভর মিথিওনিন সিন্থেজ এনজাইম এই মিথাইল গ্রুপটি হোমোসিস্টাইনে স্থানান্তর করে মিথিওনিন তৈরি করে [৩]। মিথিওনিন এটিপির সাথে যুক্ত হয়ে SAMe গঠন করে, যা ডিএনএ মিথাইলট্রান্সফারেজ (DNMT) এনজাইমকে মিথাইল গ্রুপ দান করে সাইটোসিন ডিএনএ মিথাইলেশন সম্পন্ন করে [৩, ৪]।'
            ),
            l(
              'A critical rate-limiting enzyme in this cascade is methylenetetrahydrofolate reductase (MTHFR), which synthesizes 5-MTHF [1, 2]. A common genetic variant, the MTHFR C677T polymorphism (rs1801133), involves a cytosine-to-thymine transition at nucleotide position 677, substituting alanine with valine in the enzyme\'s catalytic domain [2]. Individuals who are homozygous for this variant (677TT genotype) experience a 60% to 70% reduction in MTHFR enzymatic activity and increased thermolability. Without targeted dietetic intervention (adequate riboflavin/B2 cofactor and methylfolate), 677TT individuals exhibit impaired SAMe production, elevated plasma homocysteine (a potent cardiovascular and neurovascular risk factor), and global DNA hypomethylation [1, 2].',
              'এই চক্রের একটি প্রধান গতি নিয়ন্ত্রক এনজাইম হলো মিথিলিনটেট্রাহাইড্রোফোলেট রিডাক্টেজ (MTHFR), যা 5-MTHF তৈরি করে [১, ২]। এই জিনের একটি অতি পরিচিত রূপভেদ হলো MTHFR C677T পলিমরফিজম, যেখানে ৬৭৭ নম্বর অবস্থানে সাইটোসিনের বদলে থাইমিন বসে এনজাইমের কার্যক্ষমতা ৬০% থেকে ৭০% কমিয়ে দেয় [২]। যেসব ব্যক্তির এই হোমোজাইগাস (677TT) মিউটেশন থাকে, তাদের দেহে SAMe তৈরি বাধাগ্রস্ত হয় এবং রক্তে ক্ষতিকর হোমোসিস্টাইন বৃদ্ধি পেয়ে হৃদরোগ ও স্ট্রোকের ঝুঁকি বহুগুণ বেড়ে যায় [১, ২]।'
            ),
            l(
              'In lipid metabolism, the Apolipoprotein E (APOE) polymorphism on chromosome 19 profoundly dictates cardiovascular and neurocognitive dietetic responses [1, 2]. Three major codominant alleles exist: epsilon-2 (e2), epsilon-3 (e3, the wild type), and epsilon-4 (e4). The presence of the e4 allele alters the electrostatic charge and three-dimensional conformation of ApoE, increasing its binding affinity for very-low-density lipoprotein (VLDL) and downregulating hepatic LDL receptor clearance [2]. Individuals carrying even one e4 allele exhibit hyper-reactivity to dietary saturated fatty acids and unesterified cholesterol, developing marked elevations in atherogenic small dense LDL particles and increased risk of early atherosclerosis and late-onset Alzheimer\'s disease [1, 2].',
              'লিপিড বিপাকের ক্ষেত্রে ১৯ নম্বর ক্রোমোজোমে অবস্থিত অ্যাপোলিপোপ্রোটিন ই (APOE) পলিমরফিজম হৃদরোগ ও মস্তিষ্কের পুষ্টির প্রতিক্রিয়া নিয়ন্ত্রণ করে [১, ২]। এর তিনটি প্রধান রূপ রয়েছে: e2, e3 এবং e4। যাদের দেহে e4 রূপভেদ থাকে, তাদের ApoE প্রোটিনের আকৃতি পরিবর্তিত হয়ে যকৃতের এলডিএল রিসেপ্টর কমিয়ে দেয় [২]। একজন ব্যক্তি কেবল একটি e4 অ্যালিল বহন করলেই তিনি খাবারে স্যাচুরেটেড চর্বি ও কোলেস্টেরলের প্রতি অতিসংবেদনশীল হয়ে ওঠেন, যার ফলে রক্তে দ্রুত ক্ষতিকর এলডিএল কণা বৃদ্ধি পায় এবং অকাল হৃদরোগ ও স্মৃতিভ্রম রোগের ঝুঁকি তৈরি হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'Systems Biology: Gut Microbiota Epigenetic Signaling & Gene Expression',
            'সিস্টেমস বায়োলজি: অন্ত্রের মাইক্রোবায়োটা, এপিজেনেটিক সংকেত ও জিন প্রকাশ'
          ),
          paragraphs: [
            l(
              'Nutritional genomics does not stop at human enzymes; it integrates the metabolic outputs of the hundred trillion microorganisms comprising the intestinal gut microbiome [1, 5]. When anaerobic gut bacteria ferment non-digestible dietary fibers and resistant starches, they generate high concentrations of short-chain fatty acids (SCFAs), predominantly acetate, propionate, and butyrate [1]. Far from serving solely as colonic epithelial fuel, butyrate acts as a potent biological histone deacetylase (HDAC) inhibitor [4].',
              'নিউট্রিজেনোমিক্স কেবল মানবকোষের এনজাইমেই সীমাবদ্ধ নয়; এটি অন্ত্রের শত কোটি মাইক্রোবায়োম জীবাণুর বিপাকীয় পদার্থের সাথে সরাসরি সমন্বয় ঘটায় [১, ৫]। অন্ত্রের উপকারী অবাত ব্যাকটেরিয়া যখন খাদ্যের অপাচ্য আঁশ ও রেজিসট্যান্ট স্টার্চ গাঁজন করে, তখন তারা প্রচুর শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) তৈরি করে, যার মধ্যে প্রধান হলো বিউটাইরেট [১]। বিউটাইরেট কেবল অন্ত্রকোষের খাদ্য নয়, বরং এটি একটি শক্তিশালী প্রাকৃতিক হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) ইনহিবিটর হিসেবে কাজ করে [৪]।'
            ),
            l(
              'By inhibiting class I and II HDACs within colonocytes and systemic immune cells, microbial butyrate prevents the removal of acetyl groups from histone lysine residues [4]. Histone acetyltransferases (HATs) neutralize the positive charge of histones, relaxing the chromatin into an open euchromatic conformation. This transcriptional de-repression induces expression of the tumor suppressor gene p21 (CDKN1A) and the master anti-inflammatory transcription factor Foxp3, promoting regulatory T-cell (Treg) differentiation and defending against colorectal carcinogenesis and systemic metabolic endotoxemia [1, 4].',
              'অন্ত্রের কোষ এবং রোগপ্রতিরোধ কোষে HDAC এনজাইমকে বাধা দেওয়ার মাধ্যমে বিউটাইরেট হিস্টোন থেকে অ্যাসিটাইল গ্রুপ মুছে ফেলা বন্ধ করে [৪]। হিস্টোন অ্যাসিটাইলট্রান্সফারেজ (HAT) এনজাইম হিস্টোনের ধনাত্মক চার্জ নিরপেক্ষ করে ক্রোমাটিনকে শিথিল ইউক্রোমাটিনে রূপান্তর করে। এই পরিবর্তনের ফলে ক্যান্সার দমনকারী p21 জিন এবং প্রদাহনাশক Foxp3 জিন সক্রিয় হয়ে ওঠে, যা প্রতিরক্ষামূলক টি-রেগুলেটরি কোষ তৈরি করে বৃহদান্ত্রের ক্যান্সার ও সিস্টেমিক প্রদাহ থেকে শরীরকে রক্ষা করে [১, ৪]।'
            ),
            l(
              'Furthermore, dietary polyunsaturated fatty acids (PUFAs) act as direct nuclear receptor ligands [1, 2]. Long-chain omega-3 fatty acids (EPA and DHA) physically enter the nuclear compartment and bind peroxisome proliferator-activated receptor alpha (PPARalpha) [1]. Ligand-bound PPARalpha heterodimerizes with the retinoid X receptor (RXR), binding peroxisome proliferator response elements (PPREs) in gene promoters to transcribe enzymes of mitochondrial and peroxisomal beta-oxidation while simultaneously trans-repressing NF-kappa-B, shutting down systemic inflammatory signaling [1, 2].',
              'তাছাড়া, খাদ্যের পলিআনস্যাচুরেটেড ফ্যাটি অ্যাসিড (PUFA) সরাসরি কোষকেন্দ্রের রিসেপ্টর লিগ্যান্ড হিসেবে কাজ করে [১, ২]। ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA ও DHA) কোষকেন্দ্রে প্রবেশ করে পিপিএআর-আলফা (PPARalpha) রিসেপ্টরে যুক্ত হয় [১]। এই যুক্ত কমপ্লেক্স রেটিনয়েড এক্স রিসেপ্টরের (RXR) সাথে মিলে ফ্যাটি অ্যাসিড জারণের এনজাইম তৈরি বাড়িয়ে দেয় এবং একই সাথে মারাত্মক প্রদাহ সংকেত NF-kB-কে বন্ধ করে দিয়ে শরীরজুড়ে বিপাকীয় সুস্থতা ফিরিয়ে আনে [১, ২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'Clinical Appraisal of Genetic Testing Panels & Ethical Practice',
            'বাণিজ্যিক জেনেটিক টেস্টের ক্লিনিক্যাল মূল্যায়ন ও পুষ্টিবিজ্ঞানের নীতিশাস্ত্র'
          ),
          paragraphs: [
            l(
              'The proliferation of direct-to-consumer (DTC) commercial genetic testing kits has created widespread confusion in clinical dietetics [1, 2]. Many commercial panels analyze isolated single-nucleotide polymorphisms and claim to prescribe bespoke "DNA diets" (e.g., low-carb vs. low-fat based on single genes like FTO or PPARG) [2]. The Academy of Nutrition and Dietetics (AND) published an authoritative position statement establishing that the routine use of nutrigenetic testing for dietary advice is not currently justified as a standalone clinical tool due to the polygenic complexity of common chronic diseases [2].',
              'বাণিজ্যিক ডাইরেক্ট-টু-কনজিউমার (DTC) জেনেটিক টেস্ট কিটের অতিপ্রসার চিকিৎসাক্ষেত্রে তীব্র বিভ্রান্তির সৃষ্টি করেছে [১, ২]। অনেক বাণিজ্যিক কোম্পানি দু-একটি বিচ্ছিন্ন জিন (যেমন FTO বা PPARG) পরীক্ষা করে দাবি করে যে তারা ডিএনএ-ভিত্তিক নিখুঁত খাদ্যতালিকা দিতে পারে [২]। আমেরিকান একাডেমি অব নিউট্রিশন অ্যান্ড ডায়েটেটিক্স (AND) একটি স্পষ্ট নির্দেশিকা জারি করেছে যেখানে বলা হয়েছে যে জটিল রোগগুলো শত শত জিনের সমন্বয়ে ঘটে; তাই একক জিনের ওপর ভিত্তি করে বাণিজ্যিক ডিএনএ ডায়েট প্রেসক্রিপশন করা চিকিৎসাগতভাবে নির্ভরযোগ্য নয় [২]।'
            ),
            l(
              'Most metabolic conditions—including obesity, Type 2 diabetes, and coronary artery disease—are polygenic, influenced by hundreds of small-effect alleles that interact dynamically with physical activity, circadian rhythm, psychological stress, and socioeconomic environment [1, 2]. While single-gene penetrance exists for monogenic inborn errors of metabolism (such as phenylketonuria or familial hypercholesterolemia), common variants each contribute less than 1% to 2% to total disease phenotypic variance [1, 5]. Evaluating diet solely through single-SNP panels without multi-omic validation risks unnecessary dietary restrictions, orthorexia, and misdirected therapeutic effort [1, 2].',
              'স্থূলতা, টাইপ-২ ডায়াবেটিস এবং হৃদরোগের মতো জটিল সমস্যাগুলো পলিজেনিক (polygenic), যা শত শত জিনের অতি সামান্য অবদানের সমষ্টি এবং যা ব্যায়াম, ঘুম, মানসিক চাপ ও খাদ্যের সাথে প্রতিনিয়ত পরিবর্তিত হয় [১, ২]। জন্মগত কিছু একক জিনের রোগ (যেমন পিকেইউ বা ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া) ছাড়া সাধারণ জিনের প্রতিটি রূপভেদ রোগের মাত্র ১% থেকে ২% ঝুঁকি তৈরি করে [১, ৫]। তাই পূর্ণাঙ্গ রক্ত পরীক্ষা ও জীবনযাত্রা মূল্যায়ন না করে কেবল জেনেটিক রিপোর্টের ওপর ভিত্তি করে কঠোর খাদ্য নিষেধ আরোপ করা হিতে বিপরীত হতে পারে [১, ২]।'
            ),
            l(
              'Evidence-based precision functional dietetics integrates genomics as one component within a broader multi-omic diagnostic framework [1, 5]. Rather than relying on genetic blueprints alone, advanced clinicians combine genomic profiling with continuous glucose monitoring (CGM), comprehensive lipid subfraction testing, metabolomic organic acid profiles, and gut microbiome metagenomic sequencing [1, 5]. This multi-layered precision approach identifies the individual\'s dynamic biochemical phenotype, ensuring nutritional therapies are personalized, safe, and clinically effective [1, 2].',
              'প্রমাণভিত্তিক আধুনিক প্রিসিশন ডায়েটেটিক্স জিনতত্ত্বকে কেবল একটি সহায়ক উপাদান হিসেবে সামগ্রিক মাল্টি-ওমিক কাঠামোর মধ্যে যুক্ত করে [১, ৫]। জিন রিপোর্টের পাশাপাশি দক্ষ চিকিৎসকরা সার্বক্ষণিক রক্তের শর্করা ট্র্যাকিং (CGM), উন্নত লিপিড উপ-ভগ্নাংশ পরীক্ষা, রক্ত ও প্রস্রাবের মেটাবোলাইটস এবং অন্ত্রের মাইক্রোবায়োম সিকোয়েন্সিংকে একত্রিত করেন [১, ৫]। এই সমন্বিত মূল্যায়ন একজন ব্যক্তির বর্তমান জীবন্ত শারীরবৃত্তীয় অবস্থাকে নিখুঁতভাবে তুলে ধরে, যা নিরাপদ ও সর্বোচ্চ কার্যকর ব্যক্তিকেন্দ্রিক পুষ্টি থেরাপির পথ সুগম করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Core Tenets of Nutritional Genomics & Precision Functional Dietetics',
            'নিউট্রিজেনোমিক্স ও কার্যকরী নির্ভুল ডায়েটেটিক্সের মূল শিক্ষণীয় সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'Nutritional genomics encompasses three interconnected pillars: nutrigenetics (how SNPs like MTHFR C677T and APOE-e4 dictate individual nutrient metabolism), nutrigenomics (how dietary bioactives like PUFAs bind transcription factors to regulate gene expression), and nutritional epigenetics (how dietary methyl donors and HDAC inhibitors modulate chromatin accessibility without altering DNA sequence) [1, 2, 4].',
              'পুষ্টি জিনতত্ত্ব তিনটি মূল স্তম্ভে গঠিত: নিউট্রিজেনেটিক্স (জিনের রূপভেদ কীভাবে পুষ্টি উপাদান প্রক্রিয়া করে), নিউট্রিজেনোমিক্স (খাদ্যের উপাদান কীভাবে সরাসরি জিন প্রকাশ নিয়ন্ত্রণ করে), এবং নিউট্রিশনাল এপিজেনেটিক্স (ডিএনএ পরিবর্তন ছাড়াই খাদ্যের মিথাইল ও অ্যাসিটাইল মার্কার কীভাবে জিনকে চালু বা বন্ধ রাখে) [১, ২, ৪]।'
            ),
            l(
              'The one-carbon cycle transforms dietary folate, choline, and vitamin B12 into SAMe, the obligate methyl donor for DNA methyltransferases that maintain promoter CpG island methylation [3, 4]. Microbial butyrate and cruciferous sulforaphane act as biological HDAC inhibitors, relaxing heterochromatin into transcriptionally active euchromatin to induce tumor suppressors (p21) and anti-inflammatory regulatory T-cells [1, 4].',
              'ওয়ান-কার্বন বিপাকীয় চক্র খাদ্যের ফোলেট, কোলিন ও ভিটামিন বি১২-কে SAMe-তে রূপান্তরিত করে ডিএনএ মিথাইলেশন সম্পন্ন করে [৩, ৪]। অন্ত্রের বিউটাইরেট এবং ব্রোকলির সালফোরাফেন প্রাকৃতিকভাবে HDAC এনজাইমকে বাধা দিয়ে ক্রোমাটিন শিথিল করে এবং ক্যান্সার প্রতিরোধী জিন (p21) সক্রিয় করে দেহকে সুরক্ষিত রাখে [১, ৪]।'
            ),
            l(
              'Direct-to-consumer genetic panels prescribing simplistic single-gene diets lack independent clinical validity because polygenic chronic diseases reflect complex multi-omic gene-environment interactions [1, 2]. True precision nutrition integrates genomics with metabolomics, postprandial glucose dynamics, and microbiome phenotyping to deliver scientifically validated, individualized medical nutrition therapy [1, 5].',
              'বাণিজ্যিক জেনেটিক টেস্ট কিটের একক জিনের ডায়েট বিজ্ঞানসম্মত নয়, কারণ ক্রনিক রোগগুলো বহুবিধ জিনের জটিল সমন্বয় [১, ২]। প্রকৃত নির্ভুল পুষ্টিবিজ্ঞান জিনতত্ত্বের সাথে বিপাকীয় মেটাবোলাইটস, খাদ্যোত্তর গ্লুকোজ রেসপন্স এবং মাইক্রোবায়োমকে একীভূত করে রোগীর জন্য কার্যকর ও নিরাপদ পথ্য নির্ধারণ করে [১, ৫]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic · Molecular Pathways & Epigenetic Mechanisms', 'একাডেমিক · আণবিক সংকেত ও এপিজেনেটিক নিয়ন্ত্রণ'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            'Ligand-Activated Nuclear Receptor Networks: PPAR, SREBP & VDR',
            'লিগ্যান্ড-সক্রিয় নিউক্লিয়ার রিসেপ্টর নেটওয়ার্ক: PPAR, SREBP ও VDR'
          ),
          paragraphs: [
            l(
              'Nutrigenomics operates mechanistically through ligand-activated transcription factors belonging to the nuclear hormone receptor superfamily [1, 2]. Among these, the peroxisome proliferator-activated receptors (PPARalpha, PPARgamma, and PPARbeta/delta) serve as premier cellular sensors for dietary fatty acids and eicosanoids [2]. Upon binding lipophilic dietary ligands within their C-terminal ligand-binding domain (LBD), PPARs undergo an allosteric conformational shift that recruits coactivator complexes (such as steroid receptor coactivator 1, SRC-1, and p300/CBP) with intrinsic histone acetyltransferase activity [1, 2].',
              'নিউট্রিজেনোমিক্স মূলত নিউক্লিয়ার হরমোন রিসেপ্টর পরিবারের লিগ্যান্ড-সক্রিয় ট্রান্সক্রিপশন ফ্যাক্টরের মাধ্যমে আণবিক স্তরে পরিচালিত হয় [১, ২]। এর মধ্যে পারক্সিজোম প্রলিফেরেটর-অ্যাক্টিভেটেড রিসেপ্টর (PPARalpha, PPARgamma, PPARbeta/delta) খাদ্যের ফ্যাটি অ্যাসিড ও ইকোসানয়েডের প্রধান কোষীয় সেন্সর হিসেবে কাজ করে [২]। খাদ্যের স্নেহ-দ্রবণীয় লিগ্যান্ড এদের বাইন্ডিং ডোমেনে যুক্ত হলে রিসেপ্টরের গঠন পরিবর্তিত হয় এবং তা হিস্টোন অ্যাসিটাইলট্রান্সফারেজ ক্ষমতাসম্পন্ন কো-অ্যাক্টিভেটর প্রোটিনকে ডেকে নিয়ে আসে [১, ২]।'
            ),
            l(
              'The activated PPAR heterodimerizes with the 9-cis retinoic acid receptor (retinoid X receptor, RXR) [2]. This heterodimer translocates to promoter regions containing peroxisome proliferator response elements (PPREs, defined by the consensus direct repeat hexamer sequence AGGTCA spaced by one nucleotide, DR-1) [2]. PPARalpha upregulates the transcription of carnitine palmitoyltransferase-1A (CPT-1A), acyl-CoA oxidase (ACOX1), and apolipoprotein A-I, thereby driving hepatic beta-oxidation and high-density lipoprotein (HDL) synthesis while clearing circulating triacylglycerols [1, 2].',
              'সক্রিয় PPAR তখন রেটিনয়েড এক্স রিসেপ্টরের (RXR) সাথে ডাইমার গঠন করে জিনের প্রমোটরে থাকা পিপিআরই (PPRE, AGGTCA সিকোয়েন্স) অংশে যুক্ত হয় [২]। যকৃতে PPARalpha ফ্যাটি অ্যাসিড জারণের CPT-1A, অ্যাসাইল-কোএ অক্সিডেজ (ACOX1) এবং উপকারী অ্যাপোলিপোপ্রোটিন এ-১ তৈরি বাড়িয়ে দেয়, যার ফলে রক্ত থেকে ক্ষতিকর ট্রাইগ্লিসারাইড দূর হয় এবং ভালো এইচডিএল বৃদ্ধি পায় [১, ২]।'
            ),
            l(
              'Conversely, dietary carbohydrates, specifically high-fructose and high-glucose surges, activate sterol regulatory element-binding protein 1c (SREBP-1c) and carbohydrate response element-binding protein (ChREBP) [1, 2]. SREBP-1c is synthesized as an inactive precursor embedded in the endoplasmic reticulum membrane, bound to SCAP (SREBP cleavage-activating protein). Insulin signaling stimulates SCAP-dependent translocation to the Golgi apparatus, where site-1 and site-2 proteases (S1P and S2P) liberate the active basic helix-loop-helix transcription factor domain [2]. This nuclear fragment binds sterol response elements (SREs), executing coordinated transcriptional induction of fatty acid synthase (FASN), acetyl-CoA carboxylase (ACC1), and stearoyl-CoA desaturase-1 (SCD1), fueling hepatic de novo lipogenesis [1, 2].',
              'বিপরীতভাবে, অতিরিক্ত শর্করা ও ফ্রুক্টোজ গ্রহণ এসআরইবিপি-১সি (SREBP-1c) এবং সিএইচআরইবিপি (ChREBP) ট্রান্সক্রিপশন ফ্যাক্টরকে সক্রিয় করে [১, ২]। ইনসুলিন সংকেত এন্ডোপ্লাজমিক রেটিকুলাম থেকে SREBP-1c-কে গলগি বডিতে পাঠিয়ে দেয়, যেখানে প্রোটিয়েজ এনজাইম এর সক্রিয় অংশটি কেটে আলাদা করে দেয় [২]। এই সক্রিয় অংশটি কোষকেন্দ্রে প্রবেশ করে ফ্যাটি অ্যাসিড সিন্থেজ (FASN) ও এসিটাইল-কোএ কার্বক্সিলেজ (ACC1) সক্রিয় করে যকৃতে চর্বি জমার (De Novo Lipogenesis) মারাত্মক প্রক্রিয়া শুরু করে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Histone Octamer Modification Topology & The Epigenetic Histone Code',
            'হিস্টোন অকটামার পরিবর্তনের বায়োকেমিক্যাল টপোলজি ও এপিজেনেটিক কোড'
          ),
          paragraphs: [
            l(
              'The molecular architecture of transcriptional regulation is codified within post-translational modifications decorating the unstructured N-terminal tails of core histones, a biological paradigm known as the "histone code" [3, 4]. Within the nucleosome, histone H3 features several critical lysine (K) and arginine (R) residues subject to reversible covalent modification: lysine acetylation, lysine and arginine methylation, serine phosphorylation, and lysine ubiquitination [4]. Each specific mark recruits specialized effector chromatin-remodeling proteins containing conserved recognition modules, notably bromodomains (which bind acetylated lysines) and chromodomains (which bind methylated lysines) [4].',
              'জিন প্রকাশের আণবিক ভাষা নিয়ন্ত্রিত হয় হিস্টোন প্রোটিনের লেজে থাকা অ্যামিনো অ্যাসিডের কোভ্যালেন্ট পরিবর্তনের মাধ্যমে, যাকে "হিস্টোন কোড" বলা হয় [৩, ৪]। নিউক্লিওসোমের মধ্যে হিস্টোন H3-এর বেশ কিছু নির্দিষ্ট লাইসিন (K) ও আরজিনিন (R) অ্যামিনো অ্যাসিড বিপরীতমুখী রাসায়নিক পরিবর্তনের শিকার হয়: লাইসিন অ্যাসিটাইলেশন, মিথাইলেশন ও ফসফোরাইলেশন [৪]। প্রতিটি নির্দিষ্ট রাসায়নিক মার্কার ব্রোমোডোমেন (যা অ্যাসিটাইলেশন শনাক্ত করে) এবং ক্রোমোডোমেন (যা মিথাইলেশন শনাক্ত করে) প্রোটিনকে আকৃষ্ট করে জিন নিয়ন্ত্রণ করে [৪]।'
            ),
            l(
              'Histone acetylation, catalyzed by histone acetyltransferases (HATs, such as p300/CBP and GCN5), transfers an acetyl group from acetyl-CoA onto the epsilon-amino group of lysine residues (e.g., H3K9ac, H3K14ac, and H3K27ac) [4]. By neutralizing the positive charge of the basic lysine side chain, acetylation abolishes the electrostatic interaction between the histone tail and the negatively charged DNA phosphate backbone [4]. The chromatin fiber decompresses from a 30 nm solenoid into an open 10 nm "beads-on-a-string" euchromatin fiber, permitting transcription factors and the pre-initiation complex to bind DNA promoters [3, 4].',
              'হিস্টোন অ্যাসিটাইলট্রান্সফারেজ (HAT) এনজাইম অ্যাসিটাইল-কোএ থেকে একটি অ্যাসিটাইল গ্রুপ নিয়ে হিস্টোন লাইসিনের (যেমন H3K9ac, H3K27ac) সাথে যুক্ত করে [৪]। এই অ্যাসিটাইলেশন হিস্টোনের ধনাত্মক চার্জ নষ্ট করে দেয়, যার ফলে ডিএনএ-র ঋণাত্মক ফসফেটের সাথে এর বাঁধন আলগা হয়ে যায় [৪]। সংকুচিত ক্রোমাটিন মুহূর্তের মধ্যে শিথিল হয়ে একটি মুক্ত কাঠামোর সৃষ্টি করে, যার ফলে ট্রান্সক্রিপশন ফ্যাক্টর ও আরএনএ পলিমারেজ সহজেই জিন পড়তে ও প্রকাশ করতে পারে [৩, ৪]।'
            ),
            l(
              'Conversely, histone methylation exhibits high contextual nuance depending on the specific residue and degree of methylation (mono-, di-, or trimethylation) [4]. Trimethylation of histone H3 at lysine 4 (H3K4me3) is an active promoter mark that recruits nucleosome-remodeling factors to initiate transcription. In contrast, trimethylation of histone H3 at lysine 9 (H3K9me3) or lysine 27 (H3K27me3), catalyzed by polycomb repressive complex 2 (PRC2 / EZH2), serves as a permanent heterochromatic silencing mark [3, 4]. Dietary methyl donor availability (SAMe) directly dictates the substrate kinetics of histone methyltransferases (HMTs), mechanistically linking one-carbon nutrition to the maintenance or erasure of histone chromatin landscapes [3, 4].',
              'বিপরীতভাবে, হিস্টোন মিথাইলেশন অত্যন্ত সুনির্দিষ্ট ও দ্বিমুখী আচরণ প্রদর্শন করে [৪]। হিস্টোন H3-এর ৪ নম্বর লাইসিনের ট্রাইমিথাইলেশন (H3K4me3) জিনকে সক্রিয় করে তুললেও, ৯ নম্বর (H3K9me3) বা ২৭ নম্বর লাইসিনের ট্রাইমিথাইলেশন (H3K27me3) জিনকে চিরতরে স্তব্ধ বা নিষ্ক্রিয় করে দেয় [৩, ৪]। খাদ্যের মিথাইল দাতার (SAMe) সরবরাহ সরাসরি এই মিথাইলট্রান্সফারেজ এনজাইমের গতি নিয়ন্ত্রণ করে, যা প্রমাণ করে যে আমাদের খাদ্য কীভাবে হিস্টোন কোডকে নতুন করে সাজিয়ে তোলে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'The SAM/SAH Ratio & DNA Methyltransferase Kinetics (DNMT1 vs. DNMT3a/b)',
            'SAM/SAH অনুপাত ও ডিএনএ মিথাইলট্রান্সফারেজের আণবিক গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Enzymatic DNA methylation in mammals is executed by a family of DNA methyltransferases (DNMTs) utilizing SAMe as the sole methyl donor [3, 4]. DNMT1 is the maintenance methyltransferase, exhibiting a 30- to 40-fold kinetic preference for hemimethylated DNA generated during semi-conservative replication forks. DNMT1 tracks replication machinery via proliferating cell nuclear antigen (PCNA), faithfully copying established methylation patterns from the parental strand onto the nascent daughter strand [3]. In contrast, DNMT3a and DNMT3b are de novo methyltransferases that establish new methylation marks on previously unmethylated CpG dinucleotides during embryogenesis and cellular differentiation [3, 4].',
              'স্তন্যপায়ী প্রাণীর ডিএনএ মিথাইলেশন সম্পন্ন হয় ডিএনএ মিথাইলট্রান্সফারেজ (DNMT) পরিবারের এনজাইম দ্বারা, যারা SAMe-কে একমাত্র মিথাইল দাতা হিসেবে ব্যবহার করে [৩, ৪]। DNMT1 হলো রক্ষণাবেক্ষণকারী এনজাইম, যা কোষ বিভাজনের সময় পুরাতন ডিএনএ স্ট্র্যান্ড থেকে নতুন স্ট্র্যান্ডে হুবহু আগের মিথাইলেশন প্যাটার্ন অনুলিপি করে [৩]। অন্যদিকে, DNMT3a এবং DNMT3b হলো নতুন (de novo) মিথাইলট্রান্সফারেজ, যা ভ্রূণ বিকাশ ও কোষীয় রূপান্তরের সময় নতুন সিপিজি সাইটে প্রথমবারের মতো মিথাইল গ্রুপ বসিয়ে দেয় [৩, ৪]।'
            ),
            l(
              'The transmethylation reaction yields S-adenosylhomocysteine (SAH) as an obligatory byproduct [3]. SAH is a potent, competitive product inhibitor of both DNMTs and histone methyltransferases, binding their catalytic pockets with higher affinity than SAMe itself [3, 4]. The enzyme S-adenosylhomocysteine hydrolase (SAHH) reversibly hydrolyzes SAH into adenosine and homocysteine, driving the equilibrium forward only if homocysteine and adenosine are rapidly metabolized or cleared [3]. Therefore, the intracellular SAM-to-SAH ratio serves as the critical "methylation index" or cellular methylation potential; a decline in the SAM/SAH ratio shuts down DNMT activity, resulting in passive replication-dependent global DNA hypomethylation [3, 4].',
              'মিথাইল হস্তান্তরের পর উপজাত হিসেবে এস-অ্যাডেনোসিলহোমোসিস্টাইন (SAH) তৈরি হয় [৩]। এই SAH হলো DNMT ও হিস্টোন এনজাইমগুলোর এক মারাত্মক প্রতিযোগী বাধার কারণ (Inhibitor), যা SAMe-এর চেয়েও শক্তভাবে এনজাইমে আটকে থাকে [৩, ৪]। SAH হাইড্রোলেজ এনজাইম একে ভেঙে অ্যাডিনোসিন ও হোমোসিস্টাইন তৈরি করে, যা দ্রুত অপসারিত না হলে জমা হতে থাকে। তাই কোষের SAM/SAH অনুপাত হলো মিথাইলেশনের মূল চালিকাশক্তি; এই অনুপাত কমে গেলে DNMT এনজাইম কাজ বন্ধ করে দেয় এবং ডিএনএ-র সার্বিক মিথাইলেশন ভেঙে পড়ে [৩, ৪]।'
            ),
            l(
              'The landmark viable yellow agouti (Avy) mouse experiment by Waterland and Jirtle (2003) provided empirical proof of dietary epigenetic rescue [3]. The Avy allele contains an intracisternal A particle (IAP) retrotransposon upstream of the agouti gene. When pregnant agouti dams were fed an unsupplemented control diet, the IAP retrotransposon remained hypomethylated, driving constitutive ectopic agouti expression that produced yellow, hyperphagic, obese, and diabetic offspring [3]. However, when pregnant dams were supplemented with methyl donors (folic acid, choline, betaine, and vitamin B12), the IAP retrotransposon became heavily methylated and silenced, shifting the offspring phenotype entirely toward brown, lean, and metabolically normal mice [3, 4].',
              'ওয়াটারল্যান্ড ও জার্টলের (২০০৩) ঐতিহাসিক আগৌটি (Agouti) ইঁদুরের গবেষণা প্রমাণ করেছে যে খাদ্যের পুষ্টি উপাদান সরাসরি জিনের প্রকাশ পরিবর্তন করে রোগ নিরাময় করতে পারে [৩]। আগৌটি জিনের মুখে একটি রেট্রোট্রান্সপোসন উপাদান থাকে। গর্ভবতী ইঁদুরকে সাধারণ খাবার দিলে এই অংশটি মিথাইলমুক্ত থেকে হলুদ রঙের অতিভোজী, স্থূল ও ডায়াবেটিসে আক্রান্ত বাচ্চা জন্ম দিত [৩]। কিন্তু খাবারের সাথে মিথাইল দাতা (ফলিক অ্যাসিড, কোলিন, বিটেইন ও বি১২) যোগ করার ফলে সেই রেট্রোট্রান্সপোসন অংশটি মিথাইলেশনের মাধ্যমে স্থায়ীভাবে স্তব্ধ হয়ে যায়, যার ফলে তাদের সন্তানেরা বাদামী রঙের, রোগমুক্ত ও সম্পূর্ণ সুস্থ হয়ে জন্ম নেয় [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'Non-Coding RNAs, MicroRNA Silencing & Dietary Phytochemical Modulators',
            'নন-কোডিং আরএনএ, মাইক্রো-আরএনএ সাইলেন্সিং ও উদ্ভিজ্জ ফাইটোকেমিক্যালের প্রভাব'
          ),
          paragraphs: [
            l(
              'In addition to chromatin architecture, nutritional genomics encompasses post-transcriptional gene silencing mediated by small non-coding microRNAs (miRNAs) [1, 4]. MicroRNAs are 20 to 22 nucleotide non-coding single-stranded RNA molecules transcribed from genomic DNA by RNA polymerase II. Following sequential processing by the nuclear microprocessor complex (Drosha/DGCR8) and cytoplasmic cleavage by Dicer, the mature miRNA is loaded into the RNA-induced silencing complex (RISC), containing an Argonaute protein (AGO2) [4].',
              'ক্রোমাটিনের বাইরেও নিউট্রিজেনোমিক্স নন-কোডিং মাইক্রো-আরএনএ (miRNA) দ্বারা জিনের অনুবাদ স্তব্ধ করার প্রক্রিয়া অন্তর্ভুক্ত করে [১, ৪]। মাইক্রো-আরএনএ হলো ২০ থেকে ২২ নিউক্লিওটাইড দীর্ঘ ছোট একক-তন্ত্রী আরএনএ অণু যা আরএনএ পলিমারেজ ২ দ্বারা তৈরি হয়। ড্রশা (Drosha) ও ডাইসার (Dicer) এনজাইম দিয়ে কাটার পর পরিণত মাইক্রো-আরএনএ আর্গোনাট প্রোটিন (AGO2) সহযোগে রিক্স (RISC) সাইলেন্সিং কমপ্লেক্সে যুক্ত হয় [৪]।'
            ),
            l(
              'The miRNA guide strand directs RISC to bind complementary sequences in the 3\'-untranslated region (3\'-UTR) of target messenger RNAs [4]. Imperfect Watson-Crick base pairing between the miRNA "seed region" (nucleotides 2 to 8) and target mRNA leads to translational repression, deadenylation, and accelerated mRNA decapping and degradation [4]. Dietary phytochemicals act as potent modulators of miRNA transcription: epigallocatechin-3-gallate (EGCG from green tea), curcumin (from turmeric), and resveratrol (from grape skins) upregulate miR-16, miR-34a, and miR-143, downregulating oncogenic cyclins and downregulating pro-inflammatory cytokines such as TNF-alpha and IL-6 [1, 4].',
              'এই মাইক্রো-আরএনএ তখন লক্ষ্যবস্তু এমআরএনএ-এর লেজে যুক্ত হয়ে সেটির প্রোটিন অনুবাদ পুরোপুরি আটকে দেয় এবং তাকে ধ্বংস করে ফেলে [৪]। খাদ্যের উদ্ভিজ্জ ফাইটোকেমিক্যাল এই মাইক্রো-আরএনএ তৈরি নিয়ন্ত্রণ করতে পারে: গ্রিন টির ইজিসিজির (EGCG), হলুদের কারকিউমিন এবং আঙুরের রেসভেরাট্রল প্রদাহনাশক ও ক্যান্সার প্রতিরোধী মাইক্রো-আরএনএ (যেমন miR-16, miR-34a) তৈরি বাড়িয়ে দেয়, যা ক্ষতিকর সাইটোকাইন (TNF-alpha, IL-6) দমন করে দেহকে রক্ষা করে [১, ৪]।'
            ),
            l(
              'Concurrently, cruciferous sulforaphane and allium organosulfur compounds exert synergistic epigenetic actions [4]. Sulforaphane functions as a dual epigenetic modifier, simultaneously inhibiting class I and II HDACs to reactivate silenced tumor suppressor genes while promoting the nuclear accumulation of Nrf2 (nuclear factor erythroid 2-related factor 2). Nrf2 binds antioxidant response elements (AREs), transcribing phase II detoxification enzymes (glutathione S-transferase, NAD(P)H:quinone oxidoreductase 1) and restoring redox balance [1, 4].',
              'একই সাথে ব্রোকলি ও বাঁধাকপির সালফোরাফেন এবং রসুনের অর্গানোসালফার উপাদান শক্তিশালী এপিজেনেটিক সমন্বয় ঘটায় [৪]। সালফোরাফেন একই সাথে HDAC এনজাইম বন্ধ করে স্তব্ধ থাকা প্রতিরোধী জিনকে পুনরুজ্জীবিত করে এবং Nrf2 ট্রান্সক্রিপশন ফ্যাক্টরকে কোষকেন্দ্রে পাঠিয়ে অ্যান্টিঅক্সিডেন্ট এনজাইম (গ্লুটাথিয়ন এস-ট্রান্সফারেজ) তৈরি বহুগুণ বাড়িয়ে দেয়, যা কোষের জারণ চাপ ও বিষাক্ত পদার্থ দূর করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'The PREDICT Studies, Polygenic Risk Scores & Evidence-Based Personalization',
            'প্রেডিক্ট (PREDICT) গবেষণা, পলিজেনিক রিস্ক স্কোর ও প্রমাণভিত্তিক ব্যক্তিকেন্দ্রিক পুষ্টি'
          ),
          paragraphs: [
            l(
              'The landmark PREDICT 1 (Personalised Responses to Dietary Composition Trial) study published in Nature Medicine by Berry et al. (2020) definitively reshaped precision nutritional science [5]. Examining 1,002 healthy twin and non-twin individuals across identical standardized meals, the researchers demonstrated that postprandial glycemic and triglyceride responses varied up to eight- to ten-fold between individuals [5]. Identical twins sharing 100% of their genomic sequence exhibited markedly discordant postprandial metabolic excursions, demonstrating that genetics accounted for less than 50% of the variance in glucose and less than 10% in lipid responses [5].',
              'নেচার মেডিসিনে প্রকাশিত বেরি এবং তার সহকর্মীদের (২০২০) ঐতিহাসিক প্রেডিক্ট ১ (PREDICT 1) গবেষণা ব্যক্তিকেন্দ্রিক পুষ্টিবিজ্ঞানকে নতুন রূপ দিয়েছে [৫]। ১,০০২ জন যমজ ও অ-যমজ মানুষের ওপর একই খাবার দিয়ে পরীক্ষা করে গবেষকরা দেখেন যে খাবার খাওয়ার পর রক্তে গ্লুকোজ ও ট্রাইগ্লিসারাইডের ওঠানামা বিভিন্ন মানুষের মধ্যে ৮ থেকে ১০ গুণ পর্যন্ত ভিন্ন হতে পারে [৫]। শতভাগ অভিন্ন জিন বহনকারী জমজ ভাইদের মধ্যেও খাদ্যোত্তর বিপাকীয় প্রতিক্রিয়ায় বিশাল ব্যবধান লক্ষ্য করা যায়, যা প্রমাণ করে যে গ্লুকোজ পরিবর্তনের ৫০% এবং চর্বি পরিবর্তনের ৯০%-এর বেশি জিনের বাইরে অন্যান্য উপাদানের ওপর নির্ভরশীল [৫]।'
            ),
            l(
              'The PREDICT investigators discovered that the human gut microbiome composition, meal timing, sleep architecture, and circadian disruption accounted for far greater predictive power over postprandial lipemia and glycemia than inherited host genetics alone [5]. Machine-learning models integrating gut microbiome metagenomics, continuous interstitial glucose metrics, and clinical biomarkers predicted postprandial excursions with twice the accuracy of nutritional models based on macronutrient percentages or single-nucleotide polymorphisms [1, 5].',
              'প্রেডিক্ট গবেষকরা আবিষ্কার করেন যে খাদ্যোত্তর শর্করা ও চর্বি নিয়ন্ত্রণের পেছনে একক জিনের চেয়ে অন্ত্রের মাইক্রোবায়োমের গঠন, খাওয়ার সময়, ঘুমের মান এবং জৈবিক ঘড়ির ছন্দ অনেক বেশি প্রভাব ফেলে [৫]। কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং মডেল যখন অন্ত্রের জীবাণু, সার্বক্ষণিক গ্লুকোজ ট্র্যাকিং এবং রক্তের বায়োমার্কারকে একত্রিত করে, তখন তা যেকোনো সাধারণ জেনেটিক টেস্টের চেয়ে দ্বিগুণ নিখুঁতভাবে রোগীর খাদ্যতালিকা তৈরি করতে পারে [১, ৫]।'
            ),
            l(
              'In clinical practice, Polygenic Risk Scores (PRS) aggregate the weighted effect sizes of hundreds or thousands of low-penetrance SNPs identified in genome-wide association studies (GWAS) [1, 2]. While a high PRS for Type 2 diabetes or coronary disease identifies elevated baseline genetic susceptibility, large-scale prospective cohort data (including the UK Biobank) confirm that an optimal Mediterranean-style lifestyle and dietary adherence reduces relative cardiovascular and diabetic risk by 40% to 50%, regardless of whether genetic risk is low, intermediate, or high [1, 2]. Genetic susceptibility is thus not an unalterable biological destiny, but an informative backdrop that underscores the paramount clinical value of lifestyle medicine [1, 5].',
              'চিকিৎসাক্ষেত্রে পলিজেনিক রিস্ক স্কোর (PRS) হাজার হাজার ক্ষুদ্র জিনের সম্মিলিত ঝুঁকি পরিমাপ করে [১, ২]। ডায়াবেটিস বা হৃদরোগের জন্য কারো জন্মগত ঝুঁকি খুব বেশি থাকা সত্ত্বেও, ইউকে বায়োব্যাংকের মতো বিশাল গবেষণায় দেখা গেছে যে একটি স্বাস্থ্যকর ভূমধ্যসাগরীয় খাদ্যাভ্যাস এবং নিয়মিত ব্যায়াম সেই ঝুঁকি প্রায় ৪০% থেকে ৫০% পর্যন্ত কমিয়ে দিতে পারে [১, ২]। সুতরাং, জিনের ঝুঁকি কোনো অপরিবর্তনীয় ভাগ্য নয়; বরং তা সঠিক পুষ্টি ও জীবনযাত্রার অপরিসীম গুরুত্বকেই চিকিৎসাগতভাবে পুনঃপ্রতিষ্ঠা করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Academic Synthesis of Nutritional Epigenomics & Systems Dietetics',
            'পুষ্টি এপিজেনোমিক্স ও সিস্টেমস ডায়েটেটিক্সের একাডেমিক চূড়ান্ত মূল্যায়ন'
          ),
          paragraphs: [
            l(
              'Nutritional genomics integrates nuclear receptor signaling (PPARalpha, SREBP-1c, VDR) with chromatin remodeling: dietary fatty acids bind PPARs to promote beta-oxidation, while glucose surges drive SREBP-1c cleavage to execute de novo lipogenesis [1, 2].',
              'পুষ্টি জিনতত্ত্ব নিউক্লিয়ার রিসেপ্টর সংকেতকে ক্রোমাটিনের গঠনের সাথে যুক্ত করে: খাদ্যের ওমেগা-৩ ফ্যাটি অ্যাসিড PPAR সক্রিয় করে চর্বি জারণ বাড়ায়, যেখানে অতিরিক্ত শর্করা SREBP-1c সক্রিয় করে যকৃতে চর্বি জমার সূত্রপাত করে [১, ২]।'
            ),
            l(
              'The one-carbon methylation cycle is anchored by MTHFR, converting folate into 5-MTHF for cobalamin-dependent homocysteine remethylation into methionine and SAMe, preserving the critical SAM/SAH ratio required to sustain DNMT1 maintenance and DNMT3 de novo DNA methylation [3, 4]. Microbial butyrate inhibits class I/II HDACs to relax chromatin and induce tumor suppressor p21, while phytochemicals modulate post-transcriptional microRNA silencing complexes [1, 4].',
              'ওয়ান-কার্বন মিথাইলেশন চক্রে MTHFR এনজাইম ফোলেট থেকে SAMe তৈরি করে, যা SAM/SAH অনুপাত বজায় রেখে ডিএনএ মিথাইলেশন অক্ষুণ্ণ রাখে [৩, ৪]। অন্ত্রের বিউটাইরেট HDAC এনজাইম অবদমিত করে টিউমার দমনকারী p21 জিন সক্রিয় করে, আর উদ্ভিজ্জ ফাইটোকেমিক্যাল মাইক্রো-আরএনএ নিয়ন্ত্রণের মাধ্যমে প্রদাহ দমন করে [১, ৪]।'
            ),
            l(
              'The PREDICT clinical trials and UK Biobank evidence demonstrate that host genetics accounts for only a fraction of phenotypic postprandial variability; precision dietetics must integrate microbiome metagenomics, continuous glucose tracking, and multi-omic phenotyping rather than relying upon simplistic single-gene direct-to-consumer panels [1, 2, 5].',
              'প্রেডিক্ট গবেষণা ও বৈজ্ঞানিক তথ্য প্রমাণ করে যে মানব জিন খাদ্যের মোট প্রতিক্রিয়ার একটি সামান্য অংশের জন্য দায়ী; তাই প্রকৃত নির্ভুল ডায়েটেটিক্স বাণিজ্যিক একক-জিনের টেস্ট কিটের পরিবর্তে অন্ত্রের জীবাণু, গ্লুকোজ ট্র্যাকিং এবং পূর্ণাঙ্গ মেটাবলিক ফেনোটাইপিংকে সমন্বিত করে কাজ করে [১, ২, ৫]।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced · Systems Biology & Clinical Trials', 'উন্নত · সিস্টেমস বায়োলজি ও ক্লিনিক্যাল ট্রায়াল'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            'Nutrigenomic Epigenetics: CpG DNA Methylation Landscapes & Epigenome-Wide Association',
            'নিউট্রিজেনমিক এপিজেনেটিক্স: সিপিজি ডিএনএ মিথাইলেশন ল্যান্ডস্কেপ ও EWAS গবেষণা'
          ),
          paragraphs: [
            l(
              'The contemporary paradigm of nutritional epigenomics examines human biology through Epigenome-Wide Association Studies (EWAS), mapping differential DNA methylation across more than 850,000 CpG sites at single-nucleotide resolution [1, 3]. In contrast to the static human germline genome, the cellular epigenome is dynamic and plastic, undergoing continuous remodeling in response to nutritional exposures, maternal metabolic states, and cumulative environmental bioenergetics [3, 4]. EWAS investigations in large prospective cohorts reveal that dietary patterns—such as the Mediterranean diet, high-saturated-fat Western diets, and chronic ultra-processed carbohydrate intake—leave characteristic DNA methylation signatures in peripheral blood leukocytes and visceral adipose tissue [1, 3].',
              'আধুনিক পুষ্টি এপিজেনোমিক্স এপিজেনোম-ওয়াইড অ্যাসোসিয়েশন স্টাডিজ (EWAS)-এর মাধ্যমে মানবদেহের ৮,৫০,০০০-এরও বেশি সিপিজি সাইটে ডিএনএ মিথাইলেশন পরীক্ষা করে [১, ৩]। মানুষের অপরিবর্তনীয় মূল জিনোম থেকে ভিন্ন হয়ে কোষের এপিজেনোম অত্যন্ত নমনীয় ও গতিশীল, যা খাদ্যাভ্যাস, মাতৃগর্ভের অবস্থা এবং পরিবেশের দ্বারা প্রতিনিয়ত পরিবর্তিত হয় [৩, ৪]। গবেষণায় প্রমাণিত হয়েছে যে ভূমধ্যসাগরীয় খাদ্যাভ্যাস বা অতিরিক্ত জাঙ্ক ফুড খাওয়ার ফলে রক্তকোষ ও পেটের চর্বিকোষের ডিএনএ মিথাইলেশনে স্পষ্ট ও দীর্ঘস্থায়ী ছাপ পড়ে [১, ৩]।'
            ),
            l(
              'Differential methylation at specific loci directly predicts long-term cardiometabolic risk [1, 3]. For example, hypermethylation at the ABCG1 (ATP-binding cassette transporter G1) gene locus impairs reverse cholesterol transport and lipid efflux to HDL, correlating strongly with postprandial hypertriglyceridemia and coronary calcification [3, 4]. Concurrently, hypomethylation at the CPT1A promoter region upregulates carnitine palmitoyltransferase-1A expression, enhancing long-chain fatty acid beta-oxidation and protecting against hepatic steatosis [3]. These findings illustrate that DNA methylation functions not merely as a passive biomarker, but as an active transducer translating dietary exposures into altered cellular metabolic flux [1, 3].',
              'নির্দিষ্ট জিনের মিথাইলেশন সরাসরি ভবিষ্যৎ হৃদরোগ ও বিপাকীয় জটিলতার পূর্বাভাস দেয় [১, ৩]। উদাহরণস্বরূপ, ABCG1 জিনের অতিরিক্ত মিথাইলেশন শরীর থেকে অতিরিক্ত কোলেস্টেরল অপসারণে বাধা দেয়, যা রক্তনালিতে চর্বি জমা ও ব্লক তৈরির ঝুঁকি তৈরি করে [৩, ৪]। বিপরীতে, CPT1A প্রমোটরে মিথাইলেশন হ্রাস পেলে তা ফ্যাটি অ্যাসিড জারণের এনজাইম বাড়িয়ে যকৃতে চর্বি জমা (ফ্যাটি লিভার) রোধ করে [৩]। এই আবিষ্কারগুলো প্রমাণ করে যে ডিএনএ মিথাইলেশন কোনো নিষ্ক্রিয় ছাপ নয়, বরং এটি খাদ্যের উপস্থিতিকে কোষীয় শক্তিপ্রবাহে রূপান্তর করার এক জীবন্ত সেতু [১, ৩]।'
            ),
            l(
              'Furthermore, nutritional epigenetics provides the molecular explanation for the Developmental Origins of Health and Disease (DOHaD) hypothesis [3]. Periconceptional and gestational maternal nutrition creates epigenetic imprints upon fetal developmental genes that persist into adult life. The landmark Dutch Hunger Winter Families Study demonstrated that individuals conceived during the 1944-1945 famine exhibited persistent hypomethylation at the imprinted IGF2 (insulin-like growth factor 2) locus six decades later, accompanied by elevated rates of obesity, atherogenic dyslipidemia, and schizophrenia [3, 4].',
              'তাছাড়া, পুষ্টি এপিজেনেটিক্স ডিওএইচএডি (DOHaD) ধারণার আণবিক ভিত্তি ব্যাখ্যা করে, যা প্রমাণ করে যে মাতৃগর্ভে শিশুর পুষ্টি প্রাপ্তবয়স্ক জীবনের রোগ প্রতিরোধ ক্ষমতা নির্ধারণ করে [৩]। দ্বিতীয় বিশ্বযুদ্ধের সময় নেদারল্যান্ডসের ঐতিহাসিক দুর্ভিক্ষে গর্ভধারণ করা শিশুদের ওপর ৬০ বছর পর পরীক্ষা করে দেখা গেছে যে তাদের IGF2 জিনের মিথাইলেশনে স্থায়ী পরিবর্তন এসেছিল, যার ফলে প্রাপ্তবয়স্ক জীবনে তাদের স্থূলতা, রক্তে চর্বি এবং মানসিক রোগের হার সাধারণ মানুষের চেয়ে বহুগুণ বেশি ছিল [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Structural Enzymology of One-Carbon Metabolism: MTHFR, CBS & The Methionine Cycle',
            'ওয়ান-কার্বন বিপাকের গঠনগত এনজাইমবিদ্যা: MTHFR, CBS ও মিথিওনিন চক্র'
          ),
          paragraphs: [
            l(
              'The structural enzymology of one-carbon transfer relies on the tight structural coordination of mitochondrial and cytosolic enzymatic compartments [3]. Mitochondrial serine hydroxymethyltransferase (SHMT2) transfers the hydroxymethyl group of serine to tetrahydrofolate (THF), generating 5,10-methylenetetrahydrofolate (5,10-methylene-THF) and glycine [3]. Formate exported from the mitochondria into the cytosol replenishes cytosolic one-carbon units. In the cytosol, methylenetetrahydrofolate reductase (MTHFR) exists as an obligate homodimer containing an N-terminal catalytic domain and a C-terminal regulatory domain that binds SAMe as an allosteric inhibitor [1, 3].',
              'ওয়ান-কার্বন স্থানান্তরের এনজাইমীয় গঠন মাইটোকন্ড্রিয়া এবং সাইটোসোলের এনজাইম প্রকোষ্ঠের নিবিড় সমন্বয়ের ওপর নির্ভরশীল [৩]। মাইটোকন্ড্রিয়াল এসএইচএমটি-২ (SHMT2) সেরিন থেকে হাইড্রোক্সিমিথাইল গ্রুপ নিয়ে 5,10-মিথিলিন-THF তৈরি করে সাইটোসোলে পাঠায় [৩]। সাইটোসোলে MTHFR এনজাইম একটি হোমোটাইমার হিসেবে কাজ করে যার একটি অনুঘটক অংশ এবং একটি নিয়ন্ত্রণ অংশ থাকে যা SAMe দ্বারা অ্যালোস্টেরিক বাধার মাধ্যমে সুষম থাকে [১, ৩]।'
            ),
            l(
              'The common C677T point mutation in MTHFR disrupts the binding interface for the flavin adenine dinucleotide (FAD) prosthetic group [1, 2]. FAD, derived from dietary riboflavin (vitamin B2), stabilizes the homodimer. In the presence of the 677T allele, FAD dissociates readily from the catalytic pocket, causing subunit dissociation, thermal instability, and rapid proteasomal degradation [2]. This molecular defect explains why targeted riboflavin supplementation (2.0 to 10.0 mg/day) functions as a pharmacological chaperone: saturating the prosthetic pocket with FAD stabilizes the mutant enzyme homodimer, restoring catalytic throughput and lowering homocysteine in homozygous 677TT individuals without requiring megadose synthetic folic acid [1, 2].',
              'MTHFR-এর C677T মিউটেশন মূলত রিবোফ্লাভিন (ভিটামিন বি২) থেকে প্রাপ্ত FAD কো-ফ্যাক্টরের সাথে এনজাইমের বন্ধনকে দুর্বল করে দেয় [১, ২]। এই মিউটেশন থাকলে FAD সহজে এনজাইম থেকে খুলে যায়, যার ফলে এনজাইমটি ভেঙে নষ্ট হয়ে যায় [২]। এই আণবিক প্রক্রিয়াটি ব্যাখ্যা করে যে কেন প্রতিদিন সামান্য পরিমাণ রিবোফ্লাভিন (২ থেকে ১০ মিলিগ্রাম) সাপ্লিমেন্ট একটি জাদুকরী ওষুধ হিসেবে কাজ করে: এটি FAD দিয়ে এনজাইমের পকেট পূর্ণ করে তাকে পুনরায় মজবুত করে এবং সিন্থেটিক ফলিক অ্যাসিড ছাড়াই হোমোজাইগাস 677TT রোগীদের রক্তে হোমোসিস্টাইন স্বাভাবিক করে দেয় [১, ২]।'
            ),
            l(
              'Homocysteine clearance occurs via two competing pathways: remethylation to methionine (via B12-dependent methionine synthase or choline-derived betaine-homocysteine S-methyltransferase, BHMT) or irreversible transsulfuration into cysteine via cystathionine beta-synthase (CBS, a pyridoxal 5\'-phosphate/B6-dependent enzyme) [1, 3]. When cellular SAMe concentrations are high, SAMe allosterically inhibits MTHFR while simultaneously activating CBS, shunting excess homocysteine away from the transmethylation cycle and into glutathione biosynthesis to bolster cellular antioxidant defenses [3, 4].',
              'হোমোসিস্টাইন অপসারণ দুটি প্রতিদ্বন্দ্বী পথে ঘটে: পুনরায় মিথিওনিনে রূপান্তর (বি১২ বা কোলিন দিয়ে) অথবা ভিটামিন বি৬-নির্ভর সিবিএস (CBS) এনজাইম দিয়ে সিস্টাইনে স্থায়ী রূপান্তর [১, ৩]। কোষে যখন পর্যাপ্ত SAMe থাকে, তখন তা MTHFR-কে থামিয়ে দিয়ে CBS এনজাইমকে দ্রুত চালু করে দেয়, যার ফলে অতিরিক্ত হোমোসিস্টাইন ভেঙে পরম উপকারী অ্যান্টিঅক্সিডেন্ট গ্লুটাথিয়ন তৈরি করে কোষকে সুরক্ষিত রাখে [৩, ৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'Histone Deacetylase (HDAC) Enzymatic Kinetics & Chromatin Remodeling',
            'হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইমীয় গতিবিদ্যা ও ক্রোমাটিন রিমডেলিং'
          ),
          paragraphs: [
            l(
              'Histone deacetylases (HDACs) catalyze the hydrolytic cleavage of acetyl groups from lysine residues within histone tails, restoring the positive charge of the amino terminal and driving chromatin condensation [4]. Eighteen human HDACs are categorized into four classes: zinc-dependent Class I, IIa, IIb, and IV HDACs, and NAD+-dependent Class III sirtuins (SIRT1-7) [4]. Zinc-dependent HDACs feature a narrow catalytic channel with a zinc ion (Zn2+) coordinated by conserved histidine and aspartate residues at its base, which activates a bound water molecule for nucleophilic attack on the acetyl-lysine amide bond [4].',
              'হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইম হিস্টোন প্রোটিনের লাইসিন থেকে অ্যাসিটাইল গ্রুপ কেটে আলাদা করে ফেলে, যার ফলে হিস্টোন পুনরায় ধনাত্মক চার্জ ফিরে পেয়ে ক্রোমাটিনকে শক্তভাবে চেপে ধরে [৪]। মানুষের ১৮টি HDAC এনজাইম চার ভাগে বিভক্ত: জিংক-নির্ভর ক্লাস ১, ২, ৪ এবং এনএডি-নির্ভর ক্লাস ৩ সার্টুইন (SIRT1-7) [৪]। জিংক-নির্ভর এনজাইমগুলোর ভেতরে একটি অতি সরু আণবিক সুড়ঙ্গ এবং তলায় একটি জিংক আয়ন থাকে, যা পানির অণু ব্যবহার করে অ্যাসিটাইল বন্ধন ভেঙে দেয় [৪]।'
            ),
            l(
              'Microbial short-chain fatty acids, particularly butyrate, function as competitive, reversible pan-HDAC inhibitors [4]. Structural biology reveals that the aliphatic carboxylate tail of butyrate enters the catalytic pocket of Class I and II HDACs, directly chelating the catalytic Zn2+ ion and sterically blocking access to the acetyl-lysine substrate (IC50 ~0.1 to 0.5 mmol/L) [4]. In human colorectal enterocytes and lamina propria dendritic cells, colonic butyrate concentrations (10 to 20 mmol/L) comfortably exceed this inhibition threshold, driving widespread hyperacetylation of histone H3 and H4 [1, 4].',
              'অন্ত্রের শর্ট-চেইন ফ্যাটি অ্যাসিড, বিশেষ করে বিউটাইরেট, এই HDAC এনজাইমগুলোর এক শক্তিশালী প্রাকৃতিক বাধার কারণ [৪]। আণবিক বিশ্লেষণে দেখা গেছে যে বিউটাইরেটের রাসায়নিক লেজটি সরাসরি HDAC এনজাইমের সরু সুড়ঙ্গে প্রবেশ করে জিংক আয়নকে অকেজো করে দেয় এবং অ্যাসিটাইল লাইসিন ভাঙতে বাধা দেয় [৪]। মানবদেহের অন্ত্রের কোষগুলোতে খাদ্যের আঁশ থেকে তৈরি হওয়া বিউটাইরেটের ঘনত্ব এই বাধার সীমাকে সহজেই অতিক্রম করে, যার ফলে হিস্টোন H3 ও H4 প্রোটিনে ব্যাপক অ্যাসিটাইলেশন বজায় থাকে [১, ৪]।'
            ),
            l(
              'This dietary HDAC inhibition specifically upregulates the transcription of the cyclin-dependent kinase inhibitor 1A (CDKN1A, encoding p21WAF1/CIP1) [4]. The promoter region of CDKN1A features recruitment of Sp1 transcription factors that coordinate with hyperacetylated histones, initiating transcriptional elongation. Upregulated p21 arrests cell-cycle progression at the G1/S transition in mutated or hyperproliferative colonic epithelial cells, triggering apoptotic cascades while preserving normal mucosal homeostasis [1, 4].',
              'খাদ্য ও জীবাণুর এই HDAC দমন প্রক্রিয়া বিশেষভাবে p21 (CDKN1A) নামক ক্যান্সার দমনকারী জিনকে প্রজ্বলিত করে [৪]। এই জিনের প্রমোটরে থাকা Sp1 ট্রান্সক্রিপশন ফ্যাক্টর শিথিল হিস্টোনের সাথে যুক্ত হয়ে দ্রুত p21 প্রোটিন তৈরি করে। বর্ধিত p21 প্রোটিন ক্ষতিকর বা পরিবর্তিত ক্যান্সার কোষের বিভাজন G1 দশায় তাৎক্ষণিক আটকে দিয়ে সেগুলোকে ধ্বংস করে ফেলে এবং কোলন ক্যান্সার প্রতিরোধ করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'Nutrigenomics of Immune Signaling: NF-kappa-B, PUFAs & Resolvins',
            'প্রতিরক্ষা সংকেতের নিউট্রিজেনোমিক্স: NF-kB, ওমেগা-৩ ও রেজলভিন্স আণবিক অক্ষ'
          ),
          paragraphs: [
            l(
              'Chronic low-grade systemic inflammation (metabolic endotoxemia) is the pathophysiological cornerstone of insulin resistance, cardiovascular disease, and non-alcoholic steatohepatitis [1, 2]. At the molecular level, this inflammation is driven by the transcription factor nuclear factor kappa B (NF-kappa-B), a heterodimer composed of p50 and p65 (RelA) subunits sequestered in the cytoplasm by the inhibitor protein I-kappa-B-alpha (IkappaBalpha) [2]. Saturated fatty acids (such as palmitate) bind Toll-like receptor 4 (TLR4), activating I-kappa-B kinase (IKK) to phosphorylate IkappaBalpha, targeting it for ubiquitin-proteasome degradation and liberating NF-kappa-B to translocate into the nucleus [1, 2].',
              'দীর্ঘমেয়াদী মৃদু সিস্টেমিক প্রদাহ হলো ইনসুলিন রেজিস্ট্যান্স, হৃদরোগ ও ফ্যাটি লিভারের মূল প্যাথলজিক্যাল কারণ [১, ২]। আণবিক স্তরে এই প্রদাহ পরিচালিত হয় নিউক্লিয়ার ফ্যাক্টর কাপ্পা বি (NF-kB) নামক ট্রান্সক্রিপশন ফ্যাক্টর দ্বারা, যা স্বাভাবিক অবস্থায় সাইটোপ্লাজমে IkBalpha প্রোটিন দ্বারা বন্দি থাকে [২]। খাদ্যের স্যাচুরেটেড চর্বি (যেমন পামিটিক অ্যাসিড) কোষে যুক্ত হয়ে IKK এনজাইম সক্রিয় করে IkBalpha-কে ধ্বংস করে দেয়; ফলে মুক্ত NF-kB কোষকেন্দ্রে প্রবেশ করে শত শত ক্ষতিকর প্রদাহজনক সাইটোকাইন তৈরি শুরু করে [১, ২]।'
            ),
            l(
              'Dietary long-chain omega-3 polyunsaturated fatty acids (EPA and DHA) counter this inflammatory cascade through dual genomic mechanisms [1, 2]. First, EPA and DHA directly activate peroxisome proliferator-activated receptor gamma (PPARgamma) and G-protein coupled receptor 120 (GPR120 / FFA4) [1]. Ligand-bound PPARgamma physically binds to the p65 subunit of NF-kappa-B in the nucleus, a trans-repression mechanism that prevents NF-kappa-B from docking at its consensus DNA response elements, extinguishing transcription of TNF-alpha, IL-1beta, and inducible nitric oxide synthase (iNOS) [1, 2].',
              'খাদ্যের ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA ও DHA) দুটি শক্তিশালী আণবিক প্রক্রিয়ার মাধ্যমে এই প্রদাহকে ধ্বংস করে দেয় [১, ২]। প্রথমত, EPA ও DHA সরাসরি পিপিএআর-গামা (PPARgamma) এবং GPR120 রিসেপ্টরকে সক্রিয় করে [১]। সক্রিয় PPARgamma কোষকেন্দ্রে প্রবেশ করে সরাসরি ক্ষতিকর NF-kB-এর গায়ে সেঁটে যায় (ট্রান্স-রিপ্রেশন), যার ফলে NF-kB ডিএনএ-তে বসতে পারে না এবং TNF-alpha ও IL-1beta-এর মতো প্রদাহজনক প্রোটিন তৈরি চিরতরে বন্ধ হয়ে যায় [১, ২]।'
            ),
            l(
              'Second, dietary EPA and DHA serve as enzymatic substrates for lipoxygenases and cyclooxygenases, undergoing biocatalytic conversion into specialized pro-resolving mediators (SPMs), including resolvins (E-series and D-series), protectins, and maresins [1]. At nanomolar concentrations, resolvins bind specific G-protein coupled receptors (such as ChemR23 / CMKLR1) on circulating monocytes and tissue macrophages, halting neutrophil chemotaxis, stimulating non-phlogistic macrophage efferocytosis of apoptotic cellular debris, and orchestrating active tissue resolution without immunosuppression [1, 2].',
              'দ্বিতীয়ত, খাদ্যের এই EPA ও DHA কোষে বিশেষ এনজাইম দ্বারা রূপান্তরিত হয়ে বিশেষায়িত প্রো-রিজলভিং মেডিয়েটরস (SPMs বা রেজলভিন্স, প্রোটেকটিন্স ও মারিসিন্স) তৈরি করে [১]। এই রেজলভিন্স অতি সামান্য ঘনত্বেই শ্বেত রক্তকণিকার ক্ষতিকর অনুপ্রবেশ বন্ধ করে, প্রদাহ সৃষ্টিকারী মৃত কোষগুলোকে পরিচ্ছন্ন করে অপসারণ করে এবং শরীরের প্রাকৃতিক রোগপ্রতিরোধ ক্ষমতা না কমিয়েই প্রদাহের পূর্ণাঙ্গ পরিসমাপ্তি ঘটায় [১, ২]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'Clinical Translation: Personalized Nutrition Guidelines & Ethical Safeguards',
            'ক্লিনিক্যাল প্রয়োগ: ব্যক্তিকেন্দ্রিক পুষ্টি নির্দেশিকা ও নৈতিক নীতিমালা'
          ),
          paragraphs: [
            l(
              'Translating nutritional genomics into responsible clinical practice requires clear distinction between high-penetrance actionable monogenic variants and complex polygenic traits [1, 2]. For patients carrying established monogenic inborn errors of metabolism or high-risk single-gene polymorphisms—such as familial hypercholesterolemia (LDLR, APOB, PCSK9 mutations), hereditary hemochromatosis (HFE C282Y), or severe hyperhomocysteinemia (MTHFR 677TT)—targeted nutritional genomics provides lifesaving precision guidance [1, 2]. For example, in an individual with confirmed homozygous MTHFR 677TT and elevated plasma homocysteine, prescribing riboflavin (FAD chaperone) and L-5-methyltetrahydrofolate (bypassing the defective enzyme) rapidly normalizes vascular risk [1, 2].',
              'পুষ্টি জিনতত্ত্বকে দায়িত্বশীল চিকিৎসায় প্রয়োগ করতে হলে সুনির্দিষ্ট উচ্চ-ঝুঁকিপূর্ণ একক জিনের রোগ এবং জটিল বহু-জিনের বৈশিষ্ট্যের মধ্যে স্পষ্ট বিভাজন টানতে হবে [১, ২]। যেসব রোগীর নির্দিষ্ট জিনগত সমস্যা রয়েছে—যেমন ফ্যামিলিয়াল হাইপারকোলেস্টেরলেমিয়া (LDLR মিউটেশন), অতিরিক্ত আয়রন সঞ্চয় রোগ (HFE মিউটেশন), অথবা মারাত্মক হোমোসিস্টাইন বৃদ্ধি (MTHFR 677TT)—তাদের ক্ষেত্রে নিউট্রিজেনোমিক্স জীবনরক্ষাকারী ভূমিকা পালন করে [১, ২]। যেমন, homozygous 677TT রোগীকে রিবোফ্লাভিন ও অ্যাক্টিভ মিথাইলফোলেট দিলে তা নষ্ট এনজাইমকে পাশ কাটিয়ে তৎক্ষণাৎ রক্তনালির ঝুঁকি স্বাভাবিক করে তোলে [১, ২]।'
            ),
            l(
              'However, for common polygenic chronic diseases, the Academy of Nutrition and Dietetics (AND) emphasizes that genetic data must never supersede proven evidence-based medical nutrition therapy [2]. Commercial DTC tests that promote proprietary dietary supplements or restrictive elimination diets based on single-SNP scores lack scientific reproducibility and have repeatedly failed clinical efficacy endpoints in randomized trials [1, 2]. Clinicians must uphold rigorous ethical standards, explaining to patients that lifestyle, dietary pattern quality, physical movement, and socioeconomic context explain the vast majority of disease prevention [1, 2].',
              'তবে সাধারণ দীর্ঘমেয়াদী রোগের ক্ষেত্রে আন্তর্জাতিক ডায়েটেটিক্স সংস্থাগুলো স্পষ্টভাবে জানিয়েছে যে জেনেটিক তথ্য কখনই সার্বিক চিকিৎসাগত খাদ্য নির্দেশিকাকে খাটো করতে পারে না [২]। বাণিজ্যিক কিটগুলো যে একক জিনের ভিত্তিতে বিভিন্ন দামি সাপ্লিমেন্ট বা কঠোর ডায়েটের পরামর্শ দেয়, বৈজ্ঞানিক ট্রায়ালে তাদের কোনো কার্যকারিতা প্রমাণিত হয়নি [১, ২]। চিকিৎসকদের অবশ্যই নৈতিক সততা বজায় রেখে রোগীদের বোঝাতে হবে যে স্বাস্থ্যকর খাদ্যাভ্যাস, নিয়মিত কায়িক পরিশ্রম ও মানসিক প্রশান্তিই রোগমুক্তির প্রধান চাবিকাঠি [১, ২]।'
            ),
            l(
              'The future of evidence-based precision dietetics lies in "deep phenotyping"—the multi-layered integration of continuous physiological biosensors (CGM, heart rate variability), longitudinal multi-omics (metabolomics, lipidomics, microbiome metagenomics), and clinical pathology [1, 5]. By feeding dynamic phenotypic data into validated algorithmic systems, clinicians can formulate truly responsive nutrition care plans that optimize postprandial metabolism, support mucosal barrier integrity, and preserve metabolic longevity [1, 5].',
              'ভবিষ্যতের প্রমাণভিত্তিক ব্যক্তিকেন্দ্রিক পুষ্টিবিজ্ঞান দাঁড়িয়ে আছে "ডিপ ফেনোটাইপিং" (Deep Phenotyping)-এর ওপর—যেখানে সার্বক্ষণিক গ্লুকোজ সেন্সর (CGM), রক্ত ও প্রস্রাবের মেটাবোলাইট প্রোফাইল এবং অন্ত্রের মাইক্রোবায়োম ডেটাকে সমন্বিত করা হয় [১, ৫]। এই জীবন্ত তথ্যের ওপর ভিত্তি করে পুষ্টিবিদরা এমন খাদ্যতালিকা তৈরি করতে পারেন যা রোগীর খাদ্যোত্তর রক্তে শর্করা নিয়ন্ত্রণ করে, অন্ত্রের প্রাচীর রক্ষা করে এবং দীর্ঘ ও সুস্থ আয়ু নিশ্চিত করে [১, ৫]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Advanced Systems Synthesis & The Future of Precision Dietetics',
            'উন্নত সিস্টেমস সমন্বয় ও নির্ভুল ডায়েটেটিক্সের ভবিষ্যৎ রূপরেখা'
          ),
          paragraphs: [
            l(
              'Translational nutritional genomics unifies molecular epigenomics with clinical medicine: DNA methylation patterns across CpG islands and histone post-translational modifications (H3K4me3 euchromatin vs. H3K9me3 heterochromatin) are dynamically shaped by dietary one-carbon methyl donors (SAMe) and microbial short-chain fatty acids (butyrate HDAC inhibition) [1, 3, 4].',
              'ফলিত পুষ্টি জিনতত্ত্ব আণবিক এপিজেনোমিক্সকে ক্লিনিক্যাল চিকিৎসাবিজ্ঞানের সাথে একীভূত করে: সিপিজি দ্বীপমালার ডিএনএ মিথাইলেশন এবং হিস্টোন প্রোটিনের পরিবর্তন খাদ্যের ওয়ান-কার্বন মিথাইল দাতা (SAMe) এবং অন্ত্রের বিউটাইরেটের HDAC বাধার মাধ্যমে প্রতিনিয়ত নিয়ন্ত্রিত হয় [১, ৩, ৪]।'
            ),
            l(
              'Single-nucleotide polymorphisms such as MTHFR C677T (FAD prosthetic pocket instability rescued by targeted riboflavin chaperone therapy) and APOE epsilon-4 (hyper-reactive atherogenic dyslipidemia responding to saturated fat reduction) demonstrate the clinical validity of targeted nutrigenetics when applied to high-risk actionable metabolic nodes [1, 2].',
              'MTHFR C677T (রিবোফ্লাভিন দিয়ে FAD পকেট স্থিতিশীল করে নিরাময়) এবং APOE epsilon-4-এর (স্যাচুরেটেড ফ্যাট কমিয়ে হৃদরোগ প্রতিরোধ) মতো সুনির্দিষ্ট জিনের রূপভেদগুলো প্রমাণ করে যে সঠিক আণবিক নোডে প্রয়োগ করা হলে ব্যক্তিকেন্দ্রিক পুষ্টিবিজ্ঞান কতটা কার্যকর [১, ২]।'
            ),
            l(
              'The landmark PREDICT clinical trials and international consensus guidelines confirm that inherited genetics explains only a modest proportion of postprandial glycemic and lipemic heterogeneity; true precision functional dietetics requires deep phenotyping, combining dynamic biosensors and microbiome metagenomics within ethical, evidence-based lifestyle medicine [1, 2, 5].',
              'প্রেডিক্ট গবেষণা এবং আন্তর্জাতিক নির্দেশনা দৃঢ়ভাবে প্রমাণ করে যে জন্মগত জিন খাদ্যোত্তর তারতম্যের সামান্য অংশের জন্য দায়ী; তাই প্রকৃত নির্ভুল ডায়েটেটিক্স বাণিজ্যিক ভ্রান্তি পরিহার করে মাইক্রোবায়োম, বায়োসেন্সর ও সুষম খাদ্যের সমন্বয়ে এক বৈজ্ঞানিক ও নিরাপদ স্বাস্থ্য ব্যবস্থার নিশ্চয়তা দেয় [১, ২, ৫]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential five-stage nutritional genomics continuum diagram tracing dietary bioactive nuclear receptor binding, canonical SNP variations (MTHFR/APOE), SAMe one-carbon DNA methylation, microbial butyrate HDAC inhibition, and multi-omic personalized dietetic phenotyping.',
      'পাঁচটি পর্যায়ের ধারাবাহিক নিউট্রিজেনোমিক্স নকশা যা খাদ্যের লিগ্যান্ড দ্বারা রিসেপ্টর সক্রিয়করণ, জিনের রূপভেদ (MTHFR/APOE), SAMe দিয়ে ডিএনএ মিথাইলেশন, অন্ত্রীয় বিউটাইরেট HDAC অবদমন এবং সমন্বিত মাল্টি-ওমিক ব্যক্তিকেন্দ্রিক পুষ্টি মূল্যায়ন প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Stage 1: Dietary Bioactive Ligands Binding Nuclear Receptors (PUFAs activating PPARalpha/gamma; glucose surges driving SREBP-1c cleavage).',
        'পর্যায় ১: খাদ্যের উপাদান দ্বারা নিউক্লিয়ার রিসেপ্টর সক্রিয়করণ (ওমেগা-৩ দিয়ে PPAR এবং শর্করা দিয়ে SREBP-1c নিয়ন্ত্রণ)।'
      ),
      l(
        'Stage 2: Single-Nucleotide Polymorphisms (MTHFR C677T thermolability rescued by riboflavin; APOE-e4 atherogenic dyslipidemia).',
        'পর্যায় ২: জিনের রূপভেদ (MTHFR C677T-তে রিবোফ্লাভিন দ্বারা এনজাইম সক্রিয়করণ এবং APOE-e4 লিপিড প্রতিক্রিয়া)।'
      ),
      l(
        'Stage 3: One-Carbon Transmethylation Cycle Generating SAMe & CpG Island Cytosine Methylation (DNMT1/3).',
        'পর্যায় ৩: ওয়ান-কার্বন বিপাকীয় চক্র দ্বারা SAMe উৎপাদন এবং ডিএনএ-র সিপিজি দ্বীপে মিথাইলেশন (DNMT1/3)।'
      ),
      l(
        'Stage 4: Gut Microbiota SCFA Butyrate Inhibiting Class I/II HDACs to Decompress Euchromatin & Induce p21 Tumor Suppression.',
        'পর্যায় ৪: অন্ত্রের বিউটাইরেট দ্বারা HDAC এনজাইম বন্ধ করে ক্রোমাটিন শিথিলকরণ এবং ক্যান্সার দমনকারী p21 জিন সক্রিয়করণ।'
      ),
      l(
        'Stage 5: Multi-Omic Deep Phenotyping (Microbiome Metagenomics, CGM & Metabolomics) for Evidence-Based Precision Nutrition.',
        'পর্যায় ৫: নির্ভুল পুষ্টির জন্য মাল্টি-ওমিক ফেনোটাইপিং (মাইক্রোবায়োম সিকোয়েন্সিং, সিজিএম শর্করা ট্র্যাকিং ও মেটাবোলাইটস)।'
      ),
    ],
  },
  chapter: {
    toc: [
      { id: 'toc-intro', label: l('1. The Architecture of Nutritional Genomics', '১. পুষ্টি জিনতত্ত্বের রূপরেখা ও তিন স্তম্ভ'), sectionId: 'introduction' },
      { id: 'toc-struct', label: l('2. Structural Chromatin & The Histone Code', '২. ক্রোমাটিনের গঠন ও হিস্টোন কোড'), sectionId: 'structure' },
      { id: 'toc-mech', label: l('3. The Methylation Cycle & Canonical SNPs', '৩. মিথাইলেশন চক্র ও জিনের রূপভেদ'), sectionId: 'mechanism' },
      { id: 'toc-integ', label: l('4. Systems Biology & Microbiota Epigenetics', '৪. সিস্টেমস বায়োলজি ও মাইক্রোবায়োটা এপিজেনেটিক্স'), sectionId: 'integration' },
      { id: 'toc-pract', label: l('5. Clinical Appraisal of Genetic DTC Panels', '৫. বাণিজ্যিক টেস্টের ক্লিনিক্যাল মূল্যায়ন'), sectionId: 'practice' },
      { id: 'toc-take', label: l('6. Core Tenets & Systems Synthesis', '৬. মৌলিক শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Nutrigenetics vs. Nutrigenomics', 'নিউট্রিজেনেটিক্স বনাম নিউট্রিজেনোমিক্স'),
        definition: l(
          'Nutrigenetics examines how inherited genetic variants (SNPs) dictate individual biochemical responses to diet, whereas nutrigenomics examines how dietary nutrients act as molecular signals to directly alter gene transcription and expression.',
          'নিউট্রিজেনেটিক্স পরীক্ষা করে জিনের রূপভেদ কীভাবে খাদ্যের প্রতিক্রিয়া নির্ধারণ করে, আর নিউট্রিজেনোমিক্স বিশ্লেষণ করে খাদ্যের উপাদান কীভাবে সরাসরি জিনের প্রকাশ চালু বা বন্ধ করে।'
        ),
      },
      {
        term: l('MTHFR C677T Polymorphism', 'MTHFR C677T রূপভেদ'),
        definition: l(
          'A common genetic transition (Ala222Val) in methylenetetrahydrofolate reductase that destabilizes its FAD prosthetic binding, reducing catalytic synthesis of 5-MTHF by 60-70% and elevating cardiovascular homocysteine risk unless rescued by riboflavin.',
          'MTHFR এনজাইমের একটি রূপভেদ যা এর FAD বাঁধনকে দুর্বল করে কার্যক্ষমতা ৬০-৭০% কমিয়ে দেয়; ফলে রক্তে হোমোসিস্টাইন বেড়ে যায়, যা রিবোফ্লাভিন ও মিথাইলফোলেট দ্বারা সমাধানযোগ্য।'
        ),
      },
      {
        term: l('S-Adenosylmethionine (SAMe) & The Methylation Index', 'SAMe ও কোষীয় মিথাইলেশন ইনডেক্স'),
        definition: l(
          'The universal biological methyl donor synthesized from methionine and ATP; the ratio of SAMe to its product inhibitor S-adenosylhomocysteine (SAM/SAH ratio) dictates cellular transmethylation potential across DNA and histones.',
          'কোষের সার্বজনীন মিথাইল দাতা যা মিথিওনিন থেকে তৈরি হয়; SAMe এবং এর বাধা সৃষ্টিকারী উপজাত SAH-এর অনুপাত (SAM/SAH) কোষের সামগ্রিক ডিএনএ ও হিস্টোন মিথাইলেশন ক্ষমতা নির্ধারণ করে।'
        ),
      },
      {
        term: l('Histone Deacetylase (HDAC) Inhibition', 'হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) অবদমন'),
        definition: l(
          'The pharmacological or dietary blocking of HDAC enzymes (achieved by microbial butyrate or cruciferous sulforaphane), preserving lysine acetylation, opening chromatin into euchromatin, and inducing tumor suppressors like p21.',
          'অন্ত্রের বিউটাইরেট বা ব্রোকলির সালফোরাফেন দ্বারা HDAC এনজাইম বন্ধ করার প্রক্রিয়া, যা ক্রোমাটিন শিথিল করে ক্যান্সার দমনকারী p21 জিনকে সক্রিয় করে তোলে।'
        ),
      },
      {
        term: l('The Agouti Mouse Viable Yellow (Avy) Paradigm', 'আগৌটি ইঁদুরের এপিজেনেটিক মডেল'),
        definition: l(
          'The landmark 2003 experiment demonstrating that maternal dietary supplementation with methyl donors (folate, choline, betaine, B12) during pregnancy hypermethylated and silenced an upstream retrotransposon, shifting offspring from yellow, obese, and diabetic to brown, lean, and healthy.',
          'ঐতিহাসিক ২০০৩ সালের গবেষণা যা প্রমাণ করে যে গর্ভাবস্থায় খাদ্যে মিথাইল দাতা (ফোলেট, কোলিন, বি১২) দিলে তা ক্ষতিকর জিনকে মিথাইলেশনের মাধ্যমে স্থায়ীভাবে স্তব্ধ করে দিয়ে স্থূল ও ডায়াবেটিসের হাত থেকে সুস্থ সন্তান জন্ম দেয়।'
        ),
      },
      {
        term: l('Polygenic Risk Score (PRS) in Precision Dietetics', 'নির্ভুল ডায়েটেটিক্সে পলিজেনিক রিস্ক স্কোর'),
        definition: l(
          'A mathematical metric summing the weighted effect sizes of thousands of genomic variants to estimate baseline chronic disease susceptibility; healthy dietary patterns reduce relative cardiovascular and diabetic risk by 40-50% regardless of genetic risk strata.',
          'হাজার হাজার জিনের ক্ষুদ্র প্রভাব একত্রিত করে তৈরি করা রোগঝুঁকির গাণিতিক পরিমাপ; স্বাস্থ্যকর খাদ্যাভ্যাস ও ব্যায়াম জেনেটিক ঝুঁকি বেশি থাকা সত্ত্বেও হৃদরোগের ঝুঁকি ৪০-৫০% কমিয়ে দিতে পারে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Clinical Case: Precision MNT for Homozygous MTHFR 677TT Hyperhomocysteinemia',
          'সমাধানকৃত ক্লিনিক্যাল উদাহরণ: হোমোজাইগাস MTHFR 677TT এবং উচ্চ হোমোসিস্টাইনের প্রমাণভিত্তিক খাদ্য ব্যবস্থাপনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Assessment & Biomarker Evaluation. A 42-year-old male with a family history of premature myocardial infarction presents with a genomic panel indicating homozygous MTHFR 677TT (rs1801133). Serum total homocysteine is elevated at 22.4 micromol/L (optimal: <10.0 micromol/L), while serum cobalamin is 310 pg/mL (borderline) and RBC folate is in the lower tertile.',
            'ধাপ ১: ক্লিনিক্যাল মূল্যায়ন ও ল্যাব পরীক্ষা। অকাল হৃদরোগের পারিবারিক ইতিহাস থাকা ৪২ বছর বয়সী ব্যক্তির টেস্টে homozygous MTHFR 677TT ধরা পড়ে। রক্তে হোমোসিস্টাইন আশঙ্কাজনকভাবে বেশি (২২.৪ মাইক্রোমোল/লিটার; স্বাভাবিক: <১০.০) এবং ভিটামিন বি১২ ও ফোলেটের মাত্রা কম।'
          ),
          l(
            'Step 2: Molecular Pathophysiological Rationalization. The Ala222Val mutation increases the dissociation rate of the FAD cofactor, accelerating enzyme degradation. Concurrently, insufficient substrate (5-MTHF) stalls methionine synthase, causing homocysteine to accumulate. High-dose synthetic folic acid is contraindicated due to potential accumulation of unmetabolized folic acid (UMFA) and dihydrofolate reductase (DHFR) saturation.',
            'ধাপ ২: আণবিক কারণ নির্ধারণ। মিউটেশনের ফলে এনজাইম থেকে FAD কো-ফ্যাক্টর খুলে নষ্ট হয়ে যাচ্ছে। পর্যাপ্ত 5-MTHF না থাকায় হোমোসিস্টাইন জমছে। অতিরিক্ত সাধারণ সিন্থেটিক ফলিক অ্যাসিড দেওয়া যাবে না কারণ তা রক্তে জমে ক্ষতি করতে পারে।'
          ),
          l(
            'Step 3: Pharmacological & Dietary Chaperone Prescription. Formulate a targeted one-carbon support regimen: (a) Riboflavin (vitamin B2, the precursor of FAD) at 5.0 mg/day as an enzymatic chaperone to stabilize the mutant MTHFR homodimer; (b) L-5-methyltetrahydrofolate (L-methylfolate) at 800 mcg/day to bypass the MTHFR block directly; (c) Methylcobalamin (active B12) at 1,000 mcg/day; (d) Dietary choline/betaine support (eggs, spinach, quinoa) providing ~550 mg/day choline to drive the parallel BHMT liver remethylation pathway.',
            'ধাপ ৩: সুনির্দিষ্ট পুষ্টি ও খাদ্য প্রেসক্রিপশন: (ক) এনজাইম মজবুত করতে FAD-এর উৎস হিসেবে দৈনিক ৫.০ মিলিগ্রাম রিবোফ্লাভিন (ভিটামিন বি২); (খ) নষ্ট এনজাইমকে পাশ কাটিয়ে সরাসরি ৮০০ মাইক্রোগ্রাম এল-মিথাইলফোলেট; (গ) ১,০০০ মাইক্রোগ্রাম সক্রিয় মিথাইলকোবালামিন (বি১২); (ঘ) যকৃতের বিকল্প পথ চালু রাখতে দৈনিক ৫৫০ মিলিগ্রাম কোলিন/বিটেইনযুক্ত খাদ্য (ডিম, পালংশাক)।'
          ),
          l(
            'Step 4: Monitoring & Outcome. Repeat fasting homocysteine testing at 8 weeks. Plasma homocysteine declines from 22.4 to 8.6 micromol/L, restoring cellular methylation potential (SAM/SAH ratio) and mitigating endothelial oxidative stress.',
            'ধাপ ৪: ফলাফল পর্যবেক্ষণ। ৮ সপ্তাহ পর পুনরায় পরীক্ষায় হোমোসিস্টাইন ২২.৪ থেকে কমে ৮.৬ মাইক্রোমোল/লিটারে নেমে আসে, যা রক্তনালির প্রদাহ কমিয়ে হৃদরোগের ঝুঁকি স্বাভাবিক করে তোলে।'
          ),
        ],
        conclusion: l(
          'Targeted nutritional genomics targeting the enzymatic FAD chaperone defect with riboflavin (B2) and bypassing the metabolic block with L-methylfolate rapidly normalizes atherogenic hyperhomocysteinemia without requiring extreme pharmaceutical intervention.',
          'MTHFR মিউটেশনে রিবোফ্লাভিন দিয়ে নষ্ট এনজাইম মেরামত এবং এল-মিথাইলফোলেট দিয়ে ঘাটতি পূরণের এই সুনির্দিষ্ট আণবিক পুষ্টি থেরাপি কোনো ক্ষতিকর ওষুধ ছাড়াই রক্তনালির স্বাস্থ্য সম্পূর্ণরূপে পুনরুদ্ধার করেছে।'
        ),
      },
      {
        title: l(
          'Worked Clinical Case: Precision Functional Dietetics for Heterozygous APOE-e4 Dyslipidemia',
          'সমাধানকৃত ক্লিনিক্যাল উদাহরণ: হেটেরোজাইগাস APOE-e4 যুক্ত রোগীর লিপিড সমস্যায় নির্ভুল খাদ্য পরিকল্পনা'
        ),
        steps: [
          l(
            'Step 1: Clinical Profile & Genomic Risk Identification. A 48-year-old female adopts a popular high-fat, low-carbohydrate ketogenic diet (incorporating heavy cream, butter, and coconut oil). Over 6 months, her LDL cholesterol surges from 118 mg/dL to 232 mg/dL, with ApoB rising to 154 mg/dL. Genomic testing reveals the APOE epsilon-3/epsilon-4 (e3/e4) genotype.',
            'ধাপ ১: রোগীর অবস্থা ও জেনেটিক ঝুঁকি শনাক্তকরণ। ৪৮ বছর বয়সী এক নারী কিটোজেনিক ডায়েট (মাখন, নারকেল তেল, অতিরিক্ত চর্বি) শুরু করার ৬ মাসের মধ্যে তার ক্ষতিকর এলডিএল ১১৮ থেকে বেড়ে ২৩২ মিগ্রা/ডেসিলিটার এবং ApoB ১৫৪ মিগ্রা/ডেসিলিটারে পৌঁছায়। টেস্টে তার APOE e3/e4 জিন পাওয়া যায়।'
          ),
          l(
            'Step 2: Biochemical Mechanism of Hyper-Response. APOE-e4 carriers display increased conformational affinity for large triglyceride-rich particles, accelerating hepatic uptake and downregulating cell-surface LDL receptor (LDLR) expression via sterol-mediated feedback. High saturated fatty acids (SFAs) drastically suppress LDLR recycling, trapping atherogenic LDL particles in circulation.',
            'ধাপ ২: অতিরিক্ত চর্বি বৃদ্ধির আণবিক কারণ। APOE-e4 জিন থাকলে তা যকৃতের এলডিএল রিসেপ্টর সংখ্যা কমিয়ে দেয়। খাবারে অতিরিক্ত স্যাচুরেটেড ফ্যাট থাকলে এই রিসেপ্টর আরও অকেজো হয়ে পড়ে, যার ফলে রক্ত থেকে ক্ষতিকর এলডিএল কণা পরিষ্কার হতে পারে না এবং তা জমতে থাকে।'
          ),
          l(
            'Step 3: Tailored Dietary Prescription. Shift dietary pattern from high-SFA ketogenic feeding to a polyphenol-rich, monounsaturated and polyunsaturated Mediterranean framework: (a) Restrict saturated fatty acids to <6% of total energy (<12 g/day); (b) Replace butter and coconut fat with extra virgin olive oil (rich in oleic acid and polyphenols that upregulate LDLR) and fatty fish (providing 2 g/day EPA/DHA to activate PPARalpha); (c) Introduce 10 g/day of viscous soluble fiber (beta-glucan from oats, psyllium) to trap bile acids and enhance hepatic LDLR clearance.',
            'ধাপ ৩: সুনির্দিষ্ট ব্যক্তিকেন্দ্রিক খাদ্যতালিকা: (ক) স্যাচুরেটেড ফ্যাট কমিয়ে মোট ক্যালরির ৬%-এর নিচে (<১২ গ্রাম/দিন) আনা; (খ) মাখন ও নারকেল তেলের বদলে এক্সট্রা ভার্জিন অলিভ অয়েল ও তৈলাক্ত মাছ (দৈনিক ২ গ্রাম ওমেগা-৩ EPA/DHA) যুক্ত করা; (গ) অন্ত্র থেকে কোলেস্টেরল বের করে দিতে দৈনিক ১০ গ্রাম দ্রবণীয় আঁশ (ওটসের বিটা-গ্লুক্যান ও ইসবগুল) যোগ করা।'
          ),
          l(
            'Step 4: Clinical Follow-up. At 12-week lipid retesting, LDL-C plummets from 232 to 104 mg/dL, ApoB drops to 78 mg/dL, and high-sensitivity C-reactive protein (hs-CRP) declines from 2.8 to 0.6 mg/L.',
            'ধাপ ৪: ফলো-আপ ফলাফল। ১২ সপ্তাহ পর পরীক্ষায় এলডিএল ২৩২ থেকে নেমে ১০৪ মিগ্রা/ডেসিলিটারে এবং প্রদাহ মার্কার hs-CRP ২.৮ থেকে ০.৬-এ নেমে আসে।'
          ),
        ],
        conclusion: l(
          'APOE-e4 carriers possess heightened sensitivity to dietary saturated fats; replacing saturated fats with monounsaturated fats and viscous fiber restores hepatic LDL receptor clearance and abolishes atherogenic particle accumulation.',
          'APOE-e4 জিন বহনকারীরা স্যাচুরেটেড ফ্যাটের প্রতি অত্যন্ত সংবেদনশীল; তাদের খাদ্যতালিকায় স্যাচুরেটেড ফ্যাটের বদলে অলিভ অয়েল, ওমেগা-৩ ও দ্রবণীয় আঁশ দিলে যকৃতের কোলেস্টেরল ফিল্টারিং ক্ষমতা ফিরে আসে এবং হৃদরোগের ঝুঁকি দূর হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does microbial butyrate production from dietary fiber fermentation function as an epigenetic regulator in human colonocytes and regulatory T-cells?',
          'খাদ্যের আঁশ থেকে তৈরি অন্ত্রের বিউটাইরেট কীভাবে মানবদেহের কোলন কোষ এবং টি-রেগুলেটরি কোষে এপিজেনেটিক নিয়ন্ত্রক হিসেবে কাজ করে?'
        ),
        answer: l(
          'Butyrate acts as a competitive pan-histone deacetylase (HDAC) inhibitor. By binding and chelating the catalytic zinc ion within Class I and II HDACs, butyrate prevents the removal of acetyl groups from histone lysine residues. The resulting hyperacetylation decompresses chromatin into transcriptionally accessible euchromatin, specifically inducing the p21 (CDKN1A) tumor suppressor gene and Foxp3, which drives the differentiation of anti-inflammatory regulatory T-cells (Tregs).',
          'বিউটাইরেট প্রাকৃতিকভাবে হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) এনজাইমকে অবদমিত করে। এটি এনজাইমের জিংক আয়নকে নিষ্ক্রিয় করে হিস্টোন থেকে অ্যাসিটাইল গ্রুপ মুছে ফেলা বন্ধ করে। ফলে ক্রোমাটিন শিথিল হয়ে মুক্ত হয় এবং ক্যান্সার দমনকারী p21 জিন ও প্রদাহনাশক Foxp3 জিন সক্রিয় করে টি-রেগুলেটরি কোষ তৈরি করে শরীরকে সুস্থ রাখে।'
        ),
      },
      {
        question: l(
          'Why did pregnant agouti viable yellow (Avy) mice supplemented with methyl donors give birth to lean, brown offspring instead of obese, yellow offspring in the landmark 2003 Waterland & Jirtle trial?',
          'ঐতিহাসিক ২০০৩ সালের ওয়াটারল্যান্ড ও জার্টলের গবেষণায় গর্ভবতী আগৌটি ইঁদুরকে মিথাইল দাতা সাপ্লিমেন্ট দেওয়ার পর কেন তাদের সন্তানরা হলুদ ও স্থূল হওয়ার বদলে বাদামী ও রোগমুক্ত হিসেবে জন্ম নিয়েছিল?'
        ),
        answer: l(
          'Maternal dietary methyl donors (folate, choline, betaine, and vitamin B12) fueled the one-carbon cycle to elevate SAMe, the substrate for DNA methyltransferases. Elevated DNMT activity hypermethylated the CpG islands within the intracisternal A particle (IAP) retrotransposon upstream of the agouti gene. Methylation permanently silenced this ectopic promoter, preventing aberrant agouti expression and shifting the coat color and metabolic phenotype from yellow, obese, and diabetic to brown, lean, and healthy without altering the genomic DNA sequence.',
          'খাবারের মিথাইল উপাদান (ফোলেট, কোলিন, বি১২) শরীরে SAMe বৃদ্ধি করে, যা DNMT এনজাইমকে সক্রিয় করে। এই এনজাইম আগৌটি জিনের মুখের রেট্রোট্রান্সপোসন অংশে প্রচুর মিথাইল গ্রুপ বসিয়ে সেটিকে স্থায়ীভাবে স্তব্ধ করে দেয়। ফলে ক্ষতিকর জিনটি আর প্রকাশিত হতে পারেনি এবং ডিএনএ-র মূল ক্রম অক্ষুণ্ণ রেখেই বাচ্চারা স্থূলতা ও ডায়াবেটিস থেকে বেঁচে গিয়ে সুস্থ ও বাদামী হয়ে জন্ম নেয়।'
        ),
      },
      {
        question: l(
          'Why does the Academy of Nutrition and Dietetics advise clinicians against using direct-to-consumer (DTC) single-nucleotide polymorphism tests as standalone tools for prescribing commercial diets?',
          'আমেরিকান একাডেমি অব নিউট্রিশন অ্যান্ড ডায়েটেটিক্স কেন চিকিৎসকদের বাণিজ্যিক একক-জিনের টেস্ট কিটের ওপর ভিত্তি করে তৈরি করা ডায়েট প্রেসক্রাইব করতে নিষেধ করেছে?'
        ),
        answer: l(
          'Common chronic conditions such as obesity, Type 2 diabetes, and cardiovascular disease are polygenic, shaped by hundreds of low-penetrance genetic variants that each contribute less than 1-2% to total disease variance. Furthermore, landmark clinical trials (such as the PREDICT studies) demonstrate that environmental factors, sleep, circadian rhythm, and gut microbiome composition exert far greater influence on postprandial metabolism than host genetics alone. Relying on single-SNP tests without comprehensive phenotypic validation lacks clinical utility and leads to unjustified dietary restrictions.',
          'স্থূলতা, ডায়াবেটিস এবং হৃদরোগের মতো জটিল রোগগুলো শত শত জিনের অতি ক্ষুদ্র প্রভাবের সমন্বয়ে ঘটে, যেখানে প্রতিটি জিনের ভূমিকা মাত্র ১-২%। তাছাড়া, প্রেডিক্ট গবেষণায় দেখা গেছে যে খাদ্যোত্তর বিপাকের ওপর একক জিনের চেয়ে মানুষের অন্ত্রের জীবাণু, ঘুম এবং খাওয়ার সময় অনেক বেশি প্রভাব ফেলে। তাই পূর্ণাঙ্গ শারীরিক ও রক্ত পরীক্ষা ছাড়া কেবল বাণিজ্যিক জিন টেস্টের ভিত্তিতে তৈরি খাদ্যতালিকা বৈজ্ঞানিকভাবে অকার্যকর ও বিপজ্জনক।'
        ),
      },
    ],
  },
  interactiveDiagram: {
    id: 'nutrigenomics-epigenetics-flow',
    title: l(
      'Interactive Nutrigenomics, Chromatin Epigenetics & Multi-Omic Precision Dietetics Explorer',
      'নিউট্রিজেনোমিক্স, ক্রোমাটিন এপিজেনেটিক্স ও নির্ভুল ডায়েটেটিক্স সিমুলেশন'
    ),
    disclaimer: l(
      'Translational molecular biology and nutritional genomics simulation. Educational model for clinical reasoning; individual genetic and metabolic evaluations require certified laboratory diagnostics.',
      'আণবিক জীববিজ্ঞান ও পুষ্টি জিনতত্ত্ব সিমুলেশন। শিক্ষামূলক শারীরবৃত্তীয় মডেল; ব্যক্তিকেন্দ্রিক জিনগত ও বিপাকীয় মূল্যায়নের জন্য অনুমোদিত ক্লিনিক্যাল ল্যাবরেটরি টেস্ট প্রয়োজন।'
    ),
    description: l(
      'Investigate the five core mechanisms of precision functional nutrition: nutrient-ligand nuclear receptor activation, single-nucleotide polymorphisms, SAMe-mediated DNA methylation, microbial butyrate HDAC inhibition, and multi-omic deep phenotyping.',
      'কার্যকরী নির্ভুল পুষ্টির পাঁচটি মূল প্রক্রিয়া অনুসন্ধান করুন: খাদ্যের লিগ্যান্ড দ্বারা রিসেপ্টর সক্রিয়করণ, জিনের রূপভেদ, SAMe দ্বারা ডিএনএ মিথাইলেশন, অন্ত্রীয় বিউটাইরেট দ্বারা HDAC অবদমন এবং সমন্বিত মাল্টি-ওমিক মূল্যায়ন।'
    ),
    svgType: 'nutrigenomics-epigenetic-helix',
    imageUrl: '/assets/nutrigenomics_precision_dietetics_overview.jpg',
    imageCaption: l(
      'Figure 27.1: Nutrigenomics & Epigenetics in Precision Functional Dietetics. Illustrating the DNA double helix, CpG island methylation (-CH3) via dietary one-carbon folate/choline/SAMe, histone octamer nucleosome core winding, HDAC/HAT histone tail acetylation (-COCH3), and chromatin accessibility.',
      'চিত্র ২৭.১: কার্যকরী নির্ভুল ডায়েটেটিক্সে নিউট্রিজেনোমিক্স ও এপিজেনেটিক্স। ডিএনএ ডাবল হেলিক্স, খাদ্যের ফোলেট/কোলিন/SAMe দ্বারা সিপিজি দ্বীপে মিথাইলেশন (-CH3), হিস্টোন অকটামার নিউক্লিওসোম কোর, HDAC/HAT হিস্টোন লেজে অ্যাসিটাইলেশন (-COCH3) এবং ক্রোমাটিনের শিথিল ও সংকুচিত রূপ।'
    ),
    has3D: true,
    threeDType: 'nutrigenomics-helix-3d',
    items: [
      {
        id: 'node-nutrient-ligand',
        label: l('Nutrient Nuclear Receptor Ligands (PPAR, SREBP & VDR)', 'খাদ্যের উপাদান ও নিউক্লিয়ার রিসেপ্টর (PPAR, SREBP ও VDR)'),
        description: l(
          'Dietary fatty acids and polyphenols binding nuclear receptor transcription factors to directly control metabolic gene expression.',
          'খাদ্যের ওমেগা-৩ ও পলিফেনল সরাসরি কোষকেন্দ্রের রিসেপ্টরে যুক্ত হয়ে বিপাকীয় জিনের প্রকাশ নিয়ন্ত্রণ।'
        ),
        details: l(
          'Long-chain omega-3 fatty acids (EPA/DHA) bind PPARalpha/gamma, heterodimerizing with RXR to transcribe fatty acid beta-oxidation enzymes and trans-repress inflammatory NF-kappa-B. High simple sugar surges stimulate SREBP-1c cleavage, triggering hepatic de novo lipogenesis.',
          'ওমেগা-৩ ফ্যাটি অ্যাসিড PPAR রিসেপ্টরে যুক্ত হয়ে চর্বি জারণ বাড়ায় এবং ক্ষতিকর প্রদাহজনক NF-kB বন্ধ করে। অন্যদিকে অতিরিক্ত চিনি SREBP-1c সক্রিয় করে যকৃতে চর্বি জমার সূত্রপাত করে।'
        ),
        color: '#059669',
        sectionId: 'introduction',
        svgCoords: { x: 25, y: 35, width: 310, height: 50 },
        position3D: { x: -60, y: -30, z: 25 },
      },
      {
        id: 'node-snp-variation',
        label: l('Functional Genetic Polymorphisms (MTHFR C677T & APOE-e4)', 'জিনের কার্যকর রূপভেদ (MTHFR C677T ও APOE-e4)'),
        description: l(
          'Single-nucleotide polymorphisms altering enzyme stability and receptor binding, requiring tailored dietary cofactors and lipid modifications.',
          'জিনের একক রূপভেদ যা এনজাইমের স্থায়িত্ব নষ্ট করে; রিবোফ্লাভিন ও বিশেষ ডায়েটের মাধ্যমে যার সমাধান সম্ভব।'
        ),
        details: l(
          'The MTHFR C677T variant impairs FAD binding, reducing 5-MTHF synthesis and causing hyperhomocysteinemia; targeted riboflavin (B2) and methylfolate restore activity. The APOE-e4 allele impairs LDL receptor clearance, mandating saturated fat restriction (<6% of calories) to prevent atherogenic particle accumulation.',
          'MTHFR C677T মিউটেশন এনজাইম থেকে FAD কো-ফ্যাক্টর খুলে দিয়ে হোমোসিস্টাইন বাড়ায়; রিবোফ্লাভিন ও মিথাইলফোলেট একে স্বাভাবিক করে। APOE-e4 জিন রক্ত থেকে এলডিএল পরিষ্কারে বাধা দেয়, যা প্রতিরোধে খাবারে স্যাচুরেটেড চর্বি সীমিত করা জরুরি।'
        ),
        color: '#2563eb',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 105, width: 310, height: 50 },
        position3D: { x: -20, y: 40, z: -20 },
      },
      {
        id: 'node-dna-methylation',
        label: l('One-Carbon SAMe Cycle & CpG DNA Methylation', 'ওয়ান-কার্বন SAMe চক্র ও সিপিজি ডিএনএ মিথাইলেশন'),
        description: l(
          'Dietary methyl donors (folate, choline, B12) synthesizing SAMe to drive cytosine methylation (DNMT1/3) and regulate gene silencing.',
          'খাদ্যের ফোলেট, কোলিন ও বি১২ থেকে SAMe তৈরি, যা ডিএনএ মিথাইলেশনের মাধ্যমে জিনের প্রকাশ নিয়ন্ত্রণ করে।'
        ),
        details: l(
          'The transmethylation pathway converts methionine into S-adenosylmethionine (SAMe). DNA methyltransferases (DNMT1 maintenance, DNMT3a/b de novo) transfer methyl groups onto cytosine bases in CpG islands. The landmark agouti mouse experiment demonstrated that maternal methyl supplementation silences ectopic retrotransposons, preventing obesity and diabetes in offspring.',
          'মিথিওনিন থেকে তৈরি SAMe ডিএনএ-র সিপিজি দ্বীপে মিথাইল গ্রুপ যুক্ত করে। আগৌটি ইঁদুরের ঐতিহাসিক গবেষণা প্রমাণ করে যে গর্ভাবস্থায় পর্যাপ্ত মিথাইল উপাদান দিলে তা ক্ষতিকর জিন স্তব্ধ করে দিয়ে পরবর্তী প্রজন্মকে স্থূলতা ও ডায়াবেটিস থেকে রক্ষা করে।'
        ),
        color: '#7c3aed',
        sectionId: 'structure',
        svgCoords: { x: 25, y: 175, width: 310, height: 50 },
        position3D: { x: 30, y: -20, z: 35 },
      },
      {
        id: 'node-histone-hdac',
        label: l('Microbial Butyrate & Histone Deacetylase (HDAC) Inhibition', 'অন্ত্রীয় বিউটাইরেট ও হিস্টোন ডিঅ্যাসিটাইলেজ (HDAC) অবদমন'),
        description: l(
          'Gut microbial fermentation of fiber producing butyrate to inhibit Class I/II HDACs, relaxing euchromatin and inducing tumor suppressor p21.',
          'অন্ত্রের ব্যাকটেরিয়া কর্তৃক আঁশ গাঁজন করে বিউটাইরেট তৈরি, যা HDAC এনজাইম বন্ধ করে ক্যান্সার প্রতিরোধী জিন সক্রিয় করে।'
        ),
        details: l(
          'Butyrate enters the catalytic pocket of zinc-dependent HDACs, chelating the Zn2+ ion to block deacetylation. Histone hyperacetylation neutralizes positive charges, opening chromatin into euchromatin to transcribe the p21 (CDKN1A) tumor suppressor and anti-inflammatory Foxp3 in regulatory T-cells.',
          'বিউটাইরেট HDAC এনজাইমের জিংক আয়নকে নিষ্ক্রিয় করে হিস্টোন থেকে অ্যাসিটাইল গ্রুপ মুছতে বাধা দেয়। এর ফলে ক্রোমাটিন শিথিল হয়ে ক্যান্সার দমনকারী p21 জিন এবং প্রদাহনাশক Foxp3 জিন সক্রিয় করে শরীরকে সুরক্ষিত রাখে।'
        ),
        color: '#d97706',
        sectionId: 'integration',
        svgCoords: { x: 25, y: 245, width: 310, height: 50 },
        position3D: { x: 70, y: 25, z: -15 },
      },
      {
        id: 'node-precision-phenotype',
        label: l('Multi-Omic Deep Phenotyping & Personalized Nutrition', 'মাল্টি-ওমিক ডিপ ফেনোটাইপিং ও নির্ভুল খাদ্য পরিকল্পনা'),
        description: l(
          'Integrating genomics with continuous glucose monitoring (CGM), metabolomics, and gut microbiome metagenomics to optimize metabolic health.',
          'একক জিনের টেস্টের পরিবর্তে মাইক্রোবায়োম সিকোয়েন্সিং, সিজিএম এবং রক্তের মেটাবোলাইটস একত্রিত করে নিখুঁত পথ্য নির্ধারণ।'
        ),
        details: l(
          'The landmark PREDICT trials proved that identical twins sharing 100% of their genome exhibit up to 10-fold differences in postprandial glucose and lipid responses. Effective precision dietetics incorporates CGM biosensors, microbiome metagenomics, and clinical pathology rather than unvalidated single-gene commercial panels.',
          'প্রেডিক্ট গবেষণায় দেখা গেছে যে শতভাগ অভিন্ন জিন থাকা জমজ ভাইদের মধ্যেও খাদ্যোত্তর গ্লুকোজ ও চর্বির প্রতিক্রিয়ায় বিশাল ব্যবধান থাকে। তাই প্রকৃত নির্ভুল ডায়েটেটিক্স বাণিজ্যিক জেনেটিক কিটের পরিবর্তে অন্ত্রের জীবাণু ও সিজিএম সেন্সরের সমন্বয়ে কাজ করে।'
        ),
        color: '#dc2626',
        sectionId: 'practice',
        svgCoords: { x: 25, y: 315, width: 310, height: 50 },
        position3D: { x: 0, y: 70, z: 20 },
      },
    ],
  },
  assessment: {
    question: l(
      'A 39-year-old male receives a commercial direct-to-consumer genetic panel stating he carries homozygous MTHFR 677TT and is advised to purchase an expensive proprietary supplement containing 5,000 mcg of synthetic folic acid daily. A clinical biochemist evaluates his lab work: fasting homocysteine is elevated at 24.8 micromol/L, while serum riboflavin is deficient. What is the precise molecular pathophysiology of his condition, and what is the evidence-based nutritional intervention?',
      '৩৯ বছর বয়সী এক ব্যক্তি বাণিজ্যিক জেনেটিক কিটে homozygous MTHFR 677TT ধরা পড়ার পর তাকে দৈনিক ৫,০০০ মাইক্রোগ্রাম সিন্থেটিক ফলিক অ্যাসিডের দামি সাপ্লিমেন্ট কিনতে বলা হয়। ডাক্তার দেখলেন তার রক্তে হোমোসিস্টাইন ২৪.৮ মাইক্রোমোল/লিটার এবং ভিটামিন বি২ (রিবোফ্লাভিন) মারাত্মক কম। এর সঠিক আণবিক কারণ কী এবং এর আসল প্রমাণভিত্তিক সমাধান কী?'
    ),
    options: [
      l(
        'The Ala222Val mutation increases the dissociation of the flavin adenine dinucleotide (FAD) prosthetic group, causing thermolabile enzyme degradation; high-dose synthetic folic acid risks unmetabolized folic acid (UMFA) syndrome. The correct evidence-based therapy is targeted riboflavin (B2, the FAD chaperone precursor) combined with bioactive L-5-methyltetrahydrofolate (L-methylfolate), which bypasses the defective MTHFR step.',
        'Ala222Val মিউটেশনের কারণে এনজাইম থেকে FAD কো-ফ্যাক্টর খুলে গিয়ে এনজাইম নষ্ট হয়ে যায়; অতিরিক্ত সাধারণ ফলিক অ্যাসিড রক্তে জমে ক্ষতি করতে পারে। আসল প্রমাণভিত্তিক চিকিৎসা হলো FAD স্থিতিশীল করতে রিবোফ্লাভিন (ভিটামিন বি২) এবং নষ্ট এনজাইমকে পাশ কাটিয়ে সরাসরি সক্রিয় এল-মিথাইলফোলেট (L-methylfolate) গ্রহণ করা।'
      ),
      l(
        'The MTHFR 677TT variant causes complete irreversible loss of all DNA methyltransferases (DNMT1/3); the patient must undergo whole-body gene replacement therapy.',
        'MTHFR 677TT রূপভেদ সমস্ত ডিএনএ মিথাইলট্রান্সফারেজ এনজাইম ধ্বংস করে দেয়; তাই রোগীর জন্য সম্পূর্ণ জিন প্রতিস্থাপন থেরাপি প্রয়োজন।'
      ),
      l(
        'Folic acid directly binds and activates hepatic APOE-e4 receptors, inducing acute hypertriglyceridemia; all B vitamins must be eliminated immediately.',
        'ফলিক অ্যাসিড সরাসরি APOE রিসেপ্টর সক্রিয় করে মারাত্মক চর্বি বাড়িয়ে দেয়; তাই সমস্ত বি-ভিটামিন বন্ধ করা উচিত।'
      ),
      l(
        'The MTHFR mutation prevents intestinal absorption of all dietary carbohydrates; the patient must adopt an exclusively ketogenic diet with zero dietary fiber.',
        'MTHFR মিউটেশন অন্ত্রে শর্করা শোষণ বন্ধ করে দেয়; তাই রোগীকে আঁশহীন কিটোজেনিক ডায়েট গ্রহণ করতে হবে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Correct. The MTHFR C677T single-nucleotide polymorphism causes an alanine-to-valine substitution at codon 222 that weakens binding of its essential prosthetic cofactor, flavin adenine dinucleotide (FAD, derived from riboflavin/B2). In the absence of adequate riboflavin, the mutant homodimer dissociates and degrades, failing to synthesize 5-MTHF for homocysteine remethylation. Supplying synthetic folic acid is ineffective and can accumulate unmetabolized. Providing targeted riboflavin stabilizes the mutant enzyme homodimer as a molecular chaperone, while L-methylfolate directly supplies the active product, rapidly normalizing homocysteine.',
      'সঠিক উত্তর। MTHFR C677T মিউটেশনের ফলে এনজাইম থেকে রিবোফ্লাভিনজাত FAD কো-ফ্যাক্টর আলগা হয়ে যায় এবং এনজাইমটি ভেঙে নষ্ট হয়ে যায়। ফলে রক্তে হোমোসিস্টাইন জমতে থাকে। অতিরিক্ত সাধারণ ফলিক অ্যাসিড দিলে তা শরীর কাজে লাগাতে পারে না এবং রক্তে জমে ক্ষতি করে। সঠিক চিকিৎসা হলো রিবোফ্লাভিন (বি২) দিয়ে নষ্ট এনজাইমকে শক্ত করা এবং সাথে অ্যাক্টিভ এল-মিথাইলফোলেট দেওয়া যা নষ্ট এনজাইমের ওপর নির্ভর না করেই সরাসরি রক্তে হোমোসিস্টাইন কমিয়ে দেয়।'
    ),
  },
}
