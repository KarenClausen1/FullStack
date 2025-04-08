'use strict'

//programa q pida dos numeros y q nos diga cual es mayor cual es menor y si son iguales
//plus si los numeros no son numeros o son menores o iguales a 0 volver a pedir los numeros

//var numero1=parseInt(prompt("ingrese numero 1",0));
//var numero2=parseInt(prompt("ingrese numero 2",0));
var numero1=0;
var numero2=0;

//isNaN dice q si es letra devuelve true o sea si sigue siendo true sigo en el bucle


	while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

numero1=parseInt(prompt("ingrese numero 1 mayor a cero",0));
numero2=parseInt(prompt("ingrese numero 2 mayor a cero",0));
	}




if (numero1 > numero2) {

console.log('el numero '+numero1+' es el mayor');

}else if(numero2 > numero1){
console.log('el numero '+numero2+' es el mayor');
}else{
	console.log('el numero '+numero1+ ' es igual al numero '+numero2);
}