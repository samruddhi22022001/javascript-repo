//for loop

for(let i = 0; i<=10; i++){
    console.log(i);
    if(i==5){
        console.log(" 5 is the best number. ");
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
   for (let j = 0; j <=10; j++) {
    console.log(`Inner loop ${j}  and inner loop value ${i}`);
    
   }
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Table for ${i}`);
   for (let j = 1; j <=10; j++) {
    console.log(i + " * " + j + " = " + i*j);
    
   }
    
}

//loop on array
 
let myarr = [25, 56, 68, 89]

for (let i = 0; i <myarr.length; i++) {
    
    console.log(myarr[i]);
}


// break and continue


for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected 5 ");
        break;
    }
    console.log(`value og i is ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected 5 ");
        continue;
    }
    console.log(`value of i is ${index}`);
    
}

