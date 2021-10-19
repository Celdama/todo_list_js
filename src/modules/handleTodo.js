const handleTodoList = (() => {
  let listTodo = [];

  const addTodo = (todo) => {
    listTodo.push(todo);
    console.log('todo added');
  };

  const deleteTodo = (todo) => {
    listTodo = listTodo.filter((item) => item.id !== todo.id);
    console.log('todo deleted');
  };

  const getTodoList = () => listTodo;

  return {
    addTodo,
    deleteTodo,
    getTodoList,
  };
})();

export default handleTodoList;
