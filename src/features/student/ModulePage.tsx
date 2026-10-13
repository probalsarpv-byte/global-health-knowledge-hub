import { ArrowLeft, ArrowRight, BookOpen, FlaskConical } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { modules } from './moduleCatalog'
import { lessons } from '../../content/lessons'
import { LessonRenderer } from './LessonRenderer'

export function ModulePage() {
  const { module: slug } = useParams()
  const module = modules.find((item) => item.slug === slug)
  const { t } = useLocale()
  if (!module) return <Navigate to="/learn" replace />
  if (module.slug === 'anatomy') return <Navigate to="/learn/anatomy" replace />
  if (module.slug === 'metabolism') return <Navigate to="/learn/metabolism" replace />
  if (module.slug === 'nutrition') return <Navigate to="/learn/nutrition" replace />
  const lesson = lessons.find((item) => item.subject === module.slug)
  if (lesson) return <div className="page-wrap module-page"><LessonRenderer lesson={lesson} /></div>
  const Icon = module.icon
  return <div className="page-wrap module-page">
    <div className="module-hero">
      <span className={`module-icon tone-${module.tone}`}><Icon size={22} /></span>
      <span className="section-kicker">{t('modulePreview')}</span>
      <h1>{t(module.nameKey)}</h1>
      <p>{t(module.detailKey)}</p>
      <span className="module-lesson-count">{module.count} {t('biteSized')} · {t('demoLabel')}</span>
    </div>
    <section className="module-empty-state">
      <span className="empty-icon"><FlaskConical size={24} /></span>
      <h2>{t('comingSoon')}</h2>
      <p>{t('previewExplanation')}</p>
      <p className="science-note"><BookOpen size={15} />{t('noMedicalAdvice')}</p>
      <Link className="primary-button" to="/learn"><ArrowLeft size={16} />{t('returnHome')}<ArrowRight size={15} /></Link>
    </section>
  </div>
}
