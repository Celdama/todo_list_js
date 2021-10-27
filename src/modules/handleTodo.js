import { v4 as uuidv4 } from 'uuid';

// je garde cette fonction jusqu'à la fin de mon developpment, je l'utilise pour
// créer les todos à la volée dans index.js (c'est ma première version de ma function
// factory, une fois le projet terminé je la supprimerais.)
const todoFactory = (title, description, project = 'inbox', priority = 'medium') => ({
  id: uuidv4(),
  title,
  description,
  project: project.toLowerCase(),
  priority,
});

const todoFactory2 = (todo) => ({
  id: uuidv4(),
  title: todo.title,
  description: todo.description,
  project: todo.project.toLowerCase() || 'inbox',
  priority: todo.priority || 'medium',
});

const handleTodoListModule = (() => {
  let todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const deleteTodo = (id) => {
    todoList = todoList.filter((item) => item.id !== id);
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    todoList = todoList.filter((item) => item.project !== projectName);
  };

  const getTodoList = () => {
    console.table(todoList);
    return todoList;
  };

  const getTodo = (id) => {
    const todo = todoList.find((item) => item.id === id);
    return todo;
  };

  const updateTodo = (olderTodoVersion, updateTodoVersion) => {
    const todoUpdated = Object.assign(olderTodoVersion, updateTodoVersion);
    return todoUpdated;
  };

  const updateTodoPriority = (todo, newPriorityValue) => {
    const todoPriorityValueUpdated = {
      priority: newPriorityValue,
    };

    Object.assign(todo, todoPriorityValueUpdated);
  };

  return {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
    getTodoList,
    deleteAllTodoFromDeletedProject,
    updateTodoPriority,
  };
})();

export { todoFactory, todoFactory2, handleTodoListModule };
