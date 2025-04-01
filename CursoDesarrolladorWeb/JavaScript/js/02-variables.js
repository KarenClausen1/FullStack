//el use strict sirve para que me tire error si no hago buenas practicas

'use strict'

let state = "Argentina";
let person = 'Messi';
let tShirt = '10';
let state_and_figure = state;
let state_and_person = state+ ' ' +person;
let proof = 'hola';
state = 'Brasil';
person = 'Alvarez';


console.log(state_and_figure); //Argentina
console.log(state_and_person);//Argentina Messi
console.log(proof); // hola
console.log(state); // Brasil
console.log(person,state,tShirt); //Alvarez Brasil 10. Las comas concatenan y dan espacios




