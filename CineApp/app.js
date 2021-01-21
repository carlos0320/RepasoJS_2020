'use strict'
console.clear();
//El teatro cuenta con 5 filas y 5 columnas
//Cada silla es un objeto con las siguientes propiedades: nombre y estado
// estados: 
// libreria(L),Reservado(R),Comprado(C)

function crearCine() {
    //Esta funcion crea la sala de cine

    console.log('Creando el cine');

    let cine = [];
    for (let i = 0; i < 5; i++) {

        let columnas = [];
        for (let j = 0; j < 5; j++) {

            //Recorremos las columnas de la matriz y vamos creando un objeto silla por cada iteracion
            let silla = new Object();
            silla.nombre = `f${i}c${j}`;
            silla.estado = 'L';
            columnas.push(silla);
        }
        cine.push(columnas);
    }
    return cine;

}

function mostrarCine(cine) {
    //Mostramos en consola el estado de las sillas
    let cineEstados = [];
    let sillasNombres = [];

    console.log('Mostrando el cine...');

    //Recorremos la matriz cine y almacenamos el estado y el nombre de la silla para luego visualizarlos
    for (let i = 0; i < cine.length; i++) {
        let sillaEstado = [];
        let sillaNombre = [];
        for (let j = 0; j < cine.length; j++) {
            sillaEstado.push(cine[i][j].estado);
            sillaNombre.push(cine[i][j].nombre);
        }
        cineEstados.push(sillaEstado);
        sillasNombres.push(sillaNombre);

    }
    console.log('ESTADOS ACTUALES DE LAS SILLAS');
    console.log('Mostrando el estado del cine...');
    console.log('L para libre\nR de reservado\n C para comprar');
    console.log(cineEstados);
    console.log("......................................");
    console.log('NOMBRES DE LAS SILLAS');
    console.log('Mostrando el nombre de las sillas del cine...');
    console.log(sillasNombres);
}

function verificarDisponibilidad(nombre, cine) {
    //Esta funcion se encarga de verificar la disponibilidad del asiento
    //Se pasan como parametros el nombre del asiento y la matriz, luego se realiza la busqueda con el ciclo for
    let esDisponible = false;

    try {

        for (let i = 0; i < cine.length; i++) {
            for (let j = 0; j < cine.length; j++) {

                if (cine[i][j].nombre == nombre && cine[i][j].estado == "L") {
                    //Realizar en caso de que el nombre ingresado por el usuario sea correcto y el asiento esté Libre
                    console.log('Disponible...');
                    esDisponible = true;
                }
            }
        }
        if (!esDisponible) {
            //Generamos la excepcion, en caso de que el nombre de la silla no exista o esté comprada o reservada
            throw new Error('El asiento no existe, o no está disponible por favor intente de nuevo');

        } else {
            return esDisponible;
        }


    } catch (error) {
        //Capruramos la excepcion generada
        alert(error);
        //Regresamos al menu principal

    }



}

function cambiarEstado(nombre, cine, opcion) {
    //Esta funcion cambia el estado de la matriz cine a 'C' de comprado o a 'R' de reservado
    //Recibe como argumentos el nombre de la silla, la matriz cine y la opcion ('C' o 'R')

    for (let i = 0; i < cine.length; i++) {

        for (let j = 0; j < cine.length; j++) {

            if (cine[i][j].nombre === nombre) {
                //Realizar en caso de encontrar el nombre de la silla, cambiamos el estado dependiendo de la opcion
                cine[i][j].estado = opcion;
                break;
            }
        }
    }
}

function funcionalidades(opcion, cine) {
    //Esta funcion se encarga de recibir la opcion ingresada por el usuario y comunicarse con las funciones 
    // verificarDisponibilidad(), cambiarEstado() y mostrarCine() con el fin de verificar la disponibilidad, cambiar el
    //estado de la silla y mostrar la configuracion del cine

    let nombre = '';
    let esDisponible = false;

    switch (opcion) {

        case 1:

            nombre = prompt('Por favor elija el nombre de la silla que quiere comprar');
            esDisponible = verificarDisponibilidad(nombre, cine);

            if (esDisponible) {

                cambiarEstado(nombre, cine, 'C');
                console.log('Funcionalidad terminada.....');
                mostrarCine(cine);
            }
            break;

        case 2:

            nombre = prompt('Por favor elija el nombre de la silla que quiere reservar');
            esDisponible = verificarDisponibilidad(nombre, cine);

            if (esDisponible) {

                console.log('Funcionalidad terminada.....');
                cambiarEstado(nombre, cine, 'R');
                mostrarCine(cine);
            }
            break;

    }

    //Esperamos 3 segundos para visualizar los datos y regresamos al menú principal
    setTimeout(() => {
        menuPrincipal();
    }, 9000);


}

function menuPrincipal() {
    //Esta funcion realiza el programa principal (Menú)
    console.clear();
    let opcion = 0;

    try {

        opcion = parseInt(prompt("Por favor digite la opcion que desea realizar:\n 1 para Comprar \n 2 para Reservar \n 3 para salir"));

        if (opcion === 1 || opcion === 2) {

            mostrarCine(miCine);
            setTimeout(() => {
                funcionalidades(opcion, miCine);
            }, 12000);

        } else if (opcion === 3) {

            return 0;


        } else {

            throw new Error('Opcion no valida, por favor vuelva a intentarlo');



        }
    } catch (error) {
        alert(error)
        menuPrincipal();
    }



}


let miCine = [];
let opcion = 0;
miCine = crearCine();
menuPrincipal();