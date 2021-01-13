/*Crear un objeto persona, que tenga las propiedades, nombre, apellido, genero, edad, peso. 
utilizando la notación literal y con un constructor. Imprima el objeto en consola, e imprima cada una de sus propiedades 
utilizando la notacion de corchetes y la notación de punto.
*/

let persona = {
    nombre: "Carlos",
    apellido: "Grisales",
    genero: 'Masculino',
    edad: 23,
    peso: 75


}
console.log(persona);
console.log(persona['nombre']);
console.log(persona['apellido']);
console.log(persona['genero']);
console.log(persona['edad']);
console.log(persona['peso']);

// console.log(pantalla.marca, pantalla.fechaFabricacion, pantalla.tamañoPulgadas, pantalla.garantia);

// function persona(nombre, apellido, genero, edad,peso) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.genero = genero;
//     this.edad = edad;
//     this.peso=peso;


// }

let miPantalla = new pantalla("hp", "3/12/2020", 64, 1);

console.log(miPantalla);
console.log(miPantalla.marca);
console.log(miPantalla.fechaFabricacion);
console.log(miPantalla.tamañoPulgadas);
console.log(miPantalla.garantia);