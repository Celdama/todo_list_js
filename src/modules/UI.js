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

  const deleteTodoUI = () => {
    const deleteTodoBtn = document.querySelectorAll('#delete-todo-btn');

    deleteTodoBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        handleTodoListModule.deleteTodoWithID(e.target.dataset.id);
        loadTodoList();
        deleteTodoUI();
      });
    });
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
      handleTodoListModule.addTodo(newTodo);
      loadTodoList();
      deleteTodoUI();
    });
  };

  const testOn = (todo) => {
    console.log(todo.id);
    console.log(todo.project);
    handleProjectListModule.getTodosByProjectName(todo.project);
    handleTodoListModule.deleteTodoWithID(todo.id);
    handleProjectListModule.deleteTodoFromProject(todo.project, todo);
    handleProjectListModule.getTodosByProjectName(todo.project);

    loadTodoList(todo.project);
  };

  const renderTodoItem = (todo) => {
    // console.log(todo);
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
    deleteBtn.onclick = () => testOn(todo);

    leftSideOfTodoItem.appendChild(doneBtn);
    leftSideOfTodoItem.appendChild(dislayTodoTitle);

    rightSideOfTodoItem.appendChild(editBtn);
    rightSideOfTodoItem.appendChild(displayPriority);
    rightSideOfTodoItem.appendChild(deleteBtn);

    todoItem.appendChild(leftSideOfTodoItem);
    todoItem.appendChild(rightSideOfTodoItem);

    return todoItem;
  };

  const getTodoInProject = () => {
    const projectName = document.getElementById('projectName');
    console.log(projectName);
    const name = projectName.textContent;

    projectName.addEventListener('click', () => {
      console.log('clicked');
      loadTodoList(name);
    });
  };

  return {
    loadTodoList,
    deleteTodoUI,
    addTodoUI,
    getTodoInProject,
  };
})();

export default UI;
