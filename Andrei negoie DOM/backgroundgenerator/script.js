console.log("Gradient");


const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");
const body = document.querySelector("body");

console.log(body);

console.log(css);
console.log(color1);
console.log(color2);
// background: linear-gradient(to right, red , yellow);

function myEvent(event)
{
	event.preventDefault = true;
	console.log(event.target.value);
	body.style.background = `linear-gradient(to right ,${color1.value},${color2.value})`;

	css.textContent = `${body.style.background};`
}


color1.addEventListener('input', myEvent);

color2.addEventListener('input',myEvent);


