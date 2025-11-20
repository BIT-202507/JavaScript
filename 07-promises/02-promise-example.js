// Definicion de una Promise
const traerDatos = new Promise( ( resolve, reject ) => {

    let persona;        // URL trae datos

    if( persona ) {
        resolve( persona );
    } 
    else {
        reject( 'No se obtuvieron datos' );
    }
} );

// Implementar la resolucion de la Promise Then/Catch
// traerDatos
//     .then( ( res ) => {
//         // console.log( `Los datos obtenidos son: ${ JSON.stringify( res ) }` );
//     } )
//     .catch( ( err ) => {
//         console.error( err );
//     } );

// Implementar la resolucion de la Promise Async/Await
async function init () {

    try {
        
        const res = await traerDatos;   /// ROMPIO --->  Excepciones
    
        console.log( res );
    
    } catch (error) {
        console.error( 'No se obtuvieron los datos ;( ' );
    }
}

init();