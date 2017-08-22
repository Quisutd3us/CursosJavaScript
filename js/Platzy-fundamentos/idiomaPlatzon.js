let str = 'davidardasf';

function platzon(str) {
    // si termina en ar se deben eliminar las 2 ultimas letras
    var modificando = '';
    if (str.toLowerCase().endsWith('ar')) {
        return modificando = str.slice(0, -2);
    }

    //si la palabra inicializa con z, se le añade 'pe al final'
    else if (str.startsWith('z')) {
        modificando = str;
        return modificando.concat('pe');

    }

    //si la palabra traducida tiene 10 caracteres o mas letras, se debe partir a la mitad 
    //y unir con un guion al medio
    else if (str.length >= 10) {
        var primeraMitad = str.slice(0,str.length/2);
        var segundaMitad = str.slice((str.length / 2), str.length);
        modificando = `${primeraMitad}-${segundaMitad}`
        return modificando
    }

    //si la palabra es un palindromo,
    //ninguna regla anterior cuenta y se devuelve la misma palabra intercalando MAY y MIN

    function esPalindromo(strFnc){
        return strFnc.toLowerCase().split('').reverse().join('')
    }

    if(esPalindromo(str) === str.toLowerCase()){
        modificando='';
        var capitalize = true;
        for (var index = 0; index < str.length; index++) {

            modificando += capitalize ? str[index].toLowerCase()  :str[index].toUpperCase()
            capitalize = !capitalize;
        }
        return modificando;
    }else{
        return `${str}`
    }
}

console.log(`Para la palabra '${str}' su equivalente en Platzon es '${platzon(str)}'`)