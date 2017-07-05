// var croupier = {};
// croupier.AS = 10;
// croupier.mano = [{palo:'c', valor:1},  {palo:'d', valor:1},    {palo:'p', valor:1},   {palo:'t', valor:1}];
// croupier.puntuar = function(){
//     var resultado =0;
//     for(var i=0; i< this.mano.lenght; i++){
//         if(this.mano[i].valor == 1){
//             resultado = resultado + this.AS;
//             console.log(resultado);
//         }else{
//             resultado = resultado + this.mano[i].valor;
//             console.log(resultado);
//         }
//     }
//     console.log(resultado);
//     return resultado;
// }

// var total = croupier.puntuar();
// console.log(total);

var croupier = {};
croupier.baraja = [{palo:'c', valor:1},  {palo:'c', valor:2}];
croupier.barajar = function(){
    this.baraja.reverse();
    this.baraja.reverse();
    console.log(this.baraja[0].valor);

}

croupier.barajar();