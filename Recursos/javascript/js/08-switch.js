'use strict'

/*switch es una estructura de control que 
permite ejecutar diferentes casos según el valor de una 
expresión o variable.*/

var edad =75;
var imprime= '';

switch(edad){
case 18:
imprime='Acabas de cumplir la mayoria de edad';
break;
case 25:
imprime='ya eres un adulto';
break;
case 40:
imprime='la crisis de los 40';
break;
case 75:
imprime='eres ya un anciano';
break;
default:
imprime='tu edad es neutra';
break;
}

console.log(imprime);