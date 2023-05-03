var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = ul.children;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for(let indexList of li)
{
	const buttondelete = document.createElement("button");
	buttondelete.textContent = "Delete";
	buttondelete.style.marginLeft = "30px";
	indexList.appendChild(buttondelete);

	indexList.addEventListener('click',(elnino) =>{
		elnino.preventDefault = true
		indexList.classList.toggle("done");
	});

	buttondelete.addEventListener('click',(e) =>{
	 
		console.log(li.innerText);
	  	
	});


}