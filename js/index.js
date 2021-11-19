let fullname, birthdate, age;
let currentYear = 2021;
let minAge = 18;

alert("Bienvenido al primer desafio de javascript!");

fullname = prompt("Introduzca su nombre completo");

birthdate = prompt(fullname + ", en que año naciste?");

age = currentYear - birthdate;

if (age > minAge){
    alert("Felicitaciones " + fullname + ", como eres mayor de edad puedes continuar")
};
if (age < minAge){
    alert("Lo siento " + fullname + ", me temo que no puedes continuar")
};


