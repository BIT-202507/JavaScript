const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];
//                    0   ,    1     ,   2     ,    3       ,    4      ,     5    ,    6    ,   ....
//                                       k                     

// students = [];       // La constante no permite cambiar el tipo de dato, pero si los datos del tipo de dato definido

// Anverso
let k = 0;
while( k < students.length ) {
    console.log( k, students[ k ] );

    k += 1;
} 

// Reverso
let r = students.length - 1;
while( r >= 0 ) {
    console.log( r, students[ r ] );

    r--;
}

