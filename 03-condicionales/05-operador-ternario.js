// El operador ternario es la abreviatura del if-else, pero tambien se pueden expresar condicionales del tipo if-else-if

// Sintaxis:
// ( condicion ) ? <si-se-cumple> : <si-no-se-cumple> ;

const nombre = 'Juanito';

// ( nombre.length > 6 ) 
//     ?   console.log( `Hola ${ nombre } tu nombre tiene ${ nombre.length } caracteres` )
//     :   console.log( `Wow! que nombre tan cortico solo tiene ${ nombre.length } caracteres` );

// Este operador ternario retorna valores ("Excusivo de JavaScript")
const mensaje = ( nombre.length > 6 ) 
    ?   `Hola ${ nombre } tu nombre tiene ${ nombre.length } caracteres`
    :   `Wow! que nombre tan cortico solo tiene ${ nombre.length } caracteres`;

console.log(mensaje);