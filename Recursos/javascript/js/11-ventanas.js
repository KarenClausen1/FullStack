'use strict'
//alertas
alert('hola estamos aprendiendo javascript');
alert('esta es una ventana de alerta');
//confirmacion
var mi_resultado = confirm('¿estas seguro de querer continuar?'); //me muestra una ventanita de confirmacion donde se puede poner aceptar o cancelar
console.log(mi_resultado); //si toco aceptar me devuelve true ,cancelar false

//ingreso datos
//prompt siempre devuelve un string
var resultado = parseInt(prompt("¿que edad tienes?", 25)); //me muestra una ventanita para completar
console.log(resultado);