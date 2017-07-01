// Programa un ejemplo que almacene en un array todas las cartas de la baraja, cada una representada con un diccionario que tenga un palo y un valor.


// DEFINIENDO DICCIONARIO PALO CORAZON
var asCorazon = {palo: "c", valor: 1, color:"rojo"}; 
var _2Corazon = {palo: "c", valor: 2, color:"rojo"}; 
var _3Corazon = {palo: "c", valor: 3, color:"rojo"}; 
var _4Corazon = {palo: "c", valor: 4, color:"rojo"}; 
var _5Corazon = {palo: "c", valor: 5, color:"rojo"}; 
var _6Corazon = {palo: "c", valor: 6, color:"rojo"}; 
var _7Corazon = {palo: "c", valor: 7, color:"rojo"}; 
var _8Corazon = {palo: "c", valor: 8, color:"rojo"}; 
var _9Corazon = {palo: "c", valor: 9, color:"rojo"}; 
var _10Corazon = {palo: "c", valor: 10, color:"rojo"}; 
var jCorazon = {palo: "c", valor: 11, color:"rojo"}; 
var qCorazon = {palo: "c", valor: 12, color:"rojo"}; 
var kCorazon = {palo: "c", valor: 13, color:"rojo"}; 

// DEFINIENDO DICCIONARIO PALO DIAMANTE
var asDiamantes = {palo: "d", valor: 1, color:"rojo"}; 
var _2Diamantes = {palo: "d", valor: 2, color:"rojo"}; 
var _3Diamantes = {palo: "d", valor: 3, color:"rojo"}; 
var _4Diamantes = {palo: "d", valor: 4, color:"rojo"}; 
var _5Diamantes = {palo: "d", valor: 5, color:"rojo"}; 
var _6Diamantes = {palo: "d", valor: 6, color:"rojo"}; 
var _7Diamantes = {palo: "d", valor: 7, color:"rojo"}; 
var _8Diamantes = {palo: "d", valor: 8, color:"rojo"}; 
var _9Diamantes = {palo: "d", valor: 9, color:"rojo"}; 
var _10Diamantes = {palo: "d", valor: 10, color:"rojo"}; 
var jDiamantes = {palo: "d", valor: 11, color:"rojo"}; 
var qDiamantes = {palo: "d", valor: 12, color:"rojo"}; 
var kDiamantes = {palo: "d", valor: 13, color:"rojo"}; 

// DEFINIENDO DICCIONARIO PALO PICAS
var asPicas = {palo: "p", valor: 1, color:"negro"}; 
var _2Picas = {palo: "p", valor: 2, color:"negro"}; 
var _3Picas = {palo: "p", valor: 3, color:"negro"}; 
var _4Picas = {palo: "p", valor: 4, color:"negro"}; 
var _5Picas = {palo: "p", valor: 5, color:"negro"}; 
var _6Picas = {palo: "p", valor: 6, color:"negro"}; 
var _7Picas = {palo: "p", valor: 7, color:"negro"}; 
var _8Picas = {palo: "p", valor: 8, color:"negro"}; 
var _9Picas = {palo: "p", valor: 9, color:"negro"}; 
var _10Picas = {palo: "p", valor: 10, color:"negro"}; 
var jPicas = {palo: "p", valor: 11, color:"negro"}; 
var qPicas = {palo: "p", valor: 12, color:"negro"}; 
var kPicas = {palo: "p", valor: 13, color:"negro"}; 

// DEFINIENDO DICCIONARIO PALO TREBOLES
var asTrebol = {palo: "t", valor: 1 , color:"negro"}; 
var _2Trebol = {palo: "t", valor: 2 , color:"negro"}; 
var _3Trebol = {palo: "t", valor: 3 , color:"negro"}; 
var _4Trebol = {palo: "t", valor: 4 , color:"negro"}; 
var _5Trebol = {palo: "t", valor: 5 , color:"negro"}; 
var _6Trebol = {palo: "t", valor: 6 , color:"negro"}; 
var _7Trebol = {palo: "t", valor: 7 , color:"negro"}; 
var _8Trebol = {palo: "t", valor: 8 , color:"negro"}; 
var _9Trebol = {palo: "t", valor: 9 , color:"negro"}; 
var _10Trebol = {palo: "t", valor: 10 , color:"negro"}; 
var jTrebol = {palo: "t", valor: 11 , color:"negro"}; 
var qTrebol = {palo: "t", valor: 12 , color:"negro"}; 
var kTrebol = {palo: "t", valor: 13 , color:"negro"}; 

