import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constant/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../config/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setLocalStorage } from '../../Service/Storage';

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const OnSignInClick = () => {
    if (!email || !password) {
      ToastAndroid.show('Please Fill all details 📝', ToastAndroid.BOTTOM);

      Alert.alert('⚠️ Please enter email & password');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Login User ===>', user);
        await setLocalStorage('userDetails', user);
        router.replace('(tabs)');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == 'auth/invalied-creaential') {
          Alert.alert('Invalid email or password');
        }
      });
  };
  return (
    <View style={{ padding: 25 }}>
      <Text style={styles?.textheader}>Let's Sign You In</Text>
      <Text style={styles?.subText}>Welcome Back</Text>
      <Text style={styles?.subText}>You've been Missed!</Text>

      <View style={{ marginTop: 25 }}>
        <Text>Email</Text>
        <TextInput
          style={styles?.textInput}
          placeholder="Enter Your Email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Text>Password</Text>
        <TextInput
          style={styles?.textInput}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles?.button} onPress={OnSignInClick}>
        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles?.buttoncreate}
        onPress={() => router.push('login/signUp')}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 18, color: Colors.PRIMARY }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default signin;

const styles = StyleSheet.create({
  textheader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTopL: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.GRAY,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: 'white',
  },

  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  buttoncreate: {
    marginTop: 40,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});
