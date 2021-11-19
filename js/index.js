let name, lastname, fullname, birthyear, age, month, birthday;
let currentYear = 2021;
let minAge = 18;

alert("Bienvenido al primer desafio de javascript!");

name = prompt("Cual es tu nombre de pila?");

lastname = prompt("Cual es tu apellido?");

fullname = name + " " + lastname;

birthyear = parseInt(prompt(fullname + ", en que año naciste?"));

age = currentYear - birthyear;

if (age > minAge){
    alert("Felicitaciones " + fullname + ", como tienes " + age + " años de edad puedes continuar");

    birthday = prompt("Numero del dia en que naciste");

    month = prompt("Nombre de tu mes de nacimiento");

    alert("Naciste un " + birthday + " de " + month + " del " + birthyear + "?");

};
if (age < minAge){
    alert("Lo siento " + fullname + ", me temo que no puedes continuar por tu edad");
};


