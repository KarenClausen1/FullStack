'use strict'

//Mostrar todos los numeros impares entre dos numeros introducidos por el usuario

let number1= 0;
let number2 = 0;

number1 = Number(prompt("Ingrese el primer número"));
number2 = Number(prompt("Ingrese el segundo número"));

while (isNaN(number1) || isNaN(number2) || number1 === number2) {
  alert("Ingrese dos números distintos y válidos.");
  number1 = Number(prompt("Ingrese el primer número"));
  number2 = Number(prompt("Ingrese el segundo número"));
}

let menor = Math.min(number1, number2);
let mayor = Math.max(number1, number2);

let impares = "";

for (let i = menor + 1; i < mayor; i++) {
  if (i % 2 != 0) {
    impares += i + " ";
  }
}

alert("Números impares entre ambos: " + impares);