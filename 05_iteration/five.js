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


const Mycoading = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
     
]

Mycoading.forEach((item) => {
    console.log(item.languageName);
    
});