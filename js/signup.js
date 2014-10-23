/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";

document.addEventListener('DOMContentLoaded', onReady);

function onReady() {

	var elem = document.getElementById("state");
	for (var i = 0; i < usStates.length; i++) {
		var opt = document.createElement("option");
		opt.value = usStates[i].code;
		var optText = document.createTextNode(usStates[i].name);
		opt.appendChild(optText);
		elem.appendChild(opt);
	}
}


var option = document.createElement("OPTION");
option.value = document.createElement(states.code);

document.addEventListener('onCancelButtonClick', function(){
	alert('Are you sure you want to leave this page?');

	window.loaction = "http://www.google.com";
})