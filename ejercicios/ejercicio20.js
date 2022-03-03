/* Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo 
tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos 
que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa. */

const prompt = require("prompt-sync")();

// let password = Number(prompt("CLAVE: ")); 
const clave = "eureka";
let password;
let contador = 1;

/*  while (password !== clave && contador<3) {

     password = prompt("CLAVE: ");
    
    contador++;

}

if (password === clave) {
    console.log("clave correcta*****");
    
} else {
    console.log("te has pasado de 3 veces");}  */
// OTRA FORMA DE HACERLO CON DO/WHILE
/* do{
    password = prompt("Introduce la contraseña:");
    contador++;
} while (password !== clave && contador < 3){
    console.log("te has pasado 3 veces")
}  */

for (let i= 0 ; i<3 ; i++) {
    password = prompt("vuelve a introducir contraseña");

    if (password === clave) 
     break;


}

if (password===clave) {
    console.log("correcta")
} else {
    console.log("te has equivocado mas de 3 veces")
}

    

