console.log("Hello welcome to OOP in Javascript");

function getuserData(name,age)
{
    const user = {
        name: name,
        age: age,
        walk: function()
        {
            console.log(`My name is ${name} and I am ${age} years old`)
        },
    }
    return user;
}



getuserData().walk();


const user1 = getuserData("Eriik",89);


const user2 = getuserData("Yollande",65);

console.log(user1,user2);


function electronics(name,price)
{
    this.name = name;
    this.price = price;

    this.walk = function()
    {
        return `The name of the product: ${this.name} and Cost R${this.price}`;
    }

    console.log(this);
}

const televisiion = new electronics("Television",1000);

