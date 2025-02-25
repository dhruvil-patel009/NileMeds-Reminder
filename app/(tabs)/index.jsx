import { FlatList, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import MedicationList from '../../components/MedicationList';

export default function HomeScreen() {
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            flex: 1,
          }}
        >
          <Header />
          <MedicationList />
        </View>
      }
    />
  );
}
