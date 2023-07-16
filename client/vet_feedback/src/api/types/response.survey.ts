interface SurveyQuestion {
  id: string
  type: 'multiple_choice' | 'multiple_choice_multiple_answers' | 'scaled' | 'free_text'
  question: string
  choices?: string[]
  scale?: {
    min: number
    max: number
    step: number
  }
}

export interface GetSurveyResponse {
  survey: {
    questions: SurveyQuestion[]
  }
}
