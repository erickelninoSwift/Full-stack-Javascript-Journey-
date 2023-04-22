console.log("Javascript is king");

let country = "Democratic republic of congo";


console.log(country.toLocaleUpperCase());

let pi = 3.1455658566;

const newPi = parseFloat(pi.toFixed(2));

console.log(newPi + 20);



const newErick = (a,b) =>{

    if(b === 0 )
    {
        throw new Error('Error was found while deleting data');
    }else
    {
        console.log(` Number is : ${a / b}`);
    }

    return a / b ;
}


newErick(20,10);

let name = "Erick Elnino";


try
{
    console.log(newErick(20,0));
    

}catch(e)
{
   console.log(e.name)

}finally
{
    console.log(' The end !!!!')
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              