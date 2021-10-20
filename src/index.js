import './style.css';
import { todoFactory, handleTodoList } from './modules/handleTodo';
import { projectFactory, handleProjectList } from './modules/handleProject';

const newTodo = todoFactory('start react', 'buy milk for lune', 'JavaScript');
const todo2 = todoFactory('call mom', 'call mom for birthday', 'Perso');
const todo3 = todoFactory('read You dont know JS', 'buy the book first', 'JavaScript');
// console.log(newTodo);

// handleTodoList.getTodoList();
handleTodoList.addTodo(newTodo);
handleTodoList.addTodo(todo2);
handleTodoList.addTodo(todo3);
// handleTodoList.getTodoList();

// handleTodoList.getTodoId(todo2);
// handleTodoList.updateTodo(todo2, 'call dady', 'call daaaaaad');
// handleTodoList.deleteTodo(todo3);
// handleTodoList.getTodoList();

const newProject = projectFactory('JavaScript');
const persoProject = projectFactory('Perso');

// console.log(newProject);
handleProjectList.addProject(newProject);
handleProjectList.addProject(persoProject);
handleProjectList.getAllProject();
handleProjectList.showAllTodos();
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(persoProject, todo2);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, todo3);
handleProjectList.addTodoToProject(newProject, newTodo);
handleProjectList.addTodoToProject(newProject, todo3);

// handleProjectList.getProjectByName('JavaScript');
handleProjectList.getAllProject();
