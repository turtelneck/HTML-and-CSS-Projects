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
	// figured I'd leave the rest just in case, but `msg` is the only one in use at the moment
	let msg = ctkt["Message"].value;

	if (msg == "") {
		alert("you sure you don't want to say anything?");
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

// fade in text at the bottom of the github box
let turtleText = document.getElementById('popup_p');
turtleText.className += 'fade-out';

function fadeIn() {
	setTimeout(function () { callback(); }, 1*1000);

	function callback() {
		turtleText.classList.remove('fade-out');
	}
}

let git_button = document.getElementById('git_button');
git_button.addEventListener('click', fadeIn);

// palpatine code
let zap1 = document.getElementById('lightning_1');
let zap2 = document.getElementById('lightning_2');
let zap3 = document.getElementById('lightning_3'); 
// (could make this work with zap element, used 3 for more potential flexibility)
let count = 0;

function order66() {
	count++;
	console.log(count);

	if (count === 5) {
		turtleText.innerHTML = "I see you have felt the button's call";
	} else if (count === 7) {
		turtleText.innerHTML = "I mean, feel the the <i>power</i> it's given you over this popup.";
	} else if (count === 9) {
		turtleText.innerHTML = "...and your power will only <i>grow</i> with more clicks!";
	} else if (count === 11) {
		turtleText.innerHTML = "further clicking can fulfill your wildest dreams!";
	} else if (count === 13) {
		turtleText.innerHTML = "yes! more! your thirst cannot be satisfied!";
	} else if (count === 15) {
		turtleText.innerHTML = "soon you will surpass all other button clickers!";
	} else if (count === 17) {
		turtleText.innerHTML = "yeeesss... yes! you are <i>right</i> to do this! it is your <i>destiny</i>!";
	} else if (count === 19) {
		turtleText.innerHTML = "fuel your passions into your index finger! feel the fire rise within!";
	} else if (count === 21) {
		turtleText.innerHTML = "heh heh heh heh...";
		blink();
	} else if (count === 23) {
		turtleText.innerHTML = "Mwahahahahahahahahaaaaa!";
		blink();
	} else if (count === 25) {
		turtleText.innerHTML = "<i>UNLIMITED</i>";
		blink();
		zap3.className = 'lightning_3'; // adds the lightning
		setTimeout(function () { blink(); }, 300);
		setTimeout(function () { zap3.className = ''; zap2.className = 'lightning_2'; }, 400);
		setTimeout(function () { blink(); }, 600);
		setTimeout(function () { zap2.className = ''; }, 700);
	} else if (count === 27) {
		turtleText.innerHTML = "<i>UNLIMITED POWEEEEEEEEEEEEEEEEER!!!</i>";
		blink();
		zap1.className = 'lightning_1';
		setTimeout(function () { blink(); }, 300);
		setTimeout(function () { zap1.className = ''; zap3.className = 'lightning_3'; }, 400);
		setTimeout(function () {
			// final blink, final changes (palpatine unleashed)
			blink();
			zap3.className = '';
			document.getElementById('me').src = 'Stylesheet/Images/family-man.jpg';
			document.getElementById('git').src = 'Stylesheet/Images/palpatine-zap.jpg';
			document.getElementById('mailbox').src = 'Stylesheet/Images/tony-boy.jpg';
			document.getElementById('Home').style.opacity = '0';
			document.getElementById('Home').style.pointerEvents = 'none';
			document.getElementById('Background').style.backgroundImage = 'url(stylesheet/images/palpatine-shark.gif)';
		}, 600);
	}
	
	function blink() {
		let target = document.getElementById('Background');
		target.className = 'Background'; // readies element for blink
		setTimeout(function () { target.className = "Background Blink" }, 5);
	}
}




// have a 'please turn off the palpatine' button