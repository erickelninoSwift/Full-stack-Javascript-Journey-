console.log("Today we are going to learn Async");

setTimeout(() =>{
    console.log("Hey how are you doing ?")
},2000);

setTimeout(() => {
    console.log("I am doing very well thank you ");
}, 4000);


function fetchUser()
{
    setTimeout(() =>{
        return {
            name:'erick',
            age: 45,
        }
    },3000);

    return{
        name:'elnino',
        age: 45
    }
}

const user = fetchUser();

console.log(user);
