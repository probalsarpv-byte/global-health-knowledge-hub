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
  updatedAt: '2026-10-12',
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

    // Group 5: Micronutrients, Genetics & Clinics (Batch 5: Chapters 16–18 Planned)
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
      status: 'planned',
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
      status: 'planned',
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
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['metabolism.chapter.14', 'metabolism.chapter.17'],
      lessonId: 'topic.metabolism.metabolic-disease-clinical-integration',
      estimatedMinutes: 75,
    },
  ],
}
