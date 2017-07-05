// function hola(){
//     console.log("Hola");
// }

// function adios(){
//     console.log("Adios");
// }

// var Persona = {diHola: hola, diAdios:adios};
// Persona.diAdios();

// function hola(){
//     console.log("Hola");
// }

// function adios(){
//     console.log("Adios");
// }

// var Persona = {hola: hola, adios:adios};
// Persona.hola();

// var fechaHoy = Date.now();
// var fechaPasada = Date.parse("01/02/2007");
// if (fechaHoy> fechaPasada) {
//     console.log("Estamos en el Futuro");
    
// } else {
//         console.log("Estamos en el Pasado");

// }

// var CalculadoraDeAreas = {};

// CalculadoraDeAreas.rectangulo = function(ancho, alto){
//     return ancho*alto;
// }
// CalculadoraDeAreas.circulo = function(radio){
//     return Math.PI*radio*radio;
// }

// CalculadoraDeAreas.circulo(1);

// var calculadora= {raizCuadrada: Math.sqrt};
// calculadora.raizCuadrada(16);

function hola(){
    console.log("Hola");
}

function adios(){
    console.log("Adios");
}

var Persona = {hola: function(){
    console.log("Hola Hola");
},
adios: adios
};
Persona.hola();