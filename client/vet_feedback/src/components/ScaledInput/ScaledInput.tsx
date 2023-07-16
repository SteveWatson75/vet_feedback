import Slider from '@react-native-community/slider'
import React from 'react'
import { Text } from 'react-native'
import { QuestionCard } from 'src/style/styled'

type Props = {
  question: string
  value: number
  setValue: (value: number) => void
}

const ScaledInput: React.FC<Props> = (props: Props) => {
  const { question, value, setValue } = props

  return (
    <QuestionCard>
      <Text>{question}</Text>
      <Text>{value}</Text>
      <Slider
        style={{ width: '90%', height: 40 }}
        minimumValue={0}
        maximumValue={5}
        step={1}
        onValueChange={(value) => setValue(value)}
        minimumTrackTintColor="#0061FF"
        maximumTrackTintColor="#fff9f4"
      />
    </QuestionCard>
  )
}

export default ScaledInput
