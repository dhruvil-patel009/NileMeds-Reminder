import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import {signOut} from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'


const index = () => {
  return (
    <View>
      <Text>Home Screen </Text>
      <Button title='LogOut' onPress={()=>signOut(auth)}/>
    </View>
  )
}

export default index