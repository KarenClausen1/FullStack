'use strict'
//addEventListener captura(registra) el evento
//load es el evento a registrar q seria cuando carga la pagina en el navegador
//con esto evitamos q en el html tengamos q colocar el script al final del body 
window.addEventListener('load', () =>{  

    var boton=document.querySelector("#boton");
    
    function cambiarColor(){

        var bg = boton.style.background;//ponemos el color de fondo en la variable
        if (bg == 'green') {//le preguntamos si tiene color verde
    
            boton.style.background ='red';//lo cambiamos a rojo
            
        }else{
            boton.style.background ='green';//si no a verde
        }

    }
        //click
        boton.addEventListener('click',()=>{
            cambiarColor();
        });

        //mouseover cuando paso por encima del boton
        boton.addEventListener("mouseover" , function(){
	    boton.style.background ='yellow';
        });

        //mouseout cuando sales de tocar al boton
        boton.addEventListener("mouseout" , function(){
	    boton.style.background ='#ccc';
        });

        //focus
        /*cada vez q me posiciono en el input hace esto*/
        var input=document.querySelector('#campo_nombre');
        //addEventListener puedo capturar cualquier evento
        input.addEventListener("focus", function(){
            console.log('[focus]estas adentro del input');
        });

        //blur
        /*si me salgo del input hace esto*/
        //addEventListener puedo capturar cualquier evento
        input.addEventListener("blur", function(){
            console.log('[blur]estas fuera del input');
        });

        //keydown
        /*me muestra todas las teclas q toco del teclado*/
        //String.fromCharCode atrapa algo del teclado y lo covierte en String
        input.addEventListener("keydown", function(event){
            console.log('[keydown]pulsando esta tecla', String.fromCharCode(event.keyCode));
        });

        //keyup
        /*me muestra todas las teclas q dejo de presionar del teclado*/
        //String.fromCharCode atrapa algo del teclado y lo covierte en String
        input.addEventListener("keyup", function(event){
            console.log('[keyup]tecla soltada', String.fromCharCode(event.keyCode));
        });
        
});//fin del evento LOAD