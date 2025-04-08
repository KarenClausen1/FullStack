'use strict'
/*Las funciones de callback 
son funciones que se pasan 
como argumentos (parametros) a otras funciones 
no llevan nombre por eso lo de anonimas y
se ejecutan después de que cierto 
proceso o tarea se complete */


function sumame(numer1,numer2,sumaYmuestra,sumaPorDos,callback){
	var suma =numer1+numer2;
	sumaYmuestra(suma);
	sumaPorDos(suma);
	callback();
	return suma;//anda sin o con este return
}

//en este ejemplo se invoca una funcion con dos funciones de parametro 
//dato vendria a ser suma
/*sumame(4,6,function(dato){
console.log('la suma es:',dato);
},
function(dato){
	console.log('la suma por dos es:', (dato*2));
}
);*/

//funciones FLECHA puedo agregar los callbacks de esta forma

var res=sumame(4,6, dato => {
/*la coma en el console.log le da un espacio*/
console.log('la suma es:',dato);
},
dato => {
	console.log('la suma por dos es:', (dato*2));
},
() => {
console.log('sin parametro');
}
);
console.log(res);