//tipos de datos
/*
[Booleano]: Representa un valor lógico verdadero o falso. Ejemplo: true o false.
[Null]: Representa un valor nulo o "sin valor". Ejemplo: null.
[Indefinido (Undefined)]: Representa una variable que no ha sido asignada o que no tiene 
un valor asignado. Ejemplo: undefined.
[Number]: Representa un valor numérico. Ejemplo: 42.
[BigInt]: Representa enteros mayores que el límite superior que puede representar 
el tipo de dato Number. Ejemplo: 9007199254740991n.
[Cadena (String)]: Representa una secuencia de caracteres. Ejemplo: "Hola mundo".

[Objeto]: Representa una colección de datos y/o funcionalidades. 
Ejemplo: { nombre: 'Juan', edad: 30 }
*/

var numero_entero=44;
var cadena_de_texto="hola que tal";
/*siempre toma en cuenta las comillas q se pusieron al principio las del medio las lee tal cual 
se pondria en la pantalla 'que'*/
var cadena_de_texto2="hola 'que' tal";
//booleano
var verdadero=true;
var falso=false;
var nulo=null;
var indefinida=undefined;
var indefinida;

console.log(cadena_de_texto,cadena_de_texto2,indefinida);
/*me dice el tipo de dato si es string o entero etc..*/
console.log(typeof(indefinida));

var numero_falso="25";
/*convierto el string a entero*/
console.log(Number(numero_falso)+5);
console.log(parseInt(numero_falso)+5);
console.log(parseFloat(numero_falso)+5);
console.log(String(numero_falso)+5);
/*me dice el tipo de dato si es string o entero etc..*/
console.log(typeof(numero_falso));