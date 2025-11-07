// for: Obliga a que la condicion se cumpla para iterar el bucle
for( let i = 1; i < 10; i = i + 1 ) {
    console.log( `for: ${ i }` );
}

// while: Obliga a que la condicion se cumpla para iterar el bucle
let i = 1;
while( i < 10 ) {
    //i = i + 1;          // OJO: Inicia 1 mas y finaliza 1 despues 
    console.log( 'while: ', i );
    
    i = i + 1;
}

// do-while: Garantiza que el bucle se ejecuta al menos una vez
let j = 1;
do {
    //j++;          // OJO: Inicia 1 mas y finaliza 1 despues
    console.log( 'do-while ' + j );

    j++
} while ( j < 10 );
