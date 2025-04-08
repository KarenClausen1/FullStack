'use strict'

//muestre todos los numeros divisores de un numero ingresado en prompt
do {
    var numero = parseInt(prompt('ingresa un numero mayor a 0',1));
} while (numero == 0);

for (var i = 1; i <= numero; i++) {
	if (numero%i == 0 ) {
console.log(' divisor '+i);
	}
}
