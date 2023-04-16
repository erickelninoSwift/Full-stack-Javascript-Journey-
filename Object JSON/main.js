console.log('Hello how are you doing my friend ?');

let x = 90;

function erick()
{
    return "Welcome to my javascrit course";
}


console.log(erick());
console.log(x);
erick();

const user = {
    name:'erick',
    surname: 'elnino',
    favcolor:['red,blue,yellow'],
    greetings : function()
    {
        return `Hello my name is ${this.name}`;
    }
};


// console.log(`Movie night  : ${user.greetings()}`);


//traversing object 



const company = {
    name:'erick',
    surname: 'elnino',
    favcolor:['red','blue','yellow'],
    greetings : function()
    {
        return `Hello my name is ${this.name}`;
    }
};


// for(let key in company)
// {   
//     console.log(`${key} : ${company[key]}`);
// }
const numberitems = company.favcolor.length;

console.log(`Number of items : ${numberitems}`);
for(let index of company.favcolor)
{
    console.log(index);
}

const itemsKey = Object.keys(company);

itemsKey.forEach(items =>{
    console.log(items);
});


const salary = 
{
   erick: 3000,
   jackpot: 1000,
   elnino: 10050,
   anthony: 8100,
   samuel: 8100,
   yoky: 1100,
   emanuella: 3100,
}

let sum = 0;


for(let index in salary)
{
   sum += salary[index];
   console.log(`Cost : ${salary[index]}`);
}

console.log(`total sum : ${sum}`);
