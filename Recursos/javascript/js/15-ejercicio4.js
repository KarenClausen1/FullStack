'use strict'

//mostrar toodos los numeros impares entre dos numeros introducidos por el usuario

do {
    var numero1=parseInt(prompt('ingrese numero 1 ',0));
    var numero2=parseInt(prompt('ingrese numero 2 ',0));
 }while (isNaN(numero1) || isNaN(numero2))

 if (numero1 < numero2) {
/*for (var i = numero1; i <= numero2; i++) {

	if (i % 2 == 0) {
		document.write('<br>par '+i);
	}else{
		document.write('<br>impar '+i);
	}
	
}*/
while(numero1 <= numero2){

    if (numero1 % 2 == 0) {
    
    document.write('<br>par '+numero1);
    }else{
        document.write('<br>impar '+numero1);
    }
    numero1++;
    }
 }else if(numero1 > numero2){
    for (var i = numero1; i >= numero2; i--) {

        if (i % 2 == 0) {
            document.write('<br>par '+i);
        }else{
            document.write('<br>impar '+i);
        }
        
    }
 }else{
    if (numero1 % 2 == 0) {
        document.write('<br>par '+numero1);
    }else{
        document.write('<br>impar '+numero1);
    }
 }