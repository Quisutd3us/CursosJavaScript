var Perro = (function () {
    function Perro(nombre, raza, miColor, edad, sexo) {
        this.nombre = nombre;
        this.raza = raza;
        this.miColor = miColor;
        this.edad = edad;
        this.sexo = sexo;
    }
    Perro.prototype.saludo = function () {
        return " Hola me llamo : " + this.nombre + " Soy de Raza: " + this.raza + " Tengo :" + this.edad + "años , y soy de color : " + this.miColor;
    };
    Perro.nacionalidad = "colombia";
    return Perro;
}());
var perro1 = new Perro("lorenzo", "guaimaraner", "gris", 10, "M");
var mybutton = document.createElement('button');
mybutton.textContent = "Saludo del Perro";
mybutton.onclick = function () {
    alert(perro1.saludo());
};
document.body.appendChild(mybutton);
