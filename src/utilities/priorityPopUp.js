import domElementFactory from './domElementFactory';
import appendDomElementToParent from './appendDomElementToParent';
import { handleTodoListModule as todoListModule } from '../modules/handleTodo';

const editTodoPriority = (todo, newPriorityValue) => {
  todoListModule.updateTodoPriority(todo, newPriorityValue.toLowerCase());
};

const displayEditTodoPriorityPopUp = (popUp) => {
  const priorityPopUp = popUp;
  const popUpDisplay = priorityPopUp.style.display === 'none'
    ? 'inline' : 'none';

  priorityPopUp.style.display = popUpDisplay;
};

const createEditPriorityPopUp = (todo, reloadTodoFunctionFromUI) => {
  console.log(todo.priority);
  const priorityChoice = ['High', 'Medium', 'Low'];
  const popUp = domElementFactory('div', '', 'pop-up-priority');

  priorityChoice.forEach((choice) => {
    const priorityBtn = domElementFactory('button', `${choice}`, 'priority-choice-btn');

    if (choice.toLowerCase() === todo.priority) {
      priorityBtn.el.dataset.selected = true;
    }

    priorityBtn.el.onclick = () => {
      const prioritySelected = priorityBtn.el.textContent;
      editTodoPriority(todo, prioritySelected);
      reloadTodoFunctionFromUI();
    };
    appendDomElementToParent(popUp.el, priorityBtn);
  });
  popUp.el.style.display = 'none';
  return popUp;
};

export { displayEditTodoPriorityPopUp, createEditPriorityPopUp };
