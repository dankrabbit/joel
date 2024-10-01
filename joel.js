let ang = 0;
let spd = 0;

let click = new Audio("pop.mp3");

function spin() {
	click.cloneNode(true).play();
	spd = Math.min(spd + 1, 100);
};

function round(i) {
	return Math.round(i * Math.pow(10, 2)) / Math.pow(10, 2);
}

setInterval(() => {
	ang += spd;
	document.querySelector(".joel").style.transform = `rotate(${ang}deg)`;

	spd = Math.max(round(spd - 0.02), 0);
	document.getElementById("speed").textContent = spd;
}, 16);
