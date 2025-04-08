'use strict'
/*APPI REST ES UN SERVICIO O UN BAcKEND Q nos devuelve datos de una base de datos
    en json recibe peticiones por post get put delete etc..*/
    
    //PAGINA QUE TIENEN LOS FETCH (los servicios appis rest) https://reqres.in/

    /*fetch es un metodo q hace peticiones ajax 
    y nos va permitir consumir datos de servicios externos*/
    //fetch (ajax) y peticiones a servicios / apis rest

/*Las peticiones AJAX son solicitudes realizadas por código JavaScript desde un navegador
web hacia un servidor, sin necesidad de recargar la página completa. 

Asincronismo: Permite que las solicitudes se realicen de forma asíncrona, 
lo que significa que el navegador puede continuar ejecutando otras tareas 
mientras espera la respuesta del servidor.

Envío de solicitud: El código JavaScript envía una solicitud a una URL específica
en el servidor.

Respuesta del servidor: Cuando el servidor procesa la solicitud, 
envía una respuesta al navegador.

Función de devolución: Una vez que se recibe la respuesta, 
se ejecuta una función de devolución en JavaScript para manejar los datos recibidos.

Las peticiones AJAX son fundamentales para crear aplicaciones web interactivas y dinámicas,
ya que permiten actualizar partes específicas de una página sin recargarla por completo.
*/

window.addEventListener('load', () => {

    var div_usuarios = document.querySelector('#usuarios');
    var div_usuario = document.querySelector('#usuario');

    function getUsuarios() {
        //fetch entonces este metodo recibe una url q ocupa un json y esto seria una PROMESA y esta el metodo .then q captura 
        return fetch('https://reqres.in/api/users'); //accede a un servicio remoto que tiene usuarios hace la peticion
    }

    function getUsuario() {
        return fetch('https://reqres.in/api/users/2'); //accede a un servicio remoto que tiene un usuario en concreto hace la peticion
    }

    //una promesa es un objeto que nace de una operación asincrónica
    //llamamos a esta funcion q contiene la promesa remota
    getUsuarios()
    /*.then(function(data){//.then para manejar la promesa
        return data.json();//lo formateamos a json
    })*/
    .then(data => data.json())
    .then(users => {
        //console.log(users.data);
        listadoDeUsuarios(users.data); //llamo a la funcion
        return getUsuario(); //retorno esta funcion q contiene la promesa remota
    })
    .then(data => data.json()) //lo formateamos a json
    .then(user => {

        mostrarUsuario(user.data);
        return getInfo(); //retorno esta funcion q contiene la promesa creada
    })
    .then(data => {
        console.log(data);
    })
    //capturar error en las promesas
    .catch(error => {
       // alert('error en las peticiones');
       console.log(error);
    });

    function listadoDeUsuarios(usuarios) {

        //map es como el foreach 
        //entonces en una funcion de kalback va a recorrer usuarios tratando cada elemento y construye un nuevo array para los resultados, user seria el elemento ,i seria el indice
        usuarios.map((user, i) => {

            //let esto permite cierta integridad que no era posible con ‘var’ y nos salvaguarda de re declarar una variable accidentalmente.
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ' - ' + user.first_name + ' ' + user.last_name;

            //le ponemos el nombre a el div
            //appendChild solo es para nodos en cambio append es nodos y cadenas de string
            //Un nodo en el DOM es cualquier etiqueta, elemento del cuerpo, como un párrafo,
            //el mismo body o incluso las etiquetas de una lista
            div_usuarios.appendChild(nombre);

            document.querySelector('.loading').style.display = 'none';

        });

    }

    function mostrarUsuario(user) {

        //let esto permite cierta integridad que no era posible con ‘var’ y nos salvaguarda de re declarar una variable accidentalmente.
        let nombre = document.createElement('h4'); //creo un h4
        let avatar = document.createElement('img'); //creo un img
        nombre.innerHTML = user.first_name + ' ' + user.last_name; //le ingresamos el nombre y apellido al h4
        avatar.src = user.avatar; //con user.avatar le ingresamos la url de la imagen
        avatar.width = '100';

        //le ingresamos el nombre a el div
        div_usuario.appendChild(nombre);
        //le ingresamos la imagen al div
        div_usuario.appendChild(avatar);

        document.querySelector('#usuario .loading').style.display = 'none';

    }

    //CREANDO PROMESA 
    function getInfo() {

        /*hace el objeto*/
        var persona = {
            nombre: 'Adrian',
            apellido: 'Lisciotti',
            url: 'adrianweb.online'
        };
        /*quiero q se muestre*/
        return new Promise((resove, reject) => {
            var persona_string = JSON.stringify(persona); //guardo objeto en formato string
            if (typeof persona_string != 'string' || persona_string == '') return reject('error'); //if resumido no hace falta poner {} con el if asi .. SI ES DISTINTO A STRING o es igual a nada ENTRO

            return resove(persona_string); //SI NO hay error retorno persona_string
        });

    }

});//fin de load