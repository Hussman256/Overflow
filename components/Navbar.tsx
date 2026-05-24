'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon, LogOut, User, Wallet, Menu, X } from 'lucide-react'
import { getUser, signOut, type User as UserType } from '@/lib/auth'
import { getTheme, toggleTheme, type Theme } from '@/lib/theme'
import AuthModal from './AuthModal'

const navLinks = [
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/resources',  label: 'Resources'  },
]

export default function Navbar() {
  const pathname              = usePathname()
  const router                = useRouter()
  const [user,      setUser]  = useState<UserType | null>(null)
  const [theme,     setThemeState] = useState<Theme>('dark')
  const [showAuth,  setShowAuth]   = useState(false)
  const [menuOpen,  setMenuOpen]   = useState(false)

  useEffect(() => {
    setUser(getUser())
    setThemeState(getTheme())
  }, [])

  function handleToggleTheme() {
    const next = toggleTheme()
    setThemeState(next)
  }

  function handleSignOut() {
    signOut()
    setUser(null)
    router.push('/')
  }

  const isDark = theme === 'dark'

  return (
    <>
      {showAuth && (
        <AuthModal
          onSuccess={(u) => { setUser(u); setShowAuth(false) }}
          onClose={() => setShowAuth(false)}
        />
      )}

      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          height: 56,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--nav-border)',
          transition: 'background 0.2s ease, border-color 0.2s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              textDecoration: 'none', flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 28, height: 28, borderRadius: 7,
                background: 'var(--orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 900, color: '#000',
                boxShadow: '0 2px 8px var(--orange-bg)',
              }}
            >
              ₿
            </div>
            <span
              style={{
                fontWeight: 800, fontSize: 13,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              BRA
              <span
                className="hide-xs"
                style={{ fontWeight: 400, color: 'var(--text-3)', marginLeft: 4 }}
              >
                · Bitcoin Research
              </span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div
            className="hide-mobile"
            style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: '5px 14px',
                    borderRadius: 7,
                    fontSize: 13,
                    fontWeight: active ? 600 : 500,
                    textDecoration: 'none',
                    color: active ? 'var(--text)' : 'var(--text-2)',
                    background: active ? 'var(--bg-elevated)' : 'transparent',
                    border: `1px solid ${active ? 'var(--border)' : 'transparent'}`,
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-2)' }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* ── Right side controls ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>

            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className="theme-toggle"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark
                ? <Sun size={15} strokeWidth={1.8} />
                : <Moon size={15} strokeWidth={1.8} />
              }
            </button>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  className="hide-mobile"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '5px 12px',
                    border: '1px solid var(--border)',
                    borderRadius: 7,
                    background: 'var(--bg-elevated)',
                  }}
                >
                  {user.authType === 'wallet'
                    ? <Wallet size={12} color="var(--orange)" />
                    : <User size={12} color="var(--orange)" />
                  }
                  <span
                    style={{
                      fontSize: 12, fontWeight: 600,
                      color: 'var(--text-2)',
                      maxWidth: 100,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}
                  >
                    {user.username}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  title="Sign out"
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border)',
                    borderRadius: 7,
                    padding: '5px 8px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center',
                    color: 'var(--text-2)',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-md)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <LogOut size={14} strokeWidth={1.8} />
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={() => setShowAuth(true)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 7,
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    color: 'var(--text-2)',
                    fontSize: 13, fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-md)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 7,
                    border: 'none',
                    background: 'var(--orange)',
                    color: '#000',
                    fontSize: 13, fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Connect Wallet
                </button>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 7,
                padding: '5px 8px',
                cursor: 'pointer',
                color: 'var(--text-2)',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        {menuOpen && (
          <div
            style={{
              position: 'absolute', top: 56, left: 0, right: 0,
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
              padding: '8px 16px 16px',
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 8px',
                  fontSize: 15, fontWeight: 600,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 640px) {
          #mobile-menu-btn { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
