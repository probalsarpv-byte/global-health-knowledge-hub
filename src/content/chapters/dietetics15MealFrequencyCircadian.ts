import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics15References: LessonReference[] = [
  {
    id: 'ref-panda-circadian-2016',
    authors: 'Panda S',
    title: 'Circadian Physiology of Metabolism',
    organization: 'Science',
    year: 2016,
    url: 'https://www.science.org/doi/10.1126/science.aah4967',
    doi: '10.1126/science.aah4967',
  },
  {
    id: 'ref-phillips-tre-2021',
    authors: 'Manoogian EN, Chaix A, Panda S',
    title: 'When to Eat: The Importance of Eating Patterns in Health and Disease',
    organization: 'Nature Reviews Endocrinology',
    year: 2021,
    url: 'https://www.nature.com/articles/s41574-021-00600-3',
    doi: '10.1038/s41574-021-00600-3',
  },
  {
    id: 'ref-schoenfeld-protein-2018',
    authors: 'Schoenfeld BJ, Aragon AA',
    title: 'How Much Protein Can the Body Use in a Single Meal for Muscle Building? Implications for Daily Protein Distribution',
    organization: 'Journal of the International Society of Sports Nutrition',
    year: 2018,
    url: 'https://jissn.biomedcentral.com/articles/10.1186/s12970-018-0215-1',
    doi: '10.1186/s12970-018-0215-1',
  },
  {
    id: 'ref-deldicque-leucine-2020',
    authors: 'Churchward-Venne TA, Breen L, Phillips SM',
    title: 'Alterations in Human Muscle Protein Turnover with Aging: Leucine and Related Interventions',
    organization: 'Nutrition & Metabolism',
    year: 2012,
    url: 'https://nutritionandmetabolism.biomedcentral.com/articles/10.1186/1743-7075-9-40',
    doi: '10.1186/1743-7075-9-40',
  },
  {
    id: 'ref-tack-mmc-2021',
    authors: 'Deloose E, Janssen P, Depoortere I, Tack J',
    title: 'The Migrating Motor Complex: Normal Physiology and Clinical Implications',
    organization: 'Nature Reviews Gastroenterology & Hepatology',
    year: 2012,
    url: 'https://www.nature.com/articles/nrgastro.2012.57',
    doi: '10.1038/nrgastro.2012.57',
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

export const dietetics15Lesson: LessonTopic = {
  id: 'topic.dietetics.meal-frequency-circadian',
  slug: 'therapeutic-meal-distribution-circadian-timing',
  version: 1,
  updatedAt: '2026-11-04',
  title: l(
    '15 · Meal Frequency, Protein Pulsing & Circadian Chrono-Nutrition',
    '১৫ · খাবারের সময়কাল, প্রোটিন পালসিং ও ক্রোনো-নিউট্রিশন'
  ),
  summary: l(
    'Circadian rhythm synchronization with peripheral metabolic clocks, time-restricted eating, and distributing protein into optimal ~25–35 g anabolic pulses.',
    'শরীরের অভ্যন্তরীণ জৈব ঘড়ির সাথে খাদ্যাভ্যাসের সমন্বয়, সীমিত সময়ের খাওয়া (TRE) এবং পেশি পুনর্গঠনের জন্য ২৫-৩৫ গ্রামের প্রোটিন পালসিং বণ্টন।'
  ),
  subject: 'dietetics',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-04',
  prerequisiteIds: ['topic.dietetics.food-exchange-systems'],
  relatedTopicIds: ['topic.dietetics.food-exchange-systems', 'topic.dietetics.glycemic-index-load'],
  objectives: [
    l(
      'Contrast peripheral metabolic clocks with the central suprachiasmatic nucleus (SCN) and analyze how late-night eating induces insulin resistance and circadian misalignment.',
      'মস্তিষ্কের মূল জৈব ঘড়ির (SCN) সাথে অভ্যন্তরীণ অঙ্গের ঘড়ির পার্থক্য এবং দেরিতে রাতের খাবার খাওয়ার ফলে মেটাবলিক বিঘ্ন ও ইনসুলিন রেজিস্ট্যান্স বিশ্লেষণ করা।'
    ),
    l(
      'Examine the molecular physiology of the Leucine Trigger and the Muscle-Full Effect, contrasting skewed vs. balanced meal protein distribution.',
      'লিউসিন ট্রিগার ও মাসল-ফুল ইফেক্টের আণবিক শারীরবৃত্ত বোঝা এবং সারাদিনে অসম বণ্টনের তুলনায় সমবণ্টনযুক্ত প্রোটিন পালসিংয়ের কার্যকারিতা ব্যাখ্যা করা।'
    ),
    l(
      'Formulate evidence-based Time-Restricted Eating (TRE) protocols that preserve the migrating motor complex (MMC) and optimize metabolic flexibility.',
      'পরিপাকতন্ত্রের স্বাভাবিক পরিষ্কারক তরঙ্গ (MMC) অক্ষুণ্ন রাখা এবং মেটাবলিক নমনীয়তা বৃদ্ধির জন্য প্রমাণভিত্তিক টাইম-রেস্ট্রিক্টেড ইটিং (TRE) পরিকল্পনা প্রণয়ন করা।'
    ),
    l(
      'Structure individualized circadian meal timing for rotational shift workers to mitigate nocturnal lipotoxicity and pancreatic beta-cell strain.',
      'শিফট কর্মীদের জন্য রাতের বিষাক্ত চর্বি জমার ঝুঁকি এবং অগ্ন্যাশয়ের ক্লান্তি এড়াতে সময়ভিত্তিক পথ্য নকশা করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A chronological circadian matrix illustrating peripheral clock synchronization: 1) Morning to Midday (8 AM–2 PM): High insulin sensitivity, active liver glycogen storage, maximum beta-cell GLP-1 responsiveness, and optimal thermic effect of food (TEF). 2) Late Afternoon (2 PM–6 PM): Stable peripheral glucose uptake and second protein pulse. 3) Night (8 PM–6 AM): Pineal melatonin secretion surges, binding to beta-cell MTNR1B receptors and blunting insulin secretion. Late carbohydrate intake during melatonin surge causes nocturnal hyperglycemia and hepatic steatosis. 4) Fasting window activates Phase III Migrating Motor Complex (MMC) housekeeping waves every 90–120 minutes, purging luminal debris and preventing SIBO.',
      'শরীরের অভ্যন্তরীণ জৈব ঘড়ির সময়ভিত্তিক চিত্র: ১) সকাল থেকে দুপুর (সকাল ৮টা–দুপুর ২টা): কোষে সর্বোচ্চ ইনসুলিন সংবেদনশীলতা, যকৃতে দ্রুত গ্লাইকোজেন সঞ্চয় এবং খাবারের সর্বাধিক তাপীয় খরচ (TEF)। ২) বিকেল (দুপুর ২টা–সন্ধ্যা ৬টা): স্থিতিশীল গ্লুকোজ গ্রহণ এবং দ্বিতীয় প্রোটিন পালস। ৩) রাত (রাত ৮টা–সকাল ৬টা): মেলাটোনিন হরমোনের বৃদ্ধি, যা অগ্ন্যাশয়ের ইনসুলিন তৈরি বন্ধ করে দেয়; এ সময় শর্করা খেলে রক্তে মারাত্মক সুগার স্পাইক ও ফ্যাটি লিভার তৈরি হয়। ৪) উপবাসের সময় পরিপাকতন্ত্রে প্রতি ৯০-১২০ মিনিটে ফেজ-৩ পরিষ্কারক তরঙ্গ (MMC) তৈরি হয়ে জীবাণু ও খাদ্যাবশেষ দূর করে।'
    ),
    steps: [
      l(
        'Step 1: Morning Metabolic Window. Synchronize the largest carbohydrate and nutrient load with peak morning insulin sensitivity and high peripheral GLUT4 readiness.',
        'ধাপ ১: সকালের বিপাকীয় সুযোগ: সকালের উচ্চ ইনসুলিন সংবেদনশীলতার সময় দিনের প্রধান শর্করা ও পুষ্টি গ্রহণ করুন।'
      ),
      l(
        'Step 2: Anabolic Protein Pulse 1. Ingest 25–35g high-quality protein supplying >= 2.5–3.0g leucine at breakfast to cross the anabolic threshold.',
        'ধাপ ২: প্রথম প্রোটিন পালস: সকালের নাশতায় ২৫-৩৫ গ্রাম প্রোটিন (কমপক্ষে ২.৫-৩.০ গ্রাম লিউসিনযুক্ত) খেয়ে পেশির বৃদ্ধি সক্রিয় করুন।'
      ),
      l(
        'Step 3: Midday Anabolic Protein Pulse 2. Re-trigger the Leucine Threshold 4–5 hours later at lunch, resetting muscle protein synthesis following the Muscle-Full refractory period.',
        'ধাপ ৩: দুপুরের দ্বিতীয় প্রোটিন পালস: ৪-৫ ঘণ্টা পর দুপুরে পুনরায় লিউসিন থ্রেশহোল্ড অতিক্রম করে পেশির পুনর্গঠন সচল রাখুন।'
      ),
      l(
        'Step 4: Evening Transition & Early Dinner. Consume dinner before biological sunset (by 6–7 PM) to conclude digestion before nocturnal melatonin elevation.',
        'ধাপ ৪: সন্ধ্যার খাবার ও রূপান্তর: মেলাটোনিন হরমোন বৃদ্ধির আগেই সন্ধ্যা ৬-৭টার মধ্যে রাতের খাবার সম্পন্ন করুন।'
      ),
      l(
        'Step 5: Nocturnal Interdigestive Fasting. Maintain a 12–14 hour fast across the night, allowing Phase III MMC housekeeper peristalsis and cellular macroautophagy.',
        'ধাপ ৫: রাতের পরিপাক বিশ্রাম: রাতে ১২-১৪ ঘণ্টা নির্জলা উপবাস বজায় রাখুন, যা অন্ত্রের পরিষ্কারক তরঙ্গ এবং অটোফেজিকে সক্রিয় করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 45-year-old male consumes 90 grams of protein daily under two different patterns: Pattern A divides protein evenly as 30g at breakfast, 30g at lunch, and 30g at dinner. Pattern B consumes 10g at breakfast, 15g at lunch, and 65g at a late dinner. Why does Pattern A stimulate significantly greater 24-hour Muscle Protein Synthesis (MPS)?',
      '৪৫ বছর বয়সী এক ব্যক্তি দিনে মোট ৯০ গ্রাম প্রোটিন খান। প্যাটার্ন এ-তে তিনি সকালে ৩০ গ্রাম, দুপুরে ৩০ গ্রাম এবং রাতে ৩০ গ্রাম সমানভাবে খান। প্যাটার্ন বি-তে তিনি সকালে ১০ গ্রাম, দুপুরে ১৫ গ্রাম এবং রাতে একবারে ৬৫ গ্রাম খান। প্যাটার্ন এ কেন সারাদিনে পেশি গঠনে (MPS) লক্ষণীয়ভাবে বেশি কার্যকর?'
    ),
    options: [
      l(
        'Pattern A triggers the Leucine Anabolic Threshold (~2.5–3.0g leucine) three separate times per day, whereas Pattern B fails to reach the threshold at breakfast and lunch, and wastes excess evening amino acids through hepatic oxidation.',
        'প্যাটার্ন এ দিনে তিনবারই পেশি গঠনের লিউসিন থ্রেশহোল্ড (২.৫-৩.০ গ্রাম) অতিক্রম করে, যেখানে প্যাটার্ন বি সকাল ও দুপুরে থ্রেশহোল্ড ছুঁতেই পারে না এবং রাতে অতিরিক্ত প্রোটিন অপচয় করে।'
      ),
      l(
        'Pattern B is superior because the human body cannot utilize more than 10 grams of protein in the morning.',
        'প্যাটার্ন বি শ্রেষ্ঠ কারণ সকালে শরীর ১০ গ্রামের বেশি প্রোটিন ব্যবহার করতে পারে না।'
      ),
      l(
        'Pattern A burns 500 extra calories through increased kidney filtration.',
        'প্যাটার্ন এ কিডনির মাধ্যমে ৫০০ ক্যালোরি অতিরিক্ত পুড়িয়ে ফেলে।'
      ),
      l(
        'Both patterns produce identical muscle growth because timing and amino acid thresholds have no biological relevance.',
        'উভয় প্যাটার্ন হুবহু এক কারণ প্রোটিন গ্রহণের সময় ও পরিমাণের কোনো জীবতাত্ত্বিক গুরুত্ব নেই।'
      ),
    ],
    correctIndex: 0,
    explanation: l(
      'Skeletal muscle protein synthesis (MPS) is an all-or-none physiological switch regulated by the intracellular sensor mTORC1. Initiating MPS requires a critical concentration of the essential amino acid leucine (~2.5 to 3.0 grams, contained in ~25–35g of high-quality intact protein). Once triggered, MPS remains elevated for 90–120 minutes and then enters a refractory "muscle-full" state. In Pattern B, breakfast (10g) and lunch (15g) provide sub-threshold leucine concentrations (< 1.5g), failing to stimulate MPS. At dinner (65g), MPS saturates at ~30–35g, and the remaining 30–35g of amino acids cannot further stimulate MPS and are irreversibly oxidized into urea. Pattern A successfully stimulates MPS 3 times per day, yielding 25% to 40% greater cumulative 24-hour myofibrillar protein synthesis.',
      'পেশি পুনর্গঠন (MPS) একটি অন-অফ সুইচের মতো যা mTORC1 সেন্সর দ্বারা নিয়ন্ত্রিত। এটি চালু করতে প্রতি বেলা খাবারে কমপক্ষে ২.৫ থেকে ৩.০ গ্রাম লিউসিন অ্যামিনো অ্যাসিড (প্রায় ২৫-৩৫ গ্রাম ভালো মানের প্রোটিন) প্রয়োজন হয়। একবার চালু হলে তা দেড়-দুই ঘণ্টা চলে এবং তারপর "মাসল-ফুল" অবস্থায় ফিরে আসে। প্যাটার্ন বি-তে সকাল (১০ গ্রাম) ও দুপুরে (১৫ গ্রাম) লিউসিনের মাত্রা কম থাকায় সুইচটি চালু হতেই পারে না। আর রাতে ৬৫ গ্রাম খেলে শরীর কেবল ৩৫ গ্রাম পর্যন্ত ব্যবহার করতে পারে, বাকি প্রোটিন যকৃতে ভেঙে ইউরিয়া হিসেবে নষ্ট হয়। অন্যদিকে প্যাটার্ন এ দিনে তিনবারই পেশির বৃদ্ধির সুইচ অন করে সারাদিনে ২৫-৪০% বেশি পেশি গঠন নিশ্চিত করে।'
    ),
  },
  evidenceBySection: {
    'sec-factory-shift-analogy': ['ref-panda-circadian-2016', 'ref-phillips-tre-2021'],
    'sec-meal-frequency-myths': ['ref-schoenfeld-protein-2018', 'ref-ada-soc-behavior-2024'],
    'sec-tre-protocols': ['ref-phillips-tre-2021', 'ref-panda-circadian-2016'],
    'sec-molecular-clocks': ['ref-panda-circadian-2016', 'ref-phillips-tre-2021'],
    'sec-leucine-trigger': ['ref-schoenfeld-protein-2018', 'ref-deldicque-leucine-2020'],
    'sec-protein-distribution': ['ref-schoenfeld-protein-2018', 'ref-deldicque-leucine-2020'],
    'sec-mmc-fasting': ['ref-tack-mmc-2021'],
    'sec-shift-worker-case': ['ref-panda-circadian-2016', 'ref-phillips-tre-2021'],
  },
  references: dietetics15References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-factory-shift-analogy',
          heading: l(
            '1. The Metabolic Clock & The Day-Shift Factory Analogy',
            '১. শরীরের অভ্যন্তরীণ জৈব ঘড়ি ও ডে-শিফট কারখানার সহজ উপমা'
          ),
          paragraphs: [
            l(
              'To understand why the timing of food intake is as critical as calorie content, imagine a massive manufacturing factory [1]. The factory operates on a strict schedule: during the day shift (from 7:00 AM to 5:00 PM), the entire workforce is present, the machinery is fully powered, boilers are hot, and the assembly lines run at maximum efficiency. If trucks deliver massive shipments of raw materials (carbohydrates, proteins, and fats) during the morning, the workers immediately process them into finished goods and store them neatly in designated warehouses without any mess [1, 2].',
              'খাবারের পরিমাণের মতোই খাবারের সময় কেন সমান গুরুত্বপূর্ণ, তা বুঝতে একটি বিশাল আধুনিক কারখানার কথা কল্পনা করুন [1]। এই কারখানাটি একটি নির্দিষ্ট শিডিউলে চলে: দিনের বেলা (সকাল ৭টা থেকে বিকেল ৫টা পর্যন্ত) কারখানার সব শ্রমিক উপস্থিত থাকে, ভারী যন্ত্রপাতি সচল থাকে এবং বয়লারগুলো পূর্ণ তাপে জ্বলে। সকালে যদি কাঁচামালের (শর্করা, আমিষ ও চর্বি) বিশাল চালান কারখানায় আসে, তবে শ্রমিকেরা চোখের পলকে তা প্রক্রিয়াজাত করে গুদামে সাজিয়ে রাখে [1, 2]। '
            ),
            l(
              'Now imagine what happens if those same supply trucks arrive at 11:30 PM, right in the middle of the night maintenance shift [1]. Only a skeleton crew of cleaners is present, the boilers are turned off, and the factory computers are running diagnostic updates. If the trucks dump tons of raw materials at midnight, the workers cannot process them; the cargo clutters the floor, spills into walkways, causes fires, and rots [1]. This is exactly what happens when you consume large meals late at night: your digestive organs, liver, and pancreas are in their biological rest phase. Late nutrients spill into the bloodstream as toxic free fatty acids and elevated blood glucose, driving visceral fat accumulation and insulin resistance [1, 2].',
              'এবার ভাবুন, সেই মালবাহী ট্রাকগুলো যদি রাত সাড়ে ১১টায় এসে কারখানার দরজায় কাঁচামাল ঢেলে দেয় [1]। তখন কারখানায় মাত্র কয়েকজন ঝাড়ুদার ছাড়া কোনো দক্ষ কারিগর নেই, মূল বয়লার বন্ধ এবং বিদ্যুৎ সংযোগ মেরামতের কাজ চলছে। মাঝরাতে টনকে টন কাঁচামাল নামালে তা প্রক্রিয়াজাত না হয়ে মেঝেতে স্তূপ হয়ে চলাচলের পথ বন্ধ করে দেয় এবং নোংরা আবর্জনা তৈরি করে [1]। রাত করে ভারী খাবার খেলে আমাদের শরীরে ঠিক এই বিপর্যয়টিই ঘটে: পরিপাকতন্ত্র, যকৃৎ ও অগ্ন্যাশয় তখন বিশ্রাম নিতে প্রস্তুত। এ সময় খাওয়া খাবার রক্তে অতিরিক্ত ক্ষতিকর চর্বি ও অনিয়ন্ত্রিত চিনি হিসেবে জমে ফ্যাটি লিভার ও ডায়াবেটিস তৈরি করে [1, 2]। '
            ),
          ],
        },
        {
          id: 'sec-meal-frequency-myths',
          heading: l(
            '2. Meal Frequency Myths: 6 Small Meals vs. 3 Discrete Meals',
            '২. খাবারের সংখ্যা নিয়ে ভ্রান্ত ধারণা: ঘন ঘন খাওয়া বনাম ৩ বেলার নিয়ম'
          ),
          paragraphs: [
            l(
              'For decades, popular fitness culture and commercial diet programs claimed that eating 5 to 6 small meals every 2 to 3 hours would "stoke the metabolic furnace" and accelerate weight loss [3]. Rigorous clinical metabolic chamber studies have thoroughly debunked this myth [3, 6].',
              'কয়েক দশক ধরে একটি প্রচলিত ভুল ধারণা ছড়ানো হয়েছিল যে দিনে ৫-৬ বার ঘন ঘন অল্প অল্প খাবার খেলে নাকি "বিপাকীয় আগুন" জ্বলে ওঠে এবং দ্রুত মেদ কমে [3]। কিন্তু আন্তর্জাতিক গবেষণাগারের নিখুঁত বিপাকীয় পরীক্ষায় প্রমাণিত হয়েছে যে এটি সম্পূর্ণ ভিত্তিহীন একটি ভ্রান্ত বিশ্বাস [3, 6]। '
            ),
            l(
              'The Thermic Effect of Food (TEF) is determined primarily by total daily calorie and macronutrient intake, not by how many times you eat [3]. Consuming 2,000 calories across 3 meals produces the exact same total 24-hour TEF (~200 kcal) as splitting those identical 2,000 calories into 6 meals [3]. In fact, constant grazing keeps insulin elevated throughout the entire waking day, suppressing adipose tissue lipolysis (fat burning) and denying the digestive tract the fasting periods required for gut repair [1, 5].',
              'খাবার হজম করতে যে ক্যালোরি খরচ হয় (Thermic Effect of Food বা TEF), তা নির্ভর করে সারাদিনের মোট ক্যালোরি ও পুষ্টি উপাদানের পরিমাণের ওপর—আপনি কতবারে খেলেন তার ওপর নয় [3]। একজন ব্যক্তি ২,০০০ ক্যালোরির খাবার দিনে ৩ বারে খেলে যে পরিমাণ ক্যালোরি পুড়বে (~২০০ ক্যালোরি), সেই একই খাবার ৬ বারে ভাগ করে খেলেও ঠিক একই ক্যালোরি পুড়বে [3]। বরং সারাদিন ঘন ঘন স্ন্যাক্স খেলে রক্তে সারাক্ষণ ইনসুলিন বেশি থাকে, যার ফলে চর্বি পোড়া বন্ধ হয়ে যায় এবং পরিপাকতন্ত্র কখনোই বিশ্রাম পায় না [1, 5]। '
            ),
          ],
        },
        {
          id: 'sec-tre-protocols',
          heading: l(
            '3. Time-Restricted Eating (TRE): Aligning Meals with Daylight',
            '৩. টাইম-রেস্ট্রিক্টেড ইটিং (TRE): দিনের আলোর সাথে খাবারের সমন্বয়'
          ),
          paragraphs: [
            l(
              'Time-Restricted Eating (TRE) is an evidence-based dietary strategy where all daily caloric intake is consolidated into a consistent window of 8 to 10 hours during the daytime, followed by a 14- to 16-hour overnight fast [2].',
              'টাইম-রেস্ট্রিক্টেড ইটিং (TRE) হলো একটি বিজ্ঞানসম্মত খাদ্যাভ্যাস যেখানে সারাদিনের সব খাবার দিনের বেলা একটি নির্দিষ্ট ৮ থেকে ১০ ঘণ্টার মধ্যে শেষ করা হয় এবং রাতের বেলা টানা ১৪ থেকে ১৬ ঘণ্টা উপবাস রাখা হয় [2]। '
            ),
          ],
          bullets: [
            l(
              'Early Time-Restricted Eating (eTRE: 8:00 AM to 4:00 PM or 9:00 AM to 5:00 PM): Aligns the bulk of food intake with peak physiological insulin sensitivity and high physical activity [2]. Clinical trials demonstrate significant reductions in 24-hour mean blood glucose, reduced blood pressure, decreased oxidative stress, and improved beta-cell responsiveness.',
              'আর্লি টাইম-রেস্ট্রিক্টেড ইটিং (eTRE: সকাল ৮টা থেকে বিকেল ৪টা বা সকাল ৯টা থেকে বিকেল ৫টা): যখন শরীরে ইনসুলিনের কার্যক্ষমতা সর্বোচ্চ থাকে, ঠিক তখনই খাবার গ্রহণ সম্পন্ন করা হয় [2]। এতে রক্তে সুগার কমে, রক্তচাপ স্বাভাবিক থাকে এবং অগ্ন্যাশয় সুস্থ থাকে।'
            ),
            l(
              'Late Time-Restricted Eating (12:00 PM to 8:00 PM or 2:00 PM to 10:00 PM): While popular among lifestyle fasters who skip breakfast, eating late into the evening encroaches on the biological night, producing worse glucose tolerance compared to earlier eating windows [1, 2].',
              'লেট টাইম-রেস্ট্রিক্টেড ইটিং (দুপুর ১২টা থেকে রাত ৮টা বা দুপুর ২টা থেকে রাত ১০টা): অনেকে সকালের নাশতা না খেয়ে দুপুরে ও রাতে দেরিতে খান। যদিও এটি ওজন কমাতে কিছুটা সাহায্য করে, তবে দেরিতে খাওয়ার কারণে সকালের তুলনায় এতে রক্তের সুগার নিয়ন্ত্রণে কম সুফল পাওয়া যায় [1, 2]। '
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-molecular-clocks',
          heading: l(
            '1. Molecular Peripheral Clocks & Nocturnal Melatonin-Insulin Antagonism',
            '১. কোষীয় পর্যায়ের জৈব ঘড়ি ও রাতের মেলাটোনিন-ইনসুলিন সংঘাত'
          ),
          paragraphs: [
            l(
              'Every cell in the human body contains an autonomous molecular clock governed by a transcriptional-translational feedback loop (TTFL) [1]. The master pacemaker in the suprachiasmatic nucleus (SCN) of the hypothalamus is synchronized by ocular light input. However, peripheral metabolic tissues (the liver, pancreas, adipose tissue, and gut) are synchronized primarily by the timing of food ingestion [1, 2].',
              'মানবদেহের প্রতিটি কোষে একটি স্বয়ংক্রিয় আণবিক ঘড়ি রয়েছে যা জিনের মাধ্যমে নিয়ন্ত্রিত হয় [1]। মস্তিষ্কের মূল ঘড়ি (SCN) চোখের মাধ্যমে আসা সূর্যালোক দিয়ে সময় ঠিক করে। কিন্তু অভ্যন্তরীণ অঙ্গগুলো (যকৃৎ, অগ্ন্যাশয়, চর্বি কোষ ও অন্ত্র) সূর্যালোক দেখে নয়, বরং পেটে কখন খাবার প্রবেশ করছে তার ওপর ভিত্তি করে তাদের সময় নির্ধারণ করে [1, 2]। '
            ),
            l(
              'A profound clinical discovery is the direct receptor antagonism between nocturnal melatonin and pancreatic insulin secretion [1, 2]. As darkness falls, the pineal gland secretes melatonin. Melatonin binds to MTNR1B receptors expressed on pancreatic beta cells, directly inhibiting cyclic AMP (cAMP) signaling and shutting down glucose-stimulated insulin secretion [1]. When an individual consumes carbohydrates late in the evening when circulating melatonin is high, beta cells are biochemically "locked," producing severe postprandial glucose intolerance, elevated free fatty acids, and nocturnal hepatic gluconeogenesis [1, 2].',
              'চিকিৎসাবিজ্ঞানের একটি যুগান্তকারী আবিষ্কার হলো রাতের মেলাটোনিন হরমোনের সাথে অগ্ন্যাশয়ের ইনসুলিন ক্ষরণের সরাসরি সংঘাত [1, 2]। সন্ধ্যা নামার সাথে সাথে মস্তিষ্কের পিনিয়াল গ্রন্থি মেলাটোনিন নিঃসরণ করে যা আমাদের ঘুমে সাহায্য করে। এই মেলাটোনিন অগ্ন্যাশয়ের বিটা কোষের MTNR1B রিসেপ্টরে যুক্ত হয়ে ইনসুলিন তৈরির পথ পুরোপুরি বন্ধ করে দেয় [1]। ফলে রাতে দেরিতে ভাত বা মিষ্টি খেলে অগ্ন্যাশয় ইনসুলিন দিতে পারে না; যার ফলে রক্তে দীর্ঘ সময় ধরে ভয়াবহ সুগার স্পাইক থাকে এবং অতিরিক্ত চিনি যকৃতে চর্বি হয়ে জমে [1, 2]। '
            ),
          ],
        },
        {
          id: 'sec-leucine-trigger',
          heading: l(
            '2. The Leucine Trigger & The Anabolic Resistance Threshold',
            '২. লিউসিন ট্রিগার ও পেশি পুনর্গঠনের জৈব সীমা (Anabolic Threshold)'
          ),
          paragraphs: [
            l(
              'Skeletal muscle mass is dictated by the net balance between Muscle Protein Synthesis (MPS) and Muscle Protein Breakdown (MPB) over 24 hours [3, 4]. The primary dietary driver of MPS is the essential branched-chain amino acid leucine, which binds directly to Sestrin2, activating the master anabolic signaling kinase mTORC1 (mechanistic target of rapamycin complex 1) [3, 4].',
              'আমাদের শরীরের পেশির ঘনত্ব নির্ভর করে সারাদিনে পেশি গঠন (MPS) এবং পেশি ক্ষয়ের (MPB) মধ্যকার পার্থক্যের ওপর [3, 4]। পেশি গঠনের মূল উদ্দীপক হলো লিউসিন নামক একটি অপরিহার্য অ্যামিনো অ্যাসিড, যা কোষের ভেতরের mTORC1 সেন্সরকে সক্রিয় করে প্রোটিন তৈরি শুরু করে [3, 4]। '
            ),
            l(
              'The initiation of MPS operates as an all-or-none biological threshold termed the **Leucine Trigger** [4]:',
              'পেশি পুনর্গঠন একটি সুনির্দিষ্ট পরিমাণের ওপর নির্ভর করে যাকে **লিউসিন ট্রিগার** বলা হয় [4]:'
            ),
          ],
          bullets: [
            l(
              'Young and Healthy Adults: The threshold requires approximately 2.0 to 2.5 grams of pure leucine per meal, which is provided by consuming ~20 to 25 grams of high-biological-value protein (such as 3 eggs, 1 cup cooked lentils with fish, or 3 oz chicken breast) [3, 4].',
              'তরুণ ও সুস্থ প্রাপ্তবয়স্ক: প্রতি বেলা খাবারে কমপক্ষে ২.০ থেকে ২.৫ গ্রাম লিউসিন প্রয়োজন, যা প্রায় ২০-২৫ গ্রাম উন্নত প্রোটিন (যেমন ৩টি ডিম, মাছসহ ১ কাপ ডাল বা ৩ আউন্স মুরগির মাংস) থেকে পাওয়া যায় [3, 4]। '
            ),
            l(
              'Older Adults (Anabolic Resistance / Sarcopenia): Aging muscles exhibit blunted mTORC1 sensitivity. To overcome this anabolic resistance, older adults require a higher Leucine Trigger of 3.0 to 4.0 grams of leucine per meal, demanding ~35 to 45 grams of intact high-quality protein per meal [4].',
              'বয়োবৃদ্ধ ব্যক্তি (অ্যানাবলিক রেজিস্ট্যান্স বা সারকোপেনিয়া): বয়স বাড়ার সাথে সাথে পেশির প্রোটিন গ্রহণের সংবেদনশীলতা কমে যায়। তাই বয়স্কদের পেশি ক্ষয় রোধে প্রতি বেলা খাবারে ৩.০ থেকে ৪.০ গ্রাম লিউসিন অর্থাৎ প্রায় ৩৫-৪৫ গ্রাম খাঁটি প্রোটিন খাওয়া আবশ্যক [4]। '
            ),
          ],
        },
        {
          id: 'sec-protein-distribution',
          heading: l(
            '3. Protein Distribution Kinetics: Pulsing vs. Skewed Skew',
            '৩. প্রোটিন বণ্টনের গতিবিদ্যা: পালসিং বনাম অসম বণ্টনের তুলনা'
          ),
          paragraphs: [
            l(
              'Clinical research proves that how dietary protein is distributed across the day dramatically alters cumulative 24-hour myofibrillar protein synthesis, even when total daily grams of protein are identical [3, 4].',
              'গবেষণায় দ্ব্যর্থহীনভাবে প্রমাণিত হয়েছে যে, সারাদিনের মোট প্রোটিনের গ্রাম এক হলেও তা কোন কোন বেলায় কীভাবে ভাগ করে খাওয়া হচ্ছে তার ওপর পেশি গঠনের হার নাটকীয়ভাবে পরিবর্তিত হয় [3, 4]। '
            ),
          ],
          bullets: [
            l(
              'The "Muscle-Full" Effect: Following protein ingestion, MPS accelerates rapidly, peaks at 90 to 120 minutes, and returns to baseline within 3 to 4 hours [3]. Once the muscle is "full," administering additional amino acids cannot further stimulate MPS; excess amino acids are diverted to the liver and irreversibly oxidized into urea and excreted in urine [3].',
              '"মাসল-ফুল" প্রভাব: খাবার খাওয়ার পর পেশি গঠন শুরু হয়, দেড় থেকে দুই ঘণ্টায় চূড়ায় পৌঁছায় এবং ৩-৪ ঘণ্টার মধ্যে আবার নিস্তেজ হয়ে যায় [3]। পেশি যখন একবার পূর্ণ হয়ে যায়, তখন অতিরিক্ত প্রোটিন দিলেও কোনো লাভ হয় না; অতিরিক্ত অ্যামিনো অ্যাসিড যকৃতে ইউরিয়া হয়ে প্রস্রাবের সাথে অপচয় হয় [3]। '
            ),
            l(
              'The 3-Pulse Architecture: Optimal protein accretion is achieved by delivering 3 to 4 discrete protein "pulses" of ~25 to 35 grams spaced 4 to 5 hours apart [3, 4]. Each pulse crosses the Leucine Trigger, stimulates maximal MPS, allows the muscle to reset during the refractory window, and then re-triggers synthesis at the next meal.',
              '৩-পালস পদ্ধতি: পেশি গঠনের সবচেয়ে বৈজ্ঞানিক নিয়ম হলো প্রতি ৪-৫ ঘণ্টা পরপর ২৫ থেকে ৩৫ গ্রামের ৩টি পৃথক প্রোটিন "পালস" গ্রহণ করা [3, 4]। প্রতিটি খাবার লিউসিন থ্রেশহোল্ড পার করে পেশি তৈরি করবে, তারপর বিশ্রাম নিয়ে পরবর্তী বেলায় আবার নতুন করে পেশি তৈরি করবে।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উচ্চতর'),
      sections: [
        {
          id: 'sec-mmc-fasting',
          heading: l(
            '1. The Migrating Motor Complex (MMC) & The Fasting Intestinal Housekeeper',
            '১. মাইগ্রেটিং মোটর কমপ্লেক্স (MMC) ও উপবাসকালীন অন্ত্র পরিষ্কারের তরঙ্গ'
          ),
          paragraphs: [
            l(
              'In the interdigestive (fasting) state, the gastrointestinal tract does not remain passive. Approximately 90 to 120 minutes after the completion of gastric emptying, the enteric nervous system initiates a highly organized, cyclical electromechanical motor pattern known as the **Migrating Motor Complex (MMC)** [5].',
              'খাবার হজম হয়ে পাকস্থলী খালি হওয়ার প্রায় ৯০ থেকে ১২০ মিনিট পর পরিপাকতন্ত্রে এক ধরনের সুশৃঙ্খল ও শক্তিশালী ছন্দময় তরঙ্গ শুরু হয়, যাকে চিকিৎসাবিজ্ঞানে **মাইগ্রেটিং মোটর কমপ্লেক্স (MMC)** বলা হয় [5]। '
            ),
            l(
              'The MMC cycles through four distinct physiological phases, driven by the cyclical release of the peptide hormone motilin from duodenal Mo-cells [5]: Phase I (quiescence, 45–60 min), Phase II (irregular, low-amplitude contractions, 30–45 min), Phase III (the "Housekeeper Wave": 5–15 minutes of uninterrupted, high-amplitude propagating contractions sweeping from the stomach to the terminal ileum at 3–6 cycles per minute), and Phase IV (transition back to quiescence) [5].',
              'এমএমসি মূলত ৪টি ধাপে সম্পন্ন হয় যা ডুওডেনামের মটিলিন হরমোন দ্বারা পরিচালিত [5]: ফেজ ১ (বিশ্রামকাল), ফেজ ২ (মৃদু অনিয়মিত সংকোচন), ফেজ ৩ (প্রাকৃতিক ঝাড়ুদার তরঙ্গ: ৫-১৫ মিনিট ধরে পাকস্থলী থেকে শুরু করে ক্ষুদ্রান্ত্রের শেষ প্রান্ত পর্যন্ত তীব্র ও অবিচ্ছিন্ন সংকোচন তরঙ্গ যা প্রতি মিনিটে ৩-৬ বার পুরো অন্ত্রকে ঝাড়ু দিয়ে পরিষ্কার করে), এবং ফেজ ৪ (পুনরায় বিশ্রাম) [5]। '
            ),
            l(
              'Phase III acts as a biological street-sweeper, mechanically clearing undigested food fibrous remnants, desquamated epithelial cells, and luminal secretions while preventing the retrograde migration of colonic bacteria into the small intestine [5]. Critically, **any caloric ingestion**—even as little as 30 to 50 kilocalories from a sip of milk or sweet tea—instantly abolishes the MMC, resetting the gut to the fed state. Chronic grazing and snacking permanently suppress Phase III waves, predisposing patients to Small Intestinal Bacterial Overgrowth (SIBO), postprandial bloating, and impaired mucosal repair [5].',
              'এই ফেজ ৩ তরঙ্গটি পরিপাকতন্ত্রের প্রাকৃতিক পরিচ্ছন্নতাকর্মীর মতো কাজ করে—যা না-হজম হওয়া খাবারের আঁশ, মরা কোষ ও জীবাণুগুলোকে ঝাড়ু দিয়ে বৃহদন্ত্রে ফেলে দেয় এবং বৃহদন্ত্রের ক্ষতিকর ব্যাকটেরিয়াকে ওপরে উঠে আসতে বাধা দেয় [5]। কিন্তু সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, **সামান্যতম ক্যালোরি পেটে গেলে** (এমনকি মাত্র ৩০-৫০ ক্যালোরির এক চুমুক দুধ চা খেলেও) সাথে সাথে এই পরিষ্কারক তরঙ্গটি বন্ধ হয়ে যায়! সারাদিন যারা ঘন ঘন কিছু না কিছু মুখে দিতে থাকেন, তাদের পেটের এই প্রাকৃতিক পরিষ্কারক কখনো কাজ করার সুযোগ পায় না; ফলে পেটে গ্যাস, ক্ষতিকর ব্যাকটেরিয়ার বিস্তার (SIBO) এবং দীর্ঘস্থায়ী বদহজম তৈরি হয় [5]। '
            ),
          ],
        },
        {
          id: 'sec-shift-worker-case',
          heading: l(
            '2. Clinical Chrono-Nutrition Case Study: Rotational Shift-Work Metabolic Rescue',
            '২. ক্লিনিক্যাল ক্রোনো-নিউট্রিশন কেস স্টাডি: নাইট শিফট কর্মীর মেটাবলিক চিকিৎসা'
          ),
          paragraphs: [
            l(
              'Patient Profile: A 42-year-old female rotational night-shift intensive care nurse (working 7:00 PM to 7:00 AM three nights per week). She presents with visceral adiposity (BMI 29.8 kg/m², waist circumference 92 cm), prediabetes (HbA1c 6.2%, fasting glucose 116 mg/dL), and severe diurnal fatigue. Dietary assessment reveals heavy nocturnal grazing: sweet coffee, biscuits, energy drinks, and noodles between 1:00 AM and 4:30 AM during shifts to stay awake, followed by daytime sleep and irregular meals [1, 2, 6].',
              'রোগীর বিবরণ: ৪২ বছর বয়সী নারী, আইসিইউর নাইট-শিফট নার্স (সপ্তাহে ৩ দিন রাত ৭টা থেকে সকাল ৭টা পর্যন্ত দায়িত্ব পালন করেন)। তিনি পেটে অতিরিক্ত চর্বি (BMI ২৯.৮, কোমর ৯২ সেমি), প্রি-ডায়াবেটিস (HbA1c ৬.২%, ফাস্টিং সুগার ১১৬ mg/dL) এবং তীব্র ক্লান্তিতে ভুগছেন। খাদ্য বিশ্লেষণে দেখা যায় তিনি রাত জেগে থাকার জন্য ডিউটির সময় রাত ১টা থেকে ভোর ৪টার মধ্যে মিষ্টি কফি, বিস্কুট, এনার্জি ড্রিংক ও নুডলস খান এবং দিনের বেলা অনিয়মিত ঘুম ও খাওয়া-দাওয়া করেন [1, 2, 6]। '
            ),
          ],
          bullets: [
            l(
              'Step 1: Circadian Pathophysiological Diagnosis. Nocturnal snacking coincides with biological midnight and peak pineal melatonin secretion. Beta-cell MTNR1B activation blocks insulin secretion, forcing consumed carbohydrates into extreme glycemic excursions (postprandial glucose > 220 mg/dL). Concurrently, nocturnal eating suppresses liver REV-ERBα, triggering unchecked de novo lipogenesis and hepatic steatosis [1, 2].',
              'ধাপ ১: রোগনির্ণয় ও কারণ অনুসন্ধান: রাতের খাবারের সময় রোগীর শরীরে মেলাটোনিন হরমোনের প্রভাব চূড়ায় থাকে। মেলাটোনিন অগ্ন্যাশয়ের ইনসুলিন বন্ধ রাখায় রাত ২টায় খাওয়া নুডলস ও মিষ্টি রক্তে সুগার ২২০-এর ওপরে তুলে দেয়। একই সাথে যকৃতের অভ্যন্তরীণ ঘড়ি বিভ্রান্ত হয়ে মারাত্মক ফ্যাটি লিভার তৈরি করে [1, 2]। '
            ),
            l(
              'Step 2: Consolidating Caloric Intake into an Early Chrono-Window. Shift all solid caloric meals to the daytime and early evening: Pre-shift meal at 6:00 PM (35g protein, high-fiber complex carbohydrates). Mid-shift meal at 11:30 PM (light, protein-predominant: 25g protein from boiled eggs and cottage cheese, zero refined starch). Complete caloric fasting from 12:00 AM to 7:00 AM, allowing only water and plain black tea [1, 2].',
              'ধাপ ২: খাবারের সময় পুনর্গঠন: সব মূল খাবার রাত ১২টার আগেই শেষ করার নির্দেশ দেওয়া হয়: ডিউটি শুরুর আগে সন্ধ্যা ৬টায় পুষ্টিকর খাবার (৩৫ গ্রাম প্রোটিন ও জটিল শর্করা)। ডিউটির প্রথমার্ধে রাত সাড়ে ১১টায় হালকা প্রোটিন নাশতা (সিদ্ধ ডিম ও ছানা থেকে ২৫ গ্রাম প্রোটিন, চিনি ও ময়দা সম্পূর্ণ নিষিদ্ধ)। রাত ১২টা থেকে সকাল ৭টা পর্যন্ত ক্যালোরিমুক্ত সম্পূর্ণ উপবাস (কেবল পানি বা লিকার চা গ্রহণ) [1, 2]। '
            ),
            l(
              'Step 3: Post-Shift Daytime Sleep Protocol. Prior to daytime sleep (8:30 AM), consume a small 15g protein + low-glycemic buffer (e.g., plain Greek yogurt with cinnamon) to prevent nocturnal-style hypoglycemia during sleep without triggering insulin volatility [2, 6].',
              'ধাপ ৩: দিনের ঘুমের আগে হালকা পথ্য: সকালে বাসায় ফিরে ঘুমানোর আগে (সকাল সাড়ে ৮টায়) মাত্র ১৫ গ্রাম প্রোটিনযুক্ত হালকা খাবার (যেমন টক দই) যাতে ঘুমের মধ্যে সুগার কমে না যায় আবার মেটাবলিজমে চাপও না পড়ে [2, 6]। '
            ),
            l(
              'Step 4: Clinical Outcome at 12 Weeks. Fasting plasma glucose normalized to 96 mg/dL; HbA1c dropped from 6.2% to 5.6% (prediabetes resolved); waist circumference decreased by 6 cm; daytime sleep architecture and daytime alertness significantly improved without changing total weekly working hours [1, 2].',
              'ধাপ ৪: ১২ সপ্তাহ পরের ক্লিনিক্যাল সাফল্য: রোগীর খালি পেটের সুগার কমে ৯৬ mg/dL-এ ফিরে আসে; HbA1c ৬.২% থেকে নেমে ৫.৬% হয় (প্রি-ডায়াবেটিস সম্পূর্ণ নিরাময়); কোমর ৬ সেমি কমে যায় এবং ডিউটির সময় ক্লান্তি দূর হয়ে মানসিক সতেজতা ফিরে আসে [1, 2]। '
            ),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Day-Shift Factory Analogy', '১. ডে-শিফট কারখানার সহজ উপমা'), sectionId: 'sec-factory-shift-analogy' },
      { id: 'toc-2', label: l('2. Meal Frequency Myths', '২. খাবারের সংখ্যা ও মেটাবলিজম ভ্রান্তি'), sectionId: 'sec-meal-frequency-myths' },
      { id: 'toc-3', label: l('3. Time-Restricted Eating (TRE)', '৩. টাইম-রেস্ট্রিক্টেড ইটিং (TRE) পদ্ধতি'), sectionId: 'sec-tre-protocols' },
      { id: 'toc-4', label: l('4. Molecular Clocks & Melatonin', '৪. আণবিক ঘড়ি ও রাতের মেলাটোনিন সংঘাত'), sectionId: 'sec-molecular-clocks' },
      { id: 'toc-5', label: l('5. Leucine Anabolic Trigger', '৫. লিউসিন ট্রিগার ও পেশি বৃদ্ধির সীমা'), sectionId: 'sec-leucine-trigger' },
      { id: 'toc-6', label: l('6. Protein Distribution Kinetics', '৬. প্রোটিন পালসিং বনাম অসম বণ্টন'), sectionId: 'sec-protein-distribution' },
      { id: 'toc-7', label: l('7. The Migrating Motor Complex (MMC)', '৭. অন্ত্রের প্রাকৃতিক পরিষ্কারক তরঙ্গ (MMC)'), sectionId: 'sec-mmc-fasting' },
      { id: 'toc-8', label: l('8. Shift-Worker Chrono-Rescue Case', '৮. নাইট-শিফট কর্মীর মেটাবলিক কেস স্টাডি'), sectionId: 'sec-shift-worker-case' },
    ],
    terms: [
      {
        term: l('Chrono-Nutrition', 'ক্রোনো-নিউট্রিশন (Chrono-Nutrition)'),
        definition: l(
          'The clinical science studying how the circadian timing of food intake interacts with peripheral cellular clocks and metabolic health.',
          'শরীরের অভ্যন্তরীণ জৈব ঘড়ির সাথে খাবার গ্রহণের সময় কীভাবে বিপাক ও স্বাস্থ্যকে প্রভাবিত করে তার পুষ্টিবিজ্ঞান।'
        ),
      },
      {
        term: l('Leucine Trigger', 'লিউসিন ট্রিগার (Leucine Trigger)'),
        definition: l(
          'The critical threshold of intracellular leucine concentration (~2.5–3.0g) required to activate mTORC1 and stimulate muscle protein synthesis.',
          'পেশি পুনর্গঠনের সুইচ (mTORC1) চালু করার জন্য প্রয়োজনীয় ন্যূনতম লিউসিনের মাত্রা (প্রায় ২.৫-৩.০ গ্রাম)।'
        ),
      },
      {
        term: l('Muscle-Full Effect', 'মাসল-ফুল প্রভাব (Muscle-Full Effect)'),
        definition: l(
          'The physiological phenomenon where muscle protein synthesis becomes refractory and returns to baseline 3–4 hours after protein intake despite ongoing amino acid availability.',
          'প্রোটিন খাওয়ার ৩-৪ ঘণ্টা পর রক্তে অ্যামিনো অ্যাসিড থাকা সত্ত্বেও পেশির প্রোটিন তৈরি সাময়িকভাবে বন্ধ হয়ে যাওয়ার শারীরিক অবস্থা।'
        ),
      },
      {
        term: l('Migrating Motor Complex (MMC)', 'মাইগ্রেটিং মোটর কমপ্লেক্স (MMC)'),
        definition: l(
          'A cyclical electromechanical motility pattern occurring in the interdigestive state, culminating in Phase III housekeeper peristalsis that sweeps residual debris and bacteria from the gut.',
          'খালি পেটে পরিপাকতন্ত্রে প্রতি ৯০-১২০ মিনিটে ঘটা একটি ছন্দময় পেশি সংকোচন যা খাদ্যাবশেষ ও জীবাণু ঝাড়ু দিয়ে পেট পরিষ্কার রাখে।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Worked Case: Engineering a 3-Pulse Daily Protein Blueprint for Sarcopenia Prevention',
          'হাতে-কলমে হিসাব: পেশি ক্ষয় রোধে ৩-পালস প্রোটিন ডায়েট তৈরি'
        ),
        steps: [
          l(
            'Step 1: Patient Parameters: 68-year-old female (weight 60 kg). Clinical protein prescription for sarcopenia = 1.5 g/kg/day = 90g protein total.',
            'ধাপ ১: রোগীর তথ্য: ৬৮ বছর বয়সী নারী (ওজন ৬০ কেজি)। সারকোপেনিয়া প্রতিরোধে প্রোটিনের লক্ষ্যমাত্রা = ১.৫ গ্রাম/কেজি/দিন = মোট ৯০ গ্রাম প্রোটিন।'
          ),
          l(
            'Step 2: Calculate Target per Pulse: Divide total 90g protein into 3 equal pulses spaced 4.5 hours apart: 90 / 3 = 30g protein per pulse (breakfast, lunch, dinner).',
            'ধাপ ২: প্রতি বেলার লক্ষ্য: মোট ৯০ গ্রাম প্রোটিনকে সাড়ে ৪ ঘণ্টার ব্যবধানে ৩টি সমান অংশে ভাগ: ৯০ / ৩ = প্রতি বেলায় ৩০ গ্রাম প্রোটিন (সকাল, দুপুর, রাত)।'
          ),
          l(
            'Step 3: Verify Leucine Anabolic Threshold: In older adults, anabolic resistance requires >= 3.0g leucine per pulse. Formulate breakfast: 2 whole eggs + 1 cup soy milk + 2 tbsp chia seeds = 30g protein providing 3.1g leucine. Threshold satisfied!',
            'ধাপ ৩: লিউসিন থ্রেশহোল্ড যাচাই: বয়স্কদের প্রতি বেলায় কমপক্ষে ৩.০ গ্রাম লিউসিন প্রয়োজন। সকালের খাবার: ২টি ডিম + ১ কাপ সয়া দুধ + ২ চামচ চিয়া সিড = ৩০ গ্রাম প্রোটিন (৩.১ গ্রাম লিউসিন)। থ্রেশহোল্ড সফলভাবে অর্জিত!'
          ),
          l(
            'Step 4: Lunch and Dinner Formulation: Lunch: 3.5 oz steamed Rui fish fillet + 1/2 cup cooked dal = 31g protein (3.2g leucine). Dinner: 3.5 oz skinless chicken breast + mixed vegetables = 30g protein (3.3g leucine).',
            'ধাপ ৪: দুপুর ও রাতের খাবার: দুপুর: ৩.৫ আউন্স রুই মাছ + ১/২ কাপ ঘন মসুর ডাল = ৩১ গ্রাম প্রোটিন (৩.২ গ্রাম লিউসিন)। রাত: ৩.৫ আউন্স মুরগির মাংস + সবজি = ৩০ গ্রাম প্রোটিন (৩.৩ গ্রাম লিউসিন)।'
          ),
        ],
        conclusion: l(
          'Distributing protein into three 30g pulses successfully overcomes anabolic resistance at every single meal, maximizing 24-hour skeletal muscle preservation.',
          'প্রতি বেলা খাবারে ৩০ গ্রাম করে প্রোটিন নিশ্চিত করার মাধ্যমে প্রতিবারই পেশির বৃদ্ধির সুইচ অন হয়, যা বার্ধক্যজনিত পেশি ক্ষয় থেকে সর্বোচ্চ সুরক্ষা দেয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'Why does eating carbohydrates late at night induce severe postprandial hyperglycemia even in individuals with normal daytime glucose tolerance?',
          'দিনে যাদের সুগার একদম স্বাভাবিক থাকে, তারাও রাতে দেরিতে শর্করা খেলে কেন রক্তে ভয়াবহ সুগার স্পাইক দেখা দেয়?'
        ),
        answer: l(
          'As biological darkness falls, the pineal gland secretes melatonin to prepare the body for sleep. Pancreatic beta cells express melatonin MTNR1B receptors; binding of melatonin directly inhibits adenylyl cyclase, lowering intracellular cAMP and shutting down glucose-stimulated insulin secretion. Consuming carbohydrates during the nocturnal melatonin surge forces glucose into a bloodstream where endogenous insulin secretion is biologically suppressed, producing severe postprandial hyperglycemia and hepatic steatosis.',
          'রাত নামার সাথে সাথে ঘুমের জন্য মস্তিষ্ক মেলাটোনিন হরমোন নিঃসরণ করে। অগ্ন্যাশয়ের বিটা কোষে মেলাটোনিনের MTNR1B রিসেপ্টর থাকে; মেলাটোনিন সেখানে যুক্ত হয়ে ইনসুলিন তৈরির প্রক্রিয়াকে সাময়িকভাবে লক করে দেয়। ফলে রাতে দেরিতে ভাত বা মিষ্টি খেলে শরীর থেকে পর্যাপ্ত ইনসুলিন বের হতে পারে না, যার কারণে রক্তে অস্বাভাবিক সুগার স্পাইক ঘটে এবং লিভারে চর্বি জমে।'
        ),
      },
      {
        question: l(
          'Why does consuming a 40-calorie snack between meals immediately abolish the migrating motor complex (MMC) housekeeper wave?',
          'খাবারের মাঝে সামান্য ৪০ ক্যালোরির নাশতা খেলেও কেন অন্ত্রের প্রাকৃতিক পরিষ্কারক তরঙ্গ (MMC) সাথে সাথে বন্ধ হয়ে যায়?'
        ),
        answer: l(
          'The Migrating Motor Complex (MMC) is strictly an interdigestive (fasting) motor program mediated by motilin secretion in the absence of nutrients. Phase III housekeeper contractions require complete luminal quiescence. Any caloric intake—even 30 to 50 calories—stimulates vagal and enteric sensory receptors, instantly shifting the autonomic nervous system from fasting motility to the fed state (segmentation and churning). Phase III peristalsis is aborted, leaving cellular debris, unabsorbed fiber, and luminal bacteria trapped in the small intestine.',
          'মাইগ্রেটিং মোটর কমপ্লেক্স (MMC) কেবল উপবাসের সময় পরিচালিত একটি প্রাকৃতিক পরিচ্ছন্নতা ব্যবস্থা। পেটে সামান্যতম ক্যালোরি ঢুকলেই (এমনকি মাত্র ৩০-৪০ ক্যালোরি) পেটের স্নায়ুতন্ত্র উপবাসের অবস্থা ছেড়ে হজমের মোডে চলে যায়। এর ফলে অন্ত্রের তীব্র পরিষ্কারক ঝাড়ুদার তরঙ্গ বন্ধ হয়ে যায় এবং খাদ্যাবশেষ ও ক্ষতিকর জীবাণু ক্ষুদ্রান্ত্রে আটকা পড়ে বদহজম তৈরি করে।'
        ),
      },
    ],
  },
}

export const dietetics15MealFrequencyLesson = dietetics15Lesson

