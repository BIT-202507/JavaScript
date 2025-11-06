//Sintaxis
const day = 44;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        //  Siempre el else (si no) es el bloque que se ejecuta si nada se cumple
    default:
        console.log( 'Ese dia no existe' );
}
