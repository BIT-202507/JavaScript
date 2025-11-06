/* Condicionales IF */
// Solo entiende de valores Booleanos
// Sintaxis

// if( condicion ) {
//     sentencias (bloque de codigo)
// }
// else {
//     sentencias (bloque de codigo)
// }

const nombre = 'Juan';

if( nombre.length > 6 ) {
    console.log( `Hola ${ nombre } tu nombre tiene ${ nombre.length } caracteres` );
}
else {
    console.log( `Wow! que nombre tan cortico solo tiene ${ nombre.length } caracteres` );
}
