
var croupier = {};

croupier.baraja = [{palo:'c', valor:1},{palo:'c', valor:2}];
//funciones op casi metodos de ese objeto

croupier.barajar = function(){
    this.baraja.reverse();
}

croupier.repartir = function(){
    console.log(this.baraja[0].valor);
}

croupier.puntuar =  function(){
    var resultado =0;
    for (var topo in this.baraja) {
        resultado += this.baraja[topo].valor;
    }
    console.log("Puntuacion:" + resultado);
}

for (var index = 1; index < 11; index++) {
    croupier.barajar();
    croupier.repartir();
    croupier.puntuar();
    console.log("rondas :" + index) ;
    
}
