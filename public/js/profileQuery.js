'use strict';
var data = require("../profile.json");

$(document).ready(function() {
	initializePage();
    
})

function initializePage() {
	$('#clearData').click(deleteData);
	$('#changeName').click(changeName);
	$('#changeEmail').click(changeEmail);
}

function deleteData(e){
	e.preventDefault();
	data.profile.pop();
}

function changeName(e){
	e.preventDefault();
	var value = $('#inputName').val();
	$('#profileName').text(value);
	data.profile.name = value;	
}

function changEmail(e){
	e.preventDefault();
	var value = $('#inputEmail').val();
	$('#profileEmail').text(value);
	data.profile.email = value;	
}