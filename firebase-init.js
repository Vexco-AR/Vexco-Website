// Load the Firebase v9 Compatibility SDKs
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYRHaev9Yfvp4SH2__2r6vvDi_KJWUZj0",
  authDomain: "vexcollc-ar.firebaseapp.com",
  projectId: "vexcollc-ar",
  storageBucket: "vexcollc-ar.firebasestorage.app",
  messagingSenderId: "881363860500",
  appId: "1:881363860500:web:bb06a80d001644e245bb01",
  measurementId: "G-H9WR4F5ZMK"
};

// Initialize
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();