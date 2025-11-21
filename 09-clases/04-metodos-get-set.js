const animal = {
    nombre: 'Milo'
}

let nombre = '';

function suma ( a, b ) {
    return a + b;
}

// Public
// Private
// Protected        -- NO APLICA EN JS --
class Person {
    #nombre;        // Atributo sea privado
  #edad;
    #hobbies;

    // TODO: Se ejecuta en el momento en el que el objeto es creado
    // Metodo constructor
    constructor( nombre, edad ) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#hobbies = [];
    }

    // Metodos Getters
    obtenerNombre () {
        return this.#nombre;
    }
    obtenerEdad() {
        return this.#edad;
    }
    obtenerHobbies() {
        return this.#hobbies;
    }

    // Metodos Setters
    establecerNombre( nuevoNombre ) {
        this.#nombre = nuevoNombre;
    }
    establecerEdad( nuevaEdad ) {
        this.#edad = nuevaEdad;
    }
    establecerHobbie( nuevoHobbie ) {
        if( Array.isArray( nuevoHobbie ) ) {
            this.#hobbies.push( ...nuevoHobbie );   // Spread: 
        }
        else {
            this.#hobbies.push( nuevoHobbie );
        }   
    }
}

// implementacion
const persona1 = new Person( 'Manuela', 32 );
// console.log( persona1 );

// Accesibilidad 
//==>>> console.log( persona1.#nombre );   // Manuela -> Clase
console.log( persona1.obtenerNombre() );    // Manuela
// console.log( animal['nombre'] );       // Milo -> Explicito
console.log( persona1.obtenerHobbies() );   // []

persona1.establecerHobbie( 'Estudiar los sabados' );
persona1.establecerHobbie( 'Ir a misa los domingos' );
persona1.establecerHobbie( [ 'Cantar en el baño', 'Lavar la loza' ] );

console.log( persona1.obtenerHobbies() );   // []
