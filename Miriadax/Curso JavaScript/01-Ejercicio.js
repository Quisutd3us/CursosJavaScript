// Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones, compruebe si es de corazones y además es el número 4.
//  En caso afirmativo, lo imprimimos en la consola. 
// Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?

var carta = "4c";

if (carta[0] == 4 && carta[1] == "c") {
    console.log("Mi carta es 4 de Corazones");
} else {
    console.log("Mi carta es diferente a 4 de Corazones");
}

// 2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola.

// Declaracion funcion Mostrar
var anosBisiestos = [];
var a = 0;

function mostrarBisiestos(anoBisiesto) {
    anosBisiestos[a] = anoBisiesto;
    a++;
}


// Calculando bisiestos siglo XXI

for (var i = 1; i <= 2100; i++) {
    var resultado = 0;
    resultado = i / 4;
    if (resultado % 1 == 0) {
        resultado = i / 100;
        if (resultado % 1 == 0) {
            resultado = i / 400;
            if (resultado % 1 == 0) {
                mostrarBisiestos(i);
            }
        } else {
            mostrarBisiestos(i);
        }
    }
}

//Mostrando Años por consola

console.log(anosBisiestos);


// 3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo.
// Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

// creando array  metiendo todas las cartas de una baraja
var baraja = [
    '0c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
    '0p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12p', '13p',
    '0d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
    '0t', '2t', '3t', '4t', '5t', '6t', '7t', '8t', '9t', '10t', '11t', '12t', '13t'
];

// recorriendo la baraja

for (david in baraja) {

    // condicion que me dice si la carta es impar y de palo rojo de corazones

    if (((baraja[david][0] % 3) == 0) && baraja[david][1] == 'c') {

        //caso donde imprimo de acuerdo a si es 0  entonces es el as del palo
         
        switch (baraja[david][0] == 0 && baraja[david][1] == 'c') {
            case true:
                console.log("0c ó As de Corazones");
                break;

            default:
                var banderaCor = 1;
                console.log(baraja[david]);
                break;
        }


    }
     //caso donde imprimo de acuerdo a si la carta es > a 10 entonces por defecto es 13 o K de corazones

    if (baraja[david][0] == 1 && banderaCor == 1) {
        console.log("13c ó K de corazones");
        banderaCor= 0;
    }

    // condicion que me dice si la carta es impar y de palo rojo de diamantes

    if (((baraja[david][0] % 3) == 0) && baraja[david][1] == 'd') {
        //caso donde imprimo de acuerdo a si es 0  entonces es el as del palo
        switch (baraja[david][0] == 0 && baraja[david][1] == 'd') {
            case true:
                console.log("0d ó As de Diamantes");
                break;

            default:
                var banderaDiamantes = 1;
                console.log(baraja[david]);
                break;
        }

    }
     //caso donde imprimo de acuerdo a si la carta es > a 10 entonces por defecto es 13 o K de diamantes
    if (baraja[david][0] == 1 && banderaDiamantes == 1) {
        console.log("13d ó K de diamantes");
        banderaDiamantes = 0;
    }

}