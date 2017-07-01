// Declaracion funcion Mostrar
var anosBisiestos = [];
var a = 0;
function mostrarBisiestos(anoBisiesto){
    anosBisiestos[a] = anoBisiesto;
    a++;
}


// Calculando bisiestos siglo XXI

for (var i = 1; i <= 2100; i++) {
    var resultado = 0;
    resultado = i / 4;
    if (resultado % 1 == 0) {
        resultado = i / 100;
        if (resultado % 1 == 0) {
            resultado = i / 400;
            if (resultado % 1 == 0) {
                mostrarBisiestos(i);
            }
        } else {
            mostrarBisiestos(i);
        }
    }   
}

//Mostrando Años por consola

console.log(anosBisiestos);