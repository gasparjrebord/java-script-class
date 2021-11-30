/**
 * @challenge: Desafío: Crear un algoritmo utilizando un ciclo
 * 
 * @version: v1.0.0
 * @author: Gaspar Rebord.
 * @fecha: 30/11/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega
 */
// Código de aquí en adelante

let firstName, lastName, fullName, birthYear, age, month, birthDay;
let currentYear = 2021;
let minAge = 18;
let option;
let calculator, firstNumber, secondNumber, result;

alert("Bienvenido al tercer desafio de javascript!");
alert("Para continuar primero debes registrarte");

do {
    firstName = prompt("Cual es tu nombre de pila?");
    lastName = prompt("Cual es tu apellido?");
} while (firstName == "" || lastName == "");

fullName = firstName + " " + lastName;
console.log("Full Name: "+ fullName);

birthYear = parseInt(prompt(fullName + ", en que año naciste?"));   
age = currentYear - birthYear;
if (age > minAge){
        alert("Felicitaciones " + fullName + ", como tienes " + age + " años de edad puedes continuar");

        birthDay = prompt("Numero del dia en que naciste");
        month = prompt("Nombre de tu mes de nacimiento");
        console.log(birthDay + "/" + month + "/" + birthYear);

        option = prompt("Elige un desafio: Cuentas - Palabras");
        switch (option) {
            case "Cuentas":
                do {
                    alert("Para completar el desafio debes introducir a continuacion una operacion que de como resultado 36");
                    operation = prompt("Elige la operacion (+, -, x, /)");
                    firstNumber = parseInt(prompt("Primer numero"));
                    secondNumber = parseInt(prompt("Segundo numero"));

                    switch (operation) {
                        case "+":
                            alert(firstNumber + secondNumber);
                            result = firstNumber + secondNumber
                            break;

                        case "-":
                            if(firstNumber > secondNumber){
                                alert(firstNumber - secondNumber);
                                result = firstNumber - secondNumber;
                            }else {
                                alert(secondNumber - firstNumber);
                                result = secondNumber + firstNumber;
                            }
                            break;

                        case "x":
                            alert(firstNumber * secondNumber);
                            result = firstNumber * secondNumber;
                            break;

                        case "/":
                            alert(firstNumber % secondNumber);
                            result = firstNumber % secondNumber;
                            break;

                        default:
                            alert("Operacion no valida");
                            break;
                }
                } while (result != 36);
                alert("FELICITACIONES DESAFIO COMPLETADO");
                break;
                
            case "Palabras":
                do {
                    result = prompt("La palabra (Absolutismo), tiene 5 silabas? si-no");
                } while (result != "si");
                alert("FELICITACIONES DESAFIO COMPLETADO");
                break;
        }
}else {
    alert("Lo siento " + fullName + ", me temo que no puedes continuar por tu edad");
}
