/* 
    DOMContentLoaded: para que se cargue el DOM antes de ejecutar el codigo
*/
window.addEventListener("DOMContentLoaded", (event) => {

    /* Variable para contadores de minutos y segundos */
    let cronoMin = document.querySelector(".crono__min");
    let cronoSec = document.querySelector(".crono__sec");

    //Variables selección botones
    let btnStar = document.querySelector(".layout_btn_start");
    let btnStop = document.querySelector(".layout_btn_stop");

    //Variables cuenta MIN y SEG
    let minutes = 0;
    let seconds = 0;
    let time = null;

    //Funcionalidad que permita contar min y segs

    //Funcion para iniciar el cronometro
    let star = () => {

        if (!time) {
            time = setInterval(() => {
                seconds++;

                if (seconds == 60) {
                    minutes++;
                    seconds = 0;
                }

                if (minutes >= 60) {
                    alert("Has excedido el tiempo limite de 60 minutos")
                    clearInterval(time);
                }

                if (seconds < 10) {

                    cronoSec.innerHTML = "0" + seconds;

                } else {
                    cronoSec.innerHTML = seconds;
                }

                if (minutes < 10) {

                    cronoMin.innerHTML = "0" + minutes;

                } else {

                    cronoMin.innerHTML = minutes;

                }

                /* console.log("Minutos: " + minutes);
                console.log("Segundos: " + seconds); */


            }, 1000)
        }
    };

    //Botón Iniciar
    btnStar.addEventListener("click", () => {
        star();
    })

    //Botón Parar
    btnStop.addEventListener("click", () => {
        if(time){
            clearInterval(time);
            time = null;
        }
    })

})