'use client'

import { useEffect } from 'react'

export default function ThemeInit() {
  useEffect(() => {
    const theme = localStorage.getItem('btc-academy-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
  }, [])
  return null
}
