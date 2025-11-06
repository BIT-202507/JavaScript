/* Condicionales IF */
// Solo entiende de valores Booleanos
// Sintaxis

// if( condicion ) {
//     sentencias (bloque de codigo)
// }
// else if( condicion ) {
//     sentencias (bloque de codigo)
// }
// else if( condicion ) {
//     sentencias (bloque de codigo)
// }
// else if( condicion ) {
//     sentencias (bloque de codigo)
// }
// // Siempre el else (si no) es el bloque que se ejecuta si nada se cumple
// else {
//     sentencias (bloque de codigo)
// }

const day = 9;

if( day == 3 ) {
    console.log( 'Wednesday' );
}
else if( day == 4 ) {
    console.log( 'Thursday' );
}
else if( day == 1 ) {
    console.log( 'Monday' );
}
else if( day == 2 ) {
    console.log( 'Tuesday' );
}
else if( day == 5 ) {
    console.log( 'Friday' );
}
else if( day == 6 ) {
    console.log( 'Saturday' );
}
else if( day == 7 ) {
    console.log( 'Sunday' );
}
else {
    console.log( 'Ese dia no existe' );
}