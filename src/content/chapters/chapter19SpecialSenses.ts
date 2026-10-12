import type { LessonTopic, Localized } from '../lessonSchema'

const l = (en: string, bn: string): Localized => ({ en, bn })

const refs = [
  {
    id: 'openstax-ap2e-ch15',
    authors: 'J. G. Betts, K. A. Young, J. A. Wise, E. Johnson, B. Poe, D. H. Kruse, O. Korol, J. E. Johnson, M. Womble, P. DeSaix',
    title: 'Anatomy and Physiology 2e, Chapter 15: The Special Senses',
    organization: 'OpenStax, Rice University',
    year: 2022,
    url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/15-introduction',
  },
  {
    id: 'kandel-neuroscience-6e',
    authors: 'E. R. Kandel, J. D. Koester, S. H. Mack, S. A. Siegelbaum',
    title: 'Principles of Neural Science, 6th edition',
    organization: 'McGraw-Hill Education',
    year: 2021,
    url: 'https://accessmedicine.mhmedical.com/book.aspx?bookid=2965',
  },
  {
    id: 'moore-anatomy-9e',
    authors: 'A. F. Dalley, A. M. R. Agur',
    title: "Moore's Clinically Oriented Anatomy, 9th edition",
    organization: 'Wolters Kluwer',
    year: 2023,
    url: 'https://shop.lww.com/Moore-s-Clinically-Oriented-Anatomy/p/9781975154066',
  },
  {
    id: 'grays-anatomy-42e',
    authors: 'S. Standring',
    title: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd edition",
    organization: 'Elsevier',
    year: 2020,
    url: 'https://www.elsevier.com/books/grays-anatomy/standring/978-0-7020-7705-0',
  },
  {
    id: 'guyton-hall-14e',
    authors: 'J. E. Hall, M. E. Hall',
    title: 'Guyton and Hall Textbook of Medical Physiology, 14th edition',
    organization: 'Elsevier Health Sciences',
    year: 2020,
    url: 'https://www.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-323-59712-8',
  },
]