var barajaPoker = [
    asCorazon,_2Corazon, _3Corazon, _4Corazon, _5Corazon, _6Corazon, _7Corazon, _8Corazon, _9Corazon, _10Corazon, jCorazon, qCorazon, kCorazon, 
    asDiamantes,_2Diamantes, _3Diamantes, _4Diamantes, _5Diamantes, _6Diamantes, _7Diamantes, _8Diamantes, _9Diamantes, _10Diamantes, jDiamantes, qDiamantes, kDiamantes, 
    asPicas,_2Picas, _3Picas, _4Picas, _5Picas, _6Picas, _7Picas, _8Picas, _9Picas, _10Picas, jPicas, qPicas, kPicas,
    asTrebol,_2Trebol, _3Trebol, _4Trebol, _5Trebol, _6Trebol, _7Trebol, _8Trebol, _9Trebol, _10Trebol, jTrebol, qTrebol, kTrebol
]

// 2. Partiendo del array que has construido en el ejercicio anterior,
//  construye un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro array las cartas negras.

//Filtrando Rojas
var resultadoRojas = [];
var countDavid = 0;
for(david in barajaPoker){
    if(barajaPoker[david].color =="rojo"){
        resultadoRojas[resultadoRojas.length] = barajaPoker[david];
    }
}

// mostrando Array Rojas

console.log("\nLAS CARTAS ROJAS DEL MAZO SON\n\n");

for(narino in resultadoRojas){

    console.log("La Carta " + resultadoRojas[narino].valor + resultadoRojas[narino].palo + " es de color : " + resultadoRojas[narino].color);
    // console.log(resultadoRojas[narino]);
}

// Filtrando Negras
var resultadoNegras = [];
for(david in barajaPoker){
    if(barajaPoker[david].color =="negro"){
        resultadoNegras[resultadoNegras.length] = barajaPoker[david];
    }
}

// mostrando Array Negras
console.log("\nLAS CARTAS NEGRAS DEL MAZO SON\n\n");
for(narino in resultadoNegras){
    console.log("La Carta " + resultadoNegras[narino].valor + resultadoNegras[narino].palo + " es de color : " + resultadoNegras[narino].color);
}



// // 3. Partiendo del array que has construido en el ejercicio anterior, 
// construye un algoritmo que filtre en un nuevo array las cartas rojas y pares. 
// Luego imprime en la consola la última carta de ese nuevo array.

var resultadoRojasPares= [];
for(salinas in resultadoRojas){
    if(resultadoRojas[salinas].valor % 2 === 0){
        resultadoRojasPares[resultadoRojasPares.length] = resultadoRojas[salinas];
    }
}

// mostrando Array Rojas y Pares
console.log("\nLAS CARTAS ROJAS  Y PARES DEL MAZO SON\n\n");
for (robayo in resultadoRojasPares){
        console.log("La Carta " + resultadoRojasPares[robayo].valor + resultadoRojasPares[robayo].palo + " es de color " + resultadoRojasPares[robayo].color);
}


var resultadoNegrasPares= [];
for(salinas in resultadoNegras){
    if(resultadoNegras[salinas].valor % 2 === 0){
        resultadoNegrasPares[resultadoNegrasPares.length] = resultadoNegras[salinas];
    }
}

// mostrando Array Negras y Pares
console.log("\nLAS CARTAS NEGRAS  Y PARES DEL MAZO SON\n\n");
for (robayo in resultadoNegrasPares){
        console.log("La Carta " + resultadoNegrasPares[robayo].valor + resultadoNegrasPares[robayo].palo + " es de color " + resultadoNegrasPares[robayo].color);
}

