import { ArrowLeft, Database, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import type { MessageKey } from '../../i18n/messages'

export function AdminPlaceholder({ section }: { section: { slug: string; labelKey: MessageKey } }) {
  const { t } = useLocale()
  return <section className="admin-placeholder-screen">
    <div className="admin-heading"><div><span className="admin-eyebrow">{t('adminPrototype')}</span><h1>{t(section.labelKey)}</h1><p>{t('adminPlaceholderCopy')}</p></div><span className="prototype-pill">{t('demoMetric')}</span></div>
    <div className="admin-empty-state"><span className="admin-empty-icon"><Database size={25} /></span><h2>{t('adminPlaceholderTitle')}</h2><p>{t('adminEmpty')}</p><span className="admin-empty-explain"><Settings2 size={14} />{t('adminPlaceholderCopy')}</span><Link to="/admin" className="admin-back-button"><ArrowLeft size={15} />{t('adminBack')}</Link></div>
  </section>
}
