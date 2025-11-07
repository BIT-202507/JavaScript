const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];

// Sintaxis
// for( let <valor-indice> in <nombre-lista> ) {
//     Sentencia (Bloque de codigo)
// }

for( let index in students ) {
    console.log( index, students[ index ] );
}