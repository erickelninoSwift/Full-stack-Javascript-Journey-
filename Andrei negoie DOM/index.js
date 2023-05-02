console.log("Zero to mastery");

localStorage.clear();
sessionStorage.clear();

const list = document.querySelector("ul");

const alllist = list.children;


list.style.listStyle = "none";
list.style.justifyContent = "center";

for(let index of alllist)
{
    index.style.backgroundColor = "blue";
    index.style.color = "white";
    index.style.margin = "2px";
    index.style.fontSize = "10px"
    index.style.height = "30px";
    index.style.textAlign = "center";
    index.style.width = "100px"
    index.style.borderRadius = "5px";
    index.style.display = "block";
    index.style.marginTop = "auto";

    
    

    index.addEventListener('click', (e) =>{

        e.preventDefault = true;
     
    })
}

const h1 = document.querySelector("main");



const buttonclick = document.querySelector(".btn-danger");

buttonclick.addEventListener('mouseenter',(e) =>{
    e.preventDefault = true;
    h1.style.color = "red";

    console.log("Click me!!!");
});


const buttonAdd = document.querySelector(".butto-add");
const textData = document.querySelector(".text-input");
const ul = document.querySelector("ul");
const li = document.createElement("li");
console.log(ul);

buttonAdd.addEventListener('click',(e) =>{

    e.preventDefault = true;

    const ul = document.querySelector("ul");
    const li = document.createElement("li");


    textData.value !== "" ? li.textContent = textData.value : console.log("No data");
    ul.appendChild(li);

    for(let index of alllist)
{
    index.style.backgroundColor = "blue";
    index.style.color = "white";
    index.style.margin = "2px";
    index.style.fontSize = "10px"
    index.style.height = "30px";
    index.style.textAlign = "center";
    index.style.width = "100px"
    index.style.borderRadius = "5px";
    index.style.display = "block";
    index.style.marginTop = "auto";

    
    

    index.addEventListener('click', (e) =>{

        e.preventDefault = true;
        console.log(index.textContent);
    })
}

});



