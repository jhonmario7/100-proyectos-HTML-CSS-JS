let marca = "Audi",
  velocidad = 200,
  stock = true,
  modelos = ["r8", "a3", "a7"];

let frase = `<p>Tenemos coches de la marca: ${marca},
van a una velocidad maxima de ${velocidad} km/h.</p>
<p> Dispones de estos modelos en stock ${stock}: </p>
 `;

/* El metodo forEach nos permite iterar y añadir con una propidad "modelo" añadirle esos modelos 
a nuestra variable frases */
modelos.forEach((modelo) => {
  frase += `- ${modelo} <br/>`;
});

/* Ahora para mostrarla en el DOM seleccionamos el DIV que queremos que le asignamos el "id"
  y con el metodo querySelector, más una almohadilla mostramos la frase como quedaría.
  */
let caja = document.querySelector("#caja");
caja.innerHTML = frase;
