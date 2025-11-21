const animal = {
    nombre: 'Milo'
}

// Public
// Private
// Protected        -- NO APLICA EN JS --
class Person {
    nombre;        // Atributo sea privado
  #edad;
    #hobbies;

    // TODO: Se ejecuta en el momento en el que el objeto es creado
    constructor( nombre, edad ) {
        this.nombre = nombre;
        this.#edad = edad;
        this.#hobbies = [];
    }
}

// implementacion
const persona1 = new Person( 'Manuela', 32 );
// console.log( persona1 );

// Accesibilidad 
console.log( persona1.nombre );   // Manuela -> Clase
// console.log( animal['nombre'] );       // Milo -> Explicito

persona1.nombre = 'Ana Maria';      // Publico lo puedo cambiar
console.log( persona1.nombre );