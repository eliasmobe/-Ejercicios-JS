console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Sueldo: "));

if ( (number1<1000 || number1===1000) ) {
    let suma = number1 + number1*0.15
    console.log(`Nuevo sueldo: ${suma}`);
} else {
    console.log("Sueldo no varia")
}