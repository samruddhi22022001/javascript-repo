const instaUser = new Object();//singleton object 
console.log(instaUser);


const noUser = {};//non singleton object 
console.log(noUser);

noUser.name = "Ram";
noUser.Id = "254kjhd";
noUser.islogin = false;
noUser.location = "ramtek";

console.log(noUser);

//nested objects

regUser = {
    email: "anything@gmail.com",
    fullName: {
        userFName: {
            Fname: "Kaliya",
            Lname: "Naga"
        },
        location: "Shambala"
    }
}

console.log(regUser.fullName.userFName.Fname);


//how to combine objects 
// using assign
obj1 = {1:"a", 2:"b"};
obj2 = {3:"c", 4:"d"};
obj3 = {5:"g", 6:"h"}

obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

//using spread operator

obj5 = {...obj1, ...obj2}
console.log(obj5);

//when the data will come from the database the it will be in the form of array

objj = [{
    name: "hgjh",
    age: 55
},
{
    name: "hgjh",
    age: 55
},
{
    name: "hgjh",
    age: 55
}]

console.log(objj[1].name);

console.log(Object.keys(noUser));
console.log(Object.values(noUser));
console.log(Object.entries(noUser));
console.log(noUser.hasOwnProperty('namee'));

// object destructuring 

const course = {
    courseName: "Python",
    price: 999,
    courseInstructor: "Manav"
}

console.log(course.courseInstructor);

const {courseInstructor} = course;
const {courseInstructor : instructor} = course;

console.log(courseInstructor);

console.log(instructor);

//API are in json format 
/*{
     "name": "kliya",
   "add": "nothing",
    "add": "nothing"
 } */