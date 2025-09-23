window.addEventListener("DOMContentLoaded", () =>{


    let input = document.querySelector(".main__input");
    let text = document.querySelector(".main__text");

/* Evento cuando yo pulso una tecla y se ejecuta la funcion */
    input.addEventListener("keydown", (e) =>{

        /* Saco el valor del input en cada tecla */
        let search = input.value;

        if(search.trim() != "" && e.code == "Enter"){

            let regExp = new RegExp(search, "gi");

            text.innerHTML = text.textContent.replace(regExp, "<span class='text__search'>$&</span>")
        }
    });
} )