import domElementFactory from '../utilities/domElementFactory';
import appendDomElementToParent from '../utilities/appendDomElementToParent';
import { todoFactory2, handleTodoListModule as todoListModule } from './handleTodo';
import { projectFactory, handleProjectListModule as projectListModule } from './handleProject';
import { displayEditTodoPriorityPopUp, createEditPriorityPopUp } from '../utilities/priorityPopUp';

const UI = (() => {
  console.log('UI loaded');

  const renderTodoItem = (todo) => {
    const todoItem = domElementFactory('div', '', 'todo-item');
    const leftSideOfTodoItem = domElementFactory('div', '', 'left');
    const rightSideOfTodoItem = domElementFactory('div', '', 'right');
    const editWrapper = domElementFactory('div', '', 'edit-wrapper');
    const priorityWrapper = domElementFactory('div', '', 'priority-wrapper');
    const deleteWrapper = domElementFactory('div', '', 'delete-wrapper');
    const doneWrapper = domElementFactory('div', '', 'done-wrapper');
    const todoTitleWrapper = domElementFactory('div', '', 'title-wrapper');
    const doneBtn = domElementFactory('button');
    const editBtn = domElementFactory('button');
    const deleteBtn = domElementFactory('button');
    const priorityBtn = domElementFactory('button');
    const displayTodoTitle = domElementFactory(
      'div',
      `${todo.title}`,
      'todo-title',
    );

    let colorFlagPriority = '#ff9933';

    if (todo.priority === 'high') {
      colorFlagPriority = '#db4c3f';
    } else if (todo.priority === 'low') {
      colorFlagPriority = '#3f73d6';
    }

    doneBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
      </svg>
    `;
    editBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" class="bi bi-pen edit-btn" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
      </svg>
    `;
    priorityBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=${colorFlagPriority} class="bi bi-flag-fill priority-btn" viewBox="0 0 16 16">
        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
      </svg>
    `;
    deleteBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#808080" class="bi bi-trash delete-btn" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    `;

    deleteBtn.el.onclick = () => deleteTodo(todo);
    const popUpPriority = createEditPriorityPopUp(todo, () => loadTodoList(todo.project));
    priorityBtn.el.onclick = () => displayEditTodoPriorityPopUp(popUpPriority);
    editBtn.el.onclick = (todo, () => updateTodo(todo));

    appendDomElementToParent(doneWrapper.el, doneBtn);
    appendDomElementToParent(todoTitleWrapper.el, displayTodoTitle);
    appendDomElementToParent(
      leftSideOfTodoItem.el,
      doneWrapper,
      todoTitleWrapper,
    );
    appendDomElementToParent(editWrapper.el, editBtn);
    appendDomElementToParent(priorityWrapper.el, priorityBtn, popUpPriority);
    appendDomElementToParent(deleteWrapper.el, deleteBtn);
    appendDomElementToParent(
      rightSideOfTodoItem.el,
      editWrapper,
      priorityWrapper,
      deleteWrapper,
    );

    appendDomElementToParent(
      todoItem.el,
      leftSideOfTodoItem,
      rightSideOfTodoItem,
    );

    return todoItem.el;
  };

  const loadTodoList = (name = 'inbox') => {
    const todoCategory = document.getElementById('todo-category');
    const displayTodoList = document.querySelector('.todo-list');

    todoCategory.textContent = name;
    displayTodoList.textContent = '';

    const todoList = projectListModule.getTodoByProjectName(name);

    if (todoList.length === 0) {
      const wrapperEmptyTodoList = domElementFactory('div', '', 'wrapper-empty-todo-list');
      const emptyTodoText = domElementFactory('p', 'What tasks are on your mind ?', 'empty-todo-text');
      const addTodoBtn = domElementFactory('button', 'add a task', 'add-todo-btn');
      appendDomElementToParent(wrapperEmptyTodoList.el, emptyTodoText, addTodoBtn);
      appendDomElementToParent(displayTodoList, wrapperEmptyTodoList);
    } else {
      todoList.forEach((todo) => {
        const todoAppended = renderTodoItem(todo);
        displayTodoList.appendChild(todoAppended);
      });
    }
  };

  const loadProjectList = () => {
    const projectList = document.getElementById('display-projects-list');
    projectList.textContent = '';

    const projects = projectListModule.getAllProjectExceptDefaultProject();

    if (projects.length === 0) {
      const emptyProjectText = domElementFactory('p', 'You have no project', 'empty-project-text');
      projectList.appendChild(emptyProjectText.el);
    } else {
      projects.forEach((project) => {
        const projectAppended = renderProjectItem(project);
        projectList.appendChild(projectAppended);
      });
    }
  };

  const deleteTodo = (todo) => {
    const { project, id } = todo;

    todoListModule.deleteTodo(id);
    projectListModule.deleteTodoInThisProject(project, id);

    loadTodoList(project);
  };

  const deleteProject = (project) => {
    const { id, title } = project;

    projectListModule.deleteProject(id, title);
    loadProjectList();
  };

  const renderProjectItem = (project) => {
    const wrapperProject = domElementFactory('div', '', 'project');
    const projectInfo = domElementFactory('div', '', 'project-info');
    const circleColorProject = domElementFactory('span', '', 'circle-color');
    const projectTitle = domElementFactory(
      'span',
      `${project.title}`,
      'project-name',
    );
    const deleteProjectBtn = domElementFactory(
      'button',
      '',
      'delete-project-btn',
    );
    projectInfo.el.dataset.list = `${project.title}`;
    deleteProjectBtn.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg delete-project" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg>
    `;
    circleColorProject.el.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ff9933" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
    `;
    deleteProjectBtn.el.onclick = () => deleteProject(project);

    appendDomElementToParent(projectInfo.el, circleColorProject, projectTitle);
    appendDomElementToParent(wrapperProject.el, projectInfo, deleteProjectBtn);

    return wrapperProject.el;
  };

  const addEventListenerToUpdateTodo = (editForm, wrapper) => {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      // check if project value change
      const projectInputValue = document.querySelector('.project-input');
      let newProject = projectInputValue.value;
      const olderProject = projectInputValue.placeholder;

      if (!newProject) {
        newProject = olderProject;
      }

      const todoUpdatedInfo = getUpdateTodoInfo();
      const formId = editForm.getAttribute('data-id');
      const updateThisTodo = todoListModule.getTodo(formId);

      if (formId === updateThisTodo.id) {
        const todoUpdated = todoListModule.updateTodo(updateThisTodo, todoUpdatedInfo);

        // this mean i have to moove todo in another folder project
        if (olderProject !== newProject) {
          projectListModule.deleteTodoInThisProject(olderProject, updateThisTodo.id);
          projectListModule.addTodoToProject(todoUpdated.project, todoUpdated);
          loadTodoList(todoUpdated.project);
        } else {
          loadTodoList(olderProject);
        }

        wrapper.classList.toggle('hidden-edit-wrapper-todo');
        wrapper.classList.toggle('visible-edit-wrapper-todo');
      }
      editForm.reset();
    });
  };

  const getUpdateTodoInfo = () => {
    const updatedTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value || input.placeholder }), {});

    return updatedTodo;
  };

  const fillPlaceHolderFormEditWithTodoData = (data) => {
    const inputEditTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    );

    inputEditTodo.forEach((input) => {
      input.classList.add(`${input.id}-input`);
      input.value = '';
      input.placeholder = data[input.id];
    });
  };

  const updateTodo = (todo) => {
    const editTodoWrapper = document.getElementById('edit-todo-wrapper');
    editTodoWrapper.classList.remove('hidden-edit-wrapper-todo');
    editTodoWrapper.classList.add('visible-edit-wrapper-todo');

    const editTodoForm = document.getElementById('edit-todo-form');
    editTodoForm.dataset.id = todo.id;

    fillPlaceHolderFormEditWithTodoData(todo);
    addEventListenerToUpdateTodo(editTodoForm, editTodoWrapper);
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    return newTodo;
  };

  const getProjectToAddInfo = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input',
    ).value;

    return projectTitle.toLowerCase();
  };

  const addTodoUI = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodo = todoFactory2(getTodoInfo());
      todoListModule.addTodo(newTodo);
      projectListModule.addTodoToProject(newTodo.project, newTodo);
      loadTodoList(newTodo.project);
    });
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info',
    );

    projectName.forEach((project) => {
      project.addEventListener('click', () => {
        loadTodoList(project.dataset.list);
      });
    });
  };

  const addProjectUI = () => {
    const addProjectForm = document.getElementById('add-project-form');

    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProjectTitle = getProjectToAddInfo();
      const newProject = projectFactory(newProjectTitle);
      projectListModule.addProject(newProject);
      loadProjectList();
      AddEventListenerToFetchTodoInProject();
    });
  };

  const hideAsideSide = () => {
    const hideBtn = document.getElementById('hide-aside');
    const asideInfo = document.getElementById('aside-informations');
    const mainInfo = document.getElementById('main-informations');
    hideBtn.addEventListener('click', () => {
      asideInfo.classList.toggle('show-aside');
      asideInfo.classList.toggle('hide-aside');
      mainInfo.classList.toggle('full-main');
    });
  };

  const toggleClassOnSmallerScreen = () => {
    const asideInfo = document.getElementById('aside-informations');
    const mainInfo = document.getElementById('main-informations');

    window.addEventListener('resize', () => {
      const width = document.body.clientWidth;
      if (width < 815) {
        if (asideInfo.classList.value === 'show-aside') {
          asideInfo.classList.remove('show-aside');
          asideInfo.classList.add('hide-aside');
        }
      }

      if (width > 815) {
        if (asideInfo.classList.value === 'hide-aside') {
          asideInfo.classList.remove('hide-aside');
          asideInfo.classList.add('show-aside');
        }
        if (mainInfo.classList.value === 'full-main') {
          mainInfo.classList.remove('full-main');
        }
      }
    });
  };

  const toggleDropdowProjectsList = () => {
    const toggleBtn = document.querySelector('.dropdown-projects-list');
    const chevronSVG = document.querySelector('.bi-chevron-right');
    const projectsList = document.getElementById('display-projects-list');

    toggleBtn.addEventListener('click', () => {
      const style = getComputedStyle(chevronSVG);
      if (style.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
        chevronSVG.style.transform = 'rotate(90deg)';
        chevronSVG.style.transition = 'transform .1s ease';
      } else {
        chevronSVG.style.transform = 'rotate(0deg)';
      }
      projectsList.classList.toggle('collapse');
      projectsList.classList.toggle('not-collapse');
    });
  };

  return {
    loadTodoList,
    loadProjectList,
    addTodoUI,
    addProjectUI,
    AddEventListenerToFetchTodoInProject,
    hideAsideSide,
    toggleClassOnSmallerScreen,
    toggleDropdowProjectsList,
  };
})();

export default UI;
