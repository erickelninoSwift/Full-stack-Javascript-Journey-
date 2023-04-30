//  sessionStorage.setItem('name','Kazi');
//  localStorage.setItem('name','Ariyan');

console.log("Todo list");

// console.log(document.all.length);
// console.log(document.forms[0]);

const div = document.querySelectorAll("div");
const header = document.getElementsByClassName("header");

const headers = Array.from(header);

console.log(headers);

let x = 0;

headers.forEach(myheader =>{

    myheader.style.color ="black";   
    myheader.style.backgroundColor = "lightGray";
    myheader.style.borderRadius = "2px";
    myheader.style.fontSize = "2rem"
    myheader.style.padding = "10px";
});

const h1 = document.getElementsByTagName("h1");

console.log(h1);




