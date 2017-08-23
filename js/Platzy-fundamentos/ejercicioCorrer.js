let runner = 'David';
const semana = [
    'lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]
var runningTotal = 0
var runningDia =0
for (var index = 0; index < semana.length; index++) {
    runningDia = (Math.random() * (10 - 0) + 0)
    console.log(`El dia ${semana[index]} ${runner} corrio ${runningDia.toFixed(3)}`);
    runningTotal += runningDia;
}
console.log('-----------------------------------------------------')
console.log(`${runner}, corrio en total ${runningTotal.toFixed(3)}`)