import type { CurriculumStatus, CompletionStatus, Localized } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export type MetabolismCurriculumChapter = {
  id: string
  order: number
  groupId: string
  slug: string
  title: Localized
  summary: Localized
  status: CurriculumStatus
  completionStatus: CompletionStatus
  prerequisiteIds: string[]
  lessonId?: string
  estimatedMinutes: number
}

export type MetabolismCurriculumGroup = {
  id: string
  order: number
  title: Localized
  description: Localized
}

export type MetabolismCurriculum = {
  id: 'subject.metabolism'
  version: number
  updatedAt: string
  groups: MetabolismCurriculumGroup[]
  chapters: MetabolismCurriculumChapter[]
}

export const metabolismCurriculum: MetabolismCurriculum = {
  id: 'subject.metabolism',
  version: 1,
  updatedAt: '2026-10-13',
  groups: [
    {
      id: 'metabolism.foundations',
      order: 1,
      title: l('Metabolic Foundations & Bioenergetics', 'বিপাকীয় ভিত্তি ও জৈবশক্তিবিজ্ঞান'),
      description: l(
        'Cellular thermodynamics, ATP energy coupling, glycolysis, citric acid cycle, oxidative phosphorylation, and glycogen dynamics.',
        'কোষীয় তাপগতিবিদ্যা, এটিপি শক্তি সংযোজন, গ্লাইকোলাইসিস, সাইট্রিক অ্যাসিড চক্র, অক্সিডেটিভ ফসফরাইলেশন এবং গ্লাইকোজেন গতিবিদ্যা।'
      ),
    },
    {
      id: 'metabolism.lipids',
      order: 2,
      title: l('Lipid & Lipoprotein Metabolism', 'লিপিড ও লাইপোপ্রোটিন বিপাক'),
      description: l(
        'Fatty acid beta-oxidation, ketogenesis, de novo lipogenesis, cholesterol biosynthesis, steroidogenesis, and lipoprotein transport flux.',
        'ফ্যাটি অ্যাসিড বিটা-জারণ, কিটোজেনেসিস, ডি নোভো লিপোজেনেসিস, কোলেস্টেরল জৈবসংশ্লেষ, স্টেরয়েড উৎপাদন এবং লাইপোপ্রোটিন পরিবহন।'
      ),
    },
    {
      id: 'metabolism.nitrogen',
      order: 3,
      title: l('Nitrogen, Amino Acids & Nucleotides', 'নাইট্রোজেন, অ্যামিনো অ্যাসিড ও নিউক্লিওটাইড'),
      description: l(
        'Transamination, hepatic urea cycle, carbon skeleton fates, one-carbon transfer, purine/pyrimidine synthesis, and heme turnover.',
        'ট্রান্সঅ্যামিনেশন, যকৃতের ইউরিয়া চক্র, কার্বন কঙ্কালের পরিণতি, এক-কার্বন স্থানান্তর, পিউরিন/পিরিমিডিন সংশ্লেষ এবং হিম বিপাক।'
      ),
    },
    {
      id: 'metabolism.integration',
      order: 4,
      title: l('Metabolic Integration & Endocrine Crosstalk', 'বিপাকীয় সমন্বয় ও হরমোনীয় পারস্পরিক ক্রিয়া'),
      description: l(
        'Fed, fasted and starvation transitions, reciprocal hormone cascades (insulin/glucagon/AMPK), and organ metabolic specialization.',
        'ভুক্ত, উপবাস ও অনাহারকালীন রূপান্তর, পারস্পরিক হরমোন সংকেত (ইনসুলিন/গ্লুকাগন/এএমপিকে) এবং অঙ্গভিত্তিক বিপাকীয় বিশেষায়ন।'
      ),
    },
    {
      id: 'metabolism.clinical',
      order: 5,
      title: l('Micronutrients, Genetics & Clinical Pathology', 'অনুপুষ্টি, বংশগতি ও ক্লিনিক্যাল প্যাথলজি'),
      description: l(
        'Vitamin coenzymes, inborn errors of metabolism, metabolic syndrome, insulin resistance, MASLD, and clinical laboratory biomarkers.',
        'ভিটামিন কো-এনজাইম, জন্মগত বিপাকীয় ত্রুটি, মেটাবলিক সিন্ড্রোম, ইনসুলিন রেজিস্ট্যান্স, এমএএসএলডি এবং ক্লিনিক্যাল ল্যাবরেটরি মার্কার।'
      ),
    },
    {
      id: 'metabolism.advanced',
      order: 6,
      title: l(
        'Advanced Systems Metabolism, Oncology & Clinical Grand Rounds',
        'উচ্চতর সিস্টেম বিপাক, অনকোলজি ও ক্লিনিক্যাল গ্র্যান্ড রাউন্ডস'
      ),
      description: l(
        'Neurotransmitter biogenesis, glutathione redox defenses, mitochondrial dynamics, exercise energetics, circadian metabolism, immunometabolism, cancer metabolic reprogramming, in vivo fluxomics, and clinical grand rounds.',
        'নিউরোট্রান্সমিটার জৈবসংশ্লেষ, গ্লুটাথিয়ন রেডক্স প্রতিরক্ষা, মাইটোকন্ড্রিয়াল গতিবিদ্যা, ব্যায়ামের শক্তিবিজ্ঞান, বায়োলজিক্যাল রিদম, প্রতিরোধ-বিপাক, ক্যান্সার বিপাকীয় পুনর্গঠন, জীবন্ত ফ্লাক্সোমিক্স এবং ক্লিনিক্যাল গ্র্যান্ড রাউন্ডস।'
      ),
    },
  ],
  chapters: [
    // Group 1: Metabolic Foundations & Bioenergetics (Batch 1: Chapters 01–04 Available)
    {
      id: 'metabolism.chapter.01',
      order: 1,
      groupId: 'metabolism.foundations',
      slug: 'intro-bioenergetics',
      title: l('01 · Introduction to Human Metabolism & Bioenergetics', '০১ · মানব বিপাক ও জৈবশক্তিবিজ্ঞানের পরিচয়'),
      summary: l(
        'Foundational thermodynamics of living cells: free energy changes, ATP phosphate transfer potential, cellular energy charge, and redox electron carriers.',
        'জীবকোষের মৌলিক তাপগতিবিদ্যা: মুক্ত শক্তি পরিবর্তন, এটিপি ফসফেট স্থানান্তর বিভব, কোষীয় শক্তি আধান এবং রেডক্স ইলেকট্রন বাহক।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: [],
      lessonId: 'topic.metabolism.intro-bioenergetics',
      estimatedMinutes: 60,
    },
    {
      id: 'metabolism.chapter.02',
      order: 2,
      groupId: 'metabolism.foundations',
      slug: 'glycolysis-pyruvate',
      title: l('02 · Glycolysis & Pyruvate Oxidation', '০২ · গ্লাইকোলাইসিস ও পাইরুভেট জারণ'),
      summary: l(
        'The Embden-Meyerhof-Parnas 10-step pathway, hexokinase/PFK-1 regulation, substrate-level phosphorylation, and mitochondrial pyruvate dehydrogenase complex.',
        'এমবডেন-মেয়ারহফ-পার্নাস ১০-ধাপের গতিপথ, হেক্সোকাইনেজ/পিএফকে-১ নিয়ন্ত্রণ, সাবস্ট্রেট-স্তরের ফসফরাইলেশন এবং পাইরুভেট ডিহাইড্রোজিনেজ কমপ্লেক্স।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01'],
      lessonId: 'topic.metabolism.glycolysis-pyruvate',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.03',
      order: 3,
      groupId: 'metabolism.foundations',
      slug: 'tca-oxphos',
      title: l('03 · Citric Acid Cycle & Oxidative Phosphorylation', '০৩ · সাইট্রিক অ্যাসিড চক্র ও অক্সিডেটিভ ফসফরাইলেশন'),
      summary: l(
        'Mitochondrial matrix Krebs cycle reactions, ETC complexes I–IV, proton-motive force generation, F1Fo-ATP synthase mechanism, and respiratory uncoupling.',
        'মাইটোকন্ড্রিয়াল ম্যাট্রিক্স ক্রিয়েবস চক্র, ইটিসি কমপ্লেক্স I–IV, প্রোটন-মোটিভ বল সৃষ্টি, এফ১এফ০-এটিপি সিন্থেজ প্রক্রিয়া এবং শ্বসনজনিত আনকপলিং।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02'],
      lessonId: 'topic.metabolism.tca-oxphos',
      estimatedMinutes: 70,
    },
    {
      id: 'metabolism.chapter.04',
      order: 4,
      groupId: 'metabolism.foundations',
      slug: 'glycogen-gluconeogenesis',
      title: l('04 · Glycogen Metabolism & Gluconeogenesis', '০৪ · গ্লাইকোজেন বিপাক ও গ্লুকোনিওজেনেসিস'),
      summary: l(
        'Hepatic vs muscle glycogen storage and mobilization, reciprocal hormonal phosphorylation cascades, the 4 gluconeogenic bypass enzymes, and the Cori cycle.',
        'যকৃত ও পেশির গ্লাইকোজেন সঞ্চয় ও ভাঙন, পারস্পরিক হরমোন ফসফরাইলেশন ক্যাসকেড, গ্লুকোনিওজেনেসিসের ৪টি বাইপাস এনজাইম এবং কোরি চক্র।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02'],
      lessonId: 'topic.metabolism.glycogen-gluconeogenesis',
      estimatedMinutes: 65,
    },

    // Group 2: Lipid & Lipoprotein Metabolism (Batch 2: Chapters 05–08 Available)
    {
      id: 'metabolism.chapter.05',
      order: 5,
      groupId: 'metabolism.lipids',
      slug: 'fatty-acid-oxidation-ketones',
      title: l('05 · Fatty Acid Beta-Oxidation & Ketogenesis', '০৫ · ফ্যাটি অ্যাসিড বিটা-জারণ ও কিটোজেনেসিস'),
      summary: l(
        'Mitochondrial carnitine shuttle, repetitive 4-step beta-oxidation spiral, energy yield of palmitate, and hepatic ketogenesis in fasting.',
        'মাইটোকন্ড্রিয়াল কার্নিটিন শাটল, ৪-ধাপের পুনরাবৃত্তিমূলক বিটা-জারণ স্পাইরাল, পামিটেটের শক্তি ফলন এবং উপবাসকালীন যকৃতের কিটোজেনেসিস।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.03'],
      lessonId: 'topic.metabolism.fatty-acid-oxidation-ketones',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.06',
      order: 6,
      groupId: 'metabolism.lipids',
      slug: 'lipogenesis-triglycerides',
      title: l('06 · Fatty Acid & Triglyceride Synthesis', '০৬ · ফ্যাটি অ্যাসিড ও ট্রাইগ্লিসারাইড সংশ্লেষ'),
      summary: l(
        'Cytosolic citrate-malate shuttle, acetyl-CoA carboxylase regulation, fatty acid synthase multienzyme complex, and triglyceride packaging in adipocytes.',
        'সাইটোসোলিক সাইট্রেট-ম্যালেট শাটল, অ্যাসিটাইল-কোএ কার্বক্সিলেজ নিয়ন্ত্রণ, ফ্যাটি অ্যাসিড সিন্থেজ কমপ্লেক্স এবং অ্যাডিপোসাইটে ট্রাইগ্লিসারাইড সঞ্চয়।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02'],
      lessonId: 'topic.metabolism.lipogenesis-triglycerides',
      estimatedMinutes: 60,
    },
    {
      id: 'metabolism.chapter.07',
      order: 7,
      groupId: 'metabolism.lipids',
      slug: 'cholesterol-steroids',
      title: l('07 · Cholesterol & Steroid Metabolism', '০৭ · কোলেস্টেরল ও স্টেরয়েড বিপাক'),
      summary: l(
        'Mevalonate pathway, HMG-CoA reductase regulation, SREBP feedback, bile acid synthesis via 7alpha-hydroxylase, and steroid hormone biogenesis.',
        'মেভালোনেট গতিপথ, এইচএমজি-কোএ রিডাক্টেজ নিয়ন্ত্রণ, এসআরইবিপি প্রতিক্রিয়া, পিত্ত অ্যাসিড সংশ্লেষ এবং স্টেরয়েড হরমোন জৈবসংশ্লেষ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.06'],
      lessonId: 'topic.metabolism.cholesterol-steroids',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.08',
      order: 8,
      groupId: 'metabolism.lipids',
      slug: 'lipoproteins-lipid-flux',
      title: l('08 · Lipoprotein Transport & Lipid Flux', '০৮ · লাইপোপ্রোটিন পরিবহন ও লিপিড প্রবাহ'),
      summary: l(
        'Chylomicrons, VLDL, LDL, HDL, apolipoprotein markers (ApoB-100, ApoA-1, ApoE), LDL receptor-mediated endocytosis, and reverse cholesterol transport.',
        'কাইলোমাইক্রন, ভিএলডিএল, এলডিএল, এইচডিএল, অ্যাপোলাইপোপ্রোটিন মার্কার, এলডিএল রিসেপ্টর নিয়ন্ত্রিত এন্ডোসাইটোসিস এবং রিভার্স কোলেস্টেরল পরিবহন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.07'],
      lessonId: 'topic.metabolism.lipoproteins-lipid-flux',
      estimatedMinutes: 70,
    },

    // Group 3: Nitrogen, Amino Acids & Nucleotides (Batch 3: Chapters 09–12 Planned)
    {
      id: 'metabolism.chapter.09',
      order: 9,
      groupId: 'metabolism.nitrogen',
      slug: 'amino-acid-catabolism-urea',
      title: l('09 · Amino Acid Catabolism & Urea Cycle', '০৯ · অ্যামিনো অ্যাসিড ভাঙন ও ইউরিয়া চক্র'),
      summary: l(
        'Transamination with pyridoxal phosphate (PLP), oxidative deamination, ammonia toxicity, and the 5-step hepatic urea cycle.',
        'পাইরিডক্সাল ফসফেট (পিএলপি) সহ ট্রান্সঅ্যামিনেশন, অক্সিডেটিভ ডিঅ্যামিনেশন, অ্যামোনিয়ার বিষাক্ততা এবং ৫-ধাপের যকৃত ইউরিয়া চক্র।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.03'],
      lessonId: 'topic.metabolism.amino-acid-catabolism-urea',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.10',
      order: 10,
      groupId: 'metabolism.nitrogen',
      slug: 'carbon-skeletons-specialized-products',
      title: l('10 · Carbon Skeleton Fates & Specialized Products', '১০ · কার্বন কাঠামোর পরিণতি ও বিশেষ যৌগ'),
      summary: l(
        'Glucogenic vs ketogenic amino acid classification, one-carbon pool (folate/B12), creatine, nitric oxide, glutathione, and neurotransmitter precursors.',
        'গ্লুকোজেনিক বনাম কিটোজেনিক অ্যামিনো অ্যাসিডের শ্রেণিবিভাগ, এক-কার্বন পুল (ফোলেট/বি১২), ক্রিয়েটিন, নাইট্রিক অক্সাইড, গ্লুটাথিয়ন এবং নিউরোট্রান্সমিটার।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.09'],
      lessonId: 'topic.metabolism.carbon-skeletons-specialized-products',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.11',
      order: 11,
      groupId: 'metabolism.nitrogen',
      slug: 'purine-pyrimidine-metabolism',
      title: l('11 · Purine & Pyrimidine Metabolism', '১১ · পিউরিন ও পিরিমিডিন বিপাক'),
      summary: l(
        'De novo synthesis, salvage pathways (HGPRT/APRT), ribonucleotide reductase, uric acid degradation, clinical gout, and allopurinol mechanism.',
        'ডি নোভো সংশ্লেষ, সালভেজ গতিপথ (এইচজিপিআরটি/এপিআরটি), রিবোনিউক্লিওটাইড রিডাক্টেজ, ইউরিক অ্যাসিড উৎপাদন, গেঁটেবাত এবং অ্যালোপিউরিনল ক্রিয়া।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01'],
      lessonId: 'topic.metabolism.purine-pyrimidine-metabolism',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.12',
      order: 12,
      groupId: 'metabolism.nitrogen',
      slug: 'heme-bilirubin-metabolism',
      title: l('12 · Heme Biosynthesis & Bilirubin Metabolism', '১২ · হিম সংশ্লেষ ও বিলিরুবিন বিপাক'),
      summary: l(
        'ALA synthase pathway, porphyrinogen intermediates, lead toxicity, porphyrias, macrophage heme oxygenase, hepatic conjugation, and jaundice differential.',
        'এএলএ সিন্থেজ গতিপথ, পরফাইরিনোজেন মধ্যবর্তী যৌগ, সীসার বিষাক্ততা, পরফাইরিয়া, ম্যাক্রোফেজ হিম অক্সিজিনেজ, যকৃত কনজুগেশন এবং জন্ডিস নির্ণয়।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.03'],
      lessonId: 'topic.metabolism.heme-bilirubin-metabolism',
      estimatedMinutes: 70,
    },

    // Group 4: Integration, Hormones & Crosstalk (Batch 4: Chapters 13–15 Available)
    {
      id: 'metabolism.chapter.13',
      order: 13,
      groupId: 'metabolism.integration',
      slug: 'fed-fasted-starvation-states',
      title: l('13 · Fed, Fasted & Starvation Dynamics', '১৩ · ভুক্ত, উপবাস ও অনাহারকালীন পরিবর্তন'),
      summary: l(
        'Temporal fuel transitions: absorptive state, postabsorptive phase, early starvation, and prolonged starvation; brain keto-adaptation and muscle sparing.',
        'সময়ানুগ জ্বালানি রূপান্তর: শোষণকালীন অবস্থা, শোষোত্তর পর্যায়, প্রাথমিক উপবাস এবং দীর্ঘস্থায়ী অনাহার; মস্তিষ্কের কিটো-অভিযোজন ও পেশি সুরক্ষা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.04', 'metabolism.chapter.05'],
      lessonId: 'topic.metabolism.fed-fasted-starvation-states',
      estimatedMinutes: 70,
    },
    {
      id: 'metabolism.chapter.14',
      order: 14,
      groupId: 'metabolism.integration',
      slug: 'endocrine-fuel-regulation',
      title: l('14 · Endocrine Regulation of Fuel Flux', '১৪ · জ্বালানি প্রবাহের হরমোনজনিত নিয়ন্ত্রণ'),
      summary: l(
        'Receptor tyrosine kinase insulin signaling (IRS/PI3K/Akt), GPCR glucagon/epinephrine cascades, cortisol transcriptional effects, and AMPK energy sensing.',
        'রিসেপ্টর টাইরোসিন কাইনেজ ইনসুলিন সিগন্যালিং, জিপিসিআর গ্লুকাগন/এপিনেফ্রিন ক্যাসকেড, কর্টিসল ট্রান্সক্রিপশনাল প্রভাব এবং এএমপিকে শক্তি সংবেদন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.13'],
      lessonId: 'topic.metabolism.endocrine-fuel-regulation',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.15',
      order: 15,
      groupId: 'metabolism.integration',
      slug: 'organ-metabolic-specialization',
      title: l('15 · Organ-Specific Metabolic Specialization', '১৫ · অঙ্গভিত্তিক বিপাকীয় বিশেষায়ন'),
      summary: l(
        'Functional fuel specialization: hepatic hub, skeletal muscle anaerobic/aerobic flux, cardiac fatty acid reliance, brain glucose dependence, and adipose thermogenesis.',
        'কার্যকরী জ্বালানি বিশেষায়ন: যকৃতের কেন্দ্রীয় ভূমিকা, কঙ্কালপেশির অ্যানেরোবিক/অ্যারোবিক প্রবাহ, হৃৎপিণ্ডের ফ্যাটি অ্যাসিড নির্ভরতা এবং মস্তিষ্ক বিপাক।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.14'],
      lessonId: 'topic.metabolism.organ-metabolic-specialization',
      estimatedMinutes: 65,
    },

    // Group 5: Micronutrients, Genetics & Clinics (Batch 5: Chapters 16–18 Available)
    {
      id: 'metabolism.chapter.16',
      order: 16,
      groupId: 'metabolism.clinical',
      slug: 'micronutrients-cofactors',
      title: l('16 · Micronutrients & Metabolic Cofactors', '১৬ · অনুপুষ্টি ও বিপাকীয় কোফ্যাক্টর'),
      summary: l(
        'Essential coenzymes: thiamine (TPP), riboflavin (FAD), niacin (NAD), pantothenate (CoA), pyridoxine (PLP), biotin, folate, cobalamin, and trace metals.',
        'অপরিহার্য কো-এনজাইম: থায়ামিন (টিপিপি), রিবোফ্লাভিন (এফএডি), নিয়াসিন (এনএডি), প্যান্টোথেনেট (কোএ), পাইরিডক্সিন (পিএলপি), বায়োটিন, ফোলেট এবং ট্রেস ধাতু।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01'],
      lessonId: 'topic.metabolism.micronutrients-cofactors',
      estimatedMinutes: 65,
    },
    {
      id: 'metabolism.chapter.17',
      order: 17,
      groupId: 'metabolism.clinical',
      slug: 'inborn-errors-metabolism',
      title: l('17 · Inborn Errors of Metabolism', '১৭ · জন্মগত বিপাকীয় ত্রুটি'),
      summary: l(
        'Monogenic metabolic diseases: phenylketonuria (PKU), galactosemia, glycogen storage diseases (von Gierke, Pompe, McArdle), MCAD deficiency, and newborn screening.',
        'একক জিনীয় বিপাকীয় রোগ: ফিনাইলকিটোনুরিয়া (পিকেইউ), গ্যালাক্টোসেমিয়া, গ্লাইকোজেন সঞ্চয় রোগ (ভন গিয়ের্কে, পম্পে, ম্যাকআর্ডল), এমসিএডি ঘাটতি ও নবজাতক স্ক্রিনিং।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.04', 'metabolism.chapter.09'],
      lessonId: 'topic.metabolism.inborn-errors-metabolism',
      estimatedMinutes: 75,
    },
    {
      id: 'metabolism.chapter.18',
      order: 18,
      groupId: 'metabolism.clinical',
      slug: 'metabolic-disease-clinical-integration',
      title: l('18 · Metabolic Disease & Clinical Integration', '১৮ · বিপাকীয় ব্যাধি ও ক্লিনিক্যাল সমন্বয়'),
      summary: l(
        'Pathophysiology of type 2 diabetes mellitus, insulin resistance, metabolic syndrome, metabolic dysfunction-associated steatohepatitis (MASH), and exercise physiology.',
        'টাইপ ২ ডায়াবেটিস মেলিটাস, ইনসুলিন রেজিস্ট্যান্স, মেটাবলিক সিন্ড্রোম, বিপাকীয় ফ্যাটি লিভার ডিজিজ (ম্যাশ) এবং ব্যায়ামের শারীরবৃত্তীয় সমন্বয়।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.14', 'metabolism.chapter.17'],
      lessonId: 'topic.metabolism.metabolic-disease-clinical-integration',
      estimatedMinutes: 75,
    },

    // Batch A: Advanced Cellular Mechanisms & Organ Pipelines (Chapters 19–27 Available)
    {
      id: 'metabolism.chapter.19',
      order: 19,
      groupId: 'metabolism.foundations',
      slug: 'enzyme-kinetics-control',
      title: l(
        '19 · Enzyme Kinetics, Inhibition & Metabolic Control Analysis',
        '১৯ · এনজাইম গতিবিদ্যা, প্রতিরোধ ও বিপাকীয় নিয়ন্ত্রণ বিশ্লেষণ'
      ),
      summary: l(
        'Briggs-Haldane steady-state derivation, Km, kcat, reversible inhibition mechanisms, allosteric cooperativity, and Kacser-Burns MCA flux control coefficients.',
        'এনজাইম গতিবিদ্যা: ব্রিগস-হ্যালডেন স্থিতাবস্থা প্রতিপাদন, Km, kcat, বিপরীতমুখী প্রতিরোধ মডেল, অ্যালবস্টেরিক সহযোগিতা এবং ক্যাকসার-বার্নস MCA ফ্লাক্স কন্ট্রোল কোফিশিয়েন্ট।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01'],
      lessonId: 'topic.metabolism.enzyme-kinetics-control',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.20',
      order: 20,
      groupId: 'metabolism.foundations',
      slug: 'cellular-compartmentation-shuttles',
      title: l(
        '20 · Cellular Compartmentation, Metabolite Transport & Shuttle Systems',
        '২০ · কোষীয় প্রকোষ্ঠায়ন, মেটাবোলাইট পরিবহন ও শাটল ব্যবস্থা'
      ),
      summary: l(
        'Mitochondrial SLC25 carrier family, Malate-Aspartate (~2.5 ATP) vs Glycerol-3-Phosphate (~1.5 ATP) shuttles, peroxisomal ABCD1, and ER G6PT/SLC37A4 transport.',
        'মাইটোকন্ড্রিয়াল SLC25 বাহক পরিবার, ম্যালেট-অ্যাসপার্টেট ও গ্লিসারল-৩-ফসফেট শাটল ব্যবস্থা, পারঅক্সিসোমাল ABCD1 এবং ER হেক্সোজ পরিবহন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02', 'metabolism.chapter.03'],
      lessonId: 'topic.metabolism.cellular-compartmentation-shuttles',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.21',
      order: 21,
      groupId: 'metabolism.foundations',
      slug: 'pentose-phosphate-pathway',
      title: l('21 · Pentose Phosphate Pathway & NADPH Generation', '২১ · পেন্টোজ ফসফেট পথ ও এনএডিপিএইচ উৎপাদন'),
      summary: l(
        'Oxidative G6PD branch generating NADPH, non-oxidative transketolase/transaldolase shuffles, 4 metabolic flux modes, erythrocyte glutathione defense, and favism.',
        'NADPH উৎপাদনকারী অক্সিডেটিভ G6PD শাখা, নন-অক্সিডেটিভ ট্রান্সকিটোলেজ/ট্রান্সঅ্যালডোলেজ কার্বন পুনর্বিন্যাস, ৪টি বিপাকীয় মোড, এরিথ্রোসাইট গ্লুটাথিয়ন রেডক্স প্রতিরক্ষা ও ফ্যাভিজম।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02'],
      lessonId: 'topic.metabolism.pentose-phosphate-pathway',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.22',
      order: 22,
      groupId: 'metabolism.foundations',
      slug: 'fructose-galactose-alternative-sugars',
      title: l(
        '22 · Fructose, Galactose & Alternative Sugar Metabolism',
        '২২ · ফ্রুক্টোজ, গ্যালাক্টোজ ও বিকল্প শর্করা বিপাক'
      ),
      summary: l(
        'Hepatic fructolysis via ketohexokinase-C bypassing PFK-1, aldolase B entrapment, diabetic sorbitol polyol pathway, galactose Leloir pathway, and hexosamine O-GlcNAc sensing.',
        'PFK-1 নিয়ন্ত্রণহীন হেপাটিক ফ্রুক্টোলাইসিস, অ্যালডোলেজ বি ঘাটতি, ডায়াবেটিক সরবিটল পলিওল পথ, গ্যালাক্টোজ লেলোয়ার পথ এবং হেক্সোসামাইন O-GlcNAc পুষ্টি-সংবেদন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02'],
      lessonId: 'topic.metabolism.fructose-galactose-alternative-sugars',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.23',
      order: 23,
      groupId: 'metabolism.integration',
      slug: 'lactate-cori-glucose-alanine',
      title: l(
        '23 · Lactate Metabolism, Cori Cycle & Glucose–Alanine Cycle',
        '২৩ · ল্যাকটেট বিপাক, কোরি চক্র ও গ্লুকোজ-অ্যালানিন চক্র'
      ),
      summary: l(
        'Lactate Shuttle hypothesis, MCT1/MCT4 transporters, mitochondrial lactate oxidation complex, hepatic Cori cycle (6 ATP cost), muscle Cahill cycle, and Type A vs B lactic acidosis.',
        'ল্যাকটেট শাটল তত্ত্ব, MCT1/MCT4 বাহক, মাইটোকন্ড্রিয়াল ল্যাকটেট জারণ, হেপাটিক কোরি চক্র (৬ এটিপি ব্যয়), কঙ্কালপেশির কাহিল চক্র এবং টাইপ এ বনাম বি ল্যাকটিক অ্যাসিডোসিস।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02', 'metabolism.chapter.04'],
      lessonId: 'topic.metabolism.lactate-cori-glucose-alanine',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.24',
      order: 24,
      groupId: 'metabolism.lipids',
      slug: 'lipid-digestion-chylomicrons',
      title: l(
        '24 · Intestinal Lipid Digestion, Absorption & Chylomicron Assembly',
        '২৪ · অন্ত্রে লিপিড পরিপাক, শোষণ ও কাইলোমাইক্রন সমাবেশ'
      ),
      summary: l(
        'Luminal bile micelle emulsification, pancreatic lipase-colipase catalysis, enterocyte CD36/NPC1L1 uptake, TAG resynthesis, APOBEC-1 editing of ApoB-48, MTP lipidation, and thoracic duct bypass.',
        'পিত্তলবণের মাইসেলি ইমালসিফিকেশন, অগ্ন্যাশয় লাইপেজ-কোলিপাইপেজ অনুঘটন, অন্ত্রের শোষণ (CD36, NPC1L1), চর্বি পুনর্গঠন, APOBEC-1 আরএনএ এডিটিং, MTP লিপিডেশন এবং থোরাসিক ডাক্ট পরিবহন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.05', 'metabolism.chapter.08'],
      lessonId: 'topic.metabolism.lipid-digestion-chylomicrons',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.25',
      order: 25,
      groupId: 'metabolism.lipids',
      slug: 'phospholipids-sphingolipids-eicosanoids',
      title: l(
        '25 · Phospholipid, Sphingolipid & Eicosanoid Metabolism',
        '২৫ · ফসফোলিপিড, স্ফিংগোলিপিড ও আইকোসানয়েড বিপাক'
      ),
      summary: l(
        'Membrane glycerophospholipids (Kennedy pathway, PEMT, cardiolipin remodeling by tafazzin), sphingolipids (ceramide, sphingomyelin, S1P rheostat), and eicosanoids (cPLA2, COX-1/2, 5-LOX, aspirin cardioprotection).',
        'ঝিল্লি গ্লিসারোফসফোলিপিড (কেনেডি পথ, পিইএমটি, কার্ডিওলিপিন পুনর্গঠন), স্ফিংগোলিপিড (সেরামাইড, স্ফিংগোমায়েলিন, S1P ভারসাম্য) এবং আইকোসানয়েড (cPLA2, COX-1/2, 5-LOX, অ্যাসপিরিন কার্ডিওপ্রোটেকশন)।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.05', 'metabolism.chapter.06'],
      lessonId: 'topic.metabolism.phospholipids-sphingolipids-eicosanoids',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.26',
      order: 26,
      groupId: 'metabolism.nitrogen',
      slug: 'protein-turnover-proteasome-autophagy',
      title: l(
        '26 · Protein Turnover, Proteasomes, Autophagy & Amino Acid Pools',
        '২৬ · প্রোটিন রূপান্তর, প্রোটিওসোম, অটোফ্যাজি ও অ্যামিনো অ্যাসিড পুল'
      ),
      summary: l(
        'The E1-E2-E3 ubiquitin cascade, 26S proteasome structural biology and bortezomib pharmacology, macroautophagy and LC3 lipidation, chaperone-mediated autophagy (CMA), lysosomal amino acid sensing (Sestrin2, Rag, mTORC1), and whole-body nitrogen buffering.',
        'E1-E2-E3 ইউবিকুইটিন ক্যাসকেড, ২৬এস প্রোটিওসোম গঠন ও বরটেজোমিব ফার্মাকোলজি, ম্যাক্রোঅটোফ্যাজি ও LC3 লিপিডেশন, চ্যাপেরন-চালিত অটোফ্যাজি (CMA), লাইসোসোমাল mTORC1 পুষ্টি সংবেদন এবং সার্বিক নাইট্রোজেন ভারসাম্য।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.09', 'metabolism.chapter.10'],
      lessonId: 'topic.metabolism.protein-turnover-proteasome-autophagy',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.27',
      order: 27,
      groupId: 'metabolism.nitrogen',
      slug: 'one-carbon-methylation-transsulfuration',
      title: l(
        '27 · One-Carbon Metabolism, Methylation & Transsulfuration',
        '২৭ · এক-কার্বন বিপাক, মিথাইলেশন ও ট্রান্সসালফারেশন'
      ),
      summary: l(
        'Mitochondrial formate shuttle and cytosolic folate cycle, MTHFR kinetics and the B12 methyl trap, methionine synthase, SAM-driven epigenetics, hepatic BHMT bypass, CBS-CSE transsulfuration to glutathione, MTHFR C677T polymorphism, and classical homocystinuria.',
        'মাইটোকন্ড্রিয়াল ফরমেট শাটল ও সাইটোসোলিক ফোলেট চক্র, MTHFR গতিবিদ্যা ও ভিটামিন বি১২ মিথাইল ট্র্যাপ, মেথিওনিন সিন্থেস, SAM-চালিত এপিজেনেটিক্স, হেপাটিক BHMT বাইপাস, CBS-CSE দ্বারা গ্লুটাথিয়ন উৎপাদন এবং ক্লাসিক্যাল হোমোকসিস্টিনুরিয়া।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.09', 'metabolism.chapter.11'],
      lessonId: 'topic.metabolism.one-carbon-methylation-transsulfuration',
      estimatedMinutes: 50,
    },

    // Batch B: Systems Biology, Redox, Oncology & Capstone Grand Rounds (Chapters 28–36 Available)
    {
      id: 'metabolism.chapter.28',
      order: 28,
      groupId: 'metabolism.advanced',
      slug: 'neurotransmitters-specialized-amines',
      title: l(
        '28 · Neurotransmitters, Biogenic Amines & Neurochemistry',
        '২৮ · নিউরোট্রান্সমিটার, বায়োজেনিক অ্যামিন ও স্নায়ুরসায়ন'
      ),
      summary: l(
        'Catecholamine synthesis via tyrosine hydroxylase (BH4) and PNMT, serotonin from tryptophan (TPH), histamine, GABA shunt, nitric oxide synthase (NOS) isoforms, and monoamine oxidase / COMT degradation pharmacology.',
        'টাইরোসিন হাইড্রোক্সিলেজ (BH4) ও PNMT দ্বারা ক্যাটেকোলামাইন সংশ্লেষ, ট্রিপটোফ্যান থেকে সেরোটোনিন (TPH), হিস্টামিন, GABA শাট, নাইট্রিক অক্সাইড সিন্থেজ (NOS) এবং MAO/COMT ভাঙন ফার্মাকোলজি।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.10'],
      lessonId: 'topic.metabolism.neurotransmitters-specialized-amines',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.29',
      order: 29,
      groupId: 'metabolism.advanced',
      slug: 'glutathione-ros-redox-homeostasis',
      title: l(
        '29 · Glutathione, Reactive Oxygen Species & Cellular Redox Homeostasis',
        '২৯ · গ্লুটাথিয়ন, প্রতিক্রিয়াশীল অক্সিজেন প্রজাতি ও কোষীয় রেডক্স ভারসাম্য'
      ),
      summary: l(
        'Superoxide and hydrogen peroxide generation, SOD isoforms, 2-step GCL-GSS glutathione synthesis, glutathione peroxidase / reductase cycle, thioredoxin system, acetaminophen (NAPQI) toxicity, and ferroptosis prevention via GPX4.',
        'সুপারঅক্সাইড ও হাইড্রোজেন পারঅক্সাইড উৎপাদন, SOD আইসোফর্ম, ২-ধাপের GCL-GSS গ্লুটাথিয়ন সংশ্লেষ, গ্লুটাথিয়ন পারঅক্সিডেজ/রিডাক্টেজ চক্র, থায়োরেডক্সিন ব্যবস্থা, প্যারাসিটামল (NAPQI) বিষক্রিয়া এবং GPX4 দ্বারা ফেরোপ্টোসিস প্রতিরোধ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.21', 'metabolism.chapter.27'],
      lessonId: 'topic.metabolism.glutathione-ros-redox-homeostasis',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.30',
      order: 30,
      groupId: 'metabolism.advanced',
      slug: 'mitochondrial-dynamics-flexibility',
      title: l(
        '30 · Mitochondrial Dynamics, Mitophagy & Metabolic Flexibility',
        '৩০ · মাইটোকন্ড্রিয়াল গতিবিদ্যা, মাইটোফ্যাজি ও বিপাকীয় নমনীয়তা'
      ),
      summary: l(
        'Mitochondrial fission (DRP1, FIS1) and fusion (MFN1/2, OPA1), PINK1-Parkin quality control mitophagy, respiratory supercomplexes (respirasomes), uncoupling proteins (UCP1 thermogenesis), and Randle fatty acid-glucose cycle flexibility.',
        'মাইটোকন্ড্রিয়াল বিভাজন (DRP1, FIS1) ও সংযোজন (MFN1/2, OPA1), PINK1-Parkin মাইটোফ্যাজি গুণমান নিয়ন্ত্রণ, শ্বাসযন্ত্রের সুপারকমপ্লেক্স, আনকপলিং প্রোটিন (UCP1 থার্মোজেনেসিস) এবং র‍্যান্ডল চক্রের বিপাকীয় নমনীয়তা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.03', 'metabolism.chapter.26'],
      lessonId: 'topic.metabolism.mitochondrial-dynamics-flexibility',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.31',
      order: 31,
      groupId: 'metabolism.advanced',
      slug: 'exercise-bioenergetics-adaptation',
      title: l(
        '31 · Exercise Bioenergetics, Fatigue & Metabolic Adaptation',
        '৩১ · ব্যায়ামের জৈবশক্তিবিজ্ঞান, ক্লান্তি ও বিপাকীয় অভিযোজন'
      ),
      summary: l(
        'Temporal fuel continuum: phosphocreatine kinase buffer, anaerobic glycogenolysis, oxidative phosphorylation transition, crossover concept, AMPK/PGC-1alpha mitochondrial biogenesis, and exercise-induced myokine signaling.',
        'সময়ভিত্তিক জ্বালানি রূপান্তর: ফসফোক্রিয়েটিন কাইনেজ বাফার, অবাত গ্লাইকোজেনোলাইসিস, জারণ শ্বসন রূপান্তর, ক্রসওভার তত্ত্ব, AMPK/PGC-1alpha মাইটোকন্ড্রিয়াল বায়োজেনেসিস এবং মায়োকাইন সংকেত।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01', 'metabolism.chapter.15'],
      lessonId: 'topic.metabolism.exercise-bioenergetics-adaptation',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.32',
      order: 32,
      groupId: 'metabolism.advanced',
      slug: 'circadian-metabolism-rhythms',
      title: l(
        '32 · Circadian Metabolism, Peripheral Clocks & Chronobiology',
        '৩২ · সার্কাডিয়ান বিপাক, প্রান্তীয় ঘড়ি ও ক্রোনোবায়োলজি'
      ),
      summary: l(
        'Suprachiasmatic nucleus (SCN) central clock and peripheral tissue oscillators, CLOCK-BMAL1 / PER-CRY transcriptional feedback loop, REV-ERB/ROR lipid regulation, circadian NAD+-SIRT1 rhythmicity, and metabolic consequences of shift work and chronodisruption.',
        'সুপ্রাকায়াজম্যাটিক নিউক্লিয়াস (SCN) কেন্দ্রীয় ঘড়ি ও প্রান্তীয় ছন্দ, CLOCK-BMAL1 ও PER-CRY নিয়ন্ত্রণ লুপ, REV-ERB/ROR লিপিড ছন্দ, NAD+-SIRT1 চক্র এবং শিফট ওয়ার্ক ও অনিয়মিত সময়ের বিপাকীয় ক্ষতি।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.14'],
      lessonId: 'topic.metabolism.circadian-metabolism-rhythms',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.33',
      order: 33,
      groupId: 'metabolism.advanced',
      slug: 'immunometabolism-inflammation',
      title: l(
        '33 · Immunometabolism & Metabolic Regulation of Inflammation',
        '৩৩ · প্রতিরোধ-বিপাক ও প্রদাহের বিপাকীয় নিয়ন্ত্রণ'
      ),
      summary: l(
        'Pro-inflammatory M1 macrophage aerobic glycolysis, the two-point TCA cycle break (citrate and succinate accumulation), ACOD1/IRG1 itaconate biosynthesis and SDH inhibition, succinate-mediated HIF-1alpha stabilization, M2 macrophage oxidative phosphorylation, and Teff vs Treg immunometabolism.',
        'প্রদাহজনক এম১ ম্যাক্রোফেজের অবাধ গ্লাইকোলাইসিস, সাইট্রিক এসিড চক্রের দুই স্থানে ভাঙন (সাইট্রেট ও সাকসিনেট জমা), ACOD1 দ্বারা আইটাকোনেট তৈরি ও SDH প্রতিরোধ, সাকসিনেট দ্বারা HIF-1alpha স্থায়িত্ব, এম২ ম্যাক্রোফেজের চর্বি জারণ এবং Teff বনাম Treg রূপান্তর।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02', 'metabolism.chapter.03'],
      lessonId: 'topic.metabolism.immunometabolism-inflammation',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.34',
      order: 34,
      groupId: 'metabolism.advanced',
      slug: 'cancer-metabolic-reprogramming',
      title: l(
        '34 · Cancer Metabolic Reprogramming & Oncometabolite Dynamics',
        '৩৪ · ক্যান্সারের বিপাকীয় পুনর্বিন্যাস ও অনকোমেটাবোলাইট গতিবিদ্যা'
      ),
      summary: l(
        'The Warburg effect and aerobic fermentation, dimeric vs tetrameric PKM2 regulation, glutamine addiction via ASCT2 and GLS1, IDH1/2 neomorphic mutations producing (R)-2-hydroxyglutarate (2-HG), G-CIMP hypermethylation, ACLY/FASN de novo lipogenesis, and targeted metabolic therapeutics including CB-839 and ivosidenib.',
        'ওয়ারবার্গ প্রভাব ও অবাধ গাঁজন, ডাইমেরিক PKM2 নিয়ন্ত্রণ, ASCT2 ও GLS1 দ্বারা গ্লুটামিন নির্ভরতা, IDH1/2 মিউটেশনের মাধ্যমে (R)-2-HG তৈরি ও এপিজেনেটিক মিথাইলেশন, ACLY/FASN চর্বি সংশ্লেষ এবং আধুনিক ওষুধ CB-839 ও আইভোসিডেনিব।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.02', 'metabolism.chapter.03'],
      lessonId: 'topic.metabolism.cancer-metabolic-reprogramming',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.35',
      order: 35,
      groupId: 'metabolism.advanced',
      slug: 'flux-analysis-metabolomics',
      title: l(
        '35 · Metabolic Flux Analysis, Stable Isotope Tracing & Metabolomics',
        '৩৫ · বিপাকীয় প্রবাহ বিশ্লেষণ, স্টেবল আইসোটোপ ট্রেসিং ও মেটাবোলোমিক্স'
      ),
      summary: l(
        'Dynamic flux velocity (J = dC/dt, S*v = 0), stable isotope tracing using [U-13C]glucose and [13C]lactate, mass isotopomer distribution analysis (MIDA, M+0 to M+n), natural 1.1% 13C abundance correction, LC-MS/MS and Orbitrap instrumentation, 13C-MFA modeling, and intraoperative human surgical isotope infusions.',
        'গতিশীল প্রবাহ বেগ (J = dC/dt, S*v = 0), [U-13C]গ্লুকোজ ও ল্যাকটেট দ্বারা আইসোটোপ ট্রেসিং, ম্যাস আইসোটোপোমার বণ্টন বিশ্লেষণ (MIDA), প্রাকৃতিক ১৩সি সংশোধন, এলসি-এমএস ও অরবিট্রেপ প্রযুক্তি এবং মানুষের অপারেশনের সময় জীবন্ত আইসোটোপ পরীক্ষা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.01', 'metabolism.chapter.02'],
      lessonId: 'topic.metabolism.flux-analysis-metabolomics',
      estimatedMinutes: 50,
    },
    {
      id: 'metabolism.chapter.36',
      order: 36,
      groupId: 'metabolism.advanced',
      slug: 'clinical-cases-grand-rounds',
      title: l(
        '36 · Clinical Grand Rounds: Acute Metabolic Emergencies & Inborn Errors',
        '৩৬ · ক্লিনিক্যাল গ্র্যান্ড রাউন্ডস: তীব্র বিপাকীয় জরুরি অবস্থা ও জন্মগত ত্রুটি'
      ),
      summary: l(
        'Capstone grand rounds: Refeeding syndrome and lethal hypophosphatemia, Diabetic Ketoacidosis (DKA) vs Hyperosmolar Hyperglycemic State (HHS), neonatal propionic and methylmalonic acidemias with secondary hyperammonemia, Type A vs Type B lactic acidosis, and alcoholic ketoacidosis.',
        'চূড়ান্ত গ্র্যান্ড রাউন্ডস: রিফিডিং সিন্ড্রোম ও মারাত্মক ফসফেট শূন্যতা, DKA বনাম হাইপারঅসমোলার ডায়াবেটিক সংকট, প্রোপিয়নিক ও মিথাইলম্যালনিক এসিডেমিয়া ও অ্যামোনিয়া বিষক্রিয়া, টাইপ-এ বনাম বি ল্যাকটিক এসিডোসিস এবং মদ্যপ কিটোঅ্যাসিডোসিস।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.04', 'metabolism.chapter.05', 'metabolism.chapter.09'],
      lessonId: 'topic.metabolism.clinical-cases-grand-rounds',
      estimatedMinutes: 50,
    },
  ],
}
