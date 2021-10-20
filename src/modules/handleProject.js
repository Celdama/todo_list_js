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

  const dispatchTodoInProject = () => {
    allTodos.forEach((todo) => {
      listProject.forEach((project) => {
        if (todo.project === project.title) {
          project.todos.push(todo);
        }
      });
    });
  };

  const addProject = (project) => {
    listProject.push(project);
    // console.log('project added');
  };

  const getAllProject = () => {
    console.log(listProject);
  };

  const getProjectByName = (name) => {
    const results = listProject.filter((project) => project.title === name);
    // console.log(results);
    return results;
  };

  return {
    addProject,
    dispatchTodoInProject,
    getAllProject,
    getProjectByName,
  };
})();

export { projectFactory, handleProjectList };
