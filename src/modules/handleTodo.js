import { v4 as uuidv4 } from 'uuid';

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

  const updateTodo = (todo, title, description, project) => {
    const updatedTodo = {
      title,
      description,
      project: project.toLowerCase(),
    };

    Object.assign(todo, updatedTodo);
  };

  return {
    addTodo,
    deleteTodo,
    getTodoList,
    getTodoId,
    updateTodo,
    deleteAllTodoFromDeletedProject,
    deleteTodoWithID,
  };
})();

export { todoFactory, todoFactory2, handleTodoListModule };
