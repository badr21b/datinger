import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardTypeOptions,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export interface GenericInputProps {
  value?: string
  onChangeText: (text: string) => void
  onBlur: () => void
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  placeholderTextColor?: string
  secureTextEntry?: boolean
  label: string
  isRequired?: boolean
}

const GenericInput = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  placeholderTextColor = '#6b7280',
  secureTextEntry = false,
  label,
  isRequired = false,
}: GenericInputProps) => {
  const isIOS = Platform.OS === 'ios'
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    setIsFocused(false)
    onBlur()
  }

  return (
    <View style={styles.fieldContainer}>
      <View style={styles.labelWrapper}>
        <Text style={styles.inputLabel}>
          {label} {isRequired && <Text style={styles.requiredStar}>*</Text>}
        </Text>
      </View>

      {isIOS ? (
        <View style={styles.inputContainer}>
          <LinearGradient
            colors={['#95AEFA', '#ED86FB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          />
          <View style={styles.inputInner}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={onChangeText}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
      ) : (
        <TextInput
          style={[styles.androidInput, isFocused && styles.androidInputFocused]}
          value={value}
          onChangeText={onChangeText}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  fieldContainer: {
    width: '100%',
  },
  labelWrapper: {
    marginBottom: 8,
    paddingLeft: 20,
  },
  inputLabel: {
    width: 70,
    height: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#EBF1F4',
  },
  requiredStar: {
    color: '#EF4444',
  },
  inputContainer: {
    height: 64,
    width: '100%',
    borderRadius: 20,
    position: 'relative',
  },
  gradientBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20,
    zIndex: 1,
  },
  inputInner: {
    position: 'absolute',
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
    borderRadius: 19,
    backgroundColor: '#11131E',
    zIndex: 2,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    height: '100%',
    color: '#e2e8f0',
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  androidInput: {
    height: 64,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4B5563',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 18,
    color: '#e2e8f0',
  },
  androidInputFocused: {
    borderColor: '#95AEFA',
  },
})

export default GenericInput
