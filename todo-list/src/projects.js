import { events } from "./pubsub.js";

const projectModule = (() => {
  // Vars
  let projects = [];

  // Cache DOM
  const module = document.querySelector(".project_module");
  const new_project_input = module.querySelector("#new_project");
  const btn = module.querySelector("button");
  const project_list = module.querySelector("#projects");

  // Event listeners
  btn.addEventListener("click", addNewProject);
  addProjectRadioEventListeners();

  // Factory function
  const Project = (title) => {
    const obj = {
      title: title,
      todos: [],
    };

    const get = (key) => obj[key];

    const addTodo = (todo) => {
      obj.todos.push(todo);
    };

    return { get, addTodo };
  };

  // Functions
  function render() {
    project_list.innerHTML = "";

    projects.forEach((project, index) => {
      let ele = document.createElement("div");
      ele.innerHTML = `<input type="radio" id="project-${index}" data-id="${index}" name="project" class="tabs_radio">
                                <label for="project-${index}" class="tabs_label">
                                    ${project.get("title")}
                                </label>`;
      project_list.appendChild(ele);
    });
    addProjectRadioEventListeners();
  }

  function addNewProject() {
    let project = Project(new_project_input.value);
    projects.push(project);
    render();
    new_project_input.value = "";

    // Choose newly created project;
    let index = projects.length - 1;
    module.querySelector(`#project-${index}`).click();
  }

  function addProjectRadioEventListeners() {
    module.querySelectorAll("input[type=radio]").forEach((project) => {
      project.addEventListener("click", showProject);
    });
  }

  function showProject(e) {
    let project = e.target;
    events.emit("projectSelected", project.dataset.id);
  }

  function initialize() {
    let default_project = Project("Default");
    projects.push(default_project);
    events.on("todoEventListenersInitialized", () => {
      module.querySelector("#project-0").click();
    });
    render();
  }

  initialize();

  return { Project, projects };
})();

export { projectModule };
