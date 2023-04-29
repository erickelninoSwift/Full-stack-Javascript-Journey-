// // console.log("Hello world today we gonna learn Ajax");

// function otherfunction()
// {
//     console.log("Hello my name is erick and i am here to learn ajax");
// }

// function MySecondMessage()
// {
//     console.log("we love you so much !!!");
// }

// setTimeout(() =>{

//     otherfunction();

// },2000);

// setTimeout(() =>{

//     MySecondMessage();

// },4000);


// setTimeout(() =>{

//     console.log("Hwo are you doing today ?");

//     setTimeout(() =>{

//         console.log("I am doing well");

//     },3000);


// },6000);


// const items = [1,2,3,4,5];

// items.forEach(number =>{

//     setTimeout(() =>{

//         console.log(number);

//     },4000);
// });

// function loginUser(email,password,callback)
// {
//     setTimeout(() =>{

//         console.log(`The email is : ${email} and password : ${password}`);

//        callback(() =>{

//         return 'hello my name is eriik';

//        });

//     },5000);
// }



// const erick = loginUser("erick@yahoo.com",2130707979, mycallback =>{

//     console.log(mycallback());
// })


// function getUserVideos(email,callback)
// {
//     setTimeout(() =>{

//         callback(["Spider-mane","Pirate of Careabean","Alice in wondedrland"]);
 
//     },9000);
// }

// const elnino = getUserVideos('erick@yahoo.com', videos => {

//      console.log(`All the videos i have watched ${videos}`);

// });

// console.log("Finish watching videos");



// let numberStudent = 50;

// const myPromise = new Promise((resolve,reject) =>{

//     setTimeout(() =>{

//         if(numberStudent >= 100)
//         {
//             resolve(`Number of student is good : ${numberStudent}`);
//         }else
//         {
//             reject(new Error('My freind this is an error'));
//         }

//     },3000);

// });

// myPromise.then(result =>{

//     console.log(result);

// })

// .catch(err =>{
  
//     console.warn(`Error found : ${err}`);

// })

// .finally(() =>{

//     setTimeout(() =>{

//         console.log("The end.......");

//     },3000);
// });



// function getAlluser(userEmail,userpassword)
// {

//     return new Promise((resolve,reject) =>{

//         setTimeout(() =>{

//            resolve(`Username: ${userEmail} and password: ${userpassword}`);
//         },2000)
//     });

// }




// getAlluser('Elnino','Yalloande@1963').then(result =>{

    
//     console.log(result);

// }).catch(error =>{

//     console.warn("There was an error while trying to get the data");
// })

// .finally(() =>{

//     setTimeout(() => {
        
//         console.log("This is great practice");

//     },3000);
// });



// function moneymanagement()
// {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() =>{

//             resolve("I am doing very well ");

//         });

//     })
// }

const fb = new Promise((resolve,reject) =>{

    setTimeout(() =>{

        console.log('We gonna log into our facebook account');
       resolve('Facebook');
    },2000);

});

const youtube = new Promise((resolve,reject) =>{

    setTimeout(() =>{

        console.log('i am going to log into my youtube account');
        resolve('Youtube');
    },5000);

});


Promise.all([fb,youtube]).then(result =>{

    setTimeout(() =>{

        result.forEach(res =>{

            setTimeout(() =>{

                console.log(res);
            },2000);
        });

    },2000);
});


