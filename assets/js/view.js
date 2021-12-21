const database = fireBase.database();

const usersRef = database.ref('Patients');
usersRef.on('value', function (snapshot){
    snapshot.forEach(function (element){
        let test = element.val();
        let jsontest = JSON.stringify(test, null, 2);
        jsontest = jsontest.replace(/[{}]/g, "");
        document.querySelector('#viewPatient').innerHTML += `
        <div>${jsontest}</div>
        `
    });
})

const reviewRef = database.ref('Reviews');
reviewRef.on('value', function (snapshot) {
    snapshot.forEach(function (elements) {
        let review = elements.val();
        console.log("Review working");
        console.log(review);
        let reviewJson = JSON.stringify(review);
        reviewJson = reviewJson.replace(/[{}]/g, "");
        document.querySelector('#viewReview').innerHTML += `
        <div>${reviewJson}</div>
        `
    });
})
