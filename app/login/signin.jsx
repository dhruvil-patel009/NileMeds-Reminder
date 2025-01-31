import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'

const signin = () => {

    const router= useRouter();
  return (
    <View style={{padding:25}}>
      <Text style={styles?.textheader}>Let's Sign You In</Text>
      <Text style={styles?.subText}>Welcome Back</Text>
      <Text style={styles?.subText}>You've been Missed!</Text>

      <View style={{marginTop:25}}>
        <Text>Email</Text>
        <TextInput style={styles?.textInput} placeholder='Enter Your Email'/>
      </View>

      <View style={{marginTop:25}}>
        <Text>Password</Text>
        <TextInput style={styles?.textInput} placeholder='Enter Your Password' secureTextEntry={true}/>
      </View>

       <TouchableOpacity style={styles?.button}
                        //   onPress={()=> router.push('login/signup')}
                      >
                          <Text style={{ textAlign: 'center', fontSize:18, color:'white' }}>Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles?.buttoncreate}
                          onPress={()=> router.push('login/signUp')}
                      >
                          <Text style={{ textAlign: 'center', fontSize:18, color:Colors.PRIMARY }}>Create Account</Text>
                      </TouchableOpacity>
    </View>
  )
}

export default signin

const styles = StyleSheet.create({
    textheader:{
        fontSize:30,
        fontWeight: 'bold',
        marginTopL:15
    },
    subText:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        color:Colors.GRAY
    },
    textInput:{
        padding:10,
        borderWidth:1,
        fontSize:17,
        borderRadius:10,
        marginTop:5,
        backgroundColor:'white'
    },

    button: {
        marginTop: 40,
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10
    },
    buttoncreate: {
        marginTop: 40,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth:1,
        borderColor: Colors.PRIMARY
    }

})