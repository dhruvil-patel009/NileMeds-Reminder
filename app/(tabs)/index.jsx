import { View, Text, Button } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
import {RemoveLocalStorage} from '../../Service/Storage'

const index = () => {
  return (
    <View>
     
    </View>
  );
};

export default index;
