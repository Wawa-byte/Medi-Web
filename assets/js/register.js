import firebase from "firebase/compat";

const firstName = document.getElementById("name")
const surname = document.getElementById("name-1")
const age = document.getElementById("age")
const emailPatient = document.getElementById("email")

const datebase = firebase.database();

addButton.addEventListener('click', (e) => {
    e.preventDefault();
})