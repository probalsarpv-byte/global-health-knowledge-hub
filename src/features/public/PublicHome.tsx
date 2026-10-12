import {
  Activity,
  ArrowRight,
  Atom,
  BookOpen,
  CircleCheck,
  Compass,
  Dna,
  FlaskConical,
  HeartPulse,
  Info,
  Leaf,
  ShieldCheck,
  Utensils,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlobalControls } from '../../components/GlobalControls'
import { RouteFrame } from '../../components/RouteFrame'
import { useLocale } from '../../i18n/LocaleContext'

export function PublicHome() {
  const { t, locale } = useLocale()
  const isBn = locale === 'bn'

  const destinations = [
    {
      title: t('studyHub'),
      desc: t('studyHubDesc'),
      to: '/learn/anatomy',
      icon: BookOpen,
      accent: 'var(--accent-anatomy)',
      badge: isBn ? '২৮ অধ্যায়' : '28 Chapters',
    },
    {
      title: t('navKnowledge'),
      desc: t('knowledgeHubDesc'),
      to: '/knowledge',
      icon: Dna,
      accent: 'var(--accent-physiology)',
      badge: isBn ? 'পর্যালোচিত' : 'Peer-Reviewed',
    },
    {
      title: t('virtualLabs'),
      desc: t('virtualLabsDesc'),
      to: '/learn/anatomy',
      icon: FlaskConical,
      accent: 'var(--sci-teal)',
      badge: isBn ? 'ইন্টারঅ্যাক্টিভ' : 'Interactive',
    },
    {
      title: t('healthCalculators'),
      desc: t('healthCalculatorsDesc'),
      to: '/learn/calculators',
      icon: Activity,
      accent: 'var(--accent-calculators)',
      badge: isBn ? 'বৈজ্ঞানিক' : 'Scientific',
    },
    {
      title: t('nutritionTools'),
      desc: t('nutritionToolsDesc'),
      to: '/learn/nutrition',
      icon: Utensils,
      accent: 'var(--accent-nutrition)',
      badge: isBn ? 'শারীরবৃত্তীয়' : 'Physiological',
    },
    {
      title: t('digitalHealth'),
      desc: t('digitalHealthDesc'),
      to: '/learn/biochemistry',
      icon: Atom,
      accent: 'var(--accent-digitalHealth, #4F46E5)',
      badge: isBn ? 'প্রযুক্তি' : 'Informatics',
    },
  ]

  const pathways = [
    {
      title: t('pathwayStudents'),
      desc: t('pathwayStudentsDesc'),
      icon: BookOpen,
      badge: isBn ? 'পাঠ্যক্রম' : 'Curriculum',
    },
    {
      title: t('pathwayProfessionals'),
      desc: t('pathwayProfessionalsDesc'),
      icon: HeartPulse,
      badge: isBn ? 'ক্লিনিক্যাল' : 'Clinical',
    },
    {
      title: t('pathwayResearchers'),
      desc: t('pathwayResearchersDesc'),
      icon: FlaskConical,
      badge: isBn ? 'প্রমাণ' : 'Evidence',
    },
    {
      title: t('pathwayLearners'),
      desc: t('pathwayLearnersDesc'),
      icon: Compass,
      badge: isBn ? 'স্বাভাবিক' : 'Foundation',
    },
  ]

  const principles = [
    {
      icon: ShieldCheck,
      title: isBn ? 'প্রমাণভিত্তিক ভিত্তি' : 'Evidence-First Rigor',
      desc: isBn ? 'পাঠ্যপুস্তকীয় সংশ্লেষ ও পিয়ার-রিভিউড তথ্যসূত্র' : 'Curated primary citations and structured textbook synthesis.',
    },
    {
      icon: Info,
      title: isBn ? 'দ্বিভাষিক আন্তর্জাতিক মান' : 'First-Class Bilingualism',
      desc: isBn ? 'বাংলা ও ইংরেজির সমমানের পূর্ণাঙ্গ বৈজ্ঞানিক অনুবাদ' : 'Comprehensive parallel English and Bengali scientific content.',
    },
    {
      icon: Dna,
      title: isBn ? 'সংযুক্ত জ্ঞানজাল' : 'Connected Knowledge Graph',
      desc: isBn ? 'কোষ থেকে তন্ত্র পর্যন্ত প্রতিটি উপাদানের সম্পর্ক' : 'Direct mechanistic links across anatomy, physiology and metabolism.',
    },
    {
      icon: CircleCheck,
      title: isBn ? 'শিক্ষার্থী স্বাধীনতা ও প্রাইভেসী' : 'Learner-Directed Study',
      desc: isBn ? 'কোনো ভুয়া বা কৃত্রিম ট্র্যাকিং নয়, সত্যিকারের শিক্ষা' : 'Honest progress metrics without opaque behavioral manipulation.',
    },
  ]

  return (
    <RouteFrame>
      <main className="public-page">
        {/* Navigation Header */}
        <header className="public-header">
          <Link className="brand" to="/learn">
            <span className="brand-mark">
              <Dna size={21} />
            </span>
            <span className="brand-name">
              {t('brand')}
              <small>{t('brandSub')}</small>
            </span>
          </Link>
          <div className="public-header-actions">
            <Link className="knowledge-nav-link" to="/knowledge">
              {t('navKnowledge')}
            </Link>
            <Link className="public-admin-link" to="/admin">
              {t('adminPreview')}
            </Link>
            <GlobalControls />
            <Link className="public-start-button" to="/learn">
              {t('exploreLearning')} <ArrowRight size={15} />
            </Link>
          </div>
        </header>

        {/* Scientific Hero Section */}
        <section className="public-hero-scientific">
          <div className="public-hero-grid">
            <div>
              <div className="public-badge-row">
                <span className="public-status-badge">
                  <i />
                  {t('publicEyebrow')}
                </span>
                <span className="telemetry-tag">V2.4 SCIENTIFIC SYSTEM</span>
              </div>
              <h1 className="public-hero-title">{t('publicTitle')}</h1>
              <p className="public-hero-desc">{t('publicDescription')}</p>
              <div className="public-actions-group">
                <Link className="btn-scientific-primary" to="/learn">
                  {t('exploreLearning')} <ArrowRight size={16} />
                </Link>
                <Link className="btn-scientific-secondary" to="/learn/anatomy">
                  <BookOpen size={16} />
                  {isBn ? 'অ্যানাটমি কারিকুলাম' : 'Anatomy Academy (28 Chapters)'}
                </Link>
                <Link className="btn-scientific-secondary" to="/knowledge">
                  <Dna size={16} />
                  {t('navKnowledge')}
                </Link>
              </div>
            </div>

            {/* Scientific Graphic Showcase */}
            <div className="scientific-graphic-card" aria-hidden="true">
              <svg
                className="scientific-svg-stage"
                viewBox="0 0 320 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Orbital coordinate rings */}
                <circle cx="160" cy="120" r="95" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="160" cy="120" r="68" stroke="var(--sci-teal)" strokeWidth="1.5" strokeOpacity="0.4" />
                <ellipse cx="160" cy="120" rx="110" ry="46" stroke="var(--sci-cyan)" strokeWidth="1.2" strokeOpacity="0.35" transform="rotate(-25 160 120)" />

                {/* Central molecular core */}
                <circle cx="160" cy="120" r="28" fill="var(--panel)" stroke="var(--sci-teal)" strokeWidth="2.5" />
                <circle cx="160" cy="120" r="14" fill="var(--green-pale)" />

                {/* Peripheral nodes */}
                <g transform="translate(160 120)">
                  <circle cx="-62" cy="-44" r="9" fill="var(--panel)" stroke="var(--accent-anatomy)" strokeWidth="2" />
                  <circle cx="70" cy="-32" r="8" fill="var(--panel)" stroke="var(--accent-physiology)" strokeWidth="2" />
                  <circle cx="58" cy="48" r="9" fill="var(--panel)" stroke="var(--accent-biochemistry)" strokeWidth="2" />
                  <circle cx="-56" cy="42" r="8" fill="var(--panel)" stroke="var(--accent-nutrition)" strokeWidth="2" />
                </g>

                {/* Connecting pathways */}
                <path d="M160 120 L98 76" stroke="var(--border)" strokeWidth="1.5" />
                <path d="M160 120 L230 88" stroke="var(--border)" strokeWidth="1.5" />
                <path d="M160 120 L218 168" stroke="var(--border)" strokeWidth="1.5" />
                <path d="M160 120 L104 162" stroke="var(--border)" strokeWidth="1.5" />
              </svg>
              <span className="telemetry-tag">
                {isBn ? 'বায়োমেডিক্যাল জ্ঞানজাল' : 'BIOMEDICAL KNOWLEDGE GRAPH'}
              </span>
            </div>
          </div>
        </section>

        {/* Flagship Learning Destinations */}
        <section className="flagship-destinations" aria-labelledby="flagship-heading">
          <div className="section-head-scientific">
            <div>
              <span className="section-kicker">{t('exploreLabel')}</span>
              <h2 id="flagship-heading">{t('learningLibrary')}</h2>
            </div>
            <Link className="btn-scientific-secondary" to="/learn">
              {t('viewLearning')} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flagship-grid">
            {destinations.map((dest) => {
              const Icon = dest.icon
              return (
                <Link className="destination-card" key={dest.title} to={dest.to}>
                  <div className="destination-card-top">
                    <span className="destination-icon" style={{ background: 'var(--panel-soft)', color: dest.accent }}>
                      <Icon size={20} />
                    </span>
                    <span className="public-status-badge" style={{ fontSize: '9px', padding: '3px 8px' }}>
                      {dest.badge}
                    </span>
                  </div>
                  <h3>{dest.title}</h3>
                  <p>{dest.desc}</p>
                  <div className="destination-meta">
                    <span>{t('exploreLearning')}</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Specialized Learner Pathways */}
        <section className="pathways-section" aria-labelledby="pathways-heading">
          <div className="section-head-scientific">
            <div>
              <span className="section-kicker">{isBn ? 'ব্যবহারকারীর পথ' : 'TAILORED PATHWAYS'}</span>
              <h2 id="pathways-heading">{isBn ? 'আপনার ভূমিকা অনুযায়ী শিখুন' : 'Tailored For Your Clinical & Scientific Goals'}</h2>
            </div>
          </div>
          <div className="pathways-grid">
            {pathways.map((path) => {
              const Icon = path.icon
              return (
                <div className="pathway-card" key={path.title}>
                  <span className="pathway-badge">
                    <Icon size={14} />
                    {path.badge}
                  </span>
                  <h3>{path.title}</h3>
                  <p>{path.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Scientific Principles Strip */}
        <section className="principles-strip" aria-label={isBn ? 'মূল বৈজ্ঞানিক নীতি' : 'Scientific Principles'}>
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <div className="principle-item" key={principle.title}>
                <span className="principle-icon">
                  <Icon size={16} />
                </span>
                <div className="principle-text">
                  <b>{principle.title}</b>
                  <span>{principle.desc}</span>
                </div>
              </div>
            )
          })}
        </section>

        {/* Quick Subject Access Grid (preserves accessibility & test bindings) */}
        <section className="public-subjects" aria-label={t('allSubjects')}>
          <span className="section-kicker">{t('browseLessons')}</span>
          <h2>{isBn ? 'মৌলিক বিষয়শ্রেণী' : 'Core Biomedical Disciplines'}</h2>
          <div className="public-subject-grid">
            <Link to="/learn/anatomy" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <BookOpen size={23} />
                <b>{t('navAnatomy')}</b>
              </div>
            </Link>
            <Link to="/learn/physiology" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <HeartPulse size={23} />
                <b>{t('navPhysiology')}</b>
              </div>
            </Link>
            <Link to="/learn/biochemistry" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <FlaskConical size={23} />
                <b>{t('navBiochemistry')}</b>
              </div>
            </Link>
            <Link to="/learn/nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <Leaf size={23} />
                <b>{t('navNutrition')}</b>
              </div>
            </Link>
            <Link to="/learn/calculators" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <Activity size={23} />
                <b>{t('navCalculators')}</b>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="public-footer">
          <span>{t('publicNote')}</span>
          <Link to="/learn">
            {t('navHome')} <ArrowRight size={14} />
          </Link>
        </footer>
      </main>
    </RouteFrame>
  )
}
