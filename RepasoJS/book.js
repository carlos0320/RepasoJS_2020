'use strict'

//punto 5:
// BookLimited, es una compañia encargada de la venta y comercializacion de libros, por
// cada libro se tiene: Titulo, Autor, Numero de Paginas, precio. Desarrolle un programa en
// JavaScript que me permita cargar libros en la libreria, mostrar un listado con: titulo, autor
// y precio de cada libro.

let libreria = [];
let libros = {};
let cantLibros = Number(prompt("Ingrese la cantidad total de libros en la libreria"));

for (let i = 0; i < cantLibros; i++) {

    let libros = new Object();
    libros.titulo = prompt("ingrese por favor el titulo");
    libros.Autor = prompt("ingrese por favor el autor");
    libros.paginas = prompt("ingrese por favor el numero de paginas del libro");
    libros.precio = prompt("ingrese por favor el precio");
    libreria.push(libros);

}
console.log("Los libros de la libreria BookLimited son:");
console.log(libreria);