console.log(`How is the functions going so far `);

// function declaration


function aboutMe(name,age)
{
    console.log(` Hi my name is ${name} and I am ${age} years old`);
}


aboutMe("Eriik",35);
aboutMe("Elnino",56);


function sum(number1,number2)
{
    return number1 + number2;
}


console.log(sum(100,400));


// Default parameters

function sumonly(number1,number2 = 10 , number3 = 300)
{
    return number1 + number2 + number3;
}


console.log(sumonly(50));

const calcsum = function(number1,number2)
{
    console.log(number1 + number2);
}

calcsum(300,8000);


function nameutils(name)
{
    return `My name is ${name}`;
}


const currentfucntion = (num1,num2) => num1 + num2 ;

console.log(currentfucntion(23,34));