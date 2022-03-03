const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer numero: "));

let suma = 0
for (let i = 1; i<= number1 + 1 ; i++) {
      
    suma = suma + i;

    

}  console.log(`la suma de los ${number1} primeros numeros es ${suma} ` )