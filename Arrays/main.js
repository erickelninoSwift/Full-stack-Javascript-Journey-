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

number.forEach( num =>{
    console.log(num);
});

number.sort();
number.reverse();

console.log(number);
