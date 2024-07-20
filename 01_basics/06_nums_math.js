const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

//toString

console.log(balance.toString().length);

//toFixed (it gives the fixed decimal point )

console.log(balance.toFixed(2));//it will give upto 2 decimal point

//toPrecision

const otherNum = 123.895;
console.log(otherNum.toPrecision(4));

//toLocaleString

const hundreds =10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//it gives ,, accoording to indian style 

//************************Maths************************//

// console.log(Math);

// console.log(Math.abs(-3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.min(3, 5, 6, 7, 8));

// console.log(Math.max(4, 5, 6, 7, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min)+ 1)+ min);






