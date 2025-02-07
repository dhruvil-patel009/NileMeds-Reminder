import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ConstantString from '../constant/ConstantString';
import Colors from '../constant/Colors';
import { useRouter } from 'expo-router';

export default function EmptyState() {
  const router = useRouter();
  return (
    <View style={styles.EState}>
      <Image
        source={require('../assets/images/syringe.png')}
        style={styles.Eimg}
      />

      <Text style={styles.Etext}>{ConstantString?.NoMedication}</Text>
      <Text style={styles.Esubtext}>{ConstantString?.MedicationSubText}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router?.push('/add-new-medication')}
      >
        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>
          {ConstantString?.AddNewMediciationBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  EState: {
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
  },
  Eimg: {
    width: 150,
    height: 150,
  },
  Etext: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
  },
  Esubtext: {
    fontSize: 16,
    color: Colors?.DARK_GRAY,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors?.PRIMARY,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 30,
  },
});
