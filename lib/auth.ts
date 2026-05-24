'use client'

const AUTH_KEY = 'btc-academy-user'

export interface User {
  username: string
  email: string
  authType: 'account' | 'wallet'
  walletAddress?: string
  joinedAt: string
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveUser(user: User): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

export function signOut(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(AUTH_KEY)
}

export function generateMockAddress(): string {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
  let addr = 'bc1q'
  for (let i = 0; i < 38; i++) {
    addr += chars[Math.floor(Math.random() * chars.length)]
  }
  return addr
}
