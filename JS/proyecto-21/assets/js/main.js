window.addEventListener("DOMContentLoaded", (e) => {

    // Seleccionar elementos del DOM:

    let inventarioDom = document.querySelector(".main__inventario");
    let cajas = document.querySelectorAll(".inventario__caja");
    let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

    //Poner un id unico a cada caja movible

    cajas.forEach((caja, i) => {

        caja.setAttribute("id", "caja" + i);

        caja.addEventListener("dragstart", (e) => {

            e.dataTransfer.setData("id", e.target.id);

        });

    });

    //Establecer cada hueco de la estanderia, donde puedo soltar un elemento

    estanteriaDom.forEach((estanderia, i) =>{

        estanderia.addEventListener("dragover", function(e){
            e.preventDefault();
        })

        estanderia.addEventListener("drop", function(e){

            e.preventDefault();

            let cajaId = e.dataTransfer.getData("id");

            if(cajaId && cajaId != ""){

                let caja = document.querySelector("#"+cajaId)

                if(this.lastChild == null){
                    e.target.appendChild(caja);
                    this.style.boxShadow = "none"
                }else{
                    alert("Esta estanteria esta ocupada:( !!!")
                }

                estanteriaDom.forEach(estanderia => {
                    if(estanderia.lastChild == null){
                        estanderia.style.boxShadow = "0px 0px 8px black inset";
                    }
                });

                if(inventarioDom.innerHTML.trim() == ""){
                    alert("Todas las cajas, han sido guardadas :D!")
                }


            }
        });
    });

});