import './style.css';
import handleTodoList from './modules/handleTodo';
import todoFactory from './modules/createTodo';

const todo1 = todoFactory('todo1', 'some good vibe');
const todo2 = todoFactory('todo2', 'fdsfdqfd');
const todo3 = todoFactory('todo3', 'dfsqfdsqfdqfsfsdqf');
const todo4 = todoFactory('buy milk', 'buy milk for luna');

// console.log(todo1);

handleTodoList.addTodo(todo1);
handleTodoList.addTodo(todo2);
handleTodoList.addTodo(todo3);
handleTodoList.addTodo(todo4);

handleTodoList.getTodoList();
// console.log(allTodos);

console.log(handleTodoList.getTodoList());

handleTodoList.deleteTodo(todo3);
console.log(handleTodoList.getTodoList());
handleTodoList.deleteTodo(todo4);
console.log(handleTodoList.getTodoList());
