'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import type { Lesson, Module } from '@/data/types'
import ContentSlideView    from './slides/ContentSlide'
import FlipCardSlideView   from './slides/FlipCardSlide'
import ComparisonSlideView from './slides/ComparisonSlide'
import QuizSlideView       from './slides/QuizSlide'
import AssignmentSlideView from './slides/AssignmentSlide'
import { markLessonComplete } from '@/lib/progress'
import type { Slide } from '@/data/types'

function renderSlide(slide: Slide, onQuizComplete?: (score: number) => void) {
  switch (slide.type) {
    case 'content':    return <ContentSlideView    slide={slide} />
    case 'flipcards':  return <FlipCardSlideView   slide={slide} />
    case 'comparison': return <ComparisonSlideView slide={slide} />
    case 'quiz':       return <QuizSlideView       slide={slide} onComplete={onQuizComplete} />
    case 'assignment': return <AssignmentSlideView slide={slide} />
    default:           return null
  }
}

export default function SlideViewer({
  module, lesson, onBack, onLessonComplete,
}: {
  module: Module
  lesson: Lesson
  onBack: () => void
  onLessonComplete?: () => void
}) {
  const [current,   setCurrent]   = useState(0)
  const [completed, setCompleted] = useState(false)
  const slides = lesson.slides
  const slide  = slides[current]
  const isLast = current === slides.length - 1

  useEffect(() => { setCurrent(0); setCompleted(false) }, [lesson.id])

  function handleNext() {
    if (current < slides.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      markLessonComplete(lesson.id, Math.round(module.xp / module.lessons.length))
      setCompleted(true)
      onLessonComplete?.()
    }
  }
  function handlePrev() { if (current > 0) setCurrent(c => c - 1) }

  /* ── Completion screen ── */
  if (completed) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 'clamp(24px,6vw,48px)', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-bg)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CheckCircle size={28} color="var(--green)" />
        </div>
        <div>
          <h2 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 8 }}>Lesson Complete!</h2>
          <p style={{ fontSize: 15, color: 'var(--text-2)' }}>You finished <strong style={{ color: 'var(--text)' }}>{lesson.title}</strong></p>
        </div>
        <button
          onClick={onBack}
          style={{ padding: '10px 24px', borderRadius: 99, background: 'var(--orange)', color: '#000', fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer' }}
        >
          ← Back to Module
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Progress bar + nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid var(--border)', flexShrink: 0, background: 'var(--bg)', gap: 12 }}>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: 'var(--text-3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          <ArrowLeft size={12} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{lesson.title}</span>
        </button>

        <div style={{ display: 'flex', gap: 4, flex: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{ width: i === current ? 20 : 7, height: 7, borderRadius: 4, background: i < current ? 'var(--orange)' : i === current ? 'var(--text)' : 'var(--bg-elevated)', border: '1px solid var(--border-md)', cursor: 'pointer', padding: 0, transition: 'all 0.15s', flexShrink: 0 }}
            />
          ))}
        </div>

        <span style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, flexShrink: 0 }}>
          {current+1}/{slides.length}
        </span>
      </div>

      {/* Slide content */}
      <div className="slide-enter" key={`${lesson.id}-${current}`} style={{ flex: 1, overflow: 'auto' }}>
        {renderSlide(slide, handleNext)}
      </div>

      {/* Bottom nav */}
      {slide.type !== 'quiz' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(12px,3vw,16px) 20px', borderTop: '1px solid var(--border)', flexShrink: 0, background: 'var(--bg)', gap: 10 }}>
          <button
            onClick={handlePrev}
            disabled={current === 0}
            style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 18px', borderRadius: 99, border: '1px solid var(--border)', background: 'transparent', color: current === 0 ? 'var(--text-3)' : 'var(--text-2)', fontSize: 13, fontWeight: 600, cursor: current === 0 ? 'not-allowed' : 'pointer', opacity: current === 0 ? 0.4 : 1 }}
          >
            <ArrowLeft size={13} /> Previous
          </button>

          <button
            onClick={handleNext}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 22px', borderRadius: 99, background: isLast ? 'var(--green)' : 'var(--orange)', color: '#000', fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer' }}
          >
            {isLast ? <><CheckCircle size={13} /> Complete</> : <>Continue <ArrowRight size={13} /></>}
          </button>
        </div>
      )}
    </div>
  )
}
