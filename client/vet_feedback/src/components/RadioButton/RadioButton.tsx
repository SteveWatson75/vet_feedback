import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { RadioContainer, RadioLabelContainer } from './styled'

type Props = {
  children: string
  isSelected: boolean
  onSelect: () => void
}

const RadioButton: React.FC<Props> = ({ children, isSelected, onSelect }) => {
  return (
    <RadioContainer>
      <Ionicons
        name={isSelected ? 'radio-button-on' : 'radio-button-off'}
        size={24}
        color="#0061FF"
        onPress={onSelect}
      />
      <RadioLabelContainer>
        <Text>{children}</Text>
      </RadioLabelContainer>
    </RadioContainer>
  )
}

export default RadioButton
