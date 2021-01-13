//La empresa ‘ACME LTDA’ tiene un registro de empleados, por cada empleado se
//guarda: DNI, nombre, apellido, zona (norte, sur, centro), sueldo base, comisión y total.
//Desarrolle un programa que calcule el total del salario por empleado, utilizando la
//formula:
//salario = sueldo base + comisión
//Se debe imprimir en pantalla, el nombre y el salario de cada empleado. El salario debe
//ser una propiedad de cada objeto creado.

//Serializamos la lista de objetos
function serializar(array) {
    let array2 = array.map(element => JSON.stringify(element));
    return array2;
}


let empleados = {
    DNI: 0,
    nombre: "",
    apellido: "",
    zona: "",
    sueldo: 0,
    comision: 0,
    salarioTotal: 0

}

let N = Number(prompt("ingrese por favor el total de empleados"));
let lista = [];
for (let i = 0; i < N; i++) {
    let empleado = Object.assign({}, empleados);
    empleado.DNI = Number(prompt("Ingrese el DNI del empleado " + (i + 1)));
    empleado.nombre = prompt("Ingrese el nombre del empleado " + (i + 1));
    empleado.apellido = prompt("Ingrese el apellido del empleado " + (i + 1));
    empleado.zona = prompt("Ingrese la zona del empleado (norte,sur,centro)");
    empleado.sueldo = prompt("Ingrese por favor el sueldo base del empleado");
    empleado.comision = prompt("Ingrese la comision para el empleado");

    empleado.salarioTotal = Number(empleado.sueldo) + Number(empleado.comision);
    console.log(`Nombre ${empleado.nombre}`);
    console.log(`Salario total ${empleado.salarioTotal}`);
    lista.push(empleado);



}
console.log(lista);

//Serializar
console.log(serializar(lista));