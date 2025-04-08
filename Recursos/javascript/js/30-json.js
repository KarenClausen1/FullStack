'use strict'

window.addEventListener('load', () => {

    //OBJETO JSON

    //defino lo q seria la clase
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'EE.UU'
    };

    pelicula.titulo = 'Superman Beging';

    console.log(pelicula.titulo);

    var peliculas = [
        { titulo: 'Tachero nocturno', year: 1991, pais: 'Argentina' },
        pelicula

    ];

    console.log(peliculas);

    var caja_peliculas = document.querySelector('#peliculas');
    
    for (let value in peliculas) {
        var p = document.createElement('p');
        p.append(peliculas[value].titulo + " " + peliculas[value].year);
        caja_peliculas.append(p);
    }

    
});//fin del evento load