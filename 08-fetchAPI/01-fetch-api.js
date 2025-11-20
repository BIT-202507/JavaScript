const products = fetch( 'https://fakestoreapi.com/prodcts' );      // Request: Peticion

// console.log(products);

// Resolver la promesa usando then/catch
// res: Response
products
    .then( ( res ) => {
        // console.log( res );     // Si se resuelve exitosamente la promesa

        return res.json();      // Extrae el JSON de la Respuesta
    } )
    .then( ( data ) => { 
        console.log( data );
    } ) 
    .catch( ( err ) => {
        // console.error( err );   // Si NO se resuelve la promesa
        console.error('Hubo un error al obtener los productos :( Then/Catch' )
    } );

// Resolver la promesa usando async/await

// async function obtenerDatos() {
//     try {
//         const res = await products;
//         const data = await res.json();
//         console.log( data );
        
//     } 
//     catch ( error ) {
//         // console.error( error );
//         console.error( 'Hubo un error al obtener los productos :( Async/Await' )
//     }
// }

// obtenerDatos();
