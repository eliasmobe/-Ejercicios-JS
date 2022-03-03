

console.clear();
/* const prompt = require("prompt-sync")();



let fecha = 0;
let dia = 0;
let mes = 0;
let ano = 0;

while (fecha === 0) {
    let number1 = Number(prompt("Dia: "));

    let number2 = Number(prompt("_Mes: "));

    let number3 = Number(prompt("Año: "));




    if (number1 >= 1 && number1 <= 31 && number2 >= 1 && number2 <= 12 &&
        number3 >= 1 && number3 <= 2022) {
        fecha = 1;
        switch (true) {
            case number2 == 1:
                console.log(`${number1}, enero , ${number3}`)
                break;
        
            default:
                break;
        }

    } else {
        console.log(`fecha erronea`)
    }
} 
 */
/* forma economica */
const prompt = require("prompt-sync")();


let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
                 "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let number1;
let number2;
let number3;
let continuar = true;
do {
    
    number1 = Number(prompt("Dia: "));
    number2 = Number(prompt("_Mes: "));
    number3 = Number(prompt("Año: "));
    continuar = !fechaValida(number1,number2,number3);
    if (continuar) {
        console.log("fecha erronea")
    }

} while (continuar);    
  console.log(`la fecha es ${number1} de ${nombreMes} de ${number3}`);
     function fechaValida(number1,number2,number3) {
        let dias = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
        let diasMes;
     if (number2 === 2 && (number3 % 4 === 0 && number3 % 400 === 0) ){
         diasMes = 29;
     } else {
         diasMes = dias[number2];
     }
    
    
        }                                         

    



