import Checkbox from 'expo-checkbox'
import React from 'react'
import { Text } from 'react-native'
import { CheckBoxContainer, CheckBoxLabelContainer } from './styled'

type Props = {
  children: string
  selectedOption: string
  setSelectedOption: (selectedOption: string) => void
}

const CheckBox: React.FC<Props> = (props: Props) => {
  const { children, selectedOption, setSelectedOption } = props
  return (
    <CheckBoxContainer>
      <Checkbox
        value={selectedOption === children}
        onValueChange={selectedOption === children ? undefined : () => setSelectedOption(children)}
      />
      <CheckBoxLabelContainer>
        <Text>{children}</Text>
      </CheckBoxLabelContainer>
    </CheckBoxContainer>
  )
}

export default CheckBox
