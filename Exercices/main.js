console.log("Hello world");

const number = prompt(`Enter number : `);

if(number >= 0 && number <= 32)
{
    console.log("F");

}else if(number > 32 && number <= 39)
{
    console.log("D");

}else if(number >= 40 && number <= 49)
{
    console.log("C");

}else if(number >= 50 && number <= 59)
{344
    console.log("B");

}else if(number >= 60 && number <= 69)
{
    console.log("A");

}else if(number >= 70 && number <= 79)
{
    console.log("A");

}else if(number >= 80 && number <= 100)
{
    console.log("A+");
}else if(number < 0 || number > 100)
{
    console.log("Point out invalid Marks");
}