import type { AssignmentSlide } from '@/data/types'
import { ClipboardList } from 'lucide-react'

export default function AssignmentSlideView({ slide }: { slide: AssignmentSlide }) {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .assignment-layout { flex-direction: column !important; height: auto !important; }
          .assignment-left { flex: none !important; width: 100% !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; }
        }
      `}</style>

      <div className="assignment-layout" style={{ height: '100%', display: 'flex', width: '100%', overflowY: 'auto' }}>
        {/* Left */}
        <div className="assignment-left" style={{ flex: '0 0 320px', padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border)' }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--orange-bg)', border: '1px solid rgba(247,147,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            <ClipboardList size={20} color="var(--orange)" />
          </div>
          <div style={{ display: 'inline-flex', padding: '4px 10px', borderRadius: 99, background: 'var(--orange-bg)', border: '1px solid rgba(247,147,26,0.2)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 14, alignSelf: 'flex-start' }}>
            Assignment
          </div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,30px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 14 }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-2)' }}>
            {slide.description}
          </p>
        </div>

        {/* Right */}
        <div style={{ flex: 1, padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: 12 }}>Steps</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {slide.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, alignItems: 'flex-start' }}>
                  <span style={{ minWidth: 24, height: 24, borderRadius: 6, background: 'var(--orange-bg)', border: '1px solid rgba(247,147,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: 'var(--orange)', flexShrink: 0, marginTop: 1 }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '16px 18px', background: 'var(--yellow-bg)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, borderLeft: '3px solid var(--yellow)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--yellow)', textTransform: 'uppercase', marginBottom: 8 }}>Deliverable</p>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{slide.deliverable}</p>
          </div>
        </div>
      </div>
    </>
  )
}
