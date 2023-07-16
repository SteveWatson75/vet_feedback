import React, { useState } from 'react'
import { Text } from 'react-native'
import { QuestionCard } from 'src/style/styled'
import RadioButton from '../RadioButton'

type Props = {
  question: string
  choices: string[]
  setSelectedOptionsRadio: (selectedOptions: string[]) => void
}

const MultiChoiceRadio: React.FC<Props> = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const { question, choices, setSelectedOptionsRadio } = props

  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option))
      setSelectedOptionsRadio(selectedOptions.filter((selectedOption) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
      setSelectedOptionsRadio([...selectedOptions, option])
    }
  }

  const renderChoices = () =>
    choices.map((choice: string) => (
      <RadioButton
        key={choice}
        children={choice}
        isSelected={selectedOptions.includes(choice)}
        onSelect={() => handleOptionSelect(choice)}
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
