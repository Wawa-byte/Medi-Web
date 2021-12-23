// Used for auth
var uiConfig = {
    signInSuccessUrl: 'https://medi-check-76263.web.app/welcome_doctor.html',
    signInOptions: [
        // Login options presented to the user
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'https://medi-check-76263.web.app/about-us.html'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);