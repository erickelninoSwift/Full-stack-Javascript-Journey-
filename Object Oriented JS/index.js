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