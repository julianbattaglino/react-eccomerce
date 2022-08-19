// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxJRotRSx7c_CHzdAhqr93scR_xCchcMM",
  authDomain: "marcelo-kopp-react-eccomerce.firebaseapp.com",
  projectId: "marcelo-kopp-react-eccomerce",
  storageBucket: "marcelo-kopp-react-eccomerce.appspot.com",
  messagingSenderId: "827692155316",
  appId: "1:827692155316:web:342432119a30994473f2e1",
  measurementId: "G-0BHWVDEGQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database for components to use.
export const db = getFirestore(app);
