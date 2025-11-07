const students = [ 'Kevin', 'Camilo', 'Nilson', 'Sebastian', 'Alejandro', 'Heiber' ];

// students.forEach()


function saludar( nombre = 'Fulanito', saluda ) {
    let i = 0;
    while( i < 3 ) {
        console.log( nombre, saluda );

        i++;
    }
}

saludar( 'Camilo' );
saludar( 'Gabriel', 'Oe!' );
saludar();