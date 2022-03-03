/* Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media 
de todos ellos. Piensa como debemos inicializar las variables. */

const prompt = require("prompt-sync")();
let suma = 0
let minimo = Infinity
let maximo = -Infinity
let number;
let item = 0
while (number !== 0  ) {
      number = Number(prompt("numero:")) ;
    if (number === 0 ) {
      break;
    } 
    
    if (number < minimo){
        minimo = number
    } 
    if (number > maximo) {
        maximo = number
    }
    suma = suma + number
    item++    
}
console.log(`minimo:${minimo} y maximo:${maximo} y media:${suma/item}`)
