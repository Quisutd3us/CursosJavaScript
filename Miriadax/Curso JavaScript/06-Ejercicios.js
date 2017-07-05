// 1. Desarrolla un objeto Croupier que tenga como datos una baraja de cartas completa. 
// Y puntuaciones especiales para el as y las figuras (jota, dama y rey).

//     Jota = 12
//     Dama = 14
//     Rey = 17
//     As = 20

//creando al croupier

var Dealer = {};




// DEFINIENDO DICCIONARIO PALO CORAZON
var asCorazon = {
    palo: "c",
    valor: 1,
    color: "rojo"
};
var _2Corazon = {
    palo: "c",
    valor: 2,
    color: "rojo"
};
var _3Corazon = {
    palo: "c",
    valor: 3,
    color: "rojo"
};
var _4Corazon = {
    palo: "c",
    valor: 4,
    color: "rojo"
};
var _5Corazon = {
    palo: "c",
    valor: 5,
    color: "rojo"
};
var _6Corazon = {
    palo: "c",
    valor: 6,
    color: "rojo"
};
var _7Corazon = {
    palo: "c",
    valor: 7,
    color: "rojo"
};
var _8Corazon = {
    palo: "c",
    valor: 8,
    color: "rojo"
};
var _9Corazon = {
    palo: "c",
    valor: 9,
    color: "rojo"
};
var _10Corazon = {
    palo: "c",
    valor: 10,
    color: "rojo"
};
var jCorazon = {
    palo: "c",
    valor: 11,
    color: "rojo"
};
var qCorazon = {
    palo: "c",
    valor: 12,
    color: "rojo"
};
var kCorazon = {
    palo: "c",
    valor: 13,
    color: "rojo"
};


// DEFINIENDO DICCIONARIO PALO DIAMANTE
var asDiamantes = {
    palo: "d",
    valor: 1,
    color: "rojo"
};
var _2Diamantes = {
    palo: "d",
    valor: 2,
    color: "rojo"
};
var _3Diamantes = {
    palo: "d",
    valor: 3,
    color: "rojo"
};
var _4Diamantes = {
    palo: "d",
    valor: 4,
    color: "rojo"
};
var _5Diamantes = {
    palo: "d",
    valor: 5,
    color: "rojo"
};
var _6Diamantes = {
    palo: "d",
    valor: 6,
    color: "rojo"
};
var _7Diamantes = {
    palo: "d",
    valor: 7,
    color: "rojo"
};
var _8Diamantes = {
    palo: "d",
    valor: 8,
    color: "rojo"
};
var _9Diamantes = {
    palo: "d",
    valor: 9,
    color: "rojo"
};
var _10Diamantes = {
    palo: "d",
    valor: 10,
    color: "rojo"
};
var jDiamantes = {
    palo: "d",
    valor: 11,
    color: "rojo"
};
var qDiamantes = {
    palo: "d",
    valor: 12,
    color: "rojo"
};
var kDiamantes = {
    palo: "d",
    valor: 13,
    color: "rojo"
};

// DEFINIENDO DICCIONARIO PALO PICAS
var asPicas = {
    palo: "p",
    valor: 1,
    color: "negro"
};
var _2Picas = {
    palo: "p",
    valor: 2,
    color: "negro"
};
var _3Picas = {
    palo: "p",
    valor: 3,
    color: "negro"
};
var _4Picas = {
    palo: "p",
    valor: 4,
    color: "negro"
};
var _5Picas = {
    palo: "p",
    valor: 5,
    color: "negro"
};
var _6Picas = {
    palo: "p",
    valor: 6,
    color: "negro"
};
var _7Picas = {
    palo: "p",
    valor: 7,
    color: "negro"
};
var _8Picas = {
    palo: "p",
    valor: 8,
    color: "negro"
};
var _9Picas = {
    palo: "p",
    valor: 9,
    color: "negro"
};
var _10Picas = {
    palo: "p",
    valor: 10,
    color: "negro"
};
var jPicas = {
    palo: "p",
    valor: 11,
    color: "negro"
};
var qPicas = {
    palo: "p",
    valor: 12,
    color: "negro"
};
var kPicas = {
    palo: "p",
    valor: 13,
    color: "negro"
};

