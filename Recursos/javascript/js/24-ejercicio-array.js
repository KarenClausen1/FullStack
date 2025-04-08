'use strict'
/*
1- pida 6 numeros por pantalla e ingresalos en un array
2- mostrar el array entero(todos los elementos en el cuerpo de la pagina y en la consola)
3-invertir su orden y mostrarlo
4-ordenarlo y mostrarlo
5-cuantos elementos tiene el array
6-busqeda de un valor introducido por el usuario q nos diga si lo encuentra y su indice
(se valorara el uso de funciones)
*/
/*var numeros=[22,78,1,12,77,18];
let ordenados = numeros.sort((a,b) => a - b);*/

var array = [];
var i=1;

function mostrar(array,opcional = ''){

	document.write('<h1>edades de personas '+opcional+'</h1>');

	document.write('<ul>');

	for(let variable in array){
		document.write('<li>'+array[variable]+'</li>');
	}
	
	document.write('</ul>');

    if (opcional === '') {
        console.log(array);
    }
	
	}

    do {
        var elemento=parseInt(prompt('ingrese una edad(solo numeros mayores a 0)',1));
        if (elemento > 0) {
            array.push(elemento);
            i++; 
        }
        
    } while (i <= 6);

	mostrar(array);

    var array_invertido=array.reverse();
    mostrar(array_invertido,'invertido');

	var array_ordenado=array.sort(function(a,b){return a-b});//ordena numeros de menor a mayor 

    mostrar(array_ordenado,'ordenado');

    document.write('Cantidad de elementos '+array.length);

    do {
        var edad=parseInt(prompt('ingrese una edad a buscar(solo numeros mayores a 0)',1));

    } while (isNaN(edad) || edad <= 0);//mientras edad no sea un numero

    var busqueda = array.findIndex(element => element === edad);

    if (busqueda >= 0) {
        document.write('<h1>la edad de '+edad+' si se ha encontrado, esta en la posicion '+busqueda+'</h1>');
    }else{
        document.write('<h1>la edad de '+edad+' no se ha encontrado</h1>');
    }