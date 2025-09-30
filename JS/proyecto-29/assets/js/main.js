window.addEventListener("load", () =>{

    let controls = document.querySelectorAll(".form__control");

    controls.forEach(formControls => {

        let label = formControls.firstElementChild;
        let input = formControls.lastElementChild;

       /*  console.log(label, input); */
        
        input.addEventListener("focus", () =>{
            label.classList.remove("blur");
            label.classList.add("focus");
        });

        input.addEventListener("blur", () =>{
            if(input.value.trim() == ""){
                label.classList.remove("focus");
                label.classList.add("blur");
            }
        });
    });
});