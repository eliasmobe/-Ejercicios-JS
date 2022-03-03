console.clear();
const prompt = require("prompt-sync")();

const galones = Number(prompt("galones: "));


if (galones === 0) {

    console.log("no hay galones");

} else {

    console.log(`precio gasolina: ${(galones*3.78541)*1.33333} $`);

}

