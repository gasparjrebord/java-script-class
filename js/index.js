/**
 * @challenge: Desafío: Incorporar objetos
 * 
 * @version: v1.0.0
 * @author: Gaspar Rebord.
 * @fecha: 07/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */
// Código de aquí en adelante

class Author {
    constructor(firstName, lastName, age, location) {
        this.Nombre = firstName;
        this.Apellido = lastName;
        this.Edad = age;
        this.Localidad = location;
    }
}

let gaspar = new Author("Gaspar", "Rebord", 19, "Argentina");
console.log(gaspar)


class Getid {
    constructor(firstName, lastName, age, date, blood) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.date = date;
        this.blood = blood;
    }
    getIdInfo() {
        return "El usuario se llama " + this.firstName + " " + this.lastName + ", tiene " + this.age + " años de edad, nacio el " + this.date + " y es de grupo sanguineo " + this.blood;
    }
}

let firstName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");
let age = prompt("Ingrese su edad");
let date = prompt("Ingrese su fecha de nacimiento");
let blood = prompt("Ingrese su grupo sanguineo");

let user = new Getid(firstName, lastName, age, date, blood);
console.log(user);
console.log(user.getIdInfo());

document.getElementById("nombre").innerHTML = user.firstName;
document.getElementById("apellido").innerHTML = user.lastName;
document.getElementById("edad").innerHTML = user.age;
document.getElementById("fecha").innerHTML = user.date;
document.getElementById("sangre").innerHTML = user.blood;