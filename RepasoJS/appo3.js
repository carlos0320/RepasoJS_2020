'use strict'
//punto 3:

// Dada una matriz cuadrada (igual numero de filas, que columnas) de n elementos
// enteros aleatorios, defina una funcion que reciba la matriz e imprima la diagonal
// principal. ( Utilice la funcion creada en el numeral anterior para cargar los n elementos en
// el array).

function aleatorios() {

    //1. Crear una funcion que genere numeros aleatorios entre 1 y 50.
    return Math.floor(Math.random() * 50 + 1);

}

function diagonal(arrayM) {

    let arrayD = [];

    for (let i = 0; i < arrayM.length; i++) {

        for (let j = 0; j < arrayM.length; j++) {

            if (i == j) {
                arrayD.push(arrayM[j][j]);
            }
        }
    }
    return arrayD;
}


let nMatriz = aleatorios();
let matriz = [];
let matrizInt = [];
let arrDiagonal = [];

console.log(nMatriz);

for (let i = 0; i < nMatriz; i++) {

    matrizInt = [];
    for (let j = 0; j < nMatriz; j++) {


        matrizInt[j] = aleatorios();
    }
    matriz[i] = matrizInt;
}

console.log("La matriz es:");
console.log(matriz);
arrDiagonal = diagonal(matriz);

console.log(`La diagonal de la matriz es: ${arrDiagonal}`);