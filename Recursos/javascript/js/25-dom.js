/*DOM (modelo de objeto del documento) es una interfaz de programación para 
los documentos HTML, XML y SVG. Proporciona una representación estructurada del documento,
permitiendo a los programas modificar la estructura, estilo y contenido del documento.
Cuando una página web se carga en un navegador, el navegador construye una estructura
de árbol de objetos que representa la página web.Este árbol se conoce como el DOM.*/

'use strict'

/*getElementById me busca el id en html llamado micaja y lo guarda en la variable*/

//var caja= document.getElementById('micaja');
//console.log(caja);
//caja.style.background='blue';
/*otra manera de elegir el id o tambien puede ser una clase o etiqueta etc..*/
//var caja = document.querySelector("#micaja");
/*function cambiaColor(color) {

    caja.style.background = color;
}

cambiaColor('red');*/
//querySelector me selecciona el primer elemento indicado.
/*var etiqueta = document.querySelector("h1");
etiqueta.style.background = 'green';*/

/*innerHTML para recoger el contenido actual de un contenedor o insertar nuevo
 contenido en ese contenedor*/
//var caja = document.getElementById("micaja").innerHTML;
 //console.log(caja);
 /*cambio el contenido q es un texto*/
 var caja = document.getElementById("micaja");
 //caja.innerHTML = "el texto fue cambiado por javascript";
 //console.log(caja);
 
 caja.style.padding = "20px";
 caja.style.color = "white";
 caja.style.background = 'green';
 caja.className = 'hola';
 console.log(caja);

 /*conseguir elementos por su etiqueta*/
/*getElementsByTagName ingresa convirtiendo un array a todos los elementos indicados de dicho contenedor*/
var todoslosdiv = document.getElementsByTagName('div');
console.log(todoslosdiv); //los muestro como array
/*textContent me saca el texto que hay en esta posicion todoslosdiv[2]*/
//var contenido = todoslosdiv[2].textContent;
//console.log(contenido);
var contenido = todoslosdiv[2];
/*manipulo cambiando ese div*/
contenido.innerHTML = 'hola soy adrian';
console.log(contenido);

//CREAR ELEMENTOS ETIQUETAS ETC..

//con createElement creo un hr
//elijo el id y obtenemos la section
//var seccion = document.querySelector("#miseccion");
//var h1= document.getElementById('mih1');
//var hr = document.createElement("hr");
//append añade al dom
//seccion.append('estoy agregandome al dom');
//seccion.append(hr);
//prepend añade antes
//seccion.prepend('estoy agregandome al dom antes del elemento q ya esta');
//var p = document.createElement("p");
//p.append('estoy agregandome antes del elemento especificado')
//seccion.insertBefore(p,h1);//se posiciona primero q el elemento especificado

//elijo el id
var seccion = document.querySelector("#miseccion");
//con createElement creo un hr
var hr = document.createElement("hr");
var h1= document.getElementById('mih1');
/*con este for voy iterando los div ,valor seria el indice(la posicion)*/
for (let valor in todoslosdiv) {

    //todoslosdiv q es el vector con posicion [valor] y .textContent q recoge el texto y si es == a string entro al if
    //este if lo hago porque el vector todoslosdiv tiene otros valores autogenerados y solo me interesa el string 
    if (typeof todoslosdiv[valor].textContent == 'string') {
        //document.createElement creo el elemento
        var parrafo = document.createElement("p");
        //createTextNode creo el texto q en este caso con textContent agarro el texto q tienen los div
        var texto = document.createTextNode(todoslosdiv[valor].textContent);

        //con append le añade el texto al parrafo
        parrafo.append(texto);

        //append añade despues
        seccion.append(parrafo);
    }

}

seccion.append(hr);

//conseguir elementos por su clase
//getElementsByClassName es recomendable para seleccionar muchas clases  
//porque querySelector solo agarra una 
var divrojos = document.getElementsByClassName('rojo');
var divamarillos = document.getElementsByClassName('amarillo');
//console.log(divrojos);
//divrojos.style.background='red';
divamarillos[0].style.background = 'yellow';

for (var indice in divrojos) {

    if (divrojos[indice].className == 'rojo') {
        divrojos[indice].style.background = 'blue';
    }
}

var elems_varios = document.querySelectorAll("h1, #mih1, .amarillo, h3");
console.log(elems_varios);
var seccion = document.querySelector("#miseccion");
elems_varios.forEach((element)=>{
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(element.innerHTML);//recogemos el contenido
    parrafo.append(texto);
    seccion.append(parrafo);
});