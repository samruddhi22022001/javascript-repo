//premitive datatype  (call by value )//

//7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id=== anotherId);

const bigNumber = 325546n



//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


//Nonpremitive (refference type)//

//Array, objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "daga"];

// object
let myObj = {
    name:"hitesh",
    age: 22,

}

//function 

const myFunction = function (){

    console.log("Hello world")

}


//******************************** Stack and Heap Mamory in JavaScript*****************************/

// Stack(primitive), Heap ( Non-Premitive)

let myYoutubeName = " Samruddhi "
let anotherName = myYoutubeName
anotherName = " Kalyani ";

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "samruddhi@gmail.com",
    upi: "user@ybl",

}

let userTwo = userOne;
userTwo.email = "kulkarni@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
