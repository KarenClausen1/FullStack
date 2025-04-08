'use strict'

window.addEventListener('load', () => {

    if (typeof(Storage) !== 'undefined') {

        console.log('localStorage disponible');
        
    } else {
        console.log('incompatible');
    }


     //guardar datos
    //PARA VER EL STORAGE Q ES COMO UNA SESSION EN JAVAsCRIP 
    //SE PUEDE VER EN inspeccionar elemento APPLICATION/STORAGE AHI VES LA KEY Y EL VALUE
    //en este caso KEY es titulo y VALUE es curso de javaScrip
    localStorage.setItem('titulo', 'curso de javaScrip'); //setItem esto invoca de parametros una key y un valor

    //consigo un elemento del localStorage (elemento q esta en la memoria de mi navegador)
    //console.log(localStorage.getItem('titulo'));

    //document.querySelector('#peliculas').innerHTML selecciono el id peliculas y con innerHTML le digo q se guarde
    //localStorage.getItem('titulo'); la sesion 
    //document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

    //guardar objetos debo convertirlo en formato string 

    var usuario = {
        nombre: 'adrian',
        apodo: 'el programer',
        web: 'easysystemcloud.com'
    };

     //JSON.stringify(usuario) lo convierto en formato string
     localStorage.setItem('usuario', JSON.stringify(usuario));

    //para conseguir el elemento OBJETO q ya esta como string hay q hacer esto
    //JSON.parse lo convierto para mostrarlo como objeto y poder usarlo en javascrip
    var userjs = JSON.parse(localStorage.getItem('usuario'));

    console.log(userjs);

    //document.querySelector('#peliculas') selecciono el id .append(' '+userjs.web+' -'+userjs.nombre) le agrego el objeto
    document.querySelector('#peliculas').append(' ' + userjs.web + ' - ' + userjs.nombre);
    document.querySelector('#datos').append(' ' + userjs.web + ' - ' + userjs.nombre);

    localStorage.removeItem('usuario'); //elimina el localStorage del objeto usuario
    localStorage.clear(); //borra todo el localStorage

});