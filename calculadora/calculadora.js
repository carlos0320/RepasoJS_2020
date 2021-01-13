function sumar(a, b) {
    return a + b;

}

function restar(a, b) {
    return a - b;

}

function producto(a, b) {
    return a * b;

}

function division(a, b) {
    return a / b;

}

function modulo(a, b) {
    return a % b;

}

function cuadrado(a) {
    return a * a;
}

function raiz(c) {
    return Math.sqrt(c);
}

function potencia(x, y) {
    return Math.pow(x, y);
}

function maximo(a, b) {
    if (a > b) {
        return `${a} es el numero mayor`;
    } else {
        return `${b} es el numero mayor`;
    }
}

function minimo(a, b) {
    if (a < b) {
        return `${a} es el numero menor`;
    } else {
        return `${b} es el numero menor`;
    }
}

function verificarRequerimientos(a, b) {
    if (!(Number.isNaN(a)) && !(Number.isNaN(b))) {
        if (((a >= 0) && (a <= 100)) && ((b >= 0) && (b <= 100))) {
            return true;

        } else {
            return false;
        }
    } else {
        return false;
    }

}
alert("Bienvenido a la calculadora");
let opcion = 0;
do {

    let numero1, numero2 = 0;
    let resultado = 0;
    let validacion = false;
    opcion = Number(prompt("Por favor ingrese el numero de la operacion que desea realizar :" + "\n0 para Salir" + "\n1 para Sumar" + "\n2 para Restar" + "\n3 para Producto" + "\n4 para Division" + "\n5 para Modulo" + "\n6 para Cuadrado" + "\n7 para Raiz" + "\n8 para Potencia" + "\n9 para Maximo" + "\n10 para Minimo"));
    if (Number.isInteger(opcion)) {
        switch (opcion) {
            case 0:
                break;
            case 1:
                numero1 = parseFloat(prompt("Ingrese el primer valor a sumar"));
                numero2 = parseFloat(prompt("Ingrese el segundo valor a sumar"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = sumar(numero1, numero2);
                    console.log(`El resultado de la suma entre ${numero1} y ${numero2} es ${resultado}`);
                    break;
                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }



            case 2:
                numero1 = parseFloat(prompt("Ingrese el primer valor a restar"));
                numero2 = parseFloat(prompt("Ingrese el segundo valor a restar"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = restar(numero1, numero2);
                    console.log(`El resultado de la resta entre ${numero1} y ${numero2} es ${resultado}`);
                    break;
                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }



            case 3:
                numero1 = parseFloat(prompt("Ingrese el primer valor a multiplicar"));
                numero2 = parseFloat(prompt("Ingrese el segundo valor a multiplicar"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = producto(numero1, numero2);
                    console.log(`El resultado de la multiplicacion entre ${numero1} y ${numero2} es ${resultado}`);
                    break;

                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }


            case 4:
                numero1 = parseFloat(prompt("Ingrese el dividendo"));
                numero2 = parseFloat(prompt("Ingrese el divisor"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = division(numero1, numero2);
                    console.log(`El resultado de la division entre ${numero1} y ${numero2} es ${resultado}`);
                    break;

                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }



            case 5:
                numero1 = parseFloat(prompt("Ingrese el dividendo"));
                numero2 = parseFloat(prompt("Ingrese el divisor"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = modulo(numero1, numero2);
                    console.log(`El resultado del modulo entre los valores ${numero1} y ${numero2}  es ${resultado}`);
                    break;

                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }




            case 6:
                numero1 = parseFloat(prompt("Ingrese el numero para elevar al cuadrado"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = cuadrado(numero1, numero2);
                    console.log(`El resultado de elevar al cuadrado el numero ${numero1}  es ${resultado}`);
                    break;


                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }




            case 7:
                numero1 = parseFloat(prompt("Ingrese el numero para sacarle la raiz cuadrada"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = raiz(numero1);
                    console.log(`La raiz cuadrada del numero ${numero1}  es ${resultado}`);
                    break;


                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }

            case 8:
                numero1 = parseFloat(prompt("Ingrese la base"));
                numero2 = parseFloat(prompt("Ingrese el exponente"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = potencia(numero1, numero2);
                    console.log(`El resultado de elevar el numero ${numero1} a la ${numero2}   es ${resultado}`);

                    break;


                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }

            case 9:
                numero1 = parseFloat(prompt("Ingrese el primer valor"));
                numero2 = parseFloat(prompt("Ingrese el segundo valor"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = maximo(numero1, numero2);
                    console.log(`${resultado}`);

                    break;


                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }

            case 10:
                numero1 = parseFloat(prompt("Ingrese el primer valor"));
                numero2 = parseFloat(prompt("Ingrese el segundo valor"));
                validacion = verificarRequerimientos(numero1, numero2);
                if (validacion) {
                    resultado = minimo(numero1, numero2);
                    console.log(`${resultado}`);

                    break;

                } else {
                    console.log("El/Los dos numeros deben ser enteros o reales, ademas deben estar entre 0 y 100");
                    break;
                }
            default:
                console.log("Las opciones disponibles son: 0, 1, 2, 3, 4, 5, 6,7,8,9,10");
                break;






        }

    } else {
        console.log("La opcion a ingresar debe ser un numero, por favor intente de nuevo");
    }

} while (opcion != 0)