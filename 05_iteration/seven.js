// map 
const myNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNo.map((num) =>  num+10)
const newNum1 = myNo.map((num) => { return num+10})

console.log(newNum);
console.log(newNum1)

//chaining 

const newNum2 = myNo.map((num) => num*10)
                .map((num) => num +1)
                .filter((num) => num>=40)

console.log(newNum2);