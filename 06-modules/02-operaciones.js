export default function operaciones () {
    function sumar( a, b ) {
        return a + b;
    }

    function restar( a, b ) {
        return a - b;
    }

    function multiplicar( a, b ) {
        return a * b;
    }

    function dividir( a, b ) {
        return a / b;
    }

    // Estamos retornando el codigo de cada una de las funciones aqui definidas, por que no estoy invocandolas, es decir: No estoy usando los parentesis
    return {
        sumar,      // sumar() ==> Esto es invocar la funcion
        restar,
        dividir,
        multiplicar
    }
}

