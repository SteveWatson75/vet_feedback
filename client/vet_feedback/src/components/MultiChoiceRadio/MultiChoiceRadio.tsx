import React from 'react'
import { Text } from 'react-native'
import { QuestionCard } from 'src/style/styled'
import RadioButton from '../RadioButton'

type Props = {
  question: string
  choices: string[]
  selectedOption: string
  setSelectedOption: (selectedOption: string) => void
}

const MultiChoiceRadio: React.FC<Props> = (props: Props) => {
  const { question, choices, selectedOption, setSelectedOption } = props

  const renderChoices = () =>
    choices.map((choice: string) => (
      <RadioButton
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

export default MultiChoiceRadio
