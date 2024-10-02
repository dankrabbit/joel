let ang = 0;
let spd = 0;

let click = new Audio("content/pop.mp3");

const tits = [
	"Click Joel To Joel",
	"Joeling...",
	"Joeler!",
	"JOELEST!!!"
];

function spin() {
	let snd = click.cloneNode(true);
	snd.volume = 0.42;
	snd.play();

	spd = spd + 1;
};

function round(i,digits) {
	return Math.round(i * Math.pow(10, digits)) / Math.pow(10, digits);
}

setInterval(() => {
	ang += Math.min(spd, 150);

	let joel = document.querySelector(".joel");
	joel.style.transform = `rotate(${ang}deg)`;

	spd = Math.max(round(spd - 0.02, 2), 0);

	let tit = document.getElementById("title")
	tit.textContent = spd > 150 && tits[3] || spd > 69 && tits[2] || spd > 0 && tits[1] || tits[0]

	let rpm = Math.round(spd) == spd && spd + ".00" || round(spd, 1) == spd && spd + "0" || spd
	document.getElementById("speed").textContent = rpm;
}, 16);
