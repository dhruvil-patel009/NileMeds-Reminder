import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constant/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../config/FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setLocalStorage } from '../../Service/Storage';

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const OnCreateAccount = () => {
    if (!email || !password || !userName) {
      ToastAndroid.show('Please Fill all details 📝', ToastAndroid.BOTTOM);
      Alert.alert('⚠️ Please Enter Email and Password ');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: userName
        });
        
        // Store user details manually in local storage
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: userName,
        };
        await setLocalStorage('userDetails', userData);

        console.log('User ===>', user);
        router.push('(tabs)');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log("Errormessage ===>",errorMessage)

        if (errorCode === 'auth/email-already-in-use') {
          ToastAndroid.show('Email Already exist', ToastAndroid.BOTTOM);
        }
        // ..
      });
  };

  return (
    <View style={{ padding: 25 }}>
      <Text style={styles?.textheader}>Create New Account</Text>

      <View style={{ marginTop: 25 }}>
        <Text>Full Name</Text>
        <TextInput
          style={styles?.textInput}
          placeholder="Enter Your Full Name"
          onChangeText={(value) => setUserName(value)}
        />
      </View>

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

      <TouchableOpacity style={styles?.button} onPress={OnCreateAccount}>
        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles?.buttoncreate}
        onPress={() => router.push('login/signin')}
      >
        <Text
          style={{ textAlign: 'center', fontSize: 18, color: Colors.PRIMARY }}
        >
          Already account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textheader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
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
