window.addEventListener("DOMContentLoaded", ()=>{

    let left = document.querySelector(".main__article--left");
    let rigth = document.querySelector(".main__article--right");


    left.addEventListener("mouseenter", () =>{
        left.classList.add("active");
        rigth.classList.remove("inactive");
    });

    left.addEventListener("mouseleave", () =>{
        left.classList.remove("active");
        rigth.classList.remove("inactive");
    });


    rigth.addEventListener("mouseenter", () =>{
        rigth.classList.add("active");
        left.classList.remove("inactive");
    });

    rigth.addEventListener("mouseleave", () =>{
        rigth.classList.remove("active");
        left.classList.remove("inactive");
    });

});