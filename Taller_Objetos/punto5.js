//Dado el string ‘JavaScript is super fun!’, crear un programa que imprima el string al
//reves: ‘!nuf repus si tpircsavaj’.

//Usar solo strings

let mensaje = 'JavaScript is super fun!';
let alreves = [];
for (let i = mensaje.length - 1; i >= 0; i--) {
    alreves.push(mensaje[i]);
}
let mensaje2 = alreves.join('');
console.log(mensaje2);