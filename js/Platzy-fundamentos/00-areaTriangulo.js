let base = 2;
let altura = 4;
let triangleArea = function (base, altura) {
    return (base * altura) / 2;
}
console.log(`El area de un triangulo de base:${base} y altura:${altura} es igual a ${triangleArea(base, altura)}`);


// Calcular el area de un Cuadrado

let radio = 2;
let circleArea = (radio) => Math.PI * Math.pow(radio,2);
console.log(`El Area de un circulo con Radio: ${radio} es igual a ${circleArea(radio)}`);