//Dado un array de N elementos enteros entre 0 y 100, crear un programa que invierta el
//contenido de dicho array.


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let lista2 = []

if ((lista.length >= 0) && (lista.length <= 100)) {
    for (let i = lista.length - 1; i >= 0; i--) {
        console.log(i);
        lista2.push(lista[i]);
    }
    //console.log(lista);
    console.log(lista2);
} else {
    console.log("la lista debe tener entre 0 y 100 elementos");
}