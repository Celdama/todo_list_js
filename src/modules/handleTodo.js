import { v4 as uuidv4 } from 'uuid';
// import { handleProjectList } from './handleProject';

const todoFactory = (title, description, project = 'inbox') => ({
  id: uuidv4(),
  title,
  description,
  project: project.toLowerCase(),
});

const handleTodoList = (() => {
  let listTodo = [];

  const addTodo = (todo) => {
    listTodo.push(todo);
    // console.log('todo added');
  };

  const deleteTodo = (todo) => {
    listTodo = listTodo.filter((item) => item.id !== todo.id);
    console.log('todo deleted');
    console.log(todo.id);
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
    console.log(todo);
  };

  return {
    addTodo,
    deleteTodo,
    getTodoList,
    getTodoId,
    updateTodo,
  };
})();

export { todoFactory, handleTodoList };
