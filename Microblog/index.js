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

    myheader.style.color ="white";   
    myheader.style.backgroundColor = "black";
    myheader.style.borderRadius = "5px";
    myheader.style.fontSize = "2rem"
    myheader.style.padding = "10px";


});



