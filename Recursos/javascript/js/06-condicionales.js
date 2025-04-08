'use strict'

//OPERADORES LOGICOS=

//a == b  /*Es igual*/
//a === b /*Es estrictamente igual*/

//a != b /*Es distinto*/
//a !== b /*Es estrictamente distinto*/

//<, <=, >, >= /*Menor, menor o igual, mayor, mayor o igual*/

//a <= b

//a && b /*Operador and (y)*/

//a || b /*Operador or (o)*/

//!a /*Operador not (no)*/

//condicional if

var edad=11;
var nombre='adrian';
var year=2024;

if (edad>=18 ) {
	console.log(nombre+' es mayor de edad');
}else{
	console.log(nombre+' es menor de edad');
}


if (edad>=18 && edad<=54) {
console.log(nombre+' es mayor de edad');
}else if(edad>=55){
	console.log(nombre+' es viejo');
}else {
	console.log(nombre+' eres menor');
}


//if (year == 1981 || (year >= 1981 && year <= 1993)) {
	if (year == 1994 || (year >= 1994 && year <= 2000)) {
	console.log('generación Z');
}else{
	console.log('no perteneces a generación Z');
}