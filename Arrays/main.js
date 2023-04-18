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