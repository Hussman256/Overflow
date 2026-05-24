export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export type SlideType =
  | 'content'
  | 'flipcards'
  | 'comparison'
  | 'quiz'
  | 'assignment'
  | 'resources'

export interface ContentSlide {
  type: 'content'
  id: string
  icon?: string
  title: string
  body: string
  bullets?: string[]
  highlight?: string
}

export interface FlipCard {
  id: string
  term: string
  definition: string
  icon?: string
}

export interface FlipCardSlide {
  type: 'flipcards'
  id: string
  title: string
  instruction: string
  cards: FlipCard[]
}

export interface ComparisonRow {
  attribute: string
  bitcoin: string
  other: string
}

export interface ComparisonSlide {
  type: 'comparison'
  id: string
  title: string
  otherLabel: string
  rows: ComparisonRow[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface QuizSlide {
  type: 'quiz'
  id: string
  title: string
  questions: QuizQuestion[]
}

export interface AssignmentSlide {
  type: 'assignment'
  id: string
  title: string
  description: string
  steps: string[]
  deliverable: string
}

export interface ResourceItem {
  title: string
  url: string
  description: string
}

export interface ResourceCategory {
  label: string
  items: ResourceItem[]
}

export interface ResourcesSlide {
  type: 'resources'
  id: string
  title: string
  categories: ResourceCategory[]
}

export type Slide =
  | ContentSlide
  | FlipCardSlide
  | ComparisonSlide
  | QuizSlide
  | AssignmentSlide
  | ResourcesSlide

export interface Lesson {
  id: string
  slug: string
  title: string
  duration: string
  icon: string
  description: string
  slides: Slide[]
}

export interface Module {
  id: string
  slug: string
  number: number
  title: string
  subtitle: string
  week: number
  difficulty: Difficulty
  xp: number
  duration: string
  description: string
  objectives: string[]
  lessons: Lesson[]
}
