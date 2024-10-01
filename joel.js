let ang = 0;
let spd = 0;

let click = new Audio("pop.mp3");

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
	document.querySelector(".joel").style.transform = `rotate(${ang}deg)`;

	spd = Math.max(round(spd - 0.05, 2), 0);

	let txt = Math.round(spd) == spd && spd + ".00" || round(spd, 1) == spd && spd + "0" || spd
	document.getElementById("speed").textContent = txt;
}, 16);
