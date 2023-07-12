//Ejercicio Strings

// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)

var s1 = 'Esto tiene al menos 10 caracteres';

var res = s1.toUpperCase();

console.log('El resultado es:', res);


//  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
//  string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var s2 = 'laureanomandrile';
var s3 = s2.substring(0, 5);
console.log(s3);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).


var s4 = 'laureanomandrile';
var s5 = s4.substring(7, 10);
console.log(s5);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).


var s6 = 'laureanomandrile';
var s7 = s6.substring(0,1).toUpperCase();
var s8 = s6.substring(1,10).toLowerCase();

var s9 = s7 + s8;

console.log(ej2D4);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).


var s10 = 'laureano mandrile';

var s11 = s10.indexOf(' ');
console.log(s11);


// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).


var s12 = "envejezcas extrañezas";
var s13 = s12.indexOf(" ");
var s14 = s12.substring(0, 1).toUpperCase()
var s15 = s12.substring(1, ej2FPosit).toLowerCase();
var s16 = s12.substring(ej2FPosit + 1, ej2FPosit +2).toUpperCase();
var s17 = s12.substring(ej2FPosit + 2).toLowerCase()

var s18 = s14 + s15 + " " + s16 + s17;

console.log(s18);
