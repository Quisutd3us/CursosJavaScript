//BARAJA
var Baraja = {
	
	//Devuelve una baraja ordenada
	crearBaraja : function () {
		var palos = "DTCP";
		var baraja = [];
		for ( var i=0 ; i<palos.length ; i++ ) {
			for ( var j=1 ; j<=13 ; j++ ) {
				baraja[baraja.length] = { palo:palos[i] , valor:j };
			}
		}
		return baraja;
	}
}


//CROUPIER
var Croupier = {
	
	//Mezcla las cartas de la baraja.
	barajar : function(baraja) {
		console.log("El croupier está barajando...")
		for ( var i=0 ; i<100 ; i++ ){
			var carta1 = Math.floor(Math.random()*(baraja.length-1));
			var carta2 = Math.floor(Math.random()*(baraja.length-1));
			var aux = baraja[carta1];
			baraja[carta1] = baraja[carta2];
			baraja[carta2] = aux;
		}
		return baraja;
	},
	
	//Devuelve una carta y la elimina de la baraja
	reparte : function(baraja) {
		console.log("El croupier coge una carta del mazo...")
		var carta=baraja[0];
		baraja.splice(0,1);
		return carta;
	},
	
	//Devuelve la puntuación de la mano indicada por parámetro
	puntua : function(mano) {
		var puntos = 0;
		var numeroAses = 0;
		for ( var j=0 ; j<mano.length ; j++ ){
			if ( mano[j].valor === 11 || mano[j].valor === 12 || mano[j].valor ===13 ){
				puntos = puntos + 10;
			} else {
				if ( mano[j].valor === 1 ){
					puntos = puntos + 11;
					numeroAses++;
				} else {
					puntos = puntos + mano[j].valor;
				}
			}
		}
		while ( puntos>21 && numeroAses>0 ){
			puntos = puntos - 10;
			numeroAses--;
		}
		return puntos;
	}
}


//JUGADOR
var Jugador = {
	
	mano : [],
	puntos : 0,
	
	//Devuelve true para pedir una carta mas y false para plantarse
	pedir : function() {
		var pedir = false;
		if ( this.puntos < 17 ){
			pedir = true;
		}
		return pedir;
	},
	
}

//BLACKJACK
function blackjack(){
	var miBaraja = [];
	var miCroupier = Croupier;
	var miJugador = Jugador;
	var jugarNuevo = true;
	
	while ( jugarNuevo ){
		console.log("---- NUEVA PARTIDA ----");
		miBaraja = Baraja.crearBaraja();
		miBaraja = miCroupier.barajar(miBaraja);
		miJugador.mano = [];
		miJugador.puntos = 0;
		while ( miJugador.pedir() ){
			miJugador.mano[miJugador.mano.length] = miCroupier.reparte(miBaraja);
			miJugador.puntos = miCroupier.puntua(miJugador.mano);
			console.log("Mano del jugador:")
			for ( var i=0 ; i<miJugador.mano.length ; i++ ){
				console.log(miJugador.mano[i].valor + miJugador.mano[i].palo);
			}
			console.log("Puntos: "+miJugador.puntos);
		}
		if ( miJugador.puntos<=21 ){
			console.log("Has ganado con "+miJugador.puntos);
		} else {
			console.log("Has perdido con "+miJugador.puntos);
		}
		jugarNuevo=confirm("Jugar nueva partida");
	}
}

blackjack();