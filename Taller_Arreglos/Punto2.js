//leer dos arreglos A y B con n numeros cada uno
//Sumar los valores A y B y almacenarlos en un Array C

let n = Number(prompt("Ingrese la cantidad total de elementos para ambos arreglos A y B"));
let A = [n];
let B = [n];
//Llenamos los dos arreglos con numeros aleatorios entre 0 y 100

for (let i = 0; i < n; i++) {

    A[i] = Math.random() * 100;
    B[i] = Math.random() * 100;

}

//Sumamos cada valor de A con cada valor de B y lo almacenamos en un nuevo arreglo C
let C = [n];
for (let i = 0; i < n; i++) {
    C.push(A[i] + B[i]);

}
console.log("El arreglo A es:", A);
console.log("El arreglo B es:", B);
console.log("El arreglo C es:", C);