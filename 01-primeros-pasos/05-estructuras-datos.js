/** Tipos primitivos */
let nombre = 'Juan';
let edad = 25;
let esDesarrollador = true;
let salario = null;
let direccion;
let simbolo = Symbol( 'mi simbolo' );

/** Tipos complejos */
let hobbies = [ 'Leer', 'Correr', 'Programar' ];
let contacto = {
    email: 'juan@example.com',
    telefono: '123456789',
    direccion: 'Calle Falsa 123'
};
// Función la obviamos en este contexto

// Vanilla Javascript usamos el operador punto para acceder a los datos de un objeto
console.log(contacto.direccion);    // Acceder a una propiedad del objeto usando el operador punto
console.log(contacto['email']);     // Acceder a una propiedad del objeto usando notación de corchetes



// Usar las listas para agrupar datos que tienen las mismas características
const estudiantes = [
    { nombre: 'Ana', edad: 22 },        // 0
    { nombre: 'Luis', edad: 24 },       // 1
    { nombre: 'Maria', edad: 23 }       // 2
];
// Usar los objetos agrupar datos relacionados
const juan = {
    nombre: 'Juan',
    edad: 25,
    esDesarrollador: true,
    salario: null,
    direccion: {
        ciudad: 'Ciudad Ficticia',
        pais: 'Pais Imaginario'
    },
    hobbies: [ 'Leer', 'Correr', 'Programar' ],
    contacto: {
        email: 'juan@example.com',
        telefono: '123456789',
        direccion: 'Calle Falsa 123'
    }
};