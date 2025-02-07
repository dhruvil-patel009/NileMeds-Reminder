import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';
import {TypeList} from '../constant/options'


export default function AddMedicationForm() {

    const [formData, setFormData] = useState();

    const onHandleInputChange= (filed, value)=>{
        setFormData(prev=>({
            ...prev,
            [filed]:value
        }))

        console.log(formData)
    }
  return (
    <View style={{padding:25}}>

      <Text style={styles?.header}>Add New Medication</Text>

      <View style={styles?.Inputgroup}>
      <Ionicons style={styles.icon} name="medkit-outline" size={24} />

      <TextInput style={styles?.textInput} placeholder='Medicine Name'
        onChangeText={(value)=>onHandleInputChange('name', value)}
      />

</View>

{/* Type list  */}

<FlatList
    data={TypeList}
    horizontal
    style={{marginTop:15}}
    showsHorizontalScrollIndicator={false}
    renderItem={({item, index}) =>(
        <TouchableOpacity style={[styles?.Inputgroup, {marginRight:10},
            {backgroundColor:item.name==formData?.type?.name?Colors.PRIMARY:'white'}
        ]} 
        onPress={()=>onHandleInputChange('type',item)}
        
        >
            <Text style={styles?.typeText}>{item?.name}</Text>
            </TouchableOpacity>
    )}
/>

    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        fontWeight:'bold'
    },
    Inputgroup:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        borderRadius:8,
        borderWidth:1,
        borderColor: Colors?.LIGHT_GRAY_BORDER,
        marginTop:7
    },
    textInput:{
        flex:1,
        marginLeft:10,
        fontSize:16
    },
    icon:{
        color:Colors?.PRIMARY,
        borderRightWidth:1,
        paddingRight:12,
        borderColor:Colors?.GRAY
    },
    typeText:{
        fontSize:16
    }
})