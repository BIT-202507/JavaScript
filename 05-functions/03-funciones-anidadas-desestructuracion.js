// Funciones Anidadas


function operaciones( a, b ) {

    function sumar( n1, n2 ) {
        return n1 + n2;
    }

    function restar( n1, n2 ) {
        return n1 - n2;
    }

    function multiplicar( n1, n2 ) {
        return n1 * n2;
    }

    function dividir( n1, n2 ) {
        return n1 / n2;
    }

    return {
        suma: sumar( a, b ),
        resta: restar( a, b ),
        multiplicacion: multiplicar( a, b ),
        division: dividir( a, b )
    }

}


// const total = operaciones( 9, 3 );
// console.log(total.suma); 

// Desestructuracion (ECMAScript 2015)
const { resta, division } = operaciones( 9, 3 );
console.log( resta, division );
