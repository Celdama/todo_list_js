import './style.css';
import './style.scss';
import { todoFactory, handleTodoListModule } from './modules/handleTodo';
import { projectFactory, handleProjectListModule } from './modules/handleProject';
import UI from './modules/UI';

const newTodo = todoFactory(
  'start react',
  'buy milk for lune',
  'JavaScript',
  'low',
);
const todo3 = todoFactory(
  'read You dont know JS',
  'buy the book first',
  'JavaScript',
  'high',
);
const todo4 = todoFactory('watch barcelona', 'league des champiosn', 'football');
const todo5 = todoFactory('another todo', 'its cool');

handleTodoListModule.addTodo(newTodo);
handleTodoListModule.addTodo(todo3);
handleTodoListModule.addTodo(todo4);
handleTodoListModule.addTodo(todo5);

const newProject = projectFactory('JavaScript');
const football = projectFactory('fooTball');
const inbox = projectFactory('inbox', true);
const today = projectFactory('today', true);
const upcoming = projectFactory('upcoming', true);

handleProjectListModule.addProject(newProject);
handleProjectListModule.addProject(football);
handleProjectListModule.addProject(inbox);
handleProjectListModule.addProject(today);
handleProjectListModule.addProject(upcoming);
handleProjectListModule.addTodoToProject(newProject.title, todo3);
handleProjectListModule.addTodoToProject(football.title, todo4);
handleProjectListModule.addTodoToProject(newProject.title, todo3);
handleProjectListModule.addTodoToProject(newProject.title, todo3);
handleProjectListModule.addTodoToProject(newProject.title, todo3);
handleProjectListModule.addTodoToProject(newProject.title, newTodo);
handleProjectListModule.addTodoToProject(newProject.title, todo3);
handleProjectListModule.addTodoToProject(inbox.title, todo5);

handleProjectListModule.getProjectByName('javAscRipt');

handleTodoListModule.getTodoList();

handleProjectListModule.getAllProject();

UI.loadTodoList();
UI.loadProjectList();
UI.addProjectUI();
UI.addTodoUI();
UI.AddEventListenerToFetchTodoInProject();
UI.hideAsideSide();
UI.toggleClassOnSmallerScreen();
UI.toggleDropdowProjectsList();
