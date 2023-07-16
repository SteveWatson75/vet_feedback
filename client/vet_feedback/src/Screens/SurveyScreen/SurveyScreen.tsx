import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import FreeTextInput from 'src/components/FreeTextInput'
import MultiChoiceCheckBox from 'src/components/MultiChoiceCheckBox'
import MultiChoiceRadio from 'src/components/MultiChoiceRadio'
import ScaledInput from 'src/components/ScaledInput'
import { Header, TitleText } from '../../style/styled'

const SurveyScreen: React.FC = () => {
  const [selectedOptionsRadio, setSelectedOptionsRadio] = useState<string[]>([])
  const [selectedOptionCheckBox, setSelectedOptionCheckBox] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [freeText, setFreeText] = useState<string>('')

  const question = 'What you want?'

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
            question={question}
            choices={['fun', 'happiness', 'love']}
            setSelectedOptionsRadio={setSelectedOptionsRadio}
          />
          <MultiChoiceCheckBox
            question={question}
            choices={['fun', 'happiness', 'love']}
            selectedOption={selectedOptionCheckBox}
            setSelectedOption={setSelectedOptionCheckBox}
          />
          <ScaledInput question={question} value={value} setValue={setValue} />
          <FreeTextInput question={question} freeText={freeText} setFreeText={setFreeText} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SurveyScreen
