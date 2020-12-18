//Defina un mecanismo que me permita almacenar la información de n
//jugadores en una partida.

let participantes = {
    nombre: "",
    puntos: 0
}
let N = Number(prompt("Ingrese la cantidad total de jugadores"));
let listaJugadores = [];


for (let i = 0; i < N; i++) {
    let participante = {};
    participante.nombre = prompt(`ingrese el nombre del jugador ${i+1}`);
    participante.puntos = Number(prompt(`ingrese la cantidad de puntos para el jugador ${i+1}`));
    listaJugadores.push(participante);
}
console.log(listaJugadores);