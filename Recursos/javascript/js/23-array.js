'use strict'
var nombre = ['adrian', 'maria', 25, true, 'jelinek', 'romina'];


var lenguaje = new Array('php', 'jquery', 'bootstrap', 'javaScript', 33, false);

console.log(nombre, lenguaje);
console.log(nombre[2]);
/*cantidad de elementos*/
console.log(lenguaje.length);


/*var elemento = parseInt(prompt('¿q elemento del Array quieres?', 0));
if (elemento >= nombre.length) {
    alert('introduce un numero menor a: ' + nombre.length);
} else {
    document.write(nombre[elemento]);
}*/

document.write('ELEMENTOS DEl ARRAY');
document.write('<ul>');

for (var i = 0; i < nombre.length; i++) {

    document.write('<li>' + nombre[i]+'</li>');

}

document.write('<ul>');

/*foreach y viene con una funcion de callbaks 
indice,array estas dos no hacen falta */


/*lenguaje.forEach((elemento,indice,array)=>{
	console.log(array);
document.write('<li>'+indice+'-'+elemento+'</li>');
});*/

lenguaje.forEach((elemento) => {
    document.write('<li>' + elemento + '</li>');
});


var damas = ['belen', 'malaspina', 'karina', 'jelinek', 'romina'];
var damas2 = ['ana', 'maria', 'sabrina', 'sol perez', 'thalia'];
/*push agregar elementos al array*/
damas.push('lara crof');
console.log(damas);

/*array multidimensionales*/

var mujeres = [damas, damas2];
//aca accedo al array 1 posicion 1
console.log(mujeres[0][1]);
//aca accedo al array 2 posicion 3
console.log(mujeres[1][3]);



var elem = '';
//while (elem != 'terminar') {
    //elem = prompt('introduce un nombre de mujer');
    /*push agregar elementos al array*/
   // damas.push(elem);
//}

/*pop elimina el ultimo elemento de un array en este caso eliminaria el elemento acabar*/
damas.pop();

console.log(damas);

/*eliminar del array un elemento en concreto*/

/*indexOf nos busca en que numero de caracter se encuentra 
AL SER UN ARRAY CADA ELEMENTO ES COMO SI CONTARA UN CARACTER EMPEZANDO DESDE 0*/
var indice = damas.indexOf('karina');
console.log(indice);
if (indice > -1) {
    /*splice me borra en un array todos los elementos q yo le indique 
    en este caso (indice,1) indice me dice desde donde borro y el 1 cuantos
     o sea q borre solo el elemento del indice*/
    damas.splice(indice, 1);
}

console.log(damas);

/*join ME CONVIERTE EL ARRAY EN UN ESTRING SEPARANDO LOS ELEMENTOS CON COMAS*/
var damas_string = damas.join();

console.log(damas_string);

/*split(',') CONVIERTE UNa cadena TEXTO EN ARRAY*/

var cadena = 'texto1,texto2,texto3';
var cadena_array = cadena.split(',');
console.log(cadena_array);

/*sort me ordena el array de forma alfabetica*/
console.log(damas.sort());
/*reverse me muestra del ultimo elemento hasta el primero*/
console.log(damas.reverse());

/*otra forma de recorrer los array*/
//for of me lanza el elemento y for in me lanza los indices(posiciones)
document.write('<ul>');
/*damasx va tomando el la posicion del elemento del array*/
for (let damasx in damas) {
    document.write('<li>' + damas[damasx] + '</li>');
}

for (let damasx of damas) {
    document.write('<li>' + damasx + '</li>');
}

document.write('</ul>');

/*buscar */

/*tiene una funcion de calback*/
/*var busqueda=damas.find(function(dama){
	return dama == 'jelinek';
});*/

/*lo mismo pero codigo reducido find saca el string*/
var busqueda = damas.find(dama => dama == 'jelinek');

console.log(busqueda);
/*findIndex me saca el indice*/
var busqueda = damas.findIndex(dama => dama == 'jelinek');

console.log(busqueda);
/*some una forma de busqueda y comparacion con array de numero me devuelve un true o false*/
var precios = [145, 25, 45, 100, 722, 855];
var busqueda = precios.some(precio => precio >= 40);

console.log(busqueda);
