// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { envVariables } from './envVariables';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: envVariables.FIREBASE_API_KEY,
  authDomain: envVariables.FIREBASE_AUTH_DOMAIN,
  projectId: envVariables.FIREBASE_PROJECT_ID,
  storageBucket: envVariables.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVariables.FIREBASE_MESSAGING_SENDER_ID,
  appId: envVariables.FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
