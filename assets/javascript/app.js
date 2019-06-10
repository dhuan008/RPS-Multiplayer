// Game Object
var rpsM = {
    // ========================
    // Variables 
    // ========================


    // ========================
    // Methods 
    // ========================

    // Firebase config and initialization details
    initFirebase: function () {
        // RPS-Multiplayer's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyC6tUCxvDD9K69cFl65qzNUzd7Wk7ZrKMY",
            authDomain: "rps-multiplayer-1d946.firebaseapp.com",
            databaseURL: "https://rps-multiplayer-1d946.firebaseio.com",
            storageBucket: "rps-multiplayer-1d946.appspot.com",
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
};


// Shorthand for $( document ).ready()
$(function () {
    rpsM.initFirebase();
    console.log("Ready!");
});