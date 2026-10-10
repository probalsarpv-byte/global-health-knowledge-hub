import type { ReactNode } from 'react'
import { useTheme } from './ThemeContext'

function ThemedFrame({ children }: { children: ReactNode }) {
  const { dark } = useTheme()
  return <div className={`app-shell${dark ? ' dark' : ''}`}>{children}</div>
}

export function RouteFrame({ children }: { children: ReactNode }) {
  return <ThemedFrame>{children}</ThemedFrame>
}
