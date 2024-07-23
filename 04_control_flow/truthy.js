// truthy anf falsy 

// falsy values:
//false , 0 , "", -0, bigInt 0n, null, undefined, NaN

//truthy values 
// truth, "0", 'false', " ", [], {}, function(){}, 

const arr = [];
if(arr.length===0){
    console.log("Array is empty");
}

const obj ={}

if(Object.keys(obj).length===0){
    console.log("Empty object");
}

//Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1);

let val2;
val2 = null ?? 10;

console.log(val2);

let val3;
val3 = undefined ?? 15;

console.log(val3);

//terniary operaor

const icetea = 100;
icetea >=80 ? console.log("greter than 80") : console.log("Less than 80");
