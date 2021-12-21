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
