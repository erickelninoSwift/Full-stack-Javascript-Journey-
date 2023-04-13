console.log(`For loops chapter`);

for(let i = 1;i <=20;i++)
{
    console.log(` Number is : ${i}`);
}

let number = 0

while(number <= 10)
{
    console.log(number);
    number ++;
}
let elnino = 60;
do
{
    console.log("We using while loops");
    elnino ++;

}while(elnino <= 100)

let user = {
    name: 'Eriik',
    surname: 'tshimbombo',
    age: 30
};


for(let index in user)
{
    console.log(`${index} : ${user[index]}`);
}

let elninoNumbers = [10,20,40,10,23,11,22];

for(let index of elninoNumbers)
{
    console.log(`Number is : ${index}`);
}

// for(let index = 0; index <= 100;index ++)
// {
//       if(index >= 50 && index <=60)
//       {
//         break;
//       }

//       console.log(index);
// }


for(let i = 0 ; i <= 10 ; i ++)
{
    console.log(`Stage : ${i}`);
    console.log(`====================`)
    for(let e = 0;e <=10;e ++)
    {
        console.log(`Number : ${e}`);
    }
}