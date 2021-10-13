import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// TODO: Replace the following with your app's Firebase project configuration
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

const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

var ui = new firebaseui.auth.AuthUI(firebase.auth());
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();