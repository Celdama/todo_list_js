import { v4 as uuidv4 } from 'uuid';
import { handleTodoList } from './handleTodo';

const projectFactory = (title) => {
  const todos = [];

  return {
    id: uuidv4(),
    title: title.toLowerCase(),
    todos,
  };
};

const handleProjectList = (() => {
  const allTodos = handleTodoList.getTodoList();
  const listProject = [];

  const addProject = (project) => {
    listProject.push(project);
    // console.log('project added');
  };

  const getProjectByName = (name) => {
    const results = listProject.find((project) => project.title === name.toLowerCase());
    return results;
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
    console.log('-----');
    console.table(allTodos);
  };

  const getAllProject = () => {
    console.table(listProject);
  };

  return {
    addProject,
    getAllProject,
    getProjectByName,
    showAllTodos,
    addTodoToProject,
    deleteTodoFromProject,
  };
})();

export { projectFactory, handleProjectList };
