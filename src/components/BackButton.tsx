import { ArrowLeft } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'

type BackButtonProps = { fallback: string }

export function BackButton({ fallback }: BackButtonProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLocale()
  const goBack = () => {
    if (location.key !== 'default') navigate(-1)
    else navigate(fallback)
  }

  return <button className="back-button" type="button" onClick={goBack}>
    <ArrowLeft size={16} aria-hidden="true" />
    <span>{t('back')}</span>
  </button>
}
