import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics14References: LessonReference[] = [
  {
    id: 'ref-jenkins-gi-original-1981',
    authors: 'Jenkins DJ, Wolever TM, Taylor RH, et al.',
    title: 'Glycemic Index of Foods: A Physiological Basis for Carbohydrate Exchange',
    organization: 'The American Journal of Clinical Nutrition',
    year: 1981,
    url: 'https://academic.oup.com/ajcn/article-abstract/34/3/362/4692881',
    doi: '10.1093/ajcn/34.3.362',
  },
  {
    id: 'ref-atkinson-gi-tables-2021',
    authors: 'Atkinson FS, Brand-Miller JC, Foster-Powell K, Buyken AE, Goletzke J',
    title: 'International Tables of Glycemic Index and Glycemic Load Values 2021: A Systematic Review',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2021,
    url: 'https://academic.oup.com/ajcn/article/114/5/1625/6320078',
    doi: '10.1093/ajcn/nqab233',
  },
  {
    id: 'ref-ludwig-gi-review-2002',
    authors: 'Ludwig DS',
    title: 'The Glycemic Index: Physiological Mechanisms Relating to Obesity, Diabetes, and Cardiovascular Disease',
    organization: 'JAMA',
    year: 2002,
    url: 'https://jamanetwork.com/journals/jama/article-abstract/194916',
    doi: '10.1001/jama.287.18.2414',
  },
  {
    id: 'ref-brandmiller-gi-curve-2009',
    authors: 'Brand-Miller JC, Stockmann K, Atkinson F, Petocz P, Denyer G',
    title: 'Glycemic Index, Postprandial Glycemia, and the Shape of the Curve in Healthy Subjects: Analysis of a Database of More Than 1,000 Foods',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2009,
    url: 'https://academic.oup.com/ajcn/article/89/1/97/4598276',
    doi: '10.3945/ajcn.2008.26354',
  },
  {
    id: 'ref-brighenti-second-meal-2006',
    authors: 'Brighenti F, Benini L, Del Rio D, et al.',
    title: 'Colonic Fermentation of Indigestible Carbohydrates Contributes to the Second-Meal Effect',
    organization: 'The American Journal of Clinical Nutrition',
    year: 2006,
    url: 'https://academic.oup.com/ajcn/article/83/4/817/4649176',
    doi: '10.1093/ajcn/83.4.817',
  },
  {
    id: 'ref-ada-soc-behavior-2024',
    authors: 'American Diabetes Association Professional Practice Committee',
    title: '5. Facilitating Positive Health Behaviors and Well-being to Improve Health Outcomes: Standards of Care in Diabetes—2024',
    organization: 'Diabetes Care',
    year: 2024,
    url: 'https://diabetesjournals.org/care/article/47/Supplement_1/S77/153954/5-Facilitating-Positive-Health-Behaviors-and-Well',
    doi: '10.2337/dc24-S005',
  },
]

