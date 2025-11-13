// Vanilla JavaScript (Motor de JavaScript que tenga el respectivo navegador)

// Los modulos en JavaScript son de dos tipos:
//    - CommonJS
//    - ESModules (ECMAScript 2015: Estandarizacion, sugiere dejar en deshuso algunas caracteristicas del lenguaje, aparecen nuevas funcionalidades y se declara un estandar en el lenguaje) 

// Usando CommonJS
// const {add} = require( './01-operaciones.js' );

// Usando ESModule
// import multiplicar, { dividir } from './01-operaciones.js';
import operaciones from './02-operaciones.js';

// Implementacion 
const numero1 = 1;
const numero2 = 2;

console.log(
    operaciones().dividir( numero1, numero2 ),
    operaciones().multiplicar( numero1, numero2 ),
    operaciones().sumar
);
