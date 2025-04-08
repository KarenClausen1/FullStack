'use strict'

/*permite acceder y modificar las propiedades de las ventanas del propio navegador. */

//me saca la anchura y altura de la consola de mi navegador
function getBom(){
console.log(window.innerWidth);
console.log(window.innerHeight);
/*tambien asi*/
//console.log(screen.width);
//console.log(screen.height);
/*me saca la url*/
console.log(window.location.href);
}

function redirect(url){
window.location.href = url;
}//si pongo esto redirect('https://google.com'); en la consola se va a google

function abrirVentana(url){
	/*window.open me abre el sitio en otra ventana*/
//window.open(url);
window.open(url,'','width=400,height=300');
}

abrirVentana('https://google.com');