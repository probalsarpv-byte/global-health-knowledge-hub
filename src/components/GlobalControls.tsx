import { FlaskConical, Languages, Moon, Sun } from 'lucide-react'
import { useLocale } from '../i18n/LocaleContext'
import { useTheme } from './ThemeContext'

export function GlobalControls() {
  const { dark, isLab, toggleTheme, toggleLabMode } = useTheme()
  const { locale, toggleLocale, t } = useLocale()
  return (
    <div className="global-controls">
      <button
        type="button"
        className={`icon-button lab-button${isLab ? ' is-active' : ''}`}
        aria-label={t('labModeAria')}
        title={isLab ? t('exitLabMode') : t('labMode')}
        aria-pressed={isLab}
        onClick={toggleLabMode}
      >
        <FlaskConical size={18} />
      </button>
      <button
        type="button"
        className="icon-button theme-button"
        aria-label={t('switchTheme')}
        aria-pressed={dark}
        onClick={toggleTheme}
      >
        {dark ? <Sun size={19} /> : <Moon size={19} />}
      </button>
      <button
        type="button"
        className="language-button"
        aria-label={t('switchLanguage')}
        aria-pressed={locale === 'bn'}
        onClick={toggleLocale}
      >
        <Languages size={16} />
        <span>{locale === 'en' ? 'বাংলা' : 'English'}</span>
      </button>
    </div>
  )
}
