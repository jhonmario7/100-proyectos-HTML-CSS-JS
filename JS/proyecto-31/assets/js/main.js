window.addEventListener("DOMContentLoaded", ()=>{

    //Select elementos del Dom:

    let btnPrev = document.querySelector(".btns__prev");
    let btnNext = document.querySelector(".btns__next");
    let progressBar = document.querySelector(".steps__bar");
    let stepCircle = document.querySelectorAll(".steps__step")


    let progress = 0;/* Altura barra progreso */
    let counter = 1; /* Contados de pasos */

    btnNext.addEventListener("click", () =>{

        counter++;
        progress += 25;

        progressBar.style.height = progress +"%";
    });



});