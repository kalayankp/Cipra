import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const image1 = require('./img/image1.jpg'); 
const image2 = require('./img/image2.png'); 
const image3 = require('./img/image3.jpg'); 

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Sample default images data
  const defaultImages = [
    {
      date: "2024-10-01",
      imageUrl: image1,
      recommendation: "First Image Recommendation"
    },
    {
      date: "2024-10-02",
      imageUrl: image2,
      recommendation: "Second Image Recommendation"
    },
    {
      date: "2024-10-03",
      imageUrl: image3,
      recommendation: "Third Image Recommendation"
    },
  ];

  const handleSignIn = () => {
    if (email === 'jared.leitner@gmail.com' && password === 'Test123!*') {
      // Navigate to ImageDisplayScreen with default images
      navigation.navigate('ImageDisplay', { images: defaultImages });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F5FF', // Light background color
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E86C1',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2, // Add slight shadow effect
  },
  button: {
    width: '100%',
    backgroundColor: '#2E86C1',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#2E86C1',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
