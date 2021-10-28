import { format } from 'date-fns';
import domElementFactory from '../utilities/domElementFactory';
import appendDomElementToParent from '../utilities/appendDomElementToParent';
import { todoFactory2, handleTodoListModule as todoListModule } from './handleTodo';
import { projectFactory, handleProjectListModule as projectListModule } from './handleProject';
import { displayEditTodoPriorityPopUp, createEditPriorityPopUp } from '../utilities/priorityPopUp';
import icons from '../utilities/iconsSVG';

const UI = (() => {
  const loadCurrentDayTodoList = () => {
    const currentDate = document.querySelector('.current-date');
    const formatDate = format(new Date(), 'ccc dd MMM');
    const currentDayTodoList = todoListModule.getTodoOfCurrentDay();
    currentDate.textContent = `${formatDate}`;

    return currentDayTodoList;
  };

  const displayAddTodoForm = (auto) => {
    const closeAddTodoFormBtns = Array.from(document.querySelectorAll('.close-add-form-todo'));
    const displayAddTodoFormBtn = document.getElementById('add-todo-btn');
    const addTodoFormWrapper = document.getElementById('add-todo-wrapper');

    displayProjectListInSelectChoice();

    if (auto) {
      addTodoFormWrapper.classList.toggle('hidden');
      return;
    }

    displayAddTodoFormBtn.addEventListener('click', () => {
      addTodoFormWrapper.classList.toggle('hidden');
    });

    closeAddTodoFormBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        addTodoFormWrapper.classList.toggle('hidden');
      });
    });
  };

  const displayProjectListInSelectChoice = () => {
    const select = document.getElementById('project-select');
    const projectList = projectListModule.getAllProjectExceptTodayAndUpcomming();
    select.textContent = '';

    projectList.forEach((project) => {
      const option = domElementFactory('option', `${project.title}`, '');
      option.el.value = `${project.title}`;

      if (project.title === 'inbox') {
        option.el.setAttribute('selected', true);
      }

      select.appendChild(option.el);
    });
  };

  const displayAddProjectForm = (auto) => {
    const closeAddProjectFormBtns = Array.from(document.querySelectorAll('.close-add-form-project'));
    const displayAddProjectFormBtn = document.getElementById('display-add-project-form');
    const addProjectFormWrapper = document.getElementById('add-project-wrapper');

    if (auto) {
      addProjectFormWrapper.classList.toggle('hidden');
      return;
    }

    displayAddProjectFormBtn.addEventListener('click', () => {
      addProjectFormWrapper.classList.toggle('hidden');
    });

    closeAddProjectFormBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        addProjectFormWrapper.classList.toggle('hidden');
      });
    });
  };

  const renderTodoList = (display, list) => {
    list.forEach((todo) => {
      const todoAppended = renderTodoItem(todo);
      display.appendChild(todoAppended);
    });
  };

  const loadCurrentMonthTodoList = () => {
    const currentDate = document.querySelector('.current-date');
    const formatMonth = format(new Date(), 'MMMM');
    currentDate.textContent = `${formatMonth}`;

    const currentMonthTodoList = todoListModule.getTodoOfCurrentMonth();

    return currentMonthTodoList;
  };

  const displayEmptyTodoListMessage = (parentElement, todoCategory) => {
    let message = null;
    switch (todoCategory) {
      case 'today':
        message = 'no task for today';
        break;
      case 'upcoming':
        message = 'no task for this month';
        break;
      default:
        message = 'What tasks are on your mind ?';
    }
    const wrapperEmptyTodoList = domElementFactory('div', '', 'wrapper-empty-todo-list');
    const emptyTodoText = domElementFactory('p', `${message}`, 'empty-todo-text');
    const addTodoBtn = domElementFactory('button', 'add a task', 'add-todo-btn');
    appendDomElementToParent(wrapperEmptyTodoList.el, emptyTodoText, addTodoBtn);
    appendDomElementToParent(parentElement, wrapperEmptyTodoList);
  };

  const loadTodoList = (name = 'inbox') => {
    const todoCategory = document.getElementById('todo-category');
    const displayTodoList = document.querySelector('.todo-list');
    const currentDate = document.querySelector('.current-date');

    displayTodoList.textContent = '';
    todoCategory.textContent = name;

    let todoList = projectListModule.getTodoByProjectName(name);

    switch (name) {
      case 'today':
        todoList = loadCurrentDayTodoList();
        if (todoList.length === 0) {
          displayEmptyTodoListMessage(displayTodoList, name);
          return;
        }
        renderTodoList(displayTodoList, todoList);
        break;
      case 'upcoming':
        todoList = loadCurrentMonthTodoList();
        if (todoList.length === 0) {
          displayEmptyTodoListMessage(displayTodoList, name);
          return;
        }
        renderTodoList(displayTodoList, todoList);
        break;
      default:
        if (todoList.length === 0) {
          displayEmptyTodoListMessage(displayTodoList, name);
          currentDate.textContent = '';
        }
        renderTodoList(displayTodoList, todoList);
        currentDate.textContent = '';
    }
  };

  const renderTodoItem = (todo) => {
    const RED_FLAG_PRIORITY = '#db4c3f';
    const BLUE_FLAG_PRIORITY = '#3f73d6';
    const ORANGE_FLAG_PRIORITY = '#ff9933';

    const todoItem = domElementFactory('div', '', 'todo-item');
    const leftSideOfTodoItem = domElementFactory('div', '', 'left');
    const rightSideOfTodoItem = domElementFactory('div', '', 'right');
    const editWrapper = domElementFactory('div', '', 'edit-wrapper');
    const priorityWrapper = domElementFactory('div', '', 'priority-wrapper');
    const deleteWrapper = domElementFactory('div', '', 'delete-wrapper');
    const doneWrapper = domElementFactory('div', '', 'done-wrapper');
    const todoTitleWrapper = domElementFactory('div', '', 'title-wrapper');
    const doneBtn = domElementFactory('button');
    const editBtn = domElementFactory('button', '', 'edit-todo-btn');
    const deleteBtn = domElementFactory('button', '', 'delete-todo-btn');
    const priorityBtn = domElementFactory('button', '', 'edit-priority-btn');
    const displayTodoTitle = domElementFactory(
      'div',
      `${todo.title}`,
      'todo-title',
    );

    let colorFlagPriority = ORANGE_FLAG_PRIORITY;

    if (todo.priority === 'high') {
      colorFlagPriority = RED_FLAG_PRIORITY;
    } else if (todo.priority === 'low') {
      colorFlagPriority = BLUE_FLAG_PRIORITY;
    }

    doneBtn.el.innerHTML = `${icons.completeTodo()}`;
    editBtn.el.innerHTML = `${icons.editTodo()}`;
    priorityBtn.el.innerHTML = `${icons.priorityTodo(colorFlagPriority)}`;
    deleteBtn.el.innerHTML = `${icons.deleteTodo()}`;

    const popUpPriority = createEditPriorityPopUp(todo, () => loadTodoList(todo.project));
    priorityBtn.el.onclick = () => displayEditTodoPriorityPopUp(popUpPriority.el);

    handleTodoItemEventListener(todo, editBtn.el, deleteBtn.el);

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

    deleteProjectBtn.el.innerHTML = `${icons.deleteProject()}`;
    circleColorProject.el.innerHTML = `${icons.circleColorProject()}`;

    handleProjectItemEventListener(project, deleteProjectBtn.el);

    appendDomElementToParent(projectInfo.el, circleColorProject, projectTitle);
    appendDomElementToParent(wrapperProject.el, projectInfo, deleteProjectBtn);

    return wrapperProject.el;
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
    const todoCategory = document.getElementById('todo-category');
    const categoryTitle = todoCategory.textContent;
    const { project, id } = todo;

    todoListModule.deleteTodo(id);
    projectListModule.deleteTodoInThisProject(project, id);

    switch (categoryTitle) {
      case 'today':
        loadTodoList(categoryTitle);
        break;
      case 'upcoming':
        loadTodoList(categoryTitle);
        break;
      default:
        loadTodoList(project);
    }
  };

  const deleteProject = (project) => {
    const { id, title } = project;

    projectListModule.deleteProject(id, title);
    loadProjectList();
    loadTodoList();
  };

  const handleTodoItemEventListener = (todo, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('edit-todo-btn')) {
          updateTodo(todo);
        } else if (btn.classList.contains('delete-todo-btn')) {
          deleteTodo(todo);
        }
      });
    });
  };

  const getUpdateTodoInfo = () => {
    const updatedTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input'),
    ).reduce((acc, input) => ({
      ...acc, [input.id]: input.value || input.placeholder,
    }), {});

    return updatedTodo;
  };

  const addFormEventListenerToUpdateTodo = (editForm, wrapper) => {
    const todoCategory = document.getElementById('todo-category');
    const categoryTitle = todoCategory.textContent;

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      // check if project value change
      const formProjectInputValue = document.querySelector('.project-input');
      let newProject = formProjectInputValue.value;
      const olderProject = formProjectInputValue.placeholder;

      if (!newProject) {
        newProject = olderProject;
      }

      const formId = editForm.getAttribute('data-id');

      const originalTodo = todoListModule.getTodo(formId);
      const updatedTodoInfo = getUpdateTodoInfo();

      const updatedTodo = todoListModule.updateTodo(originalTodo, updatedTodoInfo);

      const { id } = originalTodo;
      const { project } = updatedTodo;

      // this mean i have to moove todo in another folder project
      if (olderProject !== newProject) {
        projectListModule.deleteTodoInThisProject(olderProject, id);
        projectListModule.addTodoToProject(project, updatedTodo);
        loadTodoList(project);
      } else if (categoryTitle === 'upcoming') {
        loadTodoList(categoryTitle);
      } else if (categoryTitle === 'today') {
        loadTodoList(categoryTitle);
      } else {
        loadTodoList(olderProject);
      }

      wrapper.classList.toggle('hidden');
      editForm.reset();
    });
  };

  const updateTodo = (todo) => {
    const editTodoWrapper = document.getElementById('edit-todo-wrapper');
    const editTodoForm = document.getElementById('edit-todo-form');

    editTodoWrapper.classList.toggle('hidden');

    editTodoForm.dataset.id = todo.id;

    fillPlaceHolderFormEditWithTodoData(todo);
    addFormEventListenerToUpdateTodo(editTodoForm, editTodoWrapper);
  };

  const handleProjectItemEventListener = (project, ...args) => {
    args.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('delete-project-btn')) {
          deleteProject(project);
        }
      });
    });
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input'),
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    const desc = document.querySelector('#add-todo-form textarea');

    const prioritySelect = document.querySelector('#add-todo-form #priority');
    const priorityValue = prioritySelect.options[prioritySelect.selectedIndex].value;

    newTodo.description = desc.value;
    newTodo.priority = priorityValue;

    const projectSelect = document.querySelector('#add-todo-form #project-select');
    const projectValue = projectSelect.options[projectSelect.selectedIndex].value;

    newTodo.project = projectValue;

    return newTodo;
  };

  const getNewProjectTitle = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input',
    ).value;

    return projectTitle.toLowerCase();
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info',
    );

    projectName.forEach((project) => {
      project.addEventListener('click', () => {
        const { list } = project.dataset;
        loadTodoList(list);
      });
    });
  };

  const toggleDropdowProjectsListAuto = () => {
    const chevronSVG = document.querySelector('.bi-chevron-right');
    const projectsList = document.getElementById('display-projects-list');

    const style = getComputedStyle(chevronSVG);
    if (style.transform === 'matrix(1, 0, 0, 1, 0, 0)') {
      chevronSVG.style.transform = 'rotate(90deg)';
      chevronSVG.style.transition = 'transform .1s ease';
      projectsList.classList.toggle('collapse');
      projectsList.classList.toggle('not-collapse');
    }
  };

  const addTodo = () => {
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoInfo = getTodoInfo();
      const newTodo = todoFactory2(newTodoInfo);
      const { project } = newTodo;
      console.log(newTodo);
      todoListModule.addTodo(newTodo);
      projectListModule.addTodoToProject(project, newTodo);
      loadTodoList(project);
      addTodoForm.reset();
      displayAddTodoForm(true);
    });
  };

  const addProject = () => {
    const addProjectForm = document.getElementById('add-project-form');

    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProjectTitle = getNewProjectTitle();
      const newProject = projectFactory(newProjectTitle);
      const { title } = newProject;
      projectListModule.addProject(newProject);
      loadProjectList();
      AddEventListenerToFetchTodoInProject();
      addProjectForm.reset();
      toggleDropdowProjectsListAuto();
      loadTodoList(title);
      displayAddProjectForm(true);
      displayProjectListInSelectChoice();
    });
  };

  return {
    loadTodoList,
    loadProjectList,
    AddEventListenerToFetchTodoInProject,
    addTodo,
    addProject,
    displayAddTodoForm,
    displayAddProjectForm,
  };
})();

export default UI;
