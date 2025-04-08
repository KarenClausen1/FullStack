'use strict'

//hacer un programa q muestre todos los numeros entre dos numeros introducidos por el usuario

do {
   var numero1=parseInt(prompt('ingrese numero 1 ',0));
   var numero2=parseInt(prompt('ingrese numero 2 ',0));
}while (isNaN(numero1) || isNaN(numero2))

document.write('<h1> de numero '+numero1+' a '+numero2+' estan estos numeros </h1>');

if (numero1 < numero2) {
    for (var i = numero1; i <= numero2; i++) {
        document.write('<br>'+i);
        
    }
}else if(numero1 > numero2){
    for (var i = numero1; i >= numero2; i--) {
        document.write('<br>'+i);
        
    }
}else{
    document.write('<br>'+numero1);
}