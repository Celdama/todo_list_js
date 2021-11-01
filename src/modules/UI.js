import { format, getMonth, getDate, getYear } from 'date-fns';
import handleEventListenerModule from '../utilities/handleEventListener';
import domElementFactory from '../utilities/domElementFactory';
import appendDomElementToParent from '../utilities/appendDomElementToParent';
import {
  todoFactory2,
  handleTodoListModule as todoListModule,
} from './handleTodo';
import {
  projectFactory,
  handleProjectListModule as projectListModule,
} from './handleProject';
import {
  displayEditTodoPriorityPopUp,
  createEditPriorityPopUp,
} from '../utilities/priorityPopUp';
import icons from '../utilities/iconsSVG';

const UI = (() => {
  const loadCurrentDayTodoList = () => {
    const { getTodoOfCurrentDay } = todoListModule;
    const currentDate = document.querySelector('.current-date');
    const formatDate = format(new Date(), 'ccc dd MMM');
    const currentDayTodoList = getTodoOfCurrentDay();
    currentDate.textContent = `${formatDate}`;

    return currentDayTodoList;
  };

  const displayProjectListInSelectChoice = () => {
    const { getAllProjectExceptTodayAndUpcomming } = projectListModule;
    const select = document.querySelector('#project-select');
    const projectList = getAllProjectExceptTodayAndUpcomming();

    select.textContent = '';

    projectList.forEach((project) => {
      const { title } = project;
      const option = domElementFactory('option', `${title}`, '');
      option.el.value = `${title}`;

      if (title === 'inbox') {
        option.el.setAttribute('selected', true);
      }

      select.appendChild(option.el);
    });
  };

  const displayAddTodoForm = (hiddeFormOnSubmit) => {
    const { listenerToHideForm } = handleEventListenerModule;

    const closeAddTodoFormBtns = Array.from(
      document.querySelectorAll('.close-add-form-todo')
    );
    const displayAddTodoFormBtn = document.querySelector('#add-todo-btn');
    const addTodoFormWrapper = document.querySelector('#add-todo-wrapper');

    displayProjectListInSelectChoice();

    if (hiddeFormOnSubmit) {
      addTodoFormWrapper.classList.toggle('hidden');
      return;
    }

    const [crossBtn, closeBtn] = [...closeAddTodoFormBtns];

    listenerToHideForm(
      addTodoFormWrapper,
      displayAddTodoFormBtn,
      crossBtn,
      closeBtn
    );
  };

  const displayProjectListInEditFormSelectChoice = (userChoice) => {
    const { getAllProjectExceptTodayAndUpcomming } = projectListModule;
    const select = document.getElementById('edit-project-select');
    const projectList = getAllProjectExceptTodayAndUpcomming();

    select.textContent = '';

    projectList.forEach((project) => {
      const { title } = project;
      const option = domElementFactory('option', `${title}`, '');

      option.el.value = `${title}`;

      if (title === userChoice) {
        option.el.setAttribute('selected', true);
        option.el.setAttribute('initial', `${title}`);
      }

      select.appendChild(option.el);
    });
  };

  const displayAddProjectForm = (hiddeFormOnSubmit) => {
    const { listenerToHideForm } = handleEventListenerModule;
    const closeAddProjectFormBtns = Array.from(
      document.querySelectorAll('.close-add-form-project')
    );
    const displayAddProjectFormBtn = document.querySelector(
      '#display-add-project-form'
    );
    const addProjectFormWrapper = document.querySelector(
      '#add-project-wrapper'
    );

    if (hiddeFormOnSubmit) {
      addProjectFormWrapper.classList.toggle('hidden');
      return;
    }

    const [crossBtn, closeBtn] = [...closeAddProjectFormBtns];

    listenerToHideForm(
      addProjectFormWrapper,
      displayAddProjectFormBtn,
      crossBtn,
      closeBtn
    );
  };

  const renderTodoList = (display, list) => {
    list.forEach((todo) => {
      const todoAppended = renderTodoItem(todo);
      display.appendChild(todoAppended);
    });
  };

  const renderCompletedTodoItem = (todo) => {
    const { title, description, priority, project } = todo;
    const completeTodoItem = domElementFactory('div', '', 'complete-todo-item');
    const leftSide = domElementFactory('div', '', 'left');
    const rightSide = domElementFactory('div', '', 'right');
    const completeTodoTitleDiv = domElementFactory(
      'div',
      'Title: ',
      'complete-todo-title'
    );
    const completeTodoTitle = domElementFactory('span', `${title}`, '');
    const completeTodoDescDiv = domElementFactory(
      'div',
      'Description: ',
      'complete-todo-desc'
    );
    const completeTodoDesc = domElementFactory('span', `${description}`, '');
    const completeTodoPriorityDiv = domElementFactory(
      'div',
      'Priority: ',
      'complete-todo-priority'
    );
    const completeTodoPriority = domElementFactory('span', `${priority}`, '');
    const completeTodoProjectDiv = domElementFactory(
      'div',
      'Project: ',
      'complete-todo-project'
    );
    const completeTodoProject = domElementFactory('span', `${project}`, '');

    appendDomElementToParent(completeTodoTitleDiv.el, completeTodoTitle);
    appendDomElementToParent(completeTodoDescDiv.el, completeTodoDesc);
    appendDomElementToParent(completeTodoPriorityDiv.el, completeTodoPriority);
    appendDomElementToParent(completeTodoProjectDiv.el, completeTodoProject);

    appendDomElementToParent(
      leftSide.el,
      completeTodoTitleDiv,
      completeTodoDescDiv
    );
    appendDomElementToParent(
      rightSide.el,
      completeTodoPriorityDiv,
      completeTodoProjectDiv
    );

    appendDomElementToParent(completeTodoItem.el, leftSide, rightSide);
    return completeTodoItem.el;
  };

  const renderCompletedTodoList = (display, list) => {
    list.forEach((todo) => {
      const completeTodoAppended = renderCompletedTodoItem(todo);
      display.appendChild(completeTodoAppended);
    });
  };

  const loadCurrentMonthTodoList = () => {
    const { getTodoOfCurrentMonth } = todoListModule;
    const currentDate = document.querySelector('.current-date');
    const formatMonth = format(new Date(), 'MMMM');
    currentDate.textContent = `${formatMonth}`;

    const currentMonthTodoList = getTodoOfCurrentMonth();

    return currentMonthTodoList;
  };

  const displayEmptyTodoListMessage = (parentElement, todoCategory) => {
    let message = '';

    switch (todoCategory) {
      case 'complete':
        message = 'no completed task';
        break;
      case 'today':
        message = 'no task for today';
        break;
      case 'upcoming':
        message = 'no task for this month';
        break;
      default:
        message = 'What tasks are on your mind ?';
    }

    const wrapperEmptyTodoList = domElementFactory(
      'div',
      '',
      'wrapper-empty-todo-list'
    );
    const emptyTodoText = domElementFactory(
      'p',
      `${message}`,
      'empty-todo-text'
    );
    const addTodoBtn = domElementFactory(
      'button',
      'add a task',
      'add-todo-btn'
    );

    if (todoCategory === 'complete') {
      appendDomElementToParent(wrapperEmptyTodoList.el, emptyTodoText);
    } else {
      appendDomElementToParent(
        wrapperEmptyTodoList.el,
        emptyTodoText,
        addTodoBtn
      );
    }
    appendDomElementToParent(parentElement, wrapperEmptyTodoList);
  };

  const loadTodoList = (name = 'inbox') => {
    const { getTodoByProjectName } = projectListModule;
    const todoCategory = document.getElementById('todo-category');
    const displayTodoList = document.querySelector('.todo-list');
    const currentDate = document.querySelector('.current-date');

    displayTodoList.textContent = '';

    if (name === 'complete') {
      todoCategory.textContent = `${name}d Tasks`;
    } else {
      todoCategory.textContent = name;
    }

    let todoList = null;

    if (name !== 'complete') {
      todoList = getTodoByProjectName(name);
    }

    switch (name) {
      case 'complete':
        todoList = todoListModule.getCompleteTodoList();
        if (todoList.length === 0) {
          displayEmptyTodoListMessage(displayTodoList, name);
          return;
        }
        renderCompletedTodoList(displayTodoList, todoList);
        break;
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

  const displayCompleteTodo = () => {
    const { listenerToLoadTodoList } = handleEventListenerModule;
    const completedTodoBtn = document.querySelector('.completed-todo');

    listenerToLoadTodoList(completedTodoBtn, () => loadTodoList('complete'));
  };

  const loadInboxTodoListWithHomeIcon = () => {
    const { listenerToLoadTodoList } = handleEventListenerModule;
    const homeBtn = document.getElementById('home-btn');
    listenerToLoadTodoList(homeBtn, loadTodoList);
  };

  const completeTodo = (todo) => {
    const { setCompleteTodo, deleteThisTodo } = todoListModule;
    const { deleteTodoInThisProject } = projectListModule;
    const { id, project } = todo;
    setCompleteTodo(todo);
    deleteThisTodo(id);
    deleteTodoInThisProject(project, id);

    setTimeout(() => {
      loadTodoList(project);
    }, 1000);
  };

  const renderTodoItem = (todo) => {
    const RED_FLAG_PRIORITY = '#db4c3f';
    const BLUE_FLAG_PRIORITY = '#3f73d6';
    const ORANGE_FLAG_PRIORITY = '#ff9933';

    const { listenerToInteractWithTodoItem } = handleEventListenerModule;
    const { editTodoSVG, priorityTodoSVG, deleteTodoSVG } = icons;

    const { title, project, priority } = todo;
    const todoItem = domElementFactory('div', '', 'todo-item');
    const leftSideOfTodoItem = domElementFactory('div', '', 'left');
    const rightSideOfTodoItem = domElementFactory('div', '', 'right');
    const editWrapper = domElementFactory('div', '', 'edit-wrapper');
    const priorityWrapper = domElementFactory('div', '', 'priority-wrapper');
    const deleteWrapper = domElementFactory('div', '', 'delete-wrapper');
    const doneWrapper = domElementFactory('div', '', 'done-wrapper');
    const todoTitleWrapper = domElementFactory('div', '', 'title-wrapper');
    const doneBtn = domElementFactory('input', '', 'done-todo-btn');
    const editBtn = domElementFactory('button', '', 'edit-todo-btn');
    const deleteBtn = domElementFactory('button', '', 'delete-todo-btn');
    const priorityBtn = domElementFactory('button', '', 'edit-priority-btn');
    const displayTodoTitle = domElementFactory('div', `${title}`, 'todo-title');

    let colorFlagPriority = ORANGE_FLAG_PRIORITY;

    if (priority === 'high') {
      colorFlagPriority = RED_FLAG_PRIORITY;
    } else if (priority === 'low') {
      colorFlagPriority = BLUE_FLAG_PRIORITY;
    }

    doneBtn.el.type = 'checkbox';
    editBtn.el.innerHTML = `${editTodoSVG()}`;
    priorityBtn.el.innerHTML = `${priorityTodoSVG(colorFlagPriority)}`;
    deleteBtn.el.innerHTML = `${deleteTodoSVG()}`;

    const popUpPriority = createEditPriorityPopUp(todo, () =>
      loadTodoList(project)
    );

    const interactButtons = [
      editBtn.el,
      deleteBtn.el,
      priorityBtn.el,
      doneBtn.el,
    ];

    const interactActions = [
      updateTodo,
      deleteTodo,
      completeTodo,
      () => displayEditTodoPriorityPopUp(popUpPriority.el),
    ];

    listenerToInteractWithTodoItem(todo, interactButtons, interactActions);

    appendDomElementToParent(doneWrapper.el, doneBtn);
    appendDomElementToParent(todoTitleWrapper.el, displayTodoTitle);
    appendDomElementToParent(
      leftSideOfTodoItem.el,
      doneWrapper,
      todoTitleWrapper
    );
    appendDomElementToParent(editWrapper.el, editBtn);
    appendDomElementToParent(priorityWrapper.el, priorityBtn, popUpPriority);
    appendDomElementToParent(deleteWrapper.el, deleteBtn);
    appendDomElementToParent(
      rightSideOfTodoItem.el,
      editWrapper,
      priorityWrapper,
      deleteWrapper
    );

    appendDomElementToParent(
      todoItem.el,
      leftSideOfTodoItem,
      rightSideOfTodoItem
    );

    return todoItem.el;
  };

  // ARRIVER ICI POUR LE REFACTOR

  const renderProjectItem = (project) => {
    const { listenerToInteractWithProjectItem } = handleEventListenerModule;
    const { deleteProjectSVG, circleColorProjectSVG } = icons;
    const wrapperProject = domElementFactory('div', '', 'project');
    const projectInfo = domElementFactory('div', '', 'project-info');
    const circleColorProject = domElementFactory('span', '', 'circle-color');
    const projectTitle = domElementFactory(
      'span',
      `${project.title}`,
      'project-name'
    );
    const deleteProjectBtn = domElementFactory(
      'button',
      '',
      'delete-project-btn'
    );
    projectInfo.el.dataset.list = `${project.title}`;

    deleteProjectBtn.el.innerHTML = `${deleteProjectSVG()}`;
    circleColorProject.el.innerHTML = `${circleColorProjectSVG()}`;

    listenerToInteractWithProjectItem(
      project,
      deleteProjectBtn.el,
      deleteProject
    );

    appendDomElementToParent(projectInfo.el, circleColorProject, projectTitle);
    appendDomElementToParent(wrapperProject.el, projectInfo, deleteProjectBtn);

    return wrapperProject.el;
  };

  const fillPlaceHolderFormEditWithTodoData = (data) => {
    const { description, project } = data;
    const desc = document.querySelector('#edit-todo-form textarea');
    displayProjectListInEditFormSelectChoice(project);

    const inputEditTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input')
    );

    desc.placeholder = description;

    inputEditTodo.forEach((input) => {
      const { id, type } = input;
      input.classList.add(`${id}-input`);
      input.value = '';
      input.placeholder = data[input.id];
      if (type === 'date') {
        const { dueDate } = data;
        const month = getMonth(new Date(`${dueDate}`));
        const day = getDate(new Date(`${dueDate}`)) + 1;
        const year = getYear(new Date(`${dueDate}`));
        input.valueAsDate = new Date(`${year}`, `${month}`, `${day}`);
      }
    });
  };

  // HERE

  const loadProjectList = () => {
    const { getAllProjectExceptDefaultProject } = projectListModule;
    const projectList = document.getElementById('display-projects-list');
    projectList.textContent = '';

    const projects = getAllProjectExceptDefaultProject();

    if (projects.length === 0) {
      const emptyProjectText = domElementFactory(
        'p',
        'You have no project',
        'empty-project-text'
      );
      projectList.appendChild(emptyProjectText.el);
    } else {
      projects.forEach((project) => {
        const projectAppended = renderProjectItem(project);
        projectList.appendChild(projectAppended);
      });
    }
  };

  const deleteTodo = (todo) => {
    const { deleteThisTodo } = todoListModule;
    const { deleteTodoInThisProject } = projectListModule;
    const todoCategory = document.getElementById('todo-category');
    const categoryTitle = todoCategory.textContent;
    const { project, id } = todo;

    deleteThisTodo(id);
    deleteTodoInThisProject(project, id);

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
    const { deleteThisProject } = projectListModule;
    const { id, title } = project;

    deleteThisProject(id, title);
    loadProjectList();
    loadTodoList();
    displayProjectListInSelectChoice();
  };

  const getUpdateTodoInfo = (projectInfo) => {
    const updatedTodo = Array.from(
      document.querySelectorAll('#edit-todo-form input')
    ).reduce(
      (acc, input) => ({
        ...acc,
        [input.id]: input.value || input.placeholder,
      }),
      {}
    );

    const descriptionTodo = document.querySelector('#edit-todo-form textarea');
    const { value, placeholder } = descriptionTodo;

    updatedTodo.description = value || placeholder;
    updatedTodo.project = projectInfo;

    return updatedTodo;
  };

  const addFormEventListenerToUpdateTodo = (editForm, wrapper) => {
    const { getTodo, updateTodo } = todoListModule;
    const { deleteTodoInThisProject, addTodoToProject } = projectListModule;
    const todoCategory = document.getElementById('todo-category');
    const categoryTitle = todoCategory.textContent;

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const selectProjectValue = document.querySelector(
        '#edit-project-select option:checked'
      );
      const allOptions = Array.from(
        document.querySelectorAll('#edit-project-select option')
      );

      const newProject = selectProjectValue.value;
      let olderProject = null;

      allOptions.forEach((option) => {
        if (option.attributes.initial) {
          olderProject = option.attributes.initial.value;
        }
      });

      const formId = editForm.getAttribute('data-id');

      const originalTodo = getTodo(formId);
      const updatedTodoInfo = getUpdateTodoInfo(newProject);
      const updatedTodo = updateTodo(originalTodo, updatedTodoInfo);

      const { id } = originalTodo;
      const { project } = updatedTodo;

      // this mean i have to moove todo in another folder project
      if (olderProject !== newProject) {
        deleteTodoInThisProject(olderProject, id);
        addTodoToProject(project, updatedTodo);
        loadTodoList(project);
      } else if (categoryTitle === 'upcoming' || categoryTitle === 'today') {
        loadTodoList(categoryTitle);
      } else {
        loadTodoList(olderProject);
      }

      wrapper.classList.toggle('hidden');
      editForm.reset();
    });
  };

  const updateTodo = (todo) => {
    const { id } = todo;
    const editTodoWrapper = document.querySelector('#edit-todo-wrapper');
    const editTodoForm = document.querySelector('#edit-todo-form');

    editTodoWrapper.classList.toggle('hidden');

    editTodoForm.dataset.id = id;

    fillPlaceHolderFormEditWithTodoData(todo);
    addFormEventListenerToUpdateTodo(editTodoForm, editTodoWrapper);
  };

  const getTodoInfo = () => {
    const newTodo = Array.from(
      document.querySelectorAll('#add-todo-form input')
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    const desc = document.querySelector('#add-todo-form textarea');

    const prioritySelect = document.querySelector('#add-todo-form #priority');
    const priorityValue =
      prioritySelect.options[prioritySelect.selectedIndex].value;

    newTodo.description = desc.value;
    newTodo.priority = priorityValue;

    const projectSelect = document.querySelector(
      '#add-todo-form #project-select'
    );
    const projectValue =
      projectSelect.options[projectSelect.selectedIndex].value;

    newTodo.project = projectValue;

    return newTodo;
  };

  const getNewProjectTitle = () => {
    const projectTitle = document.querySelector(
      '#add-project-form input'
    ).value;

    return projectTitle.toLowerCase();
  };

  const AddEventListenerToFetchTodoInProject = () => {
    const projectName = document.querySelectorAll(
      '.display-main-list, .project-info'
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
    const { addTodoToProject } = projectListModule;
    const addTodoForm = document.getElementById('add-todo-form');

    addTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoInfo = getTodoInfo();
      const newTodo = todoFactory2(newTodoInfo);
      const { project } = newTodo;
      console.log(newTodo);
      // A LA FIN DESTRUCTURER CETTE FONCTION ET LA RENOMMER EN AddNewTodo()
      todoListModule.addTodo(newTodo);
      addTodoToProject(project, newTodo);
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
      // IDEM DESTRUCTURER A LA fIN ET RENOMMER EN AddNewProject()
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
    loadInboxTodoListWithHomeIcon,
    loadProjectList,
    AddEventListenerToFetchTodoInProject,
    addTodo,
    addProject,
    displayAddTodoForm,
    displayAddProjectForm,
    displayCompleteTodo,
  };
})();

export default UI;
