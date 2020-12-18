//La compañía ‘ACME STUDIOS’, ha desarrollado un videojuego, donde por
//cada participante se guarda un registro que contiene el nombre del
//jugador y los puntos acumulados.
//Cree una estructura en JavaScript que represente la información de un
//jugador, solicite al usuario dicha información y almacene su valor en la
//estructura creada.

let participantes = {
    nombre: "",
    puntos: 0
}


//solo 1 jugador
participantes.nombre = prompt(`ingrese el nombre del jugador ${1}`);
participantes.puntos = Number(prompt(`ingrese la cantidad de puntos para el jugador ${1}`));
console.log(participantes);