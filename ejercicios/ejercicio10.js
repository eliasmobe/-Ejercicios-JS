/* console.clear();
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Categoria: "));

let number2 = Number(prompt("Sueldo: ")); */

/* if (number1===1) {
    let nuevosueldo = number2*1.15
    console.log(`Categoria 1 y sueldo: ${nuevosueldo}`)
} else {
 if ((number1===2)) {
    let nuevosueldo2 = number2*1.10
    console.log(`Categoria 2 y sueldo: ${nuevosueldo2}`)
 } else { if (number1===3) {
    let nuevosueldo3 = number2*1.06

    console.log(`Categoria 3 y sueldo: ${nuevosueldo3}`)
 } else {  
    let nuevosueldo4 = number2*1.03
    console.log(`Categoria 4 y sueldo: ${nuevosueldo4}`)
 }
     
 }    
} */

/* if( !isNan(sueldo) && !isNan(categoria))
switch (categoria) {
   case 1:{
      console.log(`el nuevo sueldo es`number2*1.15);
      break;}
   case 2:{
      console.log(`el nuevo sueldo es`number2*1.10);
      break;}

   case 3:{
      console.log(`el nuevo sueldo es`number2*1.06);
      break;}

   case 4:{
      console.log(`el nuevo sueldo es`number2*1.03);
   
   }
   default:{

     console.log(`la categoria no esta entre 1 y 4`) 
      break;}
}
 */
/* aqui empezamos con let incremento = 0 porque tiene que empezar asi 
porque ponemos primero que si incremento es = a 0 pues empieza en 0 
y entonces cuando terminamos el switch , y cuando lo terminamos 
ponemos las cuentas que queremos. */

/* console.clear();
const prompt = require("prompt-sync")();
const sueldo = Number(prompt("Sueldo:   "));
const categoria = Number(prompt("Categoría entre 1-4:   "));
if (!isNaN(sueldo) && !isNaN(categoria)) {
  let incremento = 0;
  switch (categoria) {
    case 1: {
      incremento = 1.15;
      break;
    }
    case 2: {
      incremento = 1.1;
      break;
    }
    case 3: {
      incremento = 1.06;
      break;
    }
    case 4: {
      incremento = 1.03;
      break;
    }
    default: {
      console.log("Las categorias son entre 1-4");
    }
  }
  if (incremento > 0) {
    console.log("El sueldo nuevo es:   ", sueldo * incremento);
  }
} else {
  console.log("Error de entrada");
}
 */
// ARRAY 

/* console.clear();
const prompt = require("prompt-sync")();
let sueldo = Number(prompt("Sueldo:   "));
const categoria = Number(prompt("Categoría entre 1-4:   "));

const incrementos=[1.15,1.10,1.06,1.03];

if (categoria >=1  && categoria <=4) {
  console.log("el nuevo sueldo es" , sueldo*incrementos[categoria-1] )
}
 */
/* ten en cuenta el sueldo*incrementos[categoria-1] ahi ponemos el -1 porque en el indice del array 
empieza en 0 y seria 0,1,2,3 y con ese -1 ajustamos las categorias al indice del array.
si accedes a un arrray y no lo esta en el indice te va a dar unDefined */

/* con el corchete accedemos a lo que hay en incrementos 
lo que hemos hecho es un array y asi solucionamos mucho mas rapido refactorizando */


// while 
/* console.clear();
const prompt = require("prompt-sync")();
let sueldo = Number(prompt("Sueldo:   "));
const categoria = Number(prompt("Categoría entre 1-4:   "));

const incrementos=[1.15,1.10,1.06,1.03];

let indice = 0

while (indice < categoria) {
   indice = indice + 1;
}

if (indice=== categoria){
  console.log("nuevo sueldo" , sueldo*incrementos[indice-1])
} */

console.clear();
const prompt = require("prompt-sync")();
const alumnos = Number(prompt("Introduce numero de alumnos:   "));

/* let notas= [] ; //hacemos un array si necesitamos guardarlas en un arrray , si no ni lo usamos

for (let i=0; i < alumnos ; i++){
  notas[i]= Number(prompt(`Introduce nota de alumnos: ${i}`,))
} */



/* let j = 0  
while (j<alumnos) {
  notas[j] = Number(prompt(`Introduce nota de alumnos: ${j}`,))
  j = j + 1
} */

/* let suma = 0
for (let i=0; i< alumnos; i++){
  suma = suma + notas[i];
  console.log(`la suma es ${suma}`)

}
  console.log(`la media es ${suma/alumnos}`); */


/* let suma = 0;
for (let i=0; i < alumnos ; i++){
suma= suma + Number(prompt(`Introduce nota de alumnos: ${i}`,))
}
console.log(`la media es ${suma/alumnos}`); */

/* con este de arriba tenemos otra forma de hacerlo peormuchisimo mas simplificado */


let nota = 0;
let suma = 0;
let contador = 0;
while (nota >= 0 && nota <= 10) {
  nota = Number(prompt(`Ingresar la nota:  `));
  if (nota >= 0 && nota <= 10) {
    suma = suma + nota;
    contador++;
  }
}
console.log(`El promedio de notas ${contador} alumno es : ${suma / contador}`)

/* los bucles finitos los hacemos siempre con for y los bucles infinitos los hacemos siempre con while */