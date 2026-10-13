import type { CurriculumStatus, CompletionStatus, Localized } from './lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export type NutritionCurriculumChapter = {
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

export type NutritionCurriculumGroup = {
  id: string
  order: number
  title: Localized
  description: Localized
}

export type NutritionCurriculum = {
  id: 'subject.nutrition'
  version: number
  updatedAt: string
  groups: NutritionCurriculumGroup[]
  chapters: NutritionCurriculumChapter[]
}

export const nutritionCurriculum: NutritionCurriculum = {
  id: 'subject.nutrition',
  version: 1,
  updatedAt: '2026-10-13',
  groups: [
    {
      id: 'nutrition.foundations',
      order: 1,
      title: l('Foundations of Human Nutrition & Energetics', 'মানব পুষ্টির ভিত্তি ও শক্তিবিজ্ঞান'),
      description: l(
        'Thermodynamic energy balance, metabolic rate components, gastrointestinal digestion, brush-border transport kinetics, carbohydrate quality, and dietary fiber fermentation.',
        'তাপগতিবিদ্যাগত শক্তি ভারসাম্য, বিপাকীয় হারের উপাদান, পরিপাকনালির হজম, ব্রাশ-বর্ডার পরিবহন গতিবিদ্যা, কার্বোহাইড্রেটের গুণগত মান এবং খাদ্য আঁশের গাঁজন।'
      ),
    },
    {
      id: 'nutrition.macronutrients',
      order: 2,
      title: l('Lipid & Protein Nutrition', 'লিপিড ও প্রোটিন পুষ্টি'),
      description: l(
        'Fatty acid saturation, industrial trans-fats, essential PUFA ratios, dietary protein quality metrics (DIAAS/PDCAAS), nitrogen balance, satiety neuroendocrinology, and fluid osmoregulation.',
        'ফ্যাটি অ্যাসিডের সম্পৃক্ততা, ট্রান্স-ফ্যাট, প্রয়োজনীয় পিইউএফএ অনুপাত, প্রোটিনের গুণগত মান (DIAAS/PDCAAS), নাইট্রোজেন ভারসাম্য, ক্ষুধা ও তৃপ্তির স্নায়বিক নিয়ন্ত্রণ এবং তরল ভারসাম্য।'
      ),
    },
    {
      id: 'nutrition.micronutrients',
      order: 3,
      title: l('Micronutrients, Bioactives & Cellular Coenzymes', 'অনুপুষ্টি, বায়োঅ্যাক্টিভ যৌগ ও কোষীয় কো-এনজাইম'),
      description: l(
        'Fat-soluble vitamin signaling, water-soluble B-complex coenzymes in bioenergetics, trace mineral antioxidant defenses, calcium-phosphate bone homeostasis, and systemic iron regulation.',
        'স্নেহ-দ্রবণীয় ভিটামিন সংকেত, শক্তি রূপান্তরে বি-কমপ্লেক্স কো-এনজাইম, খনিজ অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা, ক্যালসিয়াম-ফসফেট অস্থির ভারসাম্য এবং সিস্টেমিক আয়রন নিয়ন্ত্রণ।'
      ),
    },
    {
      id: 'nutrition.microbiome',
      order: 4,
      title: l('Gastrointestinal Physiology, Microbiome & Gut Barrier', 'পরিপাক শারীরবৃত্ত, অন্ত্রীয় মাইক্রোবায়োম ও প্রাচীর প্রতিরক্ষা'),
      description: l(
        'Mucosal immune architecture, tight junction integrity, gut microbiome metagenomics, microbial metabolites, prebiotics/probiotics, and mechanisms of food allergy and celiac disease.',
        'মিউকোসার প্রতিরোধ গঠন, টাইট জাংশন অখণ্ডতা, অন্ত্রীয় মাইক্রোবায়োম মেটাজেনোমিক্স, জীবাণুঘটিত বিপাকজাত পদার্থ, প্রিবায়োটিক/প্রোবায়োটিক এবং খাদ্য অ্যালার্জি ও সিলিয়াক রোগ।'
      ),
    },
    {
      id: 'nutrition.clinical',
      order: 5,
      title: l('Clinical Nutrition, Metabolic Health & Medical Nutrition Therapy', 'ক্লিনিক্যাল পুষ্টি, বিপাকীয় স্বাস্থ্য ও চিকিৎসা পুষ্টি থেরাপি'),
      description: l(
        'Nutritional management of obesity and diabetes, cardiovascular lipid dietetics, renal mineral restrictions, hepatobiliary disorders, MASLD, and enteral/parenteral nutrition in clinical malnutrition.',
        'স্থূলতা ও ডায়াবেটিসের খাদ্য ব্যবস্থাপনা, হৃদরোগের লিপিড নিয়ন্ত্রণ, বৃক্কের খনিজ সীমাবদ্ধতা, যকৃত ও পিত্তনালির রোগ, এমএএসএলডি এবং অপুষ্টিতে এন্টারাল ও প্যারেন্টেরাল পুষ্টি।'
      ),
    },
    {
      id: 'nutrition.lifespan',
      order: 6,
      title: l('Lifespan, Sports & Functional Precision Dietetics', 'জীবনকাল, ক্রীড়া ও কার্যকরী নির্ভুল পুষ্টিবিজ্ঞান'),
      description: l(
        'Maternal-fetal embryogenesis nutrition, pediatric growth, geriatric sarcopenia and anabolic resistance, sports fuel periodization, ergogenic aids, and nutrigenomics.',
        'মাতৃ-ভ্রূণীয় বিকাশের পুষ্টি, শিশুর বৃদ্ধি, বার্ধক্যের সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্স, খেলোয়াড়দের জ্বালানি পর্যায়ক্রম এবং নিউট্রিজেনোমিক্স।'
      ),
    },
  ],
  chapters: [
    // Group 1: Foundations of Human Nutrition & Energetics (Batch 1: Available)
    {
      id: 'nutrition.chapter.01',
      order: 1,
      groupId: 'nutrition.foundations',
      slug: 'energy-balance-tdee',
      title: l('01 · Energy Balance, Basal Metabolic Rate & Total Daily Energy Expenditure', '০১ · শক্তি ভারসাম্য, বেসাল মেটাবলিক রেট ও মোট দৈনিক শক্তি ব্যয়'),
      summary: l(
        'First law of thermodynamics in human physiology: direct and indirect calorimetry, respiratory quotient, BMR/RMR determinants, TEF, NEAT, EAT, and metabolic adaptation.',
        'মানব শারীরবৃত্তে তাপগতিবিদ্যার প্রথম সূত্র: প্রত্যক্ষ ও পরোক্ষ ক্যালোরিমেট্রি, শ্বসন অনুপাত, বিএমআর নির্ধারণকারী উপাদান, টিইএফ, এনইএটি, ইএটি এবং বিপাকীয় অভিযোজন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: [],
      lessonId: 'topic.nutrition.energy-balance-tdee',
      estimatedMinutes: 55,
    },
    {
      id: 'nutrition.chapter.02',
      order: 2,
      groupId: 'nutrition.foundations',
      slug: 'macronutrient-digestion-absorption',
      title: l('02 · Macronutrient Digestion, Brush-Border Transport & Absorption Mechanics', '০২ · ম্যাক্রোনিউট্রিয়েন্ট পরিপাক, ব্রাশ-বর্ডার পরিবহন ও শোষণ প্রক্রিয়া'),
      summary: l(
        'Luminal zymogen cascades, enterocyte brush-border hydrolases, transport kinetics of glucose, galactose, fructose, amino acids, and lipids, and portal versus lymphatic routing.',
        'লুমেনের জাইমোজেন সক্রিয়করণ, এন্টারোসাইটের ব্রাশ-বর্ডার হাইড্রোলেজ, শর্করা, অ্যামিনো অ্যাসিড ও চর্বির পরিবহন গতিবিদ্যা এবং পোর্টাল বনাম লসিকা সঞ্চালন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.01'],
      lessonId: 'topic.nutrition.macronutrient-digestion',
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.03',
      order: 3,
      groupId: 'nutrition.foundations',
      slug: 'carbohydrate-quality-gi-gl',
      title: l('03 · Carbohydrate Quality: Glycemic Index, Glycemic Load & Resistant Starch', '০৩ · কার্বোহাইড্রেটের গুণমান: গ্লাইসেমিক ইনডেক্স, গ্লাইসেমিক লোড ও প্রতিরোধী শ্বেতসার'),
      summary: l(
        'Starch branching architecture (amylose vs amylopectin), in vivo glycemic response testing, standardized GI/GL calculation, types 1–4 resistant starches, and postprandial insulinemia.',
        'শ্বেতসারের রাসায়নিক গঠন (অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন), গ্লাইসেমিক প্রতিক্রিয়া পরীক্ষা, জিআই/জিএল গণনা, ধরন ১-৪ প্রতিরোধী শ্বেতসার এবং খাবার-পরবর্তী ইনসুলিন নিঃসরণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.02'],
      lessonId: 'topic.nutrition.carbohydrate-quality-gi-gl',
      estimatedMinutes: 50,
    },
    {
      id: 'nutrition.chapter.04',
      order: 4,
      groupId: 'nutrition.foundations',
      slug: 'dietary-fiber-scfa',
      title: l('04 · Dietary Fiber, Short-Chain Fatty Acids & Colonic Epithelial Integrity', '০৪ · খাদ্য আঁশ, শর্ট-চেইন ফ্যাটি অ্যাসিড ও কোলন আবরণীর অখণ্ডতা'),
      summary: l(
        'Physicochemical classes of dietary fiber, microbial anaerobic fermentation, acetate, propionate, and butyrate kinetics, FFAR2/FFAR3 G-protein receptor signaling, and colonocyte energetics.',
        'খাদ্য আঁশের ভৌত-রাসায়নিক শ্রেণিবিভাগ, মাইক্রোবায়াল অ্যানেরোবিক গাঁজন, অ্যাসিটেট, প্রোপিওনেট ও বিউটাইরেটের গতিবিদ্যা, এফএফএআর২/৩ রিসেপ্টর সংকেত এবং কোলনোসাইটের শক্তি উৎপাদন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.03'],
      lessonId: 'topic.nutrition.dietary-fiber-scfa',
      estimatedMinutes: 55,
    },

    // Group 2: Lipid & Protein Nutrition (Chapters 05–08)
    {
      id: 'nutrition.chapter.05',
      order: 5,
      groupId: 'nutrition.macronutrients',
      slug: 'dietary-lipids-fatty-acids-pufa',
      title: l('05 · Dietary Lipids: Fatty Acid Saturation, Trans-Fats & Essential PUFA Ratios', '০৫ · খাদ্যতালিকার চর্বি: ফ্যাটি অ্যাসিডের সম্পৃক্ততা, ট্রান্স-ফ্যাট ও অত্যাবশ্যক PUFA অনুপাত'),
      summary: l(
        'Chemical structure and physiological impacts of dietary lipids: saturated, monounsaturated, and polyunsaturated fatty acids, industrial trans-fat atherogenicity, competitive desaturation of omega-6 and omega-3 cascades, and lipid mediators.',
        'খাদ্য চর্বির রাসায়নিক গঠন ও শারীরবৃত্তীয় প্রভাব: সম্পৃক্ত, মনো-অসম্পৃক্ত এবং পলি-অসম্পৃক্ত ফ্যাটি অ্যাসিড, ট্রান্স-ফ্যাটের ক্ষতিকর কার্যপদ্ধতি, ওমেগা-৬ ও ওমেগা-৩ পথের প্রতিযোগিতামূলক রূপান্তর এবং প্রদাহ নিয়ন্ত্রক লিপিড মধ্যস্থতাকারী।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.02'],
      lessonId: 'topic.nutrition.dietary-lipids-fatty-acids-pufa',
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.06',
      order: 6,
      groupId: 'nutrition.macronutrients',
      slug: 'protein-quality-diaas-nitrogen-balance',
      title: l('06 · Dietary Proteins, Amino Acid Quality, DIAAS/PDCAAS & Nitrogen Balance', '০৬ · খাদ্য প্রোটিন, অ্যামিনো অ্যাসিডের মান, DIAAS/PDCAAS ও নাইট্রোজেন ভারসাম্য'),
      summary: l(
        'The molecular physiology of dietary proteins: essential amino acid kinetics, true ileal DIAAS vs fecal PDCAAS scoring, the mTORC1 leucine trigger for muscle protein synthesis, nitrogen balance assessment, and clinical protein malnutrition.',
        'খাদ্য প্রোটিনের আণবিক শারীরবৃত্ত: অত্যাবশ্যক অ্যামিনো অ্যাসিডের গতিবিদ্যা, সত্য ইলিয়াল DIAAS বনাম ফিকাল PDCAAS মূল্যায়ন, পেশির প্রোটিন তৈরিতে mTORC1 লিউসিন সুইচ, নাইট্রোজেন ভারসাম্য নিরূপণ এবং ক্লিনিক্যাল প্রোটিন অপুষ্টি।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.02'],
      lessonId: 'topic.nutrition.protein-quality-diaas-nitrogen-balance',
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.07',
      order: 7,
      groupId: 'nutrition.macronutrients',
      slug: 'satiety-neuroendocrinology-appetite',
      title: l('07 · Satiety Neuroendocrinology: Leptin, Ghrelin, GLP-1, PYY & Appetite Regulation', '০৭ · তৃপ্তি ও ক্ষুধার নিউরোএন্ডোক্রিনোলজি: লেপটিন, ঘ্রেলিন, GLP-1, PYY ও ক্ষুধা নিয়ন্ত্রণ'),
      summary: l(
        'The molecular neuroendocrinology of energy intake: hypothalamic arcuate POMC/CART vs NPY/AgRP circuits, gastric ghrelin octanoylation, adipocyte leptin-STAT3 signaling, enteroendocrine incretins (GLP-1, PYY, CCK), and hedonic vs homeostatic feeding.',
        'শক্তি গ্রহণের আণবিক নিউরোএন্ডোক্রিনোলজি: হাইপোথ্যালামাসের আর্কুয়েট নিউক্লিয়াসের POMC/CART বনাম NPY/AgRP সার্কিট, পাকস্থলীর ঘ্রেলিন হরমোন, অ্যাডিপোসাইটের লেপটিন-STAT3 সংকেত, অন্ত্রের ইনক্রিটিন (GLP-1, PYY, CCK) এবং আনন্দঘন বনাম শারীরবৃত্তীয় ক্ষুধা নিয়ন্ত্রণ।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.01'],
      lessonId: 'topic.nutrition.satiety-neuroendocrinology-appetite',
      estimatedMinutes: 55,
    },
    {
      id: 'nutrition.chapter.08',
      order: 8,
      groupId: 'nutrition.macronutrients',
      slug: 'hydration-electrolytes-fluid-balance',
      title: l('08 · Cellular Hydration, Fluid Balance & Electrolyte Osmoregulation', '০৮ · কোষীয় আর্দ্রতা, তরলের ভারসাম্য ও ইলেক্ট্রোলাইট অসমোরিলেশন'),
      summary: l(
        'Biophysical principles of human fluid homeostasis: intracellular vs extracellular compartments, Na+/K+-ATPase gradients, hypothalamic osmoreceptor-AVP-Aquaporin-2 axis, renin-aldosterone volume regulation, and stoichiometric ORS cotransport.',
        'মানবদেহের তরল ভারসাম্যের জৈব-ভৌত বিজ্ঞান: আন্তঃকোষীয় বনাম বহিঃকোষীয় প্রকোষ্ঠ, Na+/K+-ATPase গ্রেডিয়েন্ট, হাইপোথ্যালামিক অসমোরিসেপ্টর-AVP-অ্যাকোয়াপোরিন-২ অক্ষ, রেনিন-অ্যালডোস্টেরন আয়তন নিয়ন্ত্রণ এবং ওআরএসের স্টইকিওমেট্রিক কো-ট্রান্সপোর্ট।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.01'],
      lessonId: 'topic.nutrition.hydration-electrolytes-fluid-balance',
      estimatedMinutes: 50,
    },

    // Group 3: Micronutrients, Bioactives & Cellular Coenzymes (Chapters 09–13)
    {
      id: 'nutrition.chapter.09',
      order: 9,
      groupId: 'nutrition.micronutrients',
      slug: 'fat-soluble-vitamins',
      title: l('09 · Fat-Soluble Vitamins (A, D, E, K): Genomic Signaling & Physiology', '০৯ · চর্বি-দ্রবণীয় ভিটামিন (A, D, E, K): জিনগত সংকেত ও শারীরবৃত্ত'),
      summary: l(
        'Retinoid nuclear receptors (RAR/RXR) and visual cycle; calcitriol-VDR calcium transport; alpha-tocopherol lipid membrane chain-breaking; vitamin K cycle, VKOR, and gamma-carboxylation.',
        'রেটিনয়েডের নিউক্লিয়ার রিসেপ্টর ও দৃষ্টি চক্র; ক্যালসিট্রিওল-ভিডিআর ক্যালসিয়াম পরিবহন; আলফা-টোকোফেরল লিপিড মেমব্রেন সুরক্ষা; এবং ভিটামিন কে চক্র ও গামা-কার্বক্সিলেশন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.05'],
      lessonId: 'topic.nutrition.fat-soluble-vitamins',
      estimatedMinutes: 70,
    },
    {
      id: 'nutrition.chapter.10',
      order: 10,
      groupId: 'nutrition.micronutrients',
      slug: 'b-complex-vitamins-bioenergetics',
      title: l('10 · Water-Soluble Vitamins: B-Complex Coenzymes in Mitochondrial Bioenergetics', '১০ · পানিতে দ্রবণীয় ভিটামিন: মাইটোকন্ড্রিয়াল জৈবশক্তিতে বি-কমপ্লেক্স কো-এনজাইম'),
      summary: l(
        'Thiamine (TPP), riboflavin (FMN/FAD), niacin (NAD/NADP), pantothenate (CoA), pyridoxine (PLP), biotin, folate (THF), and cobalamin (methyl-B12) coenzyme kinetics in intermediate metabolism.',
        'থায়ামিন (টিপিপি), রিবোফ্লাভিন (এফএমএন/এফএডি), নিয়াসিন (এনএডি/এনএডিপি), প্যান্টোথেনিক অ্যাসিড (কোএ), পাইরিডক্সিন (পিএলপি), বায়োটিন, ফোলেট ও ভিটামিন বি১২ কো-এনজাইমীয় গতিবিদ্যা।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.01'],
      lessonId: 'topic.nutrition.b-complex-vitamins-bioenergetics',
      estimatedMinutes: 75,
    },
    {
      id: 'nutrition.chapter.11',
      order: 11,
      groupId: 'nutrition.micronutrients',
      slug: 'vitamin-c-trace-minerals-redox',
      title: l('11 · Vitamin C, Trace Minerals & Cellular Antioxidant Defense Networks', '১১ · ভিটামিন সি, ট্রেস মিনারেল ও কোষীয় অ্যান্টিঅক্সিডেন্ট প্রতিরক্ষা নেটওয়ার্ক'),
      summary: l(
        'Ascorbate prolyl hydroxylase collagen reduction, superoxide dismutase (Cu/Zn and Mn), glutathione peroxidase (selenium), catalase, and zinc finger transcription factors.',
        'অ্যাসকরবেটের কোলাজেন সংশ্লেষণ সহায়তা, সুপারঅক্সাইড ডিসমিউটেজ (কপার/জিঙ্ক ও ম্যাঙ্গানিজ), গ্লুটাথিয়ন পারঅক্সিডেজ (সেলেনিয়াম), ক্যাটালেজ এবং জিঙ্ক ফিঙ্গার প্রোটিন।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.10'],
      lessonId: 'topic.nutrition.vitamin-c-trace-minerals-redox',
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.12',
      order: 12,
      groupId: 'nutrition.micronutrients',
      slug: 'macrominerals-bone-calcium-magnesium',
      title: l('12 · Macrominerals & Bone Matrix: Calcium, Phosphorus, Magnesium Homeostasis', '১২ · ম্যাক্রোমিনারেল ও অস্থি কাঠামো: ক্যালসিয়াম, ফসফরাস ও ম্যাগনেসিয়ামের ভারসাম্য'),
      summary: l(
        'Hydroxyapatite matrix mineralization, calcium-sensing receptor (CaSR), PTH and calcitonin endocrine loops, intracellular Mg-ATP chelation, and dietary calcium-phosphate ratios.',
        'হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক গঠন, ক্যালসিয়াম সেন্সিং রিসেপ্টর, পিটিএইচ ও ক্যালসিটোনিন হরমোনীয় চক্র, কোষের ভেতর ম্যাগনেসিয়াম-এটিপি সংযোজন এবং খাদ্যে ক্যালসিয়াম-ফসফরাস অনুপাত।'
      ),
      status: 'available',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.09'],
      lessonId: 'topic.nutrition.macrominerals-bone-calcium-magnesium',
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.13',
      order: 13,
      groupId: 'nutrition.micronutrients',
      slug: 'iron-biology-hepcidin-anemia',
      title: l('13 · Iron Biology: Dietary Bioavailability, Ferritin, Transferrin & Hepcidin', '১৩ · আয়রন বায়োলজি: খাদ্যে প্রাপ্যতা, ফেরিটিন, ট্রান্সফেরিন ও হেপসিডিন নিয়ন্ত্রণ'),
      summary: l(
        'Heme versus non-heme iron absorption, enterocyte DMT1 and ferroportin, serum transferrin saturation, macrophage recycling, and hepatic hepcidin control in health, anemia, and chronic disease.',
        'হিম ও নন-হিম আয়রন শোষণ, এন্টারোসাইটের ডিএমটি১ ও ফেরোপোর্টিন, ট্রান্সফেরিন সম্পৃক্ততা, ম্যাক্রোফেজের আয়রন পুনঃব্যবহার এবং প্রদাহ ও রক্তাল্পতায় হেপসিডিনের নিয়ন্ত্রণ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.02'],
      estimatedMinutes: 65,
    },

    // Group 4: Gastrointestinal Physiology, Microbiome & Gut Barrier (Chapters 14–17)
    {
      id: 'nutrition.chapter.14',
      order: 14,
      groupId: 'nutrition.microbiome',
      slug: 'gut-barrier-mucosal-immunity',
      title: l('14 · The Gastrointestinal Barrier: Mucosal Immunity & Tight Junction Integrity', '১৪ · পরিপাক প্রাচীর: মিউকোসাল প্রতিরোধ ব্যবস্থা ও টাইট জাংশনের অখণ্ডতা'),
      summary: l(
        'Claudin, occludin, and zonula occludens (ZO-1) junctional complexes, goblet cell mucin layers, GALT Peyer patches, secretory IgA transcytosis, and endotoxin translocation.',
        'ক্লডিন, অক্লুডিন ও জোনুলা অক্লুডেন্স জটিলতা, গবলেট কোষের মিউকাস স্তর, জিএএলটি পেয়ারস প্যাচ, ক্ষরণকারী আইজিএ পরিবহন এবং ব্যাকটেরিয়াল এন্ডোটক্সিন প্রবেশ প্রতিরোধ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.04'],
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.15',
      order: 15,
      groupId: 'nutrition.microbiome',
      slug: 'gut-microbiome-metagenomics',
      title: l('15 · The Human Gut Microbiome: Taxonomic Architecture & Metagenomics', '১৫ · মানব অন্ত্রের মাইক্রোবায়োম: শ্রেণিবিন্যাস কাঠামো ও মেটাজেনোমিক্স'),
      summary: l(
        'Bacillota, Bacteroidota, and Actinomycetota phyla distribution, alpha/beta diversity metrics, bile acid secondary transformation, microbial tryptophan indoles, and host-microbe crosstalk.',
        'অন্ত্রের প্রধান ব্যাকটেরিয়াল পর্বসমূহ, আলফা ও বিটা বৈচিত্র্য পরিমাপ, পিত্ত অম্লের রূপান্তর, ট্রিপটোফ্যান থেকে উৎপন্ন ইনডোল যৌগ এবং দেহ-জীবাণুর পারস্পরিক সংকেত আদান-প্রদান।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.14'],
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.16',
      order: 16,
      groupId: 'nutrition.microbiome',
      slug: 'prebiotics-probiotics-dysbiosis',
      title: l('16 · Prebiotics, Probiotics, Synbiotics & Dietary Interventions in Dysbiosis', '১৬ · প্রিবায়োটিক, প্রোবায়োটিক, সিনবায়োটিক ও ডিসবায়োসিসে খাদ্যের ভূমিকা'),
      summary: l(
        'Mechanisms of prebiotic fructans and galactans, evidence-based probiotic strain taxonomy (Lactobacillus, Bifidobacterium), pathogen competitive exclusion, and post-antibiotic recovery.',
        'প্রিবায়োটিক ফ্রুক্টান ও গ্যালাক্টানের ভূমিকা, নির্দিষ্ট প্রোবায়োটিক স্ট্রেনের কার্যকারিতা, ক্ষতিকর জীবাণু বিতাড়ন এবং অ্যান্টিবায়োটিক পরবর্তী অন্ত্রের স্বাভাবিক পরিবেশ পুনরুদ্ধার।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.15'],
      estimatedMinutes: 55,
    },
    {
      id: 'nutrition.chapter.17',
      order: 17,
      groupId: 'nutrition.microbiome',
      slug: 'food-intolerances-celiac-allergy',
      title: l('17 · Food Intolerances, Non-Celiac Gluten Sensitivity, Celiac Disease & Food Allergies', '১৭ · খাদ্যের অসহনশীলতা, নন-সিলিয়াক গ্লুটেন সংবেদনশীলতা, সিলিয়াক রোগ ও খাদ্য অ্যালার্জি'),
      summary: l(
        'Lactase persistence genetics versus secondary deficiency, IgE-mediated type I hypersensitivity, tissue transglutaminase 2 (tTG) autoantibodies in HLA-DQ2/8 Celiac enteropathy, and NCGS.',
        'ল্যাকটেজ জিনের বংশগতি বনাম অর্জিত ঘাটতি, আইজিই-নির্ভর খাদ্য অ্যালার্জি, সিলিয়াক রোগে টিস্যু ট্রান্সগ্লুটামিনেজ-২ অ্যান্টিবডি ও অন্ত্রের ক্ষতি এবং নন-সিলিয়াক সংবেদনশীলতা।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.14'],
      estimatedMinutes: 65,
    },

    // Group 5: Clinical Nutrition, Metabolic Health & Medical Nutrition Therapy (Chapters 18–22)
    {
      id: 'nutrition.chapter.18',
      order: 18,
      groupId: 'nutrition.clinical',
      slug: 'nutrition-obesity-t2d-mnt',
      title: l('18 · Nutritional Management of Obesity, Insulin Resistance & Type 2 Diabetes', '১৮ · স্থূলতা, ইনসুলিন রেজিস্ট্যান্স ও টাইপ ২ ডায়াবেটিসের পুষ্টি ব্যবস্থাপনা'),
      summary: l(
        'Hypertrophic adipocyte lipotoxicity, ectopic hepatic and skeletal muscle diacylglycerols, ADA/EASD evidence-based MNT, carbohydrate distribution, hypocaloric diet remission, and GLP-1 MNT synergy.',
        'চর্বি কোষের প্রদাহ ও লিপোটক্সিসিটি, যকৃতে চর্বি জমা, ডায়াবেটিসের আধুনিক প্রমাণভিত্তিক পুষ্টি থেরাপি, কার্বোহাইড্রেট বিন্যাস এবং নিয়ন্ত্রিত খাদ্যাভ্যাসে রোগমুক্তি।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.03', 'nutrition.chapter.07'],
      estimatedMinutes: 70,
    },
    {
      id: 'nutrition.chapter.19',
      order: 19,
      groupId: 'nutrition.clinical',
      slug: 'cardiovascular-dietetics-dash-mediterranean',
      title: l('19 · Cardiovascular Dietetics: Atherosclerosis, Dyslipidemia & Hypertension', '১৯ · কার্ডিওভাসকুলার ডায়েটেটিক্স: এথেরোস্ক্লেরোসিস, ডিসলিপিডেমিয়া ও উচ্চ রক্তচাপ'),
      summary: l(
        'ApoB particles and endothelial retention, dietary SFA modulation of hepatic LDL receptor clearance, DASH sodium-potassium hemodynamics, and Mediterranean PREDIMED trial lipidology.',
        'রক্তনালিতে এপোবি কণার সঞ্চয়ন, খাদ্যের সম্পৃক্ত চর্বির প্রভাবে এলডিএল রিসেপ্টর নিয়ন্ত্রণ, ড্যাশ ডায়েটের রক্তচাপ নিয়ন্ত্রণ ব্যবস্থা এবং ভূমধ্যসাগরীয় খাদ্যাভ্যাসের বৈজ্ঞানিক ভিত্তি।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.05', 'nutrition.chapter.08'],
      estimatedMinutes: 70,
    },
    {
      id: 'nutrition.chapter.20',
      order: 20,
      groupId: 'nutrition.clinical',
      slug: 'renal-nutrition-ckd-mnt',
      title: l('20 · Renal Nutrition: Chronic Kidney Disease & Glomerular Filtration', '২০ · রেনাল নিউট্রিশন: ক্রনিক কিডনি ডিজিজ ও গ্লোমেরুলার পরিস্রাবণ'),
      summary: l(
        'Glomerular hyperfiltration dynamics, dietary protein restriction in non-dialysis CKD, phosphorus binders, FGF23-Klotho axis, and hyperkalemia nutritional management in ESRD.',
        'কিডনির গ্লোমেরুলার চাপ নিয়ন্ত্রণ, ডায়ালাইসিস-পূর্ববর্তী প্রোটিন নিয়ন্ত্রণ, খাদ্য থেকে ফসফেট অপসারণ, এফজিএফ২৩ সংকেত এবং জটিল কিডনি রোগে পটাশিয়াম ব্যবস্থাপনা।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.06', 'nutrition.chapter.12'],
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.21',
      order: 21,
      groupId: 'nutrition.clinical',
      slug: 'gi-liver-nutrition-masld-ibd-fodmap',
      title: l('21 · Hepatobiliary & Gastrointestinal Disorders: MASLD/MASH, IBD & Low-FODMAP', '২১ · যকৃত ও গ্যাস্ট্রোইনটেস্টাইনাল রোগ: MASLD, আইবিডি ও লো-ফোডম্যাপ ডায়েট'),
      summary: l(
        'Fructose-driven de novo lipogenesis in MASLD/MASH, exclusive enteral nutrition in active pediatric Crohn disease, and three-phase low-FODMAP clinical protocol in IBS.',
        'এমএএসএলডি রোগে অতিরিক্ত ফ্রুক্টোজ থেকে যকৃতে চর্বি উৎপাদন, ক্রোনস রোগে বিশেষায়িত পুষ্টি থেরাপি এবং ইরিটেবল বাওয়েল সিন্ড্রোমে লো-ফোডম্যাপ ডায়েটের ৩-ধাপের ক্লিনিক্যাল প্রোটোকল।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.04', 'nutrition.chapter.17'],
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.22',
      order: 22,
      groupId: 'nutrition.clinical',
      slug: 'clinical-malnutrition-enteral-parenteral',
      title: l('22 · Clinical Malnutrition, Protein-Energy Wasting & Nutritional Support', '২২ · ক্লিনিক্যাল অপুষ্টি, প্রোটিন-শক্তি অপচয় ও কৃত্রিম পুষ্টি সহায়তা'),
      summary: l(
        'GLIM phenotypic and etiologic criteria for malnutrition, cachexia versus sarcopenia, refeeding syndrome hypophosphatemia, and evidence-based indications for enteral versus parenteral support.',
        'গ্লিম মানদণ্ডে অপুষ্টি নির্ণয়, ক্যাক্সিয়া বনাম পেশিক্ষয়, রিফিডিং সিন্ড্রোমের মারাত্মক ফসফেট ঘাটতি এবং টিউব ফিডিং (এন্টারাল) ও শিরার মাধ্যমে (প্যারেন্টেরাল) পুষ্টি প্রদানের নিয়ম।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.06'],
      estimatedMinutes: 70,
    },

    // Group 6: Lifespan, Sports & Functional Precision Dietetics (Chapters 23–26)
    {
      id: 'nutrition.chapter.23',
      order: 23,
      groupId: 'nutrition.lifespan',
      slug: 'maternal-fetal-lactation-nutrition',
      title: l('23 · Maternal, Fetal & Lactational Nutrition: Embryogenesis to Breastfeeding', '২৩ · মাতৃ, ভ্রূণ ও স্তন্যদানকালীন পুষ্টি: ভ্রূণ বিকাশ থেকে মাতৃদুগ্ধ নিঃসরণ'),
      summary: l(
        'Periconceptional folate one-carbon neural tube closure, placental syncytiotrophoblast nutrient transport, gestational diabetes MNT, and human milk oligosaccharides (HMO) synthesis.',
        'গর্ভধারণের পূর্বে ফোলেটের মাধ্যমে স্নায়ুনালির ত্রুটি প্রতিরোধ, গর্ভফুল দিয়ে পুষ্টি পরিবহন, গর্ভকালীন ডায়াবেটিস ব্যবস্থাপনা এবং মাতৃদুগ্ধে এইচএমও অণুর বায়োসংশ্লেষ।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.10'],
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.24',
      order: 24,
      groupId: 'nutrition.lifespan',
      slug: 'lifespan-pediatric-geriatric-nutrition',
      title: l('24 · Pediatric, Adolescent & Geriatric Nutrition: Growth to Sarcopenia', '২৪ · শিশু, কিশোর ও প্রবীণদের পুষ্টি: দৈহিক বৃদ্ধি থেকে বার্ধক্যের পেশিক্ষয়'),
      summary: l(
        'WHO pediatric growth charts, weaning nutrient density, adolescent peak bone mass accretion, and geriatric atrophic gastritis, vitamin B12 malabsorption, and muscle anabolic resistance.',
        'শিশুর বৃদ্ধি পরিমাপ, কৈশোরে অস্থির সর্বোচ্চ ঘনত্ব অর্জন এবং প্রবীণদের পাকস্থলীর অম্লস্বল্পতা, ভিটামিন বি১২ শোষণহীনতা ও পেশির অ্যানাবলিক রেজিস্ট্যান্স।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.06', 'nutrition.chapter.12'],
      estimatedMinutes: 60,
    },
    {
      id: 'nutrition.chapter.25',
      order: 25,
      groupId: 'nutrition.lifespan',
      slug: 'sports-nutrition-bioenergetics',
      title: l('25 · Exercise Nutrition & Sports Bioenergetics: Periodization & Timing', '২৫ · ব্যায়ামের পুষ্টি ও ক্রীড়া জৈবশক্তিবিজ্ঞান: খাদ্যের সময়জ্ঞান ও কর্মক্ষমতা বৃদ্ধি'),
      summary: l(
        'Substrate oxidation crossover concept, muscle glycogen supercompensation, intra-exercise dual-source carbohydrates, post-workout MPS refractory windows, and creatine monohydrate mechanics.',
        'ব্যায়ামের তীব্রতায় জ্বালানি পরিবর্তনের বৈজ্ঞানিক সূত্র, পেশির গ্লাইকোজেন লোডিং, ব্যায়ামকালীন শর্করা গ্রহণ, ব্যায়াম-পরবর্তী প্রোটিন সংশ্লেষ এবং ক্রিয়েটিন সাপ্লিমেন্টের প্রক্রিয়া।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.01', 'nutrition.chapter.06'],
      estimatedMinutes: 65,
    },
    {
      id: 'nutrition.chapter.26',
      order: 26,
      groupId: 'nutrition.lifespan',
      slug: 'nutrigenomics-precision-dietetics',
      title: l('26 · Nutrigenomics, Epigenetics & Precision Functional Dietetics', '২৬ · নিউট্রিজেনোমিক্স, এপিজেনেটিক্স ও কার্যকরী নির্ভুল ডায়েটেটিক্স'),
      summary: l(
        'Gene-diet interactions (MTHFR C677T, APOE-e4, TCF7L2), dietary methyl donors and DNA methylation, nutrient-driven histone acetylation, and clinical appraisal of direct-to-consumer genetic panels.',
        'খাদ্য ও জিনের মিথস্ক্রিয়া (MTHFR, APOE, TCF7L2), খাদ্যের মিথাইল দাতা ও ডিএনএ মিথাইলেশন, হিস্টোন এসিটাইলেশন এবং বাণিজ্যিক জেনেটিক টেস্টের ক্লিনিক্যাল সীমাবদ্ধতা।'
      ),
      status: 'planned',
      completionStatus: 'not-started',
      prerequisiteIds: ['nutrition.chapter.10', 'nutrition.chapter.26'],
      estimatedMinutes: 60,
    },
  ],
}
