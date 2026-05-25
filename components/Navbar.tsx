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
  const pathname         = usePathname()
  const router           = useRouter()
  const [user,      setUser]       = useState<UserType | null>(null)
  const [theme,     setThemeState] = useState<Theme>('dark')
  const [showAuth,  setShowAuth]   = useState(false)
  const [menuOpen,  setMenuOpen]   = useState(false)

  useEffect(() => {
    setUser(getUser())
    setThemeState(getTheme())
  }, [])

  /* Close drawer on route change */
  useEffect(() => { setMenuOpen(false) }, [pathname])

  function handleToggleTheme() { setThemeState(toggleTheme()) }
  function handleSignOut()     { signOut(); setUser(null); router.push('/') }

  const isDark = theme === 'dark'

  return (
    <>
      {showAuth && (
        <AuthModal
          onSuccess={(u) => { setUser(u); setShowAuth(false) }}
          onClose={() => setShowAuth(false)}
        />
      )}

      {/* ── Nav bar ── */}
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
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: '#000' }}>
              ₿
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, color: 'var(--text)', letterSpacing: '-0.02em' }}>
              BRA<span id="nav-subtitle" style={{ fontWeight: 400, color: 'var(--text-3)', marginLeft: 4 }}>· Bitcoin Research</span>
            </span>
          </Link>

          {/* Desktop nav links — hidden below 640px */}
          <div id="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: '6px 14px', borderRadius: 7, fontSize: 13, fontWeight: active ? 600 : 500,
                    textDecoration: 'none', color: active ? 'var(--text)' : 'var(--text-2)',
                    background: active ? 'var(--bg-elevated)' : 'transparent',
                    border: `1px solid ${active ? 'var(--border)' : 'transparent'}`,
                    transition: 'all 0.15s', whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-2)' }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>

            {/* Theme toggle */}
            <button
              onClick={handleToggleTheme}
              className="theme-toggle"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
            </button>

            {/* Auth — desktop only */}
            {user ? (
              <div id="nav-user" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', border: '1px solid var(--border)', borderRadius: 7, background: 'var(--bg-elevated)' }}>
                  {user.authType === 'wallet' ? <Wallet size={11} color="var(--orange)" /> : <User size={11} color="var(--orange)" />}
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.username}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  title="Sign out"
                  style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 7, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-2)', minWidth: 44, minHeight: 44, justifyContent: 'center' }}
                >
                  <LogOut size={14} strokeWidth={1.8} />
                </button>
              </div>
            ) : (
              <div id="nav-auth" style={{ display: 'flex', gap: 6 }}>
                <button
                  onClick={() => setShowAuth(true)}
                  style={{ padding: '6px 12px', borderRadius: 7, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-2)', fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', minHeight: 44 }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowAuth(true)}
                  style={{ padding: '6px 12px', borderRadius: 7, border: 'none', background: 'var(--orange)', color: '#000', fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', minHeight: 44 }}
                >
                  Connect
                </button>
              </div>
            )}

            {/* Hamburger — visible below 640px */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 7, padding: '6px 8px', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', minWidth: 44, minHeight: 44 }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {menuOpen && (
          <div
            style={{
              position: 'absolute', top: 56, left: 0, right: 0,
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
              padding: '8px 16px 16px',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', padding: '14px 8px', fontSize: 16, fontWeight: 600, color: active ? 'var(--orange)' : 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
                >
                  {label}
                </Link>
              )
            })}

            {/* Auth buttons in drawer */}
            {!user && (
              <div style={{ display: 'flex', gap: 8, paddingTop: 14 }}>
                <button
                  onClick={() => { setShowAuth(true); setMenuOpen(false) }}
                  style={{ flex: 1, padding: '12px', borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setShowAuth(true); setMenuOpen(false) }}
                  style={{ flex: 1, padding: '12px', borderRadius: 8, border: 'none', background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      <style>{`
        /* Mobile: show hamburger, hide desktop links/auth */
        @media (max-width: 639px) {
          #hamburger-btn        { display: flex !important; }
          #nav-desktop-links    { display: none !important; }
          #nav-auth             { display: none !important; }
          #nav-user             { display: none !important; }
          #nav-subtitle         { display: none !important; }
        }
        /* Tablet+: hide hamburger */
        @media (min-width: 640px) {
          #hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
