window.addEventListener("DOMContentLoaded", (event) => {

    let followers = document.querySelectorAll(".socials__number");
    let counter = 0;

    /* Recorrer todos los follers */
    followers.forEach(number => {
        /* Valor maximo que quiero llegar de followers */
        let max = parseInt(number.getAttribute("data-target"));
        let inter = setInterval(() => {

            /* Valor actual de las redes sociales */
            let actual = parseInt(number.innerHTML);
            counter = max / 300;

            if (actual > max) {

                number.innerHTML = max;
                clearInterval(inter);

            } else {

                number.innerHTML = Math.ceil(counter + actual);
            }
        }, 5);
    });
});