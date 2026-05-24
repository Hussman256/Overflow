'use client'

import { useState } from 'react'
import { X, User, Mail, Wallet, Copy, Check } from 'lucide-react'
import { saveUser, generateMockAddress, type User as UserType } from '@/lib/auth'

interface Props {
  onSuccess: (user: UserType) => void
  onClose?: () => void
}

export default function AuthModal({ onSuccess, onClose }: Props) {
  const [tab,       setTab]     = useState<'account' | 'wallet'>('account')
  const [username,  setUsername]= useState('')
  const [email,     setEmail]   = useState('')
  const [walletAddr,setWallet]  = useState('')
  const [generated, setGenerated]= useState('')
  const [copied,    setCopied]  = useState(false)
  const [error,     setError]   = useState('')

  function handleAccount() {
    if (!username.trim())                        return setError('Enter a username')
    if (!email.trim() || !email.includes('@'))   return setError('Enter a valid email')
    const user: UserType = { username: username.trim(), email: email.trim(), authType: 'account', joinedAt: new Date().toISOString() }
    saveUser(user); onSuccess(user)
  }

  function handleWallet() {
    const addr = walletAddr.trim() || generated
    if (!addr) return setError('Paste or generate a wallet address')
    const user: UserType = { username: addr.slice(0,8)+'…'+addr.slice(-4), email: '', authType: 'wallet', walletAddress: addr, joinedAt: new Date().toISOString() }
    saveUser(user); onSuccess(user)
  }

  function handleGenerate() { const a = generateMockAddress(); setGenerated(a); setWallet(a) }

  function copyAddr() {
    navigator.clipboard.writeText(generated || walletAddr)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 8,
    background: 'var(--bg-elevated)', border: '1px solid var(--border-md)',
    color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'inherit',
  }
  const labelStyle: React.CSSProperties = {
    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'var(--text-3)', display: 'block', marginBottom: 6,
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backdropFilter: 'blur(6px)' }}>
      <div style={{ width: '100%', maxWidth: 440, background: 'var(--bg-card)', border: '1px solid var(--border-md)', borderRadius: 16, overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>Join Bitcoin Research Academy</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>Free access — no credit card</div>
          </div>
          {onClose && (
            <button onClick={onClose} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 6, padding: 6, cursor: 'pointer', display: 'flex' }}>
              <X size={14} color="var(--text-3)" />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
          {(['account', 'wallet'] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setError('') }}
              style={{
                padding: '12px', fontWeight: 700, fontSize: 13, letterSpacing: '0.02em',
                border: 'none', cursor: 'pointer', transition: 'background 0.15s',
                background: tab === t ? 'var(--bg-elevated)' : 'transparent',
                color: tab === t ? 'var(--text)' : 'var(--text-3)',
                borderRight: t === 'account' ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {t === 'account' ? <User size={13} /> : <Wallet size={13} />}
                {t === 'account' ? 'Create Account' : 'Connect Wallet'}
              </div>
            </button>
          ))}
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          {error && (
            <div style={{ padding: '10px 14px', background: 'var(--red-bg)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, fontSize: 13, color: 'var(--red)', marginBottom: 16 }}>
              {error}
            </div>
          )}

          {tab === 'account' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={labelStyle}>Username</label>
                <input className="field-input" style={inputStyle} placeholder="satoshi" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAccount()} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input className="field-input" style={inputStyle} type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAccount()} />
              </div>
              <button
                onClick={handleAccount}
                style={{ width: '100%', padding: '11px', borderRadius: 8, background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: 4 }}
              >
                Start Learning Free →
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', lineHeight: 1.5 }}>No password needed. Progress saved locally.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55, padding: '12px 14px', background: 'var(--bg-elevated)', borderRadius: 8, border: '1px solid var(--border)' }}>
                Paste your Bitcoin address or generate a demo address to get started.
              </p>
              <div>
                <label style={labelStyle}>Bitcoin Address</label>
                <input className="field-input" style={{ ...inputStyle, fontFamily: 'monospace', fontSize: 12 }} placeholder="bc1q..." value={walletAddr} onChange={(e) => setWallet(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={handleGenerate} style={{ flex: 1, padding: '9px', borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-2)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  Generate Demo Address
                </button>
                {(generated || walletAddr) && (
                  <button onClick={copyAddr} style={{ padding: '9px 14px', borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-2)', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                )}
              </div>
              <button
                onClick={handleWallet}
                style={{ width: '100%', padding: '11px', borderRadius: 8, background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
              >
                <Wallet size={15} /> Connect & Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
