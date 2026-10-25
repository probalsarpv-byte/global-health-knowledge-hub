import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export const nutrition25LifespanNutritionLesson: LessonTopic = {
  id: 'topic.nutrition.lifespan-pediatric-geriatric-nutrition',
  slug: 'lifespan-pediatric-geriatric-nutrition',
  version: 1,
  updatedAt: '2026-10-25',
  lastReviewed: '2026-10-25',
  title: l(
    '25 · Pediatric, Adolescent & Geriatric Nutrition: Growth to Sarcopenia',
    '২৫ · শিশু, কিশোর ও প্রবীণদের পুষ্টি: দৈহিক বৃদ্ধি থেকে বার্ধক্যের পেশিক্ষয়'
  ),
  summary: l(
    'Translational nutritional physiology across the human life cycle: WHO pediatric growth standards, complementary feeding nutrient density, adolescent peak bone mass accretion, and geriatric atrophic gastritis, cobalamin malabsorption, and skeletal muscle anabolic resistance.',
    'মানব জীবনের ধারাবাহিক পুষ্টি শারীরবৃত্ত: ডব্লিউএইচও শিশু বৃদ্ধি চার্ট, পরিপূরক খাদ্যের পুষ্টিঘনত্ব, কৈশোরের সর্বোচ্চ অস্থি সঞ্চয় এবং বার্ধক্যের পাকস্থলীর অবক্ষয়, ভিটামিন বি১২ শোষণহীনতা ও কঙ্কাল পেশির অ্যানাবলিক রেজিস্ট্যান্স প্রতিরোধ।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  objectives: [
    l(
      'Apply WHO pediatric growth standards and Z-score criteria to identify stunting, wasting, and faltering trajectories requiring nutritional intervention.',
      'ডব্লিউএইচও শিশু বৃদ্ধি মানদণ্ড ও Z-স্কোর প্রয়োগ করে খর্বতা, অপচয় এবং বৃদ্ধি স্থবিরতা শনাক্তপূর্বক প্রয়োজনীয় পুষ্টি পুনর্বাসন নিশ্চিত করা।'
    ),
    l(
      'Explain the physiological milestones, renal solute load constraints, and micronutrient gaps governing timely infant complementary feeding.',
      'শিশুর পরিপূরক খাদ্যাভ্যাস শুরুর শারীরবৃত্তীয় প্রস্তুতি, কিডনির রেচন চাপ এবং অপরিহার্য লৌহ-জিংক উপাদানের শূন্যতা দূর করার প্রক্রিয়া ব্যাখ্যা করা।'
    ),
    l(
      'Detail the endocrine and mechanotransduction mechanisms governing adolescent peak bone mass accretion, including calcium and vitamin D stoichiometry.',
      'কৈশোরে সর্বোচ্চ অস্থি ঘনত্ব সঞ্চয়ের হরমোনগত ও যান্ত্রিক সংকেত প্রক্রিয়া, ক্যালসিয়াম এবং সক্রিয় ভিটামিন ডি-এর প্রয়োজনীয়তা বিশ্লেষণ করা।'
    ),
    l(
      'Analyze the pathophysiology of sarcopenia and anabolic resistance in aging skeletal muscle, including Sestrin2-mTORC1 desensitization and motor unit denervation.',
      'বার্ধক্যে সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্সের আণবিক প্যাথলজি, সেস্ট্রিন-২ এবং এমটিওআরসি-১ সিগন্যালিংয়ের সংবেদনশীলতা হ্রাস বিশ্লেষণ করা।'
    ),
    l(
      'Formulate evidence-based clinical dietetics interventions utilizing leucine threshold pulses and resistance exercise according to ESPEN geriatric guidelines.',
      'ইএসপিইএন জেরিয়াট্রিক নির্দেশিকা অনুসারে লিউসিন থ্রেশহোল্ড পালস এবং রেজিস্ট্যান্স ব্যায়ামের মাধ্যমে প্রমাণভিত্তিক ক্লিনিক্যাল ডায়েট পরিকল্পনা প্রণয়ন করা।'
    ),
  ],
  prerequisiteIds: [
    'topic.nutrition.protein-quality-diaas-nitrogen-balance',
    'topic.nutrition.macrominerals-bone-calcium-magnesium',
  ],
  relatedTopicIds: [
    'topic.nutrition.maternal-fetal-lactation-nutrition',
    'topic.nutrition.clinical-malnutrition-enteral-parenteral',
  ],
  references: [
    {
      id: 'ref-who-growth-standards-2006',
      authors: 'de Onis M, Onyango AW, Borghi E, Siyam A, Nishida C, Siekmann J',
      title: 'Development of a WHO growth reference for school-aged children and adolescents',
      organization: 'Bulletin of the World Health Organization',
      year: 2007,
      url: 'https://www.who.int/tools/child-growth-standards',
      doi: '10.2471/blt.07.043497',
    },
    {
      id: 'ref-ewgsop2-sarcopenia-2019',
      authors: 'Cruz-Jentoft AJ, Bahat G, Bauer J, Boirie Y, Bruyère O, Cederholm T, et al.',
      title: 'Sarcopenia: revised European consensus on definition and diagnosis (EWGSOP2)',
      organization: 'Age and Ageing',
      year: 2019,
      url: 'https://doi.org/10.1093/ageing/afy169',
      doi: '10.1093/ageing/afy169',
    },
    {
      id: 'ref-peak-bone-mass-nof-2016',
      authors: 'Weaver CM, Gordon CM, Janz KF, Kalkwarf HJ, Lappe JM, Lupton R, et al.',
      title: 'The National Osteoporosis Foundation’s position statement on peak bone mass development through the life course: an analysis of the evidence and lifestyle recommendations',
      organization: 'Osteoporosis International',
      year: 2016,
      url: 'https://doi.org/10.1007/s00198-015-3440-3',
      doi: '10.1007/s00198-015-3440-3',
    },
    {
      id: 'ref-prot-age-protein-2013',
      authors: 'Bauer J, Biolo G, Cederholm T, Cesari M, Cruz-Jentoft AJ, Morley JE, et al.',
      title: 'Evidence-based recommendations for optimal dietary protein intake in older people: a position paper from the PROT-AGE Study Group',
      organization: 'Journal of the American Medical Directors Association',
      year: 2013,
      url: 'https://doi.org/10.1016/j.jamda.2013.05.021',
      doi: '10.1016/j.jamda.2013.05.021',
    },
    {
      id: 'ref-espen-geriatrics-2019',
      authors: 'Volkert D, Beck AM, Cederholm T, Cruz-Jentoft A, Goisser S, Hooper L, et al.',
      title: 'ESPEN guideline on clinical nutrition and hydration in geriatrics',
      organization: 'Clinical Nutrition',
      year: 2019,
      url: 'https://doi.org/10.1016/j.clnu.2018.05.024',
      doi: '10.1016/j.clnu.2018.05.024',
    },
    {
      id: 'ref-espghan-complementary-2017',
      authors: 'Fewtrell M, Bronsky J, Campoy C, Domellöf M, Embleton N, Fidler Mis N, et al.',
      title: 'Complementary Feeding: A Position Paper by the European Society for Paediatric Gastroenterology, Hepatology, and Nutrition (ESPGHAN) Committee on Nutrition',
      organization: 'Journal of Pediatric Gastroenterology and Nutrition',
      year: 2017,
      url: 'https://doi.org/10.1097/MPG.0000000000001454',
      doi: '10.1097/MPG.0000000000001454',
    },
  ],
  evidenceBySection: {
    introduction: ['ref-who-growth-standards-2006', 'ref-espghan-complementary-2017'],
    structure: ['ref-espghan-complementary-2017', 'ref-peak-bone-mass-nof-2016', 'ref-prot-age-protein-2013'],
    mechanism: ['ref-who-growth-standards-2006', 'ref-espghan-complementary-2017', 'ref-ewgsop2-sarcopenia-2019', 'ref-prot-age-protein-2013'],
    integration: ['ref-peak-bone-mass-nof-2016', 'ref-prot-age-protein-2013', 'ref-espen-geriatrics-2019'],
    practice: ['ref-who-growth-standards-2006', 'ref-ewgsop2-sarcopenia-2019', 'ref-espen-geriatrics-2019'],
    takeaways: ['ref-who-growth-standards-2006', 'ref-ewgsop2-sarcopenia-2019', 'ref-peak-bone-mass-nof-2016', 'ref-espen-geriatrics-2019'],
  },
  levels: {
    foundation: {
      label: l('Foundation · Essential Concepts', 'ভিত্তি · প্রাথমিক ধারণা'),
      sections: [
      {
            "id": "introduction",
            "heading": {
                  "en": "Pediatric Growth Velocity, WHO Standards & the Lifespan Nutritional Continuum",
                  "bn": "শিশুর বৃদ্ধির গতি, ডব্লিউএইচও মানদণ্ড এবং জীবনব্যাপী পুষ্টির অবিচ্ছিন্ন ধারা"
            },
            "paragraphs": [
                  {
                        "en": "Human development across the lifespan represents an uninterrupted biological continuum characterized by dramatically shifting nutritional priorities, distinct tissue-specific metabolic rates, and evolving hormonal axes [1]. From the moment of birth through infancy, childhood, adolescence, mature adulthood, and senescence, the physiological demands placed on nutrient intake transition from fueling explosive cellular hypertrophy and hyperplasia to preserving somatic organ reserve and mitigating degenerative tissue atrophy [1, 6]. In early infancy, absolute somatic growth velocity reaches its lifetime zenith, demanding an exceptionally high caloric density per kilogram of body weight that is roughly two to three times greater than that required by a resting adult [1]. As skeletal elongation, organogenesis, and muscular differentiation progress, accurate assessment of physiological milestones becomes the cornerstone of developmental pediatrics and clinical dietetics [1].",
                        "bn": "মানব জীবনের বৃদ্ধি ও বিকাশ হলো একটি অবিচ্ছিন্ন জৈবিক ধারা, যা বিভিন্ন বয়সে পরিবর্তনশীল পুষ্টির অগ্রাধিকার, টিস্যু-নির্দিষ্ট বিপাকীয় হার এবং হরমোনের ক্রিয়া দ্বারা পরিচালিত হয় [১]। জন্ম থেকে শুরু করে শৈশব, কৈশোর, প্রাপ্তবয়স্ক অবস্থা এবং বার্ধক্য পর্যন্ত পুষ্টির প্রয়োজনীয়তা পরিবর্তিত হয়; প্রথমে যা থাকে দ্রুত কোষ বিভাজন ও দৈহিক বৃদ্ধির জন্য, পরবর্তীতে তা রূপান্তরিত হয় অঙ্গের কার্যক্ষমতা সংরক্ষণ এবং টিস্যুর ক্ষয় প্রতিরোধের উদ্দেশ্যে [১, ৬]। নবজাতক ও প্রাথমিক শৈশবে বৃদ্ধির গতি জীবনের সর্বোচ্চ পর্যায়ে পৌঁছায়, যার জন্য প্রাপ্তবয়স্কের তুলনায় প্রতি কেজি দৈহিক ওজনে প্রায় দুই থেকে তিন গুণ বেশি ক্যালোরি ও পুষ্টি উপাদানের প্রয়োজন হয় [১]। কঙ্কালের বৃদ্ধি, অভ্যন্তরীণ অঙ্গের পূর্ণতা এবং পেশির বিকাশের সাথে সাথে সঠিক শারীরবৃত্তীয় মূল্যায়ন শিশুর বিকাশমূলক পুষ্টিবিজ্ঞান ও ক্লিনিক্যাল ডায়েটেটিক্সের ভিত্তি হিসেবে কাজ করে [১]।"
                  },
                  {
                        "en": "The World Health Organization (WHO) Child Growth Standards provide an international normative benchmark describing how children should grow under optimal environmental, nutritional, and healthcare conditions regardless of ethnicity [1]. By utilizing anthropometric percentiles and standard deviation Z-scores—specifically Weight-for-Age (WAZ), Length/Height-for-Age (HAZ), and Weight-for-Length/Height (WHZ)—clinicians systematically screen for deviations from healthy developmental trajectories [1]. A Z-score falling below minus two standard deviations (-2 SD) demarcates moderate undernutrition (wasting for WHZ, stunting for HAZ, and underweight for WAZ), whereas a score below minus three standard deviations (-3 SD) indicates severe acute malnutrition requiring immediate therapeutic medical intervention [1, 6]. Linear stunting in the first 1,000 days of life reflects chronic systemic nutrient deficits that lead to irreversible microstructural deficits in neurocognitive architecture and adult work capacity [1].",
                        "bn": "বিশ্ব স্বাস্থ্য সংস্থার (WHO) শিশু বৃদ্ধি মানদণ্ড একটি আন্তর্জাতিক আদর্শ নির্দেশিকা প্রদান করে, যা জাতিগত পরিচয় নির্বিশেষে অনুকূল পরিবেশ, পুষ্টি ও স্বাস্থ্যসেবায় শিশুদের স্বাভাবিক বৃদ্ধির গতি নির্ধারণ করে [১]। নৃমিতিক পার্সেন্টাইল এবং পরিমিত ব্যবধান Z-স্কোর—বিশেষ করে বয়সের অনুপাতে ওজন (WAZ), বয়সের অনুপাতে উচ্চতা (HAZ) এবং উচ্চতার অনুপাতে ওজন (WHZ)—ব্যবহার করে চিকিৎসকরা শিশুর স্বাভাবিক বৃদ্ধি পর্যবেক্ষণ করেন [১]। মাইনাস দুই আদর্শ বিচ্যুতির (-2 SD) নিচে নেমে গেলে তাকে মাঝারি অপুষ্টি (WHZ কম হলে অপচয় বা wasting, HAZ কম হলে খর্বতা বা stunting) বলা হয়, এবং মাইনাস তিন আদর্শ বিচ্যুতির (-3 SD) নিচে গেলে তা মারাত্মক তীব্র অপুষ্টি হিসেবে অবিলম্বে চিকিৎসার দাবি রাখে [১, ৬]। জীবনের প্রথম ১,০০০ দিনে রৈখিক খর্বতা দীর্ঘস্থায়ী পুষ্টির ঘাটতি নির্দেশ করে, যা স্নায়বিক বিকাশ ও প্রাপ্তবয়স্ক জীবনের শারীরিক কর্মক্ষমতায় স্থায়ী ক্ষতির কারণ হতে পারে [১]।"
                  },
                  {
                        "en": "At the opposing chronological pole of the lifespan continuum, older adults undergo profound biological aging characterized by progressive loss of homeostatic reserve, sensory attenuation, and subclinical chronic inflammation [2, 5]. Aging tissues exhibit reduced responsiveness to anabolic stimuli, an intrinsic shift in body composition known as sarcopenia, and declining functional capacity across the digestive, endocrine, and musculoskeletal systems [2, 4]. While the pediatric patient requires nutrient-dense fuel to construct new biological architecture de novo, the geriatric patient requires carefully targeted medical nutrition therapy to prevent the accelerated catabolism of existing skeletal muscle and skeletal bone [2, 5]. Consequently, lifespan nutrition does not represent a static set of universal rules, but rather a dynamic clinical science tailored to the specific cellular demands of growth, maturation, maintenance, and senescence [1, 4].",
                        "bn": "জীবনের বিপরীত প্রান্তে অর্থাৎ বার্ধক্যে প্রবীণরা গভীর জৈবিক পরিবর্তনের মধ্য দিয়ে যান, যার বৈশিষ্ট্য হলো শারীরিক সহনশীলতা বা রিজার্ভ কমে যাওয়া, সংবেদনশীলতা হ্রাস এবং মৃদু দীর্ঘস্থায়ী প্রদাহ [২, ৫]। বার্ধক্যে টিস্যুসমূহ অ্যানাবলিক বা গঠনমূলক উদ্দীপনায় কম সাড়া দেয়, দেহের গঠনে পরিবর্তন ঘটে যা সারকোপেনিয়া বা পেশিক্ষয় নামে পরিচিত, এবং পরিপাক, অন্তঃক্ষরা ও পেশি-কঙ্কাল ব্যবস্থার কর্মক্ষমতা ক্রমশ হ্রাস পায় [২, ৪]। শৈশবে যেখানে নতুন কোষ ও কলা গঠনের জন্য পুষ্টির ঘনত্ব প্রয়োজন, বার্ধক্যে সেখানে বিদ্যমান কঙ্কাল পেশি ও অস্থির অবক্ষয় রোধে বিশেষায়িত পুষ্টি থেরাপির প্রয়োজন হয় [২, ৫]। ফলে জীবনব্যাপী পুষ্টিবিজ্ঞান কোনো অপরিবর্তনশীল সাধারণ নিয়ম নয়, বরং এটি বৃদ্ধি, পরিপক্কতা, রক্ষণাবেক্ষণ ও বার্ধক্যের কোষীয় চাহিদার সাথে সামঞ্জস্যপূর্ণ একটি গতিশীল ক্লিনিক্যাল বিজ্ঞান [১, ৪]।"
                  },
                  {
                        "en": "A comprehensive pedagogical understanding of lifespan nutrition requires continuous synthesis of pediatric developmental biology, adolescent endocrinology, and geriatric geroscience [1, 3, 5]. Nutritional requirements for macronutrients, essential fatty acids, minerals, and vitamins do not scale in a simple linear fashion with body weight across these age groups [3, 4]. For example, calcium and phosphorus accretion peaks during the pubertal growth spurt to build lifetime bone mineral density, whereas protein requirements per unit of lean mass in older adults actually exceed those of healthy younger adults due to age-related anabolic resistance [3, 4]. Navigating these evolving requirements is essential for public health dietitians, pediatricians, and geriatricians aiming to optimize health span alongside overall life expectancy [1, 5].",
                        "bn": "জীবনব্যাপী পুষ্টিবিজ্ঞানের সঠিক উপলব্ধির জন্য শিশু বিকাশমূলক জীববিজ্ঞান, কিশোর বয়সের হরমোনতত্ত্ব এবং বার্ধক্যবিজ্ঞানের (geroscience) সমন্বয় প্রয়োজন [১, ৩, ৫]। শর্করা, চর্বি, প্রোটিন, খনিজ ও ভিটামিনের চাহিদা বয়সের সাথে সাথে কেবল দেহের ওজনের অনুপাতে সরল রৈখিকভাবে বাড়ে বা কমে না [৩, ৪]। উদাহরণস্বরূপ, কৈশোরের বৃদ্ধির সময় আজীবন অস্থি সংরক্ষণের জন্য ক্যালসিয়াম ও ফসফরাসের সঞ্চয় সর্বোচ্চ পর্যায়ে পৌঁছায়; আবার বার্ধক্যে পেশির অ্যানাবলিক রেজিস্ট্যান্সের কারণে প্রতি কেজি পেশি ভরের বিপরীতে তরুণদের চেয়েও বেশি প্রোটিনের প্রয়োজন হয় [৩, ৪]। সামগ্রিক আয়ুর পাশাপাশি সুস্থ কর্মক্ষম জীবন নিশ্চিত করার জন্য জনস্বাস্থ্য পুষ্টিবিদ, শিশুরোগ বিশেষজ্ঞ ও প্রবীণ চিকিৎসকদের এই পুষ্টিগত পরিবর্তনসমূহ জানা অপরিহার্য [১, ৫]।"
                  }
            ]
      },
      {
            "id": "structure",
            "heading": {
                  "en": "Gastrointestinal Maturation in Infancy versus Age-Related Gastric Remodeling",
                  "bn": "শৈশবে পরিপাকতন্ত্রের পরিপক্কতা বনাম বার্ধক্যে পাকস্থলীর শারীরবৃত্তীয় পরিবর্তন"
            },
            "paragraphs": [
                  {
                        "en": "The anatomical and histological architecture of the human gastrointestinal tract undergoes extensive maturation during the first two years of life, transitioning from an immature, highly permeable epithelial barrier to a mature digestive organ [1, 6]. At birth, the neonatal gastric mucosa secretes lower concentrations of hydrochloric acid and pepsinogen, resulting in a postprandial intragastric pH between 4.0 and 5.0 that facilitates the structural survival of maternal breast milk immunoglobulins and growth factors [6]. The intestinal tight junction complexes—composed of claudins, occludin, and zonula occludens (ZO-1)—are relatively open in early infancy, permitting macromolecular antigen sampling that stimulates mucosal immunity but simultaneously rendering the neonate vulnerable to microbial translocation if challenged with inappropriate enteral solutes [6].",
                        "bn": "মানব পরিপাকতন্ত্রের গঠন ও টিস্যুর কাঠামো জীবনের প্রথম দুই বছরে ব্যাপক পরিপক্কতা লাভ করে; এটি একটি প্রাথমিক ভেদযোগ্য এপিথেলিয়াল প্রাচীর থেকে সম্পূর্ণ পরিপক্ক পরিপাক অঙ্গে রূপান্তরিত হয় [১, ৬]। জন্মের সময় নবজাতকের পাকস্থলীর মিউকোসা কম হাইড্রোক্লোরিক অ্যাসিড এবং পেপসিনোজেন ক্ষরণ করে, যার ফলে খাওয়ার পর পাকস্থলীর অম্লতা বা পিএইচ (pH) ৪.০ থেকে ৫.০ এর মধ্যে থাকে; এটি মায়ের দুধের অ্যান্টিবডি এবং গ্রোথ ফ্যাক্টরসমূহ অক্ষত রাখতে সাহায্য করে [৬]। নবজাতকের অন্ত্রের টাইট জাংশন কমপ্লেক্স—যা ক্লডিন, অক্লুডিন ও জোনুলা অক্লুডেন্স দ্বারা গঠিত—প্রাথমিকভাবে কিছুটা উন্মুক্ত থাকে, যা রোগপ্রতিরোধ ক্ষমতা বিকাশে সহায়তা করে, তবে অনুপযুক্ত খাবার দিলে তা জীবাণু সংক্রমণের ঝুঁকিও বাড়ায় [৬]।"
                  },
                  {
                        "en": "Pancreatic exocrine enzyme production follows a strictly programmed ontogenetic sequence during infancy that dictates digestive capability [6]. Neonatal pancreatic alpha-amylase activity is negligible at birth and remains low until approximately six months of age, with salivary amylase and breast milk amylase providing compensatory starch hydrolysis [6]. In contrast, gastric lipase and pancreatic lipase-related protein 2 (PLRP2), operating alongside bile salt-stimulated lipase (BSSL) transferred in human milk, ensure efficient emulsification and digestion of high-fat milk lipids [6]. Intestinal enterocytes express abundant lactase-phlorizin hydrolase along their brush border to cleave lactose into glucose and galactose, whereas sucrase-isomaltase and maltase-glucoamylase activities rise gradually in response to the introduction of non-milk carbohydrates around the middle of the first year [6].",
                        "bn": "শৈশবে অগ্ন্যাশয়ের পরিপাককারী এনজাইম ক্ষরণ একটি সুনির্দিষ্ট শারীরবৃত্তীয় ধাপ অনুসরণ করে যা শিশুর হজম ক্ষমতা নির্ধারণ করে [৬]। জন্মের সময় নবজাতকের অগ্ন্যাশয়ের আলফা-অ্যামাইলেজ কার্যকারিতা খুবই কম থাকে এবং প্রায় ছয় মাস বয়স পর্যন্ত এই মাত্রা নিচু থাকে; এই সময় লালাগ্রন্থির অ্যামাইলেজ এবং মাতৃদুগ্ধের অ্যামাইলেজ শর্করা হজমে সহায়তা করে [৬]। এর বিপরীতে, গ্যাস্ট্রিক লাইপেজ এবং মাতৃদুগ্ধের বাইল-সল্ট স্টিমুলেটেড লাইপেজ (BSSL) উচ্চ-চর্বিযুক্ত দুধের লিপিড দ্রুত ইমালসিফিকেশন ও হজম করতে সক্ষম [৬]। নবজাতকের ক্ষুদ্রান্ত্রের এন্টারোসাইট কোষে প্রচুর ল্যাকটেজ এনজাইম থাকে যা দুধের ল্যাকটোজকে গ্লুকোজ ও গ্যালাক্টোজে ভেঙে দেয়, পক্ষান্তরে সুক্রেজ ও মল্টেজ এনজাইমের মাত্রা প্রায় ছয় মাস বয়সে পরিপূরক খাদ্য গ্রহণের সাথে সাথে বৃদ্ধি পায় [৬]।"
                  },
                  {
                        "en": "In contrast to neonatal barrier maturation, advanced biological age induces degenerative anatomical remodeling throughout the upper gastrointestinal tract [4, 5]. Chronic atrophic gastritis, characterized by autoimmune or Helicobacter pylori-driven destruction of specialized oxyntic glands in the gastric corpus and fundus, leads to widespread loss of acid-secreting parietal cells [4, 5]. The resulting hypochlorhydria or complete achlorhydria raises median fasting intragastric pH above 6.0, disrupting the chemical barrier against ingested oral microbes and drastically reducing the peptic cleavage of protein-bound dietary micronutrients [4, 5]. Concurrently, the progressive reduction in mucosal blood flow and submucosal connective tissue elasticity impairs gastric compliance and slows postprandial antral motility [5].",
                        "bn": "নবজাতকের প্রাচীর পরিপক্কতার বিপরীতে, বার্ধক্যে পরিপাকতন্ত্রের উপরিভাগে কাঠামোগত অবক্ষয় ঘটে [৪, ৫]। ক্রনিক অ্যাট্রোফিক গ্যাস্ট্রাইটিস—যা অটোইমিউন কারণ অথবা হেলিকোব্যাক্টার পাইলোরি সংক্রমণের কারণে পাকস্থলীর প্যারাইটাল কোষ ধ্বংস করে—এর ফলে হাইড্রোক্লোরিক অ্যাসিড ক্ষরণ মারাত্মকভাবে কমে যায় [৪, ৫]। এর ফলে পাকস্থলীর অম্লতা হ্রাস পেয়ে পিএইচ ৬.০ এর উপরে ওঠে (অ্যাক্লোরহাইড্রিয়া), যা খাদ্যের জীবাণু ধ্বংসের স্বাভাবিক ক্ষমতা নষ্ট করে এবং খাদ্যের প্রোটিনের সাথে যুক্ত ভিটামিন ও খনিজ মুক্ত করার প্রক্রিয়া ব্যাহত করে [৪, ৫]। একই সাথে রক্তপ্রবাহ কমে যাওয়া এবং মিউকোসার স্থিতিস্থাপকতা হ্রাসের ফলে পাকস্থলীর সংকোচন ও খাদ্য হজম প্রক্রিয়া ধীরগতির হয়ে পড়ে [৫]।"
                  },
                  {
                        "en": "The loss of gastric parietal cell mass has catastrophic structural repercussions for intrinsic factor (IF) synthesis and intestinal micronutrient liberation [4, 5]. Gastric intrinsic factor is a 45-kDa glycoprotein obligatory for receptor-mediated endocytosis of cobalamin (vitamin B12) in the terminal ileum via the cubam receptor complex [4]. In hypochlorhydric older adults, pepsinogen remains unactivated, preventing the release of vitamin B12 from animal dietary proteins, while concomitant reduction in intrinsic factor transcription impairs distal ileal capture [4, 5]. Additionally, non-heme iron and calcium salts require an acidic gastric milieu for ionization into soluble ferric/ferrous and divalent calcium forms; hypochlorhydria thus precipitates malabsorption of essential bone-forming and erythropoietic minerals [3, 4, 5].",
                        "bn": "পাকস্থলীর প্যারাইটাল কোষের ক্ষয় ইনট্রিনসিক ফ্যাক্টর (IF) সংশ্লেষ এবং অন্ত্রে ক্ষুদ্র পুষ্টি উপাদান শোষণে মারাত্মক বিপর্যয় সৃষ্টি করে [৪, ৫]। ইনট্রিনসিক ফ্যাক্টর হলো একটি ৪৫-কিলোডাল্টন গ্লাইকোপ্রোটিন, যা ভিটামিন বি১২-এর সাথে যুক্ত হয়ে দূরবর্তী ইলিয়ামে কিউবাম (cubam) রিসেপ্টরের মাধ্যমে শোষিত হতে অপরিহার্য [৪]। অম্লস্বল্পতার কারণে বয়স্কদের পেপসিনোজেন সক্রিয় হতে পারে না, ফলে খাদ্য প্রোটিন থেকে ভিটামিন বি১২ মুক্ত হয় না এবং ইনট্রিনসিক ফ্যাক্টরের অভাবে রক্তস্বল্পতার ঝুঁকি বাড়ে [৪, ৫]। তাছাড়া নন-হিম আয়রন ও ক্যালসিয়াম লবণ দ্রবীভূত হওয়ার জন্য অম্লীয় পরিবেশ প্রয়োজন; অ্যাসিডের অভাবে এই উপাদানগুলোর শোষণ কমে গিয়ে অস্টিওপোরোসিস ও অ্যানিমিয়ার সূত্রপাত ঘটে [৩, ৪, ৫]।"
                  }
            ]
      },
      {
            "id": "mechanism",
            "heading": {
                  "en": "Weaning Physiology & Introduction of Nutrient-Dense Complementary Feeding",
                  "bn": "উইনিং শারীরবৃত্ত ও পরিপূরক পুষ্টিকর খাদ্যাভ্যাস প্রবর্তনের বৈজ্ঞানিক প্রক্রিয়া"
            },
            "paragraphs": [
                  {
                        "en": "Weaning, defined clinically as the progressive transition from exclusive breastfeeding or formula feeding to family foods, represents a critical physiological window between four and twenty-four months of age [1, 6]. Exclusive breastfeeding satisfies all nutritional and hydration requirements for healthy full-term infants during the first six months of post-natal life [6]. However, beyond six months, the infant somatic growth rate and resting metabolic rate outpace the maximal daily caloric and micronutrient delivery of maternal breast milk [1, 6]. Maternal milk output typically plateaus between 700 and 850 mL per day, creating an widening \"energy and nutrient gap\" that must be systematically bridged by safe, developmentally appropriate, and nutrient-dense complementary foods [6].",
                        "bn": "উইনিং বা মায়ের দুধের পাশাপাশি স্বাভাবিক খাদ্য গ্রহণ হলো চার থেকে চব্বিশ মাস বয়সের একটি অত্যন্ত গুরুত্বপূর্ণ শারীরবৃত্তীয় রূপান্তর পর্ব [১, ৬]। জন্মের পর প্রথম ছয় মাস মায়ের দুধ শিশুর সমস্ত ক্যালোরি, পুষ্টি এবং তরলের চাহিদা সম্পূর্ণভাবে পূরণ করে [৬]। তবে ছয় মাসের পর শিশুর দ্রুত দৈহিক বৃদ্ধি এবং বিপাকীয় চাহিদা কেবল মায়ের দুধ থেকে পাওয়া পুষ্টির চেয়ে বেশি হয়ে দাঁড়ায় [১, ৬]। একজন মায়ের স্বাভাবিক দুগ্ধ ক্ষরণ দৈনিক ৭০০ থেকে ৮৫০ মিলিলিটারে স্থিতিশীল হয়, যার ফলে একটি পুষ্টিগত ঘাটতি তৈরি হয়; এই ঘাটতি পূরণের জন্য পুষ্টিকর ও নিরাপদ পরিপূরক খাদ্য শুরু করা অপরিহার্য [৬]।"
                  },
                  {
                        "en": "The biochemical necessity for complementary feeding is most acute for elemental iron and zinc, whose endogenous hepatic reserves become exhausted around six months of post-natal life [1, 6]. Full-term infants are born with hepatic iron stores proportional to their birth weight, laid down predominantly during the third trimester of pregnancy via active placental syncytiotrophoblast transfer [6]. By four to six months of age, these fetal reserves are completely consumed by the massive expansion of the circulating erythrocyte mass and myoglobin synthesis in growing skeletal muscle [6]. Because mature human breast milk contains relatively low absolute concentrations of iron (~0.2 to 0.4 mg/L), continued exclusive breastfeeding without iron-rich complementary foods invariably precipitates iron-deficiency microcytic anemia and irreversible neurodevelopmental delays [1, 6].",
                        "bn": "পরিপূরক খাদ্যের জৈব রাসায়নিক প্রয়োজনীয়তা সবচেয়ে বেশি দেখা দেয় আয়রন এবং জিংকের ক্ষেত্রে, যার জন্মগত সঞ্চয় ছয় মাসের মধ্যে শেষ হয়ে যায় [১, ৬]। গর্ভাবস্থার শেষ তিন মাসে গর্ভফুল দিয়ে সঞ্চিত ভ্রূণের যকৃতের আয়রন ভাণ্ডার জন্মের সময় শিশুর ওজনের সমানুপাতিক থাকে [৬]। কিন্তু চার থেকে ছয় মাসের মধ্যে দ্রুত লোহিত রক্তকণিকা বৃদ্ধি এবং পেশির মায়োগ্লোবিন তৈরিতে এই সঞ্চিত আয়রন সম্পূর্ণ নিঃশেষিত হয় [৬]। যেহেতু মায়ের দুধে আয়রনের ঘনত্ব তুলনামূলকভাবে কম (প্রতি লিটারে প্রায় ০.২ থেকে ০.৪ মিলিগ্রাম), তাই আয়রনসমৃদ্ধ পরিপূরক খাদ্য ছাড়া কেবল বুকের দুধ খাওয়ালে মারাত্মক রক্তাল্পতা এবং স্নায়বিক বিকাশে অপূরণীয় ক্ষতি হতে পারে [১, ৬]।"
                  },
                  {
                        "en": "Physiological readiness for complementary feeding requires the simultaneous coordination of neuromuscular, renal, and gastrointestinal maturation [1, 6]. Neurologically, the infant must lose the primitive tongue extrusion reflex, achieve stable head and neck control, and demonstrate the ability to sit with minimal support to swallow semi-solid boluses without tracheal aspiration [6]. Renally, the tubular nephrons and glomeruli must attain sufficient filtration and concentration capacity to handle the increased renal solute load (RSL)—composed of urea from dietary protein and excreted sodium, potassium, and chloride ions—without causing hypertonic dehydration [6]. Introducing solid foods prior to four months (seventeen weeks) stresses immature nephrons and mucosal junctions, whereas delaying introduction beyond six months risks growth faltering, oral-motor feeding aversion, and micronutrient deficiencies [1, 6].",
                        "bn": "পরিপূরক খাদ্য গ্রহণের শারীরবৃত্তীয় প্রস্তুতির জন্য শিশুর স্নায়ু-পেশি, বৃক্ক (কিডনি) এবং পরিপাকতন্ত্রের একযোগে পরিপক্কতা প্রয়োজন [১, ৬]। স্নায়বিকভাবে শিশুকে জিহ্বা দিয়ে খাবার ঠেলে বের করে দেওয়ার আদিম রিফ্লেক্স কাটিয়ে উঠতে হবে, ঘাড় সোজা রাখতে সক্ষম হতে হবে এবং কোনো সাহায্য ছাড়াই বসে খাবার গিলতে পারতে হবে যাতে শ্বাসনালীতে খাবার না আটকায় [৬]। কিডনির ক্ষেত্রে, প্রোটিন থেকে উৎপন্ন ইউরিয়া এবং সোডিয়াম ও পটাসিয়ামের রেচন চাপ (Renal Solute Load) নিরাপদে সামলানোর মতো পরিপক্কতা অর্জন জরুরি [৬]। চার মাসের আগে শক্ত খাবার দিলে তা অপরিপক্ক কিডনির ওপর চাপ ফেলে, অন্যদিকে ছয় মাসের বেশি দেরি করলে শিশুর দৈহিক বৃদ্ধি বাধাগ্রস্ত হয় এবং খাবার চিবানোর স্বাভাবিক অভ্যাস গড়ে ওঠে না [১, ৬]।"
                  },
                  {
                        "en": "Nutrient density and microbiological safety govern the design of optimal complementary feeding regimens [1, 6]. Because an infant stomach has a limited anatomical capacity of roughly 30 mL per kilogram of body weight per meal, complementary foods must provide high nutrient density without excessive viscosity [6]. Watery gruels or diluted starches provide bulk that induces premature gastric distension and vagal satiety signaling without delivering adequate energy or bioavailable micronutrients, a major etiology of childhood stunting in low-resource settings [1, 6]. Optimal complementary diets incorporate animal-source foods (liver, eggs, meat, fish) providing heme iron and zinc, alongside pureed legumes, fortified whole grains, and healthy lipids that enhance the absorption of fat-soluble vitamins [6].",
                        "bn": "পরিপূরক খাদ্যের কার্যকারিতা নির্ভর করে তার পুষ্টির ঘনত্ব এবং জীবাণুমুক্ত পরিচ্ছন্নতার ওপর [১, ৬]। শিশুর পাকস্থলীর ধারণক্ষমতা সীমিত (প্রতি কেজি ওজনে প্রায় ৩০ মিলিলিটার) হওয়ায় খাবার অতিরিক্ত পাতলা না হয়ে পুষ্টিঘন হওয়া আবশ্যক [৬]। অতিরিক্ত পাতলা জাউ বা শর্করা পাকস্থলী ভরিয়ে দিয়ে দ্রুত তৃপ্তি তৈরি করে কিন্তু প্রয়োজনীয় ক্যালোরি ও খনিজ সরবরাহ করতে পারে না, যা অনুন্নত অঞ্চলে শিশুদের খর্বতার অন্যতম প্রধান কারণ [১, ৬]। আদর্শ পরিপূরক খাদ্যে প্রাণিজ উৎস (কলিজা, ডিম, মাংস, মাছ) থাকা উচিত যা সহজে শোষণযোগ্য হিম আয়রন ও জিংক সরবরাহ করে, এবং এর সাথে ডাল, শাকসবজি ও স্বাস্থ্যকর তেল মিশিয়ে চর্বিতে দ্রবণীয় ভিটামিন শোষণ নিশ্চিত করা হয় [৬]।"
                  }
            ]
      },
      {
            "id": "integration",
            "heading": {
                  "en": "Pubertal Growth Spurts, Tanner Staging & Sex-Dimorphic Body Composition",
                  "bn": "বয়ঃসন্ধির দ্রুত বৃদ্ধি, ট্যানার পর্যায় এবং লিঙ্গভিত্তিক দৈহিক গঠনের বিভাজন"
            },
            "paragraphs": [
                  {
                        "en": "Adolescence represents the second and final period of rapid somatic growth velocity in the human life cycle, marked by the reactivation of the hypothalamic-pituitary-gonadal (HPG) axis and extensive body composition remodeling [1, 3]. Pulsatile release of gonadotropin-releasing hormone (GnRH) stimulates anterior pituitary secretion of luteinizing hormone (LH) and follicle-stimulating hormone (FSH), which drive gonadal steroidogenesis (testosterone in biological males and estradiol in biological females) [3]. Simultaneously, the somatotropic axis undergoes profound amplification, with circulating growth hormone (GH) and hepatic insulin-like growth factor 1 (IGF-1) concentrations peaking at values three- to four-fold higher than adult reference levels, fueling chondrocyte hypertrophy at epiphyseal growth plates [3].",
                        "bn": "কৈশোর বা বয়ঃসন্ধিকাল হলো মানব জীবনের দ্বিতীয় এবং সর্বশেষ দ্রুত বৃদ্ধির অধ্যায়, যা হাইপোথ্যালামাস-পিটুইটারি-গোনাডাল (HPG) অক্ষের সক্রিয়তা এবং শারীরিক গঠনের ব্যাপক রূপান্তরের মাধ্যমে চিহ্নিত হয় [১, ৩]। জিএনআরএইচ (GnRH) হরমোনের স্পন্দনশীল নিঃসরণ পিটুইটারি গ্রন্থিকে এলএইচ (LH) ও এফএসএইচ (FSH) ক্ষরণে উদ্দীপ্ত করে, যা ছেলেদের ক্ষেত্রে টেস্টোস্টেরন এবং মেয়েদের ক্ষেত্রে ইস্ট্রোজেন হরমোন তৈরি করে [৩]। একই সাথে গ্রোথ হরমোন (GH) এবং যকৃতে উৎপন্ন ইনসুলিন-লাইক গ্রোথ ফ্যাক্টর-১ (IGF-1)-এর মাত্রা প্রাপ্তবয়স্কদের স্বাভাবিক মাত্রার চেয়ে তিন থেকে চার গুণ বৃদ্ধি পায়, যা অস্থির এপিফাইসিয়াল প্লেটে তরুণাস্থি বিভাজনের মাধ্যমে দ্রুত দৈহিক বৃদ্ধি ঘটায় [৩]।"
                  },
                  {
                        "en": "The clinical evaluation of adolescent somatic development relies on sexual maturation staging described by Marshall and Tanner (Tanner Stages 1 through 5) [1, 3]. Chronological age is an notoriously unreliable predictor of nutritional needs during this phase, because biological peak height velocity (PHV) varies widely between individuals [3]. In females, peak height velocity typically occurs early in puberty (Tanner stage 2 to 3, roughly 11.5 to 12 years of age), preceding menarche by approximately twelve months and averaging 8 to 9 cm per year [3]. In males, peak height velocity occurs substantially later (Tanner stage 3 to 4, roughly 13.5 to 14 years of age), but reaches a higher absolute magnitude of 9.5 to 11 cm per year and lasts longer, generating the characteristic adult sexual dimorphism in stature [1, 3].",
                        "bn": "কৈশোরের বৃদ্ধির ক্লিনিক্যাল মূল্যায়ন মার্শাল এবং ট্যানারের সেক্সুয়াল ম্যাচুরেশন রেটিং বা ট্যানার পর্যায় (পর্যায় ১ থেকে ৫) দ্বারা পরিমাপ করা হয় [১, ৩]। এই বয়সে কেবল পঞ্জিকার বয়স দেখে পুষ্টির চাহিদা নির্ধারণ করা ভুল হতে পারে, কারণ প্রত্যেকের সর্বোচ্চ উচ্চতা বৃদ্ধির সময় (Peak Height Velocity বা PHV) ভিন্ন হয় [৩]। মেয়েদের ক্ষেত্রে উচ্চতা বৃদ্ধির এই শীর্ষ সময়টি বয়ঃসন্ধির শুরুর দিকে (ট্যানার পর্যায় ২-৩, প্রায় ১১.৫ থেকে ১২ বছর বয়সে) ঘটে, যা প্রথম মাসিকের প্রায় এক বছর পূর্বে আসে এবং বছরে প্রায় ৮-৯ সেমি উচ্চতা বাড়ে [৩]। ছেলেদের ক্ষেত্রে এই বৃদ্ধি কিছুটা দেরিতে (ট্যানার পর্যায় ৩-৪, প্রায় ১৩.৫ থেকে ১৪ বছর বয়সে) শুরু হলেও তা অধিক তীব্র (বছরে ৯.৫ থেকে ১১ সেমি) এবং দীর্ঘস্থায়ী হয়, যা প্রাপ্তবয়স্ক নারী ও পুরুষের শারীরিক উচ্চতার পার্থক্য গড়ে তোলে [১, ৩]।"
                  },
                  {
                        "en": "Sex steroids orchestrate profound divergence in tissue accretion and body composition between adolescent males and females [1, 3]. Under the anabolic influence of testosterone acting on androgen receptors in myocytes, adolescent males double their skeletal muscle mass, increase circulating hemoglobin concentrations to support expanded oxygen transport, and reduce relative fat mass [3]. In contrast, estradiol and progesterone promote peripheral adipose tissue deposition in adolescent females—predominantly in gluteofemoral subcutaneous depots—increasing total body fat from approximately 16% in prepuberty to 22-26% post-menarche, an evolutionarily conserved energy reserve required for future ovulatory cyclicity and successful gestation [1, 3].",
                        "bn": "যৌন হরমোনসমূহ কিশোর ও কিশোরীদের শারীরিক গঠন এবং বিভিন্ন টিস্যু সঞ্চয়ে স্পষ্ট পার্থক্য তৈরি করে [১, ৩]। টেস্টোস্টেরনের প্রভাবে কিশোরদের কঙ্কাল পেশির ভর দ্বিগুণ হয়, লোহিত রক্তকণিকা ও হিমোগ্লোবিনের মাত্রা বাড়ে এবং সামগ্রিক চর্বির অনুপাত হ্রাস পায় [৩]। এর বিপরীতে, ইস্ট্রোজেনের প্রভাবে কিশোরীদের শরীরে—বিশেষ করে নিতম্ব ও উরুর সাবকিউটেনিয়াস অংশে—চর্বির সঞ্চয় ঘটে; যার ফলে বয়ঃসন্ধিপূর্ব ১৬% শারীরিক চর্বি বেড়ে ঋতুস্রাব-পরবর্তী সময়ে ২২-২৬% এ দাঁড়ায়, যা ভবিষ্যতে ডিম্বস্ফোটন এবং প্রজনন সক্ষমতা রক্ষার জন্য অপরিহার্য প্রাকৃতিক শক্তিভাণ্ডার হিসেবে কাজ করে [১, ৩]।"
                  },
                  {
                        "en": "These rapid tissue expansions dictate dramatically elevated absolute micronutrient and energy requirements throughout puberty [3]. Iron requirements in adolescent females increase substantially to compensate for menstrual blood losses and expand vascular volume, rendering them highly susceptible to iron-deficiency anemia [1, 3]. In adolescent males, iron is aggressively sequestered into expanding myoglobin and red cell mass during the peak growth spurt [3]. Similarly, calcium accretion requirements reach their lifetime peak during Tanner stages 3 and 4, during which up to 40% of adult skeletal bone mineral content is consolidated [3]. Failure to meet these heightened nutritional demands impairs linear potential, compromises immune resilience, and limits lifetime peak bone mass [1, 3].",
                        "bn": "এই দ্রুত শারীরিক বিকাশের কারণে বয়ঃসন্ধিকালে ক্যালোরি ও খনিজের দৈনিক চাহিদা জীবনের সর্বোচ্চ সীমায় পৌঁছায় [৩]। কিশোরীদের ক্ষেত্রে মাসিকের রক্তক্ষরণ এবং রক্তের আয়তন বৃদ্ধির কারণে আয়রনের চাহিদা বহুগুণ বাড়ে, ফলে তারা সহজেই রক্তাল্পতায় আক্রান্ত হতে পারে [১, ৩]। কিশোরদের ক্ষেত্রে দ্রুত বর্ধনশীল পেশির মায়োগ্লোবিন এবং নতুন লোহিত রক্তকণিকা তৈরিতে প্রচুর আয়রন ব্যবহৃত হয় [৩]। একইভাবে, ট্যানার ৩ ও ৪ পর্যায়ে ক্যালসিয়াম সঞ্চয় সর্বোচ্চ হয়, যেখানে প্রাপ্তবয়স্ক জীবনের প্রায় ৪০% অস্থির খনিজ ঘনত্ব অর্জিত হয় [৩]। এই সময় সুষম পুষ্টির ঘাটতি হলে চূড়ান্ত উচ্চতা হ্রাস পায়, রোগপ্রতিরোধ ক্ষমতা কমে এবং আজীবনের জন্য অস্থির ঘনত্ব দুর্বল হয়ে পড়ে [১, ৩]।"
                  }
            ]
      },
      {
            "id": "practice",
            "heading": {
                  "en": "Growth Chart Plotting, Anthropometric Trajectories & Faltering Recognition",
                  "bn": "বৃদ্ধি চার্ট অঙ্কন, নৃমিতিক গতিপথ ও বৃদ্ধি স্থবিরতা শনাক্তকরণের ব্যবহারিক পদ্ধতি"
            },
            "paragraphs": [
                  {
                        "en": "Accurate clinical anthropometry forms the empirical foundation for pediatric growth monitoring and nutritional screening in outpatient practice [1]. In infants and children younger than two years of age, recumbent length is measured using a calibrated infantometer with a fixed headboard and movable footboard, requiring two trained measurers to maintain Frankfurt horizontal plane alignment and fully extend the lower extremities [1]. Weight is recorded using a calibrated electronic pan scale with infants unclothed, while head circumference is measured using an inextensible tension-sensitive metric tape passing above the supraorbital ridges and over the maximal occipital prominence [1]. Beyond two years of age, standing height is determined using a wall-mounted stadiometer with shoes removed and heels, buttocks, and upper back contacting the vertical upright [1].",
                        "bn": "সঠিক নৃমিতিক পরিমাপ (Anthropometry) বহির্বিভাগে শিশুর শারীরিক বৃদ্ধি পর্যবেক্ষণ এবং অপুষ্টি শনাক্তকরণের প্রধান ভিত্তি [১]। দুই বছরের কম বয়সী শিশুদের ক্ষেত্রে শোয়ানো অবস্থায় দৈর্ঘ্য (Recumbent length) পরিমাপের জন্য ইনফ্যান্টোমিটার ব্যবহার করা হয়, যেখানে দুইজন প্রশিক্ষিত পরিমাপক শিশুর মাথা ফ্রাঙ্কফুর্ট সমতলে রেখে পা সোজা করে সঠিক মাপ নিশ্চিত করেন [১]। শিশুদের সম্পূর্ণ অনাবৃত অবস্থায় সংবেদনশীল ইলেকট্রনিক স্কেলে ওজন নেওয়া হয় এবং কপালের উপর দিয়ে মাথার পরিধি (OFC) পরিমাপ করা হয় [১]। দুই বছরের বেশি বয়সী শিশুদের জুতা খুলে সোজা দাঁড়িয়ে ওয়াল-মাউন্টেড স্টেডিওমিটারের সাহায্যে উচ্চতা পরিমাপ করতে হয় [১]।"
                  },
                  {
                        "en": "Plotting sequential anthropometric data points onto sex-specific WHO growth charts generates an individualized developmental trajectory that is far more clinically informative than any single isolated cross-sectional measurement [1]. In a healthy, well-nourished child, growth parameters typically parallel a specific percentile curve (e.g., 25th, 50th, or 75th percentile) without erratic downward or upward drift [1]. Normal physiological variation occurs during the first six to eighteen months of life, during which \"canalization\" or catch-up/catch-down growth takes place as the infant moves from a trajectory dictated by intrauterine constraint toward their genetic target percentile calculated from mid-parental height [1].",
                        "bn": "বিশ্ব স্বাস্থ্য সংস্থার (WHO) লিঙ্গভিত্তিক বৃদ্ধি চার্টে ধারাবাহিকভাবে শিশুর ওজন ও উচ্চতার বিন্দুগুলো চিহ্নিত করলে একটি ব্যক্তিগত বৃদ্ধির গতিপথ পাওয়া যায়, যা কোনো একক পরিমাপের চেয়ে অনেক বেশি তথ্যবহুল [১]। একজন সুস্থ স্বাভাবিক শিশুর বৃদ্ধির রেখা একটি নির্দিষ্ট পার্সেন্টাইল লাইনের (যেমন ২৫তম, ৫০তম বা ৭৫তম) সমান্তরালে অগ্রসর হয় [১]। তবে জীবনের প্রথম ৬ থেকে ১৮ মাসের মধ্যে প্রাকৃতিক \"ক্যানালাইজেশন\" ঘটতে পারে, যেখানে শিশুটি গর্ভকালীন সীমাবদ্ধতা কাটিয়ে তার পিতা-মাতার জেনেটিক উচ্চতা অনুযায়ী নিজস্ব স্বাভাবিক পার্সেন্টাইলে পৌঁছায় [১]।"
                  },
                  {
                        "en": "Growth faltering—historically termed failure to thrive—is defined clinically by a downward crossing of two or more major percentile lines on the WHO weight-for-age chart, or persistent weight velocity below the 5th percentile over a two- to three-month interval in infants [1, 6]. When growth faltering is identified, the clinician must distinguish between inadequate caloric intake, nutrient malabsorption, and accelerated metabolic expenditure [1]. The initial diagnostic evaluation involves a detailed 3-day dietary recall, assessment of maternal-infant interaction during feeding, and screening for chronic subclinical infections or gastrointestinal losses (e.g., celiac enteropathy, cow milk protein allergy, cystic fibrosis) [1, 6].",
                        "bn": "বৃদ্ধি স্থবিরতা (Growth faltering বা Failure to thrive) হলো এমন একটি অবস্থা যেখানে শিশুর ওজন বৃদ্ধি চার্টে পরপর দুটি প্রধান পার্সেন্টাইল লাইন অতিক্রম করে নিচে নেমে যায়, অথবা দুই থেকে তিন মাস ধরে ওজন বৃদ্ধির গতি ৫ম পার্সেন্টাইলের নিচে অবস্থান করে [১, ৬]। বৃদ্ধি স্থবিরতা দেখা দিলে চিকিৎসককে দেখতে হবে শিশুটি পর্যাপ্ত খাচ্ছে কিনা, পরিপাকে কোনো সমস্যা আছে কিনা, নাকি কোনো দীর্ঘস্থায়ী রোগের কারণে অতিরিক্ত ক্যালোরি ব্যয় হচ্ছে [১]। এর প্রাথমিক মূল্যায়নে ৩-দিনের খাদ্যতালিকা বিশ্লেষণ, খাওয়ানোর সময় মা ও শিশুর মিথস্ক্রিয়া এবং কোনো খাদ্য অ্যালার্জি বা সিলিয়াক রোগের উপস্থিতি পরীক্ষা করা হয় [১, ৬]।"
                  },
                  {
                        "en": "Early recognition and timely nutritional rehabilitation of growth faltering prevents long-term neurocognitive impairment and systemic metabolic scarring [1]. In community and hospital settings, mid-upper arm circumference (MUAC) serves as a rapid, reliable proxy for acute peripheral muscle wasting and subcutaneous fat depletion in children aged 6 to 59 months [1]. A MUAC below 125 mm indicates moderate acute malnutrition (MAM), whereas a MUAC below 115 mm or the bilateral presence of nutritional pitting edema establishes the diagnosis of severe acute malnutrition (SAM) [1]. Standardized therapeutic protocols utilizing ready-to-use therapeutic food (RUTF) provide high-density lipids, intact dairy proteins, and comprehensive micronutrients to restore positive nitrogen balance and drive rapid catch-up growth [1, 6].",
                        "bn": "বৃদ্ধি স্থবিরতার প্রাথমিক শনাক্তকরণ এবং সঠিক পুষ্টি পুনর্বাসন শিশুর দীর্ঘমেয়াদী স্নায়বিক ক্ষতি এবং বুদ্ধিমত্তার ঘাটতি রোধ করে [১]। মাঠপর্যায়ে এবং হাসপাতালে ৬ থেকে ৫৯ মাস বয়সী শিশুদের পেশিক্ষয় ও তীব্র অপুষ্টি দ্রুত শনাক্ত করার জন্য মধ্য-উর্ধ্ব বাহুর পরিধি (MUAC) পরিমাপ করা হয় [১]। এমইউএসি (MUAC) ১২৫ মিলিমিটারের নিচে হলে মাঝারি তীব্র অপুষ্টি (MAM) এবং ১১৫ মিলিমিটারের নিচে গেলে কিংবা দুই পায়ে ইডিমা বা পানি আসলে মারাত্মক তীব্র অপুষ্টি (SAM) হিসেবে চিহ্নিত করা হয় [১]। বিশ্ব স্বাস্থ্য সংস্থার মানসম্মত আরইউটিএফ (RUTF) বা থেরাপিউটিক খাদ্যের মাধ্যমে উচ্চ-ক্যালোরি, উন্নত প্রোটিন ও খনিজ সরবরাহ করে দ্রুত শিশুর স্বাভাবিক ওজন পুনরুদ্ধার করা হয় [১, ৬]।"
                  }
            ]
      },
      {
            "id": "takeaways",
            "heading": {
                  "en": "Foundational Summary of Lifespan Transitions & Vulnerability Windows",
                  "bn": "জীবনব্যাপী পুষ্টির পরিবর্তন ও সংবেদনশীল পর্যায়সমূহের সারসংক্ষেপ"
            },
            "paragraphs": [
                  {
                        "en": "The foundational study of lifespan nutrition establishes that human metabolic requirements are fundamentally dynamic, adapting continuously to the physiological imperatives of growth, tissue maintenance, and cellular senescence [1, 2]. The human life cycle contains two distinct intervals of extreme somatic velocity: early infancy, when growth velocity is at its absolute maximum, and the adolescent pubertal growth spurt, during which adult skeletal stature and sex-specific body composition are finalized [1, 3]. Across both stages, nutritional adequacy directly shapes lifetime structural architecture, determining peak brain volume, muscular development, and peak skeletal bone mass [1, 3, 6].",
                        "bn": "জীবনব্যাপী পুষ্টিবিজ্ঞানের মৌলিক পাঠ থেকে স্পষ্ট হয় যে মানবদেহের বিপাকীয় চাহিদা একটি পরিবর্তনশীল প্রক্রিয়া, যা বৃদ্ধি, টিস্যু সংরক্ষণ এবং কোষীয় বার্ধক্যের শারীরিক নিয়মের সাথে সর্বদা খাপ খাইয়ে চলে [১, ২]। মানব জীবনে দ্রুত বৃদ্ধির দুটি প্রধান অধ্যায় রয়েছে: প্রাথমিক শৈশব, যখন বৃদ্ধির গতি সর্বোচ্চ থাকে, এবং কৈশোরের বয়ঃসন্ধিকাল, যখন প্রাপ্তবয়স্ক জীবনের অস্থি কাঠামো ও লিঙ্গভিত্তিক শারীরিক রূপরেখা চূড়ান্ত হয় [১, ৩]। এই উভয় পর্যায়ে পুষ্টির সঠিক জোগান আজীবন মস্তিষ্কের বিকাশ, পেশির গঠন এবং অস্থির সর্বোচ্চ ঘনত্ব নির্ধারণ করে [১, ৩, ৬]।"
                  },
                  {
                        "en": "Infant feeding transitions follow an evolutionary and biologically dictated timetable [1, 6]. Exclusive breastfeeding for the first six months provides species-specific macro- and micronutrients along with bioactive maternal immunoglobulins, enzymes, and oligosaccharides [6]. Beyond six months, physiological development dictates the timely introduction of iron- and zinc-dense complementary foods to bridge the inevitable gap between maternal milk output and infant somatic expenditure [1, 6]. Complementary foods must combine high nutrient density with hygienic preparation to avoid the dual hazards of early linear stunting and acute diarrheal malnutrition [1, 6].",
                        "bn": "শিশুর খাদ্যাভ্যাসের রূপান্তর একটি প্রাকৃতিক ও বৈজ্ঞানিক সময়সূচি মেনে চলে [১, ৬]। প্রথম ছয় মাস শুধুমাত্র মায়ের দুধ পান করালে তা শিশুর প্রয়োজনীয় পুষ্টির পাশাপাশি রোগপ্রতিরোধী অ্যান্টিবডি ও উপকারি এনজাইম সরবরাহ করে [৬]। ছয় মাস অতিক্রান্ত হওয়ার পর আয়রন ও জিংকসমৃদ্ধ পরিপূরক খাদ্য শুরু করা অপরিহার্য, যাতে মাতৃদুগ্ধের সীমিত উৎপাদনের সাথে শিশুর দ্রুত বর্ধনশীল চাহিদার ব্যবধান দূর করা যায় [১, ৬]। এই পরিপূরক খাদ্য একই সাথে পুষ্টিকর ও জীবাণুমুক্ত হওয়া আবশ্যক, অন্যথায় ডায়রিয়া ও দীর্ঘমেয়াদী খর্বতার ঝুঁকি তৈরি হয় [১, ৬]।"
                  },
                  {
                        "en": "Adolescent maturation illustrates the profound influence of sex steroids on nutrient metabolism [3]. Under the drive of the HPG and somatotropic axes, males rapidly expand functional muscle mass and red cell volume, necessitating increased protein and iron intake, while females deposit essential gluteofemoral adipose tissue and experience menstrual iron losses [1, 3]. Crucially, pubertal skeletal growth provides a unique, non-renewable window for bone mineral accretion; deficits in calcium, phosphorus, or vitamin D incurred during Tanner stages 2 through 4 cannot be fully compensated for in mature adulthood [3].",
                        "bn": "কৈশোরের শারীরিক রূপান্তর পুষ্টি বিপাকে যৌন হরমোনের শক্তিশালী প্রভাবকে তুলে ধরে [৩]। গোনাডাল ও গ্রোথ হরমোনের উদ্দীপনায় কিশোরদের শরীরে কঙ্কাল পেশি ও লোহিত রক্তকণিকার দ্রুত বিকাশ ঘটে যার জন্য প্রচুর প্রোটিন ও আয়রন লাগে; আর কিশোরীদের ক্ষেত্রে ঋতুস্রাবের ক্ষতিপূরণ এবং প্রজনন সহায়ক চর্বি সঞ্চয় ঘটে [১, ৩]। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, বয়ঃসন্ধির এই সময়টি অস্থিতে ক্যালসিয়াম সঞ্চয়ের একমাত্র অপূরণীয় সুযোগ; ট্যানার ২ থেকে ৪ পর্যায়ে ক্যালসিয়াম বা ভিটামিন ডি-এর ঘাটতি হলে তা পরবর্তীতে আর পূরণ করা সম্ভব হয় না [৩]।"
                  },
                  {
                        "en": "At the geriatric terminus of the continuum, nutritional strategy transitions from supporting structural expansion to safeguarding functional independence and somatic resilience [2, 4, 5]. Age-related gastric parietal cell atrophy, blunted sensory perception, and chronic low-grade inflammation synergize to impair nutrient assimilation while accelerating muscle catabolism [2, 5]. Clinicians must proactively identify early growth faltering in the young and progressive sarcopenic frailty in the aged, applying evidence-based medical nutrition therapy tailored to each critical window across the human lifespan [1, 2, 5].",
                        "bn": "জীবনের শেষ প্রান্তে এসে পুষ্টির মূল লক্ষ্য রূপায়িত হয় শারীরিক সক্ষমতা বজায় রাখা এবং বার্ধক্যের দুর্বলতা প্রতিরোধে [২, ৪, ৫]। পাকস্থলীর প্যারাইটাল কোষের ক্ষয়, অ্যাসিডস্বল্পতা, স্বাদের অনুভূতি হ্রাস এবং দীর্ঘস্থায়ী প্রদাহ প্রবীণদের পুষ্টি শোষণ কমিয়ে দেয় এবং পেশিক্ষয় ত্বরান্বিত করে [২, ৫]। তাই চিকিৎসকদের শৈশবে বৃদ্ধির স্থবিরতা যেমন দ্রুত শনাক্ত করতে হবে, তেমনি বার্ধক্যে সারকোপেনিয়া বা পেশিক্ষয় রোধে উপযুক্ত পুষ্টি নিশ্চিত করতে হবে, যা জীবনের প্রতিটি পর্যায়ে সুস্থ থাকার মূল চাবিকাঠি [১, ২, ৫]।"
                  }
            ]
      }
],
    },
    academic: {
      label: l('Academic · Physiological & Clinical Mechanisms', 'একাডেমিক · শারীরবৃত্তীয় ও ক্লিনিক্যাল প্রক্রিয়া'),
      sections: [
      {
            "id": "introduction",
            "heading": {
                  "en": "Neurodevelopmental Nutrient Accretion: DHA, Choline, Iron & Iodine in Synaptogenesis",
                  "bn": "শিশুর স্নায়বিক বিকাশ ও পুষ্টির ভূমিকা: সিন্যাপ্টোজেনেসিস ও মায়েলিনেশনে ডিএইচএ, কোলিন, আয়রন ও আয়োডিন"
            },
            "paragraphs": [
                  {
                        "en": "The human central nervous system experiences an unprecedented rate of structural growth and organizational remodeling during the first 1,000 days of life, expanding from roughly 25% of adult brain volume at birth to approximately 80% by age three [1, 6]. This neurodevelopmental surge is biologically underpinned by rapid neuronal migration, dendritic arborization, axogenesis, and trillions of synaptogenetic connections, accompanied by the onset of cerebral white matter myelination [1, 6]. Because the infant brain accounts for up to 60% of total resting metabolic energy expenditure, adequate provision of specialized structural lipids and enzymatic micronutrient cofactors is mandatory to prevent permanent neuroarchitectural anomalies [1, 6].",
                        "bn": "জীবনের প্রথম ১,০০০ দিনে মানবদেহের কেন্দ্রীয় স্নায়ুতন্ত্র এক অভাবনীয় গতিতে বৃদ্ধি ও কাঠামোগত রূপান্তর লাভ করে; জন্মের সময় যা প্রাপ্তবয়স্ক মস্তিষ্কের আকারের ২৫% থাকে, তিন বছর বয়সেই তা প্রায় ৮০%-এ পৌঁছায় [১, ৬]। এই দ্রুত স্নায়বিক বিকাশের পেছনে রয়েছে নিউরনের স্থানান্তরণ, ডেনড্রাইটের বিস্তৃতি, অ্যাক্সনের বৃদ্ধি এবং ট্রিলিয়ন ট্রিলিয়ন সিন্যাপ্স সংযোগ তৈরি, যার সাথে যুক্ত হয় মস্তিষ্কের শ্বেতবস্তুর মায়েলিনেশন বা আবরণ তৈরির কাজ [১, ৬]। যেহেতু একটি শিশুর মস্তিষ্ক তার মোট বিশ্রামরত বিপাকীয় শক্তির প্রায় ৬০% পর্যন্ত ব্যবহার করে, তাই নির্দিষ্ট কাঠামোগত চর্বি ও কো-এনজাইম খনিজের ঘাটতি হলে মস্তিষ্কের স্থায়ী ক্ষতি হতে পারে [১, ৬]।"
                  },
                  {
                        "en": "Docosahexaenoic acid (DHA, 22:6n-3), an unbranched 22-carbon omega-3 polyunsaturated fatty acid containing six cis double bonds, is the predominant structural lipid concentrated in neuronal synaptic membranes and retinal photoreceptor outer segments [1, 6]. DHA provides unmatched membrane fluidity and conformational flexibility required for the rapid activation of G-protein coupled receptors (such as rhodopsin) and the efficient fusion of synaptic vesicles carrying neurotransmitters [6]. While the human liver expresses the elongase and desaturase enzymes (FADS2, ELOVL2/5) needed to convert alpha-linolenic acid (ALA) to DHA, the fractional rate of hepatic synthesis in neonates is extremely low; consequently, preformed DHA delivered via maternal breast milk or infant formula is essential for optimal visual acuity and cognitive processing speed [1, 6].",
                        "bn": "ডোকোসাহেক্সায়েনয়িক অ্যাসিড (DHA, ২২:৬n-৩) হলো একটি ২২-কার্বনযুক্ত ওমেগা-৩ পলিআনস্যাচুরেটেড ফ্যাটি অ্যাসিড, যা স্নায়ুর সিন্যাপটিক ঝিল্লি এবং চোখের রেটিনার ফটোরিসেপ্টরে সর্বোচ্চ ঘনত্বে বিদ্যমান থাকে [১, ৬]। ডিএইচএ স্নায়ুকোষের ঝিল্লিকে অত্যন্ত নমনীয় ও তরল রাখে, যা জি-প্রোটিন রিসেপ্টর সক্রিয়করণ এবং নিউরোট্রান্সমিটারযুক্ত ভেসিকল নিঃসরণের জন্য অপরিহার্য [৬]। যদিও যকৃতে আলফা-লিনোলেনিক অ্যাসিড (ALA) থেকে ডিএইচএ তৈরির এনজাইম থাকে, নবজাতকদের মধ্যে এই রূপান্তরের গতি অত্যন্ত ধীর; ফলে মায়ের দুধ বা উন্নত ফর্মুলা থেকে সরাসরি ডিএইচএ গ্রহণ শিশুর দৃষ্টিশক্তি ও বুদ্ধিমত্তার বিকাশের জন্য অনস্বীকার্য [১, ৬]।"
                  },
                  {
                        "en": "Simultaneously, choline serves as a crucial methyl donor and architectural precursor for phosphatidylcholine and sphingomyelin synthesis [1, 6]. Phosphatidylcholine constitutes over 40% of cellular membrane phospholipids, while sphingomyelin forms the multilamellar lipid sheath wrapped by oligodendrocytes around axonal fibers to enable rapid saltatory nerve conduction [6]. Furthermore, choline is enzymatically acetylated by choline acetyltransferase (ChAT) into the classical neurotransmitter acetylcholine, which orchestrates hippocampal synaptic plasticity, spatial learning, and long-term memory encoding [6]. Choline also feeds the hepatic methionine-homocysteine cycle via betaine-homocysteine S-methyltransferase (BHMT), supporting the global DNA and histone methylation cascades that establish epigenetic programming in developing neural circuits [6].",
                        "bn": "একই সাথে কোলিন একটি অত্যন্ত গুরুত্বপূর্ণ মিথাইল দাতা এবং ফসফ্যাটিডাইলকোলিন ও স্ফিংগোমায়েলিন তৈরির কাঁচামাল হিসেবে কাজ করে [১, ৬]। ফসফ্যাটিডাইলকোলিন কোষের ঝিল্লির ৪০% এর বেশি লিপিড গঠন করে, আর স্ফিংগোমায়েলিন অলিগোডেনড্রোসাইট কোষ দ্বারা স্নায়ুর চারপাশে মায়েলিন আবরণ তৈরি করে যা দ্রুত স্নায়ু সংকেত পরিবহনে সাহায্য করে [৬]। অধিকন্তু, কোলিন থেকে কোলিন অ্যাসিটাইলট্রান্সফারেজ এনজাইমের মাধ্যমে অ্যাসিটাইলকোলিন নিউরোট্রান্সমিটার উৎপন্ন হয়, যা মস্তিষ্কের হিপোক্যাম্পাসে স্মৃতি সংরক্ষণ ও শেখার ক্ষমতা পরিচালনা করে [৬]। কোলিন বেটেইন হিসেবে রূপান্তরের মাধ্যমে ডিএনএ মিথাইলেশনে অংশ নেয় এবং বিকাশমান মস্তিষ্কের এপিজেনেটিক নিয়ন্ত্রণ বজায় রাখে [৬]।"
                  },
                  {
                        "en": "Microscopic brain development also depends stringently upon catalytic micronutrient cofactors, most prominently elemental iron and iodine [1, 6]. Iron functions as an indispensable prosthetic cofactor for ribonucleotide reductase (cell division) and cytochrome c oxidase (mitochondrial oxidative phosphorylation), while also binding directly to the active site of fatty acid desaturases required for myelin lipid synthesis in oligodendrocytes [6]. In the hippocampus, iron deficiency selectively blunts dopamine D2 receptor signaling and alters dendritic branching, inducing cognitive deficits that persist even after systemic hematological repletion [1, 6]. Concurrently, iodine is obligate for the thyroidal iodination of thyroglobulin, generating thyroxine (T4) and triiodothyronine (T3); neuronal deiodinase type 2 (DIO2) converts T4 to T3 within glial cells, directly binding nuclear thyroid hormone receptors (TR-alpha/beta) to drive the genetic transcription programs governing neocortical cytoarchitecture and cochlear development [1, 6].",
                        "bn": "মস্তিষ্কের সূক্ষ্ম বিকাশ অনুঘটক খনিজ উপাদান, বিশেষ করে আয়রন ও আয়োডিনের ওপর অত্যন্ত নির্ভরশীল [১, ৬]। আয়রন কোষ বিভাজনের রিবোনিউক্লিওটাইড রিডাক্টেজ এবং কোষীয় শ্বসনের সাইটোক্রোম সি অক্সিডেজের কো-ফ্যাক্টর হিসেবে কাজ করে; উপরন্তু এটি অলিগোডেনড্রোসাইটে মায়েলিন লিপিড তৈরির এনজাইম সক্রিয় রাখে [৬]। হিপোক্যাম্পাসে আয়রনের ঘাটতি হলে ডোপামিন ডি২ রিসেপ্টরের কার্যক্ষমতা কমে যায়, যা পরবর্তীতে রক্তাল্পতা দূর করার পরেও আচরণগত ও স্মৃতিশক্তির স্থায়ী ঘাটতি হিসেবে থেকে যেতে পারে [১, ৬]। একই সাথে আয়োডিন থাইরয়েড হরমোন (T4 ও T3) তৈরিতে অপরিহার্য; মস্তিষ্কে T3 হরমোন নিউক্লিয়ার রিসেপ্টরে যুক্ত হয়ে সেরিব্রাল কর্টেক্সের কোষীয় কাঠামো ও শ্রবণশক্তির জিনগত প্রকাশ নিয়ন্ত্রণ করে [১, ৬]।"
                  }
            ]
      },
      {
            "id": "structure",
            "heading": {
                  "en": "Adolescent Peak Bone Mass Accretion: Osteoblast-Osteoclast Remodeling & Mineral Accretion",
                  "bn": "কৈশোরে সর্বোচ্চ অস্থি ঘনত্ব সঞ্চয়: অস্টিওব্লাস্ট-অস্টিওক্লাস্ট রিমডেলিং ও খনিজায়ন প্রক্রিয়া"
            },
            "paragraphs": [
                  {
                        "en": "Peak bone mass (PBM), defined as the maximum amount of bone mineral tissue accrued across the human skeleton at the cessation of linear growth, represents the single most powerful predictor of lifetime osteoporotic fracture risk [3]. Longitudinal dual-energy X-ray absorptiometry (DXA) studies establish that nearly 90% of total adult skeletal mineral content is deposited by age eighteen in biological females and by age twenty in biological males, with up to 40% of the entire adult skeleton synthesized exclusively during the four-year pubertal growth window (Tanner stages 2 to 4) [3]. The mechanical strength of mature bone is determined by its macro-geometry, cortical thickness, trabecular volumetric bone mineral density (vBMD), and the degree of secondary mineralization within its type I collagen matrix [3].",
                        "bn": "পিক বোন মাস (PBM) বা সর্বোচ্চ অস্থি ঘনত্ব হলো কঙ্কালের বৃদ্ধির সমাপ্তিতে অর্জিত অস্থির খনিজের সর্বোচ্চ পরিমাণ, যা প্রাপ্তবয়স্ক জীবনে অস্টিওপোরোসিস এবং অস্থিভাঙার ঝুঁকি প্রতিরোধের প্রধান নির্ধারক [৩]। ডেডিকেটেড ডিএক্সএ (DXA) পরীক্ষার মাধ্যমে প্রমাণিত হয়েছে যে প্রাপ্তবয়স্ক জীবনের প্রায় ৯০% অস্থি খনিজ মেয়েদের ক্ষেত্রে ১৮ বছর এবং ছেলেদের ক্ষেত্রে ২০ বছর বয়সের মধ্যে সঞ্চিত হয়; এর মধ্যে প্রায় ৪০% সঞ্চয় ঘটে বয়ঃসন্ধির মাত্র চার বছরের মধ্যে (ট্যানার পর্যায় ২ থেকে ৪) [৩]। একটি অস্থির যান্ত্রিক শক্তি নির্ভর করে তার বাহ্যিক কাঠামো, কর্টিকাল আবরণের পুরুত্ব, ট্র্যাবেকুলার খনিজের ঘনত্ব এবং টাইপ-১ কোলাজেন ম্যাট্রিক্সের সঠিক খনিজায়নের ওপর [৩]।"
                  },
                  {
                        "en": "The cellular engine driving pubertal skeletal expansion is the coordinated remodeling balance between mesenchymal-derived osteoblasts and hematopoietic-derived osteoclasts [3]. Under the systemic influence of rising pulsatile growth hormone and sex steroids, chondrocytes in the epiphyseal growth plate proliferate and hypertrophy, depositing an unmineralized cartilaginous scaffold [3]. Osteoclasts, stimulated by the receptor activator of nuclear factor-kappa B ligand (RANKL) expressed on stromal cells, resorb the calcified cartilage core, while osteoblasts synthesize and secrete osteoid—a matrix composed of 90% type I collagen alongside non-collagenous proteins like osteocalcin and osteopontin [3]. Mineralization proceeds through matrix vesicles that concentrate ionized calcium and inorganic phosphate, nucleating hydroxyapatite crystals [Ca10(PO4)6(OH)2] within the gap regions of parallel collagen fibrils [3].",
                        "bn": "কৈশোরের অস্থি বিকাশের মূল চালিকাশক্তি হলো অস্টিওব্লাস্ট (অস্থি গঠনকারী কোষ) এবং অস্টিওক্লাস্টের (অস্থি ভাঙনকারী কোষ) মধ্যকার সুষম সমন্বয় [৩]। গ্রোথ হরমোন এবং যৌন হরমোনের প্রভাবে বৃদ্ধির প্রান্তে তরুণাস্থি কোষ বিভাজিত হয়ে একটি প্রাথমিক কাঠামো তৈরি করে [৩]। এরপর অস্টিওক্লাস্ট কোষ সেই তরুণাস্থি সরিয়ে জায়গা করে দেয়, এবং অস্টিওব্লাস্ট কোষ সেখানে অস্টিঅয়েড ম্যাট্রিক্স ক্ষরণ করে যা প্রধানত টাইপ-১ কোলাজেন, অস্টিওক্যালসিন ও অস্টিওপন্টিন দ্বারা গঠিত [৩]। এরপর কোলাজেনের ফাঁকে ক্যালসিয়াম ও ফসফেট জমে হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক [Ca10(PO4)6(OH)2] তৈরি করে, যা নরম অস্টিঅয়েডকে শক্ত ও মজবুত অস্থিতে রূপান্তর করে [৩]।"
                  },
                  {
                        "en": "The stoichiometry of hydroxyapatite crystallization demands high concurrent intakes of bioavailable dietary calcium and inorganic phosphorus [3]. During peak height velocity, daily skeletal calcium retention exceeds 350 to 400 mg per day in males and 300 to 350 mg per day in females, requiring an elemental calcium intake of 1,300 mg per day to compensate for fractional intestinal absorption efficiency (typically 30-38%) and mandatory urinary and dermal losses [3]. This intestinal absorption depends stringently on 1,25-dihydroxyvitamin D3 [1,25(OH)2D3], which binds the intracellular vitamin D receptor (VDR) in enterocytes to upregulate transcription of apical calcium channels (TRPV6), intracellular buffering proteins (calbindin-D9k), and basolateral extrusion pumps (PMCA1b) [3]. Severe dietary calcium or vitamin D insufficiency during this phase causes defective secondary mineralization, resulting in fragile, under-mineralized osteoid and irreversible reduction in peak bone strength [3].",
                        "bn": "হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক গঠনের রাসায়নিক অনুপাতের জন্য প্রচুর পরিমাণে ক্যালসিয়াম এবং অজৈব ফসফরাস খাদ্যে থাকা আবশ্যক [৩]। দ্রুত বৃদ্ধির সময় প্রতিদিন কঙ্কালে ৩৫০ থেকে ৪০০ মিলিগ্রাম ক্যালসিয়াম জমা হয়; অন্ত্রে ক্যালসিয়ামের স্বাভাবিক শোষণ ক্ষমতা (৩০-৩৮%) এবং প্রস্রাবের ক্ষতি বিবেচনা করে কিশোরদের দৈনিক ১,৩০০ মিলিগ্রাম খাদ্যতালিকাগত ক্যালসিয়াম গ্রহণের সুপারিশ করা হয় [৩]। এই শোষণ সম্পূর্ণরূপে সক্রিয় ভিটামিন ডি [1,25(OH)2D3]-এর ওপর নির্ভরশীল, যা এন্টারোসাইটের VDR রিসেপ্টরে যুক্ত হয়ে ক্যালসিয়াম চ্যানেল (TRPV6) এবং ক্যালবাইন্ডিন প্রোটিন বাড়িয়ে অন্ত্র থেকে রক্তে ক্যালসিয়াম পরিবহন নিশ্চিত করে [৩]। এই সময় ক্যালসিয়াম বা ভিটামিন ডি-এর ঘাটতি হলে অস্থি নরম থেকে যায় এবং আজীবনের জন্য অস্থির সর্বোচ্চ শক্তি অর্জনের সুযোগ নষ্ট হয় [৩]।"
                  },
                  {
                        "en": "In addition to biochemical substrate availability, mechanical strain and local mechanotransduction dictate the architectural distribution of bone mineral accretion [3]. Osteocytes, the terminal differentiation state of osteoblasts embedded within mineralized lacunar-canalicular networks, function as the primary mechanosensors of the skeleton [3]. Fluid shear stress generated by dynamic, high-impact weight-bearing exercise (jumping, sprinting, resistance loading) deforms osteocyte cellular membranes, suppressing local secretion of sclerostin (the product of the SOST gene) [3]. Reduced sclerostin derepresses the canonical Wnt/beta-catenin signaling cascade in adjacent osteoblasts, triggering robust osteoblast proliferation and targeted periosteal bone apposition [3]. Consequently, sedentary behavior during puberty impairs cortical geometry, whereas high-impact physical activity combined with adequate calcium-vitamin D nutrition dramatically elevates lifetime fracture resilience [3].",
                        "bn": "জৈব রাসায়নিক উপাদান ছাড়াও শারীরিক পরিশ্রম এবং মেকানিক্যাল চাপ অস্থির খনিজ সঞ্চয়ের সঠিক বিন্যাস নির্ধারণ করে [৩]। ক্যালসিফাইড অস্থির ভেতরে অবস্থানরত অস্টিওসাইট কোষগুলো কঙ্কালের প্রধান মেকানোসেন্সর বা চাপ অনুধাবনকারী হিসেবে কাজ করে [৩]। দৌড়ঝাঁপ এবং ভারবহনকারী ব্যায়ামের ফলে অস্থির ভেতরে তরলের যে চাপ তৈরি হয়, তা অস্টিওসাইট কোষকে স্ক্লেরোস্টিন (sclerostin) নামক প্রোটিন ক্ষরণ কমাতে বাধ্য করে [৩]। স্ক্লেরোস্টিন কমে গেলে অস্টিওব্লাস্ট কোষে Wnt/beta-catenin সংকেত সক্রিয় হয়, যা দ্রুত নতুন অস্থি গঠন এবং কর্টেক্সের প্রাচীর পুরু করতে সাহায্য করে [৩]। তাই বয়ঃসন্ধিকালে অলস বসে থাকলে অস্থির গঠন দুর্বল হয়, পক্ষান্তরে খেলাধুলার সাথে পর্যাপ্ত ক্যালসিয়াম ও ভিটামিন ডি গ্রহণ আজীবন হাড়ের শক্তি নিশ্চিত করে [৩]।"
                  }
            ]
      },
      {
            "id": "mechanism",
            "heading": {
                  "en": "Sarcopenia Pathogenesis: Motor Unit Denervation, Mitochondrial Decay & Anabolic Resistance",
                  "bn": "সারকোপেনিয়ার প্যাথোজেনেসিস: মোটর ইউনিট অবক্ষয়, মাইটোকন্ড্রিয়াল ক্ষতি ও অ্যানাবলিক রেজিস্ট্যান্স"
            },
            "paragraphs": [
                  {
                        "en": "Sarcopenia, formally recognized as an ICD-10 clinical disease entity (M62.84), is defined by the progressive and generalized loss of skeletal muscle mass, intrinsic muscle strength, and functional physical performance with advancing age [2, 4]. Beginning around the fourth decade of life, humans lose approximately 1% of muscle mass and 2% to 3% of muscle force per year, a rate that accelerates dramatically after the age of sixty-five [2, 4]. At the macroscopic level, this catabolic trajectory manifests as profound atrophy and selective apoptotic loss of fast-twitch Type II (glycolytic) muscle fibers, accompanied by chronic fibro-adipose infiltration within the epimysium, perimysium, and intramyocellular compartments [2, 4].",
                        "bn": "সারকোপেনিয়া (Sarcopenia) হলো বয়স বৃদ্ধির সাথে সাথে কঙ্কাল পেশির ভর, পেশিশক্তি এবং শারীরিক কর্মক্ষমতার একটি প্রগতিশীল ও মারাত্মক অবক্ষয়মূলক রোগ (ICD-10 কোড: M62.84) [২, ৪]। মানবদেহে সাধারণত চল্লিশ বছর বয়সের পর থেকে প্রতি বছর প্রায় ১% পেশি ভর এবং ২% থেকে ৩% পেশিশক্তি কমতে থাকে, যা ৬৫ বছর বয়সের পর মারাত্মকভাবে বৃদ্ধি পায় [২, ৪]। আণুবীক্ষণিক স্তরে এই অবক্ষয়ের ফলে দ্রুত সংকোচনশীল টাইপ-২ (Type II) পেশিতন্তু শুকিয়ে যায় এবং কোষের মৃত্যু ঘটে, যার স্থান দখল করে নেয় সংযোজক কলা এবং আন্তঃপেশীয় চর্বির স্তর (myosteatosis) [২, ৪]।"
                  },
                  {
                        "en": "At the cellular and neuroanatomical level, motor unit remodeling represents an irreversible trigger of sarcopenic muscle loss [2, 4]. With biological senescence, alpha-motor neurons within the anterior horn of the spinal cord undergo progressive apoptotic degeneration, leading to the denervation of entire motor units [2]. While remaining slow-twitch Type I motor neurons can sprout collateral axons to reinnervate orphaned fibers, this compensatory process creates enlarged, homogenous Type I motor units that exhibit blunted contraction velocity, impaired rate of force development (RFD), and reduced contractile precision [2, 4]. Fibers that escape reinnervation undergo irreversible atrophy and programmed cellular death, permanently diminishing the functional motor pool [2].",
                        "bn": "কোষীয় ও স্নায়বিক স্তরে মোটর ইউনিটের অবক্ষয় সারকোপেনিয়া সৃষ্টির অন্যতম প্রধান অপরিবর্তনীয় কারণ [২, ৪]। বয়স বাড়ার সাথে সাথে মেরুদণ্ডের অ্যান্টিরিয়র হর্নে অবস্থিত আলফা-মোটর নিউরনগুলোর স্বাভাবিক মৃত্যু ঘটে, যার ফলে সম্পূর্ণ মোটর ইউনিটগুলো স্নায়ুহীন বা ডিনারভেটেড হয়ে পড়ে [২]। যদিও পাশের টাইপ-১ নিউরনগুলো কিছু তন্তুকে পুনর্সংযোগ দেয়, এর ফলে পেশির সংকোচন গতি কমে যায় এবং দ্রুত বল প্রয়োগের ক্ষমতা নষ্ট হয় [২, ৪]। যেসব পেশিতন্তু পুনরায় স্নায়ু সংযোগ পায় না, সেগুলো স্থায়ীভাবে ক্ষয়প্রাপ্ত হয়ে ধ্বংস হয়ে যায়, যা পেশির সামগ্রিক শক্তিকে চিরতরে কমিয়ে দেয় [২]।"
                  },
                  {
                        "en": "Concurrently, progressive mitochondrial dysfunction and oxidative macromolecular damage within aging myocytes undermine bioenergetic survival [2, 4]. Senescent myocytes exhibit marked reductions in mitochondrial biogenesis—driven by declining expression of peroxisome proliferator-activated receptor gamma coactivator 1-alpha (PGC-1alpha)—alongside impaired mitochondrial clearance via selective autophagy (mitophagy) [2]. The accumulation of morphologically abnormal, uncoupled mitochondria elevates the basal leakage of reactive oxygen species (ROS) from respiratory electron transport chain complexes I and III, oxidizing structural proteins (actin, myosin heavy chain) and triggering the persistent opening of the mitochondrial permeability transition pore (mPTP) [2, 4]. This bioenergetic collapse limits intracellular ATP availability for actin-myosin cross-bridge cycling and activates caspase-dependent proteolytic cascades [2].",
                        "bn": "একই সাথে বয়স্ক পেশিকোষের মাইটোকন্ড্রিয়াল দুর্বলতা এবং মুক্ত মূলক (ROS) দ্বারা কোষীয় উপাদানের জারণ পেশির বেঁচে থাকাকে হুমকির মুখে ফেলে [২, ৪]। বার্ধক্যে PGC-1alpha প্রোটিনের ঘাটতির কারণে নতুন মাইটোকন্ড্রিয়া তৈরি বাধাগ্রস্ত হয় এবং নষ্ট মাইটোকন্ড্রিয়া অপসারণের মাইটোফ্যাজি (mitophagy) প্রক্রিয়া ব্যাহত হয় [২]। এর ফলে শ্বাসতন্ত্রের ইলেকট্রন ট্রান্সপোর্ট চেইনের ১ ও ৩ নম্বর কমপ্লেক্স থেকে অতিরিক্ত রিয়্যাক্টিভ অক্সিজেন স্পিসিজ (ROS) নির্গত হয়ে মায়োসিন ও অ্যাক্টিন প্রোটিনকে জারিত করে ধ্বংস করে [২, ৪]। এটি পেশিকোষে এটিপি (ATP) শক্তির ঘাটতি তৈরি করে এবং ক্যাসপেজ এনজাইমের মাধ্যমে পেশির গঠনমূলক প্রোটিন ভেঙে ফেলে [২]।"
                  },
                  {
                        "en": "The biochemical hallmark of sarcopenic muscle is \"anabolic resistance,\" defined as the attenuated sensitivity of muscle protein synthesis (MPS) to hyperaminoacidemia and hyperinsulinemia following food ingestion [2, 4, 5]. In young muscle, circulating postprandial essential amino acids (specifically L-leucine) bind the intracellular amino acid sensor Sestrin2, releasing GATOR2 to activate the Rag GTPases that recruit the mechanistic target of rapamycin complex 1 (mTORC1) to the lysosomal membrane [4]. Activated mTORC1 phosphorylates p70S6 kinase (p70S6K1) and eukaryotic translation initiation factor 4E-binding protein 1 (4E-BP1), initiating ribosome biogenesis and mRNA translation of new contractile myofibrils [4]. In aging muscle, chronic low-grade systemic inflammation (elevated IL-6, TNF-alpha) and intramuscular lipid accumulation impair downstream insulin receptor substrate (IRS-1/Akt) signaling, raising the minimum concentration threshold of extracellular leucine required to trigger mTORC1 activation [4, 5].",
                        "bn": "সারকোপেনিয়ার মূল জৈব রাসায়নিক বৈশিষ্ট্য হলো \"অ্যানাবলিক রেজিস্ট্যান্স\" (Anabolic Resistance), অর্থাৎ খাদ্য গ্রহণের পর রক্তে অ্যামিনো অ্যাসিড ও ইনসুলিন বৃদ্ধি পেলেও প্রবীণদের পেশিতে নতুন প্রোটিন তৈরির গতি (MPS) তরুণদের মতো সক্রিয় হয় না [২, ৪, ৫]। তরুণদের ক্ষেত্রে লিউসিন গ্রহণ করলে তা সেস্ট্রিন-২ (Sestrin2) সেন্সরে যুক্ত হয়ে mTORC1 প্রোটিন কিনেসকে সক্রিয় করে, যা p70S6K এবং 4E-BP1 ফসফোরাইলেশনের মাধ্যমে দ্রুত নতুন মায়োফাইব্রিল প্রোটিন তৈরি করে [৪]। কিন্তু বয়স্কদের শরীরে দীর্ঘস্থায়ী প্রদাহ (উচ্চ IL-6 ও TNF-alpha) এবং পেশির ভেতরে জমে থাকা লিপিডের কারণে ইনসুলিন সংকেত বাধাগ্রস্ত হয়; ফলে mTORC1 সক্রিয় করতে তরুণদের তুলনায় অনেক বেশি ঘনত্বের লিউসিন ও প্রোটিনের প্রয়োজন হয় [৪, ৫]।"
                  }
            ]
      },
      {
            "id": "integration",
            "heading": {
                  "en": "Atrophic Gastritis, Achlorhydria & the Cobalamin-Folate-Homocysteine Axis in Aging",
                  "bn": "প্রবীণদের অ্যাট্রোফিক গ্যাস্ট্রাইটিস, অ্যাসিডস্বল্পতা এবং কোবালামিন-ফোলেট-হোমোসিস্টাইন চক্রের ব্যাঘাত"
            },
            "paragraphs": [
                  {
                        "en": "In older adults, degenerative alterations in gastric histology directly derange systemic one-carbon metabolism, linking gastrointestinal senescence to neurovascular and hematological morbidity [4, 5]. Chronic atrophic gastritis affects between 15% and 30% of adults over the age of sixty-five, progressing from patchy superficial inflammation to diffuse atrophy of the acid-secreting fundic and corpus mucosa [5]. The replacement of specialized parietal cells with fibrous connective tissue or metaplastic intestinal epithelium induces profound achlorhydria, permanently abolishing the luminal low-pH environment necessary to activate pepsinogen into pepsin [4, 5].",
                        "bn": "প্রবীণদের পাকস্থলীর কাঠামোগত অবক্ষয় সরাসরি এক-কার্বন বিপাককে (One-carbon metabolism) ব্যাহত করে, যা পরিপাকতন্ত্রের বার্ধক্যের সাথে স্নায়বিক ও কার্ডিওভাসকুলার রোগের সংযোগ ঘটায় [৪, ৫]। ৬৫ বছরের বেশি বয়সী প্রবীণদের প্রায় ১৫% থেকে ৩০% ক্রনিক অ্যাট্রোফিক গ্যাস্ট্রাইটিসে আক্রান্ত হন, যেখানে অম্লক্ষরণকারী প্যারাইটাল কোষগুলো নষ্ট হয়ে ফাইব্রাস টিস্যুতে রূপান্তরিত হয় [৫]। এর ফলে পাকস্থলীতে অ্যাসিড নিঃসরণ প্রায় বন্ধ হয়ে যায় (অ্যাক্লোরহাইড্রিয়া), যার দরুন পেপসিনোজেন সক্রিয় পেপসিন এনজাইমে রূপান্তরিত হতে পারে না [৪, ৫]।"
                  },
                  {
                        "en": "The biochemical consequence of food-cobalamin malabsorption (FCM) is the selective failure to liberate dietary vitamin B12 from animal proteins [4, 5]. In a healthy stomach, gastric acid and pepsin hydrolyze meat and dairy proteins, releasing free cyanocobalamin/hydroxocobalamin, which immediately binds to salivary haptocorrin (R-binder) in the acidic milieu [4]. In the duodenum, pancreatic proteases degrade haptocorrin, allowing free cobalamin to bind gastric intrinsic factor for downstream ileal receptor-mediated endocytosis [4]. In the achlorhydric elderly patient, the intact food-protein-cobalamin complex passes undigested into the colon, while crystalline synthetic vitamin B12 remains readily absorbable because it requires neither acid nor pepsin for initial liberation [4, 5].",
                        "bn": "এই অ্যাসিডস্বল্পতার প্রত্যক্ষ পরিণতি হলো খাদ্য-কোবালামিন শোষণহীনতা (Food-Cobalamin Malabsorption বা FCM), অর্থাৎ খাদ্যের প্রোটিনের সাথে যুক্ত ভিটামিন বি১২ মুক্ত হতে পারে না [৪, ৫]। সুস্থ পাকস্থলীতে অ্যাসিড ও পেপসিন মাংস বা ডিমের প্রোটিন ভেঙে ভিটামিন বি১২ মুক্ত করে, যা প্রথমে হ্যাপ্টোকরিন এবং পরবর্তীতে ডিওডেনামে ইনট্রিনসিক ফ্যাক্টরের সাথে যুক্ত হয়ে ইলিয়ামে শোষিত হয় [৪]। কিন্তু বয়স্কদের পাকস্থলীতে অ্যাসিডের অভাবে এই বন্ধন খোলে না এবং ভিটামিন বি১২ অপাচ্য অবস্থায় বৃহদন্ত্রে চলে যায়; তবে সিন্থেটিক বা ওষুধ আকারে মুক্ত ভিটামিন বি১২ দিলে তা অ্যাসিড ছাড়াই সহজে শোষিত হতে পারে [৪, ৫]।"
                  },
                  {
                        "en": "Systemic cobalamin deficiency precipitates the classic \"methyl-folate trap\" by inactivating the cytosolic enzyme methionine synthase (MTR) [4]. Methionine synthase requires methylcobalamin as an intermediate methyl carrier to transfer a methyl group from 5-methyltetrahydrofolate (5-methyl-THF) to homocysteine, generating methionine and regenerating free tetrahydrofolate (THF) [4]. When cobalamin is deficient, cellular folate becomes trapped irreversibly in the 5-methyl-THF form, starving downstream enzymes of the THF required for purine and thymidylate synthesis, which induces megaloblastic erythroid maturation arrest [4]. Simultaneously, homocysteine accumulates to neurotoxic and vasotoxic concentrations, promoting endothelial dysfunction, vascular oxidative stress, and increased risk for thrombotic cerebrovascular disease [4, 5].",
                        "bn": "রক্তে ভিটামিন বি১২-এর ঘাটতি হলে তা মেথিওনিন সিন্থেজ (MTR) এনজাইমকে নিষ্ক্রিয় করে বিখ্যাত \"মিথাইল-ফোলেট ট্র্যাপ\" তৈরি করে [৪]। মেথিওনিন সিন্থেজ এনজাইম ৫-মিথাইল-টিএইচএফ (5-methyl-THF) থেকে মিথাইল গ্রুপ গ্রহণ করে হোমোসিস্টাইনকে মেথিওনিনে রূপান্তর করতে ভিটামিন বি১২-কে কো-ফ্যাক্টর হিসেবে ব্যবহার করে [৪]। বি১২-এর অভাবে কোষের সমস্ত ফোলেট ৫-মিথাইল আকারে আটকে যায়, ফলে ডিএনএ সংশ্লেষণের জন্য প্রয়োজনীয় সাধারণ ফোলেট তৈরি হয় না; এর ফলে অস্থিমজ্জায় রক্তকণিকা বড় হয়ে মেগালোব্লাস্টিক রক্তস্বল্পতা দেখা দেয় [৪]। একই সাথে বিষাক্ত হোমোসিস্টাইনের মাত্রা বেড়ে রক্তনালীর ক্ষতি করে এবং ব্রেন স্ট্রোক ও ডিমেনশিয়ার ঝুঁকি বহুগুণ বৃদ্ধি করে [৪, ৫]।"
                  },
                  {
                        "en": "Furthermore, the failure of mitochondrial methylmalonyl-CoA mutase (MUT)—an adenosylcobalamin-dependent enzyme—leads to the systemic accumulation of methylmalonic acid (MMA) [4]. Elevated MMA disrupts neuronal myelin integrity by interfering with fatty acid elongation and leading to the synthesis of branched, abnormal odd-chain fatty acids that incorporate into cerebral and spinal myelin sheaths [4]. In older adults, this neuropathology manifests as subacute combined degeneration of the spinal cord (SCD), progressive peripheral polyneuropathy, sensory ataxia, cognitive decline, and depression [4, 5]. Because standard serum vitamin B12 assays exhibit poor sensitivity in the elderly, clinical guidelines recommend screening symptomatic older adults using serum methylmalonic acid and total homocysteine biomarkers [4, 5].",
                        "bn": "উপরন্তু, মাইটোকন্ড্রিয়ায় অ্যাডেনোসিলকোবালামিন-নির্ভর মিথাইলম্যালোনাইল-কোএ মিউটেজ (MUT) এনজাইম বিকল হয়ে রক্তে মিথাইলম্যালোনিক অ্যাসিড (MMA) বৃদ্ধি পায় [৪]। অতিরিক্ত এমএমএ (MMA) স্নায়ুর মায়েলিন শোষণে ব্যাঘাত ঘটায় এবং অস্বাভাবিক চর্বি তৈরি করে যা মস্তিষ্কের ও স্পাইনাল কর্ডের মায়েলিন আবরণকে ধ্বংস করে দেয় [৪]। প্রবীণদের মধ্যে এর ফলে হাত-পায়ে অবশ ভাব, ভারসাম্যহীনতা (ataxia), স্মৃতিভ্রম এবং বিষণ্নতা দেখা দেয় [৪, ৫]। যেহেতু সাধারণ সিরাম বি১২ পরীক্ষা বয়স্কদের প্রকৃত টিস্যু ঘাটতি অনেক সময় সঠিকভাবে ধরতে পারে না, তাই নির্দেশিকা অনুযায়ী সিরাম মিথাইলম্যালোনিক অ্যাসিড এবং হোমোসিস্টাইন পরীক্ষার মাধ্যমে সঠিক রোগ নির্ণয় করা উচিত [৪, ৫]।"
                  }
            ]
      },
      {
            "id": "practice",
            "heading": {
                  "en": "Comprehensive Geriatric Nutrition Assessment: MNA-SF & EWGSOP2 Diagnostic Algorithms",
                  "bn": "প্রবীণদের সমন্বিত পুষ্টি মূল্যায়ন: এমএনএ-এসএফ ও ইডব্লিউজিএসওপি-২ সারকোপেনিয়া অ্যালগরিদম"
            },
            "paragraphs": [
                  {
                        "en": "Clinical evaluation of nutritional status and frailty in older adults requires standardized, validated geriatric assessment instruments designed to detect insidious functional decline before overt cachexia emerges [2, 5]. The Mini Nutritional Assessment Short-Form (MNA-SF) is the global gold standard for rapid clinical nutrition screening in ambulatory, institutionalized, and acute-care geriatric populations [5]. Comprising six validated domains—decline in food intake over the past three months, involuntary weight loss, mobility limitations, psychological stress or acute disease, neuropsychological problems (dementia/depression), and body mass index (or calf circumference)—the MNA-SF classifies patients into normal nutritional status (12-14 points), at risk of malnutrition (8-11 points), or malnourished (0-7 points) [5].",
                        "bn": "প্রবীণদের পুষ্টির অবস্থা ও শারীরিক দুর্বলতা মূল্যায়নের জন্য আন্তর্জাতিকভাবে স্বীকৃত ও বৈজ্ঞানিকভাবে প্রমাণিত টুলস ব্যবহার করা প্রয়োজন, যাতে মারাত্মক অপুষ্টি প্রকাশের আগেই প্রতিকার করা যায় [২, ৫]। মিনি নিউট্রিশনাল অ্যাসেসমেন্ট শর্ট-ফর্ম (MNA-SF) হলো প্রবীণদের পুষ্টি ঝুঁকি দ্রুত শনাক্তকরণের বিশ্বস্বীকৃত গোল্ড স্ট্যান্ডার্ড [৫]। এই টুলে ছয়টি মূল ক্ষেত্র মূল্যায়ন করা হয়—বিগত তিন মাসে খাদ্য গ্রহণ হ্রাস, অনিচ্ছাকৃত ওজন হ্রাস, চলাচলের সীমাবদ্ধতা, তীব্র রোগ বা মানসিক চাপ, স্নায়বিক বা স্মৃতিভ্রমের সমস্যা, এবং বিএমআই বা কাফ পরিধি; যার মাধ্যমে রোগীকে স্বাভাবিক (১২-১৪ পয়েন্ট), অপুষ্টির ঝুঁকিতে থাকা (৮-১১ পয়েন্ট) এবং অপুষ্টিতে আক্রান্ত (০-৭ পয়েন্ট) হিসেবে শ্রেণিবদ্ধ করা হয় [৫]।"
                  },
                  {
                        "en": "When malnutrition or muscle weakness is identified, clinicians execute the European Working Group on Sarcopenia in Older People revised consensus algorithm (EWGSOP2: Find-Assess-Confirm-Severity) [2]. The \"Find\" step utilizes the validated SARC-F screening questionnaire (evaluating strength, assistance in walking, rising from a chair, climbing stairs, and falls), where a score of four or higher triggers objective assessment [2]. The \"Assess\" step evaluates muscle strength, the primary indicator of sarcopenia; low handgrip strength measured by calibrated Jamar dynamometry (<27 kg in males, <16 kg in females) or an abnormal five-time chair stand test (>15 seconds) establishes the clinical diagnosis of \"probable sarcopenia,\" which mandates immediate dietary protein optimization and progressive resistance exercise [2, 4].",
                        "bn": "যখন কোনো প্রবীণের পেশির দুর্বলতা বা অপুষ্টি সন্দেহ হয়, চিকিৎসকরা ইউরোপীয় সারকোপেনিয়া বিশেষজ্ঞ দলের (EWGSOP2) অ্যালগরিদম অনুসরণ করেন [২]। প্রাথমিক ধাপে SARC-F প্রশ্নাবলীর মাধ্যমে শক্তি, হাঁটার ক্ষমতা, চেয়ার থেকে ওঠা, সিঁড়ি বাওয়া এবং পড়ে যাওয়ার ইতিহাস দেখে ঝুঁকি নির্ণয় করা হয় (স্কোর ৪ বা বেশি হলে) [২]। দ্বিতীয় ধাপে জামার ডায়নামোমিটার দিয়ে হাতের গ্রিপ শক্তি মাপা হয়; পুরুষদের ক্ষেত্রে ২৭ কেজির কম এবং নারীদের ক্ষেত্রে ১৬ কেজির কম হলে, অথবা পাঁচবার চেয়ার থেকে উঠতে ১৫ সেকেন্ডের বেশি সময় লাগলে তাকে \"সম্ভাব্য সারকোপেনিয়া\" (Probable Sarcopenia) হিসেবে চিহ্নিত করে অবিলম্বে পুষ্টি ও ব্যায়াম থেরাপি শুরু করা হয় [২, ৪]।"
                  },
                  {
                        "en": "The \"Confirm\" step in the EWGSOP2 algorithm requires objective quantification of skeletal muscle mass and microstructural quality [2]. Appendicular lean mass (ALM)—the summed fat-free soft tissue mass of the upper and lower extremities—is determined using dual-energy X-ray absorptiometry (DXA) or multi-frequency bioelectrical impedance analysis (BIA) [2]. Sarcopenia is confirmed when height-adjusted appendicular lean mass (ALM/height^2) falls below 7.0 kg/m^2 in males or below 5.5 kg/m^2 in females, or when absolute ALM is below 20 kg in males and 15 kg in females [2]. In advanced clinical research settings, mid-thigh computed tomography (CT) or magnetic resonance imaging (MRI) quantifies myosteatosis, measuring the low-attenuation muscle area that reflects pathological inter- and intramyocellular lipid infiltration [2, 4].",
                        "bn": "EWGSOP2 অ্যালগরিদমের তৃতীয় নিশ্চিতকরণ ধাপে কঙ্কাল পেশির ভর সরাসরি পরিমাপ করা হয় [২]। ডিএক্সএ (DXA) বা বায়োইলেকট্রিক্যাল ইম্পিডেন্স অ্যানালাইসিস (BIA) ব্যবহার করে হাত ও পায়ের মোট পেশি ভর বা অ্যাপেন্ডিকুলার লিন মাস (ALM) নির্ণয় করা হয় [২]। উচ্চতা অনুযায়ী সমন্বিত পেশি ভর (ALM/height^2) পুরুষদের ক্ষেত্রে ৭.০ কেজি/বর্গমিটার এবং নারীদের ক্ষেত্রে ৫.৫ কেজি/বর্গমিটারের নিচে নামলে নিশ্চিত সারকোপেনিয়া হিসেবে রোগ নির্ণয় করা হয় [২]। উন্নত গবেষণাগারে সিটি স্ক্যান বা এমআরআই (MRI) দিয়ে উরুর পেশির ভেতরের চর্বির অনুপ্রবেশ (myosteatosis) পরীক্ষা করে পেশির সূক্ষ্ম গুণগত মান যাচাই করা হয় [২, ৪]।"
                  },
                  {
                        "en": "Finally, the \"Severity\" step evaluates functional physical performance to stratify mortality risk and guide rehabilitation intensity [2, 5]. Habitual gait speed measured over a four-meter distance is the most robust functional biomarker; a walking velocity below 0.8 meters per second indicates \"severe sarcopenia\" and predicts rapid functional dependency, institutionalization, and all-cause mortality [2]. Additional performance metrics include the Short Physical Performance Battery (SPPB, score <= 8 out of 12) and the Timed Up and Go (TUG, >= 20 seconds) test [2]. Patients diagnosed with severe sarcopenia require multimodal intervention combining targeted protein supplementation, resistance training, and systematic correction of hypovitaminosis D [2, 4, 5].",
                        "bn": "সর্বশেষ ধাপে রোগীর শারীরিক কর্মক্ষমতা বা কার্যক্ষমতা পরিমাপ করে সারকোপেনিয়ার তীব্রতা নির্ধারণ করা হয় [২, ৫]। চার মিটার দূরত্বের স্বাভাবিক হাঁটার গতি (Gait speed) পরিমাপ করা হয়; যদি হাঁটার গতি প্রতি সেকেন্ডে ০.৮ মিটারের কম হয়, তবে তাকে \"তীব্র সারকোপেনিয়া\" (Severe Sarcopenia) বলা হয় যা মৃত্যুঝুঁকি এবং অন্যের ওপর নির্ভরশীল হয়ে পড়ার স্পষ্ট সংকেত [২]। এছাড়াও শর্ট ফিজিক্যাল পারফরম্যান্স ব্যাটারি (SPPB) স্কোর ৮-এর কম হলে তা মারাত্মক শারীরিক অবক্ষয় নির্দেশ করে [২]। তীব্র সারকোপেনিয়ায় আক্রান্ত রোগীদের ক্ষেত্রে উচ্চ-মানের প্রোটিন, প্রতিরোধমূলক ব্যায়াম এবং ভিটামিন ডি ঘাটতি পূরণের একযোগে সমন্বিত থেরাপি পরিচালনা করা অত্যন্ত জরুরি [২, ৪, ৫]।"
                  }
            ]
      },
      {
            "id": "takeaways",
            "heading": {
                  "en": "Academic Summary: Molecular Signaling in Pediatric Growth vs. Geriatric Wasting",
                  "bn": "উচ্চতর পাঠ্যপুস্তকীয় সারসংক্ষেপ: বৃদ্ধির আণবিক সংকেত বনাম বার্ধক্যের অবক্ষয়মূলক প্রক্রিয়া"
            },
            "paragraphs": [
                  {
                        "en": "Academic exploration of lifespan nutrition uncovers a profound biochemical symmetry between the molecular mechanisms driving tissue accretion in the young and those failing during tissue maintenance in the elderly [1, 2]. Pediatric brain development during the first 1,000 days demands massive structural incorporation of docosahexaenoic acid (DHA) and choline into synaptic and axonal myelin membranes, catalyzed by iron-dependent hydroxylases and thyroid-hormone-driven transcription programs [1, 6]. Concurrently, adolescent skeletal maturation relies on the coordinated endocrine synergy of IGF-1, sex steroids, and calcitriol to drive osteoblastic osteoid deposition and calcium hydroxyapatite mineralization, cementing peak bone mass before third-decade epiphyseal fusion [3].",
                        "bn": "জীবনব্যাপী পুষ্টির গভীর বৈজ্ঞানিক পর্যালোচনা তরুণদের টিস্যু গঠনের আণবিক প্রক্রিয়া এবং প্রবীণদের টিস্যু সংরক্ষণে ব্যর্থতার মধ্যে একটি স্পষ্ট জৈব রাসায়নিক মিল ও বৈপরীত্য প্রকাশ করে [১, ২]। জীবনের প্রথম ১,০০০ দিনে মস্তিষ্কের বিকাশের জন্য সিন্যাপটিক ঝিল্লি ও মায়েলিনে প্রচুর ডিএইচএ এবং কোলিন সঞ্চয় প্রয়োজন, যা আয়রন-নির্ভর এনজাইম ও থাইরয়েড হরমোন দ্বারা পরিচালিত হয় [১, ৬]। একইভাবে কৈশোরের অস্থি বিকাশ IGF-1, যৌন হরমোন এবং সক্রিয় ভিটামিন ডি-এর সমন্বয়ে অস্টিওব্লাস্ট কোষের মাধ্যমে হাইড্রোক্সিঅ্যাপাটাইট স্ফটিক সঞ্চয় করে আজীবন ব্যবহারের জন্য সর্বোচ্চ অস্থি ঘনত্ব (Peak Bone Mass) নিশ্চিত করে [৩]।"
                  },
                  {
                        "en": "In contrast, biological aging systematically compromises nutrient liberation, organelle homeostasis, and anabolic intracellular signaling [2, 4, 5]. The progressive destruction of gastric parietal cells in chronic atrophic gastritis triggers achlorhydria and food-cobalamin malabsorption, precipitating the methyl-folate trap, hyperhomocysteinemia, and myelin-destabilizing methylmalonic acid accumulation [4, 5]. In skeletal muscle, alpha-motor unit denervation and mitochondrial electron transport uncoupling unleash oxidative stress that destabilizes myofibrillar integrity and activates the ubiquitin-proteasome and caspase degradation pathways [2, 4].",
                        "bn": "এর বিপরীতে, বার্ধক্য পরিপাকতন্ত্রে খাদ্য হজম, কোষীয় অঙ্গাণুর ভারসাম্য এবং প্রোটিন তৈরির সংকেতগুলোকে দুর্বল করে দেয় [২, ৪, ৫]। ক্রনিক অ্যাট্রোফিক গ্যাস্ট্রাইটিসে প্যারাইটাল কোষের ক্ষয় অ্যাসিডস্বল্পতা ও খাদ্য থেকে ভিটামিন বি১২ শোষণে ব্যর্থতা তৈরি করে, যা মিথাইল-ফোলেট ট্র্যাপ, অতিরিক্ত হোমোসিস্টাইন এবং বিষাক্ত মিথাইলম্যালোনিক অ্যাসিড জমার মাধ্যমে স্নায়ুর মায়েলিন ধ্বংস করে [৪, ৫]। কঙ্কাল পেশিতে মোটর ইউনিটের অবক্ষয় এবং মাইটোকন্ড্রিয়াল ত্রুটি মুক্ত মূলক (ROS) তৈরি করে পেশির সংকোচনশীল প্রোটিন ভেঙে দেয় [২, ৪]।"
                  },
                  {
                        "en": "The centerpiece of sarcopenic pathophysiology is anabolic resistance, a molecular blunting of the Sestrin2-mTORC1-p70S6K signaling cascade caused by chronic low-grade systemic inflammation and intramyocellular lipid accumulation [2, 4]. While a standard bolus of 15 to 20 grams of high-quality protein maximally stimulates muscle protein synthesis in a young adult, an older adult requires 30 to 40 grams containing at least 2.8 to 3.0 grams of leucine to surpass their heightened anabolic threshold [4, 5]. Overcoming anabolic resistance necessitates precision timing of protein pulses rich in branched-chain amino acids paired with mechanical loading [4, 5].",
                        "bn": "সারকোপেনিয়ার মূল কেন্দ্রবিন্দু হলো অ্যানাবলিক রেজিস্ট্যান্স, যেখানে দীর্ঘস্থায়ী মৃদু প্রদাহ ও পেশিতে জমে থাকা চর্বির কারণে Sestrin2-mTORC1 সংকেত পথটি ভোঁতা হয়ে পড়ে [২, ৪]। তরুণদের ক্ষেত্রে যেখানে মাত্র ১৫ থেকে ২০ গ্রাম প্রোটিন গ্রহণ করলেই পেশি সংশ্লেষ সর্বোচ্চ হয়, প্রবীণদের ক্ষেত্রে এই থ্রেশহোল্ড অতিক্রম করতে প্রতি বেলায় ৩০ থেকে ৪০ গ্রাম প্রোটিন এবং কমপক্ষে ২.৮ থেকে ৩.০ গ্রাম লিউসিনের প্রয়োজন হয় [৪, ৫]। অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে ওঠার জন্য ব্র্যাঞ্চড-চেইন অ্যামিনো অ্যাসিডসমৃদ্ধ প্রোটিন সঠিক সময়ে গ্রহণের সাথে সাথে রেজিস্ট্যান্স ব্যায়ামের সমন্বয় ঘটানো অপরিহার্য [৪, ৫]।"
                  },
                  {
                        "en": "Ultimately, nutritional science across the lifespan operates on the continuum between construction and preservation [1, 2, 5]. Evidence-based practice mandates systematic growth monitoring with WHO Z-scores in pediatric clinics to catch early stunting and wasting, alongside routine MNA-SF and EWGSOP2 functional screening in geriatric care to detect sarcopenia and prevent physical dependency [1, 2, 5]. By grounding clinical nutrition in developmental biochemistry and molecular geroscience, healthcare professionals can optimize growth trajectories in youth while preserving somatic autonomy throughout advanced age [1, 3, 5].",
                        "bn": "পরিশেষে, জীবনব্যাপী পুষ্টিবিজ্ঞান হলো গঠন ও সংরক্ষণের মধ্যকার একটি সুষম ভারসাম্য [১, ২, ৫]। প্রমাণভিত্তিক চিকিৎসার দাবি হলো পেডিয়াট্রিক ক্লিনিকগুলোতে বিশ্ব স্বাস্থ্য সংস্থার Z-স্কোরের মাধ্যমে শিশুদের প্রারম্ভিক বৃদ্ধি পর্যবেক্ষণ করা, যাতে খর্বতা ও অপচয় রোধ করা যায়; এবং একই সাথে প্রবীণদের যত্নে MNA-SF এবং EWGSOP2 অ্যালগরিদম ব্যবহার করে সারকোপেনিয়া প্রতিরোধ ও শারীরিক স্বনির্ভরতা রক্ষা করা [১, ২, ৫]। বিকাশমূলক প্রাণরসায়ন এবং বার্ধক্যবিজ্ঞানের সমন্বিত জ্ঞানের মাধ্যমেই কেবল চিকিৎসকরা শৈশবের সুস্থ বিকাশ নিশ্চিত করার পাশাপাশি জীবনের শেষ দিন পর্যন্ত প্রবীণদের কর্মক্ষমতা অক্ষুণ্ণ রাখতে পারেন [১, ৩, ৫]।"
                  }
            ]
      }
],
    },
    advanced: {
      label: l('Advanced · Molecular Regulation & Geroscience', 'উচ্চতর · আণবিক নিয়ন্ত্রণ ও জেরোসায়েন্স'),
      sections: [
      {
            "id": "introduction",
            "heading": {
                  "en": "Leucine Threshold Kinetics & mTORC1 Signaling Dysregulation in Aging Skeletal Muscle",
                  "bn": "বার্ধক্যে কঙ্কাল পেশির লিউসিন থ্রেশহোল্ড গতিবিদ্যা এবং এমটিওআরসি-১ সিগন্যালিংয়ের ব্যাঘাত"
            },
            "paragraphs": [
                  {
                        "en": "The molecular dissection of anabolic resistance in senescent skeletal muscle centers on the kinetic desensitization of the mechanistic target of rapamycin complex 1 (mTORC1) to essential amino acid stimulation [2, 4]. In healthy young myocytes, postprandial hyperaminoacidemia triggers robust activation of mTORC1 at the lysosomal outer membrane [4]. L-leucine, an essential branched-chain amino acid possessing a unique isobutyl side chain, acts as the primary biochemical trigger by binding the cytosolic leucine sensor Sestrin2 with micromolar affinity (Kd ~20 micromolar) [4]. Leucine binding induces a conformational shift in Sestrin2 that relieves its constitutive inhibition of GATOR2, allowing GATOR2 to inhibit the GTPase-activating protein GATOR1 [4]. Derepressed RagA/B-GTP complexes then bind raptor, translocating inactive cytoplasmic mTORC1 to the lysosomal limiting membrane where it undergoes terminal kinase activation by Rheb-GTP [4].",
                        "bn": "বার্ধক্যে কঙ্কাল পেশির অ্যানাবলিক রেজিস্ট্যান্সের মূল আণবিক কারণ হলো অত্যাবশ্যকীয় অ্যামিনো অ্যাসিডের উপস্থিতিতে এমটিওআরসি-১ (mTORC1) সংকেত পথের সংবেদনশীলতা কমে যাওয়া [২, ৪]। তরুণ পেশিকোষে খাওয়ার পর রক্তে অ্যামিনো অ্যাসিডের মাত্রা বৃদ্ধি পেলে তা লাইসোজোমের ঝিল্লিতে অবস্থিত mTORC1-কে দ্রুত সক্রিয় করে [৪]। এল-লিউসিন (L-leucine) হলো একটি ব্র্যাঞ্চড-চেইন অ্যামিনো অ্যাসিড, যা সাইটোসলের সেস্ট্রিন-২ (Sestrin2) সেন্সরে যুক্ত হয়ে মূল রাসায়নিক উদ্দীপক হিসেবে কাজ করে [৪]। লিউসিন যুক্ত হলে সেস্ট্রিন-২ এর গঠনগত পরিবর্তন ঘটে, যা GATOR2-এর বাধাকে দূর করে এবং Rag GTPase এনজাইম সক্রিয় করার মাধ্যমে নিষ্ক্রিয় mTORC1-কে লাইসোজোমের ঝিল্লিতে নিয়ে আসে, যেখানে Rheb-GTP দ্বারা এটি পূর্ণ সক্রিয় কাইনেজে রূপান্তরিত হয় [৪]।"
                  },
                  {
                        "en": "In aging skeletal muscle, this precise nutrient-sensing machinery suffers extensive kinetic impairment [2, 4]. Intramyocellular accumulation of lipid intermediates—predominantly diacylglycerols (DAG) and ceramides—activates atypical protein kinase C theta (PKC-theta), which phosphorylates insulin receptor substrate 1 (IRS-1) on inhibitory serine residues (Ser307, Ser1101), blocking downstream phosphoinositide 3-kinase (PI3K) and Akt signaling [4]. Concurrently, senescent myocytes exhibit blunted expression and membrane translocation of the L-type amino acid transporter 1 (LAT1/SLC7A5) and the proton-assisted amino acid transporter 1 (PAT1), impeding the intracellular influx of free leucine into the lysosomal lumen [4]. As a direct consequence, the dose-response activation curve of mTORC1 is shifted substantially to the right, establishing an elevated \"leucine trigger threshold\" [4, 5].",
                        "bn": "বার্ধক্যের কঙ্কাল পেশিতে এই সূক্ষ্ম পুষ্টি-সংবেদনশীল ব্যবস্থাটি মারাত্মকভাবে বাধাগ্রস্ত হয় [২, ৪]। পেশিকোষের ভেতরে অতিরিক্ত ক্ষতিকর লিপিড—প্রধানত ডাইঅ্যাসাইলগ্লিসারল (DAG) ও সিরামাইড—জমা হয়ে প্রোটিন কাইনেজ সি (PKC-theta)-কে সক্রিয় করে, যা ইনসুলিন রিসেপ্টর সাবস্ট্রেট-১ (IRS-1)-কে ফসফোরাইলেশনের মাধ্যমে নিষ্ক্রিয় করে ফেলে [৪]। একই সাথে বয়স্ক পেশিকোষের ঝিল্লিতে এলএটি-১ (LAT1/SLC7A5) অ্যামিনো অ্যাসিড ট্রান্সপোর্টারের সংখ্যা কমে যাওয়ায় কোষের ভেতরে লিউসিনের প্রবেশ মারাত্মকভাবে ব্যাহত হয় [৪]। ফলস্বরূপ, বয়স্কদের পেশিতে mTORC1 সক্রিয় করার ডোজ-রেসপন্স গ্রাফটি ডানদিকে সরে যায়, যার ফলে পেশি গঠনের সংকেত চালু করতে তরুণদের চেয়ে অনেক বেশি ঘনত্বের লিউসিনের প্রয়োজন হয়, যাকে \"লিউসিন থ্রেশহোল্ড\" বলা হয় [৪, ৫]।"
                  },
                  {
                        "en": "The clinical corollary of this right-shifted dose-response relationship is that conventional protein distribution paradigms fail to stimulate muscle protein synthesis (MPS) in older adults [4, 5]. In young adults, ingesting 15 to 20 grams of high-quality protein (yielding approximately 1.5 to 2.0 grams of leucine) completely saturates fractional synthetic rate (FSR) kinetics, eliciting a robust 2- to 3-hour stimulation of myofibrillar synthesis [4]. In older adults, however, the identical 20-gram protein dose fails to exceed the elevated leucine threshold, resulting in negligible downstream phosphorylation of p70S6K1 and 4E-BP1 [4, 5]. Only when the per-meal protein bolus is increased to 35 to 45 grams—or fortified with free crystalline L-leucine to deliver at least 3.0 to 4.0 grams of leucine per ingestion—is the intracellular sensor fully engaged, driving robust translational initiation and overcoming anabolic resistance [4, 5].",
                        "bn": "এই স্থানান্তরিত গ্রাফের ক্লিনিক্যাল তাৎপর্য হলো প্রবীণদের ক্ষেত্রে সনাতন খাদ্যাভ্যাস পেশির প্রোটিন সংশ্লেষ (MPS) উদ্দীপ্ত করতে ব্যর্থ হয় [৪, ৫]। তরুণদের ক্ষেত্রে একবারে ১৫ থেকে ২০ গ্রাম উচ্চমানের প্রোটিন (যা প্রায় ১.৫ থেকে ২.০ গ্রাম লিউসিন সরবরাহ করে) গ্রহণ করলেই পেশি সংশ্লেষ সর্বোচ্চ সীমায় পৌঁছায় [৪]। কিন্তু প্রবীণদের শরীরে এই একই ২০ গ্রাম প্রোটিন উচ্চ লিউসিন থ্রেশহোল্ড অতিক্রম করতে পারে না, ফলে p70S6K1 এবং 4E-BP1 এনজাইম সক্রিয় হয় না এবং পেশি গঠনের কাজ বন্ধ থাকে [৪, ৫]। কেবল তখনই যখন প্রতি বেলার খাবারে প্রোটিনের পরিমাণ বাড়িয়ে ৩৫ থেকে ৪৫ গ্রাম করা হয়—অথবা মুক্ত এল-লিউসিন যোগ করে প্রতি বেলায় কমপক্ষে ৩.০ থেকে ৪.০ গ্রাম লিউসিন নিশ্চিত করা হয়—তখনই অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে পেশি গঠনের প্রক্রিয়া সফলভাবে শুরু হয় [৪, ৫]।"
                  },
                  {
                        "en": "Furthermore, the postprandial duration of muscle protein synthesis is governed by the \"muscle-full\" refractory phenomenon [4]. Following successful mTORC1 activation and peak translation initiation, intracellular signaling ceases after approximately 90 to 120 minutes despite sustained extracellular availability of circulating amino acids [4]. Attempting to provide continuous grazing or constant sipping of protein throughout the day keeps myocytes in a chronically refractory state, dampening total daily MPS [4]. Optimal translational practice demands a \"pulsed\" bolus feeding architecture, spacing meals containing >=3.0 g leucine at 3.5- to 5-hour intervals to permit complete intracellular signaling reset between sequential anabolic stimulations [4, 5].",
                        "bn": "তদুপরি, খাবার গ্রহণের পর পেশি প্রোটিন সংশ্লেষণের সময়কাল \"মাসল-ফুল\" (Muscle-full) নামক একটি রিফ্র্যাক্টরি বা নিষ্ক্রিয় পর্ব দ্বারা নিয়ন্ত্রিত হয় [৪]। সফলভাবে mTORC1 সক্রিয় হওয়ার পর রক্তে অ্যামিনো অ্যাসিডের উপস্থিতি থাকা সত্ত্বেও প্রায় ৯০ থেকে ১২০ মিনিট পর প্রোটিন তৈরির কাজ প্রাকৃতিকভাবে স্থগিত হয় [৪]। সারাদিন ধরে অল্প অল্প করে বা বারবার প্রোটিন খেলে পেশিকোষ স্থায়ী নিষ্ক্রিয় অবস্থায় চলে যায়, যা মোট দৈনিক প্রোটিন সংশ্লেষ কমিয়ে দেয় [৪]। তাই আধুনিক গবেষণার ভিত্তিতে দিনে ৩.৫ থেকে ৫ ঘণ্টার ব্যবধানে নির্দিষ্ট \"পালসড\" পদ্ধতিতে কমপক্ষে ৩ গ্রাম লিউসিনযুক্ত খাবারের সুপারিশ করা হয়, যাতে প্রতিবার পেশিকোষ পুনরায় পূর্ণ শক্তিতে প্রোটিন তৈরিতে সাড়া দিতে পারে [৪, ৫]।"
                  }
            ]
      },
      {
            "id": "structure",
            "heading": {
                  "en": "Epigenetic Clocks, Inflammaging (SASP, IL-6, TNF-alpha) & Dietary Modulation",
                  "bn": "এপিজেনেটিক ক্লক, ইনফ্ল্যামেজিং (এসএএসপি, আইএল-৬, টিএনএফ-আলফা) এবং খাদ্যের মাধ্যমে বার্ধক্য নিয়ন্ত্রণ"
            },
            "paragraphs": [
                  {
                        "en": "Biological aging is fundamentally distinct from chronological age, driven by progressive cellular damage and epigenetic drift that can be quantitatively tracked using DNA methylation algorithms known as \"epigenetic clocks\" [2, 5]. Pioneered by Steve Horvath and refined in second-generation biological pacemakers like PhenoAge and GrimAge, these multi-tissue biomarkers analyze DNA methylation levels across hundreds of specific cytosine-phosphate-guanine (CpG) dinucleotide sites located near regulatory gene promoters [5]. Accelerated epigenetic aging—a state where DNA methylation age exceeds chronological age—strongly predicts premature frailty, cardiovascular disease, neurodegenerative decline, and all-cause mortality, reflecting cumulative lifelong metabolic, environmental, and nutritional insults [2, 5].",
                        "bn": "জৈবিক বয়স (Biological age) পঞ্জিকার বয়স থেকে সম্পূর্ণ ভিন্ন, যা কোষীয় ক্ষতি এবং ডিএনএ-র রাসায়নিক পরিবর্তনের দ্বারা পরিচালিত হয় এবং একে \"এপিজেনেটিক ক্লক\" (Epigenetic Clock) দিয়ে সঠিকভাবে পরিমাপ করা যায় [২, ৫]। স্টিভ হরভাথ উদ্ভাবিত এবং পরবর্তীতে ফেনো-এজ ও গ্রিম-এজ অ্যালগরিদমে উন্নত এই পদ্ধতি শত শত সুনির্দিষ্ট সিটিন-ফসফেট-গুয়ানিন (CpG) দ্বীপে ডিএনএ মিথাইলেশনের মাত্রা পরিমাপ করে [৫]। যদি কোনো ব্যক্তির এপিজেনেটিক বয়স তার প্রকৃত বয়সের চেয়ে বেশি হয় (Accelerated epigenetic aging), তবে তা অকাল বার্ধক্য, দুর্বলতা, হৃদরোগ এবং মৃত্যুর ঝুঁকি বহুগুণ বাড়িয়ে দেয়, যা আজীবন ভুল খাদ্যাভ্যাস ও বিপাকীয় চাপের সম্মিলিত ফল [২, ৫]।"
                  },
                  {
                        "en": "A primary molecular driver of accelerated epigenetic drift is \"inflammaging,\" a term defining the chronic, sterile, low-grade systemic inflammation that universally accompanies advanced biological senescence [2, 5]. Inflammaging is driven predominantly by the accumulation of senescent cells that enter irreversible cell-cycle arrest while secreting a toxic cocktail of inflammatory mediators termed the Senescence-Associated Secretory Phenotype (SASP) [2, 5]. The SASP secretome is rich in pro-inflammatory cytokines (interleukin-6 [IL-6], tumor necrosis factor-alpha [TNF-alpha], interleukin-1beta [IL-1beta]), chemokines (MCP-1), and matrix metalloproteinases (MMP-1, MMP-3) [2]. Circulating IL-6 and TNF-alpha activate nuclear factor-kappa B (NF-kappa-B) in distal non-senescent tissues, driving skeletal muscle proteolysis via ubiquitin ligases and inducing systemic insulin resistance [2, 4].",
                        "bn": "দ্রুত এপিজেনেটিক বার্ধক্যের অন্যতম প্রধান চালিকাশক্তি হলো \"ইনফ্ল্যামেজিং\" (Inflammaging), অর্থাৎ কোনো সরাসরি সংক্রমণ ছাড়াই বার্ধক্যে শরীরে মৃদু অথচ দীর্ঘস্থায়ী প্রদাহের উপস্থিতি [২, ৫]। এই প্রদাহের মূল উৎস হলো জরাজীর্ণ কোষসমূহ (Senescent cells), যারা স্থায়ীভাবে বিভাজন বন্ধ করলেও \"এসএএসপি\" (Senescence-Associated Secretory Phenotype বা SASP) নামক ক্ষতিকর রাসায়নিক ককটেল ক্রমাগত ক্ষরণ করে [২, ৫]। এই এসএএসপি নিঃসরণে প্রচুর পরিমাণে প্রদাহ সৃষ্টিকারী সাইটোকাইন (IL-6, TNF-alpha, IL-1beta), কেমোকাইন এবং ম্যাট্রিক্স মেটালোপ্রোটিনেজ এনজাইম থাকে [২]। রক্তে ছড়িয়ে পড়া এই IL-6 এবং TNF-alpha দূরবর্তী সুস্থ পেশিকোষে এনএফ-কাপ্পাবি (NF-kB) সক্রিয় করে ইউবিকুইটিন ব্যবস্থার মাধ্যমে পেশি ধ্বংস করে এবং ইনসুলিন রেজিস্ট্যান্স তৈরি করে [২, ৪]।"
                  },
                  {
                        "en": "The systemic inflammatory cascade also impairs hematopoietic lineage output, skewing bone marrow hematopoietic stem cells toward myeloid expansion while inducing chronic thymic involution [2, 5]. This immune remodeling, termed immunosenescence, reduces the circulating pool of naive T-cells (CD4+ and CD8+) and impairs mucosal secretory IgA responses, rendering older adults uniquely vulnerable to enteric and respiratory pathogens while simultaneously exacerbating systemic tissue auto-reactivity [5]. Concurrently, elevated circulating hepcidin triggered by persistent IL-6 signaling degrades enterocyte and macrophage ferroportin, sequestering iron within the reticuloendothelial system and inducing the functional iron deficiency characteristic of anemia of chronic disease [1, 5].",
                        "bn": "এই দীর্ঘস্থায়ী প্রদাহজনিত প্রতিক্রিয়া অস্থিমজ্জার রক্ত তৈরির স্বাভাবিক ধারাকে ক্ষতিগ্রস্ত করে এবং থাইমাস গ্রন্থিকে সংকুচিত করে তোলে [২, ৫]। এই পরিবর্তনকে \"ইমিউনোসেনেসেন্স\" (Immunosenescence) বলা হয়, যার ফলে রক্তে রোগপ্রতিরোধী নতুন টি-কোষের (CD4+ ও CD8+) সংখ্যা কমে যায় এবং মিউকোসাল অ্যান্টিবডি উৎপাদন হ্রাস পায়; ফলে প্রবীণরা সহজেই ফুসফুস ও অন্ত্রের সংক্রমণে আক্রান্ত হন [৫]। একই সাথে ক্রমাগত IL-6 বৃদ্ধির ফলে যকৃতে হেপসিডিন হরমোন বাড়ে, যা ফেরোপোর্টিন চ্যানেল ধ্বংস করে ম্যাক্রোফেজের ভেতরে আয়রন আটকে রাখে এবং ক্রনিক প্রদাহজনিত রক্তাল্পতার (Anemia of chronic disease) সৃষ্টি করে [১, ৫]।"
                  },
                  {
                        "en": "Nutritional modulation of inflammaging and epigenetic pace-of-aging represents an active frontier of clinical geroscience [2, 5]. Mediterranean-style dietary patterns rich in extra virgin olive oil polyphenols (hydroxytyrosol, oleocanthal), long-chain omega-3 fatty acids (EPA/DHA), and diverse plant fiber prebiotic substrates systematically attenuate circulating IL-6 and high-sensitivity C-reactive protein (hs-CRP) [5]. EPA and DHA displace arachidonic acid from cell membranes, generating Specialized Pro-resolving Mediators (SPMs: resolvins, protectins, maresins) that switch macrophages from a pro-inflammatory M1 phenotype to a tissue-reparative M2 phenotype, halting SASP-driven tissue catabolism and decelerating GrimAge methylation ticking [2, 4, 5].",
                        "bn": "খাদ্যাভ্যাসের মাধ্যমে ইনফ্ল্যামেজিং নিয়ন্ত্রণ এবং এপিজেনেটিক ঘড়ির গতি ধীর করা আধুনিক বার্ধক্যবিজ্ঞানের অন্যতম প্রধান লক্ষ্য [২, ৫]। অতিরিক্ত ভার্জিন অলিভ অয়েলের পলিফেনল (হাইড্রোক্সিটাইরোসল), ওমেগা-৩ ফ্যাটি অ্যাসিড (EPA/DHA) এবং অন্ত্রের প্রিবায়োটিক ফাইবার সমৃদ্ধ মেডিটেরেনিয়ান ডায়েট রক্তে IL-6 এবং সি-রিঅ্যাক্টিভ প্রোটিন (hs-CRP) কমাতে অত্যন্ত কার্যকর [৫]। ইপিএ (EPA) ও ডিএইচএ কোষের ঝিল্লি থেকে ক্ষতিকর অ্যারাকিডোনিক অ্যাসিড সরিয়ে বিশেষায়িত প্রো-রিজলভিং মিডিয়েটর (SPMs: রিজলভিন, প্রোটেকটিন) তৈরি করে যা ম্যাক্রোফেজ কোষকে শান্ত করে এবং এসএএসপি চালিত পেশিক্ষয় ও এপিজেনেটিক বার্ধক্যের গতি রোধ করে [২, ৪, ৫]।"
                  }
            ]
      },
      {
            "id": "mechanism",
            "heading": {
                  "en": "Pediatric Inborn Errors of Metabolism: Phenylketonuria, Galactosemia & Dietary Precision",
                  "bn": "শিশুর জন্মগত বিপাকীয় ত্রুটি: ফিনাইলকিটোনিউরিয়া, গ্যালাক্টোসেমিয়া ও সুনির্দিষ্ট খাদ্যাভ্যাস"
            },
            "paragraphs": [
                  {
                        "en": "Inborn errors of metabolism (IEM) represent a heterogeneous group of monogenic biochemical disorders that disrupt intermediate nutrient handling, demanding immediate neonatal screening and lifelong medical dietary precision [1, 6]. Because the developing neonatal brain is exceptionally vulnerable to toxic substrate accumulation and downstream energy depletion, early universal newborn screening (NBS) utilizing tandem mass spectrometry (MS/MS) on dried blood spots is executed within 24 to 48 hours of life [1]. The nutritional pathophysiology of IEM typically falls into two broad mechanistic classes: \"intoxication disorders\" resulting from the accumulation of toxic upstream precursors (e.g., aminoacidopathies, organic acidemias), and \"energy-deficiency disorders\" characterized by impaired cellular ATP production (e.g., glycogen storage diseases, mitochondrial fatty acid oxidation defects) [1].",
                        "bn": "জন্মগত বিপাকীয় ত্রুটি (Inborn Errors of Metabolism বা IEM) হলো একক জিনের ত্রুটিজনিত বংশগত রোগ, যা খাদ্যের স্বাভাবিক বিপাককে ব্যাহত করে এবং জন্মের পরপরই বিশেষায়িত খাদ্য ব্যবস্থাপনার দাবি রাখে [১, ৬]। যেহেতু নবজাতকের বিকাশমান মস্তিষ্ক ক্ষতিকর বিপাকীয় পদার্থ জমা হওয়া এবং শক্তির ঘাটতিতে অত্যন্ত সংবেদনশীল, তাই জন্মের ২৪ থেকে ৪৮ ঘণ্টার মধ্যে রক্তের স্পট দিয়ে ট্যান্ডেম মাস স্পেকট্রোমেট্রি (MS/MS) স্ক্রিনিং করা হয় [১]। পুষ্টির দিক থেকে এই রোগগুলো প্রধানত দুটি শ্রেণীতে বিভক্ত: \"বিষক্রিয়াজনিত রোগ\", যেখানে অপ্রক্রিয়াজাত পদার্থ জমে বিষক্রিয়া ঘটায় (যেমন অ্যামিনো অ্যাসিডের ত্রুটি), এবং \"শক্তির ঘাটতিজনিত রোগ\", যেখানে এটিপি (ATP) উৎপাদন বন্ধ হয়ে যায় (যেমন গ্লাইকোজেন সঞ্চয় রোগ বা ফ্যাটি অ্যাসিড জারণের ত্রুটি) [১]।"
                  },
                  {
                        "en": "Phenylketonuria (PKU, OMIM 261600), an autosomal recessive disorder occurring in roughly 1 in 10,000 live births, is caused by loss-of-function mutations in the gene encoding phenylalanine hydroxylase (PAH) on chromosome 12q23.2 [1]. PAH requires molecular oxygen and the coenzyme tetrahydrobiopterin (BH4) to hydroxylate L-phenylalanine (Phe) into L-tyrosine [1]. Deficiency of PAH activity leads to massive accumulation of phenylalanine in the circulation and cerebrospinal fluid (>1,200 micromol/L vs normal <120 micromol/L), where transamination by-products (phenylpyruvate, phenyllactate, phenylacetate) appear in the urine [1]. In the brain, saturating Phe concentrations competitively inhibit the L-type amino acid transporter 1 (LAT1) at the blood-brain barrier, starving cerebral neurons of other large neutral amino acids (tyrosine, tryptophan, branched-chain amino acids) and fatally halting dopamine and serotonin synthesis, resulting in severe microcephaly, irreversible cognitive disability, and seizures if untreated [1].",
                        "bn": "ফিনাইলকিটোনিউরিয়া (PKU) হলো একটি বংশগত অটোসোমাল রিসেসিভ রোগ, যা ১২ নম্বর ক্রোমোজোমে অবস্থিত ফিনাইলঅ্যালানিন হাইড্রোক্সিলেজ (PAH) এনজাইমের ত্রুটির কারণে ঘটে [১]। এই এনজাইমটি টেট্রাহাইড্রোবায়োপ্টেরিন (BH4) কো-এনজাইম ব্যবহার করে ফিনাইলঅ্যালানিনকে টাইরোসিনে রূপান্তরিত করে [১]। এনজাইমের অভাবে রক্তে ফিনাইলঅ্যালানিন মারাত্মকভাবে বৃদ্ধি পায় (স্বাভাবিক ১২০ এর স্থলে ১,২০০ মাইক্রোমোল/লিটারের বেশি) এবং প্রস্রাবে ফিনাইলপাইরুভেট নির্গত হয় [১]। মস্তিষ্কের ব্লাড-ব্রেন ব্যারিয়ারে এই অতিরিক্ত ফিনাইলঅ্যালানিন LAT1 ট্রান্সপোর্টার দখল করে অন্য অ্যামিনো অ্যাসিডের (টাইরোসিন, ট্রিপটোফ্যান) প্রবেশ বন্ধ করে দেয়; ফলে ডোপামিন ও সেরোটোনিন তৈরি বন্ধ হয়ে মস্তিষ্কের গঠন ধ্বংস হয় এবং স্থায়ী মানসিক প্রতিবন্ধকতা ও মৃগীরোগের সৃষ্টি হয় [১]।"
                  },
                  {
                        "en": "The medical nutrition therapy of PKU requires lifelong dietary restriction of phenylalanine paired with specialized amino acid medical foods [1]. Because phenylalanine is an indispensable amino acid required for normal protein synthesis, intake must be precisely titrated to maintain blood Phe concentrations strictly between 120 and 360 micromol/L [1]. Patients eliminate high-protein natural foods (meat, dairy, eggs, legumes, nuts, regular bread) and satisfy their nitrogen requirements via Phe-free L-amino acid medical formulas fortified with essential minerals, vitamins, and L-tyrosine (which becomes a conditionally essential amino acid) [1]. In older children and adults, glycomacropeptide (GMP)—a natural whey-derived protein uniquely lacking aromatic amino acids—is utilized to improve palatability and gastrointestinal satiety [1].",
                        "bn": "পিকেইউ (PKU)-এর চিকিৎসা হলো আজীবন খাদ্য থেকে ফিনাইলঅ্যালানিন কঠোরভাবে নিয়ন্ত্রণ করা এবং বিশেষায়িত অ্যামিনো অ্যাসিড ফর্মুলা গ্রহণ করা [১]। যেহেতু স্বাভাবিক বৃদ্ধির জন্য কিছুটা ফিনাইলঅ্যালানিন অপরিহার্য, তাই রক্তে এর মাত্রা কঠোরভাবে ১২০ থেকে ৩৬০ মাইক্রোমোল/লিটারের মধ্যে ধরে রাখার মতো সুনির্দিষ্ট খাদ্য দেওয়া হয় [১]। রোগীদের মাংস, দুধ, ডিম, ডাল এবং সাধারণ ময়দার মতো স্বাভাবিক প্রোটিনযুক্ত খাবার সম্পূর্ণ বন্ধ রাখতে হয়; এবং ফিনাইলঅ্যালানিন-মুক্ত বিশেষ মেডিক্যাল ফর্মুলার মাধ্যমে তাদের প্রোটিনের চাহিদা পূরণ করা হয় যেখানে টাইরোসিন অপরিহার্য অ্যামিনো অ্যাসিড হিসেবে যোগ করা থাকে [১]। বড় শিশুদের ক্ষেত্রে স্বাদের বৈচিত্র্য আনতে গ্লাইকোম্যাক্রোপেপটাইড (GMP) প্রোটিন ব্যবহৃত হয় [১]।"
                  },
                  {
                        "en": "Classic galactosemia (OMIM 230400) represents an acute intoxication emergency caused by deficiency of galactose-1-phosphate uridylyltransferase (GALT), an enzyme operating within the Leloir pathway of galactose catabolism [1, 6]. Following the ingestion of lactose in breast milk or standard cow milk formula, enterocytic lactase hydrolyzes lactose into glucose and galactose; galactose is phosphorylated by galactokinase (GALK) to galactose-1-phosphate [1, 6]. In the absence of functional GALT, galactose-1-phosphate accumulates within hepatocytes, renal proximal tubules, and cerebral neurons, while excess free galactose is diverted via aldose reductase into the toxic polyol galactitol [6]. Within days of milk feeding, affected neonates develop acute hepatic failure, hyperbilirubinemia, renal Fanconi syndrome, cerebral edema, cataracts, and fatal Escherichia coli sepsis [1, 6]. Immediate life-saving therapy consists of the absolute elimination of all dietary lactose and galactose, transitioning immediately to soy protein isolate formula or elemental amino acid infant formulas [1, 6].",
                        "bn": "ক্লাসিক গ্যালাক্টোসেমিয়া হলো আরেকটি মারাত্মক জন্মগত জরুরি অবস্থা, যা গ্যালাক্টোজ-১-ফসফেট ইউরিডিলিলট্রান্সফারেজ (GALT) নামক এনজাইমের ঘাটতির কারণে ঘটে [১, ৬]। মায়ের দুধের ল্যাকটোজ ভেঙে যে গ্যালাক্টোজ তৈরি হয়, GALT এনজাইমের অভাবে তা গ্লুকোজে রূপান্তরিত হতে পারে না এবং কোষের ভেতরে বিষাক্ত গ্যালাক্টোজ-১-ফসফেট ও গ্যালাক্টিটোল জমা হয় [১, ৬]। দুধ পান শুরুর কয়েকদিনের মধ্যেই নবজাতকের মারাত্মক যকৃতের ব্যর্থতা, জন্ডিস, কিডনির কার্যক্ষমতা নষ্ট হওয়া, মস্তিষ্কে পানি জমা, চোখের ছানি এবং মারাত্মক ই-কোলাই সেপসিস সংক্রমণ দেখা দেয় [১, ৬]। এই শিশুদের জীবন বাঁচাতে অবিলম্বে দুধ ও ল্যাকটোজযুক্ত সমস্ত খাবার বন্ধ করে সয়া-প্রোটিন বা বিশেষ অ্যামিনো অ্যাসিড ফর্মুলায় রূপান্তর করতে হয় [১, ৬]।"
                  }
            ]
      },
      {
            "id": "integration",
            "heading": {
                  "en": "Sarcopenic Obesity: Myosteatosis, Lipotoxicity & Synergistic Mobility Disability",
                  "bn": "সারকোপেনিক স্থূলতা: মায়োস্টিয়াটোসিস, লিপোটক্সিসিটি ও যৌথ শারীরিক অক্ষমতার জটিলতা"
            },
            "paragraphs": [
                  {
                        "en": "Sarcopenic obesity (SO) represents a complex, synergistically debilitating geriatric phenotype defined by the simultaneous coexistence of skeletal muscle sarcopenia (low muscle mass and muscle strength) and excessive adiposity [2, 4]. Historically considered mutually exclusive conditions, cross-sectional epidemiological studies demonstrate that aging induces an intrinsic redistribution of body composition: total fat mass increases and shifts central-viscerally, while skeletal muscle mass declines precipitously [2, 4]. Because excess adiposity masks the external appearance of muscle wasting, older adults with sarcopenic obesity often present with a normal or elevated body mass index (BMI > 30 kg/m^2), hiding severe, occult lean tissue depletion from routine visual inspection [2, 4].",
                        "bn": "সারকোপেনিক স্থূলতা (Sarcopenic Obesity) হলো প্রবীণদের এমন একটি জটিল স্বাস্থ্য সমস্যা যেখানে কঙ্কাল পেশির মারাত্মক ক্ষয় (সারকোপেনিয়া) এবং অতিরিক্ত শারীরিক চর্বি (স্থূলতা) একই সাথে অবস্থান করে [২, ৪]। পূর্বে এদের ভিন্ন সমস্যা মনে করা হলেও আধুনিক গবেষণায় দেখা গেছে বার্ধক্যে দেহের গঠনে অভ্যন্তরীণ পরিবর্তন ঘটে: মোট চর্বির পরিমাণ বাড়ে এবং তা পেটের ভেতরে জমা হয়, আর কঙ্কাল পেশি দ্রুত ক্ষয়প্রাপ্ত হয় [২, ৪]। যেহেতু অতিরিক্ত চর্বি পেশিক্ষয়কে বাহ্যিকভাবে ঢেকে রাখে, তাই স্বাভাবিক বা উচ্চ বিএমআই (BMI > ৩০) থাকা সত্ত্বেও অনেক প্রবীণের দেহে মারাত্মক পেশির ঘাটতি ধরা পড়ে না [২, ৪]।"
                  },
                  {
                        "en": "The histopathological hallmark of sarcopenic obesity is \"myosteatosis,\" defined as the pathological ectopic infiltration of adipose tissue into skeletal muscle [2, 4]. Myosteatosis manifests in two distinct compartments: intermuscular adipose tissue (IMAT), which accumulates between functional muscle bellies and beneath the deep fascia, and intramyocellular lipids (IMCL), which deposit as microscopic neutral lipid droplets inside individual myocyte cytoplasm [2, 4]. Elevated IMAT and IMCL alter the physical pennation angle of muscle fibers, disrupt force transmission across the costamere-extracellular matrix interface, and reduce the force-generating capacity per unit of muscle cross-sectional area (specific muscle force, N/cm^2) [2, 4].",
                        "bn": "সারকোপেনিক স্থূলতার মূল হিস্টোপ্যাথলজিক্যাল বৈশিষ্ট্য হলো \"মায়োস্টিয়াটোসিস\" (Myosteatosis), অর্থাৎ কঙ্কাল পেশির ভেতরে অস্বাভাবিক চর্বির অনুপ্রবেশ [২, ৪]। এটি দুটি জায়গায় ঘটে: আন্তঃপেশীয় চর্বি (IMAT), যা বিভিন্ন পেশির ফাঁকে ও ফ্যাসিয়ার নিচে জমা হয়; এবং অন্তঃকোষীয় চর্বি (IMCL), যা পেশিকোষের সাইটোপ্লাজমের ভেতরে সূক্ষ্ম চর্বির দানা হিসেবে জমা থাকে [২, ৪]। পেশির ভেতরে জমে থাকা এই চর্বি পেশিতন্তুর বলপ্রয়োগের কোণ নষ্ট করে এবং প্রতি বর্গসেন্টিমিটার পেশি থেকে উৎপন্ন বলের পরিমাণ মারাত্মকভাবে কমিয়ে দেয় [২, ৪]।"
                  },
                  {
                        "en": "At the biochemical level, myosteatosis precipitates localized lipotoxicity and perpetual paracrine inflammation [2, 4, 5]. Adipocytes within skeletal muscle secrete elevated levels of free fatty acids (FFAs) and pro-inflammatory adipokines (leptin, resistin, IL-6, TNF-alpha) directly into the interstitial microenvironment [4]. Saturated fatty acids, particularly palmitate, generate toxic intracellular lipid intermediates including ceramide and diacylglycerol (DAG) [4]. Ceramide directly inhibits Akt phosphorylation by activating protein phosphatase 2A (PP2A), while DAG activates novel protein kinase C isoforms (PKC-theta/epsilon) that phosphorylate IRS-1 on inhibitory serine residues, inducing profound localized skeletal muscle insulin resistance [4]. This insulin resistance impairs GLUT4 translocation, blunting postprandial glucose uptake and starving the myocyte of glycogen reserves [4, 5].",
                        "bn": "জৈব রাসায়নিক স্তরে মায়োস্টিয়াটোসিস স্থানীয় \"লিপোটক্সিসিটি\" বা চর্বির বিষক্রিয়া এবং দীর্ঘস্থায়ী প্রদাহের সৃষ্টি করে [২, ৪, ৫]। পেশির ভেতরে থাকা চর্বিকোষগুলো প্রচুর ফ্রি ফ্যাটি অ্যাসিড এবং প্রদাহ সৃষ্টিকারী অ্যাডিপোকাইন (লেপ্টিন, IL-6, TNF-alpha) সরাসরি পাশের পেশিকোষে ছড়িয়ে দেয় [৪]। অতিরিক্ত পামিটিক অ্যাসিড কোষের ভেতরে বিষাক্ত সিরামাইড ও ডাইঅ্যাসাইলগ্লিসারল তৈরি করে [৪]। সিরামাইড প্রোটিন ফসফাটেজ ২এ (PP2A) সক্রিয় করে Akt এনজাইম নিষ্ক্রিয় করে দেয়, যার ফলে ইনসুলিন সংকেত বন্ধ হয়ে যায় এবং গ্লুকোজ ট্রান্সপোর্টার (GLUT4) কোষে চিনি প্রবেশ করাতে পারে না; এর ফলে পেশিকোষ শক্তিহীন হয়ে পড়ে [৪, ৫]।"
                  },
                  {
                        "en": "The clinical convergence of sarcopenia and obesity creates a devastating vicious cycle that accelerates mobility disability, falls, metabolic syndrome, and mortality [2, 4]. The mechanical burden of an enlarged fat mass imposes increased torque and biomechanical strain on weakened, sarcopenic joints, exacerbating osteoarthritis, gait instability, and physical sedentariness [2]. In turn, physical inactivity accelerates the loss of motor units and reduces daily energy expenditure, driving further adiposity expansion [2, 4]. Therapeutic intervention requires a meticulously designed nutritional strategy: moderate caloric restriction (~500 kcal/day deficit) paired with very high protein intake (1.2 to 1.5 g/kg/day) and structured progressive resistance training to stimulate muscle protein synthesis while mobilizing visceral fat stores without exacerbating lean mass loss [4, 5].",
                        "bn": "সারকোপেনিয়া এবং স্থূলতার এই যৌথ উপস্থিতি একটি মারাত্মক চক্রের সৃষ্টি করে, যা শারীরিক পঙ্গুত্ব, পড়ে গিয়ে আঘাত পাওয়া এবং মৃত্যুর ঝুঁকি বহুগুণ বাড়ায় [২, ৪]। অতিরিক্ত চর্বির ভারী শরীর দুর্বল হয়ে যাওয়া পেশি ও সন্ধির ওপর তীব্র চাপ ফেলে, যা অস্টিওআর্থ্রাইটিস এবং হাঁটাচলার ভারসাম্যহীনতা বাড়িয়ে প্রবীণকে পুরোপুরি গৃহবন্দী করে তোলে [২]। ফলে শারীরিক নিষ্ক্রিয়তা আরও বাড়ে, যা পেশিক্ষয়কে দ্রুততর করে এবং চর্বি জমা বাড়িয়ে দেয় [২, ৪]। এই মারাত্মক চক্র ভাঙতে ক্যালোরি কিছুটা কমিয়ে (দৈনিক ৫০০ ক্যালোরি ঘাটতি) অত্যন্ত উচ্চমানের প্রোটিন (প্রতি কেজি ওজনে ১.২ থেকে ১.৫ গ্রাম) এবং ওজন বহনের রেজিস্ট্যান্স ব্যায়ামের সমন্বয় করতে হয়, যাতে পেশি অক্ষত রেখে কেবল চর্বি কমানো সম্ভব হয় [৪, ৫]।"
                  }
            ]
      },
      {
            "id": "practice",
            "heading": {
                  "en": "Translational Evidence & Clinical Guidelines: ESPEN, AAP & Multimodal Randomized Trials",
                  "bn": "ক্লিনিক্যাল নির্দেশিকা ও প্রমাণভিত্তিক চিকিৎসা: ইএসপিইএন, এএপি এবং মাল্টিমোডাল গবেষণার পর্যালোচনা"
            },
            "paragraphs": [
                  {
                        "en": "Translating cellular mechanisms into evidence-based clinical practice requires adherence to rigorous, multidisciplinary consensus guidelines across pediatric and geriatric subspecialties [1, 5, 6]. For pediatric populations, the American Academy of Pediatrics (AAP) and the European Society for Paediatric Gastroenterology, Hepatology, and Nutrition (ESPGHAN) recommend exclusive breastfeeding for approximately six months, with complementary foods introduced no earlier than seventeen weeks (four months) and no later than twenty-six weeks (six months) of age [6]. Clinical guidelines mandate prioritizing iron- and zinc-dense complementary foods—specifically pureed meat, poultry, fish, and fortified infant cereals—while avoiding unpasteurized dairy, whole cow milk (until 12 months), and added sodium or free sugars [1, 6].",
                        "bn": "কোষীয় গবেষণার ফলাফলকে ক্লিনিক্যাল চিকিৎসায় প্রয়োগ করার জন্য আন্তর্জাতিক পেডিয়াট্রিক ও জেরিয়াট্রিক নির্দেশিকাগুলো অনুসরণ করা অত্যন্ত জরুরি [১, ৫, ৬]। শিশুদের ক্ষেত্রে আমেরিকান একাডেমি অব পেডিয়াট্রিক্স (AAP) এবং ইউরোপীয় গ্যাস্ট্রোএন্টারোলজি সোসাইটি (ESPGHAN) প্রথম ছয় মাস শুধুমাত্র বুকের দুধ পান করানো এবং ১৭ সপ্তাহের আগে নয় ও ২৬ সপ্তাহের পরে নয় এমন সময়ে পরিপূরক খাদ্য শুরুর পরামর্শ দেয় [৬]। নির্দেশিকা অনুযায়ী প্রথমে আয়রন ও জিংকসমৃদ্ধ খাবার (মাংসের পেস্ট, মাছ, ডিম, ফর্টিফাইড খাদ্য) দিতে হবে এবং এক বছর পূর্ণ হওয়ার আগে গরুর তরল দুধ, বাড়তি লবণ ও চিনি দেওয়া কঠোরভাবে নিষিদ্ধ [১, ৬]।"
                  },
                  {
                        "en": "For older adults, the European Society for Clinical Nutrition and Metabolism (ESPEN) guidelines on clinical nutrition and hydration in geriatrics provide definitive clinical standards [5]. ESPEN establishes a baseline energy target of 30 kcal per kilogram of body weight per day in older adults, individually adjusted for nutritional state, physical activity level, and acute disease burden [5]. To counteract anabolic resistance, ESPEN guidelines recommend a minimum protein intake of 1.0 g/kg/day, increasing to 1.2 to 1.5 g/kg/day for older adults with acute or chronic illness, and up to 2.0 g/kg/day for individuals experiencing severe trauma, sepsis, or critical care catabolism [4, 5].",
                        "bn": "প্রবীণদের ক্ষেত্রে ইউরোপীয় ক্লিনিক্যাল নিউট্রিশন সোসাইটি (ESPEN) অত্যন্ত স্পষ্ট নির্দেশিকা প্রদান করেছে [৫]। প্রবীণদের জন্য দৈনিক প্রতি কেজি দৈহিক ওজনের বিপরীতে ন্যূনতম ৩০ ক্যালোরি শক্তির লক্ষ্যমাত্রা নির্ধারণ করা হয়েছে, যা রোগীর অবস্থা ও শারীরিক পরিশ্রমের ওপর ভিত্তি করে সমন্বয় করা হয় [৫]। অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে ওঠার জন্য ইএসপিইএন (ESPEN) স্বাভাবিক প্রবীণদের জন্য দৈনিক প্রতি কেজি ওজনে ন্যূনতম ১.০ গ্রাম প্রোটিনের সুপারিশ করে; যা কোনো দীর্ঘস্থায়ী অসুস্থতায় ১.২ থেকে ১.৫ গ্রাম এবং তীব্র আঘাত বা সেপসিসে ২.০ গ্রাম পর্যন্ত বাড়ানোর নির্দেশ দেওয়া হয় [৪, ৫]।"
                  },
                  {
                        "en": "Randomized controlled trials (RCTs) substantiate the clinical efficacy of multimodal nutritional and exercise interventions in reversing sarcopenia [2, 5]. The multicenter PROVIDE study demonstrated that older adults with sarcopenia randomized to a specialized medical nutrition drink containing 20 grams of whey protein, 3 grams of total leucine, and 800 IU of vitamin D twice daily exhibited significant gains in appendicular muscle mass and chair-stand performance compared to iso-caloric controls, independent of exercise [4, 5]. However, the landmark DO-HEALTH trial established that combining high-dose vitamin D3 (2,000 IU/day), marine omega-3 fatty acids (1 g/day), and a simple home exercise program achieved an additive 61% reduction in the risk of incident invasive cancers and substantial improvements in lower-extremity physical performance over three years [5].",
                        "bn": "র‍্যান্ডমাইজড কন্ট্রোলড ট্রায়ালস (RCT) সারকোপেনিয়া প্রতিরোধে পুষ্টি ও ব্যায়ামের সম্মিলিত কার্যকারিতা প্রমাণ করেছে [২, ৫]। বিখ্যাত প্রোভাইড (PROVIDE) গবেষণায় দেখা গেছে যে সারকোপেনিয়ায় আক্রান্ত প্রবীণদের দিনে দুবার ২০ গ্রাম হুই প্রোটিন, ৩ গ্রাম লিউসিন এবং ৮০০ আইইউ ভিটামিন ডি সমৃদ্ধ পুষ্টি পানীয় প্রদান করলে কোনো ভারী ব্যায়াম ছাড়াই তাদের পেশির ভর এবং চেয়ার থেকে ওঠার গতি উল্লেখযোগ্যভাবে বৃদ্ধি পায় [৪, ৫]। অন্যদিকে ডু-হেলথ (DO-HEALTH) ট্রায়াল প্রমাণ করেছে যে উচ্চমাত্রার ভিটামিন ডি৩ (দৈনিক ২,০০০ আইইউ), ওমেগা-৩ ফ্যাটি অ্যাসিড (১ গ্রাম) এবং মৃদু গৃহস্থালি ব্যায়ামের সমন্বয় প্রবীণদের ক্যান্সার ঝুঁকি ৬১% পর্যন্ত কমায় এবং তাদের হাঁটাচলার ক্ষমতা দীর্ঘস্থায়ী করে [৫]।"
                  },
                  {
                        "en": "In clinical practice, hydration management represents an equally vital, frequently overlooked pillar of geriatric medical nutrition therapy [5]. Due to blunted hypothalamic osmoreceptor sensitivity, voluntary thirst perception is markedly attenuated in older adults, while age-related reductions in renal medullary blood flow and aquaporin-2 expression impair urinary concentration [5]. ESPEN guidelines mandate screening for low-intake dehydration using serum calculated osmolarity (>300 mOsm/L), with a minimum recommended daily fluid intake of 1.6 liters per day for females and 2.0 liters per day for males, delivered through planned, structured drinking schedules independent of subjective thirst [5].",
                        "bn": "ক্লিনিক্যাল অনুশীলনে প্রবীণদের পানি ও তরলের সঠিক ব্যবস্থাপনা একটি অত্যন্ত জরুরি কিন্তু প্রায়শই অবহেলিত বিষয় [৫]। মস্তিষ্কের হাইপোথ্যালামাসের সংবেদনশীলতা কমে যাওয়ায় বয়স্কদের তৃষ্ণার অনুভূতি ভোঁতা হয়ে যায়; একই সাথে কিডনির মূত্র ঘনীভূত করার ক্ষমতা হ্রাস পায় [৫]। ইএসপিইএন (ESPEN) নির্দেশিকা অনুযায়ী রক্তে অসমোলারিটি (Osmolarity > ৩০০ mOsm/L) পরীক্ষা করে ডিহাইড্রেশন বা পানিশূন্যতা শনাক্ত করতে হয়; এবং তৃষ্ণার অনুভূতির ওপর নির্ভর না করে মহিলাদের জন্য দৈনিক কমপক্ষে ১.৬ লিটার এবং পুরুষদের জন্য ২.০ লিটার তরল পানের সুনির্দিষ্ট সময়সূচি নিশ্চিত করতে হয় [৫]।"
                  }
            ]
      },
      {
            "id": "takeaways",
            "heading": {
                  "en": "Frontier Research & Geroscience Nutritional Targets Across the Lifespan",
                  "bn": "জীবনব্যাপী পুষ্টিবিজ্ঞানের আধুনিক গবেষণা ও জেরোসায়েন্সের মূল সিদ্ধান্তসমূহ"
            },
            "paragraphs": [
                  {
                        "en": "Advanced research in nutritional geroscience demonstrates that the trajectory of biological aging is profoundly malleable, governed by nutrient-sensing signaling pathways that integrate metabolic flux with genomic stability [2, 5]. The mechanistic target of rapamycin (mTOR), AMP-activated protein kinase (AMPK), and sirtuins (SIRT1-7) represent evolutionarily conserved master regulators that calibrate cellular allocation between growth and somatic repair [4, 5]. In youth, transient mTORC1 activation drives the cellular translation and tissue expansion required for linear growth and neurodevelopment [1, 4]. In senescence, chronic basal mTORC1 hyperactivation driven by systemic hyperinsulinemia suppresses autophagy and accelerates cellular senescence; conversely, pulsed anabolic stimulation preserves functional muscle mass while avoiding chronic catabolic deterioration [4, 5].",
                        "bn": "বার্ধক্যবিজ্ঞানের (Geroscience) আধুনিক গবেষণা প্রমাণ করেছে যে জৈবিক বার্ধক্যের গতি কোনো অপরিবর্তনীয় ভাগ্য নয়, বরং এটি পুষ্টি-সংবেদনশীল সংকেত পথ দ্বারা ব্যাপকভাবে নিয়ন্ত্রিত হতে পারে [২, ৫]। এমটিওআর (mTOR), এএমপিকে (AMPK) এবং সার্টুইন (SIRT) হলো বিবর্তনের মাধ্যমে সংরক্ষিত প্রধান নিয়ন্ত্রক, যা কোষীয় বৃদ্ধি এবং কোষ মেরামতের মধ্যে ভারসাম্য রক্ষা করে [৪, ৫]। শৈশবে mTORC1 এর ক্ষণস্থায়ী সক্রিয়তা দৈহিক বৃদ্ধি এবং স্নায়ুর বিকাশের জন্য অপরিহার্য [১, ৪]। কিন্তু বার্ধক্যে অনিয়ন্ত্রিত ইনসুলিনের কারণে এটি স্থায়ীভাবে সক্রিয় থাকলে তা অটোফ্যাজি বন্ধ করে কোষীয় বার্ধক্য ত্বরান্বিত করে; তাই নির্দিষ্ট সময় পরপর পালসড পুষ্টি প্রদান পেশি অক্ষত রাখতে সর্বোত্তম পদ্ধতি [৪, ৫]।"
                  },
                  {
                        "en": "Sarcopenia and sarcopenic obesity must be conceptualized not merely as cosmetic or localized muscular disorders, but as systemic metabolic and endocrine failures [2, 4]. Skeletal muscle constitutes the largest metabolic organ in the human body, serving as the primary site of insulin-stimulated postprandial glucose disposal (~80%) and the principal endogenous amino acid reservoir for immune globulin synthesis and hepatic gluconeogenesis during clinical stress [2, 4]. Loss of muscle quantity and microstructural quality induces systemic insulin resistance, accelerates hepatic steatosis, blunts immune resilience, and dramatically increases surgical mortality [2, 4, 5].",
                        "bn": "সারকোপেনিয়া এবং সারকোপেনিক স্থূলতাকে কেবল সাধারণ পেশির ক্ষয় হিসেবে দেখা ভুল, বরং এটি একটি মারাত্মক সমন্বিত বিপাকীয় ও অন্তঃক্ষরা বৈকল্য [২, ৪]। কঙ্কাল পেশি হলো মানবদেহের বৃহত্তম বিপাকীয় অঙ্গ, যা খাদ্যের পর রক্তের প্রায় ৮০% গ্লুকোজ শোষণ করে এবং অসুস্থতার সময় রোগপ্রতিরোধী অ্যান্টিবডি তৈরির প্রধান অ্যামিনো অ্যাসিড ভাণ্ডার হিসেবে কাজ করে [২, ৪]। পেশি নষ্ট হলে ইনসুলিন রেজিস্ট্যান্স বৃদ্ধি পায়, যকৃতে চর্বি জমে, রোগপ্রতিরোধ ক্ষমতা হ্রাস পায় এবং যেকোনো অস্ত্রোপচারে মৃত্যুর ঝুঁকি বহুগুণ বেড়ে যায় [২, ৪, ৫]।"
                  },
                  {
                        "en": "Lifespan translational dietetics establishes that optimal health span requires stage-specific nutritional architectures [1, 2, 5]. In early infancy, exclusive breastfeeding followed by iron- and DHA-dense complementary feeding secures neurocognitive development and prevents linear stunting [1, 6]. In adolescence, high-impact mechanical strain combined with generous calcium, phosphorus, and vitamin D intake maximizes peak bone mass, establishing lifelong skeletal reserve against postmenopausal and senile osteoporosis [3]. In older adulthood, overcoming anabolic resistance through leucine-enriched, pulsed protein prescriptions (>=30-40 g/meal, >=1.2-1.5 g/kg/day) paired with progressive resistance exercise preserves functional mobility and prevents sarcopenic frailty [4, 5].",
                        "bn": "জীবনব্যাপী পুষ্টিবিজ্ঞান প্রমাণ করে যে দীর্ঘ ও সুস্থ জীবনের জন্য বয়সভিত্তিক সুনির্দিষ্ট পুষ্টি কৌশল গ্রহণ অপরিহার্য [১, ২, ৫]। শৈশবে মায়ের দুধের পর পর্যাপ্ত আয়রন ও ডিএইচএ সমৃদ্ধ পরিপূরক খাদ্য শিশুর মানসিক বিকাশ ঘটায় এবং খর্বতা রোধ করে [১, ৬]। কৈশোরে খেলাধুলা ও ব্যায়ামের সাথে ক্যালসিয়াম ও ভিটামিন ডি অস্থির সর্বোচ্চ ঘনত্ব (Peak Bone Mass) নিশ্চিত করে বার্ধক্যের অস্টিওপোরোসিস প্রতিরোধ করে [৩]। আর বার্ধক্যে লিউসিনসমৃদ্ধ পর্যাপ্ত প্রোটিন (প্রতি বেলায় ৩০-৪০ গ্রাম, দৈনিক ১.২-১.৫ গ্রাম/কেজি) এবং রেজিস্ট্যান্স ব্যায়ামের মাধ্যমে অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে পেশিশক্তি ও শারীরিক স্বাধীনতা বজায় রাখা সম্ভব হয় [৪, ৫]।"
                  },
                  {
                        "en": "Ultimately, the integration of molecular nutrition across the lifespan shifts medicine from a reactive disease-treatment paradigm to a proactive health-span optimization model [1, 5]. Healthcare professionals must recognize that the nutritional trajectory begun in utero and during the first 1,000 days reverberates across subsequent decades, while targeted nutritional therapy in advanced age can preserve somatic vitality and cognitive dignity until the end of life [1, 3, 5]. Mastery of lifespan nutritional mechanics is therefore an indispensable competency for every modern clinician, dietitian, and public health leader [1, 2, 5].",
                        "bn": "পরিশেষে, জীবনব্যাপী আণবিক পুষ্টির সঠিক প্রয়োগ চিকিৎসা বিজ্ঞানকে রোগ হওয়ার পর চিকিৎসার সনাতন ধারা থেকে সুস্থতা রক্ষার সক্রিয় মডেলে রূপান্তরিত করে [১, ৫]। চিকিৎসকদের মনে রাখতে হবে যে মাতৃগর্ভে ও প্রথম ১,০০০ দিনে শুরু হওয়া পুষ্টির ভিত্তি পরবর্তী সমস্ত জীবনের ওপর প্রভাব ফেলে; আবার বার্ধক্যে সঠিক পুষ্টি সহায়তা প্রবীণদের শারীরিক সামর্থ্য ও মানসিক মর্যাদা জীবনের শেষ মুহূর্ত পর্যন্ত অক্ষুণ্ণ রাখতে পারে [১, ৩, ৫]। তাই জীবনব্যাপী পুষ্টিবিজ্ঞানের গভীর উপলব্ধি অর্জন করা প্রতিটি আধুনিক চিকিৎসক, পুষ্টিবিদ ও জনস্বাস্থ্য পেশাজীবীর জন্য অপরিহার্য [১, ২, ৫]।"
                  }
            ]
      }
],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-intro', label: l('Pediatric Growth Velocity & Lifespan Trajectory', 'শিশুর বৃদ্ধির গতি ও জীবনব্যাপী গতিপথ'), sectionId: 'introduction' },
      { id: 'toc-structure', label: l('Gastrointestinal Maturation vs. Gastric Atrophy', 'পরিপাকতন্ত্রের পরিপক্কতা বনাম পাকস্থলীর অবক্ষয়'), sectionId: 'structure' },
      { id: 'toc-mechanism', label: l('Weaning Physiology & Sarcopenia Mechanisms', 'উইনিং শারীরবৃত্ত ও সারকোপেনিয়ার প্রক্রিয়া'), sectionId: 'mechanism' },
      { id: 'toc-integration', label: l('Pubertal Bone Accretion & Sarcopenic Obesity', 'বয়ঃসন্ধির অস্থি সঞ্চয় ও সারকোপেনিক স্থূলতা'), sectionId: 'integration' },
      { id: 'toc-practice', label: l('Growth Charts, MNA-SF & EWGSOP2 Algorithms', 'বৃদ্ধি চার্ট, এমএনএ-এসএফ ও সারকোপেনিয়া অ্যালগরিদম'), sectionId: 'practice' },
      { id: 'toc-takeaways', label: l('Translational Summary & Lifespan Nutrition Targets', 'সারসংক্ষেপ ও জীবনব্যাপী পুষ্টির ক্লিনিক্যাল লক্ষ্য'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('WHO Growth Velocity Z-Score', 'ডব্লিউএইচও বৃদ্ধি গতিবেগ Z-স্কোর'),
        definition: l(
          'Standard deviation metric quantifying pediatric weight and height accretion trajectories relative to an optimal international reference population, defining faltering and acute wasting.',
          'একটি আন্তর্জাতিক আদর্শ জনগোষ্ঠীর তুলনায় শিশুর ওজন ও উচ্চতা বৃদ্ধির স্বাভাবিক গতি পরিমাপক পরিমিত ব্যবধান সূচক, যা বৃদ্ধি স্থবিরতা ও তীব্র অপচয় নির্ণয় করে।'
        ),
      },
      {
        term: l('Peak Bone Mass Accretion', 'পিক বোন মাস বা সর্বোচ্চ অস্থি সঞ্চয়'),
        definition: l(
          'The maximum quantity of mineralized bone matrix consolidated at skeletal maturity (Tanner stages 2-4), representing the primary biological defense against lifetime osteoporotic fracture.',
          'কঙ্কালের বৃদ্ধির সমাপ্তিতে অর্জিত খনিজায়িত অস্থির সর্বোচ্চ সঞ্চয় (ট্যানার পর্যায় ২-৪), যা বার্ধক্যে অস্টিওপোরোসিস ও অস্থিভাঙার ঝুঁকি প্রতিরোধের প্রধান জৈবিক সুরক্ষা।'
        ),
      },
      {
        term: l('Sarcopenia & Anabolic Resistance', 'সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্স'),
        definition: l(
          'Progressive loss of skeletal muscle mass and strength in aging, underpinned by blunted intracellular mTORC1 protein synthesis signaling in response to postprandial hyperaminoacidemia.',
          'বয়স বৃদ্ধির সাথে সাথে কঙ্কাল পেশির ভর ও শক্তির অবক্ষয়, যা খাদ্য গ্রহণের পর রক্তে অ্যামিনো অ্যাসিড বৃদ্ধি পেলেও কোষে এমটিওআরসি-১ সক্রিয়করণ হ্রাস পাওয়ার কারণে ঘটে।'
        ),
      },
      {
        term: l('Leucine Threshold Trigger', 'লিউসিন থ্রেশহোল্ড ট্রিগার'),
        definition: l(
          'The critical per-meal intracellular concentration of free L-leucine (~2.8 to 3.0 g) required by senescent myocytes to bind Sestrin2 and derepress mTORC1-mediated translation initiation.',
          'বয়স্ক পেশিকোষে সেস্ট্রিন-২ সেন্সরে যুক্ত হয়ে এমটিওআরসি-১ চালিত প্রোটিন তৈরি শুরু করার জন্য প্রতি বেলার খাবারে প্রয়োজনীয় মুক্ত এল-লিউসিনের ন্যূনতম ঘনত্ব (~২.৮ থেকে ৩.০ গ্রাম)।'
        ),
      },
      {
        term: l('Atrophic Gastritis & Achlorhydria', 'অ্যাট্রোফিক গ্যাস্ট্রাইটিস ও অ্যাসিডস্বল্পতা'),
        definition: l(
          'Age-related autoimmune or inflammatory loss of gastric parietal cells, elevating intragastric pH and disrupting the peptic liberation and intrinsic factor-mediated endocytosis of cobalamin.',
          'বার্ধক্যে পাকস্থলীর প্যারাইটাল কোষের ক্ষয়জনিত স্থায়ী অ্যাসিডস্বল্পতা, যা পেপসিনোজেন সক্রিয়করণ বন্ধ করে এবং খাদ্য প্রোটিন থেকে ভিটামিন বি১২ শোষণ ব্যাহত করে।'
        ),
      },
      {
        term: l('Inflammaging & SASP', 'ইনফ্ল্যামেজিং ও এসএএসপি ফিনোটাইপ'),
        definition: l(
          'Chronic, low-grade systemic inflammation driven by senescent cells secreting pro-inflammatory cytokines (IL-6, TNF-alpha) that accelerate muscle catabolism and epigenetic aging.',
          'জরাজীর্ণ কোষ দ্বারা ক্রমাগত ক্ষরিত ক্ষতিকর সাইটোকাইন (IL-6, TNF-alpha) দ্বারা পরিচালিত মৃদু অথচ দীর্ঘস্থায়ী শারীরিক প্রদাহ, যা পেশিক্ষয় ও বার্ধক্য ত্বরান্বিত করে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Reasoning 1: Pediatric Catch-Up Growth & Energy-Protein Prescription in MAM',
          'সমাধানসহ যুক্তি ১: মাঝারি তীব্র অপুষ্টিতে (MAM) শিশুর রিকভারি গ্রোথ ও প্রোটিন-ক্যালোরি হিসাব'
        ),
        steps: [
          l(
            'Step 1: Patient Assessment & Deficit Quantification — A 14-month-old female presents with growth faltering: weight 7.2 kg, recumbent length 75 cm. According to WHO standards, median weight-for-length (50th percentile) is 9.0 kg. Her current Weight-for-Length Z-score (WHZ) is -2.4 SD, establishing the diagnosis of Moderate Acute Malnutrition (MAM) without bilateral nutritional pitting edema.',
            'ধাপ ১: রোগীর মূল্যায়ন ও ঘাটতি নিরূপণ — ১৪ মাস বয়সী একটি শিশুর বৃদ্ধি স্থবিরতা: ওজন ৭.২ কেজি, দৈর্ঘ্য ৭৫ সেমি। ডব্লিউএইচও চার্ট অনুযায়ী ৭৫ সেমি দৈর্ঘ্যে স্বাভাবিক মধ্যম ওজন ৯.০ কেজি। বর্তমান উচ্চতার অনুপাতে ওজন Z-স্কোর (WHZ) হলো -২.৪ SD, যা কোনো ইডিমা ছাড়া মাঝারি তীব্র অপুষ্টি (MAM) নিশ্চিত করে।'
          ),
          l(
            'Step 2: Caloric Catch-Up Requirement Calculation — Normal maintenance energy for a 14-month-old is approximately 80 to 90 kcal/kg/day. To fuel rapid tissue catch-up growth (accelerated protein accretion and subcutaneous fat restoration), energy prescription is calculated based on target weight: Catch-Up Energy = [Normal Energy for Age (85 kcal/kg) * Target Weight (9.0 kg)] / Current Weight (7.2 kg) = 765 / 7.2 = 106.25 kcal/kg/day, rounded clinically to 110 to 120 kcal/kg/day (total 800-860 kcal/day).',
            'ধাপ ২: রিকভারি ক্যালোরি নির্ণয় — স্বাভাবিক রক্ষণাবেক্ষণ ক্যালোরি প্রায় ৮৫ ক্যালোরি/কেজি। দ্রুত স্বাভাবিক ওজনে পৌঁছানোর জন্য লক্ষ্য ওজনভিত্তিক সূত্র: [বয়সের স্বাভাবিক ক্যালোরি (৮৫) * লক্ষ্য ওজন (৯.০ কেজি)] / বর্তমান ওজন (৭.২ কেজি) = ৭৬৫ / ৭.২ = ১০৬.২৫ ক্যালোরি/কেজি/দিন; ক্লিনিক্যালি যা দৈনিক ১১০-১২০ ক্যালোরি/কেজি (মোট ৮০০-৮৬০ ক্যালোরি/দিন) নির্ধারণ করা হয়।'
          ),
          l(
            'Step 3: Protein Catch-Up & P% Formulation — To sustain high-velocity lean tissue synthesis without overloading immature tubular nephrons (limiting renal solute load), dietary protein must provide 10% to 12% of total calories (Protein-to-Energy ratio, P%): Protein Target = 2.0 to 2.5 g/kg/day = 14.4 to 18.0 g/day of high-biological-value protein (DIAAS >= 1.0, e.g., milk, eggs, therapeutic paste). At 2.5 g/kg/day (18 g * 4 kcal/g = 72 kcal), protein contributes 72 / 800 kcal = 9.0% of total energy, within safe renal solute boundaries.',
            'ধাপ ৩: প্রোটিনের পরিমাণ ও P% অনুপাত — কিডনির ওপর বাড়তি চাপ না ফেলে দ্রুত পেশি ও টিস্যু গঠনের জন্য মোট ক্যালোরির ১০% থেকে ১২% প্রোটিন থেকে আসতে হবে (P%): প্রোটিনের লক্ষ্যমাত্রা = ২.০ থেকে ২.৫ গ্রাম/কেজি/দিন = ১৪.৪ থেকে ১৮.০ গ্রাম/দিন উন্নত প্রোটিন (দুধ, ডিম, থেরাপিউটিক পেস্ট)। ১৮ গ্রাম প্রোটিন (৭২ ক্যালোরি) মোট ৮০০ ক্যালোরির ৯% যোগায়, যা কিডনির জন্য সম্পূর্ণ নিরাপদ।'
          ),
          l(
            'Step 4: Micronutrient Fortification & Clinical Monitoring — Daily therapy integrates a lipid-based nutrient supplement (LNS-MAM or RUTF supplement, 50 g providing 250 kcal and 6 g dairy protein) alongside micronutrient fortification supplying 10 mg elemental iron, 5 mg zinc, 400 mcg vitamin A, and 100 mcg folic acid. Weekly monitoring targets an expected catch-up weight velocity of >= 5 g/kg/day until WHZ surpasses -1.0 SD.',
            'ধাপ ৪: খনিজ উপাদানের পরিপূরক ও পর্যবেক্ষণ — দৈনিক খাদ্যে ৫০ গ্রাম বিশেষায়িত লিপিড-পুষ্টি পেস্ট (২৫০ ক্যালোরি ও ৬ গ্রাম দুগ্ধ প্রোটিন) এবং সাথে ১০ মিলিগ্রাম আয়রন, ৫ মিলিগ্রাম জিংক ও ভিটামিন সমৃদ্ধ করা হয়। প্রতি সপ্তাহে শিশুর বৃদ্ধি পর্যবেক্ষণ করা হয় এবং কাঙ্ক্ষিত ওজন বৃদ্ধির গতি দৈনিক প্রতি কেজিতে কমপক্ষে ৫ গ্রাম লক্ষ্যমাত্রা ধরা হয় যতক্ষণ না WHZ স্কোর -১.০ SD অতিক্রম করে।'
          ),
        ],
        conclusion: l(
          'Quantitative prescription of 110-120 kcal/kg/day and 2.5 g/kg/day of high-DIAAS protein successfully restores cellular catch-up kinetics while safeguarding renal osmotic equilibrium in pediatric moderate malnutrition.',
          'দৈনিক ১১০-১২০ ক্যালোরি/কেজি এবং ২.৫ গ্রাম/কেজি উন্নত প্রোটিনের সুনির্দিষ্ট প্রেসক্রিপশন কিডনির অসমোটিক ভারসাম্য অক্ষুণ্ণ রেখে মাঝারি অপুষ্টিতে আক্রান্ত শিশুর স্বাভাবিক বৃদ্ধি পুনরুদ্ধার করে।'
        ),
      },
      {
        title: l(
          'Worked Reasoning 2: Geriatric Sarcopenia Nutrition & Leucine-Pulsed Protein Prescription',
          'সমাধানসহ যুক্তি ২: প্রবীণদের সারকোপেনিয়া প্রতিরোধে লিউসিন-সমৃদ্ধ পালসড প্রোটিন পরিকল্পনা'
        ),
        steps: [
          l(
            'Step 1: Diagnostic & Anthropometric Stratification — A 74-year-old male (weight 68 kg, height 170 cm, BMI 23.5 kg/m^2) presents following a non-injurious domestic fall. Comprehensive geriatric assessment reveals: handgrip strength 21.0 kg (abnormal, <27 kg), five-time chair-stand time 16.5 seconds (abnormal, >15 s), appendicular lean mass (ALM) by DXA 18.2 kg (ALM/height^2 = 6.30 kg/m^2, abnormal, <7.0 kg/m^2), and 4-meter gait speed 0.72 m/s (abnormal, <0.8 m/s). This confirms EWGSOP2 Severe Sarcopenia.',
            'ধাপ ১: রোগ নির্ণয় ও নৃমিতিক বিভাজন — ৭৪ বছর বয়সী একজন প্রবীণ ব্যক্তি (ওজন ৬৮ কেজি, উচ্চতা ১৭০ সেমি, বিএমআই ২৩.৫) পড়ে যাওয়ার পর মূল্যায়নে আসেন। পরীক্ষায় দেখা যায়: গ্রিপ শক্তি ২১.০ কেজি (স্বাভাবিক ২৭-এর নিচে), ৫-বার চেয়ার থেকে ওঠার সময় ১৬.৫ সেকেন্ড (স্বাভাবিক ১৫-র বেশি), ডিএক্সএ দ্বারা পরিমাপকৃত পেশি ভর ৬.৩০ কেজি/বর্গমিটার (স্বাভাবিক ৭.০-এর নিচে) এবং হাঁটার গতি ০.৭২ মি/সেকেন্ড। এটি নিশ্চিতভাবে তীব্র সারকোপেনিয়া (Severe Sarcopenia) প্রমাণ করে।'
          ),
          l(
            'Step 2: Total Daily Protein & Energy Target Formulation — In accordance with ESPEN and PROT-AGE guidelines for acute-on-chronic sarcopenia with mobility disability, baseline protein requirement is set to 1.35 g/kg/day: Total Daily Protein = 68 kg * 1.35 g/kg/day = 91.8 g/day (rounded to 92 g/day). Total daily energy target is established at 30 kcal/kg/day = 68 * 30 = 2,040 kcal/day, avoiding positive fat balance while providing ample non-protein energy to prevent amino acid oxidation.',
            'ধাপ ২: মোট দৈনিক প্রোটিন ও ক্যালোরি নির্ধারণ — ইএসপিইএন এবং প্রো-এজ নির্দেশিকা অনুযায়ী তীব্র সারকোপেনিয়ায় প্রোটিনের লক্ষ্যমাত্রা প্রতি কেজি ওজনে ১.৩৫ গ্রাম নির্ধারণ করা হলো: মোট দৈনিক প্রোটিন = ৬৮ * ১.৩৫ = ৯১.৮ গ্রাম (প্রায় ৯২ গ্রাম/দিন)। মোট দৈনিক ক্যালোরি ৩০ ক্যালোরি/কেজি হিসেবে ৬৮ * ৩০ = ২,০৪০ ক্যালোরি/দিন নির্ধারণ করা হয়, যাতে শক্তি উৎপাদনের জন্য প্রোটিনের ভাঙন রোধ করা যায়।'
          ),
          l(
            'Step 3: Leucine-Pulsed Meal Distribution Architecture — To overcome postprandial anabolic resistance and exceed the heightened myocyte leucine threshold (>= 3.0 g leucine/meal), the 92 g daily protein is not distributed as low-dose grazing. Instead, it is partitioned into three discrete anabolic pulses spaced 4.5 hours apart: Breakfast: 32 g protein (yielding 3.2 g leucine from eggs and fortified Greek yogurt); Lunch: 30 g protein (yielding 3.0 g leucine from baked salmon, quinoa, and lentils); Dinner: 30 g protein (yielding 3.1 g leucine from whey protein supplement and poultry).',
            'ধাপ ৩: লিউসিন-সমৃদ্ধ পালসড খাবারের বিন্যাস — বয়স্ক পেশির অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে প্রতি বেলায় কমপক্ষে ৩.০ গ্রাম লিউসিন নিশ্চিত করতে মোট ৯২ গ্রাম প্রোটিন সারাদিনে ছড়িয়ে না দিয়ে ৪.৫ ঘণ্টার ব্যবধানে তিনটি প্রধান খাবারে ভাগ করা হলো: প্রাতঃরাশ: ৩২ গ্রাম প্রোটিন (ডিম ও দই থেকে ৩.২ গ্রাম লিউসিন); মধ্যাহ্নভোজ: ৩০ গ্রাম প্রোটিন (মাছ ও ডাল থেকে ৩.০ গ্রাম লিউসিন); নৈশভোজ: ৩০ গ্রাম প্রোটিন (চিকেন ও উন্নত প্রোটিন পাউডার থেকে ৩.১ গ্রাম লিউসিন)।'
          ),
          l(
            'Step 4: Micronutrient & Mechanotransduction Synergy — Serum 25-hydroxyvitamin D [25(OH)D] is measured at 16 ng/mL (insufficiency). Cholecalciferol (vitamin D3) is initiated at 2,000 IU/day to optimize VDR-mediated muscle protein synthesis and calcium homeostasis. The dietary protocol is directly synchronized with progressive resistance training (PRT: leg press, knee extension, seated row at 70% of 1-repetition maximum, 3 days/week), timed immediately before the lunch protein bolus to exploit post-exercise intracellular mTORC1 sensitization.',
            'ধাপ ৪: খনিজ ও ব্যায়ামের মেলবন্ধন — সিরাম ভিটামিন ডি-এর মাত্রা ১৬ ng/mL (ঘাটতি) পাওয়ায় দৈনিক ২,০০০ আইইউ ভিটামিন ডি৩ যোগ করা হলো যা পেশির রিসেপ্টর সক্রিয় করে। খাদ্যতালিকাটির সাথে সপ্তাহে ৩ দিন ৭০% তীব্রতায় ওজন তোলার ব্যায়াম (PRT) যুক্ত করা হলো, যা ঠিক মধ্যাহ্নভোজের প্রোটিন গ্রহণের পূর্বে সম্পন্ন করার নিয়ম করা হয় যাতে ব্যায়াম-পরবর্তী mTORC1 সক্রিয়তা সর্বোচ্চ কাজে লাগানো যায়।'
          ),
        ],
        conclusion: l(
          'Targeted prescription of 1.35 g/kg/day partitioned into discrete >=3.0 g leucine pulses combined with vitamin D3 and progressive resistance loading reverses severe sarcopenic muscle loss in older adults.',
          'প্রতি কেজি ওজনে ১.৩৫ গ্রাম প্রোটিনকে প্রতি বেলায় কমপক্ষে ৩ গ্রাম লিউসিনযুক্ত খাবারের মাধ্যমে প্রয়োগ এবং ভিটামিন ডি৩ ও রেজিস্ট্যান্স ব্যায়ামের সমন্বয় প্রবীণদের মারাত্মক সারকোপেনিয়া নিরাময়ে কার্যকর ভূমিকা রাখে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why is complementary feeding contraindicated prior to four months (seventeen weeks) and hazardous if delayed beyond six months (twenty-six weeks)?',
          'চার মাসের পূর্বে পরিপূরক খাদ্য দেওয়া কেন নিষিদ্ধ এবং ছয় মাসের বেশি দেরি করা কেন শিশুর জন্য বিপজ্জনক?'
        ),
        answer: l(
          'Introducing solid foods prior to four months exposes immature neonatal gut tight junctions to dietary antigens (elevating food allergy risk) while exceeding immature renal tubular concentration capacity with high renal solute loads. Delaying introduction beyond six months precipitates severe elemental iron and zinc deficiency (exhausted fetal hepatic reserves), linear growth stunting, and oral-motor developmental feeding aversions.',
          'চার মাসের আগে শক্ত খাবার দিলে অপরিপক্ক অন্ত্রের টাইট জাংশন দিয়ে অ্যালার্জেন প্রবেশ করে অ্যালার্জির ঝুঁকি বাড়ায় এবং অপরিণত কিডনির ওপর রেচন চাপ ফেলে। পক্ষান্তরে ছয় মাসের বেশি দেরি করলে যকৃতে সঞ্চিত আয়রন ও জিংক ফুরিয়ে রক্তাল্পতা, খর্বতা এবং খাবার চিবানোর স্বাভাবিক স্নায়বিক বিকাশ বাধাগ্রস্ত হয়।'
        ),
      },
      {
        question: l(
          'Why can skeletal bone mineral density deficits incurred during adolescent Tanner stages 2 to 4 never be fully recovered in mature adult life?',
          'কৈশোরের ট্যানার ২ থেকে ৪ পর্যায়ে অর্জিত অস্থি খনিজ ঘনত্বের ঘাটতি প্রাপ্তবয়স্ক জীবনে কেন আর কখনো সম্পূর্ণরূপে পূরণ করা যায় না?'
        ),
        answer: l(
          'Pubertal peak height velocity coincides with a non-renewable physiological window of peak bone mass accretion driven by circulating IGF-1, sex steroids, and calcitriol acting on open epiphyseal growth plates. Following late-adolescent epiphyseal fusion and the decline of the somatotropic axis, bone remodeling shifts from net structural modeling/expansion to coupled renewal, where adult remodeling cycles can maintain or slightly increase density but cannot expand external skeletal geometry or restore missed pubertal peak bone mass.',
          'বয়ঃসন্ধির সময় গ্রোথ হরমোন, সেক্স স্টেরয়েড এবং ভিটামিন ডি-এর যৌথ প্রভাবে উন্মুক্ত এপিফাইসিয়াল প্লেটে আজীবন ব্যবহারের জন্য সর্বোচ্চ অস্থি সঞ্চয় (Peak Bone Mass) ঘটে। কৈশোর শেষে এপিফাইসিয়াল প্লেট বন্ধ হয়ে গেলে অস্থির গঠনগত বৃদ্ধি চিরতরে থেমে যায়; প্রাপ্তবয়স্ক জীবনে কেবল বিদ্যমান অস্থি রক্ষণাবেক্ষণ সম্ভব হলেও বয়ঃসন্ধিতে হারানো সর্বোচ্চ ঘনত্ব আর নতুন করে বৃদ্ধি করা যায় না।'
        ),
      },
      {
        question: l(
          'What is the molecular mechanism of "anabolic resistance" in aged skeletal muscle, and how does leucine-pulsed bolus feeding overcome it?',
          'বয়স্ক কঙ্কাল পেশিতে "অ্যানাবলিক রেজিস্ট্যান্সের" আণবিক প্রক্রিয়া কী এবং লিউসিন-সমৃদ্ধ পালসড খাদ্য কীভাবে তা কাটিয়ে ওঠে?',
        ),
        answer: l(
          'Aging muscle exhibits blunted Sestrin2-GATOR2-mTORC1 signaling activation in response to amino acids, caused by chronic systemic inflammaging (IL-6, TNF-alpha) and intramyocellular lipid accumulation (DAG, ceramides) that impairs downstream IRS-1/Akt signaling. While standard 15-20 g protein doses fall below the right-shifted activation threshold, a concentrated pulse supplying >=3.0 to 4.0 g of free/intact leucine saturates Sestrin2 binding, restoring Rag GTPase recruitment of mTORC1 to the lysosomal membrane and driving robust p70S6K1/4E-BP1 myofibrillar translation.',
          'বার্ধক্যে দীর্ঘস্থায়ী মৃদু প্রদাহ (IL-6, TNF-alpha) এবং পেশিকোষের ভেতরে জমে থাকা বিষাক্ত চর্বির (DAG, সিরামাইড) কারণে সেস্ট্রিন-২ ও এমটিওআরসি-১ সিগন্যালিং পথটি ভোঁতা হয়ে পড়ে। সাধারণ ১৫-২০ গ্রাম প্রোটিন এই উচ্চ থ্রেশহোল্ড পার হতে পারে না; কিন্তু একবারে কমপক্ষে ৩.০ থেকে ৪.০ গ্রাম লিউসিনযুক্ত খাবার দিলে তা সেস্ট্রিন-২ সেন্সরকে সম্পূর্ণরূপে সম্পৃক্ত করে mTORC1 সক্রিয় করে এবং পেশির প্রোটিন সংশ্লেষণ পুনরায় স্বাভাবিক করে তোলে।'
        ),
      },
    ],
  },
  diagram: {
    accessibleDescription: l(
      'A chronological physiological trajectory schematic tracking nutritional requirements and endocrine drivers across the human life cycle: infant neurodevelopment (0-2 years), adolescent peak bone mass accretion (12-18 years), adult metabolic maintenance (25-50 years), and geriatric sarcopenia and anabolic resistance (65+ years).',
      'মানব জীবনচক্রের পুষ্টি চাহিদা ও হরমোনগত নিয়ন্ত্রণের ধারাবাহিক রূপরেখা: শিশুর স্নায়বিক ও দৈহিক বিকাশ (০-২ বছর), কৈশোরের সর্বোচ্চ অস্থি সঞ্চয় (১২-১৮ বছর), প্রাপ্তবয়স্ক জীবনের বিপাকীয় ভারসাম্য (২৫-৫০ বছর) এবং বার্ধক্যের সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্স প্রতিরোধ (৬৫+ বছর)।'
    ),
    steps: [
      l('Phase 1 (Infancy): Exclusive breastfeeding for 6 months followed by timely, iron-dense complementary feeding to fuel rapid somatic velocity and cerebral synaptogenesis.', 'পর্যায় ১ (শৈশব): প্রথম ৬ মাস শুধুমাত্র মায়ের দুধ এবং পরবর্তীতে দ্রুত দৈহিক বৃদ্ধি ও মস্তিষ্কের বিকাশের জন্য আয়রনসমৃদ্ধ পরিপূরক খাদ্য নিশ্চিত করা।'),
      l('Phase 2 (Childhood): Steady linear canalization tracked along WHO Z-score percentiles, preventing subclinical micronutrient deficits and acute growth faltering.', 'পর্যায় ২ (বাল্যকাল): ডব্লিউএইচও Z-স্কোর চার্ট অনুযায়ী শিশুর রৈখিক বৃদ্ধি পর্যবেক্ষণ এবং পুষ্টি ঘাটতি ও বৃদ্ধি স্থবিরতা রোধ করা।'),
      l('Phase 3 (Adolescence): Pubertal growth spurt and sexual maturation (Tanner stages 2-4), requiring 1,300 mg/day calcium and high-impact mechanical strain to maximize peak bone mass.', 'পর্যায় ৩ (কৈশোর): বয়ঃসন্ধির দ্রুত বৃদ্ধি (ট্যানার ২-৪), যেখানে সর্বোচ্চ অস্থি সঞ্চয়ের জন্য দৈনিক ১,৩০০ মিলিগ্রাম ক্যালসিয়াম ও ব্যায়াম প্রয়োজন।'),
      l('Phase 4 (Adulthood): Metabolic homeostasis, dietary fiber diversification, and nitrogen equilibrium, preserving organ reserve and preventing early metabolic disease.', 'পর্যায় ৪ (প্রাপ্তবয়স্ক): পরিপাক ও বিপাকীয় ভারসাম্য রক্ষা, খাদ্যে আঁশ বৈচিত্র্য এবং অঙ্গের কার্যক্ষমতা বজায় রাখতে পুষ্টি নিশ্চিত করা।'),
      l('Phase 5 (Senescence): Overcoming anabolic resistance through leucine-pulsed protein prescriptions (>=30-40 g/meal, >=1.2-1.5 g/kg/day) and resistance training to halt sarcopenic frailty.', 'পর্যায় ৫ (বার্ধক্য): প্রতি বেলায় কমপক্ষে ৩০-৪০ গ্রাম লিউসিনযুক্ত প্রোটিন এবং রেজিস্ট্যান্স ব্যায়ামের মাধ্যমে অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে সারকোপেনিয়া প্রতিরোধ।'),
    ],
  },
  interactiveDiagram: {
    id: 'lifespan-metabolic-continuum',
    title: l(
      'Human Lifespan Continuum: Growth Velocity to Sarcopenia Resistance',
      'মানব জীবনচক্রের অবিচ্ছিন্ন ধারা: বৃদ্ধির গতিবেগ থেকে পেশিক্ষয় প্রতিরোধ'
    ),
    disclaimer: l(
      'Educational schematic illustrating physiological transitions across the life cycle; not individual clinical guidance.',
      'জীবনব্যাপী শারীরবৃত্তীয় পরিবর্তনের শিক্ষামূলক রূপরেখা; ব্যক্তিগত চিকিৎসা বা ডায়েট পরামর্শ নয়।'
    ),
    description: l(
      'Select any developmental stage to inspect its hormonal drivers, cellular mechanisms, critical nutrient targets, and clinical assessment standards.',
      'যেকোনো বিকাশমূলক পর্যায় নির্বাচন করে তার হরমোন সংকেত, কোষীয় প্রক্রিয়া, পুষ্টি উপাদান এবং ক্লিনিক্যাল মূল্যায়ন পদ্ধতি পর্যবেক্ষণ করুন।'
    ),
    svgType: 'lifespan-trajectory',
    imageUrl: '/assets/lifespan_nutrition_overview.jpg',
    imageCaption: l(
      'Figure 25.1: The Human Lifespan Nutrition Continuum. Tracing infant growth velocity and neurodevelopment, adolescent bone mineral accretion, and geriatric muscle mass preservation against sarcopenia.',
      'চিত্র ২৫.১: মানব জীবনব্যাপী পুষ্টির অবিচ্ছিন্ন ধারা। শিশুর বৃদ্ধির গতি ও মস্তিষ্কের বিকাশ, কৈশোরের অস্থি খনিজ সঞ্চয় এবং বার্ধক্যের সারকোপেনিয়া প্রতিরোধে পেশি সংরক্ষণের সামগ্রিক চিত্র।'
    ),
    items: [
      {
        id: 'node-infant-growth',
        label: l('Infant Growth & Synaptogenesis', 'শিশুর বৃদ্ধি ও স্নায়বিক বিকাশ'),
        description: l(
          'Maximum lifetime growth velocity and cerebral myelination fueled by maternal milk DHA, choline, iron, and WHO Z-score tracking.',
          'জীবনের সর্বোচ্চ বৃদ্ধির গতি এবং মস্তিষ্কের বিকাশ; মাতৃদুগ্ধের ডিএইচএ, কোলিন ও আয়রন দ্বারা পরিচালিত।'
        ),
        details: l(
          'Rapid brain expansion demands docosahexaenoic acid (DHA 22:6n-3) for synaptic membrane fluidity and sphingomyelin synthesis for axonal myelination. Hepatic iron stores exhaust by 4-6 months, requiring timely complementary feeding of iron-dense foods to prevent irreversible neurocognitive deficits.',
          'মস্তিষ্কের দ্রুত বিকাশ সিন্যাপসের জন্য ডিএইচএ (DHA) এবং মায়েলিনের জন্য স্ফিংগোমায়েলিন দাবি করে। জন্মের সময় সঞ্চিত যকৃতের আয়রন ৪-৬ মাসে শেষ হয়ে যায়, ফলে রক্তাল্পতা ও বুদ্ধিমত্তার স্থায়ী ক্ষতি রোধে আয়রনযুক্ত পরিপূরক খাদ্য শুরু করা অপরিহার্য।'
        ),
        color: '#059669',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 35, width: 310, height: 50 },
      },
      {
        id: 'node-adolescent-bone',
        label: l('Adolescent Peak Bone Mass Accretion', 'কৈশোরের সর্বোচ্চ অস্থি সঞ্চয়'),
        description: l(
          'Consolidation of up to 40% of adult skeletal bone mineral density driven by sex steroids, IGF-1, calcitriol, and 1,300 mg/day calcium.',
          'যৌন হরমোন, গ্রোথ হরমোন এবং দৈনিক ১,৩০০ মিলিগ্রাম ক্যালসিয়াম দ্বারা প্রাপ্তবয়স্ক জীবনের প্রায় ৪০% অস্থি সঞ্চয়।'
        ),
        details: l(
          'During Tanner stages 2-4, epiphyseal chondrocytes hypertrophy and osteoblasts deposit osteoid. High-impact mechanical exercise deforms osteocytes, suppressing sclerostin to activate Wnt/beta-catenin bone formation. Daily calcium intake of 1,300 mg is required to support peak mineralization.',
          'ট্যানার ২-৪ পর্যায়ে তরুণাস্থি ও অস্টিওব্লাস্ট কোষ দ্রুত অস্থি গঠন করে। ব্যায়ামের ফলে অস্টিওসাইট কোষ স্ক্লেরোস্টিন ক্ষরণ কমিয়ে নতুন অস্থি তৈরি বাড়ায়। দৈনিক ১,৩০০ মিলিগ্রাম ক্যালসিয়াম ও ভিটামিন ডি কঙ্কালের সর্বোচ্চ ঘনত্ব নিশ্চিত করে।'
        ),
        color: '#2563eb',
        sectionId: 'structure',
        svgCoords: { x: 25, y: 105, width: 310, height: 50 },
      },
      {
        id: 'node-adult-homeostasis',
        label: l('Adult Homeostasis & Organ Reserve', 'প্রাপ্তবয়স্ক দেহের বিপাকীয় ভারসাম্য'),
        description: l(
          'Nitrogen balance, gut microbiome diversity, and preservation of somatic lean body mass prior to late-life catabolic decline.',
          'পরিপাকতন্ত্রের স্বাস্থ্য রক্ষা, নাইট্রোজেন ভারসাম্য এবং বার্ধক্যের অবক্ষয় শুরুর পূর্বে পেশি ভর সংরক্ষণ।'
        ),
        details: l(
          'Adult nutrition prioritizes metabolic homeostasis, insulin sensitivity, and adequate dietary fiber (>=25-30 g/day) to support short-chain fatty acid production. Protein balance is maintained at 0.8 g/kg/day in sedentary adults, laying the structural foundation that dictates resilience in later decades.',
          'প্রাপ্তবয়স্ক জীবনে বিপাকীয় সুস্থতা, ইনসুলিন সংবেদনশীলতা এবং অন্ত্রের জন্য পর্যাপ্ত আঁশ (২৫-৩০ গ্রাম/দিন) গ্রহণ জরুরি। দৈনিক প্রতি কেজি ওজনে ০.৮ গ্রাম প্রোটিন কঙ্কাল পেশির ক্ষয় রোধ করে পরবর্তী দশকের জন্য মজবুত ভিত্তি গড়ে তোলে।'
        ),
        color: '#0891b2',
        sectionId: 'integration',
        svgCoords: { x: 25, y: 175, width: 310, height: 50 },
      },
      {
        id: 'node-geriatric-gastric',
        label: l('Geriatric Gastric Atrophy & Malabsorption', 'বার্ধক্যের পাকস্থলীর অবক্ষয় ও শোষণহীনতা'),
        description: l(
          'Achlorhydria, intrinsic factor deficiency, and food-cobalamin malabsorption triggering the methyl-folate trap and hyperhomocysteinemia.',
          'প্যারাইটাল কোষের ক্ষয়, অ্যাসিডস্বল্পতা এবং ভিটামিন বি১২ মুক্ত না হওয়ার ফলে হোমোসিস্টাইন বৃদ্ধি ও স্নায়বিক ক্ষতি।'
        ),
        details: l(
          'Chronic atrophic gastritis destroys gastric parietal cells, abolishing the acid-pepsin cleavage of dietary cobalamin from animal proteins. The resulting B12 deficiency halts methionine synthase, trapping folate in the 5-methyl-THF form and generating neurotoxic homocysteine and myelin-destabilizing methylmalonic acid (MMA).',
          'ক্রনিক অ্যাট্রোফিক গ্যাস্ট্রাইটিস পাকস্থলীর প্যারাইটাল কোষ ধ্বংস করে, যার ফলে খাদ্যের প্রোটিন থেকে ভিটামিন বি১২ মুক্ত হতে পারে না। বি১২ ঘাটতি মিথাইল-ফোলেট ট্র্যাপ তৈরি করে, রক্তে হোমোসিস্টাইন বাড়ায় এবং ক্ষতিকর মিথাইলম্যালোনিক অ্যাসিড (MMA) স্নায়ুর মায়েলিন ধ্বংস করে।'
        ),
        color: '#d97706',
        sectionId: 'integration',
        svgCoords: { x: 25, y: 245, width: 310, height: 50 },
      },
      {
        id: 'node-sarcopenia-anabolic',
        label: l('Sarcopenia & Anabolic Resistance', 'সারকোপেনিয়া ও অ্যানাবলিক রেজিস্ট্যান্স'),
        description: l(
          'Loss of Type II motor units and Sestrin2 desensitization overcome by pulsed leucine-rich protein (>=3.0 g/meal) and resistance exercise.',
          'টাইপ-২ পেশিতন্তুর অবক্ষয় এবং সেস্ট্রিন-২ সেন্সরের ভোঁতা সংবেদনশীলতা কাটিয়ে উঠতে প্রতি বেলায় ৩ গ্রাম লিউসিন ও ব্যায়াম।'
        ),
        details: l(
          'Aging myocytes exhibit blunted mTORC1 activation due to intramuscular lipotoxicity and inflammaging. The heightened leucine threshold is overcome by ingesting 30-40 g of protein containing >=3.0 g leucine per meal, spaced 4-5 hours apart and combined with progressive resistance training to stimulate muscle protein synthesis (MPS).',
          'প্রবীণদের পেশিকোষে দীর্ঘস্থায়ী প্রদাহ ও চর্বির জমার কারণে mTORC1 সহজে সক্রিয় হয় না। প্রতি বেলায় ৩০-৪০ গ্রাম প্রোটিন ও কমপক্ষে ৩.০ গ্রাম লিউসিন গ্রহণ এবং রেজিস্ট্যান্স ব্যায়ামের মাধ্যমে অ্যানাবলিক রেজিস্ট্যান্স কাটিয়ে পেশিক্ষয় রোধ করা সম্ভব।'
        ),
        color: '#dc2626',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 315, width: 310, height: 50 },
      },
    ],
  },
  assessment: {
    question: l(
      'A 76-year-old female diagnosed with EWGSOP2 confirmed sarcopenia (handgrip strength 14 kg, ALM/height^2 5.2 kg/m^2) consumes 65 g of protein daily divided as 10 g at breakfast, 15 g at lunch, and 40 g at dinner. Despite this total protein intake (~1.0 g/kg/day), her muscle mass continues to decline. What is the primary biochemical mechanism explaining this persistent muscle wasting, and what dietary modification is clinically indicated?',
      '৭৬ বছর বয়সী একজন নারী নিশ্চিত সারকোপেনিয়ায় আক্রান্ত (হাতের গ্রিপ শক্তি ১৪ কেজি, পেশি ভর ৫.২ কেজি/বর্গমিটার) এবং তিনি দৈনিক ৬৫ গ্রাম প্রোটিন খান (সকালে ১০ গ্রাম, দুপুরে ১৫ গ্রাম ও রাতে ৪০ গ্রাম)। মোট প্রোটিন প্রায় ১.০ গ্রাম/কেজি হওয়া সত্ত্বেও কেন তার পেশিক্ষয় অব্যাহত রয়েছে এবং এর সর্বোত্তম সমাধান কী?'
    ),
    options: [
      l(
        'Anabolic resistance in aging myocytes establishes an elevated leucine threshold (~3.0 g/meal) that breakfast and lunch fail to exceed; protein intake should be redistributed into three balanced pulses of 25-30 g with >=3.0 g leucine each.',
        'বয়স্ক পেশিকোষের অ্যানাবলিক রেজিস্ট্যান্সের কারণে লিউসিন থ্রেশহোল্ড (~৩.০ গ্রাম/বেলা) বেড়ে যাওয়ায় সকাল ও দুপুরের খাবার পেশি সংশ্লেষ উদ্দীপ্ত করতে পারছে না; তাই খাবারকে প্রতি বেলায় ২৫-৩০ গ্রাম এবং ন্যূনতম ৩ গ্রাম লিউসিনযুক্ত তিনটি সুষম খাবারে ভাগ করতে হবে।'
      ),
      l(
        'Excessive protein intake at dinner induces metabolic acidosis that accelerates bone and muscle catabolism; total protein must be restricted to 0.6 g/kg/day.',
        'রাতে অতিরিক্ত প্রোটিন খাওয়ার ফলে বিপাকীয় অ্যাসিডোসিস তৈরি হয়ে পেশি ও অস্থির ভাঙন বাড়ছে; তাই মোট প্রোটিন দৈনিক ০.৬ গ্রাম/কেজিতে সীমিত করতে হবে।'
      ),
      l(
        'Gastric parietal cell hypersecretion of hydrochloric acid hydrolyzes all ingested amino acids before they reach the ileal cubam receptor complex.',
        'পাকস্থলীতে অতিরিক্ত হাইড্রোক্লোরিক অ্যাসিড ক্ষরণ সমস্ত অ্যামিনো অ্যাসিড ধ্বংস করে দেয় ফলে তা অন্ত্রের কিউবাম রিসেপ্টর দ্বারা শোষিত হতে পারে না।'
      ),
      l(
        'Continuous grazing on protein every 60 minutes throughout the day is required to prevent the physiological "muscle-full" refractory period.',
        'সারাদিন ধরে প্রতি ৬০ মিনিট পরপর অল্প অল্প প্রোটিন খাওয়া উচিত যাতে পেশির প্রাকৃতিক রিফ্র্যাক্টরি বা নিষ্ক্রিয় পর্ব তৈরি হতে না পারে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Correct. Aging skeletal muscle suffers from anabolic resistance, a right-shifted dose-response curve wherein myocytes require approximately 2.8 to 3.0 grams of leucine (~25 to 35 g of high-quality protein) per meal to engage the Sestrin2-mTORC1 cascade. When protein is skewed (10 g, 15 g, 40 g), only the dinner meal exceeds the threshold, leaving the patient in net negative protein balance for the remaining 16 hours of the day. Redistributing intake into discrete, leucine-fortified pulses overcomes this signaling threshold across multiple daily anabolic windows.',
      'সঠিক উত্তর। বার্ধক্যের কঙ্কাল পেশিতে অ্যানাবলিক রেজিস্ট্যান্সের কারণে প্রতি বেলায় সেস্ট্রিন-২ ও এমটিওআরসি-১ সক্রিয় করতে কমপক্ষে ২.৮ থেকে ৩.০ গ্রাম লিউসিন (প্রায় ২৫-৩৫ গ্রাম উন্নত প্রোটিন) প্রয়োজন। প্রোটিন অসমভাবে গ্রহণ করলে (১০ গ্রাম, ১৫ গ্রাম, ৪০ গ্রাম) কেবল রাতের খাবারটি থ্রেশহোল্ড পার হতে পারে, আর দিনের বাকি ১৬ ঘণ্টা শরীর ক্ষয়মূলক অবস্থায় থাকে। তাই খাবারকে তিনটি লিউসিনসমৃদ্ধ সুষম পর্বে ভাগ করলে দিনে একাধিকবার পেশি গঠনের সংকেত চালু করা সম্ভব হয়।'
    ),
  },
}
