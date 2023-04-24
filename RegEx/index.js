console.log("Regular expression");

let regEx = /erick+@/i;
;

console.log(regEx.test("I am erick@yahoo.com elnino i love playing Xbox one :)"));
console.log(regEx.source);
console.log(regEx.exec('how are you doing erick@'));

let str = "erick";

console.log(str.match(regEx));

if((str.match(regEx)) !== null)
{
    console.log('hello world');
}else
{
    console.log("jackpot here");
}

let RegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const email = prompt("Please enter your email Address : ");

console.log(email.search(RegEx));

if(email && email.search(RegEx) == 0)
{
    if(email.match(RegEx))
    {
        console.log("Email regular expression was respected");
    }else
    {
        console.log("Please there has been an error  while trying to get the correct email addres for the field ")
    }

}else
{
    console.log("Please do not leave the field empty :)");
}