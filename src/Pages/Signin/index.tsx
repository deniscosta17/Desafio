import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Image, Text, Alert, TextInput, TouchableOpacity, 
  KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from './style';
import Logo from '../../assets/logo.png';

export function Signin() {

  const [name, setName] = useState("");
  const [senha, setPass] = useState("");

  const handleSubmit = async () => {
   
      AsyncStorage.setItem('username', 'A');
      AsyncStorage.setItem('password', 'B');

      const login = await AsyncStorage.getItem('username')
      const pass = await AsyncStorage.getItem('password')
      if( name == login && senha == pass) {
        Alert.alert('AAAA');
      
      }else{
        alert('User ou senha incorretos !');
      }
      

  };

  return (
    <KeyboardAvoidingView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false} />
        <Image source={ Logo } 
        style={styles.logo} />
        <Text style={styles.logoText} > FrameMarket </Text>
        
        <TextInput placeholder="Username" onChangeText={(value) => setName(value)} style={styles.input} />
        <TextInput placeholder="Password"  onChangeText={(value) => setPass(value)} style={styles.input} />
        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua Senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} 
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}