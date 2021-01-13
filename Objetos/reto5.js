let salarios = {
    john: 260,
    ana: 150,
    pete: 300
};

let suma = 0;

// for (let salario in salarios) {
//     suma += salarios[salario];
// }

salarios = Object.keys(salarios).forEach((k, v) => v * 2)
console.log(salarios);