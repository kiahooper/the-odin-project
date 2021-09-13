/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! namespace exports */
/*! export projectModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectModule\": () => /* binding */ projectModule\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\r\n\r\n    const projectModule = (() => {\r\n\r\n        // Vars\r\n        let projects = [];\r\n\r\n        // Cache DOM\r\n        const module = document.querySelector(\".project_module\");\r\n        const new_project_input = module.querySelector(\"#new_project\");\r\n        const btn = module.querySelector(\"button\");\r\n        const project_list = module.querySelector(\"#projects\");\r\n\r\n        // Event listeners\r\n        btn.addEventListener('click', addNewProject);\r\n        addProjectRadioEventListeners();\r\n\r\n        // Factory function\r\n        const Project = (title) => {\r\n            const obj = {\r\n                title: title,\r\n                todos: []\r\n            }\r\n\r\n            const get = (key) => obj[key];\r\n\r\n            const addTodo = (todo) => {\r\n                obj.todos.push(todo);\r\n            }\r\n            \r\n            return {get, addTodo}\r\n        }    \r\n\r\n        // Functions\r\n        function render() {\r\n\r\n            project_list.innerHTML = \"\";\r\n\r\n            projects.forEach((project, index) => {\r\n\r\n                let ele = document.createElement('div');\r\n                ele.innerHTML = `<input type=\"radio\" id=\"project-${index}\" data-id=\"${index}\" name=\"project\" class=\"tabs_radio\">\r\n                                <label for=\"project-${index}\" class=\"tabs_label\">\r\n                                    ${project.get(\"title\")}\r\n                                </label>`;\r\n                project_list.appendChild(ele);\r\n            })\r\n            addProjectRadioEventListeners();\r\n        }\r\n\r\n        function addNewProject() {\r\n            let project = Project(new_project_input.value);\r\n            projects.push(project);\r\n            render();\r\n            new_project_input.value = \"\";\r\n\r\n            // Choose newly created project;\r\n            let index = projects.length-1;\r\n            module.querySelector(`#project-${index}`).click();\r\n        }\r\n\r\n        function addProjectRadioEventListeners() {\r\n            module.querySelectorAll(\"input[type=radio]\").forEach(project => {\r\n                project.addEventListener('click', showProject)\r\n                });    \r\n        }\r\n\r\n        function showProject(e) {\r\n            let project = e.target;\r\n            _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.emit('projectSelected', project.dataset.id);\r\n        }\r\n\r\n        function initialize() {\r\n            let default_project = Project('Default');\r\n            projects.push(default_project);\r\n            _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.events.on('todoEventListenersInitialized', () => {\r\n                module.querySelector(\"#project-0\").click();\r\n            })\r\n            render();\r\n        }\r\n        \r\n        initialize();\r\n\r\n        return {Project, projects}\r\n\r\n    })();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/*! namespace exports */
/*! export events [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => /* binding */ events\n/* harmony export */ });\n\r\n//events - a super-basic Javascript (publish subscribe) pattern\r\n\r\nvar events = {\r\n    events: {},\r\n    on: function (eventName, fn) {\r\n      this.events[eventName] = this.events[eventName] || [];\r\n      this.events[eventName].push(fn);\r\n    },\r\n    off: function(eventName, fn) {\r\n      if (this.events[eventName]) {\r\n        for (var i = 0; i < this.events[eventName].length; i++) {\r\n          if (this.events[eventName][i] === fn) {\r\n            this.events[eventName].splice(i, 1);\r\n            break;\r\n          }\r\n        };\r\n      }\r\n    },\r\n    emit: function (eventName, data) {\r\n      if (this.events[eventName]) {\r\n        this.events[eventName].forEach(function(fn) {\r\n          fn(data);\r\n        });\r\n      }\r\n    }\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack://todo-list/./src/pubsub.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! namespace exports */
/*! export todoModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoModule\": () => /* binding */ todoModule\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\r\n\r\n\r\n    const todoModule = (() => {\r\n\r\n        // Vars\r\n        let selectedProject;\r\n        let todos;\r\n    \r\n        // Cache DOM \r\n        const module = document.querySelector(\".todo_module\");\r\n        const new_task_btn = module.querySelector(\"#new_task_btn\");\r\n        const new_task_form = module.querySelector(\".new_task_form\");\r\n        const edit_task_form = module.querySelector(\".edit_task_form\");\r\n        const todo_list = module.querySelector(\".todo_list\");\r\n        const ul = todo_list.querySelector(\"#list\");\r\n        const template = document.querySelector(\"#todo_list_template\");\r\n    \r\n        // Event listeners\r\n        new_task_btn.addEventListener('click', () => showForm(new_task_form));\r\n        new_task_form.addEventListener('submit', addNewTask);\r\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.events.on('projectSelected', changeSelectedProject);\r\n    \r\n        // Initialize\r\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.events.emit('todoEventListenersInitialized');\r\n    \r\n        // Factory function / could be own module\r\n        const Todo = (title, description, dueDate, priority, notes, completed) => {\r\n    \r\n            const obj = {\r\n                title, \r\n                description, \r\n                dueDate, \r\n                priority, \r\n                notes, \r\n                completed\r\n            }\r\n    \r\n            const get = (key) => obj[key];\r\n    \r\n            const set = (items) => {\r\n                Object.entries(items).forEach(item => {\r\n                    let key = item[0];\r\n                    let newValue = item[1];\r\n                    obj[key] = newValue;\r\n                })\r\n                renderTodoList();\r\n            };\r\n    \r\n            return {\r\n                get,\r\n                set\r\n                };\r\n        }\r\n    \r\n        // Functions\r\n        function renderTodoList() {\r\n\r\n            if (todos.length) {\r\n\r\n                ul.innerHTML = \"\";\r\n\r\n                todos.forEach((todo, index) => {\r\n    \r\n                    template.content.querySelector(\".todo_checkbox_and_id\").innerHTML = \r\n                        `<input type=\"checkbox\" id=\"${index}\">\r\n                        <label for=\"${index}\">${todo.get(\"title\")}</label>`\r\n        \r\n                    template.content.querySelector(\".todo_detail\").innerHTML = \r\n                        `<p>Description: ${todo.get(\"description\")}</p>\r\n                        <p>Due by: ${todo.get(\"dueDate\")}</p>\r\n                        <p>Notes: ${todo.get(\"notes\")}</p>`\r\n         \r\n                    const clone = document.importNode(template.content, true);\r\n                    ul.appendChild(clone);\r\n                    addTodoEventListeners();\r\n                });\r\n\r\n            } else {\r\n                ul.innerHTML = \"You don't have any tasks yet!\"\r\n            }\r\n    \r\n            \r\n        }\r\n    \r\n        function showForm(form) {\r\n            todo_list.style.display = \"none\";\r\n            form.style.display = \"block\";\r\n        }\r\n    \r\n        function hideForm(form) {\r\n            todo_list.style.display = \"block\";\r\n            form.style.display = \"none\";\r\n        }\r\n    \r\n        function showTodoDetail(e) {        \r\n            e.target.querySelector(\".todo_detail\").classList.toggle(\"shown\");\r\n        }\r\n    \r\n        function addNewTask(e) {\r\n            e.preventDefault();\r\n\r\n            let title = new_task_form.querySelector(\"#title\").value;\r\n            let description = new_task_form.querySelector(\"#description\").value;\r\n            let dueDate = new_task_form.querySelector(\"#dueDate\").value;\r\n            let priority = new_task_form.querySelector(\"#priority\").checked;\r\n            let notes = new_task_form.querySelector(\"#notes\").value;\r\n            let completed = false;\r\n            let todo = Todo(title, description, dueDate, priority, notes, completed);\r\n\r\n            selectedProject.addTodo(todo);\r\n            new_task_form.reset();\r\n            renderTodoList();\r\n            hideForm(new_task_form);\r\n        }\r\n    \r\n        function addTodoEventListeners() {\r\n            const remove_btns = document.querySelectorAll(\".remove\");\r\n            remove_btns.forEach(button => button.addEventListener('click', removeTodo))\r\n    \r\n            const edit_btns = document.querySelectorAll(\".edit\");\r\n            edit_btns.forEach(button => button.addEventListener('click', editTodo))\r\n    \r\n            const list_items = todo_list.querySelectorAll('li');\r\n            list_items.forEach(item => item.addEventListener('click', showTodoDetail));\r\n        \r\n            //not working/////////!!!!!!!\r\n            const checkboxes = document.querySelectorAll('input[type=\"checbox\"]');\r\n            console.log(checkboxes);\r\n            checkboxes.forEach(box => box.addEventListener('checked', function(e) {\r\n                e.target.classList.toggle('completed');\r\n            }));\r\n        }\r\n    \r\n        function removeTodo(e) {\r\n            const todo_index = e.target.parentNode.querySelector(\"input\").id;\r\n            todos.splice(todo_index, 1);\r\n            renderTodoList();\r\n        }\r\n    \r\n        function editTodo(e) {\r\n            populateEditForm(e);\r\n            edit_task_form.addEventListener('submit', (event) => {\r\n                event.preventDefault();\r\n                const todo_index = e.target.parentNode.querySelector(\"input\").id;\r\n                const todo = todos[todo_index];\r\n                let title = edit_task_form.querySelector(\"#new_title\").value;\r\n                let description = edit_task_form.querySelector(\"#new_description\").value;\r\n                let dueDate = edit_task_form.querySelector(\"#new_dueDate\").value;\r\n                let priority = edit_task_form.querySelector(\"#new_priority\").checked;\r\n                let notes = edit_task_form.querySelector(\"#new_notes\").value;\r\n    \r\n                // emit change here to set instead\r\n                todo.set({\"title\": title, \r\n                        \"description\": description, \r\n                        \"dueDate\": dueDate, \r\n                        \"priority\": priority, \r\n                        \"notes\": notes});\r\n    \r\n                hideForm(edit_task_form);\r\n            });\r\n        }\r\n    \r\n    \r\n        function populateEditForm(e) {\r\n            const todo_index = e.target.parentNode.querySelector(\"input\").id;\r\n            const todo = todos[todo_index];\r\n            let form_elements = edit_task_form.querySelectorAll('input');\r\n            form_elements.forEach(element => {\r\n                    if (element.type === \"checkbox\") {\r\n                        element.checked = todo.get([element.dataset.name]);\r\n                    } else {\r\n                        element.value = todo.get([element.dataset.name]); \r\n                    }\r\n                });\r\n    \r\n            showForm(edit_task_form);\r\n        }\r\n    \r\n        function changeSelectedProject(index) {\r\n            selectedProject = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectModule.projects[index];\r\n            todos = selectedProject.get('todos');\r\n            renderTodoList();\r\n        }\r\n    \r\n        return {Todo};\r\n    \r\n    })();\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;