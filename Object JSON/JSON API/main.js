


let companies = `[
    {
        "name" : "big corporate ",
        "numberOfEmployee" : 10000,
        "ceo": "Mary",
        "rating" : 3.8 
    },
    {
        "name" : "Facebook ",
        "numberOfEmployee" : 1005600,
        "ceo": "Mark",
        "rating" : 4.8 
    },
    {
        "name" : "Netflix",
        "numberOfEmployee" : 80000,
        "ceo": null,
        "rating" : 4.4
    }
]`


let schoolManagement = [
    {
        "name" : "big corporate ",
        "numberOfEmployee" : 10000,
        "ceo": "Mary",
        "rating" : 3.8 ,
        "isProgrammer" : true,
        "skills" : ["html","Javascript","Css"]
    },
    {
        "name" : "Facebook ",
        "numberOfEmployee" : 1005600,
        "ceo": "Mark",
        "rating" : 4.8,
        "isProgrammer" : true,
        "skills" : ["Angular","Nodejs","MongoDB"]
    },
    {
        "name" : "Netflix",
        "numberOfEmployee" : 80000,
        "ceo": null,
        "rating" : 4.4,
        "isProgrammer" : false,
        "skills" : ["php","react","laravel"]
    }
]


// console.log(JSON.parse(companies)[0].name);

// companies.forEach(company =>{
//     console.log(company);
// });

let item = "";

fetch('user.json').then(response =>{
    
   return response.json();

}).then(datareceived =>{

    datareceived.forEach(element => {
    //    item += `<li> ${element.name} : ${element.numberOfEmployee}</li>`;
    //    document.querySelector("ul").innerHTML = item;
    });
});

// console.log(JSON.stringify(schoolManagement));

const userManagement = JSON.stringify(schoolManagement);
console.log(userManagement);

const jsondata = JSON.parse(userManagement);
console.log(jsondata);


// let url = 'https://jsonplaceholder.typicode.com/todos/';

// const listTodo = fetch(url);
// listTodo.then(response =>{
//     return response.json();
// }).then(jsonData =>{

//     jsonData.forEach( user =>{
//         item += `<li> ${user.title} </li>`;
//     });
   
//     document.querySelector("ul").innerHTML = item;
// });


const weatherCall = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=832f8a482ce5445aa4d5ad46631e1678');

weatherCall.then(weather =>{
    return weather.json();
})

.then(jsonData =>{
   alert(`Country : ${jsonData.timezone}`)
});