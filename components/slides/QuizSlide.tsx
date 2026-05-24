'use client'

import { useState } from 'react'
import type { QuizSlide } from '@/data/types'
import { CheckCircle, XCircle } from 'lucide-react'

export default function QuizSlideView({ slide, onComplete }: { slide: QuizSlide; onComplete?: (score: number) => void }) {
  const [current,  setCurrent]  = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers,  setAnswers]  = useState<(number|null)[]>(new Array(slide.questions.length).fill(null))
  const [finished, setFinished] = useState(false)

  const q          = slide.questions[current]
  const isAnswered = selected !== null
  const isCorrect  = selected === q.correctIndex

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    const next = [...answers]; next[current] = idx; setAnswers(next)
  }

  function handleNext() {
    if (current < slide.questions.length - 1) { setCurrent(c => c+1); setSelected(answers[current+1]) }
    else { setFinished(true) }
  }

  if (finished) {
    const score = answers.filter((a,i) => a === slide.questions[i].correctIndex).length
    const pct   = Math.round((score / slide.questions.length) * 100)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'clamp(24px,5vw,48px)', gap: 20, textAlign: 'center', overflowY: 'auto' }}>
        <div style={{ fontSize: 48 }}>{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <div>
          <p style={{ fontSize: 12, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Quiz Complete</p>
          <h2 style={{ fontSize: 'clamp(40px,8vw,52px)', fontWeight: 900, letterSpacing: '-0.03em', color: pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--orange)' : 'var(--text)' }}>
            {score}/{slide.questions.length}
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-2)', marginTop: 8 }}>
            {pct >= 80 ? 'Excellent — you nailed it.' : pct >= 60 ? 'Good effort — review below.' : 'Keep going — re-read and try again.'}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 560, textAlign: 'left' }}>
          {slide.questions.map((question, i) => {
            const correct = answers[i] === question.correctIndex
            return (
              <div key={question.id} style={{ padding: '12px 14px', borderRadius: 8, border: `1px solid ${correct ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`, background: correct ? 'var(--green-bg)' : 'var(--red-bg)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                {correct ? <CheckCircle size={14} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} /> : <XCircle size={14} color="var(--red)" style={{ flexShrink: 0, marginTop: 2 }} />}
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>{question.question}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.5 }}>{question.explanation}</p>
                </div>
              </div>
            )
          })}
        </div>

        {onComplete && (
          <button
            onClick={() => onComplete(score)}
            style={{ padding: '10px 28px', borderRadius: 99, background: 'var(--orange)', color: '#000', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}
          >
            Continue →
          </button>
        )}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(20px,5vw,48px)', gap: 20, maxWidth: 680, margin: '0 auto', width: '100%', overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600 }}>Question {current+1} of {slide.questions.length}</span>
        <div style={{ display: 'flex', gap: 5 }}>
          {slide.questions.map((_, i) => (
            <div key={i} style={{ width: 24, height: 4, borderRadius: 2, background: i < current ? (answers[i] === slide.questions[i].correctIndex ? 'var(--green)' : 'var(--red)') : i === current ? 'var(--orange)' : 'var(--border-md)' }} />
          ))}
        </div>
      </div>

      <h3 style={{ fontSize: 'clamp(17px,3vw,22px)', fontWeight: 700, lineHeight: 1.3, color: 'var(--text)', letterSpacing: '-0.01em' }}>{q.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {q.options.map((option, i) => {
          let bg = 'var(--bg-card)', border = 'var(--border)', color = 'var(--text-2)'
          if (isAnswered) {
            if      (i === q.correctIndex) { bg = 'var(--green-bg)'; border = 'rgba(34,197,94,0.35)'; color = 'var(--green)' }
            else if (i === selected)       { bg = 'var(--red-bg)';   border = 'rgba(239,68,68,0.35)'; color = 'var(--red)'   }
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} style={{ textAlign: 'left', padding: '12px 16px', borderRadius: 8, border: `1px solid ${border}`, background: bg, color, fontSize: 14, fontWeight: 500, cursor: isAnswered ? 'default' : 'pointer', transition: 'all 0.12s', lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, opacity: 0.6 }}>
                {String.fromCharCode(65+i)}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div style={{ padding: '12px 16px', borderRadius: 8, background: isCorrect ? 'var(--green-bg)' : 'var(--red-bg)', border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
          <span style={{ fontWeight: 700, color: isCorrect ? 'var(--green)' : 'var(--red)', marginRight: 6 }}>{isCorrect ? '✓ Correct.' : '✗ Not quite.'}</span>
          {q.explanation}
        </div>
      )}

      {isAnswered && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={handleNext} style={{ padding: '9px 22px', borderRadius: 99, background: 'var(--orange)', color: '#000', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
            {current < slide.questions.length-1 ? 'Next Question →' : 'See Results →'}
          </button>
        </div>
      )}
    </div>
  )
}
