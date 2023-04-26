// console.log("Today we are going to learn Async");

// setTimeout(() =>{
//     console.log("Hey how are you doing ?")
// },2000);

// setTimeout(() => {
//     console.log("I am doing very well thank you ");
// }, 4000);

// fetchUser(122231454,function(userElnino){
//     console.log(userElnino)
// })


// function fetchUser(userID,myrequest)
// {
//     setTimeout(() =>{
//         console.log("hey this is jackpot here !");

//         const fetchedUser = 
//         {
//             name: 'elnino',
//             surname: 'cholo',
//             age: 25
//         }

//         myrequest(fetchedUser);
//     },3000);
// }
 


function sport(passport,callback)
{
    setTimeout(() => {

        const nameofUser = `Userid : ${passport} can travel to any country`; 
        
        callback(nameofUser);
    },3000);
}


sport(213070797,(mysentence) =>{


    console.log(mysentence);
})

