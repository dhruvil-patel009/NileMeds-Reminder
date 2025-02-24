import { ScrollView, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import MedicationList from '../../components/MedicationList';

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}
    >
      <Header />
      <MedicationList />
    </ScrollView>
  );
}
