import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false)

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit))
      setWaitingForSecondOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.')
      setWaitingForSecondOperand(false)
      return
    }

    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecondOperand(false)
  }

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display)

    if (firstOperand === null) {
      setFirstOperand(inputValue)
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator)
      setDisplay(String(result))
      setFirstOperand(result)
    }

    setWaitingForSecondOperand(true)
    setOperator(nextOperator)
  }

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  return (
    <View className="flex-1 items-center justify-center h-[100vh] w-full bg-white">
      <View className="w-[300px] bg-gray-100 rounded-lg overflow-hidden">
        <View className="bg-gray-800 p-4">
          <Text className="text-white text-right text-3xl font-bold">{display}</Text>
        </View>
        
        <View className="flex-row flex-wrap">
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-gray-200" onPress={clearDisplay}>
            <Text className="text-xl">C</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-gray-200" onPress={() => setDisplay(String(parseFloat(display) * -1))}>
            <Text className="text-xl">+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-gray-200" onPress={() => setDisplay(String(parseFloat(display) / 100))}>
            <Text className="text-xl">%</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-orange-500" onPress={() => performOperation('/')}>
            <Text className="text-xl text-white">÷</Text>
          </TouchableOpacity>
          
          {[7, 8, 9].map(digit => (
            <TouchableOpacity key={digit} className="w-1/4 h-16 justify-center items-center bg-gray-100" onPress={() => inputDigit(digit)}>
              <Text className="text-xl">{digit}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-orange-500" onPress={() => performOperation('*')}>
            <Text className="text-xl text-white">×</Text>
          </TouchableOpacity>
          
          {[4, 5, 6].map(digit => (
            <TouchableOpacity key={digit} className="w-1/4 h-16 justify-center items-center bg-gray-100" onPress={() => inputDigit(digit)}>
              <Text className="text-xl">{digit}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-orange-500" onPress={() => performOperation('-')}>
            <Text className="text-xl text-white">-</Text>
          </TouchableOpacity>
          
          {[1, 2, 3].map(digit => (
            <TouchableOpacity key={digit} className="w-1/4 h-16 justify-center items-center bg-gray-100" onPress={() => inputDigit(digit)}>
              <Text className="text-xl">{digit}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-orange-500" onPress={() => performOperation('+')}>
            <Text className="text-xl text-white">+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-2/4 h-16 justify-center items-center bg-gray-100" onPress={() => inputDigit(0)}>
            <Text className="text-xl">0</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-gray-100" onPress={inputDecimal}>
            <Text className="text-xl">.</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/4 h-16 justify-center items-center bg-orange-500" onPress={() => performOperation('=')}>
            <Text className="text-xl text-white">=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Calculator;