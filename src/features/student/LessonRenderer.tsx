import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import type { ContentDepth, LessonTopic } from '../../content/lessonSchema'

const depthOrder: ContentDepth[] = ['foundation', 'academic', 'advanced']

export function LessonRenderer({ lesson }: { lesson: LessonTopic }) {
  const { locale } = useLocale()
  const [depth, setDepth] = useState<ContentDepth>('foundation')
  const [diagramStep, setDiagramStep] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (english: string, bengali = english) => locale === 'bn' ? bengali : english
  const currentLevel = lesson.levels[depth]
  const contentLabel = (value: { en: string; bn: string }) => value[lang]
  return <article className="lesson-document">
    <header className="lesson-heading">
      <span className="section-kicker">{label('STUDY HUB · KNOWLEDGE', 'স্টাডি হাব · জ্ঞান')}</span>
      <h1>{contentLabel(lesson.title)}</h1>
      <p>{contentLabel(lesson.summary)}</p>
      <div className="lesson-review-meta">
        <span>{label('Version', 'সংস্করণ')} {lesson.version}</span>
        <span>{label('Last reviewed', 'সর্বশেষ পর্যালোচনা')} <time dateTime={lesson.lastReviewed}>{new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${lesson.lastReviewed}T00:00:00Z`))}</time></span>
        <span className="lesson-review-state">{label('Source checked · independent subject review pending', 'উৎস যাচাই করা · স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা বাকি')}</span>
        <span>{label('Evidence: established textbook synthesis', 'প্রমাণের ধরন: প্রতিষ্ঠিত পাঠ্যপুস্তকীয় সংশ্লেষ')}</span>
      </div>
      <p className="lesson-review-note">{label('Educational chapter; not individual medical or nutrition advice. This is a source-checked learning sample and has not yet completed independent subject-matter review.', 'শিক্ষামূলক অধ্যায়; ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়। এটি উৎস-যাচাইকৃত শিক্ষামূলক নমুনা, তবে স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা এখনো সম্পন্ন হয়নি।')}</p>
    </header>

    <section className="lesson-objectives" aria-labelledby="lesson-objectives-heading">
      <h2 id="lesson-objectives-heading">{label('Learning objectives', 'শেখার লক্ষ্য')}</h2>
      <ul>{lesson.objectives.map((objective, index) => <li key={index}>{contentLabel(objective)}</li>)}</ul>
      <div className="lesson-topic-links">
        <span><b>{label('Prerequisites', 'পূর্বশর্ত')}:</b> {lesson.prerequisiteIds.length ? lesson.prerequisiteIds.map((id) => <span key={id}>{label(id === 'topic.cell.structure' ? 'Cell Structure' : id === 'topic.macronutrient.digestion' ? 'Macronutrient Digestion' : 'Glucose Metabolism')}</span>) : label('No formal prerequisite', 'আনুষ্ঠানিক পূর্বশর্ত নেই')}</span>
        <span><b>{label('Related topics', 'সম্পর্কিত বিষয়')}:</b> {lesson.relatedTopicIds.map((id) => { const title = id === 'topic.cell.structure' ? 'Cell Structure' : id === 'topic.macronutrient.digestion' ? 'Macronutrient Digestion' : 'Glucose Metabolism'; const slug = id === 'topic.cell.structure' ? 'anatomy' : id === 'topic.macronutrient.digestion' ? 'nutrition' : 'metabolism'; return <Link key={id} to={`/learn/${slug}`}>{label(title, title === 'Cell Structure' ? 'কোষের গঠন' : title === 'Macronutrient Digestion' ? 'ম্যাক্রোনিউট্রিয়েন্টের পরিপাক' : 'গ্লুকোজ বিপাক')}</Link> })}</span>
      </div>
    </section>

    <section className="lesson-depth" aria-label={label('Choose lesson depth', 'পাঠের গভীরতা বাছুন')}>
      <h2>{label('Explore by depth', 'শেখার স্তর')}</h2>
      <div className="lesson-depth-tabs" role="group" aria-label={label('Content depth', 'বিষয়বস্তুর গভীরতা')}>
        {depthOrder.map((item) => <button type="button" key={item} aria-pressed={depth === item} onClick={() => setDepth(item)}>{contentLabel(lesson.levels[item].label)}</button>)}
      </div>
    </section>

    <section className="lesson-chapter" aria-label={contentLabel(currentLevel.label)}>
      {currentLevel.sections.map((section) => <details className="lesson-section" key={`${depth}-${section.id}`} open>
        <summary>{contentLabel(section.heading)}</summary>
        <div className="lesson-section-body">
          {section.paragraphs.map((paragraph, index) => <p key={index}>{contentLabel(paragraph)}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet, index) => <li key={index}>{contentLabel(bullet)}</li>)}</ul>}
          <p className="lesson-section-citations">{label('Scientific support:', 'বৈজ্ঞানিক সমর্থন:')} {lesson.evidenceBySection[section.id]?.map((referenceId) => lesson.references.find((reference) => reference.id === referenceId)).filter((reference) => reference !== undefined).map((reference) => <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">{reference.title}</a>)}</p>
        </div>
      </details>)}
    </section>

    <section className="lesson-exploration" aria-labelledby="lesson-exploration-heading">
      <h2 id="lesson-exploration-heading">{label('Interactive exploration', 'ইন্টারঅ্যাকটিভ অনুসন্ধান')}</h2>
      <p className="lesson-diagram-description">{contentLabel(lesson.diagram.accessibleDescription)}</p>
      <ol className="lesson-pathway" aria-label={contentLabel(lesson.diagram.accessibleDescription)}>{lesson.diagram.steps.map((step, index) => <li key={index} className={index === diagramStep ? 'pathway-current' : ''}><button type="button" aria-current={index === diagramStep ? 'step' : undefined} onClick={() => setDiagramStep(index)}>{contentLabel(step)}</button></li>)}</ol>
      <div className="lesson-step-controls"><button type="button" onClick={() => setDiagramStep((step) => Math.max(0, step - 1))} disabled={diagramStep === 0}>{label('Previous step', 'আগের ধাপ')}</button><span aria-live="polite">{new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(diagramStep + 1)} / {new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(lesson.diagram.steps.length)}</span><button type="button" onClick={() => setDiagramStep((step) => Math.min(lesson.diagram.steps.length - 1, step + 1))} disabled={diagramStep === lesson.diagram.steps.length - 1}>{label('Next step', 'পরের ধাপ')}</button></div>
    </section>

    <section className="lesson-assessment" aria-labelledby="lesson-assessment-heading">
      <h2 id="lesson-assessment-heading">{label('Knowledge assessment', 'জ্ঞান যাচাই')}</h2>
      <fieldset><legend>{contentLabel(lesson.assessment.question)}</legend>{lesson.assessment.options.map((option, index) => <label key={index}><input type="radio" name={`answer-${lesson.id}`} checked={answer === index} onChange={() => setAnswer(index)} />{contentLabel(option)}</label>)}</fieldset>
      {answer !== null && <p className={answer === lesson.assessment.correctIndex ? 'lesson-answer-correct' : 'lesson-answer-review'} role="status">{answer === lesson.assessment.correctIndex ? label('Correct. ', 'সঠিক। ') : label('Review this point. ', 'বিষয়টি আবার দেখুন। ')}{contentLabel(lesson.assessment.explanation)}</p>}
    </section>

    <section className="lesson-references" aria-labelledby="lesson-references-heading">
      <h2 id="lesson-references-heading">{label('Scientific references', 'বৈজ্ঞানিক তথ্যসূত্র')}</h2>
      <ol>{lesson.references.map((reference) => <li key={reference.id}><span>{reference.authors} ({reference.year}). <i>{reference.title}</i>. {reference.organization}.</span> <a href={reference.url} target="_blank" rel="noreferrer">{label('Open source', 'উৎস খুলুন')}<span className="sr-only">: {reference.title}</span></a>{reference.doi && <span> DOI: {reference.doi}</span>}</li>)}</ol>
      <p>{label('Reference metadata is checked against the linked publisher record; citations support the educational synthesis above, not individualized care recommendations.', 'তথ্যসূত্রের বিবরণ সংযুক্ত প্রকাশক-রেকর্ডের সঙ্গে যাচাই করা হয়েছে; উদ্ধৃতিগুলো উপরের শিক্ষামূলক সংশ্লেষ সমর্থন করে, ব্যক্তিকেন্দ্রিক চিকিৎসা-পরামর্শ নয়।')}</p>
    </section>
  </article>
}
