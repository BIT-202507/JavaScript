const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];
//                    0   ,    1     ,   2     ,    3       ,    4      ,     5    ,    6    ,   ....
//                                       k                     

// students = [];       // La constante no permite cambiar el tipo de dato, pero si los datos del tipo de dato definido

// Anverso
// for( let k = 0; k < students.length; k += 2 ) {
//     console.log( k, students[ k ] );
// }

// Reverso
for( let k = students.length - 1; k >= 0; k -= 1 ) {
    console.log( k, students[ k ] );
}