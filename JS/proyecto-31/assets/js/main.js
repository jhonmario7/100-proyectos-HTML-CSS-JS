window.addEventListener("DOMContentLoaded", () => {

    //Select elementos del Dom:

    let btnPrev = document.querySelector(".btns__prev");
    let btnNext = document.querySelector(".btns__next");
    let progressBar = document.querySelector(".steps__bar");
    let stepCircle = document.querySelectorAll(".steps__step")


    let progress = 0;/* Altura barra progreso */
    let counter = 1; /* Contados de pasos */

    /* Funcionalidad de NEXT */

    btnNext.addEventListener("click", () => {
        counter++;
        progress += 25;


        if (counter > stepCircle.length) {
            counter = stepCircle.length;
            progress = 100;
        }

        progressBar.style.height = progress + "%";

        /* Crear la funcionalidad de habilitar y deshabilitar los botones */
        disableBtns(progress);
        /* Activar border */
        borderActive();
    });

    /* Funcionalidad de PREV */

    btnPrev.addEventListener("click", () => {
        counter--;
        progress -= 25;


        if (counter < 1) {
            counter = 1;
            progress = 0;
        }

        progressBar.style.height = progress + "%";

        /* Crear la funcionalidad de habilitar y deshabilitar los botones */
        disableBtns(progress);
        /* Activar border */
        borderActive();
    });

    let disableBtns = (progress) => {

        if (progress >= 100) {
            btnNext.setAttribute("disabled", "true");
            btnNext.classList.add("disable");
        } else {
            btnNext.removeAttribute("disabled");
            btnNext.classList.remove("disable");
        }

        if (progress <= 0) {
            btnPrev.setAttribute("disabled", "true");
            btnPrev.classList.add("disable");
        } else {
            btnPrev.removeAttribute("disabled");
            btnPrev.classList.remove("disable")
        }

    };

    let borderActive = () =>{
        stepCircle.forEach((step, i) =>{
            
            if(counter > i){
                step.classList.add("active");
                step.lastElementChild.style.opacity = 1;
            }else{
                step.classList.remove("active");
                step.lastElementChild.style.opacity = 0;  
            }
        });
    };


});