//Diseñe un programa en JavaScript que lea el nombre y el salario de
//10 empleados de la compañía 'ACME', el programa debe calcular la
//media de salarios y mostrar en pantalla el nombre y salario del
//empleado con mayor salario.
let nombres = [];
let salarios = [];

function leerDatos() {

    for (let i = 0; i < 2; i++) {
        nombres.push(prompt(`ingrese por favor, el nombre del empleado ${i+1}`));
        salarios.push(parseFloat(prompt(`Ingrese el salario del empleado ${i+1}`)));
    }

}

function promedio(array) {

    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    promedio = suma / array.length;
    return promedio;

}

function mayorSalario(nombre, salario) {
    let elMayor = salario[0];
    let posicion = 0;
    let respuesta = [];

    for (let i = 1; i < salario.length; i++) {
        if (salario[i] > elMayor) {
            elMayor = salario[i];
            posicion = i;
        }
    }
    respuesta.push(nombre[posicion]);
    respuesta.push(elMayor);

    return respuesta;

}
let resp = [];
leerDatos()
console.log(`el promedio de los datos es: ${promedio(salarios)}`);
resp = mayorSalario(nombres, salarios);
console.log(`el nombre del empleado con mayor salario es ${resp[0]}, y su salario es ${resp[1]}`);