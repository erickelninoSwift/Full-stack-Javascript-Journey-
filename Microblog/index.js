//  sessionStorage.setItem('name','Kazi');
//  localStorage.setItem('name','Ariyan');

console.log("Todo list");

// console.log(document.all.length);
// console.log(document.forms[0]);

// const div = document.querySelectorAll("div");
// const header = document.getElementsByClassName("header");

// const headers = Array.from(header);

// console.log(headers);

// let x = 0;

// headers.forEach(myheader =>{

//     myheader.style.color ="black";   
//     myheader.style.backgroundColor = "lightGray";
//     myheader.style.borderRadius = "2px";
//     myheader.style.fontSize = "2rem"
//     myheader.style.padding = "10px";
// });

// const h1 = document.getElementsByTagName("h1");

// const form = document.querySelector("#add-post-form");

// form.style.backgroundColor = "white";

// console.log(form);

const tbody = document.querySelector("tbody");

const allchild = tbody.children;

console.log(allchild);

allchild[2].style.color = "red";

// for(let index of allchild)
// {
//     index.innerHTML = "<p> <strong> How </strong> are you doing today ? </p>";
//     index.style.color = "blue";
// }

const createTr = document.createElement("tr");
const crerateTd = document.createElement("td");
const Td = document.createElement("td");
const createSpan = document.createElement("span");


crerateTd.className ='post';
crerateTd.innerText = "Post 6";
createSpan.className = "fa fa-times float-right pr-3";


Td.appendChild(createSpan);
createTr.appendChild(crerateTd);
createTr.appendChild(Td);


tbody.appendChild(createTr);

console.log(createSpan);
console.log(crerateTd)


for(let index of allchild)
{
    index.addEventListener('click',(e) =>{
        e.preventDefault = true;

        console.log(index.textContent);

    });
}


const clearButton = document.querySelector('.clear-post');

clearButton.addEventListener('click', (e) =>{

    e.preventDefault = true;

    console.log('everything is cleared!!!');
    console.log(tbody);
    console.log(e.target.className);
    console.log(e.clientY);
    console.log(e.ctrlKey)
    console.log(e.type)

    e.target.style.backgroundColor = "black";
    
});


// Local sorage

console.log("Local Storage");

localStorage.setItem("Name",'Eriik_Elnino');
localStorage.setItem("Age",30);

console.log(localStorage.getItem("Name"));

const age = localStorage.getItem("Age");

console.log(`My age is ${age}`);