
class calculadoraDNI {
    private edad: number = 0;
    nombre:string;
    apellido: string;
    DNI: number;

    constructor(nombre: string, apellido: string, DNI: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }

}

var yo= new calculadoraDNI("david","hernando",80134982);
console.log(yo);