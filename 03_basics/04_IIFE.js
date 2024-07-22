// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB connected. `);
})(); //named IIFE

(() => {
    console.log("DB connected Two ");
}) (); //unnammed IIFE


((name) => {
    console.log(`DB connected Two ${name}`);
}) ("karina");
