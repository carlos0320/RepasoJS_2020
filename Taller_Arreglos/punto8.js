//Desarrollar un programa que lea N números enteros en un array,
//calcular el promedio de valores positivos y los valores negativos en
//el array.

let array = [4, -3, -10, 56, 45, -1, 38, 99, -76];

let sumaPos = 0;
let contaPos = 0;
let sumaNeg = 0;
let contaNeg = 0;
let promPos = 0;
let promNeg = 0;


for (elemento of array) {

    if (elemento >= 0) {
        sumaPos += elemento;
        contaPos++;
    } else {
        sumaNeg += elemento;
        contaNeg++;
    }
}

promPos = sumaPos / contaPos;

promNeg = sumaNeg / contaNeg;

console.log(`el promedio de numeros positivos en el arreglo: [${array}] es: ${promPos} y el promedio de numeros negativos es: ${promNeg}`);