import type { LessonTopic, LessonReference } from '../lessonSchema'

const l = (en: string, bn: string) => ({ en, bn })

export const dietetics03References: LessonReference[] = [
  {
    id: 'ref-fischer-nfpe-2015',
    authors: 'Fischer M, JeVenn K, Hipskind M',
    title: 'Nutrition-Focused Physical Assessment in Adult Malnutrition',
    organization: 'Nutrition in Clinical Practice',
    year: 2015,
    url: 'https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0884533615573038',
    doi: '10.1177/0884533615573038',
  },
  {
    id: 'ref-white-malnutrition-2012',
    authors: 'White JV, Guenter P, Jensen GL, Malone A, Schofield M',
    title: 'Consensus Statement of the Academy of Nutrition and Dietetics/American Society for Parenteral and Enteral Nutrition: Characteristics Recommended for the Identification and Documentation of Adult Malnutrition (Undernutrition)',
    organization: 'Journal of the Academy of Nutrition and Dietetics',
    year: 2012,
    url: 'https://jandonline.org/article/S2212-2672(12)00311-6/fulltext',
    doi: '10.1016/j.jand.2012.03.012',
  },
  {
    id: 'ref-malone-hamilton-nfpe',
    authors: 'Malone A, Hamilton C',
    title: 'The Nutrition-Focused Physical Exam: Making the Bedside Diagnosis of Malnutrition',
    organization: 'Practical Gastroenterology',
    year: 2013,
    url: 'https://practicalgastro.com/2013/05/15/the-nutrition-focused-physical-exam/',
  },
  {
    id: 'ref-sheean-micronutrient-signs',
    authors: 'Sheean P, Petersen CA',
    title: 'Physical Examination for the Physical Manifestations of Vitamin and Mineral Deficiencies',
    organization: 'Support Line',
    year: 2014,
    url: 'https://www.dieteticsinpractice.org/',
  },
  {
    id: 'ref-and-nfpe-handbook',
    authors: 'Mogensen KM, et al.',
    title: 'Nutrition Focused Physical Exam Hands-On Pocket Guide: Staging Muscle and Fat Depletion',
    organization: 'Academy of Nutrition and Dietetics',
    year: 2021,
    url: 'https://www.eatrightstore.org/',
    doi: '10.1016/j.jand.2021.05.008',
  },
]

