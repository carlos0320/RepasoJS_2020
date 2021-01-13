'use strict'
// punto 4:

// Modifique el programa anterior, para obtener la suma de los elementos de la diagonal
// principal.


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

function sumaDiagonal(arrayD) {

    let suma = 0;

    for (let i = 0; i < arrayD.length; i++) {
        suma += arrayD[i];
    }
    return suma;
}

let nMatriz = Number(prompt("ingrese por favor la cantidad de elementos de la matriz cuadrada (mismo numero de filas y columnas)"));
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

let sumaD = sumaDiagonal(arrDiagonal);
console.log(`La suma de los elementos de la diagonal es: ${sumaD}`);