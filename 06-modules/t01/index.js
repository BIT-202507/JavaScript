const estudiantes = [
    { nombre: 'Gabriel', materia: 'Logica', notas: [ 3.4, 1.2, 3.7, 4.1, 3.3 ] },       // 0 --> i
    { nombre: 'Nilson', materia: 'Logica', notas: [ 4, 2, 2.7, 5 ] },                   // 1
    { nombre: 'Kevin', materia: 'Logica', notas: [ 3, 3.1, 3.1, 1, 5, 5 ] },            // 2
    { nombre: 'Ramiro', materia: 'Logica', notas: [ 2.7 ] },                            // 3
    { nombre: 'Andres', materia: 'Logica', notas: [ 4.3, 2.5, 3.2 ] }                   // 4
];

function sumarNotas( notas ) {
    let total = 0;      // Acumular el total de las notas sumadas

    for( let i = 0; i < notas.length; i++ ) {
        total += notas[ i ];        // total = total + notas[ i ]
    }

    return total;
}

function calcularPromedio ( total, cantidadNotas ) {
    return (total / cantidadNotas).toFixed( 1 );
}

// for ( const pepito of estudiantes ) {
//     console.log(pepito.notas[ i ]);
// }

// Bucle itera los objetos de la lista, es decir cada estudiante
for( let i = 0; i < estudiantes.length; i++ ) {
    // notas: estudiantes[i].notas
    const total = sumarNotas( estudiantes[i].notas);
    const promedio = calcularPromedio(total, estudiantes[i].notas.length);
    console.log( `${ estudiantes[i].nombre } su promedio final es: ${ promedio }` );
}