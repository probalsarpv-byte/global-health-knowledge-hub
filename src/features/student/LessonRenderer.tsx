import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import type { ContentDepth, LessonTopic } from '../../content/lessonSchema'
import { CellOrganelleDiagram } from './CellOrganelleDiagram'
import { AnatomyExplorer } from '../anatomy/AnatomyExplorer'
import { Organ3DExplorer } from '../anatomy/Organ3DExplorer'
import { InteractiveAnatomyDiagram } from '../anatomy/InteractiveAnatomyDiagram'
import { InteractivePathwayDiagram } from '../metabolism/InteractivePathwayDiagram'
import { InteractiveNutrientDiagram } from '../nutrition/InteractiveNutrientDiagram'
import {
  buildChapterCitationMap,
  EndOfChapterReferences,
  NumberedCitation,
  parseInlineCitationTokens,
} from '../../components/citations'

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

  const citationMap = useMemo(
    () => buildChapterCitationMap(lesson.id, lesson.references, lesson.evidenceBySection),
    [lesson.id, lesson.references, lesson.evidenceBySection]
  )

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
    if (target) {
      if (target instanceof HTMLDetailsElement) {
        target.open = true
      }
      if (typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const renderParagraphContent = (text: string, paraKey: string) => {
    const tokens = parseInlineCitationTokens(text)
    if (tokens.length === 1 && tokens[0].type === 'text') {
      return text
    }
    return tokens.map((token, idx) => {
      if (token.type === 'text') {
        return <span key={idx}>{token.value}</span>
      }
      return (
        <NumberedCitation
          key={idx}
          chapterId={lesson.id}
          referenceIds={token.refIds}
          citationMap={citationMap}
          instanceId={`${paraKey}-${idx}`}
          locale={lang}
        />
      )
    })
  }

  const activeTocEntries = useMemo(() => {
    if (currentLevel?.sections?.length) {
      return currentLevel.sections.map((section, idx) => ({
        id: `toc-${depth}-${section.id}-${idx}`,
        label: section.heading,
        sectionId: section.id,
      }))
    }
    return chapter?.toc ?? []
  }, [currentLevel, depth, chapter])

  return <article className="lesson-document">
    <header className="lesson-heading">
      <span className="section-kicker">STUDY HUB · KNOWLEDGE</span>
      <h1>{contentLabel(lesson.title)}</h1><p>{contentLabel(lesson.summary)}</p>
      <div className="lesson-review-meta"><span>{label('Version', 'সংস্করণ')} {lesson.version}</span><span>{label('Last reviewed', 'সর্বশেষ পর্যালোচনা')} <time dateTime={lesson.lastReviewed}>{new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${lesson.lastReviewed}T00:00:00Z`))}</time></span><span className="lesson-review-state">{label('Source checked · independent subject review pending', 'উৎস যাচাই করা · স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা বাকি')}</span><span>{label('Evidence: established textbook synthesis', 'প্রমাণের ধরন: প্রতিষ্ঠিত পাঠ্যপুস্তকীয় সংশ্লেষ')}</span></div>
      <p className="lesson-review-note">{label('Educational chapter; not individual medical or nutrition advice. This source-checked content has not yet completed independent subject-matter review.', 'শিক্ষামূলক অধ্যায়; ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়। এই উৎস-যাচাইকৃত বিষয়বস্তুর স্বতন্ত্র বিষয়বিশেষজ্ঞ পর্যালোচনা এখনো সম্পন্ন হয়নি।')}</p>
    </header>

    {chapter && <><section className="lesson-reading-progress" aria-label={label('Chapter reading progress', 'অধ্যায় পড়ার অগ্রগতি')}><div><strong>{label('Chapter progress', 'অধ্যায়ের অগ্রগতি')}</strong><span>{readingProgress}%</span></div><progress aria-label={label('Chapter reading progress', 'অধ্যায় পড়ার অগ্রগতি')} max="100" value={readingProgress}>{readingProgress}%</progress></section><nav className="lesson-toc" aria-label={label('Table of contents', 'সূচিপত্র')}><div><span className="section-kicker">{label('CHAPTER MAP · ', 'অধ্যায়ের মানচিত্র · ')}<strong style={{ textTransform: 'uppercase' }}>{contentLabel(currentLevel.label)}</strong></span><h2>{label('Table of contents', 'সূচিপত্র')}</h2></div><ol>{activeTocEntries.map((entry, index) => <li key={entry.id}><button type="button" onClick={() => jumpTo(entry.sectionId)}><span>{index + 1}</span>{contentLabel(entry.label)}</button></li>)}</ol></nav></>}

    <section className="lesson-objectives" aria-labelledby="lesson-objectives-heading"><h2 id="lesson-objectives-heading">{label('Learning objectives', 'শেখার লক্ষ্য')}</h2><ul>{lesson.objectives.map((objective, index) => <li key={index}>{contentLabel(objective)}</li>)}</ul><div className="lesson-topic-links"><span><b>{label('Prerequisites', 'পূর্বশর্ত')}:</b> {lesson.prerequisiteIds.length ? lesson.prerequisiteIds.map((id) => <span key={id}>{id}</span>) : label('No formal prerequisite', 'আনুষ্ঠানিক পূর্বশর্ত নেই')}</span><span><b>{label('Related topics', 'সম্পর্কিত বিষয়')}:</b> {lesson.relatedTopicIds.map((id) => { const title = id === 'topic.macronutrient.digestion' ? 'Macronutrient Digestion' : 'Glucose Metabolism'; const slug = id === 'topic.macronutrient.digestion' ? 'nutrition' : 'metabolism'; return <Link key={id} to={`/learn/${slug}`}>{title}</Link> })}</span></div></section>

    <section className="lesson-depth" aria-label={label('Choose lesson depth', 'পাঠের গভীরতা বাছুন')}><h2>{label('Explore by depth', 'শেখার স্তর')}</h2><div className="lesson-depth-tabs" role="group" aria-label={label('Content depth', 'বিষয়বস্তুর গভীরতা')}>{depthOrder.map((item) => <button type="button" key={item} aria-pressed={depth === item} onClick={() => setDepth(item)}>{contentLabel(lesson.levels[item].label)}</button>)}</div></section>

    {chapter && Boolean(chapter.organelles?.length) && <CellOrganelleDiagram chapter={chapter} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.organ3DExplorer && <Organ3DExplorer explorer={lesson.organ3DExplorer} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.anatomyExplorer && <AnatomyExplorer explorer={lesson.anatomyExplorer} locale={lang} onSectionSelect={jumpTo} />}
    {lesson.interactiveDiagram && (lesson.subject === 'metabolism' ? (
      <InteractivePathwayDiagram diagram={lesson.interactiveDiagram} locale={lang} onSectionSelect={jumpTo} />
    ) : lesson.subject === 'nutrition' ? (
      <InteractiveNutrientDiagram diagram={lesson.interactiveDiagram} locale={lang} onSectionSelect={jumpTo} />
    ) : (
      <InteractiveAnatomyDiagram diagram={lesson.interactiveDiagram} locale={lang} onSectionSelect={jumpTo} />
    ))}

    <section className="lesson-chapter" aria-label={contentLabel(currentLevel.label)}>{currentLevel.sections.map((item) => <details className="lesson-section" id={`lesson-section-${item.id}`} key={`${depth}-${item.id}`} open><summary>{contentLabel(item.heading)}</summary><div className="lesson-section-body">{item.paragraphs.map((paragraph, index) => <p key={index}>{renderParagraphContent(contentLabel(paragraph), `p-${item.id}-${index}`)}</p>)}{item.bullets && <ul>{item.bullets.map((bullet, index) => <li key={index}>{renderParagraphContent(contentLabel(bullet), `b-${item.id}-${index}`)}</li>)}</ul>}{Boolean(lesson.evidenceBySection[item.id]?.length) && <div className="section-citations-bar"><span className="section-citations-label">{label('Evidence: ', 'প্রমাণ: ')}</span><NumberedCitation chapterId={lesson.id} referenceIds={lesson.evidenceBySection[item.id]} citationMap={citationMap} instanceId={`sec-${item.id}`} locale={lang} /></div>}</div></details>)}</section>

    {chapter && <><section className="lesson-study-tools" aria-labelledby="lesson-terms-heading"><div className="lesson-tool-panel"><h2 id="lesson-terms-heading">{label('Key terminology', 'মূল পরিভাষা')}</h2><dl>{chapter.terms.map((term) => <div key={term.term.en}><dt>{contentLabel(term.term)}</dt><dd>{contentLabel(term.definition)}</dd></div>)}</dl></div><div className="lesson-tool-panel"><h2>{label('Worked reasoning', 'সমাধানসহ যুক্তি')}</h2>{chapter.workedExamples.map((example) => <details key={example.title.en}><summary>{contentLabel(example.title)}</summary><ol>{example.steps.map((step) => <li key={step.en}>{contentLabel(step)}</li>)}</ol><p>{contentLabel(example.conclusion)}</p></details>)}</div></section><section className="lesson-checkpoints" aria-labelledby="lesson-checkpoints-heading"><h2 id="lesson-checkpoints-heading">{label('Interactive checkpoints', 'ইন্টার‌্যাক্টিভ checkpoint')}</h2>{chapter.checkpoints.map((checkpoint) => <details key={checkpoint.question.en}><summary>{contentLabel(checkpoint.question)}</summary><p>{contentLabel(checkpoint.answer)}</p></details>)}</section></>}

    <section className="lesson-exploration" aria-labelledby="lesson-exploration-heading"><h2 id="lesson-exploration-heading">{label('Interactive exploration', 'ইন্টার‌্যাক্টিভ অনুসন্ধান')}</h2><p className="lesson-diagram-description">{contentLabel(lesson.diagram.accessibleDescription)}</p><ol className="lesson-pathway" aria-label={contentLabel(lesson.diagram.accessibleDescription)}>{lesson.diagram.steps.map((step, index) => <li key={index} className={index === diagramStep ? 'pathway-current' : ''}><button type="button" aria-current={index === diagramStep ? 'step' : undefined} onClick={() => setDiagramStep(index)}>{contentLabel(step)}</button></li>)}</ol><div className="lesson-step-controls"><button type="button" onClick={() => setDiagramStep((step) => Math.max(0, step - 1))} disabled={diagramStep === 0}>{label('Previous step', 'আগের ধাপ')}</button><span aria-live="polite">{new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(diagramStep + 1)} / {new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-US').format(lesson.diagram.steps.length)}</span><button type="button" onClick={() => setDiagramStep((step) => Math.min(lesson.diagram.steps.length - 1, step + 1))} disabled={diagramStep === lesson.diagram.steps.length - 1}>{label('Next step', 'পরের ধাপ')}</button></div></section>

    <section className="lesson-assessment" aria-labelledby="lesson-assessment-heading"><h2 id="lesson-assessment-heading">{label('Knowledge assessment', 'জ্ঞান যাচাই')}</h2><fieldset><legend>{contentLabel(lesson.assessment.question)}</legend>{lesson.assessment.options.map((option, index) => <label key={index}><input type="radio" name={`answer-${lesson.id}`} checked={answer === index} onChange={() => setAnswer(index)} />{contentLabel(option)}</label>)}</fieldset>{answer !== null && <p className={answer === lesson.assessment.correctIndex ? 'lesson-answer-correct' : 'lesson-answer-review'} role="status">{answer === lesson.assessment.correctIndex ? label('Correct. ', 'সঠিক। ') : label('Review this point. ', 'বিষয়টি আবার দেখুন। ')}{contentLabel(lesson.assessment.explanation)}</p>}</section>

    <EndOfChapterReferences chapterId={lesson.id} citationMap={citationMap} locale={lang} />
  </article>
}

