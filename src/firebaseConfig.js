import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpRfqI97HO8XFUjXw4Zrse-8eWy7DLCpk",
  authDomain: "beatnest10203040.firebaseapp.com",
  projectId: "beatnest10203040",
  storageBucket: "beatnest10203040.firebasestorage.app",
  messagingSenderId: "861535358755",
  appId: "1:861535358755:web:c2d3fc5f80e46224158696"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);