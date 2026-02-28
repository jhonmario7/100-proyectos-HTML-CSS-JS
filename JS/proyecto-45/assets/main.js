window.addEventListener("load", () => {

    let layout = document.querySelector(".layout");
    let upBotton = document.querySelector(".btns__up");
    let downBotton = document.querySelector(".btns__down");
    let left = document.querySelector(".layout__left");
    let right = document.querySelector(".layout__right");

    let sliderLenght = document.querySelectorAll(".left__bg").length;
    let sliderIndex = 0;

    let actions = (action) => {

        if (action == "up") {

            sliderIndex++;

            if (sliderIndex > sliderLenght - 1) {
                sliderIndex = 0;
            }

        } else if (action == "dowm") {

            sliderIndex--;

            if (sliderIndex < 0) {
                sliderIndex = sliderLenght - 1;
            }
        }

    let windowHeight = layout.clientHeight;

    console.log(sliderIndex, windowHeight);

    }

    upBotton.addEventListener("click", () => {
        actions("up");
    });


    downBotton.addEventListener("click", () => {
        actions("dowm");
    });

    
});