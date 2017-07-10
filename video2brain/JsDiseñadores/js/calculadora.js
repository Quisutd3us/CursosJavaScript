// Area Triangulo = (base * altura /2)
//creando funcion calcular

function calcularArea(base, altura){
    return (base*altura)/2;

}

//capturando objetos

var zonaResultado = document.querySelector("pre");
var btnCalcular = document.querySelector("#btnCalcular");

//capturando evento clik:boton

btnCalcular.addEventListener('click', function (event) {

    //capturando datos de los inputs

    var base = document.querySelector('#base').value;
    var altura = document.querySelector('#altura').value;
    zonaResultado.innerHTML= calcularArea(base, altura);
    zonaResultado.classList.add('estilosResultado');

});

//capturando evento mouseover:boton

btnCalcular.addEventListener('mouseover', function(event){
    event.target.classList.add('efectoBoton');
    event.target.innerHTML="De click";
});

btnCalcular.addEventListener('mouseout', function(event){
    event.target.className = event.target.className.replace('efectoBoton','');
    event.target.innerHTML="Ejecutar";
});

