//1. Leer n números por teclado, guardarlos en un array y calcular el
//promedio de los números que están en las posiciones par del array.
//Se considera la posición 0 como par.

let n = Number(prompt("Ingrese por favor el numero total de numeros a leer"));

let numeros = [];
let sumaPar = 0;
let sumaImp = 0;
let contaPar = 0;
let contaImp = 0;
let promPar = 0;
let promImp = 0;




for (let i = 0; i < n; i++) {
    numeros.push(parseFloat(prompt("Ingrese por favor un numero")));

}
for (let i = 0; i < n; i++) {
    if (i == 0) {
        sumaPar += numeros[i];
        contaPar++;
    } else if ((i % 2) == 0) {
        sumaPar += numeros[i];
        contaPar++;
    } else {
        sumaImp += numeros[i];
        contaImp++;
    }

}

promPar = sumaPar / contaPar;
promImp = sumaImp / contaImp;

console.log(`El promedio de los numeros ubicados en posiciones par del arreglo [${numeros}] es: ${promPar}
Y le promedio de los numeros ubicados en las posiciones impares del arreglo es: ${promImp}`);