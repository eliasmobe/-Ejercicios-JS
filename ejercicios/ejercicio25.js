/* aqui tiene que ir un const promp. */

const max = 4;



for (let i = 0; i < max; i++) {
    console.log(imprimir_linea(i));
}

/* 
funcion que imprime una linea rellena de asteriscos si es la primera o la ultima.
Si son lineas centrales , el primer y el ultimo caracter son asteriscos
 y los del centro son en blanco
*/

function imprimir_linea(num_linea) {

    if (num_linea === 0 || num_linea === max - 1) {
        return rellenar_linea("*", "*")
    } else {
        return rellenar_linea("*", "")
    }

}

function rellenar_linea(extremo, central) {
    let linea = "";
    let caracter;
    for (let i = 0; i < max; i++) {
        if (i === 0 || i === max - 1) {
            caracter = extremo;
        } else {
            caracter = central;
        }
        linea = linea + caracter;
    }
    return linea;
}


/*  const max = 4;
for (let i=0; i<max; i++) {
    console.log (imprimir_linea(i));
}
/*
    Función que imprime una linea rellena de asteriscos si es la primera 
    o la última. Si son lineas centrales, el primer y ultimo caracter son 
    asteriscos y los del centro son en blanco.

function imprimir_linea (num_linea) {
    if (num_linea === 0 || num_linea === max-1 ) {
        return rellenar_linea ("*","*")
    } else {
        return rellenar_linea ("*"," ")
    }
}
function rellenar_linea (extremo,central) {
    let linea = "";
    let caracter;
    for (let i=0; i<max;i++) {
        if (i===0 || i===max-1) {
            caracter = extremo;
        } else {
            caracter = central;
        }
        linea = linea + caracter;
    }
    return linea;
} */