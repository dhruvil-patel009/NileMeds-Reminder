import { Tabs, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getLocalStorage } from '../../Service/Storage';

export default function TabLayout() {
  // if user login or not
  const router = useRouter();

  useEffect(() => {
    GetUserDetails();
  });

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
        name="History"
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
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
