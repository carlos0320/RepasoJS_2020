//Serializamos la lista de objetos
function serializar(array) {
    let array2 = array.map(element => JSON.stringify(element));
    return array2;
}

//Creamos el objeto de tipo producto
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

let suma = 0;
let nombreProducto = "";
let precio = 0;

for (let i = 0; i < lista.length; i++) {

    nombreProducto = lista[i]["nombre del producto"];
    precio = lista[i].precio;
    console.log(`Nombre del producto: ${nombreProducto}, precio: ${precio}`);
    suma += precio;
}

console.log("precio total: " + suma);
//Serializar
console.log(serializar(lista));