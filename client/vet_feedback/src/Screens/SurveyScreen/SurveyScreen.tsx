import React, { useState } from 'react'
import MultiChoiceCheckBox from 'src/components/MultiChoiceCheckBox'
import MultiChoiceRadio from 'src/components/MultiChoiceRadio'
import ScaledInput from 'src/components/ScaledInput'
import { Header, TitleText } from '../../style/styled'

const SurveyScreen: React.FC = () => {
  const [selectedOptionsRadio, setSelectedOptionsRadio] = useState<string[]>([])
  const [selectedOptionCheckBox, setSelectedOptionCheckBox] = useState<string>('')
  const [value, setValue] = useState<number>(0)

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
      <ScaledInput question={question} value={value} setValue={setValue} />
    </>
  )
}

export default SurveyScreen