// DEFINIENDO DICCIONARIO PALO TREBOLES
var asTrebol = {
    palo: "t",
    valor: 1,
    color: "negro"
};
var _2Trebol = {
    palo: "t",
    valor: 2,
    color: "negro"
};
var _3Trebol = {
    palo: "t",
    valor: 3,
    color: "negro"
};
var _4Trebol = {
    palo: "t",
    valor: 4,
    color: "negro"
};
var _5Trebol = {
    palo: "t",
    valor: 5,
    color: "negro"
};
var _6Trebol = {
    palo: "t",
    valor: 6,
    color: "negro"
};
var _7Trebol = {
    palo: "t",
    valor: 7,
    color: "negro"
};
var _8Trebol = {
    palo: "t",
    valor: 8,
    color: "negro"
};
var _9Trebol = {
    palo: "t",
    valor: 9,
    color: "negro"
};
var _10Trebol = {
    palo: "t",
    valor: 10,
    color: "negro"
};
var jTrebol = {
    palo: "t",
    valor: 11,
    color: "negro"
};
var qTrebol = {
    palo: "t",
    valor: 12,
    color: "negro"
};
var kTrebol = {
    palo: "t",
    valor: 13,
    color: "negro"
};

// creando Mazo
Dealer.mazo = [
    asCorazon, _2Corazon, _3Corazon, _4Corazon, _5Corazon, _6Corazon, _7Corazon, _8Corazon, _9Corazon, _10Corazon, jCorazon, qCorazon, kCorazon,
    asDiamantes, _2Diamantes, _3Diamantes, _4Diamantes, _5Diamantes, _6Diamantes, _7Diamantes, _8Diamantes, _9Diamantes, _10Diamantes, jDiamantes, qDiamantes, kDiamantes,
    asPicas, _2Picas, _3Picas, _4Picas, _5Picas, _6Picas, _7Picas, _8Picas, _9Picas, _10Picas, jPicas, qPicas, kPicas,
    asTrebol, _2Trebol, _3Trebol, _4Trebol, _5Trebol, _6Trebol, _7Trebol, _8Trebol, _9Trebol, _10Trebol, jTrebol, qTrebol, kTrebol
]

//Filtrando cartas Aleatorias

Dealer._5Cartas = function () {
    var nuevoMazo;
    //copiando Mazo a un nuevo Mazo para modificar y no dañar el original
    nuevoMazo = this.mazo.slice();

    // revolviendo cartas 100 veces
    for (var index = 1; index < 100; index++) {
        nuevoMazo = nuevoMazo.sort(function () {
            return Math.random() - 0.5
        });
    }
    //seleccionando solo 5 cartas
    Dealer._5cartas = nuevoMazo.slice(0, 5);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("                           ******** JUEGO POKER EN JS *********      ")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("\n")
    console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
    console.log("\n")
    console.log("***************************************************************************************************")
    console.log("******** - REVOLVIENDO LAS CARTAS x 100 veces ... ASI A QUEDADO LA BARAJA PARA 5 CARTAS: - *********")
    console.log("***************************************************************************************************")
    console.log("\n")


    for (var topo in this._5cartas) {
        console.log(this._5cartas[topo]);
    }

}

//CREANDO PUNTUACIONES
//     Jota = 12
//     Dama = 14
//     Rey = 17
//     As = 20

Dealer.puntuaciones = function () {
    console.log("***************************************************************************************************");
    console.log("                           ******** - PUNTUACION - *********");
    console.log("***************************************************************************************************");
    console.log("\n");
    var resultado = 0;
    for (var topo in this._5cartas) {
        console.log("\ncarta : \n");
        console.log("Palo: " + this._5cartas[topo].palo + " Valor: " + this._5cartas[topo].valor + " Color: " + this._5cartas[topo].color);
        //filtrando puntuaciones
        switch (this._5cartas[topo].valor) {
            case 1:
                this._5cartas[topo].valor = 20;
                break;
            case 11:
                this._5cartas[topo].valor = 12;

                break;
            case 12:
                this._5cartas[topo].valor = 14;

                break;
            case 13:
                this._5cartas[topo].valor = 17;

                break;

        }

        resultado += this._5cartas[topo].valor;
        console.log("La suma del Mazo es = " + resultado + " puntos");
    }
    console.log("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("PUNTUACION TOTAL DE LA MANO: " + resultado);
    console.log("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("                        ******** GRACIAS POR JUGAR - JUEGO POKER EN JS *********      ");
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("      +++ Desarrollado por david nariño para MOOC TELEFONICA @E-MAIL: dnarino@gmail.com  ++++")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

Dealer._5Cartas();
Dealer.puntuaciones();