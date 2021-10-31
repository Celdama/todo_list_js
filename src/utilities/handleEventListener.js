const handleEventListenerModule = (() => {
  const listenerToHideForm = (wrapperForm, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        wrapperForm.classList.toggle('hidden');
      });
    });
  };

  const listenerToLoadTodoList = (btn, action) => {
    btn.addEventListener('click', () => {
      action();
    });
  };

  const listenerToInteractWithTodoItem = (todo, buttons, actions) => {
    const [updateTodo, deleteTodo, completeTodo, displayPriorityPopUp] = [
      ...actions,
    ];

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('edit-todo-btn')) {
          updateTodo(todo);
        } else if (btn.classList.contains('delete-todo-btn')) {
          deleteTodo(todo);
        } else if (btn.classList.contains('edit-priority-btn')) {
          displayPriorityPopUp();
        } else if (btn.classList.contains('done-todo-btn')) {
          completeTodo(todo);
        }
      });
    });
  };

  return {
    listenerToHideForm,
    listenerToLoadTodoList,
    listenerToInteractWithTodoItem,
  };
})();

export default handleEventListenerModule;
