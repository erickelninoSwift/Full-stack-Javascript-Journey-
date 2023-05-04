console.log("Gradient");


const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");

// console.log(color1);
// console.log(color2);

color1.addEventListener('mouseover', (e) =>{

	e.preventDefault = true;
	console.log(e.target.value);
})

color2.addEventListener('mouseover', (e) =>{

	e.preventDefault = true;
	console.log(e.target.value);
})


