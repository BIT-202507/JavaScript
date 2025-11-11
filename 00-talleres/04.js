// 4. Escribe un programa que le pida al usuario ingresar un número.
//    - Si el número es múltiplo de 3 debe imprimir en la consola `bing`.
//    - Si el número es múltiplo de 5 debe imprimir en la consola `bong`.
//    - Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola `bingbong`.
//    - Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

const numero1 = parseInt( prompt( `Ingresa un numero` ) );
let mensaje = '';

if( numero1 % 3 == 0 )
    mensaje += 'bing';      // mensaje = mensaje + 'bing';
if( numero1 % 5 == 0 ) 
    mensaje += 'bong';

if( ! mensaje )
    console.log( numero1 );
else
    console.log( mensaje );