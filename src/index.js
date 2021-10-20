import './style.css';
import { todoFactory, handleTodoList } from './modules/handleTodo';
import { projectFactory, handleProjectList } from './modules/handleProject';

const newTodo = todoFactory('start react', 'buy milk for lune', 'JavaScript');
const todo2 = todoFactory('call mom', 'call mom for birthday', 'Perso');
const todo3 = todoFactory('read You dont know JS', 'buy the book first', 'JavaScript');
const todo4 = todoFactory('watch barcelona', 'league des champiosn');
const deleteTodo = todoFactory('foo', 'bar', 'JAVASCRIPT');
// console.log(newTodo);

// handleTodoList.getTodoList();
handleTodoList.addTodo(newTodo);
handleTodoList.addTodo(todo2);
handleTodoList.addTodo(todo3);
handleTodoList.addTodo(todo4);
handleTodoList.addTodo(deleteTodo);
// handleTodoList.getTodoList();

// handleTodoList.getTodoId(todo2);
handleTodoList.updateTodo(todo4, 'watch Barcelona', 'Champions League', 'Football');
// handleTodoList.deleteTodo(todo3);

const newProject = projectFactory('JavaScript');
const persoProject = projectFactory('Perso');
const football = projectFactory('fooTball');

// console.log(newProject);
handleProjectList.addProject(newProject);
handleProjectList.addProject(persoProject);
handleProjectList.addProject(football);
handleProjectList.getAllProject();
handleProjectList.showAllTodos();
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(football, todo4);
handleProjectList.addTodoToProject(persoProject, todo2);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, deleteTodo);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, newTodo);
handleProjectList.addTodoToProject(newProject, todo3);

// handleProjectList.getProjectByName('JavaScript');
handleProjectList.getAllProject();
handleProjectList.showAllTodos();
handleProjectList.getProjectByName('javAscRipt');

handleTodoList.deleteTodo(deleteTodo);
handleProjectList.deleteTodoFromProject(deleteTodo.project, deleteTodo);
handleTodoList.getTodoList();
handleProjectList.getAllProject();
