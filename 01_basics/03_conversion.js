let score = 33;
let marks = "33";

console.log(typeof score);
console.log(typeof marks);

let numbertostring = String(score);
let stringToNumber = Number(score);

console.log(typeof numbertostring);
console.log(typeof stringToNumber);

console.log(numbertostring);

// "33" to 33
//"33abc" to NaN
//true to 1 ; false to 0
// null to zero 
//undefined to NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn)

//1 to true ; 0 to false
//"" ti false 
//"samruddhi" to true

let baba = 33
let StringBaba = String(baba);
console.log(typeof StringBaba);

//**************************operations***************************//

let value = 3
let negValue = -value

console.log(negValue);

str1 = "hello";
str2 = " samruddhi";
str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(2 + "1");
// console.log("2" + 1+ 2);
// console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2;

let gameCounter = 100;
++gameCounter;

console.log(gameCounter);