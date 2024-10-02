import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';


const cipraLogo = require('./img/cipra-logo.png'); 
const image1 = require('./img/image1.jpg');
const image2 = require('./img/image2.png');

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


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
    }
  ];


  const handleSignIn = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (email === 'jared.leitner@gmail.com' && password === 'Test123!*') {
      setError('');
    
      navigation.navigate('ImageDisplay', { images: defaultImages });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Image source={cipraLogo} style={styles.logo} />

      <Text style={styles.title}>Welcome Back!</Text>
      
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

 
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="password"
      />

  
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

 
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F5FF', 
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', 
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
    elevation: 2, 
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
