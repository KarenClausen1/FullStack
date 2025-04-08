'use strict'

let num1;
let num2;

do {
    alert("Ingrese números válidos y mayores a cero.");
    num1 = Number(prompt("Ingrese el primer número:"));
    num2 = Number(prompt("Ingrese el segundo número:"));

} while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0);

if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    alert(num2 + " es mayor que " + num1);
} else {
    alert("Ambos números son iguales.");
}