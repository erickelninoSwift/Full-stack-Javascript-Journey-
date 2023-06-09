console.log("Hello welcome to our arrays course");

let friends = ['eriik', 'elnino', 'rapunzel','kazii'];

console.log(friends);

friends.forEach(name =>{
    console.log(name);
});

for(let index in friends)
{
    console.log(`${index++}. ${friends[index]}`);
}

friends.unshift("yollande kasonga");

console.log(friends);

if(friends.includes('kazii'))
{
    console.log("yes")
}else
{
    console.log("no!!!");
}

console.log(friends.indexOf("eriik") - 1);


const doctors = [
    {name: 'eriik', age: 89},
    {name: 'jonny', age: 55},
    {name: 'yoky', age: 80},
    {name: 'jackpot', age: 33},
];


const result = doctors.find(doctor =>{
    return doctor.name === 'jackpot';
});

console.log(result);

doctors.forEach((index,data) =>{

    console.log(index.name,data);
});


// Sorting and manipulation

const number = [23,4,55,67,88,8,23,12];

number.sort((a,b) =>{
    return a - b;
});

console.log(`Data sorted : ${number}`);

number.forEach( num =>{
    console.log(num);
});

number.sort();
number.reverse();

const newNumbers = parseInt(number);

console.log(number);

console.log(`new array : ${newNumbers}`);
let myusers = [
    {name: 'eriik', age: 70},
    {name: 'jezzy', age: 40},
    {name: 'gold', age: 45}
];


myusers.sort((user1,user2) =>{

    return user1.age - user2.age
});

console.log(myusers);


function sortdata(a,b)
{
    return a - b;
}

console.log(`Decision : ${sortdata(12,9)}`);


const numberstoSort = [1,4,9,56,7,8,23];


const data = numberstoSort.every(num =>{
    return num > 0;
});

console.log(data);


//  concat method 

const number12 = [1,2,3];

const nuber22 = [4,5,6];

const newArrayData = number12.concat(nuber22);

console.log(newArrayData);




//  Spread operator

const eriikNumbers = [1,2,3,4,5,6,7,8,9];
console.log(...eriikNumbers);
console.log(eriikNumbers[4]);
console.log(eriikNumbers);

const cloneArray = [...eriikNumbers];

console.log(cloneArray.reverse());


const erickelnino = [1,2,3];
const jackpot = [2,3,4,5];


const arrayjoined = [...erickelnino, ...jackpot];

console.log(arrayjoined.sort());


const messgae = [34,44,1,21,345,25,90];

let myessage2 = "how are you doing today ?";

console.log(myessage2.split(" "));


const numbersArray = [10,11,23,45,67,8];

const arraypower = numbersArray.map(num =>{

    return num * 10;
});

console.log(arraypower);

numbersArray.forEach(number =>{
    console.log(number * 10);
});


let elnino = [];

numbersArray.forEach(num =>{
    elnino.push(num * 10);
});


console.log(`Numbers : ${elnino.reverse()}`);

let doctoselnino = [
    {name: "eriik" , age: 30},
    {name: "elnino" , age: 34},
    {name: "cholo" , age: 50}
];


const currentdoctor = doctoselnino.map(user =>{
     if(user.age > 30)
     {
        return user;
     }
});

console.log(currentdoctor);


const mum = [1,2,3,4,5,6,7,8,9,10];

const mumnew = mum.filter(number =>{
    return number % 2 === 1;
});

console.log(mumnew);

const sum = 0;

const totalnumber = mum.reduce(number =>{

    return sum + number;
    
},0);

