import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MedicationCardItem from '../../components/MedicationCardItem';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constant/Colors';
import { doc, arrayUnion, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import moment from 'moment';

export default function MedicationActionModal() {
  const router = useRouter();
  const medicine = useLocalSearchParams();

  const UpdateActionStatus = async (status) => {
    try {
      const docRef = doc(db, 'medication', medicine?.docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const existingActions = docSnap.data().action || [];
        
        // Check if an action already exists for the selected date
        const existingAction = existingActions.find(
          (action) => action.date === medicine?.selectedDate
        );

        // If action already exists, update it, else add a new action
        if (existingAction) {
          // Update the status if it already exists for that date
          const updatedActions = existingActions.map((action) =>
            action.date === medicine?.selectedDate
              ? { ...action, status: status, time: moment().format('LT') }
              : action
          );
          await updateDoc(docRef, { action: updatedActions });
        } else {
          // Add new action if not found for the date
          await updateDoc(docRef, {
            action: arrayUnion({
              status: status,
              time: moment().format('LT'),
              date: medicine?.selectedDate,
            }),
          });
        }
      }

      Alert.alert(status, 'Response Saved!', [
        {
          text: 'Ok',
          onPress: () => router.replace('(tabs)'),
        },
      ]);
    } catch (error) {
      console.error('Error updating action status: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.notificationimg}
        source={require('../../assets/images/notification.gif')}
      />
      <Text style={{ fontSize: 18 }}>{medicine?.selectedDate}</Text>
      <Text style={{ fontSize: 38, fontWeight: 'bold' }}>
        {medicine?.reminder}
      </Text>
      <Text style={{ fontSize: 18 }}>It's time to take</Text>

      <MedicationCardItem medicine={medicine} />

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.closebtn}
          onPress={() => UpdateActionStatus('Missed')}
        >
          <Ionicons name="close-outline" size={24} color="red" />
          <Text style={{ fontSize: 20, color: 'red' }}>Missed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.successbtn}
          onPress={() => UpdateActionStatus('Taken')}
        >
          <Ionicons name="checkmark-outline" size={24} color="white" />
          <Text style={{ fontSize: 20, color: 'white' }}>Taken</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ position: 'absolute', bottom: 25 }}
        onPress={() => router.back()}
      >
        <Ionicons name="close-circle" size={44} color={Colors.GRAY} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  notificationimg: {
    width: 140,
    height: 140,
  },
  btnContainer: {
    marginTop: 25,
    flexDirection: 'row',
    gap: 20,
  },
  closebtn: {
    padding: 10,
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 10,
  },
  successbtn: {
    padding: 10,
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    borderRadius: 10,
  },
});
