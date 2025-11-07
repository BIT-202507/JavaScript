const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];
//                    0   ,    1     ,   2     ,    3       ,    4      ,     5    ,    6    ,   ....
//                                       k                     

// students = [];       // La constante no permite cambiar el tipo de dato, pero si los datos del tipo de dato definido

// Anverso
let a = 0;
do {
    console.log( '\t', a, students[ a ] );

    a++;  // a += 1;
} while( a < students.length );

// Reverso
let p = students.length - 1;
do {
    console.log( p, students[ p ] );

    p--;
} while ( p > -1 );


// console.log( 'David esto es un \n salto de linea' );
