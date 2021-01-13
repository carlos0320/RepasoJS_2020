'use strict'
//Punto 2:
// Dado un array de n elementos aleatorios, defina una funcion que reciba dicho array
// y retorne el elemento con mayor valor dentro del array dado. (Utilice la funcion creada
// en el numeral anterior para cargar los n elementos en el array)

function aleatorios() {

    //1. Crear una funcion que genere numeros aleatorios entre 1 y 50.
    return Math.floor(Math.random() * 50 + 1);

}

function elMayor(array) {

    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > mayor) {

            mayor = array[i];
        }
    }
    return mayor;
}

let n = aleatorios();
let array = [];
let mayorValor = 0;

for (let i = 0; i < n; i++) {
    array.push(aleatorios());
}
mayorValor = elMayor(array);

console.log(array);
console.log(`El mayor valor en el arreglo es: ${mayorValor}`);