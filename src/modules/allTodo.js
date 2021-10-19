const handleTodo = (() => {
  const listTodo = [];

  const addTodo = (todo) => {
    listTodo.push(todo);
    console.log('todo added');
  };

  const getTodoList = () => listTodo;

  return {
    addTodo,
    getTodoList,
  };
})();

export default handleTodo;
