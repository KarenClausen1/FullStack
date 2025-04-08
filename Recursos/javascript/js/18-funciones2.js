'use strict'
/*
function calculadora(num1,num2,mostrar=false){
var resultado=num1+num2;
if (mostrar) {
    pantalla(resultado);
}else{
    consola(resultado);
}

}

function pantalla(resultado) {
    document.write(resultado);
}

function consola(resultado) {
    console.log(resultado);
}

calculadora(2,2,true);*/

//parametros de tipo rest y spread
//...resto se convierte en un array q contiene todo los demas parametros
//REST
function listadoDeAnimales(animal1,animal2, ...resto){
    console.log('animal1: '+animal1);
    console.log('animal2: '+animal2);
    console.log('resto: '+resto);
    }


    //listadoDeAnimales('Elefante','León','Jirafa','Rinoceronte','Cocodrilo');

    //SPREAD 

var animales = ['Tigre','Pantera'];

listadoDeAnimales(...animales,'perro','gato','loro');

