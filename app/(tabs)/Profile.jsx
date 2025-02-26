import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { getLocalStorage } from '@/Service/Storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Auth

export default function Profile() {
  const router = useRouter();
    const [user, setUser] = useState();
    const auth = getAuth(); // Initialize Firebase Auth
    useEffect(() => {
      GetUser();
    }, []);
  
    const GetUser = async () => {
      const UserInfo = await getLocalStorage('userDetails');
      setUser(UserInfo);
    };

  const item = [
    {
      id: 1,
      name: 'Add New Medication',
      icon: 'add-circle',
      path: '/add-new-medication',
    },
    {
      id: 2,
      name: 'My Medication',
      icon: 'medkit',
      path: '(tabs)',
    },
    { 
      id: 3, 
      name: 'History', 
      icon: 'time', 
      path: 'History', },
    { 
      id: 4, 
      name: 'Logout', 
      icon: 'exit', 
      path: 'logout' },
  ];

  // const onPressMenu = (Menu) => {
  //   router.push(Menu.path);
  //   console.log('pushiung',Menu)
  // };
  const onPressMenu = async (item) => {
    console.log('Navigating to:', item.path);
  
    if (item.path === 'logout') {
      try {
        await signOut(auth); // Firebase logout
        await AsyncStorage.removeItem('userDetails'); // Clear local storage
        router.replace('login'); // Redirect to login page
      } catch (error) {
        console.error('Logout error:', error.message);
      }
      return;
    }
    console.log('Navigating to again:', item.path);
    router.push(item.path);

    console.log('Navigating to:', item.path);

    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user?.displayName}</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {item.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => onPressMenu(item)}
          >
            <Ionicons name={item?.icon} size={24} color={Colors.PRIMARY} style={{
              padding:10,
              backgroundColor: Colors.LIGHT_PRIMARY,
              borderRadius:10
            }} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#646363',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF2FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'outfit',
    marginLeft: 10,
    fontWeight: '500',
  },
});
