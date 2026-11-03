import { Activity, ArrowLeft, ArrowRight, BookOpen, Dna, Layers3, Utensils } from 'lucide-react'
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
    <section className="knowledge-academies" aria-label={bn ? 'অ্যাকাডেমি পাঠ্যক্রম' : 'Curriculum Academies'}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <Link to="/learn/dietetics" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ display: 'inline-flex', padding: '6px', borderRadius: '8px', background: 'var(--panel-soft)', color: 'var(--accent-dietetics, #E11D48)' }}><Layers3 size={20} /></span>
            <span className="pill pill-mint" style={{ fontSize: '10px' }}>{bn ? '১০/৩২ অধ্যায় · V2.8' : '10 / 32 Chapters · V2.8'}</span>
          </div>
          <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{bn ? 'ডায়েটেটিক্স অ্যাকাডেমি' : 'Dietetics Academy'}</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bn ? 'ক্লিনিক্যাল অ্যাসেসমেন্ট, eNCPT PES ও প্রেসক্রিপশন ইঞ্জিন।' : 'Clinical assessment, standardized eNCPT PES, and MNT prescription engines.'}</p>
        </Link>
        <Link to="/learn/nutrition" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ display: 'inline-flex', padding: '6px', borderRadius: '8px', background: 'var(--panel-soft)', color: 'var(--accent-nutrition)' }}><Utensils size={20} /></span>
            <span className="pill" style={{ fontSize: '10px' }}>{bn ? '২৭ অধ্যায়' : '27 Chapters'}</span>
          </div>
          <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{bn ? 'পুষ্টিবিজ্ঞান অ্যাকাডেমি' : 'Nutrition Academy'}</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bn ? 'ম্যাক্রোনিউট্রিয়েন্ট ও মাইক্রোনিউট্রিয়েন্ট বায়োএনার্জেটিক্স।' : 'Macronutrient kinetics, micronutrients, and clinical malnutrition.'}</p>
        </Link>
        <Link to="/learn/metabolism" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ display: 'inline-flex', padding: '6px', borderRadius: '8px', background: 'var(--panel-soft)', color: 'var(--accent-metabolism, #D97706)' }}><Activity size={20} /></span>
            <span className="pill" style={{ fontSize: '10px' }}>{bn ? '৩৬ অধ্যায়' : '36 Chapters'}</span>
          </div>
          <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{bn ? 'মেটাবলিজম অ্যাকাডেমি' : 'Metabolism Academy'}</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bn ? 'গ্লুকোজ ও শক্তি বিপাকের পূর্ণাঙ্গ জৈবরাসায়নিক গতিপথ।' : 'Biochemical fuel flux, endocrine regulation, and inborn errors.'}</p>
        </Link>
        <Link to="/learn/anatomy" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ display: 'inline-flex', padding: '6px', borderRadius: '8px', background: 'var(--panel-soft)', color: 'var(--accent-anatomy)' }}><BookOpen size={20} /></span>
            <span className="pill" style={{ fontSize: '10px' }}>{bn ? '২৮ অধ্যায়' : '28 Chapters'}</span>
          </div>
          <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.1rem' }}>{bn ? 'অ্যানাটমি অ্যাকাডেমি' : 'Anatomy Academy'}</h3>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bn ? 'দেহতন্ত্র, কলা ও ত্রিমাত্রিক শারীরিক কাঠামো।' : 'Human body systems, cross-sectional anatomy, and clinical structures.'}</p>
        </Link>
      </div>
    </section>
    <section className="knowledge-list" aria-label={t('knowledgeTitle')}>
      {lessons.map((lesson) => {
        const subjectName = lesson.subject === 'anatomy' ? (bn ? 'অ্যানাটমি' : 'Anatomy') : lesson.subject === 'nutrition' ? (bn ? 'পুষ্টিবিজ্ঞান' : 'Nutrition science') : (bn ? 'বিপাকবিজ্ঞান' : 'Metabolism')
        const href = lesson.subject === 'anatomy' ? `/learn/anatomy/lessons/${lesson.slug}` : `/learn/${lesson.subject}`
        return <article className="knowledge-card" key={lesson.id}><span className="knowledge-card-icon"><BookOpen size={20} /></span><div><span>{subjectName} · {bn ? 'সংস্করণ' : 'Version'} {lesson.version}</span><h2><Link to={href}>{bn ? lesson.title.bn : lesson.title.en}</Link></h2><p>{bn ? lesson.summary.bn : lesson.summary.en}</p><small>{bn ? 'ইংরেজি ও বাংলায় · ভিত্তি, একাডেমিক ও উন্নত স্তর' : 'English and Bengali · Foundation, Academic and Advanced levels'}</small></div><Link className="knowledge-card-action" to={href} aria-label={`${bn ? 'পাঠ খুলুন' : 'Open lesson'}: ${bn ? lesson.title.bn : lesson.title.en}`}><ArrowRight size={18} /></Link></article>
      })}
    </section>
    <footer className="knowledge-footer"><span>{bn ? 'শিক্ষামূলক বিষয়বস্তু; ব্যক্তিগত চিকিৎসা বা পুষ্টি-পরামর্শ নয়।' : 'Educational content; not individual medical or nutrition advice.'}</span><Link to="/learn">{bn ? 'স্টাডি হাব' : 'Study Hub'}<ArrowRight size={14} /></Link></footer>
  </main></RouteFrame>
}
