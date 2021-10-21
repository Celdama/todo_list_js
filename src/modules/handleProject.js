import { v4 as uuidv4 } from 'uuid';
import { handleTodoListModule } from './handleTodo';

const projectFactory = (title) => {
  const todos = [];

  return {
    id: uuidv4(),
    title: title.toLowerCase(),
    todos,
  };
};

const handleProjectListModule = (() => {
  const allTodos = handleTodoListModule.getTodoList();
  let listProject = [];

  const testOnClik = () => {
    console.log('hello');
  };

  const addProject = (project) => {
    listProject.push(project);
  };

  const getProjectByName = (name) => {
    const results = listProject.find((project) => project.title === name.toLowerCase());
    console.log(results);
    return results;
  };

  const getTodosByProjectName = (name) => {
    const results = listProject.find((project) => project.title === name.toLowerCase());
    console.log(results.todos);
    return results.todos;
  };

  const addTodoToProject = (project, todo) => {
    const projectToAdd = getProjectByName(project.title);

    if (projectToAdd.todos.find((task) => task.id === todo.id)) return;
    if (todo.project !== project.title) return;
    projectToAdd.todos.push(todo);
  };

  const deleteTodoFromProject = (project, todo) => {
    const projectToDelete = getProjectByName(project);

    projectToDelete.todos = projectToDelete.todos.filter((item) => item.id !== todo.id);
  };

  const showAllTodos = () => {
    console.table(allTodos);
  };

  const getAllProject = () => {
    console.table(listProject);
  };

  const deleteProject = (project) => {
    listProject = listProject.filter((item) => item.id !== project.id);

    handleTodoListModule.deleteAllTodoFromDeletedProject(project.title);
  };

  return {
    addProject,
    getAllProject,
    getProjectByName,
    getTodosByProjectName,
    showAllTodos,
    addTodoToProject,
    deleteTodoFromProject,
    deleteProject,
    testOnClik,
  };
})();

export { projectFactory, handleProjectListModule };
