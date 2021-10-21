import './style.css';
import { todoFactory, handleTodoListModule } from './modules/handleTodo';
import { projectFactory, handleProjectListModule } from './modules/handleProject';
import UI from './modules/UI';

const newTodo = todoFactory('start react', 'buy milk for lune', 'JavaScript');
const todo2 = todoFactory('call mom', 'call mom for birthday', 'Perso');
const todo3 = todoFactory('read You dont know JS', 'buy the book first', 'JavaScript');
const todo4 = todoFactory('watch barcelona', 'league des champiosn');
const deleteTodo = todoFactory('foo', 'bar', 'JAVASCRIPT');
const todo5 = todoFactory('another todo', 'its cool');
// console.log(newTodo);

// handleTodoList.getTodoList();
handleTodoListModule.addTodo(newTodo);
handleTodoListModule.addTodo(todo2);
handleTodoListModule.addTodo(todo3);
handleTodoListModule.addTodo(todo4);
handleTodoListModule.addTodo(deleteTodo);
handleTodoListModule.addTodo(todo5);
// handleTodoList.getTodoList();

// handleTodoList.getTodoId(todo2);
handleTodoListModule.updateTodo(todo4, 'watch Barcelona', 'Champions League', 'Football');
// handleTodoList.deleteTodo(todo3);

const newProject = projectFactory('JavaScript');
const persoProject = projectFactory('Perso');
const football = projectFactory('fooTball');
const inbox = projectFactory('inbox');

// console.log(newProject);
handleProjectListModule.addProject(newProject);
handleProjectListModule.addProject(persoProject);
handleProjectListModule.addProject(football);
handleProjectListModule.addProject(inbox);
handleProjectListModule.showAllTodos();
handleProjectListModule.addTodoToProject(newProject, todo3);
handleProjectListModule.addTodoToProject(football, todo4);
handleProjectListModule.addTodoToProject(persoProject, todo2);
handleProjectListModule.addTodoToProject(newProject, todo3);
handleProjectListModule.addTodoToProject(newProject, deleteTodo);
handleProjectListModule.addTodoToProject(newProject, todo3);
handleProjectListModule.addTodoToProject(newProject, todo3);
handleProjectListModule.addTodoToProject(newProject, newTodo);
handleProjectListModule.addTodoToProject(newProject, todo3);
handleProjectListModule.addTodoToProject(inbox, todo5);

// handleProjectList.getProjectByName('JavaScript');
handleProjectListModule.showAllTodos();
handleProjectListModule.getProjectByName('javAscRipt');

handleTodoListModule.deleteTodo(deleteTodo);
handleProjectListModule.deleteTodoFromProject(deleteTodo.project, deleteTodo);
handleTodoListModule.getTodoList();

handleProjectListModule.getAllProject();

handleProjectListModule.deleteProject(persoProject);
handleProjectListModule.getAllProject();
handleProjectListModule.showAllTodos();

// UI.loadTodoList();
// UI.deleteTodoUI();

UI.loadTodoList();
UI.deleteTodoUI();
UI.addTodoUI();
UI.getTodoInProject();