export const dietetics03NfpeLesson: LessonTopic = {
  id: 'topic.dietetics.nfpe-physical-exam',
  slug: 'nfpe-physical-exam-micronutrient-signs',
  title: l(
    '03 · Nutrition-Focused Physical Exam (NFPE) & Clinical Muscle-Fat Depletion',
    '০৩ · পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) ও পেশি-চর্বি ক্ষয় নিরূপণ'
  ),
  summary: l(
    'A comprehensive guide to the art and science of bedside physical examination: inspecting and touching living muscle compartments, evaluating subcutaneous fat loss beneath eyes and arms, staging fluid edema from 1+ to 4+, and reading the hidden language of micronutrient deficiencies across the skin, hair, mouth, and fingernails.',
    'শয্যাপাশে শারীরিক পরীক্ষার অনন্য শিল্প ও বিজ্ঞান: হাত দিয়ে স্পর্শ করে শরীরের জীবন্ত মাংসপেশি পরীক্ষা, চোখ ও বাহুর নিচের চর্বি ক্ষয় নিরূপণ, ১+ থেকে ৪+ স্কেলে পানি জমা (এডিমা) গ্রেডিং এবং ত্বক, চুল, মুখগহ্বর ও নখে ফুটে ওঠা ভিটামিন-খনিজ ঘাটতির নীরব সংকেত শনাক্তকরণের বিস্তারিত রূপরেখা।'
  ),
  subject: 'dietetics',
  version: 1,
  updatedAt: '2026-11-03',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-11-03',
  prerequisiteIds: ['topic.dietetics.assessment-abcd'],
  relatedTopicIds: ['topic.dietetics.assessment-abcd', 'topic.nutrition.clinical-malnutrition-wasting-cachexia'],
  objectives: [
    l(
      'Master the head-to-toe examination sequence to systematically palpate and grade skeletal muscle wasting across the temples, collarbones, shoulders, hands, thighs, and calves.',
      'মাথা থেকে পা পর্যন্ত ধারাবাহিক পরীক্ষার মাধ্যমে কপাল, কলারবোন, কাঁধ, হাত, ঊরু ও কাফের মাংসপেশি স্পর্শ করে ক্ষয়ের মাত্রা নির্ভুলভাবে নির্ণয় করা।'
    ),
    l(
      'Differentiate preserved subcutaneous adipose cushions from mild, moderate, and severe depletion at the orbital pads, buccal cheeks, and triceps skinfolds.',
      'চোখের চারপাশের ফ্যাট প্যাড, গালের চর্বি এবং ট্রাইসেপসের চামড়া চিমটি কেটে স্বাভাবিক চর্বি বনাম মৃদু, মাঝারি ও তীব্র চর্বি ক্ষয়ের পার্থক্য করা।'
    ),
    l(
      'Accurately stage peripheral and dependent pitting edema on a standardized 1+ to 4+ scale and uncover how fluid accumulation masks severe muscle wasting on bathroom scales.',
      'পায়ে ও পিঠের নিচে পানি জমার মাত্রা ১+ থেকে ৪+ স্কেলে সঠিকভাবে গ্রেডিং করা এবং কীভাবে তরল জমার কারণে স্কেলের ওজন রোগীকে ভুয়া সুস্থ দেখায় তা বোঝা।'
    ),
    l(
      'Identify classic physical warning signs of vitamin and mineral deficiencies across hair (corkscrew coils), eyes (Bitot spots), oral cavity (angular cheilosis, atrophic glossitis), skin (Casal necklace), and nails (koilonychia).',
      'চুল (স্ক্রু আকৃতির চুল), চোখ (বিটট স্পট), মুখ (ঠোঁটের কোণে ঘা, মসৃণ লাল জিহ্বা), ত্বক (ক্যাসালের নেকলেস) এবং নখে (চামচ আকৃতির নখ) ভিটামিন ও খনিজের ঘাটতির সুনির্দিষ্ট লক্ষণ চিনে নেওয়া।'
    ),
    l(
      'Apply the ASPEN/AND consensus criteria requiring at least two out of six clinical characteristics to definitively confirm and stage adult malnutrition at the bedside.',
      'শারীরিক পরীক্ষার প্রমাণের ওপর ভিত্তি করে প্রাপ্তবয়স্কদের অপুষ্টি নিশ্চিত করতে ছয়টি আন্তর্জাতিক বৈশিষ্ট্যের মধ্যে অন্তত দুটি শনাক্ত করার নিয়ম প্রয়োগ করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'An anatomical full-body examination diagram illustrating the step-by-step head-to-toe clinical assessment pathway: starting with temporal and orbital inspection at the head, moving to clavicular, scapular, and interosseous palpation in the upper torso, progressing to quadriceps and patellar evaluation in the lower extremities, and concluding with pretibial and sacral pitting edema staging.',
      'মাথা থেকে পা পর্যন্ত শারীরিক পরীক্ষার ধারাবাহিক শারীরবৃত্তীয় প্রবাহচিত্র: মাথায় কপাল ও চোখের চারপাশের চর্বি পরীক্ষা দিয়ে শুরু হয়ে কলারবোন, কাঁধ ও হাতের আঙুলের পেশি পরীক্ষা, নিচের দিকে ঊরু ও হাঁটুর পেশি নিরূপণ এবং সর্বশেষে পায়ে ও স্যাক্রামে আঙুল চেপে এডিমা গ্রেডিং।'
    ),
    steps: [
      l(
        'Step 1: Craniofacial Palpation. Ask the patient to clench their teeth while palpating the temporalis muscle for hollowing. Inspect orbital fat pads beneath the eyes and buccal fat pads on the cheeks.',
        'ধাপ ১: মাথা ও মুখের পরীক্ষা: রোগীকে দাঁত শক্ত করে কামড়ে ধরতে বলে দুই পাশের টেম্পোরাল পেশি স্পর্শ করে গর্ত হওয়া পরীক্ষা করুন। চোখের নিচে ও গালে চর্বি ক্ষয় পর্যবেক্ষণ করুন।'
      ),
      l(
        'Step 2: Shoulder Girdle & Clavicular Inspection. Inspect the clavicle (collarbone) for excessive protrusion. Palpate the acromion process: square, bony shoulders indicate deltoid wasting, whereas rounded contours indicate preserved muscle.',
        'ধাপ ২: কলারবোন ও কাঁধের পরীক্ষা: কলারবোন কতটা উঁচু হয়ে বেরিয়ে আছে দেখুন। কাঁধের সংযোগস্থলে হাত দিন: কাঁধ চারকোনা ও হাড় দৃশ্যমান হলে ডেল্টয়েড পেশি ক্ষয় নিশ্চিত হয়।'
      ),
      l(
        'Step 3: Upper Extremity & Hand Evaluation. Have the patient touch their thumb to their index finger, creating the "OK" sign. Palpate the first dorsal interosseous muscle: a hollow depression indicates advanced somatic muscle wasting.',
        'ধাপ ৩: হাত ও আঙুলের পরীক্ষা: রোগীকে বৃদ্ধাঙ্গুল ও তর্জনী ছুঁয়ে "OK" চিহ্ন তৈরি করতে বলুন। দুই আঙুলের মাঝের ইন্টারঅসিয়াস পেশি স্পর্শ করুন: সেখানে গর্ত থাকলে তীব্র পেশি ক্ষয় নির্দেশ করে।'
      ),
      l(
        'Step 4: Lower Extremity & Edema Staging. Grasp the quadriceps and calf bulk. Press firmly with a thumb over the pretibial crest and dorsum of the foot for 5 seconds to stage pitting edema (1+ to 4+). Check the sacrum if bedridden.',
        'ধাপ ৪: পা ও এডিমা নির্ধারণ: ঊরু ও কাফের পেশির ঘনত্ব অনুভব করুন। পায়ের টিবিয়া হাড়ের ওপর বৃদ্ধাঙ্গুল দিয়ে ৫ সেকেন্ড চেপে ধরে এডিমা (১+ থেকে ৪+) গ্রেডিং করুন। শোয়া রোগীর স্যাক্রাম পরীক্ষা করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During an NFPE of a 68-year-old bedridden male with severe end-stage renal disease, you observe prominent protruding clavicles, squared acromial shoulder processes, a deep depression between the thumb and index finger (interosseous wasting), and +3 bilateral lower extremity edema extending to mid-calf. His body weight has remained unchanged over the last 3 months. How should the clinical team interpret these physical findings?',
      'শেষ ধাপের কিডনি রোগে আক্রান্ত ৬৮ বছর বয়সী এক বিছানাগত রোগীর শারীরিক পরীক্ষায় কলারবোন অস্বাভাবিক দৃশ্যমান, কাঁধের চারকোনা হাড় স্পষ্ট, হাতের আঙুলের মাঝে গভীর গর্ত (ইন্টারঅসিয়াস পেশি ক্ষয়) এবং হাঁটু পর্যন্ত ৩+ মাত্রার এডিমা দেখা গেল। অথচ গত ৩ মাসে তার ওজনে কোনো পরিবর্তন হয়নি। পুষ্টি দলের এই শারীরিক লক্ষণগুলো কীভাবে ব্যাখ্যা করা উচিত?'
    ),
    options: [
      l(
        'The patient has preserved nutritional status because his stable body weight confirms adequate caloric balance.',
        'রোগীর পুষ্টি অবস্থা ভালো, কারণ ৩ মাস ধরে স্থিতিশীল ওজন পর্যাপ্ত ক্যালোরির ভারসাম্য প্রমাণ করে।'
      ),
      l(
        'The patient has severe somatic muscle wasting that is physically masked on the scale by massive fluid retention (edema weight replacement).',
        'রোগীর তীব্র মাংসপেশি ক্ষয় হয়েছে, যা শরীরের অতিরিক্ত তরল বা এডিমার ওজনের কারণে স্কেলে ধরা পড়েনি।'
      ),
      l(
        'The temporal and interosseous findings are benign normal aging phenomena unrelated to clinical malnutrition.',
        'টেম্পোরাল ও হাতের পেশি ক্ষয় স্বাভাবিক বার্ধক্যের লক্ষণ এবং এর সাথে অপুষ্টির কোনো সম্পর্ক নেই।'
      ),
      l(
        'The +3 edema indicates an isolated excess of dietary sodium with intact somatic protein mass.',
        'পায়ের ৩+ এডিমা কেবল অতিরিক্ত লবণ খাওয়ার ফল এবং রোগীর প্রোটিন স্তর স্বাভাবিক রয়েছে।'
      ),
    ],
    correctIndex: 1,
    explanation: l(
      'Severe somatic muscle wasting (squared shoulders, clavicular protrusion, interosseous depletion) combined with fluid expansion (+3 edema) demonstrates how fluid retention masks severe clinical malnutrition on body weight scales. 1 liter of retained fluid adds 1 kg of artificial weight. NFPE is critical because it visually detects somatic tissue depletion that weight scales completely miss.',
      'তীব্র পেশি ক্ষয় (চারকোনা কাঁধ, দৃশ্যমান কলারবোন, আঙুলের মাঝের গর্ত) এবং এডিমার উপস্থিতি প্রমাণ করে যে অতিরিক্ত পানি জমা হলে রোগীর ওজন স্বাভাবিক দেখালেও ভেতরের পেশি মারাত্মকভাবে ক্ষয় হয়ে যেতে পারে। ১ লিটার তরল জমা হলে শরীরের ওজন ১ কেজি বেড়ে যায়। তাই কেবল ওজন না মেপে হাত দিয়ে শারীরিক পরীক্ষা (NFPE) করা অত্যন্ত জরুরি।'
    ),
  },
  evidenceBySection: {
    'sec-nfpe-intro': ['ref-fischer-nfpe-2015', 'ref-white-malnutrition-2012'],
    'sec-muscle-sites': ['ref-fischer-nfpe-2015', 'ref-malone-hamilton-nfpe'],
    'sec-fat-pads-edema': ['ref-fischer-nfpe-2015', 'ref-white-malnutrition-2012'],
    'sec-muscle-wasting': ['ref-fischer-nfpe-2015', 'ref-white-malnutrition-2012'],
    'sec-fat-loss': ['ref-fischer-nfpe-2015', 'ref-malone-hamilton-nfpe'],
    'sec-edema-staging': ['ref-white-malnutrition-2012', 'ref-malone-hamilton-nfpe'],
    'sec-micronutrient-signs': ['ref-sheean-micronutrient-signs', 'ref-and-nfpe-handbook'],
    'sec-aspen-consensus-staging': ['ref-white-malnutrition-2012', 'ref-fischer-nfpe-2015'],
  },
  references: dietetics03References,
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'sec-nfpe-intro',
          heading: l('1. The Lost Art of Bedside Touch: What Is an NFPE?', '১. স্পর্শের মাধ্যমে রোগ চেনার বিজ্ঞান: পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) কী?'),
          paragraphs: [
            l(
              'For centuries, before high-tech blood analyzers, MRI scanners, and computerized body composition machines were invented, great physicians diagnosed disease using their five senses—their eyes, their hands, and their focused observation [1]. Today, modern hospital medicine has become so captivated by laboratory numbers and computer monitors that clinicians sometimes forget to look directly at the living human being resting in the bed. The Nutrition-Focused Physical Exam (NFPE) restores this vital human art to the center of clinical care [1, 3].',
              'চিকিৎসাবিজ্ঞানের শত শত বছরের ইতিহাসে যখন কোনো আধুনিক ল্যাবরেটরি, এমআরআই স্ক্যানার কিংবা কম্পিউটারের অস্তিত্ব ছিল না, তখন পৃথিবীর মহান চিকিৎসকরা তাদের পাঁচটি ইন্দ্রিয়—চোখের দৃষ্টি, হাতের স্পর্শ এবং নিবিড় পর্যবেক্ষণ দিয়ে রোগীর রোগ নির্ণয় করতেন [1]। কিন্তু বর্তমান যুগের আধুনিক হাসপাতালগুলোতে রক্তপরীক্ষার রিপোর্ট ও মনিটরের সংখ্যার দিকে চিকিৎসকরা এত বেশি মগ্ন হয়ে পড়েছেন যে, শয্যায় শুয়ে থাকা জীবন্ত মানুষটিকে সরাসরি হাত দিয়ে ছুঁয়ে দেখার অমূল্য অভ্যাসটি প্রায় হারিয়ে যেতে বসেছে। পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা বা নিউট্রিশন-ফোকাসড ফিজিক্যাল এক্সাম (NFPE) সেই হারিয়ে যাওয়া দক্ষতাকে পুনরায় চিকিৎসাসেবার কেন্দ্রবিন্দুতে ফিরিয়ে এনেছে [1, 3]।'
            ),
            l(
              'While a cardiologist uses a stethoscope to listen to the rhythm of heart valves, and a pulmonologist listens for fluid wheezes in the lungs, a clinical nutrition specialist conducts an NFPE to search for evidence of cellular starvation and tissue breakdown [1, 2]. When the human body runs out of food, it does not lose tissues randomly. Human biology follows a strict survival triage hierarchy: the body fiercely protects the brain, the heart, and the liver at all costs, while methodically dismantling peripheral skeletal muscles and burning fat pads to keep those vital organs alive. By systematically examining specific muscle pockets, fat cushions, skin surfaces, and fingernails, the clinician reads the true biological history of the patient’s metabolic struggle [2, 3].',
              'একজন হৃদরোগ বিশেষজ্ঞ যখন স্টেথোস্কোপ দিয়ে হার্টের কপাটিকার ছন্দ শোনেন, কিংবা বক্ষব্যাধি বিশেষজ্ঞ ফুসফুসের শব্দ শোনেন, একজন পুষ্টি বিশেষজ্ঞ তখন NFPE-র মাধ্যমে শরীরের কোষীয় অনাহার ও টিস্যুর ক্ষয় অনুসন্ধান করেন [1, 2]। মানবদেহ যখন পর্যাপ্ত খাবার পায় না, তখন শরীরের বিভিন্ন অংশ এলোমেলোভাবে শুকিয়ে যায় না। আমাদের জীববিজ্ঞান বেঁচে থাকার জন্য এক কঠোর অগ্রাধিকারের নিয়ম মেনে চলে: শরীর যেকোনো মূল্যে মস্তিষ্ক, হৃৎপিণ্ড এবং যকৃৎকে সুরক্ষিত রাখে; আর এদের বাঁচিয়ে রাখার জ্বালানি জোগাতে হাত, পা, কপাল ও কাঁধের মাংসপেশি এবং চামড়ার নিচের চর্বি ভেঙে পুড়িয়ে ফেলে। তাই নির্দিষ্ট কিছু পেশি, চর্বির স্তর, ত্বক ও নখ স্পর্শ করে পরীক্ষা করলেই একজন রোগীর ভেতরের মেটাবলিক যুদ্ধের আসল ইতিহাস চোখের সামনে ভেসে ওঠে [2, 3]।'
            ),
            l(
              'Relying solely on a bathroom scale or Body Mass Index (BMI) in an ill patient is notoriously deceptive [2]. Consider an elderly grandfather with severe congestive heart failure who loses 8 kilograms of solid skeletal muscle over two months, while his failing heart causes his body to retain 8 liters of salty water in his legs and abdomen. When he steps on a scale, his weight is perfectly identical to two months ago! His medical chart might falsely report: "Weight stable, nutrition adequate." In reality, his vital somatic muscles are wasting away beneath a sea of trapped fluid. The NFPE is the only clinical tool that cuts through this illusion, revealing the skeletal depletion that bathroom scales completely miss [1, 2].',
              'অসুস্থ রোগীর ক্ষেত্রে কেবল সাধারণ ওজনের স্কেল বা বিএমআই-এর ওপর নির্ভর করা মারাত্মক প্রতারণামূলক হতে পারে [2]। ধরুন, হার্ট ফেইলিউরে আক্রান্ত একজন প্রবীণ ব্যক্তি গত দুই মাসে তার শরীরের ৮ কেজি আসল মাংসপেশি হারিয়ে ফেলেছেন; কিন্তু দুর্বল হার্টের কারণে তার পায়ে ও পেটে ৮ লিটার লবণাক্ত পানি জমে গেছে। এখন ওজনের স্কেলে দাঁড়ালে তার ওজন দুই মাস আগের ওজনের সমান দেখাবে! হাসপাতালের ফাইলে হয়তো লেখা হবে: "ওজন অপরিবর্তিত, পুষ্টি স্বাভাবিক।" অথচ বাস্তবে জমে থাকা পানির নিচে তার অতি প্রয়োজনীয় মাংসপেশি শুকিয়ে কঙ্কালসার হয়ে গেছে। NFPE হলো একমাত্র ক্লিনিক্যাল হাতিয়ার যা স্কেলের এই মরীচিকা ভেঙে ভেতরের আসল সত্য উন্মোচন করে [1, 2]।'
            ),
          ],
        },
        {
          id: 'sec-muscle-sites',
          heading: l('2. Key Muscle Groups: Where the Body First Burns Its Own Protein', '২. প্রধান পেশি অঞ্চলসমূহ: শরীর যেখানে নিজের প্রোটিন সবার আগে পোড়ায়'),
          paragraphs: [
            l(
              'During an NFPE, the clinician does not randomly squeeze muscles. They systematically inspect and palpate discrete anatomical sites where skeletal muscle is normally well-defined, and where catabolic wasting creates visible hollows and prominent bones [1, 3]:',
              'শারীরিক পরীক্ষার সময় পুষ্টিবিদ এলোমেলোভাবে শরীর স্পর্শ করেন না। তিনি সুশৃঙ্খলভাবে নির্দিষ্ট কিছু শারীরিক স্থান পর্যবেক্ষণ ও স্পর্শ করেন যেখানে সাধারণ অবস্থায় মাংসপেশি টানটান থাকে, কিন্তু পুষ্টিহীনতায় পেশি ক্ষয় হয়ে হাড় বেরিয়ে আসে ও গভীর গর্ত তৈরি হয় [1, 3]:'
            ),
            l(
              'By examining these upper body and facial muscle zones, the clinician identifies wasting that occurred weeks or months before a routine blood test shows any abnormalities [1, 3].',
              'মুখের ও শরীরের ওপরের অংশের এই নির্দিষ্ট পেশিগুলো পরীক্ষা করে একজন অভিজ্ঞ পুষ্টিবিদ এমন পেশি ক্ষয় শনাক্ত করতে পারেন যা সাধারণ রক্তপরীক্ষায় ধরা পড়ার কয়েক সপ্তাহ বা কয়েক মাস আগেই শরীরে ঘটে গেছে [1, 3]।'
            ),
          ],
          bullets: [
            l('Temples (Temporalis Muscle): Located on both sides of the forehead. Place your fingers on the patient’s temples and ask them to bite down firmly. In a well-nourished person, you will feel a thick, firm muscular pad bulging under your fingers. In malnutrition, this muscle melts away, leaving a visible scooped-out, hollow bowl.', 'কপালের দুই পাশ বা টেম্পল (Temporalis পেশি): কপালের দুই পাশে আঙুল রেখে রোগীকে দাঁতে দাঁত চেপে কামড় দিতে বলুন। সুস্থ মানুষের ক্ষেত্রে আঙুলের নিচে শক্ত ফোলা মাংস অনুভূত হবে। কিন্তু পুষ্টিহীনতায় এই পেশি ক্ষয় হয়ে সেখানে স্পষ্ট খাদের মতো গভীর গর্ত তৈরি হয়।'),
            l('Shoulders (Deltoid Muscle & Acromion): A healthy shoulder features a smooth, rounded muscular dome formed by the deltoid muscle. When severe muscle wasting occurs, the muscle belly shrinks, leaving the bony acromion process sticking out sharply to create a dramatic "squared-off" 90-degree corner.', 'কাঁধ (Deltoid পেশি ও অ্যাক্রোমিয়ন হাড়): সুস্থ মানুষের কাঁধ ডেল্টয়েড পেশির কারণে গোলগাল ও মসৃণ রূপ ধারণ করে। কিন্তু তীব্র অপুষ্টিতে কাঁধের মাংস শুকিয়ে যায় এবং কাঁধের সংযোগস্থলের হাড়টি অস্বাভাবিকভাবে বেরিয়ে এসে চারকোনা ধারালো ৯০ ডিগ্রি রূপ নেয়।'),
            l('Collarbones (Clavicles): In a healthy adult, the clavicle bone is generously cushioned by muscle and fat. In malnutrition, the surrounding pectoralis and deltoid muscles wither, causing the collarbone to jut out sharply like a bare coat hanger with deep hollow trenches above and below it.', 'কলারবোন বা কণ্ঠাস্থি (Clavicle): সুস্থ মানুষের কলারবোনের ওপর মাংস ও চর্বির কোমল আবরণ থাকে। কিন্তু পুষ্টিহীনতায় কলারবোনের চারপাশের পেশি শুকিয়ে যায় এবং হাড়টি একটি খালি কাপড়ের হ্যাঙ্গারের মতো অস্বাভাবিক উঁচু হয়ে ওঠে, যার ওপর-নিচে গভীর গর্ত দেখা যায়।'),
            l('Hands (First Dorsal Interosseous Muscle): Ask the patient to pinch the tips of their thumb and index finger firmly together (the "OK" sign). In good nutrition, a plump, fleshy muscular mound rises between the two bones. In malnutrition, this muscular mound disappears, leaving a flat or deeply sunken valley.', 'হাতের তালুর ওপরের পেশি (Interosseous পেশি): রোগীকে তার বৃদ্ধাঙ্গুলি ও তর্জনীর ডগা শক্তভাবে একসাথে মেলাতে বলুন (যেমন "OK" চিহ্ন দেখানো হয়)। সুস্থ মানুষের দুই হাড়ের মাঝে সুন্দর গোল আলুর মতো মাংস ফুলে ওঠে। কিন্তু মারাত্মক অপুষ্টিতে সেই মাংস মিলিয়ে গিয়ে সমতল বা ভেতরে দেবে যাওয়া গর্তের সৃষ্টি হয়।'),
          ],
        },
        {
          id: 'sec-fat-pads-edema',
          heading: l('3. Fat Stores, Water Retention, and Edema Pitfalls', '৩. চর্বির স্তর, শরীরে পানি জমা এবং এডিমার ফাঁদ'),
          paragraphs: [
            l(
              'In addition to inspecting muscle tissue, the clinician evaluates the body’s subcutaneous adipose fat cushions [1]. Subcutaneous fat serves as the body’s thermal blanket and primary emergency energy reserve. When caloric intake is severely restricted, the body burns through these fat deposits before breaking down heavy skeletal muscle. The two most sensitive facial fat zones are the orbital fat pads beneath the eyes and the buccal fat pads in the cheeks [1, 2].',
              'পেশির পাশাপাশি চিকিৎসক ত্বকের নিচের চর্বির কুশনগুলো হাত দিয়ে পরীক্ষা করেন [1]। ত্বকের নিচের এই চর্বি আমাদের দেহের উষ্ণতা ধরে রাখার কম্বল এবং বিপদের দিনের প্রধান শক্তির সঞ্চয়াগার। খাবার কম পেলে শরীর মাংসপেশি ভাঙার আগেই এই সঞ্চিত চর্বি পুড়িয়ে ফেলে। মুখের সবচেয়ে স্পর্শকাতর দুটি চর্বির স্তর হলো চোখের নিচের অরবিটাল ফ্যাট এবং গালের বাক্কাল ফ্যাট [1, 2]।'
            ),
            l(
              'A well-nourished individual has plump orbital cushions giving the eyes a bright, alert projection, while healthy cheeks curve gently outward. When subcutaneous fat is depleted, the eyes sink deeply into dark, hollow cranial sockets, and the cheeks hollow out into sunken valleys that make the cheekbones jut forward like a skull [1, 3].',
              'সুস্থ মানুষের চোখের নিচে নরম চর্বির স্তর থাকার কারণে চোখ উজ্জ্বল ও স্বাভাবিক থাকে এবং গাল বাইরের দিকে কোমলভাবে ফুলে থাকে। কিন্তু চর্বি ক্ষয় হলে চোখ কোটরে ঢুকে গিয়ে চোখের চারদিকে কালো গর্তের সৃষ্টি হয় এবং গালের মাংস ভেতরে দেবে গিয়ে চোয়ালের হাড় কঙ্কালের মতো ফুটে ওঠে [1, 3]।'
            ),
            l(
              'Finally, every clinician must test for pitting edema by pressing a thumb firmly against the bony surface of the lower leg or ankle for 5 full seconds [2]. If fluid has leaked from the bloodstream into the interstitial tissues, your thumb will leave a distinct indentation or "pit" that remains sunken after you lift your finger. Because fluid accumulation can add 5 to 15 kilograms of false weight, recognizing edema allows the clinical nutrition team to mentally subtract the water weight and calculate the patient’s true nutritional needs [2, 5].',
              'পরীক্ষার শেষ ধাপে চিকিৎসক অবশ্যই রোগীর পায়ের নলার হাড় বা গোড়ালির ওপর বুড়ো আঙুল দিয়ে পূর্ণ ৫ সেকেন্ড শক্তভাবে চেপে ধরে পিটিং এডিমা পরীক্ষা করেন [2]। রক্তনালি থেকে পানি চুইয়ে যদি টিস্যুতে জমা হয়ে থাকে, তবে আঙুল তুলে নেওয়ার পর সেখানে একটি সুস্পষ্ট গর্ত বা খাদ রয়ে যাবে। যেহেতু এই জমে থাকা পানি রোগীর ওজনে ৫ থেকে ১৫ কেজি পর্যন্ত বাড়তি ওজন যোগ করতে পারে, তাই এডিমা শনাক্ত করার পরই পুষ্টিবিদ অতিরিক্ত পানির ওজন বাদ দিয়ে রোগীর প্রকৃত পুষ্টি চাহিদা হিসাব করতে পারেন [2, 5]।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'sec-muscle-wasting',
          heading: l('1. Systematic Upper and Lower Somatic Muscle Palpation', '১. ওপর ও নিচের মাংসপেশি পরীক্ষার সুশৃঙ্খল বৈজ্ঞানিক পদ্ধতি'),
          paragraphs: [
            l(
              'The Nutrition-Focused Physical Exam disassembles somatic musculature into standardized anatomical zones evaluated via bilaterally symmetrical inspection and palpation [1, 3]. In the temporalis fossa, the clinician asks the patient to clench their teeth; loss of muscle bulk results in concavity rather than a full muscular bulge. In the shoulder girdle, the examiner traces the acromion process: wasting of the pectoralis major and deltoid transforms the rounded glenohumeral contour into a prominent 90-degree bony angle.',
              'শারীরিক পরীক্ষায় শরীরের মাংসপেশিকে আটটি প্রমিত স্থানে ভাগ করে দুই পাশের তুলনামূলক পরীক্ষা করা হয় [1, 3]। কপালে টেম্পোরাল পেশি পরীক্ষার সময় রোগীকে দাঁত কামড়ে ধরতে বলা হয়; পেশি শুকিয়ে গেলে মাংসপেশি ফুলে ওঠার বদলে গর্ত তৈরি হয়। কাঁধের ডেল্টয়েড ও পেক্টোরালিস মেজর ক্ষয় হলে স্বাভাবিক গোল কাঁধ পরিবর্তিত হয়ে হাড়ের ৯০ ডিগ্রি চারকোনা কোণ বেরিয়ে আসে।'
            ),
            l(
              'In the distal upper extremity, the dorsal interosseous muscle is tested by opposing the thumb and second digit; a flat or concave surface between the metacarpals indicates advanced somatic sarcopenia [1, 5]. In the lower body, the quadriceps femoris and gastrocnemius muscles are evaluated for loss of definition, visible patellar margins, and flaccid calf compartments when grasped across the muscle belly.',
              'হাতের আঙুলের মেটাকার্পাল হাড়ের মাঝের পেশি পরীক্ষা করে সারকোপেনিয়া বা পেশি ক্ষয় নিরূপণ করা হয় [1, 5]। পায়ের ক্ষেত্রে কোয়াড্রিসেপস ও কাফ মাসল হাত দিয়ে চেপে ধরে পরীক্ষা করা হয়; পেশি শুকিয়ে গেলে হাঁটুর বাটি (Patella) অস্বাভাবিক স্পষ্ট হয়ে ওঠে এবং কাফ পেশি শিথিল ও পাতলা হয়ে যায়।'
            ),
          ],
          bullets: [
            l('Temporalis (Head): Palpated while biting down; hollow depressions indicate loss of temporalis somatic protein.', 'টেম্পোরাল পেশি: দাঁত কামড়ানো অবস্থায় স্পর্শ করা হয়; গর্ত তৈরি হলে প্রোটিন ক্ষয় নিশ্চিত হয়।'),
            l('Clavicle & Acromion (Shoulders): Wasting of pectoralis major and deltoid produces squared bony contours.', 'কলারবোন ও কাঁধ: পেক্টোরালিস ও ডেল্টয়েড শুকিয়ে গেলে কাঁধ চারকোনা রূপ নেয়।'),
            l('First Dorsal Interosseous (Hands): Opposing thumb and index finger reveals sunken metacarpal spaces.', 'হাতের ইন্টারঅসিয়াস: বৃদ্ধাঙ্গুলি ও তর্জনী জোড়া লাগালে পেশি সমতল বা ভেতরে বসা পাওয়া যায়।'),
            l('Quadriceps & Calf (Legs): Palpating anterior thigh and gastrocnemius belly reveals loss of tone and prominent patellar borders.', 'ঊরু ও কাফ: উরুর সামনের অংশ ও পায়ের কাফ স্পর্শ করলে শিথিলতা ও হাঁটুর হাড়ের স্পষ্টতা ধরা পড়ে।'),
          ],
        },
        {
          id: 'sec-fat-loss',
          heading: l('2. Staging Subcutaneous Adipose Depletion: Orbital, Buccal & Triceps', '২. ত্বকের নিচের চর্বি ক্ষয় নিরূপণ: চোখ, গাল ও ট্রাইসেপস'),
          paragraphs: [
            l(
              'Subcutaneous adipose tissue provides an essential metabolic buffer against catabolic substrate demands [1, 2]. The NFPE evaluates three primary fat stores across defined anatomical landmarks:',
              'ত্বকের নিচের চর্বি মেটাবলিক চাপের সময় শক্তি সরবরাহের প্রধান ভাণ্ডার হিসেবে কাজ করে [1, 2]। পরীক্ষায় তিনটি প্রধান চর্বির স্থান নিরূপণ করা হয়:'
            ),
            l(
              'Evaluating these fat reserves alongside somatic muscle compartments provides independent confirmation of whether the patient is experiencing acute hypercatabolic wasting or chronic long-term starvation [1, 3].',
              'পেশির পাশাপাশি এই চর্বির ভাণ্ডার পরীক্ষা করলে রোগী তীব্র প্রদাহজনিত দ্রুত ক্ষয়ে ভুগছেন নাকি দীর্ঘদিনের অনাহারে আছেন তা পরিষ্কারভাবে নিশ্চিত হওয়া যায় [1, 3]।'
            ),
          ],
          bullets: [
            l('Orbital Fat Pads: The clinician palpates above the zygomatic arch and inferior orbital rim. Mild loss presents as slightly darkened, sunken eyes; severe loss produces deep, hollow orbital sockets with prominent orbital ridges.', 'চোখের নিচের ফ্যাট প্যাড: জাইগোম্যাটিক আর্চ ও চোখের নিচের হাড়ের সংযোগস্থল পরীক্ষা করা হয়। মাঝারি ক্ষয়ে চোখ সামান্য ভেতরে ঢুকে যায়; তীব্র ক্ষয়ে গভীর কালো গর্ত তৈরি হয় এবং হাড় স্পষ্ট হয়ে ওঠে।'),
            l('Buccal Fat Pads: Located in the mid-cheek. In severe fat depletion, cheeks hollow out into sunken concave contours, making zygomatic and mandibular bones sharply visible.', 'গালের চর্বি (Buccal fat): গালের মাংস ক্ষয় হলে মুখ ভেতরে দেবে যায় এবং চোয়াল ও গালের হাড় কঙ্কালের মতো ফুটে ওঠে।'),
            l('Triceps Skinfold: The clinician pinches a skinfold at the posterior midpoint of the upper arm, pulling adipose tissue away from the underlying triceps muscle. Normal folds measure ≥ 1.0 cm in men or ≥ 1.5 cm in women; in severe wasting, fingers nearly touch with < 0.5 cm of tissue.', 'ট্রাইসেপস স্কিনফোল্ড: বাহুর পেছনের চামড়া ও চর্বি পেশি থেকে আলাদা করে হাত দিয়ে ধরা হয়। সুস্থ মানুষের ক্ষেত্রে এটি ≥ ১.০ সেমি (পুরুষ) বা ≥ ১.৫ সেমি (নারী) হয়। মারাত্মক অপচয়ে এটি < ০.৫ সেমিতে নেমে আসে এবং দুই আঙুল প্রায় স্পর্শ করে।'),
          ],
        },
        {
          id: 'sec-edema-staging',
          heading: l('3. Fluid Retention Diagnostics & The 1+ to 4+ Edema Scale', '৩. ফ্লুইড রিটেনশন এবং ১+ থেকে ৪+ পিটিং এডিমা স্কেল'),
          paragraphs: [
            l(
              'Peripheral edema staging is essential to avoid misinterpreting scale weight [2, 3]. Firm thumb pressure applied for 5 seconds over the pretibial crest, medial malleolus, or dorsum of the foot is graded using standardized clinical criteria:',
              'ওজনের বিভ্রান্তি এড়াতে পায়ে পানি জমার মাত্রা নিখুঁতভাবে গ্রেডিং করা আবশ্যক [2, 3]। পায়ের টিবিয়া হাড়ের ওপর ৫ সেকেন্ড আঙুল দিয়ে শক্তভাবে চেপে এডিমা গ্রেডিং করা হয়:'
            ),
            l(
              'In bedridden patients, fluid gravitates to dependent regions; examiners must roll the patient to palpate the sacrum, buttocks, and posterior thighs for dependent pitting edema [2].',
              'বিছানায় শুয়ে থাকা রোগীদের ক্ষেত্রে পানি নিচের দিকে নেমে যায়; তাই চিকিৎসকদের রোগীকে কাত করে স্যাক্রাম, নিতম্ব ও ঊরুর পেছনের অংশে হাত দিয়ে চেপে স্যাক্রাল এডিমা পরীক্ষা করতে হয় [2]।'
            ),
          ],
          bullets: [
            l('1+ Mild: 2 mm pit depth; disappears almost instantly upon release.', '১+ মৃদু: প্রায় ২ মিমি গর্ত; আঙুল সরালেই তৎক্ষণাৎ মিলিয়ে যায়।'),
            l('2+ Moderate: 4 mm pit depth; rebounds within 10 to 15 seconds.', '২+ মাঝারি: প্রায় ৪ মিমি গর্ত; ১০ থেকে ১৫ সেকেন্ডে স্বাভাবিক হয়।'),
            l('3+ Severe: 6 mm pit depth; persistent pit for 1 to 2 minutes with visible swelling.', '৩+ তীব্র: প্রায় ৬ মিমি গভীর গর্ত; ১ থেকে ২ মিনিট স্থায়ী হয়, স্পষ্ট ফোলা।'),
            l('4+ Very Severe: 8 mm deep pit; persists for more than 2 to 5 minutes with marked distortion.', '৪+ চরম: প্রায় ৮ মিমি গভীর খাদ; ২ থেকে ৫ মিনিটের বেশি স্থায়ী থাকে, তীব্র ফোলা।'),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced / Research', 'উন্নত / গবেষণা'),
      sections: [
        {
          id: 'sec-micronutrient-signs',
          heading: l('1. Cutaneous, Ocular & Mucosal Manifestations of Micronutrient Deficiencies', '১. ত্বক, চোখ ও মুখের শ্লৈষ্মিক ঝিল্লিতে অনুপুষ্টি ঘাটতির লক্ষণ'),
          paragraphs: [
            l(
              'Epithelial tissues, mucous membranes, and hair follicles exhibit extraordinarily high cellular turnover rates, making them exquisitely sensitive physical sentinels for systemic vitamin and mineral deficiencies [4, 5]. An advanced NFPE systematically surveys these surfaces to identify pathognomonic physical signs:',
              'ত্বক, শ্লৈষ্মিক ঝিল্লি এবং চুলের গোড়ার কোষগুলো অত্যন্ত দ্রুত গতিতে বিভাজিত হয়। তাই শরীরে যেকোনো ভিটামিন বা খনিজের অভাব দেখা দিলে এসব স্থানে সবার আগে শারীরিক লক্ষণ প্রকাশ পায় [4, 5]। উচ্চতর NFPE পরীক্ষায় চিকিৎসকরা প্রতিটি অঙ্গ পুঙ্খানুপুঙ্খভাবে পর্যবেক্ষণ করেন:'
            ),
            l(
              'Recognizing these diagnostic cutaneous and mucosal stigmata allows clinicians to initiate targeted micronutrient repletion protocols long before specialized laboratory assays return from reference centers [4, 5].',
              'ত্বক ও মুখের ভেতরের এই সুনির্দিষ্ট শারীরিক সংকেতগুলো চিনতে পারলে ল্যাবরেটরি রিপোর্টের অপেক্ষায় সময় নষ্ট না করে চিকিৎসক অবিলম্বে জীবনরক্ষাকারী ভিটামিন ও মিনারেল থেরাপি শুরু করতে পারেন [4, 5]।'
            ),
          ],
          bullets: [
            l('Hair Signs: Corkscrew coiling with swan-neck deformity and perifollicular petechiae indicate scurvy (Vitamin C). The "flag sign" (alternating bands of depigmented and normal hair) indicates severe protein malnutrition (Kwashiorkor). Alopecia and easy pluckability indicate zinc, biotin, or essential fatty acid depletion.', 'চুলের লক্ষণ: স্ক্রুর মতো পেঁচানো চুল এবং চুলের গোড়ায় রক্তবিন্দু ভিটামিন সি ঘাটতি (স্কার্ভি) প্রমাণ করে। চুলে ফিতার মতো সাদা-কালো ডোরাকাটা দাগ প্রোটিনের তীব্র অভাব বা কোয়াশিওরকর প্রকাশ করে। সহজে চুল উঠে যাওয়া ও টাক পড়া জিঙ্ক বা বায়োটিনের ঘাটতি নির্দেশ করে।'),
            l('Eye Signs: Keratomalacia, corneal clouding, and foamy triangular Bitot spots on the bulbar conjunctiva are pathognomonic for severe Vitamin A deficiency. Angular palpebritis indicates Riboflavin (Vitamin B2) deficiency.', 'চোখের লক্ষণ: কর্নিয়া ঘোলা হওয়া এবং চোখের সাদা অংশে ফেনার মতো ত্রিভুজাকার বিটট স্পট (Bitot spots) ভিটামিন এ-র মারাত্মক অভাব নির্দেশ করে। চোখের পাতার কোণে ঘা রিবোফ্লাভিন (ভিটামিন বি২) ঘাটতির প্রমাণ।'),
            l('Oral Cavity Signs: Angular cheilosis (painful cracking and erythema at mouth angles) and atrophic glossitis (smooth, beefy red tongue) occur in Riboflavin (B2), Niacin (B3), Pyridoxine (B6), Cobalamin (B12), and Iron deficiency. Spongy, swollen, bleeding gums indicate Vitamin C deficiency.', 'মুখ ও জিহ্বার লক্ষণ: ঠোঁটের দুই কোণে ফেটে যাওয়া (Cheilosis) এবং জিহ্বা মসৃণ লাল মাংসের রূপ নেওয়া (Atrophic Glossitis) ভিটামিন বি-কমপ্লেক্স (বি২, বি৩, বি৬, বি১২) ও আয়রনের অভাব প্রকাশ করে। মাড়ি ফুলে রক্ত পড়া ভিটামিন সি ঘাটতি নিশ্চিত করে।'),
            l('Skin Signs: Symmetrical photosensitive dermatitis with dark hyperpigmented scaling and Casal necklace across the neck is diagnostic for Niacin (B3) deficiency (Pellagra). Follicular hyperkeratosis (sandpaper goosebumps on extensor arms) signals Vitamin A or essential fatty acid deficiency.', 'ত্বকের লক্ষণ: সূর্যের আলো লাগা স্থানে কালচে খসখসে ঘা এবং গলার চারপাশে নেকলেসের মতো ক্ষতচিহ্ন (Casal necklace) ভিটামিন বি৩ বা পেলেগ্রা নির্দেশ করে। বাহুর পেছনে বালির মতো খসখসে গুটি গুটি চামড়া ভিটামিন এ বা প্রয়োজনীয় চর্বির অভাব নির্দেশ করে।'),
            l('Nail Signs: Koilonychia (concave, spoon-shaped nail deformity where a water droplet can sit on the nail plate) is classic for chronic severe Iron Deficiency Anemia. Beau lines (transverse depressions) reflect acute systemic metabolic arrest.', 'নখের লক্ষণ: চামচের মতো ভেতরের দিকে দেবে যাওয়া নখ (Koilonychia) দীর্ঘদিনের মারাত্মক আয়রন ঘাটতির সুস্পষ্ট প্রমাণ। নখের ওপর আড়াআড়ি খাঁজ (Beau lines) শরীরের তীব্র মেটাবলিক শক বা সংক্রমণের ইতিহাস প্রকাশ করে।'),
          ],
        },
        {
          id: 'sec-aspen-consensus-staging',
          heading: l('2. ASPEN/AND Phenotypic Staging Matrix for Adult Malnutrition', '২. ASPEN/AND মানদণ্ডে প্রাপ্তবয়স্কদের অপুষ্টির তীব্রতা নির্ধারণ'),
          paragraphs: [
            l(
              'The ASPEN/AND consensus guidelines establish that a clinical diagnosis of adult malnutrition requires the documentation of at least two out of six standardized diagnostic characteristics [2]:',
              'আন্তর্জাতিক ASPEN/AND ঐকমত্য নির্দেশিকা অনুযায়ী প্রাপ্তবয়স্কদের অপুষ্টি নিশ্চিত করতে নিচের ছয়টি বৈশিষ্ট্যের মধ্যে অন্তত দুটি বৈশিষ্ট্য সুস্পষ্টভাবে প্রমাণ করতে হয় [2]:'
            ),
            l(
              'Because the physical examination directly provides four of these six characteristics (muscle wasting, fat loss, fluid accumulation, and handgrip functional status), mastering the NFPE represents the core clinical competency of modern dietetics [1, 2]. It liberates clinicians from misleading surrogate biomarkers and anchors medical nutrition therapy in tangible bedside evidence.',
              'যেহেতু এই ছয়টি প্রধান বৈশিষ্ট্যের মধ্যে চারটি বৈশিষ্ট্য সরাসরি শারীরিক পরীক্ষা (NFPE) এবং হ্যান্ডগ্রিপ শক্তির মাধ্যমে নির্ণয় করা যায়, তাই আধুনিক পুষ্টিবিজ্ঞানে NFPE আয়ত্ত করা চিকিৎসকের সবচেয়ে বড় যোগ্যতা [1, 2]। এটি বিভ্রান্তিকর রক্তপরীক্ষার ওপর অন্ধ নির্ভরতা থেকে মুক্ত করে রোগীর শয্যাপাশে অপুষ্টির প্রত্যক্ষ প্রমাণ প্রদান করে।'
            ),
          ],
          bullets: [
            l('1. Insufficient energy intake compared to estimated requirements over discrete timeframes.', '১. নির্দিষ্ট সময়ের ব্যবধানে শারীরিক চাহিদার তুলনায় অপর্যাপ্ত খাদ্য ও ক্যালোরি গ্রহণ।'),
            l('2. Documented weight loss percentage over 1 week, 1 month, 3 months, or 6 months.', '২. এক সপ্তাহ, এক মাস, তিন মাস বা ছয় মাসের ব্যবধানে নির্দিষ্ট হারে অনিচ্ছাকৃত ওজন হ্রাস।'),
            l('3. Loss of somatic muscle mass across upper and lower anatomical zones (demonstrated via NFPE).', '৩. শরীরের বিভিন্ন অংশে মাংসপেশির ক্ষয় (NFPE শারীরিক পরীক্ষার মাধ্যমে প্রমাণিত)।'),
            l('4. Loss of subcutaneous adipose fat at orbital, buccal, or triceps sites (demonstrated via NFPE).', '৪. চোখ, গাল বা বাহুর নিচের চর্বির স্তর ক্ষয় (NFPE শারীরিক পরীক্ষার মাধ্যমে প্রমাণিত)।'),
            l('5. Localized or generalized fluid accumulation (peripheral edema, sacral fluid, or ascites).', '৫. শরীরের বিভিন্ন স্থানে পানি বা ফ্লুইড জমা (পায়ে এডিমা, স্যাক্রাল ফ্লুইড বা পেটে অ্যাসাইটিস)।'),
            l('6. Measurably reduced physical functional capacity assessed via handgrip dynamometry.', '৬. হ্যান্ডগ্রিপ ডায়নামোমিটার যন্ত্র দিয়ে পরিমাপকৃত শারীরিক শক্তি ও পেশির কর্মক্ষমতা হ্রাস।'),
          ],
        },
      ],
    },
  },
  chapter: {
    toc: [
      { id: 'toc-1', label: l('1. Systematic Somatic Muscle Palpation', '১. মাংসপেশি পরীক্ষার সুশৃঙ্খল পদ্ধতি'), sectionId: 'sec-muscle-wasting' },
      { id: 'toc-2', label: l('2. Subcutaneous Adipose Depletion', '২. ত্বকের নিচের চর্বি ক্ষয় নিরূপণ'), sectionId: 'sec-fat-loss' },
      { id: 'toc-3', label: l('3. Fluid Retention Diagnostics & Edema Staging', '৩. ফ্লুইড রিটেনশন ও এডিমা গ্রেডিং'), sectionId: 'sec-edema-staging' },
      { id: 'toc-4', label: l('4. Cutaneous Signs of Micronutrient Deficiencies', '৪. অনুপুষ্টি ঘাটতির শারীরিক লক্ষণ'), sectionId: 'sec-micronutrient-signs' },
    ],
    terms: [
      {
        term: l('NFPE', 'এনএফপিই (NFPE)'),
        definition: l(
          'Nutrition-Focused Physical Exam; a structured head-to-toe clinical evaluation performed by clinical nutrition specialists to assess muscle, fat, fluid, and micronutrient status.',
          'পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা; রোগীর মাংসপেশি, চর্বি, তরল এবং ভিটামিন-খনিজের অবস্থা নির্ণয়ে পরিচালিত সুশৃঙ্খল ক্লিনিক্যাল পরীক্ষা।'
        ),
      },
      {
        term: l('Pitting Edema', 'পিটিং এডিমা (Pitting Edema)'),
        definition: l(
          'Indentation of subcutaneous tissue that remains after firm thumb pressure is applied, graded 1+ to 4+ based on depth and rebound time.',
          'চামড়ার নিচে পানি জমার ফলে বৃদ্ধাঙ্গুল দিয়ে চাপ দিলে সৃষ্ট গর্ত, যা গভীরতা ও মিলিয়ে যাওয়ার সময়ের ভিত্তিতে ১+ থেকে ৪+ স্কেলে পরিমাপ করা হয়।'
        ),
      },
      {
        term: l('Koilonychia', 'কয়লোনিকিয়া (Koilonychia)'),
        definition: l(
          'Concave, spoon-shaped deformity of the fingernails classically indicative of chronic, severe iron deficiency anemia.',
          'হাতের নখ চামচের মতো ভেতরের দিকে দেবে যাওয়ার শারীরিক বিকৃতি, যা দীর্ঘমেয়াদী মারাত্মক আয়রনের ঘাটতি নির্দেশ করে।'
        ),
      },
      {
        term: l('Bitot Spots', 'বিটট স্পট (Bitot Spots)'),
        definition: l(
          'Foamy, keratinized triangular plaques on the bulbar conjunctiva of the eye, pathognomonic for severe Vitamin A deficiency.',
          'চোখের সাদা অংশে কেরাটিনযুক্ত ফেনার মতো ত্রিভুজাকার দাগ, যা মারাত্মক ভিটামিন এ ঘাটতির সুনির্দিষ্ট প্রমাণ।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l(
          'Case Study: Comprehensive NFPE Staging in Acute-on-Chronic Pancreatitis with Massive Fluid Overload',
          'বাস্তব কেস স্টাডি: তীব্র প্যানক্রিয়াটাইটিস ও অতিরিক্ত তরল জমার রোগীর পূর্ণাঙ্গ NFPE নিরূপণ'
        ),
        steps: [
          l(
            'Step 1: Patient Presentation. A 49-year-old female with chronic alcoholic pancreatitis is admitted with severe acute flare. Weight is 68 kg, up 6 kg over baseline (fluid resuscitation). Serum albumin = 1.9 g/dL, CRP = 112 mg/L. Scale weight suggests weight gain.',
            'ধাপ ১: রোগীর বিবরণ: দীর্ঘদিনের ক্রনিক প্যানক্রিয়াটাইটিসে আক্রান্ত ৪৯ বছর বয়সী এক নারী তীব্র ব্যথায় হাসপাতালে ভর্তি হন। অতিরিক্ত ফ্লুইড দেওয়ার ফলে বর্তমান ওজন ৬৮ কেজি, যা স্বাভাবিকের চেয়ে ৬ কেজি বেশি। রক্তে অ্যালবুমিন ১.৯ g/dL, সিআরপি ১১২ mg/L। স্কেলের ওজন দেখলে মনে হবে ওজন বৃদ্ধি পেয়েছে।'
          ),
          l(
            'Step 2: Head & Neck NFPE. Bilateral temporalis palpation reveals hollow, scooped-out depressions with teeth clenched. Orbital fat pads are severely sunken with dark hollow circles. Buccal cheeks are hollow.',
            'ধাপ ২: মাথা ও মুখের পরীক্ষা: দাঁত কামড়ে ধরা অবস্থায় টেম্পোরাল পেশিতে গভীর গর্ত পাওয়া যায়। চোখের নিচে চর্বি ক্ষয় হয়ে চোখ কোটরে ঢুকে গেছে এবং গালের হাড় বেরিয়ে গেছে।'
          ),
          l(
            'Step 3: Upper Torso & Hands NFPE. Clavicles protrude like bare hangers; acromion processes form sharp 90-degree squared angles with severe deltoid loss. Palpation of the first dorsal interosseous muscle reveals deep concavity between thumb and index finger. Triceps skinfold measures 3 mm (< 0.5 cm, severe fat loss).',
            'ধাপ ৩: বুক ও হাতের পরীক্ষা: কলারবোন অত্যন্ত দৃশ্যমান; কাঁধের সংযোগস্থল চারকোনা ধারালো রূপ নিয়েছে। হাতের আঙুলের মাঝের পেশিতে গভীর গর্ত। ট্রাইসেপস ফ্যাট মাত্র ৩ মিমি (< ০.৫ সেমি, চরম চর্বি ক্ষয়)।'
          ),
          l(
            'Step 4: Lower Body & Fluid Staging. Quadriceps muscle mass is severely flattened. Thumb pressure over pretibial crest produces 6 mm indentations persisting for 90 seconds, diagnostic of 3+ severe pitting edema extending to the thighs.',
            'ধাপ ৪: পা ও তরল পরীক্ষা: ঊরুর পেশি সম্পূর্ণ চ্যাপ্টা ও শিথিল। পায়ের হাড়ে চাপ দিলে ৬ মিমি গর্ত হয় যা দেড় মিনিট স্থায়ী থাকে, যা উরু পর্যন্ত বিস্তৃত ৩+ মাত্রার তীব্র পিটিং এডিমা প্রমাণ করে।'
          ),
          l(
            'Step 5: Diagnostic Synthesis. The patient exhibits severe somatic muscle wasting (3/3 upper body sites) and severe subcutaneous fat depletion (3/3 sites). Fluid accumulation (3+ edema) accounts for approximately 8 to 10 kg of excess fluid weight. Dry weight is estimated at approximately 58 to 60 kg, confirming severe malnutrition under ASPEN/AND criteria.',
            'ধাপ ৫: সামগ্রিক রোগনির্ণয়: রোগীর শরীরের সব স্থানে মারাত্মক পেশি ক্ষয় এবং চরম চর্বি ক্ষয় প্রমাণিত হয়েছে। পায়ের এডিমা প্রায় ৮-১০ কেজি কৃত্রিম ওজন যোগ করেছে। রোগীর প্রকৃত শুকনো ওজন (Dry weight) হবে প্রায় ৫৮-৬০ কেজি, যা ASPEN/AND মানদণ্ডে তীব্র অপুষ্টি প্রমাণ করে।'
          ),
        ],
        conclusion: l(
          'NFPE successfully bypassed the misleading scale weight and documented incontrovertible physical evidence of severe somatic muscle wasting, enabling the team to initiate high-protein, calorie-controlled enteral nutrition therapy.',
          'NFPE স্কেলের ওজনের বিভ্রান্তি দূর করে রোগীর তীব্র মাংসপেশি ক্ষয়ের অকাট্য শারীরিক প্রমাণ দেয়, যার ফলে পুষ্টি দল অবিলম্বে উচ্চ-প্রোটিনযুক্ত লক্ষ্যভিত্তিক টিউব ফিডিং শুরু করতে সক্ষম হয়।'
        ),
      },
    ],
    checkpoints: [
      {
        question: l(
          'How does an examiner differentiate severe deltoid muscle wasting from normal shoulder anatomy during an NFPE?',
          'শারীরিক পরীক্ষার সময় স্বাভাবিক কাঁধের তুলনায় ডেল্টয়েড পেশির মারাত্মক ক্ষয় কীভাবে চেনা যায়?'
        ),
        answer: l(
          'In a healthy individual, the deltoid muscle provides a smooth, rounded, convex curve over the shoulder joint. In severe wasting, the muscle belly disappears, leaving the acromion process and clavicle exposed, producing a sharp, prominent 90-degree "squared-off" shoulder contour.',
          'সুস্থ ব্যক্তির কাঁধের জয়েন্টের ওপর ডেল্টয়েড পেশি গোলগাল, মাংসল ও মসৃণ রূপ প্রদান করে। কিন্তু তীব্র ক্ষয় হলে পেশি সম্পূর্ণ শুকিয়ে যায় এবং কাঁধের সংযোগস্থলের এক্রোমিয়ন হাড় বেরিয়ে এসে একটি ধারালো ৯০ ডিগ্রি চারকোনা কোণ তৈরি করে।'
        ),
      },
      {
        question: l(
          'Why must a clinician examine the sacrum for edema in bedridden patients rather than relying solely on pedal checks?',
          'বিছানাগত রোগীদের ক্ষেত্রে কেবল পা না দেখে স্যাক্রাম বা পিঠের নিচের অংশ পরীক্ষা করা কেন অপরিহার্য?'
        ),
        answer: l(
          'Edema is dependent and obeys gravity. In ambulatory patients, gravity pulls fluid into the feet and ankles. In supine or bedridden patients, fluid gravitates to the presacral space, buttocks, and posterior thighs. Examining only the feet in a bedridden patient will frequently cause the clinician to miss massive 3+ or 4+ fluid overload.',
          'পানি মহাকর্ষের নিয়মে শরীরের নিচের দিকে জমা হয়। হেঁটে চলা রোগীদের পানি পায়ে ও গোড়ালিতে জমে। কিন্তু সারাদিন শুয়ে থাকা রোগীদের পানি পিঠের নিচে স্যাক্রাম, নিতম্ব ও ঊরুর পেছনের অংশে চলে যায়। তাই শুয়ে থাকা রোগীর কেবল পা পরীক্ষা করলে বিশাল পরিমাণের লুকানো এডিমা চিকিৎসকের চোখ এড়িয়ে যেতে পারে।'
        ),
      },
    ],
  },
}
