'use strict'
var nombre=prompt('ingresa tu nombre');
var apellido=prompt('ingresa tu apellido');

/*manera normal*/
//var texto='mi nombre es '+nombre+' mi apellido es '+apellido;

//interpolación de variables
/*Es una técnica para combinar
cadenas de texto con valores de 
variables de manera elegante,
sin necesidad de concatenarlas
utilizando plantillas literales.*/

var texto= `<h1>hola que tal</h1>
<h3>mi nombre es ${nombre}</h3>
<h3>mi apellido es ${apellido}</h3>
`

document.write(texto);