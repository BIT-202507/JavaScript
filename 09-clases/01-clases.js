const davidArana = {};
const bryanDavid = {
    name: 'Bryan David',
    edad: 22,
    presentarse: function() {
        console.log( `Hola mucho gusto soy ${ this.name }` );
    }
};
const sebastian = {
    nombre: 'Sebastian'
}

davidArana.nombre = 'David Arana';
davidArana.edad = 24;
davidArana.presentarse = function() {
    console.log( `Hola mucho gusto soy ${ this.nombre }` );
}

console.log( davidArana, bryanDavid );
bryanDavid.presentarse();
davidArana.presentarse();

// La Clase es una estructura o molde a partir de la cual se hace una abstraccion del mundo real de un objeto. Cada objeto del mundo real tiene: caracteristicas (atributos o propiedades), acciones (metodos)

// ECMAScript 2015: Ancestros son: Funcion Constructora, Prototypes (Base)
class Person {};
class Animal {};

const juan = new Person();
console.log( juan );

const milo = new Animal();
console.log( milo );