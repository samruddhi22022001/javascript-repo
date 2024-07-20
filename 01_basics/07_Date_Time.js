let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);
// date is an object in javascript

let myCreatedDate = new Date(2024, 0, 26) //in javascript months starts from 0 .
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 0, 26, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-01-22");
console.log(myCreatedDate3.toDateString());

let myCreatedDate4 = new Date("01-21-2024");
console.log(myCreatedDate4.toDateString());


//timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//convering in seconds

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))