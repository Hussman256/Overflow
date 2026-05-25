import type { ComparisonSlide } from '@/data/types'

export default function ComparisonSlideView({ slide }: { slide: ComparisonSlide }) {
  return (
    <>
      <style>{`
        @media (max-width: 540px) {
          .cmp-table { min-width: 420px; }
          .cmp-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        }
      `}</style>
      <div style={{ height: '100%', width: '100%', padding: 'clamp(20px,4vw,40px)', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto' }}>
        <h2 style={{ fontSize: 'clamp(20px,4vw,28px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>{slide.title}</h2>
        <div className="cmp-scroll">
          <div className="cmp-table">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 8, padding: '8px 14px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-3)', textTransform: 'uppercase' }}>Attribute</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 14 }}>₿</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase' }}>Bitcoin</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-3)', textTransform: 'uppercase' }}>{slide.otherLabel}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {slide.rows.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: '12px 14px', background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, alignItems: 'start' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 500, lineHeight: 1.4 }}>{row.attribute}</span>
                  <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600, lineHeight: 1.4 }}>{row.bitcoin}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.4 }}>{row.other}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
