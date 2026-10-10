import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type ThemeContextValue = { dark: boolean; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false)
  const value = useMemo(() => ({ dark, toggleTheme: () => setDark((current) => !current) }), [dark])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
