window.addEventListener("load", () => {


    let main = document.querySelector(".layout__main");
    let message = document.querySelector(".main__messages");
    let form = document.querySelector(".main__form");
    let input = document.querySelector(".form__input");
    let loader = document.querySelector(".layout__loader");



    let sendMessage = (e) => {
        e.preventDefault(); /* No actualizar la pantalla, sin que refresque */

        let text = input.value;

        if (text.trim() != "") {

            message.innerHTML += `
                <article class="messages_message">
                 <p class="messages_name">Jhon Mario Rodriguez</p>
                 <p class="messages_text">${text}</p>
                </article>
            `;

            input.value = "";
        }
    };

    setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "flex";
    }, 2000);

    form.addEventListener("submit", sendMessage);

});