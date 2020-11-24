document.getElementById('fadeIn1').className += 'fade-out';
document.getElementById('fadeIn2').className += 'fade-out';
document.getElementById('fadeIn3').className += 'fade-out';
document.getElementById('p_git').className += 'fade-out';

const load = () => {
	let el1 = document.getElementById('fadeIn1');
	el1.classList.remove('fade-out');

	let el2 = document.getElementById('fadeIn2');
	el2.classList.remove('fade-out');

	let el3 = document.getElementById('fadeIn3');
	el3.classList.remove('fade-out');

	let el4 = document.getElementById('p_git');
	el4.classList.remove('fade-out');
}

window.onload = load;

// contact form alert
function formValidation() {
	let ctkt = document.forms["ctkt"]
	let name = ctkt["Name"].value;
	let email = ctkt["Email"].value;
	let phone = ctkt["Phone"].value;
	let msg = ctkt["Message"].value;

	if (msg == "") {
		alert("you sure you don't want to say anything?")
	}
}

// github box
let formStatus = 'closed';

function openForm() {
	if (formStatus === 'open') {
		document.getElementById("myForm").style.display = "none";
		formStatus = 'closed';
	} else {
		document.getElementById("myForm").style.display = "block";
		formStatus = 'open';
	}
}