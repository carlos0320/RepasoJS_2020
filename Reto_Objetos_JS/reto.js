//La compañía ‘ABC’, desea tener un registro de todos sus clientes potenciales, esto con el fin de proporcionar
//mejores servicios y productos a precios competitivos.
//Para lo cual, desea desarrollar un programa que guarde la información básica de sus clientes, nombre,
//apellido, teléfono (no mayor a 10 dígitos), correo electrónico. Adicional a esto, la empresa quiere contar con
//una lista de totales de compras de cada cliente, basado en las diferentes compras que realizo.

function clientes(Nombre, Apellido, Telefono, Email, Compras) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Telefono = Telefono;
    this.Email = Email;
    this.Compras = Compras

}
let cliente1 = new clientes("carlos", "grisales", 345, "fggff", 3);
let cliente2 = new clientes("marta", "gonzalez", 456, "ffffff", 6);
console.log(cliente1);
console.log(cliente2);
let Nombre = "";
let Apellido = "";
let Email = "";
let Telefono = 0;

let totalCompras = 0;
let intentos = 0;
let cliente = [];
let CompraCliente = [];

let totClientes = Number(prompt("Digite por favor la cantidad total de clientes"));
for (let i = 0; i < totClientes; i++) {

    Nombre = prompt(`Digite por favor el nombre del cliente ${i+1}`);
    Apellido = prompt(`Digite por favor el apellido del cliente ${i+1}`);
    Email = prompt(`Digite por favor el email del cliente ${i+1}`);
    Telefono = Number(prompt(`Digite por favor el telefono del cliente ${i+1}, no mayor a 10 digitos`));
    while ((Telefono.toString.length > 10 || isNaN(Telefono)) && intentos < 3) {
        alert("Telefono inválido, el numero no debe contener mas de 10 digitos, ademas debe ser numero");
        Telefono = Number(prompt(`Digite por favor el telefono del cliente ${i+1}, no mayor a 10 digitos`));
        if (((Telefono.toString.length <= 10) && Number.isInteger(Telefono))) {
            intentos = 3;
        } else {
            intentos++;
        }
    }
    totalCompras = Number(prompt(`Digite por favor el numero total de compras para el cliente ${i+1}`));
    for (let i = 0; i < totalCompras; i++) {
        CompraCliente[i] = Number(prompt(`Digite por favor la compra ${i+1} para el cliente ${Nombre}`))

    }

    cliente.push(new clientes(Nombre, Apellido, Telefono, Email, CompraCliente));
    CompraCliente = [];


}

//Calculamos el total de compras por cliente y sumamos todas las compras
let totalComprasCliente = 0;
let sumatotal = 0;
let i = 1;
cliente.forEach(element => {
    console.log(element.Compras.length);

});
for (usuario of cliente) {
    for (let i = 0; i < usuario.Compras.length; i++) {
        totalComprasCliente += usuario.Compras[i];
    }
    sumatotal += totalComprasCliente;
    console.log(`La informacion del cliente ${i+1} es: ${usuario}, y su compra total es: ${totalComprasCliente}`);
}

console.log(`La suma total de todas las compras de todos los clientes es: ${sumatotal}`);