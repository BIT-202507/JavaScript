export function sumarNotas( notas ) {
    let total = 0;      // Acumular el total de las notas sumadas

    for( let i = 0; i < notas.length; i++ ) {
        total += notas[ i ];        // total = total + notas[ i ]
    }

    return total;
}

export function calcularPromedio ( total, cantidadNotas ) {
    return (total / cantidadNotas).toFixed( 1 );
}