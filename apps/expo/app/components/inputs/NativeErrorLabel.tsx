import React from 'react'
import { Button, SafeAreaView, View, Text } from 'react-native'

const NativeErrorLabel = (props: IProps) => {
  const { fieldName, errors } = props

  return (
    <Text className="input-error mb-2 ml-2 mt-2 block w-11/12 text-xs font-medium text-red-500">
      {fieldName in errors ? errors[fieldName]?.message : ''}
    </Text>
  )
}

export default NativeErrorLabel

interface IProps {
  fieldName: string
  errors: any
}
