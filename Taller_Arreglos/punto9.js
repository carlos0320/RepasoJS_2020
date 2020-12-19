//Desarrollar un programa que guarde 15 números en un array leídos
//por teclado, recorrer el array y calcular cuantos números son
//positivos, cuantos negativos y cuantos son cero

let arreglo = [];
let elemento = 0;
let contaPos = 0;
let contaNeg = 0;
let contaCero = 0;


for (let i = 0; i < 15; i++) {

    elemento = parseFloat(prompt("Ingrese por favor un numero"));
    arreglo.push(elemento);
}

for (elemento of arreglo) {

    if (elemento < 0) {
        contaNeg++;
    } else if (elemento > 0) {
        contaPos++;
    } else {
        contaCero++;
    }
}
console.log(`La cantidad total de numeros positivos en el arreglo [${arreglo}] es: ${contaPos},            
La cantidad de numeros negativos es: ${contaNeg}, 
y la cantidad total de ceros encontrados es:${contaCero}`);