/* Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales
* (recuerda usar la estructura condicional if).
   Ahora con 3 números diferentes.
*/
//const prompt = require("prompt-sync")();

//let number1 = Number(prompt("Introduce un numero: "));

//let number2 = Number(prompt("Introduce el segundo numero: "));

//if (number1<number2 ) {
    //console.log("el segundo numero es mayor")
    
//} else if (number1>number2) {
    //console.log("el primer numero es mayor")
//} else {
    //console.log("es el mismo numero")
//}


const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer numero: "));

let number2 = Number(prompt("Introduce el segundo numero: "));

let number3 = Number(prompt("Introduce el tercer numero: "));

if (number1> number2 ) {
    console.log("el primer numero es mayor")
    
} else if (number1> number3) {
    console.log("el primer numero es mayor")
    
} else if (number2> number1) {
    console.log("el segundo numero es mayor")
    
} else if(number2> number3) {
    console.log("el segundo numero es mayor")
    
} else if(number3> number1) {
    console.log("el tercer numero es mayor")

} else if(number3> number2) {
    console.log("el tercer numero es mayor")

} else {
    console.log("los numero son")

}

/* esto esta mal  */

/* let bigNumber=0;
let iguales=false;
// Aquí comparamos los dos primeros números, guardamos el mayor, y si son iguales lo guardamos en la variable 'iguales'
if (number1 > number2){
    bigNumber = number1;
} else if (number1 < number2){
    bigNumber = number2;
} else {
    bigNumber = number1;
    iguales = true;
}
// Y aquí comparamos el mayor con el tercer número 
if (bigNumber > number3){
    console.log("El número " + bigNumber + " es el mayor");
} else if (bigNumber < number3){
    console.log("El número " + number3 + " es el mayor");
} else if ((bigNumber===number3)&&(iguales===true)){
    console.log("Todos los números son iguales");
} else {
    console.log("El número " + bigNumber + " es el mayor y es igual al último número introducido");
} */


