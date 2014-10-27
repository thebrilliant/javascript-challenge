/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";

document.addEventListener('DOMContentLoaded', onReady);

function onReady() {

	var thisForm = document.getElementById("signup");
	var cancelButton = document.getElementById("cancelButton");

	var elem = document.getElementById("state");
	for (var i = 0; i < usStates.length; i++) {
		var opt = document.createElement("option");
		opt.value = usStates[i].code;
		var optText = document.createTextNode(usStates[i].name);
		opt.appendChild(optText);
		elem.appendChild(opt);
	}

	occupation.addEventListener('change', occupationOptions(thisForm));
	cancelButton.addEventListener('click', cancelForm);
	thisForm.addEventListener('submit', onSubmit)
}

function occupationOptions (form) {
	
	//form.getElementById("occupationOther").style.display = inline;
}

function cancelForm() {
	var response = window.confirm('Are you sure you want to leave this page?');

	if (response != 0) {
		window.loaction = 'http://www.google.com';
	}
}

function onSubmit (event) {
	// body...
}

function validate(form) {
	//
	var necessaryFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'birthdate'];
	necessaryFields.forEach(validateField, form);
}

function validateField (field) {
	if (0 == this[field].value.trim().length) {
		this[field].className = 'form-control invalid'
		return false;
	} 
	return true;
}