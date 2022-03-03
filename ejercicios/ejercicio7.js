console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Dinero entregado: "));

let number2 = Number(prompt("Precio del articulo: "));


if (number1>number2) {
    let rest = number1 - number2 

    console.log(`El cambio sera: ${rest}`);}
 else if (number1 === number2 ) {
     
     console.log(`cambio justo`)
 }
 else {
    console.log(`No puedes comprar`);
}
