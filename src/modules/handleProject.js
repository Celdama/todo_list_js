import { v4 as uuidv4 } from 'uuid';

const projectFactory = (title, defaultProject) => {
  const todosListInThisProject = [];

  return {
    id: uuidv4(),
    title: title.toLowerCase(),
    todos: todosListInThisProject,
    defaultProject: defaultProject || false,
  };
};

const handleProjectListModule = (() => {
  let projectList = [];

  const retrieveProjectListFromLocalStorage = () => {
    projectList = localStorage.getItem('projectListInLocalStorage');
    projectList = JSON.parse(projectList);

    if (projectList === null) {
      projectList = [];
    }

    return projectList;
  };

  const addProject = (project) => {
    projectList.push(project);
  };

  const saveProjectListInLocalStorage = () => {
    localStorage.setItem('projectListInLocalStorage', JSON.stringify(projectList));
  };

  const fillProjectListInLocalStorageToInitializeApp = () => {
    const projectListInLS = retrieveProjectListFromLocalStorage();
    if (projectListInLS.length === 0) {
      const inbox = projectFactory('inbox', true);
      const today = projectFactory('today', true);
      const upcoming = projectFactory('upcoming', true);

      addProject(inbox);
      addProject(today);
      addProject(upcoming);

      saveProjectListInLocalStorage();
    }
  };

  const getProjectByName = (name) => {
    const results = projectList.find(
      (project) => project.title === name.toLowerCase(),
    );
    return results;
  };

  const addTodoToProject = (name, todo) => {
    const projectToAdd = getProjectByName(name);

    if (projectToAdd.todos.find((task) => task.id === todo.id)) return;
    if (todo.project !== name) return;
    projectToAdd.todos.push(todo);
    saveProjectListInLocalStorage();
  };

  const updateTodoInProject = (project, todo) => {
    const projectToUpdate = getProjectByName(project);
    const todoToUpdate = projectToUpdate.todos.find((item) => item.id === todo.id);

    Object.assign(todoToUpdate, todo);

    saveProjectListInLocalStorage();
  };

  const getAllProjectExceptDefaultProject = () => {
    const allProjectExceptDefault = projectList.filter(
      (project) => !project.defaultProject,
    );

    return allProjectExceptDefault;
  };

  const getAllProjectExceptTodayAndUpcomming = () => {
    const allProjectExceptTodayAndUpcomming = projectList.filter(
      (project) => project.title !== 'today' && project.title !== 'upcoming',
    );

    return allProjectExceptTodayAndUpcomming;
  };

  const getTodoByProjectName = (name) => {
    const results = projectList.find(
      (project) => project.title === name.toLowerCase(),
    );

    if (results) {
      return results.todos;
    }
    return [];
  };

  const deleteTodoInThisProject = (project, todoId) => {
    const todosParentProject = getProjectByName(project);
    todosParentProject.todos = todosParentProject.todos.filter(
      (item) => item.id !== todoId,
    );
    saveProjectListInLocalStorage();
  };

  const deleteThisProject = (id) => {
    projectList = projectList.filter((item) => item.id !== id);

    saveProjectListInLocalStorage();
  };

  const initProjectFromLocalStorage = () => {
    fillProjectListInLocalStorageToInitializeApp();
    retrieveProjectListFromLocalStorage();
  };

  return {
    fillProjectListInLocalStorageToInitializeApp,
    addProject,
    getProjectByName,
    addTodoToProject,
    getAllProjectExceptDefaultProject,
    getTodoByProjectName,
    deleteTodoInThisProject,
    deleteThisProject,
    getAllProjectExceptTodayAndUpcomming,
    saveProjectListInLocalStorage,
    updateTodoInProject,
    retrieveProjectListFromLocalStorage,
    initProjectFromLocalStorage,
  };
})();

export { projectFactory, handleProjectListModule };
