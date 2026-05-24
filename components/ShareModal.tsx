'use client'

import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import type { Module } from '@/data/types'

interface Props {
  module: Module
  onClose: () => void
}

export default function ShareModal({ module, onClose }: Props) {
  const [copied, setCopied] = useState(false)

  const appUrl = typeof window !== 'undefined' ? window.location.origin : 'https://bitcoin-research-academy.com'

  const tweetText =
    `Just completed "${module.title}" on Bitcoin Research Academy! 🧡\n\n` +
    `Free curriculum teaching how to think like a Bitcoin researcher — ` +
    `source evaluation, on-chain data & research methodology.\n\n` +
    `Join me → ${appUrl}\n\n#Bitcoin #BitcoinResearch #BRA`

  const linkedinTitle = `Completed: ${module.title} — Bitcoin Research Academy`
  const linkedinSummary =
    `Just finished "${module.title}" on Bitcoin Research Academy — ` +
    `a free, open curriculum for learning how to evaluate Bitcoin sources ` +
    `and produce original research. Check it out at ${appUrl}`

  const twitterShareUrl  = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
  const linkedinShareUrl =
    `https://www.linkedin.com/shareArticle?mini=true` +
    `&url=${encodeURIComponent(appUrl)}` +
    `&title=${encodeURIComponent(linkedinTitle)}` +
    `&summary=${encodeURIComponent(linkedinSummary)}`

  function handleCopy() {
    navigator.clipboard.writeText(tweetText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 480,
          background: 'var(--bg-card)',
          border: '1px solid var(--border-md)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Orange header band */}
        <div
          style={{
            background: 'var(--orange)',
            padding: '28px 28px 24px',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 14, right: 14,
              background: 'rgba(0,0,0,0.18)',
              border: 'none', borderRadius: 7,
              width: 30, height: 30,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#000',
            }}
            aria-label="Close"
          >
            <X size={15} />
          </button>

          <div style={{ fontSize: 36, marginBottom: 10 }}>🎉</div>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.55)', marginBottom: 4 }}>
            Module Complete
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.03em', color: '#000', lineHeight: 1.15 }}>
            {module.title}
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.6)', marginTop: 6 }}>
            +{module.xp} XP earned · {module.lessons.length} lessons done
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px 28px' }}>
          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 22 }}>
            Share your progress and inspire others to start learning Bitcoin research!
          </p>

          {/* Preview text box */}
          <div
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '14px 16px',
              marginBottom: 16,
              position: 'relative',
            }}
          >
            <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.65, whiteSpace: 'pre-wrap', paddingRight: 36 }}>
              {tweetText}
            </p>
            <button
              onClick={handleCopy}
              title="Copy to clipboard"
              style={{
                position: 'absolute', top: 10, right: 10,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: '4px 6px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center',
                color: copied ? 'var(--green)' : 'var(--text-3)',
                transition: 'color 0.15s',
              }}
              aria-label="Copy text"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
            </button>
          </div>

          {/* Share buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '11px 20px',
                borderRadius: 10,
                background: '#000',
                color: '#fff',
                fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {/* X / Twitter logo */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
              </svg>
              Share on X / Twitter
            </a>

            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '11px 20px',
                borderRadius: 10,
                background: '#0A66C2',
                color: '#fff',
                fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {/* LinkedIn logo */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>

            <button
              onClick={onClose}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-3)',
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border-md)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
