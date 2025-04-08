'use strict'
var numero = 12;
if (numero == '12') {
    console.log('pasa');
}

//pruebas con let-var

//prueba con var

var numero= 40;
console.log(numero);


if (true) {
    var numero = 50;
    console.log(numero);//valor 50
    }

    console.log(numero);//valor 50

    //prueba con let
var texto='curso js con adrian lisciotti';
console.log(texto);

/*la diferencia es q con var definimos una variable global y 
con let a nivel de bloke*/
if (true) {
    let texto='Master de desarrollo web con adrian lisciotti ';
    console.log(texto);
    }

    console.log(texto);