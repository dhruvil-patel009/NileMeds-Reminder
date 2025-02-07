import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';
import { useRouter } from 'expo-router';


export default function AddMedicationHeader() {

  const router = useRouter()
  return (
    <View>
      <Image source={require('../assets/images/Consult.jpg')}
      style={{height:280, width:'100%'}}
      />

      <TouchableOpacity style={{position:'absolute', padding:25}} onPress={()=> router.back()}>
      <Ionicons name="arrow-back" size={28} color={Colors.DARK_GRAY} />

      </TouchableOpacity>
    </View>
  )
}