import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { getLocalStorage } from '@/Service/Storage';

export default function Profile() {
  const router = useRouter();
    const [user, setUser] = useState();
    useEffect(() => {
      GetUser();
    }, []);
  
    const GetUser = async () => {
      const UserInfo = await getLocalStorage('userDetails');
      setUser(UserInfo);
    };

  const Menu = [
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
      path: 'history' },
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
  const onPressMenu = async (Menu) => {
    console.log('Navigating to:', Menu.path);
  
    if (Menu.path == 'logout') {
      // Clear storage before navigating
      await AsyncStorage.removeItem('userDetails');
      router.replace('/login'); // Replace instead of push to prevent going back
      return;
    }
    console.log('Navigating to again:', Menu.path);
    router.push(Menu.path);

    console.log('Navigating to:', Menu.path);

    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2583/2583331.png',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user?.displayName}</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {Menu.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => onPressMenu(item)}
          >
            <Icon name={item.icon} size={24} color="#007AFF" />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
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
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
});
