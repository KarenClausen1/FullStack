'use strict'


/*function saludo(){
	return 'hola soy leo messi';
}

console.log(saludo(),saludo());*/

//mostrar=false es un parametro opcional ya tiene algo por defecto

function calculadora(numero1,numero2,mostrar=false){

	if (mostrar == false) {

		console.log('suma: '+(numero1+numero2));
	}else{
		document.write('suma: '+(numero1+numero2));
	}

}
//si le doy a aceptar me guarda un true,cancelar false
var x=confirm('elige si lo muestro en pantalla o en consola');
console.log(x);
if (x) {//si tiene un contenido entra o si es true pero si es(false, undefined,'' o null)no
calculadora(2,2,true);
}else{
	calculadora(2,2);
}

