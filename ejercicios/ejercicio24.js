
/*  do {
     capturar nombre
     if (nombre distinto de blanco)
       calcula_notas (alumno)
 } mientras (nombre distinto de blanco) */
const prompt = require("prompt-sync")();
let nombre;
do {
    nombre = prompt("Introduce el nombre: ");
    if (nombre !== "") {
        calcula_notas(nombre)
    }
} while (nombre !== "")

function calcula_notas(alumno) {
    let nota_practica = pedir_nota("practica", 10);
    let nota_teorica = pedir_nota("teorica", 40);
    let nota_problemas = pedir_nota("problemas", 50);
    console.log(`La nota de ${alumno} es ${nota_practica + nota_teorica + nota_problemas}`)
}


function pedir_nota(nota, porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}:`));
    return valor * porcentaje / 100;
}