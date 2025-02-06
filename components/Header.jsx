import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../Service/Storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    GetUserDetails();
  }, []);

  const GetUserDetails = async () => {
    const UserInfo = await getLocalStorage('userDetails');
    console.log(UserInfo);
    setUser(UserInfo);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles?.Header}>
        <View style={styles?.HeaderText}>
          <Image
            source={require('../assets/images/happy-face.png')}
            style={{ width: 45, height: 45 }}
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Hello {user?.displayName} 👋
          </Text>
        </View>
        <Ionicons name="settings-outline" size={34} color={Colors.DARK_GRAY} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
