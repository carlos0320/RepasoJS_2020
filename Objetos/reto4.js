function esVacio(objeto) {

    let contador = 0;
    for (elemento in objeto) {

        contador++;
    }

    if (contador > 0) {
        return false;

    } else {
        return true;
    }

}
let persona = {
    nombre: "carlos"


}
console.log(esVacio(persona));