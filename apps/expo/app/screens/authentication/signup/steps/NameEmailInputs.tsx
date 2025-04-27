import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  Control,
  FieldValues,
  UseFormRegister,
  Controller,
} from 'react-hook-form'
import GenericInput from '../../../../components/inputs/GenericInput'

interface NameEmailInputsProps {
  currentStep: number
  stepNumber: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const NameEmailInputs = ({
  currentStep,
  stepNumber,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: NameEmailInputsProps) => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#11131E" barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {!keyboardVisible && (
              <View style={styles.headerContainer}>
                <Image
                  source={require('../../../../../assets/budhi/pictures/budhi.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Let's get to know you!</Text>
              </View>
            )}

            <View style={[
              styles.formContainer,
              keyboardVisible && { marginTop: -20 }
            ]}>
              <Controller
                control={control}
                name="name"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={[
                    styles.inputGroup,
                    keyboardVisible && { marginBottom: 10 }
                  ]}>
                    <GenericInput
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="Jane Doe"
                      placeholderTextColor="#6b7280"
                      label="Your Name"
                      isRequired={true}
                    />
                    {errors.name && (
                      <Text style={styles.errorText}>Name is required</Text>
                    )}
                  </View>
                )}
              />

              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={[
                    styles.inputGroup,
                    keyboardVisible && { marginBottom: 0 }
                  ]}>
                    <GenericInput
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="example@gmail.com"
                      placeholderTextColor="#6b7280"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      label="Your Mail"
                      isRequired={true}
                    />
                    {errors.email && (
                      <Text style={styles.errorText}>
                        {errors.email.message || 'Email is required'}
                      </Text>
                    )}
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#11131E',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 220,
    height: 220,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFAF2',
    marginTop: 10, 
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
  },
  errorText: {
    marginTop: 4,
    color: '#EF4444',
    fontSize: 14,
    paddingLeft: 20,
  },
})

export default NameEmailInputs
