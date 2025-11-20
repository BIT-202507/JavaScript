class Person {
    nombre;
    edad; 

    // TODO: Se ejecuta en el momento en el que el objeto es creado
    constructor( nombre, edad ) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


// Implementacion
const davidArana = new Person( 'David Arana', 24 );    // new Person() ==> Creacion del objeto a partir de la clase (Instancia)
const bryanDavid = new Person( 'Bryan David', 22 );
const sebastian = new Person( 'Sebastian', 21 );

// delete davidArana.edad;
// sebastian.profesion = '';

console.log(
    davidArana,     // objeto
    bryanDavid,     // objeto
    sebastian       // objeto
);