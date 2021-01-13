//Dado el anterior string, crear una
//función que lo convierta a un
//objeto.

let character = `
{
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"created": "2014-12-09T13:50:51.644000Z",
"edited": "2014-12-20T21:17:56.891000Z"
}
`;

function deserializar(cadena) {
    let objeto = JSON.parse(cadena);
    return objeto;
}
let nuevoObjeto = deserializar(character);
console.log(nuevoObjeto);
console.log(typeof deserializar(character));