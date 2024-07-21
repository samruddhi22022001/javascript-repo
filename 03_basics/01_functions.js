//functions 

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("M");
}

sayMyName();

// function add(num1, num2){

//     console.log(num1+num2);

// }
// add(22, 59);

function add(num1, num2){
// let res = num1+num2;
// return res;

return num1+num2;
}

console.log(add(22,58));

function loginUserMessege(userName) {
    if(userName=== undefined){
        console.log("Please enter a username.");
        return
    }

return `${userName}  just logged in. `;
}

console.log(loginUserMessege());

function loginUser(userName = "Love") {
    if(userName=== undefined){
        console.log("Please enter a username.");
        return
    }

return `${userName}  just logged in. `;
}

console.log(loginUser());
console.log(loginUser("MAYA"));

//*********************************************************************************/

function calculateCartPrice(...number1){
    return number1

}
console.log(calculateCartPrice(10,20,35,56));

function calCartPrice(n, m,...number1){
    return number1

}
console.log(calCartPrice(10,20,35,56));
////////////////
const user = {
userName: "Kanha",
price: 600,
}

function handleUser(anyobject){
    console.log(`the user name is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleUser(user);
handleUser({
    userName: "sam",
    price: 500
});

// how to pass array in function 

const arr = [22,25,26,26];

function returnSecondValue(getarray){
    return getarray[1];
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue[255,65,89,212]);

