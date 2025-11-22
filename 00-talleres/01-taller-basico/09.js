// 9. Escribe un programa que:
//     - Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
//     - Elimine el segundo elemento.
//     - Recorra e imprima el arreglo.

//     Ejemplo:

//     ``` JavaScript
//         Ingresa un número> 5
//         1
//         3
//         4
//         5
//     ```

//     NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

const list = prompt( 'Cuantos numeros desea ingresar' );
const numeros = [];

for( let i = 1; i <= list; i++ ) {
    numeros.push( i );
}

numeros.splice( 1, 1 );
console.log( numeros );


for( let i = 0; i < numeros.length; i++ ) {
    console.log( numeros[ i ] );
}