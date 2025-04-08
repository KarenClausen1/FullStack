'use strict'

//Utilizar un bucle para calcular la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado

let num;
let contador = 0;
let suma = 0;
let media;

do {
    num = Number(prompt("Ingrese un número:"));

    if (!isNaN(num) && num >= 0) {
        suma += num;
        contador++;
    }

} while (!isNaN(num) && (num >= 0));  //tambien puede ser if (contador > 0) {

if ((isNaN(num)) || (num < 0)) {
    media = suma / contador;
    alert("La suma total de los números es: " + suma + " y la media de los números es: " + media);
}






//contador++;  contador ahora vale 1
//contador += i;  contador ahora vale 4 (1 + 3)