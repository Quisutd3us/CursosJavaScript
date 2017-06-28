var calculadoraDNI = (function () {
    function calculadoraDNI(nombre, apellido, DNI) {
        this.edad = 0;
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }
    return calculadoraDNI;
}());
var yo = new calculadoraDNI("david", "hernando", 80134982);
console.log(yo);
