const triqui = [
//               j    
//     0    1    2
    [ 'X', 'X', '0' ],         // 0  ==>  i
    [ '0', '0', 'X' ],         // 1
    [ 'X', '0', 'X' ]          // 2
];

// for: iterar triqui
for( let i = 0; i < triqui.length; i++ ) {
    // console.log( i, triqui[ i ] );
    for( let j = 0; j < triqui[ i ].length; j++ ) {
        console.log( triqui[ i ][ j ] );
    }
}