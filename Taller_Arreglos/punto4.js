let n = Number(prompt("Ingrese la cantidad total de numeros en el arreglo"));
let array = [n];
let elMenor = 0;
let posicion = 0;

for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 100);

}
elMenor = array[0];
for (let i = 1; i < n; i++) {
    if (array[i] < elMenor) {
        elMenor = array[i];
        posicion = i;
    }

}
console.log(`El arreglo es: ${array}`);
console.log(`El menor numero del arreglo es: ${elMenor} y su posicion es ${posicion}`);