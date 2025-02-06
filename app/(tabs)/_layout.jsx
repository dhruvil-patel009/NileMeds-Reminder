import { Tabs, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
import { getLocalStorage } from '../../Service/Storage';

export default function TabLayout() {
  // if user login or not
  const router = useRouter();

  useEffect(() => {
    GetUserDetails();
  }, []);

  const GetUserDetails = async () => {
    const userInfo = await getLocalStorage('userDetails');
    if (!userInfo) {
      router.replace('/login');
    }
    console.log('object====> ', userInfo);
  };
  console.log(GetUserDetails);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: 'Add New',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
