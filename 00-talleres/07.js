// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

//     ``` JavaScript
//     5
//     6
//     7
//     8
//     9
//     10
//     ```

//     NOTA:
//        - Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
//        - Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

let numero1 = Number( prompt( 'Digite numero donde va a iniciar el rango' )  );
let numero2 = Number( prompt( 'Digite numero donde va a finalizar el rango' ) );


if( numero1 > numero2 ) {
    // 15 / 3 
    for( let i = numero1; i >= numero2; i-- ) {
        console.log( i );
    }
}
else {
    for( let i = numero1; i <= numero2; i++ ) {
        console.log( i );
    }
}

