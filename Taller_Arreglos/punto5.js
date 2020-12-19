/*
Se tiene un array de n elementos, escriba en pantalla un mensaje
que indique 'esta ordenado' si el array esta ordenado ascendentemente o 'no esta ordenado' si el array no esta ordenado.
*/

function estaOrdenado(array) {
    let ordenado = 'esta ordenado';
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] - array[i + 1]) <= 0) {
            ordenado = 'esta ordenado';
        } else {
            ordenado = 'No esta ordenado';
            break;
        }
    }
    return ordenado;

}

let arreglo = [1, 2, 3, 9, 10, 11, 7, 8];
console.log(estaOrdenado(arreglo));