// Game Object
var rpsM = {
    // ========================
    // Variables 
    // ========================
    database: null,
    player1: {
        name: null,
        choice: null
    },
    player2: {
        name: null,
        choice: null
    },
    winConditions: {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    },


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
    },

    // Check who wins
    checkWin: function () {
        if (this.player1.choice == this.player2.choice) {
            return result = "tie";
        }
        else if (this.winConditions[this.player1.choice] == this.player2.choice) {
            return victor = "player 1"; // player 1 wins
        }
        else {
            return victor = "player 2"; // player 2 wins
        }
    }
};

// ========================
// Main
// ========================
// Shorthand for $( document ).ready()
$(function () {
    // Tooltip show what each symbol means
    $('.tooltipped').tooltip();

    // Initialize firebase
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