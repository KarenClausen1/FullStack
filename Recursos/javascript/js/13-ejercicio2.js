'use strict'

/*utilizar un bucle para calcular la suma y la media de los numeros introducidos
 hasta introducir un numero negativo y ahi mostrar el resultado*/
/*MEDIA = la suma de los numeros ingresados dividido la cantidad de los numeros */

 var suma =0;
 var contador=0;
 var media=0;


 do{
	var numero=parseInt(prompt('introduce numeros hasta q introduzcas uno negativo',0));
	//isNaN dice q si es letra devuelve true o sea si sigue siendo true sigo en el bucle
	if (isNaN(numero)) {
		numero=0;
	}else if(numero >= 0){
	
	suma=suma +numero;
	contador++;
	}
	
	
	
	 }while(numero >= 0)

	 media=suma/contador;
 console.log('la suma es: '+suma);
 console.log('la media es: '+media);/*la suma de los numeros ingresados dividido la cantidad de los numeros */

