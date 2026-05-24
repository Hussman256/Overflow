'use client'

import { useState } from 'react'
import type { FlipCardSlide } from '@/data/types'

function FlipCard({ card, index }: { card: FlipCardSlide['cards'][number]; index: number }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div
      onClick={() => setRevealed((r) => !r)}
      style={{
        height: 170,
        cursor: 'pointer',
        borderRadius: 12,
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* ── Front face ── */}
      <div
        style={{
          position: 'absolute', inset: 0, borderRadius: 12,
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border)',
          padding: '18px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          opacity: revealed ? 0 : 1,
          transform: revealed ? 'scale(0.97)' : 'scale(1)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          pointerEvents: revealed ? 'none' : 'auto',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-3)', textTransform: 'uppercase' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          {card.icon && <div style={{ fontSize: 22, marginBottom: 6 }}>{card.icon}</div>}
          <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.2 }}>
            {card.term}
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--orange)', textTransform: 'uppercase' }}>
            REVEAL →
          </span>
        </div>
      </div>

      {/* ── Back face ── */}
      <div
        style={{
          position: 'absolute', inset: 0, borderRadius: 12,
          background: 'var(--orange-bg)',
          border: '1px solid var(--orange-border)',
          padding: '18px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          pointerEvents: revealed ? 'auto' : 'none',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--orange)', opacity: 0.55, textTransform: 'uppercase' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text)', marginBottom: 8 }}>
            {card.definition}
          </p>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--orange)', opacity: 0.7, textTransform: 'uppercase' }}>
            ← HIDE
          </span>
        </div>
      </div>
    </div>
  )
}

export default function FlipCardSlideView({ slide }: { slide: FlipCardSlide }) {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .flipcard-layout { flex-direction: column !important; height: auto !important; }
          .flipcard-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .flipcard-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="flipcard-layout" style={{ display: 'flex', height: '100%', width: '100%' }}>

        {/* Left panel */}
        <div
          className="flipcard-left"
          style={{
            flex: '0 0 260px',
            padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,36px)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            borderRight: '1px solid var(--border)',
          }}
        >
          <h2 style={{ fontSize: 'clamp(18px,3.5vw,26px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 10 }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>
            {slide.instruction}
          </p>
          <div style={{ padding: '10px 14px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>
            Tap any card to reveal its definition
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ flex: 1, padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,40px)', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            className="flipcard-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, width: '100%' }}
          >
            {slide.cards.map((card, i) => (
              <FlipCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
