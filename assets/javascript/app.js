 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDZxsGOPgRmU1Yn9FxCNS7-65bE2oVI-U",
    authDomain: "traintime-trainscheduler.firebaseapp.com",
    databaseURL: "https://traintime-trainscheduler.firebaseio.com",
    projectId: "traintime-trainscheduler",
    storageBucket: "traintime-trainscheduler.appspot.com",
    messagingSenderId: "693525873834"
  };

  firebase.initializeApp(config);

  var database = firebase.database();



  $("#submit").on("click", function() {

  	event.preventDefault();

  	var name = $("#name").val().trim();
  	var destination = $("#destination").val().trim();
  	var time = $("#time").val().trim();
  	var frequency = parseInt($("#frequency").val().trim());


  });