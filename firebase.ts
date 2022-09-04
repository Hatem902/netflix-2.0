// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgx4mSLZ-G3Zk_ghH8dFJh0ERmOBIzBz0',
  authDomain: 'netflix-2-78fc8.firebaseapp.com',
  projectId: 'netflix-2-78fc8',
  storageBucket: 'netflix-2-78fc8.appspot.com',
  messagingSenderId: '1078577705967',
  appId: '1:1078577705967:web:34b7eefa12a3e27d6a3c1a',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
