// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).

var a1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + a1[4] + " Elemento 11: " + a1[10]); 

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

var ej3B = a1.sort();
console.log(ej3B);

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

a1.unshift("Principio");

a1.push("Fin");

console.log(a1);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

a1.shift();

a1.pop();

console.log(a1);

// Invertir el orden del array (utilizar reverse).

a1.reverse();

console.log(a1);

// Unir todos los elementos del array en un único string donde cada mes este
// separado por un guión - (utilizar join).

var a2 = a1.join(" - ");

console.log(a2);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
// (utilizar slice).

var a3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Elemento 5: " + a1[4] + " Elemento 11: " + a1[10]); 

var a4 = a3.slice(4, 11);

console.log(a4);