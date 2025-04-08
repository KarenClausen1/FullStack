
var fecha = new Date();//con esto tengo el objeto fecha saco la fecha y hora

console.log(fecha);

var year = fecha.getFullYear();//saca el año
var mes = fecha.getMonth() + 1;//saco el mes
var dia = fecha.getDate();//saco el dia
var hora = fecha.getHours();//saco la hora
var minutos = fecha.getMinutes();//saco los minutos
var segundos = fecha.getSeconds();//saco los segundos

console.log(year);

var textoHora = `
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	 ${minutos} minutos
	 ${segundos} segundos
`;

 
//PARA SACAR FUNCIONES CON FORMATO FECHA COMO getMonth ETC.. https://www.w3schools.com/jsref/jsref_obj_date.asp 

console.log(textoHora);

//El objeto Math permite realizar tareas matemáticas
//PARA SACAR FUNCIONES MATEMATICAS COMO PI ETC.. https://www.w3schools.com/jsref/jsref_obj_math.asp
console.log(Math.ceil(Math.random()*10000));//Math.random() me saca un numero aleatorio *10000 para q me saque segun los 0 las cifras en este caso 4 cifras 
//Math.ceil le quita los decimales