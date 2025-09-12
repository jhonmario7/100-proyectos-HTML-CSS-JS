window.addEventListener("DOMContentLoaded", () => {

    /* SACAMOS NUESTRA DATA */
    console.log(screen.width, screen.height, window.location.href);


    let data = document.querySelector('#data');

    data.innerHTML += "<h2> Anchura: " + window.innerWidth+' pixeles </h2>';
    data.innerHTML += "<h2> Altura: " + window.innerHeight+' pixeles </h2>';
    data.innerHTML += "<h2> URL: " + window.location.href+'</h2>';
    
    /* htpps://victorroblesweb.es/ruta */
    window.open("https://victorroblesweb.es", "blank")


})