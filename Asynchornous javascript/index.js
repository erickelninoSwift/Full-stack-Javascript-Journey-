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
 


// function sport(passport,callback)
// {
//     setTimeout(() => {

//         const nameofUser = `Userid : ${passport} can travel to any country`; 
        
//         callback(nameofUser);
//     },3000);
// }


// sport(213070797,(mysentence) =>{
//     console.log(mysentence);
// })

// let number = 50;

// const mypromise = new Promise((resolve,reject) =>{

//     setTimeout(() =>{
//         if(number >= 200)
//         {
//             resolve("Success")
//         }else
//         {
//             reject(new Error('Error was found'));
//         }
//     },3000);

// });


// mypromise.then(value =>{
//     return `The connection status : ${value}`
// })

// .then(value =>{

//     console.log(value);

// })

// .catch(err =>{
//    console.warn(err);
// });

// const promise1 = new Promise((resolve,reject) =>{

//     setTimeout(() =>{

//         resolve("Hello Erick How you doing todat");
//     },2000);

// });

// const promise2 = new Promise((resolve,reject) =>{

//     setTimeout(() =>{

//         resolve("I am doing very well thanks for asking ");
//     },3000);

// });


// Promise.all([promise1,promise2]).then(data =>{
      
//      setTimeout(results =>{

//         console.log("I am doing very well my fiend");
//      },8000);
    
// });


// const currentPromise1 = new Promise((resolve,reject) =>{

//     setTimeout(() =>{

//        resolve("Hello world");

//     },2000);

// });

// const currentPromise2 = new Promise((resolve,reject) =>{

//     setTimeout(() =>{

//         resolve("How are you doing today")

//     },4000);

// });

// Promise.all([currentPromise1,currentPromise2]).then((results) =>{

//     results.forEach(data =>{
//         setTimeout(() =>{
//             console.log(data);
//         },2000);
//     });
// })
// .catch(err =>{

//     console.warn(`The error found is : ${err}`);
// });



// API calls 


// const getalldata = fetch('https://api.github.com/users/andrew');


// getalldata.then(result =>{

//   return result.json();

// }).then(dataresult =>{

//     console.log(dataresult);

// }).catch(err =>{


//     console.warn(`There was an error found here : ${err}`);

// });




async function getDatagithub()
{
    const newlink = await fetch('https://api.github.com/users/andrew');

    const profile = await newlink.json();

     console.log(profile);

}


