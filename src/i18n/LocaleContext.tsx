import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages, type MessageKey } from './messages'

type Locale = 'en' | 'bn'
type LocaleContextValue = { locale: Locale; toggleLocale: () => void; t: (key: MessageKey) => string }
const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => { document.documentElement.lang = locale }, [locale])
  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    toggleLocale: () => setLocale((current) => current === 'en' ? 'bn' : 'en'),
    t: (key) => messages[locale][key],
  }), [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used inside LocaleProvider')
  return context
}
