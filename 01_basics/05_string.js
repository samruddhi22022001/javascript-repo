//String 

const name = "Samruddhi "
const repocount = 50

console.log(name + repocount + "value")

console.log(`hello my name is ${name} and my repocount is ${repocount}` )

const gameName = new String('hitesh-hc')

//Methods
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newString);
console.log(newString.trim());


const url = "http://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('samruddhi'));

//string to array 

console.log(gameName.split('-'));