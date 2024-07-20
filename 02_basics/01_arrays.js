//Arrays

const myArr = [1,2,3,5,6,8]
console.log(myArr[0]);

const Heroes = ["kalyani", "Sanika", "Swati", "snehal"];
const Arr2 = new Array(22, 25, 55, 66, 89);

console.log(Arr2);

//Arrays Method
// myArr.push(55);
// myArr.pop();

// myArr.unshift(6);
myArr.shift()

console.log(myArr);

console.log(myArr.includes(6));
console.log(myArr.indexOf(6));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);


// slice, splice 
console.log("A " , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B " , myArr);

//splice

const myn2 = myArr.splice(1,3);

console.log(myn2);

console.log("C " , myArr);
