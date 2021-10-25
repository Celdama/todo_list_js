import domElementFactory from './domElementFactory';
import appendDomElementToParent from './appendDomElementToParent';
import { handleTodoListModule } from '../modules/handleTodo';

const editTodoPriorityUi = (todo, newPriorityValue) => {
  handleTodoListModule.updateTodoPriority(todo, newPriorityValue);
};

const displayEditTodoPriorityPopUp = (popUp) => {
  const priorityPopUp = popUp;
  if (popUp.el.style.display === 'none') {
    priorityPopUp.el.style.display = 'inline';
  } else {
    priorityPopUp.el.style.display = 'none';
  }
};

const createEditPriorityPopUp = (todo, reloadTodoFunctionFromUI) => {
  const priorityChoice = ['high', 'medium', 'low'];
  const popUp = domElementFactory('div', '', 'pop-up-priority');
  priorityChoice.forEach((choice) => {
    const priorityBtn = domElementFactory('button', `${choice}`, 'priority-choice');
    priorityBtn.el.onclick = () => {
      editTodoPriorityUi(todo, priorityBtn.el.textContent);
      reloadTodoFunctionFromUI();
    };
    appendDomElementToParent(popUp.el, priorityBtn);
  });
  popUp.el.style.display = 'none';
  return popUp;
};

export { displayEditTodoPriorityPopUp, createEditPriorityPopUp };
