function sumar( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

// Esta exportacion no esta agrupada, es decir, es independiente
export default function multiplicar( a, b ) {
    return a * b;
}

// Esta exportacion esta agrupada en un objeto {}, equivale a export { dividir }
export function dividir( a, b ) {
    return a / b;
}

// CommonJS
// module.exports = {
//     sumar
// };

// ESModule 
// Agrupacion de exportaciones dentro de un objeto
export {
    sumar,
    restar,
    // dividir
}