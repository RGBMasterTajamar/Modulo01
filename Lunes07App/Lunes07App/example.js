// Definicion y uso de funciones
//const myFunc = function () {
//    console.log("This statement is inside of the function");

//}

//console.log("This statement is outside of the function");

/***************************************************************************************** */

// Funciones de parametros
//function myFunc(name, weather) {
//    console.log(`Hello ${name}`);
//    console.log(`It si ${weather} today`);

//}

//myFunc("Javier", "Sunny");

/***************************************************************************************** */

// Parametros REST
// usados para capturar argumentos adicionales
// cuando una funcion se invoca con argumentos
//function myFunc(name, weather, ...extraArgs) {
//    console.log(`Hello ${name}`);
//    console.log(`It si ${weather} today`);

//    // Recorrer el array de argumentos
//    for (let i = 0; i < extraArgs.length; i++) {
//        console.log(`Extra Args: ${extraArgs[i]}`);
//    }
//}

//myFunc("Javier", "Sunny", "Uno", "Dos", "Tres");
/***************************************************************************************** */

// Funciones que devuelven resultados
//function myFunc(name) {
//    return ("Hello " + name);
//}

//console.log(myFunc("Javier"));

/***************************************************************************************** */

// Funciones que devuelven resultados llamando a funciones como parametros
//function myFunc(nameFunction) {
//    return ("Hello " + nameFunction() + ".");
//}

//function printName(nameFunction, printFunction) {
//    printFunction(myFunc(nameFunction));
//}

//printName(function () {return "Javier" }, console.log);

/***************************************************************************************** */

// Funciones Lambda o Funciones flecha

//const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");
//const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));

//printName(function () { return "Javier" }, console.log);

/***************************************************************************************** */

// Variables y tipos

//function messageFunction(name, weather) {
//    let message = "hello Javier";
//    if (weather === "Sunny") {
//        let message = "It is a nice day";
//        console.log(message);
//    } else {
//        message = "It is " + weather + " today";
//        console.log(message);
//    }

//    console.log(message);
//}

//messageFunction("Javier", "raining");

/***************************************************************************************** */

// Tipos de valores

// Booleans
//let firstBool = true;
//let secondBool = false;

// Strings
/*let firstString = "This is a string";*/

// Template strings
//let weather = "Sunny";
//let message = "It is " + weather + " today";
//let message2 = `Its ${weather} today`;

// numbers
//let daysInWeek = 7;
//let pi = 3.14;
//let hexValue = 0xFFFF;

// Conversiones
// Numbers to string
/*let myData1 = (5).toString() + String(5);*/ // Resultado de esto seria "55"

//String to numbers
//let firstVal = "5";
//let secondVal = "5";
//let result = Number(firstVal) + Number(secondVal); // => 10

// Metodos posibles: Number(str), parseInt(str), parseFloat(str)

// Operador de igualdad (==) vs operador de identidad (===)
//let firstVal = 5;
//let secondVal = "5";
//if (firstVal == secondVal) {
//    console.log("son lo mismo");
//} else {
//    console.log("No son lo mismo")
//}

/***************************************************************************************** */

// Arrays
//let myArray = new Array();
//myArray[0] = 100;
//myArray[1] = "Javier";
//myArray[2] = true;

/*let myArray2 = [100, "Javier", true];*/

//console.log(`Index 0: ${myArray2[0]}`);

//for (let i = 0; i < myArray2.length; i++) {
//    console.log(`Index ${i} : ${myArray2[i]}`);
//}

//myArray2.forEach((value, index) => console.log(`Index: ${index}: ${value}`));

// Metodos
// concat(otroArray): devuelve un nuevo array que concatena el arrayç

// desde el que llamamos pasando el nuevo como argumento.

// join(separator): une todos los elementos del array separandolos con un separador

// pop(): elimina el ultimo elemento del array

// shift(): elimina al principio del array

// push(): añade al final del array un nuevo elemento.

// unshift(): añade al principio del array

// reverse(): orden inverso.

// slice(start, end): devuelve una seccion del array

// sort(): ordena el array

// splice(index, count): elimina tantos elementos desde index tantos como diga count

// every(test): si todos cumplen la condicion del test devuelve true.

// some(test): devuelve true si al menos un elemento cumple la condicion

// filter(test): devuelve un nuevo array con la condicion

// find(test): devuelve el primer elemento que cumpla la condicion

// findIndex(test): devuelve el index del primer elemento que cumpla la condicion

// foreach(callback):

// includes(value): devuelve true si el array contiene el valor

// map(callback): devuelve un nuevo array con el resultado de llamar a la funcion callback para cada
// elemento del array.

