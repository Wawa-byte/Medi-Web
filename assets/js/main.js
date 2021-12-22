// var mainApp = {};
// (function(){
//     var mainContainer = document.getElementById("main_container");
//
//     var logtout =  function(){
//         fireBase.auth().signOut().then(function(){
//             console.log('success');
//             window.location.replace("welcome_doctor.html");
//         },function(){})
//     }
//
//     var init = function(){
//         fireBase.auth().onAuthStateChanged(function(user) {
//             if (user) {
//                 // User is signed in.
//                 console.log("stay");
//                 mainContainer.style.display = "";
//             } else {
//                 // No user is signed in.
//                 mainContainer.style.display = "none";
//                 console.log("redirect");
//                 window.location.replace("login.html");
//             }
//         });
//     }
//
//     init();
//     mainApp.logout = logtout;
// })();

fireBase.auth().onAuthStateChanged(user => {
    console.log(user);
    if(!user) {
        window.location = 'https://medi-check-76263.web.app/registration.html'; //If User is not logged in, redirect to login page
    }
});

// const {getAuth} = require("firebase/firebase-auth");
// const auth = fireBase.auth();
// getAuth()
//     .getUserByEmail("waleedakhtar2002@gmail.com")
//     .then((userRecord) => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//     })
//     .catch((error) => {
//         console.log('Error fetching user data:', error);
//     });