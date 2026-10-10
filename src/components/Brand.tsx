import { Dna } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'

export function Brand() {
  const { t } = useLocale()
  return <Link className="brand" to="/learn" aria-label={t('brand')}>
    <span className="brand-mark"><Dna size={21} strokeWidth={1.8} /></span>
    <span className="brand-name">{t('brand')}<small>{t('brandSub')}</small></span>
  </Link>
}
