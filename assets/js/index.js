// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH2stvUtZBhi8QiSLbVGG7lpAGNnhEZkg",
    authDomain: "medi-check-76263.firebaseapp.com",
    databaseURL: "https://medi-check-76263-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "medi-check-76263",
    storageBucket: "medi-check-76263.appspot.com",
    messagingSenderId: "288808835405",
    appId: "1:288808835405:web:47d55d162750f620363f04",
    measurementId: "G-E0KQLPKZ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);