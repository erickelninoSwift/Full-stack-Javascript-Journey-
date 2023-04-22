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

let numbers = [12,34,54,44,23,55,66,77,2,09];

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