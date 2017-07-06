//creando baraja

var baraja = [];
for (var topo = 1; topo < 14; topo++) {
    var palo = "c";
    var color = "rojo";
    baraja.push({
        palo: palo,
        valor: topo,
        color: color
    });
    if (topo === 13) {
        var palo = "d";
        var color = "rojo";
        for (var topo = 1; topo < 14; topo++) {
            baraja.push({
                palo: palo,
                valor: topo,
                color: color
            });
            if (topo === 13) {
                var palo = "p";
                var color = "negro";
                for (var topo = 1; topo < 14; topo++) {
                    baraja.push({
                        palo: palo,
                        valor: topo,
                        color: color
                    });
                    if (topo === 13) {
                        var palo = "t";
                        var color = "negro";
                        for (var topo = 1; topo < 14; topo++) {
                            baraja.push({
                                palo: palo,
                                valor: topo,
                                color: color
                            });

                        }
                    }
                }
            }
        }
    }
}



var dealer = {};

// definiendo datos
dealer.puntuacionDealer = 0;
dealer.puntuacionPlayer = 0;
dealer._2cartasDealer = [];
dealer._2cartasPlayer = [];
dealer._1cartaPlayer = [];

// definiendo metodos


dealer.repartirInicialDealer = function () {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("                           ******** JUEGO BLACKJACK *********      ");
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("\n")
    console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
    console.log("\n")
    console.log("***************************************************************************************************");
    console.log("                 ******** - REVOLVIENDO LAS CARTAS x 100 veces - *********      ")
    console.log("***************************************************************************************************");
    var nuevoMazo;
    //copiando Mazo a un nuevo Mazo para modificar y no dañar el original
    nuevoMazo = baraja.slice();

    // revolviendo cartas 100 veces
    for (var index = 1; index < 100; index++) {
        nuevoMazo = nuevoMazo.sort(function () {
            return Math.random() - 0.5
        });
    }
    this._2cartasDealer = nuevoMazo.slice(0, 2);

    console.log("Cartas del Dealer: ")

    for (var topo in this._2cartasDealer) {
        console.log(this._2cartasDealer[topo]);
        this.puntuacionDealer += this._2cartasDealer[topo].valor;
    }
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("Puntuacion del Dealer :" + this.puntuacionDealer);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


}

dealer.repartirInicialPlayer = function () {
    var nuevoMazo;

    //copiando Mazo a un nuevo Mazo para modificar y no dañar el original
    nuevoMazo = baraja.slice();

    // revolviendo cartas 100 veces
    for (var index = 1; index < 100; index++) {
        nuevoMazo = nuevoMazo.sort(function () {
            return Math.random() - 0.5
        });
    }
    this._2cartasPlayer = nuevoMazo.slice(0, 2);
    console.log("Cartas del Player: ")

    for (var topo in this._2cartasPlayer) {
        console.log(this._2cartasPlayer[topo]);
        this.puntuacionPlayer += this._2cartasPlayer[topo].valor;
    }

    console.log("Puntuacion del Jugador :" + this.puntuacionPlayer);
}

dealer.unaCarta = function () {
    var nuevoMazo;

    //copiando Mazo a un nuevo Mazo para modificar y no dañar el original
    nuevoMazo = baraja.slice();

    // revolviendo cartas 100 veces
    for (var index = 1; index < 100; index++) {
        nuevoMazo = nuevoMazo.sort(function () {
            return Math.random() - 0.5
        });
    }
    this._1cartaPlayer = nuevoMazo.slice(0, 1);
    console.log("Nueva Carta del Player: ")
    console.log(this._1cartaPlayer[0]);
    this.puntuacionPlayer += this._1cartaPlayer[0].valor;
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("Puntuacion del Jugador :" + this.puntuacionPlayer);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

}

dealer.imprimir = function () {
    if (this.puntuacionPlayer > 21) {
        console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("El player se paso de 21, con " + this.puntuacionPlayer + " entonces gana la casa!!");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


    } else if (this.puntuacionDealer > 21) {
        console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("La casa se paso de 21 " + this.puntuacionPlayer + "entonces gana la mesa!!");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    } else if (this.puntuacionPlayer > this.puntuacionDealer) {
        console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Gana la mesa ... con " + this.puntuacionPlayer + " contra " + this.puntuacionDealer + " de la casa");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    } else if (this.puntuacionPlayer < this.puntuacionDealer) {
        console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Gana la casa ... con " + this.puntuacionDealer + " contra " + this.puntuacionPlayer + " de la mesa");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    } else {
        console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Es un empate con " + this.puntuacionDealer + " contra " + this.puntuacionPlayer + " de la mesa .. Saquen a ese FDP del casino!!");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    }
    console.log("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("                        ******** GRACIAS POR JUGAR - BLACKJACK *********      ")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(" +++ Desarrollado por david nariño GRACIAS POR EL CURSO TELEFONICA @E-MAIL: dnarino@gmail.com  ++++")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
}


var player = {};

//definiendo datos o propiedades

//definiendo Metodos

player.dameUna = function () {
    while (dealer.puntuacionPlayer < 19) {
        console.log("Dame una Croupier !!!");
        dealer.unaCarta();
    }
    dealer.imprimir();
}



function BLACKJACK() {
    dealer.repartirInicialDealer();
    dealer.repartirInicialPlayer();
    player.dameUna();
}

BLACKJACK();