//your JS code here. If required.
document.getElementById("myform").addEventListener('submit', function(event) {
	event.preventDefault();

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var phone = document.getElementById('phone').value;
	var mail = document.getElementById('mail').value;

	var alertMessage = 'First Name: ' + fname + '\nLast Name: ' + lname + '\nPhone no: ' + phone + '\nEmail ID: ' + mail;
	alert(alertMessage);
})