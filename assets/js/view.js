const database = fireBase.database();
// Prints out data from the realtime database
const usersRef = database.ref('Patients');
usersRef.on('value', function (snapshot){
    snapshot.forEach(function (element){
        let test = element.val();
        let jsontest = JSON.stringify(test, null, 2);
        jsontest = jsontest.replace(/[{}]/g, ""); // Removes the {} from the JSON
        document.querySelector('#viewPatient').innerHTML += `
        <div>${jsontest}</div>
        `
    });
})

const reviewRef = database.ref('Reviews');
reviewRef.on('value', function (snapshot) {
    snapshot.forEach(function (elements) {
        let review = elements.val();
        let reviewJson = JSON.stringify(review);
        reviewJson = reviewJson.replace(/[{}]/g, "");
        document.querySelector('#viewReview').innerHTML += `
        <div>${reviewJson}</div>
        `
    });
})

const aiRef = database.ref('Predictions');
aiRef.on('value', function (snapshot) {
    snapshot.forEach(function (item) {
        let analysis = item.val();
        let analysisJson = JSON.stringify(analysis);
        analysisJson = analysisJson.replace(/[{}]/g, "");
        document.querySelector('#viewRisk').innerHTML += `
        <div>${analysisJson}</div>
        `
    });
})

fireBase.auth().onAuthStateChanged(user => {
    console.log(user);
    if(!user) {
        window.location = 'https://medi-check-76263.web.app/registration.html'; //If User is not logged in, redirect to login page
    }
});
