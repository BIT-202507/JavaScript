// Spread   ... 

const alumnosAlejandro = [ 'Kevin', 'David', 'Bryan', 'Andres', 'Alejandro', 'Gabriel', 'David' ];
const alumnosJuan = [ 'Nilson', 'Camilo', 'Heiber', 'Ramiro', 'Sebastian', 'Ronald', 'Felipe' ];

// const fusion = [ ...alumnosAlejandro, ...alumnosJuan ];

// console.log( fusion );

function iterarLista ( primero, segundo, ...alumnos ) {
    console.log( primero, segundo );
}


iterarLista( alumnosAlejandro );