// 4. Invertir un array:
// ○ Función invertirArray(array) que retorne un nuevo array invertido.
// ○ Ejemplo: invertirArray(["a", "b", "c"]) → ["c", "b", "a"].

// 1. Datos de Entrada
// 1, 2, 3, 4
//          array.length - 1

// 2. Proceso Invierte los numeros de la lista

// 3. Datos de salida
// 4

function invertirArray( array ) {
    let arrayInvertido = [];
    // console.log(array);

    for( let i = array.length - 1; i >= 0; i-- ) {
        // console.log( array[ i ] );
        // arrayInvertido.push( array[ i ] );
        arrayInvertido = [ ...arrayInvertido, array[ i ] ];
    } 

    return arrayInvertido;          //  [ 4, 3, 2, 1 ]
}

// Implementacion
const listaNumeros = [1, 2, 3, 4];

let resultado = invertirArray(listaNumeros);
console.log( resultado );

const listaLetras = ["a", "b", "c"];
resultado = invertirArray( listaLetras );
console.log( resultado );