// 1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

let numero1 = prompt( 'Ingresar primer numero' );
let numero2 = prompt( 'Ingresar segundo numero' );

// Verifica si el valor ingresado es un numero
if( !isNaN( numero1 ) && !isNaN( numero2 ) ) {
    numero1 = Number( numero1 );
    numero2 = parseFloat( numero2 );
    console.log( numero1 + numero2 );
}
else {
    console.log( 'ERROR: Digite un valor valido' );
}

