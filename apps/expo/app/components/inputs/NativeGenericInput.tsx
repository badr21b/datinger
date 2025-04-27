import React, { forwardRef } from 'react'
import NativeErrorLabel from '../inputs/NativeErrorLabel'
import {
  TextInput,
  View,
  Text,
  KeyboardTypeOptions,
  KeyboardAvoidingView,
} from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { KeyboardType } from 'react-native/Libraries/Components/TextInput/TextInput'
// import { HStack } from '@gluestack-ui/themed'

// const NativeGenericInput = forwardRef(function NativeGenericInput(props: IProps) {
const NativeGenericInput = (props: IProps) => {
  const {
    control,
    title,
    titleAlign = 'left',
    fieldName,
    errors,
    register,
    inputType = 'default' as KeyboardTypeOptions,
    secureTextEntry = false,
    isRequired = false,
    defaultValue = '',
    enabled = true,
    centerInputText = false,
    placeholder = '',
    ...otherProps
  } = props

  return (
    <KeyboardAvoidingView
      className={'mt-1 flex h-auto w-full items-center justify-center'}
    >
      <Controller
        {...register(fieldName)}
        control={control}
        name={fieldName}
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <View
              className={
                'flex w-11/12 flex-row items-center justify-center pb-3'
              }
            >
              <Text
                className={'w-fit w-full text-sm font-semibold text-black'}
                style={{ textAlign: titleAlign }}
              >
                {title}
              </Text>
              {isRequired && (
                <Text className={'text-xs text-black'}> (required)</Text>
              )}
            </View>

            <View
              className={'flex w-full flex-row items-center justify-center'}
            >
              <TextInput
                {...otherProps}
                cursorColor={'black'}
                keyboardType={inputType}
                className={`h-[50px] w-11/12 rounded-xl border border-black p-2`}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                value={value}
                defaultValue={defaultValue}
                editable={enabled}
                textAlign={centerInputText ? 'center' : 'left'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                secureTextEntry={secureTextEntry}
              />
            </View>
            <NativeErrorLabel errors={errors} fieldName={fieldName} />
          </>
        )}
      />
    </KeyboardAvoidingView>
  )
}

export default NativeGenericInput

interface IProps {
  control: Control<any> | undefined
  title: string
  titleAlign?: 'left' | 'center' | 'right'
  fieldName: string
  defaultValue?: string
  errors: any
  register: any
  inputType?: KeyboardType
  secureTextEntry?: boolean
  isRequired?: boolean
  enabled?: boolean
  centerInputText?: boolean
  placeholder?: string
}
