//Se desea almacenar los datos de un producto en un registro. Cada producto debe
//contener información concerniente a: código, nombre del producto, precio.
//Diseñar un programa que permita cargar la información de n productos en una lista.

function serializar(array) {
    let array2 = array.map(element => JSON.stringify(element));
    return array2;
}

let producto = {

    "codigo": "",
    "nombre del producto": "",
    "precio": 0

}
let N = Number(prompt("Ingrese la cantidad total de productos"));
let lista = [];
//let copia = Object.assign({}, producto);
for (let i = 0; i < N; i++) {
    let copia = Object.assign({}, producto);
    copia.codigo = Number(prompt(`Ingrese por favor el codigo del producto ${i+1}`));
    copia["nombre del producto"] = (prompt(`Ingrese por favor el nombre del producto ${i+1}`));
    copia.precio = parseFloat(prompt(`Ingrese el precio del producto ${i+1}`));

    lista.push(copia);
}
console.log(lista);

//Serializar
console.log(serializar(lista));
//console.log(typeof serializar(lista));