function clientes(Nombre, Apellido, Telefono, Email, Compras) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Telefono = Telefono;
    this.Email = Email;
    this.Compras = Compras

}
let cliente1 = new clientes("carlos", "grisales", 345, "fggff", 3);
let cliente2 = cliente1
console.log(cliente1);
console.log(cliente2);