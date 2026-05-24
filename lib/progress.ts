'use client'

const PROGRESS_KEY = 'btc-academy-progress'

export interface Progress {
  completedSlides: Record<string, boolean>
  completedLessons: Record<string, boolean>
  completedModules: Record<string, boolean>
  quizScores: Record<string, number>
  totalXP: number
}

function defaultProgress(): Progress {
  return {
    completedSlides: {},
    completedLessons: {},
    completedModules: {},
    quizScores: {},
    totalXP: 0,
  }
}

export function loadProgress(): Progress {
  if (typeof window === 'undefined') return defaultProgress()
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    return raw ? JSON.parse(raw) : defaultProgress()
  } catch {
    return defaultProgress()
  }
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export function markSlideComplete(slideId: string): Progress {
  const p = loadProgress()
  p.completedSlides[slideId] = true
  saveProgress(p)
  return p
}

export function markLessonComplete(lessonId: string, xp: number): Progress {
  const p = loadProgress()
  if (!p.completedLessons[lessonId]) {
    p.completedLessons[lessonId] = true
    p.totalXP += xp
  }
  saveProgress(p)
  return p
}

export function saveQuizScore(quizId: string, score: number, xp: number): Progress {
  const p = loadProgress()
  const prev = p.quizScores[quizId] ?? 0
  p.quizScores[quizId] = Math.max(prev, score)
  if (score > prev) {
    p.totalXP += xp
  }
  saveProgress(p)
  return p
}

export function isLessonComplete(lessonId: string): boolean {
  return loadProgress().completedLessons[lessonId] === true
}

export function markModuleComplete(moduleId: string): Progress {
  const p = loadProgress()
  p.completedModules[moduleId] = true
  saveProgress(p)
  return p
}

export function isModuleComplete(moduleId: string): boolean {
  return loadProgress().completedModules[moduleId] === true
}

export function getModuleProgress(moduleId: string, totalLessons: number): number {
  const p = loadProgress()
  const done = Object.keys(p.completedLessons).filter((id) =>
    id.startsWith(moduleId)
  ).length
  return totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0
}
