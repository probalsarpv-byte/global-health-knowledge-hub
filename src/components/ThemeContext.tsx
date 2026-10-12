import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type ThemeMode = 'light' | 'dark' | 'lab'

type ThemeContextValue = {
  theme: ThemeMode
  dark: boolean
  isLab: boolean
  toggleTheme: () => void
  toggleLabMode: () => void
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light')

  const value = useMemo(() => {
    const dark = theme === 'dark' || theme === 'lab'
    const isLab = theme === 'lab'
    return {
      theme,
      dark,
      isLab,
      toggleTheme: () => setTheme((cur) => (cur === 'light' ? 'dark' : 'light')),
      toggleLabMode: () => setTheme((cur) => (cur === 'lab' ? 'light' : 'lab')),
      setTheme,
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
