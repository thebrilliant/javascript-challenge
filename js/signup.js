/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

'use strict';

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


	occupation.addEventListener('change', occupationOptions());
	cancelButton.addEventListener('click', cancelForm);
	thisForm.addEventListener('submit', onSubmit);
}

function occupationOptions () {
	
	document.getElementById("occupationOther").style.display = 'inline';
}

function cancelForm() {
	var response = window.confirm('Are you sure you want to leave this page?');

	if (response) {
		window.location.href = 'http://www.google.com';
	};
}

function onSubmit (event) {
	console.log("submit click worked");
	try {
		var isVaild = validate(this);
	} catch (exception) {
		console.log(exception);
		isVaild = false;
	}

	if (!isVaild && event.preventDefault) {
		event.preventDefault();
	};

	return isVaild;
}

function validate(form) {
	
	var necessaryFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'birthdate'];
	return necessaryFields.forEach(validateField, form) && validateZip('zip') && validateBDay('birthdate');
}

function validateField (field) {
	if (0 == this[field].value.trim().length) {
		this[field].className = 'form-control invalid'
		return false;
	};
	return true;
}

function validateZip (zip) {
	var zipRegExp = new RegExp('^\\d{5}$');

	return zipRegExp.test(zip);
}

function validateBDay (bDay) {
	var today = new Date();
	var birthD = new Date(bDay);

	if (today.getFullYear() - birthD.getFullYear <= 13) {
		document.getElementById('birthdateMessage').innerHTML = "You must be 13 years or older to sign up!";
		return false;
	} else if (today.getFullYear() - birthD.getFullYear == 13) {
		if (today.getMonth() > birthD.getMonth()) {
			return true;
		} else if (today.getMonth() < birthD.getMonth()) {
			document.getElementById('birthdateMessage').innerHTML = "You must be 13 years or older to sign up!";
			return false;
		} else { //months are equal
			if (today.getDate() > birthD.getDate()) {
				document.getElementById('birthdateMessage').innerHTML = "You must be 13 years or older to sign up!";
				return false;
			};
		};
	};

	return true;
}
