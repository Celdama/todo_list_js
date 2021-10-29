import './style.css';
import './style.scss';
import { todoFactory, handleTodoListModule } from './modules/handleTodo';
import { projectFactory, handleProjectListModule } from './modules/handleProject';
import animationsUI from './utilities/animations';
import UI from './modules/UI';

const newTodo = todoFactory(
  'start react',
  'buy milk for lune',
  new Date('January 2, 2028'),
  'JavaScript',
  'low',
);
const todo3 = todoFactory(
  'read You dont know JS',
  'buy the book first',
  new Date('December 3, 2024'),
  'JavaScript',
  'high',
);
const todo4 = todoFactory('watch barcelona', 'league des champiosn', new Date('November 30, 2023'), 'football');
const todo5 = todoFactory('another todo', 'its cool', new Date('October, 31, 2021'));
const todo6 = todoFactory('today of today', 'supercoo');

handleTodoListModule.addTodo(newTodo);
handleTodoListModule.addTodo(todo3);
handleTodoListModule.addTodo(todo4);
handleTodoListModule.addTodo(todo5);
handleTodoListModule.addTodo(todo6);

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
handleProjectListModule.addTodoToProject(inbox.title, todo6);

handleProjectListModule.getProjectByName('javAscRipt');

handleTodoListModule.getTodoList();

handleProjectListModule.getAllProject();

UI.loadTodoList();
UI.loadProjectList();
UI.addProject();
UI.addTodo();
UI.loadInboxTodoListWithHomeIcon();
UI.AddEventListenerToFetchTodoInProject();
UI.displayAddTodoForm();
UI.displayAddProjectForm();
UI.displayCompleteTodo();
animationsUI.hideAside();
animationsUI.toggleClassOnSmallerScreen();
animationsUI.toggleDropdowProjectsListOnClick();

// handleTodoListModule.sortDueDateAscOrder();
handleTodoListModule.sortDueDateDescOrder();
handleTodoListModule.getTodoList();
handleTodoListModule.getTodoOfCurrentDay();
handleTodoListModule.getTodoOfCurrentMonth();

handleProjectListModule.getAllProjectExceptTodayAndUpcomming();
