import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '@/constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MedicationCardItem({ medicine, selectedDate = '' }) {
  console.log(medicine);
  const [status, Setstatus] = useState();

  useEffect(() => {
    CheckedStatus();
  }, [medicine]);

  const CheckedStatus = () => {
    const actions = medicine?.action ?? [];  // Default to an empty array if undefined

    const data = actions?.find((item) => item.date == selectedDate);
    console.log('==', data);
    Setstatus(data);
  };
  return (
    <View style={styles?.container}>
      <View style={styles?.subContainer}>
        <View style={styles?.imageContainer}>
          <Image
            source={{ uri: medicine?.type?.icon }}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            {medicine?.name}
          </Text>
          <Text style={{ fontSize: 17 }}>{medicine?.when}</Text>
          <Text style={{ color: 'white' }}>
            {medicine?.does}
            {medicine?.type.name}
          </Text>
        </View>
      </View>
      <View style={styles.reminderContainer}>
        <Ionicons style={styles.icon} name="timer-outline" size={24} />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          {medicine?.reminder}
        </Text>
      </View>

      {status?.date && (
        <View style={styles.statuscontainer}>
          {status?.status === 'Taken' ? (
            <Ionicons name="checkmark-circle" size={24} color={Colors.GREEN} />
          ) : (
            status?.status === 'Missed' && (
              <Ionicons name="close-circle" size={24} color="red" />
            )
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor:Colors.LIGHT_PRIMARY,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
  },
  reminderContainer: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY_BORDER,
  },
  statuscontainer: {
    position: 'absolute',
    top: 5,
    padding: 7,
  },
});
