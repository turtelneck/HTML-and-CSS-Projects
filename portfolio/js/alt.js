
let msgList = [
	"",
	"",
	"Fun, right? <br/>Go ahead, have another click.",
	"You're quite good at this! Click again.",
	"Very well done. I can see you are no ordinary user, we will watch your career with greate interest! <br/>Please, please, click again.",
	"I've removed those pesky buttons. You require focus! <br/>Click again.",
	"Good, very good! <br/>Feel the satisfaction of each click. Again!",
	"Yes, you are doing well. Now, again.",
	"Do you feel it? Your power over this button grows. <br/>Click again!",
	"Yes, let your desire to click take control! Again!",
	"Your thirst cannot be satisfied! Click again!",
	"Continue, and you will surpass all other button clickers!",
	"You are <i>right</i> to do this! It is your destiny!",
	"To understand the great mystery, one must study all its aspects! <br/>Click again...",
	"Heh heh heh...",
	"Mwahahahaaaa!",
	"UNLIMITED",
	"UNLIMITED <i>POWER!</i>"
];

let btnList = [
	"...on Github",
	"(click again to close)",
	"Yup, buttons are great",
	"Don't mind if I do",
	"Nothin like a nice button",
	"Hmmmm, ok",
	"So satisfying",
	"Aw, shucks, ok",
	"Oh, I can feel it",
	"Yes!",
	"I will surpass them!",
	"My... Destiny...",
	"I... I understand",
	"I have heard the tragedy...",
	"...of Darth Plagueis The Wise...",
	"...I will do whatever you ask"
];

let popupBtn = document.getElementById('popup_btn');
let msgOn = document.getElementById('encouragement-on');
let msgOff = document.getElementById('encouragement-off');
let btnTopLeft = document.getElementById('btnTopLeft');
let btnMidLeft = document.getElementById('btnMidLeft');
let btnBotLeft = document.getElementById('btnBotLeft');
let btnTopRight = document.getElementById('btnTopRight');
let btnMidRight = document.getElementById('btnMidRight');
let btnBotRight = document.getElementById('btnBotRight');

let count = 0;

// this is where the fun begins...
function order66() {
	switchMsg();

	// at specific counts, extra functions occur
	if (count === 5) {
		hideButtons();
	} else if (count === ) {
		
	} else if (count === ) {

	} else if (count === ) {

	} else if (count === ) {

	}

	function switchMsg() {
		popupBtn.innerHTML = btnList[count];
		if (formOpen) {
			msgOff.innerHTML = msgList[count];
		} else {
			msgOn.innerHTML = msgList[count];
		}
	}

	function hideButtons() {
		btnTopLeft.style.display = 'none';
		btnMidLeft.style.display = 'none';
		btnBotLeft.style.display = 'none';
		btnTopRight.style.display = 'none';
		btnMidRight.style.display = 'none';
		btnBotRight.style.display = 'none';
	}

	function showButtons() {
		btnTopLeft.style.display = 'block';
		btnMidLeft.style.display = 'block';
		btnBotLeft.style.display = 'block';
		btnTopRight.style.display = 'block';
		btnMidRight.style.display = 'block';
		btnBotRight.style.display = 'block';
	}

	function screenFlash() {
		let target = document.getElementById('Background');
		target.className = 'Background'; // readies element to have blink added
		setTimeout(function () { target.className = "Background Blink" }, 5);
	}

	count++;
	console.log(count);
}