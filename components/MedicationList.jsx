import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetDateRangeToDisplay } from './../Service/ConvertDateTime';
import Colors from '@/constant/Colors';
import moment from 'moment';
import { getLocalStorage } from '@/Service/Storage';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';
import MedicationCardItem from '../components/MedicationCardItem';

export default function MedicationList() {
  const [medList, setMedList] = useState();
  const [dateRange, setDateRange] = useState();
  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM/DD/YYYY'),
  );

  useEffect(() => {
    GetDateRangeList();
    if (selectedDate) {
      GetMedicationList(selectedDate);
    }
  }, [selectedDate]);
  const GetDateRangeList = () => {
    const dateRange = GetDateRangeToDisplay();
    setDateRange(dateRange);
  };

  const GetMedicationList = async (selectedDate) => {
    const user = await getLocalStorage('userDetails');
    // console.log('user data ====>',user)
    try {
      const q = query(
        collection(db, 'medication'),
        where('userEmail', '==', user?.email),
        where('dates', 'array-contains', selectedDate),
      );
      const querySnapshot = await getDocs(q);
      setMedList([]);
      querySnapshot.forEach((doc) => {
        console.log('docId:' + doc.id + '==>', doc.data());
        setMedList((prev) => [...prev, doc.data()]);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.EState}>
      <Image
        source={require('../assets/images/Medican.jpg')}
        style={styles.Eimg}
      />

      <FlatList
        data={dateRange}
        horizontal
        style={{ marginTop: 15 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.dateGroup,
              {
                backgroundColor:
                  item?.formattedDate === selectedDate
                    ? Colors.PRIMARY
                    : Colors.LIGHT_GRAY_BORDER,
              },
            ]}
            onPress={() => setSelectedDate(item.formattedDate)}
          >
            <Text
              style={[
                styles.day,
                {
                  color:
                    item?.formattedDate === selectedDate ? 'white' : 'black',
                },
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.date,
                {
                  color:
                    item?.formattedDate === selectedDate ? 'white' : 'black',
                },
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={medList}
        renderItem={({ item, index }) => <MedicationCardItem medicine={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  EState: {
    marginTop: 25,
    // display: 'flex',
    // alignItems: 'center',
  },
  Eimg: {
    width: '100%',
    height: 300,
    borderRadius: 15,
  },
  dateGroup: {
    padding: 15,
    backgroundColor: Colors.LIGHT_GRAY_BORDER,
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
