console.log("Zero to mastery");

localStorage.clear();
sessionStorage.clear();

const list = document.querySelector("ul");

const alllist = list.children;

list.style.display = "flex";
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
    index.style.paddinTop = "20px"
    

    index.addEventListener('click', (e) =>{

        e.preventDefault = true;
        console.log(index.textContent);
    })
}

const h1 = document.querySelector("main");



const buttonclick = document.querySelector(".btn-danger");

buttonclick.addEventListener('click',(e) =>{
    e.preventDefault = true;
    h1.style.color = "red";

    console.log("Click me!!!");
});