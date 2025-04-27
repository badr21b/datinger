import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>({});
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; confirmPassword?: string } = {};
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        // API call to register user
        // Replace with your actual signup logic
        console.log('Signup with', { email, password });
        
        // Navigate to next screen after successful signup
        navigation.navigate('Home');
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ email: 'Signup failed. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1" contentContainerClassName="flex-grow justify-center">
        <View className="p-5">
          <Text className="text-2xl font-bold mb-6 text-center">Create Account</Text>
          
          <View className="mb-4">
            <Text className="text-base mb-2">Email</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-base"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email ? <Text className="text-red-500 text-sm mt-1">{errors.email}</Text> : null}
          </View>
          
          <View className="mb-4">
            <Text className="text-base mb-2">Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-base"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
            {errors.password ? <Text className="text-red-500 text-sm mt-1">{errors.password}</Text> : null}
          </View>
          
          <View className="mb-4">
            <Text className="text-base mb-2">Confirm Password</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3 text-base"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              secureTextEntry
            />
            {errors.confirmPassword ? (
              <Text className="text-red-500 text-sm mt-1">{errors.confirmPassword}</Text>
            ) : null}
          </View>
          
          <TouchableOpacity
            className={`rounded-lg p-4 items-center mt-4 ${loading ? 'bg-blue-400' : 'bg-blue-500'}`}
            onPress={handleSignup}
            disabled={loading}
          >
            <Text className="text-white font-bold text-base">
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
          
          <View className="mt-6 items-center">
            <Text className="text-base">
              Already have an account?{' '}
              <Text
                className="text-blue-500 font-bold"
                onPress={() => navigation.navigate('Login')}
              >
                Log In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen; 