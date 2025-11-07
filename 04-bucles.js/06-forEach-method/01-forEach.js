const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];

// Sintaxis
// 1. <nombre-lista>.forEach( callback );

// Callback es invocar una funcion como parametro de otra
// 2. <nombre-lista>.forEach( function () {} );

students.forEach( function ( value ) {
    console.log( value );
} );