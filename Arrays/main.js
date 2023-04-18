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