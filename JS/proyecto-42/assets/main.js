window.addEventListener('load', () => {

    let input = document.querySelector(".search__input");
    let btn = document.querySelector(".search__btn");
    let container = document.querySelector(".main__users");

    // Usando JSONPlaceholder porque reqres.in está bloqueada por el firewall empresarial
    const USERS_URL = "https://jsonplaceholder.typicode.com/users";

    let getUsers = () => {

        fetch(USERS_URL)
            .then(response => response.json())
            .then(users => {

                // JSONPlaceholder devuelve el array directamente
                users.forEach(user => {
                    container.innerHTML += 
                    `<article class="users__user">
                        <div class="user__container-img">
                            <img class="user__img"
                                src="https://i.pravatar.cc/150?img=${user.id}"
                                alt="avatar">
                        </div>

                        <div class="user__content">
                            <p class="user__name">${user.name}</p>
                            <p class="user__email">${user.email}</p>
                        </div>
                    </article>`;
                });

            })
            .catch(error => console.log('Error:', error));

    }



    /* Buscador*/

    let searchUsers = (search) => {

        let users = document.querySelectorAll(".users__user");

        users.forEach(user => {

            let userInfo = user.innerText.toLowerCase();

            if(userInfo.includes(search.toLowerCase()) || search.trim() == ""){
                user.classList.remove("hidden");
            }else{
                user.classList.add("hidden");

            }

        });
    };


    /* Listar Usuario */
    getUsers();

    /* Buscar Usuarios */
    input.addEventListener("input", () => {
        searchUsers(input.value);
    });


    btn.addEventListener("click", (e) => {
        e.preventDefault();
        searchUsers(input.value);
    });

})