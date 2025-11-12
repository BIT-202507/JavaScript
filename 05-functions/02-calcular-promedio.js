// 1. Captura de datos

// Funcion Declarativa
function calcularPromedio( nombreAlumno, listaNotas ) {
    // 2. Sumar las notas
    let sumaNotas = 0;
    
    for( let nota of listaNotas ) {
        // console.log( nota );
        sumaNotas = sumaNotas + nota;
    }
    
    // 3. Calcular el promedio
    const promedio = sumaNotas / notas.length;
    
    // 4. Imprimir el resultado
    console.log( nombreAlumno, promedio );
}