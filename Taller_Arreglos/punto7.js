//Desarrollar un programa que lea la altura de N personas, calcular la
//media de dichas alturas, e indicar cuantas personas tienen una
//altura superior a la media

let N = Number(prompt("Ingrese, por favor, la cantidad total de personas"));
let alturas = [];
let dato = 0;
let suma = 0;
let media = 0;
let contarPersonas = 0;

for (let i = 0; i < N; i++) {
    dato = parseFloat(prompt(`Ingrese por favor la altura de la persona ${i+1} en metros`));
    alturas.push(dato);
}

for (altura of alturas) {
    suma += altura;
}

media = suma / N;

for (altura of alturas) {
    if (altura > media) {
        contarPersonas++;
    }
}

console.log(`El numero total de personas que tienen una altura superior a la media de ${media} (metros) es:  ${contarPersonas}`);