import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text } from 'react-native'
import { RadioContainer, RadioLabelContainer } from './styled'

type Props = {
  children: string
  selectedOption: string
  setSelectedOption: (selectedOption: string) => void
}

const RadioButton: React.FC<Props> = ({ children, selectedOption, setSelectedOption }) => {
  return (
    <RadioContainer>
      <Ionicons
        name={selectedOption === children ? 'radio-button-on' : 'radio-button-off'}
        size={24}
        color="#0061FF"
        onPress={() => setSelectedOption(children)}
      />
      <RadioLabelContainer>
        <Text>{children}</Text>
      </RadioLabelContainer>
    </RadioContainer>
  )
}

export default RadioButton
