import './style.css';
import handleTodo from './modules/allTodo';
import todoFactory from './modules/createTodo';

const todo1 = todoFactory('todo1', 'some good vibe');
const todo2 = todoFactory('todo2', 'fdsfdqfd');
const todo3 = todoFactory('todo3', 'dfsqfdsqfdqfsfsdqf');
const todo4 = todoFactory('buy milk', 'buy milk for luna');

console.log(todo1);

handleTodo.addTodo(todo1);
handleTodo.addTodo(todo2);
handleTodo.addTodo(todo3);
handleTodo.addTodo(todo4);

const allTodos = handleTodo.getTodoList();
console.log(allTodos);
