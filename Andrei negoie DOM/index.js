console.log("Zero to mastery");

localStorage.clear();
sessionStorage.clear();

const list = document.querySelector("ul");

const alllist = list.children;

list.style.display = "flex";
list.style.listStyle = "none";

for(let index of alllist)
{
    index.style.backgroundColor = "blue";
    index.style.color = "white";
    index.style.margin = "2px";
    index.style.fontSize = "10px"
    index.style.height = "30px";
    index.style.textAlign = "center";
    index.style.width = "100px"
    index.style.justifyContent = "center";
}