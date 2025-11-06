let nombre = 'Juan';
let edad = 17;
let isFemale = true;
// &: Ampersamp
// |: Pipe
console.log( nombre.length > 4 && edad >= 18 );
//              false          AND   false
console.log( nombre.length > 4 || edad >= 18 );
//              false          OR    false

// NOR !isFemale
// !!!!!isFemale