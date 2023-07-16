import React, { useState } from 'react'
import { Text } from 'react-native'
import { QuestionCard } from 'src/style/styled'
import CheckBox from '../CheckBox/CheckBox'

type Props = {
  question: string
  choices: string[]
  setSelectedOptionsCheck: (selectedOptions: string[]) => void
}

const MultiChoiceCheckBox: React.FC<Props> = (props: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const { question, choices, setSelectedOptionsCheck } = props

  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option))
      setSelectedOptionsCheck(selectedOptions.filter((selectedOption) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
      setSelectedOptionsCheck([...selectedOptions, option])
    }
  }

  const renderChoices = () =>
    choices.map((choice: string) => (
      <CheckBox
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

export default MultiChoiceCheckBox
