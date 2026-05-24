'use client'

const THEME_KEY = 'btc-academy-theme'

export type Theme = 'light' | 'dark'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem(THEME_KEY) as Theme) || 'dark'
}

export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_KEY, theme)
  document.documentElement.setAttribute('data-theme', theme)
}

export function toggleTheme(): Theme {
  const current = getTheme()
  const next: Theme = current === 'dark' ? 'light' : 'dark'
  setTheme(next)
  return next
}

export function initTheme(): void {
  const theme = getTheme()
  document.documentElement.setAttribute('data-theme', theme)
}
