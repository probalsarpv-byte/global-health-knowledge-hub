import { ArrowLeft, ArrowRight, BookOpen, Dna } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlobalControls } from '../../components/GlobalControls'
import { BackButton } from '../../components/BackButton'
import { RouteFrame } from '../../components/RouteFrame'
import { lessons } from '../../content/lessons'
import { useLocale } from '../../i18n/LocaleContext'

export function KnowledgeIndex() {
  const { locale, t } = useLocale()
  const bn = locale === 'bn'
  return <RouteFrame><main className="public-page knowledge-page">
    <header className="public-header"><Link className="brand" to="/"><span className="brand-mark"><Dna size={21} /></span><span className="brand-name">{t('brand')}<small>{t('brandSub')}</small></span></Link><nav className="knowledge-header-nav" aria-label={bn ? 'জ্ঞানভান্ডার নেভিগেশন' : 'Knowledge navigation'}><BackButton fallback="/" /><GlobalControls /></nav></header>
    <section className="knowledge-intro"><Link className="knowledge-back" to="/learn"><ArrowLeft size={15} />{bn ? 'স্টাডি হাবে ফিরুন' : 'Back to Study Hub'}</Link><span className="section-kicker">{bn ? 'স্টাডি হাব · জ্ঞান' : 'STUDY HUB · KNOWLEDGE'}</span><h1>{t('knowledgeTitle')}</h1><p>{t('knowledgeDescription')}</p></section>
    <section className="knowledge-list" aria-label={t('knowledgeTitle')}>
      {lessons.map((lesson) => {
        const subjectName = lesson.subject === 'anatomy' ? (bn ? 'অ্যানাটমি' : 'Anatomy') : lesson.subject === 'nutrition' ? (bn ? 'পুষ্টিবিজ্ঞান' : 'Nutrition science') : (bn ? 'বিপাকবিজ্ঞান' : 'Metabolism')
        const href = `/learn/${lesson.subject}`
        return <article className="knowledge-card" key={lesson.id}><span className="knowledge-card-icon"><BookOpen size={20} /></span><div><span>{subjectName} · {bn ? 'সংস্করণ' : 'Version'} {lesson.version}</span><h2><Link to={href}>{bn ? lesson.title.bn : lesson.title.en}</Link></h2><p>{bn ? lesson.summary.bn : lesson.summary.en}</p><small>{bn ? 'ইংরেজি ও বাংলায় · ভিত্তি, একাডেমিক ও উন্নত স্তর' : 'English and Bengali · Foundation, Academic and Advanced levels'}</small></div><Link className="knowledge-card-action" to={href} aria-label={`${bn ? 'পাঠ খুলুন' : 'Open lesson'}: ${bn ? lesson.title.bn : lesson.title.en}`}><ArrowRight size={18} /></Link></article>
      })}
    </section>
    <footer className="knowledge-footer"><span>{bn ? 'শিক্ষামূলক বিষয়বস্তু; ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়।' : 'Educational content; not individual medical or nutrition advice.'}</span><Link to="/learn">{bn ? 'স্টাডি হাব' : 'Study Hub'}<ArrowRight size={14} /></Link></footer>
  </main></RouteFrame>
}
