import { todoFactory, handleTodoListModule, todoFactory2 } from './handleTodo';
import { projectFactory, handleProjectListModule } from './handleProject';

const UI = (() => {
  console.log('UI loaded');

  const loadTodoList = () => {
    const displayTodoList = document.querySelector('.todo-list');
    displayTodoList.textContent = '';

    const todoList = handleTodoListModule.getTodoList();

    todoList.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
        <div class="left">
          <button>done</button>
          <span>${todo.title}</span>
        </div>
        <div class="right">
          <button>edit</button>
          <span>priority</span>
          <button id="delete-todo-btn" data-id=${todo.id}>delete</button>
        </div>
      `;
      displayTodoList.appendChild(todoItem);
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

  return {
    loadTodoList,
    deleteTodoUI,
    addTodoUI,
  };
})();

export default UI;
