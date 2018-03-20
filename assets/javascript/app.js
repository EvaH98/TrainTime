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

  var trainNum = 0;

  $("#submit").on("click", function(event) {

  	event.preventDefault();

  	var name = $("#name").val().trim();
  	var destination = $("#desination").val().trim();
  	var time = $("#time").val().trim();
  	var frequency = ($("#frequency").val().trim());


  	var newTrain = {
      name: name,
      destination: destination,
      frequency: frequency,
      startingTrain: time,
    };

    database.ref().push(newTrain);

  	alert("Train information succesfully added");

  	$("#name").val("");
  	$("#destination").val("");
  	$("#time").val("")
  	$("#frequency").val("");

  });

  database.ref().on("child_added", function(snapshot) {
   
    var newName = snapshot.val().name;
    var newDestination = snapshot.val().destination;
    var newFrequency = snapshot.val().frequency;
    var firstTime = snapshot.val().startingTrain;
   

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    var remainingTime = diffTime % newFrequency;
    console.log("time %: " +remainingTime);

    var minutesAway = newFrequency - remainingTime;

    var nextTrain = moment().add(minutesAway, "minutes");

    var nextTrainTime = moment(nextTrain).format("HH:mm")


    $("#trainInfo").append("<tr><td>" + newName + "</td><td>" + newDestination + "</td><td>" + newFrequency + "</td><td>" + nextTrainTime + "</td><td>" + minutesAway + "</td></tr>");


    trainNum++
    
  });