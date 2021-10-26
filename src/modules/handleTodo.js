import { v4 as uuidv4 } from 'uuid';
// import { handleProjectListModule } from './handleProject';

const todoFactory = (title, description, project = 'inbox', priority) => ({
  id: uuidv4(),
  title,
  description,
  project: project.toLowerCase(),
  priority: priority || 'medium',
});

const todoFactory2 = (todo) => ({
  id: uuidv4(),
  title: todo.title,
  description: todo.description,
  project: todo.project.toLowerCase() || 'inbox',
  priority: todo.priority || 'medium',
});

const handleTodoListModule = (() => {
  let listTodo = [];

  const addTodo = (todo) => {
    listTodo.push(todo);
  };

  const deleteTodo = (todo) => {
    // function inutile, mais je la garde pour le moment.
    // j'utilise l'id via le dom pour delete
    listTodo = listTodo.filter((item) => item.id !== todo.id);
  };

  const deleteTodoWithID = (id) => {
    listTodo = listTodo.filter((item) => item.id !== id);
  };

  const deleteAllTodoFromDeletedProject = (projectName) => {
    listTodo = listTodo.filter((item) => item.project !== projectName);
  };

  const getTodoList = () => {
    console.table(listTodo);
    return listTodo;
  };

  const getTodoId = (todo) => {
    console.log(todo.id);
  };

  const getTodoById = (id) => {
    const todo = listTodo.find((item) => item.id === id);
    return todo;
  };

  const updateTodo = (todo, update) => {
    const todoUpdate = Object.assign(todo, update);
    return todoUpdate;
  };

  const updateTodoPriority = (todo, newPriority) => {
    const updatedTodoPriority = {
      priority: newPriority,
    };

    Object.assign(todo, updatedTodoPriority);
  };

  return {
    addTodo,
    deleteTodo,
    getTodoList,
    getTodoId,
    updateTodo,
    deleteAllTodoFromDeletedProject,
    deleteTodoWithID,
    updateTodoPriority,
    getTodoById,
  };
})();

export { todoFactory, todoFactory2, handleTodoListModule };
