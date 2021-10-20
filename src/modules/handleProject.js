import { v4 as uuidv4 } from 'uuid';
import { handleTodoList } from './handleTodo';

const projectFactory = (title) => {
  const todos = [];

  return {
    id: uuidv4(),
    title,
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
    const results = listProject.find((project) => project.title === name);
    // console.log(results);
    return results;
  };

  const addTodoToProject = (project, todo) => {
    const projectToAdd = getProjectByName(project.title);

    if (projectToAdd.todos.find((t) => t.id === todo.id)) return;
    if (todo.project !== project.title) return;
    projectToAdd.todos.push(todo);
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
  };
})();

export { projectFactory, handleProjectList };
