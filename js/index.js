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

};
if (age < minAge){
    alert("Lo siento " + fullName + ", me temo que no puedes continuar por tu edad");
};


