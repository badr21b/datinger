import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import { useState } from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface GenderInputsProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const GenderInputs = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: GenderInputsProps) => {
  const [selectedGender, setSelectedGender] = useState<
    'male' | 'female' | 'other' | 'unspecified'
  >('female')
  const [unspecifiedSelected, setUnspecifiedSelected] = useState(false)

  const handleGenderSelect = (gender: 'male' | 'female' | 'other') => {
    setSelectedGender(gender)
    // Unselect "I don't want to specify" when a gender is selected
    if (unspecifiedSelected) {
      setUnspecifiedSelected(false)
    }
  }

  const handleUnspecifiedToggle = () => {
    const newValue = !unspecifiedSelected
    setUnspecifiedSelected(newValue)
    
    // If "I don't want to specify" is selected, unselect any gender
    if (newValue) {
      setSelectedGender('unspecified')
    } else {
      // Default to 'female' or keep current selection when unchecking
      setSelectedGender('female')
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#11131E" barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.container}>
          {/* Title */}
          <Text style={styles.title}>Your Gender?</Text>

          <View style={styles.optionsContainer}>
            {/* Gender options */}
            <View style={styles.femaleContainer}>
              <GenderCard
                title="Female"
                selected={selectedGender === 'female'}
                onPress={() => handleGenderSelect('female')}
                renderIcon={() => (
                  <FemaleIcon selected={selectedGender === 'female'} />
                )}
              />
            </View>

            <View style={styles.maleContainer}>
              <GenderCard
                title="Male"
                selected={selectedGender === 'male'}
                onPress={() => handleGenderSelect('male')}
                renderIcon={() => (
                  <MaleIcon selected={selectedGender === 'male'} />
                )}
              />
            </View>

            <View style={styles.otherContainer}>
              <GenderCard
                title="Other"
                selected={selectedGender === 'other'}
                onPress={() => handleGenderSelect('other')}
                renderIcon={() => (
                  <OtherIcon selected={selectedGender === 'other'} />
                )}
              />
            </View>

            {/* I don't want to specify option */}
            <View style={styles.unspecifiedContainer}>
              <TouchableOpacity
                onPress={handleUnspecifiedToggle}
                style={styles.unspecifiedTouchable}
              >
                <View
                  style={[
                    styles.checkbox,
                    unspecifiedSelected ? styles.checkboxSelected : styles.checkboxUnselected
                  ]}
                >
                  {unspecifiedSelected && (
                    <View style={styles.checkboxInner} />
                  )}
                </View>
                <Text style={styles.unspecifiedText}>
                  I don't want to specify.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

// Styles
const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  femaleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginBottom: 2,
  },
  maleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginBottom: 5,
  },
  otherContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginBottom: 5,
  },
  unspecifiedContainer: {
    width: '100%',
    paddingHorizontal: 4,
    marginTop: 10,
  },
  unspecifiedTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
  },
  checkboxSelected: {
    borderColor: '#6558F5',
  },
  checkboxUnselected: {
    borderColor: 'gray',
  },
  checkboxInner: {
    height: 16,
    width: 16,
    backgroundColor: '#6558F5',
  },
  unspecifiedText: {
    marginLeft: 12,
    fontSize: 18,
    color: 'white',
  },
});

export default GenderInputs

// Gender card component
const GenderCard = ({
  title,
  selected,
  onPress,
  renderIcon,
}: {
  title: string
  selected: boolean
  onPress: () => void
  renderIcon: () => React.ReactNode
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyles.container}>
      <View style={cardStyles.iconContainer}>
        <View
          style={[
            cardStyles.circle,
            selected ? cardStyles.circleSelected : cardStyles.circleUnselected
          ]}
        >
          {renderIcon()}

          {selected && (
            <View style={cardStyles.checkmark}>
              <Text style={cardStyles.checkmarkText}>✓</Text>
            </View>
          )}
        </View>
      </View>
      <Text style={cardStyles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  circle: {
    height: 96,
    width: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
  },
  circleSelected: {
    borderColor: '#6558F5',
    borderWidth: 2,
  },
  circleUnselected: {
    borderColor: 'gray',
  },
  checkmark: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#6558F5',
  },
  checkmarkText: {
    color: 'white',
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    color: 'white',
  },
});

// Icon components
const FemaleIcon = ({ selected }: { selected: boolean }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle cx="20" cy="15" r="8" stroke="white" strokeWidth="2" />
    <Path d="M20 23V35" stroke="white" strokeWidth="2" />
    <Path d="M14 29H26" stroke="white" strokeWidth="2" />
  </Svg>
)

const MaleIcon = ({ selected }: { selected: boolean }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle cx="20" cy="22" r="8" stroke="white" strokeWidth="2" />
    <Path d="M24 16L32 8" stroke="white" strokeWidth="2" />
    <Path d="M26 8H32V14" stroke="white" strokeWidth="2" />
  </Svg>
)

const OtherIcon = ({ selected }: { selected: boolean }) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <Circle cx="15" cy="20" r="8" stroke="white" strokeWidth="2" />
    <Path d="M21 20H34" stroke="white" strokeWidth="2" />
    <Path d="M29 15L34 20L29 25" stroke="white" strokeWidth="2" />
  </Svg>
)
