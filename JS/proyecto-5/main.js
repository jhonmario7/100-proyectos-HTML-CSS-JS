let tableContainer = document.querySelector(".tables");

/* Variable que almacene las tablas de multiplicar */
let result = 0;

/* For del 1 al 10 */
//Blucle para sacar el número de la tabla.
for (let i = 1; i <= 11; i++) {

  //Plantilla para mostrar encabezado y
  //crear tabla para las opreaciones de la tabla.

  tableContainer.innerHTML += `
      <div class="tables__item">
        <h2 class="tables__title">
          Tabla del ${i}
        </h2>
      
        <ul class="tables__list tables__list--${i}">
        </ul>
      </div>
    `;

  //Blucle para sacar número para las operaciones de las tablas.
  for (let n = 1; n <= 10; n++) {

    //Calcular resultado.
    result = i * n;

    //Sacar caja donde mostrar operaciones.
    let list = document.querySelector(".tables__list--" + i);

    //Agrega operación:
    list.innerHTML += `<li class='list__item'>${
      i + " x " + n + " = " + result
    }</li>`;
  }
}
