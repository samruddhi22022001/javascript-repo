 // for of 

 const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(arr[num]);
    
}

const greetings = "Hello World" 
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//maps // contains unique values 

const map = new Map();
map.set('In' , "India")
map.set('USA' , "United Sates Of America")
map.set('Fr' , "France")
map.set('In' , "India")

console.log(map);


for (const [key, value]  of map) {
    console.log(key, ':-' , value);
    
}

const mObj = {
    'game1': 'Mba',
    'game2': 'hja',
}

// for (const [key, value]  of mObj) {
//     console.log(key, ':-' , value);
    
// }  // object are not iterable this way 



