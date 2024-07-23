const coading = ["cpp", "python", "java", "js", "ruby"]

coading.forEach(  function (item) {
    console.log(item);
})

coading.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coading.forEach(printMe )

coading.forEach((item, index, arr) => {
    console.log(item, index, arr)
    
});
