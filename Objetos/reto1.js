// let pantalla = {
//     marca: "hp",
//     fechaFabricacion: "3/12/2020",
//     tamañoPulgadas: 64,
//     garantia: 1

// }

// console.log(pantalla.marca, pantalla.fechaFabricacion, pantalla.tamañoPulgadas, pantalla.garantia);

function pantalla(marca, fechaFabricacion, tamañoPulgadas, garantia)
 {
    this.marca = marca;
    this.fechaFabricacion = fechaFabricacion;
    this.tamañoPulgadas = tamañoPulgadas;
    this.garantia = garantia;


}

let miPantalla = new pantalla("hp", "3/12/2020", 64, 1);

console.log(miPantalla);
console.log(miPantalla.marca);
console.log(miPantalla.fechaFabricacion);
console.log(miPantalla.tamañoPulgadas);
console.log(miPantalla.garantia);