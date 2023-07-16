import axios from 'axios'
import { GetSurveyResponse } from './types/response.survey'

export const vetFeedbackApi = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 1000,
  timeoutErrorMessage: 'Server is unreachable'
})

export const getSurveyQuestions = async (): Promise<GetSurveyResponse | undefined> => {
  const abortController = new AbortController()
  try {
    const { data, status } = await vetFeedbackApi.get('/survey', {
      signal: abortController.signal
    })

    if (status !== 200) {
      throw new Error('Server responded with an error')
    }

    return data
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log('Request aborted')
    } else {
      console.log(error)
      return error.message
    }
  }
}
