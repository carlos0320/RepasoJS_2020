//Leer n numeros en un array de enteros y mostrar en pantalla la posicion y valor
//del mayor elemento en el array

let n = Number(prompt("Ingrese la cantidad total de numeros en el arreglo"));
let array = [n];
let elMayor = 0;
let posicion = 0;

for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100);

}
elMayor = array[0];
for (let i = 1; i < n; i++) {
    if (array[i] > elMayor) {
        elMayor = array[i];
        posicion = i;
    }

}
console.log(`El arreglo es: ${array}`);
console.log(`El mayor numero del arreglo es: ${elMayor} y su posicion es ${posicion}`);