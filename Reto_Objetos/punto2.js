//Actividad 2
//Modifique la estructura anterior, de forma tal que cada jugador, tenga la
//siguiente funcionalidad.
//datosJugador(): Por medio de esta función, se muestran los datos del
//jugador y los puntos acumulados.
//aumentarPuntos(): Esta funcionalidad permite incrementar el puntaje de
//un jugador en 100 puntos.
//verificarSiGano(): Mostrar un mensaje indicando que el jugador ha
//ganado la partida, si el puntaje supera los 1000 puntos.



let participantes = {
    nombre: "",
    puntos: 0,
    datosJugador: function() {
        console.log("---------------");
        console.log("Los datos del jugador son: ");
        console.log(this.nombre);
        console.log(this.puntos);

    },
    aumentarPuntos: function() {
        console.log("--------------");
        console.log("Aumentando los puntos del jugador: ");
        let nuevospuntos = this.puntos + 100;
        console.log(`puntos antes: ${this.puntos},  puntos despues${nuevospuntos}`);

    },
    verificarSiGano: function() {
        console.log("-----------------");
        console.log("Verificando si el jugador ganó o no...");
        let resp = ((this.puntos) > 1000) ? "ganó" : "no ganó";
        console.log("el jugador " + resp);
        console.log("-----------------");
    }
}

let N = Number(prompt("Ingrese la cantidad total de jugadores"));
let listaJugadores = [];

for (let i = 0; i < N; i++) {
    let participante = Object.assign({}, participantes);
    participante.nombre = prompt(`ingrese el nombre del jugador ${i+1}`);
    participante.puntos = Number(prompt(`ingrese la cantidad de puntos para el jugador ${i+1}`));
    listaJugadores.push(participante);
}

for (obj of listaJugadores) {
    //console.log(obj);
    obj.datosJugador();
    obj.aumentarPuntos();
    obj.verificarSiGano();

}