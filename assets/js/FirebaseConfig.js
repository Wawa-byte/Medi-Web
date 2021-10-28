var fireBase = fireBase || firebase;
var hasInit = false;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase Config files, do not touch
var config = {
    apiKey: "AIzaSyDH2stvUtZBhi8QiSLbVGG7lpAGNnhEZkg",
    authDomain: "medi-check-76263.firebaseapp.com",
    databaseURL: "https://medi-check-76263-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "medi-check-76263",
    storageBucket: "medi-check-76263.appspot.com",
    messagingSenderId: "288808835405",
    appId: "1:288808835405:web:47d55d162750f620363f04",
    measurementId: "G-E0KQLPKZ73"
};

if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}