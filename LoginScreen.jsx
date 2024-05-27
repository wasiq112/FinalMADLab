import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import  {HomeScreen} from './HomeScreen';
import SignUpScreen from './SignUpScreen';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleButtonPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    try {
  const userCredential = await signInWithEmailAndPassword(auth, 'malikmohsin8239@gmail.com', 'Mohsin@#123');
    const user = userCredential.user;

   console.log("login success  ",user);
      navigation.navigate('Home');
      // Navigate to Home Screen or authenticated area
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', error.message);
      // Handle error
    }
  };

  return (
    <ImageBackground source={require('./assets/bobzy.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Text style={
            {fontSize:50,fontWeight:"400"}
      }>Cricket Store</Text>
      
        <View style={styles.textInputContainer}>
          <TextInput
            value={email}
            onChangeText={handleEmailChange}
            style={styles.textInput}
            placeholder="Email"
          />
          <TextInput
            value={password}
            onChangeText={handlePasswordChange}
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Want to Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: 'navy',
    borderWidth: 2.5,
    borderRadius: 23,
    paddingHorizontal: 35,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.8)', // Semi-transparent white background for better readability
  },
  homen:{
    height:40,
    width:"100%",
   
    
  },
  button: {
    height: 40,
    width: 250,
    borderRadius: 50,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;
