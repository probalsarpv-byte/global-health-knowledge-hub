import { ArrowRight, Atom, Clock3, Dna, Heart, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { modules } from './moduleCatalog'

const lessons = [
  { title: 'lessonCell' as const, topic: 'topicCell' as const, duration: 'lesson12min' as const, icon: Dna, tone: 'mint', href: '/learn/biochemistry' },
  { title: 'lessonHeart' as const, topic: 'topicHeart' as const, duration: 'lesson18min' as const, icon: Heart, tone: 'peach', href: '/learn/physiology' },
  { title: 'lessonProtein' as const, topic: 'topicNutrition' as const, duration: 'lesson9min' as const, icon: Atom, tone: 'lavender', href: '/learn/nutrition' },
]

export function StudentDashboard() {
  const { t, locale } = useLocale()
  const progress = new Intl.NumberFormat(locale === 'bn' ? 'bn-BD' : 'en-US', { style: 'percent', maximumFractionDigits: 0 }).format(0.68)
  return <div className="page-wrap">
    <section className="welcome-row">
      <div><div className="eyebrow"><span className="eyebrow-line" />{t('studentDateLabel')}</div><h1>{t('welcomeTitle')}<br /><em>{t('welcomeAccent')}</em></h1><p className="welcome-subtitle">{t('welcomeSubtitle')}</p></div>
      <div className="welcome-illustration" aria-hidden="true"><div className="illustration-orbit orbit-one" /><div className="illustration-orbit orbit-two" /><div className="illustration-sun" /><div className="illustration-leaf leaf-one"><Leaf size={33} /></div><div className="illustration-leaf leaf-two"><Leaf size={24} /></div><div className="illustration-spark spark-one">✳</div><div className="illustration-spark spark-two">✧</div><div className="illustration-caption">{t('growAtYourPace')}</div></div>
    </section>

    <section className="continue-section">
      <div className="section-heading"><div><span className="section-kicker">{t('continueLabel')}</span><h2>{t('learningPath')}</h2></div><Link className="text-button" to="/learn/anatomy">{t('viewLearning')} <ArrowRight size={15} /></Link></div>
      <div className="feature-card">
        <div className="feature-art"><div className="art-label">{t('quickRefresher')}</div><div className="art-cell"><div className="cell-ring ring-a" /><div className="cell-ring ring-b" /><div className="cell-core" /><span className="cell-dot dot-a" /><span className="cell-dot dot-b" /><span className="cell-dot dot-c" /><span className="cell-dot dot-d" /></div><div className="art-orbit-label label-a">{t('cellMembrane')}</div><div className="art-orbit-label label-b">{t('cellNucleus')}</div><span className="art-star star-a">✳</span><span className="art-star star-b">✦</span></div>
        <div className="feature-info"><div className="feature-topline"><span className="pill pill-mint">{t('demoLabel')}</span><span className="updated"><Clock3 size={13} />{t('timeLeft')}</span></div><h3>{t('insideCell')}</h3><p>{t('cellDescription')}</p><div className="progress-label"><span>{t('progressLabel')}</span><b>{progress}</b></div><div className="progress-track" aria-label={`${t('progressLabel')} ${progress}`}><span style={{ width: '68%' }} /></div><Link className="primary-button" to="/learn/biochemistry">{t('continueLearning')} <ArrowRight size={16} /></Link></div>
      </div>
    </section>

    <section className="modules-section">
      <div className="section-heading"><div><span className="section-kicker">{t('exploreLabel')}</span><h2>{t('learningLibrary')}</h2></div><span className="filter-button static-filter">{modules.length} {t('allSubjects')}</span></div>
      <div className="module-grid">{modules.map(({ slug, nameKey, detailKey, count, icon: Icon, tone, progress: moduleProgress }) => <Link className={`module-card tone-${tone}`} key={slug} to={`/learn/${slug}`}><div className="module-card-top"><span className="module-icon"><Icon size={19} strokeWidth={1.75} /></span><ArrowRight size={16} className="module-arrow" /></div><h3>{t(nameKey)}</h3><p>{t(detailKey)}</p><div className="module-card-footer"><span>{new Intl.NumberFormat(locale === 'bn' ? 'bn-BD' : 'en-US').format(count)} {t('biteSized')}</span>{moduleProgress > 0 ? <span className="module-progress">{t('demoLabel')} <span className="mini-track"><i style={{ width: `${moduleProgress}%` }} /></span></span> : <span className="module-new">{t('exploreLearning')} <ArrowRight size={12} /></span>}</div></Link>)}</div>
    </section>

    <section className="recent-section"><div className="section-heading"><div><span className="section-kicker">{t('freshLibrary')}</span><h2>{t('goodPlace')}</h2></div><Link className="text-button" to="/learn/anatomy">{t('browseLessons')} <ArrowRight size={15} /></Link></div><div className="lesson-list">{lessons.map(({ title, topic, duration, icon: Icon, tone, href }, index) => <Link className="lesson-row" key={title} to={href}><span className={`lesson-icon tone-${tone}`}><Icon size={18} /></span><span className="lesson-index">0{index + 1}</span><span className="lesson-title"><b>{t(title)}</b><small>{t(topic)}</small></span><span className="lesson-time"><Clock3 size={13} />{t(duration)}</span><span className="lesson-action"><ArrowRight size={16} /></span></Link>)}</div></section>
    <footer className="page-footer"><span>{t('madeForCurious')} <span className="footer-heart">♥</span></span><span>{t('smallSteps')}</span></footer>
  </div>
}
