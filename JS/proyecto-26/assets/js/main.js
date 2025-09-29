window.addEventListener("DOMContentLoaded",  () =>{

    let = grayStart = document.querySelector(".main__star--gray");
    let = yellowStart = document.querySelector(".main__star--yellow");

    grayStart.addEventListener("click", () =>{

        yellowStart.classList.add("visible");
        grayStart.classList.add("yellow-color");

    });

    yellowStart.addEventListener("click", () =>{

        yellowStart.classList.remove("visible");
        grayStart.classList.remove("yellow-color");

    
    });


});