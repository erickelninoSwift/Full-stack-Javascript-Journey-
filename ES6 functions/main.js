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
