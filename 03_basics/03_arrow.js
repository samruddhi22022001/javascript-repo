// this keyword reffers to current context 

const user = {
    username: "raghav",
    price: 560,

    welcomeMessege: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }

}
user.welcomeMessege();

user.username = "Sam";
user.welcomeMessege();


//we cant use this in function

// function chai(){
//     let username = "Renuka"
//     console.log(this.username);//it wont frint the name 
// }

// chai()

/********************Arrow function***************/

const chai= () =>{
        let username = "Renuka"
        console.log(this.username);//it wont frint the name 
    } //here also this will give undefined
    
    chai()

    //
    const addTwo = (num1, num2) =>  {
        return num1 + num2 ;
    }
    
console.log(addTwo(22, 26));

//
const addnum = (num1, num2) => num1 + num2 ; // implicite return
// const addnum = (num1, num2) => (num1 + num2) ;


console.log(addnum(2, 2));

const addno = (num1, num2) => ({username: "rrrrrr"}) ;  //retuning object

console.log(addno(2,3));

