'use strict'

//transformacion de texto

var numero = 25;
var texto1 = '  bienvenido al curso javascript curso genial  ';
var texto2 = 'ES MUY BUEN CURSO';


var dato = numero.toString();
dato = texto1.toUpperCase(); //poner mayuscula
dato = texto2.toLowerCase(); //poner minuscula
//console.log(typeof dato);
console.log(dato);

//calcular longitud
var nombre1 = '';
var nombre2 = ['romina', 'malaspina'];
console.log(nombre1.length); //o sea este va dar 0
console.log(nombre2.length); //este va dar 2

//concatenar-unir textos
var textoTotal = texto1.concat(texto2+' que bueno');

console.log(textoTotal);

/*indexOf nos busca en que numero de caracter se encuentra*/
var busqueda = texto1.indexOf('curso');
/*lastIndexOf si hay dos palabras iguales nos busca la ultima palabra*/
var busqueda = texto1.lastIndexOf('curso');
//search lo mismo nos busca donde esta la palabra 
//si no estuviera la palabra nos marca un numero negativo
var busqueda = texto1.search('curso');
console.log(busqueda);

//match me busca la palabra y detalla con un array con el numero en el q se encuentra la palabra el resto del texto etc..
var busqueda = texto1.match('curso');
console.log(busqueda);
/*me busca y me muestra mas de una palabra como array o sea si hay dos llamadas curso me muestra esas dos como array */
var busqueda = texto1.match(/curso/g);
console.log(busqueda);
/*substr(14,5) despues del caracter 14 me muestra los siguientes 5 caracteres q hay*/
var busqueda = texto1.substr(16,5);
console.log(busqueda);
/*charAt me saca la letra caracter que le indico */
var busqueda = texto1.charAt(42);
console.log(busqueda);
/*startsWith me devuelve un true pero es para buscar solo la primer palabra del texto si esta bienvenido en la primera pone true*/
var busqueda = texto1.startsWith('bienvenido');
console.log(busqueda);
/*endsWith me devuelve un true pero es para buscar solo la ultima palabra del texto*/
var busqueda = texto1.endsWith('genial');
console.log(busqueda);

/*includes me devuelve true si encuentra la palabra*/
var busqueda = texto1.includes('javascript');
console.log(busqueda);
//replace remplaza la palabra
var busqueda = texto1.replace('javascript', 'Angular');
console.log(busqueda);
//slice me devuelve a partir del caracter 14 hasta el 22 
//puedo poner 14 solo tambien
var busqueda = texto1.slice(14, 22);
console.log(busqueda);
//split me convierte el texto en array y con (' ') los separa individualmente poniendo cada palabra en indice 0,1,2..
var busqueda = texto1.split(' ');
console.log(busqueda);
/*trim me quita los espacios sobrantes por delante o por detras*/
var busqueda = texto1.trim().split(' ');
console.log(busqueda);