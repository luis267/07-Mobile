// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeFirestore } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlYBPx4bJjo0VYYtfZMzd_LtTtxudQrE",
  authDomain: "aularafael-63155.firebaseapp.com",
  projectId: "aularafael-63155",
  storageBucket: "aularafael-63155.firebasestorage.app",
  messagingSenderId: "470201279418",
  appId: "1:470201279418:web:feb5f018305885e9a77383",
  measurementId: "G-PD9K0HDRNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = initializeFirestore(app, {experimentalForceLongPolling: true,
    useFetchStreams: false
});

export {db};