let name = 'Eriik';

console.log(typeof name);

let question = 'My name is eriik elnino';

let newQuestion = question.charAt(4);

console.log(newQuestion.toLocaleUpperCase());

console.log(question.startsWith('My'));
console.log(question.endsWith('eriik'));
console.log(question.includes('is'));

console.log(question.search('eriik'));
console.log(question.indexOf('name'));
console.log(question.lastIndexOf('is'));
console.log(question.toLowerCase());

let temp =  false;
 let newstring = temp.toString();
 console.log(newstring);

 console.log(typeof temp);
 console.log(typeof newstring);


 let elnino = "My name is eriik elnino Jackpot";

 console.log(elnino.split(' '));

 let newValue = elnino.split(' ');
 console.log(newValue[0]);

 console.log(elnino.slice(0,7));

 console.log(`Here is my new string : ${elnino.slice(-10,10)}`);

//  substring

console.log(elnino.substring(0,10));


let newName = 'Hello my friend \n "It\'s Nice to see you " \n How are you ?';

console.log(newName);

// String immutablelity

let myMessage = 'I am doing very Well';
