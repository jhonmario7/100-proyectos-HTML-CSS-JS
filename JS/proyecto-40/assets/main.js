window.addEventListener("load", () =>{

    let stars = document.querySelectorAll(".stars__star");

    console.log(stars);

    stars.forEach((star, index) =>{

        star.addEventListener("mouseover", () =>{

              // Remover la clase 'active' de todas las estrellas

            stars.forEach(star => {

                if(star.classList.contains("active")){
                    star.classList.remove("active");
                }
            });


             // Agregar la clase 'active' a las estrellas desde 0 hasta index

            for (let count = 0; count <= index; count++){
                
                let starActual = stars[count];

                if(!starActual.classList.contains("active")){
                    starActual.classList.add("active");
                }
            }
            // star.classList.add("active");
        });

    });
    


});