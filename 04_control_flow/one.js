//control flow
//if and else

const n = 33;

if(n%2==0){
    console.log("Even.");
}
else{
    console.log("odd");
}

if(2==="2"){  ///=== it compare datatype also 
    console.log("Executed");

}
else{
    console.log("not executed");
}

// short hand notation 

const balance = 1000
if(balance>500) console.log("test");

//nesting 

if(balance<500){
    console.log("Less than 500");
}
else if(balance<750){
    console.log("less than 750");

}
else{
    console.log("less than 1200");
}

const userLoggedin = true
const debitcard = true
const userLoggedinfromgoogle  = true
const userLoggedinfromMail = false


if(userLoggedin && debitcard){
    console.log("Allowed to buy the course");
}

if(userLoggedinfromMail || userLoggedinfromgoogle){
    console.log("User Logged in ");
}