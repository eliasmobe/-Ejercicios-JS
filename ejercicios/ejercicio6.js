const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer numero: "));

if (number1===0) {
    console.log("nulo")
} else if (number1 % 2 === 0) {
    console.log("numero par");
} else {
    console.log("numero impar")
}

