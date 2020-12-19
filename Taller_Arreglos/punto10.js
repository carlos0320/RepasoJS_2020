//El tutor de una clase con N alumnos, desea conocer el
//promedio de notas del grupo y los alumnos con notas superiores al 
//promedio. Se debe mostrar el nombre y las notas de dichos
//alumnos.

let N = Number(prompt("Digite por favor la cantidad total de estudiantes"));
let nombres = [];
let notas = [];
let suma = 0;
let promedio = 0;

for (let i = 0; i < N; i++) {

    nombres[i] = prompt(`Digite por favor el nombre del alumno ${i+1}`);
    notas[i] = parseFloat(prompt(`Digite la nota de ${nombres[i]}`));

}

for (nota of notas) {
    suma += nota;
}

promedio = suma / N;

for (let i = 0; i < N; i++) {
    if (notas[i] > promedio) {
        console.log(`La/El estudiante ${nombres[i]} con nota ${notas[i]} tiene una nota superior al promedio (${promedio})`);
    }
}