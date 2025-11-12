// Desestructuracion de una lista
const nombres = [ 'Maria', 'Ana', 'Carlos', 'Manuela', 'Juliana' ];

const [,dato1,,dato2] = nombres;
console.log(dato1,dato2);

// Desestructuracion de un Objeto
const persona = {
    nombre: 'Manuela',
    edad: 32,
    genero: 'Femenino',
    profesiones: [ 'Diseniadora', 'Periodista' ],
    contacto: {
        movil: '344365546546',
        correo: 'manuela@correo.co'
    }
};

const { contacto: { correo }, profesiones: [,profesion] } = persona;
console.log( correo, profesion );
