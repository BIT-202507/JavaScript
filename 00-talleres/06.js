// 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
//     Por ejemplo, si el usuario ingresó la frase `Hola Mundo` y el número 5, el programa debe imprimir `Hola Mundo` 5 veces:

//     ``` JavaScript
//     Hola Mundo
//     Hola Mundo
//     Hola Mundo
//     Hola Mundo
//     Hola Mundo
//     ```

const mensaje = prompt( 'Digite mensaje' );
const numero = Number( prompt( 'Digite numero de veces que se va a repetir el mensaje' ) );

for( i = numero; i > 0; i-- ) {
    console.log( mensaje );
}