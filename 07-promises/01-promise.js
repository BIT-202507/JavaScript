// Defnicion de una Promise
const obtenerDatos = new Promise( function( resolve, reject ) {
    // reject( 'No profe no le cumpli' );       // No cumpli
    resolve( 'Si la cumpli exitosamente' );
} );

// Implementacion: Obtener la respuesta de la promesa
obtenerDatos
    .then( function( res ) {
        console.log( 'OK: ', res );         // Si se cumple la promesa
    } )
    .catch( function( err ) {
        console.log( 'ERROR: ', err );         // NO se cumple la promesa
    } );
