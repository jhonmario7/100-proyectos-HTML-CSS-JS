window.addEventListener("load", () => {

    let controlRange = document.querySelector(".control_range");
    let controlNumber = document.querySelector(".control__number");
    let mainForm = document.querySelector(".main__form");

    /* Chekeo  */
    let checklMinus = document.querySelector("#letters");
    let checklMayus = document.querySelector("#mayus");
    let checkNumbers = document.querySelector("#numbers");
    let checkSymbols = document.querySelector("#sym");

    let passwordDom = document.querySelector(".generate__mail");


    let valueRange = 5;

    controlRange.addEventListener("input", () => {

        valueRange = controlRange.value;
        controlNumber.innerText = valueRange;

    });

    /* Función para crear un número randon */

    function getLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getMayus() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

    }

    function getNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 48);

    }


    function getSymbol() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 33);

    }


    mainForm.addEventListener("submit", (e) => {

        e.preventDefault();

        let password = "";

        let count = 0;

        const noneChecked = !checklMinus.checked && !checklMayus.checked && !checkNumbers.checked && !checkSymbols.checked;

        if (noneChecked) {
            passwordDom.innerText = "⚠️Selecciona al menos una opción";
            return;
        }

        do {
            if (checklMinus.checked && count < valueRange) {
                password += getLower();

                count++;
            }
            if (checklMayus.checked && count < valueRange) {
                password += getMayus();

                count++;
            }
            if (checkNumbers.checked && count < valueRange) {
                password += getNumber();

                count++;
            }
            if (checkSymbols.checked && count < valueRange) {
                password += getSymbol();

                count++;
            }
        } while (count < valueRange);



        passwordDom.innerText = password;

    });

    let copyPast = document.querySelector(".generate__icon");

    copyPast.addEventListener("click", () =>{

        let passwordCopy = passwordDom.innerText;

        navigator.clipboard.writeText(passwordCopy);


        alert("La contraseña se ha copiado en tu portapapeles!!")

    });


});