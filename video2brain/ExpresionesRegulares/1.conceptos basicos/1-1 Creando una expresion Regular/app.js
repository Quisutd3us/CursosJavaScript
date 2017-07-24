console.log('-----------------------------');
console.log('\nEXPRESIONES REGULARES\n');
console.log('-----------------------------');

console.log('\n\nExpresiones regulares Creando y Evaluando\n\n');
var expresion1 = new RegExp('david');

var expresion2 = /Javascript/;

// evaluando expresiones

console.log('Evaluando de la 1ra Forma: ' + expresion1.test('mi nombre es david hernando nariño'));

console.log('Evaluando de la 2da Forma: ' + expresion2.test("Yo programo en javascript"));


//expresiones buscando caracteres
console.log('\n\nRangos\n\n');
var expresion3 = new RegExp('[a-c]'); //false
console.log('Se encuentra letras entre la [a-c] en la cadena');
console.log('resultado: ' + expresion3.test('mente'));

var expresion4 = new RegExp('[a-cA-C1-3]');
console.log('Hay algun patron entra la a-c , la A-C y el 1 al 3');
console.log('resultado: ' + expresion4.test('David Hernando Nariño'));

// usando shortcuts
console.log('\n\nusando shortcuts\n\n');

// evaluar la siguiente fecha: 09-19-1982
var evalFecha = /\d\d-\d\d-\d\d\d\d/;
console.log('La fecha ingresada 09-23-1982 cumple este formato 09-19-1982')
console.log('resultado: ' + evalFecha.test('09-23-1982')); // true
console.log('La fecha ingresada 3-sep-1992 cumple este formato 09-19-1982')
console.log('resultado: ' + evalFecha.test('3-sep-1992')); // true

console.log("\n\nEvaluar el siguiente formato 09-19-1982 12:00 am");
evalFecha = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2} \bam\b|\bpm\b/;
console.log("Resultado para la fecha 08-agosto-1956 3:00am : " + evalFecha.test('08-agosto-1956 3:00am'));
console.log("Resultado para la fecha 24-12-0000 12:00am : " + evalFecha.test('24-12-0000 12:00am'));
console.log("Resultado para la fecha 0-1-000 1:00pm : " + evalFecha.test('0-1-000 1:00pm'));
console.log("Resultado para la fecha 12-345-2000 1:00pm : " + evalFecha.test('12-345-2000 1:00pm'));
console.log("Resultado para la fecha 12-5-2000 1:000pm : " + evalFecha.test('12-5-2000 1:000pm'));
console.log("Resultado para la fecha 19-s-2000 1:00pm : " + evalFecha.test('19-s-2000 1:00pm'));
console.log("Resultado para la fecha 19-09-1982 1:00pm : " + evalFecha.test('19-09-1982 1:00pm'));
console.log("Resultado para la 19-09-1982 1:00 pm : " + evalFecha.test('19-09-1982 1:00 pm'));

// uso de match y exect
console.log('\n\nmatch y exect\n\n');

var evalFecha = /\d+/.exec('nacio en el año 1992');
console.log(evalFecha);

console.log(('hola mundo').match(/do/));

//limitar patrones
console.log('\n\nlimitar patrones\n\n');
var evalTexto = /\bam\b/;
console.log("evaluar si la palabra 'am' esta en la frase '19-09-1982 1:00 pm' ");
console.log("Resultado: " + evalTexto.test('19-09-1982 1:00 pm'));
console.log("evaluar si la palabra 'am' esta en la frase '19-09-1982 1:00 am' ");
console.log("Resultado: " + evalTexto.test('19-09-1982 1:00 am'));

//Patrones opcionales
console.log('\n\nPatrones Opcionales\n\n');
var evalTexto = /\bmasculino\b|\bfemenino\b|\bindeterminado\b/.exec('Sexo: m');
var evalTexto = /\bmasculino\b|\bfemenino\b|\bindeterminado\b/;
console.log("evaluar si en la frase 'Sexo: masculino' esta la palabara masculino ó femenino ó indeterminado ");
console.log("Resultado: " + evalTexto.test('Sexo: masculino'));

console.log("evaluar si en la frase 'Sexo: maculino' esta la palabara masculino ó femenino ó indeterminado ");
console.log("Resultado: " + evalTexto.test('Sexo: maculino'));

//expresiones al Inicio
console.log('\n\nExpresiones al Inicio\n\n');
var evalNum = /^\b\d{1,2}\b/;
console.log("Evaluar si la siguiente cadena: '192-19-1982 es mi cumpleaños' espieza con dos numeros ");
console.log("Resultado: " + evalNum.test('192-19-1982 es mi cumpleaños'));
console.log("Evaluar si la siguiente cadena: '05-11-2013' empieza con fecha formato dias ");
console.log("Resultado: " + evalNum.test('05-11-2013'));

//expresiones al Final
console.log('\n\nExpresiones al Final\n\n');
var evalNum = /\b\d{4}$\b/;
console.log("Evaluar si la siguiente cadena: '192-19-1982 es mi cumpleaños' termina con 4 numeros");
console.log("Resultado: " + evalNum.test('192-19-1982 es mi cumpleaños'));
console.log("Evaluar si la siguiente cadena: '05-11-2013' empieza con fecha formato dias");
console.log("Resultado: " + evalNum.test('05-11-2013'));

//Combinando expresiones al Final y al Inicio
console.log('\n\nCombinando expresiones al Final y al Inicio\n\n');
var evalNum = /^\b\d{1,2}\b|\b\d{4}$\b/;
console.log("Evaluar si la siguiente cadena: '192-19-1982 es mi cumpleaños' empieza con 2 numeros y termina con 4 ");
console.log("Resultado: " + evalNum.test('192-19-1982 es mi cumpleaños'));
console.log("Evaluar si la siguiente cadena: '05-11-2013 es mi cumpleaños'empieza con 2 numeros y termina con 4 ");
console.log("Resultado: " + evalNum.test('05-11-2013 es mi cumpleaños'));
console.log("Evaluar si la siguiente cadena: '05-11-2013 es la fecha desde el 2000' empieza con 2 nuemros y termina con 4 ");
console.log("Resultado: " + evalNum.test('05-11-2013 es la fecha desde el 2000'));
