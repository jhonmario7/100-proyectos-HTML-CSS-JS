window.addEventListener("load", () => {

    let input = document.querySelector(".form__input");
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");

    let loadList = () => {
        let tasks = JSON.parse(localStorage.getItem("tasks"));

        if (tasks) {
            tasks.forEach(task => {
                add(task.text, task.completed)
            });
        }
    };

    let saveAndUpdate = () => {
        let allTask = document.querySelectorAll(".list__task");
        let newTask = [];

        allTask.forEach(item => {

            let task = item.querySelector(".task__text");
            let check = item.querySelector(".task__check");
            let tasObj = {
                text: task.innerText,
                completed: check.checked
            };

            newTask.push(tasObj);
        });
        localStorage.setItem("tasks", JSON.stringify(newTask));
    };

    let deleteTask = (task) =>{
        task.remove()
    };

    let add = (task, completed=false) => {
        if (task.trim() != "") {

            let item = document.createElement("li");
            item.classList.add("list__item");

            item.innerHTML += `
                        <div class="list__task">
                            <input type="checkbox" class="task__check" ${completed ? "checked" : ""} />
                            <p class="task__text">
                                ${task}
                            </p>
                        </div>
                        <!-- Caneca/Eliminar -->
                        <i class="fa-solid fa-trash list__delete"></i>
                    </li>
                `;

            if(task && completed){
                item.classList.add("list__item--completed");
            }

            list.appendChild(item);

            saveAndUpdate();
            input.value = "";

             let btnDetele = item.querySelector(".list__delete");

             btnDetele.addEventListener("click", () =>{
                deleteTask(item);
                saveAndUpdate();
             });

            let checkbox = item.querySelector(".task__check");
            checkbox.addEventListener("change", () => {
                item.classList.toggle("list__item--completed")
                saveAndUpdate();
             });



        }
    }

    /* Guardar nuevas tareas */
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // No ejecute el formulario de manera normal.
        let task = input.value;
        add(task)
    });
    loadList();

})