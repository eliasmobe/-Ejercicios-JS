// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.
 console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer numero: "));

let number2 = Number(prompt("Introduce el segundo numero: "));

let number3 = Number(prompt("Introduce el tercer numero: "));











if ( isNaN(number1 ) || isNaN(number2) || isNaN(number3) ) {
    console.log("porfavor mete solo numeros")
} else if (number1>=0)  {
    let suma = number1 + number2 + number3
    console.log("la suma de los 3 numeros es" , suma);
}  else {
    
    let multiplicacion = number1 * number2 * number3

console.log("la multiplicacion de los 3 numeros es " , multiplicacion);}

/* para hacerlo bien del todo habria que meter un if hacer lo de los numeros y dentro del else  volver a meter un if y otro else. */

if (condition) {
    
} else {
    if (condition) {
        
    } else {
        
    }
    
}

/* // Ejercicio 4 hecho por el profesor
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.
console.clear();
const prompt = require("prompt-sync")();
let number1 = Number(prompt("Introduce un numero: "));
let number2 = Number(prompt("Introduce el segundo numero: "));
let number3 = Number(prompt("Introduce el tercer numero: "));
// is not a number
isNaN(number1); // ----> true/false
if (number1 >= 0) {
  const sum = number1 + number2 + number3;
  console.log(`La suma es ${sum}`);
} else {
  const multiply = number1 * number2 * number3;
  console.log(`El producto es ${multiply}`);
} */