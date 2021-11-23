/**
 * @challenge: Crear un algoritmo JS simple
 * 
 * @version: v1.0.0
 * @author: Indica el nombre del autor del código.
 * @fecha: 23/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */
// Código de aquí en adelante

let firstName, lastName, fullName, birthYear, age, month, birthDay;
let currentYear = 2021;
let minAge = 18;

alert("Bienvenido al primer desafio de javascript!");

firstName = prompt("Cual es tu nombre de pila?");

lastName = prompt("Cual es tu apellido?");

fullName = firstName + " " + lastName;

birthYear = parseInt(prompt(fullName + ", en que año naciste?"));

age = currentYear - birthYear;

if (age > minAge){
    alert("Felicitaciones " + fullName + ", como tienes " + age + " años de edad puedes continuar");

    birthDay = prompt("Numero del dia en que naciste");

    month = prompt("Nombre de tu mes de nacimiento");

    alert("Naciste un " + birthDay + " de " + month + " del " + birthYear + "?");

} else{
    alert("Lo siento " + fullName + ", me temo que no puedes continuar por tu edad");
};


