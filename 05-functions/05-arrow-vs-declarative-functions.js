function sumar( a, b ) {
    return a + b;       // El retorno esta explicitamente definido
}

const restar = ( a, b ) => a - b;       // Retorno implicito

const numero1 = 3;
const numero2 = 2;

console.log(
    sumar( numero1, numero2 ),
    restar( numero1, numero2 )
);