console.log('Javascript Operators');

let number1 = 10;
let number2 = number1 + 30;

console.log(number1,number2 + 10);

console.log("Comparison Operator");


let price = 200;

price > 300 ? console.log("Hello world") : console.log("Its not bigger");

console.log(price == 200);
console.log(price !== 200);
console.log(price >= 200);
console.log(price <= 200);
console.log(price === 200);


price !== 200 ? console.log("This number is not equal to 200") : console.log("Same or bigger");


(price > 100 && price < 300) ? console.log("Number is between 100 and 300") : console.log("We dont even know ");



//  How to swap 2 numbers

let apple = 10;
let orange = 20;

console.log(`Appple : ${apple}`);
console.log(`Orange : ${orange}`);

let temp;
temp = apple;
apple = orange;

orange = temp;

console.log(`Appple : ${apple}`);
console.log(`Orange : ${orange}`);


let money = 50;
console.log(money);
money = 100;
console.log(money);


let ericknumber = 0;

if(ericknumber > 0)
{
    console.log(`This is a positive number ${ericknumber}`);
}else
{
    console.log(`This is a negative ${ericknumber}`);
}


ericknumber > 0 ? console.log("The number is greater") : console.log("The number is not greater than 0");

let color = "blue";

switch(color)
{
    case "red":

        console.log("Ist red");

    break;

    case "blue":

            console.log("The color is blue");
    break;
}

let num1 = 1;
let num3 = 0;

let maxValue;

maxValue =  (num1 + num3) > 100 ? num1 + num3 : 300;

console.log(maxValue);

let number = 50;

if(number % 5 === 0)
{
    console.log(`Fizz`);
}else
{
    console.log(`Number is not ${number}`);
}

if(number % 4 === 0 && number % 5 === 0)
{
    console.log(`Number is : ${number}`);
}else
{
    console.log('You see me as pass around');
}


(number % 5 === 0 && number % 10 === 0) ? console.log(`Number is Good`) : console.log(`Money is not everything`);

(number % 10 === 0) ? console.log(`How are you doing ?`) : console.log(`Eriik was good`);



