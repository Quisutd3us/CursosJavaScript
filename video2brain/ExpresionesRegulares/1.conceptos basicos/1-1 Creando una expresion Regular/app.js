console.log('Expresiones regulares Creando y Evaluando');
var expresion1 = new RegExp('david');

var expresion2 = /Javascript/;

// evaluando expresiones

console.log('eValuando de la 1ra Forma: '+ expresion1.test('mi nombre es david hernando nariño'));

console.log('eValuando de la 2da Forma: '+ expresion2.test("Yo programo en javascript"));

//expresiones buscando caracteres

var expresion3 = new RegExp('[a-c]');//false
console.log('Se encuentra letras entre la [a-c] en la cadena');
console.log(expresion3.test('mente'));

var expresion4 = new RegExp('[a-cA-C1-3]');
console.log('Hay algun patron entra la a-c , la A-C y el 1 al 3');
console.log('resultado: ' + expresion4.test('David Hernando Nariño'));

// usando shortcuts
// evaluar la siguiente fecha: 09-19-1982
var evalFecha = /\d\d-\d\d-\d\d\d\d/;
console.log('La fecha ingresada 09-23-1982 cumple este formato 09-19-1982')
console.log('resultado: ' + evalFecha.test('09-23-1982'));// true
console.log('La fecha ingresada 3-sep-1992 cumple este formato 09-19-1982')
console.log('resultado: ' + evalFecha.test('3-sep-1992'));// true

console.log("\n\nEvaluar el siguiente formato 09-19-1982 12:00 am");
evalFecha = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2} \D{2}/;
console.log("Resultado para la fecha 08-agosto-1956 3:00am : " + evalFecha.test('08-agosto-1956 3:00am'));
console.log("Resultado para la fecha 24-12-0000 12:00am : " + evalFecha.test('24-12-0000 12:00am'));
console.log("Resultado para la fecha 0-1-000 1:00pm : " + evalFecha.test('0-1-000 1:00pm'));
console.log("Resultado para la fecha 12-345-2000 1:00pm : " + evalFecha.test('12-345-2000 1:00pm'));
console.log("Resultado para la fecha 12-5-2000 1:000pm : " + evalFecha.test('12-5-2000 1:000pm'));
console.log("Resultado para la fecha 19-s-2000 1:00pm : " + evalFecha.test('19-s-2000 1:00pm'));
console.log("Resultado para la fecha 19-09-1982 1:00pm : " + evalFecha.test('19-09-1982 1:00pm'));
console.log("Resultado para la 19-09-1982 1:00 pm : " + evalFecha.test('19-09-1982 1:00 pmnn'));

// uso de match y exect

var evalFecha = /\d+/.exec('nacio en el año 1992');
console.log(evalFecha);

console.log(('hola mundo').match(/do/));

