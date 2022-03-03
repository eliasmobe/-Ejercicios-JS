const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer numero: "));

if (number1>0) {
console.log("numero positivo")
} else { if (number1<0) {
    console.log("numero negativo")
} else {
console.log("numero nulo")
}
    
}