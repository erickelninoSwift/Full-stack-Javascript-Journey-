console.log('Array and Object');

const user = {
    name: 'erick',
    age: 67,
    address: {
        street: 'Celliers',
        streetNumber: 12,
        flatNmae: 'Commanche'
    },
    greetings:  function()
    {
        return `how are you doing today ${this.name} ?`;
    }
}

console.log(user.greetings());




const erickelnino = (user) =>{
    
    const {name: fullname ,age} = user;

    console.log(`My name is ${fullname} and i am ${age} yuears old`);


}


erickelnino(user);


// Data structure Set

const set = new Set();

set.add(100)
set.add(300);
set.add(900);
set.add(200);
set.add(200);


set.delete(900);
console.log(set);
console.log(set.size);

set.forEach(numberset =>{
    console.log(numberset);
});


set.clear();
console.log(set);

// Data Structure Map


let map = new Map();

map.set('Name','Eriik');
map.set('Score',100);

console.log(map);

for(let x of map)
{
    console.log(x[1]);
}

console.log(`type : ${typeof map}`);


// Weak set Weak Map
const yokozuna = new WeakSet();

const yoku = {
    name: 'elnino',
    surname: 'Jackpot'
};
const cholo222 = {
    name: 'mojalefa',
    age: 78
}

yokozuna.add(yoku);
yokozuna.add(cholo222);

console.log(yokozuna);
if(yokozuna.has(cholo222))
{
    console.log(`My friend its true`);
}else
{
    console.log(` My friend its faulse`);
}

// yokozuna.has(cholo222) ? console.log(`true my friend ${yokozuna.get(cholo222)}`) : console.log('my freind its false oooooo ');


const walid = new WeakMap();
const mibilu = {
    name: 'yollande'
}
walid.set(mibilu,'She is 45');

console.log(walid.get(mibilu));


// import modules


import numberAdd from './function.js'

console.log(`The total sum is : ${numberAdd(30,45)}`);