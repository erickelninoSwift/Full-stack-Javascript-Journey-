let name = "Eriik";
console.log(typeof name);

name = "Jackpot";
 console.log(name);

 let money = "20.50";
console.log(typeof money);

typeof money === "number" ?  console.log("It is a number") : console.log("Its not  a number bruv");

let colors;

console.log(typeof colors);

colors = "Blue";

console.log(colors);


let users = { name: "Erick", surname: "Tshimbombo", age: 30}

let userArray = [
    { name: "Erick", surname: "Tshimbombo", age: 30},
    { name: "Anthony", surname: "Tshimbombo", age: 30},
    { name: "Samuel", surname: "Tshimbombo", age: 30},
    { name: "Manu", surname: "Tshimbombo", age: 30},
    { name: "Yollande", surname: "Tshimbombo", age: 30}

]

console.log(typeof users);
console.log(users);

console.log(typeof userArray.length);

console.log(userArray[2].surname);

function showName()
{
    console.log("Hello world");
}

showName();
showName();

function showSurname(name)
{
    console.log(`My name is ${name}`);
}

showSurname("Elnino");

function showLastName()
{
    let name = "Eriik";

    console.log(`My last name is ${name}`);
}


showLastName();