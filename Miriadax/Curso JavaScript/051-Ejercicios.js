// Desarrolla una librería Calculadora que calcula las longitudes de varias figuras geométricas como cuadrados, rectángulos y círculos.

var cuadradoMedidas = {
    lados: 5,
    unidades: "cm"
};
var rectanguloMedidas = {
    base: 15,
    altura: 10,
    unidades: "cm"
};
var trianguloMedidas = {
    lado1: 10,
    lado3: 10,
    lado2: 10,
    unidades: "cm"
};
var romboMedidas = {
    lado: 70,
    unidades: "cm"
};
var romboideMedidas = {
    base: 25,
    c: 20,
    unidades: "cm"
};
var trapecioMedidas = {
    baseMayor: 15,
    baseMenor: 10,
    c: 12,
    d: 23,
    unidades: "cm"
};

function perimetroCuadrado(_cuadrado) {
    imprimir();
    var perimetro = cuadradoMedidas.lados * 4;
    console.log("El perimetro del Cuadrado es : \n" + perimetro + cuadradoMedidas.unidades);
}

function perimetroRectangulo(_rectangulo) {
    var perimetro = 2 * (rectanguloMedidas.base + rectanguloMedidas.altura);
    console.log("El perimetro del Rectangulo es : \n" + perimetro + rectanguloMedidas.unidades);
}

function perimetroTriangulo(_triangulo) {
    var perimetro = trianguloMedidas.lado1 + trianguloMedidas.lado2 + trianguloMedidas.lado3
    console.log("El perimetro del Triangulo es : \n" + perimetro + trianguloMedidas.unidades);
}

function perimetroRombo(_rombo) {
    var perimetro = romboMedidas.lado * 4;
    console.log("El perimetro del Rombo es : \n" + perimetro + romboMedidas.unidades);
}

function perimetroRomboide(_romboide) {
    var perimetro = (romboideMedidas.base + romboideMedidas.c) * 2
    console.log("El perimetro del Romboide es : \n" + perimetro + romboideMedidas.unidades);
}

function perimetroTrapecio(_trapecio) {
    var perimetro = trapecioMedidas.baseMayor + trapecioMedidas.c + trapecioMedidas.baseMenor + trapecioMedidas.d;
    console.log("El perimetro del Trapecio es : \n" + perimetro + trapecioMedidas.unidades);
    console.log("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("                ******** ESPERO HAYA SIDO DE TU AYUDA | calculadora de perimetros *********      ")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("      +++ Desarrollado por david nariño para MOOC TELEFONICA @E-MAIL: dnarino@gmail.com  ++++")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

}

function imprimir() {

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("                           ******** CALCULADORA DE PERIMETROS *********      ")
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("\n")
    console.log("    ///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
    console.log("\n")
}

var calculadora_de_perimetros = {
    cuadrado: perimetroCuadrado,
    rectangulo: perimetroRectangulo,
    triangulo: perimetroTriangulo,
    rombo: perimetroRombo,
    romboide: perimetroRomboide,
    trapecio: perimetroTrapecio
};

calculadora_de_perimetros.cuadrado(cuadradoMedidas);
calculadora_de_perimetros.rectangulo(rectanguloMedidas);
calculadora_de_perimetros.triangulo(trianguloMedidas);
calculadora_de_perimetros.rombo(romboMedidas);
calculadora_de_perimetros.romboide(romboideMedidas);
calculadora_de_perimetros.trapecio(trapecioMedidas);