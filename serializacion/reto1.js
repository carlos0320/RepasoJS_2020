//Dado el anterior objeto, crear una función que lo
//convierta a un string.


let reunion = {
    titulo: 'Sesion Bootcamp JS',
    fecha: '17-Dic-2020',
    lugar: 'meetup',
    participantes: [
        'Andres',
        'Carlos',
        'Rafa',
        'Mabel',
        'Yuli'
    ]
};

function serializar(objeto) {
    let cadena = JSON.stringify(objeto);
    return cadena;
}

console.log(serializar(reunion));
console.log(typeof serializar(reunion));