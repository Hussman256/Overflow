'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import SlideViewer from '@/components/SlideViewer'
import AITutor from '@/components/AITutor'
import ShareModal from '@/components/ShareModal'
import { getModule } from '@/data/curriculum'
import type { Lesson } from '@/data/types'
import { isLessonComplete, markModuleComplete } from '@/lib/progress'
import { ArrowLeft, Clock, ChevronRight, BookOpen, Zap } from 'lucide-react'

const SLIDE_COLORS: Record<string, string> = {
  quiz: '#F7931A', assignment: '#22C55E', flipcards: '#F59E0B', content: 'var(--border-md)',
}

export default function ModulePage() {
  const params       = useParams()
  const searchParams = useSearchParams()
  const module       = getModule(params.moduleSlug as string)

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null)
  const [showLearner,  setShowLearner]  = useState(false)
  const [showShare,    setShowShare]    = useState(false)

  useEffect(() => {
    const slug = searchParams.get('lesson')
    if (slug && module) {
      const l = module.lessons.find(l => l.slug === slug)
      if (l) { setActiveLesson(l); setShowLearner(true) }
    }
  }, [searchParams, module])

  if (!module) return notFound()

  function handleLessonComplete() {
    if (!module) return
    const allDone = module.lessons.every(l => isLessonComplete(l.id))
    if (allDone) {
      markModuleComplete(module.id)
      /* slight delay so the "Lesson Complete" screen is seen first */
      setTimeout(() => setShowShare(true), 800)
    }
  }

  function handleBackFromLesson() {
    setShowLearner(false)
  }

  /* ── Fullscreen lesson viewer ── */
  if (showLearner && activeLesson) {
    return (
      <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>

        {/* Top bar — module progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: 52, borderBottom: '1px solid var(--border)', background: 'var(--bg-card)', flexShrink: 0, gap: 12 }}>
          <button
            onClick={handleBackFromLesson}
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--text-3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}
          >
            <ArrowLeft size={13} /> {module.title}
          </button>

          <div style={{ display: 'flex', gap: 5, flex: 1, justifyContent: 'center' }}>
            {module.lessons.map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLesson(l)}
                title={l.title}
                style={{ width: l.id === activeLesson.id ? 20 : 8, height: 8, borderRadius: 4, background: l.id === activeLesson.id ? 'var(--orange)' : isLessonComplete(l.id) ? 'var(--green)' : 'var(--bg-elevated)', border: '1px solid var(--border-md)', cursor: 'pointer', padding: 0, transition: 'all 0.15s', flexShrink: 0 }}
              />
            ))}
          </div>

          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', flexShrink: 0 }}>
            {module.lessons.findIndex(l => l.id === activeLesson.id) + 1} / {module.lessons.length}
          </span>
        </div>

        <div style={{ flex: 1, overflow: 'hidden' }}>
          <SlideViewer
            module={module}
            lesson={activeLesson}
            onBack={handleBackFromLesson}
            onLessonComplete={handleLessonComplete}
          />
        </div>
        <AITutor />

        {showShare && (
          <ShareModal module={module} onClose={() => setShowShare(false)} />
        )}
      </div>
    )
  }

  /* ── Module overview ── */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(80px,10vw,96px) 24px 80px' }}>

        {/* Back */}
        <Link
          href="/curriculum"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', textDecoration: 'none', marginBottom: 40 }}
        >
          <ArrowLeft size={12} /> Curriculum
        </Link>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className={`badge-${module.difficulty}`} style={{ fontSize: 10, fontWeight: 700, padding: '3px 9px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {module.difficulty}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 3 }}>
              <Zap size={11} color="var(--orange)" /> +{module.xp} XP
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 3 }}>
              <Clock size={11} /> {module.duration}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px,6vw,60px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--text)', marginBottom: 16 }}>
            {module.title}
          </h1>

          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
            {module.description}
          </p>

          <button
            onClick={() => { setActiveLesson(module.lessons[0]); setShowLearner(true) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 99, background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'opacity 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <BookOpen size={15} /> Start Module →
          </button>
        </div>

        {/* Objectives */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 14 }}>
            What you will learn
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {module.objectives.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '11px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--green)', flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson syllabus */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 16 }}>
            Lesson Syllabus
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {module.lessons.map((lesson, index) => {
              const done = isLessonComplete(lesson.id)
              return (
                <button
                  key={lesson.id}
                  onClick={() => { setActiveLesson(lesson); setShowLearner(true) }}
                  className="card"
                  style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 'clamp(14px,3vw,18px) clamp(14px,3vw,20px)', cursor: 'pointer', textAlign: 'left', width: '100%', background: 'var(--bg-card)' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: done ? 'var(--green-bg)' : 'var(--bg-elevated)', border: `1px solid ${done ? 'var(--green-border)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: done ? 16 : 20, flexShrink: 0, transition: 'all 0.2s' }}>
                    {done ? '✓' : lesson.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 11, color: done ? 'var(--green)' : 'var(--text-3)', fontWeight: 600 }}>
                        Lesson {String(index + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>·</span>
                      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{lesson.duration}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>·</span>
                      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{lesson.slides.length} slides</span>
                      {done && (
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 4, background: 'var(--green-bg)', color: 'var(--green)', border: '1px solid var(--green-border)' }}>
                          DONE
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: 3 }}>{lesson.title}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-2)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{lesson.description}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {lesson.slides.map((s, i) => (
                        <div key={i} title={s.type} style={{ width: 5, height: 5, borderRadius: '50%', background: SLIDE_COLORS[s.type] ?? 'var(--border-md)' }} />
                      ))}
                    </div>
                    <ChevronRight size={15} color="var(--text-3)" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <AITutor />

      {showShare && (
        <ShareModal module={module} onClose={() => setShowShare(false)} />
      )}
    </div>
  )
}
