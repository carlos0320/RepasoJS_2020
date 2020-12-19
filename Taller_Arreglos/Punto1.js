//calcular el promedio de n numeros almacenados en un Array
'use strict'

let n = Number(prompt("Ingrese la cantidad de elementos del Array"));
let suma = 0;
let valor = 0;
let promedio = 0;
let array = [n];


for (let i = 0; i < n; i++) {
    valor = parseFloat(prompt("Ingrese por favor un numero"))
    array.push(valor);

}

for (elemento of array) {
    suma += elemento;
}


promedio = suma / n;

console.log(`El promedio de los elementos almacenados en el Array es ${promedio}`);