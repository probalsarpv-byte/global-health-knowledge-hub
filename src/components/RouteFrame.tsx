import type { ReactNode } from 'react'
import { useTheme } from './ThemeContext'

function ThemedFrame({ children }: { children: ReactNode }) {
  const { theme, dark, isLab } = useTheme()
  return (
    <div
      className={`app-shell${dark ? ' dark' : ''}${isLab ? ' lab-mode' : ''}`}
      data-theme={theme}
    >
      {children}
    </div>
  )
}

export function RouteFrame({ children }: { children: ReactNode }) {
  return <ThemedFrame>{children}</ThemedFrame>
}
