const students = ['Juan', 'Ana', 'Luis'];
//                  0   ,   1  ,   2

console.log( students[ 1 ] );   // Ana
console.log( students );

students.push('Maria', 'Pedro');    // Agrega al final de la lista
//               3   ,    4
console.log( students );

students.unshift('Sofia');    // Agrega al inicio de la lista
//                 0
console.log( students );

let deletedStudent = students.pop();    // Elimina el último elemento de la lista
console.log( deletedStudent, students );

deletedStudent = students.shift();    // Elimina el primer elemento de la lista
console.log( deletedStudent, students );

console.log( `La cantidad de estudiantes es: ${ students.length }` );