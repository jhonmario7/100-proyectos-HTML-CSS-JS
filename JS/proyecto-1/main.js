

let nombre = 'Jhon mario';
let apellidos = 'Rodriguez';
let edad = 25;
let pais = 'Colombia';
let conocimientos = [ 'html', 'css', 'js', 'angular'];


console.log(

  /* Aqui mostramos el array de conocimiento por la posición que se encuentra. */

  `Hola soy: ${nombre} ${apellidos} tengo ${edad} años, vivo en ${pais}
  y tengo los siguientes conocimientos ${conocimientos[0]},  ${conocimientos[1]},  ${conocimientos[2]},  ${conocimientos[3]}.`


);

edad = 67;
/* Con el metodo push, añado un dato más a mi array: */
conocimientos.push('php');

console.log('ahora tengo '+ edad + ' años y he aprendido '+conocimientos[4]);
