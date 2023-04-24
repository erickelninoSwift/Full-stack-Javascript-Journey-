console.log("Javascript OOP");

console.log(typeof []);

class Person 
{
   constructor(name,age)
   {
    this.age = age;
    this.name = name
   }

   getName = () => 
   {
    return this.name;
   }

   getAge = () =>
   {
    return this.age;
   }

}

const myPerson = new Person("Erick",24);

const {getName,getAge} = myPerson;

console.log(getAge());
console.log(getName());

class hourse 
{
    constructor(address,price,residents)
    {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () =>{
        return this.address;
    }

    getPrice = () =>{
        return this.price;
    }

    getResidents = () =>{
        return this.residents;
    }

    addResident = (residents) =>{

        this.residents.push(residents);
    }
}

const Erick  = new Person("Eriik",32);
const Anthony  = new Person("Anthony",28);

const kyalamiHills = new hourse("47 Maple drive",150000,Erick);
const SnaridgeVilage = new hourse("314 sans ridge village",750000,[Erick,Anthony]);

console.log(Erick);
console.log(Anthony);

console.log(kyalamiHills);
console.log(SnaridgeVilage);

let Yollande = new Person("Yollande", 89);
SnaridgeVilage.addResident(Yollande);
console.log(SnaridgeVilage);

class Programmer extends Person
{
    constructor(name,age,company, salary,language)
    {
        super(name,age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    sayHi  = () =>{
        return `Hello , I am a Programmer and i work for ${this.company} \n My salary is ${this.salary} and I use ${this.language} and my name is ${this.name} and I am ${this.age} years Old`;

    }
}

let javaDeveloper = new Programmer("Eriik Elnino",25,"Netflix",120000,"NodeJS/NestJS/MongoDB");

console.log(javaDeveloper.sayHi());


