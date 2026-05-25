'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BitcoinHero } from '@/components/ui/bitcoin-hero'
import AuthModal from '@/components/AuthModal'
import { curriculum } from '@/data/curriculum'
import { Search, Shield, BarChart3, BookOpen, FileText, Zap, ArrowRight, Clock } from 'lucide-react'

const features = [
  { icon: Search,    title: 'Source Evaluation',   desc: 'Tell credible Bitcoin information from misinformation using the SIFT method.',           color: 'var(--orange)' },
  { icon: BarChart3, title: 'On-Chain Data',        desc: 'Read real blockchain data with free tools — no programming required.',                   color: 'var(--green)'  },
  { icon: FileText,  title: 'Research Methodology', desc: 'A repeatable 5-step process for researching any Bitcoin topic with confidence.',         color: 'var(--blue)'   },
  { icon: Shield,    title: 'Scam Recognition',     desc: 'Identify the patterns behind every major Bitcoin scam before you encounter one.',        color: 'var(--red)'    },
  { icon: Zap,       title: 'Interactive Lessons',  desc: 'Flip cards, quizzes, and assignments — active learning, not passive reading.',           color: 'var(--yellow)' },
  { icon: BookOpen,  title: 'Curated Resources',    desc: 'The best Bitcoin books, podcasts, and tools — curated and annotated for you.',           color: '#8B5CF6'       },
]

const steps = [
  { n: '01', title: 'Pick a Module',    desc: 'Six modules take you from Bitcoin basics to publishing your own original research.', color: 'var(--orange)' },
  { n: '02', title: 'Learn by Doing',   desc: 'Flip cards, quizzes, and assignments. Every lesson is active — you build real skills.', color: 'var(--green)' },
  { n: '03', title: 'Publish Research', desc: 'Complete a final project and build a research portfolio that gets noticed.',           color: 'var(--blue)'  },
]

export default function HomePage() {
  const [showAuth, setShowAuth] = useState(false)
  const totalLessons = curriculum.reduce((s, m) => s + m.lessons.length, 0)
  const totalXP      = curriculum.reduce((s, m) => s + m.xp, 0)
  const preview      = curriculum.slice(0, 3)

  return (
    <main style={{ background: 'var(--bg)', transition: 'background 0.2s ease' }}>
      {showAuth && <AuthModal onSuccess={() => setShowAuth(false)} onClose={() => setShowAuth(false)} />}

      {/* ── Hero ── */}
      <BitcoinHero />

      {/* ── Stats bar ── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div
          className="stats-grid"
          style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}
        >
          {[
            { value: `${curriculum.length}`,  label: 'Modules'      },
            { value: `${totalLessons}+`,       label: 'Lessons'      },
            { value: `${totalXP} XP`,          label: 'To Earn'      },
            { value: '100%',                   label: 'Free Forever' },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: 'center',
                padding: '20px 8px',
                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(20px, 5vw, 30px)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 600, marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width: 640px) {
            .stats-border-fix > div { border-right: 1px solid var(--border) !important; }
            .stats-border-fix > div:last-child { border-right: none !important; }
          }
        `}</style>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: 'clamp(48px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 10 }}>
            What you&apos;ll build
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 44px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 'clamp(28px, 5vw, 48px)', maxWidth: 520, lineHeight: 1.05 }}>
            Everything you need to become a Bitcoin researcher.
          </h2>

          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{ padding: 'clamp(16px, 3vw, 24px)' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `color-mix(in srgb, ${f.color} 14%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, flexShrink: 0 }}>
                  <f.icon size={18} color={f.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: 'clamp(40px, 7vw, 80px) 16px', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 10 }}>
            The process
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 'clamp(24px, 5vw, 40px)', lineHeight: 1.05 }}>
            From zero to researcher in six weeks.
          </h2>

          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.n} className="card" style={{ padding: 'clamp(20px, 4vw, 28px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -14, right: -8, fontSize: 80, fontWeight: 900, color: `color-mix(in srgb, ${s.color} 8%, transparent)`, letterSpacing: '-0.05em', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Step {s.n}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.03em' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Module preview ── */}
      <section style={{ padding: 'clamp(40px, 7vw, 80px) 16px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(20px, 4vw, 36px)', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 8 }}>
                Curriculum preview
              </p>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', lineHeight: 1.05 }}>
                Six modules. One clear path.
              </h2>
            </div>
            <Link
              href="/curriculum"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--text-2)', textDecoration: 'none', padding: '8px 14px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', whiteSpace: 'nowrap' }}
            >
              View all <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {preview.map((mod) => (
              <Link key={mod.id} href={`/modules/${mod.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: 'clamp(14px, 3vw, 18px) clamp(14px, 3vw, 22px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: 1 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-3)', minWidth: 22, flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
                      {String(mod.number).padStart(2, '0')}
                    </span>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, flexWrap: 'wrap' }}>
                        <span className={`badge-${mod.difficulty}`} style={{ fontSize: 9, fontWeight: 700, padding: '2px 6px', textTransform: 'uppercase', letterSpacing: '0.07em', borderRadius: 4 }}>
                          {mod.difficulty}
                        </span>
                        <span style={{ fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Clock size={10} /> {mod.duration}
                        </span>
                        <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{mod.lessons.length} lessons</span>
                      </div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {mod.title}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--text-3)" style={{ flexShrink: 0 }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(40px, 7vw, 80px) 16px', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div
          className="cta-inner"
          style={{
            maxWidth: 1100, margin: '0 auto',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-md)',
            borderRadius: 20,
            padding: 'clamp(28px, 6vw, 64px) clamp(20px, 6vw, 64px)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, var(--orange-bg) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 10 }}>
              Free · Forever · Open
            </p>
            <h2 style={{ fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', lineHeight: 1.05, maxWidth: 420 }}>
              Ready to become a Bitcoin researcher?
            </h2>
          </div>
          <button
            onClick={() => setShowAuth(true)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 26px', borderRadius: 99, background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap', transition: 'opacity 0.15s, transform 0.15s' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.02)' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
          >
            Create free account <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: 'clamp(20px, 4vw, 28px) 16px' }} className="safe-bottom">
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 22, height: 22, borderRadius: 5, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: '#000' }}>₿</div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-2)' }}>Bitcoin Research Academy</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[['Curriculum', '/curriculum'], ['Resources', '/resources']].map(([l, h]) => (
              <Link key={l} href={h} style={{ fontSize: 13, color: 'var(--text-3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-3)' }}>Free &amp; open.</p>
        </div>
      </footer>
    </main>
  )
}
