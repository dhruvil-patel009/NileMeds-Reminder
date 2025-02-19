// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth } from 'firebase/auth'; // for authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMD6lqm8SKfotIT0IBQFdE79meC_J2_rY',
  authDomain: 'nilemeds.firebaseapp.com',
  projectId: 'nilemeds',
  storageBucket: 'nilemeds.firebasestorage.app',
  messagingSenderId: '940251867327',
  appId: '1:940251867327:web:670b6322bc182e52547e0a',
  measurementId: 'G-FZVX66J7LL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const auth = initializeAuth(app,{
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export const db = getFirestore(app);
