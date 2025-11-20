const rickyAndMorty = fetch( 'https://rickandmortyapi.com/api/character' );


rickyAndMorty
    .then( function( res ) {
        // console.log( res );     // Si la promesa se resuelve positivamente
        return res.json();          // Extraer el JSON
    } )
    .then( function ( data ) {
        //console.log( data );    // Los datos de los personajes en formaato JSON
        // console.log( '> ', data.results );

        // Iterar todos los elementos de la lista
        for( let i = 0; i < data.results.length; i++ ) {
            console.log( data.results[ i ][ 'name' ] );
        }

    } )
    .catch( function( err ) {
        console.error( err );   // Si la promesa NO se resuelve
    } );