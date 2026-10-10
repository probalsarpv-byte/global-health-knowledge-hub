import { Activity, ArrowRight, BookOpen, Database, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { adminSections } from './adminSections'

const metrics = [
  { key: 'adminModules' as const, value: 6, icon: BookOpen },
  { key: 'adminAreas' as const, value: 12, icon: Layers3 },
  { key: 'adminConnected' as const, value: 0, icon: Database },
  { key: 'adminPublished' as const, value: 0, icon: Activity },
]

export function AdminOverview() {
  const { t, locale } = useLocale()
  return <>
    <div className="admin-heading"><div><span className="admin-eyebrow">{t('adminPrototype')}</span><h1>{t('adminOverviewTitle')}</h1><p>{t('adminOverviewDescription')}</p></div><span className="prototype-pill">{t('demoMetric')}</span></div>
    <div className="admin-demo-notice"><span>i</span>{t('adminDemoNotice')}</div>
    <section className="admin-metric-grid" aria-label={t('adminOverviewTitle')}>
      {metrics.map(({ key, value, icon: Icon }) => <article className="admin-metric-card" key={key}><div className="admin-metric-top"><span>{t(key)}</span><span className="admin-metric-icon"><Icon size={17} /></span></div><strong>{new Intl.NumberFormat(locale === 'bn' ? 'bn-BD' : 'en-US', { minimumIntegerDigits: 2 }).format(value)}</strong><span className="admin-metric-demo">{t('demoMetric')}</span></article>)}
    </section>
    <section className="admin-section-list"><div className="admin-section-title"><div><span className="admin-eyebrow">{t('adminManagement')}</span><h2>{t('adminTitle')}</h2></div><span className="admin-area-count">{adminSections.length} {t('demoMetric')}</span></div>
      <div className="admin-area-grid">{adminSections.map(({ slug, labelKey }) => <Link className="admin-area-card" key={slug} to={`/admin/${slug}`}><span className="admin-area-dot" /><span>{t(labelKey)}</span><ArrowRight size={16} /></Link>)}</div>
    </section>
  </>
}
