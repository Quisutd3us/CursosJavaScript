
class Perro {
    static nacionalidad: string = "colombia";
    nombre: string;
    raza: string;
    miColor: string;
    edad: number;
    sexo: string;

    constructor(nombre: string, raza: string, miColor: string, edad: number, sexo: string) {
        this.nombre = nombre;
        this.raza = raza;
        this.miColor = miColor;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludo() {
        return " Hola me llamo : " + this.nombre +" Soy de Raza: " +this.raza + " Tengo :" +this.edad +"años , y soy de color : " +this.miColor;
    }

}

let perro1 = new Perro("lorenzo", "guaimaraner", "gris", 10, "M");
let mybutton = document.createElement('button');
mybutton.textContent = "Saludo del Perro";
mybutton.onclick = function () {
    alert(perro1.saludo());
}

document.body.appendChild(mybutton);
