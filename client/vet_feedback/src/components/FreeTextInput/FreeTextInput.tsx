import React from 'react'
import { Text, TextInput } from 'react-native'
import { QuestionCard } from 'src/style/styled'

type Props = {
  question: string
  freeText: string
  setFreeText: (value: string) => void
}

const FreeTextInput: React.FC<Props> = (props: Props) => {
  const { question } = props

  return (
    <QuestionCard>
      <Text>{question}</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Type here..."
        placeholderTextColor="#fff"
        style={{
          height: 100,
          backgroundColor: '#0061FF',
          borderColor: '#0061FF',
          borderRadius: 10,
          borderWidth: 1,
          width: '100%',
          padding: 10,
          marginTop: 10
        }}
      />
    </QuestionCard>
  )
}

export default FreeTextInput
