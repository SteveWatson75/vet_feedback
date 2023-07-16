import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { getSurveyQuestions } from 'src/api'
import FreeTextInput from 'src/components/FreeTextInput'
import MultiChoiceCheckBox from 'src/components/MultiChoiceCheckBox'
import MultiChoiceRadio from 'src/components/MultiChoiceRadio'
import ScaledInput from 'src/components/ScaledInput'
import { SurveyQuestions } from 'src/types/surveyQuestions'
import { Header, TitleText } from '../../style/styled'

const SurveyScreen: React.FC = () => {
  const [surveyQuestions, setSurveyQuestions] = useState<SurveyQuestions>()
  const [selectedOptionsRadio, setSelectedOptionsRadio] = useState<string>('')
  const [selectedOptionCheckBox, setSelectedOptionCheckBox] = useState<string[]>([])
  const [value, setValue] = useState<number>(0)
  const [freeText, setFreeText] = useState<string>('')

  useEffect(() => {
    getSurveyQuestions().then((res) => setSurveyQuestions(res))
  }, [])

  if (!surveyQuestions) {
    return null
  }

  return (
    <>
      <Header>
        <TitleText>Survey Screen</TitleText>
      </Header>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 64,
            flexGrow: 1,
            backgroundColor: '#fff9f4'
          }}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <MultiChoiceRadio
            question={surveyQuestions.survey.questions[0].question}
            choices={surveyQuestions.survey.questions[0].choices!}
            selectedOption={selectedOptionsRadio}
            setSelectedOption={setSelectedOptionsRadio}
          />
          <MultiChoiceCheckBox
            question={surveyQuestions.survey.questions[1].question}
            choices={surveyQuestions.survey.questions[1].choices!}
            setSelectedOptionsCheck={setSelectedOptionCheckBox}
          />
          <ScaledInput
            question={surveyQuestions.survey.questions[2].question}
            value={value}
            setValue={setValue}
          />
          <FreeTextInput
            question={surveyQuestions.survey.questions[3].question}
            freeText={freeText}
            setFreeText={setFreeText}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SurveyScreen
