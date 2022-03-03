console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Primera nota: "));

let number2 = Number(prompt("Segunda nota: "));

let number3 = Number(prompt("Tercera nota: "));

let number4 = Number(prompt("Cuarta nota: "));

let number5 = Number(prompt("Quinta nota: "));



if ( ((number1+number2+number3+number4+number5) / 5) >= 5 ) {
    
    console.log(`Aprobado`)
} else {
     console.log(`No aprobado`)
}