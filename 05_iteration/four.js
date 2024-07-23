const myobj = {
    js : "javascript",
    cpp : "c++",
    pa : "Process Automation ",
    ws : "Writing Skills"
}

//forin loop

for (const key in myobj) {

    console.log(key);
 }

 for (const key in myobj) {

    console.log(`${key} is the shortcut for  ${myobj[key]}`);
 }

// for in on array
const arr = ["22", 23, 66, 23]


for (const key in arr) {

    console.log(key);
 }

 for (const key in arr) {

    console.log(arr[key]);
 }


 const map = new Map(); //it is not iterable 
map.set('In' , "India")
map.set('USA' , "United Sates Of America")
map.set('Fr' , "France")
map.set('In' , "India")


for (const key in map) {

    console.log(key);
 }



