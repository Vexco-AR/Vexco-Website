import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYRHaev9Yfvp4SH2__2r6vvDi_KJWUZj0",
  authDomain: "vexcollc-ar.firebaseapp.com",
  projectId: "vexcollc-ar",
  storageBucket: "vexcollc-ar.firebasestorage.app",
  messagingSenderId: "881363860500",
  appId: "1:881363860500:web:bb06a80d001644e245bb01",
  measurementId: "G-H9WR4F5ZMK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);