export const dietetics14Lesson: LessonTopic = {
  id: 'topic.dietetics.glycemic-index-load',
  slug: 'glycemic-index-glycemic-load-menu-engineering',
  version: 1,
  updatedAt: '2026-11-04',
  title: l(
    '14 · Glycemic Index & Glycemic Load: Precision Meal Engineering',
    '১৪ · গ্লাইসেমিক ইনডেক্স ও গ্লাইসেমিক লোড: নির্ভুল খাবার নকশা'
  ),
  summary: l(
    'Master the physiological science of Glycemic Index (GI) and Glycemic Load (GL), starch retrogradation (amylose vs. amylopectin), the Watermelon Paradox, composite meal matrix kinetics, and the second-meal effect.',
    'গ্লাইসেমিক ইনডেক্স (GI) ও গ্লাইসেমিক লোড (GL)-এর পুষ্টিবিজ্ঞান, স্টার্চের রূপান্তর (অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন), তরমুজের আপাত প্যারাডক্স, মিশ্র খাবারের পরিপাক গতি এবং সেকেন্ড-মিল ইফেক্ট আয়ত্ত করুন।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.food-exchange-systems'],
  relatedTopicIds: ['topic.dietetics.food-exchange-systems', 'topic.dietetics.carb-counting-icr'],
  objectives: [
    l(
      'Define Glycemic Index (GI) and Glycemic Load (GL), and resolve clinical misconceptions including the Watermelon Paradox.',
      'গ্লাইসেমিক ইনডেক্স (GI) এবং গ্লাইসেমিক লোড (GL)-এর সংজ্ঞা দেওয়া এবং তরমুজের দৃষ্টান্তসহ সাধারণ ক্লিনিক্যাল ভুল ধারণা দূর করা।'
    ),
    l(
      'Contrast the molecular hydrolysis kinetics of linear amylose versus branched amylopectin and harness hydrothermal starch retrogradation (RS3).',
      'সরল শিকলের অ্যামাইলোজ এবং শাখান্বিত অ্যামাইলোপেকটিনের হজমের গতির তুলনা করা এবং স্টার্চের শীতলীকরণ বা প্রতিরোধী স্টার্চের (RS3) সুবিধা কাজে লাগানো।'
    ),
    l(
      'Engineer low-glycemic composite meals using viscous soluble fiber, lipid-induced enterogastrone gastric braking, protein incretin stimulation, and organic acids.',
      'আঠালো খাদ্য আঁশ, চর্বি-নির্ভর এন্টারোগ্যাস্ট্রোন হরমোন, প্রোটিনের ইনক্রেটিন উদ্দীপনা এবং অ্যাসিডিক উপাদানের সমন্বয়ে কম-গ্লাইসেমিক খাবার নকশা করা।'
    ),
    l(
      'Harness colonic fermentation and short-chain fatty acid (SCFA) generation to elicit the clinical "second-meal effect" for 24-hour glycemic stability.',
      'বৃহদন্ত্রে গাঁজন ও শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) তৈরির মাধ্যমে পরবর্তী বেলার সুগার নিয়ন্ত্রণের জন্য "সেকেন্ড-মিল ইফেক্ট" প্রয়োগ করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A multi-variable biochemical diagram contrasting high-glycemic versus engineered low-glycemic meals: 1) High-GI/GL meal (puffed rice and sweet tea) causes immediate gastric dumping, vertical glucose spike (210 mg/dL), severe insulin surge, and reactive hypoglycemia crash (62 mg/dL) with hunger and fatigue. 2) Engineered low-GL composite meal (steel-cut oats, boiled egg, chia seeds, yogurt, and lemon) activates 4 biological brakes: viscous fiber diffusion barrier, lipid-CCK pyloric constriction, protein incretin (GLP-1) release, and acetic acid alpha-amylase inhibition, producing a smooth, blunted curve (peak 132 mg/dL) with sustained 4.5-hour satiety.',
      'উচ্চ-গ্লাইসেমিক বনাম প্রকৌশলগত কম-গ্লাইসেমিক খাবারের শারীরবৃত্তীয় তুলনামূলক চিত্র: ১) উচ্চ-GI খাবার (মুড়ি ও চিনিযুক্ত চা) দ্রুত পাকস্থলী খালি করে রক্তে খাড়া সুগার স্পাইক (২১০ mg/dL), অতিরিক্ত ইনসুলিন নিঃসরণ এবং হঠাৎ রিঅ্যাক্টিভ হাইপোগ্লাইসেমিয়া (৬২ mg/dL) ও ক্লান্তি ঘটায়। ২) পরিকল্পিত কম-GL খাবার (স্টিল-কাট ওটস, ডিম, চিয়া সিড, টক দই ও লেবু) পরিপাকের ৪টি ব্রেক চালু করে: আঠালো আঁশের বাধা, চর্বির CCK হরমোনের মাধ্যমে পাকস্থলী মন্থরকরণ, প্রোটিনের ইনক্রেটিন (GLP-1) সক্রিয়করণ এবং লেবুর অ্যাসিডিক এনজাইম বাধা—যার ফলে সুগার শান্তভাবে মাত্র ১৩২ mg/dL-এ ওঠে এবং টানা ৪.৫ ঘণ্টা পর্যন্ত পূর্ণ কর্মক্ষমতা বজায় রাখে।'
    ),
    steps: [
      l(
        'Step 1: Fiber Viscosity Brake. Soluble beta-glucan and chia mucilage swell into a thick luminal hydrogel, trapping glucose and slowing microvilli diffusion.',
        'ধাপ ১: খাদ্য আঁশের আঠালো ব্রেক: দ্রবণীয় বিটা-গ্লুকান ও চিয়ার জেল পেটের ভেতর ঘন স্তর তৈরি করে গ্লুকোজ শোষণের গতি কমায়।'
      ),
      l(
        'Step 2: Lipid Enterogastrone Brake. Healthy unsaturated fats stimulate CCK and PYY release, constricting the pyloric sphincter and delaying gastric emptying.',
        'ধাপ ২: চর্বির গ্যাস্ট্রিক ব্রেক: স্বাস্থ্যকর চর্বি CCK ও PYY হরমোন বাড়িয়ে পাকস্থলীর মুখ সংকুচিত করে খাবার প্রবেশের গতি ধীর করে।'
      ),
      l(
        'Step 3: Protein Incretin Priming. Dietary protein stimulates L-cell GLP-1 secretion, priming timely first-phase insulin while shutting down glucagon.',
        'ধাপ ৩: প্রোটিনের ইনক্রেটিন উদ্দীপনা: ডিমের প্রোটিন GLP-1 হরমোন নিঃসরণ করিয়ে সময়মতো ইনসুলিন প্রস্তুত রাখে এবং গ্লুকাগন কমায়।'
      ),
      l(
        'Step 4: Organic Acid Enzyme Inhibition. Culinary acids (lemon citric acid, fermented curd lactic acid) lower chyme pH and partially inhibit amylase activity.',
        'ধাপ ৪: জৈব অ্যাসিডের এনজাইম বাধা: লেবু ও টক দইয়ের অ্যাসিডিক উপাদান পাচক এনজাইমকে কিছুটা মন্থর করে পরিপাককে দীর্ঘায়িত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A patient with prediabetes is advised to avoid watermelon because its Glycemic Index is high (GI = 72). A standard 120-gram cup of diced watermelon contains only 6 grams of available carbohydrate. What is the calculated Glycemic Load (GL) of this serving, and what is its correct clinical interpretation?',
      'প্রি-ডায়াবেটিসে আক্রান্ত এক রোগীকে তরমুজের গ্লাইসেমিক ইনডেক্স বেশি (GI = ৭২) হওয়ার কারণে তরমুজ খেতে নিষেধ করা হয়েছে। স্বাভাবিক ১ কাপ (১২০ গ্রাম) তরমুজে মাত্র ৬ গ্রাম কার্যকর শর্করা থাকে। এই এক কাপ তরমুজের গ্লাইসেমিক লোড (GL) কত এবং এর সঠিক ক্লিনিক্যাল ব্যাখ্যা কী?'
    ),
    options: [
      l(
        'GL = 4.3 (Low GL); watermelon has minimal impact on postprandial blood glucose and may be safely enjoyed in moderate portions.',
        'GL = ৪.৩ (কম গ্লাইসেমিক লোড); তরমুজের প্রতি অংশে শর্করা খুব কম থাকায় তা রক্তে সুগার প্রায় বাড়ায় না এবং পরিমিত পরিমাণে নিরাপদে খাওয়া যায়।'
      ),
      l(
        'GL = 72.0 (High GL); watermelon triggers severe diabetic ketoacidosis and must be strictly banned.',
        'GL = ৭২.০ (উচ্চ গ্লাইসেমিক লোড); তরমুজ মারাত্মক ডায়াবেটিক সংকট ঘটায় এবং সম্পূর্ণ নিষিদ্ধ।'
      ),
      l(
        'GL = 12.0 (Medium GL); watermelon acts identically to pure glucose powder.',
        'GL = ১২.০ (মাঝারি লোড); তরমুজ বিশুদ্ধ গ্লুকোজ পাউডারের মতো কাজ করে।'
      ),
      l(
        'GL cannot be calculated because fruit sugars do not follow biochemical laws.',
        'ফলের শর্করা জীববিজ্ঞানের নিয়ম মানে না বিধায় GL হিসাব করা যায় না।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Formula: Glycemic Load = (GI * Available Carbohydrate in grams) / 100. For watermelon: GL = (72 * 6) / 100 = 4.32 ≈ 4.3. Any food with a GL <= 10 is classified as Low Glycemic Load. Although watermelon carbohydrate rapidly enters the bloodstream per gram (high GI), its high water content (92%) means a standard serving delivers very few total carbohydrate grams, resulting in a gentle, harmless glycemic response. Excluding watermelon based solely on GI is a common clinical misconception.',
      'সূত্র: গ্লাইসেমিক লোড = (GI * কার্যকর শর্করা গ্রাম) / ১০০। তরমুজের ক্ষেত্রে: GL = (৭২ * ৬) / ১০০ = ৪.৩২ ≈ ৪.৩। ১০ বা তার কম GL সম্পন্ন খাবার "কম গ্লাইসেমিক লোড" হিসেবে স্বীকৃত। যদিও তরমুজের শর্করা দ্রুত রক্তে ঢোকে (উচ্চ GI), কিন্তু তরমুজের ৯২% পানি হওয়ায় এক বাটিতে মোট শর্করার পরিমাণ খুব কম থাকে (মাত্র ৬ গ্রাম)। ফলে তা রক্তে কোনো বিপজ্জনক সুগার বৃদ্ধি ঘটায় না। কেবল GI দেখে তরমুজ নিষিদ্ধ করা একটি চরম ভ্রান্ত ধারণা।'
    ),
  },
  evidenceBySection: {
    'sec-campfire-analogy': ['ref-jenkins-gi-original-1981', 'ref-ludwig-gi-review-2002'],
    'sec-gi-definition-benchmarks': ['ref-jenkins-gi-original-1981', 'ref-atkinson-gi-tables-2021'],
    'sec-gl-watermelon-paradox': ['ref-atkinson-gi-tables-2021', 'ref-ludwig-gi-review-2002'],
    'sec-amylose-amylopectin': ['ref-brandmiller-gi-curve-2009', 'ref-atkinson-gi-tables-2021'],
    'sec-retrogradation-rs3': ['ref-brandmiller-gi-curve-2009', 'ref-brighenti-second-meal-2006'],
    'sec-second-meal-effect': ['ref-brighenti-second-meal-2006', 'ref-jenkins-gi-original-1981'],
    'sec-composite-meal-brakes': ['ref-ludwig-gi-review-2002', 'ref-ada-soc-behavior-2024'],
    'sec-endothelial-volatility': ['ref-ludwig-gi-review-2002', 'ref-brandmiller-gi-curve-2009'],
    'sec-worked-menu-engineering': ['ref-atkinson-gi-tables-2021', 'ref-ada-soc-behavior-2024'],
  },
  references: dietetics14References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-campfire-analogy',
          heading: l(
            '1. The Campfire Kindling vs. Hardwood Log Analogy',
            '১. ক্যাম্পফায়ারের শুকনো পাতা বনাম শক্ত কাঠের গুঁড়ির সহজ উপমা'
          ),
          paragraphs: [
            l(
              'To understand how different carbohydrate foods impact the human body, imagine lighting a campfire [1]. If you throw a pile of dry leaves, paper, or tiny twigs (kindling) onto the fire, it erupts into an instant, towering bonfire. The flame is blindingly hot, but within minutes it burns itself out, leaving cold gray ashes. This is exactly what high-glycemic foods (such as white sugar, white bread, puffed rice, or cornflakes) do to your bloodstream: they hydrolyze almost instantly into glucose, triggering a massive, rapid surge in blood sugar followed by a sharp insulin crash and sudden hunger [1].',
              'বিভিন্ন শর্করা জাতীয় খাবার আমাদের শরীরে কীভাবে কাজ করে তা বুঝতে একটি ক্যাম্পফায়ারের কথা ভাবুন [1]। আগুনে যদি একমুঠো শুকনো পাতা, কাগজ বা খড়কুটো ফেলে দেওয়া হয়, তবে মুহূর্তের মধ্যে দাউ দাউ করে আগুন জ্বলে ওঠে। উত্তাপ খুব বেশি হলেও কয়েক মিনিটের মধ্যে তা নিভে ছাই হয়ে যায়। উচ্চ গ্লাইসেমিক খাবার (যেমন চিনি, ময়দার পাউরুটি, মুড়ি বা কর্নফ্লেক্স) আমাদের রক্তে ঠিক এই কাজটিই করে: এগুলো খাওয়ার সাথে সাথে ভেঙে রক্তে গ্লুকোজের বন্যা বইয়ে দেয়, যার ফলে তীব্র সুগার স্পাইক হয় এবং শরীর অতিরিক্ত ইনসুলিন নিঃসরণ করে দ্রুত সুগার নামিয়ে ফেলে রোগীকে ক্লান্ত ও ক্ষুধার্ত করে [1]।'
            ),
            l(
              'In contrast, placing a dense, seasoned oak or mahogany log onto the coals produces a calm, steady, and long-lasting flame [3]. The log burns slowly and steadily for four to six hours, releasing continuous, gentle warmth without uncontrollable smoke or sudden drops in temperature. Low-glycemic foods (such as whole lentils, chickpeas, steel-cut oats, and non-starchy vegetables) behave just like dense hardwood: their intact cellular matrices and fiber shield their starches from rapid digestion, trickling glucose smoothly into the blood and sustaining energy for hours [3].',
              'বিপরীতে, আগুনে যদি একটি শক্ত শাল বা মেহগনি কাঠের গুঁড়ি দেওয়া হয়, তবে তা শান্ত ও স্থিরভাবে ঘণ্টার পর ঘণ্টা ধরে জ্বলতে থাকে [3]। চার থেকে ছয় ঘণ্টা ধরে কোনো ধোঁয়া বা আকস্মিক নিভে যাওয়া ছাড়াই তা সমান উষ্ণতা জোগায়। কম গ্লাইসেমিক খাবার (যেমন গোটা মসুর ডাল, ছোলা, লাল চালের ভাত এবং আঁশযুক্ত শাকসবজি) ঠিক এই শক্ত কাঠের মতো কাজ করে: এদের কোষের প্রাচীর ও আঁশ শর্করাকে ধীরে ধীরে ভাঙে, যার ফলে রক্তে সারাক্ষণ সুষম শক্তি পৌঁছায় এবং সুগারের আকস্মিক উত্থান-পতন ঘটে না [3]।'
            ),
          ],
        },
        {
          id: 'sec-gi-definition-benchmarks',
          heading: l(
            '2. Glycemic Index (GI): Standardized Biological Benchmarking',
            '২. গ্লাইসেমিক ইনডেক্স (GI): জীবতাত্ত্বিক মানদণ্ড ও পরিমাপ'
          ),
          paragraphs: [
            l(
              'The Glycemic Index (GI) was developed in 1981 by Dr. David Jenkins and colleagues at the University of Toronto as a scientific framework to rank carbohydrates based on their real-world impact on blood glucose, rather than their chemical classification as simple or complex [1].',
              '১৯৮১ সালে টরন্টো বিশ্ববিদ্যালয়ের অধ্যাপক ড. ডেভিড জেনকিন্স এবং তার সহকর্মীরা গ্লাইসেমিক ইনডেক্স (GI) উদ্ভাবন করেন। খাবার কেবল রাসায়নিকভাবে সরল না জটিল তা না দেখে, খাওয়ার পর রক্তে সুগার বৃদ্ধির গতির ওপর ভিত্তি করে শর্করাকে মূল্যায়ন করাই এর মূল উদ্দেশ্য ছিল [1]।'
            ),
            l(
              'GI is determined experimentally by feeding volunteers a portion of test food containing exactly 50 grams of available (digestible) carbohydrate, and then tracking blood glucose concentrations every 15 to 30 minutes over a 2-hour period [2]. The incremental Area Under the Curve (iAUC) for the test food is compared to a reference standard (pure glucose solution = 100, or white bread = 100) [2]:',
              'গবেষণাগারে ৫০ গ্রাম কার্যকর শর্করাযুক্ত একটি নির্দিষ্ট খাবার সুস্থ ব্যক্তিদের খাইয়ে প্রতি ১৫ থেকে ৩০ মিনিট পরপর দুই ঘণ্টা রক্ত পরীক্ষা করা হয়। এরপর রক্তে গ্লুকোজ বৃদ্ধির বক্ররেখা (Area Under the Curve) মেপে বিশুদ্ধ গ্লুকোজের (যার মান ১০০) সাথে তুলনা করে GI মান নির্ধারণ করা হয় [2]:'
            ),
          ],
          bullets: [
            l(
              'Low Glycemic Index (GI <= 55): Digested and absorbed slowly; creates gentle, blunted glucose curves [2]. Examples: Whole brown lentils (GI 28–32), boiled chickpeas (GI 28), soy milk (GI 34), plain whole milk (GI 31), apples (GI 36), barley (GI 25), non-starchy leafy greens (GI < 15).',
              'কম গ্লাইসেমিক ইনডেক্স (GI <= ৫৫): অত্যন্ত ধীরে হজম হয় এবং রক্তে সুগার স্থিতিশীল রাখে [2]। উদাহরণ: গোটা মসুর ডাল (GI ২৮-৩২), সিদ্ধ ছোলা (GI ২৮), টক দই (GI ৩৬), আপেল (GI ৩৬), বার্লি বা যব (GI ২৫), শাকসবজি (GI < ১৫)।'
            ),
            l(
              'Medium Glycemic Index (GI 56–69): Moderate digestion rate [2]. Examples: Parboiled long-grain rice (GI 55–60), whole wheat stone-ground chapati (GI 58–62), boiled sweet corn (GI 60), boiled new baby potatoes (GI 62), bananas (GI 58).',
              'মাঝারি গ্লাইসেমিক ইনডেক্স (GI ৫৬-৬৯): পরিপাকের গতি মাঝারি [2]। উদাহরণ: সিদ্ধ চালের ভাত (GI ৫৫-৬০), লাল আটার হাতে তৈরি রুটি (GI ৫৮-৬২), মিষ্টি ভুট্টা (GI ৬০), খোসাসহ সিদ্ধ নতুন আলু (GI ৬২), পাকা কলা (GI ৫৮)।'
            ),
            l(
              'High Glycemic Index (GI >= 70): Rapidly hydrolyzed into glucose; triggers precipitous insulin surges [2]. Examples: Pure glucose powder (GI 100), white sandwich bread (GI 75), puffed rice / muri (GI 82–85), cornflakes (GI 81), instant mashed potatoes (GI 87), short-grain sticky white rice (GI 78–82).',
              'উচ্চ গ্লাইসেমিক ইনডেক্স (GI >= ৭০): পলকের মধ্যে রক্তে শোষিত হয় এবং ইনসুলিন স্পাইক ঘটায় [2]। উদাহরণ: বিশুদ্ধ গ্লুকোজ (GI ১০০), সাদা পাউরুটি (GI ৭৫), মুড়ি (GI ৮২-৮৫), কর্নফ্লেক্স (GI ৮১), ঝটপট আলু ভর্তা (GI ৮৭), সাদা আঠালো ভাত (GI ৮০)।'
            ),
          ],
        },
        {
          id: 'sec-gl-watermelon-paradox',
          heading: l(
            '3. Glycemic Load (GL) & Resolving the Watermelon Paradox',
            '৩. গ্লাইসেমিক লোড (GL) ও তরমুজের দৃষ্টান্তমূলক প্যারাডক্স'
          ),
          paragraphs: [
            l(
              'A common clinical misunderstanding is evaluating foods purely by their Glycemic Index. The Glycemic Index measures the speed of carbohydrate absorption, but it ignores the actual quantity of carbohydrate in a typical, real-world serving [2].',
              'পুষ্টিবিজ্ঞানে সবচেয়ে সাধারণ ভুলগুলোর একটি হলো খাবারকে কেবল গ্লাইসেমিক ইনডেক্স দিয়ে বিচার করা। GI নির্দেশ করে খাবারটি কতটা দ্রুত রক্তে শোষিত হয়, কিন্তু পাতে খাবারের স্বাভাবিক পরিমাণে মোট কতটুকু শর্করা আছে তা GI নির্দেশ করে না [2]।'
            ),
            l(
              'To resolve this limitation, Harvard epidemiologists established the concept of Glycemic Load (GL). Glycemic Load integrates both the quality (GI) and the quantity of available carbohydrate consumed [2, 3]: Formula: Glycemic Load = (GI * Available Carbohydrate in grams) / 100.',
              'এই সীমাবদ্ধতা দূর করতে গবেষকেরা গ্লাইসেমিক লোড (GL) উদ্ভাবন করেন। গ্লাইসেমিক লোড শর্করার গতি (GI) এবং খাবারের পরিমাণের (গ্রাম) যৌথ প্রভাবকে প্রকাশ করে [2, 3]: সূত্র: গ্লাইসেমিক লোড = (GI * কার্যকর শর্করা গ্রাম) / ১০০।'
            ),
          ],
          bullets: [
            l(
              'The Watermelon Paradox Explained: Fresh watermelon has a very high Glycemic Index of 72 to 76 (placing it firmly in the "High GI" tier) [2]. Because of this number, many uninformed providers incorrectly forbid watermelon for diabetic patients. However, watermelon is 92% water. A generous 120-gram cup of diced watermelon contains only 6 grams of available carbohydrate. Calculating its Glycemic Load: GL = (72 * 6) / 100 = 4.32 ≈ 4.3. A GL of 4.3 is exceptionally low (well below the low GL threshold of 10). Consuming a reasonable slice of watermelon produces negligible postprandial glucose elevation.',
              'তরমুজের প্যারাডক্সের বাস্তব ব্যাখ্যা: তরমুজের গ্লাইসেমিক ইনডেক্স (GI) অত্যন্ত বেশি—প্রায় ৭২ থেকে ৭৬ [2]। এই সংখ্যাটি দেখে অনেক চিকিৎসক ভুলবশত ডায়াবেটিস রোগীদের তরমুজ সম্পূর্ণ নিষেধ করেন। কিন্তু তরমুজের ৯২ শতাংশই পানি। এক কাপ (১২০ গ্রাম) তরমুজে মাত্র ৬ গ্রাম শর্করা থাকে। এর গ্লাইসেমিক লোড হিসাব করলে দাঁড়ায়: GL = (৭২ * ৬) / ১০০ = ৪.৩। অর্থাৎ এর গ্লাইসেমিক লোড অত্যন্ত কম (১০ এর অনেক নিচে)। স্বাভাবিক এক বাটি তরমুজ খেলে রক্তে সুগারের মাত্রা প্রায় বাড়ে না বললেই চলে।'
            ),
            l(
              'Clinical Classification of Glycemic Load (per individual serving): Low GL: <= 10; Medium GL: 11 to 19; High GL: >= 20. Daily Cumulative Glycemic Load Target: For optimal cardiometabolic protection, total daily diet GL should be kept < 80 to 100 [2, 3].',
              'গ্লাইসেমিক লোডের ক্লিনিক্যাল মানদণ্ড (প্রতি সার্ভিংয়ে): কম GL: ১০ বা তার নিচে; মাঝারি GL: ১১ থেকে ১৯; উচ্চ GL: ২০ বা তার বেশি। সারাদিনের মোট গ্লাইসেমিক লোডের কাঙ্ক্ষিত লক্ষ্যমাত্রা হওয়া উচিত ৮০ থেকে ১০০ এর নিচে [2, 3]। '
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-amylose-amylopectin',
          heading: l(
            '1. Molecular Architecture of Starches: Linear Amylose vs. Branched Amylopectin',
            '১. শ্বেতসারের আণবিক গঠন: সরল অ্যামাইলোজ বনাম শাখায়িত অ্যামাইলোপেকটিন'
          ),
          paragraphs: [
            l(
              'Plant starches consist of two distinct glucose homopolymers synthesized inside plastids: amylose and amylopectin. The ratio between these two polymers is the primary biochemical determinant of a food’s Glycemic Index [4].',
              'উদ্ভিজ্জ শ্বেতসার বা স্টার্চ দুটি ভিন্ন গ্লুকোজ পলিমার নিয়ে গঠিত: অ্যামাইলোজ এবং অ্যামাইলোপেকটিন। এই দুই পলিমারের অনুপাতই নির্ধারণ করে একটি খাবারের গ্লাইসেমিক ইনডেক্স কেমন হবে [4]। '
            ),
          ],
          bullets: [
            l(
              'Linear Amylose (Slow Kinetics, Low GI): Amylose is an unbranched, linear polymer composed of D-glucose units connected exclusively by alpha-1,4-glycosidic bonds [4]. Because of its linear geometry, amylose forms tight, compact right-handed helical coils stabilized by extensive internal hydrogen bonding. This dense helical architecture severely restricts the physical access of pancreatic alpha-amylase and mucosal disaccharidases, resulting in slow enzymatic cleavage and a low glycemic response (e.g., legumes and Basmati rice have high amylose content, ~25–30%).',
              'সরল অ্যামাইলোজ (ধীর গতি, কম GI): অ্যামাইলোজ হলো একটি শাখাহীন সরল পলিমার যা আলফা-১,৪ বন্ধন দিয়ে গঠিত [4]। সরল গঠনের কারণে এটি অত্যন্ত আঁটসাঁট সর্পিল কুন্ডলী তৈরি করে। এই ঘন গঠনের ভেতর অগ্ন্যাশয়ের অ্যামাইলেজ এনজাইম সহজে প্রবেশ করতে পারে না; ফলে এটি অত্যন্ত ধীরে হজম হয় এবং রক্তে সুগার বাড়ে না (যেমন মসুর ডাল ও বাসমতি চালে ২৫-৩০% অ্যামাইলোজ থাকে)।'
            ),
            l(
              'Branched Amylopectin (Rapid Kinetics, High GI): Amylopectin is a massive, highly branched polymer containing alpha-1,4-linear linkages with frequent alpha-1,6-branch points occurring every 24 to 30 glucose units [4]. This open, dendritic, sprawling tree-like structure presents a massive surface area to digestive enzymes. Pancreatic alpha-amylase can attack hundreds of terminal branches simultaneously, yielding near-instantaneous hydrolysis into maltose, maltotriose, and alpha-limit dextrins, driving explosive glycemic spikes (e.g., sticky glutinous white rice and Russet potatoes have high amylopectin content, > 80–85%).',
              'শাখায়িত অ্যামাইলোপেকটিন (দ্রুত গতি, উচ্চ GI): এটি গাছের ডালপালার মতো অসংখ্য শাখাবিশিষ্ট (আলফা-১,৬ বন্ধনযুক্ত) বিশালাকার পলিমার [4]। এর উন্মুক্ত গঠনের কারণে হজমকারী এনজাইম একসাথে শত শত প্রান্ত আক্রমণ করে কয়েক মিনিটের মধ্যে একে গ্লুকোজে রূপান্তরিত করে ফেলে। ফলে রক্তে হঠাৎ সুগারের তীব্র স্পাইক ঘটে (যেমন সাদা আঠালো চাল এবং সাধারণ আলুতে ৮০-৮৫% অ্যামাইলোপেকটিন থাকে)।'
            ),
          ],
        },
        {
          id: 'sec-retrogradation-rs3',
          heading: l(
            '2. Starch Gelatinization & Hydrothermal Retrogradation (Resistant Starch Type 3)',
            '২. স্টার্চের জিলেটিনাইজেশন ও শীতলীকরণ: প্রতিরোধী স্টার্চ (RS3) তৈরির প্রযুক্তি'
          ),
          paragraphs: [
            l(
              'A food’s Glycemic Index is not static; it changes dramatically depending on industrial processing, culinary cooking temperature, and post-cooking cooling [2, 4]. Starch in raw grains exists in insoluble crystalline granules. When heated in water (cooking), starch granules absorb moisture, swell irreversibly, and lose their crystalline structure—a process called gelatinization. Gelatinized starches are fully accessible to amylase, producing maximum glycemic spikes [2].',
              'খাবারের গ্লাইসেমিক ইনডেক্স কোনো স্থির সংখ্যা নয়; রান্নার তাপমাত্রা, পানির উপস্থিতি এবং রান্নার পর ঠান্ডা করার ওপর এটি নাটকীয়ভাবে বদলে যায় [2, 4]। কাঁচা শস্যে শ্বেতসার ক্রিস্টালের মতো ঘন থাকে। পানিতে ফুটালে স্টার্চ ফুলে ফেঁপে যায়, যাকে জিলেটিনাইজেশন বলে। এতে এনজাইম সহজে শ্বেতসার ভেঙে উচ্চ সুগার স্পাইক তৈরি করে [2]।'
            ),
            l(
              'However, when cooked gelatinized starches are cooled (such as refrigerating cooked rice, boiled potatoes, or pasta at 4°C for 12 to 24 hours), the linear amylose chains realign and re-crystallize into dense, water-insoluble double helices—a biochemical process known as retrogradation [4]:',
              'তবে রান্না করা খাবারকে যদি ১২ থেকে ২৪ ঘণ্টা রেফ্রিজারেটরে (৪ ডিগ্রি সেলসিয়াসে) ঠান্ডা করা হয়, তখন অ্যামাইলোজের শিকলগুলো পুনরায় জোড়া লেগে অত্যন্ত ঘন ও পানিতে অদ্রবণীয় নতুন ক্রিস্টাল গঠন করে। এই প্রক্রিয়াকে রেট্রোগ্রেডেশন বা স্টার্চের পুনর্গঠন বলে [4]:'
            ),
          ],
          bullets: [
            l(
              'Formation of Resistant Starch Type 3 (RS3): Retrograded starch is biochemically classified as Resistant Starch Type 3 (RS3) [4]. RS3 completely resists enzymatic degradation in the human stomach and upper small intestine. It travels intact into the cecum and colon.',
              'রেজিস্ট্যান্ট স্টার্চ টাইপ ৩ (RS3) গঠন: এই পুনর্গঠিত স্টার্চকে চিকিৎসাবিজ্ঞানে রেজিস্ট্যান্ট স্টার্চ টাইপ ৩ (RS3) বলে [4]। এটি পাকস্থলী বা ক্ষুদ্রান্ত্রে কোনোভাবেই হজম হয় না এবং রক্তে এক ফোঁটাও চিনি বাড়ায় না; অক্ষত অবস্থায় এটি বৃহদন্ত্রে চলে যায়।'
            ),
            l(
              'Therapeutic GI Reduction: Cooling boiled potatoes drops their Glycemic Index from ~85 down to ~56 [2, 4]. Even when reheated prior to eating, the stable retrograded crystalline structure largely persists, lowering the overall postprandial glucose excursion by 30% to 40% while feeding beneficial gut microbes.',
              'জিআই কমানোর জাদু: সিদ্ধ আলুকে ঠান্ডা করলে তার GI ৮৫ থেকে নেমে ৫৬-এ চলে আসে [2, 4]। এমনকি পরে হালকা গরম করে খেলেও এই প্রতিরোধী কাঠামো নষ্ট হয় না। এটি রক্তে সুগার বৃদ্ধি ৩০-৪০% কমিয়ে দেয় এবং অন্ত্রের উপকারী ব্যাকটেরিয়ার খাদ্য হিসেবে কাজ করে।'
            ),
          ],
        },
        {
          id: 'sec-second-meal-effect',
          heading: l(
            '3. The Colonic Fermentation Axis: The "Second-Meal Effect"',
            '৩. বৃহদন্ত্রের গাঁজন অক্ষ: অলৌকিক "সেকেন্ড-মিল ইফেক্ট"'
          ),
          paragraphs: [
            l(
              'One of the most remarkable physiological discoveries in clinical nutrition is the "Second-Meal Effect" [1, 5]. Consuming a low-GI, high-fiber meal (such as whole lentils or barley) at dinner significantly improves glucose tolerance and blunts blood sugar spikes after breakfast the following morning, 10 to 12 hours later, even if the breakfast itself is high-glycemic!',
              'ক্লিনিক্যাল নিউট্রিশনের সবচেয়ে চমৎকার আবিষ্কারগুলোর একটি হলো "সেকেন্ড-মিল ইফেক্ট" (Second-Meal Effect) [1, 5]। রাতে যদি কোনো ব্যক্তি প্রচুর আঁশ ও ডালজাতীয় কম-গ্লাইসেমিক খাবার খান, তবে পরদিন সকালে ১০-১২ ঘণ্টা পর নাশতা খাওয়ার সময়ও তার রক্তে সুগার বাড়ে না—এমনকি সকালের নাশতা যদি কিছুটা বেশি গ্লাইসেমিকও হয়!'
            ),
            l(
              'The molecular mechanism operates via colonic fermentation: The indigestible fiber and resistant starch from dinner reach the colon 6 to 10 hours later, where anaerobes ferment them into Short-Chain Fatty Acids (SCFAs: acetate, propionate, and butyrate) [5]. Propionate travels via the portal vein to suppress hepatic gluconeogenesis. Simultaneously, circulating acetate suppresses free fatty acid (FFA) release from adipose tissue via GPR43/GPR41 receptors, dramatically improving hepatic and muscle insulin sensitivity when breakfast is consumed [5].',
              'এর আণবিক ব্যাখ্যা হলো কোলনিক ফারমেন্টেশন: রাতের খাবারের অদ্রবণীয় আঁশ ও রেজিস্ট্যান্ট স্টার্চ মধ্যরাতে বৃহদন্ত্রে পৌঁছে উপকারী ব্যাকটেরিয়ার দ্বারা গাঁজন প্রক্রিয়ায় শর্ট-চেইন ফ্যাটি অ্যাসিডে (SCFA: অ্যাসিটেট, প্রোপিওনেট, বিউটাইরেট) রূপান্তরিত হয় [5]। প্রোপিওনেট যকৃতে গিয়ে অপ্রয়োজনীয় চিনি তৈরি বন্ধ করে দেয়। আর অ্যাসিটেট রক্তে ক্ষতিকর ফ্রি ফ্যাটি অ্যাসিড কমিয়ে পরদিন সকালে পেশিকোষের ইনসুলিন সংবেদনশীলতা নাটকীয়ভাবে বাড়িয়ে দেয় [5]। '
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'sec-composite-meal-brakes',
          heading: l(
            '1. Engineering the Composite Meal Matrix: The 4 Biochemical Brakes',
            '১. মিশ্র খাবারের ম্যাট্রিক্স নকশা: পরিপাকের ৪টি জৈব রাসায়নিক ব্রেক'
          ),
          paragraphs: [
            l(
              'In clinical practice, humans rarely eat pure isolated carbohydrates. We consume complex composite meals containing proteins, lipids, fibers, and organic acids. Precision dietetics uses these macronutrient interactions as physiological "brakes" to transform high-glycemic carbohydrates into gentle, sustained-release energy sources [3, 6]:',
              'বাস্তব জীবনে মানুষ কখনো কেবল আলাদা চিনি বা একক শর্করা খায় না। আমরা একসাথে মাছ, ডাল, তেল, সবজি ও সালাদ দিয়ে ভাত খাই। আধুনিক ডায়েটেটিক্স বিজ্ঞানে এই অন্যান্য পুষ্টি উপাদানগুলোকে পরিপাকের গতি ধীর করার "বায়োলজিক্যাল ব্রেক" হিসেবে ব্যবহার করা হয় [3, 6]:'
            ),
          ],
          bullets: [
            l(
              'Brake 1: Viscous Soluble Fiber Barrier — Adding beta-glucan (oats, barley), psyllium husk, or pectin forms a thick, gelatinous hydration matrix in the gastric and duodenal lumen. This unstirred water layer increases viscosity, physically trapping glucose molecules and impeding their diffusion toward the intestinal brush-border microvilli, blunting postprandial glycemic excursions by 25–40% [3].',
              'ব্রেক ১: আঠালো দ্রবণীয় আঁশের সুরক্ষা কবচ — ওটস, ইসুবগুলের ভুসি বা ফলের পেকটিন পেটের ভেতর এক ধরনের ঘন জেল তৈরি করে। এই জেল শর্করার অণুগুলোকে আটকে রাখে, ফলে অন্ত্রের প্রাচীরে গ্লুকোজ শোষণের গতি ৪০% পর্যন্ত কমে যায় [3]। '
            ),
            l(
              'Brake 2: Lipid-Induced Enterogastrone Feedback — Adding healthy fats (cold-pressed mustard oil, extra virgin olive oil, nuts, or avocado) triggers the duodenal release of cholecystokinin (CCK) and peptide YY (PYY). These enterogastrones activate the "ileal brake" and constrict the pyloric sphincter, delaying gastric emptying into the duodenum and spreading glucose absorption over hours [3, 6].',
              'ব্রেক ২: চর্বি-নির্ভর গ্যাস্ট্রিক ব্রেক — খাবারে স্বাস্থ্যকর তেল থাকলে তা অন্ত্র থেকে CCK এবং PYY হরমোন নিঃসরণ ঘটায়। এই হরমোন পাকস্থলীর মুখ সংকুচিত করে দেয়, ফলে খাবার খুব ধীরে ধীরে ক্ষুদ্রান্ত্রে প্রবেশ করে [3, 6]। '
            ),
            l(
              'Brake 3: Protein Incretin Stimulation — Co-ingesting protein (fish, egg white, tofu, chicken) stimulates enteroendocrine L-cells to release Glucagon-Like Peptide-1 (GLP-1) and K-cells to release Glucose-Dependent Insulinotropic Polypeptide (GIP). These incretins prime pancreatic beta cells to mount an immediate early-phase insulin release while suppressing postprandial glucagon [3].',
              'ব্রেক ৩: প্রোটিন-নির্ভর ইনক্রেটিন উদ্দীপনা — ভাতের সাথে মাছ বা ডিম খেলে তা অন্ত্র থেকে শক্তিশালী GLP-1 ও GIP হরমোন নিঃসরণ করায়। এই হরমোন খাবার ভাঙার আগেই অগ্ন্যাশয়কে সতর্ক করে সঠিক সময়ে পরিমিত ইনসুলিন প্রস্তুত রাখে এবং গ্লুকাগন কমিয়ে রাখে [3]। '
            ),
            l(
              'Brake 4: Organic Acid Enzyme Inhibition — Adding culinary organic acids (acetic acid in vinegar, lactic acid in fermented curd/yogurt, citric acid in fresh lemon juice) lowers gastrointestinal pH. Acetic acid partially inhibits salivary and pancreatic alpha-amylase activity and slows the gastric emptying rate via vagal stimulation [1, 3].',
              'ব্রেক ৪: জৈব অ্যাসিডের এনজাইম বাধা — ভাতে বা সালাদে সামান্য ভিনেগার, লেবুর রস বা সাথে টক দই খেলে এর অ্যাসিটিক ও ল্যাকটিক অ্যাসিড পাচক এনজাইমের গতি কিছুটা ধীর করে এবং পাকস্থলী খালি হওয়ার সময় বাড়িয়ে দেয় [1, 3]। '
            ),
          ],
        },
        {
          id: 'sec-endothelial-volatility',
          heading: l(
            '2. Endothelial Vascular Damage from Postprandial Glucose Volatility',
            '২. রক্তনালীর এন্ডোথেলিয়াল ক্ষতি ও সুগার ওঠানামার ভয়াবহতা'
          ),
          paragraphs: [
            l(
              'Cardiometabolic research demonstrates that sharp postprandial glycemic spikes (peak amplitude) and rapid glycemic swings are significantly more damaging to vascular endothelial cells than constant, moderate hyperglycemia [3].',
              'হৃদরোগ ও রক্তনালীর গবেষণায় প্রমাণিত হয়েছে যে, সারাদিন রক্তে একটানা মৃদু সুগার থাকার চেয়ে হঠাৎ হঠাৎ সুগারের তীব্র বৃদ্ধি ও পতন রক্তনালীর ভেতরের প্রাচীরের (এন্ডোথেলিয়াম) জন্য বহুগুণ বেশি ক্ষতিকর [3]। '
            ),
            l(
              'Acute glucose spikes overload the mitochondrial electron transport chain in endothelial cells, leading to an overproduction of superoxide free radicals (reactive oxygen species [ROS]) [3]. Superoxide inactivates endothelial nitric oxide (NO) via conversion into peroxynitrite, impairing endothelium-dependent vasodilation. Simultaneously, it triggers protein kinase C (PKC) activation, receptor for advanced glycation end-products (RAGE) expression, and NF-kB inflammatory transcription, driving premature atherosclerosis and microvascular complications [3].',
              'রক্তে সুগারের আকস্মিক স্পাইক রক্তনালীর কোষের মাইটোকন্ড্রিয়াকে অতিরিক্ত চাপে ফেলে ক্ষতিকর সুপারঅক্সাইড ফ্রি র‍্যাডিক্যাল তৈরি করে [3]। এই বিষাক্ত উপাদান রক্তনালী প্রসারণকারী নাইট্রিক অক্সাইডকে ধ্বংস করে দেয় এবং প্রদাহজনিত NF-kB সক্রিয় করে। এর ফলে রক্তনালীতে চর্বি জমে ব্লক তৈরি হয়, কিডনির ছাঁকনি ক্ষতিগ্রস্ত হয় এবং চোখের রেটিনার রক্তনালী ছিঁড়ে অন্ধত্বের ঝুঁকি তৈরি হয় [3]। '
            ),
          ],
        },
        {
          id: 'sec-worked-menu-engineering',
          heading: l(
            '3. Precision Menu Engineering Case Study: High-GL to Low-GL Transformation',
            '৩. খাদ্য প্রকৌশলের কেস স্টাডি: উচ্চ-জিএল খাবারকে সুরক্ষিত কম-জিএল খাবারে রূপান্তর'
          ),
          paragraphs: [
            l(
              'Patient Profile: A 52-year-old male with central adiposity, prediabetes (fasting glucose 114 mg/dL, HbA1c 6.1%), and postprandial lethargy. He complains of severe drowsiness, brain fog, and intense sugar cravings 90 minutes after eating his customary traditional breakfast [2, 6].',
              'রোগীর বিবরণ: ৫২ বছর বয়সী পুরুষ, পেটে অতিরিক্ত চর্বি, প্রি-ডায়াবেটিস (ফাস্টিং সুগার ১১৪ mg/dL, HbA1c ৬.১%)। প্রতিদিনের ঐতিহ্যবাহী সকালের নাশতা খাওয়ার ৯০ মিনিট পরই তিনি তীব্র ক্লান্তি, ঘুম ঘুম ভাব এবং অতিরিক্ত মিষ্টি খাওয়ার তৃষ্ণা অনুভব করেন [2, 6]। '
            ),
          ],
          bullets: [
            l(
              'Baseline High-GL Breakfast Assessment: 2 cups of puffed white rice (muri, GI 82, 44g carb) + 2 sweet biscuits (GI 70, 20g carb) + sweet milk tea with 2 tsp sugar (GI 65, 10g carb). Total Carbohydrate = 74 grams. Dietary fiber = 0.8 grams. Weighted Composite GI = 76.5 (High). Meal Glycemic Load: GL = (76.5 * 74) / 100 = 56.6 (Extreme High GL!). Continuous Glucose Monitor reveals a vertical spike to 210 mg/dL at 45 minutes, followed by a reactive hypoglycemia plunge to 62 mg/dL at 105 minutes, explaining his neuroglycopenic fatigue and cravings [2, 4].',
              'পূর্ববর্তী উচ্চ-জিএল নাশতার হিসাব: ২ কাপ মুড়ি (GI ৮২, ৪৪ গ্রাম কার্ব) + ২টি মিষ্টি বিস্কুট (GI ৭০, ২০ গ্রাম কার্ব) + ২ চামচ চিনিসহ দুধ চা (GI ৬৫, ১০ গ্রাম কার্ব)। মোট শর্করা = ৭৪ গ্রাম; খাদ্য আঁশ = মাত্র ০.৮ গ্রাম। যৌগিক GI = ৭৬.৫ (উচ্চ)। গ্লাইসেমিক লোড: GL = (৭৬.৫ * ৭৪) / ১০০ = ৫৬.৬ (ভয়াবহ উচ্চ লোড!)। সিজিএম গ্রাফে দেখা যায় খাওয়ার ৪৫ মিনিটে সুগার স্পাইক করে ২১০ mg/dL-এ ওঠে এবং ১০৫ মিনিটে দ্রুত ধসে গিয়ে ৬২ mg/dL-এ নেমে রিঅ্যাক্টিভ হাইপোগ্লাইসেমিয়া ও তীব্র ক্লান্তি ঘটায় [2, 4]। '
            ),
            l(
              'Engineered Low-GL Breakfast Formulation: 1/2 cup steel-cut oats cooked in water (GI 52, 27g carb, 4g viscous beta-glucan fiber) + 1 whole boiled egg + 1 egg white (0g carb, 10g protein, 5g fat) + 1 tablespoon chia seeds soaked in water (GI 15, 1g net carb, 4g soluble fiber) + 1/2 cup plain unflavored whole milk yogurt (GI 35, 6g carb, 5g protein) + 1 cup black tea with lemon juice (0g carb). Total Carbohydrate = 34 grams. Total Fiber = 9 grams. Composite GI = 42 (Low). Meal Glycemic Load: GL = (42 * 34) / 100 = 14.3 (Low-to-Medium GL) [2, 3].',
              'প্রকৌশলগতভাবে তৈরি কম-জিএল নাশতা: ১/২ কাপ সিদ্ধ স্টিল-কাট ওটস (GI ৫২, ২৭ গ্রাম কার্ব, ৪ গ্রাম আঠালো বিটা-গ্লুকান ফাইবার) + ১টি সিদ্ধ আস্ত ডিম ও ১টি ডিমের সাদা অংশ (১০ গ্রাম প্রোটিন, ৫ গ্রাম ফ্যাট) + ১ টেবিল চামচ পানিতে ভেজানো চিয়া সিড (৪ গ্রাম দ্রবণীয় আঁশ) + ১/২ কাপ সাধারণ টক দই (GI ৩৫, ৬ গ্রাম কার্ব) + লেবু দিয়ে চিনি ছাড়া চা। মোট শর্করা = ৩৪ গ্রাম; মোট আঁশ = ৯ গ্রাম। মিশ্র GI = ৪২ (কম)। গ্লাইসেমিক লোড: GL = (৪২ * ৩৪) / ১০০ = ১৪.৩ (নিরাপদ কম লোড) [2, 3]। '
            ),
            l(
              'Metabolic Outcome: CGM shows a gentle, smooth rise peaking at only 132 mg/dL at 75 minutes, sustained plateau, zero reactive hypoglycemia plunge, and satiety sustained effortlessly for 4.5 hours with complete resolution of postprandial somnolence.',
              'শারীরবৃত্তীয় ফলাফল: সিজিএম পরীক্ষায় দেখা যায় রক্তে সুগার আকস্মিক স্পাইক না করে অত্যন্ত মসৃণভাবে ৭৫তম মিনিটে মাত্র ১৩২ mg/dL-এ ওঠে এবং কোনো রিঅ্যাক্টিভ হাইপোগ্লাইসেমিয়া ছাড়াই টানা ৪.৫ ঘণ্টা পর্যন্ত রোগীকে কর্মক্ষম, সতেজ ও ক্ষুধামুক্ত রাখে।'
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Campfire Kindling Analogy', '১. ক্যাম্পফায়ারের শুকনো পাতা ও কাঠের উপমা'), sectionId: 'sec-campfire-analogy' },
      { id: 'toc-2', label: l('2. Glycemic Index Benchmarks', '২. গ্লাইসেমিক ইনডেক্স মানদণ্ড'), sectionId: 'sec-gi-definition-benchmarks' },
      { id: 'toc-3', label: l('3. Glycemic Load & Watermelon Paradox', '৩. গ্লাইসেমিক লোড ও তরমুজের প্যারাডক্স'), sectionId: 'sec-gl-watermelon-paradox' },
      { id: 'toc-4', label: l('4. Amylose vs. Amylopectin Kinetics', '৪. অ্যামাইলোজ বনাম অ্যামাইলোপেকটিন গতিপ্রকৃতি'), sectionId: 'sec-amylose-amylopectin' },
      { id: 'toc-5', label: l('5. Hydrothermal Retrogradation (RS3)', '৫. স্টার্চের শীতলীকরণ ও রেজিস্ট্যান্ট স্টার্চ'), sectionId: 'sec-retrogradation-rs3' },
      { id: 'toc-6', label: l('6. The Colonic Second-Meal Effect', '৬. কোলনিক সেকেন্ড-মিল প্রভাব'), sectionId: 'sec-second-meal-effect' },
      { id: 'toc-7', label: l('7. 4 Biochemical Brakes in Composite Meals', '৭. মিশ্র খাবারের ৪টি বায়োলজিক্যাল ব্রেক'), sectionId: 'sec-composite-meal-brakes' },
      { id: 'toc-8', label: l('8. Vascular Damage from Glucose Volatility', '৮. সুগার ওঠানামা ও রক্তনালীর এন্ডোথেলিয়াল ক্ষতি'), sectionId: 'sec-endothelial-volatility' },
      { id: 'toc-9', label: l('9. Precision Menu Engineering Case Study', '৯. খাবার রূপান্তরের নিখুঁত কেস স্টাডি'), sectionId: 'sec-worked-menu-engineering' },
    ],
    terms: [
      {
        term: l('Glycemic Index (GI)', 'গ্লাইসেমিক ইনডেক্স (GI)'),
        definition: l(
          'A biological ranking (0 to 100) of carbohydrate foods based on their postprandial blood glucose response compared to a reference standard (pure glucose = 100).',
          'বিশুদ্ধ গ্লুকোজের (১০০) সাথে তুলনা করে খাবারের শর্করা রক্তে কত দ্রুত গ্লুকোজ বাড়ায় তার জীবতাত্ত্বিক মানদণ্ড (০ থেকে ১০০)।'
        ),
      },
      {
        term: l('Glycemic Load (GL)', 'গ্লাইসেমিক লোড (GL)'),
        definition: l(
          'The real-world glycemic impact of a specific portion size: GL = (GI * Available Carbohydrate in grams) / 100.',
          'খাবারের নির্দিষ্ট অংশের সামগ্রিক সুগার প্রভাব: GL = (GI * কার্যকর শর্করা গ্রাম) / ১০০।'
        ),
      },
      {
        term: l('Resistant Starch Type 3 (RS3)', 'রেজিস্ট্যান্ট স্টার্চ টাইপ ৩ (RS3)'),
        definition: l(
          'Retrograded starch formed by cooling cooked gelatinized amylose, resisting small bowel digestion and fermenting into colon-protective SCFAs.',
          'রান্না করা স্টার্চ ঠান্ডা করলে তৈরি হওয়া পুনর্গঠিত প্রতিরোধী শ্বেতসার, যা ক্ষুদ্রান্ত্রে হজম না হয়ে বৃহদন্ত্রে উপকারী ফ্যাটি অ্যাসিডে রূপান্তরিত হয়।'
        ),
      },
      {
        term: l('Second-Meal Effect', 'সেকেন্ড-মিল ইফেক্ট'),
        definition: l(
          'The physiological phenomenon where colonic fermentation of fiber from a previous meal improves glucose tolerance at the subsequent meal 10–12 hours later.',
          'পূর্ববর্তী বেলার খাবারের আঁশ অন্ত্রে গাঁজনের মাধ্যমে ১০-১২ ঘণ্টা পর পরবর্তী বেলার খাবারের রক্তে সুগার নিয়ন্ত্রণ উন্নত করার শারীরিক প্রক্রিয়া।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Calculation: Solving the Watermelon Paradox with Glycemic Load',
          'হাতে-কলমে হিসাব: গ্লাইসেমিক লোড দিয়ে তরমুজের প্যারাডক্স সমাধান'
        ),
        steps: [
          l(
            'Step 1: Identify Food Metrics: Diced watermelon Glycemic Index = 72. Portion size = 120 grams (1 cup). Water content = 92%. Total available carbohydrate = 6 grams.',
            'ধাপ ১: পুষ্টি উপাত্ত সংগ্রহ: তরমুজের GI = ৭২। পরিমাপ = ১২০ গ্রাম (১ কাপ)। পানির পরিমাণ = ৯২%। কার্যকর শর্করা = ৬ গ্রাম।'
          ),
          l(
            'Step 2: Apply the Glycemic Load Formula: GL = (GI * Available Carbohydrate in grams) / 100.',
            'ধাপ ২: গ্লাইসেমিক লোডের সূত্রে মান বসানো: GL = (GI * কার্যকর শর্করা গ্রাম) / ১০০।'
          ),
          l(
            'Step 3: Execute Calculation: GL = (72 * 6) / 100 = 432 / 100 = 4.32 ≈ 4.3.',
            'ধাপ ৩: গণনা সম্পাদন: GL = (৭২ * ৬) / ১০০ = ৪৩২ / ১০০ = ৪.৩২ ≈ ৪.৩।'
          ),
          l(
            'Step 4: Clinical Interpretation: Since 4.3 is far below the Low Glycemic Load cutoff of 10, watermelon has an exceptionally benign impact on blood glucose when consumed in standard portions.',
            'ধাপ ৪: ক্লিনিক্যাল সিদ্ধান্ত: যেহেতু ৪.৩ মানটি কম গ্লাইসেমিক লোডের সীমার (১০) অনেক নিচে, তাই পরিমিত পরিমাণে তরমুজ খেলে রক্তে সুগারের ক্ষতিকর স্পাইক হয় না।'
          ),
        ],
        conclusion: l(
          'Always evaluate total portion carbohydrate and Glycemic Load (GL) rather than condemning nutrient-dense whole fruits based on isolated Glycemic Index alone.',
          'একক গ্লাইসেমিক ইনডেক্স দেখে পুষ্টিকর ফল নিষিদ্ধ না করে খাবারের মোট শর্করা ও গ্লাইসেমিক লোড (GL) বিবেচনা করুন।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does cooling and refrigerating cooked starchy foods significantly lower their postprandial glycemic impact?',
          'রান্না করা ভাত বা আলুকে ঠান্ডা করে রেফ্রিজারেটরে রাখলে কেন তা রক্তে সুগার বৃদ্ধির হার লক্ষণীয়ভাবে কমিয়ে দেয়?'
        ),
        answer: l(
          'During cooking with water, starch granules gelatinize, swelling and opening their molecular structure to rapid enzymatic attack. However, during subsequent cooling (retrogradation), linear amylose chains realign and recrystallize into tightly packed, water-insoluble double helices known as Resistant Starch Type 3 (RS3). RS3 is physically impervious to pancreatic alpha-amylase in the stomach and small intestine, passing undigested to the colon. This retrograded structure lowers the meal’s Glycemic Index by 30% to 40% and provides prebiotic substrates for short-chain fatty acid synthesis.',
          'রান্নার সময় গরম পানিতে শ্বেতসার ফুলে ফেঁপে এনজাইমের জন্য উন্মুক্ত হয়ে যায়। কিন্তু রান্নার পর ঠান্ডা করলে অ্যামাইলোজের সরল শিকলগুলো পুনরায় সুবিন্যস্ত হয়ে এক ধরনের শক্ত ও পানিতে অদ্রবণীয় ক্রিস্টাল গঠন করে, যাকে রেজিস্ট্যান্ট স্টার্চ টাইপ ৩ (RS3) বলে। আমাদের পাচক এনজাইম এই প্রতিরোধী স্টার্চকে ভাঙতে পারে না; ফলে তা না ভেঙে বৃহদন্ত্রে চলে যায়। এর ফলে খাবারের গ্লাইসেমিক ইনডেক্স ৩০-৪০% পর্যন্ত কমে যায় এবং অন্ত্রের উপকারী ব্যাকটেরিয়ার জন্য পুষ্টিকর খাদ্য তৈরি হয়।'
        ),
      },
      {
        question: l(
          'How does the second-meal effect of a high-fiber evening meal blunt the blood sugar response to breakfast the next morning?',
          'রাতে উচ্চ আঁশযুক্ত খাবার খেলে তা কীভাবে পরদিন সকালের নাশতার সুগার বৃদ্ধিকে অলৌকিকভাবে কমিয়ে রাখে?'
        ),
        answer: l(
          'Indigestible viscous fibers and resistant starches from dinner reach the colon 6 to 10 hours later, where bacterial fermentation produces high concentrations of Short-Chain Fatty Acids (SCFAs), predominantly acetate and propionate. Propionate travels via the portal vein to inhibit hepatic gluconeogenesis. Acetate circulates systemically to suppress adipocyte lipolysis via free fatty acid receptors, preventing morning free fatty acid elevations that would otherwise cause muscle insulin resistance. When breakfast is ingested 10–12 hours later, baseline insulin sensitivity is substantially enhanced, dampening postprandial glucose spikes.',
          'রাতের খাবারের আঁশ ও রেজিস্ট্যান্ট স্টার্চ মধ্যরাতে বৃহদন্ত্রে পৌঁছায় এবং ব্যাকটেরিয়ার গাঁজন প্রক্রিয়ায় শর্ট-চেইন ফ্যাটি অ্যাসিড (SCFA) উৎপন্ন করে। এর মধ্যে প্রোপিওনেট যকৃতে গিয়ে অতিরিক্ত চিনি তৈরি বন্ধ রাখে এবং অ্যাসিটেট রক্তে ক্ষতিকর ফ্রি ফ্যাটি অ্যাসিডের নিঃসরণ বন্ধ করে। এর ফলে পেশিকোষের ইনসুলিন সংবেদনশীলতা নাটকীয়ভাবে বেড়ে যায়; যার কারণে ১০-১২ ঘণ্টা পর পরদিন সকালে নাশতা খাওয়ার পরও রক্তে সুগারের মাত্রা স্বাভাবিকের চেয়ে অনেক কম থাকে।'
        ),
      },
    ],
  },
}

export const dietetics14GlycemicLesson = dietetics14Lesson
