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