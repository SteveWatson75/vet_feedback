import React from 'react'
import { Text } from 'react-native'
import CheckBox from '../CheckBox/CheckBox'
import { QuestionCard } from './styled'

type Props = {
  question: string
  choices: string[]
  selectedOption: string
  setSelectedOption: (selectedOption: string) => void
}

const MultiChoiceCheckBox: React.FC<Props> = (props: Props) => {
  const { question, choices, selectedOption, setSelectedOption } = props

  const renderChoices = () =>
    choices.map((choice: string) => (
      <CheckBox
        key={choice}
        children={choice}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    ))

  return (
    <QuestionCard>
      <Text>{question}</Text>
      {renderChoices()}
    </QuestionCard>
  )
}

export default MultiChoiceCheckBox
