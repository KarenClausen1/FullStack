'use strict'

window.addEventListener('load', () => {
    console.log('dom cargado');

    //selecionamos en id del formulario
    var formulario = document.querySelector('#formulario');
    //selecionamos la clase del div dashed
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none'; //ponemos al div en none para q no se vea


    //al tocar el boton submit atrapo el evento
    formulario.addEventListener('submit', function() {
   
    console.log('evento submit capturado');
    //value es el valor de el input (lo q tiene escrito)
    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = parseInt(document.querySelector('#edad').value);

    //VALIDAR
    //trim elimina los espacios en blanco en ambos extremos del string
    //esta es una forma de validar
    if (nombre.trim() == null || nombre.trim().length == 0) {

        alert('el nombre no es valido');
        document.querySelector('#error_nombre').innerHTML = 'el nombre esta mal <br>';
        return false; //sale de la funcion con un false
    } 

    //esta es otra
    if (apellidos.trim() == null || apellidos.trim().length == 0) {

        alert('el apellidos no es valido');
        return false;
    }

    //isNaN es una función de alto nivel y no está asociada a ningún objeto.
    // isNaN intenta convertir el parámetro pasado a un número.
    // Si el parámetro no se puede convertir, devuelve true
    //en caso contrario, devuelve false

    if (edad == null || edad <= 0 || isNaN(edad) == true) {

        alert('la edad no es valida');
        return false;
    }

    box_dashed.style.display = 'block'; //lo ponemos en block para q se vea

    var p_nombre = document.querySelector('#p_nombre span');
    var p_apellidos = document.querySelector('#p_apellidos span');
    var p_edad = document.querySelector('#p_edad span');

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    });

});