// reduce(callback): devuelve el valor acumulado generado al llamar a la funcion callback para cada uno de
// los elementos del array.
/* const suma = [10, 20, 30].reduce(function (a, b) { return a + b }); */

//let products = [
//    {
//        name: "Hat", price: 24.5, stock: 10
//    },
//    {
//        name: "Kayak", price: 289.99, stock: 1
//    },
//    {
//        name: "Soccer Ball", price: 24.5, stock:0
//    },
//    {
//        name: "Running shoes", price: 116.50, stock: 20
//    }
//];

//let totalValue = products
//    .filter(item => item.stock > 0)
//    .reduce((prev, item) => prev + (item.price * item.stock), 0);


// Defincion de objeto
//var elObjeto = new Object();
//var laCadena = new String();

// Propiedades
//elObjeto.Id = "10";
//elObjeto.nombre = "Objeto de prueba";

// Metodo
//elObjeto.mostrarId = function () {
//    console.log(`El ID del objeto es ${this.Id}`);
//}

//elObjeto.mostrarNombre = function () {
//    console.log(`El nombre es ${this.nombre}`);
//}


// objetos complejos: contienen otros objetos
//var Application = new Object();

//Application.Modulos = new Array();
//Application.Modulos[0] = new Object();
//Application.Modulos[0].titulo = "Lector RSS";

//var inicial = new Object();
//inicial.estado = 1;
//inicial.publico = 0;
//inicial.nombre = "Modulo Rss";
//inicial.datos = new Object();

//Application.Modulos[0].objetoInicial = inicial;

//var modulo = new Object();

//modulo.titulo = "Lector RSS";
//modulo.objetoInicial.estado = 1;
//modulo.objetoInicial.publico = 0;
//modulo.objetoInicial.nombre = "Modulo RSS";
//modulo.objetoInicial.datos = new Object();


// Notacion JSON
//var modulo = {
//    titulo: "Lector RSS",
//    objetoInicial: {
//        estado: 1,
//        publico: 0,
//        nombre: "Modulo RSS",
//        datos: {}
//    }
//}


// Objetos
//let myData = new Object();
//myData.name = "Javier";
//myData.weather = "sunny";

//console.log(`Hello ${myData.name}`);
//console.log(`Today is ${myData.weather}`);

// Objeto literales
//let myData2 = {
//    name: "javier",
//    weather: "sunny"
//}

//console.log(`Hello ${myData2.name}`);
//console.log(`Today is ${myData2.weather}`);


// variables como propiedades de objetos
//let name = "Andres";
//let myData3 = {
//    name,
//    weather: "sunny"
//}

//console.log(`Hello ${myData3.name}`);
//console.log(`Hello ${myData3.weather}`);

// Funciones como metodos en objetos
//let myData4 = {
//    name: "Julian",
//    weather: "sunny",
//    printMessages: function () {
//        console.log(`Hello ${myData4.name}`);
//        console.log(`Is ${myData4.weather}`);
//    }
//}

//myData4.printMessages();


// localstorage y sessionstorage
// localStorage:
//if (window.localStorage) {
//    localStorage.setItem("nombre", "Pepe");

//    var nombre = localStorage.getItem("nombre");
//    localStorage.removeItem("nombre");
//} else {
//    throw new Error("Tu navegador no soporta LocalStorage");
//}

// sessionStorage:
//sessionStorage.setItem("nombre", "Nicolas");

//var nombre2 = sessionStorage.getItem("nombre");
//var count = sessionStorage.length;

//var key = sessionStorage.key(0);

//sessionStorage.removeItem(key);


// Clase en JS
//class MyData {
//    constructor() {
//        this.name = "Nicolas";
//        this.weather = "sunny";
//    }

//    printMessages = () => {
//        console.log(`Hello ${this.name}`);
//        console.log(`Today is ${this.weather}`);
//    }

//}

//let myData = new MyData();
//myData.printMessages();

// Copiar propiedades desde un objeto a otro
//let secondObject = { ...myData, weather: "cloudy" };
//console.log(`myData: ${myData.weather}`);
//console.log(`secondObject: ${secondObject.weather}`);
//Object.assign(secondObject, myData);
//secondObject.printMessages();

// Capturar nombres de parametros desde objetos
//const myData = {
//    name: "Rosa",
//    location: {
//        city: "Madrid",
//        country: "Spain"
//    },
//    employment: {
//        title: "Manager",
//        dept: "Sales"
//    }
//}

//function printDetails(data) {
//    console.log(`Name: ${data.name}, City: ${data.location.city}, Role: ${data.employment.title} `);
//}

/*printDetails(myData);*/

//function printDetails({ name, location: { city }, employment: { title } }) {
//    console.log(`Name: ${name}, City: ${city}, Employment: ${title}`);
//}

//printDetails(myData);