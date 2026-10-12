import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import type { ContentDepth, LessonTopic } from '../../content/lessonSchema'
import { CellOrganelleDiagram } from './CellOrganelleDiagram'
import { AnatomyExplorer } from '../anatomy/AnatomyExplorer'
import { Organ3DExplorer } from '../anatomy/Organ3DExplorer'
import { InteractiveAnatomyDiagram } from '../anatomy/InteractiveAnatomyDiagram'
import { InteractivePathwayDiagram } from '../metabolism/InteractivePathwayDiagram'

const depthOrder: ContentDepth[] = ['foundation', 'academic', 'advanced']

export function LessonRenderer({ lesson }: { lesson: LessonTopic }) {
  const { locale } = useLocale()
  const [depth, setDepth] = useState<ContentDepth>('foundation')
  const [diagramStep, setDiagramStep] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)
  const lang = locale === 'bn' ? 'bn' : 'en'
  const label = (english: string, bengali = english) => locale === 'bn' ? bengali : english
  const currentLevel = lesson.levels[depth]
  const contentLabel = (value: { en: string; bn: string }) => value[lang]
  const chapter = lesson.chapter

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setReadingProgress(max <= 0 ? 100 : Math.min(100, Math.round((window.scrollY / max) * 100)))
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  const jumpTo = (sectionId: string) => {
    const target = document.getElementById(`lesson-section-${sectionId}`)
    if (target && typeof target.scrollIntoView === 'function') target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <article className="lesson-document">
    <header className="lesson-heading">
      <span className="section-kicker">STUDY HUB · KNOWLEDGE</span>
      <h1>{contentLabel(lesson.title)}</h1><p>{contentLabel(lesson.summary)}</p>
      <div className="lesson-review-meta"><span>{label('Version', 'সংস্করণ')} {lesson.version}</span><span>{label('Last reviewed', 'সর্বশেষ পর্যালোচনা')} <time dateTime={lesson.lastReviewed}>{new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${lesson.lastReviewed}T00:00:00Z`))}</time></span><span className="lesson-review-state">{label('Source checked · independent subject review pending', 'উৎস যাচাই করা · স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা বাকি')}</span><span>{label('Evidence: established textbook synthesis', 'প্রমাণের ধরন: প্রতিষ্ঠিত পাঠ্যপুস্তকীয় সংশ্লেষ')}</span></div>
      <p className="lesson-review-note">{label('Educational chapter; not individual medical or nutrition advice. This source-checked content has not yet completed independent subject-matter review.', 'শিক্ষামূলক অধ্যায়; ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়। এই উৎস-যাচাইকৃত বিষয়বস্তুর স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা এখনো সম্পন্ন হয়নি।')}</p>
    </header>

    {chapter && <><section className="lesson-reading-progress" aria-label={label('Chapter reading progress', 'অধ্যায় পড়ার অগ্রগতি')}><div><strong>{label('Chapter progress', 'অধ্যায়ের অগ্রগতি')}</strong><span>{readingProgress}%</span></div><progress aria-label={label('Chapter reading progress', 'অধ্যায় পড়ার অগ্রগতি')} max="100" value={readingProgress}>{readingProgress}%</progress></section><nav className="lesson-toc" aria-label={label('Table of contents', 'সূচিপত্র')}><div><span className="section-kicker">{label('CHAPTER MAP', 'অধ্যায়ের মানচিত্র')}</span><h2>{label('Table of contents', 'সূচিপত্র')}</h2></div><ol>{chapter.toc.map((entry, index) => <li key={entry.id}><button type="button" onClick={() => jumpTo(entry.sectionId)}><span>{index + 1}</span>{contentLabel(entry.label)}</button></li>)}</ol></nav></>}

    <section className="lesson-objectives" aria-labelledby="lesson-objectives-heading"><h2 id="lesson-objectives-heading">{label('Learning objectives', 'শেখার লক্ষ্য')}</h2><ul>{lesson.objectives.map((objective, index) => <li key={index}>{contentLabel(objective)}</li>)}</ul><div className="lesson-topic-links"><span><b>{label('Prerequisites', 'পূর্বশর্ত')}:</b> {lesson.prerequisiteIds.length ? lesson.prerequisiteIds.map((id) => <span key={id}>{id}</span>) : label('No formal prerequisite', 'আনুষ্ঠানিক পূর্বশর্ত নেই')}</span><span><b>{label('Related topics', 'সম্পর্কিত বিষয়')}:</b> {lesson.relatedTopicIds.map((id) => { const title = id === 'topic.macronutrient.digestion' ? 'Macronutrient Digestion' : 'Glucose Metabolism'; const slug = id === 'topic.macronutrient.digestion' ? 'nutrition' : 'metabolism'; return <Link key={id} to={`/learn/${slug}`}>{title}</Link> })}</span></div></section>

    <section className="lesson-depth" aria-label={label('Choose lesson depth', 'পাঠের গভীরতা বাছুন')}><h2>{label('Explore by depth', 'শেখার স্তর')}</h2><div className="lesson-depth-tabs" role="group" aria-label={label('Content depth', 'বিষয়বস্তুর গভীরতা')}>{depthOrder.map((item) => <button type="button" key={item} aria-pressed={depth === item} onClick={() => setDepth(item)}>{contentLabel(lesson.levels[item].label)}</button>)}</div></section>

    {chapter && chapter.organelles.length > 0 && <CellOrganelleDiagram chapter={chapter} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.organ3DExplorer && <Organ3DExplorer explorer={lesson.organ3DExplorer} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.anatomyExplorer && <AnatomyExplorer explorer={lesson.anatomyExplorer} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.interactiveDiagram && (lesson.subject === 'metabolism' ? (
      <InteractivePathwayDiagram diagram={lesson.interactiveDiagram} locale={lang} onSectionSelect={jumpTo} />
    ) : (
      <InteractiveAnatomyDiagram diagram={lesson.interactiveDiagram} locale={lang} onSectionSelect={jumpTo} />
    ))}

    <section className="lesson-chapter" aria-label={contentLabel(currentLevel.label)}>{currentLevel.sections.map((item) => <details className="lesson-section" id={`lesson-section-${item.id}`} key={`${depth}-${item.id}`} open><summary>{contentLabel(item.heading)}</summary><div className="lesson-section-body">{item.paragraphs.map((paragraph, index) => <p key={index}>{contentLabel(paragraph)}</p>)}{item.bullets && <ul>{item.bullets.map((bullet, index) => <li key={index}>{contentLabel(bullet)}</li>)}</ul>}<p className="lesson-section-citations">{label('Scientific support:', 'বৈজ্ঞানিক সমর্থন:')} {lesson.evidenceBySection[item.id]?.map((referenceId) => lesson.references.find((reference) => reference.id === referenceId)).filter((reference) => reference !== undefined).map((reference) => <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">{reference.title}</a>)}</p></div></details>)}</section>

    {chapter && <><section className="lesson-study-tools" aria-labelledby="lesson-terms-heading"><div className="lesson-tool-panel"><h2 id="lesson-terms-heading">{label('Key terminology', 'মূল পরিভাষা')}</h2><dl>{chapter.terms.map((term) => <div key={term.term.en}><dt>{contentLabel(term.term)}</dt><dd>{contentLabel(term.definition)}</dd></div>)}</dl></div><div className="lesson-tool-panel"><h2>{label('Worked reasoning', 'সমাধানসহ যুক্তি')}</h2>{chapter.workedExamples.map((example) => <details key={example.title.en}><summary>{contentLabel(example.title)}</summary><ol>{example.steps.map((step) => <li key={step.en}>{contentLabel(step)}</li>)}</ol><p>{contentLabel(example.conclusion)}</p></details>)}</div></section><section className="lesson-checkpoints" aria-labelledby="lesson-checkpoints-heading"><h2 id="lesson-checkpoints-heading">{label('Interactive checkpoints', 'ইন্টার‌্যাক্টিভ checkpoint')}</h2>{chapter.checkpoints.map((checkpoint) => <details key={checkpoint.question.en}><summary>{contentLabel(checkpoint.question)}</summary><p>{contentLabel(checkpoint.answer)}</p></details>)}</section></>}

    <section className="lesson-exploration" aria-labelledby="lesson-exploration-heading"><h2 id="lesson-exploration-heading">{label('Interactive exploration', 'ইন্টার‌্যাক্টিভ অনুসন্ধান')}</h2><p className="lesson-diagram-description">{contentLabel(lesson.diagram.accessibleDescription)}</p><ol className="lesson-pathway" aria-label={contentLabel(lesson.diagram.accessibleDescription)}>{lesson.diagram.steps.map((step, index) => <li key={index} className={index === diagramStep ? 'pathway-current' : ''}><button type="button" aria-current={index === diagramStep ? 'step' : undefined} onClick={() => setDiagramStep(index)}>{contentLabel(step)}</button></li>)}</ol><div className="lesson-step-controls"><button type="button" onClick={() => setDiagramStep((step) => Math.max(0, step - 1))} disabled={diagramStep === 0}>{label('Previous step', 'আগের ধাপ')}</button><span aria-live="polite">{new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(diagramStep + 1)} / {new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(lesson.diagram.steps.length)}</span><button type="button" onClick={() => setDiagramStep((step) => Math.min(lesson.diagram.steps.length - 1, step + 1))} disabled={diagramStep === lesson.diagram.steps.length - 1}>{label('Next step', 'পরের ধাপ')}</button></div></section>

    <section className="lesson-assessment" aria-labelledby="lesson-assessment-heading"><h2 id="lesson-assessment-heading">{label('Knowledge assessment', 'জ্ঞান যাচাই')}</h2><fieldset><legend>{contentLabel(lesson.assessment.question)}</legend>{lesson.assessment.options.map((option, index) => <label key={index}><input type="radio" name={`answer-${lesson.id}`} checked={answer === index} onChange={() => setAnswer(index)} />{contentLabel(option)}</label>)}</fieldset>{answer !== null && <p className={answer === lesson.assessment.correctIndex ? 'lesson-answer-correct' : 'lesson-answer-review'} role="status">{answer === lesson.assessment.correctIndex ? label('Correct. ', 'সঠিক। ') : label('Review this point. ', 'বিষয়টি আবার দেখুন। ')}{contentLabel(lesson.assessment.explanation)}</p>}</section>

    <section className="lesson-references" aria-labelledby="lesson-references-heading"><h2 id="lesson-references-heading">{label('Scientific references', 'বৈজ্ঞানিক তথ্যসূত্র')}</h2><ol>{lesson.references.map((reference) => <li key={reference.id}><span>{reference.authors} ({reference.year}). <i>{reference.title}</i>. {reference.organization}.</span> <a href={reference.url} target="_blank" rel="noreferrer">{label('Open source', 'উৎস খুলুন')}<span className="sr-only">: {reference.title}</span></a></li>)}</ol><p>{label('Reference metadata is linked to publisher or NCBI Bookshelf records; citations support the educational synthesis, not individualized care recommendations.', 'তথ্যসূত্রের metadata publisher বা NCBI Bookshelf record-এর সঙ্গে যুক্ত; citation শিক্ষামূলক সংশ্লেষ সমর্থন করে, ব্যক্তিকেন্দ্রিক care recommendation নয়।')}</p></section>
  </article>
}
