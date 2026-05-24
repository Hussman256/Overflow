'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { curriculum } from '@/data/curriculum'
import { Clock, ChevronRight, Zap } from 'lucide-react'

const SLIDE_COLORS: Record<string, string> = {
  quiz:       '#F7931A',
  assignment: '#22C55E',
  flipcards:  '#F59E0B',
  comparison: '#3B82F6',
  content:    'var(--border-md)',
}

export default function CurriculumPage() {
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all')
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const totalLessons = curriculum.reduce((s, m) => s + m.lessons.length, 0)
  const totalXP      = curriculum.reduce((s, m) => s + m.xp, 0)
  const modules      = filter === 'all' ? curriculum : curriculum.filter(m => m.difficulty === filter)

  if (!mounted) return null

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(80px,10vw,96px) 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 12 }}>
            Full Course
          </p>
          <h1 style={{ fontSize: 'clamp(40px,7vw,64px)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--text)', lineHeight: 1.0, marginBottom: 16 }}>
            Curriculum
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 24 }}>
            A complete path from zero knowledge to confident Bitcoin researcher.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { v: curriculum.length, l: 'Modules' },
              { v: totalLessons,      l: 'Lessons' },
              { v: `${totalXP} XP`,  l: 'Available' },
            ].map(s => (
              <div key={s.l} style={{ padding: '6px 14px', borderRadius: 20, border: '1px solid var(--border)', background: 'var(--bg-card)', fontSize: 13, color: 'var(--text-2)', fontWeight: 500 }}>
                <span style={{ fontWeight: 700, color: 'var(--text)' }}>{s.v}</span> {s.l}
              </div>
            ))}
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '6px 16px', borderRadius: 20,
                  border: `1px solid ${filter === f ? 'var(--border-md)' : 'var(--border)'}`,
                  background: filter === f ? 'var(--bg-elevated)' : 'transparent',
                  color: filter === f ? 'var(--text)' : 'var(--text-3)',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
                  textTransform: 'capitalize',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {modules.map((mod) => (
            <div key={mod.id}>
              {/* Module header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--bg-elevated)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: 'var(--orange)', flexShrink: 0 }}>
                    {String(mod.number).padStart(2,'0')}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                      <span className={`badge-${mod.difficulty}`} style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {mod.difficulty}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Clock size={10} /> {mod.duration}
                      </span>
                      <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Zap size={10} /> +{mod.xp} XP
                      </span>
                    </div>
                    <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                      {mod.title}
                    </h2>
                  </div>
                </div>
                <Link
                  href={`/modules/${mod.slug}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', fontSize: 13, fontWeight: 600, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.15s, border-color 0.15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-md)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  View module <ChevronRight size={13} />
                </Link>
              </div>

              {/* Lesson cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 10 }}>
                {mod.lessons.map((lesson, idx) => (
                  <Link
                    key={lesson.id}
                    href={`/modules/${mod.slug}?lesson=${lesson.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="card"
                      style={{ padding: '18px', height: '100%', cursor: 'pointer' }}
                    >
                      {/* Meta row */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          {String(idx + 1).padStart(2,'0')}
                        </span>
                        <span style={{ fontSize: 20 }}>{lesson.icon}</span>
                        <div style={{ flex: 1 }} />
                        <span style={{ fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Clock size={10} /> {lesson.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                        {lesson.title}
                      </h3>

                      {/* Description */}
                      <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: 14 }}>
                        {lesson.description}
                      </p>

                      {/* Slide type dots */}
                      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                        {lesson.slides.map((s, i) => (
                          <div
                            key={i}
                            title={s.type}
                            style={{ width: 6, height: 6, borderRadius: '50%', background: SLIDE_COLORS[s.type] ?? 'var(--border-md)' }}
                          />
                        ))}
                        <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 4 }}>
                          {lesson.slides.length} slides
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 40, padding: '12px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Slide types:</span>
          {[
            { color: SLIDE_COLORS.content,    label: 'Content'    },
            { color: SLIDE_COLORS.flipcards,  label: 'Flip Cards' },
            { color: SLIDE_COLORS.quiz,       label: 'Quiz'       },
            { color: SLIDE_COLORS.assignment, label: 'Assignment' },
          ].map(t => (
            <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.color }} />
              <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