export const chapter19SpecialSensesLesson: LessonTopic = {
  id: 'topic.anatomy.special-senses',
  slug: 'special-senses',
  version: 1,
  updatedAt: '2026-10-12',
  title: l('19 · Special Senses', '১৯ · বিশেষ ইন্দ্রিয়'),
  summary: l(
    'A comprehensive exploration of the specialized sensory apparatus of the human body: ocular tunics and visual pathways, cochlear micromechanics and the organ of Corti, vestibular otoliths and semicircular balance, olfactory neuroepithelium, gustatory papillae, and clinical neuro-sensory emergencies.',
    'মানবদেহের বিশেষ সংবেদী অঙ্গসমূহের বিশদ ও ক্লিনিক্যাল শারীরস্থানিক অধ্যয়ন: চোখের তিন স্তর ও দৃষ্টির স্নায়ুপথ, কানের ককলিয়ার বলবিদ্যা ও কর্টি অঙ্গ, ভেস্টিবুলার ভারসাম্য ব্যবস্থা, ঘ্রাণ এপিথেলিয়াম, স্বাদকুঁড়ি এবং শ্রবণ-দৃষ্টির জরুরি রোগব্যাধি।'
  ),
  subject: 'anatomy',
  evidenceClass: 'established-textbook-synthesis',
  reviewStatus: 'source-checked-expert-review-pending',
  lastReviewed: '2026-10-12',
  objectives: [
    l(
      'Contrast the three concentric ocular tunics (fibrous, vascular uvea, retina), map the refractive media, and trace the retino-geniculo-calcarine visual pathway.',
      'চোখের তিনটি সমকেন্দ্রিক স্তর (ফাইব্রাস, ভাস্কুলার ইউভিয়া, রেটিনা) তুলনা করা, আলো প্রতিসরণকারী মাধ্যমগুলো চিহ্নিত করা এবং রেটিনা থেকে ভিজ্যুয়াল কর্টেক্স পর্যন্ত দৃষ্টিপথের গতিপথ আঁকা।'
    ),
    l(
      'Analyze the structural mechanics of the ear: middle ear ossicular lever mechanics, cochlear tonotopic basilar membrane frequency mapping, and vestibular balance organs (maculae and semicircular cristae).',
      'কানের গঠনগত বলবিদ্যা বিশ্লেষণ করা: মধ্যকর্ণের অস্থিসমূহের লিভার ক্রিয়া, ককলিয়ার ব্যাসিলার মেমব্রেনের ফ্রিকোয়েন্সি বিভাজন এবং ভেস্টিবুলার ভারসাম্য অঙ্গসমূহের কার্যপদ্ধতি মূল্যায়ন করা।'
    ),
    l(
      'Correlate olfactory and gustatory neuroanatomy with clinical pathologies, differentiating conductive versus sensorineural hearing loss (Rinne/Weber tests) and open-angle versus angle-closure glaucoma.',
      'ঘ্রাণ ও স্বাদের স্নায়ুসংযোগ বিশ্লেষণ করা এবং কনডাক্টিভ বনাম সেন্সরিনিউরাল বধিরতা (রিনে ও ওয়েবার পরীক্ষা) এবং ওপেন-অ্যাঙ্গেল বনাম ক্লোজড-অ্যাঙ্গেল গ্লুকোমার ক্লিনিক্যাল পার্থক্য নির্ণয় করা।'
    ),
  ],
  prerequisiteIds: ['topic.anatomy.brain'],
  relatedTopicIds: ['topic.anatomy.neural-tissue'],
  references: refs,
  evidenceBySection: {
    introduction: ['openstax-ap2e-ch15', 'moore-anatomy-9e'],
    structure: ['openstax-ap2e-ch15', 'kandel-neuroscience-6e'],
    mechanism: ['guyton-hall-14e', 'kandel-neuroscience-6e'],
    integration: ['moore-anatomy-9e', 'grays-anatomy-42e'],
    practice: ['moore-anatomy-9e', 'guyton-hall-14e'],
    takeaways: ['openstax-ap2e-ch15', 'moore-anatomy-9e'],
  },
  chapter: {
    toc: [
      { id: 'sec-intro', label: l('Introduction: The Ocular Globe & Refractive Media', 'ভূমিকা: অক্ষিগোলকের স্তর ও আলোক প্রতিসরণ'), sectionId: 'introduction' },
      { id: 'sec-retina-vision', label: l('Retinal Layers & the Geniculocalcarine Visual Pathway', 'রেটিনার স্তর ও মস্তিষ্কের দৃষ্টিপথ'), sectionId: 'structure' },
      { id: 'sec-auditory-system', label: l('Middle Ear Ossicles & Cochlear Tonotopy', 'মধ্যকর্ণের অস্থিসমূহ ও ককলিয়ার শ্রবণ বলবিদ্যা'), sectionId: 'mechanism' },
      { id: 'sec-vestibular-chemical', label: l('Vestibular Balance, Olfaction & Taste Buds', 'ভেস্টিবুলার ভারসাম্য, ঘ্রাণ ও স্বাদকুঁড়ি'), sectionId: 'integration' },
      { id: 'sec-clinical', label: l('Clinical Otolaryngology & Ophthalmology', 'ক্লিনিক্যাল নাক-কান-গলা ও চক্ষুবিজ্ঞান'), sectionId: 'practice' },
      { id: 'sec-takeaways', label: l('Summary & Special Senses Glossary', 'সারসংক্ষেপ ও বিশেষ ইন্দ্রিয়ের শব্দকোষ'), sectionId: 'takeaways' },
    ],
    terms: [
      {
        term: l('Organ of Corti & Basilar Membrane Tonotopy', 'কর্টি অঙ্গ ও ব্যাসিলার মেমব্রেনের ফ্রিকোয়েন্সি বিভাজন'),
        definition: l(
          'The neuroepithelial hearing organ situated on the basilar membrane within the cochlear duct (scala media). Tonotopy is anatomically encoded along its length: the narrow, stiff base near the oval window resonates to high-frequency sounds (up to 20,000 Hz), while the wide, flexible apex at the helicotrema resonates to low frequencies (down to 20 Hz).',
          'কানের ককলিয়ার মধ্যে অবস্থিত প্রধান শ্রবণ অঙ্গ। এর ব্যাসিলার মেমব্রেনটি চমৎকারভাবে সাজানো: ওভাল উইন্ডোর কাছের শক্ত সরু গোড়াটি উচ্চ কম্পাঙ্কের শব্দ (২০,০০০ হার্টজ পর্যন্ত) ধরে এবং শীর্ষে থাকা চওড়া নরম অংশটি নিম্ন কম্পাঙ্কের গভীর শব্দ (২০ হার্টজ) শনাক্ত করে।'
        ),
      },
      {
        term: l('Canal of Schlemm & Trabecular Outflow', 'শ্লেমের নালি ও ট্রাবেকুলার নিষ্কাশন পথ'),
        definition: l(
          'A circular vascular channel located at the iridocorneal filtration angle in the anterior chamber of the eye. Aqueous humor synthesized by the ciliary body processes drains through the trabecular meshwork into Schlemm canal to reach episcleral veins; blockage elevates intraocular pressure (>21 mmHg) to produce glaucoma.',
          'চোখের কর্নিয়া ও আইরিশের সংযোগস্থলে অবস্থিত একটি সূক্ষ্ম নিষ্কাশন নালী। সিলিয়ারি বডি থেকে তৈরি অ্যাকুয়াস হিউমার তরল এই নালী দিয়ে বের হয়ে শিরায় চলে যায়; এই পথ বন্ধ হয়ে তরল জমলে চোখের ভেতর চাপ বৃদ্ধি পেয়ে গ্লুকোমা রোগের সৃষ্টি হয়।'
        ),
      },
      {
        term: l('Vestibular Semicircular Canals & Otolithic Maculae', 'ভেস্টিবুলার অর্ধবৃত্তাকার নালি ও ওটোলিথ ম্যাকুলা'),
        definition: l(
          'The dual peripheral balance apparatus in the inner ear: the three semicircular canals (anterior, posterior, lateral) contain ampullary cupulae sensing rotational (angular) head acceleration; the utricle and saccule house calcium carbonate otoconia (otoliths) sensing linear acceleration and gravity.',
          'অভ্যন্তরীণ কানের ভারসাম্য ব্যবস্থা: তিনটি অর্ধবৃত্তাকার নালি মাথা ঘোরানো বা কৌণিক গতি শনাক্ত করে; আর ইউট্রিকল ও স্যাকুলা ক্যালসিয়াম পাথরের (ওটোলিথ) ওজনের মাধ্যমে মহাকর্ষ ও সোজা লাইনে চলাচলের গতি শনাক্ত করে।'
        ),
      },
      {
        term: l('Olfactory Glomerular Convergence', 'অলফ্যাক্টরি গ্লোমেরুলার সংযোগ'),
        definition: l(
          'Specialized synaptic neuropil in the olfactory bulb where thousands of primary olfactory sensory neurons expressing the same odorant receptor converge onto dendrites of a few mitral and tufted cells, providing extreme signal amplification and odor identification before projecting directly to the cortex without thalamic relay.',
          'নাকের অলফ্যাক্টরি বাল্বে অবস্থিত বিশেষ কেন্দ্র যেখানে একই ধরণের গন্ধ শনাক্তকারী হাজার হাজার স্নায়ুতন্তু একসাথে মিলিত হয়ে সংকেতকে বহুগুণ শক্তিশালী করে; এই বিশেষ ইন্দ্রিয় সংকেতটি থ্যালামাসে না গিয়ে সরাসরি মস্তিষ্কের স্মৃতি ও আবেগের কেন্দ্রে চলে যায়।'
        ),
      },
    ],
    workedExamples: [
      {
        title: l('Interpreting Rinne and Weber Tuning Fork Tests for Hearing Loss', 'টিউনিং ফর্ক দিয়ে কানের রিনে ও ওয়েবার পরীক্ষা এবং বধিরতার প্রকারভেদ নির্ণয়'),
        steps: [
          l('Step 1: Perform Weber test: place a vibrating 512 Hz tuning fork on the midline of the forehead. In conductive hearing loss, sound lateralizes to the affected (impaired) ear because room noise is masked; in sensorineural hearing loss, sound lateralizes to the normal (unaffected) ear.', 'ধাপ ১: ওয়েবার পরীক্ষা করুন: ৫১২ হার্টজের কম্পমান টিউনিং ফর্ক কপালের মাঝখানে রাখুন। কানের পথ বন্ধ থাকা কনডাক্টিভ বধিরতায় শব্দটি অসুস্থ কানে বেশি শোনা যায়; আর স্নায়ু ক্ষতিগ্রস্ত হওয়া সেন্সরিনিউরাল বধিরতায় শব্দটি ভালো কানে বেশি শোনা যায়।'),
          l('Step 2: Perform Rinne test: place the vibrating fork against the mastoid bone (bone conduction, BC), then hold it in the air beside the ear canal (air conduction, AC). Under normal conditions, air conduction is louder than bone conduction (AC > BC, positive Rinne).', 'ধাপ ২: রিনে পরীক্ষা করুন: টিউনিং ফর্ক কানের পেছনের মাস্তয়েড হাড়ে স্পর্শ করিয়ে শুনুন (হাড়ের পরিবহন), তারপর কানের ছিদ্রের সামনে ধরে শুনুন (বাতাসের পরিবহন)। স্বাভাবিক কানে বাতাসের মাধ্যমে শব্দ বেশি সময় শোনা যায় (AC > BC, পজিটিভ রিনে)।'),
          l('Step 3: Combine findings: if a patient with left-sided deafness has a negative Rinne on the left (BC > AC) and Weber lateralizing to the left, the diagnosis is left conductive hearing loss (e.g., cerumen impaction or otosclerosis). If Rinne is positive bilaterally but Weber lateralizes to the right, the diagnosis is left sensorineural hearing loss (e.g., acoustic neuroma or cochlear hair cell loss).', 'ধাপ ৩: সিদ্ধান্ত গ্রহণ করুন: যদি বাম কানে হাড়ে বেশি শোনা যায় (BC > AC) এবং ওয়েবার বামে যায়, তবে এটি বাম কানের রাস্তা বন্ধ হওয়া কনডাক্টিভ সমস্যা (ময়লা বা মধ্যকর্ণের হাড় শক্ত হওয়া)। আর যদি উভয় কানে বাতাসেই বেশি শোনা যায় কিন্তু ওয়েবার ডানে যায়, তবে বাম কানের অভ্যন্তরীণ স্নায়ু নষ্ট হয়েছে।'),
        ],
        conclusion: l('Physical tuning fork tests exploit bone versus air impedance physics to immediately localize pathology to middle ear conductive machinery versus inner ear cochleovestibular neural apparatus.', 'টিউনিং ফর্কের এই সহজ ও চমৎকার পরীক্ষা কানের সমস্যাটি কি কেবল ময়লা বা হাড়ের যান্ত্রিক গোলযোগ, নাকি স্নায়ুর গভীর রোগ—তা কয়েক মিনিটেই নিখুঁতভাবে নির্ধারণ করে দেয়।' ),
      },
    ],
    checkpoints: [
      {
        question: l('Why does an acute attack of angle-closure glaucoma produce agonizing eye pain, halos around lights, and an unreactive mid-dilated pupil?', 'অ্যাকিউট অ্যাঙ্গেল-ক্লোজার গ্লুকোমায় হঠাৎ চোখে তীব্র যন্ত্রণা, আলোর চারপাশে রংধনু দেখা এবং চোখের মণি আলোতে নিশ্চল হয়ে যাওয়ার শারীরস্থানিক কারণ কী?'),
        answer: l('In anatomically predisposed eyes with a shallow anterior chamber, pupillary dilation causes the peripheral iris to bunch forward into the iridocorneal filtration angle, mechanically sealing the trabecular meshwork. Continual aqueous humor synthesis by the ciliary body has no egress, causing intraocular pressure to skyrocket from normal (10–21 mmHg) to over 60–80 mmHg, compressing the cornea to produce edema (halos) and causing severe ischemic ocular pain.', 'অগভীর চোখের সামনের চেম্বারযুক্ত মানুষদের চোখের মণি বড় হলে আইরিশের কিনারা সামনের দিকে ঠেলে এসে চোখের পানি নিষ্কাশনের শ্লেম নালির মুখ পুরোপুরি বন্ধ করে দেয়। কিন্তু ভেতরে রস তৈরি হতে থাকায় চোখের চাপ স্বাভাবিকের চেয়ে চার গুণ বেড়ে যায় (>৬০ মিমি পারদ); ফলে কর্নিয়ায় পানি জমে আলোর চারপাশে রংধনু দেখা দেয় এবং তীব্র যন্ত্রণাদায়ক ব্যথা শুরু হয়।' ),
      },
      {
        question: l('What is the anatomical cause of Benign Paroxysmal Positional Vertigo (BPPV), and how does the Epley maneuver cure it?', 'বেনাইন পজিশনাল ভার্টিগো (BPPV) রোগে মাথা ঘোরা শুরু হওয়ার কারণ কী এবং এপ্লে ম্যানুভার কীভাবে এটি নিরাময় করে?'),
        answer: l('BPPV occurs when dense calcium carbonate otoliths (otoconia) detach from the gelatinous macula of the utricle and become displaced into the fluid of the posterior semicircular canal (canalithiasis). When the head rotates in the plane of the canal, the heavy particles drag through endolymph, deflecting the ampullary cupula and triggering violent false vestibular firing (vertigo and rotatory nystagmus). The Epley canalith repositioning maneuver systematically rotates the head through 360 degrees, using gravity to guide the loose otoliths out of the canal and back into the utricle.', 'ইউট্রিকল থেকে ক্যালসিয়াম কার্বনেটের ক্ষুদ্র পাথরগুলো খুলে গিয়ে পেছনের অর্ধবৃত্তাকার নালির তরলে পড়ে গেলে এই রোগ হয়। মাথা নাড়ালে এই পাথরগুলো তরল নাড়িয়ে মিথ্যা গতি সংকেত পাঠায় যার ফলে তীব্র মাথা ঘোরে ও চোখ কাঁপতে থাকে। এপ্লে ম্যানুভারে মাথা নির্দিষ্ট নিয়মে ঘুরিয়ে অভিকর্ষের টানে পাথরগুলোকে আবার সঠিক স্থানে ফেরত পাঠানো হয়, যার ফলে রোগী তাত্ক্ষণিক সুস্থ হয়ে ওঠে।' ),
      },
    ],
    organelles: [],
  },
  interactiveDiagram: {
    id: 'ch19-special-senses-diagram',
    title: l('Interactive Sensory Organs & Neural Transduction', 'ইন্টারেক্টিভ সংবেদী অঙ্গ ও স্নায়বিক অনুভূতি গ্রহণ'),
    description: l(
      'Inspect the four primary specialized sensory organs of the human body: the ocular globe and retinal photoreception, the middle ear ossicles and cochlea, the vestibular balance apparatus, and the chemical senses (olfaction and taste).',
      'মানবদেহের চারটি প্রধান বিশেষ সংবেদী অঙ্গ পরীক্ষা করুন: চোখের অক্ষিগোলক ও রেটিনা, কানের মধ্যকর্ণের অস্থি ও ককলিয়া, ভেস্টিবুলার ভারসাম্য কেন্দ্র এবং রাসায়নিক অনুভূতি (ঘ্রাণ ও স্বাদ)।'
    ),
    disclaimer: l(
      'Special senses schematic: select any sector to review refractive media, cochlear tonotopy, vestibular cupulae, and gustatory-olfactory convergence.',
      'বিশেষ ইন্দ্রিয়ের চিত্র: আলোক প্রতিসরণ, কানের ফ্রিকোয়েন্সি বিভাজন, ভারসাম্য ব্যবস্থা এবং ঘ্রাণ ও স্বাদের পথসমূহ দেখতে যেকোনো অঞ্চল নির্বাচন করুন।'
    ),
    svgType: 'special-senses-system',
    items: [
      {
        id: 'eye-retina',
        label: l('Ocular Globe, Tunics & Retina', 'অক্ষিগোলক, চোখের স্তর ও রেটিনা'),
        description: l(
          'Vision apparatus. Cornea and lens focus photons onto 10 retinal layers. 120 million rods detect dim light; 6 million cones in fovea centralis mediate color and high visual acuity.',
          'দৃষ্টির অঙ্গ। কর্নিয়া ও লেন্স আলোকে রেটিনার ১০টি স্তরে কেন্দ্রীভূত করে। ১২ কোটি রড কোষ মৃদু আলো দেখে এবং ফোবিয়া সেন্ট্রালিসের ৬০ লাখ কোন কোষ স্পষ্ট রঙিন দৃষ্টি দেয়।'
        ),
        details: l(
          'Optic nerve fibers cross at optic chiasm (nasal retinal fibers only). Optic tract synapses in lateral geniculate nucleus (LGN) of thalamus before projecting to calcarine fissure (BA 17).',
          'অপটিক স্নায়ুর ভেতরের তন্তু অপটিক কায়াজমায় ক্রস করে। থ্যালামাসের এলজিএন-এ রিলে হয়ে সংকেত পেছনের অক্সিপিটাল কর্টেক্সে গিয়ে দৃশ্য তৈরি করে।'
        ),
        sectionId: 'introduction',
        color: '#bfdbfe',
        svgCoords: { x: 25, y: 30, width: 310, height: 50 },
      },
      {
        id: 'middle-inner-ear',
        label: l('Ossicular Chain & Cochlear Tonotopy', 'মধ্যকর্ণের অস্থি ও ককলিয়ার শ্রবণযন্ত্র'),
        description: l(
          'Acoustic mechanical impedance and transduction. Tympanic membrane vibrates malleus, incus, and stapes. Stapes footplate drives perilymph waves through the scala vestibuli.',
          'শব্দ তরঙ্গকে যান্ত্রিক ও বৈদ্যুতিক সংকেতে রূপান্তর। কানের পর্দা ম্যালিয়াস, ইনকাস ও স্টেপিস হাড়গুলোকে নাড়ায়। স্টেপিস তরঙ্গে চাপ দিয়ে ককলিয়ার ভেতরে ঢেউ তোলে।'
        ),
        details: l(
          'Basilar membrane tonotopically separates pitch: high-frequency sound vibrates stiff base; low-frequency sound vibrates flexible apex near helicotrema.',
          'ককলিয়ার ব্যাসিলার মেমব্রেন শব্দের তীক্ষ্ণতা আলাদা করে: গোড়ায় ধরা পড়ে উচ্চ কম্পাঙ্কের শব্দ এবং চূড়ায় ধরা পড়ে গম্ভীর নিম্ন কম্পাঙ্কের শব্দ।'
        ),
        sectionId: 'structure',
        color: '#bbf7d0',
        svgCoords: { x: 25, y: 90, width: 310, height: 50 },
      },
      {
        id: 'vestibular-balance',
        label: l('Semicircular Canals & Otolithic Maculae', 'অর্ধবৃত্তাকার নালি ও ভারসাম্য ম্যাকুলা'),
        description: l(
          'Equilibrium and spatial navigation. Three orthogonal semicircular canals sense angular head acceleration. Utricle and saccule sense linear acceleration and gravitational tilt.',
          'শারীরিক ভারসাম্য ও দিক নির্ণয়। তিনটি অর্ধবৃত্তাকার নালি মাথা ঘোরানোর কোণ বোঝে। ইউট্রিকল ও স্যাকুলা মাধ্যাকর্ষণ ও সোজা চলার গতি পরিমাপ করে।'
        ),
        details: l(
          'Vestibulocochlear nerve (CN VIII) projects to vestibular nuclei in brainstem, driving vestibulo-ocular reflex (VOR) to keep gaze steady during rapid head movement.',
          'ভেস্টিবুলার স্নায়ু ব্রেনস্টেমে সংকেত পাঠিয়ে মাথা ঘোরার সময়ও চোখকে লক্ষ্যবস্তুতে স্থির রাখতে ভেস্টিবুলো-অকিউলার রিফ্লেক্স চালু রাখে।'
        ),
        sectionId: 'mechanism',
        color: '#fef08a',
        svgCoords: { x: 25, y: 150, width: 310, height: 50 },
      },
      {
        id: 'chemical-senses',
        label: l('Olfaction & Gustatory Papillae', 'ঘ্রাণ ও স্বাদকুঁড়ি ব্যবস্থা'),
        description: l(
          'Chemical detection systems. Olfactory neurons pierce ethmoid cribriform plate to bulb. Taste buds on fungiform and circumvallate papillae detect 5 basic tastants.',
          'রাসায়নিক স্বাদ ও গন্ধ শনাক্তকরণ। নাকে থাকা স্নায়ু সরাসরি মস্তিষ্কে গন্ধের খবর পাঠায়। জিহ্বার স্বাদকুঁড়ি মিষ্টি, নোনতা, টক, তিতা ও উমামি স্বাদ গ্রহণ করে।'
        ),
        details: l(
          'Taste innervated by CN VII (anterior 2/3 tongue via chorda tympani), CN IX (posterior 1/3), and CN X (epiglottis); all converge on solitary nucleus of medulla.',
          'জিহ্বার সামনের দুই-তৃতীয়াংশের স্বাদ বহন করে ৭ম স্নায়ু, পেছনের এক-তৃতীয়াংশ বহন করে ৯ম স্নায়ু এবং গলার স্বাদ বহন করে ১০ম স্নায়ু ভেগাস।'
        ),
        sectionId: 'integration',
        color: '#fecdd3',
        svgCoords: { x: 25, y: 210, width: 310, height: 50 },
      },
    ],
  },
  levels: {
    foundation: {
      label: l('Foundation', 'ভিত্তি'),
      sections: [
        {
          id: 'introduction',
          heading: l('The Eye as an Optical Instrument: Tunics and Media', 'আলোক যন্ত্র হিসেবে চোখ: স্তর এবং প্রতিসরণ মাধ্যম'),
          paragraphs: [
            l(
              'The human eye (ocular globe) is a specialized paired sensory organ housed within the protective bony orbit of the skull. It functions analogously to a high-precision camera, gathering light rays, focusing them through refractive media, and transducing photons into electrochemical impulses. The ocular wall consists of three concentric tunics: an outer fibrous tunic, a middle vascular tunic (uvea), and an inner neural tunic (the retina).',
              'মানব অক্ষিগোলক হলো খুলির হাড়ের কোটরে সুরক্ষিত এক বিশেষায়িত সংবেদী অঙ্গ যা উচ্চ প্রযুক্তির ক্যামেরার মতো কাজ করে। এটি বাইরের আলোকে সংগ্রহ করে বিভিন্ন স্বচ্ছ মাধ্যমের ভেতর দিয়ে কেন্দ্রীভূত করে রেটিনায় ফেলে এবং স্নায়ু সংকেতে রূপান্তর করে। চোখের প্রাচীর তিনটি প্রধান স্তরে গঠিত: বাইরের শক্ত ফাইব্রাস স্তর, মাঝের রক্তনালীপূর্ণ ভাস্কুলার ইউভিয়া এবং ভেতরের সংবেদনশীল রেটিনা।'
            ),
            l(
              'The fibrous tunic consists of the transparent anterior cornea (providing roughly two-thirds of the eye total refractive power) and the opaque posterior white sclera. Deep to this lies the vascular uvea, comprising the nutrient choroid, the ciliary body (which suspends the crystalline lens via zonular fibers and synthesizes aqueous humor), and the pigmented iris surrounding the pupil. Light traverses the cornea, aqueous humor, pupil, biconvex crystalline lens, and vitreous body to focus crisply upon the photoreceptors of the retina.',
              'বাইরের স্তরের সামনের স্বচ্ছ অংশটি হলো কর্নিয়া (যা চোখের দুই-তৃতীয়াংশ আলোক প্রতিসরণ করে) এবং পেছনের সাদা অংশটি হলো স্ক্লেরা। মাঝের ইউভিয়া স্তরে রক্তসমৃদ্ধ কোরয়েড, লেন্সকে ধরে রাখা ও তরল তৈরি করা সিলিয়ারি বডি এবং চোখের তারারন্ধ্র বা পিউপিলকে নিয়ন্ত্রণ করা রঙিন আইরিশ থাকে। আলো কর্নিয়া, লেন্স ও ভিট্রিয়াস হিউমার পার হয়ে রেটিনার আলোক সংবেদী কোষের ওপর নিখুঁত প্রতিবিম্ব তৈরি করে।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('The Ear: External, Middle and Inner Acoustic Chambers', 'কানের তিন প্রকোষ্ঠ: বহিকর্ণ, মধ্যকর্ণ এবং অন্তঃকর্ণ'),
          paragraphs: [
            l(
              'The human ear is an intricate mechanosensory transducer partitioned into three anatomical regions: the external ear, the air-filled middle ear cavity, and the fluid-filled inner ear embedded within the petrous part of the temporal bone. The external ear consists of the cartilaginous auricle (pinna) and the external acoustic meatus, which funnel ambient sound waves inward to strike the thin, translucent tympanic membrane (eardrum).',
              'মানব কান হলো একটি অত্যন্ত সংবেদনশীল শব্দ ও ভারসাম্য গ্রহণকারী অঙ্গ যা তিনটি অঞ্চলে বিভক্ত: বহিকর্ণ, বাতাসপূর্ণ মধ্যকর্ণ এবং টেম্পোরাল হাড়ের গভীরে থাকা তরলপূর্ণ অন্তঃকর্ণ। বহিকর্ণের বাইরের পিনা এবং কানের ছিদ্র বাইরের শব্দ তরঙ্গকে সংগ্রহ করে ভেতরে থাকা পাতলা কানের পর্দায় (টিমপ্যানিক মেমব্রেন) আঘাত করতে সাহায্য করে।'
            ),
            l(
              'Vibrations of the tympanic membrane are transmitted across the middle ear by a chain of three miniature auditory ossicles: the malleus (hammer), incus (anvil), and stapes (stirrup). These ossicles act as a mechanical lever system that amplifies acoustic pressure roughly twentyfold to overcome the acoustic impedance mismatch between ambient air and cochlear fluid. The footplate of the stapes rocks against the oval window, generating fluid pressure waves in the cochlea of the inner ear.',
              'কানের পর্দার কম্পন মধ্যকর্ণের তিনটি অতি ক্ষুদ্র হাড়ের মাধ্যমে পরিবাহিত হয়: ম্যালিয়াস, ইনকাস এবং স্টেপিস। এই তিনটি হাড় একটি লিভারের মতো কাজ করে শব্দের চাপকে প্রায় বিশ গুণ বৃদ্ধি করে, যাতে বাতাসের হালকা তরঙ্গ কানের ভেতরের ঘন তরলকে সহজেই কাঁপাতে পারে। স্টেপিস হাড়টি ওভাল উইন্ডোতে ধাক্কা দিয়ে অভ্যন্তরীণ কানের ককলিয়ার তরলে ঢেউ তৈরি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Mechanisms of Hearing: Ossicular Amplification and Cochlear Fluid Waves', 'শ্রবণের মূল প্রক্রিয়া: অস্থির লিভার ক্রিয়া ও ককলিয়ার তরল তরঙ্গ'),
          paragraphs: [
            l(
              'Inside the spiral cochlea, acoustic energy is transduced into electrical signals by the delicate organ of Corti residing upon the basilar membrane within the cochlear duct (scala media). As stapes footplate vibrations drive perilymph pressure oscillations through the scala vestibuli and scala tympani, the basilar membrane undergoes frequency-dependent traveling waves, bending the microvilli (stereocilia) of inner hair cells against the overlying tectorial membrane.',
              'শামুকের মতো পেঁচানো ককলিয়ার ভেতরে স্নায়বিক সংকেত তৈরির কাজটি করে কর্টি অঙ্গ যা ব্যাসিলার মেমব্রেনের ওপর বসে থাকে। স্টেপিস হাড়টি কানের ওভাল উইন্ডোতে ধাক্কা দিলে ককলিয়ার ভেতরের তরলে ঢেউ ওঠে এবং ব্যাসিলার পর্দাটি ওপর-নিচে কাঁপতে শুরু করে; এর ফলে ভেতরের সংবেদনশীল চুলসদৃশ কোষগুলোর ডগা ওপরের টেক্টোরিয়াল পর্দার সাথে ঘষা খেয়ে উদ্দীপিত হয়।'
            ),
            l(
              'Mechanical displacement of hair cell stereocilia tension-activates tip-link gated cation channels, allowing a rapid influx of potassium ions (K+) from the high-potassium endolymph (+80 mV endocochlear potential), which depolarizes the hair cell. Depolarization opens voltage-gated calcium channels, triggering vesicular release of glutamate neurotransmitter across the afferent synapse to fire action potentials along sensory fibers of the cochlear division of cranial nerve VIII.',
              'চুলসদৃশ কোষগুলোর ডগা বেঁকে যাওয়ার সাথে সাথে তাদের মাথার সূক্ষ্ম প্রোটিন চ্যানেলগুলো খুলে যায় এবং এন্ডোলিম্ফ তরলে থাকা প্রচুর পটাশিয়াম আয়ন কোষে প্রবেশ করে বিদ্যুৎ তৈরি করে। এই পরিবর্তনের ফলে ক্যালসিয়াম চ্যানেল খুলে যায় এবং গ্লুটামেট নামক স্নায়ুবার্তা নিঃসরিত হয়ে অষ্টম ক্রেনিয়াল নার্ভের ককলিয়ার শাখায় তড়িৎ সংকেত পাঠায় যা মস্তিষ্কে শব্দ হিসেবে অনুভূত হয়।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Chemical Senses: Olfactory and Gustatory Neural Networks', 'রাসায়নিক ইন্দ্রিয়: ঘ্রাণ ও স্বাদের স্নায়বিক সংযোগ'),
          paragraphs: [
            l(
              'The chemical senses—olfaction (smell) and gustation (taste)—are specialized visceral sensory systems operating in close neurological concert to mediate flavor perception, ingestive reflexes, and food safety evaluation. Olfactory sensory neurons are bipolar neuroepithelial cells embedded within the olfactory mucosa of the superior nasal cavity, sending unmyelinated axons through the cribriform plate of the ethmoid bone directly into the olfactory bulb, bypassing the thalamic relay.',
              'রাসায়নিক অনুভূতি—ঘ্রাণ ও স্বাদ—দেহের অত্যন্ত গুরুত্বপূর্ণ দুটি সংবেদনশীল ব্যবস্থা যা খাবারের প্রকৃত তৃপ্তি গ্রহণ, মুখরোচক লালা নিঃসরণ এবং ক্ষতিকর খাবার বর্জনে একসাথে কাজ করে। নাকের ওপরের ছাদ বরাবর অবস্থিত বিশেষ ঘ্রাণ সংবেদী কোষগুলো এথময়েড হাড়ের সূক্ষ্ম ছিদ্র ভেদ করে সরাসরি অলফ্যাক্টরি বাল্বে সংকেত পাঠায় যা মস্তিষ্কের স্মৃতি ও আবেগের লিম্বিক কেন্দ্রে দ্রুত পৌঁছে যায়।'
            ),
            l(
              'Gustatory sensations are mediated by taste buds distributed across tongue papillae (fungiform, foliate, and circumvallate), palate, and pharynx. Five primary tastant qualities are detected: salty and sour via ion channels, and sweet, bitter, and umami via G-protein-coupled receptors. Taste afferents travel via three cranial nerves—facial nerve (CN VII, chorda tympani for anterior two-thirds), glossopharyngeal (CN IX for posterior third), and vagus (CN X for epiglottis)—converging onto the nucleus tractus solitarius in the medulla.',
              'জিহ্বার বিভিন্ন ধরণের প্যাপিলার মধ্যে অবস্থিত স্বাদকুঁড়ি দিয়ে স্বাদ অনুভূত হয়। মানুষ মূলত পাঁচটি স্বাদ পায়: মিষ্টি, নোনতা, টক, তিতা এবং উমামি। এই স্বাদ বার্তা তিনটি করোটিক স্নায়ুর মাধ্যমে পরিবাহিত হয়—জিহ্বার সামনের দুই-তৃতীয়াংশের স্বাদ বহন করে ৭ম স্নায়ুর কর্ডা টিম্প্যানি, পেছনের এক-তৃতীয়াংশ বহন করে ৯ম গ্লসোফ্যারিঞ্জিয়াল স্নায়ু এবং গলার ওপরের অংশের স্বাদ বহন করে ১০ম স্নায়ু ভেগাস যা মেডুলার সলিটারি নিউক্লিয়াসে গিয়ে একত্রিত হয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Clinical Evaluation: Tuning Fork Tests and Glaucoma Screening', 'ক্লিনিক্যাল পরীক্ষা: টিউনিং ফর্ক টেস্ট ও গ্লুকোমা নির্ণয়'),
          paragraphs: [
            l(
              'Bedside evaluation of acoustic function relies on 512 Hz tuning fork tests to rapidly discriminate middle ear conductive hearing impairment from inner ear sensorineural hearing loss. In the Rinne test, air conduction (AC) is compared with bone conduction (BC) over the mastoid process; normal hearing and sensorineural loss demonstrate AC > BC (positive Rinne), whereas conductive hearing impairment inverts this ratio (BC > AC, negative Rinne).',
              'হাসপাতালে রোগীর কানের শ্রবণশক্তি পরীক্ষার জন্য ৫১২ হার্টজের টিউনিং ফর্ক ব্যবহার করে রিনে ও ওয়েবার পরীক্ষা করা হয় যা কয়েক মিনিটে কানের যান্ত্রিক সমস্যা বনাম ভেতরের স্নায়বিক বধিরতার পার্থক্য নির্ণয় করে। রিনে পরীক্ষায় কানের পর্দার সামনে বাতাসের মাধ্যমে শোনা (AC) এবং পেছনের মাস্তয়েড হাড়ে স্পর্শ করিয়ে শোনা (BC) তুলনা করা হয়; সুস্থ কানে বাতাসেই শব্দ বেশি সময় শোনা যায়।'
            ),
            l(
              'In the Weber test, the vibrating fork is placed centrally on the vertex or forehead. In unilateral conductive deafness (e.g., cerumen impaction or otosclerosis), sound paradoxically lateralizes to the diseased ear because ambient background noise is attenuated. In unilateral sensorineural hearing loss (e.g., acoustic neuroma or cochlear hair cell ischemia), sound lateralizes to the normal ear, pointing the clinician to sensorineural pathology.',
              'ওয়েবার পরীক্ষায় কম্পমান টিউনিং ফর্কটি মাথার মাঝখানে কপালে স্থাপন করা হয়। যদি কোনো রোগীর এক কানের পথ বন্ধ থাকে (যেমন খৈল জমা), তবে শব্দটি অদ্ভুতভাবে সেই অসুস্থ কানেই বেশি জোরালো শোনা যায়। আর যদি কানের ভেতরের স্নায়ু ক্ষতিগ্রস্ত হয়, তবে শব্দটি উল্টো ভালো কানের দিকে বেশি শোনা যায়, যা থেকে ডাক্তাররা দ্রুত স্নায়ুর জটিল রোগ শনাক্ত করতে পারেন।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Summary & Core Principles of Special Senses', 'সারসংক্ষেপ ও বিশেষ ইন্দ্রিয়সমূহের মৌলিক নীতি'),
          paragraphs: [
            l(
              'The special senses represent exquisite evolutionary adaptations converting photons, acoustic waves, angular accelerations, and chemical molecules into synchronized neural codes. Each sensory organ is physically tailored with impedance-matching, optical refraction, or fluidic resonance adaptations that maximize biophysical sensitivity while protecting fragile neuroepithelia from environmental injury.',
              'মানবদেহের বিশেষ ইন্দ্রিয়গুলো আলো, শব্দ তরঙ্গ, নড়াচড়ার ভারসাম্য এবং রাসায়নিক অণুকে সুনির্দিষ্ট স্নায়ু সংকেতে রূপান্তর করার এক অসাধারণ জৈবিক বিস্ময়। প্রতিটি সংবেদী অঙ্গ এমনভাবে তৈরি যা সূক্ষ্মতম কম্পন বা আলোক রশ্মিকেও গ্রহণ করতে পারে এবং একই সাথে শরীরের অতি সংবেদনশীল স্নায়ুকোষগুলোকে বাইরের যে কোনো আঘাত থেকে সুরক্ষা দেয়।'
            ),
            l(
              'Thorough clinical proficiency in sensory examination, including visual perimetry, tonometry, otoscopic inspection, tuning fork tests, and positional maneuvers, enables clinicians to pinpoint skull base, cranial nerve, and intracranial pathologies with remarkable anatomical accuracy.',
              'দৃষ্টিসীমা পরীক্ষা, চোখের প্রেশার মাপা, অটোস্কোপ দিয়ে কান দেখা এবং টিউনিং ফর্ক পরীক্ষার মতো মৌলিক দক্ষতাগুলো আয়ত্ত থাকলে মাথার খুলি, করোটিক স্নায়ু এবং মস্তিষ্কের ভেতরের মারাত্মক জটিল রোগগুলো শুরুতেই নির্ভুলভাবে শনাক্ত করে সঠিক চিকিৎসা প্রদান সম্ভব হয়।'
            ),
          ],
        },
      ],
    },
    academic: {
      label: l('Academic', 'একাডেমিক'),
      sections: [
        {
          id: 'introduction',
          heading: l('Retinal Cytoarchitecture and Phototransduction Cascades', 'রেটিনার সাইটোআর্কিটেকচার এবং ফটোট্রান্সডাকশন প্রক্রিয়া'),
          paragraphs: [
            l(
              'The retina is an embryological outgrowth of the diencephalon, organized into ten distinct histological layers spanning from the outer retinal pigment epithelium (RPE) to the inner limiting membrane. Photons pass through the inner transparent layers to strike two classes of photoreceptor cells: rods (approximately 120 million per eye), which deploy rhodopsin for high-sensitivity monochromatic vision in dim light; and cones (roughly 6 million), which express three photopsin pigments (S, M, and L) for trichromatic color vision and high spatial resolution.',
              'রেটিনা হলো মস্তিষ্কের একটি সরাসরি প্রবৃদ্ধি যা দশটি সুনির্দিষ্ট কলাস্থানিক স্তরে বিন্যস্ত। আলো ভেতরের স্বচ্ছ স্তরগুলো ভেদ করে পেছনে থাকা দুই ধরণের আলোক সংবেদী কোষে পৌঁছায়: ১২ কোটি রড কোষ যা মৃদু আলোতে দেখতে সাহায্য করে এবং ৬০ লাখ কোন কোষ যা উজ্জ্বল আলোতে স্পষ্ট রঙিন দৃষ্টি নিশ্চিত করে।'
            ),
            l(
              'Phototransduction is an enzymatic biochemical cascade triggered when a photon isomerizes 11-cis-retinal to all-trans-retinal within opsin GPCRs, activating the G-protein transducin. Transducin stimulates cGMP phosphodiesterase (PDE6) to hydrolyze cyclic GMP, causing cyclic nucleotide-gated sodium/calcium channels in the photoreceptor outer segment to close. The resulting cessation of dark current hyperpolarizes the photoreceptor membrane from -40 mV to -70 mV, decreasing glutamate release at the synaptic terminal.',
              'আলোক সংবেদনের মূল ভিত্তি হলো একটি চমৎকার রাসায়নিক ক্যাসকেড: আলোর কণা অপসিন প্রোটিনের ১১-সিস-রেটিনালকে অল-ট্রান্স-রেটিনালে রূপান্তরিত করে এবং ট্রান্সডিউসিন প্রোটিনকে সক্রিয় করে। এর ফলে সিজিএমপি ভেঙে যায় এবং কোষে সোডিয়াম প্রবেশের পথ বন্ধ হয়ে কোষের পর্দাটি হাইপারপোলারাইজড হয়ে ঋণাত্মক চার্জযুক্ত হয়, যার মাধ্যমে রড ও কোন কোষ থেকে গ্লুটামেট নিঃসরণ বন্ধ হয়ে সংকেত সামনের দিকে প্রবাহিত হয়।'
            ),
          ],
        },
        {
          id: 'structure',
          heading: l('Geniculocalcarine Pathway and Visual Field Mapping', 'অপটিক স্নায়ু থেকে ভিজ্যুয়াল কর্টেক্স এবং দৃষ্টিসীমা মানচিত্র'),
          paragraphs: [
            l(
              'The visual pathway translates retinal photon topography into conscious visual perception via an ordered retino-geniculo-calcarine projection. Axons of approximately 1.2 million retinal ganglion cells exit the ocular globe at the optic disc, forming the optic nerve (CN II). At the optic chiasm, axons originating from the nasal hemiretinae (subtending temporal visual fields) decussate, whereas axons from temporal hemiretinae (subtending nasal visual fields) continue uncrossed into the ipsilateral optic tract.',
              'রেটিনার গ্যাংলিয়ন কোষ থেকে বের হওয়া ১২ লাখ অ্যাক্সন মিলে অপটিক স্নায়ু গঠন করে যা চোখের পেছনের ছিদ্র দিয়ে মস্তিষ্কের দিকে অগ্রসর হয়। অপটিক কায়াজমায় এসে চোখের ভেতরের রেটিনার স্নায়ুতন্তুগুলো বিপরীত পাশে চলে যায়, কিন্তু বাইরের রেটিনার স্নায়ুগুলো একই পাশে থেকে যায়; যার ফলে উভয় চোখের ডান পাশের দৃশ্য বাম মস্তিষ্কে এবং বাম পাশের দৃশ্য ডান মস্তিষ্কে প্রক্রিয়াজাত হতে পারে।'
            ),
            l(
              'Optic tract axons terminate predominantly in the six laminated layers of the lateral geniculate nucleus (LGN) in the thalamus (magnocellular layers 1–2 for motion and luminance; parvocellular layers 3–6 for color and high spatial detail). From the LGN, optic radiation fibers bifurcate: the superior parietal radiation traverses directly to the cuneus (upper bank of calcarine fissure), while inferior fibers form Meyer loop sweeping anteriorly through the temporal lobe around the lateral ventricle before reaching the lingual gyrus (lower bank of calcarine fissure, Brodmann area 17).',
              'অপটিক ট্র্যাক্টের সংকেতগুলো থ্যালামাসের ল্যাটারাল জেনিকুলেট নিউক্লিয়াসে (LGN) পৌঁছায় যার ছয়টি স্তরে গতি ও রঙের তথ্য আলাদা হয়। এখান থেকে স্নায়ুতন্তুগুলো দুটি ভাগে ভাগ হয়ে দৃষ্টির প্রধান কেন্দ্র ব্রডম্যান ১৭ এলাকায় যায়: মেয়ার্স লুপ টেম্পোরাল লোবের ভেতর দিয়ে ঘুরে চোখের ওপরের দৃশ্য বহন করে এবং প্যারাইটাল তন্তুগুলো সোজা গিয়ে চোখের নিচের দৃশ্য বহন করে মস্তিষ্কের অক্সিপিটাল কর্টেক্সে প্রতিবিম্ব তৈরি করে।'
            ),
          ],
        },
        {
          id: 'mechanism',
          heading: l('Cochlear Tonotopy and Hair Cell Biomechanics in the Organ of Corti', 'ককলিয়ার ফ্রিকোয়েন্সি বিভাজন এবং কর্টি অঙ্গের কোষীয় বলবিদ্যা'),
          paragraphs: [
            l(
              'Frequency tuning along the cochlear spiral represents an exquisite example of structural-functional tonotopy. The basilar membrane exhibits an anatomical gradient of mechanical stiffness and width along its 32 mm course from cochlear base to apex. At the base adjacent to the oval window, the membrane is narrow (100 µm) and high-stiffness, maximally resonating to high-frequency sounds (up to 20,000 Hz); at the apex near the helicotrema, the membrane is wide (500 µm) and low-stiffness, resonating to low frequencies (down to 20 Hz).',
              'শব্দের বিভিন্ন ফ্রিকোয়েন্সি আলাদা করার জন্য ককলিয়ার ব্যাসিলার মেমব্রেনের গঠন বিশেষভাবে পরিবর্তিত হয়েছে। ওভাল উইন্ডোর কাছে ককলিয়ার গোড়ার মেমব্রেনটি অত্যন্ত সরু এবং শক্ত হওয়ায় এটি ২০,০০০ হার্টজ পর্যন্ত অতি তীক্ষ্ণ উচ্চ কম্পাঙ্কের শব্দে কেঁপে ওঠে; আর চূড়ায় পৌঁছালে মেমব্রেনটি চওড়া ও নরম হয়ে যায় যা ২০ হার্টজের ভারী ও গম্ভীর শব্দ সহজে ধরতে পারে।'
            ),
            l(
              'Acoustic sensitivity is actively amplified up to 100-fold by somatic electromotility of outer hair cells (OHCs). Outer hair cells express dense prestin motor proteins within their lateral membranes that contract and elongate in phase with membrane potential oscillations, pumping mechanical energy back into the basilar membrane. This cochlear amplifier sharpens frequency tuning curves and allows inner hair cells (IHCs) to detect sub-nanometer basilar membrane deflections across a 120 dB dynamic range.',
              'মানুষের কানের শ্রবণশক্তিকে প্রায় একশত গুণ জোরালো করতে আউটার হেয়ার সেলগুলো সক্রিয় অ্যামপ্লিফায়ার হিসেবে কাজ করে। এই কোষগুলোর দেয়ালে প্রেসটিন নামক বিশেষ মোটর প্রোটিন থাকে যা শব্দের তালে তালে সংকুচিত ও প্রসারিত হয়ে মেমব্রেনটিকে আরও বেশি নাড়ায়; ফলে ভেতরের প্রধান চুলসদৃশ কোষগুলো অতি মৃদু শব্দও সহজে শনাক্ত করে মস্তিষ্কে নির্ভুল সংকেত পাঠাতে পারে।'
            ),
          ],
        },
        {
          id: 'integration',
          heading: l('Vestibular Apparatus: Semicircular Ducts and Otolithic Acceleration Sensors', 'ভেস্টিবুলার অ্যাপারেটাস: অর্ধবৃত্তাকার নালি ও ওটোলিথিক গতি সংবেদক'),
          paragraphs: [
            l(
              'Equilibrium and spatial orientation are coordinated by the vestibular labyrinth within the petrous temporal bone. Three orthogonally arranged semicircular canals (anterior, posterior, and horizontal) detect angular head acceleration in three-dimensional space. Movement of the head induces inertial lag of endolymph within the membranous ducts, which physically deflects the gelatinous cupula seated atop the sensory crista ampullaris, shearing the embedded kinocilia and stereocilia to alter baseline vestibular firing rates.',
              'শরীরের ভারসাম্য রক্ষা এবং মহাশূন্যে মাথার অবস্থান নির্ধারণে কানের তিনটি অর্ধবৃত্তাকার নালি ত্রিমাত্রিক তলে কাজ করে। মাথা যে কোনো দিকে ঘোরালে নালির ভেতরের এন্ডোলিম্ফ তরল জড়তার কারণে কিছুটা দেরিতে নড়ে এবং অ্যাম্পুলার ভেতরে থাকা জেলিসদৃশ কাপুলাকে ধাক্কা দেয়; এর ফলে সংবেদী কোষের চুলগুলো একদিকে হেলে গিয়ে স্নায়ুর বৈদ্যুতিক প্রবাহ বাড়িয়ে বা কমিয়ে মাথা ঘোরার খবর দেয়।'
            ),
            l(
              'Linear accelerations and head orientation relative to gravity are monitored by the otolithic organs: the utricle (oriented horizontally) and saccule (oriented vertically). Their sensory maculae are carpeted by dense calcium carbonate crystals (otoconia, density 2.7 g/cm³) embedded in a gelatinous matrix. Gravity pulls upon this otolithic mass, displacing stereocilia relative to the fixed striola. Vestibular primary afferents project to brainstem vestibular nuclei, driving the vestibulo-ocular reflex (VOR) to keep gaze stable during head motion.',
              'সোজা পথে চলাচলের গতি এবং মাধ্যাকর্ষণের সাপেক্ষে মাথার অবস্থান বোঝার জন্য ইউট্রিকল ও স্যাকুলা কাজ করে। এদের ম্যাকুলার ওপর ভারী ক্যালসিয়াম কার্বনেটের স্ফটিকের স্তর (ওটোলিথ) বিছানো থাকে যা মাথা হেলে পড়লে অভিকর্ষের টানে নড়ে ওঠে এবং স্নায়ুকোষকে উত্তেজিত করে। এই সংকেতগুলো ব্রেনস্টেমে গিয়ে ভেস্টিবুলো-অকিউলার রিফ্লেক্স তৈরি করে যার ফলে দ্রুত হাঁটা বা দৌড়ানোর সময়ও আমাদের চোখের দৃষ্টি লক্ষ্যবস্তুতে সম্পূর্ণ স্থির থাকে।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Visual Field Defect Syndromes and Intracranial Lesion Localization', 'দৃষ্টিসীমার ত্রুটি এবং মস্তিষ্কের ক্ষতের শারীরস্থানিক অবস্থান নির্ণয়'),
          paragraphs: [
            l(
              'Precise visual field testing (perimetry) enables clinicians to localize intracranial mass lesions and stroke syndromes along the retino-geniculo-calcarine pathway. Compression of the central optic chiasm by a growing pituitary macroadenoma shears crossing nasal retinal fibers, producing classic bitemporal hemianopsia (tunnel vision). In contrast, total transection of the right optic tract or complete right optic radiation produces complete left homonymous hemianopsia.',
              'দৃষ্টিসীমা পরীক্ষা করে চোখের স্নায়ুপথের ঠিক কোন অংশে টিউমার বা স্ট্রোক হয়েছে তা নির্ভুলভাবে বের করা যায়। পিটুইটারি টিউমার বড় হয়ে অপটিক কায়াজমার মাঝখানে চাপ দিলে দুই চোখের নাকের দিকের স্নায়ু ক্ষতিগ্রস্ত হয় যার ফলে রোগী দুই পাশের বাইরের দৃশ্য দেখতে পায় না যাকে বাইটেম্পোরাল হেমিয়ানপসিয়া বলে। আর যদি ডান পাশের অপটিক ট্র্যাক্ট নষ্ট হয়, তবে উভয় চোখেরই বাম পাশের দৃষ্টি পুরোপুরি হারিয়ে যায়।'
            ),
            l(
              'Partial lesions of the optic radiations display remarkable somatotopic specificity: damage to Meyer loop traversing the temporal lobe (e.g., temporal lobectomy or stroke) produces contralateral superior homonymous quadrantanopsia ("pie in the sky"). Conversely, lesions of the dorsal optic radiation traversing the parietal lobe cause contralateral inferior homonymous quadrantanopsia ("pie on the floor"). Occlusion of the posterior cerebral artery (PCA) infarcts the primary visual cortex (BA 17), causing contralateral homonymous hemianopsia with macular sparing due to collateral supply from the MCA.',
              'টেম্পোরাল লোবের ভেতর দিয়ে যাওয়া মেয়ার্স লুপ ক্ষতিগ্রস্ত হলে বিপরীত চোখের ওপরের এক-চতুর্থাংশ দৃষ্টি নষ্ট হয় যাকে "পাই ইন দ্য স্কাই" বলে। বিপরীতভাবে প্যারাইটাল লোবের স্নায়ু নষ্ট হলে নিচের এক-চতুর্থাংশ দৃষ্টি চলে যায় যাকে "পাই অন দ্য ফ্লোর" বলা হয়। আর পোস্টেরিয়র সেরিব্রাল ধমনী বন্ধ হলে অক্সিপিটাল কর্টেক্স নষ্ট হলেও মিডল সেরিব্রাল ধমনীর বিকল্প রক্ত সরবরাহের কারণে কেন্দ্রীয় ম্যাকুলার দৃষ্টি অক্ষত থাকে।'
            ),
          ],
        },
        {
          id: 'takeaways',
          heading: l('Academic Synthesis: Special Sensory Transduction and Neural Pathways', 'উচ্চতর সংশ্লেষ: বিশেষ সংবেদী সংকেত রূপান্তর এবং স্নায়ুপথ'),
          paragraphs: [
            l(
              'The human special senses exemplify the pinnacle of biophysical integration, linking nanometer-scale hair cell mechanotransduction, quantum photon capture by rhodopsin, and stereochemical receptor binding with complex thalamocortical and brainstem networks. Structural disruptions in refractive media, ossicular articulation, fluid dynamics, or central pathways yield pathognomonic deficits.',
              'মানবদেহের বিশেষ ইন্দ্রিয়গুলো জৈবপদার্থবিজ্ঞানের চরম উৎকর্ষ প্রদর্শন করে যেখানে আলোর একটি একক কণা ধরা থেকে শুরু করে ন্যানোমিটার স্কেলের চুলসদৃশ কোষের কম্পন এবং রাসায়নিক অণুর বন্ধন সবকিছুই মস্তিষ্কের জটিল নেটওয়ার্কের সাথে নির্ভুলভাবে যুক্ত থাকে। এই কাঠামোর যে কোনো অংশে সূক্ষ্ম ব্যাঘাত ঘটলেই তা রোগীর শরীরে সুনির্দিষ্ট ক্লিনিক্যাল লক্ষণ প্রকাশ করে।'
            ),
            l(
              'Clinical diagnosis in ophthalmology and otolaryngology remains uniquely rooted in exact physical principles: understanding Snell law for corneal refraction, hydraulic levers for middle ear impedance matching, tonotopy for audiometry, and the Monro-Kellie doctrine for intracranial pressure ensures accurate clinical decision-making.',
              'চক্ষুবিজ্ঞান এবং নাক-কান-গলা রোগের চিকিৎসা সরাসরি পদার্থবিজ্ঞান ও শারীরস্থানের সূত্রের ওপর প্রতিষ্ঠিত: আলোর প্রতিসরণ সূত্র, কানের অস্থির লিভার ক্রিয়া, ককলিয়ার ফ্রিকোয়েন্সি বিন্যাস এবং চোখের তরল প্রবাহের গতিবিদ্যা সঠিকভাবে জানা থাকলে ডাক্তাররা রোগীর যে কোনো সংবেদী ত্রুটি নির্ভুলভাবে সমাধান করতে পারেন।'
            ),
          ],
        },
      ],
    },
    advanced: {
      label: l('Advanced', 'উন্নত'),
      sections: [
        {
          id: 'integration',
          heading: l('Mechanisms of Glaucoma Hemodynamics and Vestibular Canalithiasis', 'গ্লুকোমার রক্তপ্রবাহ গতিবিদ্যা এবং ভেস্টিবুলার ক্যানালিথিয়াসিস'),
          paragraphs: [
            l(
              'The pathogenesis of glaucomatous optic neuropathy is governed by anterior segment aqueous humor dynamics. Aqueous humor is synthesized continuously at 2.5 µL/min by non-pigmented ciliary epithelial cells, flowing from the posterior chamber through the pupil into the anterior chamber. Over 80% drains through the conventional outflow pathway traversing the trabecular meshwork into Schlemm canal and episcleral veins, while the remainder drains via the unconventional uveoscleral pathway.',
              'গ্লুকোমা রোগের মূল রহস্য চোখের সামনের অংশের তরল প্রবাহ গতিবিদ্যার সাথে জড়িত। সিলিয়ারি বডির বিশেষ কোষগুলো প্রতি মিনিটে আড়াই মাইক্রোলিটার অ্যাকুয়াস হিউমার তরল তৈরি করে যা পিউপিল দিয়ে চোখের সামনের চেম্বারে আসে। এই তরলের ৮০ শতাংশেরও বেশি ট্রাবেকুলার ছাঁকনি ও শ্লেম নালির মাধ্যমে শিরায় নিঃশেষিত হয় এবং বাকি অংশ ইউভিওস্ক্লেরাল পথে বের হয়ে যায়।'
            ),
            l(
              'Pathological elevation of intraocular pressure (>21 mmHg) or vascular dysregulation leads to mechanical compression and chronic ischemic axonal injury at the lamina cribrosa of the optic nerve head. Over time, progressive apoptosis of retinal ganglion cells causes characteristic pathological cupping (increased cup-to-disc ratio > 0.6) and insidious peripheral visual field loss (arcuate scotomas), culminating in irreversible blindness if untreated.',
              'চোখের অভ্যন্তরীণ চাপ স্বাভাবিকের চেয়ে বৃদ্ধি পেলে (২১ মিমি পারদের বেশি) অপটিক স্নায়ুর মাথার রক্তনালী চেপে যায় এবং স্নায়ুতন্তুগুলো ধীরে ধীরে মরে যেতে থাকে। সময়ের সাথে সাথে অপটিক স্নায়ুর কাপ ও ডিস্কের অনুপাত অস্বাভাবিক বৃদ্ধি পায় (০.৬ এর বেশি) এবং রোগীর বাইরের দিকের দৃষ্টি ধীরে ধীরে নষ্ট হতে হতে সম্পূর্ণ অন্ধত্বে রূপ নেয়।'
            ),
          ],
        },
        {
          id: 'practice',
          heading: l('Diagnostic Audiology and Ototoxic Sensory Neuropathy', 'ডায়াগনস্টিক অডিওলজি এবং বিষাক্ত ওষুধের কানের স্নায়ুক্ষয়'),
          paragraphs: [
            l(
              'Diagnostic audiological evaluation differentiates conductive hearing loss, cochlear hair cell sensory loss, and retrocochlear eighth-nerve neural pathology. Pure-tone audiometry measures both air-conduction and bone-conduction thresholds across frequencies from 250 Hz to 8000 Hz. An air-bone gap exceeding 10 dB confirms a conductive component localized to the external canal or middle ear ossicular chain.',
              'কানের আধুনিক অডিওমেট্রি পরীক্ষা বহিঃকর্ণের সমস্যা, ককলিয়ার কোষের ক্ষতি এবং অষ্টম স্নায়ুর টিউমারের মধ্যে সুস্পষ্ট পার্থক্য নির্ণয় করে। পিওর-টোন অডিওমেট্রিতে বিভিন্ন ফ্রিকোয়েন্সিতে বাতাস ও হাড়ের মাধ্যমে শোনার ক্ষমতা পরিমাপ করা হয়; যদি বাতাসের চেয়ে হাড়ে বেশি শোনা যায় (এয়ার-বোন গ্যাপ ১০ ডেসিবেলের বেশি), তবে তা মধ্যকর্ণের অস্থির কোনো যান্ত্রিক গোলযোগ নির্দেশ করে।'
            ),
            l(
              'Sensorineural deafness displays absent air-bone gaps with elevated thresholds across specific frequencies: aminoglycosides (gentamicin) and cisplatin chemotherapy selectively damage high-frequency outer hair cells at the cochlear base, producing characteristic downward-sloping high-frequency hearing loss. In contrast, unilateral asymmetrical sensorineural hearing loss with speech discrimination impairment demands urgent MRI evaluation to rule out a vestibular schwannoma (acoustic neuroma) within the cerebellopontine angle.',
              'সেন্সরিনিউরাল বধিরতায় এয়ার-বোন গ্যাপ থাকে না বরং উভয় পথেই শোনার ক্ষমতা কমে যায়: কিছু বিষাক্ত অ্যান্টিবায়োটিক ও কেমোথেরাপির ওষুধ ককলিয়ার গোড়ার চুলসদৃশ কোষ ধ্বংস করে উচ্চ কম্পাঙ্কের শব্দ শোনার ক্ষমতা কেড়ে নেয়। অন্যদিকে হঠাৎ এক কানে কথা বোঝার ক্ষমতা কমে গেলে বা ভারসাম্য হারালে অবিলম্বে এমআরআই করে সেরেবেলোপনটাইন অ্যাঙ্গেলে কোনো স্নায়ু টিউমার (অ্যাকোস্টিক নিউরোমা) আছে কিনা তা পরীক্ষা করতে হয়।'
            ),
          ],
        },
      ],
    },
  },
  diagram: {
    accessibleDescription: l(
      'An accessible four-part schematic of the special senses: ocular refractive optics, cochlear tonotopic basilar membrane, vestibular balance sensing, and the chemical olfactory/taste receptors.',
      'বিশেষ ইন্দ্রিয়ের ৪টি সহজলভ্য স্তর: চোখের আলো প্রতিসরণ মাধ্যম, কানের ফ্রিকোয়েন্সি বিভাজন যন্ত্র, ভেস্টিবুলার ভারসাম্য কেন্দ্র এবং ঘ্রাণ ও স্বাদের রাসায়নিক সংবেদক।'
    ),
    steps: [
      l(
        '1. The cornea and crystalline lens focus photons onto retinal rods and foveal cones to initiate phototransduction.',
        '১. কর্নিয়া ও লেন্স আলোকে রেটিনার রড ও কোন কোষে ফেলে দৃষ্টি সংকেত শুরু করে।'
      ),
      l(
        '2. Auditory ossicles amplify sound waves to drive cochlear perilymph waves that tonotopically deflect the basilar membrane.',
        '২. মধ্যকর্ণের তিনটি হাড় শব্দ বাড়িয়ে ককলিয়ার তরলে ঢেউ তোলে যা শব্দের ফ্রিকোয়েন্সি নিখুঁতভাবে আলাদা করে।'
      ),
      l(
        '3. Semicircular canal cupulae and otolithic maculae sense angular and linear head accelerations to maintain balance.',
        '৩. অর্ধবৃত্তাকার নালি ও ওটোলিথ পাথর মহাকর্ষ ও গতির সংকেত দিয়ে শরীরের ভারসাম্য রক্ষা করে।'
      ),
      l(
        '4. Olfactory sensory neurons and lingual taste buds detect chemical odorants and tastants to guide ingestion and memory.',
        '৪. নাকের স্নায়ু ও জিহ্বার স্বাদকুঁড়ি রাসায়নিক উপাদান শনাক্ত করে ঘ্রাণ, স্বাদ এবং স্মৃতি জাগ্রত করে।'
      ),
    ],
  },
  assessment: {
    question: l(
      'A 68-year-old male with gradual progressive visual loss undergoes automated perimetry, which demonstrates a complete left homonymous hemianopsia (loss of vision in the left visual field of both eyes). Neuroimaging reveals an ischemic stroke. Which anatomical structure in the visual pathway has been infarcted?',
      'দৃষ্টিশক্তি কমে যাওয়া ৬৮ বছর বয়সী এক ব্যক্তির পরীক্ষায় দেখা গেল তার দুই চোখেরই বাম পাশের দৃষ্টি পুরোপুরি নষ্ট হয়ে গেছে (Left homonymous hemianopsia)। মস্তিষ্কের এমআরআই-তে স্ট্রোক দেখা গেল। দৃষ্টিপথের কোন শারীরস্থানিক অংশে এই স্ট্রোকটি হয়েছে?'
    ),
    options: [
      l('Right optic tract or right optic radiation', 'ডান অপটিক ট্র্যাক্ট বা ডান অপটিক রেডিয়েশন'),
      l('Optic chiasm central decussation', 'অপটিক কায়াজমার কেন্দ্রীয় ক্রসিং'),
      l('Left optic nerve trunk', 'বাম অপটিক স্নায়ু'),
      l('Left lateral geniculate nucleus of the thalamus', 'থ্যালামাসের বাম ল্যাটারাল জেনিকুলেট নিউক্লিয়াস'),
    ],
    correctIndex: 0,
    explanation: l(
      'Homonymous hemianopsia (loss of the same visual field in both eyes) is caused by a retrochiasmatic lesion affecting fibers behind the optic chiasm. A lesion of the right optic tract, right lateral geniculate nucleus, right optic radiations, or right primary visual cortex deprives the brain of visual input from the left visual field (temporal visual field of the left eye and nasal visual field of the right eye), producing a complete left homonymous hemianopsia.',
      'দুই চোখের একই পাশের দৃষ্টি নষ্ট হওয়াকে হোমোনিমাস হেমিয়ানপসিয়া বলে যা অপটিক কায়াজমার পেছনের যে কোনো অংশের ক্ষতির কারণে ঘটে। ডান অপটিক ট্র্যাক্ট বা ডান অপটিক রেডিয়েশন ক্ষতিগ্রস্ত হলে উভয় চোখের বাম পাশের দৃষ্টির তথ্য মস্তিষ্কে পৌঁছাতে পারে না, যার ফলে বাম হোমোনিমাস হেমিয়ানপসিয়া তৈরি হয়।'
    ),
  },
}
