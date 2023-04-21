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
