import { todoFactory, handleTodoListModule, todoFactory2 } from './handleTodo';
import { projectFactory, handleProjectListModule } from './handleProject';

const UI = (() => {
  console.log('UI loaded');

  const loadTodoList = (name = 'inbox') => {
    const displayTodoList = document.querySelector('.todo-list');
    displayTodoList.textContent = '';

    const todoList = handleProjectListModule.getTodosByProjectName(name);

    todoList.forEach((todo) => {
      const appendTodo = renderTodoItem(todo);
      displayTodoList.appendChild(appendTodo);
    });
  };

  const loadProjectList = () => {
    const projectList = document.getElementById('project-list');

    const projects = handleProjectListModule.getAllProject();
    // const projects = null;

    if (!projects) {
      const emptyProject = document.createElement('h3');
      emptyProject.textContent = 'No project yet';
      projectList.appendChild(emptyProject);
    } else {
      projects.forEach((project) => {
        const titleProject = document.createElement('h3');
        titleProject.textContent = project.title;
        titleProject.classList.add('project-name');
        projectList.appendChild(titleProject);
      });
    }
  };

  const deleteTodo = (todo) => {
    handleTodoListModule.deleteTodoWithID(todo.id);
    handleProjectListModule.deleteTodoFromProject(todo.project, todo);

    loadTodoList(todo.project);
  };

  const renderTodoItem = (todo) => {
    // TODO : recuperer mes deux fonctions APPENCHILD et FACTORYELEMENT
    const todoItem = document.createElement('div');
    const leftSideOfTodoItem = document.createElement('div');
    const rightSideOfTodoItem = document.createElement('div');
    const doneBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const dislayTodoTitle = document.createElement('span');
    const displayPriority = document.createElement('span');

    todoItem.classList.add('todo-item');
    leftSideOfTodoItem.classList.add('left');
    rightSideOfTodoItem.classList.add('right');

    dislayTodoTitle.textContent = `${todo.title}`;
    doneBtn.textContent = 'done';
    editBtn.textContent = 'edit';
    displayPriority.textContent = 'priority';
    deleteBtn.textContent = 'delete';
    deleteBtn.onclick = () => deleteTodo(todo);

    leftSideOfTodoItem.appendChild(doneBtn);
    leftSideOfTodoItem.appendChild(dislayTodoTitle);

    rightSideOfTodoItem.appendChild(editBtn);
    rightSideOfTodoItem.appendChild(displayPriority);
    rightSideOfTodoItem.appendChild(deleteBtn);

    todoItem.appendChild(leftSideOfTodoItem);
    todoItem.appendChild(rightSideOfTodoItem);

    return todoItem;
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(document.querySelectorAll('#add-todo-form input'))
      .reduce((acc, input) => (
        { ...acc, [input.id]: input.value }
      ), {});

    return newTodo;
  };

  const addTodoUI = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = todoFactory2(getTodoInfo());
      console.log(newTodo.project);
      handleTodoListModule.addTodo(newTodo);
      handleProjectListModule.addTodoToProject(newTodo.project, newTodo);
      loadTodoList(newTodo.project);
    });
  };

  const getTodoInProject = () => {
    const projectName = document.querySelectorAll('.project-name');
    projectName.forEach((project) => {
      console.log(project);
      project.addEventListener('click', () => {
        loadTodoList(project.textContent);
      });
    });
  };

  return {
    loadTodoList,
    loadProjectList,
    addTodoUI,
    getTodoInProject,
  };
})();

export default UI;
