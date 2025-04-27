import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ColorValue,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type GradientButtonProps = {
  title: string
  onPress: () => void
  filled?: boolean
  primaryColors?: readonly [ColorValue, ColorValue, ColorValue]
  secondaryColors?: readonly [ColorValue, ColorValue, ColorValue]
  primaryStart?: { x: number; y: number }
  primaryEnd?: { x: number; y: number }
  secondaryStart?: { x: number; y: number }
  secondaryEnd?: { x: number; y: number }
  className?: string
  textClassName?: string
  backgroundColor?: string
  rightIcon?: React.ReactNode
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  filled = true,
  primaryColors = ['#6964ff', '#9a5af8', '#c55bfb'] as readonly [
    ColorValue,
    ColorValue,
    ColorValue,
  ],
  secondaryColors = ['#3B2DAC', '#784AF8', '#A66BFF'] as readonly [
    ColorValue,
    ColorValue,
    ColorValue,
  ],
  primaryStart = { x: 0, y: 0 },
  primaryEnd = { x: 1, y: 0 },
  secondaryStart = { x: 0.8, y: 0 },
  secondaryEnd = { x: 0.2, y: 1 },
  className = '',
  textClassName = '',
  backgroundColor = '#10182b',
  rightIcon,
}) => {
  const isIOS = Platform.OS === 'ios'

  const renderContent = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text className={`text-xl font-medium text-white ${textClassName}`}>
        {title}
      </Text>
      {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
    </View>
  )

  // Fallback to regular button if not iOS
  if (!isIOS) {
    if (filled) {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.plainButton}
          className={`mb-4 w-full items-center justify-center rounded-full py-4 ${className}`}
        >
          {renderContent()}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.secondaryButton}
          className={`w-full items-center justify-center rounded-full py-4 ${className}`}
        >
          {renderContent()}
        </TouchableOpacity>
      )
    }
  }

  try {
    if (filled) {
      // Primary button with filled gradient
      return (
        <View
          style={[
            styles.buttonContainer,
            className.includes('h-14') ? { width: 102, margin: 0 } : {},
          ]}
          className={`mb-4 ${
            className.includes('h-14') ? '' : 'w-full'
          } ${className}`}
        >
          <LinearGradient
            colors={primaryColors}
            start={primaryStart}
            end={primaryEnd}
            style={[
              styles.gradientContainer,
              className.includes('h-14') ? { width: 102, padding: 16 } : {},
            ]}
          >
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.buttonTouchable,
                className.includes('h-14') ? { padding: 16 } : {},
              ]}
            >
              {renderContent()}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )
    } else {
      // Secondary button with border gradient
      return (
        <View style={styles.buttonContainer} className={`w-full ${className}`}>
          <LinearGradient
            colors={secondaryColors}
            start={secondaryStart}
            end={secondaryEnd}
            style={styles.gradientContainer}
          >
            <View style={[styles.innerButton, { backgroundColor }]}>
              <TouchableOpacity
                onPress={onPress}
                style={styles.buttonTouchable}
              >
                {renderContent()}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      )
    }
  } catch (error) {
    console.log('LinearGradient failed, using fallback:', error)
    // Fallback to regular button
    if (filled) {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.plainButton}
          className={`mb-4 w-full items-center justify-center rounded-full py-4 ${className}`}
        >
          {renderContent()}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.secondaryButton}
          className={`w-full items-center justify-center rounded-full py-4 ${className}`}
        >
          {renderContent()}
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  gradientContainer: {
    height: 56,
    width: '100%',
    borderRadius: 28,
  },
  innerButton: {
    flex: 1,
    margin: 1, // Very thin border
    borderRadius: 27, // Slightly less than parent for border
    overflow: 'hidden',
  },
  buttonTouchable: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plainButton: {
    backgroundColor: '#9a5af8', // Medium purple matching the middle of the gradient
    height: 56,
    borderRadius: 28,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6345DA',
    height: 56,
    borderRadius: 28,
  },
})

export default GradientButton
