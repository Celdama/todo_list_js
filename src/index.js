import './style.css';
import { todoFactory, handleTodoList } from './modules/handleTodo';
import { projectFactory, handleProjectList } from './modules/handleProject';

const newTodo = todoFactory('buy milk', 'buy milk for lune');
const todo2 = todoFactory('call mom', 'call mom for birthday');
const todo3 = todoFactory('buy shirt', 'buyfdjkjfdkjkfd');
console.log(newTodo);

handleTodoList.getTodoList();
handleTodoList.addTodo(newTodo);
handleTodoList.addTodo(todo2);
handleTodoList.addTodo(todo3);
handleTodoList.getTodoList();

handleTodoList.getTodoId(todo2);
handleTodoList.updateTodo(todo2, 'call dady', 'call daaaaaad');
handleTodoList.deleteTodo(todo3);
handleTodoList.getTodoList();
