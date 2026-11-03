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
    'Hands-on clinical examination methodology for the bedside clinician: systematic inspection and palpation of somatic muscle compartments, subcutaneous adipose layers, peripheral and sacral edema staging, and diagnostic cutaneous signs of micronutrient malnutrition.',
    'চিকিৎসকের হাতে-কলমে শারীরিক পরীক্ষা পদ্ধতি: শরীরের মাংসপেশির বিভিন্ন অংশ, ত্বকের নিচের চর্বি স্তর, পেরিফেরাল ও স্যাক্রাল এডিমা গ্রেডিং এবং অনুপুষ্টি বা ভিটামিন-খনিজ ঘাটতির ত্বকের লক্ষণ নিখুঁতভাবে শনাক্তকরণের বৈজ্ঞানিক কৌশল।'
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
      'Systematically inspect and palpate the primary anatomical sites for somatic muscle wasting (temporalis, clavicle, deltoid, dorsal interosseous, quadriceps, gastrocnemius).',
      'শরীরের প্রধান প্রধান পেশি ক্ষয় পর্যবেক্ষণ স্থানসমূহ (টেম্পোরাল, কলারবোন, কাঁধের ডেল্টয়েড, হাতের ইন্টারঅসিয়াস, ঊরু ও কাফ মাসল) সুশৃঙ্খলভাবে পরীক্ষা করা।'
    ),
    l(
      'Differentiate normal subcutaneous fat stores from mild, moderate, and severe depletion at the orbital pads, buccal cheeks, and triceps skinfolds.',
      'চোখের চারপাশের ফ্যাট প্যাড, গালের চর্বি এবং ট্রাইসেপস স্কিনফোল্ডে স্বাভাবিক চর্বি বনাম মৃদু, মাঝারি ও তীব্র চর্বি ক্ষয় পার্থক্য করা।'
    ),
    l(
      'Accurately stage peripheral and dependent edema on a standard 1+ to 4+ scale and recognize how fluid retention falsely masks severe somatic wasting.',
      'পেরিফেরাল ও নির্ভরীয় এডিমা ১+ থেকে ৪+ স্কেলে নির্ভুলভাবে গ্রেডিং করা এবং তরল জমার কারণে পেশি ক্ষয় লুকিয়ে থাকার ঝুঁকি শনাক্ত করা।'
    ),
    l(
      'Identify hallmark cutaneous, mucosal, ocular, and ungual signs of specific micronutrient deficiencies (pellagra, scurvy, Bitot spots, cheilosis, koilonychia).',
      'ভিটামিন ও খনিজের অভাবজনিত শারীরিক লক্ষণসমূহ (পেলেগ্রা, স্কার্ভি, ভিটামিন এ এর বিটট স্পট, ঠোঁটের কোণে ঘা বা কাইলোসিস, চামচ আকৃতির নখ) চিনে নেওয়া।'
    ),
    l(
      'Apply ASPEN/AND consensus diagnostic thresholds to classify adult malnutrition severity using physical phenotypic findings.',
      'শারীরিক পরীক্ষার লক্ষণের ভিত্তিতে প্রাপ্তবয়স্কদের অপুষ্টির তীব্রতা (মৃদু, মাঝারি বা মারাত্মক) নির্ধারণে ASPEN/AND নির্দেশিকা প্রয়োগ করা।'
    ),
  ],
  diagram: {
    accessibleDescription: l(
      'A full-body anatomical examination schematic detailing the head-to-toe clinical assessment sequence: starting with temporal and orbital inspection at the head, moving to clavicular, scapular, and interosseous palpation in the upper torso, progressing to quadriceps and patellar evaluation in the lower extremities, and concluding with pretibial and sacral pitting edema staging.',
      'মাথা থেকে পা পর্যন্ত ধারাবাহিক শারীরিক পরীক্ষার শারীরবৃত্তীয় চিত্র: মাথায় টেম্পোরাল ও চোখের চারপাশের ফ্যাট পরীক্ষা দিয়ে শুরু হয়ে কলারবোন, কাঁধের স্ক্যাপুলা ও হাতের পেশি পরীক্ষা, নিচের দিকে ঊরু ও হাঁটুর পেশি নিরূপণ এবং সর্বশেষে পায়ে ও স্যাক্রামে আঙুল চেপে এডিমা নির্ধারণ।'
    ),
    steps: [
      l(
        'Step 1: Craniofacial Assessment. Ask the patient to clench their teeth while palpating the temporalis muscle for hollowing. Inspect orbital fat pads beneath the eyes and buccal fat pads on the cheeks.',
        'ধাপ ১: মুখের পরীক্ষা: রোগীকে দাঁত কামড়ে ধরতে বলে দুই পাশের টেম্পোরাল পেশি স্পর্শ করে গর্ত হওয়া পরীক্ষা করুন। চোখের নিচে ও গালে চর্বি ক্ষয় পর্যবেক্ষণ করুন।'
      ),
      l(
        'Step 2: Shoulder Girdle & Clavicular Evaluation. Inspect the clavicle (collarbone) for excessive protrusion. Palpate the acromion process: square, bony shoulders indicate deltoid wasting, whereas rounded contours indicate preserved muscle.',
        'ধাপ ২: কলারবোন ও কাঁধের পরীক্ষা: কলারবোন কতটা বেরিয়ে আছে দেখুন। কাঁধের সংযোগস্থলে স্পর্শ করুন: কাঁধ চারকোনা ও হাড় দৃশ্যমান হলে ডেল্টয়েড পেশি ক্ষয় নিশ্চিত হয়।'
      ),
      l(
        'Step 3: Upper Extremity & Hand Examination. Have the patient touch their thumb to their index finger, creating the "OK" sign. Palpate the first dorsal interosseous muscle: a hollow depression indicates advanced somatic muscle wasting.',
        'ধাপ ৩: হাত ও আঙুলের পরীক্ষা: রোগীকে বৃদ্ধাঙ্গুল ও তর্জনী ছুঁয়ে "OK" চিহ্ন তৈরি করতে বলুন। দুই আঙুলের মাঝের ইন্টারঅসিয়াস পেশি স্পর্শ করুন: সেখানে গর্ত থাকলে তীব্র পেশি ক্ষয় নির্দেশ করে।'
      ),
      l(
        'Step 4: Lower Extremity & Edema Staging. Grasp the quadriceps and calf bulk. Press firmly with a thumb over the pretibial crest and dorsum of the foot for 5 seconds to stage pitting edema (+1 to +4). Check the sacrum if bedridden.',
        'ধাপ ৪: পা ও এডিমা নির্ধারণ: ঊরু ও কাফের পেশির ঘনত্ব অনুভব করুন। পায়ের টিবিয়া হাড়ের ওপর বৃদ্ধাঙ্গুল দিয়ে ৫ সেকেন্ড চেপে ধরে এডিমা (+১ থেকে +৪) গ্রেডিং করুন। শোয়া রোগীর স্যাক্রাম পরীক্ষা করুন।'
      ),
    ],
  },
  assessment: {
    question: l(
      'During an NFPE of a 68-year-old bedridden male with severe end-stage renal disease, you observe prominent protruding clavicles, squared acromial shoulder processes, a deep depression between the thumb and index finger (interosseous wasting), and +3 bilateral lower extremity edema extending to mid-calf. His body weight has remained unchanged over the last 3 months. How should the clinical team interpret these physical findings?',
      'শেষ ধাপের কিডনি রোগে আক্রান্ত ৬৮ বছর বয়সী এক বিছানাগত রোগীর শারীরিক পরীক্ষায় কলারবোন অস্বাভাবিক দৃশ্যমান, কাঁধের চারকোনা হাড় স্পষ্ট, হাতের আঙুলের মাঝে গভীর গর্ত (ইন্টারঅসিয়াস পেশি ক্ষয়) এবং হাঁটু পর্যন্ত +৩ মাত্রার এডিমা দেখা গেল। অথচ গত ৩ মাসে তার ওজনে কোনো পরিবর্তন হয়নি। পুষ্টি দলের এই শারীরিক লক্ষণগুলো কীভাবে ব্যাখ্যা করা উচিত?'
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
        'পায়ের +৩ এডিমা কেবল অতিরিক্ত লবণ খাওয়ার ফল এবং রোগীর প্রোটিন স্তর স্বাভাবিক রয়েছে।'
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
          heading: l('1. What Is a Nutrition-Focused Physical Exam?', '১. পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) কী?'),
          paragraphs: [
            l(
              'A Nutrition-Focused Physical Exam (NFPE) is a structured, hands-on clinical evaluation where a trained clinician uses sight and touch to assess a patient from head to toe [1]. While a physician’s physical exam listens to heart murmurs or lung sounds, an NFPE specifically searches for signs of nutritional depletion: lost muscle, burned fat stores, excess fluid, and vitamin deficiencies.',
              'পুষ্টি-কেন্দ্রিক শারীরিক পরীক্ষা (NFPE) হলো এমন একটি চিকিৎসাগত পদ্ধতি যেখানে চিকিৎসক হাত দিয়ে স্পর্শ করে এবং চোখ দিয়ে পর্যবেক্ষণ করে মাথা থেকে পা পর্যন্ত রোগীর পুষ্টি অবস্থা নির্ণয় করেন [1]। সাধারণ মেডিকেল পরীক্ষায় স্টেথোস্কোপ দিয়ে হার্ট বা ফুসফুসের শব্দ শোনার ওপর জোর দেওয়া হলেও, NFPE সরাসরি পুষ্টি ঘাটতি খুঁজে বের করে—যেমন পেশি কতটা ক্ষয় হয়েছে, চর্বি কমে গেছে কি না, শরীরে পানি জমেছে কি না এবং ভিটামিনের কোনো অভাব আছে কি না।'
            ),
            l(
              'Relying solely on bathroom scales or BMI is notoriously dangerous in hospital settings [2]. A patient with severe heart failure or kidney disease may lose 10 kilograms of skeletal muscle while accumulating 10 kilograms of retained water. Their total body weight appears unchanged, but their metabolic body is starving. NFPE reveals the true physical reality beneath the scale.',
              'হাসপাতালে কেবল স্কেলে ওজন বা বিএমআই মেপে পুষ্টি বিচার করা অত্যন্ত ঝুঁকিপূর্ণ [2]। কিডনি বা হার্টের রোগী ১০ কেজি মাংসপেশি হারিয়ে ফেলতে পারেন, অথচ শরীরে ১০ কেজি পানি জমে মোট ওজন একই থাকতে পারে। স্কেলে রোগী স্বাভাবিক মনে হলেও কোষের ভেতরে মারাত্মক অপুষ্টি থাকে। NFPE চিকিৎসকের সামনে এই লুকানো সত্য উন্মোচন করে।'
            ),
          ],
        },
        {
          id: 'sec-muscle-sites',
          heading: l('2. Key Muscle Groups Checked During the Exam', '২. শারীরিক পরীক্ষায় যে প্রধান পেশিগুলো দেখা হয়'),
          paragraphs: [
            l(
              'Clinicians check specific muscle groups where wasting appears early and prominently [1, 3]:',
              'চিকিৎসক শরীরের এমন নির্দিষ্ট কিছু পেশি পর্যবেক্ষণ করেন যেখানে ক্ষয় খুব দ্রুত এবং স্পষ্টভাবে ধরা পড়ে [1, 3]:'
            ),
            l(
              '• **Temples (Temporalis Muscle):** Located on both sides of the forehead. When healthy, this muscle is flat or slightly curved outward. In malnutrition, it forms a hollow, scooped-out depression.\n• **Shoulders (Deltoid Muscle):** Healthy shoulders have a rounded, smooth muscular curve. In severe wasting, the acromion bone sticks out, creating a sharp "squared-off" shoulder.\n• **Collarbone (Clavicle):** In well-nourished people, the collarbone is gently visible with muscle covering its edges. In malnutrition, the clavicle protrudes prominently like a bare coat hanger.\n• **Hands (Interosseous Muscle):** When you pinch your thumb and forefinger together, the muscle between them should bulge upward. If it forms a deep bowl or crater, severe muscle loss is present.',
              '• **টেম্পল বা কপাল (Temporalis):** কপালের দুই পাশে হাত দিয়ে দেখা হয়। সুস্থ মানুষের এখানে টানটান মাংস থাকে; কিন্তু অপুষ্টিতে গভীর গর্ত বা খাদের মতো তৈরি হয়।\n• **কাঁধ (Deltoid):** স্বাভাবিক কাঁধ গোলগাল ও মাংসল থাকে। তীব্র পেশি ক্ষয় হলে কাঁধের সংযোগস্থলের হাড় বেরিয়ে কাঁধ চারকোনা হয়ে যায়।\n• **কলারবোন (Clavicle):** সুস্থ দেহে কলারবোনের ওপর মাংসের আবরণ থাকে। কিন্তু পেশি শুকিয়ে গেলে কলারবোন অস্বাভাবিকভাবে খাঁচা বা হ্যাঙ্গারের মতো বেরিয়ে আসে।\n• **হাতের তালুর ওপরের পেশি (Interosseous):** বৃদ্ধাঙ্গুল ও তর্জনী একসাথে জোড়া লাগালে মাঝের পেশিটি ফুলে ওঠে। যদি সেখানে গভীর গর্ত দেখা যায়, তবে নিশ্চিতভাবেই তীব্র পেশি ক্ষয় হয়েছে।'
            ),
          ],
        },
        {
          id: 'sec-fat-pads-edema',
          heading: l('3. Fat Stores and Water Retention (Edema)', '৩. চর্বির স্তর এবং শরীরে পানি জমা (এডিমা)'),
          paragraphs: [
            l(
              'The clinician also examines subcutaneous fat pads beneath the eyes (orbital fat) and on the back of the upper arm (triceps) [1]. When fat stores are exhausted, the eyes appear sunken with dark hollow circles, and pinching the triceps reveals paper-thin skin with no protective fat cushion.',
              'চিকিৎসক চোখের নিচের চর্বি (Orbital fat) এবং বাহুর পেছনের চর্বি (Triceps) হাত দিয়ে পরীক্ষা করেন [1]। চর্বির স্তর শুকিয়ে গেলে চোখ ভেতরে ঢুকে যায়, চোখের নিচে কালো গর্ত তৈরি হয় এবং বাহুর চামড়া পাতলা কাগজের মতো মনে হয়।'
            ),
            l(
              'Finally, the clinician presses a thumb firmly over the lower leg bone (tibia) for 5 seconds to test for **pitting edema** [2]. If the thumb leaves a pit or depression that takes seconds or minutes to bounce back, fluid retention is confirmed. This fluid must be mentally subtracted when estimating the patient’s true nutritional weight.',
              'সর্বশেষে চিকিৎসক পায়ের নলার হাড়ের (টিবিয়া) ওপর ৫ সেকেন্ড বৃদ্ধাঙ্গুল দিয়ে শক্তভাবে চাপ দেন, যাকে **পিটিং এডিমা (Pitting Edema)** পরীক্ষা বলা হয় [2]। চাপ ছাড়ার পর যদি গর্ত তৈরি হয় এবং তা ধীরে ধীরে ভরাট হয়, তবে শরীরে পানি জমার প্রমাণ মেলে। রোগীর সঠিক পুষ্টি চাহিদা নির্ণয়ে এই অতিরিক্ত পানির ওজন বাদ দিয়ে হিসাব করতে হয়।'
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
              'The Nutrition-Focused Physical Exam disassembles somatic musculature into eight standardized anatomical zones evaluated via bilaterally symmetrical inspection and palpation [1, 3]. In the temporalis fossa, the clinician asks the patient to clench their teeth; loss of muscle bulk results in concavity rather than a full muscular bulge. In the shoulder girdle, the examiner traces the acromion process: wasting of the pectoralis major and deltoid transforms the rounded glenohumeral contour into a prominent 90-degree bony angle.',
              'শারীরিক পরীক্ষায় শরীরের মাংসপেশিকে আটটি প্রমিত স্থানে ভাগ করে দুই পাশের তুলনামূলক পরীক্ষা করা হয় [1, 3]। কপালে টেম্পোরাল পেশি পরীক্ষার সময় রোগীকে দাঁত কামড়ে ধরতে বলা হয়; পেশি শুকিয়ে গেলে মাংসপেশি ফুলে ওঠার বদলে গর্ত তৈরি হয়। কাঁধের ডেল্টয়েড ও পেক্টোরালিস মেজর ক্ষয় হলে স্বাভাবিক গোল কাঁধ পরিবর্তিত হয়ে হাড়ের ৯০ ডিগ্রি চারকোনা কোণ বেরিয়ে আসে।'
            ),
            l(
              'In the distal upper extremity, the dorsal interosseous muscle is tested by opposing the thumb and second digit; a flat or concave surface between the metacarpals indicates advanced somatic sarcopenia [1, 5]. In the lower body, the quadriceps femoris and gastrocnemius muscles are evaluated for loss of definition, visible patellar margins, and flaccid calf compartments when grasped across the muscle belly.',
              'হাতের আঙুলের মেটাকার্পাল হাড়ের মাঝের পেশি পরীক্ষা করে সারকোপেনিয়া বা পেশি ক্ষয় নিরূপণ করা হয় [1, 5]। পায়ের ক্ষেত্রে কোয়াড্রিসেপস ও কাফ মাসল হাত দিয়ে চেপে ধরে পরীক্ষা করা হয়; পেশি শুকিয়ে গেলে হাঁটুর বাটি (Patella) অস্বাভাবিক স্পষ্ট হয়ে ওঠে এবং কাফ পেশি শিথিল ও পাতলা হয়ে যায়।'
            ),
          ],
        },
        {
          id: 'sec-fat-loss',
          heading: l('2. Staging Subcutaneous Adipose Depletion: Orbital, Buccal & Triceps', '২. ত্বকের নিচের চর্বি ক্ষয় নিরূপণ: চোখ, গাল ও ট্রাইসেপস'),
          paragraphs: [
            l(
              'Subcutaneous adipose tissue provides an essential metabolic buffer against catabolic substrate demands [1, 2]. The NFPE evaluates three primary fat stores:',
              'ত্বকের নিচের চর্বি মেটাবলিক চাপের সময় শক্তি সরবরাহের প্রধান ভাণ্ডার হিসেবে কাজ করে [1, 2]। পরীক্ষায় তিনটি প্রধান চর্বির স্থান নিরূপণ করা হয়:'
            ),
            l(
              '1. **Orbital Fat Pads:** The clinician palpates above the zygomatic arch and inferior orbital rim. Mild-to-moderate loss presents as slightly darkened, sunken eyes; severe loss produces deep, hollow orbital sockets with prominent orbital ridges.\n2. **Buccal Fat Pads:** In the mid-cheek, severe fat depletion presents as hollow, sunken cheeks with prominent zygomatic bones and mandibular angles.\n3. **Triceps Fat Fold:** The clinician pinches a skinfold at the posterior midpoint of the upper arm, pulling the adipose tissue away from the underlying triceps muscle. Under normal nutrition, the fold measures $\\ge 1.0\\text{ cm}$ (men) or $\\ge 1.5\\text{ cm}$ (women). In severe wasting, fingers nearly touch with $<0.5\\text{ cm}$ of tissue.',
              '১. **চোখের নিচের ফ্যাট প্যাড:** জাইগোম্যাটিক আর্চ ও চোখের নিচের হাড়ের সংযোগস্থল পরীক্ষা করা হয়। মাঝারি ক্ষয়ে চোখ সামান্য ভেতরে ঢুকে যায়; তীব্র ক্ষয়ে গভীর কালো গর্ত তৈরি হয় এবং হাড় স্পষ্ট হয়ে ওঠে।\n২. **গালের চর্বি (Buccal fat):** গালের মাংস ক্ষয় হলে মুখ ভেতরে দেবে যায় এবং চোয়াল ও গালের হাড় কঙ্কালের মতো ফুটে ওঠে।\n৩. **ট্রাইসেপস স্কিনফোল্ড:** বাহুর পেছনের চামড়া ও চর্বি পেশি থেকে আলাদা করে হাত দিয়ে ধরা হয়। সুস্থ মানুষের ক্ষেত্রে এটি $\\ge ১.০\\text{ সেমি}$ (পুরুষ) বা $\\ge ১.৫\\text{ সেমি}$ (নারী) হয়। মারাত্মক অপচয়ে এটি $<০.৫\\text{ সেমি}$-তে নেমে আসে এবং দুই আঙুল প্রায় স্পর্শ করে।'
            ),
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
              '$$\\begin{aligned} &\\textbf{1+ (Mild):} \\quad 2\\text{ mm pit depth; rapid rebound within seconds.} \\\\ &\\textbf{2+ (Moderate):} \\quad 4\\text{ mm pit depth; rebounds within } 10\\text{--}15\\text{ seconds.} \\\\ &\\textbf{3+ (Severe):} \\quad 6\\text{ mm pit depth; persistent pit for } 1\\text{--}2\\text{ minutes; gross swelling.} \\\\ &\\textbf{4+ (Very Severe):} \\quad 8\\text{ mm deep pit; persists for } >2\\text{--}5\\text{ minutes; severe distortion.} \\end{aligned}$$',
              '$$\\begin{aligned} &\\textbf{১+ (মৃদু):} \\quad ২\\text{ মিমি গর্ত; কয়েক সেকেন্ডের মধ্যেই মিলিয়ে যায়।} \\\\ &\\textbf{২+ (মাঝারি):} \\quad ৪\\text{ মিমি গর্ত; মিলিয়ে যেতে } ১০\\text{--}১৫\\text{ সেকেন্ড সময় নেয়।} \\\\ &\\textbf{৩+ (তীব্র):} \\quad ৬\\text{ মিমি গভীর গর্ত; } ১\\text{--}২\\text{ মিনিট স্থায়ী হয়, স্পষ্ট ফোলা।} \\\\ &\\textbf{৪+ (চরম):} \\quad ৮\\text{ মিমি গভীর খাদ; } >২\\text{--}৫\\text{ মিনিট পর্যন্ত স্থায়ী থাকে, পা বিকৃত ফোলা।} \\end{aligned}$$'
            ),
            l(
              'In bedridden patients, fluid gravitates to dependent regions; examiners must roll the patient to palpate the sacrum, buttocks, and posterior thighs for dependent pitting edema [2].',
              'বিছানায় শুয়ে থাকা রোগীদের ক্ষেত্রে পানি নিচের দিকে নেমে যায়; তাই চিকিৎসকদের রোগীকে কাত করে স্যাক্রাম, নিতম্ব ও ঊরুর পেছনের অংশে হাত দিয়ে চেপে স্যাক্রাল এডিমা পরীক্ষা করতে হয় [2]।'
            ),
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
              'The epithelial tissues and hair follicles have rapid cellular turnover rates, making them exquisitely sensitive physical sentinels for micronutrient deficiencies [4, 5]. An advanced NFPE systematically surveys these surfaces:',
              'ত্বক, চুলের গোড়া এবং মুখের ভেতরের কোষগুলো খুব দ্রুত বিভাজিত হয়, যার ফলে ভিটামিন ও খনিজের ঘাটতি হলে এসব স্থানে সবার আগে দৃশ্যমান লক্ষণ প্রকাশ পায় [4, 5]। উচ্চতর NFPE পরীক্ষায় এসব লক্ষণ পুঙ্খানুপুঙ্খভাবে দেখা হয়:'
            ),
            l(
              '• **Hair:** Corkscrew coiling with swan-neck deformity and perifollicular hemorrhage indicate scurvy (**Vitamin C**). The "flag sign" (alternating light and dark bands) signals protein deficiency (**Kwashiorkor**). Alopecia and easy pluckability indicate **Zinc** and **Biotin** depletion.\n• **Eyes:** Keratomalacia, corneal clouding, and Foamy triangular Bitot’s spots on the bulbar conjunctiva are pathognomonic for **Vitamin A** deficiency. Angular palpebritis indicates **Riboflavin ($B_2$)** deficiency.\n• **Oral Cavity:** Angular cheilosis (cracks at mouth corners) and atrophic glossitis (smooth, beefy red tongue) occur in **Riboflavin ($B_2$)**, **Niacin ($B_3$)**, **Pyridoxine ($B_6$)**, **Cobalamin ($B_{12}$)**, and **Iron** deficiency. Spongy, bleeding gums indicate **Vitamin C** deficiency.\n• **Skin:** Pellagrous symmetrical photosensitive dermatitis with hyperpigmented scaling (Casal’s necklace) is classic for **Niacin ($B_3$)** deficiency. Follicular hyperkeratosis (goosebump-like papules on extensor arms) signals **Vitamin A** or essential fatty acid deficiency. Petechiae and ecchymoses indicate **Vitamin C** and **Vitamin K** deficiency.\n• **Nails:** Koilonychia (concave, spoon-shaped nail plates) is diagnostic for chronic, severe **Iron Deficiency Anemia**.',
              '• **চুল:** স্ক্রু-এর মতো পেঁচানো চুল এবং চুলের গোড়ায় রক্তক্ষরণ **ভিটামিন সি** (স্কার্ভি) নির্দেশ করে। চুলে ফিতার মতো সাদা-কালো দাগ ("ফ্ল্যাগ সাইন") প্রোটিন ঘাটতি বা **কোয়াশিওরকর** প্রকাশ করে। সহজে চুল উঠে যাওয়া ও চুল পড়া **জিঙ্ক** ও **বায়োটিন** ঘাটতির লক্ষণ।\n• **চোখ:** কর্নিয়া ঘোলা হওয়া এবং চোখের সাদা অংশে ত্রিভুজাকার ফেনার মতো দাগ (বিটট স্পট) **ভিটামিন এ** ঘাটতির নিশ্চিত প্রমাণ। চোখের কোণে ঘা **রিবোফ্লাভিন ($B_2$)** ঘাটতি নির্দেশ করে।\n• **মুখ ও ঠোঁট:** ঠোঁটের দুই কোণে ফেটে যাওয়া (Cheilosis) এবং জিহ্বা মসৃণ লাল মাংসের মতো ফুলে যাওয়া (Glossitis) হলো **ভিটামিন $B_2$, $B_3$, $B_6$, $B_{12}$** ও **আয়রন** ঘাটতির লক্ষণ। মাড়ি ফুলে রক্ত পড়া **ভিটামিন সি** ঘাটতির প্রমাণ।\n• **ত্বক:** সূর্যের আলোতে ত্বকে কালচে খসখসে ঘা ও গলার চারপাশে নেকলেসের মতো ক্ষত (Casal\'s necklace) **নিয়াসিন ($B_3$)** বা পেলেগ্রা নির্দেশ করে। বাহুর পেছনে গুটি গুটি খসখসে চামড়া **ভিটামিন এ** ও প্রয়োজনীয় ফ্যাটি অ্যাসিডের অভাব নির্দেশ করে। ত্বকের নিচে রক্তের ফোঁটা **ভিটামিন সি** ও **ভিটামিন কে** ঘাটতি প্রকাশ করে।\n• **নখ:** চামচের মতো ভেতরের দিকে দেবে যাওয়া নখ (Koilonychia) দীর্ঘমেয়াদী মারাত্মক **আয়রন ঘাটতিজনিত রক্তাল্পতার** সুনির্দিষ্ট শারীরিক লক্ষণ।'
            ),
          ],
        },
        {
          id: 'sec-aspen-consensus-staging',
          heading: l('2. ASPEN/AND Phenotypic Staging Matrix for Adult Malnutrition', '২. ASPEN/AND মানদণ্ডে প্রাপ্তবয়স্কদের অপুষ্টির তীব্রতা নির্ধারণ'),
          paragraphs: [
            l(
              'The ASPEN/AND consensus guidelines establish that a clinical diagnosis of adult malnutrition requires the documentation of at least **two out of six diagnostic characteristics** [2]:',
              'আন্তর্জাতিক ASPEN/AND ঐকমত্য নির্দেশিকা অনুযায়ী প্রাপ্তবয়স্কদের অপুষ্টি নিশ্চিত করতে নিচের ছয়টি বৈশিষ্ট্যের মধ্যে অন্তত **দুটি বৈশিষ্ট্য** শারীরিক পরীক্ষায় প্রমাণ করতে হবে [2]:'
            ),
            l(
              '1. Insufficient energy intake.\n2. Weight loss percentage over time.\n3. Loss of somatic muscle mass (demonstrated via NFPE).\n4. Loss of subcutaneous fat (demonstrated via NFPE).\n5. Localized or generalized fluid accumulation (edema/ascites).\n6. Measurably reduced functional status (assessed via handgrip dynamometry).',
              '১. অপর্যাপ্ত খাদ্য ও ক্যালোরি গ্রহণ।\n২. সময়ের সাথে নির্দিষ্ট হারে অনিচ্ছাকৃত ওজন হ্রাস।\n৩. মাংসপেশির ক্ষয় (NFPE দ্বারা প্রমাণিত)।\n৪. ত্বকের নিচের চর্বি ক্ষয় (NFPE দ্বারা প্রমাণিত)।\n৫. শরীরে তরল বা পানি জমা (এডিমা/অ্যাসাইটিস)।\n৬. কার্যক্ষমতা হ্রাস (হ্যান্ডগ্রিপ ডায়নামোমিটার দ্বারা পরিমাপকৃত পেশির শক্তি)।'
            ),
            l(
              'Because the physical examination directly provides four of these six characteristics, mastering the NFPE is the quintessential core competency of modern clinical dietetics [1, 2]. It frees the clinician from reliance on flawed surrogate markers and provides unambiguous bedside evidence of nutritional health.',
              'যেহেতু এই ছয়টি প্রধান বৈশিষ্ট্যের মধ্যে চারটি বৈশিষ্ট্য সরাসরি শারীরিক পরীক্ষার (NFPE) মাধ্যমে নির্ণয় করা যায়, তাই আধুনিক ক্লিনিক্যাল ডায়েটেটিক্সে NFPE আয়ত্ত করা একটি মৌলিক দক্ষতা [1, 2]। এটি চিকিৎসককে ভুল পরীক্ষাগার নির্দেশকের ওপর নির্ভরশীলতা থেকে মুক্ত করে রোগীর শয্যাপাশে অপুষ্টির প্রত্যক্ষ বৈজ্ঞানিক প্রমাণ সরবরাহ করে।'
            ),
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
          'Nutrition-Focused Physical Exam; a head-to-toe examination performed by clinical nutrition specialists to assess muscle, fat, fluid, and micronutrient status.',
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
            'Step 3: Upper Torso & Hands NFPE. Clavicles protrude like bare hangers; acromion processes form sharp 90-degree squared angles with severe deltoid loss. Palpation of the first dorsal interosseous muscle reveals deep concavity between thumb and index finger. Triceps skinfold measures 3 mm (<0.5 cm, severe fat loss).',
            'ধাপ ৩: বুক ও হাতের পরীক্ষা: কলারবোন অত্যন্ত দৃশ্যমান; কাঁধের সংযোগস্থল চারকোনা ধারালো রূপ নিয়েছে। হাতের আঙুলের মাঝের পেশিতে গভীর গর্ত। ট্রাইসেপস ফ্যাট মাত্র ৩ মিমি (চরম চর্বি ক্ষয়)।'
          ),
          l(
            'Step 4: Lower Body & Fluid Staging. Quadriceps muscle mass is severely flattened. Thumb pressure over pretibial crest produces 6 mm indentations persisting for 90 seconds, diagnostic of +3 severe pitting edema extending to the thighs.',
            'ধাপ ৪: পা ও তরল পরীক্ষা: ঊরুর পেশি সম্পূর্ণ চ্যাপ্টা ও শিথিল। পায়ের হাড়ে চাপ দিলে ৬ মিমি গর্ত হয় যা দেড় মিনিট স্থায়ী থাকে, যা উরু পর্যন্ত বিস্তৃত +৩ মাত্রার তীব্র পিটিং এডিমা প্রমাণ করে।'
          ),
          l(
            'Step 5: Diagnostic Synthesis. The patient exhibits severe somatic muscle wasting (3/3 upper body sites) and severe subcutaneous fat depletion (3/3 sites). Fluid accumulation (+3 edema) accounts for ~8–10 kg of excess fluid weight. Dry weight is estimated at ~58–60 kg, confirming severe malnutrition under ASPEN/AND criteria.',
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
          'Edema is dependent and obeys gravity. In ambulatory patients, gravity pulls fluid into the feet and ankles. In supine or bedridden patients, fluid gravitates to the presacral space, buttocks, and posterior thighs. Examining only the feet in a bedridden patient will frequently cause the clinician to miss massive +3 or +4 fluid overload.',
          'পানি মহাকর্ষের নিয়মে শরীরের নিচের দিকে জমা হয়। হেঁটে চলা রোগীদের পানি পায়ে ও গোড়ালিতে জমে। কিন্তু সারাদিন শুয়ে থাকা রোগীদের পানি পিঠের নিচে স্যাক্রাম, নিতম্ব ও ঊরুর পেছনের অংশে চলে যায়। তাই শুয়ে থাকা রোগীর কেবল পা পরীক্ষা করলে বিশাল পরিমাণের লুকানো এডিমা চিকিৎসকের চোখ এড়িয়ে যেতে পারে।'
        ),
      },
    ],
  },
}

