import React, { useState } from 'react'
import MultiChoiceCheckBox from 'src/components/MultiChoiceCheckBox'
import MultiChoiceRadio from 'src/components/MultiChoiceRadio'
import { Header, TitleText } from '../../style/styled'

const SurveyScreen: React.FC = () => {
  const [selectedOptionsRadio, setSelectedOptionsRadio] = useState<string[]>([])
  const [selectedOptionCheckBox, setSelectedOptionCheckBox] = useState<string>('')

  const question = 'What you want?'

  return (
    <>
      <Header>
        <TitleText>Survey Screen</TitleText>
      </Header>
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
    </>
  )
}

export default SurveyScreen
