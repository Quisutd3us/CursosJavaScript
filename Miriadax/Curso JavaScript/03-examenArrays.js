console.log("examen arrays");
var palos = ["c","p","t","d"];
for(var i =0; i< palos.length; i =i+1){
    for (var j = 1; j<=12; j++){
        if(palos[i] === "c" || palos[i] === "d"){
            console.log("carta:" + j + palos[i]);
        }
    }

}

var palos = { esp: ["c","o","e","b"],  poker: ["c","t","p","d"]};
console.log(palos.esp.length);



var as= {palo:"c", valor: 1};
as.valor=2;
console.log(as.valor);

var as = {palo: "c", val: 1};
var rey = {palo: "c", valor: 12};
var mano = [as, rey, {palo:"c", valor:11} ];
console.log(mano.length);

