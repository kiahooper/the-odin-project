import {projectModule} from './projects.js';
import {events} from './pubsub.js';

    const todoModule = (() => {

        // Vars
        let selectedProject;
        let todos;
    
        // Cache DOM 
        const module = document.querySelector(".todo_module");
        const new_task_btn = module.querySelector("#new_task_btn");
        const new_task_form = module.querySelector(".new_task_form");
        const edit_task_form = module.querySelector(".edit_task_form");
        const todo_list = module.querySelector(".todo_list");
        const ul = todo_list.querySelector("#list");
        const template = document.querySelector("#todo_list_template");
    
        // Event listeners
        new_task_btn.addEventListener('click', () => showForm(new_task_form));
        new_task_form.addEventListener('submit', addNewTask);
        events.on('projectSelected', changeSelectedProject);
    
        // Initialize
        events.emit('todoEventListenersInitialized');
    
        // Factory function / could be own module
        const Todo = (title, description, dueDate, priority, notes, completed) => {
    
            const obj = {
                title, 
                description, 
                dueDate, 
                priority, 
                notes, 
                completed
            }
    
            const get = (key) => obj[key];
    
            const set = (items) => {
                Object.entries(items).forEach(item => {
                    let key = item[0];
                    let newValue = item[1];
                    obj[key] = newValue;
                })
                renderTodoList();
            };
    
            return {
                get,
                set
                };
        }
    
        // Functions
        function renderTodoList() {

            if (todos.length) {

                ul.innerHTML = "";

                todos.forEach((todo, index) => {
    
                    template.content.querySelector(".todo_checkbox_and_id").innerHTML = 
                        `<input type="checkbox" id="${index}">
                        <label for="${index}">${todo.get("title")}</label>`
        
                    template.content.querySelector(".todo_detail").innerHTML = 
                        `<p>Description: ${todo.get("description")}</p>
                        <p>Due by: ${todo.get("dueDate")}</p>
                        <p>Notes: ${todo.get("notes")}</p>`
         
                    const clone = document.importNode(template.content, true);
                    ul.appendChild(clone);
                    addTodoEventListeners();
                });

            } else {
                ul.innerHTML = "You don't have any tasks yet!"
            }
    
            
        }
    
        function showForm(form) {
            todo_list.style.display = "none";
            form.style.display = "block";
        }
    
        function hideForm(form) {
            todo_list.style.display = "block";
            form.style.display = "none";
        }
    
        function showTodoDetail(e) {        
            e.target.querySelector(".todo_detail").classList.toggle("shown");
        }
    
        function addNewTask(e) {
            e.preventDefault();

            let title = new_task_form.querySelector("#title").value;
            let description = new_task_form.querySelector("#description").value;
            let dueDate = new_task_form.querySelector("#dueDate").value;
            let priority = new_task_form.querySelector("#priority").checked;
            let notes = new_task_form.querySelector("#notes").value;
            let completed = false;
            let todo = Todo(title, description, dueDate, priority, notes, completed);

            selectedProject.addTodo(todo);
            new_task_form.reset();
            renderTodoList();
            hideForm(new_task_form);
        }
    
        function addTodoEventListeners() {
            const remove_btns = document.querySelectorAll(".remove");
            remove_btns.forEach(button => button.addEventListener('click', removeTodo))
    
            const edit_btns = document.querySelectorAll(".edit");
            edit_btns.forEach(button => button.addEventListener('click', editTodo))
    
            const list_items = todo_list.querySelectorAll('li');
            list_items.forEach(item => item.addEventListener('click', showTodoDetail));
        
            //not working/////////!!!!!!!
            const checkboxes = document.querySelectorAll('input[type="checbox"]');
            console.log(checkboxes);
            checkboxes.forEach(box => box.addEventListener('checked', function(e) {
                e.target.classList.toggle('completed');
            }));
        }
    
        function removeTodo(e) {
            const todo_index = e.target.parentNode.querySelector("input").id;
            todos.splice(todo_index, 1);
            renderTodoList();
        }
    
        function editTodo(e) {
            populateEditForm(e);
            edit_task_form.addEventListener('submit', (event) => {
                event.preventDefault();
                const todo_index = e.target.parentNode.querySelector("input").id;
                const todo = todos[todo_index];
                let title = edit_task_form.querySelector("#new_title").value;
                let description = edit_task_form.querySelector("#new_description").value;
                let dueDate = edit_task_form.querySelector("#new_dueDate").value;
                let priority = edit_task_form.querySelector("#new_priority").checked;
                let notes = edit_task_form.querySelector("#new_notes").value;
    
                // emit change here to set instead
                todo.set({"title": title, 
                        "description": description, 
                        "dueDate": dueDate, 
                        "priority": priority, 
                        "notes": notes});
    
                hideForm(edit_task_form);
            });
        }
    
    
        function populateEditForm(e) {
            const todo_index = e.target.parentNode.querySelector("input").id;
            const todo = todos[todo_index];
            let form_elements = edit_task_form.querySelectorAll('input');
            form_elements.forEach(element => {
                    if (element.type === "checkbox") {
                        element.checked = todo.get([element.dataset.name]);
                    } else {
                        element.value = todo.get([element.dataset.name]); 
                    }
                });
    
            showForm(edit_task_form);
        }
    
        function changeSelectedProject(index) {
            selectedProject = projectModule.projects[index];
            todos = selectedProject.get('todos');
            renderTodoList();
        }
    
        return {Todo};
    
    })();


export {todoModule}