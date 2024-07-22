//we should avoid using var to declare variable it create problem in the scope 

let a = 200 //global scope
if(true){
    let a= 20 //block scope 
    const b= 300
    console.log(`inner loop :  ${a}`);
}

console.log(a);

/******************/

function one(){
    const username = "Kanha";
    console.log("done");

    function two(){
        const website = "YouTube";
        console.log(username);
    }

    two();
}

one();


if(true){
    const username = "ranu";
  if(username=== "ranu"){
    const website = "Netflix";
    console.log(username + " " + website);
  }  
  
}
/*********************************interesting concept */
console.log(addOne(6)); //here you can call the the function before declaring

function addOne(num) {
    return num+1
}

const addTwo = function(num){ // here you cant 
    return num + 2;
}

console.log(addTwo(55));