// Game Object
var rpsM = {
    // ========================
    // Variables 
    // ========================
    database: null,

    // ========================
    // Methods 
    // ========================

    // Firebase config and initialization details
    initFirebase: function () {
        // RPS-Multiplayer's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyC6tUCxvDD9K69cFl65qzNUzd7Wk7ZrKMY",
            authDomain: "rps-multiplayer-1d946.firebaseapp.com",
            databaseURL: "https://rps-multiplayer-1d946.firebaseio.com",
            storageBucket: "rps-multiplayer-1d946.appspot.com",
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Create a variable to reference the database
        this.database = firebase.database();
    }
};

// ========================
// Main
// ========================
// Shorthand for $( document ).ready()
$(function () {
    rpsM.initFirebase();
    console.log(rpsM.database);



});


/*
    // Get elements
    const preObject = $('#object')[0];//document.getElementById("object");
    console.log("asd", preObject);
    const ulList = $('#list')[0];

    // Create references
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = dbRefObject.child('hobbies');

    // Sync onject changes
    dbRefObject.on('value', function(snap) {
        console.log(snap.val());
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    // Sync list changes
    dbRefList.on('child_added', function(snap) {
        console.log(snap.val());
        const li = document.createElement('li');
        li.append(snap.val());
        li.id = snap.key();
        ulList.appendChild(li);
    });
*/