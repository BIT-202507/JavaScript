// 2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase `Hola X, grandioso! Tienes X años`. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: `Hola Juan, grandioso! Tienes 20 años`

const nombre = prompt( 'Digita tu nombre: ' );
const anioNacimiento = prompt( nombre + ' ¿cual es tu año de nacimiento?' );
// const anioActual = 2020;
const anioActual = new Date().getFullYear();    // Anio "actual real", dependera de la fecha local de PC

// TODO: Agregar la validacion de los valores ingresados

console.log( `Hola ${ nombre }, grandioso! Tienes ${ anioActual - anioNacimiento  } años` );
