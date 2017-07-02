// 1. Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas, 
// cada una representada por un diccionario con palo y valor. 
// Al puntuar, las cartas suman su valor excepto si es un as que suma 20. 
// Prueba a invocarla con varias manos de cartas con y sin ases.
var contadorAses = 0;
var contadorRojas = 0;
var puntajeJugador1 = 0;
var puntajeJugador2 = 0;


// Es llamada desde puntuacionCartas y me especifica ciertos valores para las cartas rojas y ases

function valorCartas(carta) {
    console.log(carta);
    var valorTotal = 0;
    if (carta.valor === 1 && carta.color !== 'rojo') {
        valorTotal = 20;
        contadorAses++;

    } else if (carta.color == "rojo" && carta.valor !== 1) {
        var valorColor = 0;
        contadorRojas++;
        valorColor = carta.valor;
        valorTotal = valorColor * 2;
    } else if (carta.valor === 1 && carta.color === 'rojo') {
        var valorColor = 0;
        contadorAses++;
        contadorRojas++;
        valorTotal = 20;
        valorColor = carta.valor;
        valorTotal += valorColor * 2;
    } else {
        valorTotal += carta.valor;
    }

    return valorTotal;

}
// Totaliza la puntuacion total de la mano y la puntuacion total por jugador
function puntuacionCartas(manoPuntuacion, jugadorNumero) {
    var puntuacion = 0;
    for (topo in manoPuntuacion) {
        puntuacion += valorCartas(manoPuntuacion[topo]);
    }

    // dependiendo el jugador totaliza su puntaje y lo manda a imprimir 
    switch (jugadorNumero) {
        case 1:
            puntajeJugador1 = puntuacion;
            imprimirJugador1(puntuacion);
            break;

        case 2:
            puntajeJugador2 = puntuacion;
            imprimirJugador2(puntuacion);
            break;
    }

}

// genera y carga la mano del jugador1

function jugador1() {
    var carta1 = {
        palo: "p",
        valor: 11,
        color: "negro"
    };
    var carta2 = {
        palo: "p",
        valor: 12,
        color: "negro"
    };
    var carta3 = {
        palo: "p",
        valor: 13,
        color: "negro"
    };
    var carta4 = {
        palo: "t",
        valor: 10,
        color: "negro"
    };
    var carta5 = {
        palo: "t",
        valor: 11,
        color: "negro"
    };
    var manoJugador1 = [carta1, carta2, carta3, carta4, carta5];
    var jugadorNum = 1;
    puntuacionCartas(manoJugador1, jugadorNum)

}

// genera y carga la mano del jugador1

function jugador2() {
    contadorAses = 0;
    contadorRojas = 0;
    var carta1 = {
        palo: "c",
        valor: 5,
        color: "rojo"
    };
    var carta2 = {
        palo: "p",
        valor: 2,
        color: "negro"
    };
    var carta3 = {
        palo: "t",
        valor: 13,
        color: "negro"
    };
    var carta4 = {
        palo: "t",
        valor: 1,
        color: "negro"
    };
    var carta5 = {
        palo: "d",
        valor: 1,
        color: "rojo"
    };
    var manoJugador2 = [carta1, carta2, carta3, carta4, carta5];
    var jugadorNum = 2;
    puntuacionCartas(manoJugador2, jugadorNum)

}


function cartasPoker() {
// empieza con el jugador1
    jugador1();
}


// funciones de impresion jugador1

function imprimirJugador1(puntuacionImprimir) {

    console.log("\nResultados JUGADOR 1\n\n")
    console.log("Puntaje Total : " + puntuacionImprimir + " con " + contadorAses + " ases y " + contadorRojas + " cartas Rojas\n\n\n");

    //terminado la ejecucion del jugador1 llama a jugar al jugador2
    jugador2();

}

// funciones de impresion jugador2
function imprimirJugador2(puntuacionImprimir) {

    console.log("\n\nResultados JUGADOR 2\n\n")
    console.log("Puntaje Total : " + puntuacionImprimir + " con " + contadorAses + " ases y " + contadorRojas + " cartas Rojas\n\n\n");
    if (puntajeJugador1 < puntajeJugador2) {
        console.log("####################################### GANO EL JUGADOR 2 #######################################");
    } else if (puntajeJugador1 > puntajeJugador2) {
        console.log("####################################### Gano el jugador 1 ####################################### ");
    } else if (puntajeJugador1 === puntajeJugador2) {
        console.log("####################################### Oh es Un empate !!! #######################################");
    }

}


//inicia el programa

cartasPoker();