/* DECLARACION DE VARIABLES
var tasa_interes;
var fecha_actual, hora_actual;
const nombre = "Juan"

// ASIGNACION DE VARIABLES
tasa_interes = 0.07;
tasa_interes = tasa_interes / 12;*/

// DECLARACION DE FUNCIONES
/*
function make_background_red() {
    document.body.style.backgroundColor = "red";
}
function make_background_white() {
    document.body.style.backgroundColor = "white";
}   
function make_background_color(color) {
    document.body.style.backgroundColor = color;
}
*/

/*
function decir_hola() {
    return alert("Holaa");
}*/

// x+=y; => x = x+y;

/****************************************************************************************** */
// EJERCICIO 1.1 CREAR UN SCRIPT CON DOS SUMANDOS, MOSTRAR EL SUMANDO 2 Y MOSTRAR EL RESULTADO
// DE LOS DOS SUMANDOS

//let sumando1 = 7;
//let sumando2 = 5;
//let result = sumando1 + sumando2;

//alert(`Sumando 2: ${sumando2}`);
//alert(`Valor total: ${result}`);

/****************************************************************************************** */
// EJERCICIO 1.2 CREAR SCRIPT PARA QUE LOS DATOS DE LA FUNCION SEAN MANDADOS DESDE EL CLIENTE

//var fullName;

//function concat(name, lastName) {
//    fullName = name + " " + lastName;
//    return (fullName);
//}
//function showFullName(dato1, dato2) {
//    alert('El nombre completo es : ' + concat(dato1, dato2));
//}

/****************************************************************************************** */
// EJERCICIO 1.3 SOLICITAR UN NOMBRE CON UN PROMPT Y UN NUMERO DE ITERACIONES. IMPRIMIR EN PANTALLA
// EL NOMBRE Y EL NUMERO DE REPETICIONES

//let nameReq = prompt("Por favor, introduzca un nombre: ");
//let numRep = prompt("Por favor, introduzca un numero de repeticiones: ");

//alert(`El nombre es: ${name} y el numero de repeticiones es: ${numRep}`);

//document.write("El nombre es: " + nameReq + " y el numero de repeticiones es: " + numRep);

/******************************************************************************************** */

// EJERCICIO 1.4 IMPRIMIR LOS 100 PRIMEROS NUMEROS PARES

//let i = 1;

/*while (i <= 100) {
    if (i % 2 == 0) {
        document.write(i + "<br />");
    }
    i++;
}*/

/********************************************************************************************** */

// EJERCICIO 1.5 IMPRIMIR EL SUMATORIO DE LOS NUMEROS DE 0 A 20

/*let i = 1;
let resultValue = 0;

while (i <= 20) {
    resultValue += i
    i++;
}

document.write(resultValue);
// RESULTADO ESPERADO: 210
*/

/******************************************************************************************** */

// EJERCICIO 1.6 SOLICITAR 10 NUMEROS Y OBTENER LA MEDIA ARITMETICA
//var sum = 0;
//var count = 0;

//while (count < 10) {
//    ++count;
//    var num = eval(prompt('Introduzca numero: '));
//    sum += num;
//}

//var media = sum / 10;
//document.write('El valor de la suma es: ' + sum);
//document.write('<br>');
//document.write('La media de los 10 valores es: ' + media);

/********************************************************************************************* */

// EJERCICIO 1.7 SOLICITAR NUMERO 0, SI NO ES ESE NUMERO VOLVER A PEDIR DE NUEVO

//let num;

//while (num != 0 || num != "0") {
//    num = prompt("Introduzca el numero 0: ");
//    if (num != 0 || num != "0") {
//        alert('Ha introducido un numero incorrecto');
//    } else {
//        alert('Ha introducido el numero correcto');
//    }
//}

/*********************************************************************************************** */
// EJERCICIO 1.8 PEDIR NOMBRE Y EDAD E IMPRIMR EN PANTALLA LOS DIAS QUE HA VIVDO.

//var name = prompt('Introduzca su nombre: ');
//var age = prompt('Introduzca su edad: ');
//var daysLived = 365 * age;
//document.write("<P> Has vivido " + daysLived + " dias</P>");


/*********************************************************************************************** */
// EJERCICIO 1.9 PEDIR NUMERO E IMPRIMR EN PANTALLA EL FACTORIAL.

//var num = eval(prompt('Introduzca un numero: '));
//var numOrig = num;
//var factorial = 1;

//while (num != 0) {
//    factorial *= num;
//    num--;
//}

//document.write("<p>El factorial de " + numOrig + " es: " + factorial + "</p>");

/*********************************************************************************************** */
// EJERCICIO 1.10 ESCRIBIR UNA FUNCION QUE SE LE PASA COMO PARAMETRO UN NUMERO ENTERO
// DEVUELVE UN STRING DICIENDO SI ES PAR O IMPAR.

//function isEven(int) {
//    if (int % 2 == 0) {
//        return "es par";
//    } else {
//        return "es impar";
//    }
//}

//let num = eval(prompt("Introduzca un numero: "));
//document.write("<p>El numero " + num + " es " + isEven(num) + "</p>");

/*********************************************************************************************** */
// EJERCICIO 1.11 PEDIR UNA CONTRASEÑA Y TENER UN MAXMIMO DE 3 INTENTOS

//var i = 1;
//while (i <= 3) {
//	var userPwd = prompt('password');
//	if (userPwd === '1234') {
//		alert('Contraseña correcta');
//		break;
//	}
//	else {
//		if (i == 3) {
//			alert("Has superado los intentos maximos");
//		} else {
//			alert('Tienes ' + (3 - i) + " intentos mas");
//		}
		
//	}
//	i++;
//}

/*********************************************************************************************** */
// EJERCICIO 1.12 RECOGER NOMBRE Y EDAD DEL USUARIO E IMPRIMIR CON LA FUNCION VISUALIZAR
// CON LA FUNCION SUMA AÑADIR 100 AÑOS A LA EDAD E IMPRIMIRLO

function Visualizar(Name, Age) {

    document.write('<p>La edad de ' + Name + ' es: ' + Age + '</p>');

}
function Suma(Operador1, Operador2) {

    return Operador1 + Operador2;

}

let userName = prompt("Introduzca su nombre: ");
let userAge = eval(prompt("Introduzca su edad: "));

Visualizar(userName, userAge);
document.write("La suma en 100 años a la edad es: " + Suma(userAge, 100));
