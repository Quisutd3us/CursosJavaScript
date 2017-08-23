let energiaGoku = 100;
let energiaSuperMan = 100;
let potencia = 0;
let round = 0;
let calcularGolpe = function () {
    return Math.round((Math.random() * 10) + 5)
}

let tienenEnergia = function () {
    console.log(`Energia Actual de Goku: ${energiaGoku}`)
    console.log(`Energia Actual de Superman: ${energiaSuperMan}`)
    return energiaGoku >= 0 && energiaSuperMan > 0;
}

while (tienenEnergia()) {
    round++
    console.log(`\n----------------- \n Round : ${round} \n --------------- \n`)
    potencia = calcularGolpe()
    console.log(`golpe Goku potencia ${potencia}`)
    energiaGoku -= potencia
    potencia = calcularGolpe()
    console.log(`golpe Superman potencia ${potencia}`)
    energiaSuperMan -= potencia

}

if (energiaGoku > 0) {
    console.log(`\n\n ------------\nEl ganador a sido Goku con una energia de ${energiaGoku} contra una energia de superman con valor de ${energiaSuperMan}\n ------------\n\n `)
} else if (energiaGoku <= 0 && energiaSuperMan <= 0) {
    console.log(`\n\n ------------\nLos dos se quedaron sin energia Goku con ${energiaGoku} y Superman con ${energiaSuperMan}\n ------------\n\n`)

} else {
    console.log(`\n\n ------------\nEl ganador a sido Superman con una energia de ${energiaSuperMan} contra una energia de Goku con valor de ${energiaGoku}\n ------------\n\n`)
}