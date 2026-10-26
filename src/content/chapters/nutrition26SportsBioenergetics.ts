import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

export const nutrition26SportsBioenergeticsLesson: LessonTopic = {
  id: 'topic.nutrition.sports-nutrition-bioenergetics',
  slug: 'sports-nutrition-bioenergetics',
  version: 1,
  updatedAt: '2026-10-26',
  lastReviewed: '2026-10-26',
  title: l(
    '26 · Exercise Nutrition & Sports Bioenergetics: Periodization & Timing',
    '২৬ · ব্যায়ামের পুষ্টি ও ক্রীড়া জৈবশক্তিবিজ্ঞান: খাদ্যের সময়জ্ঞান ও কর্মক্ষমতা বৃদ্ধি'
  ),
  summary: l(
    'Translational exercise biochemistry and sports dietetics: substrate oxidation crossover kinetics, muscle glycogen supercompensation protocols, dual-transporter (SGLT1/GLUT5) intra-exercise carbohydrate feeding, post-workout myofibrillar protein synthesis (MPS) refractory windows, creatine kinase phosphagen mechanics, and Relative Energy Deficiency in Sport (REDs).',
    'ব্যায়ামের জৈবরাসায়নিক শারীরবৃত্ত ও ক্রীড়া পুষ্টিবিজ্ঞান: সাবস্ট্রেট জারণের ক্রসওভার গতিবিদ্যা, পেশির গ্লাইকোজেন সুপারকম্পেনসেশন প্রোটোকল, দ্বৈত-পরিবহনকারী (SGLT1/GLUT5) শর্করা শোষণ, ব্যায়াম-পরবর্তী মায়োফাইব্রিলার প্রোটিন সংশ্লেষের রিফ্র্যাক্টরি উইন্ডো, ক্রিয়েটিন ফসফেজেন মেকানিক্স এবং ক্রীড়াবিদদের আপেক্ষিক শক্তি ঘাটতি (REDs)।'
  ),
  subject: 'nutrition',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  objectives: [
    l(
      'Analyze the substrate oxidation crossover concept across increasing exercise intensities (% VO2max) and explain the allosteric regulation of carnitine palmitoyltransferase-1 (CPT-1) and pyruvate dehydrogenase (PDH).',
      'ব্যায়ামের তীব্রতা বৃদ্ধির সাথে সাথে সাবস্ট্রেট জারণের ক্রসওভার ধারণা বিশ্লেষণ করা এবং সিপিটি-১ ও পাইরুভেট ডিহাইড্রোজিনেজের অ্যালোস্টেরিক নিয়ন্ত্রণ ব্যাখ্যা করা।'
    ),
    l(
      'Formulate evidence-based pre-competition muscle glycogen supercompensation protocols and evaluate "train-low, compete-high" periodization on mitochondrial biogenesis (AMPK/PGC-1alpha).',
      'প্রতিযোগিতার পূর্বে পেশির গ্লাইকোজেন সুপারকম্পেনসেশন পরিকল্পনা প্রণয়ন করা এবং মাইটোকন্ড্রিয়াল রূপান্তরে "ট্রেন-লো, কমপ্লিট-হাই" কৌশল মূল্যায়ন করা।'
    ),
    l(
      'Explain the intestinal transport kinetics of dual-source carbohydrates (SGLT1 and GLUT5) to exceed the 60 g/h exogenous oxidation bottleneck during prolonged endurance events.',
      'দীর্ঘমেয়াদী সহনশীলতা খেলায় ঘণ্টায় ৬০ গ্রাম শর্করা জারণের সীমাবদ্ধতা কাটিয়ে উঠতে SGLT1 ও GLUT5 দ্বৈত-পরিবহন গতিবিদ্যা ব্যাখ্যা করা।'
    ),
    l(
      'Detail the molecular triggers of post-exercise myofibrillar protein synthesis (MPS), emphasizing the leucine threshold, Sestrin2-mTORC1 activation, and the muscle-full refractory phenomenon.',
      'ব্যায়াম-পরবর্তী মায়োফাইব্রিলার প্রোটিন সংশ্লেষের আণবিক সংকেত, লিউসিন থ্রেশহোল্ড, সেস্ট্রিন-২-এমটিওআরসি-১ এবং মাসল-ফুল রিফ্র্যাক্টরি পর্যায় বিস্তারিত ব্যাখ্যা করা।'
    ),
    l(
      'Critique the pharmacological bioenergetics of creatine monohydrate, beta-alanine, and caffeine alongside clinical screening for Relative Energy Deficiency in Sport (REDs).',
      'ক্রিয়েটিন মনোহাইড্রেট, বিটা-অ্যালানিন এবং ক্যাফেইনের শারীরবৃত্তীয় প্রভাব মূল্যায়নের পাশাপাশি রিলেটিভ এনার্জি ডেফিসিয়েন্সি ইন স্পোর্ট (REDs) ক্লিনিক্যাল স্ক্রিনিং পরিচালনা করা।'
    ),
  ],
  prerequisiteIds: [
    'topic.nutrition.energy-balance-tdee',
    'topic.nutrition.protein-quality-diaas-nitrogen-balance',
  ],
  relatedTopicIds: [
    'topic.nutrition.lifespan-pediatric-geriatric-nutrition',
    'topic.nutrition.macrominerals-bone-calcium-magnesium',
  ],
  references: [
    {
      id: 'ref-acsm-sports-nutrition-2016',
      authors: 'Thomas DT, Erdman KA, Burke LM',
      title: 'American College of Sports Medicine Joint Position Statement. Nutrition and Athletic Performance',
      organization: 'Medicine and Science in Sports and Exercise',
      year: 2016,
      url: 'https://doi.org/10.1249/MSS.0000000000000852',
      doi: '10.1249/MSS.0000000000000852',
    },
    {
      id: 'ref-brooks-crossover-1997',
      authors: 'Brooks GA, Mercier J',
      title: 'Balance of carbohydrate and lipid utilization during exercise: the "crossover" concept',
      organization: 'Journal of Applied Physiology',
      year: 1994,
      url: 'https://doi.org/10.1152/jappl.1994.76.6.2253',
      doi: '10.1152/jappl.1994.76.6.2253',
    },
    {
      id: 'ref-jeukendrup-carbs-2014',
      authors: 'Jeukendrup AE',
      title: 'A step towards personalized sports nutrition: carbohydrate intake during exercise',
      organization: 'Sports Medicine',
      year: 2014,
      url: 'https://doi.org/10.1007/s40279-014-0148-z',
      doi: '10.1007/s40279-014-0148-z',
    },
    {
      id: 'ref-morton-protein-timing-2018',
      authors: 'Morton RW, Murphy KT, McKellar SR, Schoenfeld BJ, Henselmans M, Helms E, et al.',
      title: 'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults',
      organization: 'British Journal of Sports Medicine',
      year: 2018,
      url: 'https://doi.org/10.1136/bjsports-2017-097608',
      doi: '10.1136/bjsports-2017-097608',
    },
    {
      id: 'ref-kreider-creatine-2017',
      authors: 'Kreider RB, Kalman DS, Antonio J, Ziegenfuss TN, Wildman R, Collins R, et al.',
      title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine',
      organization: 'Journal of the International Society of Sports Nutrition',
      year: 2017,
      url: 'https://doi.org/10.1186/s12970-017-0173-z',
      doi: '10.1186/s12970-017-0173-z',
    },
    {
      id: 'ref-ioc-reds-consensus-2023',
      authors: 'Mountjoy M, Ackerman KE, Bailey DM, Bouxsein ML, Burke LM, Costrini N, et al.',
      title: '2023 International Olympic Committee’s (IOC) consensus statement on Relative Energy Deficiency in Sport (REDs)',
      organization: 'British Journal of Sports Medicine',
      year: 2023,
      url: 'https://doi.org/10.1136/bjsports-2023-106994',
      doi: '10.1136/bjsports-2023-106994',
    },
  ],
  evidenceBySection: {
    introduction: ['ref-acsm-sports-nutrition-2016', 'ref-brooks-crossover-1997'],
    structure: ['ref-brooks-crossover-1997', 'ref-jeukendrup-carbs-2014'],
    mechanism: ['ref-brooks-crossover-1997', 'ref-jeukendrup-carbs-2014', 'ref-morton-protein-timing-2018'],
    integration: ['ref-morton-protein-timing-2018', 'ref-kreider-creatine-2017', 'ref-ioc-reds-consensus-2023'],
    practice: ['ref-acsm-sports-nutrition-2016', 'ref-jeukendrup-carbs-2014', 'ref-kreider-creatine-2017'],
    takeaways: ['ref-acsm-sports-nutrition-2016', 'ref-morton-protein-timing-2018', 'ref-ioc-reds-consensus-2023'],
  },
  levels: {
    foundation: {
      label: l('Foundation · Essential Concepts', 'ভিত্তি · প্রাথমিক ধারণা'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            'Biological Energetics of Physical Exercise & Substrate Flux',
            'শারীরিক ব্যায়ামের জৈবশক্তিবিজ্ঞান ও পুষ্টির জ্বালানি প্রবাহ'
          ),
          paragraphs: [
            l(
              'Every muscular contraction within the human body requires adenosine triphosphate (ATP), the universal chemical currency of cellular biological work [1]. However, intracellular stores of preformed ATP within skeletal muscle myocytes are extraordinarily limited, typically supporting less than two seconds of maximal, all-out physical exertion. To sustain locomotion, athletic performance, and vital cardiovascular-respiratory responses, skeletal muscle relies upon three interconnected metabolic energy systems: the immediate ATP-phosphocreatine (PCr) phosphagen system, the anaerobic glycolytic system, and mitochondrial oxidative phosphorylation [1, 2].',
              'মানবদেহে প্রতিটি পেশি সংকোচনের জন্য প্রয়োজন অ্যাডিনোসিন ট্রাইফসফেট (ATP), যা কোষীয় শারীরবৃত্তীয় কাজের সার্বজনীন রাসায়নিক মুদ্রা [১]। তবে কঙ্কাল পেশিকোষের মধ্যে জমা থাকা এটিপির পরিমাণ অত্যন্ত সীমিত, যা সর্বোচ্চ মাত্রার পরিশ্রমে দুই সেকেন্ডের বেশি শক্তি যোগাতে পারে না। শারীরিক গতিশীলতা, ক্রীড়া নৈপুণ্য এবং হৃদযন্ত্র ও ফুসফুসের কার্যকারিতা অব্যাহত রাখতে কঙ্কাল পেশি তিনটি আন্তঃসংযুক্ত বিপাকীয় শক্তি ব্যবস্থার ওপর নির্ভর করে: তাৎক্ষণিক এটিপি-ফসফোক্রিয়েটিন (PCr) ব্যবস্থা, অবাত গ্লাইকোলাইটিক ব্যবস্থা এবং মাইটোকন্ড্রিয়াল সবাত অক্সিডেটিভ ফসফোরাইলেশন [১, ২]।'
            ),
            l(
              'Sports nutrition is the systematic, evidence-based science of matching dietary macronutrients, micronutrients, and hydration to the precise bioenergetic demands of physical training and competitive athletics [1]. Far from being a static diet, athletic nutrition is dynamic and periodized, adapting daily caloric intake and nutrient composition to match the intensity, duration, and metabolic specificity of each training phase. An understanding of how the body oxidizes carbohydrates, lipids, and amino acids under various workloads enables athletes to delay neuromuscular fatigue, accelerate post-exercise recovery, and protect somatic lean tissue [1, 2].',
              'ক্রীড়া পুষ্টি হলো একটি নিয়মতান্ত্রিক ও প্রমাণভিত্তিক বিজ্ঞান যা শারীরিক প্রশিক্ষণ এবং প্রতিযোগিতামূলক খেলার নিখুঁত জৈবশক্তি চাহিদার সাথে খাদ্যের শর্করা, চর্বি, আমিষ ও পানীয়ের সমন্বয় সাধন করে [১]। এটি কোনো স্থির খাদ্যতালিকা নয়, বরং একটি গতিশীল ও পর্যায়ক্রমিক (periodized) বিজ্ঞান, যা প্রশিক্ষণের তীব্রতা, সময়কাল এবং বিপাকীয় ধরনের সাথে খাদ্যের ক্যালরি ও পুষ্টি উপাদানকে অভিযোজিত করে। বিভিন্ন শারীরিক পরিশ্রমে শরীর কীভাবে কার্বোহাইড্রেট, লিপিড এবং অ্যামিনো অ্যাসিড জারণ করে তা অনুধাবন করার মাধ্যমে একজন ক্রীড়াবিদ পেশির ক্লান্তি দূর করতে, দ্রুত আরোগ্য লাভ করতে এবং দেহের পেশি ভর সুরক্ষিত রাখতে পারেন [১, ২]।'
            ),
            l(
              'A foundational milestone in exercise physiology is the substrate oxidation crossover concept [2]. At rest and during low-intensity physical activity (such as gentle walking below 50% of maximal oxygen consumption, VO2max), circulating free fatty acids and intramuscular triglycerides provide the overwhelming majority of ATP through mitochondrial beta-oxidation. As exercise intensity progressively accelerates toward moderate and vigorous thresholds (65% to 85% VO2max), muscle glycogenolysis and circulating blood glucose become the mandatory, dominant fuel sources [2]. Carbohydrates become indispensable because their ATP yield per liter of consumed oxygen is approximately 8% to 11% higher than that of lipid oxidation [1, 2].',
              'ব্যায়াম শারীরবৃত্তির একটি মৌলিক স্তম্ভ হলো সাবস্ট্রেট জারণের ক্রসওভার ধারণা (Crossover Concept) [২]। বিশ্রামের সময় বা মৃদু শারীরিক পরিশ্রমে (যেমন সর্বোচ্চ অক্সিজেন গ্রহণের ৫০% বা VO2max-এর নিচে হাঁটা) রক্তে ভাসমান মুক্ত ফ্যাটি অ্যাসিড এবং পেশির ট্রাইগ্লিসারাইড মাইটোকন্ড্রিয়াল বিটা-অক্সিডেশনের মাধ্যমে সিংহভাগ এটিপি সরবরাহ করে। কিন্তু ব্যায়ামের তীব্রতা যখন মাঝারি থেকে তীব্র পর্যায়ে (৬৫% থেকে ৮৫% VO2max) পৌঁছায়, তখন পেশির সঞ্চিত গ্লাইকোজেন ও রক্তের গ্লুকোজই প্রধান এবং অপরিহার্য জ্বালানিতে পরিণত হয় [২]। এর মূল কারণ হলো প্রতি লিটার অক্সিজেন ব্যবহারের বিপরীতে কার্বোহাইড্রেট লিপিডের তুলনায় প্রায় ৮% থেকে ১১% বেশি এটিপি উৎপাদন করতে পারে [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Structural Reservoirs: Muscle Glycogen, Adipose Triglycerides & Myofibrils',
            'দেহের গঠনগত শক্তির ভাণ্ডার: পেশি গ্লাইকোজেন, অ্যাডিপোজ ট্রাইগ্লিসারাইড ও মায়োফাইব্রিল'
          ),
          paragraphs: [
            l(
              'Endogenous energy substrates are sequestered within structurally distinct anatomical and cellular compartments [1]. The largest glycogen reservoir resides within skeletal muscle tissue, which stores approximately 300 to 500 grams of glycogen in a trained 70 kg individual, expandable up to 700 to 900 grams following specialized supercompensation protocols [1, 3]. Skeletal muscle glycogen is chemically trapped within myocytes because muscle tissue lacks glucose-6-phosphatase; consequently, muscle glycogen cannot be exported into systemic circulation to maintain euglycemia but is dedicated solely to fueling the contracting myocyte [2, 3].',
              'দেহের অভ্যন্তরীণ শক্তির ভাণ্ডারগুলো নির্দিষ্ট শারীরিক অঙ্গ ও কোষীয় প্রকোষ্ঠে সংরক্ষিত থাকে [১]। গ্লাইকোজেনের সবচেয়ে বড় আধার হলো কঙ্কাল পেশি, যা ৭০ কেজি ওজনের একজন প্রশিক্ষণপ্রাপ্ত ক্রীড়াবিদের দেহে প্রায় ৩০০ থেকে ৫০০ গ্রাম গ্লাইকোজেন সঞ্চয় করে, যা বিশেষ সুপারকম্পেনসেশন কৌশলের মাধ্যমে ৭০০ থেকে ৯০০ গ্রাম পর্যন্ত বাড়ানো সম্ভব [১, ৩]। পেশিকোষে গ্লুকোজ-৬-ফসফেটেজ এনজাইম না থাকায় পেশির গ্লাইকোজেন ভেঙে রক্তে মুক্ত গ্লুকোজ সরবরাহ করতে পারে না; ফলে এই শক্তি কেবল সংশ্লিষ্ট সংকোচনশীল পেশিকোষের নিজস্ব জ্বালানি হিসেবেই ব্যবহৃত হয় [২, ৩]।'
            ),
            l(
              'In contrast, the liver serves as the systemic glucoregulatory reservoir, containing approximately 80 to 110 grams of glycogen in the fed state [1]. Hepatic glycogen phosphorylase and glucose-6-phosphatase work in concert to dephosphorylate glucose, exporting free monosaccharides into the hepatic veins to preserve normoglycemia (4.0 to 5.5 mmol/L) and nourish the obligate glucose-dependent central nervous system [1, 3]. Adipose tissue, by comparison, provides a virtually limitless structural reservoir of energy, housing tens of thousands of kilocalories as triacylglycerol droplets within unilocular adipocytes [1, 2].',
              'বিপরীতে, যকৃত দেহের সামগ্রিক রক্তের গ্লুকোজ নিয়ন্ত্রক আধার হিসেবে কাজ করে, যা স্বাভাবিক অবস্থায় প্রায় ৮০ থেকে ১১০ গ্রাম গ্লাইকোজেন জমা রাখে [১]। যকৃতের গ্লাইকোজেন ফসফোরাইলেজ এবং গ্লুকোজ-৬-ফসফেটেজ এনজাইম যৌথভাবে গ্লুকোজ থেকে ফসফেট মুক্ত করে তা হেপাটিক শিরার মাধ্যমে রক্তপ্রবাহে ছেড়ে দেয়, যা রক্তের স্বাভাবিক মাত্রা (৪.০ থেকে ৫.৫ মিলিমিটার/লিটার) বজায় রাখে এবং কেন্দ্রীয় স্নায়ুতন্ত্রের মস্তিষ্কের খাদ্য নিশ্চিত করে [১, ৩]। অন্যদিকে, অ্যাডিপোজ টিস্যু হাজার হাজার কিলোক্যালরি চর্বি ট্রাইগ্লিসারাইড হিসেবে জমা রাখে, যা কার্যত এক সীমাহীন শক্তির ভাণ্ডার [১, ২]।'
            ),
            l(
              'Skeletal muscle myofibrils—consisting of the contractile sarcomeric proteins actin and myosin—represent the mechanical machinery of physical work [4]. Although amino acids can undergo transamination and oxidation through the tricarboxylic acid (TCA) cycle to provide 5% to 10% of total energy during prolonged, glycogen-depleted exercise, structural myofibrillar proteins are not designated energy stores [1, 4]. Sparing myofibrillar architecture from catabolic proteolysis through timely carbohydrate and protein nutrition is a paramount objective of athletic periodization [4].',
              'কঙ্কাল পেশির মায়োফাইব্রিল—যা সংকোচনশীল সারকোমিয়ার প্রোটিন অ্যাক্টিন ও মায়োসিন দ্বারা গঠিত—শারীরিক কাজের যান্ত্রিক চালিকাশক্তি [৪]। দীর্ঘমেয়াদী ও গ্লাইকোজেন-শূন্য ব্যায়ামে অ্যামিনো অ্যাসিড ট্রান্সঅ্যামিনেশন ও টিসিএ চক্রের মাধ্যমে মোট শক্তির ৫% থেকে ১০% যোগান দিতে পারে বটে, তবে এই কাঠামোগত মায়োফাইব্রিলার প্রোটিন কোনো নির্দিষ্ট শক্তির সঞ্চয় নয় [১, ৪]। সময়োপযোগী কার্বোহাইড্রেট ও প্রোটিন গ্রহণের মাধ্যমে পেশির এই সংকোচনশীল গঠনকে ভেঙে যাওয়া (ক্যাটাবলিজম) থেকে রক্ষা করাই ক্রীড়া পুষ্টির অন্যতম প্রধান লক্ষ্য [৪]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'The Crossover Concept & Intracellular Substrate Partitioning',
            'ক্রসওভার ধারণা ও কোষীয় জ্বালানি নির্বাচনের জৈবিক প্রক্রিয়া'
          ),
          paragraphs: [
            l(
              'The molecular mechanism governing the crossover from lipid to carbohydrate oxidation is mediated by intracellular allosteric effectors, enzyme phosphorylation cascades, and recruitment of motor units [2]. During low-intensity exertion (under 50% VO2max), slow-twitch Type I oxidative muscle fibers are selectively recruited. These fibers feature high capillary density, abundant myoglobin, and dense mitochondrial networks optimized for the slow, high-yield oxidation of long-chain fatty acids imported via carnitine palmitoyltransferase-1 (CPT-1) [2].',
              'লিপিড থেকে কার্বোহাইড্রেট জারণে রূপান্তরের আণবিক প্রক্রিয়াটি নিয়ন্ত্রিত হয় কোষের ভেতরের অ্যালোস্টেরিক উপাদান, এনজাইমের ফসফোরাইলেশন এবং পেশিতন্তুর সক্রিয়করণের মাধ্যমে [২]। কম তীব্রতার পরিশ্রমে (৫০% VO2max-এর নিচে) মূলত ধীর গতির টাইপ-১ অক্সিডেটিভ পেশিতন্তু কাজ করে। এই তন্তুগুলোতে প্রচুর রক্তনালি, মায়োগ্লোবিন এবং ঘন মাইটোকন্ড্রিয়া থাকে, যা কার্নিটিন পালমিটয়েলট্রান্সফারেজ-১ (CPT-1) দিয়ে ফ্যাটি অ্যাসিড প্রবেশ করিয়ে ধীর কিন্তু কার্যকরভাবে শক্তি উৎপাদন করে [২]।'
            ),
            l(
              'As exercise intensity increases above 65% VO2max, the central nervous system recruits fast-twitch Type IIa and IIx glycolytic muscle fibers to generate higher force velocities [2]. Concurrently, sympathetic nervous system activation floods the circulation with epinephrine. Epinephrine binds myocyte beta-2 adrenergic receptors, activating adenylyl cyclase to synthesize cyclic adenosine monophosphate (cAMP) [1, 2]. Cyclic AMP activates protein kinase A (PKA), which phosphorylates and activates glycogen phosphorylase kinase, unleashing an explosive cascade of glycogenolysis to generate glucose-1-phosphate [2].',
              'ব্যায়ামের তীব্রতা যখন ৬৫% VO2max অতিক্রম করে, তখন স্নায়ুতন্ত্র দ্রুত সংকোচনশীল টাইপ-২এ এবং টাইপ-২এক্স গ্লাইকোলাইটিক পেশিতন্তুকে কাজে লাগায় [২]। একই সাথে সহানুভূতিশীল (সিমপ্যাথেটিক) স্নায়ু রক্তে অ্যাড্রিনালিন বা এপিনেফ্রিন হরমোন ক্ষরণ বাড়িয়ে দেয়। এপিনেফ্রিন পেশিকোষের বিটা-২ রিসেপ্টরে যুক্ত হয়ে সাইক্লিক এএমপি (cAMP) তৈরি করে [১, ২]। এই সংকেত প্রোটিন কাইনেজ এ (PKA) সক্রিয় করার মাধ্যমে গ্লাইকোজেন ফসফোরাইলেজ এনজাইম চালু করে এবং চোখের পলকে গ্লাইকোজেন ভেঙে গ্লুকোজ-১-ফসফেটে রূপান্তর করে শক্তির প্রবল প্রবাহ তৈরি করে [২]।'
            ),
            l(
              'This massive acceleration in glycolytic flux generates abundant pyruvate and acetyl-CoA, elevating cytosolic malonyl-CoA and downregulating CPT-1 activity [2]. Consequently, mitochondrial long-chain fatty acid uptake is allosterically inhibited, forcibly suppressing lipid oxidation precisely when ATP production rates must match the intense cross-bridge cycling of high-velocity exercise [2]. The crossover point thus represents a biological necessity: shifting reliance to the fastest, most oxygen-efficient bioenergetic pathway available to contracting human muscle [1, 2].',
              'গ্লাইকোলাইসিসের এই দ্রুতগতির ফলে প্রচুর পাইরুভেট ও অ্যাসিটাইল-কোএ তৈরি হয়, যা সাইটোসলে ম্যালোনাইল-কোএ বাড়িয়ে দেয় এবং সিপিটি-১ (CPT-1) এনজাইমকে অবদমিত করে [২]। এর ফলে মাইটোকন্ড্রিয়ার ভেতরে দীর্ঘ চেইনের ফ্যাটি অ্যাসিড প্রবেশ বন্ধ হয়ে যায় এবং চর্বির জারণ স্বতঃস্ফূর্তভাবে কমে যায়, ঠিক যে মুহূর্তে দ্রুত পেশি সংকোচনের জন্য প্রচুর এটিপি প্রয়োজন [২]। সুতরাং, ক্রসওভার পয়েন্টটি কোনো কাকতালীয় ঘটনা নয়; বরং এটি পেশির দ্রুততম ও সর্বাধিক অক্সিজেন-সাশ্রয়ী শক্তিব্যবস্থাকে বেছে নেওয়ার এক নিখুঁত জৈবিক কৌশল [১, ২]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'Systems Integration: Neuroendocrine, Cardiovascular & Gastrointestinal Dynamics',
            'সিস্টেমিক সমন্বয়: নিউরোএন্ডোক্রাইন, সংবহন ও পরিপাকতন্ত্রের পারস্পরিক সম্পর্ক'
          ),
          paragraphs: [
            l(
              'Sports bioenergetics does not function in isolation within skeletal muscle; it requires seamless integration across the cardiovascular, neuroendocrine, and gastrointestinal systems [1]. As exercise begins, sympathetic tone suppresses pancreatic beta-cell insulin secretion while stimulating alpha-cell glucagon release [1, 2]. The resulting low insulin-to-glucagon ratio is essential: it removes the physiological brake on hepatic glycogenolysis and adipose hormone-sensitive lipase (HSL), allowing endogenous fuels to enter the circulation without inducing hypoglycemia [1].',
              'ক্রীড়া জৈবশক্তিবিজ্ঞান কঙ্কাল পেশির মধ্যে এককভাবে কাজ করে না; এর জন্য কার্ডিওভাসকুলার, নিউরোএন্ডোক্রাইন এবং গ্যাস্ট্রোইনটেস্টাইনাল সিস্টেমের নিবিড় সমন্বয় প্রয়োজন [১]। ব্যায়াম শুরুর সাথে সাথে সিমপ্যাথেটিক স্নায়ু অগ্ন্যাশয়ের বিটা কোষ থেকে ইনসুলিন ক্ষরণ কমিয়ে দেয় এবং আলফা কোষ থেকে গ্লুকাগন ক্ষরণ বাড়িয়ে দেয় [১, ২]। রক্তে ইনসুলিনের চেয়ে গ্লুকাগনের এই আধিক্য অত্যন্ত জরুরি: এটি যকৃতের গ্লাইকোজেন ভাঙন এবং চর্বিকোষের হরমোন-সেনসিটিভ লাইপেজ (HSL) সক্রিয় রাখতে সাহায্য করে, যার ফলে রক্তে শর্করার মাত্রা না কমিয়েই শক্তি সংবহনে প্রবেশ করতে পারে [১]।'
            ),
            l(
              'Simultaneously, the cardiovascular system undergoes dramatic hemodynamic redistribution. Cardiac output increases up to five- to seven-fold in elite endurance athletes, surging from 5 L/min at rest to over 35 L/min at VO2max [1]. Local metabolic vasodilation diverts up to 85% of total cardiac output to contracting skeletal muscle beds, while splanchnic blood flow to the stomach, small intestine, and kidneys declines by 50% to 80% [1, 3]. This splanchnic hypoperfusion poses a profound physiological challenge for the intestinal absorption of fluid and ingested sports carbohydrates [3].',
              'একই সময়ে রক্ত সংবহনতন্ত্রে নাটকীয় পরিবর্তন ঘটে। অভিজাত ক্রীড়াবিদদের হৃদযন্ত্রের রক্তের নির্গমন (কার্ডিয়াক আউটপুট) বিশ্রামকালীন প্রতি মিনিটে ৫ লিটার থেকে বেড়ে সর্বোচ্চ পরিশ্রমে ৩৫ লিটার পর্যন্ত পৌঁছাতে পারে [১]। বিপাকীয় রক্তনালি প্রসারণের মাধ্যমে এই বিশাল রক্তের প্রায় ৮৫% সরাসরি কার্যরত কঙ্কাল পেশিতে পাঠিয়ে দেওয়া হয়, যার ফলে পাকস্থলী, ক্ষুদ্রান্ত্র ও বৃক্কে রক্তপ্রবাহ ৫০% থেকে ৮০% পর্যন্ত কমে যায় [১, ৩]। পরিপাকতন্ত্রে রক্তের এই তীব্র ঘাটতি ব্যায়ামকালীন পানীয় ও পুষ্টি শোষণের ক্ষেত্রে একটি কঠিন শারীরবৃত্তীয় প্রতিবন্ধকতা সৃষ্টি করে [৩]।'
            ),
            l(
              'To avoid gastrointestinal distress, cramping, and osmotic diarrhea during prolonged athletic events, intra-exercise carbohydrate solutions must utilize dual-source transport mechanisms [3]. Monosaccharide absorption across the intestinal brush border relies on specific transport proteins: sodium-glucose cotransporter 1 (SGLT1) for glucose and galactose, and glucose transporter 5 (GLUT5) for fructose [3]. When athletes consume solely glucose, SGLT1 saturates at approximately 60 grams per hour. Co-ingesting fructose recruits the independent, non-competing GLUT5 transporter, escalating exogenous carbohydrate absorption and oxidation rates to 90 to 120 grams per hour while preserving splanchnic comfort [1, 3].',
              'দীর্ঘমেয়াদী খেলায় পেটের পীড়া, কামড়ানো এবং ডায়রিয়া এড়াতে ব্যায়ামকালীন কার্বোহাইড্রেট পানীয়কে দ্বৈত পরিবহন (Dual-Source) মেকানিজম ব্যবহার করতে হয় [৩]। অন্ত্রের ব্রাশ-বর্ডার ঝিল্লিতে মনোস্যাকারাইড শোষণ নির্দিষ্ট প্রোটিনের মাধ্যমে ঘটে: গ্লুকোজের জন্য সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1) এবং ফ্রুক্টোজের জন্য গ্লুকোজ ট্রান্সপোর্টার ৫ (GLUT5) [৩]। কেবল গ্লুকোজ গ্রহণ করলে SGLT1 ঘণ্টায় প্রায় ৬০ গ্রামে সম্পৃক্ত হয়ে যায়। কিন্তু সাথে ফ্রুক্টোজ যোগ করলে তা স্বতন্ত্র GLUT5 পথ ব্যবহার করে, যা কার্বোহাইড্রেট শোষণের হার ঘণ্টায় ৯০ থেকে ১২০ গ্রাম পর্যন্ত বাড়িয়ে দেয় এবং পেটের অস্বস্তি কমায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'Nutritional Periodization, Carbohydrate Loading & Recovery Windows',
            'পুষ্টির পর্যায়ক্রম, কার্বোহাইড্রেট লোডিং ও আরোগ্যের খাদ্য কৌশল'
          ),
          paragraphs: [
            l(
              'Nutritional periodization is the strategic manipulation of energy intake, macronutrient ratios, and meal timing across different microcycles, mesocycles, and macrocycles of an athletic training year [1]. Rather than consuming an identical high-carbohydrate diet every day, athletes adjust fuel availability according to the specific training goal of each session. High-intensity interval workouts and race rehearsals require full carbohydrate availability (6 to 10 g/kg/day) to sustain maximal glycolytic flux, whereas low-intensity aerobic base sessions can be conducted under deliberately low carbohydrate availability ("train-low") to amplify mitochondrial transcriptional signaling [1, 2].',
              'পুষ্টির পর্যায়ক্রম (Nutritional Periodization) হলো ক্রীড়া বছরের বিভিন্ন প্রশিক্ষণ পর্বে ক্যালরি, পুষ্টির অনুপাত এবং খাবারের সময়ের কৌশলগত নিয়ন্ত্রণ [১]। প্রতিদিন একই ধরনের উচ্চ-শর্করাযুক্ত খাবার না খেয়ে ক্রীড়াবিদরা প্রতিটি সেশনের উদ্দেশ্যের ওপর নির্ভর করে খাদ্যের জ্বালানি নির্ধারণ করেন। উচ্চ-তীব্রতার স্প্রিন্ট বা প্রতিযোগিতার আগের সেশনে সর্বোচ্চ শক্তির জন্য পর্যাপ্ত শর্করা (দৈনিক প্রতি কেজিতে ৬ থেকে ১০ গ্রাম) প্রয়োজন, যেখানে মৃদু দীর্ঘ দূরত্বের বেস প্রশিক্ষণে ইচ্ছাকৃতভাবে কম শর্করা ("ট্রেন-লো") রেখে মাইটোকন্ড্রিয়ার বিকাশকে উদ্দীপ্ত করা হয় [১, ২]।'
            ),
            l(
              'For competitive endurance events exceeding 90 minutes in duration, pre-event muscle glycogen supercompensation ("carbohydrate loading") provides an established competitive advantage, delaying fatigue by approximately 20% and improving time-trial performance by 2% to 3% [1, 3]. Modern evidence-based protocols have abandoned the exhausting, extreme depletion phases of the 1960s. Instead, current guidelines recommend 36 to 48 hours of exercise taper combined with an intake of 8 to 12 grams of carbohydrate per kilogram of body mass per day, utilizing low-fiber, easily digestible starches to achieve maximal glycogen storage without gastrointestinal fullness [1, 3].',
              '৯০ মিনিটের বেশি সময় ধরে চলা প্রতিযোগিতামূলক সহনশীলতা খেলায় (যেমন ম্যারাথন বা ট্রায়াথলন) প্রতিযোগিতার পূর্বে পেশির গ্লাইকোজেন সুপারকম্পেনসেশন বা "কার্বোহাইড্রেট লোডিং" ক্লান্তি প্রায় ২০% পিছিয়ে দেয় এবং চূড়ান্ত সময় ২% থেকে ৩% পর্যন্ত উন্নত করে [১, ৩]। আধুনিক বিজ্ঞান ১৯৬০-এর দশকের চরম কষ্টদায়ক গ্লাইকোজেন শূন্যকরণ পদ্ধতি বর্জন করেছে। বর্তমান নির্দেশিকা অনুসারে, প্রতিযোগিতার ৩৬ থেকে ৪৮ ঘণ্টা পূর্বে শারীরিক পরিশ্রম কমিয়ে দৈনিক প্রতি কেজি ওজনে ৮ থেকে ১২ গ্রাম কম আঁশযুক্ত সহজপাচ্য শর্করা গ্রহণ করলেই পেশির সর্বোচ্চ গ্লাইকোজেন সঞ্চয় নিশ্চিত হয় [১, ৩]।'
            ),
            l(
              'The post-exercise recovery window encompasses rehydration, glycogen resynthesis, and muscle tissue repair [1, 4]. Consuming 1.0 to 1.2 grams of carbohydrate per kilogram per hour during the first four hours after exhaustive exercise maximizes glycogen synthase activity, which is sensitized by glycogen depletion and exercise-induced translocation of GLUT4 transporters to the sarcolemma [1]. Concurrently, ingesting 20 to 40 grams of high-quality protein providing at least 2.5 to 3.0 grams of leucine maximally triggers muscle protein synthesis (MPS) via the mTORC1 signaling pathway, transitioning the myocyte from a negative to a positive net protein balance [4].',
              'ব্যায়াম-পরবর্তী আরোগ্য পর্বে পানিশূন্যতা পূরণ, গ্লাইকোজেন পুনর্গঠন এবং পেশি মেরামতের ওপর জোর দেওয়া হয় [১, ৪]। কঠোর অনুশীলনের পর প্রথম চার ঘণ্টায় প্রতি ঘণ্টায় কেজি প্রতি ১.০ থেকে ১.২ গ্রাম শর্করা গ্রহণ করলে গ্লাইকোজেন সিন্থেজ এনজাইম দ্রুত কাজ করে, কারণ এ সময় পেশিকোষে GLUT4 পরিবাহক সক্রিয় থাকে [১]। একই সাথে ২০ থেকে ৪০ গ্রাম উন্নতমানের প্রোটিন (যাতে কমপক্ষে ২.৫ থেকে ৩.০ গ্রাম লিউসিন থাকে) গ্রহণ করলে mTORC1 পথ সক্রিয় হয়ে পেশি প্রোটিন সংশ্লেষ (MPS) সর্বোচ্চ মাত্রায় পৌঁছায়, যা পেশির ক্ষয় রোধ করে নতুন পেশি গঠনে সহায়তা করে [৪]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Core Principles of Exercise Bioenergetics & Sports Dietetics',
            'ব্যায়ামের জৈবশক্তিবিজ্ঞান ও ক্রীড়া পুষ্টির মৌলিক শিক্ষণীয় সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'Exercise bioenergetics is dictated by training intensity and duration: the crossover concept establishes that fat oxidation predominates at low intensities, but carbohydrate becomes the obligatory fuel as intensity surpasses 65% VO2max due to Type II fiber recruitment and adrenergic glycogenolytic flux [1, 2]. Glycogen reserves in muscle and liver are strictly limited and must be systematically protected and replenished through tailored nutritional periodization [1, 3].',
              'ব্যায়ামের জৈবশক্তিবিজ্ঞান নির্ধারিত হয় প্রশিক্ষণের তীব্রতা ও সময়কাল দ্বারা: ক্রসওভার ধারণা প্রমাণ করে যে কম তীব্রতায় চর্বি প্রধান জ্বালানি হলেও, তীব্রতা ৬৫% VO2max ছাড়িয়ে গেলে টাইপ-২ পেশিতন্তু ও অ্যাড্রিনালিনের কারণে শর্করাই একমাত্র নির্ভরযোগ্য জ্বালানিতে পরিণত হয় [১, ২]। পেশি ও যকৃতের গ্লাইকোজেন ভাণ্ডার সীমিত হওয়ায় পুষ্টির পর্যায়ক্রমের মাধ্যমে তা পরিকল্পিতভাবে সংরক্ষণ ও পূরণ করতে হয় [১, ৩]।'
            ),
            l(
              'Exogenous carbohydrate feeding during prolonged events (>2.5 hours) demands dual-transporter strategies (glucose + fructose in a 2:1 or 1:0.8 ratio) to bypass SGLT1 intestinal saturation and achieve oxidation rates up to 90 to 120 g/h without gastrointestinal distress [1, 3]. In resistance and recovery settings, achieving the leucine trigger threshold (~3.0 g leucine per meal) across evenly spaced feeding intervals (every 3 to 4 hours) is essential to overcome the post-exercise muscle-full refractory period and support somatic muscular adaptation [4].',
              'দীর্ঘমেয়াদী খেলায় (>২.৫ ঘণ্টা) অন্ত্রের SGLT1 সম্পৃক্ততা কাটিয়ে ঘণ্টায় ৯০ থেকে ১২০ গ্রাম শর্করা শোষণ করতে দ্বৈত পরিবহন (গ্লুকোজ + ফ্রুক্টোজ ২:১ বা ১:০.৮ অনুপাতে) ব্যবহার করা অপরিহার্য [১, ৩]। শক্তি প্রশিক্ষণ ও আরোগ্যের জন্য প্রতি ৩-৪ ঘণ্টা পরপর লিউসিন থ্রেশহোল্ড (~৩.০ গ্রাম) স্পর্শ করে এমন উন্নত প্রোটিন গ্রহণ পেশির রিফ্র্যাক্টরি পর্যায় কাটিয়ে সর্বোত্তম বিকাশ নিশ্চিত করে [৪]।'
            ),
            l(
              'Clinical vigilance is required to identify Relative Energy Deficiency in Sport (REDs), ensuring athletes do not compromise bone mineral density, endocrine health, or immune resilience through persistent low energy availability [1, 6]. Sports nutrition is ultimately the precise alignment of biochemistry with human movement, translating cellular kinetics into sustained athletic health and performance excellence [1, 4].',
              'ক্রীড়াবিদদের মধ্যে আপেক্ষিক শক্তি ঘাটতি (REDs) শনাক্ত করতে সর্বদা সতর্ক থাকতে হবে, যাতে দীর্ঘস্থায়ী শক্তির অভাবে তাদের হাড়ের ঘনত্ব, হরমোনের ভারসাম্য বা রোগপ্রতিরোধ ক্ষমতা ক্ষতিগ্রস্ত না হয় [১, ৬]। ক্রীড়া পুষ্টি হলো মূলত শারীরিক গতির সাথে কোষীয় জৈবরসায়নের এক নিখুঁত মেলবন্ধন, যা মানুষের দীর্ঘমেয়াদী সুস্থতা ও ক্রীড়াক্ষেত্রে শ্রেষ্ঠত্ব নিশ্চিত করে [১, ৪]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic · Biochemical Mechanics', 'একাডেমিক · জৈবরাসায়নিক প্রক্রিয়া'),
      sections: [
        {
          id: 'introduction',
          heading: l(
            'Enzymatic Control of Phosphagen & Glycolytic Energy Flux',
            'ফসফেজেন ও গ্লাইকোলাইটিক শক্তিপ্রবাহের এনজাইমীয় নিয়ন্ত্রণ'
          ),
          paragraphs: [
            l(
              'At the initiation of sudden, maximal skeletal muscle contraction, cellular energy homeostasis is preserved by the creatine kinase (CK) Lohmann reaction [1, 5]. Creatine kinase catalyzes the reversible transphosphorylation between phosphocreatine (PCr) and adenosine diphosphate (ADP): PCr + ADP + H+ <=> Creatine + ATP. In human resting skeletal muscle, the cytosolic PCr concentration is approximately 80 to 85 mmol/kg dry weight (dw), whereas ATP concentration is tightly maintained at 24 to 26 mmol/kg dw [5]. The near-equilibrium nature of the Lohmann reaction and the extraordinarily high catalytic activity of cytosolic CK allow ATP levels to remain virtually constant during the initial 5 to 8 seconds of sprint exercise, buffering cellular free energy [1, 5].',
              'হঠাৎ তীব্র পেশি সংকোচনের শুরুতে কোষীয় শক্তির ভারসাম্য রক্ষা করে ক্রিয়েটিন কাইনেজ (CK) লোম্যান বিক্রিয়া [১, ৫]। ক্রিয়েটিন কাইনেজ ফসফোক্রিয়েটিন (PCr) এবং অ্যাডিনোসিন ডাইফসফেটের (ADP) মধ্যে ফসফেটের উভমুখী স্থানান্তর ঘটায়: PCr + ADP + H+ <=> Creatine + ATP। মানব কঙ্কাল পেশিতে বিশ্রামকালীন সাইটোসলে পিসিআরের ঘনত্ব প্রায় ৮০ থেকে ৮৫ মিলিমিটার/কেজি (শুষ্ক ওজন), যেখানে এটিপির মাত্রা ২৪ থেকে ২৬ মিলিমিটার/কেজিতে স্থির থাকে [৫]। ক্রিয়েটিন কাইনেজের উচ্চ কার্যক্ষমতা স্প্রিন্ট শুরুর প্রথম ৫ থেকে ৮ সেকেন্ডে এটিপির মাত্রা নিখুঁতভাবে অপরিবর্তিত রাখে [১, ৫]।'
            ),
            l(
              'As phosphocreatine stores become depleted, adenylate kinase (myokinase) catalyzes the dismutation of two ADP molecules into one ATP and one adenosine monophosphate (AMP): 2 ADP <=> ATP + AMP [1, 2]. The minute rise in cytosolic free AMP acts as an ultra-sensitive allosteric amplifier. Free AMP binds allosterically to glycogen phosphorylase b, shifting it into the active R-state even in the absence of covalent phosphorylation [2]. Furthermore, AMP activates 5\'-AMP-activated protein kinase (AMPK), the master cellular fuel sensor, which phosphorylates downstream targets to promote GLUT4 translocation and accelerate glycolytic ATP generation [1, 2].',
              'ফসফোক্রিয়েটিন শেষ হতে থাকলে অ্যাডিনাইলেট কাইনেজ (মায়োকাইনেজ) দুটি এডিপি অণুকে ভেঙে একটি এটিপি এবং একটি অ্যাডিনোসিন মনোফসফেট (AMP) তৈরি করে: 2 ADP <=> ATP + AMP [১, ২]। সাইটোসলে মুক্ত এএমপির সামান্য বৃদ্ধি কোষের জন্য অত্যন্ত সংবেদনশীল সংকেত হিসেবে কাজ করে। এই এএমপি গ্লাইকোজেন ফসফোরাইলেজ বি-কে সক্রিয় আর-অবস্থায় রূপান্তর করে গ্লাইকোজেন ভাঙন ত্বরান্বিত করে [২]। তাছাড়া, এএমপি কোষের প্রধান শক্তি নির্দেশক এএমপিকে (AMPK) সক্রিয় করে, যা পেশির ঝিল্লিতে GLUT4 পরিবাহক বৃদ্ধি করে এবং গ্লাইকোলাইসিসের গতি বাড়ায় [১, ২]।'
            ),
            l(
              'Simultaneously, the flux-generating glycolytic enzyme phosphofructokinase-1 (PFK-1) is regulated by opposing allosteric effectors [2]. While high intracellular ATP and citrate exert allosteric inhibition on PFK-1 to prevent wasteful carbon flux, elevations in ADP, AMP, inorganic phosphate (Pi), and fructose-2,6-bisphosphate potently relieve this inhibition [2]. This ensures that as muscular cross-bridge cycling hydrolyzes ATP, the accumulation of ATP hydrolysis byproducts instantly releases the brakes on PFK-1, driving glycolytic throughput up to 100-fold above resting rates within fractions of a second [1, 2].',
              'একই সময়ে গ্লাইকোলাইসিসের গতি নিয়ন্ত্রক এনজাইম ফসফোফ্রুক্টোকাইনেজ-১ (PFK-1) বিপরীতমুখী উপাদান দ্বারা নিয়ন্ত্রিত হয় [২]। কোষের অতিরিক্ত এটিপি ও সাইট্রেট PFK-1 এনজাইমকে বাধা দিলেও, ব্যায়ামের সময় এডিপি, এএমপি, অজৈব ফসফেট (Pi) এবং ফ্রুক্টোজ-২,৬-বিসফসফেটের বৃদ্ধি সেই বাধা তৎক্ষণাৎ দূর করে দেয় [২]। এর ফলে পেশির সংকোচন শুরু হওয়া মাত্রই PFK-1 মুক্ত হয়ে যায় এবং গ্লাইকোলাইসিসের গতি পলকের মধ্যে বিশ্রামকালীন হারের চেয়ে ১০০ গুণ পর্যন্ত বৃদ্ধি পায় [১, ২]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Mitochondrial Cristae Architecture & Transporter Topology',
            'মাইটোকন্ড্রিয়াল ক্রিস্টির গঠন ও আণবিক পরিবাহক বিন্যাস'
          ),
          paragraphs: [
            l(
              'Skeletal muscle oxidative capacity is governed by the structural architecture of the mitochondrial reticulum [1, 2]. Rather than existing as isolated bean-shaped organelles, skeletal muscle mitochondria form an interconnected, continuous tubular network comprising two distinct morphological subfractions: subsarcolemmal (SS) mitochondria situated immediately beneath the plasma membrane, and intermyofibrillar (IMF) mitochondria embedded directly adjacent to contractile myofibrils and the sarcoplasmic reticulum [2]. Endurance exercise training dramatically increases the density and cristae folding of both subfractions, elevating maximal oxygen consumption capacity [1, 2].',
              'কঙ্কাল পেশির অক্সিজেন নির্ভর শক্তি উৎপাদন ক্ষমতা মাইটোকন্ড্রিয়াল রেটিকুলামের কাঠামোগত স্থাপত্যের ওপর নির্ভরশীল [১, ২]। কঙ্কাল পেশির মাইটোকন্ড্রিয়া বিচ্ছিন্ন কোনো অঙ্গাণু নয়, বরং একটি আন্তঃসংযুক্ত নলাকার জালিকা যা দুটি ভাগে বিভক্ত: সাবসারকোলেমাল (SS) মাইটোকন্ড্রিয়া যা কোষের ঝিল্লির ঠিক নিচে থাকে এবং ইন্টারমায়োফাইব্রিলার (IMF) মাইটোকন্ড্রিয়া যা সরাসরি সংকোচনশীল মায়োফাইব্রিল ও সারকোপ্লাজমিক রেটিকুলামের খাঁজে খাঁজে সন্নিবেশিত থাকে [২]। নিয়মিত সহনশীলতা প্রশিক্ষণ এই উভয় অংশের ক্রিস্টির খাঁজ ও ঘনত্ব নাটকীয়ভাবে বৃদ্ধি করে [১, ২]।'
            ),
            l(
              'Within the inner mitochondrial membrane, carnitine palmitoyltransferase-1 (CPT-1) controls the rate-limiting translocation of long-chain fatty acyl-CoAs into the matrix [2]. CPT-1 converts cytosolic acyl-CoA into acylcarnitine, which traverses the inner membrane via carnitine-acylcarnitine translocase (CACT), where carnitine palmitoyltransferase-2 (CPT-2) regenerates acyl-CoA for beta-oxidation [2]. During intense exercise, intracellular malonyl-CoA accumulation and cytosolic proton accumulation (acidosis, pH drop to ~6.6) exert potent non-competitive inhibition upon CPT-1, structurally constricting fatty acid translocation and enforcing the crossover to carbohydrate oxidation [2].',
              'মাইটোকন্ড্রিয়ার অভ্যন্তরীণ ঝিল্লিতে কার্নিটিন পালমিটয়েলট্রান্সফারেজ-১ (CPT-1) এনজাইম ফ্যাটি অ্যাসিডের ম্যাট্রিক্সে প্রবেশের গতি নিয়ন্ত্রণ করে [২]। CPT-1 সাইটোসলের অ্যাসাইল-কোএকে অ্যাসাইলকার্নিটিনে রূপান্তরিত করে, যা সিএসিটি (CACT) পরিবাহক দিয়ে ভেতরে প্রবেশের পর CPT-2 দ্বারা পুনরায় অ্যাসাইল-কোএ হিসেবে মুক্ত হয় [২]। উচ্চ-তীব্রতার ব্যায়ামে সাইটোসলে ম্যালোনাইল-কোএ এবং হাইড্রোজেন আয়নের আধিক্য (পিএইচ কমে ~৬.৬ হওয়া) CPT-1 এনজাইমকে সরাসরি অবদমিত করে ফ্যাটি অ্যাসিডের প্রবেশ বন্ধ করে দেয়, যার ফলে কোষ কার্বোহাইড্রেট পোড়াতে বাধ্য হয় [২]।'
            ),
            l(
              'Concurrently, the pyruvate dehydrogenase (PDH) multienzyme complex spans the inner mitochondrial matrix, linking glycolytic pyruvate generation to the tricarboxylic acid (TCA) cycle [1, 2]. Pyruvate dehydrogenase kinase (PDK) phosphorylates and inactivates the PDH E1alpha subunit, whereas pyruvate dehydrogenase phosphatase (PDP) dephosphorylates and activates it. During vigorous muscular contraction, surges in intramitochondrial calcium (Ca2+) and pyruvate potently stimulate PDP while inhibiting PDK, maintaining PDH in a dephosphorylated, fully active state that funnels glycolytic carbon directly into acetyl-CoA for terminal oxidation [1, 2].',
              'একই সাথে পাইরুভেট ডিহাইড্রোজিনেজ (PDH) মাল্টি-এনজাইম কমপ্লেক্স মাইটোকন্ড্রিয়াল ম্যাট্রিক্সে অবস্থান করে গ্লাইকোলাইটিক পাইরুভেটকে টিসিএ চক্রের সাথে যুক্ত করে [১, ২]। পিডিএইচ কাইনেজ (PDK) এই এনজাইমকে ফসফরাইলেশন করে নিষ্ক্রিয় করে, আর পিডিএইচ ফসফেটেজ (PDP) ফসফেট সরিয়ে একে সক্রিয় করে। তীব্র ব্যায়ামের সময় মাইটোকন্ড্রিয়ার ভেতরে ক্যালসিয়াম (Ca2+) এবং পাইরুভেটের আধিক্য পিডিপিকে উদ্দীপ্ত করে পিডিকে-কে অবদমিত করে; ফলে পিডিএইচ সম্পূর্ণ সক্রিয় থাকে এবং গ্লাইকোলাইসিসের পাইরুভেট সরাসরি অ্যাসিটাইল-কোএ হিসেবে জারিত হয় [১, ২]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'The Leucine Trigger & mTORC1 Mechanistic Target of Rapamycin Cascade',
            'লিউসিন ট্রিগার ও এমটিওআরসি-১ সিগন্যালিং ক্যাসকেডের আণবিক নিয়ন্ত্রণ'
          ),
          paragraphs: [
            l(
              'The molecular stimulation of muscle protein synthesis (MPS) following resistance or endurance exercise is driven by the mechanistic target of rapamycin complex 1 (mTORC1) [4]. mTORC1 is a multi-protein serine/threonine kinase complex comprising mTOR, Raptor (regulatory-associated protein of mTOR), mLST8, and endogenous inhibitors. While mechanical loading during resistance exercise generates intracellular tension that activates the mechanosensitive kinase focal adhesion kinase (FAK) and phosphatidic acid (PA) synthesis to prime mTORC1, complete catalytic activation requires essential amino acids, specifically the branched-chain amino acid L-leucine [4].',
              'ব্যায়ামের পর পেশি প্রোটিন সংশ্লেষের (MPS) আণবিক উদ্দীপনা পরিচালিত হয় মেকানিস্টিক টার্গেট অব র্যাপামাইসিন কমপ্লেক্স ১ (mTORC1) দ্বারা [৪]। এটি একটি সেরিন/থ্রিওনাইন কাইনেজ কমপ্লেক্স যা এমটিওআর, র‍্যাপ্টর (Raptor) এবং mLST8 সহযোগে গঠিত। রেজিস্ট্যান্স ব্যায়ামের যান্ত্রিক চাপ ফোকাল অ্যাডহেশন কাইনেজ (FAK) ও ফসফ্যাটিডিক অ্যাসিডের মাধ্যমে mTORC1-কে আংশিক প্রস্তুত করলেও, এর পূর্ণাঙ্গ সক্রিয়তার জন্য অপরিহার্য অ্যামিনো অ্যাসিড, বিশেষ করে ব্রাঞ্চড-চেইন অ্যামিনো অ্যাসিড এল-লিউসিন (L-leucine) অত্যাবশ্যক [৪]।'
            ),
            l(
              'Intracellular leucine is sensed by the cytosolic leucine sensor Sestrin2 [4]. In the unliganded state, Sestrin2 binds and inhibits GATOR2 (GAP activity towards Rags 2). Upon binding intracellular leucine with high affinity (Kd ~20 microM), Sestrin2 undergoes a conformational dissociation from GATOR2 [4]. Liberated GATOR2 then relieves inhibition on the heterodimeric GTPases RagA/B and RagC/D. Active GTP-bound RagA/B recruits mTORC1 from the cytoplasm to the outer lysosomal membrane, bringing it into direct physical contact with its potent GTPase activator, Rheb (Ras homolog enriched in brain) [4].',
              'কোষের ভেতরে লিউসিনের উপস্থিতি শনাক্ত করে সাইটোসোলিক সেন্সর সেস্ট্রিন-২ (Sestrin2) [৪]। লিউসিন না থাকলে সেস্ট্রিন-২ গ্যাটার-২ (GATOR2) প্রোটিনকে আটকে রাখে। কিন্তু কোষাভ্যন্তরে লিউসিনের ঘনত্ব বৃদ্ধি পেলে সেস্ট্রিন-২ লিউসিনের সাথে যুক্ত হয়ে গ্যাটার-২ থেকে আলাদা হয়ে যায় [৪]। মুক্ত গ্যাটার-২ তখন রাগ জিটিপিয়েজ (RagA/B) কমপ্লেক্সকে সক্রিয় করে। সক্রিয় RagA/B সাইটোপ্লাজম থেকে mTORC1-কে লাইসোসোমের ঝিল্লিতে টেনে নিয়ে আসে, যেখানে অবস্থানরত রেব (Rheb) জিটিপিয়েজ সরাসরি mTORC1-কে পূর্ণ শক্তিতে প্রজ্বলিত করে [৪]।'
            ),
            l(
              'Once activated at the lysosome, mTORC1 phosphorylates two key downstream translational effectors: p70 ribosomal S6 kinase 1 (p70S6K1) and eukaryotic initiation factor 4E-binding protein 1 (4E-BP1) [4]. Phosphorylation of 4E-BP1 causes it to dissociate from eukaryotic initiation factor 4E (eIF4E), liberating eIF4E to assemble with eIF4G and eIF4A to form the eIF4F pre-initiation complex at the 5\'-cap of messenger RNAs encoding myofibrillar proteins [4]. Activated p70S6K phosphorylates ribosomal protein S6 and eIF4B, accelerating ribosomal translation elongation and initiating a profound wave of myofibrillar protein accretion that peaks 2 to 4 hours post-workout [1, 4].',
              'লাইসোসোমে সক্রিয় হওয়ার পর mTORC1 দুটি গুরুত্বপূর্ণ অনুবাদক প্রোটিনকে ফসফোরাইলেশন করে: p70 রাইবোসোমাল এস৬ কাইনেজ ১ (p70S6K1) এবং ৪ই-বাইন্ডিং প্রোটিন ১ (4E-BP1) [৪]। 4E-BP1 ফসফোরাইলেটেড হলে তা eIF4E থেকে বিচ্ছিন্ন হয়ে যায়, যার ফলে eIF4E মুক্ত হয়ে eIF4G ও eIF4A সহযোগে eIF4F কমপ্লেক্স গঠন করে পেশির প্রোটিন কোডিং এমআরএনএর অনুবাদ শুরু করে [৪]। পাশাপাশি p70S6K রাইবোসোমীয় প্রোটিন সক্রিয় করার মাধ্যমে ব্যায়ামের ২ থেকে ৪ ঘণ্টার মধ্যে মায়োফাইব্রিল প্রোটিন সংশ্লেষের এক প্রবল জোয়ার তৈরি করে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'AMPK vs. mTORC1 Crosstalk & Molecular Interference Phenomenon',
            'এএমপিকে ও এমটিওআরসি-১-এর আণবিক দ্বন্দ্ব এবং ইন্টারফারেন্স ইফেক্ট'
          ),
          paragraphs: [
            l(
              'Athletes who simultaneously train for muscular hypertrophy and endurance capacity encounter the molecular interference phenomenon [1, 4]. Endurance exercise generates high metabolic turnover, elevating the AMP-to-ATP and ADP-to-ATP ratios within myocytes. This energetic depletion triggers phosphorylation of the alpha-catalytic subunit of AMPK at Threonine-172 by liver kinase B1 (LKB1) [1, 2]. Activated AMPK phosphorylates tuberous sclerosis complex 2 (TSC2) at Serine-1387, activating TSC2 GTPase activity towards Rheb and converting Rheb into its inactive GDP-bound state, thereby directly extinguishing mTORC1 signaling [4].',
              'যেসব ক্রীড়াবিদ একই সাথে পেশির আয়তন বৃদ্ধি (হাইপারট্রফি) এবং দীর্ঘ দূরত্বের সহনশীলতার অনুশীলন করেন, তারা আণবিক ইন্টারফারেন্স ইফেক্টের (Interference Phenomenon) মুখোমুখি হন [১, ৪]। সহনশীলতা ব্যায়ামে প্রচুর এটিপি খরচ হওয়ায় কোষে এএমপি/এটিপি অনুপাত বৃদ্ধি পায়। এই শক্তি শূন্যতা এলকেবি-১ (LKB1) এনজাইমের মাধ্যমে AMPK-এর থ্রিওনাইন-১৭২ অবস্থানে ফসফোরাইলেশন ঘটিয়ে একে অত্যন্ত সক্রিয় করে তোলে [১, ২]। সক্রিয় AMPK তখন টিউবারাস স্ক্লেরোসিস কমপ্লেক্স ২ (TSC2)-কে ফসফোরাইলেশন করে রেব (Rheb) জিটিপিয়েজকে নিষ্ক্রিয় করে দেয়, যা সরাসরি mTORC1 সংকেতকে স্তব্ধ করে দেয় [৪]।',
            ),
            l(
              'Furthermore, AMPK directly phosphorylates the Raptor subunit of mTORC1 at Serine-722 and Serine-792, inducing 14-3-3 protein binding and physical sequestration of mTORC1 away from its downstream substrates [4]. While this AMPK-mediated shutdown of protein translation is ecologically necessary to preserve cellular energy during prolonged locomotion, it impairs resistance training-induced muscle protein accretion when heavy endurance workouts immediately precede or coincide with resistance training bouts [1, 4].',
              'তাছাড়া, AMPK সরাসরি mTORC1-এর র‍্যাপ্টর (Raptor) সাবইউনিটে সেরিন-৭২২ ও সেরিন-৭৯২ অবস্থানে ফসফেট যুক্ত করে ১৪-৩-৩ প্রোটিনকে আটকে দেয়, যা mTORC1-কে তার লক্ষ্যবস্তু থেকে বিচ্ছিন্ন করে ফেলে [৪]। দীর্ঘমেয়াদী ব্যায়ামে কোষের শক্তি বাঁচাতে প্রোটিন তৈরি বন্ধের এই ব্যবস্থা জরুরি হলেও, এটি ভারোত্তোলন পরবর্তী পেশি গঠনের প্রক্রিয়াকে সরাসরি ব্যাহত করে যদি দুটি ব্যায়াম খুব কাছাকাছি সময়ে করা হয় [১, ৪]।'
            ),
            l(
              'To mitigate this molecular interference, sports nutrition periodization employs temporal segregation and nutrient signaling [1, 4]. Separating high-intensity endurance bouts from resistance training sessions by at least 6 to 8 hours allows cytosolic AMPK activity to subside. Ingesting carbohydrate and protein between sessions replenishes myocyte glycogen and activates insulin receptor substrate-1 (IRS-1)/Akt signaling, which phosphorylates TSC2 at inhibitory sites, releasing Rheb to permit unhindered mTORC1 activation following the subsequent resistance bout [1, 4].',
              'এই আণবিক দ্বন্দ্ব কমাতে আধুনিক ক্রীড়া পুষ্টিবিজ্ঞান সময়ের ব্যবধান ও পুষ্টি সংকেত ব্যবহার করে [১, ৪]। সহনশীলতা ও শক্তি প্রশিক্ষণের মধ্যে কমপক্ষে ৬ থেকে ৮ ঘণ্টার ব্যবধান রাখলে কোষের AMPK কার্যকারিতা স্বাভাবিক অবস্থায় নেমে আসে। এই বিরতিকালে শর্করা ও প্রোটিন গ্রহণ করলে পেশির গ্লাইকোজেন পূরণ হয় এবং ইনসুলিন-অ্যাক্ট (Akt) সংকেত TSC2-কে নিষ্ক্রিয় করে রেব-কে মুক্ত করে দেয়, যার ফলে পরবর্তী ভারোত্তোলনের পর mTORC1 বাধাহীনভাবে পেশি গঠন অব্যাহত রাখতে পারে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'Pharmacological Bioenergetics: Creatine, Beta-Alanine & Caffeine Stoichiometry',
            'ফার্মাকোলজিক্যাল জৈবশক্তিবিজ্ঞান: ক্রিয়েটিন, বিটা-অ্যালানিন ও ক্যাফেইনের ক্রিয়া'
          ),
          paragraphs: [
            l(
              'Creatine monohydrate supplementation is the most thoroughly validated ergogenic aid in exercise science [5]. Upon oral ingestion, creatine is absorbed across the intestinal epithelium and imported into skeletal muscle myocytes against a steep concentration gradient by the sodium- and chloride-dependent creatine transporter 1 (CRT1 / SLC6A8). Approximately 60% to 65% of intramuscular creatine is phosphorylated by mitochondrial creatine kinase into phosphocreatine (PCr) [5]. A standardized loading protocol of 20 grams per day (divided into four 5-gram doses) for 5 to 7 days elevates total muscle creatine stores by 20% to 40%, expanding PCr resynthesis velocity during brief recovery intervals between repeated sprint or resistance sets [1, 5].',
              'ক্রিয়েটিন মনোহাইড্রেট হলো ক্রীড়াবিজ্ঞানের সবচেয়ে সুপ্রতিষ্ঠিত ও প্রমাণিত আণবিক সাপ্লিমেন্ট [৫]। খাবার হিসেবে গ্রহণের পর ক্রিয়েটিন অন্ত্রের ঝিল্লি পেরিয়ে সোডিয়াম ও ক্লোরাইড নির্ভর সিআরটি-১ (CRT1 / SLC6A8) পরিবাহক দিয়ে ঘনত্বের বিপরীত ঢাল অতিক্রম করে পেশিকোষে প্রবেশ করে। পেশির অভ্যন্তরে প্রবেশ করা ক্রিয়েটিনের প্রায় ৬০% থেকে ৬৫% মাইটোকন্ড্রিয়াল ক্রিয়েটিন কাইনেজ দ্বারা ফসফোক্রিয়েটিনে (PCr) রূপান্তরিত হয় [৫]। দৈনিক ২০ গ্রাম (চারটি ৫ গ্রাম পর্বে বিভক্ত) হারে ৫ থেকে ৭ দিন লোডিং করলে পেশির মোট ক্রিয়েটিন ২০% থেকে ৪০% বৃদ্ধি পায়, যা স্প্রিন্ট বা সেটের মধ্যবর্তী বিরতিতে দ্রুত পিসিআর পুনর্গঠনে সহায়তা করে [১, ৫]।'
            ),
            l(
              'Beta-alanine acts as the rate-limiting precursor in the biosynthesis of the dipeptide carnosine (beta-alanyl-L-histidine), which is concentrated within Type II fast-twitch muscle fibers [1]. The imidazole ring of carnosine has a pKa of 6.83, making it an ideal physicochemical buffer for absorbing excess hydronium ions (H+) generated during high-intensity anaerobic glycolysis [1]. Daily supplementation with 4.8 to 6.4 grams of sustained-release beta-alanine for 4 to 8 weeks increases intramuscular carnosine content by 60% to 80%, attenuating glycolytic intracellular acidosis and extending exercise capacity during supramaximal efforts lasting 60 to 240 seconds [1].',
              'বিটা-অ্যালানিন পেশিকোষের ডাইপেপটাইড কার্নোসিন (carnosine, বিটা-অ্যালানাইল-এল-হিস্টিডিন) তৈরির প্রধান সীমাবদ্ধ উপাদান হিসেবে কাজ করে, যা টাইপ-২ পেশিতে ঘন অবস্থায় থাকে [১]। কার্নোসিনের ইমিডাজল বলয়ের pKa হলো ৬.৮৩, যা তীব্র অবাত গ্লাইকোলাইসিসে তৈরি হওয়া ক্ষতিকর হাইড্রোজেন আয়ন (H+) শুষে নেওয়ার এক আদর্শ বাফার [১]। দৈনিক ৪.৮ থেকে ৬.৪ গ্রাম বিটা-অ্যালানিন ৪ থেকে ৮ সপ্তাহ গ্রহণ করলে পেশির কার্নোসিন ৬০% থেকে ৮০% বেড়ে যায়, যা ৬০ থেকে ২৪০ সেকেন্ড স্থায়ী তীব্র ব্যায়ামে অ্যাসিডোসিস বিলম্বিত করে ক্লান্তি রোধ করে [১]।'
            ),
            l(
              'Anhydrous caffeine (1,3,7-trimethylxanthine) exerts ergogenic effects primarily via competitive antagonism of central and peripheral adenosine A1 and A2A receptors [1]. By blocking tonic adenosine-mediated neuromuscular inhibition, caffeine enhances dopamine and norepinephrine neurotransmission, lowering the rating of perceived exertion (RPE), enhancing motor unit firing frequency, and sustaining voluntary force production [1]. Doses of 3 to 6 mg per kilogram of body mass ingested 60 minutes prior to exercise reliably enhance endurance, sprint, and cognitive performance without inducing dehydration when consumed in habitual users [1].',
              'ক্যাফেইন (১,৩,৭-ট্রাইমিথাইলজ্যান্থিন) মূলত কেন্দ্রীয় ও প্রান্তীয় স্নায়ুতন্ত্রের অ্যাডিনোসিন A1 এবং A2A রিসেপ্টরের ওপর প্রতিযোগিতামূলক ব্লকার হিসেবে কাজ করে কর্মক্ষমতা বাড়ায় [১]। অ্যাডিনোসিনের স্বাভাবিক সংবেদনশীল বাধা বন্ধ করে ক্যাফেইন ডোপামিন ও নর-এপিনেফ্রিন বৃদ্ধি করে, ক্লান্তির অনুভূতি (RPE) কমায়, স্নায়ুসংকেতের গতি বাড়ায় এবং পেশির জোর ধরে রাখে [১]। ব্যায়ামের ৬০ মিনিট পূর্বে প্রতি কেজি ওজনে ৩ থেকে ৬ মিলিগ্রাম ক্যাফেইন গ্রহণ করলে সহনশীলতা, স্প্রিন্ট এবং মানসিক একাগ্রতা উল্লেখযোগ্যভাবে বৃদ্ধি পায় [১]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Academic Summary of Cellular Bioenergetics & Timing Kinetics',
            'কোষীয় জৈবশক্তিবিজ্ঞান ও পুষ্টির সময়বিজ্ঞানের একাডেমিক সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'Skeletal muscle energy metabolism is an integrated continuum: cytosolic creatine kinase buffers immediate ATP turnover in the first seconds, fast-twitch anaerobic glycolysis accelerates carbon flux via allosteric PFK-1 activation up to 100-fold, and mitochondrial oxidative phosphorylation provides sustained ATP through calcium-activated PDH and CPT-1-regulated beta-oxidation [1, 2, 5].',
              'কঙ্কাল পেশির শক্তি বিপাক একটি অবিচ্ছিন্ন জৈবরাসায়নিক ধারা: সাইটোসোলিক ক্রিয়েটিন কাইনেজ প্রথম কয়েক সেকেন্ডে দ্রুত এটিপি সরবরাহ করে, টাইপ-২ তন্তুর অবাত গ্লাইকোলাইসিস PFK-1 সক্রিয় করে ১০০ গুণ দ্রুত শক্তি যোগায়, এবং মাইটোকন্ড্রিয়া ক্যালসিয়াম-সক্রিয় পিডিএইচ ও সিপিটি-১ নিয়ন্ত্রণের মাধ্যমে দীর্ঘমেয়াদী এটিপি উৎপাদন অক্ষুণ্ণ রাখে [১, ২, ৫]।'
            ),
            l(
              'Post-exercise myofibrillar remodeling relies on the leucine trigger threshold (~3.0 g leucine), where Sestrin2 disinhibits GATOR2, engaging RagA/B to translocate mTORC1 to lysosomal Rheb for activation of translational machinery (p70S6K and 4E-BP1/eIF4E) [4]. To avoid molecular interference between AMPK (which phosphorylates TSC2 to inhibit Rheb) and mTORC1, endurance and resistance sessions should be segregated by 6 to 8 hours with strategic glycogen repletion [1, 4].',
              'ব্যায়াম-পরবর্তী মায়োফাইব্রিল পুনর্গঠন লিউসিন ট্রিগারের (~৩.০ গ্রাম) ওপর নির্ভরশীল, যেখানে সেস্ট্রিন-২ গ্যাটার-২-কে মুক্ত করে RagA/B-এর মাধ্যমে mTORC1-কে লাইসোসোমে নিয়ে গিয়ে প্রোটিন সংশ্লেষ (p70S6K ও eIF4E) চালু করে [৪]। এএমপিকে ও এমটিওআরসি-১-এর আণবিক সংঘাত এড়াতে সহনশীলতা ও ভারোত্তোলনের মাঝে ৬-৮ ঘণ্টার ব্যবধান ও শর্করা গ্রহণ অপরিহার্য [১, ৪]।'
            ),
            l(
              'Validated ergogenic supplements act through precise biochemical mechanisms: creatine monohydrate expands cytosolic PCr phosphagen pools by 20% to 40%, beta-alanine elevates intramyocellular carnosine buffering against glycolytic H+ acidosis, and caffeine antagonizes adenosine receptors to enhance motor unit firing rates and attenuate central perceived exertion [1, 5].',
              'প্রমাণিত আণবিক সাপ্লিমেন্টগুলো নির্দিষ্ট জৈবরাসায়নিক প্রক্রিয়ায় কাজ করে: ক্রিয়েটিন মনোহাইড্রেট পেশির পিসিআর ভাণ্ডার ২০% থেকে ৪০% বৃদ্ধি করে, বিটা-অ্যালানিন ইন্ট্রামায়োসাইট কার্নোসিন বাড়িয়ে অ্যাসিডোসিস বাফার করে এবং ক্যাফেইন অ্যাডিনোসিন রিসেপ্টর ব্লক করে স্নায়ুর গতি ও পেশির কার্যক্ষমতা বৃদ্ধি করে [১, ৫]।'
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
            'Metabolic Flexibility, Transcriptional Regulators & PGC-1alpha Biogenesis',
            'বিপাকীয় নমনীয়তা, ট্রান্সক্রিপশনাল নিয়ন্ত্রক ও পিজিসি-১আলফা মাইটোকন্ড্রিয়াল রূপান্তর'
          ),
          paragraphs: [
            l(
              'Metabolic flexibility is defined as the capacity of skeletal muscle to rapidly alternate between lipid and carbohydrate oxidation in response to changes in workload, endocrine signaling, and substrate availability [1, 2]. In highly trained endurance athletes, resting skeletal muscle exhibits enhanced lipid oxidation and insulin sensitivity, with an extended crossover curve shifted rightward toward higher absolute workloads. This metabolic phenotype is orchestrated at the transcriptional level by peroxisome proliferator-activated receptor gamma coactivator 1-alpha (PGC-1alpha), the master regulator of mitochondrial biogenesis and oxidative gene expression [2].',
              'বিপাকীয় নমনীয়তা (Metabolic Flexibility) হলো কাজের তীব্রতা, হরমোন সংকেত এবং খাদ্যের প্রাপ্যতার ওপর ভিত্তি করে পেশিকোষের চর্বি ও শর্করার মধ্যে দ্রুত ও কার্যকরভাবে জ্বালানি পরিবর্তন করার সক্ষমতা [১, ২]। উচ্চ প্রশিক্ষণপ্রাপ্ত ক্রীড়াবিদদের পেশিতে বিশ্রামে চর্বি জারণ ক্ষমতা ও ইনসুলিন সংবেদনশীলতা অনেক বেশি থাকে, যার ফলে তাদের ক্রসওভার রেখাচিত্র ডানদিকে সরে গিয়ে উচ্চতর পরিশ্রমেও কার্যকর থাকে। এই বিপাকীয় বৈশিষ্ট্য জিনগতভাবে নিয়ন্ত্রিত হয় পারক্সিজোম প্রলিফেরেটর-অ্যাক্টিভেটেড রিসেপ্টর গামা কো-অ্যাক্টিভেটর ১-আলফা (PGC-1alpha) দ্বারা, যা মাইটোকন্ড্রিয়া বৃদ্ধি ও অক্সিডেটিভ জিনের মূল নির্দেশক [২]।'
            ),
            l(
              'Contractile activity initiates a multi-kinase signaling convergence upon PGC-1alpha. Calcium-calmodulin-dependent protein kinase II (CaMKII) and p38 mitogen-activated protein kinase (p38 MAPK) directly phosphorylate PGC-1alpha, relieving repressor protein binding [1, 2]. Simultaneously, AMPK phosphorylates PGC-1alpha at Threonine-177 and Serine-538, priming it for deacetylation by the NAD+-dependent deacetylase sirtuin 1 (SIRT1). Deacetylated, phosphorylated PGC-1alpha translocates into the nucleus, binding estrogen-related receptor alpha (ERRalpha) and nuclear respiratory factors 1 and 2 (NRF-1/2) to drive transcription of mitochondrial transcription factor A (TFAM), executing mitochondrial DNA replication [2].',
              'পেশির সংকোচন PGC-1alpha-এর ওপর একাধিক কাইনেজ সংকেতের সমন্বয় ঘটায়। ক্যালসিয়াম-ক্যালমোডুলিন কাইনেজ (CaMKII) এবং p38 এমএপিকে সরাসরি PGC-1alpha-কে ফসফোরাইলেশন করে এর প্রাকৃতিক বাধা দূর করে [১, ২]। একই সাথে AMPK থ্রিওনাইন-১৭৭ ও সেরিন-৫৩৮ অবস্থানে PGC-1alpha-কে ফসফেট যুক্ত করে, যা এনএডি-নির্ভর সার্টুইন ১ (SIRT1) দ্বারা ডিঅ্যাসিটাইলেশনের জন্য প্রস্তুত হয়। ডিঅ্যাসিটাইলেটেড PGC-1alpha কোষকেন্দ্রে প্রবেশ করে NRF-1/2 ও ERRalpha-এর সাথে যুক্ত হয়ে টিফ্যাম (TFAM) প্রোটিন তৈরি করে এবং মাইটোকন্ড্রিয়াল ডিএনএ প্রতিলিপিকরণ সম্পন্ন করে [২]।'
            ),
            l(
              'The "train-low, compete-high" periodization paradigm deliberately leverages this signaling cascade [1, 3]. By commencing endurance sessions with low glycogen availability (e.g., twice-a-day training without intervening carbohydrate, or overnight-fasted aerobic sessions), the elevated intracellular AMP/ATP ratio and free fatty acid milieu amplify p38 MAPK, AMPK, and SIRT1 activation, inducing greater PGC-1alpha gene expression and oxidative enzyme synthesis than isocaloric training under high-glycogen conditions [1, 3].',
              '"ট্রেন-লো, কমপ্লিট-হাই" পর্যায়ক্রমিক প্রশিক্ষণ কৌশলটি সচেতনভাবে এই সংকেত ধারাকে কাজে লাগায় [১, ৩]। কম গ্লাইকোজেন অবস্থায় দীর্ঘমেয়াদী অনুশীলন শুরু করার মাধ্যমে (যেমন দিনে দুই বেলা ব্যায়ামের মাঝে শর্করা না খাওয়া বা রাতে না খেয়ে সকালে হালকা দৌড়ানো) কোষে এএমপি/এটিপি অনুপাত ও মুক্ত ফ্যাটি অ্যাসিড বৃদ্ধি পায়। এটি p38 MAPK, AMPK এবং SIRT1-কে বহুগুণ বেশি সক্রিয় করে তোলে, যা পর্যাপ্ত শর্করা খেয়ে ব্যায়াম করার তুলনায় অনেক বেশি PGC-1alpha এবং মাইটোকন্ড্রিয়াল এনজাইম তৈরি করতে বাধ্য করে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l(
            'Intestinal Epithelial Transporter Saturation Kinetics (SGLT1 vs. GLUT5)',
            'অন্ত্রীয় এপিথেলিয়াল পরিবাহক সম্পৃক্ততার গতিবিদ্যা (SGLT1 বনাম GLUT5)'
          ),
          paragraphs: [
            l(
              'Exogenous carbohydrate oxidation during prolonged exercise is fundamentally constrained by intestinal epithelial transport velocity rather than gastric emptying or muscular uptake [3]. The brush-border enterocyte membrane features sodium-glucose cotransporter 1 (SGLT1 / SLC5A1), an electrogenic, high-affinity symporter that transports two Na+ ions down their electrochemical gradient per one molecule of D-glucose or D-galactose. In vivo human tracer infusion studies demonstrate that SGLT1 reaches maximal transport saturation (Vmax) at an exogenous glucose ingestion rate of 60 g/h (~1.0 g/min), yielding a plateau in exogenous glucose oxidation [3].',
              'দীর্ঘমেয়াদী ব্যায়ামে বাইরে থেকে গ্রহণ করা শর্করার জারণের হার পাকস্থলী খালি হওয়া বা পেশির গ্রহণের ওপর নয়, বরং অন্ত্রের এপিথেলিয়াল পরিবহনের গতিবেগের ওপর সীমাবদ্ধ থাকে [৩]। অন্ত্রের ব্রাশ-বর্ডার ঝিল্লিতে সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1) একটি উচ্চ-সংবেদনশীল পরিবাহক যা প্রতি অণু ডি-গ্লুকোজের সাথে দুটি সোডিয়াম আয়ন শোষণ করে। মানবদেহের রেডিওআইসোটোপ ট্রেসার গবেষণায় প্রমাণিত হয়েছে যে SGLT1 ঘণ্টায় প্রায় ৬০ গ্রাম গ্লুকোজেই তার সর্বোচ্চ পরিবহন সীমায় (Vmax) পৌঁছে যায়, যার ফলে কেবল গ্লুকোজ খেলে জারণের হার আর বাড়ানো যায় না [৩]।'
            ),
            l(
              'Attempts to ingest glucose in excess of 60 g/h without a secondary substrate result in unabsorbed hexoses remaining in the intestinal lumen [3]. These unabsorbed solutes exert an osmotic draw, pulling extracellular fluid into the distal ileum and colon, triggering severe gastrointestinal distress, cramping, bloating, and osmotic diarrhea. However, the enterocyte brush border also expresses glucose transporter 5 (GLUT5 / SLC2A5), an electro-neutral facilitated uniporter dedicated exclusively to D-fructose absorption, entirely independent of sodium and SGLT1 [3].',
              'দ্বিতীয় কোনো পথ ব্যবহার না করে ৬০ গ্রাম/ঘণ্টার বেশি গ্লুকোজ খেলে সেই অতিরিক্ত শর্করা ক্ষুদ্রান্ত্রে শোষিত না হয়ে জমে থাকে [৩]। এই অশোষিত চিনি অন্ত্রের ভেতরে অসমোটিক চাপ সৃষ্টি করে শরীর থেকে পানি টেনে নেয়, যার ফলে তলপেটে অসহ্য যন্ত্রণা, ফোলাভাব এবং মারাত্মক ডায়রিয়া দেখা দেয়। কিন্তু অন্ত্রের ব্রাশ-বর্ডারে গ্লুকোজ ট্রান্সপোর্টার ৫ (GLUT5) নামক একটি স্বতন্ত্র ইউনিপোর্টার রয়েছে, যা সোডিয়াম বা SGLT1-এর কোনো তোয়াক্কা না করেই কেবল ডি-ফ্রুক্টোজ শোষণ করে [৩]।'
            ),
            l(
              'Co-ingesting glucose and fructose in a 2:1 or 1:0.8 ratio simultaneously engages both the SGLT1 and GLUT5 transport pathways [3]. Fructose absorbed via GLUT5 enters enterocyte metabolism or traverses the basolateral membrane via GLUT2 into the portal circulation, where it undergoes rapid hepatic fructolysis (yielding lactate and glucose) [1, 3]. This dual-transporter recruitment elevates total exogenous carbohydrate oxidation to 90 to 120 g/h, an increase of up to 50% above the single-substrate ceiling. Consequently, late-stage endurance euglycemia is preserved, endogenous liver glycogen depletion is spared, and time-trial power output is significantly augmented [1, 3].',
              'গ্লুকোজ ও ফ্রুক্টোজকে ২:১ বা ১:০.৮ অনুপাতে একসাথে খেলে তা একই সাথে SGLT1 এবং GLUT5 উভয় পরিবহন পথকে পূর্ণ শক্তিতে কাজে লাগায় [৩]। GLUT5 দিয়ে শোষিত ফ্রুক্টোজ যকৃতে গিয়ে দ্রুত ল্যাকটেট ও গ্লুকোজে রূপান্তরিত হয়ে পেশির জন্য রক্তে ফিরে আসে [১, ৩]। এই দ্বৈত পরিবাহক ব্যবহারের ফলে মোট শর্করা জারণের হার ঘণ্টায় ৯০ থেকে ১২০ গ্রাম পর্যন্ত পৌঁছে যায়, যা একক শর্করার চেয়ে প্রায় ৫০% বেশি। এর ফলে প্রতিযোগিতার শেষ পর্যায় পর্যন্ত রক্তের শর্করা অটুট থাকে, যকৃতের সঞ্চিত গ্লাইকোজেন ক্ষয় থেকে বাঁচে এবং খেলোয়াড়ের গতি ও শক্তি চমৎকারভাবে বৃদ্ধি পায় [১, ৩]।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l(
            'The Muscle-Full Effect, Leucine Refractory Windows & Proteomic Kinetics',
            'মাসল-ফুল রিফ্র্যাক্টরি পর্যায় ও লিউসিন সংবেদনশীলতার প্রোটিওমিক গতিবিদ্যা'
          ),
          paragraphs: [
            l(
              'Continuous intravenous infusion or constant hyperaminoacidemia fails to sustain elevated muscle protein synthesis, a phenomenon termed the "muscle-full" effect [4]. Clinical stable isotope tracer studies utilizing L-[ring-13C6]phenylalanine infusion demonstrate that following an optimal bolus of essential amino acids or whey protein, fractional synthetic rate (FSR) of myofibrillar protein surges rapidly, peaking between 45 and 90 minutes post-ingestion. However, by 120 to 180 minutes, FSR returns to baseline levels despite persistently elevated extracellular plasma amino acid concentrations and sustained intracellular intramuscular leucine levels [4].',
              'রক্তে সার্বক্ষণিকভাবে অতিরিক্ত অ্যামিনো অ্যাসিডের উপস্থিতি পেশি প্রোটিন সংশ্লেষকে অনন্তকাল ধরে চালু রাখতে পারে না; শারীরবৃত্তির এই সীমাবদ্ধতাকে "মাসল-ফুল" (Muscle-Full) প্রভাব বলা হয় [৪]। আইসোটোপ ট্রেসার গবেষণায় দেখা গেছে যে পর্যাপ্ত উন্নত প্রোটিন গ্রহণের পর মায়োফাইব্রিল প্রোটিন তৈরির হার (FSR) দ্রুত বেড়ে ৪৫ থেকে ৯০ মিনিটের মধ্যে শীর্ষে পৌঁছায়। কিন্তু ১২০ থেকে ১৮০ মিনিটের মধ্যে রক্তে এবং পেশির ভেতরে প্রচুর অ্যামিনো অ্যাসিড ও লিউসিন থাকা সত্ত্বেও প্রোটিন তৈরির গতি একদম স্বাভাবিক পূর্বের অবস্থায় নেমে আসে [৪]।'
            ),
            l(
              'The molecular etiology of this refractory window involves downstream desensitization of translation initiation factors [4]. While mTORC1 remains phosphorylated, downstream assembly of the eIF4F pre-initiation complex dissociates, and ribosomal protein S6 kinase undergoes dephosphorylation by protein phosphatase 2A (PP2A). Consequently, continuous "grazing" on small protein doses throughout the day maintains myocytes in a desensitized, non-responsive refractory state that blunts cumulative daily protein accretion [1, 4].',
              'এই রিফ্র্যাক্টরি বা নিষ্ক্রিয় পর্বের আণবিক কারণ হলো অনুবাদক সংকেতগুলোর সংবেদনশীলতা হ্রাস [৪]। এ সময় mTORC1 সক্রিয় দেখালেও, eIF4F কমপ্লেক্স ভেঙে যায় এবং প্রোটিন ফসফেটেজ ২এ (PP2A) এনজাইম রাইবোসোমাল প্রোটিনকে নিষ্ক্রিয় করে দেয়। ফলে সারাদিন ধরে ক্ষণে ক্ষণে অল্প অল্প প্রোটিন খাওয়া পেশিকোষকে এক ভোঁতা ও নিষ্ক্রিয় অবস্থায় আটকে রাখে, যা সামগ্রিক দৈনিক পেশি গঠনকে সংকুচিত করে [১, ৪]।'
            ),
            l(
              'To circumvent the muscle-full refractory phenomenon, evidence-based sports dietetics prescribes discrete, pulsed protein meals spaced 3 to 5 hours apart [1, 4]. Each pulse must supply an adequate quantity of high-quality protein (0.40 to 0.55 g/kg/meal, typically 25 to 40 grams) to exceed the intracellular leucine threshold (~2.7 to 3.0 grams of leucine) [4]. Spacing meals allows intracellular translation machinery to reset its sensitivity, enabling each subsequent pulse to trigger an independent, robust surge in myofibrillar FSR, culminating in superior somatic hypertrophy across weeks of resistance training [1, 4].',
              'এই মাসল-ফুল রিফ্র্যাক্টরি সীমাবদ্ধতা কাটিয়ে ওঠার জন্য প্রমাণভিত্তিক ক্রীড়া ডায়েটেটিক্স প্রতি ৩ থেকে ৫ ঘণ্টা পরপর সুনির্দিষ্ট প্রোটিন "পালস" গ্রহণের পরামর্শ দেয় [১, ৪]। প্রতিটি বেলায় পর্যাপ্ত উন্নত প্রোটিন (প্রতি কেজিতে ০.৪০ থেকে ০.৫৫ গ্রাম, বা প্রায় ২৫ থেকে ৪০ গ্রাম) থাকতে হবে যাতে তা কোষের অভ্যন্তরীণ লিউসিন থ্রেশহোল্ড (~২.৭ থেকে ৩.০ গ্রাম) অতিক্রম করতে পারে [৪]। খাবারের মাঝে এই বিরতি কোষের অনুবাদক ইঞ্জিনকে পুনরায় সংবেদনশীল হওয়ার সুযোগ দেয়, যার ফলে প্রতিটি পরবর্তী খাবার পেশি বৃদ্ধির এক নতুন ও শক্তিশালী তরঙ্গ সৃষ্টি করতে পারে [১, ৪]।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l(
            'Relative Energy Deficiency in Sport (REDs): The 2023 IOC Consensus Model',
            'ক্রীড়ায় আপেক্ষিক শক্তি ঘাটতি (REDs): ২০২৩ আইওসি ঐকমত্য মডেল ও প্যাথোফিজিওলজি'
          ),
          paragraphs: [
            l(
              'Relative Energy Deficiency in Sport (REDs) is a clinical syndrome of impaired physiological functioning triggered by low energy availability (LEA) [6]. Energy availability (EA) represents the residual dietary energy remaining for basic physiological functions after subtracting the energetic cost of exercise: EA = (Energy Intake - Exercise Energy Expenditure) / Fat-Free Mass (FFM) in kcal/kg FFM/day [1, 6]. When EA drops below the physiological threshold of 30 kcal/kg FFM/day, the human body initiates evolutionary neuroendocrine triage, prioritizing immediate locomotion while systematically suppressing reproduction, bone remodeling, thermoregulation, and immune defense [6].',
              'ক্রীড়ায় আপেক্ষিক শক্তি ঘাটতি (Relative Energy Deficiency in Sport - REDs) হলো নিম্ন শক্তি প্রাপ্যতার (LEA) কারণে সৃষ্ট একাধিক অঙ্গের শারীরবৃত্তীয় অকার্যকারিতার একটি জটিল সিন্ড্রোম [৬]। শক্তি প্রাপ্যতা (EA) হলো ব্যায়ামে ব্যয়িত শক্তি বাদ দেওয়ার পর দেহের মৌলিক শারীরবৃত্তীয় কাজের জন্য অবশিষ্ট শক্তি: EA = (খাদ্যের শক্তি - ব্যায়ামের ব্যয়) / চর্বিহীন ভর (FFM), যার একক কিলোক্যালরি/কেজি/দিন [১, ৬]। এই শক্তি যখন ৩০ কিলোক্যালরি/কেজি FFM/দিনের নিচে নেমে যায়, তখন মানবদেহ তাৎক্ষণিক চলাচলের শক্তি বাঁচাতে প্রজনন, অস্থির গঠন, তাপ নিয়ন্ত্রণ এবং রোগপ্রতিরোধের মতো অত্যাবশ্যক জৈবিক কাজগুলো বন্ধ করে দেয় [৬]।'
            ),
            l(
              'The endocrine pathophysiology of REDs is characterized by disruption of the hypothalamic-pituitary axes [6]. Suppressed gonadotropin-releasing hormone (GnRH) pulsatility leads to downstream reductions in luteinizing hormone (LH) and follicle-stimulating hormone (FSH), inducing functional hypothalamic amenorrhea (FHA) in females and suppressed testosterone and spermatogenesis in males [6]. Concurrently, leptin and active triiodothyronine (T3) levels collapse (non-thyroidal illness syndrome), while baseline cortisol and growth hormone resistance surge, accelerating osteoclast-mediated bone resorption and impairing uncoupled bone mineral accretion [1, 6].',
              'REDs-এর হরমোনগত প্যাথলজি হাইপোথ্যালামাস-পিটুইটারি অক্ষের তীব্র গোলযোগ দ্বারা চিহ্নিত হয় [৬]। GnRH হরমোনের স্বাভাবিক স্পন্দন থেমে যাওয়ায় এলএইচ (LH) ও এফএসএইচ (FSH) ক্ষরণ বন্ধ হয়ে যায়, যার ফলে নারীদের ক্ষেত্রে ঋতুস্রাব বন্ধ হয়ে যায় (FHA) এবং পুরুষদের টেস্টোস্টেরন কমে যায় [৬]। একই সাথে লেপটিন ও সক্রিয় থাইরয়েড হরমোন (T3) নেমে যায়, কিন্তু কর্টিসল বেড়ে যায়; এটি অস্টিওক্লাস্টের মাধ্যমে অস্থির ভাঙন বাড়িয়ে হাড়ের ঘনত্ব আশঙ্কাজনকভাবে হ্রাস করে এবং স্ট্রেস ফ্র্যাকচারের ঝুঁকি তৈরি করে [১, ৬]।'
            ),
            l(
              'The 2023 International Olympic Committee (IOC) consensus statement expanded the REDs conceptual model to emphasize its multisystemic sequelae, encompassing cardiovascular endothelial dysfunction, gastrointestinal transit disturbances, severe immunodepression, and blunted athletic adaptation [6]. Clinical screening utilizes the REDs Clinical Assessment Tool (CAT), mandating prompt nutritional rehabilitation aimed at restoring EA above 45 kcal/kg FFM/day to re-establish neuroendocrine pulsatility and protect long-term skeletal health [1, 6].',
              '২০২৩ সালের আন্তর্জাতিক অলিম্পিক কমিটি (IOC) ঐকমত্য নির্দেশিকা REDs-এর সামগ্রিক মডেলকে আরও সম্প্রসারিত করে এর বহু-অঙ্গীয় ক্ষতি তুলে ধরেছে, যার মধ্যে রয়েছে রক্তনালির অকার্যকারিতা, অন্ত্রের গতিশীলতার ব্যাঘাত, মারাত্মক রোগপ্রতিরোধহীনতা এবং প্রশিক্ষণের উন্নতি স্থবির হওয়া [৬]। ক্লিনিক্যাল স্ক্রিনিংয়ে REDs ক্লিনিক্যাল অ্যাসেসমেন্ট টুল (CAT) ব্যবহার করা হয় এবং হরমোনের স্বাভাবিক স্পন্দন ফিরিয়ে এনে অস্থির সুরক্ষা নিশ্চিত করতে শক্তি প্রাপ্যতা দ্রুত দৈনিক ৪৫ কিলোক্যালরি/কেজি FFM-এর ওপরে উন্নীত করার নির্দেশ দেওয়া হয় [১, ৬]।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l(
            'Clinical Appraisal of Landmark Ergogenic Trials & Meta-Analytic Evidence',
            'ঐতিহাসিক ক্রীড়া গবেষণা ও মেটা-অ্যানালাইসিসের ক্লিনিক্যাল মূল্যায়ন'
          ),
          paragraphs: [
            l(
              'The efficacy of nutritional interventions in sports science must be evaluated through rigorous randomized controlled trials and meta-analytic evidence [1]. Morton et al. (2018) conducted a landmark systematic review and meta-regression of 49 randomized controlled trials comprising 1,862 healthy participants undergoing progressive resistance training [4]. The analysis demonstrated that dietary protein supplementation significantly increased one-repetition maximum (1RM) strength and fat-free mass (FFM). Crucially, the meta-regression identified a clear inflection point: total protein intakes beyond 1.62 g/kg/day (95% CI: 1.03 to 2.20) yielded no further statistically significant gains in FFM, establishing an evidence-based plateau for natural athletic hypertrophy [4].',
              'ক্রীড়াবিজ্ঞানে পুষ্টির কার্যকারিতা যাচাই করতে হয় নিয়ন্ত্রিত বৈজ্ঞানিক ট্রায়াল ও মেটা-অ্যানালাইসিসের মাধ্যমে [১]। মর্টন এবং তার সহকর্মীরা (২০১৮) ১,৮৬২ জন সুস্থ প্রশিক্ষণার্থীর ওপর পরিচালিত ৪৯টি র্যান্ডমাইজড ট্রায়ালের এক ঐতিহাসিক মেটা-অ্যানালাইসিস সম্পন্ন করেন [৪]। এই গবেষণায় দেখা যায় যে প্রোটিন গ্রহণ পেশির শক্তি (1RM) এবং চর্বিহীন ভর (FFM) উল্লেখযোগ্যভাবে বাড়ায়। কিন্তু সবচেয়ে গুরুত্বপূর্ণ আবিষ্কার ছিল যে দৈনিক প্রতি কেজিতে ১.৬২ গ্রামের (৯৫% CI: ১.০৩ থেকে ২.২০) বেশি প্রোটিন গ্রহণে পেশি ভরে আর কোনো অতিরিক্ত সুবিধা পাওয়া যায় না; যা প্রাকৃতিক পেশি গঠনের এক সুনির্দিষ্ট প্রমাণভিত্তিক সীমা নির্ধারণ করে [৪]।'
            ),
            l(
              'Similarly, systematic evaluations of creatine monohydrate by Kreider et al. and the International Society of Sports Nutrition (ISSN) have debunked persistent clinical myths regarding renal impairment and muscular cramping in healthy individuals [5]. High-performance trials consistently reveal that creatine supplementation augments high-intensity sprint power output by 10% to 20%, accelerates glycogen resynthesis when co-ingested with carbohydrates, and promotes satellite cell mitotic proliferation and cell swelling [1, 5]. In clinical settings, long-term safety studies spanning up to 5 years demonstrate zero adverse alterations in serum creatinine clearance, glomerular filtration rate, or hepatic transaminases in athletes consuming maintenance doses (3 to 5 g/day) [5].',
              'একইভাবে, ক্রিয়েটিন মনোহাইড্রেটের ওপর ক্রেইডার ও আইএসএসএন-এর (ISSN) পর্যালোচনা সুস্থ ব্যক্তিদের কিডনির ক্ষতি বা পেশিতে খিঁচুনি ধরার ভিত্তিহীন ভ্রান্ত ধারণাকে বৈজ্ঞানিকভাবে খণ্ডন করেছে [৫]। উচ্চমানের ক্লিনিক্যাল ট্রায়াল দেখায় যে ক্রিয়েটিন স্প্রিন্ট শক্তি ১০% থেকে ২০% বাড়ায়, শর্করার সাথে মিলে দ্রুত গ্লাইকোজেন পুনর্গঠন করে এবং স্যাটেলাইট কোষের সংখ্যা বৃদ্ধি করে [১, ৫]। ৫ বছর মেয়াদী দীর্ঘমেয়াদী নিরাপত্তা গবেষণায় প্রমাণিত হয়েছে যে দৈনিক ৩ থেকে ৫ গ্রাম ক্রিয়েটিন সেবনে কিডনির গ্লোমেরুলার ফিল্ট্রেশন রেট (GFR) বা যকৃতের এনজাইমের কোনো ক্ষতিকর পরিবর্তন হয় না [৫]।'
            ),
            l(
              'In the realm of endurance fueling, randomized crossover trials by Jeukendrup and colleagues established the clinical superiority of multi-transportable carbohydrate solutions [3]. Cyclists ingesting 1.8 g/min of a 2:1 glucose-fructose mixture achieved peak exogenous carbohydrate oxidation rates of 1.26 g/min (an 8% higher gross mechanical efficiency compared to glucose alone), accompanied by lower subjective gastrointestinal distress and a 26-watt improvement in mean time-trial power output [3]. These findings definitively shifted international clinical guidelines (ACSM, IOC, ISSN) away from single-sugar formulations during competitive events lasting over 2 hours [1, 3].',
              'সহনশীলতা খেলায় জিউকেনড্রপ এবং তার সহযোগীদের গবেষণা বহু-পরিবহনযোগ্য (Multi-transportable) শর্করার শ্রেষ্ঠত্ব দ্ব্যর্থহীনভাবে প্রতিষ্ঠা করেছে [৩]। সাইক্লিস্টদের ওপর পরীক্ষায় দেখা যায় যে যারা ২:১ অনুপাতে গ্লুকোজ ও ফ্রুক্টোজ গ্রহণ করেছেন, তাদের শর্করা জারণের হার প্রতি মিনিটে ১.২৬ গ্রামে পৌঁছায় (যা একক গ্লুকোজের চেয়ে ৮% বেশি যান্ত্রিক দক্ষতা দেয়), পেটের অস্বস্তি কমে এবং সময় গণনার খেলায় ২৬ ওয়াট বেশি শক্তি পাওয়া যায় [৩]। এই অকাট্য প্রমাণের ভিত্তিতেই বিশ্ব ক্রীড়া সংস্থাগুলো (ACSM, IOC) ২ ঘণ্টার বেশি খেলায় একক শর্করার পরিবর্তে মিশ্র শর্করার ব্যবহারের আন্তর্জাতিক নির্দেশিকা জারি করেছে [১, ৩]।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l(
            'Advanced Systems Synthesis & Translational Sports Nutrition',
            'উন্নত সিস্টেমস সমন্বয় ও ফলিত ক্রীড়া পুষ্টির চূড়ান্ত সারসংক্ষেপ'
          ),
          paragraphs: [
            l(
              'Translational sports nutrition integrates cellular transcriptional signaling with whole-body performance outcomes: manipulating substrate availability through strategic "train-low" periodization drives PGC-1alpha/TFAM mitochondrial biogenesis via AMPK, p38 MAPK, and SIRT1, expanding the metabolic flexibility and oxidative capacity of skeletal muscle [1, 2].',
              'ফলিত ক্রীড়া পুষ্টিবিজ্ঞান কোষের জিনগত সংকেতের সাথে দেহের সামগ্রিক সক্ষমতার সমন্বয় ঘটায়: কৌশলগত "ট্রেন-লো" পর্যায়ক্রমের মাধ্যমে AMPK, p38 MAPK এবং SIRT1 সক্রিয় করে PGC-1alpha ও TFAM দিয়ে নতুন মাইটোকন্ড্রিয়া গঠন করা হয়, যা পেশির বিপাকীয় নমনীয়তা ও চর্বি জারণ ক্ষমতাকে বহুগুণ বাড়িয়ে দেয় [১, ২]।'
            ),
            l(
              'The intestinal transport saturation of SGLT1 at ~60 g/h is overcome by co-ingesting fructose to recruit GLUT5, escalating exogenous carbohydrate oxidation to 90 to 120 g/h, sparing liver glycogen, and attenuating gut distress in ultra-endurance athletes [1, 3]. Muscle protein synthesis exhibits a distinct "muscle-full" refractory period driven by PP2A translation factor dephosphorylation, mandating pulsed protein feedings (0.40 to 0.55 g/kg/meal with >=3.0 g leucine) every 3 to 5 hours, plateauing in efficacy at an evidence-based ceiling of ~1.62 g/kg/day total intake [4].',
              'অন্ত্রের SGLT1 পরিবাহকের ৬০ গ্রাম/ঘণ্টা সীমাবদ্ধতা কাটিয়ে উঠতে ফ্রুক্টোজ দিয়ে GLUT5 সক্রিয় করা হয়, যা জারণের হার ঘণ্টায় ৯০-১২০ গ্রামে উন্নীত করে যকৃতের গ্লাইকোজেন বাঁচায় [১, ৩]। পেশি প্রোটিন সংশ্লেষের "মাসল-ফুল" রিফ্র্যাক্টরি পর্যায় কাটিয়ে উঠতে প্রতি ৩-৫ ঘণ্টা পরপর পর্যাপ্ত লিউসিনযুক্ত (~৩.০ গ্রাম) প্রোটিন পালস প্রয়োজন, যার সর্বোচ্চ কার্যকর মাত্রা দৈনিক প্রায় ১.৬২ গ্রাম/কেজি [৪]।'
            ),
            l(
              'Athletes must be safeguarded against Relative Energy Deficiency in Sport (REDs) by ensuring energy availability does not breach the critical 30 kcal/kg FFM/day threshold, thereby preventing hypothalamic-pituitary-gonadal axis shutdown, trabecular bone microarchitectural deterioration, and immunological collapse [1, 6].',
              'ক্রীড়াবিদদের শক্তি প্রাপ্যতা যাতে কোনোভাবেই ৩০ কিলোক্যালরি/কেজি FFM/দিনের নিচে না নামে সেদিকে তীক্ষ্ণ নজর রাখতে হবে, যার মাধ্যমে হাইপোথ্যালামাস-পিটুইটারি হরমোন বন্ধ হয়ে যাওয়া, হাড়ের ক্ষয় এবং রোগপ্রতিরোধ ক্ষমতা ধ্বংস হওয়া রোধ করে তাদের দীর্ঘ কর্মক্ষমতা নিশ্চিত করা সম্ভব [১, ৬]।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'Sequential five-stage bioenergetic continuum diagram tracing phosphagen Lohmann kinetics, anaerobic glycogenolysis, aerobic crossover point, dual-transporter SGLT1/GLUT5 intestinal absorption, and Sestrin2-mTORC1 myofibrillar translation.',
      'পাঁচটি পর্যায়ের ধারাবাহিক জৈবশক্তিবিজ্ঞান নকশা যা ফসফেজেন লোম্যান বিক্রিয়া, অবাত গ্লাইকোলাইসিস, সবাত ক্রসওভার পয়েন্ট, অন্ত্রীয় SGLT1/GLUT5 দ্বৈত শোষণ এবং সেস্ট্রিন-২-এমটিওআরসি-১ প্রোটিন সংশ্লেষ প্রদর্শন করে।'
    ),
    steps: [
      l(
        'Stage 1: Creatine Kinase Lohmann Phosphagen Buffer (PCr + ADP <=> Cr + ATP within 0-10 seconds).',
        'পর্যায় ১: ক্রিয়েটিন কাইনেজ লোম্যান ফসফেজেন বাফার (০-১০ সেকেন্ডে PCr + ADP <=> Cr + ATP)।'
      ),
      l(
        'Stage 2: Adrenergic Glycogen Phosphorylase Activation & Explosive Glycolytic Flux.',
        'পর্যায় ২: অ্যাড্রিনালিন সংকেতে গ্লাইকোজেন ফসফোরাইলেজ সক্রিয়করণ ও দ্রুত গ্লাইকোলাইসিস।'
      ),
      l(
        'Stage 3: Substrate Crossover Point at 65% VO2max with CPT-1 Inhibition & Carbohydrate Dominance.',
        'পর্যায় ৩: ৬৫% VO2max-এ সাবস্ট্রেট ক্রসওভার পয়েন্ট, সিপিটি-১ এনজাইম বাধা ও শর্করা নির্ভরতা।'
      ),
      l(
        'Stage 4: Dual-Source Intestinal Transport (SGLT1 + GLUT5) Reaching 90-120 g/h Exogenous Oxidation.',
        'পর্যায় ৪: দ্বৈত অন্ত্রীয় পরিবহন (SGLT1 + GLUT5) যা ঘণ্টায় ৯০-১২০ গ্রাম শর্করা শোষণ নিশ্চিত করে।'
      ),
      l(
        'Stage 5: Post-Exercise Leucine Pulse (~3.0 g) Engaging Sestrin2-mTORC1 for Myofibrillar Protein Synthesis.',
        'পর্যায় ৫: ব্যায়াম-পরবর্তী লিউসিন পালস (~৩.০ গ্রাম) যা সেস্ট্রিন-২-এমটিওআরসি-১ দিয়ে পেশি প্রোটিন তৈরি করে।'
      ),
    ],
  },
  chapter: {
    toc: [
      { id: 'toc-intro', label: l('1. Biological Energetics & Substrate Flux', '১. জৈবশক্তিবিজ্ঞান ও পুষ্টির জ্বালানি প্রবাহ'), sectionId: 'introduction' },
      { id: 'toc-struct', label: l('2. Structural Reservoirs & Cellular Topography', '২. দেহের গঠনগত শক্তির ভাণ্ডার ও কোষীয় অবস্থান'), sectionId: 'structure' },
      { id: 'toc-mech', label: l('3. The Crossover Concept & mTORC1 Cascade', '৩. ক্রসওভার ধারণা ও এমটিওআরসি-১ সিগন্যালিং'), sectionId: 'mechanism' },
      { id: 'toc-integ', label: l('4. Systems Integration & REDs Pathophysiology', '৪. সিস্টেমিক সমন্বয় ও REDs প্যাথোফিজিওলজি'), sectionId: 'integration' },
      { id: 'toc-pract', label: l('5. Nutritional Periodization & Ergogenic Aids', '৫. পুষ্টির পর্যায়ক্রম ও সাপ্লিমেন্ট বিজ্ঞান'), sectionId: 'practice' },
      { id: 'toc-take', label: l('6. Core Principles & High-Yield Summary', '৬. মৌলিক শিক্ষণীয় সারসংক্ষেপ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('The Crossover Concept', 'সাবস্ট্রেট ক্রসওভার ধারণা'),
        definition: l(
          'The physiological phenomenon wherein increasing exercise intensity (% VO2max) drives a progressive shift from lipid oxidation to carbohydrate oxidation, crossing over at ~60-65% VO2max as Type II fibers and adrenergic flux suppress CPT-1.',
          'শারীরবৃত্তীয় প্রক্রিয়া যার মাধ্যমে ব্যায়ামের তীব্রতা বৃদ্ধির সাথে সাথে চর্বি জারণের পরিবর্তে শর্করা জারণ প্রধান হয়ে ওঠে; ৬৫% VO2max-এ সিপিটি-১ অবদমিত হয়ে শর্করা একমাত্র নির্ভরযোগ্য জ্বালানিতে পরিণত হয়।'
        ),
      },
      {
        term: l('Dual-Source Carbohydrate Transport', 'দ্বৈত-উৎসের শর্করা পরিবহন'),
        definition: l(
          'The strategic co-ingestion of glucose (which saturates SGLT1 at 60 g/h) and fructose (which recruits GLUT5), escalating intestinal transport and total exogenous carbohydrate oxidation up to 90-120 g/h without osmotic distress.',
          'গ্লুকোজ (যা SGLT1 পরিবাহককে ৬০ গ্রাম/ঘণ্টায় সম্পৃক্ত করে) এবং ফ্রুক্টোজের (যা GLUT5 ব্যবহার করে) যৌথ গ্রহণ, যা পেটের অস্বস্তি ছাড়াই শর্করা শোষণ ঘণ্টায় ৯০-১২০ গ্রাম পর্যন্ত বাড়িয়ে দেয়।'
        ),
      },
      {
        term: l('Leucine Trigger Threshold', 'লিউসিন ট্রিগার থ্রেশহোল্ড'),
        definition: l(
          'The minimum intracellular concentration of the branched-chain amino acid L-leucine (~2.7 to 3.0 g per meal) required to disinhibit Sestrin2-GATOR2 and maximally translocate mTORC1 to lysosomal Rheb for muscle protein synthesis.',
          'প্রতি বেলায় প্রোটিন থেকে কমপক্ষে ২.৭ থেকে ৩.০ গ্রাম লিউসিন প্রাপ্তির প্রয়োজনীয় মাত্রা, যা সেস্ট্রিন-২ সেন্সরকে মুক্ত করে লাইসোসোমে mTORC1 সক্রিয় করার মাধ্যমে পেশি প্রোটিন সংশ্লেষ শুরু করে।'
        ),
      },
      {
        term: l('The Muscle-Full Effect', 'মাসল-ফুল রিফ্র্যাক্টরি পর্যায়'),
        definition: l(
          'The cellular refractory state occurring 120-180 minutes post-protein ingestion wherein myofibrillar protein synthesis returns to baseline despite persistent aminoacidemia due to translation initiation factor dephosphorylation.',
          'প্রোটিন গ্রহণের ২-৩ ঘণ্টা পর তৈরি হওয়া পেশির সাময়িক সংবেদনশীলতাহীন অবস্থা, যেখানে রক্তে অ্যামিনো অ্যাসিড থাকা সত্ত্বেও অনুবাদক ফ্যাক্টর নিষ্ক্রিয় হয়ে যাওয়ায় প্রোটিন তৈরির হার স্বাভাবিক মাত্রায় নেমে আসে।'
        ),
      },
      {
        term: l('Creatine Kinase Lohmann Reaction', 'ক্রিয়েটিন কাইনেজ লোম্যান বিক্রিয়া'),
        definition: l(
          'The reversible enzymatic transphosphorylation: PCr + ADP + H+ <=> Creatine + ATP, which buffers cellular free energy and maintains ATP homeostasis during the initial 0-10 seconds of high-velocity maximal muscular exertion.',
          'উভমুখী এনজাইমীয় বিক্রিয়া: PCr + ADP + H+ <=> Creatine + ATP, যা তীব্র ব্যায়ামের প্রথম ০-১০ সেকেন্ডে এটিপির মাত্রা নিখুঁতভাবে স্থির রেখে কোষের তাৎক্ষণিক শক্তির যোগান দেয়।'
        ),
      },
      {
        term: l('Relative Energy Deficiency in Sport (REDs)', 'ক্রীড়ায় আপেক্ষিক শক্তি ঘাটতি (REDs)'),
        definition: l(
          'A multi-systemic clinical syndrome caused by low energy availability (<30 kcal/kg FFM/day) that impairs GnRH pulsatility, thyroid hormone production, bone mineral density, and immune competence.',
          'নিম্ন শক্তি প্রাপ্যতার (<৩০ কিলোক্যালরি/কেজি FFM/দিন) কারণে সৃষ্ট জটিল রোগ যেখানে হাইপোথ্যালামাস হরমোন ক্ষরণ বন্ধ হয়ে যায়, থাইরয়েড ও টেস্টোস্টেরন কমে যায় এবং হাড়ের ঘনত্ব আশঙ্কাজনকভাবে হ্রাস পায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Calculation: Pre-Marathon 48-Hour Carbohydrate Loading for a 70 kg Elite Runner',
          'সমাধানকৃত উদাহরণ: ৭০ কেজি ওজনের ম্যারাথন দৌড়বিদের জন্য ৪৮ ঘণ্টার কার্বোহাইড্রেট লোডিং হিসাব'
        ),
        steps: [
          l(
            'Step 1: Determine target carbohydrate intake per unit body mass based on ACSM/IOC guidelines (8 to 12 g/kg/day). Target 10.0 g/kg/day for complete glycogen supercompensation over a 48-hour taper: 70 kg * 10.0 g/kg/day = 700 g carbohydrate daily.',
            'ধাপ ১: আন্তর্জাতিক নির্দেশিকা অনুসারে প্রতি কেজি ওজনের জন্য শর্করার লক্ষ্য নির্ধারণ (দৈনিক ৮ থেকে ১২ গ্রাম)। ৪৮ ঘণ্টার জন্য ১০.০ গ্রাম/কেজি নির্ধারণ: ৭০ কেজি * ১০.০ গ্রাম = দৈনিক ৭০০ গ্রাম শর্করা।'
          ),
          l(
            'Step 2: Calculate daily caloric yield from carbohydrate: 700 g * 4 kcal/g = 2,800 kcal from carbohydrate alone.',
            'ধাপ ২: শর্করা থেকে প্রাপ্ত মোট দৈনিক ক্যালরি হিসাব: ৭০০ গ্রাম * ৪ কিলোক্যালরি/গ্রাম = ২,৮০০ কিলোক্যালরি কেবল শর্করা থেকে।'
          ),
          l(
            'Step 3: Establish baseline maintenance energy expenditure with tapered physical volume (~2,400 kcal/day + 400 kcal light taper shakeout = 2,800 kcal total TDEE). Carbohydrate constitutes ~80% of total dietary energy, requiring moderate protein (1.2 g/kg = 84 g = 336 kcal) and low fat (~20 g = 180 kcal) to avoid hypercaloric gastrointestinal distress.',
            'ধাপ ৩: হালকা প্রশিক্ষণে দৈনিক মোট ব্যয় নির্ধারণ (~২,৮০০ কিলোক্যালরি)। শর্করা মোট ক্যালরির প্রায় ৮০% গঠন করবে, সাথে সহনীয় প্রোটিন (১.২ গ্রাম/কেজি = ৮৪ গ্রাম = ৩৩৬ কিলোক্যালরি) এবং কম চর্বি (২০ গ্রাম = ১৮০ কিলোক্যালরি) রাখতে হবে।'
          ),
          l(
            'Step 4: Distribute the 700 g carbohydrate across 5 meals and snacks using low-fiber, high-glycemic starches (white rice, boiled potatoes, maltodextrin/electrolyte drinks, pancakes, ripe bananas) to minimize fecal bulk and colonic residue.',
            'ধাপ ৪: কম আঁশের সহজপাচ্য খাবার (সাদা ভাত, সেদ্ধ আলু, মাল্টোডেক্সট্রিন পানীয়, পাকা কলা) দিয়ে ৭০০ গ্রাম শর্করাকে সারাদিনে ৫টি পর্বে ভাগ করে দেওয়া যাতে পেটের ওপর অপ্রয়োজনীয় চাপ না পড়ে।'
          ),
        ],
        conclusion: l(
          'Prescribing 700 g/day of low-fiber carbohydrate for 48 hours expands intramuscular glycogen from baseline ~350 g up to ~750 g (~120-140 mmol/kg wet weight), ensuring glycogen stores remain replete through kilometer 32 (mile 20) of the competitive marathon.',
          '৪৮ ঘণ্টা ধরে দৈনিক ৭০০ গ্রাম সহজপাচ্য শর্করা গ্রহণ পেশির গ্লাইকোজেন ৩৫০ গ্রাম থেকে বাড়িয়ে প্রায় ৭৫০ গ্রামে উন্নীত করে, যা ম্যারাথনের ৩২তম কিলোমিটার পর্যন্ত গ্লাইকোজেন শূন্যতা প্রতিরোধে সক্ষম।'
        ),
      },
      {
        title: l(
          'Worked Calculation: Post-Resistance Training Leucine Threshold & Protein Pulse Timing',
          'সমাধানকৃত উদাহরণ: ভারোত্তোলন-পরবর্তী লিউসিন থ্রেশহোল্ড ও প্রোটিন পালস টাইমিং হিসাব'
        ),
        steps: [
          l(
            'Step 1: Calculate target per-meal protein bolus for an 80 kg strength athlete using the optimal relative dose (0.40 g/kg/meal): 80 kg * 0.40 g/kg = 32.0 g protein.',
            'ধাপ ১: ৮০ কেজি ওজনের শক্তি ক্রীড়াবিদের জন্য প্রতি বেলার আদর্শ প্রোটিন মাত্রা হিসাব (০.৪০ গ্রাম/কেজি): ৮০ কেজি * ০.৪০ গ্রাম = ৩২.০ গ্রাম প্রোটিন।'
          ),
          l(
            'Step 2: Verify the leucine content of the chosen protein source. Whey isolate contains approximately 11% to 12% leucine by weight: 32.0 g whey protein * 0.115 = 3.68 g L-leucine, comfortably exceeding the 3.0 g leucine trigger threshold.',
            'ধাপ ২: প্রোটিনে লিউসিনের পরিমাণ যাচাই। উন্নত হোয়ে প্রোটিনে প্রায় ১১% থেকে ১২% লিউসিন থাকে: ৩২.০ গ্রাম * ০.১১৫ = ৩.৬৮ গ্রাম লিউসিন, যা ৩.০ গ্রাম লিউসিন থ্রেশহোল্ডকে সহজেই অতিক্রম করে।'
          ),
          l(
            'Step 3: Account for the muscle-full refractory period (~3.5 hours). Design a 4-pulse daily distribution across 16 waking hours: 08:00 (32 g), 12:00 (32 g), 16:00 (Post-workout, 35 g), 20:00 (35 g casein/whey blend).',
            'ধাপ ৩: মাসল-ফুল রিফ্র্যাক্টরি পর্যায় বিবেচনা করে দিনের ১৬ ঘণ্টায় ৪টি পর্বে খাবার বণ্টন: সকাল ৮:০০ (৩২ গ্রাম), দুপুর ১২:০০ (৩২ গ্রাম), বিকাল ৪:০০ (ব্যায়াম পরবর্তী, ৩৫ গ্রাম), রাত ৮:০০ (৩৫ গ্রাম কেসিন ব্লেন্ড)।'
          ),
          l(
            'Step 4: Sum total daily protein: 32 + 32 + 35 + 35 = 134 g protein / 80 kg = 1.67 g/kg/day, perfectly matching the evidence-based Morton et al. saturation inflection point (~1.62 g/kg/day).',
            'ধাপ ৪: দৈনিক মোট প্রোটিন হিসাব: ১৩৪ গ্রাম / ৮০ কেজি = ১.৬৭ গ্রাম/কেজি/দিন, যা মর্টন মেটা-অ্যানালাইসিসের নির্দেশিত সর্বোচ্চ কার্যকর সীমার (~১.৬২ গ্রাম/কেজি) সাথে পুরোপুরি সংগতিপূর্ণ।'
          ),
        ],
        conclusion: l(
          'Distributing 134 g of high-quality protein into four distinct 32-35 g leucine-rich pulses (>=3.0 g leucine each) spaced 4 hours apart maximizes cumulative daily fractional synthetic rate (FSR) while avoiding the continuous desensitization of translation initiation.',
          'দৈনিক ১৩৪ গ্রাম উন্নত প্রোটিনকে ৪ ঘণ্টা ব্যবধানে চারটি লিউসিনসমৃদ্ধ পর্বে (প্রতিটিতে >=৩.০ গ্রাম লিউসিন) গ্রহণ করলে অনুবাদক সংকেত ভোঁতা হওয়া ছাড়াই সারাদিন ধরে পেশি প্রোটিন সংশ্লেষ সর্বোচ্চ মাত্রায় বজায় থাকে।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does consuming a pure glucose solution during a 3-hour marathon fail to elevate exogenous carbohydrate oxidation beyond approximately 60 g/h, and what transport mechanism overcomes this ceiling?',
          '৩ ঘণ্টার ম্যারাথনে কেবল গ্লুকোজ পানীয় গ্রহণ করলে কেন শর্করা জারণ ঘণ্টায় ৬০ গ্রামের বেশি বাড়তে পারে না এবং কোন পরিবহন প্রক্রিয়ার মাধ্যমে এই বাধা দূর করা হয়?'
        ),
        answer: l(
          'Monosaccharide absorption across the intestinal brush-border membrane is limited by sodium-glucose cotransporter 1 (SGLT1), which reaches maximal saturation (Vmax) at ~60 g/h of glucose. Co-ingesting fructose recruits the separate, non-competing glucose transporter 5 (GLUT5), allowing simultaneous absorption and escalating total exogenous carbohydrate oxidation to 90-120 g/h without inducing osmotic gastrointestinal distress.',
          'অন্ত্রের ব্রাশ-বর্ডার ঝিল্লিতে সোডিয়াম-গ্লুকোজ কো-ট্রান্সপোর্টার ১ (SGLT1) ঘণ্টায় প্রায় ৬০ গ্রাম গ্লুকোজেই তার সর্বোচ্চ পরিবহন সীমায় পৌঁছে যায়। সাথে ফ্রুক্টোজ যোগ করলে তা স্বতন্ত্র GLUT5 পরিবাহক দিয়ে শোষিত হয়, যার ফলে উভয় পথ একসাথে কাজ করে পেটের সমস্যা ছাড়াই মোট শর্করা জারণ ঘণ্টায় ৯০-১২০ গ্রাম পর্যন্ত বৃদ্ধি পায়।'
        ),
      },
      {
        question: l(
          'What is the molecular mechanism by which concurrent heavy endurance training immediately prior to resistance training blunts myofibrillar muscular hypertrophy?',
          'ভারোত্তোলনের ঠিক পূর্বে দীর্ঘমেয়াদী সহনশীলতা দৌড় অনুশীলন করলে কোন আণবিক প্রক্রিয়ায় পেশির আয়তন বৃদ্ধি ব্যাহত হয়?'
        ),
        answer: l(
          'Endurance exercise depletes glycogen and elevates the AMP/ATP ratio, phosphorylating and activating AMPK. Activated AMPK phosphorylates TSC2 at Ser-1387, inactivating the GTPase Rheb and preventing it from stimulating mTORC1. Furthermore, AMPK phosphorylates Raptor to physically sequester mTORC1, shutting down p70S6K and eIF4F translation initiation despite resistance loading (the molecular interference phenomenon).',
          'সহনশীলতা ব্যায়ামে শক্তি খরচ হওয়ায় কোষে এএমপি/এটিপি অনুপাত বৃদ্ধি পায় এবং AMPK সক্রিয় হয়। সক্রিয় AMPK তখন TSC2-কে ফসফোরাইলেশন করে রেব (Rheb) জিটিপিয়েজ নিষ্ক্রিয় করে দেয় এবং র‍্যাপ্টরকে আটকে ফেলে; যার ফলে ভারোত্তোলন করা সত্ত্বেও mTORC1 সক্রিয় হতে পারে না এবং প্রোটিন অনুবাদ স্তব্ধ হয়ে যায় (আণবিক ইন্টারফারেন্স ইফেক্ট)।'
        ),
      },
      {
        question: l(
          'How does creatine monohydrate supplementation enhance power output during repeated bouts of high-intensity sprint intervals?',
          'ক্রিয়েটিন মনোহাইড্রেট সাপ্লিমেন্ট কীভাবে একাধিক স্প্রিন্ট বা দ্রুতগতির অনুশীলনে শক্তি বৃদ্ধি করে?'
        ),
        answer: l(
          'Creatine supplementation increases total intramuscular phosphocreatine (PCr) stores by 20% to 40%. Elevated resting PCr provides a larger immediate substrate reservoir for the creatine kinase Lohmann reaction (PCr + ADP <=> Cr + ATP), speeding the rephosphorylation of ADP during the recovery intervals between sprints and sustaining maximal cross-bridge cycling velocity.',
          'ক্রিয়েটিন গ্রহণ পেশির ফসফোক্রিয়েটিন (PCr) ভাণ্ডার ২০% থেকে ৪০% বৃদ্ধি করে। এই অতিরিক্ত পিসিআর ক্রিয়েটিন কাইনেজ লোম্যান বিক্রিয়ার মাধ্যমে স্প্রিন্টের মধ্যবর্তী স্বল্প বিরতিতে দ্রুত এডিপি থেকে এটিপি পুনর্গঠন করে এবং পরবর্তী স্প্রিন্টের জন্য সর্বোচ্চ শক্তি উৎপাদন ক্ষমতা অক্ষুণ্ণ রাখে।'
        ),
      },
    ],
  },
  interactiveDiagram: {
    id: 'sports-bioenergetics-flow',
    title: l(
      'Interactive Sports Bioenergetics, Substrate Crossover & Myofibrillar Translation Explorer',
      'ব্যায়ামের জৈবশক্তিবিজ্ঞান, সাবস্ট্রেট ক্রসওভার ও পেশি প্রোটিন সংশ্লেষ সিমুলেশন'
    ),
    disclaimer: l(
      'Computational physiological and bioenergetic model. Values represent evidence-based benchmarks in trained athletes and do not constitute individual medical or ergogenic prescriptions.',
      'শারীরবৃত্তীয় ও জৈবশক্তিবিজ্ঞান মডেল। মানসমূহ প্রশিক্ষণপ্রাপ্ত ক্রীড়াবিদদের সাধারণ বৈজ্ঞানিক মাপকাঠি এবং কোনো ব্যক্তিগত চিকিৎসা বা প্রেসক্রিপশন নয়।'
    ),
    description: l(
      'Explore the five critical nodes of sports nutrition: the creatine kinase Lohmann phosphagen buffer, adrenergic glycogenolysis, the substrate crossover shift, dual-transporter carbohydrate flux, and Sestrin2-mTORC1 myofibrillar translation.',
      'ক্রীড়া পুষ্টির পাঁচটি মূল নোড পর্যবেক্ষণ করুন: ক্রিয়েটিন কাইনেজ ফসফেজেন বাফার, অ্যাড্রিনালিন গ্লাইকোজেন ভাঙন, সাবস্ট্রেট ক্রসওভার পরিবর্তন, দ্বৈত পরিবাহক শর্করা শোষণ এবং সেস্ট্রিন-২-এমটিওআরসি-১ পেশি প্রোটিন সংশ্লেষ।'
    ),
    svgType: 'sports-bioenergetics-trajectory',
    imageUrl: '/assets/sports_nutrition_bioenergetics_overview.jpg',
    imageCaption: l(
      'Figure 26.1: Exercise Sports Bioenergetics and Substrate Oxidation Continuum. Illustrating myocyte mitochondrial respiration, the Brooks substrate crossover concept (% carbohydrate vs % fat oxidation across VO2max), and post-exercise myofibrillar translation.',
      'চিত্র ২৬.১: ব্যায়ামের জৈবশক্তিবিজ্ঞান ও সাবস্ট্রেট জারণের অবিচ্ছিন্ন ধারা। কঙ্কাল পেশির মাইটোকন্ড্রিয়া, ব্রুকস সাবস্ট্রেট ক্রসওভার ধারণা (VO2max-এর বিপরীতে শর্করা বনাম চর্বি জারণ) এবং ব্যায়াম-পরবর্তী পেশি প্রোটিন সংশ্লেষের সার্বিক চিত্র।'
    ),
    has3D: true,
    threeDType: 'sports-bioenergetics-3d',
    items: [
      {
        id: 'node-phosphagen',
        label: l('Phosphagen Buffer: Creatine Kinase Lohmann Reaction', 'ফসফেজেন বাফার: ক্রিয়েটিন কাইনেজ লোম্যান বিক্রিয়া'),
        description: l(
          'Immediate near-equilibrium ATP regeneration (PCr + ADP <=> Cr + ATP) buffering cellular free energy during the initial 0-10 seconds of maximal exertion.',
          'তীব্র ব্যায়ামের প্রথম ০-১০ সেকেন্ডে ক্রিয়েটিন কাইনেজ দ্বারা ফসফোক্রিয়েটিন থেকে দ্রুত এটিপি পুনর্গঠন।'
        ),
        details: l(
          'Cytosolic creatine kinase utilizes phosphocreatine (PCr, ~80-85 mmol/kg dry weight) to transphosphorylate ADP into ATP, keeping cellular ATP tightly buffered at ~24-26 mmol/kg dw. Creatine monohydrate loading expands this pool by 20-40%, accelerating recovery between repeated high-power sprint intervals.',
          'সাইটোসোলিক ক্রিয়েটিন কাইনেজ ফসফোক্রিয়েটিন ভেঙে এডিপিকে এটিপিতে রূপান্তরিত করে কোষের এটিপির মাত্রা স্থির রাখে। ক্রিয়েটিন সাপ্লিমেন্ট এই ভাণ্ডার ২০-৪০% বাড়িয়ে স্প্রিন্টের মধ্যবর্তী বিরতিতে দ্রুত শক্তি পুনর্গঠন নিশ্চিত করে।'
        ),
        color: '#d97706',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 35, width: 310, height: 50 },
        position3D: { x: -80, y: -40, z: 20 },
      },
      {
        id: 'node-glycolytic',
        label: l('Adrenergic Glycogenolysis & Anaerobic Glycolytic Flux', 'অ্যাড্রিনালিন গ্লাইকোজেন ভাঙন ও দ্রুত গ্লাইকোলাইসিস'),
        description: l(
          'Epinephrine-cAMP-PKA cascade activating glycogen phosphorylase and relieving PFK-1 inhibition to drive carbon flux up to 100-fold above resting rates.',
          'এপিনেফ্রিন হরমোন সংকেতে গ্লাইকোজেন ভেঙে PFK-1 এনজাইম চালুর মাধ্যমে বিশ্রামকালীন হারের চেয়ে ১০০ গুণ দ্রুত শক্তি উৎপাদন।'
        ),
        details: l(
          'High-intensity contraction stimulates beta-2 adrenergic receptors, elevating cAMP and activating PKA. Phosphorylation of glycogen phosphorylase b into phosphorylase a releases glucose-1-phosphate, while allosteric accumulation of AMP and ADP relieves PFK-1 inhibition, fueling intense anaerobic locomotion.',
          'তীব্র ব্যায়ামে বিটা-২ রিসেপ্টর সক্রিয় হয়ে সাইক্লিক এএমপি বাড়ায় এবং গ্লাইকোজেন ফসফোরাইলেজ এনজাইম মুক্ত করে। একই সাথে কোষে এএমপি ও এডিপির বৃদ্ধি PFK-1-কে মুক্ত করে দিয়ে বিপুল পরিমাণ গ্লুকোজ জারণ শুরু করে।'
        ),
        color: '#dc2626',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 105, width: 310, height: 50 },
        position3D: { x: -40, y: 20, z: -30 },
      },
      {
        id: 'node-crossover',
        label: l('The Crossover Point: CPT-1 Inhibition & Carbohydrate Dominance', 'সাবস্ট্রেট ক্রসওভার পয়েন্ট: সিপিটি-১ অবদমন ও শর্করা প্রাধান্য'),
        description: l(
          'Shift from lipid to carbohydrate oxidation as intensity surpasses 60-65% VO2max, driven by malonyl-CoA accumulation and CPT-1 downregulation.',
          'ব্যায়ামের তীব্রতা ৬৫% VO2max ছাড়ালে ম্যালোনাইল-কোএ বৃদ্ধির মাধ্যমে চর্বি জারণ কমে গিয়ে শর্করা প্রধান জ্বালানিতে পরিণত হওয়া।'
        ),
        details: l(
          'Beyond 65% VO2max, fast-twitch Type II fibers are recruited, elevating glycolytic acetyl-CoA and malonyl-CoA. Malonyl-CoA allosterically inhibits CPT-1, blocking long-chain fatty acyl-CoA entry into mitochondria. Carbohydrates become obligatory because their ATP yield per liter of consumed oxygen is 8-11% higher than lipids.',
          '৬৫% VO2max অতিক্রম করলে টাইপ-২ পেশিতন্তু সক্রিয় হয় এবং ম্যালোনাইল-কোএ বেড়ে CPT-1 এনজাইমকে অবদমিত করে। ফলে মাইটোকন্ড্রিয়ায় চর্বি প্রবেশ বন্ধ হয়ে যায় এবং অক্সিজেন সাশ্রয়ী শর্করাই প্রধান ও একমাত্র নির্ভরযোগ্য শক্তিতে পরিণত হয়।'
        ),
        color: '#2563eb',
        sectionId: 'structure',
        svgCoords: { x: 25, y: 175, width: 310, height: 50 },
        position3D: { x: 20, y: -20, z: 40 },
      },
      {
        id: 'node-dual-transporter',
        label: l('Dual-Transporter Absorption: SGLT1 + GLUT5 Flux', 'দ্বৈত অন্ত্রীয় পরিবহন: SGLT1 + GLUT5 শর্করা শোষণ'),
        description: l(
          'Co-ingestion of glucose and fructose in a 2:1 or 1:0.8 ratio bypassing SGLT1 saturation (~60 g/h) to achieve 90-120 g/h oxidation without gut distress.',
          'গ্লুকোজ ও ফ্রুক্টোজ একসাথে গ্রহণ করে SGLT1-এর ৬০ গ্রাম/ঘণ্টা সীমাবদ্ধতা অতিক্রম করে ঘণ্টায় ৯০-১২০ গ্রাম শর্করা শোষণ।'
        ),
        details: l(
          'Glucose utilizes sodium-dependent SGLT1, saturating at 60 g/h. Ingesting fructose recruits the independent GLUT5 facilitated transporter, driving total exogenous carbohydrate oxidation up to 90-120 g/h. This sustains late-stage euglycemia, spares liver glycogen, and prevents osmotic diarrhea during ultra-endurance races.',
          'গ্লুকোজ SGLT1 দিয়ে শোষিত হয়ে ঘণ্টায় ৬০ গ্রামে আটকে যায়। ফ্রুক্টোজ যোগ করলে তা GLUT5 পথ দিয়ে প্রবেশ করে মোট শোষণ ঘণ্টায় ৯০-১২০ গ্রামে উন্নীত করে। এটি রক্তের শর্করা অক্ষুণ্ণ রাখে, যকৃতের সঞ্চিত গ্লাইকোজেন বাঁচায় এবং পেটের সমস্যা দূর করে।'
        ),
        color: '#059669',
        sectionId: 'integration',
        svgCoords: { x: 25, y: 245, width: 310, height: 50 },
        position3D: { x: 60, y: 30, z: -10 },
      },
      {
        id: 'node-mtorc1-mps',
        label: l('Post-Workout Leucine Pulse & Sestrin2-mTORC1 Translation', 'ব্যায়াম-পরবর্তী লিউসিন পালস ও সেস্ট্রিন-২-এমটিওআরসি-১ প্রোটিন সংশ্লেষ'),
        description: l(
          'Overcoming the muscle-full refractory state via pulsed leucine (>=3.0 g) activating Sestrin2-GATOR2 to assemble eIF4F and drive myofibrillar synthesis.',
          'প্রতি বেলায় কমপক্ষে ৩.০ গ্রাম লিউসিনসমৃদ্ধ প্রোটিন গ্রহণের মাধ্যমে মাসল-ফুল পর্যায় কাটিয়ে mTORC1 দিয়ে নতুন পেশি গঠন।'
        ),
        details: l(
          'Intracellular leucine binds Sestrin2, releasing GATOR2 to activate RagA/B GTPases. RagA/B translocates mTORC1 to lysosomal Rheb, triggering p70S6K phosphorylation and liberating eIF4E from 4E-BP1. Providing 25-40 g high-quality protein every 3-5 hours optimizes cumulative daily fractional synthetic rate (FSR).',
          'কোষের ভেতরের লিউসিন সেস্ট্রিন-২-এর সাথে যুক্ত হয়ে লাইসোসোমে mTORC1 সক্রিয় করে এবং p70S6K ও eIF4E দিয়ে প্রোটিন অনুবাদ শুরু করে। প্রতি ৩-৫ ঘণ্টা পরপর ২৫-৪০ গ্রাম প্রোটিন (ন্যূনতম ৩ গ্রাম লিউসিন) গ্রহণ সারাদিন ধরে পেশি গঠনকে সর্বোচ্চ মাত্রায় রাখে।'
        ),
        color: '#7c3aed',
        sectionId: 'mechanism',
        svgCoords: { x: 25, y: 315, width: 310, height: 50 },
        position3D: { x: 0, y: 60, z: 30 },
      },
    ],
  },
  assessment: {
    question: l(
      'An elite endurance cyclist competing in a 5-hour mountainous road race ingests 80 grams per hour of pure maltodextrin (a glucose polymer) dissolved in water. During hour 3, he develops severe abdominal distension, cramping, and osmotic diarrhea, while his power output declines markedly. What is the fundamental physiological mechanism responsible for his gastrointestinal distress, and what dietary adjustment is evidence-based?',
      '৫ ঘণ্টার পাহাড়ি সাইক্লিং প্রতিযোগিতায় অংশ নেওয়া একজন সাইক্লিস্ট প্রতি ঘণ্টায় ৮০ গ্রাম বিশুদ্ধ মাল্টোডেক্সট্রিন (গ্লুকোজ পলিমার) পানিতে গুলে খাচ্ছেন। ৩য় ঘণ্টায় তার পেটে তীব্র গ্যাস, কামড়ানো ও ডায়রিয়া শুরু হয় এবং গতি কমে যায়। এর মূল শারীরবৃত্তীয় কারণ কী এবং এর প্রমাণভিত্তিক সমাধান কী?'
    ),
    options: [
      l(
        'Intestinal SGLT1 transporters are saturated at ~60 g/h of pure glucose; the excess 20 g/h unabsorbed maltodextrin exerted an osmotic draw of fluid into the intestinal lumen. Replacing a portion of glucose with fructose in a 2:1 or 1:0.8 ratio recruits independent GLUT5 transporters, eliminating the unabsorbed solute load and escalating oxidation up to 90-120 g/h.',
        'অন্ত্রের SGLT1 পরিবাহক ঘণ্টায় প্রায় ৬০ গ্রাম গ্লুকোজেই সম্পৃক্ত হয়ে যায়; বাকি অতিরিক্ত ২০ গ্রাম অশোষিত শর্করা অন্ত্রে পানি টেনে নিয়ে পেটের সমস্যা তৈরি করেছে। গ্লুকোজের কিছু অংশ ফ্রুক্টোজ দিয়ে প্রতিস্থাপন করে ২:১ বা ১:০.৮ অনুপাতে খেলে তা স্বাধীন GLUT5 পরিবাহক ব্যবহার করে এবং ঘণ্টায় ৯০-১২০ গ্রাম পর্যন্ত শোষণ নিশ্চিত করে।'
      ),
      l(
        'Maltodextrin directly inhibits pancreatic amylase via allosteric feedback, blocking all carbohydrate breakdown; the cyclist should switch exclusively to dietary medium-chain triglycerides.',
        'মাল্টোডেক্সট্রিন অগ্ন্যাশয়ের অ্যামাইলেজ এনজাইমকে সরাসরি বন্ধ করে দেয়; তাই সাইক্লিস্টের উচিত শর্করা বাদ দিয়ে কেবল মিডিয়াম-চেইন ট্রাইগ্লিসারাইড চর্বি গ্রহণ করা।'
      ),
      l(
        'Exercise-induced hepatic glycogenolysis flooded systemic circulation with 500 g/h of endogenous glucose, suppressing insulin and halting all intestinal mucosal transport.',
        'ব্যায়ামের কারণে যকৃত থেকে অতিরিক্ত ৫০০ গ্রাম গ্লুকোজ রক্তে আসায় ইনসুলিন কমে গিয়ে অন্ত্রের সমস্ত শোষণ সম্পূর্ণ বন্ধ হয়ে গেছে।'
      ),
      l(
        'Pure maltodextrin induces hyperacute Relative Energy Deficiency in Sport (REDs), causing instant osteoclast activation and irreversible central nervous system failure.',
        'বিশুদ্ধ মাল্টোডেক্সট্রিন তাৎক্ষণিকভাবে আপেক্ষিক শক্তি ঘাটতি (REDs) তৈরি করে স্নায়ুতন্ত্রের স্থায়ী ক্ষতি করেছে।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Correct. The brush-border enterocyte symporter SGLT1 reaches maximal transport saturation at approximately 60 g/h (~1.0 g/min) for pure glucose or glucose polymers. Ingesting 80 g/h leaves ~20 g/h of unabsorbed hexose in the gut lumen, drawing water osmotically to induce distension, cramping, and diarrhea. Introducing fructose recruits the sodium-independent GLUT5 uniporter, allowing simultaneous non-competing absorption that safely elevates total exogenous carbohydrate oxidation to 90-120 g/h while restoring splanchnic comfort.',
      'সঠিক উত্তর। অন্ত্রের ব্রাশ-বর্ডারের SGLT1 পরিবাহক কেবল গ্লুকোজের ক্ষেত্রে ঘণ্টায় প্রায় ৬০ গ্রামে সম্পৃক্ত হয়ে যায়। ঘণ্টায় ৮০ গ্রাম খেলে বাকি ২০ গ্রাম চিনি অন্ত্রে জমে থেকে বাইরে থেকে পানি টেনে নেয়, ফলে পেট ফাঁপা, মোচড়ানো ও ডায়রিয়া হয়। এর সাথে ফ্রুক্টোজ যোগ করলে তা স্বাধীন GLUT5 পরিবাহক দিয়ে শোষিত হয় এবং পেটের অস্বস্তি ছাড়াই মোট শোষণের হার ঘণ্টায় ৯০-১২০ গ্রামে উন্নীত করে।'
    ),
  },
}
