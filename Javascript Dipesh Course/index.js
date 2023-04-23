console.log('hello world');

// const name = prompt("what is your name ?");
// console.error(name);
// console.warn("Hello jackpot here");

// if(true)
// {
//     var number = 20;
//     let numnber3 = 60;
//     console.log(numnber3);
//     console.log(number);
// }

// Operator

let number = 1;

for(let i = 0;i <= 10 ; i++)
{
    number++;
    console.log(i);
}   

console.log(`total sum is : ${number}`);


// String

let firstname = "Erick";
let surmane = "Elnino";
let language = "French is my language";

let name = new String("How are you doing today?");

console.log(name);
console.log(firstname);
console.log(surmane);

console.log(typeof name);

console.log(language.substring(0,3))

console.log(language.split(" "))

console.log(language.replace("French","Jackpot"));

//  Arrsay


let framework = [
    "Angular",
    "ReactJS",
    "VueJS"
]

let databases = new Array("DB2","MongoDB","Firebase","MySql");

console.log(databases[0]);

//  Array methode

console.log(databases.length);

let numbers = [12,34,54,44,23,55,66,77,2];

numbers.sort((a,b) =>{
    return a - b 
});

console.log(numbers);


function numberscheck(a,b)
{
    return a - b;
}

console.log(numberscheck(12,25));


console.log("Hello world");


numbers.forEach(number =>{
    console.log(number);
});


numbers.pop();
console.log(numbers);

numbers.push("Erickelniono");


console.log(numbers);

console.log(Array.isArray(numbers));


// Objects

let employee = {
    id: 101,
    name1: 'eriik',
    lastName: 'elnino',
    age: 25,
    address: {
        city: 'johannesburg',
        country : 'South africa'
    },
    skills: ["HTML","CSS","JAVASCRIPT"],

    fullName: function()
    {
        return `Hello how are you doing ${this.name1} i heard you are ${this.age} Years Old`;
    }
}

console.log(typeof employee);
console.log(employee.address.city);

const {name1,id,address,fullName} = employee;

console.log(address);

console.log(employee.fullName());

const newjsonObject = JSON.stringify(employee);

console.log(newjsonObject);

const convertedJSOn = JSON.parse(newjsonObject);

console.log(convertedJSOn);

for(let i in convertedJSOn)
{
    console.log((i) +": "+ convertedJSOn[i]);
}


//  High order functions

let newEmployee = [

    {
        id: 22434434341,
        name1: 'eriik',
        lastName: 'elnino',
        age: 25,
        address: {
            city: 'johannesburg',
            country : 'South africa'
        }
    },

    {
        id: 455452342,
        name1: 'samuel',
        lastName: 'elnino',
        age: 45,
        address: {
            city: 'johannesburg',
            country : 'South africa'
        }
    },
    {
        id: 143545,
        name1: 'Anthony',
        lastName: 'elnino',
        age:5,
        address: {
            city: 'johannesburg',
            country : 'South africa'
        }
    }

]


const jsonApplication = JSON.stringify(newEmployee);

console.log(jsonApplication);

newEmployee.forEach(user =>{
    console.log(user);
});

const surnames = newEmployee.map(user =>{
    return user.name1;
});


console.log(surnames);

const userID = newEmployee.filter(user =>{
    return user.age > 25;
}).map(currentuser =>{
    return currentuser.name1;
});



console.log(userID);


let a = 10;

if(a === "10")
{
    console.log("True")
}else
{
    console.log("False");
}

console.log(typeof "10");



//  function

function Showtext()
{
    console.log("I am just trying to render a fucntion");

}

Showtext();

const ericktext = () =>{
    return 'how are you doing today my friend ? ';
}

console.log(ericktext());


const yoyo = () => console.log("I am doing tvery well");

yoyo();


//  Contructor Object


function Mobile(brand,price,launcheDate)
{
    this.brand = brand;
    this.price = price;
    this.launcheDate = launcheDate;

}

const samsunGs2 = new Mobile("Samsung",2000,"12/12/2005");
Mobile.prototype.ram = "4GB";

Mobile.prototype.getFullName = () =>{

    return `The phone you bought is a ${samsunGs2.brand}`;
}
console.log(samsunGs2.getFullName());


function getyear()
{
    let fullyear = new Date();

    return fullyear.getFullYear();
}

console.log( getyear() >= 2022 ? `This year is good happy ${getyear()}` : 'We dont know what to expect');


// Window DOM


console.log(window.location.host);


const mydoc = document.getElementById("contact");

console.log(mydoc);