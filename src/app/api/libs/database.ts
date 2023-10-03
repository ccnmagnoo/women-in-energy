import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY as string,
  authDomain: process.env.FIREBASE_AUTHDOMAIN as string,
  projectId: process.env.FIREBASE_PROJECTID as string,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET as string,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID as string,
  appId: process.env.FIREBASE_APPID as string,
  measurementId: process.env.FIREBASE_MEASUREMENTID as string,
};

//init Firebase
const app = initializeApp(firebaseConfig);
//init Firestore
const db = getFirestore(app);
const analytics = getAnalytics(app);
