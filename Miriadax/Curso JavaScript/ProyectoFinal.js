//creando baraja

var baraja = [];
for (var topo = 1; topo < 14; topo++) {
    var palo = "c";
    var color = "rojo";
    baraja.push({palo: palo, valor: topo, color: color});
    if(topo === 13){
        var palo = "d";
        var color = "rojo";
        for (var topo = 1; topo < 14; topo++) {
            baraja.push({palo: palo, valor: topo, color: color});
            if(topo === 13){
            var palo = "p";
            var color = "negro";
                for (var topo = 1; topo < 14; topo++) {
                    baraja.push({palo: palo, valor: topo, color: color});
                    if(topo === 13){
                    var palo = "t";
                    var color = "negro";
                        for (var topo = 1; topo < 14; topo++) {
                            baraja.push({palo: palo, valor: topo, color: color});
                            
                        }
                    }
                }
            }
        }
    }
}

console.log(baraja);


var dealer = {};