 let suma = 0; 

// Tipos de Funciones
// 1. Funciones Declarativas: Se elevan al contexto global (hoistin)
function sumar( a, b ) {
    let suma = 0;       // Variable que se encuentra definida en el "scope" del funcion sumar

    return a + b;
}
sumar( 2, 3 );      // Invoco

// 2. Funciones por expresion: No hoistin
const sumarNumeros = function ( a, b ) {
    return a + b;
}
sumarNumeros( 2, 3 );       // Invoco

// 3. Funcion anonima: Definirse dentro de algun contexto
// function ( a, b ) {
//     return a + b;
// }

// 4. Funcion constructora: No hoistin
const persona = {};
const mascota = {
    nombre: 'Milo',
    edad: 4
}
console.log( mascota.nombre );      // Invoco

const cliente = new function() {
    // atributo una propiedad
    this.nombre = 'Camilo';
    this.edad = 30;
};

console.log( cliente.nombre );      // Invoco

// 5. Arrow Functions: Funciones Flecha (Funciones Lamda): No hoistin
const restar = ( a, b ) => {
    return a - b;
}
restar( 9, 3 );     // Invoco

// 6. IIFE: Funciones auto invocables
(function ( tipo ) {
    console.log( `Soy una funcion ${ tipo } de tipo IIFE` );
})( 'declarativaaaaaa! ');

(( tipo ) => {
    console.log( `Soy una funcion ${ tipo } de tipo IIFE` );
})( 'Arrow Function! ');

// 7. Closures:
// Es una funcion que retorna como valor otra funcion
const incrementar = (function() {
    let numero = 0;

    return function() {
        numero++;

        return numero;
    }
})();


let valor = incrementar();
valor = incrementar();
valor = incrementar();
valor = incrementar();
console.log( valor );


// 8. Callbacks
// Una funcion que recibe como parametro otra funcion

// Implementacion de un callback
[ 'Juan', 'Ana', 'Manuela' ].forEach( function( nombre ) { 
    console.log( nombre );
} );

function saludar( nombre ) {
    console.log( `Hola ${ nombre }, bienvenido! :) ` );
}

function despedir( nombre ) {
    console.log( `Adios ${ nombre } y que te vaya bien :P ` );
} 

function accion( cb, nombre = 'funalito' ) {
    cb( nombre );
}

// Callback se encargara de invocar otras funciones
accion( saludar );
accion( despedir, 'Andres' );