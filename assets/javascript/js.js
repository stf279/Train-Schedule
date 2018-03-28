"use strict";

$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC5BBVtQAZxHlBpxVw-ijuW7ppv1zGIPI8",
        authDomain: "timesheet-8cbd4.firebaseapp.com",
        databaseURL: "https://timesheet-8cbd4.firebaseio.com",
        projectId: "timesheet-8cbd4",
        storageBucket: "",
        messagingSenderId: "415191740669"
    };
    
    firebase.initializeApp(config);

    const database = firebase.database();

    let varName = $('#employeeName').val().trim();
    let varRole = $('#role').val().trim();
    let varStart = $('#startDate').val().trim();
    let varRate = $('#rate').val().trim();

$('.button').on("click", function(e){
    e.preventDefault();
    
    let data = {

        name: varName,
        role: varRole,
        StartDate: varStart,
        rate: varRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    };

    console.log(varName);
    console.log(varRole);
    console.log(varStart);
    console.log(varRate);

    database.ref().push(data);

    updateTable();

})

database.ref().on("child_added", function(snapshot){

    let sv = snapshot.val();
    console.log(sv);

})

function updateTable() {
    
    $("#table > tbody").append("<tr><td>" + varName + "</td><td>" + varRole + "</td><td>" +
    varStart + "</td><td>" + empMonths + "</td><td>" + varRate + "</td><td>" + empBilled + "</td></tr>");

}

});