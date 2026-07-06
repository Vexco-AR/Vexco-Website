// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRHaev9Yfvp4SH2__2r6vvDi_KJWUZj0",
  authDomain: "vexcollc-ar.firebaseapp.com",
  projectId: "vexcollc-ar",
  storageBucket: "vexcollc-ar.firebasestorage.app",
  messagingSenderId: "881363860500",
  appId: "1:881363860500:web:bb06a80d001644e245bb01",
  measurementId: "G-H9WR4F5ZMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);