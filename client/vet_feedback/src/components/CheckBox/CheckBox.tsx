import Checkbox from 'expo-checkbox'
import React from 'react'
import { Text } from 'react-native'
import { CheckBoxContainer, CheckBoxLabelContainer } from './styled'

type Props = {
  children: string
  isSelected: boolean
  onSelect: () => void
}

const CheckBox: React.FC<Props> = (props: Props) => {
  const { children, isSelected, onSelect } = props
  return (
    <CheckBoxContainer>
      <Checkbox value={isSelected} onValueChange={onSelect} />
      <CheckBoxLabelContainer>
        <Text>{children}</Text>
      </CheckBoxLabelContainer>
    </CheckBoxContainer>
  )
}

export default CheckBox
