alert("adentro Json");
var carro = function(marca, modelo, motor, color, placa){
    var tipo = "carro";
    this.marca = marca;
    this.modelo = modelo;
    this.motor = motor;
    this.color=color;
    this.placa = placa;
}

var myCarro = new carro('vw', '2012','2300', 'rojo', 'BNI342');
console.log(myCarro);
console.log("marca: " + myCarro.marca);