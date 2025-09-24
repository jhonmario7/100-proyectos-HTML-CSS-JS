window.addEventListener("DOMContentLoaded", () => {

    /* Capturar el input */
    let input = document.querySelector(".main__input");
    let main = document.querySelector(".layout__main");
    let check = document.querySelector(".icons__check");
    let xmark = document.querySelector(".icons__xmark");


    /* Cuando entramos al input */
    input.addEventListener("focus", () => {
        main.classList.add("focus");
    });

    /* Caundo salimos del input */
    input.addEventListener("blur", () => {
        main.classList.remove("focus");
    });


    input.addEventListener("keydown", () => {
        validate();
    });


    function validate() {
        let email = input.value;
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* Expresión regular para emails. */
        if (email.trim() != "") {
            let test = pattern.test(email);
            if (test) {
                check.classList.add('show');
                xmark.classList.remove('show');
            } else {
                check.classList.remove('show');
                xmark.classList.add('show');
            }
        }
    }
});