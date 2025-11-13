import estudiantes from './datos.js';
import { sumarNotas, calcularPromedio } from './notas.js';

function init() {
    // Bucle itera los objetos de la lista, es decir cada estudiante
    for( let i = 0; i < estudiantes.length; i++ ) {
        // notas: estudiantes[i].notas
        const total = sumarNotas( estudiantes[i].notas);
        const promedio = calcularPromedio(total, estudiantes[i].notas.length);
        console.log( `${ estudiantes[i].nombre } su promedio final es: ${ promedio }` );
    }
}

init();
