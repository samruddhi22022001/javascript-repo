//singleton
//object.crete

//object literals

const mySym = Symbol("Key1");

const jsUser = {
    name: "Radha",
    "full Name": "Radha Ranade",
    age: 21,
    [mySym] : "mykey1",
    location: "Jabalpur",
    email: "radha20@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday"]
}

console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);

console.log(jsUser[mySym]);

//how to the changes in object

jsUser.age = 55;
//Object.freeze(jsUser);
jsUser.name = "mad";

console.log(jsUser);

// how to add functions 

jsUser.greeting = function(){
    console.log("Hello js users");
}

jsUser.greetingTwo = function(){
    console.log(`hello js users ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());


