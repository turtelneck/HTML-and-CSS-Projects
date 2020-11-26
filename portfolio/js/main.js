document.getElementById('fadeIn1').className += 'fade-out';
document.getElementById('fadeIn2').className += 'fade-out';
document.getElementById('fadeIn3').className += 'fade-out';
document.getElementById('p_git').className += 'fade-out';
document.getElementById('hey').className += 'fade-out';
document.getElementById('my_name').className += 'fade-out';
document.getElementById('welcome').className += 'fade-out';

const load = () => {
	let el1 = document.getElementById('hey');
	el1.classList.remove('fade-out');

	let el2 = document.getElementById('my_name');
	el2.classList.remove('fade-out');

	let el3 = document.getElementById('welcome');
	el3.classList.remove('fade-out');

	let el4 = document.getElementById('fadeIn1');
	el4.classList.remove('fade-out');

	let el5 = document.getElementById('fadeIn2');
	el5.classList.remove('fade-out');

	let el6 = document.getElementById('fadeIn3');
	el6.classList.remove('fade-out');

	let el7 = document.getElementById('p_git');
	el7.classList.remove('fade-out');
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
		return false;
	} else {
		return true;
		returnToPreviousPage();
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
let fadeCounter = 0; // ensures function only runs once
// we fade this element in twice, depending on how many times the button is clicked
// we only want to delay the first time it's clicked
function fadeIn() {
	while (fadeCounter === 0) {
		fadeCounter++;
		setTimeout(function () { callback(); }, 1*1000);

		function callback() {
			turtleText.classList.remove('fade-out');
		}
	}
}

let git_button = document.getElementById('git_button');
git_button.addEventListener('click', fadeIn);

// the following is all the palpatine code
let zap1 = document.getElementById('lightning_1');
let zap2 = document.getElementById('lightning_2'); // could make this work with 1 zap element
let zap3 = document.getElementById('lightning_3'); // used 3 I case I ever want the flexibility
let p_git = document.getElementById('p_git');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

let count = 0;

function order66() {
	count++;
	console.log(count); // because why not track the count for fun?

	if (count === 1) {
		git_button.innerHTML = "(click again to close)";
	} else if (count === 2) {
		git_button.innerHTML = "(and again to open)";
	} else if (count === 3) {
		p_git.innerHTML = "(keep clicking)";
		git_button.innerHTML = "Nice, right?";
	} else if (count === 4) {
		git_button.innerHTML = "Nothin like a nice button";
		turtleText.className += 'fade-out';
	} else if (count === 5) {
		p_git.innerHTML = "";
		git_button.innerHTML = "Not4in l2ke a n!ce butt0n";
		setTimeout(function () { turtleText.classList.remove('fade-out'); }, 1);
		turtleText.innerHTML = "Ah yes, you feel the button's call. Good.";
	} else if (count === 6) {
		git_button.innerHTML = "N0t4iN 12ke @ n!ce b-t+0n";
	} else if (count === 7) {
		turtleText.innerHTML = "Feel the <i>power</i> it's given you over these buttons.";
	} else if (count === 8) {
		git_button.innerHTML = "N0^4iK 12k * < n!3c 8u)+Fn";
	} else if (count === 9) {
		turtleText.innerHTML = "Your power will only <i>grow</i> with more clicks!";
	} else if (count === 10) {
		git_button.innerHTML = "30^4iM 1$3 A My360 Z0 m$f30s";
	} else if (count === 11) {
		turtleText.innerHTML = "Further clicking can fulfill your wildest dreams!";
	} else if (count === 12) {
		git_button.innerHTML = "I pq3Qc 3^el2 ^0 ?ur ^ch!dsr";
	} else if (count === 13) {
		turtleText.innerHTML = "Yes! More! Your thirst cannot be satisfied!";
	} else if (count === 14) {
		git_button.innerHTML = "! pqeQc 3yel t0 ?4yr te24!nr";
	} else if (count === 15) {
		turtleText.innerHTML = "You will surpass all other button clickers!";
	} else if (count === 16) {
		git_button.innerHTML = "! pleQe 3ysel t0 ?4ur tea4!ng";
	} else if (count === 17) {
		turtleText.innerHTML = "Yeeesss... yes! you are <i>right</i> to do this! it is your <i>destiny</i>!";
	} else if (count === 18) {
		git_button.innerHTML = "I plede yself t0 y4ur tea4!ngs";
	} else if (count === 19) {
		turtleText.innerHTML = "Fuel your passions into your index finger! feel the fire rise within!";
	} else if (count === 20) {
		git_button.innerHTML = "I pledge myself to your teachings";
	} else if (count === 21) {
		btn6.style.display = 'none';
		btn3.style.display = 'none';
		document.getElementById('popup-Column_1').style.height = '126px';
		document.getElementById('popup-Column_2').style.height = '126px';
		turtleText.style.marginTop = '160px';
		turtleText.style.fontSize = '16px';
		turtleText.innerHTML = "heh heh heh heh...";
		blink();
	} else if (count === 22) {
		git_button.innerHTML = "I have heard the tragedy...";
	} else if (count === 23) {
		btn5.style.display = 'none';
		btn2.style.display = 'none';
		document.getElementById('popup-Column_1').style.height = '66px';
		document.getElementById('popup-Column_2').style.height = '66px';
		turtleText.style.marginTop = '135px';
		turtleText.style.fontSize = '20px';
		turtleText.innerHTML = "Hahahahahahahahahahaaaaa!";
		blink();
	} else if (count === 24) {
		git_button.innerHTML = "...of Darth Plagueis The Wise";
	} else if (count === 25) {
		btn4.style.display = 'none';
		btn1.style.display = 'none';
		turtleText.style.marginTop = '85px';
		turtleText.style.fontSize = '30px';
		turtleText.style.textAlign = 'left';
		turtleText.style.padding = '0px 65px';
		turtleText.innerHTML = "<i>UNLIMITED</i>";
		blink();
		zap3.className = 'lightning_3'; // adds the lightning
		setTimeout(function () { blink(); }, 300);
		setTimeout(function () { zap3.className = ''; zap2.className = 'lightning_2'; }, 400);
		setTimeout(function () { blink(); }, 600);
		setTimeout(function () { zap2.className = ''; }, 700);
	} else if (count === 26) {
		git_button.innerHTML = "I will do whatever you ask";
	} else if (count === 27) {
		p_git.innerHTML = "Good, now click again";
		turtleText.innerHTML = "<i>UNLIMITED POWEEEEEEEER!!!</i>";
		blink();
		zap1.className = 'lightning_1';
		setTimeout(function () { blink(); }, 300);
		setTimeout(function () { zap1.className = ''; zap3.className = 'lightning_3'; }, 400);
		setTimeout(function () {
			// (palpatine unleashed, order 66 executed)
			blink();
			zap3.className = '';
			document.getElementById('hey').innerHTML = "Welcome";
			document.getElementById('my_name').innerHTML = "I have been expecting you";
			document.getElementById('welcome').innerHTML = "...did you ever hear the tragedy of Darth Plagueis the Wise?"
			document.getElementById('Home').style.opacity = '0';
			document.getElementById('Home').style.pointerEvents = 'none';
			document.getElementById('me').src = 'stylesheet/images/family-man.jpg';
			document.getElementById('git').src = 'stylesheet/images/palpatine-zap.jpg';
			document.getElementById('mailbox').src = 'stylesheet/images/tony-boy.jpg';
		}, 600);
		setTimeout(function () { document.getElementById('Background').style.backgroundImage = 'url(stylesheet/images/palpatine-shark.gif)'; }, 900);
	} else if (count === 28) {
		thisIsHowDemocracyDies(); // ...with overcomplicated javascript functions
	}
	
	function blink() {
		let target = document.getElementById('Background');
		target.className = 'Background'; // readies element to have blink added
		setTimeout(function () { target.className = "Background Blink" }, 5);
	}

	function thisIsHowDemocracyDies() {
		p_git.innerHTML = "Now I may reveal the <i>true</i> artefacts of my Hegemony! Click once more..."
		git_button.innerHTML = "Yes, my master";
		// bring back the buttons
		btn1.style.removeProperty('display');
		btn2.style.removeProperty('display');
		btn3.style.removeProperty('display');
		btn4.style.removeProperty('display');
		btn5.style.removeProperty('display');
		btn6.style.removeProperty('display');
		// give them new names
		btn1.innerHTML = 'Offed My Own Master';
		btn3.innerHTML = 'Became Supreme Chancellor (LOL!)';
		btn2.innerHTML = 'Hoodwinked The Chosen One';
		btn4.innerHTML = 'I Am The Senate';
		btn5.innerHTML = 'My Red Hot One-Liners';
		btn6.innerHTML = 'My Signature Move';
		// and then new links
		btn1.onclick = function () { window.open("https://www.deviantart.com/oracledk/art/Darth-Plagueis-Death-meme-828238541",'_blank'); }
		btn3.onclick = function () { window.open("https://www.youtube.com/watch?v=ca-e5MrVbVU", '_blank'); }
		btn2.onclick = function () { window.open("https://www.youtube.com/watch?v=oQbFaB-n1gM", '_blank'); }
		btn4.onclick = function () { window.open("https://youtu.be/OCP-Y4u-beQ?t=42", '_blank'); }
		btn5.onclick = function () { window.open("https://www.reddit.com/r/PrequelMemes/comments/719ml6/when_people_say_ironic_without_realising_it_is_a/", '_blank'); }
		btn6.onclick = function () { window.open("https://www.youtube.com/watch?v=_XWomD6TazQ", '_blank'); }

		document.getElementById('popup-Column_1').style.height = '175px';
		document.getElementById('popup-Column_2').style.height = '175px';
		turtleText.style.marginTop = '188px';
		turtleText.innerHTML = '';
		document.getElementById('h1_git').style.fontVariant = 'small-caps';
		document.getElementById('h1_git').innerHTML = "My most legendary achievements:";
	}
}


// have a 'please turn off the palpatine' button