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

function checklegnth()
{
    return textData.value.length;
}


function createListemelemt()
{
    li.textContent = textData.value;

        li.style.backgroundColor = "blue";
        li.style.color = "white";
        li.style.margin = "2px";
        li.style.fontSize = "10px"
        li.style.height = "30px";
        li.style.textAlign = "center";
        li.style.width = "100px"
        li.style.borderRadius = "5px";
        li.style.display = "block";
        li.style.marginTop = "auto";
        
            
            
        
        li.addEventListener('click', (e) =>{
        
                e.preventDefault = true;
                console.log(li.textContent);
            })

        ul.appendChild(li);
        textData.value = "";
        textData.ariaPlaceholder = "Enter text";

}







buttonAdd.addEventListener('click',(e) =>{

    e.preventDefault = true;
    
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    if(checklegnth() > 0)
    {
        createListemelemt();
        
    }else
    {
        console.log("No data please make sure you have entered real value");
    }
  
});







textData.addEventListener('keypress',(e) =>{

    e.preventDefault = true;
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    if(checklegnth() > 0 && e.keyCode === 13)
    {
        createListemelemt();
    }else
    {
        console.log("No data please make sure you have entered real value");
    }
});



