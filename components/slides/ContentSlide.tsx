'use client'

import type { ContentSlide } from '@/data/types'

export default function ContentSlideView({ slide }: { slide: ContentSlide }) {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .content-layout { flex-direction: column !important; height: auto !important; }
          .content-left   { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
        }
      `}</style>
      <div className="content-layout" style={{ display: 'flex', height: '100%', width: '100%', overflowY: 'auto' }}>
        {/* Left */}
        <div className="content-left" style={{ flex: '0 0 360px', padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border)' }}>
          {slide.icon && (
            <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--bg-elevated)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>
              {slide.icon}
            </div>
          )}
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 14 }}>{slide.title}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)' }}>{slide.body}</p>
        </div>

        {/* Right */}
        <div style={{ flex: 1, padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
          {slide.bullets && slide.bullets.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 4 }}>Key Points</p>
              {slide.bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8 }}>
                  <span style={{ color: 'var(--orange)', fontWeight: 800, fontSize: 13, flexShrink: 0, lineHeight: 1.5 }}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          )}

          {slide.highlight && (
            <div style={{ padding: '18px 20px', background: 'var(--orange-bg)', border: '1px solid rgba(247,147,26,0.2)', borderRadius: 10, borderLeft: '3px solid var(--orange)' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 8 }}>Key Insight</p>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{slide.highlight}</p>
            </div>
          )}

          {!slide.bullets && !slide.highlight && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.06 }}>
              <span style={{ fontSize: 96, fontWeight: 900 }}>₿</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
