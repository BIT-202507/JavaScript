
// Definicion de una funcion
// Funcion Declarativa
function calcularPromedio( nombreAlumno, listaNotas ) {
    let sumaNotas = 0;
    
    for( let nota of listaNotas ) {
        // console.log( nota );
        sumaNotas = sumaNotas + nota;
    }
    
    const promedio = sumaNotas / notas.length;
    
    console.log( nombreAlumno, promedio );
}

/** Implementacion: 
 * Cuando nosotros hacemos uso de las operaciones que hemos programado
*/

let nombre = 'Gabriel';
let notas = [ 3.4, 1.2, 3.7, 4.1 ];

notas.push( 3.3 );

calcularPromedio( nombre, notas );     // Aqui se esta cumpliendo el hoisting

nombre = 'Camilo';
notas = [ 4.1, 1.5, 4.3 ];

calcularPromedio( nombre, notas );