


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

fetch('user.json').then(response =>{
    
   return response.json();

}).then(datareceived =>{

    console.log(datareceived);
})