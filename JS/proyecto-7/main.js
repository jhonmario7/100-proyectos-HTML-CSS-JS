


/* Año actual */
const actualYear = new Date().getFullYear();

/* Año de Nacimiento */
let year = 1999;

/* Años que tenemos */
let result = 0;

do {
  /* Actualizamos la varaible de result */
  year = parseInt(prompt('¿En que año naciste?', year));

} while (year < (actualYear - 150)  || year > actualYear);

result = actualYear - year;

alert('Tienes ' + result + ' años.')









