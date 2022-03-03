//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un numero: "));

let number2 = Number(prompt("Introduce el segundo numero: "));

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;

/* se pueden a hacer de ambas formas con el dollar y la otra pero con el dollar dice nacho que es mas profesional y no hay que tener tanto cuidado con los espacios */
console.log(`la suma de los dos numeros ${suma}`);
console.log(`la resta de los dos numeros ${resta}`);
console.log("la multiplicacion de los dos numeros es" , multiplicacion);
console.log("la division de los dos numeros: " , division)

/* tambien puedo hacer los console todos seguidos, entre las comillas francesas "``" entonces pondriamos 
console.log(`la suma de los dos numeros es 4{suma}, la resta es 4{resta}, la multiplicacion 4{multiplicacion},
division es`) */