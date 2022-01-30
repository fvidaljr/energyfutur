// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcY1EqO3og5fr0paeY9eoXbSnoTsb2ckc",
  authDomain: "energyfutur-ec.firebaseapp.com",
  projectId: "energyfutur-ec",
  storageBucket: "energyfutur-ec.appspot.com",
  messagingSenderId: "311784848814",
  appId: "1:311784848814:web:43a2890f6f2623292f5c3f",
  measurementId: "G-D07PB5HRH